---
title: "Hacker News トップ10 サマリー（2026年11月1日）"
date: "2026-11-01T17:52"
category: "summary"
summary: "Karpathy の HackerTube、Flock カメラの抜去、Lenovo の偽暗号化 USB など Hacker News 上位10件を要約"
tags: ["hackernews", "summary", "ai", "security"]
---

## 1. [HackerTube: YouTube built from videos recommended by HN](https://karpathy.bearblog.dev/hacker-tube/)

**Score:** 1831 | **Comments:** 478 | [Post](https://news.ycombinator.com/item?id=50319510)

HN のコメントに 2007 年以降登場した 39,834 件のコメントから抽出した 6,454 本の動画を、YouTube 風の UI で閲覧できるサイト（hackertube.org）。元記事は取得できなかったため、投稿本文とコメントに基づく要約。

> **関連:** #2「Show HN: HackerBooks – HackerTube, but for books recommended on HN」も参照（HackerTube の書籍版。同じ発想の派生プロジェクト）

### Key Discussion Points

- **theptip**: レコメンドやインデックス作成が容易になった今、フィードを自分の好みで組み立て直す好機。小型 LLM で RSS のフィルタリングやランク付けができ、アテンション商売から離れられる
- **mettamage**: 友人をフォローし、その人が公開する「おすすめ」だけが自分のフィードに流れるソーシャルな推薦機能があるとよい
- **mlmonkey**: 最新の動画が見つからない。recency 系オプションを全部オンにしても半年以上前のものばかり
  - **dang**: 生成に使ったデータダンプが古いのかもしれない。継続的な取り組みにしたかったので残念
- **reorder9695**: 非パーソナライズのフロントページなのに、YouTube の「パーソナライズ」フィードより自分の好みに近い
  - **rileymat2**: パーソナライズ・アルゴリズムは見たいものではなく、見続けるものに最適化されている（測定可能な KPI だから）
- **tjeerdnet**: 87 歳の父親がおすすめされる第二次大戦のネガティブ動画に囚われており、フィルタ済み YouTube が必要
  - **kaeluka**: 視聴履歴を無効にして、厳選したチャンネルだけを購読するのが一番の改善策
  - **AstroNutt**: 81 歳の義父も、新しい AI 生成の WW2 スロップ動画のループにはまっている

## 2. [Show HN: HackerBooks – HackerTube, but for books recommended on HN](https://hackerbooks.org)

**Score:** 231 | **Comments:** 67 | [Post](https://news.ycombinator.com/item?id=50326821)

2 人以上の HN コメント投稿者が挙げた約 1.6 万冊の本を、言及コメントへのリンク付きで閲覧できるサイト。作者によれば、データパイプラインもサイトもほぼ Claude（Opus 5.5）が書き、本人は方向付けを担当した。

> **関連:** #1「HackerTube: YouTube built from videos recommended by HN」も参照（HackerTube の書籍版）

### Key Discussion Points

- **MYEUHD**: 同種のものは 2021 年にもあった
  - **jjordan**: ブックマークはしていたが、見返したことがなかった
- **drayfield**: 「推薦」の数え方の表現を見直すべき。『我が闘争』が 651 人に「推薦」されたことになっている
  - **roansh**（作者）: 文言を「mentioned by」に修正した
- **srik**: ポッドキャスト版も欲しい。番組・エピソード・ゲストごとの書籍言及を見たい
  - **kxrm**: Claude なら 1 日未満で作れる
- **jchook**: サイトが非常に速い。使用技術を知りたい
  - **roansh**: プレーン JS と静的 JSON を Cloudflare でホストしている。初回は約 30KB のインデックスを読み、全 16k 件はバックグラウンドで読み込む。ファイル名はハッシュ付きで長期キャッシュされる
- **pndy**: 「For you」の類似度ベースのおすすめは的外れ（『Brave New World』と Scratch の本が結びつくなど）。非英語タイトルの絞り込みもほしい

## 3. [Police chief unplugs Flock cameras after company ignores contract cancellation](https://www.tomshardware.com/tech-industry/big-tech/police-chief-physically-unplugs-flock-cameras-after-the-company-ignores-contract-cancellation-city-takes-matters-into-its-own-hands-amid-privacy-controversies)

**Score:** 220 | **Comments:** 61 | [Post](https://news.ycombinator.com/item?id=50326118)

契約を解除した市に対し Flock が監視カメラの運用を続けたため、警察署長が自らカメラの電源を抜いたという報道。記事本文は取得できなかったため（Tom's Hardware は本文が得られなかった）、タイトルとコメントに基づく要約。

### Key Discussion Points

- **voakbasda**: 契約がないのに公共のインフラや電力を使い続けるのは違法ではないか、窃盗にあたらないのか
  - **blooalien**: 契約解除後の地域でカメラが再設置・再有効化された例も報告されている
  - **idopmstuff**: 記事に契約条件の記載がなく、固定期間があって即時撤去の義務がない可能性もある
  - **Closi**: 契約内容が分からないので違法と断定はできない
- **kirykl**: 不透明なプラスチック製シャワーキャップをゴムで留めるだけで無力化できそうだ
  - **thephyber**: むしろ、車の画像を見せて偽データを注入できるかが気になる
- **thelastgallon**: 多数の市民が少額訴訟を起こしたら通用するのか
  - **varenc**: 損害の立証が必要。誤認停止などの被害があれば別だが、ナンバーが記録されただけでは原告適格に疑問がある
- **Closi**: 解約から 1 週間ほどで抜去しており、記事は扇情的。Flock が弁護士と対応を詰めるのに必要な時間とも考えられる
- **nekusar**: 通知後もカメラを置き続けるなら、1 台・1 日ごとの不法侵入として扱い、経営陣には RICO を適用すべき

## 4. [Lenovo's 'encrypted' fingerprint USB is just an unencrypted SD card in a case](https://www.reddit.com/r/technology/comments/1xl2pr3/lenovos_encrypted_fingerprint_usb_drive_is_just/)

**Score:** 194 | **Comments:** 71 | [Post](https://news.ycombinator.com/item?id=50326099)

AES-256 暗号化をうたう Lenovo の指紋認証 USB が、実際には中の SD カードに平文でデータを保存していたという調査。Reddit は要約対象外のため、コメント経由の情報に基づく。ThinkPlus USB シリーズが対象で、CVE-2025-13453 が割り当てられている。

### Key Discussion Points

- **charles_f**: SD カードを取り出して PC に挿すだけで読める。脆弱性ですらなく、設計レビューをどう通ったのか疑問
- **matheusmoreira**: こうした製品を信頼する人がいるのか。正解はその上に自由ソフトウェアの暗号を重ねること
  - **OptionOfT**: Apricorn の Aegis Padlock のような製品は、ベンダー ID・製品 ID の許可リストで運用できるので高セキュリティ環境で使える
  - **alright2565**: 規制で似た製品の利用を義務付けられたが信用していなかった
  - **Waterluvian**: 大半の USB 利用者には「自由ソフトウェア暗号を重ねる」は火星旅行のように遠い話
- **forgotpwd16**: 製品は 2019 年発表で中国国内のみ販売。欠陥の発見は 2025 年 8 月、CVE 付与は 1 月上旬、発表は 3 月で、報道が遅れた
- **RobotToaster**: ポッティング（樹脂封入）していれば比較的安全だった
  - **icpmoles**: 発表スライドによれば、暫定対策でエポキシ樹脂が SD カードに使われていた
- **Retr0id**: 違法であるべきで、Lenovo がどんな結果を負うのかが気になる
  - **nik282000**: 開封するとセキュリティ機能が無効になるとして逃げるだろう

## 5. [One-minute frequency disturbances from synchronization in power systems](https://www.nature.com/articles/s41560-026-02144-0)

**Score:** 65 | **Comments:** 24 | [Post](https://news.ycombinator.com/item?id=50314617)

Nature Energy の論文。五大陸の電力系統で周期がちょうど 1 分の周波数振動が観測され、UPS などの機器でクロック同期されたソフトウェアが同時に需要ピークを作ることが原因とされる（og:description に基づく）。

### Key Discussion Points

- **schiffern**: 歯車で歯数を互いに素にして摩耗を均すのと同様に、タイマーを 59.XXX 秒周期にして自然にずらすのが対策になる
- **mlichvar**: 公開 NTP サーバーも、crontab に ntpdate を入れる管理者のせいで毎分のトラフィックスパイクを受ける
- **geerlingguy**: 古い APC の UPS は週次の自己テストだが、新しい機器はもっと頻繁かもしれない。GitHub Actions も日曜朝に集中しがち
- **bob1029**: UPS 制御だけが原因とするには、多数の機種で連続的に同期している点が不自然だと感じる
- **kens**: UPS の自己テストの内容と、それが系統にどう影響するかの説明が曖昧で物足りない

## 6. [Proving and improving the Platonic Representation Hypothesis with JEPAs](https://arxiv.org/abs/2610.39302)

**Score:** 63 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=50325454)

Balestriero と LeCun による arXiv 論文。モダリティごとに別々に学習した JEPA が、2 つの観測が同一シーンの「良いビュー」である限り、回転を除いて同じ表現を学習することを定理として証明したと主張する。

### Key Discussion Points

- **kooi**: 33M パラメータのテキスト JEPA が PRH の評価で Qwen2.5-3B/7B と同等で、必要なサンプルも少ない。自己回帰の次トークン予測の成功は幸運だったように思える
- **Lerc**: 最適な次元削減が存在し、規模が増すほど近似しやすいと言っているだけではという疑問
- **suddenlybananas**: PRH は人間の心まで含む、もっと野心的な仮説だったはず。今回は同一モデルのモダリティ間にとどまり、強い仮定が置かれていそうだ

## 7. [Novellas with Groff](https://movq.de/blog/postings/2026-10-31/0/POSTING-en.html)

**Score:** 63 | **Comments:** 21 | [Post](https://news.ycombinator.com/item?id=50325694)

groff で 2 本の中編小説（約 1.5 万語と約 4 万語）を組版した筆者の記録。1 本目は 7 か月、4 万語の 2 本目は 10 日で書き上げた。公開はしない。

### Key Discussion Points

- **tmoertel**: 技術者が小説を書く環境は多様。自分は Google Docs で書き、組版は別のパイプラインを使っている
- **fweimer**: O'Reilly も troff/groff で書籍を組版していた
- **dofm**: 1994 年に大学の課題を troff で組版した。LaTeX が容量的に入らなかったのかもしれない
- **armcat**: George R.R. Martin は MS-DOS 機の WordStar 4.0 で執筆している
- **delusional**: 職場の z/OS 系の顧客向け文書生成は runoff 系の構文で、年間数百万通が今も作られている

## 8. [Seoul Biosys Begins Production of Rare Earth-Free White Micro LEDs](https://www.ajupress.com/view/20261028171670308)

**Score:** 62 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50327058)

希土類蛍光体を使わず、100µm 未満のチップで白色光を出せる第 3 世代の光半導体（WICOP 技術、パッケージ不要）の量産を、10 月 28 日に開始したと発表した。AR ディスプレイや AI データ伝送の光通信への展開も計画している。

### Key Discussion Points

- **wiml**: 記事には AI 由来の誤りが多く、社名は Viosys が正しい。革新点は多波長 LED（量子井戸のようなもの）にありそうだ
  - **coderintherye**: 公式サイトでも Seoul Viosys で、AI 翻訳が変えたようだ
- **kkaske**: CIE 図の白色領域に入っても、黄色や青に寄りすぎると問題になる。色味が気になる
- **Imustaskforhelp**: 10µm 級マイクロ LED による AI データ伝送という記述が妥当か、専門家に聞きたい

## 9. [Frontier Airlines Likely Breached](https://www.reddit.com/r/frontierairlines/comments/1xl20e8/psa_email_scam/)

**Score:** 49 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=50327266)

Reddit の投稿で、予約の詳細を含む詐欺メールが複数のユーザーに届いており、Frontier Airlines から情報が漏れた可能性が指摘されている。Reddit 本文は取得せず、コメントに基づく。

### Key Discussion Points

- **CSSer**: 推測には早いが、最近の CVE の急増に関連しているなら、企業のセキュリティ体制をめぐる大きな転換点を目撃しているのかもしれない
- **999900000999**: 予約詳細が書かれた詐欺メールが複数のユーザーから報告されているので注意

## 10. [Patrick Stewart taught us what good men do with power](https://www.vox.com/politics/508526/patrick-stewart-jean-luc-picard-star-trek-liberalism)

**Score:** 25 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=50327650)

Vox の論考で、パトリック・スチュワートが演じたピカード艦長を通じて、善良な男性が権力をどう使うかを論じる。記事本文は未取得で、タイトルとコメントに基づく。

### Key Discussion Points

- **vigilantpuma**: ピカードは永遠の艦長だが、功績はジーン・ロッデンベリーにこそ帰すべきだ
- **MitPitt**: 評価されるのは俳優か脚本家か。俳優と役の人格を同一視したくない
- **tqi**: 大衆娯楽に思想的指導を求めるのはばかげている

## Trends

- **AI で作る派生プロジェクト**: #1 と #2 はどちらも HN の推薦を素材にした派生サービスで、#2 は Claude が大半を実装した。コンテンツのキュレーションを個人が再構築できるという期待が議論の中心
- **「安全」を謳う製品の実態**: #4 の偽暗号化 USB と #3 の Flock、#9 の漏えい疑いはいずれも、ベンダーや監視インフラへの信頼が揺らぐ話題
- **同期が生むシステム的な問題**: #5 は、一斉に動く自動処理が電力系統に影響を与えるという示唆をもつ
- **AI 生成物の品質**: #8 の AI 翻訳による社名の誤りなど、AI 由来の誤りへの指摘も目立った
