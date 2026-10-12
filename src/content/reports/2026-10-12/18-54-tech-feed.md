---
title: "Tech Feed ダイジェスト（2026年10月13日）"
date: "2026-10-12T18:54"
category: "summary"
summary: "GitHub Actions の SHA Pinning の限界、Meta の Muse Wonder、EKS Auto Mode の kernel チューニング、AI エージェントの安全運用など"
tags: ["security", "ai", "aws", "github-actions", "devops", "agents"]
---

## はてなブックマーク (テクノロジー)
- **[なんでもリバースエンジニアリング。ソースコード非公開のアプリをAIに解析させ、類似機能を作らせるオープンソースツール「REA」](https://www.techno-edge.net/article/2026/10/12/5574.html)** ([312users](https://b.hatena.ne.jp/entry/s/www.techno-edge.net/article/2026/10/12/5574.html)) - ソース非公開アプリを AI に解析させ、類似機能の実装まで行わせる OSS。AI によるクローン生成が現実的になり、ライセンスや保護手法の議論にも関わる。
- **[OpenCode から Pi へ切り替えた](https://voluntas.ghost.io/migrate-opencode-to-pi/)** ([122users](https://b.hatena.ne.jp/entry/s/voluntas.ghost.io/migrate-opencode-to-pi/)) - ターミナル系コーディングエージェントを OpenCode から Pi に乗り換えた移行体験記。エージェントハーネスの選択肢が増えていることがわかる。
- **[無料で自分のPCにインストールされているAIエージェント・ハーネス・MCPサーバー・プラグインをすべてスキャンして列挙してくれる「Geiger」](https://gigazine.net/news/20261012-geiger/)** ([57users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261012-geiger/)) - 手元に入った AI エージェント類・MCP サーバー・拡張を棚卸しするツール。シャドー AI の可視化とセキュリティ監査に使える。
- **[実践！ SRE × AI - ABEMA における AIOps -](https://speakerdeck.com/tetsuya28/jissen-sre-x-ai-abema-niokeru-aiops)** ([87users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/tetsuya28/jissen-sre-x-ai-abema-niokeru-aiops)) - ABEMA の SRE 現場で AI を運用（障害対応など）に組み込んだ事例の登壇資料。
- **[脱NVIDIAを急ぐMicrosoft、わずか9カ月で次世代AIチップ「Maia 300」](https://pc.watch.impress.co.jp/docs/news/2147412.html)** ([23users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/news/2147412.html)) - Microsoft が自社 AI アクセラレータの次世代版を短期間で投入。クラウド各社の独自チップ化で推論基盤の選択肢が広がる。

## Zenn
- **[GitHub ActionsのSHA Pinningだけで本当に大丈夫ですか？](https://zenn.dev/nishino_hiroki/articles/d7570d3bb3408f)** - tj-actions や Trivy の侵害以降 pinact 等で SHA 固定が一般化したが、それだけでは守れないケースがあるという指摘。サプライチェーン対策の見直しに有用。
- **[Amazon Bedrock の利用料金をユーザーごとに確認するダッシュボードを CUR 2.0 と Amazon Quick で作る](https://zenn.dev/aws_japan/articles/aws-bedrock-cur2-user-cost-dashboard)** - Claude Desktop や Claude Code を Bedrock 経由で社内展開した際の利用料金を、CUR 2.0 とダッシュボードでユーザー単位に可視化する構成。
- **[画像はどうやってベクトルになるのか — 正解の画像でも類似度が 0.5 に届かない理由](https://zenn.dev/kotap/articles/clip-image-embedding)** - CLIP を手元で動かして中間値を取り出し、画像埋め込みの処理を追う。テキスト検索時の類似度スコアの分布も扱う。
- **[Strands BoxをEC2 Macで実測 — Dogwoodポリシーが効く経路を仕分け](https://zenn.dev/kashiwabaray/articles/fc2d097da71f30)** - 操作ごとの承認なしでコーディングエージェントを動かす運用で、「触れてよいものに何をしてよいか」をポリシーで制御する検証。
- **[Microsoft-Decision-1でAI-OCRの品質ゲートを作ってみた](https://zenn.dev/headwaters/articles/6e889f79ee9f2e)** - Microsoft Foundry の判定・分類向けモデル Decision-1 を、AI-OCR の出力品質チェック（品質ゲート）に使う試み。

## Qiita
- **[fdリークの見落としは「早期return」に集中する、7件の内訳から言えること](https://qiita.com/ponfreelance/items/8bb6ebbff6dd325d6b87)** - C 言語 23 年の筆者が、実際の PR で見逃された fd・socket・FILE の close 漏れ 7 件を分析。冒頭抜粋では、close の書き忘れ自体より早期 return 経路に集中するという趣旨。
- **[【AWS】GitHub ActionsとAgentCore Evaluationsでエージェントの評価をCI/CDに組み込んでみた](https://qiita.com/yakumo_09/items/6f3936d9f7255a4259d9)** - AWS ブログを元に、GitHub Actions から AgentCore Evaluations を呼んで dev→stg→prd の品質ゲートとするパイプラインを試した記録。
- **[AIの警告を重大度だけで並べない｜確信度を掛けて順位を出す（Python）](https://qiita.com/tsukurugawa/items/3608d96d5242abb098e5)** - AI の異常検知を重大度順に並べると外れが混じるため、確信度を掛け合わせて優先度を出す手法を Python で示す。
- **[Microsoft セキュリティ、これをやってください！～ 実践ベストプラクティス](https://qiita.com/carol0226/items/bdb16dbd5c16a2c43ad5)** - 2026 年 9 月下旬以降の国内サイバー攻撃被害（ネットワーク機器の脆弱性やフィッシング経由）を受けた、Microsoft 環境の対策まとめ。
- **[Claude Codeの全セッションを1画面で管理するローカルダッシュボードをNext.jsで実装する](https://qiita.com/masakazuimai/items/cd80e1e913532864b615)** - 複数プロジェクトで並行する Claude Code セッションの稼働・確認待ち状態を一覧できるダッシュボードの実装。

## AWS 新着
- **[Amazon OpenSearch Service now supports index-level encryption](https://aws.amazon.com/about-aws/whats-new/2026/10/opensearch-index-level-encryption)** (2026-10-12) - インデックスごとに別々の KMS カスタマーマネージドキーで保存時暗号化が可能に。テナント分離や鍵の失効単位を細かく設計できる。
- **[AWS Continuum for Penetration Testing now supports continuous penetration testing integrated directly into your CI/CD pipeline](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-continuum-penetration-testing/)** (2026-10-05) - 旧 AWS Security Agent が CI/CD パイプラインに統合された継続的ペネトレーションテストを提供（パブリックプレビュー）。
- **[Amazon EKS Auto Mode now supports advanced compute configuration](https://aws.amazon.com/about-aws/whats-new/2026/10/eks-auto-mode-advanced-compute-config/)** (2026-10-01) - NodeClass で kubelet 設定・Linux カーネル sysctl・hugepages を直接調整可能に。Auto Mode で特殊なチューニングが必要なワークロードを扱いやすくなる。
- **[Amazon S3 Tables now support up to 100 table buckets per AWS Region in an AWS account](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-s3-tables-table-bucket-increase)** (2026-10-01) - テーブルバケットの上限が 10 から 100 に拡大し、リージョンあたり最大 100 万テーブルまで作成可能。
- **[Announcing Amazon Nova 2.5 Sonic with improved reasoning for voice agents](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-nova-2.5-sonic/)** (2026-10-05) - リアルタイム音声エージェント向け speech-to-speech モデルが GA。推論力と指示追従が向上。

## Lobsters
- **[(Post-Quantum) Cryptographic Right Answers](https://words.filippo.io/right-answers/)** (21pt) - Filippo Valsorda による「暗号の正解」リストのポスト量子対応版。用途別にどのアルゴリズムを選ぶべきかの指針。
- **[Linus Torvalds Working On A Hefty Linux Kernel Improvement With Claude Code](https://www.phoronix.com/news/Linus-Torvalds-Claude-Code)** (36pt) - Torvalds が Claude Code を使ってカーネルの大きな改善に取り組んでいるという Phoronix の報道。
- **[Finding a $90,000 Remote Code Execution Vulnerability in Google](https://simonkoeck.com/writeups/google-devsite-flask-session-pickle-rce)** (12pt) - Google の開発者向けサイトで Flask セッションと pickle を悪用した RCE を見つけ、$90,000 の報奨金を得た解説。
- **[Parsing JSON at tens of gigabytes per second… in Python](https://lemire.me/blog/2026/10/12/parsing-json-at-tens-of-gigabytes-per-second-in-python/)** (10pt) - Lemire が Python から高速 JSON パーサ（simdjson 系）を使い、毎秒数十 GB のパースを実現する方法を紹介。
- **[Fingerprints are the new cookies](https://royfish.dev/fingerprints-are-the-new-cookies)** (21pt) - Cookie 規制が進む中で、ブラウザフィンガープリントがトラッキング手段として台頭している現状とプライバシーへの影響。

## dev.to
- **[A single console.log was costing us $40,000 a year. I found it by accident.](https://dev.to/infoinlet1/a-single-consolelog-was-costing-us-40000-a-year-i-found-it-by-accident-4cop)** - 負荷時に p99 が悪化する API を調べ、1 行の console.log が年間 $40,000 のコストにつながっていたと突き止めた調査談。
- **[One `rm -f` Silently Disabled My Crash Detection](https://dev.to/debashish_ghosal/one-rm-f-silently-disabled-my-crash-detection-4khl)** - デーモンがクラッシュしても何も記録されなかった原因が `rm -f` だったという、サイレント失敗のデバッグ事例。
- **[Traefik 3.7's service middlewares target one branch of a weighted service](https://dev.to/alexgeorgiev17/traefik-37s-service-middlewares-target-one-branch-of-a-weighted-service-3i3h)** - Traefik 3.7 の新機能「サービスレベル middleware」を 90/10 のカナリアで検証し、重み付きサービスの片側だけに適用されることを確認。
- **[We Built a Blender Render Farm Out of Four Laptops](https://dev.to/lovestaco/we-built-a-blender-render-farm-out-of-four-laptops-1h32)** - ノート PC 4 台を Tailscale でつないだ Blender レンダーファームの構築記。
- **[One Glue Job, Zero Orchestrators — My First Spark Declarative Pipeline on AWS Glue](https://dev.to/aws-builders/one-glue-job-zero-orchestrators-my-first-spark-declarative-pipeline-on-aws-glue-bn2)** - AWS Glue で Spark の宣言的パイプラインを使い、外部オーケストレータなしで 1 ジョブにまとめた試行。

## TechCrunch
- **[Meta releases its first frontier model, Muse Wonder](https://techcrunch.com/2026/10/12/meta-releases-its-first-frontier-model-muse-wonder/)** - 低レイテンシ重視だった Muse Spark に対し、Wonder は大型でより高性能なモデル群。Meta 初のフロンティアモデルとして位置づけられる。

※ 他の新着は過去レポートとの重複、資金調達・イベント告知・消費者向け記事が大半で、新規の技術記事は 1 件のみだった。

## Ars Technica
- **[Microsoft disrupts AI-assisted platform that compromised 12,000 accounts](https://arstechnica.com/security/2026/09/microsoft-disrupts-ai-assisted-platform-that-compromised-12000/)** - EvilTokens がアカウント乗っ取りを一貫して支援するプラットフォームとして提供され、Microsoft が阻止。大規模侵害の低コスト化を示す。
- **[LLMs respond differently to harmful prompts when AI watermarking is used](https://arstechnica.com/security/2026/09/ai-text-watermarking-can-make-models-more-vulnerable-to-adversarial-prompts/)** - SynthID の透かしを入れると、モデルが通常は拒否する有害指示に従いやすくなる場合があるという研究。
- **[Russia was not ready for the data center war it started with Ukraine](https://arstechnica.com/gadgets/2026/10/russia-was-not-ready-for-the-data-center-war-it-started-with-ukraine/)** - データセンター攻撃の応酬で、ロシアの極端に集中したデジタル経済の脆弱性を現地ブロガーが警告。インフラの冗長性設計に通じる話。
- **[Amazon has over 1 million robot workers. What's next for human employees?](https://arstechnica.com/ai/2026/10/inside-amazons-robotic-arms-race-and-what-it-means-for-the-future-of-human-work/)** - Amazon が 100 万台超のロボットを運用する現状と、人間の労働への影響を扱う。

## 注目トピック
AI エージェントを安全に動かす運用が複数ソースで共通テーマだった。Strands Box のポリシー検証、手元の AI ツールを棚卸しする Geiger、Claude Code のセッション管理、AgentCore Evaluations の CI/CD 組み込み、確信度による警告の優先度付けなど、承認コストと安全性のバランスを仕組みで取る方向に議論が進んでいる。

もう一つはサプライチェーンと暗号まわりの基本の見直しだ。GitHub Actions の SHA Pinning だけでは不十分という指摘、ポスト量子の暗号選定ガイド、Google 開発者サイトの pickle 由来 RCE は、「当たり前の対策」の外側にある穴を突いている。dev.to の `rm -f` や console.log の事例も、サイレントな失敗や隠れたコストを可観測性で見つける重要性を示している。
