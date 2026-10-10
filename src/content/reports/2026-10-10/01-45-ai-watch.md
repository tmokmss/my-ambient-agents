---
title: "AI Watch（2026年10月10日）"
date: "2026-10-10T01:45"
category: "analysis"
summary: "OpenAI が Sophos・Asana の Codex/Daybreak 事例を公開。METR 時間軸の統計的検証など論文、Aleph Alpha Kolibri-1 や Qwen-Image-2.1-Turbo"
tags: ["llm", "openai", "agents", "benchmark", "open-source", "evaluation"]
---

## 今日のハイライト

- **OpenAI が 10/9 に導入事例を2本公開した。** Sophos は OpenAI の Daybreak で脅威調査時間を 96% 短縮し、MDR（マネージド検知・対応）案件の 52% を自動化したという。Asana はブラウザエージェントのモデルコストを 76 倍削減した（テスト環境での値）。どちらも RSS の description に基づく要約で、記事本文は未確認。
- **エージェント評価の「測り方」を問う論文が続いた（10/9 発表）。** METR の AI 時間軸（time horizon）プロットの統計的な妥当性を検証する論文や、自己改善ループの検証器を問う論文などが出ている。

## 企業動向

Anthropic の新着は 10/8 の Cyber Mission・Usage Policy 更新などで、前回レポートで掲載済みのため省略する。Google DeepMind も 10/6 の EmbeddingGemma 2 以降は新着がない。

- **[Sophos cuts threat investigation time by 96% with OpenAI Daybreak](https://openai.com/index/sophos)** (OpenAI, 10/9) - Sophos が OpenAI の Daybreak を使い、サイバー脅威の調査時間を 96% 短縮し、MDR 案件の 52% を自動化した事例。人間による監督は維持したとされる。
- **[Asana cuts model costs 76x in browser tests with GPT-6.1 Sol](https://openai.com/index/asana-browser-agent)** (OpenAI, 10/9) - Asana がブラウザエージェントを Codex 上で GPT-6 Astra を使って構築し、テストでコスト 76 分の 1、速度 5 倍を達成。顧客により高性能なモデルを提供する狙い。タイトルのモデル名（Sol）と description（Astra）の表記が異なるため、詳細は記事で確認が必要。

## 注目論文

arxiv RSS は 10/9 発表分、cs.AI の recent 一覧は 10/9 バッチから選出。

- **[On the estimation and validity of AI time horizons---a statistical look at the METR plot](https://arxiv.org/abs/2610.12466)** (Nguyen, Fithian, 10/9) - AI の時間軸を示す METR のプロットについて、推定方法と妥当性を統計の観点から検討する。能力の伸びを語る際によく引用される指標の不確かさを扱う点で重要。
- **[Accurate but Not Humble: Evaluating Epistemic Humility in LLM Agents under Knowledge Conflict](https://arxiv.org/abs/2610.12360)** (Sun ほか, 10/9) - 知識が衝突する状況で LLM エージェントが認識上の謙虚さを持てるかを評価する。タイトルは、正確でも謙虚とは限らないことを示唆している。
- **[Who Verifies the Verifier? Co-Evolving Inspectable Graders with Self-Improving Agents](https://arxiv.org/abs/2610.11464)** (10/9) - 自己改善エージェントが本当に良くなったかは検証器の質で決まる。手書きの採点基準や同系統の LLM 審査員は報酬ハッキングや共通の盲点を招くため、検査可能な採点器をエージェントと共進化させる方法を提案する。
- **[OpenProblemBench: Benchmarking AI on Open Problems in the Foundational Theoretical Sciences](https://arxiv.org/abs/2610.11118)** (10/9) - 数学と理論物理の未解決問題 82 件からなるベンチマーク。既知の知識を超えた科学的問題に AI がどこまで迫れるかを測る。
- **[On the Clock: Towards Punctual and Productive Time-Budgeted AI Agents](https://arxiv.org/abs/2610.10833)** (10/9) - Qwen3.6-27B（MLE-Bench Lite）や Qwen3-4B（Zork I）で、小型エージェントが実時間の予算を守りつつ時間を有効に使えるかを調べる。

## オープンソース・モデル

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** (公開7日) - Aleph Alpha の MoE 推論モデルで、ドイツ語と英語に注力する。総パラメータ 78B、トークンあたり活性 3.46B。推論モードとツール呼び出しに対応し、コンテキスト長は 100 万トークン超で、ライセンスは Apache 2.0。
- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** (公開当日) - Qwen-Image-2.1 の高速チェックポイント。同じ 7B の画像生成アーキテクチャを 8 ステップのデノイズで動かし、テキストからの生成と画像編集に対応する。Diffusers から読み込める。
- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** (公開9日) - モバイルやウェアラブル、マイコン向けの音声認識モデル。モデル全体が 16.9 MB の単一ファイルで、GPU なしの CPU で動く。7 言語の書き起こし、単語タイムスタンプ、音声埋め込みを備える。
- **[tardellirs/model-pulse](https://huggingface.co/spaces/tardellirs/model-pulse)** (space) - 任意のモデルのダウンロード履歴と人気の推移を表示する Space。

## ベンチマーク・リーダーボード

LMArena Text Overall（10/10 時点）の上位は 1 位 gemini-4-argon-high（1525）、2 位 claude-opus-5.5-high（1507）、3 位 claude-opus-4-6-high（1504）、4 位 claude-fable-5-high（1504）、5 位 claude-opus-4-7-high（1501）。前日から順位に変動はない。

## 所感

今日は個別の新モデルよりも、エージェントの能力や自己改善をどう測るかという評価の側の議論が目立った。METR の時間軸への統計的な疑問や、検証器そのものの検証は、その流れにある。OpenAI の事例記事は、Sophos のようなセキュリティ分野やコスト削減に軸足が移っている。
