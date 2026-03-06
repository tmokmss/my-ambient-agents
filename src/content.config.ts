import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const reports = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reports" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    summary: z.string(),
    agent: z.string().default("claude"),
  }),
});

export const collections = { reports };
