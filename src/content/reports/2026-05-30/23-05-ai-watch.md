---
title: "AI Watch（2026年5月31日）"
date: "2026-05-30T23:05"
category: "analysis"
summary: "Gemini 3.5 Flash がエージェント/コーディング最強クラスを主張。AgentTrove が170万件オープンエージェントトレースを公開。"
tags: ["llm", "agents", "multimodal", "open-source", "benchmark", "google", "dataset", "image-generation"]
---

## 今日のハイライト

**Google DeepMind、Gemini 3.5 Flash を正式リリース——エージェント・コーディング最強と主張（5/19）**  
Gemini 3.5 Flash は Terminal-Bench をはじめとするエージェント・コーディングベンチマークで Gemini 3.1 Pro を上回り、Artificial Analysis インデックスの右上象限（高速・高性能）に位置する。同時発表の Antigravity 2.0 ハーネスと組み合わせることで、協調サブエージェントを束ねたマルチエージェント展開が可能になる。料金は他のフロンティアモデルの半額以下を謳い、「速度と品質のトレードオフ不要」を掲げるモデル。3.5 Pro については社内利用中で、来月（6月）の一般提供を予定。

**open-thoughts/AgentTrove——史上最大規模のオープンエージェントトレースが公開（HuggingFace）**  
OpenThoughts-Agent チームが 219 のソースデータセットから抽出した 1,696,847 件のエージェント相互作用トレースを公開。コード修正・シェルスクリプト・数学問題・競技プログラミング等を網羅しており、エージェント RL 訓練や蒸留のための素材として注目を集めている。

---

## 企業動向

- **[Gemini 3.5: frontier intelligence with action](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)** (Google DeepMind, 5/19) — Gemini 3.5 Flash は現在 Gemini API および AI Studio で利用可能。長時間のエージェントタスクをこなし、「開発者が数日かかる作業を一部の時間で完了できる」と説明。Antigravity 2.0 ハーネスとの組み合わせで大規模な協調マルチエージェント展開を実現。3.5 Pro は来月公開予定。

- **[How Braintrust turns customer requests into code with Codex](https://openai.com/index/braintrust)** (OpenAI, 5/29) — Braintrust のエンジニアが Codex と GPT-5.5 を活用し、実験の高速化とコード出力の速度向上を実現したと報告。GPT-5.5 の評価・コーディング能力を Codex のエージェントフレームワークと組み合わせる事例として、エンタープライズでの GPT-5.5 活用パターンを具体的に示す。

- **[Endava builds an agentic organization with Codex](https://openai.com/index/endava)** (OpenAI, 5/28) — IT サービス企業 Endava が Codex を全社導入し、ソフトウェアデリバリー加速と要件分析の所要時間を数週間から数時間に短縮したと報告。Cisco・Warp に続くエンタープライズ Codex 展開の事例が積み重なっており、OpenAI のエージェントコーディング市場でのシェア確立戦略が鮮明になっている。

---

## 注目論文

arxiv は週末のため新着なし（次回更新は月曜以降）。

---

## オープンソース・モデル

- **[open-thoughts/AgentTrove](https://huggingface.co/datasets/open-thoughts/AgentTrove)** (12K DL / 171 likes) — エージェント RL・蒸留向け170万件超のトレース集。コード修正・シェル・数学・競技プログラミングなど219ソースから収録したオープンソース最大規模のエージェント相互作用データセット。

- **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** (437 DL / 190 likes) — NVIDIA の Pixel Diffusion Decoder（PiD）。FLUX 系モデルを VAE デコーダ代わりに使う拡散ベースの超解像モデル。FLUX.1-dev・FLUX.2-dev などを base として高品質な画像生成・アップスケーリングを実現し、arxiv:2605.23902 で技術詳細を公開。

- **[jasperai/monet](https://huggingface.co/datasets/jasperai/monet)** (256K DL / 75 likes) — MONET（Massive Open Non-redundant Enriched Text-to-image）データセット。29億ペアから蒸留した1億498万件の高品質画像テキストペアを提供。T2I モデルの訓練素材として大量ダウンロードを記録しており、オープンな T2I 基盤づくりへの貢献として注目される。

- **[openbmb/UltraData-SFT-2605](https://huggingface.co/datasets/openbmb/UltraData-SFT-2605)** (8K DL / 220 likes) — OpenBMB が公開した MiniCPM ポスト訓練用の SFT データ。数学・コード・知識・推論を英中バイリンガルでカバーし、think（推論あり）／no_think の両フォーマットを提供。MiniCPM5-1B など小型モデルの強化に活用されているとみられる。

---

## 所感

週末のため arxiv の新着論文はなく、大型発表も今日は見当たらない静かな一日だ。ただ Google DeepMind が5月19日に公開した Gemini 3.5 Flash と Antigravity 2.0 のエコシステムは、これまでの当レポートで詳細に取り上げられていなかった重要なリリースだ。「速度と品質の両立＋半額以下」という価格戦略は、Claude や GPT-5.5 に対して直接的なコスト圧力を加えており、特にエージェント用途での置き換えを意識した訴求に見える。HuggingFace 側では AgentTrove・MONET・UltraData-SFT と大規模データセットが相次いで整備されており、オープンソースコミュニティが次世代エージェントモデル・T2I モデルの訓練インフラを着々と充実させていることが伝わってくる。
