---
title: "Tech Feed ダイジェスト（2026年11月10日）"
date: "2026-11-09T19:43"
category: "summary"
summary: "Nitro Sandboxes、EKS の DRA 対応、Anthropic 新モデル、PostgreSQL のロック待ち、車の解錠脆弱性など8ソースの注目記事"
tags: ["aws", "ai", "security", "postgresql", "devops", "llm"]
---

## はてなブックマーク (テクノロジー)
- **[ソフトウェア産業が消滅する日──小さなローカルAIが暴く「プログラムを売る」という商売の終焉](https://wirelesswire.jp/2026/11/94903/)** ([249users](https://b.hatena.ne.jp/entry/s/wirelesswire.jp/2026/11/94903/)) - 小型ローカル AI の普及でソフトウェアを作って売るビジネスモデルが変わるという論考。開発者の収益構造への影響を考える材料になる。
- **[Macにはユーザーの人間関係をグラフ化する常駐プログラムが搭載されている](https://gigazine.net/news/20261109-macos-personal-knowledge-graph/)** ([133users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261109-macos-personal-knowledge-graph/)) - macOS の常駐プロセスがユーザーの人間関係を知識グラフとして構築している仕組みの解説。OS 内蔵のパーソナライズ基盤とプライバシーの関係が論点。
- **[Devinはソフトウェアファクトリーのフレームワークになった](https://tech.timee.co.jp/entry/2026/11/09/120755)** ([109users](https://b.hatena.ne.jp/entry/s/tech.timee.co.jp/entry/2026/11/09/120755)) - タイミーの開発チームが、AI エージェント Devin を開発プロセス全体を回す枠組みとして使うようになった経緯をまとめた記事。
- **[GitHub - meta/astryx](https://github.com/meta/astryx)** ([24users](https://b.hatena.ne.jp/entry/s/github.com/meta/astryx)) - Meta が公開した、完全にカスタマイズ可能でエージェント対応をうたうオープンソースのデザインシステム。
- **[Release v1.65.0 · microsoft/playwright](https://github.com/microsoft/playwright/releases/tag/v1.65.0)** ([10users](https://b.hatena.ne.jp/entry/s/github.com/microsoft/playwright/releases/tag/v1.65.0)) - E2E テストフレームワーク Playwright の v1.65.0 リリースノート。

## Zenn
- **[SELECTしかしていないのに、PostgreSQLのマイグレーションがロック待ちで失敗した話](https://zenn.dev/naokisuzuki27/articles/cb1a5ac0e23763)** - 読み取りだけのクエリが残っていても DDL のロック取得が待たされ、マイグレーションが失敗した事例。長いトランザクションと ACCESS EXCLUSIVE ロックの関係は運用で踏みやすい罠。
- **[ShopifyのReact Native→ネイティブ移行を支える「Reflex」をSwiftとKotlinで試す](https://zenn.dev/tellernovel_inc/articles/reflex-native-swift-kotlin)** - Shopify が React Native からネイティブへ移行する際に使う Reflex を、Swift / Kotlin で実際に動かした検証記事。
- **[静的型付けはAIのバグを減らすか？ TypeScriptとJavaScriptで同じGit互換CLIを3本ずつ書かせて比べた](https://zenn.dev/torudev/articles/dd45de860fc7c3)** - 同一仕様の Git 互換 CLI を AI に TS / JS で3本ずつ書かせ、型の有無によるバグ数の差を比較した実験。
- **[LLM アプリケーションのプロンプトをどこで管理するか](https://zenn.dev/painter/articles/663816c3195cec)** - コード内への埋め込みや外部管理など、プロンプトの置き場所の設計判断を整理した記事。

## Qiita
- **[部品の脆弱性は、どこまで広がるのか？ 主要 64 製品と 8 部品の依存関係をたどったら、OpenSSL は 20、SQLite は 16、PHP は 11 だった](https://qiita.com/songchong/items/41a88eb41845af761b19)** - 主要製品の依存関係を調べ、共通部品の脆弱性が影響する範囲を定量化した調査（冒頭抜粋から読み取れる範囲）。
- **[AI「テスト通りました」← これ､本当？ Stryker でテストの穴を塞いだ話](https://qiita.com/Dingu-suke/items/b5318ef2040a9f59224a)** - AI が書いたコードのテストが通っても、ミューテーションテストツール Stryker で検査するとテストの穴が見つかるという話。
- **[Unity 6.6でデフォルトになったmimallocとは？ 仕組みを理解してON/OFFを計測してみた](https://qiita.com/matsu_r11/items/0e259e2074e7266119bb)** - Unity 6.6 で標準になったメモリアロケータ mimalloc の仕組みと、有効／無効での計測。
- **[Vitestでモックをテストケースごとに差し替えた値が残る](https://qiita.com/J-T_ky2g/items/fc1d307ea464e734af9e)** - Vitest でケースごとに差し替えたモックの値が次のテストへ残る問題の原因と対処。

## AWS 新着
- **[Introducing AWS Nitro Sandboxes on Amazon EKS, ECS and EC2 for hardware isolated pods, tasks and VMs](https://aws.amazon.com/about-aws/whats-new/2026/11/nitro-sandboxes-eks-ecs-ec2/)** (2026-11-09) - Nitro Hypervisor 管理の軽量 VM を EKS Pod / ECS タスク / EC2 に使え、ハードウェアレベルで分離できる。信頼できないコードやエージェント実行の隔離に有効。
- **[Amazon EKS Auto Mode and Karpenter now support Dynamic Resource Allocation](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-auto-mode-karpenter-dra/)** (2026-11-09) - NVIDIA GPU と EFA ネットワークデバイスについて Kubernetes の DRA を EKS Auto Mode / Karpenter で扱えるようになった。
- **[Amazon Athena introduces system tables for observability, auditing, and usage analytics](https://aws.amazon.com/about-aws/whats-new/2026/11/athena-system-tables/)** (2026-11-09) - 利用データが自動で記録され、SQL でオブザーバビリティ、利用状況分析、監査に使える。
- **[Amazon MWAA Serverless now supports custom and provider package operators](https://aws.amazon.com/about-aws/whats-new/2026/11/mwaa-serverless-custom-operators/)** (2026-11-06) - MWAA Serverless で HTTP / Snowflake / dbt などの provider パッケージと自作オペレーターが使える。
- **[Amazon Q Developer in console is now the AWS assistant](https://aws.amazon.com/about-aws/whats-new/2026/11/q-developer-renamed-aws-assistant/)** (2026-11-05) - マネジメントコンソール内の Amazon Q Developer が「AWS assistant」に名称変更された。

## Lobsters
- **[How Much Energy Does Building Distro Packages Use](https://www.wezm.net/v2/posts/2026/distro-energy-use/)** (76pt) - ディストリビューションのパッケージビルドに必要な消費エネルギーを計測した記事。
- **[unlocking any car from X brand in most of the world](https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/)** (72pt) - ある自動車ブランドの車を世界の大半で解錠できる脆弱性のリバースエンジニアリング報告。
- **[Horrible public key tricks](https://maurycyz.com/projects/badcert/)** (54pt) - 公開鍵／証明書まわりの変則的なテクニックを紹介する暗号の読み物。
- **[Herb Sutter: When a language's creator and its owners strongly disagree: C++26 post-DIS, historical experience, and paths forward](https://isocpp.org/files/papers/P4454R0.pdf)** (48pt) - C++26 の DIS 後の状況について、Sutter 氏が過去の経験を踏まえて進め方を論じた ISO C++ 文書。
- **[What's new in Node.js 27](https://nodejsdesignpatterns.com/blog/whats-new-in-nodejs-27/)** (11pt) - Node.js 27 の新機能の概説。

## dev.to
- **[Traefik 3.8's tap middleware triples request latency even with an instant local receiver](https://dev.to/alexgeorgiev17/traefik-38s-tap-middleware-triples-request-latency-even-with-an-instant-local-receiver-421a)** - Traefik 3.8 の tap ミドルウェアを有効にすると、受信側が即応答でもリクエストレイテンシが約3倍になるという計測。
- **[PHP Dies After Every Request. How the Zend Engine Actually Runs Your Code.](https://dev.to/smtahosin/php-dies-after-every-request-how-the-zend-engine-actually-runs-your-code-2843)** - PHP のリクエスト単位のライフサイクルと Zend Engine の実行モデルを図解する解説。
- **[Designing Fault-Tolerant API Through Idempotency](https://dev.to/chocoscoding/designing-fault-tolerant-api-through-idempotency-1gnn)** - 「いいね」がタイムアウトした場合の再送を例に、冪等性による API の耐障害設計を説明する。
- **[Prompt injection isn't a prompt problem. It's an authorization problem.](https://dev.to/cyclopt_dimitrisk/prompt-injection-isnt-a-prompt-problem-its-an-authorization-problem-59j6)** - プロンプトインジェクションを文面の問題でなく権限制御の問題として捉え、設計で防ぐべきだと主張する。
- **[What unshare -n leaves behind: building a boundary for an AI recon agent](https://dev.to/gnomeman4201/what-unshare-n-leaves-behind-building-a-boundary-for-an-ai-recon-agent-75b)** - AI エージェント用サンドボックスで `unshare -n` によるネットワーク分離が実際にはどこまで効くかを検証した記事。

## TechCrunch
- **[Anthropic releases new Mythos and Fable models amid RSI concerns](https://techcrunch.com/2026/11/09/anthropic-releases-new-mythos-and-fable-models-amid-rsi-concerns/)** - Anthropic が新モデル Mythos と Fable をリリース。コーディングや推論が向上したとされ、再帰的自己改善（RSI）への懸念も併せて語られている。
- **[Meta releases Muse Ember, a new lightweight model for agent execution](https://techcrunch.com/2026/11/09/meta-releases-muse-ember-a-new-lightweight-model-for-agent-execution/)** - Meta がエージェント実行向けの軽量モデル Muse Ember を公開。入力は100万トークンあたり10セントと安価。
- **[Automattic debuts a platform to deploy vibe-coding apps amid a changing internet](https://techcrunch.com/2026/11/09/automattic-debuts-a-platform-to-deploy-vibe-coding-apps-amid-a-changing-internet/)** - Automattic が、バイブコーディングで作ったアプリをデプロイするプラットフォームを発表。
- **[Waymo robotaxis kept illegally passing school buses after software fix, feds say](https://techcrunch.com/2026/11/09/waymo-robotaxis-kept-illegally-passing-school-buses-after-software-fix-feds-say/)** - ソフトウェア更新後も Waymo の車両がスクールバスを違法に追い越し続けたと米当局が指摘。修正の検証の難しさを示す。
- **[Anthropic joins AI's natural gas frenzy, buys $3.4B worth of turbines](https://techcrunch.com/2026/11/09/anthropic-joins-ais-natural-gas-frenzy-buys-3-4b-worth-of-turbines/)** - Anthropic が34億ドル分のガスタービンを購入。AI の電力確保が課題になっている。

## Ars Technica
- **[Microsoft fixes a Windows 11 annoyance as PC revenue declines](https://arstechnica.com/gadgets/2026/10/windows-11-gets-right-click-menu-improvements-as-pc-revenue-slides/)** - Windows 11 の更新で右クリックメニューが改善され、起動しない PC 向けのクラウド回復オプションも追加された。
- **[Reddit is moving to "a logged-in-only experience," CEO says](https://arstechnica.com/gadgets/2026/10/reddit-will-require-you-to-log-in-eventually-ceo-confirms/)** - Reddit が将来的にログイン必須へ移行する方針。検索流入の減少が背景にあり、スクレイピングやクローラーへの影響が見込まれる。
- **[Google admits AI search makes less money, but it's fixing that with more ads](https://arstechnica.com/gadgets/2026/10/google-admits-ai-search-makes-less-money-but-its-fixing-that-with-more-ads/)** - Google が AI 検索は従来より収益性が低いと認め、広告枠を増やして補う方針。
- **[Ships loiter near subsea cables amid Iran's warnings to Trump](https://arstechnica.com/gadgets/2026/11/ships-loiter-near-subsea-cables-amid-irans-warnings-to-trump/)** - イランが海底ケーブル攻撃を示唆する中、ケーブル付近に船舶が滞留。通信インフラの物理的な脆弱性が改めて注目される。

## 注目トピック
AI エージェントの実行基盤とその隔離が複数のソースで目立った。AWS は Nitro Sandboxes で Pod / タスク / VM をハードウェア分離し、dev.to ではプロンプトインジェクションを認可の問題として扱う議論や `unshare -n` の検証が出ている。Meta の Muse Ember のような安価なエージェント向けモデルも登場しており、実行環境の分離と権限設計が実装上の主要論点になりつつある。

AI が書いたコードの品質検証も話題で、Stryker によるミューテーションテストや型の有無によるバグ数の比較実験が取り上げられた。一方、PostgreSQL のロック待ち、Traefik のレイテンシ、冪等性設計といった基本的な運用・設計の話題も引き続き読まれている。
