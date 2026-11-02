---
title: "Tech Feed ダイジェスト（2026年11月2日）"
date: "2026-11-02T00:32"
category: "summary"
summary: "ECS Gateway・GitHub Actions のロックファイル運用・Binance 6.3B ドル侵害・Cursor 拡張機能のバックドア化など8ソースの技術トピック"
tags: ["aws", "security", "ai", "github-actions", "devops", "supply-chain", "webassembly"]
---

## はてなブックマーク (テクノロジー)

- **[自作PWAをTailscale Serveで配るのが便利だった話](https://zenn.dev/6uclz1/articles/43e803ec9d54dd)** ([92users](https://b.hatena.ne.jp/entry/s/zenn.dev/6uclz1/articles/43e803ec9d54dd)) - 自作 PWA を Tailscale Serve 経由で配信する実践記。タイトルから、公開サーバーを立てずに自分の tailnet 内へ HTTPS で配るという使い方が読み取れる。
- **[Amazon ECS の新機能 「ECS Gateway」 を試してみた | DevelopersIO](https://dev.classmethod.jp/articles/try-amazon-ecs-gateway/)** ([24users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/try-amazon-ecs-gateway/)) - ECS サービス向けのマネージドなイングレスで、ALB 周りの構成を簡略化するための新リソース。本記事はそれを実際に試した検証記。AWS 公式の発表（Whats New 10/20 付）も出ている。
- **[HonoがPRを閉じた理由](https://slides.yusu.ke/foss4g-2026)** ([78users](https://b.hatena.ne.jp/entry/s/slides.yusu.ke/foss4g-2026)) - FOSS4G 2026 の発表スライド。人気 OSS のメンテナンスで、PR を受け入れずに閉じる判断をどう運用しているかという OSS 運営の話。
- **[TVerにおけるテスト自動化の歩み - TVer Tech Blog](https://techblog.tver.co.jp/entry/shiroma/history-of-test-automation)** ([171users](https://b.hatena.ne.jp/entry/s/techblog.tver.co.jp/entry/shiroma/history-of-test-automation)) - 動画配信サービス TVer が、テスト自動化にどう取り組んできたかを時系列でまとめた事例。
- **[WordPressの問い合わせフォーム用プラグイン Contact Form 7に認証不要の任意ファイルアップロードの脆弱性、6.2.4で修正](https://rocket-boys.co.jp/security-measures-lab/contact_form_7_624_security_update_20261030/)** ([68users](https://b.hatena.ne.jp/entry/s/rocket-boys.co.jp/security-measures-lab/contact_form_7_624_security_update_20261030/)) - 認証なしで任意ファイルをアップロードできる脆弱性。6.2.4 で修正済みで、最新の 6.2.4.1 への更新が推奨されている。

## Zenn

- **[ISUCON2026 にツールを捨てて勝ちたかった](https://zenn.dev/mazrean/articles/5c968503fd69a3)** - ISUCON 2026 の参加記。これまで1人チームでツールの力による勝ちを狙ってきたが、今回はその方針を見直した経緯を書いている。最終スコアは 198,146 点で、40〜50 位前後とのこと。同大会に AI エージェントで臨んだ参加記が多数出ているなかで、ツール戦略を主題にした一本。
- **[WASIじゃない、もう一つのインターフェース「WALI」という提案](https://zenn.dev/progate/articles/wali-webassembly-linux-interface)** - Ruby、Python、vim などを wasm 化してブラウザで動かす際に、ファイルを開く・プロセスを増やすといった機能をどう用意するかの話。Emscripten、WASI に並ぶ選択肢として WALI（WebAssembly Linux Interface）を紹介している。
- **[GitHub Actions で checkout@v7 のようなバージョン指定を書くのはやめよう！ 時代は actions.lock！](https://zenn.dev/progate/articles/24b1140180300c)** - `@v7` のようなタグ指定は最新の v7.x.x に追従できて便利な反面、攻撃者にタグを書き換えられるリスクがある。npm のサプライチェーン事案を受けて、ロックファイルによる固定を勧める内容。
- **[KaniによるVerylコンパイラの形式検証](https://zenn.dev/dalance/articles/44a8f80ea0cfa1)** - ハードウェア記述言語 Veryl のコンパイラでは、0/1/x/z の4値・可変長ビット幅・SystemVerilog 規格準拠という複雑な式評価が必要になる。この式評価を、Rust 向けモデル検査ツール Kani で形式検証する試み。
- **[コードを読まずにマージするために必要なこと](https://zenn.dev/nrs/articles/c777388530aa84)** - AI が次々に出す PR をすべて人が読むのは限界、という前提から、「no look merge」に必要な仕組みを整理した記事。要求どおりの動作をテストで確認し、設計・セキュリティのレビューを AI に任せる方法を挙げている。同じテーマで Zenn には別の記事（karamage 氏）も出ている。

## Qiita

- **[AIに証明を書かせてセキュアに開発する言語 Tauto をリリースしました！](https://qiita.com/ryo33/items/3a1a9d1ba2b289b23244)** - AI が書いたコードの差分を全部読むのは限界、という問題意識から作られた言語。冒頭抜粋からは、AI に「なぜ正しいのか」の証明を書かせることで安全性を担保する狙いが読み取れる。
- **[compact の使い方、間違えるとトークン代 2.75 倍？ Claude Code で測ってわかった 5 つの結論【2026年版】](https://qiita.com/songchong/items/ac9779bb8e8838b546b9)** - プロンプトキャッシュ（先頭が同じ部分をサーバー側に保存して安く読む仕組み）を踏まえ、Claude Code の compact 操作がトークン代に与える影響を実測した記事。冒頭抜粋の範囲では、使い方次第でコストが大きく変わるという結論が示されている。
- **[JavaScriptのdocumentをインスタンス化せずに使える理由とDOMの実体を調べてみた](https://qiita.com/yukmaru/items/7ef2bebeb3e227baa8d4)** - 自分でインスタンス化していない `document` のメソッドがなぜ使えるのか、Document オブジェクトがどこで定義されどの時点で生成されるのかを調べた記事。
- **[NWの自動化はなぜ進まないのか(7) - 安全に試せる砂場がない: NWの検証はなぜ難しいのか](https://qiita.com/corestate55/items/5b83ea8c4f373584c0a6)** - ネットワーク自動化が進まない要因をコスト・効果・リスクの観点で論じる連載の7回目。リスクの面から、自動化の前提となる「安全に試せる環境」がネットワークには作りにくい点を扱っている。
- **[Podcast の文字起こしから、X に 1 日 5 回自動投稿してみた（GitHub Actions・月約 $3）](https://qiita.com/t_maki/items/5591e87b3d40797861d7)** - 自分の Podcast（全19話）の文字起こしから、GitHub Actions で X への投稿を自動化した事例。タイトルによれば月額コストは約 3 ドル。

## AWS 新着

- **[AWS Step Functions workflows now available as AI agent tools](https://aws.amazon.com/about-aws/whats-new/2026/10/step-functions-workflows-ai-agent-tools/)** (2026-10-29) - 既存の Step Functions ワークフローを、Bedrock AgentCore Gateway 経由で AI エージェントのツールとして使えるようになった。実行するかどうかと入力はエージェントが判断するため、既存の業務フローをエージェントから安全に呼び出す手段になる。
- **[AWS Key Management Service now supports ML-KEM for post-quantum key encapsulation](https://aws.amazon.com/about-aws/whats-new/2026/10/kms-ml-kem-post-quantum/)** (2026-10-26) - NIST FIPS 203 のポスト量子暗号標準 ML-KEM に KMS が対応した。耐量子の鍵共有に移行する際の選択肢が増える。
- **[Amazon Bedrock AgentCore CLI version 1.0 is now available](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-bedrock-agentcore-cli-version-1-0-available/)** (2026-10-28) - `@aws/agentcore` 1.0.0 が GA。起動の高速化、コマンド体系の統一、対応する AgentCore リソースの拡充が行われた。
- **[AWS EC2 Auto Scaling now supports Launch Before Terminate at account-level to replace instances](https://aws.amazon.com/about-aws/whats-new/2026/10/ec2-auto-scaling-launch-before-terminate/)** (2026-10-26) - インスタンス置換時に「先に新規起動してから終了する」挙動を、アカウント全体の Auto Scaling グループに既定として設定できるようになった。置換中に容量が落ちる問題を、グループごとの設定なしに避けられる。
- **[Amazon ECS Managed Instances adds cross-instance and Spot consolidation](https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-managed-instances-consolidation/)** (2026-10-28) - インスタンスをまたぐ統合（cross-instance consolidation）と Spot の統合が追加され、ECS Managed Instances のインフラ最適化が進んだ。

## Lobsters

- **[An outsider's perspective on Scion and Mononoke](https://typesanitizer.com/blog/scion.html)** (49pt) - バージョン管理システム（vcs タグ）に関する、外部の視点から書かれた Scion と Mononoke の考察。
- **[Mystery of 60-Second Fluctuations in Power Grids Solved](https://www.fz-juelich.de/en/news/archive/press-release/2026/mystery-of-60-second-fluctuations-in-power-grids-solved)** (68pt) - 電力網で観測されていた 60 秒周期の変動の原因が解明された、というユーリッヒ研究センターのプレスリリース。コメントも 28 件と議論が多い。
- **[Pratt parsing is a black box](https://vinipsmaker.github.io/blog/article/pratt-parsing-is-a-black-box/)** (24pt) - 式パーサの定番手法である Pratt parsing を、ブラックボックスとして捉える視点で論じたコンパイラ・PLT 系の記事。
- **[Non-Determinism and Overcount on Modern Hardware Performance Counter Implementations](https://web.eece.maine.edu/~vweaver/projects/deterministic/deterministic_counters.pdf)** (9pt) - 最近のハードウェアのパフォーマンスカウンタが非決定的であったり、過剰に数えたりする問題を扱った論文。プロファイリング結果を読むときの注意点になる。

※ 他ソースとの重複と掲載済みを除いた新規記事が4件のみだった。

## dev.to

- **[SQLite 3.54 stops rewriting an expression index when the indexed value hasn't changed](https://dev.to/alexgeorgiev17/sqlite-354-stops-rewriting-an-expression-index-when-the-indexed-value-hasnt-changed-56bb)** - SQLite 3.54.1 では、50,000 行の no-op UPDATE が書き込む WAL ページ数が 2,143 から 511 に減り、式インデックスのないテーブルと同じ数になった。ただし、インデックス対象の値が実際に変わる場合は削減効果は消える。
- **[Protecting an MCP server in Go with OAuth 2.1](https://dev.to/thegdsks/protecting-an-mcp-server-in-go-with-oauth-21-1dhh)** - Go で書いた MCP サーバーを OAuth 2.1 で保護する手順。RFC 9728 のメタデータ公開、Bearer トークンの検証、ツールごとのスコープ強制を、コピーして使えるコード付きで解説している。
- **[I hid instructions in my server logs to see which models would follow them](https://dev.to/remdore/i-hid-instructions-in-my-server-logs-to-see-which-models-would-follow-them-1bd2)** - サーバーログに指示文を仕込み、ログを読んで週次レポートを書くモデルがそれに従うかを検証した実験。プロンプトインジェクションの現実的な経路として参考になる。
- **[Zero Trust CI/CD: Keyless Bitbucket Deployment on Google Cloud](https://dev.to/gde/zero-trust-cicd-keyless-bitbucket-deployment-on-google-cloud-1ka1)** - CI/CD で静的なサービスアカウントキーを使う運用をやめ、Bitbucket から Google Cloud へキーレスでデプロイする構成の解説。
- **[Accuracy vs Speed: Gemma 4 E2B Quantization Tradeoffs, BF16 to Q2_K](https://dev.to/gde/accuracy-vs-speed-gemma-4-e2b-quantization-tradeoffs-bf16-to-q2k-aea)** - Gemma 4 E2B を BF16 から Q2_K まで量子化し、同じ 250 問の GSM8K で精度を測った。Q5_K_M 以上はスコアを保ち、Q3_K_M で 38 問落ち、Q2_K では 3 問しか正解できなかった。thinking を有効にすると Q3_K_M で 17 問を取り戻す。

## TechCrunch

- **[North Korean hackers blamed for stealing record $6.3B in Binance breach](https://techcrunch.com/2026/10/30/north-korean-hackers-blamed-for-stealing-record-6-3b-in-binance-breach/)** - 北朝鮮系ハッカーが Binance 従業員のノート PC を侵害し、暗号資産 63 億ドルを盗んだとされる。大規模侵害の起点が端末1台だった点が重い。続報では、Binance は出金を再開し、盗まれた資産の 95% を補填したと伝えられている。Ars Technica も同じ件を別角度で報じている。
- **[DoorDash said it's only received 'several hundred' orders from AI agents](https://techcrunch.com/2026/10/30/doordash-said-its-only-received-several-hundred-orders-from-ai-agents/)** - 外部のエージェントから DoorDash に届いた注文は数百件にとどまる。サードパーティのエージェント開発者との連携には前向きだという。エージェントが API 経由で購買するユースケースの現状を示す数字。Ars Technica も同じ件を報じている。
- **[Apple CEO says the company doesn't 'want to ship AI for AI's sake'](https://techcrunch.com/2026/10/31/apple-ceo-says-the-company-doesnt-want-to-ship-ai-for-ais-sake/)** - Apple の新 CEO が、AI 分野での現在の立ち位置を擁護し、AI を目的化して出荷することはしないと述べた。

※ 他ソースとの重複・掲載済みを除いた新規記事が3件のみだった。

## Ars Technica

- **[Anthropic VS code extension on Cursor backdoored for nearly 12 hours](https://arstechnica.com/security/2026/10/anthropic-vs-code-extension-on-cursor-backdoored-for-nearly-12-hours/)** - Cursor 上で配信されていた Anthropic の VS Code 拡張が、約12時間バックドア化された。攻撃者がどうやって Anthropic の認証済みアカウントに入ったかは未解明。エディタ拡張のサプライチェーンリスクを示す事例。
- **[MCP for agent-to-agent comms may be the riskiest protocol you've never heard of](https://arstechnica.com/security/2026/10/vulnerability-in-agents-from-google-and-others-exposes-structural-flaw-in-mcp/)** - エージェント間通信に MCP を使うと、信頼の欠落により悪意あるプロンプトが別のエージェントへ伝播する構造的な欠陥があるという報道。Google などのエージェントで脆弱性が確認された。
- **[Disgraced eMudhra drops out of TLS business after using cert private key of 4](https://arstechnica.com/security/2026/10/disgraced-emudhra-drops-out-of-tls-business-following-certificate-debacle/)** - 鍵署名の「儀式」の不手際により、任意のサイトの証明書を発行できる状態になった。その結果、eMudhra は TLS 証明書事業から撤退した。認証局の鍵管理の失敗が信頼モデル全体に及ぶ例。
- **[Targeted ads delivered 0-click exploits to install mercenary malware](https://arstechnica.com/security/2026/10/targeted-ads-delivered-0-click-exploits-to-install-mercenary-malware/)** - ターゲティング広告経由で 0-click エクスプロイトが配信され、傭兵型スパイウェアが導入された。広告配信がスパイウェアの届け方になった初の確認例とされている。
- **[Fridge hack costing millions and sparking fires stemmed from poor security](https://arstechnica.com/security/2026/10/fridge-hack-costing-millions-and-sparking-fires-stemmed-from-poor-security/)** - 700 店のスーパーに被害が出た冷蔵庫のハッキング事案。原因は、インターネットに露出した古いデバイスの脆弱な保護だった。

## 注目トピック

今日のテーマはサプライチェーンと「信頼の境界」。Zenn の `actions.lock` 記事（タグ固定の危うさ）、Ars Technica の Cursor 上の拡張機能のバックドア化、eMudhra の鍵管理失敗は、いずれも「いつもの依存先や署名元が突然信頼できなくなる」ケースを扱っている。TechCrunch の Binance 侵害（起点は従業員の端末）とも合わせて、バージョンのロック、署名や鍵の管理、端末の防御を平時から固めておく必要がある。

AI エージェントまわりでは、実装の入口と出口の両方で安全性が論点になっている。入口は、dev.to のログ経由の指示注入実験や Ars Technica の MCP エージェント間通信の構造的欠陥。出口は、Zenn・Qiita で複数出ていた「AI の PR を読まずにマージする」「AI に証明を書かせる」といった検証の自動化。AWS 側も Step Functions をエージェントのツール化し、AgentCore CLI を 1.0 にするなど基盤整備を進めている。一方で DoorDash の数字（エージェント経由の注文は数百件）は、実需の立ち上がりがまだ限定的であることを示している。
