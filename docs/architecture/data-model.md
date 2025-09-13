# Data Model (Prisma Sketch)

```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  passwordHash  String
  role          Role     @default(SELLER)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  profile       Profile?
  requests      CallRequest[] @relation("SellerRequests")
  blocks        Block[] @relation("SellerBlocks")
  reports       Report[] @relation("SellerReports")
}

enum Role { BUYER SELLER ADMIN }

model Profile {
  id         String   @id @default(cuid())
  userId     String   @unique
  slug       String   @unique
  displayName String
  bio        String?
  photoUrl   String?
  priceCents Int      @default(1000) // $10 default
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  user       User     @relation(fields: [userId], references: [id])
}

model Transaction {
  id             String   @id @default(cuid())
  stripeSessionId String  @unique
  stripePaymentIntentId String?
  sellerId       String
  grossCents     Int
  platformFeeCents Int
  netCents       Int
  currency       String   @default("usd")
  createdAt      DateTime @default(now())
}

model CallRequest {
  id         String   @id @default(cuid())
  sellerId   String
  buyerEmail String
  transactionId String
  status     RequestStatus @default(PENDING)
  roomName   String?
  roomUrl    String?
  buyerToken String?
  sellerToken String?
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  acceptedAt DateTime?
  declinedAt DateTime?
  endedAt    DateTime?
}

enum RequestStatus { PENDING ACCEPTED DECLINED CANCELLED COMPLETED }

model PayoutRequest {
  id        String   @id @default(cuid())
  sellerId  String
  amountCents Int
  status    PayoutStatus @default(REQUESTED)
  createdAt DateTime @default(now())
  processedAt DateTime?
}

enum PayoutStatus { REQUESTED PROCESSED }

model Rating {
  id         String   @id @default(cuid())
  callRequestId String @unique
  stars      Int
  createdAt  DateTime @default(now())
}

model Block {
  id         String   @id @default(cuid())
  sellerId   String
  buyerEmail String
  createdAt  DateTime @default(now())
}

model Report {
  id         String   @id @default(cuid())
  sellerId   String
  callRequestId String?
  buyerEmail String?
  reason     String
  createdAt  DateTime @default(now())
}

model PasswordResetToken {
  token     String   @id
  userId    String
  expiresAt DateTime
  createdAt DateTime @default(now())
}

model EventLog {
  id        String   @id @default(cuid())
  type      String
  refId     String?
  payload   Json?
  createdAt DateTime @default(now())
}
```

Notes:
- Buyers are not stored as first-class users in MVP; we record buyerEmail on requests/transactions only. Can evolve later.
- Platform fee defaults to 20%; set via env var.

