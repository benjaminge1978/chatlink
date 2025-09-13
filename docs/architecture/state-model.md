# State Model

CallRequest lifecycle aligns with FR10–FR14. Concurrency is enforced via transactional updates (only transition from PENDING).

```mermaid
stateDiagram-v2
    [*] --> PENDING
    PENDING --> ACCEPTED: seller accepts
    PENDING --> DECLINED: seller declines
    PENDING --> CANCELLED: manual/admin or policy
    ACCEPTED --> COMPLETED: call ends (timer)
    ACCEPTED --> CANCELLED: fail to join/ended early
    DECLINED --> [*]
    CANCELLED --> [*]
    COMPLETED --> [*]
```

Transition rules:
- PENDING → ACCEPTED: create room, issue tokens, send notifications, set `acceptedAt`.
- PENDING → DECLINED: mark `declinedAt`; record refund/cancel intent (manual in MVP).
- ACCEPTED → COMPLETED: timer elapses or either party ends; set `endedAt`.
- Any invalid transition is rejected (idempotent handlers).

