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

    // Guide-style panels: lead, intro, small cards, and the circle list.
    if (facility.lead) {
      bodyElement.appendChild(el('p', 'info-lead', facility.lead));
    }
    if (facility.intro) {
      bodyElement.appendChild(createIntro(facility.intro));
    }
    (facility.cards || []).forEach(function(card) {
      bodyElement.appendChild(createGuideCard(card));
    });
    if (facility.showCircles) {
      var circles = (window.TOUR_CONFIG && window.TOUR_CONFIG.circles) || [];
      circles.forEach(function(circle) {
        bodyElement.appendChild(createCircleCard(circle));
      });
    }

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

  function createIntro(intro) {
    var box = el('div', 'guide-intro');
    if (intro.tag) {
      box.appendChild(el('span', 'guide-tag', intro.tag));
    }
    if (intro.heading) {
      box.appendChild(el('h3', 'guide-intro-heading', intro.heading));
    }
    if (intro.text) {
      box.appendChild(el('p', 'guide-text', intro.text));
    }
    return box;
  }

  function createGuideCard(card) {
    var box = el('section', 'guide-card');
    var head = el('div', 'guide-card-head');
    if (card.icon) {
      head.appendChild(el('span', 'guide-icon', card.icon));
    }
    head.appendChild(el('h3', 'guide-card-title', card.title || ''));
    box.appendChild(head);
    if (card.text) {
      box.appendChild(el('p', 'guide-text', card.text));
    }
    if (card.chips && card.chips.length) {
      var chips = el('ul', 'guide-chips');
      card.chips.forEach(function(chip) {
        chips.appendChild(el('li', 'guide-chip', chip));
      });
      box.appendChild(chips);
    }
    appendButtons(box, card.buttons);
    return box;
  }

  // One small card per circle; every field except name is optional.
  function createCircleCard(circle) {
    var box = el('section', 'guide-card circle-card');
    var head = el('div', 'guide-card-head');
    head.appendChild(el('span', 'guide-icon mint', circle.icon || '✨'));
    var names = el('div', 'circle-names');
    if (circle.category) {
      names.appendChild(el('span', 'guide-tag', circle.category));
    }
    names.appendChild(el('h3', 'guide-card-title', circle.name || ''));
    head.appendChild(names);
    box.appendChild(head);
    if (circle.summary) {
      box.appendChild(el('p', 'guide-text', circle.summary));
    }
    var actions = el('div', 'guide-actions');
    var player = el('div', 'circle-player');
    (circle.videos || []).concat(circle.eventVideos || []).forEach(function(video) {
      actions.appendChild(createVideoToggle(video, player));
    });
    var links = [];
    if (circle.website) {
      links.push({ label: circle.website.label || '公式サイトを見る', url: circle.website.url });
    }
    (circle.sns || []).forEach(function(link) { links.push(link); });
    (circle.links || []).forEach(function(link) { links.push(link); });
    links.forEach(function(link) {
      actions.appendChild(createLinkButton(link, true));
    });
    if (actions.childNodes.length) {
      box.appendChild(actions);
    }
    box.appendChild(player);
    return box;
  }

  // Opens the video inside the card (the player is created only when asked for).
  function createVideoToggle(video, player) {
    var button = el('button', 'guide-button secondary', (video.label || '動画を見る') + ' ▶');
    button.type = 'button';
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', function() {
      var opening = button.getAttribute('aria-expanded') !== 'true';
      player.innerHTML = '';
      Array.prototype.forEach.call(player.parentNode.querySelectorAll('.guide-button.secondary'), function(other) {
        other.setAttribute('aria-expanded', 'false');
      });
      if (opening) {
        var frame = createVideo({ youtube: video.youtube, src: video.src, title: video.label });
        if (frame) {
          player.appendChild(frame);
          if (video.caption) {
            player.appendChild(el('p', 'activity-caption', video.caption));
          }
        }
        button.setAttribute('aria-expanded', 'true');
      }
    });
    return button;
  }

  function appendButtons(parent, buttons) {
    if (!buttons || !buttons.length) {
      return;
    }
    var actions = el('div', 'guide-actions');
    buttons.forEach(function(link) {
      actions.appendChild(createLinkButton(link));
    });
    parent.appendChild(actions);
  }

  function createLinkButton(link, secondary) {
    var a = el('a', 'guide-button' + (secondary ? ' outline' : ''), (link.label || link.url) + ' ↗');
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    return a;
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
      tag: base.tag,
      video: base.video,
      sections: base.sections,
      note: entry.note,
      links: (entry.url ? [{ label: entry.label || '関連記事', url: entry.url }] : []).concat(base.links || [])
    };
  }

  function createActivityCard(activity) {
    var card = el('article', 'activity-card');
    if (activity.tag) {
      card.appendChild(el('span', 'activity-tag', activity.tag));
    }
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
    // Fold-out details: tap a heading to open it (videos inside load only when opened).
    (activity.sections || []).forEach(function(section) {
      var details = el('details', 'activity-more');
      details.appendChild(el('summary', 'activity-more-title', section.title));
      var inner = el('div', 'activity-more-body');
      if (section.text) {
        inner.appendChild(el('p', 'activity-text', section.text));
      }
      if (section.items && section.items.length) {
        var list = el('ul', 'activity-items');
        section.items.forEach(function(item) {
          list.appendChild(el('li', '', item));
        });
        inner.appendChild(list);
      }
      if (section.video) {
        var sectionVideo = createVideo(section.video);
        if (sectionVideo) {
          sectionVideo.classList.add('activity-video');
          inner.appendChild(sectionVideo);
        }
      }
      if (section.caption) {
        inner.appendChild(el('p', 'activity-caption', section.caption));
      }
      appendLinks(inner, section.links);
      details.appendChild(inner);
      card.appendChild(details);
    });
    appendLinks(card, activity.links);
    return card;
  }

  function appendLinks(parent, links) {
    (links || []).forEach(function(link) {
      var a = el('a', 'activity-link', (link.label || link.url) + ' ↗');
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      parent.appendChild(a);
    });
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
