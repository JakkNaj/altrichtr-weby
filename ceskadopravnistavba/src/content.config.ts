import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
  type: z.enum(['internal', 'external', 'pdf', 'video', 'form']).default('external')
});

const imageSchema = z.object({
  url: z.string(),
  alt: z.string().default(''),
  width: z.number().optional(),
  height: z.number().optional()
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.json' }),
  schema: z.object({
    wpId: z.number(),
    title: z.string(),
    slug: z.string(),
    path: z.string(),
    modified: z.string(),
    seoDescription: z.string().default(''),
    summary: z.string().default(''),
    headings: z.array(z.string()).default([]),
    links: z.array(linkSchema).default([]),
    images: z.array(imageSchema).default([]),
    videos: z.array(z.string()).default([])
  })
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.json' }),
  schema: z.object({
    wpId: z.number(),
    title: z.string(),
    slug: z.string(),
    modified: z.string(),
    sourceUrl: z.string(),
    summary: z.string().default(''),
    contentText: z.string().default(''),
    awardIds: z.array(z.number()).default([]),
    awards: z.array(z.string()).default([]),
    image: imageSchema.optional(),
    gallery: z.array(imageSchema).default([]),
    links: z.array(linkSchema).default([])
  })
});

const awards = defineCollection({
  loader: glob({ base: './src/content/awards', pattern: '**/*.json' }),
  schema: z.object({
    wpId: z.number(),
    name: z.string(),
    slug: z.string(),
    count: z.number().default(0)
  })
});

const documents = defineCollection({
  loader: glob({ base: './src/content/documents', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string(),
    url: z.string(),
    sourcePage: z.string(),
    year: z.number().optional(),
    kind: z.enum(['pdf', 'video', 'external']).default('pdf')
  })
});

const partners = defineCollection({
  loader: glob({ base: './src/content/partners', pattern: '**/*.json' }),
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    sourcePage: z.string(),
    url: z.string().optional()
  })
});

export const collections = {
  pages,
  projects,
  awards,
  documents,
  partners
};
