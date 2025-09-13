# Testing Setup — Strategy and Scaffolding

This repo currently contains documentation only. Below is the agreed testing approach and ready-to-use config snippets for when the application code is added.

## Frameworks
- Unit/Integration: Vitest (+ tsconfig paths)
- UI: @testing-library/react
- E2E: Playwright

## Folder Conventions
- `src/` — application code (to be added)
- `tests/unit` and `tests/integration`
- `tests/e2e`

## package.json (snippet)
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "vitest": "^2.0.0",
    "@vitest/coverage-v8": "^2.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.5.0",
    "playwright": "^1.46.0"
  }
}
```

## vitest.config.ts (snippet)
```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/unit/**/*.test.ts', 'tests/integration/**/*.test.ts']
  }
});
```

## playwright.config.ts (snippet)
```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 30_000,
  use: { baseURL: process.env.APP_URL || 'http://localhost:3000' },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } }
  ]
});
```

## Example Tests (to add later)
- `tests/unit/utils/fees.test.ts` — verify platform/net fee calculations
- `tests/integration/webhook/stripe.test.ts` — signature verification/idempotency path
- `tests/e2e/paywall.spec.ts` — paywall → checkout → success (with test mode)

## Notes
- Do not commit real secrets. Use `.env` and CI secret stores.
- In CI: run `typecheck`, `lint`, `prisma validate` (when code is present) before tests.

