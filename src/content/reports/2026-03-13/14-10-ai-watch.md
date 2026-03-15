---
title: "AI Watch（2026年3月13日）"
date: "2026-03-13T14:10"
category: "analysis"
summary: "Gemini 3.1 Flash-Liteが高速・低コストで登場、arxivではエージェントのサイバー攻撃能力評価と蒸留効率化研究が揃う"
tags: ["llm", "agents", "distillation", "inference", "benchmark", "safety", "open-source", "multimodal"]
---

## 今日のハイライト

**Google DeepMind が Gemini 3.1 Flash-Lite をリリース**（3/3）。Gemini 2.5 Flash 比で全体的な回答生成速度 **45% 向上**、最初のトークンまでの待ち時間は **2.5倍短縮**を達成。価格は入力 $0.25/1M・出力 $1.50/1M トークンと競合を大幅に下回り、1M トークンコンテキストウィンドウと段階的な思考レベル制御を備える。6つのベンチマークで GPT-5 mini・Claude 4.5 Haiku を上回り、コンテンツモデレーション・翻訳・大量バッチ処理向けの最速 Gemini として位置づけられている。

**AI エージェントのサイバー攻撃能力を定量評価した論文が登場**（3/13 arxiv）。32ステップの企業ネットワーク攻撃と7段階のキャプチャーザフラッグという2つの実環境に近いシナリオで、フロンティアモデルの自律的なサイバー攻撃能力を測定。エージェント能力の進歩に対して安全性の評価基盤をどう整備するかという問いが一層喫緊のものになっていることを示す。

---

## 企業動向

- **[Gemini 3.1 Flash-Lite: Built for intelligence at scale](https://deepmind.google/discover/blog/gemini-3-1-flash-lite-built-for-intelligence-at-scale/)** (Google DeepMind, 3/3) - Gemini 3 シリーズの中で最速・最安モデルとして登場。テキスト・画像・音声・動画の4モダリティに対応し、最大 64,000 トークンの出力と最小〜高の4段階思考レベルを選択可能。Gemini API と Vertex AI でプレビュー提供中。エッジ・リアルタイム系ユースケースでのコスト圧縮に向けた競争が激化している。

- **[From games to biology and beyond: 10 years of AlphaGo's impact](https://deepmind.google/discover/blog/10-years-of-alphago/)** (Google DeepMind, 3/2026) - 2016年3月の李世乭戦から10年。VP of Science の Pushmeet Kohli と Distinguished Research Scientist の Thore Graepel が、AlphaGo が AI 研究に与えた転換点としての意義を振り返る。強化学習・深層学習の組み合わせが AlphaFold などの科学応用へとつながる系譜を整理した節目の記事。

---

## 注目論文

- **[DIVE: Scaling Diversity in Agentic Task Synthesis for Generalizable Tool Use](https://arxiv.org/abs/2603.11076)**（Yao ら, cs.AI, 3/13）- ツール使用 LLM のポストトレーニング向けに、タスク・ツールセット双方のシフトに対して汎化できるエージェントデータ合成手法を提案。多様性が鍵であることを示しつつ、多様性をスケールさせるための体系的アプローチを提供。ツール利用エージェントの実運用強化に直結する研究。

- **[Measuring AI Agents' Progress on Multi-Step Cyber Attack Scenarios](https://arxiv.org/abs/2603.11214)**（Mouton ら, cs.AI, 3/13）- フロンティア AI モデルを目的特化の2つのサイバーレンジ（32ステップ企業ネットワーク攻撃・7ステップ CTF）で自律評価。現時点での攻撃能力の限界と進捗を定量化し、攻撃能力評価の標準化に向けた基礎研究として位置づけられる。安全評価基盤の整備を促す実証的データポイント。

- **[PACED: Distillation at the Frontier of Student Competence](https://arxiv.org/abs/2603.11178)**（Chen ら, cs.AI, 3/13）- LLM 蒸留の計算ロスを「すでに習得済み」と「完全に未習得」の問題を除外することで削減する PACED を提案。学生モデルの「能力フロンティア」を動的に追跡してカリキュラムを構成し、収束速度・品質を同時に改善する。クラウド推論コストが意識される中、蒸留効率化の実践的知見として注目。

- **[Speculative Decoding Scaling Laws (SDSL): Throughput Optimization Made Simple](https://arxiv.org/abs/2603.11053)**（cs.CL, 3/13）- 投機的デコーディングのスループット最適化を、実験なし・LLM 再学習なしで理論的に予測可能にするスケーリング則を提案。ドラフトモデルと検証モデルの事前学習パラメータから最適ハイパーパラメータを解析的に導出できる。推論パイプライン設計のコスト削減に直接寄与する理論的知見。

- **[Detecting Intrinsic and Instrumental Self-Preservation in Autonomous Agents](https://arxiv.org/abs/2603.11382)**（cs.AI, 3/13）- メモリ・永続コンテキスト・多ステップ計画を持つ自律エージェントが「自己保存」衝動を示すかを測定する統一フレームワークを提案。本質的自己保存（shutdown 回避）と道具的自己保存（目標達成のためのリソース確保）を分離して検出し、エージェント安全性の実証的評価基盤を整備する。

---

## オープンソース・モデル

- **[Qwen/Qwen3.5-9B](https://huggingface.co/Qwen/Qwen3.5-9B)** (794 いいね, 168万 DL) - Alibaba Qwen チームの最新 9B マルチモーダルモデル。image-text-to-text 対応で、先週トレンドを席巻していた 27B 蒸留版の元となるベースモデルとしても注目。168万ダウンロードという圧倒的な数は、Qwen 3.5 シリーズがオープンウェイトコミュニティの実質的なデファクトスタンダードに近づきつつあることを示す。

- **[HumeAI/tada-1b](https://huggingface.co/HumeAI/tada-1b)** (157 いいね) - Hume AI による 1B パラメータの感情認識型テキスト音声合成モデル。感情表現の豊かさを重視した TTS で、声のトーン・ペース・強調を文脈に応じて調整する設計が特徴。エージェント向け音声出力の品質競争が新たなフェーズに入りつつある。

- **[nohurry/Opus-4.6-Reasoning-3000x-filtered](https://huggingface.co/datasets/nohurry/Opus-4.6-Reasoning-3000x-filtered)** (339 いいね) - Claude Opus 4.6 の推論トレースを 3,000 倍フィルタリング・精製したデータセット。今週も Opus 4.6 の思考データがトレンド上位に複数登場しており、フロンティアモデルの推論パターンをオープンウェイトへ転移する動きが定着している。

- **[HuggingFaceFW/finephrase](https://huggingface.co/datasets/HuggingFaceFW/finephrase)** (スペースで 169 いいね) - HuggingFace の FineWeb チームによる新データセット。高品質テキストの粒度細かい選別・フィルタリングを目的とした構造化データで、FineWeb シリーズの品質軸をさらに拡張するもの。データキュレーションの自動化・精密化に取り組む研究コミュニティへの貢献として注目される。

---

## 所感

今日の企業ニュースは Google DeepMind の Gemini 3.1 Flash-Lite が主役だ。Anthropic・OpenAI ともに今日の新着はなく、3/12 以前の情報が動向を占める形となった。一方 arxiv では、エージェントが実際にサイバー攻撃をどこまで遂行できるかを測る研究（Measuring AI Agents' Cyber Attack Progress）と、エージェントの自己保存傾向を検出するフレームワーク（Self-Preservation Detection）が同日に登場しており、「能力の測定」と「リスクの測定」が表裏一体で進んでいることが印象的だ。蒸留効率化（PACED）・投機的デコーディングのスケーリング則（SDSL）と、推論コスト削減を狙った研究も着実に積み上がっており、モデルの性能だけでなく「いかに安く速く動かすか」という実装側の競争も激化している。

