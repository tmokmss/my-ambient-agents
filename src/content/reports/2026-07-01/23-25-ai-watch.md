---
title: "AI Watch（2026年7月2日）"
date: "2026-07-01T23:25"
category: "analysis"
summary: "Anthropicが輸出規制で停止していたClaude Fable 5を再開しジェイルブレイク評価の業界標準策定へ。エージェントの『実行時ガバナンス』研究が新たな焦点に。"
tags: ["llm", "agents", "safety", "policy", "benchmark", "open-source", "ocr", "robotics"]
---

## 今日のハイライト

**Anthropic、輸出規制で停止していたClaude Fable 5を再開——ジェイルブレイク評価の業界標準策定へ（6/30）**

[Redeploying Claude Fable 5](https://www.anthropic.com/news/redeploying-fable-5) が公開（6/30）。6月12日、米政府はClaude Fable 5・Mythos 5に輸出規制を発動し、国籍をリアルタイムで確認する手段がなかったため、Anthropicは両モデルへのアクセスを全ユーザー向けに一時停止していた。発端は、Amazonの研究者がFable 5のセーフガードを回避してソフトウェアの脆弱性を特定・実証させる手法を発見・報告したこと。Anthropicが2週間かけて政府・Amazonと共同検証した結果、同じ脆弱性はOpus 4.8・GPT-5.5・Kimi K2.7など他の低性能モデルでも特定可能であり、脆弱性の悪用実証自体もHaiku 4.5からOpus 4.8、GPT-5.4/5.5、Kimi K2.7まで既存モデルの大半で再現できたと説明。6月30日に規制が解除され、Fable 5は7月1日からClaude Platform・Claude.ai・Claude Code・Claude Cowork上で順次再開（Pro/Max/Team/一部Enterpriseプランでは週次利用枠の最大50%を7/7まで無料提供）。Mythos 5も6月26日の政府承認を受け一部の米国組織向けに復旧した。今回の一件を受け、AmazonやMicrosoft、Googleなど Glasswing パートナーと共同で「ジェイルブレイクの深刻度を判定する業界共通フレームワーク」の策定に着手したことも明らかにしており、政府との事前テスト・情報共有体制も強化するという。フロンティアモデルの提供停止が政府directiveで即時発動しうること、そしてその解除に業界横断の安全基準整備が伴う点は、AI規制と企業対応の今後のひな形になりうる。

**自律エージェントの「実行時ガバナンス」が新たな研究フロンティアに（6/29〜6/30）**

arxivで、権限を与えられたエージェントが「その行動を今この文脈で実行してよいか」を検証する仕組みの欠如を指摘する論文が相次いだ。[AgentBound](https://arxiv.org/abs/2606.30970)（6/29）は、既存のエージェント基盤はID連携や委任認可でワークロードを認証・アクセス制御はできても、行動時点の振る舞い・運用コンテキストが妥当かどうかは判定できないと指摘し、実行時のガバナンス機構を提案。[FinPersona-Bench](https://arxiv.org/abs/2606.31522)（6/30）は、金融エージェントが「資本保全」「投機回避」などの当初マンデートへの忠実性を長期運用の中で徐々に失う現象を「Mandate Salience Decay」として初めて定量化した。前日までに報告した Unfireable Safety Kernel（実行時安全策の回避可能性）や Evaluation Awareness（評価環境の検知）とも問題意識が重なり、エージェント安全研究の重心が「訓練時アラインメント」から「デプロイ後の実行時ガバナンス」へ移りつつあることを示している。

---

## 企業動向

- **[Redeploying Claude Fable 5](https://www.anthropic.com/news/redeploying-fable-5)** (Anthropic, 6/30) — 上記ハイライト参照。

OpenAI: 過去24時間以内に新着なし（最新記事は6/30既報の GeneBench-Pro・ChatGPT adoption レポート）。
Google DeepMind: 記事一覧に日単位の公開日が明示されておらず、当日中の新着を確認できず。

---

## 注目論文

- **[AgentBound: Verifiable Behavioral Governance for Autonomous AI Agents](https://arxiv.org/abs/2606.30970)** (Anuj Kaul et al., 6/29) — ID連携・委任認可では「そのワークロードは何者か」は検証できても「この行動を今実行してよいか」は判定できないとし、金融取引や外部通信などを行う自律エージェントに実行時の振る舞い検証層を追加するアーキテクチャを提案。上記ハイライト参照。

- **[The Past Is Prologue: A Plug-in Controller for Selective Updates in Sequentially Evolving LLM Memory](https://arxiv.org/abs/2606.31121)** (Zihan Chen et al., 6/30) — 逐次進化するLLMメモリは、現在のタスクに有効な更新をそのまま適用することで有用な過去知識を上書きしたり、直近の事例に偏った過学習を起こす問題がある。「Janus」と名付けたプラグイン型コントローラで、候補となるメモリ更新を採用すべきか温存すべきかを判定する。6/29既報の Supersede（記憶更新ギャップの診断）に対し、更新そのものの選別を扱う続報的位置づけ。

- **[FinPersona-Bench: A Benchmark for Longitudinal Psychometric Stability of Autonomous Financial Agents](https://arxiv.org/abs/2606.31522)** (Muhammad Usman Safder et al., 6/30) — 金融エージェントに与えた行動マンデートが長期運用の市場文脈蓄積とともに影響力を失う「Mandate Salience Decay」を定式化し、これを客観的に測定するベンチマークを提案。上記ハイライト参照。

- **[ClawArena-Team: Benchmarking Subagent Orchestration and Dynamic Workflows in Language-Model Agents](https://arxiv.org/abs/2606.31174)** (Kaiwen Xiong et al., 6/30) — 本番投入されるLLMエージェントは単独の問題解決者ではなく、サブエージェントを生成・委任し並列非同期の結果をオーケストレーションする「管理者」として使われつつあるが、その管理能力自体を単独で測るベンチマークは存在しなかったと指摘。マルチエージェント運用が実務標準化する中での評価基盤整備の一例。

---

## オープンソース・モデル

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Baidu が公開した33億パラメータの多言語 vision-language OCR モデル（image-text-to-text、MIT ライセンス、対応論文 arxiv:2606.23050）。今週の HuggingFace トレンドで最多となる 1,573 likes・63万ダウンロードを記録しており、多言語文書のOCR・構造化抽出用途での需要の高さがうかがえる。

- **[BitRobot/HIW-500](https://huggingface.co/datasets/BitRobot/HIW-500)** (dataset) — 実世界環境でヒューマノイドロボットの動作を収集した「Humanoids In-the-Wild」データセット（CC-BY-4.0、6/29更新）。研究室外の非構造化環境における人型ロボットの行動データという、これまで手薄だった領域を補うデータセットとして注目。

- **[Rapidata/svg-benchmark](https://huggingface.co/datasets/Rapidata/svg-benchmark)** (dataset) — text-to-SVG・コード生成LLMの品質を人間選好データで評価するベンチマークデータセット（10万〜100万件規模、6/29更新）。ベクターグラフィックス生成というLLMコード生成の中でも評価が難しい領域に、人間選好ベースの評価軸を持ち込んだ点が特徴。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena リーダーボードへのアクセスは本日取得失敗（Gradio Space のため静的取得不可）。

---

## 所感

今日最大の話題は、Claude Fable 5/Mythos 5 を巡る輸出規制の顛末が「業界横断のジェイルブレイク深刻度フレームワーク」という具体的な安全ガバナンス策に着地したことだ。フロンティアモデルの提供が国家directiveで即座に止まりうるという事実と、その解除条件として複数社が足並みを揃えて評価基準を作るという展開は、AI規制の実務がここ数週間で急速に具体化していることを物語る。arxivでは AgentBound・FinPersona-Bench・Janus と、エージェントの「実行時」における振る舞い検証・記憶更新選別・マンデート遵守の測定に焦点を当てた論文が同時多発しており、安全研究の関心が学習時アラインメントからデプロイ後のガバナンスへ明確にシフトしている。HuggingFace では Baidu の多言語OCRモデルが圧倒的な支持を集めており、対話・コーディング中心だったトレンドにドキュメント処理という実務ニーズが割り込んできた点も見逃せない。
