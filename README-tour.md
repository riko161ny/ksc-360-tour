# 神戸三田キャンパス 360°ツアー 改修メモ

地点（ピン）ごとに360°写真を1枚ずつ置く形です。地点名・マップ上の位置・移動矢印・施設情報は `tour-config.js` にまとめています。

## ファイル構成

| ファイル | 役割 |
| --- | --- |
| tour-config.js | 地点（spots）・マップ・施設情報（ふだんはここだけ編集すればよい） |
| photos/ | 360°写真。`地点ID.jpg`（例：photos/p01.jpg）を置くと表示される |
| thumbs/ | 地点一覧のサムネイル。`地点ID.jpg`（無ければ番号を表示） |
| assets/map/campus-3d-v4.jpg | 右上のキャンパスマップ（ピンは画像ではなく tour-config.js の座標で表示） |
| index.html | 画面の骨組み |
| index.js | 写真の読み込み・地点の切り替え・サムネイル・訪問済み・URL（#p01） |
| js/map.js | キャンパスマップ（番号付きピン、現在地、視線方向の扇形、訪問済み） |
| js/panel.js | 施設情報パネル |
| style.css | PC/スマートフォンのレイアウト |
| vendor/, img/ | Marzipano 本体とアイコン |
| tools/tiles-to-equirect.py | 旧ツアーのタイル（tiles/）から1枚の360°写真に戻すスクリプト |

旧ツアーの `tiles/` と `data.js` は新しいツアーでは読み込みません（写真は tools/tiles-to-equirect.py で1枚のJPGに戻せます）。

## よくある作業

- **写真を入れる**：360°写真（横:縦＝2:1 の正距円筒）を `photos/p01.jpg` のように地点IDの名前で置く。幅 4096〜6000px 程度を推奨。写真がない地点は「準備中」と表示されます。
- **地点を増やす（室内など）**：`spots` に1行追加（id・名前・マップ位置）。マップに出さない地点は `map: null`。
- **最初の向きを決める / 矢印を置く**：URL の末尾に `?edit` を付けて開くと、画面中央の yaw / pitch が表示されます。
  - 最初の向き：`view: { yaw: 0.5, pitch: 0, fov: 1.57 }`
  - 移動矢印：`links: [ { target: "p02", yaw: 1.2, pitch: -0.1 } ]`
  - マップの扇形：写真の中でマップの上方向を向いたときの yaw を `northOffset` に
- **施設情報を追加**：`facilities` に書き、地点の `info` に `{ yaw, pitch, facility: "キー" }` を追加。確認できた情報だけを書く（空の項目は表示されません）。

## 確認方法

`file://` では動かないため、`python3 -m http.server` などで開いてください。
