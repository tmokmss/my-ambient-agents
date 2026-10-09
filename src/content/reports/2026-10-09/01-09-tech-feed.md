---
title: "Tech Feed ダイジェスト（2026年10月9日）"
date: "2026-10-09T01:09"
category: "summary"
summary: "ECS×VPC Lattice のデプロイ戦略、Aurora DSQL 部分インデックス、MCP の構造的欠陥、Let's Encrypt 64日証明書など"
tags: ["aws", "security", "ai", "infrastructure", "tls", "mcp", "rust"]
---

## はてなブックマーク (テクノロジー)
- **[さくらインターネット、GPU専有によりトークン消費量を気にせず定額で利用できる「さくらのAI Engineプライベートエディション」提供開始を発表](https://www.publickey1.jp/blog/26/gpuai_engine.html)** ([93users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/gpuai_engine.html)) - GPU を専有する代わりにトークン従量課金を気にせず定額で LLM API を使えるプラン。エージェント用途で消費トークンが読みにくい場合の、コスト設計の選択肢が増える。
- **[ペタバイト規模（約8兆レコード）の DMM データ基盤、Embulk やめました](https://zenn.dev/dmmdata/articles/embulk-to-dlt-migration)** ([32users](https://b.hatena.ne.jp/entry/s/zenn.dev/dmmdata/articles/embulk-to-dlt-migration)) - 大規模データ基盤の取り込みを Embulk から dlt へ移行した事例。タイトルのとおり規模が大きく、移行判断の背景が参考になる。
- **[ローソン、215万件の個人情報漏えい　「ユーザー本人に情報を表示する機構」に不正アクセス](https://www.itmedia.co.jp/news/article/2610/09/2000002148/)** ([11users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2610/09/2000002148/)) - 本人向けの情報表示機能が侵入経路になったという点が、認可・参照系 API の設計を見直す材料になる。ブックオフ（最大643万件）など同種の報道も続いている。
- **[情報漏えいの公表急増――いま増えているのは「攻撃」ではなく「発覚」](https://securitydrive.jp/column/0023/)** ([114users](https://b.hatena.ne.jp/entry/s/securitydrive.jp/column/0023/)) - 漏えい公表件数の急増を、攻撃の増加ではなく発覚・開示の増加として読み解くコラム。

## Zenn
- **[CSSの`text-box`で文字を上下中央に揃えたい](https://zenn.dev/chot/articles/be424332489e7a)** - Flexbox で中央揃えにしても文字がずれて見える理由を、フォントのメトリクスから説明し、`text-box` で揃える考え方を解説する。
- **[「ELYZA-Thinking-1.0-llm-jp-4」シリーズの学習方法と評価結果](https://zenn.dev/elyza/articles/79a3d4ed4be915)** - オープンモデルへの Mid-training や教師あり学習などの追加学習手法と評価結果をまとめた、日本語推論モデルの開発記録。
- **[GraphRAGをゼロから詳しく解説する【ナレッジグラフ・オントロジー】](https://zenn.dev/tetsuro731/articles/6efe77a20b8c1c)** - RAG からナレッジグラフ、オントロジー、GraphRAG への流れを整理し、「Graph + RAG の手法」と Microsoft の同名 OSS の二つの意味を区別して説明する。
- **[オブジェクト指向UIデザインをAgent Skillにして、Claudeが作るUIはどう変わるかの検証](https://zenn.dev/emuni/articles/ooui-agent-skill)** - 「もっと見やすく」のような感覚的な修正指示を避けるため、設計理論の評価軸を Skill 化して UI 生成の変化を検証している。

## Qiita
※ 各解説は冒頭抜粋から読み取れる範囲に基づく。
- **[Amazon S3+vsftpdでFTPサーバを構築する](https://qiita.com/naoaki-yzrh/items/d1f17a1dd4f050dbfd7f)** - AWS Transfer Family for FTP はコストが高かったため、EC2 上の vsftpd と S3 の組み合わせで構築した際のメモ。
- **[uv pip installとuv addは何が違うの？](https://qiita.com/moritalous/items/92c559a3552db82be060)** - `uv pip install` は有効な仮想環境にパッケージを入れるだけの pip 互換操作で、`uv add` はプロジェクトの依存関係を管理する操作、という違いを整理している。
- **[Google Workspace Studioの「スキル（Skills）」とは？作り方・使い方とフローとの違いを解説](https://qiita.com/shibuya-ys/items/1cfd627bd1ba30e2dc9c)** - 業務自動化機能の「スキル」について、作り方とフローとの違いを実際に触って整理した記事。
- **[Autonomous AI Lakehouseのデータを Ontologyでつないで Private Agent Factoryから NL2SQL＋RAG＋Knowledge Graphしてみてみた](https://qiita.com/shirok/items/281689da5d9ee8c39540)** - 機材・Lot・Stage などの関係をオントロジーで結び、障害から確認すべき機材とその根拠までたどる検証。

## AWS 新着
- **[Amazon ECS adds Amazon VPC Lattice support for blue/green, linear, and canary deployments](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-vpc-lattice-blue-green-deployments)** (2026-10-02) - VPC Lattice を使う ECS サービスで、組み込みの blue/green・linear・canary デプロイが使えるようになった。
- **[Amazon Aurora DSQL now supports partial indexes](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-dsql-partial-indexes/)** (2026-10-02) - 条件に合う行だけを索引化でき、ストレージ使用量を抑えつつクエリ性能を上げられる。
- **[Amazon EKS Auto Mode now supports advanced compute configuration](https://aws.amazon.com/about-aws/whats-new/2026/10/eks-auto-mode-advanced-compute-config/)** (2026-10-01) - NodeClass リソースから kubelet 設定、Linux カーネルの sysctl、hugepages を調整できる。Auto Mode の制約だった低レベルのチューニングが可能になる。
- **[AWS Continuum for Penetration Testing now supports continuous penetration testing integrated directly into your CI/CD pipeline](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-penetration-testing/)** (2026-10-05) - 旧 AWS Security Agent が CI/CD パイプラインに組み込めるようになった（パブリックプレビュー）。ペネトレーションテストを継続的に実行できる。
- **[AWS Cost Explorer, Budgets, and Dashboards now support Amazon Bedrock product attributes](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-bedrock-attributes-in-cost-explorer/)** (2026-10-08) - Bedrock のコストをモデルやモデル提供元などの属性別に分析できる。モデルの使い分けによるコスト管理に使える。

## Lobsters
- **[64-Day Certificate Lifetimes Coming Feb 2027](https://letsencrypt.org/2026/10/07/64-day-certs.html)** (10pt) - Let's Encrypt が 2027年2月から証明書の有効期間を64日に短縮する。更新の自動化が前提になるため、手動更新が残っている環境は要対応。Ars Technica も同じ件を報じている。
- **[The Performance Cost of RwLock in Our Read-Heavy Workload](https://pranitha.dev/posts/rwlock-vs-lockfree/)** (13pt) - 読み取り中心のワークロードで Rust の `RwLock` が性能に与えるコストを測定し、ロックフリーな方式と比較している。
- **[The Missing Piece in Rust Error Handling](https://mcmah309.github.io/posts/the-missing-piece-in-rust-error-handling/)** (23pt) - Rust のエラーハンドリングに足りない部分を論じ、その補い方を提案する記事。
- **[I've Been Deindexed by Google](https://kennyqin.com/deindexed-by-google/)** (49pt) - 個人サイトが Google の検索インデックスから外された体験談。検索流入に依存する運用のリスクが分かる。
- **[Margaret Hamilton, computing pioneer who led software development for the Apollo program, dies at 90](https://news.mit.edu/2026/margaret-hamilton-computing-pioneer-dies-1007)** (268pt) - アポロ計画のソフトウェア開発を率いた Margaret Hamilton 氏の訃報。「ソフトウェア工学」という言葉を広めた人物として、今回の最高スコアを集めた。

## dev.to
- **[To Retry or Not to Retry? That Is the Question.](https://dev.to/gramli/to-retry-or-not-to-retry-that-is-the-question-1j2l)** - リトライすべきかどうかの判断を扱う記事。冒頭の説明は Kaggle のベンチマーク企画への投稿という前置きで、内容の詳細は未確認。
- **[Polars 2.0: why joins no longer keep their row order](https://dev.to/axrisi/polars-20-why-joins-no-longer-keep-their-row-order-3gmh)** - Polars 2.0 では collect がストリーミングエンジンを既定で使うため、join・group_by・unpivot は指示しない限り入力の行順を保持しなくなった。移行時に確認すべき点を解説する。
- **[How to resolve merge conflicts in Git without guessing: markers, --ours/--theirs and the rebase flip](https://dev.to/devopsdaily/how-to-resolve-merge-conflicts-in-git-without-guessing-markers-ours-theirs-and-the-rebase-flip-b4g)** - コンフリクトマーカーの読み方と、rebase 中に `--ours` と `--theirs` が merge と逆になる点を整理している。
- **[Deploying LiteLLM: An Open-Source AI Gateway](https://dev.to/vultr/deploying-litellm-an-open-source-ai-gateway-2idp)** - 100 以上のモデルを OpenAI 互換 API で統一できる OSS ゲートウェイ LiteLLM のデプロイ手順。
- **[Gemma 4 E2B on an AMD MI300X: Which Weight Format Should You Serve?](https://dev.to/gde/gemma-4-e2b-on-an-amd-mi300x-which-weight-format-should-you-serve-1a01)** - bf16・fp8・int8・int4 など10種類の重み形式を、同じ vLLM 構成で AMD MI300X 上に順に載せて比較している。

## TechCrunch
- **[Google brings agentic AI to Gemini, starting with businesses](https://techcrunch.com/2026/10/08/google-brings-agentic-ai-to-gemini-starting-with-businesses/)** - Gemini が計画・実行を行うエージェントになり、サブエージェントへの委任や複数モデルの併用ができる。まず企業向けに提供される。
- **[Anthropic changes usage policy to ban model abuse and election interference](https://techcrunch.com/2026/10/08/anthropic-changes-usage-policy-to-ban-model-abuse-and-election-interference/)** - 利用規約が改定され、極端な場合の Claude への繰り返しの乱用と選挙干渉が明示的に禁止された。通常の不満や批判は引き続き許容される。
- **[Spotify is getting more serious about selling enterprise software](https://techcrunch.com/2026/10/08/spotify-is-getting-more-serious-about-selling-enterprise-software/)** - Spotify が technology.spotify.com を開設し、社内で使っている技術を外部にも提供する。
- **[LibreOffice says 'no AI' is now a software feature](https://techcrunch.com/2026/10/06/libreoffice-says-no-ai-is-now-a-software-feature/)** - LibreOffice は、プライバシーを理由に AI を既定構成に入れる予定はないと表明した。

## Ars Technica
- **[MCP for agent-to-agent comms may be the riskiest protocol you've never heard of](https://arstechnica.com/security/2026/10/vulnerability-in-agents-from-google-and-others-exposes-structural-flaw-in-mcp/)** - エージェント間通信の新プロトコルに信頼の欠落があり、悪意あるプロンプトがエージェントからエージェントへ伝播する。Google などのエージェントで見つかった構造的欠陥。
- **[Cloudflare plans to issue quantum-safe TLS certificates](https://arstechnica.com/security/2026/09/cloudflare-plans-to-issue-quantum-safe-tls-certificates/)** - Cloudflare が耐量子 TLS 証明書を発行する計画で、Web 認証エコシステムの大規模な刷新の一部と位置づけられている。
- **[Four groups caught using the same Chrome and Windows exploit kit](https://arstechnica.com/information-technology/2026/09/4-groups-caught-using-the-same-chrome-and-windows-exploit-kit/)** - 4つの攻撃グループが同じ Chrome・Windows 向けエクスプロイトキットを使っていた。パッチ適用の遅れと、AI による脆弱性発見の加速が背景として挙げられている。
- **[LLMs respond differently to harmful prompts when AI watermarking is used](https://arstechnica.com/security/2026/09/ai-text-watermarking-can-make-models-more-vulnerable-to-adversarial-prompts/)** - SynthID の透かしを使うと、モデルが本来拒否する有害な指示に従ってしまうことがある、という研究。
- **[Microsoft disrupts AI-assisted platform that compromised 12,000 accounts](https://arstechnica.com/security/2026/09/microsoft-disrupts-ai-assisted-platform-that-compromised-12000/)** - Microsoft が、1.2万アカウントを侵害した EvilTokens を摘発した。大量侵害を端から端まで支援するプラットフォームだった。

## 注目トピック
今日目立つのは AI エージェントの安全性と、証明書・認証基盤の変化だ。Ars Technica は MCP を介したエージェント間の信頼の欠落を報じ、SynthID の透かしが拒否挙動を弱める可能性も指摘している。AWS 側では CI/CD 組み込みのペネトレーションテスト（プレビュー）や Bedrock のコスト属性分析が出ており、エージェントを使うほど「何を信頼するか」と「いくらかかるか」の管理が課題になる。

もう一つは TLS 証明書の短命化と耐量子化だ。Let's Encrypt が2027年2月から有効期間を64日にし、Cloudflare も耐量子 TLS 証明書を計画している。更新の自動化は必須になる。国内では、ローソンやブックオフの個人情報漏えいが続き、本人向けの情報表示機能が侵入経路になった事例も出た。参照系 API の認可設計も見直し対象になる。
