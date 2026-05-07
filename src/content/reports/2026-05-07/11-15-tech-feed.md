---
title: "Tech Feed ダイジェスト（2026年5月7日）"
date: "2026-05-07T11:15"
category: "summary"
summary: "認知負債・Chrome Gemini Nano無断DL・cursed_browser・MCPロックファイル・SNAPとPerplexity解消・TSMC風力発電"
tags: ["ai", "security", "frontend", "llm", "mcp", "devtools", "aws", "agents", "css", "energy"]
---

## はてなブックマーク (テクノロジー)

- **[認知負債](https://scrapbox.io/kawasima/%E8%AA%8D%E7%9F%A5%E8%B2%A0%E5%82%B5)** ([294users](https://b.hatena.ne.jp/entry/s/scrapbox.io/kawasima/%E8%AA%8D%E7%9F%A5%E8%B2%A0%E5%82%B5)) - 技術的負債の「認知版」として、チームが暗黙知・複雑な設計背景・意思決定の経緯を把握しきれなくなった状態を「認知負債」と定義した概念記事。AI補助でコード生成が高速化するほど説明なき設計が蓄積しやすくなる現代において、コードベースの「読み解けなさ」という新しいリスクに名前をつけた議論として注目を集めている。

- **[「セーラームーンに似ている」 生成AIを使った化粧品の広告が物議](https://www.itmedia.co.jp/news/articles/2605/07/news075.html)** ([88users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2605/07/news075.html)) - 生成AIで作成したアニメ風女性キャラクターがセーラームーンに酷似しているとして炎上し、メーカーが広告撤去と謝罪を発表した事案。リーガルチェックを経ても消費者感情リスクが残ることを示す事例として、AI生成クリエイティブの著作権・ブランドリスク管理の難しさを改めて浮き彫りにした。

- **[Google Chromeが約4GBのオンデバイスAIモデルを勝手に保存していると指摘される、削除しても再ダウンロードされるケースも](https://gigazine.net/news/20260507-google-chrome-install-gemini-nano-without-consent/)** ([71users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260507-google-chrome-install-gemini-nano-without-consent/)) - Chrome 148がユーザーの明示的同意なしにGemini Nanoモデル（約4GB）をローカルに自動ダウンロードすることが判明し、削除しても次回起動時に再取得されるケースも報告されている。ブラウザのAIモデル配布におけるディスク容量・通信帯域・ユーザー同意の問題が紛糾し、Googleの担当者が釈明に追われる状況になっている。

- **[マネーフォワード、銀行連携の停止続く 不正アクセスから約1週間](https://www.itmedia.co.jp/news/articles/2605/07/news096.html)** ([49users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2605/07/news096.html)) - マネーフォワードのGitHubへの不正アクセスから約1週間が経過しても銀行口座連携機能の停止が続いており、再開は「安全性確認が完了次第」とされている。個人情報流出の可能性が示唆されており、フィンテックサービスのインシデント対応とサービス継続性管理（BCP）の難しさを示す事案として注目される。

- **[小型AIで下書きを生成して大型AIを爆速化する「マルチトークン予測」という技術をGoogleが発表](https://gigazine.net/news/20260507-multi-token-prediction/)** ([26users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260507-multi-token-prediction/)) - Googleが発表したマルチトークン予測（MTP）技術は、軽量なドラフトモデルが先行してトークン候補を複数生成し、大型モデルが並列で検証・採択することで推論速度を大幅に向上させる手法。Speculative Decodingの発展形として、クラウド・エッジ両方でのLLM応答速度改善に応用が期待される。

## Zenn

- **[OpenAPIという間接的な型共有をやめてoRPCを導入した話](https://zenn.dev/dress_code/articles/9040b2e3532693)** - フロントエンドとバックエンド間の型共有をOpenAPI → コード生成という経路で行う煩雑さを解消するため、TypeScript-firstのRPCライブラリ「oRPC」を導入した実践記録。型定義を1か所に置きながらHTTP互換も維持できるoRPCのアプローチが、型の二重管理・スキーマドリフトという古典的な問題を根本から解決する手法として示されている。

- **[AI駆動開発時代に、おさえておきたいQA技法](https://zenn.dev/frontline/articles/3a912df20d9210)** - AIエージェントがコードを生成する環境でのテスト戦略として、境界値分析・同値分割・決定表テストなどの古典的QA技法がAI生成コードの検証でも有効であることを解説した記事。「AIが書いたから正しいはず」という思い込みを排し、テスト設計の原則を再学習することの重要性が現代的な文脈から論じられている。

- **[「Claude Codeに全部やらせる時代が来た」のか検証してみた](https://zenn.dev/okazu_dm/articles/83957f1623ec4d)** - 実際の中規模プロジェクト開発をClaude Codeに丸投げした場合の限界を検証した記事。アーキテクチャ設計・ドメイン固有のコンテキスト理解・既存コードベースへの整合性確保において依然として人間の判断が必要な局面が詳細に記録されており、「全部やらせる」のではなく「何をやらせるか」の設計力が重要という結論に至っている。

- **[Codex appを使ってみた。CLIより「作業の見通し」が良くてけっこう好きだった](https://zenn.dev/dokusy/articles/b528905b1cbb1a)** - OpenAIのCodex GUIアプリをCLI版と比較した使用感レポート。タスクのサブステップが可視化されており「何が起きているか」が把握しやすい点が特徴として挙げられており、Claude Code CLIとの操作感の違い・適材適所の使い分け基準が実体験から整理されている。

## Qiita

- **[【徹底解説】セキュリティスペシャリストが教える、セキュアプログラミングの教科書](https://qiita.com/miruky/items/6fbb0c0e55835ea79e4d?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - SQLインジェクション・XSS・SSRF・パストラバーサル・認証不備などOWASP Top 10を体系的に網羅したセキュアプログラミング解説。脆弱なコード例とセキュアな実装を対比形式で示しており、AIが生成したコードのセキュリティレビューチェックリストとしても実用的な構成になっている。

- **[ハードウェアバディでClaudeとおともだち](https://qiita.com/moritalous/items/cd53aec76db1dec20862?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Raspberry Pi上でClaude APIとマイク・スピーカーを組み合わせ、常駐型の音声会話デバイスを自作した工作記録。Anthropic APIのStreaming応答とTTS/STTライブラリを組み合わせたリアルタイム会話実装の詳細が示されており、エッジデバイス×LLMの実装事例として参考になる。

- **[API課金ゼロで米国ニュース要約デスクトップアプリを作った（Tauri × ローカルLLM）](https://qiita.com/chaochire/items/46df03c9c3bf56670e05?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - RustベースのデスクトップフレームワークTauriとローカルLLM（Ollama）を組み合わせ、APIコスト完全ゼロのニュース要約デスクトップアプリを構築した記録。Tauri + Ollama + RSSフィードを組み合わせたスタックの構成とパフォーマンス特性が整理されており、オフライン対応のパーソナルAIツール自作の参考になる。

- **[Copilot StudioをClaude Code化したら、Copilot Studio自身でPower Platformを構築できた話](https://qiita.com/katohiro_fi/items/9acccd181ca2f1a75f3c?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Microsoft Copilot Studioにコーディングエージェント的な振る舞いを設定し、Copilot Studio自身がPower PlatformのFlow・Dataverse・Canvas Appを構築できることを検証した実験記録。ノーコード/ローコードツールをエージェント化するアプローチとして、Copilotエコシステムの可能性を広げる興味深い事例。

## AWS 新着

- **[AWS Site-to-Site VPN now supports modifying tunnel bandwidth on existing VPN connections](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-site-to-site-vpn-modify-bandwidth/)** (2026-05-06) - 既存のSite-to-Site VPN接続のトンネル帯域幅を、接続を再作成せずに変更できるようになった。標準（最大1.25Gbps）から高帯域（最大25Gbps）へのオンラインアップグレードが可能となり、トラフィック増加に伴うVPN帯域の段階的拡張がダウンタイムなく実施できるようになる。

- **[Amazon Neptune now supports 1-click connect with CloudShell](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-neptune-cloudshell/)** (2026-05-06) - AWSマネジメントコンソールからCloudShellを使って1クリックでNeptuneクラスターに接続できるようになった。gremlin/SPARQLクライアントの設定・VPC設定・ポートフォワーディングなどの複雑な事前準備が不要になり、グラフDBの探索・デバッグの初動コストが大幅に削減される。

- **[AWS Elastic Beanstalk now supports TLS listeners for Network Load Balancers](https://aws.amazon.com/about-aws/whats-new/2026/05/elastic-beanstalk-tls-support/)** (2026-05-06) - BeanstalkのNLB構成でTLSリスナーがサポートされ、TCP接続のTLS終端をNLBレベルで実施できるようになった。これまでELB（ALB）のみに限定されていたBeanstalkのTLS終端をNLBでも実現できるため、UDP/TCPプロトコルを扱うアプリケーションでもセキュアな通信設計が容易になる。

- **[AWS Elemental MediaTailor now supports ad trickplay personalization and compact DASH manifest optimization](https://aws.amazon.com/about-aws/whats-new/2026/05/mediatail-ad-trickplay-and-compact-dash-manifest-optimization)** (2026-05-06) - MediaTailorがDASH動画の広告サーバーサイドインサーション（SSAI）において、シークバー上でのサムネイルプレビュー（trickplay）のパーソナライズと、マニフェストサイズを削減するコンパクトDASH最適化をサポート。帯域効率とユーザーUX向上を同時に狙う動画配信最適化の新機能。

## Lobsters

- **[cursed_browser: A web browser with no rendering engine — the VLM reads the HTML and hallucinates the page](https://github.com/scosman/cursed_browser)** - HTMLをレンダリングエンジンで描画する代わりに、VLM（視覚言語モデル）がHTMLを読んでページを「幻視」するという概念実証ブラウザ。実用性よりも「LLMは世界をどう解釈するか」を可視化する実験として話題になっており、AIによるUI理解能力の限界と可能性を笑いながら考察できる興味深いプロジェクト。

- **[Vibe coding and agentic engineering are getting closer than I'd like](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/)** - Simon Willisonが「ノリで書くバイブコーディング」と「プロダクションエージェント工学」の境界線が曖昧になってきた問題点を論じた記事。厳密な設計判断・エラー処理・テスト戦略なしに本番エージェントが動き始めているリスクを指摘し、「速く動く」と「安全に動く」のトレードオフを明示的に管理する工学的規律の重要性を説いている。

- **[AI Slop is Killing Online Communities](https://rmoff.net/2026/05/06/ai-slop-is-killing-online-communities/)** - Stack Overflow・Reddit・GitHubのIssue等のオンラインコミュニティに大量投下されるAI生成の低品質コンテンツ（"AI Slop"）が、コミュニティの信頼性と継続的な貢献意欲を破壊しているという批評。検索ノイズが増え、本物の専門知識が埋もれ、回答品質が均質化していく構造的問題を論じている。

- **[Making your own programming language is easier than you think (but also harder)](https://lisyarus.github.io/blog/posts/making-your-own-programming-language.html)** - プログラミング言語自作の入門的な難しさ（字句解析・構文解析は思ったより簡単）と、本当に難しい部分（型システム・エラーメッセージの品質・標準ライブラリ・エコシステム構築）を率直に整理した記事。自作言語への取り組みを始める動機付けと現実的な期待値調整の両立ができるバランスの良い解説。

- **[aube, a fast Node.js package manager](https://aube.en.dev/)** - npm/pnpm/yarnの代替として開発された高速Node.jsパッケージマネージャー「aube」が公開された。並列ダウンロード・ハードリンクキャッシュ・決定論的ロックファイル生成を特徴としており、新興パッケージマネージャー競争にまた新たなプレイヤーが参入した形。

## dev.to

- **[My MCP Tools Broke Silently; So I Built a Lockfile for MCP](https://dev.to/wannavf/my-mcp-tools-broke-silently-so-i-built-a-lockfile-for-mcp-2dah)** - AIエージェントが依存するMCPサーバーが無通知でAPIを変更・破壊したことで、エージェントが予告なく誤動作し始めた経験から、MCPサーバーのインターフェースをバージョン固定するロックファイル機構を自作した記事。npmのpackage-lock.jsonに着想を得た「mcp.lock」の設計が示されており、MCPエコシステムの依存関係管理という新たな課題を先取りしている。

- **[Every Agent I Delegated To Kept Failing. I Finally Checked the Model.](https://dev.to/vystartasv/every-agent-i-delegated-to-kept-failing-i-finally-checked-the-model-1f46)** - サブエージェントへの委譲が繰り返し失敗した原因を調査すると、サブエージェントに割り当てられたモデルが期待より大幅に能力の低いものだったという実録。マルチエージェントシステムでは「どのモデルが実行されているか」を常に意識する必要があり、エージェント委譲時のモデル指定と検証を怠ると予期しない品質劣化が起きることを示す教訓。

- **[How Authenticator Apps Generate the Same OTP as Your Server (Without Any Communication)](https://dev.to/atifwattoo/how-authenticator-apps-generate-the-same-otp-as-your-server-without-any-communication-jo4)** - TOTPアルゴリズム（RFC 6238）の仕組みを丁寧に解説した記事。認証アプリとサーバーが通信なしに同一のワンタイムパスワードを生成できる理由として、「共有シークレット + 現在時刻のHMACハッシュ」という仕組みが図解付きで説明されており、2FAの内部実装を理解したい開発者向けの良質な入門記事。

- **[Real-Time Monitoring for AI Agents: Beyond Log Streaming](https://dev.to/albert_zhang_f468830cf0e6/real-time-monitoring-for-ai-agents-beyond-log-streaming-1b28)** - AIエージェントの監視を「ログをストリーミングして後から検索する」という後処理型から、意思決定ポイント・ツール呼び出しチェーン・中間状態をリアルタイムで観測できる「オブザーバビリティ」設計へ転換する必要性を論じた記事。エージェントの「何を考えているか」を可視化するトレース設計の具体的なアーキテクチャパターンが示されている。

## TechCrunch

- **[Five architects of the AI economy explain where the wheels are coming off](https://techcrunch.com/2026/05/06/five-architects-of-the-ai-economy-explain-where-the-wheels-are-coming-off/)** - MilkenカンファレンスでAIサプライチェーンの各層を担う5名が「課題はどこにあるか」を議論したセッションのレポート。電力供給・モデル評価の信頼性・規制の不確実性・エンタープライズ採用の遅れという4つの摩擦点が浮き彫りになっており、「AIはすごいのに普及が思ったより遅い」構造的原因を産業設計者の視点から整理している。

- **[Snap says its $400M deal with Perplexity 'amicably ended'](https://techcrunch.com/2026/05/06/snap-says-its-400m-deal-with-perplexity-amicably-ended/)** - SnapchatにPerplexityのAI検索を統合する4億ドルの提携が「円満終了」したとSnapが発表した。昨年11月に発表された契約だったが、両社のプロダクト方向性の齟齬が原因とされており、AI検索とソーシャルメディアの統合ビジネスモデルの難しさを示す事例として注目される。

- **[How Elon Musk left OpenAI, according to Greg Brockman](https://techcrunch.com/2026/05/06/how-elon-musk-left-openai-according-to-greg-brockman/)** - OpenAI共同創業者Greg BrockmanがMilkenカンファレンスでElon MuskのOpenAI離脱経緯を初めて詳細に語った。AI開発の支配権をめぐる創業者間の争い・Twitterとの利益相反・AGI安全方針の対立が離脱の真因として語られており、現在のxAI-OpenAI対立の起源を理解する一次資料として重要。

## Ars Technica

- **[SpaceX is starting to move on from the world's most successful rocket](https://arstechnica.com/space/2026/05/spacex-is-starting-to-move-on-from-the-worlds-most-successful-rocket/)** - SpaceXが世界最多打ち上げ回数を誇るFalcon 9からStarshipへの主力シフトを本格化させており、カリフォルニア州ヴァンデンバーグ基地が当面の最大稼働サイトになるとされる。衛星コンステレーション・商業打ち上げ市場においてStarshipの再利用コスト優位性を確立する戦略転換点として注目される。

- **[TSMC taps wind power as AI chip demand soars, Taiwan feels energy crunch](https://arstechnica.com/gadgets/2026/05/tsmc-taps-wind-power-as-ai-chip-demand-soars-taiwan-feels-energy-crunch/)** - AI向けチップ（特にGPU・HBM）の製造需要急増により台湾の電力消費が記録を更新する中、TSMCが洋上風力発電と大規模PPA契約を拡充している。先端半導体製造のエネルギー問題は個別企業の問題を超え、AIインフラ全体のサステナビリティに直結しており、チップサプライチェーンのエネルギー安全保障という新たな課題が顕在化している。

- **[Spooked by Mythos, Trump suddenly realized AI safety testing might be good](https://arstechnica.com/tech-policy/2026/05/everything-that-could-go-wrong-with-trumps-ai-safety-tests-according-to-experts/)** - Anthropicのサイバー攻撃特化モデル「Claude Mythos」の存在を受けてトランプ政権がAI安全性テストの必要性を認め始めたが、専門家はその評価手法・独立性・透明性に多くの懸念を示している。バイデン政権が整備したAI安全テスト枠組みを一度廃止した後に必要性を認める逆転的な政策変化として記録される。

- **[Report: SpaceX IPO gives Musk unchecked power and forbids investor lawsuits](https://arstechnica.com/tech-policy/2026/05/report-spacex-ipo-gives-musk-unchecked-power-and-forbids-investor-lawsuits/)** - SpaceX IPO計画では、Musk氏に事実上の制限なき経営権を付与し、投資家が訴訟を起こす権利を事前放棄させる異例の条件が盛り込まれているとされる。テック企業のIPO設計における創業者優位のガバナンス構造が極端な形で現れた事例として、コーポレートガバナンスと投資家保護の観点から広く議論されている。

## 注目トピック

今回のフィードを横断して際立つのは**AIエコシステムの「信頼性危機」**だ。MCPツールのサイレント破壊（mcp.lockの必要性）、マルチエージェント委譲時のモデル品質劣化、Chrome Gemini Nanoの無断配布、AI Slopによるオンラインコミュニティの劣化——これらは「AIが便利になった」という表層の裏で、AIに依存するシステム全体の信頼性・制御可能性・説明可能性が静かに揺らいでいることを示している。Simon Willisonの「バイブコーディングとエージェント工学の境界消滅」への警鐘と合わせると、エコシステムとして「速く動かす」から「正しく・安全に動かす」への転換が急務になっているフェーズと読める。

エネルギー問題はAI産業の構造課題として一段と具体化している。TSMCが台湾の電力クランチに対応して風力発電に舵を切り、MicrosoftはカーボンゴールとAIデータセンター拡張の矛盾を抱え、Anthropicは22万基のGPU確保のためSpaceXと提携する——AIチップ製造から推論インフラまで、サプライチェーン全体でのエネルギー争奪戦が地政学・環境政策・電力インフラの三層を同時に巻き込んだ産業再編として進行している。
