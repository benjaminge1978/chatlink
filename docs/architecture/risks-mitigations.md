# Risks & Mitigations

- Webhook fragility: implement idempotency and retries; log failures
- Timer enforcement: initial client-driven; add provider TTL or server-scheduled end later
- Payouts without Connect: manual reconciliation risk; maintain exportable ledger
- Abuse/Spam: add basic rate limits, captcha on paywall if abused
- Privacy: ensure unsubscribe/manage notifications; transactional emails only by default

