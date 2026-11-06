---
title: "AI Watch（2026年11月6日）"
date: "2026-11-06T02:10"
category: "analysis"
summary: "OpenAI が自律型サイバーセキュリティモデル GPT-6 Cyber を発表、Gemini Omni 1.2 Flash も登場。Ripple-65B や Mage-VL-Cowork など小型・高効率モデルが話題"
tags: ["llm", "security", "agents", "open-source", "video-generation", "benchmark"]
---

## 今日のハイライト

- **OpenAI が 11/5、サイバーセキュリティ特化モデル「GPT-6 Cyber」を発表した。** RSS の説明によると、悪用可能な脆弱性の発見と修正の開発を担うモデルで、許可された範囲内にとどまるよう学習されている。11/4 の Linux カーネル脆弱性 948 件の自動修正や GPT-5.6 Cyber の GovCloud 展開に続く流れで、防御側エージェントの製品化が加速している。記事本文は取得できないため、性能の数値は未確認。
- **Google DeepMind が 11/5、動画生成・編集モデル「Gemini Omni 1.2 Flash」を公開した。** ページの説明によると、ネイティブで 15 秒の動画生成と編集に対応し、一貫性が向上、価格は 30% 下がった。

## 企業動向

- **[GPT‑6 Cyber: Advancing the frontier of aligned cybersecurity agents](https://openai.com/index/introducing-gpt-6-cyber)** (OpenAI, 11/5) - 悪用可能な脆弱性を見つけて修正を作るための OpenAI のサイバーセキュリティモデル。認可された範囲を逸脱しないよう訓練されている点を打ち出している。
- **[Gemini Omni 1.2 Flash: Fast and cost-effective with longer clips](https://deepmind.google/blog/gemini-omni-12-flash-fast-and-cost-effective-with-longer-clips/)** (Google DeepMind, 11/5) - 15 秒のネイティブ動画生成・編集、一貫性の向上、30% の値下げ。長いクリップを安価に作れるようになった。
- **[Setting a new standard for responsible AI infrastructure](https://openai.com/index/setting-new-standard-responsible-ai-infrastructure)** (OpenAI, 11/5) - 地域の資源を守り雇用を生むための「National Community Compact」と「Compute Campus Policy Blueprint」を発表。データセンター建設に対する地域の懸念への対応策。
- **[Franklin Templeton uses OpenAI to support investment research](https://openai.com/index/franklin-templeton)** (OpenAI, 11/5) - 株式リサーチを起点に、運用担当者が複数のリサーチ見解を比較しリスクを検討するためのワークフローを構築している。
- **[Investigating vault particles with Claude](https://www.anthropic.com/news/investigating-vault-particles-with-claude)** (Anthropic, 11/4) - Claude を使った vault particles の調査事例。ニュース一覧のタイトルのみ確認でき、内容の詳細は未確認。

## 注目論文

- **[Mass Producing Training Data with Surprising Side Effects](https://arxiv.org/abs/2611.06324)** (Ye, Steinhardt, Schwettmann ら, 11/5) - 安全でないコードのデータが広範なミスアラインメントを誘発する、といった「学習データの意図せぬ副作用」を大量に生成して調べる研究。データ起因の挙動変化を体系的に探す方向性が新しい。
- **[Prospective Memory for Proactive LLM Agents](https://arxiv.org/abs/2611.05731)** (Bei, Liu, Wei ら, 11/5) - 従来のエージェントメモリは過去の情報を思い出す方向が中心だが、将来やるべきことを覚えておく「展望的記憶」を扱う。先回りして動くエージェントに必要な要素。
- **[Grounded but Not Immune: Confirmation Bias in Agent-as-a-judge](https://arxiv.org/abs/2611.05662)** (Brown, Pahwa, Ge, Romeo ら, 11/5) - ツールと実行履歴を持つ Agent-as-a-Judge でも確証バイアスが残ることを示す。環境で検証できる評価者なら公平だという前提を問い直す。
- **[The Harness Is the Model: Agent Scaffolding Changes a Fixed LLM's Compliance with Banking Conduct Rules](https://arxiv.org/abs/2611.06116)** (Huyut, 11/5) - 同じモデルでも、見える情報・使えるツール・チェック体制といったハーネスの違いで、銀行の行動規範の遵守度が変わり、その変化はモデルごとに異なると報告。評価はモデル単体でなく配備形態で行うべきという主張。
- **[ViBench 2.0: A Benchmark for Long-Horizon Software Building](https://arxiv.org/abs/2611.05620)** (Furman ら, 11/5) - Replit が、機能追加リクエストを重ねて製品全体を作らせる長期のソフトウェア構築ベンチマークを提案。単発タスク中心の既存コーディングベンチを補う。

arxiv RSS（11/5 バッチ）から選出。

## オープンソース・モデル

- **[ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview)** (公開1日) - 12T トークンで事前学習した 65B の dense モデルで、コンテキスト長は最大 100 万、Apache 2.0。README では TerminalBench 2.1 で 80.52 を記録し、より大きな米国製オープンウェイトを上回ると主張している（自己申告の値）。
- **[microsoft/Mage-VL-Cowork](https://huggingface.co/microsoft/Mage-VL-Cowork)** (公開6日) - 画面操作（GUI）とコード・ターミナル実行を 1 つに統合した 4B のビジョン言語ポリシー。クリックで済ますかコードで処理するかを自分で選べ、外部オーケストレータを必要としない。
- **[sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview)** (公開8日) - 24 層のデコーダブロックを共有重みで 2 回回すループ構造の 9B マルチモーダルモデル。パラメータを増やさずに実効的な深さを稼ぎ、長文脈（学習時最大 262,144 トークン）とエージェント用途を狙う。
- **[HuggingFaceBio/FineDNA](https://huggingface.co/datasets/HuggingFaceBio/FineDNA)** (dataset, 公開6日) - Qwen3-14B に DNA を読ませたモデル Carbon-X の 3 段階の学習データ全体。中間学習だけで 514B トークン規模。

## ベンチマーク・リーダーボード

- **LMArena Text Overall**（公開日 10/28、前回までのレポートは未掲載）: 1位 Gemini 4 Carbon (High) 1540、2位 Gemini 4 Argon (High) 1529、3位 Claude Opus 5.5 (High) 1516、4位 Claude Fable 5.1 (Max) 1514、5位 Claude Opus 5 (Max) 1508。Google が上位 2 枠を占め、Anthropic が 3〜7 位に並ぶ。

## 所感

セキュリティ領域では OpenAI の GPT-6 Cyber、Linux カーネル修正、GovCloud 展開と、「発見から修正まで」を担う専用モデルの製品化が連日続いている。オープン側では Ripple-65B や 4B の Mage-VL-Cowork など、小型でも特定用途に強いモデルが目立つ。論文でも評価はモデル単体でなくハーネス込みで見るべきだという指摘が増えている。
