---
title: "Hacker News トップ10 ダイジェスト（2026年10月21日）"
date: "2026-10-21T04:27"
category: "summary"
summary: "eMudhra 中間CA秘密鍵の漏洩、許認可SimCity、Voxtral 3、TorchTPU など Hacker News 上位10件の要約"
tags: ["hackernews", "security", "ai", "css"]
---

## 1. [eMudhra intermediate CA compromise](https://emudhra.we-have-a-problem.com/)

**Score:** 749 | **Comments:** 354 | [Post](https://news.ycombinator.com/item?id=50166579)

eMudhra が発行した8つの中間CA証明書は、秘密鍵の生成に不備があり、証明書そのものから誰でも秘密鍵を復元できる状態だった。Firefox・Chrome・Apple・Microsoft はすでにこれらを失効させているが、失効確認をしないクライアントは多く、ソフトウェア更新や回避策が必要になる。ページにはパッチ済みバージョンと、macOS・Linux・NetBSD・FreeBSD 向けの暫定対処が載っている。

### Key Discussion Points

- **eqvinox**: 「侵害された」8つのCAの秘密鍵は、1バイトの値（スカラー 4 など）だったという指摘。
  - **saidnooneever**: 鍵生成がエラーを返し、そのエラーコード 4 が鍵として使われたのではないかと推測した。
  - **ROllerozxa**: 実際に悪用された可能性や、古いAndroid端末での挙動を気にしている。
- **galadran**: 影響範囲は不均一だという指摘。Mozilla は OneCRL によって、更新なしで数時間のうちにFirefoxユーザーを保護できた。
  - **crote**: Android 版 Firefox ではデモサイトが警告なしに開けたと報告した。
  - **divingdragon**: Firefox でも環境によって結果がまちまちだと報告した。
- **tech234a**: eMudhra が Mozilla のバグ票で、鍵生成スクリプト（KGC）の不具合が原因だと説明していると紹介した。
  - **oasisbob**: 米欧データセンター向けに作ったCAという説明に疑問を呈した。
- **xucheng**: 多くのソフトウェアが独自のCAストアを同梱していて、システム側を直しても全部は直せないと指摘した。
- **hypfer**: 鍵が公開リポジトリ上で見つかったとの未確認情報を共有し、IoT機器への中間者攻撃を懸念した。
  - **baby_souffle / rollulus**: 中間証明書は2039年ごろまで有効で、鍵も既知なので、IoT機器への攻撃が長く続くと述べた。

## 2. [Show HN: SimCity, but with Permits](https://permit.petercai.com/)

**Score:** 651 | **Comments:** 333 | [Post](https://news.ycombinator.com/item?id=50170593)

市長として住宅・交通・工場を、公聴会や反対運動、訴訟、再選をくぐり抜けて通していくブラウザ上の都市シミュレーション。何かを改善するたびに新しい反対意見が生まれ、経済は住民・企業・家賃・地価として追跡される。シナリオは4つで、勝利画面はなく、初回読み込み後はオフラインでも動く。

### Key Discussion Points

- **goda90**: 請願の署名数が人口の250%を超えるなど、街の設定と合わない記述が没入感を損なうと指摘した。
  - **pcai**（作者）: 先に用意した物語を後からエンジンに組み込んだため、取りこぼしがあったと認めた。
- **ryandrake**: 数週間前に話題になった類似ゲームと同様に、「現実は規則と住民の声のせいでSimCityより難しい」という風刺だとした。
- **blobbers**: 空港が場所ごとに違う理由が気になり、最適解のシミュレータがあるのかと問うた。
  - **buildsjets**: 地理や風向きなど、土地ごとの制約が違うからだと答えた。
  - **dlcarrier**: 最適な空港は、卓越風に沿った平行滑走路を2本、9,000フィート離して置く形だと説明した。
- **zabriel_goss**: ウォルト・ディズニーが構想した計画都市としての EPCOT の話。
  - **turbocon**: ディズニー社が後に作った都市として、フロリダ州セレブレーションを挙げた。
  - **subscribed**: 英国のガーデンシティ（ウェルウィン、ミルトン・キーンズ）は暮らしやすいと述べた。
- **bruce511**: 現状は、百年にわたる民主主義の産物であり、全員を満足させ続ける仕組みの結果だと見ている。
  - **mbesto**: コスタリカで、ゾーニングの運用が緩く住民が自主調整している経験を語った。
  - **kspacewalk2**: 日本のように国が主導して市町村の裁量が小さい国もある、と対比した。
- **Nevermark**: 現実的な経済実験ができる SimCity を望んでいる。
  - **bombcar**: Dwarf Fortress の都市版のようだと言い、ソ連を舞台にした別ゲームを勧めた。

## 3. [Voxtral 3](https://mistral.ai/news/voxtral-3/)

**Score:** 565 | **Comments:** 147 | [Post](https://news.ycombinator.com/item?id=50168396)

Mistral が発表した音声モデル群と、音声エージェント用SDK。リアルタイムのストリーミング処理で、聞き取り・推論・ツール呼び出し・発話を1本につなぐ。音声認識は50言語超で、話者分離や文脈バイアス、発話終了検知に対応する。音声合成の Voxtral Speech 3 は感情やペースの調整、音声クローン、35言語超に対応する。EUホストのAPIか自前環境で動かせる。

### Key Discussion Points

- **creposukre**: デモでは皮膚科の予約がすぐ取れているが、フランスでは非現実的だと皮肉った。
  - **solyin**: 裏で皮膚科のメールに侵入して脅したのだろうという冗談。
  - **hoppp**: 皮膚科専用のAIに繋ぐMCP呼び出しがあったのではと返した。
- **TuringNYC**: Teams や 8x8 の文字起こしは品質が低く、LLMで使えないことがあると嘆いた。
  - **dmichulke**: 上司の留守電が数カ国語の混ざった文章に起こされ、スパムに見えた経験を語った。
  - **koe123**: 会社はTeamsをやめないだろうから、改善する動機がないと述べた。
- **londons_explore**: 音声エージェントを社内システムに直結することのセキュリティを懸念している。
  - **trollbridge**: ユーザー本人に直接公開できるAPIだけに接続し、サンドボックスに入れるべきだとした。
  - **howunfortunate**: 人間のオペレーターより騙しやすいとは限らないと反論した。
- **Const-me**: 前世代の Voxtral Mini 4B Realtime を使った、商用のオフライン推論ソフトを公開している。
  - **vrmiguel**: NVIDIA の Parakeet を使い、オーディオブックと電子書籍の位置を同期するプレーヤーを作っている。
- **drum55**: 今回はクローズドモデルで、ローカル向けのSTT/TTSが弱い状況が続くと指摘した。
  - **dr_hooo / gavinray**: Qwen ASR、Kokoro など、ローカルで動く代替を挙げた。
- **dangoodmanUT**: Mistral はオープンモデルを出さなくなったのではないかと問うた。

## 4. [What shall I teach my son?](https://stevekrouse.com/ends)

**Score:** 319 | **Comments:** 385 | [Post](https://news.ycombinator.com/item?id=50169707)

プログラマーの Steve Krouse が、初めての子を迎える前に、AGI時代の教育の目的を問うエッセイ。ニール・ポストマンの『The End of Education』を手がかりに、教育は建前と実際に存続させている力（寄付金、権威、子どもの預かり先）が別だと論じる。学校がラジオや映画、インターネットを生き延びてきた歴史を踏まえている。

### Key Discussion Points

- **dijit**: 家系は代々整備士だが自分は違うと述べ、職業は世代で消えうると指摘した。
  - **cjbgkagh**: 「生き残らなかった人」を見落とす選択バイアスだと返した。
  - **Animats**: 道具に触れて基礎技能を身につける機会は必要だと述べた。
- **Aperocky**: 学校の本当の存在理由は、議論されている理由のどれでもなく、働く親の預かり先ではないかと述べた。
  - **kazzak13**: 学びの外観、友人づくり、託児など、複数の力が形作ったと補足した。
  - **mberning**: 今の教育は産業革命期の労働者観に基づいていると述べた。
- **ThrowawayR2**: ゲイツは優秀な成績で、「普通の中退者」ではないと指摘した。
  - **paid_dot_expert**: 書く側も「知っているつもり」の話を事実確認すべきだとした。
- **PeterWhittaker**: 幼いうちは、教えるよりも一緒に読み、歩き、買い物をして過ごすのが大事だと述べた。
  - **sivanmz**: 学びを好む子かどうかは早く分かるので、焦らなくてよいと述べた。
- **tirumaraiselvan**: この問いが今注目されるのは、教育に求めるのが就職だけだと示していると見ている。

## 5. [Google open-sources TorchTPU, a native PyTorch back end for TPUs](https://github.com/google-pytorch/torch_tpu)

**Score:** 291 | **Comments:** 65 | [Post](https://news.ycombinator.com/item?id=50169053)

PyTorch を Google の TPU で動かすためのバックエンドが公開された。TPU向けの ATen カーネル、XLA計算のコンパイルキャッシュ、データ並列・テンソル並列、`torch.compile()` との統合を備える。Llama、Qwen、ResNet などのサンプルを含む。Python 3.11 以上に対応し、pip（0.2.0）で入る。

### Key Discussion Points

- **pcmoritz**: Tenstorrent 向けのオープンな libtpu 実装を作っていて、torchtpu の大半が動くと紹介した。
  - **asparagui**: Lean から PJRT を動かしており、他のプラットフォームも使えるようになりそうだと返した。
- **dalemhurley**: Google と Apple が一般消費者をエッジ推論へ移すので、IPO を控える企業への影響は大きいと見ている。
  - **lofties**: DeepSeek も忘れないでほしいと返した。
  - **tjwebbnorfolk**: 推論用に自分でTPUを買えるなら欲しい。
- **npalli**: Amazon も Trainium 向けに同様の取り組みをしていると紹介した。
  - **AnotherGoodName**: 今日が PyTorch カンファレンスの日だとして、公開のタイミングに触れた。
- **fancyfredbot**: XLA は inductor より良いコンパイラ基盤になり得て、TensorFlow は終わりだろうと述べた。
- **ismailmaj**: 以前は XLA と格闘する必要があったが、公式サポートは朗報だと述べ、JAX と PyTorch は好みの問題になったと見ている。

## 6. [Feds suspect ransom negotiator ran ShinyHunters extortion site](https://krebsonsecurity.com/2026/10/feds-suspect-ransom-negotiator-ran-shinyhunters-extortion-site/)

**Score:** 136 | **Comments:** 55 | [Post](https://news.ycombinator.com/item?id=50173487)

連邦当局は、ランサムウェア交渉会社2社の幹部が ShinyHunters と近い関係にあったと疑っている。米国の幹部の1人は、被害者に圧力をかけるサイト「Shinywire」の運営に関わった疑いがある。カナダの経営者 Edward Dubrovsky が10月に恐喝関連で逮捕・起訴され、オランダ人容疑者の Signal メッセージが捜査の手がかりになったとされる。別件で、元 Cypfer CEO の Daniel Tobok と「ghostbyte」という名前の結びつきも報じられているが、本人はコメントしておらず、Cypfer は関与を否定している。

### Key Discussion Points

- **kevin_thibedeau**: ShinyHunters は9月下旬にFBIの採用サイト fbijobs.gov を侵害した。OPM 流出から11年経っても杜撰さは変わらないと皮肉った。
- **vntok**: 『ブレイキング・バッド』の台詞をもじった冗談。
- **mmooss**: 連邦捜査機関による容疑者情報のリークは、過去にも不正確で人生を壊した例があると警告した。
- **ofjcihen**: インシデント対応の現場では、交渉人の大半は誠実で価値が高く、一部のせいで業界の評判が傷つくのは残念だと述べた。

## 7. [The Other Epidemic: Trying to get off benzodiazepines](https://www.thebeliever.net/the-other-epidemic/)

**Score:** 109 | **Comments:** 75 | [Post](https://news.ycombinator.com/item?id=50173891)

ベンゾジアゼピン系薬剤をやめようとする苦難を描いた The Believer の記事。本文は取得できなかったため、コメントから推測している。離脱の長さと重さが主題とみられる。

### Key Discussion Points

- **itqwertz**: 仕事のストレスから、ナチュラル系サプリ、エナジードリンク、アンフェタミン系処方薬へ進んだ知人たちを見てきたと語った。
- **gavinray**: 多くの薬物から離脱した経験があり、ベンゾの離脱は別格だと語った。
- **howtoquitwell**: 自分の飲酒依存と、そこからの回復の経験を語った。
- **yodsanklai**: 年に数回、1〜2日だけブロマゼパムを25年使ってきたが、依存の兆候はなかったという別の見方。
- **soniczentropy**: 20年以上服用していた母親が、急な減薬で救急搬送5回、入院3回、約1年苦しんだと語った。

## 8. [The Future of CSS](https://www.joshwcomeau.com/css/interop-2027/)

**Score:** 91 | **Comments:** 28 | [Post](https://news.ycombinator.com/item?id=50175070)

Josh Comeau が、ブラウザ間の互換性プロジェクト Interop 2027 に向けて推す10の機能を紹介する。CSS Functions、`corner-shape` / `border-shape`、anchored container queries、`inherit()`、スクロール起点アニメーション、`reading-flow`、`interpolate-size`、gap decorations などが挙がる。多くは今のところ Chromium 系のみの対応だが、プログレッシブエンハンスメントとして使えるという主張。

### Key Discussion Points

- **paczki**: フレームワークなしの素の HTML/CSS/JS が、最近とても良くなったと語った。
- **CharlesW / afavour**: CSS が好きで、近年の書き方は変わり、変数によるダークモード対応も快適だと述べた。
- **alberth**: 特に関数の追加は CSS を JS に近づけ、不必要に複雑にすると懸念した。
- **koolala**: レスポンシブなサイズ指定の iframe 標準が、記事に出ていないが楽しみだと述べた。
- **herpdyderp**: ブラウザの協調を謳いながら、挙がる機能が Chrome 限定なのは妙だと指摘した。

## 9. [Good type against all odds](https://unsung.aresluna.org/good-type-against-all-odds/)

**Score:** 46 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=50175059)

Marcin Wichary のブログ。一部のディスプレイで文字が斜めに見えるのは、画素が行ごとに更新されるためで、逆向きにもできたはずだと論じる。そこから、スモールキャップ、ピクセルフォントのアイコン、彫刻された標識の縦の合字、3D下線など、予想外の書体の細部を紹介する。優れた仕事には余分な手間がかかる、という趣旨。

### Key Discussion Points

- **john_saptra / jjcm / SA9G**: ありふれた場所にある丁寧な仕事と、著者の語りを称賛した。
- **hankbond**: 写真の構図と大胆な編集を褒めた。
- **LoganDark**: 24x2 の HD44780 液晶は初めて見たと述べた。
- **ihm**: イタリックの傾きは書きやすさの問題かと考えたが、右から左に書くイディッシュ語でも同じ向きに傾くので、恣意的かもしれないと述べた。
- **dang**: 活字オタクにお勧めの映画として『クロノヴィゾール』を挙げた。

## 10. [In Hilbert space, all things are quantumly possible](https://www.quantamagazine.org/in-hilbert-space-all-things-are-quantumly-possible-20260826/)

**Score:** 38 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=50175185)

量子状態を、ヒルベルト空間という抽象空間の矢印（ベクトル）として表す枠組みを解説する記事。1927年にフォン・ノイマンが定式化し、ハイゼンベルクの行列力学とシュレーディンガーの波動力学が同じ状態を記述していることを示した。ヒルベルト空間が現実の基本的な特徴か、便利な数学的道具にすぎないかは、今も議論が続いている。

### Key Discussion Points

- **djsjajah**: 「可能なものすべて」ではなく、潜在的に可能なものだけだと指摘した。0〜1の実数に3は含まれない、という例え。
- **rozgo**: フォン・ノイマンの「もはやヒルベルト空間を絶対的には信じていない」という言葉を引いた。
- **ocschwar**: 「ヒルベルト空間とは何か？」というヒルベルト本人の台詞をもじった冗談。

## Trends

- **セキュリティ事故が最上位に。** eMudhra の事例は、失効の仕組みが整ったブラウザと、独自のCAストアを持つ非ブラウザ環境との差を示した。ShinyHunters の件では、サイバー犯罪の周辺業者にまで疑いが及んでいる。
- **音声AIとAI基盤の整備が進む。** Voxtral 3 は音声エージェントの実用化を、TorchTPU は NVIDIA 以外のアクセラレータへの広がりを示す。Voxtral は今回オープンでない点が議論になった。
- **AI時代の仕事観が話題になる。** 教育の目的を問うエッセイが、385件のコメントを集めた。
- **ものづくりへの関心も根強い。** 許認可で苦労する都市ゲーム、CSS の新機能、活字の細部など、ものづくりの工夫や職人仕事への関心が上位に見られた。
