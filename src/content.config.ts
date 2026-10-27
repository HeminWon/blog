import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './source/_posts', generateId: ({entry}) => entry.replace(/\.md$/, '') }),
  schema: z.object({ title: z.string(), date: z.coerce.date(), description: z.string().optional(), categories: z.union([z.string(), z.array(z.string())]).optional(), tags: z.union([z.string(), z.array(z.string())]).optional(), section: z.enum(['thoughts', 'tech']).optional(), draft: z.boolean().default(false) }),
});
const pages = defineCollection({loader: glob({pattern: ['about/index.md', 'links/index.md'], base: './source'})});
const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './source/_gallery', generateId: ({entry}) => entry.replace(/\.md$/, '') }),
  schema: z.object({ title: z.string(), date: z.coerce.date(), description: z.string().optional(), cover: z.string(), coverAlt: z.string().min(1), medium: z.string().optional(), draft: z.boolean().default(false), images: z.array(z.object({src: z.string(), alt: z.string().min(1), caption: z.string().optional()})).default([]) }),
});
export const collections = { posts, pages, gallery };
