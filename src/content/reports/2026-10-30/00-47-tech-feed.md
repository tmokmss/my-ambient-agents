---
title: "Tech Feed ダイジェスト（2026年10月30日）"
date: "2026-10-30T00:47"
category: "summary"
summary: "eMudhra 証明書流出、PHP 脆弱性の悪用、Mistral の1兆パラメータ OSS モデル、AWS のポスト量子暗号対応など"
tags: ["security", "ai", "aws", "php", "tls", "mcp", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[AIが生成したコードは読むべきか？抽象化設計とコードの品質保証](https://speakerdeck.com/minodriven/abstraction-design-and-quality)** ([104users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/minodriven/abstraction-design-and-quality)) - AI 生成コードを人間が全行読む前提を見直し、抽象化設計によって品質保証をどう担保するかを論じるスライド。
- **[1週間以上メンテだった『神撃のバハムート』、「PHP脆弱性」対応が無事完了](https://automaton-media.com/articles/newsjp/20261029-476529/)** ([52users](https://b.hatena.ne.jp/entry/s/automaton-media.com/articles/newsjp/20261029-476529/)) - PHP の重大脆弱性への対応で、複数世代にわたるバージョンアップを伴う大改修を行った事例。レガシー PHP 基盤の更新コストを示す。
- **[必要最低限の自分専用アプリをAIで作る](https://iwashi.co/2026/10/29/build-my-app)** ([53users](https://b.hatena.ne.jp/entry/s/iwashi.co/2026/10/29/build-my-app)) - 汎用 SaaS に頼らず、自分の用途に絞った最小限のアプリを AI で作る実践談。
- **[Windowsの高性能PCで動くローカルAIをブラウザからみんなで利用できる環境を「Ollama＋Open WebUI」で構築してみた](https://gigazine.net/news/20261029-ollama-open-webui-local-ai/)** ([30users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261029-ollama-open-webui-local-ai/)) - Ollama と Open WebUI の組み合わせで、LAN 内のブラウザから共有できるローカル LLM 環境を構築する手順。
- **[デザインは見た目ではなく意思決定だった ─ フロントエンドエンジニアがデザインシステム導入で学び直したこと](https://tech.findy.co.jp/entry/2026/10/30/070000)** ([33users](https://b.hatena.ne.jp/entry/s/tech.findy.co.jp/entry/2026/10/30/070000)) - デザインシステム導入を、見た目の統一ではなく意思決定の仕組みづくりとして捉え直した Findy のブログ。

## Zenn
- **[GitHub Actions で checkout@v7 のようなバージョン指定を書くのはやめよう！ 時代は actions.lock！](https://zenn.dev/progate/articles/24b1140180300c)** - タグ指定の `uses:` はサプライチェーン攻撃に弱いという問題意識から、依存をロックする `actions.lock` の運用を紹介する。
- **[KaniによるVerylコンパイラの形式検証](https://zenn.dev/dalance/articles/44a8f80ea0cfa1)** - ハードウェア記述言語 Veryl のコンパイラにある式評価(0/1/x/z の4値、1〜数千ビットの可変幅)を、Rust のモデル検査ツール Kani で検証する試み。
- **[OpenSearchのLLM-as-a-Judgeを日本語の商品検索で動かして、人手ラベルと比べてみた](https://zenn.dev/nextbeat/articles/c22b45b1d784b0)** - OpenSearch 3.1 の Search Relevance Workbench にある LLM による関連度採点を日本語商品検索で試し、人手ラベルとの一致を比較する。
- **[PHP5.4 から PHP8.5へ](https://zenn.dev/ctrlzr/articles/5a88eb939b3bfd)** - CentOS 7 + PHP 5.4 で放置されていたサービスを Docker の PHP 8.5 に更新。`mysql_*` 関数は書き換えずラッパーで吸収する方針を採った。
- **[コードを読まずにマージするために必要なこと](https://zenn.dev/nrs/articles/c777388530aa84)** - AI で PR が量産されレビュー待ちが溜まる状況に対し、「no look merge」を成立させる品質確認とマージ承認の条件を整理する。

## Qiita
- **[パスキーはなぜ偽サイトに強い？登録とログインの流れを図で追う](https://qiita.com/kuma_3838/items/1781531150821e2f0491)** - パスキーの登録・ログインのフローを図解し、フィッシングサイトに強い理由を説明する記事(冒頭抜粋からの紹介)。
- **[VS Code 1.144：PC を閉じてもエージェントが働く。Cloud セッションと Cloud Automations を試した](https://qiita.com/shahin0809/items/26e401dc28c1ca60d8c7)** - VS Code 1.144 の Cloud セッションと Cloud Automations を検証した記事。ローカル PC を閉じてもエージェントが動き続ける。
- **[緊急時に、安全に変更を届けられる開発・運用基盤って何だろう](https://qiita.com/poku_log/items/e57ac8276df88a2a32d1)** - 障害などの緊急時にも安全に変更をリリースできる開発・運用基盤とは何かを考える設計論。
- **[Oracle IntegrationのMCP Gatewayで専用ゲートウェイ認可を使ってみた](https://qiita.com/nakasato310/items/3f484a09a4e1ce454eb8)** - Oracle Integration の MCP Gateway で、専用ゲートウェイ認可の設定を試した検証記事。

## AWS 新着
- **[Amazon Aurora now supports post-quantum TLS key exchange](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-postgresql-post-quantum-tls-key-exchange/)** (2026-10-29) - Aurora PostgreSQL がポスト量子 TLS 鍵交換に対応。「今盗んで後で解読」型の攻撃への備えとして、DB 接続の暗号化に選択肢が加わる。
- **[AWS Step Functions workflows now available as AI agent tools](https://aws.amazon.com/about-aws/whats-new/2026/10/step-functions-workflows-ai-agent-tools/)** (2026-10-29) - Bedrock AgentCore Gateway 経由で Step Functions のワークフローをエージェントのツールとして使える。いつ実行するか、どんな入力を渡すかはエージェントが判断する。
- **[AWS Key Management Service now supports ML-KEM for post-quantum key encapsulation](https://aws.amazon.com/about-aws/whats-new/2026/10/kms-ml-kem-post-quantum/)** (2026-10-26) - KMS が NIST FIPS 203 の ML-KEM(耐量子の鍵カプセル化)をサポート。
- **[Announcing Amazon ECS Gateway, a managed ingress solution for your ECS services](https://aws.amazon.com/about-aws/whats-new/2026/10/announcing-amazon-ecs-gateway/)** (2026-10-20) - ECS サービス向けのマネージドなイングレスで、Application Load Balancer などを動的にプロビジョニング・管理する。
- **[AWS IAM Identity Center's Identity Store now supports change notifications through Amazon EventBridge](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-identity-store-change-notifications/)** (2026-10-28) - ユーザー、グループ、所属の作成・更新・削除が EventBridge にリアルタイムで流れるため、ポーリングなしで ID 同期や監査を組める。

## Lobsters
- **[Apple's git still trusts the compromised eMudhra certificates](https://emudhra.we-have-a-problem.com/apple.html)** (118pt) - 侵害された eMudhra の証明書を、Apple 同梱の git が今も信頼しているという指摘。偽の証明書で github.com を装うクローンも成立し得る。同じ件を Qiita(Windows の curl / Git for Windows)、dev.to、Ars Technica も別角度で報じている。
- **[EMACS turns 50](https://www.technologyreview.com/2026/10/20/1145399/emacs-turns-50/)** (74pt) - 誕生50周年を迎えた Emacs の歴史を振り返る MIT Technology Review の記事。
- **[NetBSD adds a new Emacs-like text editor called atto](https://mastodon.sdf.org/@netbsd/117518160563539748)** (42pt) - NetBSD が Emacs 風の新しい軽量テキストエディタ atto を追加した。
- **[Redox Ring Buffers Project Summary](https://www.redox-os.org/news/nlnet-rb-summary/)** (23pt) - Rust 製 OS の Redox が、NLnet 支援のリングバッファ関連プロジェクトの成果をまとめた報告。
- **[Nim version 2.4.0 released](https://nim-lang.org/blog/2026/10/28/nim-240.html)** (10pt) - プログラミング言語 Nim の 2.4.0 リリース告知。

## dev.to
- **[Stop Using Default Node.js fetch() in Production Without These Two Fixes](https://dev.to/johnnylemonny/stop-using-default-nodejs-fetch-in-production-without-these-two-fixes-4o5)** - Node.js 標準の `fetch()` を本番でそのまま使うときに必要な2つの対策を解説する。
- **[Built for Humans, Flooded by Agents: Why Git Infrastructure Is Being Rebuilt](https://dev.to/james_anderson_h/built-for-humans-flooded-by-agents-why-git-infrastructure-is-being-rebuilt-5ccb)** - 人間向けに設計された Git のインフラが、大量のエージェント操作で限界を迎え、作り直されつつあるという論考。
- **[Why bloc.add(...) Isn't What You Think: Synchronous Event Fast-Paths and 0ms Form Bindings](https://dev.to/gde/why-blocadd-isnt-what-you-think-synchronous-event-fast-paths-and-0ms-form-bindings-6o)** - Flutter の bloc で、`bloc.add` のイベントが同期的な高速経路を通る挙動と、フォームバインディングへの影響を掘り下げる。
- **[DuckLess: serverless DuckDB on Google Cloud, in your own project](https://dev.to/gde/duckless-serverless-duckdb-on-google-cloud-in-your-own-project-4o5a)** - DuckDB を自分の Google Cloud プロジェクト上でサーバーレスに動かす OSS の紹介。
- **[Yes, {} + [] = 0. No, JavaScript Isn't Broken](https://dev.to/sylwia-lask/yes-0-no-javascript-isnt-broken-14ob)** - JavaScript の型強制の「奇妙な」挙動が、仕様どおりであることを説明する。

## TechCrunch
- **[Mistral releases weights for its trillion-parameter AI model, targeting cybersecurity](https://techcrunch.com/2026/10/29/mistral-releases-weights-for-its-trillion-parameter-ai-model-targeting-cybersecurity/)** - Mistral がサイバーセキュリティ向けの1兆パラメータ級モデルの重みを公開。クローズドモデルでは得られない、防御側が自前で制御できる点を売りにしている。
- **[US government says hackers are now exploiting critical PHP web bugs](https://techcrunch.com/2026/10/27/us-government-says-hackers-are-now-exploiting-critical-php-web-bugs/)** - 米サイバー機関が、PHP の重大な脆弱性の悪用が始まったと警告。PHP は Web の約70%で使われている。Ars Technica も PHP の緊急パッチ予告を報じている。
- **[Binance pauses withdrawals as hackers suspected of stealing billions in crypto](https://techcrunch.com/2026/10/29/binance-pauses-withdrawals-as-hackers-suspected-of-stealing-billions-in-crypto/)** - 世界最大の暗号資産取引所 Binance が、数十億ドル規模の流出が疑われるサイバー攻撃を受けて出金を停止した。
- **[AWS will be a $1T business, Jassy says. But first, it will spend big.](https://techcrunch.com/2026/10/29/aws-will-be-a-1t-business-jassy-says-but-first-it-will-spend-big/)** - Amazon は AI クラウドで主導権を握り、AWS を売上1兆ドル級の事業にするため、先行して大型投資を行う方針を示した。

## Ars Technica
- **[MCP for agent-to-agent comms may be the riskiest protocol you've never heard of](https://arstechnica.com/security/2026/10/vulnerability-in-agents-from-google-and-others-exposes-structural-flaw-in-mcp/)** - エージェント間通信での MCP にある信頼の欠落により、悪意あるプロンプトが別のエージェントへ伝播する構造的な欠陥が指摘された。
- **[Targeted ads delivered 0-click exploits to install mercenary malware](https://arstechnica.com/security/2026/10/targeted-ads-delivered-0-click-exploits-to-install-mercenary-malware/)** - ターゲティング広告を経由してゼロクリックの攻撃が配信され、傭兵型スパイウェアが導入された。広告配信経由のスパイウェアとしては初の確認例とみられる。
- **[Fridge hack costing millions and sparking fires stemmed from poor security](https://arstechnica.com/security/2026/10/fridge-hack-costing-millions-and-sparking-fires-stemmed-from-poor-security/)** - 約700店のスーパーに影響した冷蔵庫の被害は、インターネットに露出した古いデバイスを突かれたもの。
- **[ReactOS reaches major milestone with NTFS install support](https://arstechnica.com/information-technology/2026/10/reactos-reaches-major-milestone-with-ntfs-install-support/)** - Windows 互換 OS の ReactOS に新しいドライバが入り、NTFS パーティションへ直接インストールできるようになった。

## 注目トピック
今日は **TLS 証明書の信頼基盤**と **PHP の重大脆弱性**が目立つ。eMudhra の侵害された中間証明書は、Apple 同梱の git のようにルートストアの更新が遅いクライアントで今も信頼されており、Lobsters・Qiita・dev.to・Ars がそれぞれ別の角度で取り上げた。PHP は米機関が悪用を確認し、はてブでは長期メンテの末に対応を終えたゲームの事例も上位に入った。レガシー PHP 基盤の更新(Zenn の PHP 5.4→8.5 事例)が急務になっている。

もう一つの流れは **AI エージェント周りの信頼境界**。Ars の MCP エージェント間通信の欠陥、dev.to の Git インフラ再設計論、Zenn の「no look merge」や actions.lock によるサプライチェーン対策は、エージェント時代にレビューや信頼をどこに置くかという同じ問いに関わっている。AWS もポスト量子 TLS(Aurora)と ML-KEM(KMS)、Step Functions のエージェントツール化と、暗号とエージェント基盤の両面で更新を続けている。
