# Content Migration Plan - JTC Demolition

## Source Site Analysis

**Current Stack:** React + Vite + Wouter + Radix UI + TailwindCSS
**Target Stack:** Astro + Cloudflare Pages (already set up)

### Existing Locations (5 total):
1. **Coeur d'Alene, ID** (`coeur-d-alene-id`)
2. **Post Falls, ID** (`post-falls-id`)
3. **Hayden, ID** (`hayden-id`)
4. **Spokane, WA** (`spokane-wa`)
5. **Spokane Valley, WA** (`spokane-valley-wa`)

### Key Content to Migrate:

#### Brand Information:
- **Business Name:** JTC Demolition
- **Tagline:** Professional Junk Removal
- **Phone:** (208) 555-0100
- **Primary Markets:** Coeur d'Alene, ID & Spokane, WA areas
- **Design Theme:** Feminine, warm, approachable (rose/pink gradient palette)

#### Services Offered:
- Residential Junk Removal
- Commercial Cleanouts
- Furniture Removal
- Appliance Disposal
- Estate Cleanouts
- Demolition Services
- Construction Debris Removal

#### Key Messaging:
- "Reclaim Your Space with Stress-Free Junk Removal"
- Eco-conscious/eco-friendly emphasis
- Same-day service available
- Upfront pricing
- Professional, care and respect
- Community focus

#### Location-Specific Data Structure:
Each location has:
- City, state, state abbreviation
- Description (location-specific paragraph)
- Neighborhoods served (6-8 per location)
- ZIP codes
- Local info (unique paragraph about serving that area)
- Nearby areas
- Coordinates (lat/lng)

---

## Migration Tasks

### Phase 1: Update Branding & Configuration ✓
- [x] Update site title and metadata
- [x] Update phone number throughout
- [x] Update color scheme to match feminine aesthetic
- [x] Configure domain (when ready)

### Phase 2: Create All 5 Location Pages
- [ ] Coeur d'Alene, ID
- [ ] Post Falls, ID
- [ ] Hayden, ID
- [ ] Spokane, WA
- [ ] Spokane Valley, WA

Each location page needs:
- Unique description (40%+ different)
- All neighborhoods listed
- Local-specific information
- Coordinates for schema
- ZIP codes (for future use)
- Nearby areas (for internal linking)

### Phase 3: Update Services Content
- [ ] Match services list to JTC Demolition offerings
- [ ] Add demolition-specific messaging
- [ ] Update service descriptions

### Phase 4: Enhance Components
- [ ] Update hero messaging to match brand voice
- [ ] Add eco-friendly/recycling emphasis throughout

### Phase 5: Homepage Updates
- [ ] Update hero with JTC branding
- [ ] Add service areas section prominently
- [ ] Update messaging to match feminine, approachable tone
- [ ] Add before/after gallery section

### Phase 6: Additional Pages (Optional)
- [ ] About page
- [ ] Detailed contact page
- [ ] Services detail page

---

## Key Differences to Address

### Design Style
**Old Site:** Feminine, warm color palette (rose/pink gradients)
**New Site:** Blue professional palette
**Action:** Update CSS variables to match rose/pink theme

### Content Tone
**Old Site:** Warm, approachable, community-focused
**New Site:** Generic professional
**Action:** Rewrite content with more personal, caring tone

### Service Areas
**Old Site:** Idaho & Washington (5 specific cities)
**New Site:** Currently has Boston, MA template
**Action:** Replace with real locations, keep Boston as example

---

## Implementation Priority

### High Priority (Do First):
1. Create all 5 real location pages with accurate data
2. Update phone number site-wide
3. Update brand name to "JTC Demolition"
4. Update primary color scheme
5. Update homepage with correct service areas

### Medium Priority:
6. Add before/after gallery component
7. Update content tone throughout
8. Add more testimonials with local references
9. Create services detail page

### Low Priority:
10. Add About page
11. Add enhanced contact page
12. Additional SEO optimization
13. Analytics integration

---

## Data Mapping

### Location Schema Updates Needed:

Add to existing schema:
- `zipCodes` array
- `nearbyAreas` array
- Remove `slug` from frontmatter (Astro handles via filename)

Update fields:
- `state` → full name (e.g., "Idaho" not "ID")
- `stateCode` → keep as abbreviation
- Add `localInfo` for additional unique content

---

## Next Steps

1. Start with Phase 2: Create all 5 location markdown files
2. Update color scheme in Layout.astro
3. Update homepage with real service areas
4. Test and deploy

This migration will transform the Astro template into the actual JTC Demolition website with all real content and locations.
