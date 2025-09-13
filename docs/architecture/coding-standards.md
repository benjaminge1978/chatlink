# Coding Standards

These standards keep the codebase consistent, accessible, and performant. When in doubt, prefer simplicity and server‑rendered solutions.

## Languages & Versions
- **TypeScript:** `strict` enabled; target ES2022; Node 18+.
- **Next.js:** App Router (RSC by default); Server Actions allowed where appropriate.

## Project Conventions
- **RSC‑first:** Components are server by default. Use client components only for interactive UI or browser‑only APIs. Mark with `'use client'` at the top.
- **Imports:** Prefer absolute imports via `@/...`.
- **Exports:** Utilities and library modules use named exports; pages/layouts/components may default export.
- **Naming:**
  - Files/folders: `kebab-case`.
  - Components: `PascalCase.tsx` (in `src/components/**`).
  - Hooks: `useThing.ts`.
- **Folder intent:**
  - `src/components/ui`: small, reusable primitives.
  - `src/components/patterns`: composites/patterns composed from primitives.
  - `src/lib`: framework‑agnostic utilities and server helpers.

## React & UI
- **Props:** Strongly type props; avoid `any`. Optional props use `?` with sensible defaults.
- **State:** Keep in client components only when necessary. Lift state minimally.
- **Accessibility:**
  - Use native elements first (e.g., `<button>`, `<a>`), proper labels, and ARIA only to enhance semantics.
  - Ensure focus styles are visible; keyboard flows must work.
  - Meet WCAG AA color contrast; prefer system colors where possible.
- **Styling:** Tailwind CSS utilities. Extract repeated groups into components.
- **Images:** Prefer `next/image` for responsive images when imagery is introduced.

## Next.js Routing & API
- **Pages:** `src/app/<route>/page.tsx`. Keep logic minimal; delegate to components/lib.
- **Layouts/Metadata:** Define metadata via `export const metadata`. Use `metadataBase` from `APP_URL`.
- **API Routes:** `src/app/api/<name>/route.ts` with exported `GET/POST/...` functions. Return `NextResponse.json()`.
- **Validation:** Validate external inputs (query/body) before use. Introduce `zod` when forms/APIs arrive.

## Error Handling & Observability
- Fail fast with clear messages; surface user‑friendly errors in the UI layer.
- Log server errors with context; console is acceptable early, replace with `pino`/Sentry per architecture.
- Health endpoint returns `{ status: 'ok', build: { env, deployedAt, commit } }`.

## Performance
- Keep landing and most pages server‑rendered. Minimize client JS and bundle size.
- Avoid unnecessary client libraries; prefer server utilities.
- Aim for LCP < 2.0s on mid‑range devices (4G).

## Security
- Never trust request input; validate and sanitize.
- Do not expose secrets to client components or via public env vars.
- Use Node runtime for webhooks and sensitive endpoints.

## Testing
- **Framework:** Vitest; Node env for logic tests; jsdom for a11y/DOM tests.
- **A11y:** Axe smoke tests for key pages; disable `color-contrast` in jsdom context only.
- **Scope:**
  - Unit: pure functions in `src/lib`.
  - Integration: API handlers.
  - E2E: added later for critical flows.

## Git & CI
- All PRs must pass CI (typecheck + tests).
- Keep commits focused; use clear imperative messages (e.g., "add health endpoint").

## Style & Tooling
- ESLint/Prettier: to be added; until then, follow idiomatic Next.js + TypeScript style and keep diffs minimal.

