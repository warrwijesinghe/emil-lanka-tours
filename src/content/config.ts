import { defineCollection, z } from 'astro:content';

const travelGuide = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Emil Jayasekara'),
    image: z.string().startsWith('/images/'),
    imageAlt: z.string().min(1),
    category: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

export const collections = { travelGuide };
