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

```bash
gh issue list --label "enhancement" --state open --limit 9999
```

各改善案について、同一または類似の Issue が既にあるかタイトルと内容を確認する。

### 3a. 類似の既存 Issue がある場合

コメントで +1 する:

```bash
gh issue comment {issue番号} --body "本日（{日付}）の {エージェント名} 実行でも同様の課題を確認。{追加の観察があれば記載}"
```

### 3b. 類似の既存 Issue がない場合

新規 Issue を作成する:

```bash
gh issue create \
  --label "enhancement" \
  --title "[{エージェント名}] {改善内容の要約}" \
  --body "{改善の背景・理由・具体的な変更案}"
```
