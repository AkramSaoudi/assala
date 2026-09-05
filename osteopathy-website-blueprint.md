# Osteopathy Clinic — Premium Conversion Website
## Complete Figma-Ready Build Blueprint

> **Scope & assumptions.** Built for a practitioner-led osteopathy clinic in the greater Algiers market (bilingual French/Arabic, WhatsApp-first, mobile-dominant, cash-friendly). French is the primary on-page language; Arabic (RTL) is a parallel locale. Everything below is specified so a UI/UX designer can build directly in Figma without further input. Placeholder copy is provided in French where it appears on-page; replace bracketed `[…]` values with real clinic data.

---

## 1. Website Strategy

### Business goals
1. Convert profile/search visitors into booked appointments (primary revenue driver).
2. Establish clinical credibility and reduce category confusion ("what osteopathy treats").
3. Build a contactable lead list (WhatsApp + email) for nurture and recall.
4. Win local discovery (Google Maps + directories + organic) in target communes.
5. Increase average patient value via packages, perinatal/pediatric niches, and retention.

### User goals
- Quickly understand *what is treated* and *whether it applies to me*.
- Confirm the practitioner is qualified and trustworthy.
- See price and location before committing.
- Book in the fewest possible taps, ideally via WhatsApp.
- Get reassurance ("does it hurt? is it safe for my baby/pregnancy?").

### Conversion goals (the events the site is engineered to produce)
| Priority | Macro / micro conversion | Trigger surface |
|---|---|---|
| P0 | **WhatsApp booking click** (pre-filled message) | Sticky bar, hero, every section CTA, floating button |
| P0 | **Online scheduler "rendez-vous" started/completed** | Hero, Booking page, sticky bar |
| P1 | **Phone call tap** (mobile) | Sticky bar, Contact, footer |
| P1 | **Lead-magnet download** (email/WhatsApp opt-in) | Blog, condition pages, exit-intent |
| P2 | **Directions / map open** | Contact, footer, location pages |
| P2 | **Review read / Google profile open** | Testimonials, homepage trust strip |

### KPIs
- **North-star:** confirmed appointments / month from web.
- **Conversion rate:** sessions → booking action (target ≥ 6–9% mobile).
- **WhatsApp click-through rate** from homepage (target ≥ 12%).
- **Booking funnel completion** (scheduler started → confirmed).
- **Lead-magnet opt-ins / month.**
- **Local pack ranking** for "ostéopathe [commune]" + Google review count/rating.
- **Bounce on condition pages** (< 45%) and **scroll depth** to first CTA.
- **Returning-patient rebooking rate.**

---

## 2. Sitemap

```
HOME
├── À propos (About) ─────────────── practitioner bio, credentials, philosophy, clinic tour
├── Ostéopathie (Services) ───────── hub
│   ├── Ostéopathie structurelle
│   ├── Ostéopathie crânienne
│   ├── Ostéopathie viscérale
│   ├── Femme enceinte & post-partum
│   ├── Bébé & enfant (pédiatrique)
│   └── Ostéopathie du sport
├── Que traite-t-on ? (Conditions) ─ hub
│   ├── Mal de dos / lombalgie
│   ├── Cervicalgie & torticolis
│   ├── Sciatique
│   ├── Maux de tête & migraines
│   ├── Troubles digestifs
│   ├── Douleurs de grossesse
│   └── Coliques & sommeil du nourrisson
├── Tarifs (Pricing)
├── Avis patients (Testimonials)
├── Blog / Conseils ──────────────── condition-led articles + lead magnets
│   └── [article slug]
├── Contact ──────────────────────── map, hours, WhatsApp, form, parking/access
├── Réserver (Online Booking) ─────── scheduler + WhatsApp + phone
└── [Location pages] ─────────────── /osteopathe-[commune] (SEO landing pages)

Global: FR ⇄ AR language switch · Sticky booking bar · Floating WhatsApp · Footer with NAP, hours, social, map
Legal: Mentions légales · Politique de confidentialité
```

**Navigation rule:** primary nav max 6 items — `Accueil · Ostéopathie · Que traite-t-on ? · Tarifs · Avis · Contact` — with a high-contrast **Réserver** button pinned far right (and inside the sticky bar on scroll).

---

## 3. User Flows

### 3.1 New patient booking flow (primary)
```
Entry (IG bio link / Google / ad)
   → Homepage hero: headline answers "what we treat" + 2 CTAs [Réserver] [WhatsApp]
   → (optional) scans Trust strip → Services → Testimonials (reassurance loop)
   → Taps Réserver
        ├─ Path A (preferred, lowest friction): WhatsApp pre-filled message
        │     "Bonjour, je souhaite un rendez-vous pour [motif]" → human confirms slot
        └─ Path B: Online scheduler
              → select service → select date/time → enter name + phone
              → confirm → automated WhatsApp/SMS reminder
   → Confirmation screen: address, map, what-to-bring, "ajouter au calendrier"
   → Reminder 24h before (automated)
```
**Design requirement:** never more than **2 taps** from any page to a booking action. Scheduler form ≤ 4 fields (service, date/time, name, phone). No mandatory account creation.

### 3.2 Returning patient flow
```
Entry → recognizes brand → Sticky bar "Réserver" (always visible)
   → Path A: one-tap WhatsApp ("Rebonjour, je voudrais reprendre rendez-vous")
   → Path B: scheduler with "Patient déjà venu ?" toggle → phone lookup pre-fills details
   → Optional: /espace-patient (Phase 2) showing next available + last visit
```
Add a **"Reprendre rendez-vous"** quick action in footer + post-visit WhatsApp recall handled by the practice (recall is a retention KPI).

### 3.3 Contact flow
```
Entry → Contact (or footer)
   → Choice grid: [WhatsApp] [Appeler] [Itinéraire] [Formulaire]
   → Form (name, phone, motif, message) → submit
        → instant on-page success state ("Nous répondons sous [X]h")
        → routes to clinic WhatsApp/email backend
   → Map + hours + parking/access notes always visible
```
Form is **never** the only contact path — WhatsApp/phone sit above it.

### 3.4 Emergency / urgent inquiry flow
```
Any page → "Douleur aiguë ?" micro-link in header utility bar / Contact top
   → Urgent panel:
        - Clear scope statement: osteopathy is NOT for medical emergencies
        - Red-flag triage copy: "En cas d'urgence vitale, appelez le 14 / SAMU (ou urgences locales)."
        - For acute (non-emergency) pain: priority WhatsApp line + "créneaux du jour" if available
   → CTA: [WhatsApp prioritaire] [Appeler]
```
**Safety/ethics:** the urgent flow must explicitly redirect true medical emergencies to local emergency services and never imply osteopathy substitutes for emergency care. Display local emergency numbers; confirm the correct ones before launch.

---

## 4. Homepage Wireframe — section by section (top to bottom)

> Grid: **12-col desktop (max-width 1200px, 80px gutters)**, **8-col tablet**, **4-col mobile (16px margins)**. Vertical rhythm in multiples of **8px**. Section vertical padding: desktop 96–120px, mobile 56–64px.

### 4.1 Hero
- **Layout:** left 55% copy, right 45% image (practitioner with a patient, warm, real — not stock skeleton). Mobile: image below headline OR as a soft background with overlay.
- **Eyebrow:** `Ostéopathe D.O. à [Commune], Alger`
- **H1 (Fraunces, 48–60px desktop):** `Soulagez vos douleurs, retrouvez votre mobilité.`
- **Subhead (Inter 18px):** one line naming top conditions: `Dos, nuque, sciatique, grossesse, bébé — une prise en charge douce et personnalisée.`
- **Dual CTA:** primary `Réserver un rendez-vous` (amber, solid) + secondary `WhatsApp` (outline, WhatsApp glyph).
- **Micro-trust row under CTAs:** `★ 4,9/5 sur Google · +[X] patients · Sur rendez-vous 6j/7`
- **Signature motif:** thin vertical "alignment line" running down the left margin connecting hero to next section.

### 4.2 Trust indicators (immediately below hero — do not bury)
- Horizontal strip, 4 items, icon + label:
  `Diplômé(e) D.O.` · `+[X] ans d'expérience` · `[Assoc./registre]` · `★ 4,9 Google ([N] avis)`
- Optional logo row (associations, insurers/mutuelles if applicable).
- Background: subtle sage tint to separate from hero.

### 4.3 Services
- **Section header:** eyebrow `Nos prises en charge` + H2 `Une ostéopathie adaptée à chaque patient`.
- **Card grid:** 3×2 desktop / 2-col tablet / 1-col mobile. Each **service card**: icon, title, 1-line benefit, `En savoir plus →`.
  1. Structurelle (dos, articulations)
  2. Crânienne (maux de tête, stress)
  3. Viscérale (digestion)
  4. Grossesse & post-partum
  5. Bébé & enfant
  6. Sport
- Cards link to the service detail pages.

### 4.4 Benefits ("Pourquoi consulter")
- **Layout:** 2-col — left image (clinic/hands), right 3–4 benefit rows with icon + short text.
  - Approche douce et non médicamenteuse
  - Bilan personnalisé à chaque séance
  - Prise en charge globale (cause, pas seulement symptôme)
  - Conseils & exercices pour la maison
- End with inline CTA `Prendre rendez-vous`.

### 4.5 About the osteopath (credibility block)
- **Layout:** left portrait (real photo, warm), right copy.
- Name + `Ostéopathe D.O.`, 2–3 sentence bio, credential bullets (formation, années, spécialités), signature/CTA `Découvrir mon parcours →` to About page.
- This block does heavy trust lifting in a low-awareness market — give it room.

### 4.6 Testimonials
- **Carousel** (3 visible desktop, 1 mobile, swipeable, autoplay-pausable). Each card: ★ rating, quote (≤ 240 chars), first name + condition/context, "Avis Google" badge.
- Header: `Ils nous font confiance` + link `Voir tous les avis (Google) →`.
- Include a **Before/After success-story** variant (text-based outcome: "Après 3 séances, …") — see §6.6 for the visual/ethical rules.

### 4.7 FAQ
- **Accordion**, 6–8 questions, condition-agnostic + booking-related:
  - L'ostéopathie, c'est pour quoi ?
  - Est-ce que ça fait mal ?
  - Combien de séances faut-il ?
  - Est-ce adapté aux femmes enceintes / aux bébés ?
  - Faut-il une ordonnance ?
  - Quels sont les tarifs ? / Remboursement mutuelle ?
  - Comment se déroule la première séance ?
- Each answer ends with a soft CTA where relevant. FAQ doubles as FAQ structured data (see §9).

### 4.8 Booking CTA (closing band)
- Full-width petrol-teal band, centered.
- H2 (light on dark): `Prêt à vous sentir mieux ?`
- Sub: `Réservez en ligne en 1 minute, ou écrivez-nous sur WhatsApp.`
- CTA pair: `Réserver maintenant` (amber) + `WhatsApp` (ghost-light).
- Reassurance line: address + `Sur rendez-vous · [horaires]`.
- **Footer** follows: NAP block, hours table, mini-map, nav columns, language switch, social, legal.

---

## 5. Required Pages — page intents & key modules

| Page | Primary objective | Must-have modules |
|---|---|---|
| **Home** | Convert + orient | Hero, trust strip, services, benefits, about, testimonials, FAQ, closing CTA |
| **À propos** | Trust / credibility | Portrait, story, credentials timeline, philosophy, clinic tour gallery, CTA |
| **Ostéopathie (hub)** | Route to right service | Intro, 6 service cards, "comment se déroule une séance", CTA |
| **Service detail** (×6) | Convert by use-case | What it is, who it's for, conditions, session flow, FAQ, related testimonials, CTA |
| **Que traite-t-on ? (hub)** | SEO + self-qualify | Condition grid, symptom-led copy, CTA |
| **Condition detail** (×7) | Capture symptom search | Symptom explainer, how osteo helps, what to expect, FAQ, lead magnet, CTA |
| **Tarifs** | Remove price friction | Clear price table, séance types, mutuelle/remboursement note, payment methods, CTA |
| **Avis patients** | Social proof | Google rating summary, filterable testimonial grid, success stories, CTA |
| **Blog / Conseils** | SEO + lead gen | Article cards by category, featured lead magnet, newsletter/WhatsApp opt-in |
| **Article** | Educate + capture | Long-form, TOC, inline CTA, lead magnet, related articles, author box |
| **Contact** | Enable contact | Choice grid (WhatsApp/call/itinéraire/form), map, hours, access/parking, urgent panel |
| **Réserver** | Book | Scheduler embed, service picker, WhatsApp + phone fallback, what-to-bring, map |
| **Location page** (×N) | Local SEO | Commune-specific H1, local copy, map, directions, reviews, CTA |

---

## 6. Conversion Features (spec)

### 6.1 Sticky booking button / bar
- **Desktop:** `Réserver` button persists in header (becomes condensed sticky header on scroll past hero).
- **Mobile:** **bottom sticky bar**, full-width, two segments: `📅 Réserver` (amber, 60%) + `WhatsApp` (green, 40%). Height 56px, safe-area inset respected, always visible. This is the single most important mobile conversion element.

### 6.2 WhatsApp integration
- **Floating button** bottom-right (above sticky bar on mobile, standard FAB on desktop), WhatsApp green, 56px.
- All WhatsApp links are **click-to-chat with pre-filled, context-aware text**, e.g. `https://wa.me/[number]?text=Bonjour%2C%20je%20souhaite%20un%20rendez-vous%20pour%20[contexte]`. Condition pages pass the condition as context.

### 6.3 Online appointment scheduling
- Embedded scheduler (e.g. clinic's practice-management widget / a calendar tool). Requirements: service picker, real-time availability, ≤ 4 fields, no forced account, automatic **WhatsApp/SMS reminder**, confirmation screen with map + what-to-bring + add-to-calendar.
- Graceful fallback: if widget fails to load, show WhatsApp + phone prominently.

### 6.4 Lead capture forms
- **Lead magnet** (gated PDF, e.g. *"5 exercices contre le mal de dos"*): fields = prénom + WhatsApp/email; double-purpose opt-in checkbox for tips.
- **Contact form:** prénom, téléphone, motif (select), message. On-page success state with expected response time.
- **Exit-intent / scroll-90%** lightweight lead-magnet prompt (desktop only; on mobile use an inline card to avoid intrusiveness).
- Privacy: explicit consent line; no personal data in URL params.

### 6.5 Testimonials carousel
- Component spec in §7. Pulls from a maintained list + Google review badge. Autoplay 6s, pause on hover/focus, swipe on touch, keyboard-navigable, `aria-live` polite.

### 6.6 Before/after success stories
- **Format:** outcome-narrative cards ("Motif → Prise en charge → Résultat après N séances"). 
- **Visual before/after** (posture photos) only with **written patient consent**, faces optional/blurred, and an honesty disclaimer (`Résultats individuels, non garantis`). 
- **Ethics/compliance:** no medical claims of cure; avoid guaranteeing outcomes. Keep within local advertising rules for health practitioners. Prefer narrative + star rating over clinical-looking imagery.

---

## 7. Design System

### 7.1 Color palette
| Token | Hex | Use |
|---|---|---|
| `--ink` | `#13211F` | Primary text, dark UI |
| `--teal-900` | `#0C2E2B` | Footer/closing band deepest |
| `--teal-700` | `#0E3B36` | **Brand primary** (header accents, dark sections) |
| `--teal-500` | `#1E5E57` | Links, secondary buttons, icon strokes |
| `--sage-200` | `#DCE6E0` | Section tint, card borders |
| `--sage-100` | `#EEF2EF` | Alt section background |
| `--paper` | `#FAF8F4` | **Page background** (warm, not sterile white) |
| `--white` | `#FFFFFF` | Cards |
| `--amber-500` | `#E2A33D` | **Primary action / CTA accent** (reserve only for actions) |
| `--amber-600` | `#C8862A` | CTA hover |
| `--wa-green` | `#25D366` | WhatsApp only |
| `--success` | `#2E7D5B` | Form success |
| `--error` | `#C0492F` | Form error |
| Text-on-dark | `#F3F1EB` | Copy on teal bands |

**Rule:** amber is *only* for primary actions; never decorative. WhatsApp green is *only* for WhatsApp. Teal is the brand spine. Contrast: all text/background pairs meet WCAG AA (verify amber-on-white for small text → use `--ink` text on amber buttons, not white).

### 7.2 Typography
- **Display:** **Fraunces** (variable, opsz on) — H1–H3, large quotes. Warm, premium, human.
- **Body/UI:** **Inter** — paragraphs, labels, buttons, nav.
- **Arabic (AR locale):** **IBM Plex Sans Arabic** (or Cairo) for both display and body; RTL mirrored layout.

| Role | Font | Desktop / Mobile | Weight | Line-height |
|---|---|---|---|---|
| H1 | Fraunces | 56 / 34 | 500 | 1.05 |
| H2 | Fraunces | 38 / 26 | 500 | 1.1 |
| H3 | Fraunces | 24 / 20 | 500 | 1.2 |
| Eyebrow | Inter | 13 / 12 | 600, +0.08em, uppercase | 1.2 |
| Body L | Inter | 18 / 16 | 400 | 1.6 |
| Body | Inter | 16 / 15 | 400 | 1.6 |
| Caption | Inter | 13 / 12 | 400 | 1.4 |
| Button | Inter | 16 / 16 | 600 | 1 |

Type scale ratio ≈ 1.25 (major third).

### 7.3 Buttons
| Variant | Fill | Text | Border | Radius | Height | Use |
|---|---|---|---|---|---|---|
| Primary | `--amber-500` | `--ink` | none | 12px | 52 | Réserver / book |
| Primary-dark | `--teal-700` | `#F3F1EB` | none | 12px | 52 | On paper sections |
| Secondary | transparent | `--teal-700` | 1.5px `--teal-500` | 12px | 52 | WhatsApp/outline |
| WhatsApp | `--wa-green` | `#0A2E1A` | none | 12px | 52 | WhatsApp only |
| Ghost-light | transparent | `#F3F1EB` | 1.5px `#F3F1EB` | 12px | 52 | On teal bands |
| Text link | — | `--teal-500` | — | — | — | Inline `En savoir plus →` |

States: hover (darken 8% / lift shadow), focus (2px `--amber-500` outline, 2px offset — visible for keyboard), active (scale .98), disabled (40% opacity). Min tap target 48×48.

### 7.4 Cards
- Radius **16px**, background `--white`, border `1px --sage-200`, shadow `0 2px 8px rgba(19,33,31,.06)`; hover `0 8px 24px rgba(19,33,31,.10)` + `translateY(-2px)`.
- Padding 24px (desktop) / 20px (mobile).
- **Service card:** icon (40px, teal stroke) → title (H3) → 1-line → text link.
- **Testimonial card:** stars → quote → avatar/initial + name + context → Google badge.
- **Condition card:** icon → title → symptom snippet → arrow.
- **Article card:** 16:9 image → category chip → title → meta (date · temps de lecture).

### 7.5 Icons
- **Style:** line icons, 1.75px stroke, rounded caps, 24px grid (Lucide/Phosphor-style). Stroke `--teal-500`; on dark `#F3F1EB`. Never filled/multicolor. Body-anatomy & care metaphors (spine, hand, baby, joint) drawn in the same line style for cohesion.

### 7.6 Spacing system (8px base)
`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 120`
- Section padding-Y: 96/120 desktop, 56/64 mobile.
- Card gap: 24. Inline element gap: 8–16. Max content width 1200px; text measure ≤ 70ch.

### 7.7 Elevation & radii
- Radii: buttons/inputs 12, cards 16, pills/badges 999, images 20.
- Shadows: `sm 0 2px 8px /.06`, `md 0 8px 24px /.10`, `lg 0 16px 40px /.14` (all `rgba(19,33,31,*)`).

---

## 8. Mobile Experience (mobile-first)

- **Breakpoints:** base ≤ 480 (design target), `sm 481–768`, `md 769–1024`, `lg ≥ 1025`.
- **Bottom sticky booking bar** (§6.1) is the anchor of the mobile UX — present on every page below the fold.
- **Floating WhatsApp FAB** sits 72px above the sticky bar so both are tappable.
- Hero: headline first, single-column, image as supportive band; both CTAs full-width stacked, amber on top.
- Nav collapses to hamburger; menu sheet includes `Réserver` (amber, full-width) at top and `WhatsApp` + `Appeler` quick actions.
- Tap targets ≥ 48px; thumb-zone CTAs; forms use correct input types (`tel`, `email`), large fields.
- Performance budget (Algerian mobile networks): LCP < 2.5s on 4G, images `webp/avif` + lazy-load, fonts `font-display: swap` + preload display face, total JS lean. Map and scheduler **lazy-loaded** on interaction (facade/click-to-load) to protect LCP.
- Carousel = swipe; accordion = full-width rows; sticky elements respect safe-area insets.

---

## 9. Local SEO Features

### 9.1 Location pages
- One indexable page per target commune: `/osteopathe-[commune]-alger` with unique H1 (`Ostéopathe à [Commune], Alger`), local copy (neighbourhoods, access, parking, transit), embedded map, local reviews, and a booking CTA. Avoid duplicate content — each page genuinely commune-specific.

### 9.2 Google Maps integration
- **Google Business Profile** is the priority asset: complete categories (Ostéopathe), hours, photos, services, Q&A; keep NAP identical to the site.
- Embed an interactive map on Contact + location pages (lazy-loaded facade). "Itinéraire" button deep-links to Google/Apple Maps.

### 9.3 Review integration
- Display live Google rating + count; link out to leave a review; surface selected reviews as testimonials. Add a post-visit WhatsApp flow asking happy patients to review (review velocity drives local rank).

### 9.4 Structured data (JSON-LD) recommendations
- `MedicalBusiness` / `MedicalClinic` (or `Physician`) with `name`, `address` (PostalAddress), `geo`, `telephone`, `openingHoursSpecification`, `priceRange`, `image`, `url`, `sameAs` (social).
- `Person` for the practitioner with `hasCredential`.
- `FAQPage` on Home + condition pages (mirrors the on-page FAQ).
- `Service`/`MedicalProcedure` on service pages; `BreadcrumbList` site-wide; `AggregateRating`/`Review` (only from genuine reviews, per Google policy — avoid self-serving review markup that violates guidelines).
- Multilingual: `hreflang` for FR/AR; localized `<title>`/meta per page; canonical tags.

---

## 10. Figma Deliverables (file structure to build)

Organize the Figma file into these pages:

1. **🎨 Foundations** — color styles, text styles, effect/shadow styles, grid styles, spacing tokens (as variables/local styles), iconography sheet.
2. **🧩 Components** — buttons (all variants × states), inputs/fields, cards (service/testimonial/condition/article), nav (desktop + mobile sheet), sticky booking bar, WhatsApp FAB, accordion item, carousel, footer, trust strip, language switch, badges/chips, map facade, scheduler frame. All built with **Auto Layout + variants + component properties**; expose text/icon/boolean props.
3. **📐 Wireframes (lo-fi)** — grayscale, every page from §5, desktop + mobile, to lock structure before visual.
4. **🖥️ Desktop (hi-fi)** — all pages at 1440 frame (1200 content).
5. **📲 Tablet (hi-fi)** — 768 frame.
6. **📱 Mobile (hi-fi)** — 390 frame, mobile-first source of truth.
7. **🔗 Prototype** — wired flows from §3 (new booking, returning, contact, emergency) with smart-animate transitions, overlay for nav sheet, scroll behavior for sticky bar; clickable WhatsApp/scheduler hotspots.
8. **📝 Handoff** — redlines, spacing annotations, JSON-LD notes, content matrix, FR/AR copy deck, asset export settings (`@1x/@2x`, webp).

**Component library:** publish Foundations + Components as a Figma **library** so all page frames consume shared styles/variables (enables global theming + the AR/RTL variant). Use **variables modes** for `FR`/`AR` and `light` (and optional `dark` footer) to switch direction/locale.

---

## 11. Competitor Inspiration — patterns to adopt

Synthesized from top-performing osteopathy/manual-therapy clinic sites and the specialist agencies that build them (HealthHosts, Osteohustle, EyeMedia, therapist-web specialists) plus award-style references on Webflow/Dribbble. Recurring winning patterns:

1. **Booking is omnipresent and frictionless** — 24/7 online scheduling with automated reminders; the best sites convert enquiries without manual back-and-forth. *Adopt:* sticky bar + scheduler + WhatsApp triad.
2. **Practitioner credibility is front-loaded** — registration numbers/credentials (e.g. GOsC in the UK), real photos, qualifications shown early. *Adopt:* trust strip directly under hero + dedicated About credibility block.
3. **Condition-led information architecture** — pages organized around what the patient *feels* (back pain, sciatica, headaches, posture) rather than internal jargon; "answers questions before patients ask." *Adopt:* full Conditions hub + symptom-first copy.
4. **Verified review integration** — Google reviews surfaced as social proof. *Adopt:* live rating + testimonial carousel + success stories.
5. **Mobile-first, fast, professional photography** — clean, human, calm; clinic environment shown to reduce anxiety. *Adopt:* real photography spec, performance budget.
6. **Educational depth = SEO + trust** — blog/condition content demonstrates clinical expertise and wins local search. *Adopt:* blog + lead magnets + structured data.

**What to do better than typical local competitors (Algiers context):** most don't claim or optimize a Google Business Profile, don't show prices, and route everything to a slow DM. Beating them is mostly about *price transparency + one-tap WhatsApp booking + active Google reviews* — relatively low effort, high local advantage.

---

## 12. Page-by-Page Build Blueprint (Figma-ready)

> For each page: frame order top→bottom, the component used, and key copy/props. Build mobile (390) first, then scale to 768/1440. All pages include global **header**, **sticky booking bar (mobile)**, **WhatsApp FAB**, and **footer** unless noted.

### 12.1 HOME
1. Header (nav + Réserver)
2. Hero — `Hero/Split`; H1, subhead, dual CTA, micro-trust row, image
3. Trust strip — `TrustStrip/4-item`
4. Services — `SectionHeader` + `Grid/3col` of `Card/Service` ×6
5. Benefits — `Split/ImageLeft` + `BenefitRow` ×4 + inline CTA
6. About teaser — `Split/PortraitLeft` + bio + credential bullets + link
7. Testimonials — `SectionHeader` + `Carousel/Testimonial`
8. Success story — `Card/Story` (before/after narrative)
9. FAQ — `SectionHeader` + `Accordion` ×7
10. Closing CTA band — `Band/Teal` + dual CTA
11. Footer — `Footer/Full`

### 12.2 À PROPOS
1. Page hero (slim) — eyebrow `À propos` + H1 `[Nom], votre ostéopathe à [Commune]`
2. Portrait + story — `Split/PortraitLeft`, 3–4 paragraphs
3. Credentials timeline — `Timeline` (formation, diplôme D.O., expériences, spécialités)
4. Philosophy — `Band/Sage` quote + 3 values cards
5. Clinic tour — `Gallery/3col` (real photos: salle d'attente, cabinet, table)
6. CTA band → Footer

### 12.3 OSTÉOPATHIE (Services hub)
1. Slim hero — H1 `Nos prises en charge`
2. Intro paragraph + `Grid/3col` of `Card/Service` ×6
3. "Comment se déroule une séance" — `Steps/3` (Bilan → Traitement → Conseils)
4. Mini-FAQ (3) + CTA band → Footer

### 12.4 SERVICE DETAIL (template ×6)
1. Slim hero — H1 `[Service]` + 1-line + CTA
2. "C'est quoi ?" — copy block
3. "Pour qui / quels symptômes" — `IconList`
4. Session flow — `Steps/3`
5. Related conditions — `Card/Condition` ×3 (links)
6. Testimonials (filtered) — `Carousel`
7. Service FAQ — `Accordion` ×4 (FAQ schema)
8. CTA band (WhatsApp prefilled with service context) → Footer

### 12.5 QUE TRAITE-T-ON ? (Conditions hub)
1. Slim hero — H1 `Que traite l'ostéopathie ?`
2. Symptom-first intro
3. `Grid/3col` of `Card/Condition` ×7
4. "Pas sûr(e) ? Écrivez-nous" — WhatsApp CTA
5. CTA band → Footer

### 12.6 CONDITION DETAIL (template ×7)
1. Slim hero — H1 `[Condition] : comment l'ostéopathie peut aider` + CTA
2. Symptom explainer — copy + `IconList` of signs
3. "Comment l'ostéopathie aide" — copy
4. "À quoi s'attendre" — `Steps/3`
5. Lead magnet — `Card/LeadMagnet` (gated PDF)
6. FAQ — `Accordion` (FAQ schema)
7. Related testimonials + CTA band (WhatsApp context = condition) → Footer

### 12.7 TARIFS
1. Slim hero — H1 `Tarifs`
2. `Table/Pricing` — séance adulte, enfant/bébé, grossesse, sport, suivi; durée + prix `[X DA]`
3. Mutuelle/remboursement note + accepted payment methods (espèces, [carte/CIB si dispo])
4. "Comment réserver" — `Steps/3`
5. FAQ tarifs (3) + CTA band → Footer

### 12.8 AVIS PATIENTS
1. Slim hero + `RatingSummary` (★ 4,9 · [N] avis Google)
2. `Grid` of `Card/Testimonial` (filter chips by service/condition)
3. Success stories — `Card/Story` ×2–3
4. "Laissez votre avis" — Google link
5. CTA band → Footer

### 12.9 BLOG / CONSEILS
1. Slim hero — H1 `Conseils & ostéopathie`
2. Featured lead magnet — `Banner/LeadMagnet`
3. Category chips + `Grid/3col` of `Card/Article`
4. WhatsApp/newsletter opt-in band → Footer

### 12.10 ARTICLE
1. Breadcrumb + H1 + meta (date · lecture)
2. Hero image (16:9)
3. Body (rich text, TOC on desktop sidebar), inline `CTA/Inline`
4. `Card/LeadMagnet` mid-article
5. Author box (`Mini/About`)
6. Related articles `Grid/3col` + CTA band → Footer

### 12.11 CONTACT
1. Slim hero — H1 `Contact & accès`
2. Urgent panel (collapsible) — emergency redirect copy + priority WhatsApp (§3.4)
3. Choice grid — `Card/Action` ×4: WhatsApp · Appeler · Itinéraire · Formulaire
4. `Form/Contact` (prénom, téléphone, motif, message) + success state
5. Map (lazy facade) + hours table + parking/access notes
6. Footer

### 12.12 RÉSERVER (Online Booking)
1. Slim hero — H1 `Réserver un rendez-vous`
2. Method toggle — `Tabs`: [En ligne] [WhatsApp] [Téléphone]
3. Scheduler embed (lazy) — service picker + calendar (≤4 fields)
4. "À apporter / déroulement" — `IconList`
5. Map + hours + confirmation-info note
6. Footer

### 12.13 LOCATION PAGE (template ×N)
1. Slim hero — H1 `Ostéopathe à [Commune], Alger` + CTA
2. Local intro (quartiers, accès, parking, transport)
3. Services quick grid + local testimonials
4. Map + directions + hours
5. CTA band → Footer

---

## 13. Build sequence (recommended)
1. Foundations + Components (library) → 2. Lo-fi wireframes all pages (mobile) → 3. Home hi-fi mobile → desktop → 4. Templates (service/condition) → 5. Remaining pages → 6. Prototype flows → 7. Handoff/redlines + FR↔AR variant.

---

*Replace all `[…]` placeholders with verified clinic data (name, credentials, address, phone/WhatsApp number, hours, prices, real photos, genuine reviews). Confirm local emergency numbers and health-advertising rules before publishing the urgent flow and any before/after content.*
