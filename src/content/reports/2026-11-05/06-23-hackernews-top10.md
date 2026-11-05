---
title: "Hacker News Top 10 - 2026-11-05"
date: "2026-11-05T06:23"
category: "summary"
summary: "ホワイトハウス網の住宅プロキシ検出、Kimi K3.1 Pro 公開、OpenAI の Linux 権限昇格 948 件発見など"
tags: ["hackernews", "ai", "security", "open-weight"]
---

## 1. [Residential proxies detected on White House network](https://layer3intel.com/blog/residential-proxies-white-house-network)

**Score:** 886 | **Comments:** 274 | [Post](https://news.ycombinator.com/item?id=50371246)

Layer3 Intel が、AS2650（大統領府）のネットワークから住宅プロキシのエグジット活動を観測したと報告した。10/5〜11/3 の間に 6 アドレス・236 回・28 サービスで確認され、活動の約半分が米東部時間の 17〜24 時に集中するため、プロキシ SDK に感染した端末を使う人物がいる可能性を示す。観測されたのは出口であり、端末や人物は特定できていない（Wayback のスナップショットに基づく要約）。

### Key Discussion Points

- **dhosek**: 記事は明言していないが、夕方〜深夜に集中するパターンは「個人」を示唆していると指摘。
  - **dpark**: ホワイトハウスで働く人は多く、夜勤の候補者は相当数いる。
  - **mikeweiss**: むしろ居住者ではなく交代勤務者のパターンに見える。
- **btown**: 現状は比較的無害な収益化だが、C&C で悪質なタスクが割り当てられたり乗っ取られる可能性は否定できない。
  - **mzajc**: 低トラフィックのサーバーがこれらのボットネットから 100req/s 超のスクレイピングを受けた経験があり、「無害」とは言えない。
  - **_alternator_**: 「感染」は強すぎる表現で、Hola VPN のような無料 VPN 系が利用規約上 IP 共有を条件にしている例が多い。
- **lakeviewterrace**: 実際に分かっているのは IP 空間の所有者だけで、WH 内部に物理的に結びつく証拠はない。自社サービスの宣伝だとも批判。
  - **Terr_**: 物理的な位置は関係なく、外部から FW を越えて通信できるノードがあること自体がネットワークセキュリティ上の問題。
  - **itishappy**: 場所が不明で北京やモスクワかもしれないなら、さらに悪い。
- **EmX_3000**: ハニーポットか不注意の可能性はあるが、必ずしも不審とは限らないという見方。
- **seethishat**: T-Mobile 5G 回線で、自分の IP が住宅プロキシと判定される。
  - **ofcrpls**: T-Mobile の CGNAT のせいではないか。
  - **walrus01**: 同じ CGNAT を共有する他の感染端末の影響でほぼ確実。

## 2. [Kimi K3.1 Pro model weights are out](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)

**Score:** 461 | **Comments:** 132 | [Post](https://news.ycombinator.com/item?id=50366999)

Moonshot AI が Kimi K3.1 Pro の重みを公開した。ネイティブマルチモーダルの MoE モデルで、総パラメータ 2.8T・活性 104B、コンテキスト長 1M、MXFP4 重み。Terminal-Bench 4.0 で 65.7 などを報告するが、一部ベンチマークでは Claude Opus 5.5 が上回る。独自の Kimi K3.1 Pro License で提供される。

> **関連:** #3「Ripple-65B Preview: U.S. Open-Weight SOTA on Agentic Coding」も参照（オープンウェイトのコーディング向けモデル公開という同系統の話題）

### Key Discussion Points

- **__jf__**: B300 8 枚級のノードが必要で、個人では厳しい。自分は Qwen3.8-27B-NVFP4 を RTX PRO 4000 2 枚で使い続ける。
  - **bityard**: この規模のモデルは趣味ユーザーではなく、研究者・推論プロバイダ・企業向け。
  - **FuriouslyAdrift**: Kimi 2.8 を MI300A 4 基のオンプレ（約 11 万ドル）で動かし、30〜40 人が同時利用。Claude 費用は約 2 週間で回収できる見込みという。
  - **joecot**: 複数プロバイダから選べ、特定ベンダーに縛られない点が利点。
- **segmondy**: DeepSeekV4.1-Flash を大きくは上回らず、Hy4 の内部ベンチでは Opus 5.5 に及ばないため、ベンチマーク最適化の疑いがある。
  - **reissbaker**: 日常利用では K3/K3.1 は DS4.1-Flash より明確に強く、ベンチマークに表れない差がある。
  - **NitpickLawyer**: テストセットで学習した疑いを示す分析があると指摘。
- **minimaxir**: 第三者の推論プロバイダが続々と提供を開始。Together は Moonshot 公式の倍のスループットで同価格。
- **dmckinno**: ベンチ最適化との声はあるが自分たちのテストでは感じなかった。フロンティアからは少し下だが大半の用途に十分。
  - **JacobAsmuth**: 非公開評価に切り替えた Artificial Analysis では順位が大きく下がった理由に疑問を呈する。
- **throwa356262**: こうしたリリースは企業向けだと、Revolut の自社ホスト移行記事を引用。
  - **codethief**: ライセンスにはモデル提供事業で一定収益を超える場合の条項があり、企業も自由には使えない。

## 3. [Ripple-65B Preview: U.S. Open-Weight SOTA on Agentic Coding](https://www.ricursive.com/ripple)

**Score:** 271 | **Comments:** 98 | [Post](https://news.ycombinator.com/item?id=50369925)

Ricursive Intelligence が、AI チップ設計基盤の元モデルの派生となる 65B の dense 型オープンウェイト汎用モデルを公開した。12T トークンで事前学習し、コンテキスト長は 1M。TerminalBench 2.1 で 80.52 を報告し、「米国オープンウェイト SOTA」と位置づけている。

> **関連:** #2「Kimi K3.1 Pro model weights are out」も参照（オープンウェイトのコーディング向けモデル公開という同系統の話題）

### Key Discussion Points

- **advael**: 「SOTA」が、ベンチ・サイズ・米国製と絞り込まれすぎて意味が薄れている。
  - **gpm**: 見出しの「フロンティア」は誇張で、実際にはそう呼べない。
  - **yorwba**: 比較に入っている最大の米国製 Inkling との差は 0.42 ポイントで意味のある差ではない。
- **stewartpark**: 65B dense は消費者向けハードでは遅く、Qwen 27B や MoE のような人気は出にくい。
  - **0x00cl**: 十分な RAM を持ち、速度を犠牲にしても良いモデルを動かしたい人は多い。
  - **deepsquirrelnet**: MTP や DFLASH により dense も再び有力になっている。
- **wmf**: 他のオープンウェイトモデルに触れないのは印象が悪い。
  - **karmakaze**: 比較対象を選別しており、より小さくて高性能な Beam 1.0 などが除かれている。
  - **stewartpark**: 主な利用者（米政府機関やチップ設計業界）はそうしたモデルを選択肢にしないので、適切な比較だと擁護。
- **2001zhaozhao**: Terminal Bench 2.1 で 80.5。Qwen 3.8 Flash Next の 84.3、Qwen 3.8-27B の 73.0 と比べると競争力はあり得るが、最適化の度合いが気になる。
- **namjh**: 比較チャートは他が MoE で本モデルは dense なので誤解を招く。

## 4. [A thousand fewer paths to root](https://openai.com/index/a-thousand-fewer-paths-to-root/)

**Score:** 256 | **Comments:** 145 | [Post](https://news.ycombinator.com/item?id=50372929)

OpenAI が、脆弱性の発見・悪用・パッチ生成を自律的に行うパイプラインを構築し、1 回の実行で Linux の権限昇格脆弱性 948 件を検証してパッチを生成した（OpenAI ブログの RSS 概要に基づく。コメント上では API コスト約 120 万ドルとされる）。

### Key Discussion Points

- **Plasmoid**: なぜカーネルに権限昇格が 1000 近くもあるのか。複雑すぎるのか、言語や設計の問題かと問う。
  - **heresie-dabord**: 安全でない言語・ツールチェーンで作られた OS では不思議ではない。
  - **pianopatrick**: 企業が速度を優先して巨大なコードを載せたため。小さいカーネルならずっと少ない。
  - **beala**: 複雑なシステムと超人的なハッキングモデルの組み合わせで十分説明がつく。
- **dangelosaurus**（投稿者）: 自分のチームの成果で質問に答えると述べている。
  - **mofeien**: モデルの能力を間近で見ているのに、なぜ抗議して辞めないのかと問う。
  - **konaraddi**: 948 件をどう人間がレビューし、どの結果を信頼するのか。
  - **amluto**: 公開済み・修正済みの一覧や、サンプルのレポートを見たい（元カーネルセキュリティ報告担当）。
- **nas**: 一般にローカル権限昇格はあり得ると考えていたが、948 件は衝撃的。
- **rmbryan**: これだけ脆弱性があって、なぜインターネットが動き続けるのか。
  - **tantalor**: セキュリティ産業は侵入を防ぐのではなく、起きた後に素早く緩和することで成り立っている。
  - **nomel**: 政府がゼロデイを買い占めている。
- **zahlman**: 120 万ドル相当の API 利用をオープンソース団体が使えれば、と指摘。
  - **komali2**: 資本に依存する資源（望遠鏡、加速器など）と同様に、大学が使えるべきだ。

## 5. [Insects don't swarm at LED lights](https://www.birdsoutsidemywindow.org/2026/11/03/insects-dont-swarm-at-led-lights/)

**Score:** 220 | **Comments:** 118 | [Post](https://news.ycombinator.com/item?id=50370610)

白熱灯は月光に似た紫外線を出し、昆虫が周囲を回る原因になるが、LED は紫外線をほとんど出さず虫を引き寄せにくい、という記事。2016 年のブリストル大学の研究では LED が他の家庭用照明より誘引が少なかった。一方で LED の青色成分が体内時計に与える影響にも触れている。

### Key Discussion Points

- **tw04**: トラクターの LED ヘッドライトとライトバーには確実に虫が群がる。全体の虫の減少と行動変化を混同しているのでは。
  - **Izmaki**: ハエが full spectrum LED の栽培灯に集まった。
  - **mitkebes**: 虫は短波長（UV・青）に誘引される。寒色 LED は青色 LED が元で、ヘッドライトは明るさも強い。
  - **wopwops**: Fenix のヘッドライトにも虫が集まる。
- **mahboi**: 自宅の屋外 LED に蜂が集まり、毎朝死骸があった。色可変スポットは UV を出しているかも。
  - **legitronics**: 色可変や高 CRI 電球は 400nm 前後の LED で、ガラスやプラスチックが UV をかなり吸収する。
  - **sbierwagen**: 395nm の青色光でも蛍光は励起される。
- **gopalv**: 調光 LED の PWM のちらつきが虫に嫌われるのではという仮説。
  - **winrid**: 駆動方式によるので、定電流ドライバなら PWM なしで調光できる。
  - **andai**: ハエの視覚のリフレッシュレートについての話を紹介。
- **dylan604**: 低照度の LED を置いて夜空の長時間露光をしたら、虫の軌跡が写り込んだ。
  - **hinkley**: 虫はいるものを撮っただけで、ライトの有無でどれだけ増減したかは別問題。
- **piskov**: 前提（月の UV・IR）が誤りで、飛ぶ向きの混乱が原因という論文を挙げた。
  - **dylan604**: ウミガメの子が陸の光に迷う例は、陸の方が空より明るくなり得ることを示す。

## 6. [Images 2.6](https://openai.com/index/introducing-images-2-6/)

**Score:** 219 | **Comments:** 142 | [Post](https://news.ycombinator.com/item?id=50372945)

OpenAI が画像生成モデル Images 2.6 を発表。生成の高速化、GIF 作成、より精密な編集、新しい API コントロールを ChatGPT・Codex・API で提供する（RSS 概要に基づく）。

> **関連:** #4「A thousand fewer paths to root」も参照（同一企業 OpenAI の別件の発表）

### Key Discussion Points

- **E-Reverance**: 相変わらず見た目が不自然。エンジニアは気づかないのかと疑問。
  - **nashadelic**: 紹介動画でも猫の画像に余分な足があり、やり直す気がないように見える。
  - **dawnerd**: 「LLM 盲目」のように、慣れて気づかなくなる現象もある。
- **minimaxir**: グリッドで連続フレームを作る手法は以前からある。SVG 対応は気になるが、フレーム間の一貫性は難しい。
  - **vunderba**: SVG 生成では追加の LLM を API に渡す必要があるようで、ドキュメントに記載がない。
  - **padolsey**: 3 年前に同様のスプライト手法を試している。
- **DanHulton**: ステンドグラスのクジラの例は構図が不自然に見える。
  - **minimaxir**: 題材がステンドグラスなので、写実性を求める話ではない。
- **preommr**: 画像生成は頭打ちで、コーディングほどの進歩がない。
  - **vunderba**: オープンウェイトでは Flux 以降、Ideogram V4 や Krea などで進歩している。
  - **JohnQPulp**: Nano Banana Pro 以降は横ばいとも言えるが、1 年未満の話。
- **bsboxe**: トークン単価は同じだが、低・中品質で消費トークンが約 4 倍（1024x1024 low: 196→823、$0.006→$0.025）。
  - **piazz**: 実質 3〜4 倍のコストで、マーケティングは誤解を招く。
  - **bnmathm**: 手元のワークフローでも同様の結果。

## 7. [Starfall – Affordable, routine access to microgravity](https://www.spacex.com/starfall)

**Score:** 183 | **Comments:** 116 | [Post](https://news.ycombinator.com/item?id=50373308)

SpaceX が低軌道での微小重力環境へ、手頃な価格で定期的にアクセスできる Starfall を発表した。ページ本文は取得できなかったため、コメントに基づく要約になる。数週間の LEO ミッションの後、豪州で回収する形態が示唆されている。

### Key Discussion Points

- **tagami**: ISS で十数回のミッションを実施してきた。打ち上げの障壁低下と頻度向上は歓迎で、流体研究などに有用。
  - **roughly**: 電力とデータ回線を備えた中長期の微小重力実験は本当に有用そう。
  - **nomilk**: 価格が既存手段よりどれだけ安いのか知りたい。
- **syntaxing**: 宇宙データセンターは非現実的だが、MBE のような超高真空プロセスを使う半導体製造は面白い。
  - **tristanj**: LEO は真空ではなく、原子状酸素が反応性を持つので露出での製造には向かない。
  - **reissbaker**: 各地でデータセンター規制が進むなら、宇宙設置が現実味を帯びるかもしれない。
- **areoform**: Keytruda（ペムブロリズマブ）のように、微小重力で結晶化した試料に依存する治療薬がある。
- **czhu12**: 半導体、医薬、太陽電池結晶、人工臓器など、重力による沈降が課題のものに資金が集まっている。
- **Qworg**: 打ち上げ手段が競合でもある以上、Varda はどうなるのか。
  - **fnordpiglet** / **misiti3780**: 同じ懸念を共有。

## 8. [Spreading Liquid with Three.js](https://mofu-dev.com/en/blog/fluid-foundation/)

**Score:** 35 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=50341576)

流体シミュレーションの速度マップを使い、ハイトマップ上の液体の厚みを毎フレーム移動させて「ファンデーションが広がる」表現を作る手法の解説。通過した場所を記録するアルファマップで色を残し、法線を Matcap でシェーディングする。見た目を優先しており、液体の総量は保存されない。

### Key Discussion Points

- **andai**: 体積が保存されず、内側に広げると液体が消えて薄い箇所ができる。シミュレーションでよくある問題。
- **etatester**: 結びの「公開するとこの手法は特別でなくなるかもしれない」に寂しさを感じた。
- **brandonpelfrey**: 改造すれば書道アプリに使えそう。

## 9. [Lemmings CSS Animation](https://markblah.github.io/lemmings/)

**Score:** 27 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50375354)

「Walker Playground」というページで、ボタンやコンソールからウォーカー（レミングス）を追加し、ドラッグして投げて遊べる。階段・足場・穴・壁・テキスト列などのテストエリアがあり、ウィンドウをリサイズすると立っていた場所から滑り落ちる。

### Key Discussion Points

- **MarkBlah**（投稿者）: Psygnosis へのトリビュートで、ただの遊びとのこと。
- **Waterluvian**: 自分もサイト上で六角形がロボットになりページを SLAM 風に探索する演出を作った。個々の文字ブロックのサイズを正確に取れるのが難しいと思ったが、驚いたかと質問。

## 10. [Altera Announces Agilex 2X, a Complete FPGA and SoC Portfolio](https://www.altera.com/newsroom/agilex-2x)

**Score:** 5 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50375653)

Altera が、デジタル AI（AI インフラ）とフィジカル AI（エッジ）向けの FPGA ポートフォリオ Agilex 2X を発表した。ハイエンドから低消費電力・低コストまでの 4 ファミリで構成され、最初が Agilex 27。AI テンソル DSP ブロックや最新 Arm コア、エージェント型 AI 設計フローを備える（Wayback のスナップショットに基づく）。

### Key Discussion Points

- **Foobar8568**: Agilex 27 のエンジニアリングサンプルは 2027 年下半期の見込みで、ペーパーローンチ以前の段階だと批判。

## Trends

- **オープンウェイトモデルの競争**: Kimi K3.1 Pro（2.8T MoE）と Ripple-65B（65B dense）が同日に話題に。どちらもベンチマーク最適化や比較対象の選び方が議論の中心で、数字より実使用での評価が重視されている。自社ホストによるコスト削減の実例も出た。
- **AI とセキュリティ**: OpenAI のカーネル脆弱性 948 件の自動発見は、攻撃と防御の両面で AI の能力が実用段階に入ったことを示す。一方で、ホワイトハウス網の住宅プロキシ検出は、SDK 経由で組み込まれる IP 共有が組織の境界に入り込むリスクを示した。
- **価格の見えにくさ**: Images 2.6 は単価据え置きながら低〜中品質でトークンが約 4 倍になり、実質値上げと受け止められた。
- **宇宙の産業利用**: Starfall に対し、医薬品結晶化や半導体製造など微小重力の用途が議論され、Varda など既存事業者への影響を気にする声も出た。
