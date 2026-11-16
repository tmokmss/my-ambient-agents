---
title: "AI Watch（2026年11月16日）"
date: "2026-11-16T01:47"
category: "analysis"
summary: "OpenAI が GPT-6 Astra による標準模型の格子定義の証明支援と科学ブログを公開。Kimi K3.1 Pro など大型オープンウェイトが登場"
tags: ["llm", "openai", "science", "open-source", "agents", "security", "multimodal"]
---

## 今日のハイライト

- **OpenAI が、素粒子物理の標準模型を格子上で定義する候補についての記事を公開した（11/15）。** アイデアを詳細な証明に仕上げる過程で GPT-6 Astra が使われたという。同日に科学向けの新ブログも始まっており、AI を科学的発見に使う路線を前面に出している。
- **オープンウェイト側では、Kimi K3.1 Pro（2.8T パラメータ）と LongCat-2.5（1.6T）という 1T 超の MoE が、どちらも長期のエージェント作業を売りにしてトレンド入りしている。**

## 企業動向

Anthropic と Google DeepMind には、前回レポート以降の新着が無かった（Anthropic の最新は 11/10 の IPO ロードショー、DeepMind は 11/12 の Gemini 4 Hydrogen）。OpenAI の 11/15 分のみ取り上げる。RSS の概要文のみを根拠にしており、本文は確認していない。

- **[A step toward defining the Standard Model on a lattice](https://openai.com/index/step-toward-defining-the-standard-model)** (OpenAI, 11/15) - 標準模型の非摂動的な格子定義の候補を探る記事。GPT-6 Astra がアイデアを詳細な証明にまとめる作業を助けたと説明されている。証明の中身や検証状況は概要文からは分からない。
- **[Our new blog for science](https://openai.com/index/our-new-blog-for-science)** (OpenAI, 11/15) - 研究者が AI で科学的発見を進める際の新しい知見、実践的な手法、現場の体験談を共有する OpenAI の科学ブログが始まった。

## 注目論文

arxiv RSS は週末休止のため、list ページより 11/13 発表分から選出。前回レポートで使った ID は除外済み。

- **[Cited but Unused: Parametric Provenance in Retrieval-Augmented Generation](https://arxiv.org/abs/2611.17161)** (Abbas ら, 11/13) - RAG の引用は出典を取り違えることがある。検索された文書内の事実を偽の値に差し替えて再質問する方法で出典の実態を測ったところ、引用可能な主張の 1.2〜15.7% が、検索文脈ではなくモデルの内部記憶から出ていた。割合はモデルが大きいほど上がる傾向があり、引用があるから根拠に基づくとは言えないことを示す。
- **[CapLite: Prompt-Injection Defense for Small Language Model Agents without Model-Written Security Artifacts](https://arxiv.org/abs/2611.17115)** (Xu ら, 11/13) - CaMeL や Progent などの防御は、エージェント自身のモデルにポリシーやプログラムを書かせて強制する。1.7B〜12B の小型モデル 13 個を含む 15 モデルで試すと、小型モデルには安全に書けず、攻撃を許したり CaMeL のプログラムが最大 68% のエピソードで実行できなかったりした。CapLite はポリシーをツールのスキーマから導く方式で、小型モデルのエージェントでもプロンプトインジェクション対策を成立させる。
- **[CoReMem: Cost-Internalizing Memory for Successive Coding Tasks with Prospective Valuation](https://arxiv.org/abs/2611.17316)** (Li ら, 11/13) - 変化し続けるリポジトリで連続してタスクをこなすコーディングエージェントについて、書き込む記憶を「次のタスクでの価値」で選ぶ枠組み。軌跡の一部を入れた場合と外した場合で次のタスクを実行し、記憶の価値を測る。記憶の書き込みと読み込みのコストまで含めて設計するのが特徴。

## オープンソース・モデル

- **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)** (公開13日、補充枠) - 総パラメータ 2.8T・活性 104B の MoE で、100 万トークンのコンテキストを持つオープンウェイトのマルチモーダル（テキスト・画像）エージェントモデル。Kimi K3 に大規模な強化学習を施したもので、コーディング、3D 生成、金融リサーチ、事実性などの向上をうたう。重みは MXFP4 の量子化対応学習。長文脈向けに全注意層を Gated DSA 層に置き換えている。
- **[meituan-longcat/LongCat-2.5](https://huggingface.co/meituan-longcat/LongCat-2.5)** (公開11日、補充枠) - 総 1.6T・活性約 48B の MoE で、視覚理解と長期のエージェント型コーディングを組み合わせたネイティブマルチモーダルモデル。視覚特徴を離散トークン化してテキストと共通の意味空間で揃え、実エンジニアリング課題と報酬ハッキング対策を含む強化学習で訓練したと説明されている。国産 AI アクセラレータ上で訓練したとも書かれている。
- **[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)** (公開12日、補充枠) - 1 つのチェックポイントでテキストからの画像生成と、複数の参照画像による編集を行うオープンな画像モデル。アップスケーラーなしで約 16 メガピクセル（最大 4096×4096）を直接生成し、6 ステップに蒸留されていて CFG は不要。Comfy-Org 版と GGUF 版も同時にトレンド入りしているが、派生なのでここでは本家のみ挙げる。
- **[adventists-ai/Sophon-Realtime-v1](https://huggingface.co/adventists-ai/Sophon-Realtime-v1)** (公開8日、補充枠) - 話している間も聞き続け、遮られたらすぐ止まる全二重の音声対話モデル群（Apache-2.0）。話し方のニュアンス（ためらい、強調、皮肉、笑い）を聞き取り、笑う、ため息をつくなど非言語音を含めて返す。同じ 32B の本体で、効果音タグ付き返答を音声モデルが演じる Tag（推奨）、軽量な Flash、約 350M の話者モデルが直接音声ベクトルを出す E2E の 3 構成がある。

## ベンチマーク・リーダーボード

LMArena のデータセット API が HTTP 501 を返したため、取得失敗（直近レポートの公開日は 11/9）。

Artificial Analysis の Intelligence Index は、各モデルの最高値で Claude Fable 5.2 が 64.6、Gemini 4 Carbon が 60.0、Claude Opus 5.5 が 59.1、GPT-6 Astra が 56.9 で、前回から順位の変動は無い。

## 所感

OpenAI の標準模型の記事と科学ブログの開設、Anthropic が 11/6 に出した科学モデルの記事など、各社が「AI による科学的発見」を看板に掲げる流れが続いている。オープンウェイトでは 1T 超の MoE が当たり前になり、Kimi と LongCat はどちらも長期エージェント向けの強化学習を強調している。論文では、RAG の引用が必ずしも根拠を意味しないことや、小型モデルに防御策を書かせる設計の限界など、エージェントの信頼性を検証する研究が目立った。
