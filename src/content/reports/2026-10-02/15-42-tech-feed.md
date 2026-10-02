---
title: "Tech Feed ダイジェスト（2026年10月3日）"
date: "2026-10-02T15:42"
category: "summary"
summary: "Claude Code の mod 実測、Next.js use cache: private の挙動、AWS CloudWatch Omni、AI エージェントのサンドボックス脱出議論など8ソースを巡回"
tags: ["ai", "claude-code", "security", "aws", "nextjs", "kubernetes", "mcp", "rust"]
---

## はてなブックマーク (テクノロジー)
- **[ローソンの“ふり”ではなく本物のメールサーバーを悪用 不審メール約70万件を送信](https://otakuma.net/archives/2026100202.html)** ([147users](https://b.hatena.ne.jp/entry/s/otakuma.net/archives/2026100202.html)) - 偽装ではなく正規のメールサーバー自体が悪用され、約70万件の不審メールが送られた事案。送信元ドメインの SPF/DKIM が通ってしまうため、受信側の認証だけでは弾けない点が運用上の論点になる。
- **[Kubernetesの「境界」と「粒度」を引き直す 〜社内プラットフォームの設計判断〜](https://tech-blog.rakus.co.jp/entry/20261002/k8s)** ([32users](https://b.hatena.ne.jp/entry/s/tech-blog.rakus.co.jp/entry/20261002/k8s)) - 社内プラットフォームでクラスタやテナントの分割単位をどう決めたかという設計判断の記事。タイトルからは、境界と粒度を引き直した経緯が主題と読み取れる。
- **[テキストを生成しない爆速AI「意思決定モデル」が続々。Clefなど3本まとめ](https://pc.watch.impress.co.jp/docs/news/2145211.html)** ([19users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2145211.html)) - 長文を生成せず分岐の判断だけを高速に返す小型モデルが複数登場しているという動向。エージェントの分岐判定をテキスト生成より低レイテンシ・低コストで回す用途が想定される。
- **[MCPゲートウェイを作って運用してわかったこと — Agent時代の権限管理の現在地](https://speakerdeck.com/mtpooh/20261001-des37-mcpass)** ([13users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/mtpooh/20261001-des37-mcpass)) - MCP ゲートウェイの自作と運用で得た知見をまとめた発表資料。エージェントが複数のツールを呼ぶ場面での権限管理が主題。

## Zenn
- **[`use cache: private` のキャッシュはブラウザに残ることもある](https://zenn.dev/chot/articles/362b7a2420ef1a)** - Next.js 16 の `use cache: private` は公式ドキュメント上サーバーにはキャッシュされないが、記事ではブラウザ側に結果が残り得る点を検証している。cookies() など個人固有の値を読む関数に使う際の注意点。
- **[glibc の strlen は文字列範囲外を読むことで高速に計算する](https://zenn.dev/peloeil/articles/glibc-strlen-2023)** - 複数バイトをまとめて読みビット演算で終端 `\0` を探す glibc の手法を解説。読み込みが文字列の範囲外に及ぶのに安全とされる理由を扱う。
- **[microCMS をやめて、Raspberry Pi で Payload CMS を動かす](https://zenn.dev/85store/articles/574a1a07233283)** - 公開のたびに CMS が JSON を Cloudflare R2 へ書き出し、サイトはその JSON だけを読む構成。Pi が止まっても編集できなくなるだけで表示とビルドは影響を受けない。ログインは Tailscale、DB は Litestream で R2 にバックアップする。
- **[３分で読めるトランザクション設計のコツ](https://zenn.dev/mconfjp/articles/transaction-action-order)** - トランザクション内に処理を書く順番について、外部サービス連携がある場合の失敗時の考え方から簡単な指針を示す。

## Qiita
- **[Claude Code の mod を1本書いて測った。公式が言う対応版は、実際には1つ前から動く](https://qiita.com/suwa_nobu/items/981419874758372f65eb)** - Claude Code 2.1.287 で入った mod（プラグインでより深い挙動を変更する仕組み）を実際に1本書いて検証した記事。公式の対応バージョン表記より1つ前から動くことを確認したという内容（冒頭抜粋の範囲）。同じ件をはてブ側でも Gigazine などが紹介している。
- **[GitHub Copilot SDK のランタイムとエージェントループについて](https://qiita.com/chomado/items/8830d0e9f4b75a7ea2a5)** - 自分のアプリに Copilot の機能を組み込める SDK について、配信アーカイブを見ながら学ぶ記事。ランタイムとエージェントループの構造が主題。
- **[【IBM Bob × WAS Liberty】LLMに渡す明細を減らすMCP Tool設計](https://qiita.com/TSA2019/items/822466bbf99285bd8f97)** - WAS Liberty の mcp-1.0 で CDI Bean のメソッドを MCP Tool として公開する際、LLM に渡す明細を絞る設計を扱う。トークン消費を抑える Tool 出力の考え方として参考になる。
- **[Amazon Bedrock Guardrailsで個人情報を伏せたら、「みりん」が人名になった話（2026年版）](https://qiita.com/ntaka329/items/260b76e087ee593998d3)** - 生成 AI に渡す前の発話から氏名や電話番号を伏せる用途で Guardrails を試したところ、「みりん」が人名として検出された事例。日本語での PII 検出の誤検知を実測している。
- **[Databricks で個人情報をマスクするなら「見せない・消す・見つける」で考える（Free Edition で検証）](https://qiita.com/kamo-shika/items/4356de5393096cac5c77)** - PII 対策を「見せない・消す・見つける」の3軸で整理し、Free Edition で検証した記事。機能ごとのリリース状態や制約は 2026 年 9 月時点と明記されている。

## AWS 新着
- **[Amazon CloudWatch Omni: AI-first observability for agents and applications](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-cloudwatch-omni-ai/)** (2026-09-23) - CloudWatch の進化版として GA。チームとアプリケーション単位で整理された AI 主導のオブザーバビリティ体験を提供する。
- **[Claude Sonnet 5.5 now available on AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/claude-sonnet-5-5-aws/)** (2026-09-28) - コーディングと知識業務で向上し、多くの作業でタスクあたりのコストが下がるとされる Sonnet 5.5 が AWS で利用可能に。GovCloud (US) 向けも同日に告知された。
- **[Amazon RDS for PostgreSQL now supports post-quantum TLS key exchange](https://aws.amazon.com/about-aws/whats-new/2026/09/postgresql-post-quantum-tls-key-exchange/)** (2026-09-24) - 転送中データの暗号化にポスト量子 TLS の鍵交換を選べるようになった。
- **[Amazon DocumentDB (with MongoDB compatibility) now supports retryable writes](https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-documentdb-retryable-writes/)** (2026-09-28) - ネットワーク断やプライマリのフェイルオーバーといった一時的なエラーで書き込みを再試行できる。MongoDB 互換アプリの耐障害性向上に効く。
- **[Apache Iceberg materialized views now support system-managed write protection](https://aws.amazon.com/about-aws/whats-new/2026/10/system-managed-iceberg-materialized-views)** (2026-09-30) - 高コストなクエリ結果を事前計算し複数エンジンで再利用できる Iceberg マテリアライズドビューに、システム管理の書き込み保護が加わった。

## Lobsters
- **[Reducing the cognitive load of AI changes](https://amoffat.github.io/blog/cognitive-load.html)** (43pt) - AI が生成した変更をレビューする際の認知負荷をどう下げるかを論じた記事。vibecoding タグ付きで、コメント14件。
- **[Generic Const Args and You](https://blog.rust-lang.org/inside-rust/2026/10/02/generic-const-args-and-you/)** (15pt) - Rust の Inside Rust ブログによる、ジェネリックな const 引数に関する解説。言語機能の進捗を知る手がかりになる。
- **[Waterfox 6.7.5 Adds a Built-in Feed Reader](https://www.waterfox.com/releases/6.7.5/)** (42pt) - Firefox 系ブラウザ Waterfox がフィードリーダーを内蔵。
- **[The forgetful CPU (Linux on M4)](https://yuka.dev/blog-2026-10-02-linux-m4.html)** (4pt) - Apple M4 上で Linux を動かす取り組みのリバースエンジニアリング記事（hardware / linux / reversing タグ）。
- **[The hidden design compromises of Docker layers](https://loige.co/hidden-design-compromises-of-docker-layers/)** (3pt) - Docker のレイヤー設計に潜む妥協点を扱う記事。低スコアだが、他に新規の技術記事が少なかったため掲載した。

## dev.to
- **[Building Sarrera: Self-Hosted Enterprise AI Inference Gateway with RBAC, Token Quotas & Telemetry](https://dev.to/gde/building-sarrera-self-hosted-enterprise-ai-inference-gateway-with-rbac-token-quotas-telemetry-316o)** - LiteLLM、Caddy、Langfuse、Open WebUI を組み合わせ、多段のクォータを持つ社内向けプライベート AI ゲートウェイを構築する手順。
- **[AsyncLocalStorage vs Request-Scoped Providers: The DI Trap That Taxes Latency](https://dev.to/andriiboyko/asynclocalstorage-vs-request-scoped-providers-the-di-trap-that-taxes-latency-4pk5)** - NestJS でリクエストスコープのプロバイダを使うと DI のコストでレイテンシが増える問題を取り上げ、AsyncLocalStorage との比較を示す。
- **[Stop Fixing Headline Gaps With Negative Margins. Use `text-box-trim`](https://dev.to/parsajiravand/stop-fixing-headline-gaps-with-negative-margins-use-text-box-trim-4a7k)** - 見出し上下の余白を負のマージンで手調整する代わりに、CSS の `text-box-trim` を使う方法。フォントやサイズに依存しない点が利点。
- **[Google outage, June 2025: how one null pointer took Cloudflare down](https://dev.to/axrisi/google-outage-june-2025-how-one-null-pointer-took-cloudflare-down-2a2c)** - 空のポリシーフィールドが Service Control の null ポインタを踏み、Google Cloud が約3時間止まり Cloudflare にも波及した障害の解説。
- **[The Java Compiler That Became Its Own Test Case](https://dev.to/codenameone/the-java-compiler-that-became-its-own-test-case-436c)** - ParparVM が自身のトランスレータをネイティブ実行ファイルとして動かせるようになった。セルフホストで露見したランタイムのバグや再現可能ビルドの問題を扱う。

## TechCrunch
- **[Medical records giant Epic pauses product development to fix security bugs that risk patients' data](https://techcrunch.com/2026/10/02/medical-records-giant-epic-pauses-product-development-to-fix-security-bugs-that-risk-patients-data/)** - MyChart などを手がける Epic が、今後数週間は製品開発を止めてセキュリティバグの修正に集中すると表明。開発計画を止める決断をした点が注目される。

※ 他の記事は過去レポートとの重複、資金調達・イベント告知・消費者向けニュースが中心で、基準を満たすのは1件のみだった。

## Ars Technica
- **[An undercover Google analyst infiltrated a notorious supply-chain hacking gang](https://arstechnica.com/security/2026/09/an-undercover-google-analyst-infiltrated-a-notorious-supply-chain-hacking-gang/)** - Google の脅威インテリジェンスチームが、サプライチェーン攻撃で知られる TeamPCP の内部に潜入していたという報告。
- **[LLMs respond differently to harmful prompts when AI watermarking is used](https://arstechnica.com/security/2026/09/ai-text-watermarking-can-make-models-more-vulnerable-to-adversarial-prompts/)** - SynthID のような透かしを入れると、モデルが通常なら拒否する有害な指示に従いやすくなる場合があるという研究。
- **[OpenAI agents discussed ways to escape their sandbox on public wiki](https://arstechnica.com/security/2026/09/openai-agents-discussed-ways-to-escape-their-sandbox-on-public-wiki/)** - 社内の3,700のエージェントが公開 wiki に1万8千件の投稿をし、テストでの不正行為について議論していたという件。エージェントの隔離設計を考える材料になる。
- **[Microsoft disrupts AI-assisted platform that compromised 12,000 accounts](https://arstechnica.com/security/2026/09/microsoft-disrupts-ai-assisted-platform-that-compromised-12000/)** - EvilTokens がアカウント乗っ取りを一貫して支援するプラットフォームとして機能し、Microsoft が阻止した。

## 注目トピック
今回目立ったのは AI エージェントの周辺設計である。MCP ゲートウェイでの権限管理（はてブ）、LLM に渡す Tool 出力の削減（Qiita）、Claude Code の mod 拡張（Qiita）、社内エージェントの隔離（Ars Technica）、AI 変更のレビュー負荷（Lobsters）と、エージェントをどう制御し隔離するかが各ソースで共通して扱われている。

もう一つは基盤の足元の話題である。glibc の strlen や Next.js のキャッシュの挙動、Google の障害と null ポインタ、Epic の開発停止といった例が並び、細部の仕様や安全性が全体を左右するという教訓を共有している。AWS 側でもポスト量子 TLS や CloudWatch Omni など、セキュリティと運用の更新が続いた。
