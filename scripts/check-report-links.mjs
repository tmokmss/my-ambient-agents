#!/usr/bin/env node
/**
 * レポート内の引用リンクが、取得済み RSS フィードの item / entry の link に実在するかを照合するスクリプト。
 *
 * エージェントが引用 URL を RSS 原文から写さず、記憶やパターンから組み立てると、
 * slug の推測・途中での切り詰め・フィード URL や媒体トップへのリンク・記事との取り違えが起きる。
 * コミット前にこのスクリプトで機械照合し、RSS に存在しない URL を弾く。
 *
 * Usage:
 *   node scripts/check-report-links.mjs <report.md> [rss-dir]   (rss-dir の既定は /tmp/rss)
 *
 * Exit code:
 *   0 = すべてのリンクが RSS item の link と一致
 *   1 = 不一致のリンクが1件以上ある（行番号付きで表示）
 *   2 = 引数不正、レポートが読めない、または RSS ディレクトリが無い／空
 */

import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

function usage(msg) {
  if (msg) console.error(`error: ${msg}`);
  console.error("usage: node scripts/check-report-links.mjs <report.md> [rss-dir]");
  process.exit(2);
}

const [reportPath, rssDir = "/tmp/rss"] = process.argv.slice(2);
if (!reportPath) usage("report path is required");
if (!existsSync(reportPath)) usage(`report not found: ${reportPath}`);

if (!existsSync(rssDir) || !statSync(rssDir).isDirectory()) {
  console.error(`error: RSS directory not found: ${rssDir}`);
  console.error("RSS を取得し直してから、同じ Bash 呼び出しの中でこのスクリプトを実行すること。");
  process.exit(2);
}
const xmlFiles = readdirSync(rssDir)
  .filter((f) => /\.(xml|rss|rdf|atom)$/i.test(f))
  .map((f) => join(rssDir, f))
  .filter((p) => statSync(p).size > 0);
if (xmlFiles.length === 0) {
  console.error(`error: no non-empty RSS files (*.xml) in ${rssDir}`);
  console.error("RSS を取得し直してから、同じ Bash 呼び出しの中でこのスクリプトを実行すること。");
  process.exit(2);
}

function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function cleanValue(s) {
  return decodeEntities(s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim());
}

/** 比較用に URL を正規化する。withQuery=false ならクエリ文字列を落とす。 */
function normalize(raw, withQuery = true) {
  let u;
  try {
    u = new URL(raw.trim());
  } catch {
    return null;
  }
  if (!/^https?:$/.test(u.protocol)) return null;
  let path = u.pathname;
  try {
    path = decodeURI(path); // %d9 / %D9 などエンコード表記の揺れを吸収
  } catch {
    /* 不正なエンコードはそのまま比較 */
  }
  path = path.replace(/\/+$/, "") || "/";
  const host = u.hostname.toLowerCase();
  let key = `${host}${path}`; // http/https の差は同一視、フラグメントは除去
  if (withQuery && u.search) {
    const params = [...u.searchParams.entries()].sort(([a], [b]) => a.localeCompare(b));
    key += "?" + params.map(([k, v]) => `${k}=${v}`).join("&");
  }
  return key;
}

const itemUrls = new Set(); // クエリ込み
const itemUrlsNoQuery = new Set(); // クエリ抜き
const channelUrls = new Set(); // フィード自体のリンク（媒体トップ等）

function addItemUrl(raw) {
  const v = cleanValue(raw);
  if (!/^https?:\/\//i.test(v)) return; // guid が ID 文字列のケースを除外
  const full = normalize(v);
  const noQuery = normalize(v, false);
  if (full) itemUrls.add(full);
  // ルートパス（例: Al Jazeera の guid `https://www.aljazeera.net/?t=...`）はクエリ抜き照合に使わない。
  // 使うと媒体トップへのリンクが素通りしてしまう。
  if (noQuery && !noQuery.endsWith("/")) itemUrlsNoQuery.add(noQuery);
}

for (const file of xmlFiles) {
  const xml = readFileSync(file, "utf8");
  const itemRe = /<(item|entry)(\s[^>]*)?>([\s\S]*?)<\/\1>/g;
  let m;
  let firstItemIndex = -1;
  while ((m = itemRe.exec(xml)) !== null) {
    if (firstItemIndex < 0) firstItemIndex = m.index;
    const attrs = m[2] || "";
    const body = m[3];
    // RSS 1.0 (RDF): <item rdf:about="URL">
    const about = attrs.match(/rdf:about\s*=\s*["']([^"']+)["']/);
    if (about) addItemUrl(about[1]);
    // RSS 2.0 / RDF: <link>URL</link>
    for (const l of body.matchAll(/<link(?:\s[^>]*)?>([\s\S]*?)<\/link>/g)) addItemUrl(l[1]);
    // Atom: <link href="URL" .../>（rel="alternate" または rel 無し）
    for (const l of body.matchAll(/<link\s([^>]*?)\/?>/g)) {
      const rel = l[1].match(/\brel\s*=\s*["']([^"']+)["']/);
      const href = l[1].match(/\bhref\s*=\s*["']([^"']+)["']/);
      if (href && (!rel || rel[1] === "alternate")) addItemUrl(href[1]);
    }
    // <guid>URL</guid>（isPermaLink="false" でも URL 形式なら記事 URL のことが多い）
    for (const g of body.matchAll(/<guid(?:\s[^>]*)?>([\s\S]*?)<\/guid>/g)) addItemUrl(g[1]);
  }
  // チャンネル部（最初の item より前）のリンクは媒体トップ・フィード URL として記録する
  const head = firstItemIndex >= 0 ? xml.slice(0, firstItemIndex) : xml;
  for (const l of head.matchAll(/<link(?:\s[^>]*)?>([\s\S]*?)<\/link>/g)) {
    const n = normalize(cleanValue(l[1]), false);
    if (n) channelUrls.add(n);
  }
  for (const l of head.matchAll(/<(?:atom:)?link\s([^>]*?)\/?>/g)) {
    const href = l[1].match(/\bhref\s*=\s*["']([^"']+)["']/);
    const n = href && normalize(decodeEntities(href[1]), false);
    if (n) channelUrls.add(n);
  }
}

if (itemUrls.size === 0) {
  console.error(`error: no item links could be parsed from ${xmlFiles.length} file(s) in ${rssDir}`);
  process.exit(2);
}

function isFeedOrTop(noQueryKey) {
  return (
    channelUrls.has(noQueryKey) ||
    noQueryKey.endsWith("/") ||
    /\.(xml|rss|rdf)$/i.test(noQueryKey) ||
    /\/(rss|feeds?)(\/|$)/i.test(noQueryKey)
  );
}

// レポート本文（frontmatter を除く）から Markdown リンクを抽出して照合
const lines = readFileSync(reportPath, "utf8").split("\n");
let start = 0;
if (lines[0]?.trim() === "---") {
  const end = lines.findIndex((l, i) => i > 0 && l.trim() === "---");
  if (end > 0) start = end + 1;
}

const linkRe = /\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/g;
let checked = 0;
const mismatches = [];
for (let i = start; i < lines.length; i++) {
  for (const m of lines[i].matchAll(linkRe)) {
    const url = m[1];
    checked++;
    const full = normalize(url);
    const noQuery = normalize(url, false);
    // 完全一致、またはクエリ文字列（traffic_source 等）の差のみなら一致とみなす
    const ok =
      (full && itemUrls.has(full)) || (noQuery && itemUrlsNoQuery.has(noQuery) && !channelUrls.has(noQuery));
    const reason =
      noQuery && isFeedOrTop(noQuery) ? "フィード URL または媒体トップ（記事 URL ではない）" : "RSS の item link に存在しない";
    if (!ok) mismatches.push({ line: i + 1, url, reason });
  }
}

console.log(`checked ${checked} link(s) against ${itemUrls.size} item URL(s) from ${xmlFiles.length} feed file(s)`);
if (mismatches.length === 0) {
  console.log("OK: all links match RSS item links");
  process.exit(0);
}
console.log(`NG: ${mismatches.length} link(s) not found in RSS:`);
for (const { line, url, reason } of mismatches) {
  console.log(`  ${reportPath}:${line}: ${url}  (${reason})`);
}
process.exit(1);
