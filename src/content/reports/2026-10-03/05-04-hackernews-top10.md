---
title: "Hacker News Top 10 - 2026-10-03"
date: "2026-10-03T05:04"
category: "summary"
summary: "ユタ州のVPN規制法への差止命令、Tomlin元監督のMinecraft都市、Apple Pass Designerなど。"
tags: ["hackernews", "summary"]
---

## 1. [Court agrees with EFF: Utah's VPN law demands a technical impossibility](https://www.eff.org/deeplinks/2026/10/court-agrees-eff-utahs-vpn-law-demands-technical-impossibility)

**Score:** 569 | **Comments:** 251 | [Post](https://news.ycombinator.com/item?id=49927754)

連邦裁判所が、ユタ州の年齢確認法 SB 73 のうち VPN 利用者の検出・遮断を求める部分に仮差止命令を出した。EFF は、プラットフォームに技術的に不可能なことを求める法律であり、全米・世界のユーザーのプライバシーを損なうと主張している。EFF はユタ州商務省にも意見書を提出した。

### Key Discussion Points

- **twiclo**: アダルトサイトも賭博サイトのように全員にアカウント登録を強制すればよいのではないか、と質問。
  - **Panzer04**: ユタ州外の全員に何かを強制することになり、同じ過大な負担の問題が生じると指摘。
  - **chriscrisby**: 技術的には可能だと答えた。
- **SoftTalker**: VPN 経由の接続を確実に見分けることは可能なのか、誰でもホスティング業者経由でプロキシできるはずだと疑問を呈した。
  - **happyPersonR**: 自前の VPN を各地に立てれば規制は無意味になると述べた。
  - **semiquaver**: サーバー側から見えるのは IP アドレスだけだ。個人用 VPN は安価な VPS で誰でも作れるので、現実には既知の商用 VPN の IP をブロックする程度の近似しかできないと述べた。
- **JSR_FDED**: 「LDS 教会は技術的不可能に馴染みがある」と皮肉った。
  - **roughly**: 技術的に不可能なことには、脅されればできるものと、脅されても不可能なものの2種類があり、今回は後者だと述べた。
  - **pseudosavant**: 自らの道徳観を他者に押し付けようとする動きだと批判した。

## 2. [Mike Tomlin spent 12 years building a Minecraft city](https://www.nytimes.com/athletic/7648198/2026/10/01/mike-tomlin-minecraft-nfl-coach/)

**Score:** 381 | **Comments:** 97 | [Post](https://news.ycombinator.com/item?id=49925184)

NYT The Athletic の記事で、元 Steelers ヘッドコーチの Mike Tomlin が12年にわたり Minecraft で都市を作り続けていたという話。記事本体はペイウォールと Wayback のスナップショット不在のため取得できず、コメントから推測して要約している。

### Key Discussion Points

- **alargemoose**: 動画を見るべきだ。Minecraft にもフットボールにも興味がなくても、本人の純粋な喜びが伝わると述べた。
  - **rented_mule**: コーチ業界に長く関わってきた経験から、コーチにこんな時間があるとは驚きだと述べた。
  - **kilroy123**: 滅多に驚かない自分でも、意外で嬉しい話だと述べた。
- **CSMastermind**: 負け越しなしのまま退任した名将が、これほどの時間を趣味に使っていたのは異例だと述べた。
  - **fittom**: 本人は、現実の重圧から離れるための「セラピー」だったと語っている。
  - **overfeed**: 趣味と余暇があっても成功できる、という例だと述べた。
- **jeffgreco**: 開始前の2007〜2013年はプレーオフ 5勝3敗、開始後の2014〜2025年は 3勝9敗という皮肉な分析を紹介した。
  - **mattcantstop**: 当時はちょうど Roethlisberger の時代から、フランチャイズ QB 不在の時代に移ったからだと反論した。
  - **vitaflo**: 3勝9敗でも9回のプレーオフ出場は、ほとんどのコーチが届かない実績だと述べた。
- **xpct**: 全てがゴールのためにあるわけではない、という良い教訓だと述べた。
  - **ddj231**: プロダクトは、そこに至る労力の物語を伝えるものでもあると述べた。
  - **mahboi**: Berkeley の学生は2020年にキャンパス全体を手作業で再現し、自動生成した Stanford 版より出来が良かったと述べた。

## 3. [Apple Pass Designer](https://developer.apple.com/pass-designer/)

**Score:** 369 | **Comments:** 232 | [Post](https://news.ycombinator.com/item?id=49937276)

Apple が Wallet 用パスを作成・プレビューするツール Pass Designer を公開した。テンプレートから色、レイアウト、フィールドを編集でき、iPhone と Apple Watch の実機と同じレンダリングでプレビューできる。入力内容の検証や、イベントチケット・搭乗券向けのセマンティックタグ編集（Siri 提案、カレンダー、マップ連携用）にも対応する。

### Key Discussion Points

- **pastel8739**: 何がそんなに面白いのか分からないと疑問を呈した。
  - **giarc**: バーコードを出すだけのアプリを Wallet に置き換えられるのが嬉しいと述べた。
  - **willmeyers**: 偽チケットを Photoshop で作る例があり、本物の Wallet パスなら抑止になるかもしれないと述べた。
- **danpalmer**: LLM 登場前は優先度が上がらず、LLM なら簡単に作れる類のソフトウェアだ。明確なスキーマがあり凝った UX も不要で、面白みはないが批判ではないと述べた。
  - **hk1337**: 過去に Sinatra 製の版があったと述べた。
  - **latexr**: 巨大企業なのにソフトウェア品質が低下していると批判した。
  - **12345hn6789**: 既存の Web ツールを紹介した。
- **pradn**: PKPass 形式のパスを作れる無料の Web ウィザードが既にあると紹介した。
  - **moontear**: Locations フィールドを使うと、その場所で自動的にパスが表示されると述べた。
  - **giarc**: 自作したパスが Wallet 内で1つにまとまってしまうと質問した。
- **mortenjorck**: バーコード領域だけを高輝度表示できる仕組みを望むと述べた。
  - **ray__**: 明るさは自分で上げられるので不要だと述べた。
  - **ACCount39**: コピーされにくい TOTP コードへの対応を希望した。
  - **saxenaabhi**: NFC リーダーが Wallet パスを読めない点も不満だと述べた。
- **msephton**: Apple 在籍時にこれを作るよう働きかけた。遅くなったが実現して良かったと述べた。

## 4. [A 12-year sequence of telescope images of a star and four planets orbiting](https://bsky.app/profile/theplanetaryguy.com/post/3mwucf5ert22f)

**Score:** 230 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=49932147)

Bluesky 投稿で、ある恒星とその周りを回る4つの惑星を12年にわたって撮影した望遠鏡画像のアニメーションが共有された。投稿本体は取得できず、コメントから推測して要約している。コメントによると、これは直接撮像による系外惑星の軌道運動を示すものだ。

### Key Discussion Points

- **wthomp**: 同じ4惑星を扱った自作の動画を紹介した。
  - **cloudbonsai**: 恒星の周りの赤いちらつきは何かと質問した。
  - **Reason077**: 動画が2022年頃までなのはなぜかと質問した。
  - **jakzurr**: 外側の軌道は周期が非常に長いと感心した。
- **hatthew**: 実際の動画ではなく、10枚程度の静止画の間に数百の補間フレームを加えたものだと注意を促した。
  - **kreelman**: データが限られている点は明示すべきだと同意した。
- **tocs3**: こうした映像がもっと増えてほしいと述べた。
  - **turtletontine**: 天の川中心の星の運動観測が、巨大ブラックホールの存在を証明したと述べた。
  - **swiftcoder**: 科学の面白さを一般に伝えるのに有効だと述べた。
  - **dylan604**: 望遠鏡が増えればデータも増えると述べた。
- **ortusdux**: Roman 望遠鏡のコロナグラフに期待していると述べた。
  - **izend**: Starship でさらに大型の望遠鏡が可能になることを期待した。

## 5. [Loss of cell identity drives human aging: Two new papers](https://erictopol.substack.com/p/loss-of-cell-identity-drives-human)

**Score:** 204 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=49926411)

Eric Topol の Substack 記事で、細胞のアイデンティティ（エピジェネティックな状態）の喪失が老化を促すとする2本の新しい論文（Nature と Cell）を紹介している。Wayback のスナップショットは本文を取得できなかったため、コメントと論文リンクから推測して要約している。

### Key Discussion Points

- **flopsamjetsam**: 2本の論文へのリンクを共有した（Nature と Cell）。
- **dyauspitr**: 慢性ストレスが主因の一つなのかと述べ、標的メチル化・脱メチル化は可能かと質問した。
  - **Chance-Device**: 現状は不可能で、オフになっている遺伝子を戻す危険もあると述べた。
  - **SlightlyLeftPad**: 希望はストレスを下げる、と冗談めかして返した。
  - **bglazer**: CRISPRon/off（DNA を切らない CRISPR にメチル化・脱メチル化酵素を付けたもの）で可能だと答えた。
- **egglinton**: これらは蓄積損傷仮説の焼き直しで、Hayflick 限界や種ごとの寿命差を説明できないと批判した。
  - **NL807**: 老化は種のために必要という見方に反論した。
  - **LarsDu88**: 群選択を前提とした誤りがあると批判した。
  - **andrewflnr**: 無限に長生きする生物（樹木など）も繁殖し続けられると述べた。
- **formvoltron**: 新たな寿命の上限の話はほとんどないが、研究自体は重要そうだと述べた。
- **Chance-Device**: エピジェネティックな老化は、ランダムな損傷に対応して遺伝子を順次止める適応的な仕組みではないかと推測した。
  - **api**: テロメラーゼを無差別に活性化するとがんになる例が間接的な証拠だと述べた。
  - **shevy-java**: そのような遺伝子の具体例を挙げるよう求めた。

## 6. [With most information hidden, the game Stratego had stumped AI until now](https://arstechnica.com/science/2026/10/ai-finally-beat-the-best-stratego-player-in-history-and-did-it-on-a-budget/)

**Score:** 197 | **Comments:** 95 | [Post](https://news.ycombinator.com/item?id=49933740)

Ars Technica の記事によると、CMU・MIT・NYU・Stanford の研究チームが作った AI「Ataraxos」が、史上最強とされる Stratego プレイヤー Pim Niemeijer に 15勝1敗4引き分けで勝った。16 GPU と数千ドル程度の学習コストで、DeepMind の DeepNash より約34分の1の対局数で上回ったという（コメントの引用による。本文は取得できなかった）。

### Key Discussion Points

- **SwellJoe**: 子供の頃 Stratego が得意で、AI に難しいとは思わなかったと述べた。
  - **m463**: 深いゲームは相手が見つからなくなると述べた。
  - **FiatLuxDave**: 駒の強弱が凸凹で符号化された電子版 Stratego を回想した。
  - **NDlurker**: 駒を裏返すなど独自ルールで遊んだと述べた。
- **janalsncm**: 学習効率が高い点が重要で、隠れ情報ゲームでは最善手が持っていない情報に依存すると指摘した。
  - **williamtell**: 配置が完全にランダムなら簡単だが、駒の強さがあるので単純ではないと述べた。
  - **roenxi**: 完全情報ゲームでも、最善手を AI は知らずに推測していると反論した。
- **dmurray**: 自分が最初に Stratego の勝てる bot を作るつもりだったと述べた。
  - **bananaflag**: リーマン予想は人間には不可能に近いと述べた。
  - **Davidzheng**: 新しいツールがあるので今こそ取り組む好機だと述べた。
  - **NooneAtAll3**: StarCraft 1 や Advance Wars の RL bot も人間上位レベルだと紹介した。
- **erwincoumans**: 友人の駒に印が付いていた思い出を語った。
  - **angry_octet**: 情報の側路を作って相手に信じ込ませ、嘘をつくという騙しの領域につながると述べた。
- **rovr138**: 記事の「予算」の対比が話の核心だと引用した。
  - **criemen**: 対比は才能ではなく予算にあると補足した。

## 7. [The Forgetful CPU (Linux on M4)](https://yuka.dev/blog-2026-10-02-linux-m4.html)

**Score:** 160 | **Comments:** 71 | [Post](https://news.ycombinator.com/item?id=49933869)

M4 搭載 Mac mini で Linux を初めて起動するまでを詳述した技術ブログ。M4 世代は SPTM（Secure Page Table Monitor）が必須になり、従来の m1n1 ハイパーバイザによる MMIO トレースが難しくなった。著者は GXF や RVBAR（リセットベクタ）がロックされている問題などに取り組み、Asahi Linux チームの成果に感謝を述べている。

### Key Discussion Points

- **ankurdhama**: Apple の Magic Trackpad に匹敵する外付けトラックパッドがないのはなぜか、と話題を変えた。
- **sscaryterry**: Apple がオープンなハードウェアを受け入れたらもっと大きくなれると述べた。
  - **MBCook**: Apple は垂直統合の会社で、ハードとソフトを一体で売りたいのだと述べた。
  - **mvkel**: すでに最大級の企業であり、1%の市場を取っても大差ないと述べた。
  - **Select13**: 全ての Linux デスクトップ希望者が最上位 Mac を買っても Apple の収益には影響しないと述べた。
- **PunchyHamster**: オープンなものに敵対的な企業の機械を選ぶのは不思議だと述べた。
  - **inventor7777**: Apple が意図的に妨げているのか、無視しているだけなのか質問した。
  - **novafunc**: Lenovo のトラックパッドの不具合が直らなかった経験から Mac に移ったと述べた。
  - **procone**: ここは Hacker News だと返した。
- **polishdude20**: AI でこの作業を進められないかと述べた。
  - **wmf**: M4 と M6 のリバースエンジニアリングは AI 支援だと述べた。
  - **yjftsjthsd-h**: Phoronix の記事を紹介した。
  - **MBCook**: 地道なハッキングの記事に「AI に任せろ」は違うと反論した。

## 8. [Newgrounds.com – A community of games, music, and art](https://www.newgrounds.com/)

**Score:** 103 | **Comments:** 28 | [Post](https://news.ycombinator.com/item?id=49940394)

ゲーム・音楽・アートのコミュニティサイト Newgrounds のトップページが投稿された。サイト本体は取得できなかったため、コメントから推測して要約している。長年のユーザーが、昔の Flash 作品が今も残っていることを懐かしんでいる。

### Key Discussion Points

- **iamwil**: 大学時代に遊んだ Web ゲームに、のちに同僚になる友人が出演していたと思い出を語った。
- **Arkeus**: Ruffle のおかげで15年前に投稿した Flash ゲームが今も遊べて驚いたと述べた。
- **JuniperMesos**: Pico's School が今も公開されていると述べた。
- **adamiscool8**: 中学生の頃に投稿した作品が残っていて感慨深いと述べた。
- **binsquare**: Newgrounds は今も魂を保っていると述べた。

## 9. [Extra Big Ass Intelligence](https://www.extrabigassintelligence.com/)

**Score:** 24 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=49941114)

「連邦政府が義務付けるスーパーインテリジェンス（SI）」を名乗るパロディサイト。取得できたのはタイトルのみで、内容はコメントから推測した。映画『Idiocracy』のネタが話題になっている。

### Key Discussion Points

- **Jordan-117**: Camacho 大統領は少なくとも国の幸福を考え専門家に助言を求めた、と映画になぞらえた。
- **walrus01**: 「OW! My balls!」のネタを挙げ、AI 生成の24時間ストリーミングを冗談で提案した。
- **electroglyph**: 映画の台詞「Welcome to Costco, I love you.」を引用した。

## 10. [Cloudflare OHTTP gateway](https://blog.cloudflare.com/announcing-cloudflare-ohttp-gateway/)

**Score:** 20 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=49941091)

Cloudflare が、セルフサーブ型の OHTTP Gateway をクローズドベータで開始した。従来の「Privacy Gateway」は「Cloudflare OHTTP Relay」に改称された。ゲートウェイは Cloudflare のエッジ全体で動作してレイテンシを抑え、サードパーティのリレー（Apple の LiveCallerID など）からのリクエストも受けられる。

### Key Discussion Points

- **dzink**: プライバシー保護が必要な人ほど設定する余裕がなく、エージェントや悪意ある攻撃者のほうが使いこなすのは皮肉だと述べた。
- **42droids**: 次は「Cloudflare 製の WWW」だと冗談を飛ばした。

## Trends

- **規制・プライバシー**: 1位の VPN 規制の差止めと10位の OHTTP は、ネットワークのプライバシーを巡る話題だった。技術的な実現可能性が議論の中心になっている。
- **Apple のエコシステム**: 3位の Pass Designer と7位の M4 での Linux 起動は、Apple のクローズドさとその周辺ツールを巡る議論になった。
- **AI と科学**: 隠れ情報ゲームでの AI（6位）、老化研究（5位）、系外惑星の映像（4位）が並び、AI や LLM は他の話題のコメントにも頻繁に登場した。
- **ノスタルジー**: Minecraft 都市（2位）や Newgrounds（8位）では、趣味や創作そのものの価値が語られた。
