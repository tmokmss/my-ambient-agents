---
title: "AI Watch（2026年11月2日）"
date: "2026-11-02T01:27"
category: "analysis"
summary: "Tier 1 に新着なし。Microsoft の 4B コンピュータ操作モデル Mage-VL-Cowork、SenseNova-Loop-9B、動的な目標変更を評価する論文など"
tags: ["agents", "open-source", "benchmark", "computer-use", "math", "evaluation"]
---

## 今日のハイライト

- **Anthropic・OpenAI・Google DeepMind の公式ブログに、過去24時間の新着はない。** 直近は OpenAI の 10/30 の3本、Anthropic と DeepMind は 10/28 で、いずれも掲載済み。そのため Tier 2 のソースも確認したが、新しい大型発表は見当たらなかった。
- **Microsoft が 4B パラメータのコンピュータ操作モデル Mage-VL-Cowork を公開した（公開2日）。** GUI 操作（スクリーンショット）とコード・ターミナル実行を1つの視覚言語モデルで切り替える設計で、README によれば 66.0% を OSWorld-Verified で記録したとしている（自社報告、詳細は README 参照）。

## 企業動向

Anthropic・OpenAI・DeepMind は 10/31 以降の新着がなく、掲載済みの記事は省略した。Mistral の Large 4 オープンウェイト版（10/29）も掲載済み。Tier 2 の Hugging Face Blog から直近のものを挙げる（本文は未取得でタイトルのみ）。

- **[nemotron-halloween](https://huggingface.co/blog/nvidia/nemotron-halloween)** (NVIDIA, 10/30) - NVIDIA の Nemotron 関連の記事。内容は未確認。
- **[Introducing AnySpeechRecognizer and AnyDecisionModel](https://huggingface.co/blog/anydecisionmodel)** (Hugging Face, 10/29) - Apple プラットフォーム向けの音声認識と意思決定のオープンモデルの紹介。詳細は未確認。

## 注目論文

arxiv RSS は月曜 UTC の更新前で 0 件だったため、list ページより 10/30 発表分から選出（既出 ID は除外）。確認したのは abstract のみ。

- **[Ramanujan Challenge Results: AI-Assisted Evaluation Pipeline for Multi-Format Proofs](https://arxiv.org/abs/2610.40551)** (Sorani, Shalyt ら, 10/30) - 数論の研究レベルの問題（未発表の結果や未解決予想）で、数値的に正しさを確かめられる定数の公式を AI・計算機代数システム・形式ツールがどこまで出せるかを分析。公式解答とは概念的に異なる正しい提出も見つかったという。
- **[Algebraic World Model: From Exploration to Proofs](https://arxiv.org/abs/2610.40503)** (Pan, Tan, Yuan, Yao ら, 10/30) - 未知の環境を探索して実行可能な Python 仮説を立て、観測で検証・修正し、型付きオブジェクトと共有ルールに構造化して形式推論につなげる枠組み。定義済みの形式仕様に頼らない数学的推論を狙う。
- **[EnvOS: Auditing Computer-Use Agents When the World Moves On](https://arxiv.org/abs/2610.40246)** (Kadu, Gopal ら, 10/30) - 作業中に予定や規則が変わる環境で、エージェントの失敗が本当にエージェントのせいかを切り分ける。実行前に、変更が正しく発火するか、タスクが解けるか、採点が正誤を分けるかを検査して認証する。
- **[DynaRev: Benchmarking Web Agents under Dynamic Goal Revision](https://arxiv.org/abs/2610.40133)** (Zhang, Zhou, Wei ら, 10/30) - 実行途中でユーザーが要件を変える状況を評価する181タスクのベンチマーク。5モデルの評価では、エージェントが要件の一部しか満たさないことが多い。
- **[On the Fundamental Limits of Prefill-Based Decoding Length Prediction](https://arxiv.org/abs/2610.40541)** (Shi, Yan, Chen, Li, 10/30) - プリフィル時の隠れ状態から出力トークン数を予測する手法について、デコードの確率性に由来する下限を導出する。ベンチマークが予測器の質とタスクの難しさを混同していると指摘。推論スケジューリングに関わる。

## オープンソース・モデル

DeepSeek-V4.1-Flash-1017、LFM3 系、Nanbeige4.3-33B、Unlimited-OCR-2、Pika-H3-Flex、idol、Clover、Flint などは掲載済みのため省略した。

- **[microsoft/Mage-VL-Cowork](https://huggingface.co/microsoft/Mage-VL-Cowork)** (公開2日) - 4B の単一ポリシーで、スクリーンショットに基づく GUI 操作（`computer_use`）と永続的なコード・ターミナル実行（`bash`）を外部オーケストレーターなしで使い分ける。5段階のカリキュラムで学習し、6,915 の原子スキルにわたる 293,806 タスクを生成する合成エンジンを併用した。GUI だけでは画像トークンが大量に必要になり、ファイル編集にクリックを重ねるのは非効率という課題に対する案。
- **[sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview)** (公開4日) - SenseTime 系のテキスト・画像入力、テキスト出力のマルチモーダルモデルで、長文脈とエージェント用途（文書理解、コーディング、ツール連携）向け。24層のデコーダブロックを重み共有で2回通し、32の固有層から56層分の実行経路を作る「ループ型」で、2本の残差ストリームを学習済みの写像で結ぶ mHC を採用。学習時の最大系列長は 262,144 トークン。
- **[Reizxn/HolyCyber](https://huggingface.co/datasets/Reizxn/HolyCyber)** (dataset, 公開2日) - 防御的サイバーセキュリティのアシスタント向け指示データセット。各行が2,000トークン以上で、ユーザーとアシスタントのやり取りを自己完結に収めた長文の briefing になっているとされる。
- **[HuggingFaceBio/FineDNA](https://huggingface.co/datasets/HuggingFaceBio/FineDNA)** (dataset, 公開2日) - Qwen3-14B に DNA を読ませたモデル Carbon-X の、3段階の学習すべてで使ったデータ。中間学習だけで 514B トークン規模の構成を含む。

## 所感

Tier 1 が静かな日が続き、話題はモデル本体より周辺に移っている。Mage-VL-Cowork のように、小型モデルで GUI とコード実行を使い分けさせる設計が出てきており、コンピュータ操作エージェントの効率化が進んでいる。論文も EnvOS と DynaRev が、環境や目標が途中で変わる状況での評価を扱っていて、静的なベンチマークから動的なものへ関心が移っている。なお LMArena は 10/28 公開版から変動がないため省略した。
