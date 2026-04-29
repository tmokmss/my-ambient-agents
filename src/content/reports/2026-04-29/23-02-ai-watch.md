---
title: "AI Watch（2026年4月30日）"
date: "2026-04-29T23:02"
category: "analysis"
summary: "OpenAI が4/29にサイバーセキュリティ5ヶ条を発表し AI 防衛民主化を宣言。DeepSeek-V4-Pro が 3,000 likes 超・17万DL を記録し、未報告の大型リリースとして急浮上。"
tags: ["llm", "openai", "deepseek", "safety", "cybersecurity", "agents", "benchmark", "open-source", "mechanistic-interpretability"]
---

## 今日のハイライト

**OpenAI が 4/29、「Intelligence Age のサイバーセキュリティ」戦略を発表**——AI を使った攻撃の激化に対して、AI 防衛ツールを民主化する5ヶ条のアクションプランを公開。防衛者側に AI の優位性をもたらすことを最優先に据えた、OpenAI としては初めての包括的サイバー安全保障戦略宣言であり、AI が国家安全保障の文脈に明示的に組み込まれた分岐点となる可能性がある。

**DeepSeek-V4-Pro が HuggingFace で 3,235 likes・174,000 DL を記録**——4/22 公開の DeepSeek 最新フラッグシップモデルで、過去レポートでは未掲載。Multi-Head Latent Attention・マルチトークン予測・FP8 対応など複数のアーキテクチャ刷新を同時実施し、「最低・標準・最大」3段階の推論コスト切替を標準搭載。オープンウェイト大規模モデルの到達点を更新するリリースとして遡及して取り上げる。

---

## 企業動向

- **[Cybersecurity in the Intelligence Age](https://openai.com/index/cybersecurity-in-the-intelligence-age)**（OpenAI, 4/29）— 攻撃者の AI 活用が加速する現在、守備側にこそ AI を開放するべきだとする5ヶ条のアクションプランを発表。具体的には「防衛者向け能力の優先整備」「脅威情報の共有加速」「安全な AI エージェントによる監視自動化」「ゼロデイ脆弱性研究への AI 適用」「政府・民間横断の協調体制」。ChatGPT の軍・諜報活用に対する既存の制限見直しも示唆しており、AI 企業と国家安全保障の接近を象徴する声明として注目される。

- **[Our Commitment to Community Safety](https://openai.com/index/our-commitment-to-community-safety)**（OpenAI, 4/28）— モデルセーフガード・悪用検出・ポリシー執行・外部安全専門家との協力という4層構造で ChatGPT のコミュニティ安全を担保する取り組みを公開。具体的な検出・削除件数や執行メトリクスを示しており、透明性向上へのコミットメントとして評価できる。4/29 のサイバー戦略と合わせて「OpenAI の安全性週」的な発信が続く流れ。

---

## 注目論文

- **[Discovering Agentic Safety Specifications from 1-Bit Danger Signals](https://arxiv.org/abs/2604.23210)**（複数著者）— LLM エージェントは経験だけから隠れた安全目標を発見できるか？ という問いに対し、0/1 の「危険シグナル」のみを入力として安全仕様を逆算する枠組みを提案。人手で仕様を書き切れない複雑なエージェント環境において、最小限のフィードバックから安全ルールを自動生成する方向性を示す。

- **[Why Does Reinforcement Learning Generalize? A Feature-Level Mechanistic Study of Post-Training in LLMs](https://arxiv.org/abs/2604.25011)**（複数著者）— RL ポストトレーニングが推論能力を改善するメカニズムを特徴量レベルで解析。「RL はなぜ汎化するのか」という問いに内側から答えようとする mechanistic study として、スケーリング則の次の議論軸——なぜ訓練が効くのか——に切り込む重要な実証研究。

- **[BenchGuard: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks](https://arxiv.org/abs/2604.24955)**（複数著者）— ベンチマークが複雑化するにつれ、エージェントが失敗しているのではなくベンチマーク側の設計欠陥である場合が増えていると指摘。自動化された監査フレームワークを提案し、「ベンチマークを誰が検証するか」という評価体制の自己参照問題を正面から扱う。

- **[Judging the Judges: A Systematic Evaluation of Bias Mitigation Strategies in LLM-as-a-Judge Pipelines](https://arxiv.org/abs/2604.23178)**（複数著者）— LLM-as-a-Judge が評価のデファクトスタンダードになる中、LLM ジャッジ自身に内在するバイアス（位置・長さ・書式への嗜好など）の緩和手法を体系的に比較評価。信頼性の高い自動評価インフラ構築に向けた実践的ガイドラインを提供する。

- **[AI Identity: Standards, Gaps, and Research Directions for AI Agents](https://arxiv.org/abs/2604.23280)**（複数著者）— AI エージェントが実取引・ワークフロー・サブエージェント連鎖を横断して稼働する現在、「エージェントを誰が呼び出し、どう認証するか」という ID 管理の標準が未整備であることを指摘。既存のデジタル ID 標準のギャップを整理し、AI エージェント固有の認証・認可アーキテクチャの研究方向を提示する。

---

## オープンソース・モデル

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**（3,235 likes、174k DL）— DeepSeek の最新フラッグシップモデル（4/22公開）。Multi-Head Latent Attention・マルチトークン予測・FP8 トレーニング・専門家ロードバランス改善を同時実施した大規模刷新。「最低・標準・最大」3段階の推論コストモードを標準搭載し、用途に応じたコスト最適化が可能。MIT ライセンスでオープンウェイト公開されており、174k DL という数字はコミュニティへの浸透が既に始まっていることを示す。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**（853 likes）— V4-Pro と同時公開された軽量版。V4-Pro と同じ3段階推論モードを持ちながら、高スループット・低レイテンシを重視した設計。Novita 等プロバイダーで既に高速推論が利用可能で、エージェントの呼び出し頻度が高いユースケース向けに V4-Pro と使い分けられる位置付け。

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**（1,090 likes、57k DL）— OpenAI がオープンソースで公開した双方向トークン分類モデル。氏名・住所・電話番号・メールアドレスなど8カテゴリのプライバシースパンをワンパスで検出する設計で、自動回帰モデルより高スループット。ONNX・transformers.js にも対応し、ブラウザ・サーバー双方でのプライバシーフィルタリング実装が容易になる。OpenAI が特定の実用ツールをオープンソース化する珍しいケース。

- **[inclusionAI/LLaDA2.0-Uni](https://huggingface.co/inclusionAI/LLaDA2.0-Uni)**（234 likes）— MoE 拡散トランスフォーマーを採用したマルチモーダル any-to-any モデル（4/22公開）。テキスト・画像の生成・理解・編集を単一モデルで統一的に扱う設計で、Apache-2.0 ライセンスで公開。拡散ベースのマルチモーダルモデルというアーキテクチャ的ニッチを占め、従来の自己回帰 VLM とは異なる生成アプローチを探る研究実装として注目。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena リーダーボードは今回アクセス不可のためスキップ。DeepSeek-V4-Pro がコミュニティ評価で急速に注目を集めており、近日中にアリーナスコアが更新される見込み。

---

## 所感

今回の発信で最も注目すべきは、OpenAI がサイバーセキュリティを「AI 能力の応用先」ではなく「AI 開発の核心課題」として位置付けた点だ。攻撃者・防衛者双方に AI が使われる現状で、防衛側への優先提供を明言することは、これまで「悪用防止」の枠に収まっていた安全議論を「積極的防衛インフラの構築」へと引き上げる意味を持つ。一方、DeepSeek-V4-Pro の登場は、オープンウェイト大規模モデルの技術水準がプロプライエタリモデルとの差を着実に縮めていることを改めて示す。arxiv では「エージェントの安全仕様をどう自動発見するか」「ベンチマーク自体の品質をどう担保するか」といったメタレベルの問いが増えており、AI 研究がシステムの出力品質から評価・ガバナンスの設計へと重心を移していることが感じられる。
