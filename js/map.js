/*
 * Campus map: pins for each shooting point, the current point, visited points
 * and a fan showing the direction being viewed.
 *
 * Pin positions come from tour-config.js (scenes[id].map = { x, y } as ratios
 * of the map image), so they can be adjusted without touching this file.
 */
'use strict';

(function() {
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var FAN_RADIUS = 34;

  function create(options) {
    var mapConfig = options.map || {};
    var scenes = options.scenes || [];
    var onSelect = options.onSelect || function() {};

    var panelElement = document.querySelector('#mapPanel');
    var canvasElement = document.querySelector('#mapCanvas');
    var imageElement = document.querySelector('#mapImage');
    var pinsElement = document.querySelector('#mapPins');
    var emptyElement = document.querySelector('#mapEmpty');
    var viewportElement = document.querySelector('#mapViewport');
    var sizeButton = document.querySelector('#mapSizeButton');

    var pins = {};
    var currentId = null;
    var fan = createFan();

    var hasImage = !!mapConfig.image;
    if (hasImage) {
      imageElement.src = mapConfig.image;
      if (mapConfig.width && mapConfig.height) {
        canvasElement.style.aspectRatio = mapConfig.width + ' / ' + mapConfig.height;
      }
      emptyElement.hidden = true;
      imageElement.addEventListener('load', refresh);
    } else {
      canvasElement.hidden = true;
      emptyElement.hidden = false;
    }

    scenes.forEach(function(scene) {
      if (!hasImage || !isValidPoint(scene.map)) {
        return;
      }
      var pin = document.createElement('button');
      pin.type = 'button';
      pin.className = 'map-pin';
      pin.style.left = (scene.map.x * 100) + '%';
      pin.style.top = (scene.map.y * 100) + '%';
      pin.title = (scene.number ? scene.number + '. ' : '') + scene.name;
      if (scene.number) {
        var number = document.createElement('span');
        number.className = 'map-pin-number';
        number.textContent = scene.number;
        pin.appendChild(number);
        pin.classList.add('numbered');
      }
      pin.setAttribute('aria-label', scene.name + 'へ移動');
      pin.addEventListener('click', function() {
        onSelect(scene.id);
      });
      pinsElement.appendChild(pin);
      pins[scene.id] = { element: pin, scene: scene };
    });

    sizeButton.addEventListener('click', function() {
      var large = !panelElement.classList.contains('large');
      panelElement.classList.toggle('large', large);
      document.body.classList.toggle('map-large', large);
      sizeButton.textContent = large ? '－' : '＋';
      sizeButton.setAttribute('aria-label', large ? 'マップを縮小' : 'マップを拡大');
      refresh();
    });

    window.addEventListener('resize', refresh);
    enableDragPan();

    // The map image is drawn larger than the panel (map.zoom) and scrolled so
    // that the current point stays in view; labels stay readable on small panels.
    function applyZoom() {
      var zoom = mapConfig.zoom || {};
      var mode = document.body.classList.contains('mobile') ? 'mobile' :
        panelElement.classList.contains('large') ? 'large' : 'desktop';
      canvasElement.style.width = ((zoom[mode] || 1) * 100) + '%';
    }

    function refresh() {
      applyZoom();
      scrollToCurrent();
    }

    // Dragging (mouse or touch) slides the map; the wheel scrolls it.
    function enableDragPan() {
      var start = null;
      var moved = false;
      viewportElement.addEventListener('pointerdown', function(event) {
        if (event.pointerType === 'mouse' && event.button !== 0) {
          return;
        }
        start = { id: event.pointerId, x: event.clientX, y: event.clientY, left: viewportElement.scrollLeft, top: viewportElement.scrollTop };
        moved = false;
      });
      window.addEventListener('pointermove', function(event) {
        if (!start || event.pointerId !== start.id) {
          return;
        }
        var dx = event.clientX - start.x;
        var dy = event.clientY - start.y;
        if (Math.abs(dx) + Math.abs(dy) > 6) {
          moved = true;
          viewportElement.classList.add('dragging');
        }
        viewportElement.scrollLeft = start.left - dx;
        viewportElement.scrollTop = start.top - dy;
      });
      function end() {
        start = null;
        viewportElement.classList.remove('dragging');
      }
      window.addEventListener('pointerup', end);
      window.addEventListener('pointercancel', end);
      viewportElement.addEventListener('wheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        viewportElement.scrollLeft += event.shiftKey ? event.deltaY : event.deltaX;
        viewportElement.scrollTop += event.shiftKey ? 0 : event.deltaY;
      }, { passive: false });
      // A drag that ends on a pin should not also select it.
      viewportElement.addEventListener('click', function(event) {
        if (moved) {
          event.stopPropagation();
          event.preventDefault();
          moved = false;
        }
      }, true);
    }

    function createFan() {
      var svg = document.createElementNS(SVG_NS, 'svg');
      svg.setAttribute('class', 'map-fan');
      svg.setAttribute('viewBox', (-FAN_RADIUS) + ' ' + (-FAN_RADIUS) + ' ' + (FAN_RADIUS * 2) + ' ' + (FAN_RADIUS * 2));
      var path = document.createElementNS(SVG_NS, 'path');
      svg.appendChild(path);
      return { svg: svg, path: path, hfov: null };
    }

    function setFanAngle(hfov) {
      if (fan.hfov !== null && Math.abs(fan.hfov - hfov) < 0.01) {
        return;
      }
      fan.hfov = hfov;
      // Fan pointing up (map north); rotated later by the view yaw.
      var half = Math.min(hfov, Math.PI * 0.9) / 2;
      var x = Math.sin(half) * FAN_RADIUS;
      var y = -Math.cos(half) * FAN_RADIUS;
      fan.path.setAttribute('d', 'M0 0 L' + (-x) + ' ' + y + ' A' + FAN_RADIUS + ' ' + FAN_RADIUS + ' 0 0 1 ' + x + ' ' + y + ' Z');
    }

    function setCurrent(id) {
      currentId = id;
      Object.keys(pins).forEach(function(key) {
        pins[key].element.classList.toggle('current', key === id);
      });
      var pin = pins[id];
      if (pin) {
        pin.element.appendChild(fan.svg);
        fan.svg.style.display = typeof pin.scene.northOffset === 'number' ? '' : 'none';
      } else if (fan.svg.parentNode) {
        fan.svg.parentNode.removeChild(fan.svg);
      }
      if (hasImage) {
        emptyElement.hidden = !!pin;
        emptyElement.textContent = pin ? '' : 'この地点はまだマップに登録されていません';
      }
      scrollToCurrent();
    }

    function setVisited(visited) {
      Object.keys(pins).forEach(function(key) {
        pins[key].element.classList.toggle('visited', !!visited[key]);
      });
    }

    function setHeading(yaw, hfov) {
      var pin = pins[currentId];
      if (!pin || typeof pin.scene.northOffset !== 'number') {
        return;
      }
      setFanAngle(hfov);
      var deg = (yaw - pin.scene.northOffset) * 180 / Math.PI;
      fan.svg.style.transform = 'translate(-50%, -50%) rotate(' + deg + 'deg)';
    }

    function scrollToCurrent() {
      var pin = pins[currentId];
      if (!hasImage) {
        return;
      }
      if (!pin) {
        // No position registered yet: show the middle of the map.
        viewportElement.scrollLeft = (viewportElement.scrollWidth - viewportElement.clientWidth) / 2;
        viewportElement.scrollTop = (viewportElement.scrollHeight - viewportElement.clientHeight) / 2;
        return;
      }
      var el = pin.element;
      viewportElement.scrollLeft = el.offsetLeft - viewportElement.clientWidth / 2;
      viewportElement.scrollTop = el.offsetTop - viewportElement.clientHeight / 2;
    }

    return {
      setCurrent: setCurrent,
      setVisited: setVisited,
      setHeading: setHeading,
      refresh: refresh
    };
  }

  function isValidPoint(point) {
    return point && typeof point.x === 'number' && typeof point.y === 'number';
  }

  window.TourMap = { create: create };
})();
