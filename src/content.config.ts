import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Journal entries. Everything under `formula` is optional — a post without it
 * is just prose. When present it renders a consistent spec table and the entry
 * can appear in a recipe index.
 *
 * Every quantity carries its unit here, not in the prose.
 */
const journal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    /** e.g. "Trial 14" — shown as the kicker. */
    trial: z.string().optional(),
    style: z.string().optional(),
    draft: z.boolean().default(false),
    formula: z
      .object({
        flour: z.string().optional(),
        flourW: z.number().optional(),
        proteinPct: z.number().optional(),
        hydrationPct: z.number(),
        saltPct: z.number().optional(),
        yeastPct: z.number().optional(),
        bulkHours: z.number().optional(),
        bulkTempC: z.number().optional(),
        coldProofHours: z.number().optional(),
        coldProofTempC: z.number().optional(),
        ballWeightG: z.number().optional(),
        ovenDeckC: z.number().optional(),
        ovenDomeC: z.number().optional(),
        bakeSeconds: z.number().optional(),
      })
      .optional(),
  }),
});

export const collections = { journal };
