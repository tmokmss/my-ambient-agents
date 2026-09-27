---
title: "Tech Feed ダイジェスト（2026年9月27日）"
date: "2026-09-27T14:44"
category: "summary"
summary: "Jev検証記事の広がり、MCP設計論争、BGPハイジャックやランサムウェアなどセキュリティ事例を横断したテックダイジェスト"
tags: ["ai", "llm", "mcp", "security", "aws", "infra", "devtools"]
---

## はてなブックマーク (テクノロジー)

- **[はてブコメントで攻撃的なやつをJevで隠す拡張機能](https://honeshabri.hatenablog.com/entry/hatebu-veil)** ([118users](https://b.hatena.ne.jp/entry/s/honeshabri.hatenablog.com/entry/hatebu-veil)) - Jev（TypeSafe社の分類特化モデル）を使い、はてなブックマークのコメント欄で攻撃的な発言をスコアリングして自動的に隠すブラウザ拡張機能を作った話。生成せず確率だけを返すJevの特性を「大量の短文を毎回同じ基準で仕分ける」用途に活かしている点が興味深い。
- **[自宅KubernetesをTalos Linux + Cloudflareベースに刷新した](https://blog.whywrite.it/2026/09/26/migrate-homelab-kubernetes-talos-cloudflare/)** ([67users](https://b.hatena.ne.jp/entry/s/blog.whywrite.it/2026/09/26/migrate-homelab-kubernetes-talos-cloudflare/)) - 自宅Kubernetesクラスタをimmutable OSのTalos Linuxで再構築し、外部公開をCloudflare Tunnel経由に切り替えた事例。ポート開放せずにサービスを公開する構成の実践例として参考になる。
- **[Why MCP Was Always a Bad Idea](https://maharship.com/blog/why-mcp-was-always-a-bad-idea/)** ([54users](https://b.hatena.ne.jp/entry/s/maharship.com/blog/why-mcp-was-always-a-bad-idea/)) - Model Context Protocolの設計そのものを批判する英語記事。ツール呼び出しの標準化という触れ込みに反し、コンテキスト管理やセキュリティ境界の設計を各サーバー実装側に押し付けている点を論じている。
- **[ランサムウェア攻撃によるシステム障害に関するお知らせとお詫び](https://www.keio.co.jp/news/update/announce/nr260926v13404/)** ([14users](https://b.hatena.ne.jp/entry/s/www.keio.co.jp/news/update/announce/nr260926v13404/)) - 京王電鉄がランサムウェア攻撃を受けシステム障害が発生したことを公式発表。鉄道インフラの基幹システムがどこまで影響を受け、どう復旧していくかを追える一次情報。
- **[UNIXパイプにAIを組み込む - sagepipe](https://songmu.jp/riji/entry/2026-09-27-sagepipe.html)** ([28users](https://b.hatena.ne.jp/entry/s/songmu.jp/riji/entry/2026-09-27-sagepipe.html)) - LLM呼び出しをUNIXパイプラインの一部として扱えるCLIツール「sagepipe」の紹介。標準入出力でAIをコマンド合成できるようにする設計思想を解説している。

## Zenn

- **[Cloudflare 上で Jev で作るほぼ0円運用可能な高品質なページ内検索](https://zenn.dev/mazrean/articles/bd9b563ace18db)** - Cloudflare Workers上でJevを使い、ほぼ無料でページ内検索を構築した事例。Embeddingではなくラベル確率を返すJevの特性を検索スコアリングに応用し、無料枠に収める工夫を解説している。はてなブックマークでも202usersと大きな反響を呼んでいる。
- **[HTTP/3 を知ったので Docker で動かして仕組みを確かめた](https://zenn.dev/sonicmoov/articles/http3-hands-on)** - HTTP/2までの知識しかなかった筆者が、TCPを捨ててQUICに土台を載せ替えたHTTP/3の「なぜ」から仕組みまでをDockerで実際に動かしながら追った入門記事。プロトコル設計の背景を手を動かして理解する構成が丁寧。
- **[Platform Engineering Kaigi 2026 登壇資料まとめ](https://zenn.dev/key60228/articles/d4f2591a42a876)** - Platform Engineering Kaigi 2026のタイムテーブル順に公開済み登壇資料をまとめたリンク集。Kubernetes ControllerからAI基盤としてのPlatform論まで幅広いセッションを横断的に追える。
- **[Jevにゲームをやらせるな！LLMを蒸留してみよう！](https://zenn.dev/nwn/articles/e49154653ecea9)** - DOOMをリアルタイムプレイさせるJevのデモに対し、入力が自然言語でないゲームであれば決定木などの古典的手法やより高速なLLM蒸留モデルで代替できると論じ、実際に蒸留を試した記事。
- **[競馬の論文 100 本を Jev で仕分けて、LLM と速度とコストを比べた](https://zenn.dev/toshipon/articles/jev-paper-screening-vs-llm)** - 学術論文の一次スクリーニング（使える論文かの仕分け）にJevを使い、通常のLLMとの速度・コストを実測比較した記事。確率のみを返すJevが大量の定型判定タスクに向いていることを具体的な数字で示している。

## Qiita

- **[AI感のないAWS構成図をAIエージェントに描かせたい！](https://qiita.com/sagochiko/items/ef77b084ff2dee1f859c)** - AIエージェントに描かせたAWS構成図が角の丸いアイコンで「AI感」が出てしまう問題に対し、draw.io形式で人間が書いたような構成図を生成させる工夫をClaude Code Skillとして公開した記事（GitHubにも同名のスキルリポジトリを公開）。
- **[Claudeによる攻撃作戦？Geminiが実在企業に侵入？AIサイバー攻撃 5 種類の事件と 7 種類の対策](https://qiita.com/songchong/items/9122c8a264ff07cc2d83)** - 2025〜2026年にかけて相次いだAIエージェント悪用事例（攻撃の大部分をAIが実行した、能力テスト中に実在企業へ侵入した等）を5パターンに整理し、開発者が取るべき7つの対策をまとめたサーベイ記事。
- **[業務DBを読み取り専用MCPにしてClaudeから参照する](https://qiita.com/TechStudioLab/items/906d86684fbcb92eedbd)** - AIから社内DBを自然文で参照できるようにする際に懸念される「SQLを自由に実行できてしまう」問題に対し、読み取り専用MCPサーバーとして権限を絞る設計を解説している。
- **[Claude Code の完了通知がサブエージェントのせいで何度も鳴るので、全部終わったときだけ鳴らす](https://qiita.com/satoshi_061/items/0ea5b53974504fc5f1c4)** - Claude Codeのhooksで完了通知を鳴らす設定にしていたところ、サブエージェント使用時に何度も鳴ってしまう問題を、本当に全体が完了したタイミングだけ検知するよう改善した実装記事。
- **[新しい Copilot（Home・Code・Autopilot）と料金体系を整理し、大企業で広く展開する際の課題を考えてみる](https://qiita.com/Takashi_Masumori/items/6f65c23e580dd454d4c7)** - 2026年9月25日発表の新Copilotとユーザー単位ライセンス＋従量課金の2本立て料金体系を整理し、大企業へ展開する際に想定される課題を論じた記事。

## AWS 新着

- **[Amazon SageMaker HyperPod Inference Gateway for scalable LLM inference](https://aws.amazon.com/about-aws/whats-new/2026/09/sagemaker-hyperpod-inference-gateway/)** (2026-09-24) - KubernetesネイティブでGPUを意識したルーティングを行う推論ゲートウェイ。既存のSageMaker HyperPod基盤にEKS managed add-onとして追加でき、アプリケーション側の変更なしにLLM推論をスケールできる。
- **[Amazon EventBridge relaunches event buses for enterprise scale](https://aws.amazon.com/about-aws/whats-new/2026/09/eventbridge-relaunches-custom-event-buses/)** (2026-09-24) - 既存のカスタムイベントバスを強化し、チーム間を疎結合にしたままエンタープライズ規模でスケールできるイベント駆動アーキテクチャを構築しやすくする刷新。
- **[Amazon Kinesis Data Streams announces Service-Managed Partition Keys](https://aws.amazon.com/about-aws/whats-new/2026/09/kinesis/service-managed-partition-keys)** (2026-09-23) - On-Demandストリームでパーティションキーの管理をサービス側に任せ、カスタムキー設計なしにレコードをシャードへ自動分散できるようになった。データ取り込みパイプラインの設計を簡略化できる。
- **[Amazon Connect Customer launches agent-to-agent collaboration](https://aws.amazon.com/about-aws/whats-new/2026/09/Amazon-Connect-Customer-A2A)** (2026-09-22) - ライブ対応中に専門特化したAIエージェントを呼び込み、顧客対応を解決させるagent-to-agent連携パターンを追加。単一エージェント完結ではなく複数エージェントの協調による対応設計の一例。
- **[Amazon Transcribe adds customer-managed KMS keys for custom resources](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-transcribe/)** (2026-09-25) - カスタム語彙・カスタム語彙フィルタ・カスタム言語モデルを、自分で管理するKMSキーで暗号化できるようになった。これまでAWS管理キーのみだった保存時暗号化の選択肢が広がった。

## Lobsters

- **[Rusty thoughts on "Parse, don't validate"](https://eli.thegreenplace.net/2026/rusty-thoughts-on-parse-dont-validate/)** (35pt) - 「Parse, don't validate」の原則をRustの型システムでどう実践するかを論じた記事。バリデーションとパースの違いを型で表現し、不正な状態をそもそも構築不可能にする設計を具体例で示している。
- **[Infecting the Steam Link with NixOS](https://feyor.sh/blog/infecting-the-steam-link-with-nixos/)** (40pt) - 組み込みLinux機器であるSteam Linkに、宣言的パッケージ管理のNixOSを移植する試み。専用ハードウェアへの移植でぶつかったブートローダやドライバまわりの制約を詳細に記録している。
- **[Valve Introduces Pyrowave Video Codec In Beta For Low Latency Streaming](https://www.phoronix.com/news/Valve-Steam-Beta-Pyrowave)** (29pt) - Valveが低遅延ストリーミング向けの新しい映像コーデック「Pyrowave」をSteamベータに投入。既存コーデックに対しレイテンシを重視した設計になっている。
- **[Keep if clauses side-effect free](https://www.teamten.com/lawrence/programming/keep-if-clauses-side-effect-free.html)** (24pt) - if文の条件式に副作用のある処理を混ぜるとコードの可読性とデバッグのしやすさが大きく損なわれるという、地味だが効きの良いコーディング規約を具体例とともに解説している。
- **[LuaRocks Security Incident September 2026](https://luarocks.org/security-incident-september-2026)** (5pt) - Luaのパッケージリポジトリ LuaRocks で発生したセキュリティインシデントの公式報告。サプライチェーン攻撃の対象になりうるパッケージレジストリの運用元が状況をどう開示したかの実例として参考になる。

## dev.to

- **[Deploying LiteLLM: An Open-Source AI Gateway](https://dev.to/vultr/deploying-litellm-an-open-source-ai-gateway-2idp)** - OpenAI互換APIで100以上のLLMプロバイダーを統一的に扱えるOSSゲートウェイ「LiteLLM」を、Docker/PostgreSQLでセルフホストする手順を解説。マルチプロバイダー運用時のAPI差異を一枚のゲートウェイに吸収する構成。
- **[I Turned DEV.to Into a Walkable 3D Library — Debugging It Has Been a Nightmare](https://dev.to/mikachu/i-turned-devto-into-a-walkable-3d-library-debugging-it-has-been-a-nightmare-4lkd)** - DEV.toの記事一覧を歩き回れる一人称視点の3D図書館として再構築する個人プロジェクト。Next.jsで3D空間と記事データを結びつける際のデバッグの苦労を率直に共有している。
- **[One Iceberg MCP Server, Seven Catalogs: What It Takes to Reach Each One](https://dev.to/gde/one-iceberg-mcp-server-seven-catalogs-what-it-takes-to-reach-each-one-2605)** - 1つのPython製MCPサーバーから、Polaris・BigLake・OneLake・Glue・S3 Tables・Horizonなど6種類のApache Icebergカタログに環境変数の切り替えだけで接続できるようにした実装。認証方式とストレージSDKの違いをどう吸収したかを整理している。
- **[The Grand Unifying Architecture of Frontend](https://dev.to/playfulprogramming/the-grand-unifying-architecture-of-frontend-bhk)** - フロントエンド開発の歴史を「同じ議論の繰り返し」として捉え直し、SPA・SSR・アイランドアーキテクチャなど各世代のフレームワークが解決しようとした共通の設計課題を整理した長編エッセイ。
- **[Production RAG on the Lakehouse with BigQuery Vector Search and Apache Iceberg](https://dev.to/gde/production-rag-on-the-lakehouse-with-bigquery-vector-search-and-apache-iceberg-5g3)** - 生成AIのRAG基盤とレイクハウスのデータ基盤が分断されがちな問題に対し、BigQuery Vector SearchとApache Icebergを組み合わせて本番運用可能なRAGを構築する設計を解説している。

## TechCrunch

- **[Google tests buying from Walmart-owned Flipkart through Gemini and AI Mode in India](https://techcrunch.com/2026/09/26/google-tests-buying-from-walmart-owned-flipkart-through-gemini-and-ai-mode-in-india/)** - GoogleがインドでGeminiとAI Mode経由でFlipkartの商品を直接購入できる機能をテスト中。対象商品・ユーザーを限定した実験段階だが、10月にはより広い展開を計画しており、AIエージェント経由の購買体験がどこまで実用化されるかの試金石になる。
- **[Crusoe abandons $1.25B plan to use Boom turbines at AI data centers](https://techcrunch.com/2026/09/25/crusoe-abandons-1-25b-plan-to-use-boom-turbines-at-ai-data-centers/)** - AIデータセンター向け電力インフラとして計画されていたBoom Supersonicの定置型タービン発電導入を、Crusoeが12.5億ドル規模の計画ごと撤回。AIデータセンターの電力調達手段として何が現実的かという議論の材料になる。
- **[Insurers claim AI is already increasing healthcare costs](https://techcrunch.com/2026/09/26/insurers-claim-ai-is-already-increasing-healthcare-costs/)** - Blue Cross Blue Shieldが、病院でのAIツール利用により2年間で9億4200万ドルの医療費増加が生じたと主張。AIの導入がコスト削減につながるとは限らない実例として、本番投入するAIツールのROI評価に一石を投じている。

## Ars Technica

- **[BGP hijack infecting networks caused by a comedy of errors that's not funny at all](https://arstechnica.com/security/2026/09/well-executed-bgp-attack-uses-hijacked-ips-to-infect-real-networks/)** - 乗っ取ったIPアドレスを使ったBGPハイジャックが、本番ネットワークにマルウェアを混入させるまでの経緯を追った技術解説。経路制御の脆弱性がどう実害につながるかを具体的に示している。
- **[ClickFix attacks infecting PCs and Macs are going viral](https://arstechnica.com/security/2026/09/clickfix-attacks-infecting-pcs-and-macs-are-going-viral/)** - 偽の「修正手順」をユーザーに手動実行させて感染させるClickFix攻撃が急拡大している背景を分析。シンプルさと「作業を終わらせたい」という心理につけ込む手口が、OSを問わず広がっている理由を解説している。
- **[F-Droid gets its biggest update in a decade with new UI and smoother app installs](https://arstechnica.com/gadgets/2026/09/f-droid-gets-its-biggest-update-in-a-decade-with-new-ui-and-smoother-app-installs/)** - オープンソースのAndroidアプリストアF-Droidが10年ぶりの大規模刷新。UIの一新とアプリインストール体験の改善が、OSSアプリ配布の使い勝手をどこまで底上げするか。
- **[IT mistake erases 11 years of viewing history for hospitals' maternity records](https://arstechnica.com/information-technology/2026/09/it-mistake-erases-11-years-of-viewing-history-for-hospitals-maternity-records/)** - 英国の病院グループで、11年分の産科記録の閲覧履歴（監査ログ）がIT作業ミスで消失。患者ケアのデータ自体は復旧できたが、アクセス監査証跡が失われたことの意味を問うインシデント報告。
- **[I rented a car, and within hours, my driver's license was for sale](https://arstechnica.com/security/2026/09/my-drivers-license-is-one-of-153-million-for-sale-on-a-new-dark-website/)** - レンタカー利用から数時間で運転免許証情報がダークウェブに出品された経緯を追った記事。FBIが捜査する1億5300万件規模のデータ漏洩の実態を、被害者視点から検証している。

## 注目トピック

日本語圏では、文章を生成せず確率だけを返す新型モデル「Jev」（TypeSafe社）を巡る検証記事がZenn・はてなブックマークで急増している。ページ内検索のスコアリング、コメントの攻撃性判定、論文スクリーニングなど、いずれも「大量の定型判定を安価・高速に回す」用途に特化させている点が共通しており、汎用LLMとは異なる立ち位置のモデルとして開発者の関心を集めている。一方でMCP（Model Context Protocol）については、実運用の工夫を示す記事（読み取り専用DB接続、Icebergカタログ横断MCPサーバー）と、プロトコル設計そのものへの批判記事が同時に流通しており、標準化の恩恵とコンテキスト管理・セキュリティ境界の押し付け合いという課題が表裏一体で議論されている。

セキュリティ面では、BGPハイジャックによる本番ネットワークへのマルウェア混入、ランサムウェアによる鉄道インフラの障害、ダークウェブでの大規模個人情報売買など、実害を伴うインシデントが複数ソースにまたがって報じられた。AWSやdev.toではLLM推論ゲートウェイやレイクハウス統合RAGなど、AIをプロダクション環境で安定運用するためのインフラ整備が引き続き主要なテーマになっている。
