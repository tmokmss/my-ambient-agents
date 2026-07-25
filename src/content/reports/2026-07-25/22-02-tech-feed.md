---
title: "Tech Feed ダイジェスト（2026年7月26日）"
date: "2026-07-25T22:02"
category: "summary"
summary: "AIエージェントへの権限委譲を巡るセキュリティ実証やAndroid ADB制限が話題に、コンシューマーGPUでのLLM学習やObsidian×AIサブスク活用など自前AI運用の工夫も目立った一日"
tags: ["ai", "security", "aws", "devops", "golang"]
---

## はてなブックマーク (テクノロジー)

- **[【Obsidian】既存のAIサブスクだけでメモを整理する環境を作った](https://zenn.dev/peishim/articles/a10faeabae7c09)** ([218users](https://b.hatena.ne.jp/entry/s/zenn.dev/peishim/articles/a10faeabae7c09)) - 追加のAI専用サービスに課金せず、すでに契約しているChatGPTやClaudeなどのAIサブスクとObsidianを組み合わせてメモの整理・要約を自動化する環境構築記事。専用ツールへの追加投資なしでメモ管理をAI化できる点が支持を集めている。
- **[AI支援旅行アプリ「タベリエ」を、構造化ループエンジニアリングで作り上げた話](https://zenn.dev/torukona/articles/4b6f0bfe083d2b)** ([85users](https://b.hatena.ne.jp/entry/s/zenn.dev/torukona/articles/4b6f0bfe083d2b)) - AIエージェントに闇雲にコードを書かせるのではなく、要件定義から実装・検証までを構造化されたループとして繰り返す開発手法で旅行アプリを個人開発した記録。バイブコーディングの再現性を高める工夫が具体的に紹介されている。
- **[AI工学特論: MLOps・継続的評価](https://speakerdeck.com/asei/aigong-xue-te-lun-mlopsji-sok-de-ping-jia-b257eb10-fb3e-4159-828b-8445b7ff2f37)** ([48users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/asei/aigong-xue-te-lun-mlopsji-sok-de-ping-jia-b257eb10-fb3e-4159-828b-8445b7ff2f37)) - AIシステムを本番運用する上で欠かせないMLOps基盤と、モデルの性能劣化を検知する継続的評価の考え方を整理した講義スライド。生成AIの実務投入が進む中で評価パイプラインをどう設計すべきかを体系的に学べる内容。
- **[Hermes Agent と Slack で設計し、Linear のチケットから Draft PR まで作成するワークフローの素振りをした](https://azukiazusa.dev/blog/hermes-agent-slack-workflow/)** ([35users](https://b.hatena.ne.jp/entry/s/azukiazusa.dev/blog/hermes-agent-slack-workflow/)) - Slack上でのやり取りから要件を整理し、Linearでのチケット作成からコーディングエージェントによる実装・検証・Draft PR作成までを自動化するワークフローを試した記事。人間の介在を最小化した開発フローの実践例。
- **[Claude CodeのInput Tokenが増える原因を、利用ログから調べてみた](https://zenn.dev/flinters_blog/articles/c1f6e286dc3a40)** ([23users](https://b.hatena.ne.jp/entry/s/zenn.dev/flinters_blog/articles/c1f6e286dc3a40)) - Claude Codeの利用ログを分析し、何がきっかけでInput Tokenの消費量が膨らむのかを定量的に調査した記事。CLAUDE.mdの肥大化以外にも消費量に影響する要因があることを示している。

## Zenn

- **[Astroで日英ブログを作って分かった5つの実装パターン](https://zenn.dev/akari1106/articles/ea85f0a245bb8b)** - Astroで日本語・英語の多言語ブログを構築する際に得られた、i18nルーティングやコンテンツ管理などの実装パターンを5つに整理した記事。静的サイトジェネレータで多言語対応する際の設計指針として参考になる。
- **[Terraform / Kubernetes の構築で、初心者がよく指摘されるポイントのまとめ](https://zenn.dev/scalar_sol_blog/articles/6fa517a84cb7ff)** - Terraform・Kubernetesの構築レビューで初心者がよく受ける指摘事項を、モジュール分割やマニフェスト設計の観点からまとめた記事。IaC・コンテナオーケストレーションを学び始めた開発者向けのチェックリストとして使える。
- **[Go の設計、どこまでやる？〜小さく作って、壊さず育てる〜](https://zenn.dev/135yshr/books/go-service-design)** - Goでサービスを設計・運用する中で得た判断基準を、原則の理解から層ごとの設計判断、CIでの維持まで体系立てて解説する書籍。「クリーンアーキテクチャの図を真似ること」ではなく依存の向きを設計することの重要性を説いている。
- **[自宅でサーバーを建てたいエンジニアにおすすめの構成](https://zenn.dev/joeee/articles/048addcc0c2ce6)** - 自宅サーバー構築を検討するエンジニア向けに、ハードウェア選定からネットワーク構成、運用上の注意点までをまとめた実践的なガイド記事。
- **[設計を、技術の話から始めない](https://zenn.dev/team_lab/articles/31ec1e630ab28b)** - ソフトウェア設計の議論がフレームワークやアーキテクチャパターンの選定から始まりがちな問題を指摘し、まず解くべき課題の構造を理解することから設計を始めるべきだと説く記事。

## Qiita

- **[2TパラメータのLLMはいつ100GBに収まるか ― LLM推論のメモリ階層管理はCPUマイクロアーキテクチャ史を再演している](https://qiita.com/sukimaengineer/items/207bf475d3bf2757afe6)** - 巨大化するLLMのパラメータ数とメモリ容量の関係を、CPUのキャッシュ階層が発展してきた歴史と対比しながら分析した記事。量子化やオフロード技術の進化が、かつてのCPUの省メモリ化競争と同じ道を辿っていると論じている。
- **[Claude Codeから使えるMCPサーバーをAgentCoreゲートウェイで構築する](https://qiita.com/moritalous/items/96a0427ee21c89fe1289)** - AWSのAmazon Bedrock AgentCoreゲートウェイを使い、Claude Codeから呼び出せるMCPサーバーを構築する手順を解説した記事。MCPサーバーの認証・デプロイをAWSのマネージドサービスに委ねる構成例。
- **[RTX 3090（24GB）で7Bモデル学習を成立― 個人GPUで大規模Transformerを動かすための実践記録](https://qiita.com/nakatada-lab/items/9f45910262d238964997)** - クラウドGPUに頼らず、コンシューマー向けのRTX 3090（VRAM 24GB）1枚で7Bパラメータクラスのモデル学習を成立させた実践記録。メモリ制約下での学習設定の工夫が具体的に紹介されている。
- **[Bobalyticsでコーディングエージェントの貢献を可視化できるらしい](https://qiita.com/nouhautayomi/items/8362b8da1cd7fb8fb2e2)** - AIコーディングエージェントがリポジトリにどれだけ・どのように貢献しているかを可視化するツール「Bobalytics」を試した記事。人間とAIの作業分担を定量的に把握するための新しい計測手法として紹介している。
- **[AIエージェントがあれば技術書なんてすぐ書けるでしょ、と思ったが無理だった](https://qiita.com/watany/items/11358e8e8966d5e48a09)** - AIエージェントに任せれば技術書の執筆も簡単だろうという期待に反し、実際には構成の一貫性維持や情報の正確性担保などで想定以上に苦労した体験談。AI活用の限界が具体的なタスクで浮き彫りになった実例。

## AWS 新着

- **[Amazon Bedrock AgentCore now delivers unified observability with traces and logs in a single log group](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-bedrock-agentcore-unified-observability-single-log-group/)** (2026-07-23) - Bedrock AgentCore上で動くAIエージェントのトレースとログが、単一のCloudWatchロググループに統合されるようになった。エージェントの動作を追跡する際に複数のログソースを横断する手間が減る。
- **[Claude Sonnet 5 is now available on Amazon Bedrock in AWS GovCloud (US)](https://aws.amazon.com/about-aws/whats-new/2026/07/claude-sonnet-5-govcloud/)** (2026-07-23) - 最新モデルClaude Sonnet 5が、米国政府機関向けのAWS GovCloud環境でもBedrock経由で利用可能になった。コンプライアンス要件の厳しい環境でも最新モデルを使えるようになる。
- **[Amazon EC2 Dedicated Hosts now support host resource groups without self-managed licenses](https://aws.amazon.com/about-aws/whats-new/2026/07/ec2-dedicated-hosts-hrg/)** (2026-07-24) - EC2 Dedicated Hostsのホストリソースグループが、自己管理ライセンスを持たない場合でも利用できるようになった。ライセンス持ち込み（BYOL）以外の用途でも専有ホストの柔軟な管理が可能になる。
- **[Amazon Connect now supports audio optimization for Azure Virtual Desktop and Windows 365 Cloud PC](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-connect/)** (2026-07-24) - コンタクトセンターサービスAmazon Connectが、Azure Virtual DesktopやWindows 365 Cloud PC環境向けの音声最適化に対応した。VDI環境でのコールセンター業務における音声品質の劣化を軽減する。
- **[Amazon EC2 I8ge instances are now generally available in additional AWS regions](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-i8ge-additional-regions/)** (2026-07-23) - ストレージ最適化インスタンスI8geが追加リージョンで利用可能になった。大容量NVMe SSDを要するデータ集約型ワークロードをより多くのリージョンで実行できるようになる。

## Lobsters

- **[A shell colon does nothing. Use it anyway](https://refp.se/articles/your-shell-and-the-magic-colon)** (59pt) - シェルスクリプトの`:`（コロン）コマンドは何もしないダミーコマンドだが、無限ループの代替やパラメータ展開の副作用トリックなど意外な実用的ユースケースがあることを解説した記事。
- **[Android May Soon Restrict On-Device ADB, Affecting Shizuku, libadb and Developers](https://kitsumed.github.io/blog/posts/android-may-soon-restrict-on-device-adb/)** (30pt) - Googleが次期AndroidでオンデバイスADB（USBデバッグなしでの権限昇格）を制限する計画があり、ShizukuやlibadbなどADB経由で動作するツール群やアプリ開発者に影響が及ぶ可能性があると報じた記事。
- **[stinkpot: sqlite-backed shell history](https://tangled.org/oppi.li/stinkpot)** (32pt) - シェルのコマンド履歴をSQLiteに保存し、通常のヒストリファイルよりも柔軟な検索・分析を可能にするツール。複数端末間での履歴共有やクエリベースの履歴検索を実現している。
- **[Zig by Example](https://zigbyexample.neocities.org/)** (28pt) - Zig言語の機能をコード例で一つずつ紹介するチュートリアルサイト。Go by ExampleやRust by Exampleと同様の形式で、Zigの文法や標準ライブラリの使い方を実例から学べる。
- **[General Resolution: LLM usage in Debian](https://www.debian.org/vote/2026/vote_002)** (13pt) - Debianプロジェクトが、パッケージ開発やコミュニティ運営におけるLLM利用のガバナンスルールを一般決議（General Resolution）として投票にかけている件を報じたページ。主要OSSディストリビューションでもAI利用ポリシーの明文化が本格化している。

## dev.to

- **[We Got the Prompt Cache Working. Our Pipeline Got Slower.](https://dev.to/terum/we-got-the-prompt-cache-working-our-pipeline-got-slower-265f)** - AIパイプラインでプロンプトキャッシュを有効化したところ、意図に反して処理全体が遅くなってしまった原因を調査した記事。エージェントを毎回新規プロセスとして起動する実装がキャッシュの効果を打ち消していたことが判明した。
- **[I Let an Agent Take Over an Account With Every Permission Check Green](https://dev.to/kenielzep97/i-let-an-agent-take-over-an-account-with-every-permission-check-green-28g4)** - すべての権限チェックが「通過」と表示されるにもかかわらず、AIエージェントにアカウントを完全に乗っ取らせることができてしまう脆弱性を実証したセキュリティ検証記事。権限チェックのログが緑色でも実害が発生しうることを示している。
- **[I built a CLI that tells you if your codebase fits an LLM's context window](https://dev.to/deklain4ik/i-built-a-cli-that-tells-you-if-your-codebase-fits-an-llms-context-window-164d)** - プロジェクト全体をClaudeやChatGPTに貼り付けようとして、コンテキストウィンドウに収まるかどうかを毎回手動で見積もる手間を解消するため、リポジトリのトークン数を事前に測定するCLIツールを開発した記事。
- **[Building a desktop client for an AI coding agent](https://dev.to/timexingxin/building-a-desktop-client-for-an-ai-coding-agent-147n)** - xAIのオープンソースコーディングエージェント「grok-build」向けデスクトップクライアントを構築した際の設計上のハマりどころと、ElectronではなくTauriを選んだ理由を解説した記事。
- **[AI Agent Safety and Compliance Tools: A 2026 Comparison](https://dev.to/comikii/ai-agent-safety-and-compliance-tools-a-2026-comparison-eb0)** - AIエージェントの安全性・コンプライアンス関連ツールを、可観測性・セキュリティガードレール・コンプライアンス証跡の3カテゴリに分類し、それぞれの強みと限界を比較した記事。

## TechCrunch

- **[The hacker who humiliated spyware makers and was never caught](https://techcrunch.com/2026/07/25/the-hacker-who-humiliated-spyware-makers-and-was-never-caught/)** - 政府系スパイウェア企業2社を相次いでハッキングし内部情報を暴露しながら、一度も逮捕されていない伝説的ハクティビスト「Phineas Fisher」の正体と手法を振り返った記事。
- **[Librarians are hosting viral 'Avoiding AI' workshops for people who are fed up with Big Tech](https://techcrunch.com/2026/07/25/librarians-are-hosting-viral-avoiding-ai-workshops-for-people-who-are-fed-up-with-big-tech/)** - 大手テック企業への不信感からAIを避けたいと考える市民向けに、図書館が「AIを避ける方法」を教えるワークショップを開催し、想定を超える需要を集めていると報じる記事。
- **[One fallen power line exposed a growing AI data center problem. Here's how to fix it.](https://techcrunch.com/2026/07/25/one-fallen-power-line-exposed-a-growing-ai-data-center-problem-heres-how-to-fix-it/)** - 米バージニア州で発生した1本の電力線の障害が、AIデータセンター群が送電網の乱れにいかに弱いかを露呈させた事例を分析し、対策を提言する記事。
- **[SpaceX launches new V3 Starlink satellites but suffers another booster failure](https://techcrunch.com/2026/07/24/spacex-launches-new-v3-starlink-satellites-but-suffers-another-booster-failure/)** - SpaceXが新型V3 Starlink衛星を搭載したStarshipの2回目の飛行を実施し、多くの目標を達成した一方でブースターのエンジン再点火に再び失敗したと報じる記事。
- **[Waymo reportedly mulling a breakup with Uber](https://techcrunch.com/2026/07/24/waymo-reportedly-mulling-a-breakup-with-uber/)** - 自動運転タクシーのWaymoが、配車サービスUberとの提携契約解消を検討していると報じられた。契約は2028年5月まで続く見通しだが、Waymo単独での事業拡大路線への転換が背景にあるとみられる。

## Ars Technica

- **[SpaceX eyes tower catch for next Starship after auspicious end to 13th flight](https://arstechnica.com/space/2026/07/spacex-eyes-tower-catch-for-next-starship-after-auspicious-end-to-13th-flight/)** - Starshipの13回目の飛行が上々の結果で終わったことを受け、SpaceXが次回飛行では発射タワーによるブースターの空中キャッチを試みる可能性が高いと報じる記事。
- **[Big Tech accused of stonewalling European social media researchers](https://arstechnica.com/tech-policy/2026/07/big-tech-accused-of-stonewalling-european-social-media-researchers/)** - TikTok・X・Metaが、EUのデジタルサービス法で義務付けられた研究者へのデータ提供を怠っているとの批判が研究者コミュニティから上がっていると報じる記事。
- **[Microsoft responds to LG monitors installing McAfee ads on Windows](https://arstechnica.com/gadgets/2026/07/microsoft-responds-to-lg-monitors-installing-mcafee-ads-on-windows/)** - 特定のLGモニターをPCに接続するとWindows Update経由でMcAfeeの広告アプリが自動インストールされる問題が発覚し、Microsoftが対応を表明したと報じる記事。
- **[Roku raises streaming stick prices by up to 60 percent](https://arstechnica.com/gadgets/2026/07/roku-raises-streaming-stick-prices-by-up-to-60-percent/)** - Rokuがストリーミングスティックデバイスの価格を最大60%引き上げた。CEOが5月に「(RAM不足は)むしろ好都合」と語っていたにもかかわらず、同社はRAM不足を値上げの理由として説明している。
- **[European Union grants US request to restrict satellite images of Iran War region](https://arstechnica.com/space/2026/07/european-union-grants-us-request-to-restrict-satellite-images-of-iran-war-region/)** - EUが米国の要請を受け、コペルニクス衛星によるイラン戦争地域の撮影画像公開を制限することに同意したと報じる記事。米国のイランへの軍事作戦再開に伴う情報統制の一環とみられる。

## 注目トピック

今回目立ったのは、AIエージェントに実行権限をどこまで委ねるかという問題が複数ソースで同時に浮上したことだ。dev.toでは、すべての権限チェックが「通過」と表示されるにもかかわらずAIエージェントにアカウントを完全に乗っ取らせることができてしまう脆弱性が実証され、AWSはBedrock AgentCoreのトレースとログを単一ロググループに統合して観測性を強化した。一方Lobstersでは、GoogleがAndroidのオンデバイスADBを制限する計画がShizukuなどADB経由で動作するツール群や開発者に影響を与えると報じられており、権限管理の厳格化がAIエージェント特有の問題に留まらず開発者体験全体に及び始めている。

もう一つの軸は、AIをいかに安く・自前で回すかという実務的な工夫だ。QiitaではコンシューマーGPU RTX 3090（24GB）1枚で7Bモデルの学習を成立させた実践記録や、巨大化するLLMのパラメータ数とメモリ容量の関係をCPUマイクロアーキテクチャ史と対比した分析が読まれ、はてなブックマークでは追加のAI専用サービスに課金せず既存のAIサブスクとObsidianを組み合わせてメモ整理を自動化する記事が218usersを集めた。他方でLobstersのDebianによるLLM利用ガバナンスの一般決議や、TechCrunchが報じる「AIを避けるワークショップ」への需要増加は、AI活用の拡大に対する反発や規律付けの動きが並行して進んでいることを示している。
