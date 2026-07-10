---
title: "AI Watch（2026年7月11日）"
date: "2026-07-10T23:08"
category: "analysis"
summary: "MeituanのLongCat-2.0（1.6兆パラメータ）とTencentのHy3が中国発オープンウェイトモデルとしてHFトレンド入り。arxivでは自己改善サーベイやエージェント記憶・監査系の論文が続いた。"
tags: ["llm", "open-source", "agents", "safety", "benchmark", "moe"]
---

## 今日のハイライト

**中国発の超大規模オープンウェイトMoEモデルが相次いでHFトレンド入り: Meituan「LongCat-2.0」（1.6兆パラメータ）とTencent「Hy3」（295B）**

Meituan（美団）のLongCatチームが総パラメータ1.6兆・活性化パラメータ約480億のMoEモデル「[LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)」を公開。独自のAI ASICスーパーポッド上で35兆トークン超を学習し、ロールバックなしで完走したとしている。同時期にTencentも295B（活性化21B）のMoEモデル「[Hy3](https://huggingface.co/tencent/Hy3)」を公開しており、いずれもコーディング・エージェントタスクを重視した設計。フロンティアラボの新モデル発表が一服する中、中国テック大手のオープンウェイト競争が引き続き活発であることを示す一日だった。

**arxiv、1,250本の論文を横断した「AIの再帰的自己改善」サーベイを公開（7/10）**

[Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663) が公開。"self-refine"・"self-reward"・"self-play"・"self-evolve"といった曖昧に使われがちな用語群を、AIが「何を」改善するのか（挙動・方策・評価器・研究プロセスそのもの）という軸で整理し直した大規模サーベイ。エージェントが自らのハーネスをデプロイ後に改変したり、AI研究そのものを行ったりする事例が増える中、概念整理そのものが注目に値する内容。

---

## 企業動向

- **[How Deutsche Telekom is rewiring telecommunications with AI](https://openai.com/index/deutsche-telekom)** (OpenAI, 7/10) — ドイツテレコムがChatGPT Enterpriseを通信インフラの運用・顧客対応にどう組み込んでいるかを紹介する事例記事。エンタープライズ導入事例の発信を継続。
- **[UST is bringing Claude to physical AI](https://www.anthropic.com/news/ust-claude)** (Anthropic, 7/9) — ITサービス企業USTがClaudeをロボティクス・物理AI分野の開発に活用する事例。ソフトウェアエージェントに留まらず「物理世界に作用するAI」への展開を扱った事例発信。

Google DeepMind: ブログ一覧に新規記事は確認できず（表示される記事はいずれも6月付までで既報）。

---

## 注目論文

- **[Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops](https://arxiv.org/abs/2607.07663)**（Chen, Wang, Qu / 7/10） — 上記ハイライト参照。2024〜2026年の1,250本のarxiv論文を横断し、AIの自己改善を「何を改善するか」の軸で分類し直した大規模サーベイ。

- **[Institutional Red-Teaming: Deployment Rules, Not Just Models, Causally Shape Multi-Agent AI Safety](https://arxiv.org/abs/2607.07695)**（Chen / 7/10） — マルチエージェントAIの安全性評価において、エージェントやタスクを固定したままデプロイメントルールだけを変えて集団行動への因果効果を測る「制度的レッドチーミング」を提案。228文脈・5種のルール・33,924ゲームからなるベンチマークIABench-CAで検証し、デプロイルールの設計がモデル自体と同じくらい集団行動を左右することを示した。

- **[Token-Flow Firewall: Semantic Runtime Auditing for Persistent AI Agents](https://arxiv.org/abs/2607.08395)**（Wang, Zhang, Zhang, Guo, Cheng / 7/10） — 常駐型AIエージェントでは、有害な内容がメモリ更新・ツール引数・取得ファイル・コンポーネント間通信といった自然言語のトークンフローを通じて持続的に伝播しうると指摘。単発の会話より攻撃対象面が大きい常駐エージェントに対し、意味論的なランタイム監査で異常なトークンフローを検知する枠組みを提案しており、7/9報告のメモリポイズニング研究の防御側にあたる内容。

- **[Remember When It Matters: Proactive Memory Agent for Long-Horizon Agents](https://arxiv.org/abs/2607.08716)**（Wu, Zhang, Zhou, Wang, Peng, Li, Fan, Zhao / 7/10） — 長期タスクでは判断に必要な情報が長い軌跡の中に埋もれ、コンテキストウィンドウから押し出されて意思決定に反映されない「行動状態の減衰」が起きると指摘。行動エージェントとは別に、記憶を能動的に介入させる専用の「記憶エージェント」を並走させる設計を提案している。

- **[When the Judge Changes, So Does the Measurement: Auditing LLM-as-Judge Reliability](https://arxiv.org/abs/2607.08535)**（Yang, Hou, Yang / 7/10） — LLM-as-judge方式では候補応答が同じでも評価器を差し替えるだけでスコアが変動しうる「評価器交換の曖昧さ」を測定妥当性の問題として扱った研究。Qwen3の1.7B→32Bへのスケールアップと、MiniMax M2系APIの世代更新という2つの実務的なアップグレード経路を比較したところ、判定器のアップグレードは単純に互換ではないと結論づけており、ここ数日続くベンチマーク信頼性を巡る議論にさらに一石を投じる内容。

---

## オープンソース・モデル

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** — 上記ハイライト参照。総パラメータ1.6兆・活性化約480億のMoEモデル。独自のLongCat Sparse Attentionと1Mコンテキスト学習により長期タスク・コーディング・エージェント性能を強化し、Claude Code等の主要ハーネスとの連携も謳う。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — 上記ハイライト参照。295B（活性化21B）のMoEモデルで、4月のHy3 Previewからポストトレーニングをさらに拡張。コンテキスト長256K、Apache-2.0ライセンスで公開。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Baiduが公開したビジョン言語OCRモデル。長尺文書を一度のパスで解析する「one-shot long-horizon parsing」を掲げ、多言語対応。arxiv論文（2606.23050）付きで、中国テック大手による専門タスク特化モデルの公開が続く一例。

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — Qwen3.5/3.6系モデルのチャットテンプレート（Jinja）に潜むツールコール周りの不具合をコミュニティが修正・再配布したリポジトリ。地味だが、公式リリース直後のオープンモデルに実務者が独自にパッチを当てて回している実態を示す一例。

---

## ベンチマーク・リーダーボード

LMSYS/LMArenaリーダーボード（`lmarena-ai/arena-leaderboard`）は本日もHTTP取得は成功したが、内部データの最終更新は引き続き2026年2月21日のままで、直近の順位変動は反映されていない。実質的に静的スナップショットであるため、本日も順位変動の報告は見送る。

---

## 所感

本日はOpenAI・Anthropic・DeepMindいずれも新モデルの発表はなく、企業動向は事例紹介にとどまった一方、Hugging Face上ではMeituanの1.6兆パラメータ「LongCat-2.0」とTencentの295B「Hy3」という2つの大型オープンウェイトMoEモデルが同時期にトレンド入りし、中国テック大手によるオープンモデル競争の勢いが引き続き強いことを印象づけた。arxivでは「自己改善」という言葉の使われ方そのものを1,250本の論文横断で整理し直すサーベイが出た一方、常駐エージェントのトークンフロー監査・長期記憶の能動的介入・LLM-as-judgeの評価器交換問題という3本は、いずれも「エージェントが長時間・長期記憶を持って動くこと」自体が新しいリスクと評価の課題を生んでいるという、ここ数日続く縦糸をさらに具体化する内容だった。
