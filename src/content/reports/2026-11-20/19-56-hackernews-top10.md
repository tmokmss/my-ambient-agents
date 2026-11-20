---
title: "Hacker News Top 10 - 2026-11-20"
date: "2026-11-20T19:56"
category: "summary"
summary: "GRH の証明主張が AI 側・人間側から同日に登場、Frostbite CPU、Signal の AI エージェント対策など HN 上位10件"
tags: ["hackernews", "ai", "mathematics", "privacy"]
---

## 1. [Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf]](https://alpo.ge/remark.pdf)

**Score:** 1933 | **Comments:** 1303 | [Post](https://news.ycombinator.com/item?id=50574968)

数学者 Levent Alpöge が一般化リーマン予想（GRH）の証明を主張する PDF を公開した。PDF のため本文は取得せず、コメントと Terence Tao のブログ記事から要約している。コメントによれば証明は Lean で形式化済みで、サイズは約1.3GB・約1500万行に及ぶ。議論の焦点は、AI が大きく関与した成果が数学コミュニティの検証能力を超えつつある点にある。

> **関連:** #3「Hurried Announcement: Alessandro Masullo GRH」も参照（同日に出た別の GRH 証明の主張）
> **関連:** #7「Finite-time blow-up for the Navier–Stokes equations」も参照（同じ Alpöge 氏による同日の成果）
> **関連:** #8「Unforced Navier-Stokes Singularity and the Generalized Riemann Hypothesis」も参照（同じ成果群に対する Tao 氏の解説）

### Key Discussion Points

- **Jaxan**: 完全に人間だけによる別の証明もあるようだと、Vakil 氏のブログ記事を紹介。
  - **hkmaxpro**: 人間のみの証明に AI が誤りを見つけたという報告があるが、修正可能かは不明だと指摘。
  - **zeraye**: 両者のアプローチが似ているのか、専門家による比較を求めた。
  - **__MatrixMan__**: 両方が正しく、構造が大きく異なるなら、証明の差から AI 支援か否かの違いを特徴づけられるかもしれないと述べた。
- **z7**: Tao 氏が1か月前に「現在の AI を超える何かが必要で、2050年ごろに人間と AI の組み合わせで進展する」と語っていた発言を引用。
  - **Legend2440**: 「新しいアーキテクチャが必要」と言われるたびに、結局はスケーリングで足りてきたと反論。
  - **JamesSwift**: Tao 氏の懐疑には、AI が使い手の手の中のツールである点の見落としがあると指摘。
- **djoldman**: 証明は 1.3GB・約1500万行の Lean コードで、ダウンロードと展開の手順を示した。
  - **causal**: Lean にバグがあると、大規模なエージェント群がそのバグに依存した証明を見つけうると懸念。
  - **hafeoz**: 480コア Xeon でコンパイルに2.4時間、89GB の出力が出たと報告。
- **ariwilson**: 人間の数学者が謙虚に結果を発表する形は、マーケティング色の強い OpenAI の投稿より好ましい。ただし人間が証明してほしかったという寂しさも述べた。
  - **alex43578**: サターンV で月に着陸しても偉業が減るわけではないと反論。
  - **foolserrandboy**: 150年未解決であり、人間の作業記憶の限界から AI を使うしかない可能性もあると述べた。
- **puff_pastry**: 正しければ数学・計算機科学・AI にとって大きな出来事だが、論証が非常に長く検証が追いつくかが心配だと述べた。
  - **Waterluvian**: 答えと理解が切り離されつつあると指摘。
  - **andrewla**: 「RH が真と仮定する」結果は多数あり、影響は分野によって異なると冷静に見ている。

## 2. [Frostbite: A new CPU architecture discovered, designed and verified by AI](https://architectlabs.com/blog/frostbite)

**Score:** 541 | **Comments:** 290 | [Post](https://news.ycombinator.com/item?id=50572503)

Architect Labs が、AI が ISA からマイクロアーキテクチャ、RTL、検証、GDS までを自律的に反復して設計した汎用 CPU「Frostbite」を発表した。interaction nets の性質（各ステップがローカル、依存が明示的、値の所有者が1つ）を利用する。25のワークロードで、デュアルイシュー・インオーダーの実績あるコアに対して 4.59 倍の性能/電力を達成したという。

### Key Discussion Points

- **shioyama**（投稿者）: コメント欄が否定的で落胆した。interaction nets は根本的に異なるプログラミングパラダイムなのに、理解されていないのではないかと述べた。
  - **quaintdev**: interaction nets を初めて知ったとし、記事末尾のリンク先の説明のほうが分かりやすいと紹介。
  - **catapart**: 何が提案されているのか輪郭がまだぼやけており、詳しい人の説明を求めた。
- **throwaway_new_1**: AI が人間不在で磨き上げた極限の性能や UX を期待するが、現状は品質の低い製品を大量に出す競争になっていると不満を述べた。
  - **afavour**: 消費者向けコンピューティングは常に「ほとんどの場合動く」程度の品質だったと反論。
  - **rickdeckard**: AI は品質の最適化には向いていないと述べた。
- **jkhdigital**: タイトルは誤解を招く。着想は人間が出し、AI は研究文献の知見を統合して製品に仕上げたのだと指摘。
  - **pona-a**: AI 研究のゴールは科学の前進ではなく、人間を置き換える製品を売ることだと批判。
- **pizza234**: 比較対象が最新のアウトオブオーダーではなくインオーダーで、評価プログラム数も少ないと懐疑的。
  - **kragen**: 主張は絶対性能ではなく性能/電力で、アウトオブオーダーはその指標で不利だと補足。
  - **petra**: アーキテクチャ記述言語を既存のシミュレーション言語ではなく RTL と比べている点も奇妙だと指摘。
- **burpingtree**: 他の代替アーキテクチャ同様「十分に賢いコンパイラ」頼みに見え、今回なぜ成功するのか不明だと述べた。

## 3. [Hurried Announcement: Alessandro Masullo GRH](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/)

**Score:** 533 | **Comments:** 185 | [Post](https://news.ycombinator.com/item?id=50579568)

Ravi Vakil が、Alessandro Masullo による GRH の証明案を急ぎ公表したブログ記事。Brian Conrad が数か月かけて詳細にチェックしてフィードバックを返しており、「AI は一切使わない人間だけの仕事」だという。本来は Stanford で文章を磨いてから発表する予定だったが、現状の草稿を公開することにした。

> **関連:** #1「Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf]」も参照（同日に出た別の GRH 証明の主張）

### Key Discussion Points

- **prometheus1992**: Conrad 氏が検証のため Anthropic に証明を渡し、それが漏れた可能性はないかと推測。
  - **ls612**: 証明はまったく別物なので考えにくいと回答。
  - **menaerus**: 過去にも似た例が数百件あったと主張（根拠は示されていない）。
- **morsch**: 人間の仕事とはいえ、レビューした同僚が Claude を使い、学習データに入った可能性を疑う。
  - **nicce**: 科学者はもう Claude や OpenAI に重要な内容を入れられないと述べた。
- **Kotlopou**: 940ページあり、冒頭の 1.1.1 節が空だと指摘。ただし Conrad 氏は詐欺師ではないはずだと述べた。
  - **woopwoop**: Masullo 氏は Conrad 氏の元学生で12年取り組んでおり、Conrad 氏らの承認があるわけではないと補足。
- **brap**: 1000ページ近い数学を他の数学者が読んで検証するのが通例なのかと質問。
  - **hkmaxpro**: 今年からは AI で検証が速くなったと回答。
- **JoshTriplett**: 今がこの証明の「適切な時期」だったのか、AI の影響かと問いかけた。
  - **qnleigh**: 人間の証明が誤っている可能性も相応にあり、誰もが共有を急ぐ状況だと指摘。
  - **efields**: 「隣接可能性」の考え方を引いて、時期が熟していたのだと述べた。
- **mmmaantu**: 証明は無効だとするリンクを貼った。
  - **muglug**: その人物は過去にも多数の証明を持ち込んでいる「クランク」だと反論。

## 4. [If you can't explain something in simple terms, you don't understand it (2017)](https://kottke.org/17/06/if-you-cant-explain-something-in-simple-terms-you-dont-understand-it)

**Score:** 527 | **Comments:** 265 | [Post](https://news.ycombinator.com/item?id=50572355)

Kottke の2017年の記事。Feynman が「スピン 1/2 粒子がフェルミ・ディラック統計に従う理由」を新入生向けの講義にしようとして、最終的にできなかったという逸話を引き、「単純に説明できなければ理解していない」という通説に疑問を投げかける内容。

### Key Discussion Points

- **seanhunter**: この考えは、理解の努力をしたくない人が説明者のせいにする口実に使われがちだと批判。
  - **stingraycharles**: 単純な説明は短いとは限らず、3Blue1Brown は複数本の動画で LLM を分かりやすく説明していると指摘。
  - **kccqzy**: コンパクト性の定義は初学者には不適切で、点列コンパクトのほうが直感的だと例示。
  - **Francute**: 前提知識が必要な定義は「単純な説明」ではないと述べた。
- **mr_mitm**: 記事は Feynman と Gruber の引用を並べただけで洞察が乏しく、「新入生レベルで」という条件を落として誤解を招くと指摘。
  - **rocqua**: 磁力の例自体が記事の主張への反例になっていると述べた。
  - **okayman**: 学習は層であり、「単純な言葉」と「馴染みのある言葉」は違うと述べた。
- **keeda**: 「単純に説明できるが、あなたの持ち時間では足りない」。単純であることは短いことを意味しない。
- **tgv**: 対象は誰か。例えば NP を「計算が難しいもの」と言っても説明として役に立たないと指摘。
  - **danlitt**: 非多項式時間の「明らかに悪いアルゴリズム」を示せば NP の説明はそう難しくないと反論。
  - **xlii**: 「確認は簡単だが解くのは簡単でない」という説明を例示した。
- **Frost1x**: 複雑さが常に還元可能とは限らず、この主張は還元主義を前提にしていると述べた。
  - **QuadmasterXLII**: 単純に説明できないものは、そもそも理解できないものなのかもしれないと指摘。

## 5. [Signal Is Serious About Protecting Your Privacy](https://signal.org/blog/protecting-your-privacy/)

**Score:** 359 | **Comments:** 221 | [Post](https://news.ycombinator.com/item?id=50572348)

Signal の Meredith Whittaker による記事。昨年の Windows 11 の Recall 対策と同様に、iOS 27 や Android に組み込まれた AI エージェント（Gemini、Siri AI の Onscreen Awareness 等）が Signal の画面を読み取って保存することを、検出できる範囲で制限すると発表した。OS ベンダーがアプリの動作環境を支配している点を問題視している。

### Key Discussion Points

- **pajamasam**: Whittaker 氏のインタビューでも、AI アプリがデバイス上で過剰なアクセスを持つ問題を語っていたと紹介。
  - **ls612**: Siri AI の設定は「許可」「ローカルモデルのみ」「拒否」にしてほしいと述べた。
  - **amelius**: Signal OS や Signal フォンの時期なのかと問いかけた。
- **ada-h00k**: ユーザーにスパイウェアの存在を警告し、GrapheneOS や Linux を勧めるべきだと主張。
  - **TeMPOraL**: GrapheneOS も別の組織に乗り換えるだけで、どちらも所有者に対して端末を保護する思想だと批判。
  - **rcxdude**: 制御を取り戻せば、アプリ側の制限も上書きできてしまうと指摘。
- **cimnine**: Signal が「フォレンジック調査」の結果を公開すれば、小規模な開発者も利益を得られると要望。
- **einszwei**: 電話番号なしの登録には決済手段が必要で、どちらも身元に結びつく。Monero 等の暗号通貨での支払いを望んだ。
  - **coherentpony**: プライバシーと匿名性は別物だと指摘。
  - **Grombobulous**: スパムボット対策だろうと推測。
- **lukeschlather**: Windows で Signal のスクリーンショットが撮れなくなり不便だと不満を述べた。
  - **jddecker**: 設定のプライバシー内「画面セキュリティ」をオフにすれば撮れると回答。
  - **drnick1**: ユーザーが root を持つ Windows で、どう強制しているのか不思議だと述べた。

## 6. [Language Models Can Rewrite Their Own Weights](https://arxiv.org/abs/2611.21885)

**Score:** 233 | **Comments:** 90 | [Post](https://news.ycombinator.com/item?id=50577265)

arXiv 論文。勾配も学習も使わずに、オープンな 27B モデルが自分の重みと採点済みの回答にアクセスして失敗を診断し、重みを書き換えることで性能を向上させたという。未見の問題で精度が 6.6 ポイント上がり、練習問題で試して有効な編集だけを採用する形で改善を重ねるとされる。

### Key Discussion Points

- **aesthesia**: モデルが自分で行った改善は、推論トレースを短くしてトークン上限に達しにくくしただけだと指摘。
- **Toutouxc**: 「学習なし」という主張がどういう意味か、誰かに説明してほしいと述べた。
- **xhrpost**: 「忠実度の向上は必ずどこかから来るはずだ」と、主張の根拠を問いかけた。
- **woah**: 最近の重み書き換え系の論文は現状の能力より示唆に価値があり、実際は分析スクリプトによる単純な調整だと評価。
- **samlinnfer**: モデルに自分の重みを修復させる訓練を行えば、さらに改善できるのではと提案した。

## 7. [Finite-time blow-up for the Navier–Stokes equations](https://github.com/tristanbuckmaster/navier-stokes/)

**Score:** 179 | **Comments:** 55 | [Post](https://news.ycombinator.com/item?id=50576232)

Alpöge と Buckmaster による論文「Finite-time blow-up for the Navier–Stokes equations」（79ページ）とその Lean 4 形式化のリポジトリ。形式化は約2270ファイル・60万行で、ビルドには大量のメモリと時間が必要と説明されている。

> **関連:** #1「Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf]」も参照（同じ Alpöge 氏による同日の成果）
> **関連:** #8「Unforced Navier-Stokes Singularity and the Generalized Riemann Hypothesis」も参照（同一成果に対する Tao 氏の解説）

### Key Discussion Points

- **xianshou**: GRH と非強制 Navier-Stokes が同じ日に出るのは、これが「2番目の大きな成果」であることも含めて異常だと述べた。
- **tancop**: これは外力のない「非強制」版で、外力を設計した OpenAI の例より「現実的」だと説明。
- **jrflo**: Anthropic が大きな問題を解いたという噂がなければ、Buckmaster 氏らは自力で到達できたはずだと同情を示した。
- **Ericson2314**: 流体が「奇妙に」なる様子を示す物理的なデモがあれば決定的だと述べた。
- **makmanalp**: 他のスレッドと同様、トランスクリプトと開発履歴を公開してほしいと要望した。

## 8. [Unforced Navier-Stokes Singularity and the Generalized Riemann Hypothesis](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/)

**Score:** 131 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=50578358)

Terence Tao のブログ記事。Alpöge、Buckmaster、Coiculescu による3次元の非強制 Euler 方程式の有限時間爆発（人間が読める証明で Lean 形式化済み）、Alpöge と Buckmaster による非強制 Navier-Stokes の有限時間爆発（AI を多用し Lean 形式化あり）、そして GRH の証明主張を、検証が進んでいる順に紹介している。

> **関連:** #1「Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf]」も参照（Tao 氏が紹介している GRH 主張）
> **関連:** #7「Finite-time blow-up for the Navier–Stokes equations」も参照（Tao 氏が紹介している Navier-Stokes の成果）

### Key Discussion Points

- **softwaredoug**: 既存の抽象や概念の上で総当たりの生成と検証によって進んでいるように見えるが、新しい概念は生まれているのかと数学者に質問。
- **maplet**: Tao 氏が意義に触れず淡々と書いている点に驚いたと述べた。
- **actusual**: 興奮と恐怖が同時に来て、キャリアへの不確実性を感じると吐露した。
- **AndrewKemendo**: この記事は Tao 氏自身の投稿であり、他者の転載が多い同氏のブログでは見落とされがちな点だと指摘。

## 9. [We promoted developers into architects without informing them](https://manidoraisamy.com/developer-to-architect.html)

**Score:** 76 | **Comments:** 37 | [Post](https://news.ycombinator.com/item?id=50579331)

Google Forms アドオンの性能問題を例に、AI が書いたログ処理（メールが取得できなければユーザー ID、それも駄目なら…とフォールバックを重ね、各呼び出しが複数の API を叩く）でウェルカム画面の表示に15秒かかった経緯を紹介する。AI にコードを書かせる開発者は、API の裏側のコストを理解して判断する「アーキテクト」の役割を、知らないうちに担わされているという主張。

### Key Discussion Points

- **whycombinetor**: どの職場でも要件への異議やデータモデルの設計は開発者に期待されており、新しい話ではないと述べた。
- **uptrails**: 昇進ではなく、LLM の決定の責任を負うだけの「責任の吸収役」になり、給与も仕事の楽しさも下がるだろうと悲観。
- **pjmlp**: アーキテクトは1チームに1人で足りる。オフショア時代にチームリードになった開発者と同じ構図だと述べた。
- **mellosouls**: 下流への移動は昇進ではなく、アーキテクチャも AI の影響を免れない。筆者は AI の使い方が悪いだけだと指摘。
- **bikeshaving**: AI の仕事の大半は癖の管理で、エージェントが不要なログ基盤を作り込む傾向を指摘し、自身の経験を挙げた。

## 10. [Vibecoding an Inference Chip](https://ankitg.me/blog/vibecoding-inference-chip/)

**Score:** 38 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=50579297)

コーディングエージェントを使い、FPGA 上で LLM を動かす推論チップを「バイブコーディング」で作った体験記。FPGA はこれまで馴染みがなかったが、エージェントのおかげで新しい領域に踏み込め、潤沢なトークン予算の下で何度も驚きを経験したという。

### Key Discussion Points

- **cpldcpu**: Opus 4.5 で似たもの（smollm.c）を作った経験があり、トランスフォーマーの実装は AI 支援コーディングの新しい「Hello World」だと述べた。
- **saejox**: RTX 3090 で FPGA をエミュレートして、AWS EC2 F2 で1日数時間だけ試す方法を提案。
- **datadrivenangel**: モデルの種類とサイズが書かれていないが、トレースに Maple（20b）とあり、約70+ tok/s は良い結果だと分析。
- **chalkycrimp**: コードの公開を求めた。

## Trends

- **AI による数学・科学の大きな主張が同日に集中**: GRH（#1、#3）、Navier-Stokes（#7）、Tao 氏の解説（#8）が重なり、上位を占めた。論点は正しさの検証、証明の巨大さ、人間による理解、AI 企業との関わりだった。
- **AI 設計のハードウェアと AI の自己改善**: Frostbite（#2）、FPGA 推論チップ（#10）、重みの自己書き換え（#6）に共通するのは、AI の成果を鵜呑みにせず、評価の妥当性や誇張を疑う声が強い点。
- **AI エージェントの影響範囲**: Signal の OS 内蔵 AI 対策（#5）や、開発者が暗黙にアーキテクトの責任を負う話（#9）など、AI が既存の役割や境界を変えつつある。
- **「理解」とは何か**: #4 の議論と、#1・#6 の「答えと理解の分離」の議論は、同じ問題意識でつながっている。
