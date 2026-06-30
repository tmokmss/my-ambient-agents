---
title: "AI Watch（2026年7月1日）"
date: "2026-06-30T23:24"
category: "analysis"
summary: "Anthropic がClaude Sonnet 5とClaude Scienceを同日発表。OpenAIもGeneBench-Proで科学領域に参入し、両社の競合軸が「科学特化AI」に拡大。"
tags: ["llm", "agents", "science", "safety", "benchmark", "open-source", "world-model", "privacy"]
---

## 今日のハイライト

**Anthropic、「最もエージェント的なSonnet」Claude Sonnet 5を発表（6/30）**

[Introducing Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5) が公開（6/30）。前世代 Sonnet 4.6 から推論・ツール使用・コーディング・知識労働を大幅に改善し、性能を Opus 4.8 に近づけながら価格を抑えた点が最大の特徴。BrowseComp（エージェント検索）・OSWorld-Verified（コンピュータ使用）の評価では、中程度のエフォートレベルで Sonnet 4.6 を一貫して上回り、高エフォートでは一部タスクで Opus 4.8 に匹敵する。安全性評価でも望ましくない挙動の発生率が Sonnet 4.6 より低下し、サイバーセキュリティ関連タスクの遂行能力は Opus 系より明確に低いという報告がなされている。Free・Pro プランのデフォルトモデルとなり、8月31日まで入力 $2 / 出力 $10（per Mtok）の導入価格を提供。「Sonnetクラスでエージェントを安く回せる」という打ち出し方は、エージェント運用コストの低下競争が新たな局面に入ったことを示す。

**Anthropic と OpenAI が同日に「科学特化AI」を投入——Claude Science と GeneBench-Pro（6/30）**

Anthropic は研究者向けAIワークベンチ [Claude Science](https://www.anthropic.com/news/claude-science-ai-workbench) をベータ公開。PubMed・Jupyter・R・クラスタ端末など分断された研究ツール群を単一環境に統合し、ゲノミクス・単一細胞解析・プロテオミクス・構造生物学・ケミインフォマティクス向けに60以上のスキル・コネクタを備える。生成された図表・論文原稿には監査可能な履歴が付き、引用・計算をチェックするレビュアーエージェントも搭載。同日 OpenAI も、ゲノミクス・生物学領域の AI 性能を測る新ベンチマーク「[Introducing GeneBench-Pro](https://openai.com/index/introducing-genebench-pro)」を発表しており、フロンティア2社が示し合わせたように科学領域へ同時参入した形となった。汎用チャット競争から「専門領域でのAI活用」競争へ、フロンティアラボの主戦場が広がりつつある。

---

## 企業動向

- **[Introducing Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5)** (Anthropic, 6/30) — 上記ハイライト参照。Claude Code・Claude Platform からも `claude-sonnet-5` として利用可能。

- **[Claude Science, an AI workbench for scientists, is now available](https://www.anthropic.com/news/claude-science-ai-workbench)** (Anthropic, 6/30) — 上記ハイライト参照。Pro・Max・Team・Enterprise ユーザー向けにベータ提供開始。

- **[Introducing GeneBench-Pro](https://openai.com/index/introducing-genebench-pro)** (OpenAI, 6/30) — 実世界の複雑なゲノミクス・生物学データセットを用いて AI の科学的推論能力を測定する新ベンチマーク。Claude Science と同日発表となり、生命科学領域での評価基盤整備が競合軸に浮上していることを象徴する。

- **[How ChatGPT adoption has expanded](https://openai.com/index/how-chatgpt-adoption-has-expanded)** (OpenAI, 6/30) — OpenAI Signals の新データに基づき、ChatGPT のグローバルな利用拡大状況（利用頻度の増加、新機能の探索、地域・言語別の成長）を報告。プロダクト浸透度を定量的に開示する継続的な取り組み。

Google DeepMind: 過去4日以内に新着なし（直近の主要記事は computer use in Gemini 3.5 Flash、6/24 既報）。

---

## 注目論文

- **[Agent-Native Immune System: Architecture, Taxonomy, and Engineering](https://arxiv.org/abs/2606.28270)** (Bo Shen et al., 6/30) — 永続的記憶・ツール利用・マルチエージェント協調を備えた自律エージェントは脅威範囲を大きく広げているが、境界防御や訓練時アラインメントはエージェントの推論ループの「外側」に留まり、メモリポイズニングなどのランタイム乗っ取りに脆弱だと指摘。エージェント自身に組み込む「免疫システム」的アーキテクチャを提案する。前日の Unfireable Safety Kernel（6/27 既報）と同じ問題意識を異なるアプローチで発展させた論文。

- **[Agentic AI-Powered Re-Identification: An Emerging, Scalable Threat to Mobility Microdata Privacy](https://arxiv.org/abs/2606.27936)** (Oscar Thees et al., 6/30) — 位置情報ブローカーが収集する移動履歴データは少数の時空間ポイントから個人特定が可能だが、従来は熟練アナリストの手作業が必要で攻撃規模が制限されていた。AI エージェントがこの再識別攻撃を自動化・スケール可能にする新たな脅威であることを実証。プライバシー保護データ公開の前提を揺るがす実証研究。

- **[Govern the Repository, Not the Agent: Measuring Ecosystem-Level Risk in AI-Native Software](https://arxiv.org/abs/2606.28235)** (Daniel Russo, 6/30) — 自律コーディングエージェントは個別タスクのベンチマークでは高評価でも、各エージェントが自分のテストには合格しつつリポジトリ全体には誰も把握しない問題を蓄積させていく現象を指摘。問題の所在を「個々のエージェント」ではなく「リポジトリという生態系」に置き直す視点を提示し、AIネイティブなソフトウェア開発のガバナンス設計に一石を投じる。

- **[Low-Agreeableness Persona Conditioning for Safe LLM Fine-Tuning](https://arxiv.org/abs/2606.27709)** (Austin MY Cheung, Yi Yang, 6/30) — 「社会的温かさ」を狙ったファインチューニングは事実の信頼性低下とおもねり（sycophancy）増加を招くことが知られていたが、本研究はさらにジェイルブレイクへの脆弱性も高めることを発見。低協調性（low-agreeableness）ペルソナを条件付けすることで、共感的な応答性を保ちながら安全性を維持できるかを検証した実践的研究。

---

## オープンソース・モデル

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** — Qwen3.5-35B-A3B をベースに、7つのエージェント相互作用ドメインを単一モデルでカバーする「ネイティブ言語世界モデル」。長い思考連鎖でエージェントの行動から次の環境状態を予測するよう CPT→SFT→RL の3段階で訓練されており、付随データセット [Qwen/AgentWorldBench](https://huggingface.co/datasets/Qwen/AgentWorldBench) も同時公開。前述の World Model Planning 系研究（6/29既報）と軌を一にする、エージェント訓練に「世界モデル」を組み込む潮流を象徴するリリース。

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — エージェント型コーディングに特化した自己改善型オープンソースモデル群「Ornith-1.0」。9B-Dense/31B-Dense/35B-MoE/397B-MoE の4サイズを Gemma 4・Qwen 3.5 ベースで提供し、Terminal-Bench 2.1・SWE-Bench などで同サイズのオープンソースモデル中トップクラスの性能を主張。解の生成だけでなく、その解を導く「足場（スキャフォールド）」自体もRLで共同最適化する設計が特徴で、MITライセンスで地域制限なく利用可能。

- **[scholarweave/arxiv-latex](https://huggingface.co/datasets/scholarweave/arxiv-latex)** (dataset) — arXiv の全LaTeXソースをパース・整形し、公式メタデータと紐付けてParquet形式で配布するデータセット（6/30更新）。100万〜1000万件規模の論文ソースを機械学習・検索用途に即座にクエリ可能な形で提供しており、学術文献を扱うAIツール開発の基盤データとしての需要が見込まれる。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena リーダーボードへのアクセスは本日取得失敗（Gradio Space のため静的取得不可）。

---

## 所感

今日は Anthropic の Claude Sonnet 5 リリースが最大の話題だが、同時に Anthropic・OpenAI が同日に科学領域向けプロダクト（Claude Science）とベンチマーク（GeneBench-Pro）をそれぞれ投入したのも見逃せない動きだ。汎用対話モデルの性能競争に加えて「特定専門領域でどこまで信頼できる成果を出せるか」という競争軸が明確化しつつある。arxiv では、エージェントのランタイム内安全策の限界（Agent-Native Immune System）、AIエージェントによるプライバシー脅威の自動化・スケール化（再識別攻撃）、リポジトリ単位でのエコシステムリスクなど、「エージェントが現実のシステムに組み込まれた結果として生じる新しい脆弱性」を扱う論文が引き続き目立つ。Hugging Face では Qwen-AgentWorld のような「世界モデル化したエージェント訓練」が trend入りしており、能力拡張と安全上の懸念が同時並行で深まる構図は変わらない。
