---
title: "Tech Feed ダイジェスト（2026年11月2日）"
date: "2026-11-01T15:56"
category: "summary"
summary: "AI学習拒否のrobots.txt共通仕様、Agent Skills設計、EKS Gateway API対応、Tor出口ノード乗っ取りなど8ソースの注目記事"
tags: ["ai", "security", "aws", "agents", "web", "infra"]
---

## はてなブックマーク (テクノロジー)
- **[AIエージェント向けの業務手順書（Agent Skills）の設計方法](https://techblog.kazaneya.com/20261030-agent-skills/)** ([668users](https://b.hatena.ne.jp/entry/s/techblog.kazaneya.com/20261030-agent-skills/)) - AIエージェントに渡す業務手順書（Agent Skills）をどう分割・記述すれば再利用しやすく安定動作するかを扱う設計論。エージェント運用が実務に定着してきたことを示す高ブクマ記事。
- **[AI学習への利用拒否をrobots.txtで一括指定へ　OpenAIやGoogleなどが対応表明](https://www.itmedia.co.jp/news/article/2611/01/2000002776/)** ([212users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/article/2611/01/2000002776/)) - OpenAI、Googleなどがrobots.txtで「AI学習への利用可否」を共通の書式で指定できる仕様に対応を表明。Web運営者側の制御手段が標準化される動き。別の報道（Impress Watch）では2027年導入とされている。
- **[GitHub - vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)** ([66users](https://b.hatena.ne.jp/entry/s/github.com/vercel-labs/agent-desktop)) - Rust製で、OSのアクセシビリティツリーから任意アプリのUI構造を取得してエージェントにデスクトップ操作をさせる。参照が安定し、操作がリトライしても安全になる設計をうたう。
- **[streamAppendHTML() で AI の回答を HTML のままストリーミング描画する](https://azukiazusa.dev/blog/stream-append-html/)** ([73users](https://b.hatena.ne.jp/entry/s/azukiazusa.dev/blog/stream-append-html/)) - LLMの出力をHTMLのまま逐次DOMに追記して描画する手法の解説。チャットUIで部分的なMarkdown/HTMLのちらつきを避けたい場合の参考になる。
- **[AdaとRustの安全性の違い 実行して比較](https://comcomponent.com/blog/ada-vs-rust-safety/)** ([15users](https://b.hatena.ne.jp/entry/s/comcomponent.com/blog/ada-vs-rust-safety/)) - 両言語のメモリ安全性・実行時検査の違いを実際にコードを動かして比較する記事。

## Zenn
- **[ISUCON 2026 参加記](https://zenn.dev/catatsuy/articles/159edffe202c0c)** - AI活用を前提に1人でISUCONへ参加。事前にAI用の作業環境を整え、当日はCodexなどで最適化したが、スコアは2.6万点台で「完全敗北」と振り返る。AI前提の準備の成否が分かる記録。
- **[ISUCON2026に人間1人＋AIエージェント軍団で出て19.6万点、ループは閉じたけど中身が弱かった反省文](https://zenn.dev/tak848/articles/20261031-isucon2026-writeup)** - Claude CodeとCodexの複数エージェントを指揮役が束ねて参戦。自動化ループは回ったものの、改善の中身が弱かったという反省を、全記録を元にAI自身が執筆している。
- **[ペイントツール上でニューラルネットワークを動かす](https://zenn.dev/melville/articles/953aa2b41f674b)** - Kritaの標準フィルターと合成レイヤーだけで手書き数字認識NNを構成。入力レイヤーの変更に応じて出力の棒が伸びる、遊び心のある計算の実装。
- **[Cloudflare Workers を触ってみた](https://zenn.dev/atware/articles/ec1dfd799289b7)** - AWS中心の開発者がエッジ上でJS/TSによりAPIまで動かせるWorkersを試した入門レポート。
- **[最近の E2E 戦略（2026 年 10 月現在）](https://zenn.dev/polyco/articles/26624b38c951b5)** - E2Eを網羅的に整備し、実装から拾った確認対象との対応漏れをCIで落とす。変更箇所に関連するシナリオのみローカル実行する運用など。

## Qiita
※ 冒頭抜粋から読み取れる範囲での紹介。
- **[自宅ラズパイの脆弱性チェックをしたらHIGH以上が2000件見つかった](https://qiita.com/yugulab/items/5cdb6f191ef5171adc79)** - aptの自動更新をしていてもCVSS HIGH以上が2059件検出され、検知と修正の自動化で4件まで減らしたという。運用上は「消していい？」の判断だけ人が行う。
- **[ローカル LLM の監視強化（前編）：Qwen の「外への送信」報道を受けて、AI エージェントを OS とネットワークで止める](https://qiita.com/nabe2030/items/0b89543adbf2ba60bf25)** - モデル単体は勝手に通信できないが、エージェント化すると話が変わる、という整理から、OS・ネットワーク層で制限する対策を扱う連載の前編。
- **[開発途中でAIモデルやエージェントを替えても品質を落とさない：リポジトリに残す3原則](https://qiita.com/lumichy/items/2165d8f0dd84cc5e351a)** - コスト・レート制限・ツール変更などでモデルを切り替えざるを得ない場面に備え、リポジトリ側に残すべき情報の原則を整理。
- **[脆弱性情報を開発チームで見逃さないようにSlackにRSSフィードを設定してみた](https://qiita.com/yukmaru/items/a3f358cc3e58e435df61)** - php2shell を契機に、無料で手軽なRSS→Slack連携で脆弱性情報に社内でいち早く気づく仕組みを作った実践例。
- **[Claudeくん！これ作って！~コスト可視化~](https://qiita.com/hotate_2235/items/b72c85b001fcf6b575da)** - Claude Enterpriseでシート料金とは別にトークン従量課金される利用料を、手元で監視する仕組みの紹介。

## AWS 新着
- **[Amazon EKS Auto Mode now supports Kubernetes Gateway API](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-eks-auto-mode-kubernetes-gateway-api/)** (2026-10-28) - EKS Auto Modeが標準のGateway APIに対応し、ALBなどの構成をポータブルな形で定義できるようになった。
- **[AWS Lambda durable functions now exports live telemetry for execution insights](https://aws.amazon.com/about-aws/whats-new/2026/10/lambda-durable-telemetry/)** (2026-10-28) - Durable Execution Telemetry Exporterプラグインにより、durable functionsの実行ステップ履歴を外部へエクスポートして可視化できる。
- **[Amazon EMR on EKS reduces EMR charge by 30 percent](https://aws.amazon.com/about-aws/whats-new/2026/10/emr-eks-reduces-emr-charge-30-percent/)** (2026-10-23) - EMR on EKSのvCPU時間・GB時間あたりのEMR追加料金が30%値下げ。課金体系の変更。
- **[AWS Transit Gateway and AWS Cloud WAN now support 1:1 NAT](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-transit-gateway-cloud-wan-1-1-nat/)** (2026-10-23) - Regional Private NAT Gatewayと統合し、アタッチメント上で1:1 NATを管理型で提供。重複CIDR環境の接続設計が楽になる。
- **[Structured outputs for Claude models available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/10/claude-structured-outputs-bedrock/)** (2026-10-20) - 全Claudeモデルでbedrock-runtimeとbedrock-mantleの両エンドポイントからStructured outputsが利用可能に。

## Lobsters
※ 今回は過去レポートと重複しない高スコア記事が少なく、スコアは低めの記事も含む。
- **[Introducing Kwi, a new KDE terminal emulator](https://blogs.kde.org/2026/11/01/introducing-kwi/)** (59pt) - KDEプロジェクトが新しいターミナルエミュレータ Kwi を発表。
- **[Tangled, hire a front-end accessibility expert](https://dbushell.com/2026/11/01/tangled-accessibility/)** (36pt) - 分散型コードフォージ Tangled のフロントエンドにアクセシビリティ上の問題があるとして、専門家の雇用を促す批評記事。
- **[Beating the compiler at signed 32-bit division](https://lemire.me/blog/2026/10/31/beating-the-compiler-at-signed-32-bit-division/)** (3pt) - Lemire氏が符号付き32ビット除算でコンパイラ生成コードより速い実装を示す低レベル最適化記事。
- **[Effective Type: Part 1](https://uecker.codeberg.page/2026-10-31.html)** (5pt) - Cの「実効型（effective type）」ルールを扱う連載の第1回。厳密なエイリアシングの仕様理解に関わる。
- **[An LC-3 Disassembler in Haskell](https://abhinavsarkar.net/posts/lc3-disassembler/)** (13pt) - 教育用アーキテクチャLC-3の逆アセンブラをHaskellで実装する解説。

## dev.to
- **[I grepped for @ts-ignore and found zero. Then I grepped for the cast nobody bans](https://dev.to/chet103cc/i-grepped-for-ts-ignore-and-found-zero-then-i-grepped-for-the-cast-nobody-bans-723)** - `@ts-ignore` を禁止してゼロを保っていても、型キャストという抜け道で型安全性が骨抜きになっている点を検出する監査の話。
- **[Your AI Agent Trusts Everything It Reads — A Field Guide to Hijacking Claude, GPT, Gemini & Copilot](https://dev.to/rudratosh/your-ai-agent-trusts-everything-it-reads-a-field-guide-to-hijacking-claude-gpt-gemini-copilot-1l6k)** - READMEやカレンダーなど読み込んだ内容経由でエージェントが乗っ取られるプロンプトインジェクションの実例集と防御の整理。
- **[Your Laptop Might Replace Most of Your AI Bill](https://dev.to/auth0/your-laptop-might-replace-most-of-your-ai-bill-4o1f)** - ローカルでLLMを動かしてクラウドAPI費用を減らせるかを初めて試した体験記。
- **[Agent Skills Drift: A Feedback Loop for Keeping One True](https://dev.to/gde/agent-skills-drift-a-feedback-loop-for-keeping-one-true-2il7)** - エージェントのスキルが、チェックが緑のまま6通りの形で陳腐化していく現象と、そのドリフトを測るフィードバックループの手順。
- **[Why Smaller AI Models Can Win in the Enterprise](https://dev.to/dailycontext/why-smaller-ai-models-can-win-in-the-enterprise-1m57)** - 不正検知向けの10億パラメータ基盤モデル構築から得た3つのエンジニアリング上の教訓。

## TechCrunch
※ 他ソースとの重複や過去掲載分を除くと、技術的な新規記事は3件のみだった。
- **[Satlyt takes another step toward turning satellites into space data centers](https://techcrunch.com/2026/10/30/satlyt-takes-another-step-toward-turning-satellites-into-space-data-centers/)** - 衛星を仮想データセンター化する構想で、今月の実証テストに成功したという報告。
- **[Nvidia weighs playing the cosigner for Nscale's AI data center in West Virginia](https://techcrunch.com/2026/10/30/nvidia-weighs-playing-the-cosigner-for-nscales-ai-data-center-in-west-virginia/)** - 投資家がAI支出に慎重になる中、チップ供給元のNvidiaが融資の連帯保証を検討。AIインフラ資金調達の構造を示す。
- **[Judge allows NAACP lawsuit over xAI data center pollution to move forward](https://techcrunch.com/2026/10/31/judge-allows-naacp-lawsuit-over-xai-data-center-pollution-to-move-forward/)** - xAIのデータセンターが大気浄化法に違反しているとするNAACPの訴訟が進行へ。計算資源の環境規制に関わる。

## Ars Technica
- **[333 Tor exit nodes hijacked to intercept SSH traffic and retrieve plaintext email](https://arstechnica.com/information-technology/2026/10/300-tor-exit-nodes-hijacked-to-intercept-ssh-traffic-and-retrieve-plaintext-email/)** - 今月3日間にわたり333のTor出口ノードが乗っ取られ、SSH通信や平文メールの傍受が狙われた。出口で暗号化されない通信の危うさを再確認させる。
- **[Meta Muse exposes users' personal and business secrets when they share conversations](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/)** - Meta Museの会話共有機能で個人・業務上の機密が露出。Metaは調査のため共有機能を停止した。
- **[PSA: Patch your Plex media server before someone hacks it](https://arstechnica.com/security/2026/10/recently-fixed-plex-media-vulnerabilities-are-being-exploited-to-install-malware/)** - 修正済みの4つの脆弱性を連鎖させ、未パッチのPlexサーバーにマルウェアを入れる攻撃が確認されている。
- **[Topgolf saved over $11.3 million after leaving VMware](https://arstechnica.com/information-technology/2026/10/topgolf-saved-over-11-3-million-after-leaving-vmware/)** - TopgolfがVMwareから移行して1130万ドル超を節約した事例。ライセンス費用で移行を検討する企業が多いという別調査とも符合する。

## 注目トピック
AIエージェントの「運用の作り込み」が複数ソースで目立った。はてブのAgent Skills設計論、Qiitaのモデル切替に耐えるリポジトリ設計、dev.toのスキルのドリフト検出は、いずれも手順書やコンテキストを継続的に保守する課題を扱う。ISUCONでもAIエージェント前提の参戦記が複数出ており、自動化ループの成否は中身の品質次第という実感が共有されている。

セキュリティでは、Tor出口ノードの乗っ取り、Plexの脆弱性連鎖、ラズパイの大量CVE、エージェントのプロンプトインジェクションなど、パッチ運用と信頼境界の問題が並んだ。また、AI学習の可否をrobots.txtで共通指定する動きは、AI時代のWeb標準化の一歩として注目される。
