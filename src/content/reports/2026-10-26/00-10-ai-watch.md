---
title: "AI Watch（2026年10月26日）"
date: "2026-10-26T00:10"
category: "analysis"
summary: "主要3社に過去24時間の新着なし。エージェント実行を評価する Nanbeige4.3-33B、FDE-Gym、メモリの有用性を問う論文など"
tags: ["llm", "agents", "open-source", "memory", "benchmark", "safety"]
---

## 今日のハイライト

- **Anthropic・OpenAI・Google DeepMind の公式ブログに、過去24時間の新着はない。** 直近は 10/23 の Anthropic と OpenAI の記事で、前回までのレポートで掲載済み。Tier 2 の Mistral（最新 10/21）と HF Blog（最新 10/23）も日付ルール上は目新しいものがない。
- **Nanbeige が、軽量エージェント蒸留の教師役となる 33B モデル「Nanbeige4.3-33B」を公開した（公開1日）。** README の自社比較では、同クラスの Qwen3.8-27B などを Terminal-Bench 2.1 や DeepSWE で上回る（自社報告）。

## 企業動向

- **[An alignment assessment of the UK AISI cybertesting incident](https://www.anthropic.com/news/alignment-assessment-ukaisi)** (Anthropic, 10/23) - 前回は旧タイトル「サイバーセキュリティ事案の整合性評価」として紹介した記事。一覧ページのタイトルが、英国 AISI のサイバーテスト事案を対象とするものに更新されている。本文は未取得のため、結論は未確認。
- 他は 10/21 以前の記事で、すでに掲載済みか日付ルールの対象外のため省略した。

## 注目論文

arxiv RSS は月曜 UTC 0 時台でまだ新バッチがなく空のため、list ページより 10/23（金）発表分から選出した。前回までに掲載済みの論文は除いている。

- **[Direct Pass@k Optimization for Thought Pruning: Balancing Quality and Diversity in Test-Time Reasoning](https://arxiv.org/abs/2610.31667)** (Salmani ほか, 10/23) - テスト時スケーリングで、途中まで生成した候補を剪定する方法を扱う。既存の手法は「品質重視」と「多様性重視」に分かれるが、これを両立させるべく Pass@k を直接最適化する枠組みを提案する。
- **[Muffin - A Shared Memory Buffer for Asynchronous AI Agents](https://arxiv.org/abs/2610.31355)** (Kuo ほか, 10/23) - 複数エージェントが同期的な発言順序ではなく、共有メモリバッファ経由で非同期に情報を交換するプロトコルを提案。マルチエージェントの失敗の主因を、エージェント間での重要情報の受け渡しの悪さと捉えている。
- **[Memory-Aware Reward Modeling: Learning Human Preferences for LLM Memory Use](https://arxiv.org/abs/2610.31272)** (Dong ほか, 10/23) - 87人の参加者が自分の ChatGPT への質問と個人メモリを使って付けた約1,000件の比較判断を収集。メモリを使った応答は常に好まれるわけではなく、強く嫌われる場合もあると報告している。自動評価器も人間との一致が限定的で、メモリ機能の評価を見直す材料になる。
- **[When LLMs Forget What They Believe: Characterizing State Integrity Collapse in Long-Horizon Dialogues](https://arxiv.org/abs/2610.31314)** (Zhu, Yuan, 10/23) - 指示を復唱できるのに、後のターンで守らなくなる「状態整合性の崩壊」を測るベンチマーク StateTrack-Bench を導入。7つのモデルで、制約の保持率は 62.4%〜100.0% とばらつき、劣化は記号的な制約で目立つ。
- **[Low-Bit N-Gram Embeddings for Language Models](https://arxiv.org/abs/2610.31646)** (Chung, Du, 10/23) - 近年のオープンモデルが使う n-gram 埋め込みテーブルは大きなメモリを食う（DeepSeek-V4.1-Flash は Engram メモリに 196B パラメータを割り当てているという）。これを低精度で保存して性能向上を保てるかを、量子化手法ごとに系統的に調べる。

## オープンソース・モデル

DeepSeek-V4.1-Flash-1017 と Recursive の Flint は 10/22 のレポートで掲載済みのため省略した。

- **[Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B)** (公開1日) - Nanbeige4.3 シリーズの教師役となる 33B のフラッグシップ。複雑なコーディングや業務代行（cowork）タスクに強く、今後の Nanbeige4.3-3B など小型モデルへの蒸留の土台になると説明されている。README の比較表では、Terminal-Bench 2.1 が 80.9（Qwen3.8-27B は 73.0）、DeepSWE が 65.5（同 42.5）。ただし評価は自社報告。
- **[MemTensor/MemT-1.0-Nano](https://huggingface.co/MemTensor/MemT-1.0-Nano)** (公開10日・補充枠) - 永続的に進化するメモリをモデル計算の内部に組み込む「メモリ基盤モデル」。動的なローカルメモリと学習可能なハイパーメモリを備え、推論時に元の文脈へ再アクセスせずに履歴を使える。状態のサイズは一定で、128K 履歴の完全な KV キャッシュに比べて保存量が約 66 分の 1 になるという（自社報告）。
- **[lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss)** (公開6日) - MOSS-Image-Base を 1024px で全パラメータ微調整した画像生成モデル。MOSS-Image-SFT と同じ構成で差し替えられる。8 ステップ・CFG 1 で動く蒸留 LoRA（DMD 系）も同梱し、ComfyUI にも対応する。
- **[DeepLethe/FDE-Gym](https://huggingface.co/datasets/DeepLethe/FDE-Gym)** (dataset, 公開19日・補充枠) - 顧客の稼働環境に入り込み、重要な点を見極め、本番で持ちこたえるシステムを出荷するという forward-deployed engineer の仕事を、エージェントができるかを測る20シナリオのベンチマーク。論文は arXiv:2610.22350。

## 所感

静かな月曜の朝でも、論文とモデルの両面で「エージェントのメモリ」が焦点になっている。共有バッファ、ユーザーが実際にメモリ付き応答を好むか、長い対話での制約の保持、メモリ内蔵モデルと、設計から評価までが同時に議論されている。Nanbeige や FDE-Gym のように、コーディングだけでなく現場での業務遂行を測る流れも続いている。
