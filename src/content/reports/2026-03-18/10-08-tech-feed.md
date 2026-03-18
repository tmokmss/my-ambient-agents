---
title: "Tech Feed ダイジェスト（2026年3月18日）"
date: "2026-03-18T10:08"
category: "summary"
summary: "生体コンピュータデータセンター・Corretto 26 GA・World ID for AI Agents・Kalshi刑事訴追・C++26 Span改善など。"
tags: ["ai", "aws", "security", "frontend", "devtools", "llm", "linux", "cpp", "cloud", "biology"]
---

## はてなブックマーク (テクノロジー)

- **[【非エンジニアのためのClaude/Claude Codeシリーズ】Claude Codeを動かす環境を整えてみた](https://dev.classmethod.jp/articles/claude-business-use1/)** ([336users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/claude-business-use1/)) - 技術部門以外のビジネス職を対象に、WSL2・Node.js・APIキー設定からClaude Code起動までを丁寧に解説した入門記事。開発者でない社員にもAIコーディングツールを展開するための社内普及ガイドとして実用性が高く注目を集めている。

- **[人間の"脳細胞"で動く「データセンター」開設へ　豪スタートアップなどが着手　消費電力はAI以下](https://www.itmedia.co.jp/news/articles/2603/18/news037.html)** ([277users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2603/18/news037.html)) - Cortical Labsなどが実際のヒト神経細胞を組み込んだ生体コンピューティング基盤の商用展開を開始。AI推論と比べて消費電力が電球以下とされており、GPU由来の電力問題を生物学的アプローチで解決する試みとして世界的な関心を集めている。

- **[裁判官2500人を可視化「裁判官マップ」公開、口コミ投稿に「圧力になる」と懸念も…開発者の弁護士に聞く](https://www.bengo4.com/c_18/n_20136/)** ([190users](https://b.hatena.ne.jp/entry/s/www.bengo4.com/c_18/n_20136/)) - 全国の裁判官の所属裁判所・担当部・経歴を一覧できるWebサービスを弁護士が開発・公開。司法透明性の向上を狙う一方、当事者が裁判官を評価する口コミ機能が訴訟戦略として悪用されるリスクも指摘されており、公共情報公開の倫理的設計が問われている。

- **[伊藤直也が「技術の原点」として読んだ3冊](https://bookplus.nikkei.com/atcl/column/070300541/030400009/)** ([163users](https://b.hatena.ne.jp/entry/s/bookplus.nikkei.com/atcl/column/070300541/030400009/)) - はてなCTO・一休.com CTOを歴任した伊藤直也氏が、大規模Webサービスの設計思想を形成した3冊の技術書を紹介。アルゴリズム・分散システム・検索技術の古典的名著が含まれており、技術の深度を高めたいエンジニアへのブックガイドとして話題に。

- **[AIを活用してフレイキーなテストを撲滅した話](https://engineering.dena.com/blog/2026/03/flaky-test-elimination-with-ai/)** ([はてブ](https://b.hatena.ne.jp/entry/s/engineering.dena.com/blog/2026/03/flaky-test-elimination-with-ai/)) - DeNAがLLMによるテストコード静的解析を組み合わせ、非決定的なテスト（フレイキーテスト）の検出・原因特定を自動化した事例を解説。人間が修正判断を行うハイブリッド設計で、CI失敗の主要因だったフレイキー率を大幅に低減した実績を紹介している。

## Zenn

- **[「AIっぽい」の正体は文体じゃない — 全業務をAIエージェントで回して気づいたこと](https://zenn.dev/omori432/articles/ai-likeness-not-about-writing-style)** - Claude Codeをメインパートナーとして開発・執筆・レビューを行う中で、「AIっぽい」と言われる本質は文体よりも「文脈への無関心さ」にあると分析した考察記事。AIの出力をそのまま使うのではなく、文脈を理解した上でフィルタリングする判断力こそが重要だと結論付けている。

- **[Vite+の異常なタスクランナー：vite-taskはいかにしてキャッシュの手動依存管理をなくしたか](https://zenn.dev/herp_inc/articles/strange-task-runner)** - 新リリースされたVite+（oxcエコシステム採用）のタスクランナー「vite-task」が、ファイルアクセスを自動捕捉してキャッシュ依存関係を自動構築する仕組みを解説。従来の手動依存定義が不要になる設計により、モノレポでのタスクグラフ管理コストを大幅に削減できる。

- **[AIコードレビューを「単一責任の原則」で育てた話](https://zenn.dev/globis/articles/d0c73d2b176ba5)** - グロービスのDevExチームがAIコードレビューの精度向上のため、一度に複数の観点を指摘させるのではなくレビュー観点を単一責任に絞ったプロンプト設計に移行した実践例。的外れな指摘を減らしながら一貫したレビュー品質を実現するチューニング手法として参考になる。

- **[rmの代わりにtrashを使ってCoding Agentに安全にファイルを削除させる](https://zenn.dev/lef237/articles/23f77b0dade38f)** - `rm`の代わりに`trash-cli`を使い、AIコーディングエージェントが誤ってファイルを完全削除してしまうリスクを低減するTips。エージェントによる`rm -rf`の誤操作を防ぎつつ、ゴミ箱経由で復元可能な状態を保持できる実用的なガードレールとして注目されている。

- **[フロントエンドのディレクトリ構成で再帰的なfeatures構成を推したい](https://zenn.dev/pksha/articles/recursive-features-directory-structure)** - React+TypeScript製の複数Webアプリを管理するチームが、機能単位でディレクトリを再帰的にネストするfeatures構造の利点を解説。コンポーネント・hooks・types・APIクライアントを機能ごとに自己完結させることで、スケールしても見通しの良いコードベースを維持できると論じている。

## Qiita

- **[vLLMを用いたモデル並列化手法の性能評価](https://qiita.com/kikasas/items/2f441869b5937d7cca4f)** - 三菱電機がvLLMのテンソル並列・パイプライン並列・エキスパート並列の3方式を複数GPU環境でベンチマーク比較した結果を公開。モデルサイズ・バッチサイズ・GPU構成に応じた最適な並列化戦略の選択指針が得られる実測データとして、LLM推論インフラを構築するエンジニアに直接役立つ内容。

- **[Claude Codeで「Issue起票→並列開発→PR作成」を全自動化したら、開発速度が異次元になった](https://qiita.com/kazuki_ogawa/items/c05c3aed3bf8e46a7ddb)** - Claude CodeのSkills機能を活用し、GitHub IssueへのトリガーからブランチごとのAIエージェント並列実装・PR作成までを完全自動化するワークフローを構築した事例。複数Issueを独立したエージェントが同時処理することで、従来の数倍のペースで機能開発を進められると報告している。

- **[コンテナ向けセキュリティプロファイル生成ツールの紹介](https://qiita.com/kikasas/items/58ebc0da27b2eb7040a7)** - PodmanコンテナのseccompプロファイルとSELinuxポリシーを自動生成するOSSツール群（oci-seccomp-bpf-hook、udica）を紹介。コンテナが実際に発行するシステムコールをeBPFでトレースしてホワイトリストを生成するアプローチにより、最小権限のセキュリティプロファイルを手動なしで作成できる。

- **[生成AIで古（いにしえ）のFORTRANコードに挑戦する](https://qiita.com/cometscome_phys/items/76a4d9dac74e70bceebb)** - 物理シミュレーション用の旧世代FORTRANコードをChatGPT 5.4を活用してモダンなPythonに移植する実験記録。レガシーコードの解読から変数命名・制御フロー変換まで、生成AIがレガシー資産の近代化に実際に使えることを実証した事例として注目されている。

- **[【個人開発】最寄り駅から徒歩X分以内の物件を地図上に列挙できるアプリを作ってみた【React, TS, supabase, leaflet】](https://qiita.com/nu197ma/items/bc9aee9c5951e01ad13b)** - React+TypeScript+Supabase+Leafletを組み合わせて「徒歩圏内の賃貸物件」を地図上に可視化するアプリを個人開発した事例。既存の賃貸サイトでは難しい「徒歩分数×複数駅」の複合検索を地図UIで直感的に実現しており、フルスタック個人開発の参考事例として話題になっている。

## AWS 新着

- **[Amazon Corretto 26 is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-corretto-26-generally-available/)** (Mar 17) - AWSが管理するOpenJDK配布版「Amazon Corretto 26」がGAリリース。Java 26の新機能（Virtual Threads改善・値型の進化・Project Loomの成熟）を含む機能リリース版で、AWS上のJavaワークロード向けに無償で提供される。長期サポート版ではないため本番移行は要検討。

- **[AWS Blu Insights is now AWS Transform for mainframe refactor](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-transform-mainframe-refactor/)** (Mar 17) - メインフレームのリファクタリング支援ツール「AWS Blu Insights」が「AWS Transform」としてブランド統合。生成AIによるCOBOL/PL1コード解析・変換提案・クラウドネイティブ移行支援がAWS Transformの統合プラットフォームから利用可能になり、レガシーシステム近代化のフロービジネスが加速する見込み。

- **[Amazon SageMaker Unified Studio supports aggregated view of data lineage](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-sageMaker-unified-studio-aggregated-view%20-data-lineage/)** (Mar 17) - SageMaker Unified Studioがデータリネージの集約ビューをサポート。S3・Glue・Redshiftなど複数データソースをまたぐデータの流れを一元的に可視化でき、MLパイプラインのデータ品質管理・コンプライアンス監査・デバッグ作業の効率が大幅に向上する。

- **[Amazon Connect voice AI agents now supports 13 new languages](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-connect-voice-ai-agents-13-languages/)** (Mar 17) - Amazon Connectの音声AIエージェントが新たに13言語を追加サポートし、対応言語が合計40言語に拡大。多言語グローバル展開するコールセンターにとって、同一のAIエージェントインフラを各地域言語に対応させやすくなり、ローカライズコストが低減する。

## Lobsters

- **[Every layer of review makes you 10x slower](https://apenwarr.ca/log/20260316)** - レビュープロセスの層が増えるたびに開発速度が指数的に低下するメカニズムを論じたブログポスト。承認フローの多段化がボトルネックを生む構造を分析し、信頼に基づいた自律的なデリバリー文化への転換を提唱している。Vibe Coding時代のチーム設計にも示唆を与える内容。

- **[Jepsen: MariaDB Galera Cluster 12.1.2](https://jepsen.io/analyses/mariadb-galera-cluster-12.1.2)** - 分散データベースの一貫性を検証することで知られるJepsenがMariaDB Galera Cluster 12.1.2を解析。複数ノード間でのデータ整合性テストの結果と発見された問題点を詳細に報告しており、MariaDBをミッションクリティカルな用途で採用する際の判断材料として注目されている。

- **[A tale about fixing eBPF spinlock issues in the Linux kernel](https://www.rovarma.com/articles/a-tale-about-fixing-ebpf-spinlock-issues-in-the-linux-kernel/)** - Linuxカーネルのebpfサブシステムにおけるスピンロックのデッドロック問題を追跡・修正した詳細な記録。カーネルデバッグの実際のプロセス（`ftrace`・ロックアノテーション・カーネルパッチの提出）が惜しみなく共有されており、低レイヤー開発の教材として価値が高い。

- **[The web in 1000 lines of C](https://maurycyz.com/projects/tinyweb/)** - HTTPサーバー・HTMLパーサー・JavaScriptエンジンの基礎を合わせて約1000行のCで実装したミニブラウザプロジェクト。Webの複雑な仕様がいかに小さなコアで動作するかを実証し、Webの仕組みを根本から理解するための教育的プロジェクトとして話題になっている。

- **[C++26: Span improvements](https://www.sandordargo.com/blog/2026/03/18/cpp26-span-improvements)** - C++26に採用される`std::span`の機能拡張を解説した記事。サブスパン生成の利便性向上・比較演算子の追加・固定長スパンの型推論改善など、ゼロコスト抽象化の観点から実用性が高まる変更点が整理されており、C++モダン化の動向を追うエンジニアにおすすめ。

## dev.to

- **[Lessons from Using AI Tools in Actual Engineering Work](https://dev.to/leena_malhotra/lessons-from-using-ai-tools-in-actual-engineering-work-2hpc)** - 6ヶ月間AIを本番開発ワークフローに組み込んだ経験をまとめた考察記事。AIはすでに知っているパターンの実行を加速する一方、アーキテクチャ決定・未知システムのデバッグ・セキュリティレビューでは有害になり得ると分析。「AIに実行を任せ、判断は人間が行う」という使い分けの原則を具体例とともに解説している。

- **[Stop Blaming Your Developers. Your Tech Stack Is the Real Problem.](https://dev.to/nikkikoole/stop-blaming-your-developers-your-tech-stack-is-the-real-problem-2i3b)** - 開発速度の低さや技術的負債の原因を開発者個人に帰属させがちな組織的問題を指摘した記事。モノリシックなレガシースタック・不適切なCI/CD・テスト文化の欠如がボトルネックであることが多く、ツールと文化の改革なしに人材交代を繰り返しても状況は改善しないと論じている。

## TechCrunch

- **[Why Garry Tan's Claude Code setup has gotten so much love, and hate](https://techcrunch.com/2026/03/17/why-garry-tans-claude-code-setup-has-gotten-so-much-love-and-hate/)** - Y CombinatorのGarry Tan氏がGitHubで公開したClaude Code設定ファイルが数千人の開発者に試され、賛否両論を巻き起こしている。Claude・ChatGPT・GeminiなどのAI自身にも意見を求めたところ異なる評価が返ってきており、AIコーディング環境の「最適設定」をめぐる議論が活発化している。

- **[Kagi brings its 'small web' of a human-only internet to mobile devices](https://techcrunch.com/2026/03/17/kagi-small-web-human-authored-indie-internet-mobile-ios-android-devices/)** - Kagiが人間が執筆した非商業サイト3万件以上を厳選した「Small Web」コレクションをiOS・Android向けアプリに対応。AI生成コンテンツやSEOスパムが蔓延するWebに対するオルタナティブとして、個人ブログ・ウェブコミック・独立系動画などの「本物のWeb」へのアクセスを提供する。

- **[Google's data center power playbook comes into focus](https://techcrunch.com/2026/03/17/googles-data-center-power-playbook-comes-into-focus/)** - GoogleがAIワークロードの急増に対応するためデータセンターの電力調達戦略を転換しつつある実態を報告。従来の再生可能エネルギー証書（REC）購入から、電力会社との長期直接契約・原子力・地域電力グリッドへの直接投資など、より確実な電力確保手段に重点が移ってきている。

- **[BuzzFeed debuts AI slop apps in bid for new revenue](https://techcrunch.com/2026/03/17/buzzfeed-ai-slop-apps-sxsw-bf-island-conjure/)** - BuzzFeedがSXSW 2026でAI生成コンテンツを中核とする新ソーシャルアプリ2本を発表したものの、デモは冷ややかな反応を受けた。コンテンツ企業がAIを収益化しようとする試みが批判にさらされる構図は、メディア産業とAIの共存モデルをめぐる議論を改めて浮き彫りにしている。

## Ars Technica

- **[How World ID wants to put a unique human identity on every AI agent](https://arstechnica.com/ai/2026/03/world-id-wants-you-to-put-a-cryptographically-unique-human-identity-behind-your-ai-agents/)** - WorldCoin（Sam Altman創業）の後継プロジェクト「World」が、虹彩スキャンで生成する暗号学的人間証明「World ID」をAIエージェントに付与する「Agent Kit」ベータ版を公開。ボット群によるSybil攻撃的なアクセス爆発からWebサービスを守るため、「本物の人間が操作するエージェント」であることをWeb上で証明する仕組みを目指している。

- **[Apple can delist apps "with or without cause," judge says in loss for Musi app](https://arstechnica.com/tech-policy/2026/03/judge-upholds-apple-delisting-of-free-musi-app-that-streams-songs-from-youtube/)** - YouTubeの楽曲を独自広告付きでストリーミングしていたiOSアプリ「Musi」のApp Store復帰訴訟で、連邦裁判所がAppleの主張を全面支持。AppleはDPLA（開発者契約）に基づき「理由の有無に関わらず」アプリを削除できると判示され、プラットフォーム独占に関するエコシステム論争に新たな判例が加わった。

- **[Trump's plan to shut down weather and climate center triggers lawsuit](https://arstechnica.com/science/2026/03/university-group-sues-trump-administration-over-shutdown-of-climate-center/)** - 大気研究の米国拠点「NCAR（国立大気研究センター）」の廃止・分解を進めるトランプ政権に対し、運営母体UCARが連邦訴訟を提起。行政府が「気候警告主義」と批判して研究機関を標的にするパターンが鮮明になっており、公的科学インフラの独立性をめぐる争いが法廷に持ち込まれた形となっている。

## 注目トピック

今回のフィードを横断して際立ったのは、**AIエージェントの信頼性・制御性・人間証明**をめぐる議論の深化だ。World IDの「Agent Kit」はエージェントが人間の指示下にあることを暗号学的に証明しようとし、DeNAはAIでフレイキーテストを自動検出してCI信頼性を高め、dev.toの論考はAIが「知っているパターンの実行」には強くても「判断」には弱いという本質的な限界を整理した。AIを自律エージェントとして運用するフェーズが進むにつれ、「エージェントが何者で、何をしているか」を人間がコントロールするためのインフラ・手法の整備が急務になっていることが、複数のソースから一致して読み取れる。

一方、インフラ面では**Googleのデータセンター電力戦略の転換**と**生体コンピュータデータセンターの商用化**という対照的な動きが同時に生じており、AI推論の電力需要増大に対して従来のクラウドインフラとは根本的に異なるアプローチが模索されている点も見逃せない。Amazon Corretto 26のGAやAWS Transformのブランドリニューアルはレガシーシステムのモダン化需要の高まりを示しており、**Java・COBOLといったレガシー資産にAIを組み合わせた近代化**が業界トレンドとして定着しつつある。
