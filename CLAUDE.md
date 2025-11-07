# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multi-location junk removal business website built with **Astro + Cloudflare Pages**. The project is designed to scale from 5-10 initial location pages to potentially hundreds of locations while maintaining excellent performance and SEO.

**Key Characteristics:**
- Zero JavaScript by default (Astro's HTML-first approach)
- Target PageSpeed score: 95-100
- Content Collections for structured location data
- Each location page must have 40%+ unique content for SEO indexation

## Project Status

This repository currently contains only planning documentation. The Astro project has not yet been initialized. See JUNK-REMOVAL-IMPLEMENTATION.md for the complete implementation plan.

## Development Commands

### Initial Setup
```bash
# Initialize Astro project (not yet done)
npm create astro@latest .

# Install required integrations
npm install @astrojs/sitemap @astrojs/cloudflare
```

### Common Commands
```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Type checking
npm run astro check
```

## Architecture

### Content Collections System

Location data is managed through Astro Content Collections with markdown files in `src/content/locations/`. Each location is a markdown file with extensive frontmatter containing:

- City/state information
- Contact details (phone, email, address)
- Geographic coordinates for LocalBusiness schema
- SEO metadata (title, description, keywords)
- Services offered
- Neighborhoods served
- Local testimonials

**Critical:** Each location needs 40%+ unique content to ensure Google indexation. This is achieved through:
- City-specific testimonials
- Local landmarks and neighborhoods
- Location-specific FAQs
- Unique images where possible

### Directory Structure (When Initialized)

```
src/
├── content/
│   ├── config.ts              # Content collection schemas
│   └── locations/             # Markdown files for each location
├── layouts/
│   └── Layout.astro           # Base layout with SEO
├── pages/
│   ├── index.astro            # Homepage
│   ├── contact.astro          # Contact page
│   └── locations/
│       └── [slug].astro       # Dynamic location pages
└── components/
    ├── Hero.astro             # Hero with CTA
    ├── Services.astro         # Services list
    ├── ContactForm.astro      # Contact form (Web3Forms integration)
    ├── Testimonials.astro     # Social proof
    ├── FAQ.astro              # Local FAQs
    └── Schema.astro           # JSON-LD structured data
```

### SEO Architecture

**LocalBusiness Schema Markup:** Every location page must include JSON-LD LocalBusiness schema with:
- Unique address and coordinates
- Local phone number
- Service area
- Opening hours
- Services offered

**Internal Linking Strategy:**
- Homepage links to all location pages
- Location pages link back to homepage
- Location pages link to nearby locations
- Footer contains all location links

## Critical Implementation Details

### Contact Form Integration

Use **Web3Forms** (free tier) for form handling. The form must include:
- Name, email, phone fields
- Service type dropdown
- Message textarea
- Hidden fields for location tracking
- Validation

**Important:** The contact form is a critical business requirement.

### Performance Requirements

**Target Metrics:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Bundle Size per page:**
- HTML: 10-30KB
- CSS: 5-15KB
- JavaScript: 0-5KB (minimal by design)

### Image Optimization

Always use Astro's built-in `<Image>` component for automatic:
- WebP conversion
- Lazy loading
- Responsive sizing
- Alt text must include location keywords

### Location Page Content Template

Each location markdown file follows a strict template with frontmatter including:
- `city`, `state`, `stateCode`, `slug`
- `serviceArea`, `phone`, `email`
- `address` object with street, city, state, zip
- `coordinates` with lat/lng
- `title`, `description`, `keywords` for SEO
- `services` array
- `neighborhoods` array
- `testimonials` array with quote, author, location

Content section must include:
- City-specific introduction mentioning local neighborhoods
- "Why Choose Us" section with local expertise
- Areas/neighborhoods served
- Local landmarks
- Location-specific FAQs

## Deployment

### Cloudflare Pages Configuration

**Build settings:**
```
Build command: npm run build
Build output directory: dist
Root directory: /
Node version: 18 or 20
```

**Free tier includes:**
- Unlimited bandwidth
- 500 builds/month
- 200+ global edge locations

### Adding New Locations

**Process:**
1. Create new markdown file in `src/content/locations/`
2. Copy existing location template
3. Update all fields with new location data
4. Write 40%+ unique content
5. Add local testimonials and landmarks
6. Commit and push (auto-deploys)

**Time estimate:** 15-30 minutes per location

## Testing Checklist

Before launch or after significant changes:

- [ ] Run PageSpeed Insights on all location pages (target: 95+)
- [ ] Test contact form submissions
- [ ] Validate schema markup with Google Rich Results Test
- [ ] Verify unique titles/descriptions for each page
- [ ] Test mobile responsiveness
- [ ] Check click-to-call functionality
- [ ] Ensure sitemap generates correctly
- [ ] Verify all internal links work

## SEO Monitoring

**Google Search Console metrics to track:**
- Indexation rate (target: 70%+ of pages)
- Coverage issues
- Core Web Vitals
- Performance by location page

**If indexation is low (<70%):**
- Content too similar - add more unique content per page
- Verify schema markup correctness
- Check for technical crawling issues

## Scaling Considerations

**Build performance expectations:**
- 5-10 pages: < 5 seconds
- 50 pages: ~10 seconds
- 100 pages: ~20 seconds
- 500 pages: ~60 seconds

Astro has been proven to handle 339k+ pages in production environments.

## Configuration Files

### astro.config.mjs

Must include:
```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yoursite.com',  // Update with actual domain
  integrations: [sitemap()],
});
```

### Content Collection Schema (src/content/config.ts)

Define strict TypeScript schema for location frontmatter to ensure data consistency across all location pages.
