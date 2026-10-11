---
title: "AI Watch（2026年10月11日）"
date: "2026-10-11T00:50"
category: "analysis"
summary: "主要3社に新着なし。エージェントの自己改善・ガードレール脆弱性を扱う論文と、Qwen3.8 系の軽量化・Decision 系モデルが話題"
tags: ["llm", "agents", "safety", "open-source", "benchmark"]
---

## 今日のハイライト

- **Anthropic・OpenAI・Google DeepMind の公式ブログに、前回レポート以降の新着はなかった。** 直近の主な動きは OpenAI の導入事例（10/9 の Sophos、Asana。前回掲載済み）と、DeepMind の EmbeddingGemma 2（10/6）です。週末のため更新が止まっています。
- **エージェントのガードレールと自己改善を検証する論文が目立った（10/9 発表）。** 「型付き意思決定モデル」をガードレールに使うと、許可方向の誤りが残る点が報告されました。

## 注目論文

arxiv RSS は週末休止のため、list ページより 10/9 発表分から選出。前回までに掲載した論文は除外した。

- **[One Word Opens the Gate: The Option-Channel Attack on Typed Decision Models as Agent Guardrails](https://arxiv.org/abs/2610.12292)** (Azizi ほか, 10/9) - テキストを読み、選択肢ごとの確率だけを返す「型付き決定モデル」をエージェントのガードレール（ツール呼び出しの許可・拒否判定）として評価した。オープンウェイト7モデルのプロンプトインジェクション等の判定精度は 36〜72%（偶然水準 50%）だった。誤りの偏りも測っており、ほぼ全て許可するモデルとほぼ全て拒否するモデルが存在する。許可方向の誤り（fail-open）は脆弱性になるため、ガードレール選定に直結する。
- **[Recursive Self-Improvement through Multi-Agent Self-Supervision](https://arxiv.org/abs/2610.12176)** (Lee ほか, 10/9) - 人間でも評価しにくい非検証タスクでの自己改善手法 MASS を提案。単一ベースモデルが複数エージェントのワークフローを提案・実行・自己評価する進化的探索と、自己生成した軌跡での教師ありファインチューニングを交互に行う。
- **[An Investigation of Model Coherence: Narrow Finetunes Contradict Themselves Under Resampling](https://arxiv.org/abs/2610.12129)** (Graham ほか, 10/9) - 曖昧さや無関心では説明できない 175 問で、再サンプリング時の矛盾を測る一貫性指標を提案。特異度が高く、矛盾が明白な場合だけ非一貫と判定する。それでも狭いファインチューニングのモデルは低スコアで、アイデンティティの混同や内省の失敗が見られた。ミスアラインメント研究のモデル生物の限界を示唆する。
- **[Can AI Agents Learn Their Way to the Top? Evaluating Heuristic Learning in a Long-Running Game Agent Competition](https://arxiv.org/abs/2610.12341)** (Yang ほか, 10/9) - モデルの重みを固定し、ゲーム経験から実行可能なポリシーを AI エージェントに書き換えさせる Adversarial Heuristic Learning を定式化した。12 種の対戦ゲームと 1,920 件の人間プログラムからなる AAArena で、複数のモデルとハーネスの組み合わせを評価している。

## オープンソース・モデル

- **[perplexity-ai/pplx-decider-v1.1-27b](https://huggingface.co/perplexity-ai/pplx-decider-v1.1-27b)** (公開5日) - Qwen3.8-27B をバックボーンにした「決定モデル」。Decision Index が前版 56.4 から 61.56 に上がり、比較対象の Jev（57.9）を上回ると model card に書かれている。主因は因果マスクの解除と学習データの追加。フルアテンション層を非因果で使うため、同梱の推論実装の利用が前提になる。上の option-channel 論文と同じ「型付き決定モデル」系の流れにある。
- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** (公開2日) - Qwen3.8-27B を 7.89GB（元は 54GB）の GGUF に圧縮し、ツール呼び出し性能を保つよう調整したモデル。作者の Underdog Bench ではツール呼び出し 88（フルモデル 84）、並列ツール呼び出し 42（同 35）で、9 ベンチマーク平均の性能保持率は 96% とされる。素の llama.cpp で動く。数値は作者自身の測定。
- **[harvardMadsys/freeinference_agentic_trace](https://huggingface.co/datasets/harvardMadsys/freeinference_agentic_trace)** (dataset, 公開5日) - FreeInference ゲートウェイ経由で、コーディング・アシスタント系エージェントが LLM を使った 16 週間（2026/5/17〜9/5）のトレース。267 アカウント、14 種のハーネス、12,002 セッションを含む。実運用のエージェント挙動を分析できる。
- **[LocalLLaMA/typed-decisions](https://huggingface.co/datasets/LocalLLaMA/typed-decisions)** (dataset, 公開24日・補充枠) - 1 つの非構造化状態に対して 5 種の型付き質問へ同時に答え、各回答を確率分布で返す評価ベンチマーク。Decision Index 系モデルの評価背景として押さえておきたい。

## ベンチマーク・リーダーボード

LMArena Text Overall（10/11 時点）は Gemini 4 Argon (high) が 1525 で首位。2位以下は Claude 勢が 1494〜1507 に並ぶ。

| 順位 | モデル | Elo |
|---|---|---|
| 1 | gemini-4-argon-high | 1525 |
| 2 | claude-opus-5.5-high | 1507 |
| 3 | claude-opus-4-6-high | 1504 |
| 4 | claude-fable-5-high | 1504 |
| 5 | claude-opus-4-7-high | 1501 |

Artificial Analysis の Intelligence Index は Claude Opus 5.5 (Max) が 57.6 で首位。Sonnet 5.5 (Max) が 56.0、Fable 5.1 (Max) が 53.4 で続く。GPT-6 Astra (Max) は 52.7、Gemini 4 Argon (High) は 52.6 だった。人間の選好票（LMArena）と指標ベース（Artificial Analysis）で首位が分かれている。

## 所感

主要3社の発信が一段落するなか、論文とオープンモデルでは「型付き決定モデル」と、エージェントの評価・安全性を測る話題が増えている。ガードレールに小型の決定モデルを置く設計は、許可方向の誤りが脆弱性になるため、精度だけでなく誤りの方向を見る必要がある。Qwen3.8-27B を土台にした派生（Decision 系、極端な量子化）が多く、実用面では 27B クラスを軽量に動かす競争が続いている。
