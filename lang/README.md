# 多言語対応（日本語・English・한국어・简体中文）

## ファイル

| ファイル | 中身 |
|---|---|
| `js/i18n.js` | 切り替えの仕組み（言語ボタン、翻訳の読み込み、未翻訳の記録） |
| `lang/ja.js` | 画面の文字（ボタン・案内など）の日本語 |
| `lang/en.js` `lang/ko.js` `lang/zh-CN.js` | 画面の文字と、tour-config.js の文章の訳 |
| `tools/i18n/check.js` | 未翻訳・原文が変わった訳の一覧（制作用） |

施設や団体の文章は、これまでどおり **tour-config.js に日本語で書きます**。訳は lang ファイルに入ります。

## 訳の書き方

```js
"facilities.library.name": { "ja": "図書室", "text": "Library", "status": "provisional" }
```

- キーは tour-config.js の中の場所です（`spots` は地点の id を使います。例：`spots.p20.name`）。
- `ja` は訳したときの日本語です。tour-config.js の日本語を書き換えると、その訳は使われなくなって日本語が表示されます（古い訳が出たままにならないようにするため）。
- `status`：`official` は大学が公表している表記、`provisional` は仮訳です。確認できたら `official` に変えてください。

## 新しく施設や説明文を足したとき

1. tour-config.js に日本語で書く
2. `node tools/i18n/check.js --add` を実行すると、未翻訳の項目が各言語ファイルに `"text": ""` で追加されます
3. `text` を埋める（空欄のあいだは日本語で表示されます）

画面の文字を増やすときは、`lang/ja.js` の `ui` にキーを足し、HTML なら `data-i18n="キー"`、JavaScript なら `TourI18n.t('キー')` で使います。

## 未翻訳の確認

- `node tools/i18n/check.js`（`--provisional` で仮訳の数も表示）
- ブラウザのコンソールに、言語を切り替えるたびに未翻訳の件数が出ます。`TourI18n.report()` で一覧も見られます
- URL に `?i18n-report` を付けて開くと、画面の左下に未翻訳の一覧が出ます

## 言語を増やすとき（例：繁体字）

1. `js/i18n.js` の `LANGUAGES` に `{ code: 'zh-TW', label: '繁體中文', short: '繁中', htmlLang: 'zh-TW' }` を足す
2. `lang/zh-CN.js` をコピーして `lang/zh-TW.js` を作り、1行目近くの `register("zh-CN"` を `register("zh-TW"` に変えて訳を直す
3. 必要なら style.css の `html[lang="zh-CN"] body` と同じようにフォントを指定する
