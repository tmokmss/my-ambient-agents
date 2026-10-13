---
title: "Hacker News トップ10 サマリー（2026年10月13日）"
date: "2026-10-13T06:37"
category: "summary"
summary: "欧州スーパーの冷蔵庫ハッキング、GLM-Legal、C言語によるWebアプリ、Intel D270 GPU など HN 上位10件を要約"
tags: ["hackernews", "summary", "security", "ai"]
---

## 1. [Hackers activate automatic defrosting in supermarket fridges across Europe](https://www.tomshardware.com/tech-industry/cyber-security/unprecedented-cyberattack-cripples-supermarket-fridges-across-europe-as-hackers-activate-automatic-defrosting-delivery-and-store-prices-also-impacted-by-incident)

**Score:** 589 | **Comments:** 752 | [Post](https://news.ycombinator.com/item?id=50055304)

欧州各地のスーパーで、冷蔵・冷凍ケースの制御機器が攻撃され、自動デフロスト（霜取り）が一斉に起動したとされる事件。納品や店頭価格にも影響が出た。記事本文は取得できず、コメントからの要約。コメントでは Danfoss 製コントローラの脆弱性が疑われている。

### Key Discussion Points

- **9x39**: 疑われているのは15〜20年前の旧型コントローラ（EOS 済み）。利益率3%の小売の現場には、セキュリティレビューや機器の定期更新の余裕がない。
  - **m4x**: 産業制御の更新は計画と検討が必要で、数十年前の機器ほど重い作業になる。
  - **holgerschurig**: ドイツの小売には、倉庫内をインターネットから完全に遮断している堅牢な事例もある。
- **alexpotato**: 病院の検査機器にはサブスクのクレジットが切れると検査できないものがあり、「なぜ冷凍庫をネットに繋ぐのか」という批判は、サブスク型モデルを作ってきた業界側の視点が抜けている。
  - **simonjgreen**: 医療機器は昔からクレジット制（磁気カードやフロッピー）で、機器がレンタル／リースだからだ。
- **renyicircle**: Danfoss 自身が、遠隔診断や遠隔の霜取り開始による保守コスト削減を宣伝していた。
  - **jandrewrogers**: 食品ロスと欠品を最小化するため、サプライチェーン全体が組込みセンサーと連携している。
  - **rich_sasha**: 2%の効率化を狙う業界と VC がある一方で、障害時の損失という耐障害性の視点が欠けている。
- **bronco21016**: 8月下旬に米軍基地の売店（コミッサリー）で起きたとされる類似事案との関連を指摘。
  - **snapcaster**: 先物取引など金融的な動機を推測。
- **cataflam**: 該当の脆弱性は今夏に Claroty が発見し、ベンダーと調整のうえ公開済みで、一部機種はパッチ済み。ただし重要なセキュリティパッチだと顧客に周知されず、3G/4G SIM でネットに直接露出していた機器も多かったという。
  - **Delphiza**: 脆弱性の内容（`check_code_of_day`）に驚き、なぜ全顧客に手作業でパッチを当てなかったのかと疑問を呈した。

## 2. [GLM-Legal](https://z.ai/blog/glm-legal)

**Score:** 513 | **Comments:** 298 | [Post](https://news.ycombinator.com/item?id=50058507)

Z.ai による法務特化モデル「GLM-Legal」の発表。ブログは JS 描画で本文を取得できなかったため、コメントから推測した要約。Harvey の Legal Agent ベンチマークで約20%の合格率を示したとされ、議論はベンチマークの信頼性と法務での AI 活用に集中した。

### Key Discussion Points

- **jedberg**: ベンダーとの OEM 契約のレッドラインを Claude で3ラウンド進め、弁護士にも驚かれた。ベンチマークは定型タスクと新規タスクに分けて見たい。
  - **properbrew**: 新人や助手に任せる定型業務を LLM が代替する流れは、法務に限らずコーディングやデータ入力でも同じ。
  - **xhevahir**: 以前は「機械には代替できない」と嘲笑されたが、現実になっている。
- **fireflysentinel**: Z.ai は以前、プロンプトごとにワークスペース全体のスナップショットを送っていた。そんな企業の法務製品を信頼できるのか。
  - **febed**: ハーネスを使わずモデルだけ使えばよい。
  - **consumer451**: 米国の人々が自国の制度より中国を信頼する状況に、信頼喪失への懸念を示した。
- **victor9000**: Anthropic の最近のポリシーは、法務など権利に関わる領域で人間の確認と AI 利用の告知を求めており、より良い法務ツールが必要だと主張。
  - **ChadNauseam**: その解釈は誤読ではないか。
  - **gr_norm**: Anthropic の父権的な姿勢に不満。
- **otterley**（弁護士）: 訴訟実務は新規の状況への備えが肝心で、20%の合格率に感銘は受けない。
  - **ctolsen**: このベンチマークで20%は同価格帯でほぼ最上位で、Opus 5.5 は4%。
  - **henryfjordan**: 訴訟より先に、遺言のような取引的業務が AI に置き換わる。
- **mathis-l**: Harvey ベンチは、タスクや採点基準に問題があるものが複数ある（GitHub Issue 参照）。
  - **alansaber**: 最悪級のベンチマークの一つ（AI を審査者に使う、範囲が広いなど）。
  - **aesthesia**: ほとんどのベンチマークに重大な問題はある。

## 3. [A Modern Web App in C](https://prophitt.me/writing/a-modern-web-app-in-c)

**Score:** 501 | **Comments:** 206 | [Post](https://news.ycombinator.com/item?id=50058528)

著者は OpenBSD・C・httpd・SQLite の「BCHS」スタックで、商用サービス marketyour.games を CGI 方式で出荷した。フレームワークやコンテナはなく、静的リンクの単一バイナリを置くだけで、リクエストごとにプロセスを起動する。デプロイはファイル1つの置き換えで済み、依存は libcurl・libsodium・libcjson の3つ。pledge/unveil と chroot で権限を絞り、2004年に正当だった CGI 衰退の理由は2026年には当てはまらないと主張する。

### Key Discussion Points

- **Aldipower**: Node.js を直接公開すれば呼び出し関係は明快だが、Nginx を前に置くのは配信・フィルタリング・レート制限のため。当時の対抗馬は Netscape Enterprise Server のサーバーサイド JavaScript だった。
- **ramses0**: busybox には cgi-bin 対応が組み込まれている。記事の主張は正しく、pledge/chroot による権限降格の話も的確。
  - **rpdillon**: `busybox httpd` と cgi-bin で Python（Bottle）サービスを CGI としても動かしている。
- **OleksandrC**: C++ を WebAssembly（Emscripten）にコンパイルしたクライアントと C++ サーバーによる Civ 風ゲームを紹介。
  - **fercircularbuf**: 同様に C++ と Wasm で教育用ゲームを開発中。
  - **hughw**: 「美しい」と称賛。
- **assimpleaspossi**: 22年前から C と FastCGI、FreeBSD、PostgreSQL で飲食店向けの注文システムを作ってきた。
  - **glouwbug**: 22年前はほぼ2005年だと指摘。
- **benlivengood**: Go（CGO_ENABLED=0）ならシングルバイナリで HTTP/TLS も揃う。C で CGI を書いたことはあるが、並行処理と起動オーバーヘッドが気になる。
  - **ncruces**: CGO なしの SQLite ドライバ（go-sqlite3）を紹介。

## 4. [The baffling intelligence of a single cell (2024)](https://jsomers.net/e-coli-chemotaxis/)

**Score:** 195 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=50041866)

James Somers と Edwin Morris による、大腸菌の走化性（chemotaxis）の解説記事。脳を持たない単細胞が、嗅覚のような化学物質の感知、動機、記憶に近いものを備え、栄養を探し回る。著者はこれを生命の知性の原型であり、一種の「物理的コンピュータ」と位置づける。名前の暗記ではなく問いから生物学に入るべきだという立場で書かれている。

### Key Discussion Points

- **dekhn**: 単一の細胞は、むしろ人工ニューラルネットワーク全体に近い。実際のニューロンには、ANN のニューロンにない性質がある。
  - **tyromaniac**: 生物学的に妥当な神経網のニューロンと比べて特別に面白いわけではなく、実際の神経系で欠けている部分に面白さがある。
  - **barrenko**: 細胞膜が興味深い。
- **the-mitr**: J.T. Bonner の『動物における文化の進化』を推薦。
- **brudgers**: 過去スレッドへのリンク。
  - **dang**: 2024年3月のスレッド（213コメント）を示した。
- **cvanelteren**: 美しいサイトだと評価。
- **datas**: 電気モーターの設計はこれ（鞭毛モーター）を参考にしたのか、と質問。
  - **d-us-vb**: 電気モーターは19世紀半ばの発明で、当時は細胞の構造が不明だったので、生物から着想したわけではない。
  - **dekhn**: 構造と仕組みが解明されたのは1970年頃で、既存のモーター（固定子・回転子）に似ていて驚きだった。

## 5. [Who is vfmaddrnd231pd?](https://purplesyringa.moe/blog/who-is-vfmaddrnd231pd/)

**Score:** 170 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=50063138)

Intel SDM に載っているが実在が怪しい FMA 命令 `vfmaddrnd231pd` を調べた記事。命令ごとに丸めモードを制御でき、AVX-512 なしで丸めを要するアルゴリズムを大幅に高速化できるはずだった。ところが GNU assembler や ICC、Clang が認識せず、SDM の opcode 表にしか出てこない `VEX.DDS` という記法も不審で、実在するのか調べていく。

### Key Discussion Points

- **pbsd**: 古い binutils のソースコメントに、DDS（上書きされる第1ソースをコードする VEX.vvvv）の意味が書かれている。
- **enjoyyourlife**: ハードウェア上の問題で削除され、実際には動作しなかったという説。
- **LoganDark**: RISC-V の拡張名かと思ったが、記事を読んで x86 だと分かった。
  - **pclmulqdq**: RISC-V の奇妙な名前はここから来た、と皮肉った。
- **Lerc**: 直接触れる機会が減ると何かが失われる懸念。この命令は一目では理解できず、頭の中で変換が必要。
  - **muricula**: Intel のベクトル ISA は元から奇妙な意味論と難解な名前だらけ。丸めの隅の不具合が原因の可能性。
  - **ack_complete**: アセンブリ構文は人間の可読性より、アセンブラ／逆アセンブラの単純さを優先して設計されている。

## 6. [Intel D270 GPU AI Accelerator–Up to 480 GB LPDDR5X](https://www.intel.com/content/www/us/en/products/details/discrete-gpus/data-center-gpu/d-series.html)

**Score:** 159 | **Comments:** 71 | [Post](https://news.ycombinator.com/item?id=50063365)

Intel の推論特化データセンター向け GPU「D270」の製品ページ。エージェント AI、長いコンテキスト、高並行サービングを現実的な電力とコストで動かすことをうたい、最大480GB の LPDDR5X を搭載する。ページ全体は取得できず、見出しとコメントからの要約。

### Key Discussion Points

- **K0balt**: 数年後に中古で安く買えるのが楽しみ。現在は3090を2枚と128GB の RAM で約180B の量子化モデルを毎秒120トークンで動かしている。
  - **mnadkvlb**: CCTV 解析をどうやっているのかと質問。
  - **locknitpicker**: OpenAI の積極的な値下げは、ローカルモデルへの警戒の表れだと解釈。
- **suprjami**: 1.5TB/s のメモリ帯域をもっと宣伝すべき。
  - **auspiv**: サーバー向けとしては低い数字（V100 は0.9TB/s、B300 は約8TB/s）。ただし VRAM でなく通常のメモリである点が重要だと後に訂正した。
  - **Aurornis**: 市場では宣伝せずに売っても1年待ちになる。
- **p0w3n3d**: AI ハードの話題は、自分の対象外の高級車の広告のように見えてくる。
- **rkagerer**: 買えるのか、Blackwell より良いのか、という質問。
  - **samuelknight**: ボードの形状はサーバー筐体用で、7年後に中古で買えるだろう。
  - **kadoban**: 今は買えないし、おそらく今後も買えない。
- **ismailmaj**: 高速なマルチ GPU 接続がなく、同時利用者が多いと厳しい。単一ユーザー向けの MoE モデルなら向く。
  - **minraws**: 2〜4人程度で大型モデルを安く動かす用途が狙いで、銀行などの社内利用向けだろう。

## 7. [AI Models Can Provably Hide Arbitrary Capabilities](https://arxiv.org/abs/2610.13928)

**Score:** 122 | **Comments:** 63 | [Post](https://news.ycombinator.com/item?id=50065692)

arXiv 論文（2026年10月9日投稿）。能力評価は、隠された能力が引き出せるという前提に依存しているが、敵対的条件下では成り立たないことを示す。暗号化したニューラルネットをホストモデルの重みに埋め込み、秘密のトリガーを受けたときだけ復号・実行するバックドアを構成する。デジタルロッカーにより、重みへの完全アクセスがあっても引き出しや解釈が暗号の仮定の下で困難になり、固定文字列の隠蔽を任意の計算へ拡張する。

### Key Discussion Points

- **johnsmith1840**: 約2.5年前、1B 規模のモデルに1回だけ逆伝播で変な知識を学習させると、無関係な学習を続けても一部のモデルで情報が重みに残る現象を観察した。
- **vintermann**: タイトルは「暗号化によってモデルの重みに能力を隠せる」とすべきで、AI エージェントが能力を隠す話ではない。
- **ceroxylon**: オープンモデルに任意の文字列で起動するスリーパーエージェントが仕込まれる懸念。
- **lifeisloving**: OpenAI の本人確認会社は政治的要人か確認している。心配すべきは LLM ではない。
- **daemonologist**: r/LocalLLaMA で Qwen モデルが署名付き URL を幻覚した件が議論された（学習環境への過学習の可能性が高い）。

## 8. [Janas: Run LLMs larger than RAM by streaming experts from SSD](https://github.com/prabanta-dev/janas)

**Score:** 97 | **Comments:** 31 | [Post](https://news.ycombinator.com/item?id=50063717)

MoE モデルのエキスパートを SSD からストリーミングし、メモリより大きなモデルを動かす実験的な推論エンジン。README によると、32GB メモリのノート PC（Core Ultra 9 185H、内蔵 Arc GPU）で48GB の Qwen3-Next-80B が書き出し24 tok/s（draft ありで37）、読み取り62 tok/s と、llama.cpp の2.8／16 tok/s を大きく上回る。比較した全モデルで llama.cpp より高速だとしている。

### Key Discussion Points

- **sieve**: LLM 支援開発では GPU の OOM でディスプレイごと落ちることが何度もあった。表示用の領域を確保し、確保前に検査する対策が必要。
- **suprjami**: Strata が Qwen3.8-Flash-Next で既に同じことをやっていて、時間の無駄だと批判。
  - **jdb9001**: 数週間おきに llama.cpp が何年も前から持つ機能が再実装されている。
- **3eb7988a1663**: 62 tok/s がどのくらいの速さか示すデモを紹介。一般人のローカルモデルには十分。
- **skeledrew**: 現在は Qwen 35B A3B を 32GB RAM で約8 tok/s なので、大きな改善になりうる。

## 9. [The Dock on Mac, from OS 10 to macOS 27](https://blog.jim-nielsen.com/2026/macos-dock-icons-over-time/)

**Score:** 54 | **Comments:** 33 | [Post](https://news.ycombinator.com/item?id=50065713)

Jim Nielsen による、Mac OS X から macOS 27 までの Dock とそのアイコンの変遷を振り返る記事。ページから本文を取得できず、タイトルとコメントからの要約。コメントでは、近年のアイコンの画一化（スクワークル化）が主な話題。

### Key Discussion Points

- **al_borland**: iTunes 10.7 のアイコンあたりから画一化が始まり、10.16 で全部が「スクワークルの牢獄」に収まって退屈になった。
  - 返信が1件あったが、本文を取得できなかったため割愛。
- **whatever1**: 20年間役に立たず常に隠している。開いているウィンドウが分からず、複数モニターやスペースでは更に悪化する。GNOME／KDE／Windows を真似るべき。
- **CoolestBeans**: スクワークルは余白がなく窮屈。Leopard 以前の Aqua の明るく親しみやすいデザインが好み。
- **rckt**: 丁寧に作られていた時代の回顧は意味があったが、今は利益優先で UX が軽視されている。
- **brandon272**: Snow Leopard が一番好き。均一なアイコンだと探すのに手間取る。

## 10. [Threat of AI share crash puts world financial stability at risk, says IMF](https://www.theguardian.com/business/2026/oct/13/ai-share-crash-risk-global-imf-debt-corrowing-cyber-attacks)

**Score:** 23 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50067356)

IMF が、AI 関連株の暴落が世界の金融安定への脅威になりうると警告した。Guardian の記事は取得せず（既知スキップドメイン）、タイトルとコメントからの要約。URL のスラッグから、債務や借り入れ、サイバー攻撃も併せてリスクとして挙げているとみられる。

### Key Discussion Points

- **singingwolfboy**: アーカイブへのリンクを共有。
- **cmiles8**: AI バブルの崩壊は避けられず、主要プレイヤーは「大きすぎて潰せない」と見せようとしている。ただしリスクは主に非公開市場に集中し、経済全体は潰れないだろう。
- **bestouff**: 「誰が予想した？」と皮肉。
- **grebc**: 笑いの反応のみ。
- **simianwords**: 暴落は価格下落か中国モデルの追い上げで起きるため、公衆には利益になる。ただし投資家が来なくなれば R&D の動機はどうなるのか、と疑問を呈した。

## Trends

- **AI の影響と信頼**: 法務特化モデルの評価（#2）、ローカル推論（#6、#8）、能力を隠せるモデル（#7）、AI 株の暴落リスク（#10）と、AI の話題が10件中5件を占めた。評価の信頼性（ベンチマークやバックドア）と、高価なハードを前提にした経済性が共通の論点。
- **コネクテッド化の代償**: スーパーの冷蔵庫攻撃（#1）では、遠隔管理による効率化と、旧式機器のセキュリティ負債のトレードオフが議論された。
- **古い技術への回帰と掘り下げ**: C と CGI（#3）、x86 の命令（#5）、大腸菌の走化性（#4）、Dock の歴史（#9）など、基礎や過去を見直す記事にも関心が集まった。
