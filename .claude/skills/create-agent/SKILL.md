---
name: create-agent
description: 新しいエージェント（GitHub Actions ワークフロー）を追加する手順を案内する。ワークフローYAMLのテンプレート、プロンプト設定、カテゴリ追加の方法を含む。
---

# Create Agent

新しいエージェントを追加する手順。

## 1. ワークフローファイルを作成

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
    runs-on: ubuntu-slim
    steps:
      - uses: actions/checkout@v4

      - uses: anthropics/claude-code-action@v1
        with:
          prompt: |
            ${{ inputs.prompt || '<default prompt for this agent>' }}
          claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
          claude_args: "--dangerously-skip-permissions"
          show_full_output: true
```

## 2. エージェント固有のプロンプト

エージェント固有の処理指示は、スキルファイル (`.claude/skills/`) ではなく、ワークフロー YAML の `prompt` フィールドに直接記述する。
スキルファイルはレポート出力形式など全エージェント共通の指示にのみ使用する。

共通のレポート出力形式は `.claude/skills/output-report/SKILL.md` に定義済み。

## 3. レポートのカテゴリ追加

新しいカテゴリが必要な場合、以下の2箇所を更新する:
1. `src/pages/index.astro` の `categoryIcons` にアイコンを追加（`@lucide/astro` から import）
2. `.claude/skills/output-report/SKILL.md` の frontmatter schema の category 一覧

## 4. デプロイ

エージェントが main に直接 push → `deploy.yml` が自動でビルド・デプロイ。
