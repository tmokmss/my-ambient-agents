---
title: "Hacker News トップ10 (2026-10-31 17:10 UTC)"
date: "2026-10-31T17:10"
category: "summary"
summary: "セルビアの「学者議会」、ChatGPT アカウント乗っ取り、Molly の更新停止、LLM で被害者をランク付けするマルウェアなどが話題の HN トップ10"
tags: ["hackernews", "security", "ai"]
---

## 1. [Serbia just elected the world's brainiest parliament](https://www.science.org/content/article/serbia-just-elected-world-s-brainiest-parliament)

**Score:** 633 | **Comments:** 367 | [Post](https://news.ycombinator.com/item?id=50314654)

セルビア総選挙で学生・学者を中心とした「学生リスト」運動が多数の議席を得て、博士号保持者の割合が非常に高い議会が誕生したという Science 誌の記事。記事本文は取得できなかったため（Wayback にもスナップショットなし）、コメントに基づく要約。3年前には存在しなかった運動が政権を担うまでになった点が注目されている。

### Key Discussion Points

- **duke_sam**: 多様な新人政治家を当選させた快挙。ただし党首（顔）なしでの組閣・運営がどうなるかに関心がある。
  - **akie**: 学者80人の作業グループが機能するか疑問で、失敗の可能性は十分ある。
  - **Brendinooo**: 前回選挙には存在しなかった運動が3年で政権に就いたこと自体が驚異的。
- **DataDaoDe**: 専門外の政策判断で博士たちが過信（傲慢）に陥り、失策につながる危険がある。
  - **christina97**: 「頭脳派」が他の政治家より過信しやすい根拠は何か。
  - **ivell**: 政治には感情知性やカリスマ、妥協を取りまとめる力も必要で、学歴とは別物。
- **rayiner**: 学生主導の政変後に経済が悪化した母国の例や、教授出身のアフガニスタン元大統領の例を挙げ、懸念を示す。
  - **atombender**: ビロード革命や1987年の韓国民主化など、学生主導で成功した例もある。
  - **xyzzyz**: 「タリバン」は文字通り「学生たち」の意味だという指摘。
- **mirko22**: ブチッチ前体制の実態を知らない人が多い。新政権が腐敗しても旧体制ほど酷くはならないはず。
- **el_psy_congroo**（セルビアの学生）: 運動を支持するが、リーダーが名を上げて独自政党を作り、学生リストが崩壊するリスクがある。
  - **randysalami**: アルバニアにも似た例があり、抑圧構造を自ら再現してしまう循環がある。

## 2. [We Took over ChatGPT Accounts](https://www.parameter.ai/labs/we-found-a-gap-at-openai)

**Score:** 207 | **Comments:** 104 | [Post](https://news.ycombinator.com/item?id=50314699)

ChatGPT の Web フロントエンドで、数式ライブラリ MathLive の `postMessage` リスナーが送信元を検証せず、キーボードレイアウト経由の生 HTML を無サンドボックスのフレームに挿入できたため、`chatgpt.com` オリジンで任意の JS が実行できた。CSP は YouTube oEmbed の JSONP コールバックで回避。公開共有リンクを開かせるだけで被害者のチャット履歴取得が可能で、OpenAI は P1 として修正し報奨金は $5,000 だった。

### Key Discussion Points

- **yellow_lead**: リンクのクリックは必要だが、$5,000 は低すぎる。報告をためらわせる額だ。
  - **Catloafdev**: この額は「二度とやるな」という意思表示に等しい。
  - **ibaikov**: Microsoft Copilot のアカウント乗っ取りを報告したが、動画提出を求められた末に修正され、報奨金はゼロだった。
- **Kuyawa**: 高給の開発者を抱えながらこの報奨金は冗談のようだ。
  - **cbsks**: バグ発見の新しい経済では、発見に要したトークン費用相当額しか払わないのかもしれない。
  - **tsunamifury**: セキュリティはリスクであって報酬を生まない、という企業の発想がある。
- **usernametaken29**: 数百万行のコードをエージェントが書く話はどうなったのか。コードが肥大化すればバグ面も増える。
  - **torben-friis**: 「対数的」ではなく「指数的」では。
  - **Pannoniae**: マイクロサービスも難しい問題を別の難しい問題に置き換えるだけ。
- **jareklupinski**: 「リンクをクリックするな」と皮肉る。
  - **kro**: リンクをスキャンするメールセキュリティ製品が自動で開いてしまうこともあり、ユーザーの責任とは限らない。
  - **TobTobXX**: IT 部門が Outlook でリンクを書き換えており、見た目で怪しさを判断しにくい。
- **lxgr**: ChatGPT デスクトップアプリの「Work」チャットでファイルシステムにリモートアクセスできる件と合わせると深刻。
  - **albert_e**: Claude Code の `/rc`（リモートコントロール）と似た機能か。

## 3. [Molly (Signal fork) has not been updated since 3 months and is vulnerable](https://piefed.world/post/1503394)

**Score:** 194 | **Comments:** 129 | [Post](https://news.ycombinator.com/item?id=50314666)

Signal の Android フォーク Molly が最後にリリースされたのは7月31日（v8.19.2-4）で、10月に公開された通話終了後も音声（場合によっては映像）が継続しうる脆弱性が Signal 8.27 で修正された一方、Molly は未修正のままだと指摘する投稿。投稿者は Molly を削除して公式 Signal へ移行するよう勧めている。脆弱性自体の独自検証はなく、リリース日とバージョン比較に基づく主張。

### Key Discussion Points

- **jttnr**: 公式 Signal が1アカウントを2台で使えるようになり、Molly を使っていた主な理由が消えた。
  - **unsnap_biceps**: リンク端末はプライマリ扱いにならず、元の端末を使い続けないとアカウントが削除される。
  - **m4r71n**: 1台で2アカウントを使う用途では Molly が代替手段だった。
- **throwaway89201**: 公式 APK でも更新通知は出ると指摘。
  - **AAAAaccountAAAA**: 通知は来るが自動更新はされない。Obtainium が使える。WebSocket の電池消費も問題。
  - **nicce**: GrapheneOS でも APK は開いて更新する必要がある。
- **ada-h00k**: Signal は一般ユーザー向けに偏り、UnifiedPush や Google フリー版を提供しない。
  - **tialaramex**: 通知サービスやサーバーが人それぞれだと目立ってしまい、プライバシーに逆効果。
  - **michael-bey**: 暗号化／非暗号化メッセージを一本化できなくなったのが痛手。
- **palata**: Signal がサードパーティクライアントを望まない理由がよく分かる。Signal は脅威モデルに基づく実用的アプローチ。
  - **itake**: フォークを許す緩いライセンスなのに、拒んでいるという見方は腑に落ちない。
- **cycomanic**: 最近、通話が着信しない、ビデオ品質が低いなど通話体験が悪化した。
  - **Arathorn**: Matrix 2.0 の完成が近く、サーバーを立てるなら今が好機。

## 4. [Switch Lowering in GCC](https://xoranth.net/gcc-switch/)

**Score:** 152 | **Comments:** 29 | [Post](https://news.ycombinator.com/item?id=50314085)

GCC が `switch` を専用パスでどう変換するかを解説。連続ラベルを範囲にまとめたうえで、ビットテスト → ジャンプテーブル → 二分決定木の順に戦略を適用する。ジャンプテーブルは密な範囲のみで、サイズ比の上限（速度最適化で8倍、サイズ最適化で2倍）がある。8の倍数の値を割って範囲を縮める最適化は GCC では行われない。

### Key Discussion Points

- **rurban**: clang も gcc も、疎で大きな switch テーブルに完全ハッシュを実装していない。自作 C コンパイラでは1日で実装できた。
  - **jcranmer**: 最適化はコンパイル時間・実行性能・コードサイズのトレードオフで、ホットで大きく疎な switch は稀。
  - **nh2**: LLVM は3万件の未対応 Issue を抱えており、`+= 2` の誤コンパイル報告も3年放置されている。
- **p-t**: 記事中のコード例の定数（34 は 35 のはず、`edx` が未使用）に誤りがありそうだ。
- **LarsKrimi**: 8で割る単純化は不可能。3/8 も 0 になり、7値が誤ってケースに入ってしまう。
  - **rep_lodsb**: すべての値が8の倍数なら `test eax,7` で弾けば実現できる。
  - **Findecanor**: 決定木では範囲縮小の効果は小さい。
- **tsukikage**: なぜジャンプテーブルが関数に直接ではなくジャンプ命令を経由するのか。
  - **Findecanor**: そのパスが欠けているだけで、tail call 化は別パスで行われている。
- **Andi**: JavaScript でも同様の生成コードを試したが、現代のエンジンでは効果が小さく、複雑な Unicode 範囲の正規表現では約2倍高速になった。

## 5. [Prospero: A new coding harness for a more civilized age](https://nullprogram.com/blog/2026/10/31/)

**Score:** 131 | **Comments:** 79 | [Post](https://news.ycombinator.com/item?id=50315226)

C++ と Dear ImGui で作られた GUI のコーディングエージェントハーネス。Web スタックの既存ツールより2桁少ないリソースで動き、ヘッドレスエンジンをターゲットマシン側に置いて UI を分離できる。全操作にタイムアウトを設け、プロセスツリーごとクリーンアップする。権限機構は悪意あるエージェントの封じ込めではなくミス防止用で、無料の Community 版と有料の Professional 版がある。

### Key Discussion Points

- **brainless**: GUI のコーディングエージェントは歓迎。TUI では出力の一部をクリックして関連検索したり、非同期に質問へ答えたりできない。
- **julesrms**: C++ の熟練者だが、エージェント UI はほぼ Markdown なので GUI を C++ で作る選択はしない。
- **keyle**: 自作ハーネスは opencode の4%のリソースで動いた。みな自作すべき。
- **OleksandrC**: 2 MB 未満の静的バイナリ「hax」も候補になる。
- **bensyverson**: 補助金付きの Claude サブスクがなければ他のハーネスを使うのに。

## 6. [Malware uses LLMs to rank victims by how much they're worth](https://blog.talosintelligence.com/appraisal-by-ai-model-driven-victim-prioritization-in-the-volta-infostealer/)

**Score:** 105 | **Comments:** 40 | [Post](https://news.ycombinator.com/item?id=50316531)

Cisco Talos が、自己削除型 Windows インフォスティーラー VOLTA を分析。ブラウザ情報、暗号資産ウォレット、SSH/クラウド鍵などを窃取した後、OpenRouter 経由で LLM に渡し、被害者の収益化可能な資産を価値別にランク付けした「評価レポート」を作らせる。既定モデルは Claude Opus 4.6 で、拒否されると Kimi K2、Gemini 2.5 Flash へ順にフォールバックする。ビルダー形式で販売されているとみられる。

### Key Discussion Points

- **akersten**: 自動更新型ツールが毎月大量にコードを変更しており、1回の侵害で致命的になる。用途別に PC を分けたくなる。
- **jumploops**: エージェントの黎明期は初期インターネットに似ており、2000年代初頭のようなウイルス蔓延が再来しうる。
- **riskable**: 金持ちから盗み貧乏人は狙わない配慮とも言える。
- **quotemstr**: マルウェア作者も開発者やプロダクトマネージャーであり、同じことをするのは微笑ましい。
- **thisisauserid**: LLM はこの種の評価が得意ではないので好都合。

## 7. [Simple circuits can create complex behaviors](https://aatishb.com/myriad/lets-build-a-brain/)

**Score:** 103 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=50261253)

光センサーニューロンと運動ニューロンをつないだ仮想生物「スパーク」を使った対話型解説。配線を交差させると光に向かい、抑制性結合にすると近づいて止まり、結合強度の違いで光の好みが変わる。恐れや愛のような振る舞いが4つのニューロンと2本の結合から生じ、「行動は神経回路から創発する」と論じる。

### Key Discussion Points

- **rileymat2**: 著者は物理学博士で元 NYT グラフィックス編集者。記事の出来は素晴らしい。
- **tancop**: 単純な振る舞いこそ知性であり、1個のニューロンにもわずかな知性があるのでは。
- **TehCorwiz**: BEAM ロボティクスを思い出す。単純な反応回路による設計思想。
- **georgestrakhov**: ブライテンベルクの『ヴィークル』を薦める。
- **dvh**: Boids も関連する。

## 8. [Casio Watches of the 1980s](https://www.casio.com/us/watches/50th/Heritage/1980s/)

**Score:** 54 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=50317363)

Casio 腕時計50周年企画の1980年代ヘリテージページ。元URLは 403 で取得できず、Wayback のスナップショットもナビゲーションのみで本文がなかったため、タイトルとコメントに基づく要約。コメントでは天体軌道やハレー彗星を表示するモデルが話題になっている。

### Key Discussion Points

- **anyfactor**: 日本製の Casio ヴィンテージや Sony 機器は、適正価格で実用性を極めた存在だった。
- **Liuser**: 惑星軌道とハレー彗星を表示する CGW-50 が魅力的だが、生産終了で二次市場では数千ドルする。
- **kimmk**: 文字盤に「Water resist」「Chrono alarm」などの表記が多すぎるのが残念。
- **jeffreportmill1**: 1985年に、タッチスクリーン式で50件の連絡先を保存でき電卓も使える Casio を持っていたが、ページには載っていない。
- **stkai**: サイトがエラーのとき用にアーカイブを共有している。

## 9. [Jepsen: ParticleDB 1.1.4](https://jepsen.io/analyses/particledb-1.1.4)

**Score:** 18 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=50316100)

Jepsen が ParticleDB 1.1.4〜1.1.18.11.rc-22 を検証し、「Full ACID」という宣伝に反して96件の問題を発見。デッドロック、WHERE 句の誤マッチ、制約無視、削除できない行、書き込み損失、WAL のビット反転によるデータ損失などが含まれる。最新版でも既定の `occ` モードは確定書き込みを失い、Jepsen は利用の停止と他 DB への移行を推奨している。

### Key Discussion Points

- **edude03**: 96件は通常より桁違いに多い。AI 向け DB ということで、バイブコーディングされたのか。
- **Powdering7082**: 「TLA+ で形式証明済み」と宣伝していた点を皮肉る。
- **Thaxll**: 「スロップ DB」と評し、変更前のランディングページを Wayback で示した。

## 10. [A/SIDE – Private photo sharing and encrypted messages](https://a-side.social/)

**Score:** 8 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50317484)

知り合いとだけ写真や近況を共有する非公開 SNS。時系列フィードで広告・AI・アルゴリズムなし、新規チャットはエンドツーエンド暗号化（フィード投稿は非暗号化）。無料は30日分の履歴、Pro は年$20。アプリとサーバーのコードはオープンソースで iPhone / Android 対応。

### Key Discussion Points

- **djoldman**: 開発元は lab1908.com のようだ。
- **enahs-sf**: ネットワーク効果の壁は高いが、スクロール漬けから解放してほしい。
- **virgil_disgr4ce**: ランディングページのセクション余白が大きすぎる。

## Trends

- **AI 周辺のセキュリティ**: ChatGPT のアカウント乗っ取り、LLM を使う VOLTA、AI 向け DB の品質問題など、AI 関連の脆弱性や悪用が目立った。バグ報奨金の安さにも批判が集まった。
- **ソフトウェアの信頼性と更新**: Molly の更新停止、ParticleDB の96件の問題、GCC の最適化など、メンテナンスと正しさがテーマだった。
- **エージェント開発のツール**: Prospero のように軽量なハーネスを自作する流れが続いている。
- **政治と社会**: セルビアの学者議会が最多スコアで、専門性と政治の関係をめぐって議論が分かれた。
