---
title: "AI Watch（2026年11月20日）"
date: "2026-11-20T02:57"
category: "analysis"
summary: "OpenAI が Codex 活用の性能改善基盤を公開、LMArena は Gemini 4 Neon が2位に。リアルタイム動画生成の Apple FastFrames など"
tags: ["llm", "agents", "benchmark", "open-source", "safety", "video-generation"]
---

## 今日のハイライト

- **OpenAI が、Codex 駆動のワークフローで ChatGPT の性能問題を見つけて直す社内システム「Performance Factory」を紹介した（11/19）。** コーディングエージェントを自社インフラの運用改善に使う事例で、前日の「研究加速」の記事と合わせ、エージェントの自社適用が進んでいることがわかる。
- **LMArena Text Overall が 11/18 公開分に更新され、Gemini 4 Neon (High) が 1530 で2位に入った。** 1位は Gemini 4 Carbon (High) の 1538 で、上位3枠を Gemini 4 系が占めた。

## 企業動向

Anthropic と Google DeepMind は過去2〜3日に前回レポート未掲載の新着がなかった（Anthropic は 11/18 の IPO 価格決定、DeepMind は 11/18 の Gemini 4 Neon・Genie 4 が前回までに掲載済み）。

- **[How OpenAI's Performance Factory keeps ChatGPT fast](https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast)** (OpenAI, 11/19) - Codex を使ったワークフロー群で性能上の問題を検出・修正する「Performance Factory」の仕組みを解説している。ChatGPT の応答速度を保つための社内基盤である。
- **[Deploying Daybreak Red](https://openai.com/business/learn/deploying-daybreak-red)** (OpenAI, 11/19) - 監督付きのセキュリティ調査を行う Daybreak Red のリファレンスアーキテクチャ。安全制御、セットアップ、監視が内容に含まれる。同日に Daybreak Blue のオンボーディング、PR scans、Codex Security Plugin のデモ動画も公開された。セキュリティ領域の製品群が整ってきている。

## 注目論文

arxiv cs.AI / cs.CL の 11/19 発表分から選出（既出 ID は除外済み）。

- **[Training Language Models for Introspective Oversight](https://arxiv.org/abs/2611.23365)** (Wang, Tang, Choi ほか, 11/19) - 報酬ハッキング、欺瞞、迎合といった、トランスクリプトからは見つけにくい挙動を扱う。アシスタント自身に自分の行動についての追質問へ答えさせる方式を、学習で改善する。
- **[GUARD: Stabilizing Recursive Self-Improvement with Regret Guidance](https://arxiv.org/abs/2611.23476)** (Zhang, Kang, Ming ほか, 11/19) - 凍結したベースモデルと、プロンプト・スキル・ツール規則・メモリからなる編集可能な「ハーネス」を、重みを更新せずに自己改善する枠組み（RSI）を安定させる。後悔（regret）に基づく誘導を使う。
- **[Language Models Make New Research Sound Old](https://arxiv.org/abs/2611.23546)** (Zyskind, 11/19) - 研究課題の検証に LLM を使うと、未解決の問いが「すでに一部研究済み」に聞こえ、関連論文が示す範囲も過大評価されるという指摘。AI による調査支援の落とし穴である。
- **[Where the Tokens Go: Heat, Entropy and Error in Agentic Coding](https://arxiv.org/abs/2611.23375)** (Aspuru-Guzik, Bernales, 11/19) - トークン課金のコーディングエージェントについて、トークンが何を生むのかを熱力学の類推で捉える「ソフトウェア熱力学」を提案する。コストの理論的な見方として面白い。

## オープンソース・モデル

- **[apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L)** (公開から3日) - Apple による自己回帰型の2ステップ動画拡散モデルで、480p 動画を対話的な低遅延で生成する。1.3B の S と14B の L が公開されている。S は1GPUで1フレーム約35msと報告されており、カメラ条件付き制御に対応した LingBot の高速版も同梱される。
- **[microsoft/Aion-1.0-Instruct-2.3B](https://huggingface.co/microsoft/Aion-1.0-Instruct-2.3B)** (公開から1日) - Windows のオンデバイス AI 向けの 2.3B 小型言語モデル。要約・リライト・チャットが得意で、8言語に対応し、MIT ライセンスである。最適化版は 2027年1月末までに Windows OS の SLM になる予定で、この公開版はその予告にあたる。
- **[inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator)** (公開から6日) - 48kHz の音声分離モデルで、Apache-2.0 で公開された。録音用のオフライン版（64M）と、先読み20msのリアルタイム版（58M）の2種類がある。ノイズ除去のほか、入力から差し引いて背景音を取り出す用途にも使える。
- **[Angais/pixel-art-atlas-1.4m](https://huggingface.co/datasets/Angais/pixel-art-atlas-1.4m)**（データセット、公開から13日） - 英語キャプション付きの 16×16 透過ドット絵スプライトを約140万枚収録する合成データセット。Krea 2 Turbo とドット絵 LoRA で生成された。

## ベンチマーク・リーダーボード

LMArena Text Overall（公開日 11/18、前回の 11/9 から更新）の上位は以下のとおり。

1. Gemini 4 Carbon (High) — 1538
2. Gemini 4 Neon (High) — 1530
3. Gemini 4 Argon (High) — 1529
4. Claude Opus 5.5 (High) — 1514
5. Claude Fable 5.1 (Max) — 1512

Gemini 4 Neon が新たに2位に入り、上位3枠がすべて Gemini 4 系になった。Claude Fable 5.2 などの 5.2 世代は上位5位に入っていない。

## 所感

エージェントを外向けの製品としてだけでなく、自社の性能改善や研究加速に使う事例（OpenAI）と、自己改善・監視を扱う論文（GUARD、Introspective Oversight）が同じ日に並んだ。自己改善する系をどう安定させ、どう監督するかが実務の課題になっている。オープンモデルでは、Apple のリアルタイム動画生成や Microsoft のオンデバイス SLM など、低遅延・端末内で動く方向の公開が目立った。
