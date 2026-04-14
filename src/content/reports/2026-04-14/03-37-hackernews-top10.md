---
title: "Hacker News トップ10 サマリー（2026年4月14日）"
date: "2026-04-14T03:37"
category: "summary"
summary: "WordPressプラグインへのバックドア攻撃、GitHub Stacked PR正式公開、Polymarket逆張りボットなど注目トピック10選"
tags: ["hackernews", "security", "opensource", "github", "prediction-markets", "firefox", "formal-verification"]
---

## 1. [Someone bought 30 WordPress plugins and planted a backdoor in all of them](https://anchor.host/someone-bought-30-wordpress-plugins-and-planted-a-backdoor-in-all-of-them/)

**Score:** 746 | **Comments:** 213 | [Post](https://news.ycombinator.com/item?id=47755629)

2025年初頭に悪意ある第三者がFlippaマーケットプレイスを通じて「Essential Plugin」ビジネス（30以上のWordPressプラグイン、数十万件のインストール）を6桁の金額で購入。バージョン2.6.7にPHPデシリアライゼーションバックドアを埋め込み、8ヶ月間休眠させた後、2026年4月にSEOスパムの注入目的で起動させた。WordPress.orgは影響を受けた31のプラグインを永久閉鎖したが、「WordPress.orgにはプラグイン所有権の移転をフラグ付けまたはレビューする仕組みがない」という根本的な脆弱性が露呈した。

### Key Discussion Points

- **chromacity**: AI脅威より仮想通貨の方がインフォセック専門家が心配すべき問題だ。仮想通貨がハッキングを産業化し、サプライチェーンや従業員侵害を10億ドル規模のビジネスにしている。
  - **KronisLV**: 開発者がバグのないソフトウェアを書けるという主張に異議。フロントエンドフレームワークからインフラまで全レイヤーにバグが存在し、「バグフリーコードはほぼ神話」だ。
  - **Shank**: 国家組織や資金力のある攻撃者は管理者アクセスを持つ従業員を金銭で籠絡できる。LAPSUS$は「まったく理論的ではない」現実の事例だ。
- **latentframe**: これはセキュリティバグ以上のインセンティブ問題。「信頼を購入できる」という構造的問題がある。
- **bradley13**: `npm install`で開発者も把握していない数十のライブラリがダウンロードされる。サプライチェーン攻撃の確認はほぼゼロだ。
  - **tmoertel**: 外部パッケージ依存を最小化し標準ライブラリのみを使用することでセキュリティリスクを大幅に削減できる。
- **toniantunovi**: WordPressのエコシステムは多数の小さなプラグインのインストールを促進する。実績あるプラグインを買収することで攻撃者は蓄積された信頼を悪用できる。更新通知が暗黙の信頼シグナルになっており、ユーザーは作者の変更を検証せずに更新を受け入れる。
  - **stratts**: ウェブサイトに無料プラグインが大量インストールされているのは、ユーザーがソフトウェアへの支払いを嫌うから。管理画面が「IE6ツールバー」状態になっている。
- **spankalee**: 中止されたFAIRパッケージマネージャーへの惜しむ声。atprotoモデルに基づく分散アーキテクチャで誰でもリポジトリを運営でき、Socketなど独立したラベラーによるセキュリティ分析も可能だった。
  - **rmccue**: プロジェクトを諦めたわけではなく、技術的な部分に注力しTypo3コミュニティとの実装を進めている。

---

## 2. [GitHub Stacked PRs](https://github.github.com/gh-stack/)

**Score:** 489 | **Comments:** 270 | [Post](https://news.ycombinator.com/item?id=47757495)

GitHub Stacked PRsは大きなコード変更をスタック形式の小さなPRに分割できるツール。各PRが前のPRの上に構築され、独立したレビューと一括マージが可能になる。「大きなPRはレビューが困難で、マージが遅く、競合が起きやすい」という問題を解決し、PhabricatorやGerritで慣れ親しんだスタックdiffのワークフローをGitHub上で実現する。

### Key Discussion Points

- **adamwk**: PhabricatorとMercurialを使っていた頃と比べ、GitHubとGitは「石器時代に戻るようだ」。これとJujutsuでPhabricatorのスタックdiffフローが再現できることを期待している。
  - **smallmancontrov**: GitがMercurialに勝ったことを嬉しく思う。速度の主張が実際には実現しなかったMercurialより、GitはFast and Reliable。
- **jenadine**: スタックPR機能より、既存コミットを個別にマージしたりインタラクティブリベースをUI上で行えるようGitHubのUI自体を改善してほしい。
  - **tcoff91**: スタックdiffはPhabricatorのワークフローをGitHubに持ち込むもので、マージ前の依存変更を扱う際に特に有用。React Nativeのモノレポアップグレードのような大規模変更を分割レビューできる。
- **bsimpson**: 「やっと！PR=ブランチモデルは理解できなかった。Phabricator/Gerritのスタックコミットの方がずっと自分の思考モデルに合っている」
  - **ezekg**: GitHub CLIへの依存が懸念点。UIサポートが追加されることを期待している。
- **akersten**: PR BがPR Aを対象にする場合、マージ順序が崩れるとGitHubが自動でターゲットブランチを変更し競合が大量発生する。Gitエキスパートでない開発者には辛い。
  - **sameenkarim**: `git rebase --onto`でスカッシュマージ後の依存ブランチ競合を解決できる具体的なワークフローを解説。
- **sbinnee**: これはAIがトリアージタスクとして使う機能では。大きなPRをAIがレビューしスタックPRに分割する用途には合うが、人間開発者が使うかは疑問。

---

## 3. [Lean proved this program correct; then I found a bug](https://kirancodes.me/posts/log-who-watches-the-watchers.html)

**Score:** 129 | **Comments:** 70 | [Post](https://news.ycombinator.com/item?id=47759709)

Leanの定理証明器で形式検証されたzlib実装をClaude Agentでファジングしたところ、1億500万回のテスト実行で検証済みコードには一切バグが見つからなかった。しかしLeanランタイム自体にヒープバッファオーバーフローを、未検証のアーカイブパーサーにDoS脆弱性を発見。「検証は尋ねた質問の質と信頼した基盤の強さにしか過ぎない」という教訓が得られた。

### Key Discussion Points

- **ctmnt**: 著者は証明済みコードにバグを見つけていない。発見されたバグはすべて証明範囲の外（C++ランタイムや未検証パーサー）にあり、タイトルの誤解を招く表現を指摘。
- **porcoda**: 仕様自体が誤っていれば、その仕様に適合するコードを書いても意図しない動作をする。証明アシスタントへの過信がAIの正確性への誤った自信を生む恐れがある。
- **ajaystream**: 仕様完全性の問題は分散システム検証でも同様。証明は想定動作領域内では成立するが、境界で興味深い失敗が起きる。
- **youknownothing**: バグゼロのプログラムを証明することはできない。検証プロセス自体にエラーが含まれる可能性があり、完全な確実性は不可能に漸近する。
- **Animats**: 圧縮/解凍は正確性証明に最適な問題。仕様が非常にシンプル（入れたものをそのまま返す）なのに、なぜストレージアロケータは検証されないのかと疑問を呈する。

---

## 4. [DaVinci Resolve releases Photo Editor](https://www.blackmagicdesign.com/products/davinciresolve/photo)

**Score:** 33 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=47760529)

Blackmagic DesignがDaVinci Resolveにプロレベルの写真編集モジュールを追加。プライマリカラーコレクション、カーブ、クオリファイア、Power Windowsなどの映像グレーディングツールを静止画に適用できる。Magic Mask、Relight FX、顔調整AIツール、100以上のGPUアクセラレーション効果を搭載し、主要カメラメーカーのRAWフォーマットをネイティブサポート。

### Key Discussion Points

- **mturilin**: 長年Linuxでの写真管理方法を探していたので嬉しい。Adobeのサブスクリプションを避けて利用できる本格的な選択肢として期待。
- **dcliu**: 「DaVinci Resolveは素晴らしいコスパ。Capture OneやLightroomの対抗馬になることを期待している」
- **amanzi**: Linux上でも完全サポートされることを願っている。
- **pier25**: Resolveプロジェクトを読み込まずに単独アプリとして使えればよかった。
- **__mharrison__**: 「DaVinci Resolve Studioは素晴らしい。文字起こし編集で1時間の動画を2時間で仕上げられる」

---

## 5. [WiiFin – Jellyfin Client for Nintendo Wii](https://github.com/fabienmillet/WiiFin)

**Score:** 78 | **Comments:** 29 | [Post](https://news.ycombinator.com/item?id=47759341)

WiiFinはNintendo Wii向けのJellyfin実験的ホームブリュークライアント。ライブラリ閲覧、動画・音楽再生、QuickConnectによるユーザー認証、再生進捗追跡をサポートし、C++で実装されている。既知の制限はあるものの動作するプロジェクトとして開発が続いている。

### Key Discussion Points

- **shrinks99**: TrueNASアプリカタログでJellyfinがPlex（42,225インストール）を抜いて1位（45,178インストール）になっていたことに気づいた。このプロジェクトはJellyfin周辺エコシステムの成長を裏付けている。
- **sbinnee**: 「開発者はどこかに放置されたWii本体があって有効活用しようとしたのだと思う。自分のPS2でも何かできないか」
- **nout**: JellyfinはTizen OS搭載のSamsung TVにもインストールでき、長年安定して動作している。

---

## 6. [Design and implementation of DuckDB internals](https://duckdb.org/library/design-and-implementation-of-duckdb-internals/)

**Score:** 38 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=47718284)

テュービンゲン大学のTorsten Grust教授による15週間の学部課程で、DuckDBを実践的な教材としてデータベースシステムの内部構造を学ぶカリキュラム。メモリ管理、グループ化集約、インデックス、クエリ実行、ベクトル化、最適化などを現代的な分析データベースシステムの実装を通じて探求する。

### Key Discussion Points

- **viccis**: 「コンテンツが空ではないですか？何か見落としているでしょうか？」（DuckDBのライブラリページへのリンクが正しいか確認が必要との指摘）

---

## 7. [Nothing Ever Happens: Polymarket bot that always buys No on non-sports markets](https://github.com/sterlingcrispin/nothing-ever-happens)

**Score:** 370 | **Comments:** 192 | [Post](https://news.ycombinator.com/item?id=47753472)

PolymarketでYes/No予測市場の「No」ポジションを自動的に特定・購入する非同期Pythonボット。特定の価格閾値以下の市場をスキャンしてオープンポジションを追跡し、ダッシュボードで監視できる。73%のPolymarket予測がNoに解決するという統計的根拠に基づき、全3条件（`BOT_MODE=live`、`LIVE_TRADING_ENABLED=true`、`DRY_RUN=false`）を満たさない限りペーパートレードモードで動作する。

### Key Discussion Points

- **tekno45**: リターンは保証していないが、詐欺的ではなくユーモアあるメームに基づいたプロジェクト。
  - **sterlingcrispin**: リスク管理がなく「実質的にメーム」であることを認める。HuggingFaceにPolymarketデータセットがあり、データサイエンス分析に利用できると紹介。
- **slg**: 「スポーツ市場を対象外にしているのが面白い。スポーツ賭博でも低め（アンダー）を賭けるのが勝ち戦略とされており、原理的に非スポーツ市場と変わらないはず」
  - **sterlingcrispin**: スポーツ質問でもバックエンドでYes/Noの仕組みが使われているものがあるが、構造上の違いから除外している。
- **cordwainersmith**: 「逆張り賭けは面白いが、実際の数ヶ月のP&L実績が見たい。予測市場はドラマチックな結果を高値設定する傾向があるが、検証データが必要」
  - **traderj0e**: バックテストで成功した戦略の多くが解決タイミングの事前知識を前提としており、現実的でなかった。少数の損失が多数の利益を相殺するため十分な取引量も必要。
- **wormpilled**: 「人間の想像力を裁定取引しているようなもの。興奮を誘う市場ほど現実では起こりにくい。現実はたいていつまらない」
  - **suzzer99**: 人々はCOVIDや金融危機のような大きな混乱の確率を事前に過小評価し、起きてから過剰修正する。AI雇用への影響を「急性ショックではなく緩やかな死」として警戒している。
- **sambaumann**: 予測市場のマイクロストラクチャーに関する研究リンクを共有。

---

## 8. [How to make Firefox builds 17% faster](https://blog.farre.se/posts/2026/04/10/caching-webidl-codegen/)

**Score:** 142 | **Comments:** 23 | [Post](https://news.ycombinator.com/item?id=47756321)

buildcacheをカスタムLuaラッパー経由でFirefoxのWebIDLバインディングコード生成ステップのコマンドラッパーとして設定することで、決定論的な出力を持つPythonコードジェネレーションステップをキャッシュ化。入力をハッシュしてキャッシュを確認するため、ウォームキャッシュのリビルド時間が約3分21秒（ccacheのみ）から1分12秒へと大幅に短縮された。

### Key Discussion Points

- **mmastrac**: 「buildcacheはRust proc-macrosをキャッシュできますか？sccacheで苦労しており、next.js CIのために10パッチ深いスタックを管理している」
- **evmar**: 「クロビルドがなぜ一般的なのか理解できない。ビルドシステムにキャッシュを追加するよりビルドシステム自体を修正する方が根本解決では？」
- **allenrb**: 「'コードを17%削除する'という選択肢は？（冗談）」
- **K0IN**: 「17%は印象的。これを別プロジェクトとしてビルドしてWebIDLファイルを依存関係として取得することも可能では？」
- **Devorlon**: 「ccacheがあるのにコードをコンパイルする必要があるのか」というユーモラスな疑問。

---

## 9. [Write less code, be more responsible](https://blog.orhun.dev/code-responsibly/)

**Score:** 43 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=47728970)

AI支援プログラミングはツールであり、責任ある使い方が求められる。退屈なタスクはAIに任せ、興味深い部分は手動で行うという個人的なバランスを見つけ、すべてのコードを徹底的にレビューすることが重要。「バイブコーディング」プロジェクトを適切な責任なしにリリースすることへの警鐘を鳴らし、ツールに関わらず高品質なソフトウェアへのコミットメントを維持することを訴えている。

### Key Discussion Points

- **chillaranand**: 「内部ツールや他のプロジェクトでコードを最小化し、設定のみのツールを使うようになった。コードの代わりに設定で対処できる場面は多い」
- **agentultra**: raylib/C言語で一人で小さなゲームを週数時間開発中。「コードを書くこと自体はソフトウェア開発のボトルネックではなくなって久しい。過剰なコードは経済的に非効率だ」
- **stratts**: 「動機があれば大量の粗悪なコードはAI以前から書けた。AIはコーディングを容易にするが品質問題は解消されない。スマホからコーディングできる利便性は過小評価されている」
- **qudat**: 変更の検証に重点を置いた類似の投稿へのリンクを共有。

---

## 10. [US appeals court declares 158-year-old home distilling ban unconstitutional](https://nypost.com/2026/04/11/us-news/us-appeals-court-declares-158-year-old-home-distilling-ban-unconstitutional/)

**Score:** 324 | **Comments:** 237 | [Post](https://news.ycombinator.com/item?id=47751781)

米国連邦控訴裁判所が158年の歴史を持つ家庭での蒸留禁止法を違憲と宣言した。判決では政府の論理を採用すれば「議会が自宅での行動をほぼ何でも犯罪化できる」とEdith Jones判事が指摘しており、個人の自由と連邦規制権限の境界線を巡る重要な判例となった。

### Key Discussion Points

- **bsimpson**: 「次はGonzales v. Raichを取り上げてほしい。最高裁が自家栽培マリファナでも州間通商条項で規制できると判断した件で、今回の判決と矛盾する」
  - **tdb7893**: 幅広い政治的支持があり、10年以内に連邦レベルでの大麻合法化を予測。保守派の間にも大麻利用者が増えており「臨界点」に達している。
- **ryandamm**: 「家庭での蒸留によるメタノール中毒は通常は変性アルコールの販売が原因であり、穀物発酵ではメタノールはほとんど生成されない。主な危険は火事リスクだ」
  - **delichon**: 祖父が毎晩シュナップスを「薬」として飲んでいた話。「予防的解毒剤として飲んでいたのかもしれない。一度もメタノール中毒にならなかった」
- **semiquaver**: 「政府の論理では議会が自宅での行動をほぼ何でも犯罪化できる」とJones判事が指摘。Wickard v. Filburnの判例との矛盾も疑問視。
  - **Joker_vD**: 「自宅外での行為のみが犯罪であるべき——自宅で人を殺してもお咎めなし」というユーモラスな誤読を披露。
- **andrewmg**: 第5巡回区の意見書は商業条項（WickardおよびRaich）を扱っていない。政府がその主張を放棄したため。第6巡回区に係争中の別の案件でその問題が提起されている。
- **jcims**: COVID初期にアルコール製造設備を組み立て、熱電対・ロードセルとNode-REDでラズパイ上にオートメーションを構築した経験を共有。

---

## Trends

今日のHacker Newsトップ10から見えてくる主なテーマと傾向：

1. **サプライチェーンセキュリティへの高い関心**: WordPressプラグイン事件（スコア746）はオープンソースエコシステムにおける「信頼の購入」問題を鮮明にした。プラグイン所有権移転の検証機能がないことが根本原因であり、npmやPyPIなど他のパッケージマネージャーにも同様の脆弱性が存在すると議論が広がった。

2. **開発ワークフローの進化**: GitHub Stacked PRs（スコア489）とFirefoxビルド最適化（スコア142）は、大規模プロジェクトにおける開発者体験の改善への強い需要を示す。PhabricatorやGerrit出身の開発者からの「ようやく」という声が目立ち、コードレビュー文化の成熟が感じられる。

3. **形式検証の限界と可能性**: Lean証明器の事例（スコア129）は、形式検証が証明範囲内では有効でも仕様の完全性や信頼できるランタイムへの依存が必要という現実を示した。AI時代におけるソフトウェア信頼性の基盤に関する深い議論を引き起こした。

4. **AIとコーディング責任論**: 「Write less code」（スコア43）はAI支援開発に対する反省的な視点を提供。AI前から大量の粗悪なコードは書けたという意見と、AI加速による品質低下リスクのバランスをどう取るかの議論が展開された。

5. **予測市場の合理性への懐疑**: Polymarket逆張りボット（スコア370）が73%のNo解決率というデータを背景に注目を集め、「現実はたいていつまらない」という認知バイアス論から実際のバックテスト結果まで幅広い議論を呼んだ。

6. **ホームブリュー・DIY文化**: WiiFinとホーム蒸留判決は、個人が自宅でできることの範囲を広げようとする文化的・法的な動きを象徴。古いハードウェアの再利用と個人の自由への関心が共通するテーマとして浮かび上がった。
