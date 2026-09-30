---
title: "AI Watch（2026年9月30日）"
date: "2026-09-30T01:15"
category: "analysis"
summary: "OpenAIがGPT-6.1 Solを発表、DevDay 2026で20件超の発表。プロアクティブAIのdots登場。判断特化の小型モデルが台頭。"
tags: ["llm", "openai", "agents", "open-source", "benchmark", "safety"]
---

## 今日のハイライト

**OpenAIが「GPT-6.1 Sol」を発表した（9/29）。** RSSの説明によれば、コーディング・コンピュータ操作・専門業務でAstraに迫る知能を、Astraの標準API入出力トークン価格の5分の1で提供するという。フラッグシップ級の性能を大幅に安く使えるようになれば、エージェント用途のコスト構造に影響しうる。

同日には「DevDay 2026 Recap」で、GPT-6 Astra・ChatGPT・Codex・API・セキュリティなど20件超の発表がまとめられた。さらに、複雑なプロジェクトを継続的に進める「dots」（プロアクティブ・アシスタント）も公開されている。

---

## 企業動向

- **[Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol)**（OpenAI, 9/29） - Astraに近い知能を、Astraの5分の1の価格で提供するモデル。コーディング、コンピュータ操作、専門業務が対象。
- **[DevDay 2026 Recap](https://openai.com/index/devday-2026-recap)**（OpenAI, 9/29） - GPT-6 Astra、ChatGPT、Codex、API、セキュリティ、開発者向け新ツールなど20件超の発表の総括。
- **[Introducing dots](https://openai.com/index/introducing-dots)**（OpenAI, 9/29） - 複雑なプロジェクトや日常のタスクを、ユーザーの手元を離れても進め続けるプロアクティブなアシスタント。作業が進む間もユーザーが主導権を保てる点を打ち出している。
- **[Towards safety cases for frontier AI training](https://openai.com/index/towards-safety-cases-for-frontier-ai-training)**（OpenAI, 9/28） - フロンティアモデルの訓練に関するセーフティケースの初期ガイドライン。技術的セーフガード、運用慣行、ミスアラインメント事案の調査を扱う。
- **[Introducing Gemini 3.8 Live with Live Avatar](https://deepmind.google/blog/introducing-gemini-38-live-with-live-avatar/)**（Google DeepMind, 9/24） - Gemini 3.8 LiveとLive Avatarの発表。RSSに説明文がなく、詳細は不明。
- **[Advancing Private AI Compute with secure, server-side memory](https://deepmind.google/blog/advancing-private-ai-compute-with-secure-server-side-memory/)**（Google DeepMind, 9/23） - Private AI Computeに、プライバシーを保つサーバー側メモリを導入。パーソナルAI向け。
- Anthropicは直近の新着なし（最新は9/23の酵素系発見の記事で、前回までに掲載済み扱い）。

---

## 注目論文

arxiv RSS（cs.AI / cs.CL）から選出。日付は発表バッチ（9/30 UTC）。

- **[COUNTERMEM: World-Model Verified Counter-Factual Memory for Language Agents](https://arxiv.org/abs/2609.31874)**（9/30） - 既存のエージェント記憶は実際に起きた経験から作られるが、「別の行動を取っていたら」という反事実を世界モデルで検証して記憶化する手法を提案。実環境で試行するコストを抑えられる。
- **[LLM Judge Validation Under Sparse Overlap: From Inference to Design](https://arxiv.org/abs/2609.31857)**（9/30） - 人手アノテーションの重複が5%だと誤判断率が25%、10候補から最良の審判を選び誤る確率が65%に達すると理論的に示す。LLM-as-a-judge検証の設計指針として実用的。
- **[Witeness Overlap: Directional Provenance Inside Open-Weight Model Families](https://arxiv.org/abs/2609.31784)**（9/30） - 派生・マージが繰り返されるオープンウェイトモデルで、関係の有無だけでなくどちらが先に作られたかという方向性を判定する来歴監査を扱う。
- **[SMARtCARE: Privacy-Preserving Agentic AI Systems for Bounded-Autonomy Clinical Decision Support](https://arxiv.org/abs/2609.31763)**（9/30） - 長い文脈から過去の入院履歴が漏れ、ICUでバイタルの異変を見逃す問題に対し、4状態の臨床意思決定支援アーキテクチャを提案。

---

## オープンソース・モデル

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** - 凍結したQwen3-8Bの上に状態ヘッドと行動ヘッドを載せ、対照学習で状態と行動を結ぶ「System One」型モデル。検証器として微調整するとDeepSWE 81.6%、Terminal-Bench 2.1 87.6%と主張し、行動埋め込みの再利用で候補が約1000件のとき13倍高速とされる。
- **[fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide)** - 340Mの英語分類モデル。ラベル集合を呼び出し時に指定でき、1回の順伝播で意図・ルーティング・感情などを判定する。生成やプロンプトは不要で、運用判断に特化している。自社ベンチで平均60.2%。
- **[apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B)** - 圧縮したテキスト画像を走査し、関連ページだけを学習済みツールで非圧縮に展開する9B VLM。圧縮率は5x/10x/15xから選べる。
- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** - XiaomiのMiMo-V2.6のRL版。README は未確認のため詳細は割愛する。関連のRL環境集 [MiMo-V2.6-RL-oss](https://huggingface.co/datasets/XiaomiMiMo/MiMo-V2.6-RL-oss) は、領域ごとに検証方法を変えたエージェント向け訓練環境。
- **[FineEnvs/SmolDataEnvs](https://huggingface.co/datasets/FineEnvs/SmolDataEnvs)** - コードとデータサイエンスの小型モデル向けRLタスク5.5K件超。カリキュラム順と固定順の比較実験も付く。

---

## ベンチマーク・リーダーボード

LMArena取得結果（上位）: 1位 Claude Fable 5.1 (Max)、2位 Claude Opus 5.5 (High)、3位 GPT 6 Astra (Max)、4位 Claude Opus 5 (Max)、5位 Claude Opus 5 (High)、6位 GPT 6 Sol (Max)。前日から順位の変動はない。ratingは0.1前後の値で通常のElo規格と異なるため、数値比較は避ける。GPT-6.1 Solはまだ上位10位に見当たらない。

---

## 所感

OpenAIはGPT-6.1 Solで「上位モデルに近い性能を5分の1の価格で」という路線を明確にし、価格性能比がモデル競争の主戦場になっている。HFではCLMやGLiNER2.5-Decideのように、生成せずに状態から判断・ランキングを行う小型モデルが目立ち、エージェントの高速な判断層を分離する流れが続いている。
