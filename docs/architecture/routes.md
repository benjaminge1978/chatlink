# Routes & Handlers (App Router)

## Public
- GET `/` Landing
- GET `/u/[slug]` Paywall (SSR). Server action to start checkout.
- GET `/success` Payment success page
- GET `/cancel` Payment canceled page

## Auth
- POST `/api/auth/signup` { email, password }
- POST `/api/auth/login` { email, password }
- POST `/api/auth/logout`
- POST `/api/auth/forgot` { email }
- POST `/api/auth/reset` { token, newPassword }

## Seller (authenticated)
- GET `/dashboard` Overview, pending requests, balance
- GET `/profile` + POST `/api/profile` CRUD
- GET `/requests` + POST `/api/requests/[id]/accept|decline`
- POST `/api/payouts/request`

## Payments
- POST `/api/payments/checkout` Creates Stripe Checkout session
- POST `/api/webhooks/stripe` Webhook endpoint (raw body required)

## Video
- POST `/api/video/create` Create room for accepted request
- POST `/api/video/join` Exchange for token/URL
- POST `/api/video/end` End room (server requests provider)

## Admin (minimal)
- GET `/admin/reports`
- POST `/api/admin/reports/[id]/resolve`

