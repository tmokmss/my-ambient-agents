---
title: "AI Watch（2026年10月5日）"
date: "2026-10-05T00:45"
category: "analysis"
summary: "新着の企業発表は少ない週明け。エージェントの文脈管理・記憶の論文と、小型の決定特化モデルの台頭を紹介"
tags: ["agents", "memory", "small-models", "open-source", "benchmark", "safety"]
---

## 今日のハイライト

- **過去24時間以内の Anthropic / OpenAI / Google DeepMind の新着はなし。** 直近の発表（Gemini 4 Argon、GPT-6.1 Sol、Anthropic の人材育成投資など）は既出レポートで取り上げ済みのため、本日は省略する。
- **エージェント基盤の論文が目立つ。** コーディングエージェントが「いつコンテキストを圧縮するか」を学習する AutoCompact、記憶の有用性を因果推論で推定する Causal Memory Policy など、長期タスク運用の実務課題を扱う研究が出ている。HF では 144M〜340M 規模の「決定特化」小型モデルが並んでいる。

## 注目論文

arxiv RSS は週末休止（最終更新 10/4）のため、list ページより 10/2 発表分から選出。

- **[AutoCompact: Learning When to Compact Context in Long-Horizon Coding Agents](https://arxiv.org/abs/2610.02163)**（Zhang ほか, 10/2） - 長い作業の途中で、いつ文脈を圧縮し、何の作業状態を残すかをエージェント自身の方策として学習させる。ジャッジが圧縮判断・要約・圧縮後の行動をレビューし、問題のある出力を修正した軌跡を学習データにする（abstract 冒頭の記述に基づく）。
- **[Causal Memory Policy: Making Memory Utility Identifiable by Intervening on Retrieval](https://arxiv.org/abs/2610.02070)**（Behnam, Wang, 10/2） - 一度も検索されない記憶は、保存側の介入では効果が同一になり有用性が識別できない。そこでコンテキストの枠を一部確保し、既知の確率でサンプルした記憶を入れ、逆確率重み付けで有用性を推定する。
- **[Not All Experience Belongs in the Weights: Component Routing for Self-Improving GUI Agents](https://arxiv.org/abs/2610.01787)**（Wu ほか, 10/2） - GUI エージェントの経験を locator・手順・状態事実・教訓に分け、重みとコンテキストのどちらに入れるかを比較した。locator と教訓は重みで、手順と状態事実はコンテキストで有利という結果で、ファインチューニングと検索の優劣をめぐる研究間の食い違いを説明する。
- **[Can AI Oversight Be Zero Knowledge?](https://arxiv.org/abs/2610.01995)**（Chiesa ほか, 10/2） - 機密データから得た AI の出力が正しいことを、データを明かさずに検証できるかを論じる。対話型証明やディベートによる検証は、一般の oracle 付き計算では効率的な検証が不可能なため追加の仮定に頼る、と指摘し、プライバシーに焦点を移して検討する。

## オープンソース・モデル

- **[SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1)** - 状態・質問・候補回答から1つの決定を返す 144.3M パラメータのモデル（11日前公開）。typed-decisions で 73.15%、AG News で 94% と報告している一方、Banking77（72ラベル）の小規模パイロットでは 64% で参照モデルを下回る。
- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** - ラベル集合を呼び出し時に与えるだけで、意図分類・ルーティング・感情・優先度などを1回の forward で判定する 340M の英語分類モデル（11日前公開）。自社ベンチ fast-decisions の平均は 60.2% で、推論や自由回答はできない専用器と明記されている。
- **[ankitjh4/bharat-government-documents](https://huggingface.co/datasets/ankitjh4/bharat-government-documents)** - インド政府の公開情報文書を集めたデータセット（4日前公開）。正規化済みテキスト本文 64,964 件、ソースレコード 77,526 件で、抽出品質やトピックラベルも付く。

## ベンチマーク・リーダーボード

LMArena テキスト総合（Overall）の上位は次のとおり。

| 順位 | モデル | rating |
|---|---|---|
| 1 | gemini-4-argon-high（Google） | 1525 |
| 2 | claude-opus-4-6-high | 1505 |
| 3 | claude-fable-5-high | 1504 |
| 4 | claude-opus-5.5-high | 1504 |

Gemini 4 Argon の票数は約4,900と少なく、暫定値の可能性がある。上位2〜10位は 1494〜1505 に集まり、差は小さい。

## 所感

大型モデルの発表が一段落した週明けは、エージェント運用の足回り（文脈圧縮、記憶、経験の置き場所）を扱う研究が多く、フロンティアの競争が「モデル単体」から「ハーネスと運用設計」へ移っていることがうかがえる。HF では Julia-1 や GLiNER2.5-Decide のように、判定タスクに絞った小型専用モデルが並び、LLM を呼ばずに分岐を処理する流れが広がっている。
