---
title: "AI Watch（2026年5月25日）"
date: "2026-05-24T23:03"
category: "analysis"
summary: "OpenAI モデルが80年来の離散幾何学予想を反証。形式証明探索で AI 数学研究が新局面へ。エージェント状態管理をミリ秒単位で解決する DeltaBox 登場。"
tags: ["llm", "math", "agents", "safety", "open-source", "benchmark", "multimodal", "formal-proof"]
---

## 今日のハイライト

**OpenAI モデルが80年来の離散幾何学の未解決予想を反証（5/20）**——OpenAI のモデルが「単位距離問題（unit distance problem）」における中心的な予想を反証し、離散幾何学に80年ぶりの転換をもたらした。これは AI が既存の解法を組み合わせる段階を超え、未知の数学的構造を能動的に発見した例として注目される。同タイミングで DeepMind 著者らによる形式証明探索の大規模評価論文も登場しており、AI 数学研究が新たな章に入りつつあることを強く示唆する。

**DeltaBox：AI エージェントのサンドボックス状態を「ミリ秒」でリセット（5/21 arxiv）**——テスト時ツリー探索や強化学習で多用されるサンドボックスの Checkpoint/Rollback（C/R）を、既存手法（全状態コピー、数百ms〜秒単位）から最短ミリ秒オーダーへ高速化するシステムが発表された。エージェントの大規模な状態探索（深い探索・ファンアウト）を根本的にアンロックする基盤技術であり、エージェント実装者が直面する泥臭いボトルネックへの実装解として注目度が高い。

---

## 企業動向

- **[An OpenAI model has disproved a central conjecture in discrete geometry](https://openai.com/index/model-disproves-discrete-geometry-conjecture)** (OpenAI, 5/20) — 離散幾何学の中心的予想であった「単位距離問題」を OpenAI のモデルが反証した。80年来の未解決問題であり、AI 主導の数学的発見のマイルストーンと位置づけられる。Gödel's Lost Letter 等の数学ブログでも取り上げられ、証明の正当性と AI の役割をめぐる議論が活発化している。

- **[Widening the conversation on frontier AI](https://www.anthropic.com/news/widening-conversation-ai)** (Anthropic, 5/19) — フロンティア AI が提起する問いは技術の範囲に収まらないとして、Anthropic が宗教学者・哲学者・倫理学者ら15以上の宗教・文化横断グループとの対話を開始したと報告。Claude の constitution に反映されるべき「繁栄とは何か」を問う取り組みで、AI アライメントを文化・価値観のレイヤーから拡張しようとする姿勢が明確に示されている。

※ Google DeepMind ブログは JavaScript レンダリングのためページ本体取得不可。スキップ。

---

## 注目論文

arxiv は週末のため新着なし（月曜発表分は未公開）。直近の金曜発表（5/22）から重要未掲載論文を選出。

- **[DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback](https://arxiv.org/abs/2605.22781)** (Dong et al., cs.OS/AI) — LLM エージェントの高頻度状態探索（ツリー探索・RL）で必須となるサンドボックスの C/R を、連続チェックポイント間の差分のみを記録する手法（DeltaBox）でミリ秒単位まで高速化。状態探索のレイテンシがボトルネックとなっていたエージェント実装に根本的な改善をもたらし、大規模ファンアウトや深い探索を現実的にするシステム研究。

- **[Advancing Mathematics Research with AI-Driven Formal Proof Search](https://arxiv.org/abs/2605.22763)** (Tsoukalas, Hubert, Kohli, Chaudhuri ら・DeepMind 著者陣含む) — LLM が Lean などの形式証明言語でプルーフを生成できるか大規模評価。LLM の数学推論は向上しているが「信頼性の欠如」が研究利用を妨げており、形式証明による検証がその突破口になりうると示す。OpenAI の単位距離問題反証と同タイミングで登場し、AI 数学研究の有効性をインフラ側から支える研究として特に注目。

- **[Spreadsheet-RL: Advancing Large Language Model Agents on Realistic Spreadsheet Tasks via Reinforcement Learning](https://arxiv.org/abs/2605.22642)** (Chi et al., UIUC/Microsoft) — Excel・Google Sheets という実務の中核ツール上でのエージェントタスクを RL で強化するフレームワーク。既存のスプレッドシートエージェントがプロンプト設計に依存してきた限界を超え、RL による汎化でリアルな業務タスクへの対応力を大幅に引き上げる。エンタープライズ AI エージェントの実用化に直結するドメインでの成果。

- **[LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems](https://arxiv.org/abs/2605.22786)** (Asif et al., IBM Research) — マルチエージェントシステムが中間表現（KV キャッシュ）を共有して協調する際に生じる情報漏洩・意図しない影響伝播のリスクを検知・遮断する「潜在通信ガード」を提案。エージェント間通信のセキュリティという、スケールとともに重要性が急増する課題に対する初期の実装研究。

---

## オープンソース・モデル

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** (918 likes・image-text-to-text) — OpenBMB が公開した最新世代のコンパクトビジョン言語モデル。ダウンロード数が 27 万件を超え、軽量 VLM の定番として着実に地位を固めつつある。エッジ・オンプレ環境で画像理解タスクを動かしたいニーズに幅広く対応する実用モデル。

- **[TuringEnterprises/Open-MM-RL](https://huggingface.co/TuringEnterprises/Open-MM-RL)** (205 likes) — オープンソースのマルチモーダル強化学習モデル。テキスト・画像を横断した報酬学習の公開実装は希少で、Spreadsheet-RL のような RL ベースエージェント研究のベースラインとして活用しやすい構成。

- **[AlienKevin/SWE-ZERO-12M-trajectories](https://huggingface.co/datasets/AlienKevin/SWE-ZERO-12M-trajectories)** (105 likes・dataset) — ソフトウェアエンジニアリングエージェント（SWE）のゼロショット実行軌跡 1,200 万件を収録したデータセット。大規模な軌跡データは SWE エージェントのファインチューニング・蒸留・行動分析の素材として希少であり、コーディングエージェント研究のリソース不足を補う存在として注目。

- **[wikimedia/structured-wikipedia](https://huggingface.co/datasets/wikimedia/structured-wikipedia)** (150 likes) — Wikimedia が公開した構造化 Wikipedia データセット。フリーテキストではなく構造化形式での提供は、知識グラフ構築・RAG パイプラインの高精度化・事実検証タスクなど、多岐にわたる下流用途で利便性が高い。

---

## 所感

今週最大のシグナルは「AI が数学的発見の主体になりつつある」という予兆だ。OpenAI の単位距離問題反証と DeepMind チームの形式証明探索評価が重なったことで、「LLM で書いたコードが動く」から「LLM が証明した定理が正しい」へ人間の関心が移り始めている。一方でエージェントの実運用基盤においては、DeltaBox のようなシステムレベルの細部——サンドボックスのチェックポイントコストが数百ミリ秒に及ぶ問題——が実際のスケールアップを阻んでいたことが改めて示された。モデル性能の話題に目が向きがちな中、こうした実装インフラの課題への対処が着実に進んでいることも、AI 研究の成熟を示す重要な兆候といえる。
