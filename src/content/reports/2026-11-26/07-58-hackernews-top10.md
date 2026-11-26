---
title: "Hacker News トップ10 サマリー（2026年11月26日 16:58 JST）"
date: "2026-11-26T07:58"
category: "summary"
summary: "AIによる数学証明の衝撃、1Passwordの社内GitHub侵害、NYTのPhotoshop警告、HNのAsk HN枯渇問題など上位10件を要約"
tags: ["hackernews", "ai", "security", "lean", "1password"]
---

## 1. [Holy shit holy shit holy shit holy shit: The magnitude of what's now happening](https://scottaaronson.blog/?p=10379)

**Score:** 1382 | **Comments:** 1207 | [Post](https://news.ycombinator.com/item?id=50646108)

計算複雑性の研究者 Scott Aaronson が、AI ラボが Lean の証明書で裏付けた形で数学の難問を次々に解いている現状を受け、「P ≠ NP の証明も遠くない」と実感したと綴るブログ。AI を憎むか歓迎するかは自由だが、「何が起きているか」を否定するなと訴え、些細な不一致を突いて未解決問題が解かれていない風に装う態度を批判している。また、複数の信頼できる情報源から、AI ラボが暗号分野で「爆弾級」の成果を抱えていると確信しているが、詳細は未確認で噂は広めないと述べている。

> **関連:** #3「Much shorter version of GRH Lean verification from Anthropic」も参照（同一イベント：AI による Lean 証明の成果とその圧縮版）

### Key Discussion Points

- **gorgoiler**: 19世紀末に物理学が「解決済み」とされた後、量子力学の登場で従来部分が「古典物理」になった例を引き、「非古典的な数学」の世界がどうなるのか見届けたいと述べる。
  - **lukev**: 数学は物理と違いルールが恣意的で新しい数学は無限に作れる。今後は何が「面白く」「不合理なほど有効」かが数学者の主な関心になると指摘。
  - **hinkley**: 宇宙論の「危機」に相当する、数学における既知の盲点は何かと問う。
  - **mycall**: Lean がこの変化を最前列で見ることになりそうだと述べる。
- **aabajian**: 証明してほしいのはコラッツ予想。理解は最も簡単なのに途方もなく難しい。
  - **kaffekaka**: ゴールドバッハ予想も同じくらい分かりやすい。
  - **andoando**: 双子素数予想が一番だと言う。
- **utopiah**: LLM なしで Lean と Mathlib と計算力だけでどこまで進んだのか、タイミングは大企業が計算資源を宣伝目的で補助しているからでは、と疑問を呈する。
  - **xg15**: エージェントの仕事の相当部分は未形式化の数学を Lean に形式化することだったはずで、Lean だけでは進まなかったのではと推測。
  - **reasonableklout**: 「ブルートフォースより少し速い程度」は過小評価で、Lean の貢献以上に RLVR の検証機構が重要だったと主張。
  - **nl**: Lean が無ければ別の形式検証手段もあり得たが、LLM 無しなら「ほぼゼロ」だっただろうと断言。
- **sunir**: Latour の「計算の中心」の概念から、Tycho Brahe のデータ整理が Kepler の発見を可能にしたように、知識の正規化が科学を進めると論じる。
  - **edg5000**: 科学だけでなく技術開発全般や社会の運営規模が加速すると予想。
  - **giladd**: 知識の正規化は LLM の強さの良い説明で、ロボティクスには実世界センサーデータの同様の整備が要ると述べる。
- **jsLavaGoat**: AI が公理的な数学に強いことから他分野の「解決」や人類滅亡までは導けず、Aaronson は自分の分野が解かれたから特異点だと考えているにすぎないと批判。
  - **bawolff**: 防御のために「数学を解いただけ」と言わねばならないほど基準が動いており、1年前なら馬鹿げた話だと反論。
  - **baubino**: 計算機が計算的な問題を解いただけで、他分野への一般化は自明でないと同調。
  - **amarko**: 「AI は X が得意だが Y はできない」という論法は、Y が X に移り続けてきたため説得力が落ちていると指摘。

## 2. [1Password Security Incident](https://1password.com/blog/update-on-nov-2026-security-incident)

**Score:** 1377 | **Comments:** 578 | [Post](https://news.ycombinator.com/item?id=50644817)

1Password は、2026年11月19日に従業員の GitHub アカウントが侵害され、攻撃者がソースコードにアクセスして悪意あるコードをバックエンドに push し、一部顧客の名前・メールアドレス・アカウント ID・招待や復旧メールのリンクのトークンなどを持ち出したと公表した。非公開リポジトリのソースコードのコピーと CI/CD へのアクセスもあったが、保管庫の内容とそれを守る鍵は影響を受けていないとしている。認証情報はローテーション済みで、利用者にはフィッシングへの注意を促している。

### Key Discussion Points

- **ChrisHardie**: ローカル専用の保管庫を使っているが、「攻撃者が本番サービスにコードを push できる」こと自体が、復号済み保管庫への経路を差し込まれる土台になり得ると懸念。
  - **tptacek**: 自分も同じ状況で、1Password が個人向けに売れるものがあっても、チーム向けの方が儲かるはずなので期待していないと述べる。
  - **phase_9**: KeePass から自己ホストの VaultWarden に移行した体験を共有。
  - **Johnny555**: 1Password は秘密鍵やパスフレーズを持たないので、アプリ自体が改ざんされる懸念ならローカル保管庫でも安全とは限らないと反論。
- **tptacek**: SaaS 企業の最大の攻撃経路で、従業員が増えるほどノート PC が侵害される確率は1に近づき、GitHub に push されたコードがデプロイされれば終わりだと解説。
  - **mikeocool**: 「PR の量を極端に増やすのが前提」は本当に必要なのか。今年の機能改善は見えず、障害と侵害だけが増えたと疑問視。
  - **bfmalky**: 成熟した製品なら人間による行単位のレビューは可能で、セキュリティ企業には人手の承認ゲートがあるべきだと主張。
  - **ceocoder**: 2020年に同様の議論を起こしたと述べ、ローカル保管庫の必要性を訴える。
- **fn-mote**: 「暗号化保管庫はダウンロードされていない」と明言する声明がなく、漏洩企業の曖昧な表現に慣れているため不安だと述べる。
  - **treetalker**: 顧客へのメールには「保管庫・秘密情報・鍵は取得されていない」と書かれていたと報告。
  - **DrRobinson**: 同じ文面のメールを受け取ったと確認。
  - **drum55**: ブログに否定文がないことは、アクセスされたという意味だと読んだと述べる。
- **mikestylz**: 従業員 PC 侵害から、特定パケット処理時に RCE となる一見無害なバグを仕込み、検知されないまま資格情報が全面侵害される多段攻撃の可能性を危惧。
  - **talmr**: 父親が紙のノートに書くパスワードの方が 1Password より安全かもしれないと述べる。
- **K0nserv**: 多くのサイトでパスキーと第二要素を併用できず、パスキーを 1Password に入れると「パスワード＋外部の第二要素」より弱くなると懸念。
  - **6thbit**: サイトがパスキーを第二要素のみとして扱えば知識を分割できるが、実際にはメールリンクのフォールバックがあると指摘。
  - **dabeeeenster**: TOTP やパスキーをパスワードマネージャーに入れた時点で第二要素ではなくなる。
  - **hk1337**: 自分は YubiKey をオンライン保管庫と分けて使いたい。

## 3. [Much shorter version of GRH Lean verification from Anthropic](https://github.com/lsernau/grh-lean)

**Score:** 425 | **Comments:** 216 | [Post](https://news.ycombinator.com/item?id=50648050)

Dirichlet L 関数に対するリーマン予想（RH）と一般化リーマン予想（GRH）の Lean 4 による証明のリポジトリ。Levent Alpöge と Claude による証明を基に、Anthropic の同僚と Claude が約300,000行の可読版と約76,000行のコンパクト版に短縮した。公理は `propext`・`Classical.choice`・`Quot.sound` のみ。READMEは「機械検証のみで、数学者が通読しておらず論文も無い研究成果物」と明記している。

> **関連:** #1「Holy shit holy shit holy shit holy shit: The magnitude of what's now happening」も参照（同一イベント：AI による Lean 証明の成果）

### Key Discussion Points

- **bananaflag**: 約1,700万行から約7.6万行へ、99.56% の削減だと指摘。
  - **gregdeon**: 7.6万行版は行を詰め込んだ「ゴルフ」版で可読性は低く、現実的な版は約30万行。未使用の中間結果も残っていると補足。
  - **w-m**: 数百人の貢献者によるコミュニティ主導の圧縮は33%削減にとどまっており、なぜこれほど差が出るのかと問う。
  - **josephg**: LLM 出力を LLM で単純化するコツを知りたい。再プロンプト以外ではうまくいかない。
- **gre**: 「証明が巨大で洞察が無いのが問題」という Tao の指摘に対し、証明を圧縮して説明できる LLM でそれはもう克服されたのかと問う。
  - **colechristensen**: 圧縮は洞察を得やすくするものだが、Tao の指摘を否定はしないと答える。
  - **traes**: すべての証明がゴルフ可能とは限らないと述べる。
  - **c7b**: LLM は任意の難度の内容を任意の聴衆向けに説明するのが得意で、あの指摘は元から深刻でなかったと主張。
- **spootydooty**: 可読版は「既知の数学」と「新しい数学」の区別が明確で文書も充実しており、理解の助けになると評価。
  - **tito**: 自宅で数時間で検証できるとして、SETI@home に倣った検証者のリーダーボードを紹介（17M 行版で独立検証者18名）。
- **delegate**: Lean コードを人間が読んで検証するのは現実的かと疑問を呈する。
  - **ngruhn**: 構文は慣れるが、難しいのは専門用語で、数学の常として直観に時間がかかる。
  - **Paracompact**: 読みにくいのは主に証明本体で、定理の文が読めれば証明は緩く追って再構成でき、人間が書く Lean 証明より素直だと説明。
  - **greenknight**: 質問者が貼ったのはコンパクト版で、可読版は別のパスにあると指摘。
- **aborsy**: Lean の学習難度を尋ねる。
  - **kccqzy**: Lean の書籍一覧を紹介し、数学用かソフトウェア用かで選ぶよう助言。
  - **ajs1998**: Natural Number Game から始めるのを勧め、構文より背景領域の学習が大変だと述べる。
  - **conradkay**: 習得する頃にはモデルがさらに進むので、Lean との翻訳役として使えばよいと考える。

## 4. [The New York Times warns photographers not to update Photoshop over AI features](https://www.theverge.com/ai-artificial-intelligence/1041227/the-new-york-times-warns-photographers-not-to-update-photoshop-over-ai-features)

**Score:** 336 | **Comments:** 287 | [Post](https://news.ycombinator.com/item?id=50647673)

The Verge の記事を基にしたスレッド。ニューヨーク・タイムズが、Photoshop の AI 機能によって写真に AI 編集のメタデータが付くことを避けるため、写真家にアップデートしないよう警告したという内容。（本文は未取得のため、タイトルとコメントに基づく要約）

### Key Discussion Points

- **daylily**: Affinity のような競合が追いつく好機だと見る。
  - **Mobius01**: Affinity は Canva に買収され、アプリが統合されて無料化され、AI 機能は有料サブスクの背後に置かれたと指摘。
  - **gaws**: Canva に買収された時点で Affinity は競争に敗れたと述べる。
- **jjcm**（創作ツール業界の者）: 画像では「完全に AI 生成」と「色調補正や切り抜き、レイアウト改善に AI を使った」の区別が難しく、権威あるブランドは「AI 生成」ラベルを付けられるのが痛手になると説明。
  - **dang**: テキスト分野でも、文法修正のつもりが ChatGPT へのコピペと同程度の痕跡を残す例が繰り返し見られると述べる。
  - **orbital-decay**: 報道写真ではそもそも AI の問題ではなく、Reuters は軽微な編集も認めず、写真家は JPEG で撮影するほどだと説明。
  - **qingcharles**: 写真編集者として、コードの除去や 9:16 へのリフレーミングに AI 機能が便利で、99% はうまくいくと述べる。
- **h4kunamata**: 買い切りの競合が増えサブスクは終わりつつあり、NYT のような大手が移れば他も続くと見る。
  - **gertop**: Photoshop の唯一の有力な競合 Affinity Photos は買い切りをやめ、コアは無料で残りはサブスクだと反論。
- **jhoho**: 欧州のある通信社は AI タグを避けるため Photoshop から離れつつあり、Adobe もいずれ検証システムを導入するだろうと推測。
- **sickcodebruh**: 画像や音声に生成 AI が含まれることを喜ぶ人は極めて少なく、関わること自体が負債になると述べ、今週の Tidal の禁止を同様の例として挙げる。
  - **zhivota**: アジアでは AI の看板、政府のチラシ、動画に抵抗は見られないと反論。
  - **m-hodges**: 母親が Facebook の AI 画像や動画を AI と分かった上で面白がって送ってくると述べる。

## 5. [Tell HN: Lots of Ask HNs again](https://news.ycombinator.com/item?id=50649864)

**Score:** 241 | **Comments:** 87 | [Post](https://news.ycombinator.com/item?id=50649864)

HN モデレーターの dang による告知。/ask ページに Ask HN が少ししか出ない問題の原因は、/ask の候補が、フロントページ生成用の上位1500件のランキングから引かれていたためだと説明している。テキスト投稿の割合が減ってこの母集団が枯渇したことが原因で、Ask HN 専用のランキングを別に計算することで解決したという。

### Key Discussion Points

- **koolba**: 上位 N 件ではなく上位 M（> N）件を取って後でフィルタする最適化は、結果が足りればユーザーに分からず速いが、足りないと困ると述べる。
  - **zahlman**: 速いのは特定の M についてキャッシュしているからだろうと推測。
- **minimaxir**: 最近、Show HN が投稿直後に [flagged] [dead] になることが多いが想定通りかと質問。
  - **dang**（投稿者）: 本文が生成 AI によるものと分類されたためだと説明し、ガイドラインを案内。
  - **jarym**: 自分も2回なり、AI は使っておらずガイドラインにも従ったつもりだと述べる。
  - **gnabgib**: 自動処理も人間によるフラグと同じように表示される。
- **eterm**: /newest から、投票かコメントが1件以上付いた投稿だけを出す /active のようなページを要望。
  - **dang**（投稿者）: /newest の希釈は問題だが、/newest に必要な常連の注意を奪いかねないので良い解決策ではないと返す。
  - **altairprime**: /new は閲覧する価値があり、スパマー報告も含め見返りが大きいと述べる。
  - **swed420**: hckrnews.com などの代替サイトを紹介。
- **vemv**: 折りたたんだコメントが約2週間で戻ってしまうので、月次の whoishiring スレッド用に1か月保持してほしいと要望。
  - **dang**（投稿者）: 修正が必要だと認識しているが、折りたたみ状態の読み込みがサーバー再起動で最も遅い部分なので簡単ではないと説明。
- **LukeShu**: 2ページ目以降で「hide」すると、30件目の記事が補充されるバグがあると報告。
  - **dang**（投稿者）: 長年のバグだろうとして修正を検討し、ランキングが変動する中で何を補充すべきかを皆に尋ねる。
  - **Alex3917**: モバイルで「flag」と「hide」を誤タップしがちなので、非表示にする設定が欲しいと述べる。
  - **93po**: ダークモードを求める。

## 6. [Collection of preserved UI style guides](https://aresluna.org/ui-style-guides/)

**Score:** 137 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=50649834)

Marcin Wichary による、1980年代前半から現在までの各社の UI スタイルガイド（インターフェースガイドライン）を保存した69件のコレクション。Amiga、Android、BlackBerry、CDE/Motif などの PDF、ウェブサイトのミラー、Internet Archive へのリンクがまとまっている。

### Key Discussion Points

- **TehShrike**: 2000年代前半の Windows UX ガイドラインが良い教材だったと述べ、見た目より機能性と使いやすさを重視するデザイナーの文書を読めるのは嬉しいと評価。
- **0xd1r**: BlackBerry 10 は失敗したが、競争という観点で同 UI ガイドの記述が良かったと紹介。
- **pigbearpig**: Palm WebOS の UI とマルチタスクを称賛しつつ、一番好きなのは Windows Phone の Metro で、タイルが反転して通知を見せる点が時間の節約になったと語る。
- **qntmfred**: 先週 Metro UI のドキュメンタリーが公開されたと紹介。
- **dofm**: OpenLook の洗練された UI が懐かしく、Palm OS も似た雰囲気だったと述べる。

## 7. [Minipg: PostgreSQL as a Single Executable](https://progrium.github.io/minipg/)

**Score:** 92 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=50650892)

PostgreSQL を単一の実行ファイルとして使えるツール。`.pgdb` ディレクトリがデータ・設定・認証情報・Postgres バージョンを含むデータベースで、コマンドが必要とするときにサーバーが起動し、アイドル時に自動停止する。Docker Hub の postgres:18-alpine イメージを埋め込み、Zig ライブラリとして使う h9 で、Linux カーネルも VM イメージも Docker も無しに実行する。

### Key Discussion Points

- **anilgulecha**: pglite はブラウザやテスト用に優れているが、MySQL/MariaDB にも同等のものが欲しいと要望。
- **galaxyLogic**: SQLite を Vercel の PKG EXE に載せる際に可動部品が多く苦労したため、DB サーバーが1ファイルで済むのは素晴らしいと評価。
- **nomercy400**: Docker 無しで postgres alpine のイメージを使っている点に感心し、h9 は若い組み込みハイパーバイザーだと指摘。
- **Onavo**: pglite と比べてどうなのかと質問。
- **cantaffordsht**: デモがページを開くだけで約35MBをダウンロードするのは困ると指摘。

## 8. [Lions' Commentary on Unix: Why It Was Secretly Copied for 20 Years](https://fosscomics.com/posts/17.%20Lions%27%20Commentary%20on%20Unix/)

**Score:** 58 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=50651719)

F/OSS Comics の第17話。ニューサウスウェールズ大学の John Lions が1976年に Unix V6 のカーネルソースを解説する講義ノートを作り、これが他校や Bell Labs にも広まった。1979年に AT&T が V7 のライセンス条件で授業でのソース開示を制限した後も、この本が長年こっそり複写され続けた経緯を描く。

### Key Discussion Points

- **ajasmin**: Lions の本の、現代の良い復刻版はあるかと質問。

## 9. [Show HN: Synth Patch Hero](https://swarkentin.github.io/synth-patch-hero/)

**Score:** 18 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=50623232)

モジュラーシンセのパッチングを学ぶブラウザゲーム。各「ギグ」で参照音が与えられ、モジュールをつないでノブを回し、耳とグラフで90%一致させれば報酬が得られる。各ギグで合成の要素を1つずつ学べ、デスクトップとスマホで動く（ヘッドホン推奨）。

### Key Discussion Points

- **vunderba**: 自分のシンセ音作りを直感的に学ぶには、2012年のインタラクティブなチュートリアル Syntorial が今でも非常に有用だと勧める。

## 10. [Mirror life is dangerous. Regulators must act before it becomes real](https://www.economist.com/leaders/2026/10/01/mirror-life-is-dangerous-regulators-must-act-before-it-becomes-real)

**Score:** 15 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=50652370)

The Economist の社説で、鏡像生命（アミノ酸やDNAなどの分子の掌性が反転した生命）は危険であり、実現する前に規制当局が動くべきだと訴える。（本文は取得できず、コメントに基づく要約）コメントによれば、2024年12月に38人の科学者が「前例のない不可逆的な害」を警告しており、一般公開 AI モデルには鏡像生化学への悪用を防ぐガードレールが要るとも主張しているようだ。

### Key Discussion Points

- **trakkstar**（投稿者）: 2024年12月に、合成生物学者やノーベル賞受賞者2名を含む38人の科学者が、鏡像生命の創造が人間と生態系に不可逆的な害をもたらすと警告した声明を紹介。
- **tornikeo**: The Economist への不信から、米政府にオープンモデルを検閲させる Anthropic の工作ではないかと疑う。
- **MarkMarine**: AI が人類を滅ぼすリスクが色あせるほど恐ろしいと述べ、鏡像生命の仕組みを解説。
- **ruszki**: ウイルスの人工製造との違いは何か、より危険なのかと質問。
- **taneq**: 鏡像生命が通常の生命に勝つ理由が分からず、通常の生命が代謝できないなら、こちらの生態系全体が鏡像生命にとっての鏡像だ、と疑問を呈する。

## Trends

- **AI と数学の急進**: #1 と #3 はともに、AI が Lean で検証された証明を出し、数学・計算機科学の景色が変わりつつあるという話題で、スコア上位を占めた。懐疑派と推進派の議論が続いている。
- **ソフトウェア供給網とセキュリティ**: #2 は従業員の GitHub アカウント経由で本番コードに悪意あるコードが push された事例で、保管庫が無事でも社内の認証と変更管理の弱さが問われた。
- **AI 利用の痕跡をめぐる摩擦**: #4 の Photoshop の AI 編集タグと、#5 の Show HN が AI 生成文と判定されて自動で dead になる問題は、どちらも AI 利用の痕跡をどう扱うかという同じ課題の表れ。
- **レトロ・クラフト志向**: UI スタイルガイドの保存（#6）、Unix の解説書（#8）、シンセ学習ゲーム（#9）、単一実行ファイルの Postgres（#7）など、道具と知識を手元に残す志向の投稿が並んだ。
