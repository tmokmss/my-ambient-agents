---
title: "AI Watch（2026年6月6日）"
date: "2026-06-05T23:17"
category: "analysis"
summary: "ZK証明によるAI訓練検証が理論的に可能と実証。Anthropic Project Glasswing が15カ国150組織に拡大。"
tags: ["llm", "governance", "agents", "safety", "benchmark", "model-collapse", "cybersecurity"]
---

## 今日のハイライト

**ZK証明でフロンティアAIの訓練計算量を改ざんなく検証できると実証（6/5）**  
AI ガバナンスの最大の弱点だった「訓練計算量の自己申告依存」に対し、ゼロ知識証明（ZKP）による技術的な第三者検証が現実的に可能だとする論文が arxiv に登場した（[2606.05433](https://arxiv.org/abs/2606.05433)）。これまで規制当局はモデル提供者の自己報告に頼るしかなかったが、ZKP を使えば訓練内容を開示せずに計算量を証明できる。フロンティア AI 規制の執行力を根本から変えうる理論的突破口として注目される。

**Anthropic、Project Glasswing を15カ国・約150組織に拡大（6/2）**  
Anthropic が AI を活用した重要インフラのセキュリティ強化を目的とする「Project Glasswing」を大幅に拡張した。4月の発足時の約50組織から約150組織へ増加し、15カ国以上に参加国を広げた。参加資格の共通基準は「その組織への攻撃が1億人以上に影響しうる」こと。金融・エネルギー・医療・通信など複数の重要産業をカバーし、AI をサイバー防衛の前線に組み込む具体的な産業連携の先行事例として注目される。

---

## 企業動向

- **[Expanding Project Glasswing](https://www.anthropic.com/news/expanding-project-glasswing)** (Anthropic, 6/2) — AI を用いて世界の重要ソフトウェアを保護する協力枠組みを拡大。参加企業・機関は Anthropic から Claude ベースのコードレビュー・脆弱性発見ツールへのアクセスを得る。長期的には「AI によるすべてのソフトウェアの安全性向上」を目標として掲げる。

- **[How Endava is redesigning software delivery around AI agents](https://openai.com/index/endava-frontiers)** (OpenAI, 6/4) — IT サービス大手 Endava が OpenAI の AI エージェントをソフトウェア開発ライフサイクル全体に組み込み、設計・コーディング・テストの各工程を再設計した事例。ソフトウェア会社がエージェントを業務インフラの中核に置く潮流を体現するケーススタディ。

- **Google DeepMind / Hugging Face** — DeepMind ブログはパース不能（取得失敗）。Hugging Face トレンド API はレート制限（429）のため取得失敗。

---

## 注目論文

- **[Zero knowledge verification for frontier AI training is possible](https://arxiv.org/abs/2606.05433)** (cs.AI, 6/5) — フロンティア AI の訓練計算量を ZK 証明で第三者検証する枠組みを理論的に構成。ガバナンス規制が「累積計算量」を閾値に使うにも関わらず検証手段がなかった問題に対し、自己申告不要の暗号学的証明が可能であることを示す。AI 規制の実効性に直結する。

- **[Agents' Last Exam](https://arxiv.org/abs/2606.05405)** (cs.AI, 6/5) — 最新 AI システムが多数のベンチマークで高得点を記録しているにもかかわらず、経済的に意味ある専門職領域への実展開につながっていない乖離を分析。既存ベンチマークが実業務ではなく「試験的タスク」を測定していることが原因だとし、業務価値を直接評価するフレームワークを提案する。

- **[SentinelBench: A Benchmark for Long-Running Monitoring Agents](https://arxiv.org/abs/2606.05342)** (cs.AI, 6/5) — AI エージェントの評価が「連続行動・即時反応」を前提とするなか、実業務では「待機・監視」が適切な場面も多い。本ベンチマークは数分〜数時間以上にわたる長時間監視タスクにおける判断能力を測定する。現行エージェントが「何もしないことが正解」な状況でも行動し続ける問題を定量化。

- **[How Far Did They Go? The Persuasive Tactics of Covert LLM Agents in a Discontinued Field Experiment](https://arxiv.org/abs/2606.05256)** (cs.AI, 6/5) — Reddit の r/ChangeMyView で倫理的問題により中断された、秘密裏に AI エージェントを使って意見形成を誘導する実地実験のデータセットを事後分析。どの説得戦術が最も効果的だったかを解析。コンテキスト未開示の AI 説得エージェントが現実の場で示しうる影響力を実証データで示す。

- **[Epidemiology of Model Collapse: Modeling Synthetic Data Contamination via Bilayer SIR Dynamics](https://arxiv.org/abs/2606.05168)** (cs.CL, 6/5) — 合成データで訓練したモデルの劣化（モデルコラプス）を単一チェーンで扱う従来分析を拡張。複数モデルが相互に合成データを汚染し合う「交差汚染」を疫学の SIR モデルで定式化し、エコシステム全体での崩壊伝播ダイナミクスを記述。合成データ利用が広まるほどリスクが複合増加するメカニズムを示す。

---

## オープンソース・モデル

Hugging Face トレンド API がレート制限（HTTP 429）のため取得失敗。このセクションのデータは本号では提供できない。

---

## 所感

本日最も注目すべきは「AI 訓練の ZK 証明」だ。AI 規制の多くが訓練計算量を閾値とするにもかかわらず、検証手段の不在が規制の実効性を骨抜きにしていた——その根本的な問題に暗号学的解法が与えられたことの意義は大きい。一方、「Agents' Last Exam」と「SentinelBench」が揃って指摘するのは、現行のエージェント評価体系が「見せかけの能力」を測っているという構造的問題だ。ベンチマークと実世界の乖離が可視化されるほど、評価の刷新が急務だという共通認識がコミュニティで醸成されつつある。
