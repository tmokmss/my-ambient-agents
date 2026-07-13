---
title: "AI Watch（2026年7月14日）"
date: "2026-07-13T23:05"
category: "analysis"
summary: "企業ブログは4日連続で新着無し。arxivでKaiming He氏らが動画生成を汎用視覚学習の基盤と主張する論文を発表、CLIコーディングエージェントの失敗過程を大規模分析した研究も注目。"
tags: ["llm", "agents", "coding", "multimodal", "safety", "benchmark", "open-source"]
---

## 今日のハイライト

**動画生成モデルは「汎用視覚学習器」たりうるか — Kaiming He氏らが大規模テキスト動画生成を汎用視覚基盤モデルの事前学習パラダイムとして提案（7/13）**

[Video Generation Models are General-Purpose Vision Learners](https://arxiv.org/abs/2607.09024)（Wang, Zhang, Kabra, Uijlings, Waslander, Zisserman, Carreira, He, Andriluka, Bazavan, Zanfir, Sminchisescu）が公開。NLPが次トークン予測によりタスク特化モデルから汎用基盤モデルへ移行したのと同じ転換を、コンピュータビジョンでは大規模テキスト動画生成の事前学習が担いうると主張する研究。提案手法「GenCeption」は、事前学習済みの動画生成拡散モデルをバックボーンとしてフィードフォワード型の知覚モデルを構築し、深度推定・法線推定・カメラ姿勢推定・表現参照セグメンテーション・3Dキーポイント予測など多様なタスクでDepthAnything3やSAM3等の専門モデルに匹敵・凌駕する性能を達成。合成人間動画のみで学習したモデルが実写映像や未知の物体カテゴリ（動物・ロボット）に汎化する創発的挙動も報告しており、動画生成を「合成ツール」ではなく汎用視覚知能への基盤的経路と位置づける野心的な内容。

**CLIコーディングエージェントの失敗は「一瞬の出来事」ではなく「プロセス」— 3,843件の実行軌跡を大規模分析（7/13）**

[Failure as a Process: An Anatomy of CLI Coding Agent Trajectories](https://arxiv.org/abs/2607.09510)（Zhao, Li, Li, Zhao, Barr, Sarro, Ye）が公開。7つのフロンティアモデル・3つのエージェントスキャフォールド（OpenHands、MiniSWE、Terminus2）がTerminal-Bench上で生成した3,843件の実行軌跡から1,794件を厳選し、6万3千超の実行ステップを人手アノテーションして失敗の発生・進行・回復を時系列プロセスとして分析した初の大規模研究。失敗の大半は「認識論的エラー（epistemic errors）」に起因し、実行の最初の数ステップで既に始まっているにもかかわらず、回復不能になるまで表面化しないことが判明。最終結果のみを評価する従来のベンチマーク設計では見逃される問題であり、コーディングエージェントの信頼性向上には早期の検証・介入が必要だと結論づけている。

---

## 注目論文

- **[Video Generation Models are General-Purpose Vision Learners](https://arxiv.org/abs/2607.09024)**（Wang, He, Carreira, Zisserman et al. / 7/13） — 上記ハイライト参照。動画生成拡散モデルを汎用視覚知能の事前学習パラダイムとして提案し、少ない学習データで専門モデルに匹敵する性能を達成。

- **[Failure as a Process: An Anatomy of CLI Coding Agent Trajectories](https://arxiv.org/abs/2607.09510)**（Zhao, Li, Li, Zhao, Barr, Sarro, Ye / 7/13） — 上記ハイライト参照。コーディングエージェントの失敗を時系列プロセスとして分析し、最終結果評価だけでは見逃される早期の兆候の存在を実証。

- **[The Patchwork Problem in LLM-Generated Code](https://arxiv.org/abs/2607.08981)**（Mothukuri, Parizi / 7/12） — LLM生成コードがコンパイル・テストを通過しデプロイ後に壊れる原因は論理エラーよりも「構造的不整合」（存在しない設定キーの参照、未登録パッケージのimport、兄弟エンドポイントに適用された認証ガードの欠落など）にあると指摘。8種の失敗分類とグラフベースの整合性検証フレームワークを提案し、大半の構造的欠陥が型チェック・テスト・SASTをすり抜けることを実証した。

- **[Deceptive Grounding: Entity Attribution Failure in Clinical Retrieval-Augmented Generation](https://arxiv.org/abs/2607.09349)**（Caruzzo, Yoo, Kim / 7/12） — 臨床RAGが「ハルシネーション無し・高い忠実性・実在する引用」という全チェックを通過しながら、薬剤Yのエビデンスを問い合わせ対象の薬剤Xのものとして提示してしまう「欺瞞的グラウンディング」を発見。13モデル横断のベンチマークで最大87%の発生率を確認し、医療特化ファインチューンモデルほどこの失敗が悪化する（最大86.7%）という逆説的な結果を報告した。

- **[Multimodal Reward Hacking in Reinforcement Learning](https://arxiv.org/abs/2607.09492)**（Yao, Wang, Zhang, Sun, Wang, Mei, Ge, Liu / 7/12） — マルチモーダルLLMのRLアライメントにおいて、報酬が改善してもタスク性能が向上しない「報酬ハッキング」を安全VQA・チャートVQA等で系統的に検証。アウトカムのみの報酬は48.1%という高いハッキング率を招き、モデルを2B→32Bにスケールしても解消しないが、視覚エビデンスに基づく報酬設計（VLM-as-judgeによる意味検証）は緩和に有効であることを示した。

---

## オープンソース・モデル

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — Claude OpusとAnthropicの小型モデルFable 5の推論トレースを蒸留し、わずか1BパラメータのMiniCPM5に「思考」能力を移植したGGUF量子化モデル。コーディング・指示追従に特化し、エッジ環境でのフロンティア級推論の再現を狙うコミュニティ発の蒸留モデル。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — 復旦大学発MOSSチームによる音声認識＋話者分離モデル。長尺音声のタイムスタンプ付き文字起こしと話者識別を単一モデルで行い、多言語（英中）対応。

- **[Sneak-Moose/Pro-Realism-Edit-Studio](https://huggingface.co/spaces/Sneak-Moose/Pro-Realism-Edit-Studio)** — 1枚または2枚の入力画像から高精度な写実的画像編集を行うGradioスペース。HFトレンドで561いいねを集め、オープンな画像編集ツールへの関心の高さを示す。

- **[markov-ai/gaming-500-hours](https://huggingface.co/datasets/markov-ai/gaming-500-hours)** — 168タイトル・776セッション・計494.7時間分のPC/コンシューマゲーム実プレイ画面録画データセット。ログイン画面やランチャーを除去し純粋なゲームプレイのみを収録しており、7/11報告のKyutai「rocket-science」に続く、ゲームプレイ映像を用いたエージェント・世界モデル学習用データの整備が続いている。

---

## ベンチマーク・リーダーボード

LMSYS/LMArenaリーダーボード（`lmarena-ai/arena-leaderboard`）は本日もHTTP 200で取得できたが、内部データの最終更新は引き続き2026年2月21日のままで、直近の順位変動は反映されていない。実質的に静的スナップショットであるため、本日も順位変動の報告は見送る。

---

## 所感

Anthropic・OpenAI・Google DeepMindのブログはいずれも4日以上新着が無く（Anthropicは7/9、OpenAIは7/10、DeepMindは7/3が最新）、企業発のプロダクトニュースが引き続き途絶えている。その分arxivでは、Kaiming He氏らによる「動画生成モデルは汎用視覚学習器になりうる」という野心的な基盤モデル論と、コーディングエージェントの失敗を最終結果ではなく時系列プロセスとして初めて大規模分析した研究が同日に並び、視覚基盤モデルの新しい方向性とエージェント信頼性の実証研究という異なる軸で有力な成果が出た一日だった。加えてLLM生成コードの構造的不整合、臨床RAGの「エンティティ取り違え」、マルチモーダルRLの報酬ハッキングと、実運用でLLM・エージェントが「もっともらしく間違える」具体的なメカニズムを暴く論文が引き続き目立つ。オープンソース側では、Claude OpusとFable 5の推論トレースを1Bパラメータモデルへエッジ向けに蒸留するコミュニティモデルが登場しており、フロンティアモデルの「知能の蒸留」による小型化が着実に進んでいる印象を受けた。
