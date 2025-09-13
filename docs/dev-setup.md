# Developer Setup — ChatLink

This guide prepares a local environment for the ChatLink MVP (Next.js + Stripe Checkout + Daily.co + Postgres + Prisma). If the app scaffold isn’t present yet, you can still prepare credentials and infra ahead of implementation.

## Prerequisites
- Node.js 20.x LTS
- Package manager: pnpm 9.x (recommended) or npm 10+
- PostgreSQL 14+ (local or managed)
- Stripe account (test mode)
- Daily.co account (API key)
- Email provider account (Resend or Postmark)

## Quick Start
1) Clone and configure env
- Copy `.env.example` → `.env` and fill values
- Ensure `APP_URL` matches local or deployed URL

2) Database
- Provision Postgres (local or managed) and set `DATABASE_URL`
- Once the app is scaffolded with Prisma:
  - `pnpm prisma generate`
  - `pnpm prisma migrate dev` (creates schema)
  - optional: add seed script then run `pnpm seed`

3) Stripe webhook (local)
- Install Stripe CLI
- Login: `stripe login`
- Forward webhooks: `stripe listen --forward-to http://localhost:3000/api/webhooks/stripe`
- Copy the printed `whsec_...` to `STRIPE_WEBHOOK_SECRET`

4) Daily.co
- Create API key and set `DAILY_API_KEY`
- No client key is needed; server issues room and join tokens

5) Email provider (Resend recommended)
- Create an API key and set `EMAIL_PROVIDER_API_KEY`
- Set `EMAIL_FROM` to a verified sender/domain

6) Run the app
- After the Next.js app is added:
  - `pnpm install`
  - `pnpm dev` → http://localhost:3000

## Scripts (to add once app exists)
- `dev`: start Next.js
- `build`: typecheck + build
- `test`: run unit/integration tests (Vitest)
- `test:e2e`: run Playwright tests
- `lint`: lint

## Troubleshooting
- Webhook 400: verify `STRIPE_WEBHOOK_SECRET` and raw body handling in the webhook route
- Prisma errors: confirm `DATABASE_URL` and run migrations
- Email failures: verify sending domain/limits; use test mode where available
- CORS/redirect issues: ensure `APP_URL` matches the URL configured in Stripe success/cancel URLs

---

## Tech Choices (baseline)
- Framework: Next.js (App Router), TypeScript
- ORM: Prisma + PostgreSQL
- Auth: Email+password credentials, server sessions
- Payments: Stripe Checkout + Webhooks
- Video: Daily.co (prebuilt) via server-issued room + tokens
- Email: Resend (simple API), Postmark optional
- UI: Tailwind CSS + Radix UI (shadcn/ui optional)
- Tests: Vitest (unit/integration), Playwright (E2E), Testing Library (React)

