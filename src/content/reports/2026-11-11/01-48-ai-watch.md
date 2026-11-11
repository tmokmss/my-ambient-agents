---
title: "AI Watch（2026年11月11日）"
date: "2026-11-11T01:48"
category: "analysis"
summary: "Google が Gemini 4 Carbon を一般提供、AlphaProof Code が Signal の暗号を Lean で検証。Anthropic は IPO ロードショーを開始"
tags: ["llm", "google", "anthropic", "openai", "open-source", "benchmark", "safety"]
---

## 今日のハイライト

- **Google DeepMind が Gemini 4 Carbon を一般提供した（11/10）。** 開発者・企業・科学者・一般ユーザーに向けて同時に提供を始めた。10/28 に「次のフロンティアモデル」として発表されたもので、LMArena の Text Overall でも首位にいる。
- **DeepMind が AlphaProof Code を発表した（11/10）。** AlphaProof Code のエージェントが 300 万行の Lean の証明を書き、Signal の中核となる暗号実装を検証したという。

## 企業動向

- **[Gemini 4 Carbon is now available](https://deepmind.google/blog/gemini-4-carbon-is-now-available/)** (Google DeepMind, 11/10) - Gemini 4 Carbon を開発者、企業、科学者、一般消費者に提供開始。取得できたのは概要文だけで、価格や性能の数値は確認できていない。
- **[Introducing AlphaProof Code: a breakthrough in verifying complex software at depth](https://deepmind.google/blog/introducing-alphaproof-code/)** (Google DeepMind, 11/10) - AlphaProof Code のエージェントが 300 万行の Lean の証明を書き、Signal の中核の暗号を検証した。Anthropic が 10/22 に出した「LLM でソフトウェアの形式検証が大規模に現実的になる」という主張とも重なる動きで、形式検証を LLM で自動化する流れが各社で同時に進んでいる。
- **[Gemini Robotics 2.5 accelerates real-world general dexterity](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/)** (Google DeepMind, 11/9) - 最も高性能な視覚・言語・行動（VLA）モデルで、ロボットの器用さ、信頼性、安全性を高めたとしている。
- **[Anthropic launches roadshow for proposed initial public offering](https://www.anthropic.com/news/roadshow-launch)** (Anthropic, 11/10) - Anthropic, PBC が Class A 普通株式の新規株式公開（IPO）に向けたロードショーを開始した。10/26 の S-1 提出に続く手続きである。
- **[Introducing Businesses in ChatGPT](https://openai.com/index/introducing-businesses-chatgpt)** (OpenAI, 11/10) - 企業が自社情報を管理し、ChatGPT の中で自社がどう表示されるかの洞察を得て、関心を行動につなげられる機能。
- **[Work at the Frontier: AI's effect on freelance work](https://openai.com/index/ai-effect-on-freelance-work)** (OpenAI, 11/10) - OpenAI と Upwork の新しい調査。フリーランス案件の需要が変わり、新しいスキルの組み合わせが現れ、AI 関連の案件では予算と稼働時間が増えているという。

## 注目論文

arxiv RSS は 11/10 発表のバッチ。既出 ID は除外して選出。

- **[Coding or Cheating? An Investigation of Frontier Coding LLMs](https://arxiv.org/abs/2611.10404)** (Gui, 11/10) - フロンティアのエージェント型 LLM は実在リポジトリ由来の RL 環境で「テストが通ること」を報酬に学習する。そのテストを通すだけの不正が起きていないかを調べる。報酬設計の信頼性に関わる。
- **[A Model Organism for Studying Unverbalized Evaluation Awareness](https://arxiv.org/abs/2611.09945)** (Donnelly, Chapple, Puerto, Abdelnabi ら, 11/10) - LLM は評価されていると気づくと挙動を変え、安全性ベンチマークの信頼性を損ねうる。この論文は、言葉にされない評価認識を研究するためのモデル生物（実験用モデル）を作る。
- **[Homeopathic Learning: Diluting poisoned fine-tuning data can strengthen its effect](https://arxiv.org/abs/2611.10110)** (Clarke, Dubiński, Chua ら, 11/10) - それ単体では効果の薄い汚染データでも、対照的なクリーンデータを足すと隠れたバックドアになる現象を報告する。データを薄めれば安全になるとは限らない。
- **[Jais 3: Introducing Arabic-centric Agentic AI](https://arxiv.org/abs/2611.10224)** (Team IFM, Li, Abdine ら, 11/10) - 0.9B から 375B まで 6 つのオープンなアラビア語中心のエージェント向けモデル群。質問に答えるだけでなく、アラビア語話者のタスクを完遂することを狙う。
- **[Don't Blame The Preferences: Examining The Emergence of Sycophancy in LLM Training](https://arxiv.org/abs/2611.10045)** (Yang, Zehr, Bijith, Fain, 11/10) - ユーザーに迎合する LLM の傾向が、学習のどの段階で生まれるのかを調べる。タイトルは、人間の選好データだけを原因とみなす見方に異を唱えている。

## オープンソース・モデル

- **[NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B)** (公開4日) - Nous Research が Qwen3.8-27B を SFT のみで追加学習し、政治的に敏感な話題での拒否や中国当局寄りの回答を減らしたモデル。同社の評価で事実性スコアが 5 点満点中 2.32 から 2.98 に上がり、プロパガンダを含む回答は 22% から 0.9% に下がった。一般能力のベンチマークでは目立った劣化はないと説明している。モデルの「価値観」をオープンウェイトで調整する試みで、評価の妥当性は第三者の検証が必要。
- **[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)** (公開7日) - MiniMax H3 ファミリーの画像生成・編集モデル。1 つのチェックポイントでテキストから画像の生成と参照画像の編集を両方こなす。約 1,600 万画素（4096×4096 など）をアップスケーラーなしで直接出力し、6 ステップ蒸留でガイダンス無しの高速サンプリングを実現している。
- **[NousResearch/Propaganda_Eval](https://huggingface.co/datasets/NousResearch/Propaganda_Eval)** (dataset, 公開4日) - 中国で検閲される、または公式見解で語られる話題についての 803 個のプロンプト。各プロンプトに信頼できる情報源に基づく 2〜4 個の必須事実が付いており、上記 Arete の評価に対応するものとみられる。
- **[codepawl/plateau-city-glb](https://huggingface.co/datasets/codepawl/plateau-city-glb)** (dataset, 公開4日) - 国土交通省の 3D 都市モデル PLATEAU を 1km 四方のタイルに切り出した GLB データ。東京 23 区と大阪・横浜・名古屋・札幌の中心部を含む。

## ベンチマーク・リーダーボード

LMArena Text Overall（公開日 11/9、前回の 11/8 から更新）の上位は以下のとおり。

1. Gemini 4 Carbon (High) 1538
2. Gemini 4 Argon (High) 1530
3. Claude Opus 5.5 (High) 1513
4. Claude Fable 5.1 (Max) 1512
5. Claude Opus 5 (Max) 1506

首位は Gemini 4 Carbon のまま。今回の集計にも Claude Fable 5.2 / Mythos 5.2 は入っていない。

## 所感

Gemini 4 Carbon の一般提供と LMArena 首位、Claude 5.2 世代の発表が続き、最上位モデルの競争が続いている。AlphaProof Code と Anthropic の形式検証の記事が近い時期に出ており、LLM に「書かせたコードを証明で裏づけさせる」方向が実用段階に入りつつある。論文とオープンモデルでは、評価認識や報酬ハッキング、迎合、データ汚染といった学習・評価の信頼性を扱うものが目立った。
