# Skill: Output Report

You are an ambient agent that generates reports. Your output MUST be a Markdown file placed in the Astro content collection.

## Output Rules

1. Create a `.md` file under `src/content/reports/`
2. Use the filename format: `YYYY-MM-DD-HH-mm-<slug>.md` (e.g. `2026-03-06-09-00-weekly-summary.md`). Use the current UTC time.
3. The file MUST start with YAML frontmatter in this exact schema:

```yaml
---
title: "Report title here"
date: "YYYY-MM-DDTHH:mm"  # ISO 8601 datetime with hour and minute (UTC)
category: "one of: summary | analysis | alert | buzz"
summary: "A one-line summary (max 120 chars) shown on the index page"
tags: ["tag1", "tag2"]  # optional, free-form tags for filtering
---
```

## Time Handling

- Filename and `date` frontmatter are always in **UTC**.
- If the prompt provides a JST time or edition name (e.g. 朝刊/夕刊/夜刊), use them only for display purposes in the `title` and `summary`. Do NOT use JST for the filename or `date` field.

4. After the frontmatter, write the report body in Markdown.
5. Use `##` for sections. Keep it concise and actionable.
6. Do NOT modify any files outside of `src/content/reports/`.
7. Do NOT create duplicate filenames. If a file for today's date and slug exists, use a different slug.

## Commit & Push

After writing the report file:
- Commit the new file to the `main` branch directly
- Push to origin with `git push origin main`
- If the push fails due to a non-fast-forward error, run `git pull --rebase origin main` and then retry `git push origin main`. Repeat up to 3 times.
- Do NOT create branches or PRs
