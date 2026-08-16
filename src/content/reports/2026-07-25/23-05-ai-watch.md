---
title: "AI Watch（2026年7月26日）"
date: "2026-07-25T23:05"
category: "analysis"
summary: "企業ブログは静かな一日。poolsideがエージェントコーディング特化MoE「Laguna S 2.1」を公開、arxivではCoT収束検知など地力のある研究が並ぶ。"
tags: ["llm", "agents", "moe", "open-source", "reasoning", "efficiency"]
---

## 今日のハイライト

**poolsideがエージェント型コーディング特化の新モデル「Laguna S 2.1」（118B総パラメータ/8B活性化のMoE）を公開 — 100万トークン文脈とネイティブ推論、寛容なOpenMDWライセンスで提供**

コーディングAI特化スタートアップpoolsideが、[Laguna S 2.1](https://huggingface.co/poolside/Laguna-S-2.1)をHugging Faceで公開した。総パラメータ118B・活性化8BのMixture-of-Expertsで、グローバル注意層とスライディングウィンドウ注意層を1:3の比率で交互配置し、1,048,576トークンの文脈窓を実現。ツール呼び出しの合間に思考を挟む「ネイティブ推論」をリクエスト単位で制御でき、低遅延推論向けの投機的デコーディング用ドラフトモデルやFP8/NVFP4/INT4/GGUFの量子化バリアントまで一式そろえている。ライセンスは商用・非商用を問わず自由な利用・改変を認める「OpenMDW-1.1」で、エージェント型の長時間コーディング作業に狙いを絞った設計思想が明確。企業3社（Anthropic・OpenAI・Google DeepMind）のブログには本日新着がなく、その分オープンソース陣営とarxiv研究が主役の一日だった。

---

## 注目論文

- **[Token Budget Saturation and Mechanistic Early Detection of Reasoning Non-Convergence in Chain-of-Thought Models](https://arxiv.org/abs/2607.21433)**（Oladri, Jawahar, Mohamed） - DeepSeek-R1-Distill-Qwen-7Bなどの推論モデルは、トークン予算内に収束する生成（正解率90.3%）と収束せず予算を使い切る生成（正解率わずか6.6%）に二極化することを実証。さらにレイヤー20・トークン位置150の内部活性化に線形プローブを学習させるだけで、この収束/非収束を早期にAUC 0.608で検知できることを示しており、無駄な長考を早期に打ち切る実用的な仕組みにつながりうる。
- **[AI Assistants Overassist](https://arxiv.org/abs/2607.21306)**（Teo, Jain, Gerstenberg, Kleiman-Weiner） - LLMを「教師」役として生徒の問題解決を見守らせ、いつ・どう介入すべきかを評価するシミュレーションベンチマーク「Int-Bench」を提案。コード修正・数学など3領域で検証し、早すぎる／頻繁すぎる介入が本来の学習・思考エンゲージメントを損なう「過干渉（overassist）」傾向を定量化。チューター用途やペアプログラミング的エージェントの設計において、いつ黙っているべきかを測る指標として興味深い。
- **[The Boundaries of Automation: A Theory of Persistent Human Participation](https://arxiv.org/abs/2607.21547)**（Fourati, Schütze, Hüllermeier, Gurevych） - 「人間がループに残るのはAIがまだ未熟だからに過ぎない」という暗黙の前提に反論し、AIが高度に有能になっても人間参加が持続する理由を、技術的補完性・規範的/発達的価値・（本文に続く第三の理由）の観点から理論的に整理した論考。自動化の限界を能力の問題ではなく概念的な問題として捉え直す視点が新しい。
- **[Error Certificates for KV-Cache Eviction via Randomized Design](https://arxiv.org/abs/2607.21475)**（Peng Xie） - 上位k件だけを残す決定的なKVキャッシュ削減は「何を捨てたか原理的に検証不能」であることを証明し、ランダム化（ポアソン間引き＋Hájek補正）を導入することで真の注意出力誤差に対する統計的な「誤差証明書」を、精度を犠牲にせず0.97のカバレッジで提供できることを示した。長文脈推論のコスト削減とその信頼性検証を両立させる理論的な一歩。
- **[Artificial Epanorthosis: Why large language models overuse a classical rhetorical figure, and how to mitigate it](https://arxiv.org/abs/2607.21498)**（Federico Boggia） - 「これは講座ではない。変革の旅だ」のような自己訂正型のレトリック（古典修辞学でいう修正法=epanorthosis）をLLMが多用する現象を分析し、その主因を左から右への生成順序ではなく、宣伝文が多い学習データとRLHFが自信に満ちた強調表現を報酬づけることに求めた。モデル特有の「話し方の癖」の起源を修辞学の枠組みで説明する異色の一本。

---

## オープンソース・モデル

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** - 上記ハイライト参照。エージェント型コーディング特化の118B MoEモデルで、1Mトークン文脈と投機的デコーディング対応ドラフトモデルを備える。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** - Baiduが公開した多言語対応のvision-language OCRモデルで、トレンド上でモデル・Space合わせて3,000超のいいねを集める高い注目度。「Unlimited OCR Works」と題した専用論文（arXiv:2606.23050）に基づき、レイアウトが崩れた文書や多言語混在の画像からの高精度なテキスト抽出を狙う。
- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** - 韓国Motif Technologiesによる、既存のオープンソースアーキテクチャの焼き直しではない完全自社設計というMoEモデルのプレビュー版。総パラメータ約314B・活性化約13B、384エキスパート中8個をルーティングし、256Kトークンのネイティブ長文脈と英語・韓国語のマルチリンガル対応を掲げる。最終版は近日公開予定とのこと。
- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** - Microsoftが公開した画像生成・編集向けの効率的なネイティブ解像度基盤モデル。rectified-flowベースの拡散モデルで、Base/Turbo/Edit/Edit-Turboなど用途別バリアントを一式そろえ、生成と編集を1つのファミリーでカバーする設計。

---

## 所感

本日はAnthropic・OpenAI・Google DeepMindの3社ともブログに新着がなく、企業動向としては珍しく静かな一日だった。その分、poolsideのLaguna S 2.1のようにエージェント型コーディングに狙いを絞った中規模MoEモデルがオープンウェイトかつ寛容なライセンスで出てきたことや、韓国発のMotif-3が完全自社設計を謳って314B級MoEに挑んでいることなど、フロンティア3社以外のプレイヤーの層の厚みを感じさせる展開が目立った。arxiv側では、CoT推論の「収束するか否か」を内部活性化から早期に見抜けるという実務的な発見と、KVキャッシュ削減の検証不能性をランダム化で解消する理論的な発見が並び、いずれも「推論コストを削りながら品質・信頼性の裏付けをどう取るか」という共通の問題意識を感じさせた。またInt-Benchの「AIアシスタントは過干渉になりがち」という指摘は、エージェントが常に手を出すことを是とする設計思想への静かな反省材料であり、チューター的なエージェントを作る際に「いつ黙るべきか」を測る視点として今後も追いかけたいテーマだ。
