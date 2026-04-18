---
title: "AI Watch（2026年4月19日）"
date: "2026-04-18T22:44"
category: "analysis"
summary: "Anthropicが広告非採用宣言・Anthropic Institute設立・Google/Broadcom計算資源パートナーシップ拡大を連続発表。HFでは中国系モデルが席巻。"
tags: ["llm", "infrastructure", "partnership", "open-source", "tts", "multimodal", "3d", "safety", "agents"]
---

## 今日のハイライト

**Anthropic、Google・Broadcomと複数ギガワット規模の次世代コンピュートパートナーシップを拡大**（~4/18）。「multiple gigawatts of next-generation compute」という表現が示す通り、フロンティアモデル開発に必要な計算資源の確保を最優先課題と位置付ける戦略的な発表。OpenAI・Google との開発競争が激化するなか、Anthropic が独自のコンピュートアクセス経路を強化する動きとして注目される。

**Hugging Face で中国系オープンモデルが席巻 — MiniMax-M2.7、GLM-5.1、VoxCPM2 がトレンド上位に並ぶ**。テキスト生成から音声合成、3D 世界モデルまで多様な分野で中国発モデルがコミュニティの注目を集めており、グローバルなオープンモデル勢力図に変化が生じている。

---

## 企業動向

- **[Anthropic expands partnership with Google and Broadcom for multiple gigawatts of next-generation compute](https://www.anthropic.com/news/google-broadcom-partnership-compute)**（Anthropic, ~4/18）— Google・Broadcom との既存パートナーシップを拡張し、次世代 AI トレーニングに必要な大規模コンピュートを複数ギガワット規模で確保すると発表。単純なクラウド契約を超えたインフラレベルの連携であり、モデル開発ペースを維持するための長期的な計算資源戦略の一環とみられる。

- **[Claude is a space to think](https://www.anthropic.com/news/claude-is-a-space-to-think)**（Anthropic, ~4/18）— Anthropic が「Claude は広告を掲載しない」と明言する異例の声明を発表。「広告のインセンティブ構造は、本物の思考支援ツールとして機能することと根本的に相容れない」と述べており、検索エンジンや SNS など広告依存のテックプラットフォームとの差別化を明確に打ち出した。

- **[Introducing The Anthropic Institute](https://www.anthropic.com/news/the-anthropic-institute)**（Anthropic）— 強力な AI が社会にもたらす最も重大な課題に正面から取り組む新組織「The Anthropic Institute」を設立と発表。モデル開発とは独立した研究・政策提言機能を持つ組織として、AI ガバナンス議論へのより踏み込んだ関与を示す。

- **[Australian government and Anthropic sign MOU for AI safety and research](https://www.anthropic.com/news/australia-MOU)**（Anthropic）— オーストラリア政府と AI 安全・研究に関する MOU（覚書）を締結。シドニーにアジア太平洋地域 4 番目の拠点も設置（[sydney-fourth-office-asia-pacific](https://www.anthropic.com/news/sydney-fourth-office-asia-pacific)）しており、オーストラリアを APAC 拠点と位置づける本格展開の一環。

---

## 注目論文

arxiv（cs.AI/cs.CL）は週末（土曜・日曜）を更新をスキップする設定のため、本日は新着論文なし。

---

## オープンソース・モデル

- **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** — MiniMax が公開したテキスト生成モデル。258k 超ダウンロード・952 likes を記録しトレンド入り。FP8 対応で効率的な推論が可能で、transformers ライブラリに統合済み。会話用途に最適化されたアーキテクチャを採用。

- **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** — 智谱AI（Zhipu AI）の GLM-5.1 MoE モデル。英語・中国語の両方を対象とし 103k ダウンロード・1398 likes を獲得。DSA（Dynamic Sparse Attention）を組み合わせた MoE 設計で、効率的な長文推論を実現。オープンソース中国語 LLM の最前線を更新する。

- **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** — OpenBMB が公開した多言語 TTS モデル。ボイスクローニング・ボイスデザイン機能を持ちながら Diffusion ベースの生成方式を採用。35k ダウンロードを記録し、Demo スペースと合わせて 1400 超の注目を集めている。中国語を主軸に多言語対応する実用的な音声合成モデル。

- **[tencent/HY-World-2.0](https://huggingface.co/tencent/HY-World-2.0)** — Tencent が公開した Image-to-3D の世界モデル（World Model）。静止画から 3D 空間構造を生成する機能に特化し、英語・中国語の両方をサポート。323 likes を獲得しコミュニティの注目を集めており、テキスト・画像に続く 3D 生成への取り組みとして注目される。

- **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** — Tencent の Embodied AI 向けビジョン言語モデル。画像・テキストを組み合わせて物理世界での行動計画を行う「身体性（Embodied）」特化型で、862 likes を記録。ロボティクスや物理シミュレーション応用を見据えた専用アーキテクチャ（HunyuanVL-MOT）を採用。

---

## 所感

今週の Anthropic は月曜に Claude Opus 4.7、火曜に Claude Design、そして本日（週末）も複数発表とリリースラッシュが続いている。特に Google・Broadcom との「複数ギガワット」規模のコンピュートパートナーシップ拡大は、次世代モデル開発に向けた資本投下の規模感を示しており、AI 競争が純粋な研究競争から「インフラ確保競争」へシフトしていることを改めて印象付ける。一方 Hugging Face では、MiniMax・GLM・VoxCPM・HY-World など中国発モデルが TTS・3D 生成・テキスト生成にわたって同時にトレンド入りしており、オープンモデルの中核プレーヤーが欧米から中国勢へと広がりを見せている。
