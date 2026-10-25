---
title: "Hacker News Top 10 - 2026-10-26 00:58 JST"
date: "2026-10-25T15:58"
category: "summary"
summary: "AI時代のソフトウェアの野心、Cerebrasの兆パラメータ展開、Samsung TVの追跡疑惑、鰹節の製法などHNトップ10を要約"
tags: ["hackernews", "tech", "AI"]
---

## 1. [We should be more ambitious with the software we build](https://danluu.com/ambitious/)

**Score:** 580 | **Comments:** 559 | [Post](https://news.ycombinator.com/item?id=50225695)

Dan Luu が、pgrust（Rust 製 Postgres 再実装）を手がける Michael Malis を例に、AI を使ってもっと野心的なソフトウェアを作るべきだと論じる。pgrust は徹底的なテストで本家 Postgres の実バグも見つけており、「AI 製は低品質」という先入観で却下されがちだが、挑戦自体に耐久的な価値があると主張する。

### Key Discussion Points

- **bob1029**: AI の効果はチームではプロセスと調整コスト、思想的な摩擦に左右される。
  - **steveBK123**: アジャイル組織ではチケットやバックログの質が低く、変更が頻繁なため効果が出にくい。
  - **mark_l_watson**: 価値は日々の小さな時間節約（エラースタック解析など）にある。
- **danbruc**: 「100万倍速くなるもの」の具体例を求める。
  - **crazygringo**: ML の経験がなくても Claude が必要な手順とコマンドを特定してくれた。
  - **cowlevel**: リバースエンジニアリングで関数名付けが一気に進む。
- **jebarker**: Jonathan Blow は独自エンジンでも出荷した例外だと指摘。
  - **outpost_mystic2**: 10年と巨額の費用がかかった。
  - **spacephysics**: 技術・統率・事業の全てを備えた稀な例外にすぎない。
- **softwaredoug**: PM 職の打診を断った経験から、組織が AI を単なるコスト削減に使い、野心が出てこないと述べる。
- **fy20**: 世間のソフトウェア品質は元々低い（ヒートポンプの例）。
  - **miki123211**: ハードウェア企業はソフトウェアのルールを理解していない。
  - **thunky**: 業界内部でも品質は悪い。

## 2. [Cerebras Deploys Trillion-Parameter AI Models](https://www.cerebras.ai/blog/how-we-deploy-trillion-parameter-frontier-models-on-cerebras)

**Score:** 272 | **Comments:** 92 | [Post](https://news.ycombinator.com/item?id=50227356)

Cerebras が、約3兆パラメータのオープンモデル Kimi K3 を例に、複数の WSE-3T ウェハ（1枚あたりオンチップメモリ 44GB）へモデルを分割して載せる方法を解説する。4bit 重み・8bit KV キャッシュ前提で層ごとのサイズからウェハ数を見積もり、1000〜2000+ tokens/s を狙う。

### Key Discussion Points

- **keyle**: 速度は驚異的だが、使えるモデルが GPT OSS 120b などで精度が足りない。
  - **nexus2045**: 同意。モデルが古すぎる。
  - **preommr**: 高速モデルが古いままなのが不満。
- **xpct**: PE の2Dメッシュ構造について質問。
  - **bubblethink**: 2Dグリッドはテンソル軸を分割しやすく、PE ごとのコードが単純になる。
  - **wmf**: EDA ツールが斜め配線に未対応なので六角格子は難しい。
- **iugtmkbdfil834**: ベンチマークだけでない「人間的な」比較が欲しい。
- **tgtweak**: フル精度のベンチ結果を引きつつ 4bit 量子化で動かしている点を批判。
  - **hellohello2**: 4bit 混合量子化は標準的で差は小さい。
  - **IsTom**: ネイティブで Q4 のモデル。
- **amelius**: 賢さは十分になったので次は速度。

## 3. [Samsung running a TensorFlow lite model on 960x540 image to track you](https://twitter.com/mike64_t/status/2114150399406202896)

**Score:** 233 | **Comments:** 146 | [Post](https://news.ycombinator.com/item?id=50230181)

Samsung TV が TensorFlow Lite モデルで 960x540 の画像を処理し、ユーザーを追跡しているという X 上の投稿。記事は取得できず（Wayback のスナップショットなし）、タイトルとコメントからの推測に基づく。

### Key Discussion Points

- **prymitive**: 英国は板の持ち運びまで規制するのに、ビッグテックの監視は規制されないと嘆く。
  - **bartread**: その板の法律は実在するのかと疑問を呈す。
  - **throaway3534621**: 資本が政治権力より上に立っているからだ。
- **gentlerain**: Samsung は不気味になってきた。電話番号必須のアカウント作成を拒否した。
  - **bayindirh**: 企業は株主に払うために稼ぐ。結局は強欲だ。
  - **devsda**: アカウントなしではストアからのインストールもできない。
- **Smalltalker-80**: なぜスマート TV を買うのか。非スマートの 40 インチは 200 ドル未満で買える。
  - **r_lee**: 40 インチ FHD は 2010 年代の話だ。
  - **mikeryan**: 広告・追跡収益が価格を下げている。
- **jacquesm**: TV でこれなら携帯は何をしているのか。
  - **gruez**: 携帯のほうが ADB やルート化で透明性が高い。
- **jareklupinski**: TV の盗聴が株式市場の動きに影響した可能性を推測。
  - **gruez**: 確証バイアスではないか。

## 4. [How Japanese Dried Bonito Is Made](https://kottke.org/26/10/how-japanese-dried-bonito-is-made)

**Score:** 131 | **Comments:** 34 | [Post](https://news.ycombinator.com/item?id=50193936)

西伊豆の 1882 年創業の工房で、5代目が200年前からの「手火山」製法で鰹節を作る様子の紹介。フィレにして90分茹で、10回以上燻乾し、削り節ペーストで補修、麹カビで発酵、半年以上天日乾燥して木のように硬くする。

### Key Discussion Points

- **ggm**: 旧築地市場で削り器や鰹節の木箱を見た思い出。
- **spike021**: 魚アレルギーだが鰹出汁は食べられるのが不思議。
- **chanux**: モルディブフィッシュに似ている。
- **adrianN**: 製造工程の動画を紹介。
- **mrlonglong**: 製法はどう発見されたのか。

## 5. [Tool book of a Nuremberg knight from 1505](https://loeffelholz-codex.org/en/)

**Score:** 119 | **Comments:** 59 | [Post](https://news.ycombinator.com/item?id=50230917)

1505年にニュルンベルクの騎士 Martin Löffelholz が編んだ154ページの「道具の本」（交換刃のドリル、ねじ切り、キャスター付き回転椅子など）のデジタル版。クラクフ所蔵で、500年間誰も通読していない。ページごとに画像、翻刻、現代英語訳、解釈を付けるプロジェクト。

### Key Discussion Points

- **BlackRabbit1**: サイト全体が LLM 生成っぽく、学術的価値が下がる。画像の質は評価。
- **Gabriel54**: 文章が中学生の作文のよう。
- **kornork**: AI の再現図は原図の曖昧さを無視しており、誤解を招く。
- **YrRight2PushBac**: LLM 文章への拒否反応で読めない。
- **peri-cl**: ある頁の数の表記が実質ユナリで非効率。

## 6. [fheroes2: A recreation of Heroes of Might and Magic II game engine](https://github.com/ihhub/fheroes2)

**Score:** 118 | **Comments:** 38 | [Post](https://news.ycombinator.com/item?id=50230384)

HoMM II エンジンをゼロから再実装したオープンソースのマルチプラットフォームプロジェクト。高解像度対応、AI 改善、バグ修正、UI 改善などを備える。原作データは別途必要。

### Key Discussion Points

- **skolos**: HoMM3 を Claude Code に遊ばせる MCP を作った。
- **pwm**: HoMM3 の実況チャンネルを紹介。
- **vunderba**: HoMM2 の見た目に HoMM3 のルールを組み合わせた新作が欲しい。
- **cyrusmg**: HoMM3 向けエンジン VCMI もある。
- **tholman**: 旧 AI（全マップが見える、増援ボーナス）から改善された AI の記述が面白い。

## 7. [Show HN: I put employees inside S&P 500 market-cap bubbles](https://bigwhalehunting.com/workforce/)

**Score:** 45 | **Comments:** 12 | [Post](https://news.ycombinator.com/item?id=50232312)

S&P 500 各社を時価総額で円の面積にし、従業員1万人を棒人間1体で描いた可視化。投稿者によると、Nvidia は時価総額約5.2兆ドルで従業員4.2万人、1人あたり約1.24億ドル。Accenture は従業員81.4万人で時価総額1460億ドル。

### Key Discussion Points

- **paxy**: 従業員数は単純でない（パート・契約・フランチャイズ）。
- **fhdkweig**: 投稿者の説明コメントが付いているのは良い。
- **soared**: 凡例のアイコンが可視化と違う。1万人単位は恣意的で、空の円は誤解を招く。
- **brador**: AI 投資の崩壊後はどう見えるか。
- **vfxGer**（投稿者）: 大企業ほど空に見えた点が驚きだった。

## 8. [Show HN: Farol – a risk map of a pull request for the person who approves it](https://github.com/winnin/farol)

**Score:** 39 | **Comments:** 23 | [Post](https://news.ycombinator.com/item?id=50231349)

承認者向けに、PR のマージリスクと危険なファイルを示す OSS の CLI / GitHub Action。AI レビューの後段で使う想定で、TypeScript・Go・Python に対応し、shadow モードではブロックしない。

### Key Discussion Points

- **munro**: レポートにノイズが多い。デモ PR のコード品質も気になる。
- **timcobb**: LLM でリスクを採点するのは危うい。
- **fcarraldo**: 必要な道具だが、デモのレポートはコードを読むより長い。簡潔さが必要。
- **alsiola**: デモの最初の提案が import で、見たいものではない。
- **cowlevel**: 冗談で、特定の行を除外する賄賂を受け付けるのかと皮肉った。

## 9. [A Few Thoughts on Intensity](https://www.tylerhogge.com/blog/a-few-thoughts-on-intensity/)

**Score:** 15 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=50232035)

2024年の記事。著者は、優れたスタートアップの最重要の文化的特性は「intensity（強度）」だと、自身の経験、論理、成功した創業者の観察から主張する。

### Key Discussion Points

- **bjornsing**: 因果は逆では。好調だと制約が社内に移り、強度が高く見える。
- **mettamage**: 自分も最も強度をかけた領域で最も成功した。

## 10. [Washing machines took decades to catch on](https://daily.jstor.org/why-washing-machines-took-decades-to-catch-on/)

**Score:** 13 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=50167528)

JSTOR Daily の記事。1910年代に登場した電気洗濯機は、冷蔵庫などと違って社会的地位や贅沢の訴求力がなく、1920〜30年代の訪問販売でようやく普及した。

### Key Discussion Points

- **bob1029**: 記事の「第二に」の位置づけに疑問。
  - **mauvehaus**: 祖母の手動絞り機付き洗濯機は手間がかかった。
- **mrits**: 炭鉱労働者の例で記事を否定する。祖母は関節炎になるまで手洗いを好んだ。
- **gib444**: 英国で電気代が上がれば手洗いに戻るかも。

## Trends

- **AI への賛否が主軸**: 野心的なソフト開発への期待（#1）と、AI 生成の文章や画像への拒否感（#5）や AI レビュー支援への懐疑（#8）が併存する。
- **AI インフラ**: Cerebras の兆パラメータ展開（#2）では、速度は評価されるがモデルが古いという不満が出た。
- **プライバシー**: スマート TV の監視疑惑（#3）は、広告収益モデルへの不信につながっている。
- **ものづくりと歴史**: 鰹節（#4）、1505年の道具書（#5）、洗濯機史（#10）、HoMM II の再実装（#6）など。
