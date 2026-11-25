#!/usr/bin/env node
/*
 * 翻訳のチェック（制作用）
 *
 *   node tools/i18n/check.js          … 言語ごとに、未翻訳・原文が変わった訳・画面の文字の不足を一覧表示
 *   node tools/i18n/check.js --add    … 未翻訳の項目を lang/<言語>.js に空欄（text: ""）で追加する
 *   node tools/i18n/check.js --provisional … 仮訳（status: "provisional"）の数も表示する
 *
 * 新しく施設や説明文を tour-config.js に足したら --add を実行し、
 * lang/en.js などに追加された "text": "" を埋めてください（空欄のあいだは日本語で表示されます）。
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const args = process.argv.slice(2);
const NOT_TEXT = ['id', 'photo', 'url', 'target', 'facility', 'youtube', 'style', 'size', 'icon',
  'key', 'src', 'image', 'photoDir', 'startSpot', 'openFacility', 'clubDirectory', 'from'];
const JAPANESE = /[぀-ヿ㐀-鿿]/;

global.window = {};
eval(fs.readFileSync(path.join(ROOT, 'tour-config.js'), 'utf8'));

// Same keys as js/i18n.js: the place in the config, with ids for array items that have one.
const texts = {};
(function walk(o, p) {
  if (Array.isArray(o)) {
    o.forEach((v, i) => {
      const q = p + '.' + (v && typeof v === 'object' && typeof v.id === 'string' ? v.id : i);
      if (typeof v === 'string') { if (JAPANESE.test(v)) texts[q] = v; } else walk(v, q);
    });
  } else if (o && typeof o === 'object') {
    for (const k of Object.keys(o)) {
      const v = o[k];
      const q = p ? p + '.' + k : k;
      if (typeof v === 'string') { if (NOT_TEXT.indexOf(k) < 0 && JAPANESE.test(v)) texts[q] = v; }
      else if (v && typeof v === 'object') walk(v, q);
    }
  }
})(window.TOUR_CONFIG, '');

function readLang(code) {
  const file = path.join(ROOT, 'lang', code + '.js');
  const source = fs.readFileSync(file, 'utf8');
  const start = source.indexOf('TourI18n.register(');
  const json = source.slice(source.indexOf(',', start) + 1, source.lastIndexOf(')')).trim();
  return { file, header: source.slice(0, start), code, data: JSON.parse(json) };
}

function writeLang(lang) {
  fs.writeFileSync(lang.file, lang.header + 'TourI18n.register(' + JSON.stringify(lang.code) + ', ' + JSON.stringify(lang.data, null, 2) + ');\n');
}

const ja = readLang('ja');
const codes = fs.readdirSync(path.join(ROOT, 'lang')).filter(f => f.endsWith('.js')).map(f => f.slice(0, -3)).filter(c => c !== 'ja');

for (const code of codes) {
  const lang = readLang(code);
  const content = lang.data.content || (lang.data.content = {});
  const ui = lang.data.ui || (lang.data.ui = {});
  const byJa = {};
  Object.values(content).forEach(e => { if (e && e.text && !byJa[e.ja]) byJa[e.ja] = e; });
  const missing = [], outdated = [], unused = [];
  let provisional = 0;
  for (const key of Object.keys(texts)) {
    const e = content[key];
    if (e && e.text && e.ja === texts[key]) { if (e.status !== 'official') provisional++; continue; }
    if (byJa[texts[key]]) continue; // same Japanese translated elsewhere: used as is
    (e && e.text ? outdated : missing).push(key);
  }
  for (const key of Object.keys(content)) { if (!(key in texts)) unused.push(key); }
  const uiMissing = Object.keys(ja.data.ui).filter(k => !ui[k]);

  console.log('\n[' + code + '] 未翻訳 ' + missing.length + ' / 原文が変わった訳 ' + outdated.length +
    ' / 画面の文字の不足 ' + uiMissing.length + ' / 使われていない訳 ' + unused.length +
    (args.includes('--provisional') ? ' / 仮訳 ' + provisional : ''));
  missing.forEach(k => console.log('  未翻訳     ' + k + ' : ' + texts[k]));
  outdated.forEach(k => console.log('  原文変更   ' + k + ' : ' + content[k].ja + ' → ' + texts[k]));
  uiMissing.forEach(k => console.log('  画面の文字 ' + k + ' : ' + ja.data.ui[k]));
  unused.forEach(k => console.log('  未使用     ' + k));

  if (args.includes('--add') && (missing.length || outdated.length || uiMissing.length)) {
    missing.forEach(k => { content[k] = { ja: texts[k], text: '', status: 'provisional' }; });
    outdated.forEach(k => { content[k] = { ja: texts[k], text: '', status: 'provisional', previous: content[k].text }; });
    uiMissing.forEach(k => { ui[k] = ''; });
    writeLang(lang);
    console.log('  → lang/' + code + '.js に空欄を追加しました');
  }
}
