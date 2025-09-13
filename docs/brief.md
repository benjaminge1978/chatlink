# Project: Paid Chat MVP ("ChatLink")

## Goal
Build an MVP for a web app that lets users charge strangers for short video calls.  
The funnel: **Unwanted DM → Share payment link → User pays → Short call → Payout.**

This is not a dating app or OnlyFans clone. Positioning: **"time marketplace" / "priority paid inbox."**

---

## Core User Stories (MVP)

### As a Seller (e.g. my niece)
- I can sign up with email/social login.
- I can set a flat price (default $10 for 5 mins).
- I get a unique link (e.g. chatlink.me/username).
- I can share that link in DMs/social bios.
- When someone pays, I get notified and can accept/decline the call.
- I can block/report bad buyers.
- I can view my balance and request payouts.

### As a Buyer
- I click the seller’s link.
- I see their profile: name, photo, price.
- I can pay instantly (Stripe checkout, Apple Pay, etc).
- Once paid, I’m connected into a 5-minute video call.
- I can leave feedback after the call.

---

## MVP Features

- **Auth**: Email + password (later add Google login).  
- **Profiles**: Simple (photo, display name, price).  
- **Link generation**: auto-generate a unique chat link per user.  
- **Payments**: Stripe integration, flat price ($10/5 min), platform keeps 20%.  
- **Video calls**: Use Daily.co or Agora prebuilt WebRTC rooms. Limit to 5 min.  
- **Dashboard (seller)**: pending calls, balance, payouts.  
- **Safety**: block/report button, end-call anytime.  
- **Notifications**: email notification of new paid call (SMS/push later).  

---

## Non-Goals (MVP skip list)

- Discovery marketplace (no browsing users).  
- Group calls.  
- Tips, variable pricing, subscription.  
- Native mobile apps (start with responsive web).  
- Complex verification (manual ID checks can come later).  

---

## Suggested Tech Stack

- **Frontend**: Next.js (React) + Tailwind (host on Vercel).  
- **Backend**: Node.js (Express or NestJS) or Supabase for speed.  
- **Database**: PostgreSQL (Supabase or RDS).  
- **Auth**: Supabase Auth or Firebase.  
- **Payments**: Stripe Checkout.  
- **Video**: Daily.co or Agora prebuilt rooms.  
- **Email**: SendGrid/Postmark for notifications.  

---

## Metrics to Track (MVP success)

- Conversion rate (click → payment).  
- No-show rate (paid but didn’t show up).  
- Average call duration.  
- Refunds/complaints.  
- Weekly revenue per seller.  

---

## Stretch Goals (Post-MVP)

- Discovery marketplace (browse categories).  
- Per-minute pricing and tips.  
- Group calls.  
- Native iOS/Android apps.  
- AI-powered moderation (nudity/harassment detection).  
- Verified user badges.  

---

## Developer Notes

- Optimize for **speed of build**, not perfection.  
- Prioritize **link → pay → video call** loop above all else.  
- Keep code modular so we can add discovery, categories, etc. later.  
- Assume GDPR/DSA compliance from the start (clear privacy, consent, data delete).  


# UI Wireframes (MVP)

## 1. Landing Page (Public)
- **Header:** Logo + "Login" button.
- **Hero section:** "Turn your DMs into $$$" tagline + "Get started" button.
- **How it works (3 steps):**
  1. Share your link.
  2. Get paid.
  3. Chat live.
- **Call-to-action:** "Sign up free."

---

## 2. Signup / Login Page
- **Fields:** Email, password (later: Google login).
- **Buttons:** "Sign up" / "Login."
- **Error states:** invalid email, wrong password.
- **Link:** "Forgot password?"

---

## 3. Seller Dashboard
- **Top bar:** Balance + "Withdraw" button.
- **Main area:**
  - **My Link:** Unique link (copy to clipboard button).
  - **Price Settings:** Default $10/5 min (editable later).
  - **Pending Calls:** List of paid requests (accept/decline buttons).
  - **History:** Past calls + earnings.
- **Sidebar:** Settings (profile, payments, account).

---

## 4. Profile Setup (Seller)
- **Fields:** Display name, profile photo upload, short bio.
- **Price field:** Default = $10 per 5 min (fixed for MVP).
- **Save button.**

---

## 5. Buyer Paywall Page (Public)
- **Profile info:** Photo, name, short bio.
- **Price box:** "5 minutes video chat – $10."
- **Button:** "Pay & Start Chat" → Stripe checkout.
- **Info line:** "Secure payment. Chat opens immediately after payment."

---

## 6. Video Call Room
- **Main area:** Video feed (self + other).
- **Timer:** Countdown from 5 minutes.
- **Controls:** Mute/unmute, camera on/off, end call.
- **Safety button:** Block/report (visible to seller).
- **Auto-end:** Call ends at 5 min.

---

## 7. Post-Call Screen
- **Message:** "Call ended. Thanks for using ChatLink."
- **Buyer:** Feedback stars (1–5).
- **Seller:** Earnings update.

---

## 8. Admin (Later / Basic MVP)
- **User list:** See all accounts.
- **Flagged reports:** View/report abusive users.
- **Manual actions:** Ban/unban user.