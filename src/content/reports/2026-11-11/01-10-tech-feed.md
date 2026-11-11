---
title: "Tech Feed ダイジェスト（2026年11月11日）"
date: "2026-11-11T01:10"
category: "summary"
summary: "LLM の推論コスト・品質変動、Grok Build 情報漏洩と *sshole 悪用、AWS の ElastiCache 検索対応など 8 ソースの技術トピック"
tags: ["ai", "llm", "security", "aws", "devops", "claude-code", "database"]
---

## はてなブックマーク (テクノロジー)
- **[NVIDIAの「長文コンテキスト不要」論文](https://zenn.dev/knowledgesense/articles/bd917ed6829121)** ([51users](https://b.hatena.ne.jp/entry/s/zenn.dev/knowledgesense/articles/bd917ed6829121)) - AI エージェントが長い文章を読むほど推論コストが膨らむ問題に対し、精度を保ったままコストを下げる NVIDIA 研究チームの新手法（2026年11月発表の論文）を日本語で整理した解説。
- **[Claude Opus 5.5の推論能力が11月3日から急激に低下したとの指摘、1400件の利用履歴から変化が判明](https://gigazine.net/news/20261110-claude-opus-nerf/)** ([94users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261110-claude-opus-nerf/)) - 約1400件の利用履歴の分析から、11月3日以降にモデルの推論性能が落ちたとする指摘を紹介。API 経由のモデルを使うプロダクトでは、品質の回帰を自前で検知する必要性を示す事例。
- **[Hide your slop PR descriptions behind <details><summary>](https://simonwillison.net/2026/Nov/9/details-summary/)** ([28users](https://b.hatena.ne.jp/entry/s/simonwillison.net/2026/Nov/9/details-summary/)) - Simon Willison による、AI が生成した冗長な PR 説明文を `<details><summary>` で折りたたむ運用の提案。レビュアーの可読性を保ちつつ詳細も残せる。
- **[Fireworks AI のインシデントに関するお知らせ – Notion](https://www.notion.com/ja/help/security-incident-involving-a-third-party-ai-vendor)** ([20users](https://b.hatena.ne.jp/entry/s/www.notion.com/ja/help/security-incident-involving-a-third-party-ai-vendor)) - 外部 AI ベンダーのインシデントが一部の Notion ワークスペースに影響した可能性があるとの告知。サードパーティ AI 基盤を使う際のサプライチェーンリスクを考える材料になる。
- **[AMD次世代CPUコア「Zen 6」公開！Zen 5の最適化版で効くのはL3キャッシュ](https://pc.watch.impress.co.jp/docs/news/2155080.html)** ([19users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2155080.html)) - Zen 6 コアの公開内容を紹介する記事。Zen 5 の最適化版という位置づけで、性能面では L3 キャッシュの変更が効くと解説している。

## Zenn
- **[LiteLLM Adaptive Routerを検証する（後編）：学習シグナルと運用上の注意](https://zenn.dev/aws_japan/articles/4399262cf00559)** - LiteLLM の Adaptive Router（BETA）が、次ターンのユーザー発話と応答の類似度からモデル品質を学習する条件を検証。セッション ID がない短い会話では学習せず、「ありがとう」などの発話も学習に使われないなど、運用時の注意点をまとめている。
- **[JaCoCoはどうやってカバレッジを測っているのか](https://zenn.dev/chikina/articles/jacoco-coverage-bytecode)** - 計測前後の class ファイルを比較し、JaCoCo が挿入する計測命令から実行記録、ソースの色分け表示までを追う解説。分岐や途中終了の表示も同じ方式で説明している。
- **[Clojureのマクロによるメタプログラミングで業務ルールのDSLを作る](https://zenn.dev/pksha/articles/b7e4c1a9d38f52)** - 設備点検の条件式から、判定関数と根拠収集用の参照一覧を生成する DSL を Clojure マクロで実装。式をデータとして読み取りコードへ変換する流れを示し、ルールの保守・拡張の手間が減る点を確認している。
- **[週間制限に3日で到達していたClaudeが、ModelとEffortの使い分けで5日持つようになった話](https://zenn.dev/sun_asterisk/articles/1d1c65b1fe409a)** - Claude Code の利用制限に当たる原因は使いすぎではなく設定の当て方だとし、工程ごとにモデルと Effort を切り替えて利用枠の消費を抑えた事例。
- **[HAC125DX 用の無線カメラを Pi Zero 2 W で作って、ライブスタックしてみた](https://zenn.dev/tsukitsukiss/articles/livestack-hac125dx-wireless-camera)** - Raspberry Pi Zero 2 W と IMX585 センサで天体撮影用の無線カメラを自作し、RAW を Wi-Fi で PC に送ってライブスタックする。筐体の光路長の追い込みや実運用でのつまずきも記載。

## Qiita
- **[Claude Code を新しい Fable 5.2 に切り替えると速く安くなるのか。36回測ったら、Fable 5.1 より2割速く3割安く、費用は Opus 5.5 の1.6倍だった](https://qiita.com/suwa_nobu/items/a6a104575596915dac2e)** - Claude Fable 5.2 への切り替えを 36 回計測した検証（冒頭抜粋より）。タイトルによると Fable 5.1 より約2割速く3割安く、Opus 5.5 比では費用が1.6倍という結果。
- **[Claude Code の「許可待ち」を Windows のトースト通知で知る](https://qiita.com/je-pu-pu/items/b4052bc0b68e3a3f1de2)** - Claude Code に長時間作業を任せている間、許可待ちで止まっていることに気づけない問題を、Windows のトースト通知で解消する工夫（冒頭抜粋より）。
- **[WEBで画像を破くツールを作った](https://qiita.com/ishi720/items/6d13fdce2a31fe630840)** - 画像をなぞった線に沿ってビリビリと破れる Web アプリを、Vue/React 以外のフレームワークとして Svelte で実装した制作記。
- **[障害が起きてから動くのはもう終わりにしよう！New Relic「Advanced APM」で実現するプロアクティブ改善](https://qiita.com/nr-mito/items/927b6bc074f35ecc181d)** - New Relic の Advanced APM（Transaction 360、Intelligent Workload、Performance Risks Inbox）の特徴と設定手順を紹介。性能問題を障害前に把握する運用を扱う。
- **[GitHub Copilot app で「自分の文脈」を管理してみる。me.md を作って常に参照させるまで](https://qiita.com/carol0226/items/3e52fd2570c246b6cf0c)** - GitHub Copilot app に me.md を用意して自分の文脈を常時参照させる手順を試した記録（冒頭抜粋から読み取れる範囲）。

## AWS 新着
- **[Amazon ElastiCache Serverless now supports vector, full-text and hybrid searches plus aggregations](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-elasticache-serverless-search-aggregations/)** (2026-11-10) - ElastiCache Serverless for Valkey がベクトル・全文・ハイブリッド検索と集計に対応。ライブデータへの検索でレイテンシと検索機能のトレードオフを緩和する。
- **[AWS Network Firewall launches next-generation firewall policy](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-launches-ngfw-policy/)** (2026-11-10) - Network Firewall に次世代ファイアウォール（NGFW）ポリシーモデルが登場。ポリシー構造がシンプルになり、ルール容量も増える。
- **[Amazon OpenSearch Service now lets you validate and roll back version upgrades](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-service/upgrades/)** (2026-11-10) - クローンベースのアップグレードで新バージョンを現行環境と並べて検証し、問題なければ切り替えられる。問題があればロールバックも可能。
- **[Amazon DocumentDB (with MongoDB compatibility) now supports post-quantum TLS, wildcard indexes, and $unionWith in version 8.0.3](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-documentdb-8-0-3/)** (2026-11-10) - 8.0.3 でハイブリッドのポスト量子鍵交換 TLS、ワイルドカードインデックス、`$unionWith` 集計ステージ、新しい change stream イベントが追加。
- **[Amazon S3 Tables now provide a simple, cost-effective path for data lake modernization](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-s3-tables-managed-migration-hive-to-iceberg/)** (2026-11-04) - Apache Hive テーブルから Apache Iceberg へのマネージド移行に対応。ACID トランザクション、スキーマ進化、タイムトラベルを得られる。

## Lobsters
- **[.name grandfathered](https://neil.fraser.name/news/2026/11/10/)** (122pt) - networking タグの話題で、ドメイン `.name` に関する Neil Fraser の投稿。本文は未確認のため、詳細はリンク先を参照。
- **[Synaptics patent claims stop work on DisplayLink drivers](https://lwn.net/SubscriberLink/1102549/acbc92e00cee3a3f/)** (32pt) - LWN の記事。Synaptics の特許主張により DisplayLink ドライバの作業が止まったという内容で、Linux のドライバ開発とライセンス・特許の問題に関わる。
- **[Blunt Banhammer Blocks Basic Bots Ballistically](https://shkspr.mobi/blog/2026/11/blunt-banhammer-blocks-basic-bots-ballistically/)** (26pt) - 単純なボットを乱暴にブロックする Web 運用の手法を扱うブログ（web タグ、11件のコメント）。
- **[Announcing .NET 11](https://devblogs.microsoft.com/dotnet/announcing-dotnet-11/)** (19pt) - Microsoft による .NET 11 のリリース告知。
- **[Next-Level Benchmarking Overfitting](http://databasearchitects.blogspot.com/2026/11/next-level-benchmarking-overfitting.html)** (15pt) - Database Architects ブログ。データベースのベンチマークへの過剰適合を扱う（databases / performance タグ）。

## dev.to
- **[Detecting Flaky Tests and Finding Their Root Causes with Strands Agents and Gemini](https://dev.to/m4rri4nne/detecting-flaky-tests-and-finding-their-root-causes-with-strands-agents-and-gemini-4kan)** - Strands Agents と Gemini を使い、不安定なテストの検出と根本原因の特定を自動化する試み。
- **[Bifrost vs LiteLLM Rust: Do the 7x Benchmark Claims Hold Up?](https://dev.to/anthonymax/bifrost-vs-litellm-rust-do-the-7x-benchmark-claims-hold-up-lec)** - LiteLLM Rust が主張する 7 倍のオーバーヘッド削減・9 倍のメモリ削減を、公開ベンチマークファイルに照らして検証する記事。
- **[Django 6.1's FETCH_PEERS against my own select_related](https://dev.to/remdore/django-61s-fetchpeers-against-my-own-selectrelated-4cp9)** - Django 6.1 の fetch modes のうち FETCH_PEERS を、既存の `select_related` と比較して性能を確かめた検証。
- **[Stop Trusting npm Scans: Run Untrusted Packages in an Isolated AWS Sandbox](https://dev.to/aws-builders/stop-trusting-npm-scans-run-untrusted-packages-in-an-isolated-aws-sandbox-cmm)** - 静的スキャンでは postinstall の挙動を見逃すため、使い捨ての AWS CodeBuild サンドボックスでインストールを実行し、ビルドログから `curl | bash` を検出する AI エージェント用ツールを紹介。
- **[Blazor Native: HTML and CSS Without a Browser](https://dev.to/florianrappl/blazor-native-html-and-css-without-a-browser-340o)** - ブラウザなしで HTML と CSS によるクロスプラットフォームのデスクトップ UI を構築する Blazor Native（Avalonia 関連）の紹介。

## TechCrunch
- **[OpenAI, Anthropic face new oversight as New York's AI safety law takes effect](https://techcrunch.com/2026/11/10/openai-anthropic-face-new-oversight-as-new-yorks-ai-safety-law-takes-effect/)** - ニューヨーク州の AI 安全法（RAISE Act）が施行され、OpenAI や Anthropic などの大手開発者に登録、安全対策の開示、重大インシデントの報告が義務づけられる。違反時は罰金の対象となる。
- **[Anthropic launches Claude Meetings to turn workplace discussions into plans and tasks](https://techcrunch.com/2026/11/10/anthropic-launches-claude-meetings-to-turn-workplace-discussions-into-plans-and-tasks/)** - 会議中に Claude が議論中の計画を下書きし、ホワイトボード上にタイムラインを描き、会議チャットで質問に答える。接続した業務アプリから前年の数値なども取得できる。
- **[PSI is trying to make a business out of AI-driven scientific discovery](https://techcrunch.com/2026/11/10/psi-is-trying-to-make-a-business-out-of-ai-driven-scientific-discovery/)** - PSI は未公開の Anthropic モデルを使い、約20年来の量子コンピューティングの基本的な問いに答えたという。AI による科学的発見の事業化を狙う。
- **[Ring, known for its doorbell cameras, launches a home security drone and an enterprise security robot](https://techcrunch.com/2026/11/10/ring-known-for-its-doorbell-cameras-launches-a-home-security-drone-and-an-enterprise-security-robot/)** - Amazon 傘下の Ring がロボティクスに参入し、家庭用セキュリティドローンと企業向けの巡回ロボットを発表。同じ件を Ars Technica も別角度で報じている。

## Ars Technica
- **[Grok Build coding agent leaks oodles of confidential info, some belonging to SpaceXSI](https://arstechnica.com/security/2026/11/grok-build-coding-agent-leaks-oodles-of-confidential-info-some-belonging-to-spacexsi/)** - 研究者が、Grok Build で作られた約 35,000 個のアプリが誰でもアクセスできる状態になっていたと報告。コーディングエージェントが生成・公開する成果物のデフォルト公開設定が問題になる。
- **[Vulnerability that lets hackers SSH into Linux devices is under active exploitation](https://arstechnica.com/security/2026/11/vulnerability-that-lets-hackers-ssh-into-linux-devices-is-under-active-exploitation/)** - 「*sshole」と呼ばれる脆弱性が実際に悪用されている。パスワードなしで SSH ログインされ得るもので、Alpine の特定の設定が影響を受け、他のディストリビューションにも及ぶ可能性がある。
- **[Anthropic VS code extension on Cursor backdoored for nearly 12 hours](https://arstechnica.com/security/2026/10/anthropic-vs-code-extension-on-cursor-backdoored-for-nearly-12-hours/)** - Cursor 上の Anthropic の VS Code 拡張が約12時間バックドア化された。攻撃者が検証済みアカウントにどう侵入したかは不明で、拡張機能のサプライチェーンリスクを示す。
- **[Binance says hackers who stole billions in crypto spent months planning heist](https://arstechnica.com/information-technology/2026/11/binance-says-hackers-who-stole-billions-in-crypto-spent-months-planning-heist/)** - Binance が、攻撃者は数か月かけて計画したと説明。ラップトップの感染、社内ツールの侵害、偽の採用面接といった手口が使われた。
- **[VMware releases vSphere Express for virtualization on up to 128 cores](https://arstechnica.com/information-technology/2026/11/vmware-releases-vsphere-express-for-virtualization-on-up-to-128-cores/)** - VMware が最大128コアまでの仮想化向けに vSphere Express を投入。低価格帯の顧客の声を受けた製品とのこと。

## 注目トピック
今回は AI 開発ツールの運用面が目立った。モデルの品質変動（Opus 5.5 の推論低下の指摘）、Fable 5.2 の速度・コスト計測、Effort の使い分けによる利用枠節約、LiteLLM Adaptive Router や Bifrost のルーティング比較など、「どのモデルをどう使うか」を実測で決める流れが複数ソースに出ている。AI が生成するもの（PR 説明、テスト、アプリ）の扱いについても、折りたたみ運用や不安定テスト検出といった実務的な工夫が並んだ。

セキュリティでは、AI エージェント周辺の事故が続いている。Grok Build で作られた約35,000アプリの公開状態、Cursor 上の Anthropic 拡張のバックドア、Notion に及んだ Fireworks AI のインシデントは、いずれも開発ツールや外部 AI ベンダーに依存するサプライチェーンの問題だ。一方、AWS 側は ElastiCache Serverless の検索対応、OpenSearch のクローンベース検証・ロールバック、Network Firewall の NGFW ポリシーなど、運用の安全性を高める更新が中心だった。
