---
title: "AI Watch（2026年6月26日）"
date: "2026-06-25T23:24"
category: "analysis"
summary: "Gemini 3.5 Flash にコンピュータ使用が組み込み統合。OpenAI がエージェント変革報告書を公開。Wikipedia 編集が LLM の価値観を左右することが判明。"
tags: ["agents", "llm", "multimodal", "open-source", "mechanistic-interpretability", "diffusion-lm", "rlvr"]
---

## 今日のハイライト

**Gemini 3.5 Flash にコンピュータ使用が組み込み統合——エージェントが GUI を自律操作（6/24）**

[Introducing computer use in Gemini 3.5 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/) を Google DeepMind が公開。以前は Gemini 2.5 の独立モデルとしてのみ利用可能だったコンピュータ使用機能が、主力の Gemini 3.5 Flash に組み込みツールとして統合された。スクリーンショット解析→クリック・入力・スクロールの GUI 操作を自律実行でき、Gemini API と Gemini Enterprise Agent Platform から利用可能。プロンプトインジェクション対策としての敵対的訓練と、企業向けセーフガードシステムも合わせて提供。Claude の computer use に続き、主要フロンティアモデルで GUI エージェント機能が標準化されつつある。

**OpenAI、エージェントが仕事を変革する実態レポートを公開（6/25）**

[How agents are transforming work](https://openai.com/index/how-agents-are-transforming-work) が OpenAI から公開（6/25 02:00 GMT）。エージェント AI が実業務をどう変えているかを複数の企業・ユースケースを通じて包括的にまとめた報告書。自律型エージェントの実世界デプロイが加速する中、「エージェント変革」のナラティブを OpenAI が公式に確立しようとする戦略的文書として位置づけられる。

---

## 企業動向

- **[Introducing computer use in Gemini 3.5 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/)** (Google DeepMind, 6/24) — コンピュータ使用が Gemini 3.5 Flash のネイティブ機能に昇格。コンテキストを保ちながらマルチステップの GUI 操作タスクを実行できる。「defense-in-depth」アプローチとしてサンドボックス・人間確認・アクセス制御との組み合わせを推奨しており、安全設計にも踏み込んだリリース。

- **[How agents are transforming work](https://openai.com/index/how-agents-are-transforming-work)** (OpenAI, 6/25) — エージェントの実務適用がどの業種でどう進んでいるかを体系的に示す報告書。Codex・ChatGPT Enterprise 等の活用事例を束ね、「エージェントファースト」の組織設計をどう進めるかの指針を提示する。

**Anthropic**: 過去24時間以内の新着なし（直近の主要発表は Claude Tag, 6/23）

---

## 注目論文

- **[Small edits, large models: How Wikipedia advocacy shapes LLM values](https://arxiv.org/abs/2606.24890)** (複数著者, cs.CL) — Pro-Animal Wikipedians（PAW）という小規模ボランティアグループが Wikipedia に加えた125件の動物福祉関連編集が、主要 LLM の動物福祉に関する回答を統計的に有意に変化させることを実証。Wikipedia がほぼすべての主要 LLM 訓練データセットに含まれ、ウェブクロールより高い重みで扱われることを背景に、少数の組織的編集が AI の「価値観」を左右できることを初めて大規模に示した。LLM 訓練データの脆弱性と情報エコシステムへの影響として重要な研究。

- **[Perfect Detection, Failed Control: The Geometry of Knowing vs. Steering in Language Models](https://arxiv.org/abs/2606.24952)** (複数著者, cs.CL) — 機械的解釈可能性の中心的仮定「振る舞いを検出できれば制御できる」を幾何学的に検証。振る舞いを「検出する方向」と「制御する方向」が必ずしも一致しないことを示し、完璧な検出があっても制御が失敗しうることを実証。解釈可能性から安全性への橋渡しが自明でないことを明示した基礎研究。

- **[iLLaDA: Improved Large Language Diffusion Models](https://arxiv.org/abs/2606.25331)** (複数著者, cs.CL) — 自己回帰でなく拡散（マスクト拡散）で学習した 8B パラメータの言語モデル iLLaDA を発表。完全双方向アテンション、12T トークンでの事前訓練、SFT まで一貫してマスクト拡散目的関数で訓練。拡散型 LLM のスケールアップの実現可能性を示す重要な検証研究で、次世代言語モデルアーキテクチャの候補として注目。

- **[Heuresis: Search Strategies for Autonomous AI Research Agents](https://arxiv.org/abs/2606.25198)** (複数著者, cs.AI) — LLM エージェントが「性能・多様性・新規性」を同時に追求しながら自律的に機械学習研究を進めるフレームワーク Heuresis を提案。コードを書くだけでなく、アイデア空間の探索戦略自体を抽象化。自律的 AI 研究加速という大目標に向けた実践的アーキテクチャ提案。

- **[TRUSTMEM: Learning Trustworthy Memory Consolidation for LLM Agents](https://arxiv.org/abs/2606.25161)** (複数著者, cs.AI) — 長期記憶を持つ LLM エージェントの「書き込み・修正・削除」操作が誤りや幻覚を永続的システム障害として蓄積する問題に取り組む。重要情報の欠落・既存メモリの破損・根拠のない幻覚内容の混入を防ぐ信頼性の高いメモリ統合機構を学習する手法を提案。長期稼働エージェントの実用化における核心課題への直接対処。

---

## オープンソース・モデル

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** (likes: 2,471, DL: 67,107) — Z.ai（旧 Zhipu AI）が公開した最新フラッグシップモデル。HuggingFace 上で複数推論プロバイダー（Together, Novita, Fireworks, Featherless 等）で即時利用可能な状態でリリースされ、トップトレンドを獲得。Unsloth も量子化版 [GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF) を即日公開しており、コミュニティでの普及が急速に進んでいる。

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** (likes: 235, DL: 3,389) — Alibaba Qwen チームが公開したエージェント特化型 MoE モデル（総パラメータ 35B、アクティブ 3B）。「AgentWorld」の名称が示す通り、エージェントタスクへの特化を前面に出した設計。軽量なアクティブパラメータで高いエージェント性能を狙った Qwen の新たな方向性を示す。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** (likes: 2,361, DL: 495,813) — Gemma 4 12B をベースにコーディング特化ファインチューンした GGUF 形式モデル。Fable 5 の知識を組み込んだとされる「composer」シリーズの最新版で、ダウンロード数が50万件近くに達しておりコミュニティでの人気の高さを示す。ローカル実行でコーディング補助に使える実用的な選択肢。

---

## 所感

今週のトレンドは「エージェントの基盤整備」だ。Gemini 3.5 Flash がコンピュータ使用をネイティブ統合し、OpenAI がエージェント変革の実態をレポートとして公開した。かつては実験的機能だった GUI 操作が主要 LLM の標準装備になりつつある速度は注目に値する。論文面では Wikipedia 編集→LLM 価値観の連鎖という「間接的 AI 操作」の実証が衝撃的で、データサプライチェーンのセキュリティという新たな懸念領域を開いた。また機械的解釈可能性の「検出≠制御」問題は、安全研究の前提を問い直す根本的な発見であり、今後の引用数に注目したい。
