---
title: "AI Watch（2026年4月25日）"
date: "2026-04-24T22:49"
category: "analysis"
summary: "DeepSeek が V4 シリーズ（1.6T MoE）をプレビュー公開、Anthropic が NEC と日本最大規模の AI エンジニアリング組織構築で協業。"
tags: ["llm", "open-source", "moe", "agents", "benchmark", "safety", "memory", "reasoning", "multimodal", "japan"]
---

## 今日のハイライト

**DeepSeek、MoE 大型2モデル「V4-Pro」「V4-Flash」をプレビュー公開**（4/24）。DeepSeek-V4-Pro は 1.6T パラメータ（49B 活性化）、DeepSeek-V4-Flash は 284B パラメータ（13B 活性化）で、いずれも 32T トークン超で事前学習。ドメイン専門家を独立的に育成する2段階ポストトレーニングを採用し、HuggingFace に本日登場して V4-Pro が 2,400 いいね超と即座に注目を集めた。

**Anthropic と NEC が戦略的協業を発表——日本最大規模の AI エンジニアリング組織を共同構築**（4/24）。NEC の約 14,000 名の社員に Claude を展開し、金融・製造・地方自治体・サイバーセキュリティ向けの業界特化 AI プロダクトを共同開発。NEC は Anthropic 初の日本拠点グローバルパートナーに。

---

## 企業動向

- **[Anthropic and NEC collaborate to build Japan's largest AI engineering workforce](https://www.anthropic.com/news/anthropic-nec)**（Anthropic, 4/24）— NEC が Claude（Opus 4.7 含む）と Claude Code を NEC BluStellar Scenario に統合し、コンサルティング・AI ツール・セキュリティ・デジタルインフラを提供するプログラムへ組み込む。NEC はすでにセキュリティオペレーションセンターサービスに Claude を統合しており、高度化するサイバー脅威に対応。日本市場向けの AI 展開でグローバルな主要ベンダーとのパートナーシップが加速している。

- **[Introducing ChatGPT Images 2.0](https://openai.com/index/introducing-chatgpt-images-2-0)**（OpenAI, 4/21）— 改良されたテキストレンダリング・多言語サポート・高度な視覚推論を備えた最新画像生成モデルを ChatGPT に統合。gpt-image-1 後継として位置付けられており、文字入り画像のリアルな生成精度が大きく向上したとされる。

- **[Introducing OpenAI Privacy Filter](https://openai.com/index/introducing-openai-privacy-filter)**（OpenAI, 4/22）— テキスト中の個人識別情報（PII）を検出・編集するオープンウェイトモデルを公開。最高精度と称しており、コンプライアンス要件の強い企業や研究者がローカルで推論できる点が特徴。HuggingFace でも 680 いいね以上を獲得と好評。

Google DeepMind のブログは JavaScript レンダリングのため個別記事の公開日確認が困難。直近の新規投稿は未確認。

---

## 注目論文

- **[The Tool-Overuse Illusion: Why Does LLM Prefer External Tools over Internal Knowledge?](https://arxiv.org/abs/2604.19749)**（複数著者）— LLM が内部知識で十分に回答できる問題でも外部ツールを不必要に呼び出す「ツール乱用」現象を発見・定式化。ツール活用が推論の補完ではなく「回答回避」に転化するメカニズムを明らかにし、エージェント設計でのツール選択制御の重要性を提起。実運用エージェントのコスト・レイテンシ最適化に直結する知見。

- **[TRACES: Tagging Reasoning Steps for Adaptive Cost-Efficient Early-Stopping](https://arxiv.org/abs/2604.21057)**（複数著者）— 推論モデル（LRM）が生成する思考ステップにタグを付け、十分に確信が高まった時点で早期終了させるフレームワークを提案。問題が既に解けているのに推論を続けるオーバーシンク問題を軽減し、推論コストを大幅に削減しながら性能を維持。Test-Time Compute 効率化の実践的アプローチ。

- **[EngramaBench: Evaluating Long-Term Conversational Memory with Structured Graph Retrieval](https://arxiv.org/abs/2604.21229)**（複数著者）— 5つのペルソナ・100回以上のセッション・500以上のターンから成る長期会話記憶専用ベンチマークを公開。構造化グラフ検索を用いた記憶評価手法を導入し、パーソナルエージェントや継続的アシスタントの記憶能力を系統的に評価できる基盤を提供。

- **[From Data to Theory: Autonomous Large Language Model Agents for Materials Science](https://arxiv.org/abs/2604.19789)**（複数著者）— 材料科学における理論構築をエンドツーエンドで自律的に実行する LLM エージェントを提案。方程式形式の選択・コード生成・実行・理論の検証をすべて人間の介入なしに実施。科学エージェントが「実験の代替」から「理論生成」へと踏み込む新局面を示す研究。

- **[Slot Machines: How LLMs Keep Track of Multiple Entities](https://arxiv.org/abs/2604.21139)**（複数著者）— 複数のエンティティとその属性をコンテキスト内でどのトークン位置に紐付けて管理しているかを内部表現レベルで解析。単一トークンが複数の属性バインディングを保持できるかを実証し、LLM がエンティティ追跡に失敗する条件を特定。ファクト追跡エラーや会話ハルシネーションの根本メカニズムに迫る機械論的研究。

---

## オープンソース・モデル

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**（2,398 likes、4/24 更新）— 1.6T パラメータ・49B 活性化の超大型 MoE モデル。32T+ トークン事前学習＋SFT/RL によるドメイン専門家育成パイプラインを採用。DeepSeek シリーズの最上位として、チャイナ発オープンウェイトの最前線に位置付けられる。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**（607 likes、4/24 更新）— V4-Pro の軽量版で 284B パラメータ・13B 活性化。V4-Pro と同一アーキテクチャ設計を踏襲しつつ、推論コストを大幅に削減したエフィシエンシー重視のバリアント。エンタープライズ実用化のエントリーポイントとなる位置付け。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**（1,382 likes、4/24 更新）— Qwen 3.6 シリーズの MoE モデル。35B 総パラメータで 3B を活性化し、Transformers・vLLM・SGLang・KTransformers など主要フレームワーク対応を明示。本日更新が入り、Qwen3.6-27B（751 likes）と合わせてシリーズとして注目が集中。

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**（680 likes、4/22 公開）— OpenAI が公開した PII 検出・編集専用のオープンウェイトモデル。ローカル推論可能なコンプライアンスツールとして、医療・法律・金融など規制の厳しい分野でのデータ処理パイプラインへの組み込みが期待される。

- **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)**（592 likes）— Tencent によるマルチモーダルモデルの第2世代。Hunyuan シリーズの最新作として、テキスト・画像・動画の統合理解と生成を強化。中国大手テック各社による HF へのオープンウェイト投入の流れが続いている。

---

## 所感

今日の最大のサプライズは DeepSeek V4 シリーズの登場だ。1.6T パラメータという規模感は GPT-4 クラスを超える「第三世代 MoE」の到来を印象づけ、オープンウェイト陣営が再びフロンティアに手を届かせようとしていることを示す。一方、Anthropic-NEC の協業は日本市場でのエンタープライズ AI 展開という観点で象徴的な案件だ。単なる API 利用ではなく「業界特化プロダクトの共同開発」「セキュリティオペレーションへの統合」という深い関与であり、AI ベンダーが地域・業種ごとのパートナー網を構築する戦略が本格化していることを示している。arxiv では「ツール乱用」「エンティティ追跡」「早期終了」と、実運用エージェントの挙動制御に直接役立つ実践的研究が増えており、理論から実装への転換が着実に進んでいる。
