---
title: "Hacker News トップ10 ダイジェスト（2026年5月12日）"
date: "2026-05-12T14:45"
category: "summary"
summary: "TanStack NPMサプライチェーン攻撃、AIとPythonの関係、EU規制動向など多岐にわたるトップ10まとめ"
tags: ["hackernews", "security", "ai", "web", "policy"]
---

## 1. [Postmortem: TanStack NPM supply-chain compromise](https://tanstack.com/blog/npm-supply-chain-compromise-postmortem)

**Score:** 946 | **Comments:** 397 | [Post](https://news.ycombinator.com/item?id=48100706)

TanStackのNPMパッケージがサプライチェーン攻撃を受けた事後報告。攻撃者はGitHub Actionsのキャッシュ（pnpmストア）を汚染し、CIパイプライン経由でOIDCトークンを窃取、悪意あるパッケージを公開した。さらにペイロードはホームディレクトリ以下を`rm -rf`するデッドマンズスイッチをsystemdサービスとして仕込んでおり、`@mistralai/mistralai` npmパッケージも同様の被害を受けた。

### Key Discussion Points

- **cube00**: ペイロードが `~/.local/bin/gh-token-monitor.sh` にデッドマンズスイッチを設置し、トークンが失効すると `rm -rf ~/.*` を実行することが判明。トークン失効時の対応は単純なrevoke以上の注意が必要。
  - **Gigachad**: マルウェアがインストールされた時点でシステム全体のワイプが現実的な対処法と指摘。
  - **k33P1Tr3aL**: MicrosoftがWAFでこのポーリングを検知してトークンサイクルを行うべきと提案。
- **jonchurch_**: Trusted Publishingは単独では不十分で、GitHub外の第二認証要素（YubiKey等）なしにCI経由での公開が可能になるリスクがある。リポジトリ管理者トークンを奪われれば悪意あるパッケージを公開できてしまう。
  - **captn3m0**: Astralブログが手動承認のリリースゲートをTrusted Publishingと組み合わせて使う方法を紹介しているが、NPM/PyPI/Rubygemsの公式ドキュメントにはこの手法が記載されていない。
  - **donmcronald**: クラウドによるクレデンシャル管理への依存は設計ミスで、YubiKeyのようなタッチ認証が望ましい。
- **chrisweekly**: postinstallスクリプトは危険。フォークのコミットがGitHubの共有オブジェクトストレージ経由で本物リポジトリと区別できないURLで参照できてしまうGitHubの設計も問題。
  - **mort96**: postinstallスクリプトを廃止してもインストール後すぐに実行するケースが大半で、攻撃ベクタ削減効果は限定的。
  - **jonchurch_**: 今回はpnpmのGitHub Actionsキャッシュ汚染が攻撃の中心で、pull_request_targetジョブが本体リポジトリのキャッシュを汚染するフローが悪用された。
- **Ciantic**: CIパイプラインが全てYAMLで構成されていることが問題の根本で、Bashスクリプトのほうが動作を直感的に理解・デバッグできると主張。
  - **daemonologist**: DevOps全般において「知らないと魔法に見えるYAMLコンフィグ」問題があると同意。
  - **SamuelAdams**: Bashスクリプトはローカルで実行・検証できる点でGitHub Actions（毎回コミット・プッシュが必要）より開発者体験が優れている。
- **varunsharma07**: `@mistralai/mistralai` npmパッケージも今回のワームで侵害され、npmレジストリから削除済みと報告。

---

## 2. [If AI writes your code, why use Python?](https://medium.com/@NMitchem/if-ai-writes-your-code-why-use-python-bf8c4ba1a055)

**Score:** 684 | **Comments:** 700 | [Post](https://news.ycombinator.com/item?id=48100433)

AIがコードを生成する時代において「なぜPythonを使い続けるのか」を問う記事。Anthropicの研究者Nicolas Carliniが16並列のClaudeエージェントでRust製Cコンパイラをゼロショットで構築した事例を引きながら、AIによるコーディングではPython以外の選択肢も現実的になりつつあると論じる（ただしコメントでは「production-gradeではなくproof-of-concept」と批判も）。

### Key Discussion Points

- **bryanrasmussen**: Pythonの強みは「大量の学習データ」「可読性の高さ」「自身がよく知っている言語」の3点。AIを使う場合も、LLMが最も効率よく動け、人間がレビューしやすい言語を選ぶべき。
  - **simonask**: Pythonは局所的には読みやすいが、大規模システムの設計・推論には語彙が不足しがちと指摘。
  - **bfrog**: 型がないため1000行超になると自分には非常に読みにくく、LLMの助けが必要なほどと逆意見。
- **pshirshov**: 静的型付けが厳格な言語（RustやScala）ほどエージェントの失敗が早期に検出でき、最終的な品質と納期が良くなる。形式検証（TLA+/Lean/Coq）も有効。
  - **weberer**: Pythonでも `ruff`, `black`, `mypy`, `pytest` のpre-commitフックを設定すれば9割の問題は解決できると反論。
  - **tdeck**: Pythonの強力なエコシステム（ライブラリの豊富さ）も選択理由の大きな要素。
- **_boffin_**: 最大の理由はトレーニングデータの量。BrainFuck的なニッチ言語でもAIは動くが精度が落ちる。
  - **gertlabs**: データによるとLLMはアジェンティックコーディングではPythonより他の主要言語の方が実は高精度と反論。
  - **dillon**: Perlで試したところClaudeが非常に優秀だった実体験を共有。変化が少なく学習データが豊富な言語は意外と強い。
- **fbrncci**: 10年以上Pythonを書いてきたので、AIが書くコードも瞬時に問題を嗅ぎ取れる。RustやGoでAI生成コードをそのままマージするのは「vibecoding」になってしまう。
  - **_waqas_ali_**: Rustでもアーキテクチャ判断力・コードスメル感覚は他言語経験から移転できると体験談を紹介。
  - **bambax**: 知識のある言語に留まるのが安全だが、Cは意外とWindowsの幅広いバージョンサポートが必要な小ツールに便利と補足。
- **cataflam**: 記事が「Rustで本番級Cコンパイラを書いた」と誇張しており、実際はproof-of-conceptと指摘。こういった不正確な記述で記事への信頼を失ったと批判。

---

## 3. [Screenshots of Old Desktop OSes](http://www.typewritten.org/Media/)

**Score:** 429 | **Comments:** 192 | [Post](https://news.ycombinator.com/item?id=48104428)

古いデスクトップOSのスクリーンショットをまとめたアーカイブサイト。Windows 3.1、OS/2、NeXTStep、初期Macintoshなど1980〜90年代のGUIを豊富な画像で振り返ることができる。単なる懐古趣味を超え、当時のUXデザイン思想や技術的制約について活発な議論を呼んでいる。

### Key Discussion Points

- **bronlund**: 現代UIでスクロールバーの場所を探すだけで一苦労。当時のOSは未知のシステムをユーザーに教えるUX研究に基づいて設計されていたが、現代は「すでに知っている」デザイナーや経営者の好みに従っている。
  - **pjc50**: 当時は「新しいOSを教える」ためのUX研究に基づく設計。その後はスティーブ・ジョブズレベルでなければ「見た目をきれいにするためにユーザビリティを削る」失敗パターンに陥ると指摘。
  - **BoppreH**: 失ったものがある一方、タブ・未保存変更の自動復元・ファジー検索メニュー（Ctrl+P）・パッケージマネージャーなど現代が獲得したものも多いとバランスを取る。
- **zhxiaoliang**: AOLへの初ログイン、Macのマウスチュートリアルで踊るカップル、OS/2のボタンの陰影に魅了された記憶など、当時の「魔法のような日々」を回顧。
- **delta_p_delta_x**: Windows 11にWindows 2000モードが欲しい。グレーでボックス型のUIを保ちながら、DirectStorage・D3D12・デバイス非依存ピクセルなど現代技術を使いたい。
  - **vbezhenar**: それはLinuxで既に実現できていると指摘。Windowsはもはや救いようがないと辛辣なコメント。
  - **zozbot234**: ReactOSやLinux+Wineを試してみてはと提案。
- **jchw**: 深さよりも幅のある `toastytech.com/guis/` も紹介（多数のシステムのGUIスクリーンショット集）。
  - **lproven**: GUIdebook（guidebookgallery.org）も忘れずにと追加リソースを紹介。
  - **egoisticalgoat**: xkcd 1053「Lucky 10,000」を引用し、知識を共有することの大切さを称える。
- **vessenes**: 1990年代初頭からのLinuxデスクトップやIRIX（SGI）が欠けている点を指摘。NeXTStepが当時のWindowsと「感触」がどれほど違ったかは解像度・リフレッシュレート・モニター品質なども含めた総合体験の差。

---

## 4. [They Live (1988) inspired Adblocker](https://github.com/davmlaw/they_live_adblocker)

**Score:** 413 | **Comments:** 137 | [Post](https://news.ycombinator.com/item?id=48102700)

1988年のSF映画『ゼイ・ライブ』にインスパイアされた広告ブロッカー。uBlock Origin Liteのフォークで、広告ブロック後にそのスペースを「OBEY」「CONSUME」「SLEEP」などの映画のスローガンが入った白いタイルで置き換える。Chromiumベースのブラウザでunpacked extensionとしてインストール可能（フィルタリングモードを「Optimal」以上に設定する必要あり）。

### Key Discussion Points

- **AdmiralAsshat**: タイトルを「広告ブロック全般のコンセプト自体を『ゼイ・ライブ』が生んだ」と誤読してしまったと告白。実は同映画が初期Mozillaロゴにインスピレーションを与えた歴史的事実もあると紹介。
  - **dnpls**: リンクが不正な改変を受けていないか確認するコメント。
- **bloke_zero**: 映画が放映直後にケーブルで観て衝撃を受けた思い出を語り、10回でも投票したいと表現。
  - **nephihaha**: 現代では「怯えて子孫を増やすな」というメッセージに変化しているとシニカルなコメント。
- **aruametello**: uBlock Origin本体にイースターエッグとしてマージしてもらえないかと提案。
  - **shevy-java**: 映画のファンでも広告スペースに別コンテンツが表示されるのは嫌だという意見。KDEの寄付ウィジェット強制表示の問題を引き合いに、ユーザーの邪魔をしない設計を訴える。
- **riedel**: スティーブ・マン（EyeTap AR）の広告を視覚的に置き換えるウェアラブル実験を想起させると関連話題を紹介。
  - **walrus01**: スティーブ・マンは現在、汚染された水路の修復活動に取り組んでいると近況を補足。
- **hahasound**: 製造同意（Manufacturing Consent）の研究として広告を逆手に取る皮肉なコンセプトとコメント。

---

## 5. [Learning Software Architecture](https://matklad.github.io/2026/05/12/software-architecture.html)

**Score:** 308 | **Comments:** 61 | [Post](https://news.ycombinator.com/item?id=48106024)

IntelliJ RustやRust-analyzerの開発者がソフトウェアアーキテクチャの学び方を解説した記事。アーキテクチャは座学より実践から学ぶものであり、コンウェイの法則（組織構造がシステム構造に反映される）の重要性を論じる。Rust-analyzerでは厳密さが求められるコアと気軽に貢献できるペリフェリを意図的に分けることで、異なるスキルレベルの貢献者を両立させている。

### Key Discussion Points

- **CSMastermind**: 良いアーキテクチャの原則を箇条書きでまとめる：「単一のアイデアが全体に貫かれること」「驚きを最小化すること」「データモデルはコードより長生きする」「テストが難しければ設計が悪い」「命名に最も時間をかけるべき」など実践的な要点を列挙。
  - **laszlojamf**: 「データ移行は避けられない」「設計はコストを念頭に置かなければ後で厳しい選択を迫られる」などを追加。
  - **RobRivera**: 1年以上かけてソロで作るゲームエンジンでも同様の原則が適用できると実体験を共有。
- **woodydesign**: 孔子（実践と内省による知の蓄積）と老子（「道を追えば毎日何かを削ぎ落とす」）の哲学を引用。ソフトウェアアーキテクチャにはConfucian的な実践的積み重ねとTaoist的な余分な抽象の削除の両方が必要と論じる。
  - **faangguyindia**: Ruby on Railsで開始してGoに移行、Hetznerのコモディティサーバーでスケールしている実体験を紹介。
  - **jerf**: アーキテクチャは「教えられる」ものではなく「体験の速度を上げる」ことしかできない。「ヘキサゴナルアーキテクチャ」や「クリーンアーキテクチャ」を全状況に当てはめようとする人物を「最も危険な存在」と評す（長文の良質コメント）。
- **mpweiher**: ソフトウェアアーキテクチャ固有の文献（Shaw/Garlan）やREST・UNIXパイプの成功理由を分析することを推薦。手続き呼び出しが「アセンブリ言語」なら高水準言語にあたるものをコネクタのメタクラスで実現する自身の研究も紹介。
  - **skydhash**: ラムダ計算・Lisp・APLなどの言語が既にその「高水準言語」的コンセプトを体現しているのではと問いかけ。
- **getnormality**: コンウェイの法則を過度に強調する傾向を批判。「営業とエンジニアが別部門なのはそれが異なる仕事だから」であり、社会構造が技術を決めるという逆因果関係も成り立つと主張。
- **ah1508**: 「きれいなコード」という曖昧な言葉より、「保守性・性能・テスト可能性・可観測性・安全性・新規開発者への可読性」などの明確な基準を定義することが重要と提案。

---

## 6. [EU to crack down on TikTok, Instagram's 'addictive design' targeting kids](https://www.cnbc.com/2026/05/12/tiktok-instagram-social-media-addictive-eu-crack-down.html)

**Score:** 264 | **Comments:** 220 | [Post](https://news.ycombinator.com/item?id=48106534)

EUがTikTokとInstagramの子ども向け「依存性設計」（無限スクロール・アルゴリズム推薦など）を規制する方針を発表。未成年者への影響を特に問題視しているが、HNでは「なぜ18歳になった途端に合法になるのか」という批判や、成人も含めた規制の議論が展開されている。

### Key Discussion Points

- **jrflo**: ソーシャルメディアのアルゴリズムは「現代のタバコ」と評される。SafariのアルゴリズムブロッカーをSafariのために自作した体験を共有し、EU規制を子どもに限らず全年齢に拡大すべきと提唱。
  - **Aurornis**: このコメント自体が有料アプリの宣伝であり、財務的利害関係を開示していない点に注意喚起。無料の代替ツールも存在すると補足。
  - **wackget**: 「現代のタバコ」の比喩が完璧と称賛。将来、ソーシャルメディアの使用を喫煙のように振り返る日が来ることを期待。
- **conception**: アルゴリズムでコンテンツを提示するプラットフォームは「中立的な通信事業者」でなく、提示したコンテンツに対して法的責任を負うべきと主張。
  - **Aurornis**: HN自体もアルゴリズムでコンテンツを提示しており、その論理ではHNも消滅することになると指摘。個人化推薦アルゴリズムに焦点を当てるべきと修正提案。
  - **schnitzelstoat**: 「ユーザーが決める」と言っても数百万動画から最初に何を見せるかという問題は単純ではなく、検索結果のランキングも一種のアルゴリズムと反論。
- **anzenarkin**: 成人にも同様の問題がある。依存性の高いアプリはよく設計されており、ブロッカーは厳しすぎると継続使用されず、甘すぎると無視されるというバランスが課題でiOSブロッカーを自作したと紹介。
  - **criddell**: 中国では学校試験期間中、夜間のSNSが強制オフになる政策があり、同様の規制を一般にも適用すべきかもしれないと提案。
  - **butlike**: トースト通知とバッジが最大の設計上の失敗で、連絡の通知はボイスメール（スパム法の適用あり）のみに限定する世界を理想とする。
- **Pesthuf**: 18歳になった途端にアルゴリズムが問題でなくなる理由はない。規制するなら年齢制限ではなく全年齢に禁止すべきと主張。
  - **Mashimo**: 記事では「子どもに的を絞った場合」が問題とされており、年齢による使用制限の有無は実際には明確でないと補足。
  - **palata**: タバコと同様、子どもへの規制は社会的コンセンサスが取りやすく、成人への規制は合意が難しいという現実的な理由があると解説。
- **FinnKuhn**: 無限スクロールの制限は良いことで、HNがフィードではなくページネーションを採用していることを高く評価。
  - **nanapipirara**: HNのタイトルがシンプルで誇張がないガイドラインも素晴らしく、従来メディアにも広まってほしいと賛同。
  - **ekjhgkejhgk**: 無限スクロールは実装の詳細に過ぎず、それを禁止しても他の依存性設計が残るため根本解決にならないと批判。

---

## 7. [Rendering the Sky, Sunsets, and Planets](https://blog.maximeheckel.com/posts/on-rendering-the-sky-sunsets-and-planets/)

**Score:** 74 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=48107997)

WebGLシェーダーで大気散乱をリアルタイムレンダリングする技術記事。NASAのスペースシャトル写真にインスパイアされ、Rayleigh散乱・Mie散乱・オゾン吸収を実装して朝焼け・夕焼け・惑星大気を表現。最終的にSebastian Hillaireの手法に倣いLUT（ルックアップテーブル）で高コストな散乱計算を事前計算することで、ブラウザでも動作するパフォーマンスを実現している。

### Key Discussion Points

- **dinfinity**: SpaceEngineも大気レンダリングに力を入れており、強くお勧めと関連プロジェクトを紹介。
- **sdoering**: 内容の5%しか理解できなかったが圧倒されたと率直な感想。
- **jeremyscanvic**: PerezやPreethamのスカイモデルとの関係性に興味を示し、自身の実装プロジェクト（SkySim）を紹介。
- **mirekrusin**: 比較用に「平面地球バージョン」があれば面白いとユーモアを交えたコメント。

---

## 8. [US inflation jumps to 3.8% as energy costs surge from Iran war](https://www.bbc.com/news/articles/c202pgxx89lo)

**Score:** 125 | **Comments:** 83 | [Post](https://news.ycombinator.com/item?id=48108313)

イランとの戦争によるエネルギーコスト急騰を背景に米国のインフレ率が3.8%に上昇したと報じるBBC記事。コメント欄では公式指標の信頼性や実感との乖離、賃金低下との組み合わせについて活発な議論が展開されている。

### Key Discussion Points

- **khriss**: 米国がこの戦争で得たものは皆無と主張。ホルムズ海峡の実効支配をイランに譲渡、イラン強硬派の権力強化、国内インフレ、防衛産業基盤の脆弱性露呈（中国との戦争では太刀打ちできないと懸念）、JCPOAより悪い条件での交渉という結果だけが残ったとし、米国版スエズ危機（帝国の終わりの始まり）と評する。
- **rdudek**: 報じられていない事実として賃金が0.5%低下していることを指摘。インフレ率のみが取り上げられている点に問題提起。
- **dwa3592**: 同じ店でのミルク価格が3ヶ月で$2.97→$3.40（約15%上昇）と、公式数値（3.8%）との大きな乖離を実体験で指摘。
- **philipnee**: 食品・エネルギーを除いたコアインフレ指標への疑問を呈し、実際はさらに高い可能性を示唆。
- **hendo3000**: Goodhartの法則を引用し、測定対象になった指標は指標としての意味を失うと官製インフレ統計への懐疑を表明。

---

## 9. [Profiling.sampling – Statistical Profiler](https://docs.python.org/3.15/library/profiling.sampling.html)

**Score:** 37 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=48082948)

Python 3.15の新機能「Tachyon」として追加された統計的プロファイラのドキュメント。従来のpy-spyのような外部ツールが標準ライブラリに取り込まれた形で、プロセス外から定期的にコールスタックをサンプリングするため本番環境での使用も可能。フレームグラフ生成やPIDアタッチ・ライブモニタリングもサポート。

### Key Discussion Points

- **wongarsu**: `profiling.tracing` がコードベースに組み込んで出荷できる点が魅力で、`profiling.sampling` は別プロセスとして動作するため同等の統合性がない点を惜しむ。
- **thomasmg**: Pythonはパフォーマンスクリティカルな用途にはJavaやGoより遅いという一般認識への疑問を提起。
- **modeless**: py-spyとの比較を求めるコメント。
- **krystalgamer**: サードパーティツールが標準ライブラリに入るのは良いことと歓迎。

---

## 10. [Chasing Chicago's movable bridges (2014)](https://aresluna.org/seesaws-for-giants/)

**Score:** 34 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=48080111)

2011年のシカゴで27基の可動橋が順番に開閉する様子を追いかけた写真エッセイ（2014年公開）。数千トンの橋体を釣り合いおもりで均衡させるバスキュール機構の優雅なエンジニアリングを紹介。筆者は橋の内部に立って開閉を体験したり、タッチスクリーンで操作する管制塔を訪問したりと、普段は見られない視点からシカゴの土木遺産を記録している。

### Key Discussion Points

- **codechicago277**: マコーミックブリッジハウス博物館（約$5）では橋の内部を見学できるとお勧め情報を追加。
- **nkrisc**: コングレス高速道路の橋が開くのをオフィスの窓から眺めていた記憶を語り、北ゴース島の廃線橋のコンクリートカウンターウェイトが子供の頃から気になっていたとシカゴの橋への愛着を語る。
- **gwbas1c**: なぜ帆船は毎年1回しか移動しないのか（冬季のドック整備のため？）と疑問を投げかけ。

---

## Trends

今回のトップ10から浮かび上がる主なテーマ：

1. **ソフトウェアサプライチェーンセキュリティの危機**: TanStack事件はCIパイプラインのキャッシュ汚染という新たな攻撃ベクタを示し、Trusted PublishingやOIDCトークンだけでは不十分であることを証明した。npm/PyPI/Rubygemsの全ユーザーにとって他人事ではない。

2. **AIコーディングと言語選択の再定義**: AIがコードを書く時代、言語の選択基準が「自分が書ける言語」から「AIが得意な言語」「型システムで早期検出できる言語」へと移行しつつある。PythonのトレーニングデータとしてのアドバンテージとRust/Scalaの静的型付けによる品質向上の議論は今後も続く。

3. **プラットフォーム規制の潮流**: EUによるソーシャルメディアのアルゴリズム設計規制は、子どもへの保護という合意しやすい論点から始まり、成人を含む全体的な「依存性設計」の禁止へと議論が拡大している。

4. **インフレと地政学リスク**: イランとの戦争がエネルギーコストを通じて米国内のインフレを押し上げている構図。公式指標への不信感と実生活での価格上昇実感の乖離が大きな関心を集めている。

5. **懐古とUI退化**: 旧OSのスクリーンショットへの関心は単なるノスタルジーではなく、現代UIがユーザビリティを犠牲にして「見た目の洗練」を追求してきた反動。ページネーション（HN）や明示的なUIコントロールへの回帰願望が強まっている。

6. **Python標準ライブラリの成熟**: 3.15でのTachyon（統計プロファイラ）導入のように、サードパーティエコシステムのベストプラクティスが徐々に標準化されている流れ。

7. **技術の詩的な側面**: 大気散乱レンダリングやシカゴの可動橋のような「美しいエンジニアリング」への純粋な感動も、テックコミュニティにとって重要な文化的基盤であり続けている。
