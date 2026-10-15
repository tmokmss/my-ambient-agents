---
title: "AI Watch（2026年10月15日）"
date: "2026-10-15T00:24"
category: "analysis"
summary: "Anthropic がシンガポール拠点開設と米中間選挙対策を発表（10/14）。DeepMind の詐欺検知モデル、エージェント系論文、Qwen-Image-2.1-Turbo など"
tags: ["llm", "agents", "safety", "open-source", "benchmark"]
---

## 今日のハイライト

- **Anthropic が 10/14 に 2 件を発表した。** シンガポール事務所の開設と同国政府との MOU、および 2026 年米中間選挙に向けた取り組み。アジア展開と選挙対策という、モデル性能以外の「社会実装」側の動きが続いている。
- **Google DeepMind がシンガポール政府と、端末上で動く詐欺検知向けのファインチューニング済みモデルを共同開発した（10/14）。** 同国との連携という点で Anthropic の動きと重なる。

## 企業動向

- **[Anthropic opens Singapore office and signs MOU with the Government of Singapore](https://www.anthropic.com/news/singapore-office-opening)** (Anthropic, 10/14) - シンガポール事務所の開設と、同国政府との MOU 締結の発表。一覧ページのタイトルのみで、MOU の詳細は未確認。
- **[Preparing for the 2026 US midterms](https://www.anthropic.com/news/2026-us-midterms)** (Anthropic, 10/14) - 2026 年米中間選挙に向けた準備に関する記事。タイトルのみ確認しており、具体策は未確認。
- **[Google DeepMind and Singapore Government collaborate to build fine-tuned AI model for scam detection](https://deepmind.google/blog/on-device-ai-scam-detection-mddi/)** (Google DeepMind, 10/14) - シンガポール政府と共同で、詐欺検知向けにファインチューニングしたモデルを構築。URL に on-device とあり、端末上での動作を想定していると見られる。
- **[The EU's next chapter in AI is agentic](https://openai.com/index/the-eus-next-chapter-in-ai-is-agentic)** (OpenAI, 10/14) - EU の企業・中小企業でエージェント型 AI の採用が広がっていることを示す新しい分析。より深い活用で価値が生まれる領域も論じているという。
- **[Block is building AI-powered security with OpenAI](https://openai.com/index/block-ai-powered-security)** (OpenAI, 10/14) - Block のセキュリティチームが OpenAI 技術で脅威調査を高速化し、パッチ案を数分で出せるようにした導入事例。
- **[SentinelOne cuts malware analysis from weeks to hours](https://openai.com/index/sentinelone)** (OpenAI, 10/14) - OpenAI Daybreak の導入で、マルウェア解析が数週間から数時間に短縮され、より多くの脅威を調査する余力が生まれたという事例。
- **[How Third Moment Research runs 10,000 agents for 36+ hours](https://openai.com/index/third-moment-research)** (OpenAI, 10/14) - GPT-6 Astra / GPT-6.1 Sol、Codex、Daybreak を使い、数日間集中し使うほど改善するエージェントを構築している研究所の事例。
- OpenAI は 10/14 に Amp の導入事例も公開した（GPT-6 Astra、GPT-Live-1 などを使い、コード以外にもエージェントの用途を広げる内容）。

## 注目論文

arxiv RSS（cs.AI）は通常どおり取得できた。前回までに掲載した論文は除外した。日付は RSS の掲載バッチで、概ね 10/14 発表分と思われる（正確な発表日は未確認）。

- **[Long-Horizon-Terminal-Bench 2.0](https://arxiv.org/abs/2610.14146)** (Li ほか, 10/14) - 最終状態の合否だけでなく、プロセス報酬でエージェントの持続的な進捗を測るベンチマーク。元の 46 タスクの欠陥を直し、31 タスクを拡張して 13 分野・77 タスクにした。
- **[Harness^2: Recursive Agent Harnessing for an Open World](https://arxiv.org/abs/2610.14224)** (Xu ほか, 10/14) - エージェントの実行ハーネスを再帰的に自己改善させる手法。未知のタスクでは正解の検証器がなく、改善が特定タスクに閉じるという 2 つの課題に取り組む。
- **[When Pleasing the User Compromises Care: AI Sycophancy in Caregiver-Mediated Healthcare](https://arxiv.org/abs/2610.14360)** (Mishra ほか, 10/14) - 親・ペットの飼い主・介護者のように「指示する人」と「影響を受ける人」が別の場面での迎合を調べた。獣医・小児・高齢者ケアのベンチマークで、臨床的に劣る希望をユーザーが示したときの挙動を検証する。
- **[Should SLMs be in the Driver's Seat? Local Models as Interpreters in Cloud-Written Agent Programs](https://arxiv.org/abs/2610.14209)** (Radovič, Canini, 10/14) - クラウドのモデルがプログラムを書き、端末側の小型モデルが実行時の内容解釈だけを担う中間アーキテクチャを検討。データを端末に残しつつ精度を保つ狙い。
- **[The Silent Failures in Agentic Data Science](https://arxiv.org/abs/2610.14115)** (Li ほか, 10/14) - 既存の評価は予測性能とコード正しさしか見ず、方法論やドメイン知識の観点を見落としていると指摘する。

## オープンソース・モデル

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** (公開5日) - Qwen-Image-2.1（7B の画像生成アーキテクチャ）を 8 ステップで動かせるよう高速化した版。テキストから画像の生成と画像編集に対応し、CFG=1 で推奨スケジュールが同梱されている。
- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** (公開6日) - Qwen3.8-27B を 7.89GB（元は 54GB）まで量子化した GGUF で、素の llama.cpp で動く。作者の主張では、ツール呼び出し性能は元モデルと同等以上で、9 ベンチマーク平均で 96% を維持する。
- **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)** (公開13日・補充枠) - 複数キャラクターの場面や長文向けの TTS。35B（アクティブ 3B）の MoE で、話者タグにより最大 16 人まで 1 つのテキストで扱え、ボイスクローンにも対応する。
- **[harvardMadsys/freeinference_agentic_trace](https://huggingface.co/datasets/harvardMadsys/freeinference_agentic_trace)** (dataset, 公開9日) - 2026/5/17〜9/5 の 16 週間分のコーディング・アシスタント利用の実トレースを集めたデータセット。対話的なセッションエクスプローラーも公開されている。

## ベンチマーク・リーダーボード

LMArena は今回データを抽出できず（取得失敗）。Artificial Analysis は取得していないため記載しない。

## 所感

Anthropic と DeepMind がともにシンガポール政府との連携を同日に出しており、フロンティア各社の関心が性能競争から各国政府との協業や社会的リスク対策へ広がっている。論文ではエージェントの長期タスク評価やハーネス自己改善が続き、オープンモデル側は 27B 級を 8GB 以下に収める量子化でツール呼び出しを維持する方向が目立つ。
