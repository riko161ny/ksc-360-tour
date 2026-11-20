/*
 * 位置決めツール（editor.html）: place link arrows and info marks on any spot
 * and copy the resulting `links` / `info` lines into tour-config.js.
 * Nothing here is used by the tour itself.
 */
'use strict';

(function() {
  var config = window.TOUR_CONFIG || {};
  var facilities = config.facilities || {};
  var photoDir = config.photoDir || 'photos';
  var STORAGE = 'ksc-editor-v1';

  var panoElement = document.querySelector('#pano');
  var readout = document.querySelector('#readout');
  var spotSelect = document.querySelector('#spotSelect');
  var kindSelect = document.querySelector('#kindSelect');
  var targetSelect = document.querySelector('#targetSelect');
  var itemsElement = document.querySelector('#items');
  var codeElement = document.querySelector('#code');
  var noPhotoMsg = document.querySelector('#noPhotoMsg');

  var viewer = new Marzipano.Viewer(panoElement, { controls: { mouseViewMode: 'drag' } });
  var spots = config.spots || [];
  var saved = load();
  var current = null;   // { cfg, scene, view, items: [...] }
  var selected = null;

  spots.forEach(function(cfg, i) {
    var o = document.createElement('option');
    o.value = cfg.id;
    o.textContent = (i + 1) + '. ' + cfg.name;
    spotSelect.appendChild(o);
  });

  function fillTargets() {
    targetSelect.innerHTML = '';
    if (kindSelect.value === 'link') {
      spots.forEach(function(cfg, i) {
        var o = document.createElement('option');
        o.value = cfg.id;
        o.textContent = '→ ' + (i + 1) + '. ' + cfg.name;
        targetSelect.appendChild(o);
      });
    } else {
      Object.keys(facilities).forEach(function(key) {
        var o = document.createElement('option');
        o.value = key;
        o.textContent = facilities[key].name + '（' + key + '）';
        targetSelect.appendChild(o);
      });
    }
  }
  kindSelect.addEventListener('change', fillTargets);
  fillTargets();

  spotSelect.addEventListener('change', function() { openSpot(spotSelect.value); });

  document.querySelector('#addCenter').addEventListener('click', function() {
    if (!current || !current.view) { return; }
    addItem({ yaw: current.view.yaw(), pitch: current.view.pitch() });
  });

  panoElement.addEventListener('dblclick', function(event) {
    if (!current || !current.view) { return; }
    var rect = panoElement.getBoundingClientRect();
    var c = current.view.screenToCoordinates({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    if (c) { addItem(c); }
  });

  document.querySelector('#copyCode').addEventListener('click', function() {
    codeElement.select();
    try {
      navigator.clipboard.writeText(codeElement.value);
    } catch (e) {
      document.execCommand('copy');
    }
  });

  document.querySelector('#resetSpot').addEventListener('click', function() {
    if (!current) { return; }
    delete saved[current.cfg.id];
    store();
    openSpot(current.cfg.id);
  });

  function addItem(pos) {
    var item = kindSelect.value === 'link'
      ? { kind: 'link', target: targetSelect.value, yaw: pos.yaw, pitch: pos.pitch, rotation: 0 }
      : { kind: 'info', facility: targetSelect.value, yaw: pos.yaw, pitch: pos.pitch };
    current.items.push(item);
    placeItem(item);
    select(item);
    changed();
  }

  function openSpot(id) {
    var cfg = spots.filter(function(s) { return s.id === id; })[0];
    if (!cfg) { return; }
    location.hash = id;
    spotSelect.value = id;
    selected = null;
    var items = saved[id] || [].concat(
      (cfg.links || []).map(function(l) { return { kind: 'link', target: l.target, yaw: l.yaw, pitch: l.pitch || 0, rotation: l.rotation || 0 }; }),
      (cfg.info || []).map(function(h) { return { kind: 'info', facility: h.facility, yaw: h.yaw, pitch: h.pitch || 0 }; })
    );
    items = JSON.parse(JSON.stringify(items));
    if (current && current.scene) {
      viewer.destroyScene(current.scene);
    }
    var state = { cfg: cfg, scene: null, view: null, items: items };
    current = state;
    renderList();
    renderCode();

    var img = new Image();
    img.onload = function() {
      if (current !== state) { return; }
      noPhotoMsg.hidden = true;
      var width = Math.min(img.naturalWidth, 4096);
      var el = img;
      if (img.naturalWidth > width) {
        el = document.createElement('canvas');
        el.width = width; el.height = width / 2;
        el.getContext('2d').drawImage(img, 0, 0, el.width, el.height);
      }
      var source = new Marzipano.SingleAssetSource(new Marzipano.StaticAsset(el));
      var geometry = new Marzipano.EquirectGeometry([{ width: width }]);
      var limiter = Marzipano.RectilinearView.limit.traditional(width / 4, 100 * Math.PI / 180, 120 * Math.PI / 180);
      state.view = new Marzipano.RectilinearView(cfg.view || { yaw: 0, pitch: 0, fov: Math.PI / 2 }, limiter);
      state.scene = viewer.createScene({ source: source, geometry: geometry, view: state.view, pinFirstLevel: true });
      state.items.forEach(placeItem);
      state.view.addEventListener('change', updateReadout);
      state.scene.switchTo({ transitionDuration: 0 });
      updateReadout();
    };
    img.onerror = function() {
      if (current !== state) { return; }
      noPhotoMsg.hidden = false;
      readout.textContent = id + '  写真なし';
    };
    img.src = cfg.photo || (photoDir + '/' + cfg.id + '.jpg');
  }

  function updateReadout() {
    if (!current || !current.view) { return; }
    var v = current.view;
    readout.textContent = current.cfg.id + '  中央  yaw: ' + v.yaw().toFixed(3) + '  pitch: ' + v.pitch().toFixed(3) + '  fov: ' + v.fov().toFixed(3);
  }

  // ---- marks in the photo ----
  function placeItem(item) {
    if (!current || !current.scene) { return; }
    var el = item.kind === 'link' ? linkElement(item) : infoElement(item);
    el.classList.add('editor-mark');
    item.el = el;
    item.hotspot = current.scene.hotspotContainer().createHotspot(el, { yaw: item.yaw, pitch: item.pitch });
    makeDraggable(item);
  }

  function linkElement(item) {
    var wrapper = document.createElement('div');
    wrapper.className = 'hotspot';
    var inner = document.createElement('div');
    inner.className = 'link-hotspot';
    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.className = 'link-hotspot-icon';
    icon.draggable = false;
    icon.style.transform = 'rotate(' + (item.rotation || 0) + 'rad)';
    var label = document.createElement('div');
    label.className = 'link-hotspot-label';
    var t = spots.filter(function(s) { return s.id === item.target; })[0];
    label.textContent = t ? t.name : item.target;
    inner.appendChild(icon);
    inner.appendChild(label);
    wrapper.appendChild(inner);
    return wrapper;
  }

  function infoElement(item) {
    var f = facilities[item.facility] || { name: item.facility };
    var wrapper = document.createElement('div');
    wrapper.className = 'hotspot';
    var inner = document.createElement('div');
    if (f.hotspot && f.hotspot.style === 'float3d') {
      inner.className = 'float-hotspot';
      inner.innerHTML = '<span class="float-body"><span class="float-main"></span>' + (f.hotspot.sub ? '<span class="float-sub"></span>' : '') + '</span>';
      inner.querySelector('.float-main').textContent = f.hotspot.text || f.name;
      if (f.hotspot.sub) { inner.querySelector('.float-sub').textContent = f.hotspot.sub; }
    } else {
      inner.className = 'info-hotspot';
      var icon = document.createElement('span');
      icon.className = 'info-hotspot-icon' + (f.icon ? '' : ' letter');
      icon.textContent = f.icon || 'i';
      var label = document.createElement('span');
      label.className = 'info-hotspot-label';
      label.textContent = f.name;
      inner.appendChild(icon);
      inner.appendChild(label);
    }
    wrapper.appendChild(inner);
    return wrapper;
  }

  function makeDraggable(item) {
    var el = item.el;
    var dragging = false;
    function stop(e) { e.stopPropagation(); }
    ['touchstart', 'touchmove', 'wheel'].forEach(function(t) { el.addEventListener(t, stop); });
    el.addEventListener('mousedown', function(e) {
      e.stopPropagation(); e.preventDefault();
      dragging = true;
      select(item);
    });
    window.addEventListener('mousemove', function(e) {
      if (!dragging || !current || !current.view) { return; }
      var rect = panoElement.getBoundingClientRect();
      var c = current.view.screenToCoordinates({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      if (!c) { return; }
      item.yaw = c.yaw; item.pitch = c.pitch;
      item.hotspot.setPosition({ yaw: item.yaw, pitch: item.pitch });
      syncInputs(item);
      renderCode();
    });
    window.addEventListener('mouseup', function() {
      if (dragging) { dragging = false; changed(); }
    });
  }

  function select(item) {
    selected = item;
    current.items.forEach(function(it) {
      if (it.el) { it.el.classList.toggle('selected', it === item); }
      if (it.card) { it.card.classList.toggle('selected', it === item); }
    });
  }

  // ---- side list ----
  function renderList() {
    itemsElement.innerHTML = '';
    if (!current.items.length) {
      itemsElement.innerHTML = '<p class="note">まだありません</p>';
    }
    current.items.forEach(function(item) {
      var card = document.createElement('div');
      card.className = 'item';
      item.card = card;
      var name = item.kind === 'link'
        ? '移動の矢印 → ' + ((spots.filter(function(s) { return s.id === item.target; })[0] || {}).name || item.target)
        : '情報マーク：' + ((facilities[item.facility] || {}).name || item.facility);
      card.innerHTML = '<div class="item-title"><span></span><span class="row" style="flex:none"><span class="btn small light" data-act="center">中央へ</span><span class="btn small light" data-act="look">見る</span><span class="btn small light" data-act="del">削除</span></span></div>' +
        '<div class="row"><span class="mini">yaw</span><input type="number" step="0.01" data-k="yaw"><span class="mini">pitch</span><input type="number" step="0.01" data-k="pitch"></div>' +
        (item.kind === 'link' ? '<div class="row" style="margin-top:6px"><span class="mini">rotation</span><input type="number" step="0.1" data-k="rotation"></div>' : '');
      card.querySelector('.item-title span').textContent = name;
      card.addEventListener('click', function() { select(item); });
      Array.prototype.forEach.call(card.querySelectorAll('input'), function(input) {
        input.addEventListener('input', function() {
          var v = parseFloat(input.value);
          if (isNaN(v)) { return; }
          item[input.dataset.k] = v;
          if (item.hotspot) { item.hotspot.setPosition({ yaw: item.yaw, pitch: item.pitch }); }
          if (input.dataset.k === 'rotation' && item.el) {
            item.el.querySelector('.link-hotspot-icon').style.transform = 'rotate(' + v + 'rad)';
          }
          changed(true);
        });
      });
      card.querySelector('[data-act=center]').addEventListener('click', function(e) {
        e.stopPropagation();
        if (!current.view) { return; }
        item.yaw = current.view.yaw(); item.pitch = current.view.pitch();
        if (item.hotspot) { item.hotspot.setPosition({ yaw: item.yaw, pitch: item.pitch }); }
        syncInputs(item); changed(true);
      });
      card.querySelector('[data-act=look]').addEventListener('click', function(e) {
        e.stopPropagation();
        if (current.view) { current.view.setParameters({ yaw: item.yaw, pitch: item.pitch }); }
      });
      card.querySelector('[data-act=del]').addEventListener('click', function(e) {
        e.stopPropagation();
        if (item.hotspot && current.scene) { current.scene.hotspotContainer().destroyHotspot(item.hotspot); }
        current.items.splice(current.items.indexOf(item), 1);
        changed();
      });
      itemsElement.appendChild(card);
      syncInputs(item);
    });
    if (selected) { select(selected); }
  }

  function syncInputs(item) {
    if (!item.card) { return; }
    Array.prototype.forEach.call(item.card.querySelectorAll('input'), function(input) {
      if (document.activeElement !== input) {
        input.value = (item[input.dataset.k] || 0).toFixed(3);
      }
    });
  }

  function renderCode() {
    var r = function(n) { return Math.round(n * 1000) / 1000; };
    var links = current.items.filter(function(i) { return i.kind === 'link'; }).map(function(i) {
      return '{ target: "' + i.target + '", yaw: ' + r(i.yaw) + ', pitch: ' + r(i.pitch) + (i.rotation ? ', rotation: ' + r(i.rotation) : '') + ' }';
    });
    var info = current.items.filter(function(i) { return i.kind === 'info'; }).map(function(i) {
      return '{ yaw: ' + r(i.yaw) + ', pitch: ' + r(i.pitch) + ', facility: "' + i.facility + '" }';
    });
    codeElement.value = '// ' + current.cfg.id + ' ' + current.cfg.name + '\n' +
      'links: [' + (links.length ? '\n  ' + links.join(',\n  ') + '\n' : '') + '],\n' +
      'info: [' + (info.length ? '\n  ' + info.join(',\n  ') + '\n' : '') + '],';
  }

  function changed(keepList) {
    saved[current.cfg.id] = current.items.map(function(i) {
      var o = {}; Object.keys(i).forEach(function(k) { if (['el', 'hotspot', 'card'].indexOf(k) < 0) { o[k] = i[k]; } }); return o;
    });
    store();
    if (!keepList) { renderList(); }
    renderCode();
  }

  function load() {
    try { return JSON.parse(localStorage.getItem(STORAGE)) || {}; } catch (e) { return {}; }
  }
  function store() {
    try { localStorage.setItem(STORAGE, JSON.stringify(saved)); } catch (e) { /* not saved */ }
  }

  var start = decodeURIComponent(location.hash.slice(1));
  openSpot(spots.some(function(s) { return s.id === start; }) ? start : (spots[0] || {}).id);
})();
