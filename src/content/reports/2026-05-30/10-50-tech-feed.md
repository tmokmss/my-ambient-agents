---
title: "Tech Feed ダイジェスト（2026年5月30日）"
date: "2026-05-30T10:50"
category: "summary"
summary: "Secure Boot証明書6月期限切れ・Google AI検索「インターネット管理組合」化批判・テック界隈の引退ブーム・LLM KV cache深掘りなど"
tags: ["security", "ai", "llm", "aws", "frontend", "autonomous-driving", "career", "compilers", "devtools"]
---

## はてなブックマーク (テクノロジー)

- **[AI時代の私の技術インプットとアウトプット術](https://speakerdeck.com/tonkotsuboy_com/aishi-dai-nosi-noji-shu-inpututotoautopututoshu)** ([192users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/tonkotsuboy_com/aishi-dai-nosi-noji-shu-inpututotoautopututoshu)) - AIが情報処理を肩代わりする時代に、エンジニアが「何を人間がインプットすべきか」「どうアウトプットに変換するか」を再設計したスライド。「AIに読ませて要約させる」前段に自分の問いを立てる習慣が重要で、出力品質は入力の問いの深さに比例するという実践的知見が多くのエンジニアに刺さった。

- **[Ollama(Qwen3-VL)×Playwrightで作る完全無料のWeb調査エージェント](https://zenn.dev/lluminai_tech/articles/358bee9674ed4e)** ([133users](https://b.hatena.ne.jp/entry/s/zenn.dev/lluminai_tech/articles/358bee9674ed4e)) - ローカルで動くマルチモーダルLLM「Qwen3-VL」とブラウザ自動化フレームワーク「Playwright」を組み合わせ、外部APIコストゼロでWebスクレイピング・情報収集・画面解析を行うエージェントを構築した実装例。クラウドLLM依存を排除しながら高度なWeb調査を自動化できる点が実用的として注目を集めた。

- **[グーグルはインターネットを破壊しようとしている…新しい検索機能はまるでAIによる「管理組合」に制御された世界](https://www.businessinsider.jp/article/2605-google-new-ai-search-will-ruin-internet-web/)** ([107users](https://b.hatena.ne.jp/entry/s/www.businessinsider.jp/article/2605-google-new-ai-search-will-ruin-internet-web/)) - GoogleのAI Overviewが検索結果の上に要約を覆い被せることで、コンテンツ制作者へのトラフィックが激減しているという批判記事。「インターネットというコモンズをAIが管理する管理組合が接収している」という比喩が的確として共感を集め、AI検索時代のWebエコシステムの持続可能性への問いを投げかけている。

- **[日立が全グループのパソコン17万台にレノボ採用、運用もアウトソース](https://xtech.nikkei.com/atcl/nxt/news/24/03246/)** ([96users](https://b.hatena.ne.jp/entry/s/xtech.nikkei.com/atcl/nxt/news/24/03246/)) - 日立製作所が国内外グループ全社の端末17万台をレノボThinkPadに統一し、運用管理もアウトソーシングする大規模調達を決定。日本メーカーが「自社グループの端末すら自社製でない」というコモディティ化を公式に認めた形であり、エンタープライズPC市場の地殻変動を示す象徴的な事例として議論を呼んでいる。

- **[Windows PCの『セキュアブート』証明書が2026年6月に期限切れ、更新状況の確認を](https://news.mynavi.jp/techplus/article/20260529-4510597/)** ([54users](https://b.hatena.ne.jp/entry/s/news.mynavi.jp/techplus/article/20260529-4510597/)) - Microsoftが発行したセキュアブート用のコード署名証明書の一部が2026年6月に有効期限を迎える。期限切れ証明書で署名されたブートローダーはUEFIファームウェアに拒否される可能性があり、特に古いまま放置されているWindowsシステムや組み込みデバイスへの影響が懸念される。管理者は早急に対象環境の洗い出しを推奨。

## Zenn

- **[MLエンジニアのための本質から理解するLLM推論 KV cache編](https://zenn.dev/kaz20/articles/c77f8a41cf2bf5)** - 東京科学大学の博士課程研究者によるKV cacheの深掘り解説。なぜKey・ValueのみキャッシュしてQueryはしないかを注意機構の数学から導出し、プリフィルとデコードの非対称性・バッチ処理時のメモリレイアウト・FlashAttentionとの関係まで段階的に説明している。「とりあえず使っている」段階から「なぜそう動くか」を説明できる段階に移行したい実務MLエンジニア向け。

- **[【AWS Secrets Manager】末尾が "ハイフン＋6文字" のシークレット名には気をつけろ！！](https://zenn.dev/levtech/articles/946b5154085468)** - AWS Secrets Managerには「シークレット名の末尾がハイフン+英数字6文字」のパターンを内部サフィックス（削除済みシークレットの識別子）として予約しているという仕様があり、このパターンに合致する名前をつけると予期しない動作が起きる落とし穴を実体験から解説。IaCでシークレット名を動的生成する際に踏みやすいため、命名規則のバリデーション追加が推奨されている。

- **[AIを使った効率的な体験改善のための開発フロー](https://zenn.dev/noppe/articles/2113952a4bf0cc)** - OpenAIの「エージェントファーストの世界におけるCodexの活用」をベースに、UX改善サイクルにAIエージェントを組み込んだ開発フローを整理した記事。「コードスループットが上がるほどボトルネックは人間の判断に移る」というインサイトを受け、ユーザーインタビュー・仮説立案・実装という各フェーズでのAI活用の役割分担を具体的に定義している。

- **[自動運転アーキテクチャの一つの提案 / Tri-Modal BEV VLA Planner](https://zenn.dev/tatsuyai713/books/53b0b03395e35f)** - Vision・LiDAR・Radarの3モーダルを統合したBird's Eye View（BEV）表現に、言語指示・動的物体予測・Lane Topology・複数候補軌跡・外部安全評価器を組み合わせたVLA（Vision-Language-Action）プランナーの設計書。「大規模言語モデルを運転判断に使う」という方向性が自動運転の主流になりつつある中、センサーフュージョンからアクチュエータ出力まで一体として設計する統合アーキテクチャの考え方を整理した骨太な技術ドキュメント。

## Qiita

- **[Vercel公式「React Best Practices」Skillsでコードはどう変わるのか試してみた](https://qiita.com/ma-ryu/items/32646ec31ef9fa1c4e0b?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - VercelがClaude Code向けに公開した「React Best Practices」スキルを実際のコンポーネントに適用して、適用前後でコードがどう変化するかを比較した実験記事。Server Components優先・不要なuseEffect排除・エラーバウンダリの適切な配置など、Next.js App Router時代のベストプラクティスをAIスキルとして定式化した成果を検証しており、スキルの設計思想の理解にも役立つ。

- **[Copilot Notebooks とは？ - OneNote と同期する「考える場所」と May 2026 アップデートまとめ](https://qiita.com/aktsmm/items/4577857b6c440c3f8b23?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Microsoft 365 Copilotの新機能「Copilot Notebooks」の概要とMay 2026アップデートを整理した記事。OneNoteと双方向同期しながら「AIと共同で考えるインタラクティブな思考空間」として機能するNotebooksは、Jupyter NotebookのAI強化版とも言えるポジションで、エンジニアの技術調査・設計メモへの活用可能性を検討している。

- **[プログラミング完全未経験から始める！競技プログラミング入門ガイド](https://qiita.com/Un_titled/items/03b9b817bf2015321159?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - AIコーディングツールが普及したいまだからこそ「アルゴリズム思考の地力」を磨く競技プログラミングを入門する意義を論じ、環境構築からAtCoder Beginner Contestの攻略法までを網羅したガイド。「AIが実装を書いてくれるからこそ、何を実装させるか考える力が差になる」という逆説的な動機付けが2026年のプログラミング学習議論の文脈に沿っている。

## AWS 新着

- **[Amazon SES now offers inbox placement metrics and blocklist monitoring](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-ses-global-deliverability/)** (2026-05-29) - Amazon SESにメール到達性を可視化する新機能が追加。受信箱到達率・スパムフォルダ着地率のリアルタイム指標と、主要ISPのブロックリストに自ドメインが登録されていないかを監視するダッシュボードが利用可能に。大量メール配信を行うSaaSやECにとってドメインレピュテーションの劣化を早期発見できるようになり、送信停止リスクを大幅に低減できる。

- **[AWS End User Messaging RCS for Business now available in 20 additional countries](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-rcs-countries/)** (2026-05-29) - リッチメディア対応メッセージング規格「RCS for Business」のAWS End User Messaging経由での提供が20カ国追加され、合計22カ国で利用可能に。SMSの後継として画像・動画・インタラクティブボタンを含むメッセージ送信がAPIから行えるようになり、カスタマーエンゲージメントの手段としてSMSからRCSへの移行が加速している。

- **[Oracle Database@AWS is now available in twenty AWS Regions](https://aws.amazon.com/about-aws/whats-new/2026/05/oracle-database-aws-available-twenty-regions/)** (2026-05-29) - AWS上でOracleのネイティブデータベースをAWS Exadata Infrastructureで直接実行できる「Oracle Database@AWS」が8リージョン追加され、欧州・アジアを含む計20リージョンで利用可能になった。Oracleライセンスを持つ企業がAWSに移行する際の最大障壁だった「Exadata依存のワークロード」をクラウドネイティブに稼働させる道が整い、大規模エンタープライズのAWS移行が現実的な選択肢となりつつある。

## Lobsters

- **[I Am Retiring from Tech to Live Offline](https://openpath.quest/2026/i-am-retiring-from-tech-to-live-offline/)** (110pt) - テック業界に20年以上携わったエンジニアが、デジタルデバイスのない生活への移行を宣言したエッセイ。「常時オンラインでいることへの疲弊」「AIが代替できる仕事への虚脱感」「自然と向き合う時間の希求」が動機として語られており、似たような感覚を持つ同業者から多くの共感コメントが寄せられた。技術的な高度化が必ずしも人間の充実につながらないという問いは、業界全体への静かな問いかけとして響く。

- **["But it happened." - Casey Muratori's comment on Eric Schmidt's commencement speech](https://youtu.be/tlQ7EoJDTQY)** (97pt) - ゲームエンジニアのCasey Muratoriが、Eric Schmidtが「GoogleはAIのために在宅勤務を認めなかったから競争に勝てた」と発言した卒業式スピーチに対して「でも実際に起きたことだ（But it happened.）」と反論した動画。在宅勤務とAI競争力の因果関係を技術的・データ的に検証しており、マネジメント言説が事後合理化されるメカニズムへの批判的視点がテック界で話題になった。

- **[Leaving performance on the table](https://fzakaria.com/2026/05/23/leaving-performance-on-the-table)** (29pt) - コンパイラやランタイムが一般的なケースに最適化されているがゆえに、特定のワークロードでは「あえてコンパイラの最適化を信頼しないほうが速い」ケースが存在することを実例で示した記事。プロファイリングなしに「コンパイラが最適化してくれる」と信じて放置することで生まれる性能損失を、LLVMとGCCの実際の出力差を交えて解説している。

- **[CVE-2026-48710: A Maintainer's Perspective](https://marcelotryle.com/blog/2026/05/28/cve-2026-48710-a-maintainers-perspective/)** (20pt) - Pythonの人気ライブラリに起票されたCVE-2026-48710に対して、OSSメンテナの立場から「この報告プロセスは機能しているか」を正直に振り返った記事。CVEスコアリングの過大評価・Responsible Disclosureの連絡が届かずに公開されるケース・修正対応のリソース不足という三つの問題点をメンテナ目線で論じており、MSvs研究者の対立と同様にOSSセキュリティの制度的課題を浮き彫りにしている。

- **[Emacs bra size calculator](https://pulusound.fi/blog/emacs-bra-size-calculator)** (53pt) - バストサイズをEmacsのLispで計算するという一見ネタに見えて、実際には数値処理・単位変換・対話的バッファ・カスタムコマンド定義をすべて網羅したEmacs Lisp入門として機能している記事。「実用的なユーティリティをEmacsで書くとこれだけのことが学べる」という逆説的な教材として好評を博し、Emacsコミュニティらしいユーモアと技術的充実が両立している。

## dev.to

- **[Transducers in JavaScript: When `reduce()` Is Not the End of the Story](https://dev.to/amrishkhan05/transducers-in-javascript-when-reduce-is-not-the-end-of-the-story-3h6j)** - 関数型プログラミングの概念「トランスデューサー」をJavaScriptで実装する解説記事。`map` → `filter` → `reduce`のチェーンが中間配列を生成するたびにメモリを消費する問題を、トランスデューサーで変換関数を合成してシングルパスで処理する手法で解決する。大規模データのストリーム処理やRxJSのパイプラインを理解する際の概念的な基礎として有用。

- **[I Built a VS Code Extension to Track My Coding Time — And Kept Your Data 100% Local](https://dev.to/kuldipparmar18/i-built-a-vs-code-extension-to-track-my-coding-time-and-kept-your-data-100-local-klj)** - WakaTimeなどのクラウドベース開発時間トラッキングツールへのプライバシー懸念から、すべてのデータをローカルファイルに保存するVS Code拡張を自作した開発記。Extension APIのイベントリスニング・ファイル別集計ロジック・可視化パネルの実装を通じて「VS Code拡張開発の最小ループ」を学べる内容でもあり、プライバシー重視派のエンジニアへの実用ツールとしても機能する。

- **[Create fully complete .gitignore files from the cli](https://dev.to/isaac_ar/create-fully-complete-gitignore-files-from-the-cli-3jgd)** - `gitignore.io`（現toptal）のAPIを活用して、プロジェクトで使う言語・フレームワーク・エディタを複数指定したフル機能`.gitignore`をCLI一発で生成するツールの紹介。手書きやテンプレートコピーに比べて網羅性が高く、Node+Python+JetBrainsのような複合環境でも漏れなく除外設定が作れるため、プロジェクト初期化フローの自動化で地味に重宝する。

## TechCrunch

- **[Founders seize on Indian court ruling to revive criticism of Google's ad business](https://techcrunch.com/2026/05/29/founders-seize-on-indian-court-ruling-to-revive-criticism-of-googles-ad-business/)** - インド競争委員会がGoogleのキーワード広告における商標利用に関して不公正との判断を下したことを受け、スタートアップ創業者たちがGoogleのアドワーズビジネスへの批判を再燃させている。「自社ブランドのキーワードを競合が入札できる」仕組みが独占的な広告価格の押し上げに寄与しているという議論は、グローバルで規制当局の注目を集めており、デジタル広告市場の競争政策論議に新たな局面をもたらしている。

- **[Cognition's Scott Wu says AI coding agents shouldn't replace humans](https://techcrunch.com/2026/05/29/cognitions-scott-wu-says-ai-coding-agents-shouldnt-replace-humans/)** - 「最初のAIコーディングエージェント」として知られるDevinを開発したCognitionのCEO Scott Wuが、AIエージェントは人間エンジニアを代替するものではなく「エンジニアの力を増幅するもの」という立場を明確化した。AIコーディングツールのベンダー自身が「置き換え」から「増強」へのナラティブを強調する背景には、過度な自動化への反発と採用継続への配慮という実利的な動機も見え隠れする。

- **[What happens when companies become too AI-pilled?](https://techcrunch.com/video/what-happens-when-companies-become-too-ai-pilled/)** - BoxのCEO Aaron Levieが「AIで仕事が代替できると判断する人たちは、その仕事の本質を最も理解していない人たちだ」と指摘したインタビュー。経営層がAIの可能性を過大評価して現場業務の複雑さを過小評価する構造は、技術革新のたびに繰り返されるパターンとして、エンジニアがAI推進論に対して批判的な視点を保つ根拠を提供している。

## Ars Technica

- **[Proposed new US funding rules: We can cancel any grant at any time](https://arstechnica.com/science/2026/05/the-office-of-management-and-budget-tries-again-to-cripple-us-science/)** - 米行政管理予算局（OMB）が「政策上の理由でいつでも助成金を即時取り消せる」とする新規則案を提示したことが報道された。大学・研究機関の基礎研究予算の安定性を根本から揺るがす規則で、NSFやNIH経由の研究助成に依存するコンピュータサイエンス・AI研究分野への影響が懸念される。学術界からは「研究計画の長期立案が不可能になる」と強い反発が上がっている。

- **[After years of stability, F1 reliability can no longer be taken for granted](https://arstechnica.com/cars/2026/05/f1-in-2026-to-finish-first-first-you-have-to-finish/)** - 2026年F1シーズンで新世代パワーユニット（電動ハイブリッド比率を大幅に引き上げた規定）への移行後、複数チームでリタイアが急増していることを技術的に分析した記事。エネルギー回生システムの複雑化・熱管理の難度上昇・ソフトウェア制御の高度化が信頼性低下の主因とされ、「ハードウェアの限界をソフトウェアで制御する」設計パターンのリスクという観点でソフトウェアエンジニアリングへの示唆を含む。

## 注目トピック

今日の全ソースを通じて浮かび上がる大きなテーマは **「AI時代の人間の位置づけをめぐる揺り戻し」** だ。Lobstersで最高スコアを集めた「テックから引退してオフライン生活へ」という記事、Boxの創業者による「AIで代替できると思っている人が最も業務を理解していない」発言、Cognitionが「AIは置き換えではなく増強」と訴える動き、そしてKMuratori vs Schmidt論争——これらは単発の意見ではなく、AIツールが実用段階に入ってからの「人間の役割の喪失感」と「それへの反論」が同時多発的に噴出していることを示している。半年前は「AIで生産性爆上がり」一色だった言説が、今は「AIで何かを失っている感覚」と対話する段階に入っている。

セキュリティ面では、Windowsセキュアブート証明書の6月期限切れという**対処期限が明確な脅威**が注目を集めた。CVEメンテナの苦悩やOSSライブラリのセキュリティ制度的課題も同日に論じられており、「AIが生成するコードへの対応」とは別次元の、従来型インフラセキュリティの地道な管理コストが改めて可視化された。
