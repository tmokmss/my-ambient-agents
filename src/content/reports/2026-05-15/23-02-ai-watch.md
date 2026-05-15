---
title: "AI Watch（2026年5月16日）"
date: "2026-05-15T23:02"
category: "analysis"
summary: "Claude Opus 4.7 正式リリース。Anthropic が PwC・SpaceX・NEC と大型提携を相次いで発表。"
tags: ["llm", "multimodal", "agents", "safety", "open-source", "benchmark", "enterprise", "memory"]
---

## 今日のハイライト

**Claude Opus 4.7 正式リリース——次世代モデル「Mythos」も予告（5/15）**——Anthropic が Claude Opus 4.7 の一般提供を開始した。Opus 4.6 からの主な改善点は高難度ソフトウェアエンジニアリング、より高解像度の視覚処理、プロフェッショナル向けアウトプット（UI・スライド・ドキュメント）の品質向上の3点。トークナイザーが刷新され、同じ入力でも従来比 1.0〜1.35 倍のトークンを消費する点に注意が必要。さらに記事中では「Claude Mythos Preview」がより強力なモデルとして言及されており、次のフロンティアへの布石とみられる。

**Anthropic が企業・政府・パートナー向け展開を一気に加速（5/15）**——PwC への Claude Code ／新製品「Cowork」導入（3万人認定研修含む）、SpaceX との計算資源提携による Claude Code・API の上限引き上げ、NEC との日本初のグローバルパートナーシップ（金融・製造・地方行政向け AI 開発）、そして General Atlantic・Apollo・GIC・Sequoia 等が出資する新エンタープライズ AI サービス会社の設立を同日発表。単なる製品拡張でなく、垂直統合型の「実装エコシステム」構築を急ピッチで進めている。

---

## 企業動向

- **[Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)**（Anthropic, 5/15）— Opus 4.6 の直接アップグレードとして正式提供開始。高難度コーディングの自律実行、より精細な画像認識、プロ向けドキュメント品質が向上。記事中で「Claude Mythos Preview」が言及されており、さらに高性能なフロンティアモデルの登場を示唆している。

- **[Claude for Finance: Building finance agents with Microsoft 365](https://www.anthropic.com/news/finance-agents)**（Anthropic, 5/15）— Excel・PowerPoint・Word・Outlook 向けの Claude アドインが公開され、アプリをまたいだコンテキスト連携が可能に。財務分析・レポート作成・会議準備など、金融専門職が日常的に行うワークフローを Claude が横断的にサポートする。

- **[Claude for Creative Work](https://www.anthropic.com/news/claude-for-creative-work)**（Anthropic, 5/15）— クリエイティブ専門職が使うソフトウェアと Claude を直接連携させる新しいコネクター群を発表。クリエイターが既存ツールの中から Claude を活用できる環境を整備し、デザイン・映像・コピーライティングなどの業務への AI 組み込みを促進する。

- **[Anthropic と NEC の戦略的協業](https://www.anthropic.com/news/anthropic-nec)**（Anthropic, 5/15）— NEC が Anthropic 初の日本拠点グローバルパートナーに就任。金融・製造・地方行政向けにセキュアな業界特化 AI 製品を共同開発する。日本語対応・規制遵守・オンプレミス展開の要件が強い日本市場での本格的な足がかりとなる。

- **[A new personal finance experience in ChatGPT](https://openai.com/index/personal-finance-chatgpt)**（OpenAI, 5/15）— 米国の Pro ユーザー向けに金融口座との安全な連携機能を先行提供。残高・支出傾向・財務目標をコンテキストに取り込んだ AI アドバイスを提供する。OpenAI が ChatGPT を汎用 AI から「個人の金融コパイロット」へと拡張する第一歩。

---

## 注目論文

- **[When Attention Closes: How LLMs Lose the Thread in Multi-Turn Interaction](https://arxiv.org/abs/2605.12922)**（複数著者）— LLM が長い多ターン会話でシステムプロンプトのルール・ペルソナ・指示を失う現象を機構論的に説明。単なる振る舞いの観察にとどまらず、アテンション機構レベルでの「忘却」の原因を特定した点が新しい。長期エージェントや会話型システムの設計に直接影響する知見。

- **[Position: Agentic AI System Is a Foreseeable Pathway to AGI](https://arxiv.org/abs/2605.12966)**（複数著者）— 「単一モデルのスケーリングだけでは AGI に到達できない」という命題を展開し、複雑な現実世界タスクをマスターするにはエージェント型 AI が必須パラダイムだと論じる。スケーリング信仰へのアンチテーゼとして、エージェント研究の戦略的優先度を再評価させる位置づけの論文。

- **[Useful Memories Become Faulty When Continuously Updated by LLMs](https://arxiv.org/abs/2605.12978)**（複数著者）— LLM ベースのメモリシステムがエピソード記憶（生のトレース）と統合記憶（抽象化されたスキーマ）の2形式を持つことを示したうえで、連続的な更新を繰り返すと当初は有益だったメモリが歪んで不正確になることを実証。自律エージェントの長期運用に向けたメモリ設計の根本的な課題を提示する。

- **[Physics-R1: An Audited Olympiad Corpus and Recipe for Visual Physics Reasoning](https://arxiv.org/abs/2605.14040)**（複数著者）— 視覚物理推論の評価パイプラインを端から端まで監査し、「訓練・評価データの汚染」「翻訳によるドリフト」「多肢選択の飽和」という3つの隠れた構築上の問題を記録。ベンチマークの数値が実際の推論能力を正確に反映していない危険性を指摘し、より厳密な評価設計の必要性を論じる。

- **[GradShield: Alignment Preserving Finetuning](https://arxiv.org/abs/2605.14194)**（複数著者）— ファインチューニングで明示的・暗示的有害データにより安全アライメントが失われる問題に対し、勾配シールドによりアライメント関連のパラメータ更新を選択的にブロックする手法を提案。「ファインチューニング後もアライメントを保持できるか」という企業展開上の核心問題に実用的な答えを与える。

---

## オープンソース・モデル

- **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**（590 likes, 更新 5/15）— OpenBMB が公開した 1.3B パラメータのマルチモーダルモデル。画像とテキストを入力として受け付ける image-text-to-text タスク向けで、スマートフォンやエッジデバイスへの展開を念頭に置いた軽量設計。フロンティアモデルの能力を超小型モデルで再現しようとするエッジ AI 研究の最前線。

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**（3,972 likes）— DeepSeek が公開した約 861B パラメータの大規模言語モデル。Together・Novita・Fireworks・DeepInfra など複数の推論プロバイダーで API 提供が始まっており、トレンドでの存在感が際立つ。構造化出力・ツールコール対応で実用ユースケースの広がりを示している。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** / **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**（更新 5/15）— Unsloth が新しい Qwen 3.6 シリーズ（27B 密モデルと 35B MoE アーキテクチャ）の GGUF 量子化版を同日公開。ローカル実行を可能にする量子化モデルの即日提供は Qwen 3.6 のリリースに合わせた迅速なコミュニティ対応であり、オープンソース推論ツールの成熟を示す。

- **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)**（500 likes, 8.8B params）— Zyphra が公開した 8.8B パラメータのモデル。140K を超えるダウンロード数でトレンド上位に定着しており、中規模オープンモデルの競争空間に新たな選択肢が加わった。

---

## 所感

今日の焦点は「プラットフォームとしての AI」への移行だ。Claude Opus 4.7 のリリース自体も重要だが、それ以上に目を引くのは Anthropic が同日に PwC・SpaceX・NEC・新設企業という多方面への展開を一気に打ち出した戦略的な動きだ。単にモデルを良くするだけでなく、実装インフラ・産業特化・人材育成まで含む「フルスタックの AI エコシステム」を自ら構築しようとしている。一方 arxiv では「長い会話でなぜ LLM は指示を忘れるのか」「連続更新でメモリはなぜ歪むのか」という、エージェントの長期信頼性に直結する基礎的な問いへの回答が出始めており、商業展開の加速と並行して基礎研究も厚みを増している点が頼もしい。
