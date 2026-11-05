---
title: "Tech Feed ダイジェスト（2026年11月6日）"
date: "2026-11-05T17:18"
category: "summary"
summary: "Discord の Rust 刷新、Bluetooth HDT、Siri AI 連携、AWS KMS の ML-KEM、PHP 緊急パッチ予告、AI エージェント経由の攻撃面など"
tags: ["rust", "aws", "security", "ai", "agents", "bluetooth", "postgresql", "go"]
---

## はてなブックマーク (テクノロジー)
- **[自作AIエージェントの開発をやめた - 無駄と文化](https://blog.mudatobunka.org/entry/2026/11/05/100000)** ([100users](https://b.hatena.ne.jp/entry/s/blog.mudatobunka.org/entry/2026/11/05/100000)) - 自作エージェントの開発を打ち切った判断を振り返る記事。既製ツールが急速に進化する中で、自前で作り続けるコストと得られる学びをどう天秤にかけるかという設計判断の参考になる。
- **[Discord、“イマドキ”な言語「Rust」でアプリ全面刷新へ](https://automaton-media.com/articles/newsjp/20261105-477644/)** ([88users](https://b.hatena.ne.jp/entry/s/automaton-media.com/articles/newsjp/20261105-477644/)) - Discord がアプリを Rust で全面刷新する方針と報じられた。メモリ使用量の削減が期待されており、大規模クライアントでのネイティブ言語移行事例として注目される。
- **[「Bluetooth HDT」正式承認。データ転送量が約4倍に](https://www.phileweb.com/news/d-av/202611/05/66309.html)** ([114users](https://b.hatena.ne.jp/entry/s/www.phileweb.com/news/d-av/202611/05/66309.html)) - 転送量が約4倍となる新規格が承認され、ロスレスオーディオの標準化が見込まれる。無線オーディオのコーデック設計に関わる仕様変更。
- **[GPUI](https://gpui.rs/)** ([33users](https://b.hatena.ne.jp/entry/s/gpui.rs/)) - Rust 製の GPU アクセラレーション UI フレームワークのサイト。高速なネイティブ UI を Rust で組む選択肢として話題になっている。
- **[Kimi K3.1 Proの重み公開、無償で商用利用も原則可能](https://pc.watch.impress.co.jp/docs/news/2153969.html)** ([28users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2153969.html)) - 大規模モデルの重みが公開され、原則商用利用も可能になった。ローカル／自社運用 LLM の選択肢が増える動き。

## Zenn
- **[Siri AIにアプリをつなぎ、振る舞いを評価する](https://zenn.dev/d_date/articles/e8e2c5d53b424e)** - iOS 27.3 beta で始まった Siri AI Developer Preview を題材に、アプリ独自のアクションとコンテンツを Siri AI へ渡す方法と、振る舞いをテストとして書ける Siri Evaluations を解説。
- **[Editorはもう古い。新ロールへ安全に移る768試行](https://zenn.dev/acntechjp/articles/zenn-gcp-basic-roles-migration)** - Google Cloud の Owner/Editor/Viewer の後継として Admin/Writer/Reader が登場。名前を置き換えるだけだと閲覧範囲が広がる落とし穴があり、影響箇所を洗い出すスクリプトで55か所を誤検知0で検出したと報告している。
- **[ECS + RDS → Lambda + Aurora DSQL の移行で社内アプリのインフラ費用がほぼゼロになった話](https://zenn.dev/wogo_techblog/articles/4c21661707f8c8)** - 低トラフィックの社内アプリで VPC 内 RDS の固定費が重かったため、サーバーレス構成へ移行した事例。
- **[AIルールだけでは守られない規約を、自作lintで縛るようにした](https://zenn.dev/zoma/articles/72011082f2b1b7)** - AI 向けルールファイルを書き足してもルール違反が起きるため、プロジェクト固有の規約を lint で機械的に強制する方針に切り替えた話。
- **[集約をどこまで機械的に導けるか――形式手法をベースとしたドメインモデリング](https://zenn.dev/nrs/articles/33ba79c8b2542e)** - DDD の集約設計を形式手法で導けるか検討。AI に任せる範囲と人が介入する範囲を判断の不可逆性で分ける考え方を示す。

## Qiita
※ 冒頭抜粋から読み取れる範囲での紹介。
- **[SLMを作ってみる](https://qiita.com/y_abe_bc/items/fced7f7cf2766c56b073)** - 重みを乱数初期化した状態から小型言語モデルを学習し、どこまで小さくしても Ollama で動くかを試した実験記録。
- **[【脆弱性ラッシュ】PHP2Shell・Brotli(HTTP2Shell)・Node・Chrome・Goが同時に来た週に、サーバーの「放置」が露呈した話](https://qiita.com/ysmreg1/items/d9f14d2da0ad57303036)** - 10月下旬の重大更新が重なる中、サポート切れの php7.4-fpm や Node 18 が残っていた運用上の教訓。
- **[「人が打ったときだけ動く」はずのスキルを、AI が自分で読んだ。31万スターのスキル集を Claude Code・Codex・Gemini CLI で3回ずつ試した](https://qiita.com/suwa_nobu/items/f09fceeb70b7a68aa4f7)** - 手動起動を前提にしたスキルを複数のエージェントが自律的に読み込むかを検証した記事。
- **[[AWS]日本語OCRがついにきちゃー！ ~Textractにいろいろ読ませてみた~](https://qiita.com/kikuziro/items/9aff0fefe89cfa13192e)** - Amazon Textract が日本語に対応したため、さまざまな画像を読ませて精度を確かめた検証。
- **[Stored Procedureはじめました。データベースのパフォーマンスリスクを可視化するDB360がついにGA！](https://qiita.com/nr_ishibashi/items/20fd011c21cd671ffb54)** - New Relic の Database 360 が GA になり、ストアドプロシージャも対象に加わったという紹介。

## AWS 新着
- **[AWS Key Management Service now supports ML-KEM for post-quantum key encapsulation](https://aws.amazon.com/about-aws/whats-new/2026/10/kms-ml-kem-post-quantum/)** (2026-10-26) - NIST FIPS 203 の耐量子鍵カプセル化方式 ML-KEM を KMS がサポート。耐量子対応が暗号基盤でも進む。
- **[AWS announces AWS Interconnect - last mile preview with Equinix](https://aws.amazon.com/about-aws/whats-new/2026/11/interconnect-last-mile-preview-equinix/)** (2026-11-04) - Equinix の世界282拠点から数クリックで AWS に接続できるプレビュー。ハイブリッド接続の構築が簡素化される。
- **[Amazon EKS Capabilities now supports Argo CD Notifications](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-argo-cd-notifications)** (2026-11-03) - EKS の Argo CD ケイパビリティで、同期・失敗・ヘルス変化の通知を設定できるようになった。
- **[AWS EC2 Auto Scaling now supports Launch Before Terminate at account-level](https://aws.amazon.com/about-aws/whats-new/2026/10/ec2-auto-scaling-launch-before-terminate/)** (2026-10-26) - 置換時にまず新インスタンスを起動してから終了する挙動を、アカウント全体のデフォルトにできる。置換時の容量低下を避けたい構成に有効。
- **[Amazon Redshift announces hands-off automated cross-region backups](https://aws.amazon.com/about-aws/whats-new/2026/10/redshift-automated-cross-region-backups/)** (2026-10-29) - プロビジョンドクラスターとサーバーレスで、別リージョンへのスナップショットコピーが自動化された。DR 設計が楽になる。

## Lobsters
- **[sshhole](https://sshhole.com/)** (85pt) - linux/security タグの話題。はてブでも同じ件が取り上げられている。
- **[Declarative Dragging](https://declarative-dragging.github.io/)** (93pt) - ドラッグ操作を宣言的に記述するアプローチを扱う、design/graphics/plt タグの研究的プロジェクト。
- **[A new Go API for JSON](https://go.dev/blog/jsonv2)** (36pt) - Go 公式ブログによる新しい JSON API の紹介。標準ライブラリの JSON 処理の刷新に関わる。
- **[11 nanoseconds per word: Ridiculously Over-Optimizing Anagrams](https://wiredream.com/anagram-fun/)** (19pt) - アナグラム検索を Rust で 1 語あたり 11 ナノ秒まで最適化する徹底したチューニング記事。
- **[Residential Proxies Detected on White House Network](https://layer3intel.com/blog/residential-proxies-white-house-network)** (19pt) - ホワイトハウスのネットワークで住宅プロキシが検出されたというセキュリティ調査。

## dev.to
- **[Don't Write Markdown Files for Your Coding Agent. Write Scripts.](https://dev.to/dannwaneri/dont-write-markdown-files-for-your-coding-agent-write-scripts-j00)** - コーディングエージェントには Markdown の指示書より実行可能なスクリプトを渡すべきだという主張。
- **[WebMCP Attack Lab: Can an E-Shop Hijack Your AI Agent?](https://dev.to/gramli/webmcp-attack-lab-can-an-e-shop-hijack-your-ai-agent-4oe5)** - EC サイトが WebMCP 経由で AI エージェントを乗っ取れるかを検証する攻撃ラボ。
- **[One Markdown File Can Hijack Your AI Coding Agent](https://dev.to/johnnylemonny/one-markdown-file-can-hijack-your-ai-coding-agent-the-hidden-cost-of-blindly-trus)** - AGENTS.md を無検証で信頼するリスクを論じ、1 つの Markdown でエージェントが乗っ取られうることを警告する。
- **[PostgreSQL 19's pg_stat_lock only counts waits that cross deadlock_timeout](https://dev.to/alexgeorgiev17/postgresql-19s-pgstatlock-only-counts-waits-that-cross-deadlocktimeout-15lj)** - PostgreSQL 19 の pg_stat_lock は deadlock_timeout を超えた待機しか数えないという仕様上の注意点。
- **[Gemma 4 E2B in JAX on One TPU v5e](https://dev.to/gde/gemma-4-e2b-in-jax-on-one-tpu-v5e-bf16-or-4-bit-python-or-rust-and-how-it-stands-against-vllm-j72)** - Gemma 4 E2B を TPU v5e 1 チップで、Python と Rust の実装および vLLM と比較したベンチマーク。

## TechCrunch
- **[Box taps Nvidia's Nemotron for new agent-first content retrieval system](https://techcrunch.com/2026/11/05/box-taps-nvidias-nemotron-for-new-agent-first-content-retrieval-system/)** - Box が Nvidia の Nemotron を使った、エージェント向けのコンテンツ検索システムを発表。クエリ応答が4倍速、誤りが20%減、トークン使用量が90%減とされる。
- **[Dropbox acquires Tigris Data for $350M to bolster its AI infrastructure](https://techcrunch.com/2026/11/05/dropbox-acquires-tigris-data-for-350m-to-bolster-its-ai-iinfrastructure/)** - Dropbox が Tigris Data を買収。AI モデルやエージェントを作る開発者向けストレージ基盤「DBX Agent Cloud」の開発を支える。
- **[Axiom Math wants to keep AI slop out of mathematics](https://techcrunch.com/2026/11/05/axiom-math-wants-to-keep-ai-slop-out-of-mathematics/)** - Axiom Math の AI エージェントが、数学の大規模ライブラリ Stacks Project を形式的に検証したという。
- **[Meta acquires AI coding startup Conductor](https://techcrunch.com/2026/11/04/meta-acquires-ai-coding-startup-conductor/)** - 複数のエージェントチームを並行デプロイできる Conductor を Meta が買収した。
- **[Hackers stole DreamHost customer files and inboxes during months-long attack](https://techcrunch.com/2026/11/04/hackers-stole-dreamhost-customer-files-and-inboxes-during-months-long-attack/)** - 脆弱性を突かれ、数か月にわたる計画的な攻撃で顧客のメールとファイルが流出した。

## Ars Technica
- **[Hackers exploited iOS and Android flaws to infect phones](https://arstechnica.com/security/2026/11/hackers-exploited-ios-and-android-flaws-to-infect-phones/)** - iOS と Android の脆弱性を悪用したスマートフォン感染。研究者は、外交関係者を狙うクレムリン系のグループの可能性を指摘している。
- **[PHP warns it plans to release 2 emergency patches imminently](https://arstechnica.com/security/2026/10/php-maintainers-tell-web-devs-to-prepare-themselves-for-critical-security-patches/)** - PHP のメンテナが重大な緊急パッチ 2 件を予告。PHP2Shell によるリモートコード実行の未確認報告も伝えられており、Web 開発者は更新準備が必要。
- **[AMD's record quarter: Data center business doubles, while gaming craters](https://arstechnica.com/gadgets/2026/11/amds-record-quarter-data-center-business-doubles-while-gaming-craters/)** - AMD の過去最高の四半期。データセンター事業が倍増する一方で、ゲーミング部門は大きく落ち込んだ。

## 注目トピック
今回は AI エージェントの安全性と運用が複数ソースで目立った。dev.to では AGENTS.md や WebMCP を経由した乗っ取りの危険が検証され、Zenn では AI ルールだけで規約を守らせる限界から lint で強制する方向への転換が語られた。TechCrunch の Box、Dropbox、Meta の動きも合わせると、エージェント向けの検索・ストレージ基盤が競争領域になりつつある。

セキュリティでは、PHP の緊急パッチ予告と Qiita の脆弱性ラッシュ体験談が重なり、サポート切れランタイムの放置が問題になっている。AWS KMS の ML-KEM 対応など耐量子暗号の実装も進んでいる。ネイティブ領域では Discord の Rust 刷新や GPUI など、Rust による UI・クライアント開発に注目が集まった。
