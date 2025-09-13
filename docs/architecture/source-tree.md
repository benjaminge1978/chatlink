# Source Tree

This document defines the repository layout, routing conventions, and where code belongs. It aims to keep the project predictable as it grows.

## Overview
- App type: Next.js (App Router) with TypeScript
- Runtime: Node 18+ (Vercel Node 20 for API/functions)
- Module alias: `@` → `src`
- Testing: Vitest (+ jsdom for a11y)
- Styling: Tailwind CSS

## Top‑Level Layout
```
/
├─ .github/workflows/ci.yml        # CI pipeline
├─ docs/                           # Product and architecture docs
├─ src/                            # Application source (see below)
├─ tests/                          # Unit/integration/a11y tests
├─ package.json                    # Scripts and deps
├─ tsconfig.json                   # TS config (paths include @ -> src)
├─ next.config.ts                  # Next.js config
├─ tailwind.config.ts              # Tailwind config
├─ postcss.config.js               # PostCSS config
├─ vercel.json                     # Vercel runtime config (Node 20 for API)
└─ .env.example                    # Example environment variables
```

## `src/` Tree
```
src/
├─ app/                      # App Router
│  ├─ layout.tsx             # Root layout (RSC)
│  ├─ page.tsx               # Public landing page (RSC)
│  └─ api/
│     └─ health/
│        └─ route.ts         # Health endpoint (GET)
├─ components/
│  ├─ ui/                    # Reusable low‑level primitives
│  └─ patterns/              # Composite components/patterns
└─ lib/
   └─ build-info.ts          # Build metadata helper
```

## Routing Conventions (App Router)
- Pages: `src/app/<route>/page.tsx` (RSC by default).
- API: `src/app/api/<name>/route.ts` with exported `GET/POST/...` handlers.
- Layouts: `layout.tsx` at any route level; use for shared chrome/metadata.
- Client components only when needed; add `'use client'` pragma at top.

## Naming & Structure
- Folders and files are `kebab-case` except React components which use `PascalCase.tsx` when in component libraries.
- Utilities in `src/lib/*` with named exports. Avoid default exports for utilities; pages/layouts may remain default.
- Absolute imports preferred via `@/...`.

## Styles
- Global styles in `src/app/globals.css`.
- Use Tailwind utility classes; extract shared patterns into components when duplication appears.

## Tests
- Location: `tests/**`. Co-located tests are acceptable for complex modules but keep app routes’ tests in `tests/` for clarity.
- Naming: `*.test.ts` / `*.test.tsx`.
- Environments: Node by default; jsdom for `tests/a11y/**` via `vitest.config.ts`.

## Environment & Config
- Required at runtime: `APP_URL` (used for metadataBase), `NODE_ENV` provided by runtime. Optional: `SENTRY_DSN`.
- Never import `process.env.*` in client components.

## Future Additions
- `prisma/` with `schema.prisma` when persistence lands.
- `src/app/(marketing)/...` and `src/app/(app)/...` route groups if/when splitting marketing vs. app surfaces.
- `src/server/` for server‑only modules (auth, db) when introduced.

