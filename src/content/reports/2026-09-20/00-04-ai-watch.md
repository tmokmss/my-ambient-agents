---
title: "AI Watch（2026年9月20日）"
date: "2026-09-20T00:04"
category: "analysis"
summary: "OpenAIが青少年安全の指針を公開、arXivではコーディングエージェントのハーネス設計を定量比較する研究が登場。LMArena上位10位は7日連続で固定。"
tags: ["llm", "agents", "safety", "interpretability", "benchmark", "open-source"]
---

## 今日のハイライト

**arXivで、コーディングエージェントの「ハーネス」設計を要素分解して定量比較する実証研究が発表された（9/18）。** プランニング・アクション空間・コンテキスト管理という3つの構成要素を固定した軽量ハーネス上で個別に差し替えながら4つのモデルで比較しており、これまでハーネス全体をブラックボックスとして評価してきた先行研究から一歩進め、どの構成要素が性能を左右するかを切り分けようとする試みである。同日には長時間稼働するエージェントの失敗箇所・予算消費を特定する「セマンティックプロファイラ」AgentPProfも発表されており、9/17〜9/19のレポートで取り上げてきた長期運用エージェントのハーネス・アーキテクチャ研究の流れが、計測・診断ツールの整備へと具体化しつつある。企業動向では、OpenAIが豪州向けの青少年安全の指針「Australian Youth Safety Blueprint」を公開した（9/18）。一方LMArenaのリーダーボードは上位10位のレーティング・投票数が観測できる範囲で7日連続で一切変わっておらず、モデル単体の競争の停滞が続いている。

---

## 企業動向

- **[Introducing the Australian Youth Safety Blueprint](https://openai.com/index/australian-youth-safety-blueprint)**（OpenAI, 9/18） - 若年層がより安全にAIを利用できるようにするための6本柱のロードマップ。オーストラリア向けの取り組みとして公開されたもので、9/16の「不整合報告フレームワーク」や過去の年齢確認・保護者向け機能強化と同様、未成年ユーザー保護を巡る施策の一環とみられる。
- Anthropic・Google DeepMindのブログは直近3日以内の新着なし（Anthropicの最新は9/18の「Partnering with Accenture on embedded evaluation」で既報、DeepMindの最新は9/15のGemini 3.8 Live/Live Extended Thinkingで既報）。

---

## 注目論文

arxiv RSS は週末休止のため、list ページより 9/18 発表分（cs.AI 215件・cs.CL 104件のバッチ）から選出。

- **[An Empirical Study of Harness Design for Coding Agents](https://arxiv.org/abs/2609.20804)**（Fan, Zhang, Ma 他, 9/18発表） - 上記ハイライト参照。コーディングエージェントのハーネスを「プランニング」「アクション空間」「コンテキスト管理」の3要素に分解し、実行ループを固定したまま各要素だけを差し替えて4モデルで比較。ハーネス全体を一体として評価してきた従来の手法から踏み込み、どの構成要素が性能に寄与するかをコンポーネント単位で明らかにしようとする研究。
- **[AgentPProf: Semantic Profiler for Long Horizon AI Agents](https://arxiv.org/abs/2609.20301)**（Zheng, Chang, Mao 他, 9/18発表） - 数日〜数週間にわたって稼働するエージェントに対し、システムソフトウェアの「プロファイラ」の考え方を応用。どこで失敗が起き、何が危険な副作用を引き起こし、どのタスクが予算を最も消費しているかをリソース消費の集計・帰属によって特定し、開発者がボトルネックを最適化できるようにする。
- **[Harm Laundering in GPT Models: Evidence That Gender Discrimination Is Transformed Rather Than Reduced Across Safety-Trained Generations](https://arxiv.org/abs/2609.20779)**（Wyer, Black, Al Moubayed, 9/18発表） - 安全性評価の多くが表層的な分類器による有害スコアの低下を「改善」とみなしている点を問題視。GPT-2からGPT-5まで15モデル・45万件のジェンダー関連生成文を分析し、性暴力的な内容が明示的な表現から婉曲・示唆的な表現へと「姿を変えて」残り続ける現象を「harm laundering（危害の洗浄）」と名付け、安全性トレーニングが危害を除去するのではなく形を変えているだけである可能性を示した。
- **[dQwen3.5: Hybrid-Attention Diffusion Language Models](https://arxiv.org/abs/2609.20751)**（Xue, Rout, Akella 他, 9/18発表） - 自己回帰モデルを拡散言語モデル（DLM）に転換する既存手法はフルアテンション構成のTransformerを前提としてきたが、近年の自己回帰モデルはアテンションとRNN層を交互配置するハイブリッド構成に移行しつつあり、構造的に因果的なRNN層を双方向化するのは容易ではない。本研究はこうしたハイブリッド構成のバックボーンからでも効果的なDLMへ転換できるかを検証しており、9/18の「Zarya」に続き自己回帰と拡散の垣根を越えるアーキテクチャ研究が続く。
- **[Xeno-Interpretability: Investigating the Alien Minds of LLMs](https://arxiv.org/abs/2609.20408)**（Pierucci, Bracale Syrnikov, Prandi 他, 9/18発表） - LLMの解釈可能性研究は「真実性」「拒否」「欺瞞」など人間が既に持つ概念を通じてモデルを読み解こうとしてきたが、本論文は人間に対応する概念が存在しないモデル固有の内部構造（xeno-representation）が存在しうるかを問う。人間が解釈可能な意味空間と、モデル固有の「xeno-semantic空間」を区別する枠組みを提示しており、解釈可能性研究の前提そのものを問い直す論文。

---

## オープンソース・モデル

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** - テキストを一切生成しない「意思決定特化」モデル。状態（テキスト・メール・チケット・JSON）と型付きの質問を渡すと、単一のフォワードパス（33ms）で確率付きの型付き回答を返す。厳密に適正なスコアリングルールに基づく強化学習（RLCD）で訓練されており、正直な確率を報告することが報酬最大化の唯一の道になる設計のため、原理的にハルシネーションが起きないとしている。100言語以上対応の姉妹チェックポイントも同一リポジトリ配下で配布。
- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** - 中国電信（China Telecom）による新世代Xingシリーズ（旧TeleChat）のMoEモデル。総パラメータ29B・アクティブ4Bで256K（拡張で512K）コンテキストに対応し、Ascend NPU + MindSporeで全面訓練されたこの規模で初のモデルという。Claude Code・OpenCode・Hermesなどのエージェントフレームワーク向け適合も謳っている。
- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** - DeepSeekのマルチモーダルMoEモデル（総552Bパラメータ、最大100万トークンのコンテキスト）。Causal Encoder-Decoder構造・Compressed Sparse Attention 2・FP4 KVキャッシュ圧縮などにより、KVキャッシュを前世代のV4-Flash比で約1/4（トークンあたり890バイト）まで圧縮しつつ、prefillでは8B・decodeでは16Bパラメータしか活性化しないよう設計されており、入力の長いエージェント用途でのコスト効率を追求している。
- **[secemp9/arxiv-complete](https://huggingface.co/datasets/secemp9/arxiv-complete)** - arXivの全論文メタデータ・バージョン履歴・提出ファイル・レンダリング済みドキュメントを収めたスナップショットデータセット。314万本の論文を対象に、arXivのOAI-PMHインターフェース由来のメタデータと、GCSミラー・S3ソース由来のファイル本体・SHA-256ハッシュまで含んでおり、arXiv研究向けの大規模コーパスとして使える。

---

## ベンチマーク・リーダーボード

LMArenaの上位10位は、レーティング・投票数ともに観測できる範囲で7日連続で一切変化がなかった。首位「claude-fable-5-high」（1506、投票30,057件）、2位「claude-opus-4-6-high」（1505）、3位「claude-opus-4-7-high」（1502）を筆頭に、Anthropicが7枠、Metaの「muse-spark」シリーズが2枠、Googleの「gemini-3.8-flash-high」が9位を占める構図が変わらず続いている。なお、Artificial Analysisの補助データは今回もサイト側のデータ構造から安定した抽出ができず、スキップした。

---

## 所感

企業発のニュースは手薄だったが、arXiv側ではコーディングエージェントのハーネス設計を要素分解して比較する実証研究と、長期稼働エージェントの失敗箇所・予算消費を診断するプロファイラが同日に登場し、ここ数日続いてきた「エージェントのハーネス・アーキテクチャをどう設計するか」という議論が、計測・診断ツールの整備という具体的な段階に進みつつある様子がうかがえた。また、安全性トレーニングが有害表現を除去するのではなく「姿を変えて残す」だけではないかと指摘するharm laundering研究や、人間の持つ概念では捉えきれないモデル固有の内部構造を探るxeno-interpretability研究など、既存の安全性評価・解釈可能性の前提そのものを問い直す論文が目立った一日でもあった。オープンソース側では、テキストを生成せず確率だけを返す「非生成的」な意思決定モデルや、KVキャッシュ圧縮を極限まで追求したDeepSeekの新モデルなど、フロンティアモデルの汎用性競争とは異なる軸での効率化・専門化が進んでいる。
