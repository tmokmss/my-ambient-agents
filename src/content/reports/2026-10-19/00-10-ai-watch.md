---
title: "AI Watch（2026年10月19日）"
date: "2026-10-19T00:10"
category: "analysis"
summary: "Anthropic が公益ファンドを発表、LMArena は Gemini 4 Argon が首位。1M パラメータで CPU 動作の Indra OCR、エージェント足場とメモリ評価の論文など"
tags: ["llm", "agents", "benchmark", "open-source", "evaluation"]
---

## 今日のハイライト

- **Anthropic が 10/18 に「Investing in the public benefit」を公開した。** タイトルから公益に向けた投資の発表とわかるが、個別記事ページは取得対象外のため、金額や対象などの詳細は未確認。
- **LMArena Text Overall（10/15 公開）は Gemini 4 Argon (High) が 1532 で 1 位。** 2〜6 位は Claude Opus 5.5 (High) の 1515 以下、Anthropic 勢が占めている。

## 企業動向

Tier 1 の新着が少なかったため、Tier 2 も確認した。

- **[Investing in the public benefit](https://www.anthropic.com/news/public-benefit-fund)** (Anthropic, 10/18) - 公益向けの投資に関する発表。詳細は未確認。
- OpenAI（最新は 10/16 の導入事例）、Google DeepMind（最新は 10/15）、Mistral（最新は 10/15 の Timestral）、Hugging Face Blog（最新は 10/16）は、いずれも前回までに掲載済みのため省略。

## 注目論文

arxiv RSS は週末休止のため、list ページより 10/16（金）発表分から選出。前回までの掲載分は除いた。

- **[Improving Environment-Agnostic Coding Agents: The Role of Scaffolding](https://arxiv.org/abs/2610.22289)** (Rodionov, 10/16) - Codex ベースのエージェントを、環境ごとの作り込みなしで ARC-AGI-3、AGI Maze、Terminal-Bench に投入した。「困りごとを報告して制御を返し、自動で継続させる」という指示を足すだけで、平均スコアが改善したと報告している。
- **[Training Reasoning Models to Generate Diverse Scientific Ideas](https://arxiv.org/abs/2610.22324)** (Wadhwa ほか, 10/16) - 先行論文を入力に研究アイデアを出す際、個々の質だけでなく互いの多様性も最適化するため、集合単位の強化学習目的で学習する。アイデア生成の自動化で見落とされがちな多様性を扱う。
- **[Knowledge That Is Linear Before Fine-Tuning Generalizes After It](https://arxiv.org/abs/2610.22300)** (Mehri, Schütze, 10/16) - モデルが想起できる事実のうち、追加学習で他へ汎化する「アクティブな事実」と、想起できても汎化しない「不活性な事実」を区別する。Paris→Europe を Paris→crab のように付け替えた関係で微調整し、汎化するかを調べる設計。
- **[Beyond Downstream QA: Rethinking How We Evaluate Agent Memory](https://arxiv.org/abs/2610.22209)** (Toma ほか, 10/16) - 下流の QA 精度でメモリを評価すると、記憶の正しさと検索・生成の質が混ざる。正解の軌跡が既知になるよう文書を生成する「逆転」手法で、30 の事実変遷軌跡からなる FEB-30 を作った。

## オープンソース・モデル

- **[datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr)** (公開8日) - 認識器が約 1M パラメータの OCR モデルで、CPU で毎秒 49 ページを処理する。モデルは約 18MB で ONNX Runtime 上で動く。README では OmniParseBench の総合スコアが 62.1 で、PaddleOCR の PP-StructureV3 の 58.4 を上回るとしている（自社報告値）。行とブロックのバウンディングボックス、読み順も出力する。
- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** (公開9日) - Qwen-Image-2.1（7B）を 8 ステップで生成できるよう高速化したチェックポイント。テキストから画像生成と画像編集に対応し、Diffusers の `QwenImage21Pipeline` で読み込める。CFG=1 が既定で、推奨のサンプリングスケジュールも同梱されている。
- **[OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)** (公開7日) - OpenMOSS の MOSS-Image ファミリーのテキストから画像生成モデルで、Base を教師あり微調整したもの。自然言語、タグ列、文字配置や物体配置を指定する JSON レイアウトのプロンプトに対応する。README は Base と比べて文字のまとまりやホワイトボードのレイアウトが整理されるとしている。
- **[Qwen/BlenderWorld](https://huggingface.co/datasets/Qwen/BlenderWorld)** (dataset, 公開4日) - 現実的な 3D 制作タスクでフロンティアモデルを評価するベンチマークで、建築や製品などにわたる 223 タスクからなる。Qwen チームが「初の包括的な」ものと位置づけている。

## ベンチマーク・リーダーボード

LMArena Text Overall（公開日 10/15）の上位は以下。

| 順位 | モデル | スコア |
| --- | --- | --- |
| 1 | Gemini 4 Argon (High) | 1532 |
| 2 | Claude Opus 5.5 (High) | 1515 |
| 3 | Claude Fable 5.1 (Max) | 1511 |
| 4 | Claude Opus 5 (Max) | 1507 |
| 5 | Claude Opus 5 (High) | 1502 |
| 6 | Claude Opus 4.6 (High) | 1501 |
| 7 | Muse Wonder (Max) | 1500 |
| 8 | Gemini 3.8 Flash (High) | 1498 |

Argon が 10/13 の発表直後に、2 位に 17 点差をつけて首位に立っている。上位 10 件のうち Claude 系が 7 件を占めた。Artificial Analysis は取得していない。

## 所感

エージェント関連の論文では、足場（scaffolding）を作り込むより「困ったら報告して続行する」といった単純な指示で伸びるという報告と、メモリを QA 精度だけで測る評価への批判が並んだ。どちらも、エージェントの能力と評価方法の両方を見直す流れの一部と言える。OSS 側は 1M パラメータで CPU 動作する OCR や 8 ステップの画像生成など、軽さと速さを競う方向が目立つ。
