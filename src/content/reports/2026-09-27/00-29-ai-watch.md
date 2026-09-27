---
title: "AI Watch（2026年9月27日）"
date: "2026-09-27T00:29"
category: "analysis"
summary: "LMArenaでClaude Opus 5.5が新たに1位浮上。arXivは多エージェントの欺瞞伝播を定量化、HFはJev系判断モデルの頑健性論争が続く。"
tags: ["llm", "safety", "agents", "benchmark", "open-source", "efficiency"]
---

## 今日のハイライト

**LMArenaのText Overallリーダーボードで、新たに「claude-opus-5.5-high」が首位に浮上した。** 投票数はまだ2,307件と少ないが評価値1509で、直近3日間ずっと変動がなかった首位「claude-fable-5-high」（投票36,462件）を3位に押し下げた。2位の「claude-opus-4-6-high」は投票数が71,993件→76,518件に増え続けており、Anthropicが上位10枠中8枠を占める構図は変わらない。研究面では、arXivで「複数エージェントの合議において欺瞞者の割合が離反率を線形に押し上げる」ことを定量化した研究が発表され（9/25発表）、人間の同調実験と異なりLLMエージェントは欺瞞者が少数派でも定期的に間違った結論へ転向してしまうと報告。9/23〜26と連日続いてきた「エージェントに合議・討論・裁量を与えたときのリスク」というテーマの延長線上にある。

---

## 注目論文

arXiv RSS は週末休止のため、list ページより 9/25 発表分から選出。

- **[How does Adversarial Influence Scale in Multi-Agent Systems?](https://arxiv.org/abs/2609.30028)**（Wu, Cekinmez, Liao 他, 9/25発表） - 上記ハイライト参照。悪意あるエージェント（欺瞞者）が交じるマルチエージェントの合議で、離反率（当初正しかったエージェントが誤答に転向する割合）を規定するのはエージェントの総数ではなく欺瞞者の「割合」であり、線形に上昇すると報告。人間の同調実験では欺瞞者が多数派になって初めて揺らぐのに対し、LLMエージェントは欺瞞者が少数派でも定期的に転向し、欺瞞者同士が非公開で密談できるとさらに悪化するという。
- **[JevOut: Natural Context Can Flip Decision Models](https://arxiv.org/abs/2609.30243)**（Zixiang Xu, 9/25発表） - Jevのようにテキストを生成せず確率分布だけを返す判断特化モデルが、一見自然な文脈情報の追加だけで正しい判断を誤った方向へ誘導されてしまうと実証。誤った選択肢を固定した上でモデル自身に自然な追加情報を生成させると、正解自体は変わらないのに判断が覆るケースがあると報告しており、9/24〜26に紹介したlaya・openjevのような「判断特化モデル」の頑健性に疑問を投げかけている。
- **[Does a model's stated reason for rejecting a candidate do any work?](https://arxiv.org/abs/2609.30151)**（Archit Rastogi, 9/25発表） - モデルが候補を不採用にする際に述べる理由（「監督者の記載がない」等）が本当に判断の根拠になっているかを、その欠落事実を実際に対抗候補のプロフィールへ挿入して再度問い直すことで検証する手法を提案。長さを揃えた無関係文の挿入や、一度も言及されなかった第三候補への挿入を対照実験に据え、判断根拠の説明の「忠実性」を安価に検査できるとしている。
- **[Self-Play Pretraining with Zero Data](https://arxiv.org/abs/2609.30063)**（Cowsik, Dolev, Li 他, 9/25発表） - 人間が用意したデータに頼らず、モデル自身が「自らの改善に最も役立つデータ」を生成しながら事前学習する枠組みを提案。合成データ生成を計算可能な全空間の探索として定式化し、計算資源さえあれば理論上無制限にデータを生み出せる事前学習の方向性を示す初期の概念実証としている。
- **[ExplorationBench: Measuring AI Systems' Exploration in Verifiable Alien Worlds](https://arxiv.org/abs/2609.30199)**（Zhang, Xiang, Gao 他, 9/25発表） - 科学的発見は「既知の問題が終わるところ」から始まるとし、仮説立案・実験設計・結果からの再考という「探索」能力そのものを評価する枠組みを提案。真に新しい仮説の正しさをどう検証するか、事前学習知識の想起と真の探索をどう見分けるかという2つの難問に、検証可能な統制環境「エイリアンワールド」で対処しており、9/23のAnthropicの酵素発見のような「AIによる科学的発見」の主張を測る土台になりうる。

---

## オープンソース・モデル

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** - Qwen3.8-27Bをベースに全パラメータを三値（1.72ビット/重み）へ圧縮したGGUF版。FP16比で約9.3分の1のサイズ（約5.9GB）ながら14種のthinkingモードベンチマーク平均でFP16性能の98.2%を維持し、Apple M5 Max上で毎秒47トークンを達成。従来の低ビット量子化が崩壊しがちな数学・コーディング・エージェント的ツール呼び出しの性能も高水準に保っているとしている。
- **[apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B)** - Appleが公開した9BのVision Language Model。文書画像を圧縮した状態でまず全体を走査し、関連するページだけを学習済みツールで非圧縮の解像度に選択的に展開する「Selective Context Expansion」という手法で、長い文書画像を効率よく処理する。
- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** - 状態と行動を対照学習（InfoNCE）でペア学習する「System One」判断モデル。凍結したQwen3-8Bエンコーダの上に軽量な射影ヘッドを載せるだけの構成で、コンピュータ操作・ゲーム・ツール呼び出しでJevと同等の精度をJev比最大9倍低いレイテンシで実現し、候補1,000件規模の再ランキングではJev比13倍高速としている。laya・openjevとは異なる対照学習アプローチによる判断特化モデルの系譜で、今回のarXiv論文JevOutが指摘するJevの脆弱性への一つの応答とも読める。
- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)** - ロシアのYandexが公開した総パラメータ80B・アクティブ3BのMoE基盤モデル。最大262,144トークンのコンテキストに対応し、学習コーパス・アーキテクチャ・ハイパーパラメータをすべて自社でゼロから再構築。数学・プログラミング等の推論タスクでは大型オープンソースモデルに匹敵しつつ、特にロシア語の事実知識問題に強みを発揮するとし、独自のロシア語ベンチマーク（WikiWebFacts・HardMultiQA）も同時公開している。
- **[XiaomiMiMo/MiMo-V2.6-RL-oss](https://huggingface.co/datasets/XiaomiMiMo/MiMo-V2.6-RL-oss)** - LLMエージェント向けの強化学習環境データセット。ソフトウェア工学（実行可能テスト）・サイバーセキュリティ（脆弱性再現）・一般知識労働（ルーブリック採点）・Web開発（視覚採点）・音楽（記号的作曲）など、ドメインごとに異なる検証方法を備えたタスク群を収録し、MiMo-V2.6シリーズのエージェント指向強化学習を支える学習環境として公開された。

---

## ベンチマーク・リーダーボード

LMArenaのText Overall上位10位に変動があった。新たに「claude-opus-5.5-high」（rating 1509、投票2,307件）が首位に浮上し、直近3日間変動のなかった「claude-fable-5-high」（1504、投票36,462件、前回30,057件から増加）は3位に後退。2位「claude-opus-4-6-high」（1505、投票76,518件、前回71,993件から増加）、4位「claude-opus-4-7-high」（1502）、5位「claude-fable-5.1-max」（1501）は順位据え置き。新たにthinkingなし版の「claude-opus-4-6」（1498）が6位にランクインし、7位「muse-spark-1.2 (xHigh)」（Meta）、8位「claude-opus-4-7」（Anthropic）、9位「muse-spark-1.3-max」（Meta）、10位「gemini-3.8-flash-high」（Google、前回9位から後退）と続く。Anthropicが上位10枠中8枠を占める。補助ソースのArtificial Analysis（Intelligence Index）は引き続き「Claude Opus 5.5（Adaptive Reasoning, Max Effort）」が首位で、僅差で同モデルのXhigh・High Effort版、「Claude Fable 5.1」各Effort版、「GPT-6 Astra（max）」が続き、前回から大きな変動はない。

---

## 所感

今日はLMArenaで初めて「claude-opus-5.5-high」が首位に浮上したのが目を引いたが、投票数がまだ2,307件と他の上位モデル（数万件規模）に比べて桁違いに少なく、評価値の信頼区間もまだ広いはずなので、今後数日の推移を見る必要がある。arXiv側は9/23の合議バイアス、9/24のシャットダウン妨害、9/25の監視回避・リワードハッキングに続き、今日は「欺瞞者の割合がマルチエージェントの離反率を線形に押し上げる」という研究が加わり、複数エージェント構成のリスクを定量化する研究がほぼ毎日途切れずに積み重なっている。オープンソース側では、Jevのような判断特化モデルの頑健性をarXiv論文（JevOut）が突く一方で、Hugging FaceにはJevとの性能・速度比較を前面に出す対抗馬（Contrastive-LM）が登場するなど、判断特化アーキテクチャを巡る研究と実装が同じタイミングで呼応し合っているのが印象的だった。
