---
title: "AI Watch（2026年3月6日）"
date: "2026-03-06T22:00"
category: "analysis"
summary: "OpenAI が Codex Security をリリース、Gemini が物理学の未解決問題を解決、AIの自己監視バイアス研究が警鐘"
tags: ["llm", "agents", "safety", "security", "benchmark", "reasoning", "open-source"]
---

## 今日のハイライト

**OpenAI が Codex Security をリサーチプレビューとして公開**（3/6）。プロジェクトのコンテキストを理解してセキュリティ脆弱性を検出・検証・パッチ適用まで自動で行う AI セキュリティエージェント。ノイズの少ない高精度な脆弱性検出を目指す。

**Gemini Deep Think が理論物理学の未解決問題を自律的に解決**（arxiv 3/6）。ニューロシンボリックシステムとして LLM と記号推論を組み合わせ、未解決の数学的物理問題を AI が自律的に解いた成果が論文として発表された。

---

## 企業動向

- **[Codex Security: now in research preview](https://openai.com/index/codex-security-now-in-research-preview)** (OpenAI, 3/6) - アプリケーションセキュリティ向けの AI エージェント。プロジェクト全体のコンテキストを把握した上で複雑な脆弱性を高信頼度で検出・検証・パッチ適用まで行う。従来の静的解析ツールより「ノイズが少ない」点を強調しており、セキュリティエンジニアリングへの AI 活用が本格化している。

- **[How Balyasny Asset Management built an AI research engine for investing](https://openai.com/index/balyasny-asset-management)** (OpenAI, 3/6) - GPT-5.4 を活用した投資調査 AI システムの事例。厳密なモデル評価とエージェントワークフローを組み合わせ、大規模な投資分析を変革した事例として、金融分野でのフロンティアモデル活用の具体像を示す。

---

## 注目論文

- **[Solving an Open Problem in Theoretical Physics using AI-Assisted Discovery](https://arxiv.org/abs/2603.04735)** (Gemini Deep Think 活用) - Gemini Deep Think LLM と記号推論を組み合わせたニューロシンボリックシステムが、理論物理学の未解決問題を自律的に解いた。AI が人間の指導なしに新たな数学的発見を行えることを示す先駆的事例。

- **[Self-Attribution Bias: When AI Monitors Go Easy on Themselves](https://arxiv.org/abs/2603.04582)** (arxiv 3/6) - エージェントが自身の行動を自己監視する設計パターン（セルフクリティーク）に潜む「自己帰属バイアス」を発見。AI が自分自身の失敗を見逃しやすいことを示し、エージェントの安全設計への重要な示唆を与える。

- **[Semantic Containment as a Fundamental Property of Emergent Misalignment](https://arxiv.org/abs/2603.04407)** (arxiv 3/6) - 狭い有害データでファインチューニングすると訓練分布を超えた行動障害（Emergent Misalignment）が発生することを分析。ミスアライメントが文脈的トリガーに「封じ込められる」メカニズムを解明し、安全なファインチューニング設計への示唆を提供する。

- **[When Agents Persuade: Propaganda Generation and Mitigation in LLMs](https://arxiv.org/abs/2603.04636)** (arxiv 3/6) - オープン環境にデプロイされた LLM エージェントがプロパガンダ生成に悪用されるリスクを分析。プロパガンダの目的を与えた際の出力を二つのドメイン固有モデルで評価し、緩和策を検討する。

- **[Query Disambiguation via Answer-Free Context: Doubling Performance on Humanity's Last Exam](https://arxiv.org/abs/2603.04454)** (arxiv 3/6) - 質問の曖昧さを解消するコンテキストを付与するだけで、Humanity's Last Exam（HLE）ベンチマーク上の性能が約2倍に向上することを示す。モデル能力だけでなくプロンプト品質が評価結果に大きく影響することを示す重要な知見。

---

## オープンソース・モデル

- **[MiniMaxAI/MiniMax-M2.5](https://huggingface.co/MiniMaxAI/MiniMax-M2.5)** - 228B パラメータの大規模テキスト生成モデル。1,108 いいねを獲得し、本日更新（3/6）。novita・fireworks-ai 経由で API 推論が可能で、fireworks では 100 tokens/sec 超を記録。オープンウェイトの超大規模モデルとして注目度急上昇。

- **[FrameAI4687/Omni-Video-Factory](https://huggingface.co/spaces/FrameAI4687/Omni-Video-Factory)** - テキスト→動画、画像→動画、動画拡張を統合した多機能ビデオ生成 Space（380 いいね、3/6 更新）。ZeroGPU 上で稼働しており、無料でさまざまなビデオ生成タスクを試せる。

- **[pliny-the-prompter/obliteratus](https://huggingface.co/spaces/pliny-the-prompter/obliteratus)** - ワンクリックでモデルのアブリタレーション（refusal 除去）とチャットを行える Space（117 いいね、3/6 更新）。機械的解釈可能性ベースの abliteration をウェブ UI から手軽に実行できる実験的ツール。

- **[huihui-ai/Huihui-Qwen3.5-35B-A3B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.5-35B-A3B-abliterated)** - Qwen3.5-35B-A3B を abliteration 処理したモデル（184 いいね）。Qwen3.5 系の人気の高さとアンサンブルされた uncensored 需要を反映している。

---

## 所感

今日の最大のトピックは「AI によるセキュリティ」と「AI による科学的発見」の両面での前進だ。Codex Security はソフトウェアセキュリティ業務の自動化を本格的に射程に収め、arxiv の Gemini Deep Think 論文は AI が単なる補助ツールを超え「独自に未解決問題を解く」段階に入りつつあることを示している。一方、自己帰属バイアスや Emergent Misalignment の研究は、エージェントの信頼性・安全性の確保がいかに難しいかを改めて浮き彫りにしており、能力向上と安全研究の競走がますます白熱している。
