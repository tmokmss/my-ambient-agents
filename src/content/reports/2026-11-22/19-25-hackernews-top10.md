---
title: "Hacker News トップ10サマリー (2026-11-22 夜)"
date: "2026-11-22T19:25"
category: "summary"
summary: "膵臓がん経口薬の画期的成果、日本3社の部品標準化、サンドイッチ・シミュレーター、OpenAI のパープレキシティ論など"
tags: ["hackernews", "summary"]
---

## 1. [Pill to treat pancreatic cancer hailed as 'biggest breakthrough in decades'](https://www.theguardian.com/society/2026/nov/20/pill-pancreatic-cancer-breakthrough-daraxonrasib)

**Score:** 1288 | **Comments:** 274 | [Post](https://news.ycombinator.com/item?id=50582069)

転移性膵臓がん向けの経口 KRAS（RAS）阻害薬 daraxonrasib が「数十年で最大の進歩」と報じられた。記事本文は取得できなかったため、コメントから推測した要約になる。中央生存期間は化学療法の約6.6か月に対し約13.2か月とされる。

### Key Discussion Points

- **nik_s**: 一般には「約6か月→約13か月」は地味に見えるかもしれない。ただ、臨床試験は他の治療を使い果たした末期患者が対象になりがちで、実際の効果はもっと大きい可能性がある。
  - **porkloin**: 予後が比較的良い知人でも半年後に生きている保証がない。出産を控えるその人にとって、延命の価値は計り知れない。
  - **bscphil**: 中央値が倍になるなら、5年以上生存する患者の割合も増えるはずではないか、という疑問。
  - **FranOntanaya**: 診断後に身辺整理を急ぐ家族にとって、6か月と13か月の差は非常に大きい。
- **mft_**: 今回は誇張ではない。転移性膵臓がんには数十年、意味のある新治療がなく、KRAS 阻害薬の新世代は実際の診療を変える画期的成果だ。
  - **matteoraso**: 「数十年新薬なし」は不正確で、FOLFIRINOX が数年前に登場して生存期間と QOL を改善した。
  - **233mhz**: 他の情報源によれば中央生存期間は 13.2 か月対 6.6〜6.7 か月で、「誇張でない」とする根拠を尋ねている。
- **responder41**: RAS は細胞膜上のタンパク質で、増殖の開始・停止を切り替えている。多くのがんで変異して常時オンになるため、これを阻害する薬が重要になる。
- **tptacek**: 米国ニュースを追っている人には、元上院議員で UF 学長の Ben Sasse が受けている治療として知られる。
  - **openair18**: Sasse 氏のステージ4の膵臓がんがこの治療に耐性を獲得した、という NYT の記事を紹介。
- **brooke2k**: 薬名の接尾辞「-ib」に意味はあるのかという質問。
  - **atombender**: 「-ib」は阻害薬を意味し、WHO が定める語幹は「-rasib」（RAS 阻害薬）。他に COX 阻害薬の「-coxib」などがある。

## 2. [Toyota, Nissan, and Honda to standardize parts to lower costs](https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/)

**Score:** 1035 | **Comments:** 615 | [Post](https://news.ycombinator.com/item?id=50596133)

トヨタ・日産・ホンダが部品の標準化に着手する。Automotive News によると、まず鋼材の品質基準、プラスチック・樹脂の取り扱い基準、ワイヤーハーネスの配色の統一から始める。いずれも消費者の目に触れず、ブランドの個性に影響しにくい一方、コストの大きい領域だ。まず国内サプライヤーと協議し、取り組みは来年開始予定。将来は車全体の部品に広げる計画で、日本の自動車メーカー7社が関与する。

### Key Discussion Points

- **johnohara**: Ford と GM は 2002 年から GM–Ford 6速 AT を共同開発しており、同種の協業は前例がある。
  - **lelanthran**: エンジンや変速機の共有は以前から各社がやっていた。やっていなかったのは、見えにくい汎用部品の標準化だ。
- **wcfields**: 日本勢は BYD のように部品の 75〜85% を内製する中国勢に押されている。
  - **hn_submit**: 20年先の部品供給が不安なので、自分は中国製 EV を買わない。
  - **cloudbonsai**: 背景は地政学リスクによる日本メーカーのサプライチェーン逼迫（ホルムズ海峡危機など）で、中国勢対抗だけの話ではない。
  - **gniv**: 本質は部品ではなく、日本勢が EV で遅れていること。
- **jofzar**: 中国メーカーと競う唯一の道だろう。見出しは過小評価で、実際は日本の自動車メーカー7社全体の動きだ。
  - **jerlam**: 日産は赤字で工場閉鎖や車種整理を進め、ホンダも 1955 年以来初の通期赤字で EV の品揃えがない。
- **hn_submit**: EV のモーター、コントローラ、充電器、バッテリーは標準化され、オープンな規格が出てくる可能性がある。e-bike や電動スクーターにも同様の動きが必要だ。
- **steveBK123**: 財務難が続く日産に対する、コストをかけない間接的な救済策でもあるのではないか。

## 3. [Sandwich Simulator](https://stulle.app/)

**Score:** 491 | **Comments:** 170 | [Post](https://news.ycombinator.com/item?id=50594911)

ブラウザ上でパンにスプレッドを塗り、具材をドラッグして重ね、回転させ、写真として保存・共有できるドイツ語の「Stullensimulator」。写真を保存すると番号とリンクが付く。ページは JavaScript で描画されるため、取得できたのは操作説明の断片のみ。

### Key Discussion Points

- **kozar**: 自作の同種サイト「World's Best Sandwich」を紹介。
  - **goosejuice**: 選択肢の並びに、サンドイッチへの考え方が出ていて面白い。
  - **metadat**: 具材が積み上がると重くなる。
- **an3223**: 具材を積むとカメラが引くなど、細部の作り込みに感心した。
  - **zomg**: キュウリを積み続けるとカメラが引き、やがて具材がまな板に落ちる。
- **hleszek**: 上にパンを載せて完成させ、半分に切れるようにしてほしい。
  - **sltkr**: Stulle は本来オープンサンドを指し、上にもパンがあるものは Klappstulle と呼ぶ。
  - **anewhnaccount2**: オープンサンドは北欧・バルト諸国、北ドイツ、バスクでも標準的。
- **SamBam**: 公開写真の最初の数ページに、ナチスの鉤十字やヒトラーの絵、性器の絵がある。モデレーションが必要だ。
  - **greg0r**（stulle.app の作者を名乗っている）: 鉤十字やヒトラー絵は通常1時間以内に削除される。各ページの「Melden」から通報できるが、性器の絵は残る。
- **em-bee**: オーストリアが恋しい。中国など欧州外では入手しにくい具材がある。
  - **ricardobayes**: 「149 Scheiben Salami」を使った作品への驚き。

## 4. [Perplexity and Intelligence](https://openai.com/index/perplexity-and-intelligence/)

**Score:** 213 | **Comments:** 148 | [Post](https://news.ycombinator.com/item?id=50601525)

OpenAI の記事。パープレキシティが AI モデルの進歩をどう測るかと、新しい能力を評価するための共通の枠組みを作る助けになりうる理由を論じる（OpenAI の RSS の説明文による。本文は取得できていない）。コメントによれば、OpenAI の歴代モデルでパープレキシティの低下がきれいな傾向を示すグラフが載っている。

### Key Discussion Points

- **WASDx**: 能力向上の多くは事後学習の RL によるものだ。古いモデルに現代的な事後学習を施しても同じ値になるなら、有意義な指標とは言えない。
- **jrflo**: RL が主流になってもクロスエントロピー損失の傾向がここまできれいなのは驚きで、シンプルなベンチマークとして助かる。
  - **Marha01**: GPT-4.5 は CoT なしの巨大モデルで、推論コストが高く棚上げされたのだろう。
  - **croemer**: クロスエントロピーの低下は、本当に重要な何かの相関指標にすぎない可能性がある。
  - **Xcelerate**: 情報理論の観点では、クロスエントロピー（対数損失）は予測の良さを捉える最も純粋な指標に近い。
- **ACCount39**: グラフで GPT-4.5 だけが不連続点だ。CoT と RL の方が実世界の性能向上に効いたことになる。
- **tensor**: 特定のパープレキシティで能力が「創発」するという主張には懐疑的。数学特化の小型モデルは他分野で高パープレキシティになるはずだ。
  - **namr2000**: 数学特化モデルが汎用の大型モデルより上というのは、経験的には成り立たなかった。
  - **obblekk**: 測定データは学習分布外なので、低パープレキシティは領域横断的な知能の向上を示す。ただし能力には偏りもある。
- **thrw045**: LLM は知識を常に圧縮できているわけではない。信仰の話をすると説教師のように振る舞うなど、相手に合わせて反応が変わる。
  - **famouswaffles**: それは圧縮できていない証拠ではなく、文脈に合わせた予測の結果だという反論。

## 5. [Show HN: I built a game where you are an LLM's subagent](https://github.com/gulivan/worker755)

**Score:** 177 | **Comments:** 45 | [Post](https://news.ycombinator.com/item?id=50599762)

Worker 755 は、AI エージェントがマネージャーで、プレイヤーがそのサブエージェントになるブラウザゲーム。マネージャーは実際の LLM（Claude、GPT、Gemini、DeepSeek、GLM、Kimi）で、指示がターミナルに90秒の制限付きで届く。プレイヤーが実行し、報告とコマンドの記録が返ると、LLM が結果を確認して修正指示や評価を出す。ユーザー Dan の家族写真や NDA が `rm` 一つで失われかねない設定。

### Key Discussion Points

- **Seb0927**: 楽しいが、マネージャーが毎回正確なコマンドまで指示してしまい、自力で挑戦する選択肢が見つからなかった。
- **thehamkercat**: 全ファイルを `rm -rf` しようとして、ディレクターの反応を見るのが楽しい。
- **boricj**: ローカル LLM に対応していないようで、自宅サーバーで試したかった。
  - **aqme28**: オープンソースなのでローカルで動かせばよい。
  - **LoganDark**: LLM に対応を追加させればよい。
- **agileAlligator**: セキュリティの観点から作った同種のゲーム「You are the Model」を紹介。
  - **yunwal**: すべての要求を断るのが目的なのか、という質問。
- **croemer**: 出力形式が分かりにくい。マネージャーは全コマンドを読むのか、報告だけなのか。
  - **ivantgam**（投稿者）: マネージャーには報告と、そのターンに実行した全コマンドの記録の両方が渡される。

## 6. [Open Social Web Alliance](https://osw-alliance.net/en/)

**Score:** 154 | **Comments:** 156 | [Post](https://news.ycombinator.com/item?id=50600511)

メールのように、どのサービスのアカウントでも相互にやり取りできる標準プロトコルを軸にした、オープンなソーシャルウェブの構想。2028 年に1億人以上が Mastodon、Eurosky の Mu、Streamplace などの open social network でつながる未来像を描く。ActivityPub と AT Protocol（DM は Matrix）を基盤に、非営利・公共・商用のサービスが共存する分散インフラを目指す。政策提言書（PDF）も公開されている。

### Key Discussion Points

- **croemer**: 文章が装飾的で読みにくく、最初の画面にほとんど情報がない。
  - **bita_nidir**: 既存の SNS 企業から、ボットや資金による妨害を受けるだろう。
  - **rdiddly**: 「技術的に複雑に聞こえるかもしれない」という書き出しの時点で失敗するだろう。
- **tech_ken**: 巧みに設計したツールで民主主義を「修理」しようとする試みには冷めている。技術で解ける問題ではないと思う。
  - **wry_xy**: 問題の根は教育で、人間が論理でなく感情で反応することだ。
  - **intended**: 民主主義に直接効果があるのは、台湾の vTaiwan と Pol.is くらいだ。
  - **fishfasell**: 人間の問題で、コンピュータでは解けないという同意。
- **imoverclocked**: ソーシャルネットワークは分散していてよい。現実の関係も共通の関心ごとに閉じており、複数の網に属す個人がつないでいる。
  - **swed420**: 提案はフェデレーションを掲げるが、既存技術の何が問題か説明していない。Noema の記事を紹介。
- **fhdkweig**: 怒りや恐怖が収益化しやすいため、オープン化は儲からない。
  - **8organicbits**: 自分の経験では、人はいまも利他的に情報を共有しており、社交は別の場所でしている。
  - **samrus**: 現代の SNS は害を社会に外部化して利益を上げており、規制にも抵抗する。
- **adverbly**: ボットがいなく、投稿に頻度制限があり、アルゴリズムが滞在時間を最大化しないプラットフォームを待っている。
  - **bloopernova**: それは ATProto でできる。フィードはいつでも切り替えられる。
  - **numpad0**: 必要なのは文脈量の多い高帯域のプラットフォームだ。文脈が多いほどスパムは入り込みにくい。

## 7. [A Better Vocabulary for Testing](https://alperenkeles.com/posts/vocab-for-testing/)

**Score:** 63 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=50594182)

ソフトウェアテストの用語（単体・結合・E2E など）が曖昧で「雰囲気」に頼っていると指摘し、状況に応じてテストを格上げ・格下げできる、実用的な語彙を提案する記事。テストを5つの分類に整理する。その一つの「スコープ」は、関数・型・モジュール・システムという言語構成物の軸と、状態の有無の軸で捉える。著者が取り組むランダムテストに寄った内容。記事の日付は 2025-08-16。

### Key Discussion Points

- **ozim**: 「非機能テスト」は「横断的機能テスト」と呼ぶほうがよい。
- **jruohonen**: 機能・非機能の二分法が、最大の概念的な問題だ。
- **FabCH**: どんな分類でも、開発者は都合のよいテストを書く。実際に書かれているテストを調べた論文がある。
- **jerf**: テストの領域は連続的で明確な境界がない。ただ、点が固まって見える部分にはそれぞれ用語が付けられる。
- **g-b-r**: 本ごとに定義が違った。混乱の多くは、OOP で単体テストは全体のオブジェクトより小さくなければいけないと決めつけたことから生じた。

## 8. [I joined the NTP Pool, but not with my Stratum 1 Pi](https://www.jeffgeerling.com/blog/2026/i-joined-the-ntp-pool/)

**Score:** 59 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=50600622)

Jeff Geerling が NTP Pool に参加した。公開する Stratum 2 サーバーは、スタジオの GNSS 受信機付き Stratum 1 Pi（TimeHAT v6、u-blox ZED-F9T）から時刻を得る。参加には稼働の継続、正確な時刻、固定 IP と長期の約束が必要で、IP が公開され、トラフィックはなかなか減らない点に注意が必要と述べる。

### Key Discussion Points

- **Avamander**: Linux ベースの本格的な時刻サーバーなら FPGA ベースの選択肢が良い。x86 の PCIe PTM や TGPIO は ARM の GPIO 割り込みより優れ、Pi は時刻保持が苦手だ。
- **bityard**: VPS はプールに入れないと記憶していたが、確認できなかった。
- **lightswitch05**: 自分も Stratum 1 を運用している。安価な機器を複数置くと冗長性が得られ、NTPSec を使っている。
- **omoikane**: 記事内の写真で、上の壁掛け時計が下より10秒進んでいるのが気になる。
- **jeffrallen**: スイス連邦計量研究所 METAS の NTP サーバーが ntp{11,12,13}.metas.ch で公開されている。

## 9. [Inside PyPy: First Contact with RPython](https://bernsteinbear.com/blog/inside-pypy-first-contact-with-rpython/)

**Score:** 25 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=50562207)

Max Bernstein による、言語実装基盤 RPython の入門記事。RPython は Python 2 の制限付き方言で、コードを C へ変換し、メタトレーシングで JIT へ段階的に移行する。比較対象として、Truffle（Java の DSL、部分評価）と Deegen（C++ の DSL で Lua を再実装）を挙げる。

### Key Discussion Points

- **jbloggs777**: 記事冒頭の「良い実装言語がない」という悩みに対し、Nimony（Nim 3.0）を見てみてはどうかと提案。

## 10. ["A government that 'gets it'": Canada recommits to federal funding for news](https://www.niemanlab.org/2026/11/a-government-that-gets-it-canada-recommits-to-federal-funding-for-news/)

**Score:** 9 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50602847)

Nieman Lab の記事。カナダの 2026 年度予算案で、地方報道を支援する Local Journalism Initiative を恒久化し、資金を4年間で1億3400万ドルに増やす。ニュースルームの給与に対する35%の税額控除も延長する。支援は「非常に大きな違いを生む」と報じられている。

## Trends

- **AI の評価と体験**: パープレキシティで能力を測る議論（#4）と、人間が LLM の部下になるゲーム（#5）が並んだ。
- **産業の構造的な防衛**: 日本の自動車3社の標準化（#2）は、中国勢に対するコスト競争への対応として語られた。
- **オープン・分散のインフラ**: オープンソーシャルウェブ（#6）やNTP Pool（#8）のように、共有インフラを個人や団体で支える話題が目立った。
- **科学的ブレークスルー**: 膵臓がん薬（#1）は、期待と、中央値が示す生存の実態への冷静な見方が併存した。
- **用語と道具の整理**: テスト用語（#7）と RPython（#9）は、実装者が使う概念や道具を見直す内容だった。
