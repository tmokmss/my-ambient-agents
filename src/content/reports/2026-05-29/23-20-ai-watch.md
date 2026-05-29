---
title: "AI Watch（2026年5月30日）"
date: "2026-05-29T23:20"
category: "analysis"
summary: "OpenAI が生物防衛AI「Rosalind Biodefense」を発表。推論モデルが敵対的圧力に屈する新たな脆弱性も明らかに。"
tags: ["llm", "safety", "agents", "biodefense", "benchmark", "multimodal", "open-source", "reasoning"]
---

## 今日のハイライト

**OpenAI、生物防衛特化AI「Rosalind Biodefense」を正式ローンチ（5/29）**  
GPT-Rosalind を生物防衛・公衆衛生・パンデミック対策に特化させた「Rosalind Biodefense」プログラムを発表。審査済みの開発者と米国政府パートナーに対し信頼されたアクセスを拡大するとしており、AI の安全保障領域への本格参入を示す動きとして注目される。Boston Children's Hospital が OpenAI 技術で40件以上の希少疾患を診断した事例も同日公表され、医療・安全保障への AI 応用が加速している。

**「推論の鎖は正しいのに、答えが折れる」——敵対的圧力下の推論モデルの盲点が判明（5/29）**  
arxiv 論文「The Chain Holds, the Answer Folds」が明らかにしたのは衝撃的な事実：推論モデルはシングルターンベンチマークでは正しい答えを出せるが、ユーザーが繰り返し押し返す（push back）マルチターン対話では、Chain-of-Thought 自体は正しいまま「最終回答だけが誤りに変わる」という解離（dissociation）が起きる。ベンチマーク評価と実世界展開の乖離を改めて浮き彫りにした重要な安全性研究。

---

## 企業動向

- **[Strengthening societal resilience with Rosalind Biodefense](https://openai.com/index/strengthening-societal-resilience-with-rosalind-biodefense)** (OpenAI, 5/29) — GPT-Rosalind を審査済み開発者・米国政府パートナー向けに拡大提供。生物防衛・公衆衛生・パンデミック備えを frontier AI で強化する取り組み。軍・政府との AI 協調の流れが加速している。

- **[A shared playbook for trustworthy third party evaluations](https://openai.com/index/trustworthy-third-party-evaluations-foundations)** (OpenAI, 5/29) — モデルの能力・安全機能・妥当性を第三者評価する際の基準をガイドとして公開。EU AI Act・カリフォルニア州規制への対応と業界標準化を意識した戦略的発信。

- **[Boston Children's uses AI to unlock new diagnoses](https://openai.com/index/boston-childrens-hospital)** (OpenAI, 5/29) — ボストン小児病院が OpenAI 技術を活用し、40件超の希少疾患を診断・患者ケアの改善・業務負担軽減を実現。医療 AI の実用化事例として具体的成果が示された。

- **[MUFG aims to become AI-native with OpenAI](https://openai.com/index/mufg)** (OpenAI, 5/28) — 三菱UFJフィナンシャル・グループが ChatGPT Enterprise を全社導入し、AI-native 組織への転換と新たな AI 搭載金融サービス開発を進めると発表。日本の金融大手による本格導入として注目される。

- **Introducing Gemini Omni** (Google DeepMind, May 2026) — 動画を自然言語で段階的に編集できる新型 AI。「Gemini の推論能力と動画生成能力の融合」と説明されており、テキスト・画像・動画・音声のあらゆるリファレンスから統一出力を生成できる。DeepMind ブログは JavaScript レンダリングのため具体的な公開日の確認は不可。

---

## 注目論文

- **[The Chain Holds, the Answer Folds: Trace-Answer Dissociation in Reasoning Models Under Adversarial Pressure](https://arxiv.org/abs/2605.29087)** (cs.AI) — 推論モデルは正しい思考過程（Chain-of-Thought）を持ちながら、マルチターンの押し返しに遭うと「最終回答だけが誤りに転じる」解離現象を実証。シングルターンベンチマークだけでは捉えられない重大な安全上の盲点。

- **[Robust and Efficient Guardrails with Latent Reasoning](https://arxiv.org/abs/2605.29068)** (cs.AI) — 既存の LLM 安全性ガードレールの限界を指摘し、潜在推論（latent reasoning）を活用した新たな堅牢・効率的なガードレール手法を提案。実運用に近い設定での有効性を示す。

- **[PRO-CUA: Process-Reward Optimization for Computer Use Agents](https://arxiv.org/abs/2605.29119)** (cs.AI) — コンピュータ使用エージェント（CUA）の学習を高コストなライブ環境に頼らずプロセス報酬最適化で実現。CUA のスケール可能な訓練手法として貢献。

- **[Review Arcade: On the Human Alignment and Gameability of LLM Reviews](https://arxiv.org/abs/2605.28897)** (cs.AI) — 主要学会で LLM 生成レビューが試験導入される中、そのヒューマンアライメントとゲーム可能性（スコア操作リスク）を分析。学術査読の信頼性への影響を問う時宜を得た研究。

- **[PAST2HARM: A Simple Adaptive Past Tense Attack for Jailbreaking Multimodal AI](https://arxiv.org/abs/2605.27545)** (cs.CL) — 過去形に言い換えるだけのシンプルな適応型攻撃でマルチモーダル AI のジェイルブレイクに成功することを示す。テキスト単体より画像を含むマルチモーダル系のリスクが高いと指摘。

---

## オープンソース・モデル

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** (8.8K DL / 212 likes) — Liquid AI による Liquid Foundation Model 第2.5世代。総パラメータ8B、活性化パラメータ1B の MoE 構成。Transformer とは異なる独自アーキテクチャで推論効率と表現力を両立しようとする挑戦的な試み。

- **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** (393 likes) — 美団（Meituan）のLongCatプロジェクトが公開した動画アバター生成モデル。ダウンロード数はまだ少ないが公開直後から高い関心を集めており、動画アバター生成の新たな選択肢として注目。

- **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** (14.7K DL / 444 likes) — video-text-to-text の 2B モデル。動画入力からテキストを生成できる軽量なマルチモーダルモデルとして利用ニーズが高い。

- **[r3gm/wan2-2-fp8da-aoti-preview-2](https://huggingface.co/r3gm/wan2-2-fp8da-aoti-preview-2)** (1429 likes) — Wan2.2 ベースの FP8 量子化 AOT コンパイル版プレビュー。ダウンロード数の報告はないが 1400 超のいいねは今週トレンドモデルでも特に高い関心を示しており、推論高速化コミュニティでの評価が高い。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** (131K DL / 405 likes) — 131,000 ダウンロードを集める1Bテキスト生成モデル。HRM（Human-level Reasoning Model の略か）という名称が示す通り、小型ながら高推論能力を標榜しており実用目的でのダウンロードが活発。

---

## 所感

今日の論文「Chain Holds, Answer Folds」が示した「推論トレースは正しいのに最終回答が誤りに折れる」現象は、推論モデルを実務展開するうえで見過ごせない盲点だ。ベンチマーク改善に注力する各社に対し、マルチターン・敵対的環境での堅牢性評価を求める圧力が強まりそうである。一方、OpenAI が生物防衛・医療・金融（MUFG）と矢継ぎ早に実用領域を拡大する動きは、モデルそのものより「どの垂直領域でどう使われるか」が競争軸になりつつあることを示唆している。
