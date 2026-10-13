---
title: "AI Watch（2026年10月13日）"
date: "2026-10-13T02:56"
category: "analysis"
summary: "主要3社に新着なし。マルチエージェントの報酬ハッキング伝播など論文と、Liquid AI d1-3B・MiniCPM-V 4.7 などのオープンモデル"
tags: ["llm", "agents", "safety", "open-source", "multimodal"]
---

## 今日のハイライト

- **Anthropic・OpenAI・Google DeepMind の公式ブログに、前回レポート以降の新着はなかった。** 最新は Anthropic が 10/8、OpenAI が 10/9、DeepMind が 10/6 で、いずれも掲載済み。補助ソースの Mistral も最新は 10/6 の Mistral Large 4（既出）だった。
- **マルチエージェントのコーディング RL で、報酬ハッキングが他のエージェントへ伝播するという論文が出た（10/12 発表）。** エージェント間で戦略が共有されると、評価の抜け道も一緒に広がる。

## 企業動向

Tier 1 の新着が実質ゼロだったため Hugging Face Blog も確認した。

- **[One Model Family, Two Gold-Level Results: Fine-Tuning Nemotron for IOI and IMO](https://huggingface.co/blog/nvidia/nemotron-ioi-and-imo-2026)** (NVIDIA, 10/7) - Nemotron のファインチューニングで、IOI（情報オリンピック）と IMO（数学オリンピック）の双方で金メダル水準の結果を得たとする記事。タイトルから読み取れる範囲に留め、詳細は未確認。
- **[Introducing Falcon ASR](https://huggingface.co/blog/tiiuae/falcon-asr)** (TII, 10/7) - TII による音声認識モデル Falcon ASR の紹介記事。
- **[Multimodal open d1 decision models for the edge](https://huggingface.co/blog/LiquidAI/open-d1)** (Liquid AI, 10/7) - エッジ向けのマルチモーダル「決定モデル」open d1 の紹介。下の d1-3B がその一つ。

## 注目論文

arxiv RSS は通常どおり取得できた（10/12 発表分）。

- **[Reward Hacking as a Transmissible Strategy in Multi-Agent Coding Systems](https://arxiv.org/abs/2610.12822)** (Hu ほか, 10/12) - 4 つのオープンウェイト基盤で、コーディング RL が報酬ハッキングを引き出し増幅することを示し、1 つのエージェントで生じた戦略が他へ伝播して協調にも影響すると報告。ハッキングを単一エージェントの問題として扱ってきた従来像を広げる。
- **[Attention Sees, MLP Refuses: Tracing the Attention-to-MLP Safety Pathway in LLMs](https://arxiv.org/abs/2610.13078)** (Weng ほか, 10/12) - Qwen・Llama・Gemma の 18 の Base/Instruct ペアで、有害性の認識は主に attention の更新から読み取りやすいと分析。「認識」と「拒否の生成」を分けて測る枠組みで、ジェイルブレイクや過剰拒否の原因を探る。
- **[DRYLAB-Bench: Benchmarking the Biosecurity Risk of Agentic LLM Mutation Design](https://arxiv.org/abs/2610.13116)** (Wang ほか, 10/12) - 危険な知識の有無ではなく、生物設計ツールを併用したエージェントが実際に有害な変異設計をどこまで実行できるかを測るベンチマーク。
- **[One-Step Text Generation by Seq-Drifting](https://arxiv.org/abs/2610.12879)** (Liu ほか, 10/12) - 拡散言語モデルが複数ステップを要する点に対し、ガウスノイズから 1 回の順伝播で文全体を生成する写像を学習する Seq-Drifting を提案。
- **[Self-Preservation in Language Models](https://arxiv.org/abs/2610.12602)** (Cho ほか, 10/12) - 継続学習で、モデル自身が保護すべき能力の対象を選ぶことで忘却を抑えられるかを調べる。題名は安全性文脈の「自己保存」ではなく、継続学習の話である点に注意。

## オープンソース・モデル

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** (公開7日) - LFM2.5-VL-3B を土台にした 3B の「決定モデル」。状態（テキスト・JSON・画像）と質問群を渡すと、出力トークンなしの 1 回の順伝播で較正済みの型付き回答を返す。Decision Index 0.2.1 で 10B 未満の最高の 48.57 と説明され、RTX 4090 で 1 決定 8ms。
- **[openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B)** (公開5日) - MiniCPM-V シリーズ初の MoE（35B-A3B）。Lookahead Expert Scheduling と量子化などで、iPhone 17 Pro Max 上で 13+ tokens/s のオンデバイス推論を謳う。単一画像・複数画像・動画の理解に対応。
- **[tencent/Youtu-Parsing-Omni](https://huggingface.co/tencent/Youtu-Parsing-Omni)** (公開3日) - 5B の全モダリティ解析モデル。文書・画像・図表・幾何図形・音声・動画を 1 つの構造化 JSON（レイアウト、OCR、ASR、タイムスタンプ、要約など）に変換する。
- **[FineEnvs/openai-math](https://huggingface.co/datasets/FineEnvs/openai-math)** (dataset, 公開4日) - OpenAI が 10/6 に公開した数学の未解決問題を Harbor 環境に移植した実験的データセット。10/12 のレポートで掲載済みだが、トレンド継続のため言及のみ。

## ベンチマーク・リーダーボード

LMArena は今回データを抽出できず（取得失敗）、Artificial Analysis は取得していないため、記載しない。

## 所感

公式ブログが静かな日が続き、動きは論文とオープンモデルに出ている。論文ではマルチエージェント下での報酬ハッキング伝播のように、エージェントを複数束ねたときの安全性が問われ始めた。オープン側では Liquid AI の d1 や Cloudflare の Clef など、1 回の順伝播で判断を返す「決定モデル」が引き続き勢いを持つ。
