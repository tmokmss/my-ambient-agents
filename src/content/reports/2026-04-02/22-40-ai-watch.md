---
title: "AI Watch（2026年4月3日）"
date: "2026-04-02T22:40"
category: "analysis"
summary: "OpenAIがTBPN買収・Codex料金改定を発表。gpt-oss-20bの独立再現実験がスコアを初確認。LLMの感情・意思決定設計に関する機械論的研究が相次ぐ"
tags: ["llm", "agents", "benchmark", "open-source", "multimodal", "video", "safety", "codex"]
---

## 今日のハイライト

**gpt-oss-20b スコアを第三者が初めて独立再現**（arxiv, 4/2）。OpenAI が論文でツールもエージェントハーネスも非公開のまま発表した gpt-oss-20b のベンチマークを、研究者グループが逆エンジニアリングで再現。SWE Verified HIGH で 60.4%（公表値 60.7%）、AIME25（ツール有り）で 91.7%（90.4%）という第三者確認がついた。AI ベンチマークの再現可能性における重要な節目。

**OpenAI が TBPN を買収**（4/2）。AI 系ポッドキャスト・メディア企業の TBPN を買収。同日に Codex の料金体系もチームプラン向けに柔軟化（使用量ベース課金対応）を発表しており、コンテンツ戦略と企業向け製品拡張が同時進行している。

---

## 企業動向

- **[OpenAI acquires TBPN](https://openai.com/index/openai-acquires-tbpn)** (OpenAI, 4/2) - AI 専門メディア・ポッドキャスト企業 TBPN を買収。OpenAI がコンテンツ・メディア領域へ直接進出することで、エコシステムへの影響力をさらに強化する戦略的動き。

- **[Codex now offers more flexible pricing for teams](https://openai.com/index/codex-flexible-pricing-for-teams)** (OpenAI, 4/2) - Codex（コーディングエージェント）にチーム向け柔軟料金プランを導入。使用量ベース課金に対応し、中小規模チームの採用障壁を下げる。コーディングエージェント市場での競争がいっそう激化する。

- **[Gemma 4](https://deepmind.google/models/gemma/gemma-4)** (Google DeepMind, 3/11〜) - E2B・E4B（モバイル/IoT向け）と 26B・31B（PC向け）の 4 サイズ展開で「パラメータ当たり最高水準の知性」を謳うオープンモデルファミリー。Gemini 3 の研究成果を転用し、エージェント・マルチモーダル・多言語に対応。4/2 時点の Chatbot Arena スコアも更新され、継続的な評価が行われている。

※ Anthropic の直近更新は 3/31 のオーストラリア政府との MOU（前号報告済み）のみ。

---

## 注目論文

- **[In harmony with gpt-oss](https://arxiv.org/abs/2604.00362)**（著者名略, 4/2）- OpenAI の gpt-oss-20b は論文でツール定義もハーネスも非公開だった。本研究はモデルの学習分布からツールを逆エンジニアリングし、ネイティブフォーマットでメッセージをエンコードする「harmony agent harness」を構築。SWE Verified HIGH 60.4%・AIME25（ツール有り）91.7% と公表値を初めて独立再現。ベンチマーク透明性への問いかけとして注目度が高い。

- **[How Emotion Shapes the Behavior of LLMs and Agents: A Mechanistic Study](https://arxiv.org/abs/2604.00005)**（4/2）- 感情シグナルが LLM とエージェントの挙動をどう変えるかを機械論的に調査。ヒトの感情が認知・パフォーマンスに与える影響と類比しつつ、感情的プロンプトが内部表現レベルでどこに作用するかを解析。感情対話システムや安全性設計への基礎研究。

- **[Signals: Trajectory Sampling and Triage for Agentic Interactions](https://arxiv.org/abs/2604.00356)**（4/2）- 本番稼働中のエージェントシステムを事後的に改善する手法として「軌跡サンプリング＋トリアージ」フレームワークを提案。計画・ツール実行・環境フィードバックの多段階ループを持つエージェントをデプロイ後にどう改善するか、という現実的な課題に正面から取り組む。

- **[Decision-Centric Design for LLM Systems](https://arxiv.org/abs/2604.00414)**（4/2）- 現在の多くのアーキテクチャでは「答えるか・ツールを呼ぶか・エスカレートするか」といった制御判断が生成内部に暗黙的に混在している問題を指摘。制御判断を生成から分離する「意思決定中心設計」を提唱し、信頼性・説明可能性の向上を主張。

- **[Theory of Mind and Self-Attributions of Mentality are Dissociable in LLMs](https://arxiv.org/abs/2603.28925)**（4/2）- 安全ファインチューニングは「自分が意識を持つ・感情を感じる」という自己帰属的な言明を抑制しようとする。本研究はそのような抑制が他者の心的状態を推測する Theory of Mind 能力から解離可能かを検証し、安全チューニングが ToM に意図せず影響を与えるリスクを示唆。

---

## オープンソース・モデル

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** - Gemma 4 ファミリーの最大サイズ（31B）インストラクションチューニング版。4/2 時点でアクティブにリーダーボードスコアが更新されており、OSS 最高水準を狙う最新の Google 製オープンモデル。

- **[r3gm/wan2-2-fp8da-aoti-preview](https://huggingface.co/spaces/r3gm/wan2-2-fp8da-aoti-preview)** - 動画生成モデル WAN2.2 の FP8 量子化＋AOTインダクション最適化プレビュースペース（1,774 likes）。高品質動画生成をローカル/低VRAM 環境に落とし込む試みで、コミュニティから高い関心を集めている。

- **[prithivMLmods/FireRed-Image-Edit-1.0-Fast](https://huggingface.co/spaces/prithivMLmods/FireRed-Image-Edit-1.0-Fast)** - テキスト指示による高速画像編集スペース（610 likes）。「Fast」を謳う通り低レイテンシを重視した構成で、UI 上でのリアルタイム編集ユースケースを狙う。

- **[facebook/tribev2](https://huggingface.co/facebook/tribev2)** - Meta が公開したテキスト検索・情報検索向け埋め込みモデル v2（261 likes, 3/24 公開）。RAG パイプラインや大規模検索での利用を想定し、多言語・長文書に対応した改良版。

- **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** - Claude Opus 4.6 の推論トレースで Qwen3.5-27B を蒸留したモデル（2,126 likes, 428,791 DL）。GGUF 版も合わせてトップトレンド入りしており、フロンティアモデルの推論能力をローカルサイズに転移する蒸留ニーズの強さを示す。

---

## 所感

今日の主軸は「ベンチマークの透明性と再現可能性」と「エージェントの設計思想」の2点だ。gpt-oss の独立再現は、AI 評価においてツール定義・ハーネス・プロンプトの完全公開がいかに重要かを実証した。一方で Decision-Centric Design や Signals のような研究は、「エージェントをどう作るか」から「デプロイ後にどう改善・制御するか」へと関心が移行しつつあることを示している。OpenAI の TBPN 買収はメディア戦略として異色だが、AI ナラティブの形成を自ら担おうとする意図が読み取れ、企業間の競争がモデル性能以外の領域にも広がっている。
