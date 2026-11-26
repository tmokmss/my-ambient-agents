---
title: "AI Watch（2026年11月26日）"
date: "2026-11-26T04:10"
category: "analysis"
summary: "新着は少なめ。DeepMind の質量分析スキル、Ai2 の研究者調査、エージェント攻撃・訓練の論文、医療特化 MoE など"
tags: ["llm", "agents", "science", "safety", "open-source"]
---

## 今日のハイライト

- **新着の大きな発表は少ない日。** 過去24時間の Tier 1 の新着は、DeepMind の Mass Spec Skills for Google Antigravity（11/24）のみ。OpenAI の 11/24 分（GPT-6 のタンパク質設計、Astra での系外惑星探索など）と DeepMind の量子アルゴリズム記事（11/23）は前回までのレポートで掲載済みのため省いた。
- **科学研究向けのエージェント活用が続いている。** DeepMind は質量スペクトルの解釈をスキルとして Antigravity に載せ、Ai2 は科学者がエージェントにどこまで任せるかを調べた。

## 企業動向

- **[From spectrum to structure: Identifying molecules with Mass Spec Skills for Google Antigravity](https://deepmind.google/blog/interpreting-mass-spectra-with-google-antigravity/)** (Google DeepMind, 11/24) - タンデム質量スペクトルを解釈する科学者を支援する「Mass Spec Skills」を Google Antigravity 向けに公開。RSS の説明は1文で、詳細は未確認。質量スペクトルからの分子同定をエージェントのスキルとして切り出す形で、科学分野の専門知識をエージェントに追加する流れの一例。
- **[Where scientists draw the line on AI agents](https://huggingface.co/blog/allenai/where-scientists-draw-the-line-on-ai-agents)** (Ai2, 11/25, Hugging Face Blog) - 科学者が AI エージェントにどこまで任せるかを扱った記事。取得できたのはタイトルのみで、調査の中身は確認できていない。
- Tier 1 の新着が少なかったため Tier 2 を確認した。Mistral の最新記事は 11/5 で対象外。DeepSeek は sitemap から記事を抽出できなかった。Kimi の最新は 10/24（Kimi K3.1 Pro）で対象外。Qwen の新規リポジトリは過去14日になかった。

## 注目論文

arxiv RSS（11/25 バッチ）から選出。

- **[ContextLure: Exploiting Benign Conversation History for Indirect Prompt Injection](https://arxiv.org/abs/2611.31424)** (Han ほか, 11/25) - エージェントが保持する無害な会話履歴（タスクの結果やユーザーの関心事）を手がかりにして、間接プロンプトインジェクションを仕掛ける攻撃。長期対話を持つエージェントで、履歴そのものが攻撃面になりうることを示す。
- **[Learning What vs. Learning How: Decomposing Task and Interface Competence in Agentic Training](https://arxiv.org/abs/2611.31427)** (Lee ほか, 11/25) - エージェントの失敗を、タスクの知識不足と、ハーネス（システムプロンプト・行動形式・フィードバック）に合わせた出力の失敗に切り分けて訓練を分析する。ハーネス適応が独立した能力だと見る点が新しい。
- **[Taxi: Analyzing Agents at (Real) Scale](https://arxiv.org/abs/2611.31457)** (Dar, 11/25) - 数百万ステップ規模のエージェント軌跡をデバッグ・クラスタリング・監視するシステムの技術報告。エージェントの運用では軌跡の大量分析が必要になる。
- **[Evaluating Frontier-Model Agent Skills with Open-Weight Models in a Science Gateway](https://arxiv.org/abs/2611.31480)** (Thareja ほか, 11/25) - 科学ワークフロー管理システムの記述を題材に、フロンティアモデル向けに作られたエージェントスキルをオープンウェイトモデルで評価する。スキルがモデル間で移植できるかという実務上の問いに答える。

## オープンソース・モデル

- **[inclusionAI/LingSante-3.1-flash](https://huggingface.co/inclusionAI/LingSante-3.1-flash)** (公開から6日) - Ling-3.1-flash をベースにした医療特化のオープンウェイト MoE。総 560B・活性 25B・1M トークン文脈で、複雑な医療推論、医療コミュニケーション、エビデンスに基づく調査、長期の医療タスクを統合して扱うとする。
- **[xlangai/RoboWild](https://huggingface.co/datasets/xlangai/RoboWild)**（データセット、公開から5日） - ロボットが 38 の模擬環境でタスクを行うベンチマーク RoboWild が読み込む、OpenUSD のシーン・物体・ロボットモデル・マテリアルを収録。Isaac Lab で動かす。
- **[Digitaluz/uzbek-language-corpus](https://huggingface.co/datasets/Digitaluz/uzbek-language-corpus)**（データセット、公開から7日） - 言語モデル事前学習向けのウズベク語コーパスで、5,637,052 文書・約 60 億語。ラテン文字とキリル文字の両方を含み、OCR の書籍・新聞・公文書などを集めている。
- **[ccore/ThreeJS-3D-Scenes-v2](https://huggingface.co/datasets/ccore/ThreeJS-3D-Scenes-v2)**（データセット、公開から8日） - 50 分野・3,445 件の Three.js シーン例（ボクセルシーン 1,431 件を含む）で、プロンプト、推論トレース、HTML/JavaScript の応答、レンダリング参照画像を収録。

## ベンチマーク・リーダーボード

- LMArena のデータセット取得は HTTP 503 で失敗したため、今回は取得失敗。
- Artificial Analysis の Intelligence Index 上位は、Claude Fable 5.2（Anthropic）64.8、GPT-6.2 Astra（OpenAI）62.2、Gemini 4 Neon（Google）61.5、Gemini 4 Carbon（Google）60.1、Claude Opus 5.5（Anthropic）59.1。同じモデル名が設定違いで複数行に出るため、各モデルの最高値のみ記した。

## 所感

新着が少ない日でも、科学研究へのエージェント適用（質量分析、研究者の受容度）と、エージェントの攻撃・評価・運用基盤という二つの流れは続いている。論文側では、会話履歴が攻撃面になる、ハーネス適応が独立した能力になる、といった「エージェントを現場に出すと見えてくる問題」が目立った。オープンモデルでは、医療のようなドメイン特化の大型 MoE が出てきている。
