# Technical Assumptions

## Repository Structure: Monorepo
Single repository with frontend and backend in one codebase to reduce coordination overhead.

## Service Architecture
Monolith via Next.js with API routes (or a lightweight Node service) backed by PostgreSQL (Supabase acceptable). Prebuilt video SDK (Daily.co or Agora). Deployed on Vercel (or similar) for speed.

## Testing Requirements
Unit + targeted integration tests on payment callbacks and room/session lifecycle. E2E smoke on core funnel (link → pay → join → timer → end).

## Additional Technical Assumptions and Requests
- Payments: Stripe Checkout; platform fee = 20% (configurable).
- Video: Daily.co or Agora prebuilt rooms; enforce 5‑minute max.
- Email: SendGrid/Postmark for notifications.
- Auth: Email/password (Google SSO later).
- Analytics: Basic funnel and failure metrics (conversion, no‑show, refunds).
