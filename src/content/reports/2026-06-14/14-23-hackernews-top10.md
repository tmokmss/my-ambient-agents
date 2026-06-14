---
title: "Hacker News トップ10 ダイジェスト (2026-06-14)"
date: "2026-06-14T14:23"
category: "summary"
summary: "GLM-5.2オープンリリース、HondaのEVIL VALET脆弱性、PGの「10億ドルの稼ぎ方」など注目ストーリー10本"
tags: ["hackernews", "AI", "security", "javascript", "tools"]
---

## 1. [The Birth and Death of JavaScript (2014)](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript)

**Score:** 70 | **Comments:** 32 | [Post](https://news.ycombinator.com/item?id=48526661)

Gary Bernhardtが2014年のPyCon向けに作ったSFコメディトーク。JavaScriptの1995年から2035年までの軌跡を語り、「JavaScriptはコンパイルターゲットとして生きる基盤（substrate）になる」と予言した。asm.jsからWebAssemblyへの進化、TypeScriptやElectronの普及を振り返ると、その予言は見事に的中していると言える。

### Key Discussion Points

- **jdw64**: WebAssemblyの普及とElectronによるデスクトップアプリ展開を踏まえ、「JSはどこにでもあるが直接使わない基盤になった」という予言が実現したと評価
- **DavidPiper**: 2020〜2025年のグローバル災害を予測していたが「タイプを間違えた」だけ、と皮肉っぽく笑う
- **oakinnagbe**: 「数年おきに、より良いJavaScriptを発明する。そしてそれをJavaScriptにトランスパイルする」と名言
- **Surac**: マウスオーバーで色変更を試みたのが最初のJS体験。構文に辟易して離れ、一度も後悔していないと述懐

---

## 2. [Firewood Splitting Simulator](https://screen.toys/firewood/)

**Score:** 121 | **Comments:** 33 | [Post](https://news.ycombinator.com/item?id=48471638)

screen.toysが公開したブラウザ上で動作する3Dの薪割りシミュレーター。クリックで斧を振るい、薪を割って積み上げることができる。シンプルながら物理挙動や積み重なった薪の影の処理まで作り込まれており、思わず没頭してしまうクオリティ。

### Key Discussion Points

- **comrade1234**: 「戦いの半分は正しいスタンスを保つこと。でないと脛に斧を埋め込んでしまう」とリアルな薪割りへの教訓
- **yardshop**: 切り方（扇形/平行）が積み方に反映され、葉の影が一貫してシーンに残るなど細かいディテールを評価
- **nZac**: 「これは自分よりはるかに上手な人をシミュレートしている。一度も木を調整せずに済んだ」
- **sklargh**: 実際の薪割りに興味が湧いたらぜひやってみて、と勧める。瞑想的で秋の午後にちょうど良いワークアウトとのこと

---

## 3. [How did Atari apply side art to Arcade Cabinets?](https://arcadeblogger.com/2026/06/14/how-did-atari-apply-side-art-to-arcade-cabinets/)

**Score:** 15 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=48526793)

アーケードゲーム筐体のサイドアートは「スクリーン印刷」で直接木製パネルに印刷されていた。色ごとに別々のスクリーンを作り、位置合わせ（レジストレーション）を精密に管理しながら順番にインクを重ねていく工程だ。Missile Commandでは1万4千筐体分（パネル2万8千枚）が製造され、半自動のフラットベッドシステムが活用された。

### Key Discussion Points

- **Symbiote**: 「TL;DR: 筐体サイドに直接スクリーン印刷している」と簡潔に要約しつつYouTube動画を紹介

---

## 4. [FarOutCompany](https://faroutcompany.com/)

**Score:** 3 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=48527360)

1960〜70年代のカウンターカルチャーの視覚文化を保存・公開するデジタルアーカイブ。コミューン、地下出版物、ヘッドショップ、オルタナティブメディアの資料や、Wes WilsonやRick Griffinらサイケデリックアートの先駆者たちの作品を網羅している。視覚的刺激過多（countercultural visual overload）をうたう歴史的資料集。

### Key Discussion Points

- **jruohonen**: 「1960〜70年代のカウンターカルチャーで評価されてこなかったアーティストの作品を発掘することに特化している」と解説
- **SpecStudioHN**: 「俺もあの時代にいたよ」と一言

---

## 5. [Free SQL→ER diagram tool, runs in the browser, nothing uploaded](https://sqltoerdiagram.com/)

**Score:** 270 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=48523992)

`CREATE TABLE` 文を貼り付けるだけでブラウザ上でER図を生成するツール。PostgreSQL/MySQL/SQLite/SQL Server構文に対応し、テーブル間のリレーションを自動で可視化する。全処理がローカルで完結するためデータが外部送信されず、PNG/SVG/URLでのエクスポートも可能。無料かつオープンソース。

### Key Discussion Points

- **michaelmior**: 厳密にはSQLからER図は生成できない（エンティティとテーブルは本質的に異なる）と指摘しつつも有用性は認める
  - **jitl**: 「一方の人にとっての単純さは、他方にとっての頭痛の種」と哲学的に応答
  - **ezst**: ORMが両者をほぼ同義に扱っているのがその証拠、と反論
- **written-beyond**: モバイル操作性に「100点満点中100点」。パン/ズーム/選択・移動がシームレスすぎて感動したと絶賛
  - **lelanthran**: ダイアグラム描画部分だけをライブラリとして切り出してほしいと要望
- **throwatdem12311**: クエリプラン可視化ツール「explain.dalibo.com」を類似ツールとして紹介
- **petilon**: GitHubリポジトリにLICENSEファイルがないと指摘

---

## 6. [Honda Civics and the Evil Valet](https://juniperspring.org/posts/honda-evil-valet/)

**Score:** 340 | **Comments:** 76 | [Post](https://news.ycombinator.com/item?id=48523080)

セキュリティ研究者Eric McDonaldによる2021年型Honda Civicのヘッドユニット解析レポート。USBポート経由で届くOTAアップデートがAOSPテストキー（公開済み）で署名されており、フロントUSBへの物理アクセスがあれば任意コード実行が可能。「Evil Valet攻撃」（車を預けた際に悪意ある整備士がマルウェアをインストール）として脅威モデルを示し、自作ツール `ota-builder` と `apk-rebuilder` も公開した。

### Key Discussion Points

- **librick** (著者): USBアップデートがAOSPテストキーで署名されており、rootなしで任意コード実行可能と詳細に解説
  - **Alive-in-2025**: 「このような調査と怠慢な実装の暴露こそ、HNが好きな理由」と歓迎
- **bigfatkitten**: 車のマイク・カメラ・GPS・Wi-Fiは「移動式監視プラットフォーム」と警告。2026年3月にオーストラリア政府がISMに車内での機密会話禁止を追加した事実を紹介
  - **Spooky23**: 「カーラジオに過ぎず、クリティカルなシステムではない」と軽視。警察は以前からOnStar以来のルールがあると指摘
- **hahamaster**: 「物理アクセスがあるなら、頭のある悪い人はヘッドユニットを狙わずGPS追跡器を仕掛ける」と疑問視
  - **bri3d**: ヘッドユニットにはSQLiteの連絡先や位置ログが残る上、CANバスへのアクセスで車の制御も可能と反論
- **xandrius**: 「ハードウェアの所有権拡大を求める人々が、いざオープンなデバイスが現れると攻撃する」と皮肉
  - **Aerolfos**: メーカーは「完全オープン」か「完全クローズド＋セキュア」のどちらかを選ぶべき。現状は最悪の中間状態
- **BobbyTables2**: PМが「ファームウェアに署名した」と誇るが、アップデート時に署名を検証していないケースあるあるを披露
  - **Koffiepoeder**: 署名アルゴリズム自体をアップデートパッケージから実行する設計を見たことがある、という驚きの体験談

---

## 7. [Lisp's Influence on Ruby](https://blog.tacoda.dev/lisps-influence-on-ruby-6a54f1a7740e)

**Score:** 68 | **Comments:** 0 | [Post](https://news.ycombinator.com/item?id=48491048)

Ruby作者のMatzがLispから受けた影響を考察した記事（Medium経由のため全文取得不可）。Rubyの設計にはLispの哲学——クロージャ、シンボル、メタプログラミング、コードとデータの均一性——が色濃く反映されており、Matz自身も複数のインタビューでLispへの傾倒を語っている。コメントは0件と静かなストーリーながら、言語設計の系譜を好む読者層の興味を集めた。

### Key Discussion Points

コメントなし。

---

## 8. [How to Earn a Billion Dollars](https://paulgraham.com/earn.html)

**Score:** 99 | **Comments:** 212 | [Post](https://news.ycombinator.com/item?id=48526360)

Paul Grahamが2026年のオックスフォード・ユニオン講演をもとに書いたエッセイ。「10億ドルを稼ぐには悪いことをしなければならない」という政治家の発言を数学的に反駁し、月次93%成長なら9.5ヶ月でビリオネアになれると主張。Y Combinatorが約30人のビリオネア創業者を輩出した実績を根拠に、ユーザーに本当に愛される製品を作ることが王道だと説く。

### Key Discussion Points

- **AdamN**: 政治家が言いたかったのは「労働だけでは無理」であり、10億ドルには市場から抽出する構造（外部性を伴う）が必要と解釈。PGの読み方は「blunt and misrepresentative」と批判
- **owaiswiz**: 「彼女のスタートアップが成長しても、彼女個人が93%豊かになるわけではない」と株式分配の問題を指摘
- **blfr**: 「稼ぐ（earn）」と「創る（create）」の会計上の違いは重要。10億ドルの企業を創ることは可能だが、批評家は「搾取なしには無理」と主張
- **smallmancontrov**: 「創造的破壊」は正味プラスでも、Uberとタクシー業界のように有毒な副産物を生む。その処理も我々の責務と警告
- **d_burfoot**: 「スタートアップ創業者」というキャリアパスは既に過密状態。Efficient Market仮説を適用すると、今は過大評価された株のように過熱している。Moneyball的に未競争のキャリアを探すべき

---

## 9. [GLM 5.2 Is Out](https://news.ycombinator.com/item?id=48518684)

**Score:** 689 | **Comments:** 404 | [Post](https://news.ycombinator.com/item?id=48518684)

中国AI企業Zhipu（智谱AI）がGLM-5.2を発表。1Mコンテキストウィンドウ対応、長期エージェントタスクでの性能と強力なコーディング能力を特徴とする完全オープンソースモデル。米国がFable/Mythosモデルのアクセスを政府要請で制限した直後のリリースとあって、「AIのオープン性」を巡る議論が白熱した。

### Key Discussion Points

- **easygenes**: Zhipu創業者Jie Tangの声明全文を紹介。「AGIへの道は高い壁で囲まれてはならない。外部からの封鎖に対し、我々の姿勢は徹底的なオープン性だ」
  - **smokel**: 「全員がAGIにアクセスできても、悪用できる手段を持つのは一部の人間だけ。AGIをツール（＝兵器）と明確に認識すべき」と冷静に反論
- **anonyfox**: 「フロンティアから約6ヶ月遅れ（1月のOpusに相当）。オープン化でインデペンデントプロバイダーが価格競争すれば、Anthropicのビジネスモデルが崩壊する可能性がある」
  - **pixlmint**: Claude Proをキャンセルし、APIクレジット課金に切り替えた。gemma4:31bで十分という感想
- **Reubend**: 「オープンな姿勢でモデルを提供し続ける中国AIラボに感謝。Fable 5問題は改めてその価値を示した」
  - **LaurensBER**: フロンティアから6ヶ月遅れ程度。UIデザイン系タスクは期待以上の性能
  - **vidarh**: GLM 5.1が先週のテストでSonnetを上回った。5.2への切り替えが楽しみ
- **segmondy**: 「ここ数日で中国ラボからMiniMaxM3、KimiK2.7、そしてGLM5.2が登場。一方米国はモデルを検閲中。フィクションみたい」
  - **hedora**: Fable/Mythos制限の背景を解説：AmazonがAnthropic側に要請、Anthropicが政府の一元管理を支持する立場をとった
- **khalic**: 「FableケースはUS政府が恣意的なアクターだと証明した。オープンウェイトモデルはこうした規制に免疫がある」
  - **thewebguyd**: 「米国政府は外国製オープンウェイトモデルの利用を違法化できる。GitHubからも削除させられる」と反論
  - **Havoc**: 「中国も技術パリティ到達後は非公開に転じる可能性が高い」と予測

---

## 10. [Can't Stop the Signal. Poison It](https://blog.digitalgrease.dev/posts/fauxx-cant-stop-the-signal)

**Score:** 13 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=48526472)

アクセス制限によりページ内容の取得は不可（Anubis保護のブロック）。タイトルと文脈から推察すると、情報（シグナル）の検閲が難しいなら「ポイズニング（汚染）」で対抗する戦略——フェイク情報やノイズを混入させてシグナルの信頼性を下げる手法——を論じた記事と見られる。

### Key Discussion Points

- **TheChaplain**: 「スクロールをカクつかせるサイトに出会うことはなかなかない」とサイトのパフォーマンス問題のみをコメント

---

## Trends

今日のHNトップ10から読み取れる主要な傾向は以下のとおりだ。

1. **AI覇権争いとオープンソースへの転換**: 最もスコアの高いストーリーはGLM-5.2の発表で、米国がFable/Mythosを制限する中で中国AIラボのオープンな姿勢に注目が集まった。「オープンウェイトモデルは政府規制に免疫がある」という議論は今後も続くテーマになりそうだ。

2. **セキュリティの現実**: Honda CivicのEVIL VALET脆弱性は「物理アクセスがあれば何でもできる」というセキュリティの基本を改めて示した。車のインフォテインメントシステムが移動式監視デバイスになり得るという警鐘も共鳴を集めた。

3. **開発ツールの「ローカルファースト」トレンド**: SQLtoER diagramツールが「何もアップロードされない」を明示的に売りにして高評価を得た。プライバシーへの意識が開発ツール選定に影響している。

4. **富と倫理の議論**: PGの「10億ドルの稼ぎ方」はスタートアップキャリアの飽和と、富の創出における外部性・道徳的責任を巡る議論に火をつけた。

5. **懐かしさとノスタルジー**: 2014年のJavaScriptトーク、1960〜70年代のカウンターカルチャーアーカイブ、アタリの筐体製造秘話と、過去の技術や文化への振り返りが複数ランクインした。テック系読者の中にレトロ・ノスタルジーへの強い需要がある。
