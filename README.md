# Michael Mangialardi

Site for Michael's digital handyman work in the New River Valley (websites, Google listings, ads, cybersecurity, print) and bigger software builds (apps, automation, AI integrations, search).

Service copy lives in `lib/services.ts`; projects live in `lib/site.ts`.

## Development

```bash
npm install
npm run dev
```

## Deploy

Connected to [Vercel](https://vercel.com/michaelmangs-projects/michael-ai). Pushes to `main` on GitHub auto-deploy.

Production: https://www.michaelmang.com

Canonical URLs, Open Graph tags, and the sitemap use `https://www.michaelmang.com`. Override locally with `NEXT_PUBLIC_SITE_URL` if needed.

### SEO

- `/sitemap.xml` and `/robots.txt` are generated automatically
- JSON-LD covers the person, the business with its service catalog and service area, and the apps
- The old `/work` project pages redirect to the homepage's work section (see `next.config.mjs`)
- Metadata is configured in `app/layout.tsx` and `lib/site.ts`

### Contact form

Submissions are sent to `mikemangialardi94@gmail.com` via [Resend](https://resend.com).

1. Create a free account at resend.com using your Gmail
2. Go to **API Keys** and create a key
3. In Vercel → Project Settings → Environment Variables, add:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
4. Redeploy (or push to `main`)

For local testing, copy `.env.example` to `.env.local` and add your key.
