---
title: "Hacker News トップ10 (2026-10-16 01:48 JST)"
date: "2026-10-15T16:48"
category: "summary"
summary: "スキューモーフィックな Wayland デスクトップ、AI と数学者の悲嘆、Libreboot 26.10、AdFection スパイウェアなど"
tags: ["hackernews", "summary"]
---

## 1. [Wayland desktop for Linux with skeuomorphic design](https://github.com/fyzugx/DEsk)

**Score:** 216 | **Comments:** 90 | [Post](https://news.ycombinator.com/item?id=50103338)

DEsk は、iOS 6 風のリアルなスキューモーフィズムで作られた Wayland デスクトップ。ウィンドウは胡桃材の机の上の紙、Dock は引き出し、アプリは本棚のバインダー、通知はポストに届く。部屋はレイトレーシングで描画され、1つの卓上ランプが全体を照らす。現在はベータ版。

### Key Discussion Points

- **bmurphy1976**: 20年前の Enlightenment の時代のような遊び心あるデザインがもっと欲しい。味気ないモダンデザインも選択肢としては残しつつ、多様性が必要。
  - **Sohcahtoa82**: 近年のフラットデザインは90年代末〜00年代のユーザビリティ知見を捨てており、見た目が「クリーン」なだけだと批判。
  - **pkulak**: 自分は素朴なタイル型WMユーザーだが、こうした派手さが新規ユーザーを Linux に引き込むと同意。
- **tavavex**: スキューモーフィズム推進派ではないが、実験的な選択肢が存在すること自体を歓迎。
- **uolmir**: 面白いが、『Papers, Please』のようなゲームの中で作業している気分になりそう。
- **seemaze**: Felix Reiseberg、OpenCode 2.0、そしてこれと、ここ24時間で Myst 的な UI が続いており、流行にならないでほしい。

## 2. [I know why Mathematicians weep](https://www.derekthompson.org/p/i-know-why-the-mathematicians-weep)

**Score:** 170 | **Comments:** 233 | [Post](https://news.ycombinator.com/item?id=50103630)

Derek Thompson による技術的悲嘆についての論考。OpenAI が数十年〜数世紀未解決だった数論・理論計算機科学・論理学の成果を数百件公表し、Duminil-Copin や Strogatz ら数学者が涙するほどの衝撃、憤り、喪失感を語っている。

> **関連:** #7「Simons Foundation Launches $15M Effort to Help Mathematicians Navigate AI Era」も参照（同一テーマ: AI による数学の変革と数学者への影響）

### Key Discussion Points

- **RGS1811**: この文章は Brandom の「deontic scorekeeping」（理由のやり取りが概念体系を支える）に通じると指摘。
  - **sean_pedersen**: LLM が自分の RAG 文脈を書き換えるメモリ系ならコミットメントを持てるのでは、と質問。
  - **sigbottle**: 推論主義（inferentialism）に関心があり、表象が理由の空間に先立たないというセラーズの逆転に興味。
- **randcraw**: Thompson は純粋数学を理解していない。数学者が嘆いているのは職ではなく「真理を初めて見る喜び」の喪失だろうと主張。
  - **JumpCrisscross**: AI の意識が実証されるまで、「初めて真理を見る」ことは人間の営みであり続ける。
  - **random3**: K2 冬季初登頂の例を引き、インフルエンサーが挑む様子に例えた。
- **izzydata**: LLM は既存知識の範囲を総当たりで解いているだけで、人間の新知見がなければ限界が来る。数学者は引き続き重要。
  - **FabHK**: なぜそう言い切れるのかと反論。
  - **none_to_remain**: Nestor Guillen の「アイデアの凸包」についてのエッセイを紹介。
- **flowerlad**: ソフトウェア技術者は AI で解雇されているが、大学は数学者を解雇していない。同情しにくい。
  - **SoftTalker**: エンジニアも50年間、事務職の仕事を奪ってきた。
  - **vector_spaces**: 常勤の数学者は技術者より桁違いに少なく、学界の動きは遅いだけだと反論。
- **ceroxylon**: LLM を理解するために今までで一番数学を学んでいる。数学者の一部も同様に関われるはず。
  - **itsalwaysgood**: 現状への最良の姿勢だと賛同。

## 3. [Show HN: Unfenced – Land for sale that borders public land](https://unfenced.land/)

**Score:** 162 | **Comments:** 118 | [Post](https://news.ycombinator.com/item?id=50102247)

公有地（森林・狩猟地・原野）に接する売地を、リスティング文ではなく公式境界地図と照合して検索できるサイト。約69万件の有効物件から13,626件を抽出し、境界の実測長も表示する。週次更新で49地域をカバー。

### Key Discussion Points

- **snide**: 州立公園の隣に住んでいるが、境界のフェンス維持が最大の悩み。ダニなどの問題もある。
  - **weitendorf**: 政府がフェンス費用を払うべきではなく、自分で負担すべきと主張。
  - **bdcravens**: 敷地内側に自前のフェンスを建てればよい。
- **ProjectArcturis**: 家付き/なしで絞り込みたい、エーカー単価でソートしたい。
- **kyleblarson**: ワシントン州で州有地に接する60エーカーを所有。年2週間のライフル鹿猟期以外は問題なかった。
  - **HawtAds**: 60エーカーなら滑走路を作って飛行機で通える。
  - **ramraj07**: 基本的な生活費の目安を質問。
- **windowshopping**: 信頼性が低い。50エーカーとされた物件が実際は土地のないコンドミニアムだった。
  - **clark_dent**: MLS ではコンドの各戸に敷地全体の面積を記載できるのが原因と説明。
- **hasbot**: 自分は敷地内にトレイルを作ってきたので隣接公有地には歩いて行かない。医療・食料品店への近さなど他の条件も重視。

## 4. [Libreboot 26.10 "Ominous Olive" released with UEFI, Chromebook support](https://libreboot.org/news/libreboot2610.html)

**Score:** 155 | **Comments:** 80 | [Post](https://news.ycombinator.com/item?id=50102923)

Libreboot 26.10 は MrChromebox の EDK2 ペイロード経由で完全な UEFI をサポートし、Windows も起動可能になった。changelog は 26.01 からの大型リリースで設計変更も多く、注意深く読むよう促している。Chromebook は MrChromebox の 233 機種がインポートされた（ソースのみ、テストは一部）。

### Key Discussion Points

- **iamnothere**: AI ポリシーばかり注目されているが、UEFI/EDK 統合と Chromebook 対応こそ大きな前進で、対応機種が何倍にもなる。
- **kyrra**: プロジェクトは AI に否定的で、AGENTS.md がある。
  - **ImaCake**: GCC や GRUB にも AI があることを嫌うほどで、AI で書かれた U-Boot フォークは使えないとしている。
  - **ketzu**: 一部の記述が面白い。ethical-foss/open-slopware は告発というよりソフト発見用の一覧に見える。
- **ChocolateGod**: Chromebook を汎用 UEFI ノートにできるのか、Googlebook も同じブート手順を使うのでは、と質問。
- **cwiggs**: Heads プロジェクトで MrChromebox のコードを上流にした ChromeOS ポートに取り組んでいる。
  - **iamnothere**: Heads は Libreboot にない機能を持つが、ブロブの扱い次第で移植は難しくなるかもしれない。
- **AdmiralAsshat**: Pixel に MrChromebox を入れた経験があり、Libreboot も試したい。
  - **slingvora**: Pixel で Libreboot が動けば面白い。

## 5. [Zero-Click Spyware Delivered via Targeted Ads: AdFection](https://citizenlab.ca/research/how-discover-tech-turned-targeted-ads-into-a-pipeline-for-spyware/)

**Score:** 152 | **Comments:** 19 | [Post](https://news.ycombinator.com/item?id=50101813)

Citizen Lab の Report 195。ターゲティング広告経由でゼロクリックの傭兵スパイウェアが配信されたことを初めて公的に確認した。この手法を AdFection と呼び、Al Jazeera の端末が Candiru のスパイウェアに感染した事例を示す。また Discover-Tech 社が監視ベンダーの端末追跡・ハッキングを支援していることを明らかにした。

### Key Discussion Points

- **Frieren**: 広告事業者はマルウェア配信の責任を負うべきで、トラッキングやフィンガープリントも違法にすべき。
  - **ticulatedspline**: 立法は難しく、集団訴訟など民事責任のほうが現実的。
  - **iamflimflam1**: そうなれば Google の関係者が刑務所行きになる。
- **fhdkweig**: 後発の投稿（id=50103000）のほうがコメントが多い。
  - **Barbing**: タイトルが刺激的すぎてランクが落ちたようだと指摘。
- **saagarjha**: モバイル広告のターゲティングがなぜ DLL ハイジャックになるのか分からない。
  - **nielsbot**: モバイル広告は JS ベースのエクスプロイトを配信できる。
- **the_giraffe**: 大手広告会社の統合の時期と米国・イスラエル・アルゼンチンの関係を結びつける政治的推測を述べた。
  - **saturn8601**: 選挙前から計画されていたかのようで、将来どう解消するのか疑問。
- **kotaKat**: アプリストアの開示で、利用する広告ネットワークをすべて開示させるべき。
  - **itopaloglu83**: 金を取るより利用者のアクセスを売るほうが儲かるという歪んだ構造がある。

## 6. [I designed a nose guard for my dog and gave it away. Now 500 dogs wear one](https://snoutcover.com/one-year)

**Score:** 135 | **Comments:** 70 | [Post](https://news.ycombinator.com/item?id=50105344)

ピットブルの Billie が円板状エリテマトーデス（DLE）と診断され、鼻に塗る軟膏を毎回舐め取られる問題から、著者が鼻ガードを設計・試作（13個目で完成）した。無料で配るうちに需要が広がり、1年で500匹の犬が使うようになった。

### Key Discussion Points

- **asjkff**: AI 記事かどうかはさておき、ニッチな問題を解決する良い製品。
- **DoctorOetker**: 首に取り付けると頭の動きで敏感な部分が擦れるので、耳の付近など骨の突起で固定したほうがよい。
- **tdeck**: プロジェクトは良いが、記事は Claude で書かれたようで読みにくくなっている。
- **billfor**: 11ヶ月前の過去スレッド（id=46094460）を紹介。
- **lurn_mor**: 個人の課題解決が事業になる流れが楽しく、自分もやってみたい。

## 7. [Simons Foundation Launches $15M Effort to Help Mathematicians Navigate AI Era](https://www.simonsfoundation.org/news/simons-foundation-launches-15m-effort-to-help-mathematicians-navigate-ai-era/)

**Score:** 107 | **Comments:** 72 | [Post](https://news.ycombinator.com/item?id=50104654)

Simons Foundation、Anthropic、OpenAI が総額1500万ドルの資金とリソースを拠出し、財団が公募を通じて、AI 支援による成果の評価、新ツールの習得、知見共有などのワークショップや取り組みを支援する。

> **関連:** #2「I know why Mathematicians weep」も参照（同一テーマ: AI の数学への影響と数学コミュニティの反応）

### Key Discussion Points

- **muragekibicho**: Tao のような既に資金が潤沢な数学者に資金が集まり、若手は取り残されるのでは。
- **mrandish**: OpenAI と Anthropic は数学的発見を PR に使い研究分野を荒らしたと見ており、各約500万ドルは PR による火消しではないか。
- **simonw**: 発表文中の拠出内容と資金の使途の記述を引用。
- **chazeon**: 1500万ドルは大きな額ではなく、大学の取り分を除けば10グループ未満しか支援できない。
- **alp1-qw3**: これが「民主化」の実態で、AI 推進派のトップ数学者が恩恵を受けるだけ。

## 8. [Steam Client Is Now Faster Than Epic's New Vibe Coded Launcher](https://respawnfirst.com/steam-client-is-now-faster-than-epics-new-vibe-coded-launcher/)

**Score:** 83 | **Comments:** 94 | [Post](https://news.ycombinator.com/item?id=50105635)

Epic が Steam の遅さを揶揄して「vibe coding」で作った新ランチャーのプレビューを公開した約24時間後、Valve が小規模な更新を配信して Steam クライアントが Epic を上回る速度になったと報じる記事。コールドブートとトレイ復帰速度の比較表を掲載している。

### Key Discussion Points

- **tancop**: vibe coding が遅い Electron アプリを生むと思っていたら、ランチャーの速度競争になった。手元では Steam が復帰2秒/起動10〜15秒、Epic が0.5秒/5秒。
- **giorgioz**: vibe coding で参入障壁が下がり競争が激しくなり、消費者にはより良く安い製品が届く。
- **hombre_fatal**: AI での最適化は最も簡単な使い道で、Valve が AI を使っていないとは考えにくい。
- **kakuri**: なぜもっと早くやらなかったのか。Steam クライアントはひどい。
- **Goronmon**: アプリに対して Valve を過度に擁護する人が多く、パラソーシャルな関係のようだ。

## 9. [Celebrating 70 Years of Fortran](https://fortran-lang.org/news/2026/09-15-Fortran-birthday/)

**Score:** 68 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=50104726)

最初の Fortran マニュアル公開から70年（2026年10月15日）。ケンブリッジ大学 ICCS が、マンチェスターの科学産業博物館で記念イベントを開催する。Fortran は原子力工学、気象・気候予測、材料科学などで今も主力言語である。

### Key Discussion Points

- **dranudin**: 2018年にシミュレーションソルバーで Fortran を書いた。線形代数では C よりずっと快適で高速。
- **FabHK**: 1990年代に入門書の「パンチカードの1桁目に C」の記述で挫折したが、BLAS など基盤ライブラリは Fortran 製。
- **whartung**: TRS-80 時代の父の Fortran が思い出。資料がコンパイラのリファレンスばかりで学びにくかった。
- **hermitcrab**: 40年前に Fortran で仕事を始めた。COMMON ブロックや GOTO など問題も多いが、初期の高水準言語だった。
- **jandrewrogers**: ループ変数に i, j, k を使う慣習は Fortran が起源。

## 10. [Neural Networks Are Already Clean](https://already-clean.goodfire.com/)

**Score:** 21 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50105647)

Goodfire の Nick Cammarata による非公式の研究エッセイ（約65分）。初期モデルでの多義性の原因は重ね合わせ（superposition）ではなく、「再帰的一般化」などの修正可能な要因だと主張する。数兆パラメータ級でもニューロンの多くが理解でき、機械的解釈可能性の見通しは想定より明るいという。

### Key Discussion Points

- **phyzome**: 1.6万語読んでも「clean」の意味が示されず、何についての文章か分からない。

## Trends

- **AI と専門職の関係**: #2 と #7 はともに AI による数学の変貌を扱い、悲嘆と資金配分の公平性が論点。#8 の vibe coding、#10 の解釈可能性も AI 関連。
- **AI 生成コンテンツへの反発**: #6 の記事文体への指摘、#4 の Libreboot の AI 反対姿勢など、AI の使用が評価の対象になっている。
- **広告・監視の安全性**: #5 は広告配信網が傭兵スパイウェアの経路になり得ることを示し、責任と透明性が議論された。
- **ノスタルジーと実験的デザイン**: #1 のスキューモーフィズム、#9 の Fortran 70年など、過去への関心が強い。
