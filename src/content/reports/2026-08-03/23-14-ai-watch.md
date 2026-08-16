---
title: "AI Watch（2026年8月4日）"
date: "2026-08-03T23:14"
category: "analysis"
summary: "OpenAIがリアルタイム音声AI「GPT-Live」の開発秘話を公開。arXivではLLMコーディングエージェントの「削除回避」問題を定量化した論文が話題。"
tags: ["voice-ai", "agents", "coding", "safety", "benchmark", "multimodal"]
---

## 今日のハイライト

**OpenAIが低遅延なリアルタイム音声対話システム「GPT-Live」の開発の舞台裏を公開（8/3） — ターンレス（発話の順番待ちをしない）音声モデルにより、より自然な会話を実現**

[How we built a realtime system for responsive voice AI in six months](https://openai.com/index/continuous-voice-interaction-with-gpt-live)は、わずか半年でゼロから構築したという継続的な音声対話システムの技術解説記事。「ターンレス」な音声モデルと低遅延アーキテクチャにより、人間同士の会話に近い割り込み・相槌を伴う自然な音声対話を目指す内容で、OpenAIのエンジニアリングブログとして具体的な設計判断を共有している。企業のフラグシップモデル発表こそ無かった一日だが、arXivでは「LLMコーディングエージェントは新しいコードを追加するのは得意だが、既存コードの削除は苦手」という具体的な弱点を定量化した論文が公開され（詳細は下記）、実運用面での地に足のついた知見が目立った一日だった。

---

## 企業動向

- **[How we built a realtime system for responsive voice AI in six months](https://openai.com/index/continuous-voice-interaction-with-gpt-live)**（OpenAI, 8/3） - 上記ハイライト参照。GPT-Liveの「ターンレス音声モデル」と低遅延アーキテクチャの設計を解説するエンジニアリング記事。
- Anthropicは本日新着なし（最新は7/30の「Investigating three real-world incidents in our cybersecurity evaluations」で既報）。
- Google DeepMindのブログは新着記事一覧の日付表示が月単位（例:「July 2026」）までしか取得できず、個別記事を確認したところ直近のものも6月〜7月21日付と4日以上前だったため、本日は新着なしとして扱う。

---

## 注目論文

- **[To Add Is Machine, To Delete Is Human: Measuring and Mitigating Deletion Avoidance in LLM Code Editing](https://arxiv.org/abs/2607.28887)**（Ebrahimi, Hasan, Bhatia, Rajbahadur, Hassan） - SWE-bench Verifiedの上位5モデルを分析し、削除すべきコードの再現率が最良でも71.7%に留まり、正しいファイルには92%到達するのに正確な行を削除できるのは52%未満と判明。29%のパスしたパッチが実際には削除せず条件分岐で囲うだけの「Guard-and-Go」パターンだったと報告し、既存のテストが削除漏れを検出できていない実態を突く実務的な一本。
- **[Safety, or Just Capability? A Validity Audit of Agent-Safety Benchmarks](https://arxiv.org/abs/2607.28685)**（Wang, Han, Shang, Tang, Liu） - R-Judge・InjecAgent・AgentHarm・AgentDojoなど主要なエージェント安全性ベンチマーク4種を22モデルで検証し、「常に危険と判定する」だけのポリシーがR-JudgeのF1で0.690を記録し実際に判別できているモデルの一部を上回ってしまう欠陥や、小規模な評価パネルでの相関係数が不安定なことを実証。能力の高さがタスク成功率と正の相関を持つ一方でミスアライメント安全性とは負の相関（ρ=-0.44）を示すなど、「安全性スコア」の解釈に警鐘を鳴らす一本。
- **[LLM Framework for Discovering Major Mathematical Conjectures: AI's Quest for the Next Riemann Hypothesis](https://arxiv.org/abs/2607.28632)**（Wong, Zeng, Tan, Li, Chen ほか） - 局所的な証拠探索・基礎性/新規性の内省的検証・Lean 4/Mathlibによる形式検証の3段階パイプラインで、人間の直感に頼りがちな「大きな数学予想」の発見を自動化する試み。20件の候補すべてがLean上の構文・型検査を通過し、既存の自動証明器で機械的に解かれてしまうものもなかったと報告している。
- **[Best Friends, Not Forever: Evaluating Long-Horizon Persona Collapse and Behavioral Drift in AI Companions](https://arxiv.org/abs/2607.28818)**（Venkit, Prabhakar, Li, Lee, Wu） - 27種のペルソナ・9種の対話スケジュール・4モデルにまたがる2,008件の会話を用いた新監査手法「ANCHOR」により、AIコンパニオンが長期的な役柄一貫性を保てるかを測定。評価した全モデル・全設定で軌跡再現の正答率は平均44.4%に留まり、どのメモリ設定でも「ペルソナ崩壊」「行動ドリフト」を安定して防げないことを示した。
- **[The persuasive power of large language models does not depend on their perceived national origin](https://arxiv.org/abs/2607.29334)**（Liu, Hinrichs, Kunst） - 米国の403名を対象に、同一のGPT-4oを「アメリカ製」「中国製」と偽って三round討論させる事前登録実験を実施。国籍ラベルは説得力（態度変容量）に有意な影響を与えず、唯一の違いは中国製と表示した場合の会話前の「人間らしさへの信頼」が低かった点のみだったと報告し、地政学的な出自への懸念と実際の説得効果は別物であることを示唆。

---

## オープンソース・モデル

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** - MiniMaxによる画像+テキストから動画を生成する新モデル。トレンドで急浮上しており、中国発ラボの動画生成競争が続いていることを示す一枚。
- **[microsoft/TRELLIS.2](https://huggingface.co/spaces/microsoft/TRELLIS.2)** - Microsoftが公開した、画像から高精細な3Dモデルを生成するSpace。3D生成の実用化が着実に進んでいることを示す。
- **[Glint-Research/Fable-5-traces](https://huggingface.co/datasets/Glint-Research/Fable-5-traces)** - AnthropicのFable 5から収集した推論トレースのデータセット。フロンティアモデルの出力を蒸留用データとして収集・公開する動きが、Fable系モデルにも及んでいることを示す。
- **[Manusagents/GPT-5.5-Gemini-3.1-Pro-Grok-4-Claude-Fable-5-Mythos-5-Qwen-3.7-Max-and-more-Distillation-Dataset](https://huggingface.co/datasets/Manusagents/GPT-5.5-Gemini-3.1-Pro-Grok-4-Claude-Fable-5-Mythos-5-Qwen-3.7-Max-and-more-Distillation-Dataset)** - GPT-5.5・Gemini 3.1 Pro・Grok 4・Claude Fable 5・Mythos 5・Qwen 3.7 Maxなど、現行の主要フロンティアモデルの出力を横断的に集めた蒸留用データセット。1つのラボに依存しない「マルチモデル蒸留」データの整備が進んでいることがうかがえる。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena（Hugging Face Space）は今回もページ全体がiframe埋め込みのためcurlでは実際のランキングデータを取得できず、取得失敗として省略する。

---

## 所感

企業のフラグシップモデル発表こそ無かったものの、OpenAIがGPT-Liveのエンジニアリング詳細を公開した点、そしてarXivで「LLMコーディングエージェントはコードを追加するのは得意だが削除するのは苦手」という具体的かつ検証可能な弱点が定量化された点が印象に残る一日だった。特に後者は、既存のテストスイートが「削除漏れ」を見逃しがちだという実務上重要な指摘であり、コーディングエージェントを日常的に使う立場からも他人事ではない。また、エージェント安全性ベンチマークそのものの妥当性を問う監査論文や、AIコンパニオンの長期的な人格一貫性の欠如を定量化した研究など、「能力が伸びる中で、それを正しく測れているか」を問い直す論文が複数並んだのも今日の特徴で、ベンチマーク文化そのものへの反省的な視線が広がりつつあると感じさせる一日だった。
