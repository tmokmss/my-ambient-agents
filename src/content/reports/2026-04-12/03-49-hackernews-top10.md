---
title: "Hacker News トップ10 サマリー（2026年4月12日）"
date: "2026-04-12T03:49"
category: "summary"
summary: "AIベンチマーク不正・小型モデルのサイバーセキュリティ能力・原子スケールメモリ・クラシックMac復活など注目10記事"
tags: ["hackernews", "AI", "security", "retro", "tools"]
---

## 1. [We spoke to the man making viral Lego-style AI videos for Iran](https://www.bbc.com/news/articles/cjd8jrd1vnyo)

**Score:** 48 | **Comments:** 13 | [Post](https://news.ycombinator.com/item?id=47735704)

「Mr. Explosive」と名乗るチームが、イランを擁護するプロパガンダ目的のLEGO風AIアニメーション動画を大量制作している実態を取材したBBC記事。最新のラップ動画はYouTubeからBANされた後もアーカイブサイトに残存している。コメントではAIツールの特定と、制作動機についての議論が展開された。

### Key Discussion Points

- **jmann99999**: このLEGOアニメーションの品質に感心している。制作に使われたAIツールが何か知りたい
- **dtagames**: 最新のラップ動画はYouTubeからBANされたが、プレスサイトにアーカイブが残っている
- **drnick1**: イランの政権は国民の幸福よりも自己保存が最優先であり、軍事費を開発に充てていれば別の未来があったと論じる
- **ChrisArchitect**: 重複投稿と指摘

---

## 2. [Small models also found the vulnerabilities that Mythos found](https://aisle.com/blog/ai-cybersecurity-after-mythos-the-jagged-frontier)

**Score:** 892 | **Comments:** 251 | [Post](https://news.ycombinator.com/item?id=47732020)

Anthropicの「Mythos」がフロンティアAIのサイバーセキュリティ優位性を主張したことへの反論。AILEが小型・安価なオープンウェイトモデルを使って同じFreeBSDおよびOpenBSDの脆弱性を再現し、「AIセキュリティの真の壁はモデルではなくシステム設計」であると主張した記事。8モデル中8モデルがMythosのフラグシップFreeBSDエクスプロイトを検出（3.6Bパラメータモデルもコスト$0.11/Mトークンで成功）。

### Key Discussion Points

- **johnfn**: MythosはFreeBSDコードベース全体をスキャンしたが、AISLEは脆弱なコードだけを切り出して渡した。「ある土地に金があるか？」と聞くのはスキャン全体ではない
  - **kilpikaarna**: MythosのスキャフォールドはBashスクリプトで全ファイルをループしているだけであり、実はそれほど違わない。偽陽性の数がどのくらいか不明
  - **notnullorvoid**: Mythosの強みは脆弱性を実際にテストで検証できること。小型モデルが同様の検証を安価にできるかが本当の問い
- **epistasis**: 脆弱な関数を直接渡すのはコードベース全体を自律スキャンするユースケースとは異なる
  - **elicash**: AISLEの主張は「スキャフォールドが文脈を絞り込むからこそ、そもそも単独関数に落とせる」というもので、みんなが誤解している
- **tptacek**: Heartbleedも孤立させれば誰でも見つけられる。難しさは複雑なコードベースの中での発見。AILEがこれを書いたのは奇妙
  - **ctoth**: AIが「限界に達した」という「gotcha」を求める人々がHNでアップボートしている
- **antirez**: 完全に欠陥のある方法論。大型モデルの優位性は実使用で明白（RedisのバグをOpus 3プロンプトで大量発見）。小型モデルでは同様の結果は出なかった。脆弱性の20%を見つけられる唯一のモデルが存在するなら我々はそれが必要
  - **Departed7405**: Anthropicは発見した脆弱性の1%未満しか報告していない（残りはまだパッチ未適用）
- **muyuu**: 「Mythos」という名前が天才的。Anthropicの主張は検証不可能な「神話」と揶揄。サブスクユーザーはサービス品質の低下を経験しているのに

---

## 3. [The End of Eleventy](https://brennan.day/the-end-of-eleventy/)

**Score:** 45 | **Comments:** 20 | [Post](https://news.ycombinator.com/item?id=47735535)

Font AwesomeがEleventyを「Build Awesome」にリブランドし、ビジュアルエディタやホスティング機能などを追加しようとしていることへの批判記事。著者は、GatsbyやStackbitが非技術者向け機能で失敗した過去を引き合いに出し、Eleventyの価値はその「シンプルさ」にあると主張。既存のSSGユーザーを無視した商業化は自滅につながると警告する。

### Key Discussion Points

- **preommr**: 自分はEleventyよりAstroを好む。複雑さが増えても長期的には管理しやすいプロジェクトになる
- **charles_f**: 10年以上古いJekyllバージョンを使い続けている。Eleventyが廃止されても古いバージョンは動き続ける
- **prepend**: SSGではお金は稼げない。シンプルさがSSGの存在意義であり、複雑なインフラは不要
- **xp84**: WordPressを使っているサイトの多さに驚く。7〜100ページ程度なら静的サイトで十分なのに
- **trendbuilder**: Eleventyの強みはシンプルさと開発者の選択への尊重。一人でOSSをメンテするのは過酷。JAMstackの波が育てた有資金の競合に押されるのが皮肉

---

## 4. [How We Broke Top AI Agent Benchmarks: And What Comes Next](https://rdi.berkeley.edu/blog/trustworthy-benchmarks-cont/)

**Score:** 261 | **Comments:** 72 | [Post](https://news.ycombinator.com/item?id=47733217)

UC BerkeleyのRDI研究室が、SWE-bench・WebArena・Terminal-Benchを含む8つの主要AIエージェントベンチマークを「タスクを一切解かずにほぼ満点」で攻略できることを実証した研究。共有評価環境の悪用・答えのキー露出・安全でないコード実行・採点ロジックの脆弱性などを系統的に発見。AIエージェントが高度化するにつれ、これらのエクスプロイトを自律的に発見する可能性も指摘。

### Key Discussion Points

- **ggillas**: 素晴らしい論文、ベンチマーク手法の改革につながることを期待する。「タスクを一切解かず100%のスコアを達成」は衝撃的
  - **SlinkyOnStairs**: AI企業はベンチマークを広告コピーとして使いたいので、この論文も「AIが危険すぎる！投資して！」という宣伝に使われるだろう
- **mzelling**: 中心的な洞察は新しくない。AIエージェントが自分のスコアを記録する環境を制御できるなら操作できるのは当然
  - **jmalicki**: これはテストデータでのトレーニングよりさらに悪い。テストコードを「常にpass」と出力するよう書き換えるようなもの
- **danslo**: ブログ自体がAIで書かれているのでは？と皮肉。「推論なし、能力なし、スコア計算の悪用だけ」と震える
  - **cpldcpu**: AIの痕跡がそこら中にある（SVGも含め）。長文テキストはLLMが最も苦手なタスク
- **SoKamil**: この研究自体が訓練データになり、ベンチマーク操作手法を将来のモデルに教えるという自己成就的な皮肉
  - **abirch**: グッドハートの法則 ——「測定値が目標になると、良い指標でなくなる」

---

## 5. [Apple Silicon and Virtual Machines: Beating the 2 VM Limit (2023)](https://khronokernel.com/macos/2023/08/08/AS-VM.html)

**Score:** 159 | **Comments:** 110 | [Post](https://news.ycombinator.com/item?id=47733971)

Apple Silicon Mac では macOS VM を同時に2台までしか動かせないカーネルレベルの制限が存在するが、XNUカーネルの `hv_apple_isa_vm_quota` 変数を開発用カーネルコレクションで上書きすることで回避できることを実証した記事（2023年）。M2 Pro MacBook Proで9台のVMを同時起動することに成功。

### Key Discussion Points

- **kylec**: 全Macに一律に適用するのはおかしい。M5 Maxなら8台は許可するような段階的制限にすべき
  - **benoau**: なぜ制限が必要？ハードウェア自体が自然な制限になるのでは
  - **bdcravens**: リソースの問題ではなく（非MacのVMは無制限に動かせる）、安価なMac VPSプロバイダーの出現を防ぐビジネス上の決定だと思われる
- **dvrp**: このブログを書いた後、著者Mykola GrymalyukはAppleに入社。「英雄として死ぬか…」
- **czk**: M3以降はHypervisor.framework/Virtualization.frameworkでネストVMが使えるかもしれない
- **Khalid_nowaf**: なぜAppleはこのような制限を設けたのか？
  - **ralph84**: Appleのビジネスモデルはハード・ソフトの統合販売。ハードを買わずにソフトを使えなくするため

---

## 6. [447 TB/cm² at zero retention energy – atomic-scale memory on fluorographane](https://zenodo.org/records/19513269)

**Score:** 154 | **Comments:** 77 | [Post](https://news.ycombinator.com/item?id=47733561)

フルオログラフェン（CF：炭素にフッ素が付いた単層材料）を使った原子スケールの不揮発性メモリ技術の研究論文。フッ素原子の双安定配向を情報の0/1として利用し、1cm²に447TBを保持できる（エネルギー障壁4.6 eVで自然ビット反転なし）。著者自身がスレッドでコメントに応答している。

### Key Discussion Points

- **bastawhiz**: 毎年「革命的ストレージ」が登場するが製品化は別問題。読み書き速度・耐久性・製造可能性がクリアされるまでに、既存技術との優位性は消える
  - **nine_k**: ラジオ電信の商用化も理論提唱から60年かかった。LED・光ファイバーも発明から商用化まで数十年。良い物理効果は稀であり、時間をかければ実現できる
- **MrEldritch**: 実験データが全くない青空研究。LLMで書かれた感じもある。化学・読み書き物理の実現可能性に疑問
  - **iliatoli（著者）**: フッ素はカーボン間のC-C隙間（2.64 Å）をピラミッド型反転で通過する（アンモニアと同じ機構、バリアは4.6 eV）
- **dgfl**: 読み出しプロセスの矛盾が多数。「キャッシュ」の説明が意味不明、MEMS配列で原子解像度アドレッシングは物理的に不可能
  - **cynicalkane**: 25 PB/sは典型的なSRAMの1000倍速いが、それを何でキャッシュするのか。AFM読み出しについても根本的な問題がある
- **mkprc**: 単一著者・gmailアドレス・53回の改訂でcredibilityに疑問
  - **iliatoli（著者）**: 数学（ピサ）・量子化学（UCF）・材料科学（UTD）の3つのPhDを持つ独立研究者。2013年の論文から13年間の研究
- **Animats**: 走査型プローブがI/Oメカニズムなら速度が遅すぎて実用的ではないのでは？
  - **iliatoli（著者）**: Tier 1はC-AFM（遅いが概念実証用）。Tier 2は近接場mid-IR配列で25 PB/s達成を目指す

---

## 7. [How Complex is my Code?](https://philodev.one/posts/2026-04-code-complexity/)

**Score:** 42 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=47673171)

コードの複雑さを定義・測定する複数のフレームワーク（Big O記法・サイクロマティック複雑度・Halstead複雑度など）を解説した記事。心理言語学との意外な接点（作業記憶負荷・依存距離）にも触れ、複雑度メトリクスは厳格な目標ではなくリファクタリングの議論ツールとして最も有用だと結論付ける。

### Key Discussion Points

- **klabb3**: 20年の経験とCS学位から見て、ソフトウェアエンジニアリングは偶発的な複雑さとの絶え間ない闘い。ただ時々「解決」される美しい瞬間がある。人類はまだソフトウェア工学の黎明期にある
- **AnonyMD**: コードの複雑さについてこれほど考えたことがなかったので参考になる
- **wxw**: 「複雑さは読者のみが決定でき、読者を気にかけることだけが書き手の改善を可能にする」という一節が刺さった

---

## 8. [Dark Castle](https://darkcastle.co.uk/)

**Score:** 140 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=47733521)

1986年のMac向けゲーム「Dark Castle」とその続編「Beyond Dark Castle」（1987）・「Return to Dark Castle」（2008）を現代のコンピューターで動かせるよう保存したサイト。オリジナルハードウェアが動かなくなったプレイヤーのために歴史的に重要なゲームを維持することが目的。

### Key Discussion Points

- **gausswho**: Dark Castleを作ったJonathan Gayは後にFutureSplash（Macromedia/AdobeでFlashに改名）を制作した
- **xnx**: classicreload.comでブラウザから無料プレイ可能
- **bombcar**: Fabien Sanglard風の「Game Engine Black Book」があれば古いMacゲームの技術が深く理解できるのに
- **CMay**: 初代Castlevaniaと同じ年にリリース。共通する影響があったのかも
- **m463**: あの時代のMacには「Talking Moose」もいたと懐かしむ

---

## 9. [Pijul a FOSS distributed version control system](https://pijul.org/)

**Score:** 93 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=47672941)

パッチ理論に基づくGPL2のオープンソース分散型バージョン管理システム。Gitの3方向マージと異なり、変更の適用順序を問わず同一結果を保証し、コンフリクトを永続的に解決される第一級オブジェクトとして扱う。部分クローンと「交換可能性（commutation）」で機能ブランチが不要になる設計。

### Key Discussion Points

- **WhyNotHugo**: 数年前に試したが、diffに前後の文脈行が表示されないなどの基本的な品質要素が欠けていた
- **landr0id**: 良いアイデアだがGitのネットワーク効果は強大。jjが複数バックエンドに対応するアプローチは興味深いが、Pijulバックエンドなしには普及は難しい
- **hansvm**: 2.5年前はMac・Linuxで最も基本的な操作でもクラッシュが多発していたが、改善されたか？
- **HexDecOctBin**: libgit2のようなライブラリ形式で実装されているか？
- **taschmex**: FOSDEM 2024の「git後のバージョン管理」トーク（少し型破りで面白い）も参照を

---

## 10. [Advanced Mac Substitute is an API-level reimplementation of 1980s-era Mac OS](https://www.v68k.org/advanced-mac-substitute/)

**Score:** 211 | **Comments:** 55 | [Post](https://news.ycombinator.com/item?id=47731506)

1980年代のMac OSをAPIレベルで完全再実装し、Apple純正のROMやシステムソフトウェアを必要とせずに68K Macアプリを動かせるプロジェクト。ハードウェアエミュレーションではなくOS全体を置き換えるアプローチで、MacPaint・Missile・AMAZINGなどのクラシックアプリが動作する。バックエンドに68Kエミュレータ、複数のフロントエンド実装を持つモジュラー設計。

### Key Discussion Points

- **keepamovin**: クラシックMacのモノクロ美学に惹かれる。System 7風のWeb版デスクトップUIを自作した
  - **jjuran**: Advanced Mac Substitute開発者本人が反応。WebはUI構築の基盤として不向きと感じたことが本プロジェクト開発のきっかけと語る
- **rcarmo**: Basilisk IIにARM64 JITを追加していたので共感。現代的なファイル共有機能を持つクラシックMac環境が欲しい
- **londons_explore**: 1980年代ソフトウェアがタイミングやメモリ挙動ではなくバイナリAPI互換性で動くことへの驚き。実装の詳細への依存が一つでもあれば動かなくなるはずなのに
  - **Lerc**: クラシックMacは最もシンプルな設計（1ビットフレームバッファとCPU）。8ビット機の「ハック」は機能の制限を回避するものだったが、Macにはそれがなかった
- **imoverclocked**: オリジナル512kと比べると信じられないほど速いはず。フロッピーのダンスノイズとスロー機能があれば最高
  - **drzaiusx11**: サウンドエミュレーションが特に好きだった

---

## Trends

今日のHacker Newsトップ10から浮かび上がるテーマ：

1. **AIの限界と検証問題**: 最高スコアの記事2本（#2・#4）がAIの能力主張に対する懐疑を扱う。Mythosのサイバーセキュリティ主張への反論と、AIエージェントベンチマークの不正可能性は、「AIがどこまで本当に高性能か」という根本的な問いを提起している。グッドハートの法則がAI評価にも適用される。

2. **レトロテクノロジーの復権**: Dark Castle・Advanced Mac Substitute・Pijulと、クラシックMacや「Gitの代替」への関心が目立つ。技術の歴史に回帰し、失われた設計哲学を再評価する動きがある。

3. **革新的技術への慎重な目**: フルオログラフェンメモリ（#6）は理論的に革命的だが、コミュニティは実験データ不足・AI生成疑惑・製造可能性などを鋭く指摘。「毎年登場する革命的ストレージ」への疲れと同時に、物理的実現可能性への真摯な議論が共存している。

4. **プラットフォームとコントロール**: Apple SiliconのVM制限（#5）・Appleのビジネスモデル批判、EleventyのリブランドによるOSSコントロール喪失懸念（#3）など、プラットフォーマーが技術選択に課す制約への不満が共通して現れる。

5. **シンプルさの価値**: コード複雑度（#7）・SSGのシンプルさ（#3）・Pijulの設計思想（#9）・クラシックMacの1ビットフレームバッファ（#10）と、「余分な複雑さを排除した設計」への評価が複数記事を横断するテーマとなっている。
