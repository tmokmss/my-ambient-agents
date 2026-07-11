---
title: "Hacker News トップ10サマリー（2026年7月11日）"
date: "2026-07-11T03:32"
category: "summary"
summary: "AppleがOpenAIを営業秘密窃盗で提訴、AIが数学の未解決問題を証明、壁越しにWiFiを可視化するRFデバイスなどが上位に"
tags: ["hackernews", "ai", "openai", "apple", "spacex", "rf", "physics"]
---

## 1. [Einstein's relativity rules chemical bonds in heavy elements, new research shows](https://www.brown.edu/news/2026-07-09/chemical-bonds-relativity)

**Score:** 132 | **Comments:** 46 | [Post](https://news.ycombinator.com/item?id=48866134)

ブラウン大学の化学者チームが、重元素における三重結合の構造に関する直接的な実験証拠を初めて提示し『Science』誌に発表した。炭素とビスマスの分子を絶対零度近くまで冷却して光電子分光法で分析した結果、従来の「シグマ結合1本＋パイ結合2本」という三重結合の描像とは異なり、「パイ結合1本＋混成シグマ-パイ結合2本」に近い構造であることが判明。重い原子核では電子が光速に近づき相対論的なスピン-軌道相互作用が働くためで、化学教科書の改訂にもつながりうる発見。

### Key Discussion Points

- **kristianp**: 記事の核心部分「相対論的領域では電子のスピンと軌道はもはや独立ではない（スピン-軌道相互作用）」を引用し興味深いとコメント。
- **nanolith**: 重元素への相対論効果（金の色など）はすでに知られていたはずでは、と指摘。
- **Svoka**: これはディラック方程式（特殊相対性理論を量子力学に組み込んだもの）のさらなる実験的確認だと位置づけ、論文PDFへのリンクを共有。
- **cyberax**: 相対論は金の色や鉛が電池材料に適している理由など、重元素の様々な奇妙な性質の原因になっていると補足。

---

## 2. [QuadRF can spot drones and see WiFi through my wall](https://www.jeffgeerling.com/blog/2026/quadrf-can-spot-drones-and-see-wifi-through-my-wall/)

**Score:** 484 | **Comments:** 177 | [Post](https://news.ycombinator.com/item?id=48861717)

（元記事はアクセス制限のためコメントを基に要約）QuadRFは、独自設計のADC（1ビットΣΔオーバーサンプリング方式）とFPGAを用いたオープンソースのRF可視化デバイス。約4.9〜6GHz帯（2.4GHz帯のWiFi/Bluetoothは対象外）で電波を可視化し、ドローンの検出や壁越しのWiFi信号の可視化が可能。開発者本人がHNでQ&Aに応じ、Jeff Geerlingがレビュー動画を公開したことで話題になった。

### Key Discussion Points

- **mrtnmcc（開発者本人）**: 質問対応を表明し、デモ動画や詳細解説動画を共有。UIはJeffのフィードバックを基に改善中とコメント。
  - **mallets**: カスタムADCの実装（1ビットΣΔオーバーサンプリング、FPGAのLVDS RXで受信）に着目し、低コスト・低ピン数化の工夫と分析。
  - **tverbeure**: KrakenRFのパッシブレーダーデモがITAR規制に抵触した事例を挙げ、同様の懸念はないか質問。
  - **radicality**: CrowdSupplyで購入したと報告しつつ、周波数帯選定の理由や2.4GHz帯非対応について質問。
- **piinbinary**: 音波版（音源の方角と距離を検出）が欲しいとアイデアを提示。
  - **flutas**: 音源特定（どの部分が異音を発しているか）に特化した製品がすでに市場に登場しつつあると紹介。
- **mlfreeman**: TVなどに秘密の5G通信モジュールが搭載されているという噂に触れ、こうしたデバイスで実際に検証できると期待。
  - **mikeweiss**: そのような未申告無線をFCCが許容するのか、通信費は誰が払うのかと疑問を呈す。
- **RobotToaster**: スマートグラスに組み込めたら面白いとコメント。

---

## 3. [Apple sues OpenAI, accuses ex-employees of stealing trade secrets](https://9to5mac.com/2026/07/10/apple-sues-openai-trade-secret-theft/)

**Score:** 658 | **Comments:** 319 | [Post](https://news.ycombinator.com/item?id=48865019)

Appleが2026年7月10日、OpenAIを営業秘密窃盗で提訴。元VP of Product DesignのTang Tanが面接時にAppleの機密プロジェクトコード名を使って情報を引き出し候補者に実物パーツの持参を指示していた疑い、元シニアエンジニアのChang Liuがセキュリティ脆弱性を悪用して1000ページ超の機密ファイルをダウンロードした疑いなどを主張。Appleは2月に懸念を伝えたが返答がなかったとし、差止命令と損害賠償を求めている。

### Key Discussion Points

- **joshstrange**: 「OpenAIは新入社員に、Appleを辞めたことを黙っておくよう指導していた」「Appleを辞める社員が機密情報を自分宛てにメールする一連のパターンを発見した」など、訴状の生々しい内容を引用。
  - **Aurornis**: Liu氏がAppleのラップトップを返却せず脆弱性を悪用して機密文書を持ち出し、Appleに残る知人から情報提供も受けていたと補足。
  - **MichaelDickens**: OpenAIがApple部品メーカーに対しApple公認と偽って特定の金属加工技術を使わせたという疑惑を引用し、Sam Altmanの過去の安全性審査に関する発言を連想。
- **Robdel12**: 「OpenAIはこれで完全に叩きのめされる。Appleは資金も弁護団も潤沢で、これは事実上決着済み」とコメント。
  - **overfeed**: 両社とも資金は潤沢なため、非公開の和解と「よく宣伝された提携」で終わる可能性を予想。
  - **sfifs**: OpenAIが米国政府に株式を提供している点に触れ、司法が行政の延長になりつつある懸念を提起。
- **xnx**: 「一つの領域でこう振る舞う企業は他の領域でも信用できない」と厳しく評価。
  - **_aavaa_**: Appleも他社の製品提案を聞いた上で自社実装（Sherlocking）することで批判されてきたと反論。
- **generj**: 「Appleは意図的にOpenAIのIPO申請に法的リスクを追加させようとしている」とディスカバリー（証拠開示）の展開に期待。
  - **j2kun**: 「ディスカバリーは我々にとってのエンターテインメントだ」とコメント。

---

## 4. [An iroh powered smart fan](https://www.iroh.computer/blog/an-iroh-powered-smart-fan)

**Score:** 42 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=48817539)

irohはクラウド不要でデバイス間通信を実現するオープンソースの「ダイアル・エニー・デバイス」ネットワーキングライブラリ。本記事ではESP32-WROVER（PSRAM 4MiB）にDHT22温湿度センサーとNoctua製5V PWM扇風機を組み合わせ、温度がしきい値を超えると自動で扇風機を起動する単純な制御ロジックを実装。WebAssemblyベースのブラウザGUIとRPCプロトコルで、クラウドサーバーを介さず世界中どこからでもリモート監視・制御できる点が特徴。

### Key Discussion Points

- **shermantanktop**: 「単純明快な仕組みを作るのに、これほど複雑で手の込んだツールチェーンを使える好例」とコメントし、本質的な制御コードはif文一行だけだと指摘。
- **skybrian**: irohにはNode.js向けのJavaScript APIがあるのに、なぜわざわざRustをWebAssemblyにコンパイルしてブラウザ向けサイトを作ったのか疑問を呈した（ブラウザ向けにはプラットフォーム非依存のJS/TS APIが望ましいはずと指摘）。

---

## 5. [The footgun of right-to-left decorative characters](https://blog.alexbeals.com/posts/the-footgun-of-right-to-left-decorative-characters)

**Score:** 20 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=48813246)

著者がブログの日付とカテゴリの区切りにマニ教の句読点フルーロン（𐫱）という装飾文字を使ったところ、隣接する数字（「400」など）の表示位置が崩れる問題に遭遇。原因はUnicode双方向アルゴリズムで、この文字がRTL（右から左）特性を持つため周囲のテキストの方向性に影響を与えてしまうこと。解決策として`<bdi>`要素での囲い込みやCSSの`unicode-bidi: bidi-override`の適用を提案している。

### Key Discussion Points

- **dhosek**: R-LとL-Rスクリプトの混在は昔からある鬼門で、単一言語のR-LテキストでもしばしばL-R文字が混じるため複雑化しやすいと解説。Unicodeのbidi仕様が複雑な理由の一つとも。
- **Georgelemental**: プレーンテキストでHTML/CSSが使えない場合はU+200E（LEFT-TO-RIGHT MARK）をRTL文字の後に置けば同様の効果が得られ、コピペ時にマークアップが失われても文字化けしないと補足。
- **rhplus**: 該当するような装飾文字が使われた凝ったドメイン名が取得されているのに実際にはリダイレクトされていないことに落胆したとコメント。
- **SoftTalker**: 「だから自分は標準ASCIIに固執している」と実用的な結論。

---

## 6. [An update on residential proxies and the scraper situation](https://lwn.net/SubscriberLink/1080822/990a8a5e2d379085/)

**Score:** 116 | **Comments:** 102 | [Post](https://news.ycombinator.com/item?id=48864252)

LWNサイトへのスクレイパー攻撃増加を扱った続報記事。攻撃には「レジデンシャルプロキシ」（数百万の異なる家庭用IPから少数回ずつリクエストを送る仕組み）が使われており、運営者は主に2種類に分かれる。マルウェアで乗っ取ったデバイスを使う犯罪者型（2025年初めにGoogleがボットネット「IPIDEA」を解体後、攻撃は一時減少）と、「倫理的に調達したIP」を謳いつつ無料VPNの見返りにユーザー端末をプロキシ化するBright Dataのような疑似合法型企業。LWNはサイト最適化やログインユーザー優遇などで対策しているが、根本解決なしにはインターネット全体がアクセス制限の壁の内側に追いやられる危険を警告している。

### Key Discussion Points

- **harshreality**: LWNがAnubisのようなプルーフオブワーク型対策を導入しなかった理由（正規読者への遅延、スクレイパーの回避が時間の問題であること）を記事から引用。
- **mips_avatar**: 「より良いCommon Crawlを作るのが解決策では」と提案。フロンティアAI企業への情報アクセスを閉ざす方向のレトリックはオープンウェブを傷つけ、Cloudflareのような単一企業に権限が集中する懸念を表明。
- **ValentineC**: 記事中の「メディアストリーミング機器が悪質スクレイピングソフトの主要な運び手になっている」という指摘を引用し、自宅やハッカースペースのルーターが侵害されていないか監査する方法を質問。
- **sixtyj**: 問題の本質はボットの量と強度であり、個人がwget/curlで数ページ取得する程度なら誰も気にしないはずと指摘。ページの平均寿命は10年で、サイト買収後の削除・改変も多く、アーカイブの重要性にも言及。
- **dang**: 関連する過去記事「Disrupting the largest residential proxy network」（2026年1月、221コメント）へのリンクを共有。

---

## 7. [GPT-5.6 Sol Ultra produces proof of the Cycle Double Cover Conjecture [pdf]](https://cdn.openai.com/pdf/04d1d1e4-bc75-476a-97cf-49055cd98d31/cdc_proof.pdf)

**Score:** 376 | **Comments:** 301 | [Post](https://news.ycombinator.com/item?id=48863490)

（PDFの直接解析ができなかったためコメントを基に要約）OpenAIの最新モデル「GPT-5.6 Sol Ultra」が、グラフ理論における未解決問題「Cycle Double Cover予想」の証明をPDFとして公開したという投稿。使用されたプロンプト自体も公開されており、コメントでは1時間弱で証明に到達したとの情報や、証明が非常に簡潔で専門家が見落としていた巧妙なトリックを突いている可能性が議論された。

### Key Discussion Points

- **mNovak**: 最新モデルであってもプロンプトの大部分が「状況報告や漠然とした楽観論、『証明されていない包括的な互換性の主張』を『日常的』と扱うことを拒否せよ」など、モデルに実際に問題を解かせるための指示に費やされている点が興味深いと指摘。
- **ak_111**: 単位距離問題と異なり反例ではなく証明そのものである点が印象的としつつ、証明が極めて簡潔なため専門家が見落としていた巧妙なトリックを利用している可能性を指摘。
  - **jvanderbot**: 簡潔さは既知の性質を新しい形で組み合わせて活用した結果に見え、文章も古典的な論文のようで感銘を受けたとコメント。
  - **qarl2**: 「専門家が見落とした」を否定的に捉える必要はなく、むしろ人間の数学者が目指すような、エレガントで新規性のある解法だと評価。
- **scrlk**: 発表ポストとプロンプトPDFへのリンクを共有。
  - **minimaxir**: プロンプト中の「最低8時間はこの問題に費やしてから諦めることを考えよ」という指示に着目し、モデルのハーネスが経過時間を認識する仕組みがあるのか疑問視。
  - **legulere**: 「1時間弱で」到達したとの記述について、生存者バイアス（他の失敗した試行がどれだけあるか）を懸念しつつも印象的だとコメント。
- **bgirard**: プロンプトが公開されたことを評価しつつ、フロンティアモデルのリリースごとに未解決問題がどれだけ試されているか、コミュニティで組織的に取り組まれているのか関心を示す。
  - **not-a-llm**: リーマン予想にはすでに数百万ドル規模の推論コストが投じられていると予想され、今後はさらに巨額の資金が「史上最も有名な未解決問題を解いた企業」の称号のために投じられるだろうと予測。

---

## 8. [SpaceX wants to launch 100k more Starlink satellites for 100x the bandwidth](https://www.zdnet.com/home-and-office/networking/spacex-wants-to-launch-100000-more-starlink-satellites/)

**Score:** 106 | **Comments:** 317 | [Post](https://news.ycombinator.com/item?id=48863064)

（元記事の取得に失敗したためコメントを基に要約）SpaceXが次世代Starlinkネットワークとして、既存衛星に加えさらに10万機の衛星を打ち上げ、帯域幅を100倍に引き上げる計画を発表したという内容。携帯電話への直接接続を含む真のグローバルカバレッジの実現も視野に入れているとみられる。

### Key Discussion Points

- **dtagames**: 米国の広大な地域では携帯電話が実際には使えない場所が多く、RV旅行の経験からインターネット接続（Wi-Fi通話、地図、天気を含む）の重要性は過小評価できないと述べる。
- **consumer451**: 中欧の田舎で当初Starlinkに期待していたが、その後EU予算で光回線（月25ドルで900Mbps・10ms）が引かれ、アフリカやインドのような資金の乏しい地域以外でのStarlinkの優位性が分からなくなったと吐露。
- **spullara**: このスレッドの多くが見落としている点として、この計画は携帯電話にも対応し真のグローバルカバレッジをもたらすことを指摘。
- **senderista**: 「これが夜空を覚えている最後の世代になるのだろうか」と衛星群による光害への懸念を表明。
- **TheAdamist**: 「SFのあらゆる要素を早回しで実現しようとしている、ケスラーシンドロームの到来だ」と軌道上デブリ増加リスクを皮肉る。

---

## 9. [The tech of 'Terminator 2' – an oral history (2017)](https://vfxblog.com/2017/08/23/the-tech-of-terminator-2-an-oral-history/)

**Score:** 184 | **Comments:** 68 | [Post](https://news.ycombinator.com/item?id=48862365)

1991年公開の映画『ターミネーター2』制作時、ILM(Industrial Light & Magic)の小規模CGチームが液体金属のT-1000をリアルに表現するために全く新しいツールを開発した経緯を当時のスタッフへのインタビューでまとめたオーラルヒストリー。骨格アニメーション時に表面をつなぎ合わせる「Body Sock」、テクスチャを固定する「Make Sticky」、反射性液体金属を表現する「Poly Alloy Shader」など独自技術を紹介。約50ショットに6ヶ月を要したこの作業がデジタルVFXの可能性を世界に示す転換点となった。

### Key Discussion Points

- **ortusdux**: 液体金属の弾丸着弾シーンに使われた特殊効果用スキブ（爆薬パーツ）は今なお最高峰の実写効果の一つと称賛。
  - **dmurray**: T-1000がキャラクターに変身している間に本人と同時に画面に映る場面では、一卵性双生児をキャスティングして実写で撮影していたと補足。
  - **skullone**: 弾丸の飛沫がCGだと思っていたが実写の特殊効果だったと知り驚愕したとコメント。
- **whycome**: 「Judgment Day」35周年を記念し4Kリマスター版が来月劇場再上映されると紹介。
  - **ButlerianJihad**: 作中設定の「審判の日」は1997年なので、正確には29周年になると訂正。
- **macote**: T2の制作にはSoftimageが使われていたと補足。
  - **whartung**: LAの核破壊シーンはMacで3Dレンダリングを行う小規模ソフトウェア会社Electric Imageが担当したと補足。
- **raychis**: 「T2で多くの技術がゼロから発明されていたとは知らなかった。不可能な問題を一つずつ解決しようとしたエンジニアたちから現代VFXの礎となる技術とアイデアが生まれた」と感銘を受けたとコメント。
  - **k12sosse**: 現在流通している4Kマスターの画質には不満があり、旧式技術でアップスケールされたためDVDの方が良く見えると批判。
- **eldog_**: 本インタビューにも登場するSteve 'Spaz' Williams（ジュラシック・パークのCGパイオニア）を描いたドキュメンタリー「Jurassic Punk」（2022年）を推薦。
  - **whycome**: 同ドキュメンタリーが無料でストリーミング視聴できると補足。

---

## 10. [Inference Optimization for MiMo v2.5: Pushing Hybrid SWA Efficiency to the Limit](https://mimo.xiaomi.com/blog/mimo-v2-5-inference)

**Score:** 53 | **Comments:** 20 | [Post](https://news.ycombinator.com/item?id=48814170)

XiaomiのMiMo-V2.5シリーズが採用する「Hybrid Sliding Window Attention」による推論最適化を解説する記事。KVCacheのストレージ容量をFull Attention比で約1/7に削減。Full AttentionレイヤーとSWAレイヤーで異なるメモリ配置を行うデュアルプール設計や、メモリ/ディスク/リモートを跨る分散キャッシュシステム「GCache」、キャッシュアフィニティを考慮したルーティングによりL2キャッシュヒット率を25%向上、スループットを30%改善したという。本番環境では平均93%、ヘビーユーザーでは95%以上のキャッシュヒット率を達成。

### Key Discussion Points

- **SwellJoe**: 効率化こそがLLM分野の「次のフロンティア」だと以前から主張しており、企業がトークンコストに敏感になる中、安価な中国製モデルが他業界同様に主要プロバイダーのシェアを侵食しつつある兆候があると分析。
- **LaurensBER**: XiaomiやDeepSeekの推論最適化エンジニアリングは興味深く、Z.aiの論文にも関心があるとしつつ、中国系ラボがここまでオープンである狙いには懐疑的な面もあると本音を吐露。
- **amanharshx**: 約95%のKVCacheヒット率という数字を評価し、MiMoもDeepSeekも実用上十分な性能を発揮していると述べ、オープンソースのペースを維持してほしいと期待。
- **killingtime74**: これは過去の成果のドキュメント化なのか、それとも今後値下げにつながるのかと質問。
- **ricardobeat**: 「スロップ（AI生成の粗悪コンテンツ）ばかりの中でこれだけ丁寧に書かれた記事は新鮮」と評価し、v3にも期待を寄せた。

---

## Trends

今日のHNトップ10から見えるテーマと傾向：

1. **AI企業間の対立が表面化**: AppleのOpenAI提訴（営業秘密窃盗）が658スコアでトップ、GPT-5.6による数学的未解決問題の証明も376スコアで上位に入り、AIの「能力の急進」と「倫理・法務リスク」が同時にHNの関心を集めている。

2. **個人開発のハードウェア・RFプロジェクトへの熱視線**: QuadRF（RF可視化デバイス）が484スコアでトップ2位につけ、開発者自らがコメント欄で対話する「Ask Me Anything」的な盛り上がりを見せた。ボトムアップな個人ハードウェアプロジェクトへの支持は根強い。

3. **AIの数学的能力を巡る懐疑と称賛の交錯**: GPT-5.6の証明に対し、プロンプトエンジニアリングの複雑さ、生存者バイアスへの懸念、一方で「エレガントな新規解法」と評価する声が並存し、AIの実力評価に対するHNコミュニティの慎重さが表れている。

4. **インフラ規模の物理的トレードオフ**: Starlinkの10万機追加計画では通信の恩恵と光害・スペースデブリ増加への懸念が拮抗し、相対性理論の化学結合への影響という基礎科学の話題も上位に入るなど、物理法則とテクノロジーの接点への関心が高い。

5. **「舞台裏」を掘り下げるオーラルヒストリー・技術解説が人気**: ターミネーター2のVFX開発秘話やMiMo v2.5の推論最適化解説など、既存技術・作品の「なぜ・どうやって」を丁寧に掘り下げたコンテンツが安定した支持を得ている。
