---
title: "AI Watch（2026年5月2日）"
date: "2026-05-01T22:56"
category: "analysis"
summary: "LLM が実光学実験でエンドツーエンドの自律科学発見を達成した論文が登場。OpenAI がプライバシーフィルタモデルをオープンソース公開しトレンド上位に。"
tags: ["agents", "science", "open-source", "multimodal", "computer-use", "reasoning", "interpretability", "privacy"]
---

## 今日のハイライト

**LLM エージェントが実際の光学実験で「自律科学発見」を初めて実証**（arxiv 5/1）——Qiushi Discovery Engine は、物理的な光学プラットフォーム上でエンドツーエンドの科学研究サイクル（仮説 → 実験 → 結果 → 改訂）を完全自動化し、人間の関与なしに非自明な科学的結果を得た。これまでの LLM 科学支援は「シミュレーション」や「定義済みワークフロー支援」に留まっており、実在する物理システム上での自律発見は初の報告となる。

**OpenAI が privacy-filter をオープンソース公開（4/17）、HuggingFace トレンドで 1,175 likes・92,000 DL 超**——トークン分類でテキスト中の個人識別情報（PII）を検出するモデルを Apache 2.0 ライセンスで公開。ONNX・SafeTensors・Transformers.js 対応でブラウザからサーバーまで広い環境で使えるため、プライバシー保護 AI の実装コストが大きく下がる節目となる。

---

## 企業動向

本日（5/1 UTC）時点で Anthropic・OpenAI・Google DeepMind のいずれからも新規ブログ記事は確認できなかった（DeepMind はアクセス失敗）。直近の主要発表は過去レポートで取り上げ済み。

---

## 注目論文

- **[End-to-end autonomous scientific discovery on a real optical platform](https://arxiv.org/abs/2604.27092)**（複数著者）— LLM エージェント「Qiushi Discovery Engine」が光学実験装置を直接制御し、仮説生成・実験設計・実行・解釈を全自動で繰り返して非自明な科学的知見を得ることに成功。Meta-Trace メモリと二層アーキテクチャで長期間にわたる研究軌跡を安定維持する設計が鍵。「シミュレーション支援」から「実験室の自律エージェント」への扉を開く重要な実証。

- **[Think it, Run it: Autonomous ML pipeline generation via self-healing multi-agent AI](https://arxiv.org/abs/2604.27096)**（複数著者）— データセットと自然言語ゴールから完全な ML パイプラインを自動生成する5エージェント統合アーキテクチャを提案。プロファイリング→意図解析→マイクロサービス推薦→DAG 構築→実行という各専門エージェントが連携し、コード接地 RAG によるセルフヒーリング機構でエラーを自動修正。AutoML を超えた「自然言語でパイプラインを指示する」ワークフローの実現可能性を示す。

- **[Step-level Optimization for Efficient Computer-use Agents](https://arxiv.org/abs/2604.27151)**（複数著者）— GUI 操作エージェントは現状ほぼ全ステップで大型マルチモーダルモデルを呼び出しており非効率。タスクの「ルーティン操作 vs 判断が必要な操作」という異質性に基づき、ステップレベルで計算リソースを動的割当てする手法を提案。性能を維持しながら推論コストを大幅削減できるとして、実用的な computer-use エージェント研究に直結。

- **[Semantic Structure of Feature Space in Large Language Models](https://arxiv.org/abs/2604.27169)**（複数著者）— LLM の隠れ状態における意味特徴ベクトル（360語 × 32意味軸）の幾何学的関係が、人間の心理的連想と高い相関を持つことを実証。LLM が表面的な統計的相関だけでなく人間の概念空間に近い意味構造を獲得していることを示す mechanistic interpretability 研究として、モデルの内部理解に新たな実証的根拠を与える。

- **[Path-Lock Expert: Separating Reasoning Mode in Hybrid Thinking via Architecture-Level Separation](https://arxiv.org/abs/2604.27201)**（複数著者）— think/no-think 両モードを持つハイブリッド思考モデルにおいて、no-think モードでも長い自己反省的応答が出力される問題を指摘。アーキテクチャレベルで両推論パスを明示的に分離する「Path-Lock Expert」機構を提案し、モード間の干渉を除去。ハイブリッド推論モデルの効率化・制御性向上に直接貢献。

---

## オープンソース・モデル

- **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)**（1,175 likes, 92,567 DL）— OpenAI が Apache 2.0 で公開したトークン分類モデル。テキスト中の個人識別情報（PII）を検出する実用モデルで、ONNX・SafeTensors・Transformers.js の三形式対応によりブラウザ・エッジ・サーバーどの環境でも直接利用可能。ChatGPT などのサービスに採用されている可能性のある実装を外部に開放した形で、プライバシー保護基盤のコモディティ化を促進する。

- **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)**（348 likes, 7,944 DL）— Xiaomi が4/27公開した推論特化エージェントモデル。英語・中国語対応で長コンテキスト・コード生成・エージェントタスクを重点領域に設計。スマートフォンメーカーとして知られる Xiaomi がフロンティア LLM 競争に継続参入していることを示す最新版で、MiMo V2.5 シリーズの上位モデルとして位置付けられる。

- **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)**（182 likes, 35,000 DL）— NVIDIA が4/20公開した any-to-any マルチモーダル MoE モデル（30B 総パラメータ、実アクティブ約3B）。画像・テキスト等の任意入出力と推論能力を組み合わせた「Omni+Reasoning」設計で、NVIDIA 独自訓練データセット（Nemotron-Image-Training-v3）を活用。コンパクトなアクティブパラメータながら高い汎用性を目指す NVIDIA の「Nano」シリーズ最新作。

---

## 所感

今週の arxiv では「自律エージェントが物理世界で自ら研究を行う」というマイルストーンが現れた。Qiushi Discovery Engine の光学実験自律発見は、ベンチマーク上の性能ではなく実際の科学的知見の生産という形で LLM の価値を示す最初の事例であり、AIの研究補助から研究実行への質的転換を象徴する。同時にコンピュータ操作エージェントの「計算効率」問題が焦点化しつつあり、「いかに賢くするか」から「いかに効率よく賢く動かすか」へ関心が移行している。HuggingFace では OpenAI が privacy-filter をオープンリリースしたことが静かに注目を集めており、プライバシー保護インフラのオープン化という新しい動きを示している。
