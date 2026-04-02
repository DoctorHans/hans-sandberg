// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { file, glob } from "astro/loaders";

// 3. Define collection(s)
const caseStudies = defineCollection({
  loader: glob({
    pattern: "src/data/case-studies/*{.md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tldr: z.string(),
    order: z.number(),
    slug: z.string(),
  }),
});

const experience = defineCollection({
  loader: file("src/data/experience.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    org: z.string(),
    orgLink: z.string().url(),
    city: z.enum([
      "Amsterdam",
      "Apeldoorn",
      "Copenhagen",
      "Rotterdam",
      "Schiedam",
    ]),
    country: z.enum(["Denmark", "Netherlands"]),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.literal("Present")]),
    intro: z.string(),
    details: z.array(
      z.object({
        lead: z.string(),
        rest: z.string(),
      }),
    ),
  }),
});

// 4. Export a single `collections` object to register collection(s)
export const collections = { experience, caseStudies };
