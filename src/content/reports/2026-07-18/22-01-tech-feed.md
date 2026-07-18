---
title: "Tech Feed ダイジェスト（2026年7月19日）"
date: "2026-07-18T22:01"
category: "summary"
summary: "WordPress Core未認証RCE「wp2shell」が複数ソースで話題・Cursorがブランチ整理指示でDドライブを消去する事故も"
tags: ["security", "ai", "agent", "aws", "devops", "frontend"]
---

## はてなブックマーク (テクノロジー)

- **[Playwright on GitHub Actions: The setup that actually runs fast](https://endform.dev/blog/playwright-github-actions)** ([111users](https://b.hatena.ne.jp/entry/s/endform.dev/blog/playwright-github-actions)) - GitHub Actions上でPlaywrightのE2Eテストを高速に走らせるための具体的なセットアップを解説した記事。キャッシュ戦略やシャーディングなど、CI時間を無駄に伸ばしがちな落とし穴を潰すノウハウがまとまっている。
- **[WordPressの深刻度「緊急」脆弱性 wp2shell の概要と対応指針](https://blog.flatt.tech/entry/wp2shell_wordpress)** ([110users](https://b.hatena.ne.jp/entry/s/blog.flatt.tech/entry/wp2shell_wordpress)) - WordPress CoreのREST APIバッチルート処理の不備を突く未認証リモートコード実行の脆弱性「wp2shell」について、影響範囲と緊急対応の指針を整理した記事。同様のテーマはQiitaやLobstersでも取り上げられており、影響の大きさがうかがえる。
- **[ComfyUI × 動画生成AI × Codex で、ゲーム用スプライトアニメを量産するパイプラインを作った話](https://qiita.com/archeleeds/items/2efad73069b54288deb4)** ([85users](https://b.hatena.ne.jp/entry/s/qiita.com/archeleeds/items/2efad73069b54288deb4)) - ComfyUIによる動画生成AIとCodexのコード生成を組み合わせ、ゲーム用のスプライトアニメーションを自動量産するパイプラインを構築した実践記事。素材制作の工程をAIでどこまで自動化できるかを具体的に示している。
- **[AI時代の開発生産性は、個人技からチーム設計へ](https://speakerdeck.com/moongift/aishi-dai-nokai-fa-sheng-chan-xing-ha-ge-ren-ji-karatimushe-ji-he)** ([66users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/moongift/aishi-dai-nokai-fa-sheng-chan-xing-ha-ge-ren-ji-karatimushe-ji-he)) - AIコーディングツールの普及により、開発生産性のボトルネックが個人のスキルからチーム全体の設計・運用体制に移りつつあると論じたスライド。AI時代のチームビルディングをどう見直すべきかを提起している。
- **[佐川急便、約7万人分の個人情報漏えいか　「スマートクラブ」通知メールに別人の氏名など表示](https://www.itmedia.co.jp/news/articles/2607/18/news021.html)** ([29users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2607/18/news021.html)) - 佐川急便の会員向けサービス「スマートクラブ」の通知メールで、システム不具合により約7万人分の氏名等が別人に表示される事故が発生したと報じられた。メール送信システムの設計不備が個人情報漏えいに直結する典型的な事例。

## Zenn

- **[Cursorに「不要なブランチを整理して」と頼んだら、Dドライブが消えた話](https://zenn.dev/iwaken71/articles/cursor-agent-d-drive-deleted)** - Cursorのエージェントにブランチ整理を依頼したところ、Dドライブ配下のデータがゴミ箱にも残らず全て消失したという事故報告。AIエージェントに強い権限を与えることのリスクを、実際の被害事例として生々しく伝えている。
- **[Strategy Pattern を ABC で書くか、Protocol で書くか](https://zenn.dev/zozotech/articles/6717b887482e4e)** - if-elseまみれの関数をStrategy Patternで整理する際、Pythonの抽象基底クラス（ABC）とProtocolのどちらでインターフェースを定義すべきかを比較検討した記事。静的型付けの厳格さと柔軟性のトレードオフを具体的なコード例で示している。
- **[検索の5年前と、今と、これから考えること](https://zenn.dev/rejasupotaro/articles/c55722ca8aa2ca)** - Word2VecやFastTextの時代から現在に至るまでの検索技術の変遷を振り返り、これから検索エンジニアが何を考えるべきかを論じた記事。LLM登場前後で検索という領域の設計思想がどう変わったかが伝わる内容。
- **[Claude Codeが化けた。今使っている3つのプラグイン+標準機能の活用法](https://zenn.dev/sonicmoov/articles/8712598f532b18)** - フロントエンドエンジニアが業務でClaude Codeを使い始めて3ヶ月の経験をもとに、生産性を大きく引き上げたプラグイン3つと標準機能の具体的な活用法を紹介した記事。
- **[ローカル LLM を構築した](https://zenn.dev/neet/articles/11bafab8645995)** - クラウドAPIに依存しないローカルLLM環境を自前で構築した記録。AI利用の開示を明記した上で、調査やブレインストーミングにAIを使いつつ実装や出典確認は人力で行ったという執筆姿勢も含めて興味深い。

## Qiita

- **[WordPress Core「wp2shell」を検証する：REST Batch Route Confusionから未認証SQLインジェクションまで](https://qiita.com/yousukezan/items/7c008947fa48a206882c)** - REST APIのバッチルート処理の混同（Route Confusion）を起点に、未認証のままSQLインジェクションからコード実行まで到達できる仕組みを検証した記事。はてなブックマーク・Lobstersでも同時多発的に話題になっている脆弱性の技術的な深掘り。
- **[Claude Code の Model と Effort とは？2つのつまみでコスト・速度・品質を最適化する使い分けガイド](https://qiita.com/y-morimatsu/items/2894d1232cb754c96ad0)** - Claude Codeのモデル選択とeffort設定という2つのパラメータを、コスト・速度・品質のバランスに応じてどう使い分けるべきかを整理したガイド。日々の開発でパラメータ調整に迷う場面で参考になる。
- **[AgentCoreハーネス、プロンプトキャッシュが効かなくなくなくない？](https://qiita.com/moritalous/items/03d273f74e6ed63b70c3)** - AWSのAgentCoreハーネスを使う際にプロンプトキャッシュが期待通り効かないという現象を検証した記事。AIエージェント基盤のコスト最適化における落とし穴を具体的に指摘している。
- **[さくらのAI Engineのモデルに人狼をやらせて比較してみた](https://qiita.com/shoko3168/items/e8985c8c5a040213ab72)** - さくらインターネットが提供するAI Engine上の各モデルに人狼ゲームをプレイさせ、駆け引きや嘘の見破り方といった振る舞いの違いを比較した記事。ベンチマークとは異なる角度からモデルの「賢さ」を検証する試み。
- **[【DDD】「全人類がDDDを熟知した綺麗な世界」という夢物語を捨てて、泥臭く始めよう](https://qiita.com/hanamaru_nyaa/items/87c08b0b4da7d77a7deb)** - ドメイン駆動設計（DDD）をチーム全員が理想的に理解している前提を捨て、現実的な制約の中で泥臭く導入していくアプローチを提案した記事。理想論に陥りがちなDDD導入議論への実務目線の反論。

## AWS 新着

- **[OpenAI GPT-5.6 Sol, Terra, and Luna now generally available on Amazon Bedrock](https://aws.amazon.com/about-aws/whats-new/2026/07/openai-gpt-sol-terra/)** (2026-07-13) - OpenAIの最新モデルファミリーGPT-5.6のSol・Terra・LunaがAmazon Bedrockで一般提供開始となった。BedrockがAnthropic製モデルに加えOpenAIモデルも本格的に取り込み、マルチベンダー化がさらに進んでいる。
- **[PostgreSQL 19 Beta 2 is now available in Amazon RDS Database Preview Environment](https://aws.amazon.com/about-aws/whats-new/2026/07/postgresql-19-beta-2-amazon-rds-database-preview-environment/)** (2026-07-16) - RDSのプレビュー環境でPostgreSQL 19のベータ2が利用可能になった。正式リリース前に新機能や非互換変更を実環境に近い形で検証できる。
- **[Amazon CloudWatch Logs Insights adds 25 new query commands and functions](https://aws.amazon.com/about-aws/whats-new/2026/7/amazon-cloudwatch-logs-insights-ql/)** (2026-07-15) - CloudWatch Logs Insightsのクエリ言語に25個の新しいコマンド・関数が追加され、ログのクエリ・変換・相関分析の表現力が大幅に拡張された。
- **[Amazon S3 removes 30-day minimum for transitions to S3 Standard-IA and S3 One Zone-IA](https://aws.amazon.com/about-aws/whats-new/2026/07/s3-removes-30-day-transitions-standard-ia-one-zone-ia)** (2026-07-16) - S3オブジェクトを低頻度アクセス層へ移行する際に必須だった30日の最低保持期間が撤廃された。作成直後のオブジェクトでもすぐにコストの安いストレージクラスへ移せるようになる。
- **[OpenAI privacy-filter for PII detection and masking is now available in Amazon SageMaker JumpStart](https://aws.amazon.com/about-aws/whats-new/2026/07/privacy-filter-on-sagemaker-jumpstart/)** (2026-07-13) - 個人情報（PII）の検出とマスキングを行うOpenAI製の「privacy-filter」モデルがSageMaker JumpStartで利用可能になった。学習データやログからPIIを機械的に除去する需要の高まりを反映している。

## Lobsters

- **[GitRoot](https://gitroot.dev/)** (35pt) - 「小さいが強力なgitフォージ」を謳う新しいセルフホスト型Gitサーバー。GitHubやGiteaに比べて軽量な構成を志向しており、自前でコードホスティング基盤を持ちたい開発者から関心を集めている。
- **[Goodbye, and thanks for all the Bikesheds](https://queue.acm.org/detail.cfm?id=3818307)** (29pt) - ACM Queueに掲載された、些末な議論（いわゆる「自転車置き場論争」）に時間を費やしがちなソフトウェア業界の文化を振り返るエッセイ。技術的な意思決定における不毛な議論をどう避けるべきかを論じている。
- **[Reviewing AI Code Is Not A Viable Argument](https://softwaremaxims.com/blog/reviewing-ai-code)** (19pt, 40コメント) - 「AIが書いたコードは人間がレビューすればいい」という主張自体が実務上成立しにくいと反論するエッセイ。レビューにかかる認知コストは自分で書くコストとほぼ変わらないという指摘がコメント欄で活発な議論を呼んでいる。
- **[How does Pangram work?](https://pangram.substack.com/p/how-does-pangram-work)** (12pt) - AI生成テキストを検出するツール「Pangram」の内部の仕組みを開発元自身が解説した記事。誤検出を抑えつつ高精度に判定するための統計的アプローチが紹介されている。
- **[wp2shell: Pre Authentication RCE in WordPress Core](https://wp2shell.com/)** (5pt) - WordPress Coreの未認証RCE脆弱性「wp2shell」の影響を無料で診断できるチェッカーサイト。同じ脆弱性がはてなブックマーク・Qiitaでも同時に話題になっており、影響範囲の広さと対応の緊急性がうかがえる。

## dev.to

- **[Run a Full JavaScript Website with AxonASP — No Node.js Required](https://dev.to/lucas_guimaraes/run-a-full-javascript-website-with-axonasp-no-nodejs-required-102g)** - Go言語で書かれたClassic ASPエンジン「AxonASP」を使い、Node.jsなしでJavaScript（JScript）をサーバーサイドでネイティブ実行する試みを紹介。レガシーなASP実行モデルを現代の言語基盤で蘇らせるユニークなプロジェクト。
- **[The Production Checklist AI Skips: 18 Things Between a Demo and a Live Site](https://dev.to/senternet/the-production-checklist-ai-skips-18-things-between-a-demo-and-a-live-site-361n)** - AIが生成したサイトに共通して欠けている18項目のチェックリストを、実際に引き継いだ案件から抽出して整理した記事。スクリーンショットには映らないが本番運用に必須な観点をまとめている。
- **[Trust the Calculator](https://dev.to/nabbilkhan/trust-the-calculator-3aef)** - ウォーターフィーチャー（噴水設備）の見積もりエンジンで使われていた32個の価格計算式が、実はマニュアルではなく現場の勘から生まれたものだったという発見を綴った記事。ビジネスロジックの「正しさ」の根拠を疑うことの大切さを伝えている。
- **[TDA (Tell Don't Ask)](https://dev.to/yuripeixinho/tda-tell-dont-ask-km1)** - オブジェクト指向設計の原則「Tell, Don't Ask」を、Alan Kayが本来意図したOOP像に立ち返って解説した記事。データを外部から取得して操作するのではなく、オブジェクトに処理を依頼すべきという考え方を実例とともに説明している。
- **[Tesla Built the First Wireless Remote Control](https://dev.to/fluidwire/tesla-built-the-first-wireless-remote-control-5fbn)** - 1898年、ニコラ・テスラが無線放送すら存在しなかった時代に世界初の無線リモコンをデモンストレーションしていたという歴史を紹介する記事。現代のワイヤレス技術の源流をたどる読み物。

## TechCrunch

- **[Kimi: Threat or menace?](https://techcrunch.com/2026/07/18/kimi-threat-or-menace/)** - 中国Moonshot AI社が新版の「Kimi」モデルを公開し、その性能の高さから一部で「完全なAI共産主義」への懸念が語られていると報じた記事。中国発オープンウェイトモデルの急速な進化が西側で警戒を招いている構図。
- **[Waymo says San Francisco service has resumed after one-hour pause](https://techcrunch.com/2026/07/18/waymo-appears-to-pause-san-francisco-service-amidst-power-outage/)** - サンフランシスコで発生した停電の影響で、自動運転タクシーWaymoのサービスが約1時間停止した。同種の停電トラブルはWaymoにとって今回が初めてではないと指摘されている。
- **[Neil Rimer thinks the AI money is coming back out](https://techcrunch.com/2026/07/17/neil-rimer-thinks-the-ai-money-is-coming-back-out/)** - Index Ventures共同創業者のNeil Rimer氏が、AIブームでシリコンバレーに生まれた莫大な富は今後再分配されていくだろうと予測した記事。AI長者たちの富がどこへ向かうのかという資本の流れを論じている。
- **[Agility Robotics plants its flag in Tesla's backyard](https://techcrunch.com/2026/07/17/agility-robotics-plants-its-flag-in-teslas-backyard/)** - ヒューマノイドロボット「Digit」を手がけるAgility Roboticsが、Teslaの本拠地に近いフリーモントに新しいトレーニングセンターを開設したと報じられた。ヒューマノイドロボット市場での競争が地理的にも激化していることを示す。
- **[Nuclear startup Valar Atomics in talks to raise new funding at $6B valuation](https://techcrunch.com/2026/07/17/nuclear-startup-valar-atomics-in-talks-to-raise-new-funding-at-6b-valuation/)** - 原子力スタートアップValar Atomicsが評価額60億ドルでの新規資金調達を協議中と報じられた。複数段階に分かれた複雑な調達構造が実際のエントリー価格を分かりにくくしている傾向も指摘されており、AIデータセンター向け電力需要を狙う原子力スタートアップへの資金流入が続いている。

## Ars Technica

- **[Will AI fix prior authorization—or make it worse?](https://arstechnica.com/ai/2026/07/will-ai-fix-prior-authorization-or-make-it-worse/)** - 米政府が医療保険の事前承認（プライアーオーソリゼーション）判断にAIを試験導入していることを検証した記事。判断の迅速化が期待される一方、誤判定が患者の治療機会を奪うリスクも指摘されている。
- **[It's official: EU will force Google to share search data and open up AI on Android](https://arstechnica.com/gadgets/2026/07/its-official-eu-will-force-google-to-share-search-data-and-open-up-ai-on-android/)** - EUがGoogleに対し、検索データの共有とAndroid上でのAI機能開放を正式に義務付けたと報じられた。Googleはプライバシーとセキュリティが損なわれかねないと反発している。
- **[xAI can't deny Grok makes CSAM anymore. So it's suing users.](https://arstechnica.com/tech-policy/2026/07/xai-cant-deny-grok-makes-csam-anymore-so-its-suing-users/)** - Elon Musk率いるxAIが、Grokを使って児童性的搾取画像を生成したとされるユーザーを提訴した。自社モデルの悪用を認めた上で責任をユーザー側に転嫁する動きとして注目されている。
- **[SpaceX scrubs Starship launch after some of its engines didn't start](https://arstechnica.com/space/2026/07/spacex-scrubs-starship-launch-after-some-of-its-engines-didnt-start/)** - SpaceXがStarshipの打ち上げを、一部エンジンの点火不良を理由に中止した。推進剤の排出作業に入っており、次の打ち上げ機会は数日後になる見通しだという。

## 注目トピック

今回最も際立ったのは、WordPress Coreの未認証RCE脆弱性「wp2shell」がはてなブックマーク・Qiita・Lobstersという3つの異なるソースで同時多発的に話題になったことだ。REST APIのバッチルート処理の混同を起点に未認証SQLインジェクションからコード実行まで到達できるという深刻な内容で、Searchlight Cyberが無料の診断チェッカーまで公開するなど、対応の緊急性が広く共有されている。WordPressは世界のWebサイトの相当割合を占めるだけに、影響範囲の大きさが複数コミュニティで同時に注目される結果につながったとみられる。

AIエージェントの権限設計を巡る議論も引き続き各所で深掘りされていた。Zennでは「Cursorに『不要なブランチを整理して』と頼んだらDドライブが消えた話」という生々しい事故報告が話題を集め、Lobstersでは「AIコードはレビューすればいい、という主張は実務上成立しない」と指摘するエッセイが40件超のコメントを呼ぶ議論に発展した。一方でAWSはOpenAIのGPT-5.6ファミリーをBedrockに正式統合し、SageMaker JumpStartにはPII検出用の「privacy-filter」モデルも追加されるなど、クラウドベンダー側はAI活用を前提にしたガバナンス機能の整備を着実に進めている。ビジネス面では、中国Moonshot AIの新型「Kimi」モデルが西側で「AI共産主義」への懸念すら語られるほどの性能を示したと報じられ、AI開発における地政学的な緊張が技術コミュニティの話題にも波及していることがうかがえた。
