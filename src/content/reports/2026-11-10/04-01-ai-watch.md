---
title: "AI Watch（2026年11月10日）"
date: "2026-11-10T04:01"
category: "analysis"
summary: "Anthropic が Claude Fable 5.2 / Mythos 5.2 を発表。OpenAI は ChatGPT Enterprise の AWS Marketplace 提供と Control Room、HF では Kimi K3.1 Pro（2.8T MoE）が上位"
tags: ["llm", "anthropic", "openai", "open-source", "agents", "benchmark"]
---

## 今日のハイライト

- **Anthropic が Claude Fable 5.2 と Claude Mythos 5.2 を発表した（11/9）。** 同社は「困難な技術的業務向けの最も高性能なモデル」と位置づけ、コーディング・金融・科学で新たな水準を示したとしている。
- **OpenAI が ChatGPT Enterprise の AWS Marketplace 提供を開始し（11/9）、研究基盤のワークロードを監視・即時停止する「Control Room」も公開した。** 調達面での企業導入の障壁を下げる動きと、安全・セキュリティ面の運用開示が同日に出た。

## 企業動向

- **[Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/news/claude-fable-and-mythos-5-2)** (Anthropic, 11/9) - 概要文は「daunting technical work（骨の折れる技術的業務）向けの最も高性能なモデルで、コーディング、金融、科学で新たな水準を打ち立てた」というもの。一覧ページから取れた情報はここまでで、ベンチマークの数値や価格は確認できていない。
- **[ChatGPT Enterprise now available in AWS Marketplace](https://openai.com/index/chatgpt-enterprise-aws-marketplace)** (OpenAI, 11/9) - ChatGPT Enterprise を AWS Marketplace 経由で購入でき、既存の AWS の購買・請求の枠組みで調達を簡素化できる。
- **[Control Room: A central system to track and stop model workloads across our research infrastructure](https://openai.com/index/control-room)** (OpenAI, 11/9) - 研究インフラ全体のモデルのワークロードを追跡し、安全上・セキュリティ上の懸念が出たときに迅速に止められる中央システムの紹介。
- **[CodeRabbit scales agentic software development and ships 20x more](https://openai.com/index/coderabbit-codex-daybreak)** (OpenAI, 11/9) - CodeRabbit は OpenAI のモデルで AI 生成コードを統制・検証し、Codex を使って同じ人数のエンジニアリングチームで 20 倍のソフトウェアを出荷しているという事例紹介。
- **[Kuken Industries searches 70 years of drawings in minutes](https://openai.com/index/kuken)** (OpenAI, 11/9) - Kuken Industries は OpenAI API で冷却塔の 70 年分の図面を検索できるようにした。修理に必要な図面を探す時間が約 1 時間から 4.5 分になったという。
- **[Teaching AI to build scientific models](https://www.anthropic.com/news/teaching-ai-to-build-scientific-models)** (Anthropic, 11/6) - 前々回までに掲載済みのため、タイトルの紹介のみにとどめる。

## 注目論文

arxiv RSS は 11/9（月）発表のバッチ。既出 ID は除外して選出。

- **[Aspect-wise Pairwise Tournaments for Test-Time Selection](https://arxiv.org/abs/2611.08640)** (Guan, Du, 11/9) - テスト時計算のスケーリングで広く使われる best-of-n サンプリングの候補選択を、観点ごとのペアワイズ・トーナメントで行う手法。選択方法そのものを工夫する方向の研究である。
- **[Pdb or Not to Be: Comparing Debugging Interfaces With Pass$_{X}$@$k$](https://arxiv.org/abs/2611.08666)** (Magnuson, Kitanidis, Lee ら, 11/9) - 人間のソフトウェア開発では対話型デバッガが不可欠なのに、コーディングエージェントは bash を使った「編集・実行・観察」ループにほぼ頼っている。この論文はデバッグのインターフェースを比較する。
- **[Cancellation Is Not Enough: What Retries Leave Behind in an Overloaded LLM Engine](https://arxiv.org/abs/2611.08684)** (Zhang, Wang, 11/9) - クライアントやプロキシがタイムアウトした呼び出しを再試行すると、一時的な過負荷の後も推論エンジンが回復できなくなることがある。キャンセルだけでは不十分だと論じる、LLM 推論基盤の運用寄りの論文。
- **[From Procedures to Permissions: Learning Precise Subagent Authorization from Agent Skills](https://arxiv.org/abs/2611.08905)** (Yu, Ding, Zhang ら, 11/9) - 複数エージェントが分担する場面では、誰がどの作業をするかだけでなく、どの権限を持つかを決める必要がある。この論文は Agent Skills の手順記述から、サブエージェントに与える権限を精密に学習する。
- **[Rethinking Agent Trajectory Compression: A Workflow-Aware Perspective](https://arxiv.org/abs/2611.08865)** (Zhuang, Liu, Ren ら, 11/9) - 長期タスクのエージェントは多段のツール呼び出しで実行履歴が膨らみ続ける。履歴の圧縮を、ワークフローの構造を踏まえて見直す提案。

## オープンソース・モデル

- **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)** (公開7日) - オープンウェイトのネイティブ・マルチモーダルなエージェント向けモデルで、Moonshot は「3T 級で最も高性能」としている。総パラメータ 2.8T・活性 104B の MoE で、コンテキスト長は 100 万トークン。Kimi K3 に大規模な強化学習を施し、コーディング、3D 生成、金融リサーチ、事実性などを改善したと README に書かれている。
- **[ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview)** (公開6日) - Ricursive Intelligence の 65B・dense Transformer で、12 兆トークンで事前学習し、コンテキストは最大 100 万トークン（Apache-2.0）。同社の報告では TerminalBench 2.1 で 80.52 を記録し、Reflection Beam 501B（80.1）など大型の米国製オープンウェイトを上回るとしている。Olmo 3 を出発点に学習レシピを改良し、コードの計算効率を Olmo 3 の系列比で 16 倍にしたという。
- **[tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16)** (公開2日) - Qwen3.8-27B 向けの推測的デコーディング用ドラフトモデル。ドラフトトークンを並列に生成し、各層が予測済みの前の位置の特徴を隣の位置に渡す。README の評価では、受理長が DFlash2 より GSM8K で 5.69 から 7.20 へ（T=0）、HumanEval で 4.87 から 5.71 へ伸びた。
- **[Angais/pixel-art-atlas-1.4m](https://huggingface.co/datasets/Angais/pixel-art-atlas-1.4m)** (dataset, 公開3日) - 英語キャプション付きの合成ゲームスプライト 1,409,404 枚（6,194 の学習対象）。各スプライトは背景透過の 16×16 画像で、テキストプロンプトから生成されている。

## ベンチマーク・リーダーボード

LMArena Text Overall（公開日 11/8）の上位は以下のとおり。

1. Gemini 4 Carbon (High) 1539
2. Gemini 4 Argon (High) 1530
3. Claude Fable 5.1 (Max) 1513（Claude Opus 5.5 (High) も 1513）
5. Claude Opus 5 (Max) 1506
6. Muse Wonder (Max) 1504（Meta）

Google の Gemini 4 Carbon（10/28 発表）が首位で、2 位との差は 9 ポイント。今回の集計に Claude Fable 5.2 / Mythos 5.2 はまだ入っていない。

## 所感

Anthropic は 5.2 世代を、OpenAI は Control Room のような運用・安全面の開示と AWS Marketplace という調達経路の整備を出しており、モデルの性能競争と並んで「どう安全に動かし、どう買うか」の整備が進んでいる。オープンウェイト側では Kimi K3.1 Pro の 2.8T MoE と、Ripple-65B のように 65B の dense モデルでコーディングエージェントの性能を狙う動きが同時に出ており、規模の方向が二極化している。論文でもコーディングエージェントの運用（デバッグ手段、履歴圧縮、権限）を扱うものが目立った。
