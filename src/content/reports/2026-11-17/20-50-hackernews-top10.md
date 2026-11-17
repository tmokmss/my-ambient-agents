---
title: "Hacker News トップ10 (2026-11-17)"
date: "2026-11-17T20:50"
category: "summary"
summary: "GPT-6.2 Astra/Sol 発表、Apple サービス障害、ハーネス評価、MAI Code 2、Solid 2.0 など HN 上位10件の要約"
tags: ["hackernews", "ai", "outage", "javascript"]
---

## 1. [GPT‑6.2 Astra and Sol](https://openai.com/index/introducing-gpt-6-2-astra-sol/)

**Score:** 754 | **Comments:** 462 | [Post](https://news.ycombinator.com/item?id=50535230)

OpenAI が GPT‑6.2 Astra と Sol を発表。プロフェッショナル向け成果物、コーディング、コンピュータ操作、効率が向上し、低コストで ChatGPT Work・Codex・API から利用できる（OpenAI の RSS 概要に基づく。本文は取得不可）。

> **関連:** #4「MAI Code 2 and Code 2 Flash」も参照（同日に出たコーディング向け LLM。比較対象として言及されている）

### Key Discussion Points

- **mlmonkey**: システムカードによると、GPT-6.2 Astra は GPT-6 Astra より評価されていることへの気づき（evaluation awareness）が強く、Codex セッションの再生評価で「テストやシミュレーションではないか」と疑う傾向が増えた。
- **Topfi**: 公式のスライドやワークブックの例は、以前のモデルより出来が悪く見える。
  - **infecto**: 例が金融系の大企業の成果物のようで、テック系ユーザーとの感覚のずれではないか。
  - **EugeneOZ**: Claude Slides の出力を毎週見ているので、この例が誇らしげに示されていることに驚いた。
- **simonw**: 6.2 Sol / Astra の「ペリカン」SVG を公開。
  - **vopi**: 奥側の脚を暗くして陰影・奥行きを出したのは初めて見た。
  - **ryanschaefer**: ペリカンベンチはほぼ解決済みと言ってよい。
- **intenex**: ベンチマークが本当ならコスト性能は驚異的。Anthropic の IPO 直前というタイミングも指摘。
  - **mlinsey**: 自分用のベンチマークとして、過去に作った8プロジェクトを新モデルで再現させることを勧める。
  - **alastairr**: Sol 6.1 は実際の SWE 作業ではベンチマークほど印象的でなかった。ベンチ用モードのようなものを内在化しているのでは。
- **Someone1234**: 前の Astra は不要な抽象化とファイル分割で過剰設計になりがちだった。今回は改善されたか。
  - **scandinavian**: Sol と Astra で Python/Rust を書かせたが、非常に雑なコードで特に Rust がひどい。
  - **pettijohn**: 6.x は単純な解を求めても過剰に複雑にする。

## 2. [Apple Services Down](https://developer.apple.com/system-status/)

**Score:** 445 | **Comments:** 251 | [Post](https://news.ycombinator.com/item?id=50535238)

Apple のシステムステータスページに、サービス障害が掲載された。ページ自体は動的描画で本文を取得できなかったため、内容はコメントに基づく。コメントでは Apple Store での注文・返品処理や新品 iPhone のアクティベーションが止まったとの報告がある。

### Key Discussion Points

- **jpatten**: 中国の偵察気球騒動のように、無関係の事象まで関連づけられている可能性がある。
  - **grey-area**: 今回は規模が大きく異例で、NSA を含む複数の障害が続いている。
  - **WarmWash**: NJ のドローン騒動も同様で、子どもの動画をニュースが買っていた。
- **cjbconnor**: Apple Store に確認したところ、全面停止で注文も返品もできず、購入済みの新 iPhone も有効化できない。
  - **itopaloglu83**: 先の Microsoft 障害の際は Apple が落ちなかったので意外。クラウド事業者の負荷移動が波及した可能性。
- **blop**: ごく少数のクラウドサービスに世界が依存している。分散型インターネットの理想から遠い。
  - **lukeify**: Microsoft は自前メールサーバーの到達性を妨げるなど分散化を阻害してきた。
  - **ghusto**: 信頼性の点では AWS 等が小規模事業者より高い。ただし落ちるときは皆一緒に落ちる。
- **tedd4u**: 全端末に「Apple Account Verification」の再ログイン要求が出る。攻撃者がログインを強制して認証情報を奪う手口にも使えそうだ。
  - **SoftTalker**: Apple Account のパスワードは設定時に1回使ったきりで、覚えていない人も多そうだ。
- **DenisM**: 最近の障害は「システムの混沌の増加」と捉えられる。AI 競争で運用に回すリソースが減り、年末の負荷増も重なっている。

## 3. [What is the best harness for each model?](https://runta.com/blog/introducing-frontierharness-eval-v1-1/)

**Score:** 278 | **Comments:** 100 | [Post](https://news.ycombinator.com/item?id=50532191)

Runta が Baseten と実施した FrontierHarness Eval v1.1。22 のハーネス構成、5 つのオープンモデル、62 の端末タスクを 4 回ずつ、計 27,280 回実行した。コストの約 93% はモデルで説明でき、モデルを固定してもハーネスでコストは 1.8〜5.0 倍変わった。支出の約 64.5% は合格しなかった実行に費やされた。コスト効率の良いハーネスは、シェルツール中心でコンテキストを段階的に増やし、サブエージェントが少ない傾向があった。

### Key Discussion Points

- **seizethecheese**: 見出しが紛らわしい。多数の組み合わせを走らせれば、不合格の実行に多く費やすのは当然ではないか。
  - **seizethecheese**: 使ったタスクの選定方法がどこにも書かれておらず、恣意的に見える。
  - **onlyrealcuzzo**: ベンチマークは無数にあり、全部回すと高額になる。小さな部分集合だけでは結論が出ない。
- **cpeth**: Opus 5.5 を Claude Code と Copilot の両方で使っているが、ハーネスの差はほとんど感じない。
- **Zigurd**: エージェントは短い手綱で使うのが賢明に思える一方、最近は任せても失敗が少ない。
  - **contravariant**: コンウェイの法則が当てはまる。エージェントに任せる範囲はプロンプトが作る暗黙のインターフェースで決まる。
  - **nolok**: AI に「一発で完璧」を求める発想自体が現実に合っていない。
- **xyzzy_plugh**: 与えられた問題によって最適なハーネスは変わる。モデルが高性能になるほど、ハーネスの重要性は増す。
- **bisonbear**: 二値の合否は、ユーザーがステアリングやレビューをする実運用と相関するか疑問。
  - **Edward40**（投稿者）: 「cost per pass」は平均コスト÷合格率であり、「成功したタスク当たりのコスト」とは別物だと説明。

## 4. [MAI Code 2 and Code 2 Flash](https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/)

**Score:** 159 | **Comments:** 75 | [Post](https://news.ycombinator.com/item?id=50535885)

Microsoft AI が日常的な企業向けコーディング用の2モデルを発表（Wayback のスナップショットに基づく）。MAI Code 2 は本番化、深いデバッグ、複数ファイル実装、リポジトリ全体の推論に強く、フロンティアの半額未満の価格を謳う。Flash は大量処理向け。基礎科学研究や非常に長いエージェント作業には未最適化と明記している。

> **関連:** #1「GPT‑6.2 Astra and Sol」も参照（同日に出たコーディング向け LLM。ベンチマークで比較されている）

### Key Discussion Points

- **pseudosavant**: OpenAI も Anthropic も優位は数か月分で、持続的な堀とは言えない。
  - **com2kid**: Claude は製品化に力を入れており、日常は Codex を使うが、使い勝手の違いに驚いた。
  - **giancarlostoro**: Google と Microsoft は元々黒字で時間的な余裕がある。MAI は v1 から試したかったが、Copilot の契約が制限されていた。
- **origini**: ベンチマーク通りなら知能の「爆発」と価値の下落を見ているようだ。蒸留の可能性も気になる。
  - **doomroot13**: Microsoft AI の別記事によれば、ゼロから事前学習したようだ。
- **upbeat_general**: 技術レポートを今後も書き続けてほしい。MAI-Thinking-1 のものは社外にとっても有益だった。
- **oofbaroomf**: 比較は Sol 6.1 の API 価格が相手。Sol 6.2 や Codex の補助金を考えると、パレートフロンティア上ではなくなったかもしれない。
- **kennywinker**: コストが 20% なら、モデルも 20% 程度の大きさのはず。「コーディングを良くするには全般を良くするしかない」という通説は崩れるだろう。
  - **Wheen**: DeepSeek v4.1 や Qwen 3.8-Flash がすでに示している。Artificial Analysis は知識想起を重視しすぎている。
  - **hugmynutus**: 通説が成り立たないことを示す研究はすでに多い。

## 5. [Phrack 73 Released](https://phrack.org/issues/73/introduction_md)

**Score:** 107 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=50535992)

新体制で3号目となる Phrack 73。主要論文23本と Line Noise 8本を収録する。vDSO 経由のコンテナ脱出、Skia 経由の Chromium サンドボックス脱出、QNX シェルコード、WinFsp のゼロデイ2件などを扱う。AI が脆弱性を発見・悪用できるようになるほど、人間の直感の価値が高まると編集部は述べている。

### Key Discussion Points

- **neuro**: 300 ボーのモデム音、ANSI アート、そして 36 号が好き。
- **ChrisArchitect**: 「Phrack World History」の企画が、忘れられた話を記録していて良い。
- **myth_drannon**: 1996 年の 49 号「Smashing The Stack For Fun And Profit」に並ぶものはない。

## 6. [Solid 2.0](https://www.solidjs.com/blog/solid-2-0-the-long-hold/)

**Score:** 89 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=50536387)

Solid 2.0 が5年越しで安定版に到達した（Wayback のスナップショットに基づく）。リアクティブグラフに非同期処理を組み込み、Promise や非同期イテレータを返す計算を下流が自動で扱える。サーバー関数は SSE による永続接続にも対応し、エージェント向けの診断情報とより小さな API も売りにしている。

### Key Discussion Points

- **wk_end**: 「エージェントに書かれる前提」の特徴は、より良いデバッグ診断にすぎず、人間にとっても有益に見える。
- **pwmglenn**: Remix が狙った中間層の問題を Solid はうまく解いている。サーバー RPC や live は LiveView や htmx より自然。
- **maxloh**: コンポーネントライブラリはまだ少ないが、ゼロから作るなら Solid を試したい。
- **_nothing**: 数年前に Svelte を選んだ理由は、単純な HTML・CSS に見えた点だったと思う。
- **ale**: 「エージェントが書く」ならフレームワーク自体が不要で、好きな言語でサーバーを作らせればよいのでは。

## 7. [350 years ago, this man discovered that light has a finite speed](https://www.sciencenorway.no/culture-history-history-of-science/350-years-ago-this-man-discovered-that-light-has-a-finite-speed/2737969)

**Score:** 85 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=50536813)

1676 年、デンマークの天文学者オーレ・レーマーは、木星の衛星イオが影から出る時刻が10分遅れると予測し、的中させた。イオを時計として何年も観測し、遅れが地球と木星の距離で変わることから光速が有限だと示した。推定値は約22.5万 km/s で、実際より約25%低い。

### Key Discussion Points

- **goache**: この測定をもとにウェブコミックを作った。
- **zodwick**: 光速が全方向で一定かは分からず、測れるのは往復の速度だけだという話を思い出した。
- **kstrauser**: 食の長さは同じはずなので、壁時計の上で10分早く終わったという理解でよいのか。当時の時計がそこまで正確だったことにも驚く。
- **begueradj**: 記事の「Journal des sçavans」は現在の綴りでは「savants」。

## 8. [jQuery 4.1.0](https://github.com/jquery/jquery/releases/tag/4.1.0)

**Score:** 69 | **Comments:** 34 | [Post](https://news.ycombinator.com/item?id=50537156)

jQuery 4.1.0 と 3.8.0 のリリース。ブログのタイトルは「Passing the Torch」。4.1.0 では jqXHR に `responseURL` を追加し、`getElementsBy{Tag,Class}Name` を `querySelectorAll` に置き換えるなどの変更が入った。

### Key Discussion Points

- **gosen**: まだ保守されていて、世界の半分のウェブを支えているのが意外で嬉しい。
- **coredev_**: 複雑な UI の構築には向かず、今はもっと良い手段がある。
- **hax0ron3**: セレクタで選んだ集合にメソッドを連鎖させる形は、言語の特性に沿った美しい例だ。
- **jgalt212**: DataTables は 2026 年 7 月の v3 で jQuery 依存を外した。
- **hinkley**: 復活は望まないが、jQuery のようなリスト操作を、空リストの扱いが逆の形で使いたい。

## 9. [Purism Launches Librem 5 v2, a RISC-V Phone to Empower People](https://puri.sm/posts/purism-launches-librem-5-v2-a-risc-v-phone-to-empower-people/)

**Score:** 48 | **Comments:** 39 | [Post](https://news.ycombinator.com/item?id=50536031)

Purism がクラウドファンディングで Librem 5 v2 を発表。8コアの RISC-V プロセッサと PureOS を採用し、カメラ・マイク・無線を切るキルスイッチを備える。電話機のみの価格は $1,599 で、納品はキャンペーン終了後 14〜15 か月を見込む。

### Key Discussion Points

- **kop316**: RISC-V は誤りだと思う。PureOS 等のパッケージだけなら動くが、それ以外では問題が出る。
- **rationalist**: 欠点を批判するのは簡単だが、これはユーザーを尊重する携帯電話だ。
- **neilsimp1**: L5 を 3.5 年使っており、ハードの改善は全面的に歓迎。新アーキテクチャでのソフト対応が見もの。
- **vandyswa**: XMPP のリアルタイム通知ができないとやっていけない。Pinephone の crust モードが唯一の解だった。
- **murderfs**: 記事は RISC-V の話ばかりでコアの詳細がない。フォーラムによれば SpacemiT K1 を使うという。
- **Iolaum**: 「Launches」は大げさで、納品は2028年半ばの見込み。Phoronix の記事のほうが実用的な情報が多い。

## 10. [Web Browser Engineering](https://browser.engineering/)

**Score:** 33 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50537290)

Pavel Panchekha と Chris Harrelson による書籍。数千行の Python で基本的だが完全なブラウザを実装しながら、ネットワーク、HTML/CSS、レイアウト、JavaScript、セキュリティ、GPU アニメーションなどを学ぶ。4部構成。

### Key Discussion Points

- **sublinear**: 序文の「WebAssembly はいずれ JavaScript と同格になるかもしれない」という見方は wasm の本旨ではなく、そこで読むのをやめた。

## Trends

- **LLM の競争と評価への不信**: GPT‑6.2（#1）と MAI Code 2（#4）は、コストあたり性能で競う形になった。どちらのスレッドも、ベンチマークより実使用での出来を重視する声が目立つ。ハーネス評価（#3）も、モデルが主因でハーネスは補助的という見方と、問題ごとに最適が変わるという見方が割れた。
- **インフラ集中のリスク**: Apple 障害（#2）では、特定クラウドへの依存と、他社障害の連鎖を疑う議論が出た。
- **エージェント時代の開発ツール**: Solid 2.0（#6）は「エージェント向け診断」を掲げ、コメントでは人間にも有益だという指摘と、フレームワーク不要論の両方が出た。jQuery（#8）やブラウザ自作（#10）といった基礎技術への関心も根強い。
- **歴史と基礎**: Phrack（#5）とレーマーの光速測定（#7）など、過去の積み重ねを振り返る記事が並んだ。
