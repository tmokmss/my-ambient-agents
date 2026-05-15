---
title: "Tech Feed ダイジェスト（2026年5月15日）"
date: "2026-05-15T11:27"
category: "summary"
summary: "東大1000倍演算素子・Claude Mythos vs Apple・Bun Rust化完了・LLMコメント問題など開発者注目ネタを横断まとめ"
tags: ["ai", "security", "aws", "rust", "llm", "hardware", "frontend", "devtools"]
---

## はてなブックマーク (テクノロジー)

- **[コンピューターの処理速度1000倍へ、東大が素子開発　発熱せず稼働](https://www.nikkei.com/article/DGXZQOSG132XK0T10C26A5000000/)** ([295users](https://b.hatena.ne.jp/entry/s/www.nikkei.com/article/DGXZQOSG132XK0T10C26A5000000/)) - 東京大学がシリコンに代わる新材料を用いた演算素子を開発し、従来比1000倍の処理速度と発熱なし動作を実現したと報告。AIワークロード拡大に伴う電力・冷却コスト問題への根本的解決策になりうる基礎研究として注目される。

- **[Claude ミュトス、Appleが5年かけたMacメモリ保護を5日で突破！](https://smhn.info/202605-anthropic-ai-breaks-apple-mac-memory-protection-5-days)** ([115users](https://b.hatena.ne.jp/entry/s/smhn.info/202605-anthropic-ai-breaks-apple-mac-memory-protection-5-days)) - AnthropicのClaude Mythosが、Appleが5年をかけて設計したMacのカーネルメモリ保護機構を5日で突破したとされる研究報告。AIを使ったエクスプロイト開発の速度が人間のセキュリティエンジニアリングを大幅に上回る可能性を示す事例として衝撃を与えている。

- **[マクドナルド「巨大セルフ注文端末」に批判殺到の理由　UI／UXに価格表示まで](https://www.itmedia.co.jp/mobile/articles/2605/14/news149.html)** ([256users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/mobile/articles/2605/14/news149.html)) - 大型化したセルフ注文端末が操作しにくい・価格がわかりにくいと批判を集めている記事。「画面が大きければ使いやすい」ではない実例として、タッチUIのアフォーダンス設計とユーザー動線を再考させる事例として議論が広がった。

- **[実践ハーネスエンジニアリング：ステアリングループを実例から読み解く](https://speakerdeck.com/nrslib/practical-harness-engineering-understanding-steering-loops-through-real-world-examples)** ([208users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/nrslib/practical-harness-engineering-understanding-steering-loops-through-real-world-examples)) - AIエージェントのハーネス（制御フレームワーク）設計において、ステアリングループという概念を実例コードで解説したスライド。Claude Code等のエージェント実行基盤を自作・カスタマイズする際の設計指針として参考になる。

- **[指標をめぐる認知バイアス - kawasima](https://scrapbox.io/kawasima/%E6%8C%87%E6%A8%99%E3%82%92%E3%82%81%E3%81%90%E3%82%8B%E8%AA%8D%E7%9F%A5%E3%83%90%E3%82%A4%E3%82%A2%E3%82%B9)** ([185users](https://b.hatena.ne.jp/entry/s/scrapbox.io/kawasima/%E6%8C%87%E6%A8%99%E3%82%92%E3%82%81%E3%81%90%E3%82%8B%E8%AA%8D%E7%9F%A5%E3%83%90%E3%82%A4%E3%82%A2%E3%82%B9)) - KPI・OKR・ベロシティなど「数値で測ること」自体が引き起こすグッドハート則・サバンナ効果・測定の自己目的化などの認知バイアスを体系的に整理したメモ。エンジニアリングマネジメントや開発プロセス改善に携わる人に刺さる内容。

## Zenn

- **[Andrej Karpathy氏のLLM Wikiを1ヶ月運用してわかった、LLMの知識を『繋げる力』](https://zenn.dev/tsurubee/articles/llm-wiki-connecting-knowledge)** - Karpathy氏が推奨するLLMをWiki的に運用するアプローチを1ヶ月実践した結果、単発の要約より「異なるタイミングで読んだソース間の横断的な気づき」こそが学習の質を上げると分かった報告。ナレッジ管理とLLM活用を組み合わせる実践ノウハウ。

- **[Agent Registry で動的に Harness (MCP/Skill) や A2A Agent を検索・実行する Agent の実装](https://zenn.dev/aws_japan/articles/005-bedrock-agent-registry-dynamic-loading)** - AWS Japan が解説する、エージェントが実行時に使えるMCPサーバーやSkillを動的に探索・呼び出す「Agent Registry」パターンの実装例。組織内で開発した複数のハーネスを横断利用するための設計として、マルチエージェント基盤の実務的な課題に応えている。

- **[Claudeに魂を吹き込む人 —Amanda Askellという哲学者の眼差し](https://zenn.dev/noah33/articles/amanda-askell-claude-soul)** - Anthropicで「クロードの人格」設計を担うAmanda Askell氏を紹介した記事。3万語に及ぶSoul Document（指針書）を通じてAIに価値観と判断力を埋め込む哲学的アプローチを解説しており、LLMのアライメント・キャラクター設計に興味のある読者に重要な視点を提供する。

- **[Amazon S3 Vectors でベクトル DB を立てずに画像検索 PoC を作る](https://zenn.dev/aldagram_tech/articles/3318a924758852)** - 新サービス「Amazon S3 Vectors」を使い、専用のベクトルDBを一台も立てずに画像の自然言語検索PoCを実装したケーススタディ。ベクトル検索の導入コストを大幅に下げる可能性を持つサービスの使い勝手を実装者目線で検証している。

- **[五反田式: スティグマジーを応用した自律型マルチエージェントシステム](https://zenn.dev/iroha1203/articles/93ee3d4c5d5174)** - 昆虫の集合知「スティグマジー（環境を介した間接コミュニケーション）」をAIコーディングエージェントに応用し、エージェント同士が直接通信せずコードという共有媒体を通じて協調する「五反田式」アーキテクチャの提案と日本語解説。

## Qiita

- **[Vibe Coding のトークン消費量の40-60%を占める Markdown 読み込みを最大98%以上圧縮する markdown-query スキル](https://qiita.com/dahatake/items/ce9917268d8d18aa9b6c?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - LLMへのコンテキスト入力の大半をMarkdownが占める問題に対し、必要な部分だけを構造的に抽出するスキル「markdown-query」でトークン消費を98%圧縮できるという実装紹介。コスト最適化とレスポンス速度の両面で直接的な効果がある。

- **[Claude Code を使うなら知っておきたい 6 つのオープンソースツール](https://qiita.com/TianqiYuan/items/e1d27a1b8d2f3d13f779?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Claude Code利用者向けに、周辺エコシステムで実用度の高いOSSツール6本を紹介した記事。Clawdmeter（使用量ダッシュボード）・各種MCPサーバー等を含み、日常的にClaude Codeを使う開発者の環境整備に役立つ。

- **[Node.jsでDateに代わる日時処理として実装された「Temporal」を触ってみた](https://qiita.com/shinkai_/items/42b52dfff934785c5f31?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Node.js/JavaScriptの長年の課題であった日時処理の混乱（タイムゾーン・DST・サマータイム問題）を根本的に解消するTC39 Temporal APIをNode.jsで実際に動かした記事。`Date`の代替として実装段階に入ったAPIの挙動確認として参考になる。

- **[s3fsで痛い目を見たので S3 Files を調べ倒した](https://qiita.com/kaga-yasumitsu/items/6335c7f2b7e511835ddb?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - S3をPOSIXファイルシステムとしてマウントする古典的手法「s3fs」の落とし穴（一貫性・パフォーマンス・コスト）を経験した上で、新サービス「Amazon S3 Files」との機能・性能差を徹底比較した実践記事。

## AWS 新着

- **[Amazon CloudFront announces Passthrough Mode for mutual TLS (Viewer)](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-cloudfront-mtls-passthrough/)** (2026-05-14) - CloudFrontが受け取ったクライアント証明書をオリジンにそのまま転送するPassthroughモードが追加。mTLS検証をCloudFront側で完結させず、オリジン（例：バックエンドAPIサーバー）が直接クライアント証明書を検証する構成が可能になる。

- **[Reference stack outputs across accounts and Regions with AWS CloudFormation and CDK](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-cloudformation-cdk-stack/)** (2026-05-14) - CloudFormationに新しい組み込み関数`Fn::GetStackOutput`が追加され、クロスアカウント・クロスリージョンのスタックアウトプットをテンプレート内で直接参照できるようになった。マルチアカウント構成で共有リソースのARNを手動管理する煩雑さが解消される。

- **[ARC Region Switch adds Lambda event source mapping execution block for event handling during failover](https://aws.amazon.com/about-aws/whats-new/2026/05/region-switch-lambda-esm-execution-block/)** (2026-05-14) - ARC（Application Recovery Controller）のリージョンスイッチ機能に、フェイルオーバー中のLambdaイベントソースマッピング実行ブロックが追加。フェイルオーバー中に二重処理が発生しないよう制御できるようになり、マルチリージョン設計の信頼性が向上する。

- **[Three new models for speech recognition and text-to-speech available in Amazon SageMaker JumpStart](https://aws.amazon.com/about-aws/whats-new/2026/05/speech-models-on-sagemaker-jumpstart/)** (2026-05-14) - SageMaker JumpStartにQwen3-TTS（テキスト読み上げ）とQwen3-ASR（音声認識）の3モデルが追加。Alibaba製の音声基盤モデルをサーバーレスで試せる環境が整い、音声系AIアプリの開発・評価がAWS上で完結しやすくなった。

- **[Amazon RDS for PostgreSQL supports minor versions 18.4, 17.10, 16.14, 15.18, and 14.23](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-rds-postgresql/)** (2026-05-14) - 全サポートバージョン向けにセキュリティ・バグ修正を含むマイナーアップデートが提供開始。LobstersでもPostgreSQL 18.4/17.10が11 CVEs修正として話題になっており、RDS利用者は早期のアップグレード適用を推奨。

## Lobsters

- **[linux 0-day, access root-owned files as an unprivileged user](https://github.com/0xdeadbeefnetwork/ssh-keysign-pwn/)** (51pt) - ssh-keysignに起因するLinuxの0-dayが公開され、非特権ユーザーがroot所有ファイルを読み取れることが示された。CVE情報は未公開の段階で影響範囲の評価が進んでおり、Linuxサーバー管理者は動向を注視する必要がある。

- **["This is written by an LLM" comments should be flagged as off-topic](https://lobste.rs/s/wee21u/this_is_written_by_llm_comments_should_be)** (65pt) - Lobsters上でLLM生成であることを指摘するコメントをオフトピックとしてフラグすべきという提案スレッド。91件のコメントが集まり、AIコンテンツの真贋判定・品質担保の責任をプラットフォームがどう取るかという議論として展開した。

- **[Mullvad exit IPs as a fingerprinting vector](https://tmctmt.com/posts/mullvad-exit-ips-as-a-fingerprinting-vector/)** (10pt) - VPNサービス「Mullvad」のexitノードIPアドレスリストが公開情報として存在することを逆手に取り、Mullvad利用者を他のユーザーと区別するブラウザフィンガープリントとして使える可能性を示した研究。プライバシーツールが逆に識別シグナルになるパラドックスを指摘する。

- **[Amazonbot is finally respecting robots.txt](https://xeiaso.net/notes/2026/amazonbot-respecting-robots-txt/)** (26pt) - Amazonの学習データ収集ボットがようやくrobots.txtを遵守するようになったとする観察記録。以前は拒否設定を無視していたことが確認されており、ウェブオーナーのクローリング制御権という観点から遅すぎる対応への皮肉も含む記事。

- **[Browsers Treat Big Sites Differently — Prolog Basics Explained with Pokémon](https://unplannedobsolescence.com/blog/prolog-basics-pokemon/)** (16pt) - ポケモンを題材にPrologの基礎（事実・ルール・バックトラッキング）を直感的に解説した教育記事。宣言型論理プログラミングへの入門として、SQL・Datalogとの類比を交えた説明が理解しやすい。

## dev.to

- **[How We Generate 100+ Product Feeds From 300k SKUs Without Hitting the Database](https://dev.to/flashpeter7/how-we-generate-100-product-feeds-from-300k-skus-without-hitting-the-database-4lem)** - 30万SKUから100種類以上の商品フィードを毎回DBにアクセスせず生成するアーキテクチャの解説。キャッシュ戦略・差分更新・フォーマット変換パイプラインの設計が具体的で、大規模ECバックエンドのパフォーマンス設計として参考になる。

- **[agentmemory Review: Persistent Memory for AI Coding Agents](https://dev.to/andrew-ooo/agentmemory-review-persistent-memory-for-ai-coding-agents-55g2)** - AIコーディングエージェントに永続記憶を与えるOSSライブラリ「agentmemory」のレビュー。セッションをまたいでコンテキストを保持するアプローチの実装詳細と、Claude Code等の既存ツールとの統合可能性を評価している。

- **[Trust-sensitive agents need visible friction](https://dev.to/eliofbm/trust-sensitive-agents-need-visible-friction-g63)** - ユーザーの代わりに送信・実行・公開といった不可逆的アクションを行うAIエージェントは、「見える摩擦」として確認ステップを設けるべきだという設計原則の考察。完全自動化とユーザー制御のバランスをUX観点から論じており、エージェント設計者に示唆を与える。

- **[I gave the OpenAI SDK live web search by changing one line](https://dev.to/mv7/i-gave-the-openai-sdk-live-web-search-by-changing-one-line-1pd0)** - OpenAI SDKにライブウェブ検索機能を1行の変更で追加できる手法を紹介。複数のAPIサービスを手動で組み合わせる代わりに、統一インターフェース経由でリアルタイム検索を実現するアプローチで、LLMアプリの情報鮮度問題への実用的な解決策。

## TechCrunch

- **[OpenAI says Codex is coming to your phone](https://techcrunch.com/2026/05/14/openai-says-codex-is-coming-to-your-phone/)** - OpenAIがCodexをモバイルアプリから利用可能にすると発表。Claude Codeなどとの競争が激化するAIコーディングツール市場において、スマートフォンからの非同期ワークフロー管理という新たなユースケースへの対応として注目される。

- **[Lovable just backed a company that's looking to bring vibe coding to hardware](https://techcrunch.com/2026/05/14/lovable-just-backed-a-company-thats-looking-to-bring-vibe-coding-to-hardware/)** - AIコード生成「Lovable」がハードウェア開発へvibe codingを拡張しようとするスタートアップAtech（プレシード80万ドル調達）を支援。a16z・Sequoiaのスカウトファンドも参加しており、ソフトウェアのAI自動生成がECシステムや組み込み設計へ波及しつつある流れを示す。

- **[Elon Musk vs. Sam Altman — what the jury will actually decide](https://techcrunch.com/2026/05/14/what-the-jury-will-actually-decide-in-the-case-of-elon-musk-vs-sam-altman/)** - マスク対オルトマンの民事訴訟で陪審員が実際に判断するのは「OpenAIの非営利から営利への転換がマスクとの契約に違反したか」という契約上の争点だと解説。OpenAIのガバナンス変更の法的正当性を問う訴訟として業界全体の注目を集める試金石となる。

- **[Rapido raises $240M at $3B valuation](https://techcrunch.com/2026/05/15/indian-uber-rival-rapido-raises-240m-at-3b-valuation/)** - インドのUberライバル「Rapido」がバイク・オートリキシャ特化のライドヘイリングで急成長し、30億ドル評価で2.4億ドル調達。低価格・柔軟な移動手段への需要を掘り起こした戦略が新興国スタートアップの教科書事例となっている。

## Ars Technica

- **[Zero-day exploit completely defeats default Windows 11 BitLocker protections](https://arstechnica.com/security/2026/05/zero-day-exploit-completely-defeats-default-windows-11-bitlocker-protections/)** (2026-05-14) - 「YellowKey」と呼ばれるゼロデイがTPMピン未設定のWindows 11でBitLocker暗号化を物理アクセスなしに無効化できることが確認された。Microsoftのパッチは未提供であり、フルディスク暗号化ポリシーにTPMピン要求を追加するなど追加対策が急務となっている。

- **[AI invades Princeton, where 30% of students cheat—but peers won't snitch](https://arstechnica.com/tech-policy/2026/05/ai-driven-cheating-widespread-even-at-elite-schools-like-princeton/)** (2026-05-13) - プリンストン大学で学生の30%がAIを使って不正行為をしていると自己申告しているが、仲間は互いに告発しないという実態調査。従来の「名誉制度」が機能しなくなりつつある現象として、教育評価システムのAI対応の難しさを示している。

- **[AMD promises to bring improved FSR 4.1 to older RDNA 3/2 GPUs](https://arstechnica.com/gadgets/2026/05/amd-promises-to-bring-improved-hardware-backed-fsr-4-upscaling-to-older-radeon-gpus/)** (2026-05-14) - AMDがFSR 4.1を旧世代のRDNA3・RDNA2 GPUに対応させると発表。最新GPUでのみ使えていたアップスケーリング改善をより広いユーザー層に提供する方針はNVIDIAのDLSS戦略と対照的で、オープン性を打ち出したものの処理コストの増大が懸念される。

- **[Trump taps Tim Cook, Jensen Huang, Elon Musk to attend Xi Jinping summit](https://arstechnica.com/tech-policy/2026/05/desperate-trump-taps-tim-apple-jensen-huang-elon-musk-to-attend-xi-summit/)** (2026-05-14) - 米中サミットにApple・NVIDIA・xAIのCEOが召集された。半導体輸出規制の緩和やTSMCをめぐる外交交渉に業界トップが直接関与する構図で、AIチップ・先端半導体のサプライチェーンに直接影響する政治的局面として開発者コミュニティも注視している。

## 注目トピック

**AIのセキュリティへの両面的影響**が今週の最大テーマとなった。Claude MythosがAppleのMac向けメモリ保護を5日で突破したとする報告は、AIが攻撃側ツールとして従来の防御サイクルを根本的に変えうることを示した。同時に、Windows 11 BitLockerのゼロデイ「YellowKey」・Linux 0-day・Mullvad VPNのフィンガープリント問題・NGINX/PostgreSQLのCVE対応と、防御側も複数の深刻な脆弱性対応に迫られる週となった。インフラ管理者には PostgreSQL と NGINX の即時パッチ適用が優先課題となる。

**ハードウェアとインフラの新潮流**も見逃せない。東京大学の1000倍高速・無発熱演算素子は基礎研究段階ながら、AIワークロードの消費電力問題に対するシリコン限界突破の方向性を示している。一方でAWSのCloudFormationクロスアカウント参照・ARC Lambda制御・S3 VectorsなどAWSの新機能群は「マルチアカウント・マルチリージョン構成の複雑さを吸収する方向」に一貫して進化しており、インフラ管理の抽象化レイヤーがさらに上昇している。AIコーディングツール（OpenAI Codex モバイル展開・Vibe Coding to Hardware）とエージェント設計論（ハーネスエンジニアリング・信頼感応型摩擦設計・Agent Registry）の両軸でも活発な議論が続いており、「AIエージェントをどう制御・信頼するか」という設計哲学が2026年の中心課題として浮かび上がっている。
