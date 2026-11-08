---
title: "AI Watch（2026年11月8日）"
date: "2026-11-08T01:15"
category: "analysis"
summary: "Tier 1 に新着なしの日曜。Mistral の Le Chonk と NVIDIA Cosmos 3、Nous の Arete-27B、ベンチマーク保守負債の論文など"
tags: ["llm", "open-source", "benchmark", "agents", "safety"]
---

## 今日のハイライト

- **Tier 1（Anthropic / OpenAI / Google DeepMind）に過去24時間の新着はなかった。** 直近は 11/6 の Anthropic「Teaching AI to build scientific models」と OpenAI の BioBasicsBench で、いずれも前回までのレポートで掲載済み。
- **Nous Research が Qwen3.8-27B を後追い学習した Arete-27B を公開した（公開1日）。** 政治的に敏感な話題での事実性を上げ、プロパガンダ的な回答を減らしたと主張している。

## 企業動向

Tier 1 に新着がなかったため、Tier 2 を参照した。

- **[Le Chonk brings the brains. Studio puts it to work.](https://mistral.ai/news/build-with-studio/)** (Mistral AI, 11/5) - Mistral Studio で Le Chonk（Mistral Large 4 系モデル）を業務に組み込む話と読めるが、RSS からはタイトルしか取れておらず、詳細は未確認。
- **[New NVIDIA Cosmos 3 Open Models for Interactive World Simulation](https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation)** (NVIDIA, 11/5) - インタラクティブなワールドシミュレーション向けのオープンモデル Cosmos 3 の紹介。本文は未取得で、タイトルの範囲の紹介にとどめる。
- **[ToyBlocks: A controlled world for robot learning and evaluation](https://huggingface.co/blog/allenai/toyblocks)** (Ai2, 11/6) - ロボット学習と評価のための統制された環境の公開。詳細は未確認。

## 注目論文

arxiv RSS は週末休止のため、list ページより 11/6 発表分から選出。

- **[Benchmarks as Software: Terminal-Bench and the Case for Continuous Benchmarks](https://arxiv.org/abs/2611.08417)** (Buchanan ら, 11/6) - モデルが進歩すると、検証器が正しい解を弾いたり評価基盤の変更でタスクの前提が崩れたりして、スコアと能力のずれが溜まる。これを「ベンチマーク保守負債」と呼び、継続的に妥当性を検証する運用を提案する。
- **[Scientist World: Grow a Research World for AI-Scientists](https://arxiv.org/abs/2611.08478)** (Lu, Konan, Zhuang Liu ら, 11/6) - 論文ごとにリサーチクエスチョンと提案手法のベースライン再現を自動抽出し、実行可能な環境にする。AI サイエンティストを著者の成果と比較評価でき、最初の1,000件の検証済み環境を公開する。
- **[A Behavioural Framework for Predicting and Understanding Loss of Control in Frontier AI Systems](https://arxiv.org/abs/2611.07953)** (Huang ら, 11/6) - 制御喪失リスクを「動機のずれ」「有害行為を可能にする能力」「監視回避」の3要因に分け、13の測定可能な側面で事前に評価する枠組み。
- **[When Bigger Becomes Brittle: Why Compression Hurts More as Language Models Scale](https://arxiv.org/abs/2611.07891)** (Gupta ら, 11/6) - 量子化・枝刈りの影響をスコアだけでなく、モデル内部の損傷と他の部分による補償に分けて調べる。文脈内検索を題材に、モデルが大きくなるほど圧縮がもろさを招く理由を探る。

## オープンソース・モデル

- **[NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B)** (公開1日) - Qwen3.8-27B を教師モデル Inkling のデータで SFT し、中国発モデルの検閲・プロパガンダ的な応答を修正したとする。README によると事実スコアは 2.32 から 2.98（5点満点）、プロパガンダを含む回答は 22% から 0.9% に低下し、汎用・エージェント系ベンチでの大きな劣化はなかったという。価値観の「選べるオープンモデル」を掲げる方向性が興味深い。
- **[NousResearch/Propaganda_Eval](https://huggingface.co/datasets/NousResearch/Propaganda_Eval)** (dataset, 公開1日) - 中国で検閲・公式見解が示されがちな話題の803プロンプトで、必須事実と、公式見解を自分の主張として採用していないかを別々に採点する評価セット。Arete の評価に使われている。
- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)** (公開13日、補充枠) - Qwen3.5-4B を個人が微調整した早期プレビューで、Three.js による対話的な 3D シーン生成に重点を置く。GGUF 版は別途 vision projector を使えば参照画像からの生成にも対応する。Qwen 公式のリリースではない。

## ベンチマーク・リーダーボード

- **LMArena Text Overall**（公開日 11/6）: 1位 Gemini 4 Carbon (High) 1539、2位 Gemini 4 Argon (High) 1530、3位 Claude Fable 5.1 (Max) 1513、4位 Claude Opus 5.5 (High) 1512、5位 Opus 5 (Max) 1506、6位 Meta の Muse Wonder (Max) 1505。前回掲載（10/28 公開分）と比べ上位の並びは近いが、Fable 5.1 が3位に入っている。

## 所感

Tier 1 の発表が一段落した週末で、話題は評価の保守（ベンチマーク保守負債、制御喪失の事前評価）と、オープンモデルの価値観・振る舞いの調整に寄っていた。Arete のように、ベースモデルの政治的な偏りを後から直す取り組みと、それを測る評価セットを一緒に出す動きは、今後も増えそうだ。
