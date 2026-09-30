---
title: "Hacker News トップ10 サマリー（2026-09-30）"
date: "2026-09-30T05:19"
category: "summary"
summary: "OpenAI の常時稼働エージェント Dots、政府AIチャット America.gov、Opus 5.5 のナーフ検証などが話題"
tags: ["hackernews", "AI", "agents", "energy"]
---

## 1. [Dots: Always-on agents](https://openai.com/index/introducing-dots/)

**Score:** 517 | **Comments:** 392 | [Post](https://news.ycombinator.com/item?id=49896604)

OpenAI が発表した常時稼働型エージェント「Dots」。ユーザーに代わってクラウド上で継続的にタスクを実行する製品で、Codex や ChatGPT Work、Muse との位置づけの違いが議論になっている（記事本文は取得できず、コメントと公開情報から要約）。

### Key Discussion Points

- **johnfahey**: Codex の手厚い利用枠で得た好意を、不要な製品乱立と制限強化で失いつつあると批判。
  - **giancarlostoro**: 乗り換えの背景には OpenAI と政府・軍との関係があったと指摘。
  - **sumedh**: 「AI企業はソフトウェアが下手」というが ChatGPT は史上最も成功した製品の一つでは、と反論。
- **aditya_rs**: 常時稼働エージェントは連携先・作業履歴ごと抱え込むため、モデル以上にロックインが強くなると懸念。
  - **vickychijwani**: 陰謀論ではなく顧客関係を囲い込む標準的な企業戦略だと同意。
  - **leokennis**: 政策動向や新譜の定期チェックなど、すでに ChatGPT の定期タスクを活用している。
- **wxw**: Codex・ChatGPT Work・Dots の境界が曖昧で、Muse の方に期待しているという意見。
  - **rolosa**: Muse は $0/$16/$80、Dots は $100/$200/$500 で、想定ユーザーが異なる。
  - **lukebuehler**: Dots は単なるサンドボックス内エージェントではなく、必要時に環境を使う「マネージドエージェント」だと説明。
- **jameslk**: 常時稼働エージェントは PC 時代の終わりを意味し、すべてがクラウドへ移ると予測。
  - **rtpg**: 非技術者もドックや大画面まで揃えて PC を使っている、と疑問視。
  - **devindotcom**: 99% の人はこれらのエージェントが何をするのかすら識別できない。
- **jjcm**: Grok Bot のヘビーユーザーとして、エージェント間協調はコンテキストを圧迫せず専門性を活かせる点が強力だと擁護。
  - **jrflo**: 実際の用途は何か。予約やカレンダーを任せることにはまだ躊躇がある。

## 2. [America.gov](https://america.gov/)

**Score:** 475 | **Comments:** 378 | [Post](https://news.ycombinator.com/item?id=49893509)

米政府が公開したポータルで、AI アシスタントが政府サービスの探し方を案内する（サイトは Cloudflare のチェックで本文取得不可、コメントから要約）。フィッシング対策や手続き案内の改善が期待される一方、回答の信頼性や政治的な検閲が論点になっている。

### Key Discussion Points

- **wyrdcurt**: 1月6日事件について聞くと「歴史の要約サービスではない」と拒否する一方、初代大統領の質問には答えると指摘。
  - **alightsoul**: 中国のモデルに天安門事件を聞いたときと同じだ、と指摘。
  - **jimbokun**: 「天安門的なやり口」だと批判。
- **maherbeg**: 批判が多いが、どこで手続きすべきか分かりにくくフィッシングも多いので、大局的には良いアイデア。
  - **gthrow12345**: 利用者がチャットボットの出力を権威あるものと受け取り、誤りや見落としで誤導される恐れがある。
  - **sippingabonedry**: 実際に質問して有益な回答が得られた。
  - **why_at**: ChatGPT に聞くのと何が違うのか分からない。
- **VoidWhisperer**: プライバシー保護の指紋アイコンがクリックしても消えず、文章を読む邪魔になるというUIの不満。
  - **rlandesman**: 気の利いたUX演出の機会を逃している。
  - **corvad**: モバイルではスキャンのアニメーションと緑のチェックが出る。
- **asveikau**: 「what is love?」に答えられず、「baby don't hurt me」には歌詞の話はしないと返されたと皮肉。
- **sssilver**: Google が技術パートナーとして Gemini を提供しているとするブログを紹介。
  - **manlymuppet**: Elon Musk は Grok だと発言している。
  - **quasarj**: モデルは自分の正体を頑なに明かさなかった。

## 3. [Livenerf: Has Opus 5.5 been nerfed yet?](https://github.com/ninjahawk/livenerf)

**Score:** 399 | **Comments:** 159 | [Post](https://news.ycombinator.com/item?id=49901736)

リリース後のモデル能力の推移を追跡するベンチマーク「Livenerf」。Opus 5.5 が公開後に劣化（ナーフ）されていないかを継続的に測定する（GitHub ページの本文は取得できず、タイトルとコメントから要約）。

### Key Discussion Points

- **jug**: 同種の Nerf Bench（bridgebench）は公開初日を基準に 10% 以上の乖離を変化と見なし、Opus 4.6 の劣化を検出した実績がある。
  - **comboy**: API では劣化を感じたことがなく、サブスクリプション経由の CLI だけだと指摘。
  - **user3939382**: 毎日同じプロンプトを回してトークン数と週次クォータの消費を測定し、クォータ側が A/B テストされていると主張。
  - **avazhi**: 3日前のデータでは役に立たない。
- **johnfn**: ナーフはほとんどの報告事例では実在せず、体感は認知バイアスで説明できると主張。
  - **prodigycorp**: Anthropic は過去に劣化を認めており、推論バグや計算資源の移動もある。
  - **gobdovan**: 実在するのは「ナーフ」ではなくポストモーテムで報告されたインシデントだ、という整理。
- **sheepscreek**: 毎日10万件規模の細かな変更が積み重なり、一時的な局所的劣化は十分起こりうる。
- **nico**: Sonnet 5.5 発表直後から Codex が許可を求める頻度が増え、作業速度が落ちたという体験談。
  - **jacquesm**: ChatGPT は速度を調整することがあり、意図的なものではないか。
  - **mlh496**: 許可を求める分類器の変更が原因ではないか。
- **kingcauchy**: GPU の負荷状況で品質が変わる証拠（Google 翻訳の時間帯差）があり、測定にはそれを考慮すべき。

## 4. [U.S. postal inspectors shut down website selling counterfeit postage labels](https://postalemployeenetwork.com/news/2026/09/26/u-s-postal-inspectors-shut-down-website-selling-millions-of-counterfeit-postage-labels/)

**Score:** 199 | **Comments:** 118 | [Post](https://news.ycombinator.com/item?id=49899090)

米国郵政検査局が、偽造郵便ラベルを数百万枚規模で販売していたサイトを閉鎖した。偽ラベルを使った配送詐欺は今年になって急増しており、被疑者は起訴されたが逮捕には至っていないとされる（ページ本文の取得は不十分で、タイトルとコメントから要約）。

### Key Discussion Points

- **zucked**: eBay の出品者から購入した際、元の追跡番号に「偽造郵便のため押収」と表示され、新しい追跡番号を送られた経験を共有。
  - **neilv**: 不審な切手が非公式な通貨のように使われていた例。
  - **landr0id**: ラベルの仕組みが分からず、USPS の報告書も黒塗りが多い。
  - **cjbgkagh**: 出品者は内部の協力者に否定的レビューを消させている、と推測。
- **joshmn**: 服役中、切手が通貨として使われていた。郵政検査局が違法だと通達に来たという体験談。
  - **saalweachter**: 切手が硬貨の代用にされた歴史を連想。
  - **JLO64**: 郵便趣味の立場から、通貨としての利用が今も多いことに驚き。
- **codazoda**: 手描きの偽造切手で配達された美術学生の逸話。
  - **DANmode**: 後に通貨偽造犯になった人物がいると補足。
- **A_D_E_P_T**: 被疑者はパキスタン人で起訴のみ、まだ自由の身のはず。
  - **bluGill**: 多くの国は証拠が示されれば逮捕して引き渡す。
- **HarHarVeryFunny**: USPS は偽ラベルの荷物を配達したのか、検証機構はないのかと疑問。
  - **stackskipton**: 返送の手間より配達してしまう方が楽な場合がある。
  - **zucked**: 検証は指定の入国ポートでのスキャンのみで、最初のスキャンを回避して流入している可能性。
  - **tecleandor**: 不正対策の実務経験から、完全な偽造・古い追跡番号の再利用などスキームは多様。

## 5. [Show HN: Real-time Solar System with 526k asteroids and all tracked satellites](https://space.bl2.net/)

**Score:** 172 | **Comments:** 39 | [Post](https://news.ycombinator.com/item?id=49898778)

ブラウザ上で実スケールの太陽系を表示するサイト。CelesTrak の衛星 TLE（SGP4）、JPL SBDB の小惑星・彗星、JPL Horizons の探査機位置を毎日更新し、WebGL2 と Web Worker で描画・軌道計算を行う。

### Key Discussion Points

- **sebmellen**: 自分の名前の小惑星（31689 Sebmellen）が見当たらないという報告。
- **wanick**（作者）: データ元と技術構成を説明。
  - **ddahlen**: 元NASA望遠鏡向け小惑星位置計算の経験者で、軌道伝播ライブラリ kete と自作の小惑星ビューアを紹介。
  - **____tom____**: 実スケールなら衛星は見えないはずで、拡大表示ではないかと指摘。
  - **boxed**: マウスホイールより速いズーム手段が欲しい。
- **climech**: Europa Clipper がもうすぐ地球をフライバイするのが見られて面白い。
- **r0b05**: Starlink をはじめ衛星の多さに驚いた。
- **tintor**: Celestia が10年以上前に同じことをしていたという指摘。
  - **bbor**: 新しい組み合わせで、盗用扱いする必要はないと反論。

## 6. [Vermont replacing power plants with home batteries](https://www.bbc.com/future/article/20260928-a-virtual-power-plant-hidden-in-vermont-homes-is-keeping-the-lights-on-during-storms)

**Score:** 134 | **Comments:** 113 | [Post](https://news.ycombinator.com/item?id=49897993)

バーモント州で、家庭用蓄電池を束ねた仮想発電所（VPP）が嵐の停電時にも電力を支えているという記事。BBC は取得不可のためコメントから要約。

### Key Discussion Points

- **hettygreen**: Electrek の記事によると、月55ドルで Powerwall 2台を提供され、電力を共有する量に応じて料金が下がる仕組み。
- **autoexec**: 蓄電池に数千ドルを負担させるのは、公益事業者がコストを消費者に転嫁する仕組みにも見え、むしろ事業者が利用者に支払うべきだと批判。
- **krschultz**: 参加しようとしたが、蓄電池と窓・扉の離隔を求める建築基準が壁の間取り的に満たせなかった。
- **whartung**: カリフォルニアでも同様の勧誘があり、Tesla 蓄電池を大規模グリッドに登録できる。
- **ww520**: DER（分散型エネルギー資源）の一種で、家庭用の UPS のようなものだと説明。

## 7. [NASA asked several former SR-71A staffers to help secret restart](https://aviationweek.com/defense/aircraft-propulsion/nasa-asked-several-former-sr-71a-staffers-help-secret-restart)

**Score:** 94 | **Comments:** 93 | [Post](https://news.ycombinator.com/item?id=49890733)

NASA が SR-71A の元スタッフに協力を求め、非公表でブラックバードの再稼働を検討していたという Aviation Week の報道。2007年に予備部品が廃棄済みで、燃料や空中給油機の改修も課題とされる（本文は取得できずコメントから要約）。

### Key Discussion Points

- **walrus01**: SR-71 を超える無人機がすでに夜間に飛んでいても不思議ではないと推測。
- **buildsjets**: NASA 長官の方針はパイロットを危険にさらすと懸念。
- **Centigonal**: 空母のスチームカタパルトの件と同様、60年前の技術に戻る発想に疑問。
- **justin66**: 6億ドル相当の予備部品が2007年に破壊されている点を引用。
- **cjbgkagh**: 高価で無意味な虚栄プロジェクトになりかねず、誰も断れない構造ではと批判。

## 8. [PSSA: A non-transformer language model written from scratch in Rust](https://github.com/Sparticle62ops/pssa)

**Score:** 39 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=49903993)

Rust でゼロから実装された、非 Transformer 系の言語モデル（GitHub リポジトリ、本文は未取得でタイトルとコメントから要約）。

### Key Discussion Points

- **a19486**: 「in Rust」は HN 向けのクリックベイトだと批判。
- **janalsncm**: PyTorch で実装し、Colab で Transformer と大きなデータセットで比較すべきだと助言。
- **kasumispencer2**: RNN とほぼ同じで新規性が乏しいのでは。
- **mllev15**: アイデア自体が AI 生成だと分かる。
- **purple-leafy**: 「in Rust」というタイトルの型が嫌いだが、Rust自体に問題はない。

## 9. [LinkedIn Larpmaxxing](https://hereticpleb.vercel.app/blog/linkedin-larpmaxxing/)

**Score:** 16 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=49904314)

LinkedIn の投稿文化の演技性（LARP）を風刺するブログ記事（本文は未取得、コメントから推測）。

### Key Discussion Points

- **shrubby**: サンドボックス、SSO、MFA を経てもなお消耗するプラットフォームだと述べる。
- **jmathai**: Instagram よりも演出的な場だと指摘。
- **flarg**: 元同僚や競合の動向を知る唯一の場として、代替がないため必要と擁護。
- **steve_j_choi**: ベンチマークのように飽和してしまったと皮肉。
- **nicebyte**: 4chan の方がずっと元気が出ると評した。

## 10. [Responsible Release of AI-Generated Mathematics](https://agmai.org/general-sep29/)

**Score:** 14 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=49903713)

AI が生成した数学的成果を責任をもって公開する方法についての声明。閉鎖的なモデルで高度な数学問題を試すことを控えるよう求める内容がコメントから読み取れる（本文は未取得）。

### Key Discussion Points

- **unddoch**: 有名な予想は数学コミュニティの注目が生んだ社会的構築物であり、数学者抜きでは問題の存在や重要性自体が失われかねないと警告。
- **throwaway713**: 数や記号はプラトン的世界にあり、誰が扱うかを制限する要請は空気の吸い方を制限するようなものだと反発。

## Trends

- **AI エージェントとモデル品質への関心**: Dots、Livenerf、PSSA、AI数学など、半数近くが AI 関連。特に囲い込み（ロックイン）と、リリース後の性能劣化への不信が共通する。
- **政府・公共分野への AI 導入**: America.gov の回答制限や、郵便詐欺、SR-71 再稼働など、公共機関の運用や透明性が問われている。
- **エネルギーインフラ**: Vermont の家庭用蓄電池 VPP は、分散型電源の普及と費用負担の公平性という論点を提示した。
- **可視化・個人開発**: 太陽系ビューアのように、ブラウザで公開データを扱う個人プロジェクトは高評価を得やすい。
