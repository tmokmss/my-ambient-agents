---
title: "Tech Feed ダイジェスト（2026年10月17日）"
date: "2026-10-17T12:53"
category: "summary"
summary: "Claude Code チームのレビュー運用、BASE 子会社の漏えい、Lambda Web Functions、Replit の Anthropic 離脱など"
tags: ["ai", "security", "aws", "lambda", "devops", "testing", "linux", "infrastructure"]
---

## はてなブックマーク (テクノロジー)
- **[How the Claude Code team does code review / claude.dev Blog](https://claude.dev/blog/solving-code-review-at-anthropic/)** ([189users](https://b.hatena.ne.jp/entry/s/claude.dev/blog/solving-code-review-at-anthropic/)) - Claude Code チーム自身が AI 生成コードの増加に対してコードレビューをどう回しているかを紹介するブログ。レビュー負荷のボトルネック化という、AI 開発ツールを使う多くのチームに共通の課題への実践例として参考になる。
- **[BASE子会社の漏えい、約2335万人分に　209万人分はクレカ番号「先頭6桁と下4桁」「有効期限」も](https://www.itmedia.co.jp/news/article/2610/17/2000002349/)** ([169users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2610/17/2000002349/)) - BASE 子会社の漏えい件数が約2335万人分に拡大したとの続報。カード番号を部分的にでも保持していた点が焦点で、保持データの最小化とマスキング設計を見直す材料になる。
- **[こんにちは，UUID 芸人です](https://mimifuwacc.hatenablog.com/entry/2026/10/17/114300)** ([51users](https://b.hatena.ne.jp/entry/s/mimifuwacc.hatenablog.com/entry/2026/10/17/114300)) - UUID の各バージョンの仕様や使い分けを掘り下げた記事。ID 設計（時系列ソート性やインデックス効率）を考える際の足掛かりになる。
- **[E2E テストのフィードバックループを小さくするためのプラクティス](https://future-architect.github.io/articles/20261016a/)** ([47users](https://b.hatena.ne.jp/entry/s/future-architect.github.io/articles/20261016a/)) - フューチャー技術ブログによる、E2E テストの実行時間・原因特定のコストを下げる実践集。遅く不安定になりがちな E2E を開発サイクルに乗せるための工夫がまとまっている。
- **[Perplexityが安全な自律型AIエージェント構築支援のためサンドボックスプラットフォーム「SPACE」をオープンソース化](https://gigazine.net/news/20261016-perplexity-space/)** ([8users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20261016-perplexity-space/)) - 自律型エージェントを隔離環境で安全に動かすためのサンドボックス基盤を Perplexity が OSS 化。エージェントの権限制御・実行隔離が実務課題になっている流れに沿った動き。

## Zenn
- **[3Dデータの処理基盤をTemporalに全面移行した話](https://zenn.dev/bestat/articles/7106fdf2f399e1)** - 画像からの 3D モデル生成や点群変換などの重い非同期処理基盤を、Pub/Sub ベースから Temporal に移行し、本番全テナントで稼働させている事例。長時間ワークフローのオーケストレーション選定の参考になる。
- **[押せないハンバーガーボタン、3回直して原因はCSSバンドルの順序だった](https://zenn.dev/pythona/articles/css-bundle-order-hamburger)** - React + Vite の業務システムで、ボタンが押せない不具合の原因が CSS バンドル内のルール順序だったというトラブルシュート記録。見当違いの修正を重ねた過程も含めて書かれている。
- **[JenkinsからGitHub Actionsに移行して、CI/CDをAIにも人にも触れる形にした](https://zenn.dev/ceres_tech_blog/articles/7c5d1b9d29e621)** - サーバー上の GUI 設定に閉じていた Jenkins ジョブを、リポジトリ内で管理できる GitHub Actions に移し、AI エージェントからも読み書きできる CI/CD にした話。設定のコード化が AI 活用の前提になる点を示す。
- **[Jetson AGX XavierでNemotron 3.5 Lightningを動かしてみる](https://zenn.dev/nooop/articles/9d5f19aed77e18)** - 前回 Qwen3.8-27B で 5〜6 tokens/sec だった旧世代 Jetson で、NVIDIA の Nemotron 3.5 Lightning を試した検証記事。エッジ機でのローカル LLM 速度の目安になる。

## Qiita
- **[Copilot Credits の課金ポリシーが変わるとどうなるのか？](https://qiita.com/Rinatamu/items/622cdc1d948f55fd6016)** - 検証環境で 1 ユーザーの Copilot Credits が上限に達したのを機に、別の支出ポリシーへ割り当てた場合の挙動を確かめた記事（冒頭抜粋より）。ポリシー上限とユーザー上限の関係を整理する際の参考になる。
- **[画像アップロードAPIのセキュリティ対策を、実装レベルで振り返る](https://qiita.com/vaon-luandv/items/a4719b247a0ec489e4c3)** - 想定攻撃、コード、失敗時のステータスコードの順で並べた、画像受付 API の入口対策チェックリスト（冒頭抜粋より）。必要な項目だけ拾える構成。
- **[スキーマを変えるとプロンプトキャッシュが共有されなかったので、Bedrock の構造化出力をやめた話（2026年版）](https://qiita.com/ntaka329/items/9ddba124de03b15166c4)** - 同じ長い資料に対し出力 JSON の形だけ変えて Claude を複数回呼ぶ際、スキーマが変わるとキャッシュが効かず、構造化出力の利用を取りやめた経緯。コストとレイテンシに効くキャッシュ設計の落とし穴。
- **[ダッジェム（Dodgem）— 5×5 の 2.4 億局面を後退解析で解き、1996 年のニュースグループの主張を全部確かめたら 3 か所ずれていた](https://qiita.com/sen-ltd/items/36cfd0b15eca2b0bb2d2)** - ボードゲーム Dodgem を後退解析で完全に解き、過去の主張を検証したところ 3 か所の食い違いが見つかったという話。全局面探索の実装例として面白い。
- **[Playwrightの保存検査がPASSしたのに、2回目の操作は未完了だった](https://qiita.com/aichance/items/6cca672c77ab63765275)** - 前回の最高スコアが残っていると 2 回目の操作が終わらなくても検査が PASS してしまう、というテストの穴の報告（冒頭抜粋より）。「今回の操作が成立したか」を確かめるアサーション設計の教訓。

## AWS 新着
- **[AWS Lambda announces Lambda Web Functions](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-web-functions/)** (2026-10-12) - コードがポートで待ち受け HTTP リクエストを直接処理する新しいサーバーレス計算プリミティブ。通常の HTTP サーバーと同じ書き方で Lambda に載せられる。Qiita でもこの機能から Lambda の位置づけを考える記事が出ている。
- **[AWS Lambda durable functions increases durable operation and checkpoint payload limits](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-lambda-durable-gen-limit-increase/)** (2026-10-13) - 1 実行あたりの durable operation 上限が 3,000 から 30,000 に、チェックポイントのペイロード上限が 256 KB から 1 MB に拡大。より長く大きなワークフローが組める。
- **[Amazon ECS adds LiveTaskCount and removes the charge for RunningTaskCount metric](https://aws.amazon.com/about-aws/whats-new/2026/10/ecs-service-metrics/)** (2026-10-13) - 実際に稼働中のタスク数を示す新メトリクス LiveTaskCount を追加し、RunningTaskCount の課金を廃止。オートスケールや監視の指標選定に影響する。
- **[Amazon ElastiCache for Valkey introduces ElastiCache Insights](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-elasticache-valkey-elasticache-insights/)** (2026-10-12) - ノードベースのクラスタ向けに、ヘルス・メモリ・計算・ネットワークをまとめた CloudWatch の組み込みダッシュボードを提供。
- **[OpenAI GPT-6.1 Sol now supports Ultrafast mode on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/10/openai-gpt-sol-ultrafast-amazon/)** (2026-10-08) - Bedrock 上の GPT-6.1 Sol で、速度優先の推論モード Ultrafast が利用可能に。レイテンシ重視のワークロード向け。

## Lobsters
- **[We're sunsetting Codeberg Pages v2](https://blog.codeberg.org/migrate-your-site-to-the-new-git-pages-backed-codeberg-pages-now-were-sunsetting-codeberg-pages-v2.html)** (29pt) - Codeberg が旧 Pages v2 を終了し、git-pages ベースの新方式への移行を呼びかけ。利用中のサイトは移行が必要。
- **[Introducing GNOME OS Preview](https://blogs.gnome.org/adrianvovk/2026/10/16/gnome-os-preview/)** (22pt) - GNOME 公式のOS イメージ GNOME OS のプレビュー版が公開。開発者やテスターが最新の GNOME を実機で試せる。
- **[Ubuntu 26.10 (Stonking Stingray) released](https://lists.ubuntu.com/archives/ubuntu-announce/2026-October/000330.html)** (14pt) - Ubuntu 26.10 のリリースアナウンス。
- **[Someone on Torrent Sites Kept Fucking With My Sonarr](https://thereallo.dev/blog/someone-on-torrent-sites-kept-fucking-with-my-sonarr-setup)** (14pt) - torrent サイト経由で自分の Sonarr 環境に仕掛けられた妨害を、リバースエンジニアリングで調べたセキュリティ寄りの体験談。
- **[Interactive refactoring in gopls](https://go.dev/blog/interactive-refactoring)** (12pt) - Go の言語サーバー gopls に、対話的に入力を受けながら進めるリファクタリングが入った紹介。

## dev.to
- **[Docker Compose 5.6's jobs type only starts through docker compose run](https://dev.to/alexgeorgiev17/docker-compose-56s-jobs-type-only-starts-through-docker-compose-run-4c1a)** - Compose 5.6 で追加された単発タスク用の jobs セクションは、up / create / start では起動できず docker compose run 経由でしか動かない、という挙動の検証。スケジュール起動のトリガーでは up が失敗する点にも触れている。
- **[Python performance: native loops, NumPy and the vectorize trap](https://dev.to/axrisi/python-performance-native-loops-numpy-and-the-vectorize-trap-3pbj)** - NumPy や Numba の実測を通じ、バッチ化が効く場合と、データ変換のコストで利得が消える場合を整理した記事。
- **[Claude Code Context Window Management in 2026: What Gets Included, What Gets Dropped, and How to Control It](https://dev.to/jsmanifest/claude-code-context-window-management-in-2026-what-gets-included-what-gets-dropped-and-how-to-26kh)** - Claude Code の性能問題の多くは管理されていないコンテキストウィンドウに起因するとして、何が含まれ何が落ちるか、自動圧縮をどう制御するかを解説。
- **[agentcheck: your CLAUDE.md is an instruction file nobody reviews. Scan it.](https://dev.to/dhanushnehru/agentcheck-your-claudemd-is-an-instruction-file-nobody-reviews-scan-it-3j3h)** - CLAUDE.md や AGENTS.md、.cursor/rules などリポジトリ同梱のエージェント指示ファイルは誰もレビューしない攻撃面だとして、これをスキャンする OSS ツールを紹介。
- **[Building Better Agents through End-to-End Evals](https://dev.to/dailycontext/building-better-agents-through-end-to-end-evals-pgh)** - エージェント開発で最大の失敗は、タスクを深く理解しないまま進めることだとして、エンドツーエンドの評価（eval）を軸に改善する進め方を述べる。

## TechCrunch
- **[Replit is no longer working with Anthropic, CEO says](https://techcrunch.com/2026/10/16/replit-is-no-longer-working-with-anthropic-ceo-says/)** - Replit の CEO が、コストなど複数の理由で Anthropic との協業を終了したと説明。8 月に OpenAI との提携を発表済みで、AI コーディング基盤のモデル調達先が動いている。
- **[Apate sends AI agents undercover to get scammed so they can gather fraud intelligence](https://techcrunch.com/2026/10/14/apate-sends-ai-agents-undercover-to-get-scammed-so-they-can-gather-fraud-intelligence/)** - AI エージェントをおとりにして詐欺師とやり取りさせ、不正の手口を収集するスタートアップ。エージェントの防御的な活用例。
- **[Veritas expands its anti-counterfeit chip to jewelry, trophies, and fragrance bottles](https://techcrunch.com/2026/10/16/veritas-is-building-a-chip-to-verify-luxury-goods/)** - 偽造品対策として真贋を検証するチップを、宝飾品やトロフィー、香水瓶へ拡大。ハードウェアによる真正性証明の応用例。

## Ars Technica
- **[KDE turns 30 with Plasma 6.8, remote upgrades, and an X11 farewell](https://arstechnica.com/gadgets/2026/10/kde-turns-30-with-plasma-6-8-remote-upgrades-and-an-x11-farewell/)** - KDE が 30 周年に合わせて Plasma 6.8 を公開。リモートアップグレードに対応し、X11 セッションにも別れを告げる。Wayland 移行の節目。
- **[Topgolf saved over $11.3 million after leaving VMware](https://arstechnica.com/information-technology/2026/10/topgolf-saved-over-11-3-million-after-leaving-vmware/)** - Topgolf が VMware から移行して 1,130 万ドル超を削減した事例。VMware 利用企業の約 9 割がライセンス費用を理由に代替を検討しているとの調査も同時期に出ている。
- **[Attackers have been exploiting critical Zimbra flaw to steal emails](https://arstechnica.com/security/2026/09/attackers-have-been-exploiting-critical-zimbra-flaw-to-steal-emails/)** - Zimbra の深刻な脆弱性が悪用され、1 通のメールだけで OS コマンドをリモート注入できる状態でメール窃取に使われている。
- **[There's a new way to break RSA that's faster than anything we've seen before](https://arstechnica.com/security/2026/09/theres-a-new-way-to-break-rsa-thats-faster-than-anything-weve-seen-before/)** - 「RSA を破る手段は素因数分解だけ」という従来の前提を覆す新手法の報道。暗号移行計画を考える上で注視したい。
- **[Memory executives expect RAM shortage to continue through 2028](https://arstechnica.com/information-technology/2026/10/memory-supplies-are-only-getting-tighter-micron-ceo-says/)** - Micron の CEO らが、メモリ不足が 2028 年まで続き、2027 年向け価格は 2026 年より大幅に高いと見通す。サーバー・GPU 調達コストに効く。

## 注目トピック
今日目立ったのは、AI コーディングを前提にした開発プロセスの再設計だ。Claude Code チーム自身のレビュー運用、CI/CD を AI にも読める形にする Jenkins からの移行、CLAUDE.md を攻撃面として検査する agentcheck、エージェントの隔離実行基盤 SPACE の OSS 化など、レビュー・CI・権限隔離といった周辺の仕組みに関心が移っている。Replit が Anthropic との協業を終えたように、AI 基盤のモデル調達先も流動的だ。

もう一つは、情報漏えいを受けた足元のセキュリティ見直しだ。BASE 子会社の漏えいは約 2335 万人分に拡大し、保持データの最小化が改めて問われている。画像アップロード API の入口対策や、Zimbra の悪用、RSA の新しい攻撃手法の報道も含め、設計と運用の両面で対策を点検する動きが続いている。インフラ面では、Lambda Web Functions と durable functions の上限緩和でサーバーレスの守備範囲がさらに広がった。
