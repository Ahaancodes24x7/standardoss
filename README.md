# Standard Guide AI

Build a complete web app called StandardOS— an AI-powered

engine that reads product descriptions, technical specs, or tender documents

and recommends the relevant Indian Standards (BIS), with multilingual support

and explainable citations back to the exact clause. Target users are

procurement officers, manufacturers, and compliance teams who currently spend

weeks manually searching BIS catalogs.

=====================================================

DESIGN SYSTEM (apply consistently across every screen)

=====================================================

Avoid the typical "AI startup" template look entirely — no dark gradient hero,

no giant sans-serif headline with three icon-feature-grid, no neural-network

line art, no purple/blue gradient blobs, no robot icons.

- Typography: serif-first for headlines and section titles — Georgia or a

  Georgia-style serif (fallback stack: Georgia, "Times New Roman", serif).

  Pair with a clean humanist sans for body/UI copy and data-dense areas

  (tables, form fields). Overall feel: a governance/policy document crossed

  with a premium product — editorial, not "SaaS template."

- Glassmorphism: frosted-glass panels (backdrop-blur, semi-transparent

  white/off-white fills, soft 1px borders) for cards, nav bar, modals, and

  content containers, layered over a subtle textured or soft-gradient

  background — never flat white.

- Motion: purposeful hover states — gentle lift/scale + deepening shadow on

  cards and buttons, glass panels brightening slightly on hover. Smooth

  scroll-triggered fade/slide-ins. No bounce, no cartoonish easing.

- Color palette: restrained, institutional-premium. Deep navy or charcoal,

  warm off-white/parchment background, one muted accent (gold or deep

  forest green) reserved for CTAs, active states, and highlighted matches.

  No neon, no default Tailwind indigo/violet.

- Iconography/imagery: lean into document and certification motifs — subtle

  line-drawings evoking stamped seals, ledger grids, ruled document lines —

  used sparingly, never as generic tech clipart.

- Fully responsive throughout; every screen below needs a working mobile

  layout, not just the landing page.

=====================================================

APP STRUCTURE — build ALL of the following as real, connected pages/routes

=====================================================

1. LANDING PAGE (/)

   - Hero: serif headline making the promise concrete ("From tender document

     to certified standard, in seconds — not weeks"), one-line explainer,

     and a glass-panel mockup of a sample query -> ranked results with a

     cited clause snippet, so the value prop reads before any scrolling.

   - "How it works" section styled as a document trail (query -> retrieval

     -> cited standard) — not generic numbered icons.

   - Live-feeling demo teaser panel: mock tender excerpt on one side,

     glass-panel result cards on the other (IS number, title, highlighted

     clause, "why this standard" one-liner).

   - Multilingual callout: same query/result pair shown in English and Hindi

     side by side.

   - CTA driving to /search (or /signup if you want gated access).

   - Minimal serif-wordmark footer.

2. SEARCH / QUERY PAGE (/search)

   - Primary interface: a large glass-panel search bar supporting free text,

     with a secondary "paste tender excerpt" textarea mode and a file-upload

     mode (PDF/doc) — tabbed or toggled, not three separate pages.

   - Language selector (English / Hindi at minimum; structure it so more

     languages can be added later).

   - Results list: each result is a glass card showing IS standard number +

     title, a relevance score or confidence indicator, a highlighted excerpt

     of the matching clause, and an expandable "why this was recommended"

     explanation panel (this is the explainability feature — don't skip it,

     it's the core differentiator).

   - Filters sidebar: standard category/domain, year, language.

   - Empty state and loading state should match the design system (glass

     skeleton loaders, not generic spinners).

3. STANDARD DETAIL PAGE (/standard/:id)

   - Full metadata for a single IS standard: number, title, scope, related/

     cross-referenced standards (as linked chips), certification bodies,

     and the specific clause(s) that matched the originating query if the

     user arrived via search.

   - "Related standards" section using the cross-reference graph.

4. DASHBOARD (/dashboard) — for a logged-in procurement officer

   - Recent searches / saved queries.

   - Bookmarked standards.

   - Usage stats (searches this month, most-matched categories) shown as

     understated data cards, not flashy charts — keep the serif/glass

     language consistent even in data viz.

5. ADMIN / CORPUS VIEW (/admin) — lightweight, can be simpler styling

   - Table of indexed standards (title, number, language, last updated).

   - Placeholder "upload new standard" and "re-index corpus" actions (UI

     only is fine — wire up mock handlers, no real backend needed yet).

6. ABOUT / METHODOLOGY PAGE (/about)

   - Plain-language explanation of the retrieval approach (hybrid semantic +

     keyword search over the BIS corpus, multilingual embeddings, citation

     grounding) — written for a non-technical procurement audience, still in

     the serif editorial voice, not a technical README dump.

7. AUTH (/login, /signup)

   - Simple glass-panel forms consistent with the rest of the design system,

     no separate visual style.

=====================================================

DATA / STATE (mock for now, structured for a real backend later)

=====================================================

- Model a Standard as: { id, number, title, scope, category, language,

  clauses: [{ id, text, section }], relatedStandardIds: [] }.

- Model a SearchResult as: { standard, matchedClause, confidenceScore,

  explanation }.

- Use realistic mock data (5–10 sample standards with real-sounding IS

  numbers and plausible clause text) so every page looks populated and

  believable in a demo, not empty or lorem-ipsum'd.

=====================================================

NAVIGATION

=====================================================

Persistent glass-panel top nav across all pages: wordmark, Search, Dashboard,

About, and a language toggle, collapsing to a mobile menu below ~768px.

Build this as a cohesive multi-page app with shared design tokens (colors,

fonts, glass panel styles) defined once and reused everywhere — not

recreated per page. Start with the landing page and search page fully

built out since those carry the demo; dashboard/admin/about can be

slightly lighter-weight but still on-brand.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://standardoss.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d5affa74-0e88-4716-a787-95e0b3966af0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
