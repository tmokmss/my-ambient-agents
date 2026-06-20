---
title: "Hacker News トップ10 サマリー（2026年6月20日）"
date: "2026-06-20T14:26"
category: "summary"
summary: "ATProtoアーキテクチャ解説・CSS製Quake・faviconにWebサイトを格納する技術など注目トピック10選"
tags: ["hackernews", "tech", "weekly"]
---

## 1. [There are no instances in ATProto](https://overreacted.io/there-are-no-instances-in-atproto/)

**Score:** 481 | **Comments:** 256 | [Post](https://news.ycombinator.com/item?id=48599515)

Dan Abramov（React の作者）が ATProto（Bluesky の基盤プロトコル）の設計を解説した記事。Mastodon の「インスタンス」概念と比較し、ATProto ではデータホスティング（PDS）・アグリゲーション（Relay）・アプリ（AppView）が分離されており、RSS と同様の柔軟なデータアクセスが可能だと説明する。Mastodonのインスタンスはデータホスティングとアプリとコミュニティが不可分に結合しているのに対し、ATProto はそれぞれを独立して選択・交換できる設計になっている。

### Key Discussion Points

- **TazeTSchnitzel**: 著者はBlueskyの理想化とMastodonへの批判的な見方を対比させているが、実際にはBluesky PBCが超集中型で支配しており、MastodonとATProtoの差は強調されすぎている。
  - **danabramov**: インスタンスについての誤解（「インスタンスが多いほど分散している」という見方）を解くのが目的であり、ActivityPubへの批判や分断を意図したものではない。
  - **embedding-shape**: この文脈での「インスタンス」は ActivityPub インスタンス（URLの名前空間にもなる）を指すことが多く、記事の焦点はその概念的な違いの説明として妥当。
- **1dom**: ATProtoを有利に見せるためにActivityPubを意図的に不利に描いているのでは、という批判。RelayやPDSの技術的詳細が省かれている。
- **p4bl0**: RSSはGoogle Readerに依存していなかったという反論。ATProtoのAppViewはRelayに強く依存しており、RSSのアナロジーが不正確。
  - **pfraze**: Relayは現在非常に安価で月$20のVMで動作可能になった（sync 1.1以降アーカイブ不要）。
  - **notthemessiah**: Relayの運用コストは月約$30。本当に高コストなのはモデレーション。
- **muglug**: RelayはATProtoを効率的に機能させる接合剤。PDS・AppView・Relayの役割分離は美しいシステム設計。
  - **danabramov**: Relayは見えない最適化であり、Relay を使わず Constellation のような別のインデックスを使うアプリも多い。
- **4lx87**: PDSは書き込みの正規ソースであり、実質クライアント/サーバーアーキテクチャに近い。PDSをインスタンス、Relayをミラーとみなすことにそれほど無理はない。

---

## 2. [Where to Find the Colors Your Screen Can't Show You](https://moultano.wordpress.com/2026/06/19/where-to-find-the-colors-your-screen-cant-show-you/)

**Score:** 262 | **Comments:** 60 | [Post](https://news.ycombinator.com/item?id=48606140)

sRGB カラーガモット外に存在する色（自然界には普通に存在するが、現在のほとんどのスクリーンでは再現不可能）について解説した記事。森の葉を透過する光の緑、海底の青緑、アゲハ蝶の構造色などが例として挙げられ、「信号機の青緑信号」のような身近な例でも画面と実物の差を説明している。Display P3 や Rec. 2020 などより広いガモットへの移行が必要とされている。

### Key Discussion Points

- **adrian_b**: sRGBの最大の欠点はオレンジ/赤/紫の欠如であり、青緑の欠如よりも日常的に重要。CIE 1931 色度図は人間の知覚を均一に表していないため、青緑欠如を過大評価しがち。Display P3 はその点で既に大幅に改善されている。
  - **red75prime**: BT.2020 で利用可能になる青緑も、知覚的均一色空間（図3を参照）では相当な量を占める。
  - **fmajid**: CRI（演色評価数）のRa指標はR9（深紅）を重み付けしないため、多くの照明がコスト削減のために深紅を正確に再現しようとしない。
- **krick**: 良質な記事。ジュラシックパークのT-Rexの視覚についての言及も楽しかった（書籍版では遺伝子工学の文脈で説明されている）。
- **TheAceOfHearts**: アクリル絵画を始めてから、写真に映らない色の豊かさを実感している。ウルトラマリンブルーとプロシアンブルーで特に顕著。
- **Stitch4223**: 1980年代のB&O MX8000テレビの蛍光体スクリーンは現代のHDRパネルよりもシアンが鮮烈だった。蛍光体スクリーンは色域が限られているはずなのに。
  - **strogonoff**: 写真で現実を「正確に」表現することは不可能。カメラのデフォルト処理は安全策に過ぎず、熟練した写真家のRAW現像では限られた表示域でも鑑賞者の知覚に響く色を作り出せる。

---

## 3. [I Stored a Website in a Favicon](https://www.timwehrle.de/blog/i-stored-a-website-in-a-favicon/)

**Score:** 219 | **Comments:** 78 | [Post](https://news.ycombinator.com/item?id=48606619)

HTML コンテンツをファビコン（PNG 画像）のピクセルデータとして符号化して埋め込む技術の解説。HTML を 1 バイトずつ RGB チャンネルに書き込み、JavaScript でキャンバス経由にピクセルを読み取って HTML を復元する。長さヘッダーを画像の先頭に入れることでペイロードの終端を検出する工夫もある。

### Key Discussion Points

- **Tepix**: SVG ファビコンに直接マークアップを埋め込む方法（`<p>hello HN!</p>` をSVG内に格納しfetchで取得）も可能では？と代替案を提示。
  - **montebicyclelo**: 「なぜその方法を使わないのか」ではなく「楽しいバリエーション」として捉えるべき。ピクセルデータに入れるルーブ・ゴールドバーグ的アプローチ自体が面白い。
  - **weetii**（著者）: SVGの方が実用的だが、あえてデータをピクセルデータとして「生きさせたい」と思った。
- **Retr0id**: ブートストラップローダー不要で、HTML/PNG ポリグロットとして単一ファイルで実現できる。WebP を使えばさらに高い圧縮率も可能。
  - **gildas**: ZIP や PDF とも互換性を持たせた HTML/ZIP/PNG ポリグロットも作れる（デモリンクあり）。
- **sheept**: ファビコンキャッシュはフィンガープリンティングのリスクにもなりうる。プライベートブラウズでもキャッシュを再利用するブラウザでは、ユーザーをクロスプロファイルで追跡できる可能性がある。
- **franciscop**: 同じ日にURLとfaviconに株式ポートフォリオを保存するサイトを偶然リリースしたタイミングの一致に驚き。

---

## 4. [CSSQuake](https://cssquake.com/)

**Score:** 165 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=48608223)

CSS と DOM 操作だけで実装された Quake 風の FPS ゲーム（ただし canvas は使用せず CSS 3D トランスフォームを活用）。ゲームロジックは JavaScript で記述されており、描画部分のみ HTML/CSS で実装されているデモプロジェクト。cssdoom.wtf など同様の「CSS でゲームを作る」トレンドの一つ。

### Key Discussion Points

- **cynicalsecurity**: CSS がここまでの代物になったということは、開発の方向性がどこかで間違ったのでは、という批判的な見方。
  - **Rohansi**: ゲームロジックはJSで、レンダリングだけCSSなのは問題ない。CSS 3D変換の活用に過ぎない。
  - **senfiaj**: 確かにJSは必要だが、canvasを避けてCSS経由でDOMを操作しているという点が新しい。
- **AzzieElbab**: vim より脱出するのが難しい（ユーモラスなコメント）。
  - **deskamess**: 本当にどうやって終了するの？何も効かない。
- **remix2000**: これは CSS Quake という名だが、実際にはJSが必要では？
- **jojogeo**: cssdoom.wtf も良かった。こういうユーモラスなプロジェクトは時勢から離れて笑顔にさせてくれる。

---

## 5. [Can you see three trees?](https://www.not-ship.com/can-you-see-three-trees/)

**Score:** 212 | **Comments:** 100 | [Post](https://news.ycombinator.com/item?id=48582374)

「3-30-300ルール」を論じた記事：居住者が窓から 3 本の木を見られること、地域の樹木被覆率が 30%以上であること、公園まで 300m 以内にあること。ヨーロッパの調査では都市住民の 14% しかすべての基準を満たしていない。「それほど多くを求めているわけではない」のに都市はこの最低限の自然へのアクセスを提供できていないと論じている。

### Key Discussion Points

- **lmf4lol**: アムステルダムでは今やほとんどの公園や道端の草を刈らなくなり、美しい緑と多様な昆虫（マルハナバチだけで6種）が戻ってきた。
  - **RetroTechie**: オランダには「テゲルウィッペン（tegelwippen）」という舗装タイルを剥がして緑化する競争文化がある。自治体レベルのコンペもあり、市民が勝手にゲリラ緑化するのも珍しくない。
  - **gpvos**: アムステルダムが 30%基準を満たしていないと言われるが、自分の通りは大木並木なのに不思議。
- **xondono**: 30%樹木被覆というシンプルな指標は害にもなりうる。バルセロナはスズカケノキ（Platanus）で覆われているが、花粉アレルギー持ちには毎年2〜4週間が使えない時期になる。多様性や低木も重要。
  - **idoubtit**: 「窓から3本の木を見ると精神的健康が改善する」研究の方法論への懐疑。同じ建物の同じ階の家族を比較するような厳密な研究でないと交絡因子が多すぎる。
- **luuundonjk**: ロンドン中心部を歩いていて何かがおかしいと感じた。数日後に気づいた――歩道に木がない。
  - **jamiecurle**: ロンドンには実際にはロンドンプラタナス（Platanus × hispanica）など多くの木がある。「City of London」の超小さいエリアのことを言っているのでは。
- **sudosteph**: シアトルの駐車場に面したアパートで自然にアクセスできなかった体験談。北カロライナの都市は緑豊かで歩行者・自転車インフラは弱くとも木の多さは優れている。

---

## 6. [Data Compression Explained (2012)](https://mattmahoney.net/dc/dce.html)

**Score:** 161 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=48562662)

Matt Mahoney によるデータ圧縮の包括的なオンライン教科書（2012年）。情報理論の基礎から始まりロスレス・ロッシー圧縮、辞書式圧縮、算術符号化、予測型圧縮まで網羅した古典的リファレンス。著者は現在引退しているが、圧縮分野の第一人者として知られる。

### Key Discussion Points

- **rurban**: ランキングは Fabrice Bellard 以前のもの。ニューラルネットワーク的なモデリングがテキストのパターン発見を大幅に改善した。また、データ検索との関係も重要——データの符号化方法は検索効率に直結するが、データベースは特化アルゴリズムに比べて1000倍遅く大きい場合も。
  - **TiredOfLife**: Bellard が出てくる関連ページ（mattmahoney.net/dc/text.html）を共有。
- **usernametaken29**: AI（特にLLM）の本質は任意の入力データから普遍的な圧縮を見つけることでは？
  - **adrian_b**: AIを「普遍的圧縮」と見なすよりも、トレーニングデータに特化したロッシー圧縮手法を探索するプロセスと捉える方が実用的。LLM推論（inference）はその圧縮からの情報取り出しに相当する。
  - **hyperpape**: LLMは圧縮に似た何かをしているが、「知性の産物は圧縮ではなく新規性の生成」という観点から、この類推は取りすぎ。ロッシーかつ過学習を避ける必要がある点でも圧縮の比喩は不正確。
- **firesteelrain**: Matt Mahoney は圧縮分野で最高の人物の一人。現在は引退している。
- **brownpoints**: Transformerが最高の圧縮システムだと主張。

---

## 7. [Bootimus – A Self-Contained PXE and HTTP Boot Server](https://bootimus.com)

**Score:** 29 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=48608255)

Go で書かれたオールインワンの PXE・HTTP ブートサーバー。単一バイナリで動作し、外部依存なし。proxyDHCP を内蔵しているためルーター設定が不要で、50以上のLinuxディストリビューション・Windows・その他OSを自動検出する。ホームラボや自動プロビジョニング環境への導入が容易。

### Key Discussion Points

- **betaporter**: プロジェクトの説明文がAI生成っぽく感じる、という観察（プロジェクトの価値を否定するものではない）。
- **theK**: 数週間前に Mistral で同様のツール（Docker Compose 構成の2サービス分割版）を作ったが、こちらへの移行を検討したい。
- **pwndByDeath**: PXEは有り難みを忘れがちだが、設定が本当に面倒。ホームラボでPXE+NFSブートを運用中（ハードドライブなしの構成）。何か壊すたびに「最後に自動化し忘れたハック」が出てくる。

---

## 8. [The Cold War's Accidental Whale Observatory](https://thereader.mitpress.mit.edu/the-cold-wars-accidental-whale-observatory/)

**Score:** 33 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=48564480)

冷戦時代に米海軍が設置したSOSUS（海底音響監視システム）——海底に固定されたハイドロフォンの広域ネットワーク——が、ソ連の潜水艦追跡という本来の目的に加え、偶発的にクジラの鳴き声や移動を大規模に観察できる装置にもなっていたことを論じるMIT Press Readerの記事。軍事技術が科学的発見に転用された歴史的事例。

### Key Discussion Points

- **sm001**: 著者は自分（コメント者）と、1962年のキューバ危機でソ連潜水艦を検出して核戦争を防いだソナー操作員の親友についても書いている。その友人は1970年代にクジラとの海洋音響インタラクション実験も行っていた。
- **dfc**: 同テーマに興味があれば『War of the Whales』（warofthewhales.com）を強くお勧め。冷戦科学・政治・環境の交差を描く良書。
- **xg15**: SOSUSという「世界中の海底に固定された水中マイクが海岸の秘密施設に繋がれている」事実は、陰謀論者向けのネタにも事欠かない。

---

## 9. [From PGP to Mythos: a brief history of export controls that didn't stop anyone](https://techcrunch.com/2026/06/19/encryption-spyware-and-now-mythos-history-shows-why-cyber-export-control-doesnt-work/)

**Score:** 17 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=48609194)

PGP の暗号輸出規制の歴史から現在のAI輸出規制「Mythos」まで、テクノロジーへの輸出規制が結果的に誰も止められなかったという歴史的パターンを論じるTechCrunch記事。Amazon CEO の Andy Jassy が政権に AI モデルのジェイルブレイクを報告したことも取り上げられ、AI規制と産業の関係が議論されている。

### Key Discussion Points

- **zerobees**: PGP は自由に利用可能なハードウェア上で動作するソースコードだったが、Mythos は米国企業が販売するサービスなので輸出規制の実施は技術的に現実的。ただし「危険な核兵器並みの技術」というAnthropicの自己宣伝が今の規制を招いた面もある。
- **ReptileMan**: PGP が止められなかったのは自由に入手できるハードウェアで動いていたから。大規模計算が集中化・プロプライエタリである Mythos は状況が異なる。「輸出規制はknowledgeには効かないが商業製品には効く」という歴史的教訓。
- **rdtsc**: Andy Jassy が自社研究者がAIの安全策を回避できたと政権に報告した件への皮肉なコメント。Anthropic はその「ジェイルブレイク」という表現に異議を唱えている。
- **loloquwowndueo**: TechCrunchのアドブロッカー検出バナーへの批判（リーダーモードで回避可能）。

---

## 10. [Computed goto for efficient dispatch tables (2012)](https://eli.thegreenplace.net/2012/07/12/computed-goto-for-efficient-dispatch-tables)

**Score:** 11 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=48570585)

GCC の拡張機能「computed goto」を使ってバイトコードインタープリタのディスパッチテーブルを効率化する手法の解説（2012年）。変数に格納されたアドレスへの直接ジャンプにより、通常の switch 文と比べて約25%の性能向上が得られる。各オペコードが独自のジャンプ命令を持つためCPU分岐予測が改善されるのが主な理由。

### Key Discussion Points

- **nly**: オペコードが連続または密に配置されている場合に限り有効な手法。
- **froh**: 「(2012)」と年代を指摘（古いコンテンツの再発見として）。

---

## Trends

今日のトップ10から見えるテーマ：

1. **分散型ソーシャルメディアの設計論争**: ATProto（Bluesky）対 ActivityPub（Mastodon）の議論が最多票（481）を獲得。「インスタンス」の概念的差異という抽象的な技術議論がここまで盛り上がることは、Web分散化への関心の高さを示している。
2. **技術の限界への好奇心**: スクリーンが映せない色・ファビコンへのWebサイト格納・CSS製ゲームなど、「現行技術の制約や想定外の使い方」を探求するコンテンツが上位に集まった。
3. **AIと圧縮・輸出規制**: LLMを圧縮システムとして見る視点（データ圧縮記事の議論）と、AI輸出規制の歴史的文脈（PGPからMythosへ）の2つのAI関連トピックが登場。技術的・政策的両面でAIが議題の中心に。
4. **自然・環境へのノスタルジー**: 都市の樹木被覆率（Can you see three trees?）と冷戦の偶発的クジラ観察所が共鳴するように、スクリーンや都市コンクリートの限界を超えた自然世界への注目が目立つ。
5. **古典的な技術資料の再評価**: 2012年の「Computed goto」・「Data Compression Explained」がランクインしており、HNコミュニティが時を経ても価値あるリファレンスを掘り起こし続けるカルチャーが健在。
