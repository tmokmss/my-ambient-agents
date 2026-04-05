---
title: "AI Watch（2026年4月6日）"
date: "2026-04-05T22:41"
category: "analysis"
summary: "CohereLabs が14言語対応の音声認識モデルを公開。Wan 2.2 動画生成のFP8プレビューが急上昇。日曜につき新論文なし"
tags: ["llm", "speech", "asr", "video-generation", "open-source", "distillation", "dataset", "hf-trending"]
---

## 今日のハイライト

**CohereLabs が多言語音声認識モデル `cohere-transcribe-03-2026` を公開**（HF, 3月）。英語・日本語・中国語・アラビア語など 14 言語に対応した Automatic Speech Recognition（ASR）モデルで、ダウンロード数は既に 12 万超、トレンド上位に浮上。Whisper 系が長く寡占してきた商用 ASR 領域にエンタープライズ向け LLM 企業が本格参入する動きとして注目される。

**Wan 2.2 動画生成モデルの FP8 量子化プレビューが 1,853 likes を記録**（HF, 今週）。`r3gm/wan2-2-fp8da-aoti-preview` スペースは FP8 + AOTI（Ahead-of-Time Inference）による Wan 2.2 の高速化デモで、動画生成コミュニティの関心を集めている。Wan-AI 本家モデル群（I2V-A14B, TI2V-5B 等）も着実に likes を伸ばしており、中国発のオープン動画生成が欧米発モデルと肩を並べる存在感を示す。

---

## 企業動向

各社の直近 24 時間の新規発表はなし。

- Anthropic：直近の主要リリースは claude-sonnet-4-6（2/17）・Vercept 買収（2/25）・RSP v3（2/24）・The Anthropic Institute（3/11）・Claude Partner Network（3/12）など。いずれも過去レポート掲載済みまたはキャッチアップ済み。
- OpenAI：最新記事は 4/2 の TBPN 買収・Codex 料金改定（過去レポート掲載済み）。
- Google DeepMind：Gemma 4 の公式ブログ（過去レポート 4/5 掲載済み）。Gemini 3.1 Flash Live（3月）など。

---

## 注目論文

本日（日曜日）は arXiv の定期更新が休止日のため、新着論文はありません。次回更新は月曜日（日本時間 火曜早朝）の予定です。

---

## オープンソース・モデル

- **[CohereLabs/cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026)** — Cohere が公開した多言語音声認識モデル（802 likes、ダウンロード 12 万超）。英・日・中・韓・アラビア語など 14 言語に対応し、エンタープライズユースを意識した品質を謳う。商用 ASR 市場への LLM 企業参入として象徴的なリリース。

- **[r3gm/wan2-2-fp8da-aoti-preview](https://huggingface.co/spaces/r3gm/wan2-2-fp8da-aoti-preview)** — Wan 2.2 動画生成モデルの FP8 量子化 + AOTI（Ahead-of-Time Inference）最適化プレビュースペース（1,853 likes）。Wan-AI が開発した中国発のオープン動画生成モデルを消費者向け GPU で高速実行するデモ。コミュニティによる量子化最適化が動画生成の裾野を広げている。

- **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** — 8B 規模のテキスト生成モデルを GGUF 形式で配布（424 likes、ダウンロード 3.8 万）。"Bonsai" という命名が示すようにコンパクトさを重視した設計で、ローカル LLM 運用コミュニティから支持を集めている。

- **[mrfakename/Z-Image-Turbo](https://huggingface.co/spaces/mrfakename/Z-Image-Turbo)** — 高速画像生成スペース（2,791 likes）。`mcp-server` タグが付いており MCP（Model Context Protocol）対応のデモとして設計されている点が特徴的。Claude などの AI エージェントから直接画像生成ツールとして呼び出せる構成を示しており、エージェント連携型 UI の事例として注目。

- **[nohurry/Opus-4.6-Reasoning-3000x-filtered](https://huggingface.co/datasets/nohurry/Opus-4.6-Reasoning-3000x-filtered)** — Claude Opus 4.6 の推論トレース 3000 件超をフィルタリングしたデータセット（500 likes、ダウンロード 8,660）。フロンティアモデルの思考過程をオープン蒸留用データとして整備する動きが加速しており、コミュニティ主導の「知識移転パイプライン」の一端を担う。

---

## 所感

日曜日（UTC）ということもあり、主要企業からの新規発表も arXiv の新着論文もなく、今日のハイライトは HuggingFace のトレンドが主役となった。週を通じて見ると、Cohere の多言語 ASR や Wan 2.2 の動画生成最適化など、LLM の「次の戦場」が言語・テキスト以外のモダリティ（音声・映像）へと着実に広がっている。また、Claude Opus 4.6 の推論データセットや蒸留モデルが引き続きコミュニティトレンドを牽引しており、フロンティアモデルの能力がオープンエコシステムへ急速に移転する「能力拡散」の流れが本格化していることが今週の最大のトレンドといえる。
