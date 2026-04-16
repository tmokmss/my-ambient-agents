---
title: "Hacker News トップ10サマリー（2026年4月16日）"
date: "2026-04-16T03:43"
category: "summary"
summary: "GoogleのICEへのデータ提供が1200点超えで最多票、Cal.comクローズドソース化論争、AIセキュリティの将来像など"
tags: ["hackernews", "security", "privacy", "ai", "open-source", "linux"]
---

## 1. [Stealth signals are bypassing Iran's internet blackout](https://spectrum.ieee.org/iran-internet-blackout-satellite-tv)

**Score:** 22 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=47787877)

衛星放送の標準フォーマット（MPEGトランスポートストリーム）の隙間にファイルを埋め込んで配信する「Toosheh」システムが、イランのインターネット遮断を迂回するために活用された。2026年1月のイラン停電中に、BBC PersiaやVOA Farsiのニュース、抗議者向け救急マニュアル、アンチサーベイランスソフトウェアが配信された。装置は50ドル以下で入手でき、受信専用のため当局からの追跡が困難だ。

### Key Discussion Points

コメントなし。

---

## 2. [Cybersecurity looks like proof of work now](https://www.dbreunig.com/2026/04/14/cybersecurity-is-proof-of-work-now.html)

**Score:** 295 | **Comments:** 106 | [Post](https://news.ycombinator.com/item?id=47769089)

現代のAI活用セキュリティは暗号通貨のプルーフ・オブ・ワークに似た「計算リソースの消耗戦」に変容しつつあると論じる記事。AnthropicのMythosモデルは100Mトークン（約1万2500ドル）の予算があれば、シミュレートされた企業ネットワーク侵害を10回中3回成功させた。「攻撃者が費やすトークン以上のトークンを脆弱性の発見に費やすことで、システムを強化できる」という単純な方程式が成立しつつある。

### Key Discussion Points

- **somesortofthing**: 守備側は自分のコードを一度スキャンするだけで済むが、攻撃者は全ターゲットを個別スキャンする必要があり、コスト非対称性が守備側に有利に働く
  - **anitil**: 最近のポッドキャストでは「ハーネスを改良するより次のモデルを待つ戦略の方が成績が上だった」という知見が紹介されており、この非対称性が永続するかは不明
- **j2kun**: 記事が引用する「AI Security Institute」はAI業界出身者中心で、セキュリティ専門家がいない。「トークンを増やせばセキュリティが強化される」はAI業界の自己利益に見える
  - **tptacek**: フロンティアモデルが「fuzzing程度の革命か、それ以上か」が本質的な論点であり、セキュリティ実務者コミュニティでも活発に議論されている
- **mikewarot**: 1970年代のメインフレーム研究（KeyKOS/EROS）はケイパビリティベースの多レベルセキュリティを解決していたが、PC革命がそれを捨てた。当時の設計が採用されていれば「サイバーセキュリティ」という概念自体が不要だったかもしれない
- **nostrademons**: Hoare氏の名言「欠陥が明らかに存在しないほど単純にするか、明らかな欠陥が存在しないほど複雑にするか」を引用
- **jzelinskie**: セキュリティは常に「相手がどれだけ金をかけるか」のゲームであり、LLMは価格を変えただけで本質的なパラダイムは変わっていない

---

## 3. [The paper computer](https://jsomers.net/blog/the-paper-computer)

**Score:** 18 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=47747770)

James Somersが提唱する「紙とAIを組み合わせたハイブリッドコンピューティング」の構想。スクリーン時間を減らしながらAIを活用して手書きメモやノートカードをデジタルと接続する方法を探る。現代のスマートフォンが有用なツールと中毒性の高い機能を「バンドル」することで生産性を損なっている問題を指摘し、単一タスクに特化したOSモードの実装を提案している。

### Key Discussion Points

コメントなし。

---

## 4. [I made a terminal pager](https://theleo.zone/posts/pager/)

**Score:** 80 | **Comments:** 18 | [Post](https://news.ycombinator.com/item?id=47786164)

Leo RobinovitchがGo言語で開発したターミナルページャー「lore」の紹介。Bubble Teaフレームワークを使用し、完全一致・正規表現・大文字小文字無視の3種類の検索、テキスト折り返し、Unicodeサポート、ANSIカラー表示などの機能を備える。`export PAGER=lore`と設定するだけでgit・manなどの標準ツールとも連携可能だ。

### Key Discussion Points

- **CGamesPlay**: fd、fzf、sdなどモダンなCLIツール群と同様の「lessの現代的代替」を期待しており、「表示位置を保持したままリフレッシュ」機能を特に望む
- **ancientcatz**: CharmletのCLIツール集「gum」にも同様のページャー機能があると紹介
- **vomayank**: 既存のlessなど従来ページャーの具体的な制限が何だったかを質問

---

## 5. [ChatGPT for Excel](https://chatgpt.com/apps/spreadsheets/)

**Score:** 113 | **Comments:** 95 | [Post](https://news.ycombinator.com/item?id=47785397)

OpenAIがGPT-5.4を搭載したChatGPTをMicrosoft Excelと統合したアドインをリリース。スプレッドシート操作をAIに自然言語で指示できるようになる。MicrosoftのCopilotアドインと比較して実用性が高いと評価され、Excelユーザーから関心を集めている。

### Key Discussion Points

- **lateforwork**: MicrosoftのCopilotは「チャットパネルを開くだけ」で使いものにならないと批判。一方でClaude AI for PowerPointの完成度に驚いており、ChatGPT for Excelへの期待も示す
- **strongpigeon**: Excel Add-Inを10年前に開発した経験者として、バッチRPCメカニズム（`context.sync()`）の実装に言及。Webでの往復レイテンシが数秒になる可能性も指摘
- **angadsg**（ChatGPTエンジニア）: 「GPT-5.4の能力をExcelに提供するためにリリースした」と公式コメントし、フィードバックを歓迎

---

## 6. [Google broke its promise to me – now ICE has my data](https://www.eff.org/deeplinks/2026/04/google-broke-its-promise-me-now-ice-has-my-data)

**Score:** 1210 | **Comments:** 534 | [Post](https://news.ycombinator.com/item?id=47782570)

2024年9月にコーネル大学でパレスチナ連帯デモに参加したPhD留学生のAmandla Thomas-Johnson氏のGoogleアカウントデータが、行政召喚状に基づきICEへ事前通知なしで提供されたとEFFが報告。Googleは長年「法的プロセスへの対応前にユーザーへ事前通知する」と約束していたが、この保護が機能しなかった。EFFはカリフォルニア州とニューヨーク州の司法長官に対しGoogleの欺瞞的商行為として苦情を申し立てた。

### Key Discussion Points

- **Jimmc414**: 修正第1条は米国内のすべての人に適用される確立された法律であり、政治的表現を理由に移民規制を行うことは違憲。行政召喚状には守秘命令が含まれる場合があるためGoogleを擁護
  - **oceanplexian**: 米国外の非市民への修正第1条適用範囲は判例が限定的で複雑だと指摘
  - **rootusrootus**: 行政召喚状の守秘命令は法的拘束力がないという見解を示す
- **eurleif**: Googleのポリシーには「法的に通知が禁止されている場合」という例外があり、召喚状に守秘命令があったかどうかが重要な検討点
  - **jgkelley**: EFFの書簡によると、該当の召喚状には口封じ命令が含まれていなかったと確認
  - **FireBeyond**: ICEの弁護士が「開示するな」と言っても行政召喚状に対する口封じ命令は法的効力を持たない
- **jfoworjf**: この件をきっかけに約20年分のGoogleアカウントを削除し、Google Photosを削除、Proton Mailに移行、自己ホスティングへ切り替えた
- **keithnz**: Googleとプライバシーへのフォーカスよりも、ICEが合法的に滞在している人々をターゲットにしている問題の深刻さを指摘。政府から身を隠すことは本質的な解決ではないと主張
- **eaf7e281**: ICEがそれほど大きな権力を持っている背景への疑問を呈し、私設軍隊に例える

---

## 7. [God sleeps in the minerals](https://wchambliss.wordpress.com/2026/03/03/god-sleeps-in-the-minerals/)

**Score:** 478 | **Comments:** 99 | [Post](https://news.ycombinator.com/item?id=47778475)

ロサンゼルス自然史博物館の「Unearthed: Raw Beauty」展示で撮影した鉱物標本の写真集。タイトルはParamahansa Yoganandaの「神は鉱物の中に眠り、花の中に夢を見、動物の中に目覚め、人の中に自分が目覚めていることを知る」という教えに由来する。シンプルなフォトエッセイながら、鉱物愛好家から哲学的・精神的な議論まで幅広いコメントを集めている。

### Key Discussion Points

- **Uncle_Brumpus**: 地元の鉱物クラブへの参加を強く薦め、私有地や採石場での特別発掘体験を紹介。「自分の手で掘り出した小さな標本でも達成感がある」
  - **throwup238**: 博物館に展示される素晴らしい標本の多くは私有地の鉱山から出ており、一般愛好家のアクセスは難しい
  - **binyu**: 地質図を活用して地元の岩石や鉱物を調べ、鉱山や採石場の近くを探せば標本が見つかると反論
- **thereWasAFish**: 写真自体も印象的だが、コメント欄の「製造された怒り」が面白いと観察。「リンゴが好きなのにオレンジを嫌うのか？」という論法で偽の対立構造を指摘
- **alnwlsn**: 鉱物博物館でアスベストが展示されているのが印象的と紹介。「岩から作られた柔軟な素材で、しかも人を殺せる」という逆説的な存在
  - **bregma**: 天然のアスベスト岩石は比較的安全であり、危険なのは工業的加工で繊維が短く切断され吸入される場合
- **jrsdav**: 鉱物の結晶構造は原子配列の「エコー」であり、原子スケールのパターンが観察できるスケールで繰り返されていると観察
- **billiam**: 鉱物の真の美しさは顕微鏡レベルにあると主張。地球の鉱物の3分の2は生命体との相互作用から生じており、生物と同様に進化してきたという仮説も紹介

---

## 8. [Cal.com is going closed source](https://cal.com/blog/cal-com-goes-closed-source-why)

**Score:** 237 | **Comments:** 178 | [Post](https://news.ycombinator.com/item?id=47780456)

スケジューリングソフトウェア「Cal.com」が5年間のオープンソース運営から転換し、クローズドソースへの移行を発表。AIが公開コードベースから脆弱性を高速で発見できるようになったことを主因として挙げており、「オープンソースは攻撃者に金庫の設計図を渡すようなもの」と表現。MIT ライセンスで「Cal.diy」というオープンソース版を別途公開する。

### Key Discussion Points

- **simonw**: Breunig氏の記事（本日2位）が正反対の結論を示していると指摘。オープンソースは監査コストを共有できるためむしろクローズドより安全になりうる
  - **dang**: HN管理者が同記事（「Cybersecurity looks like proof of work now」）を再掲した旨を案内
- **ryanleesipes**（Thunderbird代表）: 「Thunderbird Appointmentは永遠にオープンソースである」と宣言し、Cal.comからの移行支援を表明
  - **winrid**: 「Thunderbirdに会うには予約が必要ですか？」とユーモラスに返信
  - **sashimimono**: Thunderbirdは古いハードウェアでも重いと批判し、新機能追加より軽量化を優先すべきと訴える
- **ButlerianJihad**: 「リリース前にLLMでコードをスキャンすれば解決するのでは？」と反論。Linusの法則がLLMによって今まさに実現されていると指摘
- **diebillionaires**: 「AIに見られたくないからクローズドソースにする」という理由は「笑える、見え透いた言い訳」だと批判
- **opem**: 「オープンソースを深く信じていた」という声明への強い懐疑を表明

---

## 9. [Introduction to Spherical Harmonics for Graphics Programmers](https://gpfault.net/posts/sph.html)

**Score:** 30 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=47749548)

球面調和関数（Spherical Harmonics）のグラフィックスプログラマー向け入門記事。SHは球面上の関数を少数の係数で効率的に近似する数学ツールで、3DCGのライティング表現（キューブマップの圧縮、ライトマップの照度計算）に活用される。高周波成分による「リンギング」アーチファクトの問題とウィンドウ関数による解決策についても解説している。

### Key Discussion Points

- **hackingonempty**: 球面調和関数はAmbisonicサラウンドサウンドにも応用されており、任意のスピーカー配置へのデコードや音場の任意軸回転が可能

---

## 10. [PiCore - Raspberry Pi Port of Tiny Core Linux](http://tinycorelinux.net/5.x/armv6/releases/README)

**Score:** 89 | **Comments:** 10 | [Post](https://news.ycombinator.com/item?id=47784244)

Raspberry Pi向けにTiny Core Linuxを移植した「PiCore」の紹介。Tiny Core Linuxは極めてコンパクトなイミュータブルLinuxディストリビューションで、ラズベリーパイ上での軽量環境構築に適している。PiCorePlayerなどの派生プロジェクトのベースとして、Squeezebox音楽クライアントやLyrionミュージックサーバーの実行環境としても活用されている。

### Key Discussion Points

- **eccgecko**: ヘッドレスで遠隔管理しているRaspberry PiのフルシステムバックアップにPiCoreをライブリカバリOSとして活用できないかを質問。ddをncにパイプする手法とA/Bブートの組み合わせを提案
- **cas**: PiCoreをSqueezeboxクライアント・Lyrionミュージックサーバーの実行環境として活用している「PiCorePlayer」を高く評価
- **alsetmusic**: 「TinyCoreLinuxは長年特別な場所を占めている。昔使っていたPiを引っ張り出したくなった」と感慨を示す

---

## Trends

本日のHacker Newsトップ10からは、以下の共通テーマが浮かび上がる。

1. **AIとセキュリティの逆説**: 2位の「セキュリティ＝プルーフ・オブ・ワーク」論と8位のCal.comのクローズドソース化は、AIが脆弱性発見を変革しているという共通前提を持ちながら、正反対の結論（オープンソースの優位性 vs. クローズドソース化の必要性）を示している。HNコミュニティはこの矛盾を鋭く指摘した。

2. **政府による監視と市民の自由**: 6位のGoogle/ICE問題は今日最大の話題で、プライバシー技術の限界、修正第1条の適用範囲、行政権力の拡大に対する懸念が複雑に絡み合った。1位のイランのインターネット遮断迂回技術も同じ文脈にある。

3. **開発者ツールの現代化**: 4位のターミナルページャーや10位のPiCoreなど、レガシーなシステムツールを現代の要求に合わせてアップデートする試みへの継続的な関心が見られる。

4. **AI統合が既存市場を侵食**: 5位のChatGPT for Excelは、MicrosoftのCopilotへの批判を引き出しながら、OpenAIが直接生産性ソフトウェア市場に切り込んでいる現状を示している。

5. **自然科学への愛着**: 7位の鉱物写真エッセイが478ポイントを集めたことは、技術が中心のHNでも、自然科学の美しさや哲学的な視点が強い共感を呼ぶことを示している。
