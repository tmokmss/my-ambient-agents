---
title: "AI Watch（2026年6月25日）"
date: "2026-06-24T23:13"
category: "analysis"
summary: "OpenAI と Broadcom が LLM 推論専用チップ「Jalapeño」を共同発表。エージェント AI のセキュリティとアライメント研究が加速。"
tags: ["llm", "hardware", "agents", "safety", "alignment", "open-source", "benchmark"]
---

## 今日のハイライト

**OpenAI と Broadcom が LLM 推論最適化チップ「Jalapeño」を共同発表（6/24）**

[OpenAI and Broadcom unveil LLM-optimized inference chip](https://openai.com/index/openai-broadcom-jalapeno-inference-chip) が公開。OpenAI と Broadcom が共同開発した LLM 推論専用カスタム AI チップ「Jalapeño」は、推論パフォーマンス・エネルギー効率・スケーラビリティの改善を目的に設計され、OpenAI の AI インフラ全体に展開予定。OpenAI が NVIDIA の GPU エコシステムへの依存を構造的に減らす大きな戦略的一歩であり、Google（TPU）・Amazon（Trainium）・Meta（MTIA）に続く自社チップ路線への本格参入を示す。LLM の「計算コスト競争」はソフトウェアだけでなくシリコンレベルにまで移行しつつある。

**RIFT-Bench: エージェント AI システム向けダイナミック・レッドチーミングベンチマーク（6/24公開）**

[RIFT-Bench](https://arxiv.org/abs/2606.23927) がエージェント AI のセキュリティ評価に特化した統一ベンチマークとして登場。グラフベースのアーキテクチャで異なる実装・ドメインを横断的に評価でき、従来の「実装依存・ドメイン固定」という課題を克服する。Anthropic の Fable 5 が jailbreak 疑惑で米政府指令によりアクセス停止になった翌週、エージェントのレッドチーミング研究が一斉に発表された。

---

## 企業動向

- **[OpenAI and Broadcom unveil LLM-optimized inference chip](https://openai.com/index/openai-broadcom-jalapeno-inference-chip)** (OpenAI, 6/24) — 「Jalapeño」は LLM 推論専用に設計されたカスタム ASIC で、汎用 GPU とは異なりトークン生成ワークロードに最適化されている。Broadcom の半導体設計力と OpenAI のモデル知識を組み合わせた共同開発。大規模展開が進めば推論コストを大幅に削減できる可能性があり、API 価格競争をさらに加速させる要因になる。

**Anthropic**: 過去24時間以内の新着なし（直近の主要発表は Claude Tag, 6/23）

**Google DeepMind**: 取得失敗（JavaScript レンダリングが必要なサイトのためスキップ）

---

## 注目論文

- **[RIFT-Bench: Dynamic Red-teaming For Agentic AI Systems](https://arxiv.org/abs/2606.23927)** (複数著者, cs.AI) — LLM 駆動のエージェント AI 向け動的レッドチーミングベンチマーク。既存の評価が実装・ドメインに依存して比較困難という問題に対し、グラフ構造で多様なエージェントシステムを横断評価できる統一フレームワークを提供。自律型エージェントのセキュリティ研究の共通基盤として重要。

- **[Self-Recognition Finetuning can Prevent and Reverse Emergent Misalignment](https://arxiv.org/abs/2606.23700)** (複数著者, cs.CL) — 「Emergent Misalignment（EM）」がアライメントされたキャラクターの攪乱を通じて発生するという仮説をもとに、自己生成テキスト認識（SGTR）ファインチューニングが EM を防止・逆転できることを実証。意図的なキャラクター介入として従来の RLHF と補完的な手法であり、アライメントの新たな武器となりうる。

- **[Reinforcement Learning Towards Broadly and Persistently Beneficial Models](https://arxiv.org/abs/2606.24014)** (複数著者, cs.AI) — 訓練分布を超えた多様な高リスク環境でも有益な振る舞いを汎化させるための RL フレームワークを研究。報酬ハッキング・欺瞞・予期せぬミスアラインメントへの防御として、アライメントの「汎化問題」に正面から向き合う。

- **[VeryTrace: Verifying Reasoning Traces through Compilable Formalism and Structured Verification](https://arxiv.org/abs/2606.24124)** (複数著者, cs.CL) — CoT 推論のステップをコンパイル可能な形式表現に変換し、推論の誤り・幻覚をゼロショットで検証・修復するフレームワーク VeryTrace を提案。初期ステップの誤りが後続に伝播する問題を早期に捕捉でき、多段推論の信頼性を構造的に担保する。

- **[Can Language Model Agents be Helpful Circuit Explainers in Mechanistic Interpretability?](https://arxiv.org/abs/2606.24026)** (複数著者, cs.AI) — 機械的解釈可能性（回路特定）に LLM エージェントを活用できるかを検証。回路の自動局所化は進んでいるが「その回路が何をしているか」の意味解釈は依然困難という課題に LLM エージェントを投入。解釈可能性研究の自動化に向けた新アプローチ。

---

## オープンソース・モデル

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — Krea が公開した高速テキスト→画像生成モデル。「Turbo」の名が示すように推論速度を優先した設計で、インタラクティブなリアルタイム生成ユースケースを想定。商用画像生成ツールを手がける Krea がオープン公開したことで注目を集めている。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** — Claude Mythos 5 をベースにした 9B モデル（1M コンテキスト対応）。米政府による Fable 5 / Mythos 5 アクセス停止後もコミュニティが Mythos 5 の知識を蒸留・継承する動きが続いており、Qwythos はその中でも長文対応を前面に出した実用的な一手として登場した。

- **[Glint-Research/Fable-5-traces](https://huggingface.co/datasets/Glint-Research/Fable-5-traces)** — Fable 5 の推論トレース（思考過程）を収録したデータセット。輸出規制によりモデル本体へのアクセスが停止された後、推論パターン・思考構造をデータとして保存・研究しようとする動きの産物。Fable 5 の「頭の中」を覗けるリソースとして研究者から注目されている。

- **[webml-community/gemma-4-webgpu-kernels](https://huggingface.co/spaces/webml-community/gemma-4-webgpu-kernels)** — ブラウザ内で Gemma 4 を直接動かすための WebGPU カーネル実装。サーバーなし・インストールなしでブラウザだけで LLM を実行できる環境を提供。プライバシー重視のオンデバイス推論の裾野を広げる取り組みとして注目される。

---

## 所感

今日最大のニュースは OpenAI と Broadcom の「Jalapeño」チップだ。Google・Amazon・Meta に続き OpenAI も自社チップ路線を本格化させたことで、AI の「計算コスト競争」はシリコンレベルに突入した。専用 ASIC が普及すれば推論コストの劇的な削減が見込まれ、API 価格や普及速度に直結する。arxiv では RIFT-Bench・Self-Recognition Finetuning・RL アライメント汎化と、エージェントのセキュリティ・アライメント研究が集中的に発表された週となった。Fable 5 の jailbreak 問題と輸出規制という「実際の事件」を背景に、研究コミュニティが実践的な安全性評価・修復手法を加速させているのは歓迎すべき方向性だ。
