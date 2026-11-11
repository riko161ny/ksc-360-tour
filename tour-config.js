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
    { id: "p01", name: "正門前", map: { x: 0.045, y: 0.7501 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p02", name: "2号館横庭園", map: { x: 0.1065, y: 0.7633 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p03", name: "チャペル", map: { x: 0.088, y: 0.6807 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p04", name: "1号館前", map: { x: 0.1503, y: 0.6348 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p05", name: "2号館前", map: { x: 0.1996, y: 0.7179 }, photo: null, view: null, northOffset: null, links: [], info: [ { yaw: -1.964, pitch: -0.005, facility: "building2" } ], facility: "building2" },
    { id: "p06", name: "3号館", map: { x: 0.296, y: 0.6834 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p07", name: "食堂", map: { x: 0.2649, y: 0.5984 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p08", name: "生協", map: { x: 0.2472, y: 0.5882 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p09", name: "食堂前テラス席", map: { x: 0.2496, y: 0.5441 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p10", name: "スカイガーデン", map: { x: 0.2697, y: 0.4729 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p11", name: "Colorful Box（生協売店）", map: { x: 0.2971, y: 0.5051 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p12", name: "第二厚生棟", map: { x: 0.3092, y: 0.425 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p13", name: "体育館", map: { x: 0.3597, y: 0.5577 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p14", name: "バスロータリー", map: { x: 0.3758, y: 0.4356 }, photo: null, view: null, northOffset: null, links: [], info: [ { yaw: -3.029, pitch: 0.044, facility: "bus" } ], facility: "bus" },
    { id: "p15", name: "ビズカフェ", map: { x: 0.3937, y: 0.4255 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p16", name: "コモンズ前", map: { x: 0.3865, y: 0.4848 }, photo: null, view: null, northOffset: null, links: [], info: [ { yaw: 1.621, pitch: 0.025, facility: "shingetsusai" } ], facility: "shingetsusai" },
    { id: "p17", name: "アカデミックコモンズ", map: { x: 0.4251, y: 0.4729 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p18", name: "6号館前", map: { x: 0.4088, y: 0.5707 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p19", name: "601号室", map: { x: 0.4179, y: 0.6102 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p20", name: "図書館", map: { x: 0.4362, y: 0.6323 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p21", name: "4号館", map: { x: 0.4837, y: 0.5187 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p22", name: "5号館", map: { x: 0.5395, y: 0.4661 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p23", name: "7号館", map: { x: 0.4549, y: 0.4255 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p24", name: "8号館", map: { x: 0.3959, y: 0.3475 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p25", name: "来場者用駐車場", map: { x: 0.4855, y: 0.3678 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p26", name: "陸上競技場", map: { x: 0.5316, y: 0.2944 }, photo: null, view: null, northOffset: null, links: [], info: [] },
    { id: "p27", name: "テニスコート", map: { x: 0.7464, y: 0.5076 }, photo: null, view: null, northOffset: null, links: [], info: [] }
  ],

  facilities: {
    // バスロータリー（p14）：時刻表は書き写さず、大学公式サイトのバスのページへリンクする
    "bus": {
      name: "バスの時刻表",
      description: "バスの時刻表は、大学公式サイトのバスのページで確認できます。ダイヤは変わることがあるので、お出かけ前に最新の情報をご覧ください。",
      links: [ { label: "バスのページ（大学公式サイト）", url: "https://www.kwansei.ac.jp/ksc/access/bus" } ]
    },
    // コモンズ前（p16）に置く新月祭とサークルの案内
    "shingetsusai": {
      name: "新月祭・サークル紹介",
      activities: ["shingetsusai", "enryu"]
    },
    // 施設概要（overview）は確認できた内容だけを書き足してください。空のあいだは表示されません。
    "building2": {
      name: "II号館",
      activities: [
        {
          activity: "researchFair",
          note: "2024年度のリサーチ・フェアはII号館で開催されました。",
          url: "https://www.kwansei.ac.jp/s_policy/news/03574.html",
          label: "2024年度 リサーチ・フェアの記事"
        }
      ]
    }
  },

  // 「KSCでの学生生活」に表示する活動（紹介文は公式情報をもとにした独自の短い説明）
  studentLifeLead: "神戸三田キャンパスで行われている活動の一部を紹介します。くわしくは各公式情報をご覧ください。",
  studentLife: ["shingetsusai", "enryu", "researchFair"],

  activities: {
    "shingetsusai": {
      tag: "大学祭",
      name: "大学祭「新月祭」",
      summary: "学生が主体となって企画・運営する大学祭です。模擬店や学生団体による企画などが行われます。",
      sections: [
        {
          title: "2026年の神戸三田キャンパスの企画",
          text: "2026年10月24日・25日に開かれた新月祭では、神戸三田キャンパスの企画として次のようなステージが新月祭の公式サイトに掲載されていました。",
          items: [
            "軽音サークル Deep Stream の芝生ライブ",
            "ダンスサークル Ney-Kid の公演",
            "よさこいサークル 炎流 の演舞",
            "フラダンスサークル Mahalo のステージ"
          ],
          links: [ { label: "神戸三田キャンパスの企画一覧（新月祭公式サイト）", url: "https://www.kgfes-shingetsusai.com/ksc%E4%B8%80%E8%88%AC%E4%BC%81%E7%94%BB" } ]
        },
        {
          title: "開催の様子を知る",
          text: "実際の新月祭のようすは、学生新聞の取材記事や公式Instagramで見ることができます。",
          links: [
            { label: "神戸三田キャンパス新月祭2026の記事（関西学院大学新聞）", url: "https://kgpress.jp/kgnews/8557/" },
            { label: "新月祭 公式Instagram", url: "https://www.instagram.com/shingetsusai/" }
          ]
        }
      ],
      links: [ { label: "KSCのイベント（大学公式サイト）", url: "https://www.kwansei.ac.jp/ksc/campuslife/event/" } ]
    },
    "enryu": {
      tag: "サークル活動をのぞいてみよう",
      name: "関学よさこい連「炎流」",
      summary: "神戸三田キャンパスを拠点に活動するよさこいサークルです。学外のイベントや新月祭などで演舞を披露しています。",
      sections: [
        {
          title: "実際の演舞を動画で見る ▶",
          video: { youtube: "TMLVl2Rt3as", title: "関学よさこい連 炎流 2025年の演舞" },
          caption: "2025年3月「劇場版どまつり」での演舞です（新月祭の映像ではありません）。",
          links: [ { label: "動画をYouTubeで見る", url: "https://www.youtube.com/watch?v=TMLVl2Rt3as" } ]
        }
      ],
      links: [ { label: "新月祭2026の神戸三田キャンパスの企画一覧（新月祭公式サイト）", url: "https://www.kgfes-shingetsusai.com/ksc%E4%B8%80%E8%88%AC%E4%BC%81%E7%94%BB" } ]
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
