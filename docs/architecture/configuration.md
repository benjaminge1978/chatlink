# Configuration (ENV)

- Core
  - `NODE_ENV` — development | production
  - `APP_URL` — canonical app host per env (local/staging/prod)

- Database
  - `DATABASE_URL` — Postgres connection

- Stripe
  - `STRIPE_SECRET_KEY` — server secret
  - `STRIPE_WEBHOOK_SECRET` — signing secret per environment
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — client publishable key

- Business Defaults
  - `PLATFORM_FEE_BPS` default 2000 (20%) or `PLATFORM_FEE_PCT` 0.20
  - `CALL_DURATION_SECONDS` default 300

- Video Provider
  - `VIDEO_PROVIDER` — `daily` (default) | `agora`
  - `DAILY_API_KEY` — server API key
  - `AGORA_APP_ID`, `AGORA_APP_CERTIFICATE` — future alternative

- Email Provider
  - `EMAIL_PROVIDER` — `resend` (default) or `postmark`
  - `EMAIL_PROVIDER_API_KEY` — API token
  - `EMAIL_FROM` — verified sender (e.g., noreply@yourdomain.com)

- Observability (optional)
  - `SENTRY_DSN`

