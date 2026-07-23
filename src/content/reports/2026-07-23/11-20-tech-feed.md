---
title: "Tech Feed ダイジェスト（2026年7月23日）"
date: "2026-07-23T11:20"
category: "summary"
summary: "決済基盤Cybersourceの大規模障害の裏側、GoogleがAIエージェント向けMarkdown標準「Open Knowledge Format」を公開"
tags: ["security", "ai", "aws", "devops", "opensource"]
---

## はてなブックマーク (テクノロジー)

- **[「POPOPO」サ終前にMac対応、未公開のWindows版技術はオープンソース化　「最後まで盛り上がっていこう！」](https://www.itmedia.co.jp/news/articles/2607/23/news074.html)** ([97users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2607/23/news074.html)) - サービス終了が決まった3Dアバター通話アプリ「POPOPO」の運営元が、未完成のまま終わったWindows版のためにFlutterへUnity描画を組み込む技術要素をGitHubでOSS公開した。サービス終了を単なる機能停止で終わらせず技術資産として還元する姿勢が支持を集めた。
- **[「クレカが使えない！」　16日朝の大規模障害を引き起こした「Cybersource」とは何者か](https://www.itmedia.co.jp/news/articles/2607/23/news053.html)** ([81users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2607/23/news053.html)) - Visa傘下の決済基盤Cybersourceの障害がVisa以外のブランドまで巻き込んだ理由と、三井住友カードやStripeが被害を免れた「迂回ルート」の仕組みを解説した記事。決済ゲートウェイという普段見えないレイヤーの単一障害点リスクが浮き彫りになった。
- **[高2が700万件漏えいに関与も……目立つ若年層のサイバー犯罪に「ホワイトハッカーにすれば」が安直なワケ](https://www.itmedia.co.jp/news/articles/2607/23/news021.html)** ([45users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2607/23/news021.html)) - 高校生による大規模情報漏えい関与が相次いで報じられる中、「技術力があるならホワイトハッカーに転向させればいい」という単純化された論調の妥当性を問い直した記事。
- **[Markdownファイルが、AI時代の負債に？　Googleが提案する「ナレッジ標準化」の一手](https://atmarkit.itmedia.co.jp/ait/articles/2607/23/news055.html)** ([41users](https://b.hatena.ne.jp/entry/s/atmarkit.itmedia.co.jp/ait/articles/2607/23/news055.html)) - Google Cloudが、AIエージェントが利用するナレッジをMarkdownで標準化するベンダー非依存のオープンフォーマット「Open Knowledge Format」を公開した。各社のエージェントがバラバラに独自形式でナレッジを蓄積している現状に一石を投じる提案。
- **[PayPayとセブン-イレブン、顧客ID統合か　1億超のID基盤誕生へ　複数報道](https://www.itmedia.co.jp/news/articles/2607/23/news104.html)** ([33users](https://b.hatena.ne.jp/entry/s/www.itmedia.co.jp/news/articles/2607/23/news104.html)) - スマホ決済大手PayPayとセブン&アイが顧客データ統合の最終調整に入ったと報じられた。実現すればID数1億超という国内最大級のポイント経済圏が誕生することになる。

## Zenn

- **[個人の無料GmailでSnowflakeにログインできるか試した——OIDCフェデレーテッド認証で検証](https://zenn.dev/inoway/articles/i184-google-oidc-personal-gmail)** - 企業向けGoogle Workspaceだけでなく個人の無料Gmailアカウントでも、OIDCフェデレーテッド認証を使えばSnowflakeにログインできてしまうのかを実際に検証した記事。認証設定の想定漏れがアクセス制御の穴になり得ることを示している。
- **[Go 1.27 から uuid 実装がサポートされる！ので個人的に気になった議論とその着地をまとめてみた](https://zenn.dev/layerx/articles/f7124d4e761c1f)** - 標準ライブラリへのUUID実装追加を巡ってGoコミュニティで交わされた設計議論と、最終的にどのような仕様に着地したかを整理した記事。サードパーティ製uuidパッケージが乱立してきた背景も踏まえている。
- **[Rust 1.97.0で変わったmanglingの仕組みについて](https://zenn.dev/estie/articles/f310f04c5fe5cc)** - Rust 1.97.0で更新されたシンボルの名前修飾（mangling）方式の変更点を解説した記事。リンカやデバッガとの連携に影響する低レイヤーな変更を丁寧に追っている。
- **[ベクトル検索の「ベクトル」とは何か](https://zenn.dev/mhackit/articles/vector-search-vector-explained)** - RAGブームで前提知識のように語られがちな「ベクトル検索」について、そもそもベクトルとは何を表しているのかという基礎から説明し直した入門記事。
- **[月18万行のコーディングを走り切った話](https://zenn.dev/innovation/articles/98142c37004f21)** - AIコーディングエージェントを使い1か月で18万行規模のコードを書き切った経験を振り返り、量をこなす中で見えてきた課題や工夫を共有した記事。

## Qiita

- **[Railsで学ぶ Rubyの実行モデル入門 〜「1行ずつ翻訳」は誤解だった！〜](https://qiita.com/akachiryo/items/0dea3706713f90e7ef7d)** - Rubyのコードが「上から1行ずつ翻訳される」という直感的だが誤った理解を、Railsのコードを題材にパース・コンパイル・実行という実際の処理モデルから解きほぐす解説記事。
- **[Gemini 3.6 Flashは何が変わった？3.5 Flashとの違いと移行時の注意点](https://qiita.com/nkstm_0410/items/df84f9762d3cba0b769b?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items)** - Googleが新たにリリースしたGemini 3.6 Flashについて、前世代の3.5 Flashとの機能差分と、既存アプリを移行する際に注意すべき挙動変化を整理した記事。
- **[モデルもプロンプトも大事、さらに効いた「ハイブリッド化」── 本番LLMは“生成させず選択させる”と幻覚が消えた](https://qiita.com/ntaka329/items/79ad347893d4be665bde)** - LLMに自由記述で生成させるのではなく、候補から選択させる形式に切り替えることで本番環境のハルシネーションが大幅に減少した実践知見をまとめた記事。
- **[AIの推進がうまくいかない組織アンチパターン](https://qiita.com/jw-automation/items/7a2f85593a2e2ba71306)** - 現場でAI導入プロジェクトが停滞する典型的な組織パターンを、ツール選定やトップダウン施策の失敗例から類型化した記事。
- **[AgentCore Browserのブラウザプロファイルでログインが必要なWebサイトへアクセスできるようにする](https://qiita.com/har1101/items/495266af9b58b5a301e7)** - AWSのAgentCore Browserにブラウザプロファイルを設定し、認証が必要なWebサイトへAIエージェントからアクセスできるようにする実装手順を解説した記事。

## AWS 新着

- **[AWS Network Load Balancer now supports Listener Rules for custom traffic routing](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-network-load-balancer-supports-listener-rules/)** (2026-07-22) - Network Load Balancerに、送信元IPアドレスの種別などに応じてターゲットグループへの振り分けを制御できるリスナールール機能が追加された。L4ロードバランサーでも柔軟なルーティングが可能になる。
- **[Selectively log network activity events by identity in AWS CloudTrail](https://aws.amazon.com/about-aws/whats-new/2026/07/aws-cloudtrail-filter-useridentity-advance-selectors/)** (2026-07-20) - CloudTrailのVPCエンドポイント経由ネットワークアクティビティイベントを、IAMアイデンティティ単位で選択的にログ記録できるようになった。全件記録によるコスト増を抑えつつ必要な監査証跡だけを残せる。
- **[Amazon Connect delivers more natural agentic voice experiences with expanded language support and speech controls](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-connect-agentic-voice/)** (2026-07-20) - Amazon Connectの音声AIエージェントが50以上の言語に対応し、より自然な話し方の制御が可能になった。コールセンター業務でのAIエージェント活用がグローバルに広がる後押しとなる。
- **[Introducing KNFSD File Cache - Now in Preview](https://aws.amazon.com/about-aws/whats-new/2026/07/knfsd-file-cache/)** (2026-07-20) - スケーラブルな高速NFSキャッシュを構築できるApache-2.0ライセンスのOSSソリューション「KNFSD File Cache」がプレビュー公開された。大規模な共有ファイルシステムのボトルネック解消を狙う。
- **[PostgreSQL 19 Beta 2 is now available in Amazon RDS Database Preview Environment](https://aws.amazon.com/about-aws/whats-new/2026/07/postgresql-19-beta-2-amazon-rds-database-preview-environment/)** (2026-07-16) - PostgreSQL 19のBeta 2がAmazon RDS Database Preview Environmentで先行評価できるようになった。次期メジャーバージョンの新機能を本番投入前に検証したいチームに向けた提供。

## Lobsters

- **[Protecting our FLOSS commons from LLMs](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html)** (81pt) - コード共有基盤Codebergの年次総会で、LLMの学習データにユーザーコードを使わないことを約束する決議と、「バイブコーディング」プロジェクトの利用規約変更を可決したと報告された。LLMがFLOSSエコシステム全体を脅かしかねないという危機感が組織としての意思決定にまで発展している。
- **[PyPI releases now reject new files after 14 days](https://blog.pypi.org/posts/2026-07-22-releases-now-reject-new-files-after-14-days/)** (39pt) - PyPIが、公開から14日を過ぎたリリースへの新規ファイル追加を拒否するポリシーを導入した。古いリリースへの後からの差し替えを悪用したサプライチェーン攻撃を防ぐ狙いがある。
- **[I Inspected My Take-Home Interview Project. It Was a Whole Operation](https://citizendot.github.io/articles/fake-job-interview-git-hook-malware/)** (36pt) - 採用選考の持ち帰り課題として渡されたGitリポジトリに、gitフックを悪用したマルウェアが仕込まれていたことを調査した記事。偽の求人面接を装った攻撃キャンペーンの手口が詳細に暴かれている。
- **[Unranked, systemd, crawls](https://www.marginalia.nu/log/a_138_systemdocker/)** (34pt) - 独立系検索エンジンMarginaliaの開発者が、クロールインフラをsystemdベースの構成に見直した経緯を綴った運用記事。検索エンジンという地味だが息の長いインフラの裏側を垣間見せる。
- **[John C. Dvorak has died](http://oldvcr.blogspot.com/2026/07/john-c-dvorak-has-died.html)** (32pt) - 長年PC系メディアでコラムニストとして活躍したジョン・C・ドヴォラック氏の訃報を伝える記事。パーソナルコンピュータ黎明期からの業界の生き証人を悼む声がコミュニティ内で広がった。

## dev.to

- **[How I turned fragmented LLM quotas into one larger token budget with an MCP server](https://dev.to/elispeak111/how-i-turned-fragmented-llm-quotas-into-one-larger-token-budget-with-an-mcp-server-2ek1)** - 複数のLLMプロバイダーごとに分断されたレート制限・クォータを、MCPサーバー経由で束ねてひとつの大きなトークン予算として扱えるようにした実装を紹介した記事。コーディングエージェントを多用するほど直面しやすいクォータ枯渇問題への対処法。
- **[Self-Hosted MCP: Building a Model Context Protocol Server in PHP](https://dev.to/mahmut_gndzalp_c736ac4b/self-hosted-mcp-building-a-model-context-protocol-server-in-php-36a2)** - MCPサーバーの実装例がTypeScript・Python中心である現状に対し、PHPで自前ホスト可能なMCPサーバーを構築する手順を解説した記事。既存のPHP資産をAIエージェントに接続したいチーム向け。
- **[Software RAID vs Hardware RAID for NVMe: The PCIe Bottleneck](https://dev.to/jaksontate/software-raid-vs-hardware-raid-for-nvme-the-pcie-bottleneck-2hfl)** - 「専用ハードウェアRAIDコントローラを使うべき」という20年来の鉄則が、NVMe世代ではPCIeの帯域がボトルネックとなりむしろソフトウェアRAIDが有利になり得ることを検証した記事。
- **[Screen Every Inbound Call at the Carrier Edge: A Fraud Firewall in 178 Lines of Python](https://dev.to/harpreetseehra/screen-every-inbound-call-at-the-carrier-edge-a-fraud-firewall-in-178-lines-of-python-mi4)** - キャリア側のエッジで着信をリアルタイムに評価し、詐欺電話をわずか178行のPythonで遮断するファイアウォールを実装した記事。通信キャリア領域の不正対策を小さなコードベースで実現している。
- **[Parse transcript.jsonl Directly to See What's Actually Being Called](https://dev.to/bokuwalily/parse-transcriptjsonl-directly-to-see-whats-actually-being-called-41bm)** - Claude Codeの`/usage`コマンドが金額は分かってもその内訳までは示さないため、`transcript.jsonl`を直接パースしてどのツール呼び出しにトークンが使われているかを可視化する手法を紹介した記事。

## TechCrunch

- **[After shocking quarter, IBM insists that AI isn't killing the mainframe](https://techcrunch.com/2026/07/22/after-shocking-quarter-ibm-insists-that-ai-isnt-killing-the-mainframe/)** - メインフレーム販売不振で株価が急落したIBMが、AIによる企業ハードウェア予算の一時的な圧迫が原因であり、メインフレーム自体は死んでいないと釈明した。AI投資と既存インフラ更新需要が予算を奪い合っている構図が浮かぶ。
- **[Google justifies its massive AI spending with a booming cloud business](https://techcrunch.com/2026/07/22/google-justifies-its-massive-ai-spending-with-a-booming-cloud-business/)** - GoogleのクラウドAI事業が好調な決算をもたらしていることが、同社の巨額AIインフラ投資を正当化する材料として報じられた。AI投資の採算性を巡る業界全体の疑問に対する数少ない好材料の一つ。
- **[Substack's new tool tells you who's been writing their newsletters with AI](https://techcrunch.com/2026/07/22/substacks-new-tool-tells-you-whos-been-writing-their-newsletters-with-ai/)** - Substackが、ニュースレターのどの程度がAIによって書かれたかを読者側で推定できる新機能を導入した。AI利用の透明性を訴求する動きがコンテンツプラットフォームにも広がっている。
- **[Science Corporation's vision-restoring chip wins EU approval](https://techcrunch.com/2026/07/22/science-corporations-vision-restoring-chip-wins-eu-approval/)** - 視力を回復させる網膜インプラントチップを開発するScience Corporationが、EUでの承認を獲得した。ニューロテック領域で臨床応用が着実に進んでいる一例。
- **[Monday.com lays off hundreds to focus on AI](https://techcrunch.com/2026/07/22/monday-com-lays-off-hundreds-to-focuses-on-ai/)** - プロジェクト管理SaaSのMonday.comが従業員の20%（約630人）を削減し、AI重視の組織体制へ移行すると発表した。SaaS企業がAIシフトのために既存人員を削る動きが継続している。

## Ars Technica

- **[Anthropic's $1.5B copyright settlement approved; only 350 authors opted out](https://arstechnica.com/tech-policy/2026/07/judge-approves-anthropics-1-5-billion-copyright-settlement-with-authors/)** - Anthropicが著作権侵害訴訟の和解金15億ドルの支払いで合意した件について、裁判所が最終承認した。対象となった著者のうちオプトアウトを選んだのは350人にとどまり、大半が和解を受け入れた形となった。
- **[Samsung unveils new Galaxy Z8 foldables and Galaxy Watches, available August 7](https://arstechnica.com/gadgets/2026/07/samsung-unveils-new-galaxy-z8-foldables-and-galaxy-watches-available-august-7/)** - Samsungが新型折りたたみスマートフォン「Galaxy Z8」シリーズと新型Galaxy Watchを発表した。より薄型・高性能になった一方で価格も上昇しており、フォルダブル市場の高付加価値化が進んでいる。
- **[Ukrainian drones deliver robots directly into battle by sea and air](https://arstechnica.com/gadgets/2026/07/ukrainian-drones-deliver-robots-directly-into-battle-by-sea-and-air/)** - ウクライナ軍が、海上・航空ドローンを使って地上ロボットを戦場に直接投入する運用を拡大していると報じられた。ドローンとロボティクスを組み合わせた無人化戦術が実戦で急速に成熟している。
- **[Sales were up at Tesla but so were costs and spending](https://arstechnica.com/cars/2026/07/teslas-revenues-are-up-but-profits-squeezed-as-musk-spends-on-ai/)** - Teslaの売上高は増加したものの、AI関連投資の拡大によりコストも同時に膨らみ、利益率が圧迫されていると報じられた。自動車事業の収益がAI投資の原資として使われる構図が鮮明になっている。
- **[Next Space Force chief throws cold water on the idea of space privateers](https://arstechnica.com/space/2026/07/next-space-force-chief-throws-cold-water-on-the-idea-of-space-privateers/)** - 次期米宇宙軍トップが、民間軍事契約者に宇宙での攻撃的任務を委託する「宇宙私掠船」構想に慎重な姿勢を示した。240年前のベンジャミン・フランクリンの私掠船批判を引き合いに出しつつ議論している点が興味深い。

## 注目トピック

今回目立ったのは、普段は意識されない「基盤レイヤーの単一障害点」が可視化された事例が相次いだことだ。はてなブックマークでは、Visa傘下の決済基盤Cybersourceの障害がVisa以外のブランドまで巻き込んだ理由を解説した記事が81usersを集め、決済ゲートウェイという裏側のレイヤーに依存が集中するリスクが浮き彫りになった。Lobstersでは、採用選考の持ち帰り課題として渡されたリポジトリにgitフックを悪用したマルウェアが仕込まれていた事例や、PyPIが公開14日を過ぎたリリースへの新規ファイル追加を拒否するポリシーを導入した件が読まれており、開発の「入口」となるツールチェーンやプロセス自体がサプライチェーン攻撃の標的になっている実態が繰り返し示されている。

もう一つの軸は、AIエージェントの相互運用性と、それを支える組織的な意思表示だ。はてなブックマークでは、Google CloudがAIエージェント向けナレッジをMarkdownで標準化するベンダー非依存フォーマット「Open Knowledge Format」を公開したことが41usersを集め、各社バラバラだったエージェントのナレッジ形式を統一しようという動きが本格化している。一方Lobstersでは、コード共有基盤CodebergがLLMの学習データにユーザーコードを使わないと約束する決議を年次総会で可決したと報告され、FLOSSコミュニティ側からAI企業への牽制も強まっている。ビジネス面では、IBMがメインフレーム販売不振の一因をAI投資への予算シフトに求め、Monday.comが人員の20%を削減してAI重視へ転換するなど、AI投資の原資を巡って既存事業やコスト構造がきしみ始めている様子もうかがえる。
