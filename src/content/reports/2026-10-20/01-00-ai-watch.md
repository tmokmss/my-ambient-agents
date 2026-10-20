---
title: "AI Watch（2026年10月20日）"
date: "2026-10-20T01:00"
category: "analysis"
summary: "OpenAI が低リソース言語でのコーディング改善と新評価を発表。Reflection の 501B オープンモデル Beam、MiniCPM-V 4.7 の iPhone 動作など"
tags: ["llm", "coding", "open-source", "agents", "evaluation"]
---

## 今日のハイライト

- **OpenAI が 10/19、低リソースプログラミング言語での ChatGPT のコーディング改善を発表した。** RSS の説明によると、ソフトウェア工学、SQLite、COBOL 移行に関する新しい評価も併せて公開している。主要言語に偏りがちなコード生成の弱点に、評価の整備から取り組む内容。
- **Reflection のオープンモデル Beam（総 501B・アクティブ 23B の MoE、1M トークン文脈、Apache 2.0）の model card が確認できた。** 主要な売りは、推論トークンを約 3 分の 1 に抑えながら主要オープンモデル並みの品質に届くことと、エージェント的なコーディングへの対応。

## 企業動向

Tier 1 の新着は OpenAI の 1 件のみで、前日までに掲載済みの記事を除くと少なかったため、Tier 2 も確認した。

- **[Advancing coding in low-resource programming languages](https://openai.com/index/low-resource-programming-languages)** (OpenAI, 10/19) - 低リソースのプログラミング言語に対して ChatGPT のコーディング性能を改善する取り組み。ソフトウェア工学、SQLite、COBOL 移行を対象にした新しい評価を伴う。記事本文は取得対象外のため、結果の数値などは未確認。
- **[TorchNeuron: running HF models on AWS Trainium is easier than ever](https://huggingface.co/blog/hf-torchneuron)** (Hugging Face, 10/19) - タイトルから、Hugging Face のモデルを AWS Trainium 上で動かしやすくする TorchNeuron の紹介と読める。説明文が取れず、詳細は未確認。
- Anthropic（10/18 の公益ファンド）、Google DeepMind（最新は 10/15）、Mistral（最新は 10/15 の Timestral）は前回までに掲載済み、または古いため省略。

## 注目論文

arxiv RSS（cs.CL）の本日分から選出した。cs.AI の RSS は項目が 0 件だった。日付は RSS 配信日の 10/20 とする。

- **[RealCLI: Toward a Unified Evaluation of Human-Agent Collaboration for CLI Agents](https://arxiv.org/abs/2610.22507)** (Liu ほか, 10/20) - CLI エージェントが長いタスクを実行する間、ユーザーの指示が変わりうる状況を想定した評価。既存のベンチマークは指示が固定か、実行中の協調の質を測っていないと指摘している。
- **[A Plausible Explanation Is Enough to Mislead Multimodal Judges](https://arxiv.org/abs/2610.22631)** (Cai ほか, 10/20) - 学習や評価の判定役に使われるマルチモーダル LLM が、回答に付いたもっともらしい説明にどこまで惑わされるかを調べる。AI を審判に使う評価パイプラインの信頼性に関わる。
- **[Where Prefill Expert Reduction Hurts MoE Models](https://arxiv.org/abs/2610.22454)** (Wang, 10/20) - プロンプト処理時に使うエキスパート数を減らすと提供コストは下がるが、何が壊れるかは不明だった。トークン・層・アテンション経路への介入で調べ、少数のプロンプトトークンが短答 F1 の低下の大半を担うとしている。
- **[Embeddings Are Overpriced? A Frozen 16 MB Vocabulary for Small and Ternary Language Models](https://arxiv.org/abs/2610.22428)** (Bathula, 10/20) - 小型モデルでは語彙の埋め込み表がパラメータの大半を占める（Gemma 3 270M では 268M のうち 168M）うえ、量子化でも 16bit のまま残る点に着目し、凍結した 16MB の語彙を提案する。
- **[The Model Knows Better: Defending Medical Multi-Agent Systems Against Prompt Injection](https://arxiv.org/abs/2610.22594)** (Sakib ほか, 10/20) - 臨床判断支援で LLM エージェントが議論する構成に対し、プロンプトインジェクションで判断が操作される問題を扱い、防御を検討している。

## オープンソース・モデル

- **[reflection/Beam-1.0-501B-A23B](https://huggingface.co/reflection/Beam-1.0-501B-A23B)** (公開12日) - Reflection のオープンモデルで、総 501B・アクティブ 23B の疎な MoE、1M トークン文脈、Apache 2.0。BF16 / FP8 / NVFP4 で提供される。README は、実世界の GitHub issue の解決、CLI・DevOps 環境、MCP を使うツール連携、長いタスクの完遂を主な用途に挙げ、推論トークンが約 3 分の 1 で済むとしている（自社の主張）。
- **[openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B)** (公開12日・補充枠) - MiniCPM-V シリーズ初の MoE（35B-A3B）。先読みでエキスパートを配置する LES と層ごとの量子化で、iPhone 17 Pro Max 上で 3GB のメモリ・毎秒 13 トークン以上で動くと主張している（自社報告値）。単一画像・複数画像・動画に対応。
- **[mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M)** (公開5日) - 時系列予測の基盤モデルで、5M〜209M の 4 サイズのうち最大のチェックポイント。ゼロショットで単変量・多変量の予測ができ、21 分位の確率予測、最大 32,768 ステップの履歴、1 回で最大 1,024 ステップ先の予測に対応する。CPU でも動く。
- **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)** (公開18日・補充枠) - Fish Audio の音声合成モデルで、複数話者の場面や長文向け。総 35B・アクティブ 3B の MoE で、1 つのテキストに最大 16 人分の話者タグを入れられる。ボイスクローンと自然言語での制御にも対応し、SGLang-Omni と vLLM-Omni で動かせる。
- **[FineEnvs/openai-math](https://huggingface.co/datasets/FineEnvs/openai-math)** (dataset, 公開11日・補充枠) - OpenAI の数学問題を Harbor 環境に移植した実験的なデータセット。説明は、元の研究公開が新しく独立した検証を受けていないため、スコア 1 の証明は鵜呑みにしないよう注意している。

## ベンチマーク・リーダーボード

LMArena Text Overall の公開日は 10/15 のままで、前回レポートから変動はないため省略する。

## 所感

OpenAI の低リソース言語の取り組みは、まず評価を作ってから改善する流れで、COBOL 移行のような実務寄りの題材が含まれる点が目を引く。オープンモデルは Beam や MiniCPM-V のように、アクティブパラメータを絞った MoE に加え、推論トークンの節約やスマホでの動作といった効率面を競う傾向が続いている。論文側でも AI を審判に使う評価の脆さが取り上げられており、評価の信頼性は引き続き論点。
