---
title: "AI Watch（2026年11月17日）"
date: "2026-11-17T04:24"
category: "analysis"
summary: "OpenAI が研究者20万人への無償提供と外部機関による埋め込み評価を発表。LMArena は Gemini 4 Carbon が首位"
tags: ["llm", "openai", "science", "safety", "agents", "benchmark", "open-source"]
---

## 今日のハイライト

- **OpenAI が ChatGPT for Academic Researchers を拡大し、世界の研究者 20 万人にフロンティアモデルを無償で提供する（11/16）。** 同日には、1,800 人超の科学者の ChatGPT 利用を調べた報告も出ている。AI を科学研究の基盤にする路線が、前日の標準模型の記事から続いている。
- **OpenAI が「埋め込み評価（embedded assessments）」の第1フェーズを開始した（11/16）。** Apollo Research、METR、Transluce、Goodfire が、モデルのアラインメント、安全対策、監視システムを独立した立場で評価する。

## 企業動向

Anthropic と Google DeepMind は、直近のレポートで取り上げていない新着が日付ルール上なかった（最新は 11/9〜11/12）。

- **[Broadening access to AI for scientists](https://openai.com/index/expanding-chatgpt-for-academic-researchers)** (OpenAI, 11/16) - ChatGPT for Academic Researchers プログラムを拡大し、世界の研究者 20 万人にフロンティアモデルへの無償アクセスを提供する。
- **[Science at the Frontier: How scientists use ChatGPT](https://openai.com/index/science-at-the-frontier)** (OpenAI, 11/16) - 1,800 人超の科学者による ChatGPT の使い方を調べ、日常のワークフロー、自己申告の生産性、発見への期待についての結果をまとめている。
- **[Our first phase of embedded assessments](https://openai.com/index/our-first-phase-of-embedded-assessments)** (OpenAI, 11/16) - Apollo Research、METR、Transluce、Goodfire と組み、モデルのアラインメント、安全対策、監視システムを独立に評価する取り組みを始めた。
- **[More ways to move care forward with ChatGPT for Healthcare](https://openai.com/index/more-ways-to-move-care-forward-with-chatgpt-for-healthcare)** (OpenAI, 11/16) - ChatGPT for Healthcare に、computer-use エージェント、臨床回答の改善、医療ソフトウェアをまたいで動くプラグインを追加した。関連記事「Advancing computer-use agents for healthcare teams」も同日に公開されたが、RSS に説明文が無く内容は未確認。
- **[Strengthening the fight against online child sexual abuse with new tools and support](https://openai.com/index/strengthening-online-child-safety)** (OpenAI, 11/16) - オンライン上の児童性的搾取・虐待を防止、検知、対応するための新ツール、実践ガイダンス、パートナーシップを発表した。
- **[LVMH's Media Division announces strategic partnership with OpenAI](https://openai.com/index/lvmh-media-division-partnership)** (OpenAI, 11/16) - LVMH のメディア部門と提携し、AI によるジャーナリズム支援と、各媒体の ChatGPT 上での利用しやすさ向上を進める。
- **[The King's Trust and OpenAI launch £1m partnership](https://openai.com/index/the-kings-trust-and-openai)** (OpenAI, 11/16) - 英国の若者最大 25,000 人が仕事に使える AI スキルを身につけるための、100 万ポンドの提携。

## 注目論文

arxiv RSS は 11/16 発表分（既出 ID は除外済み）から選んだ。

- **[An Operationalization of Opaque Serial Depth](https://arxiv.org/abs/2611.17495)** (Sheffield ら, 11/16) - Chain-of-thought は AI の監督に使えるが、アーキテクチャの変化で監視しにくくなる恐れがある。この論文は、その度合いを測る指標として「不透明な直列深度」を定式化している。
- **[GDP.xlsx: Benchmarking Frontier Models on Professional Workbooks](https://arxiv.org/abs/2611.17766)** (Garre ら, 11/16) - 13 分野の専門家が書いた 70 件の実務依頼を、専門家の二値ルーブリックと元のワークブックまたは CSV とともに集めたベンチマーク。表計算という実務に近い場面でフロンティアモデルを測る。
- **[More Agents, More Samples, or More Thinking? Untangling Coordination, Ensembling, and Test-Time Compute in Multi-Agent LLMs](https://arxiv.org/abs/2611.17610)** (Sajjadi Mohammadabadi ら, 11/16) - マルチエージェントの評価は単発の貪欲生成と比べることが多く、協調の効果とサンプル数・計算量の効果が混ざる。この研究は両者を切り分けて比較する。
- **[Learn then Bet: Learning Interpretable Rules for Reliable Agent Intervention](https://arxiv.org/abs/2611.17662)** (Chen ら, 11/16) - 数百ステップ動くエージェントを止める判断に、ターン数上限やキーワードフィルタが使われている現状に対し、解釈可能なルールを学習して介入の信頼性を高める。
- **[AI Reviews Are Biased Towards the Appendix](https://arxiv.org/abs/2611.17811)** (Ghosh ら, 11/16) - 査読者が LLM の出力を参考にすることが増えているなか、LLM のレビューが論文の付録に偏る傾向を扱う。

## オープンソース・モデル

- **[n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca)** (公開2日) - 全体で 450 万パラメータの英語 TTS モデル（Apache-2.0）。女声・男声の 2 種があり、約 18 時間の合成音声でゼロから学習した。CPU 4 スレッドで実時間の約 70 倍の速度が出て、ONNX 版もあるためブラウザやスマホで動かせる。
- **[google/physical-engineerings-last-exam](https://huggingface.co/datasets/google/physical-engineerings-last-exam)** (dataset, 公開29日、補充枠) - 4 分野の有資格エンジニアが作った長期エンジニアリング課題のベンチマーク（Dev セット）。エージェントは図面、仕様書、表計算、ソルバー、CAD/BIM やシミュレーションを含むプロジェクト環境で作業し、計算書、モデル、工程表、技術報告書などの成果物を作る。
- **[laion/laion-audio-xl](https://huggingface.co/datasets/laion/laion-audio-xl)** (dataset, 公開11日) - LAION CLAP2 モデルの学習に使われた、30 秒以内の音声クリップ 3.66 億件にキャプションを付けたコーパス。このリポジトリには、そのうち約 436 万件の音声が入っている。

## ベンチマーク・リーダーボード

LMArena Text Overall（公開日 11/11、前回掲載の 11/9 から更新）の上位は、1位 Gemini 4 Carbon (High) 1538、2位 Gemini 4 Argon (High) 1529、3位 Claude Opus 5.5 (High) 1514、4位 Claude Fable 5.1 (Max) 1512、5位 Claude Opus 5 (Max) 1507 だった。Google が 1 位・2 位を占め、Claude Fable 5.2 はまだ上位 10 に入っていない。

Artificial Analysis の Intelligence Index は、Claude Fable 5.2 が 64.6、Gemini 4 Carbon が 60.0、Claude Opus 5.5 が 59.1、GPT-6 Astra が 56.9 で、前回から変動は無い。

## 所感

OpenAI は研究者への無償提供、利用実態の調査、前日の標準模型の記事と、科学分野への関与を連日打ち出している。同時に、外部機関による埋め込み評価も始めており、能力の訴求と独立した安全評価を並行して進める構図が見える。論文では、CoT の監視可能性の指標化、エージェントの停止ルール、マルチエージェントの効果の切り分けなど、エージェントを測る・制御する研究が引き続き多い。
