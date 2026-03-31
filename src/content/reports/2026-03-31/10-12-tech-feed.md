---
title: "Tech Feed ダイジェスト（2026年3月31日）"
date: "2026-03-31T10:12"
category: "summary"
summary: "axiosサプライチェーン攻撃・Claude Code 100スキル実践記・Rust次世代トレイトソルバー・LiteLLM/Delve騒動・ポスト量子暗号移行"
tags: ["security", "supply-chain", "rust", "ai", "claude-code", "aws", "css", "quantum", "llm", "devops"]
---

## はてなブックマーク (テクノロジー)

- **[【緊急】axios がサプライチェーン攻撃 2026.03.31](https://zenn.dev/gunta/articles/0152eadf05d173)** ([197users](https://b.hatena.ne.jp/entry/s/zenn.dev/gunta/articles/0152eadf05d173)) - npmの超定番HTTPクライアント「axios」が改ざんされ、悪意あるバージョンがリモートアクセストロイを含む状態で配布されていた緊急事態。本日3月31日に発覚・公表されており、npm依存プロジェクト全般でのバージョン確認と即時対応が求められている。

- **[axios ソフトウェアサプライチェーン攻撃の概要と対応指針 - GMO Flatt Security Blog](https://blog.flatt.tech/entry/axios_compromise)** ([69users](https://b.hatena.ne.jp/entry/s/blog.flatt.tech/entry/axios_compromise)) - Flatt Securityによるaxios侵害の技術的詳細解説。影響バージョンの特定・安全なバージョンへのダウングレード手順・CIパイプラインでの対処方法を網羅しており、今すぐ参照すべき一次情報として機能する。

- **[日本人を安売りしてる奴らへ | blog](https://ryoppippi.com/blog/2026-03-30-japan-engineer-ja)** ([121users](https://b.hatena.ne.jp/entry/s/ryoppippi.com/blog/2026-03-30-japan-engineer-ja)) - 日本のエンジニアが自分たちのスキルと労働を過小評価・低価格で提供し続けることへの問題提起。国際市場での評価と乖離する日本エンジニア市場の賃金水準を批判的に論じており、自己評価とキャリア戦略を見直す契機となる論考だ。

- **[情報処理技術者試験及び情報処理安全確保支援士試験の見直しの検討状況について | IPA](https://www.ipa.go.jp/shiken/syllabus/henkou/2025/20260331.html)** ([104users](https://b.hatena.ne.jp/entry/s/www.ipa.go.jp/shiken/syllabus/henkou/2025/20260331.html)) - IPAが情報処理技術者試験の大幅見直しを検討中であることを公表した。AI・クラウド・セキュリティ分野の比重増加や出題形式の刷新が示唆されており、試験勉強中の受験者・企業内の資格取得支援担当者は動向を注視する必要がある。

- **[GitHub - openai/codex-plugin-cc: Use Codex from Claude Code to review code or delegate tasks.](https://github.com/openai/codex-plugin-cc)** ([52users](https://b.hatena.ne.jp/entry/s/github.com/openai/codex-plugin-cc)) - OpenAIがClaude Code上でCodexを使えるようにするプラグインを公式リリースした。競合他社のIDEツールに対してプラグインを提供するという異例の動きであり、ユーザー囲い込みよりもエコシステム参加を優先するOpenAIの戦略転換として注目される。

## Zenn

- **[Claude Codeで100個のSkillを育てた全記録 ── コンテキストエンジニアリング実践4ヶ月の軌跡](https://zenn.dev/takuyanagai0213/articles/claude-code-100-skills-full-record)** - Claude Codeのスキル（再利用可能なプロンプトモジュール）を4ヶ月かけて100個構築した実践的な全記録。スキル設計の試行錯誤・命名規則・管理方法・効果的だったパターンが詳細に記録されており、エージェント開発者にとって参照価値の高い知識ベースとなっている。

- **[Goにはなぜ例外がないのか](https://zenn.dev/tokium_dev/articles/2026-03-30-go-errors)** - GoがJavaやPythonとは異なり例外機構を持たない設計判断の背景と、`error`型による明示的エラー返却パターンがもたらす恩恵を解説した記事。エラーを「値」として扱う設計思想が制御フローの予測可能性・可読性にどう貢献するかを具体例で示しており、Go入門者の誤解を解く良質な解説だ。

- **[ユニットテストは2種類ある。AI時代に壊れないテスト設計](https://zenn.dev/headwaters/articles/579d5f94907dcd)** - 「ロンドン学派（モック多用・振る舞いテスト）」と「デトロイト学派（実装テスト・状態検証）」という2つのユニットテスト哲学を整理し、AI生成コードが増える時代にどちらのアプローチがリファクタリングに強いかを論じた実践的考察。

- **[完全自律のコーディングパイプラインを作った](https://zenn.dev/theaktky/articles/5f9f18c34950c1)** - 人間の介入なしにIssueから実装・テスト・PRまでを自律的に完結するコーディングパイプラインの構築報告。エージェント間の連携設計・失敗時のフォールバック処理・コスト管理のノウハウが共有されており、AIエージェント自動化の現在地を示す実装例として参照価値が高い。

- **[React やだ 2026](https://zenn.dev/mnonamer/articles/react-yada-2026)** - 2026年現在のReactに対する不満を技術的根拠とともに整理した記事。Server Components・Concurrent Modeの複雑性増大・学習コストの高止まりなど、フロントエンドエンジニアが日々感じる摩擦を率直に言語化しており、フレームワーク選定の議論材料として注目を集めている。

## Qiita

- **[ポスト量子暗号への移行に向けて、何から始めるべきなんだろう](https://qiita.com/ssc-yshikeda/items/58bd7ec792eb1b0ded52)** - NIST標準化が完了したML-KEM・ML-DSAへの移行手順と、既存システムへの影響範囲を整理した実践的ガイド。TLS・SSH・証明書インフラそれぞれで何をいつまでに対応すべきかのロードマップが示されており、セキュリティ担当者が計画策定の起点にできる内容だ。

- **[Pythonで実装して理解する RDBパフォーマンスチューニング入門 ─ フルスキャンとインデックスの仕組み](https://qiita.com/take-yoda/items/ecc6e9b174b2e5e97406)** - SQLのフルテーブルスキャンとインデックス走査の内部動作をPythonで模擬実装しながら理解する教育記事。「なぜインデックスが速いのか」を概念ではなくコードで示す手法が秀逸で、DBチューニング初学者の直感的理解を助ける。

- **[Claude CodeからFigmaを操作できるようになったので試してみた](https://qiita.com/kobayashimakoto/items/357add591df55fee1585)** - Claude CodeのMCP連携でFigmaデザインデータを読み書きできるようになった機能の検証記事。デザイントークンの自動生成・コンポーネント構造の解析などデザイン-実装間のギャップを埋めるユースケースが実演されており、デザインシステム運用の自動化可能性を示している。

- **[100行のCLAUDE.mdより35行が効く理由 — 公式仕様で解く設定の最適化](https://qiita.com/nogataka/items/d6c83ea50b82e1c2602c)** - Claude CodeのCLAUDE.mdは長くすれば良いわけではなく、公式仕様に基づいてコンテキスト効率を最大化する書き方があることを実験で示した記事。冗長な記述が逆に精度を下げるメカニズムと、簡潔な指示セットの設計原則が解説されている。

- **[【35歳未経験でも理解できた】破綻しないCSS設計の基本](https://qiita.com/wata-sho/items/81ddcadc785a6498d10f)** - BEM・FLOCSS・CSSモジュールなどのCSS設計手法を未経験者視点でわかりやすく整理した解説記事。命名規則の理由・ファイル分割の指針・スコープ管理の考え方が実例とともに示されており、CSS設計への入口として機能する。

## AWS 新着

- **[Amazon CloudWatch now supports multi-account and region log centralization based on data source](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-centralization-datasource/)** (Mar 30) - CloudWatchのログ集約機能がデータソース単位での複数アカウント・リージョンにまたがる集中管理に対応した。マルチアカウント構成の大企業でログ分析基盤を一元化する際のコスト・複雑性が大幅に低減される。

- **[AWS Security Hub is now available in AWS GovCloud (US) Regions](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-security-hub-govcloud-us-regions/)** (Mar 30) - Security Hubが米国政府クラウド（GovCloud）に展開された。連邦機関・防衛関連企業が規制準拠環境でのセキュリティ体制統合に同サービスを利用できるようになり、コンプライアンス管理の自動化が進む。

- **[Amazon SageMaker Data Agent is now available in the Amazon SageMaker Unified Studio Query Editor](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-sagemaker-data-agent-query-editor/)** (Mar 30) - SageMakerのData AgentがUnified StudioのQuery Editorに統合された。自然言語でデータ探索クエリを生成・実行できるようになり、データサイエンティストがSQLを直接書かずに大規模データセットを調査する体験が改善される。

- **[AWS Direct Connect adds CloudWatch metrics for BGP monitoring](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-direct-connect-cloudwatch-bgp-monitoring/)** (Mar 30) - Direct ConnectのBGPセッション状態（受信プレフィックス数・ステータス変化）がCloudWatchメトリクスとして公開された。ハイブリッドクラウド接続の可視性が向上し、BGP異常の早期検知と自動復旧フローへの組み込みが容易になる。

- **[AWS HealthOmics introduces VPC-connected workflows](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-healthomics-vpc-connected-workflows/)** (Mar 30) - HealthOmicsのバイオインフォマティクスパイプラインがVPC内のプライベートリソース（オンプレデータベース・社内サービス）に接続できるようになった。医療ゲノムデータのネットワーク分離要件を維持しながらパイプラインを構成できる。

## Lobsters

- **[Supply Chain Attack on Axios](https://socket.dev/blog/axios-npm-package-compromised)** - Socket.devによるaxios侵害の技術的詳細分析。悪意あるコードがどのようにパッケージに注入されたか・影響を受けるバージョンの正確な範囲・検知方法が解説されており、はてブの関連記事と合わせて読む価値がある。npm配布インフラへの信頼性問題を改めて浮き彫りにした。

- **[Why have supply chain attacks become a near daily occurrence?](https://lobste.rs/s/nz2wdr/why_have_supply_chain_attacks_become_near)** - サプライチェーン攻撃がほぼ毎日発生するようになった根本原因を考察するディスカッション。npm/PyPIのパッケージ管理モデルの脆弱性・メンテナーへの信頼に依存しすぎたエコシステム・攻撃者の利益構造が論点となっており、axiosの件を受けてタイムリーな議論が展開されている。

- **[Rust's next-generation trait solver](https://lwn.net/SubscriberLink/1063124/81483612b1c8a493/)** - Rustの次世代トレイトソルバー（`-Znext-solver`）についてLWNが詳解した記事。既存ソルバーの限界（GATs・高階トレイト境界などの複雑なケースでのコンパイルエラー）を解消し、型推論の精度と速度を向上させる設計が紹介されている。Rustコンパイラの根幹部分の大改修として注目される。

- **[Okapi, or "What if ripgrep Could Edit?"](https://kocharhook.com/post/6/)** - ripgrepの高速パターン検索にsed/awkのような編集機能を組み合わせた新ツール「Okapi」の紹介。コードベース全体に渡る複雑なリファクタリング操作を正規表現ベースで実現する方向性であり、開発者の日常的なテキスト変換ワークフローを高速化する可能性を持つ。

- **[Claude finds RCE in Vim and Emacs](https://blog.calif.io/p/mad-bugs-vim-vs-emacs-vs-claude)** - ClaudeがVimおよびEmacsにリモートコード実行（RCE）脆弱性を発見したという報告。AIを用いた脆弱性探索が成熟したツールに対してすら有効であることを示しており、AIによる自動セキュリティ監査の実用化が進むことへの期待と懸念の両面を提起している。

## dev.to

- **[Is Cursor Safe? I Scanned 100 Apps. 67% Had Critical Vulns.](https://dev.to/tgoldi/is-cursor-safe-i-scanned-100-apps-67-had-critical-vulns-39ml)** - AIコーディングアシスタント「Cursor」で生成された100のアプリを静的解析したところ67%に深刻な脆弱性が含まれていたという調査報告。SQLインジェクション・ハードコードされた認証情報・不適切なAPIキー管理などが多発しており、AIコード生成ツールのセキュリティレビュー必須度を改めて示す結果だ。

- **[SCSS Is Solving Problems CSS Is Learning to Solve Itself](https://dev.to/ouvarov/scss-is-solving-problems-css-is-learning-to-solve-itself-3cgf)** - CSS ネイティブ変数（カスタムプロパティ）・カスケードレイヤー・ネスト記法など、SCSSが独占してきた機能がCSSに取り込まれつつある現状を整理した記事。SCSSの存在意義が縮小しつつある中でも複雑なミックスイン・関数・コンパイル時計算などは依然としてSCSSの独自領域として残ることが論じられている。

- **[Why Your AWS RDS Bill Keeps Increasing: Here's What No One Tells You (2026)](https://dev.to/somyahallan/why-your-aws-rds-bill-keeps-increasing-heres-what-no-one-tells-you-2026-2om7)** - AWS RDSコスト増加の非自明な原因（リードレプリカのストレージ同期コスト・スナップショット保持期間・Performance Insights有効化の影響等）を詳解した実践記事。プロダクト成長に伴ってRDS費用が想定外に膨らむパターンを事前に把握できる内容だ。

- **[Handling Sensitive UI Data in React Native: Practical Approaches Across iOS and Android](https://dev.to/rushikeshpandit/handling-sensitive-ui-data-in-react-native-practical-approaches-across-ios-and-android-41nk)** - React Nativeアプリでパスワード・決済情報・個人データをUIレベルで安全に扱うための実装パターンをiOS/Android双方で解説した記事。スクリーンショット防止・クリップボード制御・セキュアテキスト入力など、プラットフォーム固有の制約に対応するコード例が豊富に含まれている。

## TechCrunch

- **[Popular AI gateway startup LiteLLM ditches controversial startup Delve](https://techcrunch.com/2026/03/30/popular-ai-gateway-startup-litellm-ditches-controversial-startup-delve/)** - AI APIゲートウェイとして広く使われるLiteLLMが、コンプライアンス偽装疑惑で内部告発を受けたスタートアップ「Delve」との提携を解消した。オープンソースAIツールのサプライチェーンでの倫理問題が顕在化した事例として、ツール選定時のベンダー審査の重要性を示している。

- **[Former Coatue partner raises huge $65M seed for enterprise AI agent startup](https://techcrunch.com/2026/03/30/former-coatue-partner-raises-huge-65m-seed-for-enterprise-ai-agent-startup/)** - 元Coatueパートナーがエンタープライズ向けAIエージェントスタートアップのシードとして6500万ドルを調達した。シードラウンドとしては異例の超大型資金調達であり、機関投資家のエンタープライズAIエージェントへの期待値が依然として極めて高いことを示している。

- **[Allbirds is selling for $39 million. It raised nearly 10 times that amount in its IPO.](https://techcrunch.com/2026/03/30/allbirds-is-selling-for-39-million-it-raised-nearly-10-times-that-amount-in-its-ipo/)** - D2C（直販）ブランドのAllbirdsがIPO時の調達額の約10分の1の3900万ドルで売却されることになった。2021年ブームに乗ったD2Cスタートアップの企業価値崩壊の典型例として、過剰評価された消費者ブランドに対するベンチャー投資の帰結を示している。

- **[Meta starts testing a premium subscription on Instagram](https://techcrunch.com/2026/03/30/meta-starts-testing-a-premium-subscription-on-instagram/)** - MetaがInstagramの有料サブスクリプション提供テストを開始した。広告収益モデルに加えてサブスクリプション収益を加える多角化戦略の一環であり、X（旧Twitter）やYouTubeが進めるプレミアム課金モデルへのソーシャルメディア大手の集約が加速している。

## Ars Technica

- **[After 16 years and $8 billion, the military's new GPS software still doesn't work](https://arstechnica.com/space/2026/03/after-16-years-and-8-billion-the-militarys-new-gps-software-still-doesnt-work/)** - 米軍が16年・80億ドルを費やして開発してきた次世代GPS管制ソフトウェアが未だ運用不能であることが明らかになった。要件変更の繰り返し・請負業者の何度もの交代・スコープクリープが失敗の主因として指摘されており、大規模政府ITプロジェクトの構造的問題が改めて問われている。

- **[Authors' lucky break in court may help class action over Meta torrenting](https://arstechnica.com/tech-policy/2026/03/meta-hopes-scotus-piracy-ruling-will-help-it-beat-lawsuit-over-torrenting-ai-data/)** - MetaがAI学習データとして著作物をトレントで収集していたとするクラスアクション訴訟で、著作権者側に有利な司法判断が出た。最高裁の別件著作権判決をMetaが流用しようとする試みが退けられており、AI学習データの著作権法的扱いに関する判例形成において重要な展開だ。

- **[Judge halts Nexstar/Tegna merger after FCC let firms exceed TV ownership limit](https://arstechnica.com/tech-policy/2026/03/judge-halts-nexstar-tegna-merger-after-fcc-let-firms-exceed-tv-ownership-limit/)** - FCCが承認したテレビ局合併を連邦裁判所が差し止めた。FCCが放送局所有制限の上限超過を許可したこと自体への司法チェックとして機能した判決であり、通信・メディア規制における行政裁量と司法審査の緊張関係を示している。

## 注目トピック

本日の最大トピックは **axiosのnpmサプライチェーン攻撃**だ。ダウンロード週間数億回を誇る超定番ライブラリが改ざんされ、リモートアクセストロイが混入した。はてなブックマーク・Lobsters双方で上位にランクインしており、影響範囲はフロントエンド・バックエンドを問わず広大だ。過去数年で積み重なったサプライチェーン攻撃（GitHub Actions侵害・xz utils・Polyfill.io等）の文脈と重なり、「オープンソース依存のリスクをどう管理するか」という問いへの答えが依然として見つかっていない現状が浮き彫りになった。今日だけでも「なぜサプライチェーン攻撃が日常的に起きているのか」というLobstersの議論スレッドが盛り上がっていることからも、コミュニティ全体の危機感の高まりが読み取れる。

もう一つの潮流は **AIツールとセキュリティの交差点**だ。CursorでAI生成した100アプリの67%が深刻な脆弱性を持つという調査、ClaudeがVim/EmacsにRCEを発見したという報告、そしてLiteLLMがコンプライアンス問題のあるスタートアップとの提携を解消したニュースが重なった。AIが脆弱性を「作り出す」側でも「発見する」側でもあるという二面性が鮮明になっており、AI活用とセキュリティ品質保証の両立がエンジニアリングの中心課題として定着しつつある。
