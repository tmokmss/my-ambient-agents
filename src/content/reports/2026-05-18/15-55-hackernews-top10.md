---
title: "Hacker News トップ10サマリー（2026年5月18日）"
date: "2026-05-18T15:55"
category: "summary"
summary: "Files.mdがOSSのObsidian代替として注目、AIスパム対策・Bitwarden経営変化・Linuxメーリングリスト混乱など話題多数"
tags: ["hackernews", "oss", "ai", "security", "minecraft", "mathematics"]
---

## 1. [Show HN: Files.md – Open-source alternative to Obsidian](https://github.com/zakirullin/files.md)

**Score:** 207 | **Comments:** 121 | [Post](https://news.ycombinator.com/item?id=48179677)

Go製のミニマリストなノートアプリで、すべてのデータをローカルのMarkdownファイルとして保存する。ブラウザベースのPWAとして動作し、オフライン対応・iCloud/Dropbox同期・Telegramボット連携を備えた単一バイナリで配布される。ObsidianのプロプライエタリなElectronアプリとは対照的に、データの完全な所有権とオープン性を重視した設計となっている。

### Key Discussion Points

- **UnnoTed**: Qt6/C++でネイティブのObsidian代替を自作中。RAM使用量約15MBの軽量設計で、テーブルや構文ハイライトはまだ未実装
  - **phalangion**: 「AI'm building（私がAIを使って作っている）」というダジャレを評価。AI支援開発を正確に表現する新表現として面白い
- **himata4113**: 今回初めてObsidianが非OSSだと認識した。なぜかOSSに感じていた
  - **bachmeier**: データはMarkdownで公開形式、プラグインもOSSだが、コアアプリ自体はElectronで非公開。逆オープンコアモデルと言える
- **obsidianbases1**: Obsidianの真の差別化要因はプラグインエコシステム。本当の代替品は既存のObsidianプラグインをそのまま使えることが必要
- **Ifkaluva**: 「セカンドブレインは育つが、ファーストブレインは賢くならない」という指摘に共感。記憶を外部化するのではなく、第一の脳を強化する手段として使うべき
- **sn0n**: ローカルLLMコーディングエージェントで一発生成できるまでObsidianを使い続ける予定

## 2. [We stopped AI bot spam in our GitHub repo using Git's –author flag](https://archestra.ai/blog/only-responsible-ai)

**Score:** 36 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=48181125)

Archestra.aiがGitHubリポジトリへのAIボットスパムを撃退した方法を公開。GitHubの「prior contribution必須」フラグとCAPTCHAを組み合わせた独自CIスクリプトで、1週間で500件以上のボットをブロックした。単一のバウンティIssueに253件のAI生成コメントが殺到するなど、オープンソースコミュニティにおけるAIスラップ問題の深刻さを示す事例となっている。

### Key Discussion Points

- **ildari（著者）**: CAPTCHAを通過したユーザーに共著コミットを発行するCIスクリプトを構築。Cloudflareのデータでは初週に500件超のボットチャレンジを処理

## 3. [1024000^2 Blocks, 2B2T Minecraft Server World Download Project, and Discoveries](https://github.com/2b2tplace/1m_release)

**Score:** 45 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=48180204)

マインクラフトの無法地帯サーバー「2b2t」の史上最大規模ワールドダウンロードプロジェクト。1,024,000²ブロックのオーバーワールドを含む計約24TBのデータを1年以上かけて収集し、カスタムファイル形式とダウンロードサーバーを自作した。「2b2t Wayback Machine」などの付随ツールも公開されている。

### Key Discussion Points

- **sciencejerk**: READMEの「重度の武器化された自閉症の力」という表現を引用し、このような大規模コミュニティプロジェクトの駆動力を評価
- **MattCruikshank**: MinecraftにURL経由でワールドをストリーミング視聴できる観戦モードがあれば良いのにと提案。BitTorrent方式での分散配信アイデアも披露
- **nom**: このプロジェクトは秘密裏に進行していたため、3日前に別グループが独自の200k²ワールドダウンロードを公開してしまった
- **lanyard-textile**: 2b2tはチート・改造クライアント・アイテム複製が全て許可された完全アナーキーサーバー。スポーン地点を離脱することも困難
- **purrcat259**: 2b2tを単なるアナーキーではなく「永続的な芸術作品」として捉えた動画を紹介

## 4. [The Quiet Renovation at Bitwarden](https://blog.ppb1701.com/the-quiet-renovation-at-bitwarden)

**Score:** 72 | **Comments:** 35 | [Post](https://news.ycombinator.com/item?id=48163389)

人気パスワードマネージャーBitwardenで静かな経営変革が進行している。2月に創業CEO Michael Crandellが顧問に退き、M&A・PE経験者のMichael Sullivanが就任。「常時無料」の削除、コアバリューの無告知変更など、公表なしにブランド基盤が書き換えられており、著者は将来的な売却・買収の布石と見ている。

### Key Discussion Points

- **welder**: PE思考のCEOはバリュー抽出・製品停滞・品質低下を招く。今すぐ移行すべき
- **xweb**: 昨年のUXリニューアル（肥大化・低速化）から既に不信感あり。Vaultwarden・Proton Pass・KeePassへの移行を検討
- **Havoc**: LastPassの教訓からすでにVaultwarden自己ホスティングに移行済み。今や「バイブコーディングした自作ソリューション」の方がまだ安全かもと思い始めている
- **dust-jacket**: ちょうど有料プランに移行したばかり。大幅値上げや改悪は困る
- **RyJones**: この記事を読んでBitwardenからの移行を完了した

## 5. [Project Glasswing: what Mythos showed us](https://blog.cloudflare.com/cyber-frontier-models/)

**Score:** 46 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=48179732)

Cloudflareがアンソロピックのセキュリティ特化型LLM「Mythos Preview」を自社インフラの脆弱性検出に試験導入した報告書。Mythosはエクスプロイトチェーンの構築と証明生成を組み合わせる能力で従来の汎用モデルを上回るが、ガードレールの一貫性が不十分で安全境界として機能しない。効果的な脆弱性スキャンには単一エージェント任せではなく、偵察・ハンティング・検証・重複排除・追跡の多段階パイプラインが必要とされる。

### Key Discussion Points

- **xnorswap**: このブログ記事自体をMythosまたはOpusが書いたのではないかと疑問視。大企業がコーポレートブログをLLMに外注する現象を指摘
- **dataflow**: 発見された脆弱性の中で最も深刻なものの実際の深刻度が最も重要なはずだが、意図的に伏せられているのではと指摘

## 6. [Actually, Democracy Dies in H.R.](https://www.nytimes.com/2026/05/18/world/americas/actually-democracy-dies-in-hr.html)

**Score:** 93 | **Comments:** 43 | [Post](https://news.ycombinator.com/item?id=48180091)

NYTimes記事（ペイウォール、コメントより要約）。「凡庸な従業員がいかに権威主義的指導者の台頭を助けるか」についての新研究を紹介。キャリア昇進の欲求という普通の動機が、下級・中級官僚を専門的義務や基本的道徳の侵犯へと駆り立てうることを実証的に示す。

### Key Discussion Points

- **gchamonlive**: Hannah Arendtの「悪の凡庸さ」と同じ結論。データが哲学の観察を後追いで裏付けた
- **elzbardico**: ホロコーストは政治に無関心だった凡庸なキャリアリストたちなしには実行できなかった。上位者の命令に疑問を持たないことの危険性
- **icegreentea2**: 同じキャリアプレッシャーが、ある者を体制の手先に、別の者をクーデター参加者に駆り立てる。「専門性の向上だけでは民主主義を守れない」という政策的含意は重い
- **DrScientist**: 競争的システムで「敗者」に適切なセーフティネットを与えなければ、彼らは犯罪や過激主義に走る。能力主義とセーフティネットの関係を問う
- **mitchbob**: 記事へのarchive.phリンクを共有

## 7. ['We mould trees to grow into the shape of chairs'](https://www.bbc.co.uk/news/articles/cvg0yy3gp71o)

**Score:** 106 | **Comments:** 29 | [Post](https://news.ycombinator.com/item?id=48179183)

BBC記事（アクセスブロック、コメントより要約）。「ツリーシェイピング」と呼ばれる技法で、生きた木を椅子などの家具の形に育てるアーティストを紹介。枝を編み込み・接ぎ木することで数年かけて望む形状に誘導するこの手法は、歴史的に世界各地で試みられてきた。

### Key Discussion Points

- **noworriesnate**: この分野は「Tree Shaping（ツリーシェイピング）」と呼ばれ、歴史は長いが未試行の可能性がまだ多い
- **Jedd**: オーストラリアのPeter Cook＆Becky Northeyが1990年代から「pooktre」として実践。椅子だけでなく様々な形状の木製家具を制作
- **waltbosz**: 1990年代のReader's Digestでこの技法を知り、白チェリーの木で5年間実践した個人体験を共有
- **abhi_kr**: 記事タイトルが比喩ではなく文字通りの意味だと知って驚いた

## 8. [The Aperiodic Table](https://blog.jgc.org/2026/05/the-aperiodic-table.html)

**Score:** 44 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=48151990)

ペンローズタイリング（非周期的タイリング）を元素周期表のレイアウトに応用したインタラクティブな視覚化プロジェクト「Aperiodic Table」の紹介。周期表の元素を非周期的パターンで並べ替え、ドラッグ操作で動的に再配置できる。aperiodictable.comでライブ版を試せる。

### Key Discussion Points

- **nilirl**: 「非周期性」の直感的な理解が難しい。メンデレーエフの天才はまさに「周期性を探しに行った」点にあると指摘
- **pohl**: 「準周期的」と「非周期的」の用語使い分けがいつから変わったのかと疑問
- **oersted**: 単一の形状（モノタイル）による非周期的タイリングが見たかった。MoMathの「帽子型タイル」を紹介
- **pavel_lishin**: テーブルをドラッグしたとき、元素間の実際の関係が保持されるのか、単に最近傍に配置されるだけなのか疑問

## 9. [Linux security mailing list 'almost unmanageable'](https://www.theregister.com/security/2026/05/18/linus-torvalds-says-ai-powered-bug-hunters-have-made-linux-security-mailing-list-almost-entirely-unmanageable/)

**Score:** 119 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=48178692)

Linux 7.1-rc4リリースに際してLinus TorvaldsがセキュリティメーリングリストへのAI生成バグ報告の洪水についてコメント。AI搭載バグハンターがメーリングリストを「ほぼ管理不能」な状態にしているという。同時期、「Marian Corcodel」名義で26MBのAI生成と思われる無意味なパッチが毎日複数回送信される大規模スパム攻撃も確認されており、LLM汚染を狙った行為の可能性もある。

### Key Discussion Points

- **l1k**: 「Marian Corcodel」名義で毎日26MBの無意味なパッチが複数回送信されている。AI生成と思われ、LLM学習データを汚染する意図の可能性
- **st_goliath**: 実際のコンテキストはLinux 7.1-rc4リリースでLinus がドキュメント変更についてコメントしたもの。The Registerが薄い内容を長い記事に仕立てたと批判
- **Sweepi**: TorvaldsとKroah-Hartman（AI有用論者）の意見は両立しうる。相互に矛盾しない
- **trelbutate**: そもそもメーリングリストでの開発は最も複雑な議論形式。フォーラム形式なら特定スレッドだけ閉じられる
- **oncallthrow**: Linuxカーネルへの「AIアシスト」PRはもはや称賛されなくなるはず

## 10. [Math Jokes in Alice in Wonderland](https://storica.club/blog/alice-is-math-jokes/)

**Score:** 77 | **Comments:** 38 | [Post](https://news.ycombinator.com/item?id=48135096)

オックスフォード大学の数学講師だったルイス・キャロルが『不思議の国のアリス』に埋め込んだ数学的ユーモアを解説する記事。有名な「4×5=12」のシーンは異なる基数（base 18）で計算すると正しくなる。マッド・ハッターのティーパーティーは非ユークリッド幾何学論争の風刺、チェシャ猫の笑いは「担体なき性質」として抽象数学への不安を表現、モックタートルのカリキュラムは数学用語の駄洒落で構成されている。

### Key Discussion Points

- **andrewl / srean**: Martin Gardnerの『注釈付きアリス』が数学的・文化的注釈を完全に解説しており、必読とのこと
- **j2kun**: 参照文献がなく、「チェシャ猫＝群論批判」などは証拠が弱い。裏付けとなる研究はあるのかと疑問
- **Chinjut**: 掛け算シーンの解釈に異議。基数解釈よりも、単純に「乗算が異様に遅く成長する」というナンセンスジョークとして読む方が自然
- **astravagrant**: ティーパーティーはハミルトンの四元数（Quaternions）を揶揄したもの。ハミルトンは禿頭でトップハットを着用していたことも踏まえての風刺

## Trends

今日のHacker Newsトップ10に共通するテーマは以下の通り：

1. **AIによる既存コミュニティの汚染**: GitHubへのAIスラップPR（Story 2）、Linuxカーネルメーリングリストへの大規模スパム（Story 9）、そしてCloudflareのAIセキュリティ研究（Story 5）と、AI生成コンテンツが開発コミュニティ・セキュリティに与える負の影響が繰り返し浮上した。

2. **商業化への抵抗とオープンソース回帰**: Bitwardenの静かなるPE化（Story 4）とFiles.mdの登場（Story 1）は、商業SaaSへの不信感とOSSへの回帰欲求の高まりを示す。LastPass・Authyなど過去の「裏切り」への言及も多く見られた。

3. **「人間の悪」の構造的分析**: 権威主義を支える凡庸な官僚制度の研究（Story 6）と、ツリーシェイピングという地道な職人技（Story 7）は対照的だが、いずれも「人間の営み」の持続性と構造を問い直している。

4. **コミュニティ主導の超大規模プロジェクト**: 2b2tワールドダウンロードの24TB（Story 3）は、ゲームコミュニティが商業組織に匹敵する技術的・組織的能力を持つことを示す。

5. **古典の再発見**: アリスの数学的解釈（Story 10）と非周期的タイリング（Story 8）は、既存の知識体系を別の視点で見直す「再解釈」への関心を反映している。
