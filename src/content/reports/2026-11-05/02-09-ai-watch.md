---
title: "AI Watch（2026年11月5日）"
date: "2026-11-05T02:09"
category: "analysis"
summary: "OpenAI が Linux カーネルの権限昇格脆弱性 948 件を自律パイプラインで修正、Images 2.6 と Pierre 買収も。Kimi K3.1 Pro が公開"
tags: ["llm", "security", "agents", "open-source", "image-generation", "benchmark"]
---

## 今日のハイライト

- **OpenAI が 11/4、Linux カーネルのローカル権限昇格の脆弱性 948 件を、発見・検証・パッチ生成まで自律的に行うパイプラインで処理したと発表した。** RSS の説明によると題名は「A thousand fewer paths to root」。同日には GPT-5.6 Cyber を AWS GovCloud 向けに出す Daybreak Red の提供も発表され、OpenAI がサイバー防御を前面に出していることがわかる。記事本文は取得できないため、誤検知率や採用されたパッチ数は未確認。
- **Moonshot AI が open-weight の Kimi K3.1 Pro を公開した（公開2日）。** README によると総パラメータ 2.8T、アクティブ 104B の MoE で、コンテキスト長は 100 万トークン。オープンウェイトで 3T 級のマルチモーダルエージェントモデルが出た形になる。

## 企業動向

- **[A thousand fewer paths to root](https://openai.com/index/a-thousand-fewer-paths-to-root)** (OpenAI, 11/4) - Linux カーネルのローカル権限昇格の脆弱性 948 件について、発見・検証・パッチ生成を自律的に行うパイプラインを構築したという内容。AI による脆弱性対応が、個別の発見から大規模な修正へ進んだ例として注目できる。
- **[Daybreak Red is now available in AWS GovCloud (US-East)](https://openai.com/index/daybreak-red-aws-govcloud)** (OpenAI, 11/4) - GPT-5.6 Cyber を、承認された顧客が Amazon Bedrock 経由で AWS GovCloud (US-East) から使えるようになった。用途は許可を受けたサイバーセキュリティ業務に限られる。
- **[Introducing Images 2.6](https://openai.com/index/introducing-images-2-6)** (OpenAI, 11/4) - 画像生成が高速化し、GIF 作成、より精密な編集、新しい API パラメータが加わった。ChatGPT、Codex、API で使える。
- **[OpenAI to acquire Pierre Computer Company, Inc.](https://openai.com/index/openai-to-acquire-pierre)** (OpenAI, 11/4) - Pierre Computer Company を買収し、Codex のコード作成・理解・レビュー向けツールを強化する。買収条件は RSS からは不明。
- **[DevRev delivers autonomous self-service with GPT-6.1 Sol](https://openai.com/index/devrev-enterprise-self-service)** (OpenAI, 11/4) - DevRev が GPT-6.1 Sol を使って Computer と Operator を動かし、推論・速度・コストのバランスを取っている事例。

## 注目論文

- **[Alignment Faking Depends on the Value, Not Just the Model](https://arxiv.org/abs/2611.03650)** (Ray, Srivastava ら, 11/4) - 監視されていると思うと指示に従い、されていないと思うと破る「アラインメント偽装」を扱う。abstract の冒頭からは、現象がモデルだけでなくどの価値が絡むかにも左右されるという主張が読み取れる。
- **[Training LLM Agents to Automate LLM Post-Training with RSI-Dojo](https://arxiv.org/abs/2611.03698)** (Gao, Yu, Yin ら, 11/4) - AI がモデルやハーネスなど AI システム自体を自律的に改善する再帰的自己改善（RSI）を、LLM エージェントによるポストトレーニング自動化として訓練する。
- **[MCPGuard: Finding Conformance Gaps in MCP SDKs via Dual-Track Analysis and Dynamic Adjudication](https://arxiv.org/abs/2611.03662)** (Sun, Liu, Dang ら, 11/4) - MCP の公式 SDK がメッセージ検証などの仕様をどこまで守っているかを、静的・動的の二系統で調べる手法。エージェントと外部ツールをつなぐ層の品質を扱う点が実用的。
- **[Length Is Cheap, Competition Is Not: Attention Predicts Context Rot in Retrieval](https://arxiv.org/abs/2611.04169)** (Liu ら, 11/4) - 長い入力で性能が落ちる原因は長さ自体ではなく、注意の競合だと主張する。5 つのオープンモデルで検証している。
- **[Dory1.0-4B: A Looped Normalized-GPT](https://arxiv.org/abs/2611.03998)** (Fishman, Sun, Acharya ら, 11/4) - 4B のループ型（潜在再帰）言語モデルで、1 つのチェックポイントが推論時の計算量に応じて深さを変えられる。

## オープンソース・モデル

- **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)** (公開2日) - K3 を大規模な強化学習でポストトレーニングした open-weight のマルチモーダルエージェントモデル。2.8T/アクティブ 104B の MoE で、コンテキスト長は 100 万トークン。コーディング、3D 作成、金融リサーチ、事実性の改善をうたう。重みは MXFP4 で、量子化を考慮した学習をしている。
- **[Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex)** (公開6日) - MiniMax-H3 を土台にした動画・音声同時生成モデル。6 ステップのサンプリングで同期した音声付き動画を作り、最大 12 件の参照入力を受け付ける。ローカル推論は 480p/768p で、1080p〜4K は Pika の API で提供される。
- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** (公開7日) - 物体の画像 1 枚から、最大約 105 万個のガウシアンによる 3D Gaussian splat を生成する。写っていない側面も補い、VRAM 7.2GB、最短 2 秒未満で動くと README にある。
- **[PentesterFlow/OffsecCyber](https://huggingface.co/datasets/PentesterFlow/OffsecCyber)** (dataset, 公開1日) - ソフトウェアの脆弱性に関する英語のアシスタント会話データセット。脆弱性の解説や CVE 分析などを含む。

## ベンチマーク・リーダーボード

LMArena Text Overall（公開日 10/28）の上位は次のとおり。

1. Gemini 4 Carbon (High) 1540
2. Gemini 4 Argon (High) 1529
3. Claude Opus 5.5 (High) 1516
4. Claude Fable 5.1 (Max) 1514
5. Claude Opus 5 (Max) 1508

Google のモデルが 1〜2 位を占めている。10/28 に発表された Gemini 4 Carbon が首位に入った。

## 所感

OpenAI は今日の 5 本のうち 3 本がセキュリティかコード関連で、AI の使い道をサイバー防御とコーディング基盤に寄せていることが目立つ。オープン側では 2.8T の Kimi K3.1 Pro が出て、巨大 MoE の open-weight 化がさらに進んだ。論文側では、アラインメント偽装や MCP の適合性検証のように、エージェントの信頼性と安全性を測る研究が引き続き多い。
