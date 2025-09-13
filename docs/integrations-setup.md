# Integrations Setup — Stripe, Daily.co, Email, DNS

This guide documents the step-by-step setup for core third-party services used by ChatLink.

## 1) Stripe (Checkout + Webhooks)
Goal: Accept payments via Stripe Checkout and handle `checkout.session.completed` webhooks.

Steps
1. Create a Stripe account (or use test mode).
2. Obtain API keys: Dashboard → Developers → API keys.
   - Secret key → `STRIPE_SECRET_KEY`
   - Publishable key → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
3. Configure Checkout success/cancel URLs:
   - Success: `${APP_URL}/success`
   - Cancel: `${APP_URL}/cancel`
4. Configure Webhook endpoint:
   - Endpoint: `POST ${APP_URL}/api/webhooks/stripe`
   - Event types: `checkout.session.completed`
   - Copy Signing secret (`whsec_...`) → `STRIPE_WEBHOOK_SECRET`
5. Local development:
   - Install Stripe CLI
   - `stripe login`
   - `stripe listen --forward-to http://localhost:3000/api/webhooks/stripe`
   - Paste printed `whsec_...` into `.env`

Notes
- MVP does not use Stripe Connect. Platform fee is computed in-app (ledger only), funds settle to the platform account.
- Refunds for declined requests: manual in MVP. Record intent in the app for reconciliation.

## 2) Daily.co (Prebuilt Rooms)
Goal: Create and end rooms server-side; clients receive join URL/token.

Steps
1. Create a Daily.co account and project.
2. Generate an API key → `DAILY_API_KEY` (server-side only).
3. Recommended room defaults:
   - Max participants: 2
   - Expiration / timeout: keep short; app enforces 5-minute calls, server ends room at timer end
4. Server responsibilities (app code):
   - Create room on accept; store `roomName/URL`
   - Issue buyer/seller join tokens (scoped, short-lived)
   - End room at or shortly after 5 minutes

## 3) Email Provider (Resend recommended)
Goal: Send transactional emails for request notifications and status changes.

Resend Setup
1. Create account and API key → `EMAIL_PROVIDER_API_KEY`
2. Verify sending domain or use test mode
3. Set `EMAIL_FROM` to a verified sender (e.g., `noreply@yourdomain.com`)

Postmark (alternative)
- Use `POSTMARK_SERVER_TOKEN` instead of Resend key; update app config accordingly

## 4) DNS / Domains / APP_URL
Goal: Ensure routes and webhooks point to the correct host.

Steps
1. Choose hosting (e.g., Vercel) and set production domain (e.g., `chatlink.me`)
2. Set `APP_URL` for each environment:
   - Local: `http://localhost:3000`
   - Staging: `https://staging.chatlink.me`
   - Production: `https://chatlink.me`
3. Update Stripe Checkout success/cancel URLs and webhook endpoint for each environment
4. Rotate secrets when moving from test → live

## 5) Observability
Optional but recommended for production.

1. Sentry
   - Create project → set `SENTRY_DSN`
2. Logging
   - Structured logs (pino) → ensure platform captures stdout
3. Metrics
   - Track payment outcomes, webhook errors, calls started/ended

---

## Checklist (Copy/Paste)
- [ ] `STRIPE_SECRET_KEY` set
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` set
- [ ] `STRIPE_WEBHOOK_SECRET` set (per env)
- [ ] `DAILY_API_KEY` set
- [ ] `EMAIL_PROVIDER_API_KEY` and `EMAIL_FROM` set
- [ ] `APP_URL` correct per env
- [ ] Webhook endpoint configured for each env
- [ ] Sentry DSN set (optional)

