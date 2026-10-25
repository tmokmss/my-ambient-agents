---
title: "AI Watch（2026年10月25日）"
date: "2026-10-25T00:10"
category: "analysis"
summary: "Tier 1 は新着なしの日曜。HF から DNA 言語モデル Carbon-X、記憶書き込み専用の Hy-Memory、エージェントの実行安全性を扱う論文など"
tags: ["llm", "agents", "safety", "open-source", "biology", "memory"]
---

## 今日のハイライト

- **Hugging Face Bio が DNA とテキストを同時に扱う 14.8B モデル「Carbon-X」を公開した（公開3日）。** 生の DNA 配列を普通のチャットに入力すると、変異が良性か病原性かの予測や、遺伝子の働きを制御する領域の特定などに英語で答える。DNA 用の別エンコーダを持たない単一デコーダ構成。
- **Anthropic・OpenAI・Google DeepMind の公式ブログに、過去24時間の新着はない。** 直近の記事は 10/23 までで、前回のレポートで掲載済み。Tier 2 のソースも確認したが、日付ルール上の新着は HF Blog の数件のみ。

## 企業動向

Tier 1 に新着がないため、Hugging Face Blog（Tier 2）を確認した。いずれも一覧のタイトルのみの確認で、本文は未取得。

- **[LitPivot: Developing research ideas through dynamic contextualization within the literature landscape](https://huggingface.co/blog/allenai/litpivot)** (Ai2, 10/23) - 研究アイデアを、関連文献の全体像に照らして動的に位置づけながら発展させる手法と読める。詳細は未確認。
- **[Granite Speech 5.0: Transcribe, Translate, and Attribute more Accurately and Faster](https://huggingface.co/blog/ibm-granite/granite-speech-5)** (IBM, 10/21) - IBM Granite の音声モデルの新版。タイトルによると、書き起こし・翻訳・話者などの帰属がより正確で高速になった。
- **[NVIDIA Kumo Relational Outperforms Supervised Machine Learning on Relational Data, No Training Required](https://huggingface.co/blog/nvidia/kumo-relational)** (NVIDIA, 10/21) - タイトルによると、学習なしでリレーショナルデータの教師あり機械学習を上回るという。条件や指標は未確認。

## 注目論文

arxiv RSS は週末休止のため、list ページより 10/23（金）発表分から選出した。前回までのレポートで掲載済みの論文は除いている。

- **[Certified Execution Harness for Agentic AI: Safe and Least-Intrusive Petri-Net Supervisory Control Between Reasoning and Action](https://arxiv.org/abs/2610.31376)** (Gu, Zhu, 10/23) - プロンプトインジェクション下でのツール実行を、LLM とツールの間のペトリネットによる監督制御として形式化した。権限・承認・予算を「マーク」で表し、前提が満たされない注入リクエストは文面に関係なく拒否される。
- **[EpiSEM-Bench: Evaluating Safety and Evidence Recovery in LLM Agents under Missing Evidence](https://arxiv.org/abs/2610.31650)** (Zhang ほか, 10/23) - ツールの応答から安全に関わる事実が抜けると、依頼が無害でも禁止された操作を実行してしまう問題を測る。6分野・300組の安全/危険タスク対で、事実を意図的に隠して評価する。
- **[Adaptive Skill Granularity for Coding Agents: Runtime Routing and Macro-to-Micro Recovery](https://arxiv.org/abs/2610.31461)** (Zhang ほか, 10/23) - コーディングエージェントが、プリミティブなツール呼び出し・マクロスキル・その併用のどれで解くかを、実行中の状態と失敗に応じて選ぶ枠組み。スキルの粒度を行動抽象の方策として扱う点が新しい。
- **[RIDAR: Safeguarding Research Integrity in Autonomous Research Agents via Automated Detection and Runtime Intervention](https://arxiv.org/abs/2610.31372)** (Siow ほか, 10/23) - 自律研究エージェントの研究不正的な振る舞いを 14 類型に分類し、軌跡から検出する手法を提示。専門家が注釈した 60 軌跡のベンチマークで F1 85.2% を報告している（著者報告）。実行時の介入も扱う。

## オープンソース・モデル

- **[HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X)** (公開3日) - DNA 配列と自然言語を同じトークン列で扱う 14.8B のデコーダ専用モデル。DNA は 6-mer 単位のトークンで表す。変異の効果予測、制御領域の特定、生物群の分類、次の塩基の予測ができ、エージェントのツールとしての利用も想定している。Space の [Carbon-X-Release](https://huggingface.co/spaces/HuggingFaceBio/Carbon-X-Release) で試せる。
- **[tencent/Hy-Memory-30B-A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B)** (公開9日・補充枠) - Tencent Hunyuan の、長期記憶の「書き込み」専用モデル（アクティブ約 3B）。Mem0 や MemOS などの外部メモリ枠組みの中の汎用 LLM を置き換え、何を残し、どう更新するかを決める。オンポリシー蒸留と強化学習の2段階で学習し、未学習の EverMemOS にも転用できるという。
- **[nvidia/Nemotron-Personas-UK](https://huggingface.co/datasets/nvidia/Nemotron-Personas-UK)** (dataset, 公開5日) - 英国の実際の人口・地理などの分布に基づく合成ペルソナのオープンデータセット（CC BY 4.0）。Compound AI の手法で作られている。
- **[scenario-labs/3d-collection](https://huggingface.co/datasets/scenario-labs/3d-collection)** (dataset, 公開5日) - AI 生成の 3D 例 1,342 件を選び、出力ファイル 1,500 件を収録したコレクション。プレビューと入力ソースを含めて約 39GB。Tencent Hunyuan 系モデルで作った 393 件は別に公開されている。

## 所感

主要3社が静かな日曜でも、エージェントの実行安全性（ペトリネットによる制御、欠落証拠下の誤動作）を扱う論文が目立つ。安全性が「モデルの拒否」から「実行基盤の設計」へ広がっている。一方でオープン側は、DNA 向けの Carbon-X や記憶書き込み専用の Hy-Memory のように、特定の機能に絞ったモデルが増えている。
