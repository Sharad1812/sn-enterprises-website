# Satya Narayan Enterprise — Corporate Website

Marketing website for Satya Narayan Enterprise, an IT infrastructure and security
solutions company (IT Solutions, CCTV, Networking, Wi-Fi, Biometric, Computer Sales).

## Status

The public-facing website is complete: all pages, sections, content, animations,
and forms. Lead/quote submissions are validated, logged, and emailed (see **Email
Setup** below). See **Next Phases** for what's still outstanding from the original
brief (admin dashboard, database persistence, LLM chatbot, etc.).

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first theme in `src/app/globals.css`)
- Framer Motion (scroll reveals, hero animations)
- next-themes (dark/light mode)
- react-hook-form + zod (form validation)
- nodemailer (Gmail SMTP lead notification emails)
- lucide-react (icons; brand/social icons are hand-rolled SVGs in
  `src/components/ui/SocialIcons.tsx` since lucide-react no longer ships logo icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Email Setup (required for lead notifications to actually send)

Every contact/quote form submission POSTs to `/api/leads`, which validates and logs
the lead, then emails it to `mailsne62@gmail.com` and `sharadrahne2001@gmail.com`
(see `src/data/site.ts` → `contact.email` / `contact.supportEmail`). Without the
steps below, leads are only visible in the server console — no email is sent.

1. On the sending Gmail account (`sharadrahne2001@gmail.com`), enable **2-Step
   Verification**: Google Account → Security → 2-Step Verification.
2. Generate an **App Password**: Google Account → Security → 2-Step Verification →
   App passwords. Choose "Mail" as the app. Google gives you a 16-character password.
3. Open `.env.local` in the project root (create it from `.env.local.example` if it
   doesn't exist) and fill in:
   ```
   GMAIL_USER=sharadrahne2001@gmail.com
   GMAIL_APP_PASSWORD=<the 16-character app password>
   ```
4. Restart the dev server. Submit a test quote from `/contact` and check both inboxes.

`.env.local` is gitignored — never commit real credentials. When deploying, set
these two variables in your hosting provider's environment variable settings instead.

## Project Structure

```
src/
  app/                    Routes (App Router): home, about, services, partners,
                          projects, contact, sitemap.xml, robots.txt, api/leads
  components/
    layout/               Header, Footer, PageHero, ThemeToggle, BackToTop, WhatsAppButton
    home/                 Homepage sections (Hero, ServicesGrid, Testimonials, FAQ, ...)
    chatbot/              ChatbotWidget (rule-based assistant + lead capture)
    contact/              ContactForm (shared by homepage, /contact, and service inquiries)
    about/                FounderAvatar, TeamMemberAvatar (photo with initials fallback)
    partners/              PartnerLogo (real logo image with colored-text fallback)
    services/              ServicePhoto (real photo with illustration fallback)
    illustrations/        Hand-built SVG illustrations, used as fallbacks if a real
                          photo fails to load, and directly in the homepage
                          "What We Deploy" section
    projects/             Filterable browser for /projects
    ui/                   Shared primitives (Button, Card, Container, Reveal, ...)
    providers/             ThemeProvider
  data/                   All site content — edit these files to change copy/data:
                          site.ts, services.ts, partners.ts, projects.ts,
                          testimonials.ts, company.ts
  lib/                    utils.ts (cn helper), chatbot.ts (chatbot reply engine)
  types/                  Shared TypeScript types
```

## Editing Content

Almost all site copy lives in `src/data/*.ts` — update these instead of hunting
through components:

- `site.ts` — company name, GSTIN, phone/email/address, social links, service areas
- `services.ts` — the 10 individual service pages (`/services/[slug]`), each with a
  `photo` path under `public/images/services/`
- `partners.ts`, `projects.ts`, `testimonials.ts`, `company.ts` (about page content,
  team roster)

## Images

Real photos/logos live under `public/images/` and are wired up with a graceful
fallback if a file is missing or fails to load:

- `public/images/team/` — founder and team member photos (falls back to initials)
- `public/images/partners/` — partner logo files, e.g. `d-link.png` (falls back to
  the company name in that brand's color)
- `public/images/services/` — one real photo per service (falls back to a matching
  hand-built illustration)
- `public/images/logo.png` — company logo used in the header/footer (falls back to
  a stylized "SN" wordmark)

## Chatbot

`src/components/chatbot/ChatbotWidget.tsx` is a scripted (non-LLM) assistant: it
matches free-text questions against FAQ/service keywords (`src/lib/chatbot.ts`),
offers quick-reply buttons, runs a step-by-step lead capture flow, and can hand off
to WhatsApp or a phone call. To upgrade it to a real LLM-backed assistant, replace
the `buildBotReply` call in `ChatbotWidget.tsx` with a call to a server route that
proxies an LLM API.

## Next Phases (not yet built)

Per the original requirements, still outstanding:

- Database persistence (PostgreSQL/MongoDB) for leads and chatbot conversations —
  currently leads are emailed but not stored anywhere queryable
- Admin dashboard (inquiries, replies, service/project management, image uploads,
  partner logo management, chatbot conversation log, Excel export)
- Admin authentication
- LLM-backed chatbot responses + human escalation queue
- Google Analytics integration
- Deployment (e.g. Vercel)
