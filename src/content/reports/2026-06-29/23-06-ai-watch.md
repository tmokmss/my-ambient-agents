---
title: "AI Watch（2026年6月30日）"
date: "2026-06-29T23:06"
category: "analysis"
summary: "OpenAI が EU 職業別 AI 影響を大規模調査。Machine Unlearning 乱用に警鐘、LLM エージェントの記憶更新ギャップを診断する研究が登場。"
tags: ["llm", "agents", "inference", "policy", "safety", "diffusion", "open-source", "benchmark"]
---

## 今日のハイライト

**OpenAI、EU全域の「AI職業影響マップ」を公開——自動化・成長・変容の分布を初調査（6/29）**

[Mapping Europe's AI Workforce Opportunity](https://openai.com/index/mapping-ai-jobs-transition-eu) が OpenAI から公開（6/29）。EU 全加盟国を対象に、AI が職業ごとに自動化・成長・ワークフロー変容をどのように引き起こすかを体系的に分析した報告書。特定の職業で自動化が進む一方、AI 関連の新職種が成長することを示しており、EU 各国の政策立案・教育投資・労働市場改革の議論に直接的な根拠を与える。フロンティアAI企業が政府向けに雇用影響を定量化する動きが加速しており、製品発表を超えた社会的コミットメントとして注目される。

**「Machine Unlearning は LLM では使いすぎ」——用語乱用が研究を混乱させると警告（6/29）**

[Position: The Term "Machine Unlearning" Is Overused in LLMs](https://arxiv.org/abs/2606.27379) が cs.CL に投稿。GDPR・著作権・安全要件から LLM の「機械的忘却」研究が急増しているが、「machine unlearning」が本来の定義（データセットからの削除）を大きく逸脱した文脈で乱用されていると指摘する。訓練データ削除・知識削除・行動変更はそれぞれ異なる問題であり、これらを一つの傘で括ることで評価指標や目的設定が曖昧になっていると論じる。LLM 規制の議論が盛んになる中、研究コミュニティの用語整理を促す論文として広い反響が予想される。

---

## 企業動向

- **[Mapping Europe's AI Workforce Opportunity](https://openai.com/index/mapping-ai-jobs-transition-eu)** (OpenAI, 6/29) — EU 各国における職業別の AI 自動化・成長・ワークフロー変化を大規模に分析。政策立案者・教育機関・企業の人材戦略に直接活用可能な資料として位置づけられており、OpenAI が単なるモデルプロバイダーを超えて AI 移行期の社会インフラを担う姿勢を明示している。

- **[HP Inc. launches Frontier strategic partnership with OpenAI](https://openai.com/index/hp-frontier-partnership)** (OpenAI, 6/28) — HP が OpenAI の Frontier パートナーシップに参加し、顧客体験・ソフトウェア開発・エンタープライズ業務全般に AI を展開する方針を発表。Samsung の ChatGPT Enterprise 全社展開（6/21）に続き、大手製造業への AI 浸透が加速していることを示す。

Anthropic・Google DeepMind: 過去4日以内に新着なし（最新記事はそれぞれ 6/23、6/24）。

---

## 注目論文

- **[Position: The Term "Machine Unlearning" Is Overused in LLMs](https://arxiv.org/abs/2606.27379)** (cs.CL, 6/29) — 「訓練データ削除」「知識削除」「行動変更」を同一の unlearning 用語でまとめることで研究目的が錯綜していると指摘。評価指標の再整理と問題設定の精緻化を求めるポジションペーパーとして、GDPR対応・安全AI研究双方に影響を及ぼすと見られる。

- **[Supersede: Diagnosing and Training the Memory-Update Gap in LLM Agents](https://arxiv.org/abs/2606.27472)** (cs.CL, 6/29) — 長期マルチセッション対話で「古い事実を新しい値で上書きする」能力が標準的な LLM エージェントには欠如していることを実証。ユーザーが「引越した」「価格が変わった」などの事実更新を伝えた後も旧情報で応答し続ける問題（memory-update gap）を診断・訓練する手法を提案。長期エージェント実用化の具体的障壁を正面から捉えた実践的研究。

- **[Internalizing the Future: A Unified Agentic Training Paradigm for World Model Planning](https://arxiv.org/abs/2606.27483)** (cs.AI, 6/29) — LLM エージェントが「行動してから学ぶ」反応型パラダイムから脱し、「what-if 推論」で将来をシミュレートしてから行動する世界モデルを内部化する統一訓練パラダイムを提案。長期タスクにおける計画能力を大幅に改善し、外部シミュレータ不要で動作する点が設計上の強み。

- **[EntMTP: Accelerating LLM Inference with Entropy Guided Multi Token Prediction](https://arxiv.org/abs/2606.27550)** (cs.CL, 6/29) — 既存の Multi-Token Prediction（MTP）は静的なツリートポロジを推論全体で固定するため高確実性トークンでも無駄なコストが生じる。エントロピーを動的に計測し、確実性が高い箇所ではより多くのトークンを先読みスキップする適応型 MTP を提案。推論速度と出力品質のトレードオフを改善する実用的アプローチ。

- **[Masked Language Flow Models](https://arxiv.org/abs/2606.27617)** (cs.CL, 6/29) — Masked Diffusion Model（MDM）はトークン位置間の依存を無視するため少ステップサンプリングで性能低下する問題があった。MDM と Flow Language Model（FLM）の利点を統合し、位置間の依存性を保ちながら並列生成効率を維持する「Masked Language Flow Model（MLFM）」を提案。拡散型言語生成の品質・速度バランスを改善する。

---

## オープンソース・モデル

- **[r3gm/wan2-2-fp8da-aoti-preview-2](https://huggingface.co/spaces/r3gm/wan2-2-fp8da-aoti-preview-2)** (Space, 1913 likes) — Wan 2.2 の FP8/AOTI 量子化プレビューを MCP サーバーとして公開した Gradio スペース。今週最高水準の 1913 likes を集めており、高精度な動画生成モデルを MCP 経由でツール呼び出しできるデモとして、エージェントからの映像生成インテグレーションへの関心の高さを示す。

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** (model, 842 likes, 241K DL) — 前バージョン（v1 コーダー特化）から「agentic」特化に移行した Gemma 4 12B ベースの GGUF 量子化モデル。Fable-5 スタイルの合成データで調整し、3.5× スケールの Tau-2 手法を適用。ローカルでエージェント能力を発揮する 12B クラスの選択肢として大量のダウンロードを記録。

- **[Glint-Research/Fable-5-traces](https://huggingface.co/datasets/Glint-Research/Fable-5-traces)** (dataset, 468 likes) — Fable-5 の推論トレースデータセット（AGPL-3.0、最終更新 6/29）。マシン生成のエージェントトレースを JSON 形式で収録し、Fable-5 の行動を蒸留・研究する用途を想定。公開から約2週間で約500 likes を集めており、フロンティアモデルの動作データへの需要の高さを裏付ける。

- **[webml-community/gemma-4-webgpu-kernels](https://huggingface.co/spaces/webml-community/gemma-4-webgpu-kernels)** (Space, 222 likes) — Gemma 4 をブラウザ内の WebGPU カーネルで動作させるデモスペース。サーバーレスでブラウザのみで Gemma 4 推論を実現しており、プライバシー重視・オフライン実行ユースケースへの 12B クラスモデル適用を後押しする動き。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena リーダーボードへのアクセスは本日取得失敗。

---

## 所感

今日の注目点は「用語の精緻化」と「長期エージェントの実用化」という2つの軸に収斂する。Machine Unlearning の乱用批判、Supersede の記憶更新ギャップ診断、EntMTP の動的推論最適化——いずれも「急成長の中で見落とされてきた細部を直視する」動きだ。OpenAI の EU 雇用マッピングは、AI ラボが政策議論の一次資料を自ら提供する立場にシフトしていることを示しており、技術競争と社会的説明責任の双方を抱える複雑なポジションをより鮮明にしている。HuggingFace では動画生成モデル（Wan 2.2）の MCP 統合スペースが異例の likes 数を記録しており、エージェントからのメディア生成パイプラインという新たな需要軸が浮上している。
