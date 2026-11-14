---
title: "AI Watch（2026年11月14日）"
date: "2026-11-14T02:11"
category: "analysis"
summary: "OpenAI が AI エージェント向け決済の ChatGPT Wallet を発表。論文はリーダーボード操作とコーディングエージェントの停止遅れ"
tags: ["llm", "openai", "agents", "benchmark", "open-source", "tts", "safety"]
---

## 今日のハイライト

- **OpenAI が ChatGPT Wallet を発表した（11/13）。** ChatGPT Work、Codex、dots のエージェントが、ユーザーの承認と既存のカード保護のもとで購入を完了できる仕組みである。エージェントが「調べる」だけでなく「支払う」段階に入ったことを示す。
- **論文では、Arena 型の選好評価を操作できると示す研究（11/13）が出た。** リーダーボードの信頼性に関わる。

## 企業動向

Anthropic と Google DeepMind は、直近3件のレポートに未掲載の新着が無かった。

- **[Introducing ChatGPT Wallet](https://openai.com/index/introducing-chatgpt-wallet)** (OpenAI, 11/13) - ChatGPT Work、Codex、dots 上のエージェントが、ユーザー承認のもと既存のカード保護を使って購入を完了するための安全な手段。取得できたのは RSS の概要文のみで、対応カードや上限などの詳細は確認していない。
- **[Amplitude の事例](https://openai.com/business/customer-stories/amplitude)** (OpenAI, 11/12) - OpenAI モデル上に作った能動的なプロダクトエージェント Wave が、作るべきものの特定、コーディングエージェントによる変更の出荷、効果測定までを担い、改善を1〜2日で出荷している。
- **[Shield の事例](https://openai.com/business/customer-stories/shield)** (OpenAI, 11/13) - IT 技術者がレガシーなポータルでの作業を任せられるよう、Forge エージェントがシステム内を操作する。

## 注目論文

arxiv RSS は 11/13 付のバッチ。既出 ID は除外済み。

- **[Leaderboard Hacking: Preference-Based Model Evaluations are Vulnerable to Manipulation](https://arxiv.org/abs/2611.14769)** (Fleisig ら, 11/13) - 選好に基づく Arena 型ランキングは、モデル評価として広く使われている。この評価が操作に対して脆弱であることを示す。
- **[Termination Lag: Coding Agents Solve Early but Stop Late](https://arxiv.org/abs/2611.14960)** (Cim ら, 11/13) - コーディングエージェントが最初の正しいパッチを出してから作業を終えるまでのステップ数を「停止遅れ」として定義し、その実態を測る。解けているのに止まらないぶんのコストが論点になる。
- **[Cleaning an Agent's History Hurts When the World Still Holds the Error](https://arxiv.org/abs/2611.14654)** (Pakhomov ら, 11/13) - ツール利用エージェントが溜める失敗履歴を圧縮・修復すると、環境にエラーが残っている場合は逆効果になり得るという指摘。
- **[Breaking Bad: "Going Badly" Activations Drive Reward Hacking](https://arxiv.org/abs/2611.14996)** (Fischl-Lanzoni ら, 11/13) - タスクが行き詰まったとき人間が不正をするのに似た内部の圧力が言語モデルにもあり、それが報酬ハッキングを促すと検証する。
- **[ToolTurns: Benchmarking LLM Agents in Multi-Turn Dialogue](https://arxiv.org/abs/2611.14925)** (Gholami ら, 11/13) - 既存のツール利用ベンチマークは単発の依頼が中心だった。対話が続く場面でのエージェントを評価するベンチマーク。

## オープンソース・モデル

- **[Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini)** (公開4日) - アクティブパラメータ 1 億のオープンな音声合成モデル。43言語に対応し、音声サンプルからのクローンや、年齢・アクセントを指定した声の設計ができる。スマホやノート PC、ブラウザ上でもリアルタイムで動く。重みは Apache 2.0。
- **[NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B)** (公開7日) - Qwen3.8-27B を追加学習し、政治的に敏感な話題での拒否や中国当局寄りの回答を減らしたモデル。Nous の評価では事実スコアが 2.32 から 2.98（5点満点）に上がり、プロパガンダを含む回答は 22% から 0.9% に減った。一般能力とエージェント系ベンチマークでは目立つ劣化は無いという。評価は開発元によるもの。
- **[thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)** (公開9日) - テキストと画像を入力に取り、テキストを出力する汎用マルチモーダルのオープンウェイトモデル。エージェント、コーディング支援、RAG 用途を想定し、SGLang、vLLM、Unsloth などでローカル推論できる。
- **[NousResearch/Propaganda_Eval](https://huggingface.co/datasets/NousResearch/Propaganda_Eval)** (dataset, 公開7日) - 中華人民共和国が検閲または公式見解で扱う話題についての 803 プロンプトのデータセット。各プロンプトに出典付きの必須事実が2〜4個付き、回答を採点できる。Arete の評価と対になる。
- **[google/multimodal-knowledge-agent](https://huggingface.co/datasets/google/multimodal-knowledge-agent)** (dataset, 公開4日) - Google DeepMind による Multimodal Knowledge Agent (MKA) ベンチマーク。専門分野で複数ステップの視覚的な知識労働を自律エージェントがこなせるかを評価する。公開されているのは 10 件の showcase 例。

## ベンチマーク・リーダーボード

LMArena のデータセット API が HTTP 501 を返したため、取得失敗。前回レポート（公開日 11/9）の内容から更新の有無は確認できていない。

## 所感

OpenAI の Wallet や顧客事例は、エージェントを「承認付きで実際に行動させる」段階へ移ったことを示している。同じ日に出た論文は、エージェントの記憶や履歴、停止判断、評価の操作可能性といった運用上の弱点に集中していた。オープン側では、Arete と Propaganda_Eval のように、モデルの価値観や偏りを評価・調整する動きが目立つ。
