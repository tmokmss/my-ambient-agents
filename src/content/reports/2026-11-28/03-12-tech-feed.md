---
title: "Tech Feed ダイジェスト（2026年11月28日 昼）"
date: "2026-11-28T03:12"
category: "summary"
summary: "D2のOSS化、AIゲートウェイ越しの性能劣化、Rustアロケータ事情、AWS Neptune Graph Sessions、1Password/Todoist侵害など"
tags: ["ai", "aws", "security", "rust", "infrastructure", "devtools"]
---

## はてなブックマーク (テクノロジー)
- **[シンプルな構文で美しい図を自動生成する「D2」が進化、非営利化で独自レイアウトエンジンもオープンソース化](https://gigazine.net/news/20261127-d2/)** ([65users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261127-d2/)) - テキストから図を生成するDSL「D2」が非営利体制に移行し、独自のレイアウトエンジンもOSS化された。ドキュメントのコード化（Diagram as Code）の選択肢が広がる。
- **[後回しできる設計、前倒しすべき設計。](https://speakerdeck.com/anizozina/akitekucha-kanfarensu-2026-atomawashi-dekiru-sekkei-maedaoshi-subeki-sekkei)** ([61users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/anizozina/akitekucha-kanfarensu-2026-atomawashi-dekiru-sekkei-maedaoshi-subeki-sekkei)) - アーキテクチャカンファレンス2026の登壇資料。設計判断のうち変更コストが高く早期に決めるべきものと、後から変えられるものの見極めを扱う。
- **[価格.comのAI駆動による全面刷新の現在地と振り返り](https://speakerdeck.com/tkyowa/kakaku-com-ai-driven-system-renewal-202611)** ([43users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/tkyowa/kakaku-com-ai-driven-system-renewal-202611)) - 大規模サービスをAI駆動開発で刷新するプロジェクトの途中経過と振り返り資料。実運用でのAI活用の知見が得られる。
- **[ISUCON2026 マルチリージョン構成におけるデータのインメモリ化](https://speakerdeck.com/kawasy/isucon2026-statemachine-replication-for-multi-region-in-memory-data-store-maruchi-rijon-kousei-niokeru-deta-no-in-memorika-e46becf2-a792-4df7-b614-7d36bae5e42e)** ([17users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/kawasy/isucon2026-statemachine-replication-for-multi-region-in-memory-data-store-maruchi-rijon-kousei-niokeru-deta-no-in-memorika-e46becf2-a792-4df7-b614-7d36bae5e42e)) - ISUCON2026のマルチリージョン構成で、ステートマシンレプリケーションによりデータをインメモリ化したアプローチの解説。
- **[Docker HubのPHP公式イメージから自前ビルドへ移行 〜Debian移行と最適化で稼働Pod数を約25%削減〜](https://blog.colopl.dev/entry/2026/11/27/110000)** ([11users](https://b.hatena.ne.jp/entry/s/blog.colopl.dev/entry/2026/11/27/110000)) - COLOPLがPHP公式イメージをやめて自前ビルドに移行し、Debianベース化と最適化でPod数を約25%減らした事例。

## Zenn
- **[モデルの性能が出ないのは AI ゲートウェイのせいかもしれない](https://zenn.dev/google_cloud_jp/articles/7e29a9acf06557)** - AIゲートウェイ経由で別プロバイダーのモデルを呼ぶと、HTTP 200のまま思考のリセットやキャッシュ失効が起きることがある。2ターン目以降の思考トークン数やキャッシュヒット率で異変を検知し、可能ならパススルーを選ぶという実践的な指針。
- **[Claude Code のセキュリティ、2026年11月時点のベストプラクティス（サンドボックス・権限・MCP）](https://zenn.dev/happy_elements/articles/27e14ff6754044)** - 権限ルール、Bashサンドボックス、MCP設定をサンプルとチェックリストにまとめた記事。ダミーファイルで読み取り制限を確認する手順も載っている。
- **[禁止しても止まらないClaudeの「欲」を飼いならしてみる](https://zenn.dev/rescuenow/articles/9d1e89a941f4f1)** - 「頼まれていないことはやるな」という禁止形の指示より肯定形が効くのかを、CSV集計CLIを作らせる実験で検証している。
- **[自宅PCを格安ファイルサーバーとして構築してみた](https://zenn.dev/nextbeat/articles/7c820845a91d7d)** - ポート開放なしで外部からアクセスできる自宅ファイルサーバーを構築。経路の作り方を比較し、Auth0による認証も試している。
- **[結局「オントロジー」って何なのさ 〜概念と良さを4つのレイヤーで整理する〜](https://zenn.dev/algomatic/articles/ece749a7e3cb24)** - 企業データをAIに文脈として理解させる文脈で注目されるオントロジーを、4つのレイヤーで整理した解説。

## Qiita
- **[【Linux/macOS】bashかzshがあれば使える、自動ログ取得ラッパーを作った](https://qiita.com/84MT-K/items/2de7858664ced41ea62b)** - 全量ログ取得が求められる現場向けに、bash/zshだけで動く自動ログ取得ラッパーを作成。Tera Term等に頼らずログを残せる（冒頭抜粋からの紹介）。
- **[曖昧をなくす AI 専用の言語、AImy をつくったらてんで役に立たなかったでござる](https://qiita.com/kazuneet/items/ed8974cde032212e97a4)** - 「AIが書いてAIが読むなら人間向けの読みやすさは不要では」という発想で独自言語を試作した検証記録。タイトル通り結果は芳しくなかった（冒頭抜粋より）。
- **[コピペでSSHしていた初心者が、仕組みから学び直してみる](https://qiita.com/Yuzuki-ki/items/b23e578d820d411bcb92)** - コマンドをコピペして入れていたSSHを、仕組みから学び直す記事。基礎の整理に向く。
- **[【公式】Pyxelのユーザー作品集に「Play」ボタン追加！ ブラウザですぐに遊べます](https://qiita.com/kitao/items/21044c77a6abe10afd80)** - Python向けレトロゲームエンジンPyxelの作品集に、ブラウザで即プレイできるボタンが追加された（公開8年、GitHub Star 1.9万弱）。

## AWS 新着
- **[Amazon Neptune introduces Neptune Graph Sessions, smaller graphs designed for agents that scale to zero and resume automatically](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-neptune-graph-sessions-generally-available)** (2026-11-27) - エージェント・ユーザー・タスクごとに小さなグラフを持てるGA機能。メモリとCPUが自動でスケールし、アイドル時はゼロまで縮退して自動再開する。
- **[AWS CloudFormation makes resource coverage comprehensive with 206 new types](https://aws.amazon.com/about-aws/whats-new/2026/11/cloudformation-coverage-expansion/)** (2026-11-24) - 88サービスで206のリソースタイプに対応。SageMaker HubやBedrock AgentCore PolicyEngineなども含まれ、IaCのカバレッジの穴が大きく埋まる。
- **[AWS IAM extends trusted identity propagation to IAM federation and IAM Roles Anywhere, and simplifies it in IAM Identity Center](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-iam/)** (2026-11-25) - ユーザーやワークロードのIDをリクエストに載せて伝播する機能が、IAMフェデレーションとRoles Anywhereにも拡張された。IAMポリシー条件でそのIDを使える。
- **[AWS Lambda now supports a batch size of up to 10,000 messages for Amazon SQS FIFO queues](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-lambda-10K-batch-size-SQSFIFO/)** (2026-11-20) - provisioned modeのSQS FIFOイベントソースで、バッチサイズ上限が10件から10,000件に拡大。FIFOキューの処理スループット設計が変わる。
- **[Amazon S3 Vectors raises the filterable metadata limit to 40 KB per vector](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-vectors-raises-filterable-metadata-40kb-per-vector/)** (2026-11-20) - ベクトルごとのフィルタ可能メタデータ上限が2KBから40KBへ。カテゴリ・権限・タイムスタンプなど多くの属性でフィルタできる。

## Lobsters
- **[The State of Allocators in 2026 - Finally Stabilised](https://cetra3.github.io/blog/state-of-allocators-2026-finally-stabilised/)** (42pt) - Rustのカスタムアロケータ対応の2026年時点の状況をまとめた記事。安定化が進んだ現状を整理している。
- **[In defense of lock poisoning in Rust (2025)](https://sunshowers.io/posts/on-poisoning/)** (32pt) - Rustの`Mutex`のロックポイズニングを擁護する議論。パニック時に壊れた状態を検知する仕組みの価値を論じ、コメントも活発（16件）。
- **[Why optimistic updates are corrosive](https://datastar-instant-intent.ndyg.cross.stream/corrosive/)** (17pt) - UIの楽観的更新が、サーバー状態との乖離や複雑さを招く問題を批判的に論じる。Datastar系の「サーバー主導UI」の立場からの主張。
- **[Exception Best Practices](https://www.well-typed.com/blog/2026/11/exception-best-practices/)** (7pt) - Well-TypedによるHaskellの例外処理のベストプラクティス。非同期例外などの落とし穴を扱う。

## dev.to
- **[mmap, fsync, and WALs: Low-Level Lessons That Make System Design Click](https://dev.to/abhiram_karanth/mmap-fsync-and-wals-low-level-lessons-that-make-system-design-click-1j66)** - mmap、fsync、先行書き込みログ（WAL）といった低レイヤーの仕組みから、永続化と耐久性の設計を理解する記事。
- **[The Evolution of etcd Storage: A Distributed /etc in RAM (v0.1 - v0.4)](https://dev.to/frosnerd/the-evolution-of-etcd-storage-a-distributed-etc-in-ram-v01-v04-3d3o)** - etcd初期のストレージが、インメモリのディレクトリツリー、goraft合意、JSONスナップショットから始まり、v2に至った経緯をたどる。
- **[The Best Café in Town Turns People Away. Your System Should Too](https://dev.to/thethirdcup/the-best-cafe-in-town-turns-people-away-your-system-should-too-5ehh)** - 満席のカフェを例に、負荷時に新規リクエストを断る（ロードシェディング／レート制限）設計の考え方を説明する。
- **[Adopt Pre-Existing Docker Containers with Zero Downtime: Reverse-Engineering docker-compose.yml in Gubernator v4.0](https://dev.to/gde/adopt-pre-existing-docker-containers-with-zero-downtime-reverse-engineering-docker-composeyml-in-3cic)** - 本番ホスト上の既存コンテナを`docker inspect`から検出し、docker-compose.ymlを逆生成して無停止でStack管理下に取り込む手法。
- **[The Check That Catches the Loop Misses the Fixation](https://dev.to/aheadkit/the-check-that-catches-the-loop-misses-the-fixation-56hg)** - ローカルのトリアージ用エージェントが同じGitHub Issue5件を6回列挙した事例から、ループ検知では拾えない「固着」の問題を論じる。

## TechCrunch
- **[1Password said hackers broke into its internal systems, but customer passwords are safe](https://techcrunch.com/2026/11/25/1password-said-hackers-broke-into-its-internal-systems-but-customer-passwords-are-safe/)** - 従業員の社内アカウントが侵害され、顧客に関する一部情報が持ち出された。顧客のパスワード自体は安全だと同社は説明している。
- **[Todoist confirms 6% of customers' details were stolen in data breach](https://techcrunch.com/2026/11/25/todoist-confirms-6-of-customers-details-were-stolen-in-data-breach/)** - 本番システムに侵入され、顧客の約6%分のメールアドレス、パスワードハッシュ、アカウント作成日が盗まれた。
- **[Character.AI's plan to auction off users' private chats challenged by state AGs](https://techcrunch.com/2026/11/25/state-ags-fight-character-ais-plan-to-auction-off-users-private-chats/)** - 破産手続き中の売却対象に、米国の2,100万超のアカウント（未成年210万を含む）の機微な個人データが含まれるとして、州司法長官が異議を唱えた。
- **[Amazon and Meta reportedly in talks to lift blockade on AI agent Muse](https://techcrunch.com/2026/11/25/amazon-and-meta-reportedly-in-talks-to-lift-blockade-on-ai-agent-muse/)** - AmazonがMetaのAIエージェント「Muse」を約2か月ブロックしている件で、解除に向けた協議が報じられた。エージェントによるサイト操作の可否という、プラットフォーム側の対応が焦点。

## Ars Technica
- **[Microsoft's historic cloud outage exposed an engineering "fog of war"](https://arstechnica.com/gadgets/2026/11/microsofts-historic-cloud-outage-exposed-an-engineering-fog-of-war/)** - 社内メモから、Microsoftが「Code Red」体制で見直しを進め、1時間での復旧目標を掲げていることが明らかになった。障害対応の内情を伝える記事（公開から約77時間）。
- **[A familiar Iranian hacking group has found a new way to cause chaos](https://arstechnica.com/security/2026/11/a-familiar-iranian-hacking-group-has-found-a-new-way-to-cause-chaos/)** - フランスがイランのサイバー部隊を、数百のスーパーマーケット冷凍庫を妨害した犯人として名指しした。制御系機器への攻撃の実例。
- **[Backblaze explains why it's sharing customer information with advertisers](https://arstechnica.com/information-technology/2026/11/backblaze-explains-why-its-sharing-customer-information-with-advertisers/)** - Backblazeが顧客情報を広告主と共有する理由を説明。バックアップやストレージ上のファイル自体は共有しないと述べている。

## 注目トピック
今日目立ったのは「AIエージェントを動かす基盤の足回り」です。AWSはエージェントごとにゼロまで縮退するNeptune Graph Sessionsを出し、Zennでは AIゲートウェイ経由で思考状態やキャッシュが黙って失われる問題や、Claude Codeの権限・サンドボックス設計が話題になりました。エージェント向けの基盤、観測、権限といった運用面の知見が、各ソースで同時に出てきています。

もう一つは、セキュリティインシデントと耐障害設計です。1Password、Todoistの侵害、Character.AIのデータ売却をめぐる論争が続く一方、Microsoftの大規模障害の内情やロードシェディング、WAL、etcdの歴史といった堅牢なシステム設計の話題も並びました。なお、はてブで話題だったロリポップの情報漏えいは、過去レポートで扱い済みのため今回は割愛しています。
