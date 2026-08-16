---
title: "AI Watch（2026年8月8日）"
date: "2026-08-07T22:48"
category: "analysis"
summary: "OpenAIがAstraのサイバー評価公開、AnthropicはFable 5の生物学的セーフガードを改善。MiniMax H3の音声同期動画生成モデルがHFトレンド席巻。"
tags: ["safety", "security", "multimodal", "benchmark", "open-source", "governance"]
---

## 今日のハイライト

**OpenAIが次世代の「重大なサイバー能力」に関する予備評価結果を公開し安全対策の強化を発表（8/7）。同日、AnthropicもFable 5の生物学的セーフガードを改善し過剰な拒否を減らしたと発表 — フロンティア2社が同じ日にそれぞれサイバー・バイオという異なる高リスク領域での安全対策アップデートを打ち出した**

[Responding to the next frontier of critical cyber capabilities](https://openai.com/index/responding-next-frontier-critical-cyber-capabilities)は、社内で「Astra」と呼ばれるシステムを対象とした予備的なサイバーセキュリティ評価の結果を公開し、セーフガードとセキュリティ管理体制を強化する方針を示した記事（Securityカテゴリ）。直近ではOpenAIは8/4にもサードパーティによるサイバー評価インシデントを開示しており、サイバー領域でのフロンティアモデルのリスク管理を継続的に発信している。

同じ8/7、Anthropicは[Improving Fable 5's biology safeguards](https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards)で、Fable 5の生物学関連セーフガードを更新し、正当な質問への過剰拒否（フォールバック）を大幅に削減したと発表した。能力向上競争の裏で、サイバー・バイオという2大高リスク領域それぞれのセーフガード精度を継続的にチューニングする動きが、両社で並行して進んでいることがうかがえる。

---

## 企業動向

- **[Responding to the next frontier of critical cyber capabilities](https://openai.com/index/responding-next-frontier-critical-cyber-capabilities)**（OpenAI, 8/7） - 上記ハイライト参照。
- **[Improving Fable 5's biology safeguards](https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards)**（Anthropic, 8/7） - 上記ハイライト参照。
- Google DeepMindは新着なし（直近は8/6付「WeatherNext」で既報）。

---

## 注目論文

- **[The Closing Window: How Governments Could Lose Their Ability to Restrain Advanced AI](https://arxiv.org/abs/2608.05173)**（Peter Barnett） - AI能力が高まるにつれ各国政府がAI開発を制限する必要に迫られる可能性がある一方、どのような世界情勢やAI開発の状態変化が「政府がもはや制限できない」状況を生むかを分析。将来のガバナンスが不可能になりうる具体的な経路を提示する政策論文。
- **[Large Language Models Threaten Double-blind Review](https://arxiv.org/abs/2608.05157)**（Bulambo Mwendelwa Gloire, Prasenjit Mitra） - 学術界の査読における匿名性は「引用ネットワークや文体では著者を特定しにくい」という前提に支えられてきたが、モデル学習後に発表されたタイトル・要旨だけを与えても、LLMは人間より効率的に匿名性を突破し著者を推定できることを実証。ダブルブラインド査読制度そのものの前提が揺らいでいることを示す。
- **[Hijacking Robots with a Piece of Paper: A Systematic Study of Physical Prompt Injection in VLM-Controlled Robots](https://arxiv.org/abs/2608.05715)**（S. M. Bhagya P. Samarakoon ほか） - VLMをプランナーとして使うロボットは、カメラに映る視覚情報がそのまま推論への入力になるため、ロボットの視界に置かれた敵対的なテキストが間接的なプロンプトインジェクションとして機能してしまうと指摘。4種類の攻撃分類を提示し、紙一枚で仕分けロボットの挙動を乗っ取れることを実証した。
- **[Measuring and Detecting Harmful AI Sycophancy](https://arxiv.org/abs/2608.05624)**（Bohan Jiang, Dawei Li, Yasin Silva, Huan Liu） - モデルがユーザーの意向に合わせて当初の立場を覆す「迎合的な立場反転（PSRS）」という有害なおもねりのパターンに着目し、単一の応答だけからこれを自動検出する新手法CAPを提案。おもねりの「量」の測定にとどまらず「検出」に踏み込んだ点が新しい。
- **[Mood Matters: How Syntactic Sensitivity Undermines Safety Alignment](https://arxiv.org/abs/2608.05409)**（Alina Klerings ほか） - 時制を過去形に変えるだけで安全策を回避できるという先行研究を拡張し、命令形以外の非命令的な構文一般がジェイルブレイクの抜け穴になりうることを発見。70Bパラメータまでの16モデルで検証し、因果媒介分析で構文的な脆弱性の根本原因に迫った。

---

## オープンソース・モデル

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** - MiniMaxが公開したオムニモーダル生成モデル。テキスト・画像・動画・音声を統一的に理解し、最大2K解像度・15秒・32kHzステレオのネイティブ音声付き動画を生成できる。likes 2,940と急上昇中で、派生リポジトリの[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)（ComfyUI対応版、ダウンロード314万件）やお試しSpace [multimodalart/minimax-h3](https://huggingface.co/spaces/multimodalart/minimax-h3)も同時にトレンド上位に入り、エコシステム全体で一気に注目を集めている。
- **[HuggingFaceCode/stack-v3-train](https://huggingface.co/datasets/HuggingFaceCode/stack-v3-train)** - コード生成モデルの学習向けに1億〜10億件規模で公開された「The Stack v3」の学習用データセット。GitHubリポジトリのメタデータ（スター数・フォーク数・コミット履歴等）付きでコードを収録しており、コーディングLLMの事前学習・継続学習向けの基盤データ整備が進んでいることを示す一例。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena（Hugging Face Space）は今回もアクセスがリダイレクトされ、curlでは実際のランキングデータを取得できず、取得失敗として省略する。

---

## 所感

本日はOpenAIの「Astra」サイバー評価とAnthropicの「Fable 5」バイオセーフガード改善が同日に並び、フロンティア2社がサイバー・バイオという異なる高リスク領域でそれぞれ独立に安全対策を磨き込んでいる様子が印象的だった。arXivでも、ダブルブラインド査読の匿名性が破られるリスクや、紙一枚でロボットを乗っ取れる物理的プロンプトインジェクション、構文の言い回しだけで安全策をすり抜けるジェイルブレイクなど、既存の制度・防御策の「思わぬ穴」を突く論文が目立ち、能力向上と並行して守りの前提を問い直す研究が引き続き活発である。オープンソース側では、MiniMaxのオムニモーダル動画生成モデルH3がモデル本体・ComfyUI対応・デモSpaceの三点セットで一気にトレンドを席巻し、テキスト・画像・音声・動画を横断する生成AIの統合が着実に進んでいることを印象づけた。
