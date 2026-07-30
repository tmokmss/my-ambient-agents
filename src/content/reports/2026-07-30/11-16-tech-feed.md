---
title: "Tech Feed ダイジェスト（2026年7月30日）"
date: "2026-07-30T11:16"
category: "summary"
summary: "PQC候補アルゴリズムをClaude Mythosが崩す一方、AI企業の資本関係と競合関係がMicrosoft・Meta決算で同時に露呈した一日"
tags: ["ai", "security", "aws", "mcp", "cloud", "quantum"]
---

## はてなブックマーク (テクノロジー)

- **[ラズパイ3台でエヴァのMAGIを作る｜ローカルLLMで動く合議AIシステム](https://tech-lab.sios.jp/archives/53583)** ([205users](https://b.hatena.ne.jp/entry/s/tech-lab.sios.jp/archives/53583)) - Raspberry Pi 3台にそれぞれ異なるローカルLLMを載せ、アニメ「エヴァンゲリオン」のMAGIシステムのように3体が合議して1つの答えを出す仕組みを自作した記事。クラウドAPIに頼らず低スペック機だけで多数決型のAIオーケストレーションを組める点が興味深い。
- **[査読にAIを使われた体験談](https://www.chem-station.com/blog/2026/07/review.html)** - 化学分野の論文査読者がAIを使って査読コメントを作成していたと疑われる体験を報告した記事。学術出版の品質担保プロセスにAIが無自覚に入り込みつつある実態を示している。
- **[NameThatUI — What Is This UI Element Called?](https://namethatui.com/)** ([27users](https://b.hatena.ne.jp/entry/s/namethatui.com/)) - 「あの見た目のUI部品、名前は何と言うのか」を検索できるリファレンスサイト。デザインレビューやIssue起票の際に部品名を正確に共有できるようになる地味だが実用的なツール。
- **[国内で使えるMCPサーバー114選を可視化、業務別逆引きや認証方式までわかるカオスマップ公開](https://codezine.jp/news/detail/29162)** ([26users](https://b.hatena.ne.jp/entry/s/codezine.jp/news/detail/29162)) - 日本国内で利用可能なMCPサーバー114個を業務カテゴリや認証方式から逆引きできるカオスマップが公開された。乱立するMCPサーバーの中から自社要件に合うものを選定する際の一次情報源になる。
- **[Claude Mythosが耐量子暗号やAESの欠陥を特定](https://pc.watch.impress.co.jp/docs/news/2129199.html)** ([25users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2129199.html)) - Anthropicの自動セキュリティ研究エージェント「Claude Mythos」が、耐量子暗号（PQC）候補アルゴリズムの脆弱性を発見したと報じる記事。Ars Technicaも同じ研究成果を報じており、AIエージェントが標準化途上の暗号アルゴリズムを崩す事例として注目される。

## Zenn

- **[【速報】Kimi-K3をDay0デプロイ。2.8TモデルはNVIDIA B300 x8の1ノードで動くのか](https://zenn.dev/fixstars/articles/kimi-k3-benchmark)** - Moonshot AIが公開した2.8兆パラメータの巨大オープンウェイトモデルKimi-K3を、公開当日にNVIDIA B300 x8構成の1ノードで実際に動かせるか検証した記事。史上最大級のオープンモデルを個別企業のインフラでどこまで捌けるかという実務的な検証。
- **[agent-browserはもう古い？ Web調査をコマンドに変えるOpenCLI](https://zenn.dev/nasubikun/articles/opencli-web-research)** - AIがブラウザを直接操作してWeb調査を行う従来型ツールに対し、Web調査をコマンド実行に変換する新興OSS「OpenCLI」を紹介する記事。ブラウザ操作を模倣するアプローチから、調査タスクをCLI的に構造化するアプローチへの移行を示唆している。
- **[スキルは増やしすぎると使われなくなるのか？実測したら原因はトークンではなかった](https://zenn.dev/canly/articles/43bef1eacdae44)** - Claude Codeのカスタムスキルを増やすと使われなくなる現象を実測し、原因がトークン消費量ではなく別の要因にあったことを突き止めた検証記事。スキル設計の勘所を定量データで裏付けている。
- **[【Claude Code】planモードはもう使っていない](https://zenn.dev/notahotel/articles/0c28638945aa32)** - Claude CodeのPlanモードを使わなくなり、代わりにIssueを渡して案を出させるだけのシンプルな運用に落ち着いたという実践記。ツールの機能を律儀に使うより、シンプルな指示の反復の方が結果的に生産的だったという知見。
- **[[gamification] DIVER OSINT CTF 2026 Writeup](https://zenn.dev/syurenuko/articles/7c1834466efd8a)** - 24時間開催のOSINT特化CTF「DIVER OSINT CTF 2026」に参加し867チーム中18位を獲得した2人チームの解法まとめ。人数制限がある中での効率的な役割分担とOSINT調査手法が具体的に書かれている。

## Qiita

- **[CLAUDE.md は21セクションか、8行か — 公式ドキュメントで決着をつけた](https://qiita.com/jqit_suwa/items/cea574550613de33a114)** - CLAUDE.mdの記述量を巡る「詳細に書くべきか、簡潔にすべきか」という論争に対し、Anthropic公式ドキュメントの記述を根拠に決着をつけようとした記事。プロジェクト設定ファイルの肥大化を防ぐ指針として参考になる。
- **[「パスキー対応できますか？」と聞かれたら ── 要件を詰めずに実装すると、登録済みのパスキーが全部無効になる](https://qiita.com/ntaka329/items/bfd8535d8f64a9ecd0fb)** - パスキー（WebAuthn）対応を要件を詰めずに実装すると、後から登録済みパスキーが軒並み無効化される落とし穴を解説した記事。認証まわりの仕様変更が既存ユーザーに与える影響を事前に見積もる重要性を説いている。
- **[CIとCDを別基盤にする責務分担パターン](https://qiita.com/ham-nao/items/25a0693d50978ad80522)** - CI（継続的インテグレーション）とCD（継続的デリバリー）をあえて別の基盤・別のパイプラインに分離する設計パターンとその利点を整理した記事。権限分離や障害影響範囲の限定という観点からの実践的な設計論。
- **[次世代のAI駆動開発！？ - Codex Microをセットアップ・修正・検証まで試してみた -](https://qiita.com/ryosuke_ohori/items/2adcbc314db51f527580)** - OpenAIの軽量版コーディングエージェント「Codex Micro」を実際にセットアップし、修正・検証まで一通り試したハンズオン記事。軽量モデルでどこまでコーディング支援タスクを任せられるかの実測レポート。
- **[Claudeでクレジット100ドルが付与されたので、Fableを使ってサブエージェントを作って「小規模開発チーム」基盤を作った](https://qiita.com/su3-hokkaido/items/89fcfd2702ecba65c74d)** - Anthropicから付与されたクレジットを使い、軽量モデルFableでサブエージェント群を構成し、小規模な仮想開発チームとして機能する基盤を構築した記事。役割分担されたサブエージェント編成の具体的な実装例。

## AWS 新着

- **[Claude Opus 5 is now available on AWS](https://aws.amazon.com/about-aws/whats-new/2026/07/claude-opus-5-aws/)** (2026-07-24) - 最新のOpus系モデル「Claude Opus 5」がAWS上で利用可能になり、ゼロデータ保持（ZDR）にも対応したと発表。長時間稼働するエージェントや専門的な業務タスクをAWS環境でコンプライアンス要件を保ったまま実行できるようになる。
- **[AWS Glue announces VPC support, filter pushdown, and partition support for the REST API connector](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-glue-rest-connector-filtering-partitioning-vpc)** (2026-07-29) - AWS GlueのREST APIコネクタがVPC接続、フィルタプッシュダウン、パーティションサポートに対応した。任意のREST APIをデータソースとして扱う際の性能とセキュリティが向上する。
- **[Amazon Neptune now supports tag-based access control for IAM](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-neptune-tbac/)** (2026-07-27) - グラフDBのAmazon Neptuneが、AWSリソースタグとIAMプリンシパルタグをIAMポリシー条件として使えるタグベースアクセス制御に対応した。リソースの命名規則ではなくタグ単位で権限管理を統一できる。
- **[AWS Glue Data Quality now supports anomaly detection and writing results to the AWS Glue Data Catalog](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-glue-data-quality-catalog-anomaly-detection-write-results)** (2026-07-27) - AWS Glue Data Qualityがカタログベースのデータ品質評価に異常検知機能を追加し、評価結果をGlue Data Catalogに書き込めるようになった。データ品質の劣化を継続的に検知し履歴として残せる。
- **[AWS IAM Identity Center extends multi-Region support to Identity Center directory](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-iam-identity-center-extends-multi-region-support-to-identity-center-directory)** (2026-07-27) - IAM Identity Centerのディレクトリを、シングルサインオンを設定したプライマリリージョン以外にも複製できるようになった。マルチリージョン運用時の認証基盤の可用性向上に寄与する。

## Lobsters

- **[User Interfaces of the Demo Scene](https://datagubbe.se/scenegui/)** (61pt) - 1980〜90年代のデモシーン文化が生み出した独特なUIデザインの数々を振り返る記事。実用性よりも表現としてのインターフェースを追求した当時の美学が、現代のUIデザインの常識とは異なる発想源として興味深い。
- **[A field day for Gleam's language server | Gleam v1.18.0 release](https://gleam.run/news/a-field-day-for-gleams-language-server/)** - 関数型言語Gleamの最新リリースv1.18.0でLanguage Serverが大幅に強化されたことを伝える公式記事。型推論の恩恵をエディタ上でリアルタイムに受けられる開発体験の向上に注力している。
- **[Overengineered calculator: Zig + QBE](https://tomekw.com/overengineered-calculator-zig-qbe/)** (40pt) - 単純な電卓プログラムを、あえてZig言語と軽量コンパイラバックエンドQBEを使って作り込んだ記事。フロントエンド言語とバックエンドコード生成を分離するコンパイラ設計を小規模な題材で体感できる内容。
- **[C++ float-to-int conversion can be undefined behavior](https://kttnr.net/blog/cpp-float-to-int-conversion-undefined-behavior/)** (27pt) - C++で浮動小数点数を整数型にキャストする際、値が変換先の型で表現できない範囲だと未定義動作になるという見落とされがちな仕様を解説した記事。一見安全に見えるキャストに潜む落とし穴を具体例で示している。
- **[GNU Hyperbole Implicit Buttons: Build your Hyperverse](https://www.chiply.dev/post-hyperbole-implicit-buttons)** (22pt) - Emacs拡張GNU Hyperboleの「暗黙のボタン」機能を使い、テキスト中のパターンを検出して自動的にアクション可能にする仕組みを紹介する記事。テキストエディタをハイパーテキスト環境に変える古くて新しいアプローチ。

## dev.to

- **[I audited 2,864 CI checks. Several had never run, and green never told me.](https://dev.to/earnestamateur/i-audited-2864-ci-checks-several-had-never-run-and-green-never-told-me-1abb)** - 自身のPRに設定されている2,864件のCIチェックを監査した結果、一度も実行されていないのに「グリーン」表示されていたチェックが複数見つかったという調査記事。CIの「緑」を無条件に信頼することの危うさを実データで示している。
- **[Open-Source Multi-Agent Orchestration: Lessons from AgentForge](https://dev.to/albert_zhang_f468830cf0e6/open-source-multi-agent-orchestration-lessons-from-agentforge-1kf0)** - 自社課題を解決するために構築したOSSのマルチエージェントオーケストレーション基盤「AgentForge」の、6か月間の本番運用から得た教訓をまとめた記事。成功パターンではなく失敗モードから設計を始めるべきという実務的な示唆が中心。
- **[The check was right. The key was wrong.](https://dev.to/anp2network/the-check-was-right-the-key-was-wrong-onp)** - あるセッションでアカウントのメールアドレスが変更された直後に、同一セッションからの認証情報リカバリ要求をブロックするエージェントゲートウェイのルールを解説した記事。AIエージェント経由のなりすまし・乗っ取りを防ぐ実装パターンとして参考になる。
- **[Google Expands Gemini Spark as a Persistent AI Agent Across Its Product Ecosystem](https://dev.to/alifar/google-expands-gemini-spark-as-a-persistent-ai-agent-across-its-product-ecosystem-b1n)** - Googleが常駐型の個人向けAIエージェント「Gemini Spark」を自社製品群全体に展開していると報じる記事。都度の応答ではなく、バックグラウンドで継続的にユーザーの作業を代行するエージェント像への移行を示している。
- **[Atomarine: Nuclear Data Centers at Sea!](https://dev.to/mgobea/atomarine-nuclear-data-centers-at-sea-4d5h)** - LLMの学習・推論需要の急増に対応するため、洋上の小型原子力潜水艦型データセンターという構想を検討する記事。陸上の電力網の限界を回避する突飛だが示唆に富むインフラ案として紹介されている。

## TechCrunch

- **[Microsoft logs $3.2B from Anthropic investment, but OpenAI was a mixed bag](https://techcrunch.com/2026/07/29/microsoft-logs-3-2b-from-anthropic-investment-but-openai-was-a-mixed-bag/)** - Microsoftの2026年度第4四半期決算で、Anthropicへの投資から32億ドルの利益を計上した一方、OpenAIへの投資は好調とは言えなかったと報じる記事。同じAI企業2社への投資でも財務上の明暗がはっきり分かれ始めている。
- **[Microsoft is openly competing with OpenAI, Anthropic more than ever](https://techcrunch.com/2026/07/29/microsoft-is-openly-competing-with-openai-anthropic-more-than-ever/)** - Microsoftが自社開発のAIモデルやエージェント基盤、さらにはAnthropicの「Mythos」に対抗する製品まで投資家に提示し、継続成長を訴えたと報じる記事。出資先でもあるOpenAI・Anthropicと表立って競合し始めている構図が浮き彫りになっている。
- **[Mark Zuckerberg predicts that billions of people will have personal AI agents in five years](https://techcrunch.com/2026/07/29/mark-zuckerberg-predicts-that-billions-of-people-will-have-personal-ai-agents-in-five-years/)** - Metaが巨額のAIインフラ投資を続ける中、ザッカーバーグCEOが5年以内に数十億人が個人用AIエージェントを持つようになると投資家に説いたと報じる記事。莫大な投資に見合う将来像を具体的な普及予測で正当化しようとしている。
- **[DoorDash is building its own drone delivery business](https://techcrunch.com/2026/07/29/doordash-is-building-its-own-drone-delivery-business/)** - フードデリバリーのDoorDashが米連邦航空局（FAA）から商用ドローン配送事業の認可を取得し、自社でドローン配送を手がけると報じる記事。外部パートナー任せだった配送の「最後の1マイル」を自社インフラ化する動き。
- **[Encore AI raises $30M to build AI agents that learn from customer calls](https://techcrunch.com/2026/07/29/encore-ai-raises-30m-to-build-ai-agents-that-learn-from-customer-calls/)** - 通話・メッセージ・CRMデータを解析し、優れた営業トークをAIエージェント向けのプレイブックに変換するEncore AIが3000万ドルを調達したと報じる記事。人間の暗黙知をエージェントに継承させるという具体的な応用例。

## Ars Technica

- **[Mythos attack on 3rd-round PQC algorithm candidate puts it out of commission](https://arstechnica.com/security/2026/07/mythos-uncovers-crypto-weaknesses-that-went-unknown-for-years/)** - Anthropicの自動セキュリティ研究エージェント「Mythos」が、NIST標準化プロセスの第3ラウンドに残っていた耐量子暗号候補アルゴリズムに攻撃を成立させ、事実上使用不能に追い込んだと報じる記事。長年見過ごされてきた暗号理論上の欠陥をAIが発見した点で、暗号標準化プロセスの前提が揺らいでいる。
- **[Actually, Starliner might fly into space this year](https://arstechnica.com/space/2026/07/actually-starliner-might-fly-into-space-this-year/)** - 度重なる不具合で延期を重ねてきたBoeingの有人宇宙船Starlinerが、年内に打ち上げられる可能性が出てきたと報じる記事。ハードウェアの信頼性検証に長期間を要する有人宇宙開発の難しさを象徴する事例。
- **[What happens when you put AI to work deciphering lost languages?](https://arstechnica.com/science/2026/07/what-happens-when-you-put-ai-to-work-deciphering-lost-languages/)** - 解読が進んでいない古代言語の解読作業にAIを投入した際に何が起きるかを検証した記事。パターン認識能力を歴史言語学という人手不足の学術領域に応用する試みとして注目される。
- **[Musk went to "war," sought jail time for X ad boycotts—but case ends with a whimper](https://arstechnica.com/tech-policy/2026/07/musk-went-to-war-sought-jail-time-for-x-ad-boycotts-but-case-ends-with-a-whimper/)** - イーロン・マスク氏がXの広告ボイコットを「組織的な違法行為」として刑事罰まで求めて争ってきた訴訟が、目立った成果もなく終結したと報じる記事。プラットフォーム対広告主の対立が法廷闘争としては尻すぼみに終わった経緯を追っている。
- **[Elon Musk finally launches X Money. What could possibly go wrong?](https://arstechnica.com/tech-policy/2026/07/elon-musk-finally-launches-x-money-what-could-possibly-go-wrong/)** - 長らく延期されてきたXの決済機能「X Money」がついに開始されたと報じる記事。SNSプラットフォームが金融サービスに踏み込むことに伴う規制・セキュリティ上のリスクを懐疑的な視点で論じている。

## 注目トピック

今回最も目を引いたのは、Anthropicの自動セキュリティ研究エージェント「Mythos」が、NIST標準化プロセス第3ラウンドに残っていた耐量子暗号（PQC）候補アルゴリズムへの攻撃を成立させ、事実上使用不能に追い込んだという成果だ。はてなブックマークとArs Technicaの両方が同じ研究を報じており、長年専門家のレビューをくぐり抜けてきた暗号理論上の欠陥をAIエージェントが発見したという事実は、次世代暗号標準の信頼性そのものに一石を投じている。Microsoftが決算発表でAnthropicの「Mythos」に対抗する自社製品を投資家に示したとも報じられており、AIによるセキュリティ研究能力そのものが企業間の競争軸になりつつある。

もう一つの軸は、AI企業同士の資本関係と競合関係が同時に表面化していることだ。TechCrunchは、MicrosoftがAnthropicへの投資から32億ドルの利益を計上した一方でOpenAIへの投資は振るわなかったと報じ、同時にMicrosoftがOpenAIやAnthropicと自社製品で真っ向から競合し始めているとも伝えている。出資先であり競合相手でもあるという捻れた関係が決算という数字の形で可視化された形だ。ザッカーバーグ氏が「5年以内に数十億人が個人用AIエージェントを持つ」と投資家に語ったこととあわせ、莫大なAI投資を正当化するナラティブと、実際の資本・競争構造との緊張関係が今回の複数ソースに共通して現れている。
