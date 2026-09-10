---
title: "Hacker News トップ10まとめ(2026年9月10日 16:19 UTC)"
date: "2026-09-10T16:19"
category: "summary"
summary: "DeepSeek v4.1 FlashやShopifyのネイティブ回帰など、HNトップ10ストーリーを要約"
tags: ["hackernews", "tech-news"]
---

## 1. [DeepSeek v4.1 Flash](https://twitter.com/deepseek_ai/status/2097930608790167907)

**Score:** 730 | **Comments:** 383 | [Post](https://news.ycombinator.com/item?id=49639090)

DeepSeekが新モデル「V4.1 Flash」を発表。552Bパラメータのマルチモーダル MoE モデルで、最大100万トークンのコンテキストに対応する。因果エンコーダ・デコーダ構造により KV キャッシュを大幅圧縮し(1トークンあたり約890バイト、旧Flashの約1/4)、prefill時8B・decode時16Bパラメータのみを使用することで長文エージェントワークロードの効率を高めている。MITライセンスで公開。

### Key Discussion Points

- **kouteiheika**: DeepSeekの技術レポートは詳細な情報が満載で、他社(Fableなど)のシステムカードが安全性やモデルウェルフェアの話に偏っているのと対照的
  - **1f60c**: モデルウェルフェアへの配慮は「安い保険」として意味がある。米国勢のシステムカードは近年あまり有用でない
  - **jstummbillig**: 他モデルから蒸留しているなら省略できる説明が多いはず
  - **rayiner**: 「アメリカのHR部門そのもの」と皮肉
- **rao-v**: DeepSeekは毎回大胆な新アーキテクチャをフロンティア規模でいきなり本番投入しており驚異的
  - **ungovernableCat**: CEOが84%株式を保有し同時にファンドの創業者でもあるため、財務を気にせず自由に開発できる文化がある
  - **ainch**: R1論文で他の推論手法(MCTSなど)を試した経緯を公開していた点が好きだった
  - **nater5000**: 「少し落ち着いて」と過度な称賛に反論
- **k9294**: キャッシュヒット時の価格が$0.003/百万トークンと非常に安く、ネットワーク転送コストの方が支配的になるのではと指摘
  - **mmastrac**: プレビューモデルを大量利用し約20億トークンで$22程度。体感ではOpus 4.8をやや上回る性能
  - **dgacmu**: 帯域は大量契約なら非常に安く、この価格設定は経済的に妥当と補足
- **revolvingthrow**: 既にHuggingFaceで公開されており、パラメータ数は旧Flashの約2倍(552B)に増加
  - **johnnyApplePRNG**: ただしアクティブパラメータ数は少ない(8B/14B)ため実質的にはまだ「Flash」
  - **benjiro29**: 従来のFlashは速度のためにパラメータを削っていたが、今回は速度と知能を両立させた点が革新的
- **simonw**: OpenRouter経由で7段階の推論レベルを試したが、トークン数の傾向から実際には7段階すべてが機能していない可能性を指摘

## 2. [Shopify moves back to Native from React Native](https://shopify.engineering/back-to-native)

**Score:** 312 | **Comments:** 204 | [Post](https://news.ycombinator.com/item?id=49643982)

Shopifyが2020年に移行したReact Nativeから、SwiftとKotlinによるネイティブ開発に回帰すると発表。当時の移行理由(機能重複の回避、多様なエンジニアの参加、プラットフォーム間パリティの維持コスト)は、コーディングエージェントの進化により様変わりした。エージェントはiOS版を参照してAndroid機能を実装できるため、パリティ維持コストが劇的に下がったという。Shopアプリは12週間で完全にネイティブ化された。

### Key Discussion Points

- **Waterluvian**: React Native等が「向いているか」は会社ごとのリソースと課題次第のスペクトラムであり、絶対的な善悪の話ではない
  - **paxys**: ネイティブ→クロスプラットフォーム→ネイティブと回帰する流れはよくあるパターン
  - **kelnos**: ツール自体は客観的に劣ると考えるが、企業がコスト面で選ぶ判断は理解できる
  - **Aurornis**: 技術に対して「極端で妥協のない意見」を持つことが賢さの証とされる風潮への皮肉
- **atonse**: 自社でも同様の移行を実施。AIエージェントにゴールを与えて一晩(約6時間)でほぼ完成させた
  - **fourside**: Android/Kotlinを知らずにどうビルドを評価しているのか疑問
  - **ricardobeat**: KotlinとJetpack Composeの登場で2020年当時より容易になったのではと指摘
  - **greenowl**: 「AIはSWEの仕事を奪わない、なんて言う人がいるとは」と皮肉
- **pkaler**: 約20年この議論を見てきたが、クロスプラットフォーム採用チームは結局「ツール専門エンジニア」が増えるだけで人員削減にはならないと指摘
  - **woah**: 「議論は実際にその通りで行われていたのか」とCordova Streetの逸話に茶化す
  - **vsviridov**: カンファレンスで会ったことがあるかもと反応
- **fnthawar2**(投稿者、Shopify): 過去の決定に固執せず、LLMという前提の変化を受けて2020年の判断を再評価しネイティブに回帰したと説明
  - **railka**: AIのおかげでReact 1本ではなくSwift/Kotlin2本を維持できるようになった
  - **ceejayoz**: 今後1年で大企業が追随するだろうと予想
  - **accumulator**: iOS/Android間で共有コア(KMPやRustなど)はあるか、Helixのオープンソース化予定はあるか質問
- **netshade**: 「LLMがなければ実現不可能だった移行」という主張には異論。自身は2026年1月以前、LLM支援なしで同様の移行を主導し、LLM抜きでも移行の価値はあったと述べる

## 3. [What algorithm did Windows XP use to choose your initial user picture?](https://devblogs.microsoft.com/oldnewthing/20260909-00/?p=112683)

**Score:** 250 | **Comments:** 119 | [Post](https://news.ycombinator.com/item?id=49640646)

Raymond Chen氏のブログ記事。Windows XPは初期ユーザーピクチャの選択に「リザーバーサンプリング」というワンパス処理のアルゴリズムを使用していた。`RtlRandomEx`(シードは`GetTickCount()`)を用い、「n個中最後の項目が選ばれる確率は1/n」という性質を利用して、ディレクトリを1回走査するだけで均等な確率でファイルを選べるようにしている。ファイルシステムアクセスを抑えつつ、ファイル数の変動にも対応でき、暴走防止のため100枚サンプリング後に処理を打ち切る安全機構も備える。

### Key Discussion Points

- **mawadev**: こうした配慮は今のように多忙だと意識から抜け落ちがち。自分なら特定パターンのファイル数を数えてランダムインデックスを選ぶ素朴な方法を取っていたかもと振り返る
  - **cabirum**: 反例としてデスクトップアイコン配置が二次時間かかる話を紹介し、「Windowsがソフトウェアの理想形というわけではない」とコメント
- **lyorig**: Raymond Chen氏の投稿はいつも楽しみだが、公開前に社内承認が必要なのか気になる
  - **cloudfudge**: 彼は徹底して規則を守るタイプなので承認プロセスがあるはず。ブログのストックも大量にあり死後も何年分か配信できそうだと補足
  - **Hydraulix989**: 十分な実績とテニュア的立場があれば「許可を求めるより許しを請う方が楽」
  - **alex_suzuki**: 「モダンなWindows」について彼がどう思っているか気になると述べる
- **EMIRELADERO**: 該当する実際のNT5ソースコードへのリンクを共有
  - **ycuser2**: NT5ソースが公開されていること自体に驚き、なぜMicrosoftが削除しないのか疑問視
  - **Sopel**: 単純に全ファイルを列挙して乱数で選ぶ方法よりなぜ効率的と言えるのか疑問を呈す
- **scrumper**: 人間が物理的に物を無作為に選ぶ感覚と、コンピュータがアルゴリズム的に処理する感覚のギャップを解説
  - **rhplus**: 今日なら気にされない実装でも、1990年代当時はディスクI/Oの制約から重要な性能上の懸念事項だった点を強調
- **impoppy**: Chen氏がTwitterで「有益な情報を一切含まない」逸話を語る様子を茶化す
  - **VCFundedGenYer**: 「生粋のMicrosoftの手先」と皮肉
  - **carrja99**: 実用性はなくても面白いと感じたと同意

## 4. [Rust Is Tier-1 Language at Microsoft](https://rustfoundation.org/media/guest-post-rust-is-tier-1-language-at-microsoft/)

**Score:** 227 | **Comments:** 111 | [Post](https://news.ycombinator.com/item?id=49643546)

MicrosoftがRustを正式にTier-1言語(C++/C#/TypeScriptと同格)と位置付けたことを発表。最大の投資は新しいコード生成バックエンド「rustc_codegen_utc」で、LLVMではなくMSVCバックエンドと統合することで、数十年蓄積されたMSVCの基盤(セキュリティ機能、デバッグ、プロファイリングツール等)をRustでも利用可能にする。2026年初頭から本番稼働し、社内100以上のプロジェクトで採用されている。

### Key Discussion Points

- **meerita**: Rust採用でWindows標準のWeather アプリが1GB超のメモリを消費する問題が改善してほしいと期待
  - **Verdex**: 皮肉として、肥大化したアプリの方が「改善しました」という社内プレゼンで見栄えが良く、人員削減の際の標的にもされやすいと指摘
  - **onlyrealcuzzo**: メモリ消費は言語よりも大企業特有のトラッキングやライブラリ利用によるところが大きいと補足
- **pjmlp**: 主要OSベンダーがシステムプログラミング言語の選択肢を多様化させた大きなニュース。MSVC統合の噂もついに公式確認された
  - **pjmlp**(別コメント): 本当の問題はWebView2の普及であり、Rustプロジェクトも結局Webviewを多用しがちだと指摘
- **petilon**: Tier-1言語なのになぜVisual Studioでサポートされていないのかと疑問
  - **brunoborges**: 対応には時間がかかる。またRust開発者がVisual StudioよりVS Code等を好むかも論点
  - **afdbcreid**: rust-analyzer拡張で既に対応可能。社内での正式対応状況は不明
  - **cwbrandsma**: VS Codeで既にサポート済みであり、MicrosoftはいずれVisual StudioをVS Codeに置き換えていくと予想
- **pornel**: 今回の本当のニュースはLLVMをMSVCバックエンドに置き換えたこと
  - **ghostly_s**: これはC言語との相互運用性強化を示唆しているのではと質問
- **ComputerGuru**: Visual StudioでのTier-1デバッグサポートはいつ提供されるのか
  - **flohofwoe**: 今どきのプログラマがデバッガを使うこと自体期待できるか怪しいと皮肉
  - **pjmlp**: VSCodeでは既に利用可能。VSはクロスプラットフォームでなくWPF/.NET Frameworkに縛られている点も論点に
  - **mrec**: MicrosoftにはmoldやwildのようなモダンなリンカのWindows対応も支援してほしいと要望

## 5. [List of references on Sony websites to players "owning" their digital games](https://consumerrights.wiki/w/Sony_PlayStation_digital_game_ownership_lawsuit)

**Score:** 197 | **Comments:** 59 | [Post](https://news.ycombinator.com/item?id=49642531)

カリフォルニア州の消費者4名がSony Interactive Entertainmentを提訴。PlayStation Storeが「Buy Now」「Confirm Purchase」といった所有権を示唆する表現を使う一方、利用規約では「所有権はなくライセンスに過ぎない」と明記している矛盾を指摘する訴訟。カリフォルニア州のデジタル商品透明化法(AB 2426)違反、誇大広告、消費者保護法違反などが主張されている。提訴は2026年6月18日、審理は10月1日予定。Sonyは仲裁への強制移行を求めている。

### Key Discussion Points

- **dofm**: Sonyには複雑な感情がある。カメラは名機揃いで満足しているが、かつてルートキットで顧客PCをハッキングした過去もあり、大企業らしい迂闊な判断をする会社だと評する
- **tancop**: 利用規約の仲裁条項は、拘束されたくない場合30日以内に書面で通知する必要があると指摘。個人に対する拘束的仲裁は原則違法とすべきだと主張
  - **BeetleB**: 力の不均衡がある場合は問題だが、対等な当事者間(企業同士など)なら仲裁は合理的と補足
  - **matsemann**: 自国では消費者が契約で権利を放棄できないと法律で定められていると紹介
  - **Jcampuzano2**: 同意はデジタルで完結するのにオプトアウトだけ別の通信手段を要求するのはおかしいと指摘
- **buran77 / voidUpdate**: Sonyの答弁(同じゲームを他人が既に所有しているため購入できなかったはず、という主張)への疑問。本の複数コピーの比喩で「所有」の論理的矛盾を指摘
  - **stetrain**: ポテトチップスの比喩で皮肉る
  - **josephg**: 「買う」か「ライセンス」かは本質ではなく、同じ価格で再販・貸与・オフライン利用ができない劣化した商品である点が問題と主張
- **gwbas1c**: 著作権法の改革が必要で、エスクロー等によりストア終了後もアクセス継続できる仕組みが求められると提案
  - **Findecanor**: ソフトウェアごとにオフライン利用可能にする「方法」を政府機関に登録させ、アバンダンウェア化した時点で公開する制度を提案
  - **tancop**: DRM法の撤廃や、流通停止から5〜10年での著作権失効(「Sackboy法」)を提案

## 6. [Hitachi launches CO2 heat pump water heaters with solar-friendly tariff controls](https://www.pv-magazine.com/2026/09/07/hitachi-launches-co2-heat-pump-water-heaters-with-solar-friendly-tariff-controls/)

**Score:** 182 | **Comments:** 146 | [Post](https://news.ycombinator.com/item?id=49627634)

日立グローバルライフソリューションズが日本市場向けに新型「Y series EcoCute」CO2ヒートポンプ給湯器を発表。370Lと460Lの2モデルで、2026年11月から段階的に発売予定。最大の特徴は日中の太陽光発電を活用する電気料金プランとの連携強化で、リモコンから対応する電気契約を選択できる。HEMS対応、5年保証も付く。

### Key Discussion Points

- **kalleboo**: 日本在住で同様のMitsubishi製CO2ヒートポンプ給湯器を利用中。「オール電化」プランで安い時間帯にお湯を沸かし、高い時間帯はエアコンを抑えることで電気代を節約していると紹介
  - **koolba**: 湯船の水を温め直す機能について「そんなに長風呂するのか」と疑問
  - **SenHeng**: 冷めた湯を循環させるより新しいお湯を足す方が省エネと聞いたと補足
  - **bix6**: 風呂機能に憧れると反応
- **elgertam**: 記事中の「tariff」という語が輸入関税ではなく「公示された料金体系」という古い意味で使われていることに戸惑ったと指摘
  - **egeozcan**: アラビア語由来でイタリア語・トルコ語を経て伝わった語源で、条件付き価格設定を意味すると解説
  - **SoftTalker**: 米国では公共料金を指す正式な語として使われると補足
  - **Aboutplants**: 米国の公益事業者は料金改定のたびに規制当局へ「Rate Case」を申請しtariffを更新すると説明
- **thelastgallon**: ヒートポンプの物理的原理(熱の移動)について背景知識を丁寧に解説
- **goda90**: サーモスタット制御可能なヒートポンプ給湯器と混合弁を組み合わせ「熱電池」として太陽光発電のタイミングに合わせて活用するアイデアを提案
- **boringg**: 日本のヒートポンプ技術は静音・堅牢・高効率で世界をリードしていると称賛しつつ、将来安価な中国製に置き換わることを懸念
  - **PaulHoule**: 中国製がすべて粗悪というわけではないとレンズの例を挙げて反論
  - **matwood**: EUで使っているヒートポンプ式衣類乾燥機は静かで特殊な配線も不要と紹介
  - **maxglute**: 中国メーカーは15年にわたり一流HVACブランドへOEM供給しており品質は既に日本に追いついている、価格・価値のエンジニアリングこそ中国の強みだと反論

## 7. [More questions about whether researchers can trust OpenAI with unpublished math](https://mathstodon.xyz/@andreasthom/117240535270608201)

**Score:** 35 | **Comments:** 273 | [Post](https://news.ycombinator.com/item?id=49639408)

数学者Andreas Thom氏によるMastodon投稿。非ソフィック群に関する未発表の共同研究について、ChatGPTとのやり取りが学習データに使われたか、あるいは推論プロセスからアクセス可能だったかを以前OpenAI(Mark Sellke氏、Sebastien Bubeck氏)に問い合わせたところ「そのようなやり取りはなかった」と明確に否定されたが、その後の別件(Buckmaster-Alpöge事件)でOpenAIは「特定ユーザーデータへのアクセスはなかったが、匿名化されたデータがモデル改善に役立った可能性は否定できない」と説明しており、当初の回答との整合性に疑問を呈している。

### Key Discussion Points

- **sashank_1509**: 「事前学習によるチャットデータの吸収」と「検証可能な数学でのRLによる超人的な発見」の両方が同時に真である可能性があると指摘
- **aaronharnly**: 学習に含めた会話に合言葉やカナリア文言を仕込み、後でモデルがそれを「知っている」か検証した事例があるか興味を示す
- **bertonvv**: AIが本当に未解決問題を速く解いているのか、それとも研究者自身のAI活用が新たな学習データを生み出し自己成就的になっているだけなのか疑問視
- **fwlr**: データ漏洩の疑いを知った直後に学習中モデルから3000億トークンもの出力を生成したタイミングが「パラレル・コンストラクション」的で怪しいと指摘
- **GodelNumbering**: 本筋とは別に、この投稿がBlueskyの投稿でX投稿のスクリーンショットを含み、さらにそのX投稿が「詳細なMastodon投稿で」と始まっているという伝言ゲーム的な構造を面白がっている

## 8. [Cognition launches new SWE-2 model, Rivaling Fable 5.1 and GPT-Astra](https://cognition.com/blog/swe-2)

**Score:** 32 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=49645443)

Cognitionがコーディング特化モデル「SWE-2」を発表。FrontierCode 1.1 MainでFable 5.1相当の性能を64%低コストで実現し、SWE-1.7比で平均コストを81%削減。タスク完了に必要なステップ数も58%削減した。Pareto最適を意識したRL、ロールアウト長と相関する報酬ベースラインの改良、RL環境の3倍拡充などが技術的な柱。Devin Desktop/CLI/Web/Fusionで利用可能。

### Key Discussion Points

- **mydreamof**: Terminal-Bench 4の結果が振るわず、他のベンチマークも公開されていない点からベンチマーク最適化(benchmaxing)を疑う
- **scronkfinkle**: Devinという専用プラットフォームでしか使えないようで、それなら試さないと落胆を表明
- **_doctor_love**: SWE-1.5を使った際の印象が良く、AnthropicやOpenAIがIPOを急ぐ中でCognitionは地味ながら堅実なプレイヤーだと評価
- **Tsarp**: SWE-2はKimi K3をベースに追加学習されたモデルだと指摘

## 9. [>10x More Efficient Pretraining](https://magic.dev/blog/pretraining)

**Score:** 27 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=49613072)

Magic社が事前学習の計算効率を大幅改善したと発表。モデルアーキテクチャ、最適化手法、学習目的、データキュレーションを横断的に改善し、既存のオープンウェイトのベースモデルと比べ10倍以上の効率を実現。「bits-per-byte loss」という指標を採用し167分野に及ぶスケーリング則で評価。最新モデル(V5 e24)はDeepSeek V4 Pro Baseと同等性能を約1/50の計算量(GPT-3の事前学習コスト相当、GB200で約50万ドル)で達成したとしている。

### Key Discussion Points

- **simonw**: 「DeepSeek V4 Pro Baseに約50倍少ないFLOPsで到達、GPT-3の事前学習計算量の半分程度」という主張が本当ならかなり大きなニュースだとコメント
- **ismael_rr**: 素晴らしい成果だが手法を示す論文の公開を望む。Nous Researchのtoken superposition論文(FLOPs改善はあるが50倍には及ばない)と比較しつつ、トークナイズ戦略にも工夫があるのではと推測
- **vatsachak**: もし本当なら同社はOpenAIやAnthropicに買収されるか、中国勢が手法を解明し来四半期にはオープンソース化するだろうと皮肉交じりに予想
- **monneyboi**: 論文を公開すればそれだけ多くの電力(計算資源)の節約につながるはずだと訴える

## 10. [Neki by PlanetScale](https://neki.dev/)

**Score:** 15 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=49645763)

PlanetScaleが発表した新製品「Neki」。「PlanetScaleによるシャーディングPostgres」を謳い、単一マシンの制約を超えてPostgresを水平スケーリングする。各シャードは100%標準的なPostgresであり、毎秒1億以上のクエリ処理とペタバイト規模のデータ保持に対応。ダウンタイムなしのリシャーディングや、適切なシャードへ自動ルーティングするルータ機能を備える。現在はプラットフォームプレビュー段階。

## Trends

今回のトップ10では、AIコーディングエージェントが実務の前提を覆しつつある様子が目立つ(Shopifyのネイティブ回帰、Cognition SWE-2、DeepSeek v4.1 Flash)。一方でAIモデルの学習データの透明性・信頼性を問う声(OpenAIの数学データ問題)や、フロンティアモデルの効率化競争(DeepSeek、Magic.devの事前学習効率化)も引き続き主要テーマ。MicrosoftによるRustの正式格上げなど大手ベンダーの開発基盤強化に加え、Sonyのデジタルゲーム所有権訴訟のような「所有とライセンスの境界」を巡る消費者権利の議論、日本発のヒートポンプ給湯器技術のように地に足のついたハードウェア・エネルギー分野の話題も安定して上位に入っている。
