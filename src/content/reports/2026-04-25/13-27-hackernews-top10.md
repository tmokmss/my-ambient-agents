---
title: "Hacker News トップ10 ダイジェスト（2026年4月25日）"
date: "2026-04-25T13:27"
category: "summary"
summary: "GoogleのAnthropic $40B投資が最注目。10GbE USB進化、AIエージェント向けWiki、ラムダ計算AIベンチマークなど"
tags: ["hackernews", "AI", "networking", "programming", "pixel-art"]
---

## 1. [Google plans to invest up to $40B in Anthropic](https://www.bloomberg.com/news/articles/2026-04-24/google-plans-to-invest-up-to-40-billion-in-anthropic)

**Score:** 653 | **Comments:** 654 | [Post](https://news.ycombinator.com/item?id=47892074)

GoogleがAnthropicに最大400億ドルの投資を行う計画が報じられた。数週間前にAnthropicはGoogleおよびBroadcomから「複数ギガワット規模の次世代TPU容量」を購入する契約を締結しており、今回の投資はその文脈で語られている。Anthropicは直近でAmazonとGoogleの双方と大型契約を結んでおり、コンピューティング容量の逼迫が背景にあるとも指摘される。

### Key Discussion Points

- **skybrian**: これは「循環取引」ではなく「ベンダーファイナンス」と捉えるべき。GoogleはAnthropicへのコンピュートサービス売上から投資資金が還流する構造であり、Anthropicのビジネス実態をよく把握したうえでの株式投資といえる。
  - **netcan**: 株式時価総額を使って自社サービスへの需要を創出する構造には市場リスクが伴う。
  - **zymhan**: ベンダーファイナンスには大きなリスクがあり、GE Capitalの事例が教訓になる。
- **33MHz-i486**: ここ数週間のAnthropicの一連の動きは、同社がコンピューティング容量の限界に近づいていた証拠。不利な条件での契約締結後、モデル品質が回復してきた。
  - **tiffanyh**: Anthropicは一四半期で ARR が $9B から $30B に急増するほどの爆発的な需要増を経験している。
  - **mrandish**: しかしこれらの契約は地球上のAIコンピューティングの総量を変えるわけではなく、今後18か月で利用できる量が突然増えるわけではない。
- **ordinaryradical**: 基盤モデル市場は「誰もお堀を持っていない」状態で、投資家が次のビッグウェーブを求めて殺到している構図に見える。

---

## 2. [New 10 GbE USB adapters are cooler, smaller, cheaper](https://www.jeffgeerling.com/blog/2026/new-10-gbe-usb-adapters-cooler-smaller-cheaper/)

**Score:** 309 | **Comments:** 147 | [Post](https://news.ycombinator.com/item?id=47899053)

Jeff GeerlingがUSB接続の10ギガビットイーサネットアダプターの最新世代を紹介。従来品と比べて発熱が少なく、小型化・低価格化が進んでいるとレポートしている。Frameworkもこの週に10GbE対応の拡張カードを発表しており、USB 10GbEの普及期が訪れつつある。

### Key Discussion Points

- **mort96**: USB命名規則が改定されて以来、何が何を意味するのかさっぱりわからなくなった。「USB 3.2 gen 2x2」が何を指すのか誰も直感的に理解できない。
  - **adrian_b**: USB 3.2はバージョン名にすぎず、速度は Gen1=5Gb/s、Gen2=10Gb/s、Gen2x2=20Gb/sで整理できる。ただしWindowsのドライバ制限で実測が7Gb/s未満になることも。
  - **PaulKeeble**: USBは仕様書が不明瞭で「カオス状態」。どのポートが何に対応しているか確認するのに毎回試行錯誤が必要。
- **GeertJohan**: Frameworkが今週10GbE対応の拡張カード（WISDPi製）を発表した。
  - **topspin**: このNICは10Gbit/sおよび各種Mbit/sに対応。最近は低コスト製品でも10/100サポートを省くものが出てきている。
- **nasretdinov**: 10GbEは中途半端な立ち位置。SSDの帯域には足りず、HDDには過剰。SSDならThunderbolt（40GbE+）、HDDなら2.5Gbpsで十分では？
  - **CTDOCodebases**: ZFS 3ディスクミラー環境では10GbEはリード性能に大きく貢献する。
  - **MisterTea**: MikrotikのSFP+スイッチが$150から入手可能で、ファイバー環境を低コストで組める。
- **deepsun**: PoE++（最大100W）対応なら、このアダプター経由でノートPCへの給電もできる可能性があるが？

---

## 3. [Plain text has been around for decades and it's here to stay](https://unsung.aresluna.org/plain-text-has-been-around-for-decades-and-its-here-to-stay/)

**Score:** 150 | **Comments:** 62 | [Post](https://news.ycombinator.com/item?id=47897681)

プレーンテキストダイアグラムツール群の台頭を論じた記事。1970〜80年代にピークを迎えたTUIが現代的な形で復活しており、「意図的な制約」「テキスト編集の普遍性」「形式の可搬性」がプレーンテキストを持続的なものにしていると主張する。AIが発展する時代においても、人間が制御を保つための自己制約としての価値が増しているという視点が興味深い。

### Key Discussion Points

- **TazeTSchnitzel**: 1970〜80年代がピークというのは一面的。1990年代初期のDOSアプリはVGAグラフィックとマウスを活用した優れたTUIを実現していた。QBASICやEDIT.COMがその例。
  - **safety1st**: TUIの未来に期待している。OmarchyのようなテキストベースのOSはこれからの方向性を示している。
- **ssivark**: 「プレーンテキスト」は単純な基盤ではないというDylan Beatieのプレゼン（"There's no such thing as plain text"）を紹介。
  - **rmunn**: UTF-8が事実上の標準となった今、未知のテキストファイルがUTF-8である確率は99.7%。この懸念は2026年時点でほぼ解消されている。
  - **lelanthran**: Beatieの議論はコードページや旧エンコーディングの時代のもので、UTF-8普及後の現在は時代遅れ。
- **2b3a51**: DOSのMINITABのようなテキストベースの統計チャートツールをターミナルで使いたい。ドットプロットを描けるツールはあるか？
  - **wonger_**: gnuplot、feedgnuplot、youplot、ttyplotなど複数の選択肢がある（Stack Overflowスレッドへのリンクあり）。
  - **nxpnsv**: gnuplotのdumbターミナルモードが使える。
- **draven**: EmacsのM-x artist-modeも選択肢のひとつ。

---

## 4. [Show HN: A Karpathy-style LLM wiki your agents maintain (Markdown and Git)](https://github.com/nex-crm/wuphf)

**Score:** 124 | **Comments:** 55 | [Post](https://news.ycombinator.com/item?id=47899844)

AIエージェントがMarkdownとGitを使って自律的に知識ベースを構築・管理するシステム「WUPHF」を紹介するShow HN。エージェントごとのプライベートノートブックと共有チームWikiを持ち、BM25（bleve）+SQLiteインデックスで検索。500アーティファクト/50クエリのベンチマークでBM25単独85%のrecall@20を達成。ベクトルDBを使わずどこまでMarkdown+Gitで戦えるかを検証した、Andrej Karpathyが提唱するLLMネイティブ知識基盤の実装例。

### Key Discussion Points

- **zby**: 24時間以内にHNフロントページにLLM Wikiが3件登場。同じ車輪の再発明をそれぞれが続けるより、協力できる場があれば良いのにと感じる。
- **portly**: 自動ノートテイキングのメリットが理解できない。テキストのコピペを100倍スケールしても、真の価値は素材と向き合うプロセスにある。
- **batoga**: 「Karpathyの名前をブログ記事に入れれば採用に有利」というAIハイプへの皮肉。顧客ニーズより投資家向けアピールが優先されている。

---

## 5. [A 3D Body from Eight Questions – No Photo, No GPU](https://clad.you/blog/posts/questionnaire-mlp/)

**Score:** 97 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=47862541)

8つの質問（性別・体型・バスト・ウエスト等）への回答だけで3Dボディモデルを生成するシステムを解説した技術ブログ。2つの隠れ層（各256ユニット）を持つ小さなMLP（約85KBの重み）が8つの入力から58のボディパラメータを出力する。物理ベースの制約を損失関数に組み込むことで、身長誤差0.3cm・周径誤差3〜4cmという精度を実現。写真ベースのパイプラインを超えた性能を示している。

### Key Discussion Points

- **aaclark**: 一言で言えば「MLPを8問に当てはめて0.3cm/0.3kg/3〜4cmの精度」。MDPI論文をベースに製品化した形。
- **sorenjan**: 身長・体重は入力値として既知なのに、なぜモデルの誤差がゼロにならないのか？
- **rgovostes**: 実際には数秒で計算できるレベル。身長・体重・選択肢の全組み合わせを事前計算してキャッシュすれば即座に応答できる。

---

## 6. [How to Implement an FPS Counter](https://vplesko.com/posts/how_to_implement_an_fps_counter.html)

**Score:** 62 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=47857563)

FPSカウンターの実装を5つの手法で段階的に解説した記事。単純な瞬間フレーム時間計測から始まり、固定ウィンドウ、1秒ごとリセット、直近1秒のローリングウィンドウ、フレーム処理時間も追跡するバリアントまで進化させていく。SDL_GetPerformanceCounter()やstd::chrono::high_resolution_clockの使用を推奨し、ウェブサービスの時間窓集計アプローチをゲーム計測に応用している。

### Key Discussion Points

- **mightyham**: 指数移動平均（EMA）を使う方法が定数時間・定数空間で実装できる。`spf_avg = alpha * cur_spf + (1-alpha) * spf_avg`で計算可能。
- **nasretdinov**: プレイヤーが感じるパフォーマンスを測るなら、平均ではなく「最低FPS」を追跡すべき。1フレームが0.1秒かかれば10FPSに感じる。
- **NL807**: 用途によって使い分けが必要。最終フレームは負荷スパイク検出用、中央値ウィンドウは体感フレームレート用、平均ウィンドウは統計的平均用。

---

## 7. [1-Bit Hokusai's "The Great Wave"](https://www.hypertalking.com/2023/05/08/1-bit-pixel-art-of-hokusais-the-great-wave-off-kanagawa/)

**Score:** 34 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=47863570)

葛飾北斎の「神奈川沖浪裏」を1ビットピクセルアートで再現した作品。Macintosh Quadra 700またはPowerBook 100（System 7）上でAldus SuperPaint 3.0を使用し、オリジナルMacの画面解像度512×342ピクセルに意図的に制約して制作。Susan Kareの初期Macアートワークから着想を得た「36景すべてを1ビットで描く」という野心的プロジェクトの一作だが、現在は制作が止まっている。

### Key Discussion Points

- **KaiserPro**: Macを知らなくても、あのサイトのレイアウトとスタイルが好き。限られた解像度でこれだけの「色感」を出せるのは素晴らしい。
- **usrnm**: 人類がこれほどの技術を一世代未満で築いたことに驚く。数百年後どうなっているか見てみたい。
- **the_af**: モノクロームピクセルアートが大好き。このブログが短命に終わったのが残念で、北斎作品も2枚しか完成していない。

---

## 8. [Martin Galway's music source files from 1980's Commodore 64 games](https://github.com/MartinGalway/C64_music)

**Score:** 19 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=47900398)

1980年代のコモドール64ゲームで活躍した作曲家Martin Galwayが、自身の楽曲ソースファイルをGitHubで公開したリポジトリ。『Arkanoid』『Robocop』『Times of Lore』など名作ゲームの音楽ソースコードが含まれており、レトロゲーム音楽とコンピューター音楽史の貴重な一次資料となっている。

### Key Discussion Points

- （コメントは1件のみのため省略）

---

## 9. [Lambda Calculus Benchmark for AI](https://victortaelin.github.io/lambench/)

**Score:** 20 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=47900506)

AIモデルに純粋なラムダ計算の問題を120問解かせるベンチマーク「LamBench」。興味深い発見として、最新モデル（GPT-5.5、Claude Opus 4.7）が直前バージョン（GPT-5.4、Opus 4.6）より若干スコアが低い点が報告されている。ラムダ計算という抽象的・記号的な推論能力を純粋に測る試みで、一般的なベンチマークとは異なる切り口を持つ。

### Key Discussion Points

- **NitpickLawyer**: 新しい未知の問題だけが本当にモデル間の差を明らかにする。トップラボのモデルは拮抗していて、それ以外は大きく劣る。「Opus killer」のような誇張マーケティングが氾濫している。
- **dataviz1000**: ワンショット1回の試行では確率的モデルの評価として不十分。真の評価には約45回の試行が必要。
- **tromp**: ドキュメントのURLに誤りがある。また最新モデルが旧バージョンを下回る点は興味深い観察。

---

## 10. [A Man Who Invented the Future](https://hedgehogreview.com/web-features/thr/posts/the-man-who-invented-the-future)

**Score:** 22 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=47859543)

The Hedgehog Reviewに掲載された論考。「未来を発明した男」というタイトルが示唆するように、未来を予見・創造した人物についての考察。コメントではAlan Kayの言葉「The Best Way to Predict the Future is to Invent It（未来を予測する最善の方法はそれを発明することだ）」が引用されており、同氏がテーマの一つとして示唆されている。

### Key Discussion Points

- **shevy-java**: アラン・ケイだ。「未来を予測する最善の方法はそれを発明することだ」という名言も、元々は別の誰かから引用したものらしい。
- **randallsquared**: この記事は散漫で論旨が薄く、以前の良い草稿から残した表現が浮いていて気になる。

---

## Trends

今週のHacker Newsトップ10から浮かぶ共通テーマ：

1. **AI投資とインフラの過熱**: GoogleのAnthropic $40B投資が圧倒的注目を集めた。循環的な資本構造、コンピューティング容量の逼迫、ARRの爆発的成長が絡み合い、AIインフラ争奪戦は新たな段階に入っている。

2. **AIエージェントのメモリ・知識管理**: WUPHF（LLM Wiki）はMarkdown+Git+BM25でベクトルDB不要の知識基盤を実現。同日に3件のLLM Wiki系プロジェクトがHNフロントページに登場しており、エージェントの「記憶」問題がホットな開発領域になっている。

3. **ハードウェアのコモディティ化**: 10GbE USB、SFP+スイッチの低価格化など、かつてエンタープライズ専用だったネットワーク機器が個人・ホームユーザー向けに普及しつつある。

4. **シンプルさへの回帰**: プレーンテキスト、ラムダ計算ベンチマーク、Markdownファースト設計など、複雑なツールより単純・堅牢な基盤を選ぶトレンドが見られる。AIが多機能化するほど、制約された設計の価値が逆説的に高まっている。

5. **AIベンチマークの信頼性への疑問**: LamBenchの議論では「最新モデルが旧モデルに劣る」「1回のショットで評価するな」という声が上がった。ベンチマークの設計と評価方法論そのものへの批判的眼差しが強まっている。
