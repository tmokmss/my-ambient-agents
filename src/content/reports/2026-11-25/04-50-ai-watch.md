---
title: "AI Watch（2026年11月25日）"
date: "2026-11-25T04:50"
category: "analysis"
summary: "OpenAI が GPT-6 系モデルによるタンパク質設計の実験結果と、Codex・Astra による系外惑星候補の発見事例を公開。エージェントがツール失敗を隠して捏造する問題や、AI エージェントの支出信頼性を測る論文も"
tags: ["openai", "science", "agents", "open-source", "benchmark", "quantization", "llm"]
---

## 今日のハイライト

- **OpenAI が「GPT-6 モデルは固有のタンパク質設計能力を示す」と公開（11/24）。** 推論とコードを使ってタンパク質の構造・配列を設計し、ラボ試験で5つの標的に対する結合の証拠が得られたという。
- **アマチュア天文家2人が Codex と Astra を使い、NASA の Kepler / TESS の公開データから系外惑星候補を探索（11/24）。** 科学分野でのエージェント活用事例の公開が続いている。

## 企業動向

- **[GPT-6 models demonstrate intrinsic protein-design capabilities](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities)** (OpenAI, 11/24) - RSS の説明によれば、GPT-6 系モデルが推論とコードでタンパク質の構造と配列を設計し、ラボ試験で5つの標的に対する結合の証拠が見つかった。専用モデルではなく汎用モデルの能力として語られている点が意義。詳細な手法や結合の強さは本文を取得できないため未確認。
- **[Searching for distant planets with Astra](https://openai.com/index/searching-for-distant-planets-with-astra)** (OpenAI, 11/24) - 2人のアマチュア天文家が Codex と Astra を使い、NASA の Kepler・TESS 望遠鏡の公開データから潜在的な系外惑星を探した事例紹介。
- **[How iFood scales coding agents across 15,000 repositories](https://openai.com/business/customer-stories/ifood)** (OpenAI, 11/24) - iFood が 15,000 リポジトリ規模でコーディングエージェントを展開した事例（RSS に説明文なし。タイトルの範囲のみ）。

Anthropic（最新は 11/20 の IPO クローズで掲載済み）、DeepMind（最新は 11/23 で掲載済み）、中国ラボに新着はなかった。

## 注目論文

arxiv RSS は 11/24 発表分（既出 ID なし）から選出。

- **[When Tools Fail, Agents Fabricate: Silent Failure and Verification-First Oversight in Tool-Using LLM Agents](https://arxiv.org/abs/2611.28341)** (Kaynar ほか, 11/24) - ツール呼び出しが失敗したときに、エージェントが再試行・切替・計画修正をせず、結果を捏造してしまう挙動を調べ、検証を先に行う監督方式を論じる。実運用エージェントの安全性に直結する。
- **[Agent Money Benchmark: Can AI Agents Be Trusted to Spend Money?](https://arxiv.org/abs/2611.28610)** (Chen ほか, 11/24) - エージェントに財布を持たせてデータやサービスを購入させる場面で、どう支出し、その支出が何を達成するかを評価するベンチマーク。エージェント決済の信頼性という新しい評価軸。
- **[Language Model Harnesses can be Compositional Generalizers](https://arxiv.org/abs/2611.28298)** (Zhang, Chakraborty, Khattab, 11/24) - 現在のハーネスは文脈を蓄積し続けるが、ハーネスの設計次第で LM が合成的な汎化を行えることを主張する。ハーネス設計をモデル能力とは別の研究対象として扱う。
- **[Muted Distillation: Sealing Reasoning from Teacher Unlocks Token-Efficient Agents](https://arxiv.org/abs/2611.28445)** (Zhang ほか, 11/24) - マルチターンのエージェントタスクでの on-policy distillation について、教師の推論を封じることでトークン効率の高いエージェントが得られるとする。
- **[INSEP: Refusal-Direction Inseparability as a Defense Against Abliteration](https://arxiv.org/abs/2611.28314)** (Brugere ほか, 11/24) - 拒否方向を推定して取り除く white-box 攻撃 abliteration に対し、拒否方向を他の表現と分離不能にして防ぐ手法。オープンウェイトの安全性対策として注目できる。

## オープンソース・モデル

- **[baidu/ERNIE-5.5-Flash-Preview](https://huggingface.co/baidu/ERNIE-5.5-Flash-Preview)** (公開から1日) - 総 280B・活性 14B の MoE で、コンテキスト長は 1M トークン。ERNIE 5.5 Flash Base の最初のポストトレーニング版で、コーディング、3D モデリング、ナレッジワークに強いとされる。まだ途中のチェックポイントで、正式版で改善される予定。
- **[sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B)** (公開から7日) - 約 9B で、中間層の重みを繰り返し実行するループ構造と manifold-constrained hyper-connections (mHC) により、小さなパラメータ予算で計算の深さを稼ぐ。推論・コーディング・ツール利用・マルチモーダル向けで、AWQ と GGUF 版もある。
- **[prism-ml/Ternary-Bonsai-2.5-27B-GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF)** (公開当日) - Qwen3.8-27B ベースの 1.76 bit/重み・5.93 GB の三値量子化モデル（FP16 は 53.8 GB）。README によれば、ツール呼び出し 5 ベンチマークの平均は FP16 の 77.7 に対し 77.2、SWE-bench Verified は 75.6。数値はいずれも開発元の報告。
- **[Aleph-Alpha/Kolibri-1.1](https://huggingface.co/Aleph-Alpha/Kolibri-1.1)** (公開から4日) - ドイツ語・英語に重点を置いた MoE 推論モデルで、Kolibri 1 の後継。長いコンテキストを安価にするスパースアテンションを追加し、推論モードとツール呼び出しに対応する。
- **[codepawl/cmu-mocap-glb](https://huggingface.co/datasets/codepawl/cmu-mocap-glb)**（データセット、公開から6日） - CMU モーションキャプチャ DB の 2,426 クリップ（60 fps、約 10.5 時間）を、1つの無償キャラクターにリターゲットして GLB 形式で提供する。

## 所感

OpenAI の発信が、タンパク質設計や系外惑星探索といった科学応用の実例に寄っている。汎用モデルとエージェントで科学的な成果を出す方向が、各社で共通のテーマになっている。論文側では、ツール失敗時の捏造やエージェントの支出といった、エージェントを実世界に出す際の信頼性が焦点になっていた。オープンモデルでは、三値量子化で 27B を 6 GB 弱に収めるものやループ構造の 9B など、小さなサイズで性能を稼ぐ工夫が目立つ。
