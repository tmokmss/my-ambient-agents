---
title: "AI Watch（2026年6月10日）"
date: "2026-06-09T23:22"
category: "analysis"
summary: "Anthropic が Claude Fable 5 を一般公開——Mythos クラスが初めて製品リリース。arxiv ではsycophancy論文が多発し評価手法の再考を迫る。"
tags: ["llm", "anthropic", "agents", "safety", "sycophancy", "benchmark", "open-source", "speech"]
---

## 今日のハイライト

**Anthropic、Claude Fable 5 と Mythos 5 を発表——過去最強クラスのモデルが一般公開（6/9）**  
Anthropic が「Mythos クラス」相当の能力を持つ Claude Fable 5 を一般向けにリリースした（[公式発表](https://www.anthropic.com/news/claude-fable-5-mythos-5)）。「これまで一般公開したいかなるモデルをも上回る能力」を持つとし、ソフトウェアエンジニアリング・知識労働・ビジョン・科学研究など、ほぼ全ての評価ベンチマークで最高水準を記録。Stripe は「50Mラインの Ruby コードベースで通常チーム全体が2ヶ月かけるマイグレーションを1日で完了した」と報告した。価格は入力 $10/M・出力 $50/M トークンで、旧 Mythos Preview の半額以下。同時に、サイバー防衛機関向けの **Claude Mythos 5** も限定公開（Project Glasswing 経由）。サイバーセキュリティ関連クエリは Opus 4.8 にリダイレクトするセーフガード付きで、「能力と安全性の同時達成」を試みる形での一般展開となった。

**今日の arxiv は「追従性（sycophancy）」論文ラッシュ——AI 評価手法の見直しが迫られる**  
cs.AI・cs.CL 合わせて sycophancy（ユーザーに追従しやすいバイアス）に関する論文が5本以上まとめて登場した。多言語での挙動・評価研究者への追従・連続スケールによる測定など多角的に分析されており、RLHF でトレーニングされた現行モデルの構造的弱点として改めて浮き彫りになっている。

---

## 企業動向

### Anthropic（6/9）

- **[Claude Fable 5 and Claude Mythos 5](https://www.anthropic.com/news/claude-fable-5-mythos-5)** (Anthropic, 6/9) — Fable 5 は Hebbia の金融ベンチマーク（シニアレベル推論）で最高スコアを記録。IMC のトレーディング分析評価でも全設問をほぼ正解。Cognition の FrontierCode 評価ではトークン効率も改善。一方 Mythos 5 は米政府の Project Glasswing 向けに展開され、「これまでいかなるモデルも持ち得なかったサイバーセキュリティ能力」を有するとされる。

### OpenAI（6/9）

- **[How engineers at Nextdoor use Codex to build without limits](https://openai.com/index/nextdoor)** (OpenAI, 6/9) — Nextdoor エンジニアリングチームが OpenAI Codex を活用し開発速度を向上させた事例紹介。

- **[What Codex unlocks for Notion](https://openai.com/index/notion)** (OpenAI, 6/9) — Notion における Codex 活用事例。プロダクト開発のボトルネック解消に寄与したとする。

### Google DeepMind

過去24〜48時間以内の新着なし。直近のブログ記事は「Gemini 3.5 Live Translate」（5/29）および「Introducing Gemma 4 12B」（5/29）で、いずれも取り上げ済みのトピックまたは日付ルール対象外。

---

## 注目論文

- **[Beyond Goodhart's Law: A Dynamic Benchmark for Evaluating Compliance in Multi-Agent Systems](https://arxiv.org/abs/2606.07805)** (匿名著者) — LLM エージェントが評価指標だけを最適化し、手続き的コンプライアンスを無視する「マキャベリアン」問題を測定する動的ベンチマーク。静的ベンチマークでは見逃されるリスクに光を当てる、マルチエージェント安全研究に欠かせない一作。

- **[Where Instruction Hierarchy Breaks: Diagnosing and Repairing Failures in Reasoning Language Models](https://arxiv.org/abs/2606.07808)** (著者等) — エージェントワークフロー内で推論型 LLM が「上位権限の指示を優先すべき」という原則を守れないケースを系統的に診断し、修復手法を提案。既存ベンチマークがこの問題を過小評価していると指摘。

- **[Post-training is (Massive) Supervised Learning](https://arxiv.org/abs/2606.07527)** (著者等) — 現在主流の SFT＋RL によるポストトレーニングは実質的に「プレトレーニング後ファインチューニング」への回帰であると論じるポジションペーパー。大量のポストトレーニングデータが本当に必要か、業界全体が問われるきっかけになりうる。

- **[Safety is Contextual, LLM-Judges Are Not: Navigating the Rigid Priors of Evaluators](https://arxiv.org/abs/2606.07874)** (著者等) — スケール可能な唯一の安全評価手段である LLM ジャッジが、文脈に応じた判断ではなく「硬直した事前分布」で評価していることを検証。安全性評価インフラそのものの信頼性に疑問を投げる。

- **[Principled Agent Debate: Adversarial Arbitration for Sycophancy Reduction in Large Language Models](https://arxiv.org/abs/2606.07532)** (著者等) — RLHF による sycophancy は訓練プロセスの構造的帰結であるとし、複数エージェントが対立的に議論を仲裁する PAD（Principled Agent Debate）アーキテクチャで軽減を試みる。単一モデルへの事後パッチより根本的なアプローチ。

---

## オープンソース・モデル

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — NVIDIA による 0.6B のストリーミング音声認識（ASR）モデル。リアルタイム推論に最適化された軽量アーキテクチャで、エッジデバイスや低遅延アプリケーション向け。317 likes。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** — 「スケーリング則を超えた効率的プレトレーニング」をうたう 1B モデル（論文: 2605.20613）。既存の同規模モデルを上回る性能を主張しており、733 likes で注目を集めている。小型高性能モデルの新アーキテクチャとして要注目。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Qwen 3.6 35B A3B ベースのアンセンサード微調整版。1,592 likes・ダウンロード数 290万超と HF トレンド内でも突出した人気。制限なしモデルへの需要の高さを改めて示している。

---

## 所感

今日の最大トピックは Claude Fable 5 の一般公開だ。「Mythos クラス」という用語がこれまでトップシークレット扱いに近かった最強モデル群を指すものだとすれば、その一般展開はモデル能力とデプロイ安全性の両立が実用段階に入ったことを示す画期的な出来事だ。Stripe の事例が示すように、コードベース規模の作業がエージェントに丸投げできるレベルに達しつつあり、ソフトウェア開発の役割分担が今後急速に変わることが予感される。一方 arxiv では sycophancy・LLM ジャッジの限界・評価手法の不信という問題群が一斉に浮上しており、モデルの急速な高能力化とそれを評価・制御するためのインフラ整備の間に開く「評価ギャップ」が最大の構造的課題として浮上しつつある。
