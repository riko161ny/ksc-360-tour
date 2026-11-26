/*
 * 正門から始まる探索ガイド。
 * - URL に地点の指定がないときだけ、正門で歓迎のアーチ文字 → 説明カード → 操作の吹き出し → 「まずは何が知りたい？」を出します。
 * - 学部・学生生活のテーマから、撮影済みの地点へ直接移動できます（移動はツアー本体の switchSpot を使います）。
 * - 文章はすべて tour-config.js の guide にあり、ほかの文章と同じしくみで翻訳されます。
 * index.js が TourGuide.init(api) を呼びます。
 */
'use strict';

(function() {
  var api = null;
  var overlay = null;      // 中央のパネル（テーマ選択など）
  var welcomeCard = null;  // 正門の説明カード
  var tipsBar = null;      // 操作説明のボタン列
  var archHotspot = null;
  var tipHotspots = [];
  var toastElement = null;
  var toastTimer = null;
  var screen = null;       // 今出している画面 { name, args }
  var tipIndex = 0;

  function cfg() { return (window.TOUR_CONFIG && window.TOUR_CONFIG.guide) || null; }
  function facilities() { return (window.TOUR_CONFIG && window.TOUR_CONFIG.facilities) || {}; }

  function el(tag, className, text) {
    var e = document.createElement(tag);
    if (className) { e.className = className; }
    if (text !== undefined && text !== null) { e.textContent = text; }
    return e;
  }

  function button(className, text, onClick) {
    var b = el('button', className, text);
    b.type = 'button';
    b.addEventListener('click', onClick);
    return b;
  }

  function paragraphs(parent, text, className) {
    (Array.isArray(text) ? text : text ? [text] : []).forEach(function(t) {
      parent.appendChild(el('p', className || 'guide-p', t));
    });
  }

  function isMobile() { return document.body.classList.contains('mobile'); }

  // Marzipano は渡した要素の transform を書き換えるので、中心合わせ用の要素を1枚かぶせる
  function hotspotHolder(child) {
    var holder = el('div', 'guide-hotspot');
    holder.appendChild(child);
    return holder;
  }

  // 下のバー（地点一覧・操作ボタン）の上に置く
  function placeAboveBar(elem) {
    var bar = document.getElementById('bottomBar');
    var h = bar ? bar.getBoundingClientRect().height : 0;
    elem.style.bottom = Math.round(h + 12) + 'px';
    elem.style.maxHeight = Math.max(200, Math.round(window.innerHeight - h - 12 - 76)) + 'px';
    elem.style.overflowY = 'auto';
  }

  // ---------- 正門の歓迎（アーチ文字と説明カード） ----------
  function startWelcome() {
    var g = cfg();
    if (!g) { return; }
    document.body.classList.add('guide-welcome');
    showArch();
    showWelcomeCard();
  }

  function archSvg(g) {
    var lines = isMobile() && g.arch.lines && g.arch.lines.length ? g.arch.lines : [g.arch.text];
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    var two = lines.length > 1;
    svg.setAttribute('viewBox', two ? '0 0 600 300' : '0 0 1000 260');
    svg.setAttribute('class', 'guide-arch-svg');
    svg.setAttribute('aria-hidden', 'true');
    var defs = document.createElementNS(ns, 'defs');
    svg.appendChild(defs);
    var paths = two ? ['M 110 150 Q 300 50 490 150', 'M 30 270 Q 300 140 570 270'] : ['M 40 240 Q 500 20 960 240'];
    lines.forEach(function(line, i) {
      var id = 'guideArch' + i;
      var path = document.createElementNS(ns, 'path');
      path.setAttribute('id', id);
      path.setAttribute('d', paths[i]);
      path.setAttribute('fill', 'none');
      defs.appendChild(path);
      var text = document.createElementNS(ns, 'text');
      text.setAttribute('class', 'guide-arch-text' + (two ? (i === 0 ? ' small' : ' two') : ''));
      text.setAttribute('text-anchor', 'middle');
      var tp = document.createElementNS(ns, 'textPath');
      tp.setAttribute('href', '#' + id);
      tp.setAttribute('startOffset', '50%');
      tp.textContent = line;
      // 言語によって文字数が変わるので、弧からはみ出さない大きさにする（全角は1、半角は約0.56文字分）
      var weight = 0;
      for (var c = 0; c < line.length; c++) { weight += line.charCodeAt(c) > 0x2e80 ? 1 : 0.56; }
      var base = two ? (i === 0 ? 46 : 36) : 42;
      var pathLength = two ? (i === 0 ? 420 : 600) : 1040;
      text.style.fontSize = Math.min(base, Math.floor(pathLength * (two ? 0.78 : 0.84) / Math.max(weight, 1))) + 'px';
      text.appendChild(tp);
      svg.appendChild(text);
    });
    return svg;
  }

  function showArch() {
    var g = cfg();
    hideArch();
    var container = api.hotspotContainer(g.startSpot);
    if (!container) { return; }
    var wrap = el('div', 'guide-arch');
    wrap.setAttribute('role', 'img');
    wrap.setAttribute('aria-label', g.arch.text);
    var float = el('div', 'guide-arch-float');
    float.appendChild(archSvg(g));
    wrap.appendChild(float);
    archHotspot = { container: container, hotspot: container.createHotspot(hotspotHolder(wrap), { yaw: g.arch.yaw, pitch: g.arch.pitch }) };
  }

  function hideArch() {
    if (archHotspot) {
      try { archHotspot.container.destroyHotspot(archHotspot.hotspot); } catch (e) { /* already gone */ }
      archHotspot = null;
    }
  }

  function showWelcomeCard() {
    var g = cfg();
    removeWelcomeCard();
    welcomeCard = el('section', 'guide-welcome-card guide-glass');
    welcomeCard.setAttribute('role', 'dialog');
    welcomeCard.setAttribute('aria-label', g.welcome.title);
    welcomeCard.appendChild(el('h2', 'guide-welcome-title', g.welcome.title));
    paragraphs(welcomeCard, g.welcome.text);
    var disclaimer = window.TOUR_CONFIG.disclaimer;
    if (disclaimer) { welcomeCard.appendChild(el('p', 'guide-disclaimer', disclaimer)); }
    var row = el('div', 'guide-actions-row');
    row.appendChild(button('guide-primary', g.welcome.button, function() { startTips(); }));
    welcomeCard.appendChild(row);
    document.body.appendChild(welcomeCard);
    placeAboveBar(welcomeCard);
    screen = { name: 'welcome' };
  }

  function removeWelcomeCard() {
    if (welcomeCard) { welcomeCard.remove(); welcomeCard = null; }
  }

  // ---------- 操作説明（空間に浮かぶ吹き出し） ----------
  function startTips() {
    removeWelcomeCard();
    tipIndex = 0;
    screen = { name: 'tips' };
    renderTips();
  }

  function renderTips() {
    var g = cfg();
    clearTips();
    var items = g.tips.items || [];
    var mobile = isMobile();
    if (!mobile) {
      // パソコン：今の向きを中心に、3つの吹き出しを左右に並べて空間に置く
      var container = api.currentHotspotContainer();
      var view = api.currentView();
      if (container && view) {
        var spread = Math.min(0.62, view.fov * 0.42);
        items.forEach(function(item, i) {
          var yaw = view.yaw + (i - (items.length - 1) / 2) * spread;
          var pitch = view.pitch + (i === 1 ? -0.02 : 0.06);
          var bubble = tipBubble(item, i);
          tipHotspots.push({ container: container, hotspot: container.createHotspot(hotspotHolder(bubble), { yaw: yaw, pitch: pitch }) });
        });
      }
    }
    tipsBar = el('div', 'guide-tips-bar guide-glass' + (mobile ? ' mobile' : ''));
    if (mobile) {
      // スマートフォン：1つずつ表示
      var item = items[tipIndex];
      var single = tipBubble(item, tipIndex);
      single.classList.add('single');
      tipsBar.appendChild(single);
      var dots = el('div', 'guide-dots');
      items.forEach(function(_, i) { dots.appendChild(el('span', 'guide-dot' + (i === tipIndex ? ' on' : ''))); });
      tipsBar.appendChild(dots);
    }
    tipsBar.appendChild(el('p', 'guide-tips-note', g.tips.note));
    var row = el('div', 'guide-actions-row');
    row.appendChild(button('guide-secondary', g.tips.skip, function() { finishTips(); }));
    var last = !mobile || tipIndex >= items.length - 1;
    row.appendChild(button('guide-primary', last ? g.tips.next : g.tips.more, function() {
      if (last) { finishTips(); } else { tipIndex += 1; renderTips(); }
    }));
    tipsBar.appendChild(row);
    document.body.appendChild(tipsBar);
    placeAboveBar(tipsBar);
  }

  function tipBubble(item, i) {
    var wrap = el('div', 'guide-tip');
    var bob = el('div', 'guide-tip-float');
    bob.style.animationDelay = (i * 0.6) + 's';
    var bubble = el('div', 'guide-tip-bubble');
    bubble.appendChild(el('span', 'guide-tip-num', String(i + 1)));
    bubble.appendChild(el('strong', 'guide-tip-title', item.title));
    bubble.appendChild(el('span', 'guide-tip-text', item.text));
    bob.appendChild(bubble);
    ['d1', 'd2', 'd3'].forEach(function(d) { bob.appendChild(el('span', 'guide-tip-dot ' + d)); });
    wrap.appendChild(bob);
    return wrap;
  }

  function clearTips() {
    tipHotspots.forEach(function(h) {
      try { h.container.destroyHotspot(h.hotspot); } catch (e) { /* already gone */ }
    });
    tipHotspots = [];
    if (tipsBar) { tipsBar.remove(); tipsBar = null; }
  }

  function finishTips() {
    clearTips();
    api.markHelpSeen();
    openChoose();
  }

  // ---------- 中央のパネル（テーマ選択・学部・学生生活） ----------
  function ensureOverlay() {
    if (overlay) { return overlay; }
    overlay = el('div', 'guide-overlay');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.addEventListener('click', function(e) { if (e.target === overlay) { close(); } });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay && overlay.classList.contains('visible')) { close(); }
    });
    document.body.appendChild(overlay);
    return overlay;
  }

  function show(name, args) {
    var g = cfg();
    if (!g) { return; }
    clearTips();
    removeWelcomeCard();
    api.closePanel();
    screen = { name: name, args: args || {} };
    var o = ensureOverlay();
    o.innerHTML = '';
    var card = el('section', 'guide-panel guide-glass');
    var head = el('div', 'guide-panel-head');
    var back = backTarget(name, screen.args);
    if (back) {
      head.appendChild(button('guide-back', '← ' + g.labels.back, function() { show(back.name, back.args); }));
    }
    var x = button('guide-close', '×', function() { close(); });
    x.setAttribute('aria-label', g.labels.close);
    head.appendChild(x);
    card.appendChild(head);
    var body = el('div', 'guide-panel-body');
    RENDER[name](body, screen.args);
    card.appendChild(body);
    o.appendChild(card);
    var heading = card.querySelector('h2');
    if (heading) { o.setAttribute('aria-label', heading.textContent); }
    document.body.classList.add('guide-open');
    o.classList.add('visible');
    card.scrollTop = 0;
    var first = card.querySelector('.guide-panel-body button, .guide-panel-body a');
    if (first && !isMobile()) { first.focus({ preventScroll: true }); }
  }

  function backTarget(name, args) {
    if (name === 'faculties' || name === 'life') { return { name: 'choose' }; }
    if (name === 'faculty') { return { name: 'faculties' }; }
    if (name === 'facultyPlaces') { return { name: 'faculty', args: { id: args.id } }; }
    if (name === 'lifeCategory') { return { name: 'life' }; }
    return null;
  }

  function close() {
    clearTips();
    removeWelcomeCard();
    hideArch();
    document.body.classList.remove('guide-open', 'guide-welcome');
    if (overlay) { overlay.classList.remove('visible'); overlay.innerHTML = ''; }
    screen = null;
  }

  function facultyList() {
    var fg = window.TOUR_CONFIG.facultyGuide || {};
    return fg.faculties || [];
  }

  function findFaculty(id) {
    var list = facultyList();
    for (var i = 0; i < list.length; i++) { if (list[i].id === id) { return list[i]; } }
    return null;
  }

  function choiceCard(opt, onClick) {
    var c = el('button', 'guide-choice');
    c.type = 'button';
    c.appendChild(el('span', 'guide-choice-title', opt.title));
    if (opt.subtitle) { c.appendChild(el('span', 'guide-choice-sub', opt.subtitle)); }
    if (opt.text) { c.appendChild(el('span', 'guide-choice-text', opt.text)); }
    if (opt.button) { c.appendChild(el('span', 'guide-choice-button', opt.button + ' →')); }
    c.addEventListener('click', onClick);
    return c;
  }

  // 行き先のカード（施設名・説明・360度で見られるもの・ボタン）
  function placeCard(place) {
    var g = cfg();
    var c = el('article', 'guide-place');
    c.appendChild(el('h3', 'guide-place-title', place.title));
    if (place.text) { c.appendChild(el('p', 'guide-place-text', place.text)); }
    if (place.see) {
      var see = el('p', 'guide-place-see');
      see.appendChild(el('span', 'guide-place-see-label', g.labels.canSee));
      see.appendChild(el('span', '', place.see));
      c.appendChild(see);
    }
    var row = el('div', 'guide-place-actions');
    row.appendChild(button('guide-primary', g.labels.go, function() { goTo(place); }));
    if (place.facility && facilities()[place.facility]) {
      row.appendChild(button('guide-secondary', g.labels.detail, function() {
        close();
        api.openFacility(place.facility);
      }));
    }
    c.appendChild(row);
    return c;
  }

  function goTo(place) {
    close();
    api.goTo(place.spot, function() {
      if (place.arrive) { toast(place.arrive); }
    });
  }

  var RENDER = {
    choose: function(body) {
      var g = cfg();
      body.appendChild(el('h2', 'guide-title', g.choose.title));
      body.appendChild(el('p', 'guide-subtitle', g.choose.subtitle));
      var grid = el('div', 'guide-choices');
      grid.appendChild(choiceCard(g.choose.study, function() { show('faculties'); }));
      grid.appendChild(choiceCard(g.choose.life, function() { show('life'); }));
      body.appendChild(grid);
      var row = el('div', 'guide-free-row');
      row.appendChild(button('guide-secondary', g.choose.walk, function() { walk(); }));
      row.appendChild(button('guide-link', g.choose.free, function() { close(); }));
      body.appendChild(row);
    },
    change: function(body) {
      var g = cfg();
      body.appendChild(el('h2', 'guide-title', g.change.title));
      body.appendChild(el('p', 'guide-subtitle', g.change.note));
      var list = el('div', 'guide-change-list');
      list.appendChild(button('guide-change-item', g.change.study, function() { show('faculties'); }));
      list.appendChild(button('guide-change-item', g.change.life, function() { show('life'); }));
      list.appendChild(button('guide-change-item', g.change.free, function() { close(); }));
      body.appendChild(list);
    },
    faculties: function(body) {
      var g = cfg();
      body.appendChild(el('h2', 'guide-title', g.study.title));
      body.appendChild(el('p', 'guide-subtitle', g.study.text));
      var grid = el('div', 'guide-cards');
      facultyList().forEach(function(f) {
        var c = el('article', 'guide-faculty');
        c.appendChild(el('h3', 'guide-place-title', f.name));
        if (f.lead) { c.appendChild(el('p', 'guide-place-text', f.lead)); }
        var row = el('div', 'guide-place-actions');
        row.appendChild(button('guide-primary', g.study.button, function() { show('faculty', { id: f.id }); }));
        c.appendChild(row);
        grid.appendChild(c);
      });
      body.appendChild(grid);
    },
    faculty: function(body, args) {
      var g = cfg();
      var f = findFaculty(args.id);
      if (!f) { return; }
      body.appendChild(el('h2', 'guide-title', f.name));
      body.appendChild(el('p', 'guide-catch', g.study.catchphrase));
      var box = el('div', 'guide-faculty-detail');
      if (f.lead) { box.appendChild(el('p', 'guide-p', f.lead)); }
      if (f.fields) {
        box.appendChild(el('h3', 'guide-mini-title', g.study.fieldsTitle));
        box.appendChild(el('p', 'guide-p', f.fields));
      }
      if (f.departments && f.departments.length) {
        box.appendChild(el('h3', 'guide-mini-title', g.study.departmentsTitle));
        var chips = el('div', 'guide-chips');
        f.departments.forEach(function(d) { chips.appendChild(el('span', 'guide-chip', d.name)); });
        box.appendChild(chips);
      }
      body.appendChild(box);
      var row = el('div', 'guide-big-actions');
      row.appendChild(button('guide-secondary', g.study.detailButton, function() {
        close();
        api.openFaculty(f.id);
      }));
      if ((g.study.places[f.id] || []).length) {
        row.appendChild(button('guide-primary', g.study.placesButton, function() { show('facultyPlaces', { id: f.id }); }));
      }
      body.appendChild(row);
    },
    facultyPlaces: function(body, args) {
      var g = cfg();
      var f = findFaculty(args.id);
      body.appendChild(el('h2', 'guide-title', g.study.placesTitle));
      if (f) { body.appendChild(el('p', 'guide-catch', f.name)); }
      body.appendChild(el('p', 'guide-subtitle', g.study.placesText));
      var grid = el('div', 'guide-cards');
      (g.study.places[args.id] || []).filter(function(p) { return api.hasSpot(p.spot); }).forEach(function(p) { grid.appendChild(placeCard(p)); });
      body.appendChild(grid);
      body.appendChild(el('p', 'guide-note', g.study.placesNote));
    },
    life: function(body) {
      var g = cfg();
      body.appendChild(el('h2', 'guide-title', g.life.title));
      body.appendChild(el('p', 'guide-subtitle', g.life.subtitle));
      var grid = el('div', 'guide-choices four');
      g.life.categories.forEach(function(c) {
        grid.appendChild(choiceCard({ title: c.title, text: c.text }, function() { show('lifeCategory', { id: c.id }); }));
      });
      body.appendChild(grid);
    },
    lifeCategory: function(body, args) {
      var g = cfg();
      var cat = null;
      g.life.categories.forEach(function(c) { if (c.id === args.id) { cat = c; } });
      if (!cat) { return; }
      body.appendChild(el('h2', 'guide-title', cat.title));
      body.appendChild(el('p', 'guide-subtitle', cat.lead || cat.text));
      var grid = el('div', 'guide-cards');
      cat.places.filter(function(p) { return api.hasSpot(p.spot); }).forEach(function(p) { grid.appendChild(placeCard(p)); });
      body.appendChild(grid);
      if (cat.links && cat.links.length) {
        var row = el('div', 'guide-big-actions');
        cat.links.forEach(function(l) {
          if (!facilities()[l.facility]) { return; }
          row.appendChild(button('guide-secondary', l.label, function() { close(); api.openFacility(l.facility); }));
        });
        body.appendChild(row);
      }
    }
  };

  function openChoose() { show('choose'); }

  // 正門から歩いて探検する：正門へ（いなければ）移動して、短い案内と矢印の強調
  function walk() {
    var g = cfg();
    close();
    api.goTo(g.startSpot, function() {
      toast(g.walk.title, g.walk.text);
      api.highlightLinks();
    });
  }

  // ---------- 短い案内（数秒で消える） ----------
  function toast(title, text) {
    var g = cfg();
    if (toastElement) { toastElement.remove(); }
    clearTimeout(toastTimer);
    toastElement = el('div', 'guide-toast guide-glass');
    toastElement.setAttribute('role', 'status');
    var msg = el('div', 'guide-toast-text');
    msg.appendChild(el('strong', '', title));
    if (text) { msg.appendChild(el('span', '', text)); }
    toastElement.appendChild(msg);
    var x = button('guide-toast-close', '×', function() { hideToast(); });
    x.setAttribute('aria-label', g.labels.close);
    toastElement.appendChild(x);
    document.body.appendChild(toastElement);
    toastTimer = setTimeout(hideToast, 6000);
  }

  function hideToast() {
    clearTimeout(toastTimer);
    if (toastElement) {
      var t = toastElement;
      toastElement = null;
      t.classList.add('leaving');
      setTimeout(function() { t.remove(); }, 300);
    }
  }

  // ---------- 施設カードの下の「次はここを見てみよう！」 ----------
  function keyOf(facility) {
    var all = facilities();
    for (var k in all) { if (all[k] === facility) { return k; } }
    return null;
  }

  function nextFor(facility) {
    var g = cfg();
    if (!g || !g.next || !api) { return null; }
    var key = keyOf(facility);
    var n = key && g.next[key];
    if (!n) { return null; }
    if (n.spot && !api.hasSpot(n.spot)) { return null; }
    if (n.facility && !facilities()[n.facility]) { return null; }
    var box = el('section', 'guide-next');
    box.appendChild(el('span', 'guide-next-label', g.labels.nextTitle));
    box.appendChild(el('p', 'guide-next-text', n.text));
    box.appendChild(button('guide-primary', n.button + ' →', function() {
      if (n.spot) {
        api.closePanel();
        api.goTo(n.spot);
      } else if (n.facility) {
        api.openFacility(n.facility);
      } else if (n.life) {
        show('lifeCategory', { id: n.life });
      }
    }));
    return box;
  }

  // 言語が変わったら、今出している画面を描き直す
  function refresh() {
    if (!screen) { return; }
    if (archHotspot) { showArch(); }
    if (screen.name === 'welcome') { showWelcomeCard(); return; }
    if (screen.name === 'tips') { renderTips(); return; }
    if (overlay && overlay.classList.contains('visible')) { show(screen.name, screen.args); }
  }

  window.TourGuide = {
    init: function(a) { api = a; },
    startWelcome: startWelcome,
    openChoose: openChoose,
    openChange: function() { show('change'); },
    close: close,
    refresh: refresh,
    nextFor: nextFor,
    toast: toast,
    isActive: function() { return !!screen; }
  };
})();
