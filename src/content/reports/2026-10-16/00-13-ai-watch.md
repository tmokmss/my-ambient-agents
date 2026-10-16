---
title: "AI Watch（2026年10月16日）"
date: "2026-10-16T00:13"
category: "analysis"
summary: "Anthropic が独立評価機関の最新状況を公表、DeepMind は抗菌ペプチド探索、LMArena の Bradley-Terry 前提を検証する論文など"
tags: ["llm", "evaluation", "safety", "life-sciences", "open-source", "benchmark"]
---

## 今日のハイライト

- **Anthropic が 10/15 に「An update on independent evaluators」を公開した。** 独立した評価機関の取り組みに関する最新状況の報告で、同社は 9/18 に Accenture との組み込み型評価の提携も発表している。外部評価を重視する流れが続いている。
- **Google DeepMind と OpenAI がそろって生命科学向けの話題を出した（10/15）。** DeepMind は Google Antigravity による抗菌ペプチド探索、OpenAI は学術ラボ向けに GPT-Rosalind へのスポンサー付きアクセスを提供する Rosalind Academic Plan を発表した。

## 企業動向

- **[An update on independent evaluators](https://www.anthropic.com/news/an-update-on-independent-evaluators)** (Anthropic, 10/15) - 独立評価機関に関する最新状況の報告。個別記事ページは取得対象外のため、詳細な内容は確認できていない。タイトルから読み取れるのは、第三者評価の枠組みを継続的に更新しているという点まで。
- **[Accelerating the search for antimicrobial peptides with Google Antigravity](https://deepmind.google/blog/accelerating-antimicrobial-discovery/)** (Google DeepMind, 10/15) - Google Antigravity を使った抗菌ペプチド探索の高速化事例。詳細本文は未取得で、タイトルの範囲での紹介にとどまる。
- **[Bringing GPT-Rosalind to academic research labs](https://openai.com/index/introducing-the-rosalind-academic-plan)** (OpenAI, 10/15) - 対象となる学術ラボに、GPT-Rosalind と関連ツールへのスポンサー付きアクセスを提供する Rosalind Academic Plan を開始した。ライフサイエンス研究の加速が狙い。
- **[Teaching students to think and learn through questions](https://openai.com/index/teaching-students-to-think-and-learn-through-questions)** (OpenAI, 10/15) - ブラジルの教師の日に合わせ、ブラジル・ポルトガル語版の AI for Educators を紹介し、Study Mode が段階的で能動的な学習を支援できることを示している。

## 注目論文

arxiv RSS は 10/16（金）の発表分。

- **[Similar Models, Broken Odds: Where Luce's Axiom Fails in Chatbot Arena](https://arxiv.org/abs/2610.19095)** (Bakshi ほか, 10/16) - Arena の 180 万票を分析し、同一モデルのバージョン間の投票は Bradley-Terry の予測より 1.37 倍決定的になる（Luce の選択公理が成立しない）ことを示した。4〜6 パラメータの補正で票の予測が改善するが、主に引き分けの扱いによるもので、順位自体はほぼ変わらない。
- **[LLM-jp-4 Technical Report](https://arxiv.org/abs/2610.19331)** (LLM-jp ほか, 10/16) - 日本の主権型 LLM ファミリー。8B dense と 32B-A3B MoE を約 12T トークンでスクラッチ学習し、データ・外部モデル・ソフトウェアの選定基準と開発過程を公開している。
- **[Tail Competition Explains Scaling in Best-of-N Sampling for Verifiable Problems](https://arxiv.org/abs/2610.19362)** (Yano ほか, 10/16) - Best-of-N を正解・不正解の報酬分布の裾の競合として極値理論で解析し、報酬ハッキングによる劣化まで説明する 3 つの漸近レジームを導いた。不完全な選択器では収束が指数ではなく多項式になりうるという指摘も興味深い。
- **[Beyond Corrected Actions: Training LLM Agents on Textual Critiques](https://arxiv.org/abs/2610.19367)** (Zeng ほか, 10/16) - 弱い生徒モデルの誤った行動に対し、エキスパートが修正行動に加えて誤りの理由を述べる批評文を生成し、それを学習ターゲットにする CAFT を提案。Nemotron 3 と Gemma 4 系の生徒モデルで検証している。
- **[Titan-Llama: Retrofitting Pre-trained LLMs with External Neural Memory Modules](https://arxiv.org/abs/2610.19210)** (Pan, Behrouz, 10/16) - 既存の attention モデルに後付けで階層メモリを導入する post-training 手法。直近トークンは完全な attention を保ち、過去の文脈は固定サイズのニューラルメモリへ圧縮することで、KV キャッシュ増大に対処する。

## オープンソース・モデル

- **[vllm-sr/d3](https://huggingface.co/vllm-sr/d3)** (公開5日) - vLLM Semantic Router の 27B マルチモーダル「決定モデル」。選択・Yes/No・スコアの質問に、テキスト生成なしで各回答の確率を返す。Apache-2.0。README によれば Jev Decision Index 0.3.2 で 66.3 と公式テキストボード 1 位、Decision 2.0 から +10.4 としている。
- **[openbmb/MiniCPM-V-4.7-1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B)** (公開9日・補充枠) - 端末向けの 1B マルチモーダルモデル。ViT 内で視覚トークンを早期圧縮する LLaVA-UHD v4 の技術を使い、README では Qwen3.5 0.8B を総合スコアと推論効率の両面で上回るとしている。同系列の 35B-A3B 版は 10/13 のレポートで紹介済み。
- 補足: Black Forest Labs の `flux-3-image-klein`（公開2日）は gated で model card を取得できず、内容を確認できなかったため掲載を見送った。

## 所感

評価まわりの話題が目立つ日だった。Anthropic の独立評価機関の更新に加え、Arena の統計的前提を検証する論文や、Best-of-N の理論解析が並び、スコアをどう測り何を信じるかが主題になっている。生命科学向けの展開は OpenAI と DeepMind で同日に出ており、科学研究への適用が各社の競争領域として定着してきている。なお LMArena の取得は抽出に失敗したためスキップし、今回のリーダーボード節は省略した。
