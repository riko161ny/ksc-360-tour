/*
 * Facility info panel: name, overview, description, purpose, photos, video,
 * related activities and links. Fields left empty in tour-config.js are not shown.
 * The same panel also shows the "KSCでの学生生活" activity cards.
 */
'use strict';

(function() {
  var panelElement = document.querySelector('#infoPanel');
  var bodyElement = document.querySelector('#infoBody');
  var backdropElement = document.querySelector('#infoBackdrop');

  document.querySelector('#infoClose').addEventListener('click', close);
  backdropElement.addEventListener('click', close);
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      close();
    }
  });

  // Keep drags and wheel inside the panel from turning the panorama.
  ['touchstart', 'touchmove', 'pointerdown', 'mousedown', 'wheel'].forEach(function(type) {
    panelElement.addEventListener(type, function(event) {
      event.stopPropagation();
    });
  });

  function open(facility) {
    bodyElement.innerHTML = '';

    var title = el('h2', 'info-title', facility.name || '');
    title.id = 'infoTitle';
    bodyElement.appendChild(title);

    if (facility.images && facility.images.length) {
      bodyElement.appendChild(createGallery(facility.images));
    }
    if (facility.overview) {
      var overview = el('div', 'info-section');
      overview.appendChild(el('h3', 'info-heading', '施設概要'));
      overview.appendChild(el('p', 'info-text', facility.overview));
      bodyElement.appendChild(overview);
    }
    if (facility.purpose) {
      var purpose = el('div', 'info-section');
      purpose.appendChild(el('h3', 'info-heading', '利用目的'));
      purpose.appendChild(el('p', 'info-text', facility.purpose));
      bodyElement.appendChild(purpose);
    }
    if (facility.description) {
      var description = el('div', 'info-section');
      description.appendChild(el('h3', 'info-heading', '説明'));
      description.appendChild(el('p', 'info-text', facility.description));
      bodyElement.appendChild(description);
    }
    if (facility.video) {
      var video = createVideo(facility.video);
      if (video) {
        var videoSection = el('div', 'info-section');
        videoSection.appendChild(el('h3', 'info-heading', '動画'));
        videoSection.appendChild(video);
        bodyElement.appendChild(videoSection);
      }
    }
    var related = (facility.activities || []).map(resolveActivity).filter(Boolean);
    if (related.length) {
      var relatedSection = el('div', 'info-section');
      relatedSection.appendChild(el('h3', 'info-heading', '関連する活動'));
      related.forEach(function(activity) {
        relatedSection.appendChild(createActivityCard(activity));
      });
      bodyElement.appendChild(relatedSection);
    }
    if (facility.links && facility.links.length) {
      var links = el('div', 'info-section info-links');
      facility.links.forEach(function(link) {
        var a = el('a', 'info-link', (link.label || link.url) + ' ↗');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener';
        links.appendChild(a);
      });
      bodyElement.appendChild(links);
    }
    if (facility.source) {
      bodyElement.appendChild(el('p', 'info-source', '出典：' + facility.source));
    }

    show();
  }

  // "KSCでの学生生活": one card per activity listed in config.studentLife.
  function openActivities(title, lead, activities) {
    bodyElement.innerHTML = '';
    var heading = el('h2', 'info-title', title);
    heading.id = 'infoTitle';
    bodyElement.appendChild(heading);
    if (lead) {
      bodyElement.appendChild(el('p', 'info-lead', lead));
    }
    activities.map(resolveActivity).filter(Boolean).forEach(function(activity) {
      bodyElement.appendChild(createActivityCard(activity));
    });
    show();
  }

  function show() {
    document.body.classList.add('info-open');
    panelElement.setAttribute('aria-hidden', 'false');
    panelElement.scrollTop = 0;
  }

  // An entry is either an activity key, or { activity: key, note, url, label }
  // where note/url/label describe this facility's own connection to the activity.
  function resolveActivity(entry) {
    var all = (window.TOUR_CONFIG && window.TOUR_CONFIG.activities) || {};
    var key = typeof entry === 'string' ? entry : entry.activity;
    var base = all[key];
    if (!base) {
      console.warn('活動情報が見つかりません: ' + key);
      return null;
    }
    if (typeof entry === 'string') {
      return base;
    }
    return {
      name: base.name,
      summary: base.summary,
      video: base.video,
      note: entry.note,
      links: (entry.url ? [{ label: entry.label || '関連記事', url: entry.url }] : []).concat(base.links || [])
    };
  }

  function createActivityCard(activity) {
    var card = el('article', 'activity-card');
    card.appendChild(el('h3', 'activity-name', activity.name));
    if (activity.summary) {
      card.appendChild(el('p', 'activity-text', activity.summary));
    }
    if (activity.video) {
      var video = createVideo(activity.video);
      if (video) {
        video.classList.add('activity-video');
        card.appendChild(video);
      }
    }
    if (activity.note) {
      card.appendChild(el('p', 'activity-note', activity.note));
    }
    (activity.links || []).forEach(function(link) {
      var a = el('a', 'activity-link', (link.label || link.url) + ' ↗');
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      card.appendChild(a);
    });
    return card;
  }

  function close() {
    if (!document.body.classList.contains('info-open')) {
      return;
    }
    document.body.classList.remove('info-open');
    panelElement.setAttribute('aria-hidden', 'true');
    // Removing the content also stops any playing video.
    bodyElement.innerHTML = '';
  }

  function createGallery(images) {
    var gallery = el('figure', 'info-gallery');
    var img = document.createElement('img');
    img.decoding = 'async';
    var caption = el('figcaption', 'info-caption');
    var index = 0;

    function show(i) {
      index = (i + images.length) % images.length;
      var image = images[index];
      img.src = image.src;
      img.alt = image.caption || '';
      caption.textContent = (images.length > 1 ? (index + 1) + ' / ' + images.length + '　' : '') + (image.caption || '');
    }

    gallery.appendChild(img);
    if (images.length > 1) {
      var prev = el('button', 'gallery-nav prev', '‹');
      prev.type = 'button';
      prev.setAttribute('aria-label', '前の写真');
      prev.addEventListener('click', function() { show(index - 1); });
      var next = el('button', 'gallery-nav next', '›');
      next.type = 'button';
      next.setAttribute('aria-label', '次の写真');
      next.addEventListener('click', function() { show(index + 1); });
      gallery.appendChild(prev);
      gallery.appendChild(next);
    }
    gallery.appendChild(caption);
    show(0);
    return gallery;
  }

  function createVideo(video) {
    var wrapper = el('div', 'info-video');
    if (video.youtube) {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(video.youtube) + '?rel=0&playsinline=1';
      iframe.title = video.title || '動画';
      iframe.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      iframe.loading = 'lazy';
      wrapper.appendChild(iframe);
      return wrapper;
    }
    if (video.src) {
      var player = document.createElement('video');
      player.src = video.src;
      player.controls = true;
      player.preload = 'none';
      player.playsInline = true;
      if (video.poster) {
        player.poster = video.poster;
      }
      wrapper.appendChild(player);
      return wrapper;
    }
    return null;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    node.className = className;
    if (text) {
      node.textContent = text;
    }
    return node;
  }

  window.TourPanel = { open: open, openActivities: openActivities, close: close };
})();
