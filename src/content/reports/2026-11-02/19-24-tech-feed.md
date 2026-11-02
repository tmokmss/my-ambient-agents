---
title: "Tech Feed ダイジェスト（2026年11月3日）"
date: "2026-11-02T19:24"
category: "summary"
summary: "GMO系SSOの公開領域漏えい、Aurora PQ-TLS、PHP緊急パッチ予告、Postgres 19遅延とAI、OpenAIのChat/Work統合など"
tags: ["security", "aws", "ai", "database", "postquantum", "php", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[ロゴ画像用の公開領域に顧客ファイルも保存　GMO系シングルサインオン、4.5万人分漏えい](https://www.itmedia.co.jp/news/article/2611/02/2000002780/)** ([233users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2611/02/2000002780/)) - ロゴ画像用に公開設定された領域へ顧客ファイルまで保存されていたことが原因とされる漏えい。ストレージの公開範囲と用途分離という設計・運用の基本を問い直す事例。会見報道が多数並ぶ中、技術的な原因に触れる記事を代表として選んだ。
- **[サービスレベル設計として捉える非機能の考え方](https://future-architect.github.io/articles/20261102a/)** ([119users](https://b.hatena.ne.jp/entry/s/future-architect.github.io/articles/20261102a/)) - フューチャー技術ブログによる、非機能要件をサービスレベル設計として捉え直す設計論。
- **[Cloudflare、耐量子時代のウェブに向けたパブリック認証局の設立を発表](https://www.cloudflare.com/ja-jp/press/press-releases/2026/cloudflare-announces-public-certificate-authority-for-the-post-quantum-web/)** ([15users](https://b.hatena.ne.jp/entry/s/www.cloudflare.com/ja-jp/press/press-releases/2026/cloudflare-announces-public-certificate-authority-for-the-post-quantum-web/)) - Cloudflare が耐量子暗号を見据えたパブリック認証局を設立すると発表。AWS 側でも PQ 対応が進んでおり、Web PKI の移行が実装段階に入りつつある。

## Zenn
- **[Snowflake: Optima Clustering による 1KB クラスタリングキーでの日本語フィルタの改善](https://zenn.dev/snowflakejp/articles/d907c02698d748)** - 2026年10月頃に全アカウントで有効化された Optima Clustering を、日本語フィルタの観点から掘り下げる。Snowflake の Principal Performance Engineer による個人的見解の記事。
- **[Agent DX 〜 AI時代にフレームワークHonoは必要か](https://zenn.dev/yusukebe/articles/3d3dc6605ca1b1)** - Hono が「Agent DX」プロジェクトを立ち上げ、AI を利用者とみなした開発者体験を計測した内容。フレームワークの要否を印象論ではなく測定で議論する試み。
- **[日本の全法令を git の履歴にしてみた](https://zenn.dev/koheiwada/articles/houritsu-japanese-laws-as-git)** - 法改正が「第三条中『A』を『B』に改める」形式の改め文で行われる点に着目し、法令を git 履歴として表現する試み。はてブでも話題（45users）。

## Qiita
- **[Wi-Fi・USB・ペアリングなし、画面とカメラだけでファイルを暗号受け渡しする「Beamlet」の仕組みと仕様](https://qiita.com/simota/items/13e38d94e2d2d940467a)** - 2台の端末の画面表示とカメラ撮影だけでファイルを暗号化して受け渡す PWA の仕様解説（冒頭抜粋より）。
- **[EC2が起動できない！？原因は「AZ」だった話](https://qiita.com/AyaKunisawa/items/5af0d4f3c61e7dc4d27d)** - Terraform で x8i.xlarge を ap-northeast-1a に作成すると apply が失敗した事例。インスタンスタイプと AZ の組み合わせ制約というトラブルシューティング記事（冒頭抜粋より）。
- **[Home Assistant で体組成計 ESF-551 が切れ続けた原因は計量法だった](https://qiita.com/program3152019/items/9c5ee13acdc871394bc7)** - BLE 体組成計の測定値が届かない原因を Claude Code に追わせたところ、計量法 9 条に行き着いたという調査記録。
- **[Amazon Bedrock ガードレールでマイナンバーをどこまで検出できるか試してみた](https://qiita.com/takeda_h/items/1819f00de8f2b93034c0)** - 自治体のガバメントクラウド環境を想定し、Bedrock ガードレールの個人情報検出範囲を検証する記事（冒頭抜粋より）。
- **[新しいRAG「Decision RAG」は速い！安い！上手い！🍜](https://qiita.com/kikuziro/items/cc82e6e4e4c215eac99f)** - 「はい」の確からしさだけを返す判断特化型モデルを検索に使う Decision RAG 論文の解説（冒頭抜粋より）。

## AWS 新着
- **[Amazon Aurora now supports post-quantum TLS key exchange](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-postgresql-post-quantum-tls-key-exchange/)** (2026-10-29) - Aurora PostgreSQL 互換エディションが耐量子 TLS 鍵交換に対応。クライアント接続の経路暗号化に影響する。
- **[Amazon RDS now supports per snapshot billing](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-rds-per-snapshot-billing/)** (2026-11-02) - RDS スナップショットがスナップショット単位で課金されるようになる課金体系の変更。
- **[AWS IAM Identity Center's Identity Store now supports change notifications through Amazon EventBridge](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-identity-store-change-notifications/)** (2026-10-28) - ユーザー・グループ・メンバーシップの変更がリアルタイムで EventBridge に配信される。ポーリング不要で ID 同期や監査を組める。
- **[AWS Lambda supports Seekable OCI (SOCI) lazy loading for Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-seekable-oci-soci/)** (2026-10-28) - OCI コンテナイメージ形式の Lambda 関数で SOCI の遅延ロードに対応し、大きなイメージの起動改善が期待できる。
- **[AWS Glue Data Catalog now supports OAuth for Apache Iceberg REST Catalog APIs](https://aws.amazon.com/about-aws/whats-new/2026/10/glue-catalog-oauth-iceberg-rest/)** (2026-10-26) - Iceberg REST Catalog API で OAuth 2.0 ベアラートークン認証が使え、外部エンジンからの接続認証が標準的な形になる。

## Lobsters
- **[Postgres 19 is late, and it's AI's fault](http://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html)** (40pt) - PostgreSQL コミッタによる、Postgres 19 の遅れと AI の関係を論じる記事。OSS のレビュー負荷という論点を含む。
- **[Work on GEFS (the Good Enough File System) for OpenBSD progresses](https://www.undeadly.org/cgi?action=article;sid=20261101115637)** (80pt) - OpenBSD 向け新ファイルシステム GEFS の開発進捗報告。
- **[Jailbreaking my car's navigation system just so I can change the time](https://blog.nns.ee/2026/11/02/renault-hack/)** (27pt) - 車載ナビをリバースエンジニアリングして脱獄する記事。組み込み Linux 機器の解析事例。
- **[Securing Internet-Critical Software: How We Could Have Backdoored Bash](https://www.hacktron.ai/blog/hacking-gnu-savannah)** (4pt) - GNU Savannah の脆弱性を突けば Bash にバックドアを仕込めた可能性を扱うセキュリティ記事。低スコアだがサプライチェーンの観点で注目。

## dev.to
- **[Does AbortSignal Cancel a Node.js Database Query? 4 Drivers Tested](https://dev.to/shubhradev/does-abortsignal-cancel-a-nodejs-database-query-4-drivers-tested-al0)** - Node.js の DB ドライバで AbortSignal がクエリを本当に中断するかを検証。クライアントが切断しても DB 側で処理が続くケースの確認に役立つ。
- **[Codex Was Torching Your SSD and Nobody Noticed for Months](https://dev.to/varshithvhegde/codex-was-torching-your-ssd-and-nobody-noticed-for-months-4c5h)** - Codex のログファイルが見た目は正常でも SSD に大量の書き込みを発生させていたという話。
- **[Standard bf16 Rounding Discards 99% of Your RL Policy Updates](https://dev.to/reidmarlow/standard-bf16-rounding-discards-99-of-your-rl-policy-updates-2pf5)** - 強化学習の後学習で、bf16 の標準的な丸めが方策更新の大半を打ち消すという数値精度の指摘。
- **[Redis 8.12 RC2's SEXPIRE command cuts a set membership check from two round trips to one](https://dev.to/alexgeorgiev17/redis-812-rc2s-sexpire-command-cuts-a-set-membership-check-from-two-round-trips-to-one-2mi4)** - Redis 8.12 RC2 の SEXPIRE により、集合メンバーシップ確認が 2 往復から 1 往復になる。
- **[DuckLess: serverless DuckDB on Google Cloud, in your own project](https://dev.to/gde/duckless-serverless-duckdb-on-google-cloud-in-your-own-project-4o5a)** - 自分の Google Cloud プロジェクト内でサーバーレス DuckDB を動かす構成の紹介。

## TechCrunch
- **[OpenAI is finally merging ChatGPT's Chat and Work tabs](https://techcrunch.com/2026/11/02/openai-is-finally-merging-chatgpts-chat-and-work-tabs/)** - ChatGPT の Chat と Work タブが統合され、ChatGPT と Codex が同一の利用枠から消費する形になる。利用上限の見積もりに影響する。
- **[Elon Musk throttles Grok Bot limits due to 'unsustainably high' costs](https://techcrunch.com/2026/11/02/elon-musk-throttles-grok-bot-limits-due-to-unsustainably-high-costs/)** - Grok Bot の利用上限をコストが「持続不可能」として絞った。AI 製品の推論コストが提供条件を左右する例。
- **[In one of the largest deals in tech history, Marvell buys Lumentum for $115B](https://techcrunch.com/2026/11/02/in-one-of-the-largest-deals-in-tech-history-marvell-buys-lumentum-for-115b/)** - Marvell による Lumentum の約 1,150 億ドル買収。AI データセンター向け半導体・光部品の再編として注目（概要は規模の報道が中心）。

## Ars Technica
- **[PHP warns it plans to release 2 emergency patches imminently](https://arstechnica.com/security/2026/10/php-maintainers-tell-web-devs-to-prepare-themselves-for-critical-security-patches/)** - PHP のメンテナが緊急パッチ 2 件の公開を予告。未確認ながら「PHP2Shell」と呼ばれるリモートコード実行の報告があり、パッチ適用準備が必要。
- **[Claude's new rules against game cloning won't stop the AI copying boom](https://arstechnica.com/ai/2026/11/claudes-new-rules-against-game-cloning-wont-stop-the-ai-copying-boom/)** - Claude のゲーム模倣対策の新ルールを扱うが、模倣の波は一社のモデルでは止められないと指摘する。
- **[Microsoft fixes a Windows 11 annoyance as PC revenue declines](https://arstechnica.com/gadgets/2026/10/windows-11-gets-right-click-menu-improvements-as-pc-revenue-slides/)** - Windows 11 の右クリックメニュー改善と、起動しない PC 向けのクラウド復旧オプションが追加された更新。
- **[This $48 e-paper display can be whatever you want it to be](https://arstechnica.com/gadgets/2026/11/this-48-e-paper-display-can-be-whatever-you-want-it-to-be/)** - 2 つの公式エコシステム、または自前サーバーで動かせる DIY の電子ペーパー表示器。

## 注目トピック
今回は TLS・暗号まわりの話題が複数のソースにまたがった。Cloudflare のポスト量子対応パブリック CA、Aurora の PQ-TLS 鍵交換対応は、暗号移行が個別のサービス機能として提供され始めたことを示す。一方で GMO 系 SSO の漏えいは、公開領域に顧客ファイルが同居していたという基本的な設計・運用の問題で、暗号の先進性とは別に足元の権限設計が重要であることを示している。PHP の緊急パッチ予告も含め、パッチ適用体制の確認が求められる週になりそうだ。

AI まわりでは、OpenAI の利用枠統合や Grok の利用制限など、推論コストが提供形態を左右する動きが目立つ。Postgres 19 の遅れと AI の関係を論じる記事も出ており、AI が OSS の開発プロセスに与える負荷が議論になりつつある。
