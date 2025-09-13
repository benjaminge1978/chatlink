# Testing Strategy (High-Level)

- Unit: services (payments calc, slug gen, state transitions)
- Integration: webhook handler (signature verification, DB writes), auth flows
- E2E: critical paths (paywall→checkout→webhook→accept→join→timer end)
- NFR checks: page load budget on paywall, accessibility checks (axe)

