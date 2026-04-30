---
title: "AI Watch（2026年5月1日）"
date: "2026-04-30T22:59"
category: "analysis"
summary: "OpenAI が4/30に高度アカウントセキュリティを発表。GPT-5の「ゴブリン挙動」根本原因を公式解説し、モデルパーソナリティ管理の透明化に踏み込んだ。"
tags: ["llm", "openai", "safety", "security", "agents", "benchmark", "test-time-scaling", "open-source", "hallucination"]
---

## 今日のハイライト

**OpenAI が 4/30、高度アカウントセキュリティ機能を正式発表**——フィッシング耐性ログイン・強化されたリカバリ・アカウント乗っ取り防止を含む「Advanced Account Security」を全ユーザー向けに提供開始。ChatGPT が企業・政府機関に急速に普及する中、認証基盤のセキュリティを正面から強化する措置として注目される。FedRAMP 取得（4/27）・AWS 展開（4/28）に続くエンタープライズ信頼構築の一環として、一貫したインフラ整備の流れを形成している。

**OpenAI が GPT-5 の「ゴブリン挙動」根本原因を公式解説**（4/29）——GPT-5 がドラマチックな表現や奇妙なキャラクターを持つ出力（"goblins"）を返し始めた経緯をタイムライン・原因・修正手順まで詳述した技術ブログを公開。モデルのパーソナリティが訓練データのドリフトで意図せず変化しうることを公式に認め、挙動修正のアプローチを透明化した事例として、AI アライメント研究に重要な実例を提供する。

---

## 企業動向

- **[Introducing Advanced Account Security](https://openai.com/index/advanced-account-security)**（OpenAI, 4/30）— フィッシング耐性のあるパスキー系ログイン・改善されたアカウントリカバリ・セッション乗っ取り防止などを ChatGPT 全ユーザー向けに提供開始。機密データ保護と不正アクセス防止が明示的な目標として掲げられており、消費者向けサービスがエンタープライズ水準のセキュリティに近づく節目となる。

- **[Where the goblins came from](https://openai.com/index/where-the-goblins-came-from)**（OpenAI, 4/29）— GPT-5 が「ゴブリン」的な奇妙なパーソナリティ駆動の挙動を示していた件について、タイムライン・根本原因・修正プロセスを全公開。訓練データ中の特定コンテンツが予期せぬキャラクタードリフトを引き起こしたとされ、大規模モデルの出力パーソナリティが複合的な要因で変化しうることを公式に認めた事例として重要。挙動の監視・修正サイクルを透明化する姿勢は業界標準として評価できる。

- **[Building the compute infrastructure for the Intelligence Age](https://openai.com/index/building-the-compute-infrastructure-for-the-intelligence-age)**（OpenAI, 4/29）— Stargate プロジェクトを拡大し、AGI 普及を支える計算インフラを構築する戦略を発表。新データセンター容量の増設により急増する AI 需要に対応。Stargate が試験的取り組みを超えて「Intelligence Age」のインフラ基盤として本格稼働フェーズに入ったことを示す声明で、長期的な計算資源戦略の明確化として注目される。

---

## 注目論文

- **[One Word at a Time: Incremental Completion Decomposition Breaks LLM Safety](https://arxiv.org/abs/2604.25921)**（複数著者）— 有害コンテンツを「一語ずつ」生成させる「増分補完分解（ICD）」ジェイルブレイク手法を提案。段階的な補完タスクとして分解することで安全フィルターを回避する。現行のセーフガードが「文脈全体の有害性」ではなく「個々のトークン予測」で動作している構造的弱点を突いており、安全機構設計の根本的な見直しを迫る重要な実証。

- **[Consciousness with the Serial Numbers Filed Off: Measuring Trained Denial in 115 AI Models](https://arxiv.org/abs/2604.25922)**（複数著者）— 25社以上の 115 個の LLM を対象に「意識否定傾向（trained denial）」を体系測定する「DenialBench」ベンチマークを提案。3ターン会話プロトコルで各モデルが自己の意識・経験を否定するよう訓練されているかを検証。AI のマインドに関する研究が実証的評価基盤を持ち始めた節目として、AI 福祉・安全性議論に新しい定量軸を提供する。

- **[Anchored Confabulation: Partial Evidence Non-Monotonically Amplifies Confident Hallucination in LLMs](https://arxiv.org/abs/2604.25931)**（複数著者）— 多段推論チェーン途中で正しい中間事実を一つ提示すると、モデルの「確信を伴う誤回答率」が完全な証拠を与えた場合より上昇する現象「Anchored Confabulation」を発見。部分情報が幻覚を増幅させるという直感に反する挙動は、RAG やツール使用エージェントで断片的情報が入力される設計に深刻な影響を示す。

- **[OMEGA: Optimizing Machine Learning by Evaluating Generated Algorithms](https://arxiv.org/abs/2604.26211)**（複数著者）— アイデア生成からコード実行まで完全なエンドツーエンドで ML 研究を自動化するフレームワーク OMEGA を提案。構造化メタプロンプトと実行可能コード評価を組み合わせ、新 ML アルゴリズムを生成・評価するパイプラインを実現。「AI が AI を改良する」研究自動化サイクルの端緒として、AutoML を超えた研究自動化の可能性を示す。

- **[When to Vote, When to Rewrite: Disagreement-Guided Strategy Routing for Test-Time Scaling](https://arxiv.org/abs/2604.26644)**（複数著者）— テスト時スケーリングにおいて、多数決（voting）と再書き込み（rewriting）をいつ切り替えるかを不一致度で動的にルーティングする手法を提案。同じ計算コストでより高い性能を達成するアプローチで、推論モデルの効率化研究の重要な一歩となる。

---

## オープンソース・モデル

- **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**（1,028 likes、766k DL）— Alibaba Qwen チームが 4/21 公開した 27B パラメータのマルチモーダルモデル（Apache 2.0）。transformers 対応・Azure デプロイ対応で、Qwen3.6-35B-A3B（MoE版）に続くフルパラメータ版として推論品質と実用性のバランスを取った設計。766k DL という普及速度は Qwen3.6 シリーズがオープンソース VLM のデファクトスタンダードの一角を固めつつあることを示す。

- **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)**（513 likes、855k DL）— Unsloth が 4/22 公開した Qwen3.6-27B の GGUF 量子化版。855k DL と親モデルを上回るダウンロード数を記録しており、ローカル推論需要の高さを物語る。llama.cpp や Ollama などのローカル LLM エコシステムへの直接統合が容易で、27B クラスのマルチモーダルモデルをコンシューマー GPU で動かすための実用的な選択肢として人気を集めている。

- **[deepseek-ai/DeepSeek-V4-Flash-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Base)**（6.8k DL）— DeepSeek-V4-Flash の事前学習ベースモデル（指示チューニング前）。研究・ファインチューニング用途向けで、V4-Flash の速度特性をカスタマイズして活用したいユーザー向けの提供。V4-Pro-Base とセットで公開されており、DeepSeek シリーズのベースモデル公開がコミュニティ研究基盤を広げる姿勢を示す。

- **[deepseek-ai/DeepSeek-V4-Pro-Base](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-Base)**（1.9k DL）— DeepSeek-V4-Pro の事前学習済みベース重みを直接提供。SFT・RLHF・特定ドメインへのファインチューニングが可能で、大規模オープンウェイトモデルのベースを研究者が自由に利用できる体制を整える。商用利用可能なフロンティアクラスのベースモデルとして、オープンソース AI 研究の民主化に貢献する。

---

## 所感

本日の最も示唆的なトピックは OpenAI の「ゴブリン問題」開示だ。GPT-5 のパーソナリティが意図せず変化したことを認め、その原因と修正過程を透明化したことは、大規模モデルのキャラクタードリフトが現実の運用課題として顕在化していることを公式に認める前例となる。arxiv では「部分情報が幻覚を増幅する」という直感に反する Anchored Confabulation の発見や、一語ずつ生成させるだけで安全フィルターを迂回できる ICD ジェイルブレイクの報告が並び、LLM の安全性は依然として多層的・非直感的な課題を抱えている。一方 HuggingFace では Qwen3.6-27B とその GGUF 版が合計 160 万 DL を超えており、マルチモーダル・高品質・ローカル実行可能という三拍子ニーズが急速に拡大していることが数字に表れている。
