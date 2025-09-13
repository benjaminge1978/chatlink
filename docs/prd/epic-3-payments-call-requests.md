# Epic 3 Payments & Call Requests
Goal: Convert buyer intent to paid call requests and notify sellers.

## Story 3.1 Buyer Paywall & Stripe Checkout
As a buyer,
I want to view the seller profile and pay easily,
so that I can immediately start a paid chat.

Acceptance Criteria
1: Paywall shows photo, name, bio, and price.
2: “Pay & Start Chat” opens Stripe Checkout; supports Apple/Google Pay where available.
3: On successful payment, transaction recorded with platform fee and net revenue.

## Story 3.2 Call Request Creation & Notification
As a seller,
I want to receive a call request notification after payment,
so that I can accept or decline promptly.

Acceptance Criteria
1: Payment webhook creates a call request linked to buyer/seller.
2: Email notification sent to seller with request details.
3: Dashboard shows pending requests with accept/decline actions.
