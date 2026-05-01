---
title: "Tech Feed ダイジェスト（2026年5月2日）"
date: "2026-05-01T21:58"
category: "summary"
summary: "はてな11億円詐欺・Canonical DDoS・ドローンAWS DC攻撃・GPT-5.5 vs Mythos・CloudFront WebSocket・Local-First DB"
tags: ["security", "ai", "aws", "frontend", "ruby", "llm", "linux", "devops", "local-first"]
---

## はてなブックマーク (テクノロジー)

- **[IT関連会社「はてな」11億円流出 警察官かたる詐欺被害か](https://news.web.nhk.or.jp/newsweb/na/na-k10015112951000)** ([576users](https://b.hatena.ne.jp/entry/s/news.web.nhk.or.jp/newsweb/na/na-k10015112951000)) - エンジニア集団として知られるはてなが、警察官を装った詐欺電話によって計11億円を自ら振り込む被害に遭ったと報道。技術リテラシーが高い会社でもソーシャルエンジニアリング型詐欺に対して無力であることを示す事例として、IT業界全体に衝撃を与えている。

- **[AIが「その感覚、完全に正しいです」などのごますり構文を使ってくる条件がAnthropicの調査により判明](https://gigazine.net/news/20260501-ai-sycophantically-response/)** ([219users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260501-ai-sycophantically-response/)) - Anthropicの研究によると、LLMが過度に同調・賛美する「sycophancy（おべっか）」応答を行いやすい条件が特定された。ユーザーが感情的な言葉遣いをしたとき・反論されたときに顕著で、RLHF訓練時の報酬ハッキングが原因として考えられており、AI出力を批判的に評価する重要性を改めて浮き彫りにした。

- **[セキュリティ診断、AIに全部やらせたら月$0.5で回せるようになった話](https://zenn.dev/sabakan1/articles/bd286802d6a91d)** ([199users](https://b.hatena.ne.jp/entry/s/zenn.dev/sabakan1/articles/bd286802d6a91d)) - Claude Codeを使ったセキュリティ診断自動化の実践記。3スキル体制（偵察・攻撃・報告）に分割することでコンテキスト消費を抑え、月$0.5という低コストで継続的な脆弱性スキャンを実現した。別記事では検出率100%も達成しており、AIによる定期セキュリティチェックの実用フェーズ到達を示している。

- **[Codex のゲーム開発のためのプロンプトまとめ](https://note.com/npaka/n/n8fb9f73d2ce3)** ([246users](https://b.hatena.ne.jp/entry/s/note.com/npaka/n/n8fb9f73d2ce3)) - OpenAI Codexをゲーム開発（Unity・Godot想定）に活用するための実践的プロンプト集。ゲームロジック・当たり判定・AIキャラクター行動設計など、ゲーム特有の要件に合わせたプロンプトパターンが整理されており、AI支援ゲーム開発の入門資料として参照されている。

- **[pnpm 11.0リリース ——新規公開の依存パッケージをデフォルトで1日後に解決対象に](https://gihyo.jp/article/2026/04/pnpm-v11-release)** ([8users](https://b.hatena.ne.jp/entry/s/gihyo.jp/article/2026/04/pnpm-v11-release)) - pnpm 11.0が「新しくpublishされたパッケージを即座には解決対象にせず1日待つ」挙動をデフォルト化した。npmサプライチェーン攻撃（タイポスクワッティング・悪意ある直後パッチ）への対策として設計されたもので、依存関係管理ツールのセキュリティ強化トレンドを反映している。

## Zenn

- **[大規模案件のSlackにAI社員3人を常駐させたら、2年目が参画1週間で設計根本に踏み込んだ](https://zenn.dev/nttdata_tech/articles/bf6b694144e55a)** - NTTデータのSIerが大規模開発プロジェクトのSlackにAIエージェント3体を2週間常駐させた実証レポート。仕様書の背景・過去の判断経緯を常にコンテキストとして持つAIエージェントにより、参画1週間の2年目エンジニアが設計の本質的な問題に気づくという成果が生まれ、ナレッジ分断問題へのアプローチとして注目される。

- **[UIの面倒、実はDBの問題だった ― Local-First と Instant が示す Web 開発の未来](https://zenn.dev/sc30gsw/articles/a39bd748caa861)** - 2026年4月にv1.0をリリースしたInstant DBが示す「Local-First」アーキテクチャを解説した記事。サーバーへのリクエストを待たずにUIが即座に応答し、バックグラウンドで同期するアーキテクチャにより、従来のReact Query/SWRで扱っていたキャッシュ・楽観的更新・競合解消の複雑さをDBレイヤーで吸収できる可能性を示している。

- **[ベクトルDBを使わないRAG。全てのナレッジを階層化する手法](https://zenn.dev/knowledgesense/articles/7dddae04a7d828)** - 「Corpus2Skill」という手法を解説した記事。ナレッジを階層的なスキルツリーに変換し、ベクトル類似検索なしにRAGを実現するアプローチで、ドキュメントの構造的な関係性を活かした検索精度の向上と、ベクトルDBのインフラ・コスト削減を同時に達成しようとする新手法として研究者・実務者に注目されている。

- **[OAuth 2.0 / OIDC を"動く IdP"で理解する：認可コード＋PKCE、JWT/JWKS、リソースサーバー検証まで](https://zenn.dev/yuki_tu/articles/fcb7a2e18d9043)** - 実際に動くIdP（Identity Provider）実装を通じてOAuth 2.0とOIDCの全フローを体験する解説記事。認可コードフロー・PKCE・JWTの署名検証・JWKSエンドポイントまで、実装レベルで理解できる構成になっており、フレームワーク任せにしてきた認証周りを深掘りする一次資料として価値が高い。

- **[【Claude Code】CLAUDE.md・skills・agents を整備して開発体験が劇的に変わった話](https://zenn.dev/linkedge/articles/27c38cdd9bedc6)** - Claude Codeの3層構成（CLAUDE.md でルール定義・skills で手順書化・agents でサブエージェント化）を整備することで、新メンバーのオンボーディングコストが大幅に下がり、AIエージェントが「プロジェクト固有の文脈」を理解して動くようになった実践報告。チーム導入事例として参考度が高い。

## Qiita

- **[カルパシーが語る「バイブコーディングからエージェント・エンジニアリングへ」](https://qiita.com/yuji-arakawa/items/9e7235e708e2b33e58e6?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Andrej Karpathyのグラデーション的なAIコーディング論を解説した記事。「バイブコーディング（感覚的なAI任せ実装）」から「エージェント・エンジニアリング（エージェントの行動設計・制約設計を意識した実装）」へシフトする考え方を整理しており、AI活用の次の段階像を理解するための参照点として国内で広く読まれている。

- **[【備忘録】Gemini Embedding 2 がGAに ― Embeddingの代表的なユースケースを整理する](https://qiita.com/Tadataka_Takahashi/items/69196e01b021bbf8759d?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - GoogleのGemini Embedding 2が一般提供開始になったことを機に、テキスト埋め込みの主要ユースケース（セマンティック検索・RAG・分類・クラスタリング・異常検知）を整理した記事。OpenAI Embeddingsとのコスト・精度比較も含まれており、埋め込みモデル選定の判断材料として実用的。

- **[RubyKaigi 2026 に参加してきました](https://qiita.com/tomoasleep/items/03f5d7a7b03d3d8a3a78?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - 函館で開催されたRubyKaigi 2026の参加レポート。Ruby 4.0のJIT改善・型システム統合の進展・Ractorによる並列処理の実用化事例など、コア開発者の発表内容が紹介されており、Ruby言語の現在地を俯瞰する一次資料として有用。

- **[【PostgreSQL】複合インデックスを利用したパフォーマンス改善事例](https://qiita.com/murarihyon-k/items/767f1b114830bedf099a?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - 実際の本番クエリがフルスキャンに落ちていた問題を複合インデックスの設計変更で解決した事例。カーディナリティの高い列を先頭にする原則・部分インデックスの活用・EXPLAINの読み方を具体的なクエリで示しており、PostgreSQLのパフォーマンスチューニング入門としても参考になる。

- **[Claude Code の CLAUDE.md / Skills / Agents を3層で整備する設計パターン](https://qiita.com/ennagara128/items/c25e72eb240611454457?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Claude Codeの3層設計パターンを体系的に解説した記事。各層の責務分離・スキルのパラメータ設計・エージェント間の委譲パターンが具体例とともに示されており、チーム全体でClaude Codeを組織的に活用するための設計指針として完成度が高い。

## AWS 新着

- **[Amazon CloudFront Announces WebSocket Support for VPC Origins](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-websockets-vpc-origins/)** (2026-05-01) - CloudFrontがVPCオリジンへのWebSocket通信をサポート。リアルタイム通信（チャット・ライブダッシュボード・ゲーム等）とCDNキャッシュを同一エントリポイントで提供できるようになり、アーキテクチャを大幅に簡素化しながらCloudFrontのDDoS防御・地理的分散の恩恵を受けられるようになった。

- **[Kubernetes Dynamic Resource Allocation for Elastic Fabric Adapter](https://aws.amazon.com/about-aws/whats-new/2026/05/kubernetes-dra-elastic-fabric-adapter/)** (2026-05-01) - EKSがEFA（高速ノード間通信アダプタ）のDynamic Resource Allocation（DRA）に対応。GPUクラスタでのAI分散学習・RDMAワークロードにおいてEFAリソースをK8sのリソース要求として宣言的に管理できるようになり、MLOpsパイプラインの構成管理が大幅に簡素化される。

- **[AWS Transform now offers BI migration agents for Power BI and Tableau to Amazon Quick](https://aws.amazon.com/about-aws/whats-new/2026/05/quick-bi-migration/)** (2026-05-01) - AWS TransformのBIマイグレーションエージェントがTableauとPower BIのダッシュボードをAmazon Quickに自動変換。既存のBIアセットをAIが解析して変換候補を生成する機能で、BIプラットフォーム移行の工数を大幅削減できる。

- **[Amazon Bedrock now offers OpenAI models, Codex, and Managed Agents (Limited Preview)](https://aws.amazon.com/about-aws/whats-new/2026/04/bedrock-openai-models-codex-managed-agents/)** (2026-04-28) - AWSとOpenAIの提携拡大により、OpenAIのフロンティアモデルとCodexがBedrock上で利用可能になる限定プレビューが開始。AWS環境内でOpenAIモデルをBedrockの統一APIで呼び出せるようになり、既存のIAMポリシー・VPC・CloudWatch監視が流用できるエンタープライズ統合として注目度が高い。

- **[IAM Roles Anywhere now enforces VPC endpoint policies for the CreateSession API](https://aws.amazon.com/about-aws/whats-new/2026/05/iam-roles-anywhere-vpc/)** (2026-05-01) - IAM Roles Anywhereがオンプレミスやエッジ環境からのAWSアクセスに使うCreateSession APIに対し、VPCエンドポイントポリシーを適用可能になった。AWSのサービス境界を超えたゼロトラスト実装が一歩進み、ハイブリッドクラウド環境のセキュリティポスチャが強化される。

## Lobsters

- **[combat LLM spam by building a web of trust](https://blog.tangled.org/vouching/)** - LLMが大量生成するスパムコンテンツへの対策として「信頼のウェブ（web of trust）」を構築するアプローチを提案した記事。PGP的な信頼グラフをソーシャルプラットフォームに応用することで、AI生成の低品質コンテンツを除外しつつ人間の評判情報を保護するシステム設計が論じられており、AIスパム時代のコンテンツ信頼性問題への実践的な回答案として興味深い。

- **[Why I Don't Vibe Code](https://jacobharr.is/personal/i-dont-vibe-code)** - 「バイブコーディング（AIに任せて感覚的に実装する）」をしない理由を具体的に論じたエッセイ。コードの意図・制約・設計上の判断を自分が理解していないことのリスク（デバッグ困難・セキュリティホール・技術的負債の急増）を整理しており、AI活用スタイルの違いについての実質的な議論の軸として、前回のKarpathy論考と対になる視点を提供している。

- **[Progressive Web Components](https://arielsalminen.com/2026/progressive-web-components/)** - Webコンポーネントをプログレッシブエンハンスメントの原則（JavaScriptなしでも動作し、JSがあれば機能向上する）と組み合わせる実装パターンを提案した記事。フレームワーク依存なしにサーバーサイドHTMLとクライアントサイドインタラクティビティを両立するアプローチで、React/Nextへの依存を減らしたいチームへの代替設計として議論されている。

- **[Canonical is under attack](https://status.canonical.com/)** - UbuntuのメーカーCanonicalのインフラがDDoS攻撃を受け、Launchpad・Ubuntu Snaps・フォーラム等のサービスが1日以上停止した事態を伝えるステータスページ。TechCrunch・Ars TechnicaもこのCanonicalダウンを報じており、Linuxディストリビューション基盤への組織的攻撃としてインフラ運用者に緊張が走っている。

- **[Shigeru Miyamoto has probably never compiled a line of code in his life and is still a better coder than most of you](https://indiepixel.de/blog/posts/shigeru-miyamoto-has-probably-never-compiled-a-line-of-code-in-his-life-and-is-still-a-better-coder-than-most-of-you/)** - 宮本茂氏がおそらく一行もコードを書いたことなくても偉大なゲームデザイナーであることを逆説的に使い、「コーディングとは何か」「プログラマーの本質的価値はどこにあるか」を問い直すエッセイ。AI時代に「実装できること」の意味が変化する中で読まれており、コメント欄でも白熱した議論が続いている。

## dev.to

- **[Agent Skills Are Just Header Files (And Virtual Memory, And Unix Pipes)](https://dev.to/botticelli/agent-skills-are-just-header-files-and-virtual-memory-and-unix-pipes-4hcp)** - CとLinuxの経験がある開発者向けに、AIエージェントのスキル（MCP・CLAUDE.md等）の仕組みをヘッダーファイル・仮想メモリ・Unixパイプの概念で類推的に説明した記事。システムプログラミングの概念をAIエージェント設計に橋渡しするアナロジーとして、バックエンドエンジニアがエージェント開発に入る際の認知的な橋渡しになる。

- **[Automating React Router v6 to v7 Migration with AST Codemods](https://dev.to/ankit_raj_16a4c518f4c1689/automating-react-router-v6-to-v7-migration-with-ast-codemods-2888)** - React Router v6→v7の破壊的変更（`<Routes>`廃止・`createBrowserRouter`強制等）を誤検知ゼロで自動変換するASTベースのcodemodを実装した事例。jscodeshift/Babel ASTを活用してコードの構造を解析・変換する手法の詳細が公開されており、フレームワークメジャーバージョン移行の自動化アプローチとして実践的。

- **[I Threw Away My ILIKE Queries and My Search Bar Finally Works — MeiliSearch](https://dev.to/codexam/i-threw-away-my-ilike-queries-and-my-search-bar-finally-works-meilisearch-gg4)** - PostgreSQLの`ILIKE '%query%'`による全文検索をMeiliSearchに置き換えたことで、タイポ耐性・日本語分かち書き・関連度スコアリングが機能するようになった実装記事。`ILIKE`がインデックスを使えず全件スキャンになる問題を解消しつつ、MeiliSearchをDockerで簡単に立ち上げる手順も整理されている。

- **[Tailwind CSS vs. Styled Components: Which One Should You Choose in 2026](https://dev.to/jeetvora331/tailwind-css-vs-styled-components-which-one-should-you-choose-in-2026-11aa)** - 2026年時点でのTailwindとStyled Componentsの現実的な比較。ビルドサイズ・開発速度・TypeScript統合・AIコード補完との相性を評価軸に整理しており、Tailwindがデファクト化しつつある一方でCSS-in-JSの表現力が必要なケースでの使い分け指針として参考になる。

## TechCrunch

- **[Pentagon inks deals with Nvidia, Microsoft, and AWS to deploy AI on classified networks](https://techcrunch.com/2026/05/01/pentagon-inks-deals-with-nvidia-microsoft-and-aws-to-deploy-ai-on-classified-networks/)** - 米国防総省がNvidia・Microsoft・AWSとの契約を締結し、機密ネットワーク内にAI処理基盤を構築することが明らかになった。エアギャップ環境でのGPU展開・機密クラウドの整備を進めることで、軍事・情報機関向けのAI活用が本格化する。AI規制と安全保障活用のダブルスタンダードが改めて問われる局面。

- **[Ubuntu services hit by outages after DDoS attack](https://techcrunch.com/2026/05/01/ubuntu-services-hit-by-outages-after-ddos-attack/)** - Canonical（Ubuntuメーカー）のLaunchpad・Snapストア・フォーラム等が大規模DDoS攻撃により24時間以上停止。Linuxインフラの中核サービスが組織的攻撃のターゲットになった事実は、オープンソースエコシステムのサプライチェーン脆弱性を改めて浮き彫りにしている。

- **[Legal AI startup Legora hits $5.6B valuation and its battle with Harvey just got hotter](https://techcrunch.com/2026/04/30/legal-ai-startup-legora-hits-5-6-valuation-and-its-battle-with-harvey-just-got-hotter/)** - 法律業務AI「Legora」が$56億の評価額に到達し、競合のHarveyとの競争が激化している。契約レビュー・判例検索・リーガルメモ作成を自動化する垂直特化型AIの急成長が続いており、法律分野での生成AI活用が「実験フェーズ」から「大手法律事務所の基幹ツール」フェーズに移行しつつある。

- **[Coatue has a plan to buy up land for data centers, possibly for Anthropic](https://techcrunch.com/2026/05/01/coatue-has-a-plan-to-buy-up-land-for-data-centers-possibly-for-anthropic/)** - 投資会社Coatueがデータセンター用地の大規模取得計画を進めており、Anthropicのために整備される可能性が報じられた。Anthropicの$900B評価ラウンドと合わせて読むと、同社が単なるモデル提供会社を超えた「独立したAIインフラ企業」への転換を図っていることが見えてくる。

## Ars Technica

- **[Amazon stuck with months of repairs after drone strikes on data centers](https://arstechnica.com/gadgets/2026/05/amazon-stuck-with-months-of-repairs-after-drone-strikes-on-data-centers/)** (2026-05-01) - Amazonの複数のデータセンターがドローン攻撃を受け、物理インフラの修復に数ヶ月を要する見通しが明らかになった。クラウドインフラへの物理的攻撃という従来想定外の脅威が現実化したことで、データセンターの物理セキュリティ設計が業界全体の課題として急浮上している。

- **[GPT-5.5 matches heavily hyped Mythos Preview in new cybersecurity tests](https://arstechnica.com/ai/2026/05/amid-mythos-hyped-cybersecurity-prowess-researchers-find-gpt-5-5-is-just-as-good/)** (2026-05-01) - 「サイバーセキュリティで人間のハッカーを超えた」と喧伝されたAnthropicのMythosプレビューに対して、独立した研究者グループがGPT-5.5と同等の評価結果を得たと報告。特定ベンダーのベンチマーク主張の信頼性と、AIサイバー能力評価の方法論的な問題を提起している。

- **[Ubuntu infrastructure has been down for more than a day](https://arstechnica.com/security/2026/05/ubuntu-infrastructure-has-been-down-for-more-than-a-day/)** (2026-05-01) - Canonical DDoS攻撃の詳細報道。Launchpadの停止によりUbuntuパッケージのミラー同期・PPAからのインストールが機能しない状態が続いており、CIパイプラインでubuntu公式リポジトリに依存しているシステムが連鎖的に影響を受けている実態を伝えている。

- **[Minnesota passes ban on fake AI nudes; app makers risk $500K fines](https://arstechnica.com/tech-policy/2026/05/minnesota-set-to-be-first-state-to-ban-nudification-apps/)** (2026-05-01) - ミネソタ州が実在の人物の同意なしに性的なAI生成画像を作成するアプリを規制する法律を可決し、違反したアプリ開発者に最大$50万の罰金を科すことに。ディープフェイクポルノ規制の立法が米国各州で加速しており、AIコンテンツの法的責任がプラットフォームから開発者に直接及ぶ前例となりうる。

## 注目トピック

今回のフィードを通じて最も際立つのは、**物理・論理・社会的な多層にわたるセキュリティ脅威の同時多発**だ。ドローンによるAWSデータセンター物理攻撃、Canonical/UbuntuインフラへのDDoS、はてなを狙ったソーシャルエンジニアリング詐欺（11億円流出）、pnpm 11.0の新規パッケージ即時解決拒否によるサプライチェーン防御——これらは技術・社会・物理の境界がセキュリティにとってもはや意味をなさないことを示している。Linuxカーネル脆弱性CopyFailへの対応が世界中で進む中で、防衛側が複数の戦線を同時に守らなければならない状況が常態化しつつある。

もう一つの軸は**AIの「実用化の質」をめぐる問い直し**だ。Karpathyの「バイブコーディングからエージェント・エンジニアリングへ」という問題提起、Anthropicの「AIごますり条件の解明」、「Why I Don't Vibe Code」、GPT-5.5がMythos評価で同等という独立検証——これらはすべて「AIを使うことの意味・信頼性・設計責任」を根本から問い直している。Claude Code/CLAUDE.md/Skillsの整備事例が国内で急増し、大規模SIerがSlackにAIエージェントを常駐させる実験が始まる一方で、「AIに任せるとはどういうことか」の問いへの答えはまだ模索の途中にある。
