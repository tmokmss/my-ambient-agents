---
title: "Tech Feed ダイジェスト（2026年5月9日）"
date: "2026-05-09T10:13"
category: "summary"
summary: "Waza Agentフレームワーク・Harness Bench・Expo SDK 56・Zig fmt・Raspberry Pi RAM Webサーバー・量子ビット移動製造"
tags: ["ai", "claude-code", "agent", "frontend", "security", "quantum", "zig", "rust", "aws", "devops", "devex"]
---

## はてなブックマーク (テクノロジー)

- **[Claude Codeを120%使いこなす設定3選【ECC・Memory.md・Obsidian連携】](https://qiita.com/manchan/items/63745b9198f1989c2a15)** ([188users](https://b.hatena.ne.jp/entry/s/qiita.com/manchan/items/63745b9198f1989c2a15)) - Extended Context Caching（ECC）の有効化・`Memory.md`によるセッション越え記憶・ObsidianボルトをMCP経由で参照させる3つの設定を詳述。「デフォルト設定のままでは能力の半分も引き出せていない」という前提で出発しており、Claude Code本格利用者が次のステップへ進む際の実践的な出発点となる。

- **[GitHub - microsoft/waza: CLI / Framework for Agent Skills](https://github.com/microsoft/waza)** ([95users](https://b.hatena.ne.jp/entry/s/github.com/microsoft/waza)) - Microsoftが公開したエージェントスキルの作成・テスト・品質計測・改善を支援するCLI/フレームワーク。スキル単位でエージェント能力を定義・評価できる構造はAnthropicの「multi-agent coordination patterns」と相補的な立ち位置であり、企業規模でのエージェント品質管理基盤として注目される。

- **[自動テストだけでリリース判断できるチームへ - 鍵はテストの量ではなくリリース判断基準の再設計にあった](https://speakerdeck.com/ewa/redesigning-release-criteria-for-lightweight-releases)** ([81users](https://b.hatena.ne.jp/entry/s/speakerdeck.com/ewa/redesigning-release-criteria-for-lightweight-releases)) - テスト網羅率を上げるのではなく「何が通ればリリース判断できるか」というリリース基準そのものを設計し直すアプローチを解説したスライド。AIが大量のコードを生成する時代にテストをどう組み立てるかの問いへの実践的な回答として支持を集めている。

- **[Coding Agent比較用の独自のベンチマーク、Harness Benchを作ってみた話](https://nyosegawa.com/posts/harness-bench/)** ([44users](https://b.hatena.ne.jp/entry/s/nyosegawa.com/posts/harness-bench/)) - 市販のSWE-benchでは自社コードベースへの適合度が測れないという問題意識から、独自のエージェントベンチマーク「Harness Bench」を自作した事例。タスク定義・評価基準・ランナー構成の設計方針が公開されており、自社環境でコーディングエージェントを評価したいチームへの参照実装として価値が高い。

- **[無料でNotionやMiroのような自分専用知識データベースを構築できる「AFFiNE」](https://gigazine.net/news/20260509-affine/)** ([67users](https://b.hatena.ne.jp/entry/s/gigazine.net/news/20260509-affine/)) - ドキュメント・ホワイトボード・データベースを統合したオープンソースの知識管理ツール「AFFiNE」が改めて注目されている。セルフホスト可能でローカルファーストなアーキテクチャは、AIエージェントのナレッジベース基盤としての活用も視野に入る。

## Zenn

- **[Anthropic の 5 パターンで Claude Code エージェント設計を分類する](https://zenn.dev/motowo/articles/anthropic-multi-agent-coordination-patterns-guide)** - Anthropic公式が定義するGenerator-Verifier・Orchestrator-Subagent・Agent Teamsなど5つのマルチエージェント協調パターンをClaude Codeの実装に当てはめて整理した記事。「どのパターンを使っているのか曖昧なまま設計していた」状態を脱するための概念的な地図として、エージェント設計の議論品質を上げる一冊。

- **[Claude Codeの失敗をチームルールに昇格させる仕組み](https://zenn.dev/dely_jp/articles/5bc3e9cf62d776)** - AIエージェントが繰り返す同種のミスをCLAUDE.mdのルールとして蓄積・管理し、エージェントの振る舞いを段階的に改善していくサイクルの構築方法を解説。「エージェントの失敗をバグではなくルール未整備として捉え直す」という視点の転換が、チームのClaude Code運用成熟度を上げる実践的な鍵として機能している。

- **[Expo SDK 56ベータから読み解く、Expo・React Nativeの「ネイティブ志向」な進化](https://zenn.dev/tellernovel_inc/articles/fe4f4964b4f9e3)** - Expo SDK 56ベータで強化されたネイティブモジュール統合・新アーキテクチャ（JSI/Fabric）対応・ビルドパイプラインの整理を技術的に読み解いた解説。Expoがクロスプラットフォーム便宜性とネイティブパフォーマンスの両立に本腰を入れている方向性が明確に示されており、React Native採用チームの設計判断に直結する内容。

- **[1年間の育休に備えて「勝手に賢くなる」AI情報収集基盤を作った](https://zenn.dev/tokium_dev/articles/20260427_ai_tech_researcher)** - 1年の育休中もAI技術トレンドに遅れないよう、RSSフィード・論文・GitHubリリースを自動収集してLLMが要約・分類しSlackに配信するシステムを構築した実録。「人間が見に行く」から「システムが賢くなり続ける」への設計転換のアーキテクチャとコード構成が公開されており、個人規模のナレッジ自動化の具体的な参考事例。

## Qiita

- **[ClaudeCodeとCodexにコーディングを全て任せて商用レベルのUnityゲーム開発を行う【前編】](https://qiita.com/archeleeds/items/6fbf02174f308e31f284)** - Claude CodeとOpenAI Codexを役割分担させ、Unityゲームの設計・実装・デバッグを人間の介入なしで進める実験の前編。マルチエージェントでゲームロジック・UI・物理挙動を並行開発するオーケストレーション設計が詳述されており、「非エンジニアがAIだけでゲームを作る」時代の実現可能性を具体的な数値と共に検証している。

- **[Copilot StudioをClaude Code化したら、Copilot Studio自身でPower Platformを構築できた話](https://qiita.com/katohiro_fi/items/9acccd181ca2f1a75f3c)** - Microsoft Copilot StudioにClaude Code的な「自律的タスク実行」の挙動を実装し、Power Appsのフロー・テーブル・画面を会話指示だけで自動生成させることに成功した事例。ローコードプラットフォームそのものをエージェントが制御するメタ的な利用形態として、エンタープライズ向けAI活用の新しい方向性を示している。

- **[Git初心者の頃わからなかった「pullするな」の意味](https://qiita.com/shimitaro/items/bdd7cedde03974a94406)** - `git pull`がmergeを暗黙的に実行するため、fetch + rebaseに比べてコミット履歴が汚れやすい点を初心者向けに丁寧に説明した記事。AIが大量のコミットを生成する環境では履歴の可読性がさらに重要になるため、チームのGit運用ルール見直しの出発点として再評価されている。

- **[開発における記録の重要性：未来のチームを救うためのガイド](https://qiita.com/h-tanabe/items/e3037d78d5079f4123eb)** - 設計判断・試行錯誤・失敗の記録がチームの暗黙知を明示知に変え、AIエージェントへのコンテキスト提供としても有効に機能することを論じた記事。「未来の自分・AIへの手紙を書く」という記録の動機付け変化が、AIコーディング時代のドキュメント文化を変える可能性を示している。

## AWS 新着

- **[Amazon Route 53 Resolver endpoints now support additional capabilities for IPv6 query traffic](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-route-53-resolver-ipv6/)** (2026-05-07) - Route 53 ResolverのインバウンドエンドポイントにDNS64が、アウトバウンドエンドポイントにIGW経由のIPv6フォワーディングが追加され、IPv6移行期のハイブリッドDNS管理が大幅に簡素化された。IPv4/IPv6混在環境のDNS解決設計で頻出した手動変換処理が不要になる実用的なアップデート。

- **[Amazon EC2 G6 instances now available in AWS European Sovereign Cloud (Germany)](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-ec2-g6-aws-european-sovereign-cloud/)** (2026-05-07) - NVIDIA L4 GPU搭載のG6インスタンスがAWS欧州主権クラウド（ドイツ）で利用可能になった。データ主権規制（GDPR・業界規制）によりデータをドイツ国内に留める必要があるAI推論・グラフィックスワークロードに対して、高性能GPU環境が初めて提供される形となり、欧州エンタープライズのAI導入ハードルが下がる。

- **[AWS Marketplace introduces Tax management portal for sellers](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-marketplace-tax/)** (2026-05-07) - Marketplace出品者向けに請求書の確認・ダウンロードをセルフサービスで行える税務管理ポータルが追加された。これまでサポートへの問い合わせが必要だった請求書取得が自動化され、ISVがAWS Marketplace経由でグローバル販売する際の経理・税務処理の運用コストが削減される。

## Lobsters

- **[What We Lost the Last Time Code Got Cheap](https://www.poppastring.com/blog/what-we-lost-the-last-time-code-got-cheap)** (28pt) - オフショア開発によって「コードが安くなった時代」に失われたもの——設計の深さ・文脈の継承・アーキテクチャへの責任感——を振り返り、AIコーディングで同様の喪失が再来しうると論じたエッセイ。「コストが下がるとき品質のどの次元が見えなくなるか」という問いは、ヴァイブコーディング全盛の今に再読する価値がある。

- **[Serving a Website on a Raspberry Pi Zero Running Entirely in RAM](https://btxx.org/posts/memory/)** (28pt) - Raspberry Pi ZeroのSDカードを取り外し、起動時にOSとサイト全体をRAMに展開してWebサーバーを稼働させる実験の詳細記録。ストレージI/Oのボトルネック解消・耐障害性向上・SDカード寿命問題の回避という実用的な動機のもと、initramfsのカスタマイズからnginx設定まで網羅されており、組み込みWebサーバーの極限チューニング例として秀逸。

- **[I learned something about GPUs today](https://foon.uk/blackshift-sand-bug/)** (26pt) - GPUのシェーダーで発生した「砂のような」グリッチバグのデバッグ記録。GPUスレッドの同期タイミングとメモリアクセスパターンの微妙な競合状態を、バイナリ二分探索の手法で絞り込む過程が詳述されており、GPU並列プログラミングの落とし穴をブラックボックスを開けて確認する実例として読み物としても面白い。

- **[NixOS and Secrets](https://isabelroses.com/blog/nixos-and-secrets/)** (23pt) - NixOSの宣言的設定の強みとシークレット管理の相性の悪さを整理し、age暗号化＋agenix・sops-nix・ragenix各ツールの比較と使い分けを解説。NixOS採用チームが最初に躓く「設定をGitに上げたいがAPIキーをどうするか」問題への実践的な回答として、Nix入門者にとって欠かせない一記事。

- **[Steering Zig Fmt](https://matklad.github.io/2026/05/08/steering-zig-fmt.html)** (21pt) - IntelliJ RustやZigツールチェーンへの貢献で知られるmatklak氏が、Zigのコードフォーマッターの設計方針とユーザーとの摩擦について考察した記事。「オピニオネイテッドなフォーマッター」がコミュニティとどう対話すべきかという問いは、RustfmtやPrettierの歴史と重ねて読むと示唆に富む。

## dev.to

- **[Running AI models locally with Ollama: where it fits](https://dev.to/pcornelissen/running-ai-models-locally-with-ollama-where-it-fits-1oli)** - Ollamaを使ったローカルLLM実行が「クラウドAPIの代替」として有効なユースケースと、逆に向かないユースケースを整理した実践的な比較記事。開発者ツール組み込み・プライバシー重視のRAG・エッジ推論の3ユースケースで特に有利であり、コスト計算と応答品質のトレードオフが具体的な数値で示されている。

- **[Small-to-Big RAG: Your AI Needs a Better Context](https://dev.to/rushanksavant/small-to-big-rag-your-ai-needs-a-better-context-4cp1)** - 検索時には細かいチャンクで高精度にマッチングし、LLMへの入力時には親チャンク（より大きなコンテキスト）を渡す「Small-to-Big RAG」パターンの実装解説。精度と文脈豊富さを両立させるこのアーキテクチャは、単純なfixed-sizeチャンクRAGから一段上の品質を求めるプロダクション実装の出発点として実用的。

- **[Stop Writing Clean Code. Write Honest Code Instead.](https://dev.to/web_dev-usman/stop-writing-clean-code-write-honest-code-instead-18ek)** - 「綺麗なコード」の追求が過度な抽象化・命名への過剰投資・実態の隠蔽を招くと指摘し、「コードが何をしていて何が問題かを正直に表現する」Honest Codeの概念を提唱した記事。AIが大量のコードを生成する中で、人間がコードの「誠実さ」を判断する能力の重要性が改めて浮き彫りになる論考。

- **[One API Call to Audit Any Domain's Email Security](https://dev.to/lgogolin/one-api-call-to-audit-any-domains-email-security-2b6k)** - 1回のAPIコールでSPF・DKIM・DMARCの設定状態を一括確認できる手法を紹介した記事。メール送信元ドメインの信頼性チェックはフィッシング対策の基本であり、AIエージェントが自動的にドメイン健全性を評価するパイプラインへの組み込みにも応用できる実用的なアプローチ。

## TechCrunch

- **[Uber partner Avride is under investigation for self-driving crashes](https://techcrunch.com/2026/05/08/uber-partner-avride-is-under-investigation-for-self-driving-crashes/)** (2026-05-08) - Uberと提携する自動運転スタートアップ「Avride」に対し、米国道路交通安全局（NHTSA）が十数件のクラッシュと軽傷1件を受けて調査を開始した。自動運転の安全評価基準・データ開示義務・パートナー関係における責任の所在という業界全体に波及する規制上の問いを改めて提起している。

- **[Porsche shutters e-bike, battery, software subsidiaries as part of company overhaul](https://techcrunch.com/2026/05/08/porsche-shutters-e-bike-battery-software-subsidiaries-as-part-of-company-overhaul/)** (2026-05-08) - ポルシェがe-バイク・バッテリー・ソフトウェア子会社を閉鎖し500人超に影響が出ると発表した。「コア事業への回帰」を掲げる背景には、自動車OEMが非中核ソフトウェア事業を切り離してベンダーや専門SaaSに依存するトレンドへの合流があり、モビリティ業界のソフトウェア内製化路線の限界が問われている。

- **[US defense contractor who sold hacking tools to Russian broker ordered to pay $10M](https://techcrunch.com/2026/05/08/u-s-defense-contractor-who-sold-hacking-tools-to-russian-broker-ordered-to-pay-10-million/)** (2026-05-08) - 元サイバーセキュリティ幹部のPeter Williams氏が、監視・ハッキングツールをロシアのブローカーに130万ドルで売却した件で、前雇用主への1000万ドルの賠償が命じられた。サイバー兵器の流出経路としての「内部者脅威」と、知的財産保護・輸出規制の執行力強化が示された判決として業界に警鐘を鳴らす事例。

## Ars Technica

- **[Manufacturing qubits that can move](https://arstechnica.com/science/2026/05/manufacturing-qubits-that-can-move/)** (2026-05-08) - 量子ビットを固定せず物理的に移動させながら演算できる新しい製造アーキテクチャに関する研究を報じた記事。量子回路の配線問題（多数のqubit間の相互作用を実現するコスト）を「qubitそのものを動かす」ことで解決するアプローチは、スケーラブルな量子コンピュータ実現に向けた重要な方向転換の一つとして注目される。

- **[Elon Musk faces criminal probe in France after ignoring summons in X case](https://arstechnica.com/tech-policy/2026/05/elon-musk-faces-criminal-probe-in-france-after-ignoring-summons-in-x-case/)** (2026-05-08) - フランス当局がX（旧Twitter）に関する調査への出頭要請を無視したイーロン・マスク氏に対し刑事捜査を開始した。EUのDSA（デジタルサービス法）執行と米国テック企業の姿勢をめぐる対立が司法レベルに発展したケースとして、プラットフォームガバナンスの国際的摩擦が新たな段階に入ったことを示す。

- **[ABC refuses to capitulate to Trump admin, fights FCC probe into The View](https://arstechnica.com/tech-policy/2026/05/abc-fights-trump-fccs-attempt-to-control-content-of-broadcast-tv-shows/)** (2026-05-08) - ABCがFCC（連邦通信委員会）による「The View」への調査に対して法廷で争う姿勢を示した。放送免許を梃子にした番組内容への政府介入という問題は、メディア規制・コンテンツモデレーション・プラットフォームへの政治的圧力という文脈で、テックプラットフォームの先行事例として参照価値がある。

## 注目トピック

本号を横断する最大のテーマは**「AIエージェントの品質管理と組織制度化」**だ。Claude Codeの設定最適化・失敗のチームルール化・Harness Benchによる自社ベンチマーク・MicrosoftのWazaフレームワークと、「エージェントをどう使うか」から「エージェントをどう管理・評価・改善するか」への関心の重心移動が明確に見えている。エージェントの出力を受け入れる組織の側に制度・ルール・計測の仕組みが必要という認識が産業レベルで定着しつつある。

もう一つの軸は**「コードが安くなる時代の喪失と代償」**だ。"What We Lost the Last Time Code Got Cheap"が問う「設計の文化的劣化」・"Stop Writing Clean Code, Write Honest Code"が訴える「抽象化への過信」・自動テストだけでリリース判断できるチームを目指す議論は、すべてAIが書いたコードの大洪水の中で「人間が守るべき品質の次元は何か」という問いに収斂する。生産性のフロンティアが拡張する一方で、その恩恵を受けるためのチームの判断力・記録・ルール設計の重要性が逆説的に高まっていることを、今号の多様なソースが異口同音に示している。
