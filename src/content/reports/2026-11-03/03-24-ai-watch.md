---
title: "AI Watch（2026年11月3日）"
date: "2026-11-03T03:24"
category: "analysis"
summary: "OpenAI が日常タスク評価の LifeVal、Git 互換基盤 Pando、バグ報奨金増額など7本を発表。CoT 監視や エージェント診断の論文が目立つ"
tags: ["openai", "benchmark", "agents", "security", "chain-of-thought", "open-source"]
---

## 今日のハイライト

- **OpenAI が 11/2、日常タスクの達成度を測るベンチマーク LifeVal を発表した。** RSS の説明によると、保育先探し、家計管理、行政手続きといった生活上のタスクを AI がどれだけ手伝えるかを測る。記事本文は取得できないため、評価方法や結果の数値は未確認。
- **OpenAI が同日、Codex が可能にする開発規模に耐える Git 互換バックエンド Pando の構築事例を公開した。** コーディングエージェントの普及でリポジトリ基盤側の負荷が変わってきていることがうかがえる。あわせてセキュリティ関連の発表も3本あった（下記）。

## 企業動向

Anthropic（直近は 10/28）と Google DeepMind（直近は 10/30 の英国計画審査の記事）に過去24時間の新着はない。OpenAI が 11/2 に7本を出した。解説は RSS の説明の範囲に留める。

- **[LifeVal](https://openai.com/index/lifeval)** (OpenAI, 11/2) - 保育先探し、家計管理、行政書類など、日常生活のタスクを AI がどれだけ完了できるかを測る新しいベンチマーク。専門的な知識問題ではなく、生活場面での実用性を測る方向。
- **[Scaling Git at OpenAI](https://openai.com/index/scaling-git-at-openai)** (OpenAI, 11/2) - Codex によって可能になる開発規模を前提に作った、Git 互換のバックエンド Pando の紹介。エージェントによる大量のコミットやブランチ操作が従来の Git 運用の想定を超えつつあることを示す。
- **[Rewarding defenders with bigger bug bounties](https://openai.com/index/rewarding-defenders-with-bigger-bug-bounties)** (OpenAI, 11/2) - Security Bug Bounty の報酬を引き上げ、報告の質、継続的な協力（loyalty）、優先キャンペーンに対するボーナスを新設する。
- **[Preparing our next security sprint to harden OpenAI](https://openai.com/index/preparing-our-next-security-sprint-to-harden-openai)** (OpenAI, 11/2) - Cathedral Systems と組み、AI を使って自社の防御を試験・強化する次の社内セキュリティスプリントを準備している。
- **[Introducing the Grid Protectors Program](https://openai.com/index/grid-protectors-program)** (OpenAI, 11/2) - 電力事業者と協力し、将来の計算拠点が電力網の信頼性を支え、消費者の電気料金を守るようにするプログラム。
- **[Qodo builds context into AI code review with Codex](https://openai.com/index/qodo-codex-plugin)** (OpenAI, 11/2) - Qodo が社内知識とコーディング規約を Codex に持ち込み、プルリクエスト前に複数リポジトリにまたがる P0 級の問題を見つけられるようにする事例。
- **[OpenAI appoints Dan Driscoll as Senior Counselor for National Security Modernization](https://openai.com/index/dan-driscoll-joins-openai)** (OpenAI, 11/2) - 国家安全保障の近代化、サイバーレジリエンス、同盟国との連携に関する責任ある AI について助言する人事。

## 注目論文

arxiv RSS（cs.AI / cs.CL、11/2 バッチ）から、既出 ID を除いて選出。確認したのは abstract の冒頭のみ。

- **[The First Few Tokens Matter: Understanding Chain-of-Thought Controllability](https://arxiv.org/abs/2610.40939)** (Van Deventer, Troitskii, Ruis, 11/2) - CoT 監視が有効なのは、現在のモデルが推論で何を言葉にするかを制御しにくいことが一因とされる。その制御可能性を、推論の最初の数トークンという観点から調べる。
- **[Opening the Box Changes the Cat: LLMs Detect Chain-of-Thought Monitoring - What now?](https://arxiv.org/abs/2610.40946)** (Jalilifard, Raimundo, Rocha, 11/2) - LLM が自分の思考過程を監視されていることを検知できるという問題設定。安全性監視の前提を揺るがすので、上の論文と合わせて読むと CoT 監視の限界が見える。
- **[ReplayRCA: Measuring Post-hoc Diagnosis and Live Oversight of Agent Failures by Counterfactual Replay](https://arxiv.org/abs/2610.41025)** (Canale, Soulis ら, 11/2) - 複数ステップのタスクで失敗したエージェントについて、別のモデルが決定的な誤りを特定し、1回の操作で直せるかを反事実リプレイで採点するベンチマーク。
- **[BlindToChange: AI Agents Can Find Changes When Asked But Do They Look When Needed?](https://arxiv.org/abs/2610.41435)** (Phukan, Goyal, Pruthi, 11/2) - Web を深く検索できるエージェントでも、最近の出来事が答えに反映されているとは限らないことを示す。聞かれれば変化を見つけられるが、必要な場面で自分から調べに行くかが問われる。
- **[When Should AI Agents Ask? Clarification Requests Under Limited Human Attention](https://arxiv.org/abs/2610.41129)** (Wang, Liu, Wang ら, 11/2) - 1人が複数のエージェントを並行して監督する状況で、エージェントがいつ人に確認を求めるべきかを、人の注意が限られる前提で定式化する。

## オープンソース・モデル

DeepSeek-V4.1-Flash-1017、LFM3-1.7B、LFM3-VL-2B、Unlimited-OCR-2、idol、Pika-H3-Flex、Mage-VL-Cowork などは掲載済みのため省略した。今日は新規性の高い候補が少なく、補充枠が中心。

- **[LiquidAI/d1-2B](https://huggingface.co/LiquidAI/d1-2B)** (公開9日・補充枠) - LFM3-VL-2B を土台にした、文章・画像・動画向けの「決定モデル」。トークンを生成せず、1回の順伝播で確率付きの型付き回答を返し、H100 で 1 回あたり 5.7 ms としている。テキストや数値・日付のスパン抽出、物体の位置特定、区間付きの量の推定にも対応する。
- **[Zhanli-Li/DataWorld-Bench](https://huggingface.co/datasets/Zhanli-Li/DataWorld-Bench)** (dataset, 公開20日・補充枠) - エージェントによる、証拠に基づくデータ分析を測る100タスクのベンチマーク。各タスクは複数システムの生データが入った業務の世界を与え、結論を厳格な LLM 判定者がタスク別ルーブリックで採点する。
- **[ccore/ThreeJS-3D-Scenes](https://huggingface.co/datasets/ccore/ThreeJS-3D-Scenes)** (dataset, 公開6日) - プロンプト、完全な思考トレース、HTML/JavaScript の応答を組にした 4,146 件の Three.js 3D シーン例。コードと思考トレースは MiniMax で生成したと記載されている。

## ベンチマーク・リーダーボード

LMArena Text Overall は 10/28 公開版から変動なし（1位 Gemini 4 Carbon 1540、2位 Gemini 4 Argon 1529、3位 Claude Opus 5.5 1516）。

## 所感

OpenAI の発表が、モデル性能そのものよりベンチマーク（LifeVal）、開発基盤（Pando）、セキュリティ（報奨金、スプリント）といった周辺に集中していて、エージェント時代の運用面が主戦場になっている。論文も CoT 監視の限界やエージェントの失敗診断、確認のタイミングなど、監督する側の道具立てが続いた。生活タスクを測る LifeVal のように、評価が知識問題から実世界の完遂度へ移る流れも気になる。
