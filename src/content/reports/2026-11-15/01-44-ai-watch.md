---
title: "AI Watch（2026年11月15日）"
date: "2026-11-15T01:44"
category: "analysis"
summary: "Tier 1 の新着が乏しい日。llama.cpp v1.0.0、145B を単一 GPU で動かす Edge0、エージェントの目標表現を探る論文など。"
tags: ["llm", "open-source", "agents", "interpretability", "speculative-decoding", "speech"]
---

## 今日のハイライト

- **Tier 1（Anthropic / OpenAI / Google DeepMind）には、前回レポート以降の新着が無かった。** そのため補助ソースの Hugging Face Blog を参照した。ggml-org が llama.cpp v1.0.0 を公開している（11/13）。
- **Edge0-145B（NVFP4）が、145B パラメータのエージェント向けモデルを 24GB の単一コンシューマ GPU で動かす構成として注目されている。** 公開から 3 日で、HF トレンドに入っている。

## 企業動向

Tier 1 に新着が無かったため、Hugging Face Blog から取り上げる。個別記事の本文は取得していないので、タイトルと執筆 org の範囲で紹介する。

- **[llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem](https://huggingface.co/blog/ggml-org/llama-cpp-v1)** (ggml-org, 11/13) - ローカル LLM 実行基盤 llama.cpp が v1.0.0 に到達したという告知。タイトルは「ローカル AI エコシステムのより強い基盤」を掲げている。
- **[XYBench: Helping with the problem behind the question](https://huggingface.co/blog/allenai/xybench)** (Ai2, 11/13) - Ai2 による新しいベンチマーク XYBench の紹介。タイトルからは、質問の背後にある本当の問題への対応を測る評価と読める。
- **[LLMON: An LLM-Native Markup Language, now in Granite 4.1 3B and 8B](https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite)** (IBM, 11/12) - LLM 向けのマークアップ言語 LLMON が、Granite 4.1 の 3B / 8B に組み込まれたという記事。

## 注目論文

arxiv RSS は週末休止のため、list ページより 11/13 発表分から選出。

- **[Goal Encoding in LLMs](https://arxiv.org/abs/2611.17297)** (Sharma ら, 11/13) - コーディング課題で、次のサブゴールを表す表現が少数のアテンションヘッドの出力に局在することを示した。同じヘッドから将来の行動を自然言語で読み出せ、エージェントの意図を内部から監視する手がかりになる。
- **[Actor, Judge, or Teacher? Understanding Decision Models in Long-Horizon Agents](https://arxiv.org/abs/2611.17167)** (Liu ら, 11/13) - 選択肢と確率を型付きで出力する「決定モデル」を、行動役・評価役・教師役として比較した。行動役として弱いモデルでも、教師として RL の学習信号を与えられるかを ALFWorld と WebShop で検証している。
- **[Mind the Accuracy-Approval Gap: How Users Evaluate Sycophantic AI in Everyday Tasks](https://arxiv.org/abs/2611.16722)** (Naveed ら, 11/13) - 客観的・軽度に迎合的・強く迎合的といったペルソナを system prompt で作り、ベンチマーク評価と 2 件の大規模ユーザー調査を組み合わせた。迎合が実際のユーザー評価にどう響くかを、精度と好感度のずれとして扱う点が新しい。
- **[Human or Synthetic? What a Fixed Budget Buys for Post-Training](https://arxiv.org/abs/2611.16895)** (Banerjee ら, 11/13) - 人手の選好データと合成データを、サンプル数ではなく費用を揃えて比較した。SFT と DPO を組み合わせた事後学習で、予算の使い方を決める際の材料になる。
- **[Classical Energies Learn to Reason 1,000x Faster than Looped Models](https://arxiv.org/abs/2611.17309)** (Hoover ら, 11/13) - Sudoku-Extreme などの推論パズルで、ループ型モデルの代わりにエネルギー降下を使う手法を示した。タイトルでは学習が 1,000 倍速いと主張している。早期停止や難易度に応じた計算量の調整が自然に得られるとされる。

## オープンソース・モデル

- **[Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4)** (公開3日) - 48 層・512 エキスパート（トークンあたり 10 が活性）・256K コンテキストの latent sparse MoE で、4 ビットでネイティブ学習したとされる。README では RTX 5090 D 24GB で agent decode 98.3 tok/s、terminal-bench 2.1 で 86.5 を掲げる。ただし数値は提供元の自己申告で、第三者による検証は確認していない。
- **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** (公開2日) - 聞きながら同時に話せる、全二重の連続音声対話の基盤モデル。133ms ごとに 1 フレームを処理し、離散音声トークンを使わずに 1 ステップで音声を生成する。英語・日本語を含む 9 言語に対応し、研究用の事前学習済みベースモデルとして公開されている。
- **[tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16)** (公開7日) - Qwen3.8-27B 向けの投機的デコーディング用ドラフトモデル（5 層、ブロックサイズ 16）。ドラフトトークンを並列に生成する。README の表では GSM8K の受理長が DFlash2 の 5.69 に対し 7.20 だった。
- **[israellaguan/codex-tool-use-trajectories](https://huggingface.co/datasets/israellaguan/codex-tool-use-trajectories)** (dataset, 公開6日) - OpenAI Codex Desktop が Windows のローカル作業環境で動いたときの、複数ステップのツール利用軌跡を整形・匿名化したデータセット。コーディングエージェントの挙動分析に使える。

## ベンチマーク・リーダーボード

LMArena のデータセット API が HTTP 501 を返したため、取得失敗。

Artificial Analysis の Intelligence Index では、Claude Fable 5.2 が 64.6 で首位だった。次いで Gemini 4 Carbon が 60.0、Claude Opus 5.5 が 59.1、GPT-6 Astra が 56.9 と続く。同じモデルが設定違いで複数行に出るため、各モデルの最高値を示した。

## 所感

大手ラボの発表が一段落した週末で、話題はローカル実行と効率化に寄った。llama.cpp v1.0.0、145B の単一 GPU 動作、投機的デコーディング用のドラフトモデルなど、推論側の話が並んでいる。論文ではエージェントの内部目標の読み出しや、迎合の評価など、挙動を測り制御する研究が目立った。
