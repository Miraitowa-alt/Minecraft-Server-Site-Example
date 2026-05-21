import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(), // 👈 关键改动：让它自动容纳 "2026-05-20" 这种字符串格式
    author: z.string(),
  }),
});

export const collections = { blog };