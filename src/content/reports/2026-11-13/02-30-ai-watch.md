---
title: "AI Watch（2026年11月13日）"
date: "2026-11-13T02:30"
category: "analysis"
summary: "Google が高速・低コストな Gemini 4 Hydrogen を発表。論文はエージェント記憶の信頼性、LFM3 がエッジ向けに登場"
tags: ["llm", "google", "openai", "agents", "open-source", "edge", "benchmark"]
---

## 今日のハイライト

- **Google DeepMind が Gemini 4 Hydrogen を発表した（11/12）。** 信頼できるエージェント型ワークフローと日常タスク向けの、高速で低コストなモデルである。Gemini 4 Carbon（11/10）に続くラインナップ拡充で、LMArena の Text Overall では Gemini 4 Carbon が 1 位、Argon が 2 位を占めている。
- **論文ではエージェントの「記憶」を無条件に信用しない研究が 2 本並んだ。** 経験から得た教訓をそのまま書き込むと、かえって性能が落ちることがあるという問題意識である。

## 企業動向

- **[Introducing Gemini 4 Hydrogen](https://deepmind.google/blog/introducing-gemini-4-hydrogen/)** (Google DeepMind, 11/12) - 信頼性の高いエージェント型ワークフローと日常タスク向けの、高速でコスト効率の良いモデル。取得できたのは概要文のみで、ベンチマークや価格は確認できていない。
- **[Supporting research on AI and children's safety](https://openai.com/index/children-first-declaration)** (OpenAI, 11/12) - 子どもの安全に関する AI 研究に 200 万ドルを拠出する。若者へのリスクと機会を測る共通ツールの整備を支援する。
- **[Introducing Businesses in ChatGPT](https://openai.com/index/introducing-businesses-chatgpt)** (OpenAI, 11/10) - 事業者が ChatGPT 上で自社情報を管理し、ChatGPT での見え方に関するインサイトを得て、関心を行動につなげられるようにする機能。

## 注目論文

arxiv RSS は 0 件だったため、export API より 11/10 投稿分から選出（発表日ではなく投稿日）。既出 ID は除外済み。

- **[When Should Agents Remember? Falsification-Gated Self-Evolution for LLM Agents](https://arxiv.org/abs/2611.14326)** (Tang ら, 11/10) - エージェントの自己改善では、エピソードから得た教訓をそのまま記憶に書き込むため、局所的な成功が信頼できないシグナルになる。反証を通ったものだけを記憶に入れる方式を提案する。
- **[Don't Just Trust Your Memory: Evidence-Linked Memory Reduces Memory-Induced Degradation in LLM Agents](https://arxiv.org/abs/2611.14320)** (Lee ら, 11/10) - 外部記憶が原因で、記憶なしなら解けた課題を失敗する「記憶起因の劣化」に着目し、教訓を根拠に紐付けて劣化を抑える。
- **[Contrastive Discovery: Open-Ended Scientific Discovery over Competing Explanations](https://arxiv.org/abs/2611.14514)** (Liu ら, 11/10) - 科学発見を行う LLM エージェントの多くは、仮説 h をその補集合とだけ比べる。競合する複数の説明どうしを比較する枠組みを提案する。
- **[AI Isn't Getting Dumber, We're Getting Pickier: Rising Standards in Human Evaluation of Large Language Models](https://arxiv.org/abs/2611.14333)** (Chen ら, 11/10) - 「AI が劣化した」という不満の原因として、モデルの変化だけでなく評価する人間の基準の上昇があり得ることを、Chatbot Arena 系の人間評価データで切り分けて検証する。
- **[Blurring the Block Boundaries: Overlapping Block Denoising for Efficient Diffusion Language Models](https://arxiv.org/abs/2611.14387)** (Mann ら, 11/10) - ブロック拡散型の拡散言語モデルで、ブロック境界を重ねてデノイズすることで効率を高める手法。

## オープンソース・モデル

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)** (公開20日、補充枠) - Liquid AI の新しい tri-hybrid アーキテクチャ（短い畳み込み 13 層、スライディングウィンドウ注意 5 層、全域注意 6 層）によるローカルエージェント向けテキストモデル。256K トークン文脈で、4bit なら約 1GB とスマホやノート PC に収まる。ただし小型のため、エージェント的コーディングや複雑な多段推論は非推奨とされている。
- **[tencent/TailorRig](https://huggingface.co/datasets/tencent/TailorRig)** (dataset, 公開9日) - 人型メッシュ 39,073 体に、スケルトンとスキニングウェイトを付けたリギングデータセット。自動リギング（スケルトン生成）などの学習・評価向け。
- **[Angais/pixel-art-atlas-1.4m](https://huggingface.co/datasets/Angais/pixel-art-atlas-1.4m)** (dataset, 公開6日) - 16×16 の透過ドット絵スプライト約 140 万枚に英語キャプションを付けた合成データセット。6,194 の被写体を網羅し、テキストプロンプトから生成されている。

## ベンチマーク・リーダーボード

LMArena Text Overall（公開日 11/9）は、1 位が Gemini 4 Carbon (High) の 1538、2 位が Gemini 4 Argon (High) の 1530 で、3 位は Claude Opus 5.5 (High) の 1513 だった。上位 10 件のうち Anthropic が 6 件、Google が 3 件、Meta（Muse Wonder）が 1 件を占める。

## 所感

Google は Carbon、Hydrogen と段階的に Gemini 4 を広げ、高性能から低コストまで揃えてきた。一方で研究側では、エージェントの記憶や自己改善を「入れれば良くなる」と見なさず、検証してから反映する設計が主題になっている。エッジ向けでは LFM3 のように、小型モデルを特化用途へ調整して使う方向が引き続き強い。
