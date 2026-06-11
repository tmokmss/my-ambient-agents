#!/usr/bin/env node
// Validates the YAML frontmatter of all report files so that a single broken
// report cannot break the whole Astro build (= GitHub Pages deploy).
//
// Usage:
//   node scripts/validate-reports.mjs               # exit 1 if any report is invalid
//   node scripts/validate-reports.mjs --quarantine  # rename invalid reports to *.md.broken and exit 0
//
// Run by report agents before committing, and by deploy.yml (--quarantine) before `astro build`.

import { execSync } from "node:child_process";
import { readFileSync, readdirSync, renameSync } from "node:fs";
import { join } from "node:path";

const quarantine = process.argv.includes("--quarantine");

let YAML;
try {
  YAML = await import("yaml");
} catch {
  // Agent workflows don't run `npm install`; fetch the parser on demand.
  console.log("yaml package not found, installing...");
  execSync("npm install --no-save --no-audit --no-fund yaml@^2", { stdio: "inherit" });
  YAML = await import("yaml");
}

const REPORTS_DIR = "src/content/reports";
const files = readdirSync(REPORTS_DIR, { recursive: true })
  .filter((f) => f.endsWith(".md"))
  .map((f) => join(REPORTS_DIR, f))
  .sort();
const errors = [];

for (const file of files) {
  const error = validate(file);
  if (error) errors.push({ file, error });
}

function validate(file) {
  const text = readFileSync(file, "utf8");
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---(\r?\n|$)/);
  if (!match) return "frontmatter block (--- ... ---) not found at the top of the file";

  let data;
  try {
    data = YAML.parse(match[1]);
  } catch (e) {
    return `invalid YAML: ${e.message.split("\n")[0]}`;
  }
  if (typeof data !== "object" || data === null) return "frontmatter is not a mapping";

  // Mirrors the zod schema in src/content.config.ts
  if (typeof data.title !== "string" || !data.title) return "title: required string";
  if (typeof data.date !== "string") return "date: required string (YYYY-MM-DDTHH:mm, UTC)";
  if (isNaN(new Date(data.date.endsWith("Z") ? data.date : data.date + "Z").getTime()))
    return `date: not a parseable datetime: ${JSON.stringify(data.date)}`;
  if (typeof data.category !== "string" || !data.category) return "category: required string";
  if (typeof data.summary !== "string" || !data.summary) return "summary: required string";
  if (data.tags !== undefined && (!Array.isArray(data.tags) || data.tags.some((t) => typeof t !== "string")))
    return "tags: must be an array of strings";
  return null;
}

if (errors.length === 0) {
  console.log(`OK: ${files.length} report(s) validated`);
  process.exit(0);
}

for (const { file, error } of errors) {
  if (quarantine) {
    renameSync(file, `${file}.broken`);
    // ::warning:: shows up as an annotation on the GitHub Actions run
    console.log(`::warning file=${file}::Skipped broken report (${error}). Fix its frontmatter to publish it.`);
  } else {
    console.error(`NG ${file}: ${error}`);
  }
}

if (quarantine) {
  console.log(`Quarantined ${errors.length} broken report(s); continuing build without them.`);
  process.exit(0);
}
console.error(`\n${errors.length} invalid report(s). Fix the frontmatter before committing.`);
process.exit(1);
