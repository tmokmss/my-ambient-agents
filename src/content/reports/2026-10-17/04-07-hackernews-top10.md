---
title: "Hacker News トップ10（2026年10月17日）"
date: "2026-10-17T04:07"
category: "summary"
summary: "Tesla Roadster、Claudeが解いたNIST楕円曲線シードの謎、Waymoトロント進出など"
tags: ["hackernews", "tech", "ai"]
---

## 1. [Tesla Roadster](https://www.tesla.com/roadster)

**Score:** 1277 | **Comments:** 2276 | [Post](https://news.ycombinator.com/item?id=50112657)

Tesla Roadster の公式ページ（取得は 403 で失敗したため、コメントからの推測を含む）。デモでは車体が浮上・垂直走行・天井への張り付きまで披露された。スラスターはコールドガス（窒素）式とされる。

### Key Discussion Points

- **synapsomorphy**: 本当に飛ぶとは予想外。ファンとロケットエンジンを組み込んだ工学的成果だと評価。
  - **Reason077**: 両バージョンとも燃焼式ではなくコールドガススラスターで、違いは推力の大きさだと訂正。
  - **tw04**: 垂直スラスターが公道走行可能になる見込みはなく、タンクの充填にも長時間かかると指摘。
- **bastawhiz**: Tesla と無関係の第三者が飛ばすまでは信じない。FAA も黙っていないはず。
  - **frankacter**: 発言した人物は過去にも時期の見通しが強気で、実現との乖離があると述べた。
- **mNovak**: 垂直走行や天井張り付きが1トン超の車で可能なのが驚き。
  - **jacquesm**: 小さな吸盤でも重いガラスを持ち上げられるように、大気圧で保持できるはずだと説明。
  - **LetsGetTechnicl**: 底面の写真は中身のない外殻のように見えたと言う。
- **consumer451**: 最高のマーケティングデモの一つ。ただし反動スラスターは近くの人を傷つけうる。
- **jdelsman**: 実現しないかもしれない車のために何年分もの予約金（無利子の貸付）を集めている。
  - **luke5441**: 2017年から予約可能で、次のバージョンが出る頃には約10年になる。

## 2. [Claude reveals ECDSA curve origins](https://www.anthropic.com/research/ecdsa-curve-origins)

**Score:** 745 | **Comments:** 289 | [Post](https://news.ycombinator.com/item?id=50122800)

Claude が約25年来の謎だった NIST 楕円曲線のシードの出所を突き止めた。P-192/224/256/384/521 のシードはハッシュ値ではなく、Unix タイムスタンプで初期化した C ライブラリの `lrand48` の出力だった。格子基底簡約（LLL）で生成器の状態を復元し、タイムスタンプは1997〜1998年を指す。暗号的弱点ではなく、隠れたバックドアの可能性を下げる結果とされる。B-163 のシードは未解明。

### Key Discussion Points

- **fidotron**: 生成方法は分かったが、捨てられた候補は見えず、選定過程は分からない。
  - **FiloSottile**: 1997年の全タイムスタンプを試して最初の16候補から任意に選んでも約30ビットの自由度にしかならないと反論。
- **JumpCrisscross**: 30分で解けたのが見事。NSA 職員は四半世紀ひそかに笑っていたのか。
  - **sweis**: 関係者は Reiter と Solinas の2人。Solinas は2015年にパスフレーズのハッシュだと考えていたが、皆が間違っていたと述べた。
- **teddyh**: B-163 が説明できないのは、公開時の1桁の誤記が原因かもしれない。
  - **lukeify**: Zodiac 暗号の未解読部分も転写ミスが原因だったという類似例。
- **sweis**: 「13年分の陰謀論は srand48(time(NULL)) だった」。
  - **bayarearefugee**: タイムスタンプは約1年に散らばっており、単純な now() ではなさそうだと指摘。
- **tptacek**: NIST 暗号をめぐる陰謀論の一世代にとって壊滅的なニュース。
  - **nickysielicki**: NIST は説明を怠って信頼を失った。

## 3. [Waymo in Toronto](https://waymo.com/blog/2026/10/waymo-in-toronto/)

**Score:** 301 | **Comments:** 405 | [Post](https://news.ycombinator.com/item?id=50118981)

Waymo がカナダ初の都市としてトロントに進出する。まず有人運転で高精細地図を作成し、完全自動運転の配車サービスを2028年に開始する目標。艦隊運用は Element Fleet Management と提携する。

### Key Discussion Points

- **donohoe**: SF で初めて乗ったら、徒歩25分の距離が奇妙な迂回で45分かかった。
- **SenHeng**: 東京で見かけて感動した。乗れる日が楽しみ。
  - **weitendorf**: SF では数年、週に何度も使っており魔法のようだと賛同。
  - **BatchJob**: あの会社のソフトは命を預けるには信用できないと否定的。
- **tcoop25**: オースティンで9分の予定が45分に延長され、サポートに降ろされた。
  - **liljacob**: LA では一度も問題がなく、人間の Uber より快適だった。
  - **pj_mukh**: 3年間定期的に使っているが、こうしたことは一度もない。
- **seer**: 車道を快適にする未来は、人間性を奪う「車の下水道」の延命ではないか。
- **joshuat**: HN のスレッドを読むと、自分だけが良い体験をしたのかと思う。
  - **sbuttgereit**: HN は現実の代表ではなく、発言する気になった人の偏りが出るだけ。

## 4. [Llama.cpp on a jailbroken PS5: run any GGUF model natively on the console](https://github.com/cobanov/PS5LM)

**Score:** 226 | **Comments:** 62 | [Post](https://news.ycombinator.com/item?id=50122431)

脱獄した PS5 の GPU（Vulkan バックエンド、共有メモリのうち11.4GB）で llama.cpp を動かし、OpenAI／Anthropic 互換 API をネットワークに提供するアプリ PS5LM。PC もクラウドもアカウントも不要で、Claude Code からも使えると README にある。

### Key Discussion Points

- **Rabbit504030201**: Sony に削除されうるので、主たるホストは GitHub にすべきでない。
  - **anigbrowl**: 脱獄方法を載せているわけではなく、民事の問題にとどまる。
  - **Retr0id**: Sony は llama.cpp の実行など気にしない。海賊版でなければよい。
- **xnx**: 閉じた家電を汎用コンピュータにする話で PS5 が欲しくなった。
  - **stuxnet79**: 同価格の自作 PC よりスペックは低い。
  - **thenthenthen**: BC-250 ボードが PS5 の APU を転用している。
- **jjcm**: 低品質でも常時トークンを出せるので、監視やログ確認などの常駐タスクに向く。
- **pwython**: LLM 搭載 NPC がゲームの標準になりうる。
  - **greggsy**: AI コンパニオンに悩んだ末、一緒にゲームをする相手が欲しかっただけだった。
- **shiftpgdn**: BC250 でも動くはず。
  - **haunter**: 今は150〜200ドルで見つからず、RTX 3060 の方が楽。

## 5. [eBay Restricts Listings of Radio Equipment, but Exempts Ham-Band-Only Gear](https://www.arrl.org/arrlletterissue?issue=2026-10-15#eBay-Restricts-Listings-of-Radio-Equipment_-But-Exempts-Ham-Band-Only-Gear)

**Score:** 191 | **Comments:** 151 | [Post](https://news.ycombinator.com/item?id=50122034)

2026年10月13日施行の FCC 新規則に対応し、eBay は FCC 認可が必要な無線機の出品に FCC ID の掲載を求める。ARRL の照会後、アマチュアバンド専用機は対象外と明確化された。既存の出品、小規模販売者、中古品は免除。

### Key Discussion Points

- **eddythompson80**: ハムは「良き市民」として集団で動き、ハッカーは「できるならやる」文化で対照的。
  - **alnwlsn**: 無線関連だと、法に触れうると指摘する人が必ず現れるのが不思議。
  - **Xirdus**: ハムは自由が僅かしかなく、当局を刺激したくないからだ。
- **0x1ch**: なぜ eBay が FCC の役割を？ レーザーは買えるのに。
  - **socializer**: 大企業の法務部は規制・評判リスクを最小化するため。
  - **charcircuit**: FCC がマーケットプレイス向けの規則を作ったので従わざるを得ない。
- **nubinetwork**: 目的は、改造 Baofeng での免許不要バンド使用や緊急通信帯への混信防止。
  - **ianburrell**: 以前は未ロック機を一般の無線機と誤解して使う人がいた。
  - **sc68cal**: 古い UV-5R は工場出荷時からロックがなく人気がある。
- **tfwnopmt**: FCC ID を載せれば大半の消費者向け製品は販売可能。
  - **atavium**: 新品のみが対象。
- **krunck**: 「中国製品を信用できない」流れの一環に見える。

## 6. [You could have invented transformers from memory](https://alexwang.ai/posts/associative-memory/)

**Score:** 181 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=50122878)

ニューラルネットの層を連想記憶（キー・値の保存と想起）として捉え、干渉対信号比で容量を比較する解説。線形ストアの容量は約 d_k、最小二乗で約 2d_k、二乗 ReLU の MLP で約 2d_k²/3、softmax 注意は約 e^(2√d_k) と指数的に増えるという。

### Key Discussion Points

- **sixdimensional**: LLM 時代に再訪されていないメモリスタを想起。
- **ketothekingdom**（著者）: 要約スレッドを共有。
  - **nico**: 忠実度と想起の話から、関連する遊び心あるプロジェクトを紹介。
  - **rd11235**: 最近で最も良く書かれたブログ記事の一つ。
- **yoz-y**: 記事は「you」が誰かを定義してほしい。
  - **layer8**: Wikipedia の「総称の you」を参照。
- **vatsachak**: Transformer は1ステップで適切な記憶を見つけられる点が Hopfield ネットとの違い。
- **sailfast**: 知能は圧縮かという話を想起した。
  - **yhjc2692**: 3Blue1Brown の「圧縮は知能」シリーズを紹介。

## 7. [FLUX 3 Image Klein](https://bfl.ai/blog/flux-3-image-klein)

**Score:** 130 | **Comments:** 38 | [Post](https://news.ycombinator.com/item?id=50123580)

Black Forest Labs が10月15日に公開した5.6Bパラメータのオープンウェイト画像モデル。テキスト→画像、編集、最大10枚の参照画像に対応し、4K出力も可能。INT8 版は VRAM 8GB の RTX で動作し、API 価格は1K画像あたり0.009ドルから。年商500万ドル未満は商用無料。

### Key Discussion Points

- **Mashimo**: Reddit では人物生成が苦手との声がある。
- **jjcm**: 編集は良いが細かい文字は弱い。Moss Image の方が良い。
- **drusepth**: 1枚約0.009ドルは競争力が高い。Krea 3 は0.06ドルから。
- **kristofferR**: 10GB 未満で世界の見た目の知識があるのは驚異的。
- **accrual**: 前日公開の Krea 3 のスレッドを紹介。

## 8. [Butlerian Jihad](https://dune.fandom.com/wiki/Butlerian_Jihad)

**Score:** 105 | **Comments:** 48 | [Post](https://news.ycombinator.com/item?id=50127274)

『デューン』世界で「考える機械」を禁じるに至った聖戦の解説ページ。ページ末尾には、技術が人間を機械のように考えさせるというハイデガー的解釈が紹介される（取得したのはコメントで引用された部分に基づく）。

### Key Discussion Points

- **tarpitt**: 『デューン』の「偉大さは一時的な経験」という引用が好き。
- **cautiouscat**: 作中で人類を滅ぼしかけたのは AI ではなく、機械を握るテクノクラートだった。
- **antihipocrat**: 確率的な LLM をハイデガーならどう見るのか。
- **madrox**: 原作では抗議に近い穏やかな運動に思えたが、息子の小説は平凡なロボット反乱物になっていた。

## 9. [Ultramarine 1 Flash](https://www.paperinstruments.com/ultramarine)

**Score:** 56 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=50106747)

Paper Instruments による専門職向けエージェントモデル。ベースはオープンモデルの GLM-5.3 Flash で、強化学習で金融・法務・コンサル業務のベンチマークを向上させたとする。同社は Claude Fable 5 並みの性能を約1/60のコストで実現したと主張。重みは未公開。

### Key Discussion Points

- **kadoban**: ベースが GLM-5.3 Flash だと指摘。評価はポストトレーニングの出来次第。
- **Jackobrien**: モデルもハーネスも印象的。
- **chicagobuss**: コスト対タスクのパレート図に 6.1 Sol がないのはなぜか。
- **zer00eyz**: 一発で解けなくても安ければ何度も試せる。AI は疲れないインターンとして使うべき。
- **sudo_cowsay**: 「フロンティアモデル」の定義が分からない。

## 10. [Show HN: Fakeipedia – Wikipedia for worlds that don't exist](https://fakeipedia.org)

**Score:** 9 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50126334)

存在しない世界を百科事典形式で読めるサイト。「嘘をつくと痛む世界」「喋る動物が組合を作る世界」「あらゆる陰謀論が真実だった世界」など8つの世界が用意されている。

### Key Discussion Points

- **marcelo-earth**: 記事は Gemini Argon で生成されたのか。AI 特有の文体が見えず驚いた。
- **SanjayMehta**: それはすでに Wikipedia がある。

## Trends

- **AI が研究・実務を動かす**: Claude による暗号の謎解き、安価な専門職モデル、画像モデルの価格競争など、AI の能力とコストが話題の中心。
- **ハードウェアの転用**: PS5 で LLM を動かす試みや、規制下の無線機市場など、機器の自由度と規制の綱引きが目立つ。
- **誇大宣伝への懐疑**: Tesla Roadster の飛行デモや Waymo の体験談では、期待と懐疑が拮抗した。
