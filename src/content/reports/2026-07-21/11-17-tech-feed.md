---
title: "Tech Feed ダイジェスト（2026年7月21日）"
date: "2026-07-21T11:17"
category: "summary"
summary: "AIコーディングブーム後の「本体の強さ」論やAI生産性0.66%論争が話題、Anthropicの著作権和解も承認"
tags: ["ai", "security", "aws", "devops", "database"]
---

## はてなブックマーク (テクノロジー)

- **[「AIコーディングブーム」が去ったUSで、エンジニアに求められる「本体の強さ」](https://atmarkit.itmedia.co.jp/ait/articles/2607/21/news012.html)** ([297users](https://b.hatena.ne.jp/entry/s/atmarkit.itmedia.co.jp/ait/articles/2607/21/news012.html)) - 米国でAIコーディングツール礼賛の熱が一段落し、AIに頼らず設計判断や問題の本質を見抜ける「本体の強さ」を持つエンジニアが再評価されているとする現地報告。ブーム後の揺り戻しを冷静に捉えた内容。
- **[外部記憶と化したWebから生成AIを通じて情報を取り出すとき、何が起こっているのか](https://ki-to-oku.net/outsourcing-judgment-to-ai-after-memory-goes-external/)** ([164users](https://b.hatena.ne.jp/entry/s/ki-to-oku.net/outsourcing-judgment-to-ai-after-memory-goes-external/)) - 人間が記憶や判断そのものをWebと生成AIに外部委託しつつある状況を、情報の取得プロセスに焦点を当てて分析した論考。検索からAI要約への移行が、情報の信頼性検証をどう変えるかを問うている。
- **[AIによる生産性向上「10年でわずか0.66％」ノーベル賞学者の驚きの“検算”](https://jbpress.ismedia.jp/articles/-/96002)** ([107users](https://b.hatena.ne.jp/entry/s/jbpress.ismedia.jp/articles/-/96002)) - ゴールドマン・サックスなどが掲げるAIによる生産性向上予測を、ノーベル賞学者が検算した結果、実際の経済効果は10年でわずか0.66%にとどまるという分析を紹介。巨額投資と株価高騰が本当に正当化されるのかを問い直す内容。
- **[Rustで書き直されたBun、早くもClaude Codeアプリに本番投入された模様](https://www.publickey1.jp/blog/26/rustbunclaude_code.html)** ([17users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/rustbunclaude_code.html)) - JavaScriptランタイムBunのRust移植版が、早くもClaude Codeアプリの本番環境に投入されたとみられる事例を報じた記事。ランタイム書き換えの実運用投入までの速さが注目されている。
- **[LLM の「脳内」をハッキングする技術](https://joisino.hatenablog.com/entry/hack)** ([8users](https://b.hatena.ne.jp/entry/s/joisino.hatenablog.com/entry/hack)) - LLMの内部状態（アクティベーション）に直接介入して挙動を操作する手法を解説した記事。プロンプト経由の操作とは異なる、モデル内部へのハッキング手法という切り口が技術的に興味深い。

## Zenn

- **[検索画面のUI設計で、バックエンドエンジニアが早めに口出しすべき3つのこと](https://zenn.dev/ncdc/articles/6c8eabde83cf0a)** - 検索UIの要件（あいまい検索・並び替え条件など）を後からバックエンドで実装する段になって速度問題に直面した経験から、設計会議の初期段階でバックエンドエンジニアが指摘すべき3つの観点を整理した記事。
- **[Linuxのディレクトリ配置ルール（FHS）超入門](https://zenn.dev/juth/articles/9dc12f2621e2c1)** - 設定ファイルやアプリデータがLinux上のどこに配置されるかを定めた世界共通ルール「FHS（Filesystem Hierarchy Standard）」を、初心者向けに整理した入門記事。
- **[AWSのBilling障害の対応への反省点](https://zenn.dev/blue_jam/articles/08b31e29699b56)** - 個人のAWSアカウントでコストが過大表示される障害が発生した際の自身の対応を振り返り、IAM周りに不慣れな状態での障害対応がどう後手に回ったかを率直に公開した記事。
- **[DELETE したはずの行が SELECT で返り続ける ときに何を疑うか](https://zenn.dev/dress_code/articles/15659114e7f21c)** - 削除・更新したはずのデータが読み取り時に古いまま返ってくるという、データベース周りでハマりがちな現象について、疑うべきポイントを順序立てて整理した実践記事。
- **[codexの独自用語乱立・曖昧問題への対策](https://zenn.dev/u1/articles/codex-referent-before-label)** - AIコーディングツールCodexが、設計や実装の際に言葉の定義を曖昧なまま進めてしまい混乱を招く問題への対策を提案した記事。Claudeでは起きにくいとされる挙動差にも言及している。

## Qiita

- **[CLAUDE.md 設計パターン集──プロジェクト規模別に使い分ける7つのテンプレート](https://qiita.com/hikariclaude01/items/e54c70c90c6aa84d0f66)** - Claude Codeのプロジェクト設定ファイル「CLAUDE.md」を、小規模から大規模まで7つのテンプレートに分けて使い分ける設計パターンをまとめた記事。
- **[WordPress緊急脆弱性「wp2shell」対応手順 ― 確認・更新・侵害点検まで](https://qiita.com/BrainDirection/items/0ea9cf3cdfbdbfc94dd3)** - WordPressで発見された緊急脆弱性「wp2shell」への対応として、脆弱性有無の確認からアップデート、侵害の有無を点検する手順までを実務向けにまとめた記事。
- **[あと10日で攻撃コストが激変する。Kimi K3公開前にやるべきセキュリティ対策](https://qiita.com/udowanllc/items/9a1c5da9a36b7f74691a)** - 高性能な新モデルの公開によって攻撃者側の攻撃コストが大幅に下がることを見越し、公開前にとるべきセキュリティ対策を提言した記事。AIモデルの進化がそのまま攻撃の民主化につながる懸念を扱っている。
- **[AIの推進がうまくいかない組織アンチパターン](https://qiita.com/jw-automation/items/7a2f85593a2e2ba71306)** - 組織にAI活用を導入しようとして失敗するパターンを、よくあるアンチパターンとして整理した記事。ツール導入だけで終わらせず組織設計まで踏み込む必要性を説いている。
- **[Jenkins から TestFlight へ ― Mac 1 台で iOS リリースを半自動化した話](https://qiita.com/jqit-yukiono/items/1ebffa98b9ff2dca7a9b)** - Mac1台という限られたリソースで、JenkinsからTestFlightへのiOSリリースフローを半自動化した実践記録。個人開発・小規模チームでも参考にしやすい構成。

## AWS 新着

- **[AWS Data Exports now provides standardized Amazon Bedrock product metadata](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-data-exports-amazon-bedrock-product-metadata/)** (2026-07-20) - AWS Data Exports（Cost and Usage Report）にAmazon Bedrockの標準化された製品メタデータが追加され、FinOpsチームがBedrock利用コストを構造化された属性で分析しやすくなった。
- **[Amazon Managed Service for Apache Flink now supports Apache Flink 2.3](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-managed-service-flink-2-3/)** (2026-07-20) - Amazon Managed Service for Apache FlinkがApache Flink 2.3に対応し、バックプレッシャー対応を改善する適応的パーティション選択機能が利用可能になった。
- **[PostgreSQL 19 Beta 2 is now available in Amazon RDS Database Preview Environment](https://aws.amazon.com/about-aws/whats-new/2026/07/postgresql-19-beta-2-amazon-rds-database-preview-environment/)** (2026-07-16) - Amazon RDS for PostgreSQLのプレビュー環境で、PostgreSQL 19 Beta 2が利用可能になった。正式リリース前の新機能を本番相当の環境で検証できる。
- **[Announcing the general availability of a new AWS Local Zone in Athens, Greece](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-local-zone-athens-greece/)** (2026-07-20) - ギリシャ・アテネに新しいAWS Local Zoneが一般提供開始された。EMEAで2番目となるLocal ZoneでAmazon S3などをサポートし、低レイテンシが求められるワークロードの選択肢が広がる。
- **[Amazon S3 Event Notifications now include system-generated tags](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-s3-event-notifications-system-generated-tags/)** (2026-07-16) - Amazon S3のイベント通知に、EventBridgeやSQS、SNS、Lambdaへの配信を含めシステム生成タグが付与されるようになり、イベントのフィルタリングやルーティングがより柔軟になった。

## Lobsters

- **[432 Linux kernel CVEs published in the last 24 hours](https://lore.kernel.org/linux-cve-announce/)** (18pt) - Linuxカーネルの脆弱性(CVE)が24時間で432件も公開されたという驚きの数字を伝えるスレッド。CVE自動採番の運用変更により件数が急増しているという背景があり、単純な脆弱性急増と誤解しないよう注意喚起する議論も上がっている。
- **[Minimal Git CI using hooks](https://mccd.space/posts/26-06-29/simple-git-ci)** (33pt) - GitHub ActionsのようなCIサービスに頼らず、Gitのフック機構だけで最小限のCIパイプラインを組む方法を紹介する記事。外部サービス依存を減らしたい自前運用志向の開発者に向けた実践例。
- **[GitHub suddenly rejected my SSH key (the fix was a .pub file?!)](https://thorsell.io/2026/07/21/github-ssh-keys.html)** (8pt) - GitHubに突然SSHキーを拒否されるようになったトラブルの原因が、秘密鍵ではなく`.pub`拡張子付きの公開鍵ファイルの扱いにあったという顛末記。地味だが誰もがハマりうる設定ミスを共有している。
- **[A deep dive into my Forgejo setup](https://a.l3x.in/blog/welcome-to-my-forge/)** (17pt) - GitHub代替のセルフホスト型フォージ「Forgejo」の自前運用構成を、systemdでの動かし方まで含めて詳しく紹介した記事。GitHubに依存しない開発基盤を自分で持ちたい層に向けた実践知。
- **[95 reasons for having your own website](https://bellkiosk.website/blog/reasons-to-website.html)** (26pt) - SNSプラットフォームに依存せず自分のWebサイトを持つべき理由を95個列挙した記事。プラットフォーム依存への反発からパーソナルサイトやRSSを見直す動きが開発者コミュニティで続いていることを裏付けている。

## dev.to

- **[My fix for a data-loss bug sat in a green PR for four days. Every install in that window still had the bug.](https://dev.to/achiya-automation/my-fix-for-a-data-loss-bug-sat-in-a-green-pr-for-four-days-every-install-in-that-window-still-had-2jj5)** - CIがグリーンでレビュー待ちのPRが4日間放置され、その間すべてのインストールがデータ消失バグを抱えたままだったという体験談。CIが通っていることと実際にリリースされ問題が直っていることは別物だと再認識させる内容。
- **[Your GraphRAG stack is two databases. It should be one.](https://dev.to/samyama-ai/your-graphrag-stack-is-two-databases-it-should-be-one-31c6)** - 多くのGraphRAGシステムがベクトルDBとグラフDBという2つのストレージ層を組み合わせて構築されている現状に対し、本来1つの基盤に統合できるはずだと主張する記事。RAGアーキテクチャの複雑化に一石を投じている。
- **[Building AI Agents That Don't Hallucinate: Structured Workflows, Guardrails, and Per-Step Evaluation](https://dev.to/imus_d7584cbc8ee9b0336256/building-ai-agents-that-dont-hallucinate-structured-workflows-guardrails-and-per-step-evaluation-2g7c)** - 脆いプロンプトチェーンを、型付きスキーマとバリデーションゲート、ステップごとの評価に置き換えることで、AIエージェントの幻覚を抑える設計を解説した記事。
- **[Stop Building Custom Auth for Your SaaS](https://dev.to/ntty/stop-building-custom-auth-for-your-saas-2nep)** - 自作のSaaSで3週間かけて独自の認証システムを構築した経験から、パスワードハッシュ化やセッション管理、パスワードリセットを自前実装すべきではないと説く記事。既存の認証基盤を使うべき理由を実体験ベースで語っている。
- **[What DevOps Actually Is (It's Not a Job Title)](https://dev.to/sri2614/what-devops-actually-is-its-not-a-job-title-4amm)** - 求人票では「DevOpsエンジニア」という職種名としてDockerやKubernetesのスキルが並べられがちだが、本来DevOpsは職種ではなく文化・プラクティスであるという原点に立ち返って解説した記事。

## TechCrunch

- **[Anthropic's landmark $1.5B copyright settlement is approved](https://techcrunch.com/2026/07/20/anthropics-landmark-1-5b-copyright-settlement-is-approved/)** - AnthropicがAIモデルの学習データを巡る著作権訴訟で結んだ15億ドル規模の和解が裁判所に承認されたと報じられた。この訴訟は決着したが、著作権保護対象の作品をAI学習に使うこと自体の是非という大きな論点は未解決のまま残っている。
- **[Trump's latest AI czar has already resigned](https://techcrunch.com/2026/07/20/trumps-latest-ai-czar-has-already-resigned/)** - 米政権のAI政策を統括する「AI czar」の後任者が就任早々に辞任したと報じられた。AI標準・イノベーションセンター(CAISI)の局長ポストが、前任者の退任以降「回転ドア」状態になっている実情を伝えている。
- **[X relaunches a rebuilt Android app after year-long effort](https://techcrunch.com/2026/07/20/x-relaunches-a-rebuilt-android-app-after-year-long-effort/)** - Xが1年がかりで刷新したAndroidアプリを世界向けに再公開したと発表した。大規模な作り直しの割にUI変更への賛否が分かれるなど、ユーザー側の受け止めは一様ではない。
- **[Inference startup Infinity raises $15M from Touring Capital, OpenAI and Anthropic researchers](https://techcrunch.com/2026/07/20/inference-startup-infinity-raises-15m-from-touring-capital-openai-and-athropic-researchers/)** - AI推論基盤を手がけるスタートアップ「Infinity」が、OpenAIやAnthropicの研究者を含む投資家から1500万ドルを調達し、評価額1億ドルに達したと報じられた。推論コスト最適化への投資熱が続いている。
- **[Adobe camera app's new feature will critique your photos using AI](https://techcrunch.com/2026/07/20/adobe-camera-apps-new-feature-will-critique-your-photos-using-ai/)** - Adobeのカメラアプリ「Project Indigo」に、AIが撮影した写真を批評してくれる新機能が追加されたと報じられた。背景除去などの既存機能に加え、撮影後のフィードバックまでAIが担う流れが進んでいる。

## Ars Technica

- **[Firefighting drones in the works as wildfires plague US nearly year-round](https://arstechnica.com/ai/2026/07/firefighting-drones-in-the-works-as-wildfires-plague-us-nearly-year-round/)** - 米国で山火事がほぼ一年を通じて発生するようになった状況を受け、消火活動を担うドローンの開発が進んでいると報じる記事。人間のパイロットには危険すぎる状況でも活動できる自律飛行技術への期待が背景にある。
- **[AliExpress hit with record $625M fine after failing to make EU-ordered fixes](https://arstechnica.com/tech-policy/2026/07/aliexpress-fined-625m-for-failing-to-remove-unsafe-toys-dangerous-cosmetics/)** - AliExpressが、危険なおもちゃや化粧品の出品を是正するようEUから命じられていたにもかかわらず対応を怠ったとして、過去最高額となる6億2500万ドルの制裁金を科された。EUのプラットフォーム規制がより厳格に執行されている実例。
- **[India's first privately developed rocket reaches orbit on dramatic debut launch](https://arstechnica.com/space/2026/07/indias-first-privately-developed-rocket-reaches-orbit-on-dramatic-debut-launch/)** - インド初の民間開発ロケットが、劇的な展開を経て初打ち上げで軌道投入に成功したと報じられた。国営主導だった宇宙開発に民間プレイヤーが本格参入する節目として注目されている。
- **[Will Russia's answer to the Falcon 9 rocket ever take flight?](https://arstechnica.com/space/2026/07/will-russias-answer-to-the-falcon-9-rocket-ever-take-flight/)** - SpaceXのFalcon9に対抗するロシアの再使用型ロケット計画が、実際に飛行する見込みがあるのかを検証した記事。開発の遅れが続く同計画の現状を伝えている。

## 注目トピック

今回最も目立ったのは、AIブームの「効果」を冷静に問い直す論調だ。はてなブックマークでは「AIコーディングブームが去った米国で、エンジニアに求められる本体の強さ」という記事が297usersを集め、AIツールに頼らない設計判断力の再評価という揺り戻しを伝えた。同時に、ノーベル賞学者がゴールドマン・サックス予測を検算した結果、AIによる生産性向上効果は10年でわずか0.66%にとどまるという分析も107usersの支持を集めており、巨額投資と株価高騰の正当性そのものへの疑問が投げかけられている。一方でdev.toではGraphRAGの複雑なアーキテクチャを見直す提案や、AIエージェントの幻覚を構造化ワークフローで抑える設計記事が紹介されるなど、AI活用を実務でどう地に足をつけて扱うかという関心は途切れていない。

法制度・セキュリティ面でも動きが大きかった。TechCrunchではAnthropicのAI学習データを巡る著作権訴訟の15億ドル和解が裁判所に承認されたと報じられ、AI企業と権利者の対立に一つの区切りがついた。またLobstersではLinuxカーネルのCVEが24時間で432件公開されたという衝撃的な数字が話題になり、Qiitaでは緊急のWordPress脆弱性「wp2shell」への対応手順や、次期AIモデル公開を見据えたセキュリティ対策の記事が読まれるなど、AI・OSSを問わず足元の脆弱性対応に追われる状況が続いている。EUがAliExpressに過去最高額の制裁金を科した件も、プラットフォーム規制の実効性が強まっていることを示す一例と言える。
