---
title: "AI Watch（2026年4月22日）"
date: "2026-04-21T22:48"
category: "analysis"
summary: "OpenAI、Codex Labs立ち上げ＆4M WAU達成。Qwen3.6-35B-A3B MoEがHF週間最多967k DLでトップトレンド入り。"
tags: ["llm", "agents", "enterprise", "open-source", "benchmark", "moe", "hallucination", "voice", "reasoning"]
---

## 今日のハイライト

**OpenAI、Codex Labs を立ち上げ Accenture・PwC・Infosys と連携しエンタープライズ展開を本格化**（4/21）。Codex の週間アクティブユーザー（WAU）が 400 万に達し、ソフトウェア開発ライフサイクル全体を AI でカバーする「開発インフラ」への転換を鮮明に打ち出した。

**Alibaba Qwen3.6-35B-A3B（35B 全パラメータ・3B アクティブの MoE マルチモーダルモデル）が Hugging Face 週間トップトレンドに**（~4/15）。GGUF 量子化版（unsloth）が 967k DL と今週最多ダウンロードを記録し、量子化コミュニティへの即時普及が際立つ。

---

## 企業動向

- **[Scaling Codex to enterprises worldwide](https://openai.com/index/scaling-codex-to-enterprises-worldwide)**（OpenAI, 4/21）— Codex Labs を正式立ち上げし、Accenture・PwC・Infosys ほか大手企業パートナーとともに、ソフトウェア開発ライフサイクル全体への Codex 展開を加速。WAU 400 万という数字は、コーディング AI が「試す」段階から「日常業務インフラ」へ移行したことを示している。大手コンサルが導入支援を正式ビジネスにした点も、エンタープライズ AI の産業化を象徴する。

Anthropic・Google DeepMind は過去 24 時間以内の新規ブログ記事なし（DeepMind ブログは取得失敗）。

---

## 注目論文

- **[KWBench: Measuring Unprompted Problem Recognition in Knowledge Work](https://arxiv.org/abs/2604.15760)**（複数著者）— 「明示的に頼まれていない問題を LLM が自発的に発見できるか」を測る初のベンチマーク。タスクを与えられた際に潜在する課題を能動的に認識する能力を定量化し、エージェントの実務適用における「自律的問題発見」という未評価軸に光を当てる。

- **[Experience Compression Spectrum: Unifying Memory, Skills, and Rules in LLM Agents](https://arxiv.org/abs/2604.15877)**（複数著者）— 長期・マルチセッション運用で蓄積するエージェント経験（メモリ・スキル・ルール）を「圧縮スペクトル」として統一的に整理するフレームワークを提案。エージェントメモリ管理の実装ガイドラインとして即時活用できる理論的基盤を与える。

- **[Bilevel Optimization of Agent Skills via Monte Carlo Tree Search](https://arxiv.org/abs/2604.15709)**（複数著者）— LLM エージェントのスキル（指示文・ツール・参照資料の集合）を双レベル最適化で自動改善する手法を提案。外側のループで MCTS によりスキル構成を探索し、内側でその実効性を評価する設計で、手動スキル設計の自動化を実現する。

- **[HalluSAE: Detecting Hallucinations in Large Language Models via Sparse Auto-Encoders](https://arxiv.org/abs/2604.16430)**（複数著者）— スパースオートエンコーダ（SAE）を内部表現に適用し、ハルシネーションを誘発する特定の「方向」を同定する手法を提案。ブラックボックス的に発火するハルシネーション現象を解釈可能な特徴次元に落とし込み、事前検出・制御の足がかりを提供する。

- **[EchoChain: A Full-Duplex Benchmark for State-Update Reasoning Under Interruptions](https://arxiv.org/abs/2604.16456)**（複数著者）— 音声アシスタントがユーザーの割り込みを受けた際にタスク状態を正確に更新・継続できるかを評価するフルデュプレックスベンチマーク。既存のターンベース評価が見逃していた「応答途中の割り込み処理」能力を定量化し、リアルタイム音声 AI の実用評価に新軸を加える。

---

## オープンソース・モデル

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — Alibaba Qwen チームによる MoE アーキテクチャの最新マルチモーダルモデル（35B 全パラメータ・3B アクティブ）。image-text-to-text 対応で 1130 likes・458k DL を獲得しトレンド首位に立つ。アクティブパラメータを絞りつつ大規模モデルと競争できる性能を実現する MoE 路線の集大成として注目される。

- **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — Unsloth AI による Qwen3.6-35B の GGUF 量子化版（610 likes・967k DL）。llama.cpp / Ollama / LM Studio で即座に動作するパッケージングで、MoE モデルを一般ユーザーが手軽に試せる形に仕上げており、今週 HF 最多ダウンロードを記録した。

- **[baidu/ERNIE-Image](https://huggingface.co/baidu/ERNIE-Image)** — Baidu が公開した高品質テキスト対画像生成モデル（511 likes）。fal-ai 経由で API 推論が可能なほか、高速生成に特化した Turbo 版（342 likes）も同時リリース。Baidu が生成 AI プロダクトを国際コミュニティへ積極展開する姿勢を示す。

- **[OBLITERATUS/gemma-4-E4B-it-OBLITERATED](https://huggingface.co/OBLITERATUS/gemma-4-E4B-it-OBLITERATED)** — Google Gemma 4（約 8B）のアンセンサード派生モデル（429 likes・64k DL）。OBLITERATED シリーズは Gemma 4 の高性能を活かしつつアライメント制約を除去しており、オープンモデル uncensored 派生に対する根強い需要を改めて示している。

---

## 所感

今日の最大のニュースは OpenAI による Codex Labs の本格始動だ。WAU 400 万という規模は、コーディング AI が「試験導入」から「業務インフラ」へ転換したことを示しており、Accenture・PwC・Infosys が導入支援ビジネスを立ち上げた事実はその産業化を加速する。一方 HuggingFace では Qwen3.6-35B-A3B の GGUF 版が 967k DL と週間トップに立ち、中国発オープンモデルが量とスピードでコミュニティを席巻し続けている。エンタープライズ向けのクローズドな商業化（Codex Labs）と、量子化コミュニティを通じたオープンモデルの民主化（Qwen3.6 GGUF）が真逆の方向へ勢いよく進む構図は、AI 普及の「二層化」をますます鮮明にしている。
