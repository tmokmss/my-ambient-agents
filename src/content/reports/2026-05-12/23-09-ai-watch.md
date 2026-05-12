---
title: "AI Watch（2026年5月13日）"
date: "2026-05-12T23:09"
category: "analysis"
summary: "OpenAI が Codex 活用事例を一挙公開。SFT vs RL の本質を整理した「能力の引き出し vs 創出」論文が登場。"
tags: ["llm", "agents", "codex", "post-training", "safety", "vlm", "healthcare", "open-source", "benchmark"]
---

## 今日のハイライト

**OpenAI、Codex の実用事例を一挙三本公開——AI コーディングエージェントが "職場の標準装備" へ（5/12）**——OpenAI は同日付で「金融チームの Codex 活用」「NVIDIA エンジニアの Codex 活用」「Parameter Golf から学んだ AI 支援研究の知見」を立て続けに公開した。特に Parameter Golf は 1,000 人超の参加者・2,000 件超の応募を集めた大規模コンテストで、AI 支援の機械学習研究・コーディングエージェント・量子化・新規モデル設計を厳密な制約下で競った。一連の発信は「GPT-5.5 + Codex」をコーディング作業の事実上の標準へ押し上げようとする戦略的メッセージングであり、Anthropic の Claude Code との直接対決が激化している。

**「SFT は模倣、RL は発見」——その単純化を乗り越える自由エネルギー理論（5/13 arxiv）**——新論文「On Distinguishing Capability Elicitation from Capability Creation in Post-Training」が、SFT と RL をざっくり「模倣 vs 発見」と区別する従来の図式に異議を唱える。重要なのは「学習がプレトレーニング済みモデルの既存確率を高めるだけか、到達可能な行動空間そのものを変えるか」であり、自由エネルギー原理の枠組みでこの区別を定式化した。ファインチューニング研究の解釈精度を上げる理論的土台として注目される。

---

## 企業動向

- **[What Parameter Golf taught us about AI-assisted research](https://openai.com/index/what-parameter-golf-taught-us)**（OpenAI, 5/12）— 1,000 人超が参加した AI 支援 ML 研究コンテスト「Parameter Golf」の振り返り。厳格なパラメータ制約の下で量子化・アーキテクチャ探索・コーディングエージェントを駆使する競技形式で、AI による科学的探索の加速を実際に体験できるプラットフォームとして機能。参加者が AI を「ツール」としてではなく「研究パートナー」として活用するパターンが観察された点が今後の示唆を持つ。

- **[How NVIDIA engineers and researchers build with Codex](https://openai.com/index/nvidia)**（OpenAI, 5/12）— NVIDIA の社内チームが GPT-5.5 搭載 Codex を使って本番システムのリリースを加速し、研究アイデアを実行可能な実験に高速変換しているかを紹介。研究開発から本番デプロイまでの時間短縮が定量的に示されており、GPU メーカー自身が AI コーディングエージェントを全面採用している事実は業界へのシグナルとして重い。

- **[How finance teams use Codex](https://openai.com/academy/how-finance-teams-use-codex)**（OpenAI, 5/12）— 財務チームが Codex を使って MBR（月次業績レビュー）・報告書・差異分析・モデル検証・計画シナリオを実際の業務入力から自動生成するワークフローを解説。コードを書かない財務担当者が自然言語で Codex を操作するユースケースが前面に出ており、AI コーディングエージェントのターゲットが「エンジニア専用」から「全職種」へと広がっていることを示す。

---

## 注目論文

- **[On Distinguishing Capability Elicitation from Capability Creation in Post-Training: A Free-Energy Perspective](https://arxiv.org/abs/2605.08368)**（Yuhao Li, Shengchao Liu）— 「SFT は模倣・RL は発見」という単純二分法を自由エネルギー原理で精緻化した理論論文。訓練手法の差異ではなく「プレトレーニング後に到達可能な行動空間を広げるか否か」が本質的な問いと論じる。ファインチューニングの効果を解釈する際の理論的枠組みとして、今後の後訓練研究の出発点になりうる。

- **[The Attacker in the Mirror: Breaking Self-Consistency in Safety via Anchored Bipolicy Self-Play](https://arxiv.org/abs/2605.08427)**（複数著者）— 安全性向上のため普及している「セルフプレイ型レッドチーム」が実は根本的な脆弱性を抱えることを実証。パラメータ共有によって攻撃者と防御者が同じ表現を使わざるを得ず Nash 均衡への収束が保証されないことを示し、「Anchored Bipolicy Self-Play」でこの限界を突破するジェイルブレイク手法を提案。安全性研究者が直視すべき発見。

- **[Where Reliability Lives in Vision-Language Models: A Mechanistic Study](https://arxiv.org/abs/2605.08200)**（複数著者）— 「注意マップが鮮明ならモデルは信頼できる」という直感（Attention-Confidence Assumption）を LLaVA-1.5・PaliGemma・Qwen2-VL の 3 ファミリーで実験的に検証し、**仮説は成立しない**ことを示した。信頼性は注意層ではなく中間隠れ状態と因果回路にあることを機械論的に特定。VLM のデプロイ信頼性評価の方法論に再考を迫る。

- **[Auto-Rubric as Reward: From Implicit Preferences to Explicit Multimodal Generative Criteria](https://arxiv.org/abs/2605.08354)**（複数著者）— RLHF でのスカラー報酬・ペアワイズラベルが多次元的な人間の評価基準を潰してしまう問題に対し、モデル自身がルーブリック（採点基準）を自動生成して報酬信号とする「Auto-Rubric as Reward」を提案。報酬ハッキングへの耐性を高めつつ多モーダル生成モデルのアライメントを改善する実用的なアプローチ。

- **[Measuring What Matters: Benchmarking Generative, Multimodal, and Agentic AI in Healthcare](https://arxiv.org/abs/2605.08445)**（複数著者）— 実臨床環境でデプロイされる AI はリアルタイム・高リスクな複雑ワークフローを処理しなければならないにもかかわらず、既存ベンチマークはその要件に対応できていないと問題提起。生成・マルチモーダル・エージェント型 AI を医療応用向けに評価するベンチマーク設計の指針を整理した、臨床 AI 評価の標準化に向けた重要サーベイ。

---

## オープンソース・モデル

- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**（449 likes, 更新 5/11）— Zyphra が公開した 8.8B パラメータの新モデル。リリース直後から 66,000 件超のダウンロードを記録しトレンド入り。Zyphra はこれまで Zamba シリーズ（Mamba ハイブリッドアーキテクチャ）で知られており、同系統の効率重視設計が引き継がれているとみられる。オープンソース中規模モデルとして注目の新顔。

- **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)**（217 likes, 更新 5/11）— Google が公開した Gemma 4 ファミリーの 31B インストラクションチューニング版アシスタントモデル（any-to-any タグ）。マルチモーダル対応が示唆されており、オープンウェイトで 30B クラスのアシスタントとして選択肢が増えた形。Gemma シリーズの継続的なアップデートが確認されている。

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**（390 likes, 更新 5/12）— OpenBMB の軽量マルチモーダルモデル最新版（1.3B パラメータ、image-text-to-text）。昨日のトレンド登場から一日で likes が倍増しており、エッジ・組み込み向け軽量 VLM として急速に普及中。小型モデルでもビジョン能力を備えることへのコミュニティの強い関心を反映している。

---

## 所感

今日のキーワードは「Codex の普及攻勢」と「ポストトレーニングの理論化」だ。OpenAI が金融・NVIDIA・Parameter Golf と立て続けにユースケースを公開したのは、Codex を「エンジニア向けの特殊ツール」から「全職種が使うコーディングインフラ」として再定義しようとする意図が透けて見える。一方で arxiv では、SFT と RL の区別を「到達可能な行動空間の変化」という概念で精緻化する理論論文や、セルフプレイ安全評価の限界を突く攻撃手法が登場し、「何を学習しているのか」「どう安全性を保証するのか」という根本問いへの回帰が続いている。実用化の加速と理論的な未解決問題の山積が同時進行しているのが、2026年初夏の AI 研究の姿だ。
