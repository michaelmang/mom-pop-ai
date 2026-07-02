# Michael Mangialardi AI Consulting

Landing page for local AI consulting in Roanoke and the New River Valley, Virginia.

## Development

```bash
npm install
npm run dev
```

## Deploy

Connected to [Vercel](https://vercel.com/michaelmangs-projects/michael-ai). Pushes to `main` on GitHub auto-deploy.

Production: https://michael-ai-nine.vercel.app

### Custom domain

Add your domain in the Vercel project settings, then set:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

This keeps canonical URLs, Open Graph tags, and the sitemap pointed at your real domain.

### SEO

- `/sitemap.xml` and `/robots.txt` are generated automatically
- JSON-LD structured data (`ProfessionalService` + `WebSite`) is in the page head
- Metadata is configured in `app/layout.tsx` and `lib/site.ts`

After launch, submit the sitemap in [Google Search Console](https://search.google.com/search-console).
