# Key Flows

## Buyer Payment → Call Request
- GET `/u/[slug]` renders paywall with seller info and price.
- Buyer clicks Pay; server creates Stripe Checkout Session with amount from seller price and metadata (sellerId, slug, requestId placeholder or will create on webhook).
- Stripe redirects back to success URL; authoritative creation happens in webhook: on `checkout.session.completed`, app creates Transaction + CallRequest (pending), computes platform fee and net.
- Email sent to seller notifying a pending request.

## Seller Accept/Decline → Room Admission
- Seller dashboard lists pending requests; accept triggers video.createRoom() (Daily) and generates join tokens for buyer and seller; status → accepted; email buyer join link if needed.
- Decline sets status → declined; refund/cancel policy TBD (record intent; manual refund acceptable in MVP).

## Join & 5-Minute Limit
- Both parties hit `/api/video/join` to fetch room URL/token; UI shows countdown starting when both join (client-observed events). On timer end, UI calls `/api/video/end`; server attempts to end room via provider.
- For MVP, enforcement is client-driven with server room end; provider-level enforcement can be added with room TTL/exp.

