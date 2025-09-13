# Observability & Ops

- Logging: pino transport to stdout; attach requestId, userId when available
- Errors: Sentry SDK for server/client error capture
- Metrics: counters for checkout started/completed, webhook errors, calls started/ended, accept/decline
- Health: `/api/health` returns 200 with build info
- CI/CD: GitHub Actions run `typecheck`, `lint`, `prisma validate`, and unit tests; auto-deploy main to staging/prod

