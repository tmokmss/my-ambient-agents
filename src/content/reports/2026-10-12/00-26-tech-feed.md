---
title: "Tech Feed ダイジェスト（2026年10月12日）"
date: "2026-10-12T00:26"
category: "summary"
summary: "Cloudflareによる Deno 買収、Let's Encrypt の64日証明書、MCP のエージェント間通信リスク、Aurora DSQL の部分インデックスなど"
tags: ["tech-feed", "security", "aws", "ai", "tls", "cloudflare", "rust", "typescript"]
---

## はてなブックマーク (テクノロジー)
- **[証券口座パスキーの安全性を高めよ！”物理キー”を本格導入した話](https://toruoka.xyz/202610_security_key/)** ([93users](https://b.hatena.ne.jp/entry/s/toruoka.xyz/202610_security_key/)) - 証券口座のパスキー認証を物理セキュリティキーで強化した導入記。同期型パスキーの弱点と、ハードウェアキーに寄せる運用判断が読みどころ。
- **[ゼロトラストはキツくない｜「完成」を目指す運用がキツい](https://blog.cloudnative.co.jp/articles/answer-ai-era-zero-trust/)** ([25users](https://b.hatena.ne.jp/entry/s/blog.cloudnative.co.jp/articles/answer-ai-era-zero-trust/)) - ゼロトラストを「完成させるもの」ではなく継続的に運用・改善するものと捉え直す考察。AI 時代の防御設計の視点を提供する。
- **[個人がCAD「SolveCraft」を無料公開、Fusionの部品76個を再現](https://fabscene.com/new/make/solvecraft-open-source-parametric-3d-cad-rust-fusion-76-parts-mcp/)** ([22users](https://b.hatena.ne.jp/entry/s/fabscene.com/new/make/solvecraft-open-source-parametric-3d-cad-rust-fusion-76-parts-mcp/)) - Rust 製のオープンソース・パラメトリック CAD。MCP 経由で AI から操作する構成も特徴。
- **[Boris Tane: self-improving software is inevitable](https://boristane.com/blog/self-improving-software-is-inevitable/)** ([33users](https://b.hatena.ne.jp/entry/s/boristane.com/blog/self-improving-software-is-inevitable/)) - ソフトウェアが自己改善していく流れは不可避だとする論考。エージェントによる開発ループの将来像を扱う。

## Zenn
- **[CSSの`text-box`で文字を上下中央に揃えたい](https://zenn.dev/chot/articles/be424332489e7a)** - 中央揃えにしても文字がズレて見える原因をフォントのメトリクスから説明し、`text-box` で補正する考え方を解説する。
- **[Haiku 5.5 を機に Sonnet 以下で動かしていたサブエージェントを見直した](https://zenn.dev/genda_jp/articles/haiku-5-5-subagent-roles)** - Haiku 5.5 が初めて effort 指定に対応し、単価が 4.5 の 1/10 になったことを受け、サブエージェントの役割とモデル割り当てを再設計した実践記。
- **[GraphRAGをゼロから詳しく解説する【ナレッジグラフ・オントロジー】](https://zenn.dev/tetsuro731/articles/6efe77a20b8c1c)** - RAG からナレッジグラフ、オントロジー、GraphRAG への流れを整理。「Graph + RAG の手法」と Microsoft の同名 OSS という2つの意味を区別して説明する。
- **[オートパイロットは外せる人間を前提にしている — AI時代のエンジニア技能維持を航空業界に学ぶ](https://zenn.dev/shimitaro/articles/eb45d8d63c7bd1)** - FAA・EASA・ICAO の制度を一次資料で整理し、鍵は「自分で書く力」よりも「自動化から引き継ぐ力」の維持だと論じる。
- **[Besu ローカル環境構築ハンズオン](https://zenn.dev/komlock_lab/articles/besu-local-network-handson)** - Mac 上でバリデータ4台の Besu ネットワークを立て、3分の2以上の署名で確定し、3分の1超が止まると停止する挙動を手元で確認する。

## Qiita
※ 冒頭抜粋から読み取れる範囲での紹介。
- **[Firestore エミュレーターが重すぎたので、Java なしで動く互換エミュレーターを Rust で作った](https://qiita.com/nomunomu0504/items/f764426407431c183016)** - 公式エミュレーターの重さを理由に、Rust 製の互換エミュレーター hidane（v0.1.0）を作った話。ローカル開発と CI の高速化が狙い。
- **[TypeScriptでクラスを書くとTS1294: This syntax is not allowed when erasableSyntaxOnly is enabled.](https://qiita.com/J-T_ky2g/items/18484567749476d57974)** - コンストラクタのパラメータプロパティが `erasableSyntaxOnly` 有効時にエラーになる問題と、その回避方法。
- **[【AWS】GitHub ActionsとAgentCore Evaluationsでエージェントの評価をCI/CDに組み込んでみた](https://qiita.com/yakumo_09/items/6f3936d9f7255a4259d9)** - GitHub Actions から AgentCore Evaluations を呼び、dev → stg → prd の各環境でエージェントの品質ゲートを作る実践例。
- **[Claude Codeに任せる範囲と止める仕組みの設計](https://qiita.com/charge0315/items/fcec85cc5250e39bab97)** - 計画モード、SessionStart フック、/loop、課金前確認を使い分け、任せる範囲と止める箇所を設計した事例。
- **[自分用のDesklyにRemote MCPとOAuthを付けた](https://qiita.com/ishizakahiroshi/items/7eb94a303a1aab6e0f98)** - Cloudflare Workers 上の入口に Remote MCP と OAuth を付けて Claude Code から読み書きできるようにした。同意ボタンやスマホ側のキャッシュでつまずいた点も共有されている。

## AWS 新着
- **[Amazon Aurora DSQL now supports partial indexes](https://aws.amazon.com/about-aws/whats-new/2026/10/aurora-dsql-partial-indexes/)** (2026-10-02) - テーブルの一部の行だけにインデックスを張れるようになり、クエリ性能向上とインデックスサイズ削減が見込める。
- **[Amazon ECS adds Amazon VPC Lattice support for blue/green, linear, and canary deployments](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-ecs-vpc-lattice-blue-green-deployments)** (2026-10-02) - VPC Lattice を使う ECS サービスで、組み込みの blue/green・linear・canary デプロイが使える。
- **[Amazon Redshift adds support for creating and refreshing Apache Iceberg materialized views](https://aws.amazon.com/about-aws/whats-new/2026/10/redshift-iceberg-materialized-views)** (2026-10-05) - 重い結合・集計の結果を Iceberg 形式のマテリアライズドビューとして保持し、更新もできる。
- **[Uncover blind spots in AWS data plane operations with CloudTrail Event Coverage](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-cloudtrail-event-coverage/)** (2026-09-30) - データプレーン操作のうち、どれが CloudTrail で記録されているかをアカウント／組織単位で確認できるコンソール機能。
- **[Amazon Bedrock Managed Agents, powered by OpenAI, is now available in preview](https://aws.amazon.com/about-aws/whats-new/2026/09/bedrock-managed-agents-preview/)** (2026-09-29) - AWS と OpenAI が共同開発した、OpenAI の Agents API をベースに AWS ネイティブ化したマネージドエージェント基盤。

## Lobsters
- **[Inside a 1980s filter chip that uses switched capacitors](http://www.righto.com/2026/10/ML10-switched-capacitor-filter.html)** (21pt) - 1980年代のスイッチトキャパシタ・フィルタ IC をダイ写真から解析し、内部構造を読み解く。
- **[LineageOS 24.0 released](https://lineageos.org/Changelog-32/)** (35pt) - LineageOS の新メジャーリリース。対応端末と変更点がまとめられている。
- **[Arena Allocators in C](https://eliasebner.com/blog/guides/arena-allocators-in-c/)** (11pt) - C でアリーナアロケータを実装するガイド。一括解放でメモリ管理を単純にする。
- **[Consistency is not a localized property](https://n-the-loop.com/blog/consistency-is-not-a-localized-property/)** (10pt) - 一貫性は局所的に保証できる性質ではないという観点から、データベースと AI まわりの設計を論じる。
- **[Making React Context Cheap with React Compiler](https://jjenzz.com/making-react-context-cheap/)** (3pt) - React Compiler を前提に、Context による再レンダリングのコストを抑える方法を扱う。

## dev.to
- **[The Epistemology of Quality](https://dev.to/cheetah100/the-epistemology-of-quality-4cmi)** - コードが正しいと「どうやって知るのか」、人間のコードレビューが果たす役割は何かを問う論考。
- **[Making cross-platform local AI easier with llamadart](https://dev.to/gde/making-cross-platform-local-ai-easier-with-llamadart-2l4k)** - Dart／Flutter から llamadart でローカル LLM をオフライン実行する方法。
- **[Universal Search MCP for Google Workspace with Claude Code](https://dev.to/gde/universal-search-mcp-for-google-workspace-with-claude-code-3ilm)** - Gmail・Drive・Calendar・Chat を横断検索する `search_corpus` ツールを持つ MCP サーバーを Claude Code のスキルとして組み込む。
- **[Where Did My Data Go? Benchmarking LLMs as Data Pipeline Detectives](https://dev.to/olgabraginskaya/where-did-my-data-go-benchmarking-llms-as-data-pipeline-detectives-21kd)** - データパイプラインでデータが失われた箇所を LLM が特定できるかをベンチマークした。
- **[Build a Tiny Virtual Pet on Arduino in 60 Minutes](https://dev.to/heraistudio/build-a-tiny-virtual-pet-on-arduino-in-60-minutes-2cf)** - Arduino Uno Q で LED の顔が動く、たまごっち風の仮想ペットを作る入門チュートリアル。

## TechCrunch
- **[Cloudflare acquires Deno to improve its Workers programming model](https://techcrunch.com/2026/10/10/cloudflare-acquires-deno-to-improve-its-workers-programming-model/)** - Cloudflare が JavaScript ランタイム Deno を買収し、Workers のプログラミングモデルと基盤の改善に生かす。
- **[Amazon drops data center NDAs, and AI agents want your credit card](https://techcrunch.com/podcast/amazon-drops-data-center-ndas-and-ai-agents-want-your-credit-card/)** - Amazon が自治体とのデータセンター交渉で NDA を使わない方針に転じた。Microsoft に続く動きで、秘密主義が招いた地域の反発を和らげる狙い。
- **[TechCrunch Mobility: A roadblock clears for self-driving trucks](https://techcrunch.com/2026/10/11/techcrunch-mobility-a-roadblock-clears-for-self-driving-trucks/)** - 自動運転トラックの規制上の障害が一つ解消されたことを取り上げる週次ニュースレター。

## Ars Technica
- **[Let's Encrypt cuts certificate lifetimes to 64 days starting February 2027](https://arstechnica.com/gadgets/2026/10/lets-encrypt-cuts-certificate-lifetimes-to-64-days-starting-february-2027/)** - 無料 TLS 証明書の有効期間が2027年2月から64日に短縮される。ACME による自動更新が前提の運用になる。
- **[MCP for agent-to-agent comms may be the riskiest protocol you've never heard of](https://arstechnica.com/security/2026/10/vulnerability-in-agents-from-google-and-others-exposes-structural-flaw-in-mcp/)** - エージェント間通信における信頼の欠如が原因で、悪意あるプロンプトがエージェントからエージェントへ伝播しうる構造的欠陥を報じる。
- **[Cloudflare plans to issue quantum-safe TLS certificates](https://arstechnica.com/security/2026/09/cloudflare-plans-to-issue-quantum-safe-tls-certificates/)** - Cloudflare が耐量子の TLS 証明書を発行する計画。Web 認証エコシステムの大規模な見直しの一部とされる。
- **[An undercover Google analyst infiltrated a notorious supply-chain hacking gang](https://arstechnica.com/security/2026/09/an-undercover-google-analyst-infiltrated-a-notorious-supply-chain-hacking-gang/)** - Google の脅威インテリジェンスグループが、サプライチェーン攻撃集団 TeamPCP の中枢に潜入者を送り込んでいたという報告。
- **[Explaining Hall-effect, TMR, and other new types of "mechanical" switches](https://arstechnica.com/gadgets/2026/10/the-hows-and-whys-of-non-mechanical-mechanical-keyboard-switches/)** - ホール効果や TMR など、キーボードの新しい磁気センシング方式の仕組みを解説するガイド。

## 注目トピック
証明書とトランスポートの信頼基盤が動いている。Let's Encrypt は証明書寿命を64日に短縮し、Cloudflare は耐量子 TLS 証明書を計画している。手動更新を前提にした運用は成り立たなくなり、ACME 自動化の徹底が事実上必須になる。AWS でも ACM の ACME 対応が進んでいる。

AI エージェント周辺では、MCP のエージェント間通信の構造的リスク、エージェント評価の CI/CD 組み込み、実行範囲を止める仕組みの設計と、安全性と運用が論点になっている。一方で Cloudflare による Deno 買収、Rust 製の Firestore エミュレーターや CAD など、実行基盤とツールの再編も進む。
