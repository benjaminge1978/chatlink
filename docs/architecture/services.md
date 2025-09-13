# Services (Domain Modules)

- AuthService: signup/login (bcrypt), reset tokens, session issuance, RBAC guards
- ProfileService: slug generation (collision-checked), price validation, photo upload
- PaymentService: Stripe session creation, fees calculation, webhook verification, transaction recording
- RequestService: create on webhook, list/filter, accept/decline transitions, idempotency
- VideoService: provider-agnostic interface (createRoom, joinTokens, endRoom); Daily implementation
- NotificationService: email templates and send (request created, accepted/declined)
- PayoutService: request/mark processed, export ledger
- AuditService: append EventLog entries for auth, payments, requests, video lifecycle

