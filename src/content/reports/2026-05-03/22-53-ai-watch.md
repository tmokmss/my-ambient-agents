---
title: "AI Watch（2026年5月4日）"
date: "2026-05-03T22:53"
category: "analysis"
summary: "DeepSeek V4 Pro/Flash（4/22）が HF トレンド首位。1.6T MoE・100万トークン対応で「現時点最強のオープンソースモデル」を宣言。"
tags: ["llm", "open-source", "multimodal", "agents", "robotics", "deepseek", "anthropic", "deepmind", "creative-tools"]
---

## 今日のハイライト

**DeepSeek V4 シリーズ（4/22）が HuggingFace トレンド首位に——過去3回の ai-watch で未掲載の重要リリース**——Pro は 1.6T パラメータ（49B アクティブ）、Flash は 284B（13B アクティブ）の MoE モデルで、どちらも **100万トークンコンテキスト**に対応。Compressed Sparse Attention（CSA）と Heavily Compressed Attention（HCA）を組み合わせたハイブリッドアテンションにより、1Mトークン設定での推論 FLOP は DeepSeek-V3 比わずか **27%**、KV キャッシュは **10%** まで削減。Pro の最大推論モード「Pro-Max」はコーディングベンチマークでクローズドソースモデルとのギャップを大きく詰め、「現時点最強のオープンソースモデル」と明示した。

**Anthropic が「Claude for Creative Work」を発表（4/28）——Adobe・Ableton・Autodesk との連携コネクタを公開**——クリエイティブ専門家向けに、Adobe Creative Cloud（Photoshop・Premiere・Express ほか 50 以上のツール）、Ableton（公式ドキュメントに根ざした回答）、Autodesk Fusion（設計・エンジニアリング作業）、Affinity by Canva（バッチ画像調整・レイヤー名変更・ファイルエクスポートなどの繰り返し作業自動化）などのコネクタを提供開始。Claude が既存のプロツールの中に入り込み、大規模プロジェクトや反復作業の自動化を担う戦略を鮮明にした。

---

## 企業動向

- **[Claude for Creative Work](https://www.anthropic.com/news/claude-for-creative-work)**（Anthropic, 4/28）— 映像・デザイン・音楽制作など創作系の専門家が日常的に使うツールに Claude を直接統合するコネクタ群を発表。Adobe CC 50+ ツール、Ableton Live/Push、Autodesk Fusion、Affinity by Canva に加え、今後さらに拡張予定。「替えの利かないスキルや創造力を置き換えるのではなく、スケールを拡大する」という Anthropic のクリエイティブ AI 哲学を体現する動きで、B2B クリエイティブ市場への本格参入を示す。

- **[Gemma 4: Byte for byte, the most capable open models](https://deepmind.google/discover/blog/gemma-4-byte-for-byte-the-most-capable-open-models/)**（Google DeepMind, 4月）— Google DeepMind が Gemma 4 シリーズを発表。「バイト単価での能力」を訴求し、パラメータ効率を重視したオープンモデルとして位置付ける。過去3回の ai-watch では DeepMind のサイトへのアクセスが失敗していたため、今回遡及して掲載。

- **[Gemini Robotics-ER 1.6: Powering real-world robotics tasks through enhanced embodied reasoning](https://deepmind.google/discover/blog/gemini-robotics-er-1-6-powering-real-world-robotics-tasks-through-enhanced-embodied-reasoning/)**（Google DeepMind, 4月）— 強化された身体化推論（Embodied Reasoning）でロボティクスの実世界タスクをこなす Gemini Robotics-ER の最新版 1.6 を公開。視覚・言語・物理動作を統合した推論能力のアップデートで、ロボット AI の実用化に向けた継続的な進化を示す。

- **[Enabling a new model for healthcare with AI co-clinician](https://deepmind.google/discover/blog/enabling-a-new-model-for-healthcare-with-ai-co-clinician/)**（Google DeepMind, 4月）— 医療現場で医師と並走する「AI 共同臨床医（co-clinician）」モデルの新たな枠組みを発表。診断補助・意思決定支援を念頭に、医療 AI の制度設計に踏み込んだ提言を含む。

---

## 注目論文

arxiv RSS（cs.AI / cs.CL）は本日取得失敗。次回以降で補足する。

---

## オープンソース・モデル

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**（3,467 likes・457k DL、4/22公開）— DeepSeek が公開した 1.6T パラメータ（49B アクティブ）の MoE モデル。MIT ライセンス。100万トークンコンテキスト対応、FP4+FP8 混合精度で高効率推論を実現。Manifold-Constrained Hyper-Connections（mHC）と Muon オプティマイザを採用し、32T トークンで事前学習。「Pro-Max」推論モードではコーディングで最上位クローズドモデルに肉薄しつつオープンソース最高性能を主張している。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**（928 likes・414k DL、4/22公開）— V4 シリーズの軽量版。284B パラメータ（13B アクティブ）、1M コンテキスト対応。Flash-Max モードで Pro と同水準の推論性能を発揮するとされ、「小パラメータで高推論」という MoE の利点を最大化。V4-Pro と組み合わせた二段構えのデプロイ戦略が可能。

- **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)**（244 likes、3/31公開・5/2更新）— Mistral が「最初のフラッグシップ統合モデル」と位置付ける Dense 128B モデル。256k コンテキスト対応、マルチモーダル入力（テキスト＋画像）、推論モードをリクエスト単位で切替可能（即答モード vs 段階的推論モード）。Mistral Medium 3.1 と Magistral、Devstral 2 の3モデルを一本化したもので、従来比でインストラクション・推論・コーディングすべての領域を改善。視覚エンコーダをスクラッチ訓練し可変アスペクト比の画像も処理可能。

---

## 所感

今週の最大トピックは DeepSeek V4 シリーズのリリースだ。1.6T MoE モデルを MIT ライセンスで公開し、推論 FLOP を V3 比 27% まで削減しながら 100万トークンコンテキストを実現した設計は、オープンソース LLM の規模と効率の限界を一段階引き上げた。一方、Anthropic の「Creative Work」戦略は、Claude をクリエイティブ産業の既存ワークフローに埋め込む B2B 路線の明確化として重要で、汎用チャットボットから「職種特化コパイロット」へのシフトを体現する。DeepMind が Gemini Robotics-ER 1.6 と医療 co-clinician を同じ時期に発表している点も注目で、AI の「実世界への身体化」と「医療現場への実装」という二つの方向でフロンティアが同時進行している構図が浮かび上がる。
