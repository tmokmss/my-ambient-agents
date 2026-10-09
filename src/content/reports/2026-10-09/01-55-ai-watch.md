---
title: "AI Watch（2026年10月9日）"
date: "2026-10-09T01:55"
category: "analysis"
summary: "Anthropic が Cyber Mission・2026 Usage Policy 更新などを発表。エージェントの自己改善や Skills の効果を測る論文、LiquidAI d1-3B など"
tags: ["llm", "anthropic", "agents", "safety", "open-source", "benchmark"]
---

## 今日のハイライト

- **Anthropic が 10/8 に3本の発表を出した。** 「Introducing the Anthropic Cyber Mission」「2026 Usage Policy update」「Building on our commitment to American scientific discovery」。10/6 の Cyber Verification Program 拡大に続くサイバー分野の動きで、利用ポリシーも更新された。本文は取得していないため、詳細は各記事を参照してほしい。
- **エージェントの「学習効率」と「Skills の実効性」を実測する論文が相次いだ（10/9 発表）。** 経験から自己改善する度合いを測る Agent Plasticity と、Skills が本当にタスク成績を上げるかを 87 タスクで調べた実証研究が出ている。

## 企業動向

- **[Introducing the Anthropic Cyber Mission](https://www.anthropic.com/news/anthropic-cyber-mission)** (Anthropic, 10/8) - サイバーセキュリティ分野への取り組みを「Cyber Mission」として打ち出した記事。一覧ページで確認できたのはタイトルのみ。
- **[2026 Usage Policy update](https://www.anthropic.com/news/2026-usage-policy-update)** (Anthropic, 10/8) - 利用ポリシー（Usage Policy）の 2026 年版への更新。
- **[Building on our commitment to American scientific discovery](https://www.anthropic.com/news/genesis-mission-commitment)** (Anthropic, 10/8) - スラッグに genesis-mission とあり、米国の科学的発見への貢献を深める取り組みの発表とみられる。
- **[Disrupting AI-enabled "false front" operations](https://openai.com/index/disrupting-ai-enabled-false-front-operations)** (OpenAI, 10/8) - RSS の説明によると、偽のジャーナリストやシンクタンクを装って地政学的なメッセージを広めていた、AI を使った2件の影響工作を阻止した。
- **[How Oracle turns days of work into minutes with ChatGPT and Codex](https://openai.com/index/oracle)** (OpenAI, 10/8) - Oracle が採用・エンジニアリング・運用の各部門で、ChatGPT Work と Codex を使って専門知識を素早く繰り返せるワークフローにしている事例。
- **[LegalOn halves Codex costs while maintaining development speed](https://openai.com/index/legalon-halves-codex-costs)** (OpenAI, 10/8) - LegalOn が、Astra・Sol・Luna というモデルをタスクごとに使い分け、Codex の推定日次コストを 65% 削減しつつ開発速度を維持した事例。
- **[Pollo AI turns creative ideas into campaigns with OpenAI](https://openai.com/index/pollo-ai)** (OpenAI, 10/8) - Pollo AI が GPT-5.6、GPT-6 Astra、GPT-Image-2.5 を使い、画像やシネマティックな動画広告の制作を支援している事例。

## 注目論文

arxiv RSS の 10/9 発表分（cs.AI / cs.CL）から選出。

- **[Agent Plasticity: Measuring Self-Improvement Through Experience](https://arxiv.org/abs/2610.08902)** (Singh ほか, 10/9) - 過去の経験を再利用可能な成果物にまとめて次のインスタンスへ引き継ぐ設定で、自己改善を測る。学習コストを考慮しつつ訓練時・保留環境の成績を追い、経験を能力向上に変える効率を「plasticity」と定義した。固定時点の能力ではなく「どれだけ効率よく学ぶか」を評価する枠組みが新しい。
- **[An Empirical Study of Agent Skills' Downstream Utility](https://arxiv.org/abs/2610.08875)** (Cheng ほか, 10/9) - 87 の SkillsBench タスクで、Skill 有りと無しの合格率差を「効用」と定義し、9 構成を比較した。3万7千超の Skills コーパスから候補を検索して分析している。関連しそうな Skill でも成績が上がるとは限らないという前提を実測で掘り下げる。
- **[Can AI Agents Make Open-Ended Scientific Discovery? Evidence from Station](https://arxiv.org/abs/2610.08927)** (Du ほか, 10/9) - 複数エージェントが科学コミュニティを模擬する Station に、Supervisor と定期的な Meta Reflection を加えた。ICLR の口頭発表3本について、結果を伏せて研究課題だけ渡し、元論文の知見をどれだけ再発見できるかを測る。
- **[On-Policy Distillation Teaches New Skills but Not New Knowledge](https://arxiv.org/abs/2610.09639)** (Tang ほか, 10/9) - 逆 KL の on-policy distillation は、見たことのない推論構造への組み合わせスキルは移せるが、事実知識はほとんど移せないと示した。順方向 KL に替えると知識の転移が戻る。蒸留レシピの選び方に直接効く知見。

## オープンソース・モデル

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** - LFM2.5-VL-3B をベースにした 3B の「決定モデル」。状態（テキスト・JSON・画像）と質問を渡すと、出力トークン無しの1回の forward で較正済みの型付き回答を返す。Decision Index 0.2.1 で 10B 未満最高の 48.57 と謳い、RTX 4090 で 1 判断 8 ms。ルーティング、モデレーション、LLM-as-a-judge、エージェントのガードレールなどが想定用途。
- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** - 10/6 に DeepMind が発表した EmbeddingGemma 2 の GGUF 版（Unsloth 提供、公開2日前）。テキスト（コード含む）・画像・動画・音声を 768 次元の共通空間に埋め込む 740M パラメータのモデルで、100 以上の言語に対応する。端末上の検索や RAG 向け。
- **[XiaomiMiMo/MiMo-V2.6-RL-oss](https://huggingface.co/datasets/XiaomiMiMo/MiMo-V2.6-RL-oss)** (dataset) - 前回掲載のエージェント RL 環境集。公開13日目だが、トレンドに残っているため参考として再掲する。
- **[FineEnvs/multi-harness-rl](https://huggingface.co/spaces/FineEnvs/multi-harness-rl)** (space) - AI エージェント横断で、複数ハーネスにまたがる RL の活動を可視化する Space。

## ベンチマーク・リーダーボード

LMArena Text Overall（10/9 時点）の上位:

| 順位 | モデル | rating |
| --- | --- | --- |
| 1 | gemini-4-argon-high (Google) | 1525 |
| 2 | claude-opus-5.5-high | 1507 |
| 3 | claude-opus-4-6-high | 1504 |
| 4 | claude-fable-5-high | 1504 |
| 5 | claude-opus-4-7-high | 1501 |

前回2位だった opus-4-6-high に代わり、opus-5.5-high が 1504 から 1507 で2位になった。首位は変わらず Gemini 4 Argon。

## 所感

エージェント関連の論文は、性能そのものより「どれだけ効率よく学ぶか」「Skills は本当に効くか」といった効果の測定に重心が移っている。企業側では Anthropic がサイバー分野と利用ポリシーを同日に動かし、OpenAI は影響工作の阻止と企業導入事例を並べており、安全運用と実務展開が同時に進んでいる。
