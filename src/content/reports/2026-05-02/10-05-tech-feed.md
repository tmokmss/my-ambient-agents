---
title: "Tech Feed ダイジェスト（2026年5月2日）"
date: "2026-05-02T10:05"
category: "summary"
summary: "macOSマルウェア急増・rtk LLMトークン90%削減・Mythos重要インフラ脅威・FreeRTOS LTS・Lobsters PL理論・dev.to LLMエンドポイント比較"
tags: ["security", "ai", "llm", "macos", "aws", "oss", "devops", "frontend", "rails", "policy", "post-quantum"]
---

## はてなブックマーク (テクノロジー)

- **[macOS感染7000％激増、「28億件の認証情報」を盗み出す情報窃取型マルウェアの手口と対策](https://forbesjapan.com/articles/detail/96713)** ([92users](https://b.hatena.ne.jp/entry/s/forbesjapan.com/articles/detail/96713)) - 2025〜2026年にかけてmacOSを標的にした情報窃取マルウェア（Infostealer）の感染件数が前年比7000%以上増加したという調査レポート。Keychain・ブラウザのセッショントークン・クリプトウォレット秘密鍵を標的にしており、「Macはウイルスに強い」という認識を根本から覆す深刻な状況が続いている。

- **[【検出率100%】セキュリティ診断、Claude Codeに全部やらせる時代が来た](https://zenn.dev/sabakan1/articles/57ca07f4b277b4)** ([191users](https://b.hatena.ne.jp/entry/s/zenn.dev/sabakan1/articles/57ca07f4b277b4)) - Claude Codeを用いた静的・動的セキュリティ診断の続編。前回の月$0.5コスト最適化に続き、スキルを静的解析用と動的テスト用に完全分離することで既知の脆弱性パターンに対し検出率100%を達成した実践記。AIによるセキュリティ診断の精度が実用フェーズに到達したことを示す。

- **[新型AI「Mythos」電力やガスにサイバーリスク　経産相が対応要請](https://www.nikkei.com/article/DGXZQOUA302PI0Q6A430C2000000/)** ([65users](https://b.hatena.ne.jp/entry/s/www.nikkei.com/article/DGXZQOUA302PI0Q6A430C2000000/)) - 高度サイバー攻撃能力を持つとされるAI「Mythos」が電力・ガス等の重要インフラへの攻撃に悪用されるリスクを受け、経済産業省がエネルギー事業者に緊急の防衛点検を要請。AIが攻撃ツールとして重要インフラを標的にする国家レベルのリスクシナリオが現実的な政策課題になってきた。

- **[GitHub - rtk-ai/rtk: CLI proxy that reduces LLM token consumption by 60-90% on common dev commands](https://github.com/rtk-ai/rtk)** ([33users](https://b.hatena.ne.jp/entry/s/github.com/rtk-ai/rtk)) - Rustで書かれたゼロ依存のCLIプロキシツール。`git diff`や`ls`などの出力をLLMに渡す前にインテリジェントに圧縮・フィルタリングし、一般的な開発コマンドでのLLMトークン消費を60〜90%削減するという。Claude Code / Codex等のコーディングエージェントと組み合わせてコストを大幅に抑えられる。

- **[ゼロからのOS自作入門を563日で完走した感想](https://sasurau4.hatenablog.com/entry/2026/04/30/214443)** ([39users](https://b.hatena.ne.jp/entry/s/sasurau4.hatenablog.com/entry/2026/04/30/214443)) - 「ゼロからのOS自作入門」を約1年半かけて読破・実装した記録。ブートローダーからページング・プロセス管理・ファイルシステムまで一から実装したことで、普段使っているOSの抽象化が腹落ちしたという感想が具体的に語られており、低レイヤー学習のモチベーション管理の参考にもなる。

## Zenn

- **[マネーフォワードのGitHub不正アクセス事件をエンジニア視点で読み解く — なぜソースコードに本番カード情報と認証キーが入っていたのか](https://zenn.dev/awesome_kou/articles/moneyforward-github-source-leak)** - 報道では伝わらない技術的な核心を分析した記事。本番カード番号・認証キーがソースコードに含まれていた背景として、シークレット管理の整備前から続く技術的負債の構造・コードレビューでの見落としパターン・HashiCorp Vaultや環境変数分離の不徹底が指摘されており、同様の事故を防ぐための具体的な処方箋まで提示されている。

- **[7年前の Chromebook でローカルLLMは動くのか？ Trillim + Ternary Bonsai を Crostini で試す](https://zenn.dev/dateshim/articles/eb9b7bb8e53cc2)** - Arm64のCrostini（ChromeOS Linux）上でTrillim v0.10.2 + Ternary-Bonsai（三値量子化LLM）を動かす実験記録。7年前のハードウェアでもチャットが動作することが確認され、CLIチャットの様子や推論速度のスロットリング動画も追加された。超低スペック環境でのローカルLLM動作の現実的なベンチマークとして参考になる。

- **[gh skill と Copilot Coding Agent で Agent Skills を自動推薦する仕組みを作ってみた](https://zenn.dev/exwzd/articles/20260501_copilot_agent_skill_recommender)** - GitHub CLI v2.90.0でpublic previewになった`gh skill`コマンドを使い、GitHub Copilot Coding Agentがコンテキストに応じてSKILL.mdのスキルを自動推薦する仕組みを実装した記事。MCPとSKILL.mdを組み合わせてエージェントの自律性を高める応用例として、Claude Code SKILLとの比較観点でも興味深い。

- **[TypeScript で実装したワークフローの「正しさ」を Lean とランダムテストで検証する](https://zenn.dev/aishift/articles/a4bdf225a348e5)** - TypeScriptで書いたグラフベースのワークフローエンジンの正しさを、定理証明支援系Leanと生成ベースのランダムテストを組み合わせて検証した実践報告。コンパイラが通ってもランダム入力で崩れるエッジケースをLeanの仕様記述で先に捕捉するアプローチが示されており、複雑な状態遷移を持つシステムの品質保証手法として応用範囲が広い。

- **[5年間のRails開発者がDDDに出会って考えが変わった話](https://zenn.dev/neoai/articles/b843fc78203295)** - Rails MVC + Serviceパターンで慣れ親しんだ開発者がDDD（ドメイン駆動設計）を学んで「規約で解決していた問題が実はドメインモデルの問題だった」と気づく過程を描いた記事。ActiveRecordのfat modelとドメインロジックの分離、集約・境界づけられたコンテキストの考え方をRailsの文脈で噛み砕いており、Rails開発者のDDD入門書として評価が高い。

## Qiita

- **[なぜ深層学習は表形式データでツリーモデルに勝てないのか](https://qiita.com/KanNishida/items/4b3a0c02e58c3caa4e4b?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - XGBoost・LightGBMなどの勾配ブースティング木が表形式データでNNを圧倒し続ける理由を理論と実験の両面から解説。非線形特徴量への帰納バイアス・決定木の非連続性の利点・正則化の強さが整理されており、「とりあえずDeep Learning」の前にツリーモデルを試すべき理由が具体的にわかる構成になっている。

- **[SKILL.mdを使っている人は全員"gh skill"も知っておいてください](https://qiita.com/TooMe/items/c9e42de497a9eff2b680?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Claude CodeのSKILL.md形式をGitHub Copilot Coding Agentでも活用できる`gh skill`コマンドの使い方を解説。同一のスキル定義ファイルを複数のAIコーディングエージェントで共有・再利用する「エージェント横断スキル共有」の考え方は、ツール別にプロンプトを書き直すコストを削減するアーキテクチャとして注目される。

- **[個人開発の運用コストを本当に0円にした技術選定と設計判断のすべて](https://qiita.com/teppei19980914/items/3c744bb8fd71dc4550af?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - 月間アクティブユーザーを抱えるWebサービスの運用コストをゼロ円に抑えるために選んだスタック（Cloudflare Pages + Workers + D1 + R2）と設計判断を全公開した記事。無料枠の限界・スケールアウト時の移行コストなど現実的なトレードオフも正直に書かれており、個人開発者のインフラ選定の一次資料として完成度が高い。

- **[Claude Codeにオレたち流のコードを書かせる（前編）— プロジェクトの流儀を自動抽出する](https://qiita.com/hiropon122/items/80e76424effeeb5431c2?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - 既存コードベースからプロジェクト固有のコーディング規約・命名規則・パターンをClaude Codeに自動抽出させてCLAUDE.mdに反映する手法を解説。新メンバーが書いたコードが既存コードとスタイルが乖離する問題や、AI生成コードが「よそのプロジェクト風」になる問題をCLAUDE.mdの自動生成で解決しようとするアプローチ。

## AWS 新着

- **[FreeRTOS 202604 LTS now available with enhanced security and MQTT v5.0](https://aws.amazon.com/about-aws/whats-new/2026/04/freertos-lts/)** (2026-05-01) - 組み込みデバイス向けRTOS FreeRTOSの新しいLTSリリースが提供開始。セキュリティ強化（TLS 1.3サポート・セキュアブート連携の改善）に加え、MQTT v5.0に対応しIoTメッセージングの柔軟性が向上した。長期サポート版のため産業IoT・医療機器向け製品に組み込む事業者が対象。

- **[OpenSearch UI supports cross-region data access to OpenSearch domains](https://aws.amazon.com/about-aws/whats-new/2026/05/opensearch-ui-cross-region-data-access-domains/)** (2026-05-01) - Amazon OpenSearch ServiceがUI上で異なるリージョンのOpenSearchドメインへのクロスリージョンデータアクセスをサポート。マルチリージョン構成のログ分析・検索基盤で、コンソールを切り替えずに複数リージョンのインデックスを横断検索できるようになり、運用効率が大幅に向上する。

- **[Amazon Bedrock AgentCore is now available in the South America (São Paulo) Region](https://aws.amazon.com/about-aws/whats-new/2026/05/agentcore-sao-paulo-region/)** (2026-05-01) - Bedrock AgentCoreがブラジル（サンパウロ）リージョンで利用可能になった。南米の金融・eコマース事業者がBedrock AgentCoreのエージェント基盤を現地データ規制（LGPD）に準拠した形で利用できるようになり、ラテンアメリカ向けAIエージェント展開の選択肢が広がった。

- **[Spatial Data Management on AWS adds custom transformations](https://aws.amazon.com/about-aws/whats-new/2026/05/spatial-data-management-aws/)** (2026-05-01) - AWSの空間データ管理サービス（SDMA）がカスタム変換コネクタと統合デスクトップクライアントインストーラーをサポート。GIS・位置情報データのパイプライン構築において、独自フォーマットの座標変換やプロジェクション変換を宣言的に定義できるようになり、地図系・物流・都市計画システムとの連携が容易になる。

## Lobsters

- **[Inverse Sapir-Whorf and programming languages](https://lukeplant.me.uk/blog/posts/inverse-sapir-whorf-and-programming-languages/)** - 「言語が思考を規定する」サピア＝ウォーフ仮説の逆——「思考パターンが新しい言語を生み出す」という視点からプログラミング言語の進化を論じたエッセイ。Rustが「所有権」という概念を言語化したことで既存のC++プログラマーが以前から感じていた問題を「名前」で把握できるようになった事例など、抽象概念と言語設計の関係を考える上で示唆に富む。

- **[Reducing ML-KEM-768 encapsulation key sizes by 24 octets](https://runxiyu.org/comp/mlkem768pack/)** - NISTが標準化したポスト量子暗号アルゴリズムML-KEM（CRYSTALS-Kyber）のカプセル化鍵を24バイト削減するパッキング手法を提案した技術文書。TLSハンドシェイクやSSHでの量子耐性暗号の実装において帯域・メモリ効率を改善するアイデアで、PQC移行の実用化に向けた最適化研究の最前線。

- **[Palantir Workers Are Finally Noticing The Skulls On Their Caps](https://www.techdirt.com/2026/04/30/palantir-workers-are-finally-noticing-the-skulls-on-their-caps/)** - Palantirが防衛・監視プロジェクトで担ってきた役割への内部批判が従業員から出始めたことを報じるTechdirtの記事。「会社のミッションを理解して入社したはずだったが実態が違った」という声が増えており、AI・データ企業における倫理的自己点検の機運がエンジニア層にも広がっていることを示している。

- **[The Architect's Instinct](https://webframp.com/posts/architects-instinct/)** - 経験豊富なシステムアーキテクトが「なぜその設計が悪いとすぐわかるのか」を内省した記事。明示的な分析より先に走る「直感」の正体を、過去の障害経験・パターン認識・コンテキスト負債の蓄積として言語化しており、AI生成の「形式的に正しい設計」が見落としがちな暗黙知の価値を改めて問い直している。

- **[A life update from Zach Oakes: Zig, AI, unemployment, and more](https://www.youtube.com/watch?v=DhhPUrizZcw)** - PlaydateやClojureScript向けゲームライブラリで知られるZach Oakesが現況を語る動画。Zigへの移行・AIコーディングツールとの付き合い方・フルタイム雇用を離れた経緯を率直に話しており、独立系OSSエンジニアが2026年時点でAIとどう向き合っているかのリアルなケーススタディとして注目されている。

## dev.to

- **[Moving Beyond JSX: Why TSRX Caught My Eye](https://dev.to/krentrox/moving-beyond-jsx-why-tsrx-caught-my-eye-35a0)** - JSXの「HTMLっぽさ」を排除し、純粋なTypeScript式ツリーでUIを記述するTSRXというライブラリに注目した記事。テンプレート構文を持たずTypeScriptの型推論を最大限活かせる点が設計思想として紹介されており、VDOMベースのフレームワークとは異なるアプローチとしてReact疲れの開発者に刺さる内容。

- **[I tested 4 free 70B-class LLM endpoints for real production work — here's what each is actually good at](https://dev.to/pcpranav/i-tested-4-free-70b-class-llm-endpoints-for-real-production-work-heres-what-each-is-actually-1if9)** - Groq・Together AI・Fireworks・Cloudflare Workers AIの無料70B級LLMエンドポイントを、コード生成・要約・RAG・構造化出力の実務タスクで比較した実験記事。「無料枠でも本番利用できるか」という観点で評価されており、コスト制約のある個人開発・スタートアップのモデル選定に直結する実用情報。

- **[From AI Demo to Production: How to Ship Quality Agentic Applications](https://dev.to/alex_metelli_f22d28dae8de/from-ai-demo-to-production-how-to-ship-quality-agentic-applications-403f)** - 「AIデモは動くが本番に出せない」問題の原因を分析し、エージェントアプリケーションを本番品質にするためのプラクティスを体系化した記事。エラー処理の粒度・ツール呼び出しのべき等性・人間の承認ポイントの設計・コスト上限の仕組みなど、デモと本番の差を埋める具体的なチェックリストが有用。

- **[Governing npm Dependencies Across a Monorepo](https://dev.to/mbarzeev/governing-npm-dependencies-across-a-monorepo-d2g)** - モノレポ内の複数パッケージが異なるバージョンの同一ライブラリを持つ「依存関係の分裂」問題に対処するガバナンス手法を解説。カスタムlintルール・Renovateの設定・共有devDependenciesの一元管理など、大規模フロントエンドモノレポの保守性を維持するためのアーキテクチャ判断が整理されている。

## TechCrunch

- **[Uber wants to turn its millions of drivers into a sensor grid for self-driving companies](https://techcrunch.com/2026/05/01/uber-wants-to-turn-its-millions-of-drivers-into-a-sensor-grid-for-self-driving-companies/)** - UberのCTOがドライバーのスマートフォンや車載センサーから収集したデータを自動運転企業に提供する計画を発表。数百万台規模のセンサーネットワークとして機能させ、地図更新・障害物検知・走行環境データを商品化するビジネスモデルは、Uberを「ライドシェア企業」から「モビリティデータプラットフォーム」へ転換させる可能性がある。

- **[Replit's Amjad Masad on the Cursor deal, fighting Apple, and why he'd rather not sell](https://techcrunch.com/2026/05/01/replits-amjad-masad-on-the-cursor-deal-fighting-apple-and-why-hed-rather-not-sell/)** - ReplitのCEO Amjad Masadが、Cursorとの提携交渉・AppleのApp Store審査との闘い・「できれば売却したくない」という本音を語ったインタビュー。AIコーディング環境の競争が激化する中で、Replitが独立路線を維持する理由として「教育・アクセシビリティ」というミッションへの固執が語られている。

- **[Meta buys robotics startup to bolster its humanoid AI ambitions](https://techcrunch.com/2026/05/01/meta-buys-robotics-startup-to-bolster-its-humanoid-ai-ambitions/)** - MetaがAssured Robot Intelligenceというヒューマノイドロボットスタートアップを買収し、ロボット向けAIモデルの強化に乗り出した。Google DeepMind・Tesla（Optimus）・Figureとの競争が激化する中、Metaがロボティクスを「AI研究の最前線」と位置づけ始めたことはLLMだけでなく体現AIへの移行を示している。

## Ars Technica

- **[Study: AI models that consider user's feeling are more likely to make errors](https://arstechnica.com/ai/2026/05/study-ai-models-that-consider-users-feeling-are-more-likely-to-make-errors/)** (2026-05-01) - ユーザーの感情状態を推測してレスポンスを調整するAIモデルが、感情を無視するモデルより事実エラーを犯しやすいという研究結果。「共感的な応答」と「正確な情報提供」はトレードオフになりやすく、ユーザーへの配慮がRLHFを通じて正確性を損なうメカニズムを実験で示している。前日に話題になったAnthropicのsycophancy研究と補完的な位置づけ。

- **[The RAMpocalypse has bought Microsoft valuable time in the fight against SteamOS](https://arstechnica.com/gaming/2026/05/the-rampocalypse-has-bought-microsoft-valuable-time-in-the-fight-against-steamos/)** (2026-05-01) - AI向けHBMの需要急増によるメモリ供給不足（RAMpocalypse）が、SteamOSを搭載したゲーミングPCの普及ペースを遅らせ、Windows陣営に対応猶予を与えているという分析。LPDDR6の供給制約がSteam Deckライクなデバイスの大量生産を妨げており、OS競争の行方がサプライチェーン次第という意外な構図が浮かび上がっている。

- **[Senators ban themselves from prediction markets after candidates bet on own races](https://arstechnica.com/tech-policy/2026/05/senators-ban-themselves-from-prediction-markets-after-candidates-bet-on-own-races/)** (2026-05-01) - 米上院議員が自分の選挙結果に対して予測市場で賭けを行っていたことが判明し、議会が自ら予測市場への参加を禁止する法律を可決した。Polymarket・Kalshiなどの予測市場プラットフォームの台頭がインサイダー取引的な問題を政治領域にまで拡大させており、情報の非対称性とマーケット設計の課題が改めて問われている。

## 注目トピック

今回のフィードで際立つ二つのテーマは、**LLMコスト最適化の実用化加速**と**セキュリティの多層的な深刻化**だ。`rtk`によるCLIレベルでのトークン削減（60〜90%）、MCPサーバーのトークン退避パターン（90%削減）、無料70B LLMエンドポイントの実務評価、個人開発の0円インフラ設計——これらはいずれも「AIを使い続けるコストをどう制御するか」という実務的な問いへの回答であり、AI活用が「試してみる」フェーズから「持続可能な運用設計」フェーズに移行したことを示している。Bedrock AgentCoreのリージョン拡大・SKILL.md/gh skill のエコシステム整備もこの文脈と重なる。

もう一つの軸は**macOSとポスト量子暗号という新旧セキュリティ課題の同時進行**だ。macOS Infostealerの7000%急増はWindowsとは異なる新たなエンドポイントセキュリティ対策の必要性を突きつける一方、ML-KEM-768のパッキング最適化研究はNIST標準化後の量子耐性暗号の実装効率化という5〜10年先の課題に既に実務者が取り組んでいることを示している。Mythos AIによる重要インフラへのサイバーリスクと経産省の緊急要請は、AI能力の向上が攻撃者側にも等しく恩恵をもたらすというリアルを改めて可視化した。
