---
title: "AI Watch（2026年9月9日）"
date: "2026-09-09T00:03"
category: "analysis"
summary: "OpenAIがナビエ・ストークス方程式の懸賞問題にAI生成の解を発表、同日にGoogle DeepMindもゲノム全域の変異地図AlphaGenome Atlasを公開。"
tags: ["llm", "science", "agents", "benchmark", "open-source", "safety"]
---

## 今日のハイライト

**OpenAIが「ナビエ・ストークス方程式」のミレニアム懸賞問題に対するAI生成の解を、Leanによる形式的証明とともに公開した（9/8）。** クレイ数学研究所が100万ドルの懸賞をかけた21世紀最大級の未解決問題の一つに対し、AIが生成した解の詳細なレポートと形式証明を発表したもので、数学コミュニティによる査読・検証はこれから進む段階だが、ベンチマーク上のスコア競争を超えてAIが基礎科学の未解決問題そのものに手を伸ばし始めた事例として注目度が高い。同日にはGoogle DeepMindも「AlphaGenome Atlas」を発表し、ヒトゲノム上で起こりうる90億通りの一塩基変化すべてについて分子レベルの影響を予測した地図を公開しており、AIが基礎科学の最前線に食い込みつつあることを印象づける1日となった。

---

## 企業動向

- **[On the Navier–Stokes Millennium Prize Problem](https://openai.com/index/navier-stokes-solution)**（OpenAI, 9/8） - 上記ハイライト参照。ナビエ・ストークス方程式に関するAI生成の解と、Leanによる形式的証明をまとめたレポートを公開。
- **[AlphaGenome Atlas: A predictive map of every possible DNA letter change in the human genome](https://deepmind.google/blog/alphagenome-atlas-a-predictive-map-of-every-possible-dna-letter-change-in-the-human-genome/)**（Google DeepMind, 9/8） - ヒトゲノム上で起こりうる90億通りの一塩基変化それぞれについて分子レベルの影響を予測した地図を公開。既存のAlphaGenomeモデルの予測をゲノム全体に網羅的に適用した成果。
- **[How GPT-5.6 Sol helps run quantum computing experiments](https://openai.com/index/codex-quantum-computing-experiments)**（OpenAI, 9/8） - MITの研究者がGPT-5.6 SolとCodexを使い、量子コンピューティング実験の自律的な実行・結果分析・量子ビットのキャリブレーションを行った事例を紹介。
- **[Introducing ChatGPT Images 2.5](https://openai.com/index/introducing-chatgpt-images-2-5)**（OpenAI, 9/8） - アイデアやスケッチ、参考写真からよりパーソナライズされた高品質な画像を生成できるようにする画像生成機能の更新。
- **[Funding grants for new research into AI and teen development](https://openai.com/index/teen-development-research-grants)**（OpenAI, 9/8） - 生成AIが10代の発達・ウェルビーイング・安全性に与える影響を独立に研究するための500万ドルの助成プログラムを開始。
- OpenAIは同日、経済とAIの関係を論じるエッセイ「The Work Now Within Reach」や1Passwordの導入事例、報道機関支援の拡大なども公開しており、9/8は記事が集中する多産な一日だった。Anthropicのブログは直近3日以内の新着なし（最新は9/1）。

---

## 注目論文

arxiv RSSが空レスポンスを返したため、list ページより9/7発表分（cs.AI 205件・cs.CL 98件）から選出。

- **[Does Your Agent's Memory Survive a Model Upgrade? A Controlled Study of Memory Portability](https://arxiv.org/abs/2609.05339)**（Goyal, Ray, 9/7発表） - エージェントのメモリ形式（生ログ・RAG用チャンク・自然言語ノート要約・固定スキーマの知識グラフ）を新しいモデルに乗せ替えた際の劣化を48件の合成履歴で比較。固定スキーマの知識グラフは交換後も精度がほぼ変わらない（変化±0.002pt）のに対し、要約ノートは移行方向によって最大13ポイントも精度が変動し、生の履歴を残していない限り9割前後のケースで復旧もできないと報告。モデルを乗り換えるたびにエージェントの「記憶」をどう持ち越すかという実務的課題を定量化した。
- **[RISE: Recursive Improvement via Self-Extrapolating Policy Distillation](https://arxiv.org/abs/2609.05295)**（Li, Yavuz, Joty, 9/7発表） - 外部の教師モデルを使わず、学習中のチェックポイントと少し前の状態との差分を「教師」として外挿し、疎な強化学習の更新をトークン単位の密な蒸留信号に変換する手法。教師を毎イテレーション更新することで蒸留を一回限りの圧縮ではなく再帰的な自己改善ループに変え、数学・STEM・コード生成・複数ターンのエージェントタスクでRLVR単体や自己蒸留を上回った。
- **[Don't Drop Dropout: Optimizing Layer Sparsity for Efficient LLM Training and Inference](https://arxiv.org/abs/2609.05275)**（Elhoushi, Pretko, Dey, Zhang, 9/7発表、ICML 2026採択） - 近年のLLM事前学習ではほぼ使われなくなっていた層ドロップアウトを、層の分布・スケジュール・最適化設定を調整した上で再評価。271M〜8.2Bパラメータ・2,400件超の実験で、同じ学習FLOPsでより低い損失を達成しつつ学習FLOPsを最大25%削減でき、さらに早期終了や自己推測デコーディングなど推論時の最適化で最大1.5倍の高速化も得られると報告した。
- **[Necessary or Sufficient? Evaluating LLM Explanations With Behavioural Evidence](https://arxiv.org/abs/2609.05385)**（Pawar, Ramanayake, Kemal, Kandath, 9/7発表） - エージェントが判断とともに示す「根拠となった要因トップ3」の説明が実際の出力を左右しているかを、要因を変えたら出力が変わるか（必要性）・要因を残せば出力が保たれるか（十分性）という介入実験で検証。Claude・GPT・Geminiの8モデルで、挙げられた要因と実測の影響力の相関は0.35〜0.58程度に留まり、挙げられていない要因の方が最も弱い「上位3位」より強い影響を持つケースが最大6割近くあったと報告。エージェントの説明をそのまま監督・診断に使う危うさを定量化した。
- **[WearableQA: A Benchmark for Health Reasoning over Real-World Wearable Data](https://arxiv.org/abs/2609.05405)**（Lee, Chen, Chuang, Shenoy, 9/7発表） - 200人分・最長500日分のウェアラブル時系列データと血液バイオマーカーから、単一・複数信号にわたる生理学的推論を問う4,084問のベンチマークを構築。14モデルを評価した結果、正解率はチャンス水準10%に対し19.6%〜72.9%まで大きく分散し、大半のモデルが60%未満に留まるなど、実データに基づく健康推論はまだ解けていないことを示した。

---

## オープンソース・モデル

- **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** - DeepSeekによる画像・テキスト対応の軽量・実験的な「Flash」系派生モデル。フラッグシップ級モデルの高速版を各社が急いで揃える流れを、DeepSeekも追う形。
- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)** - OpenBMBによる2Bパラメータの小型言語モデル。端末上でも動かせる規模でありながら実用的な性能を狙うシリーズの最新版。
- **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)** - 4Bパラメータのテキスト生成モデル。詳細情報は限られるが、軽量モデル領域への注目が引き続き高いことを示すトレンド入り。

---

## 所感

OpenAIのナビエ・ストークス問題への挑戦とGoogle DeepMindのAlphaGenome Atlasが同日に並び、AIが基礎科学の最前線に食い込みつつあることを印象づける一日だった。一方arXiv側は地に足の着いた話題が多く、エージェントのメモリ移行、LLMの自己説明の信頼性、ドロップアウトの再評価など、「派手な能力」よりも「実際に使えるようにするための地味な検証・最適化」に焦点が当たっていた。LMArena・Artificial Analysisの両リーダーボードは前々回の観測時から数値が完全に一致しており、上位モデル間の順位・スコアの停滞がさらに長引いている。
