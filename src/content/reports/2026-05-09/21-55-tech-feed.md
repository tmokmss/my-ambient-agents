---
title: "Tech Feed ダイジェスト（2026年5月10日）"
date: "2026-05-09T21:55"
category: "summary"
summary: "Just Fucking Use Go・AWS MCP Server GA・Nvidia $40B AI投資・Canvas学習基盤サイバー攻撃・ElastiCache Hybrid Search"
tags: ["ai", "claude-code", "aws", "golang", "security", "frontend", "react", "nvidia", "kubernetes", "devops"]
---

## はてなブックマーク (テクノロジー)

- **[上司になったら｜miyasaka](https://note.com/mmiya/n/n2eec10d531b2)** ([268users](https://b.hatena.ne.jp/entry/s/note.com/mmiya/n/n2eec10d531b2)) - 元楽天・Pixiv CEOの宮坂氏によるマネジメント論。「上司の仕事は部下の仕事を通じて成果を出すこと」という基本から、フィードバックの与え方・採用判断・心理的安全性の実践まで、管理職に転換した技術者が直面するメンタルモデルの変化を平易な言葉で整理している。エンジニアリングマネージャーへのロールチェンジを控えた開発者に刺さる内容。

- **[2026年のソフトウェア開発を考える（2026/05版）](https://speakerdeck.com/twada/software-engineering-scrum-fest-niigata-2026-edition)** ([262users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/twada/software-engineering-scrum-fest-niigata-2026-edition)) - t_wada氏がScrumFest Niigata 2026で発表したスライド。AIエージェントが普及した2026年時点での「ソフトウェアエンジニアの価値の源泉」「テスト設計の本質的役割」「チームとしての判断力」を問い直す内容で、量産よりも品質判断・文脈理解・設計思考が人間のコアコンピタンスになるという主張が展開されている。

- **[あなたの Claude Code、実は前回のセッションを完全に忘れている（5分で永続記憶を入れる）](https://zenn.dev/kanseilink/articles/linksee-memory-claude-code-recall-20260508)** ([142users](https://b.hatena.ne.jp/entry/s/zenn.dev/kanseilink/articles/linksee-memory-claude-code-recall-20260508)) - Claude Codeがセッションをまたいで文脈を保持しないデフォルト動作を解説し、`Memory.md`＋フック設定でセッション間の記憶を5分で実装する手順を紹介した記事。「毎回同じことを説明し直している」という摩擦を解消する即効性から、週明けに試すエンジニアが急増している。

- **[AI時代のリッチテキスト形式（RTF）](https://blog.lai.so/ai-rich-text-format/)** ([141users](https://b.hatena.ne.jp/entry/s/blog.lai.so/ai-rich-text-format/)) - LLMが出力・入力するテキストの「構造化リッチテキスト」としての役割を論じた考察記事。Markdown・HTML・XMLなどがAIにとってどう見えるか、構造情報をどう保持すべきかを整理し、AI時代のドキュメントフォーマット設計の問いを提起している。

- **[フロントエンドの相手が変わった - AIが加わったWebの新しいインターフェース設計](https://speakerdeck.com/azukiazusa1/hurontoendonoxiang-shou-gabian-watuta-aigajia-watutawebnoxin-siiintahuesushe-ji)** ([118users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/azukiazusa1/hurontoendonoxiang-shou-gabian-watuta-aigajia-watutawebnoxin-siiintahuesushe-ji)) - フロントエンドの「相手」が「人間のブラウザ操作」から「AIエージェントのWeb認識」へ拡張されたことを踏まえ、AIフレンドリーなUI設計（セマンティックHTML・ARIAランドマーク・MCP露出）の方向性を示したスライド。人間用UIとAI用UIを分けるのではなく統合して設計するという提言が実践的。

## Zenn

- **[Claude Codeを"使いこなす"ための個人ルール設定 - 実際にやって効果が高かった設定](https://zenn.dev/dotdtech_blog/articles/92348ee48cc692)** - CLAUDE.mdのプロジェクトルール記述・`/slash command`の活用・TodoWriteによるタスク管理の3つを軸に、Claude Codeのパフォーマンスを最大化する個人レベルの設定方法を実体験から紹介した記事。「設定を入れた前後で体感が変わる」という具体的な比較が、読者が即実践できる粒度でまとめられている。

- **[AI時代だからこそ、バグの少ないコードを書くためにTDDを学んだ話](https://zenn.dev/tacos/articles/57420c50c2794e)** - AIが書いたコードにも有効な「Red-Green-Refactorサイクル」の意義を再評価し、AIとTDDを組み合わせたワークフロー（AIにテストを先に書かせてから実装を生成させる）が品質向上に効果的だと実体験から論じた記事。AIが実装を書く時代に「テスト設計は人間が担う」という分業の具体的な形を提示している。

- **[「Claude Codeに全部やらせる時代が来た」のか検証してみた](https://zenn.dev/okazu_dm/articles/83957f1623ec4d)** - 実際のプロダクトコードの一部機能をClaude Codeに全任せして開発するという実験を行い、成功・失敗・人間が必ず介入すべきポイントを記録した検証記事。「任せられる範囲」の解像度を上げる内容であり、自動化の幻想と現実のギャップを定量的に示している点が評価されている。

- **[AIにUIを作らせる前に、デザインの土台を自分で決めるツールを作った](https://zenn.dev/pepabo/articles/74653f4d78eb7b)** - AIがUIを生成する際の「デザインのブレ」を防ぐため、カラーパレット・タイポグラフィ・コンポーネント仕様を人間が先に定義するためのツールを内製したペパボのエンジニアによる記事。AIにデザインを任せきりにせず「制約を先に与える」という設計哲学が実装事例を通じて具体的に語られている。

## Qiita

- **[AWS MCPサーバー超進化してGAしたらしい](https://qiita.com/Syoitu/items/5022be3615ecd8b5337c)** - AWS MCP Server の一般提供（GA）を受け、実際に試した結果をまとめた速報記事。CloudFormation・CDK・SAMなどAWSサービスの操作をMCPプロトコル経由でAIエージェントから呼び出せる点が強調されており、Claude CodeからAWSインフラを自然言語で操作するユースケースが現実化したことへの興奮が伝わる。

- **[個人の暗黙知を組織知に自動昇格させるOSSマルチエージェント基盤を作った話（Apache 2.0）](https://qiita.com/gen99/items/43b3842920d94a6ad1de)** - 個人の業務ログ・Slackメッセージ・ドキュメントを複数エージェントが自動的に抽象化・分類・構造化し、検索可能な組織知識ベースへ変換するシステムをOSSとして公開した事例。「暗黙知の外部化」というナレッジマネジメントの古典的課題に、マルチエージェントアーキテクチャで具体的な回答を提示している。

- **[HTTPS公開直後にBotが来る理由 ─ CT Log監視Botの研究を読む](https://qiita.com/___nix___/items/4db6c2515098b3ef06d9)** - ドメインをHTTPS公開した直後に悪意あるBotがアクセスしてくる理由を、Certificate Transparency（CT）ログの公開性から説明した記事。CT Logを監視して新規ドメインをスキャンするBotの挙動と、開発者が対策として知っておくべきセキュリティ上のポイントを明快に整理している。

- **[Java 8 → 25 メジャーアップが1日で終わった話 ─ Claude Opus 4.7「engineer to delegate to」の威力](https://qiita.com/ntaka329/items/b1ab29e91b6099c4f3a0)** - 通常数週間かかるとされるJava 8から25への17バージョン一気アップグレードを、Claude Opus 4.7に依頼して1日で完了させた実体験レポート。deprecatedAPI・モジュールシステム対応・ライブラリ互換性問題への対処をAIがほぼ自律的に解決した過程と、人間が関与した判断ポイントが詳述されている。

## AWS 新着

- **[Announcing Agent Toolkit for AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/agent-toolkit/)** (2026-05-06) - AIコーディングエージェントがAWSをより少ないエラー・低トークンコスト・エンタープライズグレードのセキュリティ制御で利用できるようにするツール群「Agent Toolkit for AWS」が正式公開。MCP Serverの後継として位置付けられており、AWS CDK・CloudFormation・SAMのベストプラクティスをエージェントが自動的に参照できる仕組みを提供する。

- **[The AWS MCP Server is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-mcp-server/)** (2026-05-06) - AWSリソースの操作・参照をMCPプロトコル経由で実行できる「AWS MCP Server」が一般提供（GA）。Claude Codeを含むMCP対応AIエージェントからAWSサービスを直接呼び出せるようになり、インフラ操作の自動化における接続層が公式サポートで安定化された。

- **[IAM Policy Autopilot adds Java support and Terraform-aware policy generation](https://aws.amazon.com/about-aws/whats-new/2026/05/iam-policy-autopilot/)** (2026-05-08) - IAMポリシーを自動生成するIAM Policy AutopilotがJavaコードの解析とTerraformerとの連携に対応。コードのAPIコール分析からLeast Privilege原則に基づいたIAMポリシーを自動生成する機能が、より広い言語・IaCスタックをカバーすることでゼロからポリシー設計する運用コストを削減する。

- **[Amazon ElastiCache now supports real-time hybrid search with vector and full-text](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-elasticache-hybrid-search/)** (2026-05-06) - ElastiCacheが1つのクエリでベクトル検索（セマンティック類似度）と全文検索（キーワードマッチ）を組み合わせたHybrid Searchに対応。別途OpenSearchなどの検索サービスを立てずにキャッシュ層でRAGのリトリーバル処理が完結できるようになり、AIアプリのアーキテクチャがシンプルになる。

- **[Amazon Bedrock AgentCore now includes Payments (preview)](https://aws.amazon.com/about-aws/whats-new/2026/04/amazon-bedrock-agentcore-payments-preview)** (2026-05-07) - Bedrock AgentCoreに決済機能（プレビュー）が追加され、AIエージェントが人間の介入なしに支払いトランザクションを実行できるようになった。「トランザクションできるエージェント」という新コンセプトは、購買・予約・課金を自律的に処理するエージェントの実用化に向けた重要なインフラ整備といえる。

## Lobsters

- **[Just Fucking Use Go](https://blainsmith.com/articles/just-fucking-use-go/)** ([167pt](https://lobste.rs/s/znlkib/just_fucking_use_go)) - 新規プロジェクトで言語選定に迷っている開発者向けに「シンプルにGoを使え」と主張したエッセイ。標準ライブラリの充実・コンパイル速度・シングルバイナリ・後方互換性の強さ・採用市場の広さを根拠に、「面白い言語」ではなく「退屈で信頼できる道具」としてのGoの価値を再確認する内容。236件のコメントが示すように賛否両論が激しく、言語選択論争の触媒となっている。

- **[On forking the Web](https://dillo-browser.org/lab/web-fork/)** ([41pt](https://lobste.rs/s/ho7nqt/on_forking_web)) - 軽量ブラウザDilloの開発者が「Webを"フォーク"し、単純で軽量な別路線のWebを作るべきだ」と論じた挑発的な考察。複雑化し続けるChromeエコシステムへの依存から脱却するためにはHTML+CSS+リンクという本質的な構成要素だけのWebを再構築するという提案で、IndieWebやGeminiプロトコルの思想と共鳴する内容。

- **[I Will Not Add Query Strings to Your URLs](https://susam.net/no-query-strings.html)** ([32pt](https://lobste.rs/s/vbit2a/i_will_not_add_query_strings_your_urls)) - ライブラリ作者の視点から「URLにクエリストリングを無断で付与するトラッキング/ユーティリティ機能はライブラリに組み込まない」という方針を宣言した記事。URLの恒久性・プライバシー・ユーザー体験を守るための設計原則として、ライブラリエコシステムのデフォルト設計に一石を投じる内容。

- **[Chrome's AI features may be hogging 4GB of your computer storage](https://www.theverge.com/tech/924933/google-chrome-4gb-gemini-nano-ai-features)** ([27pt](https://lobste.rs/s/viodre/chrome_s_ai_features_may_be_hogging_4gb)) - ChromeがローカルAI機能（Gemini Nano）のモデルファイルをユーザーの同意なく4GBほどストレージに書き込んでいることが判明。ブラウザがローカルLLMを内包するアーキテクチャの透明性問題として、ユーザーへの開示・制御権・消費リソースの同意プロセスのあり方を問う議論に発展している。

## dev.to

- **[This Week In React #280: TanStack, Remotion, React Router | Expo Go, Ease, Screen Transitions](https://dev.to/sebastienlorber/this-week-in-react-280-tanstack-remotion-react-router-expo-go-ease-screen-transitions-18mf)** - React界隈の週次ニュースレター。TanStack Router 1.xの新機能、Remotion 4.0のビデオ生成改善、React Router v7の上級テクニック、Expo Goの新Screen Transition APIなどが取り上げられており、フロントエンドエコシステムの急速な進化を一覧できる。

- **[subPath ConfigMap Mounts Don't Hot-Reload: Silent Drift in Kubernetes](https://dev.to/luckypipewrench/subpath-configmap-mounts-dont-hot-reload-silent-drift-in-kubernetes-52jn)** - KubernetesでConfigMapを`subPath`でマウントした場合、ConfigMapが更新されてもPodへの反映がされない（サイレントドリフト）という既知の落とし穴を詳解した記事。設定変更が反映されないまま運用が続くという危険な状態を避けるための回避策（全体マウントへの切り替え・再起動自動化）を具体的に示しており、Kubernetes運用者には必読の内容。

- **[The Three-UID Containment Pattern for AI Agents on Linux](https://dev.to/luckypipewrench/the-three-uid-containment-pattern-for-ai-agents-on-linux-13bd)** - Linuxでが AIエージェントを安全に動かすための3-UID分離パターン（orchestrator UID / agent UID / resource UID）を提案した記事。エージェントが誤って自分のオーケストレーターを変更したり、意図しないリソースへアクセスするリスクをOS権限分離で最小化するアーキテクチャパターンは、エージェントのサンドボックス設計の実践知として価値が高い。

- **[How HPC Clusters Accelerate AI/ML Training](https://dev.to/zubairakbar/how-hpc-clusters-accelerate-aiml-training-15a2)** - HPC（高性能計算）クラスターがAI/MLトレーニングを高速化する仕組みを解説した入門記事。InfiniBand高速ネットワーク・NVLink GPU間通信・分散データロードの3層構造が、単一GPU比で数十〜数百倍のスループットを実現するメカニズムを図解しており、MLインフラの基礎理解に適している。

## TechCrunch

- **[Nvidia has already committed $40B to equity AI deals this year](https://techcrunch.com/2026/05/09/nvidia-has-already-committed-40b-to-equity-ai-deals-this-year/)** (2026-05-09) - NvidiaがGPU販売にとどまらず2026年だけで400億ドル相当のAIスタートアップへのエクイティ投資を実行済みであることが明らかになった。チップベンダーからAIエコシステム全体の出資者・共同事業者へと転換するNvidiaの戦略的拡張は、IntelやAMDとの競争軸をハードウェア性能から資本関係にまで拡大するものだ。

- **[Intel's comeback story is even wilder than it seems](https://techcrunch.com/2026/05/08/intels-comeback-story-is-even-wilder-than-it-seems/)** (2026-05-08) - プロセス技術の遅延・市場シェア喪失・大規模リストラを経たIntelが、新CEOのもとで製造受託（ファウンドリ）事業を中核に据えた再建策を進めていることを詳報した記事。AI向けカスタムシリコン受託製造を巡る米政府の補助金（CHIPS法）とIntelの内部再編の関係が明快に整理されている。

- **[Poland says hackers breached water treatment plants, and the US is facing the same threat](https://techcrunch.com/2026/05/08/poland-says-hackers-breached-water-treatment-plants-and-the-u-s-facing-the-same-threat/)** (2026-05-08) - ポーランドの複数の水処理施設がサイバー攻撃を受けてシステムへのアクセスを許したことを当局が公表した。CISAが米国の同様のインフラへの脅威を警告しており、OT（運用技術）セキュリティの脆弱性が重要インフラに与えるリスクが再び焦点となっている。ITとOTのネットワーク分離・プロトコルレベルのゼロトラスト適用の重要性が改めて示された。

## Ars Technica

- **[The new Wild West of AI kids' toys](https://arstechnica.com/ai/2026/05/the-new-wild-west-of-ai-kids-toys/)** (2026-05-09) - 子ども向けAI玩具市場が急拡大する一方、プライバシー保護・不適切コンテンツフィルタリング・データ収集に関する規制の空白が放置されている実態を取材した記事。COPPA（子どもオンラインプライバシー保護法）が音声会話型AIデバイスに適切に適用されていない現状と、各社の対応のバラつきが具体的な製品名と共に報告されている。

- **[Sony says "efficient" AI tools will lead to even more games flooding the market](https://arstechnica.com/gaming/2026/05/sony-says-efficient-ai-tools-will-lead-to-even-more-games-flooding-the-market/)** (2026-05-08) - ソニーがAIツールによるゲーム開発コスト低下が「市場に大量のゲームをあふれさせる」と予測し、発見性・品質保証・ストアキュレーションの問題が深刻化すると分析した。コンテンツ量産時代における「見つけてもらう」ためのメタデータ設計・レーティングシステム・AIによるレコメンデーション精度の重要性が改めて浮き彫りになる。

- **[Course correction: Google to link more sources in AI Overviews](https://arstechnica.com/google/2026/05/google-will-put-more-links-to-websites-in-ai-overviews/)** (2026-05-08) - GoogleがAI Overviews（AI概観機能）で表示するソースリンクの数を増やす方針を発表した。出版社やコンテンツクリエイターからの「トラフィックを横取りしている」という批判を受けた方針転換であり、LLMによるコンテンツ集約と原典へのリンク配分という構造的緊張に対するGoogleの暫定的な回答といえる。

- **[Chaos erupts as cyberattack disrupts learning platform Canvas amid finals](https://arstechnica.com/security/2026/05/chaos-erupts-as-cyberattack-disrupts-learning-platform-canvas-amid-finals/)** (2026-05-08) - 期末試験シーズン真っ只中に学習管理システム（LMS）「Canvas」がサイバー攻撃を受けてサービス停止し、世界中の学生・教員が試験提出・採点・授業資料へのアクセスを失った。重要な教育インフラがシングルポイントオブフェイラーとなるリスクと、代替手段のないクラウドLMSへの依存度の高さが問題として浮上している。

## 注目トピック

今号を横断する第一のテーマは**「AIエージェントのインフラ整備とリスク管理の両輪」**だ。AWS MCP Server・Agent Toolkit・Bedrock AgentCore Paymentsという3つのGAアップデートが示すように、AIエージェントがAWSリソースを操作し決済まで実行できるようになるインフラ整備が急速に進んでいる。その一方で、Linuxでの3-UID分離パターン・Canvas LMSのサイバー攻撃・水処理施設への侵害という事例群は「自律的に動くシステムのサイバー攻撃耐性」への問いを改めて提起する。エージェントに能力を与える速度と、そのエージェントが動く基盤を守る投資が均衡しているかを問い直すタイミングにある。

第二のテーマは**「Goという退屈な選択肢の再評価と、Webの複雑性への反発」**だ。「Just Fucking Use Go」が167ptを獲得し236件の議論を引き起こしたことは、新興言語の熱狂が落ち着いた後に「運用可能性・採用市場・後方互換性」という地味な軸でGoが選ばれる現実を反映している。同時に「On forking the Web」がChromeへの依存を問い直し、「I Will Not Add Query Strings」がURLの純粋性を守ろうとする姿勢は、技術スタックの複雑化・肥大化に対するバックラッシュとして一貫したメッセージを持つ。NvidiaのAI投資400億ドルとIntelの復活劇が示す「AI覇権レースの資本競争」という大きなストーリーとは対照的に、こうした「シンプルさへの回帰」の流れがエンジニアリング文化のもう一つの軸として存在感を増している。
