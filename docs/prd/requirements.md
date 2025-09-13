# Requirements

## Functional (FR)
1. FR1: Support email + password authentication; allow login and logout.
2. FR2: Provide password reset (“Forgot password”).
3. FR3: Create seller profiles with photo, display name, short bio, and price.
4. FR4: Default seller price is $10 for 5 minutes (MVP fixed price editable later).
5. FR5: Generate a unique, human‑readable link per seller (e.g., chatlink.me/username) and expose copy‑to‑clipboard.
6. FR6: Provide a public buyer paywall page showing seller photo, name, bio, and price (“5 minutes – $10”).
7. FR7: Integrate Stripe Checkout for instant payment (support Apple Pay/Google Pay via Stripe where available).
8. FR8: Deduct a 20% platform fee and record net earnings per transaction.
9. FR9: On successful payment, create a “call request” and notify the seller via email.
10. FR10: Seller can accept or decline call requests from a dashboard.
11. FR11: On accept, create/join a prebuilt video room (Daily.co or Agora) and admit both parties.
12. FR12: Enforce a 5‑minute call limit with visible countdown; auto‑end at time limit.
13. FR13: Provide call controls: mute/unmute, camera on/off, end call.
14. FR14: Provide a seller‑visible “Block/Report” control during and after calls.
15. FR15: Track balance, earnings history, and pending payouts for sellers.
16. FR16: Allow sellers to request payouts; record payout status (manual or Stripe Connect TBD).
17. FR17: Send email notifications for new paid calls and key status changes.
18. FR18: After call, collect optional buyer feedback (1–5 stars) and store it.
19. FR19: Provide a minimal admin view for flagged reports and basic user management (MVP scope).
20. FR20: Log key events (auth, payments, call lifecycle) for auditing and troubleshooting.

## Non Functional (NFR)
1. NFR1: Use Stripe Checkout; do not handle raw card data (PCI scope minimized).
2. NFR2: Availability target 99.5% for MVP; graceful degradation on third‑party failures.
3. NFR3: Performance: Buyer paywall loads < 2s on 4G; Stripe redirect < 1s after click where network allows.
4. NFR4: Security: Store only required PII; encrypt at rest and in transit; role‑based access (buyer, seller, admin minimal).
5. NFR5: Privacy/Compliance: Basic GDPR alignment (consent, privacy policy, data delete request path).
6. NFR6: Accessibility: WCAG AA for public pages and core flows.
7. NFR7: Browser support: Latest Chrome, Safari, Firefox, Edge; responsive web.
8. NFR8: Observability: Basic structured app logs and error tracking; minimal metrics (payments, calls, failures).
9. NFR9: Cost: Prefer managed services and prebuilt video rooms to minimize time‑to‑market and infra.
10. NFR10: Configurability: Platform fee and call duration as environment‑configurable constants (default 20% and 5 minutes).
