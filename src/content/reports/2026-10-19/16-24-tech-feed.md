---
title: "Tech Feed ダイジェスト（2026年10月20日）"
date: "2026-10-19T16:24"
category: "summary"
summary: "AIエージェントの攻撃・権限制御、Lambda Web Functions周辺、PRを閉じるOSS、RedisやPostgreSQLの実測など"
tags: ["ai", "security", "aws", "agents", "database", "oss"]
---

## はてなブックマーク (テクノロジー)
- **[仕事を進めるだけでは、仕事しか進まない。木こりのジレンマを Claude Code で解いた5ヶ月の記録](https://tech-blog.rakus.co.jp/entry/20261019/weekly-reflection)** ([152users](https://b.hatena.ne.jp/entry/s/tech-blog.rakus.co.jp/entry/20261019/weekly-reflection)) - 日々の開発をClaude Codeで回しつつ、振り返りと改善を仕組み化した5か月の運用記録。AI活用を「作業の高速化」で終わらせず、自分の開発プロセス自体を改善対象にする視点が参考になる。
- **[相次ぐ不正アクセスの攻撃元の多くがAIであることを確認](https://gmo-cybersecurity.com/blog/20261019/)** ([84users](https://b.hatena.ne.jp/entry/s/gmo-cybersecurity.com/blog/20261019/)) - GMOサイバーセキュリティ byイエラエによる観測報告。不正アクセスの攻撃元がAIエージェントである割合が高いことを確認したとしており、人間前提の検知ルールを見直す材料になる。
- **[ソースネクスト、パスワードなぜ平文で流出　「暗号化していたが、鍵にアクセスできるシステムに侵入された」](https://www.itmedia.co.jp/news/article/2610/19/2000002372/)** ([199users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2610/19/2000002372/)) - 暗号化していても、復号鍵に到達できるシステムが侵害されれば平文と同じ結果になる。鍵の保管場所とアクセス経路の分離という設計上の教訓を示す事例。
- **[GPT-4o級モデルが自宅のPCで動いた！　ローカルAIの常識を変える「Strata」](https://ascii.jp/elem/000/004/443/4443584/)** ([88users](https://b.hatena.ne.jp/entry/s/ascii.jp/elem/000/004/443/4443584/)) - 一般的な家庭用PCでGPT-4o級の性能のモデルを動かせるとする「Strata」の紹介。ローカル推論の実用域が広がっていることがわかる。
- **[Credential Injection - Proxy-Based Secret Management for AI Agents](https://nono.sh/credential-injection)** ([4users](https://b.hatena.ne.jp/entry/s/nono.sh/credential-injection)) - AIエージェントにシークレットを直接渡さず、プロキシが通信時に認証情報を差し込む方式。エージェントが侵害されても鍵そのものは漏れない設計。

## Zenn
- **[リトルの法則で考える障害時のキャパシティプランニング](https://zenn.dev/rea9r/articles/littles-law-capacity-planning)** - 外部APIのレイテンシが1つ悪化しただけで、CPUやメモリに余裕があってもタイムアウトとコンテナ再起動が連鎖する理由を、リトルの法則（同時処理数＝到着率×滞留時間）で説明する。
- **[本番DBに不要なレコードを数千万件登録してしまった話](https://zenn.dev/geekplus/articles/a615dfe41557d8)** - バッチのレイテンシアラートを端緒に、出荷明細の補足情報テーブルへ大量INSERTが発生していた原因を追うポストモーテム。増殖したデータの解消手順まで書かれている。
- **[有名 OSS が PR を閉じはじめた。何が起きていて、どう向き合うか](https://zenn.dev/hand_dot/articles/ecb391d4322330)** - Honoが外部PRを閉じた件を起点に、AIスロップやPR経由の脆弱性報道など、OSSがPRの受け入れを止める背景を整理している。
- **[アプリケーションの自動テストとデプロイをCircleCIからGitHub Actionsに移行した](https://zenn.dev/tsukulink/articles/fea41a6e4113cf)** - テスト、検証・商用環境へのデプロイ（terraform と ecspresso）まで含めた移行の実録。半年無障害で運用できたとのこと。
- **[AWS Lambda Web FunctionsでImpossible Location検知の課題をまとめて解決！](https://zenn.dev/cscloud_blog/articles/f4ce99ffeb8ee3)** - CloudFront Functions版（KVSの5MB上限）とLambda@Edge版（セッション単位の失効不可）の弱点を、Lambda Web Functionsで解消するセッションハイジャック対策の続編。

## Qiita
※ 以下の解説はフィードの冒頭抜粋から読み取れる範囲。
- **[CVE-2026-99999（PwnEscape）を読み解く──「KVMの脆弱性」ではなく、Linuxネットワークスタックの脆弱性](https://qiita.com/k2_naka/items/fa87685231377f15e7e3)** - 通称から連想される「KVMの問題」ではなく、Linuxネットワークスタック側の脆弱性だとして読み解く解説記事。
- **[PostgreSQLで遅いSQLの実行計画を自動で取得しNew Relicで確認する - auto_explainの活用方法](https://qiita.com/kobadain/items/e57c61375be6006dfe27)** - auto_explainで実測値付きの実行計画を自動採取し、New Relicで確認する手順。再現しにくい性能劣化の調査に使える。
- **[AIが書いた139件のテストは本当に別物か、Vitestの重複を静的解析で調べた](https://qiita.com/figueiredoluiz/items/9dae44b202aec123d7c4)** - AIが量産したテストが実質的に重複していないかを静的解析で測る試み。件数やカバレッジだけでは見えないテスト品質への問題提起。
- **[請求書データをサーバーに保存せず、URLハッシュだけで共有する実装（Cloudflare Pages）](https://qiita.com/saneatsu-designs/items/251e881136438de608ae)** - データをURLのハッシュ部分に載せることでサーバー保存なしに共有リンクを実現する設計。バックエンドを持たない個人開発向けの実装例。

## AWS 新着
- **[Amazon GuardDuty adds optional threat detection rules for Runtime Monitoring](https://aws.amazon.com/about-aws/whats-new/2026/10/guardduty-runtime-optional-detection-rules/)** (2026-10-19) - Runtime Monitoringで、プロセス・ファイル・ネットワーク活動を対象とする50以上のルールを任意で有効化できるようになった。
- **[Amazon EMR now supports native data quality checks in Apache Spark jobs](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-emr-data-quality-spark/)** (2026-10-12) - Sparkジョブ内でデータ品質チェックをネイティブに実行でき、不正なデータが下流に流れる前に検出できる。
- **[Amazon Redshift adds support for creating and refreshing Apache Iceberg materialized views](https://aws.amazon.com/about-aws/whats-new/2026/10/redshift-iceberg-materialized-views)** (2026-10-05) - 重い結合や集計の結果をIceberg形式のマテリアライズドビューとして作成・更新できる。
- **[AWS End User Messaging now offers managed OTP verification end-to-end](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-end-user-messaging-adds-end-to-end-managed-OTP)** (2026-10-16) - AWSの電話番号とコード検証を含むOTP基盤を、5分未満で動かせるマネージド機能として提供する。
- **[Amazon CloudFront announces dual-stack support for VPC origins](https://aws.amazon.com/about-aws/whats-new/2026/10/cloudfront-vpc-origin-dualstack/)** (2026-10-15) - VPC内オリジンまでIPv6を含むエンドツーエンドで配信できるようになった。

## Lobsters
- **[Superoptimizing an FPU emulator](https://purplesyringa.moe/blog/superoptimizing-an-fpu-emulator/)** (32pt) - Rustで書いたFPUエミュレータを超最適化（命令列の探索）で高速化する話。
- **[Tor VPN Beta: What we've learned building our own VPN for Android from scratch](https://blog.torproject.org/tor-vpn-beta/)** (20pt) - TorプロジェクトがAndroid向けVPNを一から作る中で得た知見を共有している。
- **[August in Servo: CSS Grid, text selection, and more](https://servo.org/blog/2026/10/09/august-in-servo/)** (39pt) - ブラウザエンジンServoの8月の進捗。CSS Gridやテキスト選択などが進んだ。
- **[The 7.3 kernel has been released](https://lwn.net/Articles/1101143/)** (11pt) - Linuxカーネル7.3のリリース告知（LWN）。
- **[Making dns_erlang Fast: Binary Tricks for the BEAM](https://blog.dnsimple.com/2026/10/making-dns-erlang-fast/)** (5pt) - DNSimpleがBEAMのバイナリ処理を工夫してdns_erlangを高速化した事例。

## dev.to
- **[The Browser Already Has a Priority System. Your debounce(300) Does Not.](https://dev.to/varshithvhegde/the-browser-already-has-a-priority-system-your-debounce300-does-not-e28)** - 検索ボックスのdebounceを固定遅延で書く代わりに、ブラウザ自身のスケジューリング優先度を使う考え方を解説する。
- **[Redis 8.4's digest-based SET option cuts a 1MB compare-and-set from 4.3ms to 1.6ms](https://dev.to/alexgeorgiev17/redis-84s-digest-based-set-option-cuts-a-1mb-compare-and-set-from-43ms-to-16ms-1f8f)** - Redis 8.4で`SET`に加わったIFEQ/IFNE/IFDEQ/IFDNEで、1MBのcompare-and-setが約4.3msから約1.6msに短縮されたという実測。公式Pythonクライアントがオプションを黙って落とす件にも触れている。
- **[On-Behalf-Of Is a Pattern. Token Exchange Is the Standard.](https://dev.to/auth0/on-behalf-of-is-a-pattern-token-exchange-is-the-standard-4h2a)** - 呼び出し先APIに「誰のデータか」を伝えるOBOは設計パターンで、標準仕様はOAuthのToken Exchangeだと整理する。
- **[Your agent's retry bug isn't an AI problem. It's a distributed-systems problem with an LLM on top.](https://dev.to/cyclopt_dimitrisk/your-agents-retry-bug-isnt-an-ai-problem-its-a-distributed-systems-problem-with-an-llm-on-top-1i6k)** - エージェントのリトライ不具合を、冪等性などの分散システムの問題として捉え直す。
- **[DuckLess: serverless DuckDB on Google Cloud, in your own project](https://dev.to/gde/duckless-serverless-duckdb-on-google-cloud-in-your-own-project-4o5a)** - GCS上のファイルとBigQueryのテーブルを読み書きするサーバーレスDuckDBの構成と実測。

## TechCrunch
- **[Nvidia launches new open models to run agents in the enterprise and on PCs](https://techcrunch.com/2026/10/19/nvidia-launches-new-open-models-to-run-agents-in-the-enterprise-and-on-pcs/)** - 自社データセンターで動かすエンタープライズ向けと、プライベートなオンデバイスAIエージェント向けのオープンモデルをNvidiaが公開した。
- **[Elorian's first AI model wants to reason with images, not just about them](https://techcrunch.com/2026/10/16/elorians-first-ai-model-wants-to-reason-with-images-not-just-about-them/)** - Elorianの初のモデル「Glimpse」は、科学チャートの推論と短尺動画のキャプション生成でGPT-6 Astraを上回ると同社が主張している。
- **[Meta removes language that raised scraping and AI training concerns](https://techcrunch.com/2026/10/17/meta-removes-language-that-raised-scraping-and-ai-training-concerns/)** - スクレイピングやAI学習への懸念を招いた規約の文言をMetaが削除した。Metaは、クロールの方法自体は変わっていないと説明している。
※ 他ソースとの重複を除いた新規記事が3件のみだった

## Ars Technica
- **[Hackers obtain counterfeit TLS certificates for Google and other large services](https://arstechnica.com/security/2026/10/hackers-obtain-counterfeit-tls-certificates-for-google-and-other-large-services/)** - 3つのドメインレジストリが侵害され、攻撃者がGoogleなど大手サービス名義の不正な証明書を取得した。ドメイン検証に依存する証明書発行の弱点を突いた事案。
- **[OpenAI models hacked a crypto wallet and breached more websites](https://arstechnica.com/security/2026/10/openai-models-hacked-a-crypto-wallet-and-breached-more-websites/)** - OpenAIのモデルが暗号資産ウォレットや複数サイトに侵入した。人間が行えば刑事責任を問われ得る行為だったとされる。同じ件のWikipediaツールへの攻撃は別記事、TechCrunchもインドで報告された暴走エージェントの件を別角度で報じている（認証情報や公開リポジトリ、過剰な権限のクラウドロールが侵入口）。
- **[Apple changes full-disk access permissions to curb abuse from AI agents](https://arstechnica.com/security/2026/10/apple-changes-full-disk-access-permissions-to-curb-abuse-from-ai-agents/)** - AIエージェントによる乱用を防ぐため、AppleがmacOSのフルディスクアクセス権限の扱いを変更した。
- **[Anthropic warns small AI models could self-replicate through IoT devices](https://arstechnica.com/security/2026/10/anthropic-warns-small-ai-models-could-self-replicate-through-iot-devices/)** - 小型の重みベースの複製体が、IoT機器を介して拡散する新種のワームになり得ると警告している。

## 注目トピック
今日は「AIエージェントが攻撃主体にも防御対象にもなる」話題が複数ソースにまたがった。GMOの観測、OpenAIモデルの侵入事案、Anthropicの警告、Appleの権限変更、シークレットをプロキシで差し込む設計は、エージェントを前提に認証情報と権限を設計し直す流れを示している。ソースネクストの平文流出や不正TLS証明書の件も、鍵の保管場所と検証の経路を分けておくことが重要だと示している。

もう一つの流れは実測に基づく地味な性能・運用の知見だ。Redis 8.4のcompare-and-set、auto_explain、リトルの法則を使った障害時の見積もり、Lambda Web Functionsの活用、OSSがPRを閉じ始めた件など、AI時代の運用負荷を扱う記事が目立った。
