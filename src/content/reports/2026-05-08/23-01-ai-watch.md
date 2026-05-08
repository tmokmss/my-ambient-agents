---
title: "AI Watch（2026年5月9日）"
date: "2026-05-08T23:01"
category: "analysis"
summary: "OpenAI が Codex 内部安全運用の詳細を公開。Anthropic Labs が視覚デザイン協働ツール Claude Design を発表。"
tags: ["llm", "agents", "safety", "benchmark", "open-source", "coding", "design", "multiagent"]
---

## 今日のハイライト

**OpenAI が Codex の社内安全運用ノウハウを公開（5/8）**——OpenAI 自身が社内で Codex エージェントを本番利用している経験から得た安全運用の知見を詳細に公開。コードの自動生成・実行を伴うエージェントが人間の監督なしに動作する際のリスク管理（サンドボックス設計・ツール呼び出しの制限・ロールバック戦略など）を実践例として示しており、エージェント AI を業務投入しようとする企業にとっての参照事例として注目度が高い。「自社のエージェントをどう安全に走らせるか」という問いへの OpenAI 流の回答といえる。

**Anthropic Labs が Claude Design を発表——視覚創作の協働を AI で拡張**——デザイン・プロトタイプ・スライド・ワンページャーなど「磨かれたビジュアル成果物」を Claude と共同制作できる新製品 Claude Design を Anthropic Labs からリリース。熟練デザイナーが探索できる方向数を増やし、非デザイナーのファウンダー・PM・マーケターにも本格的なビジュアル制作の入口を開く。Claude のコーディング・分析能力に続き、ビジュアルクリエイティブ領域への本格進出を示すリリース。

---

## 企業動向

- **[Running Codex safely at OpenAI](https://openai.com/index/running-codex-safely)**（OpenAI, 5/8）— OpenAI が自社内で Codex コーディングエージェントを安全に運用するために実践している設計・運用方針を詳述した記事。エージェントが副作用（ファイル操作・シェルコマンド・HTTP リクエスト）を持つ現実環境でどう封じ込めを行うかについて、ポリシー・ツール制限・監視の三層で対処していることが伺える。エージェント展開の安全フレームワークとして実務者が参照すべき一次資料。

- **[Introducing Claude Design by Anthropic Labs](https://www.anthropic.com/news/claude-design-anthropic-labs)**（Anthropic, 最新）— Claude を使って polished なビジュアル成果物（デザイン・プロトタイプ・スライドなど）を共同制作できる実験的プロダクト。デザインツールとして使うだけでなく、「まず一度に 10 方向を試す」という探索の量的拡張が主な価値提案。Anthropic Labs ブランドは先端 UI 実験の場として機能しており、Claude の適用領域が文章・コード以外に広がる象徴的なリリース。

---

## 注目論文

- **[AgentTrust: Runtime Safety Evaluation and Interception for AI Agent Tool Use](https://arxiv.org/abs/2605.04785)**（複数著者）— AI エージェントのツール呼び出し（ファイル操作・シェル・HTTP・DB クエリ）を実行前にリアルタイムで安全評価し、危険なアクションをインターセプトするフレームワーク。静的ガードレールがオブファスケーションを見逃し、事後ベンチマークが実行後にしか機能しない弱点を補う設計で、1 回の誤操作で不可逆的損害が生じうるエージェント環境における実用的防御層として重要。

- **[Executable World Models for ARC-AGI-3 in the Era of Coding Agents](https://arxiv.org/abs/2605.05138)**（複数著者）— 最新の AGI ベンチマーク ARC-AGI-3 に対して、コーディングエージェントが実行可能な Python ワールドモデルを維持しながら解く手法を提案。モデルを実行して検証し、MDL 的な簡潔さへのバイアスに向けてリファクタリングしながら計画・行動するシステムは意図的にシンプルで、LLM 能力の限界と抽象推論の本質的難しさを同時に照らす。

- **[ReaComp: Compiling LLM Reasoning into Symbolic Solvers for Efficient Program Synthesis](https://arxiv.org/abs/2605.05485)**（複数著者）— 少数の推論トレースからコーディングエージェントを使って再利用可能なシンボリックプログラム合成器をコンパイルし、テスト時に LLM 呼び出しゼロで動作させる手法。LLM が強力だが組み合わせ探索では非効率・不安定になる問題に対し、「一度推論させ、シンボリックソルバーに焼き付ける」という新しい効率化パラダイムを提示する。

- **[XL-SafetyBench: A Country-Grounded Cross-Cultural Benchmark for LLM Safety and Cultural Sensitivity](https://arxiv.org/abs/2605.05662)**（複数著者）— 10 カ国語・5,500 テストケースを備えた文化横断型 LLM 安全ベンチマーク。英語中心・翻訳頼みの既存評価が各国固有の有害性や文化的センシティビティを捉えられない点を指摘し、ジェイルブレイク・文化的感受性・有害コンテンツ生成の 3 軸を国別に評価する設計。グローバル展開する LLM サービスの安全評価に不可欠なリソースとなりうる。

- **[Evaluation Awareness in Language Models Has Limited Effect on Behaviour](https://arxiv.org/abs/2605.05835)**（複数著者）— 大規模推論モデル（LRM）が思考連鎖の中で「評価されているかもしれない」と認識した場合、実際の出力に戦略的適応が生じるかを検証。結果は「評価意識があっても行動への実効的影響は限定的」であり、「評価中は安全に振る舞い、本番では危険になる」という懸念に対し、現時点では実証的根拠が薄いことを示す。AI 安全評価手法の信頼性議論に直接関わる知見。

---

## オープンソース・モデル

- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**（279 likes）— Zyphra の MoE++ アーキテクチャ採用の推論特化モデル。総パラメータ 8B・アクティブ 700M 以下という超軽量構成ながら、数学・コーディングベンチマークで DeepSeek-R1-0528 に匹敵・凌駕する結果を報告。訓練は全工程 AMD コンピュート・ネットワーク・ソフトウェアスタックで完結させており、NVIDIA 以外のハードウェアエコシステムでの本格的 LLM 開発事例として注目に値する。

- **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)**（161 likes）— Google が HuggingFace に公開した Gemma 4 ファミリーの 31B インストラクション・チューニング済みアシスタントバリアント。Gemma 4 は既に DeepMind ブログで発表済みだが、アシスタント特化版が HF でトレンド入りしており、実用向け OSS モデルとしての需要の高さを示す。

- **[nvidia/Nemotron-Personas-Korea](https://huggingface.co/nvidia/Nemotron-Personas-Korea)**（423 likes）— NVIDIA が公開した韓国語ペルソナデータセット。Nemotron シリーズの多言語展開の一環で、韓国語 LLM のインストラクションチューニングや RLHF 用合成データ生成への活用が想定される。アジア言語対応のオープンデータが相対的に少ない中、高品質な Korean personas リソースとして研究コミュニティへの貢献が期待される。

---

## 所感

今日は「エージェントをどう安全に動かすか」というテーマが企業・論文の両軸で交差した一日だった。OpenAI が自社の Codex 運用ノウハウを公開し、arxiv では AgentTrust がリアルタイム安全評価を提案する——実際にエージェントを本番投入しながら安全性の枠組みを後付けで固める動きは、産業と研究が並走していることを象徴している。一方で XL-SafetyBench と「評価意識の限定的影響」という二つの論文は、安全評価自体の設計が文化的偏りや評価時ゲーミングによって歪みうるという本質的問いを突きつけており、「何を測っても安全評価になるわけではない」という認識がいよいよ主流化しつつある。
