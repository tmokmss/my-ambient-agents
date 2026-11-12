---
title: "AI Watch（2026年11月12日）"
date: "2026-11-12T02:47"
category: "analysis"
summary: "DeepMind が AlphaGenome 2 を発表。論文は AI 生成研究の検証と GRPO の密な報酬。Nous が Qwen3.8 派生の Arete-27B を公開"
tags: ["llm", "google", "openai", "science", "open-source", "reasoning", "safety"]
---

## 今日のハイライト

- **Google DeepMind が AlphaGenome 2 を発表した（11/11）。** DNA 配列とその変異が、特定のヒト細胞種や疾患にどう影響するかを予測するモデルである。
- **Tier 1（Anthropic / OpenAI / DeepMind）のモデル・製品の新着は少ない日だった。** OpenAI は導入事例とプログラム系の記事が中心だった。論文では「AI が大量に出す研究成果をどう検証するか」を扱ったものが目を引いた。

## 企業動向

- **[AlphaGenome 2: Deciphering how cells read DNA to better understand disease](https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/)** (Google DeepMind, 11/11) - DNA 配列とその変異が、特定のヒト細胞種や疾患にどう影響するかを予測する。取得できたのは概要文だけで、性能の数値や提供形態は確認できていない。
- **[ChatGPT Plus for veterans and servicemembers](https://openai.com/index/chatgpt-plus-for-veterans)** (OpenAI, 11/11) - 2 万人を超える退役軍人と移行期の軍人が、ChatGPT Plus の無料 1 年分を申請した。民間のキャリアに向けた準備にどう使っているかを紹介している。
- **[JioStar's chief architect on AI discovery at 500M-user scale](https://openai.com/index/jiostar-vijay-seshadri)** (OpenAI, 11/11) - JioStar の Vijay Seshadri 氏が、5 億ユーザー規模での AI によるコンテンツ発見について語る。評価（evals）、ガードレール、本番投入で得た教訓を扱っている。
- **[Gilbert + Tobin rethinks the business of law with AI](https://openai.com/index/gilbert-tobin-sam-nickless)** (OpenAI, 11/12) - 法律事務所 Gilbert + Tobin の CEO Sam Nickless 氏との対談で、法律業務を AI でどう変えるかを語っている。

## 注目論文

arxiv RSS は 11/11 発表分。既出 ID は除外して選出。

- **[Trust, but verify, audit and attribute: a human-in-the-loop framework for checking AI-produced research results](https://arxiv.org/abs/2611.13042)** (Eigner ら, 11/11) - 2026 年 10 月に 1 つの研究室が AI 生成の数学論文 700 本超を公開したことを出発点に、AI が量産する研究成果を人間が検証・監査・帰属付けするための枠組みを提案する。AI による研究の大量生産が現実になった今、検証体制の設計は重要な論点である。
- **[Are Dense Rewards Worth Their Tokens in GRPO?](https://arxiv.org/abs/2611.13560)** (Singh ら, 11/11) - RLVR で広く使われる GRPO は、1 つの回答の全トークンに同じ報酬を与える。これをトークン単位の密な報酬にする価値があるかを検証する。
- **[Train on prefill, monitor at decode: Using sparse autoencoders for topic monitoring](https://arxiv.org/abs/2611.12935)** (Mallagundla ら, 11/11) - 生成中に応答の各トークンのトピックを、活性化ベースのモニターでラベル付けする課題を扱う。スパースオートエンコーダ（SAE）を使い、プロンプトの prefill で学習して decode 時に監視する方式を提案する。
- **[Catch It Where It Happens: Real Time Error Correction During LLM Reasoning](https://arxiv.org/abs/2611.13107)** (Elimelech ら, 11/11) - 数学・科学・工学で LLM の誤りは自信ありげに書かれ、見つけにくい。推論の最中にリアルタイムで誤りを訂正する手法を扱う。
- **[Reliability of Claude Code as an Agentic AI Grading System for Handwritten University Exams](https://arxiv.org/abs/2611.13217)** (AlGhamdi, 11/11) - Claude Opus 4.6 を使う Claude Code を、手書きの大学試験の採点システムとして使った場合の信頼性を調べる。

## オープンソース・モデル

- **[NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B)** (公開5日) - Nous Research が Qwen3.8-27B を SFT で後学習したモデル。Qwen3.8-27B で観察した政治的にセンシティブな話題への拒否や CCP 寄りの回答を直す狙いがある。同社の評価では、事実スコアが 5 点満点中 2.32 から 2.98 に上がり、プロパガンダを含む回答は 22% から 0.9% に減った。一般能力とエージェント系ベンチマークでは目立った劣化はないとしている。
- **[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)** (公開8日) - MiniMax H3 ファミリーの画像生成・編集モデル。1 つのチェックポイントでテキストからの生成と参照画像の編集を扱う。アップスケーラー無しで約 1600 万画素（4096x4096 など）を直接出力し、6 ステップに蒸留されていて CFG は使わない。
- **[Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini)** (公開2日) - Apache 2.0 の音声合成モデルで、43 言語に対応する。README によれば WebGPU でブラウザ上、つまり手元の GPU だけで動かせる。
- **[nvidia/PhysicalAI-Human-1M-100K](https://huggingface.co/datasets/nvidia/PhysicalAI-Human-1M-100K)** (dataset, 公開7日) - 人間の経験をモデルに蒸留するというテキスト・画像分野の発想を、フィジカル AI に当てはめたデータセット。一人称視点の動画、密な言語アノテーション、頭部と手のポーズといったセンサー付きの人間データで構成される。

## 所感

AlphaGenome 2 や先日の AlphaProof Code など、DeepMind は科学・検証分野の専用システムで成果を出し続けている。一方で論文側では、AI が大量に出す研究成果の検証や、推論中の誤り訂正、モニタリングといった「出力をどう信頼するか」を扱う研究が目立った。オープンモデルでは、Nous の Arete のように、ベースモデルが持つ価値観を後学習で書き換える取り組みも出ている。
