---
title: "AI Watch（2026年8月3日）"
date: "2026-08-02T23:03"
category: "analysis"
summary: "企業ブログ・arxivともに新着なしの静かな一日。Hugging FaceトレンドではBaiduの高速OCRモデルと超大規模コードデータセット「The Stack v3」が浮上。"
tags: ["ocr", "open-source", "dataset", "coding", "reasoning"]
---

## 今日のハイライト

**フロンティア企業のブログとarXivは新着なしの静かな日曜日。Hugging Faceトレンドでは、Baiduの高速OCRモデル「Unlimited-OCR」と、Hugging Face自身が公開した15.9TB・約4.9兆トークン規模のコード事前学習データセット「The Stack v3」が浮上（いずれも直近1〜3日以内）**

[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)は、DeepSeek-OCRの流れを汲み「ワンショットでの長文書パース」を掲げるBaiduのOCR/文書理解モデル。vLLM・ms-swiftなどの主要エコシステムに次々と対応が進み、コミュニティの後押しで急速に注目度を上げている。一方、[HuggingFaceCode/stack-v3-train](https://huggingface.co/datasets/HuggingFaceCode/stack-v3-train)は、The Stack v2の後継としてHugging Faceが公開したGitHubクロールベースの巨大コードデータセット。全体では113.7TB・224Mリポジトリに及び、学習用サブセットだけでも15.9TB・4.9兆トークンとオープンなコードLLM学習の基盤整備が着実に進んでいることを示す。企業からの新モデル発表が途絶えた一日だった分、こうした基盤データ・実用ツール寄りの動きが目立った。

---

## 注目論文

arXiv（cs.AI / cs.CL）は本日（日曜日）新規のアナウンスがなく、新着論文なし。arXivは土日をスキップする運用のため、次回の新着は月曜アナウンス分（日本時間火曜早朝）以降となる見込み。直近の新着はいずれも既報（7/31・8/1付レポートで紹介済み）。

---

## オープンソース・モデル

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** - DeepSeek-OCRをさらに一歩進めることを掲げるBaiduのOCR/文書理解モデル。「one-shot long-horizon parsing」により長い文書を一度の推論で解析することを狙い、vLLM・ms-swift・ModelScopeなど主要エコシステムへの対応を急速に進めている（7/29更新）。
- **[HuggingFaceCode/stack-v3-train](https://huggingface.co/datasets/HuggingFaceCode/stack-v3-train)** - Hugging Face自身が公開した、GitHubを直接クロールしたオープンなコード事前学習データセット「The Stack v3」。The Stack v2の後継で、2025年8月時点のGitHub状態を反映し713言語・173Mリポジトリから学習用サブセット15.9TB（約4.9兆トークン）を収録。ファイル内容を全文インラインで含み、ダウンロード直後から学習に使える形で提供される（7/31更新）。
- **[Qyrou/reasoning-corpus-4K-5M-v1](https://huggingface.co/datasets/Qyrou/reasoning-corpus-4K-5M-v1)** - DeepSeek-V4（Pro/Flash）やQwen3.5/3.6、Gemma4など複数の主要モデルから収集した推論チェーン（Chain-of-Thought）を、シーケンス長5k以内・約500万件にまとめた蒸留用データセット。小型モデル（SLM）への推論能力の蒸留を主目的とし、多数の既存リポジトリを統合・フィルタリングして構成されている（7/31更新）。

---

## 所感

企業ブログ側はAnthropic・OpenAI・Google DeepMindのいずれも新着がなく、arXivも週末で新規アナウンスが止まるという、今週では珍しく静かな一日だった。一方でHugging Faceのトレンドを見ると、派手な新フラグシップモデルではなく「OCRの実用性向上」や「オープンなコード事前学習データの整備」「推論能力の蒸留用データセット」といった、既存モデルの能力を実際のワークフローに落とし込むための基盤・ツール寄りの動きが着実に続いていることがうかがえた。フロンティアモデル競争が一服する日にこそ、こうした地道なデータ・インフラ整備の進捗に目を向けておく価値があると感じた一日だった。
