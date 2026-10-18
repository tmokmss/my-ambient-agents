---
title: "Tech Feed ダイジェスト（2026年10月18日）"
date: "2026-10-18T13:09"
category: "summary"
summary: "Linus の AI 支援カーネル投稿への見解、Lambda Durable Go SDK GA、LLM 向け iOS 操作のコンテキスト削減、MCP の構造的リスクなど"
tags: ["ai", "aws", "security", "mcp", "llm", "tls", "serverless"]
---

## はてなブックマーク (テクノロジー)
- **[example.com が刷新された話](https://blog.jxck.io/entries/2026-10-17/example.com.html)** ([100users](https://b.hatena.ne.jp/entry/s/blog.jxck.io/entries/2026-10-17/example.com.html)) - ドキュメント用予約ドメイン example.com の刷新について解説したブログ。標準仕様・予約ドメインの扱いに関わる話題で、テスト用ドメインの使い方を見直すきっかけになる。
- **[ドコモの「緊急地震速報」不配、原因を発表　「従来と異なるデータ」で誤認識](https://k-tai.watch.impress.co.jp/docs/news/2149025.html)** ([109users](https://b.hatena.ne.jp/entry/s/k-tai.watch.impress.co.jp/docs/news/2149025.html)) - 配信システムが想定と異なる形式のデータを誤認識して不配になったという障害の原因報告。入力データの想定外パターンへの耐性という、障害設計の観点で参考になる。
- **[本番DBに不要なレコードを数千万件登録してしまった話](https://zenn.dev/geekplus/articles/a615dfe41557d8)** ([8users](https://b.hatena.ne.jp/entry/s/zenn.dev/geekplus/articles/a615dfe41557d8)) - 本番 DB への大量の不要レコード登録事故の経緯をまとめたポストモーテム系の記事。
- **[Web Framework Benchmark Battle 2026, Any%](https://speakerdeck.com/a_matsuda/web-framework-benchmark-battle-2026-any-percent)** ([4users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/a_matsuda/web-framework-benchmark-battle-2026-any-percent)) - Web フレームワークのベンチマークを題材にした発表スライド。性能比較の勘所を扱う。

## Zenn
- **[ClaudeにiOSシミュレーターのスクリーンショットを読ませるのをやめて、操作で増えるコンテキストを43%削減した](https://zenn.dev/eai/articles/dont-let-agents-see-the-ios-sim-screen)** - 過去セッションログ99件を集計して非効率な操作を洗い出し、画面を画像ではなく文字で読むツールを足した事例。同じ4作業で旧来方式と3回ずつ比較し、コンテキスト量を43%削減したという。
- **[日本語の個人情報を Bedrock Guardrails, SDP, Presidio でマスキングして比較する](https://zenn.dev/fusic/articles/a77ba348115364)** - 全角数字・和暦・話し言葉など日本語特有の表記に対し、Google Cloud SDP、Bedrock Guardrails、OSS の Presidio がどこまで個人情報をマスクできるかを比較している。
- **[ベクトルDBを使わない「階層ナビゲーション型RAG」を作って、ベクトルDB版RAGと比較してみた](https://zenn.dev/aiforall/articles/8e1803396534de)** - 文書から階層的な目次を自動生成し、LLM が上から辿って文書を選ぶ RAG を自作。28文書・20問の小規模比較では正答数はベクトルDB版と同等（どちらも16問）だった。
- **[話題の逆解析 MCP「REA」を Claude Code に隔離してつないだ——静的解析の A/B 試験と安全設計](https://zenn.dev/keigoly/articles/8738d8d241b5a1)** - 逆解析ツールを隔離環境でエージェントに接続して評価。回答の正確さは標準の道具と同等で、REA 導入時は試行錯誤が増え所要時間は最大2.00倍、費用は最大1.67倍になったとのこと。
- **【セキュリティ】お客さんからの「うちは大丈夫？」に答えるため、IPAの点検項目をレガシーPHPのECサイトで上から順にやってみた**（[記事](https://zenn.dev/subara3/articles/b90ff538d87aa6)） - IPA が10月9日に公表した漏えい対策の点検項目を、レガシー PHP の EC サイトに順に当てはめて確認した実践記録。

## Qiita
- **[DynamoDB の S3 エクスポートにフィルターが来た！特定データだけ切り出して新テーブルを作る](https://qiita.com/s_moriyama/items/a3336c72f1f4e81744c5)** - 2026年10月1日のアップデートで、S3 エクスポートでフィルターが使えるようになった。従来はテーブル全体か期間指定の増分しか出せなかった点が変わる（冒頭抜粋ベース）。
- **[ASP.NET CoreとSource Generatorでポリシーベースの権限管理を楽に実装できるようにしてみた](https://qiita.com/omt_teruki/items/27f7bacee43205e28f11)** - `[Authorize(Policy = "article:read")]` のようなポリシーベース認可の記述を、Source Generator で楽にする試み（冒頭抜粋ベース）。
- **[フレームワークが動くのを待つな、FSDPを書け — リリース8日後に397B MoEを学習した基盤を全公開](https://qiita.com/katsuki_ono/items/e656aa1c7e7d70f4a1cd)** - verl や DeepSpeed 等のフレームワークに頼らず、Slurm クラスタ上で自前の FSDP 実装により大規模 MoE を学習した基盤の紹介（冒頭抜粋ベース）。
- **[Entra ID で AI エージェントに ID を持たせよう！ ～ Foundry × Claude で検証（その1）](https://qiita.com/shou-wordwright555501/items/b4e0ad709b882ed4ad44)** - AI セキュリティの一環として、エージェントに Entra ID の ID を割り当てて権限を付与する検証（冒頭抜粋ベース）。

## AWS 新着
- **[Amazon DynamoDB Streams now supports timestamp-based stream processing](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-dynamodb-streams-timestamp-processing)** (2026-10-15) - 特定の時点を指定してストリームレコードの読み取りを開始できるようになった。従来は保持期間内の最古から読むしかなかった。
- **[AWS Lambda Durable Execution SDK for Go is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-go-sdk-support/)** (2026-10-15) - Lambda durable functions 向けの Go SDK が GA。Go で耐久性のある長時間ワークフローを書ける。
- **[Amazon CloudWatch announces log routing and chained log parsers](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudwatch-pipelines-log-routing/)** (2026-10-14) - パイプラインで条件付きのログルーティングとパーサーの連鎖が可能に。変換結果の送り先ロググループを制御できる。
- **[AWS Continuum for Penetration Testing now supports continuous penetration testing integrated directly into your CI/CD pipeline](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-penetration-testing/)** (2026-10-05) - 継続的なペネトレーションテストを CI/CD パイプラインに組み込める（パブリックプレビュー）。旧称は AWS Security Agent 系。
- **[Amazon OpenSearch Service now supports index-level encryption](https://aws.amazon.com/about-aws/whats-new/2026/10/opensearch-index-level-encryption)** (2026-10-12) - インデックス単位で、個別の KMS カスタマー管理キーによる保存時暗号化が可能に。

## Lobsters
- **[Linus Torvalds on AI-assisted kernel contributions](https://lore.kernel.org/lkml/CAHk-=whTs09_ozN+e09GU68N1wPP56MUzDjrg9rnKxQUa0A_4Q@mail.gmail.com/)** (89pt) - Linux カーネルの ML 上での、AI 支援によるコントリビューションに対する Linus の見解。コメントは159件と議論が活発（本文は未取得のためタイトルと反響のみ）。
- **[It took me nine years to hack my Xbox 360](https://kennedn.com/blog/posts/glitching/)** (23pt) - Xbox 360 に対するグリッチ攻撃を9年かけて成功させたハードウェアリバースの記録。
- **[It's time to talk about TEEs](https://alinush.github.io//tee)** (6pt) - TEE（信頼実行環境）の位置づけをハードウェア／セキュリティの観点から論じる記事。

## dev.to
- **[One Rust Unicode Bug, Three Coding Models: A Reproducible Comparison](https://dev.to/lovestaco/one-rust-unicode-bug-three-coding-models-a-reproducible-comparison-48ae)** - リーダーボードではなく、実際の Rust の Unicode バグを3つのコーディングモデルに直させて再現可能な形で比較している。
- **[Do Drafters Work on Small Models? Gemma 4 E2B and E4B on Two Small GPUs](https://dev.to/gde/do-drafters-work-on-small-models-gemma-4-e2b-and-e4b-on-two-small-gpus-1b4g)** - 59MB の QAT MTP ドラフターによる投機的デコードで、8GB の RTX 3050 上で E4B が1.72倍、E2B が1.40倍に高速化した。
- **[SQLite 3.54's diskused command needs a build flag sqlite3_analyzer never required](https://dev.to/alexgeorgiev17/sqlite-354s-diskused-command-needs-a-build-flag-sqlite3analyzer-never-required-4na8)** - sqlite3_analyzer を置き換える組み込み diskused() は 0.025s と旧ツールの0.061sより速いが、`SQLITE_ENABLE_DBSTAT_VTAB` なしのビルドでは失敗する。
- **[What does your CDK app cost when nobody is using it?](https://dev.to/aws-builders/what-does-your-cdk-app-cost-when-nobody-is-using-it-jp4)** - 4スタック構成のサンプル CDK アプリを使い、リクエストがゼロでも発生する固定コストを洗い出す FinOps 視点の記事。
- **[My Agent Turned "I Haven't Decided" Into "Not Yet." Now the Model Isn't Allowed to Write Its Own Memory.](https://dev.to/kenielzep97/my-agent-turned-i-havent-decided-into-not-yet-now-the-model-isnt-allowed-to-write-its-own-23ma)** - エージェントが「未決定」を「まだ」と書き換えてしまう記憶汚染への対処として、モデル自身にメモリを書かせない設計にした事例。

## TechCrunch
- **[Meta launches an open-weight AI model that runs on Macs](https://techcrunch.com/2026/10/15/meta-launches-an-open-weight-model-that-runs-on-macs/)** - Meta が Apple と組み、Apple Silicon 上でローカル実行できるオープンウェイトモデル Muse Spark Open を公開した。
- **[Anthropic is letting METR researchers look under the hood with employee-level access](https://techcrunch.com/2026/10/15/anthropic-is-letting-metr-researchers-look-under-the-hood-with-employee-level-access/)** - METR が従業員レベルのアクセスで Anthropic のリスク・インシデント・運用を独自に評価・公表する。Anthropic はそれを止める権利を放棄したという。
- **[Bluesky expands its AI-powered Attie app to let anyone build websites, games, and more](https://techcrunch.com/2026/10/15/bluesky-expands-its-ai-powered-attie-app-to-let-anyone-build-websites-games-and-more/)** - 実験的プラットフォーム Attie で、ゲームやクイズ、サイトなどを作れる「ソーシャル・バイブコーディング」を提供し、ソーシャルネットワークのデータを利用できる。

## Ars Technica
- **[Targeted ads delivered 0-click exploits to install mercenary malware](https://arstechnica.com/security/2026/10/targeted-ads-delivered-0-click-exploits-to-install-mercenary-malware/)** - 標的型広告経由で 0-click エクスプロイトが配信され、商用スパイウェアが導入された事例。広告配信によるスパイウェア配布が確認された初のケースとみられる。
- **[MCP for agent-to-agent comms may be the riskiest protocol you've never heard of](https://arstechnica.com/security/2026/10/vulnerability-in-agents-from-google-and-others-exposes-structural-flaw-in-mcp/)** - エージェント間通信での MCP の信頼ギャップにより、悪意あるプロンプトが別のエージェントへ伝播する構造的な欠陥を指摘している。
- **[Let's Encrypt cuts certificate lifetimes to 64 days starting February 2027](https://arstechnica.com/gadgets/2026/10/lets-encrypt-cuts-certificate-lifetimes-to-64-days-starting-february-2027/)** - 2027年2月から証明書の有効期間が64日に短縮される。自動更新が前提の運用になる。
- **[Cloudflare plans to issue quantum-safe TLS certificates](https://arstechnica.com/security/2026/09/cloudflare-plans-to-issue-quantum-safe-tls-certificates/)** - Cloudflare が耐量子 TLS 証明書の発行を計画している。Web 認証エコシステム全体の大幅な見直しの一環。

## 注目トピック
エージェント関連の安全性と運用コストが複数ソースで共通の論点になっている。Zenn では画面を画像でなくテキストで読ませてコンテキストを削減する工夫が、Ars Technica では MCP を介したエージェント間のプロンプト伝播リスクが報じられ、AWS 側でもエージェント向けの Entra ID/ID 管理や CI/CD への組み込み型ペンテストなど、「任せる範囲を制御する」仕組みが増えている。Lobsters では Linus による AI 支援カーネルコントリビューションへの見解が大きな議論を呼んだ。

もう一つの流れは、証明書や暗号基盤の更新サイクルの短縮化。Let's Encrypt の64日化と Cloudflare の耐量子証明書計画は、証明書運用の自動化と暗号アジリティが前提になりつつあることを示している。サーバーレス側では Lambda durable functions に Go SDK が加わるなど、長時間ワークフローの選択肢が広がっている。
