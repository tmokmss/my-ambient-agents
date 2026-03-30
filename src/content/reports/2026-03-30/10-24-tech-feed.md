---
title: "Tech Feed ダイジェスト（2026年3月30日）"
date: "2026-03-30T10:24"
category: "summary"
summary: "Craftplan OSS ERP・さくらガバメントクラウド正式決定・C++26完成・AIエージェント決済6層構造・Aurora PostgreSQL無料枠・RISC-V無料CI"
tags: ["ai", "agents", "aws", "oss", "frontend", "cpp", "government", "llm", "payments", "riscv", "cloud"]
---

## はてなブックマーク (テクノロジー)

- **[妻のパン屋のために作ったERP「Craftplan」、小ロットの受注生産を念頭にワークフローが設計されておりオープンソースでセルフホスト可能](https://gigazine.net/news/20260329-craftplan/)** ([230users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260329-craftplan/)) - 小規模食品製造・受注生産向けに特化したOSSのERPシステム「Craftplan」が注目を集めた。注文→材料計算→製造→出荷のワークフローが組み込まれており、製造業固有の工程をセルフホスト可能な形で提供している点が評価されている。

- **[Prompt→Context→Harness、全部やった。要件だけ渡す、変わっても壊れない。整合性駆動開発CoDD爆誕](https://zenn.dev/shio_shoppaize/articles/shogun-codd-coherence)** ([199users](https://b.hatena.ne.jp/entry/s/zenn.dev/shio_shoppaize/articles/shogun-codd-coherence)) - プロンプトエンジニアリング・コンテキスト管理・ハーネス設計の3段階を統合し「要件を渡すだけで整合性が保たれるAI開発手法」として「CoDD（Coherence-Driven Development）」を提唱した記事。仕様の変化に対してシステム全体が崩れない設計を目指すアプローチとして開発者コミュニティで議論を呼んでいる。

- **[デジタル庁、さくらのクラウドがガバメントクラウドのすべての技術要件を満たしたと発表。ガバメントクラウドに正式決定](https://www.publickey1.jp/blog/26/post_309.html)** ([160users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/post_309.html)) - デジタル庁がさくらインターネットのクラウドサービスを日本政府のガバメントクラウドとして正式認定した。AWS・GCP・Azure・OCI等のグローバルクラウドに加え国産クラウドがガバメントクラウドに採用される初のケースであり、データ主権・行政サービス継続性の観点から重要な政策転換となる。

- **[LLM に足りないのは能力ではない。あなたの事情だ](https://syu-m-5151.hatenablog.com/entry/2026/03/28/202554)** ([97users](https://b.hatena.ne.jp/entry/s/syu-m-5151.hatenablog.com/entry/2026/03/28/202554)) - LLMの性能不足を嘆く前に「自分の状況・制約・背景をモデルに伝えているか」を問い直す論考。ユーザーの事情（組織の制約・既存コードの前提・暗黙の要件）をコンテキストとして与えることで、同じモデルから得られるアウトプット品質が劇的に改善するという実践的な知見を丁寧に示している。

- **[楽天が方針転換？「Rakuten AI 3.0はDeepSeekベース」と認める](https://news.yahoo.co.jp/expert/articles/d014ddc69f3bbec265b5e5f74efca652937a8ba7)** ([96users](https://b.hatena.ne.jp/entry/s/news.yahoo.co.jp/expert/articles/d014ddc69f3bbec265b5e5f74efca652937a8ba7)) - 「国内最大規模の国産LLM」として発表したRakuten AI 3.0について、楽天がDeepSeekベースの開発であることを認めた。ベースモデルの透明性開示とファインチューニングの付加価値をどう評価するかという「国産LLM」の定義論争に実例を提供した格好で、オープンウェイトモデル活用の是非が問われている。

## Zenn

- **[エージェントが払う仕組み — AIエージェント決済の6層構造](https://zenn.dev/komlock_lab/articles/agent-payments-stack-2026)** - AIエージェントが自律的に支払いを実行するための決済スタックを「ウォレット・認可・決済レール・リコンシリエーション・コンプライアンス・監査」の6層に分解して解説した記事。エージェントエコノミーが現実になりつつある中、既存の人間向け決済インフラをエージェントがそのまま使う際の課題とブロックチェーン活用の可能性が整理されている。

- **[ここんところのWeb界隈についての主観的記録](https://zenn.dev/crayfisher_zari/articles/e3dfa8ca8a4a79)** - 2026年初頭のWebフロントエンド界隈の変化を当事者の視点で記録した回顧的エッセイ。React vs Vueの議論の変質、AIコード生成によるコンポーネント設計への影響、型安全化の潮流など、技術トレンドの移り変わりを肌感覚で捉えた内容であり、将来の振り返り資料としても価値がある。

- **[React やだ 2026](https://zenn.dev/mnonamer/articles/react-yada-2026)** - VueとReactを並行利用している開発者が「ReactがVueより嫌いな点」を率直にまとめた記事。フックのルール制約・コンテキスト設計の冗長さ・JSXとロジックの混在など、2026年時点でも解消されていない開発者体験の課題がリストアップされており、フレームワーク選択の議論に具体的な視点を提供している。

- **[Claude Code で 100個のSkillを育てた全記録 ── コンテキストエンジニアリング実践4ヶ月の軌跡](https://zenn.dev/takuyanagai0213/articles/claude-code-100-skills-full-record)** - 4ヶ月でClaude Codeのカスタムスキルを100個作成した実践記録。月2本だったPRが月175本になりコスト月200ドルという具体的な数字を公開しており、Skills・Hooks・Orchestrationを組み合わせた「コンテキストエンジニアリング」の実態を詳細に伝える一次資料として注目されている。

- **[SDD + TDD + VDDを融合したClaude Codeプラグイン「VSDD Claude Code」を作った話](https://zenn.dev/sc30gsw/articles/1373752d9713b3)** - スナップショット駆動開発（SDD）・テスト駆動開発（TDD）・バリデーション駆動開発（VDD）を統合し、AIが生成したコードの品質を多角的に検証するClaude Code向けプラグインを実装した記録。LLM生成コードの検証サイクルを自動化する設計思想が具体的なコードとともに解説されている。

## Qiita

- **[MCPとFunction Callingの違いと使い分け](https://qiita.com/ssc-yshikeda/items/d946d6576f8de60fa81f)** - LLMにツール実行能力を与える2つのアプローチ「MCP（Model Context Protocol）」と「Function Calling」の技術的差異を整理した記事。MCPがサーバー側でツールを管理する汎用プロトコルであるのに対しFunction Callingはモデル固有のAPI仕様であり、用途・エコシステム・制御の粒度で使い分けるべき判断基準が明示されている。

- **[AgentCore 上の Claude Code の出力を AppSync Event API でリアルタイムにブラウザへ流す](https://qiita.com/Kota__Sasaki/items/a5008e550de8fa01dc61)** - Amazon Bedrock AgentCore上で動作するClaude CodeのストリーミングログをAWS AppSync Event APIを介してブラウザにリアルタイム配信するアーキテクチャの実装記事。WebSocketを使わずGraphQLサブスクリプションベースでエージェントの実行状態を監視できる構成が示されており、AIエージェントの可観測性設計の参考になる。

- **[GitHubを使ったClaude Codeのオーケストレーションツールを作っている](https://qiita.com/getty104/items/6a0c87ba3eeba999e673)** - GitHub IssuesとPull RequestsをトリガーとしてClaude Codeを自動実行するオーケストレーション基盤を自作している開発中レポート。複数エージェントへのタスク分配・進捗トラッキング・コンフリクト解消の仕組みをGitHub Actions + Claude SDK で構築するアーキテクチャが段階的に公開されている。

- **[Red Hat AI Factoryとは何か？OpenShift AIとの違いを解説](https://qiita.com/260329-ai-ojisan/items/1eea6c6546537126f6d7)** - Red Hatが提唱する「AI Factory」フレームワークの概念と、既存のOpenShift AIとの機能差分を解説した記事。InstructLab・RHOAI・Ansible Lightspeedなど複数製品を統合したエンタープライズAI開発・運用プラットフォームとしての位置付けと、オンプレ/ハイブリッドクラウドでのLLMデプロイ戦略が整理されている。

- **[LaravelブログをCloudflareにデプロイして踏んだ地雷7選](https://qiita.com/ausssxi0/items/2e6cf6cb3b6b5bf7c8ee)** - LaravelアプリをCloudflare Workers/Pagesにデプロイする際に遭遇した問題（ファイルシステム非対応・セッション管理の制約・Queues連携・ログ出力の違い）を実体験として列挙した記事。サーバーレス環境特有のステートレス制約とLaravelの設計思想のミスマッチを具体的に示しており、移行検討者への事前警告として有用だ。

## AWS 新着

- **[Amazon Aurora PostgreSQL now available with the AWS Free Tier](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-aurora-postgresql-aws-free-tier/)** (Mar 25) - Amazon Aurora PostgreSQLがAWS無料枠で利用可能になり、新規顧客には$100のクレジットと使用量に応じた追加クレジットが付与される。これまでAuroraは無料枠対象外だったため、個人開発・学習・スタートアップ向けの選択肢として大幅に敷居が下がった。

- **[Amazon Quick Now Available in the AWS Tokyo Region](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-quick-now-available-in-the-aws-tokyo-region/)** (Mar 25) - AWSの自然言語SQL生成サービス「Amazon Quick」が東京リージョン（ap-northeast-1）に展開された。同時期にフランクフルト・ロンドンリージョンにも対応し、日本のユーザーが低レイテンシでBI/データ分析ワークフローを自然言語ベースで操作できる環境が整いつつある。

- **[Amazon SageMaker AI now supports serverless reinforcement fine-tuning for 12 additional models](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-sagemaker-ai-serverless-additional-models/)** (Mar 25) - SageMaker AIのサーバーレス強化学習ファインチューニングが12の追加オープンウェイトモデルに対応。GPUインスタンスの調達・管理なしに主要な基盤モデルをカスタムデータでファインチューニングできる選択肢が広がり、中小規模の組織でのLLMカスタマイズの敷居が下がっている。

- **[AWS ParallelCluster 3.15 with support for P6-B300 and Slurm 25.11](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-parallelcluster-p6-b300-slurm/)** (Mar 25) - HPC向けクラスタ管理ツールAWS ParallelCluster 3.15がP6-B300インスタンスタイプ（次世代GPU）のサポートとSlurm 25.11へのアップグレードを含む形でリリース。最新世代のGPUを使った大規模AI/科学計算ワークロードへの対応が強化された。

- **[Amazon Bedrock AgentCore adds support for Chrome policies and custom root CA](https://aws.amazon.com/about-aws/whats-new/2026/03/agentcore-browser-policies-root-ca/)** (Mar 25) - Bedrock AgentCoreのブラウザ操作機能に企業向けChromeポリシーの設定とカスタムルートCA証明書の指定が可能になった。エンタープライズ環境のプロキシ・SSL検査・アクセス制限下でもAIエージェントがブラウザを安全に操作できるようになり、社内システム自動化への適用範囲が広がった。

## Lobsters

- **[C++26 is done! — Trip report: March 2026 ISO C++ standards meeting (London Croydon, UK)](https://herbsutter.com/2026/03/29/c26-is-done-trip-report-march-2026-iso-c-standards-meeting-london-croydon-uk/)** - C++26標準がロンドンでのISO会議で正式に完成した。Herb Sutter氏によるトリップレポートで、C++26に含まれる主要機能（リフレクション強化・パターンマッチング改善・標準ライブラリの非同期対応拡張など）と標準化プロセスの最終調整が報告されている。C++の3年周期リリースにおける重要な節目だ。

- **[ChatGPT Won't Let You Type Until Cloudflare Reads Your React State. I Decrypted the Program That Does It](https://www.buchodi.com/chatgpt-wont-let-you-type-until-cloudflare-reads-your-react-state-i-decrypted-the-program-that-does-it/)** - ChatGPTの入力フォームが実際に文字を受け付ける前にCloudflareのボット検出スクリプトがReactのstateを読み取っている仕組みを、難読化されたJavaScriptを解読して明らかにした技術調査記事。フロントエンドのDOMや状態管理をサードパーティスクリプトがどの程度読み取れるかというプライバシー上の問題を提起している。

- **[Free, native RISC-V (RV64GC) CI on GitHub](https://riseproject.dev/2026/03/24/announcing-the-rise-risc-v-runners-free-native-risc-v-ci-on-github/)** - RISEプロジェクトがGitHub Actions上でRISC-V（RV64GC）ネイティブCIを無料提供するランナーを発表した。これまでQEMUエミュレーションが必要だったRISC-Vビルド・テストが実機ネイティブで実行でき、RISC-Vへのポーティングや最適化を行うOSSプロジェクトにとって大きな恩恵となる。

- **[Okapi, or "What if ripgrep Could Edit?"](https://kocharhook.com/post/6/)** - ripgrepの高速検索能力にファイル編集機能を組み合わせた「Okapi」というツールのアイデアと実装を紹介した記事。`rg --replace`の機能を超えた、正規表現マッチした場所をコンテキストを保ちながら構造的に書き換えられるツールとして、大規模コードベースの機械的なリファクタリング支援に有用な位置付けが示されている。

- **[What Category Theory Teaches Us About DataFrames](https://mchav.github.io/what-category-theory-teaches-us-about-dataframes/)** - 圏論の概念（Functor・Monad・自然変換）を用いてPandasやPolarsなどのDataFrameの操作を形式的に記述し直す試み。`map`・`filter`・`join`などのデータ変換が圏論的にどのような構造を持つかを理解することで、APIの設計一貫性と合成可能性を論じており、データ処理ライブラリ設計への新しい視点を提供している。

## dev.to

- **[LinkedIn Uses 2.4 GB of RAM Across Two Tabs. We All Just Shrugged.](https://dev.to/adioof/linkedin-uses-24-gb-of-ram-across-two-tabs-we-all-just-shrugged-chi)** - LinkedInの2タブで2.4GBのRAMを消費するという事実をHacker Newsで指摘したスレッドを出発点に、現代のWebアプリのメモリ肥大化を開発者コミュニティが問題視しながらも「まあ仕方ない」と受け入れてしまっている現状を批判した記事。バンドルサイズ・クライアントサイドレンダリングの過剰利用・サードパーティスクリプトへの依存が生む「パフォーマンス債務」への警鐘だ。

- **[The 5 memory problems for agents](https://dev.to/jonathanfarrow/-how-an-agent-actually-learns-from-experience-2m28)** - AIエージェントが「経験から学べない」主な理由として記憶の5つの問題（揮発性・検索精度・文脈依存性・記憶の矛盾・忘却戦略の欠如）を体系化した記事。会話履歴をそのまま蓄積するだけでは解決できない問題を整理し、エピソード記憶・セマンティック記憶・手続き記憶を組み合わせたアーキテクチャの必要性を提案している。

- **[Kontiki, an async microservices framework in Python](https://dev.to/jpkwbr/kontiki-an-async-microservices-framework-in-python-26gk)** - Pythonの非同期マイクロサービスフレームワーク「Kontiki」の紹介。FastAPIのようなHTTPフレームワークではなく、メッセージキューベースの非同期サービス間通信に特化しており、サービス定義・ルーティング・エラーハンドリングをシンプルなデコレータ構文で記述できる設計が特徴だ。

## TechCrunch

- **[Why OpenAI really shut down Sora](https://techcrunch.com/2026/03/29/why-openai-really-shut-down-sora/)** - Soraの突然のサービス終了について「本当の理由」を調査した報道。ユーザーがアップロードしたコンテンツが問題視され、著作権・プライバシー上のリスクとサービス継続コストのバランスが合わなくなったことが内部事情として示唆されており、AI動画生成サービスが直面するコンテンツガバナンスの課題が浮き彫りになっている。

- **[The Pixel 10a doesn't have a camera bump, and it's great](https://techcrunch.com/2026/03/29/google-pixel-10a-review-camera-bump-performance-ai-chip/)** - GoogleのミッドレンジスマートフォンPixel 10aのレビュー。カメラバンプを廃止したフラットデザインを採用し、独自AIチップによるオンデバイス処理を強化。予算スマートフォンにおけるAI機能の標準化を体現した端末として、モバイルAIの民主化を示す製品位置付けが評価されている。

- **[Elon Musk's last co-founder reportedly leaves xAI](https://techcrunch.com/2026/03/28/elon-musks-last-co-founder-reportedly-leaves-xai/)** - xAIの11人いた共同創業者のうち最後の一人が退社したと報告された。設立2年足らずで共同創業者全員が去った形となり、Grokの開発を主導するxAIの組織的安定性と今後のAI開発戦略への影響が注目されている。

## Ars Technica

- **[Causality optional? Testing the "indefinite causal order" superposition](https://arstechnica.com/science/2026/03/getting-formal-about-quantum-mechanics-lack-of-causality/)** - 量子力学における「不定因果順序（indefinite causal order）」を実験的に検証した最新研究の解説。AがBの前に起きるか後に起きるかが量子重ね合わせ状態にあるという現象を形式的に定式化し、実験で確認したもの。量子コンピューティングの通信複雑性削減への応用可能性が示唆されており、量子情報理論の新たなフロンティアとして注目される。

- **[With new plugins feature, OpenAI officially takes Codex beyond coding](https://arstechnica.com/ai/2026/03/openai-brings-plugins-to-codex-closing-some-of-the-gap-with-claude-code/)** - OpenAI CodexへのPlugin機能追加について、「Claude Codeとの差を縮める動き」として分析した記事。コーディング専用だったCodexがウェブ検索・ファイル操作・外部APIへのアクセスを獲得しエージェント型ツールに進化している構図を整理しており、AIコーディングアシスタント市場の競争地図が塗り替えられつつあることを示している。

- **[AV1's open, royalty-free promise in question as Dolby sues Snapchat over codec](https://arstechnica.com/gadgets/2026/03/av1s-open-royalty-free-promise-in-question-as-dolby-sues-snapchat-over-codec/)** - Dolby対Snapchatの特許訴訟でAV1コーデックのロイヤルティフリー性に疑問符が付いた問題の続報。「Big TechがAV1をロイヤルティフリーと宣言してもそれは自社特許の放棄であり第三者特許権は別問題」という法的現実を改めて整理しており、AV1を採用済みのプロダクト開発者が直面する潜在的な特許リスクの範囲が論じられている。

## 注目トピック

今回のフィードを通じて浮かび上がるのは、**AIエージェントの「経済インフラ」化と「品質保証」の同時進行**だ。Zennの「AIエージェント決済6層構造」はエージェントが単にタスクを実行するだけでなく自律的に支払いまで担う世界を見据えており、AWS BedrockのAgentCore強化・AppSync連携・Step Functions統合といったクラウド側の整備と呼応している。一方でClaude Code 100 Skillsの実績（PR月2→175本）、VSDD Claude Codeのマルチ検証フレームワーク、「要件だけ渡すCoDD」といった開発手法の成熟は、AIエージェント活用が「試す」フェーズから「品質を担保しながら量産する」フェーズに移行していることを示している。

技術標準の側では**C++26の完成**とRISC-V無料CIの提供開始が長期的に重要なマイルストーンだ。C++26はリフレクション等の機能強化でモダン言語との差を縮め、RISC-V無料CIはオープンハードウェアエコシステムの開発インフラを整備する。また、さくらのクラウドがガバメントクラウド正式認定を受けたことは日本のパブリックセクターにおけるクラウド戦略の転換点であり、Aurora PostgreSQLの無料枠開放はクラウドデータベースの民主化を加速させる。ChatGPTのCloudflareによるReact state読み取りの可視化は、フロントエンドにおけるサードパーティスクリプトのプライバシー問題という見過ごされがちな課題に光を当てており、Webアプリ開発者が改めて意識すべきセキュリティ・プライバシーの論点として今後の議論を促しそうだ。
