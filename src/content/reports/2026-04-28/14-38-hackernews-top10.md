---
title: "Hacker News トップ10（2026年4月28日）"
date: "2026-04-28T14:38"
category: "summary"
summary: "MS/OpenAI独占契約終了・Talkie（1930年代学習LLM）・LocalSendなど、AI・オープンソース・地政学的ニュースが上位を占める"
tags: ["hacker-news", "AI", "open-source", "geopolitics", "quantum"]
---

## 1. [Microsoft and OpenAI end their exclusive and revenue-sharing deal](https://www.bloomberg.com/news/articles/2026-04-27/microsoft-to-stop-sharing-revenue-with-main-ai-partner-openai)

**Score:** 936 | **Comments:** 800 | [Post](https://news.ycombinator.com/item?id=47921248)

MicrosoftとOpenAIが独占的パートナーシップと収益分配契約を終了した。これによりOpenAIはAzure以外にAWSなど他のクラウドプロバイダーも利用できるようになり、MicrosoftのOpenAIへの持ち株比率も49%から27%に低下している。両社の関係は引き続き維持されるものの、OpenAIの独立性が大幅に高まった形となる。

### Key Discussion Points

- **thanhhaimai**: 最大の恩恵を受けるのはGoogleかもしれない。主要なAIラボのほとんどはTPUを利用しており、OpenAIが唯一の例外だった。4月に発表されたGen 8 TPUを受け、OpenAIもTPU採用を検討する可能性がある。
  - **celeritascelery**: フロンティアAIラボがTPUを使っているなら、なぜNvidiaはこれだけ稼いでいるのか？
  - **bastawhiz**: ラボは複数の計算資源を組み合わせて使用しており、TPUはその一つに過ぎない。
- **_jab**: この契約はOpenAIに非常に有利で、Microsoftがなぜ受け入れたか不明。以前の契約がOpenAIを「弱体化」させており、Anthropicとの競争激化を受けて判断を変えたのかもしれない。
  - **DanielHB**: MicrosoftはOpenAIの大株主なので、数百億ドルの投資を失うわけにはいかない。
- **chasd00**: OpenAIはAzure専用からAWSへの移行も可能になった。「Azureは本当に崖っぷちだ」
  - **elpakal**: AWS CEOのAndy Jassyも直後に確認した。
- **freediddy**: NadellaはOpenAIの要求に継続して応じてきた。持ち株が49%から27%に減少したのは異常ではないか。

## 2. [Talkie: a 13B vintage language model from 1930](https://talkie-lm.com/introducing-talkie)

**Score:** 493 | **Comments:** 196 | [Post](https://news.ycombinator.com/item?id=47927903)

Talkieは1931年以前に出版された英語テキストのみで学習した130億パラメータの「ヴィンテージ」言語モデルだ。現代の汚染なしに、モデルが未来の出来事をどれだけ予測できるか研究するために開発された。Pythonコードを生成したり逆関数を理解するなど、当時存在しなかった概念への汎化能力も示している。

### Key Discussion Points

- **ralfd**: モデルに南北戦争の原因を聞くと「奴隷制ではなく州権の問題」と回答。「最終的に決着がついた」と皮肉を込めた投稿。
  - **enragedcacti**: 別の質問では「奴隷制こそが指導者たちの主要な動機だった」と認める回答も返してくる。
  - **jubilanti**: 「なぜ統計的テキスト補完を真実として受け取るのか？」
- **stbullard**: 1930年代の「コンピューター」（人間の職業としての計算者）の未来について聞くと、「機械コンピューター vs 指でだけ計算するデジタルコンピューター」という回答が返ってきて魅力的。
  - **illegalmemory**: 「インドはイギリス支配から永遠に解放されない」という回答も。
  - **Wowfunhappy**: AIが人間を脅迫するなどのアライメントテストでどう振る舞うか興味深い。デジタルコンピューターを知らないモデルはAI小説のパターンも学習していない。
- **Animats**: 1930年よりもむしろ1900年以前のデータを多く使っているようだ。大恐慌を知らない。最初の1〜2文は正確で、その後「もっともらしいナンセンス」に漂流するパターンがある。
  - **preuceian**: 「1929年当時から『大恐慌』と呼ばれていたのか？」

## 3. [Localsend: An open-source cross-platform alternative to AirDrop](https://github.com/localsend/localsend)

**Score:** 261 | **Comments:** 108 | [Post](https://news.ycombinator.com/item?id=47933208)

LocalSendは、インターネット接続なしにローカルネットワーク経由でファイルやメッセージを安全に共有できる無料のオープンソースアプリだ。Android、iOS、macOS、Windows、Linuxに対応し、HTTPS暗号化されたREST APIを利用して外部サーバー不要で動作する。AirDropのオープンソース代替として高い評価を得ている。

### Key Discussion Points

- **eigenspace**: AirDropはAWDLプロトコルで自動的にローカルネットワークを作成するため、LocalSendより利便性が高い。ハイキング中の友人とのファイル共有にはAirDropが優位。
  - **SingleSourceAI**: AppleはAWDL（Apple Wireless Direct Link）という独自P2Pプロトコルを使用している。EU相互運用性要件がAppleにこの技術の公開を強制するかもしれない。
  - **askldfhalkdfh**: アプリインストールが不要なAirDropは、見知らぬ人との即席共有では依然として優れている。
- **satvikpendem**: Iroh（オープンソース暗号化P2Pリレー、中央サーバーなし）を使うSendmeとAltSendmeを推薦。
- **coldstartops**: KeibiDropというWAN越しにも動作するP2Pファイルシステムを開発中（PQC、gRPC、FUSE使用）。

## 4. [The World's Most Complex Machine](https://worksinprogress.co/issue/the-worlds-most-complex-machine/)

**Score:** 196 | **Comments:** 107 | [Post](https://news.ycombinator.com/item?id=47901064)

ASMLの極端紫外線（EUV）リソグラフィーマシンは1台1.2億ドル以上、10万個以上のコンポーネントを持ち、輸送に40本のコンテナが必要な「世界最複雑な機械」だ。ASMLはPhilipsから独立後、ZeissやCarlイェナなど多数のサプライヤーとの戦略的パートナーシップで日本勢との競争を制し、最先端リソグラフィー技術の唯一の供給者となった。

### Key Discussion Points

- **kens**: ASMLマシンが本当に何らかの指標で「世界最複雑」なのか？スペースシャトルは250万個の可動部品を持つ。比較は実際に行われたのか？
  - **andsoitis**: 「スペースシャトルは何かを製造するわけではないので機械とは分類しにくい」
  - **ChrisMarshallNY**: 米国の核潜水艦の方が複雑かもしれないが、設計が機密のため確認不可。
- **lijok**: 「ASMLはチップ製造のボトルネックではない。Zeissがそうだ。ミラー研磨技術者は養成できないし、誰もなりたがらない」
- **thelastgallon**: 電力グリッドの方が複雑ではないか。国全体に及ぶ数十億台のデバイスを常時60Hzで維持する機械だ。
- **Amorymeltzer**: Chris Millerの「チップ戦争」という本を強く推薦。ソ連がなぜ技術競争で負けたかなどの歴史も詳しい。

## 5. [OpenAI CEO's Identity Verification Company Announced Fake Bruno Mars Partnership](https://www.vice.com/en/article/openai-ceo-identity-verification-company-fake-bruno-mars-partnership-mistaken-identity/)

**Score:** 67 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=47934269)

Sam AltmanのIDベリフィケーション企業「Tools For Humanity」が2026年4月17日にBruno Marsとのパートナーシップを発表したが、Bruno Marsの事務所は「一切接触を受けていない」と否定した。実際の提携相手はJared LetoのバンドThirty Seconds to Marsであり、名前の混同（mistaken identity）が原因だった。アイデンティティの認証を事業とする企業が人物の取り違えをするという皮肉な事態となった。

### Key Discussion Points

- **danans**: 「意図しないハルシネーションが人間の社会的・インセンティブ構造を通じて増幅・伝播した事例だ」。宗教的奇跡の話がどのように広まるかと似ている。
- **Mashimo**: 実際の提携は2027年ヨーロッパツアーのThirty Seconds to Marsだった。「会社の売り物が人物認証なのに皮肉すぎる」
- **_verandaguy**: 「信頼をサービスとして売る会社の行動として出色だ」
- **throwatdem12311**: ChatGPTに尋ねたら「両アーティストの名前を混同した、本当に申し訳ない」と謝罪したとのこと。

## 6. [UAE Leaves OPEC and OPEC+](https://www.reuters.com/markets/commodities/uae-says-it-quits-opec-opec-statement-2026-04-28/)

**Score:** 88 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=47934120)

UAEがOPECおよびOPEC+からの脱退を発表した。UAEはOPEC全体の生産量の12〜13%を担う第3位の産油国であり、その離脱は組織の価格支配力に大きな影響を与えうる。サウジアラビアとロシア主導の連合体からの米国同盟国の離脱は、地政学的な重大シフトとして受け止められている。

### Key Discussion Points

- **netdur**: 地政学的には米国寄りの湾岸国がサウジ・ロシア主導ブロックを離れる動き。経済的にはホルムズ海峡再開後にOPECの供給コントロール力を弱める可能性がある。
- **austin-cheney**: UAEはOPEC産出量の12〜13%を占める第3位の産油国。カタールは2019年に脱退したが当時の生産量はOPECの2%に過ぎなかった。
- **cogman10**: 「これが本当にトランプの勝利か疑問だ。OPECはドルを石油取引の基軸通貨と定めてきたアメリカの重要な盟友。UAEの脱退は人民元での石油売却を示唆しており、むしろ米国にとって損失かもしれない」

## 7. [Microsoft VibeVoice: Open-Source Frontier Voice AI](https://github.com/microsoft/VibeVoice)

**Score:** 116 | **Comments:** 69 | [Post](https://news.ycombinator.com/item?id=47933236)

MicrosoftがオープンソースのフロンティアVoice AIモデル群「VibeVoice」を公開した。VibeVoice-ASR（話者識別付き数時間の録音を文字起こし）、VibeVoice-TTS（90分のマルチスピーカー会話生成）、VibeVoice-Streaming（低遅延リアルタイム合成）の3種類を含み、超低フレームレートの連続音声トークナイザーを採用している。

### Key Discussion Points

- **ks2048**: HF ASRリーダーボードでの評価結果を見たい。公平な比較のためには第三者機関による統一テストが不可欠。
- **maxloh**: トレーニングコードが非公開なのに「オープンソース」と呼ぶのは不適切。「オープンウェイト」と表記すべきだ。
- **steinvakt2**: 音声認識でハルシネーションが多く、推論が重く遅い。多言語対応も不十分。
- **embedding-shape**: 以前Microsoftがセキュリティ・安全性の理由でこのプロジェクトを取り下げたことがあるのか？何が変わったのか？

## 8. [The predictable failure of the QDay Prize](https://algassert.com/post/2601)

**Score:** 29 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=47911675)

QDay Prizeは量子コンピューターでShorのアルゴリズムを使って最大の暗号問題を解いたチームに1ビットコインを授与するコンペだったが、受賞者は乱数生成で正解を出す「Failing with Style」手法を使い、本物の量子計算ではなかった。コンペの根本的な欠陥は、小規模の問題ではShorアルゴリズムが量子コンピューターの品質に関わらず成功するため、真の量子アドバンテージの検証が不可能だった点にある。

### Key Discussion Points

- **mwigdahl**: 量子呼び出しを乱数生成器に置き換えても同じ結果が出るかテストすれば簡単に不正を検出できたはず。「Failing with Style」手法を禁じると明言しておきながら、なぜ実際にテストしなかったのか。

## 9. [Show HN: Live Sun and Moon Dashboard with NASA Footage](https://www.lumara-space.app/)

**Score:** 25 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=47934261)

NASAの映像を活用したリアルタイムの太陽・月ダッシュボードアプリ「Lumara」のShow HN投稿。NASA提供の映像を組み合わせて宇宙の状態をインタラクティブに可視化するウェブアプリだ。

### Key Discussion Points

- **HelloUsername**: App Storeボタンがリーガルページにリダイレクトしてしまっている。
- **cybrox**: 「素晴らしい！スクリーンセーバーがまた流行してほしい」

## 10. [Deep under Antarctic ice, a long-predicted cosmic whisper breaks through](https://phys.org/news/2026-04-deep-antarctic-ice-cosmic-strange.html)

**Score:** 11 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=47915023)

南極の氷の下に設置されたAskaryan Radio Array（ARA）が、1962年に予測されていた「高エネルギー宇宙線が氷に当たった際の電波パルス」を統計的有意性5.1σで13イベント確認した。この成果は検出器が設計通りに機能することを実証し、より深部から到達する超高エネルギー宇宙ニュートリノの探索への道を開くものだ。

### Key Discussion Points

- **4ndrewl**: 「タイトルを読んでつい『今は忙しいクトゥルフ』と思ってしまった」
- **AnimalMuppet**: 高エネルギー粒子が氷に当たるとカスケード反応で電波信号が発生する仕組みを解説。宇宙線とニュートリノの信号を区別する複数検出器の配置も説明。現在7件のニュートリノ候補イベントを観測。

---

## Trends

今日のHacker Newsトップ10から見えるトレンド：

1. **AIエコシステムの再編**: Microsoft・OpenAI独占契約終了（1位・936点）は今週最大のニュースで、AI産業における力関係の大きなシフトを示している。GoogleのTPUが恩恵を受ける可能性やAWSとの新連携が注目されている。

2. **AIの「本質」への問い**: Talkieプロジェクト（2位）は1930年以前のデータだけで学習させたモデルという実験的アプローチで、AIが「暗記」と「推論」のどちらで動いているかを問う。QDay Prize（8位）も同様に、量子コンピューティングの「見せかけ」の進歩を問題視する。

3. **オープンソースハードウェア代替**: LocalSend（3位）とVibeVoice（7位）はいずれも既存の独占的技術（AirDrop、音声AI）のオープンソース代替として注目されている。

4. **アイデンティティと信頼の問題**: Tools For HumanityのBruno Mars誤認（5位）は、AIハルシネーションが人間の組織を通じて増幅される現象を象徴する出来事として議論を呼んだ。

5. **地政学的エネルギーシフト**: UAEのOPEC脱退（6位）はドル基軸の石油経済への影響や米国との関係変化を示唆し、エネルギー市場の構造変化を予感させる。
