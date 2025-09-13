# Deployment

- App Hosting: Vercel (Next.js). Ensure webhook route uses Node runtime and raw body parsing (Edge incompatible).
- Database: Neon/Supabase managed Postgres
- Media: Vercel static for assets; S3-compatible for user photos if needed
- Domain: `chatlink.me` + seller links at `/u/[slug]`
- Webhooks: Configure Stripe webhook to `POST https://<app>/api/webhooks/stripe`

