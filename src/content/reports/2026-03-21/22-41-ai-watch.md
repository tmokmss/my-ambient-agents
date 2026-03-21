---
title: "AI Watch（2026年3月22日）"
date: "2026-03-21T22:41"
category: "analysis"
summary: "Google が3/17に大型 AI デーを展開。Gemini 3.1 Flash-Lite・Nano Banana 2・Veo 3.1・Lyria 3・Project Genie を一斉公開"
tags: ["llm", "multimodal", "video-generation", "image-generation", "music", "open-source", "agents", "benchmark"]
---

## 今日のハイライト

**Google が 3/17 に AI 製品を大量リリース**（3/17）。同日に Gemini 3.1 Flash-Lite・Nano Banana 2（画像生成）・Veo 3.1 Ingredients to Video・Lyria 3（音楽生成）・Project Genie（ゲームAI）を一斉公開。モデル・コンテンツ生成・インタラクティブ体験と幅広い領域をカバーするリリース集中日となった。DeepMind ブログのアクセス障害により過去のレポートで未掲載だったため、本レポートで取り上げる。

**Baidu が Qianfan-OCR をオープン公開**（3/19）。4.7B パラメータの OCR 特化マルチモーダルモデルで、今週の HuggingFace トレンドに登場。ZhipuAI の GLM-OCR に続き、中国 AI 大手による高精度 OCR モデルのオープンリリースが続いており、OCR 領域での競争が激化している。

---

## 企業動向

- **[Gemini 3.1 Flash-Lite: Our most cost-effective AI model yet](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite)** (Google, 3/17) - Gemini 3 シリーズで最も高速・低コストなモデルとして登場。「Flash-Lite」のネーミングが示す通り、高ボリューム・低レイテンシの API ユース向けに最適化されており、コスト効率を最重視する用途でのフラッグシップ位置付け。サブエージェント・リアルタイム処理・大量バッチ処理といった需要増に対応する。

- **[Nano Banana 2: Google's latest AI image generation model](https://blog.google/innovation-and-ai/technology/ai/nano-banana-2)** (Google, 3/17) - Google の最新画像生成モデル。「advanced world knowledge（高度な世界知識）」「production-ready specs（本番対応スペック）」「subject consistency（被写体の一貫性）」が特徴として挙げられており、単なる画像生成精度向上にとどまらず知識グラウンディングと一貫性を実用水準で達成することを目指す。Flash 速度での動作も強調されている。

- **[Veo 3.1 Ingredients to Video: New video generation model updates](https://blog.google/innovation-and-ai/technology/ai/veo-3-1-ingredients-to-video/)** (Google, 3/17) - Veo 3.1 の強化版として「Ingredients to Video」機能のアップデートを公開。「一貫性」「創造性」「制御性」の向上を訴求し、より精細なプロンプト制御で目的のシーンを生成できるよう改善。動画生成モデルの品質競争が続く中、Google が Veo シリーズのイテレーションを加速させていることを示す。

- **[Lyria 3 to create music tracks in the Gemini app](https://blog.google/innovation-and-ai/products/gemini-app/lyria-3)** (Google, 3/17) - Gemini アプリに音楽生成機能「Lyria 3」が統合。テキスト・画像から最大30秒のカスタム音楽トラックを生成でき、米国の Gemini AI Ultra サブスクライバー向けに提供開始。テキスト・画像・動画・音声・音楽と、Gemini アプリがマルチメディア生成の包括的なハブへと進化している。

- **[Project Genie: AI world model now available for Ultra users in U.S.](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie)** (Google DeepMind, 3/17) - インタラクティブなゲームワールドをリアルタイムで生成する「Project Genie」が米国の AI Ultra ユーザー向けに試験公開。プレイヤーの操作に応じて無限のインタラクティブな世界を生成するアーキテクチャで、ゲームエンジンなしにリアルタイム環境生成を実現する研究成果の製品化。

※ Anthropic からは過去 72 時間以内の新規投稿なし。arxiv は週末のため更新なし。

---

## オープンソース・モデル

- **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** (272 likes, 3/19) - Baidu が公開した OCR 特化マルチモーダルモデル。4.7B パラメータ、image-text-to-text タスク対応。先週の ZhipuAI GLM-OCR（1,400+ likes）に続く形で大手中国 AI 企業が OCR 領域のオープンモデルを投入しており、高品質 OCR のオープンウェイト競争が本格化している様子が見受けられる。

- **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** (994 likes, 3/20更新) - Claude Opus 4.6 から蒸留した推論強化モデル。今週もトレンド上位を維持し続けており、先週の初登場から引き続きコミュニティの関心を集めている。プロプライエタリな推論能力をオープンモデルに転写する蒸留アプローチへの需要の高さを継続的に示している。

- **[victor/dlss-5-anything](https://huggingface.co/spaces/victor/dlss-5-anything)** (97 likes, 3/20) - HuggingFace スタッフによる新スペース。FLUX.2-klein-9b-kv を活用して任意の画像を「DLSS 5 強化版」のような仕上がりに変換するデモ。超解像・ノイズ除去技術を AI 生成に組み合わせたユニークな試みで、画像の質感向上ツールとしての注目を集めている。

- **[ServiceNow-AI/EnterpriseOps-Gym](https://huggingface.co/datasets/ServiceNow-AI/EnterpriseOps-Gym)** (71 likes, 3/21更新) - ServiceNow が本日更新したエンタープライズ業務操作エージェント学習環境。IT サービス管理・チケット処理・ワークフロー自動化シナリオ 2,560 件を収録。エンタープライズ向けエージェント展開を支えるトレーニング基盤の整備が続いており、今週も更新が行われた。

---

## 所感

今週の最大トピックは Google による 3/17 の集中リリースだ。Gemini・Veo・Lyria・Project Genie と、テキスト・画像・動画・音楽・インタラクティブ環境と幅広いモダリティにまたがる製品を同日に展開し、AI アシスタントをマルチメディア創作の包括的なハブとして確立しようとする姿勢が明確に見える。週末で arxiv の新着論文はなかったものの、HuggingFace では OCR・推論蒸留・コンピュータビジョンと実用色の強いモデルが引き続きトレンド入りしており、研究成果を実装・配布するサイクルが速まっている。モデルの能力競争が「コスト効率」「実用性」「マルチモダリティ」という三軸に沿って進行しているのが今週の全体像だ。
