---
title: "Hacker News トップ10 ダイジェスト (2026-11-06)"
date: "2026-11-06T19:15"
category: "summary"
summary: "Blender UI の切り出し BUI、Cybertruck 生産終了、Gemini Omni 1.2 Flash、FAA のフロッピー廃止など注目10件"
tags: ["hackernews", "tech", "ai", "rust", "tesla"]
---

## 1. [Blender's UI and Runtime: Much Faster Than GPUI](https://github.com/ppmpreetham/BUI)

**Score:** 587 | **Comments:** 238 | [Post](https://news.ycombinator.com/item?id=50389333)

Blender のユーザーインターフェースを切り出し、Python・Rust・JavaScript(React/Svelte)・C/C++・Dear ImGui から使えるライブラリとして公開したプロジェクト。Blender の GUI の省電力・省メモリ・高速性を他のアプリでも使えるようにすることを狙う。ライセンスは GPL-3.0-or-later。

### Key Discussion Points

- **munksbeer**: 何のプロジェクトでなぜ興味を持つべきかがすぐ分かる README だと称賛。
  - **laserbeam**: 逆に、Qt や Dear ImGui の話が長く、コードと無関係な画像が付く混乱した LLM スパムのような README だと批判。
  - **meowface**: 自分は requests ライブラリのような最小限の README を目指してきたと述べた。
- **dev0p**: Blender の UI は好きだが Blender 以外では使ってほしくないと主張。
  - **OtherShrezzing**: 小規模ゲーム開発では自作エディタの UI 作りに時間を取られるため、既存の UI があれば有用だと反論。
  - **lentil_soup**: 磨き込まれた UI の挙動を再実装せずに済むのは利点だと指摘。
  - **atoav**: オーディオソフトなど、パワーユーザー向けの用途には Blender の UI が最適だと述べた。
- **lukebitts**: 10年以上 Blender を使っており、分割やカスタマイズ性が優れていて UI を高く評価。似たものを作ろうとして途中で断念したと語った。
  - **foobarbecue**: Blender Game Engine の復活に使えるかと質問し、フォークの UPBGE を見つけたと追記。
  - **ppmpreetham**（投稿者）: 自分は BUI の作者で、バイブコーディングは嫌いだと述べた。AI に UI を分離させるのではなく、UI ロジック以外を削除させる方法を取ったという。
- **nicoburns**: GPUI は最速ではなく、Iced・Slint・Dioxus Native・Freya などの方が速いと聞いていると指摘。Zed は UI が単純なので問題にならないのだという。
  - **bita_nidir**: 自分が聞いた話では、それらの方が遅いとのこと。
  - **cropcirclbureau**: 自分の経験でも GPUI は単一目的の低レベルなもので、他の Rust GUI の方が成熟しつつあると同意。
- **felixthehat**: GIMP や Inkscape も Blender の GUI を採用してほしいと希望。
  - **felixthehat**: 3つを並べたスクリーンショットを共有した。
  - **whywhywhywhy**: GIMP への移植は意味がなく、新規に作る方がよいと述べた。

## 2. [Tesla to wind down Cybertruck production](https://www.nbcnews.com/tech/tech-news/tesla-wind-cybertruck-production-years-poor-sales-markets-rcna607817)

**Score:** 494 | **Comments:** 1153 | [Post](https://news.ycombinator.com/item?id=50391456)

イーロン・マスク氏が X で、テキサスのギガファクトリーでの Cybertruck 生産を2027年半ば頃に終了すると明らかにした。2025年の米国販売は20,237台で前年比48%減。自動運転タクシー向けの新型車 Cybercab の増産に備えた動きで、生産を別工場へ移すのか完全にやめるのかは不明。欧州では歩行者保護規制を満たすのが難しいとも報じられている。

### Key Discussion Points

- **brightball**: ハリケーン Helene の停電で、友人が Cybertruck を2週間ほど自宅の電源にし、スーパーチャージャーで充電しながら乗り切ったと紹介。
  - **rurp**: 数日停電しても近くの充電所が使えるという状況はかなりニッチだと疑問を呈した。
  - **spaceywilly**: 1回の充電(約130kWh)は一般家庭の約8日分の電力に相当し、毎日の運転はフルサイズのガソリン車と同様に無駄が大きいと指摘。
  - **lrobinovitch**: 家に給電する機能は Powershare として現行 Tesla 車の多くに搭載されていると補足。
- **crawshaw**: 失敗の最大の要因は価格だと分析。ゼロ金利期の高いトラック価格を前提に作られたが、前提が崩れたという。
  - **gffrd**: 米国のフルサイズトラックの平均購入価格は6万5000ドルを超えていると出典付きで示した。
  - **al_borland**: 発表から納車までが長く、納車時には他社の電動ピックアップが複数出ていたのも大きいと述べた。
- **paxy**: 連邦 EV 税控除の終了、排出枠市場の崩壊、製造コストが下がらないこと、米国の EV 比率が6%に低下したことなどを並べ、Tesla の苦境を整理。
  - **epistasis**: 比率は毎四半期下がっているのではなく緩やかな動きだが、米国メーカーには深刻だと補足した。
  - **tromp**: 欧州では2025年の売れ筋 EV トップ10に中国車は入っていないと反論。
  - **pjc50**: 「普通の」車メーカーとしての将来はあるが、新しい量販モデルが必要だと述べた。
- **conductr**: トラックでも SUV でもない中途半端な車で、実用上のニーズを満たさないと評価。
  - **JKCalhoun**: 自分もトラックを買ったが、荷台に合板1枚が載らず取り回しも悪かったと同意。
  - **dmix**: Ford F-150 Lightning も高価格と航続の問題で失敗したと指摘した。
- **gnarcoregrizz**: 20年間似た見た目の車ばかりの中で、突飛なデザインの新しい車が出たことを歓迎。限定生産のコレクターズアイテムにすべきだったとも述べた。
  - **pred_**: Ioniq 5 も同様の美学で、街中にあふれているので成立しないわけではないと反論。
  - **dvogel**: CT は反動的な反発ではなく前向きなビジョンを示すべきだったと述べ、ある批評を紹介した。

## 3. [Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/)

**Score:** 235 | **Comments:** 182 | [Post](https://news.ycombinator.com/item?id=50392118)

Google の動画生成・編集モデルで、ネイティブで最長15秒(3〜15秒を1秒単位で指定)の生成に対応した。前バージョンから30%値下げされ、720p で1秒あたり0.07ドル。参照画像への忠実度や、キャラクター・商品・背景の一貫性が向上し、会話形式で複数回に分けて編集できる。Gemini API、Google Cloud、Flow、Google Vids などで利用でき、出力には SynthID の透かしが入る。

### Key Discussion Points

- **wxce**: Google は AI で出遅れており、Plus プランに加入していても最新モデルが使えないと不満を述べた。
  - **ttul**: AI Studio はネット上で最悪の UX だと批判。
  - **seydor**: いずれ検索を置き換えられるモデルが出れば皆が使うようになり、課題は収益化だと述べた。
  - **jorl17**: 自社では月1500ユーロをAIモデルに使っているが、Google のモデルは入手方法が分かりにくく使えていないと語った。
- **msabalau**: 新しい動画モデルで Gemini 4 の後継ではなく、昨日から Flow で使えるという。クリエイターは API ではなく Flow を使い、キャラクターの一貫性向上は有益だと述べた。
  - **ricardobeat**: 動画専用モデルに「Omni」と付けるのは紛らわしいと指摘。
  - **kakugawa**: Flow では2倍高くなるが、API では30%安く、Flow は元々 API の5〜6分の1と安いと補足した。
- **Willingham**: ロールアウトが分かりにくく、Vids では1〜3日かかり、vids.new で使えるか確認できると説明。
  - **WarmWash**: 多くの人は月額プランの Flow クレジットで使うと述べた。
  - **jcelerier**: 通常のアカウントの AI Studio にも表示されていると報告した。
- **lexoj**: Gmail につながったアカウントがブロックされるのが怖く、Google のモデルは使いにくいと不安を述べた。
- **del82**: Google Docs やスライドに組み込まれた Gemini が貧弱で、Claude などを使えれば仕事の効率が大幅に上がると要望。
  - **FailMore**: そのためにエージェントで文書やスライドを作れる smalldocs を作ったと紹介。
  - **mattnewton**: Claude や ChatGPT のブラウザプラグインと MCP で、Google Docs との連携に困っていないと述べた。

## 4. [US FAA says it will phase out floppy disks from air traffic control by 2028](https://www.reuters.com/world/us/us-faa-says-it-will-phase-out-floppy-disks-air-traffic-control-by-2028-2026-11-05/)

**Score:** 122 | **Comments:** 120 | [Post](https://news.ycombinator.com/item?id=50388001)

米連邦航空局(FAA)が、航空管制で使われているフロッピーディスクを2028年までに段階的に廃止すると発表した。元記事(Reuters)は取得できなかったため、コメントの内容に基づく。コメントによると、対象は MS-DOS ベースの旧式の情報表示システム(IDS-4)で、後継は E-IDS。10月13日にヒューストン空港の光ファイバーが切断され、データ通信が途絶した事故にも言及されている。

### Key Discussion Points

- **bargl**: FAA の NOTAM デジタル化に携わった経験から、FAA の安全リスク管理は厳格なプロセスに基づくため、最先端のエンジニアの感覚で近代化を見るべきではないと注意を促した。
- **jonhohle**: 詳細が必要だと述べ、1.44MB に収まるデータで安全重視のシステムが動くなら、アプリの資源要件を減らす参考にすべきだと指摘。
- **skissane**: FAA の E-IDS のページと PCMag の記事を紹介し、IDS-4 は「1980年代」と言われるが実際は1990年代前半に開発された MS-DOS 製だと補足した。
- **driverdan**: E-IDS は少なくとも2020年から開発され2025年に展開開始の予定だったとして、政治的なアピールだと批判した。
- **Dwedit**: 物理メディアはエアギャップの利点があるが、フロッピーは不良セクタが出やすいので良い選択ではないと述べた。

## 5. [First steps in bare-metal programming using UEFI](https://kevinboone.me/efitest_index.html)

**Score:** 91 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=50394855)

Linux ワークステーションで UEFI ファームウェア向けのベアメタルアプリを開発する全5部の連載の目次。コンパイルとリンク、EFI システムパーティション、DVD/USB イメージの作成、寄り道の話題、Simple File Protocol によるファイル操作の順に進む。

### Key Discussion Points

- **edoceo**: Zig でブートローダーを作る際の参考にしたと紹介。16ビット文字など癖が多いと述べた。
- **the_panopticon**: C 標準ライブラリがない問題には edk2-libc があると紹介し、EFI の Windows 的なコーディングスタイルに関する資料も挙げた。
- **alexkampler**: BIOS 時代に比べると「ベアメタル」と呼ぶのはずるく、ExitBootServices でそれらが失われる瞬間が本当のベアメタルだと指摘した。

## 6. [Rune: A native GPU-rendered Rust UI framework for macOS, Windows, Linux and web](https://github.com/anomalyco/rune)

**Score:** 80 | **Comments:** 58 | [Post](https://news.ycombinator.com/item?id=50394569)

独自のレンダラー・テキスト・レイアウト・スプリングアニメーションを備えた、macOS・Windows・Linux・Web 向けのネイティブ GPU 描画 Rust UI フレームワーク。どのアプリもヘッドレスで動かせ、エージェントが PNG に描画し要素ツリーをダンプし、スクリプト入力で操作できる。プレリリースで、PR は受け付けず、エージェント経由で Issue を立てる運用。

### Key Discussion Points

- **nicoburns**: バイブコーディングされたプロジェクトだとして、egui など実績のある Rust GUI フレームワークをダウンロード数付きで挙げた。
- **mik3y**（投稿者）: 「PR は受け付けず、エージェントに Issue を立てさせる」方針が初めて見るやり方で面白いと述べた。
- **rgbrgb**: ヘッドレスで描画とツリー確認ができる点を評価し、SwiftUI/UIKit にも取り入れてほしいと述べた。
- **bhouston**: アクセシビリティ、キーボード操作、国際化(RTL・ダイアクリティクス)、GPU がない場合の挙動を質問した。
- **skolos**: GPU 描画を無効にしても遅く感じず RAM/VRAM を節約できるのに、なぜ GPU 描画を売りにするのかと疑問を呈した。

## 7. [We know 15k websites are infected. how do we tell them?](https://scotthelme.co.uk/we-know-15-579-websites-are-infected-how-do-we-tell-them/)

**Score:** 37 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=50396064)

Report URI が、悪意ある JavaScript に感染した15,579サイト(月間訪問数は合計1億3,500万回以上と推定)を特定した。カード情報を盗むスキマー、偽の認証画面、iOS 向けマルウェア配布などがあり、感染経路にはサイト改ざん、外部スクリプトのサプライチェーン攻撃、XSS、期限切れドメインの再取得がある。連絡先が分からないサイトへの通知は難しく、筆者は解決策を募っている。

### Key Discussion Points

- **baby_souffle**: ドメインごとにブラウザベンダーへ報告し、警告ページを出してもらってはどうかと提案。
- **theamk**: Google Safe Browsing のブロックリストに載せ、トラフィックが落ちれば管理者が気づくか訪問者が減ると述べた。
- **superkuh**: 昔は whois で管理者に連絡できたが、GDPR で連絡手段がなくなったと主張した。
- **thaumaturgy**: 自分のホスティングする WordPress 群で、送信 JS から悪意あるものを検知するツールを探していると尋ねた。
- **zzzeek**: 15,579サイトに脆弱性を通知すれば数千件は「ハッキングされた」と警察を呼ばれかねないと皮肉った。

## 8. [Size-It-Up (Game)](https://magnitudle.com/size-it-up)

**Score:** 24 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=50395869)

毎日遊べる視覚的なサイズ推測ゲーム。基準物の隣で対象物のサイズを調整し、確定するとどれだけ近かったかが分かる。1日5問、各問最大100点で合計500点。

### Key Discussion Points

- **xivzgrev**: 発電所のタービンなど身近でない対象が多く推測が当てずっぽうになるので、バスケットのゴールとトラックなどもっと身近なものにしてはどうかと提案。
- **skzo**: 内容が米国中心すぎると指摘した。
- **JeppyG**: ビッグ・ベンの文字盤が思ったより小さいと驚いた。
- **samrus**: モバイルではドラッグしてもサイズが変わらないと不具合を報告。

## 9. [Memorilla: Latent Semantic Memory for LLMs](https://arxiv.org/abs/2610.21375)

**Score:** 20 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50395919)

凍結された LLM のために、文書コレクション全体をクエリに応じた固定数(16個)の「メモリトークン」へ圧縮する記憶システム。8ベンチマーク中5つで Mem0 や MemoRAG を上回り、FactKG では全文脈推論(80.43%)を上回る84.33%を108分の1のトークン数で達成。TextWorld では平均成功率が18.6%から24.2%に向上した。

### Key Discussion Points

- **jkingsman**: 専用の埋め込み付き RAG の上に、エージェントの問い合わせを受けて応答をテキストを介さず入力のトークンストリームへ直接注入するモデルがある構成と理解。注入形式は非常にトークン効率が高いとコメントした。

## 10. [Perplexity launches AI agents for work](https://www.perplexity.ai/en-GB/hub/blog/teammates-are-agents-for-complex-ongoing-work)

**Score:** 19 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=50395866)

Perplexity が、継続的で長期にわたる業務を担う個人向け AI エージェント「Teammates」を公開した。計画を立てて進め、優先順位に応じて作業を切り替え、結果を提示してユーザーのレビューを受ける。過去の作業やフィードバックを記憶し、Slack などで複数のチームから依頼を受け、Teammates 同士で引き継ぐこともできる。各 Teammate は独立した環境で動き、ユーザーは介入や修正ができる。

### Key Discussion Points

- **5555watch**: 研究者向けの AI として有名だったのにすぐ存在感を失ったと述べ、GPT ラッパー系スタートアップは同じ運命をたどるという Sam Altman の発言を引用した。
- **cmiles8**: 存在を忘れていたと述べ、コモディティ化が進む市場で Perplexity にどんな IP の優位性が残るのかと疑問を呈した。

## Trends

- **UI フレームワークの再発明**: BUI(Blender UI の切り出し)と Rune(GPU 描画の Rust UI)が上位に入り、Rust GUI の速さや、GPU 描画・アクセシビリティの是非が議論された。Rune はエージェントがヘッドレスで操作できる点や PR 不可の運用など、AI 前提の設計も話題に。
- **AI の製品化と分かりにくさ**: Gemini Omni 1.2 Flash は機能面より、提供経路や名称の混乱への不満が目立った。Perplexity の Teammates への反応は、コモディティ化する AI 市場での差別化への疑問が中心。Memorilla はエージェントの長期記憶に関する研究。
- **レガシーと現代化**: FAA のフロッピー廃止と UEFI のベアメタル入門という、古い技術や低レイヤへの関心が目立った。
- **Cybertruck の生産終了**: 価格・デザイン・政策環境が複合した失敗として、1000件を超えるコメントが集まった。
