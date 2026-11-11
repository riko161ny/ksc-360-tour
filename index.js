/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Modified for the Kobe-Sanda campus tour: spots (one equirectangular photo
 * each) come from tour-config.js, with a campus map, thumbnail strip and
 * info panel. A spot without a photo yet shows a "coming soon" screen.
 */
'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var screenfull = window.screenfull;
  var config = window.TOUR_CONFIG || {};
  var facilities = config.facilities || {};
  var photoDir = config.photoDir || 'photos';

  var STORAGE_VISITED = 'kscTour.visited';
  var STORAGE_HELP = 'kscTour.helpSeen';
  var DEFAULT_VIEW = { yaw: 0, pitch: 0, fov: Math.PI / 2 };

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#sceneName');
  var thumbStripElement = document.querySelector('#thumbStrip');
  var areaTabsElement = document.querySelector('#areaTabs');
  var thumbToggleElement = document.querySelector('#thumbToggle');
  var mapToggleElement = document.querySelector('#mapToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');
  var helpModalElement = document.querySelector('#helpModal');
  var loadingElement = document.querySelector('#loading');
  var loadingTextElement = document.querySelector('#loadingText');
  var loadingProgressElement = document.querySelector('#loadingProgress');
  var noPhotoElement = document.querySelector('#noPhoto');
  var editReadoutElement = document.querySelector('#editReadout');

  document.title = config.shortTitle ? config.shortTitle + '（卒業制作）' : document.title;
  document.querySelector('#siteTitle').textContent = config.title || '';
  document.querySelector('#disclaimer').textContent = config.disclaimer || '';
  document.querySelector('#helpModal .help-note').textContent = config.disclaimer || '';

  // Detect desktop or mobile mode.
  var mql = window.matchMedia('(max-width: 700px), (max-height: 500px)');
  function setMode() {
    document.body.classList.toggle('mobile', mql.matches);
    document.body.classList.toggle('desktop', !mql.matches);
  }
  setMode();
  if (mql.addEventListener) {
    mql.addEventListener('change', setMode);
  } else {
    mql.addListener(setMode);
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  setLoadingProgress(0.2);

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, { controls: { mouseViewMode: 'drag' } });
  var maxTextureSize = getMaxTextureSize();

  var visited = loadVisited();
  var currentSpot = null;
  var firstShown = false;

  // Spots are created up front; each photo is loaded the first time its spot is shown.
  var spots = (config.spots || []).map(function(cfg, index) {
    return {
      id: cfg.id,
      config: cfg,
      index: index,
      number: index + 1,
      name: cfg.name || ('地点 ' + (index + 1)),
      photo: cfg.photo || (photoDir + '/' + cfg.id + '.jpg'),
      state: 'new',     // new → loading → ready / missing
      scene: null,
      view: null,
      waiting: []
    };
  });

  // Campus map.
  var map = window.TourMap.create({
    map: config.map || {},
    scenes: spots.map(function(spot) {
      return { id: spot.id, number: spot.number, name: spot.name, map: spot.config.map, northOffset: spot.config.northOffset };
    }),
    onSelect: function(id) {
      switchSpot(findSpotById(id));
      if (document.body.classList.contains('mobile')) {
        setMapOpen(false);
      }
    }
  });

  // Thumbnail strip.
  var thumbElements = buildThumbnails();
  areaTabsElement.hidden = true;

  thumbToggleElement.addEventListener('click', function() {
    setThumbsOpen(document.body.classList.contains('thumbs-hidden'));
  });

  mapToggleElement.addEventListener('click', function() {
    setMapOpen(!document.body.classList.contains('map-open'));
  });
  document.querySelector('#mapCloseButton').addEventListener('click', function() {
    setMapOpen(false);
  });
  document.querySelector('#mapBackdrop').addEventListener('click', function() {
    setMapOpen(false);
  });

  // The map starts open on desktop and closed on mobile.
  setMapOpen(!document.body.classList.contains('mobile'));

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function() {
      screenfull.toggle();
    });
    screenfull.on('change', function() {
      fullscreenToggleElement.classList.toggle('enabled', screenfull.isFullscreen);
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  // Dynamic parameters for controls.
  var velocity = 0.7;
  var friction = 3;

  // Associate view controls with elements.
  var controls = viewer.controls();
  controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(document.querySelector('#viewUp'),    'y', -velocity, friction), true);
  controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(document.querySelector('#viewDown'),  'y',  velocity, friction), true);
  controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(document.querySelector('#viewLeft'),  'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(document.querySelector('#viewRight'), 'x',  velocity, friction), true);
  controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(document.querySelector('#viewIn'),  'zoom', -velocity, friction), true);
  controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(document.querySelector('#viewOut'), 'zoom',  velocity, friction), true);

  // "KSCでの学生生活" button and the per-spot facility button.
  var spotInfoButton = document.querySelector('#spotInfoButton');
  document.querySelector('#lifeButton').addEventListener('click', function() {
    window.TourPanel.openActivities('KSCでの学生生活', config.studentLifeLead || '', config.studentLife || []);
  });
  spotInfoButton.addEventListener('click', function() {
    var facility = currentSpot && facilities[currentSpot.config.facility];
    if (facility) {
      window.TourPanel.open(facility);
    }
  });

  // Help dialog: shown automatically on the first visit.
  document.querySelector('#helpButton').addEventListener('click', showHelp);
  document.querySelector('#helpClose').addEventListener('click', hideHelp);
  helpModalElement.addEventListener('click', function(event) {
    if (event.target === helpModalElement) {
      hideHelp();
    }
  });

  window.addEventListener('hashchange', function() {
    var spot = findSpotById(spotIdFromHash());
    if (spot && spot !== currentSpot) {
      switchSpot(spot);
    }
  });

  // Production aid: add ?edit to the URL to read the yaw / pitch at the centre of the screen.
  var editMode = /[?&]edit\b/.test(location.search);
  if (editMode) {
    editReadoutElement.hidden = false;
  }

  // Load a spot's photo once; callbacks run when it is ready or known to be missing.
  function loadSpot(spot, done) {
    if (spot.state === 'ready' || spot.state === 'missing') {
      done();
      return;
    }
    spot.waiting.push(done);
    if (spot.state === 'loading') {
      return;
    }
    spot.state = 'loading';
    var img = new Image();
    img.decoding = 'async';
    img.onload = function() {
      createScene(spot, img);
      spot.state = 'ready';
      flush(spot);
    };
    img.onerror = function() {
      spot.state = 'missing';
      flush(spot);
    };
    img.src = spot.photo;
  }

  function flush(spot) {
    var callbacks = spot.waiting;
    spot.waiting = [];
    callbacks.forEach(function(callback) { callback(); });
  }

  function createScene(spot, img) {
    // Shrink photos larger than the device can hold in one texture.
    var width = img.naturalWidth;
    var element = img;
    if (width > maxTextureSize) {
      width = maxTextureSize;
      var canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = width / 2;
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      element = canvas;
    }
    var source = new Marzipano.SingleAssetSource(new Marzipano.StaticAsset(element));
    var geometry = new Marzipano.EquirectGeometry([{ width: width }]);
    var limiter = Marzipano.RectilinearView.limit.traditional(width / 4, 100 * Math.PI / 180, 120 * Math.PI / 180);
    var view = new Marzipano.RectilinearView(spot.config.view || DEFAULT_VIEW, limiter);
    var scene = viewer.createScene({ source: source, geometry: geometry, view: view, pinFirstLevel: true });
    spot.scene = scene;
    spot.view = view;

    var container = scene.hotspotContainer();
    (spot.config.links || []).forEach(function(hotspot) {
      var target = findSpotById(hotspot.target);
      if (!target) {
        console.warn('移動先の地点が見つかりません: ' + hotspot.target);
        return;
      }
      container.createHotspot(createLinkHotspotElement(hotspot, target), { yaw: hotspot.yaw, pitch: hotspot.pitch || 0 });
    });
    (spot.config.info || []).forEach(function(hotspot) {
      var facility = facilities[hotspot.facility];
      if (!facility) {
        console.warn('施設情報が見つかりません: ' + hotspot.facility);
        return;
      }
      container.createHotspot(createInfoHotspotElement(facility.name, facility, facility.icon), { yaw: hotspot.yaw, pitch: hotspot.pitch || 0 });
    });

    view.addEventListener('change', function() {
      if (spot === currentSpot) {
        updateHeading();
        updateEditReadout();
      }
    });
  }

  function switchSpot(spot) {
    if (!spot) {
      return;
    }
    currentSpot = spot;
    window.TourPanel.close();
    sceneNameElement.textContent = spot.number + '. ' + spot.name;
    var spotFacility = facilities[spot.config.facility];
    // A facility mark placed in the photo (info with yaw/pitch) replaces the centre label.
    spotInfoButton.hidden = !spotFacility || (spot.config.info || []).length > 0;
    spotInfoButton.querySelector('.spot-info-name').textContent = spotFacility ? spotFacility.name : '';
    spotInfoButton.setAttribute('aria-label', spotFacility ? spotFacility.name + 'の施設情報' : '');
    updateThumbnails(spot);
    map.setCurrent(spot.id);
    if (spotIdFromHash() !== spot.id) {
      history.replaceState(null, '', location.pathname + location.search + '#' + encodeURIComponent(spot.id));
    }

    if (spot.state !== 'ready' && spot.state !== 'missing') {
      showLoading(firstShown ? 0.5 : 0.6);
    }
    loadSpot(spot, function() {
      if (spot !== currentSpot) {
        return;
      }
      hideLoading();
      if (spot.state === 'ready') {
        noPhotoElement.hidden = true;
        spot.view.setParameters(spot.config.view || DEFAULT_VIEW);
        spot.scene.switchTo();
        updateHeading();
        updateEditReadout();
      } else {
        // No photo yet: hide the previous scene behind the "coming soon" screen.
        noPhotoElement.querySelector('.no-photo-name').textContent = spot.number + '. ' + spot.name;
        noPhotoElement.hidden = false;
      }
      if (editMode) {
        editReadoutElement.hidden = spot.state !== 'ready';
      }
      visited[spot.id] = true;
      saveVisited();
      map.setVisited(visited);
      updateThumbnails(spot);
      if (!firstShown) {
        firstShown = true;
        if (!readStorage(STORAGE_HELP)) {
          showHelp();
        }
      }
    });
  }

  function updateHeading() {
    if (!currentSpot || !currentSpot.view) {
      return;
    }
    var view = currentSpot.view;
    var size = view.size();
    var aspect = size.height ? size.width / size.height : 1;
    var hfov = 2 * Math.atan(Math.tan(view.fov() / 2) * aspect);
    map.setHeading(view.yaw(), hfov);
  }

  function updateEditReadout() {
    if (!editMode || !currentSpot || !currentSpot.view) {
      return;
    }
    var v = currentSpot.view;
    editReadoutElement.textContent = currentSpot.id + '  yaw: ' + v.yaw().toFixed(3) + '  pitch: ' + v.pitch().toFixed(3) + '  fov: ' + v.fov().toFixed(3);
  }

  function buildThumbnails() {
    var elements = {};
    spots.forEach(function(spot) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'thumb';
      button.setAttribute('role', 'listitem');
      button.setAttribute('data-id', spot.id);

      var img = document.createElement('img');
      img.loading = 'lazy';
      img.decoding = 'async';
      img.alt = '';
      img.src = 'thumbs/' + spot.id + '.jpg';
      img.onerror = function() {
        // No thumbnail yet: show the spot number instead.
        var placeholder = document.createElement('span');
        placeholder.className = 'thumb-placeholder';
        placeholder.textContent = spot.number;
        button.replaceChild(placeholder, img);
      };

      var label = document.createElement('span');
      label.className = 'thumb-label';
      label.textContent = spot.number + '. ' + spot.name;

      var badge = document.createElement('span');
      badge.className = 'thumb-visited';
      badge.textContent = '✓';
      badge.setAttribute('aria-label', '訪問済み');

      button.appendChild(img);
      button.appendChild(badge);
      button.appendChild(label);
      button.addEventListener('click', function() {
        switchSpot(spot);
      });
      thumbStripElement.appendChild(button);
      elements[spot.id] = button;
    });
    return elements;
  }

  function updateThumbnails(spot) {
    Object.keys(thumbElements).forEach(function(id) {
      var el = thumbElements[id];
      el.classList.toggle('current', id === spot.id);
      el.classList.toggle('visited', !!visited[id]);
    });
    var current = thumbElements[spot.id];
    var strip = thumbStripElement;
    var left = current.offsetLeft - (strip.clientWidth - current.offsetWidth) / 2;
    strip.scrollTo({ left: left, behavior: 'smooth' });
  }

  function setThumbsOpen(open) {
    document.body.classList.toggle('thumbs-hidden', !open);
    thumbToggleElement.setAttribute('aria-pressed', open ? 'true' : 'false');
    if (open && currentSpot) {
      updateThumbnails(currentSpot);
    }
  }

  function setMapOpen(open) {
    document.body.classList.toggle('map-open', open);
    mapToggleElement.setAttribute('aria-pressed', open ? 'true' : 'false');
    if (open) {
      map.refresh();
    }
  }

  function showHelp() {
    helpModalElement.classList.add('visible');
    helpModalElement.setAttribute('aria-hidden', 'false');
  }

  function hideHelp() {
    helpModalElement.classList.remove('visible');
    helpModalElement.setAttribute('aria-hidden', 'true');
    writeStorage(STORAGE_HELP, '1');
  }

  function showLoading(ratio) {
    loadingTextElement.textContent = '360°写真を読み込んでいます';
    loadingElement.classList.remove('hidden');
    setLoadingProgress(ratio);
  }

  function hideLoading() {
    setLoadingProgress(1);
    loadingElement.classList.add('hidden');
  }

  function setLoadingProgress(ratio) {
    loadingProgressElement.style.width = Math.round(ratio * 100) + '%';
  }

  function getMaxTextureSize() {
    try {
      var gl = document.createElement('canvas').getContext('webgl');
      return Math.min(gl.getParameter(gl.MAX_TEXTURE_SIZE), 8192);
    } catch (e) {
      return 4096;
    }
  }

  function createLinkHotspotElement(hotspot, target) {

    // Marzipano sets display and transform on the hotspot element itself,
    // so the visible content lives in an inner element.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    var inner = document.createElement('div');
    inner.classList.add('link-hotspot');
    wrapper.appendChild(inner);
    wrapper.setAttribute('role', 'button');
    wrapper.setAttribute('aria-label', target.name + 'へ移動');

    // Create image element.
    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.alt = '';
    icon.classList.add('link-hotspot-icon');
    icon.style.transform = 'rotate(' + (hotspot.rotation || 0) + 'rad)';

    // Destination name, always visible like a signpost.
    var label = document.createElement('div');
    label.classList.add('link-hotspot-label');
    label.textContent = target.name;

    // Add click event handler.
    wrapper.addEventListener('click', function() {
      switchSpot(target);
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    inner.appendChild(icon);
    inner.appendChild(label);

    return wrapper;
  }

  function createInfoHotspotElement(title, facility, iconText) {
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    var inner = document.createElement('div');
    inner.classList.add('info-hotspot');
    wrapper.appendChild(inner);
    wrapper.setAttribute('role', 'button');
    wrapper.setAttribute('aria-label', (title || '施設') + 'の情報');

    var icon = document.createElement('span');
    icon.classList.add('info-hotspot-icon');
    icon.textContent = iconText || 'i';
    if (!iconText) {
      icon.classList.add('letter');
    }

    var label = document.createElement('span');
    label.classList.add('info-hotspot-label');
    label.textContent = title || '';

    inner.appendChild(icon);
    if (title) {
      inner.appendChild(label);
    }

    wrapper.addEventListener('click', function() {
      window.TourPanel.open(facility);
    });

    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'pointerdown', 'mousedown', 'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSpotById(id) {
    for (var i = 0; i < spots.length; i++) {
      if (spots[i].id === id) {
        return spots[i];
      }
    }
    return null;
  }

  function spotIdFromHash() {
    try {
      return decodeURIComponent(location.hash.slice(1));
    } catch (e) {
      return '';
    }
  }

  function loadVisited() {
    try {
      return JSON.parse(readStorage(STORAGE_VISITED)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveVisited() {
    writeStorage(STORAGE_VISITED, JSON.stringify(visited));
  }

  function readStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      // Storage may be unavailable (private mode); the tour works without it.
    }
  }

  // Display the initial spot: URL hash, then config.startSpot, then the first spot.
  switchSpot(findSpotById(spotIdFromHash()) || findSpotById(config.startSpot) || spots[0]);

})();
