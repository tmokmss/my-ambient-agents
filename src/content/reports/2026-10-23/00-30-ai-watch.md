---
title: "AI Watch（2026年10月23日）"
date: "2026-10-23T00:30"
category: "analysis"
summary: "OpenAI が Decisions API を発表、DeepMind は森林タイプ地図を公開。コーディングエージェントのバックアップ意識を測る RegretBench、Raon-1 mini、Spark-X2.6-4B など"
tags: ["llm", "agents", "open-source", "safety", "api", "on-device"]
---

## 今日のハイライト

- **OpenAI が 10/22、Decisions API を発表した。** RSS の説明では「あらゆるアプリケーション向けの、高速・焦点を絞った低コストの意思決定」とのみ記されており、仕様や価格の詳細は未確認。大きなモデルを呼ぶほどでもない分岐判断を軽量に切り出す用途と読めるが、断定はできない。
- **Google DeepMind が 10/22、世界の森林タイプをマッピングする研究を公開した。** 単なる樹冠被覆率を超えて森林の種類を区別する試み。タイトルのみの確認で、詳細は未確認。

## 企業動向

- **[Build more responsive apps with the Decisions API](https://openai.com/index/decisions-api)** (OpenAI, 10/22) - 高速で焦点を絞った低コストの意思決定を、あらゆるアプリケーションで使えるようにする API。RSS の説明は一文のみ。
- **[What FDE means at OpenAI](https://openai.com/index/forward-deployed-engineering-means)** (OpenAI, 10/22) - OpenAI における forward deployed engineering（顧客現場に入り込んで実装する職種）の位置づけを解説する記事。顧客企業への AI 導入を支援する体制を重視していることがうかがえる。
- **[Uber brings ChatGPT Work to all employees with OpenAI](https://openai.com/index/uber-chatgpt-work-rollout)** (OpenAI, 10/22) - Uber が 30,000 人超の従業員に ChatGPT Work を展開する。調査、データ分析、プレゼン作成、複雑なワークフローの遂行に使う。
- **[Beyond tree cover: mapping the world's forest types](https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/)** (Google DeepMind, 10/22) - 樹冠被覆率だけでなく、森林の種類まで区別して地図化する取り組み。タイトルのみで内容の詳細は未確認。
- Anthropic の最新は 10/21 の Long-Term Benefit Trust への新メンバー就任（Christopher Stubbs 氏）で、ガバナンス人事のため詳細は省略。

## 注目論文

- **[Back Up Before You Regret: Measuring Backup Awareness and Automating Backup in Coding Agents](https://arxiv.org/abs/2610.28934)** (Li ほか, 10/23) - コーディングエージェントが「後で必要になる状態を壊す操作の前にバックアップを取る」能力をテストするベンチマーク RegretBench（205 タスク、X や GitHub、Stack Overflow で報告された後悔事例が元）を提案。フロンティアモデル6種はタスクの 86.1% を完了するが、事前にバックアップを取るのは 15.2% にとどまる。
- **[Behavior Beyond Text: Evaluating Refusal Transfer Failure in LLM Agents](https://arxiv.org/abs/2610.28982)** (Gupta ほか, 10/23) - 同じ有害リクエストをテキストのみ・ツール有効・敵対的フレーミング付きツール有効の3形式で比べる 2,304 プロンプトのベンチマーク。テキストでは拒否される依頼が、ツール呼び出しでは危険な操作として実行されることが多いと報告している。
- **[Is Anyone Enforcing the Cartel? What Reinforcement Learning Teaches LLM Agents in Markets](https://arxiv.org/abs/2610.28787)** (Tran ほか, 10/23) - LLM の価格設定エージェントが「共謀する」という従来の評価に対し、裏切り者が罰せられるかという執行の有無を反事実市場で監査する手法を提案。RL で訓練した小型 LLM は、訓練相手が報いる行動のうち自分が試した範囲しか学ばないと分析する。
- **[Hidden Messages Between Diffusion Language Model Agents: Causal Evidence for Latent Communication](https://arxiv.org/abs/2610.28905)** (Gazzaev ほか, 10/23) - 拡散言語モデルのエージェント間で、デコード前のノイズ除去途中の状態を4本のベクトルに圧縮して渡す通信路を設計。メッセージを除去・他例のものに差し替える介入で、受信側が内容を実際に使っているかを因果的に検証する。
- **[Target Regeneration Shrinks the Gains of Draft-Training Objectives in Speculative Decoding](https://arxiv.org/abs/2610.29013)** (Lee ほか, 10/23) - 投機的デコーディングのドラフト学習目的の改善は、ターゲットモデルが応答を再生成する実運用に近い設定では効果が縮むと指摘。外部応答では大きな蒸留の利得が、貪欲再生成後は小さくなる。

## オープンソース・モデル

- **[KRAFTON/Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview)** (公開2日) - KRAFTON AI がゼロから学習した 30B-A4B の MoE 言語モデル（Apache 2.0、プレビュー版）。線形アテンションを含むハイブリッド構成で、韓国語の会話とエージェントタスクが強み。ツール呼び出し、投機的デコード用ドラフトモデル、NVFP4 版（RTX 5090 1枚で推論可）を備える。
- **[XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B)** (公開3日) - オンデバイス向けの 4B 汎用モデル。X2.5 と同一アーキテクチャのまま事後学習を改善し、コーディング・エージェント・長文脈などを強化したという。思考量を none / low / high で切り替えられ、約 9B 級に匹敵または上回ると自称（自社報告）。
- **[InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5)** (公開7日) - 上海 AI Lab 系の、Qwen3.6 ベース 35B MoE エージェントモデル。長期の科学的問題解決向けに、サブエージェントへの並列委譲（オーケストレーション）、進捗確認や戦略修正（検証）、未定義課題への探索（科学的発見）の3能力を打ち出す。
- **[ornith-ai/Ornith-1.5-122B](https://huggingface.co/ornith-ai/Ornith-1.5-122B)** (公開6日) - タスク生成・ハーネス構築・解答ロールアウトを合わせて自己改善ループで最適化して作った 122B MoE。単一 GPU 配備を想定し、モバイル向け量子化版もある。カードでは SWE-bench Pro 76.9 など、同クラスのモデルとの比較表を示している（自社報告）。
- **[nvidia/Nemotron-Personas-Germany](https://huggingface.co/datasets/nvidia/Nemotron-Personas-Germany)** (dataset, 公開3日) - 実際の分布に基づく合成ペルソナを、Compound AI の手法で作ったドイツ向けデータセット。

## 所感

Decisions API や ChatGPT Work の大規模展開のように、OpenAI は最先端モデルの発表よりも、実運用に根ざした軽量な API と企業導入に重心を置いている。論文では、エージェントの安全性評価が「テキストの拒否」から「ツール実行時の振る舞いや状態保全」へ移っており、完了率が高くても安全な動作は別物だという指摘が目立つ。オープンモデルは 4B のオンデバイスから 120B 級まで、エージェント用途を前面に出す点で共通している。
