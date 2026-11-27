---
title: "AI Watch（2026年11月27日）"
date: "2026-11-27T04:02"
category: "analysis"
summary: "Tier 1 は新着薄。Thinking Machines の Inkling 2 Mini、Tencent Hy4 flash、LMArena は Gemini 4 が上位独占"
tags: ["llm", "open-source", "benchmark", "agents", "leaderboard"]
---

## 今日のハイライト

- **Tier 1（Anthropic / OpenAI / Google DeepMind）の過去24時間の新着はほぼなし。** 最新は 11/24 の DeepMind「Mass Spec Skills」程度で、主役はオープンウェイト側。Thinking Machines の **Inkling 2 Mini**（Apache 2.0、11/20 公開）が HF トレンド首位で、周辺の派生・推論最適化記事も急増している。
- LMArena Text Overall（公開日 11/22）は **Gemini 4 の Carbon / Argon / Neon が 1〜3 位**を占め、Claude Opus 5.5 が 4 位。Artificial Analysis の Intelligence Index では Claude Fable 5.2 が 64.8 で首位。

## 企業動向

- **[From spectrum to structure: Identifying molecules with Mass Spec Skills for Google Antigravity](https://deepmind.google/blog/interpreting-mass-spectra-with-google-antigravity/)** (Google DeepMind, 11/24) - 科学者が Google Antigravity 上でタンデム質量スペクトルを解釈できるようにする「Mass Spec Skills」の紹介。エージェントのスキル機構を科学分野のワークフローに適用する流れの一例。本文は未取得のため、詳細は RSS 概要の範囲。
- **[Building on Nemotron 3.5 Parse: Open Data, Fine-Tuning, and Faster Inference](https://huggingface.co/blog/nvidia/building-on-nemotron-35-parse-open-data-fine-tunin)** (NVIDIA, 11/26) - Nemotron 3.5 Parse の周辺として、オープンデータ・ファインチューニング・高速推論に関する記事（タイトルの範囲）。
- **[Where scientists draw the line on AI agents](https://huggingface.co/blog/allenai/where-scientists-draw-the-line-on-ai-agents)** (Ai2, 11/25) - 科学者が AI エージェントに任せる範囲・任せない範囲を扱う記事（タイトルの範囲）。
- **[The full DeepSeek App experience, now via API](https://api-docs.deepseek.com/news/news261113)** (DeepSeek, 11/13) - 4日以上前だが、DeepSeek App の機能（検索・ファイル・リンク・安全性・音声）を API 経由で使えるようにし、OCR / ASR / TTS も単体 API として提供。未掲載のため補足として記載。

## 注目論文

arxiv RSS（cs.AI / cs.CL、11/26 発表分）より選出。

- **[Context Scaling: A New Frontier of AI Scaling](https://arxiv.org/abs/2611.33160)** (Xipeng Qiu ほか, 11/26) - 実運用 AI の失敗は推論力不足より、タスクが依存する状態と実行時に利用できるコンテキストのミスマッチから生じる、と主張。モデル規模・推論量に続く第3のスケーリング軸として「コンテキスト」を位置づける。
- **[How Much Effort Does an AI Code Reviewer Need? Evidence from Claude 5.5 Models on Plausible-but-Wrong Patches](https://arxiv.org/abs/2611.33639)** (Zax Shen ほか, 11/26) - もっともらしいが誤っているパッチに対し、AI コードレビュアーの推論 effort を上げるとどこまで検出できるかを Claude 5.5 系で評価。コストと精度のトレードオフを実測する点が実務的。
- **[The Platonic Representation Hypothesis in Jacobian-Space](https://arxiv.org/abs/2611.33304)** (Ross Murphy, Gabriel Brostow ほか, 11/26) - 言語モデルと視覚モデルが「ほぼ回転を除いて一致する」表現を持つことを、ヤコビアン空間で示すと主張。モデル間の表現収束仮説を別の視点から検証。
- **[Learning from Recurrence: Internalizing Depth-Induced Preferences in Looped Language Models](https://arxiv.org/abs/2611.33468)** (Hui Chen ほか, 11/26) - 同一ブロックを反復適用するループ型 LM で、再帰深度が増えたときの出力傾向を内部化して学習する手法。推論時計算を深度方向で扱う研究の一つ。
- **[AutoformBench: A Lean Formalization Benchmark for Advanced Mathematics](https://arxiv.org/abs/2611.33165)** (Charles Arnal ほか, 11/26) - 高度な数学結果の Lean 形式化能力を測るベンチマーク。AI による機械検証済み証明が進む中、「形式化」そのものを評価対象にする。

## オープンソース・モデル

- **[thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini)** (Thinking Machines Lab, 11/20 公開) - テキストと画像を入力に取るマルチモーダルの汎用モデルで、エージェント・ツール利用・コーディング支援・RAG 向け。Apache 2.0 のオープンウェイトで、同社の Tinker 経由の API / ファインチューニングも可能。HF トレンド首位（likes 6,000 超）で、GGUF や abliterated などの派生が多数並ぶ。HF Blog にも導入記事と RTX PRO 6000 での推論最適化記事がある。
- **[tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash)** (Tencent, 公開約10日) - Hy シリーズで最もコスト効率が高いと称するモデル。総パラメータ 220B（うち Engram 64B）でアクティブ 12B の MoE、テキスト+画像入力、最大 1M トークン文脈。0.85B のドラフタ DFly2 による投機的デコーディングを内蔵。
- **[apple/DepthPro2](https://huggingface.co/apple/DepthPro2)** (Apple, 公開約23日・補充枠) - 単一写真・動画・ライブ映像から全画素のメトリック深度を推定する Depth Pro の第2世代。エッジが鮮明でフレーム間の安定性が高いのが特徴。24M〜872M の4サイズ（S/B/L/H）が別リポジトリで提供される。

## ベンチマーク・リーダーボード

- **LMArena Text Overall**（公開日 2026-11-22）: 1位 Gemini 4 Carbon (High) 1538、2位 Gemini 4 Argon (High) 1527、3位 Gemini 4 Neon (High) 1522、4位 Claude Opus 5.5 (High) 1514、5位 Claude Fable 5.1 (Max) 1511、6位 Claude Opus 5 (Max) 1506。
- **Artificial Analysis Intelligence Index**: Claude Fable 5.2 64.8、GPT-6.2 Astra 62.2、Gemini 4 Neon 61.5、Gemini 4 Carbon 60.1、Claude Opus 5.5 59.1。LMArena（人間の選好）では Gemini 4 が強く、AA の総合指標では Claude Fable 5.2 が首位と、指標によって順位が分かれる。

## 所感

Tier 1 の発表が一段落する日は、Inkling 2 Mini や Hy4 flash のようなオープンウェイト側の動きが目立つ。Hy4 flash は大規模 MoE にドラフタを内蔵して低コストな長文脈推論を狙っており、モデル本体だけでなく推論効率まで一体で設計する流れが強まっている。論文側でも、コンテキスト設計や AI コードレビューの effort 配分など、モデル能力そのものより運用面を扱う研究が目立つ。
