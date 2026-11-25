/*
 * 한국어 (ko) の翻訳。
 * ui: 画面の文字（キーは js/i18n.js と index.html の data-i18n）。
 * content: tour-config.js の文章。キーは設定の中の場所、ja は訳したときの日本語、text が訳文。
 *   status: "official" = 大学が公表している表記 / "provisional" = 仮訳（要確認）。
 *   tour-config.js の日本語を書き換えると、その訳は使われなくなります（日本語で表示）。
 * 確認: node tools/i18n/check.js
 */
TourI18n.register("ko", {
  "ui": {
    "lang.button": "언어 / Language",
    "title.suffix": " (졸업 작품)",
    "noPhoto.text": "이 지점의 360° 사진은 준비 중입니다",
    "noPhoto.hint": "지도나 지점 목록에서 다른 지점으로 이동할 수 있습니다",
    "map.title": "캠퍼스 지도",
    "map.enlarge": "지도 확대",
    "map.shrink": "지도 축소",
    "map.close": "지도 닫기",
    "map.alt": "고베 산다 캠퍼스 지도",
    "map.empty": "캠퍼스 지도는 준비 중입니다",
    "map.notRegistered": "이 지점은 아직 지도에 등록되지 않았습니다",
    "map.legend.current": "현재 위치",
    "map.legend.unvisited": "미방문",
    "map.legend.visited": "방문함",
    "footer.spots": "지점 목록",
    "footer.map": "지도",
    "footer.faculties": "학부 정보",
    "footer.faculties.short": "학부",
    "footer.events": "KSC 행사 정보",
    "footer.events.short": "행사",
    "footer.clubs": "동아리·클럽 정보",
    "footer.clubs.short": "동아리",
    "view.left": "왼쪽 보기",
    "view.right": "오른쪽 보기",
    "view.up": "위쪽 보기",
    "view.down": "아래쪽 보기",
    "view.in": "확대",
    "view.out": "축소",
    "view.fullscreen": "전체 화면",
    "panel.close": "닫기",
    "help.title": "사용 방법",
    "help.look.title": "둘러보기",
    "help.look.text": "화면을 드래그(스마트폰은 스와이프)",
    "help.zoom.title": "확대·축소",
    "help.zoom.text": "마우스 휠 또는 핀치 조작",
    "help.move.title": "이동",
    "help.move.text": "화살표를 탭하면 그 방향의 지점으로 이동합니다",
    "help.info.title": "시설 정보",
    "help.info.text": "화면의 시설 이름이나 아이콘을 탭하면 설명과 관련 활동이 표시됩니다",
    "help.footer.title": "학부·행사·동아리",
    "help.footer.text": "화면 아래 버튼에서 각 학부, KSC 행사, 동아리·클럽 정보를 볼 수 있습니다",
    "help.map.title": "지도",
    "help.map.text": "핀을 탭하면 그 지점으로 이동합니다. 부채꼴은 지금 보고 있는 방향입니다",
    "help.spots.title": "지점 목록",
    "help.spots.text": "화면 아래 썸네일에서 가고 싶은 지점을 고를 수 있습니다",
    "help.lang.title": "언어",
    "help.lang.text": "화면 오른쪽 위 버튼으로 日本語·English·한국어·简体中文을 전환할 수 있습니다",
    "help.start": "투어 시작하기",
    "loading.text": "360° 사진을 불러오는 중입니다",
    "spot.fallback": "지점 {n}",
    "spot.infoLabel": "{name} 시설 정보",
    "spot.back": "돌아가기",
    "thumb.visited": "방문함",
    "hotspot.goTo": "{name}(으)로 이동",
    "hotspot.info": "{name} 정보",
    "hotspot.facility": "시설",
    "panel.overview": "시설 개요",
    "panel.purpose": "이용 목적",
    "panel.description": "설명",
    "panel.video": "동영상",
    "panel.related": "관련 활동",
    "panel.source": "출처: {source}",
    "panel.placeholder": "내용은 준비 중입니다.",
    "panel.officialSite": "공식 사이트",
    "panel.viewOfficialSite": "공식 사이트 보기",
    "panel.count": "게재 {n}개 단체",
    "panel.watchVideo": "동영상 보기",
    "panel.relatedArticle": "관련 기사",
    "panel.prevPhoto": "이전 사진",
    "panel.nextPhoto": "다음 사진",
    "faculty.related": "이 건물과 관련된 학부",
    "faculty.backTo": "{name}(으)로 돌아가기",
    "faculty.backToList": "학부 목록으로 돌아가기",
    "faculty.departmentCount": "학과·과정 {n}개",
    "faculty.fields": "배울 수 있는 분야",
    "faculty.departments": "학과·과정",
    "faculty.seeCourses": "학습 내용과 수업 예 보기",
    "faculty.officialFaculty": "{name} 공식 사이트",
    "faculty.officialDepartment": "{name} 공식 페이지",
    "faculty.learn": "학습 내용",
    "faculty.courses": "수업 예",
    "faculty.study": "더 자세히 알아보기",
    "faculty.studyYear": "대상: {year}",
    "faculty.loginOnly": "재학생 전용・로그인 필요",
    "faculty.publicDoc": "일반 공개"
  },
  "content": {
    "title": {
      "ja": "関西学院大学 神戸三田キャンパス 360°バーチャルキャンパスツアー",
      "text": "간세이가쿠인 대학교 고베 산다 캠퍼스 360° 버추얼 캠퍼스 투어",
      "status": "provisional"
    },
    "shortTitle": {
      "ja": "神戸三田キャンパス 360°ツアー",
      "text": "고베 산다 캠퍼스 360° 투어",
      "status": "provisional"
    },
    "disclaimer": {
      "ja": "このサイトは個人の卒業制作です。関西学院大学の公式サイトではありません。",
      "text": "이 사이트는 개인의 졸업 작품입니다. 간세이가쿠인 대학교의 공식 사이트가 아닙니다.",
      "status": "provisional"
    },
    "spots.p01.name": {
      "ja": "正門前",
      "text": "정문 앞",
      "status": "provisional"
    },
    "spots.p02.name": {
      "ja": "Ⅱ号館横庭園",
      "text": "Ⅱ호관 옆 정원",
      "status": "provisional"
    },
    "spots.p03.name": {
      "ja": "ランバス記念礼拝堂",
      "text": "램버스 기념 예배당",
      "status": "provisional"
    },
    "spots.p04.name": {
      "ja": "Ⅰ号館前",
      "text": "Ⅰ호관 앞",
      "status": "provisional"
    },
    "spots.p05.name": {
      "ja": "Ⅱ号館前",
      "text": "Ⅱ호관 앞",
      "status": "provisional"
    },
    "spots.p06.name": {
      "ja": "Ⅲ号館前",
      "text": "Ⅲ호관 앞",
      "status": "provisional"
    },
    "spots.p07.name": {
      "ja": "Lunch Box（食堂）",
      "text": "Lunch Box(식당)",
      "status": "provisional"
    },
    "spots.p08.name": {
      "ja": "Toy Box（生協）",
      "text": "Toy Box(생협)",
      "status": "provisional"
    },
    "spots.p09.name": {
      "ja": "食堂前テラス席",
      "text": "식당 앞 테라스석",
      "status": "provisional"
    },
    "spots.p10.name": {
      "ja": "スカイガーデン",
      "text": "스카이 가든",
      "status": "provisional"
    },
    "spots.p11.name": {
      "ja": "Colorful Box（生協売店）",
      "text": "Colorful Box(생협 매점)",
      "status": "provisional"
    },
    "spots.p12.name": {
      "ja": "第二厚生棟",
      "text": "제2후생동",
      "status": "provisional"
    },
    "spots.p13.name": {
      "ja": "体育館",
      "text": "체육관",
      "status": "provisional"
    },
    "spots.p14.name": {
      "ja": "バスロータリー",
      "text": "버스 정류장",
      "status": "provisional"
    },
    "spots.p15.name": {
      "ja": "ビズカフェ",
      "text": "비즈 카페",
      "status": "provisional"
    },
    "spots.p16.name": {
      "ja": "コモンズ前",
      "text": "커먼즈 앞",
      "status": "provisional"
    },
    "spots.p17.name": {
      "ja": "アカデミックコモンズ",
      "text": "아카데믹 커먼즈",
      "status": "provisional"
    },
    "spots.p18.name": {
      "ja": "Ⅵ号館前",
      "text": "Ⅵ호관 앞",
      "status": "provisional"
    },
    "spots.p19.name": {
      "ja": "Ⅵ-101号室",
      "text": "Ⅵ-101호실",
      "status": "provisional"
    },
    "spots.p20.name": {
      "ja": "図書室",
      "text": "도서실",
      "status": "provisional"
    },
    "spots.p21.name": {
      "ja": "Ⅳ号館前",
      "text": "Ⅳ호관 앞",
      "status": "provisional"
    },
    "spots.p22.name": {
      "ja": "Ⅴ号館前",
      "text": "Ⅴ호관 앞",
      "status": "provisional"
    },
    "spots.p23.name": {
      "ja": "Ⅶ号館前",
      "text": "Ⅶ호관 앞",
      "status": "provisional"
    },
    "spots.p24.name": {
      "ja": "Ⅷ号館前",
      "text": "Ⅷ호관 앞",
      "status": "provisional"
    },
    "spots.p25.name": {
      "ja": "来場者用駐車場",
      "text": "방문객 주차장",
      "status": "provisional"
    },
    "spots.p26.name": {
      "ja": "陸上競技場",
      "text": "육상경기장",
      "status": "provisional"
    },
    "spots.p27.name": {
      "ja": "テニスコート",
      "text": "테니스 코트",
      "status": "provisional"
    },
    "spots.p20-3.name": {
      "ja": "3階｜参考図書・メディアフォーラムエリア",
      "text": "3층｜참고도서·미디어 포럼 구역",
      "status": "provisional"
    },
    "spots.p20-3.backButton.label": {
      "ja": "図書館入口に戻る",
      "text": "도서관 입구로 돌아가기",
      "status": "provisional"
    },
    "spots.p20-4.name": {
      "ja": "4階｜一般図書エリア",
      "text": "4층｜일반도서 구역",
      "status": "provisional"
    },
    "spots.p20-4.backButton.label": {
      "ja": "図書館入口に戻る",
      "text": "도서관 입구로 돌아가기",
      "status": "provisional"
    },
    "spots.p20-book.name": {
      "ja": "図書室（本棚）",
      "text": "도서실(책장)",
      "status": "provisional"
    },
    "spots.p20-DVD.name": {
      "ja": "視聴覚コーナー",
      "text": "시청각 코너",
      "status": "provisional"
    },
    "spots.board.name": {
      "ja": "掲示板",
      "text": "게시판",
      "status": "provisional"
    },
    "spots.zemi.name": {
      "ja": "ゼミ",
      "text": "세미나",
      "status": "provisional"
    },
    "spots.p23-1.name": {
      "ja": "Ⅶ号館中庭",
      "text": "Ⅶ호관 중정",
      "status": "provisional"
    },
    "spots.p23-1.backButton.label": {
      "ja": "Ⅶ号館に戻る",
      "text": "Ⅶ호관으로 돌아가기",
      "status": "provisional"
    },
    "spots.p12-room.name": {
      "ja": "食堂内部（第二厚生棟）",
      "text": "식당 내부(제2후생동)",
      "status": "provisional"
    },
    "spots.p12-room.backButton.label": {
      "ja": "第二厚生棟入口に戻る",
      "text": "제2후생동 입구로 돌아가기",
      "status": "provisional"
    },
    "spots.p12-win.name": {
      "ja": "窓側席（第二厚生棟）",
      "text": "창가 좌석(제2후생동)",
      "status": "provisional"
    },
    "spots.p12-win.backButton.label": {
      "ja": "第二厚生棟入口に戻る",
      "text": "제2후생동 입구로 돌아가기",
      "status": "provisional"
    },
    "spots.p17-2.name": {
      "ja": "アカデミックコモンズ2階",
      "text": "아카데믹 커먼즈 2층",
      "status": "provisional"
    },
    "spots.p17-2.backButton.label": {
      "ja": "アカデミックコモンズに戻る",
      "text": "아카데믹 커먼즈로 돌아가기",
      "status": "provisional"
    },
    "spots.p17-camp.name": {
      "ja": "キャンプテント（アカデミックコモンズ）",
      "text": "캠핑 텐트(아카데믹 커먼즈)",
      "status": "provisional"
    },
    "spots.p17-camp.backButton.label": {
      "ja": "アカデミックコモンズに戻る",
      "text": "아카데믹 커먼즈로 돌아가기",
      "status": "provisional"
    },
    "spots.tableterass.name": {
      "ja": "中庭",
      "text": "중정",
      "status": "provisional"
    },
    "spots.201room.name": {
      "ja": "Ⅱ号館201号室",
      "text": "Ⅱ호관 201호실",
      "status": "provisional"
    },
    "spots.201room.backButton.label": {
      "ja": "Ⅱ号館前に戻る",
      "text": "Ⅱ호관 앞으로 돌아가기",
      "status": "provisional"
    },
    "spots.101room.name": {
      "ja": "Ⅱ号館101号室",
      "text": "Ⅱ호관 101호실",
      "status": "provisional"
    },
    "spots.101room.backButton.label": {
      "ja": "Ⅱ号館前に戻る",
      "text": "Ⅱ호관 앞으로 돌아가기",
      "status": "provisional"
    },
    "spots.p11-1.name": {
      "ja": "出口付近（生協売店）",
      "text": "출구 부근(생협 매점)",
      "status": "provisional"
    },
    "spots.p11-1.backButton.label": {
      "ja": "生協売店入口に戻る",
      "text": "생협 매점 입구로 돌아가기",
      "status": "provisional"
    },
    "spots.p13-1.name": {
      "ja": "体育館内部",
      "text": "체육관 내부",
      "status": "provisional"
    },
    "spots.p13-1.backButton.label": {
      "ja": "体育館前に戻る",
      "text": "체육관 앞으로 돌아가기",
      "status": "provisional"
    },
    "spots.p15-1.name": {
      "ja": "和室前",
      "text": "다다미방 앞",
      "status": "provisional"
    },
    "spots.p15-1.backButton.label": {
      "ja": "ビズカフェに戻る",
      "text": "비즈 카페로 돌아가기",
      "status": "provisional"
    },
    "spots.p16-terasu.name": {
      "ja": "コモンズテラス",
      "text": "커먼즈 테라스",
      "status": "provisional"
    },
    "spots.p16-terasu.backButton.label": {
      "ja": "コモンズ前に戻る",
      "text": "커먼즈 앞으로 돌아가기",
      "status": "provisional"
    },
    "spots.p24-1.name": {
      "ja": "事務室前（Ⅷ号館）",
      "text": "사무실 앞(Ⅷ호관)",
      "status": "provisional"
    },
    "spots.p24-1.backButton.label": {
      "ja": "Ⅷ号館エントランスに戻る",
      "text": "Ⅷ호관 입구로 돌아가기",
      "status": "provisional"
    },
    "spots.p24-2.name": {
      "ja": "パウダールーム（Ⅷ号館）",
      "text": "파우더룸(Ⅷ호관)",
      "status": "provisional"
    },
    "spots.p24-2.backButton.label": {
      "ja": "Ⅷ号館エントランスに戻る",
      "text": "Ⅷ호관 입구로 돌아가기",
      "status": "provisional"
    },
    "footer.faculties.name": {
      "ja": "学部情報",
      "text": "학부 정보",
      "status": "provisional"
    },
    "footer.events.name": {
      "ja": "KSCイベント情報",
      "text": "KSC 행사 정보",
      "status": "provisional"
    },
    "footer.events.placeholder": {
      "ja": "内容は準備中です。",
      "text": "내용은 준비 중입니다.",
      "status": "provisional"
    },
    "facilities.bus.name": {
      "ja": "バスの時刻表",
      "text": "버스 시간표",
      "status": "provisional"
    },
    "facilities.bus.description": {
      "ja": "バスの時刻表は、大学公式サイトのバスのページで確認できます。ダイヤは変わることがあるので、お出かけ前に最新の情報をご覧ください。",
      "text": "버스 시간표는 대학 공식 사이트의 버스 페이지에서 확인할 수 있습니다. 운행 시간표는 바뀔 수 있으므로 외출 전에 최신 정보를 확인해 주세요.",
      "status": "provisional"
    },
    "facilities.bus.links.0.label": {
      "ja": "バスのページ（大学公式サイト）",
      "text": "버스 페이지(대학 공식 사이트)",
      "status": "provisional"
    },
    "facilities.shingetsusai.name": {
      "ja": "新月祭をのぞいてみよう！",
      "text": "신게쓰 축제를 살펴보자!",
      "status": "provisional"
    },
    "facilities.shingetsusai.hotspot.text": {
      "ja": "新月祭",
      "text": "신게쓰 축제(新月祭)",
      "status": "provisional"
    },
    "facilities.shingetsusai.hotspot.sub": {
      "ja": "🎪 のぞいてみよう！",
      "text": "🎪 살펴보자!",
      "status": "provisional"
    },
    "facilities.shingetsusai.intro.tag": {
      "ja": "大学祭",
      "text": "대학 축제",
      "status": "provisional"
    },
    "facilities.shingetsusai.intro.heading": {
      "ja": "大学祭「新月祭」",
      "text": "대학 축제 ‘신게쓰 축제(新月祭)’",
      "status": "provisional"
    },
    "facilities.shingetsusai.intro.text": {
      "ja": "学生が主体となって企画・運営する大学祭。模擬店や学生団体による企画などが行われています。",
      "text": "학생이 주체가 되어 기획·운영하는 대학 축제입니다. 모의 점포와 학생 단체의 기획 등이 열립니다.",
      "status": "provisional"
    },
    "facilities.shingetsusai.cards.0.title": {
      "ja": "どんな企画があるの？",
      "text": "어떤 기획이 있을까?",
      "status": "provisional"
    },
    "facilities.shingetsusai.cards.0.text": {
      "ja": "2026年の神戸三田キャンパスで開催された企画を紹介しています。",
      "text": "2026년 고베 산다 캠퍼스에서 열린 기획을 소개합니다.",
      "status": "provisional"
    },
    "facilities.shingetsusai.cards.0.chips.0": {
      "ja": "軽音サークル Deep Stream の芝生ライブ",
      "text": "경음악 동아리 Deep Stream의 잔디밭 라이브",
      "status": "provisional"
    },
    "facilities.shingetsusai.cards.0.chips.1": {
      "ja": "ダンスサークル Ney-Kid の公演",
      "text": "댄스 동아리 Ney-Kid의 공연",
      "status": "provisional"
    },
    "facilities.shingetsusai.cards.0.chips.2": {
      "ja": "よさこいサークル 炎流 の演舞",
      "text": "요사코이 동아리 엔류(炎流)의 연무",
      "status": "provisional"
    },
    "facilities.shingetsusai.cards.0.chips.3": {
      "ja": "フラダンスサークル Mahalo のステージ",
      "text": "훌라댄스 동아리 Mahalo의 무대",
      "status": "provisional"
    },
    "facilities.shingetsusai.cards.0.buttons.0.label": {
      "ja": "2026年の企画を見る",
      "text": "2026년 기획 보기",
      "status": "provisional"
    },
    "facilities.shingetsusai.cards.1.title": {
      "ja": "実際の雰囲気を見てみよう！",
      "text": "실제 분위기를 살펴보자!",
      "status": "provisional"
    },
    "facilities.shingetsusai.cards.1.text": {
      "ja": "新月祭の開催風景を紹介しています。",
      "text": "신게쓰 축제의 개최 풍경을 소개합니다.",
      "status": "provisional"
    },
    "facilities.shingetsusai.cards.1.buttons.0.label": {
      "ja": "開催の様子を見る",
      "text": "개최 모습 보기",
      "status": "provisional"
    },
    "facilities.circles.name": {
      "ja": "部活・サークル",
      "text": "동아리·클럽",
      "status": "provisional"
    },
    "facilities.circles.hotspot.text": {
      "ja": "部活・サークル",
      "text": "동아리·클럽",
      "status": "provisional"
    },
    "facilities.circles.intro.text": {
      "ja": "関西学院大学には、スポーツや音楽、ダンス、文化活動など、さまざまな部活・サークルがあります。神戸三田キャンパスのサークルをはじめ、関西学院大学全体の部活動も紹介しています。興味のある活動を探してみましょう。",
      "text": "간세이가쿠인 대학교에는 스포츠, 음악, 댄스, 문화 활동 등 다양한 동아리·클럽이 있습니다. 고베 산다 캠퍼스의 동아리를 비롯해 간세이가쿠인 대학교 전체의 클럽 활동도 소개합니다. 관심 있는 활동을 찾아보세요.",
      "status": "provisional"
    },
    "facilities.studentGroups.name": {
      "ja": "その他の学生団体",
      "text": "기타 학생 단체",
      "status": "provisional"
    },
    "facilities.studentGroups.hotspot.text": {
      "ja": "その他の学生団体",
      "text": "기타 학생 단체",
      "status": "provisional"
    },
    "facilities.studentGroups.intro.text": {
      "ja": "神戸三田キャンパスでは、部活やサークル以外にも、学生が主体となってさまざまな活動に取り組んでいます。新入生のサポートやイベント運営、映像制作、地域貢献など、多彩な学生の活動を紹介します。",
      "text": "고베 산다 캠퍼스에서는 동아리나 클럽 외에도 학생들이 주체가 되어 다양한 활동을 하고 있습니다. 신입생 지원, 행사 운영, 영상 제작, 지역 공헌 등 다채로운 학생 활동을 소개합니다.",
      "status": "provisional"
    },
    "facilities.libraryEating.name": {
      "ja": "飲食エリア",
      "text": "음식 섭취 구역",
      "status": "provisional"
    },
    "facilities.libraryEating.description": {
      "ja": "長時間の勉強やレポート作成の合間に、図書館から出ることなく食事をとれるスペースです。2026年10月から試験的に設置されており、指定されたエリア内で、ルールに従って飲食できます。",
      "text": "장시간 공부나 리포트 작성 중간에 도서관을 나가지 않고 식사할 수 있는 공간입니다. 2026년 10월부터 시험적으로 설치되었으며, 지정된 구역 안에서 규칙에 따라 음식을 먹고 마실 수 있습니다.",
      "status": "provisional"
    },
    "facilities.zemi.name": {
      "ja": "ゼミ",
      "text": "세미나",
      "status": "provisional"
    },
    "facilities.chapel.name": {
      "ja": "ランバス記念礼拝堂",
      "text": "램버스 기념 예배당",
      "status": "provisional"
    },
    "facilities.studentHall2.name": {
      "ja": "第二厚生棟",
      "text": "제2후생동",
      "status": "provisional"
    },
    "facilities.studentHall2.overview.0": {
      "ja": "第二厚生棟には、大学生協が運営する食堂「Fresh Box（フレッシュボックス）」があります。",
      "text": "제2후생동에는 대학 생협이 운영하는 식당 'Fresh Box(프레시 박스)'가 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall2.overview.1": {
      "ja": "食事スペースは1階と2階にあり、学生が昼食や休憩に利用しています。",
      "text": "식사 공간은 1층과 2층에 있으며, 학생들이 점심 식사나 휴식에 이용합니다.",
      "status": "provisional"
    },
    "facilities.studentHall2.overview.2": {
      "ja": "また、2階の食堂スペースは大学祭「新月祭」のイベント会場としても利用されています。",
      "text": "또한 2층 식당 공간은 대학 축제 '신게쓰 축제(新月祭)'의 이벤트 장소로도 이용됩니다.",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.0.title": {
      "ja": "基本情報",
      "text": "기본 정보",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.0.rows.0.0": {
      "ja": "施設名",
      "text": "시설명",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.0.rows.0.1": {
      "ja": "Fresh Box（フレッシュボックス）",
      "text": "Fresh Box(프레시 박스)",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.0.rows.1.0": {
      "ja": "場所",
      "text": "장소",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.0.rows.1.1": {
      "ja": "第二厚生棟1階",
      "text": "제2후생동 1층",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.0.rows.2.0": {
      "ja": "営業時間",
      "text": "영업시간",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.0.rows.3.0": {
      "ja": "食事スペース",
      "text": "식사 공간",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.0.rows.3.1": {
      "ja": "1階・2階",
      "text": "1층·2층",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.0.rows.4.0": {
      "ja": "運営",
      "text": "운영",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.0.rows.4.1": {
      "ja": "関西学院大学生活協同組合",
      "text": "관서학원대학 생활협동조합",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.0.note": {
      "ja": "営業時間は授業期間・休業期間などによって変更されます。最新情報は関学生協公式サイトをご確認ください。",
      "text": "영업시간은 수업 기간·휴업 기간 등에 따라 변경됩니다. 최신 정보는 관서학원 생협 공식 사이트에서 확인해 주세요.",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.0.links.0.label": {
      "ja": "関学生協の店舗別営業時間（公式）",
      "text": "관서학원 생협 매장별 영업시간(공식)",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.1.title": {
      "ja": "好きなおかずを選べるグラムバイキング",
      "text": "좋아하는 반찬을 고르는 그램 뷔페",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.1.figure.caption": {
      "ja": "Fresh Boxのサラダバー・ホットバー",
      "text": "Fresh Box의 샐러드 바·핫 바",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.1.figure.alt": {
      "ja": "第二厚生棟Fresh Boxのサラダバーとホットバー。料理が並ぶグラムバイキング形式の食堂設備",
      "text": "제2후생동 Fresh Box의 샐러드 바와 핫 바. 요리가 놓인 그램 뷔페 형식의 식당 설비",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.1.text": {
      "ja": "Fresh Boxでは、カウンターで注文する料理に加え、好きなおかずを自由に選べるグラムバイキングが特徴です。サラダバーやホットバーが設けられており、好みに合わせて料理を組み合わせることができます。",
      "text": "Fresh Box는 카운터에서 주문하는 요리 외에, 좋아하는 반찬을 자유롭게 고를 수 있는 그램 뷔페가 특징입니다. 샐러드 바와 핫 바가 있어 취향에 맞게 요리를 조합할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.1.buttons.0.label": {
      "ja": "Fresh Boxのメニューを見る",
      "text": "Fresh Box 메뉴 보기",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.title": {
      "ja": "新月祭ではダンス公演の会場に！",
      "text": "신게쓰 축제에서는 댄스 공연장으로!",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.text.0": {
      "ja": "第二厚生棟の2階は、普段は食事スペースとして利用されていますが、大学祭「新月祭」ではイベント会場としても活用されています。",
      "text": "제2후생동 2층은 평소에는 식사 공간으로 이용되지만, 대학 축제 '신게쓰 축제(新月祭)'에서는 이벤트 장소로도 활용됩니다.",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.text.1": {
      "ja": "2026年の新月祭では、ダンスサークル「Ney-Kid」が2日間にわたり公演を行い、さまざまなジャンルのダンスやバンドセッションを披露しました。",
      "text": "2026년 신게쓰 축제에서는 댄스 서클 'Ney-Kid'가 이틀에 걸쳐 공연을 열어 다양한 장르의 댄스와 밴드 세션을 선보였습니다.",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.rows.0.0": {
      "ja": "団体",
      "text": "단체",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.rows.1.0": {
      "ja": "イベント",
      "text": "이벤트",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.rows.1.1": {
      "ja": "新月祭2026",
      "text": "신게쓰 축제 2026",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.rows.2.0": {
      "ja": "場所",
      "text": "장소",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.rows.2.1": {
      "ja": "第二厚生棟2階食堂",
      "text": "제2후생동 2층 식당",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.rows.3.0": {
      "ja": "内容",
      "text": "내용",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.rows.3.1": {
      "ja": "各ジャンルのショーケース、バンドセッション",
      "text": "장르별 쇼케이스, 밴드 세션",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.items.0.name": {
      "ja": "公演の動画",
      "text": "공연 영상",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.items.0.text": {
      "ja": "2025年の新月祭での、Ney-Kidの公演の様子です。",
      "text": "2025년 신게쓰 축제에서 열린 Ney-Kid의 공연 모습입니다.",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.items.0.videos.0.label": {
      "ja": "動画を見る",
      "text": "영상 보기",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.items.0.videos.0.caption": {
      "ja": "Ney-Kid公式YouTubeチャンネルより（掲載の許可を得ています）。",
      "text": "Ney-Kid 공식 YouTube 채널에서(게재 허가를 받았습니다).",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.note": {
      "ja": "2026年の開催内容です。会場や内容は年によって変わる場合があります。",
      "text": "2026년 개최 내용입니다. 장소와 내용은 해마다 달라질 수 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall2.sections.2.links.0.label": {
      "ja": "新月祭2026 KSC一般企画（公式）",
      "text": "신게쓰 축제 2026 KSC 일반 기획(공식)",
      "status": "provisional"
    },
    "facilities.studentHall2.source": {
      "ja": "関西学院大学生活協同組合 公式サイト（2026年11月確認）、新月祭2026公式サイト",
      "text": "관서학원대학 생활협동조합 공식 사이트(2026년 11월 확인), 신게쓰 축제 2026 공식 사이트",
      "status": "provisional"
    },
    "facilities.academicCommons.name": {
      "ja": "アカデミックコモンズ 1階",
      "text": "아카데믹 커먼스 1층",
      "status": "provisional"
    },
    "facilities.academicCommons.lead": {
      "ja": "学習・交流・学生の活動が生まれる場所",
      "text": "학습·교류·학생 활동이 생겨나는 곳",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.0.title": {
      "ja": "アカデミックコモンズ",
      "text": "아카데믹 커먼즈",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.0.subtitle": {
      "ja": "学生が主体的に学び、交流し、活動する場所",
      "text": "학생이 주체적으로 배우고 교류하며 활동하는 곳",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.0.text.0": {
      "ja": "神戸三田キャンパスのアカデミックコモンズは、2013年4月に開設された2階建ての施設です。",
      "text": "고베산다 캠퍼스의 아카데믹 커먼스는 2013년 4월에 문을 연 2층 건물입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.0.text.1": {
      "ja": "「学習」「憩い」「学生活動」をコンセプトとし、学生が主体的に学び、交流し、活動できる場所として整備されました。愛称は「CRESCENT（クレセント）」です。",
      "text": "'학습', '휴식', '학생 활동'을 콘셉트로, 학생이 주체적으로 배우고 교류하며 활동할 수 있는 곳으로 마련되었습니다. 애칭은 'CRESCENT(크레센트)'입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.0.text.2": {
      "ja": "共同学習やグループワーク、学生主体のプロジェクト、さまざまなイベントなど、多様な活動に利用されています。",
      "text": "공동 학습과 그룹 활동, 학생 주도 프로젝트, 다양한 행사 등 여러 활동에 이용됩니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.1.title": {
      "ja": "1階のようす",
      "text": "1층의 모습",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.1.text.0": {
      "ja": "アカデミックコモンズの1階には、広々とした共同学習スペースや、発表・イベントのための設備、学生が交流できるラウンジなどがあります。",
      "text": "아카데믹 커먼스 1층에는 넓은 공동 학습 공간과 발표·행사를 위한 설비, 학생들이 교류할 수 있는 라운지 등이 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.1.text.1": {
      "ja": "授業の課題に取り組んだり、友人と話し合ったり、学生が企画したイベントに参加したりと、さまざまな目的で利用されています。",
      "text": "수업 과제를 하거나 친구와 이야기하거나 학생이 기획한 행사에 참여하는 등 다양한 목적으로 이용됩니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.2.title": {
      "ja": "アクティブラーニングゾーン",
      "text": "액티브 러닝 존",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.2.subtitle": {
      "ja": "自由に組み合わせられる、約800㎡の共同学習スペース",
      "text": "자유롭게 배치할 수 있는 약 800㎡의 공동 학습 공간",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.2.figure.caption": {
      "ja": "アクティブラーニングゾーン",
      "text": "액티브 러닝 존",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.2.text.0": {
      "ja": "1階の中心にあるアクティブラーニングゾーンは、2階まで吹き抜けになった約800㎡の開放的な空間です。",
      "text": "1층 중심에 있는 액티브 러닝 존은 2층까지 뚫린 약 800㎡의 개방적인 공간입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.2.text.1": {
      "ja": "可動式の机や椅子、ホワイトボードなどを活用し、個人学習からグループディスカッション、発表の準備まで、さまざまな活動ができます。",
      "text": "이동식 책상과 의자, 화이트보드 등을 활용해 개인 학습부터 그룹 토론, 발표 준비까지 다양한 활동을 할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.2.text.2": {
      "ja": "また、学生団体によるイベントやワークショップの会場としても利用されています。",
      "text": "또한 학생 단체의 행사와 워크숍 장소로도 이용됩니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.3.title": {
      "ja": "シアター",
      "text": "시어터",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.3.subtitle": {
      "ja": "発表やイベントに利用される多目的スペース",
      "text": "발표와 행사에 이용되는 다목적 공간",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.3.figure.caption": {
      "ja": "シアター",
      "text": "시어터",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.3.text.0": {
      "ja": "1階には、120インチのハイビジョンプロジェクターや音響設備を備えたシアターがあります。学生によるプレゼンテーションやイベント、映像作品の上映などに利用される空間です。",
      "text": "1층에는 120인치 고화질 프로젝터와 음향 설비를 갖춘 시어터가 있습니다. 학생 프레젠테이션과 행사, 영상 작품 상영 등에 이용되는 공간입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.3.text.1": {
      "ja": "2025年のオープンキャンパスでは、学生プロジェクト「SHADECOR」によるプロジェクションマッピングの展示が企画されました。",
      "text": "2025년 오픈 캠퍼스에서는 학생 프로젝트 'SHADECOR'의 프로젝션 매핑 전시가 기획되었습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.4.title": {
      "ja": "プレゼンテーションルーム・アクティブルーム",
      "text": "프레젠테이션 룸·액티브 룸",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.4.subtitle": {
      "ja": "話し合いから成果発表まで",
      "text": "토론부터 성과 발표까지",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.4.text.0": {
      "ja": "プレゼンテーションルームでは、学生が発表やディスカッションを行うことができます。また、アクティブルームは、少人数のグループ活動や打ち合わせなどに対応するスペースです。",
      "text": "프레젠테이션 룸에서는 학생이 발표와 토론을 할 수 있습니다. 액티브 룸은 소규모 그룹 활동과 회의 등에 쓰이는 공간입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.4.text.1": {
      "ja": "アカデミックコモンズには、活動内容や人数に応じて使い分けられる学習空間が用意されています。",
      "text": "아카데믹 커먼스에는 활동 내용과 인원에 맞게 골라 쓸 수 있는 학습 공간이 마련되어 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.5.title": {
      "ja": "クレセントラウンジ",
      "text": "크레센트 라운지",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.5.subtitle": {
      "ja": "授業の合間に過ごせる、くつろぎの空間",
      "text": "수업 사이에 쉴 수 있는 편안한 공간",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.5.text.0": {
      "ja": "クレセントラウンジは、友人との会話や休憩などに利用できるスペースです。",
      "text": "크레센트 라운지는 친구와 대화하거나 쉬는 데 이용할 수 있는 공간입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.5.text.1": {
      "ja": "学生が授業の合間に過ごしたり、友人同士で交流したりする場所として利用されています。",
      "text": "학생들이 수업 사이에 시간을 보내거나 친구들과 교류하는 장소로 이용됩니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.title": {
      "ja": "テントのある学びの空間",
      "text": "텐트가 있는 배움의 공간",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.subtitle": {
      "ja": "キャンプの手法を取り入れた、新しい学びの形",
      "text": "캠핑 방식을 도입한 새로운 배움의 형태",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.figure.caption": {
      "ja": "アカデミックコモンズのテント",
      "text": "아카데믹 커먼스의 텐트",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.text.0": {
      "ja": "神戸三田キャンパスでは、テントなどのアウトドア用品を活用した「Camping Campus®」という取り組みが行われています。",
      "text": "고베산다 캠퍼스에서는 텐트 등 아웃도어 용품을 활용한 'Camping Campus®'라는 활동이 이루어지고 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.text.1": {
      "ja": "2019年には、学生の提案によってアカデミックコモンズにテントが設置されました。テントは、学生が学習や休憩をする場所として利用され、学部の垣根を越えた交流の場づくりにもつながりました。",
      "text": "2019년에는 학생의 제안으로 아카데믹 커먼스에 텐트가 설치되었습니다. 텐트는 학생들이 공부하고 쉬는 장소로 이용되었고, 학부의 벽을 넘는 교류의 장을 만드는 데에도 이어졌습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.text.2": {
      "ja": "また、関西学院大学は2020年にアウトドアブランド「Snow Peak」と包括連携協定を締結し、キャンプの手法を取り入れた学びを展開しています。",
      "text": "또한 간세이가쿠인대학은 2020년에 아웃도어 브랜드 'Snow Peak'와 포괄 연계 협정을 맺고, 캠핑 방식을 도입한 배움을 펼치고 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.text.3": {
      "ja": "2025年のオープンキャンパスでは、クレセントラウンジで学生グループ「CAMP×US」が、来場者にテント空間を体験してもらう企画を実施しました。",
      "text": "2025년 오픈 캠퍼스에서는 크레센트 라운지에서 학생 그룹 'CAMP×US'가 방문객이 텐트 공간을 체험하는 기획을 진행했습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.history.0.year": {
      "ja": "2019年",
      "text": "2019년",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.history.0.text": {
      "ja": "学生の提案により、アカデミックコモンズにテントを設置。",
      "text": "학생의 제안으로 아카데믹 커먼스에 텐트 설치.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.history.1.year": {
      "ja": "2020年",
      "text": "2020년",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.history.1.text": {
      "ja": "関西学院大学とSnow Peakが包括連携協定を締結。",
      "text": "간세이가쿠인대학과 Snow Peak가 포괄 연계 협정 체결.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.history.2.year": {
      "ja": "2025年",
      "text": "2025년",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.history.2.text": {
      "ja": "オープンキャンパスでCAMP×USがテント体験企画を実施。",
      "text": "오픈 캠퍼스에서 CAMP×US가 텐트 체험 기획 진행.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.6.note": {
      "ja": "年表は過去の取り組みです。現在設置されているテントの数や利用方法は確認できていません。",
      "text": "연표는 과거의 활동입니다. 현재 설치된 텐트의 수와 이용 방법은 확인하지 못했습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.7.title": {
      "ja": "学習を支える設備・サポート",
      "text": "학습을 돕는 설비·지원",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.7.text": {
      "ja": "アカデミックコモンズには、学生の学習を支えるさまざまな設備やサービスがあります。",
      "text": "아카데믹 커먼스에는 학생의 학습을 돕는 다양한 설비와 서비스가 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.7.items.0.name": {
      "ja": "ツールデスク",
      "text": "툴 데스크",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.7.items.0.text": {
      "ja": "学習やグループ活動に使用するノートパソコンなどの機器を貸し出しています。",
      "text": "학습과 그룹 활동에 쓰는 노트북 등의 기기를 대여합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.7.items.1.name": {
      "ja": "クレセントチューター",
      "text": "크레센트 튜터",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.7.items.1.text": {
      "ja": "関西学院大学の大学院生が、学部生の学習に関する相談に応じる制度です。",
      "text": "간세이가쿠인대학 대학원생이 학부생의 학습 상담에 응하는 제도입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.7.items.2.name": {
      "ja": "カジュアルライブラリー",
      "text": "캐주얼 라이브러리",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.7.items.2.text": {
      "ja": "学生が気軽に本と出会えるスペースとして設けられています。",
      "text": "학생들이 부담 없이 책을 만날 수 있는 공간입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.7.items.3.name": {
      "ja": "学生支援窓口",
      "text": "학생 지원 창구",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.7.items.3.text": {
      "ja": "1階には、障がいのある学生の修学を支援するキャンパス自立支援室や、健康面を支える保健館分室があります。",
      "text": "1층에는 장애가 있는 학생의 수학을 지원하는 캠퍼스 자립지원실과 건강을 돕는 보건관 분실이 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.title": {
      "ja": "アカデミックコモンズ・プロジェクト",
      "text": "아카데믹 커먼즈 프로젝트",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.subtitle": {
      "ja": "学生のアイデアを、実際の活動へ。",
      "text": "학생의 아이디어를 실제 활동으로.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.text.0": {
      "ja": "アカデミックコモンズでは、学生がグループで目標を設定し、その実現に向けて活動する「アカデミックコモンズ・プロジェクト」が実施されています。",
      "text": "아카데믹 커먼스에서는 학생이 그룹으로 목표를 세우고 그 실현을 위해 활동하는 '아카데믹 커먼스 프로젝트'가 진행되고 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.text.1": {
      "ja": "大学は毎年春にプロジェクトを募集・採択し、1年間の活動を支援しています。活動内容は映像制作やプログラミング教育、環境問題への取り組み、地域交流など多岐にわたります。",
      "text": "대학은 매년 봄에 프로젝트를 모집·채택해 1년간 활동을 지원합니다. 활동 내용은 영상 제작, 프로그래밍 교육, 환경 문제 대응, 지역 교류 등 다양합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.text.2": {
      "ja": "2026年度は、次の10団体が活動しています。団体名をタップすると、くわしい説明が開きます。",
      "text": "2026년도에는 다음 10개 단체가 활동하고 있습니다. 단체명을 누르면 자세한 설명이 열립니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.0.sub": {
      "ja": "映像制作プロジェクト",
      "text": "영상 제작 프로젝트",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.0.text.0": {
      "ja": "自主制作映像のほか、学内外の団体や個人からの依頼を受け、PVや施設紹介動画などを制作しています。",
      "text": "자체 제작 영상 외에도 학내외 단체와 개인의 의뢰를 받아 PV와 시설 소개 영상 등을 제작합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.0.text.1": {
      "ja": "企画・撮影・編集まで、学生がさまざまな制作工程に取り組んでいます。",
      "text": "기획부터 촬영·편집까지 학생들이 다양한 제작 과정에 참여합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.1.sub": {
      "ja": "プロジェクションマッピング制作プロジェクト",
      "text": "프로젝션 매핑 제작 프로젝트",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.1.text.0": {
      "ja": "映像を建物や空間に投影するプロジェクションマッピングの制作・投影を行っています。",
      "text": "건물이나 공간에 영상을 투사하는 프로젝션 매핑을 제작·상영합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.1.text.1": {
      "ja": "学内外のイベントへの参加に加え、小学生向けのワークショップや技術指導にも取り組んでいます。",
      "text": "학내외 행사 참가뿐 아니라 초등학생 대상 워크숍과 기술 지도에도 힘쓰고 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.1.record": {
      "ja": "2026年6月には、神戸三田キャンパスの体育館でプロジェクションマッピングを実施しました。",
      "text": "2026년 6월에는 고베산다 캠퍼스 체육관에서 프로젝션 매핑을 선보였습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.2.sub": {
      "ja": "宇宙教育プロジェクト",
      "text": "우주 교육 프로젝트",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.2.text.0": {
      "ja": "宇宙への興味や関心を広げるため、学内外でイベントを企画しています。",
      "text": "우주에 대한 흥미와 관심을 넓히기 위해 학내외에서 행사를 기획합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.2.text.1": {
      "ja": "SNSで宇宙に関する情報を発信するほか、惑星や星座を題材にした体験型イベントなどにも取り組んでいます。",
      "text": "SNS로 우주 관련 정보를 전하고, 행성과 별자리를 주제로 한 체험형 행사도 진행합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.2.record": {
      "ja": "2026年6月・7月には、学内で「スペース射的」を開催しました。",
      "text": "2026년 6월·7월에는 학내에서 '스페이스 사격'을 열었습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.3.name": {
      "ja": "Feel Learning～感学～",
      "text": "Feel Learning~感学~",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.3.sub": {
      "ja": "プログラミング教室開催プロジェクト",
      "text": "프로그래밍 교실 개최 프로젝트",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.3.text.0": {
      "ja": "主に小学生を対象としたプログラミングのワークショップを開催しています。",
      "text": "주로 초등학생을 대상으로 프로그래밍 워크숍을 엽니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.3.text.1": {
      "ja": "また、大学生向けのC言語勉強会などを通じて、学生同士の学び合いも支援しています。",
      "text": "또한 대학생 대상 C언어 스터디 등을 통해 학생 간 배움도 지원합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.3.record": {
      "ja": "2026年7月には、大学生向けのC言語の勉強会を開きました。",
      "text": "2026년 7월에는 대학생 대상 C언어 스터디를 열었습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.4.sub": {
      "ja": "価値循環型プロジェクト",
      "text": "가치 순환형 프로젝트",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.4.text.0": {
      "ja": "衣服の廃棄問題に着目し、古着を再利用するフリーマーケットやワークショップを開催しています。",
      "text": "의류 폐기 문제에 주목해, 헌 옷을 재활용하는 플리마켓과 워크숍을 엽니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.4.text.1": {
      "ja": "着なくなった服を必要な人へつなぎ、衣服の再利用を通じて環境問題について考える機会を提供しています。",
      "text": "입지 않는 옷을 필요한 사람에게 연결하고, 의류 재활용을 통해 환경 문제를 생각하는 기회를 제공합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.4.record": {
      "ja": "2026年6月には「GoodHookFes vol.6」を開き、無料のフリーマーケットとリメイクのワークショップを行いました。",
      "text": "2026년 6월에는 'GoodHookFes vol.6'을 열어 무료 플리마켓과 리메이크 워크숍을 진행했습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.5.sub": {
      "ja": "SDGs広報プロジェクト",
      "text": "SDGs 홍보 프로젝트",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.5.text.0": {
      "ja": "「みんなの生活にSDGsを」をモットーに、SDGsを身近に感じてもらうための活動を行っています。",
      "text": "'모두의 생활에 SDGs를'을 모토로, SDGs를 가깝게 느낄 수 있도록 활동합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.5.text.1": {
      "ja": "地域の小学生を対象としたイベントや体験学習などを通じて、環境問題や持続可能な社会について学ぶ機会を提供しています。",
      "text": "지역 초등학생 대상 행사와 체험 학습 등을 통해 환경 문제와 지속 가능한 사회에 대해 배울 기회를 제공합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.5.record": {
      "ja": "2026年8月には、三田市の小学生を招いて、海とプラスチックごみについて学ぶイベントを開きました。",
      "text": "2026년 8월에는 산다시 초등학생을 초대해 바다와 플라스틱 쓰레기에 대해 배우는 행사를 열었습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.6.name": {
      "ja": "あ、みっけ！",
      "text": "아, 밋케!(あ、みっけ！)",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.6.sub": {
      "ja": "三田をもっと好きになるプロジェクト",
      "text": "산다를 더 좋아하게 되는 프로젝트",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.6.text.0": {
      "ja": "三田市の魅力を発信し、地域の人々との交流を促進する活動を行っています。",
      "text": "산다시의 매력을 알리고 지역 주민과의 교류를 촉진하는 활동을 합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.6.text.1": {
      "ja": "市内のイベントや地域活動への参加を通じて、学生や地域の人々が三田市への愛着を深めるきっかけづくりに取り組んでいます。",
      "text": "시내 행사와 지역 활동 참여를 통해 학생과 지역 주민이 산다시에 애착을 갖는 계기를 만들고 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.7.sub": {
      "ja": "保護犬・保護猫プロジェクト",
      "text": "보호견·보호묘 프로젝트",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.7.text.0": {
      "ja": "保護犬・保護猫について学び、その存在や保護活動への理解を広げることを目指しています。",
      "text": "보호견·보호묘에 대해 배우고, 그 존재와 보호 활동에 대한 이해를 넓히는 것을 목표로 합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.7.text.1": {
      "ja": "メンバーは保護施設でボランティア活動にも参加し、動物のお世話や施設運営の手伝いなどを行っています。",
      "text": "멤버들은 보호 시설에서 봉사 활동에도 참여해 동물을 돌보고 시설 운영을 돕습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.8.name": {
      "ja": "クレセントサイクリング",
      "text": "크레센트 사이클링",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.8.sub": {
      "ja": "シェアサイクルプロジェクト",
      "text": "공유 자전거 프로젝트",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.8.text.0": {
      "ja": "神戸三田キャンパスに通う学生の移動を便利にするため、地域と連携したシェアサイクル制度の実現を目指しています。",
      "text": "고베산다 캠퍼스에 다니는 학생의 이동을 편리하게 하기 위해, 지역과 연계한 공유 자전거 제도의 실현을 목표로 합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.8.text.1": {
      "ja": "自転車を活用した三田市内の移動や地域の魅力発見、新しい交流の創出に取り組んでいます。",
      "text": "자전거를 활용한 산다 시내 이동과 지역의 매력 발견, 새로운 교류 창출에 힘쓰고 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.8.note": {
      "ja": "シェアサイクル制度は、実現に向けて取り組んでいる段階です。",
      "text": "공유 자전거 제도는 실현을 위해 노력하고 있는 단계입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.9.name": {
      "ja": "関西学院AgriNOVA",
      "text": "간세이가쿠인 AgriNOVA",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.9.sub": {
      "ja": "スマート農業推進プロジェクト",
      "text": "스마트 농업 추진 프로젝트",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.9.text.0": {
      "ja": "気候変動や農業従事者の減少などの課題に対し、データや生物情報を活用した農業の実現を目指しています。",
      "text": "기후 변화와 농업 종사자 감소 등의 과제에 대응해, 데이터와 생물 정보를 활용한 농업의 실현을 목표로 합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.9.text.1": {
      "ja": "将来的にはアプリ開発などを通じて、効率的で持続可能な農業への貢献を目指しています。",
      "text": "앞으로는 앱 개발 등을 통해 효율적이고 지속 가능한 농업에 기여하고자 합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.items.9.record": {
      "ja": "2026年7月にはUNIVERS＆と合同で、小学生の自由研究を支援するイベントを実施しました。",
      "text": "2026년 7월에는 UNIVERS＆와 합동으로 초등학생의 자유 연구를 지원하는 행사를 열었습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.buttons.0.label": {
      "ja": "2026年度のプロジェクト活動を見る",
      "text": "2026년도 프로젝트 활동 보기",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.8.note": {
      "ja": "団体名・活動内容・活動実績は、大学公式サイト「2026年度 プロジェクト・活動実績」をもとにしています（2026年11月確認）。",
      "text": "단체명·활동 내용·활동 실적은 대학 공식 사이트 '2026년도 프로젝트·활동 실적'을 바탕으로 했습니다(2026년 11월 확인).",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.9.title": {
      "ja": "公式情報",
      "text": "공식 정보",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.9.buttons.0.label": {
      "ja": "アカデミックコモンズ公式ページを見る",
      "text": "아카데믹 커먼스 공식 페이지 보기",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.9.buttons.1.label": {
      "ja": "アカデミックコモンズについて",
      "text": "아카데믹 커먼스 소개",
      "status": "provisional"
    },
    "facilities.academicCommons.sections.9.buttons.2.label": {
      "ja": "学生サポート・窓口案内を見る",
      "text": "학생 지원·창구 안내 보기",
      "status": "provisional"
    },
    "facilities.academicCommons.source": {
      "ja": "関西学院大学 神戸三田キャンパス アカデミックコモンズ公式ページ、学生サポートページ（2026年11月確認）",
      "text": "간세이가쿠인대학 고베산다 캠퍼스 아카데믹 커먼스 공식 페이지, 학생 지원 페이지(2026년 11월 확인)",
      "status": "provisional"
    },
    "facilities.academicCommons2F.name": {
      "ja": "アカデミックコモンズ 2階",
      "text": "아카데믹 커먼스 2층",
      "status": "provisional"
    },
    "facilities.academicCommons2F.lead": {
      "ja": "仲間と学びを深め、アイデアを形にする空間",
      "text": "동료와 배움을 깊게 하고 아이디어를 실현하는 공간",
      "status": "provisional"
    },
    "facilities.academicCommons2F.overview.0": {
      "ja": "アカデミックコモンズの2階には、少人数での打ち合わせからグループでの共同作業まで、さまざまな活動に対応するスペースがあります。",
      "text": "아카데믹 커먼스 2층에는 소규모 회의부터 그룹 공동 작업까지 다양한 활동에 맞는 공간이 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.overview.1": {
      "ja": "また、キャリアセンターなど、学生生活を支援する窓口も設けられています。",
      "text": "또한 커리어 센터 등 학생 생활을 지원하는 창구도 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.0.title": {
      "ja": "アカデミックデッキ",
      "text": "아카데믹 데크",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.0.subtitle": {
      "ja": "1階の大空間を見渡せる、開放的な学習スペース",
      "text": "1층의 넓은 공간이 내려다보이는 개방적인 학습 공간",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.0.figure.caption": {
      "ja": "アカデミックデッキ",
      "text": "아카데믹 데크",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.0.text.0": {
      "ja": "アカデミックデッキは、2階からアクティブラーニングゾーンに張り出したスペースです。",
      "text": "아카데믹 데크는 2층에서 액티브 러닝 존 쪽으로 튀어나온 공간입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.0.text.1": {
      "ja": "1階の開放的な空間を見渡すことができ、机やホワイトボードを使用して、学生同士の打ち合わせや共同学習を行うことができます。",
      "text": "1층의 개방적인 공간을 내려다볼 수 있고, 책상과 화이트보드를 이용해 학생끼리 회의나 공동 학습을 할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.1.title": {
      "ja": "ミーティングルーム",
      "text": "미팅 룸",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.1.subtitle": {
      "ja": "少人数の話し合いやグループワークに",
      "text": "소규모 토론과 그룹 활동에",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.1.text.0": {
      "ja": "ミーティングルームは、少人数での打ち合わせや話し合いに利用できる部屋です。",
      "text": "미팅 룸은 소규모 회의와 토론에 이용할 수 있는 방입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.1.text.1": {
      "ja": "グループでの課題や企画の準備など、目的に応じた活動に活用できます。",
      "text": "그룹 과제나 기획 준비 등 목적에 맞는 활동에 활용할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.2.title": {
      "ja": "リサーチルーム",
      "text": "리서치 룸",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.2.subtitle": {
      "ja": "資料調査や個人作業に",
      "text": "자료 조사와 개인 작업에",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.2.text.0": {
      "ja": "リサーチルームは、グループでの打ち合わせに向けた個人の調査や準備などに適したスペースです。",
      "text": "리서치 룸은 그룹 회의를 위한 개인 조사와 준비 등에 알맞은 공간입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.2.text.1": {
      "ja": "集中して情報を整理したり、作業を進めたりする場として利用できます。",
      "text": "집중해서 정보를 정리하거나 작업을 진행하는 장소로 이용할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.3.title": {
      "ja": "クリエイティブスクエア",
      "text": "크리에이티브 스퀘어",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.3.subtitle": {
      "ja": "アイデアを具体的な形にするための空間",
      "text": "아이디어를 구체적인 형태로 만드는 공간",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.3.text.0": {
      "ja": "クリエイティブスクエアは、可動式の机などを活用し、作業やディスカッションを行うためのスペースです。",
      "text": "크리에이티브 스퀘어는 이동식 책상 등을 활용해 작업과 토론을 하는 공간입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.3.text.1": {
      "ja": "グループで企画を考えたり、作品制作の準備をしたりするなど、共同作業に利用できます。",
      "text": "그룹으로 기획을 생각하거나 작품 제작을 준비하는 등 공동 작업에 이용할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.4.title": {
      "ja": "プロジェクトルーム・ミッションルーム",
      "text": "프로젝트 룸·미션 룸",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.4.subtitle": {
      "ja": "学生のプロジェクト活動を支える部屋",
      "text": "학생 프로젝트 활동을 돕는 방",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.4.text.0": {
      "ja": "2階には、学生がグループで取り組む活動のためのプロジェクトルームやミッションルームが設けられています。",
      "text": "2층에는 학생이 그룹으로 하는 활동을 위한 프로젝트 룸과 미션 룸이 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.4.text.1": {
      "ja": "アカデミックコモンズでは、学生が自ら設定した目標に向けて活動するプロジェクトを支援しており、専用のスペースや設備を活用した活動が行われています。",
      "text": "아카데믹 커먼스는 학생이 스스로 정한 목표를 향해 활동하는 프로젝트를 지원하며, 전용 공간과 설비를 활용한 활동이 이루어지고 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.5.title": {
      "ja": "コラボレーションルーム",
      "text": "컬래버레이션 룸",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.5.subtitle": {
      "ja": "学生同士の協働を支えるスペース",
      "text": "학생 간 협업을 돕는 공간",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.5.text.0": {
      "ja": "コラボレーションルームは、学生団体の活動や共同企画などに利用されるスペースです。",
      "text": "컬래버레이션 룸은 학생 단체 활동과 공동 기획 등에 이용되는 공간입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.5.text.1": {
      "ja": "アカデミックコモンズには、学生が交流し、アイデアを共有するための環境が整えられています。",
      "text": "아카데믹 커먼스에는 학생이 교류하고 아이디어를 나눌 수 있는 환경이 갖춰져 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.6.title": {
      "ja": "学生生活を支える窓口",
      "text": "학생 생활을 돕는 창구",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.6.text": {
      "ja": "2階には、学習スペースのほかにも、大学生活や将来の進路について相談できる窓口があります。",
      "text": "2층에는 학습 공간 외에도 대학 생활과 장래 진로에 대해 상담할 수 있는 창구가 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.6.items.0.name": {
      "ja": "キャリアセンター",
      "text": "커리어 센터",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.6.items.0.chips.0": {
      "ja": "就職活動や将来の進路をサポート",
      "text": "취업 활동과 장래 진로 지원",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.6.items.0.text": {
      "ja": "進路選択、インターンシップ、就職活動などについて専門のキャリアアドバイザーに相談できます。キャリアガイダンスや個人面談、面接トレーニング、業界研究セミナー、学内企業説明会なども実施されています。",
      "text": "진로 선택, 인턴십, 취업 활동 등에 대해 전문 커리어 어드바이저와 상담할 수 있습니다. 커리어 가이던스와 개인 면담, 면접 트레이닝, 업계 연구 세미나, 학내 기업 설명회 등도 열립니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.6.items.1.name": {
      "ja": "教務機構事務部",
      "text": "교무기구 사무부",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.6.items.1.chips.0": {
      "ja": "教員免許の取得をサポート",
      "text": "교원 면허 취득 지원",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.6.items.1.text": {
      "ja": "教職課程の履修や教員採用試験など、教員を目指す学生からの相談に対応しています。",
      "text": "교직 과정 이수와 교원 채용 시험 등 교사를 목표로 하는 학생의 상담에 응합니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.6.items.2.name": {
      "ja": "学生支援相談室",
      "text": "학생지원상담실",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.6.items.2.chips.0": {
      "ja": "学生生活の悩みを相談できる場所",
      "text": "학생 생활의 고민을 상담할 수 있는 곳",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.6.items.2.text": {
      "ja": "心理相談、修学相談、生活相談など、学生が抱えるさまざまな悩みについて、専門のカウンセラーに相談できます。相談内容の秘密は厳守されます。",
      "text": "심리 상담, 수학 상담, 생활 상담 등 학생이 겪는 다양한 고민을 전문 카운슬러와 상담할 수 있습니다. 상담 내용의 비밀은 엄수됩니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.6.buttons.0.label": {
      "ja": "学生サポート・窓口案内を見る",
      "text": "학생 지원·창구 안내 보기",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.7.title": {
      "ja": "アカデミックコモンズの特徴",
      "text": "아카데믹 커먼스의 특징",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.7.text.0": {
      "ja": "アカデミックコモンズは、学生が自由に学ぶだけでなく、グループでの共同作業や学生自身によるプロジェクト活動など、さまざまな学びを支える施設です。",
      "text": "아카데믹 커먼스는 학생이 자유롭게 배우는 것뿐 아니라 그룹 공동 작업과 학생 스스로의 프로젝트 활동 등 다양한 배움을 돕는 시설입니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.sections.7.text.1": {
      "ja": "1階の開放的な共同学習空間と、2階の目的に応じた活動スペースを使い分けながら、学生が主体的に活動できる環境が整えられています。",
      "text": "1층의 개방적인 공동 학습 공간과 2층의 목적별 활동 공간을 골라 쓰며 학생이 주체적으로 활동할 수 있는 환경이 갖춰져 있습니다.",
      "status": "provisional"
    },
    "facilities.academicCommons2F.source": {
      "ja": "関西学院大学 神戸三田キャンパス 学生サポートページ（2026年11月確認）",
      "text": "간세이가쿠인대학 고베산다 캠퍼스 학생 지원 페이지(2026년 11월 확인)",
      "status": "provisional"
    },
    "facilities.campTent.name": {
      "ja": "キャンプテント",
      "text": "캠핑 텐트",
      "status": "provisional"
    },
    "facilities.colorfulBox.name": {
      "ja": "Colorful Box（生協売店）",
      "text": "Colorful Box(생협 매점)",
      "status": "provisional"
    },
    "facilities.bizcafe.name": {
      "ja": "BiZCAFE（ビズカフェ）",
      "text": "BiZCAFE(비즈카페)",
      "status": "provisional"
    },
    "facilities.bizcafe.facts.0": {
      "ja": "学生はドリンク無料",
      "text": "학생은 음료 무료",
      "status": "provisional"
    },
    "facilities.bizcafe.facts.1": {
      "ja": "Wi-Fiあり",
      "text": "Wi-Fi 있음",
      "status": "provisional"
    },
    "facilities.bizcafe.facts.2": {
      "ja": "コンセントあり",
      "text": "콘센트 있음",
      "status": "provisional"
    },
    "facilities.bizcafe.facts.3": {
      "ja": "10:25〜16:55（土日祝休み）",
      "text": "10:25~16:55(토·일·공휴일 휴무)",
      "status": "provisional"
    },
    "facilities.bizcafe.lead": {
      "ja": "無料ドリンクを楽しみながら、学び、交流できるカフェ",
      "text": "무료 음료를 즐기며 배우고 교류할 수 있는 카페",
      "status": "provisional"
    },
    "facilities.bizcafe.overview.0": {
      "ja": "BiZCAFEは、2021年4月に神戸三田キャンパスのアカデミックコモンズ1階にオープンした、学生のキャリア形成とSDGsの推進を目的とするカフェです。",
      "text": "BiZCAFE는 2021년 4월 고베산다 캠퍼스 아카데믹 커먼즈 1층에 문을 연 카페로, 학생의 커리어 형성과 SDGs 추진을 목적으로 합니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.overview.1": {
      "ja": "学生同士の交流や自習、課題の作成などに利用できるほか、企業の社会人と交流するイベントも開催されています。",
      "text": "학생끼리의 교류나 자습, 과제 작성 등에 이용할 수 있으며, 기업에서 일하는 사회인과 교류하는 이벤트도 열립니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.overview.2": {
      "ja": "学生が無料でドリンクを楽しめることも特徴です。",
      "text": "학생이 무료로 음료를 즐길 수 있다는 것도 특징입니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.title": {
      "ja": "基本情報",
      "text": "기본 정보",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.0.0": {
      "ja": "施設名",
      "text": "시설명",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.0.1": {
      "ja": "BiZCAFE（ビズカフェ）",
      "text": "BiZCAFE(비즈카페)",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.1.0": {
      "ja": "場所",
      "text": "장소",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.1.1": {
      "ja": "アカデミックコモンズ1階",
      "text": "아카데믹 커먼즈 1층",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.2.0": {
      "ja": "営業時間",
      "text": "영업시간",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.3.0": {
      "ja": "定休日",
      "text": "정기 휴일",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.3.1": {
      "ja": "土日祝日",
      "text": "토·일·공휴일",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.4.1": {
      "ja": "あり",
      "text": "있음",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.5.0": {
      "ja": "コンセント",
      "text": "콘센트",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.5.1": {
      "ja": "あり",
      "text": "있음",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.6.0": {
      "ja": "ドリンク",
      "text": "음료",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.6.1": {
      "ja": "学生は無料",
      "text": "학생은 무료",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.7.0": {
      "ja": "開設",
      "text": "개설",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.rows.7.1": {
      "ja": "2021年4月8日",
      "text": "2021년 4월 8일",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.0.note": {
      "ja": "営業時間は変更される場合があります。最新情報は店舗公式Instagramをご確認ください。",
      "text": "영업시간은 변경될 수 있습니다. 최신 정보는 매장 공식 Instagram에서 확인해 주세요.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.title": {
      "ja": "学生はドリンク無料！",
      "text": "학생은 음료 무료!",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.highlight": {
      "ja": "コーヒーや紅茶、ジュースなど、学生はいろいろなドリンクを無料で飲めます。",
      "text": "커피와 홍차, 주스 등 학생은 다양한 음료를 무료로 마실 수 있습니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.items.0.name": {
      "ja": "90分ごとに1杯",
      "text": "90분마다 1잔",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.items.0.text": {
      "ja": "90分おきに、無料でドリンクをもらえます。",
      "text": "90분마다 무료로 음료를 받을 수 있습니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.items.1.name": {
      "ja": "マイボトルがなくてもOK",
      "text": "마이 보틀이 없어도 OK",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.items.1.text": {
      "ja": "KSCオリジナルマイボトルを持っていなくても、お店のグラスで飲めます。",
      "text": "KSC 오리지널 마이 보틀이 없어도 매장 유리잔으로 마실 수 있습니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.items.2.name": {
      "ja": "100社以上の企業が協賛",
      "text": "100개 이상 기업이 협찬",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.items.2.text": {
      "ja": "企業の協賛によって、学生の無料ドリンクが実現しています。",
      "text": "기업의 협찬으로 학생 무료 음료가 실현되고 있습니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.more.title": {
      "ja": "ドリンクメニューを見る",
      "text": "음료 메뉴 보기",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.more.chips.0": {
      "ja": "アールグレイティー（ICE / HOT）",
      "text": "얼그레이 티(ICE / HOT)",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.more.chips.1": {
      "ja": "コーヒー（ICE / HOT）",
      "text": "커피(ICE / HOT)",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.more.chips.2": {
      "ja": "アップルジュース",
      "text": "사과 주스",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.more.chips.3": {
      "ja": "ピーチティー",
      "text": "피치 티",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.more.chips.4": {
      "ja": "グリーンティー",
      "text": "녹차",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.more.chips.5": {
      "ja": "アクエリアス",
      "text": "아쿠아리우스(스포츠음료)",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.more.chips.6": {
      "ja": "カルピス",
      "text": "칼피스",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.more.chips.7": {
      "ja": "プロテイン",
      "text": "프로틴",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.more.chips.8": {
      "ja": "カフェオレ（ICE）",
      "text": "카페오레(ICE)",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.more.chips.9": {
      "ja": "マンゴージュース",
      "text": "망고 주스",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.more.note": {
      "ja": "メニューはInstagram投稿時点のものです。現在の提供状況とは異なる場合があります。",
      "text": "메뉴는 Instagram 게시 시점의 것입니다. 현재 제공 상황과 다를 수 있습니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.1.note": {
      "ja": "90分間隔・協賛企業数は、店舗公式Instagramの投稿時点の情報です。",
      "text": "90분 간격·협찬 기업 수는 매장 공식 Instagram 게시 시점의 정보입니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.title": {
      "ja": "KSCオリジナルマイボトル",
      "text": "KSC 오리지널 마이 보틀",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.figure.caption": {
      "ja": "KSCオリジナルマイボトル",
      "text": "KSC 오리지널 마이 보틀",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.chips.0": {
      "ja": "Snow Peakとの共同開発",
      "text": "Snow Peak와 공동 개발",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.chips.2": {
      "ja": "2,250円（税込）",
      "text": "2,250엔(세금 포함)",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.chips.3": {
      "ja": "購入場所：生協ToyBox（第一厚生棟2階）",
      "text": "구입처: 생협 ToyBox(제1후생동 2층)",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.text.0": {
      "ja": "KSCオリジナルマイボトルは、神戸三田キャンパスの学生有志グループ「CAMP×US」とアウトドアブランド「Snow Peak」が共同開発したマイボトルです。容量は350mLで、持ち運びやすいサイズです。",
      "text": "KSC 오리지널 마이 보틀은 고베산다 캠퍼스의 학생 자원 그룹 'CAMP×US'와 아웃도어 브랜드 'Snow Peak'가 공동 개발한 마이 보틀입니다. 용량은 350mL로 들고 다니기 좋은 크기입니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.text.1": {
      "ja": "キャンパス内のペットボトル消費量の削減を目指す取り組みの一環として開発されました。BiZCAFEでは、オリジナルマイボトルを持参して無料ドリンクを楽しむこともできます（マイボトルがなくても、店舗のグラスで無料ドリンクを利用できます）。",
      "text": "캠퍼스 내 페트병 소비량 감축을 목표로 하는 활동의 일환으로 개발되었습니다. BiZCAFE에서는 오리지널 마이 보틀을 가져와 무료 음료를 즐길 수도 있습니다(마이 보틀이 없어도 매장 유리잔으로 무료 음료를 이용할 수 있습니다).",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.0.0": {
      "ja": "商品名",
      "text": "상품명",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.0.1": {
      "ja": "KSCオリジナルマイボトル",
      "text": "KSC 오리지널 마이 보틀",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.1.0": {
      "ja": "共同開発",
      "text": "공동 개발",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.2.0": {
      "ja": "容量",
      "text": "용량",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.3.0": {
      "ja": "価格",
      "text": "가격",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.3.1": {
      "ja": "2,250円（税込）",
      "text": "2,250엔(세금 포함)",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.4.0": {
      "ja": "購入対象",
      "text": "구입 대상",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.4.1": {
      "ja": "神戸三田キャンパスの学生",
      "text": "고베산다 캠퍼스 학생",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.5.0": {
      "ja": "購入場所",
      "text": "구입처",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.5.1": {
      "ja": "生協ToyBox（第一厚生棟2階）",
      "text": "생협 ToyBox(제1후생동 2층)",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.6.0": {
      "ja": "購入方法",
      "text": "구입 방법",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.6.1": {
      "ja": "学生証を提示し、所有者登録",
      "text": "학생증을 제시하고 소유자 등록",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.7.0": {
      "ja": "購入制限",
      "text": "구입 제한",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.7.1": {
      "ja": "1人1回のみ",
      "text": "1인 1회만",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.8.0": {
      "ja": "転売・譲渡",
      "text": "전매·양도",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.rows.8.1": {
      "ja": "禁止",
      "text": "금지",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.more.title": {
      "ja": "SDGsへの取り組み",
      "text": "SDGs를 위한 활동",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.more.text.0": {
      "ja": "関西学院大学が2025年に発表した情報によると、神戸三田キャンパスの学生の約7割がオリジナルマイボトルを所有しています。",
      "text": "관서학원대학이 2025년에 발표한 정보에 따르면, 고베산다 캠퍼스 학생의 약 70%가 오리지널 마이 보틀을 가지고 있습니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.more.text.1": {
      "ja": "大学は、マイボトルの利用促進によって、キャンパス内の使い捨てペットボトルの消費量を削減することを目指しています。取り組みを始めた2021年には、年間約10万本のペットボトル削減が目標として掲げられました。",
      "text": "대학은 마이 보틀 이용을 늘려 캠퍼스 내 일회용 페트병 소비량을 줄이는 것을 목표로 하고 있습니다. 활동을 시작한 2021년에는 연간 약 10만 개의 페트병 감축이 목표로 제시되었습니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.note.0": {
      "ja": "価格・購入場所・購入方法は店舗公式Instagramの掲載情報です。最新の販売状況は店舗・生協でご確認ください。",
      "text": "가격·구입처·구입 방법은 매장 공식 Instagram에 게재된 정보입니다. 최신 판매 상황은 매장·생협에서 확인해 주세요.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.2.note.1": {
      "ja": "店舗公式Instagramでは永久保証付きと案内されています。保証の条件は店舗でご確認ください。",
      "text": "매장 공식 Instagram에서는 영구 보증이 포함되어 있다고 안내하고 있습니다. 보증 조건은 매장에서 확인해 주세요.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.3.title": {
      "ja": "企業と交流できるキャリア支援カフェ",
      "text": "기업과 교류할 수 있는 커리어 지원 카페",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.3.text": {
      "ja": "BiZCAFEでは、学生が企業の社会人と交流し、仕事や業界について知ることのできるイベントが開催されています。",
      "text": "BiZCAFE에서는 학생이 기업에서 일하는 사회인과 교류하며 일과 업계에 대해 알 수 있는 이벤트가 열립니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.3.items.0.text": {
      "ja": "企業の社会人と交流できる座談会です。店舗公式Instagramでは、低学年から参加できる約1時間の座談会として紹介されています。実際に働く社会人の話を聞き、仕事や将来のキャリアについて考える機会になっています。",
      "text": "기업에서 일하는 사회인과 교류할 수 있는 좌담회입니다. 매장 공식 Instagram에서는 저학년부터 참가할 수 있는 약 1시간의 좌담회로 소개하고 있습니다. 실제로 일하는 사회인의 이야기를 듣고 일과 장래 커리어에 대해 생각해 보는 기회가 됩니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.3.items.1.text": {
      "ja": "2021年の開設時の大学の発表では、キャリアセンターと運営会社が共同で、学生に助言・支援したい企業や団体を募る「BIZCLASS」という取り組みが計画として紹介されていました。",
      "text": "2021년 개설 당시 대학 발표에서는 커리어센터와 운영 회사가 공동으로 학생에게 조언·지원하고 싶은 기업과 단체를 모집하는 'BIZCLASS'라는 활동이 계획으로 소개되었습니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.3.note": {
      "ja": "イベントの内容や日時は変更される場合があります。最新の募集情報は店舗公式Instagramをご確認ください。",
      "text": "이벤트 내용과 일시는 변경될 수 있습니다. 최신 모집 정보는 매장 공식 Instagram에서 확인해 주세요.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.4.title": {
      "ja": "公式情報・最新のお知らせ",
      "text": "공식 정보·최신 소식",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.4.text": {
      "ja": "営業時間やイベント情報、最新のお知らせは、店舗公式Instagramで確認できます。",
      "text": "영업시간과 이벤트 정보, 최신 소식은 매장 공식 Instagram에서 확인할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.4.buttons.0.label": {
      "ja": "公式Instagramを見る",
      "text": "공식 Instagram 보기",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.4.buttons.1.label": {
      "ja": "BiZCAFE店舗情報を見る",
      "text": "BiZCAFE 매장 정보 보기",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.4.buttons.2.label": {
      "ja": "マイボトル開発の取り組みを見る",
      "text": "마이 보틀 개발 활동 보기",
      "status": "provisional"
    },
    "facilities.bizcafe.sections.4.buttons.3.label": {
      "ja": "マイボトルの取り組みを詳しく見る",
      "text": "마이 보틀 활동 자세히 보기",
      "status": "provisional"
    },
    "facilities.bizcafe.source": {
      "ja": "関西学院大学公式サイト（2021年2月・2025年12月の記事）、BiZCAFE神戸三田店 公式Instagram",
      "text": "관서학원대학 공식 사이트(2021년 2월·2025년 12월 기사), BiZCAFE 고베산다점 공식 Instagram",
      "status": "provisional"
    },
    "facilities.washitsu.name": {
      "ja": "和室「新月の間」",
      "text": "다다미방 '신게쓰노마'",
      "status": "provisional"
    },
    "facilities.washitsu.lead": {
      "ja": "アカデミックコモンズにある、床の間と日本庭園のある和室",
      "text": "아카데믹 커먼스에 있는, 도코노마와 일본 정원이 있는 다다미방",
      "status": "provisional"
    },
    "facilities.washitsu.overview.0": {
      "ja": "アカデミックコモンズには、「新月の間」と呼ばれる16畳の本格的な和室があります。床の間があり、日本庭園も備えています。",
      "text": "아카데믹 커먼스에는 '신게쓰노마'라고 불리는 16첩 규모의 정통 다다미방이 있습니다. 도코노마가 있고 일본 정원도 갖추고 있습니다.",
      "status": "provisional"
    },
    "facilities.washitsu.overview.1": {
      "ja": "お茶会や生け花ができる設備がそろっていて、学生どうしが交流する場として使われています。",
      "text": "다도회와 꽃꽂이를 할 수 있는 설비가 갖춰져 있어, 학생들이 교류하는 장소로 쓰이고 있습니다.",
      "status": "provisional"
    },
    "facilities.washitsu.overview.2": {
      "ja": "ふだんは予約なしで使えて、課題をするなど、学生が自由に利用しています。土足厳禁なので、靴を脱いで上がりましょう。",
      "text": "평소에는 예약 없이 이용할 수 있어, 과제를 하는 등 학생들이 자유롭게 사용하고 있습니다. 신발을 신고 들어갈 수 없으니 신발을 벗고 올라가세요.",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.title": {
      "ja": "基本情報",
      "text": "기본 정보",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.0.0": {
      "ja": "名称",
      "text": "명칭",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.0.1": {
      "ja": "新月の間",
      "text": "신게쓰노마",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.1.0": {
      "ja": "場所",
      "text": "장소",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.1.1": {
      "ja": "アカデミックコモンズ1階",
      "text": "아카데믹 커먼즈 1층",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.2.0": {
      "ja": "広さ",
      "text": "넓이",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.2.1": {
      "ja": "16畳",
      "text": "16첩",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.3.0": {
      "ja": "設備",
      "text": "설비",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.3.1": {
      "ja": "床の間・日本庭園",
      "text": "도코노마·일본 정원",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.4.0": {
      "ja": "使われ方",
      "text": "이용 방식",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.4.1": {
      "ja": "課題・お茶会・生け花・学生の交流",
      "text": "과제·다도회·꽃꽂이·학생 교류",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.5.0": {
      "ja": "予約",
      "text": "예약",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.5.1": {
      "ja": "不要（自由に利用できます）",
      "text": "불필요(자유롭게 이용 가능)",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.6.0": {
      "ja": "土足",
      "text": "신발",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.rows.6.1": {
      "ja": "禁止（靴を脱いで利用）",
      "text": "금지(신발을 벗고 이용)",
      "status": "provisional"
    },
    "facilities.washitsu.sections.0.note": {
      "ja": "広さや設備は、2014年に更新された学院史編纂室の「関学事典」の記述です。利用のしかたは在学生への確認によるもので、変わる場合があります。",
      "text": "넓이와 설비는 2014년에 갱신된 학원사 편찬실 '간가쿠 사전'의 기술입니다. 이용 방법은 재학생에게 확인한 내용이며 바뀔 수 있습니다.",
      "status": "provisional"
    },
    "facilities.washitsu.sections.1.title": {
      "ja": "こんな活動も",
      "text": "이런 활동도",
      "status": "provisional"
    },
    "facilities.washitsu.sections.1.items.0.name": {
      "ja": "七夕お茶会",
      "text": "칠석 다도회",
      "status": "provisional"
    },
    "facilities.washitsu.sections.1.items.0.text": {
      "ja": "グローバルLinkフィールドの活動として、新月の間で留学生と一緒に茶道を体験する文化交流が開かれたことが、アカデミックコモンズの活動紹介で紹介されています。",
      "text": "아카데믹 커먼스 활동 소개에는 글로벌 링크 필드 활동으로 신게쓰노마에서 유학생과 함께 다도를 체험하는 문화 교류가 열렸다고 소개되어 있습니다.",
      "status": "provisional"
    },
    "facilities.washitsu.sections.2.title": {
      "ja": "公式情報",
      "text": "공식 정보",
      "status": "provisional"
    },
    "facilities.washitsu.sections.2.buttons.0.label": {
      "ja": "関学事典「アカデミックコモンズ」を見る",
      "text": "간가쿠 사전 '아카데믹 커먼스' 보기",
      "status": "provisional"
    },
    "facilities.washitsu.sections.2.buttons.1.label": {
      "ja": "アカデミックコモンズの活動紹介を見る",
      "text": "아카데믹 커먼스 활동 소개 보기",
      "status": "provisional"
    },
    "facilities.washitsu.source": {
      "ja": "関西学院 学院史編纂室「関学事典」（2014年9月更新）、関西学院大学 神戸三田キャンパス アカデミックコモンズ公式ページ（2026年11月確認）",
      "text": "간세이가쿠인 학원사 편찬실 '간가쿠 사전'(2014년 9월 갱신), 간세이가쿠인대학 고베산다 캠퍼스 아카데믹 커먼스 공식 페이지(2026년 11월 확인)",
      "status": "provisional"
    },
    "facilities.gym.name": {
      "ja": "体育館",
      "text": "체육관",
      "status": "provisional"
    },
    "facilities.gym.overview.0": {
      "ja": "神戸三田キャンパスの体育館は、体育の授業や体育会・サークル活動などに利用されている施設です。",
      "text": "고베산다 캠퍼스 체육관은 체육 수업과 체육회·동아리 활동 등에 이용되는 시설입니다.",
      "status": "provisional"
    },
    "facilities.gym.overview.1": {
      "ja": "スポーツ活動だけでなく、学生同士の交流イベントやオープンキャンパスなど、さまざまな行事にも活用されています。",
      "text": "스포츠 활동뿐 아니라 학생 간 교류 행사와 오픈 캠퍼스 등 다양한 행사에도 활용됩니다.",
      "status": "provisional"
    },
    "facilities.gym.sections.0.title": {
      "ja": "イベントでの利用",
      "text": "행사에서의 이용",
      "status": "provisional"
    },
    "facilities.gym.sections.0.items.0.name": {
      "ja": "オープンキャンパス",
      "text": "오픈 캠퍼스",
      "status": "provisional"
    },
    "facilities.gym.sections.0.items.0.text": {
      "ja": "2022年8月11日のオープンキャンパスでは、体育館で応援団総部による課外活動紹介が行われました。応援歌「新月旗のもとに」を披露し、高校生にエールを送りました。",
      "text": "2022년 8월 11일 오픈 캠퍼스에서는 체육관에서 응원단 총부의 과외 활동 소개가 열렸습니다. 응원가 '신게쓰키노 모토니'를 선보이며 고등학생들에게 응원을 보냈습니다.",
      "status": "provisional"
    },
    "facilities.gym.sections.0.items.1.name": {
      "ja": "学生スポーツ大会",
      "text": "학생 스포츠 대회",
      "status": "provisional"
    },
    "facilities.gym.sections.0.items.1.text": {
      "ja": "学部・学科の学生が主体となってスポーツ大会を企画・運営する取り組みも行われています。",
      "text": "학부·학과 학생들이 주체가 되어 스포츠 대회를 기획·운영하는 활동도 이루어지고 있습니다.",
      "status": "provisional"
    },
    "facilities.gym.sections.0.items.2.name": {
      "ja": "プロジェクションマッピング",
      "text": "프로젝션 매핑",
      "status": "provisional"
    },
    "facilities.gym.sections.0.items.2.text": {
      "ja": "2026年には、学生団体「SHADECOR」が体育館を舞台にしたプロジェクションマッピングを実施しました。",
      "text": "2026년에는 학생 단체 'SHADECOR'가 체육관을 무대로 프로젝션 매핑을 선보였습니다.",
      "status": "provisional"
    },
    "facilities.gym.sections.0.items.3.name": {
      "ja": "大学祭「新月祭」",
      "text": "대학 축제 ‘신게쓰 축제(新月祭)’",
      "status": "provisional"
    },
    "facilities.gym.sections.0.items.3.text": {
      "ja": "2026年の新月祭では、ドッジボール大会や縁日などの会場として体育館が公式プログラムに掲載されました。",
      "text": "2026년 신게쓰 축제에서는 피구 대회와 축제 노점 등의 장소로 체육관이 공식 프로그램에 게재되었습니다.",
      "status": "provisional"
    },
    "facilities.gym.sections.0.links.0.label": {
      "ja": "新月祭2026 KSC一般企画（公式）",
      "text": "신게쓰 축제 2026 KSC 일반 기획(공식)",
      "status": "provisional"
    },
    "facilities.office8.name": {
      "ja": "事務室（Ⅷ号館）",
      "text": "사무실(Ⅷ호관)",
      "status": "provisional"
    },
    "facilities.powderRoom.name": {
      "ja": "パウダールーム（Ⅷ号館）",
      "text": "파우더룸(Ⅷ호관)",
      "status": "provisional"
    },
    "facilities.cafeteria.name": {
      "ja": "食堂",
      "text": "식당",
      "status": "provisional"
    },
    "facilities.building1.name": {
      "ja": "Ⅰ号館",
      "text": "Ⅰ호관",
      "status": "provisional"
    },
    "facilities.building1.overview.0": {
      "ja": "Ⅰ号館は、主に総合政策学部・総合政策研究科に関連する施設がある校舎です。",
      "text": "Ⅰ호관은 주로 종합정책학부·종합정책연구과와 관련된 시설이 있는 건물입니다.",
      "status": "provisional"
    },
    "facilities.building1.overview.1": {
      "ja": "館内には講義室があり、総合政策学部や建築学部の学生などが授業で利用しています。また、総合政策学部・建築学部の運営に関する事務室も設置されています。",
      "text": "건물 안에는 강의실이 있어 종합정책학부와 건축학부 학생 등이 수업에 이용하고 있습니다. 또한 종합정책학부·건축학부 운영에 관한 사무실도 있습니다.",
      "status": "provisional"
    },
    "facilities.building1.overview.2": {
      "ja": "エントランスホールには、総合政策学部の理念を表す「仕えられるためにではなく、仕えるために」という言葉が刻まれています。",
      "text": "입구 홀에는 종합정책학부의 이념을 나타내는 ‘섬김을 받기 위해서가 아니라 섬기기 위해’라는 말이 새겨져 있습니다.",
      "status": "provisional"
    },
    "facilities.building1.sections.0.title": {
      "ja": "主な設備・施設",
      "text": "주요 설비·시설",
      "status": "provisional"
    },
    "facilities.building1.sections.0.items.0.name": {
      "ja": "講義室",
      "text": "강의실",
      "status": "provisional"
    },
    "facilities.building1.sections.0.items.1.name": {
      "ja": "学部事務室",
      "text": "학부 사무실",
      "status": "provisional"
    },
    "facilities.building1.sections.0.items.2.name": {
      "ja": "ATM（三井住友銀行・ゆうちょ銀行／1階）",
      "text": "ATM(미쓰이스미토모 은행·유초 은행/1층)",
      "status": "provisional"
    },
    "facilities.building1.sections.1.title": {
      "ja": "ATM利用時間",
      "text": "ATM 이용 시간",
      "status": "provisional"
    },
    "facilities.building1.sections.1.rows.0.0": {
      "ja": "平日",
      "text": "평일",
      "status": "provisional"
    },
    "facilities.building1.sections.1.rows.1.0": {
      "ja": "土曜",
      "text": "토요일",
      "status": "provisional"
    },
    "facilities.building1.sections.1.rows.2.0": {
      "ja": "日曜・祝日",
      "text": "일요일·공휴일",
      "status": "provisional"
    },
    "facilities.building1.sections.1.rows.2.1": {
      "ja": "利用不可",
      "text": "이용 불가",
      "status": "provisional"
    },
    "facilities.building2.name": {
      "ja": "Ⅱ号館",
      "text": "Ⅱ호관",
      "status": "provisional"
    },
    "facilities.building2.overview.0": {
      "ja": "Ⅱ号館は、主に総合政策学部や建築学部の学生が利用する講義棟です。館内には複数の講義室があり、授業や演習、講演会などが行われています。",
      "text": "Ⅱ호관은 주로 종합정책학부와 건축학부 학생이 이용하는 강의동입니다. 건물 안에는 여러 강의실이 있어 수업, 연습, 강연회 등이 열립니다.",
      "status": "provisional"
    },
    "facilities.building2.overview.1": {
      "ja": "また、総合政策学部の学生や大学院生が研究成果を発表する「リサーチ・フェア」の開催会場としても利用されています。リサーチ・フェアでは、学生が日頃の研究成果を発表し、参加者との議論や意見交換を通じて学びを深めています。",
      "text": "또한 종합정책학부 학생과 대학원생이 연구 성과를 발표하는 ‘리서치 페어’의 개최 장소로도 이용됩니다. 리서치 페어에서는 학생들이 평소의 연구 성과를 발표하고, 참가자와의 토론과 의견 교환을 통해 배움을 깊게 합니다.",
      "status": "provisional"
    },
    "facilities.building2.overview.2": {
      "ja": "2階には、学生のボランティア活動を支援する「ヒューマン・サービス支援室」が設置されています。",
      "text": "2층에는 학생의 봉사 활동을 지원하는 ‘휴먼 서비스 지원실’이 있습니다.",
      "status": "provisional"
    },
    "facilities.building2.sections.0.title": {
      "ja": "主な施設・設備",
      "text": "주요 시설·설비",
      "status": "provisional"
    },
    "facilities.building2.sections.0.items.0.name": {
      "ja": "講義室（1〜3階）",
      "text": "강의실(1~3층)",
      "status": "provisional"
    },
    "facilities.building2.sections.0.items.0.text": {
      "ja": "授業や演習、学部講演会などが行われる教室。",
      "text": "수업, 연습, 학부 강연회 등이 열리는 교실.",
      "status": "provisional"
    },
    "facilities.building2.sections.0.items.1.name": {
      "ja": "ヒューマン・サービス支援室（2階210教室）",
      "text": "휴먼 서비스 지원실(2층 210교실)",
      "status": "provisional"
    },
    "facilities.building2.sections.0.items.1.text": {
      "ja": "ボランティア活動に関する情報提供や相談を行う施設。",
      "text": "봉사 활동에 관한 정보 제공과 상담을 하는 시설.",
      "status": "provisional"
    },
    "facilities.building2.sections.0.items.1.note": {
      "ja": "開室：平日 10:30〜17:00（大学の授業実施期間中のみ開室）",
      "text": "운영: 평일 10:30~17:00(대학 수업 기간 중에만 운영)",
      "status": "provisional"
    },
    "facilities.building2.sections.1.title": {
      "ja": "主なイベント",
      "text": "주요 행사",
      "status": "provisional"
    },
    "facilities.building2.sections.1.items.0.name": {
      "ja": "リサーチ・フェア",
      "text": "리서치 페어",
      "status": "provisional"
    },
    "facilities.building2.sections.1.items.0.text": {
      "ja": "総合政策学部・総合政策研究科の学生などが、日頃の研究成果を発表するイベント。Ⅱ号館で開催された実績があります。",
      "text": "종합정책학부·종합정책연구과 학생 등이 평소의 연구 성과를 발표하는 행사. Ⅱ호관에서 개최된 적이 있습니다.",
      "status": "provisional"
    },
    "facilities.building2.sections.1.items.0.videos.0.label": {
      "ja": "リサーチ・フェアの動画を見る",
      "text": "리서치 페어 동영상 보기",
      "status": "provisional"
    },
    "facilities.building2.sections.1.items.0.links.0.label": {
      "ja": "2024年度 リサーチ・フェアの記事",
      "text": "2024년도 리서치 페어 기사",
      "status": "provisional"
    },
    "facilities.building3.name": {
      "ja": "Ⅲ号館",
      "text": "Ⅲ호관",
      "status": "provisional"
    },
    "facilities.building3.overview.0": {
      "ja": "Ⅲ号館は、総合政策学部と建築学部の学生が学習・研究活動に利用する建物です。",
      "text": "Ⅲ호관은 종합정책학부와 건축학부 학생이 학습·연구 활동에 이용하는 건물입니다.",
      "status": "provisional"
    },
    "facilities.building3.overview.1": {
      "ja": "総合政策学部のメディア情報分野に関連するゼミ・演習活動のほか、建築学部の設計・デザインに関する学習や研究にも利用されています。",
      "text": "종합정책학부의 미디어정보 분야와 관련된 세미나·연습 활동 외에, 건축학부의 설계·디자인에 관한 학습과 연구에도 이용되고 있습니다.",
      "status": "provisional"
    },
    "facilities.building3.overview.2": {
      "ja": "1階のデザインスタジオでは、建築学部の学生が設計演習や建築模型の制作などに取り組んでいます。また、学生が制作した建築作品の展示や、卒業設計・論文の発表会なども行われています。",
      "text": "1층 디자인 스튜디오에서는 건축학부 학생들이 설계 연습과 건축 모형 제작 등에 힘쓰고 있습니다. 또한 학생이 제작한 건축 작품 전시와 졸업 설계·논문 발표회 등도 열립니다.",
      "status": "provisional"
    },
    "facilities.building3.overview.3": {
      "ja": "さらに、1階には建築関連の専門書約4,500冊を収蔵する「大島文庫」が設置されています。",
      "text": "또한 1층에는 건축 관련 전문서 약 4,500권을 소장한 ‘오시마 문고’가 있습니다.",
      "status": "provisional"
    },
    "facilities.building3.sections.0.title": {
      "ja": "主な施設・設備",
      "text": "주요 시설·설비",
      "status": "provisional"
    },
    "facilities.building3.sections.0.items.0.name": {
      "ja": "デザインスタジオ（1階）",
      "text": "디자인 스튜디오(1층)",
      "status": "provisional"
    },
    "facilities.building3.sections.0.items.0.text": {
      "ja": "建築設計や模型制作などを行う学習・制作スペース。",
      "text": "건축 설계와 모형 제작 등을 하는 학습·제작 공간.",
      "status": "provisional"
    },
    "facilities.building3.sections.0.items.1.name": {
      "ja": "大島文庫（1階）",
      "text": "오시마 문고(1층)",
      "status": "provisional"
    },
    "facilities.building3.sections.0.items.1.text": {
      "ja": "建築関連の専門書約4,500冊を収蔵する図書室。",
      "text": "건축 관련 전문서 약 4,500권을 소장한 도서실.",
      "status": "provisional"
    },
    "facilities.building3.sections.0.items.2.name": {
      "ja": "ゼミ・演習室",
      "text": "세미나·연습실",
      "status": "provisional"
    },
    "facilities.building3.sections.0.items.2.text": {
      "ja": "総合政策学部のメディア情報分野などに関連する学習・研究活動。",
      "text": "종합정책학부의 미디어정보 분야 등과 관련된 학습·연구 활동.",
      "status": "provisional"
    },
    "facilities.building3.sections.0.items.3.name": {
      "ja": "ラウンジ・展示スペース（2階など）",
      "text": "라운지·전시 공간(2층 등)",
      "status": "provisional"
    },
    "facilities.building3.sections.0.items.3.text": {
      "ja": "学生の建築作品や卒業設計などの展示に利用。",
      "text": "학생의 건축 작품과 졸업 설계 등의 전시에 이용.",
      "status": "provisional"
    },
    "facilities.building3.sections.0.items.4.name": {
      "ja": "研究室",
      "text": "연구실",
      "status": "provisional"
    },
    "facilities.building3.sections.0.items.4.text": {
      "ja": "建築設計、都市計画などに関する専門的な研究活動。",
      "text": "건축 설계, 도시 계획 등에 관한 전문적인 연구 활동.",
      "status": "provisional"
    },
    "facilities.building4.name": {
      "ja": "Ⅳ号館",
      "text": "Ⅳ호관",
      "status": "provisional"
    },
    "facilities.building4.overview.0": {
      "ja": "Ⅳ号館は、主に理学部・工学部・生命環境学部の学生が実験や研究に利用する建物です。",
      "text": "Ⅳ호관은 주로 이학부·공학부·생명환경학부 학생이 실험과 연구에 이용하는 건물입니다.",
      "status": "provisional"
    },
    "facilities.building4.overview.1": {
      "ja": "館内には化学学生実験室や情報科学実験室、各分野の研究室が設けられています。化学・物理学・情報工学・数理科学・生物科学など、幅広い分野の研究が行われています。",
      "text": "건물 안에는 화학 학생 실험실, 정보과학 실험실, 각 분야의 연구실이 있습니다. 화학·물리학·정보공학·수리과학·생물과학 등 폭넓은 분야의 연구가 이루어지고 있습니다.",
      "status": "provisional"
    },
    "facilities.building4.overview.2": {
      "ja": "また、VR技術を活用した研究や、宇宙開発に関する研究、微生物の研究など、多様な研究活動が行われていることも特徴です。",
      "text": "또한 VR 기술을 활용한 연구, 우주 개발에 관한 연구, 미생물 연구 등 다양한 연구 활동이 이루어지는 것도 특징입니다.",
      "status": "provisional"
    },
    "facilities.building4.sections.0.title": {
      "ja": "主な施設・設備",
      "text": "주요 시설·설비",
      "status": "provisional"
    },
    "facilities.building4.sections.0.items.0.name": {
      "ja": "化学学生実験室（1階）",
      "text": "화학 학생 실험실(1층)",
      "status": "provisional"
    },
    "facilities.building4.sections.0.items.0.text": {
      "ja": "化学科の学生が化学実験を行う施設。",
      "text": "화학과 학생이 화학 실험을 하는 시설.",
      "status": "provisional"
    },
    "facilities.building4.sections.0.items.1.name": {
      "ja": "情報科学実験室（2〜4階）",
      "text": "정보과학 실험실(2~4층)",
      "status": "provisional"
    },
    "facilities.building4.sections.0.items.1.text": {
      "ja": "アルゴリズム、コンピュータネットワーク、VR技術などに関連する研究施設。",
      "text": "알고리즘, 컴퓨터 네트워크, VR 기술 등과 관련된 연구 시설.",
      "status": "provisional"
    },
    "facilities.building4.sections.0.items.2.name": {
      "ja": "研究室（各階）",
      "text": "연구실(각 층)",
      "status": "provisional"
    },
    "facilities.building4.sections.0.items.2.text": {
      "ja": "化学、物理学、数理科学、情報工学、航空宇宙工学、生物科学などの研究活動。",
      "text": "화학, 물리학, 수리과학, 정보공학, 항공우주공학, 생물과학 등의 연구 활동.",
      "status": "provisional"
    },
    "facilities.building4.sections.0.items.3.name": {
      "ja": "LLL教室・VC演習室",
      "text": "LLL 교실·VC 연습실",
      "status": "provisional"
    },
    "facilities.building4.sections.0.items.3.text": {
      "ja": "情報機器を備えた教育・演習用の教室。",
      "text": "정보 기기를 갖춘 교육·연습용 교실.",
      "status": "provisional"
    },
    "facilities.building5.name": {
      "ja": "Ⅴ号館",
      "text": "Ⅴ호관",
      "status": "provisional"
    },
    "facilities.building5.overview.0": {
      "ja": "Ⅴ号館は、理学部・工学部・生命環境学部に関連する研究室や実験施設がある建物です。",
      "text": "Ⅴ호관은 이학부·공학부·생명환경학부와 관련된 연구실과 실험 시설이 있는 건물입니다.",
      "status": "provisional"
    },
    "facilities.building5.overview.1": {
      "ja": "館内では、数理科学や情報工学、生命医科学などの研究が行われています。VR・AI・データサイエンスを扱う研究室のほか、数学や生命医科学に関する研究室も設けられています。",
      "text": "건물 안에서는 수리과학, 정보공학, 생명의과학 등의 연구가 이루어지고 있습니다. VR·AI·데이터 사이언스를 다루는 연구실 외에 수학과 생명의과학에 관한 연구실도 있습니다.",
      "status": "provisional"
    },
    "facilities.building5.overview.2": {
      "ja": "また、1階には機械工作用の機器や3Dプリンターを備えた工作室があり、ものづくりに関連する設備も整っています。",
      "text": "또한 1층에는 기계 공작용 기기와 3D 프린터를 갖춘 공작실이 있어 제작과 관련된 설비도 갖추고 있습니다.",
      "status": "provisional"
    },
    "facilities.building5.sections.0.title": {
      "ja": "主な施設・設備",
      "text": "주요 시설·설비",
      "status": "provisional"
    },
    "facilities.building5.sections.0.items.0.name": {
      "ja": "工作室（1階）",
      "text": "공작실(1층)",
      "status": "provisional"
    },
    "facilities.building5.sections.0.items.0.text": {
      "ja": "機械工作用の機器や3Dプリンターを備えた施設。",
      "text": "기계 공작용 기기와 3D 프린터를 갖춘 시설.",
      "status": "provisional"
    },
    "facilities.building5.sections.0.items.1.name": {
      "ja": "情報・機械系実験準備室（1階）",
      "text": "정보·기계계 실험 준비실(1층)",
      "status": "provisional"
    },
    "facilities.building5.sections.0.items.1.text": {
      "ja": "情報・機械系の実験・実習に関連する準備室。",
      "text": "정보·기계계 실험·실습과 관련된 준비실.",
      "status": "provisional"
    },
    "facilities.building5.sections.0.items.2.name": {
      "ja": "システム実験室3（2階）",
      "text": "시스템 실험실 3(2층)",
      "status": "provisional"
    },
    "facilities.building5.sections.0.items.2.text": {
      "ja": "VR・AI・データサイエンスなどの研究に関連する施設。",
      "text": "VR·AI·데이터 사이언스 등의 연구와 관련된 시설.",
      "status": "provisional"
    },
    "facilities.building5.sections.0.items.3.name": {
      "ja": "研究室（2・3階など）",
      "text": "연구실(2·3층 등)",
      "status": "provisional"
    },
    "facilities.building5.sections.0.items.3.text": {
      "ja": "数理科学、情報工学、生命医科学などの専門的な研究が行われる施設。",
      "text": "수리과학, 정보공학, 생명의과학 등의 전문적인 연구가 이루어지는 시설.",
      "status": "provisional"
    },
    "facilities.building7.name": {
      "ja": "Ⅶ号館",
      "text": "Ⅶ호관",
      "status": "provisional"
    },
    "facilities.building7.overview.0": {
      "ja": "Ⅶ号館は、主に工学部・生命環境学部の学生が実験や研究に利用する建物です。",
      "text": "Ⅶ호관은 주로 공학부·생명환경학부 학생이 실험과 연구에 이용하는 건물입니다.",
      "status": "provisional"
    },
    "facilities.building7.overview.1": {
      "ja": "館内には、物質・電気系学生実験室、環境応用化学学生実験室、生命系学生実験室などが設けられています。",
      "text": "건물 안에는 물질·전기계 학생 실험실, 환경응용화학 학생 실험실, 생명계 학생 실험실 등이 있습니다.",
      "status": "provisional"
    },
    "facilities.building7.overview.2": {
      "ja": "物質工学、電気電子工学、環境応用化学、生命科学など、幅広い分野の研究が行われており、次世代電池の開発やDNA・タンパク質の解析、生命現象の解明などに取り組んでいます。",
      "text": "물질공학, 전기전자공학, 환경응용화학, 생명과학 등 폭넓은 분야의 연구가 이루어지고 있으며, 차세대 전지 개발, DNA·단백질 분석, 생명 현상 규명 등에 힘쓰고 있습니다.",
      "status": "provisional"
    },
    "facilities.building7.overview.3": {
      "ja": "また、館内には高度な研究機器を備えた共用施設や、ファミリーマートもあります。",
      "text": "또한 건물 안에는 고도의 연구 기기를 갖춘 공용 시설과 패밀리마트도 있습니다.",
      "status": "provisional"
    },
    "facilities.building7.sections.0.title": {
      "ja": "主な施設・設備",
      "text": "주요 시설·설비",
      "status": "provisional"
    },
    "facilities.building7.sections.0.items.0.name": {
      "ja": "物質・電気系学生実験室1（2階）",
      "text": "물질·전기계 학생 실험실 1(2층)",
      "status": "provisional"
    },
    "facilities.building7.sections.0.items.0.text": {
      "ja": "物理学や電気電子分野の実験を行う施設。",
      "text": "물리학과 전기전자 분야의 실험을 하는 시설.",
      "status": "provisional"
    },
    "facilities.building7.sections.0.items.1.name": {
      "ja": "環境応用化学学生実験室（3階）",
      "text": "환경응용화학 학생 실험실(3층)",
      "status": "provisional"
    },
    "facilities.building7.sections.0.items.1.text": {
      "ja": "環境応用化学科の学生が化学実験を行う施設。",
      "text": "환경응용화학과 학생이 화학 실험을 하는 시설.",
      "status": "provisional"
    },
    "facilities.building7.sections.0.items.2.name": {
      "ja": "生命系学生実験室2（4階）",
      "text": "생명계 학생 실험실 2(4층)",
      "status": "provisional"
    },
    "facilities.building7.sections.0.items.2.text": {
      "ja": "生命医科学に関する実験を行う施設。",
      "text": "생명의과학에 관한 실험을 하는 시설.",
      "status": "provisional"
    },
    "facilities.building7.sections.0.items.3.name": {
      "ja": "研究室（各階）",
      "text": "연구실(각 층)",
      "status": "provisional"
    },
    "facilities.building7.sections.0.items.3.text": {
      "ja": "物質工学、電気電子工学、環境応用化学、生物科学、生命医科学などの研究施設。",
      "text": "물질공학, 전기전자공학, 환경응용화학, 생물과학, 생명의과학 등의 연구 시설.",
      "status": "provisional"
    },
    "facilities.building7.sections.0.items.4.name": {
      "ja": "研究機器共用室",
      "text": "연구 기기 공용실",
      "status": "provisional"
    },
    "facilities.building7.sections.0.items.4.text": {
      "ja": "顕微鏡やDNA解析装置など、専門的な研究機器を備えた施設。",
      "text": "현미경과 DNA 분석 장치 등 전문적인 연구 기기를 갖춘 시설.",
      "status": "provisional"
    },
    "facilities.building7.sections.0.items.5.name": {
      "ja": "ファミリーマート",
      "text": "패밀리마트",
      "status": "provisional"
    },
    "facilities.building7.sections.0.items.5.text": {
      "ja": "館内に設置されたコンビニエンスストア。",
      "text": "건물 안에 있는 편의점.",
      "status": "provisional"
    },
    "facilities.building8.name": {
      "ja": "Ⅷ号館",
      "text": "Ⅷ호관",
      "status": "provisional"
    },
    "facilities.building8.overview.0": {
      "ja": "Ⅷ号館は、2022年に完成した地上4階建ての校舎です。",
      "text": "Ⅷ호관은 2022년에 완공된 지상 4층 건물입니다.",
      "status": "provisional"
    },
    "facilities.building8.overview.1": {
      "ja": "2階から4階には合計17室の講義室があり、日常的な授業や説明会などに利用されています。",
      "text": "2층부터 4층까지 총 17개의 강의실이 있어 평소 수업과 설명회 등에 이용되고 있습니다.",
      "status": "provisional"
    },
    "facilities.building8.overview.2": {
      "ja": "1階には、学生の各種手続きを支援する神戸三田キャンパス事務室や、フィッティングルームを備えたパウダールームが設置されています。",
      "text": "1층에는 학생의 각종 수속을 지원하는 고베 산다 캠퍼스 사무실과 피팅룸을 갖춘 파우더룸이 있습니다.",
      "status": "provisional"
    },
    "facilities.building8.overview.3": {
      "ja": "また、屋上には口径40cmの反射望遠鏡を備えた天体観測ドームがあり、理学部の宇宙研究に関連する施設として整備されています。",
      "text": "또한 옥상에는 구경 40cm 반사 망원경을 갖춘 천체 관측 돔이 있어, 이학부의 우주 연구와 관련된 시설로 정비되어 있습니다.",
      "status": "provisional"
    },
    "facilities.building8.sections.0.title": {
      "ja": "主な施設・設備",
      "text": "주요 시설·설비",
      "status": "provisional"
    },
    "facilities.building8.sections.0.items.0.name": {
      "ja": "神戸三田キャンパス事務室（1階）",
      "text": "고베 산다 캠퍼스 사무실(1층)",
      "status": "provisional"
    },
    "facilities.building8.sections.0.items.0.text": {
      "ja": "大学生活に関する各種手続きや相談などに対応する窓口。",
      "text": "대학 생활에 관한 각종 수속과 상담 등에 대응하는 창구.",
      "status": "provisional"
    },
    "facilities.building8.sections.0.items.1.name": {
      "ja": "講義室（2〜4階）",
      "text": "강의실(2~4층)",
      "status": "provisional"
    },
    "facilities.building8.sections.0.items.1.text": {
      "ja": "合計17室の講義室があり、授業や説明会などに利用される。",
      "text": "총 17개의 강의실이 있으며 수업과 설명회 등에 이용된다.",
      "status": "provisional"
    },
    "facilities.building8.sections.0.items.2.name": {
      "ja": "パウダールーム（1階）",
      "text": "파우더룸(1층)",
      "status": "provisional"
    },
    "facilities.building8.sections.0.items.2.text": {
      "ja": "フィッティングルームを備えた学生向け施設。",
      "text": "피팅룸을 갖춘 학생용 시설.",
      "status": "provisional"
    },
    "facilities.building8.sections.0.items.3.name": {
      "ja": "天体観測ドーム（屋上）",
      "text": "천체 관측 돔(옥상)",
      "status": "provisional"
    },
    "facilities.building8.sections.0.items.3.text": {
      "ja": "口径40cmの反射望遠鏡を備えた、天体観測・研究のための施設。",
      "text": "구경 40cm 반사 망원경을 갖춘 천체 관측·연구를 위한 시설.",
      "status": "provisional"
    },
    "facilities.building8.sections.0.items.4.name": {
      "ja": "証明書発行機",
      "text": "증명서 발행기",
      "status": "provisional"
    },
    "facilities.building8.sections.0.items.4.text": {
      "ja": "各種証明書の発行や申請に関連する設備。",
      "text": "각종 증명서 발행과 신청에 관련된 설비.",
      "status": "provisional"
    },
    "facilities.building8.sections.1.title": {
      "ja": "神戸三田キャンパス事務室",
      "text": "고베 산다 캠퍼스 사무실",
      "status": "provisional"
    },
    "facilities.building8.sections.1.text.0": {
      "ja": "Ⅷ号館1階にある、大学生活に関するさまざまな手続きや相談に対応する窓口です。",
      "text": "Ⅷ호관 1층에 있는, 대학 생활에 관한 다양한 수속과 상담에 대응하는 창구입니다.",
      "status": "provisional"
    },
    "facilities.building8.sections.1.text.1": {
      "ja": "履修登録や授業、試験、奨学金などの相談に加え、学部行事やキャンパス施設に関する問い合わせにも対応しています。",
      "text": "수강 신청, 수업, 시험, 장학금 등의 상담에 더해 학부 행사와 캠퍼스 시설에 관한 문의에도 대응합니다.",
      "status": "provisional"
    },
    "facilities.building8.sections.1.rows.0.0": {
      "ja": "平日",
      "text": "평일",
      "status": "provisional"
    },
    "facilities.building8.sections.1.rows.1.0": {
      "ja": "土曜・日曜・祝日",
      "text": "토요일·일요일·공휴일",
      "status": "provisional"
    },
    "facilities.building8.sections.1.rows.1.1": {
      "ja": "原則閉室",
      "text": "원칙적으로 휴무",
      "status": "provisional"
    },
    "facilities.building8.sections.1.note": {
      "ja": "大学の休業期間中などは変更される場合があります。",
      "text": "대학 휴업 기간 중 등에는 변경될 수 있습니다.",
      "status": "provisional"
    },
    "facilities.building8.sections.1.links.0.label": {
      "ja": "関西学院大学「お問い合わせ」",
      "text": "간세이가쿠인 대학교 ‘문의’",
      "status": "provisional"
    },
    "facilities.library.name": {
      "ja": "図書室",
      "text": "도서실",
      "status": "provisional"
    },
    "facilities.library.facts.0": {
      "ja": "📚 約25万冊",
      "text": "📚 약 25만 권",
      "status": "provisional"
    },
    "facilities.library.facts.1": {
      "ja": "🪑 528席",
      "text": "🪑 528석",
      "status": "provisional"
    },
    "facilities.library.facts.2": {
      "ja": "💻 PC114台",
      "text": "💻 PC 114대",
      "status": "provisional"
    },
    "facilities.library.facts.3": {
      "ja": "🕙 平日22時まで",
      "text": "🕙 평일 22시까지",
      "status": "provisional"
    },
    "facilities.library.overview.0": {
      "ja": "神戸三田キャンパスの6号館2〜4階にある図書メディア館は、約25万冊の図書と528席の閲覧席を備えた学習・研究施設です。",
      "text": "고베 산다 캠퍼스 6호관 2~4층에 있는 도서미디어관은 약 25만 권의 도서와 528석의 열람석을 갖춘 학습·연구 시설입니다.",
      "status": "provisional"
    },
    "facilities.library.overview.1": {
      "ja": "館内には、個人での自習に適した閲覧席のほか、パソコンを利用できるメディア・フォーラムやグループ学習用の部屋などがあり、目的に応じた学習ができます。",
      "text": "관내에는 개인 자습에 적합한 열람석 외에 컴퓨터를 이용할 수 있는 미디어 포럼과 그룹 학습용 방 등이 있어 목적에 맞는 학습을 할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.library.overview.2": {
      "ja": "通常の授業期間中は平日22時まで開館しており、授業の予習・復習やレポート作成、試験勉強などに利用できます。",
      "text": "통상 수업 기간 중에는 평일 22시까지 개관하며, 수업 예습·복습, 리포트 작성, 시험공부 등에 이용할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.library.sections.0.title": {
      "ja": "開館時間",
      "text": "개관 시간",
      "status": "provisional"
    },
    "facilities.library.sections.0.rows.0.0": {
      "ja": "月〜金曜日",
      "text": "월~금요일",
      "status": "provisional"
    },
    "facilities.library.sections.0.rows.1.0": {
      "ja": "土曜日",
      "text": "토요일",
      "status": "provisional"
    },
    "facilities.library.sections.0.rows.2.0": {
      "ja": "日曜日",
      "text": "일요일",
      "status": "provisional"
    },
    "facilities.library.sections.0.rows.2.1": {
      "ja": "12:00〜18:00（開館日のみ）",
      "text": "12:00~18:00(개관일만)",
      "status": "provisional"
    },
    "facilities.library.sections.0.rows.3.0": {
      "ja": "祝日",
      "text": "공휴일",
      "status": "provisional"
    },
    "facilities.library.sections.0.rows.3.1": {
      "ja": "授業実施日などを除き休館",
      "text": "수업 실시일 등을 제외하고 휴관",
      "status": "provisional"
    },
    "facilities.library.sections.0.rows.4.0": {
      "ja": "長期休暇期間",
      "text": "장기 방학 기간",
      "status": "provisional"
    },
    "facilities.library.sections.0.rows.4.1": {
      "ja": "8:50〜18:00 など（短縮・変更あり）",
      "text": "8:50~18:00 등(단축·변경 있음)",
      "status": "provisional"
    },
    "facilities.library.sections.0.links.0.label": {
      "ja": "2026年度 開館カレンダー（PDF）",
      "text": "2026년도 개관 캘린더(PDF, 일본어)",
      "status": "provisional"
    },
    "facilities.avCorner.name": {
      "ja": "視聴覚コーナー",
      "text": "시청각 코너",
      "status": "provisional"
    },
    "facilities.avCorner.overview.0": {
      "ja": "図書館が所蔵する映像・音声資料を利用でき、語学学習などに活用できます。また、自分で持ち込んだDVDなどを視聴することも可能です。",
      "text": "도서관이 소장한 영상·음성 자료를 이용할 수 있어 어학 학습 등에 활용할 수 있습니다. 또한 직접 가져온 DVD 등을 시청할 수도 있습니다.",
      "status": "provisional"
    },
    "facilities.avCorner.overview.1": {
      "ja": "利用する際は、2階の貸出・返却カウンターで受付を行います。",
      "text": "이용할 때는 2층 대출·반납 카운터에서 접수합니다.",
      "status": "provisional"
    },
    "facilities.libraryFloor3.name": {
      "ja": "3階｜参考図書・メディアフォーラムエリア",
      "text": "3층｜참고도서·미디어 포럼 구역",
      "status": "provisional"
    },
    "facilities.libraryFloor3.overview.0": {
      "ja": "3階には、辞書や事典などの参考図書、雑誌、新書・文庫などが置かれています。また、パソコンを利用できるメディア・フォーラムや、グループで学習できる閲覧室もあります。",
      "text": "3층에는 사전과 백과사전 등의 참고도서, 잡지, 신서·문고본 등이 있습니다. 또한 컴퓨터를 이용할 수 있는 미디어 포럼과 그룹으로 학습할 수 있는 열람실도 있습니다.",
      "status": "provisional"
    },
    "facilities.libraryFloor4.name": {
      "ja": "4階｜一般図書エリア",
      "text": "4층｜일반도서 구역",
      "status": "provisional"
    },
    "facilities.libraryFloor4.overview.0": {
      "ja": "4階には、学習や研究に役立つ一般図書が数多く並んでいます。また、授業に関連する指定図書や、就職・資格・留学などに関する図書もあり、幅広い目的で利用できます。",
      "text": "4층에는 학습과 연구에 도움이 되는 일반도서가 많이 진열되어 있습니다. 또한 수업과 관련된 지정 도서와 취업·자격·유학 등에 관한 도서도 있어 폭넓은 목적으로 이용할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.name": {
      "ja": "第一厚生棟",
      "text": "제1후생동",
      "status": "provisional"
    },
    "facilities.studentHall1.overview.0": {
      "ja": "第一厚生棟には、1階に食堂「Lunch Box」とカフェ「CRESCENT cafe」、2階に大学生協の購買店舗「Toy Box」があります。",
      "text": "제1후생동에는 1층에 식당 'Lunch Box'와 카페 'CRESCENT cafe', 2층에 대학 생협 매장 'Toy Box'가 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.title": {
      "ja": "1階｜Lunch Box（ランチボックス）",
      "text": "1층 | Lunch Box(런치 박스)",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.text.0": {
      "ja": "第一厚生棟1階にある「Lunch Box」は、関西学院大学生協が運営する食堂です。",
      "text": "제1후생동 1층에 있는 'Lunch Box'는 관서학원대학 생협이 운영하는 식당입니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.text.1": {
      "ja": "定食や丼、カレー、うどん・そば・ラーメンなど、さまざまな種類の料理が提供されています。ゆったりとした食事スペースがあり、友人との昼食や授業の合間の休憩にも利用できます。",
      "text": "정식과 덮밥, 카레, 우동·소바·라멘 등 다양한 요리가 제공됩니다. 여유로운 식사 공간이 있어 친구와 점심을 먹거나 수업 사이에 쉬기에도 좋습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.text.2": {
      "ja": "食堂のメニューは、関学生協の公式メニューページから確認できます。",
      "text": "식당 메뉴는 관서학원 생협 공식 메뉴 페이지에서 확인할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.rows.0.0": {
      "ja": "場所",
      "text": "장소",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.rows.0.1": {
      "ja": "第一厚生棟1階",
      "text": "제1후생동 1층",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.rows.1.0": {
      "ja": "営業時間（平日）",
      "text": "영업시간(평일)",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.rows.1.1": {
      "ja": "8:30〜9:30・10:30〜19:00",
      "text": "8:30~9:30・10:30~19:00",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.rows.2.0": {
      "ja": "営業時間（土曜）",
      "text": "영업시간(토요일)",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.rows.3.0": {
      "ja": "休業日",
      "text": "휴무일",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.rows.3.1": {
      "ja": "日曜日（2026年11月は3日も休業）",
      "text": "일요일(2026년 11월은 3일도 휴무)",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.figure.caption": {
      "ja": "Lunch Boxのメニュー展示",
      "text": "Lunch Box의 메뉴 전시",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.figure.alt": {
      "ja": "第一厚生棟Lunch Boxのメニュー展示。うどん、そば、ラーメン、カレーなどの料理が紹介されている",
      "text": "제1후생동 Lunch Box의 메뉴 전시. 우동, 소바, 라멘, 카레 등의 요리가 소개되어 있다",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.note.0": {
      "ja": "2026年11月の営業時間です。時期によって変更されます。",
      "text": "2026년 11월 영업시간입니다. 시기에 따라 변경됩니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.note.1": {
      "ja": "写真の価格は撮影時のものです。現在の価格や提供状況はメニューページや店頭でご確認ください。",
      "text": "사진 속 가격은 촬영 당시의 것입니다. 현재 가격과 제공 여부는 메뉴 페이지나 매장에서 확인해 주세요.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.buttons.0.label": {
      "ja": "Lunch Boxのメニューを見る",
      "text": "Lunch Box 메뉴 보기",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.0.buttons.1.label": {
      "ja": "最新の営業時間を見る",
      "text": "최신 영업시간 보기",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.title": {
      "ja": "1階｜CRESCENT cafe（クレセントカフェ）",
      "text": "1층 | CRESCENT cafe(크레센트 카페)",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.text.0": {
      "ja": "Lunch Boxのレジ横には、大学生協が運営する小さなお店「CRESCENT cafe」があります。",
      "text": "Lunch Box 계산대 옆에는 대학 생협이 운영하는 작은 가게 'CRESCENT cafe'가 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.text.1": {
      "ja": "ソフトクリームやセルフサービスのコーヒーのほか、食堂で作ったお弁当や丼も温かい状態で販売しています。授業の合間に軽食やデザートを買えるお店です。",
      "text": "소프트아이스크림과 셀프서비스 커피 외에도, 식당에서 만든 도시락과 덮밥을 따뜻한 상태로 판매합니다. 수업 사이에 간식이나 디저트를 살 수 있는 가게입니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.rows.0.0": {
      "ja": "場所",
      "text": "장소",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.rows.0.1": {
      "ja": "第一厚生棟1階（Lunch Boxのレジ横）",
      "text": "제1후생동 1층(Lunch Box 계산대 옆)",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.rows.1.0": {
      "ja": "営業時間（平日）",
      "text": "영업시간(평일)",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.rows.2.0": {
      "ja": "休業日",
      "text": "휴무일",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.rows.2.1": {
      "ja": "土日（2026年11月は3日も休業）",
      "text": "토·일(2026년 11월은 3일도 휴무)",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.items.0.name": {
      "ja": "ソフトクリーム",
      "text": "소프트아이스크림",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.items.0.text": {
      "ja": "季節によってトッピングソースが変わることもあります。",
      "text": "계절에 따라 토핑 소스가 바뀌기도 합니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.items.1.name": {
      "ja": "コーヒー",
      "text": "커피",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.items.1.text": {
      "ja": "セルフサービスのコーヒーがあります。",
      "text": "셀프서비스 커피가 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.items.2.name": {
      "ja": "お弁当・丼",
      "text": "도시락·덮밥",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.items.2.text": {
      "ja": "食堂で作ったお弁当や丼を、温かい状態で買えます。",
      "text": "식당에서 만든 도시락과 덮밥을 따뜻한 상태로 살 수 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.note.0": {
      "ja": "営業時間は2026年11月の公式案内に基づきます。",
      "text": "영업시간은 2026년 11월 공식 안내를 기준으로 합니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.note.1": {
      "ja": "下のInstagramは関学生協全体の公式アカウントです。",
      "text": "아래 Instagram은 관서학원 생협 전체의 공식 계정입니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.1.buttons.0.label": {
      "ja": "関学生協のInstagramを見る",
      "text": "관서학원 생협 Instagram 보기",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.title": {
      "ja": "2階｜Toy Box（トイボックス）",
      "text": "2층 | Toy Box(토이 박스)",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.highlight": {
      "ja": "大学生活を支える、生協の総合購買店舗",
      "text": "대학 생활을 지원하는 생협 종합 매장",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.text.0": {
      "ja": "第一厚生棟2階にある「Toy Box」は、関西学院大学生活協同組合が運営する購買店舗です。",
      "text": "제1후생동 2층에 있는 'Toy Box'는 관서학원대학 생활협동조합이 운영하는 매장입니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.text.1": {
      "ja": "授業で使用する教科書や参考書、ノートなどの文房具、パソコン、関学オリジナルグッズなどを販売しています。",
      "text": "수업에서 쓰는 교과서와 참고서, 노트 등 문구, 컴퓨터, 관서학원 오리지널 굿즈 등을 판매합니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.text.2": {
      "ja": "さらに、旅行や資格取得、自動車学校、ゼミ合宿の手配など、大学生活に関係する幅広いサービスを取り扱っています。",
      "text": "또한 여행, 자격 취득, 자동차 학원, 세미나 합숙 준비 등 대학 생활과 관련된 폭넓은 서비스를 취급합니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.rows.0.0": {
      "ja": "店舗名",
      "text": "매장명",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.rows.1.0": {
      "ja": "場所",
      "text": "장소",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.rows.1.1": {
      "ja": "第一厚生棟2階",
      "text": "제1후생동 2층",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.rows.2.0": {
      "ja": "運営",
      "text": "운영",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.rows.2.1": {
      "ja": "関西学院大学生活協同組合",
      "text": "관서학원대학 생활협동조합",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.rows.3.0": {
      "ja": "営業時間",
      "text": "영업시간",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.rows.4.0": {
      "ja": "休業日",
      "text": "휴무일",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.rows.4.1": {
      "ja": "2026年11月は土日休業（11月3日も休業）",
      "text": "2026년 11월은 토·일 휴무(11월 3일도 휴무)",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.note.0": {
      "ja": "2026年11月の通常営業日の営業時間です。11月23日は17:00までの営業でした。",
      "text": "2026년 11월 평상시 영업시간입니다. 11월 23일은 17:00까지 영업했습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.note.1": {
      "ja": "営業時間は時期によって変更されます。最新情報は関学生協公式サイトをご確認ください。",
      "text": "영업시간은 시기에 따라 변경됩니다. 최신 정보는 관서학원 생협 공식 사이트에서 확인해 주세요.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.2.buttons.0.label": {
      "ja": "最新の営業時間を見る",
      "text": "최신 영업시간 보기",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.title": {
      "ja": "授業に必要なものから関学グッズまで",
      "text": "수업 필수품부터 관서학원 굿즈까지",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.text": {
      "ja": "Toy Boxでは、授業に必要な学習用品から、学生生活を便利にする商品まで幅広く取り扱っています。",
      "text": "Toy Box에서는 수업에 필요한 학습용품부터 학생 생활을 편리하게 해 주는 상품까지 폭넓게 취급합니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.0.name": {
      "ja": "教科書・参考書",
      "text": "교과서·참고서",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.0.chips.0": {
      "ja": "教科書",
      "text": "교과서",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.0.chips.1": {
      "ja": "参考書",
      "text": "참고서",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.0.chips.2": {
      "ja": "書籍・雑誌",
      "text": "서적·잡지",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.0.text": {
      "ja": "大学の講義や実習で使う参考書などを購入できます。書籍の注文もできます。",
      "text": "대학 강의나 실습에서 쓰는 참고서 등을 구입할 수 있습니다. 서적 주문도 가능합니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.1.name": {
      "ja": "文房具",
      "text": "문구",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.1.chips.0": {
      "ja": "ノート",
      "text": "노트",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.1.chips.1": {
      "ja": "ファイル",
      "text": "파일",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.1.text": {
      "ja": "授業や課題に必要な文房具を、生協の割引価格で販売しています。",
      "text": "수업과 과제에 필요한 문구를 생협 할인 가격으로 판매합니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.2.name": {
      "ja": "パソコン・周辺機器",
      "text": "컴퓨터·주변기기",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.2.chips.0": {
      "ja": "パソコン",
      "text": "컴퓨터",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.2.chips.1": {
      "ja": "周辺機器",
      "text": "주변기기",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.2.text": {
      "ja": "パソコン本体から周辺機器まで取り扱い、パソコンに関する質問にも対応しています。",
      "text": "컴퓨터 본체부터 주변기기까지 취급하며, 컴퓨터에 관한 질문에도 답해 줍니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.3.name": {
      "ja": "関学オリジナルグッズ",
      "text": "관서학원 오리지널 굿즈",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.3.chips.0": {
      "ja": "ボールペン",
      "text": "볼펜",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.3.chips.1": {
      "ja": "ノート",
      "text": "노트",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.3.chips.2": {
      "ja": "スウェット",
      "text": "스웨트셔츠",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.3.chips.3": {
      "ja": "クッキー",
      "text": "쿠키",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.items.3.text": {
      "ja": "関学のオリジナルグッズです。おみやげにもおすすめです。",
      "text": "관서학원 오리지널 굿즈입니다. 기념품으로도 추천합니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.3.note": {
      "ja": "商品例は関学生協公式サイトの紹介です。取扱商品や在庫は時期によって異なります。",
      "text": "상품 예시는 관서학원 생협 공식 사이트의 소개입니다. 취급 상품과 재고는 시기에 따라 다릅니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.4.title": {
      "ja": "買い物だけじゃない！学生生活をサポート",
      "text": "쇼핑만이 아니에요! 학생 생활을 지원",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.4.text": {
      "ja": "Toy Boxでは、商品の販売のほかに、学生生活に関するさまざまなサービスを取り扱っています。",
      "text": "Toy Box에서는 상품 판매 외에도 학생 생활에 관한 다양한 서비스를 취급합니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.4.items.0.name": {
      "ja": "資格・検定",
      "text": "자격·검정",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.4.items.0.text": {
      "ja": "TOEFLなどの検定の申込みや、資格スクールの申込みができます。",
      "text": "TOEFL 등 검정 신청과 자격 학원 신청을 할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.4.items.1.name": {
      "ja": "自動車学校",
      "text": "자동차 학원",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.4.items.1.text": {
      "ja": "自動車学校に生協の割引価格で入校できます。夏休み・春休みなどを使った合宿制の自動車学校も申し込めます。",
      "text": "생협 할인 가격으로 자동차 학원에 등록할 수 있습니다. 여름방학·봄방학 등을 이용한 합숙형 자동차 학원도 신청할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.4.items.2.name": {
      "ja": "国内・海外旅行",
      "text": "국내·해외여행",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.4.items.2.text": {
      "ja": "旅行の申込みや、語学留学などの相談ができます。",
      "text": "여행 신청과 어학연수 등의 상담을 할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.4.items.3.name": {
      "ja": "ゼミ合宿",
      "text": "세미나 합숙",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.4.items.3.text": {
      "ja": "ゼミ合宿の手配を取り扱っています。",
      "text": "세미나 합숙 준비를 취급합니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.4.items.4.name": {
      "ja": "住まいの紹介",
      "text": "주거 소개",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.4.items.4.text": {
      "ja": "関学生協の店舗案内で、Toy Boxの取扱いとして掲載されています。詳しい内容は公式サイトでご確認ください。",
      "text": "관서학원 생협 매장 안내에 Toy Box의 취급 서비스로 게재되어 있습니다. 자세한 내용은 공식 사이트에서 확인해 주세요.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.4.note": {
      "ja": "割引や取扱内容は変更される場合があります。",
      "text": "할인과 취급 내용은 변경될 수 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.title": {
      "ja": "通学に便利な「関学NicoPa」",
      "text": "통학에 편리한 '관학 NicoPa'",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.text.0": {
      "ja": "関学NicoPaは、神姫バスで関西学院大学に通学する学生向けのICカードです。",
      "text": "관학 NicoPa는 신키 버스로 관서학원대학에 통학하는 학생을 위한 IC 카드입니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.text.1": {
      "ja": "Toy Boxでは、関学NicoPaの販売とチャージに対応しています。アカデミックコモンズにもチャージ機が設置されています。",
      "text": "Toy Box에서는 관학 NicoPa 판매와 충전을 합니다. 아카데믹 커먼즈에도 충전기가 설치되어 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.text.2": {
      "ja": "関学生協の公式案内では、現金チャージ時に25％のプレミアが付くことや、神戸三田キャンパスへの指定通学路線で特別運賃が適用されることが紹介されています。",
      "text": "관서학원 생협 공식 안내에 따르면 현금 충전 시 25% 프리미엄이 붙고, 고베산다 캠퍼스로 가는 지정 통학 노선에서는 특별 운임이 적용됩니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.rows.0.0": {
      "ja": "対象",
      "text": "대상",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.rows.0.1": {
      "ja": "神姫バスで関学に通学する学生",
      "text": "신키 버스로 관서학원에 통학하는 학생",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.rows.1.0": {
      "ja": "販売場所",
      "text": "판매처",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.rows.1.1": {
      "ja": "Toy Box（神戸三田キャンパスではToy Boxのみ）",
      "text": "Toy Box(고베산다 캠퍼스에서는 Toy Box에서만)",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.rows.2.0": {
      "ja": "チャージ",
      "text": "충전",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.rows.2.1": {
      "ja": "Toy Box・アカデミックコモンズ",
      "text": "Toy Box·아카데믹 커먼즈",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.rows.3.0": {
      "ja": "特徴",
      "text": "특징",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.rows.3.1": {
      "ja": "現金チャージ時のプレミア、指定路線の特別運賃",
      "text": "현금 충전 시 프리미엄, 지정 노선 특별 운임",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.more.title": {
      "ja": "シャトルバスの乗車券",
      "text": "셔틀버스 승차권",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.more.text": {
      "ja": "西宮上ケ原キャンパスと神戸三田キャンパスを結ぶシャトルバスの乗車券も、Toy Boxで販売されています（神戸三田キャンパスではColorful Boxでも販売）。運賃や運行日は変更される場合があるため、公式ページで最新情報をご確認ください。",
      "text": "니시노미야 우에가하라 캠퍼스와 고베산다 캠퍼스를 잇는 셔틀버스 승차권도 Toy Box에서 판매합니다(고베산다 캠퍼스에서는 Colorful Box에서도 판매). 운임과 운행일은 변경될 수 있으니 공식 페이지에서 최신 정보를 확인해 주세요.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.note": {
      "ja": "利用条件や制度は変更される可能性があります。",
      "text": "이용 조건과 제도는 변경될 수 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.5.buttons.0.label": {
      "ja": "関学NicoPaについて詳しく見る",
      "text": "관학 NicoPa 자세히 보기",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.title": {
      "ja": "KSCオリジナルマイボトル",
      "text": "KSC 오리지널 마이 보틀",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.text.0": {
      "ja": "神戸三田キャンパスの学生有志グループ「CAMP×US」とアウトドアブランド「Snow Peak」が共同開発したオリジナルマイボトルも、Toy Boxで販売されています。",
      "text": "고베산다 캠퍼스의 학생 자원 그룹 'CAMP×US'와 아웃도어 브랜드 'Snow Peak'가 공동 개발한 오리지널 마이 보틀도 Toy Box에서 판매합니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.text.1": {
      "ja": "キャンパス内の使い捨てペットボトルの削減を目指して開発されたもので、BiZCAFEではこのマイボトルを持参して無料ドリンクを楽しめます。",
      "text": "캠퍼스 내 일회용 페트병을 줄이기 위해 개발되었으며, BiZCAFE에서는 이 마이 보틀을 가져가 무료 음료를 즐길 수 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.rows.0.0": {
      "ja": "容量",
      "text": "용량",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.rows.1.0": {
      "ja": "価格",
      "text": "가격",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.rows.1.1": {
      "ja": "2,250円（税込）",
      "text": "2,250엔(세금 포함)",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.rows.2.0": {
      "ja": "購入場所",
      "text": "구입처",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.rows.3.0": {
      "ja": "購入方法",
      "text": "구입 방법",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.rows.3.1": {
      "ja": "学生証の提示・所有者登録",
      "text": "학생증 제시·소유자 등록",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.rows.4.0": {
      "ja": "購入制限",
      "text": "구입 제한",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.rows.4.1": {
      "ja": "1人1回のみ",
      "text": "1인 1회만",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.rows.5.0": {
      "ja": "転売・譲渡",
      "text": "전매·양도",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.rows.5.1": {
      "ja": "禁止",
      "text": "금지",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.note": {
      "ja": "価格・購入条件はBiZCAFE神戸三田店の公式Instagramの投稿時点の情報です。販売価格や在庫は変更される場合があります。",
      "text": "가격·구입 조건은 BiZCAFE 고베산다점 공식 Instagram 게시 시점의 정보입니다. 판매 가격과 재고는 변경될 수 있습니다.",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.6.buttons.0.label": {
      "ja": "BiZCAFEについて詳しく見る",
      "text": "BiZCAFE 자세히 보기",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.7.title": {
      "ja": "公式情報",
      "text": "공식 정보",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.7.buttons.0.label": {
      "ja": "Toy Boxの店舗情報を見る",
      "text": "Toy Box 매장 정보 보기",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.7.buttons.1.label": {
      "ja": "最新の営業時間を見る",
      "text": "최신 영업시간 보기",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.7.buttons.2.label": {
      "ja": "関学NicoPaについて",
      "text": "관학 NicoPa 안내",
      "status": "provisional"
    },
    "facilities.studentHall1.sections.7.buttons.3.label": {
      "ja": "BiZCAFE公式Instagramを見る",
      "text": "BiZCAFE 공식 Instagram 보기",
      "status": "provisional"
    },
    "facilities.studentHall1.source": {
      "ja": "関西学院大学生活協同組合 公式サイト（2026年11月確認）、BiZCAFE神戸三田店 公式Instagram",
      "text": "관서학원대학 생활협동조합 공식 사이트(2026년 11월 확인), BiZCAFE 고베산다점 공식 Instagram",
      "status": "provisional"
    },
    "facilities.room101.name": {
      "ja": "Ⅵ号館101教室",
      "text": "Ⅵ호관 101 교실",
      "status": "provisional"
    },
    "facilities.room101.hotspot.text": {
      "ja": "Ⅵ号館101教室",
      "text": "Ⅵ호관 101 교실",
      "status": "provisional"
    },
    "facilities.room101.hotspot.desc": {
      "ja": "通常の講義だけでなく、講演会やオープンキャンパス、大学行事などにも利用される大教室です。",
      "text": "일반 강의뿐 아니라 강연회, 오픈 캠퍼스, 대학 행사 등에도 이용되는 대형 강의실입니다.",
      "status": "provisional"
    },
    "facilities.room101.overview.0": {
      "ja": "通常の講義だけでなく、講演会やオープンキャンパス、大学行事などにも利用される大教室です。",
      "text": "일반 강의뿐 아니라 강연회, 오픈 캠퍼스, 대학 행사 등에도 이용되는 대형 강의실입니다.",
      "status": "provisional"
    },
    "facilities.room101Lecture.name": {
      "ja": "講演会・トークショー",
      "text": "강연회·토크쇼",
      "status": "provisional"
    },
    "facilities.room101Lecture.hotspot.text": {
      "ja": "講演会",
      "text": "강연회",
      "status": "provisional"
    },
    "facilities.room101Lecture.overview.0": {
      "ja": "Ⅵ号館101教室は、通常の講義だけでなく、著名人を招いた講演会や大学祭のトークショーなど、さまざまなイベントの会場としても利用されています。",
      "text": "Ⅵ호관 101 교실은 일반 강의뿐 아니라 유명인을 초청한 강연회와 대학 축제 토크쇼 등 다양한 행사의 장소로도 이용됩니다.",
      "status": "provisional"
    },
    "facilities.room101Lecture.overview.1": {
      "ja": "これまでに企画されたイベントを紹介します。",
      "text": "지금까지 기획된 행사를 소개합니다.",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.0.title": {
      "ja": "池上彰氏による記念講演",
      "text": "이케가미 아키라 씨의 기념 강연",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.0.event.subtitle": {
      "ja": "「大学時代に何をなすべきか」",
      "text": "'대학 시절에 무엇을 해야 하는가'",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.0.text.0": {
      "ja": "2021年5月10日、神戸三田キャンパスの5学部体制への再編を記念し、ジャーナリストの池上彰氏による講演会が開催されました。",
      "text": "2021년 5월 10일, 고베산다 캠퍼스의 5개 학부 체제 재편을 기념해 저널리스트 이케가미 아키라 씨의 강연회가 열렸습니다.",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.0.text.1": {
      "ja": "講演では、文系・理系の垣根を越えて学べるKSCで、受け身ではなく貪欲に学んでほしいと語られました。",
      "text": "강연에서는 문과·이과의 경계를 넘어 배울 수 있는 KSC에서 수동적이지 말고 적극적으로 배우기를 바란다고 이야기했습니다.",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.0.text.2": {
      "ja": "Ⅵ号館101教室とオンラインを併用して実施され、学生・教職員ら約630人が参加しました（オンラインでの参加385人を含む）。",
      "text": "Ⅵ호관 101 교실과 온라인을 병행해 진행되었으며, 학생과 교직원 등 약 630명이 참가했습니다(온라인 참가 385명 포함).",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.0.buttons.0.label": {
      "ja": "大学公式記事を見る",
      "text": "대학 공식 기사 보기",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.title": {
      "ja": "新月祭トークショー",
      "text": "신게쓰 축제 토크쇼",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.event.kicker": {
      "ja": "新月祭2026",
      "text": "신게쓰 축제 2026",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.event.subtitle": {
      "ja": "ゲスト：ROLAND氏",
      "text": "게스트: ROLAND 씨",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.text.0": {
      "ja": "2026年10月25日の大学祭「新月祭」では、Ⅵ号館101教室を会場とするROLAND氏のトークショーが公式プログラムに掲載されました。",
      "text": "2026년 10월 25일 대학 축제 '신게쓰 축제(新月祭)'에서는 Ⅵ호관 101 교실에서 열리는 ROLAND 씨의 토크쇼가 공식 프로그램에 게재되었습니다.",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.text.1": {
      "ja": "101教室は、大学の講演会だけでなく、大学祭のイベント会場としても利用されています。",
      "text": "101 교실은 대학 강연회뿐 아니라 대학 축제의 행사장으로도 이용됩니다.",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.rows.0.0": {
      "ja": "開催予定日",
      "text": "개최 예정일",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.rows.0.1": {
      "ja": "2026年10月25日",
      "text": "2026년 10월 25일",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.rows.1.0": {
      "ja": "ゲスト",
      "text": "게스트",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.rows.1.1": {
      "ja": "ROLAND氏",
      "text": "ROLAND 씨",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.rows.2.0": {
      "ja": "開場",
      "text": "입장 시작",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.rows.3.0": {
      "ja": "開始",
      "text": "시작",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.rows.4.0": {
      "ja": "会場",
      "text": "장소",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.rows.4.1": {
      "ja": "Ⅵ号館101教室",
      "text": "Ⅵ호관 101 교실",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.note": {
      "ja": "新月祭公式サイトのタイムテーブルに掲載された開催予定の情報です。",
      "text": "신게쓰 축제 공식 사이트의 타임테이블에 게재된 개최 예정 정보입니다.",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.1.buttons.0.label": {
      "ja": "新月祭2026の公式情報を見る",
      "text": "신게쓰 축제 2026 공식 정보 보기",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.2.title": {
      "ja": "秋季人権問題講演会",
      "text": "추계 인권 문제 강연회",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.2.event.subtitle": {
      "ja": "「マイクロアグレッションを理解するー無自覚な差別・排除への気づき」",
      "text": "'마이크로어그레션 이해하기 - 무자각적 차별·배제에 대한 깨달음'",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.2.text": {
      "ja": "2024年10月4日には、Ⅵ号館101教室を会場とする秋季人権問題講演会が案内されました。講師は立命館大学の金友子氏。日常生活における無意識の差別や排除について考える内容です。",
      "text": "2024년 10월 4일에는 Ⅵ호관 101 교실에서 열리는 추계 인권 문제 강연회가 안내되었습니다. 강사는 리쓰메이칸대학의 김우자 씨로, 일상생활 속 무의식적인 차별과 배제에 대해 생각하는 내용입니다.",
      "status": "provisional"
    },
    "facilities.room101Lecture.sections.2.buttons.0.label": {
      "ja": "大学公式資料を見る",
      "text": "대학 공식 자료 보기",
      "status": "provisional"
    },
    "facilities.room101Lecture.source": {
      "ja": "関西学院大学 神戸三田キャンパス記事（2021年5月13日）、新月祭2026公式サイト「KSC企画タイムテーブル」、関西学院大学 人権教育研究室（2024年度秋季人権問題講演会チラシ）",
      "text": "관서학원대학 고베산다 캠퍼스 기사(2021년 5월 13일), 신게쓰 축제 2026 공식 사이트 'KSC 기획 타임테이블', 관서학원대학 인권교육연구실(2024년도 추계 인권 문제 강연회 전단)",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.name": {
      "ja": "オープンキャンパス",
      "text": "오픈 캠퍼스",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.hotspot.text": {
      "ja": "オープンキャンパス",
      "text": "오픈 캠퍼스",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.lead": {
      "ja": "現役大学生が伝える、関学の学びとキャンパスライフ",
      "text": "재학생이 전하는 관서학원의 배움과 캠퍼스 라이프",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.overview.0": {
      "ja": "神戸三田キャンパスでは、高校生や保護者を対象に、大学での学びや学生生活を紹介するオープンキャンパスが開催されています。",
      "text": "고베산다 캠퍼스에서는 고등학생과 보호자를 대상으로 대학에서의 배움과 학생 생활을 소개하는 오픈 캠퍼스가 열립니다.",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.overview.1": {
      "ja": "Ⅵ号館101教室も、学生による学部紹介などの会場として使用されてきました。",
      "text": "Ⅵ호관 101 교실도 학생들의 학부 소개 등의 장소로 사용되어 왔습니다.",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.title": {
      "ja": "現役学生が語る！14学部のここスゴ！",
      "text": "재학생이 말한다! 14개 학부의 여기가 대단해!",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.event.kicker": {
      "ja": "101教室で開催",
      "text": "101 교실에서 개최",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.figure.caption": {
      "ja": "2022年のオープンキャンパスで、理系4学部の学生が101教室に登壇",
      "text": "2022년 오픈 캠퍼스에서 이공계 4개 학부 학생들이 101 교실 무대에 올랐습니다",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.text.0": {
      "ja": "2022年8月11日のオープンキャンパスでは、Ⅵ号館101教室で「現役学生が語る！14学部のここスゴ！」という企画が実施されました。",
      "text": "2022년 8월 11일 오픈 캠퍼스에서는 Ⅵ호관 101 교실에서 '재학생이 말한다! 14개 학부의 여기가 대단해!'라는 기획이 열렸습니다.",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.text.1": {
      "ja": "この会場では、理学部・工学部・生命環境学部・建築学部の代表学生がステージに登壇し、それぞれの学部の魅力や実際の大学での学びについて、高校生に紹介しました。",
      "text": "이 장소에서는 이학부·공학부·생명환경학부·건축학부 대표 학생들이 무대에 올라 각 학부의 매력과 실제 대학에서의 배움을 고등학생들에게 소개했습니다.",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.rows.0.0": {
      "ja": "開催日",
      "text": "개최일",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.rows.0.1": {
      "ja": "2022年8月11日",
      "text": "2022년 8월 11일",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.rows.1.0": {
      "ja": "会場",
      "text": "장소",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.rows.1.1": {
      "ja": "Ⅵ号館101教室",
      "text": "Ⅵ호관 101 교실",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.rows.2.0": {
      "ja": "企画",
      "text": "기획",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.rows.2.1": {
      "ja": "現役学生が語る！14学部のここスゴ！",
      "text": "재학생이 말한다! 14개 학부의 여기가 대단해!",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.rows.3.0": {
      "ja": "登壇",
      "text": "등단",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.rows.3.1": {
      "ja": "理系4学部の代表学生",
      "text": "이공계 4개 학부 대표 학생",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.0.buttons.0.label": {
      "ja": "2022年のオープンキャンパスを見る",
      "text": "2022년 오픈 캠퍼스 보기",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.1.title": {
      "ja": "KSCのオープンキャンパスを体験",
      "text": "KSC 오픈 캠퍼스 체험",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.1.text": {
      "ja": "神戸三田キャンパスのオープンキャンパスでは、学部紹介や模擬講義、研究室・実験施設の見学、キャンパスツアーなど、大学での学びや学生生活について知るためのさまざまな企画が実施されています。",
      "text": "고베산다 캠퍼스 오픈 캠퍼스에서는 학부 소개와 모의 강의, 연구실·실험 시설 견학, 캠퍼스 투어 등 대학에서의 배움과 학생 생활을 알 수 있는 다양한 기획이 진행됩니다.",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.1.items.0.name": {
      "ja": "学部紹介・模擬講義",
      "text": "학부 소개·모의 강의",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.1.items.0.text": {
      "ja": "各学部の紹介や模擬講義を通じて、学部で学ぶ内容を知ることができます。",
      "text": "각 학부 소개와 모의 강의를 통해 학부에서 배우는 내용을 알 수 있습니다.",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.1.items.1.name": {
      "ja": "研究室・実験施設の見学",
      "text": "연구실·실험 시설 견학",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.1.items.1.text": {
      "ja": "普段は見る機会の少ない大学の研究室や実験施設を見学できる企画が行われています。",
      "text": "평소에는 보기 어려운 대학 연구실과 실험 시설을 견학할 수 있는 기획이 진행됩니다.",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.1.items.2.name": {
      "ja": "キャンパスツアー",
      "text": "캠퍼스 투어",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.1.items.2.text": {
      "ja": "実際のキャンパスを歩きながら、大学の施設や学習環境を見学できます。",
      "text": "실제 캠퍼스를 걸으며 대학 시설과 학습 환경을 견학할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.1.items.3.name": {
      "ja": "学生による企画",
      "text": "학생 기획",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.1.items.3.text": {
      "ja": "現役学生による学部紹介や学生生活についての企画を通じて、大学生活の様子を知ることができます。",
      "text": "재학생의 학부 소개와 학생 생활에 관한 기획을 통해 대학 생활의 모습을 알 수 있습니다.",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.1.note": {
      "ja": "これまでにKSC全体のオープンキャンパスで実施されてきた企画です。すべてが101教室で開催されるわけではありません。",
      "text": "지금까지 KSC 전체 오픈 캠퍼스에서 진행되어 온 기획입니다. 모두 101 교실에서 열리는 것은 아닙니다.",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.2.title": {
      "ja": "神戸三田キャンパスのオープンキャンパス",
      "text": "고베산다 캠퍼스 오픈 캠퍼스",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.2.event.subtitle": {
      "ja": "KSC全体の開催実績",
      "text": "KSC 전체 개최 실적",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.2.text.0": {
      "ja": "2026年8月8日、神戸三田キャンパスで夏のオープンキャンパスが開催され、大学公式発表によると延べ5,300名を超える高校生や保護者が来場しました。",
      "text": "2026년 8월 8일 고베산다 캠퍼스에서 여름 오픈 캠퍼스가 열렸으며, 대학 공식 발표에 따르면 고등학생과 보호자 등 연인원 5,300명 이상이 방문했습니다.",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.2.text.1": {
      "ja": "大学入試に関する情報提供やキャンパスツアーのほか、建築学部では学部紹介や研究紹介、個別相談、デザインスタジオの開放などが行われました。",
      "text": "대학 입시 관련 정보 제공과 캠퍼스 투어 외에도, 건축학부에서는 학부 소개와 연구 소개, 개별 상담, 디자인 스튜디오 개방 등이 진행되었습니다.",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.2.note": {
      "ja": "キャンパス全体の情報です。来場者数や企画は101教室でのものではありません。",
      "text": "캠퍼스 전체 정보입니다. 방문자 수와 기획은 101 교실의 것이 아닙니다.",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.sections.2.buttons.0.label": {
      "ja": "2026年のオープンキャンパスを見る",
      "text": "2026년 오픈 캠퍼스 보기",
      "status": "provisional"
    },
    "facilities.room101OpenCampus.source": {
      "ja": "関西学院大学 神戸三田キャンパス ニュース（2022年8月12日）、関西学院大学 建築学部 ニュース（2026年8月10日）",
      "text": "관서학원대학 고베산다 캠퍼스 뉴스(2022년 8월 12일), 관서학원대학 건축학부 뉴스(2026년 8월 10일)",
      "status": "provisional"
    },
    "facilities.room101Chapel.name": {
      "ja": "チャペルアワーって？",
      "text": "채플 아워란?",
      "status": "provisional"
    },
    "facilities.room101Chapel.hotspot.text": {
      "ja": "チャペルアワーって？",
      "text": "채플 아워란?",
      "status": "provisional"
    },
    "facilities.room101Chapel.lead": {
      "ja": "授業の合間に、自分自身や社会について考える時間",
      "text": "수업 사이에 나 자신과 사회에 대해 생각하는 시간",
      "status": "provisional"
    },
    "facilities.room101Chapel.overview.0": {
      "ja": "関西学院大学では、キリスト教主義教育の一環として、1限と2限の間に「チャペルアワー」という時間が設けられています。",
      "text": "관서학원대학에서는 기독교주의 교육의 일환으로 1교시와 2교시 사이에 '채플 아워'라는 시간을 두고 있습니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.overview.1": {
      "ja": "チャペルアワーは、大学が授業と並ぶ重要な教育プログラムとして位置づけているものです。聖書の言葉や祈り、講話、音楽などに触れる時間です。",
      "text": "채플 아워는 대학이 수업과 나란히 중요한 교육 프로그램으로 자리매김하고 있는 것입니다. 성경 말씀과 기도, 강화, 음악 등을 접하는 시간입니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.title": {
      "ja": "いつ行われる？",
      "text": "언제 열리나요?",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.highlight": {
      "ja": "1限と2限の間の30分間",
      "text": "1교시와 2교시 사이의 30분",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.timeline.0.label": {
      "ja": "1限",
      "text": "1교시",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.timeline.1.label": {
      "ja": "チャペルアワー",
      "text": "채플 아워",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.timeline.2.label": {
      "ja": "2限",
      "text": "2교시",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.text.0": {
      "ja": "通常の授業期間中、1限と2限の間にチャペルアワーの時間帯が設けられています。2026年度の時間は10:30〜11:00（全キャンパス共通）です。",
      "text": "평소 수업 기간에는 1교시와 2교시 사이에 채플 아워 시간대가 마련되어 있습니다. 2026년도 시간은 10:30~11:00(전 캠퍼스 공통)입니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.text.1": {
      "ja": "各学部でさまざまなプログラムが行われていて、詳しい日程は大学が発行する「チャペル週報」で確認できます。",
      "text": "각 학부에서 다양한 프로그램이 진행되며, 자세한 일정은 대학이 발행하는 '채플 주보'에서 확인할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.rows.0.0": {
      "ja": "時間",
      "text": "시간",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.rows.1.0": {
      "ja": "実施時期",
      "text": "실시 시기",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.rows.1.1": {
      "ja": "授業実施期間の平日",
      "text": "수업 기간의 평일",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.rows.2.0": {
      "ja": "場所",
      "text": "장소",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.rows.2.1": {
      "ja": "各学部のチャペル",
      "text": "각 학부의 채플",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.rows.3.0": {
      "ja": "内容",
      "text": "내용",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.0.rows.3.1": {
      "ja": "学部や開催日によって異なる",
      "text": "학부와 개최일에 따라 다름",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.1.title": {
      "ja": "チャペルアワーの内容",
      "text": "채플 아워의 내용",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.1.text": {
      "ja": "聖書の朗読や祈り、教職員・学生・ゲストによる講話などが行われます。聖歌隊やハンドベルクワイアなど、学生音楽団体の演奏が取り入れられることもあります。",
      "text": "성경 낭독과 기도, 교직원·학생·게스트의 강화 등이 진행됩니다. 성가대와 핸드벨 콰이어 등 학생 음악 단체의 연주가 함께할 때도 있습니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.1.items.0.name": {
      "ja": "聖書・祈り",
      "text": "성경·기도",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.1.items.0.text": {
      "ja": "聖書の言葉に耳を傾け、祈りとともに静かな時間を過ごします。",
      "text": "성경 말씀에 귀 기울이고 기도와 함께 조용한 시간을 보냅니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.1.items.1.name": {
      "ja": "講話・メッセージ",
      "text": "강화·메시지",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.1.items.1.text": {
      "ja": "教職員や学生、ゲストによる話を聞きます。",
      "text": "교직원과 학생, 게스트의 이야기를 듣습니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.1.items.2.name": {
      "ja": "音楽チャペル",
      "text": "음악 채플",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.1.items.2.text": {
      "ja": "聖歌隊、ハンドベルクワイア、バロックアンサンブルの演奏に触れられます。",
      "text": "성가대, 핸드벨 콰이어, 바로크 앙상블의 연주를 접할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.1.items.3.text": {
      "ja": "宣教師による英語のチャペルも、大学公式サイトで紹介されています。",
      "text": "선교사가 진행하는 영어 채플도 대학 공식 사이트에 소개되어 있습니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.1.note": {
      "ja": "大学が紹介しているプログラムの例です。毎回すべてが行われるわけではありません。",
      "text": "대학이 소개하는 프로그램의 예입니다. 매번 모두 진행되는 것은 아닙니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.2.title": {
      "ja": "101教室では、大学合同チャペルも開催",
      "text": "101 교실에서는 대학 합동 채플도 열려요",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.2.text.0": {
      "ja": "Ⅵ号館101教室は、複数学部の学生が集まる「大学合同チャペル」の神戸三田キャンパスの会場です。",
      "text": "Ⅵ호관 101 교실은 여러 학부 학생이 모이는 '대학 합동 채플'의 고베산다 캠퍼스 장소입니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.2.text.1": {
      "ja": "大学合同チャペルは、通常の30分間のチャペルアワーとは違い、約50分間の特別なプログラムです。春・秋の大学キリスト教週間や、クリスマスを待ち望むアドベントチャペルアワーなどが行われます。",
      "text": "대학 합동 채플은 평소 30분간의 채플 아워와 달리 약 50분간 진행되는 특별 프로그램입니다. 봄·가을의 대학 기독교 주간과 크리스마스를 기다리는 대림절 채플 아워 등이 열립니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.2.note": {
      "ja": "ふだんの各学部のチャペルアワーが、すべて101教室で行われるわけではありません。",
      "text": "평소 각 학부의 채플 아워가 모두 101 교실에서 열리는 것은 아닙니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.3.title": {
      "ja": "2026年度の大学合同チャペル",
      "text": "2026년도 대학 합동 채플",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.3.items.0.name": {
      "ja": "大学キリスト教週間（春学期）",
      "text": "대학 기독교 주간(봄 학기)",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.3.items.0.chips.1": {
      "ja": "Ⅵ号館101教室",
      "text": "Ⅵ호관 101 교실",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.3.items.0.text": {
      "ja": "2026年5月19日（火）・20日（水）",
      "text": "2026년 5월 19일(화)·20일(수)",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.3.items.1.name": {
      "ja": "大学キリスト教週間（秋学期）",
      "text": "대학 기독교 주간(가을 학기)",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.3.items.1.chips.1": {
      "ja": "Ⅵ号館101教室",
      "text": "Ⅵ호관 101 교실",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.3.items.1.text": {
      "ja": "2026年10月15日（木）・16日（金）",
      "text": "2026년 10월 15일(목)·16일(금)",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.3.items.2.name": {
      "ja": "アドベントチャペルアワー",
      "text": "대림절 채플 아워",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.3.items.2.chips.1": {
      "ja": "Ⅵ号館101教室",
      "text": "Ⅵ호관 101 교실",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.3.items.2.text": {
      "ja": "2026年12月7日（開催予定）。聖歌隊や音楽団体による演奏と、クリスマスの賛美歌が取り入れられると紹介されています。",
      "text": "2026년 12월 7일(개최 예정). 성가대와 음악 단체의 연주, 크리스마스 찬송가가 함께한다고 소개되어 있습니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.3.note.0": {
      "ja": "大学公式サイトに掲載された2026年度の日程です。時間・会場は神戸三田キャンパスのものです。",
      "text": "대학 공식 사이트에 게재된 2026년도 일정입니다. 시간·장소는 고베산다 캠퍼스 기준입니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.3.note.1": {
      "ja": "翌年度以降の日程や会場は変わる場合があります。",
      "text": "다음 연도 이후의 일정과 장소는 바뀔 수 있습니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.4.title": {
      "ja": "公式情報",
      "text": "공식 정보",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.4.text": {
      "ja": "「チャペル週報」は授業期間中に毎週発行されていて、大学各学部のチャペルアワーのスケジュールなどを確認できます。",
      "text": "'채플 주보'는 수업 기간 중 매주 발행되며, 대학 각 학부의 채플 아워 일정 등을 확인할 수 있습니다.",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.4.buttons.0.label": {
      "ja": "チャペルアワーについて詳しく見る",
      "text": "채플 아워 자세히 보기",
      "status": "provisional"
    },
    "facilities.room101Chapel.sections.4.buttons.1.label": {
      "ja": "チャペル週報を見る",
      "text": "채플 주보 보기",
      "status": "provisional"
    },
    "facilities.room101Chapel.source": {
      "ja": "関西学院大学 公式サイト「チャペルアワー」「チャペル週報」（2026年11月確認）",
      "text": "관서학원대학 공식 사이트 '채플 아워' '채플 주보'(2026년 11월 확인)",
      "status": "provisional"
    },
    "facilities.building6.name": {
      "ja": "Ⅵ号館",
      "text": "Ⅵ호관",
      "status": "provisional"
    },
    "facilities.building6.overview.0": {
      "ja": "Ⅵ号館は、大人数での講義やイベントに利用される教室のほか、図書メディア館やPC教室などを備えた建物です。",
      "text": "Ⅵ호관은 대인원 강의와 행사에 이용되는 교실 외에 도서미디어관과 PC 교실 등을 갖춘 건물입니다.",
      "status": "provisional"
    },
    "facilities.building6.overview.1": {
      "ja": "1階の101教室では、オープンキャンパスの学部紹介や模擬講義なども行われています。",
      "text": "1층 101교실에서는 오픈 캠퍼스의 학부 소개와 모의 강의 등도 열립니다.",
      "status": "provisional"
    },
    "facilities.building6.overview.2": {
      "ja": "また、2〜4階には図書メディア館があり、3階にはPCを利用できるメディア・フォーラムが設置されています。",
      "text": "또한 2~4층에는 도서미디어관이 있고, 3층에는 PC를 이용할 수 있는 미디어 포럼이 있습니다.",
      "status": "provisional"
    },
    "facilities.building6.sections.0.title": {
      "ja": "主な施設・設備",
      "text": "주요 시설·설비",
      "status": "provisional"
    },
    "facilities.building6.sections.0.items.0.name": {
      "ja": "101教室（1階）",
      "text": "101교실(1층)",
      "status": "provisional"
    },
    "facilities.building6.sections.0.items.0.text": {
      "ja": "大人数を対象とした講義や学部説明会、イベントなどに利用される教室。",
      "text": "대인원을 대상으로 한 강의, 학부 설명회, 행사 등에 이용되는 교실.",
      "status": "provisional"
    },
    "facilities.building6.sections.0.items.1.name": {
      "ja": "図書メディア館（2〜4階）",
      "text": "도서미디어관(2~4층)",
      "status": "provisional"
    },
    "facilities.building6.sections.0.items.1.text": {
      "ja": "図書の閲覧・貸出や自習、資料調査などに利用できる施設。",
      "text": "도서 열람·대출, 자습, 자료 조사 등에 이용할 수 있는 시설.",
      "status": "provisional"
    },
    "facilities.building6.sections.0.items.2.name": {
      "ja": "PC教室（2階）",
      "text": "PC 교실(2층)",
      "status": "provisional"
    },
    "facilities.building6.sections.0.items.2.text": {
      "ja": "202・203講義室にPCを設置。情報機器を利用した授業や学習に使用されます。",
      "text": "202·203강의실에 PC가 설치되어 있으며, 정보 기기를 이용한 수업과 학습에 사용됩니다.",
      "status": "provisional"
    },
    "facilities.building6.sections.0.items.3.name": {
      "ja": "メディア・フォーラム（3階）",
      "text": "미디어 포럼(3층)",
      "status": "provisional"
    },
    "facilities.building6.sections.0.items.3.text": {
      "ja": "PCを利用した情報検索やレポート作成などができる学習スペース。",
      "text": "PC를 이용한 정보 검색과 리포트 작성 등을 할 수 있는 학습 공간.",
      "status": "provisional"
    },
    "studentLifeLead": {
      "ja": "神戸三田キャンパスで行われている活動の一部を紹介します。くわしくは各公式情報をご覧ください。",
      "text": "고베 산다 캠퍼스에서 이루어지는 활동의 일부를 소개합니다. 자세한 내용은 각 공식 정보를 확인해 주세요.",
      "status": "provisional"
    },
    "facultyGuide.intro": {
      "ja": "神戸三田キャンパスには5つの学部があります。学部を選ぶと、学部の紹介と学科・課程の一覧が表示されます。",
      "text": "고베 산다 캠퍼스에는 5개 학부가 있습니다. 학부를 선택하면 학부 소개와 학과·과정 목록이 표시됩니다.",
      "status": "provisional"
    },
    "facultyGuide.source": {
      "ja": "学部・学科の紹介と授業例は、大学公式サイトの各学部・学科のページをもとにまとめています（2026年11月確認）。授業の内容や開講年次は変わることがあります。",
      "text": "학부·학과 소개와 수업 예는 대학 공식 사이트의 각 학부·학과 페이지를 바탕으로 정리했습니다(2026년 11월 확인). 수업 내용과 개설 학년은 바뀔 수 있습니다.",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.note": {
      "ja": "卒業に必要な単位や必修科目は、入学年度によって異なることがあります。自分の入学年度の資料を確認してください。",
      "text": "졸업에 필요한 학점과 필수 과목은 입학 연도에 따라 다를 수 있습니다. 자신의 입학 연도 자료를 확인하세요.",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.items.curriculum.label": {
      "ja": "カリキュラムを見る",
      "text": "커리큘럼 보기",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.items.curriculum.text": {
      "ja": "学科・課程ごとの授業科目と単位数の一覧です。",
      "text": "학과·과정별 수업 과목과 학점 목록입니다.",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.items.model.label": {
      "ja": "4年間の履修モデルを見る",
      "text": "4년간의 이수 모델 보기",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.items.model.text": {
      "ja": "1年次から4年次まで、どの順番で授業を取るかの例です。",
      "text": "1학년부터 4학년까지 어떤 순서로 수업을 듣는지 보여 주는 예입니다.",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.items.syllabus.label": {
      "ja": "シラバスで授業を調べる",
      "text": "실러버스에서 수업 찾기",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.items.syllabus.text": {
      "ja": "授業ごとの内容と授業計画を調べられます。開講年度・キャンパス・学部を選んで検索します。",
      "text": "수업별 내용과 수업 계획을 찾아볼 수 있습니다. 개강 연도·캠퍼스·학부를 선택해 검색합니다.",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.items.syllabus.year": {
      "ja": "開講年度ごと（検索画面で選ぶ）",
      "text": "개강 연도별(검색 화면에서 선택)",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.items.handbook.label": {
      "ja": "履修心得・履修の手引き",
      "text": "이수 안내(리슈 고코로에·리슈노 테비키)",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.items.handbook.text": {
      "ja": "履修の方法、卒業要件、必修科目をまとめた資料です。2026年度版の一般公開は確認できなかったため、学生ポータル kwic への案内にしています。",
      "text": "이수 방법, 졸업 요건, 필수 과목을 정리한 자료입니다. 2026년도판의 일반 공개를 확인할 수 없어 학생 포털 kwic으로 안내합니다.",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.items.handbook.year": {
      "ja": "2026年度（在学生のみ）",
      "text": "2026년도(재학생만)",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.items.timetable.label": {
      "ja": "授業時間帯を見る",
      "text": "수업 시간대 보기",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.items.timetable.text": {
      "ja": "神戸三田キャンパスの学部の授業は、第1時限 9:00〜10:30 から第5時限 16:50〜18:20 までです。",
      "text": "고베 산다 캠퍼스의 학부 수업은 1교시 9:00~10:30부터 5교시 16:50~18:20까지입니다.",
      "status": "provisional"
    },
    "facultyGuide.studyLinks.items.timetable.year": {
      "ja": "2026年度以降",
      "text": "2026년도 이후",
      "status": "provisional"
    },
    "facultyGuide.buildingNote": {
      "ja": "各号館のカードの説明をもとにした関連です。その学部の授業が主にこの建物で行われることを示すものではありません。",
      "text": "각 호관 카드의 설명을 바탕으로 한 관련입니다. 그 학부의 수업이 주로 이 건물에서 이루어진다는 뜻은 아닙니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.study.curriculum.year": {
      "ja": "2021年度以降入学生",
      "text": "2021년도 이후 입학생",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.study.model.year": {
      "ja": "2021年度以降入学生",
      "text": "2021년도 이후 입학생",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.name": {
      "ja": "総合政策学部",
      "text": "종합정책학부",
      "status": "official"
    },
    "facultyGuide.faculties.policy.lead": {
      "ja": "「自然と人間の共生、人間と人間の共生」を理念に、現代社会のさまざまな問題に対して、多様な学問の専門知識をもとに解決策を探り、実践できる力を育てる学部です。",
      "text": "‘자연과 인간의 공생, 인간과 인간의 공생’을 이념으로, 현대 사회의 다양한 문제에 대해 여러 학문의 전문 지식을 바탕으로 해결책을 찾고 실천할 수 있는 힘을 기르는 학부입니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.fields": {
      "ja": "法学・政治学・経済学・経営学・社会学・社会福祉学・工学・理学・言語などを組み合わせて学びます。1年次は学科に所属せず、2年次から4つの学科に分かれます。",
      "text": "법학·정치학·경제학·경영학·사회학·사회복지학·공학·이학·언어 등을 조합하여 배웁니다. 1학년에는 학과에 소속되지 않고, 2학년부터 4개 학과로 나뉩니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-policy.name": {
      "ja": "総合政策学科",
      "text": "종합정책학과",
      "status": "official"
    },
    "facultyGuide.faculties.policy.departments.policy-policy.text": {
      "ja": "「共生の社会」の構築をめざし、「自然環境」「社会・経済・技術システム」「言語・文化・思想」の3つの領域から、目標に合わせて科目を選んで学びます。",
      "text": "‘공생 사회’의 구축을 목표로 ‘자연환경’ ‘사회·경제·기술 시스템’ ‘언어·문화·사상’의 3개 영역에서 목표에 맞춰 과목을 골라 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-policy.courses.0.name": {
      "ja": "公共選択論",
      "text": "공공선택론",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-policy.courses.0.text": {
      "ja": "経済と政治・行政の関わりや、政策が決まるしくみを公共選択論の考え方から理解します。",
      "text": "경제와 정치·행정의 관계와 정책이 결정되는 구조를 공공선택론의 관점에서 이해합니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-policy.courses.1.name": {
      "ja": "環境政策論",
      "text": "환경정책론",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-policy.courses.1.text": {
      "ja": "環境政策の歴史や課題を学び、分析・考察・提案する力を身につけます。",
      "text": "환경 정책의 역사와 과제를 배우고 분석·고찰·제안하는 힘을 기릅니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-policy.courses.2.name": {
      "ja": "公共政策課題研究A【国際貿易の発展と税関】",
      "text": "공공정책과제연구A【국제무역의 발전과 세관】",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-policy.courses.2.text": {
      "ja": "税関の手続きや関連する政策を、神戸税関の職員などを講師に迎えて学びます。",
      "text": "고베 세관 직원 등을 강사로 맞아 세관 절차와 관련 정책을 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-media.name": {
      "ja": "メディア情報学科",
      "text": "미디어정보학과",
      "status": "official"
    },
    "facultyGuide.faculties.policy.departments.policy-media.text": {
      "ja": "人にやさしい豊かな情報社会の実現に向けて、知識や技術、政策を立てる力を身につけ、解決策を映像・メディアとして社会に発信することを学びます。",
      "text": "사람에게 친화적인 풍요로운 정보 사회의 실현을 위해 지식과 기술, 정책을 세우는 힘을 기르고, 해결책을 영상·미디어로 사회에 발신하는 것을 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-media.courses.0.name": {
      "ja": "メディア制作演習（シミュレーション）",
      "text": "미디어제작연습(시뮬레이션)",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-media.courses.0.text": {
      "ja": "Pythonプログラミングの基本を学び、ドローンの飛行を制御するプログラムを作ります。",
      "text": "Python 프로그래밍의 기본을 배우고 드론 비행을 제어하는 프로그램을 만듭니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-media.courses.1.name": {
      "ja": "メディア制作演習（映像表現）",
      "text": "미디어제작연습(영상표현)",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-media.courses.1.text": {
      "ja": "デジタル一眼カメラでの撮影や編集を通じて、映像による政策提言をめざします。",
      "text": "디지털 일안 카메라 촬영과 편집을 통해 영상을 통한 정책 제언을 목표로 합니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-media.courses.2.name": {
      "ja": "メディア情報課題研究",
      "text": "미디어정보과제연구",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-media.courses.2.text": {
      "ja": "学術研究のためのコミュニケーション力や批判的思考力を育てます。",
      "text": "학술 연구를 위한 커뮤니케이션 능력과 비판적 사고력을 기릅니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-urban.name": {
      "ja": "都市政策学科",
      "text": "도시정책학과",
      "status": "official"
    },
    "facultyGuide.faculties.policy.departments.policy-urban.text": {
      "ja": "市民・企業・行政が協働できる都市空間の創造をめざし、政治学・経済学・経営学・都市科学を組み合わせて政策提言に取り組みます。",
      "text": "시민·기업·행정이 협동할 수 있는 도시 공간의 창조를 목표로 정치학·경제학·경영학·도시과학을 조합하여 정책 제언에 힘씁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-urban.courses.0.name": {
      "ja": "ベンチャー経営論",
      "text": "벤처경영론",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-urban.courses.0.text": {
      "ja": "起業に関する基本的な知識や考え方を体系的に学びます。",
      "text": "창업에 관한 기본 지식과 사고방식을 체계적으로 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-urban.courses.1.name": {
      "ja": "都市政策課題研究B【JAL連携講座】",
      "text": "도시정책과제연구B【JAL 연계 강좌】",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-urban.courses.1.text": {
      "ja": "航空業界やエアラインのビジネス戦略について学びます。",
      "text": "항공 업계와 항공사의 비즈니스 전략에 대해 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-urban.courses.2.name": {
      "ja": "政策コンサルティング演習",
      "text": "정책컨설팅연습",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-urban.courses.2.text": {
      "ja": "経済の課題を統計的に分析し、財務省の政策担当者に直接政策提言を行います。",
      "text": "경제 과제를 통계적으로 분석하고 재무성 정책 담당자에게 직접 정책을 제언합니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-international.name": {
      "ja": "国際政策学科",
      "text": "국제정책학과",
      "status": "official"
    },
    "facultyGuide.faculties.policy.departments.policy-international.text": {
      "ja": "国連の「持続可能な開発目標（SDGs）」を念頭に、国際社会の課題を解決に導き、より良い国際社会の実現をめざして学びます。",
      "text": "유엔의 ‘지속가능발전목표(SDGs)’를 염두에 두고, 국제 사회의 과제를 해결로 이끌어 더 나은 국제 사회의 실현을 목표로 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-international.courses.0.name": {
      "ja": "国際発展政策",
      "text": "국제발전정책",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-international.courses.0.text": {
      "ja": "発展途上国の課題と開発政策の基本を学びます。",
      "text": "개발도상국의 과제와 개발 정책의 기본을 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-international.courses.1.name": {
      "ja": "国際協力論",
      "text": "국제협력론",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-international.courses.1.text": {
      "ja": "第二次世界大戦後の国際協力の歴史を学び、これからの国際協力のあり方を考えます。",
      "text": "제2차 세계대전 이후 국제 협력의 역사를 배우고, 앞으로의 국제 협력의 바람직한 모습을 생각합니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-international.courses.2.name": {
      "ja": "外交政策",
      "text": "외교정책",
      "status": "provisional"
    },
    "facultyGuide.faculties.policy.departments.policy-international.courses.2.text": {
      "ja": "外交の歴史や今日の外交政策、日本外交について基本的な理解を深めます。",
      "text": "외교의 역사와 오늘날의 외교 정책, 일본 외교에 대한 기본적인 이해를 깊게 합니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.study.curriculum.year": {
      "ja": "2025年度以降入学生用など（大学学則の別表）",
      "text": "2025년도 이후 입학생용 등(대학 학칙 별표)",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.study.model.year": {
      "ja": "資料に記載なし",
      "text": "자료에 기재 없음",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.name": {
      "ja": "理学部",
      "text": "이학부",
      "status": "official"
    },
    "facultyGuide.faculties.science.lead": {
      "ja": "自然や科学の法則を理解し、新たな真理を追究する力を育む学部です。",
      "text": "자연과 과학의 법칙을 이해하고 새로운 진리를 추구하는 힘을 기르는 학부입니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.fields": {
      "ja": "数学・物理学・宇宙物理学・化学を、3つの学科で学びます。物理・宇宙学科には、宇宙物理学の主要3分野（電波天文学・赤外線天文学・X線天文学）がそろっています。",
      "text": "수학·물리학·우주물리학·화학을 3개 학과에서 배웁니다. 물리·우주학과에는 우주물리학의 주요 3분야(전파천문학·적외선천문학·X선천문학)가 갖춰져 있습니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-math.study.curriculum.year": {
      "ja": "資料に記載なし",
      "text": "자료에 기재 없음",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-math.name": {
      "ja": "数理科学科",
      "text": "수리과학과",
      "status": "official"
    },
    "facultyGuide.faculties.science.departments.science-math.text": {
      "ja": "基礎数学から応用数理までを幅広く学びます。データサイエンスや確率過程、統計・アクチュアリーに関わる手法も扱います。",
      "text": "기초 수학부터 응용 수리까지 폭넓게 배웁니다. 데이터 사이언스와 확률 과정, 통계·보험계리에 관한 기법도 다룹니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-math.courses.0.name": {
      "ja": "線形代数I",
      "text": "선형대수 I",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-math.courses.0.year": {
      "ja": "1年次",
      "text": "1학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-math.courses.0.text": {
      "ja": "ベクトルと行列の理論の基礎を学びます。",
      "text": "벡터와 행렬 이론의 기초를 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-math.courses.1.name": {
      "ja": "応用数理入門",
      "text": "응용수리입문",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-math.courses.1.year": {
      "ja": "2年次",
      "text": "2학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-math.courses.1.text": {
      "ja": "これまでに学んだ数学を活用し、身の回りの現象を数理的に捉えます。",
      "text": "지금까지 배운 수학을 활용해 주변 현상을 수리적으로 파악합니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-math.courses.2.name": {
      "ja": "数理科学演習",
      "text": "수리과학연습",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-math.courses.2.year": {
      "ja": "3・4年次",
      "text": "3·4학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-math.courses.2.text": {
      "ja": "自然・生命・社会現象の数理モデルや、代数学・時系列分析などの基礎理論を学びます。",
      "text": "자연·생명·사회 현상의 수리 모델과 대수학·시계열 분석 등의 기초 이론을 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-physics.name": {
      "ja": "物理・宇宙学科",
      "text": "물리・우주학과",
      "status": "official"
    },
    "facultyGuide.faculties.science.departments.science-physics.text": {
      "ja": "理論・実験・観測を通じて、物理学の未解決問題と宇宙の謎に迫ります。",
      "text": "이론·실험·관측을 통해 물리학의 미해결 문제와 우주의 수수께끼에 다가갑니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-physics.courses.0.name": {
      "ja": "力学Ⅰ",
      "text": "역학 I",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-physics.courses.0.year": {
      "ja": "1年次",
      "text": "1학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-physics.courses.0.text": {
      "ja": "古典力学の基礎概念を理解し、運動方程式の解き方を学びます。",
      "text": "고전역학의 기초 개념을 이해하고 운동방정식을 푸는 방법을 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-physics.courses.1.name": {
      "ja": "基礎物理学実験I",
      "text": "기초물리학실험 I",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-physics.courses.1.year": {
      "ja": "2年次",
      "text": "2학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-physics.courses.1.text": {
      "ja": "基礎的な実験や測定を行い、物理現象と物理法則の関係を深く理解します。",
      "text": "기초적인 실험과 측정을 하며 물리 현상과 물리 법칙의 관계를 깊이 이해합니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-physics.courses.2.name": {
      "ja": "宇宙物理学",
      "text": "우주물리학",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-physics.courses.2.year": {
      "ja": "3・4年次",
      "text": "3·4학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-physics.courses.2.text": {
      "ja": "物理学の基本法則を使って、天体や宇宙の構造と進化を理解します。",
      "text": "물리학의 기본 법칙을 사용해 천체와 우주의 구조와 진화를 이해합니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-chemistry.study.curriculum.year": {
      "ja": "資料に記載なし",
      "text": "자료에 기재 없음",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-chemistry.name": {
      "ja": "化学科",
      "text": "화학과",
      "status": "official"
    },
    "facultyGuide.faculties.science.departments.science-chemistry.text": {
      "ja": "原子・分子のレベルから物質を理解します。物質の構造・機能とその原理を解明する「分析・物理化学系」と、化学反応で機能性物質を創りだす「無機・有機化学系」の2分野があります。",
      "text": "원자·분자 수준에서 물질을 이해합니다. 물질의 구조·기능과 그 원리를 해명하는 ‘분석·물리화학계’와 화학 반응으로 기능성 물질을 만들어 내는 ‘무기·유기화학계’의 2개 분야가 있습니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-chemistry.courses.0.name": {
      "ja": "基礎化学実験I",
      "text": "기초화학실험 I",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-chemistry.courses.0.year": {
      "ja": "1年次",
      "text": "1학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-chemistry.courses.0.text": {
      "ja": "有機・無機化合物を使った実験で、基本的な測定や操作を身につけます。",
      "text": "유기·무기 화합물을 사용한 실험으로 기본적인 측정과 조작을 익힙니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-chemistry.courses.1.name": {
      "ja": "分析化学I",
      "text": "분석화학 I",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-chemistry.courses.1.year": {
      "ja": "2年次",
      "text": "2학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-chemistry.courses.1.text": {
      "ja": "試料の調製や分析操作を学び、重量分析・容量分析の方法を理解します。",
      "text": "시료 조제와 분석 조작을 배우고 중량 분석·용량 분석 방법을 이해합니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-chemistry.courses.2.name": {
      "ja": "有機化学実験",
      "text": "유기화학실험",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-chemistry.courses.2.year": {
      "ja": "3・4年次",
      "text": "3·4학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.science.departments.science-chemistry.courses.2.text": {
      "ja": "有機合成の研究に必要な基本操作や技術を身につけます。",
      "text": "유기 합성 연구에 필요한 기본 조작과 기술을 익힙니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.study.curriculum.year": {
      "ja": "2025年度以降入学生用など（大学学則の別表）",
      "text": "2025년도 이후 입학생용 등(대학 학칙 별표)",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.study.model.year": {
      "ja": "資料に記載なし",
      "text": "자료에 기재 없음",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.name": {
      "ja": "工学部",
      "text": "공학부",
      "status": "official"
    },
    "facultyGuide.faculties.engineering.lead": {
      "ja": "学科の代わりに「課程制」を取り入れ、分野を横断したカリキュラムで、複雑化する社会の課題を解決できる力を身につける学部です。",
      "text": "학과 대신 ‘과정제’를 도입하여, 분야를 아우르는 커리큘럼으로 복잡해지는 사회 과제를 해결할 수 있는 힘을 기르는 학부입니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.fields": {
      "ja": "物質科学・電気電子工学・情報科学・人間・機械系の4分野を、4つの課程で学びます。",
      "text": "물질과학·전기전자공학·정보과학·인간·기계계의 4개 분야를 4개 과정에서 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-materials.study.curriculum.year": {
      "ja": "資料に記載なし",
      "text": "자료에 기재 없음",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-materials.name": {
      "ja": "物質工学課程",
      "text": "물질공학 과정",
      "status": "official"
    },
    "facultyGuide.faculties.engineering.departments.engineering-materials.text": {
      "ja": "「創エネ」「蓄エネ」「省エネ」の3つの観点から物質科学をとらえ、新しい物質を生み出すための基礎から実践までを、物理と化学の両面から学びます。",
      "text": "‘에너지 창출’ ‘에너지 저장’ ‘에너지 절약’의 3가지 관점에서 물질과학을 파악하고, 새로운 물질을 만들어 내기 위한 기초부터 실천까지를 물리와 화학 양면에서 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-materials.courses.0.name": {
      "ja": "先進エネルギーナノ工学詳論",
      "text": "선진에너지나노공학상론",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-materials.courses.0.text": {
      "ja": "エネルギーを「創る」「蓄える」「運ぶ」「使う」に関わる最先端の研究内容を学び、教員の研究テーマの内容と意義を理解します。",
      "text": "에너지를 ‘만들다’ ‘저장하다’ ‘옮기다’ ‘쓰다’와 관련된 최첨단 연구 내용을 배우고, 교원의 연구 주제의 내용과 의의를 이해합니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-materials.courses.1.name": {
      "ja": "物質工学概論",
      "text": "물질공학개론",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-materials.courses.2.name": {
      "ja": "ものづくり理工学実験1",
      "text": "모노즈쿠리 이공학실험 1",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-materials.courseNote": {
      "ja": "物質工学概論・ものづくり理工学実験1は、公式サイトには科目名のみ掲載されているため、内容の説明は載せていません。",
      "text": "물질공학개론·모노즈쿠리 이공학실험 1은 공식 사이트에 과목명만 게재되어 있어 내용 설명은 싣지 않았습니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-electrical.study.curriculum.year": {
      "ja": "資料に記載なし",
      "text": "자료에 기재 없음",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-electrical.name": {
      "ja": "電気電子応用工学課程",
      "text": "전기전자 응용공학 과정",
      "status": "official"
    },
    "facultyGuide.faculties.engineering.departments.engineering-electrical.text": {
      "ja": "次世代モビリティーなどで使われる動力機器や情報通信機器、エネルギーの輸送・変換機器の基盤となる、電気エネルギーの有効利用について学びます。",
      "text": "차세대 모빌리티 등에 사용되는 동력 기기와 정보통신 기기, 에너지 수송·변환 기기의 기반이 되는 전기 에너지의 효율적 이용에 대해 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-electrical.courses.0.name": {
      "ja": "基礎電気電子実験",
      "text": "기초전기전자실험",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-electrical.courses.0.text": {
      "ja": "1年次から電気電子工学の基礎を実践的に身につけます。",
      "text": "1학년부터 전기전자공학의 기초를 실천적으로 익힙니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-electrical.courses.1.name": {
      "ja": "電気電子ものづくり実験",
      "text": "전기전자 모노즈쿠리 실험",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-electrical.courses.1.text": {
      "ja": "省電力パワーエレクトロニクスの要素技術を体験的に学ぶ実験科目です。",
      "text": "절전형 파워 일렉트로닉스의 요소 기술을 체험적으로 배우는 실험 과목입니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-electrical.courses.2.name": {
      "ja": "電気電子計測実験",
      "text": "전기전자계측실험",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-electrical.courses.2.text": {
      "ja": "電気電子工学の基盤となる計測技術に関わる実験科目です。",
      "text": "전기전자공학의 기반이 되는 계측 기술에 관한 실험 과목입니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-informatics.study.curriculum.year": {
      "ja": "2025年度以降入学生用",
      "text": "2025년도 이후 입학생용",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-informatics.name": {
      "ja": "情報工学課程",
      "text": "정보공학 과정",
      "status": "official"
    },
    "facultyGuide.faculties.engineering.departments.engineering-informatics.text": {
      "ja": "ハードウェア・ソフトウェア・ネットワークなどITの基盤となる専門知識に加え、AIやデータマイニング、コンピュータグラフィックス（CG）などの技術を学びます。",
      "text": "하드웨어·소프트웨어·네트워크 등 IT의 기반이 되는 전문 지식에 더해 AI와 데이터 마이닝, 컴퓨터 그래픽스(CG) 등의 기술을 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-informatics.courses.0.name": {
      "ja": "情報工学概論",
      "text": "정보공학개론",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-informatics.courses.1.name": {
      "ja": "データ構造とアルゴリズム",
      "text": "데이터 구조와 알고리즘",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-informatics.courses.2.name": {
      "ja": "コンピュータグラフィックス",
      "text": "컴퓨터 그래픽스",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-informatics.courseNote": {
      "ja": "公式サイトには科目名のみ掲載されているため、内容の説明は載せていません。",
      "text": "공식 사이트에 과목명만 게재되어 있어 내용 설명은 싣지 않았습니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-mechanical.study.curriculum.year": {
      "ja": "2025年度以降入学生用・2021年度以降入学生用",
      "text": "2025년도 이후 입학생용·2021년도 이후 입학생용",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-mechanical.name": {
      "ja": "知能・機械工学課程",
      "text": "지능・기계공학 과정",
      "status": "official"
    },
    "facultyGuide.faculties.engineering.departments.engineering-mechanical.text": {
      "ja": "人工知能と機械工学の基礎から、機械システムを知能化するための幅広い知識・技術を学びます。",
      "text": "인공지능과 기계공학의 기초부터 기계 시스템을 지능화하기 위한 폭넓은 지식·기술을 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-mechanical.courses.0.name": {
      "ja": "知能・機械工学概論",
      "text": "지능·기계공학개론",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-mechanical.courses.1.name": {
      "ja": "人工知能基礎",
      "text": "인공지능기초",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-mechanical.courses.2.name": {
      "ja": "ロボティクス",
      "text": "로보틱스",
      "status": "provisional"
    },
    "facultyGuide.faculties.engineering.departments.engineering-mechanical.courseNote": {
      "ja": "公式サイトには科目名のみ掲載されているため、内容の説明は載せていません。",
      "text": "공식 사이트에 과목명만 게재되어 있어 내용 설명은 싣지 않았습니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.study.curriculum.year": {
      "ja": "2025年度以降入学生用など（大学学則の別表）",
      "text": "2025년도 이후 입학생용 등(대학 학칙 별표)",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.study.model.year": {
      "ja": "資料に記載なし",
      "text": "자료에 기재 없음",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.name": {
      "ja": "生命環境学部",
      "text": "생명환경학부",
      "status": "official"
    },
    "facultyGuide.faculties.bes.lead": {
      "ja": "環境・食糧・健康など、現代社会の課題の解決に挑む力を身につける学部です。実験科学とデータサイエンスを活かした教育・研究に取り組んでいます。",
      "text": "환경·식량·건강 등 현대 사회의 과제 해결에 도전하는 힘을 기르는 학부입니다. 실험과학과 데이터 사이언스를 활용한 교육·연구에 힘쓰고 있습니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.fields": {
      "ja": "生物科学・生命医科学・環境応用化学を、3つの学科で学びます。",
      "text": "생물과학·생명의과학·환경응용화학을 3개 학과에서 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biology.study.curriculum.year": {
      "ja": "資料に記載なし",
      "text": "자료에 기재 없음",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biology.name": {
      "ja": "生物科学科",
      "text": "생물과학과",
      "status": "official"
    },
    "facultyGuide.faculties.bes.departments.bes-biology.text": {
      "ja": "地球上の多様な生物について学び、その活用の可能性を探ります。植物昆虫科学・応用微生物学・計算生物学の3つの専攻があります。",
      "text": "지구상의 다양한 생물에 대해 배우고 그 활용 가능성을 탐구합니다. 식물곤충과학·응용미생물학·계산생물학의 3개 전공이 있습니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biology.courses.0.name": {
      "ja": "生命科学I",
      "text": "생명과학 I",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biology.courses.0.year": {
      "ja": "1年次",
      "text": "1학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biology.courses.0.text": {
      "ja": "高校生物の基礎から始め、DNAからRNA、タンパク質への流れや遺伝子操作技術の原理までを学びます。",
      "text": "고등학교 생물의 기초에서 시작해 DNA에서 RNA, 단백질로 이어지는 흐름과 유전자 조작 기술의 원리까지 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biology.courses.1.name": {
      "ja": "細胞・組織学実験",
      "text": "세포·조직학실험",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biology.courses.1.year": {
      "ja": "2年次",
      "text": "2학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biology.courses.1.text": {
      "ja": "細胞や組織を扱うための基本技術を身につけます。",
      "text": "세포와 조직을 다루기 위한 기본 기술을 익힙니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biology.courses.2.name": {
      "ja": "先端生命科学実験Ⅰ",
      "text": "첨단생명과학실험 I",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biology.courses.2.year": {
      "ja": "3・4年次",
      "text": "3·4학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biology.courses.2.text": {
      "ja": "卒業研究の前に必要な実験手法や、研究の基本的な考え方を身につけます。",
      "text": "졸업 연구 전에 필요한 실험 기법과 연구의 기본적인 사고방식을 익힙니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biomedical.study.curriculum.year": {
      "ja": "資料に記載なし",
      "text": "자료에 기재 없음",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biomedical.name": {
      "ja": "生命医科学科",
      "text": "생명의과학과",
      "status": "official"
    },
    "facultyGuide.faculties.bes.departments.bes-biomedical.text": {
      "ja": "ヒトを含む哺乳動物の生命現象を解明し、基礎医学分野に応用することで、病気の治療や健康の維持に役立てることをめざします。発生再生医科学・生命医科学・医工学の3つの専攻があります。",
      "text": "인간을 포함한 포유동물의 생명 현상을 해명하고 기초의학 분야에 응용함으로써 질병 치료와 건강 유지에 도움이 되는 것을 목표로 합니다. 발생재생의과학·생명의과학·의공학의 3개 전공이 있습니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biomedical.courses.0.name": {
      "ja": "医科学入門A",
      "text": "의과학입문 A",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biomedical.courses.0.year": {
      "ja": "1年次",
      "text": "1학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biomedical.courses.0.text": {
      "ja": "専門科目を学ぶために必要な生命科学の基礎を、遺伝学・発生学・化学・光学技術など多角的な視点から学びます。",
      "text": "전문 과목을 배우기 위해 필요한 생명과학의 기초를 유전학·발생학·화학·광학 기술 등 다각적인 관점에서 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biomedical.courses.1.name": {
      "ja": "基礎医科学実験Ⅰ",
      "text": "기초의과학실험 I",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biomedical.courses.1.year": {
      "ja": "2年次",
      "text": "2학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biomedical.courses.1.text": {
      "ja": "生命現象を分子レベルで解析するための基本的な技術や知識を身につけます。",
      "text": "생명 현상을 분자 수준에서 분석하기 위한 기본적인 기술과 지식을 익힙니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biomedical.courses.2.name": {
      "ja": "先端医科学実験Ⅰ",
      "text": "첨단의과학실험 I",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biomedical.courses.2.year": {
      "ja": "3・4年次",
      "text": "3·4학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-biomedical.courses.2.text": {
      "ja": "卒業研究の前に必要な実験手法や、実験計画の立て方・考え方を学びます。",
      "text": "졸업 연구 전에 필요한 실험 기법과 실험 계획을 세우는 방법·사고방식을 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-chemistry.name": {
      "ja": "環境応用化学科",
      "text": "환경응용화학과",
      "status": "official"
    },
    "facultyGuide.faculties.bes.departments.bes-chemistry.text": {
      "ja": "化学の基礎をしっかり学び、環境問題に取り組むための基礎的な力を身につけます。物質創生系・機能探索系・環境分析・地球化学系の3つの分野があります。",
      "text": "화학의 기초를 착실히 배우고 환경 문제에 대처하기 위한 기초적인 힘을 기릅니다. 물질창생계·기능탐색계·환경분석·지구화학계의 3개 분야가 있습니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-chemistry.courses.0.name": {
      "ja": "基礎化学実験Ⅰ",
      "text": "기초화학실험 I",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-chemistry.courses.0.year": {
      "ja": "1年次",
      "text": "1학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-chemistry.courses.0.text": {
      "ja": "無機分析化学・物理化学・有機化学の3分野の実験を通じて、化学の基本概念を体験的に理解します。",
      "text": "무기분석화학·물리화학·유기화학의 3개 분야 실험을 통해 화학의 기본 개념을 체험적으로 이해합니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-chemistry.courses.1.name": {
      "ja": "地球環境化学",
      "text": "지구환경화학",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-chemistry.courses.1.year": {
      "ja": "2年次",
      "text": "2학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-chemistry.courses.1.text": {
      "ja": "大気・海洋・陸域での水の循環を、化学平衡論や反応速度論の基礎を使って学びます。",
      "text": "대기·해양·육역에서의 물의 순환을 화학평형론과 반응속도론의 기초를 사용해 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-chemistry.courses.2.name": {
      "ja": "環境応用化学実験I",
      "text": "환경응용화학실험 I",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-chemistry.courses.2.year": {
      "ja": "3・4年次",
      "text": "3·4학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.bes.departments.bes-chemistry.courses.2.text": {
      "ja": "環境分析・地球化学・無機・物理・有機・高分子化学にわたって、分析・合成・分離・データ処理の基本的な方法を学びます。",
      "text": "환경분석·지구화학·무기·물리·유기·고분자화학에 걸쳐 분석·합성·분리·데이터 처리의 기본적인 방법을 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.study.curriculum.year": {
      "ja": "資料に記載なし",
      "text": "자료에 기재 없음",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.study.model.year": {
      "ja": "資料に記載なし",
      "text": "자료에 기재 없음",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.name": {
      "ja": "建築学部",
      "text": "건축학부",
      "status": "official"
    },
    "facultyGuide.faculties.architecture.lead": {
      "ja": "グローバルな視野で建築と都市の未来を創造し、建築学で社会課題の解決をめざす学部です。",
      "text": "글로벌한 시야로 건축과 도시의 미래를 창조하고, 건축학으로 사회 과제의 해결을 목표로 하는 학부입니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.fields": {
      "ja": "一級建築士をめざす教育を基本に、都市デザインや都市計画の科目も学べます。「デザインとマネジメント」「工学と人文社会科学」「グローバルとフィールド」の3つを重視しています。",
      "text": "1급 건축사를 목표로 하는 교육을 기본으로 도시 디자인과 도시 계획 과목도 배울 수 있습니다. ‘디자인과 매니지먼트’ ‘공학과 인문사회과학’ ‘글로벌과 필드’의 3가지를 중시합니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.departments.architecture-architecture.name": {
      "ja": "建築学科",
      "text": "건축학과",
      "status": "official"
    },
    "facultyGuide.faculties.architecture.departments.architecture-architecture.text": {
      "ja": "設計や建設にとどまらず、建築の始まりから終わりまでを、工学とデザインを基盤に、マネジメントの視点も含めて学びます。",
      "text": "설계와 건설에 그치지 않고 건축의 시작부터 끝까지를 공학과 디자인을 기반으로 매니지먼트의 관점도 포함하여 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.departments.architecture-architecture.courses.0.name": {
      "ja": "建築・都市デザイン概論",
      "text": "건축·도시디자인개론",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.departments.architecture-architecture.courses.0.year": {
      "ja": "1年次",
      "text": "1학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.departments.architecture-architecture.courses.0.text": {
      "ja": "複数の専任教員によるオムニバス形式の講義で、建築や都市の多様性と魅力を学びます。",
      "text": "여러 전임 교원이 진행하는 옴니버스 형식의 강의로 건축과 도시의 다양성과 매력을 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.departments.architecture-architecture.courses.1.name": {
      "ja": "建築材料学実験",
      "text": "건축재료학실험",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.departments.architecture-architecture.courses.1.year": {
      "ja": "2年次",
      "text": "2학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.departments.architecture-architecture.courses.1.text": {
      "ja": "建築材料に直接触れる実験で力学的な性質を理解し、計測や統計処理の基本を学びます。",
      "text": "건축 재료를 직접 만지는 실험으로 역학적 성질을 이해하고 계측과 통계 처리의 기본을 배웁니다.",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.departments.architecture-architecture.courses.2.name": {
      "ja": "建築設計演習Ⅲ",
      "text": "건축설계연습 III",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.departments.architecture-architecture.courses.2.year": {
      "ja": "3・4年次",
      "text": "3·4학년",
      "status": "provisional"
    },
    "facultyGuide.faculties.architecture.departments.architecture-architecture.courses.2.text": {
      "ja": "美術館と交流施設の2つの課題に取り組む設計演習です。",
      "text": "미술관과 교류 시설의 2가지 과제에 임하는 설계 연습입니다.",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.0.tab": {
      "ja": "学部関連の学生団体",
      "text": "학부 관련 학생 단체",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.0.heading": {
      "ja": "学部関連の学生団体",
      "text": "학부 관련 학생 단체",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.0.features.0.meta": {
      "ja": "関係する学部：総合政策学部",
      "text": "관련 학부: 종합정책학부",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.0.features.0.text": {
      "ja": "SCS（Student and Campus Supporter）は、総合政策学部の学生団体です。新入生のサポートや、サークル紹介・オープンキャンパスの運営などに取り組んでいます。",
      "text": "SCS(Student and Campus Supporter)는 종합정책학부의 학생 단체입니다. 신입생 지원과 동아리 소개·오픈 캠퍼스 운영 등에 힘쓰고 있습니다.",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.0.features.0.link.label": {
      "ja": "活動について詳しく見る",
      "text": "활동 자세히 보기",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.0.features.1.meta": {
      "ja": "関係する学部：理学部・工学部・生命環境学部・建築学部",
      "text": "관련 학부: 이학부·공학부·생명환경학부·건축학부",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.0.features.1.text": {
      "ja": "Mainsは、神戸三田キャンパスの理系4学部の学生が集まる団体です。新入生のサポートや、オープンキャンパスの行事の企画・運営などに取り組んでいます。",
      "text": "Mains는 고베 산다 캠퍼스 이공계 4개 학부의 학생들이 모인 단체입니다. 신입생 지원과 오픈 캠퍼스 행사의 기획·운영 등에 힘쓰고 있습니다.",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.0.features.1.link.label": {
      "ja": "活動について詳しく見る",
      "text": "활동 자세히 보기",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.0.note": {
      "ja": "紹介文は、大学公式サイトの記事（総合政策学部ニュース、インタビューサイト）の内容をもとにしています（2026年11月確認）。",
      "text": "소개문은 대학 공식 사이트의 기사(종합정책학부 뉴스, 인터뷰 사이트) 내용을 바탕으로 했습니다(2026년 11월 확인).",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.tab": {
      "ja": "アカデミックコモンズ",
      "text": "아카데믹 커먼즈",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.heading": {
      "ja": "アカデミックコモンズ・プロジェクト",
      "text": "아카데믹 커먼즈 프로젝트",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.text": {
      "ja": "アカデミックコモンズでは、毎年春にアカデミックコモンズ・プロジェクトを募集・採択し、1年間の活動を支援しています。2026年度のプロジェクトは次の10件です。",
      "text": "아카데믹 커먼즈에서는 매년 봄에 아카데믹 커먼즈 프로젝트를 모집·채택하여 1년간의 활동을 지원합니다. 2026년도 프로젝트는 다음 10건입니다.",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.0.field": {
      "ja": "映像制作",
      "text": "영상 제작",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.1.field": {
      "ja": "プロジェクションマッピング",
      "text": "프로젝션 매핑",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.2.field": {
      "ja": "宇宙教育",
      "text": "우주 교육",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.3.name": {
      "ja": "Feel Learning～感学～",
      "text": "Feel Learning~感学~",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.3.field": {
      "ja": "プログラミング教育",
      "text": "프로그래밍 교육",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.4.field": {
      "ja": "価値循環",
      "text": "가치 순환",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.5.field": {
      "ja": "SDGs広報",
      "text": "SDGs 홍보",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.6.name": {
      "ja": "あ、みっけ！",
      "text": "아, 밋케!(あ、みっけ！)",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.6.field": {
      "ja": "三田の地域に関する活動",
      "text": "산다 지역에 관한 활동",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.7.field": {
      "ja": "保護犬・保護猫",
      "text": "보호견·보호묘",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.8.name": {
      "ja": "クレセントサイクリング",
      "text": "크레센트 사이클링",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.8.field": {
      "ja": "シェアサイクル",
      "text": "공유 자전거",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.9.name": {
      "ja": "関西学院AgriNOVA",
      "text": "간세이가쿠인 AgriNOVA",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.compact.9.field": {
      "ja": "スマート農業",
      "text": "스마트 농업",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.buttons.0.label": {
      "ja": "アカデミックコモンズ・プロジェクトを詳しく見る",
      "text": "아카데믹 커먼즈 프로젝트 자세히 보기",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.buttons.1.label": {
      "ja": "2026年度のプロジェクト一覧（大学公式）",
      "text": "2026년도 프로젝트 목록(대학 공식, 일본어)",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.1.note": {
      "ja": "プロジェクト名と活動分野は、大学公式サイト「2026年度 プロジェクト・活動実績」をもとにしています（2026年11月確認）。活動分野は概要を簡潔に表すための表記です。",
      "text": "프로젝트명과 활동 분야는 대학 공식 사이트 ‘2026년도 프로젝트·활동 실적’을 바탕으로 했습니다(2026년 11월 확인). 활동 분야는 개요를 간결하게 나타내기 위한 표기입니다.",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.2.tab": {
      "ja": "ボランティア・地域活動",
      "text": "봉사·지역 활동",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.2.heading": {
      "ja": "ボランティア・地域活動",
      "text": "봉사·지역 활동",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.2.features.0.name": {
      "ja": "KG-VNET（関西学院大学ボランティアネットワーク）",
      "text": "KG-VNET(간세이가쿠인 대학교 봉사 네트워크)",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.2.features.0.text": {
      "ja": "関西学院大学では、学生によるさまざまなボランティア活動が行われています。大学のボランティアネットワーク「KG-VNET」では、地域交流や子どもへの支援などに取り組む団体の情報を確認できます。",
      "text": "간세이가쿠인 대학교에서는 학생들의 다양한 봉사 활동이 이루어지고 있습니다. 대학의 봉사 네트워크 ‘KG-VNET’에서는 지역 교류와 어린이 지원 등에 힘쓰는 단체의 정보를 확인할 수 있습니다.",
      "status": "provisional"
    },
    "studentGroupDirectory.sections.2.features.0.link.label": {
      "ja": "ボランティア団体一覧を見る",
      "text": "봉사 단체 목록 보기(일본어)",
      "status": "provisional"
    },
    "clubDirectory.sections.0.tab": {
      "ja": "KSCのサークル",
      "text": "KSC 동아리",
      "status": "provisional"
    },
    "clubDirectory.sections.0.heading": {
      "ja": "神戸三田キャンパスのサークル",
      "text": "고베 산다 캠퍼스의 동아리",
      "status": "provisional"
    },
    "clubDirectory.sections.0.text": {
      "ja": "関西学院大学公式サイトで紹介されている、神戸三田キャンパスの大学登録団体（学生連盟に加盟していない同好会・サークル）です。",
      "text": "간세이가쿠인 대학교 공식 사이트에서 소개하는 고베 산다 캠퍼스의 대학 등록 단체(학생연맹에 가맹하지 않은 동호회·동아리)입니다.",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.0.label": {
      "ja": "スポーツ",
      "text": "스포츠",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.0.groups.0.name": {
      "ja": "バスケットボールK.G. Cagers",
      "text": "농구 K.G. Cagers",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.0.groups.1.name": {
      "ja": "合気道サークル",
      "text": "합기도 동아리",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.0.groups.2.name": {
      "ja": "軟式野球サークルSharks",
      "text": "연식야구 동아리 Sharks",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.0.groups.3.name": {
      "ja": "テニスサークル“K.G.WinG”",
      "text": "테니스 동아리 “K.G.WinG”",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.0.groups.4.name": {
      "ja": "サッカーサークル“フェルナンド”",
      "text": "축구 동아리 “페르난도”",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.0.groups.5.name": {
      "ja": "バレーボールサークル“ぱぁぷる”",
      "text": "배구 동아리 “파아푸루”",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.1.label": {
      "ja": "音楽・ダンス",
      "text": "음악·댄스",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.1.groups.0.name": {
      "ja": "関西学院室内合奏団",
      "text": "간세이가쿠인 실내합주단",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.1.groups.1.name": {
      "ja": "軽音サークル“DEEP STREAM”",
      "text": "경음악 동아리 “DEEP STREAM”",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.1.groups.2.name": {
      "ja": "ダンスサークルNey-Kid",
      "text": "댄스 동아리 Ney-Kid",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.1.groups.3.name": {
      "ja": "関学よさこい連 ”炎流”",
      "text": "간가쿠 요사코이렌 “엔류(炎流)”",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.1.groups.4.name": {
      "ja": "フラダンスサークルMahalo",
      "text": "훌라댄스 동아리 Mahalo",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.2.label": {
      "ja": "文化・社会活動",
      "text": "문화·사회 활동",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.2.groups.0.name": {
      "ja": "Eco-Habitat関西学院",
      "text": "Eco-Habitat 간세이가쿠인",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.2.groups.2.name": {
      "ja": "SSV関西学院",
      "text": "SSV 간세이가쿠인",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.2.groups.3.name": {
      "ja": "J-FUNユースK.G.",
      "text": "J-FUN 유스 K.G.",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.2.groups.4.name": {
      "ja": "都市研究会",
      "text": "도시연구회",
      "status": "provisional"
    },
    "clubDirectory.sections.0.categories.3.label": {
      "ja": "その他",
      "text": "기타",
      "status": "provisional"
    },
    "clubDirectory.sections.0.button.label": {
      "ja": "KSCのサークル一覧を見る",
      "text": "KSC 동아리 목록 보기(일본어)",
      "status": "provisional"
    },
    "clubDirectory.sections.0.note": {
      "ja": "カテゴリーは見やすくするためのこのサイト独自の分類で、大学公式の分類ではありません。団体名とリンクは、大学公式サイト「大学登録団体」の掲載内容（2026年11月確認）をもとにしています。",
      "text": "카테고리는 보기 쉽게 하기 위한 이 사이트 고유의 분류이며, 대학 공식 분류가 아닙니다. 단체명과 링크는 대학 공식 사이트 ‘대학 등록 단체’의 게재 내용(2026년 11월 확인)을 바탕으로 했습니다.",
      "status": "provisional"
    },
    "clubDirectory.sections.1.tab": {
      "ja": "体育会（運動部）",
      "text": "체육회(운동부)",
      "status": "provisional"
    },
    "clubDirectory.sections.1.heading": {
      "ja": "関西学院大学の体育会",
      "text": "간세이가쿠인 대학교 체육회",
      "status": "provisional"
    },
    "clubDirectory.sections.1.text": {
      "ja": "関西学院大学には、さまざまな競技の体育会所属団体があります。各部の活動内容や最新情報は、大学公式サイトから確認できます。",
      "text": "간세이가쿠인 대학교에는 다양한 종목의 체육회 소속 단체가 있습니다. 각 부의 활동 내용과 최신 정보는 대학 공식 사이트에서 확인할 수 있습니다.",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.label": {
      "ja": "球技",
      "text": "구기",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.0.name": {
      "ja": "庭球部",
      "text": "정구부(테니스)",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.0.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.1.name": {
      "ja": "ソフトテニス部",
      "text": "소프트테니스부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.2.name": {
      "ja": "卓球部",
      "text": "탁구부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.2.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.3.name": {
      "ja": "バドミントン部",
      "text": "배드민턴부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.3.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.4.name": {
      "ja": "硬式野球部",
      "text": "경식야구부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.4.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.5.name": {
      "ja": "硬式野球部（女子）",
      "text": "경식야구부(여자)",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.5.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.6.name": {
      "ja": "準硬式野球部",
      "text": "준경식야구부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.6.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.7.name": {
      "ja": "サッカー部",
      "text": "축구부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.7.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.8.name": {
      "ja": "ラグビー部",
      "text": "럭비부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.8.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.9.name": {
      "ja": "アメリカンフットボール部",
      "text": "미식축구부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.9.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.10.name": {
      "ja": "バレーボール部",
      "text": "배구부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.10.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.11.name": {
      "ja": "バスケットボール部",
      "text": "농구부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.11.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.12.name": {
      "ja": "ハンドボール部",
      "text": "핸드볼부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.12.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.13.name": {
      "ja": "陸上ホッケー部（男子）",
      "text": "필드하키부(남자)",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.13.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.14.name": {
      "ja": "陸上ホッケー部（女子）",
      "text": "필드하키부(여자)",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.14.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.15.name": {
      "ja": "ラクロス部（男子）",
      "text": "라크로스부(남자)",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.15.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.16.name": {
      "ja": "ラクロス部（女子）",
      "text": "라크로스부(여자)",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.16.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.17.name": {
      "ja": "ゴルフ部",
      "text": "골프부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.0.groups.17.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.label": {
      "ja": "武道・格闘技",
      "text": "무도·격투기",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.0.name": {
      "ja": "柔道部",
      "text": "유도부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.0.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.1.name": {
      "ja": "剣道部",
      "text": "검도부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.2.name": {
      "ja": "空手道部",
      "text": "가라테부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.3.name": {
      "ja": "合気道部",
      "text": "합기도부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.3.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.4.name": {
      "ja": "拳法部",
      "text": "권법부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.4.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.5.name": {
      "ja": "相撲部",
      "text": "스모부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.6.name": {
      "ja": "弓道部",
      "text": "궁도부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.6.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.7.name": {
      "ja": "ボクシング部",
      "text": "복싱부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.7.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.8.name": {
      "ja": "レスリング部",
      "text": "레슬링부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.8.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.9.name": {
      "ja": "フェンシング部",
      "text": "펜싱부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.1.groups.9.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.2.label": {
      "ja": "陸上・体操・個人競技",
      "text": "육상·체조·개인 종목",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.2.groups.0.name": {
      "ja": "陸上競技部",
      "text": "육상경기부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.2.groups.0.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.2.groups.1.name": {
      "ja": "体操部",
      "text": "체조부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.2.groups.1.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.2.groups.2.name": {
      "ja": "重量挙部",
      "text": "역도부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.2.groups.3.name": {
      "ja": "射撃部",
      "text": "사격부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.2.groups.3.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.2.groups.4.name": {
      "ja": "洋弓部",
      "text": "양궁부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.2.groups.4.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.label": {
      "ja": "水上・氷上・雪上",
      "text": "수상·빙상·설상",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.0.name": {
      "ja": "水上競技部（競泳パート）",
      "text": "수상경기부(경영 파트)",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.0.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.1.name": {
      "ja": "水上競技部（水球パート）",
      "text": "수상경기부(수구 파트)",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.1.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.2.name": {
      "ja": "ボート部",
      "text": "조정부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.2.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.3.name": {
      "ja": "ヨット部",
      "text": "요트부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.3.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.4.name": {
      "ja": "カヌー部",
      "text": "카누부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.4.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.5.name": {
      "ja": "スキー競技部",
      "text": "스키경기부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.5.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.6.name": {
      "ja": "スケート部",
      "text": "스케이트부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.6.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.7.name": {
      "ja": "アイスホッケー部",
      "text": "아이스하키부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.3.groups.7.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.4.label": {
      "ja": "アウトドア・その他",
      "text": "아웃도어·기타",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.4.groups.0.name": {
      "ja": "山岳部",
      "text": "산악부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.4.groups.1.name": {
      "ja": "ワンダーフォーゲル部",
      "text": "반더포겔부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.4.groups.2.name": {
      "ja": "馬術部",
      "text": "마술부(승마)",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.4.groups.2.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.4.groups.3.name": {
      "ja": "航空部",
      "text": "항공부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.4.groups.3.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.4.groups.4.name": {
      "ja": "自動車部",
      "text": "자동차부",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.4.groups.4.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.4.groups.5.name": {
      "ja": "編集部（関学スポーツ）",
      "text": "편집부(간가쿠 스포츠)",
      "status": "provisional"
    },
    "clubDirectory.sections.1.categories.4.groups.5.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.1.button.label": {
      "ja": "体育会の部活動一覧を見る",
      "text": "체육회 클럽 목록 보기(일본어)",
      "status": "provisional"
    },
    "clubDirectory.sections.1.note": {
      "ja": "※関西学院大学全体の部活動を紹介しています。すべての部が神戸三田キャンパスを活動拠点としているわけではありません。カテゴリーは見やすくするためのこのサイト独自の分類で、大学公式の分類ではありません。団体名とリンクは、大学公式サイト「体育会」の掲載内容（2026年11月確認）をもとにしています。",
      "text": "※간세이가쿠인 대학교 전체의 클럽 활동을 소개합니다. 모든 부가 고베 산다 캠퍼스를 활동 거점으로 하는 것은 아닙니다. 카테고리는 보기 쉽게 하기 위한 이 사이트 고유의 분류이며, 대학 공식 분류가 아닙니다. 단체명과 링크는 대학 공식 사이트 ‘체육회’의 게재 내용(2026년 11월 확인)을 바탕으로 했습니다.",
      "status": "provisional"
    },
    "clubDirectory.sections.2.tab": {
      "ja": "文化系の部活",
      "text": "문화계 클럽",
      "status": "provisional"
    },
    "clubDirectory.sections.2.heading": {
      "ja": "関西学院大学の文化総部",
      "text": "간세이가쿠인 대학교 문화총부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.text": {
      "ja": "関西学院大学には、音楽、芸術、研究活動など、さまざまな分野の文化系部活動があります。各部の詳細は大学公式サイトから確認できます。",
      "text": "간세이가쿠인 대학교에는 음악, 예술, 연구 활동 등 다양한 분야의 문화계 클럽이 있습니다. 각 부의 자세한 내용은 대학 공식 사이트에서 확인할 수 있습니다.",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.label": {
      "ja": "音楽",
      "text": "음악",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.0.name": {
      "ja": "関西学院グリークラブ",
      "text": "간세이가쿠인 글리클럽",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.0.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.1.name": {
      "ja": "混声合唱団エゴラド",
      "text": "혼성합창단 에고라도",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.1.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.2.name": {
      "ja": "関西学院交響楽団",
      "text": "간세이가쿠인 교향악단",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.2.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.3.name": {
      "ja": "マンドリンクラブ",
      "text": "만돌린 클럽",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.4.name": {
      "ja": "クラシックギタークラブ",
      "text": "클래식 기타 클럽",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.5.name": {
      "ja": "ハーモニカ・ソサイアティ",
      "text": "하모니카 소사이어티",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.5.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.6.name": {
      "ja": "軽音楽部",
      "text": "경음악부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.6.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.7.name": {
      "ja": "邦楽クラブ",
      "text": "일본 전통음악 클럽",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.7.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.0.groups.8.name": {
      "ja": "音楽研究部",
      "text": "음악연구부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.1.label": {
      "ja": "演劇・伝統芸能",
      "text": "연극·전통 예능",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.1.groups.0.name": {
      "ja": "劇研究部 劇団狸寝入",
      "text": "극연구부 극단 다누키네이리",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.1.groups.0.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.1.groups.1.name": {
      "ja": "能楽部",
      "text": "노가쿠부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.1.groups.1.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.1.groups.2.name": {
      "ja": "古典芸能研究部",
      "text": "고전예능연구부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.1.groups.2.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.1.groups.3.name": {
      "ja": "甲山落語研究会",
      "text": "가부토야마 라쿠고 연구회",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.1.groups.4.name": {
      "ja": "詩吟部吟月会",
      "text": "시긴부 긴게쓰카이",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.2.label": {
      "ja": "芸術・伝統文化",
      "text": "예술·전통 문화",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.2.groups.0.name": {
      "ja": "写真部",
      "text": "사진부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.2.groups.1.name": {
      "ja": "映画研究部",
      "text": "영화연구부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.2.groups.2.name": {
      "ja": "文芸部",
      "text": "문예부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.2.groups.3.name": {
      "ja": "絵画部弦月会",
      "text": "회화부 겐게쓰카이",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.2.groups.3.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.2.groups.4.name": {
      "ja": "書道部",
      "text": "서도부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.2.groups.5.name": {
      "ja": "茶道部",
      "text": "다도부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.2.groups.5.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.2.groups.6.name": {
      "ja": "煎茶道部",
      "text": "센차도부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.2.groups.7.name": {
      "ja": "いけばな部",
      "text": "이케바나부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.2.groups.7.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.3.label": {
      "ja": "学術・研究",
      "text": "학술·연구",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.3.groups.0.name": {
      "ja": "国際研究部",
      "text": "국제연구부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.3.groups.1.name": {
      "ja": "英語研究部（E.S.S.）",
      "text": "영어연구부(E.S.S.)",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.3.groups.2.name": {
      "ja": "関西学院ディベートクラブ",
      "text": "간세이가쿠인 디베이트 클럽",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.3.groups.3.name": {
      "ja": "ユネスコ研究部",
      "text": "유네스코연구부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.3.groups.3.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.3.groups.4.name": {
      "ja": "考古学研究会",
      "text": "고고학연구회",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.3.groups.5.name": {
      "ja": "古美術研究クラブ",
      "text": "고미술연구 클럽",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.3.groups.6.name": {
      "ja": "速記研究部",
      "text": "속기연구부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.3.groups.6.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.4.label": {
      "ja": "将棋・囲碁・その他",
      "text": "쇼기·바둑·기타",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.4.groups.0.name": {
      "ja": "将棋部",
      "text": "쇼기부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.4.groups.1.name": {
      "ja": "囲碁部",
      "text": "바둑부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.4.groups.1.links.0.label": {
      "ja": "公式サイト",
      "text": "공식 사이트",
      "status": "provisional"
    },
    "clubDirectory.sections.2.categories.4.groups.2.name": {
      "ja": "ユースホステル部",
      "text": "유스호스텔부",
      "status": "provisional"
    },
    "clubDirectory.sections.2.button.label": {
      "ja": "文化系の部活動一覧を見る",
      "text": "문화계 클럽 목록 보기(일본어)",
      "status": "provisional"
    },
    "clubDirectory.sections.2.note": {
      "ja": "※関西学院大学全体の部活動を紹介しています。すべての部が神戸三田キャンパスを活動拠点としているわけではありません。カテゴリーは見やすくするためのこのサイト独自の分類で、大学公式の分類ではありません。団体名とリンクは、大学公式サイト「文化総部」の掲載内容（2026年11月確認）をもとにしています。",
      "text": "※간세이가쿠인 대학교 전체의 클럽 활동을 소개합니다. 모든 부가 고베 산다 캠퍼스를 활동 거점으로 하는 것은 아닙니다. 카테고리는 보기 쉽게 하기 위한 이 사이트 고유의 분류이며, 대학 공식 분류가 아닙니다. 단체명과 링크는 대학 공식 사이트 ‘문화총부’의 게재 내용(2026년 11월 확인)을 바탕으로 했습니다.",
      "status": "provisional"
    },
    "circles.0.name": {
      "ja": "関学よさこい連「炎流」",
      "text": "간가쿠 요사코이렌 ‘엔류(炎流)’",
      "status": "provisional"
    },
    "circles.0.category": {
      "ja": "よさこい",
      "text": "요사코이",
      "status": "provisional"
    },
    "circles.0.summary": {
      "ja": "神戸三田キャンパスを拠点に活動するよさこいサークル。学外のイベントや新月祭などで演舞を披露しています。",
      "text": "고베 산다 캠퍼스를 거점으로 활동하는 요사코이 동아리. 학외 행사와 신게쓰 축제 등에서 연무를 선보이고 있습니다.",
      "status": "provisional"
    },
    "circles.0.videos.0.label": {
      "ja": "演舞動画を見る",
      "text": "연무 동영상 보기",
      "status": "provisional"
    },
    "circles.0.videos.0.caption": {
      "ja": "2025年3月「劇場版どまつり」での演舞です（新月祭の映像ではありません）。",
      "text": "2025년 3월 ‘극장판 도마쓰리’에서의 연무입니다(신게쓰 축제 영상이 아닙니다).",
      "status": "provisional"
    },
    "activities.shingetsusai.tag": {
      "ja": "大学祭",
      "text": "대학 축제",
      "status": "provisional"
    },
    "activities.shingetsusai.name": {
      "ja": "大学祭「新月祭」",
      "text": "대학 축제 ‘신게쓰 축제(新月祭)’",
      "status": "provisional"
    },
    "activities.shingetsusai.summary": {
      "ja": "学生が主体となって企画・運営する大学祭です。模擬店や学生団体による企画などが行われます。",
      "text": "학생이 주체가 되어 기획·운영하는 대학 축제입니다. 모의 점포와 학생 단체의 기획 등이 열립니다.",
      "status": "provisional"
    },
    "activities.shingetsusai.links.0.label": {
      "ja": "KSCのイベント（大学公式サイト）",
      "text": "KSC 행사(대학 공식 사이트)",
      "status": "provisional"
    },
    "activities.researchFair.name": {
      "ja": "リサーチ・フェア",
      "text": "리서치 페어",
      "status": "provisional"
    },
    "activities.researchFair.summary": {
      "ja": "総合政策学部の学生や大学院生などが、研究の成果を発表するイベントです。",
      "text": "종합정책학부 학생과 대학원생 등이 연구 성과를 발표하는 행사입니다.",
      "status": "provisional"
    },
    "activities.researchFair.video.title": {
      "ja": "リサーチ・フェアの動画",
      "text": "리서치 페어 동영상",
      "status": "provisional"
    },
    "activities.researchFair.links.0.label": {
      "ja": "KSCのイベント（大学公式サイト）",
      "text": "KSC 행사(대학 공식 사이트)",
      "status": "provisional"
    },
    "activities.researchFair.links.1.label": {
      "ja": "動画をYouTubeで見る",
      "text": "YouTube에서 동영상 보기",
      "status": "provisional"
    }
  }
});
