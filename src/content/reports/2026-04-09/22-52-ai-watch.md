---
title: "AI Watch（2026年4月10日）"
date: "2026-04-09T22:52"
category: "analysis"
summary: "「不公正なルール回避も拒否するLLM」を安全と呼ぶか？Riemann-BenchでAIの数学フロンティアが IMO の先へ。Gemma 4 MoEバリアントも続々展開"
tags: ["safety", "alignment", "benchmark", "math", "diffusion-lm", "reasoning", "open-source", "gemma", "uncertainty"]
---

## 今日のハイライト

**「不公正なルール回避まで拒否するLLMは安全か？」という挑戦的な安全論文**（arxiv, 4/9）。`Blind Refusal` は、RLHF で学習済みのモデルが「不合理・不公正・例外的なルールの回避を支援するリクエスト」まで一律拒否するという問題を実証した論文。ルールへの盲目的服従は道徳的推論の欠如であると指摘し、アライメント研究のパラダイムに根本的な問いを突きつける。安全を追求するほど「正しい反抗」を阻害するというジレンマは、今後の政策・設計論争の火種になり得る。

**IMO の先を目指す数学ベンチ「Riemann-Bench」登場**（arxiv, 4/9）。AI が国際数学オリンピック金メダルレベルを達成した今、競技数学は評価として「飽和」しつつある。Riemann-Bench はリサーチレベルの深い理論知識と多段推論を要求する問題群で構成され、AI の本質的な数学理解能力の上限を探ることを狙う。「ムーンショット数学」というカテゴリを設定し、次世代評価標準の確立を目指す。

---

## 企業動向

- **[CyberAgent、ChatGPT Enterprise と Codex で AI 活用を加速](https://openai.com/index/cyber-agent)** (OpenAI, 4/9) — 日本の大手インターネット企業 CyberAgent が ChatGPT Enterprise と Codex を全社展開。広告・メディア・ゲームにまたがる多部門での AI 活用により、意思決定の迅速化と品質向上を実現していると報告。国内テック大手による本格的な AI 内製化の先行事例として、日本市場での AI 活用深化を示すケーススタディ。

---

## 注目論文

- **[Blind Refusal: Language Models Refuse to Help Users Evade Unjust, Absurd, and Illegitimate Rules](https://arxiv.org/abs/2604.06233)** (arxiv, 4/9) — 安全学習済み LLM が、不合理・不公正なルールの回避支援まで拒否することを実験的に実証。「ルールには正当な例外や破り方がある」という道徳的推論が現行モデルには欠如しており、これは安全訓練が生み出す「盲目的服従」バイアスだと批判的に分析。アライメント手法の根本設計を問い直す重要な反論材料となる。

- **[SELFDOUBT: Uncertainty Quantification for Reasoning LLMs via the Hedge-to-Verify Ratio](https://arxiv.org/abs/2604.06389)** (arxiv, 4/9) — ロジット非公開のプロプライエタリ推論 API でも適用できる不確実性定量化手法を提案。「Hedge-to-Verify Ratio（H2V）」という単一パス指標により、コスト高なサンプリングなしで推論モデルの自信度を効率的に測定する。本番環境での推論系 LLM の信頼性管理に直接使える実用的な手法。

- **[Riemann-Bench: A Benchmark for Moonshot Mathematics](https://arxiv.org/abs/2604.06802)** (arxiv, 4/9) — IMO 相当が飽和した数学 AI の限界を探る次世代ベンチマーク。競技数学が「インサイトやトリック」で解けるのに対し、リサーチレベルの理論知識と深い専門性を要求する問題群で構成。AI の「真の数学理解」を測定する新標準として、今後のフロンティアモデル評価の議論を牽引する可能性がある。

- **[The Illusion of Superposition? A Principled Analysis of Latent Thinking in Language Models](https://arxiv.org/abs/2604.06374)** (arxiv, 4/9) — 連続 CoT（Latent CoT）で推論するモデルが、複数候補解の「重ね合わせ（superposition）」を内部表現で維持しているという仮説を実証的に検証。学習なし・SFT・RL 訓練の三条件で分析した結果、superposition の実現度合いはモデルとタスクによって大きく異なることが判明した。解釈可能性研究と latent reasoning の交差点に位置する重要論文。

- **[STDec: Spatio-Temporal Stability Guided Decoding for dLLMs](https://arxiv.org/abs/2604.06330)** (arxiv, 4/9) — 自己回帰型と並ぶ次世代 LM アーキテクチャとして注目される拡散型 LLM（dLLM）向けのデコード改善手法。グローバルな信頼閾値に依存する既存デコーダの限界を、隣接トークンの空間的・時系列的な安定性を活用して克服する。dLLM の実用的な出力品質を引き上げる実装貢献として、この新パラダイムの普及を後押しする。

---

## オープンソース・モデル

- **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** （564 likes、100万DL超）— Gemma 4 シリーズの MoE（Mixture-of-Experts）バリアント。26B 総パラメータのうち推論時に活性化されるのは約 4B のみで、マルチモーダル（image-text-to-text）対応。旗艦の 31B-it と比べて推論コストを抑えつつ、エキスパートの選択的活用で高品質な応答を維持する設計。

- **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** （537 likes、78万DL超）— Gemma 4 ファミリーの「any-to-any」約 8B モデル。pipeline_tag が `any-to-any` と分類されており、マルチモーダル入出力をコンパクトなサイズで実現する。エッジデプロイや API コスト削減を意識するユーザー向けとして、Google の「全サイズレンジ対応」モデルファミリー戦略を補完する位置付け。

- **[ianncity/KIMI-K2.5-1000000x](https://huggingface.co/datasets/ianncity/KIMI-K2.5-1000000x)** （168 likes）— Moonshot AI の KIMI K2.5 モデルの推論・対話トレースを 100 万件規模で収録したデータセット。同作者の 70 万件版から規模を拡張したもので、KIMI 系モデルの能力を他モデルへ蒸留するリソースとして活用されることが期待される。Claude Opus 4.6 蒸留データセットに続き、中国発フロンティアモデルの OSS への還流が続いている。

---

## 所感

今日は大型企業発表が少なく、研究コミュニティが主役の一日だった。「Blind Refusal」は RLHF 系アライメントが生み出す「過保守化」という見落とされがちな盲点を実験的に明示しており、安全設計の根本哲学を問い直す論文として今後引用が増えるだろう。数学 AI の評価は IMO 飽和により「次のフロンティア」を必要とするフェーズに入っており、Riemann-Bench はその新基盤を打ち立てようとしている。Gemma 4 の MoE・any-to-any バリアントが続々整備される様子からは、Google が「旗艦モデル 1 本」戦略から「全用途・全サイズをカバーするモデルファミリー」戦略へと本格移行していることが読み取れる。
