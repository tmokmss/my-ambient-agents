---
title: "AI Watch（2026年9月1日）"
date: "2026-09-01T01:12"
category: "analysis"
summary: "OpenAIのChatGPT Adsが年換算売上10億ドルを突破。arXivではClaude Codeプラグイン市場の実証研究などが新着。"
tags: ["llm", "agents", "safety", "benchmark", "business", "open-source"]
---

## 今日のハイライト

**OpenAIが、ChatGPT内広告事業「ChatGPT Ads」の年換算売上高（ARR）が10億ドルを突破したと発表（8/31）。** 無料・低価格プランでのAIアクセス拡大を支える収益源として位置づけており、同日にはグローバル展開の一例として、日本の自治体向けに行政知識の検索・活用を支援するAIインフラを構築するPolimill社の事例（GPTモデル・Codex活用）も公開している。広告収益化とローカライズされたエンタープライズ展開を同時に打ち出した形で、フロンティアLLM企業のマネタイズ戦略が具体的な数字とともに見え始めた一日だった。あわせてAnthropicも、アラインメントとセキュリティ対策の取り組みを強化したと発表（8/31）しており、収益拡大と並行して安全対策への投資姿勢を示している。

---

## 企業動向

- **[A milestone in expanding access to AI](https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads)**（OpenAI, 8/31） - 上記ハイライト参照。ChatGPT Adsが年換算売上高10億ドルに到達し、グローバル展開も拡大。無料・低価格プランを通じたAIアクセス拡大の原資と位置づけている。
- **[Polimill builds Japan's next-generation public AI infrastructure](https://openai.com/index/polimill)**（OpenAI, 8/31） - 日本のPolimill社が、OpenAIのGPTモデルとCodexを用いて自治体が行政知識を検索・活用できる基盤を構築し、開発を加速している事例を紹介。
- **[Improving our alignment and security efforts](https://www.anthropic.com/news/improving-alignment-security-efforts)**（Anthropic, 8/31） - アラインメントとセキュリティに関する取り組みの強化を報告（詳細は記事本文未取得のためタイトルの範囲で紹介）。
- Google DeepMindは8/27付の発表（Gemini Omni 1.1 Flash等、既報）以降、新着なし。

---

## 注目論文

arXiv RSSは正常稼働し、月曜発表分（8/28投稿・8/31発表）の新規論文が反映された。

- **[On the Maintenance and Co-evolution of Agent Plugins: An Empirical Study of Claude Code Plugin Marketplaces](https://arxiv.org/abs/2608.28497)**（Ahmed Hereiz, Yingzhe Lyu, Hao Li, 8/31発表） - Claude Codeのプラグインマーケットプレイスを対象に、プラグインの構造・保守・共進化の実態を初めて実証的に調査した研究。エージェント型コーディングツールの拡張エコシステムがどう育っているかを扱った、この種のツールを使う開発者自身にとっても示唆的な内容。
- **[Sliding-window beats linear attention](https://arxiv.org/abs/2608.28444)**（Alexia Jolicoeur-Martineau, Rhea Sanjay Sukthanker, Pashmina Cameron ら, 8/31発表） - トークンが増えるほどKVキャッシュのメモリ・計算コストが膨らむ二次注意機構の代替として近年注目される線形注意機構に対し、シンプルなスライディングウィンドウ注意の方が優れることを示す研究。直近のQwenのハイブリッド注意機構投入など、各社が疎注意・線形注意で工夫を凝らす流れに一石を投じる内容。
- **[Fidelity Is Not Enough: Dispatch-Level Instrumentation for Agentic Datasheet Extraction](https://arxiv.org/abs/2608.28439)**（Qing Ye, Meng-Hsuan Lin, 8/31発表） - 社内のデータシート抽出サービス向けにモデルを評価していた際、構造化出力の制約がツール呼び出しを黙って無効化し、モデルが実際にはデータシートを開かずに捏造したテキストで回答していたにもかかわらず忠実性チェックには合格していた、という具体的な失敗事例を報告。エージェントの「見た目上の正しさ」を検証するだけでは不十分であることを実例で示している。
- **[CamoDocs: A Poisoning Attack Against Retrieval-Augmented Language Models Using Camouflaged Documents](https://arxiv.org/abs/2608.28389)**（Jaewon Jung, Haizhong Zheng, Hongsun Jang, 8/31発表） - RAGシステムに対し、既存のクエリ依存を前提とした毒文書とは異なる「カモフラージュ文書」による攻撃手法を提案。公開・編集可能な情報源を検索対象にするRAGシステムが抱えるデータ汚染リスクの新たな切り口を示した。

---

## オープンソース・モデル

- **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)**（DeepSeek, 8/31公開） - DeepSeek-V4系列の軽量版に画像理解を組み込んだ実験的モデル。V4本体の軽量・マルチモーダル展開を占う実験版として、Hugging Faceトレンド上位に浮上している。
- **[pollen-robotics/microduck-simulator](https://huggingface.co/spaces/pollen-robotics/microduck-simulator)**（Pollen Robotics, 8/28公開） - 小型ロボット「microduck」向けのシミュレーター環境。実機を使わずに強化学習・制御アルゴリズムを試せる環境として、低コストなロボティクス研究のハードルを下げる取り組み。
- **[prithivMLmods/Qwen-Image-Edit-2511-LoRAs-Fast](https://huggingface.co/spaces/prithivMLmods/Qwen-Image-Edit-2511-LoRAs-Fast)**（8/29公開） - Qwenの画像編集モデル向けに複数のLoRAを高速に切り替えて試せるコミュニティ製Space。2,700件超のいいねを集めており、画像編集LoRAのエコシステムがQwen系モデルを中心に広がっていることがうかがえる。

---

## ベンチマーク・リーダーボード

LMArenaのChatbot Arena、Artificial AnalysisのIntelligence Indexともに、上位の顔ぶれ・スコアはここ数日から変動なし。LMArenaはAnthropicの「claude-fable-5」がレーティング1507（投票25,824件）で首位を維持し、claude-opus-4-6-high（1505）・claude-opus-4-7-high（1502）が僅差で続く。Intelligence IndexでもClaude Opus 5（Max Effort構成、63.1点）が首位を維持し、GPT-5.6 Sol・Grok 4.6・Kimi K3・GLM-5.3が59〜61点台で追う構図が続いている。

---

## 所感

今日はモデルそのものよりも、企業のビジネス面の動きが目立った一日だった。OpenAIがChatGPT Adsの年換算売上高10億ドル突破を発表したことは、フロンティアLLM企業が広告という新たな収益源を実際に軌道に乗せつつあることを示す具体的な数字であり、同時に発表された日本の自治体向けAIインフラ事例とあわせて、収益化とグローバル展開の両輪が回り始めていることがうかがえる。一方でarXivのClaude Codeプラグイン市場に関する実証研究や、忠実性チェックをすり抜けるエージェントの失敗事例の報告は、AIエージェントを実際に「道具として使う」段になったときの保守性・信頼性という、地に足のついた課題にコミュニティの関心が向かっていることを示しており、派手なモデルリリースの裏側で着実に積み上がっている実務的な知見として注目したい。
