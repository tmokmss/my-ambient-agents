---
title: "Hacker News トップ10 ダイジェスト 2026-11-07"
date: "2026-11-07T17:42"
category: "summary"
summary: "Libghostty 1.0、ブラウザで動く NFSU2、Mac の家族分類デーモン、FOSS で回す法律事務所など"
tags: ["hackernews", "digest"]
---

## 1. [Libghostty 1.0](https://mitchellh.com/writing/libghostty-1-0)

**Score:** 919 | **Comments:** 151 | [Post](https://news.ycombinator.com/item?id=50399933)

Ghostty のコアから切り出したターミナルエミュレーション用 C ライブラリ `libghostty-vt` の 1.0 リリース。ライブラリと C ABI が安定版となり、セマンティックバージョニングと厳格な ABI 互換性を約束する（不透明ハンドル、enum キーの getter/setter、バージョン付きシンボルなど）。MIT ライセンスで実行時依存は libc のみ。JetBrains IDE のターミナルが libghostty ベースになったほか、Neovim（libvterm の置き換えPR）、KDE、Vercel Turborepo などが採用し、多数の言語バインディングがあると紹介されている。

### Key Discussion Points

- **JuniperMesos**: Libghostty は非常にクールなプロジェクトで、Ghostty を常用し Android プロジェクトでも libghostty を試した。
  - **shoobiedoo**: 発表からまだ間もないのに Emacs 向けの ghostel など、他の Emacs ターミナルを大きく上回るものがもう出ている。
- **amterp**: 1年前はビジョンが分からなかったが、libghostty で自作ターミナルを作ってみると大幅に手間が省けると実感。
  - **swyx**: 記事の「約1,500行の C で2025年のどのターミナルより高機能なものが作れる」という一節を引用。
- **IlikeMadison**: Libghostty のおかげで Emacs 向けの最良のターミナル（Ghostel）ができた。
- **paradox460**: 今も iTerm2 を使っている。それでも高性能ターミナルを手軽に組み込める流れは歓迎。
  - **rafram**: iTerm は望まれない機能（ターミナル内 AI チャット等）の追加が増え、Ghostty に移った。
  - **Myrmornis**: iTerm2 は設定がプレーンテキストでなく git 管理できない点が離脱理由。
- **ximm**: libvte（gnome-terminal 等が利用）との違いを質問。
  - **pekim**: libghostty は UI を持たないエミュレーション部分のみで、組み込む側が UI を用意する。libvte は GTK UI まで含む。

## 2. [Need for Speed Underground 2 online in the browser](https://nfsu2.xyz/)

**Score:** 508 | **Comments:** 160 | [Post](https://news.ycombinator.com/item?id=50403052)

PC 版 NFSU2 のコードを静的リコンパイルして Chrome/Firefox で動かすファンプロジェクト（EA 非公認）。最大 120fps のワイド画面、フリーラン、友人とのオンラインレース、コントローラやタッチ操作に対応。NFSU2Recomp（MIT 版）をフォークしたもので、運営費用向けの寄付を受け付けている。サイトは 403 で取得できなかったため、Wayback のスナップショットに基づく。

### Key Discussion Points

- **MayeulC**: 久しぶりに遊びたいが、このゲームはどこでも販売されていない。アセットを配布するのは法的に怪しいが手軽に始められる点は評価。
  - **leni536**: Linux では lutris のインストールスクリプトが最近うまく動いた。
- **rustyhancock**: 古いゲームの復活は歓迎だが、著作権物について寄付を募るのは危うい。
  - **jimmyjazz14**: 寄付受付が、本来合法だった一部エミュレータの法的な転機になったと記憶している。
- **macNchz**: 友人のPCで交代で遊んでいたゲームが、いま携帯で完璧に動くのが驚き。アバンドンウェアを巡る状況の改善を望む。
- **donatj**: この時代のゲームの柔らかい夢のような照明は、今の超リアルな描画より心地よい。
  - **Jtarii**: 芸術は制約から生まれる。PS2 の制約下では工夫が必要だった。
- **popcar2**: 数日遊んで友人ともレースした。ただしサイトが合法でなく、閉鎖されないか心配。
  - **judge2020**: サンドボックスを無効化せずに WebGPU を有効にする手順を共有。

## 3. [Every Mac comes with an (undocumented) family member classifier](https://8rank.ai/game/apple-intelligence-personal-knowledge-graph)

**Score:** 416 | **Comments:** 241 | [Post](https://news.ycombinator.com/item?id=50403097)

2022年以降の全 Mac が `knowledgeconstructiond` / `intelligenceplatformd` というデーモンで、連絡先・写真・メッセージのメタデータ・ファミリー共有などから個人の知識グラフを構築しているという調査。`~/Library/IntelligencePlatform` に約51個の SQLite があり、`graph.db` には181のエンティティクラスと278の述語が入る。家族分類には XGBoost モデル（144特徴量）が使われる。連絡先を削除しても期限切れテーブルに残るとされる。多くは推測に基づく部分があると筆者自身が注記している。

### Key Discussion Points

- **infwhispers**（投稿者）: 調査の筆者として質問を受け付け、続編の調査も案内。
  - **asdfsa32**: 内容は興味深いが AI で書かれた文章が読みにくいと指摘。
  - **atombender**: 記事の途中で人間の文体から LLM 風に切り替わるのが不快だと同調。
  - **jamienk**: macOS 27.2 では「フルディスクアクセス」の項目が見当たらないが、どうすればよいかと質問。
- **zaptheimpaler**: Apple がクラウドでなくデバイス上で処理するなら、不透明なクラウドよりはまし。
  - **infwhispers**（投稿者）: それでも文書化と無効化の手段は用意すべきだと反論。
- **Ungh**: 30分調べて恐ろしいと感じた。Intelligence や Siri を無効にしても動作しており、Debian への移行を考える。
  - **ProllyInfamous**: Siri を完全に無効にしているのに収集が続く理由を疑問視。
- **thomascountz**: かつては面白がったかもしれないが、今は疲れる。
  - **ryandrake**: 「裏で勝手にXをしている」という暴露の連続に消耗している。
- **aetherspawn**: Siri の「ジェームズにメールして」といった指示の解決に使うローカル LLM 向けの文脈だろう。
  - **diydsp**: 端末外に出なくても、令状なしの政府や離婚弁護士などが抽出できる。
  - **macNchz**: iCloud にログインしているだけで、ほとんど使っていない MacBook にも多数の名前や活動が出た。

## 4. [Running a law firm on Free software](https://decoded.legal/blog/2026/11/running-a-law-firm-on-free-software-2026-edition/)

**Score:** 140 | **Comments:** 68 | [Post](https://news.ycombinator.com/item?id=50403066)

英国で IT・通信法を扱う小規模事務所を営む Neil Brown が、約5年続けている FOSS 中心の環境を紹介する2026年版。Debian + GNOME、Thunderbird/mutt、LibreWolf を検討中の Firefox、Markdown + pandoc/typst、Syncthing、GrapheneOS の Pixel など。サーバー側は Intel NUC で自己ホストし、Nextcloud を Syncthing と radicale に、Jitsi を Signal に置き換えた。AI ツールは使わない。クライアントが Microsoft や Apple 製品でも問題は「ゼロ」と述べている。

### Key Discussion Points

- **xtiansimon**: 請求や時間管理は InvoicePlane と Kimai だが、ERP がないので経理は会計士任せなのかと質問。
- **theturtletalks**: Harvey を使う法律事務所は、同社に垂直統合の材料を与えている。
- **alexpotato**: espanso は Linux でも iOS/macOS 並みのテキスト展開を実現できる。
- **99harry**: DevOps が一人だけなのが最大の懸念。不在時の体制はどうなっているのか。
- **Tomte**: 法務ワークショップで、著名な OSS 弁護士が「Word を使わないのは過失に当たる」と言っていた。

## 5. [The $8 Linux Computer (2022)](http://thelittleengineerthatcould.blogspot.com/2022/12/the-8-linux-computer.html)

**Score:** 112 | **Comments:** 48 | [Post](https://news.ycombinator.com/item?id=50404599)

約8ドルの Pine64 Ox64（RISC-V 3コア、MMU 付き）で Linux を動かす試み。書かれた時点では Ethernet・WiFi・SD は未動作だった。USB ではなく UART で書き込む必要があり、Wayland 上で Dev Cube が落ちる、CH340G ドングルでハンドシェイクが失敗するなど障害が多く、RP2040（KB2040）をシリアルブリッジにして書き込んでいる。元サイトは Google の CAPTCHA に回されたため、Wayback のスナップショットに基づく。

### Key Discussion Points

- **internet2000**: Raspberry Pi Zero は品切れになる前は5ドルで売られていた。
- **hypercube33**: 10年以上前の最安の Linux 機器を振り返るのが好き。子供向け玩具やルーターを転用していた。
- **dreamlayers**: 古いルーターや Android 端末の方が安いので、売りは安さではなく小ささと GPIO。
- **sandreas**: 15〜20ドルの LicheeRV nano（SG2002）の方が投資価値があるという意見。
- **snvzz**: RISC-V を安く試したいなら、ベクタ対応の C908 を載せた Banana Pi BPI-RV2 がお買い得。

## 6. [They don't make 'em like that any more: Borland Turbo Pascal 7](https://kevinboone.me/tpwin.html)

**Score:** 69 | **Comments:** 45 | [Post](https://news.ycombinator.com/item?id=50405678)

Turbo Pascal 7 を振り返る記事。統合デバッグ付き IDE、高速でメモリ効率のよいコンパイラ、手頃な価格、コピープロテクトなしが特徴で、筆者は90年代に Windows 3.1 の医用画像ソフトを書いたという。衰退の理由として C の優勢、Microsoft の開発ツール、Visual BASIC を挙げ、ソフト開発が半熟練の産業になることへの懸念も述べる。

### Key Discussion Points

- **armcat**: 12歳の頃に DOS で Pong を作り、後に Delphi のフリーランスをしていた。
- **msdz**: TP 7 以後の世代として、当時の Windows 向け開発がここまで扱いにくかったことに驚いた。
- **mapontosevenths**: 記事の「TP のようなものを実装できる人がほとんどいない」という一節を引用。
- **throwaway81523**: 必読として dadgum の「Things Turbo Pascal is Smaller Than」と、コンパイル速度の個人史を紹介。
- **hasley**: DOS 版の青い IDE の TP 7 と、Windows 版 1.5 は同じものかと疑問を呈した。

## 7. [British Library Legal deposit and web archiving](https://www.bl.uk/services/legal-deposit/web-archiving)

**Score:** 38 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=50352791)

英国の法定納本図書館が、UK ドメインや UK の連絡先・サーバーなどから判断した英国サイトを年1回クロールするUK Web Archive の説明。400万以上のサイトが対象。ログイン内に閉じたコンテンツは除外され、閲覧はほとんどが閲覧室限定。検索可能なのは2022年12月以前に収集されたサイトのみ。

### Key Discussion Points

- **glum64**: 「UK サイトの判定方法」は定義にすぎない。米国企業の英国サーバーを借りているだけの非英国居住者の自分のサイトも対象になりうる。
- **trebligdivad**: 自分のサイトが保存されているのに、2か所の閲覧室でしか読めないのは皮肉。
- **londons_explore**: インターネット全体の複製保存は高価だが、閲覧室1か所に制限するのでは英国民の費用負担に見合う便益が薄い。
- **martin-adams**: 英国図書館は英国で出版された書籍等のコピーを全て持つ。自費出版時にも無償で1部納本した。

## 8. [How Long Can Life Wait?](https://mceglowski.substack.com/p/how-long-can-life-wait)

**Score:** 33 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50405789)

Maciej Cegłowski による、生物が休眠状態でどれだけ生存可能かを論じる記事。惑星探査機の汚染リスク、太陽系初期の生命拡散、小惑星や火星での生命発見の可能性に関わると述べる。宇宙で致命的なのは主に紫外線で、薄い塵や隙間があれば守られる。ISS 外部での3年実験では D. radiodurans が対照群より良好な状態だった。Substack のため Wayback のスナップショットに基づく。

### Key Discussion Points

- **thisisauserid**: 記事によれば、微生物が10万年生存可能という確かな証拠がある。
- **shevy-java**: サイトのスクロール時にテキスト選択ができなくなるのが不満。
- **schiffern**: パンスペルミア説の計算では、星形成初期の星雲内は恒星間距離が近いことを考慮すべき。
- **themanmaran**: 記事の rDNA の塩基差が予想より小さい点について、オッカムの剃刀で解釈すべきだと述べる。

## 9. [Text.js: Build full-stack React apps that render inside console.log](https://textjs.org/)

**Score:** 29 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=50361657)

ブラウザの開発者コンソール内に描画される React のフルスタックアプリを作るフレームワーク。App Router、レイアウト・チャート・フォーム用コンポーネント、キー入力処理を備え、画面フレームの変化分を1回の `console.log` で出力する。サーバー描画、`text run` でのターミナル実行、MCP 経由のエージェント操作にも対応する。

### Key Discussion Points

- **andsoitis**: そのまま通常のターミナルアプリにも使えるのか質問。
- **hmokiguess**: 面白いが、誰がどんな用途で使うのか想像できない。

## 10. [Show HN: Coldframe, a honeypot that poses as a supermarket fridge controller](https://github.com/hedgerow-dev/coldframe)

**Score:** 11 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50406292)

2026年に欧州のスーパーの冷蔵管理装置が初期パスワードと古いファームウェアを突かれ、強制霜取りされた事件を受けた、標準ライブラリのみの Python 1ファイルのハニーポット。Danfoss AK-SM 800A と Dixell XWEB EVO を模し、弱い認証情報でのログインを成功させて偽の冷蔵ケース画面を見せ、操作をすべて記録する。

### Key Discussion Points

- **xrd**: 以前、ハッキングだとする説に対し、冷蔵ユニットの多くに同時にソフト更新が入っただけではという見方もあったと記憶している。

## Trends

- **ターミナル／低レイヤの再評価**: libghostty の ABI 安定化と採用拡大、Turbo Pascal の回顧、8ドルの RISC-V ボードなど、小さく可搬で長持ちする基盤技術への関心が高い。
- **プライバシーと所有権**: Mac の知識グラフ調査や FOSS 中心の法律事務所は、端末上のデータを誰が制御するかという同じ問いに触れている。
- **ゲーム保存と著作権**: NFSU2 のブラウザ移植や UK Web Archive は、保存と法的制約の緊張を示す。
- **セキュリティの現実**: 冷蔵コントローラのハニーポットが示す、初期パスワードの放置による被害。
