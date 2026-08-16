---
title: "Tech Feed ダイジェスト（2026年7月31日）"
date: "2026-07-30T22:14"
category: "summary"
summary: "AI企業と規制当局の攻防が続く一方、Okta・Cyeraなど非人間IDを守るセキュリティ買収が加速した一日"
tags: ["ai", "security", "aws", "cloud", "golang", "frontend"]
---

## はてなブックマーク (テクノロジー)

- **[令和8年熊本地震に乗じたSNS上の偽情報についてまとめてみた](https://piyolog.hatenadiary.jp/entry/2026/07/30/143946)** ([170users](https://b.hatena.ne.jp/entry/s/piyolog.hatenadiary.jp/entry/2026/07/30/143946)) - 熊本地震の直後にSNS上へ拡散した偽情報・誤情報を、著名セキュリティブロガーpiyokangoが情報源の追跡手法とともに整理した記事。災害時のOSINT的なファクトチェック手順が具体的に示されている。
- **[chat.exe - あの頃のUIで繋がる、超軽量ビデオ＆音声チャット](https://chatexe.net/)** ([82users](https://b.hatena.ne.jp/entry/s/chatexe.net/)) - Windows 95/98風のレトロなUIを再現しつつ、内部はWebRTCベースのモダンな実装で動く超軽量ビデオ・音声チャットアプリ。懐かしい見た目と現代的な通信技術を組み合わせた個人開発プロジェクトとして話題になっている。
- **[生成AIにおけるHTML/画像出力の必要性と改善案としてのRHW(reviewable-html-workbench)の紹介](https://zenn.dev/u1/articles/rhw-reviewable-html-workbench)** ([50users](https://b.hatena.ne.jp/entry/s/zenn.dev/u1/articles/rhw-reviewable-html-workbench)) - Claude Code / Codex CLI向けに、レビュー可能なHTMLドキュメントをインラインコメント付きで生成できるプラグイン「RHW」を紹介する記事。AIエージェントの出力をテキストのdiffだけでなく視覚的にレビューする運用を提案している。
- **[Go 1.27 リリース連載：ジェネリクスメソッド (generic methods)](https://future-architect.github.io/articles/20260730a/)** ([49users](https://b.hatena.ne.jp/entry/s/future-architect.github.io/articles/20260730a/)) - Go 1.27で導入されるジェネリクスメソッドの仕様と、これまで型パラメータをメソッドに持てなかった制約がどう緩和されるかを解説する連載記事。Goの型システムの進化を追う開発者向けの一次情報。
- **[総務省がKDDIに行政指導、ISP向けメールシステム不正アクセス　約762万人に影響](https://k-tai.watch.impress.co.jp/docs/news/2129178.html)** ([10users](https://b.hatena.ne.jp/entry/s/k-tai.watch.impress.co.jp/docs/news/2129178.html)) - KDDIが提供するISP向けメールシステムへの不正アクセスで約762万人分の情報に影響が及んだとして、総務省が行政指導を行ったと報じる記事。大規模インフラ事業者の委託先管理体制の甘さが規制当局から問われている。

## Zenn

- **[リリース前チェックをAIで行う「プロダクトリリースハーネス」のつくり方](https://zenn.dev/estie/articles/c5503dfe56f7a1)** - 新機能リリース前の「抜け漏れ」チェックをAIエージェントに任せる仕組みを、estie社のCTOが実装した記事。人間のレビュー観点をチェックリスト化してAIに検証させることで、リリース判断の属人化を減らす狙いがある。
- **[GitHub Actionsのコストが増えているなら、Namespaceを使えばいいじゃない](https://zenn.dev/aircloset/articles/6b47018589df0f)** - GitHub hosted runnerのコスト増に対し、サードパーティのランナー基盤Namespaceへ移行して費用を削減した事例。CI実行基盤をベンダーロックインなく切り替える具体的な移行手順が示されている。
- **[AI時代に感じた危機感と、エンジニアがこれから考えるべきこと](https://zenn.dev/nabewata/articles/8cef1bd4cbae3f)** - 非エンジニアがAIツールでプロトタイプを作り、エンジニアに「同じ動きのアプリ」を依頼してくるようになった実体験から、今後エンジニアに求められる価値を考察した記事。実装力そのものよりも要件を見極める力の重要性を説いている。
- **[エンジニアの習熟度は、トークン消費量として露呈していく](https://zenn.dev/kaji_kaji/articles/token-management-as-ai-proficiency)** - Claude CodeやCodexを固定料金で使い倒す開発者が増える中、タスクの投げ方の巧拙がそのままトークン消費量の差に表れるという観察をまとめた記事。AIエージェント活用の熟練度を定量的に捉える視点を提供している。
- **[Feature-Sliced Design 実践ガイド](https://zenn.dev/norman6464/books/fsd-migration)** - フロントエンドのアーキテクチャ手法Feature-Sliced Design（FSD）のLayers・Slices・SegmentsやPublic APIの定義を体系的にまとめた書籍。大規模フロントエンドの依存関係を整理したいチーム向けの実践的なリファレンス。

## Qiita

- **[「パスキー対応できますか？」と聞かれたら ── 要件を詰めずに実装すると、登録済みのパスキーが全部無効になる](https://qiita.com/gts/items/7718da8016d1ce2ca43f)** - SQLインジェクションが「文字列を連結してSQLを作る」となぜ危険なのかを、実際の攻撃例とともに丁寧に解説した記事。定番の脆弱性でも実例ベースで再確認しておく価値がある内容。
- **[どう頼むかがAIの成果を決める ― 丸投げしないAI協業の「発注の型」](https://qiita.com/sh-fukaya/items/c1d6c7b0281e8e8afe5c)** - AIエージェントへのタスク依頼を「丸投げ」にせず、要求仕様を明確化してから発注する型を提案する記事。人間同士の発注プロセスの知見をAI協業に応用する視点が実務的。
- **[「ゴリゴリのエンジニアじゃなくても大丈夫」 企業の内製化を加速するVibe Coding実践ガイド](https://qiita.com/dahatake/items/7a15a1caf194fcf29f0b)** - 非エンジニアでもAIを使ったVibe Codingで業務アプリを内製できるようにするための、プロンプト例とユースケース集をまとめた記事。現場のドメイン知識を持つ人が直接実装に踏み込む動きを後押しする内容。
- **[Elixir と Livebook で学ぶ LLM / Transformer 入門 〜 トークン化からミニGPTの自作学習まで](https://qiita.com/RyoWakabayashi/items/ca95db1982c78e40a907)** - Elixirの対話型ノートブック環境Livebookを使い、トークン化からミニGPTの学習までTransformerの仕組みを手を動かしながら学ぶ入門記事。Python以外の言語エコシステムでLLMの内部構造を理解する珍しいアプローチ。
- **[ITの資格勉強で綺麗にノートまとめてるけど、その時間で過去問といた方がマシ](https://qiita.com/prumnn/items/7d9877f2f7ba3b26b56c)** - IT資格の勉強法として、丁寧なノート作成よりも過去問演習に時間を割いた方が効率的だと主張する記事。学習の「作業感」と実際の得点効率のギャップを指摘している。

## AWS 新着

- **[Amazon Bedrock announces up to 80% lower prices for OpenAI GPT‑5.6 models](https://aws.amazon.com/about-aws/whats-new/2026/07/openai-gpt-terra-luna-pricing-bedrock/)** (2026-07-30) - Amazon BedrockでホストされるOpenAIのGPT-5.6 Terra・Lunaモデルの推論価格が最大80%値下げされた。複数ベンダーのモデルを同一基盤で扱うBedrockの価格競争が激化している。
- **[Grok 4.3 from xAI is now available on Amazon Bedrock in AWS GovCloud (US-West)](https://aws.amazon.com/about-aws/whats-new/2026/07/grok-4-3-bedrock-govcloud/)** (2026-07-30) - xAIのGrok 4.3がAWS GovCloud上のBedrockで利用可能になった。政府機関向けの厳格なコンプライアンス環境でも複数ベンダーのモデルを選択できる幅が広がっている。
- **[IAM Policy Simulator moves to the IAM console and adds additional capabilities](https://aws.amazon.com/about-aws/whats-new/2026/07/iam-policy-simulator-iam-console/)** (2026-07-30) - IAMポリシーの動作確認ツールIAM Policy SimulatorがIAMコンソールに統合され、機能が拡張された。別画面を行き来せずポリシー設計とシミュレーションを一箇所で完結できるようになる。
- **[AWS announces general availability of Policy-Based Routing on AWS Transit Gateway](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-transit-gateway-policy-based-routing/)** (2026-07-30) - Transit GatewayにPolicy-Based Routing（PBR）が正式提供された。送信元やアプリケーション種別に応じてトラフィック経路を細かく制御できるようになり、マルチVPC構成でのネットワーク設計の自由度が上がる。
- **[Amazon MSK Express brokers now deliver data to streaming tables for Apache Iceberg](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-msk-streaming-tables-for-apache-iceberg)** (2026-07-30) - MSK Expressブローカーが、Kafkaストリームのデータを直接Apache Icebergのストリーミングテーブルへ書き込めるようになった。別途ETLパイプラインを組まずにストリームデータをレイクハウス形式で永続化できる。

## Lobsters

- **[deskhop: Fast Desktop Switching Device](https://github.com/hrvach/deskhop)** (45pt) - 複数のPC間でキーボード・マウスを瞬時に切り替えるための専用ハードウェアデバイスをオープンソースで公開したプロジェクト。ソフトウェアKVMの遅延やクリップボード同期の不安定さを、専用基板で解決するアプローチ。
- **[The AI Aesthetic](https://blog.jim-nielsen.com/2026/ai-aesthetic/)** (37pt) - AI生成コンテンツに共通して現れる視覚的・文章的な「AIらしさ」というスタイルを、デザイナーの視点で分析したエッセイ。均質化していくAI生成物の美学が、人間の創作物とどう区別されるかを論じている。
- **[Stacked pull requests are now in public preview](https://github.blog/changelog/2026-07-30-stacked-pull-requests-are-now-in-public-preview/)** (21pt) - GitHubが大きな変更を複数の小さなPRに連鎖させて管理する「スタックドPR」機能をパブリックプレビュー公開した。依存関係のあるPR群をレビューしやすい単位に分割する運用がGitHub公式機能として整備される。
- **[Progress toward compiling Linux with gccrs](https://lwn.net/SubscriberLink/1083202/f1ba926cd57ac5c5/)** (17pt) - RustのGCCフロントエンド実装gccrsを使ってLinuxカーネルをビルドする取り組みの進捗をまとめた記事。カーネルのRustサポートがGCCエコシステム側でも着実に進んでいることを示している。
- **[The Difference Between a Button and a Link](https://unplannedobsolescence.com/blog/buttons-vs-links/)** (16pt) - HTMLにおける`<button>`と`<a>`タグの使い分けを、アクセシビリティとブラウザの標準的な振る舞いの観点から整理した記事。見た目だけで実装を選びがちなUIコンポーネント設計への基本的な注意喚起。

## dev.to

- **[From Software Engineer to AI Engineer - Part 1: A whole new world](https://dev.to/bjornvdlaan/from-software-engineer-to-ai-engineer-part-1-a-whole-new-world-3ebk)** - 長年ソフトウェアエンジニアとして働いてきた著者が、AIエージェントの登場で求められるスキルセットがどう変化したかを振り返るシリーズ記事の第1回。既存のエンジニアリングスキルとAIエンジニアリングの接続点を探っている。
- **[Angular was built for codebases where no one person could review every change, and agent-generated code is that same problem arriving faster](https://dev.to/eneajaho/angular-was-built-for-codebases-where-no-one-person-could-review-every-change-and-agent-generated-5cam)** - Angularの厳格な型システムと規約が、そもそも「誰も全変更をレビューしきれない」大規模開発を前提に設計されていたと論じる記事。AIエージェントが大量にコードを生成する時代こそ、型に厳格なフレームワークの価値が増すという主張。
- **[AI coding agents in a German company: the layer everyone forgets](https://dev.to/dominik_ddd/ai-coding-agents-in-a-german-company-the-layer-everyone-forgets-2kpc)** - ドイツ企業にAIコーディングエージェントを導入する際、技術的な統合だけでなく組織・労務・データ保護規制の層が見落とされがちだと指摘する記事。GDPRなど地域固有の制約がAIエージェント導入の実務上のボトルネックになる実例。
- **[Labeling unsafe text without a moderation endpoint: chat completions and a JSON schema](https://dev.to/colemitchell4991/labeling-unsafe-text-without-a-moderation-endpoint-chat-completions-and-a-json-schema-4hg5)** - 専用のモデレーションAPIを持たないLLMプロバイダでも、Chat Completions APIと厳格なJSON Schemaを組み合わせることで不適切テキストのラベリングを実現する手法を解説した記事。汎用チャットAPIをモデレーション用途に転用する実践的なテクニック。
- **[Optimizing API Latency in C# .NET Applications](https://dev.to/arash_zand/optimizing-api-latency-in-c-net-applications-424c)** - C# .NETアプリケーションにおけるAPIレイテンシの主要な要因と、その改善手法を整理した記事。スケーラビリティとユーザー体験に直結するレイテンシ最適化の基本を体系的にまとめている。

## TechCrunch

- **[Judge says Trump admin still lacks evidence for Anthropic 'supply-chain risk' label](https://techcrunch.com/2026/07/30/judge-says-trump-admin-still-lacks-evidence-for-anthropic-supply-chain-risk-label/)** - トランプ政権がAnthropicを「サプライチェーンリスク」に指定し技術利用を制限した措置について、連邦判事が十分な根拠を政権側が示せていないと述べたと報じる記事。AI企業に対する政府の安全保障上の規制根拠が法廷で問われている。
- **[Google says it fixed more Chrome bugs in June than over the past two years, thanks to AI](https://techcrunch.com/2026/07/30/google-says-it-fixed-more-chrome-bugs-in-june-than-over-the-past-two-years-thanks-to-ai/)** - GoogleがAI支援によって6月だけで過去2年分を上回る数のChromeのバグを発見・修正したと報じる記事。MicrosoftのAI主導脆弱性発見に続き、大手ベンダーの脆弱性対応にAIが本格的に組み込まれつつある動きが広がっている。
- **[Okta buys AI security startup Permiso — source says for about $200M](https://techcrunch.com/2026/07/30/okta-buys-ai-security-startup-permiso-source-says-for-about-200m/)** - IDプラットフォームのOktaが、AIエージェントなど非人間アイデンティティの脅威検出を手がけるPermisoを約2億ドルで買収したと報じる記事。急増するAIエージェントの「身元」をどう守るかという市場に、既存のID管理大手も本格参入している。
- **[LinkedIn adds a button to report AI-generated 'slop'](https://techcrunch.com/2026/07/30/linkedin-adds-a-button-to-report-ai-generated-slop/)** - LinkedInが低品質なAI生成投稿を「AIスロップらしい」として報告できるボタンを導入し、自社のAI文章作成機能を校正ツールに置き換えると報じる記事。プラットフォーム側がAI生成コンテンツの氾濫に対策を講じ始めている。
- **[Nscale buys Anyscale as it seeks to own more of the AI compute stack](https://techcrunch.com/2026/07/30/nscale-buys-anyscale-as-it-seeks-to-own-more-of-the-ai-compute-stack/)** - 英国のAIニュークラウド企業Nscaleが、Rayの開発元でAIワークロードのスケーリングを支援するAnyscaleを買収すると報じる記事。GPUインフラだけでなく、その上で動くワークロード管理層まで垂直統合しようとする動きが加速している。

## Ars Technica

- **[Quantum computers outperform classical ones, with results you can trust](https://arstechnica.com/science/2026/07/if-a-quantum-computer-outperforms-normal-ones-can-you-tell-if-its-right/)** - 量子コンピュータが古典コンピュータを上回る性能を示した際に、その計算結果が正しいかどうかをどう検証するかという課題に取り組んだ研究を紹介する記事。「速いが正しいか分からない」という量子優位性の実用化における本質的な壁を扱っている。
- **[Comcast store punished low sales by smashing pies in workers' faces, lawsuit claims](https://arstechnica.com/tech-policy/2026/07/comcast-store-punished-low-sales-by-smashing-pies-in-workers-faces-lawsuit-claims/)** - Comcastの直営店が売上目標未達の従業員にパイを顔にぶつける「罰ゲーム」を課していたとして提訴されたと報じる記事。大手通信事業者の販売現場に残る前時代的な労務管理の実態が訴訟を通じて明るみに出た。
- **[Audi has a new flagship designed with the US in mind: The 2027 Q9](https://arstechnica.com/cars/2026/07/audi-has-a-new-flagship-designed-with-the-us-in-mind-the-2027-q9/)** - Audiが米国市場向けに設計した新型フラグシップSUV「2027 Q9」を発表したと報じる記事。EVシフトを進める欧州メーカーが、米国の大型車志向に合わせて車格そのものを作り分けている動きを示している。

## 注目トピック

今回目立ったのは、AIによる脆弱性発見の実績がMicrosoftに続きGoogleでも表面化したことだ。TechCrunchはGoogleが6月にAI支援でChromeのバグを過去2年分を上回るペースで発見・修正したと報じており、Ars Technica・はてなブックマークが直近報じてきた「AIエージェントが人間の修正速度を上回る」という構図が、単一ベンダーの一過性の成果ではなく業界全体のトレンドになりつつあることが裏付けられた。一方でこの流れと表裏一体なのが、AIエージェント自体を「守る」市場の急拡大だ。OktaがAIエージェントなど非人間アイデンティティの脅威検出を手がけるPermisoを約2億ドルで買収したと報じられており、先週報じられたCyeraによるOasis Security買収に続き、既存のIDセキュリティ大手が相次いでAIエージェント向けの防御力を買収で獲得しに動いている。

もう一つの軸は、AI企業と規制当局・プラットフォームの緊張関係が法廷や製品仕様という形で可視化されていることだ。TechCrunchは、トランプ政権がAnthropicを「サプライチェーンリスク」に指定した措置について、連邦判事が根拠不十分だと述べたと報じており、AI企業への安全保障上の規制がその正当性を法廷で試されている。同時にLinkedInがAI生成の低品質投稿を通報する機能を追加したと報じられ、プラットフォーム側も溢れるAI生成コンテンツへの対策を製品レベルで講じ始めている。AIの能力そのものだけでなく、それを取り巻く規制・防御・コンテンツ管理という周辺レイヤーが技術ニュースの主戦場になりつつある一日だった。
