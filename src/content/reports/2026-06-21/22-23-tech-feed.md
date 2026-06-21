---
title: "Tech Feed ダイジェスト（2026年6月22日）"
date: "2026-06-21T22:23"
category: "summary"
summary: "Nobel賞学者がAnthropicへ・Trump政権Anthropic規制・Steering Claude Code公式ガイド・iOS 27 AI・AWS Bedrock Managed RAG GA"
tags: ["ai", "anthropic", "aws", "security", "ios", "emacs", "llm", "devtools", "infosec", "rust"]
---

## はてなブックマーク (テクノロジー)

- **[Steering Claude Code: skills, hooks, subagents and more](https://claude.com/ja/blog/steering-claude-code-skills-hooks-rules-subagents-and-more)** ([248users](https://b.hatena.ne.jp/entry/s/claude.com/ja/blog/steering-claude-code-skills-hooks-rules-subagents-and-more)) - Anthropic公式によるClaude Codeの「スキル・フック・ルール・サブエージェント」活用ガイド。コーディングエージェントの動作をカスタマイズする公式の設計思想が日本語で整理されており、実践者のキャッチアップ記事が急増しているClaude Codeエコシステムの一次情報として注目度が高い。

- **[AI駆動開発を通して感じた、AI時代のデザイナーの役割変化](https://speakerdeck.com/whisaiyo/whidevelopers-linklight20260618)** ([114users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/whisaiyo/whidevelopers-linklight20260618)) - AIを使って実装も担うようになったデザイナーが、「デザイン×実装」の境界が消えつつある体験から論じたスライド。「AIがコードを書ける今、デザイナーが要件定義・UX判断・プロトタイピングまで一気通貫で担う」という役割拡張の実感が率直に語られており、職種横断の共感を呼んでいる。

- **[ゼロをイチにする仕事の終わり、ソフトウェアエンジニアという仕事の終わり](https://blog.smasato.net/entry/2026/06/21/181605)** ([81users](https://b.hatena.ne.jp/entry/s/blog.smasato.net/entry/2026/06/21/181605)) - 「AIがゼロイチ開発を肩代わりする時代に、ソフトウェアエンジニアは何を担うのか」を真正面から問う論考。プログラムを書くスキルではなくシステムの文脈を読み取り判断する能力こそが残るという主張と、それが今後の採用・育成にどう影響するかが鋭く整理されている。

- **[「若手はLinuxを学べ」「CLIで問題特定はもう古くなる」　AI時代に再定義されるエンジニアの基礎](https://atmarkit.itmedia.co.jp/ait/articles/2606/20/news007.html)** ([68users](https://b.hatena.ne.jp/entry/s/atmarkit.itmedia.co.jp/ait/articles/2606/20/news007.html)) - AIがCLI操作を代行できる時代に「Linuxコマンドを覚えること」の意義を問い直したインタビュー記事。「ツールの使い方より、OS・ネットワーク・プロセスの動作原理を理解していること」が依然として重要で、AIへの指示の質を上げるために基礎知識がむしろ必要だという現場エンジニアの声が整理されている。

- **[ワークフローを再利用可能なスキルに変換する Record & Replay を試してみた](https://azukiazusa.dev/blog/workflow-to-reusable-skill/)** ([56users](https://b.hatena.ne.jp/entry/s/azukiazusa.dev/blog/workflow-to-reusable-skill/)) - エージェントの操作手順を「録画」して再利用可能なSkillに変換するRecord & Replay機能の検証記事。繰り返し実行する自動化タスクをSpellbookのようにスキルとして蓄積・共有できる仕組みで、エージェントを「育てる」新しい開発パターンとして注目される。

## Zenn

- **[AWS Blocksとは何者か。Amplify・App Studioとの違いと、それぞれが目指すもの](https://zenn.dev/genda_jp/articles/8122f1cd49754c)** - 2026年6月にパブリックプレビューが発表された「AWS Blocks」の解説記事。TypeScriptでバックエンドロジックを書くだけでそのコードがAWS上のインフラになるというオープンソースフレームワークで、Amplify（フロントエンドファースト）やApp Studio（ローコード）とは異なるコードファーストなDeveloper Experienceを狙う位置づけが詳しく整理されている。

- **[GitHub Copilotのクレジット消費がユーザー単位でAPI取得可能に：監視を自動化する ai_credits_used の使い方](https://zenn.dev/headwaters/articles/github-copilot-ai-credits-usage-metrics-2026)** - GitHub Copilotの従量課金制における各ユーザーのクレジット消費量を `ai_credits_used` APIエンドポイントで取得・可視化する実装ガイド。全社でCopilotを展開している場合にコスト超過を早期発見したい管理者にとって、自動監視フローを組む際の実用的なリファレンスとなる。

- **[Rust | rmcp で Remote MCP Server を実装する](https://zenn.dev/codemountains/articles/1d2ebe105ef998)** - Rustの公式MCP SDK「rmcp」でStreamable HTTP転送プロトコルに対応したリモートMCPサーバーを実装する手順を詳述した記事。Claude DesktopやAI IDEからリモート接続できるMCPサーバーをRustで書きたい開発者向けに、認証・エラーハンドリング・デプロイまでをカバーしており、MCP実装の裾野が広がりつつあることを示す内容だ。

- **[Flue Framework 実践入門 — AIエージェントを本番で動かす](https://zenn.dev/417/books/flue-framework-guide)** - 国産AIエージェントフレームワーク「Flue Framework」のさくらのAI Engine上での動作確認からLinear webhook連携・Cloudflareデプロイまでを網羅した実践ガイド。Claude CodeやTAKTとは異なる設計思想（宣言的なエージェント定義）を採用しており、本番運用を念頭に置いたエージェントフレームワーク選定の比較材料になる。

- **[Obsidian(Markdown)よりも快適に書く: vscode-scb で Cosense 記法](https://zenn.dev/sta/articles/2026-06-20-vscode-scb)** - VS Code拡張「vscode-scb」を使い、Scrapbox（Cosense）特有のリンク記法・コードブロック・タグをVS Code上で快適に書けるようにする環境構築記事。「ObsidianのVaultよりCosenseのページグラフの方が思考と合う」という視点から、ローカルMarkdownとWebベースのWiki型ノートを組み合わせるワークフローが提案されている。

## Qiita

- **[『証券会社のパスキーへの移行』〜7,393億円の不正売買が業界標準を塗り替えた〜](https://qiita.com/suzukengo/items/85585050238a189ada6e?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - 2024年〜2025年に日本で多発した証券口座の不正ログイン・不正売買（累計被害額7,393億円超）がきっかけとなり、主要証券会社がパスキー移行を急加速させた経緯と技術的な実装詳細を整理した記事。FIDO2/WebAuthnへの切り替えが業界全体の標準になった背景として、被害の深刻さと行政からの要請が強く影響していることが浮き彫りになる。

- **[商業書籍の出版をCodexで爆速化するノウハウ](https://qiita.com/minorun365/items/9059f26629e0976bc0e2?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - 技術書の執筆・編集フローにOpenAI Codexを組み込み、章の構成生成・サンプルコードの自動更新・用語チェックを高速化した実践記。「書くこと」より「判断・検証すること」に人間の時間を集中させることで従来比2〜3倍のペースで原稿を仕上げたという体験談で、テクニカルライティングとAIの現実的な協業モデルを示している。

- **[Claude Codeで設計書作成に使えるサブエージェントの作り方｜要件定義から詳細設計まで](https://qiita.com/kamome_susume/items/467446c5a6cbd10a5ffa?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - 要件定義→機能仕様→画面設計→API設計→詳細設計という設計フェーズを担当するサブエージェント群をClaude Codeのプロジェクト配下に構築する実装ガイド。「コードを書かせるエージェント」から「ドキュメントを作るエージェント」への応用として、設計書が自動生成されることでレビュー前の品質が底上げされる効果が示されている。

- **[Claude Codeに自分でスキルを書かせて育てる ― 自己増殖するエージェント環境](https://qiita.com/bokuwalily/items/e7b56e2119841636b38e?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - 「繰り返し行う作業をClaude Codeに指示したら、次回からSkillとして使えるように自分でSkillファイルを書いてもらう」という自己増殖パターンの実践記。人間がスキルをデザインするのではなく、使いながらエージェントにスキルを生やさせていく開発スタイルが、メタプログラミング的な発想で面白い。

- **[PrivateLinkとResource Gatewayで既存IPv4環境を変更せずにIPv6環境へ接続する](https://qiita.com/infra365/items/94c359afab6508e2c657?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - AWS PrivateLinkとResource GatewayをブリッジとしてIPv4の既存VPCを改修せずにIPv6対応した新VPCと接続する構成を解説した記事。デュアルスタック移行の過渡期にIPv4レガシー環境とIPv6新環境を共存させる実用的な構成パターンとして、大規模インフラのIPv6移行を検討している担当者に参考になる内容だ。

## AWS 新着

- **[Amazon Bedrock Managed Knowledge Base が一般提供開始](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-managed-knowledge-base/)** (2026-06-17) - フルマネージドRAGサービスがGAとなった。S3・Confluence・SharePoint等のデータソースから自動でベクトルインデックスを作成・維持し、Bedrock上のモデルと組み合わせて検索拡張生成が利用できる。インデックス管理・更新スケジュール・チャンク戦略まで全てマネージドで提供されるため、独自RAGパイプラインの構築コストが大幅に下がる。

- **[Amazon S3 Vectors がクエリあたり最大10,000件の類似検索結果をサポート](https://aws.amazon.com/about-aws/whats-new/2026/06/s3-vectors-supports-10000-search-results-per-query)** (2026-06-16) - S3ネイティブのベクトルストレージサービスが1クエリあたりの返却件数を従来の100件から10,000件へ100倍に拡張した。大規模候補集合からの再ランキング（Two-stage retrieval）が現実的なコストで実現できるようになり、RAGシステムの精度改善に向けた選択肢が広がる。

- **[AWS Security Agent が Kiro・Claude Code・シミュレーション検証に対応](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-kiro-power-claude-code/)** (2026-06-17) - AWS Continuum（旧AWS Security Agent）がKiro PowerとClaude Codeをサポートし、開発者がKiroやClaude Code上でコードを書きながらリアルタイムにセキュリティチェックを受けられるようになった。「セキュリティ担当部門のゲートウェイを通す」モデルから「開発者が書いた瞬間に脆弱性が検出される」シフトレフトが一歩進んだ格好だ。

- **[Amazon Bedrock Guardrails がエージェントAIワークフロー向け新APIを提供](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-guardrails-api-ai/)** (2026-06-16) - ガードレール評価を単発のテキストチェックだけでなく、エージェントの複数ステップにわたる会話・ツール呼び出し・出力を一連のワークフローとして検証できる新APIが追加された。「エージェントが中間ステップで不適切な情報を取得して最終出力に混入させる」ような多段攻撃への対策として、エージェントAIのセーフガード設計が成熟してきていることを示す。

- **[Amazon EKS がカスタマールーティング制御プレーン外部通信をサポート](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-eks-customer-routed-control-plane-egress)** (2026-06-17) - EKSコントロールプレーンからの外部通信をデフォルトのAWSゲートウェイ経由でなく顧客のVPCルーティングを経由させられるようになった。通信経路を自社ネットワーク内に閉じたい金融・医療・公共セクターのセキュリティ要件に対応するネットワーク分離設計が可能になる。

## Lobsters

- **[Is anyone still using Emacs?](https://jmmv.dev/2026/06/is-anyone-still-using-emacs.html)** (71pt) - 「AI IDEが全盛の今、Emacsを使い続けている人はいるのか?」という問いに対し、57コメントが寄せられた論争的ディスカッション。「LSP・treesit・Copilot統合でEmacs 30は十分モダン」派と「Cursor・Kiroのエージェント統合にはかなわない」派に分かれ、エディタ選択とワークフロー設計の哲学的な議論が展開されている。

- **[Is AI ruining our skills? Early results are in and they're not good](https://www.nature.com/articles/d41586-026-01947-1)** (62pt) - Nature誌がAI利用が認知・批判的思考スキルに与える影響の初期研究結果を報告。AIに依存した問題解決を続けると独力での思考力が低下するという傾向が複数の研究で観察されており、教育現場でのAI禁止や利用ガイドラインの設計論に実証的な根拠を与える内容として開発者コミュニティでも議論を呼んでいる。

- **[Apple Internals: Swift in the Kernel](https://blog.calif.io/p/apple-internals-swift-in-the-kernel)** (44pt) - Appleが一部のカーネル・ドライバコンポーネントにSwiftを採用しているという内部設計の解説記事。メモリ安全なシステムプログラミング言語としてRustが注目される中、AppleがSwiftをカーネル層に持ち込む判断の技術的理由（ARC・型システム・Objective-C相互運用）が詳述されており、OSレイヤーの言語選択の潮流を考える上で興味深い一次情報だ。

- **[postmarketOS v26.06 (Alpen Avocado) released](https://postmarketos.org/blog/2026/06/21/v26.06-release/)** (25pt) - スマートフォン向けLinuxディストリビューションpostmarketOSの最新リリース。AndroidやiOSのEOLデバイスをサポートし続けるエコシステムとして着実に成長しており、今回はDebian Bookworm相当のパッケージ更新とモバイルUIフレームワークの安定化が主な内容。旧スマートフォンを再活用したい開発者や修理可能なデジタルエコシステムに関心がある層に刺さる内容だ。

- **[Performance improvements in libffi](https://atgreen.github.io/repl-yell/posts/libffi-plan-cache/)** (20pt) - CとCの間の関数呼び出し橋渡しライブラリ「libffi」のプラン（呼び出し規約情報）をキャッシュすることでPython/Ruby/LuaといったスクリプトエンジンからネイティブC関数を呼ぶオーバーヘッドを削減した改善の解説。FFI呼び出しが頻繁に発生する動的言語ランタイムのボトルネック分析として、低レイヤー最適化の具体例を示している。

## dev.to

- **[Three post-deploy checks I run after every Cloudflare Pages build](https://dev.to/morinaga/three-post-deploy-checks-i-run-after-every-cloudflare-pages-build-408k)** - Cloudflare Pagesへのデプロイ後に必ず行う3つの確認（ヘッダー設定・リダイレクトルール・キャッシュ動作）を自動化するスクリプトとその判断根拠を紹介した記事。本番でしか再現しない設定漏れを事前にCIに組み込む実践的な知見で、静的サイトのデプロイパイプラインに組み込む即効性のある内容だ。

- **[What is a CVE and Why Does It Matter?](https://dev.to/nara_naghi/what-is-a-cve-and-why-does-it-matter-3602)** - CVE（共通脆弱性識別子）の仕組み、NVDスコアリング（CVSS）との関係、実際の脆弱性管理ワークフローへの組み込み方を解説した入門記事。依存パッケージの脆弱性対応を始めたばかりのチームが「なぜこのCVEが重要か」を判断する際のリファレンスとして使いやすい。

- **[I built a tool that turns your code into clean documentation in seconds](https://dev.to/aetherlogic_/i-built-a-tool-that-turns-your-code-into-clean-documentation-in-seconds-32o7)** - コードベースを解析してMarkdown形式のAPIドキュメント・READMEを自動生成するSaaSツールの開発記。LLMによるコード理解と既存ドキュメント生成ツール（Sphinx・JSDoc等）との差別化点として「コンテキスト依存のコメント補完」を強調しており、ドキュメント負債を抱えるプロジェクトの整備に実用的な選択肢となるか注目される。

- **[Meet AppPipe: The Lightweight, On-Premises Alternative to .NET Aspire](https://dev.to/sitholewb/meet-apppipe-the-lightweight-on-premises-alternative-to-net-aspire-33lo)** - Microsoftの.NET Aspireと同様の「開発時のマルチサービスオーケストレーション」機能をクラウド依存なしにオンプレ環境で実現するOSSフレームワーク「AppPipe」の紹介。Docker Composeより高機能でクラウドベンダーロックインを避けたいチームに向けた代替選択肢として、サービス間依存関係の定義とヘルスチェック統合が特徴だ。

## TechCrunch

- **[Nobel laureate John Jumper is leaving DeepMind for rival Anthropic](https://techcrunch.com/2026/06/20/nobel-laureate-john-jumper-is-leaving-deepmind-for-rival-anthropic/)** - タンパク質折りたたみ予測AI「AlphaFold」の主要開発者でノーベル化学賞を受賞したJohn Jumper氏がDeepMindを離れAnthropicへ移籍することが報じられた。Trump政権によるAnthropicへの規制圧力がかかる中でのトップ研究者獲得は業界への注目度を高めており、AIの科学応用（バイオ・創薬）分野でのAnthropicの戦略的な意図を示す動きとして注目される。

- **[When the Trump administration cracks down on Anthropic, who benefits?](https://techcrunch.com/2026/06/21/when-the-trump-administration-cracks-down-on-anthropic-who-benefits/)** - 米政府がAnthropicの最新モデル「Fable 5」と「Mythos 5」の一般提供を停止させた経緯と、その受益者（競合他社・中国AIベンダー）を分析したポッドキャスト付き記事。規制が意図せずブランド価値を高める「禁止効果」の可能性も論じており、AI規制政策とグローバル競争の複雑な関係が浮き彫りになる。

- **[Beyond Siri: Here are the practical AI features coming to your iPhone in iOS 27](https://techcrunch.com/2026/06/21/beyond-siri-here-are-the-practical-ai-features-coming-to-your-iphone-in-ios-27/)** - WWDCで発表されたiOS 27のSiri刷新以外のAI機能を網羅した実用解説記事。写真アプリの自動ハイライト生成・メモアプリのリアルタイム要約・連絡先の自動タグ付けなど、日常使いのアプリに組み込まれるオンデバイスAI機能の詳細が整理されており、アプリ開発者がiOS 27対応を検討する際の参考になる。

- **[The US says ASML's top chip tool may be in China, but how?](https://techcrunch.com/2026/06/19/the-us-says-asmls-top-chip-tool-may-be-in-china-asml-says-it-isnt/)** - 米政府がASMLの最先端EUV露光装置が中国国内に持ち込まれている可能性を指摘した問題をTechCrunchが詳報。ASMLは否定しているが、輸出管理の抜け穴・迂回ルート・技術移転の実態をめぐる米中の情報戦が続いており、半導体製造装置の輸出規制執行の難しさを示す問題として注目される。

## Ars Technica

- **[Microsoft discovers new lightweight backdoor that steals cryptocurrency](https://arstechnica.com/security/2026/06/microsoft-spots-new-self-propagating-malware-for-stealing-cryptocurrency/)** (2026-06-18) - Microsoftのセキュリティチームが「Crypto Clipper」と名付けられた新型マルウェアを発見した。クリップボードのウォレットアドレスを書き換えて暗号資産を横取りするクリッパー型攻撃に、USBドライブを介した自己伝播機能とTor経由のC2通信を組み合わせた多機能型ステルスマルウェアで、エアギャップ環境への感染リスクも示唆されている。

- **[Sooner than expected? Useful quantum error correction promised for 2028](https://arstechnica.com/science/2026/06/amazon-quera-promise-useful-quantum-error-correction-by-2028/)** (2026-06-17) - AmazonとQuEraが2028年までに実用的な量子エラー訂正を実現すると発表した。中性原子量子コンピュータの誤り訂正符号化が当初予想より早期に達成される見通しで、「古典コンピュータを明確に超える計算優位性の実証」が2020年代後半に前倒しになりうるという見解が専門家の間で広がりつつある。

- **[The UK will scan asylum-seekers' faces for age checks — despite knowing the tech is flawed](https://arstechnica.com/tech-policy/2026/06/the-uk-will-scan-asylum-seekers-faces-for-age-checks-despite-knowing-the-tech-is-flawed/)** (2026-06-20) - 英国政府が精度上の問題を認識しながら亡命希望者の年齢確認に顔認識AIを導入することを決定した。テスト段階での誤認率の高さと誤判断が人の人生に与える深刻な影響が指摘されており、「許容可能なエラー率」の定義と生体認証AIの行政利用における倫理的基準の在り方が問われている。

- **[Bernie Sanders unveils $7 trillion plan to give Americans control of AI industry](https://arstechnica.com/tech-policy/2026/06/bernie-sanders-unveils-7-trillion-plan-to-give-americans-control-of-ai-industry/)** (2026-06-18) - バーニー・サンダース上院議員が「AIの富をすべてのアメリカ人が共有する」ための7兆ドル規模の国家AIファンド設立を提案した。主要AIインフラの公共所有・企業利益の再分配・独占規制を組み合わせた大胆な政策提言で、民間主導のAI開発モデルに対する政治的な対抗軸として今後の議論を左右する可能性がある。

## 注目トピック

今回最も目を引くのはAnthropicをめぐる矛盾した動向だ。Trump政権がFable 5とMythos 5の提供停止を強制する一方で、ノーベル賞受賞者のJohn Jumper氏がDeepMindから移籍するという報道が重なった。規制圧力がかかる中で優秀な研究者を引き寄せているという現象は「禁止効果」による逆説的なブランド強化とも読める。Anthropicが公式に「Steering Claude Code」ガイドを日本語で公開したことも相まって、開発者コミュニティでのエコシステム形成が加速している。

もう一つの大きな流れは「AIツールの成熟と人間スキルへの問い」だ。Natureが発表したAIによるスキル低下の研究結果、「ソフトウェアエンジニアという仕事の終わり」をめぐる国内の議論、Emacsを使い続けるエンジニアたちの哲学的な論争が同時期に起きているのは偶然ではない。AWS Bedrock Managed Knowledge BaseのGA・S3 Vectorsの100倍スケールアップなどAIインフラが着実に拡充される中で、「AIをどう使うか」より「人間として何を判断するか」が問われる局面が増えていることを、様々なソースが異口同音に示している。
