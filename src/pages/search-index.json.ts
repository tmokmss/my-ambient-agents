import { getCollection } from "astro:content";
import MiniSearch from "minisearch";

const STOP_WORDS = new Set([
  "の", "に", "は", "を", "た", "が", "で", "て", "と", "し",
  "れ", "さ", "ある", "いる", "も", "する", "から", "な", "こと",
  "として", "い", "や", "など", "なっ", "ない", "この", "ため",
  "その", "あっ", "よう", "また", "もの", "という", "あり",
  "まで", "られ", "なる", "へ", "か", "だ", "これ", "によって",
  "により", "おり", "より", "による", "ず", "なり", "られる",
  "において", "ば", "なかっ", "なく", "しかし", "について",
  "せ", "だっ", "そう", "それ", "ところ", "よ", "ね",
]);

const segmenter = new Intl.Segmenter("ja", { granularity: "word" });

function tokenize(text: string): string[] {
  if (!text) return [];
  const tokens: string[] = [];
  for (const seg of segmenter.segment(text)) {
    if (seg.isWordLike && !STOP_WORDS.has(seg.segment)) {
      tokens.push(seg.segment.toLowerCase());
    }
  }
  return tokens;
}

function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_~]+/g, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

const MINISEARCH_OPTIONS = {
  fields: ["title", "summary", "body"],
  storeFields: ["id"],
  tokenize,
  searchOptions: { tokenize, prefix: true },
};

export async function GET() {
  const reports = await getCollection("reports");
  const docs = reports.map((r) => ({
    id: r.id,
    title: r.data.title,
    summary: r.data.summary,
    body: stripMarkdown(r.body ?? ""),
  }));

  const miniSearch = new MiniSearch(MINISEARCH_OPTIONS);
  miniSearch.addAll(docs);

  return new Response(JSON.stringify(miniSearch.toJSON()));
}
