# ChatLink Product Requirements Document (PRD)

## Goals and Background Context

### Goals
- Enable creators to monetize time via paid short video calls.
- Provide each seller a unique, shareable link for paid access.
- Offer frictionless buyer flow: view profile → pay → join call.
- Enforce 5-minute call duration for predictable monetization.
- Process payments securely via Stripe with 20% platform fee.
- Notify sellers of paid call requests with accept/decline controls.
- Support seller safety with block and report tools.
- Track balances, earnings history, and support payouts.
- Deliver a fast MVP with a modular foundation for future features.
- Maintain privacy, security, and basic compliance from day one.

### Background Context
ChatLink is an MVP “time marketplace” that turns unsolicited DMs into billable, short video calls. Sellers share a personal link that routes buyers to a simple paywall with pricing and profile, then—upon payment—connects both parties into a 5‑minute video chat. The positioning is a priority paid inbox rather than dating or subscription content, focusing on lightweight, transactional access to a person’s time.

The MVP emphasizes speed to value: minimal profile setup, flat price, Stripe Checkout, and a prebuilt WebRTC room (Daily.co or Agora). Non‑goals like discovery or native apps are intentionally deferred to keep scope tight. This PRD captures the functional and non‑functional requirements to deliver the initial vertical slice.

### Change Log
| Date       | Version | Description        | Author |
|------------|---------|--------------------|--------|
| 2025-09-13 | 0.1     | Initial PRD draft  | PM     |

## Requirements

### Functional (FR)
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

### Non Functional (NFR)
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

## User Interface Design Goals

### Overall UX Vision
A fast, clean flow that centers on trust and immediacy: sellers share a link; buyers see a simple, credible paywall; payment is one‑click via Stripe; the video room opens with a visible countdown and clear controls. Keep copy concise and reassuring to reduce buyer hesitation.

### Key Interaction Paradigms
- Shareable personal link drives all traffic.
- Paywall summarizes identity and value; one primary CTA to pay.
- Post‑payment auto‑join into a prebuilt room with a 5‑minute countdown.
- Minimal, safe controls and clear exit points; seller safety prioritized.

### Core Screens and Views
- Landing Page (public)
- Signup / Login
- Seller Dashboard (pending calls, balance, payouts)
- Profile Setup (name, photo, bio, price)
- Buyer Paywall (profile, price, Pay & Start Chat)
- Video Call Room (2‑party, timer, controls, safety)
- Post‑Call Screen (feedback, earnings update)
- Admin (basic reports and user list)

### Accessibility: WCAG AA
- High‑contrast text and accessible forms on public pages.
- Keyboard‑navigable paywall and dashboard.
- Screen‑reader labels for call controls and timer.

### Branding
- Neutral, trustworthy brand; minimal color palette with strong emphasis on clarity and trust (payment and safety cues prominent).

### Target Device and Platforms: Web Responsive
- Mobile‑first responsive web; ensure paywall and room work well on mobile.

## Technical Assumptions

### Repository Structure: Monorepo
Single repository with frontend and backend in one codebase to reduce coordination overhead.

### Service Architecture
Monolith via Next.js with API routes (or a lightweight Node service) backed by PostgreSQL (Supabase acceptable). Prebuilt video SDK (Daily.co or Agora). Deployed on Vercel (or similar) for speed.

### Testing Requirements
Unit + targeted integration tests on payment callbacks and room/session lifecycle. E2E smoke on core funnel (link → pay → join → timer → end).

### Additional Technical Assumptions and Requests
- Payments: Stripe Checkout; platform fee = 20% (configurable).
- Video: Daily.co or Agora prebuilt rooms; enforce 5‑minute max.
- Email: SendGrid/Postmark for notifications.
- Auth: Email/password (Google SSO later).
- Analytics: Basic funnel and failure metrics (conversion, no‑show, refunds).

## Epic List
- Epic 1: Foundation & Auth — Initialize repo, deploy scaffold, implement auth and basic landing; ship canary page.
- Epic 2: Profiles & Link Generation — Seller profile setup and unique shareable links.
- Epic 3: Payments & Call Requests — Stripe Checkout, platform fee, call request creation and notifications.
- Epic 4: Video Call Room & Timer — Prebuilt room integration, accept/decline, 5‑minute enforcement.
- Epic 5: Dashboard, Balance & Payouts — Seller earnings, history, and payout requests.
- Epic 6: Safety, Notifications & Feedback — Block/report, email alerts, buyer feedback; minimal admin.

## Epic 1 Foundation & Auth
Goal: Establish deployable baseline with auth and landing to enable subsequent vertical slices.

### Story 1.1 Landing and App Scaffold
As a visitor,
I want to see a landing page and healthy app baseline,
so that I know the service exists and can sign up.

Acceptance Criteria
1: Public landing page deployed to production with basic brand and CTA.
2: Health endpoint or canary route returns 200 and build info.
3: CI/CD pipeline deploys main to production/staging.

### Story 1.2 Email/Password Authentication
As a user,
I want to sign up and log in with email/password,
so that I can access seller features securely.

Acceptance Criteria
1: Sign up, login, logout flows function; validation and basic rate limits.
2: Session persisted securely; no sensitive data in client storage.
3: “Forgot password” flow sends reset email and completes end‑to‑end.

## Epic 2 Profiles & Link Generation
Goal: Let sellers create profiles and share unique links to accept paid calls.

### Story 2.1 Seller Profile Setup
As a seller,
I want to set my display name, photo, bio, and price,
so that buyers see a credible profile and price.

Acceptance Criteria
1: Profile form with name, photo upload, bio, and price (default $10/5 min).
2: Persisted profile visible on dashboard and public paywall.
3: Validation for required fields and safe image handling.

### Story 2.2 Unique Link Generation
As a seller,
I want a unique, human‑readable link for my profile,
so that I can share it in DMs and bios.

Acceptance Criteria
1: System generates unique slug (e.g., /username) and prevents collisions.
2: Dashboard shows link with copy‑to‑clipboard.
3: Public route resolves to the paywall for that seller.

## Epic 3 Payments & Call Requests
Goal: Convert buyer intent to paid call requests and notify sellers.

### Story 3.1 Buyer Paywall & Stripe Checkout
As a buyer,
I want to view the seller profile and pay easily,
so that I can immediately start a paid chat.

Acceptance Criteria
1: Paywall shows photo, name, bio, and price.
2: “Pay & Start Chat” opens Stripe Checkout; supports Apple/Google Pay where available.
3: On successful payment, transaction recorded with platform fee and net revenue.

### Story 3.2 Call Request Creation & Notification
As a seller,
I want to receive a call request notification after payment,
so that I can accept or decline promptly.

Acceptance Criteria
1: Payment webhook creates a call request linked to buyer/seller.
2: Email notification sent to seller with request details.
3: Dashboard shows pending requests with accept/decline actions.

## Epic 4 Video Call Room & Timer
Goal: Connect paid buyers and sellers into a 5‑minute prebuilt video room.

### Story 4.1 Accept/Decline & Room Admission
As a seller,
I want to accept or decline paid requests,
so that only approved buyers join my call.

Acceptance Criteria
1: Accept grants both parties access to a generated room; decline refunds or cancels (policy TBD).
2: Status transitions persisted (pending → accepted/declined/cancelled).
3: Buyer receives join link or auto‑redirect on accept.

### Story 4.2 5‑Minute Timer & Controls
As a participant,
I want a visible countdown and basic controls,
so that the call ends on time and I can manage audio/video.

Acceptance Criteria
1: Timer starts when both parties join; auto‑end at 5 minutes.
2: Mute/unmute, camera on/off, and end‑call controls function.
3: Post‑end redirect to post‑call page for both parties.

## Epic 5 Dashboard, Balance & Payouts
Goal: Provide earnings visibility and payout requests for sellers.

### Story 5.1 Earnings Summary & History
As a seller,
I want to see my balance and call history,
so that I can understand my earnings.

Acceptance Criteria
1: Balance reflects completed, paid calls minus platform fees.
2: History list shows date, buyer (anonymized if needed), status, and amount.
3: Basic filters (recent, pending, completed).

### Story 5.2 Payout Requests
As a seller,
I want to request a payout of my balance,
so that I can receive earnings.

Acceptance Criteria
1: Payout request UI records a request; status visible (requested → processed).
2: Admin can mark payouts processed (manual or Stripe Connect future).
3: Exportable payout ledger for reconciliation.

## Epic 6 Safety, Notifications & Feedback
Goal: Keep sellers safe, keep users informed, and learn from feedback.

### Story 6.1 Block and Report
As a seller,
I want to block or report abusive buyers,
so that I can protect myself and the platform.

Acceptance Criteria
1: Block/Report available during and after calls; actions persisted.
2: Admin view lists flagged reports with minimal triage info.
3: Block prevents future call requests from that buyer.

### Story 6.2 Email Notifications
As a seller,
I want email alerts for paid call requests and status changes,
so that I don’t miss opportunities.

Acceptance Criteria
1: Email sent on new paid request and on buyer join/accept/decline events as applicable.
2: Templates include key details and links; unsubscribe/manage settings path provided.
3: Delivery tracked; failures logged.

### Story 6.3 Buyer Feedback
As a buyer,
I want to rate my call experience (1–5 stars),
so that the platform can track quality.

Acceptance Criteria
1: Post‑call screen collects optional star rating.
2: Rating stored with call record; visible in admin or seller analytics later.
3: No impact on buyer ability to use the platform.

## Checklist Results Report
Product Owner Master Checklist — Summary (v0.1)

Executive Summary
- Project Type: Greenfield with UI
- Overall Readiness: 78% (Conditional Go)
- Gate Decision: CONDITIONAL — proceed after must-fix gaps addressed

Must-Fix Gaps
- Local Dev Setup: add `docs/dev-setup.md`, `.env.example`, tool versions, Prisma workflow
- Integrations Setup: add `docs/integrations-setup.md` (Stripe, Daily, Email, DNS, webhooks)
- Testing Tooling: document framework choices and config snippets (`docs/testing-setup.md`)

Should-Fix (Quality)
- UI foundation choices and conventions (Tailwind + Radix; shadcn optional)
- Perf guardrails and rate-limit documentation
- Clarify refund handling on decline (manual MVP)

Artifacts Added
- `.env.example`
- `docs/dev-setup.md`
- `docs/integrations-setup.md`
- `docs/testing-setup.md`
- `docs/architecture/ui-foundation.md` and tech stack/config updates

Decision
- Conditional approval to proceed with Epics 1–3 after applying the above additions.

## Next Steps

### UX Expert Prompt
Create a concise front‑end spec and wireframes for the core MVP screens (Landing, Signup/Login, Seller Dashboard, Profile Setup, Buyer Paywall, Video Room with 5‑minute timer, Post‑Call). Prioritize clarity, trust, and speed to payment. Use this PRD as input and call out any assumptions.

### Architect Prompt
Propose a minimal, scalable architecture for a Next.js‑centric monolith with Stripe Checkout, Daily.co/Agora video, PostgreSQL, and email notifications. Define data models, API routes, and integration points for payments and webhooks. Aim for deployable vertical slices aligned to Epics 1–2.
