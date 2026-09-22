---
title: "Hacker News トップ10まとめ（2026年9月22日）"
date: "2026-09-22T16:51"
category: "summary"
summary: "gzipを言語モデルにする実験からApple広告への反発、GPT-6によるEnigma解読までHN上位10件を要約"
tags: ["hackernews", "ai", "programming"]
---

Hacker News のトップストーリーから上位10件（スコア降順）をまとめました。

## 1. [Can gzip be a language model?](https://nathan.rs/posts/gzip-lm/)

**Score:** 319 | **Comments:** 120 | [Post](https://news.ycombinator.com/item?id=49797323)

「圧縮と予測は等価である」という情報理論の原理に基づき、gzipをビームサーチと組み合わせてテキスト生成に使う実験。プロンプトとコーパスを与え、最も圧縮効率の良い続きのバイト列を探索することで文章を「生成」する。結果は完全に一貫してはいないものの、コーパスの構造をある程度反映したテキストが得られ、著者自身も単純な手法の効果に驚いている。

### Key Discussion Points

- **js98**: 同種の手法でMNISTを「解く」試みを紹介するリンクを共有
- **jll29**: gzipで圧縮後のファイルサイズを比較するだけでテキスト分類ができることを説明。Waikato大学のWitten研究グループが先駆けで、Hutter賞にも言及
  - **stingraycharles**: 20年前、言語ごとのWikipedia記事でgzip辞書を作り、圧縮効率が最も良い言語を判定する言語検出を実装した経験を共有
  - **LPisGood**: 機械学習・圧縮・暗号理論には情報理論を共通項とした深いつながりがあると指摘
- **Culonavirus**: 「WinRARがOpenAIより儲かっている」ことと関連付けた皮肉
  - **wolfi1**: 「WinRARが儲かっているかは知らないが、少なくとも赤字ではない」と切り返す
- **GodelNumbering**: 3Blue1Brownが同テーマを扱った動画シリーズを紹介
- **mg**: ビームサーチが本当にgzip圧縮を最小化する大域最適解を探索できているのか疑問を呈する
  - **shoo**: Deflateのバックリファレンス機構により、コンテキスト中の同一プロンプトを探して単純にコピーする方が実際のビームサーチより圧縮率で優れることを実験で示し、生成能力としては無意味になることを指摘
  - **StilesCrisis**: 素朴に圧縮率を最大化すると"aaaaa..."に退化するため、著者らは直近テキストへのスライディングウィンドウを導入しており、それ自体が前提を崩していると批判

## 2. [Apple has added persistent 'ads' to iOS, and it's driving users crazy](https://www.techradar.com/phones/iphone/i-wish-apple-would-just-stop-that-crap-apple-has-added-persistent-ads-to-ios-and-its-driving-users-crazy)

**Score:** 302 | **Comments:** 216 | [Post](https://news.ycombinator.com/item?id=49801939)

AppleがiOSの設定アプリ上部に、iCloud+やApple Music/TVの無料体験、AppleCare+などを勧める常時表示のプロモーション通知を追加。数週間から数ヶ月経つまで、または有料契約するまで消せないケースが多く、SNS上でユーザーの不満が噴出している。

### Key Discussion Points

- **AnonC**: Tim Cook体制でこうした押し付けが増えたと指摘し、Steve Jobsが2011年に「我々は広告を望まない」と語った過去の発言を引用
  - **rapind**: 2000ドルの端末を買ってまで広告を見せられるのは高級路線と広告収益のバランスが崩れていると指摘
  - **latexr**: 幹部たちは最上位アカウントを使っているので、そもそも広告を目にしていないだろうと皮肉る
- **fedeb95**: 長年のAndroidユーザーからiPhoneに移行して7年経つが、最近のUIの肥大化や広告、macOSよりGNOMEの方が直感的だったという経験から次はiPhoneをやめるかもしれないと吐露
  - **ndiddy**: GNOMEにも最大化・最小化ボタンの欠如など独自の使いにくさがあると反論
  - **RankingMember**: 同じくWalletの広告やLiquid Glassの操作性に疑問を感じ、Androidへの回帰を検討中と共感
- **kqp**: アップデートを無効にしていても赤いバッジで延々と催促され、最終的には同意なしに更新が実行されると報告
  - **sda2**: `/etc/hosts`で`gdmf.apple.com`をブロックすると通知を止められるという回避策を共有
- **kstrauser**: Apple MapsやNewsアプリの広告に憤り、広告主に低評価をつけて対抗していると語る
- **skoopsy**: タイトルほど大げさな話ではなく、自社サービスの案内程度で他の商用プラットフォームよりまだ広告は少ないと擁護
  - **baggachipz**: Apple Mapsにも「おすすめの掲載」という名の広告が既に入っていると指摘
  - **reddalo**: それを知らせる通知自体が煩わしいと補足

## 3. [OpenAI GPT–6 Astra breaks Enigma message that has resisted solution since 2005](https://www.cryptocellar.org/bgac/the-mvueh-break.html)

**Score:** 282 | **Comments:** 259 | [Post](https://news.ycombinator.com/item?id=49801324)

21年間未解読だった第二次大戦中のドイツ軍エニグマ暗号メッセージ「MVUEH」を、OpenAIのGPT-6 Astraが研究者Carter Lefferとのわずか2日間の共同作業で解読。AIは繰り返し登場する地名「ROSENOW ROSENOW」をクリブ（既知平文の手がかり）として自ら着目し、独自にエニグマ・シミュレータやボンベ相当のソフトウェアを実装、ドイツ連邦公文書館の資料まで自律的に調査して解読を達成した。

### Key Discussion Points

- **mmsc**: 実際の暗号文とおおよそのドイツ語訳（「進路を報告せよ、私はローゼノウにいる」等）を共有
  - **xnorswap**: 元の暗号文を別サイトから見つけて引用
  - **booty**: なぜ地名の繰り返しがクリブとして機能したのか説明が不足していると指摘し、単発の地名でも十分だったのではと疑問視
- **jtrn**: このメッセージはその日の他の通信と異なる鍵が使われていた上、まれな箇所（72文字目）でローターが1回転しており、標準的なクリブ攻撃が通用しなかった背景を解説。AIの成果を称えつつ、人間研究者の貢献が記事で軽視されがちだと苦言
  - **WithinReason**: 記事では「Astraが完全に自力で成し遂げた」と書かれていると引用し、jtrnの主張と対比
  - **shuvrojit**: 同意しつつ、モデルよりもそれを活用した研究者側がもっと評価されるべきだと述べる
- **peesem**: ちょうどYouTubeのVeritasiumがエニグマ解読の動画を公開し、末尾で別の未解読メッセージも紹介していたと言及
  - **sorahn**: 動画を見た直後にこのニュースを知り、「誰かがもうやっているだろうと思っていた」と驚きを共有
  - **mmahemoff**: Veritasiumが未解読メッセージが解かれる前の「今のうちに取り上げる」タイミングを狙ったのではと推測
- **nexawave-ai**: LLMがゾディアック・キラーの未解読暗号2件の解読にも応用できないか期待
  - **rhdunn**: ゾディアックの残り2つは13文字・32文字と非常に短く、解読者David Oranchakのチャンネルが詳しいと紹介
  - **Rover222**: 「その話がしたかった」と短く反応
- **timcobb**: メッセージと2005年との関係を質問
  - **TristanDaCunha**: 強い根拠は見つからないが、2005年にこのサイトで公開されたようだと回答

## 4. [Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)

**Score:** 130 | **Comments:** 80 | [Post](https://news.ycombinator.com/item?id=49803863)

Anthropicが新しいClaude 5.5ファミリーの第一弾「Claude Opus 5.5」を発表。エージェント型コーディングやコンピュータ操作、知識作業で性能が向上し、代表的なワークロードで前モデル比40%のコスト削減と30%以上の高速化を実現。生物学・サイバーセキュリティ領域でFable 5.1に匹敵する能力を持つとして、検証プログラムを通じたアクセス制限も導入している。

### Key Discussion Points

- **sailingparrot**: 冒頭で「フロンティアのペースを落とす」という先週の宣言に触れながら、それ以降はいかにペースを落としていないかを具体的数字で誇示する構成の皮肉を指摘
- **km144**: 「ベンチマークの差は実際の性能差を測る指標として当てにならなくなってきた」という記述を引用し、Fable 5.1との差別化が難しくなりFableの販売に影響するのではと懸念
- **m4tthumphrey**: ページのUI・スクロール挙動が使いにくいと不満
- **GodelNumbering**: Opus 5とOpus 5.5の料金比較表（キャッシュ読み込み$0.50→$0.20など）を共有し値下げを歓迎
- **techjamie**: この性能向上はDeepSeek 4.1論文の「Causal Encoder-Decoder」技術を取り入れた可能性があるのではと推測

## 5. [OpenAI is well positioned to fast-follow Jev](https://arcturus-labs.com/blog/2026/09/21/will-openai-eat-jevs-lunch/)

**Score:** 116 | **Comments:** 88 | [Post](https://news.ycombinator.com/item?id=49802161)

TypeSafe社の分類特化モデル「Jev」の成功を分析し、OpenAIが同様の技術を追随・拡張できるかを論じるブログ記事。Jevは通常のLLMのトークン確率分布を分類タスクに転用する手法で、OpenAIはツール呼び出しを通じて既に暗黙的に類似のことを行ってきたと指摘。TypeSafeの本当の強みはアーキテクチャよりも合成データ生成とRLパイプラインにあると分析している。

### Key Discussion Points

- **orbital-decay**: どのAI企業も既に社内向け分類器を多数持っており、公開APIにするかは単なるビジネス判断の問題で、この話題自体に目新しさは薄いと指摘
- **prodigycorp**: 記事はOpenAIに偏重しすぎて読みにくく、「モート（堀）」を巡る議論自体が空虚だと批判
- **andy12_**: OpenAIはRLによる推論モデルに全振りしており、推論をしない高速モデルであるJevとは方向性が逆なので追随する可能性は低いと分析
- **rdevsrex**: Jevの利点は単に「OpenAIではないこと」、つまり成果を奪われにくいことだと皮肉る
- **nzoschke**: 各社が互いに模倣し合う流れは避けられないと考えつつ、メール分類の実務でJevがOpenAIの埋め込みモデルより有望だったと報告

## 6. [Show HN: Drop – a rootless Linux sandbox with gVisor support](https://droprun.sh/)

**Score:** 90 | **Comments:** 25 | [Post](https://news.ycombinator.com/item?id=49801329)

サードパーティ製ツールやコーディングエージェントを主ユーザーアカウントから隔離して実行するためのLinuxサンドボックスツール「Drop」のShow HN。Linuxの名前空間（オプションでgVisor）を使い、root権限不要で使い捨て可能な隔離ホームディレクトリを提供し、コンテナ/VMほど生産性を損なわずにセキュリティを確保することを狙う。

### Key Discussion Points

- **zenoprax**: サンドボックス環境とホストシステムの境界について質問し、自身のPodmanベースの類似運用を紹介
- **refibrillator**: 自分も類似ツールを開発中だとしつつ、READMEはnsjailやruncと比較したセキュリティ上の差別化がやや弱いと指摘
- **p2004a**: 数週間使用しており利便性と隔離性のバランスに満足、ただしdocker composeを使う開発やGUI/GPUアプリの隔離が今後の課題だとし、litterbox.workとも比較
- **saghm**: bubblewrapベースの類似プロジェクト（tartarus）を自作中で、Dropの方がより本格的なサンドボックスを提供していると評価し試してみると表明
- **orliesaurus**: 名前空間による隔離の仕組みを解説しつつ、macOSに対応していない点を残念がる

## 7. [Solitaire Alone Together](https://solitairealonetogether.com/)

**Score:** 45 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=49794193)

Nolen Royalty氏によるWindows 98風ソリティアをインターネット上で共有する作品。複数のプレイヤーが同時に同じ盤面をプレイし、互いのマウス操作やミスを見ることはできるが直接の対話や干渉はできない。Rhizomeの30周年記念展示のために制作され、「初期のウェブの楽観と混沌」と「今のウェブの興奮と孤独」のギャップを表現することを狙っている。

### Key Discussion Points

- **dverlaeckt80**: ノスタルジーと、他人が黙々とプレイする様子を眺める体験の組み合わせが不思議に魅力的だと感想
- **axm997**: 自作の2デッキ版ソリティアを紹介
- **nticompass**: 作者本人によるプロジェクト解説のブログ記事へのリンクを共有
- **alentred**: 非常に中毒性が高いとしつつ、入力データがモデルの学習に使われていないか冗談交じりに質問
- **chainsaw10**: 「スタート」→「シャットダウン」を押すと「もうタブを閉じても安全です」と表示される演出を気に入ったとコメント

## 8. [16-bit Intel 8088 chip](https://allpoetry.com/16-bit-Intel-8088-chip)

**Score:** 31 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=49803635)

チャールズ・ブコウスキーの詩。Apple、Commodore、IBM、Tandyなど初期パソコン各社のフォーマットが互いに互換性を持たず通信できないという当時の技術的混乱を列挙したのち、唐突に自然描写（吹き続ける風やシチメンチョウワシの求愛行動）へと転換する構成が特徴。

### Key Discussion Points

- **PaulHoule**: ブコウスキーの詩集は一冊持っておく価値があるとし、代表作『Post Office』を読んでいた乗客とドレスデンからプラハへの列車で乗り合わせた思い出を共有

## 9. [Writing Rust code that's fast by asking agents to make the code faster](https://minimaxir.com/2026/09/agentic-iteration/)

**Score:** 27 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=49803085)

Max Woolf氏が、AIコーディングエージェントにRustコードを反復的に最適化させる手法を紹介。`criterion`クレートによる客観的なベンチマークと、`unsafe`禁止やネイティブCPU最適化フラグ禁止などの「不正防止」制約を設定した上でエージェントに挑戦させ、UMAP実装で既存Rust実装比2〜4倍、`umap-learn`比4〜15倍の高速化を達成。ASCII artやワードクラウド生成でも大幅な高速化を実現した。

### Key Discussion Points

- **metalspot**: Opus 5はCPUキャッシュやハードウェア命令に関する低レベルな推論はまだ弱く、当てずっぽうになりがちだが、ベンチマークのフィードバックループを与えれば低レベルエンジニアの作業を大幅に自動化できると評価
- **vatsachak**: この手法は汎化しない場当たり的な最適化コードを生みやすく、簡単なメモリ/並列/アルゴリズム的な勝ち筋がない限り割に合わないと注意喚起
- **loeg**: エージェントは`perf`などのツールを使い客観的な指標に対して反復改善するのが得意で、寄り道することもあるが人間が見守れば素早く改善できると同意
- **hombre_fatal**: プロファイラとA/BベンチマークをLLMに与えたところ、自作ターミナルがghostty/kitty/itermよりメモリ効率・スループットで優れる結果になったと報告し、AIによって性能や正しさに無頓着だった企業や個人が今後あぶり出されると予測

## 10. [Show HN: AI·rete·RAG – a Rete rule engine decides, RAG explains why](https://ai-rete-rag.com/)

**Score:** 5 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=49803683)

融資審査や不正検知、臨床トリアージなど監査可能性が求められる意思決定にLLMをそのまま使うのではなく、YAMLで書かれたルールをRete推論エンジンで評価して決定を下し、RAGは自社ドキュメントから根拠を検索してその決定を平易な言葉で説明する役割に限定するプロダクトのShow HN。ルールはネストしたall/any/notや前向き連鎖に対応し、発火しなかったルールも含めて条件ごとに記録する監査モードを備える。MCPサーバーも提供し、Claudeなどのエージェントからも意思決定を呼び出せる。

## Trends

今回のトップ10では、AIモデルの進化競争（Claude Opus 5.5の発表、OpenAIのGPT-6 Astraによる歴史的暗号解読、分類特化モデルJevを巡る攻防）が中心的な話題となった。一方で、AIエージェントを使った実務効率化（Rustコードの自動最適化）や、圧縮アルゴリズムを言語モデルとして使うといった基礎的発想への回帰も注目を集めている。またApple製品への広告導入に対する強い反発や、Show HNではLinuxサンドボックスや監査可能なAI意思決定システムなど、プライバシー・セキュリティ・説明可能性への関心の高さもうかがえる。ノスタルジックなソリティア共有アプリやブコウスキーの詩といった、技術と人文的テーマが交差する投稿もランクインした。
