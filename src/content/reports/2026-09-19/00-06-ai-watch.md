---
title: "AI Watch（2026年9月19日）"
date: "2026-09-19T00:06"
category: "analysis"
summary: "AnthropicがAccentureと評価領域で提携、arXivでは孤立したLLMインスタンス間の秘匿シグナリング実験が話題。LMArena上位10位は6日連続で固定。"
tags: ["llm", "agents", "safety", "enterprise", "benchmark", "open-source"]
---

## 今日のハイライト

**arXivで、事前学習の共有以外は一切コミュニケーション手段を持たない「孤立した」LLMインスタンス同士が、自然言語の中に人間には気づかれにくいシグナルを埋め込んで協調できるかを検証した論文が発表された（9/18）。** 「For Your Eyes Only」と題されたこの研究は、送信役と受信役が事前調整も共有メモリも持たない状態で、同一モデルの事前学習知識とタスク指示だけを頼りに情報を伝達できるかを測る協調ゲームを設計しており、モデル生成コンテンツを別のモデルインスタンスが自動的に消費するワークフローが増える中で、意図しない「隠れた合意形成」のリスクを測る土台になる研究といえる。企業動向では、Anthropicがコンサルティング大手Accentureと評価（embedded evaluation）領域での提携を発表した（9/18）。一方LMArenaのリーダーボードは上位10位のレーティング・投票数が観測できる範囲で6日連続で一切変わっておらず、モデル単体の競争の停滞が続いている。

---

## 企業動向

- **[Partnering with Accenture on embedded evaluation](https://www.anthropic.com/news/accenture-embedded-evaluation)**（Anthropic, 9/18） - Accentureとの提携を発表（一覧ページのタイトルのみで詳細記事は未取得）。タイトルから、企業の実運用ワークフローに評価プロセスを組み込む「embedded evaluation」を、コンサルティング経由で企業顧客に届ける取り組みとみられる。8月以降の「Enterprise Frontier Safeguards」や「Life Sciences Verification Program」と同様、評価・検証をパートナー企業と協働で広げる路線の延長線上にある。
- OpenAI・Google DeepMindのブログは直近3日以内の新着なし（OpenAIの最新は9/17付「Astra for Law」等で既報、DeepMindの最新は9/15のGemini 3.8 Liveで既報）。

---

## 注目論文

- **[For Your Eyes Only: Evaluating Coordination Between Isolated Language Model Instances](https://arxiv.org/abs/2609.19504)**（Shirnin, Kudelya, 9/18発表） - 上記ハイライト参照。共有メモリも協調用の訓練も持たない同一モデルの2インスタンスが、自然言語の中に人間の検閲者に気づかれにくいシグナルを埋め込んで情報伝達できるかを測る協調ゲーム「For Your Eyes Only」を提案。モデル出力を別のモデルが自動的に読む場面が増える中で、意図しない隠れた協調のリスクを定量評価する枠組みを示した。
- **[An Architecture for Long-Horizon Agents: Levels, Ticks and Cascaded Intelligence](https://arxiv.org/abs/2609.19519)**（Nijkamp, Koul, Pakhomov, Pang, 9/18発表） - 数日〜数週間にわたるタスクはどのコンテキストウィンドウよりも長く生き続けるため、エージェントは「学習し続ける」前にまず「忘れずに動き続ける」必要があると主張。この能力はモデル本体ではなくモデルを取り巻くハーネス側にあるとし、長時間運用を妨げる7つのボトルネックをそこから導出している。
- **[Position: It is Time to Virtualize Foundation Models with a Self-evolving Operating System Layer](https://arxiv.org/abs/2609.19203)**（Bhattacharya, Kumar, Xu 他, 9/18発表） - AIアプリケーションが単一の基盤モデルから複合的なエージェント型システムへ移行した一方、MCPやA2Aのようなプロトコルがツール・エージェント間の接続を容易にしても、状態管理・メモリ・予算・ガードレールは各フレームワークが個別に暗黙のランタイムとして実装しており、挙動の移植性やガバナンスが脆い状態が続いていると指摘。OSが登場する前の初期コンピューティングになぞらえ、基盤モデルを仮想化する共通OS層が必要だと論じるポジション論文。
- **[Contagion on the Trading Floor: How Adversarial Signals Spread in Multi-Agent Trading Systems](https://arxiv.org/abs/2609.19789)**（Sua, Dong, Thai 他, 9/18発表） - LLMベースのマルチエージェント取引システムが定量金融の現場に現れ始めている一方、敵対的入力への頑健性はほとんど検証されていない。SNSフィードなど正規の入力経路のみを使ったブラックボックス型の毒入れ攻撃を、現代的なマルチエージェント取引アーキテクチャを再現する汎用フレームワーク「GMATS」上で実証した。
- **[Zarya: A Hybrid Autoregressive-Masked Diffusion Language Model with Flexible Training and Dual-Mode Inference](https://arxiv.org/abs/2609.19868)**（Sinev, Koziev, Leshchuk, 9/18発表） - 自己回帰モデル（ARM）は逐次的な左から右への生成に縛られ、マスク拡散モデル（MDM）は並列デコードができる一方KVキャッシュを再利用できず計算コストが高いというトレードオフに対し、AR目的関数とマスク拡散目的関数を同時に最適化するハイブリッドモデル群「Zarya」を提案し、両者の利点を両立させることを狙う。

---

## オープンソース・モデル

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** - Qwen3.8-27Bをベースに、埋め込み・注意機構・MLP・LMヘッドまで全パラメータを1.72ビット/重みの三値（ternary）表現に圧縮したGGUFモデル。FP16比で約9.3倍小さい約5.9GBまで縮めながら、14種の思考モードベンチマーク平均でFP16の98.2%の性能を維持し、Apple M5 Maxのラップトップでも262Kトークンのコンテキストを扱えるとしている。
- **[ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)** - 同じくQwen3.8-27Bをベースに、量子化ではなく「過剰に考えすぎる」推論トークンを狙い撃ちしてファインチューニングで抑制するアプローチの高速版。思考トークン数を平均58.3%削減しつつ性能低下を1%未満に抑え、タスクによって最大1.95倍の高速化を報告している。Ternary-Bonsaiが重み圧縮でモデルを軽くするのに対し、Swiftは推論の無駄な思考を削って速くするという対照的なアプローチで、同じ人気ベースモデルの効率化競争が並行して進んでいることがうかがえる。

---

## ベンチマーク・リーダーボード

LMArenaの上位10位は、レーティング・投票数ともに観測できる範囲で6日連続で一切変化がなかった。首位「claude-fable-5-high」（1506、投票30,057件）、2位「claude-opus-4-6-high」（1505）、3位「claude-opus-4-7-high」（1502）を筆頭に、Anthropicが7枠、Metaの「muse-spark」シリーズが2枠、Googleの「gemini-3.8-flash-high」が9位を占める構図が変わらず続いている。なお、Artificial Analysisの補助データは今回もサイト側のデータ構造から安定した抽出ができず、スキップした。

---

## 所感

企業発のニュースが手薄だった一日だったが、arXiv側では「孤立したLLMインスタンス同士が秘匿シグナルで協調できるか」を検証する研究や、マルチエージェント取引システムへの毒入れ攻撃を扱う研究など、複数のモデル・エージェントが人手を介さずに連携する場面が増えるにつれて浮上する新しいリスクを扱う論文が目立った。オープンソース側では、同じQwen3.8-27Bという人気ベースモデルに対して「重みを三値まで圧縮する」アプローチと「推論トークンを削ってスピードアップする」アプローチが同時にトレンド入りしており、フロンティアモデル単体の競争が停滞する一方で、既存モデルをいかに軽く・速く動かすかという効率化の裾野が広がっている様子がうかがえた。
