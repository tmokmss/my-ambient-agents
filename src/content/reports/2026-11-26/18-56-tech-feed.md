---
title: "Tech Feed ダイジェスト（2026年11月26日 夕）"
date: "2026-11-26T18:56"
category: "summary"
summary: "AI駆動開発の理解工程・Gemma 4のローカル検証・ELB for Envoy GA・AIエージェントの自社製品推薦バイアス実験など8ソースの技術トピック"
tags: ["ai", "llm", "aws", "security", "frontend", "rust", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[CLAUDE.md / AGENTS.md を Claude Codeに継続的に書かせる](https://anond.hatelabo.jp/20261126144022)** ([170users](https://b.hatena.ne.jp/entry/s/anond.hatelabo.jp/20261126144022)) - エージェント向け指示ファイルを人手で保守せず、Claude Code 自身に更新させ続ける運用の紹介。指示ファイルの陳腐化という実務上の課題に対するアプローチ。
- **[理解をあきらめないAI駆動開発 ——開発の流れに「理解の工程」を織り込む6つの実践](https://note.com/assuredjp/n/n6ec5f6544e0c)** ([151users](https://b.hatena.ne.jp/entry/s/note.com/assuredjp/n/n6ec5f6544e0c)) - AI が書いたコードを「動いたから良し」にせず、開発フローの中に理解のための工程を組み込む6つの実践をまとめた記事。
- **[24KBの「LLM専用OS」が登場　全てアセンブリでLinuxを排し、llama.cppより最大54%高速](https://www.techno-edge.net/article/2026/11/26/5824.html)** ([75users](https://b.hatena.ne.jp/entry/s/www.techno-edge.net/article/2026/11/26/5824.html)) - 全てアセンブリで書かれ Linux を介さず LLM 推論を動かす 24KB の専用 OS で、llama.cpp 比で最大54%高速とのこと。
- **[パスワード管理アプリ「Bitwarden」がWindows 11/macOSのパスキー機能と統合](https://forest.watch.impress.co.jp/docs/news/2159319.html)** ([108users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2159319.html)) - OS 標準のセキュリティ画面からパスキーを保存・利用でき、ブラウザ拡張なしでも Web サイトにサインインできるようになる。パスキー対応実装の参考になる動き。
- **[【さくらのレンタルサーバ】セキュリティ強化に伴うコンパイル・ビルド関連コマンド等の停止に関するお知らせ](https://www.sakura.ad.jp/corporate/information/announcements/2026/11/26/1968226380/)** ([73users](https://b.hatena.ne.jp/entry/s/www.sakura.ad.jp/corporate/information/announcements/2026/11/26/1968226380/)) - 共用サーバー上でのコンパイル・ビルド系コマンドが停止される告知。サーバー上でビルドしている運用は影響確認が必要。

## Zenn
- **[迷惑メール対策をしているのに、なぜ詐欺メールは届くのか](https://zenn.dev/akagumi/articles/catch-all-phishing-invisible-chars)** - キャッチオール受信に届いた実データをもとに、SPF 等の認証や迷惑メールフィルターをすり抜ける仕組みと、判定ロジックの作り直し方を解説する。URL に invisible-chars とあり、不可視文字を使った回避手口を扱うとみられる。
- **[型チェックが重かったので、クエリの型推論を手放してみた](https://zenn.dev/dress_code/articles/88b55221eea4e0)** - TypeScript の型チェックのうち、1つのクエリの型推論が全体の仕事量の約3分の1を占めていたため、その型推論をやめたという改善事例。
- **[自動運転の予測軌跡の可視化動画を誰でも高速に作れるようにする](https://zenn.dev/turing_motors/articles/cbf9872ca90166)** - 手元実行が必要だった動画生成スクリプトを AWS Step Functions と AWS Batch に載せ、社内ビューアからのリクエストで Slack に動画が届く仕組みにした事例。
- **[Quadro P2200(VRAM 5GB)でMoE LLMを2種類動かしてみた](https://zenn.dev/nooop/articles/00cde2e1a825ad)** - llama.cpp の MoE 対応でエキスパートの一部を CPU 側 RAM に置き、VRAM 5GB でも35B級モデルが実用速度で動くかを計測した。設定と起動スクリプトは GitHub に公開されている。
- **[Claude Code の /ship を図解する](https://zenn.dev/peoplex_blog/articles/claude-code-ship)** - ベータ版スキル /ship（コミット・push・PR 作成・レビュー修正・マージ監視を1セッションで担当）のプロンプトを実行ファイルから読み出し、自作スキルとの流れの違いを検証している。

## Qiita
- **[AI コーディングエージェントは、作った会社の製品を勧めるのか。会社を指定せずに125回頼んだら…](https://qiita.com/suwa_nobu/items/4eb41b9b2215a2849f4e)** - 会社を指定せず125回依頼する実験で、Codex は全て OpenAI、Claude は埋め込み以外は全て Anthropic、Gemini CLI は OpenAI も選んだという。冒頭抜粋によれば、HN で話題になった記事の追試。
- **[【個人開発】AIでバトルロイヤルゲームを作ってみた](https://qiita.com/yangon/items/4b0e3752764eb13f15be)** - three.js なしで、ブラウザ動作の30人バトロワ（オンライン対戦／ボット戦）を AI と作った記録。ゲームコアは Rust → WebAssembly。
- **[海外で話題！「VS Codeが重い」を軽くする方法。まず測って、効く順に削る（2026年11月版）](https://qiita.com/shahin0809/items/46b64d3f76c9a4440298)** - 勘で拡張機能を消すのではなく、まず計測して効果の大きい順に削る進め方を紹介する。
- **[SBOMとは？自分のライブラリに導入してみた。](https://qiita.com/ei_1263_/items/840a4797038ce7c62052)** - ソフトウェアサプライチェーン対策として注目される SBOM（Software Bill of Materials）を、自作ライブラリに実際に導入してみた体験記。
- **[なぜ 11 月に日本のサイバー事故は「爆発」したのか — 605件を数えたら「日本が狙われている」だけではなかった](https://qiita.com/songchong/items/073f202bb0ca65611b30)** - 11月の事故605件を集計し、単純な「日本が狙われている」という見方だけでは説明できない点を整理した分析記事（冒頭抜粋の範囲）。

## AWS 新着
- **[Elastic Load Balancing for Envoy is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/11/elastic-load-balancing-for-envoy-generally-available)** (2026-11-25) - オープンソースの Envoy プロキシを動かす新しいロードバランサータイプが GA。Envoy を自前運用しているプラットフォームチームの運用負荷軽減が狙い。
- **[Amazon Aurora serverless for MySQL now supports up to 384 ACUs](https://aws.amazon.com/about-aws/whats-new/2026/11/aurora-serverless-mysql-supports-384-acu/)** (2026-11-23) - Aurora MySQL 互換の Serverless で最大容量が 256 から 384 ACU（50%増）に拡大。大規模ワークロードの上限設計に影響する。
- **[AWS Certificate Manager now supports Amazon N2 certificates for mTLS](https://aws.amazon.com/about-aws/whats-new/2026/11/acm-amazon-n2-certificates/)** (2026-11-21) - ACM のパブリック証明書からクライアント認証用途が外れたことに伴い、mTLS などブラウザ外の認証向けに Amazon N2 証明書を発行できるようになった。
- **[Amazon EventBridge Custom event bus now supports Webhook Events](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eventbridge-webhook-events)** (2026-11-20) - SaaS・AI エージェント・自作連携が HTTPS 経由で直接イベントバスにイベントを送れるようになった（enhanced Custom event bus が対象）。
- **[Amazon Inspector expands runtime reachability analysis for ECR and EC2 findings](https://aws.amazon.com/about-aws/whats-new/2026/11/inspector-runtime-reachability/)** (2026-11-23) - ECR と EC2 由来の脆弱性検出にもランタイム到達可能性分析を拡張し、実際に影響する脆弱性の優先順位付けを助ける。

## Lobsters
- **[Pokemon Childhood Version: A romhack where Mew is under the truck](https://wheybags.com/blog/pokemon_childhood_version.html)** (79pt) - アセンブリ／ゲームタグの ROM ハック制作記。ゲーム内の有名な都市伝説をネタにした改造を扱う。
- **[Scott Aaronson on recent complexity theory AI achievements](https://scottaaronson.blog/?p=10379)** (53pt) - 計算複雑性理論分野での最近の AI の成果について、Scott Aaronson が論じるブログ記事。コメントが49件と議論も活発。
- **[The beauty of CSS mixins](https://patrickbrosset.com/articles/2026-11-25-the-beauty-of-css-mixins/)** (25pt) - CSS のミックスイン機能の魅力を紹介する記事。スタイルの再利用手段としての CSS ネイティブ機能に注目。
- **[Garage v2.6.0 released with web admin, v1.x EoL & other news](https://garagehq.deuxfleurs.fr/blog/2026-11-webadmin-release/)** (19pt) - 分散型 S3 互換ストレージ Garage の v2.6.0 リリース。Web 管理画面が追加され、v1.x はサポート終了となる。
- **[Browser tabs as a container runtime](https://fzakaria.com/2026/11/25/browser-tabs-as-a-container-runtime)** (17pt) - ブラウザのタブをコンテナランタイムとして見立てる発想の記事（タグは browsers）。

## dev.to
- **[E2B, E4B or 12B? On an 8 GB RTX 3050, Serve Gemma 4 E4B](https://dev.to/gde/e2b-e4b-or-12b-on-an-8-gb-rtx-3050-serve-gemma-4-e4b-1eji)** - 8GB の RTX 3050 で動く最大の Gemma 4 は 12B だが、思考オン＋推奨サンプリングの E4B が GSM8K の最初の157問で 12B と同等（各153問正解）で、所要時間は 0.55 時間対 0.96 時間と短かった。実運用には E4B を勧める検証。
- **[Proofreader vs. Rewriter vs. Prompt API: Test the Task, Not the Demo](https://dev.to/gde/proofreader-vs-rewriter-vs-prompt-api-test-the-task-not-the-demo-pi9)** - 「文章を良くして」は誤字訂正・文体変更など複数のタスクを含むため、デモでなくタスク単位でブラウザ内蔵 AI の API を評価すべきだと説く。
- **[How much does it cost to run a text game with LLMs](https://dev.to/hiper2d/how-much-does-it-cost-to-run-a-text-game-with-llms-57o7)** - 入力・キャッシュ・出力トークン単価だけでは長期コストが見えないため、推論トークン量やキャッシュ率を含め、テキストゲームを LLM で運用する実コストを見積もる。
- **[What a cold start actually costs on DigitalOcean Functions](https://dev.to/alexgeorgiev17/how-slow-a-digitalocean-function-is-before-anyone-has-called-it-278e)** - 新規の DigitalOcean Function は初回呼び出しまでに約650〜1000ms を要し、ウォーム後は 1〜6ms。90秒アイドル後も同じコンテナがウォームのままだったという計測。
- **[Show DEV: Beating the Browser Memory Ceiling — Streaming 50GB WebRTC Files Direct-to-Disk with OPFS (Part 3)](https://dev.to/quantumtechcoder/show-dev-beating-the-browser-memory-ceiling-streaming-50gb-webrtc-files-direct-to-disk-with-opfs-10bj)** - 受信側のメモリ問題を OPFS で解決し、約1.5GB の RAM 上限を超えずに50GB超のファイルをモバイル Safari / Chrome へ直接ディスクにストリーミングする手法。

## TechCrunch
- **[Allstate suffers multiday tech outage ahead of Thanksgiving](https://techcrunch.com/2026/11/25/allstate-suffers-multi-day-tech-outage-ahead-of-thanksgiving/)** - 保険大手 Allstate が感謝祭の旅行ラッシュ直前に複数日のシステム障害に見舞われた。原因の詳細は概要からは不明。
- **[Want to buy your kid an AI toy this Christmas? Not in New York](https://techcrunch.com/2026/11/25/want-to-buy-your-kid-an-ai-toy-this-christmas-not-in-new-york/)** - ニューヨーク州が AI チャットボット玩具を5年間禁止。Common Sense Media の調査で、不適切コンテンツへの曝露や情緒発達へのリスクなど安全上の失敗が示された。
- **[WhatsApp now lets you schedule messages in group and individual chats](https://techcrunch.com/2026/11/25/whatsapp-now-lets-you-schedule-messages-in-group-and-individual-chats/)** - WhatsApp でグループ・個別チャットのメッセージを10分後から14日後まで予約送信できるようになった。
- **[The questions Jensen Huang and Nvidia will still have to answer about Megaspeed](https://techcrunch.com/2026/11/25/the-questions-jensen-huang-and-nvidia-will-still-have-to-answer-about-megaspeed/)** - 調査の焦点は、Nvidia のチップの行き先をどこまで把握していたか、そして幹部と Megaspeed 側との関係が同社に疑う理由を与えたかどうか。AI チップの輸出管理の論点。

## Ars Technica
- **[Google search alternative Kagi launches Gmail rival](https://arstechnica.com/gadgets/2026/11/google-search-alternative-kagi-launches-gmail-rival/)** - 検索エンジン Kagi がメールサービスを開始。プライバシーの約束と AI 機能という異色の組み合わせを売りにする。
- **[Etsy clarifies AI terms after seller backlash](https://arstechnica.com/tech-policy/2026/11/etsy-clarifies-ai-terms-after-seller-backlash/)** - Etsy が AI に関する利用規約をクリエイターの反発を受けて明確化。ただしベテランのイラストレーターは修正を「砂糖でくるんだだけ」と批判している。
- **[Ars Live recap: Don't expect military attacks on data centers to stop](https://arstechnica.com/gadgets/2026/11/ars-live-recap-dont-expect-military-attacks-on-data-centers-to-stop/)** - 戦時に軍がデータセンターやクラウドを標的にする理由が多いことを論じるイベントの要約。クラウドの可用性設計を物理面から考える材料。

※ 他ソースとの重複・過去レポートとの重複を除いた結果、TechCrunch と Ars Technica は掲載条件を満たす記事が少なく件数を絞っている。

## 注目トピック
今回は「AI が書いたものをどう理解し、どう運用に組み込むか」が複数ソースで目立った。はてブでは指示ファイルを AI に書かせ続ける運用と、開発フローに理解の工程を織り込む実践が上位に並び、Qiita では AI コーディングエージェントが自社製品を推薦しがちかを125回の依頼で調べた実験が出た。エージェントに任せる範囲が広がるほど、成果物の検証とバイアスの確認が実務課題になっている。

もう一つの流れは小型・ローカル推論の実測だ。Zenn の VRAM 5GB での MoE 動作、dev.to の 8GB GPU での Gemma 4 E4B 検証、はてブの 24KB の LLM 専用 OS はいずれも、限られたハードウェアでどこまで実用速度が出るかを数字で示している。AWS では ELB for Envoy の GA や EventBridge の Webhook 対応など、AI エージェントを含む外部連携とインフラ運用の足回りの整備が進んでいる。
