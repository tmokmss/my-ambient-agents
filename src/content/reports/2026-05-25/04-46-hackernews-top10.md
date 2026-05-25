---
title: "Hacker News トップ10まとめ（2026-05-25）"
date: "2026-05-25T04:46"
category: "summary"
summary: "HNトップ10: AIスロップ批判・DeepSeekキャッシュ最適化・メモリコスト高騰・LLMエージェントの構造的制約劣化など"
tags: ["hackernews", "AI", "rust", "memory", "llm", "audio", "hardware"]
---

## 1. [The Eternal Sloptember](https://geohot.github.io//blog/jekyll/update/2026/05/24/the-eternal-sloptember.html)

**Score:** 50 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=48263238)

George Hotz（geohot）がAIエージェントによるソフトウェア開発を「業界史上最大のミスになりうる」と批判する記事。エージェントは開発の序盤は速いが洗練が苦手で、真のエンジニアというよりは高度な検索ツールに近いと主張する。組織内での問題として、優秀なエンジニアはAI出力の欠陥を見抜けるが能力の低い労働者がそれを無批判に受け入れることで全体品質が低下し、「スロップ（粗悪品）の黄金時代、傑作の暗黒時代」が来ると警告している。

### Key Discussion Points

- **tptacek**: AFLが脆弱性を発見したのはAFLと熟練者の協働によるものであり、現代のターゲットは10年前よりはるかに難しいと指摘
- **mountainriver**: 1〜2年前はオートコンプリート止まりと確信していたが、今年に入りモデルが新たな能力水準に達しアジェンティックコーディングが劇的に改善したと主張
- **fontain**: 仮想通貨ブームと同様に、最も声高な支持者も懐疑論者も誇張しており、現実は中間に落ち着くだろうと冷静な見方を示す
- **spiderfarmer**: コーダーはAIが日常的な退屈なタスクに持つ実用性を過小評価しており、フリーランサーにとっての本当の価値はそこにあると提言

---

## 2. [Show HN: Audiomass – a free, open-source multitrack audio editor for the web](https://audiomass.co/?multitrack=1)

**Score:** 246 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=48258015)

完全無料・オープンソースのWebベースマルチトラックオーディオエディタ。JavaScriptはわずか98KB・CSS 10KBという軽量設計で、FLACを含む多様な形式に対応。かつての「Cool Edit Pro 2」（Adobeに買収される前）に好意的に比較するユーザーも多く、直感的なUXが高評価を受けている。

### Key Discussion Points

- **kirbysayshi**: クロージャや変数の順次宣言など「古き良き」スタイルのコードに懐かしさを感じ、素晴らしいアプリだと称賛
- **JKCalhoun**: ドラムループをチェックアウトしてギターリフを追加し、別の人がベースを加えるといった「RiffHub」構想を提案（GitHubのような音楽コラボプラットフォーム）
  - **esikich**: GitHubアナロジーは音楽では機能しにくいと反論——ソフトウェアはコードがツールだが音楽はステム自体が製品であり、優れたループはオーナーシップやロイヤルティを求めるものだと指摘
  - **16bitvoid**: BandLab Studioがすでにウェブ版＋モバイルアプリで似たような機能を提供していると紹介
- **cocodill**: AdobeがCool Edit Pro 2を「駄目にする前」のような直感的UXだと絶賛
- **serious_angel**: Audacityに着想を得た落ち着いたデザインを評価、XM形式のサポートを要望
  - **pantelisk（作者）**: ファイルサイズの肥大化に慎重でXMサポートは検討中。ウェブ用オーディオトラッカー（Renoiseのようなもの）がまだ存在しないことに驚きを示す

---

## 3. [DeepSeek reasonix, DeepSeek native coding agent with high caching and low cost](https://esengine.github.io/DeepSeek-Reasonix/)

**Score:** 491 | **Comments:** 206 | [Post](https://news.ycombinator.com/item?id=48256953)

DeepSeek V4 Proに特化したターミナル用AIコーディングエージェント「Reasonix」。ほとんどのエージェントループはコンテキストの並べ替えや再書き込みによりキャッシュヒット率が20%未満にとどまる問題を解決するため、キャッシュファースト設計を採用し低コストを実現する。DeepSeek V4 Proの永続価格割引に関する議論と同時並行で話題になっている。

### Key Discussion Points

- **embedding-shape**: DeepSeekのキャッシュ活用に専用エージェントは不要では？と疑問を呈し、Codex向けブリッジを自作した結果3913万トークンのキャッシュヒットを達成したと報告
  - **kiproping**: アーキテクチャドキュメントを示しながら、通常のループはタイムスタンプ注入等でキャッシュヒット率<20%になるため専用設計に価値があると説明
  - **3uler**: OpenCodeはキャッシュの安定性に深刻な問題があり、開発者が修正に消極的だと批判
- **edg5000**: DeepSeek APIはコーディングクライアントに自動的に最高思考レベルを割り当てる。APIドキュメントが乱雑で使いにくいと不満
- **agrippanux**: プロジェクトのウェブサイト自体がCodexで生成されたように見える——巨大なステータスボックスが並ぶ過剰演出、モバイルで使い物にならないUXを指摘
  - **port11**: LLM駆動のデザインに共通する問題として、重厚なイタリック体セリフフォントの使用やモバイルレイアウト崩れを挙げ、シンプルなサイトで十分だと指摘
- **jbellis**: 「常にキャッシュファーストが正解」という前提に疑問を呈し、ハーネス開発者は実際にテストして判断していると擁護

---

## 4. [Migrating from Go to Rust](https://corrode.dev/learn/migration-guides/go-to-rust/)

**Score:** 169 | **Comments:** 173 | [Post](https://news.ycombinator.com/item?id=48259808)

バックエンド特化のGo→Rustマイグレーションガイド。正確性の保証・ランタイムのトレードオフ・開発者体験の観点から両言語を比較する。Goのゴルーチンとエコシステムの成熟度はウェブサービスで依然強みであり、Rustへの移行はグリーンフィールドか非常に強い理由がある場合に限るという現実的な視点を提示している。

### Key Discussion Points

- **Animats**: Webバックエンドに限ればGoは非常に良い選択肢。Rustのエラーハンドリングは`io::Error`・`thiserror`・`anyhow`と乱立して痛みを伴うと指摘
  - **mountainriver**: アジェンティックコーディングの出現によりRustを書く苦労が消え、Rustサービスはパフォーマンスと信頼性で素晴らしい結果を出していると報告
  - **lionkor**: Rustのエラーは`Error`トレイトで実質一本化されており、`Box<dyn Error>`が基本的に全てをカバーすると訂正
- **tptacek**: 選択の核心は「管理ランタイムが必要か否か」。PythonvsRust/Goは本物の議論だがRustvsGoは「変な争い」と一蹴
  - **tempest_**: LLMがRust採用を爆発的に増やしている——AIは文句を言わずにasync Rustを書いてくれるのでGoのマネージドランタイムの優位性が薄れたと観察
- **amusingimpala75**: `rusqlite`・`clap`・`ratatui`・`tauriだけで400以上の依存関係が発生するRustのパッケージ管理問題を最大の不満として挙げる
- **nemo1618**: 記事中に「genuinely」が4回出現するなどLLM执筆の痕跡を感じ取り、AI補助での執筆を疑う

---

## 5. [A fundamental principle of aeronautical engineering has been overturned](https://www.wired.com/story/a-fundamental-principle-of-aeronautical-engineering-has-been-overturned/)

**Score:** 109 | **Comments:** 60 | [Post](https://news.ycombinator.com/item?id=48260117)

「表面が滑らかなほど空力抵抗が低い」という航空工学の従来原則を覆す研究。適切な微細な粗さ（マイクロラフネス）を持つ表面が摩擦抵抗を下げるとする知見で、機体をサンドブラスト処理するだけで即日燃費向上が見込めるかもしれない。Wired記事はペイウォールのため全文取得不可。

### Key Discussion Points

- **Maarten88**: レース帆船乗りは1000〜1500番手の紙やすりで磨いた表面が最小摩擦になると経験的に知っていた。航空研究者がこれを知らなかったことへの驚きを表明
- **mlmonkey**: ゴルフボールのディンプルが抵抗を減らすことは以前から知られていたと指摘
- **sgc**: サンドブラストで後付け可能なら即日無コストの燃費改善になるが、実際の改善率と過酷な実環境での効果持続性に疑問を呈する
- **Groxx**: Wiredのアドブロッカー干渉でほぼ「Subscribe to listen [9分]」という案内だけが表示され、記事の本文が読めない状況を報告

---

## 6. [White Rabbit – sub-nanosecond synchronization for large distributed systems](https://ohwr.org/projects/white-rabbit/)

**Score:** 37 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=48245916)

CERNが発祥のオープンソースハードウェアプロジェクト。最大10km離れた分散システム間でサブナノ秒精度（ピコ秒レベル）の時刻同期を実現する。イーサネットベースのギガビットデータ転送と決定論的データ配信を組み合わせた完全オープンハードウェア・ファームウェア・ソフトウェア設計。

### Key Discussion Points

- **skulk**: 10kmは約33光マイクロ秒に相当するのにサブナノ秒同期を実現しているのは「何らかのトリックがある」と興味を示す
- **roughly**: CERNから来ているプロジェクトで「求人募集」リンクが載っているのが半ば自慢のようだと皮肉
- **LowLevelKernel**: GitHubにないのか？と問い（GitLabでホスティングされている）

---

## 7. [Bug 1950764: Work Around Crash on Intel Raptor Lake CPU](https://phabricator.services.mozilla.com/D301917)

**Score:** 32 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=48242546)

Mozillaがインテル Raptor Lake CPUのエラッタに対するFirefoxのワークアラウンドを実装したパッチ。問題の核心は`movb %ch, [mem]`命令パターン（高バイトレジスタエイリアスからのストア）がLLVMに生成されると、サイレントな2バイトストアが発生して隣接する`len`バイトを破壊するというCPUバグ。ブーストクロック速度と関連している。

### Key Discussion Points

- **bri3d**: Oodleでも同一問題の詳細な調査があった。Intelは対応に消極的でエラッタの公式認定なし。Raptor Lakeは非再現性のクラッシュが多すぎてFirefoxが自動クラッシュレポートを諦めたほどだと紹介
- **robin_reala**: この問題に関するTomshardware・Neowinの記事は「100%スロップ（粗悪品）で混乱を招く不正確な主張だらけ」というエンジニアの見解を引用
- **Polizeiposaune**: パッチのコメントから核心部分を引用：「distバイトを2バイトストアにすることでLLVMが生成する`movb %ch, [mem]`パターンを回避し、Raptor Lakeのエラッタ（隣接バイトの破壊）を防ぐ」
- **mike_hock**: ソフトウェアごとにワークアラウンドを実装するのは現実的でなく、Intelが修正すべきだと主張

---

## 8. [I spent 50 hours drawing a line graph](https://www.dougmacdowell.com/50-hours-to-draw-some-lines.html)

**Score:** 471 | **Comments:** 80 | [Post](https://news.ycombinator.com/item?id=48223997)

Doug MacDowellがブリストルボード・T定規・ロットリングペンなど伝統的な製図道具を使い、50時間以上かけて手描きのデータビジュアライゼーションを制作する過程を綴った記事。ソフトウェアなら20分で終わる作業を敢えて手作業で行い、1970年代の教科書風の美しいチャートを仕上げた。TufteやW.E.B. Du Boisといった先人の参考文献も紹介している。

### Key Discussion Points

- **mauvehaus**: 家具職人として手描き図面を実践しており、6H〜9H鉛筆（薄くて消しやすい）・リードホルダー・消しゴムシールドなど実践的なドラフティングTipsを共有
  - **lemonberry**: 7年生（中学1年）で製図を学んだ世代で、鉛筆を少しずつ回しながら使う技を紹介
  - **deepsun**: 建設現場用の5.6mm太リードホルダーと赤色鉛筆の存在を補足
- **card_zero**: 体操競技のように採点して「ベベルへの挑戦は意欲的だが角の揃いが甘い、7点/10点」とユーモラスに評価
  - **jansan**: 「ベベル」とはマイター制限のことか？と技術的な用語確認
- **jinnyto**: データビジュアライゼーション好きが高じてこの投稿のためにHNアカウントを作成して初めてUpvote。1889年フランス国立統計経済研究所（INSEE）のセーヌ県精神疾患統計の美麗な手描きグラフを紹介
- **Lucas12546**: AIとソフトウェアで何でも急ぎがちな時代に、一つのことに50時間集中できる豊かさを羨む感慨深いコメント

---

## 9. [Memory has grown to nearly two-thirds of AI chip component costs](https://epoch.ai/data-insights/ai-chip-component-cost-shares)

**Score:** 340 | **Comments:** 360 | [Post](https://news.ycombinator.com/item?id=48258684)

Epoch AIの分析によると、HBM（高帯域メモリ）がAIチップ部品コストに占める割合は2024年Q1の52%から2025年Q4には63%に上昇。絶対額では約120億ドルから320億ドルへと急増。Microsoftは2026年度設備投資1900億ドルのうち約250億ドルが部品価格上昇分。消費者向けRAMも96GBが約250ドルから1200ドル以上に高騰している。

### Key Discussion Points

- **gpm**: DRAMの供給が需要に追いつくのを待つだけで、技術革新なしにAI推論・学習コストは最大3分の1に下がる可能性があると指摘
  - **radialstub**: メモリメーカーは意図的に供給を絞り価格を維持する——スマホ・PC向けなど収益性の低いセグメントから供給を流用しているだけだと反論
  - **weitendorf**: Nvidiaの独占的利益分を含めるとさらなるコスト低減余地がある。「今が最悪の状態」（サム・アルトマン）という見解が実は長期的に正しいかもしれないと論じる
- **slicktux**: 数年前に96GB RAMを約250ドルで購入したが、今は1200ドルを超えると報告
  - **adroitboss**: 2024年10月にCrucial 96GB DDR5 5600MHz SO-DIMMを279ドルで購入したが、Amazonで現在1,048.90ドルになっていると確認
- **mchusma**: 年20〜25%の容量増加では不十分。モデルプロバイダー等にリスクを分散すれば年50%成長も可能だと提案
- **oceansky**: 「AIに完全に移行していないゲーマーやPCホビイストにとって最悪の時代」と一言で状況を表現

---

## 10. [Constraint Decay: The Fragility of LLM Agents in Back End Code Generation](https://arxiv.org/abs/2605.06445)

**Score:** 198 | **Comments:** 105 | [Post](https://news.ycombinator.com/item?id=48256912)

LLMエージェントがバックエンドコード生成で機能的要件と構造的要件（アーキテクチャルール）を同時に満たすことが困難だという研究。80件のグリーンフィールドタスクと20件の機能追加タスクを8種のWebフレームワークで評価した結果、構造的制約が増加するとアサーション通過率が平均30ポイント低下（「制約の劣化（Constraint Decay）」）。Flaskなどミニマルなフレームワークでは成功するが、FastAPIやDjangoのような規約重視の環境では大幅に性能が低下する。

### Key Discussion Points

- **guhcampos**: 100%懐疑的だったが今やプロのコード80%をAI生成している。ただし複雑さが増すにつれて自然言語仕様の詳細化が必要となり、「形式的・決定論的なプログラミング言語から非形式的・非決定論的な自然言語へ複雑さが移動している」だけだと懸念
  - **dominotw**: 80%がLLM生成なら既存コードのリミックスに過ぎず「スロップ」だ——LLMは新しいものを生成できないと反論
- **jdlshore**: フロンティアモデルをコスト理由でテストしていない点が弱点だが、機能+構造の同時達成が難しいという結論は興味深いと評価
  - **qsort**: 「2つの目的を同時に最適化できない」という問題の本質を指摘。機能要件だけならプログラム合成でRLが強力に最適化できるが、両方あると仕様が不完全になる。スタイルのコード例をプロンプトに含めることが非常に効果的だとartirez流のTipsを紹介
- **maxbond**: LLMが各分野で文書編集タスクをこなす別の研究を紹介。プログラミングだけが長距離タスクでエラーを蓄積しない唯一の分野だったと対比
  - **emp17344**: 「簡単に検証できないことはLLMが得意でない」という端的な観察
- **vishvananda**: 20億トークンを使ってCコンパイラを書いた経験から「石灰化（calcification）」現象を命名——パターンがコードベースに現れるとエージェントがそれに追従し自己強化的になる傾向を観察
  - **jumploops**: エージェントは独自の「過度に冗長」なスタイルを持ち、「神様ファイル」を作りがち。指摘すると批判はできるが、自分が書いたコードだとは気づかない様子が滑稽だと共感

---

## Trends

1. **AIの質と量のジレンマ**: 「Eternal Sloptember」「Constraint Decay」「50時間の折れ線グラフ」など複数の話題が、AIによる大量生成（slop）と人間による丹念な仕事（gems）の対比を異なる角度から照射している。

2. **LLMエージェントの限界の顕在化**: DeepSeekのキャッシュ最適化、GoからRustへの移行、Constraint Decayの研究と、エージェントコーディングの実践事例・学術研究・ツール開発が同時多発的に議論されている。LLMがコードを書けることは自明となりつつあるが、「品質」「構造遵守」「コスト効率」の三つを同時に達成することへの疑問が深まっている。

3. **AIインフラコストとメモリ問題**: AIチップのHBM依存度上昇と消費者向けRAM価格高騰が同一の構造問題（DRAMサプライチェーン）から来ており、AIブームの恩恵を受けない一般ユーザーやゲーマーへの悪影響として議論されている。

4. **オープンソースハードウェアへの関心**: White RabbitのようなCERN発のオープンハードウェアプロジェクトへの注目は、ソフトウェアのオープンソース運動と同様の精神が物理インフラにも広がっていることを示唆する。

5. **Intelのハードウェアバグへの不信**: Raptor Lake CPUのエラッタをFirefoxがソフトウェアで回避せざるを得ない状況が批判を集めており、CPUメーカーへの責任転嫁が繰り返し言及されている。
