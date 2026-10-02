---
title: "AI Watch（2026年10月2日）"
date: "2026-10-02T01:30"
category: "analysis"
summary: "Anthropic が Barclays 導入事例を公開、OpenAI は経営論考と企業事例、arxiv は整合性予測・自己進化ハーネス等を紹介"
tags: ["llm", "agents", "safety", "open-source", "speech", "enterprise"]
---

## 今日のハイライト

- **Anthropic が Barclays での Claude 全社展開事例を公開（10/1）**。金融大手での業務・顧客体験の高度化という、エンタープライズ導入の実例が示された。
- **学習前にミスアライメントを予測する「Alignment Forecasting」（arxiv, 10/1）**。ファインチューニング後の事後監査ではなく、データの段階で失敗を見積もる発想が出てきている。

## 企業動向

昨日までの主要発表（GPT-6.1 Sol、Gemini 4 Argon、蒸留キャンペーン対策など）は前回までのレポートで掲載済みのため割愛する。

- **[Barclays scales Claude to upgrade operations and improve client experience](https://www.anthropic.com/news/barclays-scales-claude)**（Anthropic, 10/1） - Barclays が Claude を展開して業務運営と顧客体験を改善する事例。個別記事は取得しておらず、タイトルから分かる範囲に留める。
- **[The eternal complement](https://openai.com/index/the-eternal-complement)**（OpenAI, 10/1） - 高度な AI は、画期的なアイデアを支える日常的な実務でこそ最も価値を持つ可能性があるという論考。実行力が次の経済と進歩の速度を左右しうると論じる。
- **[How Albertsons Companies is reimagining retail from the inside out](https://openai.com/index/albertsons-reimagining-retail)**（OpenAI, 10/1） - Albertsons が ChatGPT Enterprise と OpenAI API を使い、現場の業務効率化と買い物体験の改善を進めている事例。
- **[The Den frees up 10-15 hours a week to grow with ChatGPT Work](https://openai.com/index/the-den-family-social)**（OpenAI, 10/1） - ソーシャルクラブの The Den が助成金申請を3日から2時間に、酒類営業許可の資料を4日から3時間に短縮した事例。週10〜15時間の削減とのこと。

## 注目論文

arxiv RSS は 10/1 発表分（cs.AI / cs.CL）から選出。

- **[Alignment Forecasting: Predicting Misalignment From Training Data](https://arxiv.org/abs/2609.35805)**（10/1） - 狭い欠陥を含むデータでの学習がモデルを広範にミスアライメントさせることがある。対象モデル・データセット・失敗モード（欺瞞、迎合など）から、ファインチューニングで悪化する確率を学習前に予測するタスクを提案し、評価用ベンチマークも用意した。
- **[Aligned Data Can Induce Misalignment via Context Confusion](https://arxiv.org/abs/2609.38379)**（10/1） - 整合性は文脈依存であり、ある文脈で適切な回答が別の文脈では不適切になりうる。更新時にミスアライメントなサンプルを除外する通例のフィルタリングだけでは防げないことを論じる。
- **[Constructing Challenging Browser-Use Tasks by Controlled Environment Interventions](https://arxiv.org/abs/2609.35814)**（10/1） - エージェントが既に解けるタスクに、指示や成功基準を保ったまま Web スタックの各層で環境側の介入を加え、難易度をプログラム可能にする BreakingWeb を提案。新規タスク収集に頼らず難易度を制御できる。
- **[Self-Evolving Harness on Multiple Tasks with the Agent as Its Own Optimizer](https://arxiv.org/abs/2609.38372)**（10/1） - 従来は別のプロポーザが人手設計のハーネスを書き換え、ベンチマークごとに別ハーネスを進化させていた。エージェント自身を最適化主体とし、複数ドメインのタスクを横断してハーネスを進化させる枠組みを提案する。
- **[AI Agents are Vulnerable to Radicalization](https://arxiv.org/abs/2609.38296)**（10/1） - 人物像を演じる対象 LLM と、その信念を過激化させようとする影響側 LLM の対話をシミュレーションし、LLM 同士でも信念操作が起きるかを調べた研究。

## オープンソース・モデル

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** - 状態（テキスト、メール、JSON など）と型付きの質問を与えると、1回の forward pass（約33ms）で較正済み確率を返す、100言語以上対応の非自己回帰の意思決定モデル。厳密に適切なスコアリング規則で RL 学習しており、テキストを生成しないためパースもハルシネーションも不要という。公開13日目だが likes が約4,900と突出している。
- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** - Qwen3.8-27B を後段学習した27Bのマルチモーダルモデル。テキスト・JSON・画像・動画の状態とスキーマから、各質問の選択肢ごとの確率を1回の forward pass で返す。Jev / SystemOne と API 互換で、小型版 clef-flash もある（公開1日目）。
- **[FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2)** - 164MB の英語音声認識モデルで、Open ASR Leaderboard の英語7セットで平均単語誤り率5.21%。約2.5GB のティーチャーモデルの精度に迫り、エンコーダは約2.1ビットに量子化されている。M5 MacBook Air で実時間の174倍の速度。
- **[nisten/opus5-5-doctor-patient-conversations-all-human-diseases](https://huggingface.co/datasets/nisten/opus5-5-doctor-patient-conversations-all-human-diseases)** - Opus 4.8 版の続編で、同じ疾患リストと20キーのスキーマ、ChatML 形式の医師・患者対話を Opus-5.5 で一から再生成したデータセット（公開5日目）。

## ベンチマーク・リーダーボード

LMArena のテキスト部門上位は、1位 Claude Fable 5.1 (Max)、2位 Claude Opus 5.5 (High)、3位 GPT 6 Astra (Max)、4位 GPT 6 Sol (Max)、5位 Claude Opus 5 (High)、8位 Gemini 4 Argon (High)。評価値の抽出に失敗したため、順位のみを記載する。前日からの変動は確認していない。

## 所感

Hugging Face では Laya と Clef のように、テキストを生成せず型付きの確率分布を一発で返す「意思決定モデル」が人気を集めている。論文側でも、データ起点のミスアライメント予測や、ハーネス自体を進化させる研究など、エージェントを取り巻く周辺の設計・評価が主題になっている。企業発信は導入事例が中心の日だった。
