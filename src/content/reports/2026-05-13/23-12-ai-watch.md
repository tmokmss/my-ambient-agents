---
title: "AI Watch（2026年5月14日）"
date: "2026-05-13T23:12"
category: "analysis"
summary: "Anthropic が中小企業向けClaude展開パッケージを発表。LLMの多様性崩壊は「較正誤差」が根本原因と判明。"
tags: ["llm", "agents", "enterprise", "small-business", "open-source", "computer-use", "multimodal", "diversity", "video-generation"]
---

## 今日のハイライト

**Anthropic、中小企業向け「Claude for Small Business」を発表（5/13）**——Anthropic は、中小企業が Claude をすぐに活用できるコネクターと既製ワークフローをセットにした専用パッケージを発表した。米 GDP の 44% を占め民間雇用の半数を支えながら AI 導入が大企業より遅れていた中小企業をターゲットに、専門知識なしで Claude を業務ツールに組み込める環境を提供する。大企業・エンタープライズ向けに続き市場カバレッジを全事業者規模に広げる戦略的な一手だ。

**「サンプリングを増やしても多様性は増えない」——LLM 多様性崩壊の根本は較正誤差（5/13 arxiv）**——新論文 "Sampling More, Getting Less" が、LLM での出力多様性崩壊の原因を有効性・多様性フレームワークで定式化した。「順序較正」（valid トークンが invalid を確実に上回れているか）と「形状較正」（確率質量が少数 valid トークンへ過度集中していないか）の2種類の誤差がデコードステップをまたいで累積し、配列レベルの多様性を大幅に低下させることを実証。単純にサンプリング数を増やすだけでは解決できないという、創造的生成・科学探索 AI の設計に直結する知見だ。

---

## 企業動向

- **[Introducing Claude for Small Business](https://www.anthropic.com/news/claude-for-small-business)**（Anthropic, 5/13）— コネクターと既製ワークフローを同梱した中小企業向けパッケージ。小規模事業者が日常的に使うツールの中に Claude を直接組み込み、AI 活用のエントリー障壁を下げる設計。エンタープライズ製品との補完でAnthropicの市場カバレッジを全規模の事業者へ拡大する。

- **[Building a safe, effective sandbox to enable Codex on Windows](https://openai.com/index/building-codex-windows-sandbox)**（OpenAI, 5/13）— OpenAI が Codex の Windows 対応に際して構築したセキュアサンドボックスの技術詳細を公開。ファイルアクセスとネットワーク制限を細粒度で制御し、コーディングエージェントが安全・効率的に動作できる実行環境を実現した。Windows 環境での Codex 展開加速に向けたインフラ整備として重要な一歩。

- **[Reimagining the mouse pointer for the AI era](https://deepmind.google/blog/ai-pointer/)**（Google DeepMind, 5/12）— コンピューターとの対話における「マウスポインター」の概念を AI 時代に合わせて再設計する研究を公開。GUI を操作するエージェントの実用化に向け、AI とインターフェースの物理的接点を根本から見直すアプローチで、コンピューターユースエージェント研究の新たな方向性を示す。

---

## 注目論文

- **[Sampling More, Getting Less: Calibration is the Diversity Bottleneck in LLMs](https://arxiv.org/abs/2605.11128)**（複数著者）— LLM の多様性崩壊を「有効性-多様性フレームワーク」で定式化。「順序較正」と「形状較正」の2種の誤差がデコードステップをまたいで累積し配列レベルの多様性を大幅に低下させることを実証した。創造的生成から科学的探索まで、多様な出力が求められるアプリケーション設計の見直しを迫る論文。

- **[The Bicameral Model: Bidirectional Hidden-State Coupling Between Parallel Language Models](https://arxiv.org/abs/2605.11167)**（複数著者）— テキスト出力を介さず隠れ状態を直接双方向に結合した「二院制モデル」を提案。既存のマルチエージェント・ツール連携はすべて出力語彙を経由した通信が前提だが、本研究は2つの事前学習済みモデルを内部表現レベルで協調させる根本的に新しい設計を示す。マルチモデル協調研究の先駆的提案として注目。

- **[ReVision: Scaling Computer-Use Agents via Temporal Visual Redundancy Reduction](https://arxiv.org/abs/2605.11212)**（複数著者）— GUI 操作エージェントにおける連続スクリーンショット間の時間的視覚冗長を削減し視覚トークン数を大幅に圧縮する手法を提案。長いアクション列でのスケーラビリティ問題を直接解決し、コスト・レイテンシ両面でのコンピューターユースエージェント実用化に貢献する実践的研究。

- **[PIVOT: Bridging Planning and Execution in LLM Agents via Trajectory Refinement](https://arxiv.org/abs/2605.11225)**（複数著者）— LLM エージェントが「もっともらしい計画」を立案しながら実行時に失敗するギャップを、軌跡の反復的な洗練（Trajectory Refinement）で解消するフレームワークを提案。実行不可能なアクションや制約違反を計画段階にフィードバックとして取り込み、エージェントのロバスト性を改善する。

- **[Unlocking LLM Creativity in Science through Analogical Reasoning](https://arxiv.org/abs/2605.11258)**（複数著者）— バイオメディシンなど複雑な科学領域での AI によるアイデア生成に、類比的推論を組み込む手法を提案。ドメイン横断的なアナロジー活用が「自律的科学」実現の鍵であると論じ、AI 支援科学探索の実践的な前進に向けた枠組みを提示する。

---

## オープンソース・モデル

- **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**（824 likes, 535K DL）— 8.9B パラメータのテキスト→動画生成モデル。リリース後に急速にダウンロードを伸ばしトレンド入り。オープンソースの動画生成モデル競争に新たな選択肢が加わり、SulphurAI の今後のシリーズ展開にも注目が集まる。

- **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)**（295 likes, 更新 5/13）— HiDream.ai が公開した 8.8B パラメータの画像生成モデル（image-text-to-image）。本日更新されトレンド入りし関連 Spaces デモも同日公開。高品質な画像生成・編集を可能にするモデルとして急速に注目を集めている。

- **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**（161 likes）— Supertone が公開した 31 言語対応のオンデバイス TTS モデル。クラウド不要で多言語テキストから高品質な音声を生成できる設計で、エッジ AI 音声合成の実用水準として注目される。IoT・組み込み・オフライン環境での音声 AI 展開に適した選択肢だ。

---

## 所感

今日のキーワードは「普及」と「根本診断」だ。Anthropic の Claude for Small Business は大企業向け製品に続き中小企業へと市場を広げる動きで、AI を"全企業の標準インフラ"とする競争が次のフロンティアに入ったことを示している。一方 arxiv では「サンプリングを増やしても多様性は増えない」「二院制モデルで2つの LLM を隠れ状態レベルで結合できるか」と、LLM の基本的な動作原理を問い直す論文が目立った。実装の最前線が高速で動くほど、理論的な「なぜこうなるのか」を掘り下げる研究の価値も増す——その両輪が同時に回り続けているのが 2026年春の AI 研究の特徴だ。
