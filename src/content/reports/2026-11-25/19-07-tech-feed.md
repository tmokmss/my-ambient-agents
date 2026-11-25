---
title: "Tech Feed ダイジェスト（2026年11月26日 朝）"
date: "2026-11-25T19:07"
category: "summary"
summary: "AIハーネス/MCPのセキュリティ、形式検証、AWS IAM TIP拡張、1Password・Todoist侵害、iOS非WebKitブラウザ問題など"
tags: ["ai", "security", "aws", "formal-verification", "rust", "agents"]
---

## はてなブックマーク (テクノロジー)
- **[AIハーネスは第3世代へ。自己改善するハーネスの全体像](https://zenn.dev/knowledgesense/articles/68128456fe7d28)** ([179users](https://b.hatena.ne.jp/entry/s/zenn.dev/knowledgesense/articles/68128456fe7d28)) - AIエージェントを取り巻く実行基盤（ハーネス）の世代整理と、自己改善するハーネスの全体像を扱う記事。エージェント開発の設計論として注目を集めている。
- **[C言語が危険なのではない。コンピュータが危険なのだ](https://scrapbox.io/keroxp/C%E8%A8%80%E8%AA%9E%E3%81%8C%E5%8D%B1%E9%99%BA%E3%81%AA%E3%81%AE%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%80%82%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%81%8C%E5%8D%B1%E9%99%BA%E3%81%AA%E3%81%AE%E3%81%A0)** ([97users](https://b.hatena.ne.jp/entry/s/scrapbox.io/keroxp/C%E8%A8%80%E8%AA%9E%E3%81%8C%E5%8D%B1%E9%99%BA%E3%81%AA%E3%81%AE%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84%E3%80%82%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%81%8C%E5%8D%B1%E9%99%BA%E3%81%AA%E3%81%AE%E3%81%A0)) - メモリ安全性の議論を言語の問題ではなく計算機アーキテクチャ側の問題として捉え直す、keroxp 氏の考察ノート。
- **[マーダーミステリーのシナリオを形式手法で検証しようとしたら、バグと曖昧さが見つかった](https://zenn.dev/henteko/articles/ed8d1458246d7a)** ([93users](https://b.hatena.ne.jp/entry/s/zenn.dev/henteko/articles/ed8d1458246d7a)) - シナリオをJSONで記述し、到達不能なエンディングや矛盾を検出するCLI（mmcheck）を作った記録。形式手法を身近な題材に適用した例。
- **[高木浩光＠自宅の日記 - 「氏名は含まれておりません」では済まない——KARTE事件で漏れた行動の記録は誰の個人データか](http://takagi-hiromitsu.jp/diary/20261124.html)** ([75users](https://b.hatena.ne.jp/entry/takagi-hiromitsu.jp/diary/20261124.html)) - 行動履歴データの漏えいを題材に、氏名を含まなくても個人データに当たり得るという個人情報保護の論点を整理した日記。
- **[AI に文章を書かせるときは、ネストした箇条書きで取捨選択させる](https://onk.hatenablog.jp/entry/2026/11/25/022804)** ([186users](https://b.hatena.ne.jp/entry/s/onk.hatenablog.jp/entry/2026/11/25/022804)) - LLM に文章を生成させる際の出力構造の工夫を紹介する記事。プロンプト設計の実践的なTipsとして反響が大きい。

## Zenn
- **[RustでFiberを用いたJob Systemを実装したらReleaseビルドでバグが発生した](https://zenn.dev/otinpan/articles/082f6178eb1472)** - 自作ゲームエンジンでWindows Fiber APIのJob Systemを動かしたところ、Releaseビルドでのみassertのpanicや RefCell 借用エラーが発生。Fiberのスレッド間移動とコンパイラのTLSアクセス最適化の関係を調査した記録。
- **[Claude Code のセキュリティ、2026年11月時点のベストプラクティス（サンドボックス・権限・MCP）](https://zenn.dev/happy_elements/articles/27e14ff6754044)** - Claude Codeが実行するBashは自分のユーザー権限で動くことを前提に、権限ルール・Bashサンドボックス・MCP設定をサンプルとチェックリストで整理。ダミーファイルで読み取り制限を確認する手順も載る。
- **[モデルの性能が出ないのは AI ゲートウェイのせいかもしれない](https://zenn.dev/google_cloud_jp/articles/7e29a9acf06557)** - AIゲートウェイ経由で別プロバイダーのモデルを呼ぶと、HTTP 200のまま思考のリセットやキャッシュ失効が起きることがある。思考トークン数やキャッシュヒット率を見る、変換なしのパススルーを選ぶ、といった対策を示す。
- **[Personal Agent Protocol (Poppy) が解く問題と仕組み](https://zenn.dev/sierra_japan/articles/0b9ba590232345)** - ユーザーの代わりに予約や問い合わせを行うパーソナルAIエージェントと企業を接続するオープンプロトコルの解説。企業側が増えるエージェントをどう受け止めるかが主題。
- **[Corpus2Skillに近づけた「階層ナビゲーション型RAG」と、ベクトルDB版RAGを「どの段階で失敗したか」まで比べてみた](https://zenn.dev/aiforall/articles/133752ce2d97ad)** - LLMが目次を辿って文書を探す方式とベクトルDB版を比較。正解文書への到達と回答に必要な箇所を渡せたかを分けて、失敗段階まで切り分けている。

## Qiita
- **[【EventBridge Webhook】SlackはNG、GitHubはOK？署名の仕様を突き合わせて調べた](https://qiita.com/N-Kyo/items/3ed8f4a0a17eb4b1409d)** - 2026年11月20日にEventBridgeのカスタムイベントバスがWebhookを直接受信可能になったことを受け、SlackとGitHubの署名仕様との相性を調べた記事（冒頭抜粋より）。AWSの新機能 Webhook Events の実用上の注意点として有用。
- **[Rails（Sidekiq＋Selenium）経験者向け：Node.jsのBullMQ＋Playwrightでバッチ処理を組むときのハマりどころ](https://qiita.com/jinxin4869/items/7771db4dccb7ddf3ac4a)** - Sidekiq＋SeleniumをNode.jsのBullMQ＋Playwrightに置き換える際の対応関係と落とし穴を整理する移行ガイド。
- **[FlutterでOneLinkを開くと「最近使用したアプリ」で元のアプリに戻れなくなった話](https://qiita.com/tyoshika/items/0b5addfc68219f3777c4)** - FlutterアプリのWebViewからAppsFlyer OneLinkを開くと、Androidの「最近使用したアプリ」で呼び出し元に戻れなくなる挙動のトラブルシューティング。
- **[cdkd deploy実行した時のリソースごとのデプロイ時間見たいなぁ...ん？見れるんかいっ！](https://qiita.com/kuracchi_enj/items/2e911d5a8b1253dd4b6e)** - 高速デプロイツール cdkd でリソース単位のデプロイ時間を確認できる機能を見つけた検証メモ（冒頭抜粋より）。

## AWS 新着
- **[AWS IAM extends trusted identity propagation to IAM federation and IAM Roles Anywhere, and simplifies it in IAM Identity Center](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-iam/)** (2026-11-25) - 人間ユーザーやワークロードのIDを対応サービスへのリクエストに載せて運ぶTIPが、IAMフェデレーションとRoles Anywhereにも拡張。IAMポリシー条件でそのIDを使ったアクセス制御ができる。
- **[AWS Sign-In introduces configurable Sign-in duration of up to 90 days](https://aws.amazon.com/about-aws/whats-new/2026/11/configurable-aws-sign-in-duration/)** (2026-11-23) - 開発者やAIエージェントが最大90日間サインイン状態を保てるよう、管理者がセッション期間を設定可能に。再認証やコンセント確認の頻度を下げられる。
- **[Amazon API Gateway announces API Portal](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-api-gateway-announces-api-portal/)** (2026-11-23) - API Gateway・ALB・CloudFront配下のAPIやAIエンドポイントを検出し、ガバナンスとドキュメント化を行う新機能。
- **[AWS Device Farm launches Device Connect for local access to remote Android devices](https://aws.amazon.com/about-aws/whats-new/2026/11/device-farm-device-connect/)** (2026-11-23) - リモートのAndroid実機をローカルのIDEやターミナルから、開発者やAIエージェントが利用できる。
- **[Amazon Transcribe announces a synchronous transcription API](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-transcribe-sync-api/)** (2026-11-20) - 音声ファイルを1回のリクエストで送り、同じレスポンスで全文書き起こしを受け取れる TranscribeAudio API。ジョブ管理が不要になる。

## Lobsters
- **[Why there are still no non-WebKit browsers on iOS](https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/)** (72pt) - Mozillaが、AppleのブラウザエンジンのルールがiOSで非WebKitブラウザを事実上不可能にしている理由を解説する。
- **[Abolish Lock Poisoning](https://lucumr.pocoo.org/2026/11/25/poisoning/)** (35pt) - Armin Ronacher による、Rustの標準ライブラリのMutex「ロックポイズニング」は廃止すべきという主張。コメント56件と議論が活発。
- **[Update on a security incident involving 1Password's backend systems](https://1password.com/blog/update-on-nov-2026-security-incident)** (10pt) - 1Passwordが自社バックエンドで起きたセキュリティインシデントを報告した一次情報。TechCrunchも、従業員アカウントへの侵入で顧客情報の一部が盗まれたが顧客パスワードは無事と報じている。
- **[Taking over US Treasury subdomains for $3 each](https://www.intruder.io/research/taking-over-us-treasury-subdomains-for-3-each)** (18pt) - 米財務省関連のサブドメインを数ドルで乗っ取れた調査。放置されたDNSレコードの危険性を示す。
- **[Optimizing Rustc's next trait solver](https://donsz.nl/blog/optimizing-rustcs-next-trait-solver)** (24pt) - rustcの次世代trait solverの性能最適化の取り組み。

## dev.to
- **[What server.close() Misses in Node.js Graceful Shutdown](https://dev.to/shubhradev/what-serverclose-misses-in-nodejs-graceful-shutdown-4ech)** - SIGTERMで`server.close()`を呼ぶだけの定番のグレースフルシャットダウンが取りこぼすものを解説する。FastifyやExpressの運用向け。
- **[JWT Says 'Admin'. Should Your API Believe It?](https://dev.to/hadil/jwt-says-admin-should-your-api-believe-it-4m4m)** - JWT内のロールを鵜呑みにするAPI認可の落とし穴を、Keycloakの文脈で検討する。
- **[Your AI Agent Trusted the Tool. The Tool Changed Overnight.](https://dev.to/katul1512/your-ai-agent-trusted-the-tool-the-tool-changed-overnight-2f65)** - MCPサーバーの変更やツールスキーマの改変、権限の暗黙拡張がエージェントのリスクになる点を論じる。
- **[Which OpenAPI Codegen Should You Choose in 2026?](https://dev.to/necoz/which-openapi-codegen-should-you-choose-in-2026-openapi-typescript-vs-hey-api-vs-orval-vs-kubb-m8c)** - openapi-typescript、Hey API、Orval、Kubb v5の4つを比較するTypeScript向けコード生成の選定ガイド。
- **[Adopt Pre-Existing Docker Containers with Zero Downtime](https://dev.to/gde/adopt-pre-existing-docker-containers-with-zero-downtime-reverse-engineering-docker-composeyml-in-3cic)** - 本番ホスト上の既存コンテナを`docker inspect`からdocker-compose.ymlに逆生成し、無停止で管理下に取り込む手法。

## TechCrunch
- **[Todoist confirms 6% of customers' details were stolen in data breach](https://techcrunch.com/2026/11/25/todoist-confirms-6-of-customers-details-were-stolen-in-data-breach/)** - 本番システムへの侵入により、メールアドレス、パスワードハッシュ、アカウント作成日が盗まれた。はてなブックマークでも国内報道が話題になっていた。
- **[Character.AI's plan to auction off users' private chats challenged by state AGs](https://techcrunch.com/2026/11/25/state-ags-fight-character-ais-plan-to-auction-off-users-private-chats/)** - 破産手続きに伴う売却対象に、米国2,100万超のアカウントの機微な個人データ（未成年210万件を含む）が入っているとして州司法長官が異議を唱えた。
- **[Amazon and Meta reportedly in talks to lift blockade on AI agent Muse](https://techcrunch.com/2026/11/25/amazon-and-meta-reportedly-in-talks-to-lift-blockade-on-ai-agent-muse/)** - AmazonがMetaのAIエージェントMuseを2か月間ブロックしている問題で、解除に向けた協議が報じられた。エージェントによる他社サービス利用のアクセス制御を巡る動き。

## Ars Technica
- **[Backblaze explains why it's sharing customer information with advertisers](https://arstechnica.com/information-technology/2026/11/backblaze-explains-why-its-sharing-customer-information-with-advertisers/)** - Backblazeが広告主への顧客情報共有について説明。バックアップやストレージのファイル自体は共有しないと同誌に述べた。
- **[A familiar Iranian hacking group has found a new way to cause chaos](https://arstechnica.com/security/2026/11/a-familiar-iranian-hacking-group-has-found-a-new-way-to-cause-chaos/)** - フランスが、イランのサイバー部隊が数百のスーパーの冷凍庫を妨害したと非難。産業・IoT機器を狙う攻撃の一例。なお TechCrunch も、イランが関与とされる石油・海運タンカーへのハッキングを報じている。
- **[Guilty: Huawei faces steep penalties for stealing T-Mobile, Cisco trade secrets](https://arstechnica.com/tech-policy/2026/11/jury-convicts-huawei-of-stealing-us-trade-secrets-evading-iran-sanctions/)** - 陪審がHuaweiに、T-MobileやCiscoの営業秘密窃取などで有罪評決を下した。通信機器産業の構造に関わる判決。

## 注目トピック
AIエージェントを動かす「ハーネス」と、その安全な運用が複数ソースで同時に話題になった。はてブの「第3世代ハーネス」、ZennのClaude Codeサンドボックス・権限設計、AIゲートウェイ経由での性能劣化、dev.toのMCPツール変更リスクは、いずれも実行基盤の設計と検証が品質を左右するという同じ論点に収束している。AWSもIAMのTIP拡張や90日サインインなど、人間とエージェントの双方を前提にした認証・認可を整備している。

もう一つの流れは、形式検証とセキュリティインシデントだ。Lean等による形式手法は、マーダーミステリーの矛盾検出のような身近な題材に降りてきた。一方で1Password、Todoist、Hex.pmと開発者向けサービスの侵害報告が続き、サブドメイン乗っ取りなど基本的な管理不備も改めて問われている。
