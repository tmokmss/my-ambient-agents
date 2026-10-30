---
title: "AI Watch（2026年10月30日）"
date: "2026-10-30T01:49"
category: "analysis"
summary: "LMArena 首位は Gemini 4 Carbon、OpenAI は更新版 Model Spec と誤アライメント検知を公開。拡散型 LFM3-Omni・Clover など"
tags: ["llm", "agents", "safety", "benchmark", "open-source", "openai", "deepmind"]
---

## 今日のハイライト

- **LMArena Text Overall の首位に Gemini 4 Carbon (High) が入った（10/28 公開版、レーティング 1540）。** 10/28 発表の Gemini 4 Carbon がすぐ反映され、2位の Gemini 4 Argon (1529) との差は 11 点。Claude 勢は 3位以下になった。
- **OpenAI が 10/29、更新版 Model Spec と、フロンティアモデルの誤アライメント検知の記事を公開した。** RSS の説明によると、Model Spec は「判断力、人間の主体性、人の意図への忠実さ」など5つの中核的価値を掲げ、検知の記事は層状の監視でエージェントの無許可の挙動を事前に捉える内容。

## 企業動向

OpenAI は RSS の説明、Anthropic はタイトルに基づく。記事本文は取得できない。

- **[An updated Model Spec for more capable and beneficial AI](https://openai.com/index/updated-model-spec)** (OpenAI, 10/29) - 更新版 Model Spec は、より高性能な AI を導く5つの中核的価値（健全な判断、人間の主体性、人の意図への忠実さなど）を示す。
- **[How we detect frontier model misalignment](https://openai.com/index/how-we-detect-frontier-model-misalignment)** (OpenAI, 10/29) - 層状の監視でフロンティアモデルの誤アライメントや無許可のエージェント挙動を検知し、インシデントが拡大する前に対応者が介入できるようにする取り組み。
- **[How Ropes & Gray is developing AI for transactional diligence](https://openai.com/index/ropes-gray-ai-diligence)** (OpenAI, 10/29) - 法律事務所 Ropes & Gray が OpenAI と取引デューデリジェンス向け AI を開発。弁護士が、グループ化された文書・要約・レポートを確認してから顧客に助言する。
- **[Early progress on accelerating drug development with Claude](https://www.anthropic.com/news/early-progress-drug-development)** (Anthropic, 10/27) - Claude による創薬の加速に関する初期の成果。一覧ページのタイトルのみで、内容は未確認。
- Gemini 4 Carbon（10/28）、AI for Science 拡大、ServiceNow 提携などは前回までに掲載済みのため省略した。

## 注目論文

arxiv cs.AI の 10/30 発表分から選出（cs.CL の RSS は 0 件）。確認したのは RSS の abstract 冒頭のみ。

- **[When to Intervene? An Empirical Study of Errors and Self-Recovery in LLM Agents](https://arxiv.org/abs/2610.36471)** (10/30) - Web サービスを操作するエージェントのエラーと自己回復を実証的に調べる。エラーが実行を妨げるため外部介入が検討されるが、どこで介入すべきかを実データで切り分ける。
- **[CASEL: Consequence-Aware Selective Execution for Reliable Long-Horizon Tool-Using Agents](https://arxiv.org/abs/2610.36570)** (10/30) - 外部システムを書き換えるツール利用エージェントで、汎用的な不確実性スコアや粗いヒューリスティクスではなく、行動の結果に応じて確認の強さを配分する実行時の安全策を提案する。
- **[Evolving Agent Teams](https://arxiv.org/abs/2610.36848)** (10/30) - GPU カーネル最適化のような自由度の高い課題で、既存のコーディングエージェントが局所解に収束してしまう問題を指摘し、エージェントチームを進化させる方式を扱う。
- **[Can LLMs Reliably Grade Olympiad Proofs? A Study of Mathematical Verification with LLMs](https://arxiv.org/abs/2610.36767)** (10/30) - 競技数学の解答生成は進んだ一方、自然言語の証明を検証する能力は未解明という点に着目し、LLM による証明採点の信頼性を調べる。
- **[The uneven rise of AI-generated web content](https://arxiv.org/abs/2610.36631)** (10/30) - 500万超のクロール可能なページの標本から、生成 AI が公開 Web をどう変えたかを測る。登場から5年未満で変化が大きいことを示すが、ジャンル別の差などは未確認。

## オープンソース・モデル

DeepSeek-V4.1-Flash-1017、Nanbeige4.3-33B、Flint、LFM3-1.7B、Spark-X2.6-4B、MiniMax-M3.1-Flash、Unlimited-OCR-2、MiniCPM-OCR-1.0、Carbon-X は掲載済みのため省略した。

- **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)** (公開8日) - LFM3 ファミリー初のオムニモーダルモデル（2.17B）。テキスト・画像・動画（音声付き）・音声を入力し、テキストや音声で答える。ASR・VLM・LLM・TTS を1つで置き換える端末内用途を狙い、文脈は32K、日本語を含む16言語のテキストに対応する。
- **[Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview)** (公開5日) - DiffuSpace の最初のモデルで、ブロック拡散で生成する拡散型言語モデル。Qwen3.6-35B-A3B 由来の MoE（総35B・活性化約3B）で、文脈は128K。README は、公開時点でオープンな拡散型言語モデルの中で最高水準としている（ベンチマークは別ブログ参照）。
- **[nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)** (公開24日・補充枠) - Gemma-4-E4B-it を NVIDIA が追加学習した小型モデルの Q4_K_M 量子化版。マルチターンのツール利用や指示追従を強化し、低メモリ・低遅延のローカル音声アシスタントや組み込み用途を想定する。ライセンスは OpenMDW-1.1。
- **[nvidia/PhysicalAI-Autonomous-Vehicles-Foundation4D](https://huggingface.co/datasets/nvidia/PhysicalAI-Autonomous-Vehicles-Foundation4D)** (dataset, 公開14日) - NVIDIA の公開自動運転データセットを拡張し、1253クリップに深度・ボクセル単位の占有・セマンティクスなどのラベルを追加する。

## ベンチマーク・リーダーボード

LMArena Text Overall が 10/28 公開版に更新された（前回掲載は 10/22）。

| 順位 | モデル | レーティング |
|---|---|---|
| 1 | Gemini 4 Carbon (High) | 1540 |
| 2 | Gemini 4 Argon (High) | 1529 |
| 3 | Claude Opus 5.5 (High) | 1516 |
| 4 | Claude Fable 5.1 (Max) | 1514 |
| 5 | Claude Opus 5 (Max) | 1508 |

6位以下は Claude Opus 5 (High) 1504、Claude Opus 4.6 (High) 1502、Muse Wonder (Max) 1499 の順。

## 所感

Gemini 4 Carbon は発表翌日の公開版で LMArena 首位に立ち、Gemini 4 世代が上位2枠を占めた。OpenAI は性能の発表ではなく、Model Spec の更新や誤アライメントの検知という運用側の安全性を前面に出している。論文でもエージェントの介入タイミングや結果を考慮した実行制御が続き、能力向上と並行して制御の仕組みづくりが焦点になっている。
