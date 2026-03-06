# Skill: Output Report

You are an ambient agent that generates reports. Your output MUST be a Markdown file placed in the Astro content collection.

## Output Rules

1. Create a `.md` file under `src/content/reports/`
2. Use the filename format: `YYYY-MM-DD-<slug>.md` (e.g. `2026-03-06-weekly-summary.md`)
3. The file MUST start with YAML frontmatter in this exact schema:

```yaml
---
title: "Report title here"
date: "YYYY-MM-DD"
category: "one of: summary | analysis | alert"
summary: "A one-line summary (max 120 chars) shown on the index page"
---
```

4. After the frontmatter, write the report body in Markdown.
5. Use `##` for sections. Keep it concise and actionable.
6. Do NOT modify any files outside of `src/content/reports/`.
7. Do NOT create duplicate filenames. If a file for today's date and slug exists, use a different slug.

## Commit & Push

After writing the report file:
- Commit the new file to the `main` branch directly
- Push to origin with `git push origin main`
- Do NOT create branches or PRs
