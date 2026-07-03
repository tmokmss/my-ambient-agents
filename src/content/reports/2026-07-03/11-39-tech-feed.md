---
title: "Tech Feed ダイジェスト（2026年7月3日）"
date: "2026-07-03T11:39"
category: "summary"
summary: "curlのAIスロップ対応・Rust製軽量コーディングエージェント・CreateOS Sandbox・Zuckerbergのエージェント進捗遅れ発言など"
tags: ["ai", "agents", "security", "devops", "aws", "rust", "browser"]
---

## はてなブックマーク (テクノロジー)

- **[“開かずの基幹システム”、450人月→実質2カ月で解読　創業100年のカクヤス、生成AIで挑む「転生」](https://www.itmedia.co.jp/news/articles/2607/03/news050.html)** ([320users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2607/03/news050.html)) - 酒販大手カクヤスが、ブラックボックス化した基幹システムの仕様を生成AIに解読させ、本来450人月かかる作業を実質2カ月で終えたという事例。長年放置されたレガシーシステムの「仕様の逆引き」にAIを使う具体的な現場適用例として反響を呼んでいる。
- **[「理解してから働く時代」が、そろそろ終わるのかもしれない、という話｜けんすう](https://kensuu.com/n/nab3eb1959ef2)** ([210users](https://b.hatena.ne.jp/entry/s/kensuu.com/n/nab3eb1959ef2)) - AIエージェントに仕事を任せる場面が増えるほど、人間が「仕組みを完全に理解してから着手する」という従来の働き方の前提が崩れつつあると論じたエッセイ。理解より先に検証・修正のループを回す働き方への移行が示唆されている。
- **[「怪しいメールを見破った人」がだまされる、社内注意喚起を装う「二段階式フィッシングメール」に注意！](https://internet.watch.impress.co.jp/docs/column/netliteracy/2117321.html)** ([94users](https://b.hatena.ne.jp/entry/s/internet.watch.impress.co.jp/docs/column/netliteracy/2117321.html)) - フィッシング訓練メールを装った「本物の」注意喚起メールで二段階に騙す新手口を解説。セキュリティ意識の高いユーザーほど「これは訓練だ」と油断してしまう心理の隙を突く攻撃で、社内啓発の設計自体を見直す必要性を示している。
- **[「やばい」いつのまにか撮影　AI搭載スマートグラス、記者が体験](https://www.asahi.com/articles/ASV6S7KLDV6SULFA02TM.html)** ([84users](https://b.hatena.ne.jp/entry/s/www.asahi.com/articles/ASV6S7KLDV6SULFA02TM.html)) - AI搭載スマートグラスを実際に装着した記者が、意識しないうちに周囲を撮影・記録してしまう体験をレポート。常時センシングするウェアラブルデバイスが普及する際のプライバシー配慮の難しさを当事者視点で伝えている。
- **[CDを生んだソニーが、ゲームの“円盤”に終わりを告げる事情　プレステとディスクの30年史](https://www.itmedia.co.jp/news/articles/2607/03/news098.html)** ([71users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2607/03/news098.html)) - 光ディスク技術を主導してきたソニー自身がPlayStationの物理ディスク生産終了を決めた経緯を、CD開発からの30年史として振り返る記事。「所有」から「アクセス権」へのゲーム流通の転換を、メディア産業の当事者視点で捉え直している。

## Zenn

- **[【速報】Claude Sonnet 5のReact習熟度はOpus 4.8に匹敵](https://zenn.dev/uhyo/articles/react-profession-bench-9)** - 独自ベンチマークでClaude Sonnet 5のReact実装能力を検証し、上位モデルOpus 4.8に匹敵する水準に達している一方、Sonnetの強みだったコスパの良さがやや薄れた印象があると報告。モデル選定の判断材料として実務者目線の評価が参考になる。
- **[MoonBit を高速化する](https://zenn.dev/mizchi/articles/optimize-moonbit-core)** - プログラミング言語MoonBitのコア処理を高速化する取り組みを紹介しつつ、「AIスロップかどうか」は仕様への準拠やAPI契約を壊さない改善かどうかで線引きできるという視点を提示。パフォーマンス改善とAI生成コードの品質基準を結びつけて論じている。
- **[高速 Gaussian Splatting レンダリング](https://zenn.dev/abist_inno/articles/dbb046952261eb)** - 3Dシーン表現手法Gaussian Splattingのビューワをさらに高速化し、Apple M4 Mac環境で最大5倍の速度向上を達成した実装記事。具体的な高速化手法とベンチマーク結果が示されている。
- **[Claude Codeに同じバグを3回出すと、自動でルール化される話](https://zenn.dev/nexta_/articles/858e92ee22b4a4)** - AIエージェントが同じ失敗を繰り返す問題と、対策ルールを積み上げすぎて肝心な知見がノイズに埋もれる問題の両方に対し、セッション履歴を一次資料として扱い段階的にルール化する運用を紹介。AIとの協業における「振り返り」の仕組み化が実践的にまとまっている。
- **[ローカルLLMでハルシネーションを見抜く](https://zenn.dev/starai_org/articles/1b09b1971a2a2b)** - ローカルLLM（gemma4:12b）を使い、Chain-of-Thoughtとチェック観点の設計によって生成AIメールのハルシネーションを実用的に検出する手法をコード付きで紹介。クラウドAPIに頼らず品質検証を回したいケース向けの実践例。

## Qiita

- **[Zerostackを実測した — RAM16MBの軽さはRust製エージェントで本物だった](https://qiita.com/kai_kou/items/38c8733fd337b00e5e0d)** - Claude CodeやCursorなどNode.js/TypeScript製のAIコーディングエージェントが数百MB規模のメモリを消費しがちな中、Rust製の軽量エージェント「Zerostack」の実メモリ使用量を検証した記事。常駐エージェント運用のリソースコストを見直す材料になる。
- **[Google の Data Agent Kit を Claude Code に入れて、BigQuery を自然言語で触る](https://qiita.com/TaichiYamasaki/items/a2884f1fb66a9628c4b7)** - Google Cloud Next '26で発表されたData Agent KitをClaude Codeに統合し、BigQueryを自然言語で操作する検証記事。異なるベンダーのAIエージェント基盤を組み合わせて使う実践例として参考になる。
- **[Fable 5の消費が激しすぎたので、設計とレビューだけに使う仕組みをClaude Codeで作ってみた](https://qiita.com/fwatanab/items/e2c51c2a783915b275a9)** - 期間限定公開されたClaude Fable 5のトークン消費が想定以上に激しかったため、設計・レビューなど重要度の高い工程だけFableを使い、それ以外はOpusで回す切り替え運用を構築した記事。複数モデルを使い分けるコスト最適化の具体例。
- **[5つのAIに「共通の記憶」を持たせてみた 〜Obsidianをみんなの“外部脳”にする〜](https://qiita.com/meccha__eeyan/items/466f757f73516abb8ec3)** - 複数のAIツールに同じObsidianノートを読み書きさせることで、セッションや環境が変わっても記憶を共有できる「外部脳」を構築した記事。マルチエージェント環境での記憶の持続性という共通課題への軽量な解決策。
- **[Railsで学ぶ レースコンディション 〜二重登録の罠〜](https://qiita.com/akachiryo/items/42ff4d8f736f45eb8c59)** - ローカルでは再現しないのに本番でまれに発生する二重登録の原因となる競合状態を、Railsのコード例とともに解説。並行処理のバグを実行環境の違いも踏まえて理解したいエンジニア向けの内容。

## AWS 新着

- **[Amazon SageMaker Unified Studio now supports Terraform for provisioning](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-sagemaker-unified-studio-terraform/)** (2026-07-02) - SageMaker Unified Studioのドメイン構築がTerraformの公式モジュール経由で可能になった。既存のIaCパイプラインにAI/データ基盤の構築を組み込みやすくなり、環境間の構成一貫性を保ちやすくなる。
- **[AWS CloudFormation and CDK express mode speeds up infrastructure deployments by up to 4x](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-cloudformation-cdk/)** (2026-06-30) - CloudFormationとCDKの高速デプロイモード「express mode」により、インフラのデプロイ時間が最大4倍短縮される。頻繁なデプロイ・検証サイクルを回す開発チームにとって、待ち時間削減が直接生産性に効いてくる。
- **[Amazon SageMaker HyperPod now supports AMI versioning and auto-patching](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-sagemaker-hyperpod-ami-version-auto-patch/)** (2026-07-02) - 大規模モデル学習基盤HyperPodで、クラスタ上のAMIバージョンを可視化し、ワークロードを止めずにセキュリティパッチを自動適用できるようになった。長時間稼働する学習クラスタの保守負担を軽減する。
- **[Amazon RDS announces Cross-Region Automated Backups in four additional AWS Regions](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-rds-cross-region-automated-backups-additional-aws-regions/)** (2026-07-01) - RDSのクロスリージョン自動バックアップ複製が4リージョンに追加対応した。メキシコなど新たなリージョン間でのDR構成を組みやすくなり、災害復旧要件を満たす選択肢が広がる。
- **[Amazon Neptune announces dual stack support with IPv6](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-neptune-ipv6/)** (2026-06-30) - グラフDBのNeptuneがIPv4/IPv6のデュアルスタック接続に対応した。IPv6移行を進める企業ネットワークでも、既存のIPv4接続を維持したまま段階的に移行できるようになる。

## Lobsters

- **[crustc: Entirety of rustc, translated to C](https://github.com/FractalFir/crustc)** (64pt) - RustコンパイラrustcをまるごとC言語に自動変換するプロジェクト。C以外のツールチェーンが使えない環境でもRustコードをビルド可能にする狙いで、コンパイラの移植性を極端な形で追求した実験的な試みとして注目を集めている。
- **[Wordgard Release 0.1](https://marijnhaverbeke.nl/blog/wordgard-0.1.html)** (58pt) - CodeMirrorの作者による新しいテキストエディタ「Wordgard」の初期リリース。エディタのコア設計を一から見直すプロジェクトで、既存の高機能エディタとは異なるシンプルさを志向している点が開発者コミュニティの関心を引いている。
- **[.gitignore Isn't the Only Way To Ignore Files in Git](https://nelson.cloud/.gitignore-isnt-the-only-way-to-ignore-files-in-git/)** (49pt) - `.gitignore`以外にも`.git/info/exclude`やグローバル除外設定など、Gitでファイルを無視する複数の方法とその使い分けを整理した記事。チームで共有すべき除外設定と個人環境だけの除外設定を分けたい場合に役立つ。
- **[No LLM code in dependencies](https://joeyh.name/blog/entry/no_LLM_code_in_dependencies/)** (42pt) - 自身が保守するOSSの依存関係に、LLMが生成したコードを含めない方針を表明した記事。ライセンスや検証責任の所在が曖昧なままAI生成コードが依存グラフに紛れ込むことへの懸念を、メンテナー視点から具体的に述べている。
- **[Since Linux 6.9 (May 2024), the LUKS encryption key remained resident in memory across suspend](https://mathstodon.xyz/@iblech/116769502749142438)** (19pt) - Linux 6.9以降、サスペンド中もLUKS暗号化キーがメモリ上に残り続ける問題が報告された。スリープ状態のマシンを物理的に奪われた場合、暗号化ディスクの保護が想定より弱くなりうるという実害のある発見。

## dev.to

- **[Running untrusted, AI-generated code: why we built CreateOS Sandbox on Firecracker](https://dev.to/pratikbin/running-untrusted-ai-generated-code-why-we-built-createos-sandbox-on-firecracker-dld)** - AIエージェントが生成したコードをその場で実行させる用途が急増する中、コンテナのカーネル共有では不十分だとして、Firecracker製の隔離マイクロVM上でネットワーク制御込みの実行環境「CreateOS Sandbox」を構築した解説記事。エージェントに実行権限を持たせる際の隔離設計の勘所がまとまっている。
- **[HTTP QUERY Method: The Missing Piece Finally Added to HTTP](https://dev.to/tharindufdo/http-query-method-the-missing-piece-finally-added-to-http-5c6a)** - 長らく議論されてきた新HTTPメソッド「QUERY」がついに標準化された経緯を解説。GETのURL長制限とPOSTの副作用ありという二択の間で、副作用のない複雑な検索クエリを安全に送る手段が正式に整った意義を説明している。
- **[Local LLM vs Claude: Benchmarking qwen3-coder:30b as a Production Agent Backend](https://dev.to/sikamikanikobg/local-llm-vs-claude-benchmarking-qwen3-coder30b-as-a-production-agent-backend-482b)** - 自作エージェント基盤の実タスク27件を、ローカルLLM(qwen3-coder:30b、RTX 3090)とClaudeの本番回答とで比較検証したベンチマーク記事。クラウドLLMをローカルモデルに置き換えられる範囲を具体的な精度データで示している。
- **[Ruby ecosystem is growing and changing. It is adapting to the AI era very quickly.](https://dev.to/eayurt/ruby-ecosystem-is-growing-and-changing-it-is-adapting-to-the-ai-era-very-quickly-25m6)** - RubyKaigiのアンケート調査を引きながら、AI時代におけるRubyコミュニティのツール選定や開発スタイルの変化を論じた記事。特定言語コミュニティがAI活用にどう適応しているかを追う定点観測として興味深い。
- **[Building on-device Video Notes in a macOS app](https://dev.to/yamayu-dev/building-on-device-video-notes-in-a-macos-app-g9a)** - macOS動画プレイヤーアプリに、SpeechAnalyzerとFoundation Modelsを使ったオンデバイスの動画メモ機能を実装した記事。クラウドAPIに頼らずローカルで音声認識と要約を完結させる設計が具体的に示されている。

## TechCrunch

- **[Mark Zuckerberg tells staff that AI agents haven't progressed as quickly as he'd hoped](https://techcrunch.com/2026/07/02/mark-zuckerberg-tells-staff-that-ai-agents-havent-progressed-as-quickly-as-hed-hoped/)** - Meta社内会議でザッカーバーグ氏が、AIエージェントの開発が期待していたほど速く進んでいないと発言したと報じられた。巨額投資を続けるAI大手のトップ自身が進捗の遅れを認めたことで、業界全体の期待値調整を促す発言として注目されている。
- **[Politician who investigated spyware abuses had his phone hacked with Pegasus spyware](https://techcrunch.com/2026/07/02/politician-who-investigated-spyware-abuses-had-his-phone-hacked-with-pegasus-spyware/)** - スパイウェア産業の乱用を調査するEU委員会に所属していた欧州の政治家自身が、NSOグループ製Pegasusスパイウェアで端末をハッキングされていたことが判明した。監視技術を調査する側が標的にされるという皮肉な構図が問題の根深さを物語っている。
- **[Meta quietly launches vibe-coded gaming app Pocket](https://techcrunch.com/2026/07/02/meta-quietly-launches-vibe-coded-gaming-app-pocket/)** - Metaが、テキストプロンプトからインタラクティブなミニゲームを生成・共有できる実験的アプリ「Pocket」をひっそりとリリースした。いわゆる「バイブコーディング」をエンドユーザー向け製品に組み込む大手の動きとして注目される。
- **[Boeing-owned Wisk Aero accused of firing manager who raised safety concerns](https://techcrunch.com/2026/07/02/boeing-owned-wisk-aero-accused-of-firing-manager-who-raised-safety-concerns/)** - Boeing傘下の空飛ぶタクシー開発企業Wisk Aeroが、2025年の重要な飛行試験を前にソフトウェアテストを急がせたと安全性への懸念を訴えたマネージャーを解雇したと訴えられている。新興のエアモビリティ開発における品質保証体制の実態が問われている。
- **[Jersey Mike's IPO illustrates how bad the AI hype has become](https://techcrunch.com/2026/07/02/jersey-mikes-ipo-illustrates-how-bad-the-ai-hype-has-become/)** - サンドイッチチェーンJersey Mike'sのIPO申請書類にまでAIへの言及が含まれていたことを皮肉った記事。事業内容とは無関係な企業までもがAIを話題として持ち出さざるを得ない市場の空気を、ユーモラスに批判している。

## Ars Technica

- **[Trump gets OpenAI to offer US 5% stake, far lower than Sanders' target](https://arstechnica.com/tech-policy/2026/07/openai-floats-giving-us-5-stake-to-win-over-ai-haters/)** - OpenAIが米国政府に自社株式の5%を提供する案を提示したが、これはサンダース議員らが求めていた水準を大きく下回るという。AI企業の利益を公共に還元すべきだという政治的圧力と、企業側の実際の譲歩幅とのギャップが浮き彫りになっている。
- **[Ars Live recap: When are the big rockets NASA desperately needs going to be ready?](https://arstechnica.com/space/2026/07/ars-live-recap-when-are-the-big-rockets-nasa-desperately-needs-going-to-be-ready/)** - NASAが必要としている大型ロケット（SLSやStarshipなど）の開発状況について専門家が議論したライブイベントのまとめ記事。複数の商業・政府ロケット計画の遅延が重なる中、月面着陸計画全体のスケジュールへの影響が論じられている。
- **[Plex debuts 5-year membership pass for $250](https://arstechnica.com/gadgets/2026/07/250-used-to-get-you-a-lifetime-plex-pass-now-you-get-a-five-year-subscription/)** - メディアサーバーソフトPlexが、かつての「生涯パス」に代えて250ドルで5年間有効な会員パスを新たに導入した。サブスクリプション移行が進む中、買い切りモデルを好んできたセルフホスト愛好者にとっては実質的な値上げと受け止められている。
- **[Tesla sales increase by 25% in Q2 2026](https://arstechnica.com/cars/2026/07/tesla-sales-increase-by-25-in-q2-2026/)** - Teslaの2026年第2四半期の販売台数が前年比25%増となったと報じられた。低価格版モデルの投入や地域展開の拡大が販売を押し上げた形で、EV市場全体の需要動向を占う指標として注目される。

## 注目トピック

今日目立つのは、AIエージェントに「実行権限」を持たせることの代償が具体化してきた点だ。dev.toではAI生成コードをFirecracker製マイクロVMで隔離実行する「CreateOS Sandbox」が紹介される一方、Lobstersでは自身のOSS依存関係にLLM生成コードを含めない方針を明言するメンテナーの記事が読まれた。エージェントが自律的にコードを書き実行する範囲が広がるほど、「誰が何を検証し、どこまで信頼するか」という境界線を明示的に設計する必要性が、セキュリティとソフトウェア工学の両面から突きつけられている。

もう一つの軸は、AI投資への過熱と現実のギャップを冷静に見つめ直す論調だ。Zuckerberg氏自身が社内でAIエージェントの進捗が期待より遅いと認め、TechCrunchはサンドイッチチェーンのIPO書類にまでAIへの言及が紛れ込む「AIハイプ」の異常さを皮肉った。同時にはてなブックマークでは「理解してから働く時代が終わるかもしれない」というエッセイが210usersを集めており、AIエージェントに仕事を委ねる働き方への期待と、投資対効果への懐疑が並走する一日だった。
