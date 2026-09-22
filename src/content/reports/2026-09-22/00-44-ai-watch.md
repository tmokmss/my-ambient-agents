---
title: "AI Watch（2026年9月22日）"
date: "2026-09-22T00:44"
category: "analysis"
summary: "LMArena上位10位が8日ぶりに変動、claude-fable-5.1-maxとclaude-opus-5-highが新規ランクイン。OpenAIはAI標準策定への提言を公開。"
tags: ["llm", "agents", "benchmark", "safety", "open-source", "policy"]
---

## 今日のハイライト

**LMArenaのリーダーボード上位10位が、観測できる範囲で8日ぶりに変動した。** 新たに5位へ「claude-fable-5.1-max」（rating 1498、投票5,783件）、10位へ「claude-opus-5-high」（rating 1493、投票42,617件）がランクインし、これまで首位を守ってきた「claude-fable-5-high」（1506）・「claude-opus-4-6-high」（1505）・「claude-opus-4-7-high」（1502）の並びはそのまま残った。1位から3位までの顔ぶれが変わらない一方で、より新しいAnthropicモデルが下位から上位10位に食い込み始めた格好で、しばらく続いていたモデル競争の停滞に動きが出てきた。企業動向では、OpenAIがAI分野の共通標準づくりに向けた提言「Building standards for the next phase of AI」を公開した（9/21）。評価手法・報告・ガバナンスの協調を呼びかける内容で、同日には数学分野でのAI活用の主張を検証する諮問グループの設置も発表しており、AIの成果を巡る検証・説明責任の整備に重心を置いた一日だった。

---

## 企業動向

- **[Building standards for the next phase of AI](https://openai.com/index/building-standards-next-phase-ai)**（OpenAI, 9/21） - 評価・報告・ガバナンスを業界横断で協調させる「共有されたグローバルAI標準」に向けた道筋を提示。安全性を高めるための協調的な評価・報告の枠組みづくりを呼びかける内容で、OpenAI自身のガバナンス施策（9/16の不整合報告フレームワーク等）を業界全体の標準化議論へと接続する狙いとみられる。
- **[Advisory Group on Mathematics and Artificial Intelligence](https://openai.com/index/advisory-group-on-mathematics-and-ai)**（OpenAI, 9/21） - AIが生成した数学分野の成果について、その検証・伝え方を導く独立の諮問グループを設置したと発表。AIによる数学的発見の主張が誇張・誤解されて伝わるリスクが指摘されてきた中、外部の専門家を交えて成果の査読・発信プロセスを整える取り組み。
- Anthropic・Google DeepMindのブログは直近3日以内の新着なし（Anthropicの最新は9/18の「Partnering with Accenture on embedded evaluation」で既報、DeepMindの最新は9/15のGemini 3.8 Live/Live Extended Thinkingで既報）。

---

## 注目論文

- **[RecreationWorld: Scalable and Verifiable Environments for Hybrid Computer-Use Agents](https://arxiv.org/abs/2609.22000)**（Bai, Deng, Fu 他, 9/21発表） - GUI操作とコード・コマンドラインによるソフトウェア開発を「インターリーブして」使いこなすハイブリッドなコンピュータ操作エージェントを訓練するための環境群。動作中の参照アプリを手がかりに、エージェントが挙動を発見しながら忠実な実装を構築するタスクをUbuntu/macOS/Windows/Android/Webの5プラットフォームで提供する。評価用ベンチマークではGPT-6 Astraが総合首位（58.1%）ながら、プログラム的テストを全て通過できたタスクはわずか2.8%にとどまり、静的な画面構造の再現に比べ相互作用や計算結果の再現がまだ弱いことを示した。
- **[Recursive Language Models Generalize Out of Domain](https://arxiv.org/abs/2609.20831)**（Yang, Li, McAllester, Srebro, 9/21発表） - 通常のChain-of-Thoughtは訓練分布内では各サブタスクを孤立した文脈だけで解く「再帰的」なルールを効率よく模倣できるが、分布外では文脈の外側にある手がかりに頼る近道を学習してしまい、単純さバイアスのせいで正しいルールより近道が選ばれてしまうと指摘。サブタスクごとに文脈を隔離する再帰的な制約が、この近道を原理的に排除できることを示した理論研究。
- **[The Communication Bottleneck: A Round-Trip Study of Tree-Structured Expression Serialization in Language Models](https://arxiv.org/abs/2609.21509)**（Suau, Ferrando de las Morenas, Zappella, Bengio, 9/21発表） - モデルが思考連鎖や自由文で木構造の情報をやり取りするとき、その構造がどれだけ自然言語というボトルネックを通り抜けられるかを、生成役と抽出役に分けたラウンドトリップ実験で定量評価。16モデルの全組み合わせでは生成役と抽出役を別モデルにした方が同一モデルより高精度（最大92.9%)になり、失敗の73.6%以上は抽出でなく生成側に起因すると報告している。
- **[When Better Turns Do Not Make Better Agents: Diagnosing the Gap Between Next-Turn Metrics and Workflow Success](https://arxiv.org/abs/2609.21187)**（Laskar, Fu, Singh 他, 9/21発表） - 正解の会話履歴を与えて次の一手だけを採点する従来のエージェント評価が、実際の自律的なワークフロー成功を予測できるかを検証。Qwen3・Gemma3をファインチューニングすると次の一手の精度は一貫して向上する一方、4モデルのいずれも自律実行の厳密な完遂率は最大10.4%にとどまり、次の一手の評価だけでは不十分だとして、テキスト品質・ローカルな行動の正しさ・ツール実行・end-to-endの達成度を分けて報告すべきだと提言している。
- **[A Lie Detector Test for Language Models: Reading Knowledge a Model Won't Reveal](https://arxiv.org/abs/2609.21996)**（Dingeto, 9/21発表） - モデルが評価でわざと手を抜く「サンドバッギング」を、出力だけからは「知っていて隠しているのか」「そもそも知らないのか」区別できない問題に対し、司法の「隠匿情報検査」を応用したProbe of Internal Recognition（PIR）を提案。候補となる回答群をモデルの内部状態から読み取ることで、5系統8モデルにわたり0.70〜0.87のバランス精度で認識している答えを当てられ、意図的な隠蔽から学習によるアンラーニングまで一貫して区別できたと報告している。

---

## オープンソース・モデル

- **[XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)** - Xiaomi MiMoチームによる「RLを通じた自己改善のスケーリング」を掲げるシリーズの効率重視版。テキスト・画像・動画・音声を単一モデルで扱い最大100万トークンの長文脈に対応、コーディング・汎用エージェント・視覚・サイバーセキュリティを分けずに1つの混合RLで訓練する点や、二値の合否では順位づけできない解を比較する「グループ単位の報酬合成」で自己改善ループを回す設計を特徴とする。
- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** - 「人間のように書く」ことに特化した27BパラメータのApache-2.0オープンモデル。日常の連絡・メール・気まずい一言など実用的な短文作成に絞って設計されており、80件の実リクエストで大型モデルと比較評価したところ、EQ関連の文面ではGPT-6 Astraに50ポイント差で勝ち、選択肢や前置きを並べず本文だけを返す率でも競合モデルを上回ったと報告している。
- **[Cactus-Compute/needle3](https://huggingface.co/Cactus-Compute/needle3)** - スマホ・ウェアラブル・ロボット・車載機器向けに、モデル全体を8〜29MBの単一ファイルに収めた基盤モデル。汎用チャット能力と引き換えに、ツール呼び出し・構造化抽出・テキスト埋め込みの3タスクに特化し、文法制約付きデコードで出力の構文妥当性を保証しつつ、10倍大きいモデルをツール呼び出しで、2〜3倍大きいモデルを抽出精度で上回るとしている。
- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)** - Yandexが訓練データ・アーキテクチャ・ハイパーパラメータを一から作り直したハイブリッドMoE基盤モデル。総パラメータ80B・アクティブ3B、最大262,144トークンのコンテキストに対応し、数学・プログラミング等の推論タスクではより大規模なオープンソースモデルに匹敵する性能を示しつつ、特にロシア語の事実知識で強みを持つという。ロシア語圏向けの事実性ベンチマークWikiWebFacts・HardMultiQAも併せて公開している。

---

## ベンチマーク・リーダーボード

LMArenaの上位10位は、観測できる範囲で8日ぶりに変動した。1〜3位は「claude-fable-5-high」（1506、投票30,057件）・「claude-opus-4-6-high」（1505）・「claude-opus-4-7-high」（1502）のまま変わらなかったが、5位に「claude-fable-5.1-max」（1498、投票5,783件）、10位に「claude-opus-5-high」（1493、投票42,617件）が新たにランクインした。4位・8位はMetaの「muse-spark」シリーズ、9位はGoogleの「gemini-3.8-flash-high」が占める構図が続いており、上位10枠中7枠をAnthropicが占める状況自体は変わっていない。なお、Artificial Analysisの補助データは今回もサイト側のデータ構造から安定した抽出ができず、スキップした。

---

## 所感

LMArenaの上位10位が8日ぶりに動き、より新しいAnthropicモデルが下位から食い込み始めたのは小さな変化ながら、モデル単体の競争が完全に止まっていたわけではないことを示す一日だった。企業動向ではOpenAIが標準策定への提言と数学分野の諮問グループ設置を同日に発表しており、AIの成果を「どう検証し、どう伝えるか」というガバナンス面への関心が続いている。arXiv側では、次の一手の精度と自律実行の成功率が乖離するというエージェント評価の落とし穴や、モデルが内心で知っている答えを内部状態から読み取るPIRのような、性能そのものより「モデルの振る舞いをどう正しく測るか」を問う研究が目立った。オープンソース側でも、EQ・日常文章に特化したHemmingway-1や、8〜29MBに収めた組み込み向けneedle3など、汎用性能の物差しでは測りにくい専門特化モデルが引き続き存在感を示している。
