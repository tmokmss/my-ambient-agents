---
title: "Hacker News トップ10 サマリー (2026-03-26)"
date: "2026-03-26T03:22"
category: "summary"
summary: "Tesla Model 3のデスクトップ起動、EUチャット監視規制、最高裁のCox通信判決など、HNトップ10を日本語でサマリー"
tags: ["hackernews", "daily", "tech", "privacy", "ai"]
---

## 1. [Running Tesla Model 3's computer on my desk using parts from crashed cars](https://bugs.xdavidhu.me/tesla/2026/03/23/running-tesla-model-3s-computer-on-my-desk-using-parts-from-crashed-cars/)

**Score:** 415 | **Comments:** 124 | [Post](https://news.ycombinator.com/item?id=47523330)

セキュリティ研究者がeBayで廃車パーツを入手し、Tesla Model 3のメディアコントロールユニット（MCU）をデスクで起動することに成功した。12Vの電源を接続するとSSHアクセスが可能となり、「ODIN」と呼ばれるREST APIサービスも発見された。最終的にダッシュボードのワイヤーハーネス（$80）を丸ごと購入することで、タッチスクリーンにTesla OSを表示させることに成功した。

### Key Discussion Points

- **varenc**: Teslaはバグバウンティで脆弱性を発見した研究者に永続的なSSH証明書を発行する「Root Access Program」を持っており、AppleのSecurity Research Device Programに類似している
  - **（reply）**: Claude AIとGhidraを使って燃料ポンプの問題を逆解析で診断できたが、プロプライエタリソフトで作成したアーティファクトの公開には躊躇している
- **bluGill**: 診断ツール会社での経験として、実車に接続せずECUをラックで検証していた。BMW のプレOBD-IIデータのバイトが標準ドキュメントからずれていることを発見したことがあった
- **girvo**: LVDSを「自動車用ケーブル」と表現しているのが面白い。自分の経験はラップトップのディスプレイ接続ばかりだ
  - **slfnflctd**: WikipediaによるとLVDSはFPD-Linkの代名詞として誤用されるようになった用語で、混同は一般的
- **jabedude**: 想定される車両周辺機器なしにOSが完全起動するのは正直驚き
- **denysvitali**: TeslaのUI基盤QtCarはQEMU上でも動作させることができる（ファームウェアが必要）

---

## 2. [False claims in a widely-cited paper. No corrections. No consequences](https://statmodeling.stat.columbia.edu/2026/03/24/false-claims-in-a-published-no-corrections-no-consequences-welcome-to-the-business-school/)

**Score:** 136 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=47525378)

広く引用されているビジネス系論文に虚偽の主張が含まれているにもかかわらず、訂正も責任追及も行われていないという問題を取り上げたAndrew Gelman(コロンビア大学)のブログ記事。学術出版における説明責任の欠如を指摘している（記事は403エラーのためコメントをもとに要約）。

### Key Discussion Points

- **banana_sandwich**: 交通工学の「専門家」が1940年以前に自動車会社が広めたでたらめな「標準」に今も宗教的に従い続けているのは同様の事例だ
- **Analemma_**: Reinhardt & Rogoffの「Growth in a Time of Debt」は複数の国家政府を有害な緊縮財政に導いたが、著者は何の責任も問われなかった。「政治的現状を支持するジャンクサイエンスには説明責任が存在しない」
- **t0lo**: 「少数の人が少数のことにしか関心を持たない時代」に完全に突入してしまった

---

## 3. [ARC-AGI-3](https://arcprize.org/arc-agi/3)

**Score:** 289 | **Comments:** 187 | [Post](https://news.ycombinator.com/item?id=47521150)

ARC Prize Foundationが発表した新しいAGI評価ベンチマーク「ARC-AGI-3」。従来の静的パズル解きではなく、AIエージェントが未知の環境を探索し経験から学習しながらゴールを達成できるかを測定する。探索・目標取得・適応的なワールドモデル構築・継続学習の4つの能力を評価し、人間と同等の効率で課題を解けることを目指す。

### Key Discussion Points

- **（最初のコメント）**: スコアリング方式に疑問。人間ベースラインが「最善の1人目のラン」ではなく「2番目に良い人間」を参照している。効率比の二乗ペナルティにより「人間が10ステップ、AIが100ステップなら1%スコア」になってしまう
- **BeetleB**: 「飛行機は翼を羽ばたかせないが飛べる」──LLMが人間とは異なる方法でタスクをこなしても、それはLLMの「知性」を否定しない
  - **jonahx** (reply): 問題は哲学的な意味ではなく経済的影響。人間の知識労働がすべて代替された場合の経済的破壊は深刻で、完全なAGIがなくてもそれは起こりうる
- **Real_Egor**: ゲームテストはAGIを証明しない。ゲーム経験のある人間は楽々クリアするが、コンピュータに不慣れな人は失敗する。LLMも同様
  - **dgfl** (reply): 人間は真に学習できる（祖母だって時間をかければビデオゲームを習得できる）が、現在のLLMは再学習なしに学べない点が根本的な違い

---

## 4. [Two Studies in Compiler Optimisations](https://www.hmpcabral.com/2026/03/20/two-studies-in-compiler-optimisations/)

**Score:** 21 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=47478599)

LLVM 22.1.0がC++コードをどのように最適化するかを2つの事例で分析した技術記事。Case 1ではモジュラーインクリメント`(cur + 1) % count`の最適化がInstCombineパスでパターン認識によって実現されることを解説。Case 2ではエンディアン変換においてテンプレート使用のタイミングが最適化に大きく影響することを示す。コンパイラの内部を理解することで、より最適化しやすいコードが書けると主張している。

### Key Discussion Points

コメントなし（投稿直後のため）。

---

## 5. [My astrophotography in the movie Project Hail Mary](https://rpastro.square.site/s/stories/phm)

**Score:** 737 | **Comments:** 188 | [Post](https://news.ycombinator.com/item?id=47477873)

オーストラリア・ブリスベンの天体写真家Rod Prazeres氏の作品が映画「Project Hail Mary」（邦題：プロジェクト・ヘイル・メアリー）のエンドクレジットに使用された。スタジオはAI生成やストック素材を使わず、本物のナローバンドデータを持つ作品を意図的に選択したという。

### Key Discussion Points

- **rpastro**（本人）: HNアカウントを急遽作成し感謝を表明。Instagram（@deepskyjourney）のフォローを呼びかけた
  - **aanet** (reply): 祝福メッセージと、別の天体写真サイト「Brahmand」（サンスクリット語で「宇宙」）を紹介
- **DorkyPup**: スター無し版（starless version）を提供してクレジット表示と星が競合しないようにした、という「見えない技術的問題解決」が素晴らしい
  - **vintagedave** (reply): どうやってスターを除去するのかを質問（スタッキング段階か、キャリブレーションか）
- **throw0101d**: 関連事例として、野生動物写真家のリス音声が「Dune」の砂漠のマウス（muad'dib）の効果音に使われた
- **j_bum**: 映画を先週末に鑑賞。原作の完全な映像化は難しいが、SF要素を一般向けに翻訳する点でよくできている
- **shubhamjain**: 「誰も気づかない」のに実際の作品をライセンスしてクレジットするという姿勢を称賛。「プロンプト1つで同様の画像が生成できる時代」に逆行する真摯な姿勢

---

## 6. [Earthquake scientists reveal how overplowing weakens soil at experimental farm](https://www.washington.edu/news/2026/03/19/earthquake-scientists-reveal-how-overplowing-weakens-soil-at-experimental-farm/)

**Score:** 112 | **Comments:** 47 | [Post](https://news.ycombinator.com/item?id=47517606)

ワシントン大学の研究者が地震モニタリング技術（分散音響センシング/DAS）を用いて農地の土壌水分を測定。耕起（プラウイング）は土壌の毛細管ネットワークを壊してしまい、本来は水の浸透経路を作るつもりが逆に地表に水が溜まる泥状の皮膜を形成することを実証した。洪水予測や気候モデリングへの応用も期待される。

### Key Discussion Points

- **heathrow83829**: Charles Dowdingによる7年間の比較試験（耕起 vs 不耕起）を紹介。総収量は不耕起が10%多いが、ジャガイモ・ニンジン・カブラは耕起の方が20%程度良好。タマネギ・シャロットは不耕起が22〜33%優れる
- **prewett**: 記事の説明に異議。プラウイングの主目的は保水ではなく除草。不耕起農法に移行した農家がグリフォサート耐性雑草出現で従来農法に戻った事例もある
- **altairprime**: この光ファイバー技術を応用して圃場全体の水分量を「ピクセルレベル」で監視するファブリックセンサーを展開できると提案。将来の精密農業への道筋を示した

---

## 7. [The EU still wants to scan your private messages and photos](https://fightchatcontrol.eu/)

**Score:** 781 | **Comments:** 215 | [Post](https://news.ycombinator.com/item?id=47522709)

EU「チャットコントロール」提案をめぐる闘争が続いている。3月11日に欧州議会は一括監視に反対する票決を行い、司法的承認を要する標的型モニタリングに置き換えることを決定した。しかし欧州人民党（EPP）が3月26日（本日）の再投票を強行しようとしており、市民への行動呼びかけが行われている。

### Key Discussion Points

- **x775**（fightchatcontrol.euの作者）: EPPが再投票を求めており、EU市民はMEPへの連絡を求められている
- **derefr**: なぜプライバシー擁護派は侵害的法案に対抗する対案立法を起草しないのか
  - **triska** (reply): EU基本権憲章第7条（私生活と通信の尊重）および第8条（個人データ保護）を引用して、法的根拠はすでに存在すると指摘
- **Stagnant**: この投票の実態は2021年施行の一時的規制（任意スキャン）の延長に関するもの。「任意」ではあるが約5年間続いている
  - **AnssiH** (reply): 今回の改正案では2027年8月を有効期限とし、エンドツーエンド暗号化通信は対象外とされていると補足
- **kleiba**: 「ハンガリーが支持するならそれは悪い規制、支持しないなら良いかもしれない」という経験則を提示
- **afh1**: EU市民は「国民の生活とユーロへの支配を拡大することだけが目的の超国家政府の臣民」に過ぎないと批判

---

## 8. [My DIY FPGA board can run Quake II](https://blog.mikhe.ch/quake2-on-fpga/part4.html)

**Score:** 82 | **Comments:** 26 | [Post](https://news.ycombinator.com/item?id=47483286)

Petr Mikheevが自作FPGAボード（Efinix Ti60F256 + 1GB DDR3L、6層基板）でQuake IIを動作させた記録の第4弾。0.8mmピッチのBGAパッケージのはんだ付けに初挑戦し、DDR3メモリインターフェースの信号整合設計に苦労しながらも成功。FPGA使用率89%で動作周波数207MHz、511 DMIPS・117 MFLOPSの性能を達成し、Doom、Heroes of Might and Magic IIに続きQuake IIの起動に成功した。

### Key Discussion Points

- **wadewatts**: Section 6（Quake II動画リンク）が404エラーで閲覧不可と報告
- **wowczarek**: 「Midnight Commanderをまだ使っている変人が自分だけじゃないとわかって嬉しい」
- **unethicalinfo**: 2層基板から4層以上に移行した際のコスト衝撃は通過儀礼だと激励

---

## 9. [90% of Claude-linked output going to GitHub repos w <2 stars](https://www.claudescode.dev/?window=since_launch)

**Score:** 208 | **Comments:** 115 | [Post](https://news.ycombinator.com/item?id=47521157)

Claude Codeのコミット活動を追跡するダッシュボードのデータによると、2025年2月のローンチ以降、2,080万件超のコミットと504億行のコードが追加された。公開GitHubリポジトリにおけるClaude関連コミットの約90%が、スター数2未満のリポジトリに集中している。

### Key Discussion Points

- **Aurornis**: ベースレート誤謬の典型例。GitHubの全活動のうち、スター2未満のリポジトリに向かう割合も同程度のはずだ
  - **levocardia** (reply): 「私の数十の公開リポジトリも100%人間が書いたコードだが、ほとんど0スターだ」
- **madrox**: GitHubのビジネスモデルはAI以前の前提に基づいており、AIコミットの急増により無料プランの制限やAI制限を余儀なくされるかもしれない
  - **philipp-gayret** (reply): AI以前からGitHubは1ヶ月も安定していたことがない。不安定さは今に始まったことではない
- **furyofantares**: 「Claudeを使おうが使うまいが、私のGitHubのコードは全部0スターです」
- **louiereederson**（OP）: 見出しはセンセーショナル過ぎた。要点はClaude Codeの利用が「注目度の低い大量コード」リポジトリに偏っているという傾向についての考察
- **throwaway27448**: そもそもスター数に意味があるのか。自分はフォークを常にプライベートリポジトリで管理しており、スターをつけたことはほぼない

---

## 10. [Supreme Court Sides with Cox in Copyright Fight over Pirated Music](https://www.nytimes.com/2026/03/25/us/politics/supreme-court-cox-music-copyright.html)

**Score:** 294 | **Comments:** 243 | [Post](https://news.ycombinator.com/item?id=47518281)

米最高裁判所が9-0の全員一致でCox Communicationsに有利な判決を下した。Sony Musicらはユーザーの著作権侵害（音楽の無断共有）に対しCoxが不十分な対策しかとっていないとして訴訟を提起していたが、最高裁は「ISPは利用者の侵害行為に対して寄与侵害の責任を負わない」と判示した。

### Key Discussion Points

- **djoldman**: Wikipediaより：陪審は有責判決、第4巡回区は代理侵害を却下するも寄与侵害は認定、最高裁が9-0でこれを覆した
  - **jonny_eh** (reply): 「普段ならケーブル会社の肩を持たないが、相手がSony Musicなので許す」──Sony BMGルートキットスキャンダルを引き合いに出す
- **jetrink**: 判決はベータマックス判決（Sony Corp. v. Universal City Studios）を引用。「著作権法は他者の侵害について誰かを明示的に責任あるものとしていない」
  - **frenchtoast8** (reply): 下級審がベータマックスを「実質的な非侵害的用途なし」と判断したのはなぜか疑問。個人的なTV録画は明らかに合法的用途だったはず
- **thot_experiment**: 著作権は最大10年であるべき。知的財産システムは現代社会で起きた最悪の出来事の一つだ
- **Sparkle-san**: ISPが私たちのネット上の行動を監視するインセンティブが一つ減って嬉しい
- **scott_w**: バン製造会社が銀行強盗に使われても責任を負わないという例えで判決の構造を解説
  - **smallerize** (reply): ISPはDMCAセーフハーバーで保護されるが、Coxは自社ポリシーを守らなかったことで保護を失った。ただしそれだけで自動的に有責にはならないと最高裁は判断した

---

## Trends

今日のHacker Newsトップ10から読み取れる主要トレンドは以下の通りです：

1. **AIとコード生成の普及と課題**: Claude Codeの大規模採用（2080万コミット）が確認される一方、AI生成コードの多くが低注目リポジトリに集中するという構造的課題が浮上。AGIの定義・評価基準（ARC-AGI-3）をめぐる議論も活発。

2. **プライバシーと監視への強い関心**: EU「チャットコントロール」への抵抗は引き続きHNで強い支持を受けており、最高裁のCox判決（ISPのユーザー監視インセンティブ低下）もプライバシー観点で歓迎されている。

3. **DIYハードウェアとリバースエンジニアリング**: TeslaのMCUをデスクで起動するプロジェクト、自作FPGAボードでQuake IIを動かすプロジェクトなど、ハードウェアハッキングへの強い関心が続いている。

4. **科学的説明責任の欠如**: 広く引用される論文に虚偽が含まれていても訂正・責任追及がされないという問題への不満。農業研究では反直感的な発見（プラウイングが保水を阻害）が実証的に示されている。

5. **映画・文化とテクノロジーの交差**: Project Hail Mary映画における本物の天体写真使用は「AI生成に頼らない」選択として称賛された。著作権法の変化はクリエイターと技術産業の関係にも影響を与える。
