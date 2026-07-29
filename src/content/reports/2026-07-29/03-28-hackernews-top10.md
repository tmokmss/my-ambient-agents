---
title: "Hacker News トップ10まとめ（2026-07-29）"
date: "2026-07-29T03:28"
category: "summary"
summary: "Codex Securityの公開やSubstack依存への警鐘など、HNトップ10ストーリーを日本語で要約"
tags: ["hackernews", "tech-news"]
---

## 1. [Codex Security](https://github.com/openai/codex-security)

**Score:** 381 | **Comments:** 115 | [Post](https://news.ycombinator.com/item?id=49089755)

codex-security は OpenAI が公開した、コードベースの脆弱性を検出・検証・修正するための CLI ツール兼 TypeScript ライブラリで、Node.js 22+ と Python 3.10+ が必要。ChatGPT ログインまたは API キーで認証し、リポジトリのスキャンや差分レビュー、CI/CD への統合による自動セキュリティチェックが可能。Apache 2.0 ライセンスで公開されている。

### Key Discussion Points

- **dangelosaurus**: OpenAI で Codex Security の開発に携わる Promptfoo共同創業者が、OSS化への感謝と認証周りの問題指摘へのお礼を述べつつ、フィードバック歓迎と採用募集を告知している。
  - **orangelimesoda**: 求人票の要件があまりに曖昧・低いことに驚き、面接で好成績でも不採用になる採用プロセスの恣意性について愚痴っている。
  - **vladoh**: OSS化を歓迎しつつ、Codexアプリで脆弱性を発見したと言うのに詳細を教えてくれないガードレールの挙動について質問している。
  - **Quai**: 試したところレート制限で1分ほどでスキャンが止まり、約13ドル消費した上に部分出力を再開する方法が分からないと報告している。
- **gregwebs**: 小さなリポジトリでスキャンを実行したら約1時間かかった末に中断され、Proプランの週間利用枠を半分も消費してしまったと報告している。
  - **brap**: 「意図通りの動作だ」と皮肉っている。
  - **alansaber**: 「典型的だ」と一言で同意・皮肉を述べている。
  - **teaearlgraycold**: 費用を抑えるためOpenRouter経由でKimi K3やGLM 5.2を使うようハックする予定だとし、対象コードの行数を尋ねている。
- **schrodinger**: 最近のエージェント系プロジェクトがPythonやNodeではなくGoやRustで書かれる傾向にあると指摘し、開発者がNodeを選んだ理由や同様の傾向を感じているか尋ねている。
  - **kstenerud**: GoやRustはPythonやJSより言語仕様が明確でエージェントがより良いコードを書く助けになるガードレールを備えていると主張している。
  - **computerex**: Pythonは科学・データ分野など幅広い層に親しまれ入門しやすい一方、Go/Rustは軽量で配布しやすく、エージェント型コーディングの普及でより多くの人に使われるようになったと分析している。
- **mkagenius**: mitmproxyを使うペンテスターに向けて、HackerOneの公開脆弱性報告4000件から抽出したセキュリティスキルをまとめた別リポジトリを紹介している。
- **luciana1u**: AI企業が出すセキュリティツールは「放火犯が経営する消防署」のようなもので、有用ではあるが誰が火事から得をしているのか気になると皮肉っている。
  - **Quarrelsome**: その意見は、火炎放射器が蔓延る時代に防火対策を提供されて文句を言っているようなものだと反論している。
  - **oursland**: 存在する脆弱性を発見しているだけであり、公表・修正せずテストを遅らせる方が良いのかと問い返している。

## 2. [LearnVector – Andrew Ng's AI company building one‑to‑one learning experiences](https://learnvector.ai/)

**Score:** 43 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=49092499)

LearnVectorはAndrew Ng氏（Coursera共同創業者、元Google Brain）が2026年に設立したAI教育企業で、Courseraから1億ドルの出資を受けている。一律の「一対多」教育の限界を克服し、Courseraの信頼できる学習コンテンツを活用して個々の学習者に合わせた「一対一」の適応的な学習体験を提供することを目指しており、製品は2027年初頭に登場予定。

### Key Discussion Points

- **BobbyTables2**: 1億ドルもの巨額の資金調達に疑問を呈し、著名人が率いる注目のプロジェクトとはいえ、2500万ドルではなく1億ドルだからこそ今後5〜10年で可能になることは何かと問うている。
- **ryanchants**: 自身も大学院や資格試験対策向けに個人でより小規模な学習支援ツール（studyengine.app）を開発中で、資格対策や継続教育向けの再利用可能な教材に本当の製品価値があると考えているが、既存業者との競合が課題だと述べている。
- **hmokiguess**: 「一対一」とはAIと人間の関係を指すのかと疑問を呈し、それは本来の一対一とは違うのではないかと指摘している。
- **genghisjahn**: Claudeなどの LLM 向けにソクラテス式問答法のスキル（skill.md）を使い、線形代数やPostgresの難解なPDFを読み込ませて対話的に学習する方法が非常に効果的だったと紹介している。
- **isubkhankulov**: Edtechは歴史的にSaaSや広告等に比べてベンチャー投資の成果が振るわなかったが、教育への支出規模を考えればAI教育ソフトウェアが巨大市場になる可能性は十分にあり、Andrew Ng氏はそれを実現するのに適任だと述べている。

## 3. [Show HN: I was tired of opening 2 tabs for every HN link, so I made a userscript](https://github.com/twalichiewicz/HNewhere)

**Score:** 170 | **Comments:** 55 | [Post](https://news.ycombinator.com/item?id=49090607)

HNewhereは、記事を読んでいる際にその記事に関するHacker Newsの議論をサイドバーで自動的に見つけて表示するユーザースクリプト。ページを離れることなくHNのコメントを閲覧でき、サイドバーの幅記憶やコメント折りたたみ、コメントへの返信リンクなどのUI機能も備えている。Tampermonkeyなどのユーザースクリプト管理拡張機能を使ってインストールするMITライセンスのツール。

### Key Discussion Points

- **kccqzy**: 記事横でHN議論を見られる機能2は便利だが、別タブを開く機能1はウィンドウ管理の弱さの表れであり、アプリ側ではなくデスクトップ側（ウィンドウマネージャ）で解決すべき問題だと指摘している。
- **perpil**: ツールを高く評価しつつ、スクリプトファイル名を.user.jsにするとTampermonkeyでの自動インストールが楽になる点と、モバイルでサイドバーが大きすぎて最小化ボタンが見えない点を指摘している。
  - **swyx**: Chrome拡張機能に対する優位性を疑問視しつつ、Tampermonkeyの導入が参入障壁になるためChromeがユーザースクリプトをネイティブサポートしてはどうかと提案している。
- **geuis**: リンクを右クリックや長押しで新しいタブ・ウィンドウに開けば済むため、このツールが何を解決するのか理解できないと述べている。
  - **monkpit**: 自分はコメントページを開いてから記事タイトルをクリックし、読み終えたら戻ってコメントを読む方法を好んでいると回答している。
- **pluc**: FirefoxのSplit View機能を使えば同様のことができるが、リンクをクリックして分割表示にする操作が必要だと説明している。
  - **monkpit**: 「左クリックでは？」と簡潔に問い返している。
  - **devsda**: Firefoxのsplit viewは便利だとしつつ、Vim系拡張機能がリンク+分割操作に対応すればさらに良いと述べている。
- **abudooboo**: このスクリプトが訪問する全ページでhn.algolia.comにURL・クエリ文字列・フラグメントを送信してしまうプライバシー上の懸念を指摘し、手動トリガーへの変更やクエリのサニタイズを提案している。
  - **twalichiewicz**: 作者本人が対応を検討中であるとし、関連するGitHub Issueへのリンクを提示している。

## 4. [Half-Life ported to Mac OS 9](https://mac-classic.com/news/half-life-ported-to-mac-os-9/)

**Score:** 174 | **Comments:** 86 | [Post](https://news.ycombinator.com/item?id=49089814)

GitHubユーザーのdoctashayが、GoldSrcエンジンを再実装したXash3D FWGSを改造し、Half-LifeをMac OS 9(PowerPC G3/G4)向けに移植した。本編に加えBlue Shift、Opposing Force、Uplinkデモやマルチプレイも収録されているが、VRAMが少ない旧型iMac/iBookなどでは性能面で苦しい場合があるという。Valveは1999年にMac OS 9版を計画していたが発売直前に中止しており、公式のMac対応は2013年のOS X版まで実現しなかった。

### Key Discussion Points

- **amatecha**: 子供の頃にCrackDotComの流出ソースから作られた非公式Quakeポート「HackQuake」をSystem 7で遊んだ経験を語り、Half-Lifeも本来もっと早くMacに移植できたはずだと述べている。
  - **EPWN3D**: PowerPC専用のはずのTIE FighterがLucasArtsの手違いで68kスライスも含んでおり、非対応のQuadra 610でも動かせたという逸話を紹介している。
  - **tekchip**: 時間とリソースさえあればソフトウェアは無限に柔軟だという点に同意している。
- **wk_end**: GoldSrcエンジンのオープンソース版であるXash3Dが2011年から存在していたことに驚いたと述べている。
  - **manytimesaway**: Xash3Dは流出・逆コンパイルされたコードが元であり、ビルドには今も非公開のHLSDKが必要なため厳密にはオープンソースとは言えないと反論している。
- **xp84**: AIコーディングツールの登場により、OS9やWindows 2000、NeXTStepなど「時代遅れ」とされたプラットフォームが日常利用可能なレベルまで復活するかもしれないと推測している。
  - **itomato**: NeXT/OpenstepやRhapsodyの拡張、XNU・初期Darwinの解析など、ChatGPTなども活用しつつ行われているレトロOS関連の活動を紹介している。
  - **CursedSilicon**: レトロ界隈ではAI利用への抵抗が強く、このHalf-Life移植もDiscordでの開発者とのやり取りからLLMを使わずに行われたと述べている。
  - **ColdStream**: フレームバッファを持たないNeo GeoへのDoom移植がAIを活用してかなりうまく進んでいる例を挙げ、その難易度の高さを指摘している。
- **gilgoomesh**: 2000年にLogicware/MacPlayが公式Mac OS版Half-Lifeを開発していたが、Valveの判断で発売直前に中止された経緯を、当時の記事や開発者Rebecca Heinemanのインタビューとともに紹介している。
  - **rufo**: 当時十代でこの中止に憤慨した経験を振り返りつつ、Gabe Newellが語った「Mac顧客を二流扱いしたくない」という理由には大人になった今では一定の理解を示している。
  - **ColdStream**: Rebecca『Burger』Heinemanが業界の光と影の両方を見てきた人物だとコメントしている。
- **hedgehog**: この移植の時代設定は1998〜99年登場のiMac G3/DVとほぼ一致しており、印象的な移植作業だと評価している。
  - **mikestorrent**: OS X以前のOSを動かすiMacには違和感があり、筐体デザインがOS Xの見た目に強く影響を与えたのではないかと指摘している。
  - **walrus01**: 当時のG3 iMacの3D性能は同時代のTNT2やVoodoo2搭載PCに比べてかなり弱く、事務用寄りだったと説明している。

## 5. [Chip stocks slide in US and Asia as AI jitters rattle investors](https://www.bbc.com/news/articles/cly8zng43npo)

**Score:** 17 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=49092549)

半導体関連株が米国とアジアの市場で下落し、AIブームへの過熱感や投資バブルへの懸念が投資家の間で広がっていることを報じる記事。AI関連の設備投資の急拡大に対する市場の不安（AIジッター）が株価下落の背景にあるとされる。

### Key Discussion Points

- **elliotec**: AI投資への過熱が沈静化し、より賢明な方向に進む「調整」の始まりであることを控えめに期待しており、これによりRAMの価格も落ち着くのではと述べている。
- **apparent**: AI関連株の高騰と半導体不足で打撃を受けてきた企業にとって、これは朗報なのではないかと疑問を投げかけている。
- **sandworm101**: 企業が今後、資金不足を理由に融資保証を求め、結果として価格上昇が続くだろうと皮肉り、DDR5メモリの購入者にも株式配当があるべきだと風刺している。

## 6. [Substack writers, you need a website](https://elizabethtai.com/2026/06/10/substack-writers-you-need-a-website/)

**Score:** 438 | **Comments:** 215 | [Post](https://news.ycombinator.com/item?id=49086788)

著者はSubstackなどのプラットフォームだけに依存する書き手は「テナント」に過ぎず、企業側の方針転換やアカウント停止のリスクを常に抱えていると指摘する。FacebookからMedium、Substackへと乗り換えを繰り返してきた歴史を踏まえ、「自分のサイトで公開し、他プラットフォームへ配信する（POSSE）」戦略を推奨し、28年間ブログを維持するJohn Scalziの例を挙げてコンテンツの永続性の重要性を説く。

### Key Discussion Points

- **simonsarris**: Substackは配信・決済・コミュニティ機能を提供し手数料以上の価値があるとしつつ、自分のサイトは連絡先など恒久的情報の置き場として重要だが、SNSを失う方が痛手だと述べている。
  - **jonahx**: SNSの巨大さは真の有用性よりも先行投資によるネットワーク効果によるものだと反論している。
  - **jdthedisciple**: Substackで始めるのがどれくらい大変だったか、新規書き手への可視性はあるのかと質問している。
  - **smashah**: WikidataやISNIの情報をSubstackのリンクと合わせて最新に保つよう勧めている。
- **skippyfish**: 何十年もネット発信してきた経験から、個人サイトには誰も来ないため読者に届けるプッシュ手段が必要であり、Substackの価値はメールという退避可能な購読者リストにあると主張している。
  - **billyp-rva**: Substackも将来的に他プラットフォームのようにリーチを制限し始めるのではないかと懸念している。
  - **throw0101d**: 独自ドメインを持ちつつSubstackの投稿エクスポート機能で定期的にバックアップし、WordPressなどへ移行できるようにすべきだと述べている。
  - **zahlman**: 購読やメール登録なしに読んでもらいたい場合はどうすればよいか、通知メール自体の必要性に疑問を呈している。
- **simonw**: 自分のブログを一次情報源としつつ週1回Substackにコピペしてメール配信（購読者6.6万人）に利用しており、そのための自作ツールも公開していると説明している。
  - **sebastiennight**: ブログ側で直接購読を取れず摩擦が増えることや、SEOでSubstackにトラフィックを奪われないか疑問を投げかけている。
  - **rsingel**: 同じことはAPIを持つGhostでも可能であり、Substackは問題ある人物を掲載していると批判している。
  - **drdexebtjl**: 6.6万人規模ならSESとVPSで月50〜80ドル程度で運用できると試算している。
- **schlagetown**: 自身はAT ProtocolベースのパブリッシングアプリLeafletの共同開発者で、Standard.siteという相互運用標準により自サイトでもコンテンツ所有権と発見性を両立できると紹介している。
  - **dirkc**: standard.siteにアクセスするとCloudflareの502エラーが出ると報告している。
  - **orthecreedence**: WriteFreelyとの違いを尋ね、AT Protocol採用が主な差異だと自ら気づいている。
  - **cpill**: RSSをもう一度流行らせられないかと述べている。
- **thataccount**: AIによる無断学習を嫌って今年個人サイトを閉鎖し、StripeなどへのSPOF依存からSubstackのようなサービスを嫌う一方、中立的な決済手段の不在を課題として挙げている。
  - **01284a7e**: 25年間のウェブ執筆で相当な収入を得たが、近年はトラフィックの9割以上がボットになったため全サイトを閉鎖したと語っている。
  - **sfRattan**: 本当のボトルネックはStripeより上流の決済処理業者やKYC規制にあり、自前ブログでも同じ壁にぶつかると指摘している。

## 7. [Truth is not a direction: a Tarski attack on LLM probes](https://abeljansma.nl/2026/07/10/truth-is-not-a-direction.html)

**Score:** 33 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=49069033)

この記事は、LLMの内部表現における「真実」を単一の方向ベクトルとして捉える線形表現仮説に対し、タルスキの真理定義不可能性定理を応用した批判を展開している。「真理プローブがこの文をFALSEと評価する」という自己言及的な文を用いた対角線論法により、モデル自身の出力を記述できるほど表現力豊かな言語に対しては、真理を完全に捉える定義可能なプローブは存在し得ないことを示す。ゲーデルの不完全性定理後も数学が発展したように、真理プローブは実用上依然として有用だと結論づけている。

### Key Discussion Points

- **Legend2440**: この記事は前提を行き過ぎて拡大解釈しており、真理ベクトルに期待されるのは完璧な真理オラクルではなくモデル自身の信念を捉えることだと主張している。
- **aesthesia**: 真理プローブの目的はモデルの内部的な真偽判断を測定することであり、たとえ100%正確に測定できてもその判断自体が誤りや論理的矛盾を含みうると指摘している。
- **ziofill**: 99.99%の精度を持つ方向ベクトルであればこの論証を完全に乗り越えられ、実用上は完全性(totality)は不要だと述べている。
- **TZubiri**: 真と偽の否定関係にとどまらない「パラドックス」という第三のカテゴリを設けることで自己言及文を扱えるのではと提案しつつ、形式論理の厳密化より非形式的なアプローチの方が真実に近づけると考えている。
- **Vecr**: MIRIの誰かはこの問題の解決法を知っているはずだが、それを教えてもらうのは難しいだろうと皮肉交じりにコメントしている。

## 8. [Teach yourself programming in ten years (1998)](https://www.norvig.com/21-days.html)

**Score:** 66 | **Comments:** 23 | [Post](https://news.ycombinator.com/item?id=49055816)

Peter Norvigによる有名なエッセイで、プログラミングの熟達には「24時間で学べる」といった触れ込みとは異なり、約10年間の継続的な「意図的な練習」が必要だと主張する。チェスや音楽など他分野の研究例を挙げつつ、実際にコードを書き、失敗から学び、他のプログラマーと協働しながら複数のパラダイムの言語を学ぶことの重要性を説く。表面的な知識ではなく、内発的な興味に支えられた長期的な実践こそが真の実力を生むというのが結論である。

### Key Discussion Points

- **yoyohello13**: AIの登場によりプログラミング言語を学ぶ楽しみが失われ、技術力を磨くこと自体が無意味に感じられるようになったと嘆いている。
- **tomhow**: このエッセイが過去にも何度もHacker Newsで取り上げられてきたことを示し、過去の投稿へのリンクを列挙している。
- **throwaway17_17**: このエッセイとEric Raymondの「ハッカーになる方法」が自分のプログラミング学習の原点であり、AIの台頭で今後の学習者が同様の動機付けを得にくくなることを懸念しつつも、意欲ある学習者は本質を見抜くだろうと述べている。
- **axus**: AIトークンに費用をかけて修正するより自分で直した方が速くて安い場合もあり、学習コストに見合う節約になるか疑問だと指摘している。
- **markus_zhang**: 多くの記事が触れない点として、10年間燃え尽きずにプログラミングを続けるための精神的安定の重要性を挙げ、自身が現在燃え尽き状態にあると告白している。

## 9. [Hubble: Open-source notetaking app for you and your agents](https://www.hubble.md/)

**Score:** 56 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=49091730)

Hubble.mdは無料のオープンソースノートアプリで、「あなたとあなたのエージェントのための最良のノートパッド」を謳っている。マークダウンとHTMLに対応し、タグや分類機能を備えつつ、人間向けのReact UIとAIエージェント向けの.mdファイル直接編集という二重インターフェースを特徴とする。人間とAIエージェントが協働してノートを管理することを想定した設計になっている。

### Key Discussion Points

- **flippyhead**: ランディングページの情報量が少なく、数多くの類似ノートアプリの中でなぜこれを選ぶべきかの説明が不十分だと指摘している。
- **egeozcan**: 自作のノートツール(mahpastes)を紹介し、REST API、CLI、Luaプラグイン対応などの豊富な機能を持つと説明している。
- **Brajeshwar**: 無限キャンバス型のtldrawをClaude Codeと組み合わせて使っており、テキストはMarkdownファイルでLLMとやり取りしていると述べている。
- **firasd**: 人間向けReact UIとエージェント向け.md編集という二重インターフェースは今後のソフトウェア設計のトレンドになりそうだと評価している。
- **ernsheong**: 自分のエージェントにはプロジェクトディレクトリ内のシンプルな.mdファイルだけで十分だと述べている。

## 10. [Multiple Mouse Cursors in Wayland](https://blinry.org/multi-seat-wayland/)

**Score:** 30 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=49092112)

筆者は3週間かけてLinux/Wayland環境で複数のマウスを同時に使い「マルチシート」的に複数カーソルを表示する仕組みを調査・実装した。Waylandプロトコルにはwl_seatを介して入力デバイスを分離する仕組みが既にあり、sway・Weston・Riverなど複数のコンポジタを検証しつつ、GTK・SDL・LÖVEなどのツールキットを拡張してマルチシート対応アプリのプロトタイプを作成した。さらにwayvncの「transient-seat」機能を使い、複数人が同時にリモート操作できるコラボレーション環境も構築した。

### Key Discussion Points

- **kelnos**: 自作コンポジタでマルチシート対応を最初から意識しているが、シングルシートを前提とした箇所が多く実装は想像以上に大変だと述べている。
- **ben-schaaf**: この仕組みはGTKのgtk_application_get_active_windowやQtのQApplication::activeWindowなど、ウィンドウのフォーカスは常に一つという前提を壊してしまうと指摘している。
- **evertheylen**: ノートPCのタッチスクリーンと通常カーソルの併用のように複数入力の共存は珍しくなく、X.orgはそうしたケースをうまく扱えなかったと述べている。
- **QuaternionsBhop**: この機能は面白いアイデアで、実現可能であることからWaylandのプロトコル開発者たちも当初から想定していたはずだと述べている。
- **jauntywundrkind**: Web上ではPointerEventsやタッチイベントが既に複数カーソル（複数ポインタ）をサポートしていると、MDNのドキュメントを挙げて紹介している。

## Trends

- **AIブームへの過熱感と揺り戻し**: OpenAIのCodex Security公開や半導体株下落のニュースが並び、AI投資の急拡大とそれに対する市場・開発者双方の懐疑的な視線が同時に見られる。
- **プラットフォーム依存からの脱却志向**: Substack依存への警鐘やHNewhereのようなブラウジング体験改善ツールなど、大手プラットフォームに縛られず自分でコンテンツやワークフローをコントロールしたいという欲求が共通のテーマとして表れている。
- **AIとエージェントを前提としたツール設計**: Hubbleの「人間+エージェント」二重インターフェースやLLM活用のレトロOS移植など、AIエージェントとの協働を前提にしたソフトウェア設計が新たな潮流になりつつある。
- **技術的懐古趣味とオープンソースの底力**: Half-Life のMac OS 9移植やWaylandのマルチシート実装など、既存プロトコル・エンジンの再解釈によって新しい体験を生み出す草の根の技術的探求が引き続き人気を集めている。
