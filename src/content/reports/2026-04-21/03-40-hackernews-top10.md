---
title: "Hacker News トップ10（2026年4月21日）"
date: "2026-04-21T03:40"
category: "summary"
summary: "Apple CEO交代、Qwen新モデル、ggsql、量子暗号など今日のHN上位10件をまとめた"
tags: ["hackernews", "ai", "apple", "crypto", "vcs", "visualization"]
---

## 1. [John Ternus to become Apple CEO](https://www.apple.com/newsroom/2026/04/tim-cook-to-become-apple-executive-chairman-john-ternus-to-become-apple-ceo/)

**Score:** 1339 | **Comments:** 674 | [Post](https://news.ycombinator.com/item?id=47840219)

Appleはハードウェアエンジニアリング上級副社長のジョン・ターナスが2026年9月1日付でCEOに就任すると発表した。ティム・クックはエグゼクティブ・チェアマンへ移行し、夏の間は引き継ぎを支援する。ターナスはAppleで25年のキャリアを持つ生え抜きのエンジニアであり、iPhone・Mac・iPad・AirPodsを含む広範なハードウェア製品開発を主導してきた。

### Key Discussion Points

- **Tyrubias**: クックの物流の才でAppleは世界的大企業になった。ターナスには「悪化し続けるAppleソフトウェア」を立て直してほしい。プライバシー重視の姿勢も引き継いでほしい。
  - **hei-lima**: AppleのソフトはGoogle・Microsoftよりは優れているが、改善の余地はある。
  - **TimTheTinker**: プライバシーへのコミットメントを評価。ターナスが「良い戦いを続ける勇気」を持つよう期待。
- **oofbaroomf**: ハードウェアは他を大きく凌駕しているが、ソフトウェアは世代を重ねるごとに悪化している。今回の人事を歓迎する。
  - **btown**: ターナスはApple Mapsの「rocky start → amazing」という改善例を語っていた。現在のソフトをまだ「rocky start」段階と認識してくれれば良いが…
  - **foobiekr**: 「ハードウェア畑の人物はソフトウェアが苦手」という経験則がある。それでも期待はする。
- **danielrhodes**: クックはJobsのビジョンを最大限に昇華させた。しかしAI時代の次の進化は未定。クックの退任タイミングは絶妙で、見切りの良さを尊重する。
  - **simplyluke**: コロナ後の大量採用・大量解雇なし、従業員の平均在籍期間が他社を圧倒するなど、経営の安定性が際立っていた。
  - **dvt**: 「クックの物流重視は、Jobsのプロダクト執念とは直交する」と真っ向から反論。唯一の例外はApple Silicon。
- **w10-1**: クックの公開書簡が感動的。巨大企業のトップに「良い人物」がいることの重要性を強調。
  - **voncheese**: 社会に広く影響を与える大企業では善良なリーダーシップが最重要だという点に同意。
- **alsetmusic**: Marco ArmentがApril 1日にターナス宛の公開書簡を書いていた。外部から彼の方針を予測するのは難しい。

---

## 2. [Qwen3.6-Max-Preview: Smarter, Sharper, Still Evolving](https://qwen.ai/blog?id=qwen3.6-max-preview)

**Score:** 559 | **Comments:** 295 | [Post](https://news.ycombinator.com/item?id=47834565)

AlibaaのQwenチームが新しいフラグシップモデルQwen3.6-Max-Previewを発表した。コミュニティからは同日リリースされたKimi K2.6との比較が盛んに行われ、ベンチマーク・価格の両面でKimiがやや優勢という評価が多い。AIモデルの乱立の中で、モデルは目的別の「道具」として使い分けるべきという議論も起きている。

### Key Discussion Points

- **seanw265**: Kimi K2.6と比較するとQwenは割高（$1.3/$7.8 vs $0.95/$4）で、SWE-BenchやTerminal-Benchでも僅かにKimiが上回る。数字ではKimiが魅力的。
  - **archon810**: KimiはCursor Composerのベースなので、今後のComposerアップデートに期待が高まる。
  - **mchusma**: 中国モデルの値上がりで魅力が低下。Gemma-4登場後はパレートフロンティアに残るモデルが減った。
- **ninjahawk1**: AIの典型的な戦略は「無料配布→ブランド確立→クローズド化」。オープンウェイツの継続を願う。
  - **culi**: 一般化のしすぎ。中国モデルはむしろプロプライエタリから始まってオープン化するケースが多い（Qwen自体がその例）。
- **0xbadcafebee**: SOTAを追う人たちを横目に、MiniMax M2.5を月$10で複数セッション並列実行して全てのコーディングをこなしている。
  - **Aurornis**: プロ開発者にとって月$10と$100の差は考慮するに値しない。SOTAモデルでも真剣な作業にはまだ信頼性が足りない。
- **greyskull**: Claude Codeを業務で数ヶ月使った後、RTX 4090でセルフホストを試みたが「痛いほど遅く」CC比較にならなかった。
  - **martinald**: MoEモデルをCPUオフロードで動かすと良い。llama.cppをソースからビルドし、コーディングエージェントに最適化させると好結果が得られる。
- **alex7o**: GLM 5.1など地味なモデルがOpusより優れた場面もある。「ハンマーはレンチより良い」とは言えない。ツールは用途次第。

---

## 3. [ggsql: A Grammar of Graphics for SQL](https://opensource.posit.co/blog/2026-04-20_ggsql_alpha_release/)

**Score:** 377 | **Comments:** 76 | [Post](https://news.ycombinator.com/item?id=47833558)

ggsqlはSQLクエリから直接データビジュアライゼーションを行うためのSQL拡張言語（α版）。R言語のggplot2の「Grammar of Graphics」思想をSQLに持ち込み、DuckDB・SQLiteをバックエンド、Vegaliteをレンダラーとして使用する。SQLしか使えないデータ専門家やAIエージェントが可視化コードを書く際の言語選択問題を解消することを目指している。

### Key Discussion Points

- **anentropic**: 「データベースと直接インタフェースする」という説明がどう実装されているか不明瞭で混乱した。
  - **thomasp85**（作者）: 各ビジュアライゼーションレイヤーをSQLクエリに変換し、返ってきたテーブルでレンダリングする仕組み。DuckDBインメモリでも動く。
- **getnormality**: ドキュメントを読み込んで理解。スタンドアロンのビジュアライゼーションアプリで、RやPythonを知らないSQL専門家向け。
  - **nchagnet**: SQLはアナリスト・科学者・エンジニアを横断する唯一の共通言語。matplotlibのボイラープレートはLLMを使っても辛い。SQL内で統一的に書けるのは魅力的。
- **JHonaker**: プロジェクトは評価するが、ggplot2との差別化ポイントが見えない。ggplot2の本当の問題は「非標準的な可視化」の難しさ。
  - **asutekku**: 「Rを使わなくていい」のがそもそもの利点。
- **lmeyerov**: グラフ解析向けのGFQL（OpenCypher拡張）でも同じ結論に達した。LLMフレンドリーなインタフェースとしてSQLは理にかなっている。
- **tomjakubowski**: SQL REPLから直接ビジュアライゼーションを作りたいとずっと思っていた。Perspective + DuckDBで同様のものを構想中。

---

## 4. [Kimi vendor verifier – verify accuracy of inference providers](https://www.kimi.com/blog/kimi-vendor-verifier)

**Score:** 184 | **Comments:** 17 | [Post](https://news.ycombinator.com/item?id=47838703)

Kimiがオープンソースの推論プロバイダー検証ツール「Kimi Vendor Verifier（KVV）」を公開した。ビジョンテスト・長文出力ストレステスト・ツール呼び出し精度など6つの専門ベンチマークで、インフラ実装の不具合（モデルの重みは正しくてもデプロイが壊れているケース）を検出する。

### Key Discussion Points

- **foundry27**: AWS Bedrockにはkimi K2/K2.5でツール呼び出しの20〜30%が無言で会話終了するバグがある。これはBedrockをキミの真剣なプロバイダーとして事実上除外しており、コスト的に高いAnthropicモデルへ誘導されてしまう。
- **bobbiechen**: このテストはうっかりミスは検出できるが、悪意ある業者は回避できる（フォルクスワーゲン排ガス不正と同様）。
  - **nulltrace**: それでも価値はある。CI上のパフォーマンスリグレッションテストが妨害を前提としないのと同じ。意図的な迂回は法的に全く別の問題になる。
- **gertlabs**: OpenRouterでは量子化レベルが指定されないプロバイダーがある。Kimi K2.6はここまでの評価では新しいOSSリーダー。
  - **kristianp**: OpenRouterには高品質プロバイダーを優先する「exacto」オプションがある。Kimi K2はトレーニング・推論両方でint4を使用。
- **OsamaJaber**: 「推論プロバイダーは静かに量子化レベルを落とす。ほとんどのユーザーは確認しない。」モデル開発元による標準的な検証器は正しいアプローチ。
- **seism**: 高性能マシンで15時間のテストは再現・スケールが難しい。ただしクラウドサービスの「見たものと提供されるものが違う」問題に向き合っている。
  - **Majromax**: このテストの主要ターゲットはベンダー自身。長い包括的テストによってベンダーが自社ホスティングに自信を持てる。

---

## 5. [Jujutsu megamerges for fun and profit](https://isaaccorbrey.com/notes/jujutsu-megamerges-for-fun-and-profit)

**Score:** 164 | **Comments:** 51 | [Post](https://news.ycombinator.com/item?id=47841129)

バージョン管理システムJujutsu（jj）の「メガマージ」ワークフローについての解説記事。複数の変更を並行して進め、最終的に一つのマージコミットにまとめる手法で、コンテキストスイッチのコストを最小化しながら柔軟な開発を可能にする。jjのスタック操作とエイリアス機能を活用した実践的なテクニックが紹介されている。

### Key Discussion Points

- **the_data_nerd**: 「実際に並列で作業しているわけではない。一つの作業を止めるコストをゼロに近くしているだけ。gitでは中断→リベース、jjでは編集するだけでスタックが自動再構成される。コンテキストスイッチが安くなるから気軽にできる。」
- **b1temy**: 並列ワークフローの利点がわからない。誤って相互依存するブランチを作りそうで怖い。
  - **duskdozer**: 作業中に「このチェンジセットが大きくなりすぎた、分割したい」と気づくケースで有用。gitiではリベース+fixupが必要だが、jjならより簡単。
- **chaychoong**: `jj parallelize`コマンドを多用している。コミット列をファンアウトする際に便利で、ブログ記事も書いた。
- **nchmy**: 素晴らしいテクニック集。jjui（TUI）と組み合わせるとさらに使いやすい。
- **sukit**: jjに移行したいがVS Codeのgitガターに依存している。jj向けの代替ツールは？
  - **paradox460**: VisualJJとJujutsu Kaizen（jjk）というVSCode拡張が人気。

---

## 6. [Soul Player C64 – A real transformer running on a 1 MHz Commodore 64](https://github.com/gizmo64k/soulplayer-c64)

**Score:** 83 | **Comments:** 23 | [Post](https://news.ycombinator.com/item?id=47839645)

1MHzのCommodore 64上で動作する25,000パラメータのトランスフォーマー実装プロジェクト。GPT-4比で約7000万分の1のパラメータ数ながら、マルチヘッドセルフアテンションを含む2層のデコーダー型トランスフォーマーを6502アセンブリで実装。1トークンの生成に約60秒かかるが、カスタムモデルをフロッピーディスクにロードして実行できる。

### Key Discussion Points

- **djmips**: 「GitHubリポジトリに6502コードがなくてがっかりした」
- **wk_end**: 25Kパラメータで壊れた文章しか生成できないなら「このスケールで動作している」とは言い難い。プロモーション文自体もAI生成臭がする（冗談めかして）。
- **daemonologist**: デモページで試したが「主に挨拶と別れしか言えない」。でも25kパラメータなら文句は言えない。
- **borsch_not_soup**: もしC64制約下でLLMアーキテクチャが有用な出力を生成できるなら、ニューラルネットの進歩はコンピュート以外の要因でも止まっていた可能性を示唆する。問題の枠組み自体を見直す契機になるかも。
- **mixmastamyk**: Vic-20の「ランダム文章生成プログラム」に汚い言葉を入れて近所の子供たちと笑い転げた記憶が蘇った。

---

## 7. [Quantum Computers Are Not a Threat to 128-Bit Symmetric Keys](https://words.filippo.io/128-bits/)

**Score:** 151 | **Comments:** 63 | [Post](https://news.ycombinator.com/item?id=47836784)

「量子コンピュータはAES-128を破れる」という俗説を丁寧に否定する技術解説。グローバーのアルゴリズムは理論上の二次加速を持つが、並列化すると優位性を失う。AES-128を破るには「724論理量子ビットで構成された約140兆の量子回路を10年間並列動作させる」必要があり、非対称暗号への攻撃とは桁違いにコストがかかる。NIST・ドイツBSIともに「AES-128はポスト量子時代も安全」と勧告している。

### Key Discussion Points

- **the_data_nerd**: キーローテーションは一つの脅威モデル（署名鍵の漏洩）しか防がない。過去に記録された暗号文には意味がない。長期的なデータ保護にはxaes-256-gcmをペイロードに使うべき。
- **michaelsmanley**: Filippo Valsordaの技術文章の明快さを称賛。数式も例も理解しやすい。
- **staticassertion**: グローバーが最善手かどうか疑問。フェイスタルネットワークなど他の構造を利用した量子攻撃の可能性は？
  - **amluto**: グローバーはオラクル型クエリに対して証明可能最適。しかしAESは黒箱ではない。3ラウンドフェイスタルへの量子攻撃は論文で実証済み。AESはラウンド数が多いので多分安全だが証明はない。
- **bob1029**: ECDSA鍵を5分ごとにローテーションする量子対策プロトタイプを作っている。30〜60秒にも短縮可能。
  - **cortesoft**: 鍵ローテーションは対称暗号には効かない。非対称鍵は対称鍵の交換にしか使われないため、問題はトラストルートの侵害にある。
- **rugina**: 「量子コンピュータは素因数分解を解ける」「でも実際に解けたのは15だけ」という矛盾した言説に混乱している。
  - **bawolff**: 「15の因数分解」は実際の誤り訂正アルゴリズムを使っておらず、いわばエンジン壊れた車を押したようなもの。暗号研究者は15年後のリスクを考えるので、今から備えることは理にかなっている。

---

## 8. [Ternary Bonsai: Top Intelligence at 1.58 Bits](https://prismml.com/news/ternary-bonsai)

**Score:** 73 | **Comments:** 20 | [Post](https://news.ycombinator.com/item?id=47812749)

PrismMLが1.58ビット重みの超軽量言語モデルシリーズ「Ternary Bonsai」を公開。8B・4B・1.7Bの3サイズで、標準16ビットモデルと比較してメモリフットプリントが約9分の1。Apple M4 Proで毎秒82トークンを実現し、エッジデバイス（iPhone等）への展開を視野に入れている。推論時に乗算が不要なため、よりシンプルで安価なハードウェアで実行できる。

### Key Discussion Points

- **yodon**: 1.58ビットの最大の利点は「推論時に乗算が不要」なことで、根本的にシンプルかつ安価なハードウェアで動作できる。
- **armanj**: Qwen3.5との比較ベンチマークを実施。Ternary-Bonsai-1.7B（462 MiB）はQwen3.5-0.8Bより12ポイント高精度で5%小さい。4BモデルはQwen3.5-4Bの40%のサイズで精度差2ポイント以内。「バイトあたり精度」で圧倒的な優勝。
- **freakynit**: RTX 3090上でTernary-Bonsai-8Bを公開アクセス提供。1001トークン入力→約140トークン/秒、VRAM使用量は約7GB。
- **usernametaken29**: ハードウェアの非線形性が量子化の有効性を支えているという面白い視点。量子化の実用限界を過小評価していた。
- **gbgarbeb**: 「1100B Kimi K2.6を160GBで1.125 bpwで動かせるのはいつ？」

---

## 9. [Japan's Cherry Blossom Database, 1,200 Years Old, Has a New Keeper](https://www.nytimes.com/2026/04/17/climate/japan-cherry-blossom-database-scientist.html)

**Score:** 39 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=47811668)

1,200年以上にわたる日本の桜の開花記録データベースが新しい管理者を得た話。長年このデータを管理してきた大阪公立大学の青野教授が引き退く際、後継者探しに苦労したという経緯が語られている。このデータベースは気候変動研究の重要な一次資料であり、その継続的な維持が科学コミュニティにとって重要であることが改めて認識された。

### Key Discussion Points

- **hbarka**: 権威ある記録の後継者に名乗りを上げる人が少なかったことに驚いた。「マーケティング不足」だろうと推測。
- **brainless**: NYTペイウォール回避リンクとOur World in Dataの京都桜の開花ピーク日データを共有。
- **renewiltord**: 「弟子を育てておくべきだったのに！」

---

## 10. [How to make a fast dynamic language interpreter](https://zef-lang.dev/implementation)

**Score:** 65 | **Comments:** 4 | [Post](https://news.ycombinator.com/item?id=47812749)

Zef言語のインタープリターをJITや高度なGCなしに16.6倍高速化した手法を解説する記事。主要な最適化技術として、①ヒープアロケーションを避けるタグ付き64ビット値表現、②過去のアクセスパターンを記憶するインラインキャッシュ、③ハッシュテーブルの代わりにストレージオフセットを事前計算するオブジェクトモデル、④キャッシュ前提が壊れた際の無効化に使うウォッチポイント、⑤特化関数・アロケーション削減などの常識的最適化、の5つを紹介している。

### Key Discussion Points

- **boulos**: Fil-Cの実用的な使用体験はどうか？実際に役立っているか？
- **grg0**: 興味深い内容。リポジトリが99.7% HTMLで0.3% C++という構成が面白い。インタープリター実装の小ささの証明かも。

---

## Trends

本日のHNトップ10から見えるテーマと傾向：

1. **AI業界の成熟と競争激化**: Qwen、Kimi、Ternary Bonsaiなど複数の新モデルが同日にリリースされ、ベンチマーク比較や価格競争が日常化。「どのモデルがSOTA」より「ユースケースと価格のフィット」で選ぶ視点が増えている。

2. **推論インフラの信頼性問題**: Kimi Vendor Verifierの登場が示すように、モデルの性能ではなく「プロバイダーが正しく動かしているか」という新しい信頼性問題が浮上。量子化レベルの暗黙的な低下やツール呼び出しのバグが現実の問題として認識されている。

3. **エッジ・軽量化の加速**: 1.58ビット量子化（Ternary Bonsai）や1MHz C64でのトランスフォーマー実装など、極限の効率化への関心が高い。推論時の乗算不要という新しい設計思想が注目されている。

4. **Appleのリーダーシップ転換**: John TernasのCEO就任は本日最大のニュース。「ハードウェアは世界一だがソフトウェアは低下している」という評価が広くコミュニティに共有されており、ハードウェアエンジニア出身の新CEOへの期待と不安が交錯している。

5. **開発ツールの革新**: ggsqlのようなSQL完結型ビジュアライゼーションや、Jujutsuのようなコンテキストスイッチコストをゼロに近づけるVCSなど、「既存ツールを置き換えない」ではなく「既存の文法・スキルで新しいことができる」アプローチが支持を集めている。

6. **量子コンピュータへの冷静な視点**: 「AES-128は量子コンピュータに安全」というテーマは、量子コンピューティングの誇大広告と現実のギャップを整理するものとして歓迎されており、技術的な正確さを重視するHNらしい議論を生んでいる。
