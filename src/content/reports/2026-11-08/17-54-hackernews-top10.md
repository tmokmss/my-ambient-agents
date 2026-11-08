---
title: "Hacker News Top 10 (2026-11-08 17:54 UTC)"
date: "2026-11-08T17:54"
category: "summary"
summary: "10ドルのOpenStick自宅サーバー、Claude CodeからPiへの乗り換え、64GB RAMで284B DeepSeekなど"
tags: ["hackernews", "ai", "homelab", "llm"]
---

## 1. [What I run on my $10 USD OpenStick homelab](https://blog.bosscher.ch/posts/openstick/)

**Score:** 705 | **Comments:** 126 | [Post](https://news.ycombinator.com/item?id=50406670)

約10ドルの4G LTEモデムスティック「OpenStick」（4コア1GHz Cortex-A53、実質約450MBのRAM、4GB eMMC、Debian）でホームサーバーを運用する記事。AdGuard Home（DNSクエリの約60%をブロック）、Beszel/Gatus、Fusion RSS、Shiori、Cloudflare Tunnel、Telegram経由のAIエージェント Zeroclaw などを動かし、多くのサービスは数十MBのメモリで動く。静音・省電力な小型サーバーとして実用的だと主張している。

### Key Discussion Points

- **rwmj**: かつてPerlのLAMPサイトをホスティングしていた頃の標準構成（デュアルPentium II、512MB RAM、100Mbps）と酷似しており、数百の同時接続を捌いていた。eMMCは当時のHDDより速いだろうという指摘。
  - **mikey2410**: デュアルPII-450機はシングルPentium III-900機よりはるかに応答性が高く、スワップしない限り負荷時に最速だった。
  - **hoppp**: 当時の構成に比べ、10ドルで同等以上というのは驚異的。
- **LaurensBER**（投稿者）: RAMが高騰する今、セルフホスティング入門にも良いと考えた。追加ソフトの提案を歓迎。
  - **NortySpock**: Raspberry Pi 4やシンクライアントで常時稼働させている軽量サービス群を紹介（victoria-metrics 230MB、mosquitto 5MBなど）。パッシブ冷却の計算機は「タダ」のように感じるという。
  - **polycancel**: 他サイトの手順に従いホットスポット接続を削除したらデバイスがブリックし、EDLモードへの入り方を質問。
  - **Grombobulous**: 元のOpenStickリポジトリが4年ほど放置されている点は問題ないかと質問。
- **e12e**: USB経由のTCPで4Gルーター/Wi-Fi APにできるか、USBキーボード/マウスのエミュレートやシリアルコンソールとして使えるかを疑問視。
- **fweimer**: RAMが極小のため、AArch64ではなく32-bit Armを使うべきか質問。
- **wgx**: 「どこでも計算資源」というSFの約束が実現する一方、AIが数件のゼロデイでそれらを悪用しうる点への不安。

## 2. [Goodbye Claude, hello Pi](https://caleb.software/posts/claude-to-pi.html)

**Score:** 565 | **Comments:** 353 | [Post](https://news.ycombinator.com/item?id=50410107)

著者がClaude CodeからコーディングハーネスのPiに乗り換えた理由を述べた記事。複数セッションがIDEの選択範囲を受け取れないバグ、VS Code拡張の機能不足、頻繁なリリースによるシステムプロンプト/ツール記述の変更、トークンのオーバーヘッド、方向性の見えない機能肥大化に不満を挙げ、安定性・ミニマルさ・カスタマイズ性の高いPiを選んだ。

### Key Discussion Points

- **bottlepalm**: LLM利用が急増してTUIでは足りなくなり、ChatGPT/Claudeデスクトップ版へ移行。VS Codeはレビューとgit管理用に。GUIは詳細を折りたため、履歴の見通しが良い。
  - **jnordt**: TUIからGUIに移り、Orca IDEを常用。Anthropic/OpenAIの両サブスクを切り替え、リモートホストでのジョブ実行やチャット/TUI表示の切替ができる。
  - **yoz-y**: 同様にGUIへ。スマホから操作したいので独自ラッパーを書いた。
  - **Daviey**: 複数エージェント同時運用にはherdr等のTUIの方がスケールする。VS Code/GUIの優位が分からない。
- **leobuskin**: Piは良いが、Anthropicサブスクでの利用は規約違反によるBANの恐れ、独自ヘッダーや未公開機能の非対応、CCの方が優れたcompact、キャッシュの癖などから他社ハーネスは避けるべきと主張。
  - **miki123211**: 多くのハーネスは会話をappend-onlyで設計しておらず、システムプロンプトに日付等を動的注入してキャッシュを壊しがち。
  - **sausagefeet**: Piの要点は拡張。CCは一貫性のない寄せ集めに感じ、戻れない。
  - **WildGreenLeave**: claude-bridgeとpi-vccで圧縮も快適。Anthropic依存をMistralへ移行中。
- **real_faxenoff**: 自作エージェント実装のためハーネスの内部を調べ、モデル性能の多くはハーネスに依存すると気付いた。
- **gvkhna**: Piは「自分のもの」で完全に制御でき、エージェントを動かす側から指揮する側へ進める。少量のシステムプロンプトで挙動が大きく改善した。
  - **mark_l_watson**: 自作ハーネスを4つ書いた上で、Piとローカルモデル/安価なAPIが基盤になっている。
  - **CarlitosHighway**: OpenCode+OpenChamberがあるのにPiへ移る理由があるのかと疑問。
  - **regexorcist**: 自分のものにするのはどのハーネスでもできる。Node.js環境が嫌いでGo製の小さなハーネスを拡張している。
- **artrax**: CC→Codex→Piと移るほど、プロンプト工学が不要になりタスクに集中するようになった。AnthropicがDiffビューアをTUIに入れたのは偽善的で、自分はPi拡張を作った。
  - **hombre_fatal**: サイドバーのDiffは今エージェントが何を触っているかの把握に役立ち、エディタでは代替できない。

## 3. [Llama-modchip: 284B DeepSeek on 64GB RAM, no GPU](https://github.com/synchopate/llama-modchip)

**Score:** 213 | **Comments:** 64 | [Post](https://news.ycombinator.com/item?id=50411961)

llama.cppのフォークで、284BパラメータのMoEモデルDeepSeek-V4-Flashを56.56GiBのチェックポイント（256Kコンテキストでピーク約57.6GiB RSS）に収め、GPUなしのCPUのみで動かすと謳うプロジェクト。READMEによればプリフィル約44 tok/s、デコード約9〜15 tok/s、30B級MoEでは60〜111 tok/sを主張している。

### Key Discussion Points

- **armcat**: 積極的な量子化は性能が非線形に劣化し、サイズ対性能のピークは4bit付近という研究がある。音声モデルでは8bit未満で品質が大きく落ちた。
  - **augment_me**: 入出力に近い層は量子化に弱く、中央の層は1〜2bitでも耐える研究があり、一律には言えない。
  - **Youden**: 引用論文はQATを対象外としており、QATを使う現代の低bit配布には単純に当てはめられない。
  - **pu_pe**: DeepSeek v4.1 flashの2bitは今も強力で、速度のためなら精度を犠牲にする価値がある。
- **antirez**: 128GBのユニファイドメモリなら、プリフィル約300 t/sでコーディングエージェントにも許容できる速度で動かせるという例を紹介。
  - **embedding-shape**: 紹介動画では43入力トークンの処理に約4秒かかっており、「許容できる速さ」に見えない。ウォームコンテキストの話かと質問。
  - **sureglymop**: Ryzen AI Max+ 395と128GBがあるが活かし切れておらず、より強力な構成を知りたい。
  - **boricj**: Ryzen 7 7840HS+64GBのホームサーバーでgemma4:26bを使用。文脈が長くなると急に遅くなるというARCHITECTURE.mdの記述に同意。
- **boredatoms**: 量子化が最重要情報なのに、冗長なREADMEから読み取れない。
  - **jazzypants**: 2bitのようだ。ColibriなどがすでにCPU推論の先行事例を示しており、なぜここまで支持されたのか分からない。
  - **edf13**: 2bitなら精度はかなり悪いのでは。
- **dgreensp**: CPUだけでなぜ十分速いのか、「modchip」とは何を指すのか（質問）。
- **akie**: どの量子化か（2bitらしい）、出力品質は期待できないのではないか。
  - **madduci**: 4/5bit未満は本当に悪い。
  - **adrian17**: READMEの76.87GiBのサイズ表記がUnslothのIQ2_XXS（91GB）と食い違う。「圧縮」「MoE枝刈り」の表現も、性能がさらに劣化していそうだと指摘。
  - **Tepix**: 「軽いスイッチで毎秒XXトークン」系の見出しは大抵4bit未満で、ほぼ役に立たない。

## 4. [OpenAI raises $11B at a $1.25T valuation](https://247wallst.com/investing/2026/11/07/openai-just-raised-11-billion-at-a-1-25-trillion-valuation-below-the-1-4-trillion-it-first-sought/)

**Score:** 141 | **Comments:** 142 | [Post](https://news.ycombinator.com/item?id=50413822)

OpenAIが約110億ドルを調達（評価額は調達前で1.25兆ドル）。当初狙っていた約1.4兆ドルを下回った。SoftBankやMGXが参加したが、最大90億ドルの追加トランシェは未クローズで、当初目標の300億ドルより小さくなる可能性がある。

### Key Discussion Points

- **krona**: ハードウェア効率が年40%向上する中で資本集約度が高いと、数年ごとに破綻しかねない。モデルが1兆ドルかかるなら競争は起きないだろう。
- **cmiles8**: 真の見出しは、希望した評価額と調達額に届かなかったこと。AIの先行きへの懸念で投資家が足りなかった。
- **bob1029**: OpenAIはAnthropicより長期戦略で動いているように見える。IPOは財務悪化に先んじる最後の手段。
- **GodelNumbering**: UAEの投資ファンド（MGXなど）が最大100億ドルを約束したという未確認報道があった。
- **chris_va**: クラスA株が優先して払われるため、ここでの「評価額」は一般投資家が買う普通株の価値とは限らない。

## 5. [Writing as a thinking tool](http://muratbuffalo.blogspot.com/2026/11/writing-as-thinking-tool.html)

**Score:** 118 | **Comments:** 32 | [Post](https://news.ycombinator.com/item?id=50412067)

書くことを思考の道具として捉えるブログ記事（記事本文は取得できず、コメントから推測した要約）。有限オートマトンとチューリングマシンの比較のように、紙に書くことが記憶領域の役割を果たし、思考を拡張すると論じているようだ。

### Key Discussion Points

- **billypilgrim**: PhD開始時は論文執筆を結果をまとめるだけの作業と考えていたが、実際は科学的プロセスの多くが書く力に依存していた。
- **beej71**: 教師や書き手は、制作を通じて多くを学ぶ。安価なマーブル模様のノートが好き。
- **hoppp**: プロジェクトの多くは紙のスケッチ（システム図）から生まれ、紙で整理できてから実装に入る。
- **ForgotMyUUID**: チューリングマシンとの比較が楽しい。複雑な仕事を調べる時は紙やスライド、マークダウンでメモを取り、視野に収める。
- **lilerjee**: コードを書くこと自体も、何を作るか、本当の要件は何かを考える思考の道具である。

## 6. [Porting Android 16 to my blind mother's keypad phone](https://z1x.us/blog/four-hundred-bucks-of-e-waste)

**Score:** 91 | **Comments:** 32 | [Post](https://news.ycombinator.com/item?id=50366821)

視覚障害のある母親のため、中古で400ドル出して買ったキーパッド端末（Kapsys SmartVision3、Android 11、パッチレベルは2024年4月）が低スペックで不具合だらけだったため、自作ROMでAndroid 16を移植した記録（Wayback Machineのスナップショットに基づく）。Telegramがバックグラウンドで動かない等の問題があり、キーパッドやホーム画面、キーボードを担う小さなアプリも自作した。

### Key Discussion Points

- **zersiax**: 高齢者・視覚障害者向けAndroid端末を古いバージョンで低スペックにし高額で売る手法は昔からある。Blindshellなどが例。
- **e12e**: Androidはやはりt iOSより有意に開かれていることの証明。再現できるよう詳細がもっとあるとなお良い。
- **Doohickey-d**: GSI（汎用システムイメージ）は全機能が動かないことが多い。通話、カメラ、モバイル通信は実機確認したのか。
- **haunter**: 2007年にGoogleがBlackBerry風のキーパッド端末でAndroidをデモしていた。
- **yjftsjthsd-h**: キーボードが特別なアプリに結びついているのが分からない。Androidは物理キーボードを扱えるはず。

## 7. [JIT bitmap text rendering for microcontrollers](https://linebender.org/blog/jit-bitmap-text/)

**Score:** 68 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=50412072)

Raph LevienがRP2350マイコン向けのビットマップテキスト描画手法を紹介。文字列ごとに最適化したARMコードをJITで生成し、race-the-beam描画のタイミング制約内で1bppのスキャンラインを埋める。パックされたフォントと単純な内積ベースのカーニングを使い、1コアの処理能力の約2.6%しか消費しない。

### Key Discussion Points

- **drfuchs**: 近い先行例として、グリフを命令列にコンパイルして描画する1996年出願の特許（US-6377261-B1）がある。
- **karmakaze**: 大きなフレームバッファを使う近年のレトロ機はハード寄りの感覚が薄いが、この実装は昔の親密さを思い出させる。
- **codazoda**: マイコン向けBASIC32を開発中。この手法では「読み出し」ができず、画面が書き込み専用になるのが代償。
- **erichocean**: CoreText代替を作っており、JIT+アトラス描画がCoreTextより高速で高品質。
- **toolbrewlab**: グリフの縁をビットベクタ化し、重なりのpopcountで間隔を決める内積カーニングが優雅。

## 8. [The Reconstruction of Torn Documents](https://www.bundesarchiv.de/en/stasi-records-archive/the-reconstruction-of-torn-documents/)

**Score:** 40 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=50389923)

1989〜90年にStasi職員が手で破った文書の復元について。手作業で600袋から約170万ページを復元した。コンピュータ支援の試験プロジェクトは23袋から約9.1万ページを復元したが、量産に十分な効率には達せず、連邦公文書館は契約を終了して新たな委託先を探す。手作業の復元は継続している。

### Key Discussion Points

- **kevin_thibedeau**: シュレッダー紙は復元できるか、という記事の問いに対し、1990年に極細に裁断された数千袋は1991年に検査後破棄済みで、復元は不可能と引用。
- **ceejayoz**: Vernor Vinge『Rainbows End』に、図書館の蔵書を巨大シュレッダーで破砕しながらデジタル化する場面がある。
- **bbor**: 新しいDL技術でパイプラインを組めるはずだと考えるが、契約要件上アメリカの個人は参加できなさそう。
- **kleiba2**: 2007年以来、Fraunhofer IPKに約650万ユーロが支払われてきたことを指摘。
- **esafak**: 技術的な議論材料がない。問題は技術ではなく資金等ではないかと推測。2012年のBBC記事を紹介。

## 9. [Show HN: Vegetable Gardening for Engineers](https://jrcpl.us/contrib/2020/gardening-for-engineers/)

**Score:** 33 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=50362963)

エンジニア向けの家庭菜園ガイド。屋内・ベランダでの水耕栽培やコンテナ栽培を中心に、光、温度、湿度、CO₂、養液濃度（EC）、pH、酸素が成長に及ぼす影響や、栄養と培地を解説。水や害虫の節はまだ未記入。

### Key Discussion Points

- **schiffern**: 記事の「成長速度と成長品質のトレードオフ（高温は成長が速い反面、茎が細く弱くなる）」の記述を引用。
- **mirpetri**: 園芸は金がかかり毎年違う。イチゴのナメクジ、ピーマンやバラのアブラムシ、トマトのカビなど次々と問題が起きる。

## 10. [I'm not a fan of Deno's security model (2024)](https://goldstein.lol/posts/deno-security/)

**Score:** 29 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=50413769)

Denoの権限システムはプロセスをサンドボックス化せず標準ライブラリの呼び出しを絞るだけで、本質的に不十分で誤解を招くという批判。権限プロンプトは端末へのテキスト出力のため悪意あるコードに改変され得て、`--allow-run` もPATH操作やLD_PRELOADで回避できる。信頼できないコードは bwrap 等のOSレベルのサンドボックスで動かすべきと結論づける。

### Key Discussion Points

- **jFriedensreich**: 権限を正しく扱おうとした代替ランタイムはDenoくらいだった。ユーザー対話つき非同期権限のOSツールが必要。
- **phyzome**: 攻撃者のデータを出力した後に機微な入力を求めるターミナルアプリを作っており、Unicodeの扱いに悩んでいる。
- **hoppp**: Denoの公式サポートは残り1年だが、Nodeにはない仕組みを持つ点は評価していた。
- **kevin_thibedeau**: 絵文字が見える点は、端末をテキスト表示モードにすれば色付けできるためあまり頼れない。

## Trends

- **AIコーディングツールとハーネスへの関心**: Claude CodeからPiへの乗り換え(#2)では、ハーネスの設計・キャッシュ・拡張性やTUI/GUIの是非が論点になった。Piの議論は353コメントと活発。
- **「小さなハード/低リソースで大きなことを」**: 10ドルのOpenStick(#1)、64GB CPUで284Bモデル(#3)、マイコンのJIT文字描画(#7)と、制約の中での工夫が支持を集めた。#3は量子化の品質や誇張的なREADMEへの懐疑も強かった。
- **AI資本市場**: OpenAIの調達(#4)は当初目標を下回り、バリュエーションへの慎重な見方が出た。
- **セキュリティとサンドボックス**: Denoの権限モデル批判(#10)は、プロセスレベルの権限より、OSレベルの隔離を重視する流れと合致する。
- **思考・実践の記録**: 書くことを思考の道具とする話(#5)、Stasi文書復元(#8)、家庭菜園(#9)など、ITの外側に及ぶ話題も入った。
