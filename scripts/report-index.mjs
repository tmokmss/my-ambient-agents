#!/usr/bin/env node
// Extracts the titles/URLs already covered by past reports of a given agent,
// so that dedup checks don't need to read the full report bodies.
// Reading the last 3 days of buzz-digest reports costs ~103KB; this index is ~32KB.
//
// Usage:
//   node scripts/report-index.mjs <slug> [days]     # days defaults to 3
//
// Example:
//   node scripts/report-index.mjs buzz-digest 3
//   node scripts/report-index.mjs tech-feed 3
//
// Output format (one block per report file):
//   # 2026-08-18/13-49-buzz-digest.md
//   <URL>\t<title>
//   -\t<keyword>          # entries that have no link (e.g. Google Trends keywords)
//
// Read-only: this script never writes, renames or deletes anything.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolved from the script location so the command works from any cwd.
const REPORTS_DIR = fileURLToPath(new URL("../src/content/reports", import.meta.url));
const DATE_DIR = /^\d{4}-\d{2}-\d{2}$/;
// [text](url) — (?<!!) keeps image embeds out. The text part allows one level of
// nested brackets ("[A [B]](url)") and the URL part one level of nested parens.
const LINK = /(?<!!)\[((?:[^[\]\n]|\[[^[\]\n]*\])+)\]\(((?:[^()\s]|\([^()\s]*\))+)\)/g;
// "- **bold**" at the start of a list item (Google Trends keywords etc.).
const BOLD_ITEM = /^\s*[-*]\s+\*\*([^*\n]+)\*\*/;
// Bookmark-count labels such as "[434users](...)" carry no topic information.
const LABEL_TEXT = /^\d+\s*users?$/i;
// Hatena bookmark permalinks are just a second link to the same article — dropped
// only when the same line also links the article itself (some reports use the
// bookmark page as the main link, and those still need to be indexed).
const HATENA_ENTRY = /(^|\/\/|\.)b\.hatena\.ne\.jp\/entry/;

const [slug, daysArg] = process.argv.slice(2);

if (!slug) {
  console.error("Usage: node scripts/report-index.mjs <slug> [days]");
  console.error("Example: node scripts/report-index.mjs buzz-digest 3");
  process.exit(1);
}

const days = daysArg === undefined ? 3 : Number(daysArg);
if (!Number.isInteger(days) || days < 1) {
  console.error(`Invalid days: ${daysArg} (must be a positive integer)`);
  process.exit(1);
}

let dateDirs;
try {
  dateDirs = readdirSync(REPORTS_DIR)
    .filter((name) => DATE_DIR.test(name) && statSync(join(REPORTS_DIR, name)).isDirectory())
    .sort();
} catch {
  console.error(`No reports directory found at ${REPORTS_DIR}.`);
  process.exit(0);
}

const targets = dateDirs.slice(-days);
if (targets.length === 0) {
  console.error(`No past reports found for slug "${slug}".`);
  process.exit(0);
}

let fileCount = 0;
let entryCount = 0;

for (const date of targets) {
  const files = readdirSync(join(REPORTS_DIR, date))
    .filter((name) => name.endsWith(".md") && name.includes(slug))
    .sort();

  for (const file of files) {
    const entries = extract(readFileSync(join(REPORTS_DIR, date, file), "utf8"));
    if (entries.length === 0) continue;
    fileCount += 1;
    entryCount += entries.length;
    console.log(`# ${date}/${file}`);
    for (const { url, title } of entries) console.log(`${url}\t${title}`);
    console.log("");
  }
}

console.error(
  `report-index: slug=${slug} days=${days} range=${targets[0]}..${targets.at(-1)} ` +
    `files=${fileCount} entries=${entryCount}`,
);
if (fileCount === 0) console.error(`No past reports found for slug "${slug}".`);

function extract(text) {
  const entries = [];
  const seen = new Set();

  const add = (url, title) => {
    const key = `${url}\t${title}`;
    const dedupeKey = url === "-" ? key : url;
    if (seen.has(dedupeKey)) return;
    seen.add(dedupeKey);
    entries.push({ url, title: title.replace(/\s+/g, " ").trim() });
  };

  for (const line of stripFrontmatter(text).split("\n")) {
    let links = [...line.matchAll(LINK)].filter(([, title]) => !LABEL_TEXT.test(title.trim()));
    if (links.some(([, , url]) => !HATENA_ENTRY.test(url))) {
      links = links.filter(([, , url]) => !HATENA_ENTRY.test(url));
    }
    for (const [, title, url] of links) add(url, title);

    // Linkless bold list items (Google Trends keywords) still need to be indexed.
    const bold = line.match(BOLD_ITEM);
    if (bold && !bold[1].includes("](")) add("-", bold[1]);
  }

  return entries;
}

function stripFrontmatter(text) {
  if (!text.startsWith("---")) return text;
  const end = text.indexOf("\n---", 3);
  return end === -1 ? text : text.slice(end + 4);
}
