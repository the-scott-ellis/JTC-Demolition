// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://yoursite.com', // Update with actual domain before deployment
  integrations: [sitemap()],
  output: 'static', // Static site generation for Cloudflare Pages
  adapter: cloudflare(),
});
