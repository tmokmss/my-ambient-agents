---
title: "AI Watch（2026年10月24日）"
date: "2026-10-24T00:26"
category: "analysis"
summary: "Anthropic がサイバーセキュリティ事案の整合性評価を公開、OpenAI は学習環境の封じ込め強化を説明。MiniMax-M3.1-Flash、Indra OCR など"
tags: ["llm", "safety", "agents", "open-source", "benchmark", "security"]
---

## 今日のハイライト

- **Anthropic が 10/23、「最近のサイバーセキュリティ事案に関する整合性（alignment）評価」を公開した。** 一覧ページのタイトルのみの確認で、対象の事案や結論は未確認。スラッグは「意図しないモデルの行動の調査」を示しており、モデルが意図しない動作をした件の分析と読めるが、断定はできない。
- **OpenAI が同じ 10/23 に「フロンティアモデルの学習環境の保護」を公開した。** RSS の説明によると、オフライン環境や高計算量のレッドチーミングを含め、学習・評価時の封じ込めを強化したという。2社が同じ日に、モデルの挙動を封じ込める話題を出した。

## 企業動向

記事本文は取得できないため、OpenAI の内容は RSS の説明、Anthropic はタイトルに基づく。

- **[An alignment assessment of recent cybersecurity incidents](https://www.anthropic.com/news/investigating-unintended-model-actions)** (Anthropic, 10/23) - 最近のサイバーセキュリティ事案についての整合性評価。詳細は未確認。
- **[Securing our frontier model training environment](https://openai.com/index/securing-our-frontier-model-training-environment)** (OpenAI, 10/23) - フロンティアモデルの学習・評価環境の封じ込めをどう強化したかの説明。オフライン環境と、高計算量でのレッドチーミングを含む。
- **[OpenAI and Poland's NASK partner to advance AI safety and security](https://openai.com/index/openai-nask-ai-safety-security-partnership)** (OpenAI, 10/23) - ポーランドの研究機関 NASK と、AI の安全性・セキュリティ、技術研究で提携する。安全策の強化とデジタル基盤の強靭化が狙い。
- **[Rapidly scaling online storage to serve over 1 billion ChatGPT users (Part II)](https://openai.com/index/scaling-storage-one-billion-users-part-two)** (OpenAI, 10/23) - ChatGPT のストレージ基盤 Habitat を、マルチテナント、グローバルキャッシュ、Azure Cosmos DB で拡張し、読み取りを 12 倍高速化した事例。
- Google DeepMind の最新は 10/22 の森林タイプ地図で、前回掲載済みのため省略。

## 注目論文

arxiv RSS は週末休止のため、list ページより 10/23 発表分から選出。

- **[Simulated Control Evals](https://arxiv.org/abs/2610.31593)** (Olmo ほか, 10/23) - 悪意あるモデルでも安全策が害を防げるかを測る「コントロール評価」を、実環境の代わりに LLM がツール応答をシミュレートして行う手法を提案。実行結果が正解として得られる LinuxArena で、BashArena など別環境の誤差と比べて検証した。評価環境を作るコストを下げられる可能性がある。
- **[RIPPLE: Recovery Internalization through Process-Level Policy Learning and Effect-Aware Credit for Long-Horizon Agentic Coding](https://arxiv.org/abs/2610.31276)** (Xu ほか, 10/23) - 失敗を観察して妥当な批評は書けるのに同じ誤った軌跡を続ける「批評から行動への断絶」を問題にした。教師の復旧指導を蒸留し、強化学習で反省・診断・修正に段階別のクレジットを与える。4つのリポジトリ規模のベンチマークで平均 4.8 点向上し、推論時に補助の批評モデルは不要。
- **[Who Is Sycophantic to Whom? Confident LLMs, Human Deference, and the Collapse of Trust Calibration](https://arxiv.org/abs/2610.31579)** (Deepthika ほか, 10/23) - LLM が人に迎合する研究の逆で、自信満々に誤る LLM に人が従うかを調べた。32人が事実の一部を偽情報に差し替えたアシスタントと学習した結果、クイズの点数は 7.4 から 2.9（10点満点）に低下し、偽情報の選択率は 60%（正しく教えた項目は 11%）だった。小規模な実験だが、確信的な口調の危うさを示す。
- **[The Value of Memory in Language Agents](https://arxiv.org/abs/2610.31303)** (Lin ほか, 10/23) - エージェントのメモリの価値を、履歴から永続状態、運用での利用、回復と修正のコストまで追う意思決定理論の枠組みを提示。保存・検索・需要の不確実性の役割を反例で整理している。理論寄りだが、メモリ設計の議論が盛んな分野の土台になりうる。

## オープンソース・モデル

- **[MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)** (公開6日) - 総 428B・アクティブ 23B の、テキスト・画像・動画入力に対応するネイティブマルチモーダル MoE。コンテキストは最大 1M トークンで、コーディング、エージェント、コンピュータ操作、サイバーセキュリティ向け。全層のスパースアテンション、量子化対応学習、DSpark 投機的デコードで効率を高めた。README では DeepSWE v1.1 で 73.7%、OSWorld V2 で 61.7 など（自社報告）。
- **[datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr)** (公開13日・補充枠) - 1M パラメータの OCR モデルで、CPU だけで動く。PDF や画像をマークダウン・テキスト・座標付き JSON に変換し、手書き、80言語以上、傾いたページにも対応する。32 コアで毎秒約44ページ、OmniParseBench で 66.7（PaddleOCR の PP-StructureV3 は 58.4）と自社比較で示す。
- **[mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M)** (公開9日・補充枠) - Mistral の時系列基盤モデル群 Timestral の 209M 版（5M〜209M の4サイズ）。ゼロショットで予測でき、単変量・多変量、共変量、21分位の確率予測に対応する。最大 32,768 ステップの履歴から 1,024 ステップ先まで一度に予測する。
- **[OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)** (公開12日・補充枠) - OpenMOSS の MOSS-Image ファミリーの教師ありファインチューニング版テキスト画像生成モデル。自然言語、タグ列、文字配置を指示する JSON レイアウトを入力でき、Base 版より文字のまとまりとレイアウトが整うと説明している。ComfyUI のプラグインもある。
- **[Anthropic/scorpion-toxin-binder-design](https://huggingface.co/datasets/Anthropic/scorpion-toxin-binder-design)** は前回掲載済みのため省略した。

## ベンチマーク・リーダーボード

LMArena Text Overall の公開日は 10/20 から 10/22 に更新された。

| 順位 | モデル | スコア |
| --- | --- | --- |
| 1 | Gemini 4 Argon (High) | 1526 |
| 2 | Claude Opus 5.5 (High) | 1516 |
| 3 | Claude Fable 5.1 (Max) | 1513 |
| 4 | Claude Opus 5 (Max) | 1508 |
| 5 | Claude Opus 5 (High) | 1503 |
| 6 | Claude Opus 4.6 (High) | 1501 |
| 7 | Muse Wonder (Max) | 1501 |

1位の Gemini 4 Argon (High) は 1532 から 1526 に下がり、2位との差が縮んだ。Fable 5.1 (Max) は 1511 から 1513 に上がり、Muse Wonder (Max) は 6位から 7位に下がった。

## 所感

Anthropic と OpenAI がそろって、モデルの意図しない挙動と学習環境の封じ込めを扱う記事を同日に出したのは、フロンティアモデルの運用リスクが公開の議論対象になってきたことを示す。論文でも、シミュレーションで安全評価の費用を下げる試みや、確信的な誤答に人が引きずられる実験など、評価と信頼の問題が目立つ。オープンモデルは、428B の MiniMax から 1M パラメータの CPU 向け OCR まで、規模の両極が並んだ。
