---
title: "AI Watch（2026年9月28日）"
date: "2026-09-28T00:33"
category: "analysis"
summary: "「判断特化モデル」がJev-Mobile論文とGLiNER2.5-Decideの両面で進展。企業動向・LMArenaは膠着状態が続く。"
tags: ["llm", "agents", "benchmark", "open-source", "evaluation"]
---

## 今日のハイライト

**9月中旬から連日登場してきた「テキストを生成せず判断だけを返す特化モデル」（laya・openjev・JevOutなど）の系譜に、研究とオープンソース実装の両面で新しい動きがあった。** arXivでは「Jev-Mobile」が、モバイルGUIエージェントの計画を低頻度のVLMに任せ、実際のタップ・スワイプ操作は高頻度で動くJevに実行させることでレイテンシとコストを削減する手法を提案（9/25発表）。同じ日、Hugging Faceにはfastinoの軽量分類モデル「GLiNER2.5-Decide」が登場し、自社ベンチマークで既存の判断特化モデル「JevK5」（57.6%）や「Laya Router」（46.6%）を上回る60.2%の精度を報告するなど、判断特化モデル同士の性能比較が可視化され始めている。一方で企業動向・LMArenaリーダーボードはともに新着・変動が乏しい一日だった。

---

## 注目論文

arXiv RSS は空（新規バッチ未公開）のため、list ページより直近発表バッチの 9/25 発表分から選出（9/25〜27のレポートと同一バッチ。既出論文は重複排除済み）。

- **[Jev-Mobile: Jev as an Executor for Mobile GUI Agents](https://arxiv.org/abs/2609.30186)**（Linghua Zhang, 9/25発表） - 上記ハイライト参照。VLMがほぼ全ステップで計画と操作実行の両方を担う従来方式は遅延とコストが大きいとして、VLMには局所的なゴール設定だけを低頻度で行わせ、アクセシビリティツリーが定義する構造化された行動空間の中で軽量なJevに高頻度の実行を任せる方式へ転換した。
- **[How Reproducible Are Evaluation Conclusions? A Self-Audit of LLM-Inferred Prompt Structure](https://arxiv.org/abs/2609.30074)**（Dipankar Sarkar, 9/25発表） - 5系列・8B〜675Bの8モデルでプロンプト構造推定というタスクを293回分の生の中間表現を保存して検証したところ、同一の呼び出しでも構造推定結果が安定して再現されないと報告。ランキング表として発表されがちなLLM評価結果そのものの信頼性に疑問を投げかける。
- **[Low-Cost Assays for Measuring Model Behavior Across Vendors and Releases](https://arxiv.org/abs/2609.30012)**（Tapan Parikh, 9/25発表） - モデルの挙動を継続的に比較するには非構造化テキストを大量にコーディングする必要があり高コストという課題に対し、シンプルで安価かつ再現可能な「アッセイ」形式でベンダー・リリース間の挙動差を定量比較する枠組みを提案。
- **[Artificial Societies Benchmark: A Validation Framework for Synthetic Research](https://arxiv.org/abs/2609.30030)**（Chidichimo, Jung, Wallis, He 他, 9/25発表） - LLMを合成調査対象者として使う研究に対し、平均的な回答だけでなく個人差・回答間の関係・条件変化への反応まで再現できているかを検証する11種のテストからなるベンチマークを提案。20の人間データソースと9つのLLMを比較している。
- **[Screen Before You Serve: Simulation for Production Customer Experience AI Agents at 140M Scale](https://arxiv.org/abs/2609.30137)**（Alcoba, Rossell, Gupta 他, 9/25発表） - 規制産業の顧客対応エージェントは意図検知・運用ポリシー遵守・ツール呼び出しの信頼性が求められるが、手動テストはカバレッジが低く実環境実験は顧客の信頼を損ないかねないとして、仮説駆動のシミュレーションで大規模展開前に検証するワークフローを提示。

---

## オープンソース・モデル

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** - Xiaomiが公開したMiMo-V2.6シリーズの旗艦モデル。テキスト・画像・動画・音声を1モデルで扱い最大100万トークンの長文脈に対応、コーディング・エージェント・視覚・サイバーセキュリティを分野別ではなく1つの混合RLランで同時に鍛える「You Only RL Once」方式と、ロールアウト同士を相対評価して報酬を洗練する「Groupwise Agentic Grading」により、RL計算量の拡大による自己改善を狙う設計。
- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** - 340Mパラメータの英語分類特化モデル。意図分類・ルーティング・優先度判定などのラベル集合を呼び出し時に自由指定でき、テキスト生成せず1回のフォワードパスで判断を返す。自社ベンチマークで判断特化モデルの先行例JevK5（57.6%）やLaya Router（46.6%）を上回る60.2%の精度を報告しており、この系譜のモデル同士の直接比較が公開された点が注目に値する。
- **[nisten/opus5-5-doctor-patient-conversations-all-human-diseases](https://huggingface.co/datasets/nisten/opus5-5-doctor-patient-conversations-all-human-diseases)** - 前作（Claude Opus 4.8版）と同じ疾患リスト・20項目スキーマ・ChatML形式を踏襲しつつ、疾患ごとに1エージェントを割り当ててClaude Opus 5.5でゼロから再生成した医師患者対話データセット。
- **[FineEnvs/SmolDataEnvs](https://huggingface.co/datasets/FineEnvs/SmolDataEnvs)** - 小型モデルのコード・データ分析能力を鍛えるための5,500件超の強化学習タスク集。同じ5,000タスクをシャッフル順と易→難のカリキュラム順という2通りの学習順序で2Bモデルに与え、144件の未学習タスクへの汎化を比較する実験も付随している。

---

## ベンチマーク・リーダーボード

LMArenaのText Overall上位10位は、レーティング・投票数を含め9/27から変化がなかった。首位「claude-opus-5.5-high」（rating 1509、投票2,307件）を筆頭に、2位「claude-opus-4-6-high」（1505、投票76,518件）、3位「claude-fable-5-high」（1504、投票36,462件）と続き、Anthropicが上位10枠中8枠を占める構図も継続。首位の投票数はまだ2,307件と他の上位モデルの数万件規模に比べ少なく、評価の信頼区間が定まるまでもうしばらく変動を注視する必要がある。補助ソースのArtificial Analysis（Intelligence Index）も引き続き「Claude Opus 5.5（Adaptive Reasoning, Max Effort）」が首位で、前回から大きな変動はない。

---

## 所感

企業動向・リーダーボードともに新着・変動が乏しい静かな一日だったが、その分オープンソースとarXivの両面で「判断特化モデル」というテーマの熟成が目立った。GLiNER2.5-Decideが自らのベンチマーク表にJevK5・Laya Routerを並べて数値で優劣を競う形を取ったのは、この系譜が単なる個別実装の乱立から相互比較可能なジャンルへ移行しつつあることを示している。arXiv側でも、Jev-Mobileのように判断特化モデルを実際のエージェントアーキテクチャに組み込む応用研究と、How Reproducible Are Evaluation ConclusionsやLow-Cost Assaysのように評価結果そのものの再現性・比較可能性を問い直す研究が同時に進んでおり、ここ数日続く「評価をどう検証するか」という関心が、判断特化モデルという具体的な対象を得て一段深まった印象を受けた。
