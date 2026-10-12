---
title: "AI Watch（2026年10月12日）"
date: "2026-10-12T01:15"
category: "analysis"
summary: "主要3社に新着なし。エージェント監視・ブロック設計を扱う論文と、Cloudflare Clef・Iris-3B・EMA Lightning などの新顔が話題"
tags: ["llm", "agents", "safety", "open-source", "benchmark"]
---

## 今日のハイライト

- **Anthropic・OpenAI・Google DeepMind の公式ブログに、前回レポート以降の新着はなかった。** 各社の最新は Anthropic が 10/8、OpenAI が 10/9（Sophos・Asana の導入事例、掲載済み）、DeepMind が 10/6（EmbeddingGemma 2、掲載済み）で、いずれも4日以上前か既出のため今回は省略する。
- **オープンモデル側では、Qwen3.8-27B をベースにした「型付き決定モデル」の流れに Cloudflare の Clef が加わった。** 一方で、VAE を使わず画素を直接生成する Iris-3B や、8.6M パラメータのトルコ語 TTS など、小型・特化型の新顔も目立つ。

## 注目論文

arxiv RSS は週末明けで 0 件だったため、list ページより 10/9 発表分から選出。前回までに掲載した論文は除外した。

- **[OnTrack: Real-Time Monitoring and Intervention in LLM Agent Trajectories via Streaming Structure-Aware Optimal Transport](https://arxiv.org/abs/2610.12375)** (Barazandeh ほか, 10/9) - LLM エージェントの行動軌跡を実行中に監視し、逸脱を検知して介入する手法。タイトルによると、ストリーミングで構造を考慮した最適輸送を使う。事後評価ではなく実行中の制御に踏み込む点が注目。
- **[Cited but Not Consulted: A Counterfactual Audit of Legal Chain-of-Thought Faithfulness](https://arxiv.org/abs/2610.12361)** (Sadhu ほか, 10/9) - 法務分野の思考連鎖（CoT）が、引用した根拠を本当に使っているかを反事実的に監査する研究。引用されていても判断に使われていない可能性を検証する枠組みで、規制の厳しい分野での CoT の信頼性に関わる。
- **[Ecology of AI Agents: Collaboration Creates a Population Threshold for Takeoff](https://arxiv.org/abs/2610.12436)** (Crawley, Tanaka, 10/9) - エージェント同士の協力が、個体数がある閾値を超えると急に立ち上がる「離陸」を生むことを生態学的な視点で論じる。マルチエージェントの規模則を考える材料になる。
- **[Searching for "Harmful Refusal": A Psychometric Audit of an AI Safety Benchmark](https://arxiv.org/abs/2610.12409)** (Stewart ほか, 10/9) - 心理測定学の手法で、AI 安全性ベンチマークが「有害な拒否」という概念を妥当に測れているかを監査する。ベンチマーク自体の妥当性を問う流れの一つ。
- **[BrickBench: Evaluating Agentic Brick Design](https://arxiv.org/abs/2610.12452)** (Kulits ほか, 10/9) - ブロック玩具の設計をエージェントにさせて評価するベンチマーク。空間的な制約を伴う設計タスクでの能力を測る。

## オープンソース・モデル

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** (公開11日・補充枠) - Qwen3.8-27B を後学習した 27B のマルチモーダルモデル。テキスト・JSON・画像・動画で表された状態と型付き質問のスキーマを受け取り、全選択肢の確率を1回の順伝播で返す。自由文生成や出力のパースが不要で、Jev / SystemOne 互換 API を持つ。小型版の Clef-Flash もある。
- **[speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b)** (公開6日) - VAE や潜在空間を使わず、ネットワーク自身が全画素を直接出力する 3B の画像生成モデル。プロンプトから約 1024px の画像を生成でき、同じ画素空間の事前分布を微調整して深度推定や画像の復元・高解像度化にも使える「汎用ビジョン学習器」と位置づけている。
- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** (公開10日・補充枠) - 計 8.6M パラメータ・約 34MB のトルコ語 TTS（Apache 2.0）。作者の評価では Freya-TR-Eval で WER 0.92% と比較対象中で最小、RTX 4090 で実時間の 440 倍、最初の音声まで 3.86ms とのことで、GPU/CPU でオフライン動作しストリーミングにも対応する。数値は作者による自己申告。
- **[FineEnvs/openai-math](https://huggingface.co/datasets/FineEnvs/openai-math)** (dataset, 公開3日) - OpenAI が 10/6 に公開した数学の未解決問題の成果を、Harbor 環境として移植した実験的データセット。元の研究公開自体が新しく独立した検証を経ていないため、スコア 1 の証明は鵜呑みにしないよう注意書きがある。

## ベンチマーク・リーダーボード

LMArena Text Overall（10/12 時点）は前日から順位変動なし。

| 順位 | モデル | Elo |
|---|---|---|
| 1 | gemini-4-argon-high | 1525 |
| 2 | claude-opus-5.5-high | 1507 |
| 3 | claude-opus-4-6-high | 1504 |
| 4 | claude-fable-5-high | 1504 |
| 5 | claude-opus-4-7-high / claude-fable-5.1-max | 1501 |

Artificial Analysis は今回取得しておらず、記載しない。

## 所感

公式ブログが静かな日は、論文とオープンモデルの流れがよく見える。論文では実行中のエージェント監視や、CoT・安全性ベンチマークの妥当性監査など「測定と制御の信頼性」を問うものが続いている。モデル側は、Qwen3.8 ベースの決定モデルが各社に広がる一方、画素直接生成や超小型 TTS のように、既存の定石から外れた設計の試みも出ている。
