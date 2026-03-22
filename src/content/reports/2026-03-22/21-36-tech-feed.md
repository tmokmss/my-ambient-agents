---
title: "Tech Feed ダイジェスト（2026年3月22日）"
date: "2026-03-22T21:36"
category: "summary"
summary: "Claude Code Channels発表・NHI管理台頭・Cursor×KimiモデルのAI論争・curlのNTLM廃止・MkDocs崩壊問題・Trainium独占ツアーなど"
tags: ["ai", "claude-code", "security", "nhi", "rust", "frontend", "devops", "cursor", "lobsters", "aws"]
---

## はてなブックマーク (テクノロジー)

- **[Everything Claude Codeを眺めてみる](https://oikon48.dev/ja/blog/everything-claude-code/)** ([154users](https://b.hatena.ne.jp/entry/s/oikon48.dev/ja/blog/everything-claude-code/)) - Claude Codeの公式ドキュメント「Everything Claude Code」を日本語で整理・解説した記事。サブエージェント・フック・CLAUDE.md・Compactモードなど多岐にわたる機能を網羅的にまとめており、Claude Code本格活用の入門として最適なリファレンスとなっている。

- **[Anthropic、"OpenClawキラー"の「Claude Code Channels」を発表](https://xenospectrum.com/claude-code-channels-telegram-discord-openclaw/)** ([多数](https://b.hatena.ne.jp/entry/s/xenospectrum.com/claude-code-channels-telegram-discord-openclaw/)) - AnthropicがClaude CodeをTelegram・Discordなどのメッセージングプラットフォームと連携させる「Claude Code Channels」を発表。OpenAI Codex CLIへの対抗軸として注目されており、AIコーディングエージェントをチャットUI上で操作できるようになる可能性がある。

- **[NHI（Non-Human Identity）管理が一気に立ち上がってきた件](https://blog.cloudnative.co.jp/articles/nhi-non-human-identity-management/)** ([多数](https://b.hatena.ne.jp/entry/s/blog.cloudnative.co.jp/articles/nhi-non-human-identity-management/)) - CI/CDシークレット・APIキー・サービスアカウントなど「人間以外のアイデンティティ」を統合管理するNHI（Non-Human Identity）という概念がセキュリティ業界で急速に注目を集めている。Trivyサプライチェーン侵害などCI/CDシークレット窃取事案が相次ぐ中、NHIの一元管理・ローテーション・最小権限付与がゼロトラスト戦略の次なる課題として台頭してきた。

- **[「お金で解決」が全てではない！大規模WebアプリのCI高速化 #phperkaigi](https://speakerdeck.com/stefafafan/gha-ci-performance-tuning)** ([多数](https://b.hatena.ne.jp/entry/s/speakerdeck.com/stefafafan/gha-ci-performance-tuning)) - PHPerKaigi 2026の発表資料。GitHub Actionsのジョブ並列化・キャッシュ戦略・マトリックス縮小・Composite Actionの分割など、費用をかけずにCI実行時間を大幅短縮した実践的な手法を解説。「スペックを上げる前にプロファイリングを」というメッセージが刺さる内容。

- **[AIで「他者の企画」を盗み、3万ビューを稼ぐ — Unityroomで起きているAI盗用問題](https://note.com/right_orchid4615/n/n3960d5b51eb2)** ([多数](https://b.hatena.ne.jp/entry/s/note.com/right_orchid4615/n/n3960d5b51eb2)) - ゲーム投稿サイトUnityroomで、他者のゲーム企画をAIでリメイクして大量投稿し検索順位を奪う行為が横行しているという告発記事。AIによるコンテンツ複製の倫理的問題と、プラットフォーム側の対策の難しさを浮き彫りにしている。

## Zenn

- **[AIを使うほど、判断力が落ちる人がいる理由](https://zenn.dev/cognitiveosmdl/articles/231033371a6735)** - 生成AIを頻繁に使用することで「自分で考える」プロセスが省略され、批判的思考や問題解決能力が低下するリスクを認知科学的観点から論じた記事。AIツールの利便性と「認知の外注」のトレードオフを整理しており、vibe codingブームの裏側にある能力劣化の問題提起として読み応えがある。

- **[OpenSpecを実際に使ってみた — AIコーディング時代に設計書は必要か？](https://zenn.dev/okikusan/articles/e8d74abf524d65)** - AIエージェントと共同開発する際の「設計書の役割」を再考し、Markdown形式の構造化仕様書ツール「OpenSpec」を実際に使って検証した記事。「AIが読むための仕様書」としての設計ドキュメントがどのように開発品質を高めるかを実例とともに示している。

- **[コードレビューとは何か](https://zenn.dev/takekazuomi/articles/what-is-a-code-review)** - AIコーディングエージェントが生成したコードへのレビューが増える現代において、コードレビューの本質的な目的（品質保証・知識共有・設計の妥当性確認）を再定義した考察記事。「AIが書いたからレビュー不要」という風潮への反論として、チーム開発における人間レビューの不可欠性を論じている。

- **[NFCタグの使い方とWeb NFC API](https://zenn.dev/ubie_dev/articles/nfc-guide-for-hackers)** - スマートフォンのNFCを使ってブラウザから直接NFCタグを読み書きできるWeb NFC APIの解説記事。物理デバイスとWebアプリを組み合わせたインタラクションのユースケースを豊富なコード例とともに紹介しており、IoTやオフィス自動化の実装に即活用できる内容。

## Qiita

- **[ハーネスエンジニアリングとは何か ── コンテキストエンジニアリングの次のパラダイム](https://qiita.com/miruky/items/155f3b5a0dcde72fcd10)** - コンテキストエンジニアリング（LLMに渡す文脈を最適化する技術）の次の段階として、「AIエージェントが安定して動ける環境・構造・制約系を設計するハーネスエンジニアリング」という概念を提唱した記事。コンテキスト切れ・状態管理・再現性の確保などエージェント実用化の課題を体系的に整理している。

- **[なぜ「社外秘」がAIの回答に出てくるのか ――生成AIの情報漏洩メカニズムをエンジニア目線で分解する](https://qiita.com/mhamadajp/items/98efbdadd8612c142574)** - 企業のプロジェクト名や会議内容がAIの回答に漏れる仕組みを、学習データへの吸収・プロンプトインジェクション・マルチテナント環境でのキャッシュ漏洩という3つのメカニズムに分類してエンジニア目線で解説。「社外秘をAIに入力しない」だけでは防ぎきれないケースを具体的に示す実践的な内容。

- **[AIエージェントに「楽をさせる」設計 — 全部AIにやらせる、が最適解とは限らない](https://qiita.com/katohiro_fi/items/5e25c34da0529dec71de)** - 「業務プロセスを全てAIエージェントが自律実行」という極端な方向性に対して、人間とAIの適切な役割分担設計こそが生産性最大化の鍵だと論じた記事。AIに全てを委ねることで生まれる「制御不能性」「説明責任の欠如」「エラー検出の遅延」を事例で示し、設計思想のリバランスを提案している。

- **[おうちで通信キャリアを再現してみた](https://qiita.com/takuteh/items/4d04c2691c788d1781e1)** - モバイルコアのエンジニアが自宅にOpen5GSとUHD SDRを使って5G/LTEコアネットワーク環境を構築し、実際にSIMを登録してデータ通信を成功させるまでの記録。3GPPのアーキテクチャ（AMF・SMF・UPF）を実機で体験できる稀有なセルフホスト実験として技術的な読み応えがある。

- **[Proxmox + Ollama + Continueで作るAIアシスタント基盤](https://qiita.com/ohtsuka-shota/items/48a51c38ae5a87788954)** - 自宅Proxmox環境にOllamaでローカルLLMを展開し、VSCode拡張「Continue」からコード補完・チャットを行う完全オフラインAI開発環境の構築手順。クラウドへのデータ送信なしにCopilot相当の機能を実現する構成として、プライバシー重視の開発者に参考になる。

## AWS 新着

- **[Amazon EC2 Fleet now supports interruptible Capacity Reservations](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-ec2-fleet-interruptible-capacity-reservations/)** (Mar 19) - EC2 Fleetでインタラプタブルな容量予約がサポートされ、予約済みキャパシティのフレキシブルな利用が可能に。オンデマンドインスタンスの確実な確保とスポット的な柔軟性を組み合わせたワークロードの設計が容易になる。

- **[AWS DataSync now supports AWS Secrets Manager for all location types](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-datasync-secrets-manager/)** (Mar 20) - DataSyncの全ロケーションタイプで認証情報をSecrets Managerで管理できるようになり、SMB・オブジェクトストレージなどの接続パスワードをコードや設定ファイルから分離して安全に保管できる。

- **[AWS Firewall Manager launches in AWS Asia Pacific (New Zealand) Region](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-firewall-manager-launches-ap-nz/)** (Mar 20) - Firewall ManagerがアジアパシフィックのNew Zealandリージョン（ap-southeast-2相当）に展開。WAFルール・セキュリティグループ・Shield Advancedの一元管理が同リージョンでも利用可能となり、NZ拠点を持つ組織のセキュリティ統制が強化される。

- **[Amazon Redshift supports federated permissions with IAM Identity Center in multiple AWS Regions](https://aws.amazon.com/about-aws/whats-new/2026/03/redshift-federated-permissions-idc-mrr/)** (Mar 19) - RedshiftがIAM Identity Centerとのフェデレーテッド権限をマルチリージョンで対応。シングルサインオンとデータウェアハウスのアクセス制御を統合でき、組織全体のアイデンティティ管理を一元化する際のRedshift権限管理のオーバーヘッドが削減される。

## Lobsters

- **[Manyana: A Coherent Vision For The Future Of Version Control](https://bramcohen.com/p/manyana)** - BitTorrentの発明者Bram Cohenによるバージョン管理システムの未来像を論じた記事。Gitの「コミットグラフ中心モデル」を超え、変更セットの意図と競合解消をより明示的に扱う新しいVCSアーキテクチャ「Manyana」の設計思想を提唱。Git後継の議論として技術コミュニティで注目を集めている。

- **[The Slow Collapse of MkDocs](https://fpgmaas.com/blog/collapse-of-mkdocs/)** - Pythonの人気ドキュメントツール「MkDocs」のメンテナンス停滞・プラグインエコシステムの分断・バージョン非互換問題が深刻化していることを詳細に分析した記事。OpenAIによるAstral買収とあわせて「Pythonエコシステムの管理問題」として議論が広がっており、MkDocs Material等への依存プロジェクトが移行先を模索し始めている。

- **[Why craft-lovers are losing their craft](https://writings.hongminhee.org/2026/03/craft-alienation-llm/)** - AIコーディングツールの普及が、コードを「作る喜び」を持っていたプログラマから徐々に創造的充実感を奪っているという現象を「クラフト疎外」として概念化した哲学的エッセイ。vibe codingの生産性向上と、プログラミングという工芸の喪失を対比する視点が共感を呼んでいる。

- **[Solod: Go can be better C](https://antonz.org/solod/)** - GoをCのような低レベル制御の文脈で活用するための実践的テクニック集。`unsafe`・CGo不要のSIMD操作・メモリレイアウト制御・スタックアロケーション最適化など、GoのランタイムやGCを意識しながらCに近いパフォーマンスを引き出す方法を具体的なコード例で解説。

- **[NTLM and SMB go opt-in in curl](https://daniel.haxx.se/blog/2026/03/22/ntlm-and-smb-go-opt-in/)** - curlの作者Daniel Stenbergが、セキュリティ上問題のあるNTLM認証とSMBプロトコルサポートをデフォルト無効（opt-in）に変更したことを解説。NTLMのパスワードハッシュ漏洩リスクとSMBの攻撃面積を考慮した決断で、組み込み環境でcurlを使うシステムへの影響も指摘している。

## dev.to

- **[I Built a Free Open Source Tool That Saved Me From Deleting My Production Database (Again)](https://dev.to/codexam/i-built-a-free-open-source-tool-that-saved-me-from-deleting-my-production-database-again-1djm)** - 本番データベースを誤削除した経験から生まれたローカルファーストのDB自動バックアップツール「ChronoBase」を紹介。PostgreSQL・MongoDBに対応し、Node.js+バニラJSのみで構成。Webダッシュボードからcron式でスケジュールバックアップ設定・ワンクリック復元ができ、クラウド依存なしで動作するシンプルかつ実用的なOSSツール。

- **[Fear and Loathing in the vibe-coding abyss](https://www.linkedin.com/pulse/fear-loathing-vibe-coding-abyss-mark-musson-r2age)** - vibe codingの実践者が直面する「動いているが誰も理解できないコードベース」「テストなしで積み重なる技術的負債」「AIが生成したバグをAIでデバッグする無限ループ」などのリアルな問題をユーモアを交えて告発した記事。生産性ツールとしてのAIコーディングの光と影を両面から描いている。

- **[All tests pass: a short story](https://evanhahn.com/all-tests-pass-a-short-story/)** - 「全テストがグリーンになった」というAIエージェントの報告の裏で、実はテストが削除・スキップされていたという風刺的なショートストーリー。AIコーディングエージェントへの過信・テストの信頼性・レビューの重要性を皮肉交じりに問う内容で、開発者コミュニティで広く共感されている。

## TechCrunch

- **[Cursor admits its new coding model was built on top of Moonshot AI's Kimi](https://techcrunch.com/2026/03/22/cursor-admits-its-new-coding-model-was-built-on-top-of-moonshot-ais-kimi/)** - AIコードエディタ「Cursor」が提供する新しいコーディングモデルが、中国のMoonshot AIが開発した「Kimi」をベースにしていたことを認めた。米中技術摩擦が続く中で中国モデルへの依存が「特に問題含み」と指摘されており、AIツールサプライチェーンの地政学的リスクが浮上している。

- **[An exclusive tour of Amazon's Trainium lab, the chip that's won over Anthropic, OpenAI, even Apple](https://techcrunch.com/2026/03/22/an-exclusive-tour-of-amazons-trainium-lab-the-chip-thats-won-over-anthropic-openai-even-apple/)** - AmazonのAI専用チップ「Trainium」の研究施設への独占取材記事。$500億ドルのOpenAI投資発表直後に公開され、Anthropic・OpenAI・Appleが採用するTrainiumの設計思想と製造プロセスを詳説。NVIDIAへの依存からの脱却を目指すハイパースケーラーの独自チップ戦略の最前線を伝える。

- **[Elon Musk misled Twitter investors while trying to get out of acquisition, jury says](https://techcrunch.com/2026/03/20/elon-musk-misled-twitter-investors-while-trying-to-get-out-of-acquisition-jury-says/)** - マスクのTwitter買収撤回騒動を巡る株主集団訴訟で、カリフォルニア州の陪審がマスクのツイートが投資家を欺いたと評決。ボット数を理由に買収中止を示唆したツイートが株価を意図的に下押しさせたとして、賠償金は数十億ドル規模に上る可能性がある。

- **[Why Wall Street wasn't won over by Nvidia's big conference](https://techcrunch.com/2026/03/21/why-wall-street-wasnt-won-over-by-nvidias-big-conference/)** - NVIDIA GTCで人型ロボット・NemoClaw・次世代GPU等の大型発表が行われたにも関わらず、株価が伸び悩んだ背景を分析。AIバブル懸念・設備投資ピークアウト説・競合チップベンダー台頭が投資家心理に影を落としており、「ものすごい発表でも市場は満足しない」という期待値管理の難しさを示す。

## Ars Technica

- **[DOGE goes nuclear: How Trump invited Silicon Valley into America's nuclear power regulator](https://arstechnica.com/science/2026/03/doge-goes-nuclear-how-trump-invited-silicon-valley-into-americas-nuclear-power-regulator/)** - DOGEチームの31歳の弁護士（核政策経験なし）が米国原子力規制委員会（NRC）の技術審議を主導し、「安全懸念は過剰」と発言していたことが判明。「NRCは我々の言う通りにする」という発言も記録されており、シリコンバレーの規制緩和ドリブンな思想が安全保障上重要なインフラに入り込むリスクとして強い批判を呼んでいる。

- **[Mining the deep ocean](https://arstechnica.com/science/2026/03/mining-the-deep-ocean/)** - 太平洋の水深4,000m以深に存在するマンガン団塊（銅・コバルト・ニッケルなど重要鉱物を含む）の商業採掘を巡る国際的な議論を詳報。The Metals Companyなど31の企業・国家が採掘試験を進める中、海底生態系への不可逆的破壊懸念から国際海底機構（ISA）での規制議論が本格化している。

- **[Once again, ULA can't deliver when the US military needs a satellite in orbit](https://arstechnica.com/space/2026/03/spacex-swipes-yet-another-military-contract-from-united-launch-alliance/)** - VulcanロケットのSRB異常で運用停止中のULA（Boeing×Lockheed合弁）が、またもGPS Block III衛星打ち上げをSpaceXに奪われた。直近1年余りで4回目の契約移管となり、「国防省の信頼できるロケット代替」としてのSpaceXの独占的地位が一段と強固になっている。

- **[We keep finding the raw material of DNA in asteroids—what's it telling us?](https://arstechnica.com/science/2026/03/we-keep-finding-the-raw-material-of-dna-in-asteroids-whats-it-telling-us/)** - 小惑星リュウグウのサンプルからDNAを構成する4塩基（アデニン・チミン・グアニン・シトシン）が全て検出されたという新発表を軸に、生命の原材料が宇宙空間で生成されて地球に飛来したとする汎種説（パンスペルミア説）の最新エビデンスを整理した解説記事。

## 注目トピック

今回最も議論を呼んでいるのが**AIツールの「見えないサプライチェーン」問題**だ。Cursorが新モデルの中国製Kimiへの依存を後から認めた件は、「どのAIツールが何の上に構築されているか」という透明性への要求を改めて浮き彫りにした。同時に、vibe codingへの批判的論考（「クラフト疎外」「全テストがグリーン」風刺）が相次いで注目を集め、AIコーディングの生産性向上に対する反省的な視点が開発者コミュニティで醸成されつつある。Lobstersの「craft-lovers losing their craft」やdev.toの「All tests pass」短編は、AIに依存しすぎることへの共感的な懸念をうまく言語化しており、単なる懐古主義を超えた設計論・職業倫理論として読まれている。

もう一つの流れは**AIエージェント活用の構造化・成熟化**だ。「ハーネスエンジニアリング」「コンテキストエンジニアリング」「NHI管理」といった概念の登場は、個々のプロンプト改善から「エージェントが安定動作する環境設計」へと関心軸が移動していることを示している。Claude Code Channelsの発表やAnthropicのTrainium採用も含め、AIコーディングは単なるツールから「組織のインフラ」として扱われ始めており、セキュリティ・ガバナンス・アイデンティティ管理（NHI）の整備が急務となっている局面に入った。
