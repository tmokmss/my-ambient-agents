---
title: "Tech Feed ダイジェスト（2026年5月28日）"
date: "2026-05-28T12:38"
category: "summary"
summary: "Windowsフォルダー正解・AI雇用危機論・Polymarket不正・Snowflake Agent Sharing・NVIDIA Blackwell on SageMaker・Erlang原子枯渇CVE"
tags: ["ai", "security", "aws", "hardware", "devtools", "typescript", "rust", "erlang", "claude-code", "editors"]
---

## はてなブックマーク (テクノロジー)

- **[最新のWindowsでアプリのインストール先はどこにすべき？ Windowsのフォルダー構成を正しく理解しよう](https://forest.watch.impress.co.jp/docs/special/2104573.html)** ([359users](https://b.hatena.ne.jp/entry/s/forest.watch.impress.co.jp/docs/special/2104573.html)) - `Program Files`・`AppData`・`ProgramData`など各フォルダーの意味と役割を整理した解説記事。管理者権限が必要かどうか・複数ユーザー間での共有可否・アンインストール後の残骸問題まで含めて体系的に論じており、Windowsアプリ開発者にとっても有用な一次知識として高い需要を集めている。

- **[「コーディングを学べ」もう通用せず、AIが若者の雇用を奪い始めた](https://www.technologyreview.jp/s/383775/its-time-to-address-the-looming-crisis-in-entry-level-work/)** ([115users](https://b.hatena.ne.jp/entry/s/www.technologyreview.jp/s/383775/its-time-to-address-the-looming-crisis-in-entry-level-work/)) - MIT Technology Reviewが「コーディングを学べ」というキャリアアドバイスがAIコーディングエージェントの台頭により機能しなくなりつつある現象を報告。エントリーレベルのソフトウェア職が最初に自動化の打撃を受ける構造的問題を指摘し、教育政策・採用慣行・給付設計の見直しを迫る内容。

- **[グーグル社員をインサイダー取引で起訴、予測市場で約2億円の不当利益](https://japan.cnet.com/article/35248163/)** ([26users](https://b.hatena.ne.jp/entry/s/japan.cnet.com/article/35248163/)) - Google社員が2025年末の「Year in Search」公開前に内部情報を基にPolymarketで賭けを行い約120万ドル（約1.7億円）の利益を得たとして起訴された。予測市場が従来の証券取引に類するインサイダー取引規制の対象となった事例として注目され、AI・暗号資産・予測市場が交差する新たな法的グレーゾーンを浮き彫りにした。

- **[動画生成AI「Runway」がChatGPTやClaudeのチャット内で利用可能に](https://gigazine.net/news/20260528-runway-mcp-chatgpt-claude/)** ([25users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260528-runway-mcp-chatgpt-claude/)) - Runway社がMCPサーバーを公開し、Claude・ChatGPTのチャット画面から参考画像やアイデアのテキストを入力するだけで動画を生成できるようになった。動画生成がテキスト生成と同一の会話フロー内に統合されたことで、モーションプロトタイプやマーケティング素材作成の工程が大幅に短縮される可能性がある。

- **[「AIも使い続けていると人間のように老化する」という指摘、セッションを重ねて記憶が蓄積されることで性能悪化](https://gigazine.net/news/20260528-agingbench-ai-agents-age-too/)** ([11users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260528-agingbench-ai-agents-age-too/)) - AgingBenchベンチマークがAIエージェントのコンテキストウィンドウに情報が蓄積されるにつれて推論精度・応答一貫性が低下する現象を「老化」と命名し定量評価した研究。長時間セッションでの品質劣化を前提とした設計（定期的なコンテキストリセット・要約圧縮）の重要性を示す実証的な知見として注目される。

## Zenn

- **[お前達にも教えよう。SnowflakeのAgent Sharingがすごくすごいことを。](https://zenn.dev/truestar/articles/72183e3b2e619c)** - Snowflake MarketplaceにひっそりとリリースされたAgent Sharing機能の解説。構築したAIエージェントをMarketplace経由で他のSnowflakeアカウントに共有・再利用できる機能で、データ製品と同様にエージェントそのものを流通させるエコシステムへの第一歩として開発者の注目を集めている。

- **[Opus 4.7 と GPT-5.5 のレビュー特性を統計的に明らかにした（オトナの自由研究 #19）](https://zenn.dev/nnakapa/articles/lab-19-opus47-gpt55-code-review)** - Claude Opus 4.7とGPT-5.5のコードレビュー特性を720ケースに対して統計的に検証した論文風記事。「Opus 4.7は半年後の可読性を重視した辛口評価」「GPT-5.5は書かれた制約を文字通り適用する原則主義評価」という非対称な傾向差が明らかになり、レビュアーとしてのモデル選択に具体的な根拠を提供している。

- **[TsKaigi 2026の振り返りをします。自分の登壇の反省など。](https://zenn.dev/melonps/articles/b3b7f6d3014c3d)** - TypeScript最大カンファレンス「TsKaigi 2026」の参加レポート。TypeScript 7.0（tsgo）の進捗・Claude CodeやCodexが当たり前になった開発現場の変化・型システムの進化方向が主要トピックとして挙げられており、2025年から2026年のTypeScriptエコシステムの変化を俯瞰するための概況整理として参考になる。

- **[Laravelというフレームワークの開発、またはTaylor Otwellのビジネスセンスと技術的美学について](https://zenn.dev/shunjuio/articles/laravel-and-taylor)** - PHPフレームワーク最大手Laravelの作者Taylor Otwellが「技術的な完成度」と「ビジネスとしての持続性」を同時に追求してきた戦略を分析した考察記事。オープンソースプロジェクトが商業的に成立するための哲学と、プロジェクト管理者としての意思決定パターンが具体的な事例と共に整理されており、OSS運営の参考になる。

- **[GitHub Copilot CLIの/chronicleで課金体系の変更に備えよう](https://zenn.dev/aeonpeople/articles/morihaya-20260527-copilot-cli-chronicle)** - GitHub Copilot CLIの`/chronicle`コマンドを使ってリポジトリの変更履歴を自然言語でサマリーする機能の解説と、Copilot料金体系変更前にCLI利用量を最適化するノウハウを紹介。SREチームの実務ユースケースを交えており、Copilot CLI活用の即戦力的な情報として価値がある。

## Qiita

- **[文系東大生が、GPT型モデルをフルスクラッチで開発する話 Part.1](https://qiita.com/UT_AI_CLUB/items/fae636ab3a9b75ebf930)** - 文系出身の東大生がTransformerアーキテクチャの仕組みを理解するためにGPT型モデルをゼロから実装するシリーズ連載の第1回。数学的な前提知識の整備から実装への接続を丁寧に説明しており、LLMの内部動作を「使う側」から「作る側」の視点で理解したい開発者の入門リソースとして需要が高い。

- **[16万スター超のCLAUDE.mdに学ぶ、Claude Codeを暴走させない運用術](https://qiita.com/4q_sano/items/dc26f7468dcd39fbe62f)** - Anthropicの公式リポジトリで16万スターを超えるCLAUDE.mdの書き方を解析し、「Claude Codeに自律的に動かせる範囲」と「人間の確認が必要な範囲」を明示的に記述することで暴走リスクを制御するパターンを解説。実際の運用事例に基づくルール設計の知見は、Claude Codeを本格導入したチームの設計参考として実践的。

- **[これがいいとは言わないが。私が普段 Vibe Coding で実際に投入しているPromptを晒す](https://qiita.com/dahatake/items/ef5cb2ad8d0e27dd976a)** - Microsoftのエンジニアが実務のVibe Codingで実際に使うシステムプロンプト・コンテキスト投入のパターンを包み隠さず公開した記事。「いいとは言わない」という前置きをしつつも実効性を認めており、試行錯誤の痕跡がそのまま見える一次情報として再現性が高い。

## AWS 新着

- **[Announcing Region Expansion of P6-B200 instances on SageMaker Notebook Instances](https://aws.amazon.com/about-aws/whats-new/2026/06/p6-b200-region-expansion-sagemaker-notebook-instances/)** (2026-05-27) - NVIDIA Blackwell B200 GPUを8基搭載し合計1440 GBのGPUメモリを持つP6-B200インスタンスがSageMaker Notebook InstancesのUS East（バージニア）でGA。Hopper世代（H100/H200）の次世代となるBlackwell GPUが初めてSageMaker環境に降りてきたことで、大規模LLMの学習・ファインチューニングのコストパフォーマンスが大幅に改善する見通し。

- **[Amazon Aurora MySQL now supports integration with Kiro Powers](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-aurora-mysql-kiro-powers/)** (2026-05-27) - Amazon Aurora MySQL互換エディションがAWSの新規AIコーディングツール「Kiro」のPowers（事前パッケージ化されたエージェント機能セット）と統合された。Aurora MySQLを使うアプリケーション開発をKiroエージェントが自動補完・スキーマ生成・クエリ最適化提案する機能で、AWSが独自のAIコーディングエコシステム構築を加速している姿勢が見える。

- **[Amazon Bedrock expands support for Service Quotas](https://aws.amazon.com/about-aws/whats-new/2026/5/amazon-bedrock-service-quotas/)** (2026-05-27) - Amazon Bedrockがbedrock-mantleエンドポイントの推論クォータをAWS Service Quotasコンソールから直接確認・申請できるようになった。従来はサポート問い合わせが必要だったクォータ管理が自動化インターフェイスで完結するようになり、本番ワークロードのキャパシティプランニングが大幅に効率化される。

- **[SageMaker Notebook Instances now support P5en.48xl instance types](https://aws.amazon.com/about-aws/whats-new/2026/02/p5en-new-instance-launch-sagemaker-notebook-instances/)** (2026-05-27) - H200 GPUを8基搭載しH100比でGPUメモリ1.7倍・メモリ帯域1.4倍のP5en.48xlインスタンスがSageMaker Notebook Instancesで利用可能に。B200（P6）より低コストでH200の大メモリ帯域が必要な推論・学習ワークロード向けの選択肢として実用的な追加となる。

## Lobsters

- **[Atom Exhaustion Is Not a Footgun. It's One Third of Our CVEs](https://erlef.org/blog/security/atom-exhaustion)** ([51pt](https://lobste.rs/s/lfusbg/atom_exhaustion_is_not_footgun_it_s_one)) - Erlang/ElixirにおいてAtom（シンボル）がガベージコレクションされないランタイム仕様を突いた「Atom枯渇攻撃」がErlang Ecosystem Foundationに報告されたCVEの実に3分の1を占めることを示した論文。ユーザー入力からAtomを生成する処理パターンを網羅的に分類し、既存コードの修正指針と静的解析ルールを提示している。

- **[What are some of your favourite developer tools?](https://lobste.rs/s/2jdvxa/what_are_some_your_favourite_developer)** ([106pt, 157コメント](https://lobste.rs/s/2jdvxa/what_are_some_your_favourite_developer)) - Lobstersで最も盛り上がっているスレッド。AIコーディングツール全盛の2026年に「好きな開発ツール」を問うと、ripgrep・fd・jq・tmux・Neovimといった伝統的CLIツールが依然として上位を占め、AIエージェントよりも「基礎を支える手道具」への愛着が語られている点が興味深い。

- **[A Love Letter to Neovim](https://caio.ca/blog/a-love-letter-to-neovim)** ([37pt](https://lobste.rs/s/m57z5f/love_letter_neovim)) - Neovimを単なるエディタではなく「コードを扱う思考の拡張」として捉え直した愛着エッセイ。VSCode+Copilotへの回帰圧力がある中でNeovimを使い続ける理由として「キーストロークが思考と同期する」という体感的なモデルを論じており、エディタ選択を哲学的に考えたい開発者に刺さる内容。

- **[Creusot helps you prove your Rust code is correct](https://github.com/creusot-rs/creusot/tree/master)** ([15pt](https://lobste.rs/s/xtydht/creusot_helps_you_prove_your_rust_code_is)) - Rustコードの正しさを形式的に証明するツール「Creusot」の紹介。WhyMLを使った事後条件・事前条件の記述と、SMTソルバーによる自動証明検証を組み合わせており、セーフコードの型安全性に加えてロジック的正確性まで機械的に確認できる。暗号実装・金融計算などミッションクリティカルなRustコードへの応用が期待される。

## dev.to

- **[Google I/O 2026: MCP Is Now Infrastructure (Spark, Managed Agents, WebMCP & More)](https://dev.to/om_shree_0709/google-io-2026-mcp-is-now-infrastructure-spark-managed-agents-webmcp-more-4ap0)** - Google I/O 2026でMCP（Model Context Protocol）がGoogleのAIインフラとして公式採用され、Firebase・Vertex AI・Workspaceとの統合が発表されたことをまとめた記事。WebMCPによるブラウザネイティブのエージェント連携・Managed AgentsによるGCP上でのエージェントホスティングなど、MCPが単なるプロトコルからエコシステムの中核に格上げされた経緯を整理している。

- **[Nobody on the internet knows if you are a human](https://dev.to/danieltanfh95/nobody-on-the-internet-knows-if-you-are-a-human-19i2)** - AI生成コンテンツの急増により「ネット上の書き込みが人間か否か」の判別が実質不可能になりつつある現象を論じた記事。CAPTCHAの無力化・ソーシャルメディアのbotインフレ・コメント欄の信頼崩壊という三段階の変化を指摘し、「人間性の証明」がデジタルアイデンティティの新たな価値軸になっていく可能性を示唆している。

- **[Why Block Handed Goose to the Linux Foundation: Agentic AI Goes Open](https://dev.to/pickuma/why-block-handed-goose-to-the-linux-foundation-agentic-ai-goes-open-h2n)** - Block（Square/Cash App）がAIエージェントフレームワーク「Goose」をLinux Foundationに寄贈した意図を分析した記事。特定企業がAIエージェントの標準的な実行環境を囲い込むことへの牽制と、オープンなエージェントエコシステム構築への意思表示として、Claude Code・Devin・Copilot Workspaceとの競合構図を整理している。

## TechCrunch

- **[Google engineer charged with insider trading after making $1.2M on Polymarket](https://techcrunch.com/2026/05/27/google-engineer-charged-with-insider-trading-after-making-1-2m-on-polymarket/)** (2026-05-28) - Googleエンジニアが「2025年の年間検索ランキング」公開前に内部情報を使ってPolymarketで270万ドルを賭け、120万ドルの利益を得たとして起訴された。暗号資産ベースの予測市場への従来型インサイダー取引規制の適用という先例となる事案で、Polymarketをはじめとする予測市場の急成長に伴う規制整備の方向性を占う事件として注目されている。

- **[Oura unveils its Ring 5 with a thinner, lighter design starting at $399](https://techcrunch.com/2026/05/28/oura-unveils-its-ring-5-with-a-thinner-lighter-design-starting-at-399/)** (2026-05-28) - Ouraが第5世代スマートリングを発表、前世代比で40%小型化し精度向上・バッテリー延命を実現、399ドルから。Apple WatchやGarminと異なる「画面なし・常時装着型」のフォームファクターが健康データ収集デバイスの選択肢として確立されつつあり、ウェアラブル市場の分化が加速している。

- **[Why Google's AI can't spell Google (or anything else)](https://techcrunch.com/2026/05/27/why-googles-ai-cant-spell-google-or-anything-else/)** (2026-05-28) - GoogleのAI（Gemini）がスペルミス・文字数カウント・単純な文字操作を正確にこなせない問題を取り上げた記事。テキストをトークン列として処理するアーキテクチャ的制約と、LLMが「文字を数える」「逆さに読む」といった操作を苦手とする根本原因を解説しており、LLMの限界を理解したシステム設計の重要性を再認識させる内容。

- **[Payroll startup Remote says it grew revenue 50% per employee without adding headcount](https://techcrunch.com/2026/05/27/payroll-startup-remote-says-it-grew-revenue-50-per-employee-without-adding-headcount/)** (2026-05-27) - 給与計算SaaS企業のRemoteがAI導入により人員増加なしで従業員一人あたりの収益を50%向上させ、ARR3億ドル超でキャッシュフロープラス達成。「AIによる生産性向上がエントリーレベル雇用に打撃を与える」という上記記事と対になる事例として、企業側から見たAI導入効果の実測値として注目される。

## Ars Technica

- **[Mystery GPS jammer in Iran becomes test for NASA satellites' capabilities](https://arstechnica.com/gadgets/2026/05/nasa-satellites-can-spot-gps-jammers-on-earth/)** (2026-05-27) - イランで謎のGPS妨害電波源が検出され、NASAの衛星がその位置特定に使われたことを報告する記事。地球観測衛星が電波妨害源の検知・位置特定に活用できることが実証され、軍事・民間を問わずGPS妨害対策の可視性が向上しつつある現状を示している。

- **[Roku OS's home screen now features a large, permanent ad](https://arstechnica.com/gadgets/2026/05/roku-oss-home-screen-now-features-a-large-permanent-ad/)** (2026-05-27) - Rokuがホーム画面に常時表示される大型広告を導入し、ユーザーから強い批判を受けている。デバイス購入後もソフトウェアアップデートで体験を変更できるという「所有しているようで所有していない」スマートデバイスの問題を改めて浮き彫りにした事例で、ハードウェア価格を抑えて広告収益で補完するビジネスモデルの限界が問われている。

## 注目トピック

**AIと雇用・人間性の交点**：本日のフィードで特に目立つのは「AIが人間の仕事・能力・アイデンティティをどう変えるか」という問いへの多角的なアプローチだ。MIT Technology Reviewが「コーディングを学べ」という従来のキャリアアドバイスの無効化を論じ、TechCrunchがRemoteの50%生産性向上（＝採用不要）を報告し、dev.toが「ネット上の人間判別が不可能になった」と指摘し、AgingBenchが「AIエージェント自身も老化する」という知見を示す。これらは個別の技術トピックでありながら、「AIが当たり前になった後に人間とAIが互いに何を担うか」という問いへの収束を示している。

**インフラレイヤーでのAI統合加速**：AWS SageMakerへのNVIDIA Blackwell B200対応、Google I/OでのMCPのインフラ格上げ、SnowflakeのAgent Sharing機能、RunwayのMCP統合と、AIの活用が「アプリケーション」層から「インフラ・プラットフォーム」層に下りてきたことが今日の複数ソースで確認できる。特にMCPがGoogleによってFirebase・Vertex AIに公式統合されたことは、ClaudeとOpenAIが先行して普及させたプロトコルがインターネットインフラの一部になりつつあることを意味し、エージェント開発の前提が大きく変わりつつある。
