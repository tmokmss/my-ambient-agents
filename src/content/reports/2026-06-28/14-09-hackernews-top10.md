---
title: "Hacker News トップ10 ダイジェスト（2026年6月28日）"
date: "2026-06-28T14:09"
category: "summary"
summary: "HNトップ10：匿名0-day大量公開、AMD RDMAクラスター、KIDS Act年齢確認規制、Codexセキュリティ問題など"
tags: ["hackernews", "AI", "security", "tech", "privacy"]
---

## 1. [A way to exclude sensitive files issue still open for OpenAI Codex](https://github.com/openai/codex/issues/2847)

**Score:** 50 | **Comments:** 30 | [Post](https://news.ycombinator.com/item?id=48706714)

AIエージェントが`.env`や秘密鍵などの機密ファイルを読み取れないようにする`.codexignore`的な除外機能を求めるGitHub Issueがいまだ未解決のまま放置されている。ユーザーは`rg foo`のようなbashコマンド経由でも機密情報がLLMに漏洩するリスクを懸念している。コミュニティからはコンテナやUnixパーミッションによる回避策が提案されており、NVIDIAが「rumpelpod」というセキュアなdevcontainer管理ツールをオープンソース化した例もある。

### Key Discussion Points

- **TheDong**: コンテナやUnixパーミッションで既に解決可能。ブロックリスト方式は完全な解決策にならず、bash経由でのアクセスは防げない
- **agentdev001**: ユーザーエラーの問題。コーディングエージェントを「不信任のSSHユーザー」として扱うべきで、その前提でセキュリティを設計するべきだ
- **mbid**: NVIDIAがrumpelpodをオープンソース化。エージェントをリモートのdevcontainerで実行することで機密ファイルをそもそも渡さない設計が正解
- **mixedbit**: AI エージェントから機密ファイルを隠しつつ必要なファイルはアクセス可能にするLinuxサンドボックスツールを開発中
- **petcat**: 実装しても偽のセキュリティ感を与えるだけ。LLMの予測不能な挙動ではブロックリストは完全に機能しない。`chmod`を使え

---

## 2. [The curious case of the disappearing Polish S](https://aresluna.org/the-curious-case-of-the-disappearing-polish-s/)

**Score:** 13 | **Comments:** 1 | [Post](https://news.ycombinator.com/item?id=48706814)

Mediumで長年にわたりポーランド語の文字「Ś」（Alt+Sで入力）が入力できないバグがあった。WindowsがRight AltキーをCtrl+Altとして内部処理する仕様と、MediumがCtrl+Sによるブラウザ保存ダイアログを防ぐコードが衝突していたことが原因。「Altキーが押されていない場合のみCtrl+Sをブロックする」という1行の修正で解決された、4つの偶然が重なった面白いデバッグ物語。

### Key Discussion Points

- **quibono**: ポーランドがラテン文字を採用していたことで、西洋文化への統合が容易になった。ウクライナやロシアより西欧諸国に文化的親和性が高い理由の一つ

---

## 3. [Marfa Public Radio Puts You to Sleep](https://www.marfapublicradio.org/podcast/marfa-public-radio-puts-you-to-sleep)

**Score:** 310 | **Comments:** 83 | [Post](https://news.ycombinator.com/item?id=48703759)

テキサス州マーファのNPRコミュニティラジオ局が、FCC規制文書やNPRジャーナリズム基準など極めて退屈な業務文書をスタッフが朗読する眠れるポッドキャストを制作。リスナーが眠りにつくのを助けながら局への寄付を促すユニークなコンセプトで、HNでは世界各地の「眠れるコンテンツ」紹介合戦が展開された。

### Key Discussion Points

- **ValentineC**: CloudFrontの設定でシンガポールからのアクセスがブロックされている（archive.phのリンクを共有）
  - **hirako2000**: アーカイブならHTMLは見られる
- **gullywhumper**: Northwoods Baseball Radio Network（架空の野球リーグ実況）がお気に入り。単調なアナウンサーと架空CMが完璧な睡眠誘導
  - **reaperducer**: ミシガンベースだが、架空のウィスコンシンチームも登場する
- **lIl-IIIl**: 「Boring Books for Bedtime」ポッドキャストも似たコンセプトだが、こちらは内容が本当につまらない。Origin of Speciesでさえ面白く聞けてしまった
  - **ycombinete**: 「Sleep With Me Podcast」が妻の不眠症を治してくれた。意図的な単調さと話が横道にそれる語り口が秀逸
- **PaulRobinson**: BBCのShipping Forecast（「脳への重い毛布」と表現）、BBC Radio 3 Unwind（「3U」）が最高の睡眠誘導コンテンツ。広告なし、ニュースなしで不安な夜に最適
  - **Angostura**: 「In Our Time」はいつも魅力的で眠れる。10分ずつ聴き進めている
- **colemannerd**: マーファは素晴らしい芸術的な町。ラジオ局の外でドリンクを飲む体験がおすすめ
  - **chasd00**: マラソン（Alpine近く）で結婚式を挙げた。テイラー・スウィフトの曲だけ流れるマーファの公衆電話も見どころ

---

## 4. [The MUMPS 76 Primer – anniversary edition](https://github.com/rochus-keller/MUMPS/blob/main/docs/MUMPS_Primer.adoc)

**Score:** 13 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=48706796)

1966年にマサチューセッツ総合病院で生まれた言語MUMPSの最初の標準制定記念版Primerが公開された。言語とデータベースが深く統合された設計はNoSQLの数十年前の先駆けであり、医療システム（電子カルテなど）で現在も使われ続けている。作者がMUMPS 76インタープリタも公開しており、実際に試すことができる。

### Key Discussion Points

- **quink**: Advent of Code 2025をMUMPSでコードゴルフに挑戦。Day 7ではリテラル（数値・文字列）なしという縛りプレイで、コードのアルファベット文字が物語を綴るという芸術的実装を達成
- **Rochus**（著者）: MUMPS 76の記念プロジェクトとしてインタープリタを開発。言語とDBの統合という概念が現代でも再評価されるべきと主張

---

## 5. [DLL that was not present in memory despite not being formally unloaded](https://devblogs.microsoft.com/oldnewthing/20260625-00/?p=112467)

**Score:** 50 | **Comments:** 20 | [Post](https://news.ycombinator.com/item?id=48705910)

Windowsの謎のクラッシュをRaymond Chenが調査した技術記事。`combase.dll`が正式なアンロードなしに強制的にメモリから解放され、shell32.dllなど依存DLLが被害を受けていたことを発見。この単一の根本原因がアプリケーション全クラッシュの46%を占めていたが、犯人（どのコンポーネントが強制解放しているか）はまだ不明のままという続きがある。

### Key Discussion Points

- **zabzonk**: 「shell32チームは無実だが、犯人が誰なのかわからない」—ソフトウェア開発の歴史そのものと皮肉
- **rwmj**: これほどの調査をしてもらうにはどのレベルのMicrosoftサポート契約が必要か。Windowsのバグを報告しても注目してもらうだけで一苦労
- **kumarvvr**: コールスタックへの深い潜りに圧倒され、コンピュータの知識の限界を思い知らされる
- **defrost**: 46%が同一原因という「バケットスプレー現象」（単一根本原因が多種多様なクラッシュを生成する）を指摘
- **masfuerte**: 続編（Part 2）へのリンクを共有

---

## 6. [Kids act would require age checks to get online](https://www.eff.org/deeplinks/2026/06/kids-act-would-require-age-checks-get-online)

**Score:** 92 | **Comments:** 70 | [Post](https://news.ycombinator.com/item?id=48706560)

米国の「KIDS Act」がオンラインサービスへのアクセスに年齢確認を義務付けようとしているが、EFFはこれに強く反対している。全ユーザーのプライバシー侵害、合法的な表現への検閲、暗号化の弱体化につながると警告しており、「すべての人にとってプライバシーの少ないインターネット」になると結論付けている。

### Key Discussion Points

- **throw0101d**: 1988年から続く「Infocalypseの四騎士」論法（児童ポルノ・テロリスト・麻薬密売人などを理由に暗号規制を正当化する手法）の繰り返し。40年経っても同じ議論
- **shomp**: 議員に電話・メールで反対の意思を伝えよう
- **EGreg**: 政府がゼロ知識証明ベースの年齢確認トークンを発行する仕組みを作れば、プライバシーを保ちながら年齢確認が実現できる。技術的に可能なのに意欲がないだけ
- **PinkSheep**: 過去20年間、学校はコンテンツ消費リテラシーについて何を教えてきたのか？
- **athrowaway3z**: 「子供を標的にする戦術は恐ろしく効果的」。私権擁護に無関心な大人を増やすだけで、現在の子供はプライバシーという概念を知らずに育つことになる

---

## 7. [Bashblog – a single bash script to create blogs](https://github.com/cfenollosa/bashblog)

**Score:** 76 | **Comments:** 54 | [Post](https://news.ycombinator.com/item?id=48704454)

依存関係ゼロの単一Bashスクリプト（約1200行）でブログを作成できるツール。`./bb.sh post`を実行してエディタで書くだけで静的HTML、RSSフィード、Markdownサポートが揃う。GNU/Linux・BSD・OSXで動作し、コメント機能は外部サービスを利用する設計。

### Key Discussion Points

- **harrisi**: 128MB RAMのような極軽量サーバーではPythonもNodeも不要でBashが最適。シェルを知ることは楽しく、時に重要なスキル
- **felooboolooomba**: 「1200行のBashスクリプトでブログ...好きだけど嫌い」—こういう用途のBashは避けたい
- **hkt**: かつてnanoblogger（同様のBashブログツール）を使っていたと懐古
- **_ache_**: 同じことをやってみたが、後にNodeJSスクリプトに移行した。Bashはこのタスクではかなり辛い

---

## 8. [AMD Strix Halo RDMA Cluster Setup Guide](https://github.com/kyuz0/amd-strix-halo-vllm-toolboxes/blob/main/rdma_cluster/setup_guide.md)

**Score:** 185 | **Comments:** 57 | [Post](https://news.ycombinator.com/item?id=48703258)

AMD Strix Halo（AI Max 395+）搭載マシン2台をIntel E810 NICでRDMAクラスター接続し、vLLM・Ray・RCCL・RoCE v2でLLMを分散推論するセットアップガイド。マイクロ秒レベルの低レイテンシ通信によりTensor Parallelismで大型モデルを分割実行できる。ただしStrix Haloの価格が急騰（2,800EUR→7,899EUR）しており、コミュニティで嘆きの声が上がっている。

### Key Discussion Points

- **pixelpoet**: 128GB Strix Halosを2台所有。antirezのds4プロジェクト（4bit量子化＋2台分散）に期待。ローカルAIが実用的になりつつあるが、テクノロジー企業がConsumerハードを意図的に高騰させていると批判
  - **sspiff**: 128GBが先週壊れた。購入時2,800EUR→現在のシール価格7,899EURという衝撃
  - **rjzzleep**: AI Max 395+が2.5kから4kに高騰。アップグレードを待っていたが今は割に合わない
- **jcastro**: 3ノードStrix HaloをベースにしたAgentOS工場（エージェントが自己メンテナンスするOS）を開発中
  - **mestadler**: k0sで動かす予定。プロバイダーレベルのセットアップをConsumerハードウェアで実現できる
- **sdlkj-**: RDMAが24GB GPUと128/256GBの隙間を埋める。AppleがThunderbolt 4マシンのRDMAを開放してほしい
- **MayeulC**: PCIe → NIC → NIC → PCIeルーティングは非効率では？PCIe直接通信のほうが合理的では
- **kamranjon**: ベンチマークは印象的に見えたが実際はM4 MBP（~400 prefill、~20 tok/s）より大幅に遅い
  - **3abiton**: 帯域幅ボトルネックが深刻。MacはAI推論では別次元。Appleが専用AIハードを出せば消費者AI市場を制覇できる

---

## 9. [Anonymous GitHub account mass-dropping undisclosed 0-days](https://github.com/bikini/exploitarium)

**Score:** 877 | **Comments:** 339 | [Post](https://news.ycombinator.com/item?id=48698617)

匿名GitHubアカウント「bikini」がFirefox・PHP・Docker・VLC・Ghidra・nmapなど約25件の未開示脆弱性のPoC（概念実証コード）を突然大量公開。著者はGPT-5.5-Codex-Sparkを使ったファジング自動化で発見したと説明し、Fuzzing研究の学位を持つと主張している。セキュリティコミュニティでは品質・倫理・開示プロセスをめぐって激論が展開された。

### Key Discussion Points

- **Retr0id**: Ghidraの脆弱性は印象的でない。「Ghidraが実行するバイナリを上書きすればコード実行できる」は驚くべきことではない
  - **jkrejcha**: MS07-052「コード実行するとコードが実行される」という古典的トートロジーの繰り返し
  - **athrowaway3z**: nmapのものは潜在的に高深刻度の可能性。「nmapスキャンをしている人に逆シェルを打てる」なら情報機関が喜ぶバグ
- **simonpure**: READMEが更新された。著者は「AIを使ったのはファジングの自動化のみ、Fuzzing方法論の論文も複数発表している」と弁明。SOTAモデルは不要と主張
- **dvt**: Dockerのは単なる奇妙なバグで脆弱性ではない。VLCのは単なるクラッシュ。「0-day」という呼称は過剰
  - **jeffbee**: VLCがクラッシュした時点で即座にネットワークから切断して状況を見直すべき。クラッシュを軽視するからハックされる
- **Manishearth**: 自分もLLMで調整されたファジングツールでRustエコシステムの安全性バグを約500件発見。大量公開ではなく1日数件ずつ丁寧にIssueファイリング中。責任ある開示の対照例として注目
- **doe88**: 「0-days-vibes-vulns」という新カテゴリを提案。AI生成ツールで吐き出される「それっぽい脆弱性」の問題を皮肉
  - **tyre**: em-dashがAIテキストの検出トリガーになるのが最近の悩み。昔はem-dashは敬意の証だったのに
  - **djmips**: そもそもあれはem-dashですらないのに大きなスレッドになっている

---

## 10. [The origins of the school system aimed to produce independent, critical thinkers](https://www.cbc.ca/radio/ideas/humboldt-education-system-bildung-1.7172093)

**Score:** 21 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=48706877)

ドイツのフンボルト教育思想「Bildung」がもともと独立した批判的思考者の育成を目指していたと解説するCBCラジオの番組。現代の教育システムとの乖離を問う内容で、コメントでは現実の学校教育がその理念からどれほど外れているかについて活発な議論が起きた。

### Key Discussion Points

- **synecdoche**: 逆の話を聞いたことがある。学校システムは軍の組織化と時代の支配的世界観への順応を目的として設計されたという説もある
- **lmf4lol**: シラーの「人間の美的教育論」を読んだばかり。美と充実した生活について深い洞察があるのに、それと正反対の学校システムを作り続けている。アムステルダムの2人の娘の親として嘆く。12歳で段落が読めない、暗算ができない子が多く、歴史も教えない現状は「未来世代への社会的失敗」

---

## Trends

本日のHNトップ10から浮かび上がる共通テーマ：

**AIエージェントのセキュリティと管理の難しさ**が複数の話題を貫いている。OpenAI Codexの機密ファイル問題（#1）と匿名0-day大量公開（#9）はともに、AIを活用したセキュリティ研究・開発ツールが責任ある運用なしには危険な両刃の剣であることを示している。

**ローカルLLM推論のConsumerハードウェアへの普及**（#8）は急速に進んでいるが、半導体・ハードウェアメーカーによる価格高騰が普及の障壁となっている。MacのApple Siliconとの比較でAMD Strix Haloの帯域幅ボトルネックが際立っており、「誰でも大型LLMを動かせる時代」はまだ途上にある。

**規制とプライバシーの緊張**（#6 KIDS Act）は、子供保護という大義名分の下でプライバシーと表現の自由が侵食されるという古典的な構図を繰り返している。EFFが40年来同じ論法への対抗を続けている状況は、この問題の根深さを物語る。

**シンプルなツールへの回帰と懐古**（#7 Bashblog、#4 MUMPS）が見られる一方で、その実用性についての賛否は依然として分かれており、コミュニティの多様な価値観が浮き彫りになっている。

**睡眠・ウェルネスコンテンツ**（#3）の人気は、過剰な情報刺激に対する反動として「意図的な退屈さ」を求めるユーザー心理を反映している。
