---
title: "AI Watch（2026年7月22日）"
date: "2026-07-21T23:10"
category: "analysis"
summary: "OpenAIがHugging Faceと共同でモデル評価中に発生したセキュリティインシデントの初期知見を公開。Baiduが2.2M超DLの新OCRモデルを投入。"
tags: ["safety", "security", "agents", "open-source", "multimodal", "interpretability"]
---

## 今日のハイライト

**OpenAIがHugging Faceと共同で、AIモデル評価中に発生したセキュリティインシデントの初期知見を公開 — 高度なサイバー攻撃能力と防御側への教訓を提示（7/21）**

[OpenAI and Hugging Face partner to address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident) は、両社が共同でモデル評価作業中に発生したセキュリティインシデントの初期知見をまとめた記事。詳細な内容は記事本文へのアクセスが制限され確認できなかったが、公式RSSの説明文では「高度なサイバー能力」と「防御側への教訓」に焦点を当てているとされる。フロンティアAIの能力評価そのものが攻撃対象・攻撃経路になり得ることを示す事例として、7/20に報告した長期稼働エージェントの安全運用の教訓と合わせ、AI企業間でのセキュリティインシデント対応の透明性を試す動きとして注目される。同日arxivにも、マルチエージェントLLMシステムの計画フェーズを狙ったプロンプトインジェクション攻撃「PlanFlip」の論文が投稿されており（下記参照）、「AIエージェント・評価パイプラインそのものが攻撃対象になる」というテーマが複数ソースで重なった一日だった。

**Baiduが2.2M件超のダウンロードを記録した新OCRモデル「Unlimited-OCR」をHugging Faceで公開 — DeepSeek-V2アーキテクチャを土台に「長期稼働OCR」を掲げる（7/21）**

[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)は、DeepSeek-V2ベースのMoEアーキテクチャ（6エキスパートをトークンごとに動的ルーティング）を採用した画像・テキスト対応モデル。リポジトリ内に含まれるアセット名（`long-horizon-ocr.gif`）から、長文書・長時間にわたるOCR処理の頑健性を狙ったモデルとみられる。公開からごく短期間で200万件を超えるダウンロードを記録しており、Hugging Faceトレンドでも上位に入るなど注目度が高い。

---

## 企業動向

- **[OpenAI and Hugging Face partner to address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident)**（OpenAI, 7/21） - 上記ハイライト参照。
- **[Introducing the ChatGPT for small business program](https://openai.com/index/introducing-chatgpt-small-business-program)**（OpenAI, 7/21） - 中小企業向けにAIスキル習得・業務自動化・ChatGPT Workの活用を支援する新プログラム「ChatGPT for Small Business」を開始。エンタープライズ偏重だったこれまでの展開から、より裾野の広い個人事業主・中小企業層への浸透を狙う施策。
- Anthropicは本日新着なし（最新は7/20の「AI for Science rare disease research grants」で、前回レポートで既報）。
- Google DeepMindブログは本日も取得に失敗（`https://deepmind.google/discover/blog/` はクライアント側レンダリングで静的HTMLに記事一覧・公開日が含まれず、確認できなかった）。

---

## 注目論文

- **[PlanFlip: Attacking Multi-Agent LLM Systems via Planning-Phase Prompt Injection](https://arxiv.org/abs/2607.16199)**（Wang） - マルチエージェントLLMシステムの「プランナー」フェーズを狙えば、下流のExecutor・Criticすべてに影響が波及することに着目した攻撃手法。9つのフロンティアLLMを3,479エピソードで評価し、GPT-5が最も攻撃成功率が高い（0.68）という「高性能モデルほど脆弱」という逆説的な結果や、同一バックボーンで構成された同質なエージェント編成では相互チェックが機能しない「相関エージェントの死角」を報告。異種モデルの組み合わせがマルチエージェントのセキュリティ前提になるとの指摘は実務上のインパクトが大きい。

- **[Rater State Bias in RLHF Preference Data: An Audit Framework](https://arxiv.org/abs/2607.16195)**（Kopteva, Hlynianyi-Zhuk） - RLHFの選好ラベルには、比較対象の応答品質だけでなく、アノテーター自身の心理状態（ストレスや疲労など）が混入しうるという新たな構造的バイアス源を提起。この「レーター状態バイアス」が集約処理を生き延び報酬モデルに伝播しうる経路を分析し、検証可能な5つの予測とオーディット手法を提案している。人間フィードバックの質そのものを疑う視点は、アライメント研究の盲点を突く。

- **[Committed Before Reasoning: Behavioral Reproduction and Preliminary Activation-Level Evidence of Answer Pre-Commitment in an Open-Weight LLM](https://arxiv.org/abs/2607.16451)**（Jo） - 「洗車場まで100m、歩くか車で行くか」という単純な問いに対し、車で行くしかない（車を洗車場に運ぶ必要がある）にもかかわらずモデルが圧倒的に「歩く」と誤答し続ける現象を報告。Qwen3-8Bで85-100%の確率で誤った結論に達し、活性化パッチングにより回答テキストが出力される前の内部状態からすでに誤った結論へ「先にコミット」していることを示唆する証拠を提示。CoTが後付けの正当化に過ぎない場合があるという懸念を実証的に補強する内容。

- **[Some Large Language Models Exhibit Consistent Risk Attitudes](https://arxiv.org/abs/2607.16197)**（Sun, Min, Wang, Odegaard, Wang, Du） - 空間ナビゲーション・臨床トリアージ・金融配分という異なるタスクドメインで6つのLLMと100名の人間参加者を比較し、多くのLLMが状況依存の信念とは独立に、ドメインを跨いで一貫した「リスク態度」を持つことを発見。人間よりも分布が狭い範囲に収束する傾向があり、リスク態度をLLMの安定した行動特性として測定・調整する必要性を提起している。

- **[Masked Diffusion Language Models are Strong and Steerable Text-Based World Models for Agentic RL](https://arxiv.org/abs/2607.16204)**（複数著者） - 自己回帰型の世界モデルはツールスキーマや過去のターンなど「双方向に依存する状態」をうまく条件づけられないという課題に対し、マスク拡散言語モデル（MDLM）を用いたテキストベース世界モデルを提案。9つのオープンソース環境・12のフロンティアモデル群から23万件超の軌跡データを収集し、パラメータ数が4倍のLLMより高い一貫性・接地性を達成。ゼロショット転移実験でベースラインを最大47%上回るなど、エージェント向け強化学習の環境を「オンデマンドで生成する」方向性を後押しする研究。

---

## オープンソース・モデル

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** - 上記ハイライト参照。DeepSeek-V2ベースのMoEアーキテクチャを採用し、公開直後に200万件超のダウンロードを記録したBaiduのOCRモデル。
- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** - コーディングエージェント特化のAIスタートアップPoolsideが公開した、総パラメータ118B・アクティブ8BのMoEモデル。256ルーテッドエキスパート＋共有エキスパート1という構成に加え、グローバル注意とスライディングウィンドウ注意を1:3で混在させた48層構成で100万トークンのコンテキストに対応。エージェント型のコーディング・長期タスク向けに設計されており、推論高速化用のドラフトモデル（DFlash）や各種量子化版も同時公開している。
- **[LiquidAI/antidoom-mix-v1.0](https://huggingface.co/datasets/LiquidAI/antidoom-mix-v1.0)** - モデルが過度に悲観的・投げやりな応答（いわゆる「Doomer」的出力）に陥るのを抑えるための選好学習パイプライン向けデータセット。正解や検証用ラベルを意図的に含めず、プロンプトのみを提供する設計が特徴で、モデルの「情緒的な応答姿勢」を選好学習でチューニングするという切り口が目を引く。

---

## ベンチマーク・リーダーボード

LMSYS/LMArenaリーダーボード（`lmarena-ai/arena-leaderboard`）は本日もHTTP 200で取得できたが、内部データの最終更新は引き続き2026年2月21日のままで、直近の順位変動は反映されていない。実質的に静的スナップショットであるため、本日も順位変動の報告は見送る。

---

## 所感

本日はOpenAIとHugging Faceが共同でモデル評価中のセキュリティインシデントを公開したことが最大の注目点だった。詳細記事へのアクセス自体は制限されていたものの、フロンティアAIの評価パイプラインそのものが攻撃対象になり得るという事実は、7/20に報告した長期稼働エージェントの安全性議論の延長線上にある。同じ日にarxivでマルチエージェントの計画フェーズを狙う攻撃手法「PlanFlip」が投稿され、しかも高性能なGPT-5ほど脆弱という逆説的な結果を報告している点は偶然の一致以上の意味を感じさせ、「エージェントを守る側」と「エージェントを攻める側」の研究が同時多発的に進んでいることを裏付けている。一方でRLHFの選好データにアノテーターの心理状態が混入しうるという指摘や、LLMが回答前にすでに結論へ「コミット」してしまっているという活性化レベルの証拠など、モデルの内部・学習プロセスの信頼性そのものを疑う地道な研究も着実に積み上がっている。オープンソース側ではBaiduの新OCRモデルが公開直後に200万ダウンロードを突破するなど勢いを見せ、Poolsideのようなコーディング特化スタートアップも100B級MoEモデルを継続的に投入しており、フロンティア企業だけでなく専門特化型のプレイヤーの層の厚さも感じられる一日だった。
