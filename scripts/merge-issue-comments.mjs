#!/usr/bin/env node
/**
 * 重複 Issue を「残す側」に集約するスクリプト。
 *
 * コメント数を Issue の優先度シグナルとして使っているため、重複 Issue を単に close すると
 * これまでの再発報告が失われてしまう。そこで close する前に、source 側の本文と全コメントを
 * target 側へコメントとしてコピーし、再発回数が target に積み上がるようにする。
 *
 * Usage:
 *   node scripts/merge-issue-comments.mjs --target 503 --source 489 --source 467
 *   node scripts/merge-issue-comments.mjs --target 503 --source 489 --dry-run
 */

import { execFileSync } from "node:child_process";

const SLEEP_MS = 1000; // GitHub の secondary rate limit を避けるため書き込みごとに待つ

function usage(msg) {
  if (msg) console.error(`error: ${msg}`);
  console.error(
    "usage: node scripts/merge-issue-comments.mjs --target <n> --source <n> [--source <n> ...] [--dry-run]"
  );
  process.exit(1);
}

function parseArgs(argv) {
  const opts = { target: null, sources: [], dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--dry-run") {
      opts.dryRun = true;
    } else if (arg === "--target") {
      opts.target = Number(argv[++i]);
    } else if (arg === "--source") {
      opts.sources.push(Number(argv[++i]));
    } else {
      usage(`unknown argument: ${arg}`);
    }
  }
  if (!Number.isInteger(opts.target) || opts.target <= 0) usage("--target must be an issue number");
  if (opts.sources.length === 0) usage("at least one --source is required");
  for (const s of opts.sources) {
    if (!Number.isInteger(s) || s <= 0) usage("--source must be an issue number");
    if (s === opts.target) usage(`--source ${s} is the same as --target`);
  }
  return opts;
}

function gh(args, { input } = {}) {
  return execFileSync("gh", args, {
    encoding: "utf8",
    input,
    maxBuffer: 64 * 1024 * 1024,
  });
}

function ghJson(args, { input } = {}) {
  return JSON.parse(gh(args, { input }));
}

function sleep(ms) {
  // 同期的に待つ（このスクリプトは逐次処理で十分な規模）
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

const repo = ghJson(["repo", "view", "--json", "nameWithOwner"]).nameWithOwner;

function fetchIssue(number) {
  return ghJson(["api", `repos/${repo}/issues/${number}`]);
}

function fetchComments(number) {
  const all = [];
  for (let page = 1; ; page++) {
    const batch = ghJson(["api", `repos/${repo}/issues/${number}/comments?per_page=100&page=${page}`]);
    all.push(...batch);
    if (batch.length < 100) break;
  }
  return all;
}

function marker(sourceNumber, commentId) {
  return `<!-- merged-from: #${sourceNumber} ${commentId} -->`;
}

function postComment(number, body, dryRun) {
  if (dryRun) {
    console.log(`    [dry-run] would post to #${number} (${body.length} chars)`);
    return;
  }
  gh(["api", `repos/${repo}/issues/${number}/comments`, "--method", "POST", "--input", "-"], {
    input: JSON.stringify({ body }),
  });
  sleep(SLEEP_MS);
}

function quote(text) {
  const trimmed = (text ?? "").trim();
  return trimmed.length > 0 ? trimmed : "_(本文なし)_";
}

function mergedBody(sourceNumber, commentId, author, createdAt, body) {
  return [
    marker(sourceNumber, commentId),
    `> 🔁 重複 Issue #${sourceNumber} から集約 — 元投稿: @${author} (${createdAt})`,
    "",
    quote(body),
  ].join("\n");
}

const opts = parseArgs(process.argv.slice(2));

const target = fetchIssue(opts.target);
if (target.pull_request) usage(`--target ${opts.target} is a pull request, not an issue`);
console.log(`target: #${opts.target} ${target.title}`);

// 既に集約済みのコメントを二重投稿しないためのマーカー集合
const existingMarkers = new Set();
for (const c of fetchComments(opts.target)) {
  const found = c.body?.match(/<!-- merged-from: #\d+ \S+ -->/g) ?? [];
  for (const m of found) existingMarkers.add(m);
}

let mergedTotal = 0;

for (const sourceNumber of opts.sources) {
  const source = fetchIssue(sourceNumber);
  if (source.pull_request) {
    console.error(`  skip #${sourceNumber}: pull request, not an issue`);
    continue;
  }
  if (source.state !== "open") {
    console.error(`  skip #${sourceNumber}: already ${source.state}`);
    continue;
  }
  const comments = fetchComments(sourceNumber);
  console.log(`  source: #${sourceNumber} ${source.title} (本文 + コメント${comments.length}件)`);

  const items = [
    {
      id: "body",
      author: source.user?.login ?? "unknown",
      createdAt: source.created_at,
      body: `**${source.title}**\n\n${source.body ?? ""}`,
    },
    ...comments.map((c) => ({
      id: String(c.id),
      author: c.user?.login ?? "unknown",
      createdAt: c.created_at,
      body: c.body ?? "",
    })),
  ];

  let posted = 0;
  for (const item of items) {
    if (existingMarkers.has(marker(sourceNumber, item.id))) continue;
    postComment(
      opts.target,
      mergedBody(sourceNumber, item.id, item.author, item.createdAt, item.body),
      opts.dryRun
    );
    existingMarkers.add(marker(sourceNumber, item.id));
    posted++;
  }
  console.log(`    -> #${opts.target} に ${posted} 件コピー`);
  mergedTotal += posted;

  const closingNote = [
    `#${opts.target} と重複しているため、本 Issue の内容とコメント（計${items.length}件）を #${opts.target} に集約しました。`,
    "",
    `以降の議論・再発報告は #${opts.target} にお願いします。`,
  ].join("\n");

  if (opts.dryRun) {
    console.log(`    [dry-run] would comment + label duplicate + close #${sourceNumber}`);
    continue;
  }
  postComment(sourceNumber, closingNote, false);
  gh(["issue", "edit", String(sourceNumber), "--add-label", "duplicate"]);
  sleep(SLEEP_MS);
  gh(["issue", "close", String(sourceNumber), "--reason", "not planned"]);
  sleep(SLEEP_MS);
  console.log(`    -> #${sourceNumber} を duplicate として close`);
}

console.log(`done: ${mergedTotal} comments merged into #${opts.target}`);
