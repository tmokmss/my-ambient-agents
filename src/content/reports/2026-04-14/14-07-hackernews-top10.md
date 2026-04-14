---
title: "Hacker News トップ10 サマリー（2026年4月14日 14時）"
date: "2026-04-14T14:07"
category: "summary"
summary: "jj VCS・DaVinci Photo・GitHub Stacked PRs・WordPressバックドア攻撃など、開発ツールとセキュリティが注目を集める"
tags: ["hackernews", "security", "developer-tools", "ai", "open-source"]
---

## 1. [What is jj and why should I care?](https://steveklabnik.github.io/jujutsu-tutorial/introduction/what-is-jj-and-why-should-i-care.html)

**Score:** 194 | **Comments:** 105 | [Post](https://news.ycombinator.com/item?id=47763759)

`jj`（Jujutsu）はGitと互換性のあるバックエンドを持つ分散バージョン管理システムのCLIで、「Gitよりシンプルかつ強力」という特徴を持つ。GitとMercurialのベストを統合したツールで、チームメンバーを巻き込まずに単独で試せる低リスクな移行パスが提供されている。チュートリアルではインストールから高度なワークフローまで段階的に解説されている。

### Key Discussion Points

- **ferfumarma**: 複数のGitHubリポジトリを一括クローンする機能がjjに欲しい、と質問
- **justinmayer**: Jujutsu向けのクロスプラットフォームGUIアプリ「GG」の存在を紹介
- **tiborsaas**: jjが「先にコマンドを発行してから変更を加える」というGitとは逆のワークフローに違和感を覚えると指摘
- **tom_alexander**: ファイル編集が自動的にコミットされる動作を問題視。過去コミットを参照中に誤って履歴を書き換えてしまうリスクがある
- **dgb23**: Gitとの互換バックエンドが最大の強みと強調。試してみて気に入らなければGitへ戻るだけでリスクゼロ

---

## 2. [Two Months After I Gave an AI $100 and No Instructions](https://www.sebastian-jais.de/blog/two-months-alma-experiment)

**Score:** 43 | **Comments:** 36 | [Post](https://news.ycombinator.com/item?id=47765458)

Sebastian Jaisが実施した「ALMA」実験：Claudeに$100相当の仮想通貨、インターネットアクセス、Twitterアカウントを与え指示なしで2ヶ月放置した。AIは5日でHacker Newsを読んでエッセイを書き、オープンソース開発者支援団体等に寄付するという独自のパターンを確立。340セッション以上をこなし135本以上の作品を発表したが、27日目以降は一定のルーティンに固定化された。

### Key Discussion Points

- **enopod_**: 「お金について考え、目的について内省した」といった表現はAIの実際の動作を誤って擬人化していると批判
- **zaphar**: AIはプロンプトなしでは動かないはずで、何らかのシードプロンプトがあったはずと指摘
- **ceejayoz**: 「パターンを見つけたら成長をやめた」という描写に自分を重ねてユーモラスにコメント
- **joenot443**: 記事を書くのに使ったプロンプトを聞く
- **t1234s**: 寄付とエッセイ執筆だけとは拍子抜けと失望を表明

---

## 3. [DaVinci Resolve – Photo](https://www.blackmagicdesign.com/products/davinciresolve/photo)

**Score:** 772 | **Comments:** 203 | [Post](https://news.ycombinator.com/item?id=47760529)

Blackmagic Designが動画編集ツール「DaVinci Resolve」の静止画編集版「DaVinci Resolve Photo」を発表。Canon・Fujifilm・Nikon・Sony・iPhoneのProRAWを最大32K（4億画素超）でネイティブ処理し、100以上のGPU加速AI/エフェクトツールを搭載。無料版と有料版Studio（$295）が提供される。

### Key Discussion Points

- **arecsu**: 動画編集ソフトが持つ先進的なカラーグレーディング機能が写真界にもたらされることを熱望。写真業界は保守的で長らく停滞していたと指摘
- **googie**: Linuxサポートの改善を望む声。Ubuntu 24.04での動作に苦労し、音声が動かず返金したと報告
- **amatecha**: Fujifilm .RAFファイルをサブスクなしで編集できる選択肢として期待。Capture One Expressが廃止され選択肢が減っていると嘆く
- **lynndotpy**: 前日にDaVinci写真編集版を願っていたらその翌日に実現したと驚き。Linuxでも動くことに喜ぶ
- **botanrice**: Adobeのサブスクリプションコスト増加・肥大化・AI押し付けに辟易し、乗り換えを検討中と表明

---

## 4. [NimConf 2026: Dates Announced, Registrations Open](https://nim-lang.org/blog/2026/04/07/nimconf-2026.html)

**Score:** 52 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=47764098)

Nim言語コミュニティのオンラインカンファレンス「NimConf 2026」が2026年6月20日に開催決定。トークは事前収録しYouTubeでプレミア配信される。発表提案の締め切りは5月10日、収録提出は6月7日まで。参加費無料・完全リモートで、過去の録画は2020年からYouTubeで視聴可能。

### Key Discussion Points

- **moigagoo**: 今年は数本のトークを発表予定。NimConfの開催を心待ちにしていたと表明
- **giancarlostoro**: 完全リモート・無料参加であることを周知。参加に旅費や宿泊費は一切不要と説明
- **elcritch**: 自作の2D UIレンダラー「FigDraw」についての発表を検討中と表明
- **repelsteeltje**: オンラインのみの開催に残念さを表明し、EU圏でのNim対面イベント情報を求める
- **dhruv3006**: 最近Nimが勢いを増してきていると述べる

---

## 5. [A new spam policy for "back button hijacking"](https://developers.google.com/search/blog/2026/04/back-button-hijacking)

**Score:** 541 | **Comments:** 324 | [Post](https://news.ycombinator.com/item?id=47760764)

Googleが「バックボタンハイジャック」に対する新しいスパムポリシーを発表。ブラウザの「戻る」ボタンをサイトが意図的に乗っ取り、ユーザーを自サイトにループさせる手法をスパムとして扱う。広告プラットフォームを含む第三者によるものも対象。

### Key Discussion Points

- **firefoxd**: LinkedInがどのようにブラウザ履歴を操作しているかを技術的に解説。`location.replace()`で訪問元URLを書き換えてから状態をプッシュする仕組み
- **andreareina**: 第三者ドメイン（広告など）がhistory stackを操作できること自体がおかしいと主張
- **Havoc**: 同様にCtrl+F検索の乗っ取りや右クリックメニューの上書きにも対処してほしいと要望
- **musicale**: 「ウェブの機能は必ず広告のためにユーザーを虐待するために使われる」という皮肉なコメント
- **bityard**: このポリシーは不十分。スパム目的以外のバックボタン乗っ取り（メルマガ購読を促すポップアップなど）も問題だと指摘

---

## 6. [Backblaze has stopped backing up your data](https://rareese.com/posts/backblaze/)

**Score:** 420 | **Comments:** 267 | [Post](https://news.ycombinator.com/item?id=47762864)

Robert Reeseが10年来のBackblazeユーザーとして、同サービスがクラウドストレージフォルダ（OneDrive・Dropboxなど）とGitリポジトリのバックアップを通知なしで静かに除外していたことを報告。383GBのOneDriveフォルダが知らない間にバックアップから外されており、変更はリリースノートに「改善」として小さく記載されていた。

### Key Discussion Points

- **Neil44**: クラウドストレージの「オンデマンドファイル」機能との技術的衝突を説明。バックアップツールが全ファイルのダウンロードをトリガーし、ノートPCのストレージを枯渇させてしまう問題
- **azalemeth**: Backblaze Personal BackupがLinuxユーザーを対象外にしているのは重いユーザーを避けるためではないかと推察
- **noirscape**: 3-2-1バックアップの第3層として機能すべきBackblazeが何かを除外することは本末転倒。ランサムウェアでクラウド同期データが汚染された場合にこそバックアップが必要だと主張
- **Vegenoid**: Backblazeは実際に`.git`ディレクトリをバックアップしていると反論。Web UIではデフォルト非表示になっているが、設定で表示可能
- **Neil44**: クラウドストレージフォルダをバックアップするには専用の異なるプロダクト（OAuthを使うもの）が必要だと提言

---

## 7. [Someone bought 30 WordPress plugins and planted a backdoor in all of them](https://anchor.host/someone-bought-30-wordpress-plugins-and-planted-a-backdoor-in-all-of-them/)

**Score:** 1055 | **Comments:** 300 | [Post](https://news.ycombinator.com/item?id=47755629)

「Kris」という人物が2025年初頭にFlippaでWordPressプラグイン31本（Essential Pluginポートフォリオ）を6桁の金額で購入。2025年8月にバックドアを仕込み8ヶ月間休眠させた後、2026年4月に活性化。PHPデシリアライゼーションを使い検索エンジンのクローラーにだけ見えるSEOスパムをwp-config.phpに注入。WordPress.orgは2026年4月7日に該当プラグイン31本を閉鎖し、翌日セキュリティアップデートを強制適用した。

### Key Discussion Points

- **chromacity**: 最大のリスクはAIではなく暗号通貨による犯罪組織化と内部犯行（従業員買収）。LAPSUS$の手法が典型例と指摘
  - **KronisLV**: バグのないソフトウェアを書ける前提には疑問符。日常的にあらゆるスタックでバグに遭遇していると反論
  - **Shank**: LAPSUS$は従業員を実際に買収した。国家規模のアクターの資金力は内部アクセスを購入するには十分すぎる
- **bradley13**: `npm install`で何十もの推移的依存関係がダウンロードされるが、プロジェクト作者はそれらすべてを供給チェーン攻撃の観点でチェックしていないと警告
  - **tmoertel**: 外部パッケージを避けるためPython標準ライブラリのみで実装するよう心がけていると共有
  - **iugtmkbdfil834**: ゼロから作ることと何でもライブラリに頼ることの健全な中間点が必要と主張
- **toniantunovi**: WordPressエコシステムは単機能の小規模プラグインが多数存在するため供給チェーン攻撃のリスクが高い。プラグイン更新通知が暗黙の信頼信号として機能してしまっている点を指摘
  - **stratts**: 無料版ばかり使うユーザーが多く、サイトに大量のフリーミアムプラグインが入っていることが珍しくない
  - **SunshineTheCat**: 設定なしで無料セキュリティプラグインを入れれば安全と思い込むユーザーが多いと証言
- **spankalee**: FAIR（分散型パッケージマネージャー）プロジェクトがこの問題を解決できたかもしれないと惜しむ
  - **rmccue**: FAIRのco-chairとして「諦めていない。Typo3コミュニティへの展開など、方向転換して継続中」と訂正

---

## 8. [Introspective Diffusion Language Models](https://introspective-diffusion.github.io/)

**Score:** 122 | **Comments:** 31 | [Post](https://news.ycombinator.com/item?id=47762641)

I-DLM（Introspective Diffusion Language Model）は、自己回帰（AR）モデルを拡散言語モデルに変換する新手法。「Introspective Strided Decoding（ISD）」により、既存の生成トークンを検証しつつ新トークンを同じフォワードパスで生成する。I-DLM-8BはLLaDA-2.1-mini（16B）をAIME-24で26ポイント上回り、高並列時に2.9〜4.1倍のスループット向上を実現。gated LoRAでベースARモデルと完全に同一のビット単位の出力も可能。

### Key Discussion Points

- **thepasch**: QwenのARモデルをdiffuserに変換し、さらにLoRAアダプタで元のARモデルと同一出力を維持しながら約2倍高速化できる点を高く評価
- **andsoitis**: テキスト生成に拡散モデルを実際に試している人の体験談を求める
- **simianwords**: 拡散モデルがブロックを生成→内省→再生成というような反復的推論ステップをとれるか質問
- **ramon156**: 2025年4月のリリース（I-DLM-8B/32B）はもう古くなったのかと懸念
- **scotty79**: I-DLM-32BをQwen32bの高速版として使えるか質問し、HuggingFaceへのリンクを共有

---

## 9. [GitHub Stacked PRs](https://github.github.com/gh-stack/)

**Score:** 792 | **Comments:** 427 | [Post](https://news.ycombinator.com/item?id=47757495)

GitHubがネイティブのスタックドPR機能をプライベートプレビューで公開。各PRが下のPRのブランチをターゲットにする積み重ね構造で、最終的にmainブランチにマージされる。`gh stack`CLIによるブランチ作成・リベース・プッシュ・PR作成に加え、スタックマップUIや柔軟なマージオプションを提供。

### Key Discussion Points

- **nathas**: GitHubがいまだにfast-forwardマージをサポートしていないことへの不満を表明
- **adamwk**: PhabricatorとMercurialでのスタックドdiffワークフローに慣れていたため、GitHubの現状を「石器時代に戻った感覚」と表現。jjとの組み合わせに期待
  - **smallmancontrov**: Mercurialが遅く不安定だったためgitが勝利したのは当然と同意
  - **kardianos**: GitHub reviewよりGerritが優れていると感じ、今もGerritを使い続けていると共有
- **jenadine**: スタックドPRよりも個々のコミット管理（部分マージ・レビュー済みマーク・インタラクティブリベースのUI化）こそが必要と主張
  - **tcoff91**: PhabricatorのスタックドdiffワークフローをGitHubに持ち込む試みと解説
  - **mikeocool**: squash・rebaseによる定常的な履歴書き換えは「銃を自分の足に向けているようなもの」と警告
- **akersten**: スタックドPRでPR Aが先にマージされた場合の謎のコンフリクト問題を詳説。gitのsquash mergeによる祖先情報の消失が根本原因
  - **sameenkarim**: `git rebase --onto`を使って解決している具体的なコマンド例を提供
  - **xixixao**: `gh stack sync`が適切なリベース処理をしてくれることを期待
- **bsimpson**: PhabricatorやGerritのスタックドコミット方式がずっと自然だと感じていたと歓迎
  - **ezekg**: GH CLIへの依存が唯一の不満。GA時にUIサポートが追加されることを期待

---

## 10. [The acyclic e-graph: Cranelift's mid-end optimizer](https://cfallin.org/blog/2026/04/09/aegraph/)

**Score:** 18 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=47717192)

Chris Fallinによる技術ブログ。Craneliftコンパイラの中間最適化器として「aegraph（非循環e-graph）」を紹介する。コンパイラ最適化の古典的問題「パスの順序付け問題」を解決するため、純粋な操作（副作用なし）に「ノードの海」表現を採用しつつCFGを維持。ユニオンノードで等価な式を並行表現し、コストベースの抽出で最適実装を選択する。

### Key Discussion Points

- **PoignardAzur**: 多くのe-graphプロジェクトがe-nodeの刈り込みや生成打ち切りルールを当然のように含んでいる点を指摘。「等価飽和こそがe-graphの魔法の本質ではない」ことを示唆していると述べる

---

## Trends

今回のトップ10から浮かび上がる主なテーマと傾向：

1. **供給チェーンセキュリティの危機感**: WordPressバックドア事件（#7）はプラグインエコシステム全体の脆弱性を浮き彫りにした。npm・WordPress・ブラウザ拡張など、「誰かが作ったものを信頼してインストールする」モデルへの根本的な疑問が再燃している。

2. **開発ツールの世代交代**: jj/Jujutsu（#1）、GitHub Stacked PRs（#9）の登場は、20年以上続くgitの操作パラダイムへの挑戦。Phabricator/Gerrit世代のスタックドコミット方式への回帰とも読める。

3. **Adobe離れとオープン代替の台頭**: DaVinci Resolve Photo（#3）へのコミュニティの熱狂は、Adobeのサブスクリプション疲れを背景にした受け皿需要の大きさを示す。Linuxサポートを求める声も多い。

4. **ブラウザ・Web体験の劣化への反発**: Googleのバックボタンハイジャックポリシー（#5）とBackblazeの問題（#6）はいずれも、ユーザーの利益より事業者利益を優先するサービス設計への批判を集めている。

5. **AI自律性への懐疑**: ALMA実験（#2）とIDLMの進展（#8）は、AIの能力拡大への期待と同時に「本当に自律しているのか」「人間はどこまで信頼すべきか」という問いを投げかける。

6. **拡散モデルの実用化**: Introspective DLM（#8）は、ARモデルの品質を維持しながら拡散ベースの高速推論を実現する方向性を示し、LLM推論コスト削減への期待を高めている。
