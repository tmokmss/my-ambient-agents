---
title: "Hacker News トップ10ダイジェスト（2026年4月23日）"
date: "2026-04-23T14:08"
category: "summary"
summary: "通信会社経由の位置情報追跡、Appleの削除済みメッセージ漏洩バグ修正、Tor匿名性を破るFirefox識別子など注目トピック10選"
tags: ["hackernews", "security", "privacy", "cloud", "sqlite", "zig", "agriculture"]
---

## 1. [Surveillance vendors caught abusing access to telcos to track people's locations](https://techcrunch.com/2026/04/23/surveillance-vendors-caught-abusing-access-to-telcos-to-track-peoples-phone-locations-researchers-say/)

**Score:** 174 | **Comments:** 49 | [Post](https://news.ycombinator.com/item?id=47874814)

Citizen Labの研究者が、監視ベンダー2社がSS7・Diameterプロトコルを悪用し、偽の通信事業者として携帯電話ネットワークへのアクセスを乱用して個人の位置情報を追跡していたことを発見した。研究者のGary Millerは「イスラエルを拠点とする商業的な地理情報プロバイダー」の関与を示唆しており、NSO Groupに買収されたCircles、Cognyte、Rayzone等のイスラエル企業が候補として挙げられている。これは「世界中で数百万件の攻撃が行われているうちの2件に過ぎない」と指摘されている。

### Key Discussion Points

- **DrewADesign**: かつて911ディスパッチャー研修を受けた際、緊急時でも宣誓書を提出してテレコ法務部の承認を数時間待つ必要があった。その一方で企業が利益目的で自由に位置情報を取得できるのは「明らかにおかしい」
- **aetherspawn**: 元交際相手のストーカーがテレコ勤務者で、新しいSIMや端末を購入しても追跡を止められなかった個人的な被害体験を共有。被害を警察に報告しても「非合理的に聞こえる」として無視された
  - **therobots927**: SIMの位置情報ペアから新旧端末の相関が取れるため、新しい自宅や職場に完全に移転しない限り回避は事実上不可能と解説
- **Anonyneko**: ロシアではこれが常態化しており、テレコが収集した位置情報が闇市場で販売されている。当局も反政府ジャーナリストの調査に使われることを懸念して規制しようとしているが成果は不明
- **mentalgear**: 記事より、イスラエル系企業への手がかりとして研究者がCognyte・Rayzone等を挙げていると引用

---

## 2. [Sneaky spam in conversational replies to blog posts](https://shkspr.mobi/blog/2026/04/sneaky-spam-in-conversational-replies-to-blog-posts/)

**Score:** 54 | **Comments:** 25 | [Post](https://news.ycombinator.com/item?id=47874631)

Terence Edenが発見したスパム手法：3つのコメントが同一IPから3分間隔で投稿され、中間のコメントにはプロトコル部分（`https://`）を省いたカジノリンクが埋め込まれていた。コメント内容はAI生成特有の「もっともらしいが薄い」文体で、位置情報トラッキングに関する話題を装っていた。技術的なフィルターはスパマーの回避策開発を促進するだけで、正規ユーザーへの障壁になるとEdenは主張している。

### Key Discussion Points

- **hrunt**: 投資系YouTubeチャンネルでも数年前から同様のボットパターンが横行している。ボットが疑似会話を演じ、特定の投資商品を誘導するコメント群を作成する
- **keiferski**: ブログが普及した25年前から存在する手法で、かつてはWordPressユーザーの間でSEO戦術として「公認」されていた時期もあった
- **xyzal**: テキスト生成コストが下がった今、この問題は今後さらに悪化する。モダンな議論の場を維持するには本人確認以外の解決策が見当たらない

---

## 3. [Show HN: Honker – Postgres NOTIFY/LISTEN Semantics for SQLite](https://github.com/russellromney/honker)

**Score:** 73 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=47874647)

HonkerはSQLite向けにPostgreSQLスタイルの`NOTIFY`/`LISTEN`機能を追加するライブラリで、RedisのようなブローカーなしにPub/Sub・タスクキュー・イベントストリームを実現する。WALファイルへの`stat(2)`監視でポーリングを軽量化し、シングルミリ秒台のレイテンシを達成。ビジネスロジックとキューへのエンキューが同一トランザクションでアトミックにコミット・ロールバックできるのが特長。

### Key Discussion Points

- **russellthehippo**（作者）: WALファイルの変更を監視することでクロスプロセス通知を実現。エフェメラルPub/Sub・デッドレター付き永続ワークキュー・コンシューマーオフセット付きイベントストリームの3種を提供する
- **PunchyHamster**: 同一マシン上のプロセスなら既存のIPCを使う方が速いのでは？SQLiteが必要なのは永続化部分だけのように思える
- **Retr0id**: WAL変更の監視にポーリングでなく`inotify`を使えば、クロスプラットフォームラッパー経由でより効率的にできるのでは

---

## 4. [I am building a cloud](https://crawshaw.io/blog/building-a-cloud)

**Score:** 606 | **Comments:** 309 | [Post](https://news.ycombinator.com/item?id=47872324)

Tailscaleの共同創業者David Crawshawが新クラウド基盤「exe.dev」を構築中。既存クラウドがVM・リモートストレージという制約だらけの抽象化でコストを最大化する構造に不満を持ち、生のCPU・メモリ・ローカルNVMeを提供するクラウドを一から設計している。AIエージェントの台頭でソフトウェア量が爆増する時代に、クラウドインフラを「最初から楽しく使える」形で再定義しようとしている。

### Key Discussion Points

- **dajonker**: Kubernetesは「豚に口紅を塗る」ようなもの。実際にk8sを捨て、Debian+Kamalで単一VMに移行したら費用は激減、安定性は最高になった。「単一VMで十分」であることを強調
  - **faangguyindia**: HetznerとDigitalOceanの格安プランを実測比較。順次書き込みはHetzner 1.9 GB/s vs DO 850 MB/sで大差。価格はHetzner 4ユーロ、DO $18
  - **torginus**: クラウドが意図的にIOPSを制限してマイクロサービスアーキテクチャとS3等のプロプライエタリストレージへの依存を誘導しているのではと疑問
- **stingraycharles**: 著者がTailscale共同創業者であることを背景として提示しつつ、成長とともに理想が利益に屈していくという業界の典型パターンを懸念
- **clktmr**: AIエージェントでコードが増え続けるが、誰も使わないアプリがAppStoreに既に溢れている。LLMはコード量増加より品質向上に使うべきでは
- **sahil-shubham**: Hetznerサーバー1台にFirecrackerオーケストレーターを自作して月$100で完結。メモリスナップショット機能でブラウザサンドボックス・プレビュー環境・エージェント実行を効率化

---

## 5. [Alberta startup sells no-tech tractors for half price](https://wheelfront.com/this-alberta-startup-sells-no-tech-tractors-for-half-price/)

**Score:** 1916 | **Comments:** 640 | [Post](https://news.ycombinator.com/item?id=47865868)

カナダ・アルバータ州のスタートアップUrsa Agが、1990年代製Cumminsディーゼルエンジンを再製造した「ノーテクトラクター」をJohn Deere同等機の半額（$95,000〜$146,000）で販売している。電子制御・プロプライエタリソフトウェアを排した機械式燃料噴射システムにより、農家が自分自身でメンテナンス可能。John Deereの修理権（Right-to-Repair）問題に対する直接的な回答として注目を集めている。

### Key Discussion Points

- **adamcharnock**: 1970年代製Massey Ferguson 135を愛用していた体験を共有。鍵を忘れたらダッシュボードの裏でホットワイヤリング、燃料ゲージが壊れていても走れる素朴な機械の良さを語る
- **Hasz**: テクノロジー自体は悪くない、問題はロックインと選択肢のなさ。オープンなエコシステムを提供するOEMが市場に入るべき
  - **MisterTea**: ノーテクトラクターはオープンソース実験の土台になり得る。タブレットを搭載してWiFi経由でGPS最適化ソフトを自作したり、農場全体を地元サーバーで管理したりできる
  - **whizzter**: Arduino・Raspberry Piがエレクトロニクスを民主化したように、農業機械も低コストなベースから始まる修理可能なエコシステムが育つ可能性がある
- **jmward01**: 農機だけでなく自動車にも同じことを望む。追跡機能やタッチスクリーンのないEVや、シンプルな内燃機関車を求めている
- **simplyluke**: EPAが2014年以降DEF/DPFシステムを農業機械に義務付けたため、旧式エンジンを再製造せざるを得ない構造的な事情を解説。規制が農業機械の高コスト・低信頼性化を招いた

---

## 6. [Your hex editor should color-code bytes](https://simonomi.dev/blog/color-code-your-bytes/)

**Score:** 238 | **Comments:** 70 | [Post](https://news.ycombinator.com/item?id=47846688)

ヘックスエディタが16進数の値域ごとに18色グループ（`00`・`FF`は特別扱い）で色分けすべきという提案。コードエディタにシンタックスハイライトがあるように、バイナリエディタにも視覚的手がかりが必要で、圧縮データ・ビットマップ等のパターン検出が直感的になるとする。作者は「色分けはヘックスエディタにとってシンタックスハイライトと同じくらい普及すべき」と主張。

### Key Discussion Points

- **dspillett**: 色はやりすぎると「フォーマットの海」になるが、少量の色使いは効果的。色覚障害者向けの設定オプションを用意し、太字・斜体などの代替も提供すべき
  - **finaard**: 開発時に色覚障害の友人に定期的にスクリーンショットを送ってフィードバックをもらうことを薦める。アクセシビリティ向上に非常に有益
  - **PunchyHamster**: 色設定をユーザーに委ねれば解決する。「全部色付け」のアプローチでもユーザーが好みを選べれば問題ない
- **cuechan**: ImHexを強く推奨。C言語風のデータ型定義をリアルタイムでヘックスダンプにオーバーレイできるノードベースエディタ
- **bwiggs**: DEFCONのCTFで`hexyl`の色分け機能により隠されたフラグ文字を視覚的に発見した実体験。「灰色の海の中に突然現れた黄金色の`{`」が鍵だった
- **Someone**: 静的な色グループではなく、検索機能とプラグイン可能なシンタックスカラーリングの方が実用的

---

## 7. [Apple fixes bug that cops used to extract deleted chat messages from iPhones](https://techcrunch.com/2026/04/22/apple-fixes-bug-that-cops-used-to-extract-deleted-chat-messages-from-iphones/)

**Score:** 687 | **Comments:** 171 | [Post](https://news.ycombinator.com/item?id=47868867)

AppleがCVE-2026-28950を修正。削除済みのSignalメッセージ等の通知コンテンツがiOS・iPadOSのデータベースに最大1ヶ月間保持されていた。FBIがこの脆弱性を悪用してSignalの削除済みメッセージを捜査目的で抽出していたことが明らかになり、Appleは古いiOSバージョンへもバックポート修正を提供した。

### Key Discussion Points

- **dlcarrier**: Apple・Googleがほぼすべてのプッシュ通知の中継者となっているため、通知内容がサーバーを経由し政府の令状なし盗聴の対象になりうる。通知はメッセージ内容ではなく「受信した」事実のみ表示する設定に変更すべき
  - **gruez**: 批判：実際の問題はOSがローカルに通知履歴を保存していたこと。SignalはApple/Googleサーバーを経由しても通知内データを暗号化しているため、中継者はメッセージを読めない
  - **MisterTea**: 銀行アプリは毎回ログインしないと内容を見せない。メッセージアプリも通知に内容を載せず単なる着信通知にすべき
- **6thbit**: 真の問題は通知テキストがSignal外のDBに保存される点。今回の修正はアプリ削除時の未削除ログの修正（CVE分類は「ログの問題」）にとどまる
- **modeless**: プッシュ通知はE2E暗号化されてアプリ側で復号されると思っていたが、OSが復号後のテキストを通知履歴DBにローカル保存していたことに驚き
- **nxobject**: Signalの「汎用メッセージ着信通知」設定を使うことで通知内容の露出を防げる

---

## 8. [A Renaissance gambling dispute spawned probability theory](https://www.scientificamerican.com/article/how-a-renaissance-gambling-dispute-spawned-probability-theory/)

**Score:** 19 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=47848162)

Scientific Americanの歴史記事。フランスの賭博師がブレーズ・パスカルとピエール・ド・フェルマーに「賭けが中断されたとき賭け金をどう分配すべきか」という問題を持ちかけたことが、確率論の誕生につながったというルネサンス期の逸話を解説している。ギャンブルという日常的な問題が現代数学の基礎を生んだ歴史的経緯が紹介されている。

### Key Discussion Points

- **skywal_l**: 「フランス人の知識人的な賭博師が問題を持ち込んだ」という描写に対し、「パスカルとフェルマーが自分の問題解決のためにチームを組むなんて想像するだけで最高」とユーモラスに反応

---

## 9. [Writing a C Compiler, in Zig](https://ar-ms.me/thoughts/c-compiler-1-zig/)

**Score:** 50 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=47873694)

Abdul Rahman Sibahiが、Nora SandlerのC言語コンパイラ実装ガイドに沿ってZig言語でCコンパイラを書くシリーズの第1回。単項演算から始め、ループ・関数まで10章にわたって進める予定。転職活動の合間に取り組む学習プロジェクトで、Zigを習得しながらコンパイラの基礎を実践的に理解することを目的としている。

### Key Discussion Points

- **fuhsnn**: リポジトリを確認すると、著者は低レベル言語の性質に疲れてプロジェクトを中断したようだとコメント
- **flossly**: ZigにはC言語コンパイラが内蔵されているのでは？（正確にはZigのビルドシステムがClangを呼び出す）。それでも独自実装を書くのは「プログラマーとしての誇示」
- **scatbot**: ZigのオリジナルのバリュープロポジションだったCコードを「Zigでメンテナンス可能にする」という目標と合致する。将来的にZigツールチェーンのCフロントエンドのClang/LLVM依存を減らせるかもしれない

---

## 10. [We found a stable Firefox identifier linking all your private Tor identities](https://fingerprint.com/blog/firefox-tor-indexeddb-privacy-vulnerability/)

**Score:** 794 | **Comments:** 234 | [Post](https://news.ycombinator.com/item?id=47866697)

fingerprint.comの研究者がFirefox/Tor BrowserのIndexedDB実装に安定した識別子を生成するバグを発見。異なるTorサーキットやプライベートウィンドウをまたいでユーザーを追跡できるため、Torによる匿名性が部分的に破れる。Mozillaには責任ある開示が行われた。識別子はFirefoxプロセスが実行中である限り持続する。

### Key Discussion Points

- **lpapez**: 優れた研究内容と称賛しつつ、フィンガープリント企業がなぜ競争優位になるはずの脆弱性を公開したのかを疑問視
  - **valve1**: 「私たちはプロダクトに脆弱性を使いません」と簡潔に回答
  - **hrimfaxi**: おそらく自社では使っていないため、公開することで他者も使えなくさせるのが目的では
- **Cider9986**: Torでフィンガープリントされることは完全な身元特定とは異なる（「擬似匿名化」）。HNよりWhonix・Qubes・GrapheneOS等のコミュニティでopsecsを学ぶべき
- **yencabulator**: セッション終了時にTor Browserを必ず終了させること、用途を混在させないことが対策として有効
- **firefax**: セキュリティ（NoScript・uBlock等）は確保できても、フィンガープリントや文体解析（stylometry）による匿名性の喪失は防ぎにくい

---

## Trends

本日のトップ10から見えるテーマと傾向：

1. **プライバシー・監視の深刻化**: ストーリー1（通信事業者経由の位置追跡）・7（削除済みメッセージの漏洩）・10（Torを破るFirefox識別子）と、プライバシー侵害に関するトピックが3件。政府・企業・不正業者いずれもがデジタル痕跡を活用しており、ユーザー側の対策の限界が浮き彫りになっている。

2. **テクノロジーの複雑性への反発**: ストーリー4（クラウドの再設計）・5（ノーテクトラクター）・6（ヘックスエディタの改善）に共通する「現代技術の過度な複雑性・ロックインへの反動」。「単一のDebianサーバーで十分」「1970年代のエンジンで半額」という声が大きな支持を集めた。

3. **SQLite・ローカルファーストアーキテクチャの台頭**: Honker（ストーリー3）はSQLiteをメッセージブローカーとして活用し、ストーリー4のコメントでもローカルDBの利点が多く語られた。ブローカーレス・シングルVM・ローカルファーストな設計思想が開発者の共感を呼んでいる。

4. **AIによるコンテンツ汚染とセキュリティの二面性**: ストーリー2（AIスパム）は生成AI悪用の現実を示す一方、ストーリー9（ZigでCコンパイラ）はAI時代でも基礎技術学習への需要が続くことを示している。
