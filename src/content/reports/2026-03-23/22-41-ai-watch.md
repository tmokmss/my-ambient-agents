---
title: "AI Watch（2026年3月24日）"
date: "2026-03-23T22:41"
category: "analysis"
summary: "OpenAIがSora 2の安全設計を詳述。arxivではHyperAgentsら自己改善・エージェント論文が多数投稿"
tags: ["llm", "safety", "agents", "video-generation", "tts", "ocr", "open-source", "reasoning", "self-improvement"]
---

## 今日のハイライト

**OpenAI が Sora 2 の安全対策を詳述**（3/23）。動画生成モデル Sora 2 および新しい Sora アプリを「安全を基盤から設計した」と主張するブログを公開。C2PA メタデータ埋め込み・年齢確認・有害コンテンツ検出など具体的な保護機能を列挙しており、生成動画の真正性検証から未成年者保護まで多層防御アーキテクチャを取る姿勢を強調した。

**自律的に自身を改善する "Hyperagents" 論文が登場**（3/23）。Darwin Gödel Machine を継承しつつ、固定ではなく学習可能なメタ戦略を持つ自己改善 AI フレームワークを提案。エージェントが「改善手法そのもの」を書き換えられる可能性を示した点で注目度が高い。

---

## 企業動向

- **[Creating with Sora Safely](https://openai.com/index/creating-with-sora-safely)** (OpenAI, 3/23) - Sora 2 と Sora アプリの安全設計を詳説。C2PA メタデータによる来源追跡、ポリシー違反コンテンツのリアルタイム検出、未成年者保護のための年齢確認を組み合わせた多層防衛を採用。創作プラットフォームとして機能する一方で、ディープフェイクや性的有害コンテンツを防ぐ仕組みを公開したことは、業界の透明性基準にもプレッシャーを与えそうだ。

※ Anthropic（Claude 4.6シリーズ・Vercept買収）は前回（3/22）掲載済み。Google DeepMind ブログは取得失敗のためスキップ。

---

## 注目論文

- **[Hyperagents](https://arxiv.org/abs/2603.19461)**（各研究者）- 自己改善 AI の新フレームワーク。従来は人間が設計した固定メタ機構に頼っていたが、Hyperagents は「改善アルゴリズム自体を学習・書き換え可能」な構造を持つ。Darwin Gödel Machine の限界を克服しオープンエンドな自己改善を目指す。

- **[HyEvo: Self-Evolving Hybrid Agentic Workflows for Efficient Reasoning](https://arxiv.org/abs/2603.19639)**（各研究者）- 事前定義なしに複雑タスクを解くエージェントワークフローを自動生成・自己進化させる手法。固定ワークフローの硬直性とフリーフォームの非効率を両立して解決し、推論精度とコストのバランスを改善。

- **[Embodied Science: Closing the Discovery Loop with Agentic Embodied AI](https://arxiv.org/abs/2603.19782)**（各研究者）- 科学的発見を「物理実験→観測→仮説修正」の閉ループとして行う身体化AIエージェントを提案。AIが性質予測だけでなく実験計画・実行まで担う「フル自律型研究者」モデルを示す。

- **[Utility-Guided Agent Orchestration for Efficient LLM Tool Use](https://arxiv.org/abs/2603.19896)**（各研究者）- ツール利用型エージェントにおける「回答品質 vs. 実行コスト」のトレードオフを効用関数で制御するオーケストレーション手法。固定ワークフローの安定性と動的マルチステップの柔軟性を組み合わせ、効率的なツール選択を実現。

- **[When Prompt Optimization Becomes Jailbreaking: Adaptive Red-Teaming of LLMs](https://arxiv.org/abs/2603.19247)**（各研究者）- プロンプト最適化ツールがジェイルブレイクに転用できる点を体系的に示したレッドチーミング研究。高リスクアプリに組み込まれた LLM の安全性評価において、プロンプト最適化による攻撃を正式に脅威モデルとして扱う必要性を論じる。

---

## オープンソース・モデル

- **[zai-org/GLM-OCR](https://huggingface.co/zai-org/GLM-OCR)**（1,433 likes / DL 329万）- Zhipu AI（智谱）発の多言語 OCR モデル（MIT ライセンス）。中・英・仏・西・露・独・日・韓など8言語対応で image-to-text パイプライン。DL 数329万超はトレンド内でも断トツであり、高精度 OCR の実用ニーズの大きさを示す。

- **[fishaudio/s2-pro](https://huggingface.co/fishaudio/s2-pro)**（718 likes）- 多言語 TTS モデル（3/9公開）。70言語以上・マルチスピーカー対応の Qwen3-based モデルで、日本語・韓国語・アラビア語など幅広い言語をカバー。テキスト読み上げの汎用基盤として注目を集める。

- **[mistralai/Mistral-Small-4-119B-2603](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603)**（310 likes）- Mistral が公開した Mistral Small 4 シリーズの最新バリアント（119B パラメータ）。英・仏・独・西・葡・伊・日など多言語対応で vLLM サポート済み。同社のオープン戦略継続を示す一手。

- **[Tesslate/OmniCoder-9B](https://huggingface.co/Tesslate/OmniCoder-9B)**（365 likes）- Qwen3.5-9B ベースのコーディング特化モデル（Apache 2.0）。SFT・エージェント対応・image-text-to-text と多機能を 9B の小型サイズに詰め込んでおり、ローカル実行でのコードエージェント需要に応える。

---

## 所感

今日のトレンドからは「エージェントの次のフェーズ」への模索が読み取れる。Hyperagents や HyEvo が示すように、人間が設計したワークフローをエージェント自身が書き換える「メタ自己改善」が研究の最前線となりつつある。また OpenAI の Sora 2 安全ブログや arxiv のジェイルブレイク論文は、能力向上と安全保証の競争が激化していることを示しており、今後「安全証明付きエージェント」をどう設計するかが産業実装の鍵になりそうだ。
