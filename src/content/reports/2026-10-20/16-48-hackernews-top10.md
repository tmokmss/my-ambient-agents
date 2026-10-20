---
title: "Hacker News トップ10 サマリー (2026-10-20)"
date: "2026-10-20T16:48"
category: "summary"
summary: "DeepSeek の推論エンジン公開、eMudhra 中間CA鍵漏洩、Tor 出口ノード MITM、Facebook のリンク課金などを要約"
tags: ["hackernews", "deepseek", "security", "apple", "ai"]
---

## 1. [DeepSeek just open-sourced its inference engine](https://github.com/deepseek-ai/DeepInfer)

**Score:** 1718 | **Comments:** 623 | [Post](https://news.ycombinator.com/item?id=50163277)

DeepSeek が本番の大規模推論サービスを支える推論フレームワーク「DeepInfer」をオフライン推論機能に絞って公開した。対応モデルは DeepSeek-V4.1-Flash で、FlashMLA / DeepGEMM / DeepEP などのカーネル、Attention DP・MoE EP、非同期スケジューリング、バッチ不変推論、構造化出力などを備える。NVIDIA SM100 と Huawei Ascend 950 に対応し、KVキャッシュ系などサービス全体に必要な部品は含まれない。

### Key Discussion Points

- **schneehertz**: DeepSeek 公表値として、V4.1 Flash の単一クラスタのスループットは日1,550億トークン、オフピーク価格でカード1枚あたり時給38ドルの売上だと紹介。
  - **abound**: GPU のデータセンター償却コストは時給38ドルよりはるかに安く、「AIは赤字」論への反証になる。
  - **schleck8**: オフピークは約50%引きなので実際はさらに有利。3万ドルの GPU は約35日で回収できる計算。
  - **freakynit**: 推論は非常に収益性の高い領域だとして収益見積もりツールを紹介。
- **mmaunder**: 米DHSの排除・除去命令が7月24日付で発効済みだったことから、今回の公開は命令の官報掲載に合わせた戦術的な動きではと推測。
  - **UncleOxidant**: それで DeepSeek に何の利益があるのかと疑問を呈した。
  - **alphabetag675**: 命令はこれまで非公開だったのかと質問。
  - **nycdatasci**: 命令の連邦官報へのリンクを共有。
- **wg0**: 米フロンティアラボにとっては自殺行為で、兆ドル評価への道が閉ざされると主張。
  - **drtgh**: その評価はもともと2008年のCDOのようなものだと反論。
  - **bonplan23**: 初代 DeepSeek でも同じ反応があったが、投資家は米欧企業が中国製を使うとは考えていないようだと指摘。
  - **raincole**: V3 の時も同じことが言われたが、2年で評価額は約4倍になった。
- **Bengalilol**: 中国は AI を原材料と捉え、全面オープン化で経済全体を伸ばしている。AI サービス企業という発想は旧来モデルの延長だと評価。
  - **maxloh**: Qwen、MiniMax、GLM は weights-available に移行しており、完全オープンなのは Xiaomi と DeepSeek くらいだと指摘。
  - **zoeysmithe**: Linux と同じで、AI を Office のサブスクのように扱うモデルは長期的に負けると予想。
  - **cat-snatcher**: 優位に立てば中国勢もクローズ化するはず。
- **GreenWatermelon**: 1枚あたり時給38ドルの報告と、KVCache を72時間以上保持できる点を紹介。

## 2. [Apple broke an essential presentation feature of iPads](https://teddysvoronos.com/2026-10-19-apple-broke-an-essential-presentation-feature-of-ipads/)

**Score:** 270 | **Comments:** 148 | [Post](https://news.ycombinator.com/item?id=50165208)

iPadOS 27 では、AirPlay で外部ディスプレイに投影中に発表用以外のアプリをタップすると、外部画面に iPad の画面全体が映ってしまう。そのため発表者ノートや投票結果が生徒に見えてしまう。GoodNotes は戻れば発表者ビューが復帰するが、Keynote は発表が終了し、PowerPoint は再起動まで固まるという。著者はフィードバックを送付済みで、教育や発表用途には iPadOS 27 を勧められないとしている。

### Key Discussion Points

- **btown**: 発表中にライブデモへ切り替えたいなら発表を完全に止める必要がある、という反対側の見方もある。Apple のデザイン文化は魔法のような体験を優先して選択肢を隠しがちだと分析。
  - **MomsAVoxell**: ライブデモ側のアプリが発表モードに対応すべきだと主張。
  - **varispeed**: 現状の挙動のまま、メモ用に2台目の iPad を使うのが最も簡単。
- **abujazar**: Apple はリリース前の QA をきちんとやるべき。27 は品質改善リリースのはずが、バグと UI 不具合の連鎖になっている。
  - **hbn**: X.0 リリースは常に荒れる。Snow Leopard も発売時は問題があった。
  - **afavour**: バグではなく「改善のつもり」の機能変更で、多数派には良くても著者の用途が壊れた。
  - **ponector**: どうせ買われるので QA の動機がない。
- **randusername**: 組み込み開発の経験では、ハードの締切がソフトに圧力をかける。Apple はハードを優先しているのでは。
  - **tikhonj**: 汎用の高級機は組み込みとは違い、ハードの制約が品質に響く状況ではない。
  - **10111001**: 後からパッチを出せるようになったことが品質低下の原因。
  - **zamadatix**: 既存機能の挙動が壊れた件で、新ハード統合の時間不足は当てはまらない。
- **e40**: 27 の評判が良いと聞いて通常より早く更新したが後悔。HomePod と Apple TV でもリモコンの誤動作が起きた。
  - **torben-friis**: 27 は 26 の惨状で基準が下がった分、相対的に評価されているだけ。
  - **jtmarl1n**: 自分も更新を遅らせる運用を続ける。
  - **herpdyderp**: iPad を 27 にしたところ壊れている箇所が多く、他の端末は更新しない。
- **qfwfq__**: 2018〜19年頃に、ドングル接続で描画アプリを共有・録画する手順が塞がれた。現在は Mac と QuickTime を経由する回避策を使っている。
  - **buccal**: Android には scrcpy があり、画面ミラーリングは簡単。

## 3. [Facebook now charging to post more than 2 links a month](https://mastodon.gamedev.place/@AshleyGullen/117473851565913919)

**Score:** 259 | **Comments:** 165 | [Post](https://news.ycombinator.com/item?id=50167536)

Mastodon の投稿によると、Facebook は自分のページに月3件以上のリンクを投稿することに、月額50ドル以上のサブスクリプションを課すようになった。コメント欄も対象で、英国ではまだ提供されていない。投稿者はこれを「とんでもない enshittification」と批判している。

### Key Discussion Points

- **josefresco**: 中小企業のサイト制作を支援しているが、FB ページが Web サイトの代わりになる流れを FB 自身が終わらせてくれたと皮肉った。
  - **iugtmkbdfil834**: サイト構築が容易になった今、これは興味深い動き。若年層の離脱でデフォルトのリーチも揺らいでいる。
- **rickcarlino**: 2010年代はファイルからの離脱、2020年代はハイパーリンクへの戦争だ。安全を口実にした囲い込みは残念。
  - **hungryhobbit**: ハイパーリンクへの戦争とは大げさでは。
- **belak**: 短い煽り文だけ投稿し、続きのリンクをコメントに貼るクリックベイトへの対策かもしれない。ただ収益化の拡大にも見える。
  - **sparky_twofort**: 知人の作家の Threads アカウントは、外部リンクを貼るため露出を絞られているようだ。
  - **hattmall**: 参加グループでは外部サイトへの詐欺スパムが多い。
- **meerita**: 2012年に Facebook をやめた。2019年に開発用にアカウントを作ったときは、友人や家族の投稿はほぼ途絶えていた。
  - **jeanpah**: 今はゴーストタウンで、若い頃のデジタルな足跡にすぎない。
- **codingisfreedom**: Meta の社員がなぜ尊敬されるのか分からない。10年以上社会に貢献していないのに高給をもらっている。
  - **ipozgaj**: React、PyTorch、RocksDB、zstd、eBPF など Meta 発のOSSは多く、Linux カーネルへの貢献も約12%を占める。
  - **probably_wrong**: Meta Research の無償公開は評価するが、社会の基盤を壊す事業との両立は説明できない。
  - **roadside_picnic**: 年収を人間の価値の尺度とみなす風潮を指摘。

## 4. [EMudhra Intermediate CA Compromise](https://emudhra.we-have-a-problem.com/)

**Score:** 168 | **Comments:** 75 | [Post](https://news.ycombinator.com/item?id=50166579)

2026年10月20日、eMudhra の中間CA証明書8件の秘密鍵が侵害されていると確認された。記者が各鍵でテストメッセージに署名できたことが根拠で、主要ルートプログラムに連なるため、攻撃者は任意のサイトになりすませる。Mozilla、Google、Apple、Microsoft は失効の仕組みでブロック済みだが、それ以外のクライアントはソフトウェア更新が必要となる。

### Key Discussion Points

- **khangaroo**: LLM に経緯を調べさせたところ、鍵を総当たりして、秘密スカラーがすべて1バイトだったと判明した。
- **sippingabonedry**: WebPKI は証明書の4時間寿命化に熱心だが、今回の問題は防げない。CA が鍵を付箋に書いて貼るような状況で、根本は証明書ポリシーと執行の問題。
- **galadran**: 影響は不均一。Firefox は OneCRL で数時間のうちに自動対処できたが、他のエコシステムは失効への投資が乏しい。
  - **crote**: Android の Firefox Mobile でデモサイトが警告なしで開くが、なぜ保護が効かないのか。
  - **dochtman**: upki の OneCRL 対応に関する Issue を共有。
  - **quotemstr**: 要するに通常の CRL / OCSP をやめ、ブラウザ管理の中央リストに置き換えたということでは。
- **hypfer**: 鍵が repository.emsign.com の証明書の近くに公開されていたという噂を紹介。IoT が大量に危険にさらされるのでは、と懸念。
  - **q3k**: 公開鍵から秘密鍵を簡単に復元できるほど鍵が小さかった。q3k は D=156、別の人は D=4 を見つけている。
  - **baby_souffle**: 「IoT がハックされやすくなる」点に皮肉な利点を見る。
  - **bombcar**: IoT は署名には十分でも、ピン留めがないので脆弱。
- **ghuntley**: Nix と LLM の overlay でパッチ適用を簡単にできる、という記事を紹介。

## 5. [Publish fake stats, get cited in LLMs](https://peec.ai/blog/publish-stats-get-cited-the-tactic-that-put-my-data-all-over-the-web)

**Score:** 167 | **Comments:** 93 | [Post](https://news.ycombinator.com/item?id=50165801)

Peec AI の Metehan Yesilyurt は、約50ドルで作った5万件の架空の統計を載せたサイト stateglobe.com を公開した。Google はこのサイトを検索結果から外したが、ChatGPT は取得し続け、1万件超の AI 経由セッションと330超のドメインからのリンクを得た。学術論文や銀行の投資リサーチにも引用された。著者は、LLM が穴埋めのために統計を探して検証しないことを示しつつ、捏造は非倫理的でこの手法も長くは通用しないと述べている。

### Key Discussion Points

- **jfrbfbreudh**: 地図の「トラップストリート」（盗用を見抜くための架空の道）に例えた。
  - **nonethewiser**: 盗用者に不利益を与える仕組みは何だったのか。著作権法に頼ったのかと疑問を呈した。
- **Amorymeltzer**: Doctorow の著書を引用し、エージェント向けのセマンティックWebは、不正をして得をする者がいるため成立しないと紹介。
  - **maltelandwehr**: 人間が使うインターネットでも同じではないか。
- **f311a**: ChatGPT のウェブ検索でも上位10件が LLM 生成物のことが多く、自分の出力を学習して劣化していく。
  - **cyral**: LLM 以前から SEO のために安価な低品質記事が上位に多かった。
  - **phatfish**: 話題によっては、検索はすでにスロップだらけで役に立たない。
  - **hyperpape**: 「LLM は見つけたものを吐き出すだけ」は2022年頃の見方。LLM 生成文を見分ける動機は事業者側に強くある。
- **acadapter**: Wikipedia の「citogenesis」と同じで、LLM 以前から存在した現象。
  - **ted_bunny**: 「citosis」だと cytosis に近すぎる。
- **nusob**: すでに同様の偽統計サイトが大量にあるだろう。

## 6. [How I got over 300 Tor exit nodes removed](https://kaba.cx/posts/20261020_Tor/)

**Score:** 127 | **Comments:** 33 | [Post](https://news.ycombinator.com/item?id=50166257)

2026年10月、Ebury バックドアに感染したサーバー群によって、Tor の出口リレー約333台（全体の約10%）が攻撃者の制御下に置かれていた。これらは SSH 接続を傍受してパスワードを盗み、コマンドを監視し、暗号化されていないメール通信も収集していた。著者の報告を受けて Tor Project がリレー運営者に通知し、該当ノードは停止されて BadExit に指定された。

### Key Discussion Points

- **phw**: 10年以上前に作った exitmap が今も役立っていると喜んだ。
- **96718923545809**: 鍵認証なら影響しないはず、と記事のパスワード窃取の説明に注目。ホスティング事業者の管理サーバーが Ebury に侵害されていた過去例にも触れた。
- **jszymborski**: 出口ノードが3000台というのは非常に少ない。
- **cesarb**: SSH の公開鍵認証は接続に束縛されるため、偽サーバーに接続しても秘密鍵は盗まれず、MITM でも認証は成立しない。相互認証の強みを示す例。
- **kabakabakaba**（著者）: 10月2日に約333台の出口が22番ポートを12台の傍受サーバーに転送し、paramiko ベースの MITM でパスワードを盗み Ebury の設置を試みたと要約。

## 7. [My Friend Bob Cringely](https://tyma.com/my-cringe-story/)

**Score:** 74 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=50166794)

Paul Tyma が、1996年に博士課程の学生だったときに Bob Cringely から Java の本を褒める電話をもらい、雑誌配信システム「Pronto」の開発契約につながった経緯を回想している。Pronto は公開されなかったが、以後約30年にわたり Bob のスタートアップの勧誘メールが続き、Paul は彼の2つの事業にも参加した。2001年の C# に関するメールが Bob のブログに掲載された話など、Bob の魅力と気前の良さを振り返っている。

### Key Discussion Points

- **js2**: Bob（Mark Stephens）の訃報や、ドキュメンタリー「Plane Crazy」を紹介。
- **phlipski**: 20年以上ブログを読んできた。Cringely の事業は、粘り強く方向転換して製品市場適合を見つける規律に欠けていたのでは。
- **1potato**: Cringely の話は良かったが、ホームに記事が3本しかなくて驚いた。
- **thelastgallon**: Paul Tyma は Mailinator の作者で、Java でスケールさせた話を覚えている。
- **xnickb**: 10月3日に亡くなっていたことを今日まで知らず、ショックを受けた。

## 8. [Voxtral 3](https://mistral.ai/news/voxtral-3/)

**Score:** 64 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=50168396)

Mistral が Voxtral 3 を公開した。新しい音声モデルと、聞き取り・推論・ツール呼び出し・応答をひとつのライブパイプラインで扱う音声エージェント SDK を組み合わせている。音声認識は50言語超、話者識別とドメイン用語バイアスに対応し、音声合成は感情・ペース・強調を調整できる。欧州のAPIでも自社サーバーでも動かせ、音声の処理場所や会話の保存を管理できる。

### Key Discussion Points

- **satvikpendem**: クローズドモデルなので興味がない。クローズドの STT/TTS には優れたものがあり、オープンでなければ使う理由がない。
- **drum55**: クローズドモデルで残念。TTS/STT はローカル運用では今一つな状況が続く。
- **Lucasoato**: 新モデルなのか、ページが変わっただけなのか疑問。Voxtral Mini 3B は Handy で優秀だった。
- **aliljet**: デモの遅延がほぼゼロに見えるが、どの程度リアルタイムなのか。

## 9. [Triplet of 'ghostly' galaxies hints at what dark matter is and isn't](https://www.quantamagazine.org/triplet-of-ghostly-galaxies-hints-at-what-dark-matter-is-and-isnt-20261014/)

**Score:** 36 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=50131997)

約6500万光年先の暗い銀河 DF2、DF4、DF9 には、ダークマターがほとんど無いように見える。2026年6月の研究は、通常の銀河2つの衝突でダークマターが素通りし、ガスと塵が固まって形成されたと提案している。多くの専門家はダークマターが実在の物質である証拠とみて、修正重力理論 MOND には不利だと見るが、Kinwah Wu や Stacy McGaugh などは衝突シナリオに疑問を呈している。

### Key Discussion Points

- **MattPalmer1086**: MOND 支持者の McGaugh が記事で引用されているが、提示された証拠に同意していない。彼のフォローアップ記事を紹介。
- **potamic**: 銀河衝突では実際の接触はほとんどなく、星は素通りするのではないか、と記事の説明に疑問を持った。
- **mac3n**: 記事へのリンクを共有。

## 10. [Google open-sources TorchTPU, a native PyTorch back end for TPUs](https://github.com/google-pytorch/torch_tpu)

**Score:** 5 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=50169053)

Google が、PyTorch のモデルと演算を TPU 上で実行するためのバックエンド TorchTPU を公開した。TPU 向けの ATen カーネル、XLA 計算のコンパイルキャッシュ、データ並列・テンソル並列、torch.compile 連携を備え、Llama、Qwen、ResNet などのサンプルを含む。

## Trends

- **AI インフラのオープン化**: DeepSeek の DeepInfer と Google の TorchTPU が並び、推論エンジンやハードウェア対応の公開が続いている。一方で Voxtral 3 のようにクローズドな動きへの不満も目立つ。
- **信頼の基盤の脆弱性**: eMudhra の中間CA鍵漏洩と、Tor 出口ノードの SSH MITM は、いずれもインフラ側の侵害・弱点が利用者に及ぶ例で、失効手段や鍵認証の有効性が議論された。
- **プラットフォームの劣化と囲い込み**: Facebook のリンク課金と iPadOS 27 の退行に対し、品質や利用者の自由が損なわれているという不満が集まった。
- **LLM と情報の信頼性**: 偽統計が LLM に引用された実験が、検索の質の低下や citogenesis の議論につながった。
