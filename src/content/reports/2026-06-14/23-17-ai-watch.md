---
title: "AI Watch（2026年6月15日）"
date: "2026-06-14T23:17"
category: "analysis"
summary: "リオデジャネイロ市が独自の397Bオープンモデルを公開。Anthropicが初の全米AI世論調査を発表。"
tags: ["llm", "open-source", "google", "anthropic", "multimodal", "safety", "benchmark"]
---

## 今日のハイライト

**リオデジャネイロ市政府が 397B パラメータのオープンモデルを公開（6/14）**  
ブラジルのリオデジャネイロ市政府（Prefeitura do Rio de Janeiro）が `Rio-3.5-Open-397B` を Hugging Face で公開した。国家・企業ではなく**市レベルの地方自治体**がフロンティア規模のマルチモーダルモデルを独自リリースするのは異例であり、AI 民主化の新たな形として注目を集めている。公開わずか数時間で 268 likes を獲得。

**Anthropic、初の全米 AI 世論調査「Anthropic Public Record」を発表（6/12）**  
AI に対するアメリカ国民の態度・意見を体系的に調査した初の Anthropic Public Record を公開。AI 企業が自社モデルの能力開発だけでなく、社会的受容度の計測・開示を始めたことは、業界の成熟を示すシグナルとして評価できる。

---

## 企業動向

- **[Results from the first Anthropic Public Record](https://www.anthropic.com/news/anthropic-public-record)** (Anthropic, 6/12) — AI に対する米国民の態度・意見を追跡する全国調査の第一弾。Claude Corps（非営利フェロー）や DXC・TCS との大型提携が続く中、Anthropic は「社会との接点」を意識した情報発信に転換しつつあることが見て取れる。世論調査の定期公開により、AI に対する市民感情の変化を業界が共有する素地を作る狙いがある。

- **[Fluid, natural voice translation with Gemini 3.5 Live Translate](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-live-3-5-translate/)** (Google, 6/9) — Gemini 3.5 の Live Translate 機能が流暢なリアルタイム音声翻訳を実現。単なる発話のテキスト変換ではなく、会話の流れやイントネーションを保ちながら異言語間の音声をほぼ遅延なく翻訳する。GPT-4o の音声モードと正面衝突する機能で、音声エージェントにおける Google のポジション強化を図る。

- **[DiffusionGemma: 4x faster text generation](https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/)** (Google, 6/10) — 従来の自己回帰（token-by-token）ではなく拡散プロセスでテキストを生成する DiffusionGemma を発表。最大4倍の高速化を実現しており、コスト効率の高い推論が求められるエッジ・モバイル用途で有力候補となる。Hugging Face には Google 公式モデル（788 likes）と Unsloth の GGUF 量子化版が同時にトレンド入りしており、実運用への移行が始まっている。

---

## 注目論文

arxiv は週末のため新規投稿なし（cs.AI / cs.CL フィード共に空）。

---

## オープンソース・モデル

- **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)** — リオデジャネイロ市政府が公開した 403B パラメータ規模のマルチモーダルモデル。企業でも国家機関でもなく**市政府**がフロンティア規模のオープンモデルを公開したのは前例がなく、AI 開発の裾野が広がっていることを象徴する出来事。行政サービス・教育・市民向け用途を念頭に置いた設計と推測される。

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — Google が公式公開した DiffusionGemma（26B、Active 4B 相当）の命令チューニング版。786 likes と高い注目を集めており、拡散型テキスト生成の実用性を自ら示すベンチマークモデルとして機能する。ローカル推論でも速度面で優位を発揮する見込み。

- **[Glint-Research/Fable-5-traces](https://huggingface.co/datasets/Glint-Research/Fable-5-traces)** — Fable 5（Claude Fable 5）の推論トレース 4,665 件を収録したデータセット。フロンティアモデルの思考プロセスを学習データとして活用するための素材として研究コミュニティが注目しており、公開から1日で 176 likes を獲得。オープンモデルの推論能力向上を狙う SFT・蒸留研究の裾野を広げる可能性がある。

- **[agents-last-exam/agents-last-exam](https://huggingface.co/datasets/agents-last-exam/agents-last-exam)** — AI エージェントを対象とした包括的評価ベンチマーク（153 問）。推論・ツール使用・長期タスク遂行能力を問う設計で、既存の静的ベンチマークでは捉えきれないエージェント能力の評価を目指す。174 likes で継続的に注目を集めている。

---

## 所感

今週の企業動向を振り返ると、Anthropic は Claude Corps（非営利フェロー）・DXC・TCS との大型 SI 提携・Public Record 世論調査と「社会実装」に軸足を移しており、純粋な能力競争とは異なる次元での存在感拡大を図っている。一方 Google は DiffusionGemma・Gemini 3.5 Live Translate と立て続けに実用的な技術発表を行い、開発者・エンドユーザー両面で攻勢をかけている。そして最も象徴的なのはリオデジャネイロ市が 400B 規模のオープンモデルをリリースしたことで、AI 開発の担い手が「テック大企業か国家か」という二項対立を超えつつある。arxiv が週末で新規論文ゼロという点は、火・木曜集中の論文投稿サイクルを改めて意識させる。
