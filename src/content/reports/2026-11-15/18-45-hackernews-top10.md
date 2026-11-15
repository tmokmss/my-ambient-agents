---
title: "Hacker News トップ10 (2026-11-15)"
date: "2026-11-15T18:45"
category: "summary"
summary: "Starship Flight 15 の船体キャッチ成功、AI生成コードのOSS化論、MacBook Pro OLED の PWM 問題など"
tags: ["hackernews", "spacex", "ai", "oled", "emacs"]
---

## 1. [SpaceX catches the Starship to end Flight 15](https://www.spacex.com/launches/starship-flight-15)

**Score:** 1531 | **Comments:** 1063 | [Post](https://news.ycombinator.com/item?id=50500963)

SpaceX が Starship Flight 15 の最後に、上段（Ship）をキャッチして回収したという発表。公式ページは本文を取得できなかったため、コメントから推測した要約。コメントによると今回のフライトでは Starlink 衛星26機を展開している。

### Key Discussion Points

- **Zigurd**: スペースシャトル以来初の再使用型上段の実証として意義は大きい。ただし「新時代の到来」ではなく「新時代の可能性」にすぎず、実用システムになるまでには多数のマイルストーンが残っていると指摘。
  - **NitpickLawyer**: 前回は衛星20機（Falcon 9 の約10回分の Starlink 帯域相当）、今回は26機（約13回分）で、コスト面の優位は大きいとの見方。
  - **oconnor663**: 有人運用には脱出系の再設計か前例のない信頼性が必要だが、本当に高頻度で再使用できるなら後者も非現実的ではないと述べた。
  - **pfdietz**: シャトルは推進剤タンクが再使用不可だったため、上段再使用の実証ですらなかったと反論。
- **small_model**: ヒートシールドが持つなら状況が一変する。次は両機のキャッチと同一機体の再フライト、そして低コストな軌道投入だと期待。
  - **modeless**: 検査結果の開示を待っている。整備なしの再フライトが最後の目標。
  - **bryanlarsen**: 高速再使用の目標に届かなくても、タイル交換は新規上段の製造より安く、燃料費以下になりうる。
  - **beezlewax**: 着陸ではなくキャッチがなぜ新時代につながるのかと質問。
- **ChuckMcM**: エンジニアリングチームを称賛。ブースターにあと数トンの推進剤があれば両方キャッチできたかもしれないと推測。
  - **vl**: 今回約50トンを投入しており、このままでも軌道投入価格は大きく下がる。
  - **throwaway2037**: 上記の推進剤の話の意味を質問。
- **GMoromisato**: Starship は「正しく作られたスペースシャトル」で、固体ブースターを使わず、オービターを上に積み、組立ライン方式で生産する。
  - **bumby**: シャトルが複数の発注元の要求で妥協設計になった経緯は Starship にはないと指摘。
  - **mag7269**: 民間企業は官僚組織より効率的に動くと主張。
  - **mk_stjames**: シャトルは初飛行で2人を乗せて帰還した。Starship が同じことをするまでは留保を持ち続けると述べた。
- **niek_pas**: ロケット打ち上げの CO2 排出は気候問題になるほど大きいのか。
  - **serbuvlad**: 約1000トンのメタンは CO2 約2750トン相当で、ガス発電所1基の1日分以下。
  - **Cu3PO42**: 現状は他の排出源が桁違いに多く、影響は小さい。
  - **sacred_numbers**: 気候に影響する頻度の打ち上げが可能なら、軌道上の日除けや宇宙太陽光で解決できるとの見方。

## 2. [All AI-generated code should be Open Source](https://jakub.jankiewicz.org/blog/ai-code-open-source/)

**Score:** 664 | **Comments:** 357 | [Post](https://news.ycombinator.com/item?id=50507303)

AI が生成したコードは人間の著作物ではなく著作権の対象にならないはずで、学習元にもOSSが含まれる以上、すべてオープンソースにすべきだという主張。記事本文は取得できなかったため、タイトルとコメントから推測した要約。

### Key Discussion Points

- **blagie**: 複数の AGPL システムの作者。ある企業に自分のコードを無断利用された後、LLM にクローンを作らせて回避された。出来は悪いが創作内容は自分のものに近いと述べた。
  - **Aurornis**: 「ほぼそのまま出力した」という主張に具体例はあるのかと質問。
  - **thephyber**: IP 侵害の核心は創作性の類似であり、Katy Perry の訴訟のように判断は難しい。
  - **hmokiguess**: どのリポジトリか尋ねた。
- **trentnix**: クローズドソースと著作権なしの間には広い領域がある。StackOverflow からのコピペ由来のコードも OSS にすべきなのかと反問。
- **jrmg**: 米国著作権局のガイダンスは、AI 利用でも人間の創作的関与があれば保護の余地があるとしている。
  - **timbritt**: 設計判断をチケットに残し、自分の関与を記録している。
  - **rixed**: 学習データの著作者の権利には触れていないのではないか。
- **waximabbax**: 論理を貫くなら OSS フレームワーク利用コードもすべて OSS になる。開発者はコードを書くだけでなく成果に責任を持つ。
  - **Arubis**: 過去にも GPLv3 から MIT 等への移行の背景に同様の解釈があった。
  - **127**: ML モデルによる IP ロンダリングの合法性は未解決。
  - **moritzwarhier**: 人間も派生元を把握せずに派生物を作ることがある。
- **novok**: AI は人間の入力で動くので人間が作ったことになる。写真家がボタンを押すのと同じ。

## 3. [The MacBook Pro's OLED PWM Problem: When a 'Better' Display Becomes Worse to Use](https://macanorak.com/the-macbook-pros-oled-pwm-problem-when-a-better-display-becomes-worse-to-use/)

**Score:** 262 | **Comments:** 153 | [Post](https://news.ycombinator.com/item?id=50506719)

新しい MacBook Pro のタンデム OLED ディスプレイ（PROLED XDR）に対し、PWM 調光に敏感なユーザーが頭痛、眼精疲労、めまい、吐き気を訴えている。MacRumors フォーラムや Reddit で報告が増え、返品した人もいるという内容。

### Key Discussion Points

- **legitronics**: 元データを確認すると、240Hz ではなく 480Hz、最悪でも960Hz に見える。タンデム OLED の2層が位相をずらして駆動している可能性がある。
  - **saltcured**: 光検出器の波形から駆動信号の特性を断定できるのかと疑問。
  - **jrmg**: スコープ画像の周期は約2.08msで、480Hz に近いと同意。
- **a-dub**: 以前の MacBook Pro のディスプレイでも原因不明の眼精疲労があった。時間的ディザリングが関係するのかと疑っている。
- **Velocifyer**: フリッカー以外にも、白色 LED の CRI など、人によって敏感な要素がある。
  - **JoshTriplett**: 質の悪い LED 照明の約60Hz フリッカーも、手を振ると見える。
  - **user_7832**: 影響を受けていても原因に気づかない人が世界に数百万人いるのではないか。
  - **vitaflo**: OLED は動きのコマ落ち（ストゥッター）も気になる。
- **explosion-s**: 脳震盪の経験者。自分にはどの画面も同じように負担で、バックライト付きポスターでは軽い。
  - **Fnoord**: 精神疾患の後に同様に画面を使えなくなった体験を共有。
  - **jareklupinski**: 赤いフィルターの話について確認を求めた。
- **kphorn**: 240Hz なら50%輝度で手を振るとストップモーション効果が見えるはず。
  - **avalys**: 実機で試したが異常は感じなかった。

## 4. [Understanding Positional Embeddings in Modern LLMs](https://magazine.sebastianraschka.com/p/understanding-positional-embeddings)

**Score:** 138 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50506376)

Sebastian Raschka による解説記事。GPT の学習型絶対位置埋め込みから RoPE まで、LLM がトークン位置情報を表現する方法を図、簡単な数式、小さな PyTorch 実装で順に説明する。2026年のオープンウェイトモデルが採用する位置エンコーディングも分類している。

### Key Discussion Points

- **programjames**: 記事は実装の理解に絞られている。本当に理解するには理論が必要で、位置埋め込みは群の表現であり、その見方から導出やパラメータ化ができると指摘。

## 5. [Claude Code and Codex reverse engineered my 1994 Jeep's ECU over a $3 Arduino [video]](https://www.youtube.com/watch?v=WPj3aQ-xxpI)

**Score:** 132 | **Comments:** 64 | [Post](https://news.ycombinator.com/item?id=50463399)

1994年式 Jeep の ECU を、Claude Code と Codex が約3ドルの Arduino 経由でリバースエンジニアリングしたという動画。動画ページは本文を取得できないため、コメントから推測した要約。

### Key Discussion Points

- **libria**: 動画の該当箇所を引用。Claude が燃料ポンプを単独で動かすことを提案し、燃料レールの加圧を続けた。
- **hmokiguess**: 最後に作者が「リポジトリをエージェントに読ませてセットアップさせればよい」と言う点が興味深い。一般人には敷居が高く、「AI エンジニア」の新しい仕事が生まれそう。
- **misterderpie**: LLM は消費者に所有権を返すという意味で、企業の思惑とは別の形で市場を変える。
- **aiiotnoodle**: 自動車のキー追加などに応用できれば、ディーラー頼みの市場を置き換えられる。
- **d1l**: 燃料レール圧が低いなら詰まりやポンプの問題を示すはずで、リーン状態の原因がマップか機械かは不明確だと指摘。

## 6. [Things That Turbo Pascal Is Smaller Than (2011)](https://prog21.dadgum.com/116.html)

**Score:** 123 | **Comments:** 53 | [Post](https://news.ycombinator.com/item?id=50506894)

Turbo Pascal 3.02 の実行ファイル（コンパイラと IDE）は 39,731 バイトで、これより大きいものとして jQuery 1.6 の minified 版（90,518 バイト）、yahoo.com のトップページ、OS X Lion の `touch` コマンド（44,016 バイト）、Wikipedia の C++ ページなどを挙げた2011年の記事。

### Key Discussion Points

- **hawkice**: 開発速度が上がった今、基本原理から作る単純で効率的な OS やプログラミング環境を見てみたい。
- **jbellis**: Anders Hejlsberg の趣味の良さを称賛（Turbo Pascal、Delphi、C#、TypeScript）。
- **jll29**: 空ファイルを作るだけの `touch` が2KBを超えるのは怠慢だと批判。
- **sroerick**: Pascal はなぜ廃れたのか。
- **ttoinou**: バイト数にはそれぞれ歴史や文脈があり、単純な比較は無意味だと批判。

## 7. [Emacs Is My Browser](https://joshblais.com/blog/emacs-as-my-browser/)

**Score:** 90 | **Comments:** 49 | [Post](https://news.ycombinator.com/item?id=50507553)

Emacs の EWW でウェブを閲覧するという記事。モダンなブラウザは気が散りやすいが、EWW なら集中できるという理由で、ユースケースの85〜90%は使えるという。JavaScript 中心の商用サイトは苦手だという制約も述べている。

### Key Discussion Points

- **Arubis**: 静的 HTML やブログには向くが、Reddit や商用サイトは難しい。これを制約と見るか利点と見るかは視点次第。
- **leoc**: 本当に必要なのは HTTP(S) に代わるコンテンツアドレス指定可能なプロトコルで、現状は逆方向に進んでいる。
- **jll29**: Richard Stallman も Emacs からウェブを使うが、動機は思想的なもの。
- **jrootabega**: 2026年に強力なサンドボックスなしでやるのは危険で、Emacs のセキュリティ問題が深刻化しそう。
- **ohaodha**: 「Why I do X in unconventional way」型の記事は、期待した実用的な知見が得られないことが多いと不満を述べた。

## 8. [Notes on Mathematics for Engineers (1959) [pdf]](https://websites.umich.edu/~ners311/CourseLibrary/MathNotes.pdf)

**Score:** 19 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50452621)

1959年の工学者向け数学ノート（PDF）。PDF は本文を抽出できず、コメントもないため、タイトルのみに基づく紹介。ミシガン大学の授業資料サイトで公開されている。

## 9. ['Birdbrain' Is a Misnomer. Crows Make Decisions Faster Than We Can](https://www.nytimes.com/2026/11/15/science/birdbrain-crows-birds-research-decision.html)

**Score:** 16 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=50509023)

NYT の記事で、カラスが人間より速く意思決定をするという研究を紹介している。ペイウォールで本文を取得できず、タイトルとコメントから推測した要約。

### Key Discussion Points

- **bitwize**: カラスやワタリガラスを亡くなった人の生まれ変わりと信じる人を知っている。鳥の知能の研究が進むほど、そうした信念が驚くに値しなくなる。

## 10. [A short explainer on how El Niño works [video]](https://www.youtube.com/watch?v=7_JF3etiAv8)

**Score:** 12 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50509308)

El Niño の仕組みを解説する動画。動画ページは本文を取得できず、コメントもないため、タイトルのみに基づく紹介。

## Trends

- **AI とコード・知的財産**: #2 は AI 生成コードの著作権とOSS化を巡る議論、#5 は AI エージェントによる ECU のリバースエンジニアリング、#4 は LLM の基礎技術解説で、AI がテーマの記事が3件ある。
- **宇宙開発**: #1 の Starship のキャッチ成功が圧倒的なスコアを集め、再使用型上段の実現可能性に注目が集まった。
- **ハードウェア体験と身体への影響**: #3 の OLED の PWM 問題は、仕様上は優れたディスプレイでも一部の人には不快になりうるという話題。
- **小さく集中した計算環境へのノスタルジー**: #6 の Turbo Pascal と #7 の Emacs は、軽量で簡素なツールを評価する流れ。
