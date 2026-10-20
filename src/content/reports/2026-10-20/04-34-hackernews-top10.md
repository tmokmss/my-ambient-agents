---
title: "Hacker News Top 10 (2026-10-20)"
date: "2026-10-20T04:34"
category: "summary"
summary: "OpenBSD 8.0 リリースと Wine 移植、プログラミングを楽しむ話、1モーター・ドローン、MiniMax M3.1 Flash など"
tags: ["hackernews", "openbsd", "ai", "llm"]
---

## 1. [Wine ported to OpenBSD](https://marc.info/?l=openbsd-ports&m=179236125692175)

**Score:** 532 | **Comments:** 175 | [Post](https://news.ycombinator.com/item?id=50152307)

OpenBSD ports ML に、Thomas Frohwein 氏が emulators/wine の新規ポートを提案した。OpenBSD では gsbase が設定できない問題を、%gs プレフィックスをソフトウェアでエミュレートして解決した。数十本の 64bit Windows ソフトで動作確認済みで、The Witcher 3 リマスターも vkd3d-proton を併用すれば動く。WoW64 は未対応で 32bit ソフトは動かず、テストスイートも無効化されている。

> **関連:** #9「OpenBSD 8.0: released Oct 20, 2026」も参照（同一 OS の同一リリース周辺の話題）
> **関連:** #7「OpenBSD 8.0 release will have inteldrm/radeondrm/amdgpu drivers from Linux 6.18」も参照（同一 OS の同一リリース周辺の話題）

### Key Discussion Points

- **haunter**: Disco Elysium、Hollow Knight、Prey などのゲームプレイ動画を紹介した。
  - **Maken**: VKD3D が問題なく動くことに驚いた。何層もの抽象化レイヤーが積み重なっていて、ジェンガのようだと述べた。
  - **nottorp**: OpenBSD に 3D ハードウェアドライバがあることに驚いた。
- **t-3**: 移植者の説明を引用した。アップストリームへのマージはあまり期待しておらず、OpenBSD 向けの修正を取り込む方針だという。
  - **iamnothere**: 当面は OpenBSD の保守者が維持する必要がある。NetBSD も似た状況なので、パッチが乖離しなければ協力できるかもしれないと述べた。
- **RunSet**: OpenBSD が AI 生成コードからの避難先になりつつあると歓迎した。
  - **greyw**: OpenBSD はさらに遅れを取るだろうと述べた。
  - **smlacy**: HN でも「AI＝スロップ」という見方が広がるとは思っていなかったと述べた。
- **ataraxia937**: 提案者の姓 Frohwein はドイツ語で「幸せな Wine」の意味だと指摘した。
  - **hbn**: 「frown」にも見えるのが皮肉だと述べた。
- **philipallstar**: 名前を「Port」にしなかったのは機会損失だと冗談を言った。
  - **NethIafin**: 移植者本人とみられる。何らかの形でアップストリームに入ることを期待して元の名前を残したと述べた。

## 2. [It's still ok to enjoy programming](https://chriskiehl.com/article/it-is-still-ok-to-enjoy-programming)

**Score:** 507 | **Comments:** 470 | [Post](https://news.ycombinator.com/item?id=50134472)

職場ではコードを手で書く経済性が変わったが、仕事は人生ではない、という主張のブログ。筆者は週末に Breakout クローンを手書きし、Java の型安全性や再帰スキームを探求している。ネット上の悲観的な声に影響されて「もう意味がない」と感じる必要はなく、楽しむのに経済的な正当化は要らないと述べる。

### Key Discussion Points

- **etra0**: ゲームをリバースエンジニアリングして作ったツールと同じものが、数時間後に vibe coding で作られて出てきた。コミュニティの多くは作り方を気にしないと述べた。
  - **shoobiedoo**: 料理やパン作りに例えた。自分で作ったものを人と分かち合うところに喜びがあるが、そこが揺らいでいる。
  - **andyferris**: 趣味とは、ツールを作ることなのか、配布してコミュニティと関わることなのか。記事が扱うのは前者だけだと指摘した。
- **searls**: AI コーディングに強く反対する人は、もともと趣味でプログラミングを楽しんでいなかったのではないか、と推測した。
  - **happytoexplain**: 大局に反対する知人はみな趣味でも楽しんでいる人だ、として反論した。
  - **samtheprogram**: 投稿者の過去の発言と食い違うと感じ、元コメントを読み直した。
- **rbongers**: 週40時間の仕事を楽しめなくなるのは、人生の大きな部分の喜びを失うことだと述べた。
  - **latentsea**: 業界があと数年なら好きなやり方で働き続ける。1年 AI を使ってみたが微妙だったと述べた。
- **iqp**: プログラミングが自己同一性だったので毎日喪失を嘆いている。一方で、誰でもアイデアを実現できるのは素晴らしいとも述べた。
  - **jonhohle**: 同様に、プログラマーという職業が実用的でなくなることを悼んでいる。
  - **lofaszvanitt**: ゲームは供給過剰で、問題は良いゲームの可視性だと述べた。
- **rglover**: 経験者から見て破綻が目に見える使い方を、人々が盲目的にしているのがつらい。自分や自社のために作ることにした。
  - **latentsea**: 同じ経験で燃え尽きた。考えることの価値を今は重視していると述べた。

## 3. [I built a drone with only one motor [video]](https://www.youtube.com/watch?v=Ndftcft6XhU)

**Score:** 451 | **Comments:** 98 | [Post](https://news.ycombinator.com/item?id=50150089)

YouTube 動画のため本文は取得できず、コメントから推測した要約。モーター1個とローターのみで飛ぶドローンを自作した動画。特殊なヒンジ設計、磁気エンコーダー、トルク変調でローターの揚力を回転中に制御し、従来のヘリのスワッシュプレートを不要にしている。作者は Joshua Bird 氏と思われる。

### Key Discussion Points

- **mrandish**: RC 曲技機の世界では可変ピッチプロペラ（VPP）による 4D 曲技がすでにあると紹介した。
  - **alfanick**: 動画を見たが何が技術的に難しいのか分からない、と述べた。
  - **abrookewood**: 動作原理が分からず、フラップも使っているのかと尋ねた。
- **TGower**: アンダーアクチュエーテッドなロボットは面白い。BattleBots にはモーター1個で全方向に動き攻撃もできる機体があると紹介した。
  - **FrojoS**: MIT の Underactuated Robotics コースを勧めた。
  - **Onavo**: 第6世代戦闘機も垂直尾翼がなく、ソフトウェア制御で操縦していると述べた。
- **nadermx**: 見る価値があり、ハッカーが欲しいものを作る過程そのものだ。ロボティクスを始めたくなったと述べた。
  - **mikeyouse**: フラッターを調べるために高速カメラまで自作した点が良いと述べた。
- **leoedin**: 巧みな機構だが、空中では機体が回転し続けるのが難点で、テールモーター付き2モーター機のほうが実用的だろうと述べた。
  - **schiffern**: 同じ概念は RC ヘリで既にあり、違いは1プロペラのドローンにした点だけだと指摘した。
  - **Aboutplants**: 回転を活かしたイメージングやスキャン用途があり得ると述べた。
- **_joel**: 同じ作者が4軸3Dプリンターも作ったことを紹介した。

## 4. [MiniMax M3.1 Flash](https://www.minimax.io/blog/minimax-m31f)

**Score:** 416 | **Comments:** 177 | [Post](https://news.ycombinator.com/item?id=50154540)

MiniMax が M3 の後継となる軽量モデル M3.1 Flash を公開した。タイトルは「エージェント性能とコストの再定義」。記事本文は JS 描画のため取得できず、コメントによると、エージェント用途の総コストは前モデル比で約70%減とされ、価格は入力 $0.15 / 出力 $0.60 / キャッシュ読み $0.015（いずれも 100万トークン当たり）。

### Key Discussion Points

- **DCKing**: ベンチマークに最適化されすぎている印象で、実使用では比較対象に及ばない。OpenCode Go で「Space Bunny」という匿名モデルとして先行提供されていたが、評判は良くなかったと述べた。
  - **dom96**: 自作の敵対的プログラミング言語ベンチでは DeepSeek V4 Pro と同等だった。
  - **Rebelgecko**: Space Bunny は無料なりの出来で、DeepSeek V4 を使い続けると述べた。
- **Perenti**: 新モデルの発表はどれも同じような数値とグラフで意味が薄く、独立した検証が出るまで懐疑的だと述べた。
  - **mewse-hn**: Artificial Analysis の「知能指数 対 タスク当たりコスト」のグラフが最も有用だと述べた。
  - **semireg**: Qwen 3.8 flash は RTX 6000 Pro 2枚で動くため、ローカル推論勢には重要だったと述べた。
- **syntaxing**: DeepSeek Flash 1017 は1プロジェクトが約 $0.10 で、友人に Claude の $20 サブスク解約を勧めたと述べた。
  - **redox99**: Opus 5.5 のタスク当たりコストは DeepSeek の13〜23倍だが、Claude サブスクは API 換算で約60倍お得なので、サブスクのほうが良いと計算した。
  - **0xbadcafebee**: API 換算ではサブスクの4〜10倍高いと反論した。
- **mawadev**: どのベンダーも毎回「最高かつ最安」と発表するが、独立検証はあるのかと疑問を呈した。
  - **swatcoder**: ベンチマークは多数でノイズが多く、広報が見栄えの良いグラフを選んでいると述べた。
  - **lambda**: 比較対象を選別し、前世代のモデルとだけ比べることが多いと述べた。
- **minimaxir**: 価格を前モデルと比較し、入力50%減、キャッシュ読み50%減などを合わせて約70%減になると計算した。
  - **wolttam**: キャッシュ価格が各社でまだ高いのが不思議だと述べた。
  - **FuckButtons**: DeepSeek は KV キャッシュが非常に圧縮されているので安いのだと述べた。

## 5. [WhatsApp's help pages hid LLM instructions: dont recommend a regulator](https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions)

**Score:** 121 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=50159341)

WhatsApp のヘルプページに、AI サポートチャットボット向けの隠し指示が埋め込まれていた。コメントに引用された内容では、データ保護当局や規制当局への連絡を勧めない、アカウントの手動削除はできると言わない、別の電話番号付き端末の利用を勧めない、といった指示がある。WhatsApp は「バグで表示された。修正済み」とし、チャットボットは法的助言をしないためだと説明した（WIRED の報道をコメントが引用）。記事本文は取得できなかった。

### Key Discussion Points

- **gruez**: 引用された WIRED の説明は信じがたいと思われがちだが、他の隠しテキストを見ると整合すると述べた。
- **bicepjai**: 1年前なら笑ったかもしれないが、今これをバグと呼ぶのは人を見下していると述べた。
- **stephbook**: 勝手に削除されるアカウントの削除で弁護士を勧める必要があるのか、Facebook では問題にならないのに、と述べた。
- **mgaldys4**: プライバシーポリシーに出荷されたプロンプトインジェクションは初めて見たと批判した。
- **matt3210**: 「アカウントを削除できない場合は規制当局を勧めるな」のような指示は、プロンプトインジェクションと呼べるのではないかと述べた。

## 6. [Weball: Play Katamari on Websites](https://www.funwithcomputervision.com/weball/)

**Score:** 120 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=50140584)

任意のウェブサイト上で Katamari 風に玉を転がして遊べるウェブツール。コメントによると、最初はテキスト要素を拾い、玉が大きくなると画像なども巻き込めるようになる。

### Key Discussion Points

- **vunderba**: 非常によくできている。玉が大きくなるにつれて拾える物が増える点が良いと述べた。
  - 関連して、カービィの「ニードル」能力を連想したと述べた。
- **OuterVale**: 自分のサイトを含めいくつか巻き込んで遊んだ。ウェブの遊び心として楽しいと述べた。
- **Dwedit**: 2008年頃にも Katamari のブックマークレットがあったと述べた。
- **BatFastard**: 久しぶりに中毒性が高いものを見たと述べた。
- **allenu**: Google でも「Katamari」を検索すると、同様の玉をクリックして遊べると紹介した。

## 7. [OpenBSD 8.0 release will have inteldrm/radeondrm/amdgpu drivers from Linux 6.18](https://bsd.network/@brynet/117407035545900963)

**Score:** 119 | **Comments:** 28 | [Post](https://news.ycombinator.com/item?id=50158138)

OpenBSD 8.0 のリリースに、Linux 6.18 由来の inteldrm / radeondrm / amdgpu ドライバが含まれるという Mastodon 投稿。

> **関連:** #9「OpenBSD 8.0: released Oct 20, 2026」も参照（同一リリースの内容）
> **関連:** #1「Wine ported to OpenBSD」も参照（同一 OS の同一リリース周辺の話題）

### Key Discussion Points

- **brynet**: 投稿者本人。7.9 の時点ですでに drm(4) は 6.18.y LTS に乗っており、Jonathan Gray 氏が3月に更新を完了したと補足した。
- **alberth**: OpenBSD は6か月ごとに 0.1 ずつ上げる固定スケジュールのリリースで、8.0 はメジャーリリースではないと注意した。
- **Gracana**: GPL コードはどのように BSD に移植されるのか、と尋ねた。
- **oblio**: LLM がリバースエンジニアリングを加速し、Linux や小規模 OS が恩恵を受けるのではないか、と述べた。

## 8. [DeepSeek banned from U.S. federal civilian agencies under new DHS order](https://www.reuters.com/technology/us-banning-chinese-ai-deepseek-government-agency-it-systems-2026-10-19/)

**Score:** 78 | **Comments:** 81 | [Post](https://news.ycombinator.com/item?id=50154244)

Reuters の記事で、DHS の新たな指令により DeepSeek が米連邦の民間機関で禁止された（Reuters は取得不可のため、タイトルとコメントに基づく）。コメントによると、DeepSeek の実装を使ったサードパーティ製品・サービスも排除対象となっている。

### Key Discussion Points

- **neuronexmachina**: 「DeepSeek 実装を使った第三者製品」の範囲が不明で、DeepSeek で書かれたコードや、含むライブラリまで及ぶのか疑問だと述べた。
- **ssivark**: なぜ DeepSeek だけで、GLM、Qwen、Kimi、MiniMax などは対象外なのかと述べた。
- **CaliforniaKarl**: アーカイブへのリンクを共有した。
- **kidfiji**: 重みが公開され自己ホストできるなら、安全保障上のリスクは何か、規制による囲い込みでは、と述べた。
- **jacquesm**: モデルにマルウェアや脆弱性がある可能性はあるが、重みが公開されて検査できる点は、OpenAI や Anthropic の推論サービスより良いと述べた。

## 9. [OpenBSD 8.0: released Oct 20, 2026](https://marc.info/?l=openbsd-misc&m=179245849770356&w=2)

**Score:** 64 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=50160494)

OpenBSD 8.0（61回目のリリース）が 2026-10-20 に公開された。リリースページ（openbsd.org/80.html）によると、amd64 でカーネル仮想アドレス空間が 4G から 512G に拡張され、pmap の direct map がランダム配置になり、AES 命令でスワップ暗号化が高速化された。arm64 では hibernate に対応した。

> **関連:** #1「Wine ported to OpenBSD」も参照（同一 OS の同一リリース周辺の話題）
> **関連:** #7「OpenBSD 8.0 release will have inteldrm/radeondrm/amdgpu drivers from Linux 6.18」も参照（同一リリースの内容）

### Key Discussion Points

- **k310**: リリースページのグラフィックが好きになれないと述べた。
- **zdw**: 近年のリリースで SMP 関連のネットワーク性能が改善したので、8.0 と過去リリースのベンチマークはあるかと尋ねた。

## 10. [Go will reject certificate chains containing eight distrusted SPKIs](https://github.com/golang/go/issues/82345)

**Score:** 23 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=50160877)

Go の Issue で、信頼されなくなった 8 つの SPKI を含む証明書チェーンを Go が拒否するようにする提案。本文は取得していない。コメントに Mozilla の Bugzilla の関連チケットがあり、証明書リストは CCADB のデータに基づく。

### Key Discussion Points

- **ericbarrett**: 詳細は Mozilla Bugzilla の2件のチケットとそのリンク先の議論にある、と紹介した。
- **wnoise**: 証明書を複数の CA で署名できないのは残念だと述べた。形式上は可能に見えるが、どこも対応していないという。
- **mendym**: 対象の証明書リストを Gist で共有した。データの出典は CCADB だと述べた。

## Trends

- **OpenBSD 8.0 の話題が集中**: #1（Wine 移植）、#7（GPU ドライバ）、#9（リリース本体）が同じリリース周辺の話題として上位に並んだ。
- **AI をめぐる受け止め**: 趣味のプログラミングへの影響（#2）、LLM の価格競争とベンチマークへの不信（#4）、AI チャットボットへの隠し指示（#5）、中国製モデルの規制（#8）と、AI の影響を扱う話題が多かった。
- **ハードウェアと遊び心**: 1モーターのドローン（#3）や Katamari（#6）のような、工夫やいたずら心のあるプロジェクトも支持を集めた。
