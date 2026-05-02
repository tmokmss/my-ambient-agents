---
title: "Hacker News トップ10 サマリー（2026年5月2日）"
date: "2026-05-02T03:42"
category: "summary"
summary: "TI-84 Evo新発売・睡眠中の学習研究・移民弁護士AMAなど、HNトップ10ストーリーを日本語でサマライズ"
tags: ["hackernews", "tech", "education", "science", "opensource"]
---

## 1. [Ti-84 Evo](https://education.ti.com/en/products/calculators/graphing-calculators/ti-84-evo)

**Score:** 344 | **Comments:** 319 | [Post](https://news.ycombinator.com/item?id=47979583)

Texas InstrumentsがTI-84グラフ電卓シリーズの新モデル「TI-84 Evo」を発売。30年以上使われてきたZ80/eZ80プロセッサからARM Cortex（156MHz）へ移行し、処理速度3倍・グラフ表示面積50%増を実現。USB-C充電対応、SAT/ACT/AP/IB等の主要試験での使用も認可されている。Python・TI-Basicによるプログラミングも引き続きサポート。

### Key Discussion Points

- **clamprecht**: 1996〜1997年頃、刑務所にいたとき友人のTI-85を借り、「TI-85 NON-PROGRAMMABLE CALCULATOR」と起動画面に表示されるよう改造した（収監規則でプログラマブル機器は禁止だったため）。
  - **t1234s**: 「HN史上最もタフな人物だ」と称賛
  - **sizzle**: 収監期間中のコンピュータアクセス状況や、その経験が思考に与えた影響を質問
- **ndiddy**: TI-84 EvoはARM Cortex CPU（156MHz）を採用し、30年以上続いたZ80系アーキテクチャを刷新。OSもez80エミュレーターを使わずARMネイティブで再実装されたと分析。
  - **libraryofbabel**: TI-83のZ80でアセンブリを学んだ世代。MUL/DIV命令がなく自分でシフト・加算で実装したのが非常に良い学習経験だった
  - **mikeknoop**: Z80でアセンブリを学び、TI公式のTestGuardをリバースエンジニアリングしてSafeGuardを作成した思い出
- **vvpan**: 高校で買わされたが実際には使わず、誰かが生徒に買わせるよう仕組んでいるに違いないと批判。
  - **Merad**: 工学部の数学・物理で使い倒した。線形代数の最終試験ではチートシートを保存して乗り切った
  - **pavel_lishin**: マインスイーパーをTI-BASICでプログラムした。ただし授業で使う99%のことは普通の電卓で十分
- **ziofill**: 親が25年前にクリスマスプレゼントとして屋根裏に隠したTI-84が行方不明になり、代替のCasioで高校を乗り切った。昨年ついに屋根裏からTI-84を発見。

---

## 2. [Good developers learn to program. Most courses teach a language](https://evilgeniuslabs.ca/blog/good-developers-learn-to-program-not-a-language)

**Score:** 65 | **Comments:** 39 | [Post](https://news.ycombinator.com/item?id=47981995)

プログラミング教育の本質的な問題を論じた記事。ブートキャンプは6週間で言語の構文を教えられるが、真のプログラミング能力（システム分解のメンタルモデル、データフローの理解、アーキテクチャ上の判断力）の習得には10年の経験が必要だと主張。「コードの形が間違っている」と直感的に気づけるかどうかが熟練者と初心者の差であるとしている。

### Key Discussion Points

- **chao-**: ドットコムバブル崩壊後の大学でLisp→Javaのカリキュラムを経験。言語は付随的なもので、パラダイムを理解することが本質だと実感した。「言語は本質ではない」という恐れのなさを身に付けられたことに感謝している。
- **mettamage**: 大学でオープンソースプロジェクトを読んでコントリビューションする授業があれば良かった。著名OSS プロジェクトを取り上げて設計判断を講義する授業が理想的だと提案。
- **ergocoder**: 「言語を学ばずにプログラミングを学ぶ」は無意味で非効率。まず本格的な言語を習得することが前提条件だと反論。
- **pillars**: プログラミング前に「計算とは何か」という基礎概念（入力→計算→出力）を理解することが重要。プログラム＝データ＋命令という根本をフェインマンの計算講義を引用して説明。

---

## 3. [Artemis II Photo Timeline](https://artemistimeline.com/#artemis-ii-walkout-nhq202604010003)

**Score:** 94 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=47954394)

NASAのアルテミスII月ミッション（2026年3〜4月）の写真・動画タイムラインサイト。Hank Greenが独自に作成した非公式アーカイブで、約220枚の画像と動画をメタデータ（撮影時刻・地球からの距離・使用カメラなど）付きで時系列に閲覧できる。GitHubで公開されており、Claude Codeを使って開発されたことも話題に。

### Key Discussion Points

- **ollin**: Hank GreenがYouTubeでこのタイムラインの使い方を解説。「クルー写真のみ」フィルターで時系列を矢印ボタンで追うのが最高の体験だと紹介。
- **echelon**: Hank GreenのサイトがClaude Codeで作られていることを指摘。2000〜2006年頃のインターネット（個人が楽しいものを作ってシェアするインディーウェブ）の雰囲気を思い出すと称賛。
- **dylan604**: 月の軌道上からの写真を見ると、脳が地球のサイズを「知っている」ために月が奇妙に小さく見える不思議な遠近感覚を体験したと報告。

---

## 4. [New research suggests people can communicate and practice skills while dreaming](https://www.newyorker.com/culture/annals-of-inquiry/its-possible-to-learn-in-our-sleep-should-we)

**Score:** 268 | **Comments:** 147 | [Post](https://news.ycombinator.com/item?id=47977748)

夢を見ながらコミュニケーションを取ったり技能を練習したりできるという新しい研究についてのNew Yorker記事。睡眠中の学習・問題解決の可能性を探っており、lucid dreaming（明晰夢）の研究とも関連する。スレッドには「夢の中でバグを修正した」「問題が翌朝解けていた」という体験談が多数集まった。

### Key Discussion Points

- **mr-wendel**: 最初の職場でインストーラーシステムのシェルコマンドインジェクション脆弱性を夢の中で発見し、翌日実際に証明した経験を共有。
  - **dietr1ch**: 大学の持ち帰り試験で解けなかったアルゴリズム問題が土曜夜に就寝後、日曜朝に完全に解けていた体験
  - **tapland**: 同様にフロントエンドのセキュリティ脆弱性を夢の中で発見した経験。悩んでいることを寝ている間に処理していると分析
- **ml_basics**: 純粋数学の難問シートを毎晩1問ずつ格闘し、翌朝目覚めると答えが分かっているという現象を2週間繰り返した体験談。睡眠とリラックスした思考が問題解決に不可欠だと実感。
  - **dwoldrich**: 40代の頃は就寝前に問題を言語化しておくと翌朝「解答」が内なる声として来た経験がある。今はその能力を失ったかも
  - **christophilus**: 毎朝ラップトップを開く前に前日のバグに気づく。「睡眠は不思議で魔法のようなもの」
- **8note**: 「コミュニケーション」という最も興味深い部分の説明が記事で不足していると指摘。どのようなメカニズムで睡眠中の人と通信するのか？
  - **samothrace**: Stephen LaBergeの明晰夢研究では、被験者が眼球運動で研究者と通信していたと補足
- **vanviegen**: 本番C++サーバーが週1回セグフォルトする問題を夢の中で解決。ユーレカのアドレナリンで目が覚め、直ちにラップトップへ。
  - **pedalpete**: コーディングを始めた頃は「コードメア（Codemare）」と呼んでいたコーディング悪夢に悩まされた
  - **subhobroto**: 1時間以上解けない問題は意図的に寝るようにしている。ただし翌日の脳が空っぽになるため重要なブロッカーにのみ限定
- **markus_zhang**: 「近い将来、夢の中でも仕事させられるようになりそう。生産性の石も残さず引っくり返そうとしている」と皮肉。
  - **TallGuyShort**: 夢の中でひらめいた設計が実際に最高の仕事になったことがある。シャワー中でも同様。

---

## 5. [The smelly baby problem](https://www.worksinprogress.news/p/how-disposable-diapers-conquered)

**Score:** 130 | **Comments:** 70 | [Post](https://news.ycombinator.com/item?id=47950070)

使い捨ておむつが1950年代の市場シェア1%から1980年代には95%に急成長した歴史を追った記事。P&Gが1961年に市場参入後、高度な連続製造機械の開発でコストを劇的に削減。1977年のKimberly-ClarkによるHuggies（弾性パネル）の登場、さらに超吸収性ポリマーの導入が普及を加速。環境問題への批判を受けながらも親の圧倒的支持を得た「地味な技術革新」の歴史。

### Key Discussion Points

- **jonathanlydall**: おむつ交換は非親からは嫌悪されるが、実際には乳幼児の世話の中で比較的簡単な部分だと気づいた。本当に大変なことは別にある。
- **Procrastes**: おむつより大変なのは過敏な親の不安。子どもの呼吸の変化に気づくだけで部屋を半分横切っていた。「家中の尖った角が自分の肌に刺さるように感じた」。
- **forcedfakelaugh**: 使い捨ておむつの化学物質への懸念から布おむつを使用。洗濯機があれば労力は許容範囲内だが旅行時は例外。
- **leonidasv**: 母が環境への配慮から布おむつを試みたが、1ヶ月以内に使い捨てに戻った。
- **arjie**: Benjamin Spockの育児書の話とともに、おむつ替えの「2本指技法」（ピンを刺さないよう指を挟む）が現代でも病院で指導されていることを指摘。環境問題と利便性のジレンマについても論考。

---

## 6. [To Restore an Island Paradise, Add Fungi](https://e360.yale.edu/digest/atoll-islands-sea-level-rise-fungi)

**Score:** 13 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=47949794)

パルミラ環礁（太平洋の遠隔地）の生態系回復に菌根菌が不可欠であることを示した研究。ヤシ油生産のための森林伐採とクマネズミによる破壊の後、2011年にネズミを駆除し2022年までに150万本のヤシを撤去。しかしPisonia木（海鳥の巣場所）の回復には地下の菌根菌ネットワークの移植が必要だと判明。海鳥→木→珊瑚礁→島の海面上昇からの保護という生態系連鎖の重要性が明らかに。

---

## 7. [A Report on Burnout in Open Source Software Communities (2025) [pdf]](https://mirandaheath.website/static/oss_burnout_report_mh_25.pdf)

**Score:** 40 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=47981669)

Miranda Heath著、2025年のオープンソースソフトウェアコミュニティにおけるバーンアウトに関するレポート（PDF）。OSSメンテナーが無償で提供する作業に対する「エンタイトルメントを持つユーザー」の有毒な行動、コミュニティからのサポート不足がバーンアウトの主要因として取り上げられている。

### Key Discussion Points

- **avaer**: 無償でOSSを公開した経験から受けた有毒な行動を列挙。DMでの罵倒、コミュニティメンバーのスキャンダル対応、プライベートソースコードの競合への横流し、職場への中傷キャンペーンなど。「OSSに参加する際は、こういうことへの対処計画を持ってから臨むべきだ」と警告。
- **corvad**: XZ Utilsの例を挙げ、メンテナーへの有毒ユーザーがサプライチェーン侵害につながったことを指摘。
- **agunapal**: 大きな組織でOSSを維持する際の課題として影響の可視化を指摘。GitHubスターやダウンロード数はもはや良い指標ではなく、AIエージェント時代にはさらに偽りやすくなっていると警告。
- **arjie**: 「価値あるものを作ったら永遠にサービス提供義務がある」という考え方は全くの誤りだと主張。OSSに依存しているユーザーでも、メンテナーへの嫌がらせは認識できないし止める方法もないという問題を提起。

---

## 8. [I'm Peter Roberts, immigration attorney who does work for YC and startups. AMA](https://news.ycombinator.com/item?id=47975676)

**Score:** 131 | **Comments:** 191 | [Post](https://news.ycombinator.com/item?id=47975676)

YCや各種スタートアップの移民問題を扱う弁護士Peter Robertsによる定期AMAスレッド。H-1Bビザ、グリーンカード、PERM労働許可、O-1ビザなど米国移民法に関する質問に6時間対応。2025年以降の政策変更（新たな$100,000 H-1Bフィー）についての質問が多く見られた。

### Key Discussion Points

- **jefftk**: 新しい$100,000 H-1Bフィーの詳細について質問。米国外の申請者にのみ適用されるのか、9月の更新や法的無効化の見通しはどうか。
- **daxuak**: H-1Bの6年間上限後のグリーンカード取得が間に合わない場合の選択肢（O-1など）について質問。O-1の濫用報告があり将来の変更を懸念。
- **1qaboutecs**: PERMプロセスでの「架空の求人広告」の倫理的問題を提起。求人は実際には存在しないのに応募者を面接しなければならない矛盾について。
- **jjmarr**: AIが移民法務に与える影響と、幻覚（ハルシネーション）リスクから多くの弁護士が法律AIに否定的な意見を持っていることを共有し意見を求める。
- **xqb64**: 西バルカン出身でEE/CS学士を持つ人物が、ゼロから米国永住権・市民権を取得する最善のルートについて質問。

---

## 9. [Direct electrochemical black coffee quality appraisal using cyclic voltammetry](https://www.nature.com/articles/s41467-026-71526-5)

**Score:** 23 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=47952773)

Nature Communications掲載の研究。サイクリックボルタンメトリー（電気化学的循環伏安法）を使ってブラックコーヒーの品質を直接評価する手法を提案。試薬や複雑な前処理なしに、コーヒーの抗酸化物質・フェノール化合物の電気化学的シグナルをリアルタイムで測定し品質を評価できる。

### Key Discussion Points

- **zeristor**: コーヒー評論で有名なJames Hoffmannがこれを知ったらどうなるか楽しみだとコメント（ブルックリンのコーヒーショップYouTube Shortsへの登場を想像）。
- **s0rce**: 職場の電気化学者にこの論文を転送した。休憩室のコーヒーでテストしてみるかもしれないと報告。

---

## 10. [Lib0xc: A set of C standard library-adjacent APIs for safer systems programming](https://github.com/microsoft/lib0xc)

**Score:** 92 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=47978834)

MicrosoftがMITライセンスでオープンソース公開したCプログラミング向け安全性強化ライブラリ。GNU拡張とC11を活用し、`void*`キャストの削減（`context_t`タグ付きポインタ）、型チェック付き遅延関数呼び出し（`call_t`）、符号付き/符号なし整数変換の安全化など、数十年来口伝えで受け継がれてきた「安全なCプログラミングパターン」をAPIとして文書化・テスト済みにした。

### Key Discussion Points

- **EPWN3D（作者）**: C言語の安全プログラミングパターンを実際のAPIとして体系化。bounds-safetyを有効にしてもstrict警告で動作するよう設計。「Rustではないし、型安全でもない。しかし既存のCコードベースを昨日より大幅に安全にすることを目的としている」と説明。
- **raggi**: C/C++/POSIXの標準仕様自体が安全なAPIを追加してunsafe APIを非推奨にすべきであり、「やらない理由はない」と主張。コンパイラとライブラリはしばらくの間unsafe APIをサポートし続けられる。
- **nxobject**: Microsoftが本番環境で使用しているのか、それとも「20%プロジェクト」なのかと質問。MSVCがGNU拡張をコンパイルできるかについても疑問を呈する。
- **thayne**: スライス（長さ情報を保持する動的配列）のサポートがあるかどうかを質問。
- **jabl**: 「libxc」（別の有名ライブラリ）と名前が紛らわしい（0が余分に入っている）と指摘。

---

## Trends

今日のHacker Newsトップ10から読み取れるテーマと傾向：

1. **教育・学習の再定義**: TI-84 Evo（ハードウェアの進化）、プログラミング教育論、睡眠学習研究の3記事が「いかに学ぶか」を問い直している。単なるツールや言語の習得を超えた、深い概念理解の重要性が共通テーマ。

2. **持続可能性の危機**: OSSバーンアウトレポートと移民弁護士AMAは、現代の技術エコシステムを支える人々（OSSメンテナー、移民エンジニア）が直面する制度的・社会的な課題を浮き彫りにしている。

3. **安全性への回帰**: lib0xcとC言語安全プログラミングの議論は、パフォーマンスと安全性のバランスという永続的なテーマ。Rustへの移行ではなく、既存のCコードベースを段階的に安全にするプラグマティックなアプローチへの関心。

4. **NASA・宇宙への関心**: Artemis IIのフォトタイムラインが94スコアを獲得。クリエイティブなインディー開発者（Hank Green）が公式機関より魅力的なUI/UXを提供できることを示した事例として注目された。

5. **AI時代の副作用**: OSSメトリクスの偽装可能性、法律業界でのハルシネーション問題、H-1Bビザ政策の変化など、AI・技術の急速な変化が様々な分野に波及する副作用が複数の議論に共通している。
