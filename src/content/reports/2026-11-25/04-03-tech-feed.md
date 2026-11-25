---
title: "Tech Feed ダイジェスト（2026年11月25日 昼）"
date: "2026-11-25T04:03"
category: "summary"
summary: "Google gBench のOSS化、DynamoDB互換ExtendDB 1.0、AIエージェントの権限設計、Microsoft障害の内幕など8ソースの技術トピック"
tags: ["ai", "aws", "security", "oss", "testing", "infrastructure"]
---

## はてなブックマーク (テクノロジー)
- **[GoogleがAIの性能測定ツール「gBench」をオープンソース化](https://gigazine.net/news/20261124-google-gbench-benchmarking-framework/)** ([47users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261124-google-gbench-benchmarking-framework/)) - Google がAIの性能測定用ベンチマークフレームワーク gBench をOSSとして公開。モデルや推論基盤の比較を再現可能な形で行うための土台になる。
- **[Rails: 37signalsのコード品質を支える独自のエンジニアリング戦略（翻訳）](https://techracho.bpsinc.jp/hachi8833/2026_11_24/161424)** ([43users](https://b.hatena.ne.jp/entry/s/techracho.bpsinc.jp/hachi8833/2026_11_24/161424)) - 37signals が Rails コードの品質を保つために採っている設計・レビュー方針を紹介する翻訳記事。
- **[AWS、DynamoDB互換データベースをローカルマシンで構築可能にするオープンソース「ExtendDB」がバージョン1.0に到達](https://www.publickey1.jp/blog/26/awsdynamodbextenddb10.html)** ([42users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/awsdynamodbextenddb10.html)) - DynamoDB 互換のDBをローカルで動かせるOSSが 1.0 に到達。開発・テスト環境をクラウドに依存せず構築しやすくなる。
- **[jQuery 4.1正式版がリリース、内部実装をquerySelectorAllに統一でより高速に](https://www.publickey1.jp/blog/26/jquery_41queryselectoralljquery_3xjquery_38.html)** ([41users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/jquery_41queryselectoralljquery_3xjquery_38.html)) - 内部のセレクタ処理を querySelectorAll に統一して高速化した。3.x 系の最終版となる 3.8 も同時リリースされている。
- **[The Cost of the DOM](https://speakerdeck.com/ypresto/the-cost-of-the-dom)** ([33users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/ypresto/the-cost-of-the-dom)) - DOM 操作・保持のコストをテーマにしたスライド。フロントエンドの性能問題を考える際の参考になる。

## Zenn
- **[MCPの記録ツールを追記だけで作ると、訂正のたびに重複が残る。AIは「消せない」と正直に言うが、集計は間違える](https://zenn.dev/kentaro_tak/articles/mcp-logger-append-only-corrections)** - Google スプレッドシートに書き込む MCP ツールが append しか持たず、訂正のたびに重複行が残る問題を扱う。AI が集計を誤る原因を、ツールの設計（更新・置換の欠如）から考察している。
- **[Alpamayo は Jetson でリアルタイム推論できるか？ R1 から 2 Edge まで、H100 プロファイルからの実行時間推定](https://zenn.dev/fixstars/articles/alpamayo-h100)** - 自動運転向け VLA モデル Alpamayo を H100 で実行・プロファイルし、その結果から Jetson AGX Thor / Orin などでの実行時間を推定する検証記事。
- **[相次ぐOSSの脆弱性に、とりあえずクラウドWAF入れるだけでだいぶ違う話+Rootlessコンテナもいいぞ](https://zenn.dev/kusuke/articles/98e178e6824cac)** - PHP・Java・nginx のコア級脆弱性が続くなかで、クラウド WAF の導入と Rootless コンテナによる被害軽減を実務目線で整理している。
- **[Microsoft Foundry で AI エージェントを設計するときに決める5つのこと](https://zenn.dev/microsoft/articles/daedf42c8463b8)** - 会話履歴の保存先、エージェントの作成方式、接続ツール、権限、ネットワークといった設計判断が互いにどう関わるかを図に沿って解説する。
- **[コードを全部は読まずにClaude Codeで本番リリースするためにしたこと](https://zenn.dev/teradox_blog/articles/8ec76cc0d9e2bb)** - 規約でAIの判断を減らす、設計と実装を分けて並列化する、人が見る箇所を絞る、の3点で本番リリースまで進めた実践記録。

## Qiita
- **[ECR/S3からのimage pullの仕組みを深掘りする](https://qiita.com/har1101/items/a6e5f0d2039bd0932511)** - プライベートサブネットの ECS タスクで起きた謎のエラーを入口に、ECR/S3 からの image pull の裏側を掘り下げる（冒頭抜粋より）。
- **[テスト環境で本番の顧客データを使うべきか。楽天証券の漏えいを公表文書から整理し、「本番データでないと確かめられないテスト」をマスキングで代われるか1万件で試した](https://qiita.com/suwa_nobu/items/245b59a87cc1963790d0)** - 漏えいがテスト環境に置かれた情報だった点に着目し、マスキングで本番データを代替できるかを1万件で検証した記事。
- **[erasableSyntaxOnlyの対応](https://qiita.com/J-T_ky2g/items/64629d7ae38f8feae15e)** - TypeScript の class でコンストラクタのパラメータプロパティが `erasableSyntaxOnly` でエラーになる問題と、その対処を扱う（冒頭抜粋より）。
- **[情報量が4倍のQRコードを作ろう](https://qiita.com/reipandada/items/17496db6ac5f64a5e61a)** - QRコードの3隅の位置検出パターンに着目し、4隅すべてに置いて1つを隠せば向き判定に加えて情報を載せられるのでは、というネタ記事（本人も「ゆるく読んで」と記載）。
- **[agf導入でAIエージェントのセッション検索、クラウド実行では0件になった理由](https://qiita.com/kai_kou/items/2925b5388cc7724d50c9)** - Claude Code や Codex CLI など複数のエージェントのセッションを横断検索する Rust 製ツール agf を導入し、クラウド実行では0件になった原因を調べた記事（冒頭抜粋より）。

## AWS 新着
- **[AWS Lambda adds support for Python 3.15](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-python-315/)** (2026-11-20) - Python 3.15 が Lambda Event Functions で GA、Web Functions ではパブリックプレビューになった。
- **[Amazon S3 Vectors raises the filterable metadata limit to 40 KB per vector](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-vectors-raises-filterable-metadata-40kb-per-vector/)** (2026-11-20) - ベクトルごとのフィルタ可能メタデータ上限が 2 KB から 40 KB に拡大。権限や日付など、RAG のフィルタ条件に使う属性を増やせる。
- **[Amazon MSK Standard Brokers adds support for Apache Kafka version 4.2](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-msk-standard-version-42/)** (2026-11-20) - Kafka 4.2 に対応し、目玉の Queues for Kafka が本番利用可能になった。
- **[AWS WAF introduces simplified pricing](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-waf-introduces-simplified-pricing/)** (2026-11-23) - 課金を、これまでの Web ACL・ルール・ルールグループ・キャパシティ単位から、保護対象に応じた体系へ簡素化する。
- **[AWS CloudFormation makes resource coverage comprehensive with 206 new types](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudformation-coverage-expansion/)** (2026-11-24) - 88 サービスにわたり 206 のリソースタイプを追加（Bedrock AgentCore PolicyEngine など）。IaC でカバーできていなかった領域が埋まる。

## Lobsters
- **[Signal is Serious About Protecting Your Privacy](https://signal.org/blog/protecting-your-privacy/)** (119pt) - Signal 公式によるプライバシー保護方針の説明。モバイルアプリのスクリーンショット制限など、AI 監視への対抗策が議論になっており、コメントは73件に上る。
- **[I checked Clojure's core with Lean and found 17 unreported bugs](https://s.conao3.com/blog/2026/e4f733)** (62pt) - Clojure のコアライブラリを Lean で検証し、未報告のバグを17件見つけた報告。形式手法を既存の実装に適用する実例。
- **[Lua for data representation](https://citrons.xyz/journal/2025-07-23)** (38pt) - 設定やデータ記述の言語として Lua を使う利点を述べた記事。コメントは12件。
- **[Per Vognsen on the effect of AVX-512 on lexing and parsing](https://mastodon.social/@pervognsen/117668394962974183)** (28pt) - AVX-512 が字句解析・構文解析の性能に与える影響についての投稿。コンパイラ実装者向けの知見。
- **[cgo's pointer check is all over the place](https://theconsensus.dev/p/2026/11/15/cgos-pointer-check.html)** (25pt) - Go の cgo のポインタ検査が場所によって一貫していないことを指摘する記事。

## dev.to
- **[Fast multimodal control flow with the Gemini Decisions API](https://dev.to/philschmid/fast-multimodal-control-flow-with-the-gemini-decisions-api-533b)** - ツールの選択やルーティングだけが必要な場面で、テキストを生成せずに判断だけを返す Gemini Decisions API を紹介する。
- **[git bisect doesn't work on lockfiles — so I built whichdep](https://dev.to/kameh0use/git-bisect-doesnt-work-on-lockfiles-so-i-built-whichdep-4d37)** - 依存更新で CI が壊れたとき、lockfile 中の十数件の変更のどれが原因かを特定する Rust 製ツール whichdep の紹介。git bisect が lockfile に向かない理由も説明している。
- **[Your agent isn't breaking the rules. Your rules were never enforced.](https://dev.to/tokenlat/your-agent-isnt-breaking-the-rules-your-rules-were-never-enforced-2ngo)** - 「200超の返金は承認なしで通さない」といったルールをプロンプトに書くだけでは強制されない、という問題を扱う。ルールはプロンプトの外で強制すべきだという設計論。
- **[Why Your AI Release Notes Hallucinate: The "Why vs What" Problem in Git History](https://dev.to/necoz/why-your-ai-release-notes-hallucinate-the-why-vs-what-problem-in-git-history-5ch0)** - 生の git diff を LLM に渡すと、もっともらしいが誤った changelog になる。正しい「なぜ」を得るには関連 Issue の紐付けと反事実的な評価が必要だと論じる。
- **[Announcing AnalogJS 3.0](https://dev.to/analogjs/announcing-analogjs-30-146n)** - Angular 向けメタフレームワーク AnalogJS の 3.0 リリース告知。

## TechCrunch
- **[Even the best AI agents struggle with everyday life](https://techcrunch.com/2026/11/24/even-the-best-ai-agents-struggle-with-everyday-life/)** - 個人向け AI アシスタントが普及するなか、新しいベンチマークで、最先端モデルでも日常タスクを確実かつ安全にこなせず、新たな問題を起こすことが示された。
- **[Maple raises $5.3M to build AI products that protect your data, even from itself](https://techcrunch.com/2026/11/24/maple-raises-5-3m-to-build-ai-products-that-protect-your-data-even-from-itself/)** - 運営会社自身もユーザーの私的データにアクセスできない、暗号化 AI アーキテクチャを掲げるスタートアップの資金調達。
- **[Dozens of oil and shipping tankers hacked in recent weeks, per report](https://techcrunch.com/2026/11/24/dozens-of-oil-and-shipping-tankers-hacked-in-recent-weeks-per-report/)** - 石油・化学の輸送船を狙ったサイバー攻撃が数十件あったと報じられ、イランが主な容疑者とされる。

## Ars Technica
- **[Microsoft's historic cloud outage exposed an engineering "fog of war"](https://arstechnica.com/gadgets/2026/11/microsofts-historic-cloud-outage-exposed-an-engineering-fog-of-war/)** - 内部メモから、Microsoft が「Code Red」で体制を見直し、1時間での復旧という野心的な目標を掲げたことが明らかになった。障害対応の内幕を伝える記事。
- **[What's going on with the Riemann hypothesis?](https://arstechnica.com/ai/2026/11/whats-going-on-with-the-riemann-hypothesis/)** - AI 支援による新しい証明は堅そうに見えるが、それが何を意味するのかはまだ分からないという解説。
- **[States sue SpaceX to stop Grok from generating child sex images, revenge porn](https://arstechnica.com/tech-policy/2026/11/states-sue-spacex-to-stop-grok-from-generating-child-sex-images-revenge-porn/)** - 各州の司法長官が、Grok のコンテンツ生成を止めるよう SpaceX を提訴した。X 側は全出力を審査していると主張するが、州側は違法コンテンツの生成が続いていると反論している。生成 AI のモデレーションを巡る法的な論点。

## 注目トピック
今回は AI エージェントの「ルールと権限をどこで強制するか」が複数ソースで重なった。dev.to ではプロンプトに書いたルールが実際には強制されていない問題、Zenn では MCP ツールが追記しかできず AI が集計を誤る問題、TechCrunch では日常タスクで安全に動けないエージェントのベンチマーク結果が取り上げられている。Google の gBench の OSS 化も含め、エージェントの評価と制御の仕組みが開発者の関心事になっている。

インフラ面では、AWS が S3 Vectors のメタデータ上限拡大や Kafka 4.2 の Queues、CloudFormation の 206 リソースタイプ追加を発表した。Microsoft の大規模障害の内幕や、OSS の脆弱性対策として WAF と Rootless コンテナを併用する話も出ており、障害対応と多層防御が引き続き重要なテーマになっている。
