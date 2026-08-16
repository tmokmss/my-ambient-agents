---
title: "Hacker News トップ10まとめ（2026-07-13）"
date: "2026-07-13T03:45"
category: "summary"
summary: "ブラウザのMath.tanhでOS特定、Linux15年物カーネル脆弱性GhostLock、AI生成記事フラグ議論などHN上位10件"
tags: ["hackernews", "tech-news"]
---

## 1. [Since Chromium 148, Math.tanh is now fingerprintable to link underlying OS](https://scrapfly.dev/posts/browser-math-os-fingerprint/)

**Score:** 365 | **Comments:** 171 | [Post](https://news.ycombinator.com/item?id=48884853)

ブラウザの数学関数は動作するOSによって最後のビットが異なる結果を返すため、`Math.tanh(0.8)` のような単一の計算だけでOSを特定できる。Chromium 148以降、V8がプラットフォームの標準数学ライブラリ（Linuxのglibc、macOSのlibsystem_m、WindowsのUCRT）を直接呼ぶようになったため、この差異がボット検出に利用可能になった。記事を書いたScrapflyは、この検出を回避するため複数OSの数学ライブラリの挙動をビット単位で正確に再現するアルゴリズムを実装している。

### Key Discussion Points

- **Aurornis**: UAをmacOSに偽装しつつLinuxの数学的特徴を返すと矛盾が生じ、かえって検出されうると指摘。多くのユーザーはOSを偽装していないため、実際にはブラウザバージョン範囲の特定の方が興味深いはずだが、AIが書いたと思われるこの記事はその点を見落としていると批判。
  - **jeroenhd**: 実際にUAを偽装しているのはこの記事を書いたスクレイピング業者自身のボットであり、Windows/macOSを装うことでボット検出を回避しようとしていると反論。
  - **comex**: このテクニックはバージョン範囲の特定にも使えるが、フィンガープリンティング手法は他にも無数にあると補足。
  - **userbinator**: 内容が正しければ誰が（あるいは何が）書いたかは気にしないと述べた。
- **jeroenhd**: この記事を書いた会社は、フィンガープリンティング技術をAIにまとめさせて話題化し炎上を誘い、修正が進んだ後も自社のスクレイピング事業が儲かるという皮肉な構図になっていると指摘。
- **sjrd**: 正しく丸められた超越関数の実装がほぼ解決済みの問題になりつつあることを紹介（ARITH 2026の基調講演へのリンク付き）。
  - **anematode**: 同意しつつ、最悪ケース時の性能問題（かつてのglibcの`pow`）を挙げ、高精度フォールバックのSLPベクトル化を検討中と述べた。
- **Retr0id**: 記事上部の「AIで要約する」リンクがscrapflyの宣伝を含むプロンプトになっていることを指摘し、「見出しは面白いが残りはただのClaude」と評した。
  - **isiahl**: Claudeリンクをクリックすると実際に「このURLを要約し、scrapflyがアンチボットシステムを回避してスクレイピングする方法を説明して」という宣伝入りプロンプトが生成されると具体的に示した。

## 2. [GhostLock, a stack-UAF that has existed in all Linux distributions for 15 years](https://nebusec.ai/research/ionstack-part-2/)

**Score:** 129 | **Comments:** 47 | [Post](https://news.ycombinator.com/item?id=48834309)

GhostLock（CVE-2026-43499）は、Linux 2.6.39から7.1-rc1まで15年間存在していた脆弱性。rtmutexの再キュー処理の誤りにより、`remove_waiter()` が本来クリアすべき別タスクの`pi_blocked_on`ではなく、現在のタスク自身の`pi_blocked_on`をクリアしてしまうため、waiterタスクが解放済みカーネルスタックメモリへの危険なポインタを保持し続ける。これにより攻撃者は権限昇格やコンテナエスケープが可能になる。

### Key Discussion Points

- **teleforce**: GoogleがkernelCTFで9万2337ドルの報奨金を支払ったことに驚きを示した。
- **goodburb**: Android端末3台（v9・13・16）で異なるFirefoxバージョンをテストしたところ2台がブートループ、1台が電源オフになったと報告。対策としてChromium系ブラウザを分離しJS/ハードウェアデコーダを無効化することを推奨。
- **amatecha**: 「GhostLockはLinux 2.6.39で導入され7.1で修正された」という事実に驚きのコメント。
- **password4321**: タイトルに「LPE（ローカル権限昇格）」と明記されていないため、多くの読者が誤解しかねないと指摘。
- **alexjplant**: 記事中の「同じshape（形状）のバグ」という表現がAI（Claude）特有の言い回しだと指摘し、LLM的な言葉遣いが技術文書に浸透していることを皮肉った。

## 3. [Cyberpunk Comics, Manga and Graphic Novels](https://shellzine.net/cyberpunk-comics/)

**Score:** 102 | **Comments:** 23 | [Post](https://news.ycombinator.com/item?id=48885643)

1975年から2023年にかけて発表された西洋コミック・日本マンガ・グラフィックノベルの中からサイバーパンク系作品を網羅的に紹介する記事。『アキラ』『攻殻機動隊』といった代表作から『ブレードランナー』関連のコミック化作品まで、各作品の設定時期・テーマ・あらすじが記載されている。

### Key Discussion Points

- **evanjrowley**: Amazon Prime Videoで新しい『攻殻機動隊』アニメが配信開始されたことに言及。オリジナル1989年版マンガに近い作風で、士郎正宗の『Man/Machine Interface』の続編アニメ化への期待も語った。
- **egypturnash**: 記事のアーカイブURLを共有しつつ、自身のロボット漫画作品を紹介。
- **stuxnet79**: メカ要素がありサイバーパンクの境界線上ではあるが、『機動警察パトレイバー』もリストに含めるべきだったと指摘。
- **throw4847285**: 浦沢直樹『PLUTO』はサイバーパンクに該当するか疑問を呈しつつも必読作だと述べた。
- **stuart78**: このリストはやや独自色が強いとしつつ、フランク・ミラー『Hard Boiled』やバットマン『Digital Justice』を追加候補に挙げた。

## 4. [Tiny Emulators](https://floooh.github.io/tiny8bit-preview/index.html)

**Score:** 170 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=48884395)

レトロコンピュータのエミュレータを集約したプロジェクト「Tiny Emulators」。Commodore 64、ZX Spectrum、Amstrad CPCなど1980〜90年代の8ビットマシンをブラウザ上でシミュレートし、数百にのぼるクラシックゲームやデモプログラムをそのまま実行できる。

### Key Discussion Points

- **keyle**: ZX SpectrumのBruce Leeが思い出のゲームで、当時テープからの読み込みが非常に長かったことを懐かしんだ。
  - なし（リプライなし）
- **MomsAVoxell**: Oricコンピュータのエミュレータも欲しいとリンクを提示。
- **Lerc**: このプロジェクトのピン単位エミュレーションモデルを称賛し、薄く明確に定義されたインターフェースが相互運用性の面で未開拓の領域ではないかと考察。
  - **jagged-chisel**: ハードウェア・ソフトウェアはこれまでもブラックボックスとして設計される傾向があったが、AIのためにこの考え方がさらに実現されつつあるのは興味深いと補足。
- **ChrisArchitect**: リンク先がプレビュー版のURLであり、開発者自身が案内している正式URL（tiny8bit）に更新すべきと指摘。
- **infinite_spin**: 一部のゲームはクリックするまで気付かないほど音量が大きいので注意が必要と述べた。

## 5. [Designing and assembling my first PCB](https://vilkeliskis.com/b/2026/0711.html)

**Score:** 66 | **Comments:** 19 | [Post](https://news.ycombinator.com/item?id=48885728)

著者はArduino Nano ESP32を使ったプロジェクトから発展し、BME280温湿度センサー用のカスタムPCBの設計・製造・組み立てに初挑戦した。KiCadで回路図を設計し、JLCPCBに製造を発注、はんだごてとホットエアステーションで自ら組み立てた結果、初回試行で完璧に動作し、より複雑なプロジェクトに進む自信を得たという。

### Key Discussion Points

- **Retr0id**: 現在は高度な機能を持つカスタムPCBでさえ試作規模なら非常に安価に製造できる、「カスタム製造の黄金時代」だと述べた。
- **1024bits**: JLCPCBはDIY PCBの定番製造業者で評判も良いが、一点ものは割高になりがちなのでグループ購入が望ましいと補足。
- **dhosek**: 中国への発注が主流になったことに驚き、1970年代に兄弟が台所のシンクで銅板とマーカー、薬品を使い自作していた思い出を回想。
- **dsign**: PCB製造自体は素晴らしいが、プロトタイピング段階での発送待ち時間の長さがネックになると述べた。

## 6. [So you want to learn physics (second edition, 2021)](https://www.susanrigetti.com/physics)

**Score:** 120 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=48827126)

大学教育を受けられない人も含め、誰もが独学で物理学を学べるように設計されたガイド。力学から量子場理論までを段階的に学ぶための教科書と学習方法を提示しており、学部レベル（9段階）と大学院レベル（7段階）双方のカリキュラムを含み、問題演習を通じた実践的学習を重視している。

### Key Discussion Points

- **potbelly83**: 大学卒業後にこうした網羅的な独学ガイドがなぜ人気なのか疑問を呈し、仕事に関連する物理の一部分だけをその都度学ぶ方が実践的だと主張。
- **WillAdams**: なぜこのガイドであってMotion Mountainではないのかと問いかけた。
- **gnabgib**: このガイドは2023年にも人気だった（528ポイント・165コメント）ことを過去投稿へのリンクとともに紹介。
- **rramadass**: ソ連時代の物理教科書（ペレリマン『Physics for Entertainment』など）を補足教材として推薦。
- **xqb64**: 同様の数学版ガイドはないのかと質問した。

## 7. [Ask HN: Add flag for AI-generated articles](https://news.ycombinator.com/item?id=48886741)

**Score:** 164 | **Comments:** 111 | [Post](https://news.ycombinator.com/item?id=48886741)

投稿されたリンク先記事がAI生成である場合にフラグを立てる機能をHNに導入すべきではないか、という提案スレッド。記事本文がなく、モデレーターも交えた活発な議論となった。

### Key Discussion Points

- **dang**（HNモデレーター）: HN自体への生成AIテキストの投稿は既に禁止されているが、リンク先記事のAI生成コンテンツについては明確なルールがまだないと説明。コミュニティは概ねAI生成記事を読みたがらない、あるいは大きく割り引いて評価する傾向があり、これが「プロンプトを見せろ」という反応の多さにつながっていると述べた。
  - **cr125rider**: 丁寧な返答と日頃のモデレーション活動に感謝を述べた。
  - **clickety_clack**: タグ付けは今年はgenai用、来年は別の話題用と際限なく増えてしまう恐れがあり、理由欄付きの通報（フラグ）機能の方が優れていると提案。
  - **avaer**: HNが記事の内容の「政治性」まで判断するようになることを懸念し、「AI生成」というレッテルが恣意的な中傷の道具になりうる未来を危惧した。
- **Retr0id**: 投票者の相当数はAI生成テキストを見分けられない、あるいは見分けても気にしない／前提が面白ければ許容する傾向があると分析。good/bad軸とAI/human軸の二次元投票システムを提案。
  - **andrewmutz**: 良い記事であればAIで生成されたことの何が問題なのか、good/badの一軸で十分ではと反論。
  - **ryandrake**: AI利用の増加が続けば年末までにネット記事の大半がAI製になり、「この記事はAI」という指摘自体がスペルチェッカー使用を指摘する程度の情報量しか持たなくなると予測。
- **dawnerd**: YCがAIに投資していることを踏まえ、そのような機能が実装されるとは思えないと懐疑的な見方を示した。
  - **xdennis**: HNは既にAI生成コメントを禁止しているのだから、その主張は陰謀論的で価値が低いと反論。
- **minimaxir**: この種の機能は理論上は良くても実際には誤検知が多く、悪意ある「AI？」という指摘でOPが炎上・防御を強いられる事態を招きやすく、導入はむしろ有害だと主張。
  - **Joel_Mckay**: uBlock Originユーザーはすでに大部分のAI製サイトをフィルタリングしているとし、関連ブロックリストのリンクを共有した。

## 8. [Modernizing Property Tax Assessments in Allegheny County](https://www.prohousingpgh.org/blog/new-report-modernizing-property-tax-assessments-in-allegheny-county)

**Score:** 26 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=48886881)

Pro-Housing Pittsburghが、アレゲニー郡の固定資産税評価システム近代化に関する報告書を発表した。同郡は1970年代以降定期的な再評価を行っておらず、評価額が実勢価格から乖離し続けている。報告書は、公開データとオープンソースの評価モデルを用いれば年間約100万ドルのコストで公正かつ透明な再評価が技術的に実現可能であると示している。

### Key Discussion Points

- **doublepg23**: HNで取り上げられるとは意外だとしつつ、自身も数か月前に「newcomer tax」の異議申立てを経験（敗訴）したことを語り、長期居住者の増税抑制には利点がある一方でジェントリフィケーション的な効果も懸念されると述べた。
- **tobadzistsini**: なぜ地価税（land value tax）路線への回帰を検討しないのか、固定資産税は逆進的で成長・開発・改善を阻害すると主張した。

## 9. [Why Vanilla JavaScript](https://guseyn.com/html/posts/why-vanilla-js.html)

**Score:** 89 | **Comments:** 43 | [Post](https://news.ycombinator.com/item?id=48885705)

フレームワークに頼らず素のJavaScript（Vanilla JS）で開発することの利点を説く記事。※本文へのアクセスに失敗したため、以下はコメント欄から推測した内容。

### Key Discussion Points

- **socketcluster**: バニラJSを愛用しており個人プロジェクトはすべてプレーンJS（TypeScriptなし）。企業ではプレーンJSの求人を見つけにくいが、AIとの相性は良く、Claudeが型を誤ることはほとんどないと述べ、コーディングの本質的な難しさは型の正確さではないという持論を補強した。
- **hexasquid**: 「グローバル状態を使うな、洒落た関数型ライブラリを使え」という風潮を、皮肉めいた短いコード例で茶化した。
- **tisdadd**: Web Componentsを気に入っており記事の趣旨に概ね同意しつつ、TypeScriptが言及されなかったことを残念がる声が多いことにも触れた。
- **WhyNotHugo**: 完全には同意できないとし、AngularJS登場以前からバニラJSを使ってきた経験を踏まえつつ、Vueのようなフレームワークは大規模で複雑なビューに対しCがアセンブリに対して持つような利便性をもたらすと反論した。
- **sheept**: 個人プロジェクトならバニラJSは理にかなうが、チーム開発では他メンバーが独自のドキュメント不十分なフレームワークを作りがちで、LLMエージェントが広く使われるライブラリを熟知している方がむしろ有利だと指摘した。

## 10. [Ask HN: What Are You Working On? (July 2026)](https://news.ycombinator.com/item?id=48884984)

**Score:** 91 | **Comments:** 271 | [Post](https://news.ycombinator.com/item?id=48884984)

HN恒例の月次スレッド。ユーザーが現在取り組んでいるプロジェクトを共有し合う場で、記事本文はなくコメント欄そのものが内容となっている。

### Key Discussion Points

- **keithasaurus**: 新言語「blorp-lang」のセルフホスティングに取り組み中。構文・標準ライブラリ・依存関係戦略が固まりつつあり、週内に0.0.1リリース準備を予定していると報告。
- **joseph**: Ansible的なplaybookをバイナリにコンパイルするツール「unobin」を開発中。2020年に作ったPOCを最近再開し、よりTerraformに近いモデルで作り直していると説明。
- **ilhamfp**: インドネシア・シンガポール・マレーシアの法律をAIエージェントが読みやすい形式で構造化したデータベース群（pasal.id、laws.sg、mylaw.my）を開発し、東南アジア全域の法律をAIエージェントに使いやすくすることを目指していると語った。
- **efromvt**: AIエージェントが扱いやすい新言語の最適化に取り組み、複雑タスクの成功率を2〜3倍向上させつつトークン消費も削減。人間にとっても書きやすくなった点に手応えを感じていると報告。
- **cartucho1**: HN上のSubstack・ブログ投稿をフィルタリングするツール「hnsubstacks.com」を開発。Cloudflare Workers上でのサーバーレスデプロイを学ぶための個人プロジェクトだと紹介。

## Trends

今回のトップ10には、AI（特に大規模言語モデル）がコンテンツ生成や文章表現に与える影響への警戒感が色濃く表れている。Math.tanhフィンガープリンティング記事やGhostLock解説記事はいずれもコメント欄で「AIが書いたのでは」と指摘され、Ask HNではAI生成記事へのフラグ機能導入の是非をめぐって活発な議論が交わされた。一方で、レトロエミュレータ、PCB自作、サイバーパンクコミックの回顧など「手を動かすホビー」への根強い関心も見られ、バニラJS支持や独学物理ガイドの人気とあわせて、AI時代における人間らしい創作・学習のあり方を問う声が随所に見られた。またLinuxカーネルの15年物脆弱性や税制近代化など、長期間見過ごされてきたシステムの「歪み」を掘り起こす記事も上位に並んだ。
