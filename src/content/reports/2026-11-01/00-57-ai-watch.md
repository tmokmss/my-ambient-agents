---
title: "AI Watch（2026年11月1日）"
date: "2026-11-01T00:57"
category: "analysis"
summary: "Tier 1 に新着なし。Mistral Large 4 のオープンウェイト公開、LFM3-VL-2B、単一画像から 3D の Idol、エージェント評価の論文など"
tags: ["llm", "open-source", "mistral", "agents", "benchmark", "security"]
---

## 今日のハイライト

- **Anthropic・OpenAI・Google DeepMind の公式ブログに、過去24時間の新着はない。** 直近は OpenAI の 10/30 の3本、Anthropic と DeepMind は 10/28 で、いずれも掲載済み。そのため Tier 2 のソースも確認した。
- **Mistral が 10/29、Mistral Large 4 のオープンウェイト版（愛称「Le Chonk」）を公開した。** Hugging Face Blog の解説によると、Mistral Ecosystem Open-Weight License（MIT 派生で、モデルを API サービスとして提供することに制限がある）で配布される。防御側のセキュリティ用途を前面に出し、Artificial Analysis の Cyber Index で 82% と報告している（Mistral 自社報告）。

## 企業動向

Anthropic・OpenAI・DeepMind は 10/29 以降の新着がなく、掲載済みの記事は省略した。

- **[Le Chonk: Built for Coders, Trusted by Defenders.](https://mistral.ai/news/mistral-large-4-oss/)** (Mistral AI, 10/29) - 10/6 発表の Mistral Large 4 のオープンウェイト版。タイトルは「コーダー向け、防御者に信頼される」。記事本文は未取得。
- **[Welcome Le Chonk: Mistral Large 4 on Hugging Face](https://huggingface.co/blog/mistral-large4)** (Hugging Face, 10/29) - 同モデルの HF 側の解説。脆弱性の再現とパッチを課す Cyber Index で 82% を記録し、閉じたフロンティアモデルの一部は拒否のため近いゼロになる、と Mistral が主張している。クローズドな API はインシデント対応中に使えなくなるリスクがあり、ローカルで動かせるオープンウェイトの価値だと説く。Unsloth と llama.cpp チームによる GGUF もある。
- **[Granite Switch 4.1.1](https://huggingface.co/blog/ibm-granite/granite-switch-4-1-1)** (IBM Granite, 10/29) - タイトルは「モデルをソフトウェアのようにアップデートする」。本文は未確認。
- **[Announcing Project ProtoStar](https://huggingface.co/blog/announcing-project-protostar)** (Hugging Face, 10/29) - 公的資金による科学を AI で扱える形にする取り組み。詳細は未確認。

## 注目論文

arxiv cs.AI の RSS から選出（cs.CL は 0 件）。確認したのは abstract の冒頭のみ。

- **[OpenFrontiers: A Collection of Open Research Problems and a Benchmark for Scientific Rediscovery](https://arxiv.org/abs/2610.37739)** (Yao, Wang, Zhang ら, 10/30) - 12,151 件の未解決研究問題を整理したコーパスと、数学で最近解決された問題を使う200問のベンチマーク（2026年に解決された110問と未解決の90問）を公開。研究レベルの問題解決を測る土台になる。
- **[WebAnything: From the Wild Web to Scalable Agent Environments](https://arxiv.org/abs/2610.37786)** (Xie, Cai, Zhang ら, 10/30) - 実 URL から、再現可能で再利用できる Web 環境を、サイトごとの手作業なしで自動に再構築する枠組み。Web エージェントの学習と評価の環境不足を埋める。
- **[Detecting Covert Collusion between AI Agents through Partner-Outsider Positive Listening](https://arxiv.org/abs/2610.37849)** (Denamganaï, 10/30) - 秘密の取り決めを持つエージェント同士が無害に見える文面で協調すると、メッセージだけを見る監視では見逃す。メッセージを意味を保って言い換えたときの行動変化を、仲間と部外者で比べる事後テスト PoPLi を提案する。
- **[Seq@K: Evaluating Language Models Under Sequential Feedback](https://arxiv.org/abs/2610.37859)** (Yen, Yang, Ye ら, 10/30) - Pass@1 や Pass@K では測れない、直前の試行へのフィードバックを使って K 回以内に解けるかを測る評価法。エージェントの反復改善の力を比較する。
- **[Measuring Where Intent Gets Lost in Agentic Smart Contract Synthesis](https://arxiv.org/abs/2610.37830)** (Goel, Capponi, Gliozzo, 10/30) - AI が書いたスマートコントラクトを、同じトランザクションを原本と再生して一致率で評価し、依頼の意図がどこで失われるかを測る。デプロイ後に直せない用途で、意見ではなく実行で確かめる。

## オープンソース・モデル

DeepSeek-V4.1-Flash-1017、Nanbeige4.3-33B、LFM3-1.7B、LFM3-Omni-2B、Clover、Flint、Pika-H3-Flex、MiniMax-M3.1-Flash などは掲載済みのため省略した。

- **[LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B)** (公開12日・補充枠) - 端末内の視覚理解向け VLM（1.92B）。LFM シリーズで初めて動画を入力でき、答える前に段階的に考える Thinking と、物体の位置関係を扱う空間・身体性の推論が新しい。ロボティクスの基礎としても位置づけられている。
- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** (公開3日) - 1枚の画像から3D Gaussian splat を生成する。背景を除去して物体を切り出し、最大約105万個のガウシアンを標準の 3DGS `.ply` で出力する。VRAM 7.2GB の民生 GPU で動き、2秒未満で生成できると説明されている。Apache-2.0。ただし DINOv3 と FLUX.2-dev の VAE（ゲート付き）が必要。
- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)** (公開6日) - 個人 CCORE による Qwen3.5-4B のファインチューン（公式ではない）。Three.js による3Dシーン生成に絞った早期プレビューで、10/30 には参照画像を使う入力にも対応した。学習に使うデータセットは ThreeJS-3D-Scenes。
- **[CohereLabs/10-2026-qwen-investigation-traces](https://huggingface.co/datasets/CohereLabs/10-2026-qwen-investigation-traces)** (dataset, 公開5日) - Cohere がブログで取り上げた、人気のオープンウェイトモデル（Qwen 3.8 Flash Next）の「気がかりな挙動」の調査で得た会話トレースと生のトークン ID。内容の詳細は未確認。

## 所感

Tier 1 が静かな日は Mistral のような補助ソースで動きが見える。Large 4 のオープンウェイト化は、能力の競争より「拒否されない、止められない」というセキュリティ運用上の理由を前面に出している点が目立つ。論文はエージェントの共謀検知、逐次フィードバックの評価、環境の自動構築と、運用や評価の道具立ての話が続いた。なお LMArena は 10/28 公開版から変動がないため省略した。
