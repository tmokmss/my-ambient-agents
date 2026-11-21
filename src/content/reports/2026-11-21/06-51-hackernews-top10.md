---
title: "Hacker News トップ10 (2026-11-21)"
date: "2026-11-21T06:51"
category: "summary"
summary: "リーマン予想(GRH)証明の主張が2件、Inkling 2 Mini、開発者のアーキテクト化論、NIN ライブアーカイブなど"
tags: ["hackernews", "summary", "math", "ai"]
---

## 1. [Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf]](https://alpo.ge/remark.pdf)

**Score:** 2521 | **Comments:** 1738 | [Post](https://news.ycombinator.com/item?id=50574968)

Levent Alpöge が、社内 AI モデルを用いて生成した Lean のみの巨大な形式証明で一般化リーマン予想(GRH)を証明したと主張している。PDF は取得できなかったため、Terence Tao のブログ（#4）とコメントに基づく要約で、証明は約1.3GB・約1500万行の Lean コードとされる。

> **関連:** #2「Hurried Announcement: Alessandro Masullo GRH」も参照（同じ GRH について人間のみで書かれたとされる別の証明の発表）
> **関連:** #4「Unforced Navier-Stokes Singularity and the Generalized Riemann Hypothesis」も参照（同一イベントについての Tao の解説）

### Key Discussion Points

- **djoldman**: 証明は 1.3GB・約1500万行の Lean コードで、14分割のアーカイブをダウンロードして検証する手順を共有。
  - **hafeoz**: 480コアの Xeon で2.4時間かけてコンパイルし、89GB の出力が生成された。
  - **jhanschoo**: Lean コミュニティが専用リポジトリでの維持を開始した。
  - **causal**: Lean にバグがあると、大規模なエージェント群がそのバグに依存した証明を見つけてしまう恐れがある。
- **huseyinkeles**: 2014年の Alpöge のトルコ語インタビューを紹介。リーマン予想は人生の目標だと語っていた。
- **synapsomorphy**: 「思ったより早かった」と驚きつつ、新時代への不安も表明。
  - **RAWGOD**: 実験が必要な実科学は行列計算ほど速く進まないので、常温超伝導や核融合がすぐ来るとは限らない。
  - **cbg0**: 核融合の残課題は炉壁の耐中性子損傷など工学面が中心。
  - **inkysigma**: Lean 上の RL は可能だが、物理科学には同様の素早いフィードバックループがない。
- **spprashant**: 理論的発見が相次いでおり、次の課題は実世界への影響との橋渡しだ。
  - **lbrito**: 利益が一般の人々に行き渡るのか疑問。
  - **MinimalAction**: 富も計算資源も握る層から恩恵が下りてくるとは考えにくい、と反論。
  - **loglog**: 食料や水はすでに安価で豊富で、困窮は政治の問題だ。
- **vbezhenar**: AI のブレークスルーが数学に集中していて、ソフトウェアなど他分野で同等のものを見ない点が意外。
  - **jcelerier**: 点群圧縮の自分の用途では Claude が実用的な成果を出した。
  - **zesterer**: 本質的な革新は定理証明器で、これがないと LLM の総当たりは幻覚に流れる。
  - **rcpt**: 数学は純粋な論理で物理世界に律速されないため、AI が最高速で反復できる。

## 2. [Hurried Announcement: Alessandro Masullo GRH](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/)

**Score:** 1862 | **Comments:** 859 | [Post](https://news.ycombinator.com/item?id=50579568)

Ravi Vakil のブログ。Alessandro Maria Masullo による GRH の証明案を、Brian Conrad が数か月かけて検討しており、AI を使わない人間のみの証明だと紹介する。本来は1年かけて磨いてから発表する予定だったが、急きょ現行の草稿を公開した。更新では、複数の AI モデルの助けを借りた人々から証明の問題点が報告されたとあり、コミュニティが納得するまで受理されないと注記されている。

> **関連:** #1「Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf]」も参照（GRH の別の証明主張）
> **関連:** #4「Unforced Navier-Stokes Singularity and the Generalized Riemann Hypothesis」も参照（Tao が同時期の GRH 関連の動向をまとめた投稿）

### Key Discussion Points

- **kyykky**: 賢さだけで生計を立てられた時代は終わり、自分で管理できない機械へのアクセスが必要になると悲観。
  - **uptrails**: 大げさではないか。
  - **yayitswei**: 昔は筋力だけで稼げたが今は違う、と皮肉で応じた。
  - **roughly**: DeepSeek や Kimi などのオープンウェイトモデルが安いことを知れば不安は和らぐ。
- **Aurornis**: 著者が12年取り組んできた問題だ。Anthropic の発表を見たときの心境は想像に余りない。
  - **nilkn**: 自分ならどうするか。少数の数学者だけで検証すれば AI 企業に先を越されるリスクがある。
  - **ChuckMcM**: 数学者が Claude で一部を検証し、その内容が別の誰かの証明要求に使われた可能性を指摘。
  - **mofeien**: 過去100年に人間の試みは何百とあり、手法が異なる証明なら訓練データ漏洩では説明できない。
- **prometheus1992**: 証明が Anthropic に漏れた可能性はないか。
  - **Ungh**: その可能性は低いが、機密情報はオフラインで管理している。
  - **benmusch**: 両者の証明は全く異なるアプローチ。
  - **nostromo**: Anthropic も OpenAI も学習利用をオフにできる。
- **Kotlopou**: 940ページで冒頭の 1.1.1 節が空という点を不安視。一方で Conrad は信頼できる数学者だ。
  - **woopwoop**: Masullo は Conrad の学生で12年取り組んでいる。Conrad、Vakil、Sarnak はみな著名。
  - **rcxdude**: Navier-Stokes の件を見れば、成果を隠したい動機はあり得る。
  - **pastel8739**: 導入部は最後に書くものなので 1.1.1 が空でも自然。
- **rlt**: 数学者は進行中の仕事のハッシュを検証可能なタイムスタンプ付きで公開すべきだ。
  - **cyberclimb**: OpenTimestamps がその用途に使える。
  - **1970-01-01**: 暗号化して公開し、鍵を信頼できる人に預けるのがよい。
  - **bemtevi**: 元研究者として、いまの環境で自分の研究に戻りたいとは思わない。

## 3. [Inkling 2 Mini](https://thinkingmachines.ai/news/inkling-2-mini/)

**Score:** 888 | **Comments:** 163 | [Post](https://news.ycombinator.com/item?id=50581260)

Thinking Machines Lab が公開した、ノート PC で動く小型のオープンウェイトモデル。中間層を各トークンあたり3回回す looped transformer で、少ないトークンで推論品質を高める。100B 未満のオープンモデルの中で DeepSWE v1.1 (48.2%) などで首位を主張。重みは主に NVFP4 で、メモリは約20GB。ループ数を変える研究用の variable-loop モデルも同時公開された。

### Key Discussion Points

- **montroser**: ベンチマークが実環境でも通用するなら驚異的で、looped モデルで Qwen3.8-27B に並ぶのはすごい。
  - **nico**: 今後は小型モデルでこの種の進歩が増える。
  - **LPisGood**: looped モデルとは何か。
  - **ycui7**: すでに nvfp4 なのになぜ量子化が必要なのか。
- **hedgehog**: Ryzen 395 + llama.cpp Vulkan で decode 27 tok/s。未マージの PR に加え、約30%高速化するパッチを共有。
  - **porkloin**: 7900XTX でも同程度（約35%）の改善。
- **lilytweed**: looped を明示し、しかもオープンウェイトなのは驚き。多くのオープンモデルが追随するだろう。
  - **coder543**: Nanbeige4.2-3B など、既存の注目すべきオープンな looped モデルもある。
  - **XenophileJKO**: 端末向けならパラメータ再利用は有力で、消費者向けハードはメモリ制約が主だ。
  - **cubefox**: GPT-6 系は非 looped モデルよりモニタリングしにくいことがモデルカードで示されている。
- **dgacmu**: M1 Pro 32GB で q4 約10 tok/s。CSV ソートのテストは完璧にこなした。
  - **dofm**: Unsloth の extra high でトークンを使いすぎた、と同様の体験を共有。
- **dofm**: looping は推論を改善するが、知識は主にパラメータ数の関数であり事実の保持量は増えない。
  - **solarkraft**: 普段使いの Muse Glimmer と比較。19200トークンを考えた例を取り上げた。

## 4. [Unforced Navier-Stokes Singularity and the Generalized Riemann Hypothesis](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/)

**Score:** 402 | **Comments:** 169 | [Post](https://news.ycombinator.com/item?id=50578358)

Terence Tao のブログ。Alpöge、Buckmaster、Coiculescu が AI を大いに活用して、3次元非圧縮 Euler 方程式の有限時間ブローアップについて人間が読める証明を Lean で形式化したと紹介する。Navier-Stokes の有限時間ブローアップも Lean 形式化つきで生成されたが、きちんとした論文化には作業が必要。GRH は Alpöge による Lean のみの証明で、人間の著者と対話できる点が検証に有利だとしている。

> **関連:** #1「Levent Alpöge claims proof of the Generalized Riemann Hypothesis [pdf]」も参照（同一の GRH 証明主張の解説）
> **関連:** #2「Hurried Announcement: Alessandro Masullo GRH」も参照（同時期の別の GRH 証明案）

### Key Discussion Points

- **softwaredoug**: AI は既存の抽象概念に総当たりの生成と検証を重ねているように見えるが、新理論の構築はどうなのか。
  - **svara**: 近年の進展で、数学の本質は単純な規則の無矛盾な適用から生まれる興味深いパターンの研究だと見えてきた。
  - **Kotlopou**: 「理論構築はまだできないが総当たりが強力」という見方が主流だったが、結論は未確定。
  - **QuesnayJr**: 抽象化が止まる懸念は多いが、実際は誰にも分からない。
- **chunky1994**: Lean Zulip の関連スレッドを共有。
- **actusual**: 興奮と恐怖が同居しており、10年前のキャリアの不確実性を思い出す。
  - **tiagod**: 13年の業界経験があるが、もう十分で、電気工になる勉強を始める。
  - **xpct**: 巨額投資の世界に参加できず取り残された気分。
  - **janejeon**: 神への畏怖のような感覚に揺さぶられている。
- **swingboy**: 1500万行の Lean が通っても、正しいものを検証しているとどう確認するのか。
  - **raincole**: Lean は業務ロジックではなく、記述された命題の証明の正しさを検査する。
  - **zodiac**: Xena Project の記事を紹介。
  - **CGMthrowaway**: 形式仕様の限界についての Wikipedia を紹介。
- **sega_sai**: AI が人間の知能を完全に超えたと感じ、恐ろしい。
  - **nomadpenguin**: 数学の成果には RLVR の寄与が大きく、検証できない分野で同様の成果が出るかは不明。

## 5. [We promoted developers into architects without informing them](https://manidoraisamy.com/developer-to-architect.html)

**Score:** 379 | **Comments:** 219 | [Post](https://news.ycombinator.com/item?id=50579331)

Google Forms アドオンの性能問題を調べると、同僚が AI で作ったログ処理が、メール取得失敗時に何段もの try/catch で退避する設計になっていた。AI は要求をそのまま実行しがちで、開発者が設計判断を担うアーキテクト的な役割を負うようになった、という主張。正解は取得を諦めてタイムスタンプだけ記録するといった単純な設計判断だった。

### Key Discussion Points

- **whycombinetor**: どのSWEの職場でも要件への反論やデータモデル設計は求められてきた。アーキテクトは名目だけのことも多い。
  - **alphazard**: それはうまく機能する組織の普通のやり方。
  - **Fourier864**: 部下を持つまで、それが当たり前でないと気づかなかった。
  - **hinkley**: シニアには自律を期待する。自律とは言われた通りにしないことだ。
- **nixpulvis**: 良いチームは各自が PM やアーキテクトなど複数の役割を担う。
  - **markus_zhang**: 要件を詰める作業が嫌で仕事が嫌いになりかけている人もいる。
- **bikeshaving**: AI を使う仕事の中身は癖の管理だ。コーディングエージェントはログ基盤を作りすぎ、本番に残す。
  - **weitendorf**: 長期のアーキテクチャやセキュリティ判断を LLM に委ねるのは慎重にすべき。
  - **ricardobeat**: 自分で作ったのになぜ Claude のせいにするのか。
  - **hinkley**: OSS レビューでは、リリースノートが長文で AI 製の PR は見分けがつく。
- **pjmlp**: チームに必要なアーキテクトは1人で、オフショアのチームリード昇進と同じ構図だ。
  - **mablopoule**: かつて「アーキテクト」職は評判がよくなかった。
  - **jimbokun**: その間も開発者の求人と報酬は増え続けた。
  - **esseph**: 1人だと誰が設計を相互レビューするのか。
- **uptrails**: 誰も昇進しておらず、LLM の決定に対する責任の受け皿になるだけだ。
  - **t-writescode**: DeadMau5 らは DAW 主体だが音楽家だ。
  - **shimman**: 高給が続くという認識は労働史を誤っており、団結しなければ終わる。

## 6. [NINLIVE: The Nine Inch Nails live archive](https://ninlive.com/)

**Score:** 211 | **Comments:** 56 | [Post](https://news.ycombinator.com/item?id=50583274)

ファン運営（バンド非公認）の Nine Inch Nails ライブ音源アーカイブ。1988〜2026年のライブ録音をストリーミング再生でき、Discord ログインでお気に入り保存ができる。運営者はチケット半券やセットリストのスキャンも追加中で、写真提供者も募集している。

### Key Discussion Points

- **alsetmusic**: Reznor は観客に質の高い体験を届けようとしており、音質もマルチメディア演出も優れている。
- **jonhohle**: Fragility 2.0 や NIN + Soundgarden など複数の公演に参加。2000年の高さ20フィートの可動 LED スクリーンは衝撃的だった。
  - **ilikepi**: 自分が見た公演を列挙し、Fragility は見逃したが Lights In The Sky は素晴らしかった。
- **olivierestsage**: NIN が時の試練に耐えるとは思わなかったが、Reznor（と Ross）の作品の質は上がり続けている。
  - **tombert**: The Downward Spiral と The Fragile は傑作だが、禁酒後は質が落ちたと感じる。
  - **jonhohle**: Downward Spiral と The Fragile は今も新鮮。
- **reenorap**: 1995年のコンサート映像を見つけてダウンロードし、記憶が驚くほど正確だった。
- **cheschire**: Spotify の月間リスナーが少ないことに驚いた。
  - **diabllicseagull**: CD やレコードで聴いており、ストリームは実態を表さない。
  - **leviathant**: NAS に FLAC で保存している人も多い。
  - **uncivilized**: Coachella の公演で若い世代に知られ、数字は伸びるだろう。

## 7. [Valkey kills the skiplist, cuts sorted set overhead by up to 43%](https://valkey.io/blog/from-skiplist-to-b+tree/)

**Score:** 103 | **Comments:** 37 | [Post](https://news.ycombinator.com/item?id=50534387)

Valkey 9.2 では sorted set のスキップリストを、fbtree という高ファンアウトの B+ 木に置き換える。スキップリストは1要素ごとに別割り当てで、ノードあたり約37Bのポインタ等のオーバーヘッドがあった。fbtree は SIMD 検索や連結リーフなどを備え、500万メンバーのテストでメンバーあたりのメモリを36〜43%削減した。

### Key Discussion Points

- **hinkley**: スキップリストはキャッシュミスの負債で、性能設計は理論と実践が乖離していた。
- **tyre**: 最終 PR の説明にレビュー順序や設計判断、対象外の範囲が書かれていて秀逸で、LLM が得意な仕事だ。
- **rsalus**: CPQ には MultiQueue に移行済みで、スキップリストの用途は少ない。
- **dreamcompiler**: スキップリストに後方ポインタは不要で、「finger」で逆方向にもほぼ同じ速さで走査できる。
- **WD-42**: 記事は AI の産物のようで読むのが辛い。
- **snissn**: ベンチマークコードの公開を尋ねている。

## 8. [Sir Brian May adds new dimension to Hera asteroid](https://www.esa.int/articles/about-us/directorates/operations/space-safety/hera/sir-brian-may-adds-new-dimension-to-hera-asteroid)

**Score:** 83 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=50583768)

ESA のページ本文は取得できなかったため、タイトルとコメントに基づく要約。Queen のギタリストで天体物理学者の Brian May が Hera 科学チームの一員として、小惑星の立体視（ステレオ）画像に貢献したという記事とみられる。

### Key Discussion Points

- **oersted**: Hera の科学チームの一員で天体物理学者、かつ Queen のギタリストという多才ぶりに感嘆。
- **ingvay7**: May が設計した立体視ビューア OWL を紹介。
- **alterom**: Queen と立体写真の両方のファンで、XR グラスで普及してほしい。
- **whycombinetor**: Nintendo 3DS や Looking Glass Go には未開拓の可能性がある。
- **milleramp**: 近接スキャンから Gaussian splat の 3D モデルを作れる。
- **rylando**: 交差法でどの程度離して見るのか分からず、見えない。

## 9. [Clojure will affect the way you think about programming (2017)](https://eli.thegreenplace.net/2017/clojure-the-perfect-language-to-expand-your-brain/)

**Score:** 43 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=50585376)

Eli Bendersky による2017年の記事。「次に学ぶ言語」として Clojure を勧め、Lisp 系で動的型付けの言語であり、多様なパラダイムを一貫して統合しているので、視野を広げるのに最適だと説明する。

### Key Discussion Points

- **ajasmin**: Clojure の思慮深いアプローチが好きで、AI 疲れの中で Hammock Time が必要。
- **TN1ck**: 大学時代に 4clojure を解き続け、プログラミング能力が大きく伸びた。
- **darksaints**: 最初期に学んだ言語で、不変性やデータフロー志向が身に付いた。一方で動的型への強い嫌悪も残った。
- **zergrush**: LLM 時代には内部の仕組みを知る必要はなく、記事は時代遅れ。
- **stephbook**: Clojurist は自分たちの言語の先進性を過大評価していないか。
- **Jtsummers**: 当時の議論（216コメント）へのリンクを共有。

## 10. [ClawDOS – An AI coding agent for DOS](http://ricapar.net/ClawDOS/)

**Score:** 10 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50586292)

IBM PC XT（8088 4.77MHz、RAM 640K、CGA）で動く DOS 用の AI コーディングエージェント。作者は幼少期の最初のパソコンへの思い入れから、新旧技術の交差として、AI コーディングエージェント自身を使って作った。

### Key Discussion Points

- **sans_souse**: 見た目が気に入ったと好意的に反応。

## Trends

- **AI と数学**: 上位2件と #4 は GRH 証明の主張に関するもので、Alpöge の AI 生成 Lean 証明と、Masullo の人間のみの証明案が同時に出た。Tao のブログは Euler / Navier-Stokes の有限時間ブローアップも併せて紹介している。議論は検証の信頼性（Lean の仕様と実装）、数学者の将来、実世界への波及に及んだ。
- **ローカル LLM**: Inkling 2 Mini は looped transformer と NVFP4 により約20GB でノート PC で動き、コミュニティでは推論エンジン対応や速度の報告が活発だった。
- **AI と開発者の役割**: 開発者のアーキテクト化論や、コメントに見られる職業不安など、AI 時代の働き方への関心が高い。ClawDOS は AI 製の古典 PC 向けエージェントという遊び心のある事例。
- **低レベル設計と趣味**: Valkey の B+ 木化はキャッシュ効率重視の設計、NINLIVE や Brian May の記事は音楽・立体視といった趣味の話題だった。
