---
title: "Hacker News トップ10 ダイジェスト（2026年6月21日 午後）"
date: "2026-06-21T14:30"
category: "summary"
summary: "無料RTS復活、IPv6が50%到達、iOSフィンガープリンティング問題、図書館のモノ貸し出しなど注目の10ストーリー"
tags: ["hackernews", "gaming", "networking", "privacy", "ai", "library"]
---

## 1. [Beyond All Reason (Free Total Annihilation Inspired RTS)](https://www.beyondallreason.info)

**Score:** 129 | **Comments:** 55 | [Post](https://news.ycombinator.com/item?id=48617990)

Beyond All Reason（BAR）はTotal Annihilationにインスパイアされた無料のRTSゲームで、数千ユニットの物理シミュレーションや地形変形を特徴とする大規模なチーム戦が楽しめる。ArmadaとCortexの2陣営・10ユニットクラスを備え、Windows・Linuxに対応する完全無料作品だ。ただし最近、中核的な運営者がパブリッシャーと提携してSteamで有償化しようとするという内紛が発生し、コミュニティが揺れている。

### Key Discussion Points

- **aetherspawn**: コミュニティの毒性が問題。メタを外すとキックされ、ベテランが難しいポジションを取らずに初心者を責める負のループが続く
- **plopz**: 運営の一部がゲームをパブリッシャーに売却してSteamで有償化を試み、プロジェクトが「放射性」状態になっている
- **bob1029**: 安定したコミュニティを求めるなら FAF（Forged Alliance Forever）を推奨
- **abc42**: TAの持つ憂鬱な「終わりのない戦争」の雰囲気が好きで、BARのPvPクリックフェストとは趣が異なると惜しむ
- **Waterluvian**: ウェブサイトがビジネスソフトウェアのような雰囲気で、ゲームらしさが感じられないと指摘

## 2. [The case against geometric algebra (2024)](https://alexkritchevsky.com/2024/02/28/geometric-algebra.html)

**Score:** 74 | **Comments:** 44 | [Post](https://news.ycombinator.com/item?id=48617782)

幾何代数（GA）に対する批判的論考。著者はGA全体を否定せず、外積代数（ウェッジ積）は強力だとしつつも、幾何積（geometric product）を万能な基本演算として押し付けるアプローチと、批判を拒絶するコミュニティの疑似宗教的態度を問題視する。記事はHN上でGAの擁護派と批判派の間で活発な議論を呼んだ。

### Key Discussion Points

- **Chinjut**: GAはベクトルの単位長さの定義を必要とするため次元解析が破綻する。混合グレード多重ベクトルで特に問題が大きく、外積代数は優れているがClifford代数への統合は間違い
- **cherryteastain**: 記事はad hominem攻撃に頼りすぎており「GAを使う人が嫌い」という内容に留まっている。技術的欠陥の論証が不足していると批判
- **jsLavaGoat**: GAはマクスウェル方程式の対称性を示す際など有用な場面もある。コミュニティが押し付けがましいことと理論の価値は別問題
- **Certhas**: GA研究論文は既存の双ベクトル（bivector）言語で書かれた内容を、より複雑な表記で再記述しているだけと批判
- **srean**: 複素数を点として2D幾何に使うと角度の二等分線が `sqrt(z1*z2)` の1行で書けるという実用例を紹介

## 3. [David Ahl's Basic Computer Games Ported to C](https://github.com/proteanthread/bcg)

**Score:** 25 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=48618226)

1970〜80年代のCreative Computing誌が出版した「BASIC Computer Games」の収録作品をCに移植したGitHubリポジトリ。Linux・Windows・FreeDOS向けにビルドスクリプトが用意されているが、作者自身が「テスト・検証なし」「LLMを使った自動変換」と明記している点が議論を呼んだ。

### Key Discussion Points

- **PaulHoule**: オリジナル書籍はマイコン時代以前から存在し、1980年頃DEC店舗で購入した。TRS-80やApple ][でほぼそのまま動いた
- **firesteelrain**: Jeff Atwood（Stack Overflow共同創業者）が以前、複数言語への移植プロジェクトを立ち上げた類似例がある
- **9NRtKyP4**: GORILLA.BAS や NIBBLES.BAS でプログラミングを覚えた世代からの懐かしい反応
- **ThrowawayR2**: READMEに「LLMを使った変換」と書いてあり、テストもなし。新しい価値はないと指摘
- **WillAdams**: このプロジェクトこそ文芸的プログラミング（Literate Programming）で書き直すべきと提案

## 4. [A 3D voxel game engine written in APL](https://github.com/namgyaaal/avoxelgame)

**Score:** 96 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=48616713)

Dyalog APL と SDL3 で書かれた実験的なボクセルゲームエンジン。「APL記法でボクセルゲームを作ったら楽になるのでは」という自己への賭けから開発が始まった作品。W/A/S/Dで移動し5種のブロックを配置できる。Windowsでのパフォーマンス問題など既知の欠陥を作者自身が正直に認めており、コードはAPL 83%・C 11%の構成。

### Key Discussion Points

- **Vedor**: APLでゲームエンジンを書くという珍しさに興味。「バグだらけの情熱プロジェクト」と正直に認めるREADMEの誠実さを評価
- **Littice**: ボクセルワールドはAPLの良い販促事例。「APLの変な部分は記法であってモデルではない」と的確に観察
- **ankitraj1224**: [フラグ済み]

## 5. [Google Hits 50% IPv6](https://blog.apnic.net/2026/04/28/google-hits-50-ipv6/)

**Score:** 250 | **Comments:** 245 | [Post](https://news.ycombinator.com/item?id=48616800)

GoogleのユーザーがIPv6で接続する割合が50%に達したとAPNICが報告した。APNICの統計的重み付け手法では42%となるが、いずれもIPv6が成熟したプロトコルとして普及しつつあることを示す。インドやベトナム、サウジアラビアなど途上国での採用が急速なのは、新規IPv6インフラ構築のほうが希少なIPv4アドレスを取得するより安価なためだ。

### Key Discussion Points

- **JdeBP**: UK大手ISPのVirgin Mediaは2011年のWorld IPv6 Dayに「準備ができている」と宣言したまま15年間何もしていない（専用追跡サイトまで存在する）
  - **gertrunde**: VMにIPv6対応を依頼したら「IPv6に変換できるがIPv4は手放してもらう必要がある」と返答されたと報告
  - **jonathantf2**: 商業的に見ればVMはIPv4アドレスを十分持っており、顧客もメリットを感じないため移行する理由がないと分析
- **wolvoleo**: IPv4アドレスを暗記できるので気に入っており、6バイトのIPv5にすれば十分だったとIPv6は過設計と不満
- **axus**: 純IPv6サーバーを立てたらGitHubがIPv6非対応なことに驚いた
  - **dapperdrake**: インターネットは問題を回避する方法を見つける好例と評価
- **ThePhysicist**: 所有する/22 IPv4ブロックを「老後の蓄え」として冗談交じりに語る
  - **stymaar**: 冗談に聞こえるが、住宅に対する社会の考え方と全く同じだと応答
  - **mimsee**: 「そろそろ換金どき？」とさらに返す

## 6. [Loupe – A iOS app that raises awareness about what native apps can see](https://github.com/mysk-research/loupe)

**Score:** 386 | **Comments:** 154 | [Post](https://news.ycombinator.com/item?id=48608645)

LoupeはiOSアプリがユーザーの同意なく公開APIを通じてアクセスできる情報（ロケール、画面仕様、バッテリー状態、ボリューム作成日、ペーストボードカウンター等）を可視化するオープンソースアプリ。デバイスフィンガープリンティングの実態を示す教育ツールとして設計されており、取得情報は端末外に送信されない。主にAIコーディングツールで開発された点でも話題となった。

### Key Discussion Points

- **throwaway27448**: なぜアプリのインターネットアクセスはオプトイン制でないのか？血圧計のためにアカウント作成が必要なのは明らかな濫用と批判
  - **fizwidget**: オプトインにしても99%のアプリがリクエストするためユーザーが慣れ切ってしまい効果がないと反論
  - **nobody42**: データ露出はビジネスモデルであり、意図的な設計欠陥（defective by design）だと指摘
- **aggregator-ios**: iOSアプリは全インストール済みアプリを列挙できない（LSApplicationQueriesSchemes経由で特定アプリのみ確認可能）と誤解を訂正
  - **nomilk**: それでも50個のアプリを確認できれば、データブローカーが複数アプリから集約することでフィンガープリントに使えると指摘
  - **microtonal**: 少数アプリ情報でも他のデータポイントと組み合わせれば識別可能と補足
- **regecks**: 「iPhoneの最終セットアップ・消去日」が特に悪質なデータポイントだと指摘
  - **Gigachad**: iPhoneはフィンガープリンティング対策を念頭に設計されていない。最善の防御策はアプリを入れずブラウザを使うこと
  - **dylan604**: なぜOSがそもそもこの情報をアプリに渡すのかと根本的な疑問を呈す
- **RedComet**: ボリューム作成日とペーストボードchangeCountの粒度は問題だが、それでもAndroidよりはマシと評価
  - **backscratches**: GrapheneOSはこの問題でずっと先を行っていると指摘

## 7. [Two Qwen3 models on one DGX Spark: the residency math](https://www.devashish.me/p/two-qwen3-models-on-one-dgx-spark)

**Score:** 19 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=48587865)

DGX Spark（119.67 GiB統合メモリ）上でQwen3 80BとQwen3 4BをvLLMを使って同時実行する方法を解説する記事。重要な学び：`gpu_memory_utilization`は「空きメモリ」ではなく「総GPUメモリに対する割合」のため、80B=0.85とすると4Bモデルが入らずクラッシュする。実際の常駐メモリを`nvidia-smi`で計測してから割り当てを決めることを推奨している。

### Key Discussion Points

- **devashish86**（著者）: Qwen3-NextでのTool Choice失敗はパーサーの問題ではなくモデルの推論プロセスの問題。バックボーンをThinkingからInstructに切り替えることで解決。CUDA frameworkのオーバーヘッド約5 GiBは実測値から計画すべきと補足
- **shireboy**: ローカルLLMへの移行を検討中。5000ドルの投資は大きいが、数ヶ月で陳腐化するリスクを懸念
- **dzink**: llama.cppとunslothの組み合わせ、GLM flashなどのモデルで試すことを提案
- **roger_**: Qwen3.7のプリフィル/デコード速度を質問

## 8. [Running MicroVMs in Proxmox VE, the Easy Way](https://taoofmac.com/space/blog/2026/06/18/1845)

**Score:** 123 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=48599555)

Proxmox VE上でマイクロVM（軽量仮想マシン）を手軽に動かす方法についての記事。Proxmoxは元々マイクロVMをプライマリ抽象化として設計されていないが、VMwareの代替として十分な機能を持ち、コーディングエージェントの分離実行などの新ユースケースでの活用が議論されている。（記事本文は403のためコメントベースで要約）

### Key Discussion Points

- **tlamponi**: 2020年にマイクロVMを評価した際は維持コストに見合わなかったが、オーケストレーション改善を踏まえ再評価が必要な時期
- **wereHamster**: microvm.nixでコーディングエージェントを分離しようとしているが、NixOSのユーザースペース起動に時間がかかる問題がある
- **alexellisuk**: 2022年からSlicerVMを開発。Proxmoxより高度なゲストエージェント機能（exec/file copy/port forwarding等）を提供していると紹介
- **cedws**: ProxmoxでのマイクロVMファーストクラスサポートを望んでいると表明
- **dobin**: Plan9イメージも対応していることに感激。Proxmoxが公式にメインラインで実装してほしいと要望

## 9. [Windows UI evolution: Clicking an unassociated file](https://movq.de/blog/postings/2026-06-20/0/POSTING-en.html)

**Score:** 86 | **Comments:** 52 | [Post](https://news.ycombinator.com/item?id=48616173)

1989年（Windows 2.11）から2015年（Windows 10）にわたるWindowsの「関連付けのないファイルをクリックしたときのUI」の変遷を追う記事。Windows 3.1が明快なダイアログを導入し、XPがWebサービスへの問い合わせを試みたが不評で、Windows 10のフラットデザインではインタラクティブ要素が不明確になったと分析している。

### Key Discussion Points

- **reddalo**: Windows 9xがWindowsのピーク。ボタンがすぐわかり、UIが固くて応答性が高かった。現代のUWPアプリはもたつくと懐かしむ
- **donatj**: XPからWindows 10へのギャップが惜しい。間のバージョンはVMで簡単に試せると指摘
- **tentacleuno**: XP時代のファイル関連付けWebサービスのデータベースは失われたはず。現在はBingがスパムサイトを返すだけと嘆く
- **amadeuspagel**: ファイル拡張子を調べられる専用サイトがかつて存在したと懐かしむ

## 10. [Renting a sewing machine from the library](https://www.bbc.com/future/article/20260618-the-weird-and-wonderful-libraries-of-finland)

**Score:** 275 | **Comments:** 156 | [Post](https://news.ycombinator.com/item?id=48613755)

フィンランドの図書館が本以外の変わったモノを貸し出していることを特集したBBC記事。コメント欄では米国各地の「Library of Things」プログラムへの反応が広がり、ミキサーや楽器、3Dプリンター、CNCマシン、レーザーカッターまで貸し出す図書館の事例が次々と共有された。（BBCのためアーカイブ経由の取得不可、コメントベースで要約）

### Key Discussion Points

- **ElijahLynn**: オレゴン州ワシントン郡図書館の「Library of Things」でミキサー、シンセサイザー、ギター、品質検査器などを借りられると報告
  - **jurgenburgen**: 図書館のボードゲームコレクションをオンライン予約して借り出せる素晴らしいシステムも紹介
  - **xattt**: PEI図書館はテレスコープやラドン検出器を貸すが、コレクション全体は「期待外れ」と評価
- **cuvinny**: チャールストン郡図書館ではミシン、3Dプリンター、CNCマシン、レーザーカッター（10ドル/時以下）まで利用可能
  - **EvanAnderson**: グリーン郡オハイオ等の図書館でもCNC・3Dプリント・レーザー刻印・ミシン等が5年以内に地域全体で普及したことに驚き
- **akouri**: 地元図書館がホームレスシェルター化しており、建物は素晴らしいが訪問しにくいと悩みを吐露
  - **steinwinde**: ハラスメントを批判すべきであり図書館の包摂的役割を批判すべきでないと反論。図書館は数少ない真の包摂の場
  - **MomsAVoxell**: 資金不足は悲しいが、図書館には人生を変える力があると擁護。オーストラリア内陸でアイロンやケトルを借りた子供時代を回想

## Trends

今週のHNトップ10を貫くテーマは以下の通り：

1. **プライバシーと透明性への高い関心**: LoupeによるiOSフィンガープリンティングの可視化（386点）が最高スコアを記録。OSレベルでのデータ露出問題に対するユーザーの関心の高さが浮き彫りになった。

2. **AIとローカルLLMの実用化**: DGX SparkへのQwen3複数モデル共存、MicroVMでのエージェント分離など、LLMを実際のインフラ上で動かす実践的な議論が増えている。

3. **インターネットインフラの歴史的節目**: IPv6の50%到達（250点）は20年来の課題がようやく折り返し点に達したことを示す。一方でISPの消極的姿勢も明らかになった。

4. **レトロ技術への郷愁と再評価**: BASIC Computer GamesのC移植、APLによるボクセルエンジン、Windows UIの歴史的変遷など、古典的な技術を現代の文脈で掘り起こす記事が複数ランクイン。

5. **コミュニティと共有経済**: フィンランドの図書館記事（275点）は世界各地のLibrary of Things情報共有に発展。BARゲームの管理者紛争も合わせ、技術の「運営・管理・社会的文脈」への関心が高まっている。
