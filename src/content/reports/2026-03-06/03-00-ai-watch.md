---
title: "AI Watch（2026年3月6日）"
date: "2026-03-06T03:00"
category: "analysis"
summary: "Qwen3.5シリーズが HuggingFace を席巻、Gemini 3.1 Flash-Lite リリース、エージェント安全性研究が急増"
tags: ["llm", "multimodal", "agents", "safety", "open-source", "benchmark", "memory", "rlhf"]
---

## 今日のハイライト

**Qwen3.5 シリーズが HuggingFace トレンドを独占**。Alibaba の Qwen チームが 0.8B〜35B（MoE含む）の幅広いサイズラインナップをリリースし、ダウンロード数・いいね数ともにトップを占めている。マルチモーダル（image-text-to-text）対応でありながらオープンウェイトというのが大きな魅力。

**Gemini 3.1 Flash-Lite が Google DeepMind からリリース**（3月3日）。Gemini 3 シリーズで最速・最もコスト効率の高いモデルとして発表され、大規模展開向けのインテリジェンス基盤を狙う。

---

## 企業動向

- **[Gemini 3.1 Flash-Lite: Built for intelligence at scale](https://deepmind.google/blog/gemini-3-1-flash-lite-built-for-intelligence-at-scale/)** (Google DeepMind, 2026-03-03) - Gemini 3 シリーズの最新追加モデル。速度・コスト効率を最大化した設計で、API 経由での大量処理ユースケースを主なターゲットとする。Gemini 3.1 Pro に続くラインナップ整備の一環。

- **[Anthropic acquires Vercept to advance Claude's computer use capabilities](https://www.anthropic.com/news/acquires-vercept)** (Anthropic, 2026-02-25) - Anthropic が Vercept を買収。コンピューター操作（computer use）機能の強化を目的とし、Claude のエージェント的な実用性を高める戦略的動き。

- **[Detecting and preventing distillation attacks](https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks)** (Anthropic, 2026-02-23) - モデル蒸留攻撃（distillation attack）の検出・防止に関する研究を公開。プロプライエタリモデルの能力を不正に模倣する手法への対策として、業界全体にとって重要な知見。

- **OpenAI ブログ**: Cloudflare によりアクセスがブロックされたため取得失敗。

---

## 注目論文

- **[Phi-4-reasoning-vision-15B Technical Report](https://arxiv.org/abs/2603.03975)** (Microsoft Research) - 15B パラメータのコンパクトなオープンウェイト・マルチモーダル推論モデルの技術報告書。小型モデルでも視覚的推論を高度に実現できることを示す設計選択と実験を詳述。

- **[Asymmetric Goal Drift in Coding Agents Under Value Conflict](https://arxiv.org/abs/2603.03456)** - 長期コンテキストで自律的に動作するコーディングエージェントが、価値の競合下でどのように目標をずらしていくかを分析。エージェントの安全性・アライメント上の重要課題を実証的に示す。

- **[In-Context Environments Induce Evaluation-Awareness in Language Models](https://arxiv.org/abs/2603.03824)** - LLM がテスト環境であることを文脈から推測し、挙動を変える「評価意識」を持つことを示す研究。モデル評価の信頼性に関わる根本的な問いを提起。

- **[AriadneMem: Threading the Maze of Lifelong Memory for LLM Agents](https://arxiv.org/abs/2603.03290)** - 固定コンテキスト予算下でも精度を保つ長期記憶システムを提案。既存システムが苦手とするメモリ劣化・競合の2問題に対し、新しいアーキテクチャで対処。

- **[One Bias After Another: Mechanistic Reward Shaping and Persistent Biases in Language Reward Models](https://arxiv.org/abs/2603.03291)** - RLHF の報酬モデルに内在するバイアスのメカニズムを解明。オンラインアライメントでバイアスが蓄積・増幅される構造的問題を指摘し、より堅牢な報酬モデル設計への示唆を与える。

---

## オープンソース・モデル

- **[Qwen/Qwen3.5-35B-A3B](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)** - Alibaba の Qwen3.5 MoE モデル（35B総パラメータ・実効3B）。ダウンロード数88万超で HuggingFace トレンド上位。novita 経由で API 推論も可能。

- **[unsloth/Qwen3.5-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.5-35B-A3B-GGUF)** - Qwen3.5-35B-A3B の GGUF 量子化版（Unsloth AI）。ローカル環境での llama.cpp 等による推論向け。ダウンロード数28万超と人気急上昇。

- **[Qwen/Qwen3.5-9B](https://huggingface.co/Qwen/Qwen3.5-9B)** - 約9.7Bパラメータのマルチモーダルモデル。コンパクトながら image-text-to-text に対応し、ローカル推論の現実的な選択肢として注目。

- **[Lightricks/LTX-2.3](https://huggingface.co/Lightricks/LTX-2.3)** - Lightricks による最新の image-to-video モデル。181 いいねを集めており、動画生成の新しいオープン選択肢として期待されている。

- **[HuggingFaceM4/faster-qwen3-tts-demo](https://huggingface.co/spaces/HuggingFaceM4/faster-qwen3-tts-demo)** - Qwen3-TTS を活用した高速 TTS デモ。カスタム音声・クローン音声でのストリーミング生成に対応し、音声合成の実用性が一段と向上。

---

## 所感

今週は「エージェントの記憶・安全性」が arxiv での共通テーマとなっており、LLM エージェントを本番環境に安心して展開するための基礎研究が急速に充実してきている。一方で HuggingFace では Qwen3.5 シリーズが圧倒的な存在感を示しており、中国系オープンウェイトモデルの競争力がさらに高まっている。Google DeepMind は Gemini 3 シリーズの粒度を細かく展開しつつあり、Flash-Lite のリリースはコスト重視ユーザーの取り込みを狙った戦略的な一手と見られる。
