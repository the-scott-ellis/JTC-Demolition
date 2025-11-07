import { defineCollection, z } from 'astro:content';

const locationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Basic location info
    city: z.string(),
    state: z.string(),
    stateCode: z.string(),
    slug: z.string().optional(), // Optional since Astro uses the filename
    serviceArea: z.string(),
    phone: z.string(),
    email: z.string(),

    // Address for schema markup
    address: z.object({
      street: z.string(),
      city: z.string(),
      state: z.string(),
      zip: z.string(),
    }),

    // Coordinates for LocalBusiness schema
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }),

    // SEO metadata
    title: z.string(),
    description: z.string(),
    keywords: z.string(),

    // Services offered (array of strings)
    services: z.array(z.string()),

    // Local areas/neighborhoods served
    neighborhoods: z.array(z.string()),

    // Testimonials (unique per location)
    testimonials: z.array(z.object({
      quote: z.string(),
      author: z.string(),
      location: z.string(),
    })),
  }),
});

export const collections = {
  'locations': locationsCollection,
};
