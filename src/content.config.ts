import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const reports = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reports" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { reports };
