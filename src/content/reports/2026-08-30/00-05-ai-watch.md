---
title: "AI Watch（2026年8月30日）"
date: "2026-08-30T00:05"
category: "analysis"
summary: "Tencentが770B規模の新フラッグシップMoE「Hy4-preview」を公開。Z.aiのGLM-5.3は攻撃能力ベンチマークで前世代の2倍以上のスコアを記録し話題に。"
tags: ["llm", "open-source", "moe", "benchmark", "security"]
---

## 今日のハイライト

**Tencentが770Bパラメータ（アクティブ49B）の新フラッグシップMoEモデル「Hy4-preview」をHugging Faceで公開（8/28）。** DeepSeek由来のスパースアテンション（Gated DSA）やGLM由来の残差接続拡張（iHC）を組み合わせ、コンテキスト長1Mトークンに対応。同社は「世代を跨いだ改善幅としては過去最大で、オープンソースのフロンティアに達した」と位置づけている。同時期にトレンド入りしたZ.aiの「GLM-5.3」（8/29更新）は、コーディング系ベンチマークで前世代GLM-5.2から50%改善した一方、脆弱性発見ベンチマーク「CyberGym」でオープンウェイトモデル中最高スコアを記録し、攻撃チェーンの後半に相当するExploitGym/ExploitBenchではGLM-5.2の2倍以上のスコアに達したと自ら報告している。ポストトレーニングの強化がコーディング能力とサイバー攻撃能力の両方を同時に押し上げるという構図は、オープンウェイトモデルのデュアルユースリスクを考える上で注目に値する。

なお、Anthropic・OpenAI・Google DeepMindの公式ブログはいずれも8/27〜8/28付の発表（既報）以降新着なし、arXiv（cs.AI/cs.CL）も土日は新着リストが更新されない仕様のため、本日は新着論文なし。

---

## オープンソース・モデル

- **[tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)**（Tencent, 8/28公開） - 上記ハイライト参照。総パラメータ770B・アクティブ49BのMoEフラッグシップモデル。78層のうち77層をMoE化し、DeepSeek Sparse Attention＋IndexCacheによる疎注意機構を採用、コンテキスト長は1Mトークン。Tencentの次世代Hunyuanシリーズの技術的到達点を示すプレビュー版。
- **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)**（Z.ai, 8/29更新） - 上記ハイライト参照。ベースモデルはGLM-5.2と同一で、ポストトレーニングのみで長時間コーディングタスクやTerminal Bench 3.0で公開モデル最高水準に到達したと主張。一方でCyberGym・ExploitGym等の攻撃系ベンチマークでも前世代から大幅にスコアが伸びており、能力向上に伴うデュアルユースリスクの実例として注視が必要。
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**（Lightricks, 8/27公開） - 動画生成モデルLTXシリーズの最新版（image-to-video）。モデルカード自体はアクセス制限がかかっており詳細な仕様は非公開だが、トレンド上位に浮上しており動画生成分野の開発競争が続いていることがうかがえる。
- **[openbmb/Ultra-FineWeb-L1](https://huggingface.co/datasets/openbmb/Ultra-FineWeb-L1)**（OpenBMB, 8/20公開） - 11億件超のテキストレコードを収めた大規模Web由来データセット。MiniCPMシリーズを手がけるOpenBMBによる、高品質フィルタリング済み事前学習コーパス「Ultra-FineWeb」の拡張版とみられる。
- **[hamzabagirsakci/turkish-court-decisions](https://huggingface.co/datasets/hamzabagirsakci/turkish-court-decisions)**（8/23公開） - トルコの裁判所判決2,200万件超を収めた大規模データセット。主要言語圏以外の法律・行政ドメインに特化したデータセットがトレンド入りする例は珍しく、非英語圏での法律LLM開発ニーズの広がりを示す。

---

## ベンチマーク・リーダーボード

LMArenaのChatbot Arena、Artificial AnalysisのIntelligence Indexともに、8/28の観測時点から数値・順位に変化なし。Anthropicの「claude-fable-5」がレーティング1507（投票25,824件）で首位を維持し、claude-opus-4-6-high（1505）・claude-opus-4-7-high（1502）が僅差で続く。Intelligence IndexでもClaude Opus 5（Max Effort構成、63.1点）が首位を維持し、GPT-5.6 Sol・Grok 4.6・Kimi K3・GLM-5.3が59〜61点台で追う構図が3日連続でほぼ固定化している。

---

## 所感

企業の公式発表・arXivの新着論文がともに途絶えた週末は、オープンウェイトモデルの動きが情報の中心になった。TencentのHy4-previewは770B規模・1Mコンテキストという物量でオープンソースの天井を押し上げる試みである一方、Z.aiのGLM-5.3はコーディング能力の向上が脆弱性発見・エクスプロイト系ベンチマークのスコアも同時に押し上げるという結果を公表しており、能力向上と攻撃能力向上が不可分であることを開発元自らが数値で示した点が印象的だった。オープンウェイトモデルの性能競争が続く中で、こうした「副作用としてのサイバー能力向上」をどう監視・抑制するかは、今後さらに重要な論点になりそうだ。
