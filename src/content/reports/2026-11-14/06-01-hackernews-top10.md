---
title: "Hacker News Top 10 — 2026-11-14"
date: "2026-11-14T06:01"
category: "summary"
summary: "FAA 全米グラウンドストップ、Nvidia の GPU 希少性疑惑、Ratatui のセル境界線プロトコル、ggml v1.0.0 など"
tags: ["hackernews", "FAA", "Nvidia", "terminal", "ggml"]
---

## 1. [FAA issues national ground stop – lifted 4.5 hours later](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247)

**Score:** 1460 | **Comments:** 1127 | [Post](https://news.ycombinator.com/item?id=50489641)

FAA は東部時間 15:54 に「特別な事情と安全上の理由」で全米の出発便に対するグラウンドストップを発令し、20:15 に解除した。7,000 便超が欠航した。ダフィー運輸長官は、旧式の航空管制システムのルーターがデータで過負荷になり、レーダーや管制官・航空機間の通信に不安定が生じたと説明した（NBC News の記事に基づく）。

> **関連:** #3「Live airband on all frequencies from KORS. Victoria, CA also ground stopped」も参照（同一イベントの別の切り口: 航空無線の傍受）
> **関連:** #8「Show HN: Live map of U.S. flights during tonight's FAA nationwide ground stop」も参照（同一イベントの別の切り口: 飛行機の可視化マップ）

### Key Discussion Points

- **Alexsky2**: 2009 年の FAA 通信インフラ障害が似た故障モードに見えるとして紹介。今回の議論には管制システムの仕組みを知らない人の憶測が多いと指摘。
  - **sneak**: 回線交換（TDM）の方が優れており、パケット交換は電話通話にとって最悪だったと主張。
- **fooey**: WSJ の報道を紹介。通信ネットワークの障害が原因に見え、L3Harris が関係しているとの内容。
  - **sweswas2**: 金曜午後 3 時にこのような更新をするのは異例ではないかと疑問を呈した。
  - **Animats**: ARINC の地上無線は Collins が運用し、L3Harris はレーダーと ADS-B を担当していると思っていたと指摘。
- **Animats**: 情報が極端に少なく、報道は運輸長官の X への投稿頼みだと指摘。LAX の出発が 10:30 PST 頃から止まっていることを確認した。
  - **United857**: 欧州やメキシコ発の米国行き便も止まっていると報告。
- **elicash**: ホワイトハウスでの説明を引用。パッチ適用時に導入した新機器・新技術が旧システムを圧倒したという内容。
  - **Null-Set**: 新しい IP ルーターに不整合がなかったという説明は、レガシー回線上に IP をブリッジした結果として再送の嵐が起きた可能性を示すと推測。
  - **dnqthao**: 本番投入前にテストしなかったのか、新システム全体が動く保証はあるのかと疑問を呈した。
- **amluto**: 2004 年 9 月 14 日に米南西部の航空管制が停止した際に空にいた経験と、IEEE Spectrum の記事を紹介。

## 2. [Nvidia Allegedly Engineered Scarcity by Funding AI Startups to Buy Its GPUs](https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus)

**Score:** 249 | **Comments:** 127 | [Post](https://news.ycombinator.com/item?id=50493251)

元記事は bot チェックで取得できなかったため、コメントに基づく要約。Nvidia が AI スタートアップに出資し、その資金で自社 GPU を購入させることで、高い需要の印象を保ち TSMC の過剰在庫を捌いていた、という疑惑を伝える記事。

### Key Discussion Points

- **esalman**: GameWorks や PhysX、高価な G-Sync など、Nvidia の長年の反競争的行為を思い出すと投稿。
  - **diabllicseagull**: 同じく覚えているとして関連動画を紹介。
  - **nutjob2**: Nvidia は常にソフトウェアを競合妨害の道具にしてきた独占企業だと批判。
- **da_chicken**: 循環取引の構図は 1 年前から知られていたはずだと指摘。
  - **cloudbonsai**: 2025 年の非市場性証券 170 億ドルは売上 2,150 億ドルの約 8% にとどまり、数字が合うのかと疑問を呈した。
  - **bagacrap**: バブルは遠くから見えるが、いつ弾けるかは分からないと述べた。
- **blueblisters**: Nvidia は AGI/ASI を本気で信じておらず、余剰計算資源を吸収できるフロンティア研究に投資しなかったと指摘。
  - **reddmachine**: Nemotron や Parakeet は優れているが、フロンティアラボには及ばないと評価。
- **abhinai**: 記事の表現が否定的すぎ、著者の中立性を疑うと批判。
  - **gruez**: 「銀行がクレジットカードで消費者支出を促してインフレを引き起こした」と言うのと同じ構図だと反論。
  - **jackb4040**: 中立である必要はなく、反論があるなら論拠を示すべきだと返した。
- **kodoman**: GPU の価格が下がることを期待していると投稿。
  - **_bent**: 仮に Nvidia が暴落しても、各社の自社アクセラレータ向けメモリ需要があるため基板価格はあまり下がらないと指摘。

## 3. [Live airband on all frequencies from KORS. Victoria, CA also ground stopped](https://orcasairband.com/)

**Score:** 244 | **Comments:** 56 | [Post](https://news.ycombinator.com/item?id=50490593)

ワシントン州オルカス島（KORS）の周辺で、全周波数の航空無線をリアルタイムに傍受・文字起こしするサイト。ページの説明によれば、無線のやり取りから自動で作成しており、誤りや欠落がありえるためナビゲーション用途には使えない。FAA のグラウンドストップ時に、パイロットの会話を知る手段として注目された。

> **関連:** #1「FAA issues national ground stop – lifted 4.5 hours later」も参照（同一イベント: 全米グラウンドストップ）
> **関連:** #8「Show HN: Live map of U.S. flights during tonight's FAA nationwide ground stop」も参照（同一イベント: 飛行追跡マップ）

### Key Discussion Points

- **mmaunder**（投稿者）: Ettus B210 とデュアル 4090 のマシンで構成していると説明し、今日のグラウンドストップで島のパイロットに役立ったと述べた。
  - **jzawodn**: 自身もパイロット（3 機所有）で、受信機をホストしたいと申し出た。
  - **consumer451**: 島に住む家族がいると感謝を述べた。
  - **driverdan**: 本当にそれほどのハードが必要か質問。Pi と RTL-SDR 2 台で P25 スキャナーを作っている経験を挙げた。
- **mmaunder**（投稿者）: グラウンドストップに関連しそうな無線の書き起こし（2143Z の Victoria Ground での通信障害に関する発言など）を投稿。
- **molsongolden**: 14:03 のやり取りを引用。バンクーバー行きの出発が止まっていることが無線で確認されていた。
- **plipt**: 音声が非常に聞き取りにくいが、通信はなぜまだアナログなのかと質問。
  - **keito**: 地上で聞く録音は、機上や管制官が聞く音より弱い信号のため劣化しやすいと説明。
  - **mmaunder**（投稿者）: AM シンプレックスは重なると雑音になり、パイロット同士が状況を把握できる利点があると説明。
  - **ultrarunner**: 慣れれば聞き取れるようになると述べた。
- **kayfox**: NAV CANADA 側のグラウンドストップはなく、FAA のものだけだと指摘。

## 4. [FM-1 Workbench](https://open.m-vave.com/fm1-workbench)

**Score:** 212 | **Comments:** 137 | [Post](https://news.ycombinator.com/item?id=50488325)

M-Vave の小型シンセ「FM-1」向けのブラウザ版ワークベンチ。Web MIDI でデバイスに接続し、パラメータ編集、プロジェクトやサンプルの管理、DX7 の SysEx 取り込み、ファームウェア更新、公式 V15 への書き戻しができる（ページの内容より。ページ自体は中国語で、Chrome/Edge が必要）。

### Key Discussion Points

- **SamBam**: 購入を検討中だと述べ、音楽理論を学ぶのに役立つかと質問。
  - **patwolf**: 持っているが、音楽制作を始める最も簡単な方法ではないと評価。
  - **unleaded**: グルーヴボックスができることは、PC でも 15 年前からできる。価値は PC から離れてノブを回せる点だと主張。
- **tlahtinen**: カスタムファームウェアを数日おきに入れ替えており、ジェネラティブ系が好きだと紹介。ブラウザで試せるものも多いと述べた。
  - **hankbond**: NACHTFART を触ってみて、とてもリラックスできたと投稿。
- **consumer451**: 初号機が届く予定で、始める人向けの知識を求めた。
  - **chrisshroba**: カスタムファームウェアを探せる thefirmwarehub.com を紹介。
- **EmX_3000**: 本物の DIN MIDI がなく、ファンがあり、安っぽく見えると批判。
  - **brudgers**: 付いているのはスピーカーで、USB MIDI や Bluetooth MIDI も使えると反論。
  - **anigbrowl**: 小型機材は 3.5mm の MIDI ジャックが一般的だと反論。
- **jimmyjazz14**: カスタムファームでできることは、MIDI コントローラーと PC で昔からできると、ブームがよく分からないと述べた。
  - **SmirkingRevenge**: PC と MIDI コントローラーが究極の楽器だが、専用機は楽しさと集中のためのものだと返した。
- **anfractuosity**: 分解記事を見て、中身はソフトウェアなのかと質問。
  - **raphlinus**: ソフトウェアで、FM 音源は dexed と同じエンジン、チップは Blackfin だと説明。

## 5. [Terminal borders that don't cost a cell](https://www.joshka.net/cell-borders/)

**Score:** 170 | **Comments:** 79 | [Post](https://news.ycombinator.com/item?id=50491423)

Ratatui のメンテナである著者が、罫線をセルの内側ではなく端に細い線として描くターミナルプロトコルを提案。Ghostty へのパッチとして実装し、デモ用 Ratatui アプリを作った。罫線で行や列を消費せず、タブラベルを枠上に置けるなどの利点がある。非対応端末では罫線文字にフォールバックする。端末や TUI の作者からのフィードバックを求めている。

### Key Discussion Points

- **joouha**: より良い代替として、オーバーストライク（DECSET 20）の実装を提案。対応するのは mintty だけだと指摘した。
  - **inguz**: オーバーストライクは過小評価されていると述べた。
  - **hnlmorg**: 塗りつぶしと角丸を両立しにくい欠点を指摘。
  - **joshka**: ブログとは別の議論で、仕様に含まれる要素が減る欠点があると返した。
- **tptacek**: Ratatui を評価しつつ、端末を改造するならもっと野心的に、情報密度の高い UI 専用の端末を作らないのかと質問。
  - **joshka**: そうしたいとして、標準を捨ててセマンティックなプロトコルにする案を述べた。
  - **fc417fc802**: 自分は端末の制約があるから CLI/TUI を使うと反論。
  - **unshavedyak**: 同様のことを実際に模索していると述べた。
- **matheusmoreira**: 端末が軽量ブラウザ化している気がすると述べた。
  - **joshka**: むしろ、アプリの境界をなくして合成可能な領域を持つ OS を見たいと返した。
- **kodoman**: GUI の再発明に見え、素のテキストの柔軟さを好むと述べた。
  - **acjohnson55**: 同意し、2D UI は専用矩形の iframe/canvas のほうがよいと述べた。
- **nixpulvis**: 互換性が難しく、アプリ側が見た目を把握できないのは困ると指摘。
  - **joshka**: ratatui の変更は自分のフォーク上の PoC で、既定になることはないと説明。
- **CGamesPlay**: GUI を tty に入れる流れには反対だが、この機能は良く、Vim が映えそうだと述べた。

## 6. [Found: A protein that drives ageing without unleashing inflammation](https://www.nature.com/articles/d41586-026-03638-3)

**Score:** 167 | **Comments:** 26 | [Post](https://news.ycombinator.com/item?id=50488470)

Nature のニュース。granzyme K を欠損させた老齢マウスは、心臓・肝臓の機能が改善し、腎臓の損傷が少なかった（og:description に基づく。本文は購読者向けのためリード文のみを参照）。

### Key Discussion Points

- **neom**: 論文（Immunity 誌）へのリンクを紹介し、タンパク質は Granzyme K だと補足。
  - **kridsdale1**: 「Granny Enzyme」と呼べるのではと投稿。
- **ethanj8011**: 論文アブストラクトの引用で、GzmK は組織特異的な老化の駆動因子であり、免疫老化や全身性の慢性炎症には関与しないという、より繊細な内容だと指摘。
  - **negura**: 元の見出しは論文に照らして正確だと反論。
- **agnosticmantis**: 「In mice.」と指摘。
  - **derektank**: ヒトも同じタンパク質を持ち、ノックアウト研究は人間の生物学に有益だったと反論。
  - **glenstein**: 「in mice」というミームはもう引退させるべきだと主張。
- **A_D_E_P_T**: 老齢マウスの多くはがんで死ぬため、寿命への影響は小さいだろうと指摘。
  - **maerF0x0**: 老化の逆転は何度も実現したが、ヒトには効かなかったと指摘。

## 7. [Ggml v1.0.0](https://github.com/ggml-org/ggml/releases/tag/v1.0.0)

**Score:** 134 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=50493062)

llama.cpp の基盤である ggml の v1.0.0。非推奨 API と旧 DIAG_MASK 系オペレーションを削除し、YaRN の切り捨て設定や FP8 対応を追加。CUDA/Metal の少行量子化 matmul と MoE 融合、Vulkan の FlashAttention、SYCL・OpenCL・WebGPU・Hexagon の改善など、各バックエンドで性能改善が入った。

### Key Discussion Points

- **jacquesm**: このプロジェクトと llama.cpp は、同じハードで高速化を続けており、更新のたびに 5〜10% 速くなると評価。
- **evilelectron**: ggml と llama.cpp は AI 界の Linux だと称賛。
- **kodoman**: 非力な AMD カード（Vulkan のみ）でも使えるのは ggml と llama.cpp のおかげだと述べた。
- **snvzz**: レガシーハードだけでなく RISC-V 対応で近い将来にも備えていると述べた。
- **om8**: 「自分の名を冠したライブラリ」と皮肉り、GGML は作者 Georgi Gerganov のイニシャルだと引用。

## 8. [Show HN: Live map of U.S. flights during tonight's FAA nationwide ground stop](https://grounds.top/)

**Score:** 101 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=50491545)

FAA の全米グラウンドストップ中の米国内商用機の飛行状況を地図上で再生できるサイト。adsb.fi の ADS-B データと FAA の遅延フィードを使い、空港ごとの出発回復状況や欠便数の推計、過去の全米停止との比較を表示する。非公式のページ。

> **関連:** #1「FAA issues national ground stop – lifted 4.5 hours later」も参照（同一イベント: 全米グラウンドストップ）
> **関連:** #3「Live airband on all frequencies from KORS. Victoria, CA also ground stopped」も参照（同一イベント: 航空無線の傍受）

### Key Discussion Points

- **gvsi**（投稿者）: 9/11 の飛行 GIF を思い出し、Claude Code で約 30 分で作って公開したと説明。
- **halamadrid**: 作業の速さを称賛し、データが公開されていることを知らなかったと述べた。
- **bmfischer3**: データの出所を質問。
- **cobychapple**: FAA がセンター間のレーダーや周波数を失っても、ADS-B は機体自身が発信するので、アマチュア受信機が全体像を保っていただろうと指摘。

## 9. [What Happened to 3Com?](https://dfarq.homeip.net/what-happened-to-3com/)

**Score:** 101 | **Comments:** 56 | [Post](https://news.ycombinator.com/item?id=50491830)

ネットワーク機器メーカー 3Com の衰退を振り返る記事。元記事は取得できなかったため、コメントに基づく。ネットワークカードのコモディティ化や、別事業への参入が失敗したことなどが話題になっている。

### Key Discussion Points

- **msgilligan**: 1980 年代半ばの 3Com 勤務経験を語った。3c50x の故障率が低く、生涯保証につなげた分析が社内にあったという。
- **EvanAnderson**: Bob Metcalfe のオーラルヒストリー（Computer History Museum）を紹介。
- **as-j**: 90 年代後半に、3Com の 4 人目の社員 Ron Crane に雇われた個人的な縁を語った。
- **msgilligan**: ソフトウェア部門が Novell に負け、Microsoft と組んで大失敗したと語った。
- **K0balt**: 安価な製品が 9 割の用途で十分になり、次に参入した分野でも同じことが起きたと指摘。
  - **fhn**: ネットワークカードはマザーボードに統合されて消えたと述べた。
- **gnabgib**: 記事は 2022 年の投稿で、日付だけ 2026 に更新されていると指摘。

## 10. [Unsloth Qwen3.8-27B Quantizations – Dynamic v3.1 Update](https://unsloth.ai/docs/models/qwen3.8)

**Score:** 74 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=50491980)

Unsloth のドキュメントページ。Qwen3.8-27B（密なモデル、視覚と推論、256K コンテキスト、17GB の RAM/VRAM で動作）を Dynamic GGUF 量子化でローカル実行する手順を説明している。

### Key Discussion Points

- **aliljet**: 弱い GPU の人は多く、今回の更新は大きな前進だと述べた。
  - 27B モデルを遅くても夜通し動かせる環境を待っているとの希望。
- **quaddoggy**: Qwen 3.8 Splash を M4 Mac mini（48GB、LM Studio）で試し、思考ありでも平均 45 tps と報告。
- **nout**: TensorFold 版の 3.8-27B と比べてどうかと質問。
- **hacker_88**: VRAM 12GB・RAM 16GB の Windows でも単一ページの HTML を作れたと報告。
- **ilaksh**: 最小の量子化は Bonsai 2 と比べてどうかと質問。

## Trends

- **FAA のグラウンドストップ**が 3 件（#1、#3、#8）を占めた。公式情報が乏しい中、コミュニティが ADS-B や航空無線から独自に状況を可視化した。#8 は Claude Code で約 30 分で作られている。
- **AI インフラの経済性**: Nvidia の循環出資疑惑（#2）と、ggml/Unsloth を通じたローカル推論の進展（#7、#10）が並んだ。
- **ツールの再発明と互換性**: ターミナルの境界線プロトコル（#5）や FM-1 の自由なファームウェア（#4）は、既存の制約を超えようとする試みだが、コメントでは従来のやり方への愛着も根強い。
- **科学記事への慎重な読み方**: マウス研究の見出し（#6）に対し、論文の原文に当たって解釈を補う動きがあった。
