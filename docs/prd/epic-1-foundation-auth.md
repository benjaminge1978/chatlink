# Epic 1 Foundation & Auth
Goal: Establish deployable baseline with auth and landing to enable subsequent vertical slices.

## Story 1.1 Landing and App Scaffold
As a visitor,
I want to see a landing page and healthy app baseline,
so that I know the service exists and can sign up.

Acceptance Criteria
1: Public landing page deployed to production with basic brand and CTA.
2: Health endpoint or canary route returns 200 and build info.
3: CI/CD pipeline deploys main to production/staging.

## Story 1.2 Email/Password Authentication
As a user,
I want to sign up and log in with email/password,
so that I can access seller features securely.

Acceptance Criteria
1: Sign up, login, logout flows function; validation and basic rate limits.
2: Session persisted securely; no sensitive data in client storage.
3: “Forgot password” flow sends reset email and completes end‑to‑end.
