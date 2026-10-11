---
title: "Hacker News トップ10（2026年10月11日）"
date: "2026-10-11T05:35"
category: "summary"
summary: "GTA の原型となった2D車両物理、ランプ型プロジェクタPC、SF住宅シミュレータ、12ft.io後継のWallHopなど"
tags: ["hackernews", "summary"]
---

## 1. [2D Vehicles](https://patkerr.co.uk/2d-vehicles/)

**Score:** 404 | **Comments:** 91 | [Post](https://news.ycombinator.com/item?id=49991852)

Pat Kerr が1996年に Atari ST で書いた2D車両物理のプロトタイプ（のちの GTA の車両システムの基礎になったという）を、30周年を機に JavaScript で再現した「Motion Lab」の解説。汎用の2D剛体シミュレーションの上に、横方向の動きに抵抗するタイヤモデルを載せるシンプルな構成で、物理的な正確さより操作の楽しさを優先している。

### Key Discussion Points

- **zeroq**: 2Dの運転モデルなら Marco Monster (2003) や『Physics for Game Developers』のカーレース章も外せないと紹介。
  - **Hydraulix989**: Brian Beckman の「The Physics of Racing」シリーズ（Forza の研究者）も挙げ、自身も学生時代に OpenGL で車の物理シミュを作ったと回想。
- **matsemann**: 図が分かりにくく、なぜそう動くのか・どうやって手触りを出したのかの説明が欲しいと批判。
  - **derefr**: 図はコードを読んだ後にしか意味が通らない事後的な要約になっていると指摘。
  - **PatKerr（著者）**: 中核は教科書的な2D剛体で、タイヤは前後には転がりやすく横には抵抗する力を与えているだけだと補足。
- **wongarsu**: GTA I/II の車の挙動は、後の3D作品にはない楽しさがあった。
  - **Razengan**: GTA 2 のラジオが最高だったと懐古。
- **slowin**: 今でも触って気持ちいい。孤立した概念を試せる「おもちゃ」のプロトタイプの価値を示す好例。
- **joshu**: 自作の駐車ソルバ（truckslop）を紹介。
  - **JK-Swizzle**: 楽しいが、フラクタルソルバの赤/緑の表示が逆では、と報告。

## 2. [The Lightbulb Computer](https://lightbulbcomputer.com/)

**Score:** 327 | **Comments:** 48 | [Post](https://news.ycombinator.com/item?id=50029487)

電球ソケットに取り付けられる、プロジェクタ＋コンピュータビジョンの「電球型コンピュータ」というデザイン構想。音声・ジェスチャー・指差しに反応し、レシピや地図、スマートホーム操作を身の回りの面に投影する。ヘッドセットやスマホより社会的で画面に縛られない代替案として提案されている。

### Key Discussion Points

- **heliographe（作者）**: デモは Mac の自作投影マッピングソフト、4Kレーザープロジェクタ、Webカメラで動かしており、主眼は技術仕様ではなく体験設計の研究プロトタイプだと説明。
  - **sigbottle**: ビームフォーミングや複数台の設置は可能か、と質問。
  - **guessmyname**: 作者と HN Tokyo で面識があるとコメント。
- **schiffern**: 「here」と言った時刻で映像バッファから該当フレームを解析すれば、指差し後の待ち時間をなくせると提案。
- **dominicdoty**: Amazon にも同様の特許構想があり、LLM の登場で現実味が増したと指摘。
- **nine_k**: 家中に常駐する「ジン」のような監視感があり、寝室や浴室では嫌だと懸念。
- **ironhaven**: 電球型プロジェクタの仕組みを質問。
  - **pimlottc**: 電球型は存在しない設計コンセプトで、デモは通常のプロジェクタで撮影されたと回答。

## 3. [A city-building game in which the city would prefer you didn't](https://housing.over.pizza/)

**Score:** 254 | **Comments:** 89 | [Post](https://news.ycombinator.com/item?id=50036864)

サンフランシスコを舞台にした住宅建設シミュレータ「Discretionary Review」。ルールブックや市庁舎ログ、高さ制限・議員区・住民連合などのマップレイヤーがあり、許可手続きや反対運動をくぐって住宅を建てる。ページの取得時はニュース欄が空で、詳細は主にコメントから推測している。

### Key Discussion Points

- **peri-cl**: 書類処理が遅れると組立機が止まる Factorio の冗談 mod を連想。
- **AlbinoDrought**: 4,147戸を建てたが、市の必要数は82,069戸だったという結果を共有。
  - **JimboOmega**: 許可は取れても40戸規模の着工までが難しいと、ビルドオーダーを質問。
- **JumpCrisscross**: SF は北京の戸籍（hukou）制度のような住宅・移民の統制を好むのでは、という見立て。
  - **bobthepanda**: 北京は所得に対する住宅価格比がむしろずっと悪いと反論。
  - **thesmtsolver2**: 国内外には開放しつつ自都市は閉じる姿勢だと批判。
- **mrhyyyyde**: 作者への賞賛。
- **minimaxa**: 似たミームゲーム「Data centre slumlord」を紹介。

## 4. [WallHop – 12ft.io is gone, so I built a replacement](https://wallhop.io/)

**Score:** 197 | **Comments:** 85 | [Post](https://news.ycombinator.com/item?id=50038634)

リンクを貼るだけでペイウォール記事を読めるフリーツール。登録不要で、iPhone ショートカットやブックマークレット、`/raw`・`/api` も提供する。GPL-3.0 の everywall/ladder をベースにしており、たまに読む記事向けで購読の代替ではないと断っている。

### Key Discussion Points

- **armchairhacker**: GPL-3 の ladder を改変しているのだから、法的義務は別として公開が道義的に期待されると指摘。
  - **hebetude**: 同種の 13ft はすでにオープンソースだと紹介。
  - **TheWaffleHax（作者）**: リポジトリ整理後にフォークを公開する予定と回答。
- **pelagicAustral**: この種のツールはオープンソースにすべきでない（削除されるため）との立場。
  - **abrookewood**: なぜかと反問。
- **chanux**: 読みたい記事だけに払うチップ型サービスの可能性を語る。
  - **InsideOutSanta**: 月20ドルで主要媒体100記事を読める横断サブスクが欲しいと提案。
- **golanggeek**: The Hindu の記事では動作しなかったと報告。
- **Cider9986**: archive.today と違い reCAPTCHA がなく、WSJ・FT・NYT でも動くと評価。
  - **varenc**: いつまで続くか疑問。
  - **Barbing**: ウォーターマーク対策に複数アカウントやテキスト化が必要かもしれないと推測。

## 5. [Build your own decision model](https://nishtahir.com/build-your-own-decision-model/)

**Score:** 189 | **Comments:** 38 | [Post](https://news.ycombinator.com/item?id=50037949)

Jev のような「決定モデル」を自作する解説。語彙を選択肢の文字にマスクして1回のフォワードパスで多肢選択に答えさせる。Qwen3-1.7B で CommonsenseQA の保留データに約59%、軽い微調整で約62%を達成し、過信しがちな出力を温度パラメータで較正している。

### Key Discussion Points

- **sachaa**: Qwen のようなモデルはローカルでは重いとして、Laya をブラウザ向けに移植し200ms未満で応答させたと紹介。
- **sn0n**: Jev から着想を得てジェパディ風の問題生成アプリを作った体験談。
  - **nico**: リポジトリがあれば自分のデモに追加したいと返信。
- **fuddle**: 「Build a Decision Model (From Scratch)」という本を期待。
- **nico**: CPU で学習・実行できる軽量な Jeffy を紹介。
  - **mrkn1**: さらに小さい約500MBの gutsy を紹介。
- **ford**: Jev の系統が多くのクローンの元だが、10億ドル超の評価に見合う優位性があるかは未知数と疑問視。

## 6. [Nix wrote half of my debugger](https://fzakaria.com/2026/10/07/nix-wrote-half-of-my-debugger)

**Score:** 165 | **Comments:** 34 | [Post](https://news.ycombinator.com/item?id=50017247)

Nix ビルド向けの決定論的 VM「Rewind」を作ったところ、固定された入力・ソース・デバッグシンボル・共有手段という、デバッガに必要なものの多くを Nix が既に提供していたという話。実行は derivation の純関数なので正確に再現でき、ビルド ID でソースを取得し、キャッシュで出力を検証できる。競合状態を調べる機能も備える。

### Key Discussion Points

- **pmarreck**: AI の登場で、これまで Nix を使いこなせなかった層が一気に採用すると予想。
  - **POiNTx**: Claude で Nix 設定を書くのは快適で、品質はあまり気にしていないと体験を共有。
  - **0x457**: 以前は数千行のパッケージ作業だったが、今はエージェントに移植を任せられると回答。
- **tecoholic**: 完全に決定論的な Nix と LLM の組み合わせは落差が大きいと感想。
  - **bentcorner**: エージェントに Nix 設定を書かせ、git でレビューしている。
  - **nemo1618**: LLM も決定論的にできると反論。
- **saagarjha**: rr の再実装に見えるが、Nix との関係は何かと疑問。
- **__MatrixMan__**: ビルド以外も Nix に寄せるのはキャッシュ無効化を自前で書きたくないから。
- **Cyph0n**: Antithesis の縮小版のようだと評価し、乱数の扱いを質問。
  - **setheron**: カーネルの乱数は起動時のシードで決まると回答。
  - **iwixon**: 並行処理のバグ探索にも使えそうだと指摘。

## 7. [PSPi 6 – Raspberry Pi in a PSP](https://github.com/othermod/PSPi-Version-6)

**Score:** 52 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50038623)

PSP 1000 のメインボードを専用基板に置き換え、Raspberry Pi（Zero / Zero 2W / CM4）を頭脳にする改造プロジェクト。800x480 の LCD、電源管理、PSP 本来のボタンやスピーカーを活かし、レトロゲームや Linux を携帯機で動かせる。ハードウェア設計は CC ライセンスで公開されている。

### Key Discussion Points

- **spike021**: PSP には自作エミュレータが多いのに、なぜ Pi が必要か疑問。
  - 返信は取得できた範囲では確認できなかった。

## 8. [Retrofitting language models to operate over bytes](https://www.nature.com/articles/s41586-026-11111-4)

**Score:** 35 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50001234)

Nature 掲載の論文。「Byteification」は既存の大規模言語モデルをバイト単位で動作するよう改造する手法で、サブワード方式に近い能力を保ちつつ、科学データにはより適する可能性があるという（og:description に基づく）。

### Key Discussion Points

- **serioussecurity**: Nature は専門外の応用 AI 論文を受け入れすぎていると批判的にコメント。

## 9. [CIA World Facebook Is Dead – Here Is an Attempt at Recreation](https://worldfacts.app)

**Score:** 33 | **Comments:** 36 | [Post](https://news.ycombinator.com/item?id=50039504)

終了した CIA World Factbook の再現を試みるサイト。ページ本文は JS 描画で取得できず、コメントから推測している。タイトルは「Facebook」ではなく「Factbook」の誤記との指摘がある。

### Key Discussion Points

- **nomilk**: Factbook は各国の統計を同じ基準で比較できる現代の地図帳で、なくなって困ったと語る。
- **xnx**: タイトルがページと一致せず、「Facebook」と誤記されていると指摘。
- **mindcrime**: 「Facebook」を PRISM や ECHELON の隠語かと冗談にした。
- **silverFork**: Freedom in the World の指標が 1〜7 の説明なのに値は 1〜100 で、一致しないと指摘。
- **newman314**: 高齢者向けにコントラストを上げてほしいと要望。

## 10. [AI agents in a stand-up call](https://atoll92.github.io/agent-standup/)

**Score:** 10 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50039630)

複数の AI エージェントをスタンドアップ通話のように並べて見せる「Agent Standup」。ページは JS 中心で本文を取得できず、タイトルとコメントから推測している。

### Key Discussion Points

- **holdupagain**: 自分の仕事がこれに置き換わると語りつつ、小さなキャラクターは可愛いと受け入れている。

## Trends

- **AI エージェントと開発環境**: Nix のデバッガ、決定論的な実行、LLM に設定を書かせる話、小型の決定モデル、エージェントのスタンドアップ UI と、AI の周辺ツールが複数並んだ。
- **ものづくりと遊び**: 1996年の車両物理、PSP への Pi 搭載、電球型プロジェクタなど、プロトタイプやレトロ・ハードウェアへの関心が強い。
- **アクセスと制度への視線**: ペイウォール回避ツール、CIA World Factbook の再現、住宅建設の許認可を風刺するゲームなど、情報や都市への「アクセスの壁」を扱う話題が目立った。
