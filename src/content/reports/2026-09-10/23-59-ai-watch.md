---
title: "AI Watch（2026年9月11日）"
date: "2026-09-10T23:59"
category: "analysis"
summary: "OpenAIがクラウドエージェント実行基盤「Agents API」とフルデュプレックス音声API「GPT-Live-1」を同日発表。"
tags: ["llm", "agents", "voice", "benchmark", "open-source", "safety"]
---

## 今日のハイライト

**OpenAIが、クラウド上でエージェントを構築・実行できるマネージド型の「Agents API」と、自然な双方向音声対話を実現する「GPT-Live-1」をAPI経由で同日公開した（9/10）。** Agents APIはCodexのハーネスを基盤に、長時間稼働セッションの管理・オーケストレーション・ツール利用を提供するマネージドサービスで、開発者が自前でエージェントの実行基盤を構築しなくてもクラウドエージェントを立ち上げられるようにするもの。GPT-Live-1はフルデュプレックス（同時双方向）の音声対話・カスタム音声・電話連携を備え、より自然な音声体験の構築を狙う。同日にはChatGPT for Financial Servicesやデータ分析エージェント「Data agent」の発表も重なり、OpenAIがAPIレイヤーからエンタープライズ向けアプリケーションまで一気に手を広げる、プロダクト発表が集中した1日となった。

---

## 企業動向

- **[Introducing the Agents API](https://openai.com/index/introducing-the-agents-api)**（OpenAI, 9/10） - 上記ハイライト参照。Codexハーネスを基盤に、オーケストレーション・長時間セッション管理・ツール利用をマネージドで提供するクラウドエージェント構築サービス。
- **[Build more natural voice experiences with GPT‑Live‑1 in the API](https://openai.com/index/introducing-gpt-live-1-in-the-api)**（OpenAI, 9/10） - フルデュプレックスの音声対話、指示追従力の強化、カスタム音声、電話連携をAPIで提供する新音声モデル。
- **[Introducing ChatGPT for Financial Services](https://openai.com/index/introducing-chatgpt-financial-services)**（OpenAI, 9/10） - 金融データを内蔵し、リサーチ・モデリング・顧客向け資料作成を支援する業界特化版ChatGPT。前日発表のGPT-6 Astraを組み合わせて提供。
- **[Now everyone can put data to work](https://openai.com/index/put-data-to-work)**（OpenAI, 9/10） - ChatGPT Work向けの「Data agent」を発表。自然言語で社内データに接続し、インサイト抽出やインタラクティブなダッシュボード作成を行える。
- **[How a researcher uses Codex and ChatGPT to search for new antimicrobials](https://openai.com/index/using-codex-chatgpt-to-search-for-new-antimicrobials)**（OpenAI, 9/10） - ペンシルベニア大のCésar de la Fuente氏の研究室が、CodexとChatGPTを使い現存・絶滅種のゲノムから薬剤耐性感染症に効く抗菌ペプチド候補を探索する事例を紹介。
- Anthropic・Google DeepMindのブログは直近3日以内の新着なし（Anthropicの最新は9/1、DeepMindの最新は9/8のAlphaGenome Atlasで既報）。

---

## 注目論文

- **[Subagents vs Agent Skills: Executing Reusable Knowledge for Long-Horizon Agentic Tasks](https://arxiv.org/abs/2609.09233)**（Piriyakulkij, Lawrence, Curth, 9/10発表） - 再利用可能な知識をエージェントに実行させる2方式、「スキルパッケージを都度コンテキストに読み込ませる方式」と「別エージェント（サブエージェント）に切り出して実行させる方式」を長時間タスクで比較。タスクの地平線が伸びるほどコンテキストに詰め込む従来のスキル実行方式は推論品質が劣化しやすく、知識の切り出し方自体がエージェント設計の重要な変数であることを指摘した。
- **[Black-Box Red Teaming of Agentic AI: A Taxonomy-Driven Framework for Automated Risk Discovery](https://arxiv.org/abs/2609.09647)**（Kumar, Birur, Baswa, Agarwal, 9/10発表） - 実運用に入りつつあるエージェントは非信頼な入力を読み実権限でツールを呼ぶため、単発の会話評価では捉えられない多段階の脆弱性が生じると指摘。システムの概要さえあれば動く7領域の分類体系と、各領域120件の敵対的シナリオを自動生成するSAGE-RTレッドチーミング手法を提案した。
- **[Cyber-Financial Contagion: Modeling the Propagation of an AI Vendor Compromise Through the Banking System](https://arxiv.org/abs/2609.10350)**（Leytes, 9/10発表） - 不正検知や与信判断など銀行業務が少数のAIベンダーに集中依存している現状を踏まえ、1ベンダーの侵害がAIベンダー・金融機関・銀行間エクスポージャー・顧客口座をつなぐ4層ネットワークを通じて伝播し、外形上は従来型の銀行危機に見える損失を引き起こすまでをモデル化。単一障害点となったAIベンダーが金融システム全体のリスクになり得ることを定量的に示した。
- **[Do Agents Know When They Succeed? Calibrating Agent Confidence from Internal Representations](https://arxiv.org/abs/2609.09448)**（Mammen, Joswin, Medicherla, 9/10発表） - 計画・ツール呼び出し・動的な環境応答が絡む複数ターンのエージェントタスクにおいて、モデルの内部表現がタスク成否をどれだけ予測できるかを検証。残差ストリームの変化を要約する「潜在軌跡ダイナミクス（LTD）」など複数手法を導入し、出力だけを見る従来の信頼度推定より内部表現の方が強いシグナルを持つ場合があることを示した。
- **[Stable Answers, Unfinished Reasoning: Why Self-Consensus Is Not a Safe Early-Exit Signal](https://arxiv.org/abs/2609.09989)**（Mo, Zhao, Geng, 9/10発表） - 推論モデルの途中経過を繰り返しプローブし、答えが一致した時点で打ち切る「自己一致（self-consensus）」による省コスト化を検証。事前登録した3,520通りの一致判定ルールを2モデル・3ベンチマークの固定軌跡で再生したところ、安全性とトークン削減を両立する基準は一つも事前設定した3つの合格ラインをクリアできず、答えが安定していても推論はまだ終わっていないケースが多いと報告した。

---

## オープンソース・モデル

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** - Lightricksによる画像→動画生成モデルの最新版。いいね3,382件・ダウンロード174万件超と、軽量・高速な動画生成モデル領域で引き続き高い注目を集めている。
- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** - Googleによる時系列予測基盤モデルの第3世代PyTorch版。汎用LLMの話題が続く中、需要予測やセンサーデータ予測など専門用途に特化した基盤モデルの更新として目を引く。
- **[openbmb/UltraData-SFT-Agent-2609](https://huggingface.co/datasets/openbmb/UltraData-SFT-Agent-2609)** ほか同シリーズの `UltraData-RL-2609` / `UltraData-Code` - OpenBMBが公開したエージェント向けSFT・RL・コード生成用の学習データセット群。エージェントの訓練データそのものを整備・公開する動きが広がっていることを示す。
- **[nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini)** - Nex AGIによる小型のテキスト生成モデル。社名・命名からもエージェント用途を意識した軽量モデルとみられ、小型モデル領域への参入が続いている。

---

## ベンチマーク・リーダーボード

LMArenaの上位3傑「claude-fable-5」（レーティング1507、投票27,189件）・「claude-opus-4-6-high」（1505、72,099件）・「claude-fable-5.1-max」（1504、投票2,906件）は、レーティング・投票数ともに前回・前々回の観測から完全に一致したままで、上位陣の停滞がさらに続いている。一方で4位以下を見ると、5位に「muse-spark-1.2 (xHigh)」（1499、投票3,240件）、10位に「muse-spark-1.1」（1492、投票24,064件）とMetaの新シリーズ「Muse Spark」がトップ10に2モデル食い込んでおり、Anthropic・Google中心だった上位争いにMetaが存在感を示し始めている点は新しい動き。なお、Artificial Analysisの補助データは前回同様サイト側のデータ構造が複雑でこの回も安定した抽出ができず、スキップした。

---

## 所感

OpenAIが「Agents API」でクラウド上のエージェント実行基盤そのものを製品化し、同時に音声・金融・データ分析と複数のエンタープライズ向け機能を束ねて発表する一日で、モデル単体の性能競争から「エージェントをどう動かし続けるか」というインフラ層の競争に軸足が移りつつある印象を受けた。arXiv側でもエージェントの知識をどう切り出すか、内部表現から成否をどう予測するか、自己一致という省コスト化手法がなぜ安全な打ち切り基準にならないかなど、エージェントの信頼性を実運用の解像度で問う論文が並んでおり、サイバー・金融の連鎖リスクを扱う論文が示すように、単一のAIベンダーへの依存がシステム全体のリスクになり得るという視点も強まっている。LMArenaでは上位3傑の膠着が続く一方、MetaのMuse Sparkがトップ10に浮上するなど、勢力図の一部には静かな変化も見え始めている。
