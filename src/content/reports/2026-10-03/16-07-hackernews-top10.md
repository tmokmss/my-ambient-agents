---
title: "Hacker News トップ10 サマリー (2026-10-03)"
date: "2026-10-03T16:07"
category: "summary"
summary: "UtahのVPN規制に違憲的な技術的不可能性の判決、Aleph AlphaのKolibri公開、Tomlin氏のMinecraft都市など"
tags: ["hackernews", "summary", "llm", "privacy"]
---

## 1. [Court agrees with EFF: Utah's VPN law demands a technical impossibility](https://www.eff.org/deeplinks/2026/10/court-agrees-eff-utahs-vpn-law-demands-technical-impossibility)

**Score:** 712 | **Comments:** 346 | [Post](https://news.ycombinator.com/item?id=49927754)

連邦裁判所が、アダルトサイトにVPN利用者の検知・ブロックや物理的な所在地の特定を求めるユタ州の SB 73 を差し止めた。裁判所は、完全な位置特定は不可能であり、全米のユーザーに負担を強いる「技術的に不可能な要求」だと判断した。EFF は、この種の規制が侵襲的な監視を招くと主張している。

### Key Discussion Points

- **SoftTalker**: そもそも接続がVPN経由かどうかを確実に知る方法があるのか。適当なホスティング業者経由のプロキシでも同じ見え方になるはずだ。
  - **happyPersonR**: VPN事業者に密告させるくらいしか手がなく、各自でVPNを立てれば無意味になる。
  - **semiquaver**: サイト側から見えるのはIPアドレスだけで、安いVPSで個人用VPNを誰でも作れる。義務付けられたことを実現する技術的手段はない。
- **1vuio0pswjnm7**: 「インターネットは検閲を迂回する」という主張は、監視から生じる自己検閲には当てはまらない。SNIによる検閲も手軽で広く使われている。
  - **someonebaggy**: 自己検閲の例として、HNでは書かない話題でも他の場所なら書ける、と述べる。
  - **pelican0**: SNIとは何か、検閲とどう関係するのかを質問している。
- **usernomdeguerre**: 「インターネットは検閲を迂回する」は今も真実なのか、単なる決まり文句になっていないか。イランや中国などが対抗手法を進化させている。
  - **tialaramex**: 中国は接続の切断、特定IPとの通信遮断、極端には実力行使までできる。
  - **nemomarx**: 最近の中国は成功しているのか。利用者の1%が迂回しても、大半を抑えられれば構わないのではないか。
- **kramer2718**: 政府が求めているのは猥褻物対策ではなくインターネットの統制だ。今回は勝てて良かった。
- **twiclo**: ギャンブルサイトのように全員にアカウントを強制できないのはなぜか。
  - **handoflixue**: ギャンブルは賭けた人の特定、課金、払い戻しのためにアカウントが要る。ポルノサイトには不要だ。
  - **Panzer04**: それではユタ州民かもしれないという理由で州外の全員に義務を課すことになり、同じ過大な負担の問題が生じる。

## 2. [Mike Tomlin spent 12 years building a Minecraft city](https://www.nytimes.com/athletic/7648198/2026/10/01/mike-tomlin-minecraft-nfl-coach/)

**Score:** 577 | **Comments:** 129 | [Post](https://news.ycombinator.com/item?id=49925184)

NFL のピッツバーグ・スティーラーズ前ヘッドコーチ、マイク・トムリン氏が12年かけて Minecraft の都市を作り上げたという話題。NYT（The Athletic）の記事は取得できなかったため、コメントと投稿者が添えた動画の話題から要約している。

### Key Discussion Points

- **alargemoose**: Minecraft にもフットボールにも興味がなくても、情熱を注いだものを共有する姿は見ていて楽しい。動画を見てほしい。
  - **rented_mule**: 兄が大学フットボールの元ヘッドコーチで、トップ10チームの監督とも付き合いがある。その経験からすると衝撃的だ。
  - **kilroy123**: 滅多に驚かない自分でも、奇妙で嬉しい驚きだった。
- **CSMastermind**: トムリン氏はスティーラーズの前ヘッドコーチで、負け越しシーズンなしのまま昨年退任した。現役の監督にこんな時間があること自体がありえない。
  - **fittom**: 本人も「セラピーのようなもので、現実の重圧から離れられた」と語っている。
  - **neogodless**: 全体の勝率は毎年5割超だが、2016年以降のプレーオフは振るわない。
- **xpct**: 目的のない創作の価値を思い出させてくれる。Minecraft の建築は一種の芸術で、紹介されたものは技術的に高度ではない。
  - **ddj231**: 製品は制作の労力や過程を伝える媒体でもある。LLM生成物はそれを欠く。
  - **mahboi**: 2020年にUCバークレーの学生がキャンパス全体を手作業で作り、スタンフォードは地図データから自動生成したが、出来はバークレーの方が良かった。
- **jeffgreco**: 皮肉な分析として、都市作りを始める前（2007–2013）のプレーオフ勝率は62.5%、始めた後（2014–2025）は25.0%。
  - **mattcantstop**: 途中から絶対的なQBがいなくなっただけで、リーグはQB次第だ。
  - **vitaflo**: 3勝9敗でも9回のプレーオフ出場であり、多くの監督は1回出るのがやっとだ。
- **giarc**: 元教え子の選手が「コーチが Minecraft で街を作っている間、俺たちは優勝を狙っていた」と投稿した。
  - **burkaman**: 本人の投稿とは思えない。次のツイートの賭け広告へ誘導するエンゲージメント狙いだろう。
  - **Ancalagon**: 返信欄がひどいことになっている。

## 3. [Apple Pass Designer](https://developer.apple.com/pass-designer/)

**Score:** 500 | **Comments:** 300 | [Post](https://news.ycombinator.com/item?id=49937276)

Apple が公式に提供する macOS アプリ「Pass Designer」で、Apple Wallet のパスを作成・設計できる。iPhone と Apple Watch 上での表示をリアルタイムでプレビューでき、イベント日時やフライト情報などを持たせるセマンティックタグや、デザイン上の問題を検出する検証機能も備える。

### Key Discussion Points

- **danpalmer**: LLM以前は優先度を付けにくく、今なら簡単に作れる類のソフトだ。スキーマが明確で、標準UI部品だけで作れる。
  - **latexr**: Apple は巨大企業で、未完成のソフトを無理なペースで出し、ソフトウェア品質も十年にわたり低下していると批判する。
  - **hk1337**: 以前は Sinatra 製のアプリ版が存在した。
- **pradn**: PKPass 形式のパスを作る無料のWeb版ウィザードが既にある。
  - **moontear**: Locations フィールドは過小評価されている。店舗のパスが現地で自動表示される。
  - **giarc**: 3つ作ったがウォレット内で1つにまとまってしまう。理由を知りたい。
- **mortenjorck**: バーコード領域を意味的に定義できれば、その矩形だけを高輝度（HDR）で表示できるはずだ。
  - **ray__**: まぶしいのは毎回気になる。輝度は自分で上げられる。
  - **kenferry**: Apple はバーコードの位置を既に把握している。画面の一部だけ輝度を上げる対応が必要なのではないか。
- **msephton**: 12年前に Apple 在籍時にこれの実現を強く推していた。遅くてもやる価値はある。
  - **jerbearito**: 良い提案を推してくれて感謝する。
  - **multiplegeorges**: 欲しかったもので、他社が不十分に埋めていた需要だ。
- **bahrtw**: オンライン版もある（passdesigner.app）。
  - **cube00**: Apple 公式風に見せているが公式ではなさそうだ。テキスト整列が効かず、全画面モーダルが出るなど注意が要る。
  - **gowthamgts12**: 自分の環境では 403 Forbidden が返る。

## 4. [Newgrounds.com – A community of games, music, and art](https://www.newgrounds.com/)

**Score:** 361 | **Comments:** 101 | [Post](https://news.ycombinator.com/item?id=49940394)

Flash 全盛期から続く、ゲーム・アニメ・音楽・アートのユーザー投稿型コミュニティ。直接取得は 403 だったため、Wayback Machine のスナップショット（2026-10-03）で確認した。トップには映画やゲーム、オーディオ、アートの特集が並び、サポーター制度やコミュニティ機能も健在。

### Key Discussion Points

- **iamwil**: 大学時代に遊んだ銃撃ゲームは Tom Fulp の作で、友人たちを登場人物にしていたと後で知った。
  - **jhatemyjob**: 彼は正しかった、ただ20年早かっただけだ。
  - **axolotl_raja**: そのゲームは brain-splatters かと尋ねている。
- **cableshaft**: かつてここに入り浸り、Flash ゲームを作り、フォーラムや Clock Crew に参加していた。
  - **Forgeties79**: NG と AG のせいで宿題を終わらせたことがなかった。
- **Arkeus**: Ruffle の進歩で、15年前に投稿した Flash ゲームが今も遊べて嬉しい。
  - **Ennea**: Ruffle の Firefox 拡張を入れたところ、Twitch に「ブラウザが古い」と判定され無効にした。
- **adamiscool8**: 中学生の頃に投稿した作品が残っていて泣きそうになる。
  - **RandomWorker**: 自分もドラゴンボールZ好きでたくさん作った。今の世代は iPad で同じことをしているだろう。
- **QuantumNomad_**: 休み時間に図書室のPCへ走って Flash ゲームを遊んだ思い出がある。

## 5. [Kolibri is an open-weight LLM from Aleph Alpha for German and English](https://tej.as/blog/aleph-alpha-kolibri)

**Score:** 265 | **Comments:** 116 | [Post](https://news.ycombinator.com/item?id=49943034)

Aleph Alpha が公開した Kolibri は、総パラメータ78B、1トークンあたり約3.5BのMoEモデルで、ドイツ語と英語向け。100万トークンの長文脈やドイツ語推論に強く、知らないことは答えない学習が特徴だが、コーディングとクローズドブックの知識検索は弱い。

> **関連:** #6「Kolibri Has Landed: A Sovereign Open-Weight Model」も参照（同一製品の公式発表と解説記事）

### Key Discussion Points

- **miellaby**: 技術レポートは自作の最新エージェント型LLMのチュートリアルのようで、データセットの作り方まで書かれている。ここまでの公開度は初めて見た。
  - **zelphirkalt**: 学習データを公開し第三者が再現できなければ「オープン」とは言えない。その点で評価できる。
  - **ofjcihen**: これが新しい標準になってほしい。
- **tomComb**: 主権を強調しながら、同社が Cohere（カナダ）と合併予定だと書かれていないのは誤解を招く。
- **niemandhier**: 主権モデルの当面の役割は、他モデルの出力を監査することだろう。
  - **holaysuns**: 問題は混入物ではなくスタックの支配権にある。
  - **mawadev**: ハードを調達してEU顧客先にスタックを設置する事業には市場がある。
- **spijdar**: Qwen3.8 Flash との比較がなく、約1年前の Qwen3-Next 80B-A3B と比べているのが目立つ。
- **9dev**: Aleph Alpha はもう人材も競争力もなく、投資家向けの資金調達の道具にすぎない。
  - **gchamonlive**: 長期的には、今のモデルが劣っていても主権が重要だ。
  - **rjzzleep**: 人材がいないのではなく、経営の問題で人材が流出している。

## 6. [Kolibri Has Landed: A Sovereign Open-Weight Model](https://aleph-alpha.com/en/blog/kolibri-has-landed-a-sovereign-open-weight-model/)

**Score:** 171 | **Comments:** 29 | [Post](https://news.ycombinator.com/item?id=49942706)

Aleph Alpha の公式発表。総78B・アクティブ約3Bのモデルで、最大100万トークンの文脈、Apache 2.0ライセンス。前身の Kolibri Origin から3か月で進めたと述べ、自動化された学習パイプラインにより、公共行政や航空宇宙など規制産業向けの特化を狙う。ドイツ語処理、数学的推論、根拠付けによるハルシネーション低減が強み。

> **関連:** #5「Kolibri is an open-weight LLM from Aleph Alpha for German and English」も参照（同一製品の解説記事と公式発表）

### Key Discussion Points

- **amoshebb**: 同社のベンチマークでも Qwen3.8 27B の方がドイツ語で上回る（79.9 対 70.8）。Cohere 買収後も「主権」を名乗れるのか。
  - **andy99**: 主権を名乗るには、人々が使いたいほど競争力が必要だ。
  - **Loquebantur**: それでも米中から独立している点に意味がある。
- **kkm**: オープン化に感謝し、数日間 Kolibri-1 を無料でホストしている。
  - **tharkun__**: 自分自身の実行方法を尋ねたが、感心しなかった。
  - **trvz**: サイトのフォントが小さく、非Retinaでは読みにくい。
- **12949468**: 帰属表示なしでIPを盗むことに変わりなく、今度は国家公認の「主権的な窃盗」だ。
- **dosinga**: ドイツ語文書をLLMで言い換えて学習データを作ったとあるが、そのLLMの文体を学ぶことにならないか。
- **james45**: 自己ホストはその一部にすぎず、埋め込みや検索、メモリなど残りのエージェント基盤も含めて主権を保つ方法が知りたい。

## 7. [C++ Insights – See your source code with the eyes of a Compiler](https://github.com/andreasfertig/cppinsights)

**Score:** 65 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=49928361)

Clang ベースのソース間変換ツール。暗黙のコンストラクタやキャスト、ラムダの展開など、コンパイラが生成するコードを可視化する。cppinsights.io でオンライン利用できる。

### Key Discussion Points

- **alankarmisra**: C++ を Clang 経由で JS に変換し、値の状態変化を HTML 上でステップ実行できるようにしたことがある。
- **StilesCrisis**: README の例にラムダのキャプチャがあればよかった。コンパイラの魔法が最も出る部分だ。
- **rramadass**: ツールはオンライン版（cppinsights.io）で使える。

## 8. [Woking Electrical Control Room (2016)](http://www.darbiansphotography.com/woking-electrical-control-room-urbex)

**Score:** 58 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=49938399)

サザン鉄道網の電力を管理した5か所の制御室の一つ、ウォーキング電気制御室の探索写真。1936年建造で白いドーム天井の楕円形の部屋と装飾的な鋳鉄ポールが特徴。1997年まで稼働し、現在は文化財指定の建物として時折公開される。

### Key Discussion Points

- **footydude**: 機能性への徹底した配慮に、荘厳さが少し加わった美しい空間だ。
- **tempodox**: サイトのフォントが読みにくいが、写真は良い。

## 9. [FTL: A new operating system for clouds](https://ftl-os.org/)

**Score:** 13 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=49944912)

「OSをライブラリとして作れる」クラウド向けOS。ユーザー空間のOSインスタンスをコンテナで動かし、カーネルの介入を最小限にする。VM並みの安全性、マイクロカーネル的な柔軟性、Linuxバイナリ互換を両立するとしている。

### Key Discussion Points

- **drybjed**: 趣味で、gnu のように大きくはならないのか、と皮肉まじりに尋ねる。
- **tekacs**: Unikraft より gVisor に近く見える。傍受経路が速いのかもしれない。
- **romac**: v0.1.0 が公開され、非同期Rust（マルチスレッドTokio）対応とLinux互換層の拡充が入った（投稿者本人のプロジェクトではない）。
- **IshKebab**: ユニカーネルなのか。ASCIIアートの図が崩れている。

## 10. [Body Awareness in Goffin's Cockatoos](https://www.nature.com/articles/s41598-026-57500-7)

**Score:** 4 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=49913106)

Scientific Reports に掲載された、ゴフィンインコ（オウム）の身体認識（自分の体の大きさや位置の理解）を扱う研究。論文本体はアクセス認証にリダイレクトされ、Wayback にもスナップショットがなく、コメントもないため、タイトルと掲載誌のみに基づく。

## Trends

- **規制と技術的現実**: ユタ州のVPN規制の判決（#1）は、「検知不可能なものを義務付ける」ことへの異議が通った例として注目を集めた。
- **主権AI**: Aleph Alpha の Kolibri（#5, #6）は同じ製品の別記事が並んだ。オープンさは評価される一方、ベンチマークの比較対象や Cohere との合併を巡り「主権」の意味が議論された。
- **ノスタルジーと創作**: Newgrounds（#4）やトムリン氏の Minecraft 都市（#2）のように、成果を目的としない創作や古いWeb文化が共感を集めた。
- **開発者ツール**: Apple の Pass Designer（#3）、C++ Insights（#7）、FTL（#9）と、小さくても実用的なツールの発表が目立った。
