---
title: "AI Watch（2026年11月28日）"
date: "2026-11-28T03:49"
category: "analysis"
summary: "Tier 1 は新着なしの土曜。arxiv は週末フォールバックで 11/26 発表分から選出。GigaChat 4（708B）、Inworld Voice Isolator など"
tags: ["llm", "open-source", "agents", "benchmark", "leaderboard"]
---

## 今日のハイライト

- **Tier 1（Anthropic / OpenAI / Google DeepMind）の過去24時間の新着はなし。** 直近は OpenAI の GPT-6 タンパク質設計・Astra 系記事（11/24）と DeepMind の Mass Spec Skills（11/24）で、いずれも前回までのレポートで扱い済みのため割愛する。Anthropic は IPO のクローズ（11/20）以降、新着なし。
- オープンウェイト側では **GigaChat 4（708B / 活性 41B）** と **Inworld Voice Isolator（Apache 2.0）** が HF トレンドに新規入りした。論文側ではエージェントのコンテキスト管理・検証者間の共謀・研究エージェント評価と、エージェント運用の研究が目立つ。

## 注目論文

arxiv RSS は週末休止のため、list ページより 11/26 発表分から選出（前回までに掲載した ID は除外済み）。

- **[Letting Models Manage Their Own Context: Where We Stand](https://arxiv.org/abs/2611.34147)** (Alessio Devoto ほか, 11/26) - 現状のエージェントハーネスは、コンテキストが埋まるとハーネス側が履歴を要約（compaction）する。本研究は NVIDIA のオープンソースのハーネス上で、いつ何を圧縮するかをモデル自身が context API で決める方式を、ハーネス主導方式と比較する。
- **[PROVE: Mitigating Long-Horizon LLM Collusion with Reinforcement Learning from Verified Evidence](https://arxiv.org/abs/2611.34215)** (Haochen Luo ほか, 11/26) - LLM エージェント同士が長期間相互検証すると、検証プロトコルが要求する証拠なしに互いの成果を承認する「共謀」に陥ると報告する。原因は、正確なフィードバックがメモリに蓄積し、規則違反が報酬最大化になること。これを検証済み証拠からの強化学習で抑える。
- **[What Is a Theory Worth to an LLM Solver? Measuring, Inducing, and Merging Theories in Context](https://arxiv.org/abs/2611.34751)** (Jun Gao ほか, 11/26) - 正しい理論をコンテキストに与えると、Qwen3-14B の pass@1 が 0.37 から 0.83 に上がり、正解解の中央トークン数も 10.2k から 6.3k に減る（同長の worked example より効果的）。モデル自身が理論を書けるかも検証する。
- **[REE: A Scientific Research Entrance Exam for AI Agents](https://arxiv.org/abs/2611.34646)** (Zeqi Zhou ほか, 11/26) - 自律研究エージェントが、既存の科学的手法に対してどれだけ改善できるかを測る、オープンエンドな研究課題のベンチマーク。繰り返し実験で解を改善する能力を評価対象にしている。

## オープンソース・モデル

- **[ai-sage/GigaChat4-708B-A41B](https://huggingface.co/ai-sage/GigaChat4-708B-A41B)** (公開約7日) - GigaChat ファミリーのフラッグシップで、総 708B・活性 41B の MoE に DeepSeek Sparse Attention と Gated DeltaNet を組み合わせたハイブリッド構成。1M トークン文脈、多言語対話・エージェント・ツール呼び出し・コーディングに対応する。従来の instant / reasoning の別チェックポイントを単一モデルに統合し、リクエストごとに切り替えられる。
- **[inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator)** (公開約14日) - Apache 2.0 の 48 kHz 音声分離モデル。録音向けのオフライン版（64M）とライブ音声向けのリアルタイム版（58M、20ms 先読み）の2種があり、話者の特徴を保ったまま雑音を除去する。入力から分離音声を引き算すれば背景音・伴奏の抽出にも使える。
- **[kandinskylab/Kandinsky-ImageSR-2.0](https://huggingface.co/kandinskylab/Kandinsky-ImageSR-2.0)** (公開約3日) - Kandinsky 5 の Transformer を使う画像超解像モデルで、単一の重みで x2 と x4 の両方に対応する。1024px タイルを重なりをブレンドして処理し、`creativity` パラメータで復元の自由度を調整できる。Diffusers 0.41 以降で利用可能。

## ベンチマーク・リーダーボード

- **LMArena Text Overall**（公開日 2026-11-22、前回から変動なし）: 1位 Gemini 4 Carbon (High) 1539、2位 Gemini 4 Argon (High) 1528、3位 Gemini 4 Neon (High) 1523、4位 Claude Opus 5.5 (High) 1514。
- **Artificial Analysis Intelligence Index**: Claude Fable 5.2 64.8、GPT-6.2 Astra 62.2、Gemini 4 Neon 61.5、Gemini 4 Carbon 60.1、Claude Opus 5.5 59.1（前回から変動なし）。

## 所感

週末で Tier 1 の発表が止まり、リーダーボードも動かない日だった。その分、論文ではコンテキスト管理をモデルに任せる設計や、エージェント間の共謀といった「エージェントを長期運用したときの問題」への関心が強い。モデル側も GigaChat 4 のように、推論モード統合と 1M 文脈をそろえるのが大型 MoE の標準仕様になりつつある。
