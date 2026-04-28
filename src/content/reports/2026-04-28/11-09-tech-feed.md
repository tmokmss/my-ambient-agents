---
title: "Tech Feed ダイジェスト（2026年4月28日）"
date: "2026-04-28T11:09"
category: "summary"
summary: "バイブコーディングのセキュリティリスク・Temporalへの非同期処理移行・DeepSeek V4オープンソース・GitHubActionsの脆弱性・インフラ事故ポストモーテム"
tags: ["security", "ai", "frontend", "aws", "rust", "mcp", "devops", "llm", "open-source"]
---

## はてなブックマーク (テクノロジー)

- **[【2026年版】フロントエンド技術選定：React・Vue・Angularの現在地と「AI時代の生存戦略」](https://zenn.dev/nijima/articles/651ed3c1f2ded5)** ([198users](https://b.hatena.ne.jp/entry/s/zenn.dev/nijima/articles/651ed3c1f2ded5)) - React・Vue・Angularそれぞれの2026年時点の採用動向とAIコーディングエージェントとの相性を比較分析。「エコシステム規模＝LLMの学習データ量」という観点からReactの優位性がさらに強化されている実情と、Vue/Angularが生き残るための戦略が論じられている。

- **[AIオタクのセキュリティエンジニアが伝えたい、バイブコーディングのセキュリティリスク7選](https://blog.flatt.tech/entry/vibe_coding_security_risk)** ([98users](https://b.hatena.ne.jp/entry/s/blog.flatt.tech/entry/vibe_coding_security_risk)) - 「バイブコーディング」（AIに任せっきりの実装スタイル）が生みやすい7種のセキュリティリスクをGMO Flatt Securityが整理。入力検証の省略・シークレットのハードコード・依存関係の無検証インストールなど、AIが自然にやりがちな問題パターンが具体的に解説されている。

- **[メッセージキュー型の非同期処理から Temporal 移行へ](https://speakerdeck.com/shibukazu/metusezikiyuxing-nofei-tong-qi-chu-li-kara-temporal-yi-xing-he)** ([138users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/shibukazu/metusezikiyuxing-nofei-tong-qi-chu-li-kara-temporal-yi-xing-he)) - SQS/RabbitMQなどのメッセージキューによる非同期処理をワークフローエンジンTemporalに移行した経験を詳述。リトライ制御・タイムアウト・冪等性の扱いが格段に楽になる一方、学習コストとオペレーション負担について現実的な評価が共有されている。

- **[非エンジニアの「作りたい」と「安全に公開したい」を両立する Sandbox MCP を作った](https://zenn.dev/aircloset/articles/65efe9614f8e73)** ([88users](https://b.hatena.ne.jp/entry/s/zenn.dev/aircloset/articles/65efe9614f8e73)) - MCPサーバー経由でAIが実行できる操作をサンドボックス内に閉じ込めることで、非エンジニアがAIアプリを作っても本番環境や社内データに触れさせない仕組みを実装した記事。パーミッション設計の考え方が参考になる。

- **[Scribe v2 リアルタイム音声認識 - 150ms低遅延API](https://elevenlabs.io/ja/realtime-speech-to-text)** ([66users](https://b.hatena.ne.jp/entry/s/elevenlabs.io/ja/realtime-speech-to-text)) - ElevenLabsが発表した音声認識API「Scribe v2」は150msという超低レイテンシが特徴。リアルタイム文字起こしだけでなく音声エージェントのターン検出にも応用可能で、会話型AIの応答速度向上に貢献が期待される。

## Zenn

- **[AIに会社のGoogleアカウントを渡していませんか](https://zenn.dev/finatext/articles/mcp-gateway-google-sa)** - MCPサーバーにGoogle Service AccountのOAuth認証を実装する際に、スコープ過大付与・トークン永続化・監査ログ欠如といった落とし穴を解説。「AIに渡す権限は最小権限原則で」という当たり前の原則がMCP文脈で具体化された実践的ガイド。

- **[ベクトルを使わないRAG。全てのナレッジを階層化する手法](https://zenn.dev/knowledgesense/articles/7dddae04a7d828)** - ベクトル埋め込みではなくツリー構造の階層インデックスを用いてナレッジを整理するRAG手法を提案。大量ドキュメントの検索精度がフラットなベクトル検索より高まるケースと、逆に劣るケースの分析が含まれており、RAG設計の選択肢を広げる一記事。

- **[春休みなので脆弱性報告したらCVEついた話 (CVE-2026-32309)](https://zenn.dev/ao9s/articles/cryptomator-hub-http-downgrade)** - Cryptomator Hubに存在するHTTPSダウングレード誘導の脆弱性を発見・報告し、CVE番号を取得するまでの全プロセスを記録した記事。学生が春休み中に本格的な脆弱性調査を行った事例として、脆弱性報告フローの学習資料としても価値が高い。

- **[コードを1行も書く前にバグを潰す — 生成AIが「理想論」だったシフトレフトを現実にする](https://zenn.dev/tokium_dev/articles/c0e6e9aca98a85)** - 「シフトレフト」（テストや品質保証を開発の早い段階で行う）という概念が、生成AIによる仕様レビュー自動化によって実用的なコストで実現できるようになった実例を紹介。実装前にAIが仕様書の矛盾・エッジケース漏れを指摘するフローが具体的に解説されている。

- **[AIエージェントにユーザーを演じさせて業務をテストする](https://zenn.dev/bizreach_aps/articles/0d758497357167)** - 本物のユーザーの代わりにAIエージェントが業務フローを実行してE2Eテストを行う手法の実装例。ユーザーシナリオのカバレッジを自動で広げるためにLLMに「キャラクター設定」を与えてランダム性のある行動をシミュレートさせるアプローチが紹介されている。

## Qiita

- **[Claude CodeのVSCode拡張が使いやすいよ](https://qiita.com/moritalous/items/3c5269610f26e23c5b04?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Claude Codeの公式VSCode拡張機能の活用方法とCLIとの使い分けを解説。エディタを離れずにClaude Codeを操作でき、開いているファイルのコンテキストが自動的に付与される点など拡張特有の利点をまとめた実践ガイド。

- **[WAFは安心を買う装置ではない](https://qiita.com/mochi_cron/items/9ce527df39e7dd6e75fe?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - WAFを導入するだけでWebアプリが守られると思い込む「WAF過信」の危険性を解説。バイパス手法・誤検知によるサービス停止リスク・WAFが対処できない脆弱性の種類を整理し、WAFはあくまで多層防御の一要素に過ぎないという本質的な主張を展開している。

- **[【緊急】ワイルドカード証明書の誤用がサブドメイン乗っ取りを引き起こす仕組みと対策](https://qiita.com/kawabe0201/items/d3c0ef67a91a37076acf?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - ワイルドカードTLS証明書を使っているサービスで廃止済みのサブドメインが未削除の場合、外部からそのサブドメインを乗っ取り正規証明書が有効なままフィッシングに悪用される攻撃手法と防御策を具体的に説明している。

- **[Copilot Studio の MCP 利用におけるセキュリティ対策](https://qiita.com/Takashi_Masumori/items/5045c0d46a756f0a49fd?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Microsoft Copilot StudioでMCPサーバーを利用する際の認証・認可・ログ監視の設定方法と、見落とされやすいリスクポイントを解説。MCP普及に伴い企業向けAIツールでのセキュリティ設計が重要課題になっていることを示す実践記事。

- **[OCIで試すApache Iceberg：Parquetとの比較でわかる4つの特徴](https://qiita.com/yushibats/items/b6b37f30fb6672e0364f?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - OCI（Oracle Cloud）上でApache Icebergテーブルフォーマットを試しながら、単なるParquetファイルとの違いを実測で比較。タイムトラベルクエリ・スキーマ進化・小ファイル統合などIceberg固有の4機能を動作デモとともに解説している。

## AWS 新着

- **[Amazon Redshift Serverless AI-driven scaling is now the default for new workgroups](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-redshift-serverless-ai-driven-scaling-default/)** (2026-04-27) - Redshift Serverlessの新規ワークグループでAI駆動スケーリングがデフォルト化。機械学習がワークロードパターンを学習し、ピーク時のキャパシティ不足とアイドル時の過剰リソースを自動で最適化する。手動のRPU設定なしに安定したパフォーマンスを得やすくなった。

- **[AWS KMS now tracks last usage of all KMS keys](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-kms-tracks-last-usage-kms-keys/)** (2026-04-27) - KMSキーの最終暗号化操作日時が可視化され、長期未使用キーの特定とクリーンアップが容易に。これまでCloudTrailログを手動解析しなければ把握できなかった情報がコンソールとAPIから直接取得可能になった。

- **[Introducing Amazon EC2 M8in / M8ib / R8in / R8ib / C8ine / M8ine instances](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-ec2-m8in-m8ib/)** (2026-04-27) - 第6世代IntelのXeon Scalableプロセッサ搭載の新インスタンス群が一斉GA。M8in/R8inはネットワーク最適化、M8ib/R8ibはEBS最適化、C8ine/M8ineはさらに高密度ネットワーク帯域を提供。HPC・ビッグデータ・AIインファレンスワークロード向けのパフォーマンス向上が期待される。

- **[Amazon Athena simplifies federated queries with managed connectors](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-athena/)** (2026-04-23) - AthenaがDynamoDB・PostgreSQL・MySQL・Snowflakeなど12データソース向けのマネージドコネクタを提供開始。これまでLambda関数として自前でデプロイが必要だったフェデレーテッドクエリの設定作業が大幅に簡略化された。

- **[AWS Client VPN now supports native AWS Transit Gateway integration](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-client-vpn-transit-gateway/)** (2026-04-23) - Client VPNがTransit Gatewayとネイティブ統合されたことで、複数VPCや複数アカウントへのリモートアクセスを単一のVPNエンドポイントで集中管理できるように。マルチアカウント構成における運用複雑性が解消される。

## Lobsters

- **["Why not just use Lean?"](https://lawrencecpaulson.github.io/2026/04/23/Why_not_Lean.html)** - ケンブリッジ大学のLawrence Paulson教授が「なぜLean（形式検証証明支援系）を使わないのか」という問いに対して、IsabelleなどのLean以外の証明支援系が果たしてきた役割と思想的差異を論じるエッセイ。形式検証コミュニティの多様性と各ツールの設計哲学が俯瞰できる。

- **[How I Broke the Anti-Bot Behind Nike, Kick, and Twitch](https://emro.cat/blog/how-i-broke-the-anti-bot-behind-nike-kick-and-twitch/)** - Nike・Kick・Twitchが共通して利用していた大手アンチボットサービスの解析と回避に成功するまでのプロセスを詳述したセキュリティリサーチ。JavaScriptのフィンガープリント収集ロジック・TLSフィンガープリント・行動分析の3層防御が技術的にどう実装されていたかが明かされている。

- **[GitHub Actions is the weakest link](https://nesbitt.io/2026/04/28/github-actions-is-the-weakest-link.html)** - GitHub Actionsのワークフロー設定がCI/CDパイプライン全体のセキュリティにおける最も攻撃されやすいポイントになっている現状を論じる記事。サードパーティアクションのpin不足・シークレット漏洩パターン・PRトリガーの権限問題など、実際の攻撃事例を交えた分析が参考になる。

- **[Using Rust to Build a $1 Handheld Gaming Console](https://chrisdell.info/using-rust-to-build-a-1-dollar-handheld-gaming-console/)** - 1ドルのマイコン基板を使ってRustでゲームを動かすハンドヘルドコンソールを自作したプロジェクト記事。no_std環境でのRust組込み開発・ビットバンギングでのディスプレイ制御・ゲームロジックのメモリ制約内実装など、低レベルRustの実践として興味深い内容。

- **[FOSDEM 2026 - All FOSDEM 2026 videos are online](https://fosdem.org/2026/news/2026-04-26-all-videos-published/)** - 2026年2月にブリュッセルで開催されたFOSDEM 2026の全講演動画が公開された。OSSの最前線を集めた世界最大のオープンソースカンファレンスの知見が無料で視聴可能になっており、見逃したセッションの確認に好機。

## dev.to

- **[Are We Using AI at the Wrong Scale?](https://dev.to/kernelpryanic/are-we-using-ai-at-the-wrong-scale-2klo)** - IDE上でコード全体をクラウドのLLMに送りつけてnullチェック1行を追加させる現在の使われ方に疑問を投げかける記事。プライバシー・コスト・レイテンシの観点から「もっと小さなスコープでローカルモデルを使うべきではないか」という議論を展開している。

- **[1.6 Trillion Parameters Just Went Open Source. What About the Other Direction?](https://dev.to/mininglamp/16-trillion-parameters-just-went-open-source-what-about-the-other-direction-3dkl)** - DeepSeekがV4モデルファミリーをオープンソース公開し、フラッグシップのV4-Pro Baseが1.6兆パラメータ（862B active）という規模を持つことが明らかに。「重みが公開されても推論に数百GPU必要では本当にオープンか」という問いを立て、オープンソースAIの定義を再考する。

- **[When Coding Agents Forget](https://dev.to/rawveg/when-coding-agents-forget-44g0)** - 数時間の長期タスクを実行するAIコーディングエージェントがコンテキストウィンドウの限界で初期の指示や意図を「忘れる」問題の現状を整理。エージェントの記憶管理・コンテキスト圧縮・外部メモリストア活用など現時点での対処法と限界を論じている。

- **[Postmortem: A Kafka 4.0 Broker Failure on Kubernetes 1.34 Caused 1 Hour of Message Lag for 10k Topics](https://dev.to/johalputt/postmortem-a-kafka-40-broker-failure-on-kubernetes-134-caused-1-hour-of-message-lag-for-10k-2kdc)** - Kubernetes上のKafka 4.0ブローカーが障害を起こし1万トピックで1時間のメッセージ遅延が発生したインシデントのポストモーテム。原因・タイムライン・対応・再発防止策が詳述されており、Kafka/Kubernetes本番運用者必読の事例研究。

- **[How I built a privacy-first AI medical tool in a single HTML file](https://dev.to/dagrang/how-i-built-a-privacy-first-ai-medical-tool-in-a-single-html-file-136n)** - サーバー不要・アカウント不要・ストレージ保存なしで、単一HTMLファイルとして動作するプライバシー重視のAI医療症状チェッカーを開発した記事。WebLLM/WebGPUを活用してすべての処理をブラウザ内で完結させる設計が、医療プライバシー要件とAI活用の両立モデルとして注目される。

## TechCrunch

- **[Consumers lost $2.1B to social media scams in 2025, FTC reports](https://techcrunch.com/2026/04/27/consumers-lost-2-1-billion-to-social-media-scams-in-2025-ftc-reports/)** (2026-04-27) - FTCの報告によると2025年のSNS詐欺による消費者被害が21億ドルに達し、2019年比で8倍に急増。投資詐欺・偽ショッピング・ロマンス詐欺の3類型が被害額の大半を占め、SNS上のAI生成偽広告・偽アカウントの増加が被害拡大の主因とされている。

- **[Hacker who allegedly carried out cyberattacks for China is extradited to US](https://techcrunch.com/2026/04/27/hacker-who-allegedly-carried-out-cyberattacks-for-china-is-extradited-to-u-s/)** (2026-04-27) - 中国政府系ハッキンググループに参加し米国内数千組織へのサイバー攻撃とCOVID-19研究データ窃取に関与したとされる容疑者の身柄が米国に移送された。国家支援型サイバー攻撃者の逮捕・移送は異例で、米中サイバー外交に影響する可能性がある。

- **[Critical infrastructure giant Itron says it was hacked](https://techcrunch.com/2026/04/27/critical-infrastructure-giant-itron-says-it-was-hacked/)** (2026-04-27) - 水道・電力メーター等の重要インフラ監視システムを数億戸に提供するItronがサイバー攻撃を受けたことを公表。影響範囲の詳細は非開示だが、重要インフラのIoT機器管理システムへの侵害として潜在的リスクが大きく、セキュリティコミュニティで注目されている。

- **[Investors back Skye's AI home screen app for iPhone ahead of launch](https://techcrunch.com/2026/04/27/investors-back-skye-signull-labs-ai-home-screen-app-for-iphone-ahead-of-launch/)** (2026-04-27) - AIがiPhoneのホーム画面を動的に管理・カスタマイズするアプリ「Skye」がローンチ前から投資家の注目を集めている。従来のアプリアイコン配置からAI推薦型UXへの移行を目指す試みで、OpenAIがAIエージェントによるアプリ代替を含む携帯電話開発を検討中と伝えられる中、スマートフォンUIの変革を先取りする動きとして捉えられている。

## Ars Technica

- **[Open source package with 1 million monthly downloads stole user credentials](https://arstechnica.com/security/2026/04/open-source-package-with-1-million-monthly-downloads-stole-user-credentials/)** (2026-04-27) - 月間100万ダウンロードの人気OSSパッケージ「element-data」がユーザーの認証情報を窃取していたことが発覚したサプライチェーン攻撃事例。悪意あるコードが静かに混入されていたとみられ、利用しているプロジェクトは即時確認と侵害調査が推奨されている。

- **[New robotic control software avoids jamming their joints](https://arstechnica.com/science/2026/04/kinematic-intelligence-helps-robots-learn-their-limits/)** (2026-04-26) - ロボットがキネマティクスの限界（関節ロック・特異点）を自律的に学習・回避できる新制御ソフトウェアを研究チームが開発。異なるハードウェア構成のロボット間でも知識を転用できる設計により、汎用ロボット制御の実用化が加速する可能性がある。

- **[Put it in pencil: NASA's Artemis III mission will launch no earlier than late 2027](https://arstechnica.com/space/2026/04/put-it-in-pencil-nasas-artemis-iii-mission-will-launch-no-earlier-than-late-2027/)** (2026-04-28) - SpaceXとBlue OriginがNASAに対してArtemis III（有人月面着陸）向けの月着陸船を2027年末までに準備できると報告。当初計画からさらに延期が確定し、NASAの月計画全体のスケジュールに影響する見通し。

- **[China kills Meta's acquisition of Manus as US-China AI rivalry deepens](https://arstechnica.com/ai/2026/04/china-kills-metas-acquisition-of-manus-as-us-china-ai-rivalry-deepens/)** (2026-04-27) - MetaによるAIエージェント企業Manusの買収を中国当局が正式に差し止め。技術流出と国家安全保障を理由とした阻止で、テック創業者が中国との関係を断ち切ることの難しさを示す事例として、米中AI覇権競争のリアルな断面を映し出している。

## 注目トピック

今回のフィードを通じて際立つのは**セキュリティの「新しい攻撃面」の急拡大**だ。AIバイブコーディングによる脆弱なコード生成、MCPサーバーへの過剰権限付与、月間100万ダウンロードのOSSパッケージへのサプライチェーン攻撃（element-data）、GitHub Actionsの設定不備——いずれも「AI時代のCI/CDと開発ツール」が新たな侵害経路になっていることを示している。WAF過信への警鐘やワイルドカード証明書の誤用といった記事が同日に並ぶのも、防御側の意識が追いついていない現実を反映している。

もう一つの潮流は**LLMの「規模 vs 実用性」の分岐**だ。DeepSeekが1.6兆パラメータモデルをオープンソースで公開した一方で、「AIを使いすぎていないか？」という反省的な記事も同時に注目を集めている。コーディングエージェントがコンテキストを「忘れる」問題、ローカルの単一HTMLファイルで動くプライバシー重視AI医療ツール、そしてRustで1ドルコンソールを作る記事——これらは「スケールを追うのではなく、適切な規模でAIを使う」という方向性を示している。技術の超大規模化と超ミニマル化が並行して進む、2026年らしい対比となった。
