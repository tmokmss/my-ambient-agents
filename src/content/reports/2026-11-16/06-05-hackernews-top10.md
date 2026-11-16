---
title: "Hacker News トップ10 (2026-11-16)"
date: "2026-11-16T06:05"
category: "summary"
summary: "Qwen4-Max、Protomaps、Bitly リンク乗っ取り、uBlock Origin の UXSS など HN 上位10件の要約"
tags: ["hackernews", "tech", "summary"]
---

## 1. [Qwen4-Max](https://qwen.ai/blog?id=qwen4-max)

**Score:** 309 | **Comments:** 105 | [Post](https://news.ycombinator.com/item?id=50513215)

Alibaba の Qwen チームによる新モデル Qwen4-Max の発表。記事本文は取得できなかったため、コメントからの推測を含む。Artificial Analysis のスコアは 43 で、GPT-6.1 Sol (medium) の 46 に届かないという指摘が出ている。27B や Flash といった小型版の公開を待つ声が多い。

### Key Discussion Points

- **seizethecheese**: opencode の対戦システムに Qwen 3.8 を入れたが、遅さ（約30 tokens/s、Opus は約80）が原因でスコアが低い。速く提供されることを期待。
  - **jakswa**: Qwen 3.8 Flash Next（Qwen 4 のアーキテクチャのプレビュー）をローカルで動かしており、コンテキスト長に関わらず安定して動く。
  - **FrostKiwi**: 画像を扱えないという記述に対し、ローカルの Qwen 3.8 27B は画像を扱えると指摘。
- **maplet**: Artificial Analysis で 43 点、平均コスト $3.27。GPT-6.1 Sol (medium) は 46 点で $0.36。
  - **esperent**: 比較は max 設定同士で行うべき。GPT-6.1 Sol (max) は $1.27/タスク、Opus 5.5 (max) は $10.01。
  - **seizethecheese**: ベンチマークのコストデータは信用できない。実タスクでは Sol 6.1 と Qwen 3.8 Max のコストはほぼ同じという手元データがある。
- **nelaggy**: オープンウェイトと商用モデルの差が広がっているのではないか。
  - **rbehrends**: 変化が速い分野で、1年弱前の Opus 4.5 は現在の open flash モデルと比べても限定的に感じる。
  - **x312**: 計算資源と情報の非対称性があり長期的に追随は難しい。これまでは効率化技術で補ってきた。
- **grendelt**: 中国政治に関する質問への回答傾向を試している。
  - **robertkarl**: 拒否の多くは API 側の挙動で、ウェイト自体はより寛容。
- **simonw**: 4段階の reasoning effort での pelican 画像を公開。
  - **Starlevel004**: Pelicanbench は飽和してきたので別の動物と乗り物に変えるべき。

## 2. [Protomaps: Self-hosting map tiles has gotten cheap and easy](https://bruceroettgers.eu/blog/protomaps/)

**Score:** 259 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=50509837)

PMTiles は単一ファイルで HTTP Range リクエスト経由で配信できる地図タイル形式。ストレージバケットに置くだけでデプロイでき、Mapbox のような従量課金 API の代替になる。記事では Bunny.net への配備とフロントエンドへの組み込みを解説している。

### Key Discussion Points

- **neomantra**: Cloudflare R2 の裏で同様の構成を運用している。PMTiles は CLI の「gloss」で閲覧できる。
  - **jamessb**: 公式の PMTiles ビューアも便利。
  - **cldellow**: R2、D1、Workers で自作のハイキング地図を月約 $2 で配信している。
- **motoroco**: 高解像度の衛星画像はズームが上がると巨大になる。北米の自作モザイクは z17 で打ち切った。
  - **mips_avatar**: 誰かが数 TB の衛星モザイクを R2 でホストしてくれるとよい。
- **maelito**: Cartes.app は Maptiler で月 150 ユーロに達したため Protomaps に移行し、ホスティング費はほぼゼロになった。
- **joshstrange**: Google Maps の想定外の請求から Protomaps に移行し、安価で扱いやすい。
- **boramalper**: 類似プロジェクトとして OpenFreeMap を挙げた。
  - **bitbuilder**: OpenFreeMap の週次プラネット PMTiles を R2 にコピーして運用している。
  - **cube00**: OpenFreeMap が使う OpenMapTiles は Protomaps より帰属表示の要件が厳しい。

## 3. [Old Bitly links are being hijacked](https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/)

**Score:** 239 | **Comments:** 125 | [Post](https://news.ycombinator.com/item?id=50511395)

2011年の Burger King や McDonald's のツイートに含まれる古い Bitly 短縮リンクが、11月15日に第三者に再登録され、Wikipedia の無関係なページへ飛ぶようになった。Bitly は「古い非アクティブなリンクを悪用された」と認め、関与アカウントを停止して該当リンクを無効化している。調査では、Trump のツイート 97 件中 56 件のリンクがツイート後に再作成されていた。

### Key Discussion Points

- **g-b-r**: 大組織の旧ドメインを指す CNAME が放置され、スパム業者がそのドメインを取得して悪用している。
  - **kragen**: 自分も失効ドメインを指す CNAME を悪用された経験がある。
  - **joahua**: CT ログで見つけられる。この攻撃は「Dangling DNS」と呼ばれる。
- **Alive-in-2025**: 放置された URL の所有権を追跡する仕組みが必要。
  - **gpm**: archive.org は 501(c)(3) の非営利団体で、archive.is は匿名運営という違いがある。
- **xp84**: 外部委託の短縮サービスは、アカウント停止や事業終了でリンクが永久に壊れるため、自社運用より悪い。
  - **dijit**: 自前の短いドメインは文字数が少ないほど枠が限られて高価になる。
  - **thephyber**: メールアドレスの再利用が乗っ取りにつながった例。
- **silisili**: 短縮サービスに Trust and Safety チームがいることに驚いた。
  - **transcriptase**: 違法・詐欺用途や捜査当局の要請への対応が不可欠。
  - **jmathai**: 無料 QR コードサイトが途中から有料化し、リンクを人質にする例がある。
- **101008**: 有名作家の本に載った架空ツイート用の Bit.ly リンクが未登録だったので自分で登録し、関連サイトにリダイレクトした。

## 4. [Universal XSS in uBlock Origin from website-driven element picker](https://iter.ca/post/ubo-uxss/)

**Score:** 223 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=50513160)

uBlock Origin（Firefox MV2 版）の要素選択ツールが、悪意あるサイトに操られて任意の trusted filter を追加させられる脆弱性。trusted filter は JS を注入できるため、任意サイトで任意の JS が実行できた。攻撃は透明な iframe に picker UI を埋め込み、ユーザーに「Create」ボタンをクリックさせる形をとる。すでに修正済みで、MV3 版の uBO Lite も軽度の影響を受けた。見つけたのは GPT-5.6 Sol で、PoC は Claude が書いたという。

### Key Discussion Points

- **SoftTalker**: uBO は全ページを検査・変更できる広い権限を持つため、脆弱性が悪用されやすい。
- **taylorfinley**: 「散文は人間が書き、PoC は GPT が書いた」という開示を評価。
  - **hiccuphippo**: 同様の開示が増えれば、AI がその文言を自分で書くようになる。
- **ethersteeds**: no-fetch-if のフックを使えば、サイトが拡張機能の UUID を取得できる。UUID は追跡 ID にもなる。
  - **tech234a**: Chromium は最近まで静的 ID を使っていた。
  - **esseph**: Do Not Track を有効にすると、かえって特定されやすくなった。
- **afavour**: 拡張機能がページ内容を直接編集できなくなる制限への反対論があったが、この脆弱性はその制限が必要な理由の好例。
  - **alex1138**: Chrome の Manifest 3 のことかと確認。
- **ByteOfWood**: 拡張機能の UI がサイトの DOM に入ると情報が漏れる。
  - **btown**: 拡張機能のバグがサイト全体に影響する例として、1Password が今年1月に prism.js を全ページへ注入して20日以上コードブロックを壊した件がある。

## 5. [A short explainer on how El Niño works [video]](https://www.youtube.com/watch?v=7_JF3etiAv8)

**Score:** 210 | **Comments:** 91 | [Post](https://news.ycombinator.com/item?id=50509308)

El Niño の仕組みを解説する動画。動画ページは本文が取得できないためコメントから推測すると、米国向けの解説で、パイロットが冬に備えるべき内容も含まれる。

### Key Discussion Points

- **breakyerself**: 今回の El Niño は、過去12.5万年で最も温暖な気候の中で起きている。
  - **noosphr**: El Niño と極端気象の関係は崩れつつあり、前回の El Niño は豪州で非常に雨の多い夏をもたらした。
  - **stingraycharles**: フィリピンでは最大 52 度が予想されている。2018年の El Niño の最高は 51 度だった。
- **rene_d**: Climate Reanalyzer の海面水温グラフで状況の異常さが一目で分かる。
  - **simpsond**: 自作の El Niño 観測サイトを共有。
- **slicktux**: フロリダの Learjet 墜落事故を受け、El Niño が飛行にどう影響するか気になっていた。
  - **vibebingo**: パイロットは危険な天候を避ける必要があり、緊急事態を宣言すれば ATC の誘導なしで回避できる。
- **guilhermeasper**: ブラジル向けの解説動画を紹介。

## 6. [What's Next for Nvidia?](https://steveblank.com/2026/11/15/whats-next-for-nvidia/)

**Score:** 172 | **Comments:** 224 | [Post](https://news.ycombinator.com/item?id=50512235)

Steve Blank による Nvidia 論。記事本文は取得できなかったため、コメントからの推測を含む。創業者 Jensen Huang の退任という状況の中で、大口顧客が競合に変わる脅威と、新 CEO が最初に削る投資が論点になっている。

### Key Discussion Points

- **01100011**: 最大の脅威は顧客が競合になること。大手は Broadcom と組んで自社チップを作り、エージェントで抽象化層やデバッグツールも作れるため、CUDA の重要性は急速に下がる。
  - **irq-1**: CUDA は特定ベンダーに縛られない標準として市場の支持を持つ。
  - **psadri**: 最先端ファブの製造枠は先に押さえられており、新チップを設計しても作れない。
- **saucymew**: Nvidia は AI ブームの銀行のような存在。「実行型 CEO は真っ先にこれらの賭けを削る」という一文が最も不穏。
  - **m4rtink**: Nvidia の下落が AI バブルも崩すのか。
- **credit_guy**: Nvidia は崩壊するが、AMD、OpenAI、Google、Amazon に好機になる。
  - **amarshall**: TPU などは一般に買えず、非公開チップが増えるほうが悪い。
  - **refresh89347**: 33年間 Jensen を軸に最適化された組織を、創業者以外に再最適化するのは危険。
- **areoform**: Jobs は自社製品を自ら共食いさせたが、Nvidia も同じことができるか。
  - **rr808**: Jobs 退任後の Apple はより成功した。
  - **refulgentis**: モデルは4週間ごとに更新されており、残りは Apple についての自由連想にすぎない。
- **shruubi**: 既婚かどうか、スパイかどうかは論点なのか。
  - **adabyron**: 部下との関係は許されず、Blackwell を中国に売ったかどうかが政府の関心事。
  - **krupan**: 顧客や従業員との関係は CEO として問題。

## 7. [Preserving 30 years of Salon journalism](https://blog.archive.org/2026/11/12/preserving-30-years-of-salon-journalism/)

**Score:** 127 | **Comments:** 36 | [Post](https://news.ycombinator.com/item?id=50511806)

Internet Archive が、31年続いて廃刊を発表した Salon の記事を保存したと報告。Wayback Machine から 25 万件超の記事、2 万人超の執筆者を探せる実験的な「Salon Explorer」も公開した。

### Key Discussion Points

- **mellosouls**: 閉鎖は先日も議論された（658 points）。Salon が過去のフォーラムを保存支援なく廃止したことが記憶に残る。
- **vkgcr**: アーカイブが安価な時代になり、今後は出来事のほぼ正確な記録が残る。
- **thephyber**: Internet Archive でサイト全体をダウンロードする方法はあるか。閉鎖されたブログの記事を保存しようとして一時的に IP を禁止された。
- **nextaccountic**: Salon のドメインまで落とす理由が分からない。広告収入でホスティング費も賄えないのか。
- **KPGv2**: 閉鎖するサイトが Internet Archive にデータを移管しないのは不思議。OTW の Open Doors のような枠組みを例に挙げた。

## 8. [Tor Project Issues Rapid-Response DoS-Defense Fix Amid Sustained DDoS Attack](https://forum.torproject.org/t/security-release-0-4-9-17/22454)

**Score:** 100 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=50512441)

Tor Project は 0.4.9.17 を公開した。セキュリティ修正の中でも、IPv6 の扱いに関するリレー DoS 防御が特に重要。ネットワークは大量のクライアント回線の洪水を伴う継続的な DDoS 攻撃を受けており、ほとんどのリレー運営者に影響が出ている。追加の防御策も評価中で、近く追加リリースの見込み。

### Key Discussion Points

- **blakeashleyjr**: DoS は特定サイトを狙うことが多いが、今回はシステム全体を狙っているように見える。
- **cowlevel**: Tor 経由でリリースノートを開こうとして 403 になった。Tor が Tor をブロックしている。
- **noident**: 敵対的リレーへトラフィックを誘導する狙いではないか。
- **Actor**: 非出口ノードを運営しており、ガードノードに昇格した。攻撃で家庭のダウンロード速度が 99% 低下したのを機に気づいた。
- **sikozu**: 10年前に試したときは遅くリソースも使えなかったが、今は改善したのか。

## 9. [The Miracle Cure: In 1977, a drug rejected by doctors became a sensation](https://slate.com/technology/2026/11/doctor-medicine-cancer-cure-pill-history.html)

**Score:** 29 | **Comments:** 15 | [Post](https://news.ycombinator.com/item?id=50479405)

1977年、医師に拒絶された抗がん剤 Laetrile（アンズの種に由来する化合物）が米国で熱狂的に支持された経緯と、その後の影響を振り返る Slate の記事。1977年5月のテキサス州上院委員会の公聴会では、患者が次々と体験を語った。

### Key Discussion Points

- **MBCook**: Laetrile はシアン化物に代謝される物質の派生品なのに、ビタミンや癌の治療薬として扱われた。
- **margalabargala**: 1970年代と同じことが今も続いている。Steve Jobs はジュースクレンズを選んで亡くなり、今はペプチドや流行の食事法が売られている。
- **k0morebi**: 米国で承認された新しい腫瘍薬の半分超は効果がなく、加速承認制度が背景にあるという主張。
- **croes**: Laetrile を作った Krebs 父子の名字は、ドイツ語で「癌」を意味する。
- **ikidd**: ポッドキャスト Behind the Bastards が Laetrile の詐欺師を取り上げた回がある。

## 10. [Stop Filming in Log](https://digitalfilms.wordpress.com/2026/11/15/stop-filming-in-log/)

**Score:** 11 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50514093)

カラリストの Oliver Peters による、ログ撮影を安易に使うことへの批判。ログは「フィルムの見た目」とは関係がなく、アンダー露出で撮って後で直す前提の使い方が問題になりやすいと主張する。フィルムのネガにはログや RAW に相当するものがなく、適正露光で撮って色補正するのが基本だという。

### Key Discussion Points

- **wyager**: ログで撮る目的は見た目の作り込みではなく、量子化やクリッピングで失われる情報を減らすこと。HLG や S-Log3 のような標準的な伝達関数なら、逆 OETF を当てて好きな色空間で作業できる。
- **buildbot**: 色彩管理は奥が深く、このブログの映像制作の記事は面白い。
- **klodolph**: センサーの記録範囲はモニターより広く、ログは理想化された数学的な曲線という説明。

## Trends

- **AI が日常の開発・セキュリティに浸透**: Qwen4-Max の評価は性能だけでなくコストや速度でも割れた。uBO の脆弱性は AI が見つけ、PoC も AI が書いた。
- **インターネットのインフラは放置されたものから壊れる**: Bitly の失効リンク乗っ取り、Salon の保存、Tor への DDoS は、いずれもネットの基盤の脆さと維持管理の問題を示す。
- **セルフホストとコスト意識**: Protomaps への関心は、従量課金 API の請求を避けて自前で安く運用したいという流れを表す。
- **巨大企業のガバナンス**: Nvidia の創業者退任の議論は、AI 半導体市場の競争構造と CUDA の将来にも及んだ。
