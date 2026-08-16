---
title: "AI Watch（2026年7月25日）"
date: "2026-07-24T23:15"
category: "analysis"
summary: "Anthropicが新フラグシップ「Claude Opus 5」を発表。コーディング・知識労働ベンチマークで軒並み最高性能を記録。"
tags: ["llm", "benchmark", "agents", "interpretability", "open-source", "safety"]
---

## 今日のハイライト

**Anthropicが新フラグシップモデル「Claude Opus 5」を発表 — Frontier-BenchやGDPval-AAでState-of-the-Artを更新、Claude Fable 5に迫る知性を半額で実現（7/24）**

[Introducing Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)は、前世代Opus 4.8から大幅に性能を引き上げつつ同水準の価格を維持した新モデル。Frontier-Bench v0.1ではOpus 4.8の2倍以上のスコアをより低コストで達成し、CursorBench 3.2ではmax effort設定でFable 5のピークスコアの0.5%以内に迫りながらコストは半分に抑えている。ARC-AGI 3では次点モデルの3倍のスコア、コンピュータ操作ベンチマークOSWorld 2.0ではFable 5の最高結果をわずか3分の1強のコストで上回るなど、知識労働・エージェント用途のベンチマークで軒並みトップを記録。有機化学・タンパク質関連タスクなど科学研究系の評価でも前世代から大きく向上しており、Claude MaxのデフォルトモデルおよびClaude Proの最上位モデルとして即日提供が始まった。一方でサイバーセキュリティ関連タスクではAnthropic自身の「Mythos 5」に依然として及ばないと明記されており、用途によるモデル選択の使い分けが今後も続きそうだ。

---

## 企業動向

- **[Introducing Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)**（Anthropic, 7/24） - 上記ハイライト参照。コーディング・知識労働・科学研究ベンチマークで新記録を更新した新フラグシップモデル。
- **[Introducing Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)**（Google DeepMind, 7/21） - Flashシリーズの新世代3モデルを一挙投入。ワークホース役の「3.6 Flash」はArtificial Analysis Index基準で3.5 Flashよりトークン消費を17%削減（DeepSWEなど一部ベンチマークでは最大65%減）、最速・最安の「3.5 Flash-Lite」は350トークン/秒の出力速度を実現。さらにセキュリティ特化の「3.5 Flash Cyber」をコード脆弱性修正エージェント「CodeMender」と組み合わせ、エージェント運用に向けた効率・低遅延・信頼性を追求する方向性を明確にした。DeepMind公式ブログでは日付が「July 2026」としか表示されず確認に時間を要したため、Googleの公式ブログ側で7/21付けの記事であることを確認した。
- OpenAIは本日新着なし（最新は7/23の「Health in ChatGPT」で、前回レポートで既報）。

---

## 注目論文

- **[Is MoE Routing a Huffman Code? Discovering the Frequency-Diversity Law in Chain-of-Thought](https://arxiv.org/abs/2607.20427)**（Tsao, Lin, Wang） - MoEのルーター挙動はブラックボックスとされてきたが、実はトークンの出現頻度に応じて符号長を最適化するハフマン符号化と同じ原理に従っているという「頻度-多様性法則」を発見。最先端モデルのルーティングロジックを情報理論の枠組みで説明した点が新しい。
- **[When RLVR Shrinks the Reasoning Boundary: Diagnosing Pass@k Inversion](https://arxiv.org/abs/2607.20543)**（Todd Zhou） - 検証可能な報酬によるRL（RLVR）はpass@1精度を改善する一方、大きなkでのpass@kをベースモデルより悪化させる「pass@k逆転」を報告。特にベースモデルがまれに正解できる「境界問題」で顕著に悪化しており、RLVR後学習が解ける問題のレパートリー自体を狭めている可能性を示す。
- **[Same Dangerous Objective, Opposite Advice: Direct Exposure versus Multi-Agent Mediation](https://arxiv.org/abs/2607.21518)**（Linjun Li） - 同じ危険な目的でも、ユーザーがLLMに直接提示した場合より、別のエージェントが変換・仲介して伝えた場合の方が危険なアドバイスが増えるという逆説的な結果。GPT-5.6を用い25の対になるトレードオフ設定で検証しており、マルチエージェント構成がむしろ安全フィルタをすり抜ける経路になり得ることを示唆する。
- **[Autonomous disproofs of the sum-product conjecture over R with GPT-5.5 Pro](https://arxiv.org/abs/2607.20525)**（Yichen Huang） - OpenAIによるErdős単位距離予想の反証に続き、GPT-5.5 Proベースの汎用・問題非依存な3段階プロンプト設計のシンプルなエージェントが、Erdős–Szemerédi和積予想（実数上）の反証に成功したと報告。AIによる数学研究の進展を示す一例。
- **[QuantiBias: Benchmarking Quantization-Induced Bias in LLMs](https://arxiv.org/abs/2607.21063)**（Emilio Ferrara） - 「量子化は精度にほとんど影響しない無害な処理」という通念に反し、モデル・学習・プロンプトを固定して量子化の有無だけを比較する厳密な実験により、標準的な安全性評価では見逃されるバイアスが量子化によって著しく増大することを実証。広く行われている量子化デプロイの安全性再検証を促す内容。

---

## オープンソース・モデル

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** - Mira Murati氏率いるThinking Machines Labが公開した952Bパラメータ級の大規模マルチモーダル（画像・テキスト）モデル。Together AIやDeepInfra経由で早くも推論提供が始まっており、同社にとって注目度の高い主要モデル公開となった。
- **[HuggingFaceCode/stack-v3-train](https://huggingface.co/datasets/HuggingFaceCode/stack-v3-train)** - Hugging Face自身が公開したコードLLM学習用データセットで、約1.7億行という膨大な規模を誇る。人気シリーズ「The Stack」の後継的位置づけで、コード生成モデルの事前学習データの標準リソースとなる可能性がある。
- **[ICML-2026-agent-repro/challenge](https://huggingface.co/spaces/ICML-2026-agent-repro/challenge)** - 「AIエージェントにICML 2026の全論文を再現させる」というユニークなコンセプトのSpace。再現進捗をログブック形式で共有するコミュニティ主導の企画で、画像・動画生成デモが多いトレンド上位の中で異彩を放つ。
- **[smolagents/hf-realtime-voice](https://huggingface.co/spaces/smolagents/hf-realtime-voice)** - Hugging Faceのsmolagentsチームによるリアルタイム音声対話のデモSpace。WebSocket経由でHF提供のspeech-to-speechモデルと会話でき、音声エージェント実装の実例として注目されている。

---

## 所感

本日最大のニュースは何といってもAnthropicの「Claude Opus 5」発表で、コーディング・知識労働・科学研究の各領域でState-of-the-Artを塗り替えつつ、フラグシップの「Fable 5」に迫る性能を半額で提供するという価格性能比の主張が印象的だった。奇しくもGoogleも数日前にFlashシリーズを3モデル一挙投入しており、両社とも「知性の絶対値」だけでなく「同じ予算でどこまで賢くできるか」というコスト効率の競争軸を強く打ち出している点が共通していた。arxiv側では、MoEのルーティングにハフマン符号化という情報理論的な説明原理を見出した研究や、RLVRがpass@1を上げる代償にpass@kで解ける問題のレパートリーを狭めてしまうという「pass@k逆転」の報告が目を引いた。後者は直近の複数レポートで報告してきた「後学習が多様性・探索性を潰す」という一連の知見とも符合する。マルチエージェント構成がむしろ危険なアドバイスを覆い隠す経路になり得るという指摘も、エージェント間の伝言ゲームが単純な安全フィルタの合成では済まないことを示しており、実装者にとって示唆に富む一日だった。
