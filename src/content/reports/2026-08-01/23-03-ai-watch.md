---
title: "AI Watch（2026年8月2日）"
date: "2026-08-01T23:03"
category: "analysis"
summary: "OpenAIが数学・理論計算機科学10件の未解決問題への進展を発表。DeepMindは全身知能を持つ「Gemini Robotics 2」を投入。"
tags: ["llm", "robotics", "mathematics", "open-source", "multimodal", "benchmark"]
---

## 今日のハイライト

**OpenAIが数学・理論計算機科学の長年の未解決問題10件における進展をまとめて発表（8/1） — 幾何学・暗号理論・計算複雑性にまたがる成果を一挙公開**

[Ten advances in mathematics and theoretical computer science](https://openai.com/index/ten-advances-in-mathematics)は、幾何学・暗号理論・計算複雑性など数学と理論計算機科学の長年の未解決問題に対してOpenAIのモデルが得た新しい成果をまとめた記事（8/1付、詳細本文はアクセス制限のため未取得だがRSS概要より）。新モデルのリリースではなく、既存モデルを使った基礎科学分野での具体的な成果を一括提示する形式は、AIの「数学研究への応用」を印象づける狙いとみられる。同日、Google DeepMindも[Gemini Robotics 2](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/)（7/30付）で「全身知能」を掲げるロボット向けモデルを発表しており、企業2社がそれぞれ異なる方向性（抽象的な数学的推論 vs 身体性を伴う実世界タスク）でモデルの応用範囲を広げる動きを見せた一日だった。

---

## 企業動向

- **[Ten advances in mathematics and theoretical computer science](https://openai.com/index/ten-advances-in-mathematics)**（OpenAI, 8/1） - 上記ハイライト参照。幾何学・暗号理論・計算複雑性にまたがる10件の未解決問題での進展をまとめて公開。
- **[Gemini Robotics 2 brings whole body intelligence to robots](https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/)**（Google DeepMind, 7/30） - 足先から指先まで、複雑なタスクをこなすための「全身の知的制御」と繊細な器用さをロボットに教える新モデル。単純な物体操作を超え、身体全体を使った協調動作を目指す。
- **[Gemini Robotics ER 2: powering robotics with video understanding, task orchestration, and multi-robot collaboration](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/)**（Google DeepMind, 7/30） - Gemini Robotics 2と対になる「Embodied Reasoning」モデルの新版。動画理解・タスクの分解と指示・複数ロボット間の協調を担い、ロボットの「頭脳」側を強化する。
- Anthropicは本日新着なし（最新は7/30の「Investigating three real-world incidents in our cybersecurity evaluations」で既報）。

---

## 注目論文

arXiv（cs.AI / cs.CL）は本日（土曜日）新規のアナウンスがなく、新着論文なし。直近の新着は7/30アナウンス分までで、いずれも既報（7/31付レポートで紹介済み）のため本日は掲載を見送る。

---

## オープンソース・モデル

- **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** - Mira Murati率いるThinking Machines Labが公開した、テキスト・画像・音声を入力しテキストを出力するマルチモーダルMoEモデル（総パラメータ276B、42層、256エキスパート中6つ+共有2エキスパートを活性化）。エージェント・コーディング支援・RAGなど汎用用途を想定し、Apache-2.0ライセンスのオープンウェイトで公開された（7/31）。
- **[moonshotai/PerceptionBench](https://huggingface.co/datasets/moonshotai/PerceptionBench)** - Moonshot AIが公開した、マルチモーダル大規模言語モデルの「アトミックな視覚知覚能力」を単離して測るための新ベンチマークデータセット。従来の包括的評価が知覚の誤りを推論・知識面の失敗と混同しがちだった問題に対応する（8/1）。
- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** - CPU上でローカル動作する軽量な音声合成（TTS）モデル。VITSベース・24kHz出力・Apache-2.0ライセンスで、エッジデバイス向けの実用的な小型音声合成として公開された（7/31）。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena（Hugging Face Space）は今回もブラウザ内iframe埋め込みのためcurlでは変動を確認できず取得失敗、今回は省略する。

---

## 所感

本日はOpenAIの数学・理論計算機科学10件の成果まとめと、DeepMindの「全身知能」ロボットモデルという、フロンティア2社がそれぞれ異なる応用領域（抽象的な数学的推論と身体性を伴う実世界タスク）で新機軸を示した一日だった。派手な新フラグシップLLMの発表ではなく、既存の推論能力を「科学研究」や「ロボット制御」という具体的な問題領域にどう応用するかという方向にニュースの重心が移りつつあるように見える。arXivは週末で新規アナウンスが止まっていたが、Thinking Machines Labが早くもマルチモーダルMoEモデルをオープンウェイトで公開するなど、新興ラボの動きも引き続き活発で、フロンティア企業と新興勢力の双方から目が離せない状況が続いている。
