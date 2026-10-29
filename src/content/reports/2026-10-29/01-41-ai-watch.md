---
title: "AI Watch（2026年10月29日）"
date: "2026-10-29T01:41"
category: "analysis"
summary: "DeepMind が Gemini 4 Carbon を発表、Anthropic は AI for Science を拡大。LMArena 更新、DNA 言語モデル Carbon-X、LFM3-1.7B など"
tags: ["llm", "agents", "gemini", "anthropic", "openai", "open-source", "benchmark"]
---

## 今日のハイライト

- **Google DeepMind が 10/28、次のフロンティアモデル「Gemini 4 Carbon」を発表した。** RSS の説明欄は空で、仕様・性能・提供形態は未確認。10/13 の Gemini 4 Argon に続く Gemini 4 世代の新モデルとみられる。
- **Anthropic が 10/28、AI for Science を財団や研究機関へ拡大すると発表した。** 一覧ページのタイトルのみの確認で、対象や支援内容は未確認。

## 企業動向

Anthropic はタイトル、OpenAI と DeepMind は RSS の説明に基づく。記事本文は取得できない。

- **[Gemini 4 Carbon: Our next frontier model](https://deepmind.google/blog/gemini-4-carbon-our-next-frontier-model/)** (Google DeepMind, 10/28) - 次のフロンティアモデルの発表。説明が空のため詳細は未確認。
- **[AI for Science expands to foundations and research institutions](https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions)** (Anthropic, 10/28) - AI for Science プログラムを財団・研究機関に広げる。
- **[OpenAI and ServiceNow expand partnership across enterprise workflows](https://openai.com/index/openai-servicenow-partnership-expansion)** (OpenAI, 10/28) - ServiceNow が OpenAI のモデルとエージェントを自社ワークフローに組み込み、ServiceNow のワークフローを ChatGPT と Codex に取り込む。10/27 の Oracle 連携と同じく、企業アプリを ChatGPT 側へ寄せる動き。
- **[The future of the firm](https://openai.com/index/the-future-of-the-firm)** (OpenAI, 10/28) - AI が組織図の下・横・間にどう入り込むかを論じる記事。
- **[Legora is building the agentic operating system for legal work](https://openai.com/index/legora)** (OpenAI, 10/28) - 法務向けの Legora が OpenAI のモデル、ChatGPT、Codex で契約分析などを加速する事例。
- Genie 4（10/27）、Oracle 連携（10/27）などは前回までに掲載済みのため省略した。

## 注目論文

arxiv cs.AI / cs.CL の 10/29 発表分から選出。abstract は RSS・API で確認した。

- **[kw-bench: Breaking Frontier Harnesses on Real-World Tasks](https://arxiv.org/abs/2610.36405)** (Salapa, 10/29) - コーディングエージェントのハーネスを知識労働に使う流れの中で、生成型ではなく「調査型」の作業を測るベンチマーク。監査・税務・デューデリジェンス・数字を巡る紛争など、答えが既に存在し探し出す必要がある業務を想定する。
- **[Benchmarking Task Takeover Across Agent Handoffs](https://arxiv.org/abs/2610.36523)** (Li ら, 10/29) - エージェント間で作業を引き継ぐ際の評価 HSC-Bench（1,039 タスク）を提案。引き継ぎ時に残した情報と、受け手が作業を続ける様子の関係を、リポジトリの証拠回収と会話・ツール・ファイル作業の状態継続の2面から測る。
- **[Your Agent Acts Differently When You're Around: How User Presence Changes Agent Behavior in Negotiation](https://arxiv.org/abs/2610.36435)** (Pan ら, 10/29) - ユーザーが対話に参加するか否かだけを変える交渉評価 PRESENT を構築。7ゲーム・8モデル・11.2k 回の実行で、ユーザーの存在が結果と行動の両方を有意に変えると報告する。
- **[Skill Dreaming: Evolving Repository Skills through Pull Request Streams](https://arxiv.org/abs/2610.36188)** (Song ら, 10/29) - リポジトリ固有の「スキル」を、PR の履歴から進化させる手法。コード構造や実装規約が変わっても、スキルライブラリを保守できるようにする狙い。
- **[When Retrieval Is Not Enough: Obsolete Facts in Agent Memory](https://arxiv.org/abs/2610.36308)** (Poikarayil ら, 10/29) - メモリ系ベンチマークが検索と回答生成を1つのスコアにまとめてしまう問題を指摘し、更新の見落としと更新の不使用を切り分けて、古くなった事実の扱いを調べる。

## オープンソース・モデル

DeepSeek-V4.1-Flash-1017、Flint、Spark-X2.6-4B、MiniMax-M3.1-Flash、Nanbeige4.3-33B、Unlimited-OCR-2 は掲載済みのため省略した。

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)** (公開5日) - Liquid AI の LFM3 ファミリーの1.73B テキストモデルで、ローカルエージェント向け。ゲート付き短畳み込み・スライディング窓・グローバルアテンションの混成構成で、文脈は256K。4bit で約1GBのため、スマホやノートPCで動く。ツール呼び出しや構造化出力、ドメイン特化の微調整が用途で、コーディングや複雑な多段推論は非推奨と明記されている。
- **[HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X)** (公開7日) - DNA 配列と自然言語を1本のトークン列で扱う14.8B のデコーダ型モデル。Qwen3-14B から出発し、チャット内で生の DNA を渡すと、変異の良性・病原性の予測、遺伝子制御領域の特定、生物群の分類、次の塩基の予測を英語で説明付きで返す。5つの DNA ベンチマークの平均は 66.7%（思考なし）で、ベースの Qwen3-14B を27ポイント上回るとされる（自社報告）。
- **[tencent/Hy-SimulMT-30B-A3B-FP8](https://huggingface.co/tencent/Hy-SimulMT-30B-A3B-FP8)** (公開6日) - Tencent Hunyuan の中英双方向の同時通訳モデル。音声を受け取りながら翻訳テキストと音声を出し、リアルタイムのボイスクローンで話者の声質を保つ。RealSI の長尺音声評価で StreamLAAL 約3秒と、比較対象で最小とされる（自社報告）。音声出力には別途 TTS サービスが必要。
- **[openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0)** (公開7日) - MiniCPM ファミリー初の OCR 特化モデル（1.3B）。文字・表・数式・図表・印章と情報抽出を扱い、Real5-OmniDocBench で 93.68 を報告する。DSpark デコード高速化で処理効率が55%向上し、スループットは PaddleOCR-VL-1.6 の約1.49倍（自社報告）。vLLM、SGLang、llama.cpp、Ollama に対応。

## ベンチマーク・リーダーボード

LMArena Text Overall が 10/22 公開版に更新された（前回掲載は 10/20）。

| 順位 | モデル | レーティング |
|---|---|---|
| 1 | Gemini 4 Argon (High) | 1526 |
| 2 | Claude Opus 5.5 (High) | 1516 |
| 3 | Claude Fable 5.1 (Max) | 1513 |
| 4 | Claude Opus 5 (Max) | 1508 |
| 5 | Claude Opus 5 (High) | 1503 |

6位以下は Claude Opus 4.6 (High) 1501、Muse Wonder (Max) 1501、Gemini 3.8 Flash (High) 1498 の順。Gemini 4 Carbon はまだ反映されていない。

## 所感

DeepMind は Gemini 4 Argon から約2週間で Carbon を出し、LMArena の首位も Gemini 4 世代が握っている。Carbon の評価が出るかが次の焦点になる。論文ではエージェントの引き継ぎ、ユーザーの在・不在による挙動差、古いメモリの扱いなど、運用で効く評価軸が続いた。オープンモデルは LFM3-1.7B のような端末内エージェントと、Carbon-X や Hy-SimulMT のような分野特化型に分かれてきている。
