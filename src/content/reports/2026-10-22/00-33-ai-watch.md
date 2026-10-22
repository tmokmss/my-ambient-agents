---
title: "AI Watch（2026年10月22日）"
date: "2026-10-22T00:33"
category: "analysis"
summary: "OpenAI モデルが Google Cloud の Model Garden に登場、ChatGPT 広告が26か国に拡大。DeepSeek-V4.1-Flash-1017、Recursive Flint、LFM2.5-24B-A2B など"
tags: ["llm", "agents", "open-source", "cloud", "security", "benchmark"]
---

## 今日のハイライト

- **OpenAI が 10/21、OpenAI のモデルと Codex ワークフローを Google Cloud の Gemini Model Garden（Google Cloud Marketplace 経由）で提供すると発表した。** RSS の説明による。競合する Google のプラットフォーム上で OpenAI のフロンティアモデルが使えるようになる。クラウドを跨いだ配信がさらに進む動きと言える。
- **DeepSeek が DeepSeek-V4.1-Flash-1017 を公開した（公開4日）。** V4.1-Flash の小幅アップデートで、推論・コーディング・エージェント・視覚のベンチマークが伸び、実行時間と出力長も減ったという。Terminal-Bench 4.0 は 31.2 から 42.3 に上がった（自社報告）。

## 企業動向

OpenAI は 10/21 に記事が集中した。Anthropic の最新は 10/16、Google DeepMind の最新は 10/15 で、いずれも前回までに掲載済みのため省略。記事本文は取得できないため、OpenAI の内容は RSS の説明に基づく。

- **[OpenAI models are coming to Google Cloud](https://openai.com/index/openai-models-google-cloud)** (OpenAI, 10/21) - OpenAI と Google Cloud が、フロンティアモデルと Codex ワークフローを Gemini の Model Garden で、Google Cloud Marketplace 経由で提供する。提供開始時期やモデルの範囲は説明にないため未確認。
- **[Patch the Planet: global response coordination as agents uncover critical vulnerabilities](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities)** (OpenAI, 10/21) - セキュリティ研究者、メンテナ、インシデント対応者をつなぎ、オープンソース全体で見つかる重大な脆弱性への対応を支援する取り組み。AI エージェントが脆弱性を大量に見つける状況への備えと読める。
- **[Democratic governance of frontier AI, part II: Empowering cyber defenders](https://openai.com/index/empowering-cyber-defenders)** (OpenAI, 10/21) - フロンティア AI でサイバー防御者を支援するための青写真。より強い安全策、サイバーセキュリティの近代化、公的機関のレジリエンス強化を挙げている。上の Patch the Planet と同じ日に出ており、サイバー分野への注力が続いている。
- **[Broad access through consistent standards](https://openai.com/index/broad-access-through-consistent-standards)** (OpenAI, 10/21) - 販売パートナーと協力して一貫した安全策を維持し、責任あるアクセスを支え、利用ポリシー上の期待を明確にする取り組み。
- **[ChatGPT Ads expands to 26 new countries as over 100,000 advertisers have used the platform](https://openai.com/index/chatgpt-ads-expands-26-new-countries)** (OpenAI, 10/21) - ChatGPT の広告が新たに26か国へ拡大し、広告主は10万社を超えた。関連して、[ChatGPT 広告基盤の構築](https://openai.com/index/building-chatgpt-ad-stack)の記事では、LLM を使って会話の意図を捉え、広告を回答と分離したまま大規模に配信する仕組みを説明している。
- **[Using thousands of AI agents to uncover new leads in biological data](https://openai.com/index/scaling-ai-research-for-complex-biological-data)** (OpenAI, 10/21) - OpenAI、PerturbAI、Scripps Research が、分散した AI エージェントを使い、数百万個の脳細胞のデータから有望な研究の手がかりを探した事例。

## 注目論文

arxiv RSS（cs.AI / cs.CL）の本日分から選出。日付は RSS 配信日の 10/22 とする。

- **[PROVISO: Provenance-Informed Action Selection for Secure LLM Agents](https://arxiv.org/abs/2610.27115)** (Yan ほか, 10/22) - 既存の防御は、行動の内容がユーザー由来かツール出力などの外部由来かを追わず、代替案との比較もせずに行動を判定するため、安全性と有用性がトレードオフになる。PROVISO はエージェントが行動を提案した後、実行前に、出所を型として持つメモリに観測・提案・代替案を入れ、結果から学んだ価値が最大の行動を確定する。4種のエージェント安全タスクで、安全性と有用性の両方で上回るベースラインはなかったとしている。
- **[PORA: Learning When More Reasoning Pays Off for LLM Agents](https://arxiv.org/abs/2610.27119)** (Yan ほか, 10/22) - 推論の予算が限られるなか、各行動の前に短く考えるか長く考えるかをエージェントが選ぶ問題。同じ状態から短い推論と長い推論で2回タスクを完了させ、最終品質と総コストを比べて、長く考える価値がある場面を学習する。
- **[REM: What to Store, When to Recall, What to Forget in Experience Memory for Coding Agents](https://arxiv.org/abs/2610.27377)** (Chen ほか, 10/22) - リポジトリ規模のコーディングで、実行ごとの経験が再利用されない問題に取り組む。完了した軌跡を、元より2桁小さい段階構造の文書にまとめて保存し、タスク開始時に注入する。詳細な実装記録は、ループ内のゲートが必要と判断するまで出さない。検索だけでなく、エージェント内部から記憶の寿命を管理する点が新しい。
- **[Encoder-Free Multimodal LLMs Learn Implicit Encoders](https://arxiv.org/abs/2610.24239)** (Harwath ほか, 10/22) - Gemma-4 12B と Inkling-Small という、音声・画像用のエンコーダーを持たないマルチモーダル LLM を分析した。初期の層が専用エンコーダーのように働き、入力を他モダリティの文脈にほぼ依存せず符号化していることを示す。マルチモーダル推論でも、初期の層でモダリティを独立に符号化して同じ精度が出るとしている。
- **[Language Models are Lazy Poets: Creative Mode Collapse at Scale](https://arxiv.org/abs/2610.24223)** (Matthews, Hamilton, 10/22) - 15の詩形式・248の主題タグ・16のオープンウェイトモデルで110万編超の詩を生成した。語彙や韻の引き出しは豊富なのに、少数の単語・書き出し・韻に偏って使われることを示し、創作でのモード崩壊を大規模に測った。

## オープンソース・モデル

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** (公開4日) - DeepSeek-V4.1-Flash の小幅アップデート。推論、コーディング、エージェント、視覚の各ベンチマークが向上し、タスク実行時間と出力長が減る。README の表では Terminal-Bench 4.0 が 42.3（前版 31.2）、DeepSWE v1.1 が 77.0、Apex Bench v1.1 が 72.1。比較表では GPT-5.6 Sol や Opus 5 を上回る項目も並ぶが、いずれも自社報告値で、HLE や Terminal-Bench では Opus 5 が上。派生の量子化・uncensored 版も上位に入っているが、ここでは本家のみ扱う。
- **[RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint)** (公開0日) - Recursive が出した、コーディングエージェント向けの MoE 言語モデル。総 39.8B・アクティブ約 2.5B で、コードベースの調査、バグ修正、機能実装、テスト作成を想定する。推論とマルチターンのツール利用に対応し、Terminal-Bench 2.1 で 54.9%、SWE-bench Pro v2 で 89.7%、SWE-bench Verified で 74.2% と報告している（自社報告。Terminal-Bench は Web 検索で得た解を失敗扱いとする設定）。
- **[LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B)** (公開9日) - Liquid AI の LFM2.5 ファミリーで最大かつ最終のモデル。総 24B・アクティブ約 2B の推論モデルで、オンデバイスで動く高速かつプライベートなエージェントを狙う。エージェント・ツール利用では、約5割大きい Qwen3.6-35B-A3B に匹敵し、LiveClaw では 48.09 対 38.19 としている。Apple M5 Max で毎秒 184 トークンの推論速度（自社報告）、コンテキスト長は 131,072。
- **[Anthropic/scorpion-toxin-binder-design](https://huggingface.co/datasets/Anthropic/scorpion-toxin-binder-design)** (dataset, 公開3日) - Claude が5種のサソリ毒素に結合するタンパク質をゼロから設計し、2つの受託機関が表面プラズモン共鳴で結合を測定したデータの公開。17個の設計が結合体で、Cn2 に7個、AaH II に4個、AaH I に4個、LqhIII に2個、Ts1 には0個だった。
- **[Qwen/BlenderWorld](https://huggingface.co/datasets/Qwen/BlenderWorld)** (dataset, 公開7日・補充枠) - 現実的な3D制作タスクでフロンティアモデルを評価するベンチマーク。建築、製品、自然環境、科学的可視化などにわたる223タスクで構成される。

## ベンチマーク・リーダーボード

LMArena Text Overall は公開日が 10/15 から 10/20 に更新された。上位は以下。

| 順位 | モデル | スコア |
| --- | --- | --- |
| 1 | Gemini 4 Argon (High) | 1532 |
| 2 | Claude Opus 5.5 (High) | 1516 |
| 3 | Claude Fable 5.1 (Max) | 1511 |
| 4 | Claude Opus 5 (Max) | 1508 |
| 5 | Claude Opus 5 (High) | 1502 |
| 6 | Muse Wonder (Max) | 1501 |
| 7 | Claude Opus 4.6 (High) | 1501 |
| 8 | Gemini 3.8 Flash (High) | 1498 |

顔ぶれは前回の 10/15 版とほぼ同じで、Opus 5.5 (High) が 1515 から 1516、Opus 5 (Max) が 1507 から 1508 と小幅に動いたのみ。Muse Wonder (Max) が 7 位から 6 位に上がった。

## 所感

OpenAI が Google Cloud 経由でモデルを配信し、ChatGPT の広告基盤を26か国に広げた。モデル提供の囲い込みよりも、流通経路と収益化の拡大に重心が移っている。オープンモデルでは、Flint や LFM2.5 のようにアクティブ約 2〜2.5B のまま、エージェント・コーディング性能を競う小型 MoE が目立つ。論文側もエージェントの安全性（出所の追跡）、推論予算の配分、経験記憶と、実運用の課題に寄ってきている。
