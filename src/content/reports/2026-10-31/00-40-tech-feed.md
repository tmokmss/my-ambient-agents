---
title: "Tech Feed ダイジェスト（2026年10月31日）"
date: "2026-10-31T00:40"
category: "summary"
summary: "AIエージェント開発環境、EDK2 UEFI脆弱性、DynamoDB/Aurora更新、Gemma量子化検証など8ソースの技術トピックを整理"
tags: ["ai", "security", "aws", "llm", "infrastructure", "devtools"]
---

## はてなブックマーク (テクノロジー)
- **[今後のセキュリティの考え方](https://zenn.dev/cscloud_blog/articles/a987163efae5d8)** ([127users](https://b.hatena.ne.jp/entry/s/zenn.dev/cscloud_blog/articles/a987163efae5d8)) - 重大脆弱性を狙う攻撃が続く中、パッチ適用までのリスク低減策を整理した記事。ポートを閉じるなどアタックサーフェスと管理面を減らす考え方を、AWS 環境を例に説明している。
- **[文章のAIっぽさを抑えるプロンプト](https://imoz.jp/scraps/202610_humanizer.html)** ([137users](https://b.hatena.ne.jp/entry/s/imoz.jp/scraps/202610_humanizer.html)) - LLM が生成した文章に出やすい定型表現を抑えるためのプロンプトをまとめたスクラップ。LLM を文章生成に使う際の出力品質調整の実用例として参考になる。
- **[NVIDIA、40言語対応の無償文字起こしAI「Nemotron 3.5 Transcribe」](https://pc.watch.impress.co.jp/docs/news/2152693.html)** ([36users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2152693.html)) - NVIDIA が 40 言語に対応した文字起こしモデルを無償で公開。音声入力を組み込むアプリ開発で選択肢が増える。
- **[AIに物理キーボードを渡して、BIOS操作からPCのトラブル対応まで丸投げしてみた](https://zenn.dev/sodeyama/articles/tech-tab5-camera-usb-pc-diagnosis)** ([17users](https://b.hatena.ne.jp/entry/s/zenn.dev/sodeyama/articles/tech-tab5-camera-usb-pc-diagnosis)) - M5Stack Tab5 のカメラと USB を使い、AI に画面を見せつつキーボード入力まで担当させて PC の障害対応を試みた実験。OS が起動しない状況でも操作できる点が面白い。
- **[AppleはiPhoneをエサにメモリメーカーへ大幅な値引きを強要してきたがAIの登場で価格が高騰して立場が逆転しているとの指摘](https://gigazine.net/news/20261030-apple-chip-sellers-impact/)** ([52users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261030-apple-chip-sellers-impact/)) - AI 向け需要でメモリ価格が上昇し、調達側の力関係が変わりつつあるという指摘。ハードウェアのコスト構造を見る材料になる。

## Zenn
- **[Flutter やめました。電話アプリを Native にした理由](https://zenn.dev/ivry/articles/d155267331a3ca)** - 電話の転送・折り返しが中心のアプリで、Flutter から Native への移行プロジェクト「Flutter Exit」を完了した経緯。通話という OS 機能に近い領域でのクロスプラットフォームの限界が論点になっている。
- **[yoroによろしくぅ！Ai Workforce 事業部のリモートコーディングエージェント環境 yoro のご紹介](https://zenn.dev/layerx/articles/a277f83a93d300)** - Slack などから依頼を渡すと、本人専用のリモート開発環境でコーディングエージェントが動く内製基盤の紹介。同社の別事業部にも同種の基盤があり、Background Coding Agent の内製が広がっている様子がわかる。
- **[学生2人で日本語音声LLMを作り、FT-LLM 2026 自由形タスクで1位を獲得した話](https://zenn.dev/ayutaso/articles/ftllm2026-ja-speech-llm)** - LLM-jp-4 8B をベースに、音声で指示できる日本語音声 LLM を開発したコンペ参加記録。国産 LLM ベースのオープンなモデルとして初と述べている。
- **[2026年自分流AIエージェント環境構築の秋](https://zenn.dev/rescuenow/articles/49826fc6cc2713)** - 複数エージェントを人が切り替える運用をやめ、ディレクトリ選択から起動・タスク投入までをオーケストレーションで自動化した 1 か月の改善記録。
- **[いいから休め - Black October が終わる今、セキュリティエンジニアがやるべきこと](https://zenn.dev/nayuta/articles/aec9ab2e11a7b7)** - 今月の脆弱性報告の急増を「Black October」と呼び、今後も長期間続くという見立てのもとで、セキュリティ担当者の持続的な対応体制を論じた記事。

## Qiita
- **[PostgreSQLで子テーブルへのINSERT後にFOR UPDATEすると、外部キーのロックでデッドロックする理由](https://qiita.com/shusaku009/items/eb96123c2a0a9008c431)** - 在庫管理の実装で、AI が `FOR UPDATE` ではなく `FOR NO KEY UPDATE` を選んでいた理由を調べた記事。外部キー参照が親行に取るロックとの関係が論点（冒頭抜粋から読み取れる範囲）。
- **[WordPressの脆弱性「wp2shell」を狙った攻撃の観測](https://qiita.com/melkihara/items/8bb5e61321066be53d83)** - 三菱電機の研究所が IoT 家電向けハニーポットで観測した、WordPress の脆弱性 wp2shell を狙う攻撃の報告。
- **[Liquid Glass の Safari でタブバーの裏にもコンテンツを表示するハック](https://qiita.com/ocean6954/items/8a4e58d47a6ffe856735)** - Liquid Glass 化した Safari で、タブバーの背面にもコンテンツを描画する Web 側のテクニック。
- **[忙しい人のための #GitHubUniverse 2026 新発表まとめ[簡易版]](https://qiita.com/chomado/items/ce32e402cc4f14145a6c)** - GitHub Universe（10/27〜30）の発表を要約。メッセージは「AI にコードを書いてもらう」から「複数の AI エージェントに開発全体を任せる」への移行。
- **[RDS Data APIを使ってNAT不要構成にしてみた](https://qiita.com/j-yasukawa/items/bd3785861c0e0bfc2f7e)** - 外部 API を呼ぶ Lambda を VPC 外に置きつつ Aurora を使うため、RDS Data API で NAT Gateway を不要にする構成の検証。

## AWS 新着
- **[Amazon SageMaker AI inference now supports GPU partitioning for real-time endpoints](https://aws.amazon.com/about-aws/whats-new/2026/10/sagemaker-gpu-partitioning/)** (2026-10-30) - NVIDIA MIG により、1 枚の GPU で複数モデルを動かせるようになった。小型モデルが多い場合に GPU コストを下げられる。
- **[Amazon CloudFront now provides viewer ISP and post-quantum TLS details](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-viewer-isp-post-quantum-visbility/)** (2026-10-30) - CloudFront-Viewer-ISP ヘッダなど 2 つのオプションヘッダをオリジンに転送可能に。ISP 別の障害切り分けや PQ TLS の利用状況把握に使える。
- **[Amazon Aurora serverless now supports up to 384 ACUs](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-serverless-supports-384-acu/)** (2026-10-27) - Aurora PostgreSQL の Serverless 最大容量が 256 から 384 ACU（50% 増）に拡張。大規模ワークロードの設計上限が上がる。
- **[AWS CloudFormation now simplifies stack update rollback operations](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-cloudformation-cdk/)** (2026-10-22) - 一部リソースが戻せない場合でも、更新ロールバックを完了させて次のデプロイに進みやすくなった。
- **[Amazon DynamoDB global tables now support disassociating replicas](https://aws.amazon.com/about-aws/whats-new/2026/10/dynamodb-global-tables-disassociate/)** (2026-10-20) - テーブルやデータを削除せずにレプリカだけグローバルテーブルから切り離せる。リージョン撤退や構成変更が楽になる。

## Lobsters
- **[No, npm, "estee" is not a typo of "testem"](https://smoores.dev/post/no_npm_estee_is_not_a_typo/)** (27pt) - npm が正当なパッケージ名を typosquatting と誤判定した事例。レジストリ側の類似名検出が正規のパッケージ公開を妨げる問題を扱う。
- **[The federated code forge](https://tangled.org/blog/forge/)** (24pt) - AT Protocol ベースのコードホスティング Tangled が、フォージを連合型にする構想を説明。特定ベンダー依存からの分散化が論点。
- **[Infinite Mac: BeOS](https://blog.persistent.info/2026/10/infinite-mac-beos.html)** (27pt) - ブラウザ上でレトロ OS を動かす Infinite Mac プロジェクトに BeOS が加わった報告。エミュレーション技術の事例。
- **[Go 1.28's HTTP/2 Parking: Measuring Memory Savings](https://abdolirad.me/articles/go-1-28-http2-parking-memory/)** (9pt) - Go 1.28 の HTTP/2 における接続 parking でメモリ使用量がどれだけ減るかを計測した記事。
- **[Switch lowering in GCC](https://xoranth.net/gcc-switch/)** (7pt) - GCC が `switch` 文をジャンプテーブルや二分探索などにどう変換するかを解説するコンパイラ内部の記事。

## dev.to
- **[Bun 1.4.4's bun fmt checks Prettier's own repository about 280 times faster than Prettier](https://dev.to/alexgeorgiev17/bun-144s-bun-fmt-checks-prettiers-own-repository-about-280-times-faster-than-prettier-gjj)** - Prettier 自身の 2,623 ファイルのチェックが約 0.10〜0.15 秒（Prettier は 36.77 秒）。ただし再実装されている Prettier プラグインは限られた一覧のみという注意点も指摘している。
- **[Our AI assistant saw every feature as a tool. That cost $0.148 per turn](https://dev.to/marc_kumiko/our-ai-assistant-saw-every-feature-as-a-tool-that-cost-0148-per-turn-4gh7)** - アプリの全機能をツールとして LLM に渡した結果、1 ターンあたり 0.148 ドルかかった事例。ツール定義の肥大化がコストに直結する点を示している。
- **[Autonomous agent loops with Gemini 4 Argon and GKE Agent Sandbox](https://dev.to/googlecloud/autonomous-agent-loops-with-gemini-4-argon-and-gke-agent-sandbox-running-untrusted-code-safely-at-2k60)** - LLM が生成した Python / Bash を、gVisor による隔離を使う GKE Agent Sandbox で安全に大規模実行する構成の解説。
- **[Four GPUs, One Quantization Ladder: Gemma 4 E2B From a 4 GB Laptop to an NVIDIA L4](https://dev.to/gde/four-gpus-one-quantization-ladder-gemma-4-e2b-from-a-4-gb-laptop-to-an-nvidia-l4-4olp)** - 同一の GGUF と llama.cpp ビルドで 4 種類の GPU を比較。量子化ごとの傾向はどのカードでも同じだが、GPU が違うと BF16 でも 2〜4 問の採点が変わると報告している。
- **[926 Steps, Two Lobotomies, and Zero Nudges: Flight-Testing the Commitment Machine Across Gemini, Claude, and GPT-OSS](https://dev.to/gde/926-steps-two-lobotomies-and-zero-nudges-flight-testing-the-commitment-machine-across-gemini-55ca)** - 1986 年の Commitment Machine という設計を、Gemini・Claude・GPT-OSS の実運用エージェントで試した検証。AI の生成コード増によるレビュー負荷増大が問題意識。

## TechCrunch
- **[Applebee's exposed customers' personal data after leaving database password in app](https://techcrunch.com/2026/10/30/applebees-exposed-customers-personal-data-after-leaving-database-password-in-app/)** - モバイルアプリにデータベースの認証情報が埋め込まれ、顧客の個人データに無制限にアクセスできた件。クライアントにシークレットを置いてはならないという基本の再確認になる。
- **[Google's first data center satellite is online and writing poetry](https://techcrunch.com/2026/10/30/googles-first-data-center-satellite-is-online-and-writing-poetry/)** - 宇宙に打ち上げた初の TPU が Gemma 4 モデルを動かし、詩を生成している。軌道上データセンターの実証。
- **[Can AI data centers be mass-produced like cars? This startup aims to find out](https://techcrunch.com/2026/10/30/can-ai-data-centers-be-mass-produced-like-cars-and-online-in-48-hours-this-startup-aims-to-find-out/)** - Runware が AI データセンターをプレハブ化し、組立ラインで量産する構想。実際にその規模で納品できるかが課題。

※ 他ソースとの重複や過去掲載分を除くと、新規の技術記事は3件のみだった。

## Ars Technica
- **[Code-execution flaw in UEFI firmware affects most servers on planet Earth](https://arstechnica.com/security/2026/10/code-execution-flaw-in-uefi-firmware-threatens-most-servers-on-planet-earth/)** - UEFI 実装の EDK2 に、ブート初期段階でコード実行できる重大な欠陥。サーバーのファームウェア更新が必要になる。
- **[Anthropic warns small AI models could self-replicate through IoT devices](https://arstechnica.com/security/2026/10/anthropic-warns-small-ai-models-could-self-replicate-through-iot-devices/)** - 小型の重みベースの「レプリケータ」が IoT 機器を介して広がる新世代のワームになり得るという Anthropic の警告。
- **[Google begins certifying Registered App Stores for Android, but not in the US](https://arstechnica.com/gadgets/2026/10/googles-android-registered-app-stores-program-launches-dec-1-applications-now-open/)** - サードパーティのストアを Google が認定する制度が 12/1 に開始。アプリ配布先を増やしやすくなるが、米国は対象外。
- **[Fujifilm to boost tape production 5x as AI fuels archiving demand](https://arstechnica.com/gadgets/2026/10/fujifilm-to-boost-tape-production-5x-as-ai-fuels-archiving-demand/)** - AI によるデータ保管需要の増加で、富士フイルムが磁気テープを 5 倍に増産。低コストとオフライン保管による安全性が評価されている。

## 注目トピック
AI エージェントを「どう安全に、どう低コストで動かすか」が複数ソースで共通していた。GKE Agent Sandbox での隔離実行、全機能をツール化した際のトークンコスト、Step Functions などの既存ワークフローのツール化、物理キーボードまで AI に渡す実験、社内の Background Coding Agent 基盤まで、実行環境と権限境界の設計が主題になっている。一方で Anthropic の IoT 自己複製ワームの警告や UEFI の EDK2 欠陥のように、攻撃面の側でも AI とファームウェア層が焦点になっている。

インフラ面では、SageMaker の GPU partitioning、Gemma 4 の量子化を 4 種類の GPU で比較した検証、軌道上 TPU、プレハブ型データセンターなど、計算資源の効率化と調達の工夫が目立った。DynamoDB のレプリカ切り離しや Aurora Serverless の上限拡張といった運用上の自由度の向上も合わせて押さえておきたい。

※ Qiita は同一著者を1件に絞って選定している。取得失敗したソースはなし。
