---
title: "Hacker News トップ10 サマリー（2026年6月22日）"
date: "2026-06-22T17:12"
category: "summary"
summary: "Deno Desktop・Zig寄付・顔認識拒否運動・Codexバグ・GLM5.2比較など本日のHN注目ストーリー10選"
tags: ["hackernews", "deno", "zig", "privacy", "llm", "openai", "claude"]
---

## 1. [Never Give Them Your Face](https://nevergivethemyourface.com/)

**Score:** 575 | **Comments:** 295 | [Post](https://news.ycombinator.com/item?id=48630066)

プラットフォームによる顔認証・年齢確認要求に「No」と言うことを呼びかけるマニフェスト。いわゆる「年齢確認」は実際には氏名・生年月日・身分証番号・顔の3Dバイオメトリクスを含む完全な身元開示要求であり、パスワードと違って顔は変更不可能なため、漏洩時のリスクが永続する。「プラットフォームはあなたを必要としているが、あなたはプラットフォームを必要としていない——唯一の武器は『No』という言葉だ」と締めくくる。

### Key Discussion Points

- **__MatrixMan__**: Facebookで顔スキャン後に即アカウント停止。バイオメトリクスは不変であるため、問題を起こした「誰か」との区別が自分の顔でも証明できなかった。解決不能な状況を生む致命的欠陥だと指摘。
  - **dd8601fn**: Metaの広告アカウント作成UIが壊れており、修正を試みるほど「顔スキャン要求」の壁にぶつかる。お金を払おうとしても不可能な状態と批判。
  - **howard941**: サポートに問い合わせても「コミュニティ基準違反」という曖昧な理由しか得られず、不服申立て不可。カフカ的な官僚主義と評する。
- **harel**: 署名運動は無効。20億人ユーザーのプラットフォームにとって5万人の脱退は「大海の一滴」であり、結局多くの人は必要に迫られて従ってしまうと現実的に指摘。
  - **munk-a**: プラットフォームの価値を過大評価しているだけで、競合にはより良いプライバシーを提供するものもある。ユーザーを縛っているのはネットワーク効果のみだと反論。
- **fl4regun**: 2000年代からドラッグもポルノもネットで入手できたのに、なぜ「今」規制に動くのかと疑問。場当たり的な対応と批判。
- **jupr**: Torは犯罪者のためではなくすべての人のためのツール。利用者が増えるほど全員が「同じ」に見えるようになり、本当に保護を必要とする人を守れる。
  - **bronlund**: TorはCIAが出口ノードの半数を握っている可能性があり、過信は禁物と懐疑的な見方を示す。

---

## 2. [Pledging Another $400k to the Zig Software Foundation](https://mitchellh.com/writing/zig-donation-2026)

**Score:** 487 | **Comments:** 148 | [Post](https://news.ycombinator.com/item?id=48630020)

Ghosttyの作者・Mitchell Hashimotoが2024年に続き追加で40万ドル（累計70万ドル）をZig Software Foundationに寄付すると表明。Zigを「野心的・実用的・独立的で品質に真剣」と評価し、GhosttyがZigなしには実現できなかったと感謝を示す。Zigの「LLMコントリビューション禁止」方針には個人的に同意しないが、オープンソースプロジェクトが独自の文化を貫く自律性を尊重するとして寄付の理由の一つに挙げている。

### Key Discussion Points

- **ksdme9**: 「称賛するものにそれだけのお金を投じられるのは気持ちよさそう」と率直な感想。
  - **sph**: 「自分が払える範囲でも同じ満足感を得られる。試してみて」とユーモラスに返す。
- **Lerc**: Hashimotoの最大の貢献はZig寄付よりもGhosttyそのものかもしれない。数億ドルで買収されたツールより実用的な価値があると評する。
  - **wickrom**: なぜ多数あるターミナルエミュレータの中からGhosttyを選んだのかを質問。
- **Hasz**: 「言動一致の人だ。本当に尊敬する」とHashimotoへのシンプルな称賛。
- **dieseleration**: 言語設計においてLLMの「何でも賛成」姿勢は有害。Zigがコントリビューションを慎重に管理する方針を支持しつつ、エンドユーザーが開発にAIを使うのは別の話だとHashimotoの立場を擁護。
  - **joaohaas**: AIコントリビューション禁止の本当の理由はリンク先の記事にあり、記事が伝えるものより複雑だと補足。

---

## 3. [Claude Code の「拡張思考」はサマリーであり、本物の思考ではない](https://patrickmccanna.net/the-text-in-claude-codes-extended-thinking-output-is-not-authentic/)

**Score:** 144 | **Comments:** 109 | [Post](https://news.ycombinator.com/item?id=48630535)

Patrick McCannaによる調査記事。Claude Codeがセッションをディスクに記録するとき、「thinking blocks」として表示されるのは暗号化されたシグネチャであり、実際の推論内容はAnthropicが鍵を持つ暗号文のため参照不可能。APIが返すのは実際の思考ではなく「思考プロセスのサマリー」に過ぎず、完全な思考ログを得るには企業向け契約が必要。エージェントの意思決定を監査したい用途では重大な制約となると警告する。

### Key Discussion Points

- **kfarr**: HNでは擬人化はタブーだが、人間も事後合理化者だという研究があることは指摘に値すると皮肉を交えてコメント。
- **irthomasthomas**: 推論が隠蔽されたモデルはすべて使用・推奨しない。隠れた推論チェーンへのプロンプトインジェクション攻撃によるデータ窃取が可能になるため危険だと主張。
- **furyofantares**: 記事のJPEG/BMP比喩が逆（BMPがロスレス、JPEGがロッシー）と誤りを指摘。
- **StizzurpXDD**: AnthropicだけでなくOpenAI・Googleも推論を非公開にしている。競合に推論メカニズムを公開すれば研究開発投資が無意味になるためビジネス上必然の判断。
- **craigmart**: 企業がCoTを隠す主目的は競合他社がモデルのCoTで学習するのを防ぐこと。

---

## 4. [Moebius: 0.2Bパラメータで10Bレベルの画像インペインティングモデル](https://hustvl.github.io/Moebius/)

**Score:** 90 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=48630171)

中国・華中科技大学チームが発表した画像インペインティングモデル。パラメータ数0.22B（約2.2億）でありながら、FLUX.1-Fill-Devの11.9Bや他の10Bクラスモデルと同等以上の性能をPlaces2・CelebA-HQ・FFHQなど6つのベンチマークで達成。推論ステップあたり26.01msで15倍以上の高速化を実現。Local-λ Mix Interaction (LλMI) ブロックによる線形アテンション設計と、ピクセル空間デコードを避けた潜在空間内知識蒸留が効率化の鍵。

### Key Discussion Points

- **teroshan**: 「Moebius」と「インペインティング」を見て、フランスの伝説的アーティストJean Giraud（Moebius）の作品を無断利用するモデルかと一瞬ヒヤッとしたと正直な感想。
- **NooneAtAll3**: どこかで試せるのか、単なる宣伝なのかを質問。
- **N_Lens**: 「サンプルギャラリーがかなり印象的」と評価。
- **epolanski**: 外壁画像に庇を追加するECサイト用途でSTOAのインペインティングを探している。Moebiusが使えるかを質問。
- **delis-thumbs-7e**: 「これが本当に役に立つAI活用例」と実用性を評価。

---

## 5. [Deno Desktop](https://docs.deno.com/runtime/desktop/)

**Score:** 834 | **Comments:** 323 | [Post](https://news.ycombinator.com/item?id=48626137)

DenoプロジェクトがTypeScript/JavaScriptコードをスタンドアロンのデスクトップアプリに変換する「Deno Desktop」機能を発表。Deno runtimeとWebレンダリングエンジンを単一バイナリに同梱。Next.js・Astro・Fresh・SvelteKitなど主要フレームワークを自動検出、ホットリロード対応。バックエンドとUIの通信はIPCではなくインプロセスで行いオーバーヘッドを削減。Mac/Win/Linuxのクロスプラットフォームビルドを1台のマシンから実行可能。現時点ではcanaryビルド（v2.9.0）のみで利用可能。

### Key Discussion Points

- **leleat**: ロードマップに「アプリ間でCEFランタイムを共有する」とあるが、異なるアプリが異なるCEFバージョンを必要とした場合、結局Electronと同じ問題になるのではと疑問。
  - **kodablah**: CEFを使ったプロジェクト経験からGoogleがCEFベースアプリのログインをブロックしていると指摘。CEFプロジェクトを断念せざるを得なかった実例を共有。
- **sheept**: コンパイル時に権限が確定してバイナリに焼き込まれるが、ユーザーがどの権限が付与されているか確認・選択できる仕組みがあると良いと提案。
  - **tomComb**: 開発者が提供するバイナリに対してDenoの権限ダイアログを信頼することの意味自体が疑わしいと反論。
- **bobajeff**: CEFやWebViewではなく「ブラウザで開く」オプションがあれば最良のトレードオフになるのにと要望。
  - **zamadatix**: 実質「Raw」バックエンドがそれに相当する——ソケットを開いてURLを渡すだけで済むと説明。
- **pier25**: 「Hello Worldのバイナリサイズはどのくらい？」とシンプルな疑問。
- **40four**: 「しばらくDenoなしで新しいプロジェクトを始めていない。Node.jsへの支持を完全に上書きした」と熱烈な支持。

---

## 6. [Charge Robotics (YC S21) Is Hiring Software and Hardware Engineers](https://jobs.ashbyhq.com/charge-robotics)

**Score:** 1 | [Post](https://news.ycombinator.com/item?id=48632792)

YCombinator（S21バッチ）支援のCharge Roboticsがソフトウェア・ハードウェアエンジニアを募集中の採用情報。太陽光発電所の建設自動化ロボットを開発している企業。

---

## 7. [National Science Foundation slashes basic science to fund new tech initiative](https://www.science.org/content/article/exclusive-nsf-slashes-research-programs-support-new-tech-initiative-insiders-say)

**Score:** 13 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=48632327)

Science誌の独占報道。NSF（全米科学財団）が基礎科学研究プログラムを削減し、新たなテクノロジー推進イニシアチブに予算を振り向けているという内部告発。基礎研究から応用・産業技術への資金シフトが進んでいる。

### Key Discussion Points

- **josefritzishere**: 「何の疑いもないことですね…」と皮肉たっぷりに。
- **TimorousBestie**: 実質的にテック産業への補助金。監視が少ない形でのSTTRプログラムの焼き直しに過ぎない。研究者の育成パイプラインが崩壊したとき何が起こるかを懸念。

---

## 8. [Nintendo Wii U games running from a 1980's Bernoulli disk [video]](https://www.youtube.com/watch?v=8GZDOpV2OXk)

**Score:** 27 | **Comments:** 3 | [Post](https://news.ycombinator.com/item?id=48622241)

1980年代のIomega Bernoulliディスク（リムーバブルハードディスクの前身）からNintendo Wii Uのゲームを起動するデモ動画。現代のゲームを数十年前のストレージメディアで動作させるというレトロコンピューティングの技術的挑戦。

### Key Discussion Points

- **stuxnet79**: Wii UはSwitchのための礎石だった。Cemuエミュレータはあるが互換性が悪く、まともなエミュレータが欲しいとコメント。
- **everyone**: かつてアーキテクトとしてZipディスクを多用していたが「クリックの死」は経験しなかった。USBメモリが登場するまでは中〜大ファイルの移動手段はZipかCD-Rしかなかったと回顧。

---

## 9. [Codex logging bug may write TBs to local SSDs](https://github.com/openai/codex/issues/28224)

**Score:** 338 | **Comments:** 186 | [Post](https://news.ycombinator.com/item?id=48626930)

OpenAI CodexのSQLiteフィードバックログが年間最大640TBをローカルSSDに書き込む深刻なバグのGitHub Issue。21日間で37TBが書き込まれた報告があり、一般的なコンシューマSSDの書き込み耐久値（約600TBW）を1年で使い切る可能性がある。原因はデフォルトでTRACEレベルのログを全依存関係に対して有効にしていること。1週間以上OpenAIからの公式応答がない。

### Key Discussion Points

- **b--l**: Codexはスピナーを表示するだけでM5 MacBook ProのGPUを100%使い切る「スロップウェア」の代表例。ビジョンコーディングが「実現可能」かを議論する前に、世界最大級の資金力を持つAI企業がこのレベルのソフトウェアしか出せない現実を直視すべきだと痛烈に批判。
  - **jofzar**: Claude Codeも「スロップウェア」という批判から自由ではないと反論。
- **woadwarrior01**: SQLiteのトリガーでログINSERTをブロックする暫定対処法を共有。また `VACUUM FULL` でDBを27GBから73MBに圧縮できたと報告。
  - **sgarland**: 「データベースレベルのルールが再び救世主になった」と評価。
- **christophilus**: Codex CLIはオープンソースなので自分でパッチ可能とフォロー。
  - **redox99**: オープンソースなのはCLIのみ。問題のCodexアプリは独自コードでパッチ不可と訂正。
- **neuralkoi**: 「バイブコーディングは『動かしながら壊す』を次の次元に引き上げた」と揶揄。
  - **cryo32**: 「バイブコーディングの産物が本番で大規模障害を引き起こし、今まさにインシデント対応中」と生々しい現場報告。
- **i2km**: 1週間以上OpenAIが沈黙しているのが信じられない。自社のエージェントをGitHub監視に使えばすぐ修正できるはずでは——と皮肉交じりに疑問。

---

## 10. [GLM 5.2 vs. Opus](https://techstackups.com/comparisons/glm-5.2-vs-opus/)

**Score:** 369 | **Comments:** 260 | [Post](https://news.ycombinator.com/item?id=48626866)

GLM 5.2（智谱AI）とClaude Opus 4.8を同一プロンプトで3DプラットフォーマーゲームをWebGLで1から実装させる比較テスト。Opusは33分・約$21.92で完成度の高い成果物、GLM 5.2は70分・約$5.39でテクスチャ欠損・スパイク当たり判定なしなどの不具合。GLM 5.2はテキスト専用でマルチモーダル非対応のため、スクリーンショットの視覚的検証ができない致命的制約がある。総合判定はOpus優位だが、コスト効率には注目。

### Key Discussion Points

- **cultofmetatron**: ワンショットプロンプトはベンチマークでも実用ケースの代表でもない。計画ファイルを忠実に実行し、ガードレールを守り、ドリフトなく完了できるエージェント能力こそ評価すべきだと主張。
  - **gertlabs**: 中国モデルはツール使用が一般に得意。Geminiは初回応答は強いが反復ツール使用が弱いと補足。
- **faxmeyourcode**: コスト比較——Opus APIが$5/$25に対し、GLM 5.2 APIは$1.4/$4.4。「Haikuの価格でOpus相当の能力を得られる」と費用対効果を評価。
- **meander_water**: ワンショットは実用を反映しない。信頼性（テスト結果を捏造しないか）やステアラビリティ（指示通りに動くか）こそが重要指標だと批判。
  - **jameswhitford**（記事著者）: 完全に同意。これはベンチマークではなく「バイブテスト」。コラボレーティブ評価は次回挑戦予定と返答。
- **lukaslalinsky**: LLMをスマートな同僚として使っており、協調作業での自然さはOpus系が断然上。
  - **Terretta**: Opus 4.6は「療法士的な」言語を避けたシンプルで直接的なモデルだった。4.7/4.8は「精神的整合を確認しながら」進む傾向があり後退。Fableは両者のベストを合わせた印象で、コミットあたりのターン数が最も少なかったと詳細に評価。
- **xlii**: GLM 5.2のコード出力は質が高いが計画フェーズで迷走しやすく、補正する。ただしGPT比で5倍遅い点が大きな課題と実体験を共有。
  - **nijave**: どのプロバイダー経由で使っているか質問。z.aiはトークン毎秒が低く優先度も低い可能性があると指摘。

---

## Trends

本日のHacker Newsトップ10から見えてくる共通テーマ：

1. **AIの透明性・信頼性への疑問**: Claude Codeの「拡張思考」の不透明さ、Codexの深刻な品質問題、GLM 5.2の評価方法論の不備など、AIツールの信頼性と透明性を問う議論が活発。「スロップウェア」「バイブコーディング」という批判的な言葉が複数スレッドに登場。

2. **プライバシー vs. 利便性の対立**: 「Never Give Them Your Face」が575ポイントを獲得したことは、顔認証・生体認証要求への市民的抵抗感の高まりを示す。不変のバイオメトリクスへの依存がもたらすリスクに対する議識が広まっている。

3. **オープンソース・コミュニティへの財政支援**: Zig Foundation への$40万寄付は、持続可能なオープンソースエコシステムへの個人的コミットメントの象徴として高く評価された。

4. **Deno/Webランタイムの進化**: Deno Desktopは最多スコア（834）を獲得。JavaScript/TypeScriptエコシステムがデスクトップアプリ開発にも本格参入する流れへの期待が大きい。

5. **中国AIモデルのコスト競争力**: GLM 5.2がOpus品質に近い能力をHaiku価格帯で提供できる可能性への注目。品質面ではまだ差があるが、コスト効率の観点で既に無視できない存在になりつつある。

6. **基礎研究 vs. 応用技術の資金配分**: NSFが基礎科学を削減してテック産業寄りの取り組みを強化する動きは、学術研究パイプラインへの長期的悪影響を懸念する声を集めた。
