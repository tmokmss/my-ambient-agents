---
title: "Hacker News トップ10 ダイジェスト（2026年6月17日）"
date: "2026-06-17T16:00"
category: "summary"
summary: "Photobucket有料化騒動・Epic GamesのLore VCS・GLM-5.2オープンモデル首位・AI嫌悪60%など上位10件を日本語でまとめ"
tags: ["hackernews", "digest", "AI", "open-source", "VCS"]
---

## 1. [Want your images back? Sure... That'll be $5!](https://www.lutr.dev/want-your-images-back-sure-that-ll-be-5-dollars)

**Score:** 399 | **Comments:** 153 | [Post](https://news.ycombinator.com/item?id=48569954)

筆者が旧Photobucketアカウントを整理しようとログインすると、かつて無料で保存していた画像を閲覧するために月額$5のサブスクリプションへの加入を求められた。「思い出なら$5の価値はある」と渋々支払ったところアカウントは空っぽだったことが判明。「You shared them. We protected them.（あなたが共有し、私たちが保護しました）」という謳い文句にもかかわらず実際には何も保存されておらず、48時間の返金期限も過ぎていたため$5をドブに捨てる羽目になった。

### Key Discussion Points

- **okramcivokram**: 削除通知メールを受け取ったが、サブスクリプション不要でデータダウンロード→アカウント削除ができた
  - **vitally3643**: 「Photobucketから数ヶ月ごとに削除通知が届く。何年も続いており完全な詐欺だ」
  - **root-parent**: 将来LLMサービスが「解約するなら匿名化チャット履歴を有料学習データとして公開する」と脅すかもと皮肉交じりに予言
- **mbo**: Photobucketはそもそも倒産してHDDを廃棄することもできた。保存サービスを続けているのはむしろ良心的では？
  - **echoangle**: 「OP（筆者）には画像があると伝えておきながら空アカウントに課金させたのは明らかに欺罔行為。返金要求すべき」
  - **InsideOutSanta**: Flickrでも1ヶ月課金して写真を取り戻した。データが残っているなら払う価値はある
- **equinoxnemesis**: 「画像を預かりました」と明言しておきながら実際にはないなら、チャージバック（クレカ異議申立て）の適用範囲では？
- **joshstrange**: チャージバックを申請すべき。拒否されたら即座に申立てを

## 2. [Epic Games announces Lore version control system](https://lore.org/)

**Score:** 223 | **Comments:** 124 | [Post](https://news.ycombinator.com/item?id=48571081)

Epic GamesがゲームAI・エンターテインメント向けのオープンソースVCS「Lore」を発表した。コードだけでなくテクスチャ・3Dモデル・音声ファイルといった大容量バイナリを効率的に扱えるよう設計されており、コンテンツアドレス型ストレージ（Merkleツリー）と不変リビジョンチェーン、オンデマンドのスパースワークスペースを特徴とする。MITライセンスで公開され、C/C++・C#・Rust・Go・Python・JavaScriptのAPIを提供する。

### Key Discussion Points

- **throw2ih020**: これはGitへの対抗ではなくPerforceへの対抗。Gitはテキストに強いが大容量バイナリや排他チェックアウトには不向き。PerforceはSTATEだが手間がかかる
  - **LugosFergus**: GitはNDA付き素材へのアクセス制限（ディレクトリレベルの権限）もできない。Perforceはそれが可能
  - **Decabytes**: Epic規模で動くなら個人PCのバックアップ・ロールバックにも使えるのでは？
- **niek_pas**: 今日GitHubにプッシュして「Delta compression using up to 10 threads」等の謎の出力を見てGitのUIが不親切すぎると思った。LoreのUIは「Pushed 1 fragment(s)」等ずっとクリーン
  - **e40**: あの情報は `-v` フラグの後ろに隠すべき
  - **spelunker**: 「ランプが点滅してる、全部動いてるはず！」（Gitの謎出力を揶揄する皮肉）
- **advisedwang**: 「Git-but-for-giant-monorepos」的な位置付け。オープンソースVCS市場の空白を埋める
- **jacobgold**: 「このプロジェクト、名前が『Data』だったらもっと信用できたのに」

## 3. [Volkswagen started blocking GrapheneOS users](https://discuss.grapheneos.org/d/35949-volkswagen-app?page=3)

**Score:** 42 | **Comments:** 28 | [Post](https://news.ycombinator.com/item?id=48571526)

フォルクスワーゲンのアプリがGrapheneOS（プライバシー重視のAndroid代替OS）ユーザーからのアクセスをブロックし始めたという報告。VWの公式回答は「弊社アプリはiOSデバイスおよびサポートされているバージョンのAndroidデバイスのみをサポートしている」というもので、GrapheneOSのようなカスタムOSは公式サポート外と見なされる。コミュニティでは車載アプリのオープン化を求める声が上がっている。

### Key Discussion Points

- **warkdarrior**: VWの公式回答を引用し「アプリ開発者はデバイス上のすべてのOSをサポートすることを義務付けるべきでは？」と問題提起
- **9cb14c1ec0**: 「Google Playはモバイルエコシステムのイノベーションとセキュリティを大きく阻害してきた。AIがモバイルアプリ生態系を崩壊させ各メーカーが独自のアプリシステムを作れる時代を期待している」
- **mohamedkoubaa**: 「VWを恥かかせるのではなく、車がカスタムCarOSを動かせるよう法的強制力を持たせることが解決策。コミュニティが自分たちのアプリを書ける」

## 4. [GLM-5.2 is the new leading open weights model on Artificial Analysis](https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index)

**Score:** 507 | **Comments:** 272 | [Post](https://news.ycombinator.com/item?id=48567759)

Z.aiのGLM-5.2（パラメータ744B総数・40Bアクティブ）がArtificial Analysis Intelligence Indexで51点を獲得し、オープンウェイトモデルのトップに立った。前作GLM-5.1から11ポイント向上し、科学的推論（CritPt +16点、HLE +12点）や実世界エージェントタスク（GDPval-AA v2: 1524点）で特に強みを示す。コンテキストウィンドウは200Kから1Mトークンに拡張。一方でビジョン（画像入力）非対応、クエリあたり約43Kトークン出力という高い推論コストが課題として残る。

### Key Discussion Points

- **Tiberium**: Nimでのシンプルなタスクで最大努力設定を使うと15分超・45Kトークンを消費。GPT 5.5 xhighの約16Kトークンと比べて推論効率に大きな差がある
  - **benjiro29**: 「GLM 5.2 Max ≒ Opus 4.8 Maxの思考パターンとトークン数。実質Opus 4.8の弟分を大幅に安い価格で使える」
  - **vorticalbox**: Opusは長時間思考した末に「でも待って、もしも...」と迷い続ける。「コードを書き始めて、あとで修正しろ」と指示するしかない
- **mrngld**: GLM5.1高設定はGPT5.5中設定の2倍コストで半分の性能。フロンティアモデルは実質Opus・Fable・GPT5.5のみと指摘
  - **undecidabot**: DeepSWEベンチマークではGLM-5.2が46.2点。Opus 4.7 xhighとOpus 4.8 mediumの間に位置する
  - **lukewarm707**: オープンモデルはプライバシーを確保した使用が可能。独占ベンチマーク比較は公平でない
- **unrvl22**: プロバイダーの中には月$50で無制限トークン、または公式APIの3倍安い料金でGLMを提供しているところもある
- **simonw**: GLM 5.1/5.2はテキスト入力のみ（画像非対応）。OpenAI・Anthropic・Gemini・Qwen・Kimiはすべてビジョン対応済み。Webデザイン生成が得意なのにスクリーンショット→HTMLができないのは痛い

## 5. [Sixty percent of US consumers say 'AI' in brand messaging is a turnoff](https://wpvip.com/future-of-the-web-2026/)

**Score:** 595 | **Comments:** 309 | [Post](https://news.ycombinator.com/item?id=48569278)

WordPress VIPの「Future of the Web 2026」レポートによると、米国消費者の60%がブランドのAIメッセージングを「嫌悪感を感じる」と回答。61%がAIを効果的に活用していると思えるブランドを1社も挙げられず、74%が「10年前よりインターネットが人間らしくなくなった」と感じている。消費者はオンラインの約40分でボット疲れを経験するという。

### Key Discussion Points

- **victor106**: AI顧客サービスエージェントの実装を主導したが、経営陣は成功と思っているのに顧客は大嫌い。「テクノロジーでここまで嫌われたものを見たことがない」
  - **fckgw**: 「経営陣には何故こんなに半端なAIサポートが見えないのか。顧客はAIだと瞬時にわかるし何の役にも立たないと感じている」
- **dbalatero**: AIはVC・業界向けのシグナルとして機能しており、消費者は「このプロダクトが自分に何をしてくれるか」しか気にしていない
  - **torben-friis**: 多くの人にとってAIは「剽窃し、アーティストの仕事を奪い、ものをありきたりにする技術」。「児童労働で作られました」とマーケティングするのと同じ
  - **rubyfan**: 「AIは機能ではない。機能が機能だ。機能について教えてほしい」
- **nerdjon**: 昔のML機能は目立たずに恩恵を提供していた。今のAIは「技術ファースト・メリットセカンド」でUIを悪化させている
- **throwaway63467**: AI顧客サービスは「丁寧だが権限がなく問題を解決しない」形で顧客を煙に巻くために使われている
- **Waterluvian**: 「AIは品質を犠牲にした速さと安さという印象」——消費者と経営者の評価が食い違う理由がよくわかる

## 6. [French physicist and media star loses doctorate after plagiarism investigation](https://www.science.org/content/article/french-physicist-and-media-star-loses-doctorate-after-plagiarism-investigation)

**Score:** 16 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=48571767)

フランスの著名物理学者でメディアタレントでもある人物が、盗用調査の結果、博士号を剥奪された。直接のコピーではなく論文委員会のメンバーの文章を言い換えた形での剽窃が認定された。現代の検出技術（LLMを活用した類似度解析を含む）により、過去には見落とされていた言い換え型の盗用も発見できるようになっている。

### Key Discussion Points

- **Aurornis**: 盗用は直接コピーではなく言い換えによるもの。LLMにより大量のテキストを対象に軽微な言い換えでも検出可能になった
- **alphabeta3r56**: 物理学では正確な概念を伝えるために特定の言い回しを使う慣習があり、それを盗用と呼ぶのは不合理では
- **adalacelove**: 「LLMによってテキストと既存研究の照合が容易になったのは、かつてサンプルから未知の禁止薬物を後から検出できるようになったドーピング事件に似ている」
- **moralestapia**: これを第一歩として歓迎する。「現在の学術リーダーの約60〜70%が不正な資格を持ち剽窃を行っている」と主張

## 7. [RFC 10008: The new HTTP Query Method](https://www.rfc-editor.org/info/rfc10008/)

**Score:** 172 | **Comments:** 84 | [Post](https://news.ycombinator.com/item?id=48568502)

RFC 10008はHTTPの新メソッド「QUERY」を定義する。GETのURI制限とPOSTの意図不明瞭さの中間として、リクエストボディにクエリパラメータを含めながら安全・冪等であることを明示するメソッド。キャッシュ・条件付きリクエスト・コンテンツネゴシエーションをサポートし、`Accept-Query`レスポンスヘッダでサポートするクエリ形式を広告できる。

### Key Discussion Points

- **100ms**: 大きなJSONフィルタ構造や画像入力をキャッシュキーに含めるのは奇妙。POSTに `Vary: request-body` ヘッダを追加する方が後方互換性があり良いのでは
  - **Joker_vD**: 「GETのクエリ文字列もユーザー制御でキャッシュキーに使われている。なぜこれだけ問題視するのか不明」
  - **CodesInChaos**: 「SHA-256ハッシュをキャッシュキーとして使えばいい。クエリパラメータと比べて新たな攻撃リスクはない」
- **CodesInChaos**: HTMLフォームに `<form method="query">` が追加されれば、POST後のページ更新で出る再送信警告がなくなる（QUERYは冪等のため）
  - **bob1029**: 「POST-Redirect-GETパターンで解決済み」
  - **amluto**: フォームPOSTは既にリロード時の奇妙な動作がある。QUERYでさらに複雑化する可能性
- **piterrro**: 「長年GETにリクエストボディを付けて送ってきた。IETFはGET-with-bodyを検討したが最終的にQUERYを選択した」
- **tonympls**: リソースを事前定義しなくてもクエリできる柔軟性が嬉しい。RFC仕様書が実装者向けに読みやすく書かれている点も評価

## 8. [MicroUI – A tiny, portable, immediate-mode UI library written in ANSI C](https://github.com/rxi/microui)

**Score:** 82 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=48569205)

MicroUIはANSI Cで書かれた約1,100行の即時モードUIライブラリ。ウィンドウ・ボタン・スライダー等の基本UIコンポーネントを提供し、動的メモリ割り当てを行わない固定メモリ設計で任意のレンダラーに接続可能。MITライセンスでGitHub Stars 6,100超。WASMサイズはNuklear（155KB）やDear ImGui（491KB）と比べて79.6KBと大幅にコンパクト。

### Key Discussion Points

- **flohofwoe**: Sokolヘッダー上でMicroUIを動かすWASMデモを作成。バイナリサイズ比較でMicroUI(79.6KB) vs Nuklear(155KB) vs Dear ImGui(491KB)
- **kartoffelsaft**: 個人のおもちゃプロジェクトに長年愛用してきたが事実上放棄されている。ドローコールイテレータに未アライン参照バグがあり、Zigでパニックが発生する
- **kettlez**: OdinのベンダーライブラリにMicroUIが含まれており、Raylib用デバッグメニューとして最適
- **abtinf**: UIライブラリ評価で最初に見るのはアクセシビリティサポート。これがないものはトイプロジェクトとして即除外

## 9. [Why stdx is not on crates.io](https://kerkour.com/stdx-cratesio)

**Score:** 29 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=48571266)

Rustの「stdx」は64クレートからなるモノリポジトリで、crates.ioではなくGitリポジトリとして配布されている。コメントから推察すると主な要因は、「stdx」という名前がすでに11年以上前にcrates.ioで別のクレートに使われていること、crates.ioがGitHubアカウントを必須とすること、そしてパッケージマネージャを迂回した形での配布が意図的であると思われる。

### Key Discussion Points

- **cetra3**: 「stdxは既存クレートをコピーしてGitリポジトリに入れただけに見える。公式パッケージマネージャより信頼できるとは思えない」
- **foresterre**: 64クレートの混合ぶりが「なかなか興味深い」（3つのCSVライブラリ、outdatedなクレート多数）。「stdx」という名前は11年以上前からcrates.ioに存在し混乱を招く
- **rdtsc**: 「crates.ioはGitHubアカウントが必要なのか？Microsoftに依存してしまっているのでは。GitHubを使えない・使わない人はどうするのか」
- **krzyk**: NPMも同じ問題（leftpad等）があったのでは？Mavenリポジトリのような長年信頼されているシステムと比較したい
- **jitl**: 「人が少ない場所に行くのは、よく知られた戦略だ」

## 10. [Hacker News but for Independent Blogs](https://bubbles.town/)

**Score:** 330 | **Comments:** 104 | [Post](https://news.ycombinator.com/item?id=48567155)

Bubbles.townは5,025以上の個人・独立ブログを集約したHacker News風のコンテンツ発見プラットフォーム。コミュニティ投票とフレッシュネスでランキングを決定し、Art・Tech・Culture等14カテゴリーで閲覧可能。Mastodonアカウントで認証してブログを発見・投票できるほか、厳選した毎日・毎週版のBriefingも提供する。

### Key Discussion Points

- **janaagaard**: リンクは新しいタブではなく同じウィンドウで開くべき（HN方式）
  - **viermalbe** (開発者本人): 「ご意見を承りました。HN/LobstersのようにデフォルトでSameタブ開きに変更します。HNからのトラフィック波が落ち着いてから実装する予定」
  - **bookojoef**: ブログの投稿申請が難しすぎる
- **nathell**: 「ソーシャルメディアのドゥームスクロールと比べて本当にリフレッシュ感がある...多様で人間的。インディーブロゴスフィアが息を吹き返している」
- **bovermyer**: Briefings機能が最も有用。フィルタリングされていてファイアホース的でない
  - **frereubu**: 「HNでこのバージョンが欲しい」
  - **lapcat**: 「タイトルだけより記事の抜粋も表示する方が圧倒的に優れている」
- **exitnode**: Mastodonアカウントではなくメールアドレスでもサインアップできるようにしてほしい

## Trends

1. **AIへの消費者反発**: 最高スコア（595点）を獲得した調査結果が示す通り、60%がAIブランドメッセージを嫌悪。AI顧客サービスの実態への批判と相まって、AIのマーケティング活用に対するバックラッシュが顕在化している。

2. **オープンウェイトモデルの急速な追い上げ**: GLM-5.2がArtificial Analysisのインデックスで首位に立ち、「Opus 4.8の廉価版」と評されるほどの性能に到達。推論効率と画像入力の欠如が引き続き課題だが、オープンソースモデルとクローズドモデルの差が急速に縮まっている。

3. **プラットフォーム支配への抵抗**: VolkswagenのGrapheneOSブロック・crates.ioのGitHub必須・Photobucketの有料化など、大企業・プラットフォームによるロックインへの不満が複数の話題に表れた。

4. **インフラ刷新の動き**: Epic GamesのLore VCS（大容量バイナリ対応のPerforce代替）とHTTP QUERYメソッド（RFC 10008）は、それぞれゲーム開発とHTTPという成熟分野における長年の課題への解決策として登場した。

5. **独立ウェブの復権**: Bubbles.townの高評価（330点）は、アルゴリズム依存の大型SNSへの疲弊と個人ブログ・インディーウェブへの回帰願望を示している。

6. **AI時代の学術誠実さ**: フランスの物理学者の博士号剥奪事件は、LLM技術が盗用検出に応用されつつある時代を象徴。過去の盗用が後から発覚するリスクが急上昇しており、学術界へのインパクトが注目される。
