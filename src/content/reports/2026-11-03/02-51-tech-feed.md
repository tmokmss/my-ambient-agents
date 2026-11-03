---
title: "Tech Feed ダイジェスト（2026年11月3日）"
date: "2026-11-03T02:51"
category: "summary"
summary: "ISUCON2026優勝記、AI時代のADR運用、EDK2のUEFI脆弱性、Lambda×Kafkaキュー、Anthropic RSI警告などを収録"
tags: ["isucon", "ai", "security", "aws", "adr", "uefi", "llm", "devops"]
---

## はてなブックマーク (テクノロジー)

- **[ISUCON2026 で優勝しました（当日編）](https://zenn.dev/luvtechno/articles/isucon2026-competition-day)** ([250users](https://b.hatena.ne.jp/entry/s/zenn.dev/luvtechno/articles/isucon2026-competition-day)) - 1人チームで最終スコア 625,857 点を出して優勝した当日の記録。ISUCON 全体で AI エージェントを前提にした参加記が目立つ回で、人間1人でどう進めたかが読みどころ。
- **[AIが書く「読みづらいADR」に発狂しかけたので、ADRのガイドラインを作った](https://zenn.dev/tokium_dev/articles/adr-authoring-guideline)** ([118users](https://b.hatena.ne.jp/entry/s/zenn.dev/tokium_dev/articles/adr-authoring-guideline)) - ADR（Architecture Decision Record）のドラフトを AI に書かせるようになって読みにくさが問題化したため、記述ガイドラインを整備した事例。意思決定記録の品質を AI 時代に保つ運用知見。
- **[ARCHITECTURE.md](https://architecture.md/)** ([156users](https://b.hatena.ne.jp/entry/s/architecture.md/)) - リポジトリのアーキテクチャを説明するドキュメントを置く慣習に関するサイト。人間にも AI エージェントにもコードベースの全体像を渡すための文書化として話題。
- **[スパコン級チップがノートPCに。RTX Sparkが日本で6社から登場](https://pc.watch.impress.co.jp/docs/news/2153206.html)** ([48users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2153206.html)) - 小型 AI スパコン系のチップをノート PC に載せた製品が国内の6社から出る。ローカル LLM を手元で動かす環境の選択肢が広がる動き。
- **[Sparks of Weight-Space Programming: LLMs can natively read & write neural network weights](https://rikiyat.github.io/blog/weight-space-programming/)** ([10users](https://b.hatena.ne.jp/entry/s/rikiyat.github.io/blog/weight-space-programming/)) - LLM がニューラルネットの重みを直接読み書きできるという主張を扱う実験的な記事。重みを「プログラム」として扱う発想の検証。

## Zenn

- **[弊社がAIでPlaywrightテストコードを生成するために調整したこと](https://zenn.dev/castingone_dev/articles/casone_playwright_for_claude)** - QA 工数削減のため Playwright テストを AI で生成した際、最初は品質が悪かったので必要なルールを整えていった備忘録。AI 生成コードの微妙な点と対策をまとめている。
- **[ローカルLLMはどんな業務で使えるのか？ DGX Spark + DeepSeek V4-FlashのSlackチャットボットを評価した](https://zenn.dev/sompojapan_dx/articles/05f34316118943)** - 社内の会話や文書を社外 API に出さない選択肢として、手元1台で完結する Slack ボットを組んで評価した検証。
- **[【最速解説】goda.vimでHello, worldする](https://zenn.dev/comamoca/articles/2026-10-30-trying-hello-world-with-goda-vim)** - Shougo 氏の新作 goda.vim をまず動かすための手順解説。Vim/Neovim 系の新しいプラグイン環境を試したい人向け。
- **[FlutterKaigi 2026 で生字幕を映像に載せて会場スクリーンに投影しました](https://zenn.dev/hiro_pon/articles/2f3b68ec60ddae)** - 登壇内容をその場で文字起こし・翻訳し、スライドとカメラを合成した映像に字幕として焼き込んだ構成。日英の相互字幕をライブ配信映像で実現した事例。

## Qiita

※ 冒頭抜粋から読み取れる範囲での紹介。

- **[S3への画像アップロード、署名付きPUTとPOSTはどう使い分ける？](https://qiita.com/pengin_r/items/d3f3fbe1b4ba1e648ed7)** - S3 への画像アップロードで、署名付き PUT URL と署名付き POST のどちらを選ぶかを AWS 公式情報を基に整理した記事。
- **[AI に書かせた PR の説明や README は「AI っぽい」のか？ 3つのツールの108本を Wikipedia の見分け方で数えた](https://qiita.com/suwa_nobu/items/6037f16f524d82638f1c)** - 英語版 Wikipedia の「AI らしい文章」の見分け方を使い、3ツールが書いた PR 説明と README 計108本を数えて検証した試み。
- **[ClaudeCodeで自律的に調査させてみたら大失敗した](https://qiita.com/sai029/items/57b38881f03f7ff0638c)** - AI を自律的に動かして調査させた際の失敗談。抜粋は導入部のみのため詳細は本文を参照。
- **[AMA Developer ToolsでLiberty / Java 25 / Jakarta EE 10 へ移行してみた](https://qiita.com/ktgr/items/3ae615bfc45c7d615d44)** - IBM Application Modernization Accelerator の移行プランを IDE 拡張から実行し、Liberty / Java 25 / Jakarta EE 10 へ移行した検証。

## AWS 新着

- **[AWS Lambda now supports queues for Apache Kafka in self-managed Kafka event sources](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-queue-kafka-esm/)** (2026-11-02) - セルフマネージド Kafka や Confluent Cloud を使う Event Source Mapping で、Kafka 向けキュー機能が使えるようになった。
- **[EC2 Amazon Machine Images can now be scanned for vulnerabilities through Amazon Inspector](https://aws.amazon.com/about-aws/whats-new/2026/11/ec2-amis-scanned-through-inspector/)** (2026-11-02) - インスタンスを起動したりエージェントを入れたりせずに AMI の脆弱性を検出できる。イメージ配布前のチェックに使える。
- **[Amazon Aurora serverless now supports up to 384 ACUs](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-serverless-supports-384-acu/)** (2026-10-27) - Aurora PostgreSQL の Serverless の最大容量が 256 から 384 ACU へ 50% 拡大。スケール上限が設計制約だったワークロードに効く。
- **[Amazon ECS now supports GPU sharing with NVIDIA Multi-Process Service (MPS)](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-gpu-sharing-nvidia-mps/)** (2026-10-27) - 1枚の NVIDIA GPU で複数の ECS タスクを同時実行でき、GPU の利用効率を上げられる。
- **[AWS CloudFormation now simplifies stack update rollback operations](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-cloudformation-cdk/)** (2026-10-22) - 更新ロールバックを完了させて次のデプロイに戻る手順が簡単になった。ロールバック不能状態でのリカバリが楽になる。

## Lobsters

※ タイトルとタグのみから読み取れる範囲での紹介。

- **[Stop Hardcoding Your Timeouts](https://alfy.blog/2026/04/23/stop-hardcoding-your-timeouts.html)** (25pt) - タイムアウト値のハードコードを見直そうという提案（タグは a11y / practices）。ユーザーの状況に応じて調整できる設計の重要性を扱う。
- **[My reflex of assuming our servers need ever-growing amounts of RAM](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/ServerRAMGrowthReflex)** (22pt) - 「サーバーの RAM は増え続ける」という思い込みを見直すシスアドミン視点の考察（devops / hardware）。
- **[the lost malloc()](https://napcakes.nekoweb.org/posts/malloc/)** (26pt) - C と Unix の歴史（historical タグ）から malloc を振り返る読み物。
- **[A Decade of Kill Bugs](https://alangrow.com/blog/a-decade-of-kill-bugs)** (25pt) - Linux/Unix の kill にまつわるバグの10年を振り返る歴史系の記事。
- **[gohawk | Resource-focused static analysis for Go](https://gohawk.dev)** (8pt) - Go 向けの、リソース（リーク等）に着目した静的解析ツール。

※ 高スコア記事の多くは過去3日分のレポートで掲載済みのため除外した。

## dev.to

- **[Architecting Deterministic Safety Gates for Agentic Workflows](https://dev.to/debashish_ghosal/architecting-deterministic-safety-gates-for-agentic-workflows-24pl)** - エージェントワークフローに確定的な安全ゲートを設ける設計論。LLM の判断に頼らず止める地点を決めておく考え方。
- **[I Built cdkd: Deploy Your Existing AWS CDK Code Up to 15x Faster](https://dev.to/aws-heroes/i-built-cdkd-deploy-your-existing-aws-cdk-code-up-to-15x-faster-4amg)** - 既存の CDK コードのままデプロイを最大15倍高速化する OSS CLI「cdkd」の紹介。
- **[Next.js Doesn't Render Pages Anymore. It Streams Something Stranger.](https://dev.to/smtahosin/nextjs-doesnt-render-pages-anymore-it-streams-something-stranger-11ij)** - Next.js と React Server Components の内部動作（RSC Payload など）を図解で解説するガイド。
- **[Claude Code Custom System Prompts in 2026](https://dev.to/jsmanifest/claude-code-custom-system-prompts-in-2026-overriding-defaults-appending-instructions-and-what-53lm)** - Claude Code のカスタム指示が効かないと感じる場面を題材に、システムプロンプトの上書き・追記と変更できない部分を整理する。
- **[Autonomous agent loops with Gemini 4 Argon and GKE Agent Sandbox](https://dev.to/googlecloud/autonomous-agent-loops-with-gemini-4-argon-and-gke-agent-sandbox-running-untrusted-code-safely-at-2k60)** - LLM が生成した Python / Bash を GKE Agent Sandbox で安全に大規模実行する構成。

## TechCrunch

- **[Anthropic warns that it's very close to RSI capability, aka self-building AI](https://techcrunch.com/2026/11/02/anthropic-warns-that-its-very-close-to-rsi-capability-aka-self-building-ai/)** - AI が自らの訓練を改善して能力向上が急加速する RSI に、Anthropic が「非常に近い」と警告した。
- **[Germany says lawmakers' iPhones may have been hacked with spyware](https://techcrunch.com/2026/11/02/germany-says-lawmakers-iphones-may-have-been-hacked-with-spyware/)** - ドイツの議員らが、iPhone がスパイウェアで侵害された可能性を示す Apple の通知を受け取った。
- **[In one of the largest deals in tech history, Marvell buys Lumentum for $115B](https://techcrunch.com/2026/11/02/in-one-of-the-largest-deals-in-tech-history-marvell-buys-lumentum-for-115b/)** - Marvell が Lumentum を1150億ドルで買収へ。両社には共通の戦略投資家として Nvidia がいる。AI データセンターの光・半導体領域の再編を示す。
- **[Apple's inventory surges 154% as memory chip costs climb](https://techcrunch.com/2026/11/02/apples-inventory-surges-154-as-memory-chip-costs-climb/)** - メモリチップ価格の高騰が今後も続くと Apple が説明。在庫は145億ドルに膨らみ、デバイス価格への影響が焦点になる。
- **[Y Combinator's Garry Tan uses AI agents so much, he spends up to $200K a year on tokens](https://techcrunch.com/2026/11/02/y-combinators-garry-tan-uses-ai-agents-so-much-he-spends-up-to-200k-a-year-on-tokens/)** - Garry Tan 氏が AI エージェント利用でトークン代に年間最大20万ドルを使っているという話。

## Ars Technica

- **[Code-execution flaw in UEFI firmware affects most servers on planet Earth](https://arstechnica.com/security/2026/10/code-execution-flaw-in-uefi-firmware-threatens-most-servers-on-planet-earth/)** - EDK2 の重大な欠陥により、ブート初期段階でコード実行が可能になる。多くのサーバーに影響し、ファームウェア更新の適用が重要。
- **[Google begins certifying Registered App Stores for Android, but not in the US](https://arstechnica.com/gadgets/2026/10/googles-android-registered-app-stores-program-launches-dec-1-applications-now-open/)** - サードパーティのストアが Google の認定を受ければ、アプリのインストールが容易になる制度が12月1日に始まる。米国は対象外。
- **[Fujifilm to boost tape production 5x as AI fuels archiving demand](https://arstechnica.com/gadgets/2026/10/fujifilm-to-boost-tape-production-5x-as-ai-fuels-archiving-demand/)** - AI によるデータ保管需要を受け、富士フイルムが磁気テープの生産を5倍に増やす。低コストとオフラインによる安全性が理由。
- **[China's snooping around Pacific undersea cables raises risks for Big Tech](https://arstechnica.com/gadgets/2026/10/google-and-meta-subsea-cables-among-most-at-risk-from-sabotage-in-pacific/)** - 米国が所有する太平洋横断海底ケーブルに、妨害や中国の探査のリスクが高まっている。

## 注目トピック

今回目立ったのは、AI エージェントを前提にした開発運用の整備だ。ISUCON2026 の参加記では AI 活用が当たり前になり、ADR の記述ガイドライン、Playwright テスト生成のルール調整、確定的な安全ゲート、GKE Agent Sandbox での隔離実行など、生成物の品質と実行の安全をどう担保するかが共通の関心になっている。Anthropic が RSI に近いと警告した件とあわせ、能力向上と統制の両立が焦点だ。

インフラ面では、EDK2 の UEFI 脆弱性がファームウェア層の重要性を改めて示した。AWS では Inspector の AMI スキャンや ECS の GPU 共有など、運用の安全性と資源効率に効く更新が続いた。Marvell による Lumentum 買収や Apple のメモリコスト高騰からは、AI 需要がハードウェアと部材の供給に及ぼす影響も見て取れる。
