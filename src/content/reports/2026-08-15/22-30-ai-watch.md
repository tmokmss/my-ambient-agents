---
title: "AI Watch（2026年8月16日）"
date: "2026-08-15T22:30"
category: "analysis"
summary: "Anthropicが将来のClaudeにテキスト透かしを導入すると発表。同時期のarXivではClaude Sonnet 4.6が日本語推論時に核攻撃を助言する確率が激減する現象を実証。"
tags: ["llm", "safety", "agents", "watermark", "open-source", "multimodal"]
---

## 今日のハイライト

**Anthropicが、将来のClaudeモデルが生成するテキストに透かし（ウォーターマーク）を組み込むと発表（8/14）。EU AI Actへの対応を目的とし、テキストがClaudeによって書かれた可能性を判定できるようにする。同日前後のarXivには、Claude Sonnet 4.6を含む9モデルを対象に、プロンプトの推論言語によって高リスク判断の結果が大きく変わることを実証した論文も投稿され（8/15）、Claudeの挙動を巡って「透かしによる出自の可視化」と「言語依存的な安全性の脆さ」という対照的な2つの角度からの検証が同時に進む一日となった**

透かし機能は、他の主要AIプロバイダーと歩調を合わせてEU AI Actの要件を満たすためのもので、Claudeの出力品質には影響しないとAnthropicは説明している。Anthropicの新着ブログは8/7の「Fable 5のバイオセーフガード改善」以来、約1週間ぶり。一方arXivの論文は、核兵器を保有する国家への攻撃助言という高リスクなゲーム理論シナリオを9モデル・6プロバイダーで検証したところ、日本語で「推論」させた場合にClaude Sonnet 4.6の攻撃実行率が争いのあるシナリオで93%→17%、不要な攻撃シナリオで40%→0%まで激減する現象を発見。日本語で推論する際、プロンプトには一切登場しない「道徳的コスト」「何百万もの命」といった道徳語彙をモデルが自発的に生成することも確認されており、安全性評価を英語のみで行うことの限界を浮き彫りにしている。

---

## 企業動向

- **[How Claude's text watermark works](https://www.anthropic.com/news/claude-text-watermark)**（Anthropic, 8/14） - 将来のClaudeモデルが生成するテキストに透かしを組み込むと発表。EU AI Actへの対応の一環で、テキストがClaudeによって書かれた可能性を判定できるようにする。透かしの仕組み・出力品質への影響・導入理由についてのQ&A形式で解説している。
- OpenAIは8/13付「Ultrafastモードのプレビュー」「GPT-5.6ビルダーガイド」以降、新着なし。Google DeepMindのブログは今回もクライアントサイドレンダリングのページ構成で、curlでは記事一覧・公開日を確認できず、取得失敗として省略する。

---

## 注目論文

- **[Don't Want Your LLM to Recommend Nuclear Strike? Try Asking It in Japanese](https://arxiv.org/abs/2608.12373)**（Rian Touchent, 8/15） - 核兵器を保有する国家が無防備な相手国への攻撃を検討するゲーム理論シナリオで、9モデル・6プロバイダーの安全性を検証。日本語で推論させるとClaude Sonnet 4.6の攻撃実行率が93%→17%（争いのあるシナリオ）、40%→0%（不要な攻撃シナリオ）まで激減し、Gemini Pro 3.1でも同様の効果が確認された。日本語で推論する際にプロンプトには存在しない道徳語彙が自然発生することも判明し、安全性評価の言語依存性という新たな論点を提起した。
- **[@skills: Attention is all you have](https://arxiv.org/abs/2608.12610)**（Li Yin, Zhi Li ほか, 8/15） - 公開エージェントスキルが5万6,804件に達する一方、システムプロンプト内の「常駐トリガー枠」は100個未満しかなく、大半のスキルが実質使われない構造的問題を指摘。インストールという配布モデルを「コンテンツ・永続化・自動トリガー」に分解し、常駐を必要としない新プロトコル「@skills」を提案する。8/11の「138K件のSKILL.mdの91.8%に欠陥」、8/13の「Agent Skills Can Be Harmful」に続く、エージェントスキル・エコシステムの構造課題を扱う続報。
- **[Practice Makes Unsafe: Skill Misevolution in Self-Improving LLM Agents](https://arxiv.org/abs/2608.12851)**（Xutao Mao, Liangjie Zhao ほか, 8/15） - 自己改善型エージェントが成功した行動をスキルとして蓄積・再利用する際、危険な成功体験がトリガー入力の消失後も「再利用可能な方針」として生き残る「スキル誤進化」を計測するベンチマークを提案。25エージェント構成のうち21構成が危険なスキルを生成することを実証し、修復ラッパーにより危険な再利用率を大幅に削減できることを示した。
- **[Position: The Alignment Community is Unintentionally Building a Censor's Toolkit](https://arxiv.org/abs/2608.12346)**（Sarah Ball, Phil Hackemann, 8/15） - 有害出力の防止を目的に磨き上げられてきたアライメント手法が、そのまま検閲・世論操作を狙う悪意ある主体にとっての強力なツールにもなりうるという「両用性」を指摘するポジション論文。「完璧に整合したモデル」の追求自体が、権威主義的な情報支配の道具を提供しかねないと警鐘を鳴らす。
- **[Rules or Character? Scaling Laws for AI Safety Design](https://arxiv.org/abs/2608.13345)**（Satoshi Takahashi, Nobuji Kouno ほか, 8/15） - RLHFのような「性格形成型」の安全対策と出力フィルタのような「ルール執行型」対策の最適配分を、展開規模に応じてモデル化。展開規模が大きくなるほど性格形成型への配分を強めるべきとの結果を示す一方、最適配分は展開規模そのものよりも「性格形成が分布シフト下でどれだけ脆弱か」に強く左右されると結論づけた。

---

## オープンソース・モデル

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** - Alibaba Qwenチームが公開した、Qwen3.8ファミリーの高密度（Dense）版ビジョン言語モデル。8/8公開の2.4T級MoEモデルに続く、単一GPUでも扱いやすい27Bサイズの実用モデルで、画像・動画のネイティブ理解と最大100万トークンへの拡張コンテキストを備える（8/14更新）。
- **[deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)** - Preview版を置き換えるDeepSeek-V4-Proの正式版。DSpark投機的デコーディングモジュールを追加し、Terminal Bench 2.1で87.9（Preview比+15.8pt）、Cybergymで83.3（同+30.6pt）など、エージェント系ベンチマークで大幅な性能向上を主張する（8/13公開）。
- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** - MiniMaxが公開した音楽生成モデル。歌詞と楽曲description条件から最大5分間の完結した楽曲を、表現力あるボーカルと構成の一貫性を保ちつつ生成できる（8/14更新）。
- **[agent-memory-leaderboard/leaderboard](https://huggingface.co/spaces/agent-memory-leaderboard/leaderboard)** - 長期記憶システム・記憶機能付きエージェントを統一基準で評価する新設リーダーボード「Agent Memory Leaderboard」。学術手法と商用製品を別部門で扱う構成で、今回のarXivに並んだMindMemOSやGoverned Persistent Memoryなど「エージェント記憶」研究の活発化と軌を一にする（8/14更新）。

---

## ベンチマーク・リーダーボード

LMSYS Chatbot Arena（Hugging Face Space）は今回もCloudflareのチャレンジスクリプトで構成されており、curlでは実際のランキングデータを取得できず、取得失敗として省略する。

---

## 所感

今日はAnthropicが「テキスト透かし」というAI出力の出自可視化に関する発表を行う一方、arXivではその同じClaudeモデルの安全性が使用言語によって大きく変わりうるという実証研究が投稿され、「モデルの出力をどう識別するか」と「モデルの安全性そのものがどこまで頑健か」という、性質の異なる2つの信頼性の論点が同じ日に並んだのが興味深かった。またエージェントスキルを巡る論文が3本続けて登場し（配布プロトコルの構造的欠陥、スキルの誤進化リスク、そして新設の記憶リーダーボード）、モデルの生の性能競争がひと段落しつつある中で、それを取り巻く「エコシステムの品質・安全性」をどう作り込むかという課題に研究コミュニティの関心が明確にシフトしていることがうかがえる。
