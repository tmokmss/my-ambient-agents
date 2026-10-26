---
title: "Hacker News トップ10 ダイジェスト（2026年10月26日）"
date: "2026-10-26T04:28"
category: "summary"
summary: "Dolly Parton の Imagination Library、タブに植物が生える拡張、IBM CEO のオープンウェイト論、F-Zero X 3DS 移植などを紹介。"
tags: ["hackernews", "summary"]
---

## 1. [Dolly Parton's Imagination Library](https://imaginationlibrary.com/)

**Score:** 457 | **Comments:** 85 | [Post](https://news.ycombinator.com/item?id=50234474)

Dolly Parton が 1995 年に故郷の東テネシーで始めた、0〜5 歳の子ども向け無料絵本郵送プログラム。現在は米・加・英・豪・アイルランドで展開し、家庭の収入を問わない。実際の費用は各地域のパートナー（慈善団体・自治体など）が負担する。

### Key Discussion Points

- **arjie**: 娘が利用しており、卸売 1 冊 2.5 ドルでどう成り立つのか調べた。選書・配送・価格交渉は本部が担い、冊あたりの資金は地元団体が出す仕組みで、パートナーがいない地域の子は受け取れない。
  - **conductr**: 出版社側も初期の注文量を確保できるため、極めて低い単価を出せるのだろうと推測。
  - **graywh**: 州政府が出資する例もあり、テネシー州は費用の半分を負担している。
- **brokenmouse**: 裕福なので不要だと思い、登録されて腹が立った。それでも最初の本が届くと 3 歳の息子が大喜びし、考えが変わった。
  - **talon8635**: 抽選ではなく、登録すれば誰でも受け取れるので、他の子の分を奪うことにはならない。
  - **what**: ラベルに資金提供者が書いてある。それが地元の図書館や自治体なら、そちらへの寄付も考えてほしい。
- **sarchertech**: 5 歳の息子の最後の本が届いたのは Dolly の訃報の直後で、「I will always love you」と結ぶ彼女からの手紙が同封されており、妻が涙した。
  - **rboyd**: 毎月の本に慣れてしまい、卒業すると子どもの成長の早さと Dolly の優しさを同時に実感する。
- **dead_hn_theory**: 「もっとニンゲンに野心を持とう」（同日の danluu の記事のもじり）。
  - **eddieroger**: 称賛されるべきは Dolly のような人だ。
- **bredren**: 多様な文化を反映した選書がされており、80 年代の絵本が白人男児中心だったのと対照的。

## 2. [Overgrown, when plants invade your abandoned tabs](https://charliegerard.dev/blog/overgrown-extension/)

**Score:** 197 | **Comments:** 56 | [Post](https://news.ycombinator.com/item?id=50197108)

放置したタブに植物が生い茂る Chrome 拡張。タブが画面外にある間だけ時間が進み、5% 以上覆われると、マチェーテ・チェーンソー・火炎放射器で刈るまで内容をクリックできない。成長速度は設定で変えられる。作者は創作の遊びとして作ったと述べている。

### Key Discussion Points

- **drfloyd51**: 実はタブの古さを視覚化する実用性があり、どれを使っているかが中身を見なくても分かる。被覆率の上限を調整可能にしてほしい。
  - **paid_dot_expert**: 古いタブを溜めないよう人間側に学習させるフィードバックループになる。
  - **cactusplant7374**: 邪魔で苛立つだけで、現代のブラウジングには役立たない。
- **jdprgm**: ブラウザはこれほど多いタブを想定していない。自分は複数端末・プロファイル合計で約 12,000 タブある。
- **triclops200**: 作者が没にした「刈るまでタブを閉じられない」案をオプションで入れてほしい。
- **newscracker**: Firefox 版が欲しい。リポジトリには非 Chromium 系で動くか明記がない。
- **Dwedit**: 可愛さよりメモリが欲しいので、タブサスペンダーを使っている。
- **profsummergig**: Chrome のタブグループで放置タブ問題は解消した。

## 3. [IBM CEO says open weight models are now irresistibly good and cheap on-prem](https://www.theregister.com/systems/2026/10/22/ibm-ceo-says-open-weight-models-are-now-irresistibly-good-and-cheap-on-prem/5304640)

**Score:** 89 | **Comments:** 43 | [Post](https://news.ycombinator.com/item?id=50238088)

IBM の Arvind Krishna CEO は Q3 決算説明会で、オープンウェイトモデルは運用コストが 10〜25% 程度で効果は約 90% に達し、企業のオンプレ AI に適すると述べた。多くの企業は 2〜3 ラックで足りる一方、GPU クラスタリングやネットワークの専門人材が不足しており、IBM は導入支援ソフトと Spyre アクセラレータで需要を取り込む考え。四半期売上は 171 億ドル（+5%）。

### Key Discussion Points

- **jacquesm**: 8GPU 機と DGX Spark 2 台で自前運用し、数か月有料モデルを使っていない。トークンは多少増え品質もやや劣るが、人間が見て直せるので問題なく、作業内容を外部に渡さない点の価値が大きい。
- **collinmcnulty**: 自社に有利な話をする CEO の発言を重視すべきでない。真偽はともかく、IBM が言っても情報価値はない。
- **jains99**: 動かすハードウェアはまさに IBM が売りたいものだ。
- **trollbridge**: 記事にある通り、カーネルエンジニアやネットワークの専門家がいない企業が運用で苦労するはず。
- **djelu**: DeepSeek 4.1 Flash の人気を見ると、自社運用を真剣に検討する企業が増え、推論提供に乗り出す所も出るだろう。
- **CookieCrisp**: 従来の用途には十分でも、これから来るものに足りるかは疑問。

## 4. [F-Zero X on Nintendo 3DS](https://hypnotize.works/gdx-3ds/postmortem/index.html)

**Score:** 80 | **Comments:** 40 | [Post](https://news.ycombinator.com/item?id=50237078)

F-Zero X のデコンパイル版を 3DS に移植したプロジェクトの事後検証。1 人が指揮し、長く続く 1 本の Claude セッションが統括した。New 3DS では立体視 60fps（中央値 59.6fps）を達成し、v1.0.0 で Old 3DS にも対応した。第 1 フェーズだけで約 31.7 億トークン、API 定価換算で約 4,974 ドルと見積もっている。

### Key Discussion Points

- **cdnutter**: Switch の方が高性能なのに、なぜ 3DS が移植の入口になるのか。
- **coffeesoda**（作者）: Claude の使い方を学ぶ良い機会だった。64DD 対応、ローカル／オンライン対戦、コース共有用 QR コードを含む大型更新を間もなく出す予定。
- **Gigachad**: コストは API 価格での計算だが、実際はサブスクリプション利用が大半のはずで、実費が知りたい。
- **peggigulgow**: 3DS のフィルレート制約が焦点で、N64 の T&L パイプラインをタイル型 GPU に載せ替えて 60fps を保つ部分の数値を知りたい。
- **matthewfcarlson**: 初代 Xbox のゲーム 2 本を移植中で、AI にほぼ任せきりになっている。

## 5. [Brazil elections: Lula secures fourth term after dramatic comeback](https://www.bbc.com/news/articles/cmvg7p001qj9o)

**Score:** 53 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50238557)

日曜の決選投票で、ルラ大統領が右派のフラヴィオ・ボルソナロ氏を破り、4 期目の当選を決めた。10 月 4 日の第 1 回投票ではボルソナロ氏が先行しており、3 週間での逆転だった。ラテンアメリカで現職が敗れ右派が伸びる流れに逆行する結果だが、議会は敵対的で国内は分断されている（Wayback スナップショットに基づく）。

### Key Discussion Points

- **zapataband1**: Carbon Brief の分析によれば、ルラ政権下でニュージャージー州ほどの面積のアマゾン森林が伐採を免れた。

## 6. [Attention Is Not What You Need (2025)](https://arxiv.org/abs/2512.19428)

**Score:** 53 | **Comments:** 19 | [Post](https://news.ycombinator.com/item?id=50237224)

自己注意を使わず、トークン対を Grassmann 多様体上の 2 次元部分空間として Plücker 座標で符号化する「Causal Grassmann」層を提案する論文。Wikitext-2 で 13〜18M パラメータのモデルが同規模 Transformer の perplexity の 10〜15% 以内に迫り、SNLI では DistilBERT 上のヘッドがわずかに上回った。計算量は系列長に線形。

### Key Discussion Points

- **oofbey**: 18M パラメータの玩具規模と古いデータセットだけでは何も証明できない。Transformer の要点は巨大モデルを容易に訓練できることだ。
- **charcircuit**: スケールが全てなので注意なしの大規模モデルも動くが、時間と計算が限られる以上アーキテクチャは重要。
- **drnick1**: arXiv の論文は査読されていない。
- **Grimblewald**: LLM が書いたような文章で、グラフ等で人間の労力を示してほしい。
- **tmsh**: 著者のネット上の足跡がほとんどないのが気になる。

## 7. [Show HN: TitleArt – Make text like it's 1997](https://titleart.dvy.io/)

**Score:** 32 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=50238708)

1990 年代の WordArt 風の装飾文字を作れる Web ツール。ページは JS 描画で本文が取れなかったため、作者のコメントに基づく要約。元の WordArt のスクリーンショットを見ながら、組み込みスタイルを目視で再現した。

### Key Discussion Points

- **davidbarker**（作者）: 90 年代後半の学校の PC 室を思い出す。作ったものを共有してほしい。
- **mixdup**: iPhone 開発時の Apple のソフトウェア責任者 Scott Forstall は、Microsoft でのインターン時に WordArt の開発に関わった。
- **muglug**: Slack の Word 文書レンダラーに WordArt 対応を加えた。現代の Word でも WordArt は使えるが扱いが難しい。
- **windows2020**: 赤青グラデーションのスタイルが好き。

## 8. [Show HN: A Truly Modular Keyboard](https://github.com/notaroomba/keybytes)

**Score:** 31 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=50228115)

全てのキーが 1u の独立した基板で、並べ替え自由なモジュラーキーボード。各キーに CH32V003（RISC-V）を載せ、四辺のポゴピンで電源と I2C を接続する。メイン基板は STM32WB55 で Bluetooth と USB に対応し、磁石付きケースで固定する。三角や円形など好みの形にしたいという動機から始まった。

### Key Discussion Points

- **kaipereira**: キー数が多いときの剛性と、量産時の材料費を知りたい。
- **trollbridge**: キー刻印を e-ink などで書き換えられるとさらに良い。
- **jasonjmcghee**: 好きな配置にするためのスペーサーや延長部品が必要。
- **pparanoidd**: 車輪を付けて机の上で自走させたい。

## 9. [PaperPilot – Zero-Cloud, Pure-Rust PDF Engine with WASM and MCP](https://github.com/KrushnaVardhanReddy/PaperPilot)

**Score:** 14 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=50238739)

Rust 製の PDF／文書ツールキット。同じエンジンを MCP サーバー、CLI、ブラウザ（WASM）、デスクトップアプリ、ローカル REST API として使え、結合・分割・圧縮・OCR・透かし・PII スキャンなどを備える。ファイルは端末外に出ない。

### Key Discussion Points

- **colesantiago**: MuPDF のソースを元に C から Rust へ書き換えたものではないか。そうなら開示し、ライセンスは Apache ではなく AGPLv3 にすべきだ。

## 10. [Behind the scenes at the NeXT Computer office](https://exhibits.stanford.edu/menuez/browse/next-computer-inc?per_page=96&sort=pub_year_isi+asc%2C+title_sort+asc&view=masonry)

**Score:** 11 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=50238763)

スタンフォード大の Doug Menuez 写真アーカイブにある、NeXT Computer 社内の写真集。ページ本文は取得できず、タイトルとコメントに基づく紹介。

### Key Discussion Points

- **rogerrogerr**: 27 歳で、対面で新しいものを作る当時の様子に憧れと喪失感を覚える。
- **mvkel**: NeXTcube は 1991 年までに 5 万台しか売れなかったが、1 台は Tim Berners-Lee が最初のブラウザとサーバーの開発に使った。
- **felixding**: NeXTSTEP の UI が好きで、現代ハードで動く NEXTSPACE のような取り組みに期待する。
- **WillAdams**: 大学最終年に PenPoint 端末と NeXT Cube を組み合わせて使ったのが最盛期だった。

## Trends

- **AI が開発・運用の前提に**: F-Zero X の 3DS 移植は Claude 主導で、約 5,000 ドルのトークン費用が議論になった。IBM CEO のオープンウェイト論とそれへの反応も含め、コストとローカル運用が話題の中心。
- **遊び心のある小さな制作物**: Overgrown、TitleArt、モジュラーキーボードなど、実用性より楽しさや懐かしさを軸にした作品が人気。
- **人の善意とノスタルジー**: Imagination Library が圧倒的な票を集め、NeXT や WordArt など往年のコンピュータ文化にも関心が集まった。
