---
title: "Hacker News トップ10 サマリー（2026年6月18日）"
date: "2026-06-18T04:54"
category: "summary"
summary: "HN トップ10：Lore（Epic製VCS OSS公開・1054pt）、DeepSeek規制見送り、Midjourney Medical発表など"
tags: ["hackernews", "summary", "ai", "gamedev", "vcs", "geopolitics"]
---

## 1. [Lore – Open source version control system designed for scalability](https://lore.org/)

**Score:** 1054 | **Comments:** 560 | [Post](https://news.ycombinator.com/item?id=48571081)

Epic Gamesが開発したバージョン管理システム「Lore」がオープンソース化された。以前は「Unreal Revision Control」としてUnreal Editor for Fortnite（UEFN）に組み込まれていたもので、ゲーム開発における大規模バイナリアセットの管理に特化した中央集権型・コンテンツアドレス型VCS。Rustで実装されており、Perforceの代替を目指す。

### Key Discussion Points

- **throw2ih020**: これはGitの競合ではなく、Perforceの競合。Gitはテクスチャや3Dモデルなどバイナリファイルを扱う Game devには不向きで、Perforceが業界標準。しかし設定に専任エンジニアが必要なほど複雑な製品。
  - **LugosFergus**: Gitはリポジトリへのアクセス制御が粗く、NDA付き独自コードの特定ユーザー制限がPerforceでは簡単にできるが Gitでは難しい。
  - **bc1000003**: Perforceは大規模チームの標準だが限界もある。Gitの柔軟性と大規模アセット管理を組み合わせた OSS の登場は歓迎。
- **niek_pas**: Gitのプッシュ出力は「delta compression」「pack-reused」など、一般ユーザーには意味不明な情報が多い。LoreはよりクリーンなUI（「Pushed 1 fragment(s)」など）を提供している。
  - **js2**: gitのオブジェクト・パック・デルタ圧縮の仕組みを詳細に解説。オープンソースプロジェクトなので全情報を表示しているだけ。
- **tlahtinen**: Unreal Engine開発において非常に有望。Perforceはgitよりブランチ操作が複雑なのに業界標準だったのは、Epicが内部でP4を使いUEサポートが充実していたから。LoreはUEで最高レベルのサポートを得る可能性が高い。
  - **jayd16**: UE向けGitプラグインを改善する取り組みをしているが、今日の発表でマージされる見込みはさらに低くなった。
- **akurilin**: Perforce Cloudは手間がかかった（Azure登録が必要など）。競合の登場は歓迎。ゲーム開発でファイルをマージしない理由についてのブログ記事を紹介。
  - **dijit**: Perforceは高価でツール連携も貧弱。コードレビューツールやSSO連携なども不十分で、プロプライエタリな製品に囚われている。
- **ksec**: 実は新しいものではなく、UEFNで使われていた既存ツールをOSS化したもの。RustでありC++やVerseではないことに驚き。
  - **wrwills**: RustなのはSimon Peyton Jones・Lennart Augustsson（Haskell著名人）がEpicに在籍し、関数型プログラミング機能を持つ言語への内部プッシュがあったからでは。

---

## 2. [US holds off blacklisting DeepSeek, more than 100 firms deemed security risks](https://www.reuters.com/world/china/us-holds-off-blacklisting-chinas-deepseek-more-than-100-firms-deemed-security-2026-06-17/)

**Score:** 408 | **Comments:** 455 | [Post](https://news.ycombinator.com/item?id=48565498)

米国はDeepSeekのエンティティリスト入りを見送る一方、Z.aiを含む100社以上の中国企業をセキュリティリスクとして認定した。Z.aiはすでに2025年1月からエンティティリストに記載されており、直近では最先端に近いGLM 5.2モデルをリリースしたばかり。エンティティリストは米企業による製品販売を制限するが、中国AI各社は既に輸出制限済みのnVidiaGPU以外には米国製品への依存度が低く実質的な影響は限定的とみられる。

### Key Discussion Points

- **apatheticonion**: 毎日DeepSeekを使用（VSCode経由）。1ヶ月で2ドルしか使わず100M以上のトークンを消費、生産性が2倍に。オーストラリア人としてはデータプライバシーよりも価格対生産性を優先する。
  - **hodgehog11**: DeepSeek は現在最高のコスト対生産性比。複雑なリサーチではFableが飛び抜けて優秀。
  - **grafmax**: 米中のデータリスクは偽の二項対立。オープンウェイトモデルをセルフホストすればプライバシーも確保できる。
- **glerk**: 「アメリカのグレートファイアウォール」と批判。こういった制限の施行方法が不明確で、意思決定者への強い怒りを表明。
  - **usernomdeguerre**: Cloudflareが対応するだろう。
  - **matheusmoreira**: GPU輸出禁止は中国独自GPUの開発加速につながるだけ。
- **em500**: エンティティリスト記載は「販売禁止」であって「購入禁止」ではない。重要なのはCXMT（RAM製造）への影響で、AIよりも半導体製造への制限の方が実効性が高い。
  - **torginus**: 中国はローカルリセラー経由でGPUを調達できるはずで、どう執行するのか。
  - **pranavj**: ウェイトがHugging Faceに上がった時点でエンティティリストは無意味。チップ輸出制限は効く、ウェイト制限はほぼ効かない。
- **ddxv**: 米国が中国化している。企業の国有化推進、外国競合のバン……「恐れるものに自ら変わっていく」と批判。
  - **ranyume**: 中国共産党は国家権力をテック CEOに委ねることはしない。
  - **deaux**: 中国のいいところは一つも真似せず、悪いところだけ真似している、と皮肉。
- **noisy_boy**: 個人プロジェクトにDeepSeekを多用。10ドルのクレジットがまだ残っている。Sonnetに近い品質で不満なし。

---

## 3. [Midjourney Medical](https://www.midjourney.com/medical/blogpost)

**Score:** 328 | **Comments:** 260 | [Post](https://news.ycombinator.com/item?id=48579650)

Midjourneyが医療イメージング分野への進出を発表。AIで強化した超音波撮影技術を用いて、CTスキャン相当の診断を低被曝・低コストで実現することを目指す。2025年に取得したバタフライネットワーク製チップの独占ライセンスを基盤とし、月次の全身スキャンを10億人規模で提供できるレベルのコスト削減を構想している。なお公式ブログはアクセス不可のため、コメントより情報を補完した。

### Key Discussion Points

- **tgsovlerkhgsel**: 大規模データ収集とMLを組み合わせれば医療診断は変革できる可能性がある。呼気・血液・尿をGCMS（ガスクロマトグラフィー質量分析）でスキャンしMLにかけるだけで多くの疾患を診断できる未来があるかもしれない。
  - **arcticbull**: ベイズ定理の問題を忘れてはならない。無症状の低発症率集団をスクリーニングすると陽性の大部分が偽陽性になる。精度への言及がない点が気になる。
  - **CJefferson**: 中国の病院では15分で30項目の血液検査結果をスマートフォンで受け取れる体験をした。この方向性は正しい。
- **unholiness**: 興味深いが実現可能性の証拠がない。ハイプ動画に過ぎず、バタフライチップの独占ライセンス取得（2025年）は有望な前提だが、実証はまだ何もない。
  - **cornstalks**: CTスキャンの被曝低減が「noble cause」という前提だが、Linear No Threshold仮説はすでに否定されている。
  - **carlosdp**: それは仮想の機器のレンダリングではなく、実際に動作する機器の映像だ。
- **mNovak**: MRIとフェーズドアレイビームフォーミングの経験者として、大きな技術的懸念点はない。多くのHNハードウェア記事とは異なり、即座に赤旗が立たない。
- **Aurornis**: 安価な全身スキャンは魅力的だが、過去の研究では予防的全身スキャンが不必要な処置増加につながることが示されている。曖昧な所見への不安から、より多くの生検・手術が行われることになりかねない。
  - **Veedrac**: 誤診率を改善すべきであり、スクリーニングを避けるべきではない。適切なデータ制限下でのリスク推定能力は向上し続けている。
  - **mcphage**: 安価・迅速なスキャンで経時的なモニタリングができれば、即時介入の減少につながるかもしれない。
- **maz1b** (医師・フルスタックエンジニア): 最初はエイプリルフールかと思った。MRIを置き換えることはないが、標準的な撮影と高精細モダリティの中間データとして価値が出る可能性はある。

---

## 4. [Local Qwen isn't a worse Opus, it's a different tool](https://blog.alexellis.io/local-ai-is-not-opus/)

**Score:** 26 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=48580209)

Alex Ellisが「ローカルQwenはOpusの劣化版ではなく別のツールだ」と主張するブログ記事。Qwen 3.6 27BはSWE-Bench Verifiedで77.2%とOpusの88.6%に劣るが、ベンチマークはPythonコード偏重でEllis氏のGoによる分散システム開発には反映されない。長期・複雑なタスクには不向きで無人実行は危険だが、プライバシーが重要な顧客データ分析や定型作業では強みを発揮し、RTX 6000 Pro（約1,200万円）への投資を正当化したという。

### Key Discussion Points

- **gpt5**: ローカルモデルは長期・複雑なタスクではループに陥りやすく信頼性が低い。GPUと電力コストも高い。しかしプライバシー、制御性、予測可能性（写真/動画ライブラリの分類など反復作業）では真価を発揮する。

---

## 5. [Taxonomy of the Occlupanida (parasitoids on bread bag tags)](https://www.horg.com/horg/?page_id=921)

**Score:** 103 | **Comments:** 19 | [Post](https://news.ycombinator.com/item?id=48578388)

HORG（ホロタイプ・オクルパニド研究グループ）が管理する、パン袋の留め具（プラスチッククリップ）を架空の生物として分類した疑似科学的タクソノミー。プラスチック製品を「界: Microsynthera / 門: Plasticae / 綱: Occlupanida」として分類し、「口溝の歯牙」構造を主な分類基準とする。遺伝子・発生・化石データが一切存在しない中での「合成分類学」という独自アプローチが特徴。

### Key Discussion Points

- **Kaibeezy**: HNで最も多く投稿されているページのひとつ。過去の議論リンクを検索して共有。
- **Terr_**: 「palps（小突起）」は生殖サイクルの痕跡器官ではないかと仮説を提唱。門Plasticaeの他の種にも見られる出芽プロセスの名残りと推測。
- **yawpitch**: 「これは狂ったgenus（属）の仕業だ」（genusとgenius をかけたダジャレ）。
- **Duanemclemore**: 2000年代初頭にLAで本作の展示を見た。マクロレンズで撮影・拡大された標本が30cm以上のサイズで数十点展示されており圧巻だった。
- **foobarian**: 「財布に1枚入れておくべき理由」を謳うクリックベイト広告をずっと見かけるが、答えが未だ不明のまま。

---

## 6. [Storied Colors – a catalogue of named colors](https://storiedcolors.com/)

**Score:** 122 | **Comments:** 28 | [Post](https://news.ycombinator.com/item?id=48577374)

2026年開設の色彩アーカイブサイト。252種の顔料を、来歴・化学組成・文化的意義・倫理的背景とともに記録する。「帝国黄（唐代の皇帝専用）」「インド黄（牛尿由来、1908年頃に動物虐待で禁止）」「インディゴ（植民地プランテーションが1859年ベンガル藍反乱を引き起こした）」など、歴史的に重みのある顔料を包括的にカタログ化。毎週日曜UTC 06:00に新エントリが追加される。

### Key Discussion Points

- **danielvaughn**: WebにもStoried Colorがある。CSS の `rebeccapurple` はEric Meyerの娘Rebecca（幼くして亡くなった）への追悼として名付けられた色で、彼女が好きだった紫色。
- **jgord**: Van Dyke Brownが自分の画面ではBurnt Siennaに見える。Chromatopiaという本も推薦。カドミウムなど重金属顔料から離れているが、理想的な「一次色の赤」がまだ見つかっていない。
- **saltyoutburst**: 辞書がどのように色を定義するかを探る「True Color」（Kory Stamper著）を推薦。
- **lutusp**: 「自分の好きな色『Unforeseeable Fuchsia（予見不可能な紫紅色）』がリストにないのはなぜ？」とユーモアを交えて投稿。

---

## 7. [Clojure Hosted on Go](https://github.com/glojurelang/glojure)

**Score:** 65 | **Comments:** 11 | [Post](https://news.ycombinator.com/item?id=48578326)

GoランタイムにホストされたClojureインタープリター「Glojure」。GoとClojureの値が双方向に互換性を持つ完全なインターオップが特徴で、既存のClojure-on-Go実装の中で唯一これを実現している。CLIツール（`glj`）による対話的REPL（vi/emacs編集モード・補完・履歴付き）と、Goアプリへの組み込みスクリプティングの2つの利用形態を持つ。Go 1.24以上が必要。

### Key Discussion Points

- **didibus**: これは最も有望なClojure-on-Go実装。他にも試みがあったが、完全な相互運用性を持つのはこれだけ。
- **shikck200**: REPLはどう動くのか？GoにコンパイルしてExecしているのか、それともVMを内包しているのか？GoのREPLはコンパイル待ちで遅いものが多い。
- **gregwebs**: GoにはTyped FP実装 lisette.run もある。Goのランタイム・ツールチェーン・エコシステムはターゲットとして優秀。
- **adityaathalye**: メンテナンスが `gloathub/glojure` フォークへ移行（後に訂正：両リポジトリは同期が維持されている）。

---

## 8. [Show HN: Spin Lab](https://srijanshukla.com/artifacts/spin-lab/)

**Score:** 21 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=48554044)

卓球のスピンの仕組みをブラウザ上でインタラクティブに解説するツール。トップスピン・バックスピン・スピン量・弾道・バウンス挙動・リターンへの影響を視覚化し、スロー再生・スクラブ操作が可能。既存の説明が「曖昧すぎる」または「静的すぎる」という不満から作られた。

### Key Discussion Points

- **threatripper**: ライブ計測データと組み合わせたトレーニング活用ができれば素晴らしい。
- **N_Lens**: 「このデモに費やした時間に本当に spin（回転・混乱）させられた」（spin をかけたダジャレ）。
- **altmanaltman**: モバイルUIに問題あり。最初の画面でテキストがスクロールできない。見直しが必要。
- **srijanshukla18** (制作者): スピンは卓球の核心だが、スクラブ・スローダウン・実験ができるインタラクティブな説明がなかったため制作した。

---

## 9. [[x86] AI Compute Extensions (ACE) Specification](https://x86ecosystem.org/resource/ai-compute-extensions-ace-specification/)

**Score:** 19 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=48579913)

x86エコシステム諮問グループが2026年6月に公開した、AI/MLワークロード向け新命令セット拡張仕様「ACE」。機械学習に重要な行列乗算カーネルと縮小精度データ形式（INT8等）を加速する新規タイル・ブロックスケールレジスタと専用命令を導入。既存のAVX命令と組み合わせて動作し、高密度な行列演算とAVXの汎用データ処理を同一プログラム内で活用できる。

### Key Discussion Points

- **dgoldstein0**: 既存のSSE/AVX命令とどう違うのか？現在のx64マシンにはすでにこれらが搭載されている。
- **sorenjan**: AVX512は多くのCPUに搭載されていない。ACEも少なくとも当初はサーバーCPU限定になるのでは？
- **BobbyTables2**: 「TCG（Trading Card Game？）が関与しなかったことを神に感謝する！」とユーモアを交えて投稿。

---

## 10. [Loreline – Tools for writing interactive fiction](https://loreline.app/en/)

**Score:** 103 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=48576395)

インタラクティブフィクション・ゲームダイアログ・分岐ナラティブの制作ツール。MIT ライセンスのOSSで、専用スクリプト言語と無料ライティングアプリ「Loreline Writer」を提供。JavaScript・TypeScript・C#・Godot・Java・C++・Python・Lua・Haxeに対応。PO/XLIFFによる多言語化サポートも内蔵。

### Key Discussion Points

- **inigyou**: Inform 7は永遠に最高の言語。良い言語だからではなく、プログラマーにInform 7のコードを見せた時の反応がたまらない。
- **er4hn**: 「Sorcery!」や「80 Days」で有名なInkと比べてどうなのか？
- **gcampos**: スクリプトの可読性が高くて気に入った。過去に独自のインタラクティブストーリーシステムを作ったが、ビジュアルと移植性に特化したものだった。
- **riidom**: ドキュメントにWebエクスポートのような out-of-the-box デプロイターゲットの記述がない。Inkはウェブエクスポートがあり、ミドルウェアなしで完結できる。

---

## Trends

今回のHNトップ10から見えるテーマと傾向：

1. **AIの専門領域への拡張**: Midjourney Medical（医療撮影）、x86 ACE仕様（ハードウェアレベルのAI加速）、ローカルLLM（オフライン・プライバシー重視）と、AIが汎用ツールから専門システムへ展開するフェーズが進んでいる。

2. **ゲーム開発インフラの刷新**: Epic GamesによるLoreのOSS化は、長年Perforceが独占してきたゲーム開発VCS市場への大きな参入。Unreal Engineとのネイティブ統合が実現すれば、業界標準が塗り替わる可能性がある。

3. **AI地政学の緊張継続**: DeepSeek規制見送りは米国の対中AI政策の揺らぎを示す。「エンティティリストが無意味」「ウェイトをHugging Faceに公開された時点で制御不能」など、規制の実効性に対する懐疑的意見が多数。

4. **クリエイティブ・文化系ツールの人気**: 色彩の歴史アーカイブ（Storied Colors）、インタラクティブフィクションツール（Loreline）、卓球物理シミュレーター（Spin Lab）など、実用性よりも好奇心・創造性に訴えるプロジェクトが高評価を獲得。HNのコミュニティが純粋な技術だけでなく人文知との融合を好む傾向が確認できる。

5. **異種ランタイム間の相互運用への関心**: Glojure（Clojure on Go）は、既存言語の豊かなエコシステムを別のランタイムに持ち込もうとする試み。GoとClojureの双方向インターオップという設計判断がコミュニティに評価されている。
