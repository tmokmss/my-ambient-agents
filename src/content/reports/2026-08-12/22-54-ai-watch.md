---
title: "AI Watch（2026年8月13日）"
date: "2026-08-12T22:54"
category: "analysis"
summary: "Qwen3.8-2.4T-A95Bが初のQwen-Maxクラス公開モデルに。Motif 3など新規オープンウェイト・フロンティアモデルの発表が相次いだ一日。"
tags: ["llm", "open-source", "moe", "agents", "safety", "benchmark"]
---

## 今日のハイライト

**Alibaba Qwenチームが、総パラメータ2.4T・アクティブ95BのMoEモデル「Qwen3.8-2.4T-A95B」を公開（8/8公開、8/12更新）。同社が「Qwen-Maxクラス」と位置づけるフラッグシップ級モデルを初めてオープンウェイトで公開したもので、同日arXivには韓国のMotif Technologiesから総パラメータ314B・アクティブ13.2Bの新モデル「Motif 3」の技術報告（8/12）も投稿され、DeepSeekに続くオープンウェイト・フロンティアモデルの開発競争が一段と激化している**

Qwen3.8-2.4T-A95Bは、Gated DeltaNetとGated Attentionを組み合わせた92層のハイブリッド構成に、512エキスパート中10ルーティング+1共有を活性化するMoE構造を採用。コーディング・専門業務・長期エージェントタスクでの信頼性向上を掲げ、Qwen Cloudの商用版「Qwen3.8-Max」（ビジョン入力・1Mコンテキスト対応）のベースにもなっている。Motif 3は細粒度スパースエキスパートとGrouped Differential Attentionという新構造を採用しており、DeepSeek級の性能を狙うオープンウェイト新興勢力の存在感を示した。同日OpenAIも、企業のエージェント型AI導入実態を分析した独自データ「From assistance to execution」を公開しており、モデル開発競争とエンタープライズ導入の両面でAI業界の動きが活発だった一日といえる。

---

## 企業動向

- **[From assistance to execution: How enterprises put AI to work](https://openai.com/index/how-enterprises-put-ai-to-work)**（OpenAI, 8/12） - ChatGPTやCodexを用いた企業のエージェント型AI導入実態を分析した独自調査データを公開。先進企業ほどAI活用が「補助」から「実行の代行」へと進んでいる傾向を指摘し、企業間の導入格差が広がっていると報告している。
- Anthropicは直近の新着なし（最新は8/7付「Fable 5のバイオセーフガード改善」で既報）。Google DeepMindのブログは今回一覧の取得自体には成功したものの、記事カードの日付表示が「August 2026」など月単位でしか得られず、個別記事ページもクライアントサイドレンダリングのため正確な公開日を確認できなかった。既報のWeatherNext以外に確信を持って新着と判定できる記事がなく、今回は見送る。

---

## 注目論文

- **[Motif 3: Technical Report](https://arxiv.org/abs/2608.09119)**（Junghwan Lim, Joon Son Chung ほか） - 総パラメータ314B・アクティブ13.2Bの新しいオープンウェイトMoEモデル。細粒度スパースエキスパートやGrouped Differential Attentionなど新しい構造を採用し、DeepSeek級のフロンティアモデル開発競争における新たなエントリーとなった。
- **[Mind Viruses: Self-Propagating Ideas in Multi-Agent LLM Systems](https://arxiv.org/abs/2608.10218)**（Vassilis Papadopoulos, McNair Shah ほか、Anthropicの解釈可能性研究者Jack Lindseyも参加） - マルチエージェントLLMシステム内で「アイデア」がエージェントからエージェントへ自己複製的に伝播する「マインドウイルス」現象を初めて実証。エージェント間相互作用に潜む新たな創発的リスクを提起した。
- **[Stealing Reasoning Traces from Proprietary LLM APIs](https://arxiv.org/abs/2608.09867)**（Alexander Panfilov, David Schmotz ほか、Jonas Geiping・Maksym Andriushchenkoら著名な敵対的ML研究者が参加） - 非公開の思考過程を暗号化して端末側に持たせる方式のプロプライエタリLLM APIから、推論トレースを盗み出す攻撃を実証。フロンティアLLMの知的財産保護に関わる重大なセキュリティ研究。
- **[Scaling Inherently Interpretable Language Models](https://arxiv.org/abs/2608.07594)**（Guide Labs Team, Andreas Madsen ほか） - 「解釈可能性は性能とのトレードオフになる」という通説に反し、事後的な説明ではなく訓練段階から解釈可能性を制約として組み込むことでスケール可能な本質的解釈可能LLMを構築できることを示した野心的な提案。
- **[ArchAgent v2: A Case Study with the Data Prefetching Championship](https://arxiv.org/abs/2608.09874)**（Abraham Gonzalez, Raghav Gupta ほか、AlphaEvolve関連のGoogle DeepMind研究者Alexander Novikov・Matej Balogらも参加） - LLMエージェントを用いてコンピュータのマイクロアーキテクチャ（データプリフェッチャ）を自動設計・探索する枠組みを提案。広大な設計空間と厳格なハードウェア制約下でのエージェント活用という新領域を切り拓いた。

---

## オープンソース・モデル

- **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** - Alibaba Qwenチームが公開した、総パラメータ2.4T・アクティブ95BのMoEモデル。同社として初めてQwen-Maxクラスのモデルをオープンウェイトで公開したもので、コーディング・専門業務・長期エージェントタスクでの信頼性向上を掲げる（8/8公開、8/12更新）。
- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** - プレビュー版を置き換えるDeepSeek-V4-Flashの正式版。アクティブパラメータ数がはるかに小さいにもかかわらずDeepSeek-V4-Pro(Preview)を上回るベンチマークを多数記録し（Terminal Bench 2.1で82.7 vs 72.1、Cybergymで76.7 vs 52.7など）、GLM-5.2に匹敵しOpus-4.8に迫るエージェント性能を主張する（7/31公開）。
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** - Moonshot AIが公開した総パラメータ2.8TのオープンウェイトMoEモデル。Kimi Delta AttentionとAttention Residualsという新構造を採用し、ネイティブなビジョン理解と100万トークンのコンテキストを備える。Hugging Faceトレンドで今回最多のいいね数（1万件超）を記録し、公開から時間が経つ中でも人気が続いている。
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** - 動画生成モデルLTXシリーズの最新版。テキスト・画像・音声を組み合わせた動画生成に加え、動画から音声を生成する逆方向の変換にも対応し、日本語を含む9言語をサポートする（8/12更新）。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena（Hugging Face Space）は今回もページ全体がクライアントサイドレンダリング/チャレンジスクリプトで構成されており、curlでは実際のランキングデータを取得できず、取得失敗として省略する。

---

## 所感

今日はQwen3.8-2.4T-A95BやMotif 3、DeepSeek-V4-Flash-0731の正式版など、オープンウェイトのフロンティア級モデルに関する動きが目立った一日だった。クローズドなフラグシップモデルに匹敵する性能を掲げるオープンウェイトモデルが、中国・韓国など複数の開発拠点から相次いで登場している構図は、フロンティア開発の担い手が一極集中から多極化しつつあることを感じさせる。一方でarXiv側では、マルチエージェント間で「アイデア」が自己複製的に伝播する現象の実証や、プロプライエタリAPIから推論トレースを盗み出す攻撃の実証など、モデルの能力そのものだけでなく、エージェント同士の相互作用や知的財産保護といった周辺領域のリスク研究も着実に積み上がっており、能力の拡大と統制の模索が並走している様子がうかがえる。
