# High-Level Architecture

```
[Browser]
  ├─ Public Paywall (/u/[slug]) → POST /api/payments/checkout → Stripe Checkout
  ├─ Video Room UI (daily-js) ← room token/URL from /api/video/join
  └─ Seller Dashboard (auth required)

[Next.js App]
  ├─ Pages/Routes (RSC + handlers)
  ├─ API Route Handlers
  │   ├─ /api/auth/* (signup, login, logout, reset)
  │   ├─ /api/profile/* (CRUD)
  │   ├─ /api/payments/checkout (create Stripe session)
  │   ├─ /api/webhooks/stripe (webhook endpoint)
  │   ├─ /api/requests/* (list/accept/decline)
  │   ├─ /api/video/* (create/join/end)
  │   ├─ /api/payouts/* (request/update)
  │   └─ /api/admin/* (reports, users minimal)
  ├─ Services (domain modules: auth, payments, video, notifications, requests)
  └─ Data Access (Prisma models)

[Stripe]
  ├─ Checkout Session → redirect to app
  └─ Webhook → /api/webhooks/stripe (create CallRequest)

[Daily.co]
  ├─ REST: room create/end
  └─ Client SDK: daily-js join, events

[Email Provider]
  └─ Send transactional emails (request created, accepted/declined)

[PostgreSQL]
  └─ Users, Profiles, Requests, Transactions, Payouts, Ratings, Blocks, Reports, EventLog
```

