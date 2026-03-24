---
title: "Tech Feed ダイジェスト（2026年3月24日）"
date: "2026-03-24T10:03"
category: "summary"
summary: "Sakana AI Namazu発表・DQ1ふっかつのじゅもん解説・RocksDB CPUバグ発見・Apple Maps広告・NvidiaのDLSS5論争・IoTハック物理被害など"
tags: ["ai", "rust", "security", "game", "lobsters", "frontend", "aws", "llm", "hardware", "policy"]
---

## はてなブックマーク (テクノロジー)

- **[Sakana AI、新AIモデル「Namazu」発表　AIチャット「Sakana Chat」も公開](https://www.itmedia.co.jp/news/articles/2603/24/news071.html)** ([69users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2603/24/news071.html)) - 日本拠点のAI企業Sakana AIが独自の大規模言語モデル「Namazu（鯰）」を発表し、無料チャットサービス「Sakana Chat」を一般公開。日本語・英語に最適化された設計とのことで、海外発のモデルとは異なる日本語処理の特性が実用評価の焦点となる。

- **[DQ1の「ふっかつのじゅもん」の仕組みを全解説 - Qiita](https://qiita.com/musemyuzu/items/eb08f7790df356434e0f)** ([453users](https://b.hatena.ne.jp/entry/s/qiita.com/musemyuzu/items/eb08f7790df356434e0f)) - ドラゴンクエスト1（1986年）のパスワード式セーブ機能「ふっかつのじゅもん」がどのようにゲーム状態をエンコードしていたかを逆算・全解説した技術記事。限られたメモリ制約下でのデータ圧縮・エラー検出手法として、現代のエンジニアにも読み応えのある設計思想が詰まっている。

- **[【社内勉強会】新年度からコーディングエージェントを使いこなす - 構造と制約で引き出すClaude Codeの実践知](https://speakerdeck.com/nwiizo/she-nei-mian-qiang-hui-xin-nian-du-karakodeinguezientowoshi-ikonasu-gou-zao-tozhi-yue-deyin-kichu-suclaude-codenoshi-jian-zhi)** ([251users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/nwiizo/she-nei-mian-qiang-hui-xin-nian-du-karakodeinguezientowoshi-ikonasu-gou-zao-tozhi-yue-deyin-kichu-suclaude-codenoshi-jian-zhi)) - 新年度から組織全体でAIコーディングエージェントを活用するための社内勉強会資料。CLAUDE.md設計・ツール許可の粒度・エージェントに与える制約の構造化など、「エージェントを野放しにしない制約設計」という実践的観点がまとめられている。

- **[「愛用ツールが突然削除→AIで作ろう」の流れ……人気Chrome拡張「画像をJPG/PNG/WebPで保存」マルウェア検出で](https://www.itmedia.co.jp/aiplus/articles/2603/24/news079.html)** ([23users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/aiplus/articles/2603/24/news079.html)) - 日本で広く使われていた画像変換Chrome拡張がマルウェアと判定されてストアから削除された事案。「消えたツールをAIで再作成」という流れが話題になっており、信頼できるOSSを自分でforkして管理するというエコシステムの脆弱性と自衛策を改めて問いかける事例。

- **[WindowsはMacに比べて同一タスクの処理に約4倍ものメモリが必要？ 海外の検証結果が話題に](https://internet.watch.impress.co.jp/docs/yajiuma/2095627.html)** ([53users](https://b.hatena.ne.jp/entry/s/internet.watch.impress.co.jp/docs/yajiuma/2095627.html)) - 同一ワークロードを実行した際のメモリ消費量をWindowsとmacOSで比較した海外ベンチマーク結果が話題。SwiftUIとWPFのGUIツールキット差・カーネルのメモリ管理戦略の違いなどが原因として挙げられており、クロスプラットフォーム開発時のメモリプロファイリングの重要性を示している。

## Zenn

- **[囚人のジレンマをオンライン対戦ゲーにしたら30分で攻略されてゲームが終わった](https://zenn.dev/killit/articles/725abe9efc1c45)** - 囚人のジレンマの対戦ゲームを実装・公開したところ、わずか30分で最適戦略が収束しゲームが終了してしまったという顛末を綴った記事。ゲーム理論の「支配戦略」が現実のプレイヤー集団にいかに速く伝播するかを体験的に示しており、ゲームバランス設計の難しさを実感できる内容。

- **[starshipより速いzsh向けshell promptをコーディングエージェントだけで作った](https://zenn.dev/shuymn/articles/bda1b7b51cccbf)** - Rustで実装されたstarshipを上回る速度のzsh向けshell promptを、Claude CodeやCursorなどのコーディングエージェントに全実装させた制作記録。エージェントへの委譲で生まれた設計上の意思決定とパフォーマンスチューニングの過程が具体的で、「エージェントだけで完結する低レベル実装」の現実的な限界と可能性を示している。

- **[Rust で異なるシグネチャの関数に引数を自動で渡す仕組みを理解する](https://zenn.dev/estie/articles/16a3d3cb302f15)** - 引数の型や数が異なる複数の関数に対して汎用的に引数を渡せる仕組み（トレイトベースのディスパッチ・マクロ）をRustで実装する手法を解説。axumなどのWebフレームワークが「ハンドラ関数の引数の種類と数を自由に変えられる」内部の魔法を理解できる内容として、Rustの型システムの深みを体験できる。

- **[【Claude Code】Kaggle上位勢が設定するClaude Codeのskillsとagentsをチェックする](https://zenn.dev/nakakiiro/articles/kaggle_claude_code_boilerplate)** - Kaggle競技で好成績を収めている参加者たちがClaude Codeにどのようなカスタムスキルとサブエージェントを設定しているかを調査・整理した記事。データ分析・特徴量エンジニアリング・モデル評価の反復サイクルをエージェントで自動化するパターンが具体的に示されており、競技MLへのAI活用の最前線を知ることができる。

- **[人間のコードレビュー辞めにしたくてコードレビューエージェント作ってみた](https://zenn.dev/gvatech_blog/articles/8f0be815036eaa)** - 人間によるコードレビューを段階的にエージェントに移行するための「コードレビューエージェント」を実装した事例。PRを受け取り、差分を解析して指摘をコメントする仕組みと、「どの種類の指摘をエージェントに任せて何を人間が見るべきか」の役割分担設計が詳述されている。

## Qiita

- **[【図解】2層構造→MVC→レイヤード→ヘキサゴナル→クリーンアーキテクチャ：設計思想の進化を一気に理解する](https://qiita.com/yut-nagase/items/21703af242e7ebfc37a9)** - 2層構造のシンプルなアーキテクチャからMVC・レイヤードアーキテクチャを経てヘキサゴナルアーキテクチャ・クリーンアーキテクチャへと至る設計思想の変遷を図解で体系化した記事。「なぜそのアーキテクチャが生まれたか」という課題背景から丁寧に追っており、設計パターン選択の根拠を問われたときに参照できる良質なリファレンス。

- **[LinuxエンジニアのためのWindowsセキュリティ再入門 〜 第1回：はじめに](https://qiita.com/555hamano/items/e9e1dce9e2dbc574a93f)** - Linuxを主戦場とするインフラ・セキュリティエンジニア向けに、Windowsの認証モデル・Active Directory・NTLM vs Kerberosの仕組みを再学習する連載の第1回。ハイブリッドクラウド環境でWindowsワークロードを扱う機会が増えたLinuxエンジニアが「Windows固有の脅威モデル」を理解するための入口として有用。

- **[「新人にAI禁止令を出した組織」が、どのくらい開発フローでAIを使っているか](https://qiita.com/WdknWdkn/items/22e6a3faea1bdcaefef3)** - 新人エンジニアへのAI使用禁止を方針とする組織が、実は既存メンバーのフローでは広くAIを活用しているという実態調査。「禁止している側」の意図（基礎力の担保）と「使っている側」の現場感覚のギャップを整理しており、AI時代のオンボーディング設計という組織的課題を可視化している。

- **[GitHub Issues からリリースノートをAIで自動生成する方法](https://qiita.com/KanNishida/items/a8b2171ea5ee719befb3)** - GitHub IssuesのラベルとマイルストーンをトリガーにAIがリリースノートを自動生成するGitHub Actionsワークフローの実装解説。conventional commitsに頼らずIssue駆動でリリースドキュメントを生成できる点が、Issue管理を中心に回しているチームにとって実用的な選択肢となる。

- **[Figmaから Pencil.dev に乗り換えを検討してみた【検証編】](https://qiita.com/kobayashimakoto/items/b11ebbcf7e14ff251b76)** - AI機能統合を強調するデザインツール「Pencil.dev」をFigmaの代替として検証した記事。コンポーネント管理・Auto Layout相当機能・コード書き出しの品質をFigmaと比較しており、AI生成デザイン→コード変換のワークフロー最適化を模索するフロントエンドチームへの参考情報となる。

## AWS 新着

- **[AWS HealthImaging is now available in Europe (London)](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-healthimaging-europe-london/)** (Mar 23) - 医療用画像（DICOM）の大規模管理・分析サービス「AWS HealthImaging」がEUのロンドンリージョンで利用可能になった。GDPRや医療データの域内保管要件を満たしながら、機械学習を使った医療画像解析パイプラインをEUで構築できるようになる。

- **[AWS Neuron announces support for Dynamic Resource Allocation with Amazon EKS](https://aws.amazon.com/about-aws/whats-new/2026/03/neuron-eks-dra-support/)** (Mar 20) - AWS NeuronランタイムがKubernetesのDynamic Resource Allocation（DRA）APIに対応し、Inferentia/Trainium NeuronデバイスをEKS上で動的に割り当て可能になった。AIアクセラレータを搭載するノードをKubernetesのスケジューラが細かく制御できるようになり、LLM推論クラスタのリソース効率が向上する。

## Lobsters

- **[RocksDB development finds a CPU bug](http://rocksdb.org/blog/2026/02/17/cpu-bug.html)** - RocksDBの開発チームがデータ破損の原因を追跡した結果、AMD EPYCプロセッサの特定モデルに存在するCPUバグを発見したという報告。ソフトウェアのデバッグが深いところでハードウェアのシリコン不具合に到達する稀な事例で、重要なデータを扱うストレージシステム設計における「ハードウェアを信頼しすぎない」という教訓を改めて示している。

- **[Rewriting a 20-year-old Python library](https://www.b-list.org/weblog/2026/mar/23/20-year-library/)** - 20年以上前から存在するPythonライブラリをモダンな設計原則に従って書き直した実体験の記録。Python 2時代のコード規約・文字列処理・例外設計が現代の型アノテーション・dataclass・asyncと如何に相性が悪いかを示しつつ、後方互換性を保ちながら内部を刷新するための段階的な戦略を詳述している。

- **[An Incoherent Rust](https://www.boxyuwu.blog/posts/an-incoherent-rust/)** - Rustのトレイト実装に関する「コヒーレンスルール（孤児ルール）」の限界と、それがサードパーティライブラリのエコシステムに引き起こす問題を深く分析した記事。型クラスの実装を巡る設計上のトレードオフを、HaskellやScalaの解決策と比較しながら論じており、Rustの言語設計に関わる議論として参照価値が高い。

- **[Guideline: Rust Style](https://epage.github.io/dev/rust-style/)** - Cargoのメンテナが書いたRustコードスタイルのガイドライン。「どのような状況でどのイディオムを選ぶか」という判断基準を細かく整理しており、rustfmtやclippyが自動化できない「設計の選択」レベルの議論が充実している。チームのコーディング規約策定の土台として活用できる内容。

- **[Native Instant Space Switching on MacOS](https://arhan.sh/blog/native-instant-space-switching-on-macos/)** - macOSのSpaces（仮想デスクトップ）切り替えアニメーションを無効化してXMonad/i3wm的な瞬間切り替えを実現するネイティブな方法の解説。macOSのアニメーション設定APIとhid_keyboard_eventの組み合わせで、サードパーティツールなしに実現できる手法として、タイリングWMに慣れた開発者から注目を集めている。

## dev.to

- **[OpenAlex API: Search 250M+ Research Papers for Free (No API Key Needed)](https://dev.to/0012303/openalex-api-search-250m-research-papers-for-free-no-api-key-needed-dkm)** - 2億5000万件以上の学術論文を無料・APIキー不要で検索・取得できる「OpenAlex API」の使い方入門。Semantic Scholar・Crossrefよりもカバレッジが広く、著者・機関・引用ネットワークまで取得できるため、RAGシステムや研究動向分析エージェントのデータソースとして実用的。

- **[The Cornucopia of Gamified Threat Modeling](https://dev.to/owasp/the-cornucopia-of-gamified-threat-modeling-1c9k)** - OWASPが提供する脅威モデリング用カードゲーム「Cornucopia」の活用ガイド。開発チーム全員がカードゲーム形式でシステムの脅威を洗い出すことで、セキュリティ専門家不在でも脅威モデリングを実践できる手法を解説。チームのセキュリティ意識向上とSTRIDE/PASTAの形式知化の橋渡しとして有用。

## TechCrunch

- **[Delve halts demos, Insight Partners scrubs investment post amid 'fake compliance' allegations](https://techcrunch.com/2026/03/23/delve-halts-demos-insight-partners-scrubs-investment-post-amid-fake-compliance-allegations/)** - コンプライアンス管理スタートアップ「Delve」が監査証跡を捏造していたという内部告発を受け、デモ停止・有力VCが投資記事を削除する事態に発展した。AIを使ったコンプライアンス自動化の急成長市場で、「AIが検証できないもの」を証明するリスクが現実化した事案として業界全体への教訓を持つ。

- **[Apple Maps may be about to get ads](https://techcrunch.com/2026/03/23/apple-maps-may-be-about-to-get-ads/)** - Appleが地図アプリ「Apple Maps」に検索結果への広告掲載を計画していることが報じられた。「プライバシーを守るApple」のブランドと広告収益化のトレードオフについて議論が起きており、App Store・Spotlightに続く広告枠拡大の一環として開発者・ユーザー双方が注目している。

- **[Despite bitter rivalry, Kalshi, Polymarket CEOs back $35M predictions markets VC fund](https://techcrunch.com/2026/03/23/despite-bitter-rivalry-kalshi-polymarket-ceos-back-35m-predictions-markets-vc-fund/)** - 予測市場の最大手ライバルであるKalshiとPolymarketのCEOが共同出資し3500万ドルのVC「5(c) Capital」を設立。競合関係を超えてカテゴリー全体の成長を加速させる戦略で、規制整備が進む予測市場エコシステムへのインフラ投資が始まっている。

- **[Someone has publicly leaked an exploit kit that can hack millions of iPhones](https://techcrunch.com/2026/03/23/someone-has-publicly-leaked-an-exploit-kit-that-can-hack-millions-of-iphones/)** - 「DarkSword」と呼ばれるiPhone向けエクスプロイトキットがGitHubに公開流出。旧バージョンのiOSを実行するiPhoneをゼロクリックで標的にできる脆弱性チェーンが含まれており、**iOSを最新バージョンに更新することが急務**。GitHubは問題のリポジトリを削除したが、ミラーが拡散するリスクが続いている。

## Ars Technica

- **[Nvidia CEO tries to explain why DLSS 5 isn't just "AI slop"](https://arstechnica.com/gaming/2026/03/nvidia-ceo-tries-to-explain-why-dlss-5-isnt-just-ai-slop/)** (Mar 23) - DLSS 5のフレーム生成技術が「AIが創造したフレームは本物ではない」との批判を受け、ジェンスン・フアンCEOが反論した。ゲームのフレームレート補間をAIが担うことの意義と限界を巡る議論は、AI生成コンテンツの「品質」をどう定義するかという幅広い問題に接続する。

- **[After hackers hit an Iowa company, cars around the country failed to start](https://arstechnica.com/security/2026/03/after-hack-some-ignition-interlock-users-couldnt-start-their-own-cars/)** (Mar 23) - アイオワ州のイグニッションインターロック装置メーカーへのサイバー攻撃を受け、全米で数千台の車が起動できなくなった事件。飲酒運転防止用の電子制御装置がクラウド認証に依存していたため、サービス停止が即座に物理的な不動産に直結した。クラウド依存型IoTデバイスの可用性リスクを示す重大な実例。

- **[Intuit beats FTC in court, ending restrictions on "free" TurboTax ads](https://arstechnica.com/tech-policy/2026/03/intuit-beats-ftc-in-court-ending-restrictions-on-free-turbotax-ads/)** (Mar 23) - Intuitが「無料」を強調するTurboTax広告に対するFTCの制限命令に勝訴し、広告制限が撤廃された。「ダークパターン」や「無料と見せかけた有料誘導」を規制しようとする行政機関の試みが司法で覆されたことで、消費者保護の観点からテック業界の広告規制の難しさが改めて浮き彫りになった。

- **[A mission NASA might kill is still returning fascinating science from Jupiter](https://arstechnica.com/space/2026/03/a-mission-nasa-might-kill-is-still-returning-fascinating-science-from-jupiter/)** (Mar 23) - 予算削減でキャンセルが検討されているNASAのジュピター探査ミッション（Juno）が、最新の大気データで木星の嵐の深さと気象構造に関する重要な発見を報告した。科学的成果と予算政治の狭間で揺れるミッションの現状を伝え、宇宙科学の持続性について考えさせる内容。

## 注目トピック

今回の最大の横断テーマは**「サイバー攻撃の物理世界への波及」**だ。iOSエクスプロイトキット「DarkSword」のGitHub流出（TechCrunch）と、アイオワのIoT企業へのハックが全米の自動車起動不能につながった事件（Ars Technica）が同日に並んだ。前者はソフトウェア脆弱性の拡散速度の問題、後者はクラウド依存型の組込みデバイスが物理インフラの信頼性と直結している問題を示す。「クラウド認証が落ちると車が動かない」という現実は、コネクテッドカー・スマートホーム・医療機器など広範なIoT領域に同様のリスクが潜在することを警告しており、オフライン動作フォールバックの設計が安全要件として問われ始めている。

もう一つの注目軸は**日本発AIエコシステムの萌芽とAI活用の成熟**だ。Sakana AIが日本向けモデル「Namazu」と無料チャットサービスを公開したことで、日本語に最適化されたLLMの選択肢が増えた。同時に「新人AI禁止令を出した組織が実はAIを使っている」というQiitaの記事や、Chrome拡張のマルウェア化による「AIで自作」トレンドなど、AIツールの普及が引き起こす組織・セキュリティ上の摩擦が具体的に表面化してきた。RocksDBがCPUバグを発見した事例（Lobsters）は、AIが大量のコードを生成する時代における「ハードウェアレベルの信頼性検証」の重要性という見落とされがちな観点を提供しており、ソフトウェアテストの射程がシリコン層まで及ぶ可能性を示唆している。
