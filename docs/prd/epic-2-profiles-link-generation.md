# Epic 2 Profiles & Link Generation
Goal: Let sellers create profiles and share unique links to accept paid calls.

## Story 2.1 Seller Profile Setup
As a seller,
I want to set my display name, photo, bio, and price,
so that buyers see a credible profile and price.

Acceptance Criteria
1: Profile form with name, photo upload, bio, and price (default $10/5 min).
2: Persisted profile visible on dashboard and public paywall.
3: Validation for required fields and safe image handling.

## Story 2.2 Unique Link Generation
As a seller,
I want a unique, human‑readable link for my profile,
so that I can share it in DMs and bios.

Acceptance Criteria
1: System generates unique slug (e.g., /username) and prevents collisions.
2: Dashboard shows link with copy‑to‑clipboard.
3: Public route resolves to the paywall for that seller.
