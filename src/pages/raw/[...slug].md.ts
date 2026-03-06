import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const reports = await getCollection("reports");
  return reports.map((entry) => ({
    params: { slug: entry.id },
  }));
}

export async function GET({ params }: { params: { slug: string } }) {
  const reports = await getCollection("reports");
  const entry = reports.find((r) => r.id === params.slug);
  if (!entry) return new Response("Not found", { status: 404 });

  const frontmatter = [
    "---",
    `title: "${entry.data.title}"`,
    `date: "${entry.data.date.toISOString()}"`,
    `category: "${entry.data.category}"`,
    `summary: "${entry.data.summary}"`,
    entry.data.tags?.length
      ? `tags: [${entry.data.tags.map((t: string) => `"${t}"`).join(", ")}]`
      : null,
    "---",
  ]
    .filter(Boolean)
    .join("\n");

  return new Response(frontmatter + "\n\n" + (entry.body ?? ""), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
