---
title: "Hacker News トップ10 ダイジェスト（2026年5月24日）"
date: "2026-05-24T13:56"
category: "summary"
summary: "MS DOS最古のソースコード公開、16バイトデモの数学、Vivado Linux廃止問題など多彩なトップ10を日本語で解説"
tags: ["hackernews", "tech", "daily", "opensource", "security", "fpga", "demoscene"]
---

## 1. [Microsoft open-sources "the earliest DOS source code discovered to date"](https://arstechnica.com/gadgets/2026/04/microsoft-open-sources-the-earliest-dos-source-code-discovered-to-date/)

**Score:** 327 | **Comments:** 99 | [Post](https://news.ycombinator.com/item?id=48253386)

Microsoftが86-DOSの45周年を記念し、「発見された最古のDOSソースコード」をオープンソース化した。86-DOSカーネルのアセンブラリスト、PC-DOS 1.00の開発スナップショット、CHKDSKなどのユーティリティが含まれ、歴史家のYufeng GaoとRich Ciniがカーニングなど数十年前の紙の印刷物をOCRスキャンで転写した。これらは完成した製品ではなく「時点ごとの作業状態と手書きメモ」であり、ソフトウェア考古学の集大成として位置づけられる。

### Key Discussion Points

- **jmward01**: MicrosoftはDOSよりBASICを書きたかった会社であり、DOSはIBMとの契約獲得のための手段だったと指摘。6502 BASICも別途オープンソース化済み。
  - **ramon156**: 「49年前のコミット」という表示を見たことがないと驚き
  - **steve1977**: Commodore 64を使いながら実は常にMicrosoftを使っていたことへの気づき
- **nananana9**: 数千行のアセンブリでソフトウェア会社を立ち上げられた時代への羨望
  - **curiousObject**: MicrosoftはDOSを購入したのであって書いたわけではない。本当の始まりはAltair BASICであり、コンピュータを持たずにHarvardのPDP-10で、しかも飛行機の中でブートローダーを書いたというGatesとAllenの伝説的エピソードを詳述
  - **yokoprime**: それでも成功には無慈悲なビジネスマンが必要だったと補足
- **locusofself**: 数十年前の印刷物をOCRで転写せざるを得なかった事実への驚き
  - **FarmerPotato**: ドットマトリクスフォントのOCR精度97%の経験と、MLがコードを自然言語でないとして誤拒否する問題を指摘
  - **WalterBright**: 亡き父の書類の中から自分の古いプログラムリストを発見してスキャン復元した体験を共有

## 2. [Wake up! 16b](https://hellmood.111mb.de/wake_up_16b_writeup.html)

**Score:** 307 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=48253060)

2026年のデモシーンコンペティション向けに制作された、わずか16バイトのx86アセンブリプログラムの解説記事。XOR演算とシェルピンスキー三角形の数学的性質（Lucasの定理）を利用して、映像と音声を同時出力する。さらに56バイト後退してステップすることで周波数シフトと視覚的なシアリング効果を生み出す、sizecoding文化の極みを体現した作品。

### Key Discussion Points

- **tedggh**: 記事がきっかけで1時間の調査を経て、再帰的なPowerPointプレゼンテーションでシェルピンスキー三角形を描く動画を発見
  - **wuschel**: 「ありがとう、爽快！」と喜んで応答
- **namanyayg**: デモの「rainbow surf」に魅了されたとYouTubeリンクを共有
  - **HellMood（作者本人）**: コミュニティはセルオートマトンのトリックは出尽くしたと思っていたが、Plexが新たな可能性を示したと語る
- **3form**: 32バイトデモが極限と思っていたが、これは引退に値する傑作だと大絶賛
- **smokel**: 2^128通りの16バイト列のうち映像と音声を生成するDOSプログラムがどれほどあるかという思考実験を提起

## 3. [Why is Vivado 2026.1 dropping Linux support for free tier?](https://adaptivesupport.amd.com/s/question/0D5Pd00001YQLdMKAX/why-is-vivado-20261-dropping-linux-support-for-free-tier-?language=en_US)

**Score:** 232 | **Comments:** 108 | [Post](https://news.ycombinator.com/item?id=48254309)

AMD/XilinxのFPGA開発ツール「Vivado」が2026.1バージョンのフリーティアからLinuxサポートを廃止すると発表し、コミュニティに波紋が広がった。Windows向けは引き続き無料で提供される非対称な対応に、学生・ホビイスト・オープンソース開発者が激しく反発。AMD公式フォーラムへの投稿を起点に議論が燃え上がった。

### Key Discussion Points

- **akarambir**: 公式回答が「AMDへの不適切な行動」の制止に費やされており、肝心の質問には答えていないと皮肉
  - **mort96**: 「disgraceful」という言葉をAMDに使うことを止めるのが最優先事項だとでも言いたいのかと辛辣に反応
  - **bigfatkitten**: 学生やホビイストは後に何百万ドルもの購買決定に関与するようになる。早期のマインドシェアを失うことはAMDにとって自業自得
- **nmaludy**: Lattice社のチップとツールを代替として推薦（基本チップは無料で利用可能）
  - **officialchicken**: Latticeも開発中に価格を引き上げる慣行があると反論
- **jkubic**: Xilinx FPGAに数十万ドルを費やしてきたが、新PC・CI・インターンへのライセンス申請の煩雑さに怒り。AMD買収以来エンジニア文化からMBA文化に退化したと批判
  - **londons_explore**: チップ代から収益を得て、ソフトウェアを無料にすべきというシンプルな提案
- **huntero**: AlteraがXilinxに負けた一因はコミュニティとホビイストのサポート不足。Intel買収直後にフォーラムを閉鎖し、AMDも同じ過ちを繰り返そうとしていると警告

## 4. [Scammers are abusing an internal Microsoft account to send spam links](https://techcrunch.com/2026/05/21/scammers-are-abusing-an-internal-microsoft-account-to-send-spam/)

**Score:** 192 | **Comments:** 93 | [Post](https://news.ycombinator.com/item?id=48253186)

詐欺師がMicrosoftの正規内部通知アカウント（`msonlineservicesteam@microsoftonline.com`）を悪用してフィッシングメールを数ヶ月にわたって送信し続けていた。Spamhausが報告し、TechCrunchが取材。Microsoftは当初コメントを避けたが、後に調査と対応を表明。BetttermentやNamecheapでも類似の手口が確認されており、正規ドメインを装うフィッシングの拡大傾向が示された。

### Key Discussion Points

- **weinzierl**: `microsoftonline.com`が本物かどうかさえ判断できない。Microsoftのドメイン管理は混乱状態であり、自社も全ドメイン資産の完全なリストを持っていないのではないかと指摘
  - **Abishek_Muthian**: インドでは規制当局が銀行に1600番号専用通知を義務付けた結果、詐欺電話がゼロになった成功事例を共有
  - **qingcharles**: Blueskyも`moderation@blueskyweb.xyz`というアドレスを使用しており、ユーザーに詐欺と誤解されるリスクがあると指摘
- **dminik**: Microsoftオーセンティケーターが不審なサインインを通知し続けているが、ログイン履歴ページは完全に空だという不気味な経験を報告
  - **xboxnolifes**: ログイン失敗が続くとパスワードをリセットさせられるが、リセット後もモバイルでログインできないという二重苦
  - **eterm**: 同様の認証プロンプト現象を経験し、セキュリティ設定に何の記録も残らないことへの不安を語る
- **spike021**: Booking.comの正規ドメインメールを使ったフィッシング試みを経験。MSへの報告後も対応なし
  - **kay_o**: ホテルに宿泊中にゲストとしてマルウェア除去を十数回手伝ったという体験談

## 5. [I spent 50 hours drawing a line graph](https://www.dougmacdowell.com/50-hours-to-draw-some-lines.html)

**Score:** 159 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=48223997)

Doug MacDownellがコーヒーメーカーの温度データを20分でソフトウェア作成できるところを、あえて50時間かけて手描きした体験記。ブリストル紙・定規・Tスクエア・ロットリングペンなど昔の製図道具を使い、20世紀初頭の統計グラフ職人と同じ手法で格子・データポイント・インク線・文字を一つひとつ積み上げた。機械的効率よりも手作業の意図的な美しさに価値を見出す哲学的エッセイ。

### Key Discussion Points

- **card_zero**: データビジュアライゼーションを体操競技に例え、「ベベルに挑戦！意欲的だが角の揃え方が惜しい」と7/10点の採点
  - **jansan**: 「ベベルとはマイターリミットのことですか？」と技術的に問い返す
  - **matja**: 心の中でそのコメントを声に出して読んでしまったと楽しむ
- **jstummbillig**: カーニングが気になって仕方ないが、全体として大好きだと愛着を示す
- **jinnyto**: 根気強い作業プロセスに感銘を受け、フランス国立統計研究所の1889年手描き統計グラフコレクションを紹介。「HNを長年読んでいて初めてアカウントを作った」と告白
- **apwheele**: Calvin SchmidのHandbook of Graphic Presentationをarchive.orgで推薦（直線の一貫した太さの作り方の記述はないと補足）

## 6. [Greg Brockman: Inside the 72 Hours That Almost Killed OpenAI](https://fs.blog/knowledge-project-podcast/greg-brockman/)

**Score:** 99 | **Comments:** 61 | [Post](https://news.ycombinator.com/item?id=48255593)

Knowledge Projectポッドキャストに出演したOpenAI共同創業者Greg Brockmanが、Sam Altman解任後の72時間を詳細に振り返った。バックアップ会社「Phoenix」の設立計画、Napaオフサイトで生まれた10年間の技術計画の詳細、非営利構造を放棄せざるを得なかった真の理由などを語る。AIがOpenAI自身のコード作成を支援している現状や雇用への影響にも言及。

### Key Discussion Points

- **embedding-shape**: 概要に書かれた「3ステップ技術計画」と「非営利放棄の真の理由」について、1時間聞かずに直接答えが欲しいと要求
- **H8crilA**: Musk訴訟で公開されたBrockmanの日記に「財務的に10億ドルに達するには何が必要か？」という一行があったと暴露。MuskはFilingが遅すぎて裁判に負けたと笑う
- **wolvoleo**: 「それはOpenAIを殺すのではなく、修正したはずだ」と皮肉
- **stuaxo**: AGIへの言及で読む気が失せると冒頭で表明。「テキスト予測マシンをつなげてもAGIにはならない」と批判
- **quantum_state**: OpenAIは起源の精神を裏切ったと断言

## 7. [Mastering Dyalog APL](https://mastering.dyalog.com/README.html)

**Score:** 42 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=48256475)

Bernard Legrandが2009年に執筆した書籍「Mastering Dyalog APL」がRodrigo Girão Serrãoによってインタラクティブなオンラインリソースとして再構築されている。14章構成で基礎から数学的関数まで網羅し、実行可能なサンプルが埋め込まれた形式に刷新。CC BY-NC-SA 4.0ライセンスで公開され、GitHubへのフィードバックも受け付けている。

### Key Discussion Points

- **raghavchamadiya**: APLのシンボルは筋肉記憶が重要であり、Jupyter Notebookスタイルのインタラクティブな例がその習得を大幅に助けると歓迎
- **pjmlp**: APLは実用的な用途はないが、雨の日のための良いブックマークになると控えめに評価
- **UltraSane**: 学習にポジティブなROIがあれば良いのにと率直に嘆く

## 8. [Childhood Computing](https://susam.net/childhood-computing.html)

**Score:** 33 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=48256597)

Susam Palが1990年代初頭、8歳の頃に月2時間しかアクセスできなかった学校のコンピュータ室でLogoを習得した経験を綴った懐古エッセイ。保存不可能な環境のため、家でグラフ用紙にプログラムを手書きし、授業で試す独特の学習スタイルを確立。家を描くアニメーションプログラムをクラスメートがノートに書き写して広まり、「最初のオープンソースソフトウェア」と振り返る。

### Key Discussion Points

- **pixel_popping**: RPGメーカーで変数を理解した瞬間に「世界が開いた」と語り、自分の子にも早期にコンピューティングの基礎を教えたいと述べる
- **Enivel**: 2001年頃、Geocitiesページのソースを見てNotePadで改変するところから始まった。「保存→Alt+Tab→リフレッシュ」のフィードバックループが全てのきっかけ
- **cube00**: Microsoftが子供向け無償ライセンスを提供しなかったことを批判。QBASICは良かったが、Windowsアプリを作るための Visual Basic は MSDN Academic で年間数百ドルかかったと回想

## 9. [Artificial egg hatched 26 healthy chickens](https://colossal.com/colossal-biosciences-artificial-egg-dodo-moa/)

**Score:** 23 | **Comments:** 29 | [Post](https://news.ycombinator.com/item?id=48219158)

Colossal Biosciences社が2026年5月19日、半透過性シリコン膜製の人工卵システムで26羽の健康な鶏の孵化に成功したと発表した。透明な窓から胚の発育を観察できるこのシステムは、ドードーや南島ジャイアントモアなど絶滅種の卵を人工的に孵化させるために設計されている。ただし孵化率データの非公開や査読論文の未提出により、独立研究者からは慎重な評価が出ている。

### Key Discussion Points

- **daniel_iversen**: 現在「すばらしい新世界」を読んでいるが、まさにこの本の冒頭と同じ展開だと指摘し「何が悪くなりえるのだろう？」と皮肉
- **VladVladikoff**: 企業が自社発表を第三者的視点で書いている奇妙さを指摘。孵化率データも査読論文も公開していない点を批判
- **yewenjie**: これは企業であって研究機関ではないのか？資金源の経済的動機は何かと問う
- **paul_ny**: 「つまり卵が先ということになりますね？」という定番ジョーク

## 10. [Silk: Open-source cooperative fiber scheduler](https://github.com/ClickHouse/silk)

**Score:** 66 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=48210937)

ClickHouseがオープンソースの協調型ファイバースケジューラ「Silk」を公開した。C++のスレッドパーコネクションモデルの限界（同時接続数の上限）に対処するために設計された軽量な非同期I/Oランタイム。ScyllaDBのSeastar等と同カテゴリで、ClickHouseのネットワーク・I/O層を段階的に移行する候補として注目される。

### Key Discussion Points

- **bbkane**: S3ベンチマークにアーカイブ済みのMinIOを使用している点を指摘し、今後の移行先を疑問視
- **nasretdinov**: スレッドパーコネクションC++サーバーの弱点（同時接続数の限界）の解消に期待。非同期INSERTを中心に効果が見込まれると分析
- **enduku**: Cilkの継続スチールにインスパイアされたより狭いアプローチの独自C実装「cactus」を紹介
- **feverzsj**: アンワインド中のタスク切り替え時の例外安全性に懸念を示す

## Trends

本日のトップ10から浮かび上がる共通テーマと傾向：

1. **ソフトウェア考古学とオープン化**: 最古のDOSソースコード公開は、デジタル文化遺産の保存と公開への関心の高まりを示す。OCRによる転写という労力も話題を呼んだ。

2. **企業によるコミュニティ軽視への反発**: VivadoのLinux廃止問題、Microsoft内部アカウント悪用、Booking.com経由のフィッシングなど、大企業のセキュリティや開発者コミュニティへの姿勢に対する不信感が顕著。

3. **技術の極限と数学の美**: 16バイトのデモプログラムはシェルピンスキー三角形の数学的性質を音と映像に変換するという驚異的な発見であり、sizecoding文化が今も進化していることを示す。

4. **AI・OpenAIへの複雑な視線**: Greg Brockmanのポッドキャストへの反応では、OpenAIの非営利精神からの逸脱への批判と、AGI概念自体への懐疑が同居している。

5. **手仕事と丁寧さへの回帰**: 50時間かけて手描きしたグラフが159点を獲得したことは、効率最優先ではなく意図的・職人的アプローチへの共感がHNコミュニティにあることを示す。

6. **絶滅種復活技術の商業化**: Colossalの人工卵は科学的には興味深いが、企業秘密主義・査読なし発表への懸念が先行しており、民間主導のde-extinctionへの疑念が見える。
