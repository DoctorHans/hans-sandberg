// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { file } from "astro/loaders";

// 3. Define collection(s)
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
    details: z.array(z.string()),
  }),
});

// 4. Export a single `collections` object to register collection(s)
export const collections = { experience };
