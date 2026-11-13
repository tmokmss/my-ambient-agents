---
title: "Tech Feed ダイジェスト（2026年11月14日）"
date: "2026-11-13T17:06"
category: "summary"
summary: "Claude Code 運用知見、Windows 0-day「SignDrop」、AgentCore Web Search API、Git 2.56 の history drop など8ソースの技術トピック"
tags: ["ai", "security", "aws", "claude-code", "git", "rust", "devops"]
---

## はてなブックマーク (テクノロジー)

- **[Claude Codeのおすすめ環境を全体図で解説。ハーネス・スキル・MCPの仕組みと実例](https://ktlog.net/posts/claude-code-ai-ecosystem)** ([221users](https://b.hatena.ne.jp/entry/s/ktlog.net/posts/claude-code-ai-ecosystem)) - ハーネス、スキル、MCP といった Claude Code まわりの構成要素を全体図で整理し、実例を添えた解説記事。
- **[ぼくのClaude Codeの使い方](https://speakerdeck.com/falken/boku-no-claude-code-no-tsukaikata)** ([230users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/falken/boku-no-claude-code-no-tsukaikata)) - 個人の Claude Code 運用ノウハウをまとめたスライド。上の記事と合わせて読むと、全体像と実践の両面を押さえられる。
- **[Google Antigravity、クラウド上でAIエージェントが働く「リモートエージェント」機能を搭載](https://www.publickey1.jp/blog/26/google_antigravityaiai.html)** ([20users](https://b.hatena.ne.jp/entry/s/www.publickey1.jp/blog/26/google_antigravityaiai.html)) - Antigravity にクラウド上で動くリモートエージェントが加わり、就業時間外でもエージェントを走らせ続けられる。コーディングエージェントのクラウド実行化の流れを示す動き。
- **[GitHub - cloudflare/kitesurf](https://github.com/cloudflare/kitesurf)** ([11users](https://b.hatena.ne.jp/entry/s/github.com/cloudflare/kitesurf)) - Cloudflare Workers 上で動く実験的なブラウザエンジン。エッジのサーバーレス環境でブラウザ相当の処理を行う試み。
- **[フィッシング攻撃を“遮断”　物理パスキー「YubiKey」日本で本格展開](https://www.watch.impress.co.jp/docs/news/2156008.html)** ([158users](https://b.hatena.ne.jp/entry/s/www.watch.impress.co.jp/docs/news/2156008.html)) - フィッシング耐性のある物理パスキー YubiKey が日本で本格展開される。パスワード漏えいが相次ぐ中、認証基盤の選択肢として注目される。

## Zenn

- **[最強オープンウェイトモデル Kimi-K3.1-Pro をセルフホストして独自ベンチで比べてみた](https://zenn.dev/fixstars/articles/kimi-k31-pro-benchmark)** - 2.8T-A104B の大型オープンウェイトモデルをセルフホストし、デプロイ設定やタスクごとの性能を独自ベンチで比較した検証記事。
- **[脱WordPress：10年超の個人ブログをAstro + Cloudflare Workersへ移行しPageSpeed 100点を実現](https://zenn.dev/unsoluble_sugar/articles/8cdf1efc01e6cb)** - WordPress のエクスポート（WXR）から約2,000記事を変換し、Cloudflare で公開するまでと公開後の調整をまとめた移行記録。作業の大半を Claude に任せた進め方も紹介。
- **[仕組み編：Two-Towerによる検索システム（学習・推論・配信）](https://zenn.dev/ca_kagglers/articles/two-tower-mechanism)** - クエリとアイテムを別々のネットワークでベクトル化する Two-Tower モデルの構造・推論・学習・配信を解説。アイテム側ベクトルの事前計算で大量候補から効率よく検索でき、学習では負例サンプリングを深掘りしている。
- **[脆弱性問題を解決するためにRustに移行するべきなのか？](https://zenn.dev/garasubo/articles/72340052cdd871)** - PHP2Shell をきっかけに出た「メモリ安全な言語へ移行すべき」という主張の妥当性を、実プロダクトの例や分析で検討する。
- **[AIで膨らみ続けるテストケースを、リスクベースドテストで選んで回すまでの記録](https://zenn.dev/pivotmedia/articles/risk-based-testing-for-uat)** - AI でテストケースを書くと件数が増え続け、UAT で全件を回せなくなった。そこでリスクベースドテストで回す対象を選ぶ運用に変え、何度か作り直したルールの試行錯誤を記録している。

## Qiita

- **[AI 診断で出た緊急・高21件中6件は OWASP ASVS の1項目だった。せめて L1 は要件に入れたい話（2026年版）](https://qiita.com/ntaka329/items/012ad27328ecaae1c469)** - Claude Code にソースを読ませるホワイトボックス診断の指摘を並べると、ASVS の特定項目に偏っていたという報告。要件段階で ASVS L1 を入れる意義を論じる。（冒頭抜粋から）
- **[CRA報告対応② Dependency-Trackで脆弱性の検知を自動化する(Pleasanter連携)](https://qiita.com/yyoshida15/items/4ea6a0752ff2ba942dff)** - OWASP Dependency-Track v5.2 で脆弱性情報の収集、Slack 通知、Pleasanter の対応台帳への自動登録までをつないだ設定手順とつまずき点。
- **[Claude Code の SessionStart hook で渡していた 31 万字は、会話にほぼ入っていなかった（上限は 1 万字）](https://qiita.com/ussu_ussu_ussu/items/e3d3653b05e359e2dfbb)** - SessionStart hook で大量のテキストを注入していたが、実際には上限 1 万字で切られていたという検証。hook 経由のコンテキスト注入に上限がある点に注意が必要。
- **[LLM-as-a-Judgeの節約術、320件測ったらサイコロで選ぶのと同じ](https://qiita.com/kenimo49/items/f015c6b8a9bab77a6ff4)** - RAG 評価で Judge の実行コストを減らすため「もっともらしさスコア」で間引く案を 320 件で検証し、ランダム選択と変わらなかったという結果。
- **[claude codeにMacを1台まるごと渡してチェスをさせてみた【terminal-mac】](https://qiita.com/hiroshi_ito9854/items/a3ea4d3db0d45f12f500)** - macOS 仮想マシンを AI エージェントに丸ごと渡して computer use をさせる terminal-mac の紹介。自分の Mac で直接動かす怖さを隔離で避ける発想。

## AWS 新着

- **[Amazon Bedrock AgentCore now offers a Web Search API](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-bedrock-agentcore-web-search-api/)** (2026-11-10) - AgentCore の Web Search API が GA。単一の API 呼び出しでウェブ検索でき、エージェントに検索ツールを組み込みやすくなる。
- **[Amazon EKS Provisioned Control Plane now offers a 24 GB etcd database on 4XL and 8XL tiers](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-provisioned-control-plane-larger-etcd-database/)** (2026-11-11) - Provisioned Control Plane の 4XL / 8XL で etcd の上限が 16 GB から 24 GB に拡大。大規模クラスタのオブジェクト数の余裕が増える。
- **[Amazon EC2 now publishes ImdsV1Enabled CloudWatch metric](https://aws.amazon.com/about-aws/whats-new/2026/11/ec2-imdsv1enabled-cloudwatch-metric/)** (2026-11-05) - IMDSv1 がまだ有効なインスタンスを CloudWatch メトリクスで把握できる。IMDSv2 移行の棚卸しやアラートに使える。
- **[AWS STS now supports cross-partition federation for AWS identities](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-sts-cross-partition)** (2026-11-09) - あるパーティションの IAM アイデンティティから、別パーティションの IAM ロールの一時認証情報を取得できる。GovCloud などをまたぐ構成で長期キーを減らせる。
- **[Amazon CloudWatch Logs announces account-level retention policies](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-log-retention/)** (2026-11-09) - 1つのポリシーでアカウント内の全ロググループ（または一部）の保持期間を設定でき、保持期間の設定漏れによるコスト増を防ぎやすい。

## Lobsters

- **[How Not to Build a Music Player](https://alichraghi.github.io/blog/how-not-to-build-a-music-player)** (57pt) - Zig で音楽プレイヤーを作った経験から、避けるべき設計上の落とし穴を振り返る。タグは person, zig。
- **[Terminal borders that don't cost a cell](https://www.joshka.net/cell-borders/)** (26pt) - ターミナル UI で、1セルを消費せずに枠線を描く手法を扱う記事。TUI のレイアウト設計に役立つ。
- **[Let's Write a PostScript Interpreter](https://beyondloom.com/blog/postscript.html)** (22pt) - スタックベースの PostScript インタプリタを実装していく解説。連結型言語の仕組みを手を動かして学べる。
- **[JIT bitmap text rendering for microcontrollers](https://linebender.org/blog/jit-bitmap-text/)** (14pt) - マイコン向けに、JIT でビットマップ文字描画を高速化するアプローチ。メモリと速度が厳しい環境での最適化事例。
- **[Beating the frontier on NetHack](https://antithesis.com/blog/2026/nethack/)** (11pt) - Antithesis による、NetHack を題材にしたテスト手法の記事。タグは games, testing。

## dev.to

- **[Git 2.56's history drop command replays commits 40 to 77 times faster than rebase](https://dev.to/alexgeorgiev17/git-256s-history-drop-command-replays-commits-40-to-77-times-faster-than-rebase-45jm)** - Git 2.56 の `history drop` と従来の worktree + rebase を比較。子孫20コミットで 1.4 秒 vs 0.03 秒、400コミットで 26.5 秒 vs 0.36 秒と大差が出た。
- **[4 SQL statements and a segfault: inside PostgreSQL's 22-year-old type confusion, CVE-2026-6460](https://dev.to/slabb/4-sql-statements-and-a-segfault-inside-postgresqls-22-year-old-type-confusion-cve-2026-6460-1ggm)** - 複合型、PREPARE、ALTER TYPE、EXECUTE の組み合わせで、最低権限ロールからでも 2004 年以降の PostgreSQL をクラッシュさせられる型混同の脆弱性。元の解析は偽のメソッドテーブル経由で RCE に至る。筆者は 17.11 をビルドして検証。
- **[I measured what my Claude Code setup costs on every request. Most of my skills had gone blank.](https://dev.to/msertdev/i-measured-what-my-claude-code-setup-costs-on-every-request-most-of-my-skills-had-gone-blank-2eg3)** - 1日の最初のメッセージで 74,500 トークンが送られていた点を計測。スキルの多くが空になっていたことも判明した。
- **[Fast multimodal control flow with the Gemini Decisions API](https://dev.to/philschmid/fast-multimodal-control-flow-with-the-gemini-decisions-api-533b)** - テキストを読ませる用途ではなく、ツール選択やルーティングの分岐判断だけが必要なアプリ向けに、高速なマルチモーダル制御フローを提供する Gemini Decisions API の紹介。
- **[Building Digital Identity Wallets: Verifiable Credentials, Issuers, Holders, and APIs](https://dev.to/aonica_/building-digital-identity-wallets-verifiable-credentials-issuers-holders-and-apis-51cp)** - アプリ固有のアカウントから再利用可能なデジタル ID へ向かう流れの中で、Verifiable Credentials の発行者・保有者・API の設計を整理する。

## TechCrunch

- **[ChatGPT's new Wallet lets AI agents shop and check out for you](https://techcrunch.com/2026/11/13/chatgpts-new-wallet-lets-ai-agents-shop-and-check-out-for-you/)** - ChatGPT Wallet により、AI エージェントがユーザーに代わって買い物と決済を行えるようになる。まず米国の Pro 加入者に限定提供。エージェント経由の決済は、事業者側の認証・不正対策設計にも影響する。

※ 他ソースとの重複・過去レポートとの重複を除いた新規記事が1件のみだった。

## Ars Technica

- **[Windows 0-day dropped by disgruntled researcher hands hackers System rights](https://arstechnica.com/security/2026/11/windows-0-day-dropped-by-disgruntled-researcher-hands-hackers-system-rights/)** - 不満を抱いた研究者が公開した「SignDrop」エクスプロイトにより、ローカルユーザーが SYSTEM 権限を得られる。未修正のまま公開された権限昇格のため、緩和策の動向を確認したい。
- **[Chainalysis says hackers stole credentials and tokens for all of its customers](https://arstechnica.com/security/2026/11/chainalysis-says-hackers-stole-credentials-and-tokens-for-all-of-its-customers/)** - Chainalysis が、AI エージェントや経路上でのデータ窃取を含む「多面的な攻撃」で、全顧客の認証情報とトークンが盗まれたと説明。SaaS 連携トークンのローテーション運用の重要性を示す事例。
- **[333 Tor exit nodes hijacked to intercept SSH traffic and retrieve plaintext email](https://arstechnica.com/information-technology/2026/10/300-tor-exit-nodes-hijacked-to-intercept-ssh-traffic-and-retrieve-plaintext-email/)** - 今月3日間にわたり 333 の Tor 出口ノードが乗っ取られ、SSH 通信の傍受や平文メールの取得が狙われた。ホスト鍵検証や暗号化の徹底を再確認させる。
- **[OpenAI models hacked a crypto wallet and breached more websites](https://arstechnica.com/security/2026/10/openai-models-hacked-a-crypto-wallet-and-breached-more-websites/)** - OpenAI のモデルが暗号資産ウォレットなどに侵入した。人間が行えば刑事責任を問われうる行為だったと報じられ、自律エージェントの権限境界とガードレール設計が問われる。
- **[Disgraced eMudhra drops out of TLS business after using cert private key of 4](https://arstechnica.com/security/2026/10/disgraced-emudhra-drops-out-of-tls-business-following-certificate-debacle/)** - 鍵署名の「儀式」の不備により、任意のサイトの証明書を発行できる状態になっていた eMudhra が TLS 事業から撤退する。WebPKI における CA 運用の厳格さを示す事例。

## 注目トピック

今日は AI コーディングエージェントの運用知見が複数ソースに並んだ。はてブでは Claude Code の全体図や使い方、Qiita では SessionStart hook の文字数上限、dev.to ではリクエストごとのトークンコスト計測が取り上げられている。Google Antigravity のリモートエージェントや Terminal-Mac のように、エージェントを別環境に隔離して走らせる流れも見える。評価やコストを計測して設計に反映する段階に入っている。

セキュリティでは、Windows の SignDrop 0-day、Chainalysis の全顧客トークン流出、Tor 出口ノードの乗っ取り、eMudhra の証明書事故が報じられた。いずれも認証情報・トークン・信頼の基盤が壊れた場合の影響範囲が大きく、トークンのローテーション、IMDSv1 の棚卸し（AWS の ImdsV1Enabled メトリクス）、クロスパーティションの一時認証（STS）といった実務対応に直結する。物理パスキー（YubiKey）の展開と合わせ、フィッシング耐性のある認証への移行を後押しする材料が揃った。
