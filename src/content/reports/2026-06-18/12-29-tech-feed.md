---
title: "Tech Feed ダイジェスト（2026年6月18日夜）"
date: "2026-06-18T12:29"
category: "summary"
summary: "海底データセンター・ChatGPT広告展開・Waymo大規模リコール・Epic Gamesの新VCS「Lore」・ダンジャラスAIモデル論争"
tags: ["ai", "infrastructure", "security", "vcs", "aws", "browser", "robotaxi", "llm", "devtools"]
---

## はてなブックマーク (テクノロジー)

- **[「斜めCloseボタン」広告に批判](https://www.itmedia.co.jp/news/articles/2606/18/news085.html)** ([298users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2606/18/news085.html)) - 広告の閉じるボタンを斜めに傾けて「意図せずクリックさせる」ダークパターンが広まり、UXコミュニティで批判が噴出。設計者が意図してユーザー操作を妨害する「欺き型UI」として、デザイン倫理の文脈で議論になっている。

- **[中国「海の中にデータセンター設置します」](https://www.gizmodo.jp/article/china-turns-on-the-worlds-first-underwater-data-center/)** ([170users](https://b.hatena.ne.jp/entry/s/www.gizmodo.jp/article/china-turns-on-the-worlds-first-underwater-data-center/)) - 世界初の海底データセンターが中国で稼働開始。海水冷却によりPUEを大幅に削減できる一方、メンテナンスや生態系への影響が課題。AIの爆発的な電力・冷却需要に対する大胆なインフラアプローチとして注目される。

- **[自称AI絵師がイラストレーターとして企業に応募するケースが増加](https://togetter.com/li/2710391)** ([152users](https://b.hatena.ne.jp/entry/s/togetter.com/li/2710391)) - 生成AI出力を自作として応募する事例が採用現場で急増しているというTogetterまとめ。採用担当者が頭を抱えるエピソードが集まり、ポートフォリオ審査プロセスとスキルスクリーニングの見直しを迫る動きへの注目度が高い。

- **[ごめんLLM、もう君だけじゃ物足りない。OpenClaw沼にハマった話](https://pc.watch.impress.co.jp/docs/column/nishikawa/2117740.html)** ([140users](https://b.hatena.ne.jp/entry/s/pc.watch.impress.co.jp/docs/column/nishikawa/2117740.html)) - 単一LLMの限界を感じた著者が、複数モデルをオーケストレーションするOpenClawに乗り換えた体験記。役割分担型マルチLLM構成の実用例として、個人ユーザーレベルでも複数モデル使い分けが浸透しつつある現状を示している。

- **[ChatGPT内に広告表示、日本でOpenAIが展開　電通や博報堂が仲介](https://www.nikkei.com/article/DGXZQOUC179OF0X10C26A6000000/)** ([13users](https://b.hatena.ne.jp/entry/s/www.nikkei.com/article/DGXZQOUC179OF0X10C26A6000000/)) - OpenAIがChatGPT上で広告ビジネスを日本でも開始し、電通・博報堂が代理店として仲介することが判明。サブスクリプションだけでなく広告収益という第2の収益源を確立する動きで、AIサービスのマネタイズモデルが多様化している。

## Zenn

- **[Node.jsで動くのにDenoで動かないJavaScript](https://zenn.dev/monicle/articles/74ad93709c2199)** - Node.jsとDenoの実行環境の違いから生じる非互換ケースを網羅的に解説。グローバル変数・モジュール解決・パーミッションモデルの差異が実際のコードで示されており、Node.js製ライブラリをDenoへ移植する際のトラブルシューティング事例として実用的だ。

- **[`cp`はディスク上ではデータをコピーしないことがある](https://zenn.dev/satoru_takeuchi/articles/4bab372c6dae86)** - LinuxのCoW（Copy-on-Write）ファイルシステム上でcpコマンドが`--reflink`オプションを使うと、実際にはデータブロックをコピーせずポインタだけを複製することを丁寧に解説。大容量ファイルを扱うスクリプトを書く際に見落としやすいOS挙動の盲点だ。

- **[AIエージェントはCloudflareに賭けろ](https://zenn.dev/yusukebe/articles/ccb1f953e48ee1)** - Cloudflare Workers・AI Gateway・Browser Renderingを組み合わせたエッジネイティブなエージェントアーキテクチャを提唱する記事。低レイテンシ・グローバル分散・ゼロコールドスタートの特性が、ツール実行を多用するエージェントワークロードに特に適していると論じている。

- **[State-Aware RAGをAmazon Bedrock と Amazon S3 Vectorsで再現してみた](https://zenn.dev/fusic/articles/9cedae6d6f8560)** - Amazonが提唱する「会話の状態を追跡しながら動的に再検索を判断する」State-Aware RAGの実装をBedrockとS3 Vectorsで再現した実験記。マルチターン質問応答での精度改善が確認されており、従来の一発検索RAGからの進化を実証している。

- **[マークダウンやHTMLをSlackで共有するのが辛すぎて社内ツールを作った話](https://zenn.dev/tokium_dev/articles/tokium-share-pages)** - MarkdownやHTMLをSlack経由で共有する際のプレビュー崩れや閲覧者ごとの環境差異という、多くの開発チームが経験する地味な課題を自社ツールで解決した実録。ツール設計の意思決定プロセスも丁寧に記されており、社内ツール開発のケーススタディとして参考になる。

## Qiita

- **[AWS Summit New York 2026 での新発表まとめメモ](https://qiita.com/hayao_k/items/44b25e2a51d12482a308)** - AWS Summit NY 2026の主要発表をコンパクトにまとめた記事。AgentCore関連の複数GA・Amazon QuickのAI機能強化・Glue Data Catalogへのセマンティック検索追加など、エージェント基盤整備に向けた発表が集中しており、AWSのAI戦略の方向性が読み取れる。

- **[【AWS】Managed Knowledge Basesが発表！AgentCoreから試してみました](https://qiita.com/yakumo_09/items/1b4ab7d392a85c1b4612)** - BedrockのManaged Knowledge Base（マネージドRAG基盤）がGAとなり、AgentCoreから実際に試したレポート。ドキュメント取り込みからベクトル化・検索までをフルマネージドで提供するサービスで、RAG構築のインフラ負担が大幅に下がる可能性がある。

- **[ダッシュボードを作ったのに誰も見てくれないので、オントロジーについて考えてみた](https://qiita.com/KYoshiyama/items/52dc298122587969b39c)** - 精巧なデータダッシュボードが活用されない原因を「データモデルと業務用語のギャップ」に求め、オントロジー設計でその橋渡しをするアプローチを論じた記事。DataOpsの文脈で語られることが多い「データの民主化」に、哲学的な問いを持ち込む視点が新鮮だ。

- **[メモリ管理の基本と、Railsで省メモリに書くための実装Tips](https://qiita.com/akachiryo/items/30c076850c90e50da118)** - Rubyのオブジェクトメモリレイアウトから始まり、Railsでの大量レコード処理・N+1解消・文字列frozen化など、実業務でのメモリ削減につながる実装パターンを体系的にまとめた記事。本番で突然メモリが逼迫した際のデバッグ手順も含まれており実践的だ。

- **[FastAPI + asyncpg でプロファイリングを用いたパフォーマンス改善](https://qiita.com/aaaabbbbb/items/bc230f0d5cdaebccfd05)** - py-spyとasyncpgのカスタムローダーを組み合わせてボトルネックを特定し、SQLクエリの非同期化とコネクションプール設定の最適化で応答速度を大幅改善した実録。Pythonの非同期DBアクセスの落とし穴とチューニングのアプローチが分かりやすく整理されている。

## AWS 新着

- **[Amazon Bedrock Managed Knowledge Base が一般提供開始](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-managed-knowledge-base/)** (2026-06-17) - RAGパイプライン全体（取り込み・チャンキング・ベクトル化・検索）をフルマネージドで提供するサービスがGAに。これまで自前で構築していたRAGのインフラ部分を丸ごとAWSに委ねられるようになり、アプリ開発者はビジネスロジックに集中できる。

- **[Amazon Quick が自律エージェント・マルチデータセット分析・再設計アクティビティフィードを発表](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-quick/)** (2026-06-17) - AWSのBIサービスAmazon QuickSightが「Amazon Quick」として刷新。データ横断の自然言語分析・ダッシュボード生成を行う自律エージェント機能が追加され、ノーコード分析のレベルがさらに引き上げられた。

- **[AWS Continuum — マシンスピードのセキュリティを実現する新サービスを発表](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-continuum/)** (2026-06-17) - 脅威検出・修復・ポリシー適用を人間のレビューなしに自動完結させる「マシンスピードセキュリティ」基盤。AIエージェントが継続監視しリアルタイムに対応する設計で、従来のSIEMやSOARとは異なる自律型セキュリティ運用への大きな一歩だ。

- **[Amazon RDS for MySQL 5.7 の Extended Support が2029年6月まで延長](https://aws.amazon.com/about-aws/whats-new/2026/06/rds-mysql-es-extension/)** (2026-06-17) - MySQL 5.7のEOLで移行を迫られていた企業に対し、AWSが有償のExtended Supportを2029年6月まで3年延長することを発表。移行コストと時間の確保を考える余裕が生まれるが、セキュリティリスクを容認するコストも発生する点に注意が必要だ。

- **[AWS Security Agent がスレットモデリング対応を発表](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-security-agent-threat-modeling/)** (2026-06-17) - AWS Security AgentがAIによる自動脅威モデリング機能を追加。アーキテクチャ図やIaCテンプレートを入力するとATT&CKフレームワークに基づくリスク分析レポートを生成する機能で、セキュリティレビューの工数削減が期待される。

## Lobsters

- **[Leaving Mozilla](https://blog.unitedheroes.net/5751)** (121pt) - Mozillaを退職した開発者による内部からの告白。組織文化・意思決定プロセス・Firefoxの方向性への懸念が率直に語られており、ブラウザエコシステムの多様性を維持する上でのMozillaの重要性とその組織的課題が浮き彫りになっている。

- **[Epic Games announces Lore version control system](https://lore.org/)** (57pt) - Epic Gamesが「Lore」という次世代オープンソースバージョン管理システムを発表。大規模ゲーム開発・バイナリファイル管理・分散チームに特化した設計で、Perforceに代わる選択肢として位置づけられる。はてブでもGitHubリポジトリが話題になっており注目度が高い。

- **[Pull Requests are Free Puppies](https://www.youtube.com/watch?v=x8_ZZhRL3YU&t=1733s)** (67pt) - PRは「作った瞬間から世話が必要な子犬」というメタファーでレビュープロセスのコストと責任を論じる動画。PRを出すことは作業終了ではなくレビュアーへの負荷移転であり、小さく速いPRを出す文化の重要性を軽快に語っている。

- **[Changes in Emacs 31 I'm Already Daily Driving](https://rahuljuliato.com/posts/emacs-31-around-the-corner)** (40pt) - まだリリース前のEmacs 31の新機能をすでにビルドして日常利用している開発者によるレポート。ツリーシッター統合の改善・LSPパフォーマンス向上・UIの現代化が主な変更点で、Emacsenの熱量を改めて見せつける内容だ。

- **[I hate compilers](https://xeiaso.net/notes/2026/anubis-wasm-vendor-binary/)** (33pt) - AnubisプロジェクトのWASMビルドにおけるクロスコンパイル地獄の記録。ツールチェーン・ランタイム・ABIの不一致が積み重なる様子が生々しく描かれており、「ビルドが通れば完成」にならないWASM/クロスプラットフォーム開発の現実を示している。

## dev.to

- **[What's New in Apple's Foundation Models Framework at WWDC 2026](https://dev.to/hariharanjagan/whats-new-in-apples-foundation-models-framework-at-wwdc-2026-5227)** - WWDC 2026で発表されたApple製のオンデバイスLLMフレームワーク「Foundation Models Framework」の新機能まとめ。ガイデッドジェネレーション・ツール使用・ストリーミング推論のAPIが整備され、プライバシーを保ちながらiOS/macOSアプリにLLM機能を統合できる基盤が本格化している。

- **[Threshold Signatures and FROST: One Signature, No Single Signer](https://dev.to/havenmessenger/threshold-signatures-and-frost-one-signature-no-single-signer-4djm)** - 秘密鍵を複数参加者に分散し、閾値人数が揃った時だけ署名を生成できる「閾値署名」技術とFROSTプロトコルの解説。単一秘密鍵の紛失・盗難リスクを排除しつつ単一署名と区別できない出力を得る暗号技術で、マルチシグウォレットや分散キー管理システムの設計に直結する。

- **[Add a CI Gate for MCP Contract Coverage in 10 Minutes](https://dev.to/kioiek/add-a-ci-gate-for-mcp-contract-coverage-in-10-minutes-2ga0)** - MCP（Model Context Protocol）ツール定義とその実装の間の乖離をCIで自動検出するゲートを10分で追加するチュートリアル。エージェントのツール仕様が実装と一致していない「コントラクト違反」をデプロイ前に捕捉する実践的なQA手法だ。

## TechCrunch

- **[Waymo recalls nearly 4,000 robotaxis to stop them driving into highway construction zones](https://techcrunch.com/2026/06/18/waymo-recalls-nearly-4000-robotaxis-to-stop-them-driving-into-highway-construction-zones/)** - Waymoが約4,000台のロボタクシーをリコール。工事で閉鎖された高速道路区間に進入する事例が少なくとも13件確認されたためで、動的な道路変化への対応がAV（自動運転車）システムの最大の技術課題の一つであることを改めて示した。

- **[NASA picks Eric Schmidt's rocket company for Mars mission, setting up a race with SpaceX](https://techcrunch.com/2026/06/17/nasa-picks-eric-schmidts-rocket-company-for-mars-mission-setting-up-a-race-with-spacex/)** - NASAが元Google会長エリック・シュミットが買収したRelativity Spaceを火星ミッションのロケット事業者として選定。SpaceXとの火星到達競争が成立する可能性が出てきており、民間競争が宇宙探査を加速させるシナリオが現実味を帯びている。

- **[Google bets on Gemini to reinvent the smart home speaker](https://techcrunch.com/2026/06/17/google-bets-on-gemini-to-reinvent-the-smart-home-speaker/)** - Googleが$99.99の新型Google Home Speakerを発表。従来のGoogle Assistantの定型応答から、Geminiによる文脈を理解した自然な会話へと大幅に刷新。スマートスピーカー市場の再活性化をGemini搭載で狙う戦略的な製品投入だ。

- **[FTC lawsuit reveals how subscription scam networks evade app store enforcement](https://techcrunch.com/2026/06/17/ftc-lawsuit-reveals-how-subscription-scam-networks-evade-app-store-enforcement/)** - FTCの訴状が明らかにした、悪質サブスク事業者がシェルカンパニーと決済インフラを駆使してApp Storeの制裁を回避する手口の詳細。巧妙な組織構造でフラグを回避しながら消費者への詐欺を継続できる制度的な抜け穴が浮き彫りになった。

- **[Pixi's new iOS app turns text messages into interactive AR experiences](https://techcrunch.com/2026/06/18/pixis-new-ios-app-turns-text-messages-into-interactive-ar-experiences/)** - テキストメッセージをインタラクティブなAR体験に変換するiOSアプリ「Pixi」がリリース。スタンプやGIFの次のメッセージング進化としてARを位置づける試みで、日常コミュニケーションにおけるAR活用の新たな切り口として注目されている。

## Ars Technica

- **[「Dangerous」AI models are coming no matter what](https://arstechnica.com/ai/2026/06/dangerous-ai-models-are-coming-no-matter-what/)** - 高度なハッキング能力を持つAIモデルは、規制の有無にかかわらず近い将来に普及するという論考。オープンソースモデルの急速な進化と地政学的競争を考えると、特定国家・企業による制限は実質的に機能しないという厳しい見通しが示されている。

- **[California says AT&T lied to FCC in attempt to shut off old phone network](https://arstechnica.com/tech-policy/2026/06/california-says-att-lied-to-fcc-in-attempt-to-shut-off-old-phone-network/)** - カリフォルニア州がAT&TによるFCCへの虚偽申告を告発。従来のPSTN（公衆電話交換網）を廃止してIP回線に移行する際に、代替手段の十分な整備状況を偽って申請したとされる。緊急通話やインフラ依存度の高い農村部への影響が問題の中心だ。

- **[Windows and Linux users: The deadline to update Secure Boot keys is near](https://arstechnica.com/security/2026/06/windows-and-linux-users-the-deadline-to-update-secure-boot-keys-is-near/)** - PCの起動プロセスを保護するSecure Bootの証明書が期限切れを迎えるにあたり、Windows・Linuxユーザーへの対応手順を解説した記事。期限後に更新が完了していない場合、ブート不能になるリスクがあるため実際の操作方法の確認が推奨される。

- **[Tesco moving 40,000 server workloads off VMware amid Broadcom's 「abusive conduct」](https://arstechnica.com/information-technology/2026/06/tesco-moving-40000-server-workloads-off-vmware-amid-broadcoms-abusive-conduct/)** - 英国大手スーパーTescoがBroadcomによる175%の価格引き上げを「乱用的行為」と批判し、4万ワークロードのVMware離脱を決断。Broadcom買収後のVMware値上げへの反発が大企業規模で具体的な行動に移った象徴的な事例だ。

## 注目トピック

今回最も目立つテーマは**エージェント基盤の本格整備**だ。AWSではManaged Knowledge Base GA・AgentCore最適化機能・Amazon Quick自律エージェント・AWS Continuum自律セキュリティ・AWS Security Agentの脅威モデリングと、エージェント関連の発表が一日に集中した。Cloudflareへのエージェントワークロード集約を推奨する日本語記事も登場し、エッジとクラウドそれぞれでエージェントインフラ競争が激化している。State-Aware RAGやMCPコントラクトテストのような「エージェントの品質保証」への実装知見も蓄積が進んでいる。

**インフラと組織の大きな変化**という軸でも注目ニュースが重なった。Epic GamesのLore（次世代VCS）・Waymo大規模リコール・中国海底データセンター稼働・TescoのVMware大規模脱出と、技術選定・インフラ戦略の転換点となる事案が続いている。Apple Foundation Models FrameworkのWWDC拡充とChatGPT内広告展開は、AIサービスの収益化と開発者ツール化が同時に進行していることを示しており、開発者として両側面を注視する必要がある。
