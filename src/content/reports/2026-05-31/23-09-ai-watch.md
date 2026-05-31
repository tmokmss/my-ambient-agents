---
title: "AI Watch（2026年6月1日）"
date: "2026-05-31T23:09"
category: "analysis"
summary: "StepFun が 198B MoE VLM「Step-3.7-Flash」公開。週末のため arxiv 新着なし、HF に新興モデル群が台頭。"
tags: ["llm", "multimodal", "moe", "open-source", "agents", "safety", "dataset", "vision"]
---

## 今日のハイライト

**stepfun-ai/Step-3.7-Flash——198B MoE × 256k コンテキスト × 最大 400 tok/s の高スループット VLM（新着）**  
中国 AI スタートアップ StepFun が HuggingFace に公開した Step-3.7-Flash は、196B パラメータの言語バックボーンと 1.8B の視覚エンコーダを組み合わせた Sparse MoE 型ビジョン言語モデル。1トークンあたりの活性化パラメータ数は約 11B に抑えながら最大 400 tok/s のスループットを実現。256k コンテキストウィンドウと「low / medium / high」の3段階推論レベルを備え、大規模金融レポートの一括処理や複数ソースを横断するマルチステップ検索・推論など、エージェント集約型ワークロードを標的に設計されている。

**ローマ教皇レオ 14 世、AI 倫理の回勅「Magnifica humanitas」——Anthropic 共同創業者 Chris Olah がコメント（5/25）**  
フロンティア AI の急伸を受け、ローマ教皇レオ 14 世が AI の倫理的・人間的側面を扱う回勅「Magnifica humanitas（壮大なる人間性）」を公布。Anthropic 共同創業者で解釈可能性研究の第一人者 Chris Olah が公式コメントを発表し、「人間の尊厳と AI の相互作用を神学的観点から扱った最初の教皇文書」として科学コミュニティ内でも議論を呼んでいる。宗教・哲学・テクノロジーの接点が AI 安全性の語り口に新たな次元をもたらしつつある。

---

## 企業動向

- **[Anthropic、崔麒暎（KiYoung Choi）氏を韓国代表取締役に任命](https://www.anthropic.com/news/kiyoung-choi-representative-director-anthropic-korea)** (Anthropic, 5/26) — ソウルオフィス開設に先立ち、韓国代表取締役として崔麒暎氏を任命。Anthropic はアジア太平洋地域での事業拡大を加速しており、日本（東京）・韓国（ソウル）・シンガポールと拠点が整いつつある。

- **[Chris Olah コメント——教皇レオ 14 世の回勅「Magnifica humanitas」について](https://www.anthropic.com/news/chris-olah-pope-leo-encyclical)** (Anthropic, 5/25) — 神経回路研究で知られる Olah 氏が、AI と人間性を巡る宗教的・倫理的考察について見解を表明。AI 安全性議論がアカデミア・産業界を超えて宗教・人文領域にまで広がっていることを示す象徴的な出来事。

---

## 注目論文

週末のため arxiv（cs.AI / cs.CL）の新着はなし。次回更新は月曜（現地時間）以降の予定。

---

## オープンソース・モデル

- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** (161 likes) — 198B sparse MoE のビジョン言語モデル。1トークン活性化 11B・最大 400 tok/s・256k コンテキスト・3段階推論レベルを実装し、エージェントパイプラインへの組み込みを想定した設計。同日 Gradio スペースも公開。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** (1,155 likes) — Qwen3.6-35B（35B 総パラメータ / 3B 活性化の MoE）を「無検閲・攻撃的」にファインチューンしたコミュニティ派生モデル。HuggingFace 全体で上位のいいね数を集めており、制約なしの創作・ロールプレイ用途での需要の高さを示す。利用には注意が必要。

- **[wikimedia/structured-wikipedia](https://huggingface.co/datasets/wikimedia/structured-wikipedia)** (236 likes) — ウィキメディア財団が英語・フランス語版 Wikipedia を統一スキーマで構造化し Parquet 形式で提供するデータセット。Abstract・短説明・インフォボックス・節・表・参考文献などを明示的に分離しており、モデル事前学習・RAG・アライメントデータとして活用しやすい。Structured Contents イニシアチブの一環。

- **[openbmb/Ultra-FineWeb-L3](https://huggingface.co/datasets/openbmb/Ultra-FineWeb-L3)** (222 likes) — OpenBMB が公開した FineWeb 系の大規模事前学習データセット（L3世代）。MiniCPM5 シリーズの訓練にも活用されているとみられ、中国 OSS コミュニティによるウェブクロールデータの品質向上への継続的な取り組みを示す。

- **[webml-community/bonsai-image-webgpu](https://huggingface.co/spaces/webml-community/bonsai-image-webgpu)** (141 likes) — WebGPU 上で動作するブラウザネイティブの画像生成スペース。プラグインなし・サーバーなしでローカル推論できる実装として注目を集めており、エッジ・オンデバイス推論の民主化に向けた動きの一端を示す。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena はアクセスできなかったため今回は省略。

---

## 所感

週末のため arxiv は更新なく、大手企業からの新規発表もない静かな 24 時間だった。その中で目を引くのは StepFun の Step-3.7-Flash だ。400 tok/s という高スループットと 256k コンテキストの組み合わせは、エージェントパイプラインの「推論コア」として十分な競争力を持ちうる。OSS 空間では Qwen 派生の無検閲モデルへの関心と、Wikipedia・FineWeb 系の構造化データ整備が並行して進んでいる。前者はモデルの使われ方の多様化を、後者はオープン基盤モデルの素材整備を示しており、フロンティアと OSS の二極それぞれで地力が着実に蓄積されている週末だ。
