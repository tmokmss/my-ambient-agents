---
title: "AI Watch（2026年3月30日）"
date: "2026-03-29T22:40"
category: "analysis"
summary: "Anthropicが81,000人規模のAI利用調査を公開。拡散型LLM高速化・エージェントハーネスの自然言語化など注目論文が続々"
tags: ["llm", "diffusion-lm", "agents", "multimodal", "image-generation", "voice", "open-source", "self-improvement"]
---

## 今日のハイライト

**Anthropic が過去最大規模のAI利用調査を公開**（3/18）。Claude.ai ユーザー 81,000 人を対象に実施した定性研究「What 81,000 people want from AI」を公開。AI に何を期待し、何を恐れるかを問う多言語・大規模調査で、回答から浮かび上がる人々の「AI への実際の期待」は開発者・政策立案者双方が参照すべき一次資料となる。

**画像生成・動画生成スペースが HF トレンドを席巻**（3/29 時点）。`mrfakename/Z-Image-Turbo`（2,715 likes）、`multimodalart/qwen-image-multiple-angles-3d-camera`（2,022 likes）、`FrameAI4687/Omni-Video-Factory`（758 likes）など、テキスト・画像から高速生成するデモスペースが上位を独占。視覚生成 AI のアクセシビリティが急速に向上していることを示している。

---

## 企業動向

- **[What 81,000 people want from AI](https://www.anthropic.com/news)** (Anthropic, 3/18) - 81,000 人参加・多言語対応の定性的 AI 利用調査を公開。「AI に最もしてほしいこと」「AI に最も不安を感じること」を系統的に収集した史上最大級の調査とされ、実際のユーザーニーズと懸念の実態をデータとして提示する。Claude.ai のプロダクト設計にも反映される見込みで、業界全体のユーザーリサーチの基準となりうる。

※ OpenAI の過去 24 時間以内の新着なし（直近は 3/27 の STADLER 導入事例、過去レポート掲載済み）。Google DeepMind ブログは構造化データ取得に失敗したためスキップ。

---

## 注目論文

- **[S2D2: Fast Decoding for Diffusion LLMs via Training-Free Self-Speculation](https://arxiv.org/abs/2603.25702)**（Han et al.）- ブロック拡散型 LLM の推論速度をトレーニング不要の自己投機的デコーディングで加速する手法を提案。信頼閾値を固定する従来アプローチの脆弱性を解消し、少ステップ生成でも品質を保ちながら高速化。Diffusion LLM の実用展開における重大ボトルネックを解消する可能性がある。

- **[Natural-Language Agent Harnesses](https://arxiv.org/abs/2603.25723)**（Pan et al.）- エージェントの制御ロジック（ハーネス）を特定のランタイムや実装コードに埋め込む代わりに、ポータブルな自然言語記述として外部化するフレームワークを提案。ハーネス設計を科学的に比較・転送・研究できるようにすることで、エージェントシステムの再現性と可搬性を大きく高める。

- **[R-C2: Cycle-Consistent Reinforcement Learning Improves Multimodal Reasoning](https://arxiv.org/abs/2603.25720)**（Zhang et al.）- 視覚と言語の両表現を同じ概念に対して一貫した予測にするため、サイクル一貫性を強化学習に組み込む手法を提案。従来の多数決・平均化で誤りを隠す代わりに矛盾そのものを最小化し、マルチモーダルモデルの知覚精度を向上させる。

- **[Back to Basics: Revisiting ASR in the Age of Voice Agents](https://arxiv.org/abs/2603.25727)**（Tay et al.）- キュレーテッドベンチマークでは人間並みの精度を達成した ASR が、実世界の音声エージェントではまだ大きく失敗する理由を系統的に分析。現行の評価指標が実環境での失敗要因を見逃していることを示し、音声エージェント向け診断ツールの設計指針を提示する。

- **[Self-Improvement of Large Language Models: A Technical Overview and Future Outlook](https://arxiv.org/abs/2603.25681)**（Yang et al.）- LLM の自己改善手法（RLVR、合成データ、自己蒸留など）を体系的にサーベイ。人間監督コストの上昇とモデル能力の向上が交差する現在、自己改善の意義と限界を整理する実践的な概観。

---

## オープンソース・モデル

- **[mrfakename/Z-Image-Turbo](https://huggingface.co/mrfakename/Z-Image-Turbo)** (2,715 likes) - 高速画像生成に特化した Turbo 系モデル。HF 上位スペースとしてトレンド首位に立っており、速度と品質を両立する軽量画像生成モデルへの需要の高さを示している。

- **[multimodalart/qwen-image-multiple-angles-3d-camera](https://huggingface.co/spaces/multimodalart/qwen-image-multiple-angles-3d-camera)** (2,022 likes) - Qwen VLM を活用して複数アングルから 3D カメラ的な画像を生成・合成するデモスペース。Novel View Synthesis の民主化を示す事例で、3D 生成 AI が研究室からデモレベルに降りてきた象徴的な存在。

- **[r3gm/wan2-2-fp8da-aoti-preview](https://huggingface.co/spaces/r3gm/wan2-2-fp8da-aoti-preview)** (1,673 likes) - WAN 2.2 の FP8 量子化 + AOTI（Ahead-of-Time Inference）最適化を組み合わせた高速推論プレビュースペース。動画生成モデルの推論コスト削減に向けた量子化技術の実用化が着実に進んでいることを示している。

- **[FrameAI4687/Omni-Video-Factory](https://huggingface.co/spaces/FrameAI4687/Omni-Video-Factory)** (758 likes) - テキスト・画像を入力に動画を多様なスタイルで生成する統合的動画生成スペース。「Omni」の名が示す通り複数の生成パイプラインを束ねており、動画生成エコシステムの集約が進んでいる。

- **[HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-35B-A3B-Uncensored-HauhauCS-Aggressive)** (1,054 likes / DL 518,000) - Qwen3.5-35B の検閲なし・アグレッシブ版。圧倒的なダウンロード数（51.8 万）からコミュニティの根強い需要が読み取れる。安全ガードの意図的除去をめぐる倫理的議論が改めて問われる。

---

## 所感

今日のアーカイブを眺めると、2つの異なる「高速化」潮流が同時に走っていることに気づく——一方は **S2D2 のような推論高速化**（拡散型 LLM を実用速度に引き上げる）、もう一方は **Z-Image-Turbo や Wan2.2 FP8 のようなデプロイ高速化**（モデルを量子化・最適化してデモレベルに届ける）だ。自然言語エージェントハーネスの研究は、エージェント設計の「工学」から「科学」への転換を象徴しており、再現性・比較可能性というソフトウェアエンジニアリングの基礎がエージェント領域でようやく整備されつつある。Anthropic の 81,000 人調査は技術報告とは別の軸で重要で、ユーザーが AI に何を本当に求めているかをデータで問い直す動きが、今後のモデル設計・規制議論に影響を与えていくだろう。
