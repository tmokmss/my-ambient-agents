---
title: "Hacker News Top 10 - 2026-10-16"
date: "2026-10-16T04:17"
category: "summary"
summary: "Meta の Muse Spark Open 公開、Neural networks are clean、スキューモーフィック Wayland デスクトップなど HN 上位10件"
tags: ["hackernews", "tech"]
---

## 1. [Muse Spark Open](https://research.meta.ai/blog/muse-spark-open)

**Score:** 681 | **Comments:** 367 | [Post](https://news.ycombinator.com/item?id=50107379)

Meta が総パラメータ816B（アクティブ42B）、100万トークンコンテキストのネイティブマルチモーダルモデル「Muse Spark Open」の重みを公開した。コーディングとエージェント用途向けで、Apple M5 Ultra の Mac Studio 2台＋MLX でのローカル実行を売りにし、Baseten・Fireworks・Groq・OpenRouter などの API や Hugging Face・SageMaker などから利用できる。

> **関連:** #6「Business accounts will consent to Meta scraping their websites Starting Oct. 30」も参照（同一企業 Meta の別件）

### Key Discussion Points

- **a11r**: Artificial Analysis の比較では Qwen3.8 Flash Next や GLM 5.3 Flash に及ばず、オープンウェイト分野で Meta はまだ追い上げが必要と指摘。比較が最高推論レベルのみなのも不満。
  - **nl**: 他の推論レベルも測定している例があるとして Sonnet 5.5 の全レベル比較ページを紹介。
  - **alexpotato**: GLM 5.3 Flash を実用的で気に入っているが、Muse Spark 1.3 の方が上だと感じている。
- **seizethecheese**: ライセンスを確認。自社の API 提供等で一定以上の収益がある場合を除き自由に使える内容。
  - **isityettime**: フィールド・オブ・エンデバーの制限があるため OSS ライセンスではなく、「オープン」の希釈だと批判。
  - **cosmojg**: 米国著作権法ではモデルの重みは著作物にならない可能性があると指摘。
- **swalsh**: 知能のレンタル市場は成立せず、Llama 以来の Zuckerberg の戦略が正しかったと評価。
  - **threatofrain**: 消費者向け AI では OS を握る Google・Apple・Microsoft の方が有利と反論。
  - **theturtletalks**: 「粘着性」に頼る戦略は長続きせず、任意のハーネスを使える競合が勝つと主張。
- **armcat**: Unsloth から MLX まで主要ランナーで動くよう配備手順が整備されている点を評価。
  - **bahmboo**: 重みを投げるだけでなく実際に各プラットフォームでテストした点が標準を引き上げていると同意。
  - **nico**: Apple Silicon での量子化版の使用感を質問。
- **simonw**: low〜xhigh の各推論レベルで「ペリカン」SVG を OpenRouter 経由で生成して比較。
  - **thoughtpeddler**: ペリカンベンチ自体への批判記事を引き、その有効性に疑問を呈した。

## 2. [Neural networks are clean](https://already-clean.goodfire.com/)

**Score:** 557 | **Comments:** 213 | [Post](https://news.ycombinator.com/item?id=50105647)

Goodfire の Nick Cammarata による65分の研究エッセイ。初期のモデルで見られた多義性（polysemanticity）は重ね合わせ（superposition）ではなく、「再帰的汎化」などありふれて修正可能な要因の誤読によるものだと主張する。ネットワーク固有のメカニズムは読み解ける構成要素であり、数兆パラメータ級までほとんどのニューロンを理解できるとして、機械的解釈可能性の見通しは想定より明るいとする。

### Key Discussion Points

- **sebmellen**: 著者の投稿を引き、解釈可能性はアラインメントに不可欠な科学課題で、良い知らせがあると紹介。
  - **mentalgear**: 「エージェントツールで見え方が変わった」という主張に対し、そのツールを信頼できる根拠はあるのかと疑問。
  - **Animats**: ほとんどのモデルが可読で回路が美しいなら、ブラックボックス論からの大きな前進だと歓迎。
- **bluejay2387**: 特徴の複雑性が段階的に増すことは CNN や宝くじ仮説以来既知で、主張は証明された範囲を超えていると批判。
  - **qt31415926**: 著者は既知の現象の再主張ではなく、多義的な例が誤読されたと言っているだけで矛盾しないと擁護。
- **sigbottle**: 「概念」の捉え方自体が先入観だったという主張なのか、と理解を整理しようと質問。
  - **sigbottle**: 続けて、ネットが想定する存在論と、それを復元する方法の2点に論点を分解した。
- **antics**: 「AIゲノムの配列決定」が従来より容易だと論じる大規模な証拠集と要約。
  - **benlivengood**: 倫理・道徳判断の回路を特定し、境界で人間の判断へ安全に委ねられるようにする展望を述べた。
  - **Animats**: 画像分類器以外に拡張できるかは不明だが、客観的で他者が再現可能な成果だと評価。
- **aesthesia**: SAE の初期成果の頃の熱狂と似た、「鍵となるパラダイムを見つけた」という高揚感があると指摘。
  - **ambicapter**: 「LLM 信者に繰り返し現れるモチーフだ」と皮肉った。

## 3. [Wayland desktop for Linux with skeuomorphic design](https://github.com/fyzugx/DEsk)

**Score:** 547 | **Comments:** 215 | [Post](https://news.ycombinator.com/item?id=50103338)

「DEsk」は、物理的な机の上で機能に手を伸ばすような感覚を狙った、スキューモーフィックなデザインの Wayland デスクトップ環境。GitHub のリポジトリが共有されたが、本文の取得はこのレポート作成時に行っていないため、内容はタイトルとコメントに基づく。

### Key Discussion Points

- **tenacious_tuna**: 机に向かう感覚を再現する発想を評価し、空間記憶が活きると期待。90年代の物理的な手触りが恋しいと述べた。
  - **qurren**: Microsoft Bob を連想すると感想。
  - **yndoendo**: キー入力の設計思想について皮肉交じりに指摘（jwz の記事を引用）。
- **bmurphy1976**: 20年前の Enlightenment の時代のような遊び心あるデザインをもっと見たい。
  - **Sohcahtoa82**: フラットなデザインはユーザーテストの教訓を捨て、見た目重視で使いにくいと批判。
  - **pkulak**: こうしたものが新規ユーザーを Linux に引き込むのだと同意。
  - **anonzzzies**: Enlightenment を自分好みに調整した日々が楽しかったと回想。
- **andai**: スキューモーフィック時代の古い iPhone を買って、想像以上に良かったと報告。
  - **mahboi**: iOS 7 でデザインが損なわれ、完全には回復していないと同意。
  - **Doohickey-d**: 古い端末はアクティベーションを回避する脱獄手段があると補足。
- **d1l**: 問題は WM ではなくアプリの UI ツールキットで、GTK/libadwaita はテーマを拒む設計だと批判。
  - **TheAceOfHearts**: KDE 6.8 の Union（単一 CSS による統一テーマ）に期待。
  - **thwarted**: クライアントサイドデコレーションもテーマの統一を妨げると指摘。
- **seemaze**: 直近で似た UI（OpenCode 2.0 など）が続いており、Myst のような雰囲気だが定着するトレンドではないことを願うと述べた。

## 4. [What I self-host](https://viceconsole.fyi/blog/2026/10/10/what-i-self-host/)

**Score:** 336 | **Comments:** 222 | [Post](https://news.ycombinator.com/item?id=50109715)

筆者が自宅で運用しているセルフホストサービスの一覧を紹介するブログ。記事本体は Cloudflare のボット検証で取得できなかったため、コメントから推測すると、メディアサーバーや *arr 系ツール、メール、ネイティブ実行とコンテナの使い分けなどに触れている。

### Key Discussion Points

- **eleventen**: 記事は *arr スタックを「重くて壊れやすい」と書くが、実際は Sonarr/Radarr は約160MB で CPU もほぼ使わないと反論。
  - **Cyph0n**: 一度設定すれば何年も放置で動くと同意し、推奨構成を紹介。
  - **mrheosuper**: これらを一つにまとめたアプリが存在しないのが不思議だと述べた。
  - **benoau**: Lidarr が検索リレーの問題で数か月使えなかった時期があったと指摘。
- **pseudosavant**: HTML 1ファイルを置くだけで使える自作のセルフホスト向け動画プレイヤーを紹介。
  - **steezeburger**: 共有に感謝。
- **Lucasoato**: 単一バイナリより Docker Compose を好む人もいると述べた。
  - **mtlynch**: 単一バイナリの方が常に優れているのではと質問。
  - **tacker2000**: 自分も compose ファイルで十分と同意。
  - **skrtskrt**: 自分は k8s に全部入れていると述べた。
- **mikeocool**: 各サービスが専用の Postgres を要求するため、セルフホスト向けには SQLite で十分だと主張。
  - **a10c**: Immich の Postgres は VectorChord による意味検索に必要だと説明。
  - **solid_fuel**: 一つの Postgres を共有したいが、各自が専用を要求して煩わしい。
  - **IllIIlIlIlIIIIl**: コンテナ分離のコストは安く、むしろ利点だと反論。
- **ebrahimh**: mbsync と roundcube で複数のメールを手元にミラーする方法を紹介。
  - **drnick1**: 自前メールは半日で構築でき、プライバシー面で不要ではないと反論。
  - **gerdesj**: なぜ自前メールが面倒なのかと疑問。
  - **birdsongs**: Proton でも同様のことができるのかと質問。

## 5. [BIPM decides to stop adding leap seconds to UTC](https://www.bipm.org/en/cgpm-2026/resolution-5)

**Score:** 104 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=50105777)

国際度量衡局（BIPM）の総会決議5号。コメントによると、2027年5月20日以降、閏秒の追加（および削除）を行わないことを決めたもので、12月の閏秒見送りと合わせ、これまでの27回が最後になる見込み。公式ページは JS 描画で本文を抽出できなかったため、コメントに基づく。

### Key Discussion Points

- **BoppreH**: 背景を解説。閏秒は今後も当面追加されず、閏「時間」が必要になるまで対応は不明確。
- **pushedx**: UT1 との差を小さく保つため、約100年は閏秒が不要になるような調整が提案されていると指摘。
- **frangonf**: 占星術アプリの開発者は 2267 年頃のずれに注意、と冗談。
- **neutrinobro**: 閏秒管理が不要になって楽になる一方、UT1-UTC を IERS から別途取得する必要が出ると指摘。
- **moezd**: AI 生成文章があふれるなか、人間が書いた決議文は貴重だと評価。

## 6. [Business accounts will consent to Meta scraping their websites Starting Oct. 30](https://www.niemanlab.org/2026/10/metas-new-commercial-terms-will-allow-the-scraping-of-news-sites-legal-experts-say/)

**Score:** 98 | **Comments:** 35 | [Post](https://news.ycombinator.com/item?id=50111852)

Meta の新しい商用規約により、10月30日から事業者アカウントが自社サイトのスクレイピングに同意したものとみなされ、法律専門家はニュースサイトのコンテンツもスクレイピングされうると指摘している。記事本文は取得しておらず、タイトルとコメントに基づく。

> **関連:** #1「Muse Spark Open」も参照（同一企業 Meta の別件）

### Key Discussion Points

- **amluto**: Meta が事業者から得た許諾に、事業者がコンテンツの権利を持つ保証はなく、第三者からライセンスされた記事などはどうなるのかと法的な論理に疑問。
- **Centigonal**: 利用規約での「リーガル柔道」だと皮肉った。
- **sandeepkd**: すでに行っていることに法的な後ろ盾を与えるものだろうと推測。
- **phyzome**: 投稿タイトルの「will consent」という言い回しに注目。
- **thayne**: 多くの事業者が Meta を離れるかもしれないが、離れられない場合は独占力の濫用として反トラストの論点になりうると指摘。

## 7. [RPKI now protects 70% of internet routes](https://ipinfo.io/blog/rpki-protects-70-internet-routes)

**Score:** 77 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=50112330)

IPinfo によると、RPKI で保護されるインターネット経路の割合は1年前の54%から70%に上昇した。ページ本文は取得できず、タイトルとコメントに基づく。

### Key Discussion Points

- **cowlevel**: ロシアの経路情報がオランダのレジストリに集中するため、法的圧力や改ざんで遮断できてしまう懸念。
- **1473-bytes**: 自組織も数年前から経路を RPKI 有効化しており、次は ASPA によるパス検証を検討すべきと述べた。
- **est**: IP ブロックと国・証明書を結びつけて検証できる公開サービスはあるのかと質問。

## 8. [Apple routed a graphite pipe through the iPhone Duo's hinge to dissipate heat](https://www.pcmag.com/news/apple-routed-a-graphite-pipe-through-the-iphone-duos-hinge)

**Score:** 75 | **Comments:** 45 | [Post](https://news.ycombinator.com/item?id=50068203)

PCMag の記事。Apple が折りたたみ型とみられる iPhone Duo のヒンジ部分にグラファイト製のパイプを通し、放熱させているという分解・解析の内容。本文は取得しておらず、タイトルとコメントに基づく。

### Key Discussion Points

- **ProfessorLayton**: ハードウェアへの注力をソフトにも向けてほしい。Music や Photos などのアプリは劣化していると不満。
- **Papazsazsa**: Apple の機械エンジニアだった知人の話として、細部へのこだわりは並外れているが、プレッシャーが大きいと語った。
- **GeekyBear**: High Yield の YouTube チャンネルによる A20 チップのダイショット解説を紹介。
- **fnord77**: Apple が「iPhone 分解」サイトの役割を奪っていると冗談。

## 9. [Any window from your Mac, on your iPhone and iPad](https://github.com/Saffsanity/sill)

**Score:** 58 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=50112739)

Mac の任意のウィンドウを iPhone や iPad に表示して操作できるアプリ「sill」。GitHub リポジトリで公開されている。

### Key Discussion Points

- **alin23**: VNC よりずっと速くシームレスで、すでに役立っている。YouTube で紹介動画を見て知ったと述べた。
- **Surac**: Windows のウィンドウを iPad でタッチやペンで操作できる対応の予定を質問。
- **gumby**: iPad では Sidecar で Mac の画面を拡張できるが、iPhone に対応するのは新しいと指摘し、Pencil が使えるのか質問。

## 10. [Non-Determinism Doesn't Matter](https://sklar.rocks/non-determinism-doesnt-matter/)

**Score:** 23 | **Comments:** 19 | [Post](https://news.ycombinator.com/item?id=50087616)

LLM とそのハーネスは「システム内のアクター」であり、コードは出力にすぎない、という観点から、LLM の非決定性は開発パイプラインでは問題にならないと論じるブログ。本文は取得しておらず、コメントに基づく。

### Key Discussion Points

- **augment_me**: 大規模学習や RL では決定性が数値の崩壊を防ぐ上で重要だが、約10%の性能コストがかかると補足。
- **delifue**: コンパイラとの違いは決定性そのものではなく、推論も決定的にでき、人間も非決定的だと論じた。
- **sashank_1509**: LLM を道具として嫌うかは、自分の頭で問題解決するのが好きかどうかで分かれると主張。
- **ramity**: シード付きエントロピーなら創造性と一貫性を両立でき、決定的な提供は可能だが経済的な理由で行われないと説明。
- **jlkuester7**: LLM の出力だけに最終成果物を委ねず、パイプライン側で担保すべきという記事の主張に同意。

## Trends

- **オープンウェイト AI と解釈可能性**: Meta の Muse Spark Open（#1）と Goodfire のニューラルネット解釈（#2）が上位を占め、モデルの公開性・理解可能性が引き続き関心の中心。同時に Meta はスクレイピング同意規約（#6）でデータ面の動きも見せている。
- **懐古とセルフホスト志向**: スキューモーフィックな Wayland デスクトップ（#3）やセルフホスト（#4）は、手触りや自分で制御できることへの回帰を示す。
- **インフラの標準化**: 閏秒の廃止（#5）や RPKI の普及（#7）など、時間・ルーティングの基盤が静かに整えられている。
- **ハードと開発体験**: iPhone Duo の放熱設計（#8）、Mac ウィンドウの iPhone 配信（#9）、LLM の非決定性（#10）と、ハード設計と AI 時代の開発観が並んだ。
