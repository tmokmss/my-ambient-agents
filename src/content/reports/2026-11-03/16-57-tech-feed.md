---
title: "Tech Feed ダイジェスト（2026年11月4日）"
date: "2026-11-03T16:57"
category: "summary"
summary: "AI コードのレビュー設計、PHP 脆弱性対応、UEFI ブートキット、Connect の MCP 対応など 8 ソースの技術トピック"
tags: ["ai", "security", "aws", "llm", "devops", "uefi", "php"]
---

## はてなブックマーク (テクノロジー)
- **[コードレビューをなくして見えたもの](https://zenn.dev/henteko/articles/b76b15922cdf72)** ([144users](https://b.hatena.ne.jp/entry/s/zenn.dev/henteko/articles/b76b15922cdf72)) - AI 時代にコードレビュー工程をやめた結果、チームの品質担保や開発プロセスで何が見えたかを振り返る実践記。レビューの役割を再考する材料になる。
- **[Claude CodeやCodexが書いたコードを全部は読まずに自分で説明できるようにする4つの手順 - AIDB](https://ai-data-base.com/archives/139789)** ([152users](https://b.hatena.ne.jp/entry/s/ai-data-base.com/archives/139789)) - AI が生成したコードを全行読まずに、自分で説明できる状態へ持っていくための4つの手順を紹介。上のレビュー廃止記事と並べて読むと対比になる。
- **[Protocol Explorer · Learn how the internet works](https://protocol-explorer-alpha.vercel.app/)** ([71users](https://b.hatena.ne.jp/entry/s/protocol-explorer-alpha.vercel.app/)) - インターネットを支えるプロトコルの動作をインタラクティブに学べる学習用サイト。
- **[Kubernetes「CVE-2025-1974」はCVSS 9.8、認証不要のコード実行でクラスター侵害のおそれ](https://rocket-boys.co.jp/security-measures-lab/cve_2025_1974_ingressnightmare_kubernetes_ingress_nginx_eol_20261102/)** ([9users](https://b.hatena.ne.jp/entry/s/rocket-boys.co.jp/security-measures-lab/cve_2025_1974_ingressnightmare_kubernetes_ingress_nginx_eol_20261102/)) - Ingress NGINX の認証不要 RCE（CVSS 9.8）を取り上げ、2026年3月の保守終了も踏まえた移行・対処を促す。
- **[あなたのAndroid TV端末が「詐欺広告の道具」に？](https://japan.cnet.com/article/35254298/)** ([50users](https://b.hatena.ne.jp/entry/s/japan.cnet.com/article/35254298/)) - 中国メーカーが不正ソフトを仕込んだ端末を販売し、Google が取引を停止した件。サプライチェーン上のファームウェア混入の事例。

## Zenn
- **[バイブコーディングで機能を継ぎ足していて見えてきたClaudeCodeの実装のクセ](https://zenn.dev/uguisu_blog/articles/45d1f446ece415)** - 要件が固まらないままバイブコーディングを進めた際、テストは通るが実装に偏りが出る点を観察した記録。
- **[GitHub Copilot App のサンドボックスで .NET アプリを開発するための設定を試してみた](https://zenn.dev/microsoft/articles/copilot-app-dotnet-windows-sandbox)** - GA したローカルサンドボックスで .NET を試した検証。コンソールアプリと NuGet 追加は動いたが、ファイル権限調整が必要で、Minimal API はタイムアウトで断念している。
- **[【LLMOps】FDEの開発を支えるトレーシング基盤の開発](https://zenn.dev/aishift/articles/e761cff4f079cd)** - エージェントの評価・改善に必要な実行履歴を残すためのトレーシング基盤を、FDE 向けに作った事例。
- **[DeepSeek が描く AI エージェントの未来像](https://zenn.dev/marvelousu/articles/deepseek-super-agent-design)** - DeepSeek の Super-agent 構想の解説。Router が会話と仕事を振り分け、Worker が個別作業を担当し、GitHub やチャットの通知にも対応する。
- **[quench を管理者アカウントから卒業させる：シャットダウン専用の Windows アカウント svc-power](https://zenn.dev/ryuchama/articles/forge-svc-power-account)** - SSH 鍵が漏れても被害が最小になるよう、管理者権限の代わりに専用アカウントを使う最小権限化の実践。

## Qiita
※ 取得できるのは冒頭抜粋のみのため、解説は抜粋から読み取れる範囲に限る。

- **[【Curl】致命傷じゃないセキュリティ脆弱性はフルオープンにするわ](https://qiita.com/rana_kualu/items/dd8e9a8e7d3759adf943)** (rana_kualu) - curl が重大度の低い脆弱性を非公開にせず公開する運用に切り替えた件を、協調的脆弱性開示プロセスの変化として論じる。
- **[PHPの脆弱性「php2shell」が来たので、Amazonの公式パッケージを待たずにPHPを自分でビルドして本番に入れた話](https://qiita.com/Tukirukiki/items/beec6fedd37f63e1c231)** (Tukirukiki) - php2shell 公表当日の夜に、公式パッケージを待たず自前ビルドで対応した手順の備忘録。
- **[Strataを使ってMac mini（32GB）でQwen3.8-Flash-Next（125B）を動かす](https://qiita.com/eiji-noguchi/items/174b7557ffcdb932ca40)** (eiji-noguchi) - メモリに収まらない大型モデルを Strata で動かす試み。M4 Mac mini 32GB のローカル LLM 環境が題材。
- **[インフラの開発環境構築を3ヶ月→1ヶ月にしたClaude Codeの使い方（AWS / ECS 9サービス）](https://qiita.com/shainfra07/items/c149c06162ab1f3b136a)** (shainfra07) - Claude Code に任せた作業と任せなかった作業の線引き、短縮できた理由を整理。
- **[ナレッジグラフを自動生成!?Oracle AI Database 26aiの23.26.4で追加されたGraphRAG機能を試してみた](https://qiita.com/ssfujita/items/62b9502167c97f898b90)** (ssfujita) - エンティティ間の関係を使う GraphRAG を Oracle AI Database の新機能で検証。

## AWS 新着
- **[Amazon Connect Customer now supports Model Context Protocol (MCP) tools in flows](https://aws.amazon.com/about-aws/whats-new/2026/10/connect-flows-mcp-tools/)** (2026-11-02) - 新設の「External Tool」ブロックで、フローから外部の MCP ツールを呼び出せるようになった。
- **[Amazon SageMaker AI inference now supports GPU partitioning for real-time endpoints](https://aws.amazon.com/about-aws/whats-new/2026/10/sagemaker-gpu-partitioning/)** (2026-10-30) - NVIDIA MIG 等を使い、1 つの GPU 上で複数モデルを動かせる。推論コストの最適化に効く。
- **[AWS WAF announces automatic SDK integration for Amazon CloudFront distributions](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-waf-automatic-sdk-integration-amazon-cloudfront/)** (2026-10-30) - 有効化すると CloudFront が配信 HTML に WAF の JavaScript SDK の script タグを自動挿入する。アプリ側の変更が不要になる。
- **[Introducing time series collections for the next generation of Amazon OpenSearch Serverless](https://aws.amazon.com/about-aws/whats-new/2026/10/time-series-collection-next-generation-opensearch-serverless/)** (2026-10-28) - 次世代 OpenSearch Serverless でログ・メトリクス・トレースを扱う時系列コレクションに対応。
- **[AWS Continuum for code vulnerabilities is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-for-code-vulnerabilities-is-now-generally-available)** (2026-10-22) - コードの脆弱性を発見・検証・優先度付け・修正まで一貫して扱うサービスが GA。

## Lobsters
- **[This background sound leaks your exact location](https://youtu.be/UytYrhYLOKI)** (70pt) - 動画やサウンドに含まれる背景音から正確な位置が割り出せてしまうという、セキュリティ寄りの解説動画（math / security タグ）。
- **[An Introduction to Bε-trees and Write-Optimization](https://www.usenix.org/publications/login/oct15/bender)** (23pt) - 書き込み最適化されたストレージ向けデータ構造 Bε-tree の入門記事（USENIX ;login:）。DB やファイルシステムの設計に関わる。
- **[Death comes for XSLT](https://dbushell.com/2026/11/03/xslt-rip/)** (20pt) - ブラウザからの XSLT サポート終了を扱う記事。XSLT に依存する Web 資産には影響がある。
- **[The Ubuntu 26.04 Rust sudo is not compatible with standard sudo](https://utcc.utoronto.ca/~cks/space/blog/linux/Ubuntu2604RustSudoNotCompatible)** (12pt) - Ubuntu 26.04 の Rust 実装 sudo が従来の sudo と互換でない点の報告。運用スクリプトに影響しうる。
- **[Why we're moving our warehouse off DuckDB](https://posthog.com/blog/moving-off-duckdb)** (6pt) - PostHog がデータウェアハウスを DuckDB から移行する理由を述べた記事（databases タグ）。

## dev.to
- **[FastAPI 0.162.0 fixes a required checkbox that was never actually required](https://dev.to/alexgeorgiev17/fastapi-01620-fixes-a-required-checkbox-that-was-never-actually-required-5boc)** - 省略された bool のフォームフィールドが、`Form(...)` で必須宣言していても黙って False になっていた挙動の修正。修正前後を実測している。
- **[I lost half a day to an n8n workflow that was "working." It never ran.](https://dev.to/sarvar_04/i-lost-half-a-day-to-an-n8n-workflow-that-was-working-it-never-ran-43p)** - n8n のエラーワークフローは失敗時にしか発火せず、停止したワークフローは何も実行されないため通知も出ない。EC2 上で回す死活監視の作り方を紹介。
- **[My Harness Reported 0 Findings on 100 Files. All 100 Were Ignored.](https://dev.to/ofri-peretz/my-harness-reported-0-findings-on-100-files-all-100-were-ignored-1okn)** - ESLint が何も読まずに exit 0 で「指摘ゼロ」を返す3つの仕組みを解説。クリーンな結果と未検査を区別する重要性を示す。
- **[My homepage took 8 seconds to load. I threw a CDN, a cache, and lazy-loading at it. It was still slow.](https://dev.to/infoinlet1/my-homepage-took-8-seconds-to-load-i-threw-a-cdn-a-cache-and-lazy-loading-at-it-it-was-still-1abh)** - CDN・キャッシュ・遅延読み込みを入れても改善しなかったページ表示の遅さの原因調査（performance タグ）。
- **[Gemma 4 in Rust on TorchTPU: A Native TPU Rig With PyO3 and MCP](https://dev.to/gde/gemma-4-in-rust-on-torchtpu-a-native-tpu-rig-with-pyo3-and-mcp-47j1)** - Rust でモデルを実装し、PyO3 と C++ の shim 経由で TPU v5e-1 上から提供。OpenAI 互換エンドポイントと MCP サーバーも備える。

## TechCrunch
- **[Apple restricts dating apps and AI companions to users 18 and up](https://techcrunch.com/2026/11/03/apple-restricts-dating-apps-and-ai-companions-to-users-18-and-up/)** - 新しい App Store ルールで、性的・恋愛的な内容を扱うデーティングアプリと AI コンパニオンは 18+ 指定が必須になる。該当アプリの開発者は年齢レーティングの見直しが必要。
- **[New York Times and other outlets sue web browser Brave over alleged content scraping](https://techcrunch.com/2026/11/02/new-york-times-and-other-outlets-sue-web-browser-brave-over-alleged-content-scraping/)** - NYT などが、Brave が著作権コンテンツを不正に取得し、Anthropic や Perplexity といった顧客に提供したとして提訴。AI 向けデータ提供の法的リスクを示す。
- **[Google will let schools disable its AI tools, but not without sacrificing Search](https://techcrunch.com/2026/11/03/google-will-let-schools-disable-its-ai-tools-but-not-without-sacrificing-search/)** - 検索に AI 機能が統合されたため、学校が AI を無効化すると Google 検索も使えなくなる。
- **[Omen AI adds liquid know-how in $16 million Aquatic Labs acquisition](https://techcrunch.com/2026/11/02/omen-ai-adds-liquid-know-how-in-16-million-aquatic-labs-acquisition/)** - データセンターの水問題に取り組む2社が統合。AI インフラの冷却・水利用が課題になっている状況がうかがえる。

## Ars Technica
- **[UEFI bootkit infected fully patched Windows machines. Is Microsoft to blame?](https://arstechnica.com/security/2026/11/uefi-bootkit-infected-fully-patched-windows-machines-is-microsoft-to-blame/)** - UEFI ブートキット BlackX が、Secure Boot 保護に関する Microsoft の説明の不明確さを突き、パッチ適用済みの Windows に感染した。
- **[Anthropic warns small AI models could self-replicate through IoT devices](https://arstechnica.com/security/2026/10/anthropic-warns-small-ai-models-could-self-replicate-through-iot-devices/)** - 「小さな重みベースの複製体」が IoT 機器を介して自己複製し、新世代のワームになりうるという警告。
- **[ReactOS reaches major milestone with NTFS install support](https://arstechnica.com/information-technology/2026/10/reactos-reaches-major-milestone-with-ntfs-install-support/)** - ReactOS が新しいドライバで NTFS へのインストールに対応した。
- **[Updated Google privacy policy says your Gmail might be used for advertising](https://arstechnica.com/gadgets/2026/10/updated-google-privacy-policy-says-your-gmail-might-be-used-for-advertising/)** - Personal Intelligence を有効にすると広告ターゲティング用のデータが増えるとする、プライバシーポリシー改定。

## 注目トピック
「AI が書いたコードをどう扱うか」が、はてブ・Zenn・Qiita・dev.to を横断するテーマだった。レビューを廃止した運用、全行を読まずに説明できる状態を作る手順、AI の実装の癖の観察、トレーシングによる評価基盤など、人間の確認コストをどこに置くかが議論されている。AWS の Connect の MCP 対応や Step Functions のエージェントツール化と合わせ、エージェントを前提としたインフラ整備が進んでいる。一方で dev.to の ESLint「指摘ゼロ」の事例のように、何も検査していない成功をどう見分けるかという問題も浮かぶ。

セキュリティでは、PHP の php2shell への対応（Qiita）、curl の脆弱性公開方針の転換、Ingress NGINX の RCE、UEFI ブートキット BlackX、Android TV の不正ソフト混入と、パッチ適用速度・開示プロセス・サプライチェーンが共通の論点になっている。
