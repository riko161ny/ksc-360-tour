/*
 * Language switching for the tour (日本語 / English / 한국어 / 简体中文).
 *
 * - Screen texts (buttons, help, messages) use keys: TourI18n.t('help.title').
 *   HTML elements get them with data-i18n="key" (text) or
 *   data-i18n-attr="aria-label:key;title:key2" (attributes).
 * - Texts in tour-config.js are translated by their place in the config, for example
 *   "facilities.library.name" or "spots.p20.name" (array items with an id use the id).
 *   Each translation keeps the Japanese it was made from; when the Japanese in
 *   tour-config.js changes, the old translation is not used and the Japanese is shown.
 * - Dictionaries live in lang/<code>.js and call TourI18n.register(code, data).
 *   To add a language, add it to LANGUAGES below and create lang/<code>.js.
 * - Missing translations: TourI18n.report() in the console, or open the page with ?i18n-report.
 */
'use strict';

(function() {
  var LANGUAGES = [
    { code: 'ja', label: '日本語', short: '日本語', htmlLang: 'ja' },
    { code: 'en', label: 'English', short: 'EN', htmlLang: 'en' },
    { code: 'ko', label: '한국어', short: '한국어', htmlLang: 'ko' },
    { code: 'zh-CN', label: '简体中文', short: '中文', htmlLang: 'zh-CN' }
  ];
  var DEFAULT_LANG = 'ja';
  var STORAGE_KEY = 'kscTour.lang';
  // Config fields that hold ids, file names or links rather than text shown on screen.
  var NOT_TEXT = ['id', 'photo', 'url', 'target', 'facility', 'youtube', 'style', 'size', 'icon',
    'key', 'src', 'image', 'photoDir', 'startSpot', 'openFacility', 'clubDirectory', 'from'];
  var JAPANESE = /[\u3040-\u30ff\u3400-\u9fff]/;

  var config = window.TOUR_CONFIG || {};
  var original = JSON.parse(JSON.stringify(config));
  var dictionaries = {};
  var loading = {};
  var listeners = [];
  var current = DEFAULT_LANG;
  var lastReport = { lang: DEFAULT_LANG, missing: [], outdated: [], reused: [], ui: [] };

  function register(code, data) {
    dictionaries[code] = data || {};
    var content = dictionaries[code].content || {};
    // Japanese → entry, so a translation still applies after items are reordered.
    var byJa = {};
    Object.keys(content).forEach(function(path) {
      var entry = content[path];
      if (entry && entry.ja && entry.text && !byJa[entry.ja]) { byJa[entry.ja] = entry; }
    });
    dictionaries[code].byJa = byJa;
  }

  function findLanguage(code) {
    for (var i = 0; i < LANGUAGES.length; i++) {
      if (LANGUAGES[i].code === code) { return LANGUAGES[i]; }
    }
    return null;
  }

  // Screen text by key; falls back to Japanese, then to the key itself.
  function t(key, vars) {
    var dict = dictionaries[current] && dictionaries[current].ui;
    var text = dict && dict[key];
    if (text == null) {
      if (current !== DEFAULT_LANG && lastReport.ui.indexOf(key) < 0) { lastReport.ui.push(key); }
      var ja = dictionaries[DEFAULT_LANG] && dictionaries[DEFAULT_LANG].ui;
      text = ja && ja[key] != null ? ja[key] : key;
    }
    if (vars) {
      text = text.replace(/\{(\w+)\}/g, function(m, name) { return vars[name] != null ? vars[name] : m; });
    }
    return text;
  }

  function pathPart(item, index) {
    return item && typeof item === 'object' && typeof item.id === 'string' ? item.id : String(index);
  }

  // Write the translated (or original Japanese) strings into the live config, in place,
  // so every part of the tour that holds a config object sees the new language.
  function translateConfig() {
    var dict = dictionaries[current] || {};
    var content = dict.content || {};
    var byJa = dict.byJa || {};
    var report = { lang: current, missing: [], outdated: [], reused: [], ui: [] };

    function textFor(path, ja) {
      if (current === DEFAULT_LANG || !JAPANESE.test(ja)) { return ja; }
      var entry = content[path];
      if (entry && entry.text && entry.ja === ja) { return entry.text; }
      var same = byJa[ja];
      if (same) {
        report.reused.push(path);
        return same.text;
      }
      (entry && entry.text ? report.outdated : report.missing).push({ key: path, ja: ja });
      return ja;
    }

    function walk(live, source, path) {
      if (Array.isArray(source)) {
        source.forEach(function(item, i) {
          var p = path + '.' + pathPart(item, i);
          if (typeof item === 'string') { live[i] = textFor(p, item); } else { walk(live[i], item, p); }
        });
        return;
      }
      if (!source || typeof source !== 'object' || !live) { return; }
      Object.keys(source).forEach(function(k) {
        var value = source[k];
        var p = path ? path + '.' + k : k;
        if (typeof value === 'string') {
          if (NOT_TEXT.indexOf(k) < 0) { live[k] = textFor(p, value); }
        } else if (value && typeof value === 'object') {
          walk(live[k], value, p);
        }
      });
    }

    walk(config, original, '');
    lastReport = report;
  }

  function applyDom(root) {
    (root || document).querySelectorAll('[data-i18n]').forEach(function(el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    (root || document).querySelectorAll('[data-i18n-attr]').forEach(function(el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function(pair) {
        var parts = pair.split(':');
        if (parts.length === 2) { el.setAttribute(parts[0].trim(), t(parts[1].trim())); }
      });
    });
  }

  function loadDictionary(code, done) {
    if (dictionaries[code]) { done(true); return; }
    if (loading[code]) { loading[code].push(done); return; }
    loading[code] = [done];
    var script = document.createElement('script');
    script.src = 'lang/' + code + '.js';
    script.onload = function() { finish(!!dictionaries[code]); };
    script.onerror = function() { finish(false); };
    document.head.appendChild(script);
    function finish(ok) {
      var callbacks = loading[code];
      delete loading[code];
      callbacks.forEach(function(cb) { cb(ok); });
    }
  }

  function setLanguage(code, options) {
    var lang = findLanguage(code) || findLanguage(DEFAULT_LANG);
    loadDictionary(lang.code, function(ok) {
      if (!ok) {
        console.warn('[i18n] 翻訳ファイルを読み込めませんでした: lang/' + lang.code + '.js');
        lang = findLanguage(DEFAULT_LANG);
      }
      current = lang.code;
      document.documentElement.lang = lang.htmlLang;
      translateConfig();
      applyDom();
      updateMenu();
      if (!(options && options.silent)) { save(current); }
      listeners.forEach(function(fn) {
        try { fn(current); } catch (e) { console.error(e); }
      });
      logReport();
    });
  }

  function report() {
    return lastReport;
  }

  function logReport() {
    if (current === DEFAULT_LANG) { return; }
    var r = lastReport;
    var count = r.missing.length + r.outdated.length + r.ui.length;
    if (!count) {
      console.info('[i18n] ' + current + ': すべて翻訳済みです');
    } else {
      console.groupCollapsed('[i18n] ' + current + ': 未翻訳 ' + r.missing.length + '件 / 原文が変わった訳 ' + r.outdated.length + '件 / 画面の文字 ' + r.ui.length + '件（日本語で表示中）');
      if (r.missing.length) { console.table(r.missing); }
      if (r.outdated.length) { console.table(r.outdated); }
      if (r.ui.length) { console.log('ui:', r.ui.join(', ')); }
      console.groupEnd();
    }
    if (/[?&]i18n-report\b/.test(location.search)) { showReportPanel(); }
  }

  // ?i18n-report: a small list of untranslated texts on screen, for checking translations.
  function showReportPanel() {
    var box = document.querySelector('#i18nReport');
    if (!box) {
      box = document.createElement('div');
      box.id = 'i18nReport';
      document.body.appendChild(box);
    }
    var r = lastReport;
    var lines = ['[' + r.lang + '] 未翻訳 ' + r.missing.length + ' / 原文変更 ' + r.outdated.length + ' / 画面の文字 ' + r.ui.length];
    r.missing.concat(r.outdated).forEach(function(item) { lines.push(item.key + ' : ' + item.ja); });
    r.ui.forEach(function(key) { lines.push('ui.' + key); });
    box.textContent = lines.join('\n');
  }

  function onChange(fn) {
    listeners.push(fn);
  }

  function save(code) {
    try { window.localStorage.setItem(STORAGE_KEY, code); } catch (e) { /* storage unavailable */ }
  }

  function saved() {
    try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  // ---------- Language menu (top right) ----------
  var menuButton = null;
  var menuList = null;

  function buildMenu() {
    var bar = document.querySelector('#topBar');
    if (!bar) { return; }
    var wrap = document.createElement('div');
    wrap.className = 'lang-switch';

    menuButton = document.createElement('button');
    menuButton.type = 'button';
    menuButton.id = 'langButton';
    menuButton.className = 'lang-button';
    menuButton.setAttribute('aria-haspopup', 'menu');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'langMenu');
    menuButton.innerHTML = '<svg class="lang-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9M12 3C9.5 5.6 8.2 8.6 8.2 12s1.3 6.4 3.8 9"/></svg><span class="lang-current"></span><span class="lang-caret" aria-hidden="true">▾</span>';

    menuList = document.createElement('ul');
    menuList.id = 'langMenu';
    menuList.className = 'lang-menu';
    menuList.setAttribute('role', 'menu');
    menuList.hidden = true;
    LANGUAGES.forEach(function(lang) {
      var li = document.createElement('li');
      li.setAttribute('role', 'none');
      var item = document.createElement('button');
      item.type = 'button';
      item.className = 'lang-item';
      item.setAttribute('role', 'menuitemradio');
      item.setAttribute('lang', lang.htmlLang);
      item.setAttribute('data-lang', lang.code);
      item.textContent = lang.label;
      item.addEventListener('click', function() {
        closeMenu(true);
        if (lang.code !== current) { setLanguage(lang.code); }
      });
      li.appendChild(item);
      menuList.appendChild(li);
    });

    menuButton.addEventListener('click', function() {
      if (menuList.hidden) { openMenu(); } else { closeMenu(false); }
    });
    menuButton.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        openMenu(event.key === 'ArrowUp' ? 'last' : null);
      }
    });
    menuList.addEventListener('keydown', function(event) {
      var items = menuItems();
      var index = items.indexOf(document.activeElement);
      if (event.key === 'ArrowDown') { event.preventDefault(); items[(index + 1) % items.length].focus(); }
      else if (event.key === 'ArrowUp') { event.preventDefault(); items[(index - 1 + items.length) % items.length].focus(); }
      else if (event.key === 'Home') { event.preventDefault(); items[0].focus(); }
      else if (event.key === 'End') { event.preventDefault(); items[items.length - 1].focus(); }
      else if (event.key === 'Escape') { event.preventDefault(); closeMenu(true); }
      else if (event.key === 'Tab') { closeMenu(false); }
    });
    document.addEventListener('pointerdown', function(event) {
      if (!menuList.hidden && !wrap.contains(event.target)) { closeMenu(false); }
    });
    // Keep clicks on the menu from turning the 360° view.
    ['pointerdown', 'mousedown', 'touchstart', 'wheel'].forEach(function(name) {
      wrap.addEventListener(name, function(event) { event.stopPropagation(); }, { passive: true });
    });

    wrap.appendChild(menuButton);
    wrap.appendChild(menuList);
    var help = document.querySelector('#helpButton');
    bar.insertBefore(wrap, help || null);
    updateMenu();
  }

  function menuItems() {
    return Array.prototype.slice.call(menuList.querySelectorAll('.lang-item'));
  }

  function openMenu(focus) {
    menuList.hidden = false;
    menuButton.setAttribute('aria-expanded', 'true');
    var items = menuItems();
    var target = focus === 'last' ? items[items.length - 1] : menuList.querySelector('[aria-checked="true"]') || items[0];
    target.focus();
  }

  function closeMenu(returnFocus) {
    if (!menuList || menuList.hidden) { return; }
    menuList.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    if (returnFocus) { menuButton.focus(); }
  }

  function updateMenu() {
    if (!menuButton) { return; }
    var lang = findLanguage(current);
    menuButton.querySelector('.lang-current').textContent = lang.short;
    menuButton.setAttribute('aria-label', t('lang.button') + ': ' + lang.label);
    menuButton.setAttribute('title', t('lang.button'));
    menuItems().forEach(function(item) {
      item.setAttribute('aria-checked', item.getAttribute('data-lang') === current ? 'true' : 'false');
    });
  }

  window.TourI18n = {
    languages: LANGUAGES,
    register: register,
    t: t,
    setLanguage: setLanguage,
    getLanguage: function() { return current; },
    onChange: onChange,
    applyDom: applyDom,
    report: report,
    // Called by index.js once the tour is built: the menu, then the saved language.
    start: function() {
      buildMenu();
      var code = saved();
      if (code && code !== DEFAULT_LANG && findLanguage(code)) {
        setLanguage(code, { silent: true });
      }
    }
  };
})();
