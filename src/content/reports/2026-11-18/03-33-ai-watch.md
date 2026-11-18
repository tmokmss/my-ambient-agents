---
title: "AI Watch（2026年11月18日）"
date: "2026-11-18T03:33"
category: "analysis"
summary: "OpenAI が GPT-6.2 Astra / Sol を発表し、Artificial Analysis の指数で Claude Fable 5.2 に次ぐ位置に。NATO との連携や ChatGPT for Sales も"
tags: ["llm", "openai", "agents", "benchmark", "open-source", "safety", "cybersecurity"]
---

## 今日のハイライト

- **OpenAI が GPT-6.2 の Astra と Sol を発表した（11/17）。** 業務成果物の品質、コーディング、コンピュータ操作、効率が改善され、低コストで ChatGPT Work、Codex、API から使える。Artificial Analysis の Intelligence Index では GPT-6.2 Astra が 62.1 で、Claude Fable 5.2（64.6）に次ぐ位置につけている。
- **OpenAI が NATO・同盟国のサイバー機関と連携し、防御側に AI を提供する（11/17）。** 脆弱性の発見、修正の検証、重要システムの防御を支援する。防御側へのモデル提供というサイバー分野の流れが続いている。

## 企業動向

Anthropic と Google DeepMind は過去数日の新着がなかった（直近は Anthropic が 11/10、DeepMind が 11/12）。

- **[Introducing GPT-6.2 Astra and Sol](https://openai.com/index/introducing-gpt-6-2-astra-sol)** (OpenAI, 11/17) - 新モデル GPT-6.2 の Astra と Sol。業務成果物の品質、コーディング、コンピュータ操作、効率を高め、コストを下げたとされる。ChatGPT Work、Codex、API で提供される。
- **[Astra for Law leads in legal intelligence](https://openai.com/index/astra-law-6-2)** (OpenAI, 11/17) - 24 分野の法領域を対象とした公開時評価で Astra for Law が首位になった。ChatGPT Enterprise の全顧客がアクセスを申請できる。
- **[Introducing ChatGPT for Sales](https://openai.com/index/introducing-chatgpt-for-sales)** (OpenAI, 11/17) - Sales プラグインと 30 以上のパートナープラグインを追加・拡充した。見込み客のリサーチ、提案準備、CRM 更新、商談の前進を ChatGPT 内で行える。
- **[Strengthening NATO and allied cyber defenses with AI](https://openai.com/index/strengthening-nato-allied-cyber-defences-ai)** (OpenAI, 11/17) - NATO や同盟国のサイバー機関と協力し、信頼された防御者による脆弱性発見、修正の検証、重要システムの保護を支援する。
- **[Introducing OpenAI for Chile](https://openai.com/index/introducing-openai-for-chile)** (OpenAI, 11/17) - チリ政府と提携し、責任ある AI 活用、公共部門のスキル構築、地元スタートアップの AI アプリ開発を支援する。

## 注目論文

arxiv RSS は 11/17 発表分（既出 ID を除外済み）から選出。

- **[Agents Cannot Hand Over What They Have Not Yet Understood](https://arxiv.org/abs/2611.18642)** (Liu ほか, 11/17) - 長期タスクやチームで動くエージェントは、後継へ短い要約で作業を引き継ぐ。従来は「タスクが解けるか」が評価の中心で、引き継ぎの質は十分に見られていなかったことを指摘する。
- **[Video-as-Experience: Learning Computer Use via Audio-Visual Understanding](https://arxiv.org/abs/2611.18747)** (Sun ほか, 11/17) - マルチモーダル LLM を使ったコンピュータ操作エージェントを、音声付き動画から学習させる試み。GUI 操作を動画という「経験」から獲得する方向。
- **[Policy Optimization With Multiple Verifiers via Pareto Rankings](https://arxiv.org/abs/2611.19064)** (Yamashita ほか, 11/17) - 検証可能な報酬による RL（RLVR）で、コード生成や指示追従のように複数の検証器がある場面を扱う。検証器の結果を Pareto ランキングで統合して方策を最適化する。
- **[When Helpful Agents Cause Financial Harm: Evaluating LLM Agent Safety in Executable Economic Worlds](https://arxiv.org/abs/2611.18612)** (Ling ほか, 11/17) - 経済的判断を担う LLM エージェントの安全性を、実行可能な環境で測る初のベンチマーク EconSafeBench。
- **[Jailbreak LLMs with Linguistic Style as a Hidden Attack Surface](https://arxiv.org/abs/2611.18601)** (Mohanty ほか, 11/17) - 文体の書き換えだけで安全対策を回避できる、体系的で見落とされていた攻撃面だと示す。複数の最先端モデルで検証している。

## オープンソース・モデル

- **[internlm/Sage-S2.1-Flash](https://huggingface.co/internlm/Sage-S2.1-Flash)** - 上海 AI 研究所の科学向けマルチモーダルモデル。分子グラフ、結晶構造、タンパク質の配列・3D 構造など 10 種類以上の科学データを共通表現に写し、検索、プログラミング、ツール利用を組み合わせて多段の分析と検証を行う。公開から 3 日。
- **[apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L)** - Apple による 14B の自己回帰型・2 ステップ動画拡散モデルで、480p 動画を対話的なレイテンシで生成する。小型の FastFrames-S（1.3B）は 1 GPU で約 35ms とされる。公開から 1 日。
- **[thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)** - テキストと画像を入力できるオープンウェイトの汎用マルチモーダルモデル。エージェント、コーディング支援、RAG 向けで、SGLang、vLLM、Unsloth でローカル推論できる。公開から 13 日の補充枠として掲載した。
- **[KORMo-VL/KORMo-Web-11B](https://huggingface.co/KORMo-VL/KORMo-Web-11B)** - KAIST の研究室がスクラッチで作った KORMo を基に、LLM・VLM・Web 操作エージェントを 1 つにまとめた 11B モデル。韓英 1,000 万件超の Web サンプルで事前学習し、Apache-2.0 で公開されている。公開から 3 日。
- **[nvidia/PhysicalAI-Human-1M-100K](https://huggingface.co/datasets/nvidia/PhysicalAI-Human-1M-100K)**（データセット） - 一人称視点の動画、密な言語アノテーション、頭部・手のポーズを組み合わせた、人間のセンサーデータ。人の経験をモデルに蒸留する流れの物理 AI 版という位置づけ。公開から 13 日の補充枠。

## ベンチマーク・リーダーボード

- Artificial Analysis の Intelligence Index 上位は Claude Fable 5.2（64.6）、GPT-6.2 Astra（62.1）、Gemini 4 Carbon（60.0）、Claude Opus 5.5（59.1）の順。同じモデルの設定違いが複数行に出るため、各モデルの最高値で示した。
- LMArena Text の公開日は 11/11 で、Gemini 4 Carbon が首位（直近レポートから大きな変動はなし）。

## 所感

OpenAI の GPT-6.2 は性能の絶対値より、業務成果物、コンピュータ操作、コスト効率を前面に出している。法務や営業のような業種別の展開まで一緒に出す形で、モデルの競争が実務への組み込みに移っていることがわかる。論文側でもエージェント間の引き継ぎや経済的安全性など、運用段階の問題が目立った。
