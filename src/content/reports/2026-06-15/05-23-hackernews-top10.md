---
title: "Hacker News トップ10 サマリー（2026年6月15日）"
date: "2026-06-15T05:23"
category: "summary"
summary: "薪割りシミュレーターが720点で首位、KageのWebオフライン保存やリオLLM偽装疑惑も話題"
tags: ["hackernews", "tech", "opensource", "llm", "emacs", "epub"]
---

## 1. [Firewood Splitting Simulator](https://screen.toys/firewood/)

**Score:** 720 | **Comments:** 225 | [Post](https://news.ycombinator.com/item?id=48471638)

3DインタラクティブなWeb上の薪割りシミュレーター。クリックで薪を割り、ドラッグで視点を回転させるだけのシンプルな「スクリーントイ」として、AIや技術重視の議論が続くHN上で清涼感をもたらし最多ポイントを獲得した。Goat Simulatorと同じ意味での「シミュレーター」であり、本格的な再現性よりも気軽な楽しさを目的としている。

### Key Discussion Points

- **CamouflagedKiwi**: 楽しいが現実とは違う。実際は割れた木が両脇に飛ぶし、疲れが伴う—これでは疲労感が再現されていない
  - **neilv**: 初心者向けに「翌朝使ったことのない筋肉が痛む（確率25%）」メカニクスを追加すべき
  - **helterskelter**: 薪割りには意外なほど技術と知識が必要。75歳の熟練者がジム通いの若者より速い
- **bicx**: みんな混乱している。これはGoat Simulator的な「シミュレーター」で、screen.toysというコレクションの気軽なおもちゃ
  - **binoct**: 朝一番に見て喜んだが、コメント欄に入るべきではなかった
  - **pranavm27**: HNらしい反応をしているHN
- **wartywhoa23**: AIの話ばかりの中でこういうHNが好き。技術偏重へのグチ、現実体験の共有、清涼感がある
  - **tylerrobinson**: 作者のInstagramには#vibecodingのタグ。まあ素敵なおもちゃ
  - **lukan**: AI未使用の保証はないけれど、それでも良いものだと思う
- **MatthiasWandel**: 薪割りの難しさは「どこを割るか」ではなく「割る行為の実行」。節を避ける、斧が食い込んだ時の対処、斧の柄への衝撃—いずれも再現されていない
  - **hasgarion2600**: そのドメイン専門家は薪割りゲームを何本作ったの？
  - **bsiverly**: 4歳の子供が気に入った。内なる子供をもっと大切に
- **troyvit**: Piers Anthonyの短編—少年が木の道具で遊んでいたらエイリアンに誘拐されて銀河木割り大会に参加する話を思い出した
  - **conception**: The Last Starfighter（ビデオゲーム版）も同じプロット

---

## 2. [Show HN: Kage – Shadow any website to a single binary for offline viewing](https://github.com/tamnd/kage)

**Score:** 472 | **Comments:** 99 | [Post](https://news.ycombinator.com/item?id=48529990)

KageはヘッドレスChromeでウェブサイトをレンダリングしてJavaScriptを除去し、全アセットをローカライズしてオフライン閲覧可能なZIMファイルや単一実行バイナリにパックするツール。サイト全体をミラーリングできる点がSingleFileなど既存ツールとの違いで、paulgraham.comの全エッセイを丸ごとオフラインで保持するような用途を想定している。

### Key Discussion Points

- **simonw**: READMEのデモGIFが同作者の別プロジェクト「ascii-gif」で生成されていることを発見。VHSのラッパーだった
  - **vqtska**: アニメーションSVGはテキストベースのキーフレームなのでGIFより遥かに軽量
  - **jubilanti**: ターミナルの救世主asciinemaも良いよ
- **wolttam**: 社内Wikiのオフラインアクセスに使えそう。圏外の現場でドキュメントを持ち歩ける。サーバープロセス不要のHTML+JSシムがあると尚良い
  - **tamnd（作者）**: MarkdownへのHTMLコンバーターを作ってGitリポジトリに入れることも考えている
- **ninalanyon**: `kage serve`が必要なら、なぜブラウザで直接開けないのか？
  - **tamnd（作者）**: `python -m http.server`で代替可能。Kageにはクローラーとパック/サーブの2コンポーネントがある
- **maxloh**: SingleFileの方が堅牢。JSを除去し、バイナリをbase64化して単一HTMLファイルにまとめる
  - **tamnd（作者）**: SingleFileは1ページのみ。Kageはサイト全体をミラーリングする
- **telesilla**: 以前はhttrackを使っていたが、これを試してみたい
  - **throwaway219450**: WikiならKiwixを使う方が良くないか？ZIMファイルとデスクトップリーダーが揃っている

---

## 3. [Your ePub Is fine](https://andreklein.net/your-epub-is-fine-kobo-disagrees-blame-adobe/)

**Score:** 352 | **Comments:** 144 | [Post](https://news.ycombinator.com/item?id=48533848)

作者が書いたEPUBファイルは業界標準の検証ツール「epubcheck」を完全に通過したにもかかわらず、Koboデバイスに「破損している」と弾かれた。原因は1行のモダンCSS（`max-width: min(150px, 30vw)`）で、KoboのレンダリングエンジンであるAdobe RMSDKがCSS対応を2013年頃で止めていたため。ePubは優れたオープン標準だが、実装側が足を引っ張っているという批判を呼んだ。

### Key Discussion Points

- **acdha**: AdobeはFlash時代から同じ体質。バグを報告しても無視され、次のバージョンリリースで自動メールが届くだけ。品質への投資を惜しんで全ブラウザメーカーを敵に回した
  - **m348e912**: Steve JobsのiPhoneからFlash排除の決断がその終焉を劇的に早めた
  - **pmarreck**: FlashはVideoWorksと呼ばれていた頃の方が良かった（初期Mac専用ソフトだった）
- **nfw2**: Adobe RMSDKへのアクセスを得ようとしたが完全に不可能。ウェブサイトのメールは無反応、内部情報も追えない。これは独占禁止法的な問題では
  - **stonecharioteer**: 同じ問題で開発中。話を聞かせてほしい
- **lidavidm**: `.kepub.epub`という拡張子にするとKoboの高度なレンダリングエンジンが使われる。kepubifyを通してから転送している
  - **louisbourgault**: Standard Ebooksも同様の問題を指摘、KoboからAdobe製リーダーを除去するだけで完璧になると主張
- **tannhaeuser**: epubcheck自体も問題がある。W3CがEPub 3.2の仕様でWHATWGの生ける標準を参照したため、既存のEPubが非準拠になった。CalibreがEPub 3.1または2を推奨するのはそのため
- **hardwaresofton**: 代替としてPineNoteデバイスを紹介（より高価・開発者向け、しかし紐なし）
  - **ndiddy**: PineNoteは$400で開発者専用。KoboでもKOReaderをサイドロードできるので選択肢はある

---

## 4. [Rio de Janeiro's 「homegrown」 LLM appears to be a merge of an existing model](https://github.com/nex-agi/Nex-N2/issues/4)

**Score:** 311 | **Comments:** 163 | [Post](https://news.ycombinator.com/item?id=48528371)

リオデジャネイロ市のIT企業IplanRIOが「独自開発」として公開したLLM「Rio-3.5-Open-397B」が、実際にはNex-N2 Pro（60%）とQwen3.5-397B-A17B（40%）の単純な重み付きマージであることをGitHub Issueが指摘。全60レイヤーにわたって0.6/0.4の一定ブレンド比が確認された。世界杯でのブラジル初戦と重なりバズったが、市長がパフォーマンスに利用した側面もあると分析される。

### Key Discussion Points

- **rafaquintanilha**: Qwen基盤の開示はあったがNexについての言及がなかった。週末にブラジルのW杯初戦と重なってバイラルになり、市長が便乗しただけで研究者とは無関係の可能性
  - **throwa356262**: 追加情報へのリンク
  - **matheusmoreira**: 「リオデジャネイロのLLM」というHNの見出しは生涯で予想しなかった
- **hintymad**: 全ての重みの単純な線形結合でモデルの性能が劣化せず向上したことは驚異的
  - **itkovian_**: これはLinear Mode Connectivityと呼ばれ、大型モデルでほぼ必ず機能する。明示的に訓練に組み込まれることも。なぜ機能するかは未解明
  - **Aurornis**: 「向上」したのはベンチマーク上だけ。特定テストのためにチューニングされたモデルは他の用途では劣化することが多い
- **unrvl22**: Nex-N2 Pro 60% + Qwen3.5-397B 40%のマージと主張
  - **DonsDiscountGas**: モデルマージがこれほど有効だとは知らなかった
  - **Lucasoato**: Qwenへの帰属漏れではなく、Nex-N2 Proに言及しなかったことが問題では？
- **zinodaur**: 「帰属なしに他者の仕事から利益を得るとは！？」（皮肉）
  - **Aurornis**: オープンウェイトモデル同士のマージ。問題はポストトレーニングを行ったと偽った点
  - **s1artibartfast**: 政府機関が何もしていないのに仕事をしたと主張するのと同じ
- **jordz**: モデルマージとは数学的なウェイトブレンドか、それとも蒸留か？
  - **calebkaiser**: ウェイトを数学的にブレンドする技術。2年前「Frankenmodels」として流行。abliterationなどと同じカテゴリ

---

## 5. [Show HN: Trace – Offline Mac meeting transcripts you can flag mid-call](https://traceapp.info)

**Score:** 131 | **Comments:** 52 | [Post](https://news.ycombinator.com/item?id=48521236)

TraceはmacOS向けのオフライン会議録音・文字起こしアプリ。グローバルショートカット1つで起動し、マイクとシステム音声を別トラックで録音・話者分離して、全処理をデバイス上で完結させる。会議中にショートカットで「重要なポイント」にタイムスタンプ付きメモを残せる機能が差別化要素で、App Storeで£9.99の買い切り価格で販売。

### Key Discussion Points

- **blopker**: MacWhisperは現在バグだらけ。クラッシュ時の録音消失・WAVファイルのディスク逼迫・マイクのブリードによる二重転写が未解決の業界共通問題
- **tillcarlos**: 購入済み。マイクの自動切替、ホットキーなしでメニューバーアイコンのみのオプション、インストーラーへのモデルダウンロード組み込みを希望
- **addozhang**: 理想的なプロダクトだが会社Macへのインストールが許可されていない
- **fandorin**: 買い切り価格の選択を評価。ホームページのデモ動画・GIFはどのツールで作ったか気になる
- **nightpool**: 2者同意が必要な州での法的問題はどうなるか？ZoomやMeetが同意画面を設けているのはそのため

---

## 6. [Even more batteries included with Emacs](https://karthinks.com/software/even-more-batteries-included-with-emacs/)

**Score:** 61 | **Comments:** 13 | [Post](https://news.ycombinator.com/item?id=48535886)

Emacsに標準搭載されているが見落とされがちな機能を20個紹介するシリーズ第3弾。`dictionary-tooltip-mode`（ホバーで辞書）や`undelete-frame-mode`（閉じたフレームの復元）など、外部パッケージ不要で使えるツールを5分以内で習得できる形式で解説する。

### Key Discussion Points

- **QwenGlazer9000**: Doom Emacsを使っていて安定している。NeoVimのエコシステムと比べるとEmacsの方が落ち着いており、メンテナーが破壊的変更をシールドしてくれている
- **mintflow**: ruler-modeを初めて知った。20年近いEmacs歴でもテキストスケーリングのキー操作が難しい
- **tptacek**: 1994年（Lucid Emacs）から使っているが、Diredをいまだに理解できていない
- **buzzwords**: Orgmodeが好きだったが、更新のたびに壊れて直すのに疲れ諦めた
- **gnulinux**: 2010年からEmacs使用。最大の問題はパッケージ間の相互干渉による不安定性。2024年からVSCodeと併用している

---

## 7. [Bitsy](https://bitsy.org/)

**Score:** 94 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=48496290)

Bitsyは小さなゲームやインタラクティブな物語体験を作るための軽量ゲームエンジン。itch.ioにコミュニティが形成されており、詩的・物語的な作品が多い。シンプルな設計が特徴で、テキストや機能が増えると制作が難しくなる。

### Key Discussion Points

- **flymasterv**: PlaydateのPulpも似たコンセプトのゲーム制作ツール
- **hankbond**: itch.ioで遊ぶと詩・物語系が多い。もっとゲーム的な要素のある作品を教えてほしい
- **alaskahoffman**: 去年の夏にBitsyでゲームを作った。楽しいエンジンだが、テキストや機能が増えると辛くなる

---

## 8. [21 years and counting of 'eight fallacies of distributed computing' (2025)](https://blog.apnic.net/2025/12/08/21-years-and-counting-of-eight-fallacies-of-distributed-computing/)

**Score:** 47 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=48534628)

Sun Microsystemsが提唱した分散コンピューティングの8つの誤謬（「ネットワークは信頼できる」「レイテンシはゼロ」「帯域幅は無限」「ネットワークはセキュア」など）が21年後も依然として有効であることを再確認するAPNICブログの記事。ネットワーク設計者が陥りがちな楽観的思い込みは現代でも変わっていない。

### Key Discussion Points

- **randfur**: 人々は本当にこれを信じているのか、単にアプリの対象範囲外として放置しているだけか？
- **jrpelkonen**: 実際のレイテンシは10年……このペーパーは確か1994年に出たはず
- **zephen**: リストは間違っていないが、物理が追いつくと楽観視した方が多くの富を生んできた歴史がある

---

## 9. [Why does paper fold so well?](https://www.bbc.co.uk/programmes/w3ct8k70)

**Score:** 8 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=48520596)

紙がなぜうまく折れるのかを物理学の観点から解説するBBCポッドキャストエピソード。折り紙の物理に興味がある人向けのショート番組。

### Key Discussion Points

- **zeristor**: 折り紙の紙の物理に関する素敵な小番組

---

## 10. [Prove you're human by winning a claw machine](https://feralui.vercel.app/#/captcha)

**Score:** 27 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=48503806)

クレーンゲームをプレイして人間であることを証明するという、物理ベースのReactコンポーネントを使ったユニークなCAPTCHAの試み。FeralUIというphysics-drivenなUIライブラリの一部として公開されている。

### Key Discussion Points

- **mcyg**: Lichessはチェスのチェックメイトパズルで人間確認する仕組みがあり、可愛いと思う
- **spaqin**: 人間であることを証明し続けることへの疲れ。表面上は楽しそうに見えても、インターネットの劣化を感じる
- **bschwindHN**: 掴む対象が常に最前面レイヤーにある。AIに容易に突破されそう。クローの物理挙動もおかしい
- **pinkmuffinere**: 人間とAIを本当に区別できるという根拠がAbout pageに全く示されていない
- **BLKNSLVR**: 2回試して2回成功した。普通のクレーンゲームとは別物

---

## Trends

本日のHNトップ10から見えるいくつかのテーマ：

1. **AIへの疲れと反動**: 薪割りシミュレーターが720点で首位を獲得したのは「AIの話ばかり」に対する清涼感の表れ。CAPTCHAの話題でも人間確認への疲弊感が漂う。

2. **オープンソースとオフライン志向**: KageやTraceはいずれも「完全オフライン」「プライバシー重視」「データをアップロードしない」を強調。クラウド依存に対する反動が続く。

3. **LLM界隈の信頼性問題**: リオのLLM偽装疑惑は、モデルマージを独自開発と偽る可能性を示した。「Frankenmodels」が政府機関のPRに使われるリスクが可視化された。

4. **古典的知見の再確認**: 分散コンピューティングの8つの誤謬（1994年）やAdobeの閉鎖的体質など、数十年前の問題が今も解決されていないことへの嘆きが共通して見られた。

5. **エコシステムの成熟と複雑化**: EmacsもEPub標準も、仕様の肥大化・パッケージ間の相互干渉・レガシー実装の混在により、「正しいものが動かない」問題が頻発している。
