# Idempotency, Rate Limits, and Safety

- Webhooks: idempotent by `stripeSessionId`; ignore duplicates gracefully.
- Accept/Decline: single-writer semantics via DB transaction on PENDING state.
- Rate limiting: login, password reset, webhook to prevent abuse.
- Block checks: enforce at paywall and before creating Checkout; short‑circuit with friendly message.
- Refund policy: on decline, mark for manual refund (record reference for reconciliation).

