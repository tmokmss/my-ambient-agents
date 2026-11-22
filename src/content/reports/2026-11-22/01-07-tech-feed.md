---
title: "Tech Feed ダイジェスト（2026年11月22日）"
date: "2026-11-22T01:07"
category: "summary"
summary: "AIエージェントの品質担保、OSS脆弱性ラッシュへの備え、AWSのDynamoDBベクトル検索やMSK in-place移行などを巡回"
tags: ["ai-agents", "security", "aws", "testing", "infrastructure", "windows"]
---

## はてなブックマーク (テクノロジー)
- **[寝てる間に自動で動くAIエージェントを誰でも作れる：10分でわかる pstack 実践ガイド](https://zenn.dev/canly/articles/ca6875cd79539f)** ([182users](https://b.hatena.ne.jp/entry/s/zenn.dev/canly/articles/ca6875cd79539f)) - 元React コアチームのエンジニアが公開したスキル群「pstack」を使い、夜間に自律稼働するAIエージェントを組む実践ガイド。Zenn でも同テーマの書籍形式の解説が出ている。
- **[GitHub - fkubota/understand-mode](https://github.com/fkubota/understand-mode)** ([68users](https://b.hatena.ne.jp/entry/s/github.com/fkubota/understand-mode)) - Claude Code の出力・PR・コードを、付箋のホワイトボード上で寄り道しながら理解するための `/understand` スキル。AI が書いたコードを「読めないまま通す」問題への対処ツール。
- **[無料でセルフホストできWindows・macOS・LinuxアプリもあるRSSリーダー「WyrmRSS」](https://gigazine.net/news/20261121-wyrmrss/)** ([5users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261121-wyrmrss/)) - セルフホスト可能でデスクトップアプリも用意されたRSSリーダー。YouTube動画の再生や Discord・Slack への新着通知にも対応する。
- **[Introducing Inkling 2 Mini](https://thinkingmachines.ai/news/inkling-2-mini/)** ([10users](https://b.hatena.ne.jp/entry/s/thinkingmachines.ai/news/inkling-2-mini/)) - Thinking Machines が発表した小型モデル「Inkling 2 Mini」の紹介記事。詳細は一次情報を参照。

## Zenn
- **[自宅サーバー上のアプリケーションを Cloudflare Tunnel + Access で安全に公開する](https://zenn.dev/bisque/articles/home-server-cloudflare-tunnel-access)** - ミニPCの自宅サーバーで動かす個人開発アプリを、ポート開放なしの Cloudflare Tunnel と Access による認証で公開する構成を解説。クラウド費用を抑えつつ外部公開の安全性を確保する実践例。
- **[おい、 Mutation Test をやれ。テスト品質を、測るために](https://zenn.dev/mizchi/articles/mutation-test-quality)** - AI がカバレッジだけ満たすテストを量産する時代に、ミューテーションテストでテストの実効性を測るべきだと主張。mizchi/mutator の導入事例記事への応答として書かれている。
- **[相次ぐOSSの脆弱性に、とりあえずクラウドWAF入れるだけでだいぶ違う話+Rootlessコンテナもいいぞ](https://zenn.dev/kusuke/articles/98e178e6824cac)** - PHP コアの RCE、Java の Base64 デコーダ周り、nginx の HTTP/2 メモリ破壊と脆弱性が続く状況で、パッチ適用までの時間稼ぎとしてのクラウドWAFと Rootless コンテナの効果を整理。同じ PHP の件を Qiita でも配布状況の調査が出ている。
- **[CSS では書きにくいアニメーションを Web Animations API で書く](https://zenn.dev/omu_tryangle/articles/b5817393592229)** - ボタン押下ごとの再生し直し、JS で計算した値の利用、進行中アニメーションの合成など、CSS では面倒な場面を Web Animations API で書く方法。
- **[物理世界とAIをつなぐ：可視化で学ぶカメラ・座標系・運動制御入門](https://zenn.dev/turing_motors/articles/cea9e3c85611b2)** - E2E 自動運転AIが出力する走行軌跡の座標列を、カメラ映像に重ねて可視化する際のカメラモデル・座標系・運動制御の基礎を解説。

## Qiita
- **[pgvectorのHNSWでテナント絞り込みすると検索が0件になる問題と対策](https://qiita.com/takumi_engineer/items/142ca7088f13f006da82)** - マルチテナントRAGで HNSW インデックスに `WHERE tenant_id = ...` を付けると LIMIT 未満の件数しか返らない現象の仕組みと、再現・対策・検知をコードで示す（冒頭抜粋による）。
- **[ECSのアプリへSSMを使ったポートフォワーディングでアクセスする](https://qiita.com/har1101/items/9b6902c42a637117798a)** - 認証を作り込まず、かつインターネット公開もせずに PoC の ECS アプリを関係者に確認してもらうため、SSM ポートフォワーディングを使う方法。
- **[Claude Code が調べずに「ありません」「できません」と答えるのを Stop フックで差し戻す](https://qiita.com/takamatt_ai/items/043da9bb50a9136d38b5)** - ツールを1回も呼ばずに断定的に答えた返事だけを Stop フックで差し戻す仕組み。偽の会話記録で6パターンを実行して検証したとのこと。
- **[家のPull型世代バックアップをランサム想定で攻撃シミュレーションして、1行直した](https://qiita.com/Yu-muimi/items/9ed058ed915564e670df)** - Raspberry Pi から Windows への毎時 Pull バックアップ（`rrsync -ro`、`--delete` なし）にランサムウェア攻撃を想定した検証を行い、設定1行を修正した検証・実装編。
- **[日本の法律をGitで管理してみた。法改正を `git diff` で追跡できる「houritsu」を作った](https://qiita.com/bactay511/items/bc2958e730df68c49643)** - 日本の法令を Git の履歴として管理し、法改正を `git diff` で追えるようにしたプロジェクト。

## AWS 新着
- **[AWS Network Firewall introduces automated Internet firewall in public preview](https://aws.amazon.com/about-aws/whats-new/2026/11/network-firewall-automated-internet/)** (2026-11-20) - NAT を組み込んだネットワークファイアウォールを一元的に設定できる新しい集中制御がパブリックプレビューに。インターネット出入口の設計を簡素化する。
- **[Amazon Transcribe announces a synchronous transcription API](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-transcribe-sync-api/)** (2026-11-20) - 新 API `TranscribeAudio` で、音声ファイルを1リクエストで送ると同じレスポンスで全文が返る。ジョブ管理が不要になる。
- **[Amazon DynamoDB vector search now supports new inline filter operators](https://aws.amazon.com/about-aws/whats-new/2026/11/dynamodb-vector-filters/)** (2026-11-20) - DynamoDB のベクトル検索のインラインフィルタが、等価に加え範囲比較・値リスト・論理演算子に対応し、絞り込みの表現力が向上。
- **[Amazon MSK now supports in-place upgrade from Standard brokers to Express brokers](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-msk-standard-brokers-to-express-brokers-in-place-upgrade)** (2026-11-20) - 既存の MSK Provisioned クラスタを、フルマネージドなデータ移行・アプリ変更なしで Standard から Express ブローカーへインプレース移行できる。
- **[AWS Marketplace now supports agentic payments with AgentCore](https://aws.amazon.com/about-aws/whats-new/2026/11/marketplace-agentic-payments-agentcore/)** (2026-11-19) - AI エージェントが x402 プロトコルで対象製品を探索し、リクエスト単位で米ドル支払いができるように。AgentCore payments の一部。

## Lobsters
- **[Slopstrap: Make your site look hastily vibecoded](https://slopstrap.mikelacher.com/l)** (74pt) - 「雑にバイブコーディングされたように見える」サイトを作る CSS 風のパロディ（タグは satire / css / web）。AI 生成UIの画一的な見た目への皮肉。
- **[Probabilistic data structures in Go, part 2](https://antonz.org/probabilistic-data-structures-2/)** (23pt) - Go で確率的データ構造を実装して解説するシリーズの第2回。
- **[How I Got Postgres into a Single Binary](https://progrium.xyz/articles/2026/single-binary-postgres)** (10pt) - PostgreSQL を単一バイナリに組み込んだ手法の解説。組み込み用途やデプロイ簡素化の参考になる。
- **[From Skiplists to B+ Trees: Making Valkey Sorted Sets More Memory Efficient](https://valkey.io/blog/from-skiplist-to-b+tree/)** (6pt) - Valkey の Sorted Set をスキップリストから B+ツリーに置き換え、メモリ効率を改善した取り組み（タグは databases / performance）。
- **[Scaling Git horizontally: how we moved beyond Multi-Raft](https://enroute.sh/blog/scaling-horizontally-how-we-moved-beyond-multi-raft)** (5pt) - Git ホスティングの水平スケールのため、Multi-Raft 構成から別方式へ移行した設計の振り返り。

## dev.to
- **[Serverless Gemma 4: E2B on a Lambda GPU Function, with Google's QAT Weights and Drafter](https://dev.to/gde/serverless-gemma-4-e2b-on-a-lambda-gpu-function-with-googles-qat-weights-and-drafter-fh4)** - Gemma 4 E2B の QAT 4bit 重みとドラフターを、Lambda の GPU（NVIDIA L4）上で vLLM により提供する構築手順。同時リクエスト数 1〜48 でのドラフターの効果も計測。
- **[Adopt Pre-Existing Docker Containers with Zero Downtime: Reverse-Engineering docker-compose.yml in Gubernator v4.0](https://dev.to/gde/adopt-pre-existing-docker-containers-with-zero-downtime-reverse-engineering-docker-composeyml-in-3cic)** - 本番ホスト上の既存コンテナを `docker inspect` から docker-compose.yml に逆生成し、無停止で管理下のスタックとして取り込む手法。
- **[NestJS APP_FILTER Scope: Why Your Global Filter Might Not Fire](https://dev.to/parsajiravand/nestjs-appfilter-scope-why-your-global-filter-might-not-fire-51hd)** - リクエストスコープの `APP_FILTER` が例外を捕捉しなくなる問題と、NestJS 12 での修正、対処のチートシート。
- **[Billing AI agents per tool call without losing a cent](https://dev.to/nischaldhakal/billing-ai-agents-per-tool-call-without-losing-a-cent-4iha)** - コストのかかるツールを呼ぶ AI エージェントに、呼び出し単位で正確に課金する設計。Go・Redis・Postgres を使う。
- **[Why my daily restic backups ran every other day and re-read 1.46 TiB every time](https://dev.to/backmeupplz/why-my-daily-restic-backups-ran-every-other-day-and-re-read-146-tib-every-time-19lh)** - ランダムな Docker ホスト名が restic の親スナップショット判定を壊す問題、午前2時のスケジューラ時刻の罠、Tailscale 502 の3つの本番バグ修正録。

## TechCrunch
- **[Signal restricts mobile screenshots as it confronts 'existential threat' of AI surveillance](https://techcrunch.com/2026/11/21/signal-restricts-mobile-screenshots-as-it-confronts-existential-threat-of-ai-surveillance/)** - Signal が Android・iOS アプリでスクリーンショットを制限。OS レベルで画面内容を読み取る AI エージェントを脅威として位置づけている。
- **[Google gives Gemini the ability to use your Mac for you](https://techcrunch.com/2026/11/19/google-gives-gemini-the-ability-to-use-your-mac-for-you/)** - Gemini の Mac 向けアップデートで、ファイル整理・フォーム入力・複数ステップのワークフローを代行するエージェントが利用可能に。
- **[UK government forced to disclose secret Apple backdoor order](https://techcrunch.com/2026/11/19/u-k-government-forced-to-disclose-secret-apple-backdoor-order/)** - 英国の審判所が、国家安全保障上の損害を理由に開示を拒む政府の主張を退け、Apple への秘密のバックドア命令の開示を命じた。暗号化規制の動向として重要。
- **[Trump says reported FBI database hack is 'not good'](https://techcrunch.com/2026/11/21/trump-says-reported-fbi-database-hack-is-not-good/)** - FBI が全米犯罪情報センター（NCIC）への不正アクセスを調査していると報じられた件。現時点では続報待ちの段階。

## Ars Technica
- **[Windows 0-day dropped by disgruntled researcher hands hackers System rights](https://arstechnica.com/security/2026/11/windows-0-day-dropped-by-disgruntled-researcher-hands-hackers-system-rights/)** - 不満を持つ研究者が公開した「SignDrop」エクスプロイトにより、ローカルユーザーが SYSTEM 権限を取得できる Windows のゼロデイ。
- **[Google will launch Android app verification requirement globally in January 2027](https://arstechnica.com/gadgets/2026/11/google-will-launch-android-app-verification-requirement-globally-in-january-2027/)** - Android のアプリ検証要件が2027年1月に世界展開される。Google は、ほぼ全ての開発者が既に検証に参加済みとしている。サイドロード配布の開発者には影響大。
- **[Windows Server 2028 trades compatibility for out-of-the-box security](https://arstechnica.com/gadgets/2026/11/windows-server-2028-public-preview-bets-on-a-security-first-approach/)** - Windows Server 2028 のパブリックプレビューは、DoD 基準に沿った堅牢なデフォルト設定を採用。互換性との引き換えで移行時の摩擦が予想される。
- **[Disgraced eMudhra drops out of TLS business after using cert private key of 4](https://arstechnica.com/security/2026/10/disgraced-emudhra-drops-out-of-tls-business-following-certificate-debacle/)** - 鍵署名の手順ミスにより任意サイトの証明書を発行できる状態になった eMudhra が、TLS 事業から撤退。認証局の運用統制の重要性を示す事例。
- **[333 Tor exit nodes hijacked to intercept SSH traffic and retrieve plaintext email](https://arstechnica.com/information-technology/2026/10/300-tor-exit-nodes-hijacked-to-intercept-ssh-traffic-and-retrieve-plaintext-email/)** - 今月3日間にわたり333の Tor 出口ノードが乗っ取られ、SSH 通信の傍受や平文メールの窃取が狙われた。

## 注目トピック
今回目立ったのは「AI が大量に書くコードをどう検証するか」という論点だ。Zenn では mutation test でテストの実効性を測る話、はてブでは pstack や understand-mode のようにエージェントの成果物を理解・検証するツールが上位に入った。Qiita の Stop フックによる差し戻しも同じ流れにある。一方、Signal のスクリーンショット制限や Gemini の Mac 操作エージェントなど、OS を横断して動くエージェントが前提のプライバシー設計も論点になってきている。

セキュリティでは、PHP・Java・nginx と OSS の重大脆弱性が続き、パッチ到達までの時間稼ぎ（WAF、Rootless コンテナ）が実務テーマになっている。Windows の SignDrop ゼロデイ、eMudhra の証明書事故、Tor 出口ノード乗っ取りも含め、基盤側の信頼を前提にしない設計が求められる。AWS は DynamoDB ベクトル検索の拡張や MSK のインプレース移行、エージェント向け決済（x402）など、データ基盤とエージェント基盤の両面で更新が続いた。
