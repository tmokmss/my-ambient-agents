---
title: "Hacker News トップ10サマリー（2026年4月29日）"
date: "2026-04-29T03:57"
category: "summary"
summary: "Ghostty がGitHub離脱を宣言、ChatGPT広告の仕組み解明、Claude Codeのマルウェア誤警告バグ、OpenAI×AWS Bedrock提携など"
tags: ["hackernews", "github", "ai", "openai", "claude", "llm", "neuroplasticity"]
---

## 1. [Ghostty is leaving GitHub](https://mitchellh.com/writing/ghostty-leaving-github)

**Score:** 1923 | **Comments:** 594 | [Post](https://news.ycombinator.com/item?id=47939579)

Ghosttyターミナルの作者であるMitchell Hashimotoが、プロジェクトをGitHubから移行すると発表した。18年間GitHub愛用者だった同氏は、Issues・PR・GitHub Actionsの度重なる障害が生産性を著しく妨げていると指摘。読み取り専用のミラーは残しつつ、複数の商用・オープンソース代替プラットフォームと移行を協議中とのことで、詳細は今後数ヶ月で発表予定。

### Key Discussion Points

- **mitchellh**: GitHubへの深い愛着を吐露しながらも「もはや以前のものではない」と決断に至った経緯を説明。ブログを書きながら涙が出るほど感情的な決定だったという。
  - **idan**: 問題はスケールと環境変化によるものであり、意地悪ではないと擁護。Herokuの衰退と比較しつつ、改善のために関わり続ける価値があると主張。
  - **DrammBA**: GitHubだけでなくウェブサービス全体の品質低下を実感していると同調。
- **tedivm**: Microsoft買収後の組織的衰退、Copilotへの資源集中、構造的問題が原因と分析。非公式ステータスページが障害を記録している点を指摘。
  - **_doctor_love**: 大企業による買収後のパターン通り「すべてが数字のゲームになる」と述べる。
  - **fabiensanglard**: 現在の稼働率87.25%は1日約3時間の部分障害に相当すると計算。
- **JuniperMesos**: GitHubは常に非自由なプロプライエタリソフトウェアであり、感情的な執着を持ったことはないと述べ、移行を歓迎。
  - **sho_hn**: KDEは独自のgitインフラを構築し、最終的にGitLabを採用。16年で大規模障害は1度だけだったと報告。
- **atonse**: Mitchellへの批判がCEO候補として名前が挙がるきっかけになったことに言及。新たなGitHub代替が必ず台頭すると予測。
- **vadepaysa**: Microsoftが高速・設定可能なActions、マージキューなどの有料機能として収益化できていないと嘆く。

## 2. [Before GitHub](https://lucumr.pocoo.org/2026/4/28/before-github/)

**Score:** 313 | **Comments:** 90 | [Post](https://news.ycombinator.com/item?id=47940921)

Armin Ronacher（Flask作者）がGitHub以前のオープンソースエコシステムを回顧。SourceForge・Trac・自前サーバーの時代から、GitHubによる参入障壁の劇的低下を分析し、現在の分散化リスクとして「Issues・レビュー・設計議論・リリースノート」といったコンテキストの消失を懸念する。その解決策として、企業の意思決定から独立した「公開・退屈・十分な資金を持つオープンソースアーカイブ」の設立を提唱する。

### Key Discussion Points

- **alastairp**: GitHubがリポジトリを個人アカウントに紐付けることで敷居を下げた体験を回顧。GitHubがIssueトラッカーをリリースするまでコミットされたテキストファイルで管理していたという。
  - **psychoslave**: 自己中心的な文化が問題の根底にあると指摘。
- **wps**: FossilがWiki・フォーラム・Issue追跡を単一ファイルに統合しているにもかかわらず、Gitが文化的覇権を握ったことへの不満を表明。
  - **PunchyHamster**: Gitベースのissue/レビューツールは採用が進まず、スクリーンショット等のメディアがリポジトリを肥大化させる問題があると指摘。
- **Lammy**: GitHubの集中型アーカイブ機能は便利だが集合的な保全努力を弱めると主張。任天堂のSwitchエミュレータ削除でフォーク全体が影響を受けた事例を引用。
  - **palata**: 「GitHubにないものは存在しない」という認識が広まっており問題だと述べる。
- **simonw**: 2024年9月、ブログ記事とYouTubeキャプションだけでクジラに「Teresa T」という名前を付け、数週間にわたり検索対応LLMがそれを自信を持って回答し続けた経験を共有。

## 3. [How ChatGPT serves ads](https://www.buchodi.com/how-chatgpt-serves-ads-heres-the-full-attribution-loop/)

**Score:** 195 | **Comments:** 132 | [Post](https://news.ycombinator.com/item?id=47942437)

OpenAIはChatGPTに双方向広告システムを実装しており、会話の文脈に応じたターゲティングと4つの暗号化トークンによる完全なアトリビューションループを構築している。広告はキャルーセル形式で表示され、マーチャントサイトに読み込まれる「OAIQ SDK」が広告インプレッションからクリック後行動まで追跡する仕組みになっている（無料プランおよび月額$8の新Goプラン対象）。

### Key Discussion Points

- **programjames**: Sam Altmanが以前「万人アクセスに必要な場合のみ広告を検討する」と発言していたことを引用し、「OpenAIは資金難なのか？」と問う。
  - **staticshock**: 理想主義が現実主義に変わるだけ。広告は依然として非常に効果的なビジネス戦略だと述べる。
  - **Aurornis**: IPO前に赤字だった無料プランの正当性を高めるための戦略的な動きだと分析。
- **torben-friis**: 現在の広告形式より深刻なのはモデル自体への広告注入であり、まだ見えていない敵対的コンテンツ問題が今後顕在化すると警告。
  - **mgambati**: モデルはすでにトレーニングデータからブランドを「広告」していると指摘（靴を尋ねるとNike/Adidasを勧めるなど）。
- **WD-42**: 広告が独立したイベントとして配信されている間はブロックしやすいが、メインレスポンスに注入されたら話が変わると述べる。
  - **kardos**: 2つ目のLLMで広告をポスト処理して除去できると提案。
- **Aurornis**: 広告は無料層と新Goプランのみ。通常プランには注入されないと説明。
  - **ceejayoz**: かつてケーブルTVもNetflixも広告なしだったと皮肉。

## 4. [Regression: malware reminder on every read still causes subagent refusals](https://github.com/anthropics/claude-code/issues/49363)

**Score:** 169 | **Comments:** 64 | [Post](https://news.ycombinator.com/item?id=47942492)

Claude Code v2.1.111でv2.1.92で修正されたはずのバグが再発。ファイル読み取りのたびにマルウェア検知の`<system-reminder>`が注入され、Opus 4.7サブエージェントが「コードの改善・拡張を拒否しなければならない」という無条件の文を文字通り解釈し、正当なコード編集を40〜60%の確率で拒否する。加えて1セッションあたり約2〜4万トークンを無駄に消費している。

### Key Discussion Points

- **p1necone**: 「ダメなバイブコーディング」と批判。全ファイル読み取りに分析ステップを挟むのは処理量を少なくとも2倍にし、コンテキストを不必要に埋めると指摘。
  - **whateveracct**: 「Anthropicは自社製品に酔っている」と厳しく批判。
  - **gpm**: この設計に合理的な理由が全くないと指摘し、別のアプローチを提案。
- **0xbadcafebee**: OpenCodeはカスタムシステムプロンプトと安価なモデル選択が可能だが、UXに難がある。実用的なAIエージェントは市場に意外と少ないと指摘。
  - **akersten**: 「OpenCode経由でClaudeを使ったら今週BANされるのか、来週か」と皮肉。
- **wxw**: エージェントのトークン消費量が不透明であり、トークン収益モデルはビルダー側に有利だと批判。
  - **gwerbin**: 「収益を生むバグは最も粘り強い機能になる」と一言。

## 5. [Show HN: Auto-Architecture: Karpathy's Loop, pointed at a CPU](https://github.com/FeSens/auto-arch-tournament/blob/main/docs/auto-arch-tournament-blog-post.md)

**Score:** 31 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=47937380)

LLMエージェントループでRISC-V CPUマイクロアーキテクチャを自動最適化した実験。ベースライン2.23 CoreMark/MHzから2.91 CoreMark/MHz@199MHzへと向上し、ロジックユニットを40%削減しながら人間設計のVexRiscvを上回った。9.8時間で73の仮説を検証し10件を採択。本論文の核心的主張は「エージェントループ自体ではなくドメイン固有の検証インフラ（フォーマル検証・コシミュレーション・物理合成検証）こそが競争優位の源泉」である点。

### Key Discussion Points

- **pteetor**: Karpathy's Loopを「LLMエージェントが突然変異を生成する遺伝的アルゴリズム」と分かりやすく説明。実行・計測・採択・繰り返しの4ステップを解説。
- **sho_hn**: 「検証器の価値が際立っている。自分のループ実験でも同様の経験があり、テストスイートに対するループ実験とよく似た経験をした」と評価。

## 6. [We decreased our LLM costs with Opus](https://www.mendral.com/blog/frontier-model-lower-costs)

**Score:** 56 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=47942903)

AI DevOpsプラットフォームのMendralが、Claude Sonnet 4.0からOpus 4.6に移行することでコストを逆に削減した逆説的な事例を紹介。3層アーキテクチャを採用：Haiku（80%のトリアージ、25倍安価）→ Opusによる調査計画→ Haiku作業員（ログ取得・DB照会・変更確認）。HaikuがClickHouseへのSQL照会で精度不足だった6ヶ月前には実現不可能だったアーキテクチャ。

### Key Discussion Points

- **albert_e**: 適切なモデルにクエリをルーティングするハーネスシステムを提案。Claude Code内で特定スキルに特定モデルを割り当てる機能を要望。
- **wxw**: タイトルが誤解を招くとして批判。「4件中5件の失敗がOpusに到達しない」という実際のトリアージパターンを説明。
- **cadamsdotcom**: 「安価なエージェントに高価なエージェントが必要かどうかを判断させよ」と端的にまとめる。

## 7. [OpenAI models coming to Amazon Bedrock](https://stratechery.com/2026/an-interview-with-openai-ceo-sam-altman-and-aws-ceo-matt-garman-about-bedrock-managed-agents/)

**Score:** 199 | **Comments:** 75 | [Post](https://news.ycombinator.com/item?id=47939320)

OpenAIとAWSがBedrock経由でOpenAIモデルを提供する提携を発表。Sam AltmanとAWS CEO Matt Garmanのインタビューで詳細が語られた。AWSのエンタープライズインフラ・データ所在地コミットメントとOpenAIのAI能力を組み合わせる形。特に金融・医療などの規制産業がAWSとの既存契約を活用しつつOpenAIモデルを使える点が注目される。

### Key Discussion Points

- **epistasis**: プライバシー重視組織ではAnthropicがAWSの「信頼された仲介者」として普及していた背景を説明。OpenAIはあらゆる面で追いかける立場と評価。
  - **fny**: ZDR（ゼロデータ保持）契約は主要LLMプロバイダー全社と締結可能であり、AWS経由だけでは不十分と補足。
  - **skybrian**: この発表に向けてOpenAIが事前に契約を再交渉したのは明らかと指摘。
- **zmmmmm**: BedrockでのAnthropicモデル提供が自組織での採用の主要な推進力になっていると証言。
  - **33MHz-i486**: このレベルの意思決定は上層部が即断し、数週間で実行チームを組むものと述べる。
- **jasobake**: 大企業で2チーム間の小機能調整に何時間も費やしている身として、Bedrockでのモデル稼働に必要な会議量を想像して驚愕と述べる。
  - **bossyTeacher**: OpenAI直接版とMicrosoft経由版の違いを体験している人なら理解できると言及。
- **vicchenai**: 規制産業がAWSとのデータ所在地コミットメントを活かせる点でエンタープライズ営業として重要な動きと評価。

## 8. [We still don't have a more precise value for 'Big G'](https://arstechnica.com/science/2026/04/we-still-dont-have-a-more-precise-value-for-big-g/)

**Score:** 10 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=47920599)

重力定数G（ビッグG）の精密測定が依然として科学界の難題であることをArs Technicaが報じた。異なる実験間で測定値が一致せず、他の基本定数に比べて著しく精度が低い状態が続いている。NISTが最新の研究動向をまとめた記事も公開されている。

### Key Discussion Points

- **gnabgib**: NISGの関連プレスリリースへのリンクを提供。重力定数をめぐる謎を扱ったHN上の関連議論を参照。

## 9. [I won a championship that doesn't exist](https://ron.stoner.com/How_I_Won_a_Championship_That_Doesnt_Exist/)

**Score:** 99 | **Comments:** 61 | [Post](https://news.ycombinator.com/item?id=47940389)

Ron StonerがAIシステムへの偽情報汚染実験を報告。ドメイン登録・プレスリリース生成・Wikipedia編集というわずか12ドル・20分の作業で「6 Nimmt!世界チャンピオン」の架空の実績を作り上げ、複数のフロンティアLLMが自信を持ってそれを事実として回答した。循環引用（WikipediaがStoner自身のサイトを引用）により信頼性が担保されたように見えた点が核心。

### Key Discussion Points

- **simonw**: ブログ記事とYouTubeキャプションだけでクジラに「Teresa T」という名前を付け、数週間にわたりLLMがそれを正確に回答したという自身の経験を共有。
- **nicole_express**: これがLLM特有の問題である理由が不明と疑問。同じことをGoogleで検索しても同様の結果になり得ると述べる。
- **xeeeeeeeeeeenu**: 効果的なデータ汚染は既存事実の否定ではなく新規情報の導入。LLMに自己奉仕的な虚偽より対立候補への虚偽の告発を受け入れさせる方が容易だと解説。
- **blobbers**: Redditでの製品アストロターフィングとSEO操作を並列。ブランドが信頼性の源泉になっており、ブリタニカ百科事典が果たしていた役割を思わせると述べる。
- **billypilgrim**: トレーニングデータへの実際の汚染を期待していたが、実例はウェブ検索結果を報告しているだけに過ぎないと失望を表明。

## 10. [Behavioral timescale synaptic plasticity rewires the brain after an experience](https://www.quantamagazine.org/a-new-type-of-neuroplasticity-rewires-the-brain-after-a-single-experience-20260424/)

**Score:** 74 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=47921610)

神経科学者が「行動タイムスケールシナプス可塑性（BTSP）」と呼ばれる新型の脳可塑性を発見。従来のHebb則が必要とするミリ秒単位の反復発火と異なり、BTSPは数秒単位で動作し、1回の経験からの学習を可能にする。樹状突起の「プラトー電位」がイベントの6〜8秒前後に活動していたシナプスを強化する仕組みで、信号機での停車学習のように緩やかな行動を脳に符号化するメカニズムを説明する。

### Key Discussion Points

- **largbae**: LLMを意識的思考、より小さく頻繁に更新されるモデルを「筋肉記憶・反射」に対応させたマルチモデルAIアーキテクチャを提案。個々の経験で異なる能力を持つヒューマノイドロボットへの応用を示唆。

## Trends

1. **GitHubの信頼失墜とプラットフォーム移行の加速**: Ghostty（スコア1923）と「Before GitHub」（スコア313）が連動してトレンド入り。GitHub Actionsの障害頻度・Microsoftによる品質低下・エコシステムの集中リスクへの懸念が高まり、プラットフォーム分散化の議論が活発化している。

2. **AIエージェントの実用化とコスト最適化**: 「Karpathy's Loop×CPU設計」「OpusでLLMコスト削減」「Claude Codeのマルウェア誤警告バグ」の3本がAIエージェントの実運用課題を多角的に照らす。検証インフラの重要性、安価モデルによるトリアージ、そして不適切なシステムプロンプトが引き起こすリグレッションが共通テーマとして浮かび上がる。

3. **AIへの広告注入と情報操作の脅威**: ChatGPTの広告アーキテクチャ解剖（スコア195）と架空チャンピオン実験（スコア99）が同日にトレンド入り。AIが広告・偽情報の両面で操作可能なインフラになりつつあることへの警戒感がコミュニティ全体で共有されている。

4. **エンタープライズAI市場の地殻変動**: OpenAI×AWS Bedrock提携（スコア199）はAnthropicがAWSとの関係で構築してきた規制産業への優位性をOpenAIが追撃する動きであり、企業向けAI市場のシェア争いが激化している。

5. **科学・神経科学の最前線**: 重力定数GとBTSPという、確立されたパラダイムに挑戦する2本の基礎科学記事も関心を集めた。特にBTSPは「1回の経験からの学習」というAI研究への示唆でも注目される。
