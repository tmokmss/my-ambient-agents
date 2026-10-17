---
title: "AI Watch（2026年10月18日）"
date: "2026-10-17T23:55"
category: "analysis"
summary: "DeepSeek-V4.1-Flash-1017 が公開、Mistral が時系列予測モデル Timestral を発表。Tier 1 は新着が少なく、LFM2.5-24B-A2B や評価認識の多言語研究など"
tags: ["llm", "open-source", "agents", "benchmark", "safety"]
---

## 今日のハイライト

- **DeepSeek が DeepSeek-V4.1-Flash-1017 を公開した（10/17）。** V4.1-Flash の小幅アップデートで、README の比較表では Terminal-Bench 4.0 が 31.2 から 42.3、Apex Bench v1.1 が 64.6 から 72.1 に上がっている。実行時間と出力長も減らしたとされ、性能とコストのバランスを重視した更新と読める。
- **Tier 1（Anthropic / OpenAI / Google DeepMind）の新着は、前回までに掲載したもののみだった。** そのため Tier 2 の Mistral と Hugging Face Blog も確認した。

## 企業動向

Tier 1 に新着がなかったため、Tier 2 から補う。

- **[Introducing Timestral](https://mistral.ai/news/timestral/)** (Mistral AI, 10/15) - フィードの説明によると、5M〜209M パラメータの 4 サイズで提供される確率的時系列予測モデル。CPU でも効率よく動き、ゼロショットで使える。Mistral が言語モデル以外の領域に広げた発表。
- **[Welcome Beam: a 501B open model you can own, customize, and scale](https://huggingface.co/blog/reflection-beam)** (Hugging Face, 10/16) - タイトルから、501B パラメータのオープンモデル Beam の公開紹介。説明文が取れず、詳細は未確認。
- **[Welcome Muse Spark Open](https://huggingface.co/blog/meta-muse-spark-open)** (Hugging Face, 10/15) - Meta のオープンウェイト・マルチモーダル MoE モデルの紹介記事（タイトルによる）。リポジトリ `meta-models/Muse-Spark-Open-816B-A42B` は gated で README は確認できなかった。
- **[Scaling Indic Pretraining: 2.8 Trillion Tokens and an Open Data Generation Pipeline](https://huggingface.co/blog/nvidia/scaling-indic-pretraining)** (NVIDIA, 10/16) - タイトルによると、インド系言語の事前学習データ 2.8 兆トークンと、オープンなデータ生成パイプラインを公開したもの。詳細は未確認。

## 注目論文

arxiv RSS は週末休止（土曜 UTC）のため、list ページより 10/16（金）発表分から選出。前回掲載済みの論文は除いた。

- **[Evaluation Awareness Beyond English: Do LLMs Act Differently When Tested in Indic Languages?](https://arxiv.org/abs/2610.22333)** (Garg ほか, 10/16) - モデルが「テストされている」と気づく評価認識を、英語以外で初めて本格的に調べた。インド系 5 言語と英語で、監視されている／安全テストだと伝える手がかりを変えて比較している。
- **[LEASH: Uncertainty-Aware Weak-to-Strong Escalation and Oversight for Computer-Use Agents](https://arxiv.org/abs/2610.22280)** (Wang ほか, 10/16) - 普段は小型の弱いエージェントが動き、必要なときだけ強いモデルに引き継ぐ、学習不要の枠組み。引き継ぎの判断に使う不確実性の信号を毎ステップ安価に得る点と、ブラックボックス API の強いモデルを監督する点が課題として挙げられている。
- **[MLExpert: Towards a Generalist Agentic Model for Autonomous Machine Learning Engineering](https://arxiv.org/abs/2610.22344)** (Du ほか, 10/16) - AI が AI の開発を自律的に進める流れ（再帰的自己改善）の一環として、機械学習エンジニアリングを担う汎用エージェントモデルを目指す研究。長い実験の中で個々の判断の良し悪しを切り分ける難しさが出発点。
- **[Terminal-RSI: Recursive Self-Improving Terminal Agents via Recursive Self-Rewrite and Policy-Refine](https://arxiv.org/abs/2610.22192)** (Yang ほか, 10/16) - 検証済みの軌跡の書き換えと方策の更新を交互に回し、ターミナルエージェントを改善する手法。部分的な進捗を完全なタスク解決につなげる報酬設計を含む。

## オープンソース・モデル

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** (公開当日) - V4.1-Flash の小幅アップデート。推論・コーディング・エージェント・視覚ベンチマークが改善し、実行時間と出力長も減った。README の表では DeepSWE v1.1 が 77.0 で、比較対象に並ぶ他社モデルを上回っている。これは DeepSeek 自身の報告値。
- **[LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B)** (公開5日) - 総 24B・アクティブ 2B の推論モデルで、端末上で動く高速・プライベートなエージェント向け。LFM2.5 ファミリー最大かつ最後のモデルとされる。README では Apple M5 Max で 184 tok/s、エージェント系の LiveClaw で Qwen3.6-35B-A3B を上回ると主張している。
- **[black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein)** (公開4日) - FLUX.3 Image Klein。10/15 に Diffusers 対応の紹介記事が出ている。README は確認していないため、詳細は割愛する。

## ベンチマーク・リーダーボード

LMArena は Text Overall の区画を抽出できなかった（取得失敗）。Artificial Analysis は取得していない。

## 所感

DeepSeek の更新は、モデルサイズを増やすより「速く・短く・安く同等以上」を狙う方向で、LFM2.5 の端末向けエージェントモデルとも同じ流れにある。論文ではエージェントの自己改善と、モデルが評価を見抜く問題（今回は多言語）が並んだ。能力が上がるほど、評価の信頼性が重要になっていく。
