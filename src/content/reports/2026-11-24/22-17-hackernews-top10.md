---
title: "Hacker News Top 10 サマリー (2026-11-24 22:17 UTC)"
date: "2026-11-24T22:17"
category: "summary"
summary: "ブラウザ上で動く Nix/Linux「2035 came early」、スプレーボトルの仕組み解説、Check Point 管理サーバーへの侵入キャンペーンなど"
tags: ["hackernews", "summary"]
---

## 1. [2035 came early](https://fzakaria.com/2026/11/23/2035-came-early)

**Score:** 917 | **Comments:** 349 | [Post](https://news.ycombinator.com/item?id=50624497)

Gary Bernhardt の講演「The Birth & Death of JavaScript」が予言した 2035 年の世界が、LLM の助けで前倒しで実現したという記事。trynix.dev では Nix パッケージをブラウザタブ内（WebAssembly）で動かし、GUI アプリや Firefox（Linux 版を Wasm 化し Firefox のタブ内で動作）まで起動できる。

### Key Discussion Points

- **glimshe**: JavaScript の台頭で技術職への意欲を失ったが、AI がハンズオンの楽しさを取り戻してくれたと語る。
  - **torginus**: JS 批判には共感せず、C++ や C# と並べて「まあ悪くない」と評価。
  - **majewsky**: 「reverse centaur」という概念を挙げ、AI 時代の働き方に懸念を示す。
- **momojo**: V8 isolate や pyodide と同様、実運用で何に使えるのか疑問だと問う。
  - **forcedtolinux**: 会社の Windows PC 上で Linux のシェル作業をするのに便利。
  - **dom96**: Cloudflare で V8 isolate も Pyodide も本番で使っていると指摘（Cloudflare 所属と明言）。
- **hollowonepl**: 「ブラウザが OS になる」という 2008〜10 年頃の主張を思い出すと懐疑的。
  - **k__**: 自分の仕事のアプリは十年来ほぼすべてブラウザで動いていると反論。
- **gbl08ma**: 同種のプロジェクト waarm64 を 2 ヶ月開発していたため、先に注目された unkernel に複雑な思いがあると述べる。
  - **tyre**: 作る価値は検証されているので続けるべきと励ます。
- **Primer81**: 10 年のキャリアで JavaScript が必要になったことはなく、Web 開発以外では支配的でないと主張。
  - **TheRealPomax**: VS Code を使ったことはあるかと反問。

## 2. [The Spray Bottle](https://mechanical-pencil.com/products/spray-bottle)

**Score:** 282 | **Comments:** 80 | [Post](https://news.ycombinator.com/item?id=50598555)

スプレーボトルの内部機構（トリガー、ピストン、バネ、逆止弁など）をアニメーション付きで分解解説するインタラクティブ記事。トリガーを引くたびに液が出続ける理由を、一方向弁の仕組みで説明している。

### Key Discussion Points

- **supermatt**: 最近はスプレーヤーヘッドごと交換することが多く、プラスチック製バネの信頼性が落ちたのではと推測。
  - **world2vec**: チャイルドロックなどの安全機構が複雑さと故障を増やしているのでは。
- **alembic_fumes**: 押した後にピストン室が空になるという説明は誤りだと指摘。
  - **rtkwe**: 眼鏡用クリーナーのような小型ポンプは、ほぼ空に近くなる設計もあると補足。
- **nico_h**: シールをするボールが上下する理由が図から分かりにくいと質問。
  - **jrflo**: 室内と吸い上げ管の圧力差でボールが動くと説明。
- **adamgordonbell**: 最近のボトルは手を離した後も噴霧が続くが、その仕組みが分からないと言う。
  - **brk**: 逆止弁とピストンで、ノズルが出す速度より速く液を圧縮室へ送り込む構造だろうと推測。
- **squeedles**: この型のスプレーボトルは 1964 年の万博で未来技術として登場し、スタートレックにも出たと紹介。

## 3. [Active intrusion campaign against Check Point security management servers](https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign)

**Score:** 235 | **Comments:** 96 | [Post](https://news.ycombinator.com/item?id=50630594)

GreyNoise が、Check Point のセキュリティ管理サーバーを狙う侵入キャンペーンを報告。攻撃者は乗っ取ったサーバーを踏み台にし、HFS サーバーの Math.random() 由来のセッション ID を悪用するなどの手口を使っていた。他の攻撃者が同じサーバーを悪用し始めた様子も観測されている。

### Key Discussion Points

- **mentalgear**: 今は高度な犯罪者や国家だけが LLM を侵入に使っているが、いずれ多数の犯罪者が計算資源で攻撃を自動化すると警告。
  - **fedupnow**: そのような単純な話ではなく、不安を煽りすぎだと反論。
- **sigmar**: 侵害されたサーバーを別の攻撃者が悪用し、Linux の use-after-free 脆弱性を自己チェックしていた点に注目。
- **PyWoody**: HFS のログイン用エンドポイントが Math.random() で署名付きセッション ID を作っていた点を指摘。
  - **ThePhysicist**: LLM レビューでも見落としやすい単純なミスで、暗号用乱数を使うべきだと述べる。
- **tamimio**: 攻撃者が乗っ取った後にサーバーへパッチを当てていた点を面白がる。
  - **auslegung**: 侵入後に他者を締め出すのは標準的な手口。
- **omh**: 初期侵入経路が不明で、管理プレーンがインターネットに公開されていたのかと問う。
  - **bumblehean**: 管理プレーンが公開されている組織は経験上かなり多いと回答。

## 4. [Ternary Bonsai 2.5 27B](https://prismml.com/news/bonsai-2-5-27b)

**Score:** 180 | **Comments:** 59 | [Post](https://news.ycombinator.com/item?id=50633922)

PrismML が Qwen3.8 27B ベースの 3 値（ternary）量子化モデルの新版を発表。メモリ使用量は前版と同じ 5.9 GB のまま、エージェント的コーディングや複数ターンのツール利用を強化し、過剰な思考やループも抑えたという。

### Key Discussion Points

- **nik_s**: SWE-bench Verified で Opus 4.6 相当に見えるが、ベンチ最適化、基準の変化、小型モデルの追い上げのどれかを問う。
  - **dofm**: ベンチマーク上の同等さは実用上の同等さではないと皮肉を込めて指摘。
- **vegnus**: Bonsai を 4 つ動かすと Qwen 3.8 27B より良いのかと質問。
  - **NoidFonsense**: Qwen を q4 で動かせるなら、このモデルは対象外だと答える。
- **Lramseyer**: 3 値重みに対応するハードウェアアクセラレーションは FPGA 以外にあるのかと質問。
- **PaulKeeble**: V2 はループして出力が悪かったが、今回は標準の llama.cpp で動く点を歓迎。
- **ariwilson**: Mac Mini M5 Pro 上で約 22〜25 tok/s を計測したと報告。

## 5. [Working with AI](https://www.anthropic.com/research/working-with-ai)

**Score:** 48 | **Comments:** 35 | [Post](https://news.ycombinator.com/item?id=50634734)

Anthropic の経済チームが、企業顧客 58 社への 66 回のインタビューをもとに AI 導入の実態をまとめた。AI の価値はコスト削減より生産量の増加に出ており、AI 起因の国内レイオフは少ないが採用抑制や海外委託の削減が見られる。コードレビューなど AI で加速しない工程がボトルネックになる。

### Key Discussion Points

- **moecables**: 過去 2 年のレイオフの多くは AI による人員削減を理由に挙げた企業だったはずだと指摘。
- **m_w_**: インタビューの時期と期間が不明で、モデル世代によって結果が大きく変わると批判。
- **hollowturtle**: 「新しい製品改善が生まれる」という主張に、自社の銀行アプリの品質低下を例に疑問を呈す。
- **scottfits**: データの公開を評価しつつ、AI による失業は今後悪化すると警告。
- **flowerlad**: 10 年後にはオープンウェイトモデルも十分強力になっていると見通す。

## 6. [From CUDA and Jax to TorchTPU: Lessons from a Cayley Graph Solver](https://andlukyane.com/blog/cayley-graphs-and-torchtpu)

**Score:** 38 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50633424)

Google の PyTorch ネイティブ TPU バックエンド TorchTPU で、Cayley グラフのパズルソルバを移植した検証記事。初期移植は A100 実装の 1.65 倍遅く、ビームサーチは JAX の 5.7 倍遅かったが、最適化後は学習が A100 同等、ビームサーチは JAX より約 25% 高速になった。

## 7. [Launch HN: Versine (YC F26) – MCP to send and receive money](https://news.ycombinator.com/item?id=50634426)

**Score:** 36 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=50634426)

AI エージェントから話しかけるだけで送金・請求ができる、残高付きウォレットの前段に置く MCP。送金はパスキーで承認し、最大 100 人への一括請求や、アカウントのない相手への送金（2 分で銀行に出金）にも対応する。信頼済みの連絡先なら承認なしで支払う設定もできる。

### Key Discussion Points

- **atakanelik**: 決済会社での経験から、難しいのは送金より紛争処理で、エージェントが誤送金した場合の取り消しフローを問う。
- **muqsitnawaz**: 残高は USDC だが、収益化や預かり資金の運用に関する規制をどう考えるのか質問。
- **avree**: 実態は送金ではなく暗号資産の送付で、その違いは大きいと指摘。
- **zinc_chest63**: OTP を確認されない場合、転送された USDC は Base 上に残り続けるのかと質問。
- **4d66ba06**: iOS と 1Password でパスキーが動かず「Unable to use passkey」となると報告。

## 8. [Gödel Enigma](https://www.helsinki.fi/en/researchgroups/godel-enigma/research/project-description)

**Score:** 24 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50625265)

ヘルシンキ大学の研究プロジェクト。Gödel が速記文字で残した未研究のノートなどの一次資料を調べ、論理学・数学基礎論の形成史を明らかにしようとしている。

### Key Discussion Points

- **lioeters**: ページ内のリンクが切れていたため、アーカイブ版の全文を共有。
- **baoooooooooooo**: 速記で書かれた未研究資料が存在するという前提を面白がり、研究者や LLM にとって貴重な資源になりうると述べる。

## 9. [GPT-6 models demonstrate intrinsic protein-design capabilities](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/)

**Score:** 24 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50634658)

OpenAI の発表（RSS の概要に基づく）。GPT-6 モデルが推論とコードでタンパク質の構造と配列を設計し、実験室での検証で 5 つの標的に対する結合の証拠が得られたという。

### Key Discussion Points

- **infralog77**: ラボで培養せずにこうした設計をどう検証できるのかと疑問を呈す。

## 10. [Heart attack and stroke risk detectable decades in advance](https://www.ed.ac.uk/news/heart-attack-and-stroke-risk-detectable-decades-in-advance)

**Score:** 5 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50635271)

エディンバラ大学主導の研究で、1985〜2019 年の 10 万人超のデータから、血圧・糖尿病・腎機能などの変化パターンや血中の差異が、心臓発作や脳卒中の最大 30 年前から検出できることが示された。早期介入の余地が大きいとしている。

## Trends

- **AI の影響を巡る話題が多い**: ブラウザ内 Linux を LLM で実現した例、企業での AI 導入調査、小型ローカルモデル、GPT-6 のタンパク質設計と、AI 関連が約半数を占めた。
- **ベンチマークへの懐疑**: Bonsai や AI 導入調査のコメントでは、数値の同等さが実用上の同等さを意味するのかが繰り返し問われた。
- **セキュリティの基本ミス**: Check Point の件では、管理プレーンの公開や Math.random() の誤用といった基本的な問題が議論された。
- **ものづくりの仕組みへの関心**: スプレーボトルの解説が高スコアを集め、日用品の機構への関心の高さが見られた。
