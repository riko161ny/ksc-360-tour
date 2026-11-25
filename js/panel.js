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
  // What the panel is showing, so it can be drawn again in another language.
  var lastShown = null;

  function t(key, vars) { return window.TourI18n ? window.TourI18n.t(key, vars) : key; }

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

  // options (学部情報だけ): { faculty: 'policy', department: 'policy-media', from: 開いた元の号館の facility }
  function open(facility, options) {
    lastShown = { kind: 'facility', facility: facility, options: options };
    bodyElement.innerHTML = '';
    panelElement.classList.toggle('wide', !!facility.wide);

    var title = el('h2', 'info-title', facility.name || '');
    title.id = 'infoTitle';
    bodyElement.appendChild(title);

    if (facility.facultyGuide) {
      renderFacultyGuide(facility, options || {});
      show();
      return;
    }

    if (facility.facts && facility.facts.length) {
      var facts = el('div', 'info-facts');
      facility.facts.forEach(function(fact) { facts.appendChild(el('span', 'info-fact', fact)); });
      bodyElement.appendChild(facts);
    }

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
    if (facility.clubDirectory) {
      var directoryKey = typeof facility.clubDirectory === 'string' ? facility.clubDirectory : 'clubDirectory';
      var directory = window.TOUR_CONFIG && window.TOUR_CONFIG[directoryKey];
      if (directory) {
        bodyElement.appendChild(createClubDirectory(directory));
      }
    }
    if (facility.openFacility) {
      var target = window.TOUR_CONFIG && window.TOUR_CONFIG.facilities && window.TOUR_CONFIG.facilities[facility.openFacility.key];
      if (target) {
        var openRow = el('div', 'guide-actions');
        var openButton = el('button', 'guide-button', facility.openFacility.label || target.name);
        openButton.type = 'button';
        openButton.addEventListener('click', function() { open(target); });
        openRow.appendChild(openButton);
        bodyElement.appendChild(openRow);
      }
    }
    if (facility.tabs && facility.tabs.length) {
      bodyElement.appendChild(createTabs(facility.tabs));
    }
    if (facility.placeholder) {
      bodyElement.appendChild(el('p', 'info-placeholder', facility.placeholder));
    }
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
      overview.appendChild(el('h3', 'info-heading', t('panel.overview')));
      appendParagraphs(overview, facility.overview);
      bodyElement.appendChild(overview);
    }
    if (facility.purpose) {
      var purpose = el('div', 'info-section');
      purpose.appendChild(el('h3', 'info-heading', t('panel.purpose')));
      purpose.appendChild(el('p', 'info-text', facility.purpose));
      bodyElement.appendChild(purpose);
    }
    if (facility.description) {
      var description = el('div', 'info-section');
      description.appendChild(el('h3', 'info-heading', t('panel.description')));
      appendParagraphs(description, facility.description);
      bodyElement.appendChild(description);
    }
    (facility.sections || []).forEach(function(section) {
      bodyElement.appendChild(createSection(section));
    });
    if (facility.faculties && facility.faculties.length) {
      var relatedFaculties = createRelatedFaculties(facility);
      if (relatedFaculties) { bodyElement.appendChild(relatedFaculties); }
    }
    if (facility.video) {
      var video = createVideo(facility.video);
      if (video) {
        var videoSection = el('div', 'info-section');
        videoSection.appendChild(el('h3', 'info-heading', t('panel.video')));
        videoSection.appendChild(video);
        bodyElement.appendChild(videoSection);
      }
    }
    var related = (facility.activities || []).map(resolveActivity).filter(Boolean);
    if (related.length) {
      var relatedSection = el('div', 'info-section');
      relatedSection.appendChild(el('h3', 'info-heading', t('panel.related')));
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
      bodyElement.appendChild(el('p', 'info-source', t('panel.source', { source: facility.source })));
    }

    show();
  }

  // "KSCでの学生生活": one card per activity listed in config.studentLife.
  function openActivities(title, lead, activities) {
    lastShown = { kind: 'activities', args: [title, lead, activities] };
    bodyElement.innerHTML = '';
    panelElement.classList.remove('wide');
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

  // Tabs (e.g. one per faculty): { label, lead, text, cards, links }. An empty tab says it is in preparation.
  function createTabs(tabs) {
    var wrap = el('div', 'info-tabs');
    var bar = el('div', 'info-tab-bar');
    bar.setAttribute('role', 'tablist');
    var content = el('div', 'info-tab-content');
    var buttons = tabs.map(function(tab, i) {
      var b = el('button', 'info-tab', tab.label || '');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.addEventListener('click', function() { select(i); });
      bar.appendChild(b);
      return b;
    });
    function select(i) {
      buttons.forEach(function(b, j) {
        b.classList.toggle('selected', i === j);
        b.setAttribute('aria-selected', i === j ? 'true' : 'false');
      });
      var tab = tabs[i];
      content.innerHTML = '';
      content.appendChild(el('h3', 'info-tab-title', tab.label || ''));
      var empty = true;
      if (tab.lead) { content.appendChild(el('p', 'info-lead', tab.lead)); empty = false; }
      if (tab.text) { content.appendChild(el('p', 'info-text', tab.text)); empty = false; }
      (tab.cards || []).forEach(function(card) { content.appendChild(createGuideCard(card)); empty = false; });
      if (tab.links && tab.links.length) { appendLinks(content, tab.links); empty = false; }
      if (empty) { content.appendChild(el('p', 'info-placeholder', t('panel.placeholder'))); }
    }
    wrap.appendChild(bar);
    wrap.appendChild(content);
    select(0);
    return wrap;
  }

  // Text that may be one string or a list of paragraphs.
  function appendParagraphs(parent, text) {
    (Array.isArray(text) ? text : [text]).forEach(function(t) {
      parent.appendChild(el('p', 'info-text', t));
    });
  }

  // A headed block: paragraphs, a list of { name, text, note }, a two-column table, a note and links.
  function createSection(section) {
    var box = el('div', 'info-section');
    if (section.title) { box.appendChild(el('h3', 'info-heading', section.title)); }
    if (section.text) { appendParagraphs(box, section.text); }
    if (section.items && section.items.length) {
      var list = el('ul', 'info-items');
      section.items.forEach(function(it) {
        var li = el('li', 'info-item');
        li.appendChild(el('span', 'info-item-name', it.name || ''));
        if (it.text) { li.appendChild(el('span', 'info-item-text', it.text)); }
        if (it.note) { li.appendChild(el('span', 'info-item-note', it.note)); }
        if ((it.videos && it.videos.length) || (it.links && it.links.length)) {
          var actions = el('div', 'guide-actions');
          var player = el('div', 'circle-player');
          (it.videos || []).forEach(function(video) { actions.appendChild(createVideoToggle(video, player)); });
          (it.links || []).forEach(function(link) { actions.appendChild(createLinkButton(link, true)); });
          li.appendChild(actions);
          li.appendChild(player);
        }
        list.appendChild(li);
      });
      box.appendChild(list);
    }
    if (section.rows && section.rows.length) {
      var table = el('table', 'info-table');
      section.rows.forEach(function(row) {
        var tr = el('tr', '');
        tr.appendChild(el('th', '', row[0] || ''));
        tr.appendChild(el('td', '', row[1] || ''));
        table.appendChild(tr);
      });
      box.appendChild(table);
    }
    if (section.note) { box.appendChild(el('p', 'info-note', '※' + section.note)); }
    if (section.links && section.links.length) { appendLinks(box, section.links); }
    return box;
  }

  // 「部活・サークル」: one top tab per section (KSC / 体育会 / 文化総部), each with category headings and small cards.
  function createClubDirectory(dir) {
    var wrap = el('div', 'club-directory');
    var sections = dir.sections || [];
    var bar = el('div', 'club-tabs');
    bar.setAttribute('role', 'tablist');
    var content = el('div', 'club-list');
    content.setAttribute('role', 'tabpanel');
    var buttons = sections.map(function(section, i) {
      var b = el('button', 'club-tab', section.tab || section.heading || '');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.addEventListener('click', function() { select(i); });
      bar.appendChild(b);
      return b;
    });
    function select(index) {
      buttons.forEach(function(b, i) {
        var on = i === index;
        b.classList.toggle('selected', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      var section = sections[index];
      content.innerHTML = '';
      if (section.heading) { content.appendChild(el('h3', 'club-section-heading', section.heading)); }
      if (section.text) { appendParagraphs(content, section.text); }
      (section.features || []).forEach(function(f) { content.appendChild(createFeatureCard(f)); });
      if (section.compact && section.compact.length) {
        var compact = el('ul', 'club-compact');
        section.compact.forEach(function(item) {
          var li = el('li', 'club-compact-item');
          li.appendChild(el('span', 'club-compact-name', item.name));
          if (item.field) { li.appendChild(el('span', 'club-compact-field', item.field)); }
          compact.appendChild(li);
        });
        content.appendChild(compact);
      }
      var total = 0;
      (section.categories || []).forEach(function(cat) {
        var groups = cat.groups || [];
        if (!groups.length) { return; }
        total += groups.length;
        content.appendChild(el('h4', 'club-group-heading', (cat.en ? cat.en + '｜' : '') + cat.label));
        var cards = el('div', 'club-cards');
        groups.forEach(function(group) {
          var card = el('div', 'club-card');
          card.appendChild(el('h5', 'club-card-name', group.name));
          (group.links || []).forEach(function(link) {
            var a = el('a', 'club-card-link', (link.label || t('panel.officialSite')) + ' ↗');
            a.href = link.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            card.appendChild(a);
          });
          cards.appendChild(card);
        });
        content.appendChild(cards);
      });
      if (total) { content.insertBefore(el('p', 'club-count', t('panel.count', { n: total })), content.querySelector('.club-group-heading')); }
      var buttons2 = (section.button ? [section.button] : []).concat(section.buttons || []);
      var actions = el('div', 'guide-actions club-official');
      buttons2.forEach(function(btn, bi) {
        // { openFacility: key, label }: opens another card in this tour, only once that card exists.
        if (btn.openFacility) {
          var target = window.TOUR_CONFIG.facilities && window.TOUR_CONFIG.facilities[btn.openFacility];
          if (!target) { return; }
          var b2 = el('button', 'guide-button', btn.label || target.name);
          b2.type = 'button';
          b2.addEventListener('click', function() { open(target); });
          actions.appendChild(b2);
        } else if (btn.url) {
          actions.appendChild(createLinkButton(btn, actions.children.length > 0));
        }
      });
      if (actions.children.length) { content.appendChild(actions); }
      (Array.isArray(section.note) ? section.note : section.note ? [section.note] : []).forEach(function(t) {
        content.appendChild(el('p', 'club-note', t));
      });
      bar.scrollLeft = buttons[index].offsetLeft - 16;
    }
    wrap.appendChild(bar);
    wrap.appendChild(content);
    if (sections.length) { select(0); }
    // After switching tabs, show the top of the new content.
    buttons.forEach(function(b) {
      b.addEventListener('click', function() {
        if (panelElement.scrollTop > wrap.offsetTop) { panelElement.scrollTop = wrap.offsetTop; }
      });
    });
    return wrap;
  }

  // A larger card for a featured group: name, related faculty, text and a link.
  function createFeatureCard(f) {
    var box = el('section', 'club-feature');
    box.appendChild(el('h4', 'club-feature-name', f.name || ''));
    if (f.meta) { box.appendChild(el('p', 'club-feature-meta', f.meta)); }
    if (f.text) { box.appendChild(el('p', 'club-feature-text', f.text)); }
    if (f.link) {
      var row = el('div', 'guide-actions');
      row.appendChild(createLinkButton(f.link, true));
      box.appendChild(row);
    }
    return box;
  }

  // ---------- 学部情報（フッターと各号館で共通。データは config.facultyGuide） ----------
  function facultyGuideData() {
    return (window.TOUR_CONFIG && window.TOUR_CONFIG.facultyGuide) || { faculties: [] };
  }

  function facultyGuideFacility() {
    var footer = (window.TOUR_CONFIG && window.TOUR_CONFIG.footer) || {};
    return footer.faculties && footer.faculties.facultyGuide ? footer.faculties : { name: t('footer.faculties'), facultyGuide: true, wide: true };
  }

  function findById(list, id) {
    for (var i = 0; i < (list || []).length; i++) {
      if (list[i].id === id) { return list[i]; }
    }
    return null;
  }

  // 号館カードの「この建物に関連する学部」: 押すと共通の学部情報を、その学部から開く。
  function createRelatedFaculties(building) {
    var data = facultyGuideData();
    var faculties = building.faculties.map(function(id) { return findById(data.faculties, id); }).filter(Boolean);
    if (!faculties.length) { return null; }
    var box = el('div', 'info-section faculty-related');
    box.appendChild(el('h3', 'info-heading', t('faculty.related')));
    var row = el('div', 'faculty-related-list');
    faculties.forEach(function(faculty) {
      var b = el('button', 'faculty-chip', faculty.name + ' →');
      b.type = 'button';
      b.addEventListener('click', function() {
        open(facultyGuideFacility(), { faculty: faculty.id, from: building });
      });
      row.appendChild(b);
    });
    box.appendChild(row);
    if (data.buildingNote) { box.appendChild(el('p', 'info-note', '※' + data.buildingNote)); }
    return box;
  }

  // 学部一覧 → 学部（概要と学科・課程の一覧）→ 学科・課程（学習内容と授業例）の3段階。
  function renderFacultyGuide(facility, state) {
    var data = facultyGuideData();
    var faculty = findById(data.faculties, state.faculty);
    var department = faculty ? findById(faculty.departments, state.department) : null;

    function go(next) {
      open(facility, { faculty: next.faculty, department: next.department, from: state.from });
      panelElement.scrollTop = 0;
    }

    var nav = el('div', 'faculty-nav');
    if (state.from) {
      var back = el('button', 'faculty-back faculty-back-building', '← ' + t('faculty.backTo', { name: state.from.name }));
      back.type = 'button';
      back.addEventListener('click', function() { open(state.from); });
      nav.appendChild(back);
    }
    if (department) {
      var up = el('button', 'faculty-back', '← ' + t('faculty.backTo', { name: faculty.name }));
      up.type = 'button';
      up.addEventListener('click', function() { go({ faculty: faculty.id }); });
      nav.appendChild(up);
    } else if (faculty) {
      var list = el('button', 'faculty-back', '← ' + t('faculty.backToList'));
      list.type = 'button';
      list.addEventListener('click', function() { go({}); });
      nav.appendChild(list);
    }
    if (nav.children.length) { bodyElement.appendChild(nav); }

    // 現在地（学部情報 › 学部 › 学科）
    var crumbs = [t('footer.faculties')];
    if (faculty) { crumbs.push(faculty.name); }
    if (department) { crumbs.push(department.name); }
    if (crumbs.length > 1) { bodyElement.appendChild(el('p', 'faculty-crumbs', crumbs.join(' › '))); }

    if (!faculty) {
      if (data.intro) { bodyElement.appendChild(el('p', 'info-lead', data.intro)); }
      var grid = el('div', 'faculty-grid');
      (data.faculties || []).forEach(function(f) {
        var card = el('button', 'faculty-card');
        card.type = 'button';
        card.appendChild(el('span', 'faculty-card-name', f.name));
        if (f.lead) { card.appendChild(el('span', 'faculty-card-text', f.lead)); }
        card.appendChild(el('span', 'faculty-card-count', t('faculty.departmentCount', { n: (f.departments || []).length })));
        card.addEventListener('click', function() { go({ faculty: f.id }); });
        grid.appendChild(card);
      });
      bodyElement.appendChild(grid);
    } else if (!department) {
      var head = el('div', 'faculty-head');
      head.appendChild(el('h3', 'faculty-name', faculty.name));
      if (faculty.lead) { head.appendChild(el('p', 'info-text', faculty.lead)); }
      bodyElement.appendChild(head);
      if (faculty.fields) {
        var fields = el('div', 'info-section');
        fields.appendChild(el('h3', 'info-heading', t('faculty.fields')));
        fields.appendChild(el('p', 'info-text', faculty.fields));
        bodyElement.appendChild(fields);
      }
      var depts = el('div', 'info-section');
      depts.appendChild(el('h3', 'info-heading', t('faculty.departments')));
      var deptList = el('div', 'faculty-dept-list');
      (faculty.departments || []).forEach(function(d) {
        var item = el('button', 'faculty-dept');
        item.type = 'button';
        item.appendChild(el('span', 'faculty-dept-name', d.name));
        if (d.text) { item.appendChild(el('span', 'faculty-dept-text', d.text)); }
        item.appendChild(el('span', 'faculty-dept-more', t('faculty.seeCourses') + ' →'));
        item.addEventListener('click', function() { go({ faculty: faculty.id, department: d.id }); });
        deptList.appendChild(item);
      });
      depts.appendChild(deptList);
      bodyElement.appendChild(depts);
      if (faculty.url) {
        var actions = el('div', 'guide-actions');
        actions.appendChild(createLinkButton({ label: t('faculty.officialFaculty', { name: faculty.name }), url: faculty.url }));
        bodyElement.appendChild(actions);
      }
      appendStudyLinks(data, faculty, null);
    } else {
      var dhead = el('div', 'faculty-head');
      dhead.appendChild(el('span', 'faculty-of', faculty.name));
      dhead.appendChild(el('h3', 'faculty-name', department.name));
      bodyElement.appendChild(dhead);
      if (department.text) {
        var learn = el('div', 'info-section');
        learn.appendChild(el('h3', 'info-heading', t('faculty.learn')));
        learn.appendChild(el('p', 'info-text', department.text));
        bodyElement.appendChild(learn);
      }
      if (department.courses && department.courses.length) {
        var courses = el('div', 'info-section');
        courses.appendChild(el('h3', 'info-heading', t('faculty.courses')));
        var ul = el('ul', 'info-items');
        department.courses.forEach(function(course) {
          var li = el('li', 'info-item');
          var name = el('span', 'info-item-name', course.name);
          if (course.year) { name.appendChild(el('span', 'faculty-year', course.year)); }
          li.appendChild(name);
          if (course.text) { li.appendChild(el('span', 'info-item-text', course.text)); }
          ul.appendChild(li);
        });
        courses.appendChild(ul);
        if (department.courseNote) { courses.appendChild(el('p', 'info-note', '※' + department.courseNote)); }
        bodyElement.appendChild(courses);
      }
      if (department.url) {
        var dActions = el('div', 'guide-actions');
        dActions.appendChild(createLinkButton({ label: t('faculty.officialDepartment', { name: department.name }), url: department.url }));
        bodyElement.appendChild(dActions);
      }
      appendStudyLinks(data, faculty, department);
    }
    if (data.source) { bodyElement.appendChild(el('p', 'club-note', data.source)); }
  }

  // 「もっと詳しく学びを知る」: 学科の資料があればそれを、なければ学部の資料を使う。
  function appendStudyLinks(data, faculty, department) {
    var config = data.studyLinks;
    if (!config || !config.items) { return; }
    var box = el('div', 'info-section study-links');
    box.appendChild(el('h3', 'info-heading', t('faculty.study')));
    var list = el('div', 'study-link-list');
    config.items.forEach(function(item) {
      var own = (department && department.study && department.study[item.id]) || (faculty.study && faculty.study[item.id]);
      var url = item.url || (own && own.url);
      if (!url) { return; }
      var year = item.year || (own && own.year);
      var a = el('a', 'study-link');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.appendChild(el('span', 'study-link-label', item.label + ' ↗'));
      if (item.text) { a.appendChild(el('span', 'study-link-text', item.text)); }
      var meta = el('span', 'study-link-meta');
      if (year) { meta.appendChild(el('span', 'study-tag', t('faculty.studyYear', { year: year }))); }
      meta.appendChild(el('span', 'study-tag ' + (item.login ? 'study-tag-login' : 'study-tag-public'), t(item.login ? 'faculty.loginOnly' : 'faculty.publicDoc')));
      a.appendChild(meta);
      list.appendChild(a);
    });
    box.appendChild(list);
    if (config.note) { box.appendChild(el('p', 'info-note', '※' + config.note)); }
    bodyElement.appendChild(box);
  }

  function createIntro(intro) {
    var box = el('div', 'guide-intro');
    if (intro.tag) {
      box.appendChild(el('span', 'guide-tag', intro.tag));
    }
    if (intro.heading) {
      box.appendChild(el('h3', 'guide-intro-heading' + (intro.pop ? ' pop3d' : ''), intro.heading));
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
      links.push({ label: circle.website.label || t('panel.viewOfficialSite'), url: circle.website.url });
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
    var button = el('button', 'guide-button secondary', (video.label || t('panel.watchVideo')) + ' ▶');
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
      links: (entry.url ? [{ label: entry.label || t('panel.relatedArticle'), url: entry.url }] : []).concat(base.links || [])
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
      prev.setAttribute('aria-label', t('panel.prevPhoto'));
      prev.addEventListener('click', function() { show(index - 1); });
      var next = el('button', 'gallery-nav next', '›');
      next.type = 'button';
      next.setAttribute('aria-label', t('panel.nextPhoto'));
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
      iframe.title = video.title || t('panel.video');
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

  // Draw the open panel again (after a language change), keeping the selected tabs and the scroll position.
  function refresh() {
    if (!lastShown || !document.body.classList.contains('info-open')) { return; }
    var selected = Array.prototype.map.call(bodyElement.querySelectorAll('[role="tablist"]'), function(bar) {
      var tabs = Array.prototype.slice.call(bar.children);
      return tabs.indexOf(bar.querySelector('.selected'));
    });
    var scroll = panelElement.scrollTop;
    if (lastShown.kind === 'facility') { open(lastShown.facility, lastShown.options); } else { openActivities.apply(null, lastShown.args); }
    bodyElement.querySelectorAll('[role="tablist"]').forEach(function(bar, i) {
      var tab = bar.children[selected[i]];
      if (selected[i] > 0 && tab) { tab.click(); }
    });
    panelElement.scrollTop = scroll;
  }

  window.TourPanel = { open: open, openActivities: openActivities, close: close, refresh: refresh };
})();
