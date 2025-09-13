# Epic 5 Dashboard, Balance & Payouts
Goal: Provide earnings visibility and payout requests for sellers.

## Story 5.1 Earnings Summary & History
As a seller,
I want to see my balance and call history,
so that I can understand my earnings.

Acceptance Criteria
1: Balance reflects completed, paid calls minus platform fees.
2: History list shows date, buyer (anonymized if needed), status, and amount.
3: Basic filters (recent, pending, completed).

## Story 5.2 Payout Requests
As a seller,
I want to request a payout of my balance,
so that I can receive earnings.

Acceptance Criteria
1: Payout request UI records a request; status visible (requested → processed).
2: Admin can mark payouts processed (manual or Stripe Connect future).
3: Exportable payout ledger for reconciliation.
