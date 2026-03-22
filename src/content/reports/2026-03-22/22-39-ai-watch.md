---
title: "AI Watch（2026年3月23日）"
date: "2026-03-22T22:39"
category: "analysis"
summary: "Anthropicが Claude 4.6 シリーズ（Sonnet/Opus）を発表。OSWorld 72.5%達成、Vercept買収でコンピュータ使用を強化"
tags: ["llm", "computer-use", "benchmark", "acquisition", "open-source", "agents", "music-generation", "reasoning"]
---

## 今日のハイライト

**Anthropic が Claude 4.6 シリーズを発表・Vercept 買収**（3/22 前後）。Claude Sonnet 4.6 と Opus 4.6 を新たにリリース。Sonnet 4.6 はコンピュータ使用の評価指標 OSWorld で 72.5% を達成（2024年末時点の15%未満から大幅改善）、人間レベルに迫る操作精度を実現。合わせてコンピュータ使用能力の強化を目的に Vercept（コンピュータビジョン専門チーム）を買収した。Sonnet 4.6 発表後すぐに買収を発表する素早い展開で、エージェント×コンピュータ使用領域への集中投資が鮮明になった。

**NVIDIA が Nemotron-Cascade-2-30B-A3B を公開**（3/18）。30B 総パラメータ・実効 3B 稼働の MoE アーキテクチャで SFT と RL を適用した推論強化モデル。思考モード（Thinking Mode）を搭載し、週末に HuggingFace トレンドへ浮上してきた。

---

## 企業動向

- **[Introducing Claude Sonnet 4.6](https://www.anthropic.com/news/claude-sonnet-4-6)** (Anthropic, 3/22前後) - コーディング・コンピュータ使用・長尺推論・エージェント計画・知識処理・デザインと幅広いスキルを全面アップグレード。とりわけコンピュータ使用が目覚ましく進歩し、OSWorld ベンチマーク 72.5% という数値はこの分野で人間水準に迫る成果として注目される。直前の Sonnet 世代からの改善幅が特に大きく、エージェント型ワークフローの現実的な実用化を後押しする。

- **[Introducing Claude Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6)** (Anthropic, 3/22前後) - 「エージェント型コーディング・コンピュータ使用・ツール使用・検索・ファイナンスにおいて業界最高水準のモデル」と位置付け、多くのベンチマークで大差で他社を上回ると主張。最高性能が求められるエンタープライズ用途に向けたフラッグシップとして改めて位置づけられた。

- **[Anthropic acquires Vercept to advance Claude's computer use capabilities](https://www.anthropic.com/news/acquires-vercept)** (Anthropic, 3/22前後) - コンピュータビジョン専門チームの Vercept を買収し、Claude のコンピュータ使用機能の強化を加速。Sonnet 4.6 のリリース直後に発表しており、OSWorld 72.5% 達成を受けたさらなる性能向上を目指す布石。Bun ランタイムの買収（開発ツール強化）に続く形で、能力を構成するレイヤーごとに専門チームを取り込む戦略が続いている。

※ OpenAI・Google DeepMind からは過去 48 時間以内の新規投稿なし（直近カバー済み）。arxiv は週末のため更新なし。

---

## オープンソース・モデル

- **[nvidia/Nemotron-Cascade-2-30B-A3B](https://huggingface.co/nvidia/Nemotron-Cascade-2-30B-A3B)** (196 likes, 3/18公開) - NVIDIA が公開した推論強化テキスト生成モデル。30B 総パラメータのうち実効 3B のみを稼働させる MoE（Nemotron-H アーキテクチャ）設計で、SFT + RL によるトレーニングを実施。「思考モード（Thinking Mode）」を備え複雑な推論タスクへの対応を謳う。NVIDIA による積極的なオープンモデル戦略の最新事例。

- **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** (798 likes, 3/10公開) - Qwen3.5-35B-A3B をベースにセーフガードを除去した検閲なし GGUF 量子化版。MoE アーキテクチャ・マルチモーダル（vision）対応で、英語・中国語など多言語をカバー。今週トレンド最多ダウンロード数（27万超）を記録しており、研究・ローカル実行コミュニティから高い需要を集めている。

- **[RoyalCities/Foundation-1](https://huggingface.co/RoyalCities/Foundation-1)** (225 likes, 3/16公開) - Stable Audio Open 1.0 をベースにファインチューニングした音楽生成モデル。サンプル生成・オーディオ to オーディオ変換など音楽制作に特化したタスクをカバー。Google の Lyria 3 が Gemini アプリに統合された同じ週に、コミュニティ主導の音楽生成モデルも登場しており、この分野のオープンエコシステムへの注目が高まっている。

- **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** (1,028 likes) - 先週から継続してトレンドトップを維持。Claude Opus 4.6 から蒸留した推論強化モデルとして安定した人気を保ち、今回の Opus 4.6 公式リリース発表を受けてさらに関心が高まる可能性がある。

---

## 所感

今週のAI業界最大の話題は Anthropic の攻勢だ。Claude 4.6 シリーズの発表と同時に Vercept の買収を発表するスピードは、コンピュータ使用という「AIがGUIを操作する能力」を次の主戦場と見据えた集中投資を示している。OSWorld 72.5% という数値が象徴するように、PCやブラウザの操作を自律的に行うエージェントの実用精度が急速に向上しており、ソフトウェア業務の自動化が現実的な射程に入りつつある。一方 HuggingFace では NVIDIA・Qwen 系列など「推論機能付き MoE」が揃って登場し、大規模かつ省メモリなモデルアーキテクチャが標準化しつつある傾向も見て取れる。
