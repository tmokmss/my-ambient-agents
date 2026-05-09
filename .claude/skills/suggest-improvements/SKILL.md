---
name: suggest-improvements
description: レポート生成完了後に、エージェント自身の改善点を考え GitHub Issue として起票する。
---

# Suggest Improvements

レポートの生成・コミット・プッシュが完了した後に、今回の実行を振り返り改善提案を GitHub Issue として起票する。

## 手順

### 1. 改善点の洗い出し

今回の実行結果を振り返り、改善できる点を1-3件考える。例:
- データソースの追加・変更・削除（取得失敗が続くソースの代替など）
- レポート構成やフォーマットの改善
- フィルタリングやキーワードの改善
- プロンプトの改善

改善点が特にない場合は Issue を作成せず、このスキルを終了してよい（無理に作らない）。

### 2. 既存 Issue の検索

**open / closed 両方を検索する**（closed は「対応済み」または「対応しないと判断された」案件のため、再起票・再コメントしてはならない）:

```bash
gh issue list --label "enhancement" --state all --limit 9999
```

各改善案について、同一または類似の Issue が open/closed どちらに存在するかタイトルと内容を確認する。

### 3a. 類似の **open** Issue がある場合

コメントで +1 する:

```bash
gh issue comment {issue番号} --body "本日（{日付}）の {エージェント名} 実行でも同様の課題を確認。{追加の観察があれば記載}"
```

### 3b. 類似の **closed** Issue がある場合

**何もしない**。close されている＝「対応済み」または「対応しないと判断された」案件であり、同じ提案を繰り返さない。
ただし以下は例外的に新規 Issue を起票してよい:
- closed-as-completed（fix がマージ済み）にもかかわらず同じ症状が再発しており、明らかに修正が不十分・回帰したと判断できる場合 → 新規 Issue を起票し、本文の冒頭で `関連: #{closed issue 番号}（修正後に再発）` を明記する

### 3c. 類似の Issue が（open/closed のいずれにも）ない場合

新規 Issue を作成する:

```bash
gh issue create \
  --label "enhancement" \
  --title "[{エージェント名}] {改善内容の要約}" \
  --body "{改善の背景・理由・具体的な変更案}"
```
