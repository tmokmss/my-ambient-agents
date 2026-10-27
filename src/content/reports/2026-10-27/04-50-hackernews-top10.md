---
title: "Hacker News トップ10 ダイジェスト（2026年10月27日）"
date: "2026-10-27T04:50"
category: "summary"
summary: "OpenAIの数学・CS・物理の新発見とETH反証、Raschka氏の推論モデル講座、CSS-Tricksの新オーナーなど"
tags: ["hackernews", "AI", "complexity-theory", "windows", "security"]
---

## 1. [Three new discoveries in mathematics, computer science, and physics](https://openai.com/index/building-scientific-understanding-with-academic-communities/)

**Score:** 649 | **Comments:** 278 | [Post](https://news.ycombinator.com/item?id=50251344)

OpenAI が、調和解析（局所平滑化と Kakeya 予想）、計算複雑性（指数時間仮説 ETH は偽）、場の量子論（量子色力学の存在と標準模型の補完）に関する3つの発見を発表した。論文を「生の研究データ」と位置づけ、外部の専門家に「シェパード」を依頼して解説グループを作る新しい公開方式を試している。方針は透明性（NDAなし）、学術的功績は求めない、グループへの評価の付与など（Wayback のスナップショットに基づく）。

> **関連:** #3「The Exponential Time Hypothesis Is False [pdf]」も参照（同一発表のうち計算複雑性の論文そのもの）

### Key Discussion Points

- **stillpointlab**: 前回の数学成果の公開後に OpenAI がやり方を改め、関連分野の数学者・科学者を巻き込んでから公開した点を評価。Terence Tao の働きかけの功績もあるとする。
  - **doginasuit**: 帰属は大切だが、重要なのは人類の知識の前進であり個人の名前はすぐ薄れる、と同意。
  - **paxy**: アプローチ自体は大きく変わっておらず、科学界が不可避な流れを受け入れ始めただけだと見る。
  - **rockskon**: 前回他者の研究の功績を取ろうとした経緯があるため、今回懐疑派を納得させる努力は OpenAI の利益にかなう。
- **abetusk**: 「ETH is false!」と驚き。論文の要旨（k-CNF の充足割当数を決定的に、劣指数時間・多項式空間で数える）を引用。
  - **slashtrends**: 元論文の著者にアルゴリズムをレビューさせており、彼らも同じ反応だったはず。
  - **debo_**: 大学院の計算複雑性の授業を思い出し、本当に驚いたと述べる。
- **martinhath**: ETH は大学で習った長年の仮説で、多くの論文が下界や困難性証明の前提にしていたと指摘。
  - **tesnorindian**: ETH が偽だと細粒度計算量理論はどうなるのかと質問。
- **mlinsey**: ETH が偽でも P=NP を意味しないはずだが、専門家は P=NP 寄りに見解を更新するのかと質問。
  - **jltsiren**: 更新しない。時間上界の主要項が 2^{n…} の形なので、多項式時間還元で閉じないためだと説明。
  - **ComplexSystems**: 多項式時間 SAT ソルバが「数時間 AI に解かせる」だったら面白い、と冗談。
  - **zarzavat**: P vs NP が証明も反証もできないという第三の可能性を少し下げるかもしれない。
- **lukeplato**: 発表文の「Yang–Mills 存在の自然言語証明は9月9日、QCD は9月18日、Lean 形式化は10月16日に完了」という記述を引用して驚く。
  - **cft**: 物理学者で本当に疑った人はいるのか、4次元QCDは約45年近似計算に使われてきたと疑問を呈す。
- **SilverSlash**: 2025年にフィールズ賞を受けた Hong Wang の3次元 Kakeya の証明に対し、全次元に拡張した主張だと驚く。

## 2. [Sebastian Raschka's from-scratch video course on building reasoning models](https://magazine.sebastianraschka.com/p/building-reasoning-models)

**Score:** 619 | **Comments:** 87 | [Post](https://news.ycombinator.com/item?id=50245138)

Sebastian Raschka 氏の書籍『Build a Reasoning Model (From Scratch)』に対応する、無料の全8本・約11時間の動画講座。小さな事前学習済み Qwen3 を出発点に、評価、推論時スケーリング、検証可能な報酬による強化学習、強い教師モデルからの蒸留を Python と PyTorch で実装する。序盤は CPU でも動くが、学習には GPU 推奨。

### Key Discussion Points

- **torben-friis**: ML は他のソフトウェア分野と違い、学んでもモヤモヤが残ると相談。
  - **peterlk**: 深く理解していないシステムで、うまくいくレシピを経験的に見つけ最適化してきた結果だと見る。
  - **miki123211**: 機械学習は CS や数学より生物学・物理学・法学に近いと指摘。
  - **danielmarkbruce**: 理論を先に教える教科書より、Raschka 氏の本でトップダウンに LLM を作るのを薦める。
- **libraryofbabel**: from-scratch チュートリアルの目的は実用 LLM を訓練することではなく仕組みの理解だ、という誤解を正す。
- **darrelld**: 氏の『Build Your Own LLM From Scratch』は読みやすく丁寧だと推薦。
  - **auraham**: トークン化から生成まで学べる優れた教材。
  - **lucasoshiro**: ニューラルネットは苦手だったが、この本はほぼ完璧。
  - **fuddle**: 勉強会で読んだのが有益だった。
- **thrw045**: 「推論モデルは通常の LLM に RLVR などの追加学習をしたもの」という説明は正確なのかと疑問を呈す。
- **kavalg**: 複雑な AI の話題を直感的に説明する名手として強く推薦。
  - **artninja1988**: 「Karpathy 2.0!」

## 3. [The Exponential Time Hypothesis Is False [pdf]](https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf)

**Score:** 435 | **Comments:** 167 | [Post](https://news.ycombinator.com/item?id=50251661)

#1 で発表された計算複雑性の論文の PDF。PDF のため本文は取得せず、コメント引用の要旨に基づく：任意の k-CNF 式の充足割当数を、多項式空間かつ劣指数時間 2^{n/(log n)^{1/2+o(1)}} 級で決定的に数えるアルゴリズムを与える。著者らは、2^{o(n)} の上界は一般の多項式時間還元では移らないため、NP 全体が劣指数時間になるわけではないと注記している。

> **関連:** #1「Three new discoveries in mathematics, computer science, and physics」も参照（同一発表の概要ページ）

### Key Discussion Points

- **svat**: P vs NP に直接の影響はないが、Knuth 世代は多くの問題に予想外に速いアルゴリズムがあると直感していた、という歴史的視点を示す。
  - **Animats**: 最悪時は指数でも平均は速い問題（線形計画法、巡回セールスマン問題）の例を挙げる。
  - **slashtrends**: AI ラボに数学力が集中している現状では、P=NP が見つかれば公開鍵暗号にも影響しうると懸念。
- **cochne**: 驚くべき結果だが、論文自身が NP が劣指数になるわけではないと断っていると補足。
  - **marshray**: 3SAT へ線形変数数で還元できる問題（独立集合の数え上げなど）には効くのでは、と疑問。
  - **LPisGood**: 劣指数解が NP 全体の劣指数性を意味する部分集合はあるのかと質問。
- **criemen**: SAT ソルバへの即時の応用はあるかと質問。
  - **bsubs**: SAT 専門家として、応用はなく結果は「銀河的」だが、新しいアイデアの連鎖が将来実用化するかもしれないと回答。
  - **infamouscow**: 実世界の入力は病的な入力より素直で、実用上の影響は小さいだろうと推測。
- **strommec**: SETH が偽なら自己注意の二次計算量の下界も崩れるのかと質問。
  - **rokob / caughtinthought**: SETH を前提にした下界の結論は逆向きに成り立たず、SETH は ETH よりずっと強い主張だと指摘。
- **qgin**: 「NP が少し P っぽくなった」と冗談。
  - **jibalt**: NP と P の問題には触れていないと訂正。
- **softwaredoug**: フロンティアラボがこの種の計算に投じ続けるのはいつまでか、アポロ計画のように関心が薄れるのではと考える。

## 4. [CSS-Tricks has a new owner](https://css-tricks.com/css-tricks-has-a-new-owner/)

**Score:** 409 | **Comments:** 93 | [Post](https://news.ycombinator.com/item?id=50245831)

2022年に創設者 Chris Coyier から DigitalOcean が買収した CSS-Tricks を、Geoff Graham 氏が独立オーナーとして引き継いだ。当面はフルタイムで運営し、広告収入の復活、有料メンバーシップ（Discord 付き）、初心者向け HTML/CSS コース、ショップ、11月10日のニュースレター再開、週1〜2本の記事公開、ゲスト寄稿フォームの再開を予定している。

### Key Discussion Points

- **grahamburger**: 似た趣旨のサイトで広告もコースも不振で、最も稼げたのは記事の内容を有償代行することだったと自身の経験を語る。
  - **schneems**: 無料・安価・高額の3商品構成が定番だったと助言。
  - **jonah**: サイトのコンセプトを称賛し WISP の一覧を提案。
- **sikozu**: 現在の Web 開発の状況を考えると事業の持続性が心配。Tailwind の例を挙げる。
  - **codingdave**: 静的コンテンツ中心で運用コストは低く、致命的ではないはず。
  - **danielvaughn**: Tailwind は入力量削減が目的で AI 時代には価値が下がったが、CSS-Tricks は CSS で何ができるかを学ぶ場だと区別する。
  - **esskay**: Tailwind の例はやや誤解を招く。人員削減後にスポンサー制度で約200万ドルを得てから Shopify に加わったと補足。
- **jeromechoo**: 10年以上フロントエンドを担当したが、この1年 CSS を触っていない。LLM の出力は不満で、人手の細部の磨き込みを重視する立場から歓迎。
  - **yreg**: ではなぜ CSS を触らなくなったのかと質問。
- **willio58**: DigitalOcean は CSS-Tricks を所有していることを忘れていたのでは、と皮肉る。
  - **vanadium**: 当時 DO にいた立場から、優先度が低かったのは事実だと証言。
  - **system2**: DO は買収したものを台無しにする、と批判。
- **CM30**: DO は良いオーナーではなかった。最も活発な寄稿者の Geoff 氏に期待。

## 5. [Oldest GUI application that still runs on Windows 11](https://blog.enlyth.com/posts/oldest-windows-gui-app-win-11/)

**Score:** 343 | **Comments:** 206 | [Post](https://news.ycombinator.com/item?id=50248055)

Windows 11 でそのまま動く最古の GUI アプリを探した記事。最古は NT 3.1 プレリリース Build 347 の CDPLAYER.EXE（1992年11月16日リンク）。それ以前のビルドは PE 形式や cdecl 呼び出し規約が現行 Windows と合わず動かない。CDPLAYER は crtdll.dll を使うためクラッシュを免れ、音声再生にはダミーの CD-ROM ドライバが必要だった。Windows 1.01 の REVERSI（1985年）は emulator の otvdm 経由で動くが、ネイティブではないため対象外。

> **関連:** #9「16-bit Windows (Windows 1.x, 2.x, 3.0, 3.1, etc.) on 64-bit Windows」も参照（古い Windows アプリを現行 Windows で動かす話題。記事内の otvdm は #9 の winevdm が由来）

### Key Discussion Points

- **anticorporate**: 母親の FreeCell 戦績（レジストリ値）を PC の更新ごとに引き継ぐのが家族 IT 担当の大事な仕事だった、と回想。
  - **johnwalkr**: Windows XP 版のソリティアなら Windows 11 でも問題なく動く。
  - **layer8**: Windows 7 の電卓を新規セットアップのたびに入れている。
  - **byte_0**: 追悼の言葉。
- **drnick1**: メニューバーを失い「モバイルファースト」になった UI を嘆く。デスクトップ UI は Windows 95 頃が完成形だったという主張。
  - **cowlevel**: Android にも専用メニューキーがあったが Apple に合わせて消えた。
  - **bcvvvy**: Electron 系アプリによる UI の不統一が最も気になる。
  - **brailsafe**: 問題はモバイルファーストでなく、Microsoft の意思決定とデザインの拙さだと見る。
- **mattbee**: 90年代の Windows 3.1 向け児童用 CD-ROM ゲームを復活させた経験を共有。8bit 時代の描画挙動が壊れていた。
  - **giancarlostoro**: Wine をフォークして Legacy Windows 互換層を作れないかと発想。
  - **simoncion**: 未修正のゲームは Proton/Wine で単一 CPU に制限するとどう動くのかと質問。
- **kidel001**: 34年前の本も1896年の本もそのまま開けると対比し、ソフトの後方互換の乏しさを指摘。
  - **anthonypasq**: 1845年の列車を現代の線路に載せられるか、が適切な比較だと反論。
  - **eviks**: 数世紀の進化を待てば追いつくかもしれない、と皮肉。
  - **eahhn**: 関連する動画を共有。
- **tgtweak**: 「Win32 is the only stable ABI」という投稿を紹介。
- **dofm**: 33年8か月前のアプリと言われて年齢を感じる、と冗談。

## 6. [Type Server Protocol](https://github.com/microsoft/pylance-release/blob/main/docs/tsp/type-server-protocol.md)

**Score:** 213 | **Comments:** 145 | [Post](https://news.ycombinator.com/item?id=50248371)

Microsoft の Pylance リポジトリにある、Python の型解析データを問い合わせる JSON-RPC プロトコル（Type Server Protocol）の仕様。型サーバがワークスペースの解析状態を保持し、バージョン、スナップショット、検索パス、import 解決、型クエリに答える。LSP のデータ型を再利用し、メソッドは `typeServer/` 接頭辞を持つ。古い結果の無効化にスナップショットを使い、大量クエリ向けに読み取り専用の追加接続も使える。存在理由は文書内では明示されていない。

### Key Discussion Points

- **nikolatt**: basedpyright の保守者は TSP を批判済みで、Astral の ty は対応予定のようだと紹介。
  - **ghm2180**: Microsoft はロックインでしか稼げない、と皮肉る。
- **anonymous908213**: 名称は Python Type Server Protocol とすべき。汎用的な名前を取るのは変で、LSP の会社なのに残念。
  - **rzzzt**: 「Type Server Subsystem for Python」と言い換え。
  - **wolttam**: pylance プロジェクト名前空間下の資料で、発表ではないのでタイトルを調整すべきと指摘。
  - **roarcher**: 「MVC」という名のフレームワークを出した会社だが、今回は業界標準語を汚染していない点はまし、と皮肉。
- **impoppy**: Astral の対応は良いが、新しい LSP 機能でなく別プロトコルである理由が文書から読み取れない。Microsoft が自社製品のために機能を作っているのではと見る。
- **tobz1000**: LSP だけでは足りないのかと質問。
  - **nextaccountic**: basedpyright の文書は、Pylance の陳腐化を防ぐため型検査を外部に委ねる悪あがきだと批判している。
  - **Wilfred**: 構造化された型表現が得られる点が違う。ただ LSP 拡張でない点は残念。
- **coindef**: 価値は新しい RPC ではなく、型情報が文字列から構造化データになる点にあると分析。クエリのコストと能力ネゴシエーションが重要で、Python 特化を分離しないと単一エコシステム向けになるとも指摘。
- **Tarean**: 実質は型クエリの LSP 拡張で、結果型が Python 固有すぎて他言語には使われないだろうと推測。

## 7. [Cross-request KV cache exposure in the GLM-5.3 Workers AI model (155 responses)](https://blog.cloudflare.com/kv-cache-exposure-remediation/)

**Score:** 100 | **Comments:** 32 | [Post](https://news.ycombinator.com/item?id=50252159)

Cloudflare の Workers AI で、2026年8月27日〜9月9日に GLM-5.3 モデルの一部応答に他顧客のリクエストのデータが混入した事故の事後報告。原因は、1,048,576トークンのコンテキスト長に対し prefill 側 KV キャッシュプールが681,280トークン分しかなかった設定ミスと、SGLang が超過長のプロンプトを拒否せず1トークンのプレースホルダに置換して処理を続けた不具合。影響は681,280トークン超のプロンプトに対する155応答で、悪用の証拠は見つかっていない。対策としてプール拡大、上流への修正（SGLang 0.5.22 以降）、事前検証の追加などを行った。

### Key Discussion Points

- **jacquesm**: 原因はモデルではなく、ユーザー間のメモリ分離と帳簿管理の不備だと指摘。
- **kami23**: この種の RCA の中では誠実で、テストが見逃した理由の説明も明快と評価。
- **segmondy**: 681,280トークン分しかないと知りながら1,048,576トークンを提供していたのかと疑問を投げる。
- **thehamkercat**: 他のプロバイダは問題が起きていることすら把握していないのでは、と推測。
- **octoberfranklin**: SGLang は Rust 製を謳うが、未初期化メモリの未定義動作にやられた、と皮肉る。

## 8. [A Printer Printing onto Paper](https://twitter.com/macrofying/status/2112904628509528219)

**Score:** 87 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=50204697)

インクジェットのプリンタヘッドが紙にインクを吐出する様子をとらえた顕微鏡映像のツイート。X はスキップ対象のため本文は取得せず、コメントに基づく要約。コメントによれば Nikon Small World 系のコンテストの作品らしい。

### Key Discussion Points

- **gnabgib**: 出典は Nikon Small World コンテストで、同コンテストの動画部門ではAI生成作品が受賞して問題になったと関連スレッドを紹介。
- **nolroz**: 父が初期の HP インクジェット開発に関わり、インクを沸騰させて噴出させる仕組みを興奮して話していたと回想。
- **nomel**: インクジェット技術の解説として The IJC の講演動画と engineerguy の動画を紹介。
- **ksec**: インクジェットは今も目詰まりするのか、品質は改善したのか、カラーレーザー/LED に任せるべきかと問う。
- **jongjong**: 紙では速く乾き、ヘッドでは乾いて詰まらないインクをどう作ったのかと感嘆。

## 9. [16-bit Windows (Windows 1.x, 2.x, 3.0, 3.1, etc.) on 64-bit Windows](https://github.com/otya128/winevdm)

**Score:** 44 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50253529)

winevdm（16ビット Windows エミュレータ）を64ビット Windows に移植した otvdm のリポジトリ。64ビット Windows では LDT を変更できないため CPU エミュレータを内蔵し、Wine ベースの Win16→Win32 変換コードで動作する。Win16 実行ファイルをドラッグ＆ドロップするか、インストールして直接実行できる。

> **関連:** #5「Oldest GUI application that still runs on Windows 11」も参照（古い Windows アプリを現行 Windows で動かす話題。#5 の記事でも otvdm が使われている）

### Key Discussion Points

- **yako21000**: Windows 3.1x は懐かしく、クラッシュしない Word アプリがあったと回想。
- **orionblastar**: 64ビット Windows でようやく16ビット対応が来たと歓迎。

## 10. [APC says let there be light, with standards to speed up photonics manufacturing](https://www.nextplatform.com/connect/2026/10/23/apc-says-let-there-be-light-with-raft-of-standards-to-speed-up-photonics-manufacturing/5304950)

**Score:** 19 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50234707)

Advanced Photonics Coalition（APC）が光ネットワーク機器の量産に向けた標準群を PECC Summit で発表した。共封止光学（CPO）の全体アーキテクチャ、実践指針、シリコンフォトニクスのテスト、4コア・マルチコアファイバ、シリコンフォトニクスの製造仕様の5文書。AI 向けの銅配線の限界と光部品の供給逼迫（Lumentum は2029年まで完売）を背景に、独自仕様によるロックインを避けるのが狙い。

### Key Discussion Points

- **Animats**: APC が American Power Conversion ではなかったことに触れ、3文字略語は使い尽くされているので命名時は確認し、必要なら4〜5文字にすべきと指摘。

## Trends

- **AI による科学的発見の公開方法**: #1 と #3 は同じ OpenAI 発表。ETH 反証という結果の大きさに加え、功績の扱いや外部専門家を介した検証の進め方が議論の中心になった。
- **AI を自分で作って理解する学習需要**: #2 は Raschka 氏の推論モデル講座で、スコアが非常に高かった。
- **レガシーと互換性**: #5 と #9 は古い Windows アプリを現行 OS で動かす話題。#6 はプロトコルの囲い込みへの警戒感が出ている。
- **AI インフラの運用リスク**: #7 は推論基盤の KV キャッシュ分離の失敗で、共有 GPU 基盤の隔離の難しさを示した。#10 は AI の需要が光部品の供給網に波及している。
- **個人メディアの持続性**: #4 は広告・会員・コースを組み合わせる独立運営への移行で、コミュニティ系技術メディアの先行きへの不安も語られた。
