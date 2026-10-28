---
title: "AI Watch（2026年10月28日）"
date: "2026-10-28T01:10"
category: "analysis"
summary: "DeepMind が Genie 4 を発表、Anthropic は GSA との提携を拡大。MXFP4 での MoE 学習やコーディングエージェント評価の論文、Flint・MiniMax-M3.1-Flash など"
tags: ["llm", "agents", "world-model", "open-source", "benchmark", "anthropic", "deepmind"]
---

## 今日のハイライト

- **Google DeepMind が 10/27、世界モデルの新世代「Genie 4」を発表した。** RSS の説明は「リアルタイムのシミュレーションで前例のないリアリズムを実現する新しい世界モデル」の1文のみで、仕様や提供形態は未確認。
- **Anthropic が 10/27、GSA（米国一般調達局）との提携を拡大し、Claude を政府のあらゆる階層に提供すると発表した。** 一覧ページのタイトルのみの確認で、条件や価格は未確認。

## 企業動向

Anthropic はタイトル、OpenAI と DeepMind は RSS の説明に基づく。記事本文は取得できない。

- **[Genie 4: A new generation of world simulation](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/)** (Google DeepMind, 10/27) - 新しい世界モデル Genie 4 の発表。リアルタイムのシミュレーションで高いリアリズムを実現するとされる。詳細は未確認。
- **[Expanding our partnership with GSA to bring Claude to all levels of government](https://www.anthropic.com/news/expanding-partnership-gsa)** (Anthropic, 10/27) - GSA との提携拡大により、Claude を政府のあらゆるレベルに提供する。
- **[OpenAI expands partnership with Oracle to bring its apps to ChatGPT](https://openai.com/index/oracle-apps-in-chatgpt)** (OpenAI, 10/27) - Oracle との提携を拡大し、業務アプリケーションと AI エージェントを ChatGPT に取り込む。Oracle の新サービスにも OpenAI のモデルを使う。
- **[How Check Point accelerates vulnerability research with Daybreak](https://openai.com/index/check-point-daybreak)** (OpenAI, 10/27) - Check Point が OpenAI Daybreak で脆弱性調査を加速し、脆弱性情報を顧客向けの防御に素早く変える事例。
- **[Retell uses OpenAI models to help power 100M monthly calls](https://openai.com/index/retell-ai)** (OpenAI, 10/27) - 音声エージェントの Retell が月1億件の通話に OpenAI モデルを利用。GPT-6 Astra が同社の音声エージェントベンチマークで首位とされ、Codex により従業員1人あたりの年間売上run rateは160万ドルに達するという。

## 注目論文

arxiv cs.AI の RSS から選出（10/27 発表分）。abstract で確認した。

- **[Training an MoE LLM in MXFP4: How We Closed the Gap to BF16](https://arxiv.org/abs/2610.32229)** (Wang ら, 10/27) - GPT-OSS-20B（20B の MoE）を MXFP4 で学習するオープンソースのレシピ ALTO を提示する。1D/2D ブロック量子化やランダム化 Hadamard 変換などを組み合わせ、FP4 の量子化誤差による学習の不安定化を抑えて BF16 との差を詰める。
- **[SWE-Shift: Evaluating Coding Agents in Evolving Workspaces](https://arxiv.org/abs/2610.32196)** (Huang ら, 10/27) - 実行の途中でコードや依存関係、要件が変わる状況でのコーディングエージェントを評価するベンチマーク。同じ履歴から、変更なしの継続と、タスクに関わる更新を受ける継続を比べ、現在のタスクの完了と有効な作業の維持を求める。
- **[Permission to Retry: A Study of Authorization and Recovery in AI Agent Workflows](https://arxiv.org/abs/2610.31916)** (Marla ら, 10/27) - 権限が変わり外部への影響が不確かな状況で、耐久エージェントが処理を再開してよいかを調べる。チェックポイント、送信許可、外部効果の証拠、照合許可を別の義務として分け、336の履歴で検証する。
- **[Who Verifies the Tools? How Warped Formatters Mislead Agents and Their Verifiers](https://arxiv.org/abs/2610.32110)** (Jeffries ら, 10/27) - ツールの計算が正しくても、出力の整形で検索の上限や件数の制限が省かれると、エージェントと検証役が誤る問題。実際の RAG 研究システムで起きた事例を出発点に調べている。
- **[Understanding Communication Failures in Multi-Agent LLM Systems](https://arxiv.org/abs/2610.32060)** (Pitre ら, 10/27) - 失敗した3,211件の複数ラウンドの軌跡から、通信失敗の分類を作る。早すぎる収束、反対意見の無視、正しい少数意見の抑え込みなど、最終精度だけでは見えない失敗を扱う。

## オープンソース・モデル

- **[RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint)** (公開6日) - Recursive が出したコーディングエージェント向けの MoE。総パラメータ39.8B、トークンあたりの活性化は約2.5B。コードベースの調査、バグ修正、機能実装、テスト作成を想定し、ツールの複数ターン利用に対応する。README では Terminal-Bench 2.1 で54.9%、SWE-bench Pro v2 で89.7%、SWE-bench Verified で74.2%（自社報告）。
- **[MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)** (公開10日) - テキスト・画像・動画を入力できるネイティブ・マルチモーダルの MoE（総約428B、活性化23B）。文脈は最大100万トークン。コーディング、エージェント、コンピュータ操作、サイバーセキュリティが用途で、全体にスパースアテンションを使い、投機的デコードのドラフトヘッドを同梱する。ベンチマークは自社報告。
- **[baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2)** (公開1日) - Baidu の文書パース用モデルの第2版。10/27 に公開され、超長文書向けの注意機構 SR-SWA を導入したと README にある。超長文書のパースを測る MarathonDocBench も同時に公開された。
- **[Qwen/BlenderWorld](https://huggingface.co/datasets/Qwen/BlenderWorld)** (dataset, 公開13日) - 現実的な3D制作タスクでフロンティアモデルを評価するベンチマーク。建築、製品、自然環境、科学可視化などにまたがる223タスクで構成される。

## 所感

DeepMind の Genie 4 と OpenAI の GPT-6 系、Oracle 連携など、モデルそのものより実際の業務や環境への組み込みを示す発表が並んだ。論文では、エージェントの再開時の権限、ツール出力の整形、エージェント間通信といった運用上の失敗モードの分析が目立つ。オープンモデルも Flint や MiniMax-M3.1-Flash のように、コーディングとエージェント用途を前面に出す MoE が続いている。
