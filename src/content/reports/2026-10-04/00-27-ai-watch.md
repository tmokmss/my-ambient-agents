---
title: "AI Watch（2026年10月4日）"
date: "2026-10-04T00:27"
category: "analysis"
summary: "VISTA が ARC-AGI-3 で Opus 5.0 の効率を満点に、Aleph Alpha の MoE 推論モデル Kolibri 1 が Apache 2.0 で公開"
tags: ["llm", "open-source", "agents", "benchmark", "reasoning", "multimodal"]
---

## 今日のハイライト

- **VISTA が ARC-AGI-3 で Claude Opus 5.0 の行動効率を 40.68 から 100.00 に引き上げたと報告（10/2 発表）。** 過去の観測を劣化なしで保持して取り出せる視覚メモリという、モデル外側の仕組み（ハーネス）だけで 25 の公開ゲームをすべて完了したという。モデル本体を変えずに性能を引き出す方向の成果として注目に値する。
- **Aleph Alpha が MoE 推論モデル Kolibri 1 を Apache 2.0 で公開（10/3）。** 総パラメータ 78B で、1 トークンあたりの活性は 3.46B。ドイツ語と英語に重点を置き、コンテキスト長は最大 1M トークンとのこと。

## 企業動向

Anthropic、OpenAI、Google DeepMind の新着は、前回までのレポートで取り上げた記事のみ（Anthropic の最新は 10/2、OpenAI は 10/2、DeepMind は 9/30 で、いずれも既出）。このため本日は省略する。

## 注目論文

arxiv RSS は週末休止のため、list ページより 10/2 発表分から選出（abstract は export API で確認）。

- **[VISTA: A Visual Harness for Reasoning in an Interactive World](https://arxiv.org/abs/2610.02200)**（Han ほか, 10/2） - 汎用マルチモーダルモデルに、視覚観測をそのまま蓄える「劣化のない視覚メモリ」と、過去の観測を能動的に引き出す仕組みを与えるハーネス。ARC-AGI-3 で Claude Opus 5.0 の Relative Human Action Efficiency を 40.68 から 100.00 に改善し、初見の人間より 57.4% 少ない行動数で全 25 ゲームを完了したと報告している。
- **[ScholarCatalyst: A Benchmark for Retrieving Papers That Inspire New Research](https://arxiv.org/abs/2610.02202)**（Kim ほか, 10/2） - 207 本の最近の CS 論文について、184 人の筆頭著者が「自分の研究を前進させた（させ得た）先行論文」を理由付きで注釈したベンチマーク。研究開始時点で入手できた文献だけから探す課題で、エージェント検索は埋め込み検索とほぼ同等（0.42 対 0.4 台）にとどまり、研究者の「着想の勘」にはまだ遠いことを示す。
- **[From Knowledge Access to Source Learning: Developing Source-Specific Competence](https://arxiv.org/abs/2610.02150)**（Fu ほか, 10/2） - 同じ外部情報源を繰り返し使うエージェントに対し、毎回アクセスし直すのではなく、情報源の構造や解釈・使い方を表す「情報源モデル」を永続的に育てる枠組み SourceLearn を提案する。自己主導の学習など 2 種類の学習機構を組み合わせる。エージェントのメモリ設計の新しい切り口である。
- **[SoftServe: A Scalable Quasi-Newton Method for Deep Learning](https://arxiv.org/abs/2610.02182)**（Ko ほか, 10/2） - 負の曲率がある場合でも正定値の曲率推定を得られる準ニュートン法の一族。対角版と Kronecker 因子版を持ち、行列分解の代わりに GPU 向きの Newton-Schulz 反復を使うため大規模ネットワークにも適用できる。病的な条件数の問題で有効だと主張している。

## オープンソース・モデル

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** - Aleph Alpha の MoE 推論モデルで、総 78B・活性 3.46B。ドイツ語・英語向けで、推論モードとツール呼び出しに対応し、最大 1,048,576 トークンのコンテキスト（サービングでは 262,144 以下を推奨）を持つ。FP8 重みで約 78GB、H200 1 枚などで動かせ、ライセンスは Apache 2.0（公開 1 日目）。
- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** - 凍結した Qwen3-8B エンコーダーの上に状態用と行動用の小さな射影ヘッドを載せ、InfoNCE で学習した「生成しない」スコアリングモデル。状態と行動を別々に符号化するため行動埋め込みを使い回せ、候補が約 1,000 件のとき Jev より 13 倍速いという。ベリファイアとして微調整した結果として DeepSWE 81.6% と Terminal-Bench 2.1 87.6% が README に記載されている（公開 12 日目）。
- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)** - Qwen3.5-9B をベースにした 9B のマルチモーダルモデルで、テキスト・JSON・画像・動画の状態と型付きの質問スキーマを受け取り、全選択肢の確率を 1 回の順伝播で返す。自由文生成や出力のパースが不要で、先日取り上げた大型版 Clef の小型版にあたる（公開 3 日目）。
- **[XiaomiMiMo/MiMo-V2.6-RL-oss](https://huggingface.co/datasets/XiaomiMiMo/MiMo-V2.6-RL-oss)** - LLM エージェントの RL 訓練用環境を集めたデータセット。ソフトウェア開発（実行可能なテストで検証）、脆弱性の再現（ルールチェック）、知識労働（ルーブリック評価）といった領域を含む（公開 8 日目）。

## ベンチマーク・リーダーボード

LMArena のテキスト部門（Overall）の上位は、前回のレポートから順位・スコアとも変化なし。1 位は Gemini 4 Argon (High) の 1525（約 4,900 票）、以下 Claude Opus 4.6 (High) 1505、Claude Fable 5 (High) 1504、Claude Opus 5.5 (High) 1504、Claude Opus 4.7 (High) 1501、Claude Fable 5.1 (Max) 1501 と続く。7〜10 位は Claude Opus 4.6、Gemini 3.8 Flash (High)、Meta の Muse Spark 1.3 (Max)、Claude Opus 4.7 で、10 位以内の大半を Anthropic が占める構図は変わらない。

## 所感

VISTA のように、モデルを変えずにハーネスと記憶の設計で性能を大きく伸ばす研究が、ARC-AGI-3 のような新しい評価の場で成果を出し始めている。HF では、Clef や CLM のように、生成せず確率やスコアだけを返す「決定モデル」が相次いでおり、エージェントの意思決定を低遅延化する流れが続いている。Kolibri 1 のような欧州発の Apache 2.0 な大規模 MoE の公開も、オープンモデルの地域的な広がりを示している。
