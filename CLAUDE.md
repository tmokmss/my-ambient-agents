# Ambient Agents

GitHub Actions の scheduled trigger で定期実行される Claude エージェント群。
結果は Astro の静的サイトとして GitHub Pages にデプロイされる。

## Architecture

```
.claude/
  skills/
    output-report.md    # レポート出力フォーマットの指示 (Claude Code が自動認識)
.github/
  workflows/
    <agent-name>.yml    # 各エージェントのワークフロー
    deploy.yml          # main push 時に Astro build → GitHub Pages
src/
  content/reports/      # エージェントが生成する Markdown レポート
  content.config.ts     # Content Collection 定義
  layouts/              # Astro レイアウト
  pages/                # ページテンプレート
```

## Adding a New Agent

新しいエージェントを追加するには以下の手順に従う。

### 1. ワークフローファイルを作成

`.github/workflows/<agent-name>.yml` を作成する。既存のワークフロー（例: `hackernews.yml`）をテンプレートとして使う:

```yaml
name: <Agent Display Name>

on:
  schedule:
    - cron: "<cron expression>"  # e.g. "0 0 * * 1" = 毎週月曜 00:00 UTC
  workflow_dispatch:
    inputs:
      prompt:
        description: "Custom prompt for the agent"
        required: false
        type: string

permissions:
  contents: write
  pull-requests: write
  issues: read
  id-token: write

jobs:
  run-agent:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: anthropics/claude-code-action@v1
        with:
          prompt: |
            ${{ inputs.prompt || '<default prompt for this agent>' }}
          claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
          claude_args: "--dangerously-skip-permissions"
```

### 2. エージェント固有のプロンプト

エージェント固有の処理指示は、スキルファイル (`.claude/skills/`) ではなく、ワークフロー YAML の `prompt` フィールドに直接記述する。
スキルファイルはレポート出力形式など全エージェント共通の指示にのみ使用する。

共通のレポート出力形式は `.claude/skills/output-report.md` に定義済み。

### 3. レポートのカテゴリ追加

新しいカテゴリが必要なら `output-report.md` の frontmatter schema に追加する:
- 現在の category: `summary | analysis | alert`

### 4. デプロイ

エージェントが main に直接 push → `deploy.yml` が自動でビルド・デプロイ。

## Report Frontmatter Schema

```yaml
---
title: "Report title"
date: "YYYY-MM-DD"
category: "summary | analysis | alert"
summary: "One-line summary (max 120 chars)"
tags: ["tag1", "tag2"]  # optional, free-form tags for filtering
---
```

## Git Workflow

- main ブランチに直接 push してよい（PR 不要）
- push すると `deploy.yml` が自動で Astro build → GitHub Pages デプロイ

## Key Points

- エージェントは `src/content/reports/` 以外のファイルを変更してはならない
- ファイル名は `YYYY-MM-DD-<slug>.md` 形式
- エージェントは main に直接コミット・プッシュする
- OAuth トークンは `CLAUDE_CODE_OAUTH_TOKEN` シークレットで管理
