---
title: "AI Watch（2026年11月24日）"
date: "2026-11-24T05:55"
category: "analysis"
summary: "OpenAI と Cisco がパッチ展開中の Linux を守るオープンソース実行基盤 Shirudo を発表。DeepMind はエージェントと形式検証で量子アルゴリズムを改善。ベンチマーク自体の欠陥を測る論文も"
tags: ["openai", "deepmind", "security", "open-source", "benchmark", "agents", "llm"]
---

## 今日のハイライト

- **OpenAI と Cisco が Linux 向けオープンソース・ランタイム「Shirudo」を発表（11/23）。** 稼働中のシステムをパッチ適用の展開期間中も保護するためのもの。
- **Google DeepMind が、エージェントチームと形式検証で量子アルゴリズムを改善する取り組みを公開（11/23）。** 対象は核融合と化学向けのアルゴリズム。

## 企業動向

- **[OpenAI and Cisco introduce Shirudo](https://openai.com/index/introducing-shirudo)** (OpenAI, 11/23) - RSS の説明によれば、Linux 向けのオープンソース・ランタイムで、チームがパッチを展開している間も稼働中のシステムを保護できるようにする。詳細な仕組みは本文を取得できないため未確認。
- **[Finding faster quantum algorithms with agents and formal verification](https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/)** (Google DeepMind, 11/23) - エージェントチームと形式検証を使い、核融合と化学向けの量子アルゴリズムを改善したという内容。11/10 の AlphaProof Code に続く、エージェント × 形式検証の流れにある。
- **[Richpanel helps companies automate 50% of support in 30 days](https://openai.com/business/customer-stories/richpanel-ai-customer-support)** (OpenAI, 11/23) - Richpanel が GPT-6 Astra と GPT-6.1 Sol でサポートエージェントにツールと手順を持たせ、会話には GPT-6 Luna を使う顧客事例。モデルの使い分けが分かる。

Anthropic（最新は 11/20 の IPO クローズで掲載済み）と中国ラボに新着はなかった。

## 注目論文

arxiv RSS は当日分が 0 件だったため、list ページより 11/23 発表分から選出。

- **[Benchmarks' Last Exam](https://arxiv.org/abs/2611.27622)** (Zhu, Cat, 11/23) - 8つのフロンティアベンチマークの 749 タスクと 767 件の公開モデル評価を横断し、プロンプト・環境・採点器が「成功」の定義で食い違う頻度と、欠陥がスコアをどちらに動かすかを測る。リーダーボードの数字そのものの信頼性を問う。
- **[Speculative Decoding Is Less Speculative Than You Think](https://arxiv.org/abs/2611.27891)** (Zeng, Zanette, 11/23) - サンプリングの乱数はドラフト前に確定できる点に着目し、ドラフトと検証で乱数を同期する DICE（Draw-Informed Candidate Selection）を提案する。推測デコードの受理率向上を狙う。
- **[Silent Arbitration: How Large Language Models Resolve Co-Authoritative Conflicting Instructions](https://arxiv.org/abs/2611.27444)** (Lee ほか, 11/23) - 1つのプロンプトで対立する2つのペルソナを同格に与えた場合、5つの LLM は直接尋ねると72%で矛盾を認めるが、実タスクの応答で明示するのは22%に留まる。矛盾を黙って裁定してしまう挙動を示す。
- **[The Assistant Persona Differs Across Languages in Activation Space](https://arxiv.org/abs/2611.27504)** (Yoo ほか, 11/23) - Qwen3-32B で31言語の assistant persona 方向を抽出すると、英語の軸とのコサイン類似度が 0.378〜0.911 と大きくばらつく。英語で抽出した方向が他言語に一般化するという前提と、低資源言語での安全性低下の機構に迫る。
- **[MemOnce: A Scalable Memory Architecture for Large Language Models](https://arxiv.org/abs/2611.27973)** (Nie ほか, 11/23) - Transformer の KV キャッシュは線形に増え、線形時間アーキテクチャは細部を保持しにくい。その中間として、スケーラブルな記憶状態を学習する基盤アーキテクチャを提案する。

## オープンソース・モデル

- **[inclusionAI/Ling-3.2-air](https://huggingface.co/inclusionAI/Ling-3.2-air)** (公開から1日) - 総パラメータ 124B・活性 5.5B のハイブリッド線形 MoE（KDA と Gated MLA を 5:1）。ワークフロー自動化と専門文書の推論が前世代から伸び、AutomationBench-AA が 15.7% → 61%、Terminal-Bench 4.0 が 0% → 27% と記載されている。Artificial Analysis Intelligence Index v5.0.1 は 23。
- **[alphaXiv/AgentAlphaXiv](https://huggingface.co/datasets/alphaXiv/AgentAlphaXiv)**（データセット、公開から6日） - 31のラボが運用する自律研究エージェントが、共有プレプリントサーバー上で12週間に書き・議論したものの記録。916本の研究（論文・コード・エージェントのトレース）と、235のエージェント作成ルームでの 9,052 件のチャットを含む。

## ベンチマーク・リーダーボード

LMArena Text Overall（公開日 11/22、前回の 11/19 から更新）。

| 順位 | モデル | Rating |
|---|---|---|
| 1 | Gemini 4 Carbon (High) | 1539 |
| 2 | Gemini 4 Argon (High) | 1528 |
| 3 | Gemini 4 Neon (High) | 1523 |
| 4 | Claude Opus 5.5 (High) | 1514 |
| 5 | Claude Fable 5.1 (Max) | 1512 |

上位の構図は変わらず、Gemini 4 系が1〜3位を占める。

## 所感

新モデルの発表が少ない日で、セキュリティ運用（Shirudo）と、形式検証を組み合わせたエージェント活用（DeepMind）が目立った。論文でも、ベンチマーク自体の欠陥を測る「Benchmarks' Last Exam」や、矛盾した指示の黙った裁定など、評価と挙動の信頼性を問うものが並んだ。
