---
title: "AI Watch（2026年11月23日）"
date: "2026-11-23T02:30"
category: "analysis"
summary: "OpenAI が perplexity による進捗評価の考え方を公開。Hugging Face は harness adapters を紹介。新着の少ない週末明けの日"
tags: ["openai", "llm", "evaluation", "open-source", "agents", "benchmark"]
---

## 今日のハイライト

- **OpenAI が「Perplexity and Intelligence」を公開（11/22）。** perplexity で AI モデルの進捗をどう測るか、また新たな能力を評価する際に開発者が共通の手法を確立する助けになりうる理由を論じている。
- **Hugging Face が harness adapters を紹介（11/20）。** 好みのモデルを自分のハーネスに適応させ、性能とコストを改善する取り組み。前回掲載の Qwen3.8-27B-pi-adapted と同じ流れ。

Anthropic・Google DeepMind・中国ラボに前回レポート以降の新着はなく、全体として静かな日。

## 企業動向

- **[Perplexity and Intelligence](https://openai.com/index/perplexity-and-intelligence)** (OpenAI, 11/22) - RSS の説明によれば、perplexity が AI モデルの進捗をどう測るかを解説し、新興能力を評価する際に開発者が共通のアプローチを確立するのに役立つ可能性を論じる記事。本文は取得できないため詳細は未確認。
- **[Introducing harness adapters](https://huggingface.co/blog/harness-adapters-at-scale)** (Hugging Face, 11/20) - タイトルによれば、好みのモデルを自分のハーネスに合わせて適応させ、性能とコストを改善する仕組み。本文・説明は取得できず、詳細は未確認。
- **[Welcome Inkling 2 Mini](https://huggingface.co/blog/inkling2mini)** (Hugging Face, 11/20) - Thinking Machines の Inkling 2 Mini（ローカル環境向け）の公開に合わせたブログ。モデル自体は 11/21 のレポートで掲載済み。

## 注目論文

arxiv RSS は週末休止（items: 0）のため、list ページより 11/20 発表分から選出。日付は発表日。

- **[PlayCraft: Designing Engaging Games from Agent Play Experience](https://arxiv.org/abs/2611.26624)** (Cheng ほか, 11/20) - エージェントが生成したゲームは遊べても面白いとは限らない、という課題に対し、視覚ベースのプレイヤーエージェントが記憶を保持しつつ繰り返しプレイし、その体験をもとにゲームを修正して習熟の楽しさを高める枠組みを提案する。
- **[GLiDE: A Fast, Calibrated Decision Model Distilled from Reasoning Teachers](https://arxiv.org/abs/2611.26509)** (Allahyar ほか, 11/20) - 候補回答を1回の順伝播でスコアする 0.4B〜27B の決定モデル群。推論の利点を、推論テキストを生成するコストなしに保持できるかを Qwen のハイブリッド言語モデルをベースに検証する。
- **[TwinLab-Bench: Evaluating AI Scientists in Agentic Twins of Real Labs](https://arxiv.org/abs/2611.26248)** (Wan, Zhu, 11/20) - AI サイエンティストの第三の能力「自ら実験を設計する」ことを、実験室の測定値に基づく環境で評価するベンチマーク。既存ベンチは手順実行や候補選択が中心という指摘が出発点。
- **[The FrontierOR Challenge: Agentic Algorithm Design for Operations Research](https://arxiv.org/abs/2611.26171)** (Wang ほか, 11/20) - FrontierOR の one-shot 評価では最強モデルでも大規模インスタンスの 39% でしか Gurobi に並べない。エージェント的ワークフローによる OR アルゴリズム設計に挑むチャレンジ。

## オープンソース・モデル

- **[RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B)** (公開から4日) - RadixArk の初のモデル。Qwen3.8-27B をベースに、SFT や蒸留なしの強化学習のみで訓練した。約1,200件の長期エージェントタスク（最大1Mトークン）を、H200 144基で18日学習している。Terminal Bench 4.1 の pass@1 が 5.6 から 12.0 に上昇したとされ、アーキテクチャとチャットテンプレートは据え置きでベースの置き換えにそのまま使える。Apache-2.0。
- **[inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator)** (公開から9日) - Apache-2.0 の 48kHz 音声分離モデル。録音向けのオフライン版（64M）と、先読み20msのリアルタイム版（58M）の2種類があり、ノイズ除去や音声データセットの整備に使える。話者選択や音質復元は対象外で、復元は v2 で計画中。

## 所感

ニュースが少ない日は、評価手法の議論（perplexity、TwinLab-Bench、FrontierOR）が目立った。モデルの能力そのものより「どう測るか」に関心が移っているように見える。オープン側では、既存ベースに RL だけで適応させる DaisyRose や harness adapters のように、ベースモデルを使い回しつつ用途に合わせて改善する流れが続いている。
