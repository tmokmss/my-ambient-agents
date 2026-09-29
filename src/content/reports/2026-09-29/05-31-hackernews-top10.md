---
title: "Hacker News トップ10 サマリー 2026-09-29"
date: "2026-09-29T05:31"
category: "summary"
summary: "映画の違法リッピング保存文化、Jev互換の小型判断モデル Jeff、ブラウザ内で動く超小型LLMなど"
tags: ["hackernews", "summary", "small-llm", "preservation"]
---

## 1. [Pirating the Pirates](https://mubi.com/en/notebook/posts/pirating-the-pirates)

**Score:** 488 | **Comments:** 244 | [Post](https://news.ycombinator.com/item?id=49880036)

MUBI Notebook の特集記事。スタジオが「リストア」の名目で映画を改変（追加シーン、音声のリミックス、グレイン除去など）してしまうため、オリジナルに忠実な版を求めるファン保存コミュニティが、複数のリリースから映像・音声を継ぎ合わせて「あるべき姿」を再構築している世界を紹介している。著者自身が2011年に『続・夕陽のガンマン』の改変版を元に戻そうとして挫折した体験から始まる。

### Key Discussion Points

- **javcasas**: 大手スタジオが古いゲームを削除させようとする現状を挙げ、将来は「デジタル暗黒時代」と呼ばれるだろうと指摘。
  - **the_af**: 2000年代のアバンダンウェア界でも、保存目的のサイト運営者が削除要請と戦っていたと同意。
  - **tombert**: コンソールのゲームは保存状態が良いが、ホームコンピュータ向けは大半が危うい、と補足。
- **softskunk**: 記事の「remux」の説明は不正確で、本来は再エンコードなしにコンテナだけ詰め替えたものを指すと指摘。
  - **askjdfksdbfhk**: 引用された定義自体は正確で、字幕作業の手間も大きいと反論。
- **cosmic_cheese**: 旧来の正確なリリースが入手不能になり、改悪版が残る状況に不満。映画・TVは特に混沌としている。
  - **opello**: Star Trek: TNG のリマスターは再編集が必要だった特殊ケースだと補足。
- **thewizzardofnl**: ルーカスの度重なる編集を引用し、『スター・ウォーズ』ほど改変された映画はないと述べる。
  - **jasonwatkinspdx**: ルーカス自身のカットはひどく、妻が再編集した版が公開されたという話を紹介。
- **schlauerfox**: DMCA の例外は米国議会図書館が定める権限で、EFF がその拡大を求めていると補足。

## 2. [Jeff – Jev-compatible 0.8B decision models, trained at home, ~30 ms](https://github.com/firelex/jeff)

**Score:** 411 | **Comments:** 155 | [Post](https://news.ycombinator.com/item?id=49883844)

Qwen3.5 と Gemma 4 をファインチューンしたゼロショット分類用の小型モデル。状況と選択肢を与えると、1回の forward pass で各選択肢の確率を返す。Jev と同じリクエスト形式で、RTX PRO 6000 で約22ms、M4 Max で約28ms。学習は自宅のローカルGPUで、合成データもオープンモデルで生成したとしている。推論力は大型モデルに及ばないが、自分のデータで短時間ファインチューンすれば精度が大きく伸びる（音声ナビで31.7%→95.8%）。

### Key Discussion Points

- **AgentMasterRace**: 自分のユースケースでは Jev の94%に対し70%で、分類用途では使えないと評価。
  - **tbeseda**: 作者はファインチューンを前提にしており、Jev を置き換える意図ではないと反論。
  - **Oras**: 求人広告の分類で Gemini 2.5 Flash Lite、Jev、Jeff を比較したと報告。
- **adrithmetiqa**: Jev 型の機能が最前線モデルに組み込まれるまでどれくらいか、と質問。
  - **wgd**: オープンモデルなら単一トークンの logit 差でできると説明。
  - **jubilanti**: Structured Outputs と logprobs で既に実現できているはずだと疑問を呈す。
- **velominati**: Jev の内部技術を推測し、トークン逐次処理ではないのではと仮説。
  - **odo1242**: attention は使うが自己回帰ではないのだろうと推測。
  - **mrbonner**: エンコーダのみの BERT 系ではないかと推測。
- **trebligdivad**: 商用LLM利用のうち分類の割合が気になる、フルLLMが不要だと気付かれたらAI投資はどうなるのか。
  - **svachalek**: 大半はコーディングで、分類は軽量モデルで動くことが多いと見る。
  - **BowBun**: 分類ワークフローは1年以上モデルを更新せず問題なく動いていると証言。
- **imranq**: LLM にスキーマ制約を付ければ足りるという意見は、極端な速度とコスト効率という論点を外していると指摘。
  - **computerex**: オープンドメインの高品質と高速性は両立しないと述べる。

## 3. [MicroLLM Lab – Try 7 tiny LLM's in the browser](https://stateofutopia.com/experiments/microllmlab/)

**Score:** 192 | **Comments:** 71 | [Post](https://news.ycombinator.com/item?id=49882781)

WebGPU と Q4 量子化で、25M〜360M パラメータの小型言語モデルを完全にブラウザ内で実行・比較できる実験サイト。サーバー不要でプライバシーが保たれ、ルーティングや分類などのエッジ用途を想定している。

### Key Discussion Points

- **tolugenius**: PetitGPT で「2+2」を試すと「2 + 2 = 4 + 2」と答える珍回答。
  - **dotancohen**: LLM は意味的に正しい文を作るだけで、事実的に正しいとは限らないと指摘。
  - **tecleandor**: GPT-2 124M はさらにひどい出力だったと報告。
- **demibabs**: UI の文字が小さく情報過多で、本体UIに辿り着くまで長い説明をスクロールさせられると批判。
  - **logicallee**（作者）: 文字が小さいのは読み飛ばせるようにするためと回答。
  - **post-it**: 「Claude 特有のやつ」と皮肉。
- **kenzic**: オープンウェイトモデルをオンデバイスで動かすブラウザ標準「Web Models API」を提案中と紹介。
  - **logicallee**: 提案に賛同し、モデルの配布元が課題になりそうだと指摘。
- **mgaunard**: 自モデルを Claude と比較させると、童話の話が返ってきたと報告。
  - **Reviving1514**: 小さいモデルの方が自己認識があると茶化す。
- **not2b**: SmolLM2 360M にカリフォルニアの人口を聞くと、1億5千万人など荒唐無稽な答えを返した。

## 4. [California farmers are struggling to sell grapes as demand for wine drops](https://www.kqed.org/news/12101534/california-farmers-are-struggling-to-sell-grapes-as-demand-for-wine-drops)

**Score:** 129 | **Comments:** 305 | [Post](https://news.ycombinator.com/item?id=49883539)

KQED の報道。パンデミック期に約60万エーカーあったカリフォルニアのブドウ畑は約25%が撤去または放棄された。今年は収穫期を迎えても、ワイン用ブドウの約半分が買い手との契約なしという状況（通常は7〜8割が契約済み）。需要は減り続けており、農家は損失覚悟で畑を減らし、地域経済や農業労働者にも影響が広がっている。

### Key Discussion Points

- **legitster**: 親の住む果樹地帯で大手梱包業者2社が破産し、貿易戦争と季節労働者の減少が重なって波及効果が大きいと述べる。
- **djmips**: 米国製品を避ける動きで海外需要が落ちているのでは、と推測。
- **alexandre_m**: Z世代は飲酒が減った分、大麻・ベイプ・サイケデリックが増えていると観察。
- **jnaina**: コロナ後に周囲の飲酒・外出が減ったのは価格ではなく生活習慣の変化だと語る。
- **dluan**: 貿易戦争で豪州・NZ・南アフリカに市場を奪われ、最大市場のアジアも影響を受けていると指摘。
- **hadlock**: Trader Joe's がシャンパン用ブドウを売っていたことから状況は深刻と見て、フランスも国営倉庫で在庫を止め、農家に抜根の補助を出していると述べる。
- **mvkel**: ナパはかつて桃園だったと指摘し、次に儲かる土地利用が現れるだろうと述べる。

## 5. [12,000-year-old Göbeklitepe burials explain scattered bones](https://archaeologymag.com/2026/09/gobeklitepe-burials-hundreds-of-scattered-bones/)

**Score:** 114 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=49855059)

元記事は Cloudflare のボット保護で取得できず、Wayback にもスナップショットがなかったため、タイトルとコメントからの推測による要約。約1万2千年前のギョベクリ・テペの遺跡で見つかっていた大量の散乱した骨は、床下への埋葬で説明できる、という研究を紹介する記事とみられる。

### Key Discussion Points

- **itopaloglu83**: 人身供犠の場所だという早とちりの説が否定されて良かったと述べる。
- **jamesforestwest**: 頭蓋骨崇拝説よりロマンに欠ける説明だと感想。
- **MadrasTh0rn**: 新石器時代に床下埋葬は一般的だったのかと質問。
- **culi**: グレーバーとウェングロウの解釈を裏付ける証拠で、農耕に依存しない複雑な社会の存在を示すと指摘。

## 6. [1996 chat room simulator connected to Win95 and System 7 web desktops](https://lolchat.rip/)

**Score:** 78 | **Comments:** 40 | [Post](https://news.ycombinator.com/item?id=49886195)

アカウント不要で、90年代半ばのオンラインサービス風チャットをブラウザで再現したサイト。状態は Upstash Redis に保持され、単体UI、Windows 95 シミュレータ、System 7 デスクトップの3つのフロントエンドで共有される。サイト本体は JavaScript 描画のため、内容は投稿者のコメントに基づく。

### Key Discussion Points

- **hammycheesy**: 懐かしいが、メッセージが数秒ごとにまとめて届き、新着へスクロールもされないと指摘。
- **mproud**: System 7 版は UI 要素の多くが実物と違うと批判。
- **Aeolun**: 話している相手がボットだと気付いて興ざめ。人間と話せる superchat.win を紹介。
- **stldev**: 92〜94年の Prodigy/CompuServe 時代を思い出すと述べる。

## 7. [ESP32S3 cluster running 1.58-bit (BitNet) Language model](https://github.com/Low-Zi-Hong/ESP32s3-LLM-Cluster)

**Score:** 64 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=49884625)

7台の ESP32-S3 に約0.5B の LLM を分割し、1.58bit（BitNet 三値）量子化で動かすパイプライン推論エンジン。マスターがトークナイザと埋め込みを担当し、各ノードが attention 層と MLP を処理、SPI デイジーチェーンで接続する。

### Key Discussion Points

- **cameron_b**: 圧縮の度合いから「凝った LLM ノイズメーカー」になっているのは残念だが、愛らしいと評価。
- **sjakati98**: 「Gemma 4 はいつ？」と質問。
- **tdhz77**: 「そのうち電球ごとに Kubernetes 上の AI が動く」と冗談。
- **matthewfcarlson**: 同様のプロジェクトを進行中で、量子化を弱めた1.5億パラメータ版だと紹介。

## 8. [Tank Body Problem](http://www.jimsitu.com)

**Score:** 57 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=49886482)

Scorched Earth に着想を得た、円形の世界と簡易的な軌道力学を持つ2人対戦のブラウザ戦車ゲーム。月の重力があり、チーズやポイズンなどの武器がある。作者によれば Qwen 系モデルで生成したとのこと。

### Key Discussion Points

- **olliepro**: 左右移動が強すぎる、とバランスを指摘。
- **datadrivenangel**: 先手プレイヤーが武器を切り替えられないようだと報告。
- **foo12bar**: 月を軌道から落として惑星の半分を破壊できるようにしてほしいと提案。

## 9. [Phyllotaxis: An audio-reactive LED display](https://jagi.studio/posts/phyllotaxis/)

**Score:** 26 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=49880411)

ヒマワリなどに見られる葉序（黄金角による二重螺旋）のパターンを、音に反応するLEDディスプレイにした制作記。点を黄金比の倍数だけ回転させて配置する簡潔なコードでヒマワリ状の点群を作り、それを基板とLEDで実体化している。

### Key Discussion Points

- **throwaway219450**: 5回対称のPCBレイアウトを評価し、手はんだ用にSMTパッドを少し大きめにするコツを紹介。
- **lukeify**: Voria Labs の Lumanoi という類似製品を挙げ、収斂進化かもしれないと指摘。

## 10. [Show HN: Pac-Bench – How well can models one-shot a Pac-Man game?](https://jonclegg.github.io/pacman-bakeoff/)

**Score:** 23 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=49885493)

「Create a Pac-Man game in a single html page」という一つの短いプロンプトで、各モデルとハーネスが Pac-Man をどこまで再現できるかを比較するベンチマーク。スコア、コスト、時間、トークン数で並べ替えられる。

### Key Discussion Points

- **Computer0**: Opus 5-5 がほぼ完璧なクローンで、他は初見で欠点があったと感想。
- **strataspace**: DOOM でも試し、Astra のスプライトが良かったと述べ、自分の腕の100倍の出来に複雑な気持ちを吐露。
- **_matthew_**: プロンプトが短すぎ、曖昧な指示の解釈力を測るベンチになっていると批判。
- **jmathai**: 曖昧なプロンプトは文脈補完力を試すのに良く、モデルは着実に向上していると評価。

## Trends

- **小型・ローカルAIの盛り上がり**: 0.8B判断モデル、ブラウザ内LLM、ESP32クラスタ上のBitNetと、小さく速く安いモデルへの関心が強い。一方で精度や有用性には冷静な声も多い。
- **AI生成物のベンチマーク・実験**: Pac-Bench や AI 生成ゲームなど、モデルにワンショットで作らせる試みが続いている。
- **保存と改変への関心**: 映画のファン保存、古いゲーム、遺跡の再解釈など、「オリジナルを残す」ことが共通テーマ。
- **ノスタルジーと産業の変化**: 90年代チャットの再現や、需要減に苦しむカリフォルニアのワイン産業など、時代の変化を映す話題もあった。
