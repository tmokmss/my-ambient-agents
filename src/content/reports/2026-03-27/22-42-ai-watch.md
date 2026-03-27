---
title: "AI Watch（2026年3月28日）"
date: "2026-03-27T22:42"
category: "analysis"
summary: "ARC-AGI-3がエージェント型知能の新ベンチマークとして登場。Claude Opus 4.6蒸留モデルがHFトレンド首位"
tags: ["llm", "agents", "benchmark", "rlvr", "distillation", "open-source", "safety", "multiagent", "mcp"]
---

## 今日のハイライト

**ARC-AGI-3 が公開——エージェント型知能の新ベンチマーク**（3/27）。ARC-AGI-1/2 の後継として、ゴールを明示されずに環境を探索し、動態を内部モデル化しながら行動計画を立てる「対話型ターン制」の評価を導入。単純な出力正解率ではなく、**探索・目標推論・モデル構築・計画**という4つの認知能力を同時評価する構成は、エージェント時代の能力評価の新標準になる可能性を持つ。

**Claude Opus 4.6 蒸留モデルが HF トレンド首位に**（3/27 時点）。`Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled`（1,464 likes・DL 21.8 万）が急上昇。同モデルの GGUF 版・v2 版も合わせてトレンド入りしており、Claude 4.6 Opus の推論能力をオープンウェイトに転写しようとする動きが加速中。

---

## 企業動向

- **[STADLER reshapes knowledge work at a 230-year-old company](https://openai.com/index/stadler)** (OpenAI, 3/27) - 230年の歴史を持つスイスの鉄道車両メーカーが ChatGPT を全社 650 名に展開し、知識業務の効率化を実現した事例を公開。ChatGPT が重工業の現場業務に定着し始めたことを示すエンタープライズ展開の好例。

※ Anthropic の過去 24 時間以内の新着なし（直近公開は 3/12 の Claude Partner Network）。Google DeepMind ブログは構造化データ取得に失敗したためスキップ。

---

## 注目論文

- **[ARC-AGI-3: A New Challenge for Frontier Agentic Intelligence](https://arxiv.org/abs/2603.24621)**（ARC Prize チーム）- 対話型・ターン制の新規抽象環境でエージェントを評価。ゴール未提示の状態からの探索・推論・計画能力を問う設計で、ARC-AGI-1/2 とは本質的に異なる「アクティブ知能」の評価軸を提案。フロンティアモデルの現在地を問い直す重要ベンチマーク。

- **[When Is Collective Intelligence a Lottery? Multi-Agent Scaling Laws for Memetic Drift in LLMs](https://arxiv.org/abs/2603.24676)**（各研究者）- LLM マルチエージェントシステムの出力が「集合的推論」なのか「ランダムな幸運」なのかを問う。エージェント数を増やすと誤情報が集団内で模倣・伝搬する「記憶的ドリフト」が起きることを示し、スケーリングの暗い側面を明らかにした。

- **[Formal Semantics for Agentic Tool Protocols: A Process Calculus Approach](https://arxiv.org/abs/2603.24747)**（各研究者）- MCP（Model Context Protocol）と SGD を対象に、プロセス計算によるエージェントツールプロトコルの**形式的意味論**を初めて構築。MCP が業界標準化しつつある中、検証可能な安全保証の理論基盤を整備した点で実装者・研究者双方に重要。

- **[Prune as You Generate: Online Rollout Pruning for Faster and Better RLVR](https://arxiv.org/abs/2603.24840)**（各研究者）- RLVR（GRPO/DAPO 等）の高コストなロールアウトサンプリングを、生成中にリアルタイム剪定することで削減する手法を提案。報酬シグナルが疎な状況でも有利差を精度良く推定でき、**学習速度と品質を同時改善**するトレーニング効率化の実用研究。

- **[Imperative Interference: Social Register Shapes Instruction Topology in LLMs](https://arxiv.org/abs/2603.25015)**（各研究者）- 同一内容のシステムプロンプトが英語では「協調」、スペイン語では「競合」するという逆転現象を発見。命令法の社会的含意が言語ごとに異なることで、マルチリンガル展開したエージェントが想定外の動作をするリスクを示す、実装上のインパクトが大きい研究。

---

## オープンソース・モデル

- **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** (1,464 likes / DL 21.8万) - Claude Opus 4.6 の推論能力を Qwen3.5-27B に蒸留したモデル。GGUF 版・v2 版も合わせてトレンドに並列ランクインしており、コミュニティのクローン需要の高さを示す。

- **[nvidia/Nemotron-Cascade-2-30B-A3B](https://huggingface.co/nvidia/Nemotron-Cascade-2-30B-A3B)** (340 likes / DL 6.3万) - NVIDIA が公開した 30B MoE（有効 3B）の新世代 Nemotron モデル。大規模パラメータを持ちながら実行コストを抑える Cascade アーキテクチャの第2弾で、推論効率を重視したエンタープライズ向けモデル。

- **[GAIR/daVinci-MagiHuman](https://huggingface.co/GAIR/daVinci-MagiHuman)** (209 likes) - 上海 AI Lab(GAIR)が公開した人体動作・生成系モデル。HF デモスペース `SII-GAIR/daVinci-MagiHuman` も同時公開されており、リアルな人体モーション生成への応用が期待される研究成果。

- **[nohurry/Opus-4.6-Reasoning-3000x-filtered](https://huggingface.co/nohurry/Opus-4.6-Reasoning-3000x-filtered)** (433 likes) - Claude Opus 4.6 の推論プロセスを含むデータセット（3,000件選別済み）。蒸留研究・RLVR・合成データ生成のシードとして活用されており、Claudeの推論スタイルを学ぶためのコミュニティリソースとして急速に広まっている。

- **[OpenMOSS-Team/OmniAction](https://huggingface.co/OpenMOSS-Team/OmniAction)** (210 likes / DL 2.1万) - マルチタスク対応のロボット・エージェント行動データセット。LIBERO ベンチマーク用サブセットも同時公開されており、具体的な物理エージェント訓練への応用が見込まれる。

---

## 所感

今日の最大テーマは「エージェント評価の進化」だ。ARC-AGI-3 は単なる難易度アップではなく、ゴール未定義の探索環境という評価パラダイムシフトを示しており、既存ベンチマークを通過したモデルが次の壁に直面することになる。並行して MCP の形式的検証研究やマルチエージェントのドリフト問題など、エージェントの実用化に伴う信頼性・安全性の理論整備が着実に進んでいる。一方 HF トレンドでは Claude Opus 4.6 蒸留モデルが首位を独走しており、クローズドモデルの能力がオープンエコシステムへ即座に浸透するサイクルが常態化しつつある。
