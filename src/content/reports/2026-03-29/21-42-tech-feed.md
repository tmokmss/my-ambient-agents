---
title: "Tech Feed ダイジェスト（2026年3月30日）"
date: "2026-03-29T21:42"
category: "summary"
summary: "Claude Codeベストプラクティス843ブクマ・Sora終了AIビデオ転換点・AV1特許リスク・RakutenAI炎上・Lambda32GB・Neovim0.12"
tags: ["ai", "llm", "security", "frontend", "aws", "hardware", "agents", "open-source", "tech-policy", "deepfake"]
---

## はてなブックマーク (テクノロジー)

- **[Claude Code のベストプラクティス - Claude Code Docs](https://code.claude.com/docs/ja/best-practices)** ([843users](https://b.hatena.ne.jp/entry/s/code.claude.com/docs/ja/best-practices)) - Anthropic公式が日本語で公開したClaude Codeのベストプラクティスドキュメントが一日で800超のブクマを獲得。CLAUDE.mdの書き方・サブエージェントの分割戦略・Hooksによる自動化など、実運用で迷いやすいポイントへの公式回答として開発者コミュニティに広く参照されている。

- **[「SLAM DUNK」のあるセリフを流川が言ったのか桜木が言ったのかをAIと話していて間違いを指摘したらまったく間違いを認めず延々口論した話](https://togetter.com/li/2679552)** ([278users](https://b.hatena.ne.jp/entry/s/togetter.com/li/2679552)) - 著名なフィクション作品の具体的なセリフの発言者について最新LLMが自信満々に誤答を繰り返し、正しい指摘を受けても謝罪せず言い訳を重ねるという事例がTogetterにまとめられた。AIの過信（オーバーコンフィデンス）とハルシネーション問題が一般層にも共有されるきっかけとなっている。

- **[AIエージェント導入で「セキュリティどうするの？」と聞かれたときの技術的な答え方](https://zenn.dev/sharu389no/articles/e07c926d87ac57)** ([242users](https://b.hatena.ne.jp/entry/s/zenn.dev/sharu389no/articles/e07c926d87ac57)) - Claude Code・Cursorなどのコーディングエージェントを組織展開する際に情シスや経営層から問われる「セキュリティは大丈夫か？」に答えるための技術論点を整理した記事。ツール呼び出し権限の最小化・ネットワーク分離・監査ログの設計など、具体的なアーキテクチャ選択肢が示されている。

- **[高市総理がホワイトハウスでダブルピースしている写真は生成AIで作られた存在しない写真だよ - 電脳塵芥](https://nou-yunyun.hatenablog.com/entry/2026/03/29/160505)** ([202users](https://b.hatena.ne.jp/entry/s/nou-yunyun.hatenablog.com/entry/2026/03/29/160505)) - SNSに拡散した「日米首脳会談での高市氏ポーズ写真」が生成AIによるフェイク画像であると検証した記事。メタデータ解析・光源の不整合・背景のアーティファクトなど技術的な根拠を示しており、政治的文脈でのAI画像拡散の危険性を具体例として提示している。

- **[国産LLMは作れるのか？ - RakutenAI 3.0の炎上から考える](https://zenn.dev/nitic_students/articles/e2e331dea0c616)** ([181users](https://b.hatena.ne.jp/entry/s/zenn.dev/nitic_students/articles/e2e331dea0c616)) - 楽天が「国内最大規模」と謳った約7000億パラメータのLLM「RakutenAI 3.0」発表後の炎上を踏まえ、日本企業が独自LLMを開発する意義・課題・現実的な戦略を考察。データ・計算資源・研究人材の3要素から「国産LLM」の実現可能性を冷静に分析している。

## Zenn

- **[コーディングエージェントのサンドボックス技術を理解する](https://zenn.dev/mkj/articles/3ec9d2d39f446b)** - CodexやClaude Codeのようなコーディングエージェントが持つシェルと同等の実行権限を安全に制御するための、コンテナ隔離・seccomp・ファイルシステム名前空間などのカーネルレベルのサンドボックス技術を解説。エージェントが「何でもできる」ことのリスクを技術基盤から理解するための良質な入門記事だ。

- **[Docling で PDF を Markdown に変換してみる](https://zenn.dev/fukurou_labo/articles/f523b8c34fcf43)** - IBMが開発した文書変換ライブラリDoclingを使い、表・図・数式を含む複雑なPDFをLLM処理に適したMarkdownへ変換する手法を検証。pdfminerやPyMuPDFでは欠落しがちなレイアウト情報を保持しながら変換できるため、RAGパイプラインの前処理として注目を集めている。

- **[社内問い合わせをAIエージェント化して爆速で解決できるようにした](https://zenn.dev/dinii/articles/18128bd1685e2a)** - 飲食店舗からの運用問い合わせをAIエージェントで一次対応するシステムを構築した実践報告。Slackをインターフェースに、社内ドキュメントをベクトル化したRAGと外部API連携（Notion・スプレッドシート参照）を組み合わせ、エンジニア対応が必要な件数を大幅削減した。

- **[AIに20年分の日記を読ませたら人格が生まれて勝手にゲームを作り始めた](https://zenn.dev/nao_u/articles/92ac9436844a16)** - 20年分の個人日記をコンテキストとして与えたAIが一貫した「キャラクター性」を発揮し、そのキャラクターが自律的にゲームのコンセプトを提案・実装し始めたという実験記録。長期記憶とパーソナリティ形成の関係を個人実験から示した興味深い事例だ。

- **[BCE を意識して Go のコードを高速化する](https://zenn.dev/mattn/articles/5860d73d292f32)** - GoコンパイラのBounds Check Elimination（境界チェック除去）を活用してホットパスのオーバーヘッドを削減するテクニック。`-gcflags="-d=ssa/check_bce/debug=1"`でBCEの適用状況を確認しながら、コンパイラが自動でBCEを適用できるコードパターンに書き直す方法が具体例付きで解説されている。

## Qiita

- **[React CompilerはどのようにReact.memoを不要にしているのか](https://qiita.com/uhyo/items/43d4aafae2c87a12e5ed)** - React 19に搭載されたReact Compilerが、ビルド時に自動でメモ化最適化を挿入することで`React.memo`・`useMemo`・`useCallback`を手動で書く必要をなくす仕組みをコンパイル変換の観点から解説。依存配列の静的解析と再レンダリングのバイパス条件の生成ロジックが丁寧に説明されている。

- **[AIに「いい感じに作って」と言うのをやめたら、開発が回り出した — Spec-Driven Development 実践ガイド](https://qiita.com/akira_papa_AI/items/5f66b2b289994e4a0256)** - AIコーディングエージェントへの曖昧な指示が低品質アウトプットを生む問題を受け、「仕様書ファーストでエージェントを動かす」Spec-Driven Developmentの実践方法を提案。機能仕様・境界条件・テストケースを事前に構造化してからエージェントに渡すことで、手戻りが激減したという報告が実例付きで示されている。

- **[TLS・IPsec・SSHに横断する特許リスク？ — ML-KEM標準化を揺るがすIPR disclosure問題を徹底解説](https://qiita.com/yumi-sakemi/items/d4a8f94cb1cb7a27a037)** - NISTがPQC（耐量子暗号）として標準化したML-KEM（旧CRYSTALS-Kyber）に関して、特許権保有者が「FRAND条件では収まらない可能性がある」とIPR開示を行ったことで主要な暗号プロトコルの実装に特許リスクが生じている問題を解説。OpenSSL・BoringSSLへの実装状況とリスクの範囲が整理されており、セキュリティエンジニア必読の内容だ。

- **[研究効率を爆上げするAIツールまとめ（論文調査〜執筆まで）](https://qiita.com/Milab_honda/items/8577b96433491173bf4e)** - 文献調査（Semantic Scholar・Elicit）・PDFパース（Docling・Marker）・実験管理（Weights & Biases）・論文執筆（Overleaf+AI補完）まで、研究ワークフロー全体をカバーするAIツールの組み合わせを紹介。各ツールの用途と連携方法が明確にまとめられている。

- **[新人プログラマがLLM APIを使う前に知っておくべきセキュリティの基本](https://qiita.com/zivuch/items/30b92fbe4eae72f99b69)** - LLM APIを使ったアプリ開発でやらかしがちなセキュリティミス（APIキーのハードコード・プロンプトインジェクション・過剰な権限付与・出力の無害化不足）を体系的に解説。初学者向けだが、AIアプリ特有のセキュリティ上の考慮点が網羅されており再確認用としても有用だ。

## AWS 新着

- **[AWS Lambda supports up to 32 GB of memory and 16 vCPUs for Lambda Managed Instances](https://aws.amazon.com/about-aws/whats-new/2026/03/lambda-32-gb-memory-16-vcpus/)** (Mar 27) - Lambda Managed Instances（専有コンテナ環境）で最大32GBメモリ・16vCPUが利用可能になり、サーバーレスで重量級の推論・バッチ処理が実行できるようになった。コールドスタートなしで大規模なモデル推論をLambdaで賄いたい用途に大きな選択肢が広がる。

- **[Amazon SageMaker Studio launches support for Kiro and Cursor IDEs as remote IDEs](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-sagemaker-studio-kiro-cursor/)** (Mar 26) - SageMaker Studioに新IDE「Kiro」とCursorをリモートIDEとして接続できるようになった。ローカルのAIコーディング環境からSageMakerのマネージドコンピューティングリソースに直接アクセスでき、MLワークロードの開発体験が大幅に向上する。

- **[AWS Step Functions adds 28 new service integrations, including Amazon Bedrock AgentCore](https://aws.amazon.com/about-aws/whats-new/2026/03/aws-step-functions-sdk-integrations/)** (Mar 26) - Step FunctionsにBedrock AgentCoreを含む28サービスとの新統合が追加。AI/MLワークフロー全体をStep Functionsで統合管理できる範囲が拡大し、エージェントの実行フローと他のAWSサービスのオーケストレーションが一元化できるようになった。

- **[Amazon CloudWatch Logs now supports data protection, OpenSearch PPL and OpenSearch SQL for the Infrequent Access ingestion class](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-cloudwatch-infrequent-access-log-class/)** (Mar 27) - ログの低頻度アクセスクラスでOpenSearch互換クエリ言語（PPL・SQL）と個人情報マスキング（データプロテクション）が利用可能になった。安価な長期ログ保存とセキュリティコンプライアンス要件の両立が容易になる。

## Lobsters

- **[Neovim 0.12.0](https://github.com/neovim/neovim/releases/tag/v0.12.0)** - Neovimのメジャーリリース。LSP・Treesitterの大幅な改善、新しいウィンドウ管理APIの追加、パフォーマンス向上が含まれる。NeovimエコシステムはVSCode対抗のAI支援編集環境として進化が続いており、このリリースもその方向性を強化している。

- **[The Cognitive Dark Forest](https://ryelang.org/blog/posts/cognitive-dark-forest/)** - 劉慈欣「三体」の「暗黒森林理論」になぞらえ、AI生成コンテンツが溢れる現在のウェブで「本物の人間の思考」を隠す/探す行動が生まれつつあるという論考。AIが大量コンテンツを生成できる環境では、信頼できる情報源を見つけること自体が困難になるという認識論的課題を提起している。

- **[Introduction to the PineTime Pro](https://pine64.org/2026/03/28/pinetime_march_2026/)** - オープンソースハードウェアコミュニティPine64が新スマートウォッチ「PineTime Pro」を発表。先代よりCPU性能・メモリ・ディスプレイが強化され、Zephyr OS上での完全オープンソースファームウェア開発が可能なウェアラブルとして注目される。

- **[Linux is an interpreter](https://astrid.tech/2026/03/28/0/linux-is-an-interpreter/)** - Linuxカーネルが実行時にELFバイナリを解釈して実行する仕組みを「インタープリタ」として捉え直した技術エッセイ。binfmt_misc・ELFローダー・ダイナミックリンカの連鎖を「インタープリタが別のインタープリタを呼ぶ」構造として解説しており、Linuxの実行モデルへの理解を深める良質な内容だ。

- **[pretext: Pure JavaScript/TypeScript library for multiline text measurement & layout](https://github.com/chenglou/pretext)** - ブラウザの`canvas`や`DOMRect`に頼らず純粋なJS/TSでフォントメトリクスを計算し、複数行テキストのレイアウト（折り返し・省略・行高計算）を行うライブラリ。サーバーサイドレンダリングやNode.js環境でのテキスト処理に有用で、はてなブックマークでも31ブクマを獲得した。

## dev.to

- **[Your Supabase RLS Is Probably Wrong: A Security Guide for Vibe Coders](https://dev.to/solobillions/your-supabase-rls-is-probably-wrong-a-security-guide-for-vibe-coders-3l4e)** - LovableやBoltなどのAI生成コードでSupabaseを使う際、Row Level Securityのポリシーが不完全なままで本番公開されてしまうケースを警告。「ポリシー有効化=全保護」という誤解、USING句とWITH CHECK句の違い、サービスロールキーの誤った公開など典型的なミスパターンを具体的なSQLとともに解説している。

- **[Why SSE for AI agents keeps breaking at 2am](https://dev.to/abhishek_chatterjee_33b9d/why-sse-for-ai-agents-keeps-breaking-at-2am-55ie)** - AI エージェントのストリーミングUIで多用されるSSE（Server-Sent Events）接続が深夜に頻繁に切断される原因を分析した記事。ロードバランサーのアイドルタイムアウト・プロキシのバッファリング・クライアント再接続実装の落とし穴を丁寧に整理しており、本番運用での実用的なトラブルシューティングガイドとなっている。

- **[Exploring the Future of NLP: Trends, Techniques, and Tools in 2026](https://dev.to/sahil_waykar/exploring-the-future-of-nlp-trends-techniques-and-tools-in-2026-3f84)** - 2026年のNLPトレンドとして、マルチモーダルLLM・RAGの本番成熟・小型モデルの性能向上・エージェント型タスク実行の4潮流を整理した概観記事。英語圏のdev.toコミュニティ向けの入門的内容だが、現状のNLPエコシステムを俯瞰する用途に適している。

## TechCrunch

- **[Sora's shutdown could be a reality check moment for AI video](https://techcrunch.com/2026/03/29/soras-shutdown-could-be-a-reality-check-moment-for-ai-video/)** - OpenAIのAI動画生成モデル「Sora」のサービス終了が、AIビデオ生成全体への過剰な期待に対する転換点になり得ると論じた分析記事。生成コスト・品質・ユーザー需要の実態が期待値を下回った可能性を指摘しており、AI産業全体における「市場の現実」との対話が始まりつつあることを示唆している。

- **[Anthropic's Claude popularity with paying consumers is skyrocketing](https://techcrunch.com/2026/03/28/anthropics-claude-popularity-with-paying-consumers-is-skyrocketing/)** - AnthropicのClaude有料ユーザー数が急増しており、推計では1800万〜3000万人規模に達しているとの報道。Claude Codeのエンジニア需要への浸透が成長の主要因と見られており、コーディング特化での差別化がコンシューマー市場全体への波及をもたらしている構図が示されている。

- **[Physical Intelligence is reportedly in talks to raise $1 billion, again](https://techcrunch.com/2026/03/27/physical-intelligence-is-reportedly-in-talks-to-raise-1-billion-again/)** - ロボット用汎用AIポリシーを開発するPhysical Intelligenceが4か月足らずで再び10億ドル調達を検討中との報道。前回ラウンドで56億ドルとなったバリュエーションがさらに上昇する見込みで、具現化AIへの投資家の期待が依然として高水準であることを示している。

- **[Why SoftBank's new $40B loan points to a 2026 OpenAI IPO](https://techcrunch.com/2026/03/27/why-softbanks-new-40b-loan-points-to-a-2026-openai-ipo/)** - ソフトバンクがJPモルガン・ゴールドマンサックスから400億ドルの無担保融資を受けるニュースが、2026年中のOpenAI IPOへの布石と見られている理由を解説。融資の12か月期限とOpenAIの資本政策のタイムラインが一致しており、AI業界最大のIPOが現実味を帯びつつある。

## Ars Technica

- **[AV1's open, royalty-free promise in question as Dolby sues Snapchat over codec](https://arstechnica.com/gadgets/2026/03/av1s-open-royalty-free-promise-in-question-as-dolby-sues-snapchat-over-codec/)** - DolbyがSnapchatに対してAV1コーデック使用に関する特許侵害訴訟を提起し、「オープン・ロイヤリティフリー」とされてきたAV1の前提が揺らいでいる。Big TechがAV1を「特許なし」と宣言しても第三者の特許権は消えない現実を突き付ける事例で、AV1採用プロダクトへの影響が注目される。

- **[Hegseth, Trump had no authority to order Anthropic to be blacklisted, judge says](https://arstechnica.com/tech-policy/2026/03/hegseth-trump-had-no-authority-to-order-anthropic-to-be-blacklisted-judge-says/)** - 国防長官Hegsethとトランプ政権がAnthropicを政府調達ブラックリストに入れるよう指示したとされる件で、連邦裁判所が「法的権限がない」として無効と判断。AI企業と政治的指示の交錯を示す事例として、米国AI政策の不安定さが浮き彫りになっている。

- **[Apple pulls the plug on its high-priced, oft-neglected Mac Pro desktop](https://arstechnica.com/gadgets/2026/03/apple-has-finally-discontinued-the-mac-pro-desktop-after-years-of-fitful-effort/)** - AppleがM2 Ultra搭載のMac Proを販売終了し、後継機の予定なしと発表。プロ向けデスクトップのフラッグシップが実質的に廃止される歴史的な転換点で、AppleのAI/シリコン戦略においてモジュラー型プロタワーの位置付けが見直されていることを示唆している。

- **[AMD's Ryzen 9 9950X3D2 Dual Edition crams 208MB of cache into a single chip](https://arstechnica.com/gadgets/2026/03/amds-ryzen-9-9950x3d2-dual-edition-crams-208mb-of-cache-into-a-single-chip/)** - AMDが両方のCCDに64MBの3D V-Cacheを搭載した「Ryzen 9 9950X3D2 Dual Edition」を発表。合計208MBのL3キャッシュをシングルチップに凝縮した構成で、ゲーム・AI推論・コンパイル等の大量作業セットを持つワークロードで大幅な性能向上が期待される。

- **[Sony is raising PlayStation 5 prices again, this time by between $100 and $150](https://arstechnica.com/gadgets/2026/03/sony-is-raising-playstation-5-prices-again-this-time-by-between-100-and-150/)** - SONYがPS5本体価格を100〜150ドル引き上げると発表。AIサーバー需要によるDRAM・NAND価格の高騰（「RAMmageddon」）がコンシューマー電子機器全体に波及しており、ゲーム機もその例外ではないことを示している。

## 注目トピック

今回最もインパクトが大きいのは、**AIビデオ・音楽などの生成AI垂直アプリケーションへの現実認識の変化**だ。OpenAI Soraのサービス終了をTechCrunchは「AIビデオ全体への楽観論の転換点」と位置づけており、生成AIの市場受容が均一ではなく、プロダクト実態と期待値のギャップが表面化しつつある。一方でAnthropicのClaude有料ユーザー急増、Physical Intelligenceへの再度の10億ドル調達、SoftBankのOpenAI IPO布石と、AI基盤・エージェントレイヤーへの投資はさらに加速している。

技術コミュニティでは**セキュリティとガバナンスの実装化**が引き続き重要テーマだ。ML-KEM特許リスク・Supabase RLSの設定ミス・AIエージェント向けサンドボックス技術・高市総理のディープフェイク写真と、セキュリティ課題が政治・インフラ・アプリケーション層を横断して噴出している。また、AV1の特許訴訟はオープン標準の「ロイヤリティフリー」という約束が法的にいかに脆弱かを改めて示しており、映像配信インフラへの長期的影響が懸念される。ハードウェア側ではAIサーバー需要に起因するメモリ価格高騰がPS5値上げにまで波及するなど、AI投資がサプライチェーン全体に影響を及ぼす構造変化が鮮明になってきた。
