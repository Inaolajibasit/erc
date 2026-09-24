# Project Decisions

Keep a chronological list.

---

## D001 — Website positioning

ERC will be positioned as a Lagos community and culture brand built around running, rather than simply a fitness organisation.

Reason:
This better reflects the intended experience and creates stronger differentiation.

---

## D002 — Creative direction

Primary creative platform:

RUN THE CITY.

Primary headline:

WE RUN LAGOS.

---

## D003 — Layout inspiration

Use Go Running reference for editorial structure.

Use First Light Run Club for kinetic interaction inspiration.

Neither reference should be cloned.

---

## D004 — Animation

GSAP + ScrollTrigger will handle major scroll-based sequences.

CSS handles basic UI interactions.

Reason:
Keeps animation architecture predictable and performant.

---

## D005 — Content architecture

Initial content will be stored in typed local data files.

Components should not hard-code content unnecessarily.

This allows later migration to Sanity or another CMS.
---

## D006 - Foundation and responsive shell (2026-09-23)
Keep App Router pages and the root layout server-rendered. Client boundaries are limited to the navigation and motion infrastructure. Retain Tailwind CSS 4 and next/font Geist/Geist Mono; use the documented light palette without automatic dark-mode inversion. The muted brand grey is reserved for nonessential decoration; secondary text uses a darker contrast-safe token.

Mobile navigation is an inline disclosure, not a modal: no focus trap or scroll lock. Escape closes it and returns focus to its trigger. Route changes and crossing the desktop breakpoint reset the menu.

## D007 - Motion lifecycle (2026-09-23)
GSAP's ticker drives one Lenis instance with autoRaf disabled, and Lenis updates ScrollTrigger. Native touch scrolling and native anchor navigation are retained. Navigation cancels inertia; effect cleanup removes listeners, ticker callbacks and the Lenis instance. No page transition animation is introduced in Phase 01.

Reduced motion skips Lenis entirely and disables CSS movement. useScopedAnimation uses GSAP matchMedia with a local scope and automatic reversion. Consumers must supply a stable callback and render content visibly before enhancement.

Integration references: https://github.com/darkroomengineering/lenis and https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/

## D008 - Section label interpretation (2026-09-23)
The latest Phase 01 request explicitly asks for SectionLabel. It is implemented as an h2/h3 section heading, with no kicker/preheader treatment, preserving DONTS.md. It is available but not inserted into the minimal homepage.

## D009 - Unconfirmed content (2026-09-23)
Local collections are typed and empty until approved content is supplied. Content records carry placeholder/confirmed status; unknown event dates, locations, distances and URLs can be null. No fake run programmes, counts, partners, quotations or registration destinations are published. Dates must include an explicit offset and display using Africa/Lagos.

## D010 - Validation limitation (2026-09-23)
The available browser runtime returned no connected browsers. HTTP route checks and responsive source review do not replace visual/interaction QA; that work remains explicitly open.

## D011 - Global shell and hero theme contract (2026-09-23)
The header is sticky, with a typographic ERC/ placeholder, centered desktop navigation and JOIN A RUN CTA. The CTA links to /runs until a real registration destination is supplied. Arrow artwork is a decorative SVG, not an emoji or external-link claim.

The future homepage hero opts in through data-nav-hero on a direct main child. CSS establishes initial overlap and transparent/light navigation; a lightweight scroll/resize observer hook changes the theme at the hero boundary. The current placeholder remains off-white. Opening mobile navigation forces the opaque editorial theme for readable links. Hero content and media are intentionally deferred.

## D012 - Mobile editorial navigation and shared styles (2026-09-23)
Retain the inline disclosure architecture, styled with large navigation rows, thin rules and an explicit Menu/Close control. It expands in document flow rather than covering the page as a modal. A viewport-bounded native scroll region supports short landscape screens; no focus trap or body lock is needed. Escape, focus exit, route changes and desktop breakpoint changes close the menu.

Shared container, typography, button and shell styles live in globals.css alongside the Tailwind theme. Responsive dimensions use the existing design-system gutters and 1440px maximum width. Theme/CTA/menu transitions are short CSS enhancements and disabled by reduced motion. No new dependencies or homepage sections were added.

## D013 - Cinematic hero and real assets (2026-09-23)
Use the supplied hero-video.mp4 and ERC_logo.svg rather than stock or invented artwork. Preserve the source, derive silent fast-start H.264 variants, and extract the poster from that same footage. Paths and crops live in data/hero.ts so later ERC footage requires no component changes. The full supplied wordmark remains available for later use; this task uses the compact mark.

## D014 - Stable responsive hero motion (2026-09-23)
Reserve the desktop scroll span in CSS and use a sticky stage instead of injecting a ScrollTrigger pin spacer after hydration. Animate the frame's scale only. Desktop uses a longer scrubbed shrink; mobile scrolls normally with a shorter, smaller shrink. The navbar switches to paper as frame margins are exposed. Reduced motion removes the extra span and uses a static poster with no video source.

## D015 - Hero content and accessible playback (2026-09-23)
Use the exact hero copy requested in this task. Supporting metadata sits below the main heading, not as a kicker. JOIN THE NEXT RUN links to the existing Runs placeholder until registration details arrive. The video has an explicit Play/Pause control and pauses off-screen/in hidden tabs. A flat scrim supports readability without a gradient. Browser contrast, measured layout shift and overflow remain unverified because no browser is connected.

## D016 - Manifesto composition and content (2026-09-23)
Place Manifesto immediately after Hero. EKO sits high left, portrait media occupies the right, and RUNNERS anchors the lower composition. The supporting paragraph is exactly the user's supplied text. RUN WITH US links to /runs. Desktop uses twelve columns; mobile uses six, retaining side-by-side copy and portrait with a lower full-width word and offset CTA. No cards, preheaders, additional marketing copy or invented member identity are introduced.

Use supplied image (20).jpg: a runner in black kit with an ERC badge. Preserve the original and serve a 1200x1600 WebP derivative with Next/Image. A semantic h2 names the section; the two visually positioned words are decorative duplicates hidden from assistive technology.

The Go Running reference image is still absent from the inspected repository and REFERENCES.md remains unpopulated. Follow the documented editorial principles without claiming a direct visual comparison.

## D017 - Manifesto motion (2026-09-23)
GSAP/ScrollTrigger scrubs small vertical translations of whole words and the image inside its clipped portrait frame. Desktop EKO travels 32px and RUNNERS 16px across the full section scroll; mobile uses 12px and 6px. Image travel is 4% with 8% overscan to prevent exposed edges. Body text and CTA stay stationary. No opacity entrances, pinning, character splitting or horizontal motion. MatchMedia reverts effects on breakpoint/preference changes and unmount. Browser validation remains pending; lint, TypeScript, build and HTTP content/asset checks passed.

## D018 - Schedule-derived Next Run (2026-09-23)
Build Next Run from the supplied `run schedule.txt`, not hard-coded component copy. The schedule describes a Saturday Community Run at 06:30am, 5–10km, relaxed/conversational and all levels, with Falomo Square, Ikoyi listed for the Ikoyi/VI crew. Since no year is supplied, the current project date resolves the September record to 2026-09-26. This is a schedule-derived content decision and must be replaced when a new schedule is published.

`getNextUpcomingEvent` selects the soonest future `startsAt` from the typed collection. It is deterministic on the server and does not use the browser clock to choose a different record during hydration. The client countdown initializes to `00 : 00 : 00 : 00` in the server-rendered markup, then starts ticking in an effect, avoiding time-dependent hydration mismatches. The timer clamps at zero and the section has a no-upcoming fallback.

The homepage is revalidated every 60 seconds so selection is refreshed after an event passes without a new deployment. A long-lived browser tab still displays the selected event until its route data is refreshed; the countdown safely clamps at zero.

## D019 - Next Run composition (2026-09-23)
Use the supplied group photograph as a full-width, darkened visual field; place the event name, four-part countdown, supporting details and CTA within one sparse editorial overlay. Timer changes use a 240ms opacity/vertical nudge, not a flip clock. The data image includes intrinsic dimensions and is served through Next/Image. Desktop uses five detail columns; mobile uses two columns. No fake counts, testimonials, partner claims or additional event facts are introduced.

## D020 - Run Formats programme model (2026-09-23)
Build the section as an editorial programme index titled RUN WITH EKO. The four supplied categories and exact programme descriptors live in `data/run-types.ts`; the component owns no programme facts. `RunType` now includes a level, details array and optional typed media asset so later schedules or CMS records can replace values without changing the layout.

Desktop pairs a sticky media panel with a ruled list. Hovering, focusing or pressing a row selects its media, but all essential content remains in the row itself. Mobile keeps a vertical list and selection through tap/focus. Track Lab uses the supplied track video; the other entries use supplied photographs. The preview is decorative and respects reduced motion by disabling video autoplay. There are no generic cards, icons, fake stats or hover-only information.

## D021 - Moving Lagos media tracks (2026-09-23)
Moving Lagos uses a typed `MovingMedia` archive model with placeholder status and replaceable media metadata. The section renders two clipped horizontal tracks: the first scrubs left and the second scrubs right against page scroll, using GSAP transform-only motion with `invalidateOnRefresh` so layout changes do not produce stale distances. The track viewport owns overflow to prevent accidental document width expansion.

Supplied photographs and running clips are used until confirmed ERC archive metadata is available. Videos use `preload="none"`, load when near the viewport, play only while visible, and pause when leaving it. Reduced-motion users receive static tracks and videos remain unloaded. Mobile uses narrower rows so the section does not create an extreme interaction.

## D022 - People of Eko profile treatment (2026-09-23)
People of Eko uses a typed member profile model with portrait, running history, favourite distance and answer fields. Current records are explicitly `placeholder` and visibly labelled as sample profiles so invented identities and quotes cannot be mistaken for ERC member stories.

The desktop presentation uses a portrait-led three-column index where hover and focus enhance the active image without hiding profile information. Mobile converts the same profiles into a horizontal snap rail with tap selection, keeping the interaction usable without hover. No carousel autoplay or generic testimonial card treatment is used.

## D023 - Community statistics data boundary (2026-09-23)
Statistics are represented by typed `CommunityMetric` records with an explicit source field (`manual`, `cms`, or `api`). Current values are development placeholders and are labelled in the rendered section; they must be replaced before publication. The presentation is an editorial ruled strip rather than dashboard cards. Count-up animation starts only when a metric enters the viewport and does not change the server-rendered data model.

## D024 - Run Your City route visualisation (2026-09-23)
Run Your City uses typed placeholder route records with SVG paths and marker coordinates. Island and Mainland are selectable route groups, but all labels and geometry are explicitly development placeholders until official ERC routes are supplied. The visual is an abstract line composition rather than an embedded map service. Path drawing is CSS-based and disabled for reduced-motion users; mobile keeps the same two-group interaction while simplifying the route list.

## D025 - Community Gallery composition (2026-09-23)
The homepage gallery uses typed `GalleryItem` records with replaceable image and metadata fields. It is composed as a deliberate grid of one dominant landscape, smaller paired frames and a portrait offset, with whitespace and fixed placement rather than masonry packing. Items reveal gently when entering the viewport and scale slightly on hover/focus; reduced-motion users receive the final state immediately. The homepage links to `/community` for the larger gallery experience.

## D026 - Partnership placeholder boundary (2026-09-23)
Partnerships use the existing typed `Partner` model and a restrained text-logo strip until approved ERC partner identities and logo assets are supplied. Placeholder entries are visibly labelled and link to the dedicated `/partners` route, preserving the architecture for later partner detail and contact content without inventing relationships or contact details.

## D027 - Homepage closing sequence (2026-09-23)
The homepage closes with a full-bleed supplied community photograph, oversized CTA typography and a `/runs` action before handing into the global footer. The footer carries oversized cropped EKO / RUN LAGOS typography, followed by minimal navigation and utility links. A restrained darkening layer supports contrast without a large gradient treatment; mobile uses a separate crop and reduced-motion CSS keeps the sequence static.

## D029 - ERC typography and accent implementation (2026-09-23)
Implement the approved design-system update with Bebas Neue loaded through `next/font/google`, Geist retained for body/UI copy, and Geist Mono retained for technical metadata. Set the accent token to `#C95941`. Display bold and italic are available as deliberate hierarchy utilities; they are applied selectively rather than globally to avoid flattening the editorial type system.

## D031 - Community page composition (2026-09-23)
The Community page reuses the typed People of Eko, statistics, gallery and event layers inside a dedicated narrative rather than creating a corporate member directory. Chapters are a separate typed placeholder collection until ERC supplies official areas. The page uses an editorial hero, manifesto, portrait-led profiles, asymmetric gallery, recent event links and a final Join CTA; mobile prioritizes the hero, short copy and portrait crops.

## D033 - About page narrative (2026-09-24)
About is presented as an editorial culture story instead of corporate mission cards. Typed story, value, team and timeline records live in `data/about.ts`; team and founding details remain explicitly placeholder. The page uses large typography, archival photography, ruled value/timeline lists and a mobile horizontal founder portrait treatment, with no invented biographies or milestones.

## D034 - Partners conversion page (2026-09-24)
The Partners page separates conversion structure from confirmed relationship data. `data/partnerships.ts` owns partnership formats, reach placeholders and an empty confirmed-collaboration collection; no brand logos, campaign claims, attendance or engagement figures are rendered as real. The page uses premium editorial typography, ruled formats, an asymmetric image gallery and an accent CTA for brand-facing conversion.

## D035 - Circular gallery experiment (2026-09-24)
Use the supplied OGL CircularGallery as the default-motion presentation for the homepage Gallery, mapping existing typed gallery images and captions into its item API. Keep the previous asymmetric image layout as the reduced-motion fallback so essential archive content remains available without WebGL interaction. No remote placeholder images are used; labels use the local Bebas Neue display system.

## D032 - Events architecture separate from Runs (2026-09-23)
Events use a dedicated `ClubEvent` model and route family so larger culture and lifestyle experiences do not inherit the recurring Runs programme semantics. The index uses category tabs, a featured poster-like event and asymmetric upcoming/archive modules. Detail pages switch by status: upcoming events prioritize date/location/registration, while completed events prioritize recap media and future-event discovery. All current records are development placeholders; ticket prices, capacities, partners, attendance and official dates remain unset unless supplied.

## D030 - Runs index and detail architecture (2026-09-23)
Runs are rendered from the typed event collection and separated into featured upcoming, this month, and past sections. Filtering stays in a client island limited to the index controls; the route and event records remain server-provided to avoid hydration-dependent date selection. Detail pages use static params from the same collection, show a countdown only for future records, and label incomplete schedule fields instead of inventing ERC facts. The mobile detail layout puts media, date/time, distance, level, meeting point and CTA in the first viewport sequence.

## D036 - Mobile navigation dismissal (2026-09-24)
The mobile menu uses a fixed panel below the sticky header with a separate dimmed backdrop. The backdrop is a real button so touch users can dismiss the menu by tapping outside it; Escape, focus loss and navigation links retain their existing close behavior. The panel is viewport-bounded with contained scrolling to avoid moving the underlying page while the menu is open.

## D028 - Homepage performance audit (2026-09-23)
Preserve signature motion while limiting media work to visible content. Run Types video previews no longer rely on unconditional autoplay: they use `preload="none"`, an intersection observer, and explicit pause/disconnect cleanup. Moving Lagos cancels delayed refresh work during unmount. Existing GSAP matchMedia reverts, Lenis ticker removal, Hero video visibility listener cleanup, Gallery observer cleanup and Countdown timer cleanup were reviewed and retained. Supplied raster media continues through Next/Image with responsive sizes; changing the visual system or removing the main scroll motion was not justified.
