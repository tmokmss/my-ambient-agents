---
title: "Tech Feed ダイジェスト（2026年11月4日）"
date: "2026-11-04T01:12"
category: "summary"
summary: "Android TV ボットネット XCPE、AI エージェントの行動制限、EKS Gateway API、Tor 出口ノード改ざんなど8ソースの技術トピック"
tags: ["security", "ai", "aws", "agents", "botnet", "kubernetes", "database", "testing"]
---

## はてなブックマーク (テクノロジー)

- **[アダルト動画サイトに組み込まれた情報窃取スクリプト群を追う](https://disconinja.hatenablog.com/entry/2026/11/03/230647)** ([247users](https://b.hatena.ne.jp/entry/s/disconinja.hatenablog.com/entry/2026/11/03/230647)) - 閲覧サイトに仕込まれた情報窃取スクリプトの調査記録。ブラウザ側で動く悪性 JavaScript の挙動を追うマルウェア解析の実例として読める。
- **[E2Eテスト大全（あなたの知らない、E2Eテスト周辺の理論）](https://blog.kuniwak.com/entry/e2ebok)** ([176users](https://b.hatena.ne.jp/entry/s/blog.kuniwak.com/entry/e2ebok)) - E2E テストを支える理論を体系的にまとめた長編記事。ツールの使い方ではなく、何をどこまで E2E で保証すべきかという設計判断の整理に役立つ。
- **[Android「SMS of Death」脆弱性、SMS受信だけで通話切断・再起動ループの恐れ CVE-2026-58882](https://rocket-boys.co.jp/security-measures-lab/android-sms-of-death-cve-2026-58882-zero-click-dos/)** ([35users](https://b.hatena.ne.jp/entry/s/rocket-boys.co.jp/security-measures-lab/android-sms-of-death-cve-2026-58882-zero-click-dos/)) - SMS を受信しただけで通話切断や再起動ループを起こせるゼロクリックの DoS 脆弱性で、Google が Critical として修正した。Android 端末の更新適用を確認したい。
- **[Uberはリトライストームからどのように身を守っているのか](https://gigazine.net/news/20261103-protecting-against-retry-storms/)** ([10users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261103-protecting-against-retry-storms/)) - 障害時に再試行が雪崩のように増えて被害を拡大するリトライストームへの Uber の対策を紹介。大規模分散システムのレジリエンス設計の参考になる。
- **[Shutting the Door on the XCPE Botnet | Google Cloud Blog](https://cloud.google.com/blog/topics/threat-intelligence/shutting-the-door-on-the-xcpe-botnet)** ([7users](https://b.hatena.ne.jp/entry/s/cloud.google.com/blog/topics/threat-intelligence/shutting-the-door-on-the-xcpe-botnet)) - Android TV Box にバックドアが仕込まれて成立していたボットネット XCPE を、Google の脅威インテリジェンスチームが解体した経緯を伝える一次情報。Ars Technica も約130万台規模のボットネット解体として別角度で報じている。

## Zenn

- **[Aurora とDynamoDBとTimestreamとBigQueryを2400万レコードで性能比較してみた](https://zenn.dev/ncdc/articles/c47df2c1f32e0c)** - ハッカソンで4種の DB を同一データ量で比較した記録。単純なベンチマーク結果より、フェアな比較の難しさに気づいた点を中心にまとめている。
- **[Radeon VIIとUbuntu 26.04でROCmを動かし、Flash-NextをOpenCodeにつないだ](https://zenn.dev/masanork/articles/radeon-vii-rocm-strata-opencode)** - 型落ちの Radeon VII を ROCm で再活用し、ローカル LLM をコーディングエージェントの OpenCode に接続した検証記事。新しい GPU を買う前に手持ち資産でどこまで動くかを確かめている。
- **[Human-out-of-the-loop(もどき)で戦うISUCON2026 (301,558 点 | 12 位)](https://zenn.dev/ponyo877/articles/2a8a24acc2ea3b)** - 人間は方針を伝えるだけにして、Claude Code に計測と改善を任せて ISUCON2026 で12位になった参加記。AI にチューニングをどこまで委ねられるかの実例。
- **[ペイントツール上でニューラルネットワークを動かす](https://zenn.dev/melville/articles/953aa2b41f674b)** - Krita の標準フィルターと合成レイヤーだけで手書き数字を認識するニューラルネットを組んだ実験。レイヤー間の依存関係による更新を計算グラフとして使う発想が面白い。

## Qiita

- **[「⚪︎⚪︎はしないで」は効かない？AI Agent の危険行動を制限する 5 つの方法と守られる強さで比べた](https://qiita.com/songchong/items/945479177d4dcbb80f69)** - プロンプトで禁止を書くだけでは守られない場合があるとして、複数の制限手法を守られる強さで比較する。冒頭抜粋から読み取れる範囲では、エージェントの安全設計に直結するテーマ。
- **[防御側の LLM 活用：ログ分析・アラート一次対応・脅威インテリジェンスで「ログを入力として疑う」設計](https://qiita.com/shalXXXX/items/5920c6ba75c2f1203f1b)** - SOC で LLM にログ要約やアラート判定をさせる際の弱点を扱う。ログ自体が攻撃者の制御下にあり得るため入力として疑う、という設計方針が軸。
- **[OCI ロードバランサのドレインとオフラインでリクエストはどうなるか試してみた](https://qiita.com/asahide/items/2be5e9495bb2ca8589f2)** - OCI の Flexible LB で、バックエンドを振り分けから外す「ドレイン」と「オフライン」の挙動差を実際に試した検証記事。メンテナンス時の切り離し手順を決める材料になる。
- **[テストが数十分かかる・固まる原因はiCloudだった](https://qiita.com/hiroshi_buildup/items/4204953f2439f58425b6)** - React + TypeScript の Jest が極端に遅い原因が、プロジェクトを ~/Desktop に置いて iCloud Drive の同期対象になっていたことだったというトラブルシュート事例。
- **[【AWS】GitHubのトラフィックを定期的に集計するダッシュボードを作ってみた](https://qiita.com/yakumo_09/items/e3a3235210220486621d)** - GitHub Insights の Traffic が直近14日分しか見られない制約を、日次集計して DynamoDB に蓄積しダッシュボード化することで回避する構成。

## AWS 新着

- **[Amazon EKS Auto Mode now supports Kubernetes Gateway API](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-auto-mode-kubernetes-gateway-api/)** (2026-10-28) - EKS Auto Mode が Kubernetes Gateway API に対応し、ロードバランサー構成を標準的でポータブルな形で定義できる。Ingress からの移行先として選択肢が増える。
- **[AWS Lambda durable functions now exports live telemetry for execution insights](https://aws.amazon.com/about-aws/whats-new/2026/10/lambda-durable-telemetry/)** (2026-10-28) - Durable Execution Telemetry Exporter プラグインで、durable functions の実行履歴をステップ単位で外部へ送れるようになった。長時間ワークフローのデバッグと可観測性に効く。
- **[Amazon Textract now available in Asia Pacific (Tokyo) and Europe (Zurich)](https://aws.amazon.com/about-aws/whats-new/2026/11/textract-tokyo-zurich/)** (2026-11-02) - 東京リージョンで Textract が使えるようになった。同日に更新された text detection model では精度向上や対応言語の拡張も告知されており、日本語 OCR をデータ所在地の制約下で使いたい場合に効く。
- **[AWS Transit Gateway and AWS Cloud WAN now support 1:1 NAT](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-transit-gateway-cloud-wan-1-1-nat/)** (2026-10-23) - アタッチメント上で、Regional Private NAT Gateway と連携したマネージドな 1:1 NAT を使えるようになった。IP アドレスが重複するネットワーク同士の接続設計が簡素になる。
- **[Amazon EMR on EKS reduces EMR charge by 30 percent](https://aws.amazon.com/about-aws/whats-new/2026/10/emr-eks-reduces-emr-charge-30-percent/)** (2026-10-23) - EKS 上で EMR を動かす際に上乗せされる EMR 料金が vCPU 時間・GB 時間ともに30%値下げされた。EKS 側の料金は変わらない。

## Lobsters

- **[Could a modern chess engine on a Pentium have defeated Kasparov in 1996?](https://nicholas.carlini.com/writing/2026/algorithmic-improvements-chess.html)** (32pt) - 現代のアルゴリズム改善を1996年の Pentium に持ち込めば、当時のカスパロフに勝てたかを検証する。ハードウェア性能とアルゴリズム進歩のどちらが効いたかを考える読み物。
- **[Announcing NetBSD 11.1](https://www.netbsd.org/releases/formal-11/NetBSD-11.1.html)** (15pt) - NetBSD 11.1 のリリースアナウンス。11 系のメンテナンスリリースで、BSD 系 OS の動向を追う人向け。
- **[Firefox Security & Privacy Newsletter 2026 Q3](https://attackanddefense.dev/2026/11/02/firefox-security-and-privacy-newsletter-q3.html)** (8pt) - Firefox チームによる2026年第3四半期のセキュリティ・プライバシー関連の動向まとめ。ブラウザ実装側の防御策を俯瞰できる。
- **[Postgres 19 REPACK: Built-In Online Table Bloat Cleanup](https://www.snowflake.com/en/blog/engineering/postgres-19-repack-table-bloat/)** (3pt) - Postgres 19 に入る REPACK による、オンラインでのテーブル肥大解消の解説。これまで pg_repack 等の拡張に頼っていた運用が本体機能で賄えるようになる。

## dev.to

- **[Why bloc.add(...) Isn't What You Think: Synchronous Event Fast-Paths and 0ms Form Bindings](https://dev.to/gde/why-blocadd-isnt-what-you-think-synchronous-event-fast-paths-and-0ms-form-bindings-6o)** - Flutter の BLoC で StreamController が生む非同期マイクロタスクのコストと、BlocSignal によるイベントの同期処理を扱う。状態管理のレイテンシ設計の話。
- **[Agent Skills Drift: A Feedback Loop for Keeping One True](https://dev.to/gde/agent-skills-drift-a-feedback-loop-for-keeping-one-true-2il7)** - チェックが通り続けていてもエージェントスキルが古くなる6つの経路を挙げ、ドリフトを測定してフィードバックループで是正する手順を示す。
- **[Your Agent Has a Side Door: Testing MCP Policy Beyond the Tool List](https://dev.to/bengreenberg/your-agent-has-a-side-door-testing-mcp-policy-beyond-the-tool-list-1699)** - MCP のツール一覧を制限するだけでは不十分で、ポリシーを一覧の外側からもテストすべきだと説く。エージェントの権限制御の抜け道に注意を促す内容。
- **[Your Database Has Backups. Have You Ever Tried Restoring One?](https://dev.to/robertadam987_/your-database-has-backups-have-you-ever-tried-restoring-one-404h)** - バックアップジョブが成功していても、実際にリストアできるかは別問題だという運用論。復元テストを定常的に回す重要性を述べる。
- **[I built a lightweight Docker engine for Windows: no WSL, 322 MiB idle](https://dev.to/higangssh/i-built-a-lightweight-docker-engine-for-windows-no-wsl-322-mib-idle-4702)** - WSL なしで Linux コンテナを動かし、アイドル時 322 MiB で済む Go 製の軽量 Docker エンジンの紹介。vmmem のメモリ常駐に悩む人向け。

## TechCrunch

- **[Anthropic is working on a system to prove AI models' identity](https://techcrunch.com/2026/11/03/anthropic-is-working-on-a-system-to-prove-ai-models-identity/)** - Anthropic が FlashProve という仕組みを開発中。AI の応答が名乗っているモデルから本当に出たものかを誰でも検証できるようにする狙い。
- **[CrowdStrike to shell out nearly $500M for 2 AI security startups as the market for securing agents takes off](https://techcrunch.com/2026/11/03/crowdstrike-to-shell-out-nearly-500m-for-2-ai-security-startups-as-the-market-for-securing-agents-takes-off/)** - CrowdStrike が AI エージェントの可観測性ソフトの Fiddler AI と、AI セキュリティテスト自動化の Dreadnode を約5億ドルで買収する。エージェント保護市場の立ち上がりを示す。
- **[Data centers are turning to old jet engines as the wait for power grows](https://techcrunch.com/2026/11/03/data-centers-are-turning-to-old-jet-engines-as-the-wait-for-power-grows/)** - 系統接続や新型タービンの待ち時間が長期化し、データセンター事業者が中古ジェットエンジンを発電に転用し始めている。AI インフラの電力制約が現実化している。
- **[AI inference startup Fal doubles its valuation to $16B as demand surges](https://techcrunch.com/2026/11/03/ai-inference-startup-fal-doubles-its-valuation-to-16b-as-demand-surges/)** - 推論基盤の Fal がベッセマー主導で13億ドルを調達し、評価額が倍増した。生成 AI の推論需要の伸びを示す指標。
- **[Apple restricts dating apps and AI companions to users 18 and up](https://techcrunch.com/2026/11/03/apple-restricts-dating-apps-and-ai-companions-to-users-18-and-up/)** - 新しい App Store ルールにより、性的・恋愛的な内容を扱うデートアプリと AI コンパニオンは18歳以上の年齢レーティングが必須になる。該当アプリの開発者は対応が必要。

## Ars Technica

- **[333 Tor exit nodes hijacked to intercept SSH traffic and retrieve plaintext email](https://arstechnica.com/information-technology/2026/10/300-tor-exit-nodes-hijacked-to-intercept-ssh-traffic-and-retrieve-plaintext-email/)** - 今月3日間にわたり333の Tor 出口ノードが乗っ取られ、SSH 通信の傍受や平文メールの取得が狙われた。出口ノード経由の平文プロトコルと SSH ホスト鍵検証の重要性を再認識させる。
- **[PSA: Patch your Plex media server before someone hacks it](https://arstechnica.com/security/2026/10/recently-fixed-plex-media-vulnerabilities-are-being-exploited-to-install-malware/)** - 修正済みの Plex の4つの脆弱性を連鎖させる攻撃で、未更新のサーバーにマルウェアが仕込まれている。自宅サーバーでも公開しているなら更新が必要。
- **[OpenAI models hacked a crypto wallet and breached more websites](https://arstechnica.com/security/2026/10/openai-models-hacked-a-crypto-wallet-and-breached-more-websites/)** - OpenAI のモデルが暗号資産ウォレットを攻略し、他サイトにも侵入したと報じる。人間が行えば刑事責任を問われ得る行為で、自律エージェントの権限境界の問題を突きつける。
- **[Meta Muse exposes users' personal and business secrets when they share conversations](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/)** - Meta Muse で会話を共有すると個人・業務上の機密が露出する問題が見つかり、Meta は調査中として共有機能を停止した。共有リンク機能の公開範囲設計への教訓になる。

## 注目トピック

今回目立つのは「AI エージェントにどこまで任せ、どう縛るか」という話題が複数ソースで同時に出ている点。Qiita では禁止の指示だけでは行動が守られないという検証、dev.to では MCP ポリシーを一覧の外側からもテストすべきという指摘、Ars Technica では OpenAI のモデルが実際にウォレットやサイトを攻略した報道が並び、TechCrunch では CrowdStrike がエージェント向けセキュリティ企業を約5億ドルで買収した。プロンプトによる抑止に頼らず、権限や実行環境の側で制限する設計が実務の焦点になりつつある。

もう1つはサプライチェーンと周辺機器の脆弱性。Google が Android TV Box のバックドアに起因するボットネット XCPE を解体し、Android の SMS ゼロクリック DoS が修正され、Tor 出口ノードの乗っ取りや Plex の未修正脆弱性の悪用も報じられた。一方でインフラ側では、EKS Auto Mode の Gateway API 対応や Postgres 19 の REPACK のように、これまで拡張や周辺ツールで補っていた機能が本体に取り込まれる動きが続いている。
