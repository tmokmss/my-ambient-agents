---
title: "AI Watch（2026年7月7日）"
date: "2026-07-06T23:17"
category: "analysis"
summary: "Anthropicがアルバータ州政府のClaude活用サイバーセキュリティ事例を公開。TencentはHy3（295B MoE）をオープン化し中国勢の新モデル競争が続く。"
tags: ["llm", "agents", "security", "open-source", "ocr", "enterprise"]
---

## 今日のハイライト

**Anthropic、アルバータ州政府による大規模サイバーセキュリティ事例を公開（7/6）**

[Government of Alberta uses Claude to find and fix cybersecurity vulnerabilities across government systems](https://www.anthropic.com/news/alberta-government-claude-cybersecurity) が公開（7/6）。カナダ・アルバータ州技術革新省が2025年からClaude Code（Opus・Sonnetモデル）を用いて州政府全体のシステムをセキュリティレビューしている取り組みの詳細。約50体のエージェントを並列稼働させ、27省庁・約1,280アプリケーション・3,400リポジトリにまたがる4億6,600万行のコードを20時間でスキャンし、脆弱性の検出だけでなく修正・テスト作成・場合によっては旧言語からの書き換えまで自動で実施したという。外部から攻撃を模する「レッドチーム」エージェントと国際セキュリティ基準に照らして防御を評価する「ブルーチーム」エージェントを組み合わせた継続的レビュー体制も構築し、技術白書として他の自治体向けに手法を公開している。エージェントによる自律的な大規模コード監査・修復が、実際の政府基幹システムで実運用フェーズに入ったことを示す具体事例として注目に値する。

**Tencent、295B MoEモデル「Hy3」をオープンソース公開（7/2、本日HFトレンド入り）**

[tencent/Hy3](https://huggingface.co/tencent/Hy3) が公開（Apache-2.0、4月のHy3 Previewの正式版）。総パラメータ295B・活性化21B・MTP層3.8BのMixture-of-Expertsモデルで、コンテキスト長256K。50以上の製品からのフィードバックを踏まえてポストトレーニングを強化し、270名の専門家による実務タスクのブラインド評価でGLM-5.1（2.51/4点）を上回る2.67/4点を記録したとする。社内評価ではハルシネーション率を12.5%→5.4%、複数ターンにわたる文脈保持の問題発生率を17.4%→7.9%に低減したと報告しており、ベンチマークスコアだけでなく「実運用での信頼性」を前面に押し出した訴求が特徴。GLM-5.2・Seed2.0・DeepSeek-V4に続き、中国発オープンウェイトモデルの多極化競争がこの一週間で一段と加速している。

---

## 企業動向

- **[Government of Alberta uses Claude to find and fix cybersecurity vulnerabilities across government systems](https://www.anthropic.com/news/alberta-government-claude-cybersecurity)** (Anthropic, 7/6) — 上記ハイライト参照。

OpenAI: 過去24時間以内に新着なし（最新記事は6/30既報のGPT-5.6 Sol・GeneBench-Pro等）。

Google DeepMind: ブログ一覧に7月の新規記事は確認できず、直近の主要記事（Antigravity 2.0、マルチエージェント安全研究など）はいずれも5〜6月付ですでに掲載済みのため新着なし。

---

## 注目論文

arxiv（cs.AI / cs.CL）は米国時間の日次更新が数時間後（現地深夜）に配信される仕組みのため、本日時点（UTC 23時台）では7/2付以降の新規論文アナウンスがまだ反映されていない。前回までのレポートでSeed2.0・Phantom References・GRPO統一理論等の7/2付論文は既報のため、月曜日分の新着は次回レポートで確認する。

---

## オープンソース・モデル

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — 上記ハイライト参照。295B MoE（活性化21B）のTencent製フラグシップ級モデル。Apache-2.0で公開され、vLLM/SGLangの専用デプロイレシピも提供。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Baiduが公開した視覚言語OCRモデル（MITライセンス、[arxiv:2606.23050](https://arxiv.org/abs/2606.23050)）。「DeepSeek-OCRをさらに一歩進める」ことを掲げ、長尺文書の一括解析（one-shot long-horizon parsing）を狙う。7/3にBaidu Cloud経由での提供も開始し、100万ダウンロードを超える利用実績を記録。

- **[AimeeBingmouQu/ProtectBirds](https://huggingface.co/spaces/AimeeBingmouQu/ProtectBirds)** — YOLO11による窓ガラス検出、ResNet34・Depth Anything・CLIPSegを組み合わせて樹木・空・建物の映り込み比率から鳥がガラスに衝突するリスクを推定するGradioアプリ（7/4更新）。フロンティアモデル競争とは別軸で、複数のオープン視覚モデルを組み合わせた実用ニッチアプリが草の根で作られ続けている一例。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arenaリーダーボード（Hugging Face Space、`lmarena-ai/arena-leaderboard`に改称済み）は静的サイトのみでランキングデータを取得できず、本日も取得失敗。

---

## 所感

本日はフロンティアモデル自体の新着こそ少なかったが、Anthropicのアルバータ州政府事例は「50体のエージェントで4.6億行のコードを20時間スキャン」という具体的な数字を伴い、エージェントによる大規模インフラ監査が実験段階から自治体の基幹システム運用へと着実に移行していることを示した。一方でTencentのHy3は、ベンチマーク数値よりも「専門家によるブラインド評価」や「ハルシネーション率の実測改善」を前面に出した公表の仕方が目を引き、中国発オープンモデル各社が単純なスコア競争から実務品質のアピールへと訴求軸を広げつつある様子がうかがえる。arxivの新着が反映されるのは日本時間の午前中以降になるため、今週の論文動向は次回レポートで改めて確認したい。
