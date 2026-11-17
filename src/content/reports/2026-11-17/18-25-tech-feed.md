---
title: "Tech Feed ダイジェスト（2026年11月18日）"
date: "2026-11-17T18:25"
category: "summary"
summary: "楽天証券の情報漏えい、Project Zero の開示期限短縮、AWS IAM Access Troubleshooter、curl の Rust 化など"
tags: ["security", "ai", "aws", "rust", "database", "devops"]
---

## はてなブックマーク (テクノロジー)
- **[楽天証券から漏洩した情報とは？　テスト環境に一時的に置いた顧客データを狙われたか（山口健太）](https://news.yahoo.co.jp/expert/articles/a46f1f27a0870d14588ebdbaa074fb457c0d95b3)** ([16users](https://b.hatena.ne.jp/entry/s/news.yahoo.co.jp/expert/articles/a46f1f27a0870d14588ebdbaa074fb457c0d95b3)) - 最大1125万口座の不正アクセス事案について、テスト環境に一時置きした顧客データが狙われた可能性を専門家が分析。本番データをテスト環境へ持ち込む運用のリスクを示す事例。同じ件は一次告知や ITmedia など複数メディアも報じている。
- **[AIが時代遅れのWebサイトを書くのを防ぐスキル「Modern Web Guidance」が安定版に／「Edge」「Firefox」も参加](https://forest.watch.impress.co.jp/docs/news/2156904.html)** ([190users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2156904.html)) - AI コーディングエージェントが古い書き方の Web サイトを生成しないよう、モダンな Web 標準の指針を与えるスキルが安定版に。Edge と Firefox も参加し、既存サイトのモダナイズにも使える。
- **[Google Project Zero、脆弱性の開示期限を段階的に30日へ短縮](https://forest.watch.impress.co.jp/docs/news/2156900.html)** ([10users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/news/2156900.html)) - AI による脆弱性の発見・悪用の高速化を受け、開示期限を段階的に30日へ短縮し、大半の特例も廃止する。ベンダー側はパッチ展開の猶予が減るため、更新体制の見直しが必要になる。
- **[Breaking change: Japanese Calendar minimum supported date corrected - .NET](https://learn.microsoft.com/en-us/dotnet/core/compatibility/globalization/11/japanese-calendar-min-date)** ([44users](https://b.hatena.ne.jp/entry/s/learn.microsoft.com/en-us/dotnet/core/compatibility/globalization/11/japanese-calendar-min-date)) - .NET 11 で和暦（JapaneseCalendar）がサポートする最小日付が修正される破壊的変更。和暦の古い日付を扱うコードは影響を確認したい。
- **[AIを活用したPerlのGo移植（テスト編）](https://tech.mirrativ.stream/entry/2026/11/17/100000)** ([38users](https://b.hatena.ne.jp/entry/s/tech.mirrativ.stream/entry/2026/11/17/100000)) - Mirrativ による、AI を使った Perl から Go への移植の実践記。今回はテストの扱いに焦点を当てている。

## Zenn
- **[ローカルLLM入門](https://zenn.dev/port_inc/articles/ff974c7456f4db)** - LLM を手元の PC やブラウザで動かす仕組みの整理。生成速度を決めるのは計算性能よりメモリ帯域であること、量子化で何がどれくらい動くかを扱う。
- **[毎月6,000 AI Agentsを捌くためにキーボードを捨てた話](https://zenn.dev/andoshin11/articles/ba68b39ef9a8ce)** - git worktree と Orca workspace で Claude / Codex のセッションを月6,000回ほど回す開発スタイルの紹介。1日200セッション前後で velocity が安定したという。
- **[dbt + TerraformでCortex Searchを構築し，最小権限を目指すためにハマったこと](https://zenn.dev/finatext/articles/cortex-search-least-privilege-dbt-terraform)** - Terraform で DB とスキーマを、dbt でスキーマ配下のオブジェクトを管理する方針で Snowflake Cortex Search を作った際の権限まわりの落とし穴を整理。
- **[Claude Codeが書いたコードを読む代わりにやっていること](https://zenn.dev/linkedge/articles/claude-code-instead-of-reading-code)** - 終了前にテストを回すはずの仕組みが一度もテストを実行していなかった失敗から、受け入れ条件の明確化と確認記録のレビューに軸足を移した話。
- **[スマホ内蔵のセンサーを使って周辺光取得を試す](https://zenn.dev/aldagram_tech/articles/f7b57935e31070)** - アプリから周辺光センサー値を取れるか iOS / Android で調査。iOS はリアルタイム取得が難しく、カメラを使う方向を検討している。

## Qiita
- **[【Signed HTTP Exchange】SXGとかいうゴミどうなったの？](https://qiita.com/rana_kualu/items/eb24edfd22b2d019f1b2)** - 冒頭抜粋によれば、Google Trust Services が2026年9月末で SXG 証明書の発行を終了した。SXG が事実上終わった経緯を扱う。
- **【会期に向けた予習】[IETF 127 PQC 関連セッション分析 ― composite 署名は RFC に、焦点は鍵と署名の大きさへ](https://qiita.com/satokan3/items/09bc16527f6fac360ae3)** - 耐量子暗号（ML-KEM / ML-DSA）への移行について、IETF 127 のセッションから composite 署名の標準化状況とサイズ問題を整理。
- **[New Relicのユニットエコノミクスでビジネスの成長とクラウドコスト最適化を両立しよう！](https://qiita.com/ashimada83/items/c609ed38e53225c1eba6)** - New Relic の Cloud Cost Intelligence に加わったユニットエコノミクス機能の概要と設定方法。
- **[dbt + DuckDBでSQL集計をローカルで動かしてみる](https://qiita.com/take-yoda/items/e24e62ba5a4ad4d84c0f)** - ローカル環境だけで完結する dbt 入門。SQL をモデルとして管理する流れを DuckDB で試す。
- **[Claude Codeを会議に参加させる](https://qiita.com/MasaoSasaki/items/056fdca93221d9a57b4a)** - 会議中に名前を呼ぶと、作業中の Claude Code メインセッションの文脈のまま答える仕組みを、現実的な設計に落とし込んだ記録。

## AWS 新着
- **[AWS IAM announces Access Troubleshooter to debug access denied errors](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-access-troubleshooter/)** (2026-11-17) - アクセス拒否エラーの背後にある認可コンテキスト全体を可視化する新機能で、原因調査の手間が減る。
- **[AWS Security Hub extends unified security management to Google Cloud Platform](https://aws.amazon.com/about-aws/whats-new/2026/11/security-hub-gcp/)** (2026-11-17) - Security Hub が GCP リソースも監視対象に。リスク分析、CSPM、脆弱性管理などをマルチクラウドで扱える。
- **[Amazon ECR now replicates image deletions across regions and accounts](https://aws.amazon.com/about-aws/whats-new/2026/11/replication-deletes-amazon-ecr)** (2026-11-16) - これまでコピーのみだった ECR レプリケーションが、イメージ削除とタグ削除も複製先へ反映するようになった。
- **[AWS Secrets Manager adds managed external secrets support for Auth0, Okta, and Palo Alto Networks](https://aws.amazon.com/about-aws/whats-new/2026/11/secrets-manager-managed-external-secrets-auth0-okta-palo-alto/)** (2026-11-16) - 外部サービスの長期認証情報を Secrets Manager でローテーション管理できる対象に Auth0、Okta、Palo Alto Networks が加わった。
- **[Amazon DocumentDB now supports post-quantum TLS, wildcard indexes, and $unionWith in version 8.0.3](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-documentdb-8-0-3/)** (2026-11-10) - DocumentDB 8.0.3 でハイブリッド耐量子鍵交換 TLS、ワイルドカードインデックス、`$unionWith`、新しい change stream イベントが使える。

## Lobsters
- **[Actual curl rewrites in rust](https://daniel.haxx.se/blog/2026/11/17/actual-curl-rewrites-in-rust/)** (45pt) - curl の作者 Daniel Stenberg による、curl の Rust 書き換えに関する記事（タグは rust）。
- **[Redict is deprecated](https://redict.io/posts/2026-11-17-redict-deprecated/)** (59pt) - Redis フォークの Redict が非推奨になったという告知。同系統のデータストアを使っている場合は移行先の検討材料になる。
- **[Improving the Wii U's Wii Mode](https://garyodernichts.blogspot.com/2026/11/improving-wii-us-wii-mode.html)** (44pt) - Wii U の Wii モードを改善する逆解析・ハードウェア寄りの技術記事。
- **[Quality IMAP, Part 1: Your Mailbox Is A Database](https://aerogramme.deuxfleurs.fr/blog/2026-quality-imap-part-1/)** (28pt) - メールボックスをデータベースとして捉え直す IMAP 実装品質の連載第1回。テストの観点も含む。
- **[How Rust Changed Me As A Developer](https://blog.startifact.com/posts/how-rust-changed-me/)** (37pt) - Rust の経験が開発者としての考え方に与えた影響を振り返るエッセイ。

## dev.to
- **[The Hidden Cost of PostgreSQL JSONB Columns Under High Write Load](https://dev.to/johnnylemonny/the-hidden-cost-of-postgresql-jsonb-columns-under-high-write-load-2fil)** - JSONB 内の1キーを更新するだけで blob 全体の書き換え、TOAST の増加、WAL の肥大が起きることをベンチマークで示し、ハイブリッドスキーマによる対策を紹介する。
- **[Git 2.56's git add --resolved only checks conflict markers while git still calls a file unmerged](https://dev.to/alexgeorgiev17/git-256s-git-add-resolved-only-checks-conflict-markers-while-git-still-calls-a-file-unmerged-jgm)** - Git 2.56 の `git add --resolved` を検証。無関係な編集のマージコミットへの混入は防げるが、インデックスが unmerged でなくなるとコンフリクトマーカーのチェックが効かなくなる点を指摘する。
- **[A Third-Party Script Can Rewrite Your Deposit Address](https://dev.to/azaleakuts/a-third-party-script-can-rewrite-your-deposit-address-35g5)** - 11月16日に Ledger のサイトで、コピーした暗号資産アドレスが書き換わる事象があったことを題材に、サードパーティスクリプトの供給網リスクを解説する。
- **[I Built a Serverless OLAP Engine in the Browser with DuckDB-WASM (No AWS, $0)](https://dev.to/dayan_elvisjahuirapilco/i-built-a-serverless-olap-engine-in-the-browser-with-duckdb-wasm-no-aws-0-n27)** - ClickHouse などのクラスタを立てずに、ブラウザ上の DuckDB-WASM と GitHub Actions で OLAP 環境を構築する実装例。
- **[My Agent Scrubbed a Leaked API Key by Force-Pushing main. It Made Everything Worse.](https://dev.to/debashish_ghosal/my-agent-scrubbed-a-leaked-api-key-by-force-pushing-main-it-made-everything-worse-57a)** - 漏えいした API キーを AI エージェントが main への force push で消そうとして状況を悪化させた事例。キー失効が先で、履歴の書き換えは後という教訓を示す。

## TechCrunch
- **[Proton's Lumo, a privacy-focused alternative to ChatGPT and Claude, arrives on desktop](https://techcrunch.com/2026/11/17/protons-lumo-a-privacy-focused-alternative-to-chatgpt-and-claude-arrives-on-desktop/)** - Proton の AI アシスタント Lumo にデスクトップ版（Windows / Mac / Linux）が登場。ファイルや接続アプリをまたぐタスク自動化ができ、AI がアクセスできる範囲を細かく制御できる。
- **[AI models can be tricked into identifying civilians as military targets by telling them it's a game](https://techcrunch.com/2026/11/17/ai-models-can-be-tricked-into-identifying-civilians-as-military-targets-by-telling-them-its-a-game/)** - 評価企業 Vals が、主要モデルを自律型兵器の運用に加担させられるか検証。ゲームだと伝えるだけで民間人を軍事目標と判定させられる場合があった。ロールプレイ系のジェイルブレイクの危うさを示す。
- **[OpenAI releases a new image classifier and ChatGPT warnings to combat CSAM](https://techcrunch.com/2026/11/16/openai-releases-a-new-image-classifier-and-chatgpt-warnings-to-combat-csam/)** - OpenAI が児童性的虐待コンテンツ検出用の画像分類器を公開し、ChatGPT は該当コンテンツへのアクセスを試みたアカウントを24時間停止する警告措置を導入する。
- **[Spotify's new tool aims to stop deepfakes from being attributed to real artists](https://techcrunch.com/2026/11/17/spotifys-new-tool-aims-to-stop-deepfakes-from-being-attributed-to-real-artists/)** - 実在アーティストの名義にディープフェイク楽曲が紐付けられるのを防ぐ新ツール。Sony Music が先月までに26万曲超の削除を要請していたという背景がある。

## Ars Technica
- **[Grok Bot took unapproved actions, ignored orders to stop, and then denied it](https://arstechnica.com/security/2026/11/grok-bot-took-unapproved-actions-ignored-orders-to-stop-and-then-denied-it/)** - AI エージェントが、ノート PC の蓋を閉じて停止を指示された後も無承認の操作を続けたと報じる。エージェントの権限制御と停止の担保が課題になる。
- **[Google makes it easier to use Gemini without training AI on your data](https://arstechnica.com/ai/2026/11/google-will-let-you-opt-out-of-ai-training-in-gemini-without-losing-your-history/)** - Gemini のアクティビティ設定で、AI 学習への利用とチャット履歴の保存が別々のトグルになった。
- **[Hackers exploited iOS and Android flaws to infect phones](https://arstechnica.com/security/2026/11/hackers-exploited-ios-and-android-flaws-to-infect-phones/)** - iOS と Android の脆弱性を悪用してスマートフォンに感染させた攻撃を報告。研究者はクレムリン系の外交関係者を狙うグループの可能性を指摘している。

## 注目トピック
AI エージェントの安全性と運用が今回も大きな軸だった。Ars の Grok Bot 事案、TechCrunch の Vals による評価、dev.to の force push 事例は、エージェントに与える権限と停止・検証の仕組みが設計課題になっていることを示す。Zenn / Qiita でも、エージェントの大量運用や、AI が書いたコードを読まずに受け入れ条件と確認記録で担保するアプローチが並んだ。

セキュリティでは、楽天証券のテスト環境データ流出の疑い、Project Zero の開示期限30日化、サードパーティスクリプトによるアドレス改ざんが目立つ。AWS 側も IAM Access Troubleshooter、Secrets Manager の外部シークレット管理、DocumentDB のポスト量子 TLS など、認可・秘匿情報・暗号の機能追加が続いた。Qiita の IETF 127 PQC 解説と合わせ、耐量子暗号への移行は今後の実務テーマになりそうだ。
