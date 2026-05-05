---
title: "Tech Feed ダイジェスト（2026年5月5日）"
date: "2026-05-05T10:53"
category: "summary"
summary: "CopyFail脆弱性CISA警告・BunのZig→Rustバイブポーティング・Claude Code vs Codex比較・Aurora DSQL JSON対応など"
tags: ["security", "ai", "rust", "aws", "claude-code", "frontend", "linux", "containers", "llm", "devtools"]
---

## はてなブックマーク (テクノロジー)

- **[例のサイゼリヤをIPAに通報した](https://zenn.dev/watab2000/articles/ff5e07b13bc93b)** ([309users](https://b.hatena.ne.jp/entry/s/zenn.dev/watab2000/articles/ff5e07b13bc93b)) - セキュリティ研究者が不審なサービスをIPA（情報処理推進機構）へ正式通報した実録。通報フローの全手順・IPAとのやり取り・最終的な対応結果が詳述されており、脆弱性報告の実践ガイドとして開発者コミュニティで大きな反響を呼んでいる。

- **[Claude Codeを作った男は、日本の農村で味噌を仕込んでいた](https://note.com/akikito/n/n95aa7df83cbc)** ([297users](https://b.hatena.ne.jp/entry/s/note.com/akikito/n/n95aa7df83cbc)) - Claude Code開発者Boris Cherny氏が日本の農村でアナログな生活を送りながら世界規模のAIツールを構築した経緯を追うノンフィクション的インタビュー記事。テクノロジーとライフスタイルの対比が独特の視点を与えており、開発者文化の多様性について考えさせる内容。

- **[LINEスタンプの作成〜申請まで10分！Claude Codeで画像分割と透過ツールをつくってみた](https://note.com/makari_5108010/n/n152045bbead8)** ([292users](https://b.hatena.ne.jp/entry/s/note.com/makari_5108010/n/n152045bbead8)) - Claude Codeを使って画像分割・背景透過・LINEスタンプ申請用の整形ツールを10分で構築した実録。AIコーディングアシスタントで非エンジニアでも実用ツールを即座に作れることを示した好例で、個人クリエイターによるAI活用の最前線を示している。

- **[Tailscaleやめたい](https://mq1.dev/entry/j7zvrsp48lb)** ([240users](https://b.hatena.ne.jp/entry/s/mq1.dev/entry/j7zvrsp48lb)) - Tailscaleを長期利用していた筆者が感じた課題（コントロールプレーンへの依存・SaaS型の信頼性懸念・自社インフラとの統合制約）を整理し、代替構成（WireGuard自前管理・Netbird等）を検討した記事。ゼロトラストネットワーク設計の独立性とベンダー依存のトレードオフを考えるきっかけになる内容。

- **[2026/6/8 より Google Cloud セッション有効期限のデフォルトが「無期限」から「16時間」に変更](https://dev.classmethod.jp/articles/google-cloud-session/)** ([75users](https://b.hatena.ne.jp/entry/s/dev.classmethod.jp/articles/google-cloud-session/)) - 2026年6月8日からGoogle Cloudコンソール・gcloudCLIのセッション有効期限デフォルトが16時間に短縮される変更の詳細解説。長時間バッチや自動化スクリプトが認証エラーになるリスクがあり、CI/CDパイプライン・サービスアカウント設計の見直しが急務になる可能性がある。

## Zenn

- **[韓非子 主道篇から学ぶClaude Codeの高度な使いこなし](https://zenn.dev/tomfook/articles/e4613c2f2fbb28)** - 古代中国の君主論「韓非子」の統治哲学（臣下に権威を与えすぎない・評価軸を明確にする等）をClaude Codeとの協働に応用した異色の実践論。AIエージェントに過剰な自由を与えず明確な制約と評価基準を設けることが高品質な出力の鍵だと論じており、プロンプト設計の上位概念として読める。

- **[Claude CodeユーザーのためのCodex入門](https://zenn.dev/k9i/articles/20260504_cc_to_codex)** - Claude Codeに慣れたユーザー向けにOpenAI Codexとの操作感の違い・エージェント設計の思想差・移行時のハマりどころを整理した比較記事。「Codexの方が性能が高い」という声が増えている背景を踏まえ、両ツールの実用的な使い分け指針が示されている。

- **[Bedrock AgentCore Optimizationでマルチエージェントのプロンプトを改善・検証してみる](https://zenn.dev/yokomachi/articles/202605_agentcore-optimization-recommendations)** - Amazon Bedrock AgentCore Optimizationを使って複数エージェントが連携するワークフローのプロンプトをA/Bテスト的に改善する実験記録。エージェント間のハンドオフ品質を定量評価しながら反復改善する手法が示されており、マルチエージェントシステムの本番品質管理に直結する内容。

- **[RaTeX（Pure Rust × WASM）で数式をWebに表示する](https://zenn.dev/dannchu/articles/ratex-wasm-math-renderer)** - Pure RustでKaTeX互換の数式レンダラーを実装しWASMにコンパイルしてブラウザ上で動作させる「RaTeX」の技術紹介。JavaScriptへの依存ゼロで高速な数式描画を実現しており、Rustエコシステムのフロントエンド侵食とWASMの実用性が伝わる実装事例。

- **[Temporalのpolyfillをゼロから実装した](https://zenn.dev/fabon/articles/84f7696cd8a2fb)** - 既存のTemporal APIポリフィルに満足できず自作した開発者が、仕様準拠の課題・テスト設計・タイムゾーン処理の難所を詳細に語った記事。標準化の道を歩むJavaScript日時APIの内部実装への理解を深めるとともに、ポリフィル開発の実践的な知見が詰まっている。

## Qiita

- **[【緊急】Cursorに「git clone」するだけでPCが乗っ取られる脆弱性！CVSS 9.9のヤバすぎる攻撃手法](https://qiita.com/emi_ndk/items/8e6607a09cb8ff86c298)** - AIコードエディタ「Cursor」において悪意あるリポジトリをgit cloneするだけでローカルコード実行が可能になるCVSS 9.9の重大脆弱性の技術解説。`.cursor/`ディレクトリの自動実行設定を利用したサプライチェーン攻撃のベクターであり、AIコーディング環境のセキュリティ設計が改めて問われる事例。

- **[memo / useMemo / useCallback の正しい使い方：React再レンダリング最適化](https://qiita.com/tuanphan/items/f335d42c78ce7723af11)** - Reactの最適化APIを誤用することで「最適化のつもりがパフォーマンス悪化」になるアンチパターンを実測付きで解説したシリーズ記事。「メモ化は常に有効ではない」という実装上の直感に反するケースが整理されており、中級React開発者が陥りやすい罠を網羅している。

- **[Claude Codeを120%使いこなす設定3選【ECC・Memory.md・Obsidian連携】](https://qiita.com/manchan/items/63745b9198f1989c2a15)** - Extended Context Caching（ECC）によるコスト削減・Memory.mdでのセッション横断記憶管理・ObsidianナレッジベースとのMCP連携という3つの上級設定を具体的な設定例付きで解説した記事。Claude Codeのデフォルト挙動では手が届かない部分をカスタマイズする実践ガイドとして需要が高い。

- **[Docling vs MarkItDown: GenAI向けのドキュメント処理における最適なツールはどっち？](https://qiita.com/TOMOSIA-LinhND/items/8ff4b27c4d9097380c18)** - IBM製Docling（高精度なPDF/Word解析・表・図解の構造保持）とMicrosoft製MarkItDown（軽量・速度重視）をRAG構築・LLMへのコンテキスト供給という観点で比較した記事。処理精度とスループットのトレードオフが実測データで示されており、ドキュメントAIパイプラインのツール選定に実用的な判断軸を提供している。

## AWS 新着

- **[Amazon CloudWatch Logs Insights supports querying by log group tags](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudwatch-logs-query-by-tags/)** (2026-05-04) - CloudWatch Logs Insightsのクエリ言語がタグによるロググループの横断検索に対応。これまで対象グループを個別に列挙する必要があったが、`tag:Environment=production`といったタグ条件で自動的に対象グループを絞り込め、マイクロサービス環境での大規模ログ分析が大幅に効率化される。

- **[Amazon Aurora DSQL now supports the JSON data type with compression](https://aws.amazon.com/about-aws/whats-new/2026/05/aurora-dsql-json-support/)** (2026-05-04) - Aurora DSQLにPostgreSQL互換のJSONデータ型とオプション圧縮が追加。分散SQLエンジンであるDSQLでJSONドキュメントをネイティブに扱えるようになり、半構造化データを持つアプリケーションのAurora DSQL移行を妨げていた主要な制約が解消された。

- **[Amazon Quick upgrades the extension for Microsoft Outlook (Preview)](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-quick-microsoft-outlook/)** (2026-05-04) - Amazon Quick（旧QuickSight）のOutlookアドインがプレビューアップグレード。メール内からデータセットに自然言語で問い合わせたり、BIダッシュボードのスナップショットをメール本文に直接埋め込めるようになり、意思決定のコンテキストでデータ可視化を使う「データドリブンメール」が現実的な選択肢になる。

- **[Amazon EventBridge supports data plane logging to AWS CloudTrail](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-eventbridge-data-aws-cloudtrail/)** (2026-05-04) - EventBridgeのPutEventsなどデータプレーンAPIの呼び出しがCloudTrailで記録できるようになった。コントロールプレーン操作のみだった監査範囲がイベント送受信レベルに拡大し、イベント駆動アーキテクチャにおけるコンプライアンス証跡の完全性が向上する。

## Lobsters

- **[Bun (the js runtime) is being vibe-ported from zig to rust](https://github.com/oven-sh/bun/blob/claude/phase-a-port/docs/PORTING.md)** - JSランタイムBunの実装言語をZigからRustへ「バイブコーディング（AIアシスト）」で移植する実験的ブランチが公開され大きな議論を呼んでいる。正式な書き換えではなくAIによる概念実証的ポーティングとのことだが、Zig製の複雑なランタイムをAIがどこまで別言語に変換できるかを計る試みとして注目を集めている。

- **[Podman rootless containers and the Copy Fail exploit](https://garrido.io/notes/podman-rootless-containers-copy-fail/)** - CISAが「大規模に悪用されている」と警告したCopyFail脆弱性のPodmanルートレスコンテナへの影響を技術的に分析した記事。コンテナのユーザー名前空間とファイルシステム層における権限分離の欠陥を突く攻撃ベクターが詳述されており、開発環境でDockerless構成を採用しているチームは速やかに確認すべき内容。

- **[Oasis Linux](https://git.sr.ht/~mcf/oasis)** - musl libc・busybox不使用・最小依存で設計された超軽量Linuxディストリビューション「Oasis」のソースコードが話題に。静的リンクとセキュリティ最小化を徹底した設計思想が注目されており、組み込みシステムやサンドボックス用途での採用を検討できるアプローチとして議論されている。

- **[Reminder: You Can Stitch Together Lots of Little HTML Pages With Navigations For Interactions](https://blog.jim-nielsen.com/2026/small-html-pages/)** - SPAフレームワークを使わずに小さなHTMLページをナビゲーションで繋ぐ「シンプルなWeb」の可能性を再評価したエッセイ。HTTPのリクエスト/レスポンスモデルへの回帰という視点でユーザー体験を設計する考え方を提示しており、複雑化したフロントエンドエコシステムへの反省として共感を集めている。

- **[Nondeterminism's not the problem](https://isaacvando.com/nondeterminisms-not-the-problem)** - LLMの非決定性（同じプロンプトで異なる結果が出る）を問題視する議論に対し、「本当の課題は信頼性の欠如であり非決定性そのものではない」と論じた記事。テスト設計・プロダクト仕様・LLMシステムの品質保証において非決定性をどう扱うべきかの考え方の整理として実用的な示唆を持つ。

## dev.to

- **[Why A* Search Works — Heuristics, Shortest Paths, and Optimality](https://dev.to/zeromathai/why-a-search-works-heuristics-shortest-paths-and-optimality-bc6)** - A*探索アルゴリズムが最短経路を保証する仕組みを「許容可能ヒューリスティック（admissible heuristic）」の概念から丁寧に解説した記事。グラフ探索の最適性証明とヒューリスティック関数の設計原則が視覚的に説明されており、アルゴリズム学習の入門として完成度が高い。

- **[Responsible Design: Shaping Large-Scale Consequences by Organizing Agents](https://dev.to/shrsv/responsible-design-shaping-large-scale-consequences-by-organizing-agents-339m)** - マルチエージェントシステムを設計する際に、個々のエージェントの行動が積み重なって生む「創発的な大規模影響」に対して責任ある設計をどう実現するかを論じた記事。エージェント間の依存関係・フェイルセーフ・監査可能性の設計パターンが整理されており、AIシステムの倫理的設計を実装レベルで考えるための枠組みを提供している。

- **[Mastering the Interface: Why Prompt Engineering is the New Software Syntax](https://dev.to/nebuladata/mastering-the-interface-why-prompt-engineering-is-the-new-software-syntax-llg)** - プロンプトエンジニアリングをプログラミング言語の「構文」として捉え直す論考。宣言的・手続き的・関数型などのプログラミングパラダイムとLLMへの指示設計の類似性を論じており、「プロンプトを書く」行為をソフトウェア工学として体系化しようとするアプローチが示されている。

## TechCrunch

- **[As workers worry about AI, Nvidia's Jensen Huang says AI is 'creating an enormous number of jobs'](https://techcrunch.com/2026/05/04/as-workers-worry-about-ai-nvidias-jensen-huang-says-ai-is-creating-an-enormous-number-of-jobs/)** (2026-05-04) - NvidiaのJensen Huang CEOが「AIは雇用を奪うのではなく膨大な新しい仕事を生み出している」と主張した。GPU設計・AIインフラ構築・モデル管理・プロンプトエンジニアリングなど新職種の急増を根拠とするが、既存の事務・製造職との置換をどう評価するかについては異論も多く、AI雇用議論の対立構造を浮き彫りにしている。

- **[US government warns of severe CopyFail bug affecting major versions of Linux](https://techcrunch.com/2026/05/04/u-s-government-warns-of-severe-copyfail-bug-affecting-major-versions-of-linux/)** (2026-05-04) - CISAがLinuxカーネルの重大脆弱性CopyFailが実際のハッキングキャンペーンで積極的に悪用されていると警告を発した。サーバー・データセンターのLinux環境に広範に影響し、ルートレスコンテナ（Podman等）を含む多数の構成で権限昇格が可能になる。未パッチのLinux系サーバーを運用するチームは即座の対応が必要。

- **[Elon Musk's only AI expert witness at the OpenAI trial fears an AGI arms race](https://techcrunch.com/2026/05/04/elon-musks-only-expert-witness-at-the-openai-trial-fears-an-agi-arms-race/)** (2026-05-04) - OpenAI裁判でMusk側の唯一のAI専門家証人として立ったStuart Russell教授（UC Berkeley）が、AGI開発競争に対して政府による規制が必要だと主張した。「フロンティアラボへの規制なき競争がAGIリスクを加速させる」という立場は皮肉にも訴訟の文脈から独立した重要な政策提言として注目される。

## Ars Technica

- **["Notepad++ for Mac" release is disavowed by the creator of the original](https://arstechnica.com/gadgets/2026/05/unofficial-vibe-coded-notepad-for-mac-draws-objections-from-original-author/)** (2026-05-04) - AIバイブコーディングで作られたmacOS版「Notepad++」をOriginalの開発者Don Ho氏が公式に否定・非難した。商標の誤認誘導と品質保証の欠如を指摘し、プロジェクトはその後「Nextpad++」への改称を余儀なくされた。AIで既存ブランドの模倣品を量産することへの倫理的・法的問題を提起した事例として注目を集めている。

- **[GameStop offers $56 billion for eBay, struggles to explain how it'll pay for it](https://arstechnica.com/tech-policy/2026/05/gamestop-offers-56-billion-for-ebay-struggles-to-explain-how-itll-pay-for-it/)** (2026-05-04) - ゲーム小売チェーンGameStopがeBayに560億ドルの買収提案を出したと報道されたが、資金調達の裏付けが乏しく市場から懐疑的に受け止められている。ミーム株としての性格を持つGameStopが「企業再生の次の手」として買収提案を使うという奇策で、テック・EC業界の再編劇として注目されている。

- **[AMD is adding HDMI 2.1 support for Linux](https://arstechnica.com/gaming/2026/05/amd-is-adding-hdmi-2-1-support-for-linux-thats-good-news-for-the-steam-machine/)** (2026-05-04) - AMDがamdgpuドライバーにHDMI 2.1（4K/144Hz・可変リフレッシュレート対応）サポートを追加するカーネルパッチを投稿した。SteamOSベースのゲーミング機向けに高品質な映像出力環境を整備するもので、Linuxゲーミングエコシステムの成熟度がまた一段階上がる動きとして評価されている。

## 注目トピック

**CopyFail脆弱性がLinuxインフラを直撃している**。CISAが「大規模に悪用中」と警告を発し、Podmanルートレスコンテナ・Linuxサーバー全般に影響するとされるこの脆弱性は、開発者の手元環境からクラウドデータセンターまで幅広い攻撃面を持つ。同時にCursorのgit clone経由のCVSS 9.9脆弱性・Nix/Lixのローカル権限昇格と、**開発ツールそのものが攻撃対象になる**という新たなセキュリティ問題が重なっており、開発環境のセキュリティ審査の重要性が急上昇している局面だ。

AIツール活用の議論は量的拡大から**質的深化**に移行している。韓非子の統治論をClaude Codeに応用する記事・Claude CodeとCodexの実用比較・LLMの非決定性の本質的問い直し・マルチエージェントの責任ある設計論など、「AIをどう使うか」より「AIとどういう関係を構築するか」という高次の問いが日本語・英語双方のコミュニティで同時に浮上している。BunのZig→Rustバイブポーティング実験は、AIアシスト開発の可能性の最前線を示す象徴的な事例であり、「AIが大規模な言語移植をどこまでできるか」という問いへの実験的な解答として注目を集めている。
