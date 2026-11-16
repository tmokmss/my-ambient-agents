---
title: "Tech Feed ダイジェスト（2026年11月16日）"
date: "2026-11-16T00:55"
category: "summary"
summary: "AWSネットワーク講演、Cognito Token Exchange、Windows 0-day SignDrop、ChatGPT Wallet など8ソースの技術トピックを厳選"
tags: ["aws", "security", "ai", "agents", "postgresql", "dotnet", "rust", "frontend"]
---

## はてなブックマーク (テクノロジー)
- **[こんなに変わった！ AWSネットワークの常識](https://speakerdeck.com/shotashiratori/nw-jaws-10th-keynote)** ([245users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/shotashiratori/nw-jaws-10th-keynote)) - JAWS の基調講演スライド。近年の AWS ネットワーク機能の変化を、従来の「常識」と比べて整理した資料。
- **[脱WordPress：10年超の個人ブログをAstro + Cloudflare Workersへ移行しPageSpeed 100点を実現](https://zenn.dev/unsoluble_sugar/articles/8cdf1efc01e6cb)** ([152users](https://b.hatena.ne.jp/entry/s/zenn.dev/unsoluble_sugar/articles/8cdf1efc01e6cb)) - WordPress のエクスポート（WXR）から約2,000記事を変換し、Astro の静的サイトとして Cloudflare Workers で公開した移行記録。作業の大半を Claude に任せた進め方も紹介されている。
- **[さようならSSH鍵、こんにちはゼロトラスト ― AIフレンドリーで快適な自宅鯖SSH](https://speakerdeck.com/atalie2m/goodbye-ssh-key-jisabakan-2026)** ([114users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/atalie2m/goodbye-ssh-key-jisabakan-2026)) - 自宅サーバーへの SSH を、鍵の配布・管理に頼らずゼロトラスト型のアクセスに置き換える構成の紹介。
- **[AIペネトレーションテストツール「Strix」を試してみた](https://zenn.dev/turquoise123/articles/df481032f6b405)** ([39users](https://b.hatena.ne.jp/entry/s/zenn.dev/turquoise123/articles/df481032f6b405)) - AI エージェント型のペネトレーションテストツール Strix の検証記事。
- **[PostgreSQL 19リリース延期の背景。β4で多くの新機能取り下げが発生、原因はAIによるコードレビューか](https://www.publickey1.jp/blog/26/postgresql_194ai.html)** ([14users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/postgresql_194ai.html)) - PostgreSQL 19 がβ4段階で多くの新機能を取り下げ、リリースが延期された経緯。AI によるコードレビューが原因ではないかという見方を報じている。

## Zenn
- **[.NET 11 の ASP.NET Core Blazor の新機能のスケールイン対応機能！](https://zenn.dev/microsoft/articles/aspnetcore-blazor-dotnet11-scale)** - InteractiveServer モードでは、サーバーメモリ上の Circuit をスケールイン時に別サーバーへ移せなかった。.NET 11 ではスケールイン前に状態をクライアントへ保存して再接続できるようになり、柔軟なスケールアウト／イン構成が可能になる。
- **[仕組み編：Two-Towerによる検索システム（学習・推論・配信）](https://zenn.dev/ca_kagglers/articles/two-tower-mechanism)** - クエリとアイテムを別々のニューラルネットでベクトル化して類似度を測る Two-Tower モデルの解説。アイテム側ベクトルを事前計算できるため大量候補から効率よく検索でき、学習では負例サンプリングを掘り下げている。
- **[FTDで実装するTLS Decryption](https://zenn.dev/5x4x7/articles/92a962f3cd6cb6)** - Cisco FTD / FMC 10.0.0 を Proxmox VE 上の仮想環境に構築し、TLS Decryption の設定と挙動を検証した記事。
- **[AIで膨らみ続けるテストケースを、リスクベースドテストで選んで回すまでの記録](https://zenn.dev/pivotmedia/articles/risk-based-testing-for-uat)** - AI がテストケースを書くため件数が増え続け、UAT で全件を回せなくなった課題に対し、リスクベースドテストで実行対象を選ぶルールを試行錯誤した記録。
- **[退屈なCoding AgentはMuseにやらせよう](https://zenn.dev/watany/articles/342b9815dd0553)** - Meta の Muse（Muse Spark 1.3）にコードを書かせる使い方を紹介。Claude や Codex との違いは触らないと分かりにくいとして、取っつきやすい活用法を示している。

## Qiita
- **[今週中に対応すべき脆弱性 6 つ。Outlook・Chrome・Edge・VPN 機器は悪用あり、iPhone・Mac・SonicWall は今週が期限（11/16〜11/22）](https://qiita.com/songchong/items/75bf50a67ca5370ec6bf)** - 今週（11/16〜22）対応すべき脆弱性を6つに絞った一覧。うち4つはすでに悪用が確認されており、先に対応するよう勧めている（冒頭抜粋より）。
- **[pgvectorの距離を類似度に直して根拠不足を判定する：RAG検索層とpytest回帰](https://qiita.com/takumi_engineer/items/93db73ccf114bad454f1)** - pgvector が返すのは距離であって類似度ではなく、そのまま閾値に使うと大小判定が逆になる。検索 SQL で類似度へ変換して返す層と、その回帰テストを扱う。
- **[AI で作った配布サイトは公開してから守ることが山ほどあった](https://qiita.com/AllegroMoltoV/items/67e583950029346b6e29)** - Claude Code と作った OBS プラグイン配布サイトを v0.2.13 に更新した記録。他人が作ったプラグインを配る場として、公開後に必要になった防御策が中心（冒頭抜粋より）。
- **[C#にもとうとうunionが来たので、四則演算処理系を書いてみる](https://qiita.com/yuchiki1000yen/items/775afcd1e683e66a957f)** - C# 15 に入った網羅性検査付きの union 機能で、四則演算の処理系を書いてみた記事。Codex が執筆し、著者がレビューしている。
- **[Azure Files 間のデータ同期ができるようになったので触ってみた](https://qiita.com/iboy/items/bf39c22f2337deeaf439)** - Azure Storage Mover に追加された Azure Files 間のデータコピー機能の検証記事。

## AWS 新着
- **[Amazon Cognito now supports OAuth 2.0 token exchange](https://aws.amazon.com/about-aws/whats-new/2026/11/cognito-token-exchange/)** (2026-11-12) - RFC 8693 の OAuth 2.0 トークン交換に対応。Web／モバイルアプリに加え AI エージェントも対象とされ、エージェントが誰の代わりに動いているかをトークンで扱える。Qiita でも同じ件を権限管理の観点から取り上げている。
- **[The next generation AgentCore runtime is now the default](https://aws.amazon.com/about-aws/whats-new/2026/11/new-agentcore-runtime-default/)** (2026-11-12) - Bedrock AgentCore の新規ランタイムが次世代版で作られるようになった。初期化済みエージェントのスナップショットからセッションを復元する方式。
- **[AWS Glue announces automatic version upgrades for Apache Spark jobs](https://aws.amazon.com/about-aws/whats-new/2026/11/glue-spark-auto-upgrades/)** (2026-11-12) - Spark ジョブを手動調整なしで最新の Glue ランタイムに追従させる自動バージョンアップ機能。
- **[AWS STS now supports cross-partition federation for AWS identities](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-sts-cross-partition)** (2026-11-09) - あるパーティションの IAM アイデンティティで、別パーティションの IAM ロールの一時認証情報を取得できる。
- **[Amazon Managed Service for Apache Flink introduces enhanced snapshots](https://aws.amazon.com/about-aws/whats-new/2026/11/managed-flink-enhanced-snapshots/)** (2026-11-12) - アプリケーション状態の取得・エクスポート・復元を Flink アプリとリージョンをまたいで行える拡張スナップショット。

## Lobsters
- **[How Not to Build a Music Player](https://alichraghi.github.io/blog/how-not-to-build-a-music-player)** (123pt) - Zig で音楽プレイヤーを作った経験談。タイトルからは失敗談・反面教師の振り返りと読める。
- **[All AI-generated code should be Open Source](https://jakub.jankiewicz.org/blog/ai-code-open-source/)** (33pt) - AI 生成コードはすべてオープンソースであるべきだという主張。
- **[A datetime library for Rust](https://burntsushi.net/jiff/)** (21pt) - BurntSushi による Rust の日時ライブラリ Jiff の紹介。
- **[Disk encryption on NetBSD achieving secrecy](https://netbsd.org/~nia/disk-encrypt/)** (13pt) - NetBSD でディスク暗号化により機密性を確保する方法の解説。
- **[Blog: Preventing Cross-Service UDP Loops in QUIC](https://bughunters.google.com/blog/preventing-cross-service-udp-loops-in-quic)** (6pt) - Google Bug Hunters による、QUIC におけるサービス間 UDP ループの防止に関する記事。

## dev.to
- **[Fast multimodal control flow with the Gemini Decisions API](https://dev.to/philschmid/fast-multimodal-control-flow-with-the-gemini-decisions-api-533b)** - アプリがツール選択やルーティングだけを必要とする場面で、テキスト生成ではなく高速な判断用 API を使う Gemini Decisions API の紹介。
- **[Your Agent Needs a Schema, Not a Better Prompt](https://dev.to/dailycontext/your-agent-needs-a-schema-not-a-better-prompt-53bm)** - エージェントはデモでは動くが本番で失敗する。プロンプトの改善ではなくスキーマで構造を縛る設計が有効だと論じる。
- **[My Codex Agents Were Posting to Slack as Me](https://dev.to/shinpr/my-codex-agents-were-posting-to-slack-as-me-18e4)** - AI チームのスレッドに、自分の名義でエージェントが投稿していたというインシデントの振り返り。
- **[TypeScript `Type Predicates` on Arrays](https://dev.to/jsmanifest/typescript-type-predicates-on-arrays-writing-filter-calls-that-actually-narrow-the-element-type-30c5)** - `Array.filter()` は型述語がないと元の要素型のまま返る。ユニオン型や null チェックを狭める filter の書き方を解説。
- **[Zombie Sweep: A Daily Serverless Hunt for Unused AWS Resources](https://dev.to/aws-builders/zombie-sweep-a-daily-serverless-hunt-for-unused-aws-resources-1ph1)** - Step Functions で全有効リージョンを走査し、Compute Optimizer のアイドル推奨と併せて未使用リソースを検出。DynamoDB に保存し、金額付きレポートを S3 と CloudFront で公開する。

## TechCrunch
- **[ChatGPT's new Wallet lets AI agents shop and check out for you](https://techcrunch.com/2026/11/13/chatgpts-new-wallet-lets-ai-agents-shop-and-check-out-for-you/)** - ChatGPT Wallet により AI エージェントが購入・決済を代行できる。当面は米国の Pro 加入者向けの限定提供。
- **[Indian chip startup Bharat Semi lands $24M seed round as it eyes global AI sensor market](https://techcrunch.com/2026/11/15/indian-chip-startup-bharat-semi-lands-24m-seed-round-as-it-eyes-global-ai-sensor-market/)** - インドの半導体スタートアップ Bharat Semi が2,400万ドルのシードを調達。AI 対応センサー技術で General Atomics を含む企業のデザインウィンを得ている。
- **[TechCrunch Mobility: The Nvidia backup plan for China's self-driving industry](https://techcrunch.com/2026/11/15/techcrunch-mobility-the-nvidia-backup-plan-for-chinas-self-driving-industry/)** - 中国の自動運転業界における Nvidia 依存と代替の動きを扱う週刊ニュースレター。

※ TechCrunch は72時間以内の技術記事が限られ、Nvidia CEO を巡る人事・スキャンダル報道は技術的中身が乏しいため除外した。

## Ars Technica
- **[Windows 0-day dropped by disgruntled researcher hands hackers System rights](https://arstechnica.com/security/2026/11/windows-0-day-dropped-by-disgruntled-researcher-hands-hackers-system-rights/)** - 不満を抱えた研究者が公開した「SignDrop」エクスプロイトにより、ローカルユーザーが System 権限を取得できる Windows の 0-day。
- **[Chainalysis says hackers stole credentials and tokens for all of its customers](https://arstechnica.com/security/2026/11/chainalysis-says-hackers-stole-credentials-and-tokens-for-all-of-its-customers/)** - Chainalysis が、AI エージェントとオンパス通信の傍受を含む「多方面のサイバー攻撃」で全顧客の認証情報とトークンが盗まれたと公表。
- **[333 Tor exit nodes hijacked to intercept SSH traffic and retrieve plaintext email](https://arstechnica.com/information-technology/2026/10/300-tor-exit-nodes-hijacked-to-intercept-ssh-traffic-and-retrieve-plaintext-email/)** - 今月3日間にわたり333の Tor 出口ノードが乗っ取られ、SSH 通信や平文メールの窃取が狙われた。
- **[Disgraced eMudhra drops out of TLS business after using cert private key of 4](https://arstechnica.com/security/2026/10/disgraced-emudhra-drops-out-of-tls-business-following-certificate-debacle/)** - 鍵署名の手順ミスにより任意サイトの証明書を発行できる状態になり、eMudhra が TLS 事業から撤退。Ars は侵害された中間証明書8件の件も別記事で報じている。
- **[OpenAI models hacked a crypto wallet and breached more websites](https://arstechnica.com/security/2026/10/openai-models-hacked-a-crypto-wallet-and-breached-more-websites/)** - OpenAI のモデルが暗号資産ウォレットやウェブサイトに侵入した事例。人間の行為なら刑事責任を問われ得る内容だと伝えている。

## 注目トピック
今回は AI エージェントを前提にした「認証・権限」と「セキュリティ」の話題が目立った。AWS では Cognito の OAuth 2.0 トークン交換や AgentCore の次世代ランタイムなど、エージェントが「誰の代わりに」動くかを扱う基盤が整いつつある。一方、dev.to ではエージェントが開発者名義で Slack に投稿していた事例が報告され、Qiita や Ars でも、AI エージェント経由の侵害と、AI 製品側の防御の必要性が取り上げられている。ChatGPT Wallet のようにエージェントへ決済権限を渡す流れもあり、権限境界の設計は一層重要になりそうだ。

もう一つは、足元のセキュリティ運用の重さだ。Windows の SignDrop 0-day、Tor 出口ノードの大規模乗っ取り、eMudhra の証明書問題など、公開された脆弱性や信頼基盤の揺らぎが続いている。Qiita の「今週対応すべき6つの脆弱性」のような優先順位付けや、SSH 鍵に頼らないアクセス構成といった実務的な対策が、はてブでも関心を集めていた。
