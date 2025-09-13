# FR/NFR Traceability (Concise)

## Functional Requirements
- FR1–FR3: AuthService, ProfileService; routes under `/api/auth/*`, `/api/profile`.
- FR4–FR8: Profile price config; PaymentService computes fee/net; Transaction model.
- FR9–FR12: Webhook creates CallRequest; RequestService accept/decline; VideoService for room and timer.
- FR13–FR14: Video UI controls via daily‑js; Block/Report models and Admin routes.
- FR15–FR16: Balance from Transactions; PayoutService and PayoutRequest model (manual MVP).
- FR17–FR19: NotificationService emails; Admin minimal for reports; role‑based access.
- FR20: EventLog via AuditService for key events.

## Non-Functional Requirements
- NFR1: Stripe Checkout + webhook verification; no raw PAN.
- NFR2–NFR3: Health route + perf budgets; SSR paywall targeting <2s LCP on 4G.
- NFR4–NFR5: RBAC, encryption, privacy policy and delete/export flow.
- NFR6–NFR7: Accessibility checks (axe) and modern browsers; responsive.
- NFR8–NFR10: Logs/metrics, managed services, env-configurable fee/duration.

