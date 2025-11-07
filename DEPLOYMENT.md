# Deployment Guide - JTC Demolition

This guide covers deploying your Astro site to Cloudflare Pages using Wrangler.

## Prerequisites

- Cloudflare account (free tier is fine)
- Node.js and npm installed
- Wrangler installed (already done via `npm install`)

## Option 1: Deploy via GitHub (Recommended)

This is the easiest method with automatic deployments on every push.

### Steps:

1. **Go to Cloudflare Dashboard**
   - Visit https://dash.cloudflare.com/
   - Navigate to **Workers & Pages** → **Pages**

2. **Connect Repository**
   - Click **Create a project**
   - Click **Connect to Git**
   - Authorize GitHub and select `JTC-Demolition` repository

3. **Configure Build Settings**
   ```
   Production branch: main
   Build command: npm run build
   Build output directory: dist
   Root directory: /
   ```

4. **Environment Variables** (Optional)
   Add any environment variables like:
   - `WEB3FORMS_KEY` (for contact form)

5. **Save and Deploy**
   - Click **Save and Deploy**
   - Your site will be live in 2-3 minutes!

### Benefits:
- Automatic deployments on git push
- Preview deployments for pull requests
- No manual deployment needed
- Free unlimited bandwidth

---

## Option 2: Deploy via Wrangler CLI

Use this for manual deployments or if you prefer CLI control.

### First-Time Setup:

1. **Login to Cloudflare**
   ```bash
   npm run cf:login
   ```
   This will open a browser for authentication.

2. **Build your site**
   ```bash
   npm run build
   ```

3. **Deploy to Cloudflare Pages**
   ```bash
   npm run cf:deploy
   ```

   Or use the combined command:
   ```bash
   npm run deploy
   ```

### Subsequent Deployments:

Just run:
```bash
npm run deploy
```

This will build and deploy in one command.

---

## Available NPM Scripts

```bash
# Development
npm run dev              # Start dev server at http://localhost:4321

# Building
npm run build            # Build for production
npm run preview          # Preview production build locally

# Deployment
npm run deploy           # Build and deploy to Cloudflare
npm run cf:login         # Login to Cloudflare via Wrangler
npm run cf:deploy        # Deploy to Cloudflare (without building)
npm run cf:tail          # View live logs from Cloudflare deployment
```

---

## Configuration Files

### `wrangler.toml`
Main Wrangler configuration file. Update:
- `name`: Project name (currently "jtc-demolition")
- `compatibility_date`: Cloudflare Workers compatibility date
- Environment variables

### `astro.config.mjs`
Update the `site` URL with your actual domain:
```javascript
site: 'https://your-actual-domain.com'
```

---

## Custom Domain Setup

### After First Deployment:

1. Go to your Pages project in Cloudflare Dashboard
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `jtcdemolition.com`)
5. Follow DNS configuration instructions
6. Cloudflare will automatically provision SSL certificate

### DNS Configuration:
- **For root domain**: Add a CNAME record to `<your-project>.pages.dev`
- **For subdomain**: Add a CNAME record to `<your-project>.pages.dev`

---

## Environment Variables & Secrets

### For Web3Forms API Key:

#### Via Cloudflare Dashboard:
1. Go to your Pages project
2. Navigate to **Settings** → **Environment variables**
3. Add variable: `WEB3FORMS_KEY` = `your-api-key`
4. Redeploy for changes to take effect

#### Via Wrangler CLI:
```bash
wrangler pages secret put WEB3FORMS_KEY
```
Enter your API key when prompted.

---

## Monitoring & Logs

### View Deployment Logs:
```bash
npm run cf:tail
```

### Via Dashboard:
- Go to your Pages project
- Click on a deployment
- View build logs and deployment details

---

## Troubleshooting

### Build Fails
- Check Node.js version (requires Node 18+)
- Ensure all dependencies are installed: `npm install`
- Test build locally: `npm run build`
- Check build logs in Cloudflare Dashboard

### Site Not Updating
- Clear Cloudflare cache
- Check if correct branch is deploying
- Verify build succeeded in deployment logs

### Environment Variables Not Working
- Redeploy after adding environment variables
- Check variable names match your code
- Verify they're set in correct environment (production/preview)

---

## Performance Optimization

After deployment, test your site:

1. **PageSpeed Insights**
   - Visit https://pagespeed.web.dev/
   - Test your live URL
   - Target: 95+ score

2. **Schema Validation**
   - Visit https://validator.schema.org/
   - Validate LocalBusiness schema markup

3. **Mobile Testing**
   - Test on real devices
   - Verify click-to-call works
   - Check form submissions

---

## Next Steps After Deployment

1. ✅ Update `astro.config.mjs` with real domain
2. ✅ Add Web3Forms API key
3. ✅ Set up custom domain
4. ✅ Submit sitemap to Google Search Console
5. ✅ Test all forms and links
6. ✅ Add more location pages
7. ✅ Monitor performance and analytics

---

## Support Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [GitHub Repository](https://github.com/the-scott-ellis/JTC-Demolition)
