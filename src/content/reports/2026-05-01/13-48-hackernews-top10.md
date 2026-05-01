---
title: "Hacker News トップ10 ダイジェスト（2026年5月1日）"
date: "2026-05-01T13:48"
category: "summary"
summary: "NSA内部告発、Linuxカーネルの脆弱性開示問題、Grok 4.3リリース、AppleのClaude.md流出など注目トピック10件"
tags: ["hackernews", "security", "ai", "open-source", "linux"]
---

## 1. [How Mark Klein told the EFF about Room 641A](https://thereader.mitpress.mit.edu/the-whistleblower-who-uncovered-the-nsas-big-brother-machine/)

**Score:** 641 | **Comments:** 215 | [Post](https://news.ycombinator.com/item?id=47965060)

AT&T技術者のマーク・クラインが、NSAがサンフランシスコのAT&T施設「Room 641A」でインターネットトラフィックを大規模に傍受していた実態をEFFに告発した経緯を描いたMIT Press書籍の抜粋。9/11後にNSAの「ビッグブラザーマシン」と呼ばれる監視インフラが構築された舞台裏が明かされており、対象は外国人だけでなくアメリカ市民の通信も含まれていた。クラインは80歳で最近癌により死去しており、コミュニティは彼を「真のアメリカの英雄」と追悼している。

### Key Discussion Points

- **kstenerud**: 監視インフラが「機密指定されているかどうかわからない」という状況の問題点を指摘。機密指定されていれば証拠を持つ側が逆に訴追されるリスクがあると述べた。
  - **torh**: 「逆免罪符のようなものだ。相手があなたへの証拠を持っている？機密文書と宣言すれば、あなたの代わりに相手が刑務所に行く」と皮肉を込めてコメント。
  - **crossroadsguy**: そのNDAは本当に法的拘束力を持つのか、「意図しない受信者への警告メール」的なものではないかと疑問を呈した。
- **anonymousiam**: 9/11以前の「ウォール（壁）」、すなわちNSAの海外監視とFBIの国内捜査を分離するルールが、1990年代初頭から少なくとも10年間にわたって日常的に破られていたと主張。自身は政府のNDAにより沈黙していたとも語った。
  - **hackthemack**: イギリスがアメリカ人を監視し情報をNSAに提供するECHELONプログラムにより、NSAが直接監視できない制約を回避していたと指摘。
  - **timschmidt**: 「パラレル・コンストラクション」（秘密プログラムで得た情報を正規の証拠として偽装する技法）についてもHN読者は知るべきだと強調。
- **anildash**: EFFボードメンバーとして、本書の購入がEFFのプライバシー保護活動への支援になると紹介。
  - **Barbing**: 書籍からの引用として「プライバシーはコントロールのためのものであり、権力へのチェック機能でもある」という言葉を共有した。
- **badlibrarian**: 2002年にロサンゼルスのデータセンターでサーバーを管理していた際、不審な新規建設と光ファイバーケーブルの束を目撃した体験談を披露。
  - **ProllyInfamous**: 「公式には存在しない」とされていた技術が実際に稼働していたと証言し、「Black, LLC」という謎のクライアントに言及。
  - **dr_dshiv**: 「それって…何?? 技術的な隠語？」とユーモアを交えてコメント。
- **rsingel**: 「NSA-Hepting訴訟の舞台裏として素晴らしい内容だ。RIP マーク・クライン。有名になろうとしなかった真の英雄。」と哀悼の意を表した。
  - **bsimpson**: 「80歳まで生きて最近癌で亡くなったようだ。想像していたより良い結末だった」と追記。

---

## 2. [For Linux kernel vulnerabilities, there is no heads-up to distributions](https://www.openwall.com/lists/oss-security/2026/04/30/10)

**Score:** 548 | **Comments:** 454 | [Post](https://news.ycombinator.com/item?id=47965108)

oss-securityメーリングリストへの投稿で、Linuxカーネルの脆弱性CVE-2026-31431（"CopyFail"）について、ディストリビューションへの事前通知が一切なかった問題を取り上げている。Linuxカーネルのセキュリティチームは、報告者が自主的にlinux-distrosメーリングリストに連絡しない限り、ディストリビューションへの通知義務がないという構造的な問題が浮き彫りになった。Greg KH曰く「誰かに事前通知することは許可されていない、さもなくば全員に全てを伝えなければならなくなる」とのこと。

### Key Discussion Points

- **xeeeeeeeeeeenu**: パッチ適用前に脆弱性とエクスプロイトを公開したことを「極めて無責任」と批判し、共有ホスティング環境での被害を懸念した。
  - **john_strinlai**: Googleのゼロデイポリシー（パッチ後30日で公開）を支持しつつ、「報告者がすべてのダウンストリームに個別連絡する責任を負うべきではない」と述べ、カーネルセキュリティチームとディストリビューションの直接連絡チャネルの必要性を訴えた。
  - **zamalek**: この開示はセキュリティよりマーケティングを優先しており、「Xint Code」製品の宣伝目的があったと指摘した。
- **semiquaver**: 脆弱性報告者ではなくLinuxプロジェクト側がディストリビューションへの通知責任を負うべきだと主張。
  - **sega_sai**: 「報告者のサイトにUbuntu/RHEL/SUSEが影響を受けると明記しているなら、少なくともそれらのセキュリティチームには事前に連絡すべきだった」と指摘。
- **iTokio**: Greg KHの「事前通知は許可されていない」という発言を引用し、カーネル側の構造的問題を浮き彫りにした。
  - **whateverboat**: 「Linuxが好きとはいえ、これは馬鹿げている」と一刀両断。
- **whatevaa**: 「報告者を責めるな。カーネルにプロセスの改善を求めろ。Linuxカーネルはもはやホビープロジェクトではなく、大企業の正社員が開発している」と主張した。
  - **pamcake**: 「特定のディストリビューションを被害者として名指しするなら、公表前に通知するのは当然だ」と述べた。
- **GranPC**: AF_ALGがカーネルに直接組み込まれている環境向けに、eBPFベースの回避策を公開。本番環境で実行中で副作用なしと報告した。

---

## 3. [Grok 4.3](https://docs.x.ai/developers/models/grok-4.3)

**Score:** 197 | **Comments:** 250 | [Post](https://news.ycombinator.com/item?id=47972447)

xAIがGrok 4.3を正式リリース。ドキュメントページは現在404だが、コメントによればX（旧Twitter）の大量データで学習した強みを活かし、自然な文体のトーンマッチングや音声認識の精度で高評価を得ている。AIモデル市場の競争激化のなか、Claude・GPT・Geminiとの差別化が活発に議論された。

### Key Discussion Points

- **sundarurfriend**: 「他のモデルとは異なる方法で人間の言語の微妙さを捉えている」と絶賛し、音声認識入力での精度98%を報告した。
  - **michaelbuckbee**: 3モデルを比較評価したところ全体的に同等だったが、「カジュアルなトーンで嫌な感じがしなかったのはGPT-4.1だけ」と指摘。Grokは速度とコスト効率が高く、Claudeは最も遅く高価だったと述べた。
  - **djyde**: 「母国語で話しかけると他のモデルより自然なトーンになる。Twitterデータで学習した利点だろうが、AIコンテンツが増えれば将来は不自然になるかもしれない」と分析した。
- **artdigital**: ボイスモードを最高品質と評価しつつ、MCP/接続アプリ非対応、プロジェクト機能の欠如、チャット記憶機能なしなどアプリの制限を列挙してSuperGrokの課金を躊躇していると述べた。
  - **HarHarVeryFunny**: Geminiのボイスモードも好評だが、「常に次のステップを提案してくる」のが煩わしいと批判した。
  - **artdigital**: SuperGrok Heavy（$300プラン）の利用枠をコーディング環境でも使えるようにすべきだと要望した。
- **tornikeo**: 「ClaudeはB2B向け、CodexはDevs向け、Grokはロールプレイと人種差別向けか？」と辛辣なコメント。
  - **sudb**: 「人身売買対策のチャリティで、他のモデルが拒否したワンショット分類タスクをGrokは快く処理してくれた」と反論。倫理ガードが緩いことが有用な場合もあると述べた。
  - **Hfuffzehn**: ロールプレイ分野ではGrokは非一貫性から不人気で、GLMやDeepseek（API）、ローカルのGemma/Mistralが好まれていると説明した。
- **amunozo**: 「Googleがそろそろ何かリリースする番だ。先月大型モデルを出していない大手ラボはGoogleだけではないか」と指摘した。
- **Barbing**: Muskが法廷証言でAIプロバイダーをAnthropicを筆頭にランク付けしたとし、「セーフティカードって何？」と問う発言を引用した。
  - **tecoholic**: 「モデルカード、セーフティカードというのはHuggingFaceの曖昧な定義から来ており、一般には全く知られていない用語だ」と解説した。
  - **kardianos**: 「xAIは幻覚率が最低水準のベンチマーク結果を示しており、Muskは真実との整合性を安全性の定義としている」と擁護した。

---

## 4. [Show HN: WhatCable, a tiny menu bar app for inspecting USB-C cables](https://github.com/darrylmorley/whatcable)

**Score:** 201 | **Comments:** 72 | [Post](https://news.ycombinator.com/item?id=47972511)

macOSのメニューバーに常駐する無料・オープンソースのユーティリティアプリ。接続中のUSB-Cケーブルの充電ワット数、データ転送速度、ディスプレイ出力対応、Thunderbolt対応などを分かりやすい言語で表示する。見た目が似たケーブルでも性能が大きく異なる問題を解消するツールとして注目された。

### Key Discussion Points

- **pimeys**: 「GPT-5.5を使って10分と2ドルでKDE Plasma 6のPlasmoidに移植できた。今の時代にこんなことが気軽にできるのは本当に驚きだ」と生産性の変化を実感。
  - **geordieboozer**: 「10分と2ドルを節約するために、これはGitHubに公開されていますか？」とユーモアたっぷりに問い返した。
- **sagacity**: 「いいアプリだが、なぜMacアプリはメニューバーに常駐したがるのか」と疑問を呈した。
  - **mft_**: 「14インチMacのノッチ横スペースはほとんど使い切っており、これ以上メニューバーアプリを増やすのは厳しい」とUI的制約を指摘した。
- **bichiliad**: 「ネイティブMacアプリであることが素晴らしい。ありがとう」と称賛。
  - **sleepingNomad**（開発者）: 「喜んでもらえてうれしいです」と感謝を述べた。
- **bkummel**: 「USB-Cポートが検出されないと表示された」と不具合を報告した。
  - **bkummel**: GitHubにIssueを立てたとフォローアップした。
- **n3storm**: 「lsusbのラッパーとしてLinux版は作れないか」とリクエストした。
  - **WillAdams**: pimeysのコメント（KDE Plasmoid移植）を参照先として示した。

---

## 5. [Apple accidentally left Claude.md files Apple Support app](https://news.ycombinator.com/item?id=47973378)

**Score:** 133 | **Comments:** 77 | [Post](https://news.ycombinator.com/item?id=47973378)

AppleがApple Supportアプリにうっかり`CLAUDE.md`ファイルを残したことがTwitterユーザーに発見された。Mark Gurmanによれば「AppleはAnthropicのClaude上で動いており、多数の内部ツールや製品開発にカスタムClaudeを使用している」とのことで、Apple社内でのAI活用の深さが明らかになった形だ。コミュニティでは「AI時代にも人間のケアレスミスはなくならない」という趣旨の議論が展開された。

### Key Discussion Points

- **internet2000**: Mark Gurmanの発言を引用し「AppleはAnthropicによって実質的に動いている。カスタムClaudeを自社サーバーで運用している」という情報を共有した。
- **ramon156**: 「コメント欄の多くにLLM臭がする。人々は自分のアイデンティティを失いAIの操り人形になることを喜んでいるのか」と批判的に観察。
- **suyavuz**: 「AIを使って怠け者になったせいで、コミットする前に内容を確認しなくなった」と皮肉を込めてコメントした。
- **fusslo**: 「なぜかAppleはClaude/AIコーディングを避けるイメージがあった。Apple的な感じがしないと思っていたから」と率直な印象を吐露した。

---

## 6. [New copy of earliest poem in English, written 1,3k years ago, discovered in Rome](https://www.tcd.ie/news_events/articles/2026/caedmons-hymn-discovery/)

**Score:** 110 | **Comments:** 69 | [Post](https://news.ycombinator.com/item?id=47946899)

トリニティ・カレッジ・ダブリンの研究者が、ローマの国立中央図書館にある9世紀初頭の羊皮紙写本から、英語最古の詩「カエドモンの讃歌」の未発見写本を発見した。従来の写本では詩は余白に書き添えられていたが、今回発見されたものはラテン語本文中に本文として埋め込まれており、当時の読者が古英語詩を高く評価していたことを示す。デジタル化によってアイルランドの研究者が遠隔でその重要性を見抜けたことも画期的だった。

### Key Discussion Points

- **pouwerkerk**: カエドモンの讃歌の本文テキストを提供し、天の王国と創造を称える9行詩の内容を紹介した。
- **conartist6**: 「hefen（heaven）、uerc（work）、uard（ward）、hrofæ（roof）、æfter（after）、middingard（Earth）、allmehtig（almighty）など、1300年前の言葉が現代英語に残っている」と言語の継続性を解説した。
- **rubzah**: Poetry Foundationのリンクと共に原文・現代語訳の対照テキストを共有した。
- **cyocum**: 「Celtic Studies出身としては、この手の発見は専門家の間では想定内。St. Gallenやミラノにも保存状態の良いアイルランド語写本がある。中世ヨーロッパの遺産はまだまだアーカイブの中に眠っているが、資格者が少なく給与も低い」と研究環境の課題を訴えた。
- **saltmate**: 「『1,3k years ago』という書き方は奇妙だ。数百万年規模ならともかく、なぜ『700年代』や『1300年前』と書かないのか」とタイトルの表記スタイルに突っ込んだ。

---

## 7. [Your Website Is Not for You](https://websmith.studio/blog/your-website-is-not-for-you/)

**Score:** 109 | **Comments:** 65 | [Post](https://news.ycombinator.com/item?id=47973376)

ウェブサイトのデザインは作り手の個人的な好みのためではなく、訪問者のニーズを満たすためにあるべきだという主張のブログ記事。デザイナーが「自分のためのデザイン」をしてしまいがちな落とし穴を指摘し、ユーザー視点での設計を説いている。コメントでは「企業サイトはあなたのためではない」「個人サイトはあなたのもの」という対比を軸に議論が深まった。

### Key Discussion Points

- **xyzelement**: 「デザイナーは科学的な手法で自信過剰になりがちだが、長年の経験を持つ創業者の直感の方が正確なことが多い」と指摘した。
- **amavashev**: 「AI時代においてウェブサイトは人間のためではなく、AIエージェントのためのものになっている。エージェントがサイトを読んで推奨するかどうかを判断する時代だ」と未来像を語った。
- **dgellow**: 「ウェブサイトはアートではない、あなたのためではないという考えは視野が狭い。サイトはブランドアイデンティティの一部であり、芸術的表現と重なる」と反論した。
- **big85**: 「会社のウェブサイトはあなたのためではなく会社のアジェンダのためにある。個人ホームページはあなた自身のものだ——PV数を成功指標にするのをやめられれば」と整理した。
- **jdw64**: ウェブサイトはユーザー・企業・組織内部の三者間の妥協点だとし、UXに対抗する概念として「OX（オーナーエクスペリエンス）」を提唱した。

---

## 8. [Running Adobe's 1991 PostScript Interpreter in the Browser](https://www.pagetable.com/?p=1854)

**Score:** 37 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=47973755)

Michael Steilが、1991年製HPレーザープリンターカートリッジに搭載されていたAdobeのPostScript Level 2インタープリターをブラウザで動作させるプロジェクト「retro-ps」を公開。Motorola 68000プロセッサをJavaScriptでエミュレートし、LaserJetのメインボードを仮想的に再現することで、サーバー不要のクライアントサイドPostScriptレンダリングを実現した。元のハードウェア制約を超え、カスタム用紙サイズや高DPIレンダリングにも対応する。

### Key Discussion Points

- **tnelsond4**: 「pdf.jsより優れているか気になる。最近jbig2イメージのサポートが必要でWASMモジュールを27KBまで削減したものを自作したが、こちらのアプローチも興味深い」と述べた。
- **sgt**: 「.psを投入したら『rendering中』のまま止まっている」と動作不良を報告した。
- **thomasfl**: 「タイトルにAdobeとあるが、このサイトの月額料金はいくらですか？」とユーモアを交えてコメントした。
- **1f60c**: 「> 502 Bad Gateway / PostScriptが本当に好きな人がたくさんいるんだね！」とサーバー過負荷をネタにした。
- **stuaxo**: 「素晴らしい」と一言だけ称賛した。

---

## 9. [Show HN: Perfect Bluetooth MIDI for Windows](https://mayerwin.github.io/Perfect-Bluetooth-MIDI-For-Windows/)

**Score:** 58 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=47972888)

Windowsでは、BluetoothLE MIDIキーボードをペアリングできるもののDAWから認識されないという長年の問題を解決するオープンソースツール。WindowsがBLE-MIDIをWinRT APIのみで公開しており「ほとんどのDAWがポーリングしない」という根本原因に対し、Windows MIDI ServicesのループバックエンドポイントでWinRTとDAWをブリッジする方式を採用。.NET 10とAvalonia製でインストーラー不要の約21MBの実行ファイルとして公開。

### Key Discussion Points

- **cladopa**: 「複数のピアノを持っているが、Linux/Macで確実に動作させるために有線接続を使い続けていた。Claudeで20本の音楽練習ツールを作ったが、今回のツールは以前のものより格段に効果的だ」と称賛。
- **brudgers**: 「ちなみにMicrosoftはWindows 11向けにWindows Midi Servicesをリリース中だ」とOSレベルの動向を補足した。
- **BonerWiener**: 「素晴らしいプロジェクト！後で試してみる——MIDIキーボードはずっと有線接続を使っていた」と関心を示した。
- **monikalodhi**: 「Windowsのデバイス処理はトリッキーで、あるレイヤーでは動作するのに別のレイヤーでサイレントに失敗するケースがある。チャンネル検出アプローチは賢い」と技術的評価をした。
- **QuantumNomad_**: 「サードパーティのソフトなしではWindowsユーザーがBLE-MIDIキーボードをDAWで使えないのか？AbletionやPro Tools、FL Studio、Reaperなども影響を受けるのか？」と問い掛けた。

---

## 10. [If I could make my own GitHub](https://matduggan.com/if-i-could-make-my-own-github/)

**Score:** 48 | **Comments:** 83 | [Post](https://news.ycombinator.com/item?id=47962269)

著者が、GitHubの代替フォージに欲しい機能を詳細に論じた記事。プリコミットフックによる早期フィードバック、より細かなPR承認状態（承認/要再レビュー/確認済みだが要再確認など）、スタックドPRのファーストクラスサポート、モジュラーホスティング、ローカル実行可能な署名済みアクションなどを理想として挙げている。

### Key Discussion Points

- **dust-jacket**: 「PRの承認は本質的に二値だ——マージできるかできないかのどちらか。『再訪が必要』といった状態は形だけであり、別チケットを開くべきだ」と反論した。
- **nerdypepper**: 「Tangledはスタックドこそ含むほとんどの要望を既に実装しているし、JJをVCSとして使っている。アクションのローカル実行はビルドシステムの責任だ」と既存代替案を紹介した。
- **nirui**: 「メールを受け取ると集中できるが、通知は準備ができていなくてもすぐ返答しなければというプレッシャーを生む。メールクライアントの設計はモダンな通知システムより優れている」と述べた。
- **gsliepen**: 「全メッセージ（PR、レビューコメント、Issueなど）の格納フォーマットにRFC2822を使い、表示にCommonMarkを使うべきだ」という標準化アプローチを提案した。
- **jacobwiseberg**: 「解決策が問題になるとき、破壊的イノベーションの機会が生まれる。今まさにそのタイミングであり、多数の代替案が注目を集められるかが気になる」と観察した。

---

## Trends

今日のHacker Newsのトップ10から浮かび上がるテーマは以下の通り:

1. **監視・セキュリティ・透明性への関心**: Room 641AのNSA内部告発（1位・641pt）とLinuxカーネルの脆弱性開示プロセス問題（2位・548pt）が高スコアを獲得。権力監視と情報開示の在り方への関心が依然として高い。

2. **AI統合の現実と副作用**: AppleのClaude.md流出（5位）、Grok 4.3のリリース（3位）、BLEMIDIツールやWhatCableにもAI活用の話題が混じり込んでいる。AIを使う側の人間のケアレスミスや、AIモデルの特性比較議論が活発だ。

3. **開発ツールとインフラへの不満とDIY精神**: GitHubの代替を夢想する記事（10位）やPerfect Bluetooth MIDI for Windows（9位）など、既存ツールの限界を乗り越えようとする自作文化が健在。

4. **レトロコンピューティングとデジタル保存への愛着**: 1991年製PostScriptインタープリターのブラウザ移植（8位）や1300年前の詩の写本発見（6位）は、技術的・文化的遺産の保存と現代への橋渡しへの関心を示している。

5. **プラットフォームと所有権の議論**: 「ウェブサイトはあなたのためではない」（7位）とGitHub代替論（10位）は、デジタル空間における所有権・アイデンティティ・プラットフォーム依存への根本的な問い直しを共通テーマとして持っている。
