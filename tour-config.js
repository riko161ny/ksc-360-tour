/*
 * ツアーの設定ファイル（地点・マップ・施設情報を一元管理）
 *
 * ■ 360°写真の追加方法
 *   正距円筒（横:縦 = 2:1）の360°写真を photos/ に「地点ID.jpg」の名前で置くだけで表示されます。
 *   例：正門前（p01）なら photos/p01.jpg。写真がまだない地点は「準備中」と表示します。
 *   幅 4096〜6000px 程度を推奨します（端末が表示できない大きさのときは自動で縮小します）。
 *   サムネイルは thumbs/地点ID.jpg（無ければ番号の仮表示）。
 *
 * ■ spots（地点。並び順がサムネイル一覧の順番になります）
 *   id          : 地点ID。写真のファイル名と URL（#p01）に使います。
 *   name        : 画面に表示する地点名
 *   map         : マップ上の位置。画像の幅・高さに対する割合 { x: 0〜1, y: 0〜1 }
 *   photo       : 写真のパス。null なら photos/地点ID.jpg
 *   view        : 最初に向く方向 { yaw, pitch, fov }（ラジアン）。null なら正面
 *   northOffset : 写真の中で「マップの上方向」を向いたときの yaw。設定するとマップに視線の扇形を出します
 *   links       : 写真の中に出す移動矢印 [ { target: "p02", yaw: 0, pitch: 0 } ]
 *                 label: false を付けると、矢印に行き先の名前を出しません
 *   backButton  : （任意）画面下に出す戻るボタン { target: "p20", label: "図書館入口に戻る" }
 *   info        : 施設情報アイコン [ { yaw: 0, pitch: 0, facility: "facilities のキー" } ]
 *   facility    : （任意）この地点の施設情報。info で写真内に配置していないときは、画面中央に施設名ラベルを出します
 *   yaw / pitch は URL の末尾に ?edit を付けて開くと、画面中央の値を表示します。
 *
 * ■ facilities（施設情報。確認できた情報だけを書き、空の項目は表示されません）
 *   "example": {
 *     name: "施設名",
 *     overview: "施設概要",
 *     description: "施設の説明",
 *     purpose: "利用目的",
 *     images: [ { src: "assets/media/example-1.jpg", caption: "説明" } ],
 *     video: { youtube: "動画ID" } または { src: "assets/media/example.mp4" },
 *     activities: [ "activities のキー" ] または
 *                 [ { activity: "activities のキー", note: "この施設との関係", url: "関係が分かる記事", label: "リンク名" } ]
 *                 （活動と施設の関係を公式情報で確認できたときだけ書きます）
 *     links: [ { label: "大学公式サイト", url: "https://..." } ],
 *     source: "情報の出典（例：大学公式サイト 2026年10月確認）"
 *     facts: [ "📚 約25万冊", ... ]（数字などを小さなラベルで並べる）
 *     sections: [ { title: "見出し", text: ["段落", ...], items: [ { name, text, note, videos, links } ], rows: [ ["曜日", "時間"] ], note, links } ]
 *     overview / description は文字列のほか、段落ごとの配列でも書けます
 *   }
 *
 * ■ activities（「KSCでの学生生活」と施設情報の「関連する活動」で使う活動紹介）
 *   "example": { name: "活動名", summary: "独自の短い紹介文", video: { youtube: "動画ID" }（任意）, links: [ { label: "公式情報", url: "https://..." } ] }
 *   tag（小見出し）、video、sections（タップで開く詳細 { title, text, items, video, caption, links }）も使えます。
 *   studentLife に並べたキーの順に、「KSCでの学生生活」のカードとして表示します。
 */
window.TOUR_CONFIG = {
  title: "関西学院大学 神戸三田キャンパス 360°バーチャルキャンパスツアー",
  shortTitle: "神戸三田キャンパス 360°ツアー",
  disclaimer: "このサイトは個人の卒業制作です。関西学院大学の公式サイトではありません。",

  // 最初に表示する地点（null なら spots の先頭）
  startSpot: null,

  // 360°写真を置くフォルダ
  photoDir: "photos",

  // キャンパスマップ。width / height は画像の実寸（px）。
  // zoom は画像をマップ欄の何倍の幅で表示するか（desktop: PCの小さいマップ / large: 拡大時 / mobile: スマホ）。
  // campus-3d-v4.jpg は大学の2Dキャンパスマップと公式キャンパスマップ（2026）の配置を元にした模式的な立体図です。
  map: {
    image: "assets/map/campus-3d-v4.jpg",
    width: 2400,
    height: 1140,
    zoom: { desktop: 3, large: 1.6, mobile: 2 }
  },

  spots: [
    { id: "p01", name: "正門前", map: { x: 0.045, y: 0.7501 }, photo: null, view: null, northOffset: null,
      links: [
        { target: "p04", yaw: 2.95, pitch: -0.062 }
      ],
      info: [] },
    { id: "p02", name: "Ⅱ号館横庭園", map: { x: 0.1065, y: 0.7633 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p03", name: "ランバス記念礼拝堂", map: { x: 0.088, y: 0.6807 }, photo: null, view: { yaw: 0.31, pitch: 0, fov: 1.5708 }, northOffset: null,
      links: [],
      info: [
        { yaw: 0.716, pitch: -0.092, facility: "chapel" }
      ] },
    { id: "p04", name: "Ⅰ号館前", map: { x: 0.1503, y: 0.6348 }, photo: null, view: null, northOffset: null,
      links: [
        { target: "p01", yaw: 3.021, pitch: 0.018 }
      ],
      info: [
        { yaw: -1.412, pitch: -0.101, facility: "building1" },
        { yaw: 1.169, pitch: -0.006, facility: "building2" }
      ], facility: "building1" },
    { id: "p05", name: "Ⅱ号館前", map: { x: 0.1996, y: 0.7179 }, photo: null, view: { yaw: -1.964, pitch: -0.005, fov: 1.5708 }, northOffset: null,
      links: [
        { target: "101room", yaw: -1.894, pitch: 0.011 }
      ],
      info: [
        { yaw: -2.23, pitch: -0.002, facility: "building2" }
      ], facility: "building2" },
    { id: "p06", name: "Ⅲ号館", map: { x: 0.296, y: 0.6834 }, photo: null, view: { yaw: -0.39, pitch: 0, fov: 1.5708 }, northOffset: null,
      links: [ { target: "zemi", yaw: -0.11, pitch: 0.07 } ],
      info: [ { yaw: -0.39, pitch: 0, facility: "building3" } ] },
    { id: "p07", name: "食堂", map: { x: 0.2649, y: 0.5984 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p08", name: "生協", map: { x: 0.2472, y: 0.5882 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p09", name: "食堂前テラス席", map: { x: 0.2496, y: 0.5441 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p10", name: "スカイガーデン", map: { x: 0.2697, y: 0.4729 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p11", name: "Colorful Box（生協売店）", map: { x: 0.2971, y: 0.5051 }, photo: null, view: null, northOffset: null, links: [ { target: "p11-1", yaw: 1.43, pitch: 0.046 } ], info: [ { yaw: 0.43, pitch: -0.19, facility: "colorfulBox" } ] },
    { id: "p12", name: "第二厚生棟", map: { x: 0.3092, y: 0.425 }, photo: null, view: null, northOffset: null,
      links: [
        { target: "p12-win", yaw: -0.126, pitch: 0.107 }
      ],
      info: [
        { yaw: -0.426, pitch: 0.068, facility: "studentHall2" }
      ] },
    { id: "p13", name: "体育館", map: { x: 0.3597, y: 0.5577 }, photo: null, view: null, northOffset: null, links: [ { target: "p13-1", yaw: -0.41, pitch: 0.08 } ], info: [ { yaw: 0.269, pitch: -0.128, facility: "gym" } ] },
    { id: "p14", name: "バスロータリー", map: { x: 0.3758, y: 0.4356 }, photo: null, view: { yaw: -3.029, pitch: 0.044, fov: 1.5708 }, northOffset: null, links: [], info: [ { yaw: -3.029, pitch: 0.044, facility: "bus" } ], facility: "bus" },
    { id: "p15", name: "ビズカフェ", map: { x: 0.3937, y: 0.4255 }, photo: null, view: { yaw: -1.41, pitch: 0, fov: 1.5708 }, northOffset: null, links: [ { target: "p15-1", yaw: 1.642, pitch: 0.107 }, { target: "p17", yaw: -2.746, pitch: 0.104 } ], info: [ { yaw: -1.96, pitch: 0.129, facility: "bizcafe" } ] },
    { id: "p16", name: "コモンズ前", map: { x: 0.3865, y: 0.4848 }, photo: null, view: { yaw: 1.78, pitch: 0.075, fov: 1.5708 }, northOffset: null,
      links: [
        { target: "p17", yaw: 1.711, pitch: 0.121 }
      ],
      info: [
      // 位置は yaw（左右）・pitch（上下、プラスが下）で調整できます。editor.html で見ながら決められます
      { yaw: 2.55, pitch: 0.07, facility: "shingetsusai" },
      { yaw: 1.01, pitch: 0.08, facility: "circles" },
      // 仮の位置です。editor.html で見ながら調整してください
      { yaw: 1.78, pitch: -0.18, facility: "studentGroups" }
    ] },
    { id: "p17", name: "アカデミックコモンズ", map: { x: 0.4251, y: 0.4729 }, photo: null, view: null, northOffset: null,
      links: [
        { target: "p17-2", yaw: -0.972, pitch: -0.137 },
        { target: "p17-camp", yaw: 0.408, pitch: 0.228 }
      ],
      info: [
        { yaw: -1.826, pitch: 0.082, facility: "commons" }
      ] },
    { id: "p18", name: "Ⅵ号館前", map: { x: 0.4088, y: 0.5707 }, photo: null, view: { yaw: -2.791, pitch: 0.001, fov: 1.5708 }, northOffset: null,
      links: [
        { target: "p19", yaw: 3, pitch: -0.02 },
        { target: "p20", yaw: -3.07, pitch: -0.02 }
      ],
      info: [
        { yaw: -2.791, pitch: 0.001, facility: "building6" }
      ] },
    { id: "p19", name: "Ⅵ-101号室", map: { x: 0.4179, y: 0.6102 }, photo: null, view: null, northOffset: null, links: [ { target: "p18", yaw: 1.896, pitch: 0.01 } ], info: [ { yaw: 0.111, pitch: 0.043, facility: "building6" } ] },
    { id: "p20", name: "図書室", map: { x: 0.4362, y: 0.6323 }, photo: null, view: { yaw: -2.685, pitch: -0.039, fov: 1.5708 }, northOffset: null,
      links: [
        { target: "p20-DVD", yaw: -1.976, pitch: 0.11 },
        { target: "p20-3", yaw: 2.69, pitch: 0.125 }
      ],
      info: [
        { yaw: -2.201, pitch: 0.777, facility: "libraryEating" },
        { yaw: -2.685, pitch: -0.039, facility: "library" }
      ] },
    { id: "p21", name: "Ⅳ号館", map: { x: 0.4837, y: 0.5187 }, photo: null, view: null, northOffset: null,
      links: [
        { target: "p18", yaw: 1.436, pitch: 0.056 },
        { target: "p22", yaw: -1.565, pitch: -0.024 },
        { target: "p23", yaw: -2.476, pitch: -0.022 }
      ],
      info: [
        { yaw: -0.035, pitch: -0.053, facility: "building4" }
      ], facility: "building4" },
    { id: "p22", name: "Ⅴ号館", map: { x: 0.5395, y: 0.4661 }, photo: null, view: null, northOffset: null, links: [], info: [], facility: "building5" },
    { id: "p23", name: "Ⅶ号館", map: { x: 0.4549, y: 0.4255 }, photo: null, view: null, northOffset: null,
      links: [
        { target: "p23-1", yaw: -0.265, pitch: -0.053 }
      ],
      info: [
        { yaw: -0.027, pitch: -0.116, facility: "building7" }
      ], facility: "building7" },
    { id: "p24", name: "Ⅷ号館", map: { x: 0.3959, y: 0.3475 }, photo: null, view: null, northOffset: null, links: [ { target: "p24-1", yaw: -0.595, pitch: -0.047 } ], info: [ { yaw: -0.005, pitch: -0.181, facility: "building8" } ], facility: "building8" },
    { id: "p25", name: "来場者用駐車場", map: { x: 0.4855, y: 0.3678 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p26", name: "陸上競技場", map: { x: 0.5316, y: 0.2944 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p27", name: "テニスコート", map: { x: 0.7464, y: 0.5076 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    // 図書室の中（p20 の写真が入口側の1枚目）。マップにはピンを出さないので map は null
    { id: "p20-3", name: "3階｜参考図書・メディアフォーラムエリア", map: null, photo: null, view: { yaw: -1.189, pitch: 0.065, fov: 1.5708 }, northOffset: null, links: [ { target: "p20-4", yaw: 2.218, pitch: 0.096 } ], info: [ { yaw: -1.189, pitch: 0.065, facility: "libraryFloor3" } ] , backButton: { target: "p20", label: "図書館入口に戻る" } },
    { id: "p20-4", name: "4階｜一般図書エリア", map: null, photo: null, view: { yaw: -0.748, pitch: 0.02, fov: 1.5708 }, northOffset: null, links: [ { target: "p20-book", yaw: 0.862, pitch: 0.06, label: false } ], info: [ { yaw: -0.748, pitch: 0.02, facility: "libraryFloor4" } ] , backButton: { target: "p20", label: "図書館入口に戻る" } },
    { id: "p20-book", name: "図書室（本棚）", map: null, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p20-DVD", name: "視聴覚コーナー", map: null, photo: null, view: { yaw: -0.24, pitch: 0.3, fov: 1.5708 }, northOffset: null, links: [ { target: "p20", yaw: 1.25, pitch: 0.17 } ], info: [ { yaw: -0.24, pitch: 0.707, facility: "avCorner" } ] },
    { id: "board", name: "掲示板", map: null, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "zemi", name: "ゼミ", map: null, photo: null, view: { yaw: -1.13, pitch: 0.03, fov: 1.5708 }, northOffset: null, links: [], info: [ { yaw: -1.13, pitch: 0.03, facility: "zemi" } ] },
    // 2026年11月25日に追加した写真（移動矢印は editor.html で位置を決めてから足します）
    { id: "p23-1", name: "Ⅶ号館中庭", map: null, photo: null, view: null, northOffset: null, links: [], info: [], backButton: { target: "p23", label: "Ⅶ号館に戻る" } },
    { id: "p12-room", name: "食堂内部（第二厚生棟）", map: null, photo: null, view: { yaw: -1.0, pitch: 0, fov: 1.5708 }, northOffset: null, links: [ { target: "p12", yaw: 3.004, pitch: 0.035 } ], info: [], backButton: { target: "p12", label: "第二厚生棟入口に戻る" } },
    { id: "p12-win", name: "窓側席（第二厚生棟）", map: null, photo: null, view: null, northOffset: null, links: [ { target: "p12-room", yaw: -1.08, pitch: 0.104 } ], info: [], backButton: { target: "p12", label: "第二厚生棟入口に戻る" } },
    { id: "p17-2", name: "アカデミックコモンズ2階", map: null, photo: null, view: null, northOffset: null, links: [ { target: "p17", yaw: -0.69, pitch: 0.249 }, { target: "p16-terasu", yaw: -1.549, pitch: -0.01 } ], info: [ { yaw: 0.791, pitch: 0.186, facility: "commons" } ], backButton: { target: "p17", label: "アカデミックコモンズに戻る" } },
    { id: "p17-camp", name: "キャンプテント（アカデミックコモンズ）", map: null, photo: null, view: null, northOffset: null, links: [ { target: "p17", yaw: 0.313, pitch: 0.171 } ], info: [ { yaw: 0.187, pitch: 0.806, facility: "campTent" } ], backButton: { target: "p17", label: "アカデミックコモンズに戻る" } },
    { id: "tableterass", name: "中庭", map: null, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "201room", name: "Ⅱ号館201号室", map: null, photo: null, view: null, northOffset: null, links: [ { target: "101room", yaw: -0.968, pitch: 0.099 } ], info: [], backButton: { target: "p05", label: "Ⅱ号館前に戻る" } },
    { id: "101room", name: "Ⅱ号館101号室", map: null, photo: null, view: null, northOffset: null, links: [ { target: "201room", yaw: -0.914, pitch: -0.025 }, { target: "p05", yaw: -2.094, pitch: 0.073 } ], info: [], backButton: { target: "p05", label: "Ⅱ号館前に戻る" } },
    // 2026年11月25日（2回目）に追加した写真
    { id: "p11-1", name: "出口付近（生協売店）", map: null, photo: null, view: null, northOffset: null, links: [ { target: "p11", yaw: 0.003, pitch: 0.138 } ], info: [], backButton: { target: "p11", label: "生協売店入口に戻る" } },
    { id: "p13-1", name: "体育館内部", map: null, photo: null, view: null, northOffset: null, links: [ { target: "p13", yaw: 0.178, pitch: 0.005 } ], info: [], backButton: { target: "p13", label: "体育館前に戻る" } },
    { id: "p15-1", name: "和室前", map: null, photo: null, view: null, northOffset: null, links: [ { target: "p15", yaw: 1.944, pitch: 0.11 } ], info: [ { yaw: 0.037, pitch: 0.138, facility: "washitsu" }, { yaw: -2.34, pitch: 0.109, facility: "bus" } ], backButton: { target: "p15", label: "ビズカフェに戻る" } },
    { id: "p16-terasu", name: "コモンズテラス", map: null, photo: null, view: { yaw: 1.4, pitch: 0, fov: 1.5708 }, northOffset: null, links: [], info: [], backButton: { target: "p16", label: "コモンズ前に戻る" } },
    { id: "p24-1", name: "事務室前（Ⅷ号館）", map: null, photo: null, view: null, northOffset: null, links: [ { target: "p24-2", yaw: -1.926, pitch: 0.043 } ], info: [ { yaw: -0.295, pitch: 0.037, facility: "office8" } ], backButton: { target: "p24", label: "Ⅷ号館エントランスに戻る" } },
    { id: "p24-2", name: "パウダールーム（Ⅷ号館）", map: null, photo: null, view: null, northOffset: null, links: [ { target: "p24-1", yaw: -0.941, pitch: 0.194 } ], info: [ { yaw: 0.89, pitch: 0.154, facility: "powderRoom" } ], backButton: { target: "p24", label: "Ⅷ号館エントランスに戻る" } }
  ],

  // 画面下のボタン（学部情報・KSCイベント情報・サークル・部活情報）
  footer: {
    // 学部情報（中身は下の facultyGuide）
    faculties: {
      name: "学部情報",
      facultyGuide: true,
      wide: true
    },
    events: {
      name: "KSCイベント情報",
      placeholder: "内容は準備中です。"
    },
    // from に並べた facilities（コモンズ前のマーク）のカードを、1つのパネルにまとめて出します
    // facility を書くと、その施設情報のパネルをそのまま開きます（from は複数のパネルのカードをまとめる書き方）
    clubs: {
      facility: "circles"
    }
  },

  facilities: {
    // バスロータリー（p14）：時刻表は書き写さず、大学公式サイトのバスのページへリンクする
    "bus": {
      name: "バスの時刻表",
      description: "バスの時刻表は、大学公式サイトのバスのページで確認できます。ダイヤは変わることがあるので、お出かけ前に最新の情報をご覧ください。",
      links: [ { label: "バスのページ（大学公式サイト）", url: "https://www.kwansei.ac.jp/ksc/access/bus" } ]
    },
    // コモンズ前（p16）の「新月祭をのぞいてみよう！」パネル
    "shingetsusai": {
      name: "新月祭をのぞいてみよう！",
      icon: "🎪",
      // 360°写真の中では「新月祭」の立体文字で表示（style を外すと通常の丸いマークに戻ります）
      hotspot: { style: "float3d", text: "新月祭", sub: "🎪 のぞいてみよう！" },
      intro: {
        tag: "大学祭",
        heading: "大学祭「新月祭」",
        pop: true,
        text: "学生が主体となって企画・運営する大学祭。模擬店や学生団体による企画などが行われています。"
      },
      cards: [
        {
          icon: "🎤",
          title: "どんな企画があるの？",
          text: "2026年の神戸三田キャンパスで開催された企画を紹介しています。",
          chips: ["軽音サークル Deep Stream の芝生ライブ", "ダンスサークル Ney-Kid の公演", "よさこいサークル 炎流 の演舞", "フラダンスサークル Mahalo のステージ"],
          buttons: [ { label: "2026年の企画を見る", url: "https://www.kgfes-shingetsusai.com/ksc%E4%B8%80%E8%88%AC%E4%BC%81%E7%94%BB" } ]
        },
        {
          icon: "📸",
          title: "実際の雰囲気を見てみよう！",
          text: "新月祭の開催風景を紹介しています。",
          buttons: [ { label: "開催の様子を見る", url: "https://kgpress.jp/kgnews/8557/" } ]
        }
      ]
    },
    // コモンズ前（p16）の「サークル活動をのぞいてみよう！」パネル（中身は下の circles）
    "circles": {
      name: "部活・サークル",
      icon: "✨",
      // 360°写真の中では文字だけが浮かぶ表示（新月祭と同じ立体文字、下の一行なし）
      hotspot: { style: "float3d", text: "部活・サークル", size: "small" },
      // 情報が多いので、PCではパネルを画面の約3分の2の幅で開く
      wide: true,
      intro: {
        tag: "CLUBS & CIRCLES",
        text: "関西学院大学には、スポーツや音楽、ダンス、文化活動など、さまざまな部活・サークルがあります。神戸三田キャンパスのサークルをはじめ、関西学院大学全体の部活動も紹介しています。興味のある活動を探してみましょう。"
      },
      // タブと団体の一覧（中身は下の clubDirectory）。以前の炎流の動画カードを出すときは showCircles: true
      clubDirectory: true
    },

    // コモンズ前（p16）の「その他の学生団体」パネル（中身は下の studentGroupDirectory）
    "studentGroups": {
      name: "その他の学生団体",
      hotspot: { style: "float3d", text: "その他の学生団体", size: "small" },
      wide: true,
      intro: {
        tag: "STUDENT ACTIVITIES",
        text: "神戸三田キャンパスでは、部活やサークル以外にも、学生が主体となってさまざまな活動に取り組んでいます。新入生のサポートやイベント運営、映像制作、地域貢献など、多彩な学生の活動を紹介します。"
      },
      clubDirectory: "studentGroupDirectory"
    },
    // 図書室（p20）の足元の飲食エリア
    "libraryEating": {
      name: "飲食エリア",
      description: "長時間の勉強やレポート作成の合間に、図書館から出ることなく食事をとれるスペースです。2026年10月から試験的に設置されており、指定されたエリア内で、ルールに従って飲食できます。"
    },
    // ゼミ（zemi）のマーク。内容は確認できたものを書き足してください
    "zemi": {
      name: "ゼミ"
    },
    // ランバス記念礼拝堂（チャペル）の情報マーク（中身は確認できた情報をあとで足します）
    "chapel": {
      name: "ランバス記念礼拝堂"
    },
    // 第二厚生棟の情報マーク（中身は確認できた情報をあとで足します）
    "studentHall2": {
      name: "第二厚生棟"
    },
    // アカデミックコモンズの情報マーク（中身は確認できた情報をあとで足します）
    "commons": {
      name: "アカデミックコモンズ"
    },
    // キャンプテントの情報マーク（中身は確認できた情報をあとで足します）
    "campTent": {
      name: "キャンプテント"
    },
    // 生協売店の情報マーク（中身は確認できた情報をあとで足します）
    "colorfulBox": {
      name: "Colorful Box（生協売店）"
    },
    // ビズカフェの情報マーク（中身は確認できた情報をあとで足します）
    "bizcafe": {
      name: "ビズカフェ"
    },
    // 和室の情報マーク（中身は確認できた情報をあとで足します）
    "washitsu": {
      name: "和室"
    },
    // 体育館の情報マーク（中身は確認できた情報をあとで足します）
    "gym": {
      name: "体育館"
    },
    // Ⅷ号館の事務室の情報マーク（中身は確認できた情報をあとで足します）
    "office8": {
      name: "事務室（Ⅷ号館）"
    },
    // Ⅷ号館のパウダールームの情報マーク（中身は確認できた情報をあとで足します）
    "powderRoom": {
      name: "パウダールーム（Ⅷ号館）"
    },
    // ↓ 施設情報（riko さんがまとめた内容。overview は段落ごとの配列、sections は見出しごとのまとまり）
    "building1": {
      "faculties": ["policy", "architecture"],
      "name": "Ⅰ号館",
      "overview": [
        "Ⅰ号館は、主に総合政策学部・総合政策研究科に関連する施設がある校舎です。",
        "館内には講義室があり、総合政策学部や建築学部の学生などが授業で利用しています。また、総合政策学部・建築学部の運営に関する事務室も設置されています。",
        "エントランスホールには、総合政策学部の理念を表す「仕えられるためにではなく、仕えるために」という言葉が刻まれています。"
      ],
      "sections": [
        {
          "title": "主な設備・施設",
          "items": [
            {
              "name": "講義室"
            },
            {
              "name": "学部事務室"
            },
            {
              "name": "ATM（三井住友銀行・ゆうちょ銀行／1階）"
            }
          ]
        },
        {
          "title": "ATM利用時間",
          "rows": [
            [
              "平日",
              "9:00〜19:00"
            ],
            [
              "土曜",
              "9:00〜17:00"
            ],
            [
              "日曜・祝日",
              "利用不可"
            ]
          ]
        }
      ]
    },
    "building2": {
      "faculties": ["policy", "architecture"],
      "name": "Ⅱ号館",
      "overview": [
        "Ⅱ号館は、主に総合政策学部や建築学部の学生が利用する講義棟です。館内には複数の講義室があり、授業や演習、講演会などが行われています。",
        "また、総合政策学部の学生や大学院生が研究成果を発表する「リサーチ・フェア」の開催会場としても利用されています。リサーチ・フェアでは、学生が日頃の研究成果を発表し、参加者との議論や意見交換を通じて学びを深めています。",
        "2階には、学生のボランティア活動を支援する「ヒューマン・サービス支援室」が設置されています。"
      ],
      "sections": [
        {
          "title": "主な施設・設備",
          "items": [
            {
              "name": "講義室（1〜3階）",
              "text": "授業や演習、学部講演会などが行われる教室。"
            },
            {
              "name": "ヒューマン・サービス支援室（2階210教室）",
              "text": "ボランティア活動に関する情報提供や相談を行う施設。",
              "note": "開室：平日 10:30〜17:00（大学の授業実施期間中のみ開室）"
            }
          ]
        },
        {
          "title": "主なイベント",
          "items": [
            {
              "name": "リサーチ・フェア",
              "text": "総合政策学部・総合政策研究科の学生などが、日頃の研究成果を発表するイベント。Ⅱ号館で開催された実績があります。",
              "videos": [ { "label": "リサーチ・フェアの動画を見る", "youtube": "Wj_iboTgMT0" } ],
              "links": [ { "label": "2024年度 リサーチ・フェアの記事", "url": "https://www.kwansei.ac.jp/s_policy/news/03574.html" } ]
            }
          ]
        }
      ]
    },
    "building3": {
      "faculties": ["policy", "architecture"],
      "name": "Ⅲ号館",
      "overview": [
        "Ⅲ号館は、総合政策学部と建築学部の学生が学習・研究活動に利用する建物です。",
        "総合政策学部のメディア情報分野に関連するゼミ・演習活動のほか、建築学部の設計・デザインに関する学習や研究にも利用されています。",
        "1階のデザインスタジオでは、建築学部の学生が設計演習や建築模型の制作などに取り組んでいます。また、学生が制作した建築作品の展示や、卒業設計・論文の発表会なども行われています。",
        "さらに、1階には建築関連の専門書約4,500冊を収蔵する「大島文庫」が設置されています。"
      ],
      "sections": [
        {
          "title": "主な施設・設備",
          "items": [
            {
              "name": "デザインスタジオ（1階）",
              "text": "建築設計や模型制作などを行う学習・制作スペース。"
            },
            {
              "name": "大島文庫（1階）",
              "text": "建築関連の専門書約4,500冊を収蔵する図書室。"
            },
            {
              "name": "ゼミ・演習室",
              "text": "総合政策学部のメディア情報分野などに関連する学習・研究活動。"
            },
            {
              "name": "ラウンジ・展示スペース（2階など）",
              "text": "学生の建築作品や卒業設計などの展示に利用。"
            },
            {
              "name": "研究室",
              "text": "建築設計、都市計画などに関する専門的な研究活動。"
            }
          ]
        }
      ]
    },
    "building4": {
      "faculties": ["science", "engineering", "bes"],
      "name": "Ⅳ号館",
      "overview": [
        "Ⅳ号館は、主に理学部・工学部・生命環境学部の学生が実験や研究に利用する建物です。",
        "館内には化学学生実験室や情報科学実験室、各分野の研究室が設けられています。化学・物理学・情報工学・数理科学・生物科学など、幅広い分野の研究が行われています。",
        "また、VR技術を活用した研究や、宇宙開発に関する研究、微生物の研究など、多様な研究活動が行われていることも特徴です。"
      ],
      "sections": [
        {
          "title": "主な施設・設備",
          "items": [
            {
              "name": "化学学生実験室（1階）",
              "text": "化学科の学生が化学実験を行う施設。"
            },
            {
              "name": "情報科学実験室（2〜4階）",
              "text": "アルゴリズム、コンピュータネットワーク、VR技術などに関連する研究施設。"
            },
            {
              "name": "研究室（各階）",
              "text": "化学、物理学、数理科学、情報工学、航空宇宙工学、生物科学などの研究活動。"
            },
            {
              "name": "LLL教室・VC演習室",
              "text": "情報機器を備えた教育・演習用の教室。"
            }
          ]
        }
      ]
    },
    "building5": {
      "faculties": ["science", "engineering", "bes"],
      "name": "Ⅴ号館",
      "overview": [
        "Ⅴ号館は、理学部・工学部・生命環境学部に関連する研究室や実験施設がある建物です。",
        "館内では、数理科学や情報工学、生命医科学などの研究が行われています。VR・AI・データサイエンスを扱う研究室のほか、数学や生命医科学に関する研究室も設けられています。",
        "また、1階には機械工作用の機器や3Dプリンターを備えた工作室があり、ものづくりに関連する設備も整っています。"
      ],
      "sections": [
        {
          "title": "主な施設・設備",
          "items": [
            {
              "name": "工作室（1階）",
              "text": "機械工作用の機器や3Dプリンターを備えた施設。"
            },
            {
              "name": "情報・機械系実験準備室（1階）",
              "text": "情報・機械系の実験・実習に関連する準備室。"
            },
            {
              "name": "システム実験室3（2階）",
              "text": "VR・AI・データサイエンスなどの研究に関連する施設。"
            },
            {
              "name": "研究室（2・3階など）",
              "text": "数理科学、情報工学、生命医科学などの専門的な研究が行われる施設。"
            }
          ]
        }
      ]
    },
    "building7": {
      "faculties": ["engineering", "bes"],
      "name": "Ⅶ号館",
      "overview": [
        "Ⅶ号館は、主に工学部・生命環境学部の学生が実験や研究に利用する建物です。",
        "館内には、物質・電気系学生実験室、環境応用化学学生実験室、生命系学生実験室などが設けられています。",
        "物質工学、電気電子工学、環境応用化学、生命科学など、幅広い分野の研究が行われており、次世代電池の開発やDNA・タンパク質の解析、生命現象の解明などに取り組んでいます。",
        "また、館内には高度な研究機器を備えた共用施設や、ファミリーマートもあります。"
      ],
      "sections": [
        {
          "title": "主な施設・設備",
          "items": [
            {
              "name": "物質・電気系学生実験室1（2階）",
              "text": "物理学や電気電子分野の実験を行う施設。"
            },
            {
              "name": "環境応用化学学生実験室（3階）",
              "text": "環境応用化学科の学生が化学実験を行う施設。"
            },
            {
              "name": "生命系学生実験室2（4階）",
              "text": "生命医科学に関する実験を行う施設。"
            },
            {
              "name": "研究室（各階）",
              "text": "物質工学、電気電子工学、環境応用化学、生物科学、生命医科学などの研究施設。"
            },
            {
              "name": "研究機器共用室",
              "text": "顕微鏡やDNA解析装置など、専門的な研究機器を備えた施設。"
            },
            {
              "name": "ファミリーマート",
              "text": "館内に設置されたコンビニエンスストア。"
            }
          ]
        }
      ]
    },
    "building8": {
      "name": "Ⅷ号館",
      "overview": [
        "Ⅷ号館は、2022年に完成した地上4階建ての校舎です。",
        "2階から4階には合計17室の講義室があり、日常的な授業や説明会などに利用されています。",
        "1階には、学生の各種手続きを支援する神戸三田キャンパス事務室や、フィッティングルームを備えたパウダールームが設置されています。",
        "また、屋上には口径40cmの反射望遠鏡を備えた天体観測ドームがあり、理学部の宇宙研究に関連する施設として整備されています。"
      ],
      "sections": [
        {
          "title": "主な施設・設備",
          "items": [
            {
              "name": "神戸三田キャンパス事務室（1階）",
              "text": "大学生活に関する各種手続きや相談などに対応する窓口。"
            },
            {
              "name": "講義室（2〜4階）",
              "text": "合計17室の講義室があり、授業や説明会などに利用される。"
            },
            {
              "name": "パウダールーム（1階）",
              "text": "フィッティングルームを備えた学生向け施設。"
            },
            {
              "name": "天体観測ドーム（屋上）",
              "text": "口径40cmの反射望遠鏡を備えた、天体観測・研究のための施設。"
            },
            {
              "name": "証明書発行機",
              "text": "各種証明書の発行や申請に関連する設備。"
            }
          ]
        },
        {
          "title": "神戸三田キャンパス事務室",
          "text": [
            "Ⅷ号館1階にある、大学生活に関するさまざまな手続きや相談に対応する窓口です。",
            "履修登録や授業、試験、奨学金などの相談に加え、学部行事やキャンパス施設に関する問い合わせにも対応しています。"
          ],
          "rows": [
            [
              "平日",
              "8:50〜11:30／12:30〜16:50"
            ],
            [
              "土曜・日曜・祝日",
              "原則閉室"
            ]
          ],
          "note": "大学の休業期間中などは変更される場合があります。",
          "links": [
            {
              "label": "関西学院大学「お問い合わせ」",
              "url": "https://www.kwansei.ac.jp/contact/"
            }
          ]
        }
      ]
    },
    "library": {
      "name": "図書室",
      "facts": [
        "📚 約25万冊",
        "🪑 528席",
        "💻 PC114台",
        "🕙 平日22時まで"
      ],
      "overview": [
        "神戸三田キャンパスの6号館2〜4階にある図書メディア館は、約25万冊の図書と528席の閲覧席を備えた学習・研究施設です。",
        "館内には、個人での自習に適した閲覧席のほか、パソコンを利用できるメディア・フォーラムやグループ学習用の部屋などがあり、目的に応じた学習ができます。",
        "通常の授業期間中は平日22時まで開館しており、授業の予習・復習やレポート作成、試験勉強などに利用できます。"
      ],
      "sections": [
        {
          "title": "開館時間",
          "rows": [
            [
              "月〜金曜日",
              "8:50〜22:00"
            ],
            [
              "土曜日",
              "8:50〜18:30"
            ],
            [
              "日曜日",
              "12:00〜18:00（開館日のみ）"
            ],
            [
              "祝日",
              "授業実施日などを除き休館"
            ],
            [
              "長期休暇期間",
              "8:50〜18:00 など（短縮・変更あり）"
            ]
          ],
          "links": [
            {
              "label": "2026年度 開館カレンダー（PDF）",
              "url": "https://library.kwansei.ac.jp/pdf_data/calendar/schedule-ksc.pdf"
            }
          ]
        }
      ]
    },
    "avCorner": {
      "name": "視聴覚コーナー",
      "overview": [
        "図書館が所蔵する映像・音声資料を利用でき、語学学習などに活用できます。また、自分で持ち込んだDVDなどを視聴することも可能です。",
        "利用する際は、2階の貸出・返却カウンターで受付を行います。"
      ]
    },
    "libraryFloor3": {
      "name": "3階｜参考図書・メディアフォーラムエリア",
      "overview": [
        "3階には、辞書や事典などの参考図書、雑誌、新書・文庫などが置かれています。また、パソコンを利用できるメディア・フォーラムや、グループで学習できる閲覧室もあります。"
      ]
    },
    "libraryFloor4": {
      "name": "4階｜一般図書エリア",
      "overview": [
        "4階には、学習や研究に役立つ一般図書が数多く並んでいます。また、授業に関連する指定図書や、就職・資格・留学などに関する図書もあり、幅広い目的で利用できます。"
      ]
    },
    // Ⅵ号館前（p18）のマーク
    "building6": {
      "name": "Ⅵ号館",
      "overview": [
        "Ⅵ号館は、大人数での講義やイベントに利用される教室のほか、図書メディア館やPC教室などを備えた建物です。",
        "1階の101教室では、オープンキャンパスの学部紹介や模擬講義なども行われています。",
        "また、2〜4階には図書メディア館があり、3階にはPCを利用できるメディア・フォーラムが設置されています。"
      ],
      "sections": [
        {
          "title": "主な施設・設備",
          "items": [
            {
              "name": "101教室（1階）",
              "text": "大人数を対象とした講義や学部説明会、イベントなどに利用される教室。"
            },
            {
              "name": "図書メディア館（2〜4階）",
              "text": "図書の閲覧・貸出や自習、資料調査などに利用できる施設。"
            },
            {
              "name": "PC教室（2階）",
              "text": "202・203講義室にPCを設置。情報機器を利用した授業や学習に使用されます。"
            },
            {
              "name": "メディア・フォーラム（3階）",
              "text": "PCを利用した情報検索やレポート作成などができる学習スペース。"
            }
          ]
        }
      ]
    }
  },

  // 「KSCでの学生生活」に表示する活動（紹介文は公式情報をもとにした独自の短い説明）
  studentLifeLead: "神戸三田キャンパスで行われている活動の一部を紹介します。くわしくは各公式情報をご覧ください。",
  studentLife: ["shingetsusai", "researchFair"],

  // 「サークル活動をのぞいてみよう！」に表示するサークル。上から順にカードになります。
  // 公式に確認できた情報・URLだけを書いてください。使わない項目は省略できます。
  //   name      : サークル名            icon    : カードのアイコン（絵文字）
  //   category  : 小さな見出し（例：よさこい）
  //   summary   : 紹介文
  //   website   : 公式サイト { label, url }
  //   sns       : 公式SNS [ { label: "Instagram", url } ]
  //   videos    : 活動動画 [ { label: "演舞動画を見る", youtube: "動画ID", caption: "説明" } ]
  //   eventVideos: 大会・イベント動画（videos と同じ形）
  //   links     : その他の関連リンク [ { label, url } ]
  // 「部活・サークル」カードの中身。sections がカード上部のタブ（KSCのサークル／体育会／文化系の部活）。
  // categories はこのサイト独自の分類。links は大学公式サイトに載っているものだけ（末尾の計測用パラメータは除く）
  // フッターの「学部情報」と各号館の「この建物に関連する学部」が共通で使う学部データ。
  // 学部 → 学科・課程 → 授業例 の順に表示されます。号館側は facilities の faculties: ["policy", ...] で指定します。
  facultyGuide: {
    "intro": "神戸三田キャンパスには5つの学部があります。学部を選ぶと、学部の紹介と学科・課程の一覧が表示されます。",
    "source": "学部・学科の紹介と授業例は、大学公式サイトの各学部・学科のページをもとにまとめています（2026年11月確認）。授業の内容や開講年次は変わることがあります。",
    "studyLinks": {
      "note": "卒業に必要な単位や必修科目は、入学年度によって異なることがあります。自分の入学年度の資料を確認してください。",
      "items": [
        {
          "id": "curriculum",
          "label": "カリキュラムを見る",
          "text": "学科・課程ごとの授業科目と単位数の一覧です。"
        },
        {
          "id": "model",
          "label": "4年間の履修モデルを見る",
          "text": "1年次から4年次まで、どの順番で授業を取るかの例です。"
        },
        {
          "id": "syllabus",
          "label": "シラバスで授業を調べる",
          "text": "授業ごとの内容と授業計画を調べられます。開講年度・キャンパス・学部を選んで検索します。",
          "url": "https://syllabus.kwansei.ac.jp/uniasv2/UnSSOLoginControlFree",
          "year": "開講年度ごと（検索画面で選ぶ）"
        },
        {
          "id": "handbook",
          "label": "履修心得・履修の手引き",
          "text": "履修の方法、卒業要件、必修科目をまとめた資料です。2026年度版の一般公開は確認できなかったため、学生ポータル kwic への案内にしています。",
          "url": "https://kwic.kwansei.ac.jp/",
          "year": "2026年度（在学生のみ）",
          "login": true
        },
        {
          "id": "timetable",
          "label": "授業時間帯を見る",
          "text": "神戸三田キャンパスの学部の授業は、第1時限 9:00〜10:30 から第5時限 16:50〜18:20 までです。",
          "url": "https://www.kwansei.ac.jp/campuslife/timetable.html",
          "year": "2026年度以降"
        }
      ]
    },
    "buildingNote": "各号館のカードの説明をもとにした関連です。その学部の授業が主にこの建物で行われることを示すものではありません。",
    "faculties": [
      {
        "id": "policy",
        "study": {"curriculum": {"url": "https://www.kwansei.ac.jp/s_policy/assets/sousei_curriculum1.pdf", "year": "2021年度以降入学生"}, "model": {"url": "https://www.kwansei.ac.jp/s_policy/assets/sousei_curriculum3.pdf", "year": "2021年度以降入学生"}},
        "name": "総合政策学部",
        "url": "https://www.kwansei.ac.jp/s_policy/",
        "lead": "「自然と人間の共生、人間と人間の共生」を理念に、現代社会のさまざまな問題に対して、多様な学問の専門知識をもとに解決策を探り、実践できる力を育てる学部です。",
        "fields": "法学・政治学・経済学・経営学・社会学・社会福祉学・工学・理学・言語などを組み合わせて学びます。1年次は学科に所属せず、2年次から4つの学科に分かれます。",
        "departments": [
          {
            "id": "policy-policy",
            "name": "総合政策学科",
            "url": "https://www.kwansei.ac.jp/s_policy/policy/",
            "text": "「共生の社会」の構築をめざし、「自然環境」「社会・経済・技術システム」「言語・文化・思想」の3つの領域から、目標に合わせて科目を選んで学びます。",
            "courses": [
              {
                "name": "公共選択論",
                "text": "経済と政治・行政の関わりや、政策が決まるしくみを公共選択論の考え方から理解します。"
              },
              {
                "name": "環境政策論",
                "text": "環境政策の歴史や課題を学び、分析・考察・提案する力を身につけます。"
              },
              {
                "name": "公共政策課題研究A【国際貿易の発展と税関】",
                "text": "税関の手続きや関連する政策を、神戸税関の職員などを講師に迎えて学びます。"
              }
            ]
          },
          {
            "id": "policy-media",
            "name": "メディア情報学科",
            "url": "https://www.kwansei.ac.jp/s_policy/applied_informatics/",
            "text": "人にやさしい豊かな情報社会の実現に向けて、知識や技術、政策を立てる力を身につけ、解決策を映像・メディアとして社会に発信することを学びます。",
            "courses": [
              {
                "name": "メディア制作演習（シミュレーション）",
                "text": "Pythonプログラミングの基本を学び、ドローンの飛行を制御するプログラムを作ります。"
              },
              {
                "name": "メディア制作演習（映像表現）",
                "text": "デジタル一眼カメラでの撮影や編集を通じて、映像による政策提言をめざします。"
              },
              {
                "name": "メディア情報課題研究",
                "text": "学術研究のためのコミュニケーション力や批判的思考力を育てます。"
              }
            ]
          },
          {
            "id": "policy-urban",
            "name": "都市政策学科",
            "url": "https://www.kwansei.ac.jp/s_policy/urban/",
            "text": "市民・企業・行政が協働できる都市空間の創造をめざし、政治学・経済学・経営学・都市科学を組み合わせて政策提言に取り組みます。",
            "courses": [
              {
                "name": "ベンチャー経営論",
                "text": "起業に関する基本的な知識や考え方を体系的に学びます。"
              },
              {
                "name": "都市政策課題研究B【JAL連携講座】",
                "text": "航空業界やエアラインのビジネス戦略について学びます。"
              },
              {
                "name": "政策コンサルティング演習",
                "text": "経済の課題を統計的に分析し、財務省の政策担当者に直接政策提言を行います。"
              }
            ]
          },
          {
            "id": "policy-international",
            "name": "国際政策学科",
            "url": "https://www.kwansei.ac.jp/s_policy/international/",
            "text": "国連の「持続可能な開発目標（SDGs）」を念頭に、国際社会の課題を解決に導き、より良い国際社会の実現をめざして学びます。",
            "courses": [
              {
                "name": "国際発展政策",
                "text": "発展途上国の課題と開発政策の基本を学びます。"
              },
              {
                "name": "国際協力論",
                "text": "第二次世界大戦後の国際協力の歴史を学び、これからの国際協力のあり方を考えます。"
              },
              {
                "name": "外交政策",
                "text": "外交の歴史や今日の外交政策、日本外交について基本的な理解を深めます。"
              }
            ]
          }
        ]
      },
      {
        "id": "science",
        "study": {"curriculum": {"url": "https://www.kwansei.ac.jp/assets/36_science.pdf", "year": "2025年度以降入学生用など（大学学則の別表）"}, "model": {"url": "https://www.kwansei.ac.jp/s_science/assets/s_science_model2.pdf", "year": "資料に記載なし"}},
        "name": "理学部",
        "url": "https://www.kwansei.ac.jp/s_science/",
        "lead": "自然や科学の法則を理解し、新たな真理を追究する力を育む学部です。",
        "fields": "数学・物理学・宇宙物理学・化学を、3つの学科で学びます。物理・宇宙学科には、宇宙物理学の主要3分野（電波天文学・赤外線天文学・X線天文学）がそろっています。",
        "departments": [
          {
            "id": "science-math",
            "study": {"curriculum": {"url": "https://www.kwansei.ac.jp/s_science/assets/s_scienced_ms_curriculum.pdf", "year": "資料に記載なし"}},
            "name": "数理科学科",
            "url": "https://www.kwansei.ac.jp/s_science/d_ms/",
            "text": "基礎数学から応用数理までを幅広く学びます。データサイエンスや確率過程、統計・アクチュアリーに関わる手法も扱います。",
            "courses": [
              {
                "name": "線形代数I",
                "year": "1年次",
                "text": "ベクトルと行列の理論の基礎を学びます。"
              },
              {
                "name": "応用数理入門",
                "year": "2年次",
                "text": "これまでに学んだ数学を活用し、身の回りの現象を数理的に捉えます。"
              },
              {
                "name": "数理科学演習",
                "year": "3・4年次",
                "text": "自然・生命・社会現象の数理モデルや、代数学・時系列分析などの基礎理論を学びます。"
              }
            ]
          },
          {
            "id": "science-physics",
            "name": "物理・宇宙学科",
            "url": "https://www.kwansei.ac.jp/s_science/d_pa/",
            "text": "理論・実験・観測を通じて、物理学の未解決問題と宇宙の謎に迫ります。",
            "courses": [
              {
                "name": "力学Ⅰ",
                "year": "1年次",
                "text": "古典力学の基礎概念を理解し、運動方程式の解き方を学びます。"
              },
              {
                "name": "基礎物理学実験I",
                "year": "2年次",
                "text": "基礎的な実験や測定を行い、物理現象と物理法則の関係を深く理解します。"
              },
              {
                "name": "宇宙物理学",
                "year": "3・4年次",
                "text": "物理学の基本法則を使って、天体や宇宙の構造と進化を理解します。"
              }
            ]
          },
          {
            "id": "science-chemistry",
            "study": {"curriculum": {"url": "https://www.kwansei.ac.jp/s_science/assets/s_scienced_d_c_curriculum.pdf", "year": "資料に記載なし"}},
            "name": "化学科",
            "url": "https://www.kwansei.ac.jp/s_science/d_c/",
            "text": "原子・分子のレベルから物質を理解します。物質の構造・機能とその原理を解明する「分析・物理化学系」と、化学反応で機能性物質を創りだす「無機・有機化学系」の2分野があります。",
            "courses": [
              {
                "name": "基礎化学実験I",
                "year": "1年次",
                "text": "有機・無機化合物を使った実験で、基本的な測定や操作を身につけます。"
              },
              {
                "name": "分析化学I",
                "year": "2年次",
                "text": "試料の調製や分析操作を学び、重量分析・容量分析の方法を理解します。"
              },
              {
                "name": "有機化学実験",
                "year": "3・4年次",
                "text": "有機合成の研究に必要な基本操作や技術を身につけます。"
              }
            ]
          }
        ]
      },
      {
        "id": "engineering",
        "study": {"curriculum": {"url": "https://www.kwansei.ac.jp/assets/37_engineering.pdf", "year": "2025年度以降入学生用など（大学学則の別表）"}, "model": {"url": "https://www.kwansei.ac.jp/s_engineering/assets/s_engineering_model.pdf", "year": "資料に記載なし"}},
        "name": "工学部",
        "url": "https://www.kwansei.ac.jp/s_engineering/",
        "lead": "学科の代わりに「課程制」を取り入れ、分野を横断したカリキュラムで、複雑化する社会の課題を解決できる力を身につける学部です。",
        "fields": "物質科学・電気電子工学・情報科学・人間・機械系の4分野を、4つの課程で学びます。",
        "departments": [
          {
            "id": "engineering-materials",
            "study": {"curriculum": {"url": "https://www.kg-nanotech.jp/page/page000225.html", "year": "資料に記載なし"}},
            "name": "物質工学課程",
            "url": "https://www.kg-nanotech.jp/page/page000008.html",
            "text": "「創エネ」「蓄エネ」「省エネ」の3つの観点から物質科学をとらえ、新しい物質を生み出すための基礎から実践までを、物理と化学の両面から学びます。",
            "courses": [
              {
                "name": "先進エネルギーナノ工学詳論",
                "text": "エネルギーを「創る」「蓄える」「運ぶ」「使う」に関わる最先端の研究内容を学び、教員の研究テーマの内容と意義を理解します。"
              },
              {
                "name": "物質工学概論"
              },
              {
                "name": "ものづくり理工学実験1"
              }
            ],
            "courseNote": "物質工学概論・ものづくり理工学実験1は、公式サイトには科目名のみ掲載されているため、内容の説明は載せていません。"
          },
          {
            "id": "engineering-electrical",
            "study": {"curriculum": {"url": "https://www.kg-nanotech.jp/page/page000225.html", "year": "資料に記載なし"}},
            "name": "電気電子応用工学課程",
            "url": "https://www.kg-nanotech.jp/page/page000009.html",
            "text": "次世代モビリティーなどで使われる動力機器や情報通信機器、エネルギーの輸送・変換機器の基盤となる、電気エネルギーの有効利用について学びます。",
            "courses": [
              {
                "name": "基礎電気電子実験",
                "text": "1年次から電気電子工学の基礎を実践的に身につけます。"
              },
              {
                "name": "電気電子ものづくり実験",
                "text": "省電力パワーエレクトロニクスの要素技術を体験的に学ぶ実験科目です。"
              },
              {
                "name": "電気電子計測実験",
                "text": "電気電子工学の基盤となる計測技術に関わる実験科目です。"
              }
            ]
          },
          {
            "id": "engineering-informatics",
            "study": {"curriculum": {"url": "https://cs.kwansei.ac.jp/education/", "year": "2025年度以降入学生用"}},
            "name": "情報工学課程",
            "url": "https://cs.kwansei.ac.jp/",
            "text": "ハードウェア・ソフトウェア・ネットワークなどITの基盤となる専門知識に加え、AIやデータマイニング、コンピュータグラフィックス（CG）などの技術を学びます。",
            "courses": [
              {
                "name": "情報工学概論"
              },
              {
                "name": "データ構造とアルゴリズム"
              },
              {
                "name": "コンピュータグラフィックス"
              }
            ],
            "courseNote": "公式サイトには科目名のみ掲載されているため、内容の説明は載せていません。"
          },
          {
            "id": "engineering-mechanical",
            "study": {"curriculum": {"url": "https://am.kwansei.ac.jp/education.html", "year": "2025年度以降入学生用・2021年度以降入学生用"}},
            "name": "知能・機械工学課程",
            "url": "https://am.kwansei.ac.jp/",
            "text": "人工知能と機械工学の基礎から、機械システムを知能化するための幅広い知識・技術を学びます。",
            "courses": [
              {
                "name": "知能・機械工学概論"
              },
              {
                "name": "人工知能基礎"
              },
              {
                "name": "ロボティクス"
              }
            ],
            "courseNote": "公式サイトには科目名のみ掲載されているため、内容の説明は載せていません。"
          }
        ]
      },
      {
        "id": "bes",
        "study": {"curriculum": {"url": "https://www.kwansei.ac.jp/assets/38_bes.pdf", "year": "2025年度以降入学生用など（大学学則の別表）"}, "model": {"url": "https://www.kwansei.ac.jp/s_bes/assets/s_bes_model.pdf", "year": "資料に記載なし"}},
        "name": "生命環境学部",
        "url": "https://www.kwansei.ac.jp/s_bes/",
        "lead": "環境・食糧・健康など、現代社会の課題の解決に挑む力を身につける学部です。実験科学とデータサイエンスを活かした教育・研究に取り組んでいます。",
        "fields": "生物科学・生命医科学・環境応用化学を、3つの学科で学びます。",
        "departments": [
          {
            "id": "bes-biology",
            "study": {"curriculum": {"url": "https://www.kwansei.ac.jp/s_bes/assets/s_bes_d_b_curriculum2022.pdf", "year": "資料に記載なし"}},
            "name": "生物科学科",
            "url": "https://www.kwansei.ac.jp/s_bes/d_b/",
            "text": "地球上の多様な生物について学び、その活用の可能性を探ります。植物昆虫科学・応用微生物学・計算生物学の3つの専攻があります。",
            "courses": [
              {
                "name": "生命科学I",
                "year": "1年次",
                "text": "高校生物の基礎から始め、DNAからRNA、タンパク質への流れや遺伝子操作技術の原理までを学びます。"
              },
              {
                "name": "細胞・組織学実験",
                "year": "2年次",
                "text": "細胞や組織を扱うための基本技術を身につけます。"
              },
              {
                "name": "先端生命科学実験Ⅰ",
                "year": "3・4年次",
                "text": "卒業研究の前に必要な実験手法や、研究の基本的な考え方を身につけます。"
              }
            ]
          },
          {
            "id": "bes-biomedical",
            "study": {"curriculum": {"url": "https://www.kwansei.ac.jp/s_bes/assets/s_bes_d_bs_curriculum.pdf", "year": "資料に記載なし"}},
            "name": "生命医科学科",
            "url": "https://www.kwansei.ac.jp/s_bes/d_bs/",
            "text": "ヒトを含む哺乳動物の生命現象を解明し、基礎医学分野に応用することで、病気の治療や健康の維持に役立てることをめざします。発生再生医科学・生命医科学・医工学の3つの専攻があります。",
            "courses": [
              {
                "name": "医科学入門A",
                "year": "1年次",
                "text": "専門科目を学ぶために必要な生命科学の基礎を、遺伝学・発生学・化学・光学技術など多角的な視点から学びます。"
              },
              {
                "name": "基礎医科学実験Ⅰ",
                "year": "2年次",
                "text": "生命現象を分子レベルで解析するための基本的な技術や知識を身につけます。"
              },
              {
                "name": "先端医科学実験Ⅰ",
                "year": "3・4年次",
                "text": "卒業研究の前に必要な実験手法や、実験計画の立て方・考え方を学びます。"
              }
            ]
          },
          {
            "id": "bes-chemistry",
            "name": "環境応用化学科",
            "url": "https://www.kwansei.ac.jp/s_bes/d_ace/",
            "text": "化学の基礎をしっかり学び、環境問題に取り組むための基礎的な力を身につけます。物質創生系・機能探索系・環境分析・地球化学系の3つの分野があります。",
            "courses": [
              {
                "name": "基礎化学実験Ⅰ",
                "year": "1年次",
                "text": "無機分析化学・物理化学・有機化学の3分野の実験を通じて、化学の基本概念を体験的に理解します。"
              },
              {
                "name": "地球環境化学",
                "year": "2年次",
                "text": "大気・海洋・陸域での水の循環を、化学平衡論や反応速度論の基礎を使って学びます。"
              },
              {
                "name": "環境応用化学実験I",
                "year": "3・4年次",
                "text": "環境分析・地球化学・無機・物理・有機・高分子化学にわたって、分析・合成・分離・データ処理の基本的な方法を学びます。"
              }
            ]
          }
        ]
      },
      {
        "id": "architecture",
        "study": {"curriculum": {"url": "https://www.kwansei.ac.jp/s_architecture/assets/s_architecture_curriculum.pdf", "year": "資料に記載なし"}, "model": {"url": "https://www.kwansei.ac.jp/s_architecture/assets/s_architecture_risyumodel.pdf", "year": "資料に記載なし"}},
        "name": "建築学部",
        "url": "https://www.kwansei.ac.jp/s_architecture/",
        "lead": "グローバルな視野で建築と都市の未来を創造し、建築学で社会課題の解決をめざす学部です。",
        "fields": "一級建築士をめざす教育を基本に、都市デザインや都市計画の科目も学べます。「デザインとマネジメント」「工学と人文社会科学」「グローバルとフィールド」の3つを重視しています。",
        "departments": [
          {
            "id": "architecture-architecture",
            "name": "建築学科",
            "url": "https://www.kwansei.ac.jp/s_architecture/about/",
            "text": "設計や建設にとどまらず、建築の始まりから終わりまでを、工学とデザインを基盤に、マネジメントの視点も含めて学びます。",
            "courses": [
              {
                "name": "建築・都市デザイン概論",
                "year": "1年次",
                "text": "複数の専任教員によるオムニバス形式の講義で、建築や都市の多様性と魅力を学びます。"
              },
              {
                "name": "建築材料学実験",
                "year": "2年次",
                "text": "建築材料に直接触れる実験で力学的な性質を理解し、計測や統計処理の基本を学びます。"
              },
              {
                "name": "建築設計演習Ⅲ",
                "year": "3・4年次",
                "text": "美術館と交流施設の2つの課題に取り組む設計演習です。"
              }
            ]
          }
        ]
      }
    ]
  },

  // 「その他の学生団体」パネルのタブ。features = 大きめの紹介カード、compact = 名前と分野だけの一覧
  // buttons の { openFacility: "キー" } は、その施設カードが facilities にできたときだけ表示されます
  studentGroupDirectory: { sections: [
    {
      tab: "学部関連の学生団体",
      heading: "学部関連の学生団体",
      features: [
        {
          name: "SCS",
          meta: "関係する学部：総合政策学部",
          text: "SCS（Student and Campus Supporter）は、総合政策学部の学生団体です。新入生のサポートや、サークル紹介・オープンキャンパスの運営などに取り組んでいます。",
          link: { label: "活動について詳しく見る", url: "https://www.kwansei.ac.jp/s_policy/news/03413.html" }
        },
        {
          name: "Mains",
          meta: "関係する学部：理学部・工学部・生命環境学部・建築学部",
          text: "Mainsは、神戸三田キャンパスの理系4学部の学生が集まる団体です。新入生のサポートや、オープンキャンパスの行事の企画・運営などに取り組んでいます。",
          link: { label: "活動について詳しく見る", url: "https://www.kwansei.ac.jp/interviews/all/00473.html" }
        }
      ],
      note: "紹介文は、大学公式サイトの記事（総合政策学部ニュース、インタビューサイト）の内容をもとにしています（2026年11月確認）。"
    },
    {
      tab: "アカデミックコモンズ",
      heading: "アカデミックコモンズ・プロジェクト",
      text: "アカデミックコモンズでは、毎年春にアカデミックコモンズ・プロジェクトを募集・採択し、1年間の活動を支援しています。2026年度のプロジェクトは次の10件です。",
      compact: [
        { name: "LIMELIGHT", field: "映像制作" },
        { name: "SHADECOR", field: "プロジェクションマッピング" },
        { name: "UNIVERS＆", field: "宇宙教育" },
        { name: "Feel Learning～感学～", field: "プログラミング教育" },
        { name: "GoodHookFes", field: "価値循環" },
        { name: "SDGstep", field: "SDGs広報" },
        { name: "あ、みっけ！", field: "三田の地域に関する活動" },
        { name: "Whiskers", field: "保護犬・保護猫" },
        { name: "クレセントサイクリング", field: "シェアサイクル" },
        { name: "関西学院AgriNOVA", field: "スマート農業" }
      ],
      buttons: [
        // アカデミックコモンズの詳しいカードを作ったら、facilities のキーをここに書くとボタンが出ます
        { openFacility: "academicCommons", label: "アカデミックコモンズ・プロジェクトを詳しく見る" },
        { label: "2026年度のプロジェクト一覧（大学公式）", url: "https://www.kwansei.ac.jp/ksc/commons/2026.html" }
      ],
      note: "プロジェクト名と活動分野は、大学公式サイト「2026年度 プロジェクト・活動実績」をもとにしています（2026年11月確認）。活動分野は概要を簡潔に表すための表記です。"
    },
    {
      tab: "ボランティア・地域活動",
      heading: "ボランティア・地域活動",
      features: [
        {
          name: "KG-VNET（関西学院大学ボランティアネットワーク）",
          text: "関西学院大学では、学生によるさまざまなボランティア活動が行われています。大学のボランティアネットワーク「KG-VNET」では、地域交流や子どもへの支援などに取り組む団体の情報を確認できます。",
          link: { label: "ボランティア団体一覧を見る", url: "https://www.kwansei.ac.jp/c_volunteer/kg_vnet/" }
        }
      ]
    }
  ] },

  clubDirectory: { "sections": [
    {
      "tab": "KSCのサークル",
      "heading": "神戸三田キャンパスのサークル",
      "text": "関西学院大学公式サイトで紹介されている、神戸三田キャンパスの大学登録団体（学生連盟に加盟していない同好会・サークル）です。",
      "categories": [
        {
          "label": "スポーツ",
          "en": "SPORTS",
          "groups": [
            {
              "name": "バスケットボールK.G. Cagers",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/k.g.cagers/"
                }
              ]
            },
            {
              "name": "合気道サークル",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/aikido_ksc"
                }
              ]
            },
            {
              "name": "軟式野球サークルSharks"
            },
            {
              "name": "テニスサークル“K.G.WinG”",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/k_g_wing/"
                }
              ]
            },
            {
              "name": "サッカーサークル“フェルナンド”",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://instagram.com/fernand._ksc"
                }
              ]
            },
            {
              "name": "バレーボールサークル“ぱぁぷる”"
            }
          ]
        },
        {
          "label": "音楽・ダンス",
          "en": "MUSIC & DANCE",
          "groups": [
            {
              "name": "関西学院室内合奏団",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/kgco1995/"
                }
              ]
            },
            {
              "name": "軽音サークル“DEEP STREAM”",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://instagram.com/deepstreamksc"
                }
              ]
            },
            {
              "name": "ダンスサークルNey-Kid",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://instagram.com/ney_kid_ksc"
                }
              ]
            },
            {
              "name": "関学よさこい連 ”炎流”",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/enrujp"
                }
              ]
            },
            {
              "name": "フラダンスサークルMahalo",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://instagram.com/mahalo_ksc"
                }
              ]
            }
          ]
        },
        {
          "label": "文化・社会活動",
          "en": "CULTURE & COMMUNITY",
          "groups": [
            {
              "name": "Eco-Habitat関西学院",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://instagram.com/eco_habitat_kgu"
                }
              ]
            },
            {
              "name": "CLUB GEORDIE",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://instagram.com/club_geordie"
                }
              ]
            },
            {
              "name": "SSV関西学院",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/ssv_kgu/"
                }
              ]
            },
            {
              "name": "J-FUNユースK.G."
            },
            {
              "name": "都市研究会"
            }
          ]
        },
        {
          "label": "その他",
          "en": "OTHERS",
          "groups": [
            {
              "name": "LUNA GAMING"
            }
          ]
        }
      ],
      "button": {
        "label": "KSCのサークル一覧を見る",
        "url": "https://www.kwansei.ac.jp/campuslife/club/tourokudantai.html"
      },
      "note": "カテゴリーは見やすくするためのこのサイト独自の分類で、大学公式の分類ではありません。団体名とリンクは、大学公式サイト「大学登録団体」の掲載内容（2026年11月確認）をもとにしています。"
    },
    {
      "tab": "体育会（運動部）",
      "heading": "関西学院大学の体育会",
      "text": "関西学院大学には、さまざまな競技の体育会所属団体があります。各部の活動内容や最新情報は、大学公式サイトから確認できます。",
      "categories": [
        {
          "label": "球技",
          "groups": [
            {
              "name": "庭球部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgad.kwansei.ac.jp/tennis/"
                }
              ]
            },
            {
              "name": "ソフトテニス部"
            },
            {
              "name": "卓球部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgtabletennis.jp/"
                }
              ]
            },
            {
              "name": "バドミントン部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kwanseibadminton.jimdofree.com/"
                }
              ]
            },
            {
              "name": "硬式野球部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgad.kwansei.ac.jp/baseball/"
                }
              ]
            },
            {
              "name": "硬式野球部（女子）",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgad.kwansei.ac.jp/baseball-w/"
                }
              ]
            },
            {
              "name": "準硬式野球部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgjunko89.wixsite.com/junko-kwansei"
                }
              ]
            },
            {
              "name": "サッカー部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgusoccer.com/"
                }
              ]
            },
            {
              "name": "ラグビー部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://www.kgrfc.net/"
                }
              ]
            },
            {
              "name": "アメリカンフットボール部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://www.kgfighters.com/"
                }
              ]
            },
            {
              "name": "バレーボール部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://www.kgu-volleyball.org/"
                }
              ]
            },
            {
              "name": "バスケットボール部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://kwansei-basketball.com/"
                }
              ]
            },
            {
              "name": "ハンドボール部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgad.kwansei.ac.jp/handball/"
                }
              ]
            },
            {
              "name": "陸上ホッケー部（男子）",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kg-hockey.com/"
                }
              ]
            },
            {
              "name": "陸上ホッケー部（女子）",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://www5.hp-ez.com/hp/kgfhthunders/page1"
                }
              ]
            },
            {
              "name": "ラクロス部（男子）",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://www.kglaxmen.com/"
                }
              ]
            },
            {
              "name": "ラクロス部（女子）",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://www.kglacrosse.com/"
                }
              ]
            },
            {
              "name": "ゴルフ部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kg-golf.net/"
                }
              ]
            }
          ]
        },
        {
          "label": "武道・格闘技",
          "groups": [
            {
              "name": "柔道部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://share.google/Yi0d0Vj2tJf7k95Oz"
                }
              ]
            },
            {
              "name": "剣道部"
            },
            {
              "name": "空手道部"
            },
            {
              "name": "合気道部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://kwanseiaiki.oops.jp/"
                }
              ]
            },
            {
              "name": "拳法部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgkempo.com/"
                }
              ]
            },
            {
              "name": "相撲部",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/kgu_sumo"
                }
              ]
            },
            {
              "name": "弓道部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://www.kwanseikyudo.com/"
                }
              ]
            },
            {
              "name": "ボクシング部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kg-boxing.com/"
                }
              ]
            },
            {
              "name": "レスリング部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://www.kgu-w.com/"
                }
              ]
            },
            {
              "name": "フェンシング部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgfencing.wixsite.com/kgu-fencing-team"
                }
              ]
            }
          ]
        },
        {
          "label": "陸上・体操・個人競技",
          "groups": [
            {
              "name": "陸上競技部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://kgac.main.jp/index.html"
                }
              ]
            },
            {
              "name": "体操部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://kg-gymnastics.com/"
                }
              ]
            },
            {
              "name": "重量挙部"
            },
            {
              "name": "射撃部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgshooting.wixsite.com/kgshooting"
                }
              ]
            },
            {
              "name": "洋弓部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kg-archery.1net.jp/"
                }
              ]
            }
          ]
        },
        {
          "label": "水上・氷上・雪上",
          "groups": [
            {
              "name": "水上競技部（競泳パート）",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://kgust.com/"
                }
              ]
            },
            {
              "name": "水上競技部（水球パート）",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kguwp-web.jimdosite.com/"
                }
              ]
            },
            {
              "name": "ボート部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://www.kg-rowing.com/"
                }
              ]
            },
            {
              "name": "ヨット部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgyachtclub.wixsite.com/kgyachtclub"
                }
              ]
            },
            {
              "name": "カヌー部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgcanoe2021.wixsite.com/website"
                }
              ]
            },
            {
              "name": "スキー競技部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgskiteam.jimdofree.com/member/"
                }
              ]
            },
            {
              "name": "スケート部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://kgskateclub.com/"
                }
              ]
            },
            {
              "name": "アイスホッケー部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://www.kgicehockey.com/"
                }
              ]
            }
          ]
        },
        {
          "label": "アウトドア・その他",
          "groups": [
            {
              "name": "山岳部",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/kg.alpine_club"
                }
              ]
            },
            {
              "name": "ワンダーフォーゲル部",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/kg_wandervogel"
                }
              ]
            },
            {
              "name": "馬術部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kg-equestrian.jimdofree.com/"
                }
              ]
            },
            {
              "name": "航空部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgastir.wixsite.com/kg-glider"
                }
              ]
            },
            {
              "name": "自動車部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgad.kwansei.ac.jp/automobile/"
                }
              ]
            },
            {
              "name": "編集部（関学スポーツ）",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgsports.net/"
                }
              ]
            }
          ]
        }
      ],
      "button": {
        "label": "体育会の部活動一覧を見る",
        "url": "https://www.kwansei.ac.jp/campuslife/club/taiikukai.html"
      },
      "note": "※関西学院大学全体の部活動を紹介しています。すべての部が神戸三田キャンパスを活動拠点としているわけではありません。カテゴリーは見やすくするためのこのサイト独自の分類で、大学公式の分類ではありません。団体名とリンクは、大学公式サイト「体育会」の掲載内容（2026年11月確認）をもとにしています。"
    },
    {
      "tab": "文化系の部活",
      "heading": "関西学院大学の文化総部",
      "text": "関西学院大学には、音楽、芸術、研究活動など、さまざまな分野の文化系部活動があります。各部の詳細は大学公式サイトから確認できます。",
      "categories": [
        {
          "label": "音楽",
          "groups": [
            {
              "name": "関西学院グリークラブ",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://www.kg-glee.org/"
                }
              ]
            },
            {
              "name": "混声合唱団エゴラド",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://www.egolado.com/"
                }
              ]
            },
            {
              "name": "関西学院交響楽団",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://orchestra.musicinfo.co.jp/~kwanseiorche/"
                }
              ]
            },
            {
              "name": "マンドリンクラブ",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/kgmcblletin"
                }
              ]
            },
            {
              "name": "クラシックギタークラブ",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/kg.guitar/"
                }
              ]
            },
            {
              "name": "ハーモニカ・ソサイアティ",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://kghamoso.web.fc2.com/"
                }
              ]
            },
            {
              "name": "軽音楽部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kglmchp.wixsite.com/kglmc"
                }
              ]
            },
            {
              "name": "邦楽クラブ",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://kghougaku.web.fc2.com./"
                }
              ]
            },
            {
              "name": "音楽研究部"
            }
          ]
        },
        {
          "label": "演劇・伝統芸能",
          "groups": [
            {
              "name": "劇研究部 劇団狸寝入",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://tanukineiri.jimdofree.com/"
                }
              ]
            },
            {
              "name": "能楽部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://orchid787166.studio.site/"
                }
              ]
            },
            {
              "name": "古典芸能研究部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgkoten.wepage.com/"
                }
              ]
            },
            {
              "name": "甲山落語研究会",
              "links": [
                {
                  "label": "X",
                  "url": "https://x.com/KG_rakugo"
                }
              ]
            },
            {
              "name": "詩吟部吟月会"
            }
          ]
        },
        {
          "label": "芸術・伝統文化",
          "groups": [
            {
              "name": "写真部",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/kg_photo_club"
                }
              ]
            },
            {
              "name": "映画研究部",
              "links": [
                {
                  "label": "X",
                  "url": "https://twitter.com/kgu_movie"
                }
              ]
            },
            {
              "name": "文芸部",
              "links": [
                {
                  "label": "X",
                  "url": "https://twitter.com/kgbungei"
                }
              ]
            },
            {
              "name": "絵画部弦月会",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://gengetsukaikg.jimdofree.com/"
                }
              ]
            },
            {
              "name": "書道部",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/kg_shodo"
                }
              ]
            },
            {
              "name": "茶道部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://sado-kwansei.jimdofree.com/"
                }
              ]
            },
            {
              "name": "煎茶道部",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/kg_senchado"
                }
              ]
            },
            {
              "name": "いけばな部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://ikebanakg.blogspot.com/"
                }
              ]
            }
          ]
        },
        {
          "label": "学術・研究",
          "groups": [
            {
              "name": "国際研究部"
            },
            {
              "name": "英語研究部（E.S.S.）",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/kgess2025"
                }
              ]
            },
            {
              "name": "関西学院ディベートクラブ"
            },
            {
              "name": "ユネスコ研究部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://blog.livedoor.jp/unescoo/"
                }
              ]
            },
            {
              "name": "考古学研究会",
              "links": [
                {
                  "label": "X",
                  "url": "https://twitter.com/kokoken_kwansei"
                }
              ]
            },
            {
              "name": "古美術研究クラブ",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/kobiken_kg"
                }
              ]
            },
            {
              "name": "速記研究部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "http://kwanseisokki.blog.shinobi.jp/"
                }
              ]
            }
          ]
        },
        {
          "label": "将棋・囲碁・その他",
          "groups": [
            {
              "name": "将棋部",
              "links": [
                {
                  "label": "Instagram",
                  "url": "https://www.instagram.com/kg_shogi/"
                }
              ]
            },
            {
              "name": "囲碁部",
              "links": [
                {
                  "label": "公式サイト",
                  "url": "https://kgigd5.wixsite.com/kangaku15"
                }
              ]
            },
            {
              "name": "ユースホステル部",
              "links": [
                {
                  "label": "X",
                  "url": "https://twitter.com/Kwangaku_YH"
                }
              ]
            }
          ]
        }
      ],
      "button": {
        "label": "文化系の部活動一覧を見る",
        "url": "https://www.kwansei.ac.jp/campuslife/club/bunkasoubu.html"
      },
      "note": "※関西学院大学全体の部活動を紹介しています。すべての部が神戸三田キャンパスを活動拠点としているわけではありません。カテゴリーは見やすくするためのこのサイト独自の分類で、大学公式の分類ではありません。団体名とリンクは、大学公式サイト「文化総部」の掲載内容（2026年11月確認）をもとにしています。"
    }
  ] },

  circles: [
    {
      name: "関学よさこい連「炎流」",
      icon: "🔥",
      category: "よさこい",
      summary: "神戸三田キャンパスを拠点に活動するよさこいサークル。学外のイベントや新月祭などで演舞を披露しています。",
      videos: [
        { label: "演舞動画を見る", youtube: "TMLVl2Rt3as", caption: "2025年3月「劇場版どまつり」での演舞です（新月祭の映像ではありません）。" }
      ]
    }
  ],

  activities: {
    "shingetsusai": {
      tag: "大学祭",
      name: "大学祭「新月祭」",
      summary: "学生が主体となって企画・運営する大学祭です。模擬店や学生団体による企画などが行われます。",
      links: [ { label: "KSCのイベント（大学公式サイト）", url: "https://www.kwansei.ac.jp/ksc/campuslife/event/" } ]
    },
    "researchFair": {
      name: "リサーチ・フェア",
      summary: "総合政策学部の学生や大学院生などが、研究の成果を発表するイベントです。",
      video: { youtube: "Wj_iboTgMT0", title: "リサーチ・フェアの動画" },
      links: [
        { label: "KSCのイベント（大学公式サイト）", url: "https://www.kwansei.ac.jp/ksc/campuslife/event/" },
        { label: "動画をYouTubeで見る", url: "https://www.youtube.com/watch?v=Wj_iboTgMT0" }
      ]
    }
  }
};
