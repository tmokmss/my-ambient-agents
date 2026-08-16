---
title: "Tech Feed ダイジェスト（2026年7月13日）"
date: "2026-07-12T22:00"
category: "summary"
summary: "スマートグラスによる新型盗撮・AppleがOpenAIを提訴・DMS Schema ConversionのAIエージェント自動化・Aurora DSQLのCDC GAなど"
tags: ["ai", "agent", "security", "aws", "devops", "hardware"]
---

## はてなブックマーク (テクノロジー)

- **[前の客のATM暗証番号も丸見え…日本でも普及し始めた「スマートグラス」を使用してみた結果。"新型盗撮"に悪用の可能性も](https://nikkan-spa.jp/2172263)** ([231users](https://b.hatena.ne.jp/entry/s/nikkan-spa.jp/2172263)) - スマートグラスの録画機能を実際に使用し、ATMの暗証番号入力など他人のプライバシーが意図せず記録されてしまう危険性を検証した記事。カメラの有無が争点になりがちなスマートグラスにおいて、常時装着型デバイスならではの「気づかれない盗撮」リスクを具体的に示している。
- **[AI時代の「会社のOS」をつくる 〜Open Knowledge Format（OKF）とRAGで組織知を配れる形にする〜](https://zenn.dev/yamitake/articles/okf-open-knowledge-format-corporate-os)** ([186users](https://b.hatena.ne.jp/entry/s/zenn.dev/yamitake/articles/okf-open-knowledge-format-corporate-os)) - 組織内に散らばる暗黙知やドキュメントを、AIエージェントが参照しやすい形式（OKF）として構造化し、RAGで配布可能にする設計思想を提案した記事。属人化しがちな社内ナレッジを「AIが読める資産」に変換する試みとして注目されている。
- **[GitHub Actions の parallel でデプロイは8分→3分、CI はコスト3割減になった](https://zenn.dev/hatsu/articles/github-actions-steps-parallel)** ([99users](https://b.hatena.ne.jp/entry/s/zenn.dev/hatsu/articles/github-actions-steps-parallel)) - 2026年6月にGAされたGitHub Actionsのステップ並列実行機能（parallel/background）を実際のデプロイパイプラインに適用し、所要時間とコストを大幅に削減した実践記事。ジョブ単位に限られていた並列化がステップ単位まで広がったことによる具体的な効果を数値で示している。
- **[Otty — A fast, modern terminal](https://otty.sh/)** ([95users](https://b.hatena.ne.jp/entry/s/otty.sh/)) - 高速な描画とモダンなUXを両立させることを目指した新しいターミナルエミュレータ「Otty」が公開された。GhosttyやWarpなど近年相次ぐ次世代ターミナル開発競争の中で、独自の設計判断を打ち出している。
- **[有名エンジニアの .claude/skills 公開ラッシュから学ぶ、良い Claude Code Skills の書き方](https://note.com/ai_eng_tech/n/n1ef4d57df219)** ([78users](https://b.hatena.ne.jp/entry/s/note.com/ai_eng_tech/n/n1ef4d57df219)) - 著名エンジニアたちが相次いで自作のClaude Code Skillsを公開している動きを分析し、再利用性が高く効果的なSkillの書き方の共通パターンを整理した記事。Skillという単位でのプロンプト設計知が急速に蓄積されつつある状況を伝えている。

## Zenn

- **[ハーネスエンジニアリングとループエンジニアリングの違いとは？ aws aidlc workflow kitから整理する](https://zenn.dev/tacky_exception/articles/4d77fef5a36e42)** - AIコーディングエージェントを安定運用するための「ハーネスエンジニアリング」と「ループエンジニアリング」という2つの概念の違いを、AWSのaidlc-workflows kitの構造をもとに整理した記事。エージェントが自律的に計画・実装・検証まで行える背景にある設計思想を解説している。
- **[Excel/VBAとモダン開発のあいだ ─ 2026年に相次いだ XLIDE・xlflow・xlsm_devkit](https://zenn.dev/minipoisson/articles/excel-vba-modern-dev)** - 2026年に相次いで登場したExcel/VBA向けの開発支援ツール3種の設計思想の違いを比較した記事。長らく取り残されていたExcel/VBAとモダンな開発環境の間の空白地帯が、なぜこの時期に動き出したのかを論じている。
- **[ナレッジグラフだけじゃない。AIエージェントが使う5種類のグラフ](https://zenn.dev/knowledge_graph/articles/ai-agent-five-graph-types)** - AIエージェントの文脈で使われるグラフ構造を、ナレッジグラフに限らずNode/Edgeの意味に応じて5種類に分類整理した記事。GraphRAGとの違いを含め、エージェント設計におけるグラフ活用の全体像を提示している。
- **[Rust + Tauri で古い Mac 風のシステムモニタを作ってみた](https://zenn.dev/m2lab/articles/rust-tauri-sysgauge)** - Rust（Tauri v2）とReactを使い、CPU使用率やメモリなどを表示するクロスプラットフォームのシステムモニタを、あえて90年代Mac風のデザインで自作した記事。実用性とレトロなUIデザインを両立させた個人開発の工夫が語られている。
- **[Cloudflare Registrar + R2 で個人開発アプリの公開基盤を構築した記録](https://zenn.dev/unsoluble_sugar/articles/a6fb2c3efd5a66)** - 個人開発のWebアプリについて、独自ドメイン取得からR2での静的配信までの公開基盤を数時間で構築した際の手順・設定・ハマりどころをまとめた記事。低コストで完結させる個人開発インフラの実例として参考になる。

## Qiita

- **[Claude Code・Codex用に、超爆速で超安全なサンドボックスを作る方法](https://qiita.com/Koukyosyumei/items/3bd4696237ea64c38971)** - AIコーディングエージェントがシェルコマンドやネットワークアクセスを実行する際のリスクを抑えつつ、実行速度を落とさないサンドボックス環境の構築方法を紹介した記事。エージェントに強い権限を与える際の安全性と速度のトレードオフを具体的に扱っている。
- **[フロンティアAIの時代における脆弱性診断・ペネトレーションテストのあり方](https://qiita.com/suzukengo/items/36194332bf30137b9ac5)** - 新たなフロンティアモデルが主要OS・ブラウザのゼロデイ脆弱性を自律的に大量発見したという発表を受け、従来型の脆弱性診断・ペネトレーションテストという職能がどう変わるべきかを論じた記事。AIによる脆弱性発見の高速化がセキュリティ業界の前提を揺るがしている状況を伝えている。
- **[【AWS小ネタ】無効化している1回限りのEventBridgeスケジュールを実行時刻を過ぎてから有効化すると即発火する](https://qiita.com/eureka_/items/7aaf1f9d99228fdad745)** - EventBridge Schedulerの1回限りスケジュールを、実行予定時刻を過ぎた状態で無効化→有効化すると即座に発火してしまうという仕様上の落とし穴を、実体験をもとに共有した記事。同じ罠にはまる開発者を減らすための具体的な注意喚起。
- **[Miseのdotfiles機能、ご存知でしょうか？](https://qiita.com/umekikazuya/items/ec67802c538afdf924aa)** - バージョン管理ツールMiseに正式リリースされたdotfiles機能を紹介した記事。dotfilesリポジトリの管理をMiseに統合することで、環境構築の一元化がさらに進む可能性を示している。
- **[SPAのContextとuseEffectについて理解を深める](https://qiita.com/har1101/items/01d1a3816852a135d6d9)** - 一覧画面から詳細画面への遷移では正常なのに、同じURLを直接開くと「見つかりません」になるというSPAでよくある不具合を題材に、ContextとuseEffectの実行タイミングを整理した記事。SPA特有のライフサイクル理解のつまずきどころを具体的に解説している。

## AWS 新着

- **[AWS Security Hub now offers Network Scanning to identify publicly reachable resources](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-network-scanning/)** (2026-07-08) - AWS Security Hubに、インターネットから到達可能なリソースを能動的にスキャンして特定する「Network Scanning」機能が追加された。設定ミスによる意図しない公開リソースを、外部からの視点で検知できるようになった。
- **[AWS DMS Schema Conversion now supports AI agent automation](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-dms-sc-ai-agent-automation-mcp-server/)** (2026-07-09) - AWS DMS Schema ConversionがAWS MCP Server経由でのAIエージェント自動化に対応し、Kiro・Claude Code・CursorなどのAIコーディングエージェントを直接接続してスキーマ変換作業を進められるようになった。データベース移行という定型作業の多い領域にもAIエージェント連携が広がっている。
- **[Amazon Aurora DSQL change data capture (CDC) Is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-aurora-dsql-cdc-ga/)** (2026-07-08) - サーバーレス分散SQLデータベースAmazon Aurora DSQLのChange Data Capture機能が正式提供開始となり、リアルタイムのデータベース変更をKinesis Data Streamsへストリーミングできるようになった。イベント駆動アーキテクチャとの連携がしやすくなっている。
- **[Amazon EMR on EKS now supports Apache Spark troubleshooting agent](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-emr-eks-spark-troubleshooting/)** (2026-07-10) - Amazon EMR on EKSに、自然言語でSparkジョブの失敗原因を診断できるトラブルシューティングエージェントが追加された。ログ解析やPySparkコードの修正提案まで自動化され、データエンジニアの障害調査の負担を軽減する。
- **[Amazon Timestream for InfluxDB now publishes database state change events to Amazon EventBridge](https://aws.amazon.com/about-aws/whats-new/2026/07/timestream-influxdb-eventbridge/)** (2026-07-09) - Amazon Timestream for InfluxDBが、インスタンスやクラスターの状態変化イベントをEventBridgeに発行できるようになった。作成や障害切り替えなどのライフサイクルイベントをトリガーに、監視や自動化フローを組みやすくなる。

## Lobsters

- **[Evan's Jujutsu Tutorial](https://evmar.github.io/jjtut/)** (34pt) - Gitに代わるバージョン管理システムJujutsu（jj）の使い方を、実践的なチュートリアル形式で解説した記事。ブランチではなく変更集合（changeset）を中心に据えたjj独特のモデルを、具体的な操作例とともに学べる。
- **[The Proportional Web](https://owickstrom.github.io/the-proportional-web/)** (31pt) - 画面サイズに関わらず一貫した見た目を保つため、ピクセル単位ではなく比率でレイアウトを組む「Proportional Web」という設計思想を提案した記事。レスポンシブデザインの前提そのものを問い直す視点を提供している。
- **[ghostel.el - Terminal emulator powered by libghostty](https://dakra.github.io/ghostel/)** (25pt) - 高速なターミナル実装として知られるlibghosttyをEmacs上で動かすターミナルエミュレータ「ghostel.el」を実装した記事。Emacsの操作性を保ちながらネイティブ級の描画性能を取り込む試みとして注目されている。
- **[reaction: A daemon that scans program outputs for repeated patterns, and takes action](https://framagit.org/ppom/reaction)** (23pt) - プログラムの標準出力・エラー出力をリアルタイムに監視し、繰り返しパターンを検知したら任意のアクションを実行できる汎用デーモン「reaction」を紹介するプロジェクト。ログ監視の自動化を軽量な仕組みで実現しようとする試み。
- **[Today I Rescued 7,234 Old GIFs](https://danq.me/2026/07/10/rescuing-7234-gifs/)** (22pt) - 古いブログに埋め込まれたまま消失しかけていた7,234枚のGIFアニメーションを発掘・復旧した経験を綴った記事。ウェブの古いコンテンツをどう長期的に保存していくかという地道なデジタルアーカイブの実践例。

## dev.to

- **[Mi INSERT tardaba 25 minutos y no era culpa de los datos: construyendo un Data Warehouse de e-commerce con PostgreSQL](https://dev.to/dnarram/mi-insert-tardaba-25-minutos-y-no-era-culpa-de-los-datos-construyendo-un-data-warehouse-de-4e14)** - PostgreSQLで11万行超のINSERTが25分もかかっていた原因を追った記事。データやSQL自体には問題がなく、実際にはインデックスやトリガーなど別の要因がボトルネックだったことを突き止めた、星型スキーマ構築の実践的なデバッグ記録。
- **[I Built an AI Agent with Claude's Tool-Use Loop (Web Search, SQL, and More)](https://dev.to/venkatarahul27/i-built-an-ai-agent-with-claudes-tool-use-loop-web-search-sql-and-more-885)** - Claudeのツール呼び出しループを使い、Web検索やSQL実行などの機能を持つAIエージェントを実際に構築した記事。「エージェント」という言葉が抽象的に語られがちな中、最小限の実装でその核となる仕組みを示している。
- **[The handshake is the easy part. Agent payments still haven't named the custody split.](https://dev.to/mspro3210/the-handshake-is-the-easy-part-agent-payments-still-havent-named-the-custody-split-472n)** - Coinbase・Cloudflare・Stripeが主導し、Google・AWS・Visa・Mastercardなども加わるx402 Foundationの「エージェント決済プロトコル」が急速に収斂しつつある一方、資金の保管責任の分担という核心部分がまだ定まっていない点を指摘した記事。AIエージェントに決済を任せる上での実務的な課題を扱っている。
- **[Architecting Kubernetes Deployments with Python](https://dev.to/joachim8675309/architecting-kubernetes-deployments-with-python-4jhe)** - Pythonでクラウドインフラを自動化する際、公式Kubernetes Pythonクライアントが開発者に委ねてくる「Kubernetesマニフェストをどこでどう管理すべきか」というアーキテクチャ上の判断を整理した記事。
- **[The monitoring agent that cannot be told what to do](https://dev.to/artem_meleshkin_0c4e0a675/the-monitoring-agent-that-cannot-be-told-what-to-do-33kd)** - 監視エージェントが外部からのコマンドを一切受け付けないという設計をあえて不変の制約としてアーキテクチャに組み込んだ事例を紹介した記事。監視対象からの指示に従わないことで、侵害された環境からの改ざんを防ぐという逆転の発想を説明している。

## TechCrunch

- **[Apple sues OpenAI over alleged trade secret theft](https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/)** - AppleがOpenAIを相手取り、営業秘密の窃取を主導したとして提訴した。訴状ではOpenAIの経営幹部を含む、Appleの元社員が関与したとされている。AI業界の主要プレイヤー同士の対立が法廷に持ち込まれた大きな事件。
- **[EU threatens Meta with fines over addictive features on Facebook and Instagram](https://techcrunch.com/2026/07/10/eu-threatens-meta-with-fines-over-addictive-features-on-facebook-and-instagram/)** - 欧州連合が、無限スクロールや自動再生、プッシュ通知、パーソナライズされたレコメンドアルゴリズムなどの「依存性の高い機能」がデジタルサービス法（DSA）違反にあたるとして、Metaに罰金の可能性を警告した。UX設計そのものを規制対象とする動きが強まっている。
- **[Oratomic raises $300M to build a viable quantum computer that needs only 20K qubits](https://techcrunch.com/2026/07/10/oratomic-raises-300m-to-build-a-viable-quantum-computer-that-needs-only-20k-qubits/)** - 量子コンピュータスタートアップOratomicが、必要な量子ビット数をわずか2万個に抑えた実用的な量子コンピュータの実現を目指し3億ドルを調達した。ARCH Venture Partners、Spark Capital、Khosla Venturesが主導するラウンドで、量子ビット数の削減という切り口での差別化を図っている。
- **[SK Hynix raises $26.5B in the biggest foreign IPO in US history, is urged to build new US fabs](https://techcrunch.com/2026/07/10/sk-hynix-raises-26-5b-in-the-biggest-foreign-ipo-in-us-history-is-urged-to-build-new-us-fabs/)** - 韓国のメモリメーカーSK Hynixが米国史上最大の外国企業IPOとなる265億ドルを調達した。AIチップブームが生んだ大型上場であり、SK HynixとSamsungには米国内への新工場建設を求める圧力も強まっている。
- **[TechCrunch Mobility: A robotaxi ultimatum](https://techcrunch.com/2026/07/12/techcrunch-mobility-a-robotaxi-ultimatum/)** - 自動運転タクシー業界の最新動向をまとめた定例コラム。AIが交通分野に及ぼす影響がかつてなく大きくなっている中で、各社が突きつけられている選択について論じている。

## Ars Technica

- **[Firmware update bricks Hue Bridge Pro devices; Philips gives free replacements](https://arstechnica.com/gadgets/2026/07/firmware-update-bricks-hue-bridge-pro-devices-philips-gives-free-replacements/)** - Philips HueのスマートホームハブHue Bridge Proに配信されたファームウェア更新が一部端末を起動不能にし、Philipsは影響を受けたユーザーに無償交換で対応した。IoTデバイスのOTAアップデートが抱えるリスクを改めて示す事例。
- **[Like a cheat code for your car: We investigate ECU tuning](https://arstechnica.com/cars/2026/07/like-a-cheat-code-for-your-car-we-investigate-ecu-tuning/)** - 自動車のECU（電子制御ユニット）を書き換えて性能を引き出す「ECUチューニング」の実態を取材した記事。自動車メーカーがチップをロックダウンする動きと、それを突破しようとするチューナーとのいたちごっこが続いている状況を伝えている。
- **[Ransomware negotiator hired to represent victims was working for the attackers](https://arstechnica.com/tech-policy/2026/07/ransomware-negotiator-helped-attackers-extort-his-own-clients-gets-6-year-sentence/)** - 被害者側の代理人として身代金交渉を担っていた人物が、実は攻撃者側と結託し依頼者から不正に利益を得ていたことが発覚し、禁錮6年の判決を受けた。セキュリティインシデント対応を担う「信頼された第三者」自体が侵害されるリスクを浮き彫りにしている。
- **[China recovered its first reusable rocket and showed a new way to do it](https://arstechnica.com/space/2026/07/china-recovered-its-first-reusable-rocket-and-showed-a-new-way-to-do-it/)** - 中国の国有宇宙企業が、打ち上げ後のロケットブースターの回収に初めて成功した。SpaceXとは異なる独自の回収方式を採用しており、再使用型ロケット開発における商業宇宙競争の広がりを示している。
- **[The real mystery behind Moana: After 1,700 years, why did Polynesians suddenly sail east?](https://arstechnica.com/culture/2026/07/the-real-mystery-behind-moana-after-1700-years-why-did-polynesians-suddenly-sail-east/)** - ポリネシア人が長い停滞期を経て突然東方への航海を再開した謎について、新たな気候データがその背景を説明しうるという研究を紹介した記事。データに基づき歴史的な謎を検証するアプローチ自体が興味深い。

## 注目トピック

今回のダイジェストで際立つのは、AIエージェントに強い権限や自律性を与える動きと、それを安全に運用するための設計・検証の両輪が同時に進んでいる点だ。QiitaのClaude Code・Codex向け高速サンドボックス構築や、フロンティアAIが主要OSのゼロデイを大量発見したことを受けたペネトレーションテストのあり方の再考、dev.toの「外部からの指示を一切受け付けない監視エージェント」という設計は、いずれもAIエージェントの実行権限をどう制約し検証するかという課題に取り組んでいる。一方でAWSのDMS Schema ConversionがMCP Server経由のAIエージェント自動化に対応し、EMR on EKSにSparkトラブルシューティングエージェントが加わるなど、定型的な運用業務へのエージェント組み込みは着実に広がっており、「委ねる範囲を広げながら、いかに制御を保つか」という緊張関係が全体を貫いている。

もう一つの軸は、大手テック企業間の対立や規制当局との摩擦が具体的な法的アクションとして表面化してきたことだ。TechCrunchが報じたAppleによるOpenAI提訴は、AI業界の競争が人材引き抜きや営業秘密を巡る訴訟にまで発展したことを示す象徴的な事件であり、EUがMetaの無限スクロールや自動再生といったUX設計そのものを規制対象として罰金を警告した件も、プラットフォームの成長エンジンだった機能が法的リスクに転じつつある現状を映している。はてなブックマークのスマートグラスによる新型盗撮のリスクや、Ars TechnicaのHue Bridge Proのファームウェア障害、ランサムウェア交渉人による裏切りの事例も合わせると、便利さの裏にあるプライバシー・信頼・運用リスクへの目配りが一段と重要になっていることがうかがえる。
