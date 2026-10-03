---
title: "AI Watch（2026年10月3日）"
date: "2026-10-03T01:01"
category: "analysis"
summary: "Anthropic が1億ドルで1万人のエンジニア育成、LMArena は Gemini 4 Argon が首位に。HF では Qwen-Image-2.1 が登場"
tags: ["llm", "benchmark", "enterprise", "open-source", "image-generation", "agents"]
---

## 今日のハイライト

- **Anthropic が1億ドルを投じ、1万人のエンジニアを育成すると発表（10/2）。** タイトルによれば、企業の AI 人材ギャップの解消が狙い。個別記事は取得しておらず、詳細は確認できていない。
- **LMArena のテキスト部門で Gemini 4 Argon (High) が1位に（rating 1525）。** 票数は約4,900と少なく、今後順位が動く可能性がある。

## 企業動向

- **[Anthropic invests $100 million to train 10,000 engineers and tackle the enterprise AI talent gap](https://www.anthropic.com/news/claude-frontier-academy)**（Anthropic, 10/2） - 1億ドルで1万人のエンジニアを育成し、企業の AI 人材不足に対処するという取り組み。タイトルから分かる範囲に留める。
- **[A model guide for the GPT-6 family](https://openai.com/index/practical-guide-building-gpt-6)**（OpenAI, 10/2） - スタートアップ向けに、GPT-6 系モデルの選び方、reasoning effort の調整、プロンプトとスキルの改善、ツールの連携、本番運用に向けた準備を解説するガイド。
- **[Chatham scales its capital markets expertise with OpenAI](https://openai.com/index/chatham-financial)**（OpenAI, 10/2） - Chatham Financial が Codex と GPT-5.6 で技術開発とワークフローの再設計を進め、取引の検証を30分から4分未満に短縮した事例。
- Google DeepMind は直近24時間の新着なし（最新は9/30の Gemini 4 Argon で既出）。

## 注目論文

arxiv RSS（cs.AI）の10/2発表分、および export API で取得した10/1投稿分から選出。

- **[Finetuning with Sampling: SFT Learns Better Than You Think](https://arxiv.org/abs/2610.02140)**（Karan ほか, 10/2） - 「RL は汎化し、SFT は忘却しやすい」という通説に対し、学習目的を変えず、MCMC サンプリングでデータ分布を学習者に合わせて整える方法を提案する。オンポリシー学習の長所とオフポリシーの専門家データの活用を両立させる狙い。
- **[Local Support Learning](https://arxiv.org/abs/2610.02126)**（Ben-Kish ほか, 10/2） - 忘却を各重み行列の入力空間における幾何的な問題と捉える。通常のアダプタに、自分の学習分布の入力だけで有効になるゲートを組み合わせ、過去のデータなしで以前の能力を保つ枠組み LSL を提案する。
- **[Hierarchical Continuous Diffusion Language Models](https://arxiv.org/abs/2610.02193)**（Ren ほか, 10/2） - 離散拡散 LM は並列デコード時にトークン間の依存が切れ、連続拡散は有効なトークン列との結び付きが弱い。HC-DLM は離散トークン生成と連続潜在の軌跡を単一のデノイジング過程で結び、変分下界から学習目的を導く。
- **[KaliBench](https://arxiv.org/abs/2610.02206)**（Li ほか, 10/2） - 自然言語から Kali Linux の CLI コマンドへの翻訳を測るベンチマーク。1,642ツール・8,504組のクエリとコマンドを含み、フラグ値の対応ミスや引数順の誤りといった、実行を壊す小さな誤りを細かく評価できる。

## オープンソース・モデル

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** - 画像生成コンポーネントが7Bの、テキストから画像の生成と編集を1つで担うモデル。透過 RGBA の生成と編集、最大10枚の参照画像、円・手描き・マスクによる局所編集に対応する。公開18日目だが、派生や ComfyUI 版も多数トレンド入りしている。
- **[Hcompany/trajectories](https://huggingface.co/datasets/Hcompany/trajectories)** - Holo4 のベンチマーク結果の元になった、7,366件のエージェント軌跡データセット。Holo4 27B と 35B-A3B が OSWorld や AndroidWorld などで実行した各ステップの推論、行動、ツール結果、スクリーンショットを含む（公開4日目）。
- **[akatz-ai/MiniMax-H3-Character-Swap-LoRA](https://huggingface.co/akatz-ai/MiniMax-H3-Character-Swap-LoRA)** - 動画内の人物を参照画像のキャラクターに差し替える、実験的な LoRA（1,000ステップ学習）。背景の保持はベースモデルより良いことが多い一方、動きのタイミング、表情、カット割りは不安定だと README に明記されている。
- **[PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE)** - 論文「Visual Backbones as Self-Modifying Learning Systems」の公式重み。ImageNet-1K 分類、COCO の検出とインスタンス分割、ADE20K のセマンティック分割向けに T/S/B の階層型チェックポイントを公開している（公開3日目）。

## ベンチマーク・リーダーボード

LMArena のテキスト部門（Overall）上位は、1位 Gemini 4 Argon (High) 1525、2位 Claude Opus 4.6 (High) 1505、3位 Claude Fable 5 (High) 1504、4位 Claude Opus 5.5 (High) 1504、5位 Claude Opus 4.7 (High) 1501、6位 Claude Fable 5.1 (Max) 1501。過去のレポートと順位が大きく異なり、今回の抽出結果は rating が Elo 相当で、表示の区分も以前と違う可能性がある。前日との差分の評価は避ける。Gemini 4 Argon は4,932票、Opus 5.5 は4,552票と票数が少なく、確定的な順位ではない。

## 所感

LMArena では Gemini 4 Argon が早くも首位に立ったが、票数が少ないため、数日の推移を見る必要がある。論文側では、忘却の抑制や SFT の再評価といった、ポストトレーニングの基本に立ち返る研究が目立った。Anthropic の人材育成投資と OpenAI の GPT-6 実践ガイドからは、各社がモデル性能の競争に加え、導入側の人材と運用ノウハウの整備に力を入れ始めていることがうかがえる。
