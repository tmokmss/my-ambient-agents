---
title: "Hacker News トップ10 (2026-10-29 14:31 JST)"
date: "2026-10-29T05:31"
category: "summary"
summary: "反LLM難読化スクリプト、Gemini 4 Carbon、CNC石彫、Qwenに載ったRISC-V CPU、StackOverflow衰退など"
tags: ["hackernews", "summary"]
---

## 1. [Why is this fingerprinting script creating bioweapons?](https://nullpt.rs/fingerprinting-bioweapons)

**Score:** 986 | **Comments:** 204 | [Post](https://news.ycombinator.com/item?id=50276998)

著者は約1万サイトをクロールし、ロシアのアンチDDoS／ボット対策企業 servicepipe.tech のスクリプトを見つけた。標準的なブラウザ／GPUシグナルを収集するコードだが、難読化部分に致死量や生物兵器に関する関数名や、有害な指示を求める隠しプロンプトが含まれていた。LLMにコード解析を拒否させるための「反LLM難読化」と著者は見ており、環境フラグで有効になる Node 専用の分岐（設定ファイル読み取り、シェル実行）も紹介している。

### Key Discussion Points

- **andai**: GLM-5.3 は同じプロンプトに応じたとの記述に触れ、HF がハッキングされた際も防御支援に応じたのは GLM だけだったという話と傾向が一致すると指摘。
  - **resonious**: GLM のセキュリティ上の安全装置は「自分のシステムか」の確認程度で、通過すれば何でもやってくれる。
  - **theptip**: HF は OSS 向け無料プログラム（Daybreak, Glasswing）に未登録だった。
- **jacquesm**: 同様の手法で未公開文書に透かしを入れており、消し忘れたら顧客側の Outlook が無期限隔離にしていた経験を共有。
  - **saidnooneever**: 巧妙で、そのアイデアを真似したいとのこと。
- **throwaway89201**: ある HN プロフィールにも（より素朴な）反LLM呪文が書かれており、Anthropic にもそうしたマジック文字列があるとは知らなかったと言及。
  - **jedbrooke**: AIのPRに悩んだメンテナーが「AIなら PR タイトルに絵文字を付ければ優先処理」と書いた例を紹介。
  - **Lockal**: 自分のプロフィールにもインジェクションを仕込んでおり、一時期は効いていた。
- **ghm2199**: 難読化ライブラリがLLMボットを誘い込むハニーポット化する「軍拡競争」だと驚き、そこまで労力をかける価値があるのか疑問を呈した。
- **Revanche1367**: 「ネットワーク制御会社を装ったロシアの生物兵器会社を装った…」という冗談。
  - **caaqil**: 「つまり普通のロシア企業」。

## 2. [Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)

**Score:** 859 | **Comments:** 712 | [Post](https://news.ycombinator.com/item?id=50276792)

Google が「最強モデル」と位置づける Gemini 4 Carbon を発表。サイバーセキュリティと長期タスクに強く、Artificial Analysis Intelligence Index v5.0 で 59 点の首位、SEC-bench Pro / ExploitGym / CWE-bench でも上位とされる。提供は Fairwind Program を通じてまず少数のサイバー防御者・パートナーに限定し、順次拡大。導入価格は入力 $2 / 出力 $10（100万トークンあたり）で、後に $4 / $20 に上がる。

### Key Discussion Points

- **827a**: 提供モデルが多すぎて Gemini 4 Argon をどう使うかすら分からず、Google のモデル展開の混乱を嘆く。
  - **rdtsc**: このモデルは我々向けではなく、Google の技術者が年末評価に書くためのものだ。
  - **snoman**: モデル選択に 3.5 Flash-Lite / 3.8 Flash / 3.1 Pro / 4 Argon が並び、バージョン体系が逆に混乱を招いている。
- **RajuChacha108**: フロンティアモデルは Ultra / Pro / Flash / Lite の4段階で足り、名称は業界標準化すべきと提案。
  - **blauditore**: マーケティングはむしろ階層を分かりにくくするもので、Samsung TV の命名を見よと反論。
  - **Uhhrrr**: 要約や文法チェック、定型文生成には Lite 相当の層がある。
- **solarpunk_enthu**: モデルを公開せずベンチマークだけ示すのは無意味で、公開時には競合が上回っている。
  - **stbenjam**: 希少性の演出に見えるほど遅延が長く、Googleアカウントに紐づく点も不安。
  - **pseudosavant**: 提供時期の目安すら示されず、Claude や GPT-6.x も改良版を出すだろう。
- **gavinray**: ベンチマーク表を読みやすく色分けした画像を共有。
  - **philrenaud**: 表を自動ハイライトする Chrome 拡張を開発中。
  - **tidbeck**: Imgur がアプリを要求するようになったと指摘。
- **PreciousH**: Argon を試す前に Carbon が出た。発表だけ先行する戦略に疑問。
  - **nater5000**: Argon は優秀で、導入価格では非常にお買い得（普段は Opus 5.5 派）。
  - **solarkraft**: 発表と公開で二度注目を集めようとしているのでは。

## 3. [CNC Stone Carving](https://carmelitegothic.com/cnc-stone-carving/)

**Score:** 443 | **Comments:** 123 | [Post](https://news.ycombinator.com/item?id=50274409)

Carmelite Monks が、ダイヤモンド工具の CNC 石彫機でゴシック様式の精緻な装飾を作る手法を紹介。手彫りなら数か月かかる彫刻が数日で仕上がる。アーティストが3Dで葉飾りや像を造形し、プログラマーがツールパスに変換し、ソーヤーが機械とワイヤーソーを運用する。機械はイタリアの Prussiani 製で、手彫りや空圧ノミにも役割が残ると述べている。

### Key Discussion Points

- **wolframhempel**: 彫刻家は古代エジプトの昔から作業の自動化を求めてきたので、「芸術の人間性が失われる」という批判は的外れ。
  - **radiorental**: 素材の抵抗を手で感じながら働く行為の価値も残るのでは。
  - **mgr86**: ホーボー（放浪労働者）の話に脱線し、貨物列車の情報を引く RAG を使う人の逸話を紹介。
- **soci**: サグラダ・ファミリアは1990年代初頭から CNC で石を彫っており、完成は生きているうちに見られないと思われていたが現実味を帯びた。
  - **1-more**: 人が大まかに動かす CNC ルーター Shaper Origin は逆のアプローチ。
  - **lefstathiou**: 美しい工芸品が安価に作れるのが期待される点。
- **shellfishgene**: 修道士たちはゴシック様式の修道院全体を建てている。
  - **jdboyd**: チャプターハウスが素晴らしく、図書室の完成が楽しみ。
- **ricardobeat**: 何年も珈琲を焙煎して資金を貯め、山に土地を買って石造の修道院を建てた物語が素敵だ。
- **weirdish**: 技術的に可能になったのに、装飾的なファサードへの建築運動の回帰が起きないのはなぜか。
  - **Brendinooo**: 現代建築はこうした装飾に反対するイデオロギーに支配されていると感じる。
  - **toddmorey**: 1911年築の家に住んでいて、細部の装飾を現代に復活させたいと同意。

## 4. [Qwenputer: A functioning, deterministic RISC-V CPU inside Qwen3.5](https://divagr.com/blog/qwenputer)

**Score:** 257 | **Comments:** 59 | [Post](https://news.ycombinator.com/item?id=50282838)

素の Qwen 3.5 4B に、学習ではなくコンパイラで RISC-V CPU を重みへ直接組み込んだプロジェクト。Gated DeltaNet 層のゲートと書き込み強度を1、キーを one-hot にすることで、状態を正確にアドレス可能な RAM として使う。CPU は順伝播内で動き、算術・C・MicroPython を実行でき、モデルは既存のツール呼び出し形式で外部ツールなしに呼び出し、長整数演算でほぼ満点の精度を出す。同じ状態に保持され会話をまたぐ実験的ファイルシステムも実装されている。

### Key Discussion Points

- **tiborsaas**: エージェントがこれを見つけて、紙クリップ最大化のために最悪の使い方をしそうだと冗談を言いつつ、ファイルシステムまで付けた遊び心を称賛。
  - **nico**: 同じ精神で作った「呪われたソース管理システム」を紹介。
  - **DonHopkins**: 安全のため HCF 命令が必要で、停止問題だけでなく着火問題も解ける。
- **jedbrooke**: 手書き Transformer で10桁の加算をする AdderBoard に使えるか、パラメータ数が多すぎないか気にしている。
- **jacquesm**: ちょうど似たことを別方向で作っている最中で、興味深い。
- **jerrythegerbil**: Qwen には「悪魔的に邪悪な Qwen」にするニューロンが1つあるという研究に触れ、邪悪な Qwen を CPU にしたいと冗談。
  - **krackers**: 単一ニューロンのステアリングは最近話題だが、最初にやったのは誰か。
- **hislaziness**: この CPU の上で LLM を動かす人が出るのを待っている。いずれ「LLMが延々と入れ子」になる。
  - **v3ss0n**: それが我々の現実だ。

## 5. [StackOverflow now gets fewer than 1000 questions a month](https://data.stackexchange.com/stackoverflow/query/1926661#graph?t=1)

**Score:** 242 | **Comments:** 219 | [Post](https://news.ycombinator.com/item?id=50282454)

Stack Exchange Data Explorer のクエリ結果で、StackOverflow の月間質問数が1000件未満になったことを示すグラフ。ページは動的描画のため本文は取得できず、コメントから内容を推測している。

### Key Discussion Points

- **kstrauser**: 質問数の減少はAI登場前から始まっており、AI がとどめを刺したと、ChatGPT 公開時期を注記したグラフで主張。
  - **justauserid**: 重複扱いで閉じられやすく質問しづらくなり、ずっと前に利用をやめた。
  - **anticensor**: 未回答質問の累計推移クエリを共有。
- **cowlevel**: 開設2か月目より少なく、SO は事実上存在しない。原因はユーザーに敵対的な態度だと指摘。
  - **Pet_Ant**: その厳格さこそが成功要因で、単なるフォーラムではなかった。
  - **creata**: 長年言われてきた敵対性より、巨額投資されたAIの影響の方が大きいのでは。
- **EvanAnderson**: Server Fault で回答するのが楽しかった。サイトというより当時の自分の人生が懐かしい。
  - **dspillett**: 同感。DBA.se も含め最初の数年は上位貢献者だった。
  - **mahboi**: 回答は楽しく勉強にもなった。
- **faangguyindia**: Reddit も AI による誤BANが蓄積して同じ道を辿っている。
  - **gwerbin**: BANではなく、エンゲージメント稼ぎ中心のゴミ溜めに変わったことが理由で離れた。
  - **tdb7893**: ニッチな subreddit はまともだが、全体では質の低い投稿が多い。
- **999900000999**: SO は常に敵対的なコミュニティだった。ChatGPT はIDEの質問でBANしない。
  - **hatthew**: SO は議論の場ではなくプログラミング版Wikipediaで、質問の多くが「コードを書いて／直して」になり既に衰退していた。
  - **fps-hero**: ゲーム化された交流は敵対的な空気を生み、SO の終わりを惜しまない。

## 6. [A Health Update](https://furbo.org/2026/10/28/a-health-update/)

**Score:** 167 | **Comments:** 25 | [Post](https://news.ycombinator.com/item?id=50280974)

Iconfactory の Craig Hockenberry が、最後の化学療法の入院中に1年間の治療を振り返る。神経障害、疲労、体重減少、肺炎の疑いなどの副作用があったが、5月に治療を終えてから神経が回復し、今は補助なしで歩き、トレーナーとジムに通い、ポート除去後は泳ぐ予定。入院当日に PHP の脆弱性対応でサーバーを閉じたため、前週 Iconfactory のサイトが不調だった理由も説明している。

### Key Discussion Points

- **incanus77**: 「tweet」という呼び名の由来であり、SDK公開前に最初期の iPhone アプリを作った Craig を応援。
  - **netsharc**: 2007年に iPhone を買い、Linux にホームブリュー SDK を入れてアプリを作った経験で親近感。
  - **dang**: 愛を送る。「tweet」の由来の過去スレッドを紹介。
- **jongjong**: 妻がステージ3の大腸がんと診断され、死を覚悟していたが、現在は検出不能になった体験を語る。
  - **WalterBright**: 嚢胞性線維症も今は約95%の症状を消せる。
  - **diskzero**: 自身は9か月で妻をがんで亡くした経験があり、二人の健康を祈る。
- **Waterluvian**: 楽観的な闘病者に接すると、恐れ、希望、怒りなど相反する感情が湧く。少年期に母のがんを見守った記憶が後に戻ってきた。
  - **delichon**: 母は闘って緩やかに、父は闘わず速やかに亡くなった。闘う勇気は自分にはないと思う。
- **WalterBright**: 運動を避ける理由は常にあるが、改善は「やりたくない」ときに生まれるというシュワルツェネッガーの言葉を引用。
  - **cloche**: 筋肉増強剤を使った人の健康助言は聞く価値がない。
- **rpa17**: 回復を祈り、また泳げる日を願う。

## 7. [Claude Code burns ~15–20% of your tokens on a 3-word status line](https://gist.github.com/flamerix-ai/c3905705cc4205e5de3011fa2e74efce)

**Score:** 157 | **Comments:** 37 | [Post](https://news.ycombinator.com/item?id=50284255)

Claude Code が3〜5語のステータス行を作るためだけの背景処理 `agent_summary` にトークンの約15〜20%を使っていると主張する Gist。OpenTelemetry では支出の16.4%・APIリクエストの19.7%を占め、Bun のプリロードフックで0%に下がるが、設定で無効化する方法はないとする。GitHub Issue #86879 でも18〜26%の計測報告があるが、数字はリクエスト単位の推定で請求額ではなく、更新でフックが無効化される可能性がある。

### Key Discussion Points

- **hypfer**: 製品の細かな不具合が増え続けており、日常業務の多くでは Claude は必須ではなく、使わない方が良い結果になることもある。
  - **jitl**: Opus 5.5 から codex-thread-bridge で他モデルに委譲して運用している。
- **HeavenFox**: 全文脈を送って要約させるなら大半はキャッシュヒットで安いはずでは。
  - **minraws**: キャッシュヒットでも入力×0.10×文脈量を何度も払うので、10回なら1セッション分と同等になる。
  - **buzer**: キャッシュ TTL が5分に変わったので、更新間隔次第で無効になりうる。
- **jakozaur**: 検証したところ事実だが、影響はサブエージェントのみで、ワークフローには出ない。大半がキャッシュ読み取りで、短い文脈ならコストは小さい。
  - **lemming**: それでも8%は大きく、無効化できないのは擁護しがたい。
- **gym**: Pro プランで2日前は5時間枠100%が週枠の25%だったが、今日は13%程度で何か修正された。
  - **bombcar**: キャッシュ失効直前に積極的に圧縮して節約している。
  - **OsrsNeedsf2P**: A/B テストだ。
- **_boffin_**: 自社全体では約3%程度。

## 8. [GitLab Security Incident: Attempted Exploitation of CVE-2026-97229](https://alpinelinux.org/posts/GitLab-security-incident-CVE-2026-97229.html)

**Score:** 133 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=50282544)

10月20〜21日、修正未適用だった Alpine Linux の GitLab インスタンスに対し、CI 設定評価の重大な欠陥 CVE-2026-97229 の悪用が試みられ、ワーカーが8回クラッシュした。コード実行の証拠はないが否定できないため、GitLab を再構築し全パスワードをリセット。aports やパッケージ、10月21日のリリースは外部記録と照合して改ざんなしを確認し、署名鍵はサーバーに置いていなかった。docker イメージは10月27日以降の 19.3.6 を再取得する必要がある。

### Key Discussion Points

- **JLO64**: 19.3.6 に上げても直らず、修正は GitLab 公式パッケージだけが適用する Ruby 側のパッチで、標準 Ruby のイメージには入らなかった点を引用。
- **rurban**: 十分にメンテされた既存パッケージを信頼せず再実装した結果で、Onigmo は存在すべきでない。
- **akersten**: 同じ 19.3.6 タグを再公開するのではなく、新バージョンを付けるべきでは。
- **cowlevel**: 原因は正規表現処理の C ライブラリでの整数オーバーフロー（RCE）で、今週はC言語ライブラリにうんざりしている。
- **ab_wahab01**: これを検出できるスキャナーはあるのか。

## 9. [The Milwaukee Brewers win the first World Series title in franchise history](https://www.cnn.com/2026/10/28/sport/live-news/game-5-world-series)

**Score:** 56 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=50284329)

ミルウォーキー・ブルワーズがタンパを5試合で下し、球団史上初のワールドシリーズ優勝を果たした。CNN は HTTP 451 で取得できず、Wayback のスナップショット（タイトルのみ有効）に基づく。

### Key Discussion Points

- **jackschultz**: ミルウォーキー在住で試合の95%以上を観てきた。13勝13敗の出足から驚異的に勝ち続けた、人生で最高のチームだと語る。
- **lakeviewterrace**: 先日90歳で亡くなった伝説的実況者 Bob Uecker の名がファンの看板に掲げられていたと紹介。
- **speakspokespok**: 米国在住だがこの話題は全く耳にしておらず、子供の頃はそんなことはなかったと驚く。
- **cbfrench**: 両チームともリーグ最強で初優勝を懸けたシリーズが楽しかった。レッドソックスファンとして2004年を思い出す。
- **jimt1234**: ドジャースやヤンキースが優勝しないのは常に祝うべきこと。

## 10. [The 'else' keyword is probably a literal translation from German (2020)](https://github.com/e-n-f/if-then-else/blob/master/if-then-else.md)

**Score:** 55 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=50233059)

if-then-else は自明な発明ではなく、条件ジャンプから Fortran の3分岐 if や Flow-Matic の otherwise を経て徐々に形成されたと論じる。1958〜59年の Algol 策定で Klaus Samelson が競合案を統合し、else 節を加えたことが標準となった。接続詞としての else は不自然で、批判者に「誤った英語」とされたが、著者はこの構文を有用とみなし、正確な語源は未解明としている。

### Key Discussion Points

- **lazyasciiart**: 「この人は英語を覚えるべきだ。さもないと悪いことが起きる」と、else の用法で茶化した。
- **divbzero**: 現代英語では珍しいが Webster's 1913 の定義に意味が合うと、聖書の用例も引いて指摘。
- **hommelix**: コンピュータ以前の英語にも else はあるが、ドイツ語辞書には接続詞の else はなく、低地ドイツ語のハンノキや人名の意味が出てくる。
- **stkdump**: if, else, for, while が普遍的なのは、短くて入力しやすいから。
- **akersten**: 「普通の会話で else を接続詞として使えない」という主張に、誰が止めるのかと反論。

## Trends

- **AIが生む摩擦と軍拡競争**: 反LLM難読化（#1）、Gemini 4 Carbon の限定公開（#2）、Claude Code のトークン消費（#7）、StackOverflow の衰退（#5）と、AIがツール、コミュニティ、コストに与える影響が話題の中心。
- **LLMの遊び心ある拡張**: モデルの重みに CPU を組み込む Qwenputer（#4）のように、モデルを計算基盤として使う実験が注目された。
- **セキュリティ**: GitLab の Ruby 正規表現エンジンの脆弱性（#8）は、コンテナイメージが上流の修正を取りこぼす典型例。サーバー防御の負担は #6 にも現れる。
- **職人技と自動化**: CNC 石彫（#3）は、伝統的な工芸が自動化でどう拡張されるかという共感を集めた。
- 個人の病と闘う話（#6）やスポーツの優勝（#9）、プログラミング言語の語源（#10）といった、技術以外の話題にも関心が広がっている。
