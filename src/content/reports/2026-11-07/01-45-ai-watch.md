---
title: "AI Watch（2026年11月7日）"
date: "2026-11-07T01:45"
category: "analysis"
summary: "Anthropic が科学モデル構築の研究を公開、OpenAI は Hacktron 提携と実験科学ベンチ BioBasicsBench を発表。"
tags: ["llm", "agents", "science", "security", "benchmark", "open-source"]
---

## 今日のハイライト

- **Anthropic が「Teaching AI to build scientific models」を公開（11/6）。** 10月下旬からの AI for Science 系の発信が続いており、Claude に科学モデルを組み立てさせる方向の話と読める。
- **OpenAI が実験科学の評価ベンチ BioBasicsBench を発表（11/6）。** 生の実験データを AI エージェントがどこまで読み解けるかを測る100タスクのベンチマーク。同日に Hacktron との脆弱性探索の提携も出している。

## 企業動向

昨日までに掲載済みの GPT-6 Cyber（11/5）、Gemini Omni 1.2 Flash（11/5）などは省略した。

- **[Teaching AI to build scientific models](https://www.anthropic.com/news/teaching-ai-to-build-scientific-models)** (Anthropic, 11/6) - 一覧ページで確認できたのはタイトルと公開日のみで、記事本文は取得していない。タイトルからは AI による科学モデル構築を扱う内容と読めるが、詳細は断定しない。
- **[Measuring how AI agents handle everyday wet-lab science](https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science)** (OpenAI, 11/6) - RSS の説明によると、BioBasicsBench という100タスクのベンチマークを導入した。AI エージェントが生の実験データを解釈し、日常的なウェットラボの科学作業をこなせるかを測る。
- **[Partnering with Hacktron to find vulnerabilities in OpenAI's systems](https://openai.com/index/partnering-with-hacktron)** (OpenAI, 11/6) - RSS の説明によると、Hacktron と組んで OpenAI 自身のシステムの脆弱性探索、外部サービスとの接続テスト、防御の強化をフロンティア AI で進める。

## 注目論文

arxiv RSS の cs.AI 最新バッチ（11/6 発表分）から、既出 ID を除いて選出。

- **[EnvOpt: Automated Optimization for Agent Environments](https://arxiv.org/abs/2611.07372)** (Li et al., 11/6) - モデルやハーネスではなく、エージェントが動く「環境」（社内 Slack や文書群など）を自動最適化する提案。採点器や正解なしで動き、AutomationBench では Claude Haiku 4.5 のコストを72.7%削減しつつ合格率を14.34%向上させ、同じ環境が Opus 5 にも転用できたと報告している。
- **[Beneath the Surface: What We Overlook When We Talk About Agent Evolution](https://arxiv.org/abs/2611.07624)** (Wang et al., 11/6) - 重みを更新せずハーネスを進化させる手法4種を検証。進化した16個のエージェントはすべて、新たに解ける課題が増える一方で以前解けた課題を落としており、最高スコアの個体が最大の平均改善をもたらしたプールもなかった。ベンチマークスコアだけで自己改善を判断する危うさを示す。
- **[MCPHallu: Benchmarking Reasoning, Execution, and Memory Hallucinations in MCP Agents](https://arxiv.org/abs/2611.07689)** (Jiang et al., 11/6) - MCP 経由のエージェントの失敗を、推論・実行・記憶の3軸で診断するベンチ。実運用の36 MCP サーバーのコンテナ上で358タスクを走らせ、事後ではなく課題設計の段階で失敗要因を仕込んでいる。
- **[The Intrusion Pathway: How Non-Evidential Context Degrades Language Model Performance](https://arxiv.org/abs/2611.07778)** (Kukreja et al., 11/6) - 無関係な文脈が混ざると精度が落ちる現象を、MLP とパロット的な attention head の働きから機構的に説明し、干渉を担う疎な「intrusion heads」を特定した。RAG やツール利用で入る雑音への対策につながる。
- **[BlockLock: Reproducible LLM Inference with Fixed Batch Geometry](https://arxiv.org/abs/2611.06977)** (Qi et al., 11/6) - バッチ内の他リクエストが変わっても、対象リクエストの出力をビット単位で一致させる推論手法。共有プリフィルの計算を残したまま保護対象だけ数値経路を固定する。

## オープンソース・モデル

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)** - ローカルエージェント向けの 1.73B テキストモデル（公開14日）。畳み込み・スライディングウィンドウ attention・グローバル attention を混ぜた構成で、256K コンテキスト、4bit で約1GB とスマホやノート PC に収まる。Hermes Agent などのハーネス向けに後学習され、単一 GPU での特化ファインチューンも想定している。
- **[baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2)** - 超長文書を扱う OCR モデル（公開11日）。README では 10/27 のリリースを「unlimited-horizon parsing」と称し、SR-SWA という仕組みを使うとしている。超長文書パース用ベンチ MarathonDocBench も併せて公開され、論文は 11/2 に arXiv で公開された。
- **[HuggingFaceBio/FineDNA](https://huggingface.co/datasets/HuggingFaceBio/FineDNA)** - Qwen3-14B に DNA を読ませたモデル Carbon-X の学習データ（公開7日）。3つの学習段階すべてのデータを含み、中間学習だけでも23ソース・約514Bトークンの規模がある。
- **[Axion1-0/axion-training-data](https://huggingface.co/datasets/Axion1-0/axion-training-data)** - オープンなエージェント基盤モデル Axion 1.0 の学習データ（公開4日）。科学的推論とツール利用を扱い、自己完結した推論の習得から始まる3段階の学習レシピに沿って構成されている。

## ベンチマーク・リーダーボード

LMArena Text Overall は 10/28 公開版から変動なしのため省略した。

## 所感

Anthropic と OpenAI が揃って科学・実験領域の発信を続けており、コーディングの次の主戦場として科学が据えられつつあるように見える。論文側ではエージェントの「ハーネスや環境の最適化」が目立つ。EnvOpt が環境最適化でコストを大きく下げた一方、別の論文はスコア至上の自己進化が取りこぼしを生むと警告しており、評価の仕方が焦点になっている。
