---
title: "AI Watch（2026年11月21日）"
date: "2026-11-21T03:05"
category: "analysis"
summary: "Anthropic が IPO クローズを発表、OpenAI は敵対的蒸留対策を公開。Thinking Machines の Apache-2.0 モデル Inkling 2 Mini など"
tags: ["llm", "agents", "open-source", "safety", "benchmark", "ipo"]
---

## 今日のハイライト

- **Anthropic が IPO のクローズを発表した（11/20）。** Class A 普通株 1,127,000,000 株を公募価格 $83.00 で売り出し、引受会社の追加購入オプション（147,000,000 株）も全量行使された。あわせて同時私募のクローズも発表している。11/18 の価格決定、11/10 のロードショー開始に続く手続きの完了である。
- **OpenAI が「敵対的蒸留」への対策を公開した（11/20）。** モデルの訓練、セーフガード、検知、執行を重ねた多層的なアプローチで、能力の抽出（capability extraction）を防ぐという内容。フロンティアモデルの能力をどう守るかが、安全性の議題として前面に出てきた。

## 企業動向

- **[Anthropic announces closing of initial public offering](https://www.anthropic.com/news/ipo-close)** (Anthropic, 11/20) - 1,127,000,000 株を $83.00 で売り出す IPO がクローズした。引受会社の追加購入オプションは全量行使され、同時私募のクローズも併せて発表された。
- **[Combatting adversarial distillation](https://openai.com/index/combatting-adversarial-distillation)** (OpenAI, 11/20) - 能力抽出を目的とした敵対的蒸留に対し、モデル訓練、セーフガード、検知、執行を組み合わせた層状の防御を取っていると説明する。
- **[Can AI help scientists identify promising drug candidates?](https://openai.com/index/introducing-medchembench)** (OpenAI, 11/20) - 新ベンチマーク MedChemBench を紹介。分子構造の解釈、実験的証拠に基づく推論、創薬初期の化合物選定をモデルがどの程度できるかを評価する。
- **[Hebbia sees improvements in financial research with GPT-6 Astra](https://openai.com/business/customer-stories/hebbia)** (OpenAI, 11/20) - Hebbia が金融リサーチで GPT-6 Astra を試した事例。公開前評価で、情報源のカバー範囲、引用の関連性、提示品質が向上したとされる。

Google DeepMind は 11/18 の Gemini 4 Neon・Genie 4 が前回までに掲載済みで、新着はなかった。

## 注目論文

arxiv cs.AI / cs.CL の 11/20 発表分から選出（既出 ID は除外済み）。

- **[Physics of Language Models: Part 4.2, Canon Layers at Scale where Synthetic Pretraining Resonates in Reality](https://arxiv.org/abs/2611.24963)** (Allen-Zhu, 11/20) - 標準的なベンチマークは、重要なアーキテクチャ差を捉えているのかを問う。1.3〜8B、1〜2T トークンで Transformer と3系統の線形モデルを64回スクラッチ事前学習して比較する大規模な検証。
- **[Pandora's Toolbox Or Why Agent Safety Cannot Be Verified](https://arxiv.org/abs/2611.25325)** (Franco, Gershenson, 11/20) - 固定された言語モデルと汎用計算装置を結合した現在のエージェントでは、安全性が決定不能になると主張する理論論文。エージェント安全性の完全な検証は原理的に難しいという視点を与える。
- **[How Feedback-Free Self-Evolution Reshapes Agent Skills: A Systematic Study](https://arxiv.org/abs/2611.25534)** (Guo ほか, 11/20) - 専門家が書く手順知識の文書であるエージェントスキルを、モデルがフィードバックなしで書き換えていく自己進化の影響を体系的に調べる。スキルの自動メンテナンスが実際に効くのかを検証している。
- **[Forget Freely, Grep Later: Lossless, Index-Free Memory for Long-Horizon LLM Agents](https://arxiv.org/abs/2611.25123)** (Yang, Shi, Zhao, 11/20) - 長期タスクのエージェントはコンテキスト窓を超え、要約やマスキングで情報を捨ててしまう。情報を失わず、索引も使わない記憶方式を提案する。
- **[BuggyMLE: Scaling Machine Learning Engineering Difficulty with Bug Injection](https://arxiv.org/abs/2611.25088)** (Wu ほか, 11/20) - AI が AI モデルを自律改善するには、ML エンジニアリングができるエージェントが必要になる。バグ注入によって ML エンジニアリング課題の難易度を段階的に上げる枠組み。

## オープンソース・モデル

- **[thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini)** (公開から4日) - Thinking Machines Lab が Apache 2.0 で公開した、テキストと画像を入力しテキストを出力する汎用マルチモーダルモデル。エージェント、ツール利用、コーディング支援、RAG などの用途を想定している。チェックポイントは NVFP4 と MXFP8 の混合精度で約 20GB、Tinker 経由の API も使える。
- **[RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B)** (公開から2日) - RadixArk 初のモデルで、Qwen3.8-27B をベースに SFT や蒸留なしの強化学習のみで訓練した。約1,200件の長期エージェントタスク（最大 1M トークン）を使い、144 基の H200 で 18 日間訓練した。Terminal Bench 4.1 の pass@1 が 5.6 から 12.0 に上がったと報告されている。アーキテクチャとチャットテンプレートはベースと共通で、Apache-2.0 の BF16 / FP8 / NVFP4 が公開されている。
- **[KORMo-VL/Ko-Online-Mind2Web](https://huggingface.co/datasets/KORMo-VL/Ko-Online-Mind2Web)**（データセット、公開から5日） - 韓国語ネイティブのアノテーターが手作業で作った、ライブ評価型の韓国語 Web エージェントベンチマーク。312 タスク・104 サイトで、約480アノテーター時間をかけた。同じ組織から GUI グラウンディング用の Ko-Screenspot（3,319 サンプル）、オフライン評価用の Ko-MultimodalMind2Web（549 タスク）も出ている。
- **[nvidia/PhysicalAI-Human-1M-100K](https://huggingface.co/datasets/nvidia/PhysicalAI-Human-1M-100K)**（データセット、公開から16日の補充枠） - 人間の経験を蒸留してモデルを大規模化する流れの物理 AI 版として、一人称視点の動画、密な言語アノテーション、頭と手の姿勢を組み合わせたセンサー付き人間データを狙う。

## ベンチマーク・リーダーボード

LMArena Text Overall（公開日 11/19、前回の 11/18 から更新）の上位は以下のとおり。

1. Gemini 4 Carbon (High) — 1539
2. Gemini 4 Argon (High) — 1528
3. Gemini 4 Neon (High) — 1524
4. Claude Opus 5.5 (High) — 1513
5. Claude Fable 5.1 (Max) — 1512

上位3枠は引き続き Gemini 4 系で、Neon は2位から3位に下がった。4位以下の顔ぶれは変わっていない。

## 所感

Anthropic の IPO クローズと OpenAI の蒸留対策が同じ日に出たことで、フロンティア企業が「資本」と「能力の防衛」の両面で次の段階に入ったことがうかがえる。オープンモデル側では、Thinking Machines の Apache 2.0 公開や、RL のみで Qwen3.8-27B を改善した DaisyRose のように、エージェント向けの長期タスクを意識した公開が続いている。論文でも、エージェントのスキルや記憶の自動管理と、その安全性の検証可能性が並んで取り上げられていた。
