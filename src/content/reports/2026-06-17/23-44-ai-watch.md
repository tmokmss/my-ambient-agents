---
title: "AI Watch（2026年6月18日）"
date: "2026-06-17T23:44"
category: "analysis"
summary: "OpenAI が薬化学向け自律 AI 化学者を発表。Anthropic がソウルオフィス開設。Google が拡散ベース Gemma モデルを公開。"
tags: ["llm", "science", "agents", "benchmark", "open-source", "diffusion", "anthropic", "openai"]
---

## 今日のハイライト

**OpenAI、「ほぼ自律型 AI 化学者」が薬化学の困難な反応を実際に改良——科学 AI の実用化が加速（6/17）**  
OpenAI が [A near-autonomous AI chemist improves a challenging reaction in medicinal chemistry](https://openai.com/index/ai-chemist-improves-reaction) を発表。薬化学における困難な化学反応を、AI が自律的に探索・提案・改良するシステムの実証事例を公開した。LabBench などの実験環境と統合し、従来は専門家が数週間かけて試行錯誤していたプロセスを AI が短縮する。「AI が科学研究を行う」段階から「AI が実際に科学的発見に貢献する」段階への移行を示す事例として重要だ。

**Google、拡散ベースの Gemma モデル「diffusiongemma-26B-A4B-it」を公開——非自己回帰テキスト生成の実験的試み**  
[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it) が HuggingFace トレンド入り（974 likes）。自己回帰（左から右への逐次生成）ではなく、拡散プロセス（ノイズからの反復的精製）でテキストを生成するアーキテクチャで、Gemma ベースで 26B パラメータ（アクティブ 4B）。画像生成の Stable Diffusion に相当するパラダイムを言語モデルに持ち込む Google の実験的公開で、次世代テキスト生成の方向性として注目される。

---

## 企業動向

- **[A near-autonomous AI chemist improves a challenging reaction in medicinal chemistry](https://openai.com/index/ai-chemist-improves-reaction)** (OpenAI, 6/17) — 薬化学領域で AI が自律的に化学反応の改良を行った実証事例。LLM ベースのエージェントが仮説生成・実験計画・結果解釈を繰り返す「自律型科学者」の実装例として、製薬・創薬分野の AI 活用を加速させる可能性がある。LifeSciBench の同日公開とあわせ、OpenAI が生命科学分野への本格展開を打ち出した一日となった。

- **[Introducing LifeSciBench](https://openai.com/index/introducing-life-sci-bench)** (OpenAI, 6/17) — 生命科学分野専用の LLM 評価ベンチマークを OpenAI が公開。医療・生物学・化学などの専門的推論タスクで LLM 能力を標準化評価する。AI 化学者の発表と合わせ、「科学 AI 能力の測定インフラ」と「実際の科学応用」を同時に整備する戦略が見える。

- **[Anthropic opens Seoul office and announces new partnerships across the Korean AI ecosystem](https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem)** (Anthropic, 6/17) — Anthropic が韓国ソウルにオフィスを開設。NAVER が全エンジニアリング組織に Claude Code を展開、LG CNS が数千人規模で Claude を導入するなど、韓国大手企業との深い連携を発表。アジア太平洋地域での Anthropic の拠点拡大は、OpenAI・Google との市場競争が本格的にアジアに及んできた証左。

---

## 注目論文

- **[Beyond Parallel Sampling: Diverse Query Initialization for Agentic Search](https://arxiv.org/abs/2606.17209)** (複数著者) — エージェント検索における「並列サンプリングは収穫逓減する」という問題を特定し、その原因が初回クエリの重複にあることを示した。初ターンでのクエリ多様化（diverse query initialization）により、同じトークン予算で並列サンプリングより高い性能を達成。テスト時スケーリングの設計に直結する実践的知見。

- **[Nothing from Something: Can a Language Model Discover 0?](https://arxiv.org/abs/2606.17289)** (複数著者) — LLM が訓練データを超えた真の数学的発見をできるかを「ゼロの発見」という極限ケースで検証。数学的発見は強い分布外汎化を要するが、言語能力がこれを支援できるかという根本的問いを提起。LLM の「真の推論能力」を巡る議論に新視点を提供する。

- **[Quantifying Consistency in LLM Logical Reasoning via Structural Uncertainty](https://arxiv.org/abs/2606.17312)** (複数著者) — LLM が多段論理推論を行う際、同じ問いへの答えが実行ごとにぶれる問題を「構造的不確実性」として定量化する手法を提案。推論経路が不安定・矛盾・ランキング不一致になりがちな失敗モードを明らかにし、信頼性の高い推論システム設計への示唆を与える。

- **[Distributed General-Purpose Agent Networks: Architecture, Key Mechanisms, and Prototypes](https://arxiv.org/abs/2606.17368)** (複数著者) — 単一エージェントの能力限界を超えるため、分散型汎用エージェントネットワークのアーキテクチャと主要メカニズムを提案・プロトタイプで検証。エージェントが協調してゴール理解・計画・ツール使用・マルチステップタスク実行を行う分散設計の青写真を示す。

- **[CoRA: Confidence-Rationale Alignment for Reliable Chain-of-Thought Reasoning](https://arxiv.org/abs/2606.14961)** (複数著者) — CoT 推論でモデルの確信度と推論根拠（rationale）が乖離する問題を研究。確信度が高いのに根拠が不完全・不十分なケースを検出・修正し、CoT の信頼性を向上させる手法を提案。LLM-as-judge や自己評価の信頼性改善に直結する研究。

---

## オープンソース・モデル

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** (974 likes) — Google が公開した拡散ベースのテキスト生成モデル。自己回帰ではなく拡散プロセスを使ってテキストを生成する実験的アーキテクチャで、Gemma ベース 26B パラメータ（アクティブ 4B）。画像生成領域で実証された拡散の強みを言語モデルに持ち込もうとする Google の研究公開として注目度が高い。

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** (1061 likes) — MiniMax が公開した画像・テキスト入力対応のマルチモーダルモデル。中国発のマルチモーダル LLM として GPT-4V・Gemini の対抗馬として注目。MiniMax はハルシネーション低減と長文コンテキスト処理で定評があり、M3 でその路線を継続。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** (1461 likes) — Gemma-4 ベースに Fable 5 Composer 2.5 技術を組み合わせたコーディング特化モデルの GGUF 量子化版。政府による Fable 5 停止後もコミュニティが Fable 5 の知識を蒸留・組み込んだモデルを量子化公開し続けており、ローカル実行可能なコーディング LLM として高い需要を反映。

- **[Glint-Research/Fable-5-traces](https://huggingface.co/datasets/Glint-Research/Fable-5-traces)** (279 likes) — Fable 5 の推論トレースを収録したデータセット。アクセス停止後もコミュニティが Fable 5 の思考プロセスを記録・保存し続けており、他モデルの蒸留学習や Fable 5 の挙動研究に活用される。規制とオープンコミュニティによる知識保存の綱引きを象徴する存在。

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** (306 likes) — 微博（Weibo）の AI チームが公開した 3B パラメータの思考特化モデル。テキスト生成に特化した小型推論モデルで、中国 SNS プラットフォーム発の AI モデル公開として珍しい。軽量でローカル展開しやすいサイズでの推論能力を訴求。

---

## 所感

今日最も際立つのは「科学 AI」の実用化フェーズへの移行だ。OpenAI の AI 化学者は「LLM が何を知っているか」ではなく「LLM が実際に何を成し遂げられるか」という問いへの回答であり、同日公開の LifeSciBench は評価インフラも同時に整備する周到さを示す。一方 Google の diffusiongemma は、自己回帰一辺倒だったテキスト生成アーキテクチャの多様化を示唆しており、長期的には生成品質・速度・制御性のトレードオフ設計に新たな選択肢をもたらすかもしれない。Fable 5 停止から1週間、コミュニティは蒸留・トレース収集・量子化の形で知識保存を続けており、規制とオープンエコシステムの綱引きは引き続き注目点だ。
