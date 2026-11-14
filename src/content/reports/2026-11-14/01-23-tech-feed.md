---
title: "Tech Feed ダイジェスト（2026年11月14日）"
date: "2026-11-14T01:23"
category: "summary"
summary: "AIコーディング検証の設計論、Fireworks AI経由の情報漏えい、*sshole脆弱性、ElastiCacheのベクトル検索対応などを横断整理"
tags: ["ai", "security", "aws", "rust", "devtools", "infrastructure"]
---

## はてなブックマーク (テクノロジー)
- **[Fable 5.2は物理モデリング音源の実装も作曲もすごい - きしだのHatena](https://nowokay.hatenablog.com/entry/2026/11/13/101644)** ([95users](https://b.hatena.ne.jp/entry/s/nowokay.hatenablog.com/entry/2026/11/13/101644)) - Fable 5.2 に物理モデリング音源の実装や作曲をさせた体験記。信号処理を伴うコード生成で LLM がどこまで通用するかが題材。
- **[『検索システム』『推薦システム』とLLM時代の検索推薦 - ｼﾞｮｲｼﾞｮｲｼﾞｮｲ](https://joisino.hatenablog.com/entry/searchrecbook)** ([74users](https://b.hatena.ne.jp/entry/s/joisino.hatenablog.com/entry/searchrecbook)) - 検索・推薦システムの書籍を軸に、LLM 時代に検索推薦の設計がどう変わるかを論じるブログ。
- **[マネックス証券、不正アクセスでメールアドレス最大113万件と本人確認書類1600件弱が漏洩のおそれ](https://k-tai.watch.impress.co.jp/docs/news/2156449.html)** ([151users](https://b.hatena.ne.jp/entry/s/k-tai.watch.impress.co.jp/docs/news/2156449.html)) - 不正アクセスによりメールアドレス最大113万件と本人確認書類約1600件が漏えいした恐れがある事案。金融系での本人確認書類の保管範囲が改めて問われる。
- **[The Home Repo Pattern](https://www.aihero.dev/the-home-repo-pattern)** ([31users](https://b.hatena.ne.jp/entry/s/www.aihero.dev/the-home-repo-pattern)) - AI エージェント運用のための「ホームリポジトリ」パターンを紹介する記事。日本語での解説記事（blog.lai.so）も同時に話題。
- **[高品質と高スピードを支える品質のシフトレフトのアプローチ](https://speakerdeck.com/goyoki/shift-left-approach-for-team-improvement)** ([24users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/goyoki/shift-left-approach-for-team-improvement)) - 品質確保を開発工程の上流へ寄せるシフトレフトを、チーム改善の観点で整理したスライド。

## Zenn
- **[ng: Neovim のためのシンプルな GUI](https://zenn.dev/shougo/articles/ng-nvim-simple-gui)** - Go 製の Linux 向け Neovim GUI クライアント。X11/Wayland 対応で、新エディタではなく GVim のように Neovim に窓を与えるだけの最小 UI。
- **[【pstack】AIに敵対的レビューをさせるな。トークンは検証に使え](https://zenn.dev/karamage/articles/5c3f8370b2b370)** - 差分だけを見る AI 同士の敵対的レビューは揚げ足取りや将来の仮定に流れがちで、本番バグを防げなかったという経験談。トークンは実際に動かす検証に使うべきと主張。
- **[ISUCON2026 で優勝しました（準備編）](https://zenn.dev/luvtechno/articles/isucon2026-preparation)** - レギュレーションで AI 利用可となったことを受け、人間が介入せずエージェントだけでどこまで勝てるかを試した3か月の準備記録。
- **[Rustで作られたExpoの新フレームワーク「Exact」で、モバイル・Web・デスクトップアプリを作ってみた](https://zenn.dev/tellernovel_inc/articles/expo-exact-first-impression)** - Expo の新クロスプラットフォームランタイム Exact で天気アプリを作り、SwiftUI や React Native 版と見た目・サイズ・起動を比較した第一印象。
- **[なぜ mixi2 は iPhone Duo の発売初日から最適化できたのか？](https://zenn.dev/mixi/articles/b0ea64fded9503)** - Flutter 製 mixi2 が、独自実装のボトムタブを縦配置に変えやすかった点などを理由に挙げる、折りたたみ端末対応の振り返り。

## Qiita
- **[Claude Opus 5.5とFable 5.2はどちらを使うべきか、Claude Codeで同じ課題を解かせて比べてみた](https://qiita.com/MURAMASA2470/items/ad5a0cade2bd5b3165f9)** - 単価が2倍の Fable 5.2 と Opus 5.5 を同一課題で比較し、使い分けの具体的な数字を出す検証（冒頭抜粋より）。
- **[Claude API の Message Threads で、会話の履歴を自分で持たなくてよくなるのか。公式を読むと、スレッドは5分で切れ、写しは自分で持ち続ける前提だった](https://qiita.com/suwa_nobu/items/40e9eba3a7d99a2a485b)** - 11月2日にベータ追加された Message Threads を公式資料から検証。サーバー側で会話を保持するが、スレッドは5分で切れるため履歴の写しは手元に持つ前提という指摘。
- **[バックアップ HDD の「静かな死」を防ぐ仕組み ― smartctl でヘルスチェック](https://qiita.com/r-jw/items/bd4721fccc457bf8e64a)** - 外付け HDD にバックアップを取り続けても劣化に気付けない問題に対し、smartctl で定期的にヘルスチェックする運用を紹介。
- **[新Genieの発表を受けて、Genieファミリーの変遷と構成、今後の方向性を整理する](https://qiita.com/taka_yayoi/items/49129c0d657364f3bd04)** - 11月11日に Databricks が発表した第2世代 Genie の整理。質問応答アシスタントから、裏で動き続ける常時稼働の自律エージェントへの変化がポイント。
- **[Oracle AI Database Agent Engineを試してみた](https://qiita.com/marfujim/items/8b1ab40586665c899095)** - 注文状況を問い合わせる例で、PL/SQL からデータを取得して回答を組み立てる Agent Engine を試した記録（冒頭抜粋より）。

## AWS 新着
- **[Amazon ElastiCache Serverless now supports vector, full-text and hybrid searches plus aggregations](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-elasticache-serverless-search-aggregations/)** (2026-11-10) - ElastiCache Serverless for Valkey がベクトル・全文・ハイブリッド検索と集計に対応。ライブデータ検索での遅延と鮮度のトレードオフ緩和を狙う。
- **[AWS Secrets Manager now supports cross-account replication](https://aws.amazon.com/about-aws/whats-new/2026/11/secrets-manager-cross-account/)** (2026-11-13) - プライマリシークレットの同期コピーを別アカウントに維持でき、クロスアカウント参照・バックアップ・DR に使える。
- **[Amazon Route 53 now supports record set protection](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-route-53-record-set-protection/)** (2026-11-12) - 重要な DNS レコードを保護し、誤変更を防ぐ機能。
- **[Amazon OpenSearch Service now lets you validate and roll back version upgrades](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-opensearch-service/upgrades/)** (2026-11-10) - クローンベースのアップグレードで新バージョンを並行検証し、問題なければ切り替える。不具合時のロールバックも可能。
- **[AWS Network Firewall launches next-generation firewall policy](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-launches-ngfw-policy/)** (2026-11-10) - よりシンプルな構造とルール容量増を備えた NGFW 向け新ポリシーモデル。

## Lobsters
- **[Probabilistic data structures in Go](https://antonz.org/probabilistic-data-structures/)** (28pt) - Go での確率的データ構造の実装解説（タグ: go）。
- **[ML Modules for Mere Mortals](https://thunderseethe.dev/posts/ml-modules-for-mere-mortals/intro/)** (24pt) - ML 系言語のモジュールシステムを平易に解説する連載の導入（タグ: ml, plt）。
- **[FreeBSD Status Report Third Quarter 2026](https://www.freebsd.org/status/report-2026-07-2026-09/)** (22pt) - FreeBSD プロジェクトの2026年第3四半期の活動報告。
- **[SSA from bytecode: imperative pearl](https://bernsteinbear.com/blog/ssa-bytecode/)** (14pt) - バイトコードから SSA 形式を構築する手法を扱うコンパイラ記事。
- **[Fixing a WebKit bug to see if promises are made of train tracks](https://alistair.sh/thenables)** (8pt) - JavaScript の thenable／Promise 周りの WebKit のバグ修正体験記（タグ: browsers, javascript）。

## dev.to
- **[We tested 37,000 MCP servers. Here's how many actually work](https://dev.to/nestdaddy/we-tested-37000-mcp-servers-heres-how-many-actually-work-1pne)** - 公式 MCP レジストリの全リモートサーバーに接続した調査。9割が応答し、3分の1は鍵が必要、12%はスパムだった。
- **[Build an Offline AI Study App with Local Models (Liquid AI LFM3-1.7B)](https://dev.to/debs_obrien/build-an-offline-ai-study-app-with-local-models-liquid-ai-lfm3-17b-1lio)** - WebGPU でブラウザ内に LFM3-1.7B を動かし、確認済みのノートだけから回答するオフライン学習アプリを作る。
- **[Detecting WasmPlugin version drift in Cloud Load Balancing Service Extensions](https://dev.to/googlecloud/detecting-wasmplugin-version-drift-in-cloud-load-balancing-service-extensions-52p5)** - Application Load Balancer に付けた Wasm プラグインのバージョンずれを検出する方法。
- **[Local-First vs. Offline-First vs. Offline-Second vs. Online](https://dev.to/playfulprogramming/local-first-vs-offline-first-vs-offline-second-vs-online-2gi3)** - 近年定着してきた offline-first と local-first の用語・設計の違いを整理。
- **[How Open-Source LLMs Differ: Comparing 130+ Model Architectures](https://dev.to/amananandrai/how-open-source-llms-differ-comparing-130-model-architectures-3b9d)** - 130以上のオープンソース LLM のアーキテクチャを比較した記事。

## TechCrunch
- **[Uber confirms hackers stole thousands of drivers' license information in data breach](https://techcrunch.com/2026/11/13/uber-confirms-hackers-stole-thousands-of-drivers-license-information-in-data-breach/)** - AI クラウド企業 Fireworks AI に保管されていた運転免許情報が盗まれた。同社は Notion 顧客のチャット記録流出でも2か月で2度目の侵害とされる。外部 AI 基盤にデータを預ける際の委託先リスクを示す。
- **[Export-banned Nvidia chips are behind China's most powerful AI models — uh-oh, Jensen!](https://techcrunch.com/2026/11/13/export-banned-nvidia-chips-are-behind-chinas-most-powerful-ai-models-uh-oh-jensen/)** - 中国の最先端 AI モデルが、輸出禁止の Nvidia チップで学習されていたとする新研究。
- **[US government grounds all flights across the United States 'due to extraordinary circumstances'](https://techcrunch.com/2026/11/13/u-s-government-grounds-all-flights-across-the-united-states-due-to-extraordinary-cirumstances/)** - FAA が複数の航空路管制センターの通信障害を受け全米で発着停止を指示。Ars Technica も別角度で報じている。
- **[This young startup wants to power floating data centers with the ocean's heat, and investors are already on board](https://techcrunch.com/2026/11/13/this-young-startup-wants-to-power-floating-data-centers-with-the-oceans-heat-and-investors-are-already-on-board/)** - 海洋の熱を利用して洋上データセンターを動かす構想。2年以内に試作機を海に浮かべる計画。

## Ars Technica
- **[Grok Build coding agent leaks oodles of confidential info, some belonging to SpaceXSI](https://arstechnica.com/security/2026/11/grok-build-coding-agent-leaks-oodles-of-confidential-info-some-belonging-to-spacexsi/)** - 研究者が、誰でもアクセスできる状態の Grok Build アプリ約3.5万件を発見。コーディングエージェントで作ったアプリの公開設定の落とし穴。
- **[Vulnerability that lets hackers SSH into Linux devices is under active exploitation](https://arstechnica.com/security/2026/11/vulnerability-that-lets-hackers-ssh-into-linux-devices-is-under-active-exploitation/)** - 「*sshole」と呼ばれる脆弱性が悪用中。11/5 の解説記事によると影響は Alpine の特定構成で、他ディストリビューションにも及ぶ可能性がある。
- **[Hackers exploited iOS and Android flaws to infect phones](https://arstechnica.com/security/2026/11/hackers-exploited-ios-and-android-flaws-to-infect-phones/)** - iOS と Android の脆弱性を悪用した感染。クレムリン系の可能性があるグループが外交関係者を狙ったとされる。
- **[Anthropic VS code extension on Cursor backdoored for nearly 12 hours](https://arstechnica.com/security/2026/10/anthropic-vs-code-extension-on-cursor-backdoored-for-nearly-12-hours/)** - Cursor 上の Anthropic 検証済みアカウントの拡張機能が約12時間バックドア化。侵入経路は不明で、拡張機能の供給網リスクを示す。
- **[Binance says hackers who stole billions in crypto spent months planning heist](https://arstechnica.com/information-technology/2026/11/binance-says-hackers-who-stole-billions-in-crypto-spent-months-planning-heist/)** - ノート PC 感染、社内ツールの侵害、偽の採用面接といった手口を数か月かけて重ねた。

## 注目トピック
AI エージェント周辺の運用と安全性が今日の中心。Zenn の pstack 記事は AI 同士のレビューより実行検証にトークンを使うべきと説き、dev.to では MCP サーバー3.7万台の実働調査が出た。一方で Grok Build アプリの公開漏えい、Fireworks AI 経由の情報流出、Cursor 拡張のバックドアなど、エージェント基盤と周辺サプライチェーンが攻撃対象になっている。

インフラ面では、AWS が Secrets Manager のクロスアカウント複製や OpenSearch の検証付きアップグレードなど運用安全性を高める更新を続け、ElastiCache もベクトル検索に対応した。*sshole の悪用や iOS/Android の脆弱性悪用も報じられ、パッチ適用状況の確認が引き続き重要。
