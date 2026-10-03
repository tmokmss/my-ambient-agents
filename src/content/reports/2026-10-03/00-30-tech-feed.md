---
title: "Tech Feed ダイジェスト（2026年10月3日）"
date: "2026-10-03T00:30"
category: "summary"
summary: "Linux 7.4 Steal Governor、ECS×VPC Lattice のカナリアデプロイ、Zig 0.17、Cloudflare の量子耐性証明書など"
tags: ["linux", "aws", "security", "zig", "ai", "kubernetes", "cryptography"]
---

## はてなブックマーク (テクノロジー)
- **[vCPUを減らせばVMが速くなる！？ Linux 7.4でマージが期待される“Steal Governor”](https://gihyo.jp/article/2026/10/daily-linux-261001)** ([6users](https://b.hatena.ne.jp/entry/s/gihyo.jp/article/2026/10/daily-linux-261001)) - ホストのCPU競合で発生するsteal timeを見て、ゲスト側が使うvCPU数を動的に絞る仕組み。vCPUを減らしたほうがスケジューリング待ちが減りスループットが上がる場合があるという、仮想化環境のチューニングに効く話。
- **[OpenPOI API — 日本全国337万件のPOI検索API](https://openpoiapi.com/)** ([215users](https://b.hatena.ne.jp/entry/s/openpoiapi.com/)) - 国内の施設・地点情報（POI）を横断検索できる公開API。地図・位置情報系アプリで自前のデータ整備を省ける。
- **[Qwen3.8-27Bの精度98%を維持しつつ9倍小型化しiPhoneでも動く「Bonsai-2-27B」など生成AI技術5つを解説（生成AIウィークリー）](https://www.techno-edge.net/article/2026/10/02/5549.html)** ([5users](https://b.hatena.ne.jp/entry/s/www.techno-edge.net/article/2026/10/02/5549.html)) - 極端な量子化・圧縮でオンデバイス実行を狙うモデルなど、直近の生成AI技術をまとめた週次解説。
- **[「完全国産」AI、KDDI傘下のELYZAが無料公開　「LLM-jp-4」ベースに性能強化](https://www.itmedia.co.jp/aiplus/article/2610/02/2000001965/)** ([28users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/aiplus/article/2610/02/2000001965/)) - 国産LLM「LLM-jp-4」を土台に追加学習した日本語モデルの無料公開。国産ベースモデルの選択肢が増える。
- **[e2e: The open source AI testing framework](https://tester.army/e2e)** ([20users](https://b.hatena.ne.jp/entry/s/tester.army/e2e)) - AIエージェントでE2Eテストを記述・実行するOSSフレームワーク。

## Zenn
- **[【Cursor pstack】AIエージェントに開発を任せる環境をつくる ―月2,500件のPRを支えた開発基盤とは？](https://zenn.dev/sc30gsw/books/080faba713547b)** - Cursorのpstackを手がかりに、成果物を検証する仕組みやPlaybook等、エージェントに開発を任せる環境づくりを解説する実践ガイド。
- **[新規プロダクトのバックエンド自動テスト戦略 ─UT 中心から API テスト中心へ─](https://zenn.dev/canary_techblog/articles/348d976da70857)** - ユニットテスト中心で整備してきたバックエンドのテストを、APIテスト中心へ移した経緯と判断。
- **[AI 駆動開発で「設計」はどこに書くのか ― 振る舞いをテストで検証できる「仕様」にしてみる](https://zenn.dev/softbank/articles/6f98cf7c4ebfd3)** - AIが既存コードの作法に合わせて実装する時代に、設計を検証可能な仕様（テスト）として残すアプローチ。
- **[OpenAI DevDay 2026 発表まとめ](https://zenn.dev/schroneko/articles/openai-devday-2026)** - サンフランシスコ現地から、発表内容と関連リソースをまとめた記事（加筆中）。

## Qiita
- **[WordPress 4.7〜7.1.1に未認証の不正読込 CVE-2026-87902──7.1.2更新と攻撃痕跡の確認](https://qiita.com/jiis-sasaki/items/b9e58eb2b47f6d25dff2)** - 9/22に修正されたコアの脆弱性について、更新手順と攻撃痕跡の確認方法を運用担当者向けに整理（冒頭抜粋の範囲）。
- **[ゲーム向けアクター指向スクリプト言語の設計メモ](https://qiita.com/shun126/items/e5a9af6a9de79e3d49df)** - 個人制作のスクリプト言語「Mana」が1.0.0に到達。Webで動作確認でき、設計判断をメモとして残している。
- **[日本語入力の「黒箱」を開けます。KeyroIME OpenCore、正式オープンソース化](https://qiita.com/KeyroIME/items/30c140aa79d3bd335841)** - 内部が見えにくい日本語IMEのコア部分をOSS化したという告知。
- **[【AWS】Ruby on RailsアプリケーションをLambda Web Adapterで動かしてみた](https://qiita.com/PDC-Kurashinak/items/b56cd95751c9f70327cb)** - 既存のRailsアプリをLambda Web Adapter経由でLambda上で動かす検証。

## AWS 新着
- **[Amazon ECS adds Amazon VPC Lattice support for blue/green, linear, and canary deployments](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-vpc-lattice-blue-green-deployments)** (2026-10-02) - VPC Latticeを使うECSサービスで、ブルーグリーン／リニア／カナリアのデプロイ戦略が組み込みで使えるようになった。
- **[Amazon Aurora DSQL now supports partial indexes](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-dsql-partial-indexes/)** (2026-10-02) - 条件を満たす行だけを索引化でき、クエリ性能向上とインデックス容量の削減が見込める。
- **[Amazon EKS and Amazon EKS Distro now support Kubernetes version 1.37](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-distro-kubernetes-version-1-37)** (2026-10-02) - EKS/EKS DistroがKubernetes 1.37に対応。クラスタのアップグレード計画に影響する。
- **[Amazon Bedrock Managed Agents, powered by OpenAI, is now available in preview](https://aws.amazon.com/about-aws/whats-new/2026/09/bedrock-managed-agents-preview/)** (2026-09-29) - AWSとOpenAIが共同開発した、OpenAIのAgents APIをAWSネイティブにカスタマイズしたマネージドエージェント基盤がプレビュー提供開始。
- **[Amazon EventBridge relaunches event buses for enterprise scale](https://aws.amazon.com/about-aws/whats-new/2026/09/eventbridge-relaunches-custom-event-buses/)** (2026-09-24) - 組織規模でチームを疎結合にできるよう強化されたカスタムイベントバスが登場。

## Lobsters
- **[Zig 0.17.0 Release Notes](https://ziglang.org/download/0.17.0/release-notes.html)** (33pt) - Zig 0.17.0のリリースノート。言語・標準ライブラリ・ツールチェーンの変更点が並ぶ。
- **[Actual RFC1149 packet being auctioned](https://onlineonly.christies.com/s/fine-printed-books-manuscripts-science/carrier-pigeon-internet-protocol-150/325216)** (56pt) - エイプリルフール RFC の伝書鳩によるIP（RFC1149）の実パケットがクリスティーズで競売に。
- **[I got targeted: Trying to get your credentials via a git post-checkout hook](https://frankwiles.com/posts/i-got-targeted/)** (8pt) - 不審なリポジトリの git post-checkout フックで資格情報を狙われた体験談。clone した直後に任意コードが走り得るという注意喚起。
- **[Updates to Full Disk Access in macOS](https://developer.apple.com/news/?id=p6zjojqw)** (8pt) - AppleがmacOSのフルディスクアクセス制御を強化。AIエージェントによる広範なファイルアクセスのリスクが背景で、TechCrunchも同じ件を別角度で報じている。
- **[The Four Horsemen of Agentic Coding](https://distantprovince.substack.com/p/the-four-horsemen-of-agentic-coding)** (22pt) - エージェント型コーディングが陥りやすい4つの落とし穴を論じる実践論。

## dev.to
- **[Redis says the key is gone. The memory comes back 22 seconds later.](https://dev.to/remdore/redis-says-the-key-is-gone-the-memory-comes-back-22-seconds-later-5ap5)** - 500万キーが同一秒に期限切れになった際、メモリ（810MB）が22.8秒間解放されなかった現象の検証。TTLを揃えるリスクを示す。
- **[Telstra outage explained: how one GPS card set the network to 2006](https://dev.to/axrisi/telstra-outage-explained-how-one-gps-card-set-the-network-to-2006-mi9)** - 古いファームの再起動したGPSカードが2006年を返し、時刻同期でネットワークが影響を受けた障害のポストモーテム解説。
- **[Repacked QAT Gemma 4 on One TPU v5e: 12B Serves at 675 Tokens per Second](https://dev.to/gde/repacked-qat-gemma-4-on-one-tpu-v5e-12b-serves-at-675-tokens-per-second-15dd)** - 量子化対応学習済みGemma 4をint4/int8に再パックし、vLLMで単一TPU v5e上から毎秒675トークンで配信した検証。
- **[Rediscovering the Schwartzian Transform: Why I Had to Comment on a Flutter Performance Article](https://dev.to/gde/rediscovering-the-schwartzian-transform-why-i-had-to-comment-on-a-flutter-performance-article-30l0)** - ソートで鍵計算を一度に済ませるSchwartzian Transformを、Flutterの性能議論に当てはめた考察。
- **[Deploying LiteLLM: An Open-Source AI Gateway](https://dev.to/vultr/deploying-litellm-an-open-source-ai-gateway-2idp)** - 100以上のLLMをOpenAI互換APIで束ねるOSSゲートウェイ LiteLLM を Docker/Postgres で構築する手順。

## TechCrunch
- **[Circuit Breaker Labs hopes to make AI safer for your kids (and you)](https://techcrunch.com/2026/10/02/circuit-breaker-labs-hopes-to-make-ai-safer-for-your-kids-and-you/)** - AIチャットの安全性を高めることを狙うスタートアップの紹介。
- **[Sanders introduces bill to ban the federal government from using Flock](https://techcrunch.com/2026/10/02/sanders-introduces-bill-to-ban-the-federal-government-from-using-flock/)** - ナンバープレート読取システム全般に及ぶ、連邦政府による利用禁止法案。監視技術規制の動き。

※ 他ソースとの重複・過去掲載分を除くと、開発者向けの新規記事は2件のみだった。

## Ars Technica
- **[Cloudflare plans to issue quantum-safe TLS certificates](https://arstechnica.com/security/2026/09/cloudflare-plans-to-issue-quantum-safe-tls-certificates/)** - ウェブ認証エコシステムの大幅な見直しの一環として、Cloudflareが量子耐性のあるTLS証明書の発行を計画。
- **[Four groups caught using the same Chrome and Windows exploit kit](https://arstechnica.com/information-technology/2026/09/4-groups-caught-using-the-same-chrome-and-windows-exploit-kit/)** - パッチ適用までの空白期間と、AIによる脆弱性発見の加速が背景にある、複数の攻撃グループによる共通エクスプロイトキットの利用。
- **[Why this month's Microsoft patch release is a doozy](https://arstechnica.com/security/2026/09/microsoft-patches-a-record-972-vulnerabilities-112-of-them-critical/)** - 今月のMicrosoftパッチは過去最多の972件（うち重大112件）。AI支援攻撃の増加を見越した動き。
- **[ClickFix attacks infecting PCs and Macs are going viral](https://arstechnica.com/security/2026/09/clickfix-attacks-infecting-pcs-and-macs-are-going-viral/)** - 利用者にコマンドを自分で実行させるClickFix攻撃が、PC・Macの双方で拡大。
- **[Someone got Doom in an SQL database](https://arstechnica.com/gaming/2026/10/can-it-run-doom-sql-database-edition/)** - 約1,300行のSQLでビットマップ描画を行い、35fpsでDoomを動かした遊び心のある実装。

## 注目トピック
AIエージェントの周辺で「どう任せ、どう封じるか」が前面に出た。Zennではpstackなど開発環境づくりや仕様のテスト化、AWSではBedrock Managed AgentsやEventBridge刷新、macOSのフルディスクアクセス強化など、エージェントの実行基盤と権限管理の話が並ぶ。一方でWordPressの脆弱性、共通エクスプロイトキット、ClickFix、過去最多の972件のパッチなど、攻撃側のAI活用が現実的な脅威になっている。

インフラ面では、Linux 7.4のSteal Governor、ECSのカナリアデプロイ、Aurora DSQLの部分インデックス、Redisの期限切れメモリ挙動など、性能と運用の細部に効く話題が目立った。Cloudflareの量子耐性証明書やRDSのPQ-TLSなど、暗号の移行準備も進んでいる。
