---
title: "Tech Feed ダイジェスト（2026年9月24日）"
date: "2026-09-23T23:45"
category: "summary"
summary: "AIコーディングツールの進化、AIエージェント絡みのセキュリティ手口、フロンティアモデルのクラウド提供拡大など8ソース横断の注目記事をピックアップ"
tags: ["ai", "security", "aws", "devtools", "opensource", "cloud", "robotics"]
---

## はてなブックマーク (テクノロジー)

- **[Claude Codeが「AGENTS.md」に対応。CLAUDE.mdが存在しない場合、自動的に読み込み](https://www.publickey1.jp/blog/26/claude_codeagentsmdclaudemd.html)** ([72users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/claude_codeagentsmdclaudemd.html)) - Claude Codeが、他社ツールとも共有できるエージェント設定ファイル「AGENTS.md」を読み込めるようになった。CLAUDE.mdが無い場合のフォールバックとして機能し、複数のAIコーディングツールを併用する現場での設定共有が容易になる。
- **[GitHub - anthropics/code-migration-kit-with-claude-code](https://github.com/anthropics/code-migration-kit-with-claude-code)** ([26users](https://b.hatena.ne.jp/entry/s/github.com/anthropics/code-migration-kit-with-claude-code)) - Anthropic公式が公開した、大規模な言語・フレームワーク移行をClaude Codeで進めるためのプロンプト集とスクリプト集。移行作業を段階的なチェックリストに分解するテンプレートが含まれ、実務での再利用を意図した構成になっている。
- **[SREとは何か、AWSでどう始めるか](https://speakerdeck.com/kokitamura/sre-toha-nani-ka-aws-de-dou-hajimeru-ka)** ([6users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/kokitamura/sre-toha-nani-ka-aws-de-dou-hajimeru-ka)) - SREの基本概念（SLI/SLO/エラーバジェット）を、CloudWatchやAuto Scalingなど具体的なAWSサービスにどう対応づけて実践するかを整理したスライド。組織にSREを導入する最初の一歩を探すチーム向け。
- **[What a task costs on Opus 5.5](https://claude.com/blog/what-a-task-costs-on-opus-5-5)** ([40users](https://b.hatena.ne.jp/entry/s/claude.com/blog/what-a-task-costs-on-opus-5-5)) - Anthropicが、Opus 5.5でタスクを実行する際の実コストの内訳を公開。トークン単価だけでなく、思考やツール呼び出しを含めたエージェント実行全体のコストをどう見積もるべきかを具体例で示しており、AIエージェントの運用コスト設計の参考になる。
- **[Herdr Annotate で効率的なAIコーディングレビューサイクルを実現する](https://portablecode.info/2026/09/23/herdr-annotate-ai-review/)** ([34users](https://b.hatena.ne.jp/entry/s/portablecode.info/2026/09/23/herdr-annotate-ai-review/)) - AIエージェントが生成したコードへのレビュー指摘を構造化データとして注釈づけし、次のエージェント実行にフィードバックとして渡すツール「Herdr Annotate」の紹介。人間の指摘をAIの修正サイクルに機械的に流し込む設計が特徴。

## Zenn

- **[Claude Code の日本語処理を Gemini 3.8 に任せる](https://zenn.dev/toshipon/articles/claude-code-japanese-gemini-3-8)** - Claude Codeが書いた日本語文章の推敲・敬語変換だけを、コマンド一発で別モデルのGemini 3.8に委譲する仕組みを構築した記事。同一モデルが執筆と推敲を両方担うと文体の癖が残る、という問題意識から生まれた複数モデル使い分けの実装例。
- **[【2026/9/17最新アプデ】Claude Docs が登場！Slides・Design と合わせて触ってみた](https://zenn.dev/canly/articles/7ac8cea14c20e8)** - ベータ提供が始まったClaude Docs／Slides／Designを実際に触った検証レポート。公式ドキュメントの記述と実際の挙動が食い違う箇所を含め、現時点の制約や癖を具体的に指摘している。
- **[高速判断AI Jevのユースケースとオープン実装を雑にまとめる](https://zenn.dev/karaage0703/articles/jev-use-cases-open-implementations)** - TypeSafe AIの「Jev」（文章生成ではなく選択・スコアリングに特化した意思決定モデル）が公開から数日で広がった解説記事・実用例・オープンな類似実装を横断的に整理したまとめ。

※ 直近レポートと重複する話題が多く、基準を満たす新規記事は3件のみだった。

## Qiita

- **[自宅にISDNを再現する](https://qiita.com/wakamesoba98/items/19693e80c0551eada894)** - FTTHの普及でほぼ消滅した通信方式ISDNを、自宅の設備だけで動作再現するハードウェア実験記録。前回の自営PHS再現に続く通信プロトコル考古学シリーズで、当時のインターフェース仕様の実装的な理解に踏み込んでいる。
- **[マルウェアの動的解析に使用できるツール(Linux編)](https://qiita.com/takumi_security/items/abf155cdd01a9114dd62)** - マルウェアを実際に動かして通信・ファイル操作・プロセス挙動を観測する動的解析の手法を、tcpdumpなど具体的なツールの起動コマンド付きでまとめた実践記事。
- **[MCP サーバーと繋いだだけで情報漏洩？ 危険の4パターンと事前に確認すべき7つのことをまとめてみた](https://qiita.com/songchong/items/89175eaa7a30f71d0351)** - MCP経由でAIエージェントに外部ツールを呼び出させる構成で起こりうる情報漏洩の典型的な4パターンを整理し、導入前のチェックポイントを提示。MCPサーバーを本番導入する際のセキュリティレビュー観点として使える。
- **[supabaseとReact19のuse()フックを使ってデータフェッチする](https://qiita.com/J-T_ky2g/items/3189dc9ca74620b60a9c)** - React 19で追加されたuse()フックをSupabaseのデータ取得に組み合わせた際に起きた無限ループなどの失敗と、その解決策を実装コード付きで紹介している。
- **[「これ本当にAPEX？」Codexで作るモダンUIをOCI Always Freeで動かす](https://qiita.com/itokazu/items/5f204a466c22a2b774de)** - Oracle APEXのようなモダンなUIを、CodexにIaCコードを生成させてOCI Always Free枠上に構築した検証記事。環境構築の手間をエージェントに任せる具体的なワークフローを示している。

## AWS 新着

- **[Amazon CloudWatch Omni: AI-first observability for agents and applications](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-cloudwatch-omni-ai/)** (2026-09-23) - CloudWatchをチーム・アプリケーション単位で捉え直した新しい観測基盤「CloudWatch Omni」が一般提供開始。AI主導の異常検知・原因分析を統合する設計になっている。
- **[Claude Opus 5.5 is now available on AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/claude-opus-5-5-aws/)** (2026-09-22) - Anthropicの最新モデルClaude Opus 5.5がAWS上で利用可能に。長時間稼働のコーディング・ナレッジワークタスクへの対応力が謳われており、Bedrock経由でのエンタープライズ導入がしやすくなる。
- **[Amazon SNS now supports message payloads up to 1 MiB](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-sns-1mib-support)** (2026-09-18) - SNSのメッセージペイロード上限が256KiBから1MiBへ4倍に拡大。大きめのイベントペイロードをそのままパブリッシュできるようになり、S3経由の間接参照などの回避策が不要になるケースが増える。
- **[AWS Continuum now supports credential testing and accessible domain suggestions](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-security-agent/)** (2026-09-18) - 開発ライフサイクルを通じて自律的にペネトレーションテストを行うフロンティアエージェント「AWS Continuum」が、認証情報のテストとアクセス可能なドメインの提案機能に対応。攻撃者視点の検証を自動化する方向性が明確になっている。
- **[Amazon Corretto 27 is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-corretto-27-generally-available/)** (2026-09-17) - AWSが提供する無償・本番利用可能なOpenJDKディストリビューション「Corretto」の最新機能リリース版27が公開。長期的なJavaランタイム選定の選択肢として確認しておきたい。

## Lobsters

- **[Radicle: Disclosure of Vulnerability in the Network Protocol](https://radicle.dev/2026/09/23/disclosure-of-vulnerability-in-network-protocol.html)** (73pt) - 分散型のGit協業プラットフォームRadicleが、自社ネットワークプロトコルに存在した脆弱性を開示。分散システムならではの信頼モデルの穴と、その修正方針が具体的に説明されている。
- **[KDE for People](https://kdeforpeople.com)** (60pt) - KDEコミュニティ内で、AIによるコード生成（vibecoding）に頼りすぎない「人間中心」の開発姿勢を掲げるマニフェスト的サイト。OSSプロジェクトがAI活用の是非をどう言語化するかという実例。
- **[Abandoning Scientific Linux Was a Mistake](https://blog.melashri.net/posts/scientific-linux-mistake/)** (41pt) - 研究機関向けディストリビューションScientific Linuxの終了が、後継エコシステムの混乱を踏まえると誤った判断だったのではという振り返り。ディストリビューション選定における長期的な安定性の評価基準を論じている。
- **[The GNOME LLM Policy That I Want](https://blogs.gnome.org/alatiera/2026/09/23/the-gnome-llm-policy-that-i-want/)** (39pt) - GNOMEプロジェクトへのLLM生成コードの貢献をどう扱うべきか、開発者の立場から望ましいポリシー案を提示。著作権・レビュー負荷・コード品質の観点から具体的な線引きを提案している。
- **[The Zig Journey](https://kristoff.it/blog/the-zig-journey/)** (34pt) - Zig言語のコア開発者による、言語設計の変遷と今後の方向性を振り返る記事。1.0に向けた安定化の過程で何を優先し何を犠牲にしてきたかが語られている。

## dev.to

- **[What Nobody Is Using in Your Google Cloud Projects, and What It Costs](https://dev.to/gde/what-nobody-is-using-in-your-google-cloud-projects-and-what-it-costs-1k0)** - Google Cloudプロジェクト内の未使用リソースをCloud Billing Catalog APIで価格付けしながらスキャンし、クリーンアップ案を自動生成するCLIツールの紹介。リージョンごとでなくプロジェクト単位で1回のAPI呼び出しに収める設計と、Claude Codeプラグイン化まで行っている点が実用的。
- **[Production RAG on the Lakehouse with BigQuery Vector Search and Apache Iceberg](https://dev.to/gde/production-rag-on-the-lakehouse-with-bigquery-vector-search-and-apache-iceberg-5g3)** - 生成AI向けRAG基盤を、BigQueryのベクトル検索とApache Icebergのレイクハウス構成で本番運用するアーキテクチャを解説。データ基盤とAI活用の間に生じがちな乖離を埋める設計指針を示している。
- **[Deploying LiteLLM: An Open-Source AI Gateway](https://dev.to/vultr/deploying-litellm-an-open-source-ai-gateway-2idp)** - 100以上のLLMプロバイダーに対してOpenAI互換のAPIを提供するオープンソースゲートウェイLiteLLMを、Docker＋Postgres構成でセルフホストする手順を解説。複数プロバイダーの利用を一箇所で管理・コスト把握したいチーム向け。
- **[The Grand Unifying Architecture of Frontend](https://dev.to/playfulprogramming/the-grand-unifying-architecture-of-frontend-bhk)** - フロントエンド開発の歴史を「レンダリングをどこで行うか」という一つの論点の変遷として辿り直す考察記事。SPA・SSR・アイランドアーキテクチャなど乱立する手法を統一的な軸で整理している。
- **[The missing layer in AI tooling: sharing what your assistant already knows](https://dev.to/uri_shmueli_a403e7acc04a8/the-missing-layer-in-ai-tooling-sharing-what-your-assistant-already-knows-1nch)** - AIアシスタントがプロジェクトについて学習した文脈（コーディング規約や設計判断の背景）を、チームメンバー間で共有する仕組みが欠けているという問題提起。MCPを使ってこの「暗黙知の共有層」を作る方向性を論じている。

## TechCrunch

- **[Anthropic says its biology lab has already found something big](https://techcrunch.com/2026/09/23/anthropic-says-its-biology-lab-has-already-found-something-big/)** - Anthropicが自社のバイオロジー研究ラボで既に大きな発見があったと発表。Claudeをラボ内で自律的に動かしているわけではなく、人間が引き続き意思決定に関与している点が強調されている。
- **[The old cybersecurity model is breaking](https://techcrunch.com/video/the-old-cybersecurity-model-is-breaking/)** - AIの安全性懸念や自律型エージェントのリスクの高まりを受けて、セキュリティ企業への投資が急増している状況を解説。AIネイティブな脅威に対応する次世代セキュリティスタートアップへの巨額出資が相次いでいる。
- **[ChatGPT mobile app gets voice-based agentic features](https://techcrunch.com/2026/09/23/chatgpt-mobile-app-gets-voice-based-agentic-features/)** - ChatGPTモバイルアプリのWorkタブに、音声ベースでエージェント的タスクを完結できる機能が追加。Pro/Plusユーザー向けで、スマートフォン上での音声起点タスク自動化の競争が激化している。
- **[VC firm Bessemer now has another $5.75B to invest in (what else?) AI](https://techcrunch.com/2026/09/23/vc-firm-bessemer-now-has-another-5-75b-to-invest-in-what-else-ai/)** - ベンチャーキャピタルのBessemerが新たに57.5億ドルの投資枠を確保。AIネイティブ企業の成長速度がこれまでのどの技術トレンドよりも速いという同社の見立てが背景にある。
- **[Modal Motors is trying to cut China out of electric motors entirely](https://techcrunch.com/2026/09/23/modal-motors-is-trying-to-cut-china-out-of-electric-motors-entirely/)** - レアアース磁石を使わない小型・軽量な電動モーターを開発するスタートアップの紹介。ドローンやファン向け用途を想定し、サプライチェーンを中国に依存しないモーター製造を目指している。

## Ars Technica

- **[Nonprofit that tracks meteors taken down by "critical blow" from a cyberattack](https://arstechnica.com/security/2026/09/nonprofit-that-tracks-meteors-taken-down-by-critical-blow-from-a-cyberattack/)** - 隕石観測ネットワークを運営する非営利団体が、サイバー攻撃により数週間にわたりほぼ機能停止に追い込まれた。研究インフラを支える小規模組織のセキュリティ体制の脆弱さを示す事例。
- **[ClickFix attacks infecting PCs and Macs are going viral](https://arstechnica.com/security/2026/09/clickfix-attacks-infecting-pcs-and-macs-are-going-viral/)** - 偽のエラー画面からユーザー自身にコマンドを実行させて感染させる「ClickFix」型攻撃が急速に拡大。手口の単純さと、正規の操作に見せかける巧妙さが感染拡大の要因として指摘されている。
- **[Once popular for attacking AI, ASCII smuggling is embraced by spammers](https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/)** - 人間には見えないUnicodeのブロックにテキストを埋め込む「ASCIIスマグリング」が、もともとAIへのプロンプトインジェクション手法として使われていたところから、スパム業者にも転用され始めている。
- **[AI bots "Timmy," "Ren," and "Jackie" are flooding social media with slop](https://arstechnica.com/ai/2026/09/ai-agents-flood-the-internet-with-slop-infused-spam/)** - AIエージェント同士が交流する小規模SNS上で、「AIエージェント」を名乗るボットが大量の低品質コンテンツを投稿し始めている実態を報告。エージェントを野放しにデプロイすることのリスクを浮き彫りにしている。
- **[Founder's cost-cutting obsession drove Unitree's lead in cheap humanoid robots](https://arstechnica.com/ai/2026/09/founders-cost-cutting-obsession-drove-unitree-lead-in-cheap-humanoid-robots/)** - 低価格帯ヒューマノイドロボットで先行する中国Unitree社の創業者による、徹底したコスト削減へのこだわりを追ったプロフィール記事。このマイクロマネジメント志向のスタイルが今後の事業拡大にも通用するかが焦点。

## 注目トピック

Claude Code周辺のエコシステムが、単体ツールの機能追加を超えて「他ツールとの相互運用性」（AGENTS.md対応）と「運用コストの可視化」（タスク単位のコスト内訳公開）に向かっている点が目立つ。移行キットやレビュー支援ツールの登場も含め、AIコーディングエージェントを本番の開発フローに組み込むための周辺インフラが急速に整いつつある段階にあると言える。またTypeSafe AIの意思決定特化モデル「Jev」を巡る解説・実装記事が依然として量産されており、生成に特化しないLLM派生モデルへの関心の高さがうかがえる。

一方でセキュリティ面では、ClickFixやASCIIスマグリングといった手口の流用・拡散、AIエージェント同士のSNS上での低品質コンテンツ氾濫など、AIの普及に伴う新しい攻撃対象・攻撃手段の広がりが顕著になっている。クラウド側でもAWSがClaude Opus 5.5のGAやAI主導の観測基盤CloudWatch Omni、自律型ペネトレーションテストエージェントAWS Continuumを立て続けに投入しており、フロンティアモデルとエージェント技術を前提としたインフラ再編が進行中であることがうかがえる。
