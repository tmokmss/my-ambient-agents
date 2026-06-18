---
title: "Hacker News トップ10サマリー（2026年6月18日）"
date: "2026-06-18T15:50"
category: "summary"
summary: "Midjourney医療スキャン参入・GitHub 1万件マルウェアリポジトリ・Emacs 31など本日のHNトップ10"
tags: ["hackernews", "tech", "ai", "security", "emacs", "medical", "nuclear", "open-source"]
---

## 1. [Emacs 31 Is Around the Corner: The Changes I'm Daily Driving](https://www.rahuljuliato.com/posts/emacs-31-around-the-corner)

**Score:** 240 | **Comments:** 102 | [Post](https://news.ycombinator.com/item?id=48584135)

Emacs 31 ではTree-sitterのグラマー自動インストール（`treesit-auto-install-grammar t`）、実験的なMarkdownモード（`markdown-ts-mode`）、補完機能の強化、ウィンドウレイアウト操作コマンドの追加などが導入される。長年の課題だったフルスクリーンプログラムの表示バグも修正され、xrefバッファのインライン編集も可能になった。筆者はこれらの変更を開発ビルドで実際に使用しており、Emacs 31が従来の「追いつき」から「再び積極的に勧められるエディタ」への転換点になるという期待感を示している。

### Key Discussion Points

- **jlouis**: 「Emacsはまだ最良のテキストエディタの一つ。速く、設定可能で、自分でコントロールできる」
  - **hollerith**: 「native compilationのトランポリン方式は望んでいなかった機能。攻撃対象領域が広がり、Waylandを使いたいなら受け入れるしかない」
- **mesrik**: 34年使い続けている。EmacsのCLI操作キーはCisco IOSやブラウザのアドレスバーなど広く採用されているが、Firefoxでは動かなくなったことが唯一の不満
  - **aag**: 「他のエディタを使う理由が分からない」
  - **infinet**: エディタとして本格的には使っていないが、Magitのためだけにビルドして使っている
- **gentooflux**: 「31にアップグレードしても、また同じ使い方を20年続けるんだろうな（笑）」
  - **taeric**: built-in autocompleteの進化でconfigを減らせた。tree-sitter統合でさらに削れそう
  - **frantathefranta**: Emacs使いの永遠のサイクル「アップグレード→MELPAパッケージ削除→繰り返し」
- **jerf**: Claude AIとの統合を機にVSCodeから100%Emacsに戻った。4K画面を6ペインのコードで埋めて使う。Tree-sitterがプロジェクトを再活性化させたと思う
  - **baokaola**: ターミナル問題にはGhostelプロジェクトを試してほしい
  - **ww520**: vertico/marginalia/consult/embarkの組み合わせが素晴らしい。Embarkのコンテキスト依存アクションは過小評価されている
- **bryanlarsen**: LLMはテキストファイルで設定するEmacsと相性抜群。以前挫折した人はAIエージェントと一緒に再挑戦を
  - **varun_ch**: Neovimでも同じことをやっている。「リーダー/でターミナル表示して」と自然言語で指示するだけ
  - **sporedro**: LLMのおかげでEmacs設定が「ほぼ即時」になった。VSCodeにはほぼ戻らなくなった

---

## 2. [Swiss parliament lifts ban on new nuclear power plants](https://www.bluewin.ch/en/news/switzerland/parliament-lifts-ban-on-new-nuclear-power-plants-3257535.html)

**Score:** 82 | **Comments:** 16 | [Post](https://news.ycombinator.com/item?id=48585746)

スイス連邦議会は2026年夏季会期中、新規原子力発電所の建設禁止を撤廃することを100対98の僅差で可決した。ただし強制国民投票が必要なため、最終的な決定は国民が行う。この決定は「ブラックアウト・イニシアチブ」への対案として提出されたものであり、政策の大きな転換点となる。

### Key Discussion Points

- **orwin**: スイス・ノルウェー・オーストリアは欧州で最も原子力を必要としない国々だが、他国での議論を促す意味では良い。ただしスイスでは経済的に成立しない可能性が高い
- **reddalo**: イタリアも同様にしてほしい。チェルノブイリ直後の国民投票で原発が禁止されたが、今も影響を受けている
- **bryanlarsen**: 「世界で最も高価な電力を生産する競争中！現記録はジョージア州のVogtleだが、カナダのオンタリオが5000億ドルの核プロジェクトで記録更新を目指している（皮肉）」
- **starbix**: 再生可能エネルギーが間に合うまでの時間も費用も無駄。フランスとの共同プロジェクト参加か水力発電拡張に集中すべき。どのみち国民投票で否決される可能性が高い

---

## 3. [Ubiquiti: Enterprise NAS, Built on ZFS](https://blog.ui.com/article/introducing-enterprise-nas)

**Score:** 69 | **Comments:** 37 | [Post](https://news.ycombinator.com/item?id=48585866)

UbiquitiがZFSベースのエンタープライズNAS（ENAS）を発表。ARM Neoverse N2 8コア・64GB ECC RAM・16ドライブベイで最大1ペタバイトのストレージを提供し、価格は$3,999。iSCSIによるブロックストレージ、UniFiエコシステムとの統合、ソフトウェアライセンス費用なしが特徴で、Proxmox・VMware・Hyper-Vの仮想化環境にも対応する。

### Key Discussion Points

- **elevation**: 15年前のEdgeRouterが今もサポートされているUbiquitiなら長期信頼できる。ZFSは他の選択肢より格段に優れており、メルクルツリーなしで構築するストレージ企業はエンジニアよりマーケが強い証拠
- **exabrial**: Ubiquitiの最大の特徴は月額費用ゼロ。最近の買収製品はどれもMRRモデルに切り替わっていて辟易している
- **topspin**: SME向けには良いが、8C+64GBではZFSの重機能（dedup等）には不十分で、真のエンタープライズ（NetApp/Pure Storage）グレードではない
- **kyrra**: ストアページ確認 — $3,999
- **SideburnsOfDoom**: 「ドライブモデルに制限なし」という記述はSynologyへの当てこすりに見える

---

## 4. [I found 10k GitHub repositories distributing Trojan malware](https://orchidfiles.com/github-repositories-distributing-malware/)

**Score:** 193 | **Comments:** 55 | [Post](https://news.ycombinator.com/item?id=48583928)

セキュリティ研究者が自身のリポジトリの悪意ある複製を発見したことをきっかけに調査し、約1万件のGitHubリポジトリがトロイの木馬マルウェアを配布していることを突き止めた。これらのリポジトリは正規プロジェクトのコミット履歴と貢献者情報を丸ごとコピーして信頼性を偽装し、数時間ごとにコミットを更新して「最終更新日」ランキングの上位に留まり続ける。GitHubはレポート後に削除したが、手法自体は残存している。

### Key Discussion Points

- **emodendroket**: 「オープンソースなら安全」という原則はとっくに破綻している。コードをレビューする時間がある人はいないし、GitHub上のソフトをバイナリで使う人はなおさら
  - **spicyusername**: 「マルウェアか否か」ではなく「検証可能か不可能か」が本質的な区別
  - **embedding-shape**: FOSS界の先達は2000年代初頭から「3rd partyサイトのものはウイルスだらけ」と叫んでいた。今の方がむしろリスクが高いのに
- **jp0001**: サンプルをGenusCodesにアップロードして分析 — discode trojan familyに関連する可能性
- **StableAlkyne**: BingでURLタイポのフィッシングページが上位表示され危うく騙されそうになった経験から乗り換えた。Googleはフィッシングページをほぼ弾いてくれる
  - **weird-eye-issue**: パスワードマネージャーがドメイン不一致を検知して入力を拒否してくれるので有効
  - **spicyusername**: 「Googleの方がマシ」とは言えない。どの巨大企業が他より良いかを説得するのは難しい
- **gus_**: 昨年も類似の攻撃が報告されていた。GitHubは削除済みリポジトリもAPIから参照可能で実際には「マーク」されているだけ
- **RoadieRoller**: 数時間ごとにコミット削除＆再プッシュするのは「Last Updated」上位に居続けてキーワード検索結果をジャックするため
  - **philistine**: 「その通り！」

---

## 5. [Launch HN: TesterArmy (YC P26) – Agents that test web and mobile apps](https://tester.army)

**Score:** 22 | **Comments:** 5 | [Post](https://news.ycombinator.com/item?id=48586299)

YC P26採択のTesterArmyが自然言語でE2Eテストを定義しエージェントが自律実行するプラットフォームをローンチ。デプロイ前後のテスト自動実行・Slack/Discord連携・GitHub統合を提供。既に30チーム以上が日常利用し、タイムゾーンバグや決済フローのリグレッションなどを発見した実績を持つ。

### Key Discussion Points

- **dbbk**: 「E2Eテストのセットアップが遅く高コスト」という主張に違和感。Opusでコードを書かせているなら、自分が書いたコードのテストを書くことも知っているはず。外部ステップが必要な理由が不明
- **msencenb**: オープンPRのコードパスを推測してアドホックにテストを実行できるか？CypressのAIプロンプト機能を使っているが小さな修正のボトルネックになっている
- **yohguy**: Expo/ネイティブモジュールを含むモバイルアプリは対応するか？Hobbyプランは25テスト/PRなら月10PR分しかないのでは

---

## 6. [What was nice about the UI of Windows 2000](https://movq.de/blog/postings/2026-06-16/0/POSTING-en.html)

**Score:** 25 | **Comments:** 9 | [Post](https://news.ycombinator.com/item?id=48586231)

Windows 2000のUIを振り返り、視覚的アフォーダンス（3Dレリーフでボタンがボタンらしく見える）・一貫した操作モデル・常時表示のスクロールバー・ラベル付きグループボックスなど、学習コストが低く発見可能なデザイン原則を称賛した記事。フラットデザインへの移行によって「どこをクリックすればいいか分からない」現代UIへの批判的まなざしも含む。

### Key Discussion Points

- **bluedino**: Win 2000はピークWin UI。次のXPは「フィッシャープライス化」し、Win 8はもっとひどかった。Active Desktopだけは失敗だったが
- **marginalia_nu**: スキューモーフィックデザインの力は「一貫したメタファーの強制」にある。現実世界で培った認知能力をそのままUIに適用できる
- **mysterydip**: 全てが直感的で、操作していてリズムに乗れた
- **alberth**: 「ボタンはボタンらしく、ウィンドウはウィンドウらしく、余計なデザイン要素がなかった」

---

## 7. [Hospitals and universities repurposing drugs at 90% lower cost](https://www.kcl.ac.uk/news/hospitals-and-universities-repurposing-drugs-at-90-lower-cost)

**Score:** 152 | **Comments:** 66 | [Post](https://news.ycombinator.com/item?id=48583386)

キングス・カレッジ・ロンドンの研究が明らかにした、病院・大学による既存薬の転用研究システム。製薬会社の臨床試験費用の10%未満で実施でき、特許切れのジェネリック薬を新適応症に活用する。癌治療薬を失明の予防に転用したり、乳がん薬を予防薬に変えた例などがある。製薬会社が商業的関心を失うタイミング（ジェネリック化後）がアカデミックな転用研究の最盛期となるパラドックスが指摘されている。

### Key Discussion Points

- **jawns**: ハンチントン病向け非営利団体「Cures Within Reach」を支援している。大手製薬が参入しない希少疾患こそ転用研究の価値が高い
  - **petesergeant**: ハンチントン病にはRoche・Regeneron・Novartisなど大手も積極投資中。Novartisは10億ドルを投じ、さらに20億ドルのコミット済み。AMT-130は12ヶ月以内にFDA申請予定
  - **dmichulke**: そのサイトはドナー向けで患者向けの情報が不足している
- **functionmouse**: RevlimidのProPublica記事（製薬会社の薬価高騰問題）へのリンクを共有
  - **toomuchtodo**: 関連するHN過去スレッド「Price of Remission」を紹介
- **oezi**: 規制上の問題：製造者の同意なしに既存薬を新適応症に正式承認させる経路がない。あくまでオフラベル使用の明確化にとどまる
  - **intrasight**: 何千万人もがすでにオフラベルで治療を受けている
  - **vidarh**: 記事も指摘しているように、特許切れ後が転用研究の主な時期
- **turtleyacht**: 転用研究の治験情報はどうやって患者に届くのか？
  - **Aurornis**: 専門医は分野の最新研究を把握しており、患者が独自に発見する前に知っていることが多い。PubMedで検索できるが「単発の怪しい論文」と「本物のトレンド」を見分ける目が必要
  - **astura**: clinicaltrials.govで検索可能。大規模医療機関のメーリングリスト登録も有効

---

## 8. [Has W Social switched to closed source?](https://blog.elenarossini.com/w-social-public-institutions-and-the-theater-of-european-digital-sovereignty/)

**Score:** 108 | **Comments:** 60 | [Post](https://news.ycombinator.com/item?id=48584497)

欧州の「X代替」として登場したW Socialが、欧州委員会・ECBなど主要EU機関を取り込む一方で、GitHubリポジトリを予告なく削除しクローズドソース化した疑いが浮上。EU機関が移行する前に存在していたオープンソースの代替「Eurosky」（Modal財団運営）はメディアにほぼ取り上げられなかった。W SocialはDavosで電撃発表され、アドバイザーにSam AltmanのTools for Humanityでプライバシー責任者を務める人物が含まれることも懸念材料となっている。

### Key Discussion Points

- **pocksuppet**: 「最初にHNに広告が出た時から怪しかった。本人確認を謳っているのに自分は6つのアカウントを作れた」
- **threecheese**: 「Davosでの慌ただしい発表」という背景が、EUが透明性の高いEuroskyを差し置いてW Socialを選んだ理由を説明している
- **tao_oat**: 「W SocialはヨーロッパなまりのTruth Social」という評が的確
- **xg15**: WEF登場と最初に参加したユーザー層を見ると、EU全体のX代替というより政治的対立軸上で独自プラットフォームを持ちたいEU政治家向けのように見える
- **xg15**: オープンソースで全て透明なEuroskyが報道ゼロなのに、W Socialはなぜ国家レベルのニュースになったのか不思議

---

## 9. [Midjourney Medical](https://www.midjourney.com/medical/blogpost)

**Score:** 1099 | **Comments:** 757 | [Post](https://news.ycombinator.com/item?id=48579650)

画像生成AI企業Midjourneyが医療部門「Midjourney Medical」を発表。10万個のセンサーを搭載した超音波CTスキャン装置（FUCT: Full body Ultrasound Computational Tomography）による全身スキャン技術で、スパのような施設での週次スキャンを想定している。AI画像再構成によりMRIに近い品質を目指すとされ、将来的に「全死亡の30%・医療費の50%を削減できる」と主張している。

### Key Discussion Points

- **jmhmd（放射線科医）**: 「技術は興味深いが、超音波はCTではない。肺は空気で満たされ透過できず、骨も超音波は透過しない。腸管ガスで腹部臓器も見えない。現在の低解像度では医療的に有用ではなく、小さく深い病変（スクリーニングで見つけるべきもの）を見つけるのに最も不向き」
  - **ChrisRR（医療機器エンジニア）**: 低解像度ならMRI/CTに進む必要があり、外部サーバーへの依存も問題。こうした機器が医療業界全体に「頻繁な画像診断が有益」と納得させた例はない
  - **FriedPickles**: 「CT」は文字通り「コンピューターを使ったトモグラフィー」。超音波が媒体なだけでX線CTとは別物
- **tmhrtly**: 「体のメガバイト/秒/ドルを最大化する技術」という表現が医療への誤った期待を生む。欲しいのはデータではなく健康を維持する仕組み
  - **moduspol**: 血圧計・心拍数モニター・体重計も同様の抵抗があったはず。より多くのデータがより良いケアの唯一の道
  - **sobiolite**: 病気が深刻になってから初めて高コストの検査を行う現状では遅すぎる場合がある
- **GTP**: 技術は面白いが、週次スパスキャンというビジョンには懐疑的。無症状スキャンは「偶発所見」により不必要な不安と費用を生む。価格についての言及も一切ない
  - **aeonik**: 定期スキャンで体の「個人差」を文書化し科学的に活かせない理由は？
  - **dperfect**: 時系列データで変化トレンドを計算的に分析できれば、良性の特徴と真の懸念を区別しやすくなるかもしれない
- **keiferski**: AI画像会社が医療に応用するのは理解できるが、Midjourneyというブランドは場違い感がある。別会社として立ち上げた方が良かったのでは
  - **andy99**: 「何をすべきか分からない」状態でも医療に挑む姿勢は評価。AIが成熟するにつれて、こうした life-changing な試みが増えてほしい
  - **oinoom**: AIのバーティカル特化（特にハードウェア絡み）がフロンティアラボに対する差別化になる
- **mNovak（MRI・フェーズドアレイビームフォーミング経験者）**: 技術的に大きな赤信号はない。mm単位の解像度は十分素晴らしい。心臓の動きによるモーションブラーは課題だがMRIより速いので許容範囲
  - **intoXbox（MRI物理学者）**: 超音波の画像品質はトランスデューサーと皮膚の接触品質に強く依存する
  - **andrerath（超音波研究者）**: 適切なアルゴリズムで0.5秒/スライス以下の血流データ取得は可能。SNR確保が課題だが10万センサーなら実現性あり

---

## 10. [Dwarf Fortress in the Browser](https://github.com/Sessa93/remote-df)

**Score:** 21 | **Comments:** 7 | [Post](https://news.ycombinator.com/item?id=48538483)

Dwarf Fortressのクラシック版（ASCII/2D）LinuxビルドをDockerコンテナで動作させ、noVNC経由でブラウザからアクセスできるようにしたプロジェクト。リモートのx86-64 Linuxホスト上でネイティブ速度で実行され、SSHトンネリングでセキュアに配信される。

### Key Discussion Points

- **serious_angel**: 低レイテンシVNCにはSSHより WireGuard・WebRTC・QUICの方が適しているのでは。Dungeon Crawl Stone SoupのWebTilesも類似実装。Claudeで開発したとのこと
- **[commenter]**: 「ただゲームをブラウザにストリーミングしているだけ」という批判
- **piker**: AI生成の大量READMEは実際に読まれているのか？過剰仕様のドキュメントはむしろ読む気を失わせる
- **koolala**: RustDeskのようなリモートデスクトップツールと実質同じでは？
- **andre9317（作者）**: DFをDockerコンテナ上でネイティブ速度で動かし、noVNCでブラウザストリーミング

---

## Trends

本日のHNトップ10から読み取れる共通テーマ：

1. **AIと既存ツールの融合**: Emacs＋LLM、TesterArmy（AIによるE2Eテスト自動化）、Dwarf Fortress（Claudeで実装）と、AIが従来ツールの設定・操作・開発を大幅に変えつつある。

2. **データ収集と健康の哲学的対立**: Midjourney Medicalへの議論は「より多くのデータ＝より良い医療」派と「データより健康維持の仕組みを」派の根本的な価値観の衝突を浮き彫りにした。専門家（放射線科医・MRI物理学者）からの具体的な技術批判も多く、HNの深度ある議論が光った。

3. **オープンソースとガバナンスの信頼性**: W Socialのクローズドソース化問題、GitHubマルウェアリポジトリ問題、薬の転用研究における規制の壁など、「公開されているものが安全・透明とは限らない」という問いが複数のストーリーに共通して流れている。

4. **エネルギー政策の転換**: スイスの原子力解禁はヨーロッパ全体の脱炭素・エネルギー安全保障議論の一部として関心を集め、国ごとの条件差（水力資源・原発技術力・経済性）を巡る実質的な議論が展開された。

5. **UXの過去への回帰**: Windows 2000のUI再評価は、フラットデザイン全盛の現代への反省として共感を呼んだ。「直感的であること」と「視覚的ノイズを排除すること」のトレードオフは未解決のまま。
