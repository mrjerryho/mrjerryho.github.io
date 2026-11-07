import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const box = z.object({
  name: z.string(),
  detail: z.string(),
  highlight: z.boolean().default(false),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    status: z.enum(['Building', 'Beta', 'Shipped', 'Research', 'In production']),
    groups: z.array(z.enum(['Professional', 'iOS', 'Trading', 'AI', 'Web', 'Data'])),
    professional: z.boolean().default(false),
    org: z.string().optional(),
    stack: z.array(z.string()),
    order: z.number(),
    featured: z.boolean().default(false),
    workingName: z.boolean().default(false),
    cover: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), caption: z.string() })).default([]),
    architecture: z
      .object({
        columns: z.array(z.object({ title: z.string(), boxes: z.array(box) })),
        links: z.array(z.string()),
        caption: z.string().optional(),
      })
      .optional(),
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  }),
});

export const collections = { projects };
