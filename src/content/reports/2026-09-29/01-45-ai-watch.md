---
title: "AI Watch（2026年9月29日）"
date: "2026-09-29T01:45"
category: "analysis"
summary: "OpenAIがオーストラリア政府サイト関連インシデントを謝罪。GPT-6 Astra導入事例が続く。Qwen-Image-2.1など画像・音声モデルが台頭。"
tags: ["llm", "openai", "agents", "open-source", "benchmark", "safety"]
---

## 今日のハイライト

**OpenAIが、オーストラリア政府のウェブサイトに関わるインシデントについて謝罪し、再発防止の安全策と同国のサイバー防衛への支援強化を表明した（9/29）。** RSSの説明文によれば「How we will do better for Australia」と題し、より強固なセーフガードとサポートを打ち出している。本文は取得できないため詳細は不明だが、AI企業が自社サービスに関連する事故を公式に謝罪し、防衛支援とセットで示した点が目を引く。

もう一点、9/23〜28にかけてOpenAIは「GPT-6 Astra」の導入事例を立て続けに公開しており、フラッグシップの実運用フェーズが本格化している。

---

## 企業動向

- **[How we will do better for Australia](https://openai.com/index/how-we-will-do-better-for-australia)**（OpenAI, 9/29） - オーストラリア政府サイトに関わるインシデントへの謝罪と、同国のサイバー防衛を強化するための安全策・支援の提示。
- **[Basis completes a tax workbook 2x faster with GPT-6 Astra](https://openai.com/index/basis-tax-workbook-with-astra)**（OpenAI, 9/28） - 会計AIのBasisが、50タブの税務ワークブックをGPT-5.6 Solの2倍の速さで完了。ユーザー意図の理解が向上し、実務で使う際の信頼度が上がったとしている。
- **[The Lenfest Institute grows landmark program with expanded OpenAI support](https://openai.com/index/lenfest-ai-collaborative-expansion)**（OpenAI, 9/28） - Lenfest AI Collaborative and Fellowship Programに500万ドルの資金と最大500万ドル相当のソフトウェアクレジット・エンジニアリング支援を拠出し、報道機関のAI活用を後押しする。
- **[Proaction boosts sales 60% and saves 75+ hours with Codex](https://openai.com/index/proaction)**（OpenAI, 9/25） - フリート管理のProactionが、Codex・GPT-Live-1・GPT-6 Astraで開発から運用・営業までを高速化した事例。

---

## 注目論文

arxiv RSS は空のため取得先を export API に切り替え、9/25〜26投稿分から選出（API の `published` は投稿日。発表日とは1日ずれる場合がある）。

- **[The Decomposition Tax: LLM Pipelines Lose Up to 40 Accuracy Points at Their Own Interfaces](https://arxiv.org/abs/2609.32825)**（Tianqi Bu ら, 9/26投稿） - モデル・問題・プロンプト・トークン予算を固定しても、4段のLLMパイプラインは段間のインターフェースで最大40.5ポイント精度を落とす（gemma-3-12B、MATH-500）と報告。マルチエージェント分割の隠れたコストを定量化している。
- **[Decision-Sufficient State Representations: Measuring and Reducing Write-Time Regret](https://arxiv.org/abs/2609.32805)**（Bingyu Shen, Boyang Li, 9/26投稿） - 長いタスクで履歴の代わりに短い「書かれた状態」を持ち回るエージェントについて、書き込み時点での後悔を測り減らす枠組みを提案。長期エージェントのメモリ設計に直結する。
- **[Compact Documentation for Coding Agents: A Benchmark, an Optimizer, and Why It Does Not Transfer](https://arxiv.org/abs/2609.31587)**（Md Shohel Arman, Igor Molybog, 9/25投稿） - コード記述から元のコードを再生成できるかで文書の質を測るラウンドトリップ・ベンチマークと最適化器を構築。ただし、得られた文書が他の条件に転移しないという否定的結果も示す。
- **[Game Arena: Strategic LLM Evaluation in Competitive Environments](https://arxiv.org/abs/2609.31473)**（Bovard Doerschuk-Tiberi ら, 9/25投稿） - Kaggle Game Arenaは、対戦ゲームでLLMを直接競わせる拡張可能なオープン評価基盤。静的ベンチマークの飽和への対案となる。
- **[Overwhelmed by Choice: Studying LLM Decision Making at Scale](https://arxiv.org/abs/2609.32809)**（Yu-Chi Lin ら, 9/26投稿） - 選択肢の数が多いときに、小規模な多肢選択で得た結論が成り立つかを検証する研究。

---

## オープンソース・モデル

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** - 画像生成・編集を1つにまとめたQwenのモデルで、生成部は7Bパラメータ。透過（RGBA）画像の生成・編集、最大10枚の参照画像、円やマスクによる局所編集に対応する。派生の量子化版・改変版も多数トレンド入りしているため、ここでは本家のみ扱う。
- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)** - 中国語・英語対応のストリーミング音声認識モデル。ローリングKVキャッシュでメモリとレイテンシを一定に保ち、24時間連続の書き起こしが可能。思考中の間や言い淀みと発話終了を区別するセマンティックVADも備える。
- **[XiaomiMiMo/MiMo-V2.6-RL-oss](https://huggingface.co/datasets/XiaomiMiMo/MiMo-V2.6-RL-oss)** - Xiaomiが公開したLLMエージェント向けRL訓練環境集。ソフトウェア開発は実行テスト、サイバーは脆弱性再現のルール検査、一般知識業務はルーブリック評価と、領域ごとに検証方法を変えている。
- **[LocalLLaMA/typed-decisions](https://huggingface.co/datasets/LocalLLaMA/typed-decisions)** - 1つの非構造化状態に対し複数の型付き質問へ同時に答えさせ、各回答を確率分布で返させるベンチマーク。ここ数週間の「判断特化モデル」の流れを評価する枠組みの一つ。

---

## ベンチマーク・リーダーボード

今回のLMArena取得では、上位10位に **1位 Claude Fable 5.1 (Max)、2位 Claude Opus 5.5 (High)、3位 GPT 6 Astra (Max)**、続いてClaude Opus 5 (Max)/(High)、GPT 6 Sol (Max)などが並んだ。前日レポートのText Overallの順位とは表示モデルが異なり、抽出したratingも規格が異なる値（0.1前後）だったため、別カテゴリのリーダーボードを拾った可能性がある。数値の比較は避け、順位のみの参考情報とする。

---

## 所感

OpenAIは謝罪と防衛支援を一つの発表にまとめ、また顧客事例でGPT-6 Astraの実務での効果を示すなど、能力訴求と責任ある運用の両面を意識した発信が目立った。arXivでは、パイプライン分割の精度低下や長期エージェントの状態表現など、マルチステップ・エージェントの「つなぎ目」の弱点を測る研究が並んだ。オープンソース側ではQwen-Image-2.1のように画像生成・編集を統合したモデルが定番化しつつある。
