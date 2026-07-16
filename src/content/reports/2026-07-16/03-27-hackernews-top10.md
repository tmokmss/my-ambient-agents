---
title: "Hacker News トップ10サマリー（2026年7月16日）"
date: "2026-07-16T03:27"
category: "summary"
summary: "Thinking MachinesのオープンウェイトモデルInkling、Grok Buildのオープンソース化、Stripe-PayPal買収報道など"
tags: ["hackernews", "ai", "opensource", "fintech", "programming"]
---

## 1. [Inkling: Our Open-Weights Model](https://thinkingmachines.ai/news/introducing-inkling/)

**Score:** 757 | **Comments:** 193 | [Post](https://news.ycombinator.com/item?id=48924912)

Thinking Machines Labsが総パラメータ975B（活性化41B）の大規模言語モデル「Inkling」をオープンウェイトで公開した。45兆トークンでの事前学習と大規模強化学習により、テキスト・画像・音声のマルチモーダル対応、調整可能な思考努力、優れた推論能力を備える。Tinkserプラットフォームでの微調整対応により、実用的なカスタマイズ基盤となる点が注目されている。

### Key Discussion Points

- **simonw**: 恒例の「ペリカンが自転車に乗る」SVGベンチマークで実際にモデルをテスト。
  - **dozerly**: 「モデルはこのベンチマーク問題で訓練済みのはずなので、そろそろランダム化が必要」と警鐘。
  - **calny**: 「少なくともテストで訓練していないのは良いことだ」と皮肉交じりに応答。
- **segmondy**: マルチモーダルかつ音声対応の最大級オープンウェイトモデルだと高評価し、ローカル実行用にllama.cppのフォークを紹介。
  - **paxys**: 「Llama 3以来、初めて競争力のある非中国製オープンウェイトモデルだ」と米国製である点を強調。
  - **Bolwin**: 「ほとんどのベンチマークではむしろ劣っている」と評価に疑問を呈す。
- **ls_stats**: 「米国にも独自のDeepSeekやZ.aiが必要」とし、Thinking Machinesがその候補になり得ると期待。
  - **joshmarlow**: arcee.aiも同様のポジションを狙っていると紹介。
  - **gkapur**: Arcee・Reflection・Meta(Llama)など競合が多いと指摘しつつ、ファインチューニングAPI+オープンウェイトの組み合わせは有望なビジネスモデルだと評価。

## 2. [SQLite should have (Rust-style) editions](https://mort.coffee/home/sqlite-editions/)

**Score:** 142 | **Comments:** 59 | [Post](https://news.ycombinator.com/item?id=48928135)

著者はSQLiteの「デフォルト設定はほぼ全て間違っている」と主張する。外部キー制約が無効、型チェックが緩い、同時書き込みのエラー処理が不十分、性能最適化が未設定という問題を挙げ、Rustの版（edition）システムに倣い `PRAGMA edition = 2026` のような後方互換を保った改善済みデフォルトへの切り替え機構を提案している。

### Key Discussion Points

- **sethev**: 問題点の列挙だけでなく後方互換な解決策を提示している点を評価し、「オプトインしなければ何も変わらない」設計を支持。
- **kccqzy**: SQLiteはRustと異なりデータコンテナとして機能する点が特殊で、DBファイルを異なるマシン間で持ち運ぶ際にコマンドラインツールのバージョン差異が問題になり得ると指摘。
- **andai**: JavaScriptの `"use strict"` を例に、「後方互換性のためにできない」という言い訳は既に覆された前例があると指摘。
- **Retr0id**: apswのようなラッパーライブラリで安全なデフォルトを設定する代替案を紹介しつつ、ランタイム横断で標準化された参照方法があると望ましいと補足。

## 3. [G# – A modern .NET language with Go, Kotlin, and Swift ergonomics](https://davidobando.github.io/gsharp/)

**Score:** 45 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=48871721)

G#は.NETランタイム上で動作する新言語で、Go・Kotlin・Swiftのエルゴノミクス（パッケージ、func宣言、nullableハンドリング、構造化並行処理など）を取り入れている。ソースコードは直接マネージドアセンブリにコンパイルされ、CLR型と相互運用可能。

### Key Discussion Points

- **seabrookmx**: 逆にC#をGoのように静的バイナリへコンパイルしたいと述べ、.NET AOTの発展に期待。
- **gwbas1c**: 「C#と何が違うのか」と疑問視し、20年前のVisual Basic .Netが似たような理由で普及しなかった前例を挙げる。
- **achr2**: FAQを読む限り単なる構文の違いで、意味論・機能面での差異が見えないと指摘。
- **onlyrealcuzzo**: 攻撃的でない指摘として、プロジェクト説明文自体は良くできているとしつつ、自身の言語開発経験から建設的なフィードバックを提供。

## 4. [Grok Build is open source](https://github.com/xai-org/grok-build)

**Score:** 304 | **Comments:** 350 | [Post](https://news.ycombinator.com/item?id=48926590)

xAIがターミナルベースのAIコーディングエージェント「Grok Build」をApache License 2.0でオープンソース化した。Rust製のCLI/TUIとエージェントランタイムが公開され、macOS・Linux・Windows向けの事前ビルド済みバイナリが提供される。対話的にもCI環境でも動作する。

### Key Discussion Points

- **simonw**: コードベース中の興味深い実装（Mermaid図をブラウザで動かせるWebAssembly版）を紹介。
  - **mook**: Sun時代の「OpenGrok」を連想させると回顧。
  - **colesantiago**: 「こうしたフォークは全て無意味で1年で消える」と冷ややかな見方。
- **Sajarin**: 早速コミュニティによるフォーク（プライバシー強化版「gork-build」やテレメトリ除去版「dgrok」）が登場していることを紹介。
  - **CobrastanJorji**: 「AI事業から撤退してロケット開発に専念すればいい」と皮肉。
  - **hn1986**: 「もうGrok Buildを信頼する人はいない。Cursorも今後数ヶ月警戒すべき」と信頼性への懸念。
- **GodelNumbering**: ユーザーデータ流出騒動を受けた評判回復のための戦術的な動きだと分析。
  - **bakies**: 生成コードの質はOpusに劣り「Sonnet 3のような感覚」と評価。
  - **adamtaylor_13**: 一方でビジュアルデザイン面はFableより優れ、速度も2-3倍という体感を報告。
- **kamikazechaser**: データ流出は残念だが、モデル自体はOpus 4.8より優れており、ハーネスも非常に滑らかだと高評価。
- **buremba**: xAIサブスクリプションならGrok Buildより `pi.dev` の利用を推奨。
  - **whimsicalism**: なぜpiがopencodeより選ばれるのか、オープンソース勢力図への興味を表明。
  - **guessmyname**: 「コンパイル言語ではなくTypeScriptを選んだ理由が気になる」と技術選定に疑問。

## 5. [Governments, companies, nonprofits should invest in free, open source AI [pdf]](https://www.siegelendowment.org/wp-content/uploads/2026/07/fortune-david-siegel-open-source-ai.pdf)

**Score:** 107 | **Comments:** 46 | [Post](https://news.ycombinator.com/item?id=48927095)

投資家David Siegelによる寄稿。1980年代にRichard Stallmanとオープンソースについて議論した経験を振り返りつつ、AIが急速にクローズド化している現状を「所有者の条件下でしかアクセスできない未来の図書館」に例えて警告している。政府・企業・非営利団体は公開データと訓練手法を含む真にオープンなAIへ投資すべきだと主張する。

### Key Discussion Points

- **rao-v**: 数百万ドル規模のインデュースメント賞金を6〜12ヶ月ごとに設け、限られたVRAM内でベンチマークを達成したオープンモデルに与える仕組みを提案。
- **hereme888**: 「善意やパートタイムの貢献では生計・利益を懸けた商業AI開発に対抗できない」とオープンソースの限界を指摘。
- **ChrisArchitect**: 元記事のタイトルは「Stallmanの父と2年間議論した。今のAI論争はそれよりずっと大きい」であり、Fortune誌の代替リンクを共有。
- **shimman**: 「AIへの補助金より、国民皆保育・国民皆保険・学校給食無償化に予算を回すべき」と優先順位への異論。

## 6. [Stripe and Advent have made a joint offer to acquire PayPal – sources](https://www.reuters.com/business/finance/stripe-advent-offer-buy-paypal-more-than-53-billion-sources-say-2026-07-15/)

**Score:** 379 | **Comments:** 216 | [Post](https://news.ycombinator.com/item?id=48915953)

ロイターの報道によれば、決済大手StripeとプライベートエクイティのAdventが共同で530億ドル超でPayPalの買収を提案したとされる。実現すればStripe・PayPal・Venmo・Braintree・Xoomが一つの傘下に入ることになり、独禁法審査が焦点となる見通し。（元記事はアクセス制限のためコメントを基に要約）

### Key Discussion Points

- **chirau**: 買収が実現すればHHI（ハーフィンダール・ハーシュマン指数）が異常に高くなり、Venmo・Braintreeの分離を余儀なくされるほどの反トラスト上の課題があると分析。
  - **arjie**: HHIの定義を解説し、市場集中度の指標としての意味を補足。
  - **SOLAR_FIELDS**: 「今のアメリカに反トラストなど存在しない。あるのはマージを通すための賄賂の大きさだけ」と皮肉。
- **nickjj**: BraintreeはStripeの正当な競合であり、統合されればStripeが手数料を吊り上げる歯止めがなくなると懸念。
  - **benmorris**: Braintreeは年商10万ドル未満の事業者をオンボードしないなど、既に参入障壁が高いと指摘。
  - **paytonjjones**: 「手数料維持の非公式合意」は違法かつ非現実的で、顧客を奪える状況では値下げ競争の誘因が強いと反論。
- **edoceo**: Stripeは大麻関連・アダルト関連などPayPalが許容する業種を締め出しており、多くの加盟店が悪影響を受けると懸念。
  - **3uler**: 実際に「モラル警察」をしているのはVisa/Mastercardであり、Stripeはそのルールを執行しているだけだと反論。
  - **root_axis**: 「企業が道徳を気にすることなどない、全ては金の問題」とし、PayPalの消費者向けウォレット事業への関心が買収動機だと分析。
- **charlieyu1**: 20年来のPayPalユーザーとして「もう終わりにする時だ」とうんざりした様子。
  - **nolok**: 加盟店としては嫌いだが、購入者としては愛用しており、長年使われ続ける理由は低コストではなく利便性だと分析。
  - **PaulDavisThe1st**: 12ドル未満の少額決済の80%以上をPayPalの手数料体系に依存しており、代替手段が見当たらないと証言。

## 7. [Bluesky Trademarks ATProto](https://atproto.com/blog/at-protocol-trademark)

**Score:** 17 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=48929351)

Blueskyが「AT Protocol」の商標を取得したことを発表。他社からの法的な干渉を防ぐ防御的措置で、プロトコル互換性を説明する用途では自由に使用できるが、製品・サービス名としての利用にはライセンスが必要になる。将来的には独立したプロトコルガバナンス組織へ商標の所有権を移管する予定としている。

### Key Discussion Points

- **1shooner**: 「独立したガバナンス組織が商標を登録すべきだったのに存在しなかった」とし、ATProtoが唯一の実用インスタンスを運営する営利企業に単独で統治されている点を指摘。
- **derektank**: 「先に商標を取得しようとしていたのはどの企業だったのか」と背景事情に興味を示す。

## 8. [LLM Networking with MikroTik](https://blog.greg.technology/2026/07/14/llm-networking-with-mikrotik.html)

**Score:** 59 | **Comments:** 23 | [Post](https://news.ycombinator.com/item?id=48927915)

著者がMikroTik機器の新規ネットワーク構築・移行にLLMを活用した記録。REST/JSON APIの活用や複数LLMによる相互検証で作業を効率化できた一方、幻覚や誤りが発生するため段階的なテストと綿密な検証が不可欠だと結論。IPアドレス競合時にはMAC-Telnetなど層2での接続手段が重要な保険になったという。

### Key Discussion Points

- **x2tyfi**: ネットワーク構築・運用における速度と信頼性という2大課題の両方でLLMが有効だと評価。
- **briHass**: MikroTikはLLM向けMarkdownドキュメントを公開し設定ダンプも単一テキストで扱えるため、LLMとの親和性が高いと指摘。OpenWrtへの乗り換え経験も共有。
- **dools**: ChatGPTで約1年MikroTik設定を行っており、再利用可能でドキュメント化されたスクリプトが得られる点がStack Overflowのコピペより優れていると評価。
- **arjie**: エージェントには直接調査のみさせ、実際の設定変更は冪等なスクリプトを書かせて実行する運用にしていると、意図の記録としてのスクリプトの価値を語る。

## 9. [CatchCat – Pokémon Go for Cats, IRL](https://www.catchcat.lol/)

**Score:** 15 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=48862644)

現実世界の野良猫を「捕獲」して集めるポケモンGO風モバイルゲーム「CatchCat」のShow HN投稿。ライブ撮影の検証機能により実在の猫を対象にした収集要素を実現している。（元サイトはアクセス制限のためコメントを基に要約）

### Key Discussion Points

- **gekoxyz**: イタリアの田舎町には野良猫が多くいたが、ボストン在住の今は全く見かけないとし、アプリのコンセプトを面白いと評価。
- **marojejian**: 妹に勧められて知ったとし、生きた被写体であることを検証する仕組みがあると紹介。
- **lucasrufkahr**: 「これは猫の品種をAIに学習させるための偽装（psyop）では」と冗談交じりの疑念。
- **soupspaces**: コンピュータービジョンを撹乱する「ダズル塗装」を猫に施すという皮肉なアイデアを提示。

## 10. [Metal-Organic Frameworks, Chemistry's New Miracle Materials (2018)](https://chemistry.berkeley.edu/news/meet-metal-organic-frameworks-chemistry%E2%80%99s-new-miracle-materials)

**Score:** 43 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=48928313)

2018年公開のバークレー大学の記事で、金属と有機分子からなる多孔質結晶「Metal-Organic Frameworks（MOF）」を紹介。既知の材料中最大級の内部表面積を持ち、温室効果ガス捕捉や医薬品キャリアに応用可能。特にオマル・ヤギ教授が開発した、乾燥空気から太陽エネルギーのみで水を集める技術（MOF1ポンドあたり12時間で約1.3リットル）が注目されている。

### Key Discussion Points

- **tastyfreeg**: メタンをメタノール等の高付加価値化合物に変換する手法を探していた際にMOFを知り、SF的な「奇跡の材料」だと評価。
- **_JamesA_**: この記事はCalifornia Magazineの「2018年秋号」からの転載だと出典を補足。
- **motoboi**: 「ヤギ教授はノーベル賞候補でもある」という記述について、その選考過程に疑問を呈す。
- **chairhairair**: 記事自体が2018年のものである点を念のため指摘。

## Trends

**1. オープンウェイトAIを巡る攻防**: Inkling（Thinking Machines）とGrok Build（xAI）のオープンソース化が同日にトップを飾り、David Siegelの寄稿と合わせて「オープン vs クローズド」のAI開発思想が引き続き最大の論点であることを示している。米国発のオープンウェイトモデルの少なさを指摘する声も目立った。

**2. 決済業界の再編観測**: Stripe・PayPalの買収報道は独禁法・手数料構造・加盟店規約への懸念を呼び、巨大プラットフォームの寡占化に対する根強い不信感が表れた。

**3. LLMの実務応用と評判リスクの併存**: MikroTikのネットワーク設定へのLLM活用のように実務での有効性が語られる一方、Grok Buildのデータ流出騒動は信頼性・ガバナンスへの懸念を再燃させた。

**4. ソフトウェアの「デフォルト設定」への不満**: SQLiteのedition提案やG#への懐疑的反応は、既存ツールの設計判断や新言語の差別化に対するコミュニティの厳しい目を映している。

**5. 商標・ガバナンスを巡る透明性への関心**: BlueskyのATProto商標取得議論は、オープンプロトコルの運営を単一の営利企業が担うことへの懸念という、より広いテーマにもつながっている。
