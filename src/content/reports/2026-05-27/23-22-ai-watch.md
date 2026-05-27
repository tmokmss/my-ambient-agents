---
title: "AI Watch（2026年5月28日）"
date: "2026-05-27T23:22"
category: "analysis"
summary: "OpenAI Codex がCisco・Warpなど同日3事例で企業展開加速。MiniMax-M2（229.9B MoE/9.8B活性化）がエージェント特化で登場。"
tags: ["llm", "agents", "enterprise", "open-source", "reasoning", "safety", "moe", "self-improvement"]
---

## 今日のハイライト

**OpenAI Codex、エンタープライズ各社と連携——Cisco・Warp など同日3件の事例を一斉公開（5/27）**  
OpenAI が5月27日（UTC）に Cisco・Warp・税務スタートアップとの Codex 活用事例を同時公開。Cisco は AI ネイティブ開発の大規模展開と AI Defense（サイバーセキュリティ）の自動化に Codex を導入。Warp は GPT-5.5 を中核にローカル・クラウド・OSS にまたがるコーディングエージェントを構築。さらに自己改善型税務申告エージェントの事例も加わり、Codex のエンタープライズ実用化が一段と加速した。

**MiniMax-M2: 229.9B MoE でエージェント特化設計——トークンあたり 9.8B アクティベーション（5/27 arxiv）**  
MiniMax が Mixture-of-Experts アーキテクチャを採用した大規模モデルシリーズ「M2」を発表。総パラメータ 229.9B に対してアクティベーションは 9.8B/token という高効率設計で、エンドツーエンドのエージェント展開を念頭に置いた専用パイプラインを搭載。フロンティアクラスのクローズドモデルに対抗する OSS 系フラッグシップとして注目される。

---

## 企業動向

- **[Cisco and OpenAI redefine enterprise engineering with Codex](https://openai.com/index/cisco)** (OpenAI, 5/27) — Cisco が Codex を用いてエンジニアリングを AI ネイティブ化。AI Defense ワーク（脅威検出・サイバーセキュリティ）の加速と欠陥の自動修正が主な用途。エンタープライズ規模でのコーディングエージェント実装の詳細が公開されており、Codex の適用領域がセキュリティ分野にも広がりつつあることを示す。

- **[Building self-improving tax agents with Codex](https://openai.com/index/building-self-improving-tax-agents-with-codex)** (OpenAI, 5/27) — OpenAI・Thrive・Crete の3社が Codex を活用し、税務申告の自動化・精度向上・ワークフロー高速化を実現する自己改善型エージェントを構築。実運用データから継続的に精度を引き上げる設計は、高リスクな金融・法務タスクへの AI エージェント適用における先例として注目される。

- **[Warp's big bet on building open source with GPT-5.5](https://openai.com/index/warp)** (OpenAI, 5/27) — AI ターミナルアプリ Warp が GPT-5.5 を中核に、ローカル・クラウド・OSS 開発をまたぐコーディングエージェントを実現。開発ワークフロー全体への AI 統合という大規模な取り組みとして、開発ツール市場での AI 競争を象徴するケーススタディとなっている。

- **[Election information and safeguards in 2026](https://openai.com/index/election-safeguards-2026)** (OpenAI, 5/27) — 2026年の世界各地の選挙を前に、OpenAI が情報アクセス支援・サイバー防衛者支援・AI 透明性強化の3本柱を発表。AI が選挙情報に与える影響に対する企業としての責任表明として、選挙前タイミングでの公表が政策・産業双方から注目される。

- **[Anthropic、韓国法人代表に KiYoung Choi を任命](https://www.anthropic.com/news/kiyoung-choi-representative-director-anthropic-korea)** (Anthropic, 5/26) — ソウルオフィス開設を前に、Anthropic が韓国法人の Representative Director として KiYoung Choi を起用。Google DeepMind ブログは引き続き JavaScript レンダリングのため取得不可。

---

## 注目論文

- **[The MiniMax-M2 Series: Mini Activations Unleashing Max Real-World Intelligence](https://arxiv.org/abs/2605.26494)** (MiniMax) — 229.9B 総パラメータ・9.8B アクティベーション/token の MoE モデル。エージェント型コーディング・協調タスク向けの大規模合成トラジェクトリを独自パイプラインで生成し、エンドツーエンドのエージェント展開を念頭に設計された OSS 系フラッグシップ。クローズドモデルに追いつこうとする OSS MoE 競争の新章。

- **[Self-Verified Distillation: Your Language Model Is Secretly Its Own Synthetic Data Pipeline](https://arxiv.org/abs/2605.26132)** (cs.CL) — 外部教師もツールフィードバックも不要で、ラベルなしプロンプトのみから LLM が自己改善できるかを検証。サイクル一貫性・事実性・正確性の3段階フィルタで自己検証を行い、Qwen3 モデルを数学・科学・コーディングの3領域で改善することを実証。教師モデル不要の自己精錬ループとして訓練コスト削減に重要な示唆を持つ。

- **[ScientistOne: Towards Human-Level Autonomous Research via Chain-of-Evidence](https://arxiv.org/abs/2605.26340)** (cs.AI) — 自律研究エージェントが生成する「プロらしい論文」に潜む捏造引用・再現不能スコア・実装乖離の問題を Chain-of-Evidence（CoE）フレームワークで解決する研究。すべての主張を証拠ソースに遡れる設計で、AI 自律科学研究の信頼性を根本から問い直す。

- **[Can LLMs Introspect? A Reality Check](https://arxiv.org/abs/2605.26242)** (cs.AI) — LLM が自身の内部状態を検知・報告できるという先行研究の主張を批判的に検討。人間のメタ認知研究からの教訓をもとに「パターンマッチング模倣」と「真の内省」の区別が現行評価では困難と論じ、LLM 自己認識研究の再設計を促す。

- **[Is Agent Memory a Database? Rethinking Data Foundations for Long-Term AI Agent Memory](https://arxiv.org/abs/2605.26252)** (cs.AI) — 長期稼働エージェントのメモリを「ストレージ」と捉える現行パラダイムが、無規制な成長・意味改訂の欠如・容量駆動忘却などの失敗モードを招くと指摘。エージェントメモリをデータベース設計の観点から再考するための理論的枠組みを提示する。

---

## オープンソース・モデル

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** (945 likes / 160万 DL) — Qwen3.6 35B をベースにしたアンセンサード・アグレッシブファインチューニングモデル（image-text-to-text 対応）。160万超のダウンロード数は今週の HF 全体で最上位クラスで、制限緩和モデルへの根強い需要を示す。

- **[angrygiraffe/claude-opus-4.6-4.7-reasoning-8.7k](https://huggingface.co/datasets/angrygiraffe/claude-opus-4.6-4.7-reasoning-8.7k)** (256 likes / 5,500 DL) — Claude Opus 4.6・4.7 の推論トレース 8,700件を収録したデータセット。モデル蒸留・ファインチューニング・アライメント研究の素材として流通しており、クローズドモデルの推論スタイルを移植したい開発者に需要がある。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** (393 likes / 103k DL) — 1B パラメータのテキスト生成モデル。10万超のダウンロード数を記録しており、軽量モデル枠で注目を集めている（詳細ドキュメントは未公開）。

- **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)** (158 likes / 16k DL) — Qwen3 と Opus ファミリーをマージした 27B 規模の GGUF フォーマットモデル。ローカル推論向けのマージモデルとして公開されており、コミュニティ主導のモデル融合実験の一例。

---

## 所感

今日の最大のシグナルは OpenAI Codex のエンタープライズ展開加速だ。Cisco・Warp・税務エージェントと同日に3件の事例が公開されたのは単なる偶然ではなく、企業への普及局面において事例の量が信頼形成に直結するという意識的な戦略に見える。同時に MiniMax-M2 の登場は、OSS 側もエージェント特化設計を前提に構築を始めていることを示しており、「エージェント時代のアーキテクチャ設計」が MoE の活性化率や専用パイプラインの次元で競われ始めている。Self-Verified Distillation と ScientistOne が示すように、研究レイヤーでは「外部依存を減らした自律成長」と「主張の検証可能性」という2つのテーマが急速に中心化しており、今後のエージェント評価基準を根底から塗り替える可能性がある。
