---
title: "Tech Feed ダイジェスト（2026年7月28日）"
date: "2026-07-28T11:27"
category: "summary"
summary: "2.8兆パラメータの巨大オープンモデルKimi-K3がDay0デプロイされる一方、個人サイトへの33万回攻撃や冤罪事件など見落としのリスクも話題に"
tags: ["ai", "security", "aws", "opensource", "devops"]
---

## はてなブックマーク (テクノロジー)

- **[Claude Code Actionで使うSkillを、リポジトリにコミットせずgh skill installで実行時に入れる](https://blog.shibayu36.org/entry/2026/07/27/163000)** ([131users](https://b.hatena.ne.jp/entry/s/blog.shibayu36.org/entry/2026/07/27/163000)) - Claude Code ActionのワークフローでSkillファイルをリポジトリに常駐させず、`gh skill install`コマンドで実行時に動的取得・展開する手法。Skillの管理をリポジトリ本体から切り離すことで、複数リポジトリ間での再利用や更新の手間を減らせる。
- **[AWSの公式オンラインワークショップ、無料のAWSサンドボックス環境を提供開始。学習用にAWSのサービスやコード実行など利用可能に](https://www.publickey1.jp/blog/26/awsawsaws.html)** ([79users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/awsawsaws.html)) - AWSが実サービスやコード実行を試せる無料サンドボックス環境を公式ワークショップとして提供開始。クレジットカード登録や請求の心配なく学習目的でAWSサービスを触れる点が支持されている。
- **[サイバー攻撃グループの名前から国家や動機を分かりやすく。Googleが新命名規則を展開　「APT44」は「SANDWORM RELIC」に](https://internet.watch.impress.co.jp/docs/news/2128210.html)** ([45users](https://b.hatena.ne.jp/entry/s/internet.watch.impress.co.jp/docs/news/2128210.html)) - Googleが従来のコード番号方式に代わり、攻撃グループの出自や動機を反映した新命名規則を導入。セキュリティ研究者間での情報共有・脅威分析のコミュニケーションを円滑にする狙いがある。
- **[説明可能AI(XAI)の現状と展望](https://kaityo256.github.io/explainable-ai-review)** ([20users](https://b.hatena.ne.jp/entry/s/kaityo256.github.io/explainable-ai-review)) - ブラックボックス化しがちな深層学習モデルの判断根拠を人間が理解できる形で示す説明可能AI（XAI）の主要な手法と、その限界・今後の展望を整理した記事。
- **[AIのトークン価格を10分の1にできる「プロンプトキャッシュ」の仕組みとは？](https://gigazine.net/news/20260727-prompt-caching/)** ([9users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260727-prompt-caching/)) - 同一のプロンプト冒頭部分をキャッシュして再利用することでLLM APIのトークン単価を大幅に下げられる「プロンプトキャッシュ」の内部動作を解説。長いシステムプロンプトを使うエージェント運用のコスト削減に直結する話題。

## Zenn

- **[【速報】Kimi-K3 を Day0 デプロイ。2.8T モデルは NVIDIA B300 x8 の 1 ノードで動くのか](https://zenn.dev/fixstars/articles/kimi-k3-benchmark)** - Moonshot AIが公開した2.8兆パラメータの巨大オープンウェイトモデルKimi-K3を、公開当日にNVIDIA B300 x8の1ノードで実際にデプロイできるか検証した記事。史上最大級のオープンモデルを個別チームがどう受け止め検証したかがわかる。
- **[Agentic RLではtool callを含むtrajectoryをどう学習するのか](https://zenn.dev/takkuhiro/articles/agentic-rl-trajectory-mechanics)** - 数学やコードの強化学習と異なり、tool callを繰り返しながら環境とやり取りするエージェントの「思考→tool call→実行結果」という一連の軌跡（trajectory）をどう学習に組み込むかを整理した記事。
- **[Opus5が思考が浅いように感じる問題への対策](https://zenn.dev/u1/articles/claude5-rules-collapse-and-fix)** - Claude CodeをOpus5に切り替えた直後に応答が散文的になり思考が浅く感じる現象について、既存のCLAUDE.mdやルールファイルを変えずに原因を切り分けて対策した記録。モデル更新時に既存の運用ルールがどう影響を受けるかの実例。
- **[ニューラルネットワークとLLMは何が違うのか](https://zenn.dev/mhackit/articles/neural-network-to-llm)** - 層と重み、誤差逆伝播といった基礎から、文章生成を行うLLMへの理解がどう地続きなのかを4つの観点でつなぎ直した解説記事。
- **[コードレビューでの見落としをきっかけに『ITエンジニア1年目の教科書』を読んだ](https://zenn.dev/flinters_blog/articles/eeb769c9331de1)** - 業務でのコードレビュー中に見落としたミスをきっかけに、新人向け技術書を読み直した体験記。基礎的なチェック項目の再確認がベテランにも有用であることを示している。

## Qiita

- **[1日数人の個人サイトが1か月で33万回攻撃されていた — ログを数えて塞ぐまで](https://qiita.com/tkurume/items/41402861e5c2924989a6)** - アクセスがほとんどない個人サイトでも、1か月でのべ33万回もの攻撃的アクセスを受けていたことをログ分析で明らかにし、対策を講じた記録。小規模サイトにも自動化されたスキャン・攻撃が容赦なく飛んでくる実態を数値で示している。
- **[Mac mini（M4 Pro / 48GB）で「完全ローカル」のLLM + RAG環境を構築してみた](https://qiita.com/y-okayama-tb/items/0127a7c5203f44507474)** - クラウドAPIに頼らず、Mac mini単体でLLM推論とRAG（検索拡張生成）パイプラインを完結させる環境構築の実践記録。ローカル完結型AI活用のハードウェア要件の目安になる。
- **[【AWS CDK】「IaCにすれば工数削減」は本当か？ AWS CDKの再利用性を整理してみた【概念編】](https://qiita.com/toyoday_8/items/a9a50da72a79d9e91a6e)** - 「IaC化すれば工数が減る」という前提を鵜呑みにせず、AWS CDKでコードの再利用性を実際に上げるための設計上の工夫を概念レベルから整理した記事。
- **[ルーティングライブラリを自作して最新のWebルーティング事情を学んでみた](https://qiita.com/avaice/items/ee45a384eb5cea796ca1)** - 既存のWebフレームワークのルーティング機能をそのまま使うのではなく自作することで、内部のマッチングアルゴリズムやミドルウェア連携の仕組みを学んだ記録。
- **[Codex/ClaudeとローカルLLMをつなげてみた](https://qiita.com/ichiken26/items/5bfc4baad0c487475355)** - クラウドのコーディングエージェント（Codex/Claude）とローカルLLMを連携させる構成を試した記事。クラウドAPIのコストやデータ送信を抑えつつエージェント機能を活用する構成の実験。

## AWS 新着

- **[Amazon Neptune now supports tag-based access control for IAM](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-neptune-tbac/)** (2026-07-27) - グラフDBのNeptuneがAWSリソースタグとIAMポリシーを組み合わせたタグベースアクセス制御（TBAC）に対応。リソースごとに個別ポリシーを書かなくても、タグ運用だけで権限管理を統一的に行えるようになる。
- **[AWS Glue Data Quality now supports anomaly detection and writing results to the AWS Glue Data Catalog](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-glue-data-quality-catalog-anomaly-detection-write-results)** (2026-07-27) - Glue Data Qualityがカタログベースの品質評価に異常検知機能を追加し、評価結果をGlue Data Catalogのテーブルとして書き出せるようになった。データ品質の異常を下流のBIツールや別ジョブから直接参照しやすくなる。
- **[AWS Elemental MediaTailor adds configurable ad timeout and concurrency controls for improved ad fill and faster startup](https://aws.amazon.com/about-aws/whats-new/2026/07/mediatail-configurable-ad-timeout-and-concurrency)** (2026-07-27) - 動画配信の広告差し込みサービスMediaTailorで、広告決定サーバー（ADS）のタイムアウトや同時実行数を直接調整できるようになり、従来必要だったサポート問い合わせなしで広告表示の最適化が可能に。
- **[Amazon EC2 Dedicated Hosts now support host resource groups without self-managed licenses](https://aws.amazon.com/about-aws/whats-new/2026/07/ec2-dedicated-hosts-hrg/)** (2026-07-24) - 専有ホスト（Dedicated Hosts）のリソースグループ作成が、従来必須だった自己管理ライセンス（SML）の設定なしで行えるようになり、BYOL要件のないワークロードでの専有ホスト活用の手間が減る。
- **[Amazon Connect now supports audio optimization for Azure Virtual Desktop and Windows 365 Cloud PC](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-connect/)** (2026-07-24) - コンタクトセンターサービスAmazon Connectが、Azure Virtual DesktopやWindows 365 Cloud PC上の仮想デスクトップから直接、音声最適化を有効にして通話を受けられるようになった。マルチクラウドなVDI環境でのコンタクトセンター運用の選択肢が広がる。

## Lobsters

- **[Open Source Must Be Fun (Or It Will Die)](https://mikemcquaid.com/open-source-must-be-fun-or-it-will-die/)** (46pt) - Homebrewのメンテナとして知られる著者が、オープンソースプロジェクトが持続するには「義務感」ではなく「楽しさ」が不可欠だと論じるエッセイ。メンテナの燃え尽きを防ぐプロジェクト文化のあり方を提起している。
- **[Paged Out - Issue #9](https://pagedout.institute/webview.php?issue=9&page=1)** (43pt) - セキュリティ・低レイヤー技術のショートエッセイを集めた無料フリーマガジン「Paged Out」の第9号。1テーマ1ページの形式で、リバースエンジニアリングやエクスプロイト開発などの小ネタが詰まっている。
- **[Finding bugs in Raft implementations](https://antithesis.com/blog/2026/finding-bugs-in-raft-implementations/)** (20pt) - 決定論的シミュレーションによるテスト基盤Antithesisを使い、複数のRaft合意アルゴリズム実装に潜むバグを発見した事例。分散合意プロトコルの実装が理論通りに動く保証がいかに難しいかを具体的に示している。
- **[Quick & Easy Parser Combinators](https://www.cyan.sh/blog/posts/tutorial-quick-easy-parser-combinators.html)** (17pt) - パーサコンビネータの基本的な仕組みを、最小限のコード例を通して素早く理解できるように解説したチュートリアル記事。
- **[Seriously, what is the large code-model even for?](https://fzakaria.com/2026/07/26/seriously-what-is-the-large-code-model-even-for)** (16pt) - 大規模コード生成モデルが本当に解決すべき課題は何なのかを問い直すエッセイ。コード生成の「量」ではなく既存コードの理解・保守にこそAIの価値があるのではという視点を提示している。

## dev.to

- **[Screen Reader Handling of ARIA Live Regions: Timing, Interruptions, and Debugging](https://dev.to/mspk97/screen-reader-handling-of-aria-live-regions-timing-interruptions-and-debugging-404p)** - SPA内で通知リージョンを更新してもスクリーンリーダーが読み上げない、あるいは古いメッセージを読み上げてしまう問題を、タイミングと割り込みの観点からデバッグした記事。ARIA live regionの挙動がブラウザ・スクリーンリーダーの組み合わせでいかに不安定かを示している。
- **[Confidence Is Not Authorization: A Safer GitHub Issue-Automation Policy](https://dev.to/zira125/confidence-is-not-authorization-a-safer-github-issue-automation-policy-4o01)** - GitHubのIssue自動化機能が「確信度」に基づきラベル付けや自動クローズを行えるようになったことに対し、確信度の高さは権限の代わりにはならないと指摘する記事。AIの自動判断をどこまで実行権限に結びつけてよいかという設計上の論点を扱っている。
- **[Architecting for Zero-Network Dependencies: Challenges in Offline-Only Geofencing](https://dev.to/haseebthedev0/architecting-for-zero-network-dependencies-challenges-in-offline-only-geofencing-4h10)** - ネットワーク接続に一切依存せずジオフェンシング機能を実現するための設計課題を扱った記事。オフライン環境が前提となるモバイルアプリのアーキテクチャ設計の実践知。
- **[Stop Building Your SaaS Like a Giant Enterprise App](https://dev.to/ntty/stop-building-your-saas-like-a-giant-enterprise-app-5d7p)** - 利用者がまだ4人しかいないプロジェクトにマイクロサービスや分散メッセージキューといった大企業向け構成を導入してしまった反省を綴った記事。初期段階のSaaSにおける過剰設計の弊害を実例で示している。
- **[Automatic Error Recovery in AI Agent Networks](https://dev.to/albert_zhang_f468830cf0e6/automatic-error-recovery-in-ai-agent-networks-49mg)** - 単一のAIエージェントであればエラー時は単純にリトライすればよいが、複数エージェントが連携するネットワークでは障害が「カスケード」として伝播する問題になると指摘し、その自動復旧の設計手法を論じた記事。

## TechCrunch

- **[Lyft and Baidu enter London's robotaxi battleground as testing begins](https://techcrunch.com/2026/07/28/lyft-and-baidu-enter-londons-robotaxi-battleground-as-testing-begins/)** - BaiduのAV「Apollo Go」が、Lyftが買収したモビリティネットワークFreenow経由でロンドンにて走行試験を開始したと報じる記事。米中のロボタクシー企業が欧州市場でも競合し始めている。
- **[Cursor makes its biggest India push yet ahead of SpaceX acquisition with localized pricing](https://techcrunch.com/2026/07/27/cursor-makes-its-biggest-india-push-yet-ahead-of-spacex-acquisition-with-localized-pricing/)** - AIコーディングツールCursorが、インド市場向けに現地価格でのプランを導入し人員採用も拡大すると報じる記事。インドが同社にとって世界第3位の市場に成長している背景がある。
- **[Apple sued after alleged App Store crypto scam cost users $1.8M](https://techcrunch.com/2026/07/27/apple-sued-after-alleged-app-store-crypto-scam-cost-users-1-8m/)** - App Store経由で配布された詐欺の暗号資産ウォレットアプリにより180万ドル以上の被害を受けたユーザーがAppleを提訴したと報じる記事。App Storeの審査体制の実効性が改めて問われている。
- **[Amazon's new satellite network for mobile phones could turn up the heat on SpaceX](https://techcrunch.com/2026/07/27/amazons-new-satellite-network-for-mobile-phones-could-turn-up-the-heat-on-spacex/)** - Amazonがスマートフォン向け衛星通信サービスの計画を拡大し、SpaceXのStarlinkに対抗する動きを見せていると報じる記事。
- **[Enigma raises $71M to make controlling a robot as easy as adjusting the volume](https://techcrunch.com/2026/07/27/enigma-raises-70m-to-make-controlling-a-robot-as-easy-as-adjusting-the-volume/)** - ロボットの操作をボリューム調整のように直感的に行えるインターフェースを開発するスタートアップEnigmaが、7100万ドルの大型シード資金を調達したと報じる記事。

## Ars Technica

- **[A missing underscore sent innocent man to prison for 18 months](https://arstechnica.com/tech-policy/2026/07/police-missed-one-underscore-and-sent-the-wrong-man-to-prison/)** - 警察のデータベース照合時にたった一つのアンダースコアの有無を見落としたことが原因で、無実の男性が18か月間服役させられていた事件を報じる記事。データ照合システムの些細な表記ゆれが人の自由を左右し得ることを示す事例。
- **["Google and Reddit do not own the Internet," web scraper says after court win](https://arstechnica.com/tech-policy/2026/07/google-wont-give-up-odd-war-against-ai-web-scraping-despite-court-loss/)** - AI学習用データ収集を巡りGoogleと対立していたWebスクレイパー企業が、訴訟で勝訴し「インターネットはGoogleやRedditの所有物ではない」と主張したと報じる記事。AI時代のスクレイピングと著作権・利用規約を巡る法廷闘争の一幕。
- **[iOS and macOS 26.6 arrive today, paving the way for iOS and macOS 27](https://arstechnica.com/gadgets/2026/07/ios-and-macos-26-6-arrive-today-paving-the-way-for-ios-and-macos-27/)** - iOS/macOS 26.6が正式配信開始。CVEベースで87件の脆弱性修正に加え、次期iOS 27に向けたSpotlightのインデックス最適化なども含まれており、開発者は早めの検証が推奨される。
- **[Trump admin exempts SpaceX's Starlink from FCC ban on foreign-made routers](https://arstechnica.com/tech-policy/2026/07/starlink-gets-exemption-from-fcc-ban-on-routers-made-outside-the-us/)** - トランプ政権がFCCの海外製ルーター禁止規制からSpaceXのStarlinkを適用除外としたと報じる記事。安全保障目的の規制と特定企業への例外適用のバランスが議論を呼んでいる。
- **[SpaceX eyes tower catch for next Starship after auspicious end to 13th flight](https://arstechnica.com/space/2026/07/spacex-eyes-tower-catch-for-next-starship-after-auspicious-end-to-13th-flight/)** - Starshipの13回目の飛行が好調な結果に終わったことを受け、次回打ち上げでは発射塔によるブースター「キャッチ」の再開を目指していると報じる記事。

## 注目トピック

今回最大の話題は、Moonshot AIが公開した2.8兆パラメータの巨大オープンウェイトモデル「Kimi-K3」を、フィックスターズが公開当日にNVIDIA B300 x8の1ノードで実際にデプロイできるか検証した記事だ。史上最大級とされるオープンモデルが登場するそばから、日本のエンジニアリングチームがそれを自分たちのインフラで動かせるか即座に検証するというスピード感が、オープンウェイトモデル競争の激しさを物語っている。一方でAWSはNeptuneのタグベースアクセス制御やGlue Data Qualityの異常検知機能など、データ基盤側のガバナンス機能を地道に積み増しており、モデル自体の巨大化・高性能化と、それを安全に運用するための統制機能の整備が並行して進んでいる構図が見える。

もう一つの軸は、「小さな見落とし」が引き起こす被害の大きさが複数ソースで語られたことだ。Qiitaでは1日数人しか訪れない個人サイトが1か月で33万回もの攻撃的アクセスを受けていたことがログ分析で明らかにされ、Ars Technicaは警察のデータベース照合でたった一つのアンダースコアを見誤ったことが無実の男性を18か月間服役させる結果につながった事件を報じている。dev.toでもGitHubのIssue自動化における「確信度は権限の代わりにならない」という指摘があり、Googleが攻撃者の命名規則を刷新した動きも合わせると、システムやAIが自動的に下す判断・検知の粒度が、実社会の重大な結果に直結する場面が増えていることが今回のフィードから読み取れる。
