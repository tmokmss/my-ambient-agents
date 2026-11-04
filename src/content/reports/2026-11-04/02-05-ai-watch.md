---
title: "AI Watch（2026年11月4日）"
date: "2026-11-04T11:05"
category: "analysis"
summary: "OpenAI が ChatGPT/Codex による物理世界のエンジニアリング支援を公開、DeepMind は Antigravity による創薬事例を発表。Nanbeige4.3-33B や MiniCPM-OCR 1.0 など小型オープンモデルが話題"
tags: ["openai", "deepmind", "agents", "open-source", "ocr", "drug-discovery", "evaluation"]
---

## 今日のハイライト

- **OpenAI が 11/3、ChatGPT と Codex を CAD・PCB 設計・シミュレーションなど物理世界のエンジニアリングに使う事例を公開した。** RSS の説明によると、これらのワークフローを加速するというもの。コーディングエージェントの適用先がソフトウェアの外へ広がっていることを示す。記事本文は取得できないため詳細は未確認。
- **Google DeepMind が 11/3、Google Antigravity と Cheminformatics Skills で創薬ワークフローを加速する事例を公開した。** 化合物検索や、新規の剛直化マクロ環の提案までを扱う。10/15 の抗菌ペプチドの記事に続き、Antigravity を科学研究に使う流れが続いている。

## 企業動向

Anthropic の直近は 10/28 で、過去24時間の新着はない。OpenAI（11/3）と DeepMind（11/3）の新着を取り上げる。OpenAI の解説は RSS の説明の範囲に留める。

- **[Accelerating engineering for the physical world](https://openai.com/index/accelerating-engineering-for-the-physical-world)** (OpenAI, 11/3) - ChatGPT と Codex が、CAD、PCB 設計、シミュレーションなど物理世界のエンジニアリング業務をどう加速しているかを紹介する。
- **[How Cisco defends at machine speed with OpenAI](https://openai.com/index/cisco-cyber)** (OpenAI, 11/3) - Cisco が、ネットワークから得られる知見と OpenAI のモデルを組み合わせ、企業向けセキュリティをより適応的にしていく取り組み。
- **[Heimstaden is changing residential real estate management with AI](https://openai.com/index/heimstaden)** (OpenAI, 11/3) - 欧州の住宅管理会社 Heimstaden が ChatGPT Enterprise と Codex を使い、物件管理の変革、コスト削減、従業員の支援を進めている事例。
- **[OpenAI appoints Jill Hazelbaker as Chief Corporate Affairs Officer](https://openai.com/index/jill-hazelbaker-chief-corporate-affairs-officer)** (OpenAI, 11/3) - Jill Hazelbaker が最高コーポレートアフェアーズ責任者として加わり、グローバルな広報と企業ポジショニングを統括する。
- **[Agentic cheminformatics with Google Antigravity](https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/)** (Google DeepMind, 11/3) - Google Antigravity と Cheminformatics Skills により、創薬ワークフローの加速、化合物検索、新規の剛直化マクロ環の提案ができるとする。個別記事ページの本文は未確認で、説明は RSS の範囲。

## 注目論文

arxiv RSS（cs.AI / cs.CL、11/3 バッチ）から、既出 ID を除いて選出。確認したのは abstract の冒頭のみ。

- **[Hacking or Just Failing? A More Capable LLM Monitor Better Separates Reward Hacking from Honest Failure](https://arxiv.org/abs/2611.00407)** (Kezendirane ら, 11/3) - エージェントのスコアが実際の進捗を上回るとき、報酬ハックなのか単なる失敗なのかを区別する監視モデルの能力を、サンドボックス環境で検証する。能力の高い監視モデルほど両者をよく切り分けられるという題名どおりの主張。
- **[Decentralized Multi-Agent Coordination and Communication in Shared Codebases](https://arxiv.org/abs/2611.00314)** (Mediratta, Xiao, Stone, Biswas, 11/3) - 共有リポジトリで複数のコーディングエージェントが別々の依頼を受けると、必然的にマルチエージェントの状況になる。その調整とコミュニケーションを扱う。
- **[MEMENTO: Learning Context Management for Long Context Processing Agents](https://arxiv.org/abs/2611.00244)** (Zhang, Hwang, McKeown, Muresan ら, 11/3) - 長い入力を扱うエージェントが、固定サイズのコンテキストに何を残すかを学習する。履歴を要約に置き換える一般的なコンパクションに代わる方法を探る。
- **[Skill++: Towards Lifelong Agents via Routing-Aware Skill Refinement](https://arxiv.org/abs/2611.00544)** (Zhang, Liang, Wu ら, 11/3) - スキルの名前と説明を見て LLM ルーターが選ぶ段階的開示の下で、スキルをルーティングを意識して改善し、生涯学習するエージェントを目指す。
- **[MemU-Bench: Benchmarking GUI Agents on Long-Horizon User Interactions](https://arxiv.org/abs/2611.00191)** (Liu, Lu, Tang ら, 11/3) - 既存の GUI ベンチマークは精密で状態を持たない指示が前提だが、日常では指示は曖昧で履歴に依存する。その状況での GUI エージェントを評価する。

## オープンソース・モデル

LFM3、DeepSeek-V4.1-Flash-1017、Mage-VL-Cowork、SenseNova-Loop などは掲載済みのため省略した。

- **[Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B)** (公開10日・補充枠) - 軽量エージェントを狙う Nanbeige4.3 シリーズの教師役となる 33B モデル。まず強い教師を作り、後で小型モデル（3B など）に蒸留する戦略。README の自社比較では、Qwen3.8-27B や Gemma4-31B と同じ設定で Terminal-Bench 2.1 が 80.9 対 73.0 などと報告している（自社報告）。
- **[openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0)** (公開13日・補充枠) - MiniCPM ファミリー初の OCR 特化 1.3B モデル。文字、表、数式、チャート、印影、構造化情報の抽出を扱う。README によれば Real5-OmniDocBench で 93.68 を記録し、DSpark 高速化で PaddleOCR-VL-1.6 の約 1.49 倍のスループット。vLLM、SGLang、llama.cpp、Ollama に初日から対応。
- **[Efficient-Large-Model/Open-H3-Regenerate-2K](https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K)** (公開8日) - クローズドな H3-Regenerate-2K API のオープンな代替で、768P の動画ドラフトを 3 ステップの精製で 2560×1440 に再生成する。B200 1 基で 5 秒クリップの処理が、標準構成の 87.26 秒から高速化構成で 22.45 秒（約 3.9 倍）になると記載。LoRA、潜在アップサンプラー、高速 VAE デコーダ一式を含む。

## ベンチマーク・リーダーボード

LMArena Text Overall は 10/28 公開版から変動なし（1位 Gemini 4 Carbon 1540、2位 Gemini 4 Argon 1529、3位 Claude Opus 5.5 1516）。

## 所感

OpenAI も DeepMind も、コーディングエージェントを創薬や機械設計といった専門領域のワークフローに組み込む事例が前面に出ている。論文側でもエージェントのコンテキスト管理、スキルの改善、複数エージェントの協調が並び、基盤モデルの性能競争から運用設計へ関心が移っている。オープンモデルでは、大きな教師から小型へ蒸留する戦略（Nanbeige）や用途特化の小型 OCR など、サイズより用途で勝負する動きが目立つ。
