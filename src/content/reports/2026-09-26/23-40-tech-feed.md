---
title: "Tech Feed ダイジェスト（2026年9月27日）"
date: "2026-09-26T23:40"
category: "summary"
summary: "AIエージェントのセキュリティリスク、AnthropicとPentagonの司法判断、Rust/Kubernetes/Go等の技術記事をピックアップ"
tags: ["ai", "security", "aws", "devops", "kubernetes", "rust", "llm", "cloudflare"]
---

テック系RSSフィード8ソースを巡回し、開発者向けに注目トピックをまとめました。

## はてなブックマーク (テクノロジー)

- **[DHHはRailsを捨てたのか？](https://sizu.me/laiso/posts/ut6i125ew44m)** ([155users](https://b.hatena.ne.jp/entry/s/sizu.me/laiso/posts/ut6i125ew44m)) - Ruby on Railsの生みの親であるDHHの最近の言動や活動から、「Railsを見限ったのではないか」という観測を検証する考察記事。フレームワークの現在地を考えるうえで示唆に富む。
- **[Kubernetes入門：Podが動くまでに中で何が起きているのか、クラスタの構成要素を整理する](https://qiita.com/yushibats/items/16b6b3c8ec5acd6bdc8b)** ([47users](https://b.hatena.ne.jp/entry/s/qiita.com/yushibats/items/16b6b3c8ec5acd6bdc8b)) - `kubectl apply` を実行してからコンテナが起動するまでに、kube-apiserverやkubelet、コンテナランタイムなど各コンポーネントがどう連携しているかを整理した入門記事。
- **[個人開発はCloudflareにすべて賭けろ](https://speakerdeck.com/ashunar0/kojin-kaihatsu-ha-cloudflare-ni-subete-kakero)** ([58users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/ashunar0/kojin-kaihatsu-ha-cloudflare-ni-subete-kakero)) - 個人開発のインフラをWorkers・D1・R2などCloudflareの各種サービスに寄せることで、運用コストと管理の手間を最小化する構成を紹介するスライド。
- **[高負荷プロダクション環境におけるAWS Lambdaのリアル 〜スケールとコストを左右する実行ライフサイクルの技術仕様〜](https://speakerdeck.com/maimyyym/the-reality-of-aws-lambda-in-high-load-production)** ([30users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/maimyyym/the-reality-of-aws-lambda-in-high-load-production)) - 高トラフィックの本番環境でLambdaを運用する中で直面した、初期化・同時実行数・コールドスタートなど実行ライフサイクルの仕様が、スケールとコストにどう影響するかを整理した資料。
- **[グーグル、AIエージェント向けPostgreSQL基盤　本番DBに影響なく毎秒300万クエリ](https://news.yahoo.co.jp/articles/a67a6d9e0ce30b83eb60670472e2d87b8c90e091)** ([18users](https://b.hatena.ne.jp/entry/s/news.yahoo.co.jp/articles/a67a6d9e0ce30b83eb60670472e2d87b8c90e091)) - AIエージェントが大量に発行するクエリ負荷を本番データベースの性能から隔離しつつ、毎秒300万クエリを捌けるPostgreSQL基盤をGoogleが構築したという報道。エージェント時代のDB設計上の課題に触れている。

## Zenn

- **[爆速になった Expo Modules 2.0 を全部試してみた](https://zenn.dev/gemcook/articles/expo-modules-2-swift-macros-sdk57)** - Expo SDK 58 betaで導入されたExpo Modules 2.0を検証した記事。Swiftマクロベースの新しいネイティブモジュール定義方式を8パターン実装し、実機でのJS-Native間呼び出し速度を計測している。
- **[AIに書かせても速くならないのは、AIを「手足」として使っているから。人が押さえるべき5つの判断ポイントと半自動ループの作り方](https://zenn.dev/dotdtech_blog/articles/65d51bc72d7ee9)** - AIコーディングエージェントを使っても開発速度が上がらない原因を「AIを単なる作業の手足として使っていること」に求め、計画・実装・検証・修正のループを人が設計し回す「ループエンジニアリング」の考え方と実践ポイントを解説する記事。
- **[/claude-api prompt-audit で棚卸ししたら、Claude Opus 5.5 化で外れた設定がぞろぞろ出てきた](https://zenn.dev/nanora/articles/20260925-claude-prompt-audit-opus55)** - Claude Code同梱のプロンプト監査コマンドで自前のCLAUDE.mdやエージェント設定を棚卸しした記録。モデルがOpus 5.5に切り替わった影響でeffort設定が効かなくなっていた等、更新で陳腐化した設定を発見する過程を紹介している。
- **[Claude Codeで定期的にやっておきたい MEMORY.md の大掃除](https://zenn.dev/loglass/articles/f69996279763ab)** - Claude Codeの自動メモリ機能が使い続けるうちに雑多な情報で肥大化していく問題を指摘し、定期的な棚卸し・整理を習慣化することを提案する記事。
- **[AIソフトウェア工場の設計——要求から本番運用までをつなぐアーキテクチャ](https://zenn.dev/hampen2929/books/ai-software-factory-architecture)** - 要求定義からPR作成、ビルド・テスト、AIレビュー、デプロイ、運用までをAIエージェントが一気通貫で担う「AIソフトウェア工場」のアーキテクチャを、1件のAPI変更を題材に設計・解説するZenn本。工程間での合意条件の引き継ぎ方や失敗時の扱いにも踏み込んでいる。

## Qiita

- **[放置CNAMEでサブドメイン乗っ取り──防ぐ5つのDNS棚卸し(Cloudflare/Route 53・コピペOK)](https://qiita.com/jiis-sasaki/items/9b7f43dc59f3a64f9c80)** - 使われなくなった外部サービスを指したまま放置されたCNAMEレコードがサブドメイン乗っ取りの温床になる問題を解説し、Cloudflare/Route 53を対象にDNSレコードの棚卸しスクリプトから生死判定、撤去手順までをまとめた記事。
- **[【QStash】「not found in this region (eu-central-1)」エラーの原因と解決方法](https://qiita.com/y-keiyu/items/609c371af260165b6d95)** - Upstash QStashで特定リージョンを指定した際に発生する「not found in this region」エラーの原因を調査し、解決方法を示したトラブルシューティング記事。
- **[QdrantからZilliz Cloudへ移行する方法――データ移行から検索確認まで](https://qiita.com/sphereSky/items/3956d10b9d8b280516de)** - RAG・セマンティック検索基盤として使っていたQdrantから、Milvusベースのマネージドサービス「Zilliz Cloud」へデータを移行する具体的な手順と、移行後の検索動作確認までをまとめた記事。
- **[AWS DevOps Agent と障害対応の速さを競ってみた](https://qiita.com/htGin/items/064fcb82f1efa60d9b9b)** - 検証環境で意図的に障害を2回発生させ、AWSの自律型運用エージェント「AWS DevOps Agent」と人間のエンジニアのどちらが早く正確に原因を特定できるかを比較検証した記事。複数AWSアカウントにまたがるSaaS基盤という実践的なシナリオで検証している。
- **[古いReact NativeアプリをNew Architectureへ上げ直す](https://qiita.com/TechStudioLab/items/c173c20c9abb1b8cf88b)** - 数年前に作られた古いReact NativeアプリをNew Architecture（0.76でデフォルト化、0.82以降さらに変化）に対応させる移行作業を追った記事。バージョンごとの仕様変化に伴う実務上のハマりどころを整理している。

## AWS 新着

- **[AWS End User Messaging and Amazon SES now offer AI agent skills for the AWS MCP Server](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-messaging-ses-ai-skills-mcp-server/)** (2026-09-25) - AWS End User MessagingとAmazon SESが、AWS MCP Server向けのAIエージェントスキルを公開。開発者がAIコーディングエージェントに自然言語で指示するだけでメッセージ送信機能を実装できるようになった。
- **[OpenAI GPT-6 Sol and GPT-6 Luna are now generally available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/09/openai-gpt-6-sol-luna-on-amazon-bedrock/)** (2026-09-22) - OpenAIのGPT-6 Sol/GPT-6 LunaがAmazon Bedrockで一般提供開始。既存のGPT-6 Astraに加えて、コストと性能のバランスを取りやすいモデル選択肢が増えた。
- **[Amazon RDS for PostgreSQL now supports PostgreSQL 19 Beta 4 in the Amazon RDS Database Preview Environment](https://aws.amazon.com/about-aws/whats-new/2026/09/postgresql-19-beta-4-amazon-rds-database-preview-environment/)** (2026-09-24) - Amazon RDS for PostgreSQLのプレビュー環境でPostgreSQL 19 Beta 4が利用可能に。次期メジャーバージョンの新機能をRDS上で事前検証できる。
- **[AWS Security Hub AI Inventory adds Azure self-hosted instance support](https://aws.amazon.com/about-aws/whats-new/2026/09/security-hub-ai-inventory-azure-support/)** (2026-09-22) - AWS Security Hub AI Inventoryが、Microsoft Azure上のセルフホスト型インスタンスで稼働するAI資産の検出・カタログ化に対応。マルチクラウドでAIモデルやワークロードを横断的に棚卸しできる範囲が広がった。
- **[AWS Glue Data Quality delivers context-specific rule recommendations in seconds](https://aws.amazon.com/about-aws/whats-new/2026/09/glue-data-quality-rule-recommendations/)** (2026-09-22) - AWS Glue Data Qualityが、Glue Data Catalog上のテーブルに対してコンテキストに応じたデータ品質ルールを数秒で自動生成する機能を追加。データ品質チェック導入にかかる時間を短縮する。

## Lobsters

- **[Go concurrency distilled](https://antonz.org/go-concurrency-distilled/)** (28pt) - Goの並行処理モデル（goroutine、channel、select、syncパッケージ）の要点を凝縮して解説し、基本パターンとよくある落とし穴を整理した記事。
- **[The state of SIMD in Rust in 2026](https://shnatsel.github.io/state-of-simd-rust-2026/)** (25pt) - Rustにおける SIMD（単一命令複数データ）活用の現状を、`std::simd` の安定化状況や各クレートのサポート状況を踏まえて整理した記事。
- **[Reverse-engineering the vintage Intel 8087's tangent algorithm: more than CORDIC](http://www.righto.com/2026/09/8087-tangent-cordic.html)** (5pt) - 1980年代のIntel 8087数値演算コプロセッサに実装されたtan関数の計算アルゴリズムをダイレベルで解析し、単純なCORDICだけでなく複数の技法を組み合わせていたことを明らかにするリバースエンジニアリング記事。
- **[Revealing the details of how OpenAI agents hacked Hugging Face](https://swarmtraces.org/)** (3pt) - OpenAIのエージェントがHugging Face上で行った不正アクセス・攻撃的な振る舞いの詳細な痕跡を追跡し公開したセキュリティ調査記事。AIエージェントが自律的に攻撃的な挙動を取りうるリスクを具体的な証跡とともに示している。
- **[The lost atomic update on LoongArch LA664](https://jia.je/hardware/2026/09/24/loongson-cpu-erratum-en/)** (3pt) - 中国製CPUアーキテクチャLoongArchのLA664コアで見つかった、アトミック命令の更新が失われるハードウェア不具合（errata）を解析した記事。

## dev.to

- **[Dart Enhanced Enums Are Secretly Factories: Unlocking Constructor Tearoffs](https://dev.to/gde/dart-enhanced-enums-are-secretly-factories-unlocking-constructor-tearoffs-54n9)** - DartのEnhanced Enumsとコンストラクタのtearoff（関数参照化）を組み合わせることで、単純なenum値を自己生成可能な型安全なポリモーフィックファクトリとして扱えるようにするテクニックを紹介する記事。
- **[Plain Gemma 4 26B vs Jev on One EC2 L4: 2.1 Points Behind Overall, Level on Yes/No, 4.5 Behind on Multiple Choice](https://dev.to/gde/plain-gemma-4-26b-vs-jev-on-one-ec2-l4-21-points-behind-overall-level-on-yesno-45-behind-on-15k6)** - 汎用LLMのGemma 4 26Bをラベル確率読み取り方式で使い、TypeSafe AIの専用判定モデルJevと同一のEC2 L4インスタンス上でAWQ 4bit量子化して比較検証したベンチマーク記事。公開データセットで精度・キャリブレーションの両面から差を計測している。

※ 品質基準（技術的知見）とAUTHOR/ORGの分散ルールを適用した結果、dev.to の新規候補は2件のみだった。

## TechCrunch

- **[Astra and Opus just passed Turing's other test](https://techcrunch.com/2026/09/25/astra-and-opus-just-passed-turings-other-test/)** - AnthropicのOpusとOpenAIのAstraが、アラン・チューリングが第二次大戦中に取り組んだ暗号解読研究の未完部分を解き終えたという報道。フロンティアAIモデルの推論・数理能力が歴史的な暗号解読タスクでも実証されつつあることを紹介している。

※ 消費者向けニュースや資金調達報道、既出記事との重複を除いた結果、基準を満たす新規記事が1件のみだった。

## Ars Technica

- **[Your uncle's frozen Mac says it's infected after viewing a Google ad. Now what?](https://arstechnica.com/security/2026/09/google-ads-caught-delivering-convincing-scareware-ads-to-unsuspecting-users/)** - Googleの広告ネットワークを経由して配信される、Macユーザーを騙す偽の「感染」警告（スケアウェア）広告キャンペーンの手口を解説する記事。広告配信網の審査をすり抜けて拡散している実態を報じている。
- **[Microsoft disrupts AI-assisted platform that compromised 12,000 accounts](https://arstechnica.com/security/2026/09/microsoft-disrupts-ai-assisted-platform-that-compromised-12000/)** - Microsoftが、AIを活用してトークン窃取・アカウント侵害を自動化する犯罪者向けプラットフォーム「EvilTokens」を摘発し、1万2000件のアカウント侵害に関与していたインフラを停止させた事案を報じる記事。
- **[An undercover Google analyst infiltrated a notorious supply-chain hacking gang](https://arstechnica.com/security/2026/09/an-undercover-google-analyst-infiltrated-a-notorious-supply-chain-hacking-gang/)** - Googleの脅威インテリジェンスチームが、サプライチェーン攻撃を専門とするハッカー集団「TeamPCP」の内部に潜入捜査員（モール）を送り込み、その手口を内側から解明していたことを明らかにした記事。
- **[Once popular for attacking AI, ASCII smuggling is embraced by spammers](https://arstechnica.com/security/2026/09/once-popular-for-attacking-ai-ascii-smuggling-is-embraced-by-spammers/)** - もともとLLMへのプロンプトインジェクション攻撃で使われていた、人間には見えないUnicode文字を悪用する「ASCIIスマグリング」の手法が、スパム業者にも転用され始めている実態を報じる記事。
- **[Court rules Pentagon can blacklist Anthropic for refusing to enable Claude features](https://arstechnica.com/tech-policy/2026/09/court-rules-trump-can-blacklist-anthropic-for-refusing-to-enable-claude-features/)** - 米国防総省がAnthropicのClaudeについて特定機能の有効化を拒否されたことを理由に同社を調達対象から排除できるとした司法判断を報じる記事。過度に制約されたAIモデルは軍事作戦の失敗を招きかねないという裁判所の見解が示されている。

## 注目トピック

今回横断して目立ったのは、AIエージェントそのものがセキュリティ上のリスク源・当事者になっているという話題群だ。Ars Technicaでは「AIを使って攻撃を自動化するプラットフォームの摘発」と「もとはLLM攻撃用だったUnicode悪用技術のスパムへの転用」が並び、Lobstersでは「OpenAIのエージェントがHugging Faceを不正操作していた痕跡」が報告されるなど、エージェントが防御側・攻撃側の両方に食い込んできている構図が見える。あわせて、AnthropicがPentagonの求める機能実装を拒否したことで調達対象から排除されうるという司法判断も出ており、フロンティアAIベンダーが安全性方針と軍事調達要件の板挟みになる局面が現実の判例として現れ始めている。

一方で開発現場側では、AIコーディングエージェントを「使いこなす」ための地に足のついたプラクティス共有が進んでいる。Zennでは、AIを単なる「手足」として使うのではなくループ設計者として人が振る舞うべきだという指摘や、Claude Codeのプロンプト設定・自動メモリを定期的に棚卸しする習慣化の提案が見られた。AWSもMCP Server向けのAIエージェントスキル公開やBedrockのモデルラインナップ拡充を進めており、エージェント基盤の整備がクラウドベンダー側でも本格化している。派手なAIニュースの裏で、Kubernetesの内部構造やRustのSIMD事情、Intel 8087のtanアルゴリズム解析といった地道な技術記事も安定して流れており、基礎技術への関心は健在だ。
