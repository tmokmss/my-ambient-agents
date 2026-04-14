---
title: "Tech Feed ダイジェスト（2026年4月15日）"
date: "2026-04-14T21:59"
category: "summary"
summary: "Yahoo! JAPANパスキー一本化・Claude Mythos展開・WordPress大規模バックドア・Zig 0.16・Waymo London上陸・ポスト量子TLS"
tags: ["security", "ai", "passkey", "rust", "zig", "aws", "platform-engineering", "llm", "devops", "golang"]
---

## はてなブックマーク (テクノロジー)

- **[Yahoo! JAPAN ID、ログインを「パスキー」に一本化](https://www.watch.impress.co.jp/docs/news/2101533.html)** ([231users](https://b.hatena.ne.jp/entry/s/www.watch.impress.co.jp/docs/news/2101533.html)) - Yahoo! JAPANが段階的にパスワード・SMS認証を廃止し、パスキー（FIDO2/WebAuthn）に一本化する方針を発表。国内最大級のサービスがパスキーへ完全移行することで、日本のパスキー普及が一気に加速する可能性がある。

- **[「ブラウザの戻るボタン→広告表示」がスパム扱いに　Google、6月にポリシー変更](https://www.itmedia.co.jp/news/articles/2604/14/news109.html)** ([209users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2604/14/news109.html)) - Googleが6月15日より「history manipulation」（戻るボタン乗っ取り）をスパムポリシー違反に追加し、違反サイトは検索順位を冷遇する方針を発表。ユーザー体験を意図的に阻害するナビゲーションハイジャック手法への制裁であり、SEO施策の見直しが求められる。

- **[AIリストラが経済を崩壊させると数学的に証明　ペンシルベニア大＋ボストン大のゲーム理論論文](https://posfie.com/@taimport/p/YYl24fk)** ([133users](https://b.hatena.ne.jp/entry/s/posfie.com/@taimport/p/YYl24fk)) - 両大学の研究者がゲーム理論を用いて「企業が合理的にAIを導入すると集合的に需要を破壊する」ことを数学的に示した論文が話題に。「アメリカ労働者の80%が影響圏内」「市場の力でこれを止めることはできない」という結論は、AI経済論の中でも特に悲観的な見通しとして注目されている。

- **[数学研究におけるAI革命が到来、数学者たちは「これはまだ始まりに過ぎない」と考えている](https://gigazine.net/news/20260414-ai-revolution-in-math/)** ([45users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260414-ai-revolution-in-math/)) - AlphaProof・DeepMind等のAIシステムが未解決数学問題の証明補助や新定理発見に貢献し始めていることを数学者へのインタビューで報告。形式検証ツールとLLMの組み合わせが「数学的直観の外部化」を実現しつつあるという視点は、MoonBitの形式検証サポート動向とも呼応する。

- **[WordPressのプラグイン31個にバックドアが発覚、所有権移転後のアップデートで追加](https://gigazine.net/news/20260414-wordpress-plugin-backdoor/)** ([12users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260414-wordpress-plugin-backdoor/)) - WordPress.orgで公開されている31のプラグインが新しいオーナーへの移転後にバックドアを含むアップデートが配布されていたことが判明。サプライチェーン攻撃の典型例であり、プラグインの自動更新を有効にしているサイトは要注意。

## Zenn

- **[AIエージェントと組んだら、データサイエンスプロジェクトはどう変わる？実験してみた](https://zenn.dev/mimochiz/articles/2c27b16a3e03fd)** - AIエージェントをデータサイエンスワークフローに組み込んだ場合の効果を実験した記事。EDA・特徴量エンジニアリング・モデル選択といったフェーズごとにエージェントの貢献範囲と人間が主導すべき判断を整理しており、DS業務へのAI統合の現実的な指針を提供している。

- **[Claude Max 20xプランでも足りないので、トークン節約のためにやったこと8選](https://zenn.dev/acntechjp/articles/1396e20b5167ce)** - Claude Code最上位プランでもトークン上限に達してしまうという実態を受け、コンテキストエンジニアリングの観点から「必要最小限の情報をClaudeに渡す設計」を8つの手法でまとめた記事。プロンプトの肥大化防止やハーネス設計の要点が実践ベースで整理されており、大規模AIエージェント運用者に参考になる。

- **[Python開発環境をスッキリ整える：uv / Ruff / Taskfile](https://zenn.dev/zaspa/articles/3cc9a01f0d69f6)** - pyenv＋Poetry＋flake8＋blackの従来構成から、Rustベースの高速ツールチェーン `uv`（パッケージ管理）・`Ruff`（リント/フォーマット）・`Taskfile`（タスクランナー）へ移行した手順を解説。ツール統合によりセットアップとCI時間が大幅に短縮できる事例として、Python開発者の環境整備の参考になる。

- **[SREを「努力」から「仕組み」へ — Platform Engineeringという選択](https://zenn.dev/loglass/articles/f4dda877788337)** - 属人的なオペレーション対応（努力）を、セルフサービスの内部開発者プラットフォーム（仕組み）に置き換えるPlatform Engineeringの考え方をSREの視点から論じた記事。「SREが頑張り続けるモデル」の持続可能性限界を整理しており、開発組織のスケールアップ戦略の参考になる。

## Qiita

- **[Claude Codeソースコード流出から学ぶハーネスパターン10選 ── 50万行のTypeScriptが明かした設計思想](https://qiita.com/nogataka/items/ebbbe74649eb441a34db)** - 流出したClaude Codeのソースコード（TypeScript約50万行）を分析し、AIコーディングエージェントのハーネス設計パターンを10個に整理した記事。ツール呼び出しの抽象化・コンテキスト管理・エラーリカバリ戦略など、自社エージェント開発に転用できる設計知識として注目度が高い。

- **[ホワイトカラーの80%がAI導入に反抗している ── 「AI抵抗」の構造と乗り越え方](https://qiita.com/nogataka/items/4464273923cb00271303)** - 調査データをもとにAI導入を拒む組織的・心理的メカニズムを解剖した記事。「道具不信」「学習コスト忌避」「権力構造の変化への恐怖」という三層の抵抗構造を示し、エンジニアが組織変革エージェントとして関与する際のアプローチを論じている。

- **[エンジニアとして設計書をAIで10倍速く書く方法まとめ【プロンプト付き】](https://qiita.com/kamome_susume/items/ce71acf0aa0b80631c35)** - 要件定義書・DB設計書・API仕様書などの設計ドキュメントをLLMで高速生成するための具体的なプロンプト集と、出力の検証ポイントを解説。「コードより設計書の生成難度が低い」という特性を活かしてドキュメント整備コストを下げる実践的アプローチだ。

## AWS 新着

- **[AWS Transform is now available in Kiro and VS Code](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-transform-kiro-vscode/)** (2026-04-14) - AWS TransformがAIネイティブIDEの「Kiro」とVS Codeで利用可能になった。既存アプリのモダナイズ（.NET Frameworkへの移行やJavaバージョンアップなど）をIDE内から直接実行できるようになり、開発ループを離れずに変換作業を完結させられる。

- **[AWS Secrets Manager now supports hybrid post-quantum TLS](https://aws.amazon.com/about-aws/whats-new/2026/04/aws-secrets-manager-post-quantum-tls/)** (2026-04-14) - AWS Secrets ManagerがML-KEM（Module-Lattice-based Key-Encapsulation Mechanism）を用いたハイブリッドポスト量子TLSに対応。量子コンピュータによる「今盗んで後で復号する」攻撃（Harvest Now Decrypt Later）への対策として、高セキュリティ要件の環境ではシークレット通信の量子耐性確保が現実的なアジェンダになってきた。

- **[NVIDIA Nemotron-3-Super-120B、Qwen3.5-9B/27Bモデルが SageMaker JumpStart で利用可能に](https://aws.amazon.com/about-aws/whats-new/2026/04/nemotron3super-120b-qwen3.5-9b-qwen3.5-27b-on-sagemaker-jumpstart/)** (2026-04-13) - NVIDIAの120Bパラメータモデル「Nemotron-3-Super」とAlibabaの最新Qwen3.5シリーズがSageMaker JumpStartに追加。エンタープライズ向けオープンモデルの選択肢が拡充され、クローズドAPIを使わずにAWS内でフルクローズドな推論環境を構築できる。

## Lobsters

- **[Zig 0.16.0 Release Notes](https://ziglang.org/download/0.16.0/release-notes.html)** - Zigの新バージョン0.16.0がリリース。ビルドシステムの改善・コンパイラエラーの可読性向上・新しい組み込み関数の追加など広範な変更が含まれ、システムプログラミング言語としての成熟が着実に進んでいる。

- **[Rust should have stable tail calls](https://trifectatech.org/blog/tail-calls-project-goal/trifectatech.org)** - Rustに安定した末尾呼び出し最適化（TCO）が必要だとする論考。再帰的なパターンマッチや状態機械の実装においてスタックオーバーフローを防ぐためにTCOは必須だという議論を展開し、Rust Projectへのゴールとして追加するよう主張している。

- **[5NF and Database Design](https://kb.databasedesignbook.com/posts/5nf/)** - 第5正規形（5NF / プロジェクション結合正規形）の概念を丁寧に解説した記事。多くの開発者が3NFや4NFまでで止まる中、5NFが解決する「ジョイン依存性」の問題と、それがどのようなデータ異常を防ぐかを実例で説明している。

- **[Lean proved this program was correct; then I found a bug](https://kirancodes.me/posts/log-who-watches-the-watchers.html)** - 定理証明支援系Leanで「正しい」と証明されたプログラムにバグが見つかった経験を記した記事。証明の仮定とランタイムの実際の動作のズレ（未定義動作・仕様の見落とし）が形式検証の限界を露呈した事例として、形式手法の信頼性に関する本質的な問いを投げかけている。

## dev.to

- **[Why Go Handles Millions of Connections: User-Space Context Switching, Explained](https://dev.to/harrison_guo_e01b4c8793a0/why-go-handles-millions-of-connections-user-space-context-switching-explained-kf3)** - GoがOSスレッドではなくgoroutineとユーザー空間コンテキストスイッチで数百万の並行接続を処理できる仕組みをゼロから解説。Javaスレッドモデルとの比較で「40,000接続超えで落ちる理由」がメモリではなく設計の違いにあることを明快に示した解説記事だ。

- **[Three agent frameworks, same missing piece](https://dev.to/sidclaw/three-agent-frameworks-same-missing-piece-3mha)** - 異なる3つのエージェントフレームワークが同時期に「ほぼ同一の機能リクエスト」を受けていたという観察から、現行AIエージェントフレームワーク全体に共通する欠落要素（エージェント間の状態共有・永続的コンテキスト管理）を論じた記事。

- **[ISO 42001 in the Wild: What Certification Actually Proves](https://dev.to/aguardic/iso-42001-in-the-wild-what-certification-actually-proves-4lnf)** - AI管理システムの国際規格「ISO 42001」がSOC 2のようにベンダー評価の標準証明書となりつつある現状を解説。認証バッジが示すものと示さないものを整理しており、AI製品を調達・評価する立場のエンジニアや購買担当者に参考になる。

## TechCrunch

- **[AI datacenter startup Fluidstack in talks for $1B round at $18B valuation](https://techcrunch.com/2026/04/14/ai-datacenter-startup-fluidstack-in-talks-for-1b-round-at-18b-valuation-months-after-hitting-7-5b-says-report/)** - AnthropicのデータセンターをBuilding中のFluidStackが、わずか数ヶ月で時価総額7.5Bドルから18Bドルに急上昇し、10億ドルの追加調達を交渉中と報道。AIインフラへの資金流入が「AIモデル企業」から「物理インフラ企業」にシフトしている潮流を象徴するニュースだ。

- **[Anthropic co-founder confirms the company briefed the Trump administration on Mythos](https://techcrunch.com/2026/04/14/anthropic-co-founder-confirms-the-company-briefed-the-trump-administration-on-mythos/)** - AnthropicのJack Clark共同創業者が、最新モデル「Mythos」について米トランプ政権に事前ブリーフィングを行ったことを認めた。欧州がMythosの配布対象から外されたことと合わせ、AI安全保障とジオポリティクスが深く絡み合うAI外交の最前線として注目される。

- **[London gets closer to its first robotaxi service as Waymo begins testing](https://techcrunch.com/2026/04/14/london-gets-closer-to-its-first-robotaxi-service-as-waymo-begins-testing/)** - WaymoがロンドンでADAS技術の走行テストを開始。英国政府が自律走行規制の整備を進める中、米国外初の商業展開地としてロンドンが有力視されており、欧州・UK市場への本格進出の試金石となる。

- **[Max Hodak's Science Corp. is preparing to place its first sensor in a human brain](https://techcrunch.com/2026/04/14/max-hodaks-science-corp-is-preparing-to-place-its-first-sensor-in-a-human-brain/)** - Neuralink共同創業者のMax HodakによるScience Corp.が、神経系疾患治療を目的とした脳内センサーの初の人体埋め込みを準備中と発表。非侵襲型BMIが先行する中、侵襲型アプローチで精度・帯域幅の優位性を示そうとするアーキテクチャ競争が続いている。

## Ars Technica

- **[Americans ask AI for health care. Hospitals think the answer is more chatbots.](https://arstechnica.com/health/2026/04/americans-ask-ai-for-health-care-hospitals-think-the-answer-is-more-chatbots/)** - 医療情報をAIに質問する米国人が急増する一方、病院側が「公式医療チャットボット」を増設することで対応しようとしていることを報告。公式ボットは安全性重視で保守的な回答に終始するため、患者が結局汎用LLMに戻るという皮肉な循環が生まれている実態を伝える。

- **[Apple chooses Amazon satellites for iPhone, years after rejecting Starlink offer](https://arstechnica.com/tech-policy/2026/04/amazon-to-merge-with-globalstar-become-iphones-primary-satellite-provider/)** - AppleがGlobalstarではなくAmazonの衛星（Project Kuiper）をiPhoneの主要衛星プロバイダーに選定したことが明らかに。かつてStarlinkを拒否した経緯もあり、スマートフォンの衛星通信インフラをめぐるビッグテック間の主導権争いが鮮明になった。

- **[UK gov's Mythos AI tests help separate cybersecurity threat from hype](https://arstechnica.com/ai/2026/04/uk-govs-mythos-ai-tests-help-separate-cybersecurity-threat-from-hype/)** - 英国の研究機関がAnthropicの「Mythos」をサイバーセキュリティの文脈でベンチマーク評価した結果を公表。Mythosが既存の攻撃手法を「発見」する能力は限定的で、脅威の誇張と実態のギャップを整理した報告として、AIセキュリティリスクの正確な評価に貢献している。

## 注目トピック

今回最も横断的に話題になっているのは**Claude Mythos**だ。Vertex AIでのプレビュー提供開始、AnthropicがトランプPHPシュル政権への事前ブリーフィングを実施した事実、英国政府機関によるサイバーセキュリティ評価の公表、そして欧州配布からの除外という4つのニュースが同時多発的に出た。新世代フロンティアモデルの展開が単なる技術リリースを超え、地政学・安全保障・規制対話を伴う外交行為として行われている現実が浮き彫りになっている。

もう一つの軸は**セキュリティとサプライチェーン**だ。WordPress 31プラグインへのバックドア埋め込み（所有権移転後のアップデートを悪用）とAWS Secrets Managerのポスト量子TLS対応が同日に報じられ、「既存の配布チャネルへの信頼が崩れる時代」と「量子耐性暗号への移行が現実のタスクになる時代」が重なっている。Yahoo! JAPANのパスキー完全移行と合わせて、認証・鍵管理・配布インフラ全体の信頼モデルが同時並行で再設計されるフェーズに入ったと言えるだろう。
