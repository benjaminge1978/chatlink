# Tech Stack

- Framework: Next.js (App Router), TypeScript, React Server Components + Server Actions where appropriate
- Runtime: Node.js (Vercel or Node-compatible host); Stripe webhook uses Node runtime (not Edge)
- Database: PostgreSQL (Neon/Supabase/Railway)
- ORM: Prisma
- Auth: Email + password (bcrypt) via custom credentials flow; sessions via JWT or DB-backed session with Prisma
- Payments: Stripe Checkout + Webhooks
- Video: Daily.co (default) via REST + daily-js; switchable provider interface (Agora later)
- Email: Resend or Postmark (transactional emails)
- Observability: Structured logs (pino), error tracking (Sentry), minimal metrics (payment success/failure, calls started/ended)
- Storage: S3-compatible for profile photos (if not using provider CDN)

## Frontend UI Stack
- Styling: Tailwind CSS
- UI Primitives: Radix UI
- Component Library: shadcn/ui (selectively, as needed)
