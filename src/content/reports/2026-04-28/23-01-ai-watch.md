---
title: "AI Watch（2026年4月29日）"
date: "2026-04-28T23:01"
category: "analysis"
summary: "Anthropic がクリエイティブツール5社（Blender/Adobe/Ableton等）との公式コネクターを4/28発表。OpenAI は AWS との本格統合を同日発表し、GPT・Codex が AWS 上で利用可能に。"
tags: ["llm", "anthropic", "openai", "creative", "agents", "benchmark", "safety", "open-source", "multimodal"]
---

## 今日のハイライト

**Anthropic が 4/28、クリエイティブ専門家向けコネクターを発表**——Blender・Autodesk・Adobe・Ableton・Splice といった業界標準ツールと直接連携する「Connectors」を公開。Claude がテキスト生成だけでなく 3D・映像・音楽・グラフィックデザインの実制作環境に入り込む形になる。「広告なし・ユーザーの利益最優先」宣言と組み合わさり、クリエイティブ産業への本格参入戦略の具体化として注目される。

**OpenAI が 4/28、AWS 上での全面展開を発表**——GPT シリーズ・Codex・Managed Agents が AWS 上でセキュアに利用可能になる統合を正式公開。Azure 以外の主要クラウドへの展開として、エンタープライズ顧客がインフラを選ばず OpenAI モデルを活用できる体制が整った。FedRAMP 取得（4/27）に続くエンタープライズ向け展開加速の流れと一致する。

---

## 企業動向

- **[Claude for Creative Work](https://www.anthropic.com/news/claude-for-creative-work)**（Anthropic, 4/28）— Blender・Autodesk・Adobe・Ableton・Splice との公式コネクターを公開。3Dモデリング・映像制作・DAW・音楽サンプルライブラリといったプロフェッショナルツールと直接連携し、Claude が制作ワークフローの中に組み込まれる形になる。クリエイティブ業界での AI 活用が「テキスト補助」から「制作環境への統合」に移行する節目となる発表であり、Anthropic がコンシューマー・クリエイター市場を本格的に射程に入れた戦略的転換とも読める。

- **[OpenAI models, Codex, and Managed Agents come to AWS](https://openai.com/index/openai-on-aws)**（OpenAI, 4/28）— Amazon Web Services 上で GPT モデル・Codex・Managed Agents を企業がセキュアに展開できる統合を発表。Azure に続く主要クラウドへの対応で、OpenAI の流通チャネルが一段と広がる。FedRAMP 取得と合わせて、規制産業・政府系顧客が Azure 以外のインフラでも OpenAI を本番利用できる環境が整った形。

- **[Our Principles](https://openai.com/index/our-principles)**（OpenAI, 4/26）— Sam Altman が AGI の恩恵を人類全体に届けるという使命を導く5つの原則を公開。近年の組織ガバナンスをめぐる議論を意識し、意思決定の透明性を高める試みとして位置付けられる。

---

## 注目論文

- **[Emergent Strategic Reasoning Risks in AI: A Taxonomy-Driven Evaluation Framework](https://arxiv.org/abs/2604.22119)**（複数著者）— 推論能力とデプロイ規模が増大するにつれ、LLM が「戦略的推論」を通じてリスクある行動（脱走・欺瞞・連合形成など）を取る可能性を分類・評価するフレームワークを提案。安全評価の共通語彙として機能することが期待される理論的貢献で、agentic AI の安全研究に新しい整理軸を与える。

- **[AgentSearchBench: A Benchmark for AI Agent Search in the Wild](https://arxiv.org/abs/2604.22436)**（複数著者）— AI エージェントエコシステムが複雑化する中、エージェントが実世界の「ワイルド」な環境で検索タスクをどう処理するかを評価するベンチマーク。制御された設定に偏る既存ベンチマークへのアンチテーゼとして、実運用に近い評価軸を提供する。

- **[Math Takes Two: A test for emergent mathematical reasoning in communication](https://arxiv.org/abs/2604.21935)**（複数著者）— 二者間のコミュニケーションを通じて数学的推論が「創発」するかを検証する評価設定を提案。単体モデルの数学能力だけでなく、複数エージェントが協調・対話することで生まれる推論の質を測る枠組みとして、マルチエージェント系の能力評価に新次元を加える。

- **[Source-Modality Monitoring in Vision-Language Models](https://arxiv.org/abs/2604.22038)**（複数著者）— VLM が「情報のソース（視覚か言語か）」を正確に追跡・区別できるかという新しい能力軸「ソース・モダリティ・モニタリング」を定義・評価。モデルが画像由来の情報とテキスト由来の情報を混同するパターンを定量化し、マルチモーダル推論の信頼性研究への新たな評価基準を提供する。

- **[Sound Agentic Science Requires Adversarial Experiments](https://arxiv.org/abs/2604.22080)**（複数著者）— LLM ベースのエージェントが科学データ分析に急速に採用される中で、エージェントの振る舞いを正しく評価するには「対抗的実験設計」が不可欠と主張。エージェントが誤った推論でも正解に辿り着く問題を防ぐため、反証可能な仮説をもとにした実験プロトコルの標準化を提言する。

---

## オープンソース・モデル

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**（233 likes）— 小米（Xiaomi）の MiMo シリーズ最新版。4/28 当日に公開された約1Tパラメータ規模の推論特化モデルで、コーディング・数学・論理推論での高性能を標榜。スマートフォンメーカーが本格的に LLM オープンソース開発をリードする一事例として、中国テック各社の AI 研究競争の激化を映す。

- **[webml-community/bonsai-ternary-webgpu](https://huggingface.co/spaces/webml-community/bonsai-ternary-webgpu)**（124 likes）— 1.58-bit 三値量子化（Ternary）モデルをブラウザ上の WebGPU で直接動作させるデモ。サーバーレスでブラウザ内 LLM 推論を実現する技術実証として注目され、プライバシー保護型・オフライン対応 AI アプリの新しいアーキテクチャを示す。エッジ推論の最前線を体験できる実装。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**（1,486 likes、1.5M DL）— 35B 総パラメータのうち実際に活性化するのは 3B という高効率 MoE 設計のマルチモーダルモデル。1.5M DL と普及が急速で、Qwen3.6 シリーズが MoE 設計のコミュニティ標準の一角を占めつつある。コスト効率と性能のバランスが評価されているモデル。

- **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)**（1,130 likes）— Moonshot AI が公開した大規模マルチモーダルモデル。1T 超のパラメータを持ちながら複数の推論プロバイダー（Novita での 98.7 トークン/秒）で高速実行が可能。ツール呼び出し・構造化出力に対応し、エージェント基盤としての実用性を重視した設計。

---

## 所感

本日の最大のトピックは Anthropic によるクリエイティブツール連携の発表だ。Blender・Adobe・Ableton といった業界標準ツールへの直接統合は、Claude を「テキストベースのアシスタント」から「制作パイプラインの一員」へと位置付け直すものであり、生成 AI が専門職のワークフローに深く組み込まれる次の段階を象徴する。同日、OpenAI が AWS 展開を発表したことで、両社はそれぞれ「クリエイティブ産業」と「クラウドインフラ」という異なる戦線で布石を打った形になる。arxiv では戦略的推論リスクの分類体系や VLM のモダリティ識別能力評価など、スケーリングの先にある「AI はどう振る舞うか」を精緻に問う研究が増えており、次の焦点が能力拡大から行動の信頼性評価へと移りつつあることを改めて感じる。
