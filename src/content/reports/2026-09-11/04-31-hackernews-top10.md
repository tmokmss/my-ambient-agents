---
title: "Hacker News トップ10まとめ (2026-09-11)"
date: "2026-09-11T04:31"
category: "summary"
summary: "ShopifyのReact Native撤退やOpenAIの未発表数学疑惑など、HN上位10件をサマライズ"
tags: ["hackernews", "tech-news"]
---

## 1. [Shopify is moving from React Native back to Swift and Kotlin](https://shopify.engineering/back-to-native)

**Score:** 877 | **Comments:** 597 | [Post](https://news.ycombinator.com/item?id=49643982)

ShopifyはShop、Shopify、Point of Sale、InboxなどのアプリでReact Nativeからネイティブ開発(Swift/Kotlin)へ回帰すると発表した。2020年当時は「機能を2重に作るコストを避ける」ためRN採用が合理的だったが、AIコーディングエージェントの進化によりその前提が崩れたと説明している。AIの誤生成("slop")を防ぐためのチェックポイント方式のフレームワーク「Helix」を導入し、Shopアプリはわずか12週間でネイティブアプリとして作り直した。

### Key Discussion Points

- **sashank_1509**: ShopifyのエンジニアがChromeやGTA5と比べて桁違いに多いことを指摘し、皮肉交じりに批判している。
  - **Vegenoid**: Spotifyも同様にエンジニア数が増えるほどアプリの質が下がっており、組織内の政治力学が優れたエンジニアを阻害する現象だと分析。
  - **sidcool**: エンジニアリングとビジネスの違いを理解していないコメントが多いと指摘。
- **atonse**: 自分たちも同様の移行をLLM(Codex)で一晩でほぼ完了させた経験を共有し、React Nativeの必要性に疑問を呈した。
  - **larodi**: React NativeはSwift/Kotlinに比べ障害になっていると同意し、Swiftへの移行は順調だと述べた。
  - **greenowl**: 「AIはSWEの仕事を奪っていないと言う人がいるが」と皮肉。
- **madrox**: 以前の職場で同じ主張をして却下されたが、Shopifyのブログが権威視されているので今後は受け入れられるだろうと述べた。
- **hectdev**: iOSエンジニアとして長年主張してきた立場が「検証された」と感じたが、複数の返信で「記事はRNが当時正しい判断だったと明言している」と反論された。
- **netshade**: LLM以前から同様の移行を実際に主導した経験から、LLMの有無に関わらずこの移行自体に価値があると論じた。
  - **zero_shift**: RNの64bit APK対応など、アップグレードの困難さを実体験として補足。
  - **Rohansi**: 自分は逆にReact Nativeから(Web)Reactへ移行し、問題を解消しつつパフォーマンスも改善したと報告。

## 2. [More questions about whether researchers can trust OpenAI with unpublished math](https://mathstodon.xyz/@andreasthom/117240535270608201)

**Score:** 743 | **Comments:** 686 | [Post](https://news.ycombinator.com/item?id=49639408)

数学者Andreas Thomが、OpenAIが未発表の数学研究をどう扱っているかについて疑問を提起するMastodon投稿。以前、非sofic群に関する発見についてOpenAIの担当者に「ChatGPTとの会話がトレーニングデータや推論過程に使われたか」を問うたところ「そのようなことは起きていない」と明確に否定されたが、Buckmaster-Alpöge氏のケースでOpenAIは「特定のユーザーデータはアクセスしていない」としつつも「非識別化されたデータがモデル改善に使われた可能性は排除できない」と述べており、これは以前の説明と矛盾しているのではないかと指摘している。

### Key Discussion Points

- **nezi**: OpenAIを人間の共同研究者に例えれば、この状況は明らかに非倫理的だと指摘。出所(プロベナンス)の追跡はOpenAI社内でも困難だろうと推測。
  - **michael0church**: これは数学に留まらず、ユーザーデータを本人の不利益になる形で使った可能性のある問題であり、信頼が失われたと述べた。
  - **jjwiseman**: OpenAIの実際の声明を引用し、「ユーザーのプロンプトや証明を使ってモデルに指示していない」としつつ「非識別化データの影響は排除できない」という微妙な表現だと解説。
- **sashank_1509**: OpenAI社員から聞いた噂として、内部モデルは既に数百の未解決問題を解いているとの見方を紹介。
  - **HarHarVeryFunny**: OpenAIのNoam Brownが数日前にミレニアム懸賞問題の試行に失敗したと認めていたのに、噂を聞いた途端に計算資源を投入し直した経緯を指摘。
  - **merksittich**: OpenAI自身のNavier-Stokes論文でも通過率は約0.5程度に留まっており、「何でも解ける」という主張とは矛盾すると反論。
- **bertonvv**: 研究者が未解決問題に取り組む際にOpenAIのモデルへ入力したデータが、そのまま評価用の訓練データとして「盗用」されている可能性を指摘。
  - **boothby**: 21世紀版のメカニカルターク的な構造であり、他の顧客の会話を参照する仕組みは技術的に容易だろうと同意。
- **jeswin**: 企業がすぐに「データを使っていない」と断言できない事情も理解できるとして、過度な非難に懐疑的な立場を示した。
  - **olladecarne**: 論文に著者名が記載されていないことを指摘し、数年かけて取り組んできた数学者を出し抜いた「卑劣な行為」だと強く批判。

## 3. [Don't let anyone take away your big box of cables](https://blog.jim-nielsen.com/2026/hands-off-my-cables/)

**Score:** 379 | **Comments:** 276 | [Post](https://news.ycombinator.com/item?id=49645393)

筆者は10年以上使っていなかったケーブルが突然必要になった経験から、「ガラクタの箱」を捨てずに取っておく価値を説く。Tyler Gawの「誰にもあなたの『ケーブルの大箱』を奪わせるな」という言葉に触発され、それを印刷してケーブル箱に貼り、今日は不要に見えるものが明日には貴重品になり得るという教訓を将来世代にも伝えたいと述べている。

### Key Discussion Points

- **booty**: ケーブルは種類ごとに「グループ化」して保管するのが重要で、そうすることで重複した不要なケーブルに気付きやすくなると提案。
  - **joshstrange**: グループ化に加え「機能別ソート」(充電速度やUSB速度でテスターを使い分類)を勧め、これにより無駄な新規購入も減ったと補足。
  - **OroPla**: CDスピンドルをケーブル収納に転用しているとユーモラスに共有。
- **SmasherEpilepti**: モジュラー電源のSATAケーブルはメーカー間で見た目は同じでもピン配置が違い、誤使用でHDDを壊した経験を共有。
  - **godelski**: 同一メーカー内でも統一されていないことがあると補足し、必ずピン配置を確認すべきと注意喚起。
  - **harshreality**: PSUケーブルテスターの活用を勧めた。
- **RajT88**: 引っ越しを機にケーブルを整理したが、結局はその几帳面な整理のおかげで妻の職場で何度も役立ったと述べた。
- **EvanAnderson**: 祖父の工房から受け継いだ廃材や部品が今も役立っている経験を語り、同じように「何でも直せる」存在でありたいと述べた。
  - **stmw**: これはジャストインタイム生産とオフショア製造が奪ったものだと指摘。
- **1-more**: 切って使ったUSBケーブルの残骸を何年も後に別の用途で再利用した体験を共有。
  - **jimniels**: 将来、息子が充電器なしのMP3プレーヤーを手に入れたときにそのケーブルの切れ端が役立つ日を予言してオチをつけた。

## 4. [Cognition launches new SWE-2 model, Rivaling Fable 5.1 and GPT-Astra](https://cognition.com/blog/swe-2)

**Score:** 371 | **Comments:** 157 | [Post](https://news.ycombinator.com/item?id=49645443)

CognitionはKimi K3をベースにした新コーディングモデル「SWE-2」を発表した。FrontierCode 1.1 Mainで50.0%とFable 5.1(50.9%)に匹敵しつつ64%安価、GPT-6 Astra(53.3%)にも僅差でコストは4分の1と主張。Terminal-Bench 2.1では92.8%を記録し、前バージョンSWE-1.7比でターン数58%減・コスト81%減の効率化を実現したとしている。

### Key Discussion Points

- **postalcoder**: Terminal-Bench 2.1(92.8%)と新しいTerminal Bench 4(27.3%)のスコア差が大きく、ベンチマーク特化(benchmaxxing)の疑いを指摘。
  - **mediaman**: TB2.1は飽和状態でTB4はそうでないだけであり、他の最先端モデルも同様の差があるため根拠のない批判だと反論。
  - **fallingbananna**: 主要モデルのTB4スコアを列挙し、27.3%は他モデルと比べても妥当な範囲だと補足。
- **Ozzie_osman**: 自社(Monarch)でDevinを含む複数のクラウド型コーディングエージェントを比較した結果、Devinが自律性・セキュリティ・マルチリポジトリ対応で最も優れていたと実体験を共有。
- **gruez**: Cognitionは過去にUpworkタスクの自律完了デモが実際には破綻していたことを指摘し、誇大広告への懐疑を示した。
  - **fishtoaster**: 同様に懐疑的だったが実際に使ってみると改善されていたと感想を述べた。
  - **deet**: チームレベルで自律的に動作する点でClaude CodeやCodexとは異なる方向性を追求していると評価。
- **nullbio**: クローズドウェイトモデルへの不満から、DeepSeekなどのオープンウェイトモデルへのユーザー移行を予想。
  - **notfromhere**: 自社モデル開発はAPIコスト削減が主目的であり、成功しているAIサービスは同様の道を辿ると分析。
  - **pizza234**: DeepSeekの巨大なメモリ要件を考えると実運用では依然クラウドの大手モデルに頼らざるを得ないと反論。
- **pkilgore**: Devinを繰り返し試したが一貫して低品質だったと酷評。
  - **AznHisoka**: 実際にDevinを使っている人に会ったことがないと同調。

## 5. [Technique for Manipulating Satellite Photos Now Reveals Ancient Images (2025)](https://spinoff.nasa.gov/Manipulating_Satellite_Photos_Now_Reveals_Ancient_Images)

**Score:** 291 | **Comments:** 46 | [Post](https://news.ycombinator.com/item?id=49645437)

NASAジェット推進研究所が1970年代に衛星画像解析用に開発した「デコリレーションストレッチ」という画像処理技術を、数学者Jon Harmanが2005年頃に発見しDstretchというプラグインとして考古学者向けに一般化した。この技術によりアンコールワットで200点以上の壁画が新たに発見されたほか、エジプトの珍しい動物の描写やカナダの落書きなど、肉眼では見えない古代の絵が次々と明らかになっている。

### Key Discussion Points

- **Waterluvian**: 高校・大学でこの偽色合成技術に触れた経験を語り、植物が赤く見えるなど「目に見える世界が絶対ではない」ことを学んだ原体験だったと振り返った。
  - **dylan604**: 自分の高校時代にはそのような授業自体がなかったとして、時代の進歩に驚きと羨望を示した。
  - **jacobolus**: 白黒写真にカラーフィルターを使う遊びも同様に面白いと共有。
- **matja**: GIMPでLab色空間への分解・コントラスト強調・再合成を使えば同様の効果を再現できると具体的な手順を共有。
  - **MisterTea**: 手順の詳細(特に中央値へのシフト)について質問。
- **dylan604**: 古代の岩絵制作には相当な労力と意図があったはずだと感想を述べた。
  - **tyrabound**: アリゾナの断崖絶壁やヨーロッパの深い洞窟にある岩絵の存在から、制作者の意図的な選択を強調。
- **freetime2**: Dstretchプラグイン自体は2005年頃から存在しており、目新しいニュースではないが依然として面白い成功事例だと評価。
- **qurren**: アンコールワットで複数のバンドパスフィルターを使い隠れた壁画を探したが失敗したという体験を共有。
  - **blincoln**: 自身も同様に成果を得られなかったが、ソフトウェアに技術を組み込んだ経験を紹介。

## 6. [OpenAI Agents API](https://developers.openai.com/api/docs/guides/agents-api/overview)

**Score:** 180 | **Comments:** 111 | [Post](https://news.ycombinator.com/item?id=49649213)

OpenAIがCodexハーネスをAPI経由で利用できる「Agents API」を発表。エージェント・環境(サンドボックス)・セッション・イベントの4概念を中心に構成され、OpenAIホスト型またはセルフホスト型のサンドボックスを選択できる。コード実行、MCP経由の外部ツール連携、サブエージェントへの委任、コンテキスト管理などをOpenAI側で肩代わりし、インシデント対応やSlack bot、データ分析、GitHub issue調査などの用途を想定している。

### Key Discussion Points

- **bluesnowmonkey**: エージェントをプロダクトとして提供する適切な抽象化はまだ模索中であり、OpenAIやAnthropic自身の frontier モデルに縛られている点が競争上の弱点になり得ると分析。
  - **vikramkr**: 自前のハーネス構築自体は難しくないが、サブスクリプションでの補助金がある分OpenAI/Anthropicが有利だと指摘。
  - **bob1029**: 自作ハーネスの開発を断念した経験から、推論モデルの「裏口アクセス」を外部から再現するのは不可能だと述べた。
  - **notatoad**: 問題は抽象化だけでなく、AI企業自体への信頼性の低さにあり、依存を最小限にできるClaude CodeやCodexが好まれると論じた。
- **andrewchambers**: QEMU VM上でCodexを動かしスマホからリモート操作する運用で高い満足度を得ていると共有。
  - **lukebuehler**: 単なる「VM上でCodexを動かす」のAPI化ではなく、ハーネスがVM外で動きVMをスケール的に分離管理できる点が本質だと補足。
- **brap**: 通常のLLM「エンドポイント」とエージェント/ハーネスの境界は今後意味をなさなくなっていくだろうと予測。
- **6thbit**: セルフホスト型サンドボックスを選べる点がベンダーロックイン回避に有効だと指摘。
  - **dakolli**: それなら何のためにOpenAIのAPIを使う必要があるのかと皮肉。
- **monneyboi**: ベンダーロックインを強めるくらいなら、支払った分の推論トークンをそのまま提供してほしいと批判。

## 7. [Google will buy half the electricity from one of Finland's nuclear power plants](https://www.bbc.com/news/articles/c8r6y4me2g6o)

**Score:** 133 | **Comments:** 97 | [Post](https://news.ycombinator.com/item?id=49652105)

Googleはフィンランドの電力会社Fortumと22年間の契約を結び、Loviisa原子力発電所(出力約1000MW)の発電量の最大50%を購入することで合意した。フィンランドは冷涼な気候・低炭素で豊富な電力・比較的空いている送電網から、データセンター立地先として注目されている。

### Key Discussion Points

- **sien**: フィンランドの電力由来のCO2排出量は71gCO2eq/kWhと低く、フランス・スウェーデン・ノルウェーも同様に欧州のデータセンター立地として有望だと補足。
- **wxw**: 記事本文から契約の詳細(22年契約・最大50%購入)とフィンランドが立地先として選ばれる理由を引用して共有。
- **childintime**: 原発事故や核廃棄物のコストを公共に転嫁している構造への懸念を表明し、隣国からの「脅迫」リスクにも言及。
- **joshdavham**: 広告収入が主体のGoogleやTikTokが、原発の電力を必要とするほどの規模のデータセンターを北欧に建設している状況を「異常」だと評した。
- **gblargg**: Loviisa原発の出力が約1000MWであることをWikipediaを引用して補足。

## 8. [Mexican student creates an acoustic fire extinguisher to put out fire in seconds](https://www.upsocl.com/en/16-year-old-mexican-student-creates-an-acoustic-fire-extinguisher-that-uses-sound-waves-to-put-out-fires-in-seconds/)

**Score:** 95 | **Comments:** 37 | [Post](https://news.ycombinator.com/item?id=49652237)

メキシコ・タマウリパス州のCETIS 78に通う16歳の学生Ángela Karime Venegas Hernándezが、音波で炎を消す「Vortex Tech」という装置を開発した。12ボルトのバッテリーと周波数発生器、毎秒30回のパルスを発する speaker で構成され、音の振動が炎への酸素供給を乱すことで数秒で消火する。ろうそく、木材、可燃性液体、調理油、電気機器など複数の火種で100回以上のテストを実施し有効性を確認、汚染物質や残留物を出さず安全性も高いとして国際大会への出場権を得た。

### Key Discussion Points

- **nilslindemann**: 「acoustic fire extinguisher」で検索すると既に世界各地で同様の発明が複数存在していると指摘し、参考動画を共有。
- **MathMonkeyMan**: 油井火災の消火に高性能爆薬を使う手法と同じ原理ではないかと推測。
- **frickinLasers**: 既存の音響消火技術企業(sonicfiretech.com)からアイデアを得たのではと推測。
- **bentt**: もっと信頼できる情報源へのリンクが欲しいとコメント。
- **Animats**: 既知の技術ではあるが製品化には至っておらず、グリルや穀物サイロなど消火対象までの距離が固定される特定用途で潜在性があるかもしれないと分析。

## 9. [YuE2 · Frontier Music with Symbolic Planning](https://map-yue2.github.io/)

**Score:** 66 | **Comments:** 52 | [Post](https://news.ycombinator.com/item?id=49652028)

YuE2はシンボリック(記譜)生成とオーディオ生成を統合した音楽AIモデルで、Suno v5に匹敵する楽曲品質を達成したという。まず編集可能なABC記譜のスコアを作曲し、その後ボーカルと伴奏を生成する2段階方式を採用。SongBenchでSuno v5(6.8721)を上回る6.9632を記録し、35.9億パラメータの自己回帰・非自己回帰混合アーキテクチャを使用している。

### Key Discussion Points

- **hypersoar**: 音楽を含む芸術は人間が何かを表現するために作るからこそ価値があり、AI生成には全く興味が持てないと述べた。
- **stevage**: 作曲を始めた矢先にこうした技術が登場し、人間の創作全体の価値を毀損していくことに強い落胆を表明。
- **vunderba**: YuE2は単なるtext-to-audioではなく既存の楽譜をABC記譜に変換してカバーを試せる点が特徴だとし、自作曲での実験結果を共有。
- **tom_vidal**: 芸術の本質は美しいパターン生成ではなく意味の創造であり、人間の配慮(ケア)なしには「中身のない死体」のようなものしか生まれないと哲学的に批判。
- **Tsarp**: 単一のブラックボックスプロンプトより、ミキシングやマスタリングなど地味な作業を支援しつつ人間の創造的自由を残す「エージェント的音楽生成」に注力すべきだと提案。

## 10. [Finite time blowup with smooth forcing term for the incompressible porous medium, Boussinesq and incompressible Euler equations](https://terrytao.wordpress.com/2026/09/07/finite-time-blowup-with-smooth-forcing-term-for-the-incompressible-porous-medium-boussinesq-and-incompressible-euler-equations/)

**Score:** 14 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=49607944)

Terence Taoのブログ記事。AlpögeとBuckmasterが、Córdoba・Martínez-Zoroaの先行研究を発展させ、非圧縮多孔質媒質方程式・2次元Boussinesq方程式・3次元非圧縮Euler方程式について、滑らかな強制項のもとで有限時間爆発が起こることを示した。Navier-Stokesの正則性問題そのものの解決には至っていないが、Taoは「Navier-Stokes自体への拡張も近い将来実現可能に見えるほどの突破口」と評価している。証明は低周波解に高周波補正を加えていく手法で、線形化方程式の不安定性を利用しており、AIの支援を受けてLeanで形式化もされている。

## Trends

今回のトップ10では、AIエージェント/LLMが複数のテーマで交錯しているのが目立つ。Shopifyのネイティブ回帰やOpenAIのAgents APIのように「LLMコーディングエージェントの実用化」が進む一方、OpenAIの数学研究を巡る信頼性問題やYuE2の音楽生成に対する強い反発など、AIの成果物・データ利用に対する「信頼」と「創作の価値」を問う声も同時に強まっている。またコーディングモデル(SWE-2)の競争やベンチマークの妥当性を巡る議論も継続しており、AI業界全体が急速な技術進展とその社会的信頼性のギャップに直面している様子がうかがえる。
