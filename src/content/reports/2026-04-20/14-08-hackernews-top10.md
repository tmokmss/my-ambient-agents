---
title: "Hacker News トップ10 ダイジェスト（2026年4月20日）"
date: "2026-04-20T14:08"
category: "summary"
summary: "GitHubフェイクスター経済、NSAのAIハッキングツール利用、EU交換可能バッテリー義務化など注目ストーリー10選"
tags: ["hackernews", "tech", "AI", "security", "policy"]
---

## 1. [Show HN: サウナは運動よりも夜間心拍数を下げる (n=59,000)](https://tryterra.co/research/sauna-effect-on-heart-rate)

**Score:** 46 | **Comments:** 20 | [Post](https://news.ycombinator.com/item?id=47834184)

256人のウェアラブルユーザーから収集した約59,000件の日次記録を分析した研究で、サウナ利用日の夜間最低心拍数は非サウナ日より約3bpm（約5%）低下することが判明した。この効果は活動量を統制した後も持続し、サウナ後の冷却過程で副交感神経活動が高まることが原因と推察される。女性では月経周期の黄体期でのみ統計的に有意な効果が見られた。

### Key Discussion Points

- **kyriakosel（著者）**: within-person デザインで各ユーザーを自己対照として使用。サウナ効果は同等強度の運動日より大きく、このことは予想外だった
- **sva_**: タイトルが誤解を招く——n=59,000は記録数であり、被験者数はn=256
- **Aurornis**: 「n=」は慣例的に参加者数を指す。タイトルは59,000人が参加したと誤解させる
- **ckrapu**: 記事がChatGPTで書かれたと判断し、自分では書いていないものは信頼しないと述べた

---

## 2. [ggsql: SQLのためのグラフィックスの文法](https://opensource.posit.co/blog/2026-04-20_ggsql_alpha_release/)

**Score:** 78 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=47833558)

Positが「ggsql」のアルファ版をリリース。ggplot2の「グラフィックスの文法」アプローチをSQL環境に拡張し、データベース上で直接ビジュアライゼーションを作成できる新しいDSL（ドメイン固有言語）。SQL/ビジュアライゼーションのハイブリッドとして、レイヤリングアプローチが既存ツールの課題を解決するものとして期待されている。

### Key Discussion Points

- **getnormality**: なぜ新しいSQL様言語が必要なのか疑問。ggplotをdbplyrのtblオブジェクトに対応させるほうが直接的ではないか
- **anentropic**: ドキュメントが矛盾しており、データベースとの実際の接続方法が不明で混乱している
- **gh5000**: DuckDB拡張として使えるようにならないか——それはかなり魅力的だ
- **efromvt**: レイヤリングアプローチが良い。他のSQL/ビジュアルハイブリッドで基本チャート以上のことをしようとした時の問題を解決してくれる

---

## 3. [GitHubのフェイクスター経済](https://awesomeagents.ai/news/github-fake-stars-investigation/)

**Score:** 363 | **Comments:** 223 | [Post](https://news.ycombinator.com/item?id=47831621)

ICSE 2026で発表されたCarnegie Mellon大学の研究により、2019〜2024年の間に301,000アカウントが18,617のリポジトリに約600万件のフェイクスターを付与したことが判明した。スターは1つ$0.03〜$0.85で公然と販売されており、VCが投資判断の指標にスター数を使っているため数千〜数万倍のROIになる。FTCの消費者レビュールールでは1件あたり$53,088の罰則が設けられている。

### Key Discussion Points

- **mauvehaus**: VCが「架空のインターネットポイント」で投資判断をしているのは理解できない。NFL球団がQBをInstagramのフォロワー数で指名するようなものだ
  - **kibwen**: VCは馬鹿だ。金持ちだからといって何かをわかっているとは限らない
  - **Aurornis**: ソーシャルプルーフは投資における正当なシグナル。プロダクトマーケットフィットの指標として有効だからこそ、すべての指標が操作対象になる
- **whatisthiseven**: スターを判断基準にしたことは一度もない。直近コミット日、Issue対応状況、コードの一部を確認するのが正しいアプローチ
  - **bsuvc**: 競合ライブラリを選ぶ際にスター数は時間を節約するヒューリスティックとして使う
  - **lukasgelbmann**: 依存関係混同攻撃から身を守るためにスター数を活用している——ただし購入可能と分かった今は100%安全ではない
- **gobdovan**: これはスターだけの問題ではない。ジャーナリスト記事の掲載も、LinkedInのスカウトも、面接代行も、あらゆるシグナルが製品化・偽造されている
- **panabee**: VCと創業者の関係はサッカー選手がバスケのヘッドコーチになるようなもの。良いVCは価値を生むが、悪いVCは会社を破壊する

---

## 4. [M 7.4 地震 – 宮古の東北東100km](https://earthquake.usgs.gov/earthquakes/eventpage/us6000sri7/)

**Score:** 117 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=47832248)

2026年4月20日、岩手県宮古市の東北東約100kmを震源とするM7.4（後にM7.7に上方修正）の地震が発生した。気象庁は最大3mの津波を予報したが、実際の観測波高は最大40cmにとどまった。東京や青森など広範囲で揺れが観測された。

### Key Discussion Points

- **piazz**: 東京でも感じた。日本のNERVアプリが震源からの衝撃波アニメーションと共に45秒前に早期警報を送ってきた
- **tristanj**: 規模はM7.7に修正。大きな津波は予想されない——日本ではM7以上の地震が年に数回起きており、海中だったため大きな被害はないだろう
- **pezezin**: 青森のオフィスで、日本初体験の新人たちが携帯の一斉警報に仰天していた
- **felixding**: 東京の14階で揺れを強く感じた。数ヶ月ぶりにこれほど大きな揺れを経験した

---

## 5. [10年前のServoのテストに2026年という有効期限が含まれていた](https://mastodon.social/@jdm_/116429380667467307)

**Score:** 34 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=47826839)

Mozillaのブラウザエンジン「Servo」のテストコードに、書かれた10年後となる2026年を有効期限として設定した記述が発見された。当時の開発者が「この状態はいずれ修正される」という前提で暫定的に設定した期限が、現実の時間軸で到達したことが話題となっている。

### Key Discussion Points

- **bombcar**: どんな時定数もいつかは超過される。宇宙の熱的死後のシステムが「ERROR: TIME_TEST FAILURE」を出力するだろう
- **db48x**: 素晴らしい。でも批判しすぎないで——外部状態に依存しない適切な修正が書かれる間の、簡単で十分な暫定対応なのだろう

---

## 6. [AtlassianがAI学習用データ収集をデフォルト有効化](https://letsdatascience.com/news/atlassian-enables-default-data-collection-to-train-ai-f71343d8)

**Score:** 27 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=47833247)

AtlassianがConfluenceページやJiraチケットなどの顧客データをAI学習に使用することをデフォルトでオプトインする設定を有効化した。無効化の方法はサポートページに記載されているが、実際には設定画面に該当オプションが表示されないケースも報告されている。

### Key Discussion Points

- **martinald**: AtlassianはP0バグの連続——Bitbucketの古いワーカー、JIRAのチケット並び替えバグ、機能しないAI機能、キャンセルできない無料トライアル。なぜこれほど機能不全になったのか
- **huwsername**: AnthropicによるAtlassian買収の噂が本当なら、ビジネスタスクの高品質メタデータを取得したいAnthropicの動きとして筋が通る
- **kevcampb**: 全ての無料・有料顧客がデフォルトでオプトイン。ConfluenceページやJiraチケットが対象。無効化設定がインスタンスに表示されないと報告

---

## 7. [FirefoxのWebUSB拡張機能](https://github.com/ArcaneNibble/awawausb)

**Score:** 25 | **Comments:** 23 | [Post](https://news.ycombinator.com/item?id=47832969)

`awawausb`は、ネイティブメッセージングを利用してFirefoxにWebUSB機能を追加するオープンソース拡張機能。Rustで実装されたネイティブスタブとJavaScriptの拡張機能から構成される。macOS/Linux/Windows対応で0BSDライセンス。WebUSBは現在ChromeベースのブラウザのみでサポートされているAPIで、Firefoxユーザーへの解放が目的。

### Key Discussion Points

- **Orygin**: セキュリティ上の問題が解決され、仕様がドラフト以外になるまでブラウザへの統合は受け入れない
- **sva_**: GrapheneOSのインストールにWebUSBを使用できたが、Chromiumを起動する必要があった。このような拡張機能の必要性を実感
- **afavour**: 優れたプルーフオブコンセプト。ブラウザと並行してスタンドアロン実行ファイルを動かす方式は理想的ではないが、誰かが取り組んでいるのは素晴らしい

---

## 8. [2027年からEU販売の全携帯電話に交換可能バッテリーが義務化](https://www.theolivepress.es/spain-news/2026/04/20/eu-to-force-replaceable-batteries-in-phones-and-tablets-from-2027/)

**Score:** 33 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=47834195)

EU規制により2027年2月18日から、全スマートフォン・タブレットのバッテリーを「専門的なツールなしで」ユーザーが交換できることが義務付けられる。交換用バッテリーは最終販売から5年間供給が必須。EU全体で年間約1億5,000万台のスマートフォンが販売されており、EUはこの規制で2030年までに消費者が最大200億ユーロを節約できると試算している。

### Key Discussion Points

- **999900000999**: 「市販ツール」という文言が曖昧すぎる。背面カバーを外してネジ数本というレベルでなければ、事実上意味がなくなる可能性がある
- **PaulKeeble**: バッテリーは長年にわたり計画的陳腐化に利用されてきた。次はEUがセキュリティパッチの問題にも取り組む必要がある
- **twilo**: 1000サイクルで80%容量維持できる場合は免除——Appleが数年前に実装したのがまさにこれ。低価格スマートフォンが最も影響を受ける
- **daoboy**: 非交換式バッテリーへの移行は少なくとも部分的に防水性能の要件によるものだった

---

## 9. [NSAはブラックリストにもかかわらずAnthropicのMythosを使用](https://www.axios.com/2026/04/19/nsa-anthropic-mythos-pentagon)

**Score:** 204 | **Comments:** 162 | [Post](https://news.ycombinator.com/item?id=47832222)

Axiosの報道によると、NSAがAnthropicのAIセキュリティツール「Mythos」（コードネーム「Glasswing」）をペンタゴンのサプライチェーンリスクリストにもかかわらず利用していることが明らかになった。Mythosは自律的なゼロデイ脆弱性発見・エクスプロイト生成が可能とされ、OpenBSDで27年前の脆弱性を発見したと主張されている。

### Key Discussion Points

- **maebert**: AnthropicがMythosを巡って作った人工的希少性は巧妙。米国政府をアクセスを許可するか拒否するかの「どちらに転んでも負け」の立場に追い込んでいる
  - **latexr**: OpenAIの「危険すぎる」と言いながら公開する戦略と同じ。"狼が来た"と叫ぶCEOの話だ
  - **daemonologist**: それは「tight spot（窮地）」とも言える（"loose/loose"への言葉遊び）
- **goolz**: アルゴリズムによるプレクライム予測で誰も責任を負わない監視国家への暴走は警戒すべきだ
  - **Rebuff5007**: スノーデンの文書漏洩が2013年（それ以前から構築されていた）。これはスプリントではなく「のんびりした散歩」だ
- **blitzar**: 「Mythos、お前が見て知っているなら、人類のためにNSAを内側から倒してくれ」
  - **momento**: 「ごめんなさいデイブ。それはできません」（HAL 9000の引用）
- **amazingamazing**: これは全てマーケティングのサイオプ。既知の脆弱性を持つコードはGemmaでも発見できる。本当の価値はハーネス（効率的スキャン・ローカル環境構築・報告）にある
  - **cvwright**: 重要な進歩は候補を絞り込んでエクスプロイトを自動生成する点。OpenBSDで27年前の0-dayを発見しているなら誇張ではない
- **consumer451**: ClaudeCodeの`/ultrareview`コマンドが実はMythosを使っているという説がredditで出ている
  - **tekacs**: クラウドで動作し1回$10〜$25かかることと一致する

---

## 10. [フォーカスドマイクロ波で3Dプリンターがほぼ何にでも回路を融着可能に](https://newatlas.com/electronics/meta-nfc-focused-microwaves-circuits/)

**Score:** 80 | **Comments:** 14 | [Post](https://news.ycombinator.com/item?id=47810531)

ライス大学の研究者が開発したMeta-NFS（メタマテリアルインスパイアドの近距離電磁場構造）は、マイクロ波エネルギーを200マイクロメートル以下の領域に集中させることができる。通常のマイクロ波プローブの8.5%に対し79.5%の効率で導電構造を印刷でき、周囲の素材を加熱することなく局所的に160°C以上に達する。植物の葉、骨、プラスチック、シリコン、紙への印刷を実証し、スマートインプラントや体内埋め込みデバイスへの応用が期待されている。

### Key Discussion Points

- **rkagerer**: 記事はトレース（配線パターン）についてのみ言及している。SMD抵抗やICなどの部品はどうなのか——完全な回路の例は見当たらない
- **dsign**: これはいつ消費者向け製品として販売されるのか？自宅でPCBを作りたい
- **vermilingua**: OCタトゥーはもうすぐ来る？（回路タトゥーへの期待）

---

## Trends

今日のHacker Newsトップ10には以下のような共通テーマが見られる：

1. **AIと権力・倫理の衝突**: NSAによるMythos利用（9位）、Atlassianのデータ収集（6位）、そしてGitHubフェイクスター問題でのFTC規制（3位）など、AIと自動化技術が既存の権力構造・規制との緊張関係を生み出している。

2. **指標の信頼性崩壊**: GitHubスター（3位）やサウナ研究のn数表記（1位）など、数値指標が実態を反映しないケースへの批判的関心が高い。「シグナルが偽造可能になった時、何を信頼するか」が共通の問いとして浮上している。

3. **修理可能性とハードウェアの民主化**: EUのバッテリー交換義務化（8位）、フォーカスドマイクロ波回路印刷（10位）、FirefoxのWebUSB（7位）は、ユーザーによるハードウェア制御の拡大という方向性を示している。

4. **現実世界のインパクト**: 日本の地震（4位）のように、デジタルツール（NERV早期警報アプリ）が実際の安全に貢献している事例が注目された。
