import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const projects = { projectCollection };
