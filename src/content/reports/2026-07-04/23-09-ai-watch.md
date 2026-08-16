---
title: "AI Watch（2026年7月5日）"
date: "2026-07-04T23:09"
category: "analysis"
summary: "Anthropicがジェイルブレイク深刻度フレームワーク草案を公開。ByteDance SeedのEdgeBenchはエージェントの長時間学習に「対数シグモイド則」を発見。"
tags: ["llm", "safety", "agents", "benchmark", "open-source", "policy"]
---

## 今日のハイライト

**Anthropic、Fable 5のサイバー安全策詳細とジェイルブレイク深刻度フレームワーク草案を公開（7/2）**

[More details on Fable 5's cyber safeguards and our jailbreak framework](https://www.anthropic.com/news/fable-safeguards-jailbreak-framework) が公開（7/2）。6月末の輸出規制解除・Fable 5再配備（既報）を受け、Anthropicは2つの情報を追加公開した。1つ目はFable 5に搭載されたサイバーセキュリティ用セーフティ分類器の詳細で、リクエストを「禁止（Prohibited）」「高リスク両用」「低リスク両用」「無害」の4区分に分けて分類器の挙動（ブロック/監視/許可）を規定し、意図的に「安全マージン」を広めに取ることで偽陽性が増えても有害挙動の見逃しを減らす設計思想を説明している。2つ目は、Glasswingパートナー（Amazon・Microsoft・Googleなど）と共同で策定中の「AIジェイルブレイク深刻度フレームワーク」の早期草案で、ジェイルブレイクが解除する挙動の重大性を業界共通の尺度で記述する試み。HackerOneでの脆弱性報告プログラムも新設し、学界・産業界・市民社会・政府を巻き込んだ議論を呼びかけている。フロンティアモデルの提供停止という異例事態から、業界横断の具体的な安全基準づくりへと着実に進んでいる点が注目される。

**ByteDance Seed「EdgeBench」: エージェントの長時間学習に「対数シグモイド則」を発見（7/4）**

[ByteDance-Seed/EdgeBench](https://huggingface.co/datasets/ByteDance-Seed/EdgeBench) が公開（HF更新7/4）。人間専門家が平均57.2時間（最大320時間）を要する134件の実世界タスク（51件を一般公開）で自律エージェントを12時間以上にわたって反復実行させ、一発勝負のスコアではなく「時間とともにどれだけ改善するか」の軌跡を追跡する新ベンチマーク。二コンテナ構成の評価ハーネス「SForge」を用い、約3.8万時間分のエージェント実行ログを分析した結果、成績は経過時間の対数シグモイド関数として非常に高い精度（R²=0.998）でフィットすることを発見したという。12時間時点のリーダーボードではClaude Opus 4.8が全カテゴリで首位、GPT-5.5が僅差で続き、GLM-5.1・DeepSeek-V4-Proがそれに続く結果となった。エージェントの実力を「瞬発力」でなく「学習曲線」で測るという視点は、長時間タスクの実運用評価に新たな軸を提供する。

---

## 企業動向

- **[More details on Fable 5's cyber safeguards and our jailbreak framework](https://www.anthropic.com/news/fable-safeguards-jailbreak-framework)** (Anthropic, 7/2) — 上記ハイライト参照。

- **[Google DeepMind and A24 announce first-of-its-kind research partnership](https://deepmind.google/blog/google-deepmind-and-a24-announce-first-of-its-kind-research-partnership/)** (Google DeepMind, 7/3) — 映画スタジオA24とDeepMindが研究協業パートナーシップを締結し、Googleも同社に出資したことを発表。映画制作者が生成AIツールの開発プロセスに直接関与できるようにし、制作ワークフローの一部として最新技術を試験・改良する狙い。汎用チャット・コーディング競争の外側で、クリエイティブ産業への技術浸透を狙う動きとして注目。

OpenAI: 過去24時間以内に新着なし（最新記事は6/30既報のGeneBench-Pro・ChatGPT adoptionレポート）。

---

## 注目論文

arxiv（cs.AI / cs.CL）は7/3(金)が米独立記念日（7/4・土）の振替休日、7/4・7/5が週末にあたり、直近の新着論文アナウンスは7/2付のもの止まり（前回レポートでSeed2.0・Phantom References等を既報）で、本日時点で未報告の新規論文は確認できなかった。研究成果としては上記ハイライトのEdgeBench（ByteDance Seed、tech report: edge-bench.org/paper.pdf）が実質的に最新の注目文献となる。

---

## オープンソース・モデル

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — 35BパラメータのMoEエージェントモデル。長期探索・エンジニアリング・科学研究・指示追従・ツール利用など複数ドメインの専門教師モデルから多教師オンポリシー蒸留を行い、パラメータ規模を抑えつつ「兆パラメータ級」の性能を狙う設計。7/2に量子化バリアント一式（mlx-community提供分含む）を追加公開し、Macでも実行可能になったことでHFトレンド入り。

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — 6月に公開済みのDeepSeek-V4（1.6T MoE・100万トークン文脈、既報）に投機的デコードモジュールを追加した派生版。モデル自体は新規ではないが、推論高速化目的の追加コンポーネントとして7/4にトレンド入りし、継続的な最適化投資がうかがえる。

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** — NVIDIAがModel OptimizerでAlibaba Qwen3.6-27B（ハイブリッドアテンション、26万トークン文脈、テキスト・画像・動画入力対応）をNVFP4量子化した推論最適化版。vLLM等で即デプロイ可能な形で提供し、エージェント・RAG用途での実運用コスト低減を狙う。

- **[smolagents/hf-realtime-voice](https://huggingface.co/spaces/smolagents/hf-realtime-voice)** — Hugging Faceのspeech-to-speechバックエンドとWebSocketで通話するリアルタイム音声チャットの参照実装Space。既存のWebRTC版の代替として、ロードバランサ・セッションハンドシェイクの設計を公開しており、音声エージェント構築の実装例として参考になる。

---

## ベンチマーク・リーダーボード

上記ハイライトの通り、ByteDance Seedの新ベンチマーク「EdgeBench」が12時間の長時間タスク遂行力でClaude Opus 4.8を首位（GPT-5.5僅差2位）と評価。従来型の一発勝負ベンチマークでは捉えきれない「時間経過に伴う改善力」を定量化した点が新しい。

LMSYS Chatbot Arenaリーダーボード（Hugging Face Space）はGradioのiframe埋め込みのみで静的取得できず、本日も取得失敗。

---

## 所感

前回レポート（7/3付）から中2日空いたが、この間の最大の動きはAnthropicが「ジェイルブレイク深刻度フレームワーク」の草案を実際に公開したことだ。輸出規制で一時停止したモデルの再配備という異例事態が、業界横断の具体的な安全基準策定という形に着地しつつある過程が透けて見える。一方でarxivは米独立記念日の振替休日と週末が重なり新着が完全に途切れたが、その隙間を埋めるようにByteDance SeedのEdgeBenchが「エージェントの実力は瞬発力でなく学習曲線で測るべきだ」という示唆に富む結果を提示した。Claude Opus 4.8が12時間後も首位を保つ一方、他モデルとの差が時間経過とともに広がる傾向は、長時間の自律運用を前提とした評価軸が今後のベンチマーク設計の主流になっていく可能性を感じさせる。
