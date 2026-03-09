---
title: "AI Watch（2026年3月9日）"
date: "2026-03-09T22:42"
category: "analysis"
summary: "OpenAI が AI 評価ツール Promptfoo を買収、arxiv で推論モデルの CoT 制御不能が安全性の逆説的保護と判明"
tags: ["llm", "safety", "reasoning", "agents", "open-source", "benchmark", "acquisition"]
---

## 今日のハイライト

**OpenAI が Promptfoo を買収**（3/9）。Promptfoo はオープンソースの LLM セキュリティ評価・レッドチーミングフレームワークで、AI アプリケーションの脆弱性テストや出力品質評価に広く使われてきたツール。OpenAI によるこの買収は、モデル開発だけでなく「AI 安全テスト基盤」そのものへの投資を強く示唆し、業界の評価・セキュリティ標準化に向けた動きとして注目される。

**推論モデルは自身の思考連鎖（CoT）を意図的に制御できない**——arxiv 論文 と OpenAI ブログが同日に公開（3/5〜3/9）。これは一見ネガティブな知見に見えるが、逆に「外部からの操作に CoT が引きずられにくい」ことを意味し、モニタリングによる安全性担保の根拠として再解釈できるとする逆説的な結論が注目を集めている。

---

## 企業動向

- **[OpenAI to acquire Promptfoo](https://openai.com/index/openai-to-acquire-promptfoo)** (OpenAI, 3/9) - AI アプリケーション向けオープンソースセキュリティ評価ツール Promptfoo の買収を発表。Promptfoo は LLM の出力テスト・プロンプトインジェクション検出・レッドチーミング自動化などを提供してきた。OpenAI がモデルレイヤーに加え評価・安全テストレイヤーも内製化する戦略的動きであり、AI セキュリティエコシステムの再編を示唆する。

- **Google DeepMind ブログ最新動向**（3月上旬）- DeepMind ブログ一覧には、**Project Genie**（無限インタラクティブ世界の実験）、**Veo 3.1 Ingredients to Video**（動画生成の一貫性・クリエイティビティ向上）、**Gemini による音楽生成**（Gemini を使った新しい表現方法）、**D4RT**（AI に 4 次元視覚を教える研究）などの記事が並んでいる。各記事の正確な公開日は取得できなかったが、本週の新着として掲載されている可能性が高い。Gemini 3.1 Flash-Lite（3/3）と Gemini 3.1 Pro は既報のため除く。

---

## 注目論文

- **[Reasoning Models Struggle to Control their Chains of Thought](https://arxiv.org/abs/2603.05706)**（arxiv 3/9 / OpenAI） - 推論モデルが自身の CoT を意図的に制御することが困難であることを実証。外部からの誘導によっても思考連鎖が大きく変化しにくいという性質は、逆説的に「CoT モニタリングが安全保護として機能する」という根拠となる。OpenAI ブログでも同名記事として公開されており、研究と実装の連携が見て取れる。

- **[Safer Reasoning Traces: Measuring and Mitigating Chain-of-Thought Leakage in LLMs](https://arxiv.org/abs/2603.05618)**（arxiv 3/9） - CoT プロンプティングがプライバシーリスクを高める可能性を指摘。思考連鎖の過程で個人識別情報（PII）が想起・出力されやすくなることを示し、CoT を使うモデルの安全設計に重要な示唆を与える。CoT の有効性とプライバシーのトレードオフを定量的に分析した点が新しい。

- **[RoboLayout: Differentiable 3D Scene Generation for Embodied Agents](https://arxiv.org/abs/2603.05522)**（arxiv 3/9） - VLM（視覚言語モデル）の空間推論能力を活用し、オープンエンドなテキスト記述から微分可能な 3D シーンレイアウトを生成するフレームワーク。具身型エージェントの環境理解と計画能力を高める基盤技術として注目。

- **[DeepFact: Co-Evolving Benchmarks and Agents for Deep Research Factuality](https://arxiv.org/abs/2603.05912)**（arxiv 3/9） - 検索拡張 LLM エージェントが生成する「深層調査レポート」の事実確認を、ベンチマークとエージェントを相互進化させながら解決しようとするフレームワーク。主張レベルでの事実検証という難問に新たなアプローチを提示する。

- **[The Fragility Of Moral Judgment In Large Language Models](https://arxiv.org/abs/2603.05651)**（arxiv 3/9） - LLM が道徳的・対人的なガイダンスを提供するシーンが増える中、その判断が文脈の欠如に対していかに脆弱かを分析。不完全な情報提示に対してモデルが欠落した文脈を問い返せないという問題を指摘し、実用上の安全性に警鐘を鳴らす。

---

## オープンソース・モデル

- **[crownelius/Opus-4.6-Reasoning-3300x](https://huggingface.co/datasets/crownelius/Opus-4.6-Reasoning-3300x)** - Claude Opus 4.6 の推論トレース 3,300 件超を収録したデータセット（132 いいね）。コミュニティが Opus クラスの思考連鎖を蒸留学習に活用しようとする動きを体現しており、同様のデータセットが複数トレンド入りしている。フロンティアモデルの知識移転への需要が依然高いことを示す。

- **[nohurry/Opus-4.6-Reasoning-3000x-filtered](https://huggingface.co/datasets/nohurry/Opus-4.6-Reasoning-3000x-filtered)** - Opus 4.6 の推論データをフィルタリングして品質向上させたデータセット（291 いいね）。上記と合わせ、Claude Opus 4.6 の推論能力を小型モデルへ転移するためのデータ整備が活発化している。蒸留による民主化と Anthropic の蒸留攻撃検知研究（2/23）の緊張関係も注目点。

- **[Qwen/Qwen3.5-35B-A3B](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)** - Qwen3.5 シリーズの MoE 大型モデル（1,059 いいね）。引き続き HuggingFace トレンドトップで、マルチモーダル対応・オープンウェイトの大型モデルとして定着している。Qwen3.5 シリーズ全体が数日連続でトレンド上位を占めており、オープンウェイト LLM 界での Qwen の存在感が際立つ。

- **[TuringEnterprises/Open-RL](https://huggingface.co/datasets/TuringEnterprises/Open-RL)** - 強化学習向けオープンデータセット（149 いいね）。LLM の RLHF・RLAIF 研究を支えるデータ基盤として注目されており、オープンな RL データ整備の動きが加速していることを示す。

---

## 所感

本日最大のサプライズは OpenAI による Promptfoo 買収だ。モデル能力の競争が落ち着きを見せ始める中、「評価・安全テスト基盤」の内製化という新たな競争軸が浮上した。また、CoT の制御不能性が安全のガードレールになるという逆説的な知見は、「AI の弱点が防護策にもなりうる」という設計哲学の転換を象徴している。HuggingFace では Claude Opus 4.6 の推論データを蒸留に使う動きが加速しており、フロンティアモデルの知識がオープンコミュニティに急速に流入するサイクルが定着しつつある。
