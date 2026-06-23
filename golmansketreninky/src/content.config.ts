import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ base: './src/content/events', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    time: z.string(),
    venue: z.string(),
    city: z.string(),
    type: z.string(),
    capacity: z.string(),
    status: z.string(),
    price: z.string().optional(),
    featured: z.boolean().default(false),
    source: z.enum(['source', 'demo']).default('demo'),
  }),
});

export const collections = { events };
