# Satya Narayan Enterprise — Corporate Website

Marketing website for Satya Narayan Enterprise, an IT infrastructure and security
solutions company (IT Solutions, CCTV, Networking, Wi-Fi, Biometric, Computer Sales).

## Status

The public-facing website is complete: all pages, sections, content, animations,
and forms. The site builds as a static export (see **Deployment** below) and is
hosted on GitHub Pages. Lead/quote submissions are validated and sent via Formspree
(see **Lead Notifications** below). See **Next Phases** for what's still outstanding
from the original brief (admin dashboard, database persistence, LLM chatbot, etc.).

## Tech Stack

- Next.js 16 (App Router, static export) + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first theme in `src/app/globals.css`)
- Framer Motion (scroll reveals, hero animations)
- next-themes (dark/light mode, follows system preference — no manual toggle)
- react-hook-form + zod (form validation)
- Formspree (client-side lead notification emails — no server required)
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

## Lead Notifications (required for form submissions to actually send)

Every contact/quote form submission (`ContactForm` and the chatbot's lead capture
flow, in `src/lib/leads.ts`) posts directly from the browser to a Formspree form —
there is no backend/API route, which is required since the site is a static export.
Without the steps below, submissions silently no-op (logged to the console only).

1. Create a free form at [formspree.io](https://formspree.io) and copy its endpoint,
   e.g. `https://formspree.io/f/xxxxxxxx`.
2. Open `.env.local` in the project root (create it from `.env.local.example` if it
   doesn't exist) and fill in:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```
3. Restart the dev server. Submit a test quote from `/contact` and confirm it lands
   in the inbox configured on that Formspree form.

`.env.local` is gitignored — never commit real values. When deploying, set this
variable as a **repository secret** or **build-time env var** in your CI/host so
it's baked into the static build (see **Deployment** below).

## Project Structure

```
src/
  app/                    Routes (App Router): home, about, services, partners,
                          projects, contact, sitemap.xml, robots.txt
  components/
    layout/               Header, Footer, PageHero, BackToTop, WhatsAppButton
    home/                 Homepage sections (Hero, ServicesGrid, Testimonials, FAQ, ...)
    chatbot/              ChatbotWidget (rule-based assistant + lead capture)
    contact/              ContactForm (shared by homepage, /contact, and service inquiries)
    about/                FounderAvatar (photo with initials fallback)
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
  lib/                    utils.ts (cn helper), chatbot.ts (chatbot reply engine),
                          leads.ts (Formspree submission helper)
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
- `public/images/logo.svg` — company logo used in the header/footer (falls back to
  a stylized "SN" wordmark)

## Chatbot

`src/components/chatbot/ChatbotWidget.tsx` is a scripted (non-LLM) assistant: it
matches free-text questions against FAQ/service keywords (`src/lib/chatbot.ts`),
offers quick-reply buttons, runs a step-by-step lead capture flow, and can hand off
to WhatsApp or a phone call. To upgrade it to a real LLM-backed assistant, replace
the `buildBotReply` call in `ChatbotWidget.tsx` with a call to a server route that
proxies an LLM API.

## Deployment (GitHub Pages)

The site builds as a static export (`output: "export"` in `next.config.ts`) and
deploys to GitHub Pages via the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which runs on every push to `main`.

One-time setup:

1. In the repo on GitHub: **Settings → Pages → Source → GitHub Actions**.
2. **Settings → Secrets and variables → Actions → New repository secret**:
   add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` with your Formspree endpoint so the build
   has it baked in (client-side env vars must be present at build time).
3. Push to `main` — the workflow builds and publishes to
   `https://<username>.github.io/sn-enterprises-website/`.

`next.config.ts` sets `basePath`/`assetPrefix` automatically when running inside
GitHub Actions (detected via the `GITHUB_ACTIONS` env var), so local `npm run dev`
and `npm run build` are unaffected and still serve from the root path.

## Next Phases (not yet built)

Per the original requirements, still outstanding:

- Database persistence (PostgreSQL/MongoDB) for leads and chatbot conversations —
  currently leads go to Formspree but aren't stored anywhere queryable
- Admin dashboard (inquiries, replies, service/project management, image uploads,
  partner logo management, chatbot conversation log, Excel export)
- Admin authentication
- LLM-backed chatbot responses + human escalation queue
- Google Analytics integration
