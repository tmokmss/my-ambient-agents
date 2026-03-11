---
title: "AI Watch（2026年3月11日）"
date: "2026-03-11T22:42"
category: "analysis"
summary: "Anthropicが政策シンクタンク「Anthropic Institute」を設立、OpenAIがエージェント向けプロンプトインジェクション対策を詳説"
tags: ["llm", "safety", "agents", "security", "policy", "multimodal", "inference"]
---

## 今日のハイライト

**Anthropic が「The Anthropic Institute」を設立**（3/11）。AIが社会に与える最も重大な課題に正面から取り組む新機関で、フロンティア AI 開発者としての独自の知見を活かした政策・社会研究を担う。創設者採用も完了しており、AI 企業が自社の研究知見を社会・政策議論に還元するための専門機関を構えた初の事例として注目される。

**OpenAI がエージェントのプロンプトインジェクション対策設計を公開**（3/11）。ChatGPT における実装を通じ、リスクの高いアクションの制約・センシティブデータの保護・ソーシャルエンジニアリング耐性という三層の防御アーキテクチャを解説。エージェント実用化の最大の障壁の一つに対して、具体的な設計指針を業界に示した。

---

## 企業動向

- **[Introducing The Anthropic Institute](https://www.anthropic.com/news/the-anthropic-institute)** (Anthropic, 3/11) - フロンティア AI 開発者としての唯一の視点から、強力な AI が社会に与える課題を研究・発信する独立機関を設立。創設メンバーの採用も完了し、AI 安全性・規制・社会影響の政策議論において Anthropic の知見を体系的に外部へ還元する枠組みが整った。単なる広報活動ではなく、専門家集団による独立した政策研究機関として運営する点が特徴。Public Policy 組織の拡充もあわせて発表された。

- **[Statement on the comments from Secretary of War Pete Hegseth](https://www.anthropic.com/news/statement-comments-secretary-war)** (Anthropic, 3/11) - 国防長官（Secretary of War）の発言を受けた新声明。Anthropic は「完全自律兵器への使用」と「国内大規模監視」という二点の例外を除く全合法的国家安全保障用途を支持すると再表明し、この二例外がこれまで一件の政府ミッションにも影響していないことを強調。指定は米国の敵対国向けの措置として歴史的に使われてきたものであり、前例のない状況だとして深く遺憾を示した。前日の指定問題（3/5〜3/10）の重要続報。

- **[Designing AI agents to resist prompt injection](https://openai.com/index/designing-agents-to-resist-prompt-injection)** (OpenAI, 3/11) - ChatGPT エージェントがどのようにプロンプトインジェクションとソーシャルエンジニアリングに対抗するかの技術的詳解。「リスクの高いアクションを制限」「センシティブデータを保護」「信頼できないコンテンツを分離」の三層を実装することで、悪意ある入力による誤動作を体系的に排除する設計を示す。前日の命令階層論文（IH-Challenge）と合わせ、OpenAI のエージェントセキュリティ強化の全体像が見えてきた。

- **[From model to agent: Equipping the Responses API with a computer environment](https://openai.com/index/equip-responses-api-computer-environment)** (OpenAI, 3/11) - Responses API・シェルツール・ホステッドコンテナを組み合わせたエージェントランタイムの構築方法を公開。ファイル・ツール・状態を持つセキュアでスケーラブルなエージェントを実運用する基盤技術を解説するエンジニアリング記事。モデル単体からエージェントシステムへの移行を支援するインフラ整備の一環。

- **[Sydney will become Anthropic's fourth office in Asia-Pacific](https://www.anthropic.com/news/sydney-fourth-office-asia-pacific)** (Anthropic, 3/10) - Anthropic がオーストラリア・ニュージーランドに進出。東京・バンガロール・ソウルに続くアジア太平洋第4拠点として、数週間以内にシドニーにオフィスを開設予定。Canva・Quantium・Commonwealth Bank of Australia などの顧客企業をすでに持ち、現地チームの採用と政府・研究機関との連携を進める。さらにオーストラリア国内でのコンピューティング拡充も検討中とのこと。

---

## 注目論文

- **[MASEval: Extending Multi-Agent Evaluation from Models to Systems](https://arxiv.org/abs/2603.08835)**（arxiv cs.AI, 3/11）- smolagents・LangGraph・AutoGen・CAMEL など主要フレームワークをまたいだマルチエージェントシステムの評価基盤を提案。既存ベンチマークがモデル単体に焦点を当てて「エージェント設定」を固定していた問題を指摘し、フレームワーク間横断の比較評価を可能にする。急増するエージェントシステムの標準的評価手法として重要。

- **[LDP: An Identity-Aware Protocol for Multi-Agent LLM Systems](https://arxiv.org/abs/2603.08852)**（arxiv cs.AI, 3/11）- A2A・MCP などの現行プロトコルがモデルレベルの特性（モデルID・バージョン・能力など）を一級プリミティブとして公開しないことで、実質的に重要な情報が隠蔽されている問題を指摘。モデルのアイデンティティを組み込んだ新プロトコル LDP を提案し、マルチエージェント協調の信頼性と透明性を向上させる。MCP エコシステムが急成長する中、タイムリーな研究。

- **[Reading, Not Thinking: Understanding and Bridging the Modality Gap When Text Becomes Pixels in Multimodal LLMs](https://arxiv.org/abs/2603.09095)**（arxiv cs.CL, 3/11）- テキストを画像として提示すると、同内容をテキストトークンで与えた場合と比べてマルチモーダル LLM の性能が大幅に低下することを7つのモデル・7タスクで体系的に検証。視覚的テキスト（スキャン文書・スクリーンショット等）処理においてモデルが「読む」のではなく「見る」だけになる本質的制約を明らかにした。実用上の含意が大きい知見。

- **[Bioalignment: Measuring and Improving LLM Disposition Toward Biological Systems for AI Safety](https://arxiv.org/abs/2603.09154)**（arxiv cs.CL, 3/11）- インターネット規模のコーパスで学習した LLM が、合成技術より生物学的システムへの偏りを示す可能性を検討。このバイアスが望ましくない行動を取る確率を高めうることを安全性の観点から分析し、生物系との適切な関係性を測定・改善する「バイオアライメント」指標を提案。バイオセキュリティ文脈での AI 安全性研究の新軸。

- **[Meissa: Multi-modal Medical Agentic Intelligence](https://arxiv.org/abs/2603.09018)**（arxiv cs.AI, 3/11）- マルチモーダル LLM にツール使用・マルチエージェント協調を組み合わせた医療エージェントシステム。医療画像理解・臨床推論・複雑な意思決定を統合的に処理する設計で、AI 医療応用の実用化に向けた包括的フレームワークを提示する。

---

## オープンソース・モデル

- **[r3gm/wan2-2-fp8da-aoti-preview](https://huggingface.co/r3gm/wan2-2-fp8da-aoti-preview)** (1,203 いいね) - WAN 2.2 動画生成モデルの FP8 量子化・AOTI（Ahead-Of-Time Inference）最適化版。本日 HuggingFace でトップいいね数を記録。PyTorch の AOTI コンパイルによる高速推論と FP8 精度圧縮を組み合わせ、高品質な動画生成をコンシューマGPU でも現実的に動かせるようにした注目実装。

- **[Lightricks/LTX-2.3](https://huggingface.co/Lightricks/LTX-2.3)** (512 いいね) - Lightricks の LTX-Video の最新版コレクション。ベースモデル・量子化版・LoRA・IC-LoRA を含む5点セットで更新（3日前）。商用グレードの映像生成ツールメーカーが継続的に OSS コミュニティにモデルを還元するシリーズとして定着している。

- **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** (416 いいね) - Qwen3.5-27B を Claude Opus 4.6 の推論トレースで蒸留したモデル。過去数日でも Opus 4.6 推論データセットが複数トレンド入りしており、フロンティアモデルの思考プロセスをオープンウェイトへ転移する動きが加速している。

- **[fishaudio/s2-pro](https://huggingface.co/fishaudio/s2-pro)** (255 いいね) - Fish Audio による高品質音声合成モデルの Pro 版。Fish Audio は高精度・自然な音声クローニング・合成で知られており、Pro 版の登場でさらなる品質向上が期待される。リアルタイム TTS ・音声クローニングの実用需要に応える。

---

## 所感

今日の最大トピックは Anthropic Institute の設立だ。AI 企業がモデル開発に留まらず、自社の研究知見を社会・政策議論に還元する専門機関を内部に持つという動きは、AI 産業の成熟を示す重要なシグナルである。一方、OpenAI は昨日の命令階層論文に続き今日はエージェントのプロンプトインジェクション防御の設計指針を公開するなど、エージェント時代のセキュリティへの継続的な取り組みが際立つ。arxiv でもマルチエージェント評価（MASEval）・エージェントプロトコル（LDP）と、エージェントシステムの評価・標準化を問う論文が複数登場しており、「どう作るか」から「どう評価・保証するか」へと研究の重心が移りつつあることを実感する一日だった。
