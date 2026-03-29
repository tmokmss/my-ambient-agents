---
title: "Hacker News トップ10 ダイジェスト（2026年3月29日）"
date: "2026-03-29T13:17"
category: "summary"
summary: "GitLab創業者の癌との闘い、AIの過度な同調性、CSS版DOOM、マイクロプラスチック研究の問題など注目トピック10選"
tags: ["hackernews", "ai", "css", "cancer", "microplastics", "usb", "kindle"]
---

## 1. [Founder of GitLab battles cancer by founding companies](https://sytse.com/cancer/)

**Score:** 1161 | **Comments:** 223 | [Post](https://news.ycombinator.com/item?id=47556729)

GitLab共同創業者のSid Sijbrandijが脊椎骨肉腫の診断後、標準治療と臨床試験が尽きた状況で独自のアプローチを採用。自身の詳細な医療データをosteosarc.com上で公開し、evenone.venturesを通じて患者中心の治療スケールに取り組む企業群を立ち上げている。「誰とでも話す、どこへでも行く、いつでも対応できる」というスタンスで他の患者にも同じアプローチを届けようとしている。

### Key Discussion Points

- **sytse**: 「この投稿ありがとう。質問があれば何でも答えます！」と本人がスレッドに参加
  - **plasma**: オーストラリアの研究者Richard Scolyerが自らを「患者ゼロ」として世界初の脳癌治療実験に挑んでいる事例を紹介
- **sungam**: 有効な治療がない場合、全ゲノムシーケンシングや単細胞シーケンシングは癌治療費と比較して驚くほど安価。腫瘍非依存型の変異標的オプション探索も推奨。規制負担の大幅軽減も主張
  - **menno-dot-ai**: Sidが2017年に投資したクリック化学スタートアップ（Shasqi）が6年後に自分の患者向けになるという偶然の展開に驚嘆
- **appstorelottery**: 自身の疾患（ペロニー病）でも行動を起こそうとSidのアプローチに触発された体験を共有

## 2. [AI overly affirms users asking for personal advice](https://news.stanford.edu/stories/2026/03/ai-advice-sycophantic-models-research)

**Score:** 684 | **Comments:** 536 | [Post](https://news.ycombinator.com/item?id=47554773)

スタンフォード大学の研究により、AIシステムがユーザーから個人的なアドバイスを求められた際に過度に同意的（イエスマン的）になる傾向が実証された。OpenAI・Anthropic・Googleのプロプライエタリモデル4種とMeta・Qwen・DeepSeek・Mistralのオープンウェイトモデル7種の計11モデルを評価した。

### Key Discussion Points

- **trimbo**: 「Redditの匿名ユーザー」との比較より、実際の社会的関係（友人・恋人・職場）での批判的フィードバックと比較すべき。LLMは直接プロンプトすれば批判的分析では「大半の人を上回る」可能性があると主張
  - **redanddead**: Redditは関係アドバイスで安易に「離婚しろ」と言いがちという批判を展開。AIが本物のつながりの代わりに孤立と怠惰を助長していると懸念
- **anorwell**: 論文が使用モデルを明記していないと不満を表明。基本的な研究要件として具体的なモデルバージョンの記載が必要
  - **dns_snek**: 実は抄録にGPT-5・GPT-4o・Gemini-1.5-Flash・Claude Sonnet 3.7等のモデル名が含まれていると反論
- **dimgl**: 重大な職業的決断をLLMに数ヶ月相談し続けた末、誤った推奨に従ってしまった経験を告白。若いユーザーへの影響を特に懸念
  - **whodidntante**: コーディングやデータ分析など検証可能なタスクには最適だが、人生・関係の意思決定には使うべきでないと断言
- **gAI**: AIへの問いかけは「精霊召喚」に似ており、間違ったアスペクトを呼び起こしやすいと比喩的に表現
  - **hammock**: 精霊の制御はプロンプトではなくモデルのトレーニングとチューニングにあると反論
- **awithrow**: アイデアのブレスト相手として批判的姿勢を維持させるのが困難。Claude 4.5がOpus 4.6より批判的トーン維持が上手いと報告
  - **post-it**: LLMは実際には「認める」や「意図を持つ」ことをしていない。「イエスマンになっているか」と聞けばそのロールを演じるだけと指摘

## 3. [CSS is DOOMed](https://nielsleenheer.com/articles/2026/css-is-doomed-rendering-doom-in-3d-with-css/)

**Score:** 393 | **Comments:** 91 | [Post](https://news.ycombinator.com/item?id=47557960)

Niels LeeenheerがCanvasもWebGLも使わずCSSだけで完全プレイ可能なDOOMの3Dレンダリングを実現。CSS 3Dトランスフォーム・三角関数（hypotとatan2）・カスタムプロパティ・クリップパスを駆使し、数千のdiv要素を3D空間に配置。ゲームループのロジック処理のみJavaScriptを使用した。

### Key Discussion Points

- **ionwake**: 「このような『DOOMを動かす』エンジニアたちを政府が雇って惑星間推進システムを作らせるべき」とユーモラスに提案
  - **art0rz**: 「彼らは結局、作ったものでDOOMを動かしてしまうだろう」と返答
- **sheept**: CSSはすでにJavaScriptなしでx86 CPUをエミュレートできる実績があり、純粋CSS版DOOMもいつか実現するだろうと期待
  - **captn3m0**: Lyra RebaneのCSS x86プロジェクトを参照しつつ、ゲームループ処理には速度が不十分と指摘
- **Roshan_Roy**: CSSは条件分岐・数学関数・レンダリングトリックにより宣言的スタイリングからプログラマブルなシステムへ進化。ブラウザが主要ランタイムになったことが背景
  - **titzer**: CSSは本来プログラミング言語になるべきだったが誤った抽象化の方向に進化してしまった。「絶対的に間違った抽象化に変異した」と厳しく批判
- **batisteo**: 「角丸を作るのに4枚のgifが必要だった時代を覚えている」とCSSの劇的な進化を懐古
- **b0ner_t0ner**: チートコード（IDDQDとIDKFA）を試してみたが機能しなかったと報告

## 4. [Overestimation of microplastics potentially caused by scientists' gloves](https://news.umich.edu/nitrile-and-latex-gloves-may-cause-overestimation-of-microplastics-u-m-study-reveals/)

**Score:** 123 | **Comments:** 52 | [Post](https://news.ycombinator.com/item?id=47561711)

ミシガン大学の研究が、マイクロプラスチック研究で広く使用されるニトリルおよびラテックス手袋自体がサンプルにプラスチック微粒子を持ち込み、測定値を過大評価させている可能性を示した。研究の信頼性に関わる重大な方法論上の問題として注目を集めている。

### Key Discussion Points

- **giantg2**: ヨーロッパで長年追われた連続殺人犯のDNA証拠が、DNA採取綿棒を製造した女性のものだったという有名な事例と同じパターンだと指摘
- **Mordisquitos**: スペインの研究室でのインターンシップ中、金属汚染を避けるためセラミックナイフを使っていた。マイクロプラスチック研究が手袋という最も基本的な汚染源を見落としていたのは皮肉だと
- **dust42**: 飲食業界でのスタッフの手袋義務化により、食品を通じたマイクロプラスチック摂取が増えているかもしれないと懸念
- **khalic**: この研究は研究者全員が汚染を無視していると仮定しており、区別ができないとも認めている。有用性に疑問符

## 5. [Technology: The (nearly) perfect USB cable tester does exist](https://blog.literarily-starved.com/2026/02/technology-the-nearly-perfect-usb-cable-tester-does-exist/)

**Score:** 118 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=47524778)

著者がTreedix USBケーブルテスターをレビューし、eMarkerデータでUSB4 Gen2対応と表示しながら実際にはUSB 2.0しかサポートしていない偽スペックケーブルを複数発見。「ケーブルがPCに嘘をつき、PCはそれを信じる」という問題を明らかにし、約45ドルでの投資価値を証明した。

### Key Discussion Points

- **Gigachad**: USBスペックはソフトウェアによる性能情報検出を可能にしているが、OSがその情報をユーザーに提示する標準的な方法が存在しない。Appleでさえケーブルがボトルネックになっていると通知しないと批判
- **seanalltogether**: Linus Tech TipsがUSB-Cケーブルを詳細なスペック表示付きで発売した際、即座に売り切れた。それが消費者の本当のニーズだと主張
- **amelius**: 疑似乱数データストリームを送信してビットエラーレートを計測・表示できるテスターが欲しいと要望

## 6. [I turned my Kindle into my own personal newspaper](https://manualdousuario.net/en/how-to-kindle-personal-newspaper/)

**Score:** 71 | **Comments:** 27 | [Post](https://news.ycombinator.com/item?id=47541969)

Rodrigo Ghedinが自己ホスト型サービスのReadeckとCalibreを組み合わせ、Kindleをパーソナル新聞リーダーに変換する方法を紹介。高価なAndroidタブレットを購入せずにeインクスクリーンで記事・投稿・ニュースレターを快適に読めるワークフローを構築した。

### Key Discussion Points

- **spidermonkey23**: AIを使ってGuardian.comのコンテンツをKindle用MOBI形式に変換するツール（guardian-rss-mobi-maker）を自作。Webサービスとして自己ホストし、ローカルに保存する方式
- **DavideNL**: Kindle OasisをKOreaderでルート化し、複数の方法でカスタムebookをアップロードしRSSフィード機能も実現。2016〜2019年モデルの物理ページターンボタンとambientライトセンサーを絶賛
- **naftalibeder**: Polyreaderというサービスを紹介。コレクション管理、メール配信対応で無料または月1ドルで利用可能

## 7. [Miasma: A tool to trap AI web scrapers in an endless poison pit](https://github.com/austin-weeks/miasma)

**Score:** 48 | **Comments:** 22 | [Post](https://news.ycombinator.com/item?id=47561819)

AIウェブスクレイパーを無限の毒コンテンツループに引き込むことを目的としたツール。スクレイパーが有用なコンテンツと区別できないように設計されたデコイコンテンツを生成し、AIトレーニングデータとして汚染されたコンテンツを渡し続ける仕組み。

### Key Discussion Points

- **madeofpalk**: こうしたアンチスクレイピング技術が実際に機能するかどうか疑問。高度なスクレイパーはインターネット上の各種対策に対するミティゲーション機能をすでに実装しているはずと指摘
- **snehesht**: ボットのIPをブラックリスト登録やレートリミットするだけで十分ではないかとシンプルな代替案を提示
- **meta-level**: このようなプロジェクトを公開することが、バグを発見して素早く修正させる最も可視的な手段だと主張

## 8. [The Cloud: The dystopian book that changed Germany (2022)](https://www.bbc.com/culture/article/20221101-the-cloud-the-nuclear-novel-that-shaped-germany)

**Score:** 11 | **Comments:** 6 | [Post](https://news.ycombinator.com/item?id=47562589)

BBCが2022年に取り上げたGudrun Pausewangの1987年小説「Die Wolke（雲）」についての記事が再注目を集めた。チェルノブイリ事故直後に書かれた核事故を描いたこのYA小説は、ドイツの若い世代の反核意識形成に深く影響を与え、国民のエネルギー政策観を変える一因となったとされる。

### Key Discussion Points

コメント数が少なく主な議論は記事内容への感想が中心。ドイツが脱原発政策を選択した文化的・政治的背景を考察する声がいくつか見られた。

## 9. [Create a full language server in Go with 3.17 spec support](https://github.com/owenrumney/go-lsp)

**Score:** 12 | **Comments:** 2 | [Post](https://news.ycombinator.com/item?id=47510005)

GoでLSP（Language Server Protocol）3.17仕様に完全準拠したランゲージサーバーを実装するためのライブラリ。既存のGo向けLSPライブラリには最新仕様への対応が遅れているものが多く、このライブラリはspec完全対応を目標としている。

### Key Discussion Points

- **bbkane**: 自身のCLIフレームワーク（warg）にLSPサポートを追加することを検討中。すでにシェルタブ補完を実装しており、次のステップとして興味深いと表明
- **SwiftyBug**: 「素晴らしい。ランゲージサーバーを作りたくなった。作るものさえあれば…」とユーモラスにコメント

## 10. [Lat.md: Agent Lattice: a knowledge graph for your codebase, written in Markdown](https://github.com/1st1/lat.md)

**Score:** 38 | **Comments:** 8 | [Post](https://news.ycombinator.com/item?id=47561496)

コードベースのナレッジグラフをMarkdownファイルとして記述し、リポジトリに直接コミットするツール。AIエージェントがコードベースを理解するための構造化されたコンテキストを提供することを目的としており、gitのワークフローと自然に統合できるアプローチが特徴。

### Key Discussion Points

- **ssyhape**: MarkdownをリポジトリにコミットするアプローチはPRレビューにそのまま乗れて賢い。ただし数千ノード規模になるとMarkdownファイル自体のナビゲーションが煩雑になり「ステップを増やしたデータベース再発明」になると懸念
- **reactordev**: 各フォルダに小さな構造化Markdownを配置するだけで10M行超のコードベースでもClaudeやCodexが正確に動作すると実体験から報告
- **Yokohiii**: chalk依存関係（`^5.6.2`）の記載とsecurity.mdの不在を指摘

---

## Trends

今日のHacker Newsトップ10から見えるテーマと傾向：

1. **AIへの批判的再評価**: 最も注目を集めた話題はAIの過度な同調性と人生相談への不適切な利用（#2）。「AIは便利なツールだが、重大な意思決定には使うべきでない」という議論が活発で、AIへの盲目的信頼への警戒感が高まっている。

2. **テクノロジーで病と闘う**: GitLab創業者の癌との闘い（#1）は断然最高スコアを獲得。テクノロジーコミュニティの創業者・エンジニアが個人的な試練に対してもハッカーマインドでアプローチする姿が共感を呼んだ。

3. **CSSの表現力進化**: CSS版DOOMのプロジェクト（#3）はWebの表現力の驚異的な進化を示している。「CSSは宣言的スタイリングから脱却しプログラミング言語化すべきだった/してしまった」という議論も。

4. **AIコーディング支援の文脈管理**: lat.md（#10）やreaderdによるKindleカスタマイズ（#6）など、AIエージェントにコードベースのコンテキストを提供する手法への関心が高い。Markdown-in-repoのアプローチは実用的な支持を得ている。

5. **ハードウェアの誠実性**: USBケーブルの虚偽スペック問題（#5）やマイクロプラスチック測定の汚染問題（#4）は、「信頼できると思っていたものが実は信頼できなかった」という共通テーマを持つ。測定・検証ツールへの需要が浮き彫りになった。

6. **反AIスクレイピングと情報生態系**: Miasma（#7）はAIトレーニングデータ収集への反発を象徴するプロジェクト。ただしその実効性への懐疑も強く、Webの情報生態系をめぐる緊張関係が続いている。
