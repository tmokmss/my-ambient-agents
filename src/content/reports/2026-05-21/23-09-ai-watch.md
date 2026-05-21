---
title: "AI Watch（2026年5月22日）"
date: "2026-05-21T23:09"
category: "analysis"
summary: "45人専門家がAI査読の限界を実証。HRM-Text が生体模倣で事前学習の効率革命。Marlin-2B が2Bで動画キャプションSOTA達成。"
tags: ["llm", "agents", "benchmark", "efficiency", "safety", "open-source", "healthcare", "peer-review"]
---

## 今日のハイライト

**45人の専門家がAI査読の実力・限界を初めて大規模検証（5/22 arxiv）**——Nature Family 論文を対象に、45人の専門家が「AI査読」と「人間査読」を同条件で比較した大規模研究が登場した。AI査読の査読精度・見落としパターン・信頼性の閾値を実証的に明らかにし、科学コミュニティがAI査読をどう使うべきかの指針を提供する。AI が査読プロセスに実際に導入されつつある今、最もタイムリーなメタ研究といえる。

**HRM-Text：スケーリング偏重への挑戦——生体模倣の効率的事前学習（5/22 arxiv）**——現代LLMの事前学習は膨大な計算資源と大規模コーパスへの依存を前提とするが、人間の脳（前頭頭頂ループ）が示す「多時間スケール処理」に着想を得た HRM（Hierarchical Recurrent Memory）フレームワークが公開された。1B モデルが HuggingFace でも同日公開されており、「スケールするだけ」を疑う理論・実装の両面が揃った注目研究。

---

## 企業動向

- **[AdventHealth advances whole-person care with OpenAI](https://openai.com/index/adventhealth)** (OpenAI, 5/21) — 米国の大規模ヘルスケアシステム AdventHealth が ChatGPT for Healthcare を全面導入し、管理業務の負担を削減して患者ケアの時間を拡大する取り組みを発表。医療 AI の導入が「パイロット」から「基盤インフラ」へ移行する事例として注目される。

- **[How Ramp engineers accelerate code review with Codex](https://openai.com/index/ramp)** (OpenAI, 5/20) — FinTech 企業 Ramp のエンジニアが GPT-5.5 を搭載した Codex を活用し、コードレビューのフィードバック取得を「数時間」から「数分」に短縮。レビューボトルネックという開発組織の古典的課題にエージェントが実際に効いている実例。

- **[The next phase of OpenAI's Education for Countries](https://openai.com/index/the-next-phase-of-education-for-countries)** (OpenAI, 5/20) — OpenAI が Education for Countries プログラムの第2フェーズを発表。新パートナーシップ・教員トレーニング・学習成果向上ツールを通じて AI の教育分野への浸透を加速する。国家レベルの AI 展開戦略において教育セクターへの深化を示す一手。

- **Google DeepMind**: ページ取得失敗のためスキップ。

---

## 注目論文

- **[On the limits and opportunities of AI reviewers: Reviewing the reviews of Nature-family papers with 45 expert scientists](https://arxiv.org/abs/2605.20668)** (arxiv cs.CL) — AI 査読者が Nature Family 誌の論文を評価した結果を、45人の専門家が精査・比較した大規模調査。AI 査読の得意分野・盲点・信頼性の限界を実証データで示し、科学コミュニティが AI 査読をどの程度・どの場面で信頼できるかを初めて具体化した。

- **[HRM-Text: Efficient Pretraining Beyond Scaling](https://arxiv.org/abs/2605.20613)** (arxiv cs.CL) — 生物の前頭頭頂ループに着想を得た多時間スケール・ヒアラルキカル記憶（HRM）フレームワークによる事前学習を提案。大規模計算資源なしで高いサンプル効率を実現し、「スケーリングだけが解」という現行パラダイムに正面から挑戦する。

- **[Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents](https://arxiv.org/abs/2605.20616)** (arxiv cs.CL) — セッションをまたいで蓄積された経験を再利用可能な知識へ変換することが現行エージェントのメモリシステムの弱点と指摘し、オフラインの記憶統合（夢の固定化に着想）を学習する Auto-Dreamer を提案。長期タスクで経験を本当に活かせるエージェントに向けた重要ステップ。

- **[Do as I Say, Not as I Do: Instruction-Induction Conflict in LLMs](https://arxiv.org/abs/2605.20382)** (arxiv cs.CL) — 「指示に従え」という訓練目標と「コンテキストのパターン補完」という能力が衝突したとき、LLM はどちらを優先するか？インコンテキストに正反対の行動デモをN件埋め込んだ会話で体系的に検証し、LLM の実際の服従メカニズムを解剖する。

- **[POLAR-Bench: A Diagnostic Benchmark for Privacy-Utility Trade-offs in LLM Agents](https://arxiv.org/abs/2605.19127)** (arxiv cs.AI) — ユーザーのプライバシーポリシーを持つ信頼済みモデルが、敵対的なサードパーティシステムと対話しながらどこまでプライバシーを守れるかを評価するベンチマーク。エージェントが実世界の機密データを扱う局面で避けられないプライバシー・利便性のトレードオフを定量化。

---

## オープンソース・モデル

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** (212 likes・text-generation・2026-05-21更新) — 上記 HRM-Text 論文のリリースと同日公開された 1B パラメータモデル。生体模倣の多時間スケール記憶アーキテクチャを採用し、小型ながら効率的な事前学習の恩恵を受ける。理論と実装が同時に公開されるスピード感が特徴。

- **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** (212 likes・video-text-to-text・2026-05-20更新) — 2B パラメータで密度の高い動画キャプション（Dense Video Captioning）の SOTA を達成した小型モデル。CaReBench リーダーボードでトップに立ち、DREAM-1K では Tarsier-34B・Gemini-1.5-Pro の間に割り込む評価を獲得。小型モデルが大型モデルを超える効率化の象徴的事例。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** / **[Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** (計70万超DL・2026-05-20更新) — Unsloth AI が公開した Qwen3.6 の量子化 GGUF シリーズ。Multi-Token Prediction（MTP）対応の27B 通常版と 35B MoE 版の両方で、ローカル推論需要が依然として非常に高い。

---

## 所感

今日の arxiv で目を引いたのは「現行パラダイムへの問い直し」の連打だ。45人の専門家による AI 査読評価研究は、AI が科学的判断の代替として使われはじめていることへの学術コミュニティの率直な自己評価ともいえる。HRM-Text は「スケーリングこそ正義」という前提に生体模倣の視点から疑問を投じ、Do as I Say では LLM の服従メカニズム自体を解剖する。マルチターン・エージェント展開が当たり前になるにつれ、プライバシー（POLAR-Bench）や記憶統合（Auto-Dreamer）のような実装課題も焦眉の急となっている。一方、企業動向では医療・FinTech・教育と応用領域の多様化が加速しており、「モデルを作る」競争から「いかに使いこなすか」の競争へ重心が移りつつあることを改めて感じる。
