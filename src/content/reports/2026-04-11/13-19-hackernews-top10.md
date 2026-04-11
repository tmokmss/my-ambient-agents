---
title: "Hacker News トップ10サマリー（2026年4月11日）"
date: "2026-04-11T13:19"
category: "summary"
summary: "MacBookの角やすり加工、1Dチェス、Firefox全拡張機能インストール実験など、技術系・文化系の話題がトップ10入り"
tags: ["hackernews", "tech", "games", "science", "open-source"]
---

## 1. [Filing the corners off my MacBooks](https://kentwalters.com/posts/corners/)

**Score:** 990 | **Comments:** 474 | [Post](https://news.ycombinator.com/item?id=47724352)

著者はMacBookの鋭い角が手首に当たって不快なため、自ら金属やすりで角を削り落とした体験記。スピーカーやキーボードをテープで養生してアルミ粉から保護し、ワークベンチに固定したのち、粗めのやすり→150番→400番のサンドペーパーで仕上げる手順を写真つきで詳述。「自分の道具は自分でカスタマイズしよう」という哲学を熱くすすめている。

### Key Discussion Points

- **scarybeard**: Appleラップトップの鋭い角で実際に指を切ったことがある。この価格帯なら工場出荷時に丸めておくべきだ。
  - **Rekindle8090**: そんなことあるとは信じられない。
- **wildpeaks**: 肌触りは良くなりそうだが、左右非対称になるのが気になる。
- **jasoneckert**: 同僚4人の反応を紹介——保証問題・スティーブ・ジョブズネタ・落下時の強度・「鋭く見えるラップトップ」ジョーク。
  - **NikolaNovak**: 会社支給のPCなのに「返却時にトラブルになる」と心配する人がいないのが不思議。
  - **overtone1000**: 同僚4番目の人とビールを飲みたい。
- **yreg**: 本記事の本質は「型破りで物議を醸す方法でも、ツールを自分のニーズに合わせて改造することを検討しよう」というメッセージだ。
  - **jonhohle**: Ingersol Randの事例——工場作業員が全員エアレンチを同じように改造しているのを見て、人間工学を最初から設計に取り込んだ製品を作った話。Appleも同様に丸みのある形状に戻れるのでは。
  - **snowwrestler**: 自分は鋭い角が気にならないが、道具を改造する試みは全力支持。
- **wraptile**: MacBookを2年間使ったが手首が傷だらけになる感覚が理解できなかった。
  - **Slow_Hand**: 手首の外側のボールを本体に乗せるポジションにすれば問題ない。机との高さの問題では。
  - **hansvm**: 鋭い角は気にならないが、グレアや緩んだヒンジ、スティッキーキーの方が悩ましい。

---

## 2. [Optimal Strategy for Connect 4](https://2swap.github.io/WeakC4/explanation/)

**Score:** 109 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=47695213)

「WeakC4」は7×6の四目並べ（Connect 4）を解く弱解（先手必勝の手順を1本だけ保証）のアプローチ。わずか150KBの圧縮データベースと「定常状態ダイアグラム」という独自ビジュアル言語を用いて、計算機なしに最適手を瞬時に特定できる。従来の強解（50万ノード超）と比べて劇的にコンパクトなのが特徴。

### Key Discussion Points

- **sillysaurusx**: グラフのビジュアライゼーションが美しく、YouTube動画「I Solved Connect 4」は最先端の成果と言える。
- **donkeyboy**: ForceEvenアプローチとAnkiデッキ以外に勝ち方の直感的な指針がなく、人間が暗記できる戦略の解説が欲しい。
- **tromp**: Victor Allisのアプローチと本質的には同じ。自身は12KBのトリット符号化8プライデータベースを作成済みだと紹介。
- **Someone**: 弱解とは「あらゆる応手に対して先手必勝の手順を1本示すもの」であり、全ての勝ち筋を列挙する必要はないと説明。
- **cachius**: この作者の動画はKlotskiや二重振り子も扱っており、グラフアニメーションが美麗。

---

## 3. ['Abhorrent': the inside story of the Polymarket gamblers betting millions on war](https://www.theguardian.com/business/2026/apr/11/polymarket-gamblers-betting-iran-war-ukraine-news-truth)

**Score:** 34 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=47729994)

The Guardianの記事（取得不可）。ウクライナ戦争やイランとの紛争など現在進行中の武力衝突に数十万ドル規模の賭けを行うPolymarketのトレーダーたちを取り上げた内幕レポート。「コスチャンティニフカをロシアが今年制圧するか」に50万ドル以上が賭けられているという報道が物議を醸している。

### Key Discussion Points

- **Chrisszz**: Polymarketは「オンライン戦争投資のVCプラットフォーム」と化している——計画→賭け→投資→実行→利益回収。
- **srameshc**: 「誰もが戦争で儲けられるようになった！」と批判的に引用、戦争を金融商品にすることへの嫌悪感を表明。
- **cyanydeez**: 「資本主義：すべての人間を代替可能な通貨に還元する必然的プロセス」。

---

## 4. [Show HN: Pardonned.com – A searchable database of US Pardons](https://pardonned.com)

**Score:** 85 | **Comments:** 20 | [Post](https://news.ycombinator.com/item?id=47727960)

存命中の歴代米大統領による恩赦データをすべて集約した公益サイト。クリントン政権以降の2,791件の恩赦を収録し、推定で344,000年超の刑期短縮・15億ドルの賠償放棄・17億ドルの罰金放棄を可視化。DOJ恩赦局の公式PDFに直リンクし検証可能性を担保。PlaywrightでDOJをスクレイピングし、SQLiteとAstro 6で構築。

### Key Discussion Points

- **koolba**: 「2014年1月1日から2025年1月19日の非暴力的犯罪」を包括的にカバーする11年分の恩赦があるが、内訳が不明瞭と指摘。
- **soumyaskartha**: 「このような市民データは何年も前から検索可能であるべきだった。誰かが作らなければならなかった事実が、政府記録のアクセシビリティについて多くを物語っている。」
- **kupadapuku**: 罪種別（詐欺・麻薬・金融犯罪）の分析を提案。オバマの件数が多い理由は薬物犯罪の大規模恩赦によるもの。
- **andrewstuart**: 「恩赦権は機能的な民主主義において正義を歪める以外の合理的な目的を果たせない。」
- **jsiepkes**: トランプ第2期のデータから「1月6日恩赦」が除外されている理由を質問。

---

## 5. [How to breathe in fewer microplastics in your home](https://www.bbc.com/future/article/20260410-how-to-breathe-in-fewer-microplastics-in-your-home)

**Score:** 3 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=47730196)

BBCの記事（ブロックのためコンテンツ取得不可、コメントなし）。自宅でのマイクロプラスチック吸入を減らす実践的な方法を紹介する記事とみられる。スコアとコメント数が極めて低く、ランキングへの影響は限定的。

### Key Discussion Points

*コメントなし*

---

## 6. [Starfling: A one-tap endless orbital slingshot game in a single HTML file](https://playstarfling.com)

**Score:** 288 | **Comments:** 75 | [Post](https://news.ycombinator.com/item?id=47698455)

1本のHTMLファイルに収まったブラウザゲーム。星の周りを軌道回転する球を「タップして解放」し、次の星へ飛ばしていくシンプルなメカニクスで中毒性が高い。コンボシステム、ジェネレーティブ音楽、Firebaseによるデイリーリーダーボードを備え、iOSとAndroidにもCapacitorで展開。

### Key Discussion Points

- **iceberger2001** (作者): バニラJS+Canvasの単一HTMLファイルで制作。コンボ・スキップボーナス・難易度上昇・ハプティクスを実装。
  - **hn_throwaway_99**: 軌道の点線が次の星の方向を示すガイドになると気づき、成績が大幅向上。これを消した「ハードモード」があると良い。
  - **metalrain**: ウィンドウサイズによってゲーム速度が変化する（Canvasレンダリング速度の差）と指摘。
- **cpcallen**: 軌道力学がGravitationやKSPとまったく違うように見え、物理的に意味不明と困惑。
  - **andai**: 「物理的に正確なマインドレスタップ軌道力学サンドボックス」というニッチな市場ギャップを発見した、と皮肉混じりに絶賛。
  - **wolframhempel**: これは物理シミュレーションを標榜していないので問題ない、と擁護。
- **0x3f**: リスタートボタンをプレイ再開と同じ場所に置くなど、リトライを高速化してほしい（Super Meat Boyが模範）。
- **muti**: モバイルで「QUICK!」「BLAZING!」などのテキストが球の上に重なってプレイを邪魔する。
  - **tux3**: デスクトップでも同様。ポーズメニューからリスタートすると即座に再開できる。
  - **high_priest**: 「重大な問題」（同意）。

---

## 7. [Volunteers turn a fan's recordings of 10K concerts into an online treasure trove](https://apnews.com/article/aadam-jacobs-collection-concerts-internet-archive-chicago-b1c9c4466a2db409a83523ad84b79d62)

**Score:** 145 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=47687443)

音楽ファンのAadam Jacobsが数十年かけて録音した約1万本のコンサートのブートレグ音源を、ボランティアチームがInternet Archiveに整理・公開した取り組みを伝えるAP通信の記事。ロスレスFLACフォーマットで提供されており、音楽保存・デジタルアーカイブの重要性を再認識させる。

### Key Discussion Points

- **rwmj**: 1989年のNirvanaの音源は「ブートレグとしては驚くほど高音質でバンドが非常にタイトだった」と絶賛。Internet Archiveへの寄付を呼びかけ。
- **mannyv**: Grateful Deadアーカイブを長年手がけているCharlie Miller等の「音響の魔法使い」チームと協力することを勧める。
- **throwaway2046**: 「素晴らしいコレクション。ロスレスFLACがあることに感謝。Internet Archiveへ寄付して存続を支援しよう。」
- **selfsimilar**: 「2000年代初頭のほぼすべてのライブでAadamと会っていて、自分のショーも数本録音してもらった！」と個人的なつながりを語る。
- **Myzel394**: Concertosのような非公開トレントトラッカーではなく公開でアップロードしてくれることを評価。

---

## 8. [1D Chess](https://rowan441.github.io/1dchess/chess.html)

**Score:** 873 | **Comments:** 151 | [Post](https://news.ycombinator.com/item?id=47719740)

1本の直線（8マス）上でキング・ナイト・ルークの3種類の駒だけを使うチェスの変種。Martin Gardnerが1980年のScientific American「Mathematical Games」欄で紹介した古典的パズルゲームのブラウザ実装で、AIと対局できる。見た目のシンプルさに反して予想外の戦略的深みがある。

### Key Discussion Points

- **hackyhacky**: 「マインドチェス」ゲームを紹介——2人が交互に「チェック」と言い続け、相手より一歩先に「チェックメイト」を宣言した方が勝つという言葉遊び。
  - **anyfoo**: 「おかげで"The Game"に負けてしまった。10年以上負けずにいたのに……」（The Gameという心理ゲームのネタ）。
  - **CGMthrowaway**: 「相手が諦める直前まで返信を引き延ばせ」と1D恋愛戦略に応用。
- **quuxplusone**: Gardner論文（1980年7月・8月号）を参照しつつ、9マスや10マス盤でのキャスリング変形案を提案。
  - **al_borland**: 1Dチェスでキャスリングが有効な理由がわからない——キングの安全性が下がりルークが無効化されるのでは？
- **tromp**: 1D Goも同様に興味深く、Alak（1D Goの別名）として知られると紹介。合法局面の遷移問題についての未解決問題にも言及。
- **aktenlage**: 「1D Pacmanを思い出す」と1D系ゲームへの親近感を表明。
  - **wes-k**: 「シンプルながらスキルが問われる楽しいゲーム。スコア17,485は割と良いと思う（※低電力モードだとゲームが遅くなりスコアが爆増することに気づいた）。」
  - **aaaasmile**: 「Very cool!」
- **asibahi**: 「世界で最も人気の1Dゲームはバックギャモンでは？」
  - **anthk**: 「南欧・ラテンアメリカではルード/パチージが主流だった」。
  - **zniturah**: 「コマの積み重ねを考えると、むしろ1.5Dかも」。

---

## 9. [Installing every* Firefox extension](https://jack.cab/blog/every-firefox-extension)

**Score:** 460 | **Comments:** 63 | [Post](https://news.ycombinator.com/item?id=47724118)

MozillaのAPIをスクレイピングして84,194本のFirefox拡張機能を全インストールする実験。最大の拡張機能はdmitlichessの196.3MB（音声ファイル2,000本超入り）、デイリーユーザーゼロが34.3%、オープンソースは76.7%。フィッシングウォレット、SEOスパム、Yahooアフィリエイトリダイレクトを仕込む拡張群（Innover Online Group、70万ユーザー超）など悪意ある拡張も多数発見。全インストール後のFirefoxはRAM 37GB消費で事実上使用不能に。

### Key Discussion Points

- **ArneVogel**: 「中指絵文字ステッカー」アワードを受賞し、自身のブログ記事を紹介。
  - **thehias**: 「なぜ自分の拡張機能を使わないの？」（ArneVogelへの質問）。
- **BoppreH**: 「実際のページがまったく読み込めなかったのは残念だが、文章はとても楽しく読めた。」クラッシュレポートのくだりがユーモラスだと称賛。
  - **tech234a**: Mozillaのクラッシュ統計ポータルで公開されているFirefoxクラッシュレポートを確認する方法を案内。
- **xg15**: `extensions.json`の書き込みに使われている20msデバウンス値が84,194拡張規模では機能しないと懸念。
  - **Someone**: 拡張機能側がこのファイルに書き込むのではなく、Firefoxがインメモリの拡張リストを更新した際に1回だけ書き込む仕組みと解説。
- **danlitt**: スクレイピングコードが公開されているかを質問（後日データセット再生成のために）。
- **tech234a**: `https://addons.mozilla.org/sitemap.xml`のサイトマップを使う方法を代替案として提案。

---

## 10. [Chimpanzees in Uganda locked in eight-year 'civil war', say researchers](https://www.bbc.com/news/articles/cr71lkzv49po)

**Score:** 360 | **Comments:** 211 | [Post](https://news.ycombinator.com/item?id=47722333)

ウガンダのNgogo地域で、チンパンジーの大規模群が8年間にわたって隣接グループと組織的な集団戦を繰り広げていたことを示す研究をBBCが報道（記事コンテンツはブロック）。Science誌掲載の論文に基づき、霊長類の戦争行動の進化的根拠をめぐる議論を呼んでいる。

### Key Discussion Points

- **OgsyedIE**: Richard Wranghamの「連合的殺傷」理論——集団殺傷は霊長類の繁殖上の利点をもたらす進化的形質である可能性を議論。
  - **xg15**: 恣意的な基準でも内集団・外集団に簡単に分かれてしまう人間の傾向から、これは文化よりも生物学的なものと思われると指摘。
  - **londons_explore**: 戦争は「隣人を殺すと資源が解放される」という競争原理と集団協力の強化という2つの概念の組み合わせと分析。
- **neom**: Science誌の論文リンクを共有。25頭が呼吸器疾患で急死したエピソードが社会的混乱に影響したのでは？と問いかけ。
  - **znort_**: 群が過大になりリソース競争とサブグループ形成が起き、アルファオスの喪失と集団間関係の切断が重なって崩壊したと分析。
  - **Aboutplants**: 論文を読んで「状況で完全に説明可能だが、それ自体が非常に興味深い」と感想。
- **delichon**: 有限資源とトライバルなゲーム理論のダイナミクスの下では、紛争は数学的に不可避。解決策は「取引をより透明かつ反復可能にして協力が裏切りより成功しやすくすること」。
  - **jasonwatkinspdx**: David Graeberを読むことを勧め、ゲーム理論を物理法則のように使うのは的外れだと反論。
  - **throwaway27448**: 「ゲーム理論は力ではなく、一つの合理性概念を通じた行動モデルに過ぎない」と補足。
- **rurban**: 90年代にNgogo群が近隣群を奇襲し全雄を殺した事件が発端だと指摘。Jane Goodallが記録したGombeチンパンジー戦争や「Killer Ape」理論にも言及。

---

## Trends

1. **DIY・ハック精神の復活**: MacBookの角やすり加工（#1）、全Firefoxエクステンション実験（#9）は「既製品を限界まで試す・改造する」文化の体現。HNユーザーの「やってみた」精神が高スコアを後押しした。

2. **シンプルなゲームへの愛**: 1DチェスとStarflingは、複雑なグラフィックや課金要素を排したミニマリストゲームが多くの関心を集めた。1本のHTMLファイルや8マス盤面という制約の中に意外な深みを見出すHNらしい嗜好が反映されている。

3. **公開データ・アーカイブへの関心**: 恩赦データベース（#4）やコンサート音源のInternet Archive公開（#7）は、政府・文化データの透明性と保存を求めるコミュニティの関心を示す。

4. **戦争・紛争の倫理とゲーム化**: Polymarketの戦争賭博（#3）とチンパンジーの「内戦」研究（#10）が同日にランクインし、暴力・競争・協力の進化的・経済的側面に対するHNの複眼的な関心が浮かび上がった。

5. **ゲーム理論と数学的最適化**: Connect 4の弱解（#2）とチンパンジー研究のゲーム理論的考察（#10）が並んだことで、「複雑な現象を最小限の情報で解く」というテーマが通底している。
