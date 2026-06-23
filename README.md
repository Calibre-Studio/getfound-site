# Get Found by Calibre Studio

Static Next.js landing for the Be Found (AI visibility) offering. Forked from
`presence-site`: same nav, motion, logo wall and footer, with the two-door layout
replaced by the offerings ladder, each option wired to Stripe.

Live at getfound.calibrestudio.co

## Offerings
- AI Visibility Audit + 90-Day Plan — €350 one-time (credited if you continue)
- Get Found Sprint — €1,800 one-time
- Always-On Visibility — €390/mo (Starter), €890/mo (Growth)

Buttons read from a single `STRIPE` config block in `app/page.jsx`. Set the four
Payment Link URLs as env vars (`NEXT_PUBLIC_STRIPE_AUDIT`, `_SPRINT`, `_STARTER`,
`_GROWTH`) or edit the fallbacks. Until set, they route to the free check at
indexed.calibrestudio.co, so nothing is ever a dead link.

## Stack
Next.js 14 (App Router, JS), Inter + Fragment Mono, JSON-LD `Service` schema with a
four-offer `OfferCatalog`. Pure static, deploys on Vercel.

## Develop
    npm install
    npm run dev      # localhost:3000
    npm run build    # production build
