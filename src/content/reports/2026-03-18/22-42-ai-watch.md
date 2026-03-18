---
title: "AI Watch（2026年3月19日）"
date: "2026-03-18T22:42"
category: "analysis"
summary: "Aleph AlphaがHATアーキテクチャでトークナイザーフリーLLMファミリー（最大70B）を公開。MiroThinker-H1はリサーチエージェントのオープンソースSOTA"
tags: ["llm", "open-source", "agents", "benchmark", "multimodal", "safety", "tokenization", "speech"]
---

## 今日のハイライト

**Aleph Alpha がトークナイザーフリーの LLM ファミリーを公開**（3/18 arxiv）。固定語彙に縛られた従来のトークナイザーを廃し、バイト列を直接処理する HAT（Hierarchical Autoregressive Transformer）アーキテクチャを採用。Llama 3.1 の 8B・70B を HAT 形式に変換する手法も提示しており、語彙拡張・多言語適応・ノイズ耐性の問題を根本から解決しうる設計として注目される。

**MiroThinker-H1 がオープンソースでリサーチエージェント SOTA を達成**（3/18 arxiv）。長期・複雑なリサーチタスク向けに設計されたエージェントで、推論プロセスにローカル（ステップレベル）とグローバル（軌跡レベル）の検証を組み込むことで高い信頼性を実現。MiroThinker-1.7 と mini も同時オープンソース公開され、研究コミュニティへの波及が期待される。

---

## 企業動向

- **[OpenAI Japan announces Japan Teen Safety Blueprint](https://openai.com/index/japan-teen-safety-blueprint)** (OpenAI, 3/17) - OpenAI Japan が未成年ユーザー向けの安全設計指針「Japan Teen Safety Blueprint」を発表。年齢確認の強化・保護者管理機能・ウェルビーイング保護手段を盛り込んだ包括的なフレームワーク。生成 AI の青少年利用が拡大するなか、日本市場向けに特化した安全施策を先行公開した意義は大きい。

※ Anthropic・Google DeepMind からは過去 48 時間以内の新規投稿なし（DeepMind ブログはアクセス取得失敗）。

---

## 注目論文

- **[A Family of LLMs Liberated from Static Vocabularies](https://arxiv.org/abs/2603.15953)**（Aleph Alpha ら, cs.CL, 3/18）- HAT アーキテクチャにより最大 70B のトークナイザーフリー LLM ファミリーを公開。エンコーダがバイト列を単語埋め込みに集約し、デコーダが再びバイト列へ変換するバイト・ワード階層構造を採用。Llama 3.1 8B/70B の backbone を再利用しつつ encoder/decoder のみ学習させる転用手法も提示。語彙固定の制約なく新言語・新ドメインへ適応できる点でスケーリングの方向性に一石を投じる。

- **[MiroThinker-1.7 & H1: Towards Heavy-Duty Research Agents via Verification](https://arxiv.org/abs/2603.15726)**（MiroMind Team, cs.CL, 3/18）- 複雑な長期リサーチタスク向けに設計されたエージェントフレームワーク。MiroThinker-1.7 はエージェント中間学習段階で構造化プランニング・文脈推論・ツール操作を強化し、H1 はさらにステップ単位の検証と軌跡レベルの審査を追加。オープン Web リサーチ・科学推論・金融分析で SOTA を達成し、MiroThinker-1.7 と mini をオープンソース公開。

- **[MedArena: Comparing LLMs for Medicine-in-the-Wild Clinician Preferences](https://arxiv.org/abs/2603.15677)**（Wu ら, cs.CL, 3/18）- 臨床医が実際の業務クエリを入力して LLM を対戦評価するインタラクティブプラットフォーム。1,571 件の選好データを 12 モデルで収集した結果、Gemini 2.0 Flash Thinking・Gemini 2.5 Pro・GPT-4o がトップ 3 に。医療クエリの約 2/3 は事実確認より治療選択・文書化・患者コミュニケーションであり、臨床家は「深みと詳細さ」「わかりやすさ」を重視することが明らかに。既存の医療ベンチマークと実臨床ニーズのギャップを定量化した点で重要。

- **[MoLoRA: Composable Specialization via Per-Token Adapter Routing](https://arxiv.org/abs/2603.15965)**（Shah & Wagle, cs.CL, 3/18）- シーケンス単位ではなくトークン単位でアダプタを切り替えることで、異なる専門領域を動的に合成する LoRA 拡張「MoLoRA」を提案。1 シーケンス内でテキストと画像など異なる性質のトークンに最適なアダプタを割り当てられ、推論コストは O(N) と O(K×N) の差になることを理論証明。Qwen3-1.7B に MoLoRA を適用すると Qwen3-8B を 4 つの推論ベンチマークで上回ることを実証し、「専門化がスケールに勝る」という主張を裏付ける。

- **[SRLM: Recursive Language Models Meet Uncertainty](https://arxiv.org/abs/2603.15653)**（Alizadeh ら, cs.CL, 3/18）- 長文コンテキスト処理を再帰的なサブコールで行う RLM（Recursive Language Model）に、自己整合性・推論長・口頭確信度の 3 つの不確実性シグナルを組み合わせた自己反省を追加。同一タイムバジェットで RLM 比最大 22% の改善を達成し、再帰自体よりもプログラム選択が性能の主因であることを示す。長文処理の精度と効率を両立する実用的なフレームワーク。

---

## オープンソース・モデル

- **[zai-org/GLM-OCR](https://huggingface.co/zai-org/GLM-OCR)** (1,351 いいね) - ZhipuAI（Z.ai）が公開した OCR 特化マルチモーダルモデル。画像からテキストへの変換タスクに特化し、推論プロバイダー連携でAPIからも即利用可能。HuggingFace トレンド全体でトップクラスの人気を誇り、高精度 OCR への需要の高さとオープンウェイト供給の手薄さを同時に示す。

- **[Lightricks/LTX-2.3](https://huggingface.co/Lightricks/LTX-2.3)** (671 いいね) - Lightricks が公開した動画生成モデルの最新版 LTX 2.3。テキスト・画像からの高品質動画生成に対応し、HuggingFace Space でも動作中。先週から続く Wan2.2 系の量子化最適化モデルとともに、オープン動画生成の品質競争が加速していることを示す。

- **[HauhauCS/Qwen3.5-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** (572 いいね) - Qwen3.5-35B をベースに制限を取り除いたアンセンサード版（画像テキスト入力対応）。111K ダウンロードを記録しており、コミュニティ側での制約緩和需要が依然として高いことを示す。同作者による 9B 版もトレンド入りしており、Qwen3.5 ファミリーのアンセンサード派生が量産されている状況。

---

## 所感

本日の最大トピックはアーキテクチャ面での革新が目立ったことだ。Aleph Alpha のトークナイザーフリー LLM はトークン化という LLM の「前提条件」そのものを問い直す提案であり、多言語・多ドメイン適応の根本課題に切り込む試みとして興味深い。一方 MoLoRA は「1.7B でも専門化すれば 8B に勝てる」という実証で、スケーリングとアーキテクチャ工夫のどちらに投資するかという問いを改めて提起した。リサーチエージェント MiroThinker-H1 のオープンソース公開も注目で、「検証を推論プロセスに組み込む」設計思想が自律エージェントの信頼性向上における一つの解法として浮上しつつある。
