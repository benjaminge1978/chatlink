# Security & Compliance

- Auth: bcrypt hashed passwords, minimum complexity, lockout/backoff on failed attempts
- Sessions: HttpOnly secure cookies; CSRF protection on state-changing endpoints
- RBAC: roles SELLER/ADMIN; buyers unauthenticated (email only); protect server actions with middleware
- PII: store minimal PII (emails only), profile content provided by sellers
- Transport: HTTPS-only; HSTS via host
- Secrets: environment variables via platform; no secrets in client
- Stripe: use Checkout (no raw card data); verify webhook signatures; keep webhook route on Node runtime
- Video: limit rooms to 2 participants; tokens scoped per call; end room after duration
- Safety: block list checks on paywall and before creating checkout session
- Logging: structured logs with redaction for PII; audit critical events
- Privacy: basic GDPR paths (export/delete on request), privacy policy page

