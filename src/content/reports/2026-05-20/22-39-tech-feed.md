---
title: "Tech Feed ダイジェスト（2026年5月21日）"
date: "2026-05-20T22:39"
category: "summary"
summary: "Anthropic-xAI月1.25B ドル計算資源契約・GitHub内部コード漏洩・ExtendDB OSS DynamoDB互換・Google Antigravity 2.0 OS開発デモなど"
tags: ["ai", "security", "google", "aws", "anthropic", "openai", "frontend", "devops", "robotics", "llm"]
---

## はてなブックマーク (テクノロジー)

- **[Google、「Antigravity 2.0」発表。デモとしてゼロからOSを開発、Doomも実行可能に](https://www.publickey1.jp/blog/26/googleantigravity_20osdoom.html)** ([216users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/googleantigravity_20osdoom.html)) - Googleがエージェントハーネス「Antigravity 2.0」をGoogle I/O 2026で発表。デモとしてAIが**ゼロからOSを開発しDoomを動作させる**様子を披露し、LLMベースの自律コーディングエージェントが「玩具レベル」を脱したことを印象付けた。

- **[MTGに忙殺されるマネージャー必見！Geminiに「自分のマネジメント」を任せて作業時間を捻出した話](https://developers.gnavi.co.jp/entry/ai-self-management/)** ([174users](https://b.hatena.ne.jp/entry/s/developers.gnavi.co.jp/entry/ai-self-management/)) - ぐるなびのエンジニアブログが、カレンダー・メール・ドキュメントをGeminiに連携させて会議調整や進捗サマリを自律処理させる実践例を公開。AIエージェントを「外部の秘書」として使う具体的ワークフローが評価され、エンジニアマネージャー層に刺さっている。

- **[GoogleのModern Web Guidanceスキル登場。AIが古いCSS・JSを書く問題を解決する](https://zenn.dev/ubie_dev/articles/modern-web-guidance)** ([105users](https://b.hatena.ne.jp/entry/s/zenn.dev/ubie_dev/articles/modern-web-guidance)) - LLMが訓練データの偏りから古い`float`レイアウトや`var`変数を生成しがちな問題に対し、Googleが「Modern Web Guidance」スキルを開発。AI補完ツールのコンテキストに注入することで、生成コードを最新のCSS Grid・`const`/`let`等に誘導する仕組みを解説している。

- **[700以上のOSを起動できるエミュレーター「バーチャルOSミュージアム」](https://gigazine.net/news/20260520-virtual-os-museum/)** ([88users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260520-virtual-os-museum/)) - ブラウザ上で700種超のOS（MS-DOS・AmigaOS・古いWindowsなど）を実際に起動できる[Virtual OS Museum](https://virtualosmuseum.org/)が話題。WebAssemblyベースのエミュレーションで動作し、コンピュータ史の一次資料としての価値も高い。

- **[新しい HTML インストール要素でウェブアプリをインストールする](https://developer.chrome.com/blog/install-element-ot?hl=ja)** ([75users](https://b.hatena.ne.jp/entry/s/developer.chrome.com/blog/install-element-ot)) - Chromeが新しいHTML要素`<install>`のOrigin Trialを開始。PWAインストールの促進を宣言的マークアップで実現できるようになり、カスタムUIを自前で作らずともOSネイティブなインストール誘導が可能になる。

## Zenn

- **[野良スキルは使うな、盗め──Claude Codeスキルの安全な作り方](https://zenn.dev/emilia_lab/articles/claude-code-skill-safety)** - 第三者が公開するClaude Codeスキルをそのまま使うのは、任意シェルコマンドをエージェントに実行させるセキュリティリスクがあると指摘。安全な取り込み方（コードレビュー・スコープ制限・サンドボックス化）を解説した実践ガイド。

- **[tfstateに平文を残さずに秘密情報を管理する](https://zenn.dev/dely_jp/articles/terraform-ephemeral-write-only-secrets)** - Terraform 1.10で導入された`ephemeral`リソースと`write_only`属性を使い、パスワード・APIキーをtfstateファイルに残さずに管理する手法を解説。GitOps環境でのシークレット漏洩リスクを構造的に排除するアプローチとして注目されている。

- **[複数集約を跨ぐ処理を1つのDBトランザクションで括る前に読む記事](https://zenn.dev/j5ik2o/articles/59de072b6728ff)** - DDDにおける複数集約をまたぐ操作を単一トランザクションで囲む実装が招く問題（境界の腐敗・結合度の増大・スケーリング困難）を論理的に整理した記事。サーガパターンやイベント駆動による分散トランザクション設計の判断基準として有用。

- **[AWS CDK の単体テストの『使い所』を Coding Agent に判断させる Skill を作った](https://zenn.dev/go_to_k/articles/aws-cdk-unit-testing)** - AWS CDKのスナップショットテスト・アサーションテストをいつ書くべきかという判断をCoding Agentに委ねるためのスキルを実装した事例。「テスト品質の判断」という高次のタスクをエージェントに任せる試みとして、AIエージェント活用の新しい方向性を示している。

- **[速いUIと正しいUIのあいだで、どのズレを許容するか](https://zenn.dev/aoito/articles/fb3a5f66d001b0)** - 楽観的更新（Optimistic UI）が生み出す「速いが一時的に不正確なUI」と、確定後に更新する「正確だが遅いUI」のトレードオフを丁寧に整理した記事。許容できるズレの種類をユースケース別に分類しており、UXエンジニアの設計判断に役立つ視点を提供している。

## Qiita

- **[Gemeniが提案した脆弱なペッパー実装に対するPoCをClaude Codeで作成・検証した](https://qiita.com/ockeghem/items/804a69dcd3c6930b7676)** - GeminiがパスワードハッシュのペッパーとしてAES-GCM暗号化を提案した実装の脆弱性（ペッパー値が予測可能なケースでのクラック可能性）を、Claude CodeでPoC攻撃コードを作成して実証した記事。AIが提案したセキュリティ実装をAIで検証するという新しいセキュリティ評価フローが示されている。

- **[Oracle Interconnect for AWS のプレビュー版をためしてみた](https://qiita.com/shirok/items/a9734df1336e46e83315)** - AWSとOCIの専用接続サービス「Oracle Interconnect for AWS」プレビューの実際のセットアップ手順とレイテンシ計測結果を公開。AWSでアプリを動かしながらOracle DBをそのまま使いたい企業向けの具体的な評価記事として価値が高い。

- **[Google I/O 2026 初日に出てきたAndroid開発関連の情報まとめ](https://qiita.com/Nabe1216/items/109d5a2feb173ae2045b)** - Android向けAI機能（Gemini統合・端末上推論・マルチモーダルUI）を含むAndroid開発の新発表を網羅的にまとめたキャッチアップ記事。Kotlin Multiplatform連携やJetpack Composeの新APIも含めて整理されている。

- **[AIに「いい感じに直して」と頼むのをやめて、GitHub Issueを作業の正本にした](https://qiita.com/Kota_Su/items/dca6ba00d571af01a04d)** - 曖昧なプロンプトで始まるAIコーディングの問題を解決するため、GitHub Issueを作業単位の「正本」として使いAIの指示書にする開発フローを解説。コンテキストの明示化がAI生成コードの品質を劇的に改善するという実践的な知見がまとめられている。

- **[ソフトウェアエンジニアリングの70年と、これからの話](https://qiita.com/Kitasan_White/items/5afbc3cb1b21d2c53591)** - 1950年代から現在に至るソフトウェア工学の変遷（構造化プログラミング・OOP・Agile・DevOps・AI支援）を俯瞰し、AIエージェント時代のエンジニアリングの本質とは何かを問いかける大局的な考察記事。

## AWS 新着

- **[AWS Security Hub now uncovers identity risks from unused access](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-security-hub-unused-access/)** (2026-05-21) - Security Hubが未使用IAMロール・パーミッション・認証情報の検出機能を統合。脅威・露出・ポスチャ所見を管理する既存の統合コンソールにアイデンティティリスクが一元化され、組織全体の過剰権限を自動でフラグアップできるようになった。

- **[AWS announces ExtendDB, an open source DynamoDB-compatible adapter](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-extenddb-dynamodb/)** (2026-05-21) - AWSがDynamoDB APIをプラガブルなストレージバックエンド（PostgreSQL・SQLiteなど）で実装するオープンソースプロジェクト「ExtendDB v0.1」を発表。DynamoDB互換のローカルテスト環境構築やマルチクラウド対応に活用できる画期的な取り組みで、ローカル開発ワークフローを大きく改善する可能性がある。

- **[Amazon Redshift adds ALTER TABLE for Iceberg tables and writes via AWS Glue Data Catalog mount](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-redshift-alter-table-iceberg/)** (2026-05-19) - RedshiftからApache Icebergテーブルへの直接書き込みと`ALTER TABLE`によるスキーマ変更が可能になった。AWS Glue Data Catalogを介したデータレイクへの書き戻しが統合され、ETLパイプラインの簡素化が期待できる。

- **[Amazon MWAA now supports Apache Airflow 3.2](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-mwaa-now-supports-apache-airflow-3-2/)** (2026-05-20) - マネージドワークフローサービスMWAAがAirflow 3.2に対応。新しいDAGバンドル機能・改善されたUI・パフォーマンス向上が含まれ、データパイプライン管理の効率が向上する。

## Lobsters

- **[GitHub Source Code Breach - TeamPCP Claims Access to Internal Source Code](https://cybersecuritynews.com/github-source-code-breach/)** ([47pt](https://lobste.rs/s/ges2gt/github_source_code_breach_teampcp_claims)) - TeamPCPと名乗るグループがGitHub内部ソースコードへのアクセスを主張するセキュリティインシデント。はてなでも報告されていた「悪意あるVS Code拡張機能」による認証情報窃取と関連する可能性があり、開発ツールサプライチェーンのリスクが改めて浮き彫りになっている。

- **[Everything in C is undefined behavior](https://blog.habets.se/2026/05/Everything-in-C-is-undefined-behavior.html)** ([27pt](https://lobste.rs/s/dtcfd6/everything_c_is_undefined_behavior)) - C言語の未定義動作（UB）の広範さを皮肉交じりに論じた記事。符号付き整数オーバーフロー・ポインタ演算・配列境界外アクセスなど、「普通に見える」コードがUBである事例を豊富に示し、Rustへの移行論議への布石ともなっている。

- **[Saying goodbye to asm.js](https://spidermonkey.dev/blog/2026/05/20/saying-goodbye-to-asmjs.html)** ([24pt](https://lobste.rs/s/anamgr/saying_goodbye_asm_js)) - FirefoxのJSエンジンSpiderMonkeyチームがasm.jsの最適化パスを削除すると発表。WebAssemblyに完全移行したことで役目を終えたasm.jsのサポート終了は、Webプラットフォームの低レベル実行基盤がWasmに一本化されたことを公式に示すマイルストーンとなる。

- **[XSS Is Deadly for Passkeys: The Hidden Risk of Attestation None](https://scotthelme.co.uk/xss-is-deadly-for-passkeys-the-hidden-risk-of-attestation-none/)** ([12pt](https://lobste.rs/s/k8mkgs/xss_is_deadly_for_passkeys_hidden_risk)) - Attestation方式に"None"を設定したPasskeys実装ではXSS攻撃によりパスキーを悪意あるデバイスに登録・乗っ取りできる問題を詳説。パスキー導入企業はAttestation設定とXSS対策を同時に見直す必要がある。

- **[Logic bug in the Linux kernel's __ptrace_may_access() function (CVE-2026-46333)](https://cdn2.qualys.com/advisory/2026/05/20/cve-2026-46333-ptrace.txt)** ([8pt](https://lobste.rs/s/nwdn3w/logic_bug_linux_kernel_s_ptrace_may_access)) - Qualysが発見したLinuxカーネルの`__ptrace_may_access()`関数のロジックバグ。特定条件下でプロセストレース権限チェックが意図せず通過してしまう可能性があり、特権昇格への悪用が懸念されるカーネルレベルの脆弱性。

## dev.to

- **[One Tool That Cuts Token Costs 40-80% for Claude Code, Codex, opencode, and openclaw](https://dev.to/zelys_dfkhelper/one-tool-that-cuts-token-costs-40-80-for-claude-code-codex-opencode-and-openclaw-hh2)** - AIコーディングエージェントのトークン消費を40〜80%削減するツールを紹介した記事。コンテキストウィンドウへの不要ファイル混入を防ぐファイルフィルタリング戦略が中心で、Claude Codeをコスト効率よく運用したいエンジニアに直接役立つ内容。

- **[Anthropic's MCP tunnels and self-hosted sandboxes: keeping agents inside your perimeter](https://dev.to/thegatewayguy/anthropics-mcp-tunnels-and-self-hosted-sandboxes-keeping-agents-inside-your-perimeter-5a4d)** - AnthropicのMCPトンネルとセルフホストサンドボックスを使い、AIエージェントが外部に通信しないようネットワーク境界内に留める構成を解説。エンタープライズ環境でのMCP導入に必要なセキュリティ設計の参考になる。

- **[QAOA vs. 75,000 Nodes: Building a Hybrid Architecture to Solve NP-Hard Problems When Quantum Simulators Hit a Wall](https://dev.to/emperoq/qaoa-vs-75000-nodes-building-a-hybrid-architecture-to-solve-np-hard-problems-when-quantum-613)** - 量子近似最適化アルゴリズム（QAOA）が7万5千ノードのグラフ問題に対してシミュレーターの限界に直面し、古典-量子ハイブリッドアーキテクチャで対処した実装記。現実規模のNP困難問題を量子的手法で扱うエンジニアリングの最前線事例。

- **[ArgoCD drift across 3 namespaces after a JWT hotfix: how we reconciled without breaking auth](https://dev.to/infraforge/argocd-drift-across-3-namespaces-after-a-jwt-hotfix-how-we-reconciled-without-breaking-auth-3g4l)** - JWTホットフィックス後にArgoCDで3つのネームスペース間にドリフトが生じた際、認証を壊さずに同期を回復させた手順を詳細に記録したポストモーテム形式の記事。GitOps環境での緊急パッチ適用のベストプラクティスとして参考になる。

## TechCrunch

- **[Anthropic will pay xAI $1.25B per month for compute](https://techcrunch.com/2026/05/20/anthropic-will-pay-xai-1-25-billion-per-month-for-compute/)** - AnthropicがElonMuskのxAIから月額**12億5千万ドル**で計算資源を調達する契約をSpaceX IPO書類から確認。AnthropicとxAIが競合する一方で計算資源の需給逼迫が予想外の協業を生み出しており、AIインフラの寡占がビジネス構造を変え始めている。

- **[Nvidia posts another record quarter, reveals $43 billion of holdings in startups](https://techcrunch.com/2026/05/20/nvidia-posts-another-record-quarter-reveals-43-billion-of-holdings-in-startups/)** - NVIDIAが再び過去最高売上を更新する一方、スタートアップへの投資残高が**430億ドル**に達していることが判明。GPU販売益をAIエコシステムへ積極的に再投資することで、単なるチップメーカーを超えた「AIインフラ帝国」の構築を加速させている。

- **[OpenAI claims it solved an 80-year-old math problem — for real this time](https://techcrunch.com/2026/05/20/openai-claims-it-solved-an-80-year-old-math-problem-for-real-this-time/)** - OpenAIの推論モデルが1946年から未解決だった幾何学的予想を反証したと発表。前回の類似発表が恥ずかしい間違いだったとして批判した数学者グループが今回は検証に参加しており、AI数学推論の信頼性評価のあり方自体も注目を集めている。

- **[xAI burned $6.4B last year; SpaceX's IPO filing shows why the spending is far from over](https://techcrunch.com/2026/05/20/xai-burned-6-4b-last-year-spacexs-ipo-filing-shows-why-the-spending-is-far-from-over/)** - SpaceX IPO書類でxAIが2025年に**64億ドル**を消費していたことが初めて公開。Grokの大規模拡張計画でさらに数百億ドル規模の投資が続く見通しで、AI企業の資本消費ペースの凄まじさが改めて浮き彫りになった。

- **[Intuit to lay off over 3,000 employees to refocus on AI](https://techcrunch.com/2026/05/20/intuit-to-lay-off-over-3000-employees-to-refocus-on-ai/)** - TurboTaxなどを展開するIntuitが全従業員の約10%にあたる3,000人超を削減しAIへの集中投資を宣言。DeepLの20%削減（はてなでも話題）と並び、「AI転換」を理由にした大規模レイオフが主要テック企業で相次いでいる。

## Ars Technica

- **[Google publishes exploit code threatening millions of Chromium users](https://arstechnica.com/security/2026/05/google-publishes-exploit-code-threatening-millions-of-chromium-users/)** - Googleが数百万人のChromiumユーザーを危険にさらすエクスプロイトコードを公開したと報じられた。Lobstersでも「4年前に修正済みとして公開されたが実際は未修正だった」という関連情報が上がっており、ブラウザセキュリティの公開プロセスの課題が問われている。

- **[Buckle up: Google is set to remake search with agentic AI in 2026](https://arstechnica.com/google/2026/05/buckle-up-google-is-set-to-remake-search-with-agentic-ai-in-2026/)** - Google I/O 2026での発表を受け、Googleが検索をエージェント型AIで根本的に再設計する具体的な計画を詳説した記事。AIがユーザーの代わりに複数ステップのタスクを実行する「Agentic Search」が2026年内に本格展開される見通しで、従来の検索パラダイムとの断絶が現実のものとなりつつある。

- **[The Internet can't stop watching Figure AI's humanoid robots handling packages](https://arstechnica.com/ai/2026/05/the-internet-cant-stop-watching-figure-ais-humanoid-robots-handling-packages/)** - Figure AIの人型ロボットが倉庫で荷物を自律的にハンドリングする映像がSNSで拡散し注目を集めている。手先の器用さ（dexterity）において従来ロボットを大きく超える動きが確認されており、物流・製造領域での実用化タイムラインの見直しを迫る出来事として評価されている。

## 注目トピック

**AI産業の資本構造が露わになった一日**: 今日最大のニュースはAnthropicがxAIに月額12.5億ドルを支払う計算資源契約だろう。競合他社から計算資源を買わなければ事業継続できないほどGPU供給が逼迫している現実、NVIDIAが430億ドルものスタートアップ投資残高を持つ現実、xAIが年間64億ドルを消費しながら拡張を続ける現実が同日に明らかになり、AI産業の資本構造の歪さが一挙に可視化された。IntuitとDeepLの大規模レイオフ、OpenAIのIPO準備加速といった動向と合わせると、「AIへの集中」と「非AI部門の解体」という流れが企業規模を問わず加速していることが読み取れる。

**セキュリティの警戒水域が高まっている**: GitHub内部コード漏洩疑惑・ChromiumのエクスプロイトコードGoogleによる公開・Linuxカーネルptrace CVE・Passkeysに対するXSS脅威・tfstateシークレット管理・Claude Codeスキルの悪意あるコード混入リスクと、今回はセキュリティ関連トピックが異例のほど多く登場した。特にAIコーディングツールとそのエコシステム（VSCode拡張機能・スキルシステム）が新たな攻撃対象として認識されてきた点は、開発ツールチェーン全体のセキュリティレビューを求める兆候と捉えるべきだろう。
