---
title: "AI Watch（2026年5月6日）"
date: "2026-05-05T23:01"
category: "analysis"
summary: "Anthropic が金融向け10種のエージェントテンプレートを公開。OpenAI は GPT-5.5 Instant をリリース。"
tags: ["llm", "agents", "finance", "enterprise", "safety", "benchmark", "open-source", "military"]
---

## 今日のハイライト

**Anthropic が金融サービス向けエージェントテンプレート10種を公開（5/5）**——ピッチブック作成・KYCファイルスクリーニング・月次決算クローズなど金融業務の中核タスクに特化したエージェントテンプレートを一挙公開。Claude Cowork・Claude Code のプラグインと Claude Managed Agents のクックブックとして提供され、Microsoft 365（Excel・PowerPoint・Word・Outlook）のアドインも同時提供開始。Vals AI の Finance Agent ベンチマークでは Claude Opus 4.7 が 64.37% を記録しトップに立っており、「金融業務に最も強いフロンティアモデル」の地位を押し出した戦略的リリース。

**OpenAI が GPT-5.5 Instant をリリース（5/5）**——「よりスマートで、明確で、パーソナライズされた」と表現された新モデルを、システムカードと同時公開。名称から即応性（Instant）に特化したバリアントであることが窺われ、GPT-5 ファミリーのラインナップ拡充の一環と見られる。同日に「ChatGPT 広告の新しい購入方法」も発表されており、OpenAI の収益モデル多角化が加速している。

---

## 企業動向

- **[Agents for financial services](https://www.anthropic.com/news/finance-agents)**（Anthropic, 5/5）— 金融サービス向けエージェントを Research・Operations の2カテゴリに体系化。Research 側はピッチビルダー・ミーティング準備・決算レビュー・財務モデル作成・マーケットリサーチの5種、Operations 側はバリュエーションレビュー・総勘定元帳調整・月次決算クローズ・財務諸表監査・KYC/AML スクリーニングの5種。各テンプレートは「スキル・コネクタ・サブエージェント」の3点セットで構成され、各社の審査ポリシーや承認フローに合わせてカスタマイズ可能。MCP アプリで金融専門家が既存のデータツールをそのまま利用できる仕組みも整備した。

- **[GPT-5.5 Instant](https://openai.com/index/gpt-5-5-instant)**（OpenAI, 5/5）— "smarter, clearer, and more personalized" を掲げた新モデル。[システムカード](https://openai.com/index/gpt-5-5-instant-system-card)も同日公開されており、安全性評価のプロセスが透明化されている。詳細なベンチマーク比較は今後の検証を待つが、既存の o3・GPT-4.1 系に加わる新ラインナップとして、モデル選択の複雑さが増しつつある。

- **[New ways to buy ChatGPT ads](https://openai.com/index/new-ways-to-buy-chatgpt-ads)**（OpenAI, 5/5）— ChatGPT への広告購入手段を拡充する発表。AI チャットインターフェースの収益化モデルとして、サブスクリプションに加えて広告収入を本格的に組み込む方針を明確化。

---

## 注目論文

- **[AgentReputation: A Decentralized Agentic AI Reputation Framework](https://arxiv.org/abs/2605.00073)**（複数著者）— 急増する分散型エージェント AI マーケットプレイス（デバッグ・パッチ生成・セキュリティ監査など）において、既存の評判機構が通用しない3つの根本原因——評価手順への戦略的最適化・タスク間での能力の非転移性・検証厳密度のばらつき——を整理し、新たな分散型評判フレームワークを提案。エージェントが「評判獲得ゲーム」に最適化するリスクに正面から向き合った実務的研究。

- **[Model Organisms Are Leaky: Perplexity Differencing Often Reveals Finetuning Objectives](https://arxiv.org/abs/2605.00994)**（複数著者）— 安全性研究で使われる「モデルオーガニズム」（有害行動をあえて学習させたモデル）が、単純なパープレキシティ差分計算で学習目的を露出してしまうことを実証。悪意あるファインチューニングを検出するための有効な手法になりうる一方、安全研究のための「封じ込め実験」が想定より情報漏洩しやすいという警告でもある。

- **[ARMOR 2025: A Military-Aligned Benchmark for Evaluating LLM Safety Beyond Civilian Contexts](https://arxiv.org/abs/2605.00245)**（複数著者）— 軍事・防衛分野での LLM 利用を念頭に、一般的な安全ベンチマークが対応できていない法的コンプライアンス（武力紛争法 LOAC）・ドクトリン準拠・作戦上の意思決定支援の側面を評価するベンチマークを構築。「民間社会の有害性評価」とは異なる倫理・法律的枠組みが軍事 AI には必要であることを具体的なタスクで示す。

- **[Minimal, Local, Causal Explanations for Jailbreak Success in LLMs](https://arxiv.org/abs/2605.00123)**（複数著者）— ジェイルブレイクが「なぜ」機能するかを因果的・局所的・最小限の観点から説明する手法を提案。安全訓練済みモデルが有害リクエストに応答してしまうメカニズムの理解は、防御強化の出発点として重要で、ブラックボックス的な「成功したからよい」という攻撃理解から脱却する研究として注目される。

- **[CLEAR: Revealing How Noise and Ambiguity Degrade Reliability in LLMs for Medicine](https://arxiv.org/abs/2605.01011)**（複数著者）— 医療 LLM の評価が「試験問題形式のきれいなベンチマーク」に偏っており、実臨床の曖昧性・ノイズを反映していないことを指摘。CLEAR フレームワークにより、実際の医療状況に近い条件下での LLM 信頼性低下パターンを明らかにする。医療 AI の実用化評価に必要な「現実的ストレステスト」の重要性を訴える。

---

## オープンソース・モデル

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**（OpenAI, 1,298 likes・141K DL）— OpenAI が HuggingFace にリリースしたオープンソースの Privacy Filter モデル。個人情報・プライバシーに関わるコンテンツを検出・フィルタリングするための専用モデルで、オープンソース化はプライバシー保護のエコシステム貢献として注目される。OpenAI の HF 公開リソースとして異例の高い注目度を集めている。

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**（438 likes・13K DL）— Xiaomi の推論特化モデル MiMo シリーズの最新版。数学・コーディング・推論タスクに強い設計で、スマートフォンメーカー Xiaomi が LLM 開発を本格化していることを示す。中国系オープンソースモデルの多様化が続いている。

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**（242 likes・44K DL）— NVIDIA が公開した 30B MoE（実効 3B アクティブ）のオムニモデル。テキスト・音声・画像・動画を横断するマルチモーダル推論に対応し、「Nano」と称しながら Omni 対応を実現した高効率設計。エッジデプロイを想定した NVIDIA の小型マルチモーダルモデル戦略の一環。

- **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)**（218 likes・12K DL）— コーディング特化の AI スタートアップ poolside が公開した最新の XS（小型）バリアント。コード補完・エージェントコーディングに最適化されており、エンタープライズ向けコーディング AI 市場での poolside の存在感が高まっている。

---

## 所感

今日は Anthropic の「金融特化エージェント」と OpenAI の「GPT-5.5 Instant」という二つの製品発表が重なり、AI の産業応用競争が新フェーズに入ったことを改めて印象づける日となった。Anthropic が Vals AI ベンチマーク首位を強調しながら金融向けエージェントテンプレートを製品として体系化した動きは、「最強のモデル＋業務特化ワークフロー」を一体提供するという垂直統合戦略の具体化として極めて重要だ。一方、arxiv では「軍事 AI の安全評価」「医療 LLM のリアルな信頼性測定」「ジェイルブレイクの因果的解明」と安全性研究の多様化が目立ち、AI の実社会応用が広がるにつれて評価・安全の文脈も多次元化していることが分かる。

