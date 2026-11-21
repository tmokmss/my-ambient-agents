---
title: "Tech Feed ダイジェスト（2026年11月22日）"
date: "2026-11-21T16:43"
category: "summary"
summary: "AIエージェント時代の開発設計、AWSのRoute 53/MSK更新、UEFI脆弱性、Lobstersの形式検証・C++26など8ソースの注目記事"
tags: ["ai", "aws", "security", "agents", "devops", "testing", "formal-methods"]
---

## はてなブックマーク (テクノロジー)
- **[ソフトウェアファクトリーとコード設計と顧客価値](https://kosui.me/posts/2026/11/15/code-design-after-agents)** ([132users](https://b.hatena.ne.jp/entry/s/kosui.me/posts/2026/11/15/code-design-after-agents)) - AIエージェントがコードを書く前提で、コード設計や品質の考え方がどう変わるか、顧客価値との関係から論じた記事。エージェント時代の設計指針を考える材料になる。
- **[GitHub - mitaku/andon](https://github.com/mitaku/andon)** ([59users](https://b.hatena.ne.jp/entry/s/github.com/mitaku/andon)) - 台帳のタスクをAIコーディングエージェントがレビュー、マージまで進め、人間には人間にしか決められない判断だけを求める「一人用ソフトウェアファクトリー」のOSS。
- **[なぜヘンリーのE2Eリポジトリは整理されないまま膨らみ続けたのか。AIで加速した開発とガードレール](https://dev.henry.jp/entry/e2e-repository)** ([40users](https://b.hatena.ne.jp/entry/s/dev.henry.jp/entry/e2e-repository)) - AIで開発が加速するなか、E2Eテストのリポジトリが整理されないまま肥大化した経緯と、ガードレールの考え方を振り返るエンジニアブログ。
- **[columnsプロパティで縦積みのナビゲーションを作る – TAKLOG](https://www.tak-dcxi.com/article/vertical-navigation-with-columns-property/)** ([20users](https://b.hatena.ne.jp/entry/s/www.tak-dcxi.com/article/vertical-navigation-with-columns-property/)) - CSSのcolumnsプロパティを使って縦方向に積むナビゲーションを実装する手法の解説。
- **[形式検証を活用した脆弱性診断LLMのプロトタイプをEthereum Foundationに納品｜Nyx Foundation](https://note.com/nyxfoundation/n/n782d4fb32344)** ([6users](https://b.hatena.ne.jp/entry/s/note.com/nyxfoundation/n/n782d4fb32344)) - 形式検証を組み合わせた脆弱性診断用LLMのプロトタイプをEthereum Foundationに納品した、という報告。

## Zenn
- **[AIエージェントに堅牢なテストを書かせるには？](https://zenn.dev/yasuakiomokawa/articles/3ac970c3a3a1c7)** - AIが書いたテストは実装を少し変えただけで壊れがち。そうならないテストを書かせる手順を4つにまとめ、筆者のプロダクトで15日間試した結果を反映している。
- **[JVM がコードを実行する仕組みを理解したい](https://zenn.dev/rea9r/articles/jvm-code-execution)** - JITがいつ何をコンパイルし、そのコードがどこに保存されるのかを、コンパイルログや jcmd の出力と照合しながら整理。HotSpotでは code cache の回収処理が JDK 20 で GC に移った点にも触れている。
- **[【TLA+】AIにテストケースを書かせるな。ルールを書け](https://zenn.dev/karamage/articles/73027ee36796dc)** - 実装もレビューもテストも同じAIが担う状況への危機感から、人間はテストケースではなく「守るべきルール」を書くべきだと提案。TLA+ によるルール記述の考え方を紹介している。
- **[初心者がAIとMAXのAPKを解析してみた【後編】](https://zenn.dev/aki0804/articles/ac6690df48a1ae)** - 前編のコード調査に続き、エミュレーターを ADB と Frida で操作して登録画面の通信、端末内の識別子、診断機能の設定値などを記録。正規ログイン後は未検証と明記している。
- **[DOTweenを使わずにイージングを自作する！Robert Pennerのイージング関数をC#で実装して検証してみた](https://zenn.dev/sorane/articles/e1ed930dea9b1d)** - DOTween を使わない Unity プロジェクト向けに、Robert Penner のイージング関数を C# で実装して検証した記事。

## Qiita
- **[【pre:Inventまとめ】AWSのAIエージェント認証がいろいろ進化！MCPサーバー構築を例に一挙解説](https://qiita.com/minorun365/items/bd6091f2599a0f37326b)** - re:Invent 直前に相次いだ、AWSのAIエージェント認証まわりの新機能をまとめた記事。MCPサーバー構築を例に解説している（冒頭抜粋より）。
- **[AI で6つのシステムを診断して OWASP ASVS に当てはめたら、繰り返していたのは設計で決める規則の指摘だった話（2026年版）](https://qiita.com/ntaka329/items/3f9405a4e2bb7e0add3f)** - Claude Code にソースを読ませるホワイトボックス診断を回し、指摘を OWASP ASVS 5.0 に当てはめた実践記録。前回の21件の分析に続く内容で、繰り返される指摘が設計段階の規則に帰着するという。
- **[AIにコードレビューを頼んだら、仕込んだ脆弱性をいくつ見つけるか実験してみた](https://qiita.com/Machida-03/items/feaa1fc101e83d09110a)** - これまでは「AIにコードを書かせたらセキュリティの穴を開けるか」を試してきた筆者が、今回は逆にレビュー側として仕込んだ脆弱性を検出できるかを実験している。
- **[AI Agentの実行はどこまで追える？ Langfuse・OpenTelemetry・Prometheusで検証してみた【前編】](https://qiita.com/tishida734/items/ae11c0f9c44d1ae05cd7)** - サーバ再起動のような操作までできるAgentを運用する際に、実行をどこまで追跡・管理できるかを Langfuse、OpenTelemetry、Prometheus で検証するシリーズの前編。
- **[バイブコーディング・isdd・AI-DLCに同じ依頼を出して、できあがりと手間を比べた](https://qiita.com/notfolder/items/c4480072ef594e591dc8)** - 要件定義や設計の手順を踏ませる開発手法と、作りたいものをそのまま伝える方法で、成果物と手間がどう違うかを同じ依頼で比較した検証。

## AWS 新着
- **[Amazon MSK Standard Brokers adds support for Apache Kafka version 4.2](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-msk-standard-version-42/)** (2026-11-20) - MSK の Standard ブローカーが Kafka 4.2 に対応。目玉は本番利用可能になった「Queues for Kafka」で、キュー型のコンシューム処理を Kafka 上で扱えるようになる。
- **[Amazon Route 53 now offers Advanced Hosted Zones](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-offers-advanced-hosted-zones/)** (2026-11-20) - ガードレール、可視性、耐障害性を強化した新しいホストゾーン階層。変更を防ぐ Change Guardrails などを備える（description の範囲）。
- **[Amazon Route 53 now supports Availability Zone (AZ) affinity routing](https://aws.amazon.com/about-aws/whats-new/2026/11/route-53-affinity-routing/)** (2026-11-20) - VPC からの DNS クエリを、クエリ元クライアントと同じ AZ のリソースに振り向ける。AZ 間通信を減らす設計に使える。
- **[Amazon S3 Vectors raises the filterable metadata limit to 40 KB per vector](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-vectors-raises-filterable-metadata-40kb-per-vector/)** (2026-11-20) - ベクトルごとのフィルタ可能メタデータ上限が 2 KB から 40 KB に拡大。権限やタイムスタンプなど、より多くの属性でフィルタできる。
- **[AWS Lambda adds support for Python 3.15](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-python-315/)** (2026-11-20) - Lambda が Python 3.15 に対応。Event Functions では GA、Web Functions ではパブリックプレビュー。

## Lobsters
- **[My Monitor Was Cutting My Download Speed by 75%](https://blog.tymscar.com/posts/studiodisplayethernet/)** (19pt) - モニター経由のネットワーク接続でダウンロード速度が約75%低下していた原因を追うネットワークのトラブルシュート記事（タイトルとタグ networking からの要約）。
- **[Garage Door Spam](https://blog.harrison.page/garage-door-spam/)** (52pt) - ガレージドアにまつわるスパム的な現象を扱うハードウェア系の記事。hardware タグでコメント10件。
- **[DreamCoder: coding harness and IDE from the author of Mastering Emacs](https://www.masteringemacs.org/article/announcing-dreamcoder)** (30pt) - Mastering Emacs の著者が、コーディングハーネス兼 IDE「DreamCoder」を発表。
- **[Verifying formal models of Raft implementations](https://antithesis.com/blog/2026/verifying-formal-models/)** (9pt) - Raft 実装に対して形式モデルが実装と整合しているかを検証する話。分散合意の実装検証に関心のある人向け。
- **[C++26 is done (again)! — Trip report: November 2026 ISO C++ standards meeting](https://herbsutter.com/2026/11/21/c26-is-done-again-trip-report-november-2026-iso-c-standards-meeting-buzios-brazil/)** (8pt) - ブラジル・ブジオスで開かれた2026年11月の ISO C++ 標準化会議の参加レポート。C++26 が（再び）完了したと報告している。

## dev.to
- **[One model gateway across clouds: LiteLLM on Cloud Run and Azure with zero API keys](https://dev.to/gde/one-model-gateway-across-clouds-litellm-on-cloud-run-and-azure-with-zero-api-keys-3ma7)** - Cloud Run と Azure Container Apps に LiteLLM を1つずつ置き、エージェントが各クラウドの自身のIDで Gemini と Azure OpenAI にAPIキーなしでアクセスする構成の解説。
- **[Exploring Decision Models, Part 1: Putting Gemini Decision 1 to the Test](https://dev.to/googleai/exploring-decision-models-part-1-putting-gemini-decision-1-to-the-test-50f0)** - 単純な真偽判定に大規模LLMを呼ぶ無駄に着目し、Gemini Decision 1 を800の実シナリオで検証。強い場面と、コイン投げ以下になる場面を探っている。
- **[Orchestrating Agents: Three Orchestrators, One Process](https://dev.to/aws-builders/orchestrating-agents-three-orchestrators-one-process-4agc)** - Strands の3つのオーケストレーターを同一プロセスで動かしても文脈は共有されず、境界を越えるのはテキストだけだと Bedrock での9実験で示す。ネストした失敗が100%成功と報告される例も。
- **[What survived when I moved a small Compose app into Swarm mode](https://dev.to/alexgeorgiev17/what-survived-when-i-moved-a-small-compose-app-into-swarm-mode-5ee0)** - 2サービスの Compose アプリを Docker Swarm モードに移し、Swarm が一部拒否する設定、見かけ上動くスケールコマンド、Compose にはなかった再起動保証などを実測。
- **[Zombie Sweep on Google Cloud: A Daily Waste Report on AlloyDB Express, With a Database Bill You Can Predict](https://dev.to/gde/zombie-sweep-on-google-cloud-a-daily-waste-report-on-alloydb-express-with-a-database-bill-you-can-305g)** - Cloud Scheduler、Workflows、Cloud Run で毎日プロジェクトを走査して無駄を検出し、結果を AlloyDB Express に保存。ゼロスケールと月額上限で費用を予測可能にする構成。

## TechCrunch
- **[Superhuman pushes its Go assistant everywhere](https://techcrunch.com/2026/11/19/superhuman-pushes-its-go-assistant-everywhere/)** - Superhuman が AI アシスタント「Go」を中核エージェントに据え、Docs と Mail でも使えるようにした。メール／ドキュメントのアプリがエージェント前提に再編される動きの一例。

※ 他ソースや過去レポートとの重複を除いた新規記事が1件のみだった。

## Ars Technica
- **[Copilot is "the new OS for work," and now Office runs inside of it](https://arstechnica.com/gadgets/2026/11/microsoft-calls-copilot-the-new-os-for-work-at-ignite-keynote/)** - Ignite の基調講演で、Word・Excel・PowerPoint が Copilot の内部で動くようになり、次は常時稼働のエージェントが来ると Microsoft が説明。
- **[UEFI bootkit infected fully patched Windows machines. Is Microsoft to blame?](https://arstechnica.com/security/2026/11/uefi-bootkit-infected-fully-patched-windows-machines-is-microsoft-to-blame/)** - UEFI ブートキット BlackX が、Secure Boot 保護に関する Microsoft の不明確さを突いて、完全にパッチ済みの Windows に感染したという報道。
- **[Code-execution flaw in UEFI firmware affects most servers on planet Earth](https://arstechnica.com/security/2026/10/code-execution-flaw-in-uefi-firmware-threatens-most-servers-on-planet-earth/)** - EDK2 の重大な欠陥により、ブート初期段階で攻撃者がコードを実行できる。多くのサーバーが影響を受けるとされる。
- **[Hackers exploited iOS and Android flaws to infect phones](https://arstechnica.com/security/2026/11/hackers-exploited-ios-and-android-flaws-to-infect-phones/)** - iOS と Android の脆弱性を悪用してスマートフォンに感染させた攻撃。研究者は外交上の標的を狙うクレムリン系グループの可能性を指摘している。
- **[IBM to offer access to a dual-processor quantum system in 2027](https://arstechnica.com/science/2026/11/ibm-to-offer-access-to-a-dual-processor-quantum-system-in-2027/)** - IBM が2027年中に 520 量子ビットのチップ2枚を連結し、2プロセッサ構成の量子システムを提供する計画。

## 注目トピック
今日目立ったのは「AIエージェントが書いたコードをどう信頼するか」という論点で、複数ソースが取り上げている。Zenn ではAIにテストを書かせる際の堅牢性や TLA+ によるルール記述、Qiita では AI による脆弱性診断・レビューの実験、はてブでは E2E テストの肥大化やソフトウェアファクトリー型の開発が話題になった。検証手段をどう人間側に残すかが共通の関心になっている。

もう一つは基盤レイヤーのセキュリティと運用設計である。Ars Technica では UEFI/Secure Boot まわりの脆弱性が2件並び、AWS では Route 53 の Advanced Hosted Zones や AZ affinity routing のように、変更ミスの防止や AZ 間通信の削減といった運用面の更新が出た。エージェント基盤でも、dev.to の LiteLLM の例のようにAPIキーを持たないID中心の構成や、Qiita のエージェント実行の可観測性など、認証と追跡の設計が焦点になっている。
