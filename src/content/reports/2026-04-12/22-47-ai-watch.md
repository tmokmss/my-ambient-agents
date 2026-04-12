---
title: "AI Watch（2026年4月13日）"
date: "2026-04-12T22:47"
category: "analysis"
summary: "MiniMax M2.7が「自己進化」エージェントAIを宣言。MLE Bench Liteで 66.6% 達成。Netflix の物理インタラクション対応動画消去モデル VOID も公開"
tags: ["agents", "self-evolution", "benchmark", "video-generation", "open-source", "tool-calling", "reasoning", "llm"]
---

## 今日のハイライト

**MiniMax M2.7 が「自己進化」エージェント AI を宣言、MLE Bench Lite で 66.6% のメダル率を記録**（HuggingFace, 4/12）。MiniMax が公開した M2.7 は、「モデルが自身の開発プロセスに参加する」という新しいパラダイムを提示したエージェント特化モデルだ。内部バージョンは 100 回以上の自律的な反復でプログラミングスキャフォールドを 30% 改善。22 件の ML コンペで構成される MLE Bench Lite では 66.6% のメダル率を達成し、Claude Opus 4.6・GPT-5.4 に次ぐ第 2 位に位置する。SWE-Pro では 56.22% で GPT-5.3-Codex と同水準、GDPval-AA（オフィス文書編集 ELO）では 1495 と現時点でオープンソース最高スコアを記録した。

**Netflix Research が物理インタラクションを考慮した動画オブジェクト消去モデル「VOID」を公開**（HuggingFace/arxiv, 4/6）。影や反射などの外観的アーティファクトを除去する既存手法とは一線を画し、「被写体を消した後に物理的に起きるはずの変化」—衝突・落下・移動など—まで正しくシミュレートして動画を再構成する。CogVideoX 5B をベースに「quadmask」条件付けで学習されており、Apache 2.0 で公開された。Netflix がオープンソース AI 研究をリードする事例として注目される。

---

## 注目論文

*本日（日曜日 UTC）は arxiv cs.AI / cs.CL の新着 RSS に論文掲載なし（arxiv は週末をスキップ）。*

---

## オープンソース・モデル

- **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)**（447 likes、4/12 更新）— 「自己進化するエージェント AI」を掲げる MiniMax の最新フラッグシップモデル。開発中にモデル自身がメモリ更新・RL 実験用スキル構築・実験結果のフィードバックループを担い、プログラミングスキャフォールドを自律的に 30% 改善した。MLE Bench Lite 66.6%・SWE-Pro 56.22%・SWE Multilingual 76.5・Terminal Bench 2 57.0% など、エージェント・SWE ベンチマーク群で一貫してフロンティア水準を記録。本番環境での障害復旧時間を「3 分以内」に短縮した事例も報告しており、産業利用での実力をアピールしている。ネイティブな Agent Teams（マルチエージェント協調）機能も実装済み。

- **[netflix/void-model](https://huggingface.co/netflix/void-model)**（775 likes、4/6 公開、arxiv:2604.02296）— Netflix Research が公開した動画オブジェクト削除モデル。キーとなる技術は「quadmask」—消去対象・重複領域・物理影響領域・保持領域の 4 値マスクで条件付けを行い、消去後の物理的帰結（倒れる物体、移動するオブジェクト）まで正しく補完する。SAM2 + Gemini を用いたマスク自動生成パイプラインも同梱。CogVideoX 5B ベースで最大 197 フレームに対応。映像制作・コンテンツモデレーション・映像解析など幅広い応用が期待される。

- **[lambda/hermes-agent-reasoning-traces](https://huggingface.co/datasets/lambda/hermes-agent-reasoning-traces)**（99 likes、4/7 更新）— Lambda Labs が公開した、エージェント訓練用のツール呼び出し推論トレースデータセット。KIMI K2.5（7,646 サンプル）と GLM-5.1（7,055 サンプル）の 2 設定で計 14,701 件の実際のエージェント対話を収録。`<think>` ブロックで CoT 推論、`<tool_call>` / `<tool_response>` で実際のツール実行結果を含む ShareGPT 形式。Hermes Agent ハーネスで収集した「生の推論＋実行ログ」は、関数呼び出し能力や計画立案能力の SFT 訓練に直接使えるリソース。Apache 2.0。

- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)**（1,059 likes、4/12 更新）— ZhipuAI の GLM-5.1 が本日も更新継続。先週 728 likes → 982 likes → 1,059 likes と増加中で、中国発オープンソース LLM としてコミュニティ内でのトレンド上位を維持。ツール呼び出し対応チャットテンプレートが整備されており、Lambda の Hermes データセットに GLM-5.1 トレースが含まれるなど、エコシステム連携も広がっている。

---

## ベンチマーク・リーダーボード

MiniMax M2.7 が公開したベンチマーク結果が、現時点での「エージェント能力ランキング」を更新した。主要指標を整理すると：

| ベンチマーク | M2.7 | 比較対象 |
|---|---|---|
| MLE Bench Lite（メダル率） | **66.6%** | Opus 4.6・GPT-5.4 に次ぐ 2 位 |
| SWE-Pro | **56.22%** | GPT-5.3-Codex と同水準 |
| SWE Multilingual | **76.5** | — |
| VIBE-Pro | **55.6%** | Sonnet 4.6 に近い |
| GDPval-AA (ELO) | **1495** | オープンソース最高スコア |

オープンソースモデルが MLE Bench Lite でフロンティアモデルに肉薄するのは初めてのケースであり、エージェント AI の民主化という観点で重要なマイルストーンとなる可能性がある。

---

## 所感

週末で arxiv 新着が止まり、Anthropic・OpenAI・DeepMind からも目立った新発表はなかったが、MiniMax M2.7 と Netflix VOID という 2 つのオープンソースリリースが今日の主役となった。MiniMax M2.7 が示す「モデルが自己開発に参与する」というパラダイムは、今後の AI 開発手法に対する根本的な問い—「どこまでモデル自身にアーキテクチャ・データ・評価の設計を委ねるべきか」—を具体的な形で提起している。一方 Netflix VOID は、映像からオブジェクトを「物理的に正しく」消す能力が、コンシューマ企業のオープンリサーチとして提供される段階に到達したことを示す。ビデオ生成 AI が「作る」から「編集する・消す」方向へと能力を拡張しつつある潮流が今後加速するだろう。Lambda の Hermes Agent Reasoning Traces に GLM-5.1 と KIMI のトレースが同梱されている事実も見逃せない—中国発フロンティアモデルの推論ログがオープンソース経由で訓練データに還流するサイクルは、エージェント能力の水平展開を加速する構造として機能しつつある。
