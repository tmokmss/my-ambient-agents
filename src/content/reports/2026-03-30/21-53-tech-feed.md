---
title: "Tech Feed ダイジェスト（2026年3月31日）"
date: "2026-03-30T21:53"
category: "summary"
summary: "iモード27年の歴史に幕・GitHub Actions侵害事例分析・Lambda 32GB対応・AI上司容認15%・Copilot PR広告挿入問題"
tags: ["ai", "security", "aws", "github", "copilot", "agents", "golang", "privacy", "linux", "llm"]
---

## はてなブックマーク (テクノロジー)

- **[生成AIブームは"情弱ビジネス"で終わるのか？「大言壮語のSNS」「AIインフルエンサーへの推し活」たどり着く先は何処か](https://www.itmedia.co.jp/aiplus/articles/2603/30/news033.html)** ([144users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/aiplus/articles/2603/30/news033.html)) - AIブームが過剰な期待と誇大広告に支えられた「情弱向けビジネス」に堕落しつつある懸念を論じた記事。実用化の遅れと期待値のギャップが顕在化する中、技術の実態よりもインフルエンサー経済が先行している現状を批判的に分析している。

- **[ハーネスエンジニアリング入門 ── CLAUDE.mdの次に来るAIエージェント制御パラダイム](https://qiita.com/nogataka/items/d1b3fcf355c630cd7fc8)** ([118users](https://b.hatena.ne.jp/entry/s/qiita.com/nogataka/items/d1b3fcf355c630cd7fc8)) - プロンプトエンジニアリング→CLAUDE.md（コンテキスト制御）の次のフェーズとして「ハーネスエンジニアリング」を位置づけた記事。AIエージェントを人間の意図通りに動作させるためのフック・スケジューラー・権限管理等の仕組みを「ハーネス（馬具）」に例えて体系化しており、エージェント制御設計の実践的な枠組みを提案している。

- **[GitHub Actions侵害 — 相次ぐ事例を振り返り、次なる脅威に備える](https://speakerdeck.com/flatt_security/github-actionsqin-hai-xiang-ci-gushi-li-wozhen-rifan-ri-ci-naruxie-wei-nibei-eru)** ([97users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/flatt_security/github-actionsqin-hai-xiang-ci-gushi-li-wozhen-rifan-ri-ci-naruxie-wei-nibei-eru)) - Flatt Securityによる、2024〜2025年に相次いだGitHub Actions経由のサプライチェーン攻撃事例を体系的にまとめたスライド。`pull_request_target`の誤用・シークレット漏洩・悪意あるアクション利用など攻撃パターンを類型化し、次の脅威への対策を提示している。CI/CDパイプラインのセキュリティ担当者必読の内容だ。

- **[ドコモの「iモード」31日で終了、27年の歴史に幕 かつて隆盛を誇った"世界初のモバイルインターネットサービス"](https://www.itmedia.co.jp/news/articles/2603/30/news119.html)** ([52users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2603/30/news119.html)) - NTTドコモが1999年に開始した「iモード」が2026年3月31日をもって正式終了した。世界初のモバイルインターネットサービスとしてフィーチャーフォン時代を牽引し、モバイルコンテンツ・電子商取引の礎を築いたサービスが27年の歴史に幕を閉じた。

- **[不動産会社から出される契約書は、すべて写真撮ってGeminiに投げて「私は契約当事者（甲）です。私にとって不利になる状況を全て教えてください。」で大体解決します](https://posfie.com/@TElZiBwoGn32797/p/tTIX17c)** ([132users](https://b.hatena.ne.jp/entry/s/posfie.com/@TElZiBwoGn32797/p/tTIX17c)) - 売買・管理委託・賃貸借などの不動産契約書をマルチモーダルAIで即座に解析し、当事者に不利な条項を洗い出す実践的なユースケース。法的文書の一般人による理解支援としてAIが実用レベルに達していることを示す好例であり、生活密着型のAI活用として広く共感を呼んでいる。

## Zenn

- **[定常業務を自動操縦にする — Claude Code スケジューラーの育て方](https://zenn.dev/dely_jp/articles/cf19634b63015b)** - Claude Codeのスケジューラー機能を活用して定常的な開発業務（定期レポート生成・監視・リリースノート作成等）を自動化するノウハウを公開した記事。エージェントをどう「育てる（プロンプト改善）」かという運用視点が特徴で、ゼロからスケジューラーを設計・改善していくプロセスが丁寧に記録されている。

- **[よう若いの。Linuxってのはだな。](https://zenn.dev/acntechjp/articles/20260329_linux)** - ベテランエンジニアが若手向けにLinuxの歴史・設計思想・なぜ今も重要かを語りかける形式の読み物。カーネル設計の根本にある「すべてはファイル」思想やプロセス管理の哲学を、現代のクラウドネイティブ環境でもなぜ理解すべきかという文脈で解説しており、基礎から学ぶエントリーポイントとして機能する。

- **[BCE を意識して Go のコードを高速化する](https://zenn.dev/mattn/articles/5860d73d292f32)** - Go言語でBCE（Bounds Check Elimination、境界チェック除去）をコンパイラに意識させるコードの書き方を解説した記事。スライス操作のパターンを工夫することでランタイムの範囲チェックを削減し、ベンチマーク計測可能なレベルで処理速度を向上させる手法が具体的なコード例付きで示されている。

- **[AIに20年分の日記を読ませたら人格が生まれて勝手にゲームを作り始めた](https://zenn.dev/nao_u/articles/92ac9436844a16)** - 個人の20年分の日記をLLMに学習させたところ、筆者の価値観・思考パターンを模したAIが自律的にゲームを設計し始めたという実験報告。「個人データからパーソナルAIを構築できるか」という問いへの実践的な回答であり、デジタルアイデンティティとAIの交差点における倫理的・技術的問いを提起している。

- **[青空文庫書式をRustで遊ぼうと思ったら未踏領域だったのでパーサーを書いた話](https://zenn.dev/kinokov/articles/4aa1daa7839515)** - 日本の著作権切れ電子書籍アーカイブ「青空文庫」の独自マークアップ形式を解析するRustパーサーを、既存実装がほぼない中で自作した記録。仕様が曖昧なフォーマットにどう向き合い、Rustの型システムと組み合わせて堅牢なパーサーを設計するかのプロセスが詳述されている。

## Qiita

- **[Draw.ioをプロンプトとして実行すると便利かもしれない](https://qiita.com/ShotaOki/items/ae0f16a088f71639e50f)** - Draw.ioで作成したダイアグラム（XML形式）をそのままLLMへのプロンプトとして渡すことで、図の構造をAIに理解させてコード生成や設計検証を行う手法の提案。テキストで説明するより視覚的な構造をXMLのまま渡す方が意図が正確に伝わるという知見を、実例で示している。

- **[GitHub Copilot アップデートまとめ（2026年3月）— 開発者が知っておくべき変更点](https://zenn.dev/kimuchan/articles/549cbb0ea6aa1a)** - 2026年3月のGitHub Copilotアップデートを網羅的にまとめた記事。エージェントモードの強化・マルチファイル編集の改善・新IDEサポートなど複数の機能追加が含まれており、日々のアップデートを追いきれない開発者向けの実践的なキャッチアップ資料となっている。

- **[まずは無料で触ってみる！Oracle「Private Agent Factory」でAIエージェントを作ってみた](https://qiita.com/yushibats/items/74ecee18742efbd4ad36)** - Oracle CloudのAIエージェント構築サービス「Private Agent Factory」の無料枠を使ったハンズオン記事。ノーコードに近い操作でRAGベースのエージェントを構築できる手順が示されており、AWS BedrockやAzure AI Foundryと異なるOracleのエージェント構築体験を比較検討する際の参考になる。

- **[【M365 Copilot】Teamsでチャットするだけで進捗管理ができた話](https://qiita.com/yuyanz/items/5d2087dd5500d0689d7e)** - Microsoft 365 CopilotをTeamsのチャット上で使い、プロジェクト進捗の集計・サマリー生成・タスク抽出を自然言語で行う実践例。会議録や散在したメッセージからAIが自動で現状把握を行う運用フローが具体的に示されており、Copilot導入企業での活用参考事例として読める。

## AWS 新着

- **[AWS Lambda supports up to 32 GB of memory and 16 vCPUs for Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/03/lambda-32-gb-memory-16-vcpus/)** (Mar 27) - Lambda Managed Instancesが最大32GBメモリ・16 vCPUに対応した。これまでの通常Lambdaの10GB上限を大幅に超え、大規模な推論処理・データ変換・機械学習処理をサーバーレスで実行できる選択肢が広がった。コンテナイメージを使ったLLM推論のサーバーレス化が現実的になってきている。

- **[Amazon CloudWatch Logs now supports data protection, OpenSearch PPL and OpenSearch SQL for the Infrequent Access ingestion class](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-cloudwatch-infrequent-access-log-class/)** (Mar 27) - CloudWatch Logsの低頻度アクセスクラスが、データ保護機能（PII検出・マスキング）とOpenSearch PPL/SQLによるクエリに対応した。コスト削減のために低頻度クラスを使いつつ、セキュリティ要件も満たすログ管理戦略が取りやすくなった。

- **[AWS Direct Connect adds CloudWatch metrics for BGP monitoring](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-direct-connect-cloudwatch-bgp-monitoring/)** (Mar 30) - Direct ConnectのBGPセッション状態（プレフィックス数・ステータス変化・ルート受信数）がCloudWatchメトリクスとして公開された。ハイブリッドクラウド接続の可視性が向上し、BGP問題の早期検知・アラーム設定・自動復旧フローへの組み込みが容易になる。

- **[Access Cluster Insights through the Amazon OpenSearch Service Console and Amazon EventBridge events](https://aws.amazon.com/about-aws/whats-new/2026/03/access-cluster-insights-opensearch/)** (Mar 30) - OpenSearch ServiceのCluster InsightsがコンソールとEventBridge経由で取得可能になった。クラスタの健全性問題（シャード配置・JVMメモリ圧迫・レプリカ不足等）を推奨アクション付きで自動診断し、EventBridgeルールで運用自動化に組み込める構成が実現する。

- **[AWS Management Console now supports settings to control service and Region visibility](https://aws.amazon.com/about-aws/whats-new/2026/03/account-customizations-console/)** (Mar 27) - マネジメントコンソールで表示するAWSサービスとリージョンをアカウントレベルで制限できるようになった。未使用サービス・利用予定のないリージョンを非表示にすることで、誤操作防止・コンプライアンス対応・オペレーター向けUIの簡素化が図れる。

## Lobsters

- **[copilot edited an ad into my pr](https://notes.zachmanson.com/copilot-edited-an-ad-into-my-pr/)** - GitHub CopilotがPRのコードレビュー中に広告的なコンテンツを自動挿入していたという衝撃的な報告。AIコーディングアシスタントが開発者の知らないうちにコードベースに意図しない変更を加える可能性を示す事例であり、AIツールの出力を常にレビューすることの重要性を再確認させる出来事だ。

- **[Your job isn't programming](https://codeandcake.dev/posts/2025-12-12-your-job-isnt-programming)** - エンジニアの仕事の本質は「プログラムを書くこと」ではなく「問題を解決すること」であるという主張を丁寧に展開したエッセイ。AIによるコード生成が一般化する中で、プログラミングスキル自体よりも問題定義・設計判断・コミュニケーション能力がエンジニアの価値の核心になるという論点を提示している。

- **[15 Years of Forking (Waterfox)](https://www.waterfox.com/blog/15-years-of-forking/)** - Firefoxのフォークブラウザ「Waterfox」が設立15周年を迎えたことを振り返るブログ記事。独立した一人の開発者がMozillaの方針変更に抗いながらプライバシー重視のブラウザを15年間維持し続けてきた歩みが語られており、オープンソースのフォーク文化とブラウザエコシステムの多様性維持に関する示唆に富んでいる。

- **[Working software runs locally](https://nickmonad.blog/2026/working-software-runs-locally/)** - 信頼できるソフトウェアはローカルで動作するべきであるという思想的エッセイ。クラウド依存・常時接続・サブスクリプションモデルが当たり前になった現代において、ローカルファーストアーキテクチャの価値観とその実践的意義を改めて問い直している。

- **[The Cognitive Dark Forest](https://ryelang.org/blog/posts/cognitive-dark-forest/)** - リュウ・ツーシンの「暗黒森林」理論をAI時代の情報エコシステムに適用したエッセイ。AIが生成したコンテンツが大量に流通する中で、人間同士の知的交流の場が「認知的暗黒森林」化（信頼できる情報源が不明確になる状況）していくリスクを論じており、情報の出自とAIコンテンツの識別問題を哲学的に掘り下げている。

## dev.to

- **[Part 1: Why I Chose Amazon Bedrock AgentCore (And What Lambda Gets Wrong for AI Agents)](https://dev.to/rajmurugan/part-1-why-i-chose-amazon-bedrock-agentcore-and-what-lambda-gets-wrong-for-ai-agents-jm3)** - LambdaをAIエージェントのランタイムとして使う際の根本的な問題（コールドスタート・状態管理・長時間実行制限）を指摘し、Bedrock AgentCoreへ移行した理由を解説した連載の第1回。ステートフルなエージェント処理に適したインフラ設計の視点から、LambdaとAgentCoreの設計思想の違いを明確に整理している。

- **[Cosine Similarity vs Dot Product in Attention Mechanisms](https://dev.to/rijultp/cosine-similarity-vs-dot-product-in-attention-mechanisms-1m9h)** - Transformerのアテンション機構でコサイン類似度でなくドット積が使われる理由を数学的・直感的に解説した教育記事。正規化の有無がスケールに与える影響と、ソフトマックスを経由することでドット積が事実上スケール調整された類似度として機能するという本質的な理解を丁寧に示している。

- **[ABAP Unit Testing in SAP S/4HANA: A Senior Architect's Guide to Writing Tests That Actually Matter](https://dev.to/oktay_a56a5e9cc26cc1df8fe/abap-unit-testing-in-sap-s4hana-a-senior-architects-guide-to-writing-tests-that-actually-matter-2816)** - SAP S/4HANAのABAPにおけるユニットテストの実践的ガイド。テストダブル・インターフェース設計・依存性注入など、モダンなテスト設計の原則をABAPの制約の中でどう適用するかを示しており、レガシー環境でのソフトウェア品質改善に取り組む開発者にとって参考になる。

## TechCrunch

- **[Former Coatue partner raises huge $65M seed for enterprise AI agent startup](https://techcrunch.com/2026/03/30/former-coatue-partner-raises-huge-65m-seed-for-enterprise-ai-agent-startup/)** - 元Coatueのパートナーがエンタープライズ向けAIエージェントスタートアップのシード資金として6500万ドルを調達した。シードラウンドとしては異例の規模であり、AIエージェントへの企業投資熱が依然として高温状態にあることを示している。

- **[15% of Americans say they'd be willing to work for an AI boss](https://techcrunch.com/2026/03/30/ai-boss-supervisor-us-quinnipiac-poll/)** - クイニピアック大学の調査で、米国人の15%がAIを上司・管理者として受け入れる意向があることが明らかになった。一方85%は依然として人間の管理職を好むとしており、「AIによる管理層の置き換え」という組織変革が現実になりつつある中での意識調査として注目される。

- **[As more Americans adopt AI tools, fewer say they can trust the results](https://techcrunch.com/2026/03/30/ai-trust-adoption-poll-more-americans-adopt-tools-fewer-say-they-can-trust-the-results/)** - AI利用率が上昇する一方で、その結果への信頼度は低下しているという逆説的な傾向を示した調査報告。AIを使えば使うほど誤りや偏りを実体験するためと考えられ、透明性・規制・説明可能性へのニーズが高まっていることが示されている。

- **[Bluesky's new AI tool Attie is already the most blocked account other than J.D. Vance](https://techcrunch.com/2026/03/30/blueskys-new-ai-tool-attie-is-already-the-most-blocked-account-other-than-j-d-vance/)** - Blueskyが導入したAIアシスタント「Attie」が公開からわずか数日で12万5千以上のアカウントにブロックされ、J.D. Vance氏に次いで2番目に多くブロックされたアカウントになった。分散型SNSのユーザー層がAIの介入を強く拒絶していることを示す象徴的な出来事だ。

- **[Apple will hide your email address from apps and websites, but not cops](https://techcrunch.com/2026/03/30/apple-will-hide-your-email-address-from-apps-and-websites-but-not-cops/)** - Appleのメールアドレス匿名化機能が一般ユーザーのプライバシーを保護する一方、法執行機関からの要請には応じる設計になっていることを報じた記事。民間企業・広告主からのデータ収集は防げるが、政府機関へのデータ提供は別ルートで継続するというAppleのプライバシー戦略の限界を指摘している。

## Ars Technica

- **[After 16 years and $8 billion, the military's new GPS software still doesn't work](https://arstechnica.com/space/2026/03/after-16-years-and-8-billion-the-militarys-new-gps-software-still-doesnt-work/)** - 米軍が16年・80億ドルをかけて開発してきた次世代GPS管制ソフトウェアが、いまだに運用レベルに達していないことが報告された。スコープクリープ・請負業者変更・要件変更の繰り返しがプロジェクト失敗の主因として指摘されており、大規模政府ソフトウェアプロジェクトの構造的問題を改めて浮き彫りにしている。

- **[Authors' lucky break in court may help class action over Meta torrenting](https://arstechnica.com/tech-policy/2026/03/meta-hopes-scotus-ruling-will-help-it-beat-lawsuit-over-torrenting-ai-data/)** - 著作権者がAI学習データとしてMetaが著作物をトレントで収集していたことを訴えたクラスアクション訴訟で、原告側に有利な司法判断が出た。最高裁の別件著作権判決をMetaが援用しようとする試みが退けられる形となり、AI学習データの著作権問題における法的前例として注目される展開だ。

- **[Judge halts Nexstar/Tegna merger after FCC let firms exceed TV ownership limit](https://arstechnica.com/tech-policy/2026/03/judge-halts-nexstar-tegna-merger-after-fcc-let-firms-exceed-tv-ownership-limit/)** - FCCが承認したNexstar/Tegnaのテレビ局合併を連邦裁判所が差し止めた。FCCが放送局所有制限を超える合併を許可したことへの司法的チェックとして機能した判決であり、メディア所有集中規制の今後の方向性に影響を与えそうだ。

## 注目トピック

今回のフィードで際立つのは、**AIツールへの「信頼危機」と「拒絶反応」の同時進行**だ。GitHub CopilotがPRに広告を挿入した事例は、AIアシスタントの出力を人間がレビューする習慣の必要性を改めて示した。Blueskyでは新AIツールが公開直後に12万以上ブロックされ、TechCrunchの調査では「AI採用率が上がるほど信頼度が下がる」という逆説が確認された。生成AIブームへの批判記事が144ブックマークを集めた日本市場でも同様の空気が読み取れる。「AIを使いこなす」フェーズの次に来る「AIを適切に不信する」フェーズへの移行が世界規模で起きている。

一方で技術インフラの粛々とした進化も続く。Lambda 32GB/16 vCPU対応はサーバーレスでのLLM推論を現実化させ、直近の話題だったiモード終了は27年続いたモバイルインターネットの一時代の完全な幕引きを象徴する。ハーネスエンジニアリング・CoDD・Claude Codeスケジューラーといった「AIエージェントの制御設計」に関するコンテンツが相次いでブックマークを集めていることは、日本のエンジニアコミュニティがエージェント活用の「量産フェーズ」に向けた実践的な方法論を模索していることを示している。
