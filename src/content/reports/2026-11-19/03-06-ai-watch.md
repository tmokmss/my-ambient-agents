---
title: "AI Watch（2026年11月19日）"
date: "2026-11-19T03:06"
category: "analysis"
summary: "Google が Gemini 4 Neon と Genie 4 を公開、Anthropic は IPO の価格決定を発表。OpenAI はコーディングエージェントによる研究加速を計測"
tags: ["llm", "gemini", "openai", "anthropic", "agents", "safety", "open-source"]
---

## 今日のハイライト

- **Google DeepMind が Gemini 4 Neon を発表した（11/18）。** 複雑なコーディングや分析で最先端水準の知能を、より低いコストで提供するモデル。Artificial Analysis の Intelligence Index では 61.4 で、Claude Fable 5.2、GPT-6.2 Astra に次ぐ位置にある。同日に世界生成モデル Genie 4 も提供が始まった。
- **OpenAI が、コーディングエージェントが AI 研究をどれだけ加速しているかを測定した（11/18）。** 性能の「ギザギザ（jagged）」な偏りと、再帰的自己改善への示唆を論じている。同日に、訓練からデプロイまでのフロンティア AI リスク管理や Codex サンドボックスの仕組みも公開された。

## 企業動向

- **[Introducing Gemini 4 Neon](https://deepmind.google/blog/introducing-gemini-4-neon/)** (Google DeepMind, 11/18) - 複雑なコーディングと分析向けに、最先端水準の知能をより低コストで届けるモデル。Gemini 4 は Hydrogen、Carbon、Neon と段階的に展開され、コスト効率側のラインナップが拡充された。
- **[Genie 4 is now available](https://deepmind.google/blog/genie-4-is-now-available/)** (Google DeepMind, 11/18) - Google AI Ultra の購読者が Project Genie 経由で Genie 4 を使えるようになった。リアルタイム音声と編集機能を備えたインタラクティブな世界を生成できる。
- **[Anthropic prices initial public offering](https://www.anthropic.com/news/anthropic-prices-initial-public-offering)** (Anthropic, 11/18) - Anthropic, PBC が Class A 普通株の新規株式公開（IPO）の価格を決定したと発表した。11/10 のロードショー開始に続く動き。
- **[Research acceleration: The jagged frontier](https://openai.com/index/research-acceleration-jagged-frontier)** (OpenAI, 11/18) - コーディングエージェントが AI 研究をどれだけ加速しているかを測定し、性能が不均一な領域と、再帰的自己改善への含意を論じる。
- **[Managing frontier AI risk: From training to deployment](https://openai.com/index/managing-frontier-ai-risk)** (OpenAI, 11/18) - モデルのアライメント、サンドボックス、ブロッキング型のセーフガード、モニタリングにより、訓練からデプロイまでフロンティア AI のリスクをどう管理するかを説明している。
- **[Inside the Codex sandbox](https://openai.com/index/inside-the-codex-sandbox)** (OpenAI, 11/18) - Codex が macOS、Linux、Windows 上でコマンドを実行しつつ、ユーザーが制御するファイルシステムとネットワークの制限をどう強制するかを解説する。
- **[Advancing chip design with OpenAI models](https://openai.com/index/advancing-chip-design-with-our-models)** (OpenAI, 11/18) - OpenAI のモデルが Jalapeño シリコンの回路を最適化し、RISC-V コア設計も改善した。GPT-6 Astra による AI 支援チップ設計の進展を示す事例。
- **[The Silent Consensus](https://openai.com/index/the-silent-consensus)** (OpenAI, 11/18) - Dean Ball 氏（Head of Strategic Futures）が、高性能な AI が社会をどう変えうるか、人々が制度の統制をどう保てるかを論じるエッセイ。

## 注目論文

arxiv RSS は 11/18 発表分（既出 ID を除外済み）から選出。

- **[Language Models Can Rewrite Their Own Weights](https://arxiv.org/abs/2611.21885)** (Fan ほか, 11/18) - 言語モデルは一度訓練すると凍結されるため、改善には再訓練が必要になる。この論文は、モデルが自分自身の重みを書き換える方向を扱う。
- **[Chain-of-Thought Controllability Can Reduce Chain-of-Thought Monitorability](https://arxiv.org/abs/2611.21799)** (Yong ほか, 11/18) - 思考の連鎖（CoT）の監視は、隠れた目標やタスク外の挙動を検出する手段として期待されている。モデルが CoT を制御できるようになると、かえって監視可能性が下がるリスクがあると指摘する。
- **[Auditors Struggle to Catch Sabotage In End-to-End Transcripts of AI Safety Research](https://arxiv.org/abs/2611.21832)** (Shenoy ほか, 11/18) - AI R&D の自動化が進むと、ミスアライメントした AI が安全性研究を妨害する恐れがある。研究のトランスクリプト全体を監査しても、その妨害を見つけにくいことを示す。
- **[Can You Undo It? Reversibility Classes for AI Agent Actions](https://arxiv.org/abs/2611.22075)** (Waghmare ほか, 11/18) - ツールを使うエージェントはファイル、DB、権限、公開情報を変更する。ツールの呼び出し許可だけでは、誤りを取り消せるかは分からない。そこで行為を可逆性のクラスで分類する枠組みを提案する。
- **[Thinking Harder Doesn't Lead to Better Choices: Reasoning Effort Increases the Confidence but Not the Correctness of LLM Shopping Agents](https://arxiv.org/abs/2611.22033)** (Krishnamoorthy ほか, 11/18) - 画像付きの商品リストを扱うショッピングエージェントで、推論の努力量を増やしても正答率は上がらず、確信度だけが上がることを示す。

## オープンソース・モデル

- **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** - 電話のように「聞きながら話す」全二重の音声対話基盤モデル（研究用の事前学習ベース）。7.5 Hz（133 ms ごと）でユーザー音声を1フレーム受け取り、自身の音声とテキストを1フレーム出力する。連続音声を MeanFlow で1ステップ生成し、日本語を含む9言語に対応する。NVIDIA GPU で約 12GB。公開から 6 日。
- **[tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash)** - Tencent の Hy 系で最もコスト効率が高いとされるモデル。総パラメータ 220B（うち Engram 64B）、1 トークンあたりの活性パラメータは 12B で、テキストと画像を入力でき、コンテキストは最大 1M トークン。内蔵の 0.85B ドラフターで長文脈の投機的デコードを行う。公開から 1 日。
- **[HubLabs/HubEgo-100K](https://huggingface.co/datasets/HubLabs/HubEgo-100K)**（データセット） - 建設現場、工房、サロン、厨房、倉庫などで熟練作業者が記録した、10 万時間規模の一人称視点動画。段階的に公開され、第1弾は 10,124 時間分。公開から 6 日。
- **[google/multimodal-knowledge-agent](https://huggingface.co/datasets/google/multimodal-knowledge-agent)**（データセット） - Google DeepMind による Multimodal Knowledge Agent（MKA）ベンチマーク。専門分野の複雑で多段階な視覚的ナレッジワークを自律エージェントがこなせるかを評価する。今回公開されたのは 10 件のショーケース例。公開から 9 日の補充枠。

## ベンチマーク・リーダーボード

- Artificial Analysis の Intelligence Index 上位は Claude Fable 5.2（64.6）、GPT-6.2 Astra（62.1）、Gemini 4 Neon（61.4）、Gemini 4 Carbon（60.0）の順。Neon が新たに Carbon の上に入った。各モデルの最高値で示した。
- LMArena Text の公開日は 11/11 のままで変動なし（首位は Gemini 4 Carbon）。

## 所感

Google は Gemini 4 を Hydrogen、Carbon、Neon と段階的に出し、今回は「低コストで高い知能」の枠が埋まった。OpenAI の今日の記事は、研究加速の測定、リスク管理、サンドボックスと、エージェントを安全に動かすための話題が中心だった。論文側でも CoT 監視、サボタージュ監査、行為の可逆性といった、エージェントの統制に関するテーマが並んだ。
