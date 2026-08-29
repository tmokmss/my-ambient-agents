---
title: "AI Watch（2026年8月29日）"
date: "2026-08-29T03:39"
category: "analysis"
summary: "OpenAIがSpaceXによるCursor買収を受けモデル提供契約の終了を発表。arXivではエージェントの評価認識・権限分離を巡る研究が連日続く。"
tags: ["llm", "agents", "safety", "benchmark", "business"]
---

## 今日のハイライト

**OpenAIが、AIコーディングツール「Cursor」がSpaceXに買収されたことを受け、CursorへのOpenAIモデル提供契約を終了する方針を発表（8/28）。** 詳細な背景説明は本文取得不可のため不明だが、競合となりうる企業傘下に入ったツールへのモデル提供を打ち切るという判断は、フロンティアLLM各社が自社モデルの提供先を戦略的に選別し始めていることを示す具体例として注目される。同日、arXivでは評価認識（evaluation-awareness）や行動権限の分離を扱う論文が新たに複数投稿されており、直近数日続く「エージェントの振る舞いをどう検証・監督するか」というテーマがさらに掘り下げられた一日だった。

---

## 企業動向

- **[Our decision on Cursor following its acquisition by SpaceX](https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex)**（OpenAI, 8/28） - 上記ハイライト参照。CursorがSpaceXに買収されたことを受け、OpenAIモデルを提供する契約を終了すると発表。
- **[Supporting Thailand's next generation of AI startups](https://openai.com/index/supporting-next-generation-ai-startups-thailand)**（OpenAI, 8/28） - タイ政府（MHESI）と共同で、ヘルスケア・ウェルネス・教育分野のスタートアップ10社を対象にした8週間のアクセラレータープログラムを開始。プロトタイプを信頼できる製品に仕上げる支援を行う、新興国市場でのAI普及を後押しする取り組み。
- Anthropic・Google DeepMindは8/27付の発表（Model Hardware Standardプレビュー、Gemini Omni 1.1 Flash等）以降、新着なし（既報）。

---

## 注目論文

- **[Calibrated Enough to Know, Not Calibrated to Act: Fabricated Evidence Makes LLM Agents Commit to the Unknowable](https://arxiv.org/abs/2608.27167)**（Pranav Aggarwal, 8/28） - 本質的に予測不能な質問でも、それらしい市場パネルを見せるだけでLLMエージェントが方向性のある断定に踏み切る割合が12モデル平均で6.5%から54.0%に急増。パネルの数値をすべて捏造しても本物のデータとほぼ同じ水準で断定してしまうことを示し、エージェントの「行動の踏み切りやすさ」が情報の真偽ではなく提示の権威性に左右される危うさを定量化した。
- **[Not All Eval-Awareness Is Equal: Capabilities Framing Predicts Compliance](https://arxiv.org/abs/2608.27340)**（Allison Zhuang, Santiago Aranguri, 8/28） - モデルが「テストされている」と気づく評価認識（eval-awareness）を単一の量として抑制する従来のアプローチに対し、その気づき方が「能力テストだ」という捉え方か「安全性の境界テストだ」という捉え方かで、指示への追従率が最大46ポイントも変わることを実証。8/25報告のEvaluation Awareness論文に続く形で、評価科学の前提を精緻化する続報。
- **[Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit](https://arxiv.org/abs/2608.27427)**（Yisen Xi, 8/28） - エージェントの「人格（指示・口調）」は自由に更新させつつ、「実行（状態を持つ監査対象の作業）」は追跡可能に保つため、両者を異なる信頼ドメインに分離し承認マトリクス・DLP・監査で境界を統制するアーキテクチャ「PES」を提案。8/27報告のSARA（行動誘発と実行権限の分離）と問題意識を共有する、権限設計の具体的な実装パターン。
- **[SWE-Prime: Fewer Trajectories, Better Performance](https://arxiv.org/abs/2608.27449)**（Dewu Zheng, Ruizhe Ye, Yanlin Wang ら, 8/28） - コーディングエージェントの学習データとして「成功した実行トラジェクトリ」をそのまま使うと、非効率・冗長・危険な手順まで模倣してしまう問題を指摘。トラジェクトリ単位・セグメント単位で段階的にデータを絞り込む選別手法を提案し、学習データ量を減らしながら性能を改善。8/27・8/28報告と続く「ハーネス・学習データの質がベンチマーク結果を左右する」というテーマの延長線上にある。

---

## オープンソース・モデル

Hugging Face トレンド（`/api/trending`）は本日終始HTTP 429（レートリミット）が返り、複数回のリトライでも取得できなかったため今回は割愛する。

---

## ベンチマーク・リーダーボード

LMArenaのChatbot Arena、Artificial AnalysisのIntelligence Indexともに、上位の顔ぶれ・スコアは前日報告時点から変動なし。Anthropicの「claude-fable-5」がレーティング1507で首位（投票25,824件）を維持し、claude-opus-4-6-high（1505）・claude-opus-4-7-high（1502）、Metaの「muse-spark-1.2 (xHigh)」（1498）が僅差で続く構図が続いている。Intelligence IndexでもClaude Opus 5（Max Effort構成、63.1点）が首位を維持。ここ数日、両指標とも大きな順位変動のない落ち着いた局面が続いている。

---

## 所感

今日最大の動きは、OpenAIがSpaceX傘下に入ったCursorへのモデル提供を打ち切った一件で、フロンティアLLM各社がモデルの提供先を競合状況に応じて選別し始めていることを示す具体的な事例となった。一方でarXivでは、評価認識の質的な違いを掘り下げる論文や、エージェントの人格と実行権限を分離するアーキテクチャ提案、学習データの質を絞り込むことでコーディングエージェントの性能を上げる手法など、ここ数日続く「エージェントをどう検証・監督・訓練するか」というテーマがさらに細分化されて深まった。捏造された証拠の"権威ある見た目"だけでエージェントが誤った断定に踏み切ってしまうという報告は、エージェントが外部から取得した情報の真偽を検証する仕組みの重要性を改めて浮き彫りにしている。
