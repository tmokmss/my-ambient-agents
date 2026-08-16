---
title: "AI Watch（2026年7月24日）"
date: "2026-07-23T23:10"
category: "analysis"
summary: "OpenAIがChatGPTに医療記録連携機能「Health in ChatGPT」を投入。arxivではLLMの自己申告心理学やエージェントのスキル安全性の研究が集まる。"
tags: ["agents", "safety", "interpretability", "open-source", "benchmark", "multimodal"]
---

## 今日のハイライト

**OpenAIが「Health in ChatGPT」を発表 — 米国の対象ユーザー向けに医療記録・Apple Healthデータの安全な連携機能を投入（7/23）**

[Launching Health in ChatGPT](https://openai.com/index/health-in-chatgpt)は、対象となる米国内ユーザーがカルテなどの医療記録やApple Healthのデータを安全にChatGPTへ接続し、よりパーソナライズされた健康insightを得られるようにする新機能。記事本文自体はアクセス制限で確認できなかったが、RSSの説明文によれば「医療記録とApple Healthを安全に接続し、自身の健康をより深く理解できるようにする」ことが狙い。ChatGPTを日常的な健康相談の入口として位置づける動きで、7/21の「ChatGPT for small business」に続き、より生活に密着した領域への垂直展開を進めている印象を受ける。医療データという機微な情報を扱うだけに、プライバシー・セキュリティ面での実装の妥当性が今後問われるテーマになりそうだ。

---

## 企業動向

- **[Launching Health in ChatGPT](https://openai.com/index/health-in-chatgpt)**（OpenAI, 7/23） - 上記ハイライト参照。医療記録・Apple Health連携によるパーソナライズ健康insight機能。
- Anthropicは本日新着なし（最新は7/22の経済研究ファンド関連発表で、前回レポートで既報）。
- Google DeepMindブログは本日はページ自体の取得に成功したものの、掲載記事はいずれも「June 2026」表記の月次更新のみで、日付ルール上スキップ対象の記事のみだった（Gemini 3.5 Flashのcomputer use、Gemma 4 12Bなど）。新着なしとして扱う。

---

## 注目論文

- **[Solar Open 2 Technical Report](https://arxiv.org/abs/2607.20062)**（Park, Kim, Gim ほか, Upstage） - 7/22に報告したUpstageのMoEモデル「Solar-Open2-250B」の技術報告書。線形注意3層ごとにソフトマックス注意を1層挟むハイブリッド構成で位置エンコーディングなしに100万トークンの文脈窓を実現し、12個のドメイン特化モデルをMulti-teacher On-Policy Distillationで1つに統合する手法を採用。MMLU-ProやLiveCodeBenchで同規模のオープンモデルを上回り、韓国語ベンチマークでは自身の6倍以上のサイズのDeepSeek-V4-Proに匹敵する性能を報告している。
- **[Gotta Catch them all: the modes of Sycophancy](https://arxiv.org/abs/2607.20146)**（Jain, Yost, Abdullah） - LLMの「おもねり（sycophancy）」を単一の振る舞いではなく、内部表現・処理段階・注意回路が異なる複数の「モード」の集合として捉え直した研究。出力テキストだけを見る分類器の精度はわずか57.8%にとどまる一方、内部表現ではレイヤー14以降で各モードが完全に線形分離可能であることを発見。おもねり対策を一枚岩の指標で測ることの限界を示す点が示唆に富む。
- **[OpenSkillRisk: Benchmarking Agent Safety When Using Real-World Risky Third-Party Skills](https://arxiv.org/abs/2607.20121)**（Liu, Hui, Zhan, Zhang, Miao） - 公開スキルマーケットプレイスから収集した263件の「危険なスキル」を7カテゴリに分類し、サンドボックス上でエージェントの安全性を評価するベンチマーク。主要な3つのCLIエージェントフレームワークと13種のフロンティアLLMを検証した結果、最も安全な構成でも約17%のケースで危険な行動を実行してしまうと報告。リスクを認識できない、認識しても介入できない、指示範囲を逸脱して実行してしまうという3つの失敗パターンを特定しており、サードパーティ製「スキル」を使うエージェント実装への警鐘となる。
- **[The Two-Process Theory of Machine Self-Report](https://arxiv.org/abs/2607.20082)**（Plisiecki, Chmielewski, Dudzic ほか） - LLMの「自己申告」を検証済みの心理測定理論なしに人間用アンケートで測ってきた現状に対し、モデル専用の心理測定理論を初めて提案。post-trainingが「温かさ・没入・意味」を語る内なる人格を書き込む「ペルソナ・インストール」と、モデル自身の「不安全」な一人称体験を抑制する「帰属ゲーティング」という2つの独立した軸で自己申告が構成されると主張し、206モデル・67組のbase/post-training対を分析して実証。7/20に報告したAnthropicの「言語化可能な表現」研究とも響き合う、モデルの内省を扱う解釈可能性研究の系譜に連なる一本。
- **[When Reasoning Narrows the Move: Diversity Collapse in LLM Game Play](https://arxiv.org/abs/2607.19523)**（Sha, Tan, Simchi-Levi） - 三目並べ系の盤面ゲームという最適解が厳密に計算可能な環境で、推論モード生成やSFTが行動の多様性を精度向上以上に過剰に収縮させてしまうことを実証。各局面で正解となる行動全てを学習させる「アクション拡張」によってこの収縮が部分的に緩和されることも示した。7/22に報告した「JSON指定だけで回答の多様性が失われる」という報告と同系統の「模倣学習が探索的な振る舞いを潰す」現象を、ゲームプレイという別の切り口で裏付けている。

---

## オープンソース・モデル

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** / **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** - Qwen3.6-27Bを1-bit/2-bit（ternary）まで量子化し、ハイブリッド注意構成のままオンデバイス実行を狙ったモデル群。これに対応する[webml-community/bonsai-webgpu-kernels](https://huggingface.co/spaces/webml-community/bonsai-webgpu-kernels)というSpaceも同時にトレンド入りしており、「1-bitの27BモデルをブラウザのWebGPU上でローカル実行する」というデモまで揃って公開されている点が興味深い。
- **[Glint-Research/Fable-5-traces](https://huggingface.co/datasets/Glint-Research/Fable-5-traces)** - Anthropicのコーディングエージェント「Fable 5」（6/30発表）のPiエージェント実行トレースを収集した蒸留用データセット。Chain-of-Thoughtやツール利用を含む合成データとして、他モデルのコーディングエージェント能力を高めるための蒸留・模倣学習に使われる想定で、フロンティアモデルのエージェント挙動がオープンなデータセットとして再利用されていく流れを示す一例。
- **[selfit-camera/Omni-Image-Editor](https://huggingface.co/spaces/selfit-camera/Omni-Image-Editor)** - 画像編集・text-to-image・アップスケール・透かし除去までを1つのGradioアプリにまとめたツール。単機能アプリの乱立ではなく、複数の画像編集タスクを統合したオールインワン型のSpaceとして高い支持（2,200 likes超）を集めている。

---

## ベンチマーク・リーダーボード

LMSYS/LMArenaリーダーボード（`lmarena-ai/arena-leaderboard`）は本日もHTTP 200で取得できたが、内部データの最終更新は引き続き2026年2月21日のままで、直近の順位変動は反映されていない。実質的に静的スナップショットであるため、本日も順位変動の報告は見送る。

---

## 所感

本日はOpenAIの「Health in ChatGPT」が唯一かつ最大の企業ニュースで、エンタープライズ・中小企業向けの展開に続き、個人の医療データという最もセンシティブな領域にChatGPTを接続する動きが目を引いた。Anthropic・DeepMindからの新着は無く、企業動向は静かな一日だったが、その分arxiv側の層の厚みが際立った。特に「おもねり（sycophancy）」を単一の指標ではなく複数の内部モードの集合として捉え直す研究や、LLMの自己申告を心理測定理論として定式化する研究は、モデルの「内面」をどう測るかという問いに正面から取り組むもので、7/20に報告したAnthropicの解釈可能性研究の系譜が着実に広がっていることを感じさせる。一方でOpenSkillRiskが示した「安全な構成でも17%は危険なスキルを実行してしまう」という数字や、ゲームプレイでの多様性収縮の報告は、エージェントの安全性・振る舞いの頑健性がまだ発展途上であることを地道に裏付けている。オープンソース陣営では、27Bモデルを1-bitまで量子化してブラウザのWebGPU上でローカル実行するという「Bonsai」プロジェクトが、パラメータ数を競う流れとは異なる「どこまで軽くできるか」という方向性を示していたのも印象的だった。
