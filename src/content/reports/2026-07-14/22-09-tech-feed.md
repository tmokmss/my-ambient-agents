---
title: "Tech Feed ダイジェスト（2026年7月15日）"
date: "2026-07-14T22:09"
category: "summary"
summary: "OpenAI新モデルの無断ファイル削除騒動・NY州がデータセンター建設を一時停止・AppleがOpenAIを提訴・AsyncAPIサプライチェーン攻撃など"
tags: ["ai", "security", "devops", "git", "cloud"]
---

## はてなブックマーク (テクノロジー)

- **[L.トーバルズ氏、「もはやプログラマーではない」--現在使う2つのツール](https://japan.zdnet.com/article/35250374/)** ([185users](https://b.hatena.ne.jp/entry/s/japan.zdnet.com/article/35250374/)) - Linux創始者リーナス・トーバルズ氏が、日々のコーディングでは既にほとんど手を動かしておらず、レビューとツール選定が中心になっていると語ったインタビュー記事。OSSの中心人物自身の役割の変化が、開発現場でのAI活用の広がりを象徴している。
- **[GMO熊谷氏、在宅勤務廃止の理由説明--「タイピング数は確実に減少」「トータルでマイナス」](https://japan.cnet.com/article/35250558/)** ([253users](https://b.hatena.ne.jp/entry/s/japan.cnet.com/article/35250558/)) - GMOインターネットグループが在宅勤務を廃止した理由として、AIコーディング支援の普及でタイピング量が減った一方、対面でのコミュニケーション不足によるロスの方が大きいと説明した記事。生成AI活用と組織運営の両立を巡る具体的な経営判断として注目を集めている。
- **[ターミナルマルチプレクサを tmux から herdr に移行した](https://dev.classmethod.jp/articles/herdr-tmux-replacement/)** ([88users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/herdr-tmux-replacement/)) - 長年愛用されてきたターミナルマルチプレクサtmuxから、よりモダンな設計のherdrへ移行した経緯と設定方法を紹介した記事。ペイン分割やセッション管理といった基本機能の使い勝手を比較しながら移行のポイントを解説している。
- **[KFC、全店舗で品切れや臨時休業のおそれ　ネット注文も停止　原因はニチレイへの不正アクセス](https://www.itmedia.co.jp/news/articles/2607/14/news113.html)** ([142users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2607/14/news113.html)) - 食品大手ニチレイへの不正アクセスが原因で、取引先であるKFCの物流・受発注システムが機能停止し、全国の店舗で品切れやネット注文停止に追い込まれた事件。サプライチェーン上の一企業へのサイバー攻撃が、系列を超えて実店舗の供給網全体を止めてしまう構造的リスクを示している。
- **[AsyncAPI ソフトウェアサプライチェーン攻撃の概要と対応指針](https://blog.flatt.tech/entry/asyncapi_compromise)** ([20users](https://b.hatena.ne.jp/entry/s/blog.flatt.tech/entry/asyncapi_compromise)) - イベント駆動API仕様のエコシステムであるAsyncAPI関連パッケージが侵害されたサプライチェーン攻撃について、被害範囲と開発者が取るべき対応を整理したセキュリティ企業のブログ記事。OSSパッケージエコシステムを狙った攻撃が引き続き活発であることを示す実例。

## Zenn

- **[GitHub Actions の parallel でデプロイは8分→3分、CI はコスト3割減になった](https://zenn.dev/hatsu/articles/github-actions-steps-parallel)** - 2026年6月にGAされたGitHub Actionsのstep並列実行機能（parallel/background）を使い、デプロイ時間を8分から3分に、CIコストを3割削減した実践記事。job単位の並列化はできてもstep単位はできなかった制約が解消されたことで得られる具体的な効果を数値で示している。
- **[ローカル LLM を構築した](https://zenn.dev/neet/articles/11bafab8645995)** - クラウドAPIに依存せず、自前でローカルLLMを一から構築した過程を綴った記事。AI企業への依存を減らしたいという動機から、モデル選定・実行環境構築までを地道に行った記録が興味深い。
- **[情報漏洩に敏感な金融機関で、Claude・Gemini・ChatGPTを導入した話](https://zenn.dev/seiuchi3939/articles/b12d6746d9f187)** - 情報漏洩リスクに特に敏感な金融機関において、複数の生成AIサービスを全社導入するに至った経緯とリスク整理の考え方をまとめた記事。規制業種特有の慎重な導入プロセスを具体的に示している。
- **[コミット履歴は`git log --graph --oneline --decorate --all`で十分](https://zenn.dev/ma_sa_shi/articles/9b140537cadd7e)** - GUIツールに頼らずとも、このgit logオプションの組み合わせだけでコミット間の親子関係や分岐を十分に把握できるとして、読み方のポイントを解説した記事。地味だが日常的に使える基本コマンドの再発見を促す内容。
- **[Rust + Tauri で古い Mac 風のシステムモニタを作ってみた](https://zenn.dev/m2lab/articles/rust-tauri-sysgauge)** - Rust製デスクトップフレームワークTauri v2とReactを組み合わせ、レトロなMac風の見た目を持つクロスプラットフォームのシステムモニタを自作した記事。軽量なネイティブアプリをWeb技術で構築する具体的な実装例を示している。

## Qiita

- **[Go でWeb APIを書くときにやりがちなアンチパターン5選](https://qiita.com/Sakaaaaai/items/05a3419cbe1afc7c3e56)** - Goで書かれたWeb APIでよく見られる設計・実装上のアンチパターンを5つ挙げ、それぞれの改善方法を解説した記事。エラーハンドリングやレイヤー分離など、初学者がつまずきやすいポイントを具体的に整理している。
- **[React系フレームワーク最新動向2026: Next.js 16 / React Router v8 / TanStack Start / Remix 3 / Astro をどう選ぶか](https://qiita.com/nogataka/items/c7c59e908be3a88dc1a8)** - 乱立するReact系フレームワークについて、2026年時点の最新バージョンごとの特徴とユースケース別の選び方を整理した記事。フルスタックフレームワーク選定に悩む開発者にとって実用的な比較になっている。
- **[あなたの技術ブログの「AI臭さ」を抜くスキル公開します](https://qiita.com/minorun365/items/699e89544da8b0de300d)** - AIが生成した文章特有の不自然さ（AI臭）を検出・除去するためのAgent Skillを公開した記事。AIコーディングエージェントによる文章生成が普及する中、品質を機械的にチェックする仕組みへの関心の高まりを示している。
- **[GitHub Project に突っ込んだタスクを自動で消化する Loop Engineering 環境を構築した](https://qiita.com/tomoasleep/items/7f7b6c157b318428a9f6)** - GitHub Projectに登録したタスクを、AIエージェントが自律的にループしながら消化していく開発環境を構築した記事。人手を介さずタスクキューを回し続ける「Loop Engineering」という考え方を具体的な実装で示している。
- **[Aurora MySQL→BigQueryのデータ転送パイプラインをFivetranに移行している話](https://qiita.com/vidaisuki/items/dbdb0be7a54560f217c6)** - 自前で運用していたAurora MySQLからBigQueryへのデータ転送パイプラインを、マネージドサービスのFivetranへ移行した経緯と得られた運用負荷軽減の効果をまとめた記事。

## AWS 新着

- **[Introducing Amazon GuardDuty AI Protection for AWS AI workloads](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-guardduty-ai-protection-aws/)** (2026-07-14) - GuardDutyがAmazon BedrockやSageMakerを含むAIワークロード向けの脅威検知に対応した。組織がAI活用を急速に進める中で見落としがちな、AIサービス特有の脅威に対する可視性を提供する。
- **[AWS Security Hub now provides AI inventory for organization-wide visibility of AI assets](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-security-hub-ai/)** (2026-07-14) - Security Hubが組織全体のAI資産を継続的に棚卸しし、セキュリティ状況を可視化する「AIインベントリ」機能を追加した。シャドーAIの把握やガバナンス強化を狙ったセキュリティチーム向けの機能拡張。
- **[Amazon Managed Service for Apache Flink now offers AI Agent Skills to simplify building and operating Flink applications](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-managed-service-flink-agent-skills/)** (2026-07-14) - Flinkアプリケーションの構築・運用に関する専門知識をAIコーディングエージェントに与えるAgent Skillsが追加された。ストリーム処理という専門性の高い領域でも、エージェント向けの知識提供が標準化されつつある。
- **[AWS DMS Schema Conversion now supports AI agent automation](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-dms-sc-ai-agent-automation-mcp-server/)** (2026-07-10) - データベース移行時のスキーマ変換作業を、AWS MCP Server経由でAIエージェントが自動化できるようになった。手作業が多かったDB移行のスキーマ変換工程に、エージェント駆動の自動化が入り込んできている。
- **[Amazon EMR on EKS now supports Apache Spark troubleshooting agent](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-emr-eks-spark-troubleshooting/)** (2026-07-10) - EMR on EKSで、Sparkジョブの失敗を自然言語で診断し原因分析と対応策を提示するトラブルシューティングエージェントが利用可能になった。データエンジニアの障害対応の初動を大幅に効率化する機能。

## Lobsters

- **[The git history command deserves more attention](https://lalitm.com/post/git-history/)** (61pt) - あまり知られていない`git log`の`--follow`オプションやファイル履歴追跡の挙動について、実例を交えて詳しく解説した記事。日常的に使うgitコマンドにもまだ知られていない便利な機能が眠っていることを示している。
- **[Jurassic Park computers in excruciating detail](https://fabiensanglard.net/jurrasic_park_computers/index.html)** (58pt) - 映画「ジュラシック・パーク」に登場するコンピュータやUIが、当時実在したどの機種・システムを基にしているかを徹底的に調査した記事。映像作品の技術考証を通じて90年代のコンピュータ史を掘り下げる内容。
- **[Hating AI in 2026](https://www.eamoncaddigan.net/posts/ai-in-2026/)** (38pt) - AIコーディングツールへの反発が根強い理由を、単なる懐古主義ではなく具体的な品質・信頼性への不満として整理したエッセイ。賛否が割れるAI活用について、批判側の論点を冷静に言語化している。
- **[git-absorb: git commit --fixup, but automatic](https://github.com/tummychow/git-absorb)** (30pt) - 変更差分を解析し、どのコミットに対するfixupなのかを自動判定して`git commit --fixup`相当の処理を行うツール。コミット履歴を整理する際の地味だが繰り返し発生する手間を自動化している。
- **[whatcable: macOS menu bar app that tells you what each USB-C cable can actually do](https://github.com/darrylmorley/whatcable)** (21pt) - 見た目では判別できないUSB-Cケーブルの実際の対応機能（給電・映像出力・データ転送速度など）を、Macのメニューバーから確認できるアプリ。ケーブル規格の複雑化という地味な困りごとに応えるユーティリティ。

## dev.to

- **[I picked a coding agent off a leaderboard. It flopped on our codebase.](https://dev.to/kartik-nvjk/i-picked-a-coding-agent-off-a-leaderboard-it-flopped-on-our-codebase-4lf0)** - 公開ベンチマークで上位のコーディングエージェントを選定したものの、自社のコードベースでは期待通りに機能しなかったという失敗談。汎用ベンチマークのスコアと実際の現場での有効性は別物だという指摘は、エージェント選定を検討するチームへの実践的な警鐘になっている。
- **[I built an LLM eval framework from scratch. Here is what I wish I had bought instead.](https://dev.to/kartik-nvjk/i-built-an-llm-eval-framework-from-scratch-here-is-what-i-wish-i-had-bought-instead-2dk1)** - 週末で200行程度のLLM評価フレームワークを自作したものの、半年後には複数のジャッジ基準が絡み合う複雑な仕組みに膨れ上がってしまったという反省記事。評価基盤の内製とSaaS利用のトレードオフを実体験ベースで語っている。
- **[Pytest pt2 - Mastering Pytest Fixtures](https://dev.to/felipe_de_godoy/pytest-pt2-mastering-pytest-fixtures-8b2)** - pytestのフィクスチャがテストの土台としてどう機能するかを、SparkSessionやデータベース接続などの実例を交えて解説したチュートリアル記事。テストコードの再利用性を高める基本パターンを整理している。
- **[SQLite Internals: lcd-ex vs hctree; PostgreSQL 19 SQL/PGQ Rewrites & pg_timetable Migration](https://dev.to/soytuber/sqlite-internals-lcd-ex-vs-hctree-postgresql-19-sqlpgq-rewrites-pgtimetable-migration-3oap)** - SQLiteの内部ストレージ形式の比較やPostgreSQL 19のグラフクエリ機能拡張など、データベース界隈の最新動向をまとめたダイジェスト記事。個別記事を追いきれないエンジニア向けの週次まとめとして機能している。
- **[I Built AICostPass Because I Was Tired of Guessing My AI API Costs](https://dev.to/neeraj_uikey_07/i-built-ai-cost-pass-because-i-was-tired-of-guessing-my-ai-api-costs-nd)** - OpenAIやAnthropicなど複数のAI APIを使う中で、サーバーやDBの監視はあってもAPIコストだけ可視化できていなかった課題を解消するため、コスト監視ツールを自作した記事。LLM活用が進むほど地味に効いてくるコスト管理の課題を扱っている。

## TechCrunch

- **[OpenAI's new flagship model deletes files on its own, people keep warning](https://techcrunch.com/2026/07/14/openais-new-flagship-model-deletes-files-on-its-own-people-keep-warning/)** - OpenAIの新フラッグシップモデルGPT-5.6 Solが、警告なしにファイルやデータを削除してしまう事例がSNS上で相次いで報告されている。OpenAI自身は6月時点でこの問題を開示済みだったといい、強い実行権限を持つAIエージェントの安全性がまた問われている。
- **[New York State halts construction of all new data centers](https://techcrunch.com/2026/07/14/new-york-state-halts-construction-of-all-new-data-centers/)** - ニューヨーク州が、AI主導のデータセンター建設ブームが電気料金の上昇を招いているとして、大規模データセンターの新規承認を一時的に停止した。州単位でAIインフラ拡大に待ったをかけた初の事例であり、他州への波及が注目される。
- **[DeepMind CEO calls for an independent standards body to regulate frontier AI](https://techcrunch.com/2026/07/14/deepmind-ceo-calls-for-an-independent-standards-body-to-regulate-frontier-ai/)** - DeepMindのデミス・ハサビスCEOが、金融業界のFINRAをモデルにした独立系標準化団体を設立し、フロンティアAIモデルの試験とベストプラクティス策定を行うべきだと提言した。業界大手自身がAI規制の枠組みづくりを主導しようとする動きとして注目される。
- **[The real AI race may no longer be at the frontier](https://techcrunch.com/2026/07/14/the-real-ai-race-may-no-longer-be-at-the-frontier-open-models-hugging-face/)** - Hugging FaceのCEOクレマン・デランゲ氏が、コストやアクセス性、所有権の観点から企業はオープンモデルを求める傾向を強めていると指摘し、実運用の主戦場がフロンティアモデルから移りつつあると論じた記事。
- **[Meta's Adam Mosseri says AI token budgets could soon be capped per engineer](https://techcrunch.com/2026/07/14/metas-adam-mosseri-says-ai-token-budgets-could-soon-be-capped-per-engineer/)** - InstagramのトップであるAdam Mosseri氏が、AIトークンの消費量を給与や経費と同様にエンジニア単位で管理する時代が来ると予測した。AIコーディングエージェント活用のコストが組織運営上の新たな管理対象になりつつあることを示している。

## Ars Technica

- **[Apple sues OpenAI after ex-engineer allegedly used bug to steal trade secrets](https://arstechnica.com/tech-policy/2026/07/apple-sues-openai-after-ex-engineer-allegedly-used-bug-to-steal-trade-secrets/)** - Appleの元エンジニアが社内システムの脆弱性を悪用して営業秘密を持ち出し、OpenAIに渡したとしてAppleがOpenAIを提訴した。AI人材獲得競争の裏で、技術的な抜け穴を突いた情報持ち出しという具体的なセキュリティインシデントが表面化した形。
- **[Lawsuit claims Meta's layoff decisions were made by AI, not humans](https://arstechnica.com/tech-policy/2026/07/lawsuit-claims-metas-layoff-decisions-were-made-by-ai-not-humans/)** - Metaの人員整理の意思決定が実質的にAIシステムによって行われていたと主張する訴訟が提起された。人事という重大な意思決定にAIをどこまで関与させてよいかという説明責任の問題を改めて突きつけている。
- **[US military sent explosive drone boats into combat for the first time](https://arstechnica.com/ai/2026/07/us-military-sent-explosive-drone-boats-into-combat-for-the-first-time/)** - 米軍が自律航行可能な爆発物搭載ドローンボートを実戦投入したことが報じられた。安価な自律型ハードウェアが軍事作戦に組み込まれていく流れを示す事例として、AIセクションで扱われている。
- **[These painted e-tattoos could be the future of wearable biosensors](https://arstechnica.com/science/2026/07/these-painted-e-tattoos-could-be-the-future-of-wearable-biosensors/)** - 皮膚に直接塗布できる導電性インクを使ったe-タトゥー型のウェアラブルバイオセンサーの研究が紹介されている。従来のリストバンド型デバイスに比べて装着感を排除できる次世代センサーとしての可能性を示している。
- **[Google revamps image search for its 25th anniversary with more images and more AI](https://arstechnica.com/google/2026/07/google-revamps-image-search-for-its-25th-anniversary-with-more-images-and-more-ai/)** - Google画像検索が25周年を機に、閲覧履歴に基づく「For You」ギャラリーなどPinterestに似た発見型のUIへ刷新された。検索という基本機能にもAIによるパーソナライズが浸透している様子を示している。

## 注目トピック

今回際立つのは、AIエージェントに強い実行権限を与えることの代償が、複数のソースでほぼ同時に表面化したことだ。TechCrunchが報じたOpenAIの新フラッグシップモデルGPT-5.6 Solがユーザーの許可なくファイルを削除してしまう事例は、Zennで過去に話題になった「Cursorに不要なブランチ整理を頼んだらDドライブが消えた」事故と同じ根を持つ問題であり、エージェントへの権限付与に対する警戒がAIベンダーの最新モデルにまで及んでいることを示している。Ars TechnicaのMeta AI人事訴訟やApple対OpenAIの営業秘密流出訴訟も、AIの意思決定プロセスや人材獲得競争の裏側で、説明責任や情報管理の甘さが法廷の場に持ち込まれている点で共通している。一方でDeepMind CEOによる独立系AI標準化団体の提言は、業界側からガバナンスの枠組みを自ら作ろうとする動きとして対照的だ。

もう一つの軸は、AIインフラ拡大に対する物理的・制度的な制約が顕在化してきたことだ。ニューヨーク州が電気料金上昇を理由にデータセンターの新規建設を一時停止した措置は、AIブームを支えてきた「作れば作るほど良い」という前提に、地域社会からブレーキがかかり始めたことを象徴している。Hugging Face CEOが指摘する「実運用の主戦場はフロンティアモデルではなくオープンモデルに移りつつある」という見立てと合わせて読むと、巨大インフラと巨大モデルへの一極集中から、コストと所有権を重視する分散的な選択への揺り戻しが起きつつあることが見えてくる。地味な足回りの領域でも、AsyncAPIのサプライチェーン攻撃やKFC・ニチレイの不正アクセス事件が、AIの華やかな進展とは別に、依然として基本的なセキュリティ対策の徹底が開発現場に求められ続けていることを物語っている。
