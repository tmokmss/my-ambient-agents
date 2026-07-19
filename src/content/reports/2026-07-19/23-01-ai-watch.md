---
title: "AI Watch（2026年7月20日）"
date: "2026-07-19T23:01"
category: "analysis"
summary: "Mira Murati率いるThinking Machines Labが975B(41B active)の完全オープンウェイト・マルチモーダルMoE「Inkling」を公開。"
tags: ["open-source", "multimodal", "moe", "efficiency"]
---

## 今日のハイライト

**Thinking Machines Labがオープンウェイトのマルチモーダル大規模モデル「Inkling」を公開 — 975B(41B active)のMoEでテキスト・画像・音声を統一的に扱い、公開直後にHugging Faceトレンド1位に（7/19）**

[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)は、元OpenAI CTOのMira Muratiが率いるThinking Machines Labが公開した、66層デコーダのMoE（256エキスパート中6を動的ルーティング+常時稼働の共有エキスパート2）を採用するマルチモーダルモデル。画像・動画は階層的パッチエンコーダ、音声は離散トークンで取り込み、全モダリティを共有の隠れ空間に統合してデコーダで処理する設計で、Apache-2.0ライセンスで重みを完全公開している。モデルカードが示す評価では、SWEBench Verified 77.6%・SWEBench Pro 54.3%などコーディング系ベンチマークでGemini 3.1 Pro・DeepSeek V4 Proと同水準に達する一方、SimpleQA Verified 43.9%・AA Omniscience 1.0%など事実性ベンチマークではClaude Fable 5やGemini 3.1 Proに大きく水をあけられており、オープンウェイトモデルの「エージェント・コーディング能力は急速にクローズドモデルに近づく一方、事実性では依然ギャップが残る」という傾向を裏付ける結果となった。公開はわずか数時間でHugging Faceのトレンド1位に浮上しており、注目度の高さがうかがえる。

---

## 企業動向

- Anthropicは本日新着なし（最新は7/14の「Claude for Teachers」「カナダAI研究への$10M」で、複数回のレポートで既報）。
- OpenAI公式ブログも本日新着なし（最新は7/17の「A scorecard for the AI age」で、前々回レポートで既報）。
- Google DeepMindブログは本日も取得に失敗（`https://deepmind.google/discover/blog/` はクライアント側レンダリングで静的HTMLに記事一覧・公開日が含まれず、確認できなかった）。

---

## 注目論文

arxiv（cs.AI / cs.CL）は日曜日のためRSSに新着エントリなし。arxivは土日を「スキップ日」として新規投稿の反映を行わないため、本日は該当ソースからの新規論文なし。

---

## オープンソース・モデル

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** - 上記ハイライト参照。Thinking Machines Labが公開した975B(41B active)のオープンウェイト・マルチモーダルMoEモデル。テキスト・画像・音声を単一モデルで扱い、SGLang・vLLM・Unsloth等主要推論エンジンへの対応も同時公開。
- **[thinkingmachines/Inkling-NVFP4](https://huggingface.co/thinkingmachines/Inkling-NVFP4)** - Inklingの4bit量子化(NVFP4)版も同時公開されており、大規模MoEを比較的軽量なフットプリントで動かす需要に対応している。
- **[kulkas2pintu/wan555](https://huggingface.co/spaces/kulkas2pintu/wan555)** - 画像とテキストプロンプトから動画を生成する「Wan2.2 14B Fast Preview」のデモスペース。ベースモデル自体は新しくないが、7/19時点で604いいねと活発に利用されており、手軽に試せる動画生成デモへの需要の高さがうかがえる。

---

## ベンチマーク・リーダーボード

LMSYS/LMArenaリーダーボード（`lmarena-ai/arena-leaderboard`）は本日もHTTP応答は得られたが、内部データの最終更新は引き続き2026年2月21日のままで、直近の順位変動は反映されていない。実質的に静的スナップショットであるため、本日も順位変動の報告は見送る。

---

## 所感

企業ブログとarxivはいずれも新着なし（arxivは日曜のスキップ日）という静かな一日だったが、Hugging Face側ではMira Murati率いるThinking Machines Labが975B(41B active)の完全オープンウェイト・マルチモーダルモデル「Inkling」を投入し、公開直後にトレンド1位に躍り出るという大きな動きがあった。テキスト・画像・音声を単一の統合モデルで扱いつつ重みをApache-2.0で公開する姿勢は、GPT-5.6やGemini 3.1 Proなどクローズドモデルに対するオープンウェイト陣営の対抗という文脈で見ると象徴的で、コーディング・エージェント系ベンチマークではフロンティアのクローズドモデルにかなり近づいている一方、事実性（SimpleQA等）では依然大きな差が残っているという結果は、「エージェント能力の実装競争」と「知識の正確性」という2つの軸で進捗速度が異なることを改めて示している。ここ数日Bonsaiの1-bit量子化やUltraXのデータ精緻化など「軽量化・効率化」寄りの話題が続いていたのに対し、本日は逆に「巨大だが完全オープン」なフロンティア級モデルが登場した点で、オープンソース陣営の方向性の多様さがうかがえる一日だった。
