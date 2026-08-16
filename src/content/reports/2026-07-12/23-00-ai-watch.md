---
title: "AI Watch（2026年7月13日）"
date: "2026-07-12T23:00"
category: "analysis"
summary: "企業ブログは3日連続で新着無し。arxivでは自己改善エージェントの「審査バイアス」を暴く研究が続き、HFではAgents-A1が35Bで兆パラ級性能を主張。"
tags: ["llm", "agents", "safety", "benchmark", "interpretability", "open-source"]
---

## 今日のハイライト

**「自己改善するエージェントを審査するLLM審査員」自体の信頼性を問う論文が続く — バイアスのある審査員は"退場すべきスキル"をこっそり生かし続ける（7/10）**

[The Blind Curator: How a Biased Judge Silently Disables Skill Retirement in Self-Evolving Agents](https://arxiv.org/abs/2607.07436)（Zhang, Cui, Wang, Li, Qiu, Zhu, He）が公開。自己改善エージェントは、失敗したスキルを観測して淘汰する「スキル退場」機構によってライブラリの質を保っているが、その前提は審査（リワード）が偏っていないことにある。本研究は、対称的なノイズならスキル退場は機能し続けるが、「失敗を見逃す（false-pass）」方向にバイアスした審査員は淘汰機構を静かに機能停止させ、ライブラリの質がベースライン以下に劣化することを因果的に実証した。同日公開の[When LLMs Agree, Are They Right? Auditing Self-Consistency and Cross-Model Agreement as Confidence Signals](https://arxiv.org/abs/2607.08065)（Ding）も、53件の実行環境・K=50サンプルの大規模比較を通じて「モデル同士の意見一致」は正解率の代理指標として単純には使えないことを示しており、エージェントやLLM評価の「審査する側」の信頼性そのものを問う論点が数日にわたり縦糸として続いている。

**Hugging FaceでInternScienceの35Bエージェントモデル「Agents-A1」がトレンド入り — 「パラメータでなく行動範囲をスケールする」設計を掲げる**

[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) は、モデル名に「Scaling the Horizon, Not the Parameters」を掲げるQwen3.5 MoEベースの35Bエージェント特化モデル。パラメータ数を増やす代わりに長期タスクの行動範囲（horizon）を伸ばす設計により、兆パラメータ級モデルに匹敵する性能を主張しており、Meituan LongCat-2.0（1.6兆パラメータ、既報）のような超大規模化路線とは対照的な、効率重視のアプローチとして注目される。

---

## 注目論文

- **[The Blind Curator: How a Biased Judge Silently Disables Skill Retirement in Self-Evolving Agents](https://arxiv.org/abs/2607.07436)**（Zhang, Cui, Wang, Li, Qiu, Zhu, He / 7/10） — 上記ハイライト参照。自己改善エージェントの「スキル退場」機構が、審査バイアスによって静かに無効化されるメカニズムを因果分析で解明。

- **[When LLMs Agree, Are They Right? Auditing Self-Consistency and Cross-Model Agreement as Confidence Signals](https://arxiv.org/abs/2607.08065)**（Ding / 7/10） — 上記ハイライト参照。53件の評価環境を横断した大規模研究で、モデル自身の再現一致やモデル間一致が「正解らしさ」の代理指標として使える条件・使えない条件を切り分けた。

- **[Game Theory Driven Multi-Agent Framework Mitigates Language Model Hallucination](https://arxiv.org/abs/2607.08403)**（Liu, Bie, Wang, Ma, Liu et al. / 7/10） — 軽量LLMが専門領域で言語パターンの模倣に留まり公理的推論に失敗しハルシネーションを起こす問題に対し、ベイズ推論とゲーム理論を組み合わせた多エージェント枠組み「G-Frame」で36万件超のCoTデータを自動合成。7BモデルでGPT-4o miniに匹敵する性能とハルシネーション約8割減を達成した。

- **[Multi-Agent Firewall Architecture for Privacy Protection of Sensitive Data in Interactions with Language Models](https://arxiv.org/abs/2607.08282)**（García Cuesta, Mateo Torrejón, Sánchez-Macián / 7/10） — ブラウザ拡張とプロキシでHTTP(S)・WebSocket通信を横断的に傍受し、決定的検知とLLMによる意味解析を組み合わせた多エージェント構成でデータ漏洩・プロプライエタリコード漏洩を防ぐOSSファイアウォールを提案。7/10報告のToken-Flow Firewallに続く、エージェント運用の防御層に関する研究。

- **[Towards Mechanistically Understanding Why Memorized Knowledge Fails to Generalize in Large Language Model Finetuning](https://arxiv.org/abs/2607.08393)**（Dai, Rao, Wang, Wang, Liu, Xiong / 7/10） — ファインチューンで新知識を素早く記憶しても下流の推論に使えない「知る-使うギャップ」を定式化。内部表現を移植する介入手法「self-patching」により、知識が内部に存在していても回路が誤整合していて推論に接続されていないケースがあることを可視化した。

---

## オープンソース・モデル

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — 上記ハイライト参照。パラメータ数でなく行動範囲をスケールする設計の35Bエージェントモデル。Apache-2.0ライセンスで公開。

- **[ByteDance-Seed/EdgeBench](https://huggingface.co/datasets/ByteDance-Seed/EdgeBench)** — ByteDance Seedが公開した、AIエージェントが実世界環境からどう学習するかを測るベンチマーク。134件の実タスク・6つの能力カテゴリ・3.8万時間超のエージェント対話ログから構成される。

- **[LiquidAI/antidoom-mix-v1.0](https://huggingface.co/datasets/LiquidAI/antidoom-mix-v1.0)** — Liquid AIが公開した、モデルが同じ応答を繰り返す「doom loop」的な劣化生成を防ぐための、プロンプトのみで構成された選好学習用データセット。GSM8K・MATH・MMLUなど既存ベンチマークの訓練分割から正解ラベルを除去して再構成している。

- **[victor/gemma-avatar](https://huggingface.co/spaces/victor/gemma-avatar)** — Hugging FaceスタッフによるGemma 4搭載のリアルタイム音声対話デモ。7/10報告のsmolagentsの音声チャットと同じAIスタック（Parakeet ASR + Qwen3 TTS）を使い、球体の可視化を3Dのリップシンクアバターに置き換えたもの。オープンなリアルタイムマルチモーダル実験がコミュニティで続いている。

---

## ベンチマーク・リーダーボード

LMSYS/LMArenaリーダーボード（`lmarena-ai/arena-leaderboard`）はHTTP 200で取得できたが、内部データの最終更新は引き続き2026年2月21日のままで、直近の順位変動は反映されていない。実質的に静的スナップショットであるため、本日も順位変動の報告は見送る。

---

## 所感

Anthropic・OpenAI・Google DeepMindのブログはいずれも直近の新着記事が7/9のもの（Anthropicの「hard questions」等、OpenAIの「Deutsche Telekom」事例）で止まっており、3日連続で企業発の新しいプロダクトニュースが無い落ち着いた週末だった。その分arxivでは、自己改善エージェントの「スキル退場」機構を審査バイアスが静かに無効化するという研究と、モデル同士の一致度を正解の代理指標として使うことの危うさを検証した研究が同日に並び、ここ数日続く「エージェントやベンチマークの評価者自身をどう信頼するか」という論点がさらに具体化した。Hugging Face側では、パラメータ数でなく行動範囲のスケールを掲げる35BエージェントモデルAgents-A1がトレンド入りしており、Meituanの1.6兆パラメータMoEのような力技の大規模化と対をなす、効率重視のアプローチが提示された点が印象的だった。
