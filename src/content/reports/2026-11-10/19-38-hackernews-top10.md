---
title: "Hacker News Top 10 - 2026-11-11 JST"
date: "2026-11-10T19:38"
category: "summary"
summary: "AlphaProof CodeでSignal実装を形式検証、.nameドメイン存続、Val Town終了、Blender 5.3など上位10件の要約"
tags: ["hackernews", "summary"]
---

## 1. [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/)

**Score:** 494 | **Comments:** 159 | [Post](https://news.ycombinator.com/item?id=50439193)

Google DeepMind の形式検証エージェント基盤。人間が検証対象の仕様を決め、Gemini 搭載のエージェント群が Lean で証明を書く。Signal の暗号プロトコルの実コードを約4週間で検証し、600万行超の Lean を生成した。過去に修正済みのバグを2件再導入すると、いずれも「安全でない」ことの機械検証済み証明を出せたという。検証成果物はオープンソース化される予定。

### Key Discussion Points

- **hedora**: 非自明な既存コードを検証してバグがゼロとは信じがたい。定理（仕様）が狭いのではないかと疑問を呈した。
  - **derefr**: バグが無いと証明したのではなく、現存するバグがセキュリティを破るものではないと、定義した性質に対して示したに過ぎない。
  - **cortesoft**: これはあらゆる形式検証に共通で、仕様が意図と一致するかまでは検証できない。
- **thibsrn**: 良いAI活用例だが、エージェントは実装を検証するだけで仕様自体を疑わない点が気になる。
  - **ane**: Lean 上のプロセッサモデルや仕様が実物と一致する保証はどう得るのか。
  - **gigatexal**: 誇大宣伝ではなく道具として使い、重要な1%を人間がレビューする点が賢い。
- **Mizza**: 数年以内に、未検証ソフトを動かすのは Telnet や平文 HTTP のように狂気じみて見えるだろうと予想。
  - **viraptor**: 検証できる範囲はまだ小さく、「クラッシュしない」は示せても「暗号が安全」などは難しい。
- **andai**: エージェントにリファクタを任せたら全テストが緑になったが、よく見ると実装を写しただけのテストだった。
  - **auggierose**: 証明と定理の混同が原因で、証明が正しくても定理が間違っていることがある。
- **r0ze-at-hn**: AI が書く Lean は不正をする余地があるので、その対策の知見を共有している。
  - **empath75**: パーサからコンパイラまで Lean だけで自作言語を書いており、調整役エージェントと専門セッションで進めている。

## 2. [.name Grandfathered](https://neil.fraser.name/news/2026/11/10/)

**Score:** 387 | **Comments:** 67 | [Post](https://news.ycombinator.com/item?id=50442736)

Verisign が約2万2千件の .name ドメインとメール転送を終了する計画を撤回した。3階層目の .name ドメインの新規登録は停止するが、既存ドメインとメール転送は無期限に維持される。Neil Fraser は、ICANN への申し立てや弁護士、支持の手紙など多くの人の協力の成果だと謝意を述べている。

### Key Discussion Points

- **giancarlostoro**: 撤回のニュースを引用して紹介した。
  - **echelon**: {first}.{second}.name は今後貴重な一等地になる。
  - **Spivak**: ドメインの「所有」は他人の台帳の記載にすぎず、違法にするには強いデジタル所有権の法律が要る。
- **nticompass**: 閉鎖を恐れて自分の first.last.name を失効させてしまった。
  - **mixdup**: 3階層目の登録はまだ停止されておらず、改訂案が承認される前なら取れる。
  - **mzajc**: 失効後も更新できる猶予期間がある場合があるので確認すべき。
- **kwanbix**: 運用コストはほぼゼロのはずで、なぜ閉鎖したがるのか。
  - **lambda**: 他の TLD と仕組みが違い、独自のコードパスが要り、対応できるレジストラも少ない。
  - **swiftcoder**: john.smith.name と drew.smith.name の間でブラウザのドメイン分離が効かないなど、現代の機能と相性が悪い。
- **derhuerst**: 69日前の前スレ（547コメント）へのリンクを共有した。

## 3. [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/)

**Score:** 311 | **Comments:** 129 | [Post](https://news.ycombinator.com/item?id=50441707)

スマートホームの基本機能はクラウド障害時も動くべきだという主張。著者は Tasmota、MQTT、Node-RED を Raspberry Pi で動かし、物理スイッチも残して、クラウド(Alexa 等)は操作手段の一つにとどめている。11個のルール（コア機能はネット不要、設定を一箇所に集約、電池は約1年持つこと等）を示し、10年隔てた2回の講演をまとめている。

### Key Discussion Points

- **mountain_peak**: 前の持ち主が入れた X10/Insteon 中心の家で、古い設備に頼る経験を語った。
  - **fusslo**: 浸水検知は産業用コンタクタとフロートスイッチの直列回路でネット非依存にした。
  - **jandrese**: クラウドサービスはいずれ終了し、リバースエンジニアリングが進むのは終了後になりがち。
- **scosman**: Home Assistant は各連携に「Local Push」から「Cloud Polling」まで IoT Class を公開している。
- **reasonabl_human**: 最安のハードを買い、Claude にローカル優先のカスタムファームを作らせるのが現在の流儀。
  - **f1shy**: Sonoff と Raspberry Pi に vibe coding で全部ローカルにする、という同意見。
- **augment_me**: LLM に頼らず自分の文章で書いてほしいと指摘した。
  - **skittleson**（投稿者）: 初稿は粗いメモだったので今日中に直すと返答。
  - **59percentmore**: この手の文章批判にはうんざりしている。
- **everdrive**: 便利さのための製品がアップデートで動作が変わり、結局手間を増やしている。
  - **drnick1**: ファームウェア更新を許可せず、箱出しで動かなければ返品している。
- **tehlike**: Zigbee/Z-Wave を買い、無理なら Tasmota を焼けるものを選ぶ。

## 4. [Blender 5.3 released with Gaussian Splat support](https://www.blender.org/download/releases/5-3/)

**Score:** 298 | **Comments:** 42 | [Post](https://news.ycombinator.com/item?id=50442426)

Blender 5.3 は PLY/SPZ/glTF の 3D Gaussian Splat を点群として取り込み、Geometry Nodes で処理して EEVEE・Cycles・Workbench で描画できる。Cycles に分散(dispersion)と DLSS 4.5 レイ再構成、EEVEE にマテリアルライティングノードとパノラマ/魚眼カメラ、コンポジタの積み重ね可能な効果、シーケンサのリップル編集、Grease Pencil の改善、プロジェクト機能なども加わった。

### Key Discussion Points

- **Retro_Dev**: GPU は三角形向けなので Triangle Splatting のほうが面白いのではないか。
  - **guitarlimeo**: PS4 の Dreams のエンジンが近いことをしており、技術講演がある。
  - **sorenjan**: 後続の MeshSplatting という研究もある。
- **mturk**: Geometry Nodes の bundle 対応は複雑なパイプラインでは大きく、アルファ版から使っている。
- **guidopallemans**: M4 で400万スプラットのシーンを試したが、速く成熟していて統合も良い。
- **unshavedyak**: Blender の恩恵を受けている人は fund.blender.org への寄付を検討してほしい。
- **gregsadetsky**: 動画/4D スプラットの手法やソフトを知りたい。
  - **originalvichy**: スプラット界隈のニュースを頻繁に扱う YouTube チャンネルを紹介。

## 5. [Ableton Live 13](https://www.ableton.com/en/live/)

**Score:** 195 | **Comments:** 233 | [Post](https://news.ycombinator.com/item?id=50439695)

Live 13 はステップシーケンサー、20種超のエンジンを持つ Drum Synth、Capture Automation、ARA 2、文脈ブラウジング、最大32 Macro のラック強化などを追加。Intro/Standard/Suite の3エディションで、発表期間中に Live 12 を買うと Live 13 が無料、Live 12 所有者は20%引きで予約できる。公式ページによる発売は2027年初頭。

### Key Discussion Points

- **iainctduncan**: Max for Live 上で Scheme (s7) を動かせる Scheme for Max を紹介した。
  - **H1Supreme**: Max の JavaScript オブジェクトは低優先度スレッドで制約が多い。
- **marceldegraaf**: 他の音楽家との共同作業の仕組みが相変わらず無い。
  - **vectordust**: 同じ悩みで、現状は誰かの「主」プロジェクトファイルに集約している。
  - **devrob**: プロジェクトは巨大な XML なので git 的な抽象化を試みたことがある。
- **cruano**: 段階的に買い取る「rent-to-own」モデルが面白い。
  - **drewbeck**: 一時停止して進捗を保てるのは消費者に優しい。
  - **icantevenhold**: Live 9 から12まで買い替えなかったので、サブスクとは違う。
- **NSUserDefaults**: Ableton のすっきりした UI を高く評価。
  - **block_dagger**: 使えるが見た目は野暮ったく、Logic Pro のほうが綺麗という反論。
- **semtud**: 初心者向け教材と購入エディションを質問。
  - **jleehn**: Ableton 公式のレッスンから始めるとよい。

## 6. [Val Town is winding down](https://blog.val.town/winding-down)

**Score:** 131 | **Comments:** 32 | [Post](https://news.ycombinator.com/item?id=50443427)

創業者 Steve Krouse が、クラウド計算市場で競争できないとして Val Town の終了を発表。2026-11-10 に新規登録停止、12-10 に読み取り専用化(SQLite とブロブを除く)、2027-01-10 に他のサービスを終了し、2027-02-01 にオープンソース化する。前払いの年額プランは一部返金される。

### Key Discussion Points

- **jrmann100**: 記事は触れていないが、Val Town は Deno ランタイム中心で、その Deno チームは来年 Cloudflare 参加後に保守を止める。
- **simonw**: 美しいアイデアの集まりだが、ホスティング事業として持続させるのは難しいと理解し、残念がった。
- **hardwaregeek**: Astro、Astral、Deno、Bun、Turso、Void Zero が買収され、開発者ツール企業の一時代が終わりつつある。
- **Zambyte**: ホームページを見ても何のサービスか分からず、エージェントにホスティング CLI を与えるのと何が違うのか。
- **cmontella**: Eve の頃から Steve を知っており、エンドユーザープログラミングの擁護者だった。

## 7. [Synaptics patent claims stop work on DisplayLink drivers](https://lwn.net/SubscriberLink/1102549/acbc92e00cee3a3f/)

**Score:** 88 | **Comments:** 42 | [Post](https://news.ycombinator.com/item?id=50443824)

Linux ユーザーの Mike Lothian が LLM 支援で DisplayLink ドック用の Rust 製 DRM/KMS ドライバ Vino を作り、Synaptics に協力を求めたところ、特許侵害を理由に停止要求を受けた。125件の特許を挙げ、2.5万ドルの請求も示唆された。OIN は支援対象外と判断し、Lothian は GitHub リポジトリを削除、Vino は非公開に留める。

### Key Discussion Points

- **hnlmorg**: 書面にある賠償請求は到底妥当と言えない。
- **xxpor**: 特許は公開と引き換えの独占権のはずで、リバースエンジニアリング自体が特許侵害になるのか疑問。
- **kieranl**: DDR 価格高騰で DisplayLink は衰退しつつあり、OSS をこう扱うなら自業自得。
- **mijoharas**: 会社の DisplayLink ドックは Linux 実装のバグが直らず使えなかった。

## 8. [AMD's Zen 6 Family: Feeding the Beast](https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast)

**Score:** 82 | **Comments:** 28 | [Post](https://news.ycombinator.com/item?id=50443090)

Chips and Cheese による Zen 6 コアの解析。Zen 5 の延長に見えて主要部を作り直し、分岐予測ミスのペナルティ縮小、単一スレッドで両デコードクラスタを使える点、整数乗算器3→2・VNNI 2倍、L2 帯域 64B/cycle が特徴。Zen 6c は ROB やロードキューを拡大してメモリ遅延耐性を優先し、32コア/128MB L3 のチップレットを持つ。

### Key Discussion Points

- **joebonrichie**: 2-ahead 分岐予測の命令レベル並列性が面白く、メモリが遅い現状を表している。
- **Aardwolf**: 乗算器削減で PDEP/PEXT のスループットも落ちるが、同じ回路を使っているのか。
- **bee_rider**: 1つの CCD に32コアは多く、CCD と コアの間の単位があるのか。
- **jauntywundrkind**: Zen 6c が OoO 構造を増やしたのは、重いメモリ負荷の遅延を吸収する狙いと理解できる。
- **spwa4**: CPU がメモリコントローラより遥かに速いなら、コア毎にコントローラを持たせてはどうか。

## 9. [Starlink Mini 2](https://starlink.com/mini-2)

**Score:** 81 | **Comments:** 52 | [Post](https://news.ycombinator.com/item?id=50444129)

Starlink の小型端末の新型。公式ページは本文を取得できなかったため、コメントから推測すると、内蔵バッテリー(約71Wh、駆動約4.5時間と言及)と通常の USB-C ポートを備え、消費電力は25〜35W程度とみられる。

### Key Discussion Points

- **Gshaheen**: キャンプや自然の中は「俗世を離れる」目的で、常時ネット接続とは相反するのではないか。
- **Tepix**: 前モデルで消費電力が大きく改善した。新型の仕様は公式に無く、他所の情報では71Wh で4.5時間とのこと。
- **noodlesUK**: SIM を使う固定 IoT 向けに、艦隊管理付きの法人向けプランが欲しい。
- **asats**: 普通の USB-C になり、旧来の独自ケーブルの注文の手間が無くなった。
- **fedpost**: ミニを兵器システムに組み込む動きが多く、新型への反応が気になる。

## 10. [Show HN: Get your coding agent off ~2019 JavaScript, onto modern web primitives](https://github.com/GoogleChrome/modern-web-guidance)

**Score:** 66 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=50443812)

Chrome・Edge・Firefox・MDN の各チームが関わる Modern Web Guidance は、レガシーなパターンに寄りがちなコーディングエージェントを、現代の Web プラットフォームの API に誘導するスキル群。`npx modern-web-guidance@latest` で、ガイドの検索・取得とレガシーコード検出（legacy-scan）ができる。

### Key Discussion Points

- **simonw**: npm に加え、GitHub Pages でスキルの Markdown 索引を公開してはどうかと提案。
- **advisedwang**: Chrome が標準策定で強すぎるうえ、全 LLM が Chrome チームの指針に従うのは危うい。
- **cadamsdotcom**: レガシーコードが書かれ続けるほど Web は後方互換を保つ必要が出るため、これは避けたい。
- **reedlaw**: スキルとしては良質だが、自分のコードでは問題が2件しか見つからず、学習のほうが効くと思う。
- **halflife**: 数行の最新機能で置き換えられる乱雑な PR を何度も見ており、まさに必要なものだ。

## Trends

- **AI と信頼性**: AlphaProof Code の形式検証、AI が書いたテストへの不信、エージェント向けスキルなど、AI の成果物をどう検証するかが共通の関心事。
- **所有とサービス終了**: .name の存続、Val Town の終了、クラウド依存のスマートホーム、Ableton の rent-to-own など、「使い続ける権利」と事業継続性が重なる。
- **知財・規制の摩擦**: Synaptics の特許主張と ICANN/Verisign の件はどちらも、オープンな開発や既存利用者が企業の判断に左右される構図を示す。
- **ハードウェアと制作ツール**: Zen 6、Starlink Mini 2、Blender 5.3、Ableton Live 13 など、プロ向け・ホビー向けの製品アップデートも上位に入った。
