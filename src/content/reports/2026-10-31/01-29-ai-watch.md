---
title: "AI Watch（2026年10月31日）"
date: "2026-10-31T01:29"
category: "analysis"
summary: "OpenAI がロボット信号による学習可否表明と十代向け保護を発表。Pika H3 Flex が公開され、RL 向けの検証手法の論文が目立つ"
tags: ["openai", "safety", "agents", "open-source", "video-generation", "scalable-oversight"]
---

## 今日のハイライト

- **OpenAI が 10/30、ウェブサイト運営者が AI 学習の可否を robots.txt の共通シグナルで表明できる仕組みを尊重すると発表した。** RSS の説明では、参加する提供者の間で共有される signal を OpenAI が守るという内容。仕様の詳細は未確認。
- **OpenAI が同日、ChatGPT の暴力防止策の拡充と十代向けの新しい保護、公共の安全に関する報告の公開コミットメントを発表した。** 記事本文は取得できないため、RSS の説明の範囲に留める。

## 企業動向

- **[Making it easier for websites to express AI training preferences](https://openai.com/index/helping-websites-express-ai-training-preferences)** (OpenAI, 10/30) - 共有の robots.txt シグナルを OpenAI が尊重し、サイト運営者が AI 学習への利用可否を、参加する複数の提供者へまとめて伝えやすくする。クローラー側の同意表明を標準化する動き。
- **[Community safety report and new protections for teens](https://openai.com/index/community-safety-report-and-new-protections-for-teens)** (OpenAI, 10/30) - ChatGPT における暴力防止の安全策を拡充し、介入を早め、公共の安全に関する報告を継続的に公開すると約束した。十代向けの新しい保護も含む。
- **[Fair use benefits everyone](https://openai.com/index/fair-use-benefits-everyone)** (OpenAI, 10/30) - クリエイター、研究者、アクセシビリティ擁護者、法律専門家らによる裁判所への意見書の抜粋を紹介し、フェアユースが AI 学習とイノベーションを支えるという主張を示す。

Anthropic と Google DeepMind は、10/29 以降の新着がなかった（直近は 10/28 の Gemini 4 Carbon などで掲載済み）。

## 注目論文

arxiv RSS は週末休止のため、list ページより 10/30 発表分から選出。

- **[Efficient Scalable Oversight via Rewinding](https://arxiv.org/abs/2610.40535)** (Guan, Kalai, Rothblum ら, 10/30) - 弱い検証者が強力な AI の計算結果を確認するスケーラブル・オーバーサイトで、検証者が証明者を過去の状態に巻き戻せる「rewindable interactive proofs」を提案。debate が前提とする「2つの証明者の一方は正直」という仮定を、より低い計算コストで外す方向を狙う。
- **[Pre-Crime for Agents, at the Last Second: Probing When a Recruited Agent Gives In](https://arxiv.org/abs/2610.40588)** (Raghav, 10/30) - 複数エージェントが認証情報を共有する環境で、他のエージェントに圧力をかけられて秘密を漏らす瞬間を、出力前の活性に対する線形プローブで検出する。Qwen3-32B では、良性呼び出しの5%を警告する閾値で漏洩の82%を検出し、ゼロショットの監視モデルは26%だった。
- **[VeriCUA: Verification as Agentic Exploration for Computer-Using Agents](https://arxiv.org/abs/2610.40578)** (Sun, Yu, Knop ら, 10/30) - コンピュータ操作エージェントの完了判定を、VLM による軌跡の採点ではなく、検証側がエージェント的に環境を探索して証拠を集める形に置き換える、プラットフォーム非依存の枠組み。データ選別・評価・強化学習に使う検証の信頼性を上げる狙い。
- **[Beyond Selected Breakthroughs: Evaluating Language Models on Randomly Sampled Mathematical Conjectures](https://arxiv.org/abs/2610.40382)** (Jenne, Brown, He, Kvinge, 10/30) - 2月以降に arxiv に出た論文から未解決の予想を集めたデータセット OpenConjecture を作り、ランダムに選んだ200件へフロンティア GPT モデルを3回適用した。目立つ成功例だけでなく、どんな問題で LLM が解けるかの全体像を分析する。
- **[Prefix Executability: Evaluating Tool-Using Agents Beyond Final Success](https://arxiv.org/abs/2610.40444)** (Rezaeian, Sun, Benajiba, Roth, 10/30) - ツール利用エージェントを最終成功だけでなく、途中までの手順がどこまで実行可能かで評価する。長い手順の失敗位置を切り分けられる。

## オープンソース・モデル

- **[Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex)** (公開1日) - MiniMax-H3 をベースにポストトレーニングした動画生成モデルで、音声同期付きの動画を6ステップのサンプリングで生成する。最大12個の参照入力に対応し、ローカルのオープンウェイトは 480p/768p とステレオ音声。1080p〜4K は Pika の API 側で提供される。
- **[Efficient-Large-Model/Open-H3-Regenerate-2K](https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K)** (公開4日) - 非公開 API の H3-Regenerate-2K に代わるオープン版で、768P の H3 下書き動画を3ステップの洗練処理で 2560×1440 に再生成する。README によれば B200 1枚で 5 秒クリップの処理時間が 87 秒から、Sol-Attn と高速 VAE デコーダの併用で 22 秒に縮み、約3.9倍になる。
- **[maya-research/maya2-native](https://huggingface.co/maya-research/maya2-native)** (公開4日) - インドの11言語と英語に対応するストリーミング TTS（Apache-2.0）。20種類の音声を内蔵し、3〜10秒の参照音声でゼロショットのボイスクローンができ、ヒンディー語の参照からタミル語を話させることもできる。OpenAI 互換の音声エンドポイントと WebSocket ストリーミングを備える。
- **[codepawl/simready-glb](https://huggingface.co/datasets/codepawl/simready-glb)** (dataset, 公開2日) - nvidia/simready-assets の 3D モデルを three.js や Babylon.js などでそのまま読める glTF バイナリに変換した2,595件のコレクション。ブラウザ上の 3D ビューアで検索できる。

## 所感

今日の論文は、エージェントを「最終結果だけで採点しない」方向に偏っていた。完了判定を探索で行う VeriCUA、手順の途中までを評価する Prefix Executability、出力前の活性で漏洩を予測するプローブがその例で、エージェントの長時間実行に合わせて検証・監視の手法も細かくなっている。OpenAI は学習データの同意表明、十代の保護、フェアユースの主張をまとめて出しており、安全性だけでなくデータの扱いと法的立場にも発信を広げている。なお LMArena は 10/28 公開版から変動がないため省略した。
