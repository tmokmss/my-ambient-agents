---
title: "Tech Feed ダイジェスト（2026年8月3日）"
date: "2026-08-03T12:35"
category: "summary"
summary: "BASEやAI攻撃によるセキュリティインシデントと、ADR・「発注の型」などAI協業を制度として運用する動きが続いた一日"
tags: ["security", "ai", "aws", "devops", "rust", "cloud"]
---

## はてなブックマーク (テクノロジー)

- **[BASE子会社、最大885万件漏えいか　カード番号の一部も　ECサイト構築サービスに不正アクセス](https://www.itmedia.co.jp/news/article/2608/03/2000000355/)** ([102users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2608/03/2000000355/)) - BASEの子会社が運営するECサイト構築サービスに不正アクセスがあり、カード番号の一部を含む最大885万件の情報が漏えいした可能性があると発表された。ECプラットフォーム事業者における決済情報の保管範囲とアクセス制御の甘さが改めて問われる事案。
- **[【特集】 これなら社外秘情報も読ませられる！「AnythingLLM」で超快適ローカルRAG生活](https://pc.watch.impress.co.jp/docs/topic/feature/2129359.html)** ([133users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/topic/feature/2129359.html)) - オープンソースのAnythingLLMを使い、社外秘文書を外部に送らずローカル環境だけでRAG検索を構築する手順を紹介する特集記事。クラウドLLMへの情報送信を避けたい企業ユーザー向けの実践的なセットアップガイドになっている。
- **[OKRの本質 / Scrum Fest Osaka 2026](https://speakerdeck.com/kawaguti/okr-essence-scrum-fest-osaka-2026)** ([160users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/kawaguti/okr-essence-scrum-fest-osaka-2026)) - 目標管理手法として形骸化しがちなOKRを、本来どう運用すべきかをScrum Fest Osaka 2026の登壇資料として整理したスライド。ノルマ管理と誤解されやすいOKRの意図を、原典に立ち返って解説している。
- **[メルカリのCoreDBをMySQLからTiDBへ移行した振り返り](https://engineering.mercari.com/blog/entry/20260731-bd36d55a0c/)** ([81users](https://b.hatena.ne.jp/entry/s/engineering.mercari.com/blog/entry/20260731-bd36d55a0c/)) - メルカリの基幹データベース（CoreDB）をMySQLから分散SQLデータベースTiDBへ移行したプロジェクトの振り返り記事。大規模サービスの中核DBを無停止で移行する際の課題と対策が具体的に語られている。
- **[WAFを89％すり抜ける事例も──AIが休みなく仕掛けるWeb攻撃、予防策はあるか](https://www.itmedia.co.jp/news/article/2608/03/2000000287/)** ([71users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2608/03/2000000287/)) - AIを用いた自動化攻撃がWAF（Web Application Firewall）を高確率ですり抜けてしまう事例が報告されているという記事。攻撃側の自動化・高速化に対し、防御側の検知ルールがどう追随すべきかを論じている。

## Zenn

- **[アーキテクチャに限らず意思決定を全部残す「ADR（Any Decision Record）」という文化](https://zenn.dev/dress_code/articles/c73500ae73361c)** - 従来アーキテクチャ判断に限定されがちなADR（Architecture Decision Record）を、業務プロセスや運用判断まで含めた「Any Decision Record」として拡張運用する文化を提案する記事。なぜその意思決定に至ったかを後から追跡できる仕組みづくりの実践例。
- **[UnityのDIは本当に必要か：Zenject継続・Reflex新規採用・VContainer比較の判断軸](https://zenn.dev/gamedev_toollab/articles/945a5084be2a38)** - Unity開発におけるDI（依存性注入）ライブラリとして定番のZenjectを使い続けるべきか、新興のReflexやVContainerに乗り換えるべきかを、実プロジェクトでの判断軸とともに比較した記事。
- **[Kimi K3を441GBに枝刈りして、Mac Studio 1台で動かした](https://zenn.dev/hellohazime/articles/kimi_k3_reap640_512gb_mac)** - 巨大な中国産LLM「Kimi K3」をモデル枝刈り（プルーニング）で441GBまで圧縮し、Mac Studio単体のメモリに収めて動かす検証記事。データセンター級モデルを個人のワークステーションで扱うための具体的な圧縮手法が示されている。
- **[Web Streams API 入門 ― 基本概念から実践まで](https://zenn.dev/cybozu_frontend/articles/web-streams-api-guide)** - ブラウザ標準のWeb Streams APIについて、ReadableStream・WritableStream・TransformStreamといった基本概念から実際のデータ処理パイプライン構築までを解説する入門記事。大容量データをメモリに全展開せず逐次処理したい場面で役立つ。
- **[【Claude Code】planモードはもう使っていない](https://zenn.dev/notahotel/articles/0c28638945aa32)** - Claude Codeの計画確認機能「planモード」を使わなくなった経緯と、代わりにどう指示・運用しているかを綴った記事。AIエージェントとの協業スタイルが実運用の中で試行錯誤され続けている様子がうかがえる。

## Qiita

- **[Figma MCP × Claude Codeで、実装はどこまで自動化できるか](https://qiita.com/shibuya-ys/items/2c9e2cc58c7744c6d7b1)** - FigmaのMCPサーバーとClaude Codeを組み合わせ、デザインカンプから実装コードをどこまで自動生成できるかを検証した記事。デザイナーとエンジニアの橋渡しをAIエージェントが担う実践例として参考になる。
- **[レコメンド技術の進化を俯瞰する](https://qiita.com/obx_y_ueno/items/f36088400bb53440c7f8)** - 協調フィルタリングから深層学習ベース、そして生成AIを組み込んだ手法まで、レコメンドエンジンの技術トレンドの変遷を俯瞰的に整理した記事。個別実装というより技術史として全体像を掴みたい人向け。
- **[FlutterアプリのE2Eテストフレームワークとして Maestro を選んだ話](https://qiita.com/fumiharu-sugawara/items/1f10a16590552181ac98)** - Flutterアプリのエンドツーエンドテストにおいて、既存の選択肢と比較した上でMaestroを採用した経緯を紹介する記事。モバイルE2Eテストの導入障壁を下げるツール選定の実例。
- **[AIの暴走を物理的に封じ込める【Git × チケット駆動】のクローズドループ開発](https://qiita.com/tokudiro/items/a9e1958262f77e0073f3)** - AIエージェントに開発を任せる際、Gitのブランチ運用とチケット駆動のワークフローを組み合わせることで、AIの逸脱行動や暴走を構造的に封じ込める開発プロセスを提案する記事。
- **[クラウドだけではないAI推論 ～なぜAIのハードウェア実装が求められているのか～](https://qiita.com/KA026/items/23b0952b181807b5dabd)** - クラウドGPU依存のAI推論に対し、エッジ・オンプレミス向けの専用ハードウェア実装がなぜ求められているのかを解説する記事。電力・レイテンシ・コストの制約から推論基盤の選択肢を考察している。

## AWS 新着

- **[AWS announces AWS Interconnect - multicloud connectivity with Oracle Cloud Infrastructure in GA](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-announces-AWS-interconnect-multicloud-OCI-GA/)** (2026-07-29) - AWSとOracle Cloud Infrastructure（OCI）間をプライベート接続するマルチクラウド接続サービス「AWS Interconnect」が正式提供された。複数クラウドを併用する企業が、専用線経由で低レイテンシかつセキュアにAWSとOCIを繋げるようになる。
- **[AWS WAF adds pre-parse text transformations and new text transformations](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-waf/)** (2026-07-29) - AWS WAFにクエリ文字列をパース前に正規化する「pre-parse text transformation」と10種類の新しいテキスト変換ルールが追加された。HTTPパラメータの解釈の揺れを悪用した回避策（パラメータポリューション）を防ぎやすくなる。
- **[Amazon EKS Provisioned Control Plane now delivers faster pod autoscaling](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-provisioned-control/)** (2026-07-28) - EKSのProvisioned Control Plane機能で、Horizontal Pod Autoscaler（HPA）の同期並行数が引き上げられ、Pod数の多い大規模クラスタでもオートスケーリングの反応速度が向上した。
- **[AWS Glue announces VPC support, filter pushdown, and partition support for the REST API connector](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-glue-rest-connector-filtering-partitioning-vpc)** (2026-07-29) - AWS GlueのREST APIコネクタがVPC接続・フィルタプッシュダウン・パーティション対応に対応した。ネイティブコネクタのない外部SaaSやプロプライエタリなREST APIからも、閉域網経由で安全にETLパイプラインを組めるようになる。
- **[Amazon RDS for Oracle now offers Reserved Instances for R8i and M8i instances](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-rds-oracle-r8i-m8i/)** (2026-07-31) - RDS for OracleでR8i・M8iインスタンスタイプ向けの1年・3年リザーブドインスタンスが提供開始され、オンデマンド比で最大53%のコスト削減が可能になった。

## Lobsters

- **[Where's your website?](https://www.arscyni.cc/file/warez_your_website.html)** (35pt) - 個人サイトを持つことの意味が、SNSプラットフォームへの一極集中の中で薄れてきている現状を批評したエッセイ。プラットフォームに依存しない個人の発信拠点をどう維持するかを論じている。
- **[9front "THIS WAS SUPPOSED TO BE FUN" Released](https://9front.org/releases/2026/08/02/0/)** (34pt) - Plan 9由来の実験的OS「9front」の新版がリリースされたというアナウンス。主流OSとは異なる設計思想を貫くニッチなOSコミュニティの継続的な開発活動を示している。
- **[Don't be a meat proxy](https://gruhn.me/blog/2026-08-03/)** (26pt) - AIエージェントの出力をそのまま右から左へ転送するだけの「人間プロキシ」になってはいけないと警鐘を鳴らす記事。AIに判断を委ねすぎず、人間が内容を理解し責任を持つことの重要性を説いている。
- **[Faster floating point math with Rust's new API](https://pythonspeed.com/articles/faster-float-math-rust/)** (25pt) - Rustに追加された新しい浮動小数点演算APIを使うことで、数値計算のパフォーマンスをどれだけ改善できるかを実測したベンチマーク記事。
- **[How fast is C++26's std::hive?](https://lemire.me/blog/2026/08/02/how-fast-is-c26s-stdhive/)** (17pt) - C++26で標準入りする新コンテナ`std::hive`の性能を、既存のコンテナと比較検証した記事。要素の挿入・削除が頻繁なワークロードでの実際の速度差を計測している。

## dev.to

- **[Running Claude Code on AWS Bedrock: IAM, SCPs, and the Governance Model Most Teams Get Wrong](https://dev.to/amartinawi/running-claude-code-on-aws-bedrock-iam-scps-and-the-governance-model-most-teams-get-wrong-3ojm)** - Claude CodeをAWS Bedrock経由で企業導入する際、IAMポリシーやSCP（サービスコントロールポリシー）の設計を誤ると想定外の権限をAIエージェントに与えてしまう落とし穴を解説した記事。ガバナンスモデルの典型的な失敗パターンを具体的に示している。
- **[Why CTE vs Subquery Matters More on Redshift Than Anywhere Else](https://dev.to/maithreyan11/why-cte-vs-subquery-matters-more-on-redshift-than-anywhere-else-llm)** - SnowflakeやPostgresではほぼ差が出ないCTEとサブクエリの選択が、Redshiftでは実行計画の最適化の都合で性能に大きく影響することを実例で示した記事。
- **[Zero-Disk Streaming Database Backup: 8 GB Dump Processed with Only ~119 MB RAM!](https://dev.to/indhifarhandika/zero-disk-streaming-database-backup-8-gb-dump-processed-with-only-119-mb-ram-4c8h)** - 8GBのデータベースダンプを、ディスクに書き出さずストリーミング処理することでメモリ使用量を約119MBに抑えたバックアップ手法を紹介する記事。メモリ制約の厳しいエントリー向けサーバーでのバックアップ運用に役立つ。
- **[Top AI Papers on Hugging Face - 2026-08-03](https://dev.to/y_hnhnhan_2f26de65ffcc4/top-ai-papers-on-hugging-face-2026-08-03-mpp)** - GUIエージェント、長期記憶、大規模RAGなど、Hugging Face上で注目を集めているAI研究論文10本を紹介するまとめ記事。日々の論文動向を短時間で把握したい人向けのダイジェスト。
- **[Node.js SMS OTP Login Without Webhooks: Polling, Retry, Resend, and Abuse Prevention](https://dev.to/peterparker8991/nodejs-sms-otp-login-without-webhooks-polling-retry-resend-and-abuse-prevention-3n46)** - Webhookを使わずポーリング方式でSMS OTPログインを実装する際の、リトライ・再送・不正利用防止の設計をNode.jsで解説した記事。SMSプロバイダのWebhook対応が不十分な場合の代替実装として参考になる。

## TechCrunch

- **[Samsung bans smart TV apps that share users' internet connections with strangers](https://techcrunch.com/2026/08/03/samsung-bans-smart-tv-apps-that-share-users-internet-connections-with-strangers/)** - 一般ユーザーのインターネット回線を第三者と共有する「レジデンシャルプロキシ」型アプリを、Samsungがスマートテレビ上で禁止したと報じる記事。セキュリティ研究者による調査が、こうしたアプリの実態を明らかにした背景がある。
- **[A Marc Benioff-backed startup thinks AI can solve the AI deployment problem](https://techcrunch.com/2026/08/03/a-marc-benioff-backed-startup-thinks-ai-can-solve-the-ai-deployment-problem/)** - Salesforce創業者マーク・ベニオフ氏が出資するスタートアップJuneが、AI導入の複雑さそのものをAIで解決しようと2000万ドルのプレシード資金を調達しステルスを解除したと報じる記事。
- **[Sam Altman and AI's decel debate](https://techcrunch.com/2026/08/02/sam-altman-and-ais-decel-debate/)** - OpenAIのサム・アルトマンCEOがAI開発のペースを落とすべきだと発言したことを受け、業界内で加速派・減速派の議論が再燃していることを扱うPodcastエピソードの紹介記事。

## Ars Technica

- **[Google plans to exempt sanctioned nations from Android developer verification](https://arstechnica.com/gadgets/2026/07/google-plans-to-exempt-sanctioned-nations-from-android-developer-verification/)** - Googleが導入予定のAndroid開発者検証制度について、キューバやイランなど制裁対象国のユーザーはAPKサイドロードを引き続き無制限に行える一方、開発者側は検証負担を強いられる不均衡を指摘する記事。
- **[Sony acknowledges backlash, "cautiously" moves ahead with end of PlayStation discs](https://arstechnica.com/gaming/2026/07/sony-acknowledges-backlash-will-cautiously-move-forward-with-end-of-discs/)** - PlayStationのディスク版終了方針への反発をSonyが認めつつも、財務面への影響は限定的と判断し「慎重に」計画を進めると報じる記事。
- **[How headlights got brighter, whiter, and more blinding after dark](https://arstechnica.com/cars/2026/08/how-headlights-got-brighter-whiter-and-more-blinding-after-dark/)** - LED化とアダプティブヘッドライト技術の進化により自動車のヘッドライトが年々明るく白くなっている一方、対向車や歩行者にとっての眩しさというトレードオフが拡大している実態を解説する記事。

## 注目トピック

セキュリティ分野では、AI活用が攻撃・防御の両面で存在感を増している。はてなブックマークでは「WAFを89%すり抜けるAI攻撃」への懸念が報じられ、AWS側もWAFのテキスト正規化ルールを強化するアップデートを同時期に出しており、自動化された攻撃と防御ルールのいたちごっこが実際の製品アップデートとして表面化している。一方でBASE子会社の最大885万件漏えいや講談社のフィッシング被害など、AIとは無関係な基本的なセキュリティ運用の甘さに起因するインシデントも同時に報じられており、両者が並走している点は留意したい。

もう一つの軸は、AIとの協業を「型」や「制度」として運用しようとする動きが引き続き各所で独立に見られたことだ。Zennでは意思決定の経緯を残す「ADR」をアーキテクチャに限らず拡張運用する文化が紹介され、Qiitaでは「Git×チケット駆動」でAIの暴走を構造的に封じ込める開発プロセスが提案された。dev.toでも、Claude CodeをAWS Bedrock経由で企業導入する際にIAM・SCPの設計を誤ると想定外の権限をAIエージェントに与えてしまうというガバナンス上の失敗パターンが指摘されており、「AIに何を、どこまで任せるか」を制度として設計する必要性が、セキュリティ・開発プロセス・クラウド権限管理という異なる切り口から繰り返し語られる一日だった。
