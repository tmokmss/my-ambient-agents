---
title: "Hacker News トップ10まとめ (2026-07-20 23:27 JST)"
date: "2026-07-20T14:27"
category: "summary"
summary: "WordPress RCEをGPT-5.6で発見、OpenCode批判、ルーマニア地籍DB破壊、EU-US生体データ共有問題など"
tags: ["hackernews", "security", "ai", "privacy"]
---

## 1. [Hacker wipes Romania's land registry database](https://news.risky.biz/risky-bulletin-hacker-wipes-romanias-entire-land-registry-database/)

**Score:** 106 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=48978605)

ルーマインの国家地籍不動産広告庁（ANCPI）が正規の認証情報を悪用したハッカーに侵害され、国全体の土地登記データベースが削除された。身代金要求が失敗した後にデータが消去されたとみられ、不動産市場は1週間以上停止し、公証人が取引を記録できず国民が所有権を証明できない事態に陥った。

### Key Discussion Points

- **skinfaxi**: ハッカーはバックアップも削除したと主張しているが、当局にはオフラインの控えがあったようで、所有権証明が完全に不可能になる最悪の事態は回避されたようだと安堵するコメント。
- **RandomLensman**: そもそも昔ながらの紙の登記簿の方が良いのではないかという素朴な疑問。
- **Squarex**: 同様の事件が最近スロバキアでも起きたばかりだと指摘。
- **toomuchtodo**: こうしたケースにはInternet Archiveの「Vault」サービスが理想的な解決策になり得ると提案。

## 2. [Stop Using OpenCode](https://wren.wtf/shower-thoughts/stop-using-opencode/)

**Score:** 173 | **Comments:** 111 | [Post](https://news.ycombinator.com/item?id=48978112)

著者はAIコーディングエージェント「OpenCode」にセキュリティと設計の両面で深刻な欠陥があると指摘。bashコマンドのフィルタリングが容易に回避可能、ローカルLLM接続設定が複雑でデフォルトではリモートモデルに接続してしまう、ファイルアクセス制限やシェルリダイレクション処理に多数の脆弱性がある等を挙げ、利用中止を強く勧告している。

### Key Discussion Points

- **LaurensBER**: 記事のタイトルは大げさで、実際は「直せば改善するちょっとした不満点」程度の内容だと指摘。プロンプトキャッシュミスやコンパクションの問題はOpenCode固有ではなくCodexやClaudeでも見られると反論。
  - **nylonstrung**: より本質的な問題はコードベースがvibe codingで肥大化していることで、Claude Codeも同様の問題を抱えつつあると指摘。
  - **disiplus**: ローカルLLM(DeepSeek)でプリフィルを調整して運用しており、キャッシュミス問題は実用上は許容範囲だと実体験を共有。
- **lucideer**: エージェント型CLI全般の危険性について良いまとめだが、対案が示されておらず、指摘の多くはOpenCode固有の問題ではなく他の主要エージェントにも当てはまると指摘。
  - **qarl2**: シェルアクセスを与えつつ任意コマンド実行を安全に防ぐ方法があるのか疑問視し、コマンドフィルタリング回避の指摘は的外れだと反論。
- **chuckadams**: 記事中の「ブーツが顔を踏みつける」という誇張した比喩を、拷問めいたメタファー賞候補だとユーモラスに評した。
  - **wren6991**: 「暗く嵐の夜を想像してほしい」とパロディ調に応答。
- **nirinor**: 自分も記事の指摘に共感しており、OpenCodeから別のハーネスへの乗り換えを検討していると吐露。
- **drdexebtjl**: 欠点はあっても最も生産性の高いハーネスだとしつつ、コマンドフィルタリングは「セキュリティではなく操縦のため」という著者の誤解を指摘。
  - **mlnj**: 同意見で、余計な干渉が少ない点を評価していると追随。

## 3. [Airport Simulator](https://airport.apunen.com/)

**Score:** 236 | **Comments:** 65 | [Post](https://news.ycombinator.com/item?id=48976846)

ブラウザ上で遊べる航空管制シミュレーターゲーム。ページ自体には詳細な説明はほぼなく、コメント欄では往年の名作フライトシミュレーションゲームとの類似性が話題になっている。

### Key Discussion Points

- **Rotundo**: 懐かしの「Kennedy Approach」というゲームに似ていると動画とWikipediaリンクを共有。
- **sarreph**: 名作「Flight Control」を思い出す、モダンな後継作が少なく残念でMini Metroくらいしか無いと言及。
  - **jclardy**: Flight ControlはiOSで傑作だったが今は遊べず、Steamでは現在も購入可能だと補足。
  - **rwmj**: 昔ZX Spectrum向けの「Heathrow ATC」をよく遊んだとリンクを共有。
- **thanzex**: 遊んで楽しかったとしつつ、混雑時に飛行機がクリックしづらい点や統計テーブルが地図を隠す点などの改善を提案。
  - **kronk**: Ctrl+Shift+-でズームアウトすれば統計テーブルを小さくできると回答。
- **wjdp**: 着陸のさせ方が分からず苦戦したが、飛行機が空中で180度旋回して着陸できると気づき面白かったと感想。
  - **paxys**: 現実的には滑走路の両端から着陸できるようにすべきとの改善案。
- **paxys**: 「2008年にFlight Controlを十分プレイしていない人が多いようだ」と皮肉。
  - **istoleabread**: 「自分は当時3歳だった」とユーモラスに返信。

## 4. [Exploit brokers pay $500k for WordPress RCEs. I found one with GPT5.6 and $25](https://slcyber.io/research-center/exploit-brokers-pay-500000-for-a-wordpress-rce-i-found-one-with-gpt5-6/)

**Score:** 266 | **Comments:** 139 | [Post](https://news.ycombinator.com/item?id=48975665)

セキュリティ研究者がGPT-5.6を使い、WordPressのバッチAPIに存在する「検証と実行のズレ」という脆弱性を発見。認証なしでSQLインジェクション、キャッシュ毒殺、カスタマイズセットの悪用を連鎖させることで管理者権限のリモートコード実行に至る攻撃チェーンを、AIの支援により約10時間で構築できたとしている。

### Key Discussion Points

- **Zsfe510asG**: $500kが実際に支払われたという証拠はなく、著者がAI搭載スキャン製品を持つ企業(Assetnote)に所属している点を踏まえると宣伝目的ではないかと疑問視。
  - **kuroguro**: Crowdfenseのエクスプロイト買取プログラムを参照している可能性を指摘。
  - **functionmouse**: 「楽観主義を装う嘘つきだ」と辛辣に評価。
- **progbits**: 該当のWordPressコミットへのリンクを示し、「2026年にもなって文字列連結によるSQLインジェクションとは」と批判。
  - **sunaookami**: WordPressのプラグイン開発ドキュメント自体がこの脆弱なパターンを推奨しており、さらに悪いと指摘。
  - **9dev**: WordPressのコードベースは「恥さらし」で、PHP自体は既に良い言語になっているのに扱いが杜撰だと批判。
- **hmokiguess**: 「$25で見つけた」というFOMOを煽る書き方にうんざりしており、業界知識や経験の蓄積があってこそだと反論。
  - **w4yai**: 同意し、こうした記事はInstagramのように「良い面だけ見せる」文化だと批判。
- **ahartmetz**: 既知の脆弱性に高額が支払われるのは意外(あるいは事実誤認)で、WordPressは「ブログ機能付きのリモートrootシェル」として有名だと皮肉。
  - **denysvitali**: ブログなら静的ページで十分ではないかと疑問を呈す。
  - **gorszon**: ブローカーのTelegramグループに潜入調査でもしない限り真偽は分からないだろうと懐疑的。
- **raesene9**: LLMによるエクスプロイト発見・開示は現実的な懸念だとしつつ、GPT-5.6がガードレールでブロックしなかった点に驚きを表明。
  - **Santas**: ChatGPTの「cyber」モードのリンクを共有し、ガードレールを緩和する一助になるかもと提案。

## 5. [ECC and DDR5](https://etbe.coker.com.au/2026/07/19/ecc-ddr5/)

**Score:** 32 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=48969530)

DDR5のオンダイECC機能により信頼性は向上したものの、著者は規格上のEC4とEC8の混在は不適切でEC8への統一が望ましいと主張。メモリエラーがシステム障害やデータ破損を招く実例を挙げ、社会全体でECCメモリの採用をより推進すべきだと論じている。

### Key Discussion Points

- **nahuel0x**: エラー訂正だけでなくエラー報告も重要であり、DDR5のオンダイECCのエラーカウントをOSに報告する標準的な方法がない点を指摘。IBECCとDDR5の組み合わせが代替案になり得るとした。
- **cyanmagenta**: ECC議論はいつも逸話ベースで、古いGoogleのデータセンター調査くらいしか根拠がなく、DDR5の実際のビットフリップデータが欲しいと指摘。
- **Havoc**: DDR4サーバーでECC UDIMMを使っており、数か月に一度エラーを検出するが常に訂正されているため使い続けていると経験談を共有。
- **lightedman**: 「政府が対策を強制すべき」という記事の主張に対し、なぜいつもオーストラリアがそうした強制策を好むのかと皮肉。
- **AlexandrB**: ECCの普及自体には賛成だが、非ECCメモリへの課税など政府による強制は行き過ぎで、ゲーミングPCなどには不要だと反論。

## 6. [We're Squandering LEDs' Potential to Save Our Night Skies](https://spectrum.ieee.org/led-light-pollution)

**Score:** 15 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=48978350)

LEDは省エネという利点がある一方、コストとルーメン効率を優先して青白い「クーラー」な色温度(4,000〜6,500K)のLEDが多用されており、青色光は大気中で散乱しやすく空を明るくするため、現状の使い方はむしろ光害を悪化させていると指摘。DALIなどのデジタル制御技術で色温度・明るさ・点灯時間を時間帯や季節に応じて調整すれば、健康や夜行性動物の保護、星空の復活につながるとしている。

### Key Discussion Points

まだコメントが付いていない。

## 7. [The EU is about to sell our most sensitive data to the US for visa-free travel](https://edri.org/our-work/the-eu-is-about-to-sell-our-most-sensitive-data-to-the-us-for-visa-free-travel/)

**Score:** 193 | **Comments:** 116 | [Post](https://news.ycombinator.com/item?id=48977711)

EUはビザ免除の特権を維持するため、米国にバイオメトリックデータベースへのアクセスを提供する「Enhanced Border Security Partnership」枠組みの交渉を進めている。人権団体EDRiは、EUが米国の要求にほぼ全面的に譲歩しておりEU基本権憲章に違反する可能性があると批判し、人権侵害の歴史がある米国へのデータ提供に抵抗すべきだと訴えている。

### Key Discussion Points

- **maratc**: 記事が見落としている点として、米国入国にはどのみち生体データ提出が必要で、ビザ免除(オンライン送信)かビザ(空港で提出、より手間)かの違いに過ぎないと指摘。EUも既に訪問者から写真と指紋を収集しているが、米国は一度で済むのに対しEUは入出国のたびに必要な点を対比。
  - **eigenspace**: この新制度で米国は自国に渡航しない人の生体データにもアクセスできるようになるのか不明瞭だと疑問視。
  - **NietTim**: 米国に行きたい人だけがデータを送ればよく、渡航しない大多数のデータまで送る必要はないと反論。
- **Vinnl**: これが「全ての」生体データへのアクセスを許すのか、米国境を越える人のものだけなのか不明瞭だと疑問視。指紋なら既に入国時に収集されパスポートのICチップからも読み取れるのではと問う。
  - **some_random**: 国境を越える人のみが対象で主に指紋であり、偽造パスポート検出が目的だと説明。
  - **NietTim**: 建前では国境を越える人のみだが、「もう2012年ではない」ため実際にどう運用されるか分からないと懐疑的。
- **speak_plainly**: これは旅行者にとって良いことで、データとインテリジェンスを活用する国境警備の方が、些細な申告漏れを取り締まる旧来型の警察的手法より優れていると擁護。
  - **afarah1**: Flockなど他の監視技術にも同じことが言え、「悪用されるまでは」良いものに見えるだけだと警告。
  - **samsartor**: 同意しつつ、政府や企業がテクノロジーを使って「悪事を合法化」する懸念があり、自動化された安全保障は特定集団を迅速かつ無自覚に標的にし得ると危惧。
- **cm2187**: ESTAとビザの違いが実質的に理解できず、事前手続き・支払い・個人情報提供・却下の可能性がある点は同じで、EUと英国も相互主義を取っているため「ビザ免除渡航」自体がフィクションだと批判。
  - **ExoticPearTree**: ESTAとビザは異なり、ESTAは出身国が「信頼」されているため入国審査が緩いのに対し、ビザはより厳格な審査だと説明。

## 8. [Inertia-1: An Open Exploration to a Unified Motion Foundation Model](https://yang-ai-lab.github.io/Inertia-1/)

**Score:** 14 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=48978388)

腕時計型センサーで学習した単一のモーション基盤モデルが、身体の様々な部位やセンサータイプに転移可能であることを示す研究プロジェクト。日常の身体運動データから活動認識、歩行分析、長期的な健康予測まで複数のタスクを統一的なアプローチで扱うことを目指している。

### Key Discussion Points

まだコメントが付いていない。

## 9. [Perfection Is Not Over-Engineering](https://var0.xyz/posts/perfection-is-not-over-engineering.html)

**Score:** 8 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=48979120)

業界が「完璧さ」と「過剰設計」を誤って同一視していると指摘するエッセイ。著者は「過剰設計とは間違った問題を解くこと」であり、要件と制約が明確であればそれに適合する唯一の完璧な解が導かれるはずだとし、過剰設計の真の原因は完璧さへの執着ではなく要件定義の不十分さにあると論じている。

### Key Discussion Points

まだコメントが付いていない。

## 10. [Satan's 19th-Century Bank Note (2017)](https://www.historytoday.com/miscellanies/satans-19th-century-bank-note)

**Score:** 14 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=48973455)

元記事はアクセス制限(403)のため本文を取得できず、また有効なアーカイブURLもコメント欄には見当たらなかった。タイトルから、19世紀の紙幣に悪魔を思わせる図柄が隠されていたとされる逸話を扱った歴史コラムと推測される。

### Key Discussion Points

- **PopAlongKid**: 「(2017)」と初出年を指摘した上で、英国で発行された新しい5ポンド・10ポンド紙幣(プラスチック製)が「モノポリーのお金」などと批判されている件を引用しているが、元記事本体の19世紀の紙幣とは異なる話題であり、脱線したコメントと見られる。

## Trends

今回のトップ10では、AIの光と影を巡る議論が目立った。GPT-5.6を使ったWordPress脆弱性発見（4位）とOpenCode批判（2位）はいずれも大きな反響を呼び、AIエージェントの能力向上が攻撃・開発の両面で信頼性やガバナンスの課題を浮き彫りにしている。一方で、ルーマインの地籍データベース破壊事件（1位）やEUと米国の生体データ共有問題（7位）は、インフラの堅牢性やプライバシー・監視国家化への懸念という古典的だが根強いテーマを提起した。他にも、ハードウェアの信頼性（ECC/DDR5）、光害対策、往年のゲームへのノスタルジー（Airport Simulator）、ソフトウェア設計哲学のエッセイなど、技術者コミュニティらしい多様な関心が並んだ一日だった。
