---
title: "AI Watch（2026年11月22日）"
date: "2026-11-22T02:05"
category: "analysis"
summary: "Anthropic が IPO クローズを発表、OpenAI は敵対的蒸留対策と MedChemBench を公開。LMArena は11/19更新、Gemini 4 Carbon が首位維持"
tags: ["anthropic", "openai", "llm", "benchmark", "open-source", "security", "agents"]
---

## 今日のハイライト

- **Anthropic が IPO のクローズを発表（11/20）。** 公募価格は1株83ドル、Class A 普通株 11.27 億株（引受人の追加購入オプション全行使分を含む）で、同時私募のクローズも併せて発表された。
- **OpenAI が「敵対的蒸留」への多層的な対策を公開（11/20）。** 能力の抽出（capability extraction）に対し、モデル学習・セーフガード・検知・執行を組み合わせる方針が示された。

## 企業動向

- **[Anthropic announces closing of initial public offering](https://www.anthropic.com/news/ipo-close)** (Anthropic, 11/20) - Anthropic, PBC が Class A 普通株 1,127,000,000 株（公募価格1株83ドル、引受人の追加株式 147,000,000 株の購入オプション全行使を含む）の IPO クローズと、同時私募のクローズを発表。11/10 のロードショー開始、11/18 の価格決定に続く最終段階。
- **[Combatting adversarial distillation](https://openai.com/index/combatting-adversarial-distillation)** (OpenAI, 11/20) - モデル訓練、セーフガード、検知、執行を重ねた層状のアプローチで、他者モデルから能力を抜き取る敵対的蒸留を防ぐ取り組みを解説。
- **[Can AI help scientists identify promising drug candidates?](https://openai.com/index/introducing-medchembench)** (OpenAI, 11/20) - MedChemBench は、分子構造の解釈、実験的証拠からの推論、創薬初期段階での化合物選択について AI モデルの能力を評価するベンチマーク。
- **[Hebbia sees improvements in financial research with GPT-6 Astra](https://openai.com/business/customer-stories/hebbia)** (OpenAI, 11/20) - Hebbia による GPT-6 Astra の金融リサーチ向け事前評価で、情報源のカバレッジ、引用の関連性、提示品質が改善したとの事例。
- **[How OpenAI's Performance Factory keeps ChatGPT fast](https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast)** (OpenAI, 11/19) - Codex を使ったワークフロー群が ChatGPT の性能問題を発見・修正する仕組み「Performance Factory」の紹介。前回レポートで掲載済みのため続報のみ。
- **[Introducing Gemini 4 Neon](https://deepmind.google/blog/introducing-gemini-4-neon/)** / **[Genie 4 is now available](https://deepmind.google/blog/genie-4-is-now-available/)** (Google DeepMind, 11/18) - RSS に description が無く、タイトルと日付のみ確認できた。内容は推測しない（Gemini 4 Neon は LMArena で3位）。

## 注目論文

arxiv RSS は週末休止（items: 0）のため、export API より 11/19 投稿分から選出。日付は投稿日。

- **[SoK: Assessing the Evolution of LLM Capability in Software Vulnerability Research](https://arxiv.org/abs/2611.26601)** (Lbath, Suri ほか, 11/19) - LLM エージェントが実ソフトウェアの脆弱性の発見・検証・修正で急速に能力を高めているという報告を体系化（SoK）。セキュリティ分野での能力推移を俯瞰できる。
- **[ROGUE-AI: Replication of Agentic Security Events](https://arxiv.org/abs/2611.26553)** (Wang, Alam ほか, 11/19) - ファイル削除や支払いを代行できる LLM エージェントの失敗事例（コーディングエージェントによる製品 DB 削除など）を再現・監査・調査する枠組み。
- **[The Geometry of Lies](https://arxiv.org/abs/2611.26545)** (Al Zami ほか, 11/19) - 正直／欺瞞ロールプレイから得たラベル不要の方向ベクトルで、70B 規模の LLM における嘘検出を試みる。線形プローブが嘘の種類をまたいで転移しにくい問題に取り組む。
- **[A CPU Inside an LLM](https://arxiv.org/abs/2611.26450)** (Sah, 11/19) - 勾配計算なしの閉形式「回路グラフト」により、厳密な回路を事前学習済み重みに組み込み、多桁演算の信頼性を高めるアプローチ。
- **[Backtracking Agent Applications Security Incidents](https://arxiv.org/abs/2611.26525)** (Cai, Kim ほか, 11/19) - エージェントアプリでセキュリティインシデントが起きた際に、侵入の起点（CEP）を遡って特定する手法。

## オープンソース・モデル

- **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)** - Qwen3.8-27B に対する LoRA アダプタで、pi コーディングエージェント向けに強化学習で訓練。思考オフで SWE-bench Pro が 39.2% → 64.7%、Terminal-Bench 2.1 が 39.5% → 55.8% に向上し、最大思考設定のベースモデルに近い精度を約 4.5 分の1のトークンで達成すると記載されている。
- **[internlm/Sage-S2.1-Flash](https://huggingface.co/internlm/Sage-S2.1-Flash)** - 上海 AI 研究所による科学向けマルチモーダルモデル。分子グラフ、結晶構造、タンパク質配列・立体構造など10種類超の科学データを共通表現空間に投影し、ツール利用や検証を繰り返す研究タスクを想定している。
- **[meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6)** - 音声駆動の人物動画生成フレームワークの更新版。口元の自然さと安定性を改善し、10分超の長尺生成での劣化抑制や推論高速化を謳う。
- **[KORMo-VL/KORMo-Web-11B](https://huggingface.co/KORMo-VL/KORMo-Web-11B)** - KAIST の研究室によるスクラッチ学習の韓国語基盤モデルを拡張した、LLM・VLM・GUI エージェントの3能力を持つ 11B モデル。1,000万件超の韓英ウェブ学習サンプルと10万件超の操作軌跡で学習し、Apache-2.0 で公開。
- **[Digitaluz/uzbek-language-corpus](https://huggingface.co/datasets/Digitaluz/uzbek-language-corpus)** - 事前学習向けに整備したウズベク語コーパス。563 万文書・約 60 億語で、ラテン文字とキリル文字の両方を含み、OCR による書籍・新聞・アーカイブなども統合している。

## ベンチマーク・リーダーボード

LMArena Text Overall（公開日 11/19、前回の 11/18 から更新）。

| 順位 | モデル | Rating |
|---|---|---|
| 1 | Gemini 4 Carbon (High) | 1539 |
| 2 | Gemini 4 Argon (High) | 1528 |
| 3 | Gemini 4 Neon (High) | 1524 |
| 4 | Claude Opus 5.5 (High) | 1513 |
| 5 | Claude Fable 5.1 (Max) | 1512 |

上位3枠は Gemini 4 系が占める構図が続く。トップ10には Muse Wonder (Max, Meta) が7位で入っている。

## 所感

IPO の完了で Anthropic は公開企業としての新段階に入った。一方、OpenAI の蒸留対策や arxiv の脆弱性研究・エージェント監査など、能力の保護と安全性（セキュリティ）への関心が高まっている。オープン側では、ベースモデルに RL で適応させたコーディングエージェント用アダプタが、推論トークンを抑えつつ精度を上げる方向を示している。
