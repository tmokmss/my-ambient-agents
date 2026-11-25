---
title: "Hacker News Top 10 サマリー (2026-11-26 06:32 JST)"
date: "2026-11-25T21:32"
category: "summary"
summary: "1Password の社内侵害、AI による数学・計算量理論の相次ぐ成果、Home Depot の池でのシュノーケリングなど HN 上位10件"
tags: ["hackernews", "security", "ai", "mathematics"]
---

## 1. [1Password Security Incident](https://1password.com/blog/update-on-nov-2026-security-incident)

**Score:** 794 | **Comments:** 329 | [Post](https://news.ycombinator.com/item?id=50644817)

2026年11月19日、1Password は従業員の社内 GitHub アカウントが攻撃者に侵害されたことを検知した。攻撃者はソースコードにアクセスしてバックエンドサービスに悪意あるコードをプッシュし、一部顧客の管理用データ（名前、メールアドレス、公開鍵、SRP パラメータ、招待・復旧メール内のトークンなど）を取得した。顧客の Vault とその鍵は影響を受けていないと発表している。CI/CD のインフラ用シークレットはローテーション済みで、招待・復旧コードは6桁から10桁の英数字に延長された。

### Key Discussion Points

- **tptacek**: 従業員のラップトップが侵害され GitHub にコードを push される経路は、SaaS 侵害の典型パターン。従業員が増えるほど侵害確率は1に近づく。1Password は顧客がアンロック用の秘密を保持するため最悪の事態は避けられているが、それ以外の大半の被害は起こりうる。
  - **mikeocool**: 「SaaS セキュリティには異常な PR 流量を前提にする必要がある」というのは本当に必要か疑問で、1Password の製品改善が目に見えて増えたとも思えない。
  - **bfmalky**: 成熟した製品なら人手で PR を行単位でレビューすることは可能で、セキュリティ重視の会社には人による承認ゲートがあるべき。
  - **pdpi**: 真の最悪シナリオはフロントエンドの侵害で、ユーザーが入力するマスターキーを抜かれること。
- **ChrisHardie**: ローカル専用 Vault を使い続けているが、「悪意ある者が本番サービスにコードを push できる」状況は Vault 内容への中間者攻撃の土台になりうる。ローカル専用 Vault のサポート復活を望む。
  - **tptacek**: 自分も同じ立場。1Password がそのための製品を売るとは思えない（チーム向けシークレット管理の方が儲かる）。
  - **Johnny555**: 1Password は秘密鍵や Vault パスフレーズを保持しないので、ローカル専用でも安全性はさほど変わらないのでは。
  - **grey-area**: オフライン運用は 1Password 7 に取り残される、同期が不安定、ブラウザ自動入力が効かなくなるなど困難が多い。
- **ctidd**: 「バックエンドに悪意あるコードを push できた」点は重大な警告だが、発表では十分に説明されていない。main への push 禁止やブランチ保護はなかったのか。
  - **fjni**: 発表全体が曖昧で、従業員の端末が侵害されたのか、フィッシングか、GitHub が内部限定でなかったのかも不明。
  - **nairb774**: 本番デプロイ経路は main 以外にも複数あり、CI 資格情報の設定不備やブランチ間のビルドキャッシュ汚染でも突破しうる。
  - **SamuelAdams**: GitHub の組織設定で PR ルールは簡単に強制できるはずで、成熟した会社が未設定だったなら意外。
- **fn-mote**: 「暗号化された Vault はダウンロードされていない」と明言してほしい。侵害された企業の曖昧な表現には慣れてしまっており、あとで事実が出てくることを懸念する。
  - **treetalker**: 顧客宛メールには「顧客の Vault、シークレット、パスワード、それらを守る鍵はアクセス・取得されていない」と書かれていた。
  - **drum55**: ブログ側に明確な否定がないのは明白な省略であり、アクセスされたと読める。
- **xucheng**: Vault が無事なのは、攻撃者がそもそも暗号化 Vault にアクセスできなかったからか、E2EE 設計によるものか不明。結果は同じでも両者は等価ではない。

## 2. [Holy shit holy shit holy shit holy shit: The magnitude of what’s now happening](https://scottaaronson.blog/?p=10379)

**Score:** 498 | **Comments:** 352 | [Post](https://news.ycombinator.com/item?id=50646108)

Scott Aaronson が、AI による数学・理論計算機科学の成果が相次いでいることを論じるブログ記事。OpenAI は行列積の指数 ω がちょうど 9/4 だと主張し、フーリエ変換の線形ゲート複雑度についても上下界が一致するという preprint を出した。Yupan Liu が AI の支援を受けて QIP(2)=PSPACE を示したとも述べる。企業側が Lean の証明書で裏付けしているため、誤りが示されない限り正しいものとして扱うべきだとする。P≠NP の証明も遠くないと書き、暗号に関わる成果が出ているという信頼できる筋からの話にも触れるが、詳細は不明で噂は広めないとしている。

> **関連:** #3「Google releases Cogentic papers on integer factorization, discrete logs and more」も参照（同じ AI による数学・暗号論の成果ラッシュ）
> **関連:** #7「The polynomial Hirsch conjecture is false [pdf]」も参照（同じ AI 数学成果の一件）

### Key Discussion Points

- **pixl97**: 記事の「AI 特異点の始まりのような一週間」という感覚に同意。影響が検証可能なタスクに留まることを願うが、そうでなければ世界は非常に不確実になる。
  - **jwpapi**: 主要な数学・計算量の問題は近く解かれるだろうと想定でき、その後は問題空間が小さくなり生産上の制約が焦点になりそう。
  - **hn_throwaway_99**: Yann LeCun は Musk の「特異点へようこそ」に対し、リーマン予想を解くが別の単純なことができない「ギザギザな」特異点だと返した。
- **utopiah**: LLM がなくとも Lean や MathLib と大量の計算があればここまで来ていたのではないか。タイミングは企業が計算資源を宣伝目的で補助しているからでは。
  - **xg15**: 理論上は形式化が済んでいればそうだが、実際には形式化されておらず、それ自体に大きな作業が必要だった。
  - **reasonableklout**: 「ブルートフォースより少し速い」は過小評価で、Claude Code がプログラムを書くのもブルートフォースではない。
- **gorgoiler**: 19世紀末に物理は「解決済み」と思われたが量子力学が現れ、解決済み部分を「古典物理」と呼ぶことになった。非古典的な数学の世界がどうなるか見届けたい。
- **aabajian**: 理解しやすさでは最も簡単なのにとてつもなく難しいコラッツ予想の証明が見たい。
  - **kaffekaka**: ゴールドバッハ予想も同じくらい分かりやすい。
  - **ex-aws-dude**: コラッツは停止性に似ており、決定不能になる可能性はないか。
- **rufuspollock**: ケンブリッジで数学を修めた立場から、これは「人間の数学の終わり」で、新元素の合成よりも化学そのものの終わりに近いと感じる。
  - **RealityVoid**: 成果を出したのはプロの数学者であり、数学は健在だが形が変わるだけ。
  - **lukev**: 計算機が算術や微積分を自動化したときも終わりではなかった。数学者の主な仕事が証明の生産でなくなるだけ。

## 3. [Google releases Cogentic papers on integer factorization, discrete logs and more](https://github.com/google-research/google-research/tree/master/cogentic_research_papers)

**Score:** 394 | **Comments:** 308 | [Post](https://news.ycombinator.com/item?id=50642086)

Google Research が、AI 主導の研究取り組み「Cogentic」による論文群を公開した。README からは、無条件の整数因数分解（L_N[1/3, O(1)]）、固定標数の有限体での離散対数、双行列ゲームの 1/5 近似ナッシュ均衡、ログランク予想などの論文が並ぶ（README にはタイトルと日付のみでアブストラクトはないため、内容はタイトルからの推定）。Apache 2.0 で公開されている。

> **関連:** #2「Holy shit holy shit holy shit holy shit: The magnitude of what’s now happening」も参照（同じ AI による数学・暗号論の成果ラッシュ）
> **関連:** #7「The polynomial Hirsch conjecture is false [pdf]」も参照（同じ AI 数学成果の一件）

### Key Discussion Points

- **fidotron**: 信頼できる人物から、これは氷山の一角だという噂が出ている。
  - **bscphil**: 仮に「P での因数分解」が使えるなら、公開された 2048 ビット RSA チャレンジ数の因数分解を公開するのが唯一妥当な行動だろう。
- **martythemaniak**: AlphaGo と同様、人間が直観と試行錯誤で探索してきた巨大な探索空間を、より大規模な LLM が探索しているだけで、近年の数学的発見は驚くことではない。
  - **kannanvijayan**: 植物遺伝学者だった父が、配列決定技術の登場で一生をかけた遺伝子の特性解析が変わったと語っていたのを思い出す。
  - **gregdeon**: 驚くことではないとは言えず、IMO 金メダルが頂点だとは思わなかったが、リーマン予想や行列積が完全に解かれるとは予想しなかった。
  - **tkz1312**: ChatGPT 登場時なら笑い飛ばしただろう。証明自動化に長く携わってきたが、ここまでは予想していなかった。
- **wanderingpixel**: 使われたモデル、ハーネス、プロンプトなどの具体は分かっているのか、再現するには何を学べばよいのか。
- **dpweb**: 今ほどコンピュータサイエンスに入るのにわくわくする時はない。
  - **bemtevi**: 知識を吸収したい人と、獲得の過程を重視する人がおり、後者にはコミュニティの場が重要。
  - **hyperbovine**: 分野には素晴らしいが、研究者個人にはひどい状況。
- **unknown-unknown**: ナビエ–ストークス、リーマン予想などの進展を見て、数学は資金を投じても解決できないという自分の信念を考え直した。
  - **curt15**: 米国の数学の連邦予算は年間約1億ドル。LLM に投じられた数十億ドルを人間の研究に回していたらどうなったか。
  - **haolez**: 数学は答えを自動検証しやすい分野で、無限の時間があれば乱数生成器でも同じ成果に至れる。成果を貶めるつもりはない。

## 4. [A few questions for the guy who went snorkeling in a Home Depot retention pond](https://www.vox.com/down-to-earth/511999/home-depot-retention-pond-snorkel-joseph-ricketts)

**Score:** 381 | **Comments:** 93 | [Post](https://news.ycombinator.com/item?id=50643129)

Vox が、Home Depot の雨水調整池でシュノーケリングした Joseph Ricketts にインタビューした記事。記事本文は取得できなかったため（Vox は WebFetch がブロックされ、Wayback も取得できなかった）、タイトルとコメントからの推測による要約で、池の水中で生き物を観察した映像が話題になったとみられる。

### Key Discussion Points

- **baoooooooooooo**: Joseph Ricketts のファンで、他の動画もぜひ見てほしい。初期 YouTube のような純粋な好奇心が伝わる点がこの動画にもよく表れている。
- **goda90**: 小学校で川に入り水質を調べる授業があった。今も公立学校でこうした保全教育はあるのか。
  - **onefiftymike**: 30年ほど前に放課後クラブで同様の活動をした。大手自動車メーカーが道具とボランティアを提供していた。
  - **HeyLaughingBoy**: 自分の田舎の学区では今も、近くの湿地で教育をしている。
- **Juvination**: 高速道路の真横でも生命が美しいことが分かる動画。
  - **santadays**: ヘビ恐怖症だが、この人がミズヘビを追う様子を見て初めて嫌悪より興味が勝った。
  - **whicks**: チャンネル全体がこうした映像で、自然に語らせる手腕が素晴らしい。
- **AlphaWeaver**: チャンネル全体を推薦。撮影と音響設計が一級で、動画自体が瞑想的。
  - **cbsks**: 動画の音楽も本人が作っている。
- **melenaboija**: 現代文明は自然の上に作り物のセットを築いているが、下水道のネズミや Home Depot の池の水生生物のように、自然はどこにでもある。

## 5. [Windows Loudness Equalization, reverse-engineered and ported to PipeWire](https://github.com/xoxorwr/pw-loudness-eq)

**Score:** 294 | **Comments:** 165 | [Post](https://news.ycombinator.com/item?id=50641171)

Windows の Loudness Equalization（`WMALFXGFXDSP.dll` から解析）を PipeWire へ移植したプロジェクト。アプリごとの音量を均し、小さい音と大きい音を同程度にする。出力リミッター（`AudioEng.dll` 由来）でクリップを防ぎ、GTK3 の設定ウィンドウでオン/オフとリリース時間を設定できる。PipeWire 1.4 以上が必要。

### Key Discussion Points

- **dintech**: Windows には実はオーディオリミッターがあり、共有モードのレンダーパスではピーク付近が約 -0.1dB 圧縮される。WASAPI 排他や ASIO では起きない。
  - **bob1029**: Windows ミキサーを100%にして使うことはなく、下流のアンプで調整している。
  - **Onavo**: 共有モードと WASAPI 排他の違いは何か。
- **ZoomZoomZoom**: 周波数依存のゲイン操作をしないなら「Equalization」ではなくラウドネスのノーマライズで、笛などの純音も増幅されやすい。
  - **icegreentea2**: Windows の設定名がそうなっているだけで、ノート PC のスピーカーなどでは有用。
  - **hrncn**: 「サービスとしてのプロンプト」のように、Windows が何をしているか見るのが面白かった。
- **gbraad**: DLL をリバースエンジニアリングする必要性が分からない。実装は簡単で、倫理的に問題になりかねない。
  - **asveikau**: コードを見たがアルゴリズム部分は非常に短く、大半は足場。
- **pocketman**: 求められているのはリミッターで、アルゴリズムは多数ある。
  - **teolandon**: リミッターはまさにダイナミクスを削るもの。
  - **bryanlarsen**: アルゴリズムよりチューニングが重要で、Microsoft は多様なスピーカーでテストしたはず。
- **getfacl**: 「小さい音と大きい音を同程度にする」のは望まない。作品のダイナミックレンジには理由がある。
  - **hackinthebochs**: BGM として聴くので、ラウドネス均一化をオンにして楽曲を聴いている。
  - **DaveFlater**: ラウドネスの知覚正規化は上手くいかず、ブリックウォールリミッターは過渡的なポップ音に敏感すぎる。

## 6. [I checked Clojure's core with Lean and found unreported bugs](https://s.conao3.com/blog/2026/e4f733)

**Score:** 144 | **Comments:** 52 | [Post](https://news.ycombinator.com/item?id=50642939)

Clojure の core（Java で書かれた部分）を Lean 4 でモデル化して反例を探し、コレクションは java.util との差分テストで検証して、JIRA や ask.clojure.org に報告がない17件のバグを見つけたという記事。`vector-of` への reduce、HAMT のハッシュ衝突ノード、型ヒントなしの関数型インターフェース呼び出しなどが含まれる。HAMT 本体には300万回の操作で不一致がなく、バグは木構造の外や仕組みの接点にあった。Clojure 1.12.7 と JDK 21 で検証している。

### Key Discussion Points

- **rvprasad**: リストの中に問題が2件あった。`(.indexOf (seq (byte-array [1 2 3])) 2)` はバイト配列の要素に Long を渡しており型の誤用で、`get` が引数を型変換する挙動も報告に値しない。ノイズを減らせばもっと有益。
- **yababa_y**: sbcl、clozure、ACL2 でも同様に数十件の問題を見つけた（リポジトリへのリンクあり）。
- **networked**: この種の作業は Lean で行われるのか。プログラム検証には Rocq（旧 Coq）だと思っていたが、LLM は Lean の方が得意なのか。
- **vitorsr**: Nubank が Clojure で動いており Cognitect を買収しているので、基本的な型や関数は完璧だと思っていた。
- **gritzko**: Clojure が載る JVM は巨大で検証が困難。理論面ではとても面白い。

## 7. [The polynomial Hirsch conjecture is false [pdf]](https://github.com/openai/math/blob/main/preprints/Superpolynomial-graph-diameter-of-simple-polytopes-November-24-2026/paper.pdf)

**Score:** 76 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=50644980)

OpenAI の preprint で、単体多面体グラフの直径が超多項式になるという内容。PDF は WebFetch で本文を抽出できないため、タイトルとコメントからの推測による要約。コメントによれば、これは多項式時間の単体法が存在しないことを意味する。

> **関連:** #2「Holy shit holy shit holy shit holy shit: The magnitude of what’s now happening」も参照（同じ AI 数学成果ラッシュの一件）
> **関連:** #3「Google releases Cogentic papers on integer factorization, discrete logs and more」も参照（同じ AI 数学成果ラッシュの一件）

### Key Discussion Points

- **Luke2642**: 線形制約で表される問題の有効解は多次元の形の頂点で、最適解を探すアルゴリズムが単体法という説明を平易に試みている。
- **GIFtheory**: 多項式時間の単体法アルゴリズムは存在しないことを意味する。元の予想は2010年に反証されており、これは後始末に近い成果。
- **jwpapi**: 主要な数学・計算量の問題は近く解かれるだろう。その後は問題空間が小さくなり生産上の制約が重要になる。
- **tensegrist**: 立方体をグラフとみなし、任意の2頂点間の最悪の辺数を多面体一般に問うもので、元の Hirsch 予想は n-d ステップで足りるとしたが、これは偽だった。
- **_1**: 1000本の preprint があるフォルダでどうやってこれを見つけたのか。

## 8. [SSH is a GUI framework](https://zydra.sh/articles/ssh-is-a-gui-framework/)

**Score:** 67 | **Comments:** 32 | [Post](https://news.ycombinator.com/item?id=50589784)

SSH を、Kitty グラフィックスプロトコル、通知（OSC 99/777/9）、クリップボード（OSC 52/5522）、マウス、同期出力などの端末プロトコルを通せる多重化暗号化ストリームとみなし、SSH だけでデスクトップ環境を描画する microVM「zydra.sh」を作ったという記事。`ssh zydra.sh` で試せ、合成を高速化する工夫も紹介している。

### Key Discussion Points

- **orbital-decay**: 端末が使いにくい描画キャンバスを提供するだけで SSH が GUI フレームワークになるわけではない。ビットマップに頼らない意味的な遠隔アクセスプロトコルを設計する方が良い。
- **nico**: 大学で学生向けサービスを Telnet 経由で提供していたのを思い出す。成熟したアプリで、Web 版に置き換わった。
- **goranmoomin**: 端末プロトコルで GUI をやる前に、ブロック間のテキスト選択とコピー＆ペーストのプロトコルが必要で、空白を削るツールが要らなくなる。
- **rvz**: SSH はこの用途に向かず、kitty や sixel のエスケープコードはリモートコード実行の危険も持ち込む。
- **st_goliath**: その論理なら TLS は Web ブラウザになる。記事の説明は VNC に触れつつ WebKit や WASM に話が逸れている。

## 9. [Britain's ghost stations](https://spectator.com/article/britains-ghost-stations-are-fascinating/)

**Score:** 58 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=50645074)

Spectator の記事で、列車がほとんど停まらない英国の「ゴーストステーション」を取り上げる。記事本文は取得せず、タイトルとコメントからの推測による要約。

### Key Discussion Points

- **andyjohnson0**: Achanalt は閉鎖しても得るものがなく、線路は残り列車も通るので残っているのだろう。おそらくリクエスト停車駅。
- **fishtoaster**: CAMRA のパブ巡りで似た駅に降りた。停車を要求しないと止まらず、帰りもタクシーのように列車を止める必要があった。
- **fidotron**: ビーチング削減で影響を受けた地域で育った。規模の大きな町の駅が廃止され、辺境の駅が残るなど配置が奇妙だった。

## 10. [GPT-6.2 Astra is the first model to beat Googlers' code golf records](https://bjin.github.io/go-codegolf-benchmark/#leaderboard)

**Score:** 51 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=50601280)

2015年に Google 社内サイト go/codegolf で毎週行われたコードゴルフの問題32問を、8言語でフロンティアモデルに30分ずつ解かせ、バイト数で当時の記録と比較するベンチマーク。GPT-6.2 Astra が Google 社員の記録を初めて上回ったとされる。

### Key Discussion Points

- **lnxsxu**: 「4のべき乗」のトリックを15で試してみて腑に落ちた。他のゴルフ問題でも使われた例はあるか。
- **varispeed**: ベンチマークで勝つために解答で学習させているだけでは。Astra は法律文書で基本的な英文を書くのも苦手で、古いモデルよりかなり劣る。
- **jiggawatts**: 提出されたコードはどこにあるのか、スコアしか見えない。
- **co_dh**: k 言語を追加してほしい。k がないコードゴルフはあり得ない。

## Trends

- **AI による数学・理論計算機科学の成果ラッシュ**: 行列積の指数 9/4、多項式 Hirsch 予想の反証、Cogentic の因数分解・離散対数論文が同時に出た（#2, #3, #7）。「人間の数学の終わり」という声と、数学者の役割は変わるだけという反論が並び、因数分解が暗号に与える影響への関心も高い。
- **ソフトウェアサプライチェーンと開発体制のセキュリティ**: 1Password の件（#1）は従業員の GitHub 資格情報から本番へのコード push が攻撃経路になりうる点に議論が集中した。
- **形式検証・ベンチマークでの LLM 活用**: Clojure を Lean で検査した例（#6）や Go コードゴルフのベンチマーク（#10）のように、検証可能な課題での AI の成果が目立つ。
- **身近な自然・懐かしの技術**: Home Depot の池（#4）、ゴースト駅（#9）、端末で GUI を描く試み（#8）、PipeWire への音量均一化の移植（#5）など、趣味性の高い話題も上位に入った。
