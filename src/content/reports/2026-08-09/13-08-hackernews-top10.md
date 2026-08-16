---
title: "Hacker News トップ10 サマリー (2026-08-09)"
date: "2026-08-09T13:08"
category: "summary"
summary: "廃品ハードウェア再活用とAI生成コンテンツを巡る議論が目立つ一日。Shopifyの在庫予約基盤刷新やos8088復刻など話題多数。"
tags: ["hackernews", "tech-news"]
---

## 1. [Reviving a four year old reMarkable 2](https://oskrim.github.io/hardware/2026/08/09/remarkable-over-ssh.html)

**Score:** 18 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=49230514)

4年間放置されていたreMarkable 2タブレットを復旧させた記事。「クラウド同期が失敗する」という問題を解決するため、SSHでデバイスに接続してシステムクロックを修正し、複数回のソフトウェアアップデートを実施。最終的にはクラウド同期を諦め、Webインターフェース経由でPDFをアップロードする方法でタブレットを再び使えるようにした。

### Key Discussion Points

- **graceful6800**: オフラインでファームウェア更新ができる `codexctl` というツールを紹介。
- **mfcl**: 記事が途中で終わっているように見えると指摘。
- **doublerabbit**: 別のタブレットでバッテリー切れによりノートが消えた経験を語り、結局紙とペンに戻ったとコメント。
- **jacknews**: 4年で「型落ち」扱いされることに驚き、自分の子供は2013年製ThinkPadを今も使っていると述べる。

## 2. [There Are Magic Hexagons of Every Order](https://gukov.dev/math/2026/08/02/new-magic-hexagons.html)

**Score:** 80 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=49229174)

著者は「非対称なマジックヘキサゴンの方が単純である」という観察と、AI（GPT-5.6 Sol）との協働を通じて「3より大きいすべての次数のマジックヘキサゴンが存在する」という予想を証明した。当初は人間が主導していたが、プロセスが進むにつれてAIがより多くの創造的作業を担うようになったという。

### Key Discussion Points

- **yunruse**: インタラクティブな要素と「ポテンシャル場」という抽象化を絶賛し、その滑らかさについてさらなる考察を求める。
- **unholiness**: 面白い問題としつつも、次数3以外の解を単純に排除してしまう性質に不満を示し、次数2では制約なしでも成立しないのではと指摘。
- **amelius**: 四角グリッドでは45度線が考慮されない理由を質問。
- **reckless**: 「hexagons are the bestagons」と一言。

## 3. [My server is a phone now](https://seg6.space/posts/phone-server/)

**Score:** 386 | **Comments:** 162 | [Post](https://news.ycombinator.com/item?id=49226636)

著者は画面が破損した使わなくなったスマートフォンを、Tailscale経由の個人サーバーとして再利用する方法を紹介している（元記事は取得できなかったためコメントから推測）。Termux上でproot Ubuntuを動かしOWUIやSyncthingなどのサービスを稼働させ、バッテリー劣化を抑えるため充電を80%に制限するなどの工夫を行った様子がコメントで語られている。

### Key Discussion Points

- **tkgally**: タイトル「My server is a phone now」の語順を言語学の「theme/rheme」概念で分析し、なぜ読者が誤読しやすいかを解説。
  - **jarek83**: 自分は最初、電話機能を持つサーバーの話だと誤解したと述べ、ネイティブ/非ネイティブ読者で受け取り方が違うのではと推測。
  - **OJFord**: 単に分かりにくいタイトルであり、「my server runs on a phone now」の方が良かったと提案。
- **fidotron**: 2006年頃、Nokiaが「Apache Raccoon」を使いSymbian端末から3G経由でライブ配信する未来を構想していたエピソードを紹介。
- **peheje**: 画面割れのGalaxy S23 Ultraを自分専用のTailscaleサーバーとして活用し、Termux+prootでOWUIとSyncthingを動作させていると報告。
- **thehamkercat**: タイトルは逆の方が良いのではと述べつつ、内蔵バッテリーのままサーバー運用することの火災リスクを懸念。
  - **dlcarrier**: 冗談交じりに、UPSと携帯回線バックアップ付きの12Uミニラックを持ち歩いているのだろうと想像。
  - **seg6（著者本人）**: 一部の新しい機種はバイパス充電に対応しているが自分の端末は非対応のため、充電を80%に制限していると回答。
- **alightsoul**: ブートローダーがロックされた端末ではポートバインドやroot化ができないなど、同様の構成を再現する際の技術的制約を詳しく解説。
  - **fragmede**: 2026年3月以前のファームウェアであればCVE-2026-0047が使えるかもしれないと補足。

## 4. [Microsoft Word for Windows 1.1a, Native X64 Port](https://github.com/jmarshall23/msword)

**Score:** 103 | **Comments:** 44 | [Post](https://news.ycombinator.com/item?id=49228663)

コードネーム「Opus」で知られるMicrosoft Word for Windows 1.1aを、オリジナルのソースコードを保持したまま64ビットネイティブWindows実行ファイルへ移植したプロジェクト。16ビットアセンブリやセグメント化メモリなどの古い要素を現代的なx64互換レイヤーに置き換えることで、エミュレータを介さずオリジナルのWord体験を64ビット環境で直接動作させている。

### Key Discussion Points

- **acmdas**: 1985〜86年にDan BricklinのDemoを使いWord 5のcursesトレーニングを開発した思い出を語り、LinuxやBSDへの移植を望む。
- **spider-mario**: ビルドを試みたところ `cmake/GenerateMenuHelpHeader.cmake` がリポジトリに存在せず失敗したと報告。
- **ulfw**: スクリーンショットが欲しいと要望。
- **BaudouinVH**: Linuxへの移植はどの程度大変になるか質問。
- **pmkary**: 「Cool!」と短く反応。

## 5. [Everything You Do Is Being Recorded](https://www.theatlantic.com/technology/2026/05/ai-wearable-surveillance-countermeasures/687203/)

**Score:** 49 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=49230477)

元記事・アーカイブとも取得できなかったため、コメントから内容を推測すると、AI搭載ウェアラブル（スマートグラスなど）の普及により、日常のあらゆる場面が常時録画・監視されるようになりつつある現状と、それに対する対抗策を論じた記事とみられる。

### Key Discussion Points

- **gsky**: ペイウォール回避用にarchive.isのリンクを共有。
- **zhoBEENG**: 監視資本主義の問題は何年も前から知られているのに、人々はスマートフォンや車のテレメトリ、Metaのサービスを進んで使い続けていると指摘。6G規格に統合センシング通信（ISAC）が組み込まれる計画にも言及。
- **NooneAtAll3**: 「アーカイブリンクが一番必要な時に限って見当たらない」とぼやく。
- **Razengan**: EFFなどの団体が、企業の監視行為をストーカーになぞらえた公共広告を出すべきだと提案。

## 6. [Os8088: A powerful Mac-like OS for the IBM XT, 286, 386](https://os8088.com/)

**Score:** 200 | **Comments:** 120 | [Post](https://news.ycombinator.com/item?id=49226923)

os8088は、1984年のMacintosh System 1風デスクトップをIntel 8086向けに再現したグラフィカルOS。リアルモードアセンブリで実装され、プリエンプティブマルチタスキングやウィンドウ操作、フロッピーからのプログラム読み込みなどを、わずか256KBのRAMで実現している。

### Key Discussion Points

- **adrianmonk**: 実際に存在した商用グラフィカルOS「Visi On」（VisiCorp製）を紹介し、Apple Lisaより先の1982年のCOMDEXでデモされていたと説明。
  - **wewewedxfgdf**: Visi OnがGatesにGUIを紹介したという説は誤りで、Microsoftは既にMac向け開発を行いPARC出身のCharles Simonyiを雇っていたと訂正。
  - **jggonz（作者）**: Visi Onのプロモ動画紹介への感謝を述べ、当時多くの企業が同様の挑戦をしていたことが分かって興味深いとコメント。
- **Narishma**: 「手書きのリアルモード8086アセンブリ」という説明は実際には「hand-prompted（AIへのプロンプトで書かせた）」の間違いではと皮肉。
  - **vunderba**: READMEやライセンス表記の矛盾を指摘し、LLMに広告コピーを書かせるとこうなると皮肉る。
  - **jggonz（作者）**: 「hand-prompted」という指摘は正しいと認め、Claude OpusとFableがOS開発を手伝ってくれたと説明。
- **ayaros**: 素晴らしいので開発を続けてほしいとしつつ、タイトルバーが太すぎるので16px程度に調整すべきと提案。
- **LeoPanthera**: HNの多くがAIでコードを書きながら、興味深い新しいソフトウェアをAI製だと切り捨てる風潮は皮肉だと指摘。
  - **afavour**: 完全にAI生成のホビープロジェクトには何か物足りなさを感じると本音を述べる。
  - **walrus01**: 退屈な作業をAIに任せることと、READMEすら自分で書く手間を惜しむことは別問題だと区別。
- **orbital-decay**: プリエンプティブな8086OS上でWin3.11風マインスイーパーが動く様子を「呪われている」と評する。

## 7. [The Alpha 21264 CPU: NT's Greatest RISC (1998)](https://halfhill.com/byte/1998-12_alpha.html)

**Score:** 23 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=49230022)

1998年当時、Digital社のAlpha 21264 CPUを紹介した記事。最大1GHzに達する高性能RISCチップで、80命令の同時処理やアウトオブオーダー実行といった先進的機能を備え、将来のIA-64（Itanium）との性能競争が注目されていた。

### Key Discussion Points

- **jleyank**: Alphaは高速だったが最大最適化時にIEEE浮動小数点準拠を犠牲にしており、数値計算コードの移植検証に苦労したと振り返る。HPのPA-RISCの方が扱いやすかったとも。
- **rbanffy**: 著者Tom Halfhillの記事を再び読めて嬉しい、30年ぶりに見た名前だと懐かしむ。
- **robin_reala**: Byteが休刊したのがちょうど28年前だったことに驚く。
- **EvanAnderson**: 当時Compaqが「Alphaを支援し続ける」と明言していたが実際はそうならなかったと皮肉り、NT上のAlphaマシンはx86サーバーより洗練されていたと振り返る。

## 8. [The Grid That Doubles the Strength of the Ground](https://practical.engineering/blog/2026/8/4/the-grid-that-doubles-the-strength-of-the-ground)

**Score:** 45 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=49178476)

地盤を強化する「ジオセル」というプラスチック製ハニカム構造の3D構造体を紹介する記事。軟弱な土壌を格子状に閉じ込めることで荷重分散と安定性を高め、ロングビーチ港の拡張工事などで実際に採用されており、掘削費用の削減と環境負荷の軽減を両立させている。

### Key Discussion Points

- **arjie**: 未舗装駐車場でよく見かける構造だと述べ、チリのパタゴニアの国立公園道路で見られる洗濯板状の凹凸（washboarding）の謎が解けたと語る。
- **Animats**: 長期的には「永遠に分解しないプラスチック」が必要になる、コンクリートの鉄筋と同様に引張強度を補う素材が劣化すればただの土の山に戻ってしまうと指摘。
- **40four**: 近所の公園駐車場でこの工法（砂利充填）を見たことがあり、舗装よりコスト削減になったのではと推測。
- **MaxikCZ**: 「なんてドメイン名だ」と一言。
- **readthenotes1**: 「面白い概念だが文章がひどい」と手短に酷評。

## 9. [You might want to build your WebApp in Canvas instead of HTML](https://hivekit.io/blog/why-you-might-want-to-build-your-webapp-in-canvas-instead-of-html/)

**Score:** 30 | **Comments:** 29 | [Post](https://news.ycombinator.com/item?id=49154190)

Canvasを使ったWebアプリ開発は、複雑な描画処理が必要な場合に限定すべきだという主張の記事。Canvasは高速化の近道ではなく低レベルの描画ツールであり、Google DocsやSheetsのような大規模で複雑な空間ワークスペースにのみ向いているとし、通常のアプリではDOMの方がアクセシビリティや機能面で優れると結論づけている。

### Key Discussion Points

- **dinkelberg**: Canvas描画だとブラウザの開発者ツールが使いにくくなり、アクセシビリティ面でも後退になると懸念。
- **groomlake**: GoogleやMicrosoftが実際どう作っているか気になるとし、MicrosoftのWebアプリ（Copilot Chatなど）はむしろ重く感じると指摘。
- **efficax**: アクセシビリティへの言及が記事に全く無いと批判し、視覚障碍者にとってCanvasはDOMよりアクセスしづらいと述べる。
- **lisperforlife**: SAP時代に見た「bluebox」問題（ブラウザ埋め込みコントロール）を引き合いに、ブラウザをUI配信エンジンとして使う試みは歴史的にうまくいったことがないと振り返る。
- **bob1029**: どうせCanvasを使うならUnityのWebGLターゲットのような最も強力なツールを使うべきだと提案。

## 10. [Shopify replaced Redis with MySQL for inventory reservations–and it scaled](https://shopify.engineering/scaling-inventory-reservations)

**Score:** 248 | **Comments:** 157 | [Post](https://news.ycombinator.com/item?id=49226536)

ShopifyはRedisで運用していた在庫予約システムをMySQLに置き換えた。RedisとMySQLが別システムであったためACID保証がなく、オーバーセル（同一商品の重複販売）のリスクがあったことが理由。解決策としてMySQLの「SKIP LOCKED」機能を活用し、商品の各ユニットを個別行として管理するアーキテクチャを採用。最終的にはクエリ速度自体ではなく、チェックアウト処理内で長時間DB接続を保持していたことがボトルネックだったと判明し、接続状況の可視化と設定最適化によりスケール目標を達成した。

### Key Discussion Points

- **ramon156**: この記事は明らかにLLMが書いたもので、Shopifyのブログでそれをやるのはがっかりだと批判。
  - **briga**: 何をもって「明らかに」AI製と言えるのか疑問視し、エンジニアがAIツールを使うのは推奨されていることではと反論。
  - **lp4v4n**: 同意し、LLM特有の箇条書きスタイルはすぐに分かり読んでいて苛立つ、多少の文法ミスがあっても人間の生の文章を読みたいと述べる。
- **sureglymop**: 話は逸れるがShopifyの配送追跡アプリ「shop」が非常にうるさく、mitmproxyで調べたところ受信より送信データの方が多かったと報告。
  - **doublerabbit**: 海外通販だけでなく国内配送業者でも「shop」経由のトラッキングリンクをダークUIで隠しているとの声。
- **manbash**: 記事にある「商品ユニットごとに1行」というアプローチについて、1商品あたり最大1000行のプールに制限し補充プロセスで埋め戻す仕組みを引用。
  - **fauigerzigerk**: この解決策はShopify全体の規模の問題ではなく特定倉庫の特定SKUへの競合の問題であり、もっとシンプルな方法があるのではと疑問視。
  - **esjeon**: これは「契約タイプごとに1行」と呼べる最も一般的なモデルであり、ストレージが安価な今では最もスケーラブルだと擁護。
- **isignal**: よりシンプルな代替案（注文開始時に予約行を作り、タイムアウト時にバックグラウンド処理で在庫に戻す）を提案し、ロック不要な点を強調。
  - **firasd**: Shopifyの手法と大差なく、「予約ユニット」を追跡するか「注文」を一時状態として追跡するかの違いだと整理。
  - **sandeepkd**: バックグラウンド処理を追加した時点で複雑さを移しただけで、障害対応やDLQなどのコストが発生すると反論。
- **progx**: これはShopify特有の問題への解決策であり、「RedisがダメでMySQLが良い」という単純な話ではないと理解を示す。
  - **gregoriol**: 優れたチームでも間違った選択をすることはある、だからこそ彼らの考えを読んで議論するのは面白いと同意。

## Trends

今日のトップ10は、廃品・型落ちハードウェアの再活用（reMarkableの復活、スマホのサーバー化、8088機でのMac風OS復刻、Word 1.1のx64移植、Alpha CPUの回顧記事）が大きな割合を占めた。また、AIが創作や技術的成果にどこまで関与すべきか、成果物がAI生成であることをどう受け止めるかという議論（マジックヘキサゴンの証明、os8088の開発経緯、Shopifyブログの文体を巡る指摘）が複数のスレッドで繰り返し取り上げられた。さらに、大規模システムの設計トレードオフ（Shopifyの在庫予約基盤、Canvas対DOMのUI設計判断）や、AIウェアラブルによる常時監視への懸念といった、技術と社会・実務判断の接点に関する話題も目立った。
