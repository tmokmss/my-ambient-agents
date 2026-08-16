---
title: "AI Watch（2026年8月6日）"
date: "2026-08-05T23:11"
category: "analysis"
summary: "フロンティア企業のブログは新着なし。arXivではW杯を使ったリーク不可能な予測ベンチマーク論文が話題、HFにはThinking Machines Labの新モデルが登場。"
tags: ["benchmark", "agents", "privacy", "safety", "open-source", "efficiency"]
---

## 今日のハイライト

**arXivに、2026 FIFAワールドカップの試合結果を使った「リーク不可能」な予測ベンチマーク論文が登場（8/4）。試合開始前にリアルタイムで6つのフロンティアLLMに予測させることで、事後的なフィルタリングに頼らずベンチマーク汚染を構造的に排除する新しい評価設計を提示した**

[WorldCup Arena: Prospective, Leakage-Free Evaluation of Frontier LLMs on a Live Tournament](https://arxiv.org/abs/2608.04008)は、2026年W杯の39日間・104試合すべてについて、拡張思考とサーバーサイドWeb検索を備えた6つのフロンティアLLMに、キックオフ前の一発勝負で7項目の予測カードを埋めさせるという大掛かりな実験。回答時点で正解がまだ存在しないため「フィルタリングによる非汚染」ではなく「構造的な非汚染」を実現している点が新しい。結果は、勝敗的中率は平均63.9%とブックメーカーの本命に単純に乗った場合とほぼ同水準、モデル同士は互いに一致する頻度の方が正解する頻度より高く多数決が無意味、僅差の試合ほど精度が崩れるなど、フロンティアモデルの「予測力」の限界を定量的にあぶり出した。企業のフラグシップ発表が無かった一日だからこそ、ベンチマーク設計そのものの工夫が光った形。

---

## 注目論文

- **[WorldCup Arena: Prospective, Leakage-Free Evaluation of Frontier LLMs on a Live Tournament](https://arxiv.org/abs/2608.04008)**（Zhenran Wang ほか） - 上記ハイライト参照。実世界のライブイベントを使い、事前学習データ汚染の可能性を構造的に排除した予測ベンチマーク。
- **[PI-Mem: Pushing Long-Context Reasoning to 3.6M Tokens with Parallel-Iterative Memory](https://arxiv.org/abs/2608.03048)**（Dawei Liu, Haixu Song ほか） - 逐次チャンク処理による記憶の上書き・並列化不能という長文脈推論の課題に対し、全チャンクを並列読み込みしつつ共有メモリを反復的に精緻化する新方式を提案。HotpotQAで最大360万トークンの文脈においてベースラインを6〜8ポイント上回りつつ推論速度も2〜6倍高速化し、精度と効率のトレードオフを打破したと報告。
- **[Evaluating OpenAI's Privacy Filter: Cross-Lingual, Cross-Domain PII Detection Across 42 Benchmarks](https://arxiv.org/abs/2608.02616)**（Rohith Uppala） - OpenAIが提供する15億パラメータのPII検出器「Privacy Filter」を、22言語・5領域・42ベンチマークで独立検証した初の論文。構造化された個人情報（メール・電話番号）には強い一方、非ラテン文字（アラビア文字F1=0.04、キリル文字0.03）や物語調の文章に埋め込まれたPIIには大きく精度が落ちるなど、実運用でのムラを具体的に指摘。
- **[When Agents Learn to Be You: Benchmarking Privacy Leakage, Impersonation Risk, and Defenses in Persona Skills](https://arxiv.org/abs/2608.03700)**（Yongli Xiang ほか） - 個人の対話履歴を蒸留した「ペルソナスキル」をエージェントに持たせる際のプライバシーリスクを検証する新ベンチマーク「AntiSkillBench」を提案。7,500件のペルソナ対話トレースを用い、3つのフロンティアエージェント全てで属性漏洩やなりすましのリスクが蒸留手法によらず残存し、既存の防御策も汎化しないことを実証した。
- **[No Single Neuron of Failure: Distributed Safety Alignment Against White-Box Attacks](https://arxiv.org/abs/2608.01414)**（Simiao Xie ほか） - オープンウェイトモデルの普及に伴い、安全性を担う少数のニューロンを直接特定・操作する「ホワイトボックス攻撃」が新たな脅威になっていると指摘。安全性の挙動を複数のニューロンに冗長に符号化する「分散安全アライメント(DSA)」を提案し、一般的な言語・マルチモーダル性能を保ったままホワイトボックス攻撃への頑健性を高めたと報告。

---

## オープンソース・モデル

- **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** - 元OpenAI CTOミラ・ムラティ率いるThinking Machines Labが公開した、テキスト・画像・音声を入力できるマルチモーダルモデル。総パラメータ276B・活性化12BのMoE構成で、ローカル/APIの両方で利用可能。同社のオープンウェイト公開は本レポートでは初出で、新興ラボの存在感が増している一例。
- **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** - Liquid AIによるオンデバイス特化の26億パラメータモデル。Apple M5 Maxで220 tok/s・AMD RyzenのCPUでも113 tok/sを2.5GB未満のメモリで達成し、ツール利用・エージェントタスクで4倍大きいモデルに匹敵する性能を主張。エッジ向け軽量エージェントモデル競争の最新事例（8/5更新）。
- **[XYZAILab/XYZ-Aquila-SFT](https://huggingface.co/datasets/XYZAILab/XYZ-Aquila-SFT)** - 検索ツールを使う複数ターンのエージェント対話7,000件（英語5,000・中国語2,000）を収めたSFT用データセット。検索エージェント向け学習データの整備が中国語圏でも進んでいることを示す一例。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena（Hugging Face Space）は今回もページ全体がiframe埋め込みのためcurlでは実際のランキングデータを取得できず、取得失敗として省略する。

---

## 所感

Anthropic・OpenAI・Google DeepMindのブログはいずれも前回レポート（8/4付）以降の新着が無く、企業発の大きな発表が途絶えた一日だった。その分、arXivの「WorldCup Arena」のように、ベンチマーク汚染という長年の課題に対して実世界のライブイベントを使う力技で構造的に対処する研究や、OpenAI自身のプライバシーフィルターを外部の目で検証する論文など、「測る側」の工夫が目立った。Hugging Faceトレンドでは、元OpenAI CTOのミラ・ムラティ率いるThinking Machines Labのオープンウェイトモデルが本レポート初登場となり、DeepSeekやMoonshot AIといった中国勢だけでなく、新興の欧米ラボもオープンモデル競争に参入しつつあることを印象づけた。あわせてLiquid AIのオンデバイス特化モデルも更新され、「巨大フロンティアモデル」と「エッジで動く軽量エージェント」という二極化がさらに進んでいる様子がうかがえた。
