# Current Project State

Last updated: 2026-09-23

## Current phase
Phase 05 Run Formats implemented after Next Run. Browser visual and interaction QA remains pending.

## Implemented
- Next.js App Router, strict TypeScript, Tailwind CSS 4, Geist/Geist Mono and shared editorial tokens.
- Global responsive shell: Navbar, mobile editorial menu, Footer, Container, Button and semantic SectionLabel.
- Supplied ERC SVG logo replaces the temporary text wordmark; it switches between white-on-video and dark-on-paper.
- Homepage hero uses supplied footage with WE / RUN / LAGOS., the requested bottom metadata and JOIN THE NEXT RUN CTA.
- Desktop GSAP/ScrollTrigger shrink sequence over a CSS sticky stage; mobile has a shorter unpinned 4% shrink and separate video/crop.
- Off-white page is revealed around the scaled frame; the navbar switches to the editorial theme as that frame begins shrinking.
- Poster extracted from supplied footage, optimized with Next/Image. Flat 30% scrim, no gradient.
- Muted inline looping video with Play/Pause control. Playback pauses off-screen or in a hidden tab.
- Reduced motion shows the poster, skips video loading/autoplay, disables shrink motion and removes the extra desktop scroll span.
- Media paths and crop positions are centralized in data/hero.ts for asset replacement.
- GSAP/Lenis integration, reduced-motion utilities and typed local content collections.
- Runs, Community, Events, About and Partners remain explicitly labelled placeholder routes.
- Manifesto: oversized EKO / RUNNERS composition, exact supplied paragraph, portrait and RUN WITH US CTA.
- Desktop uses a twelve-column asymmetric grid; mobile retains a six-column composition with copy and portrait alongside each other and an offset CTA.
- Restrained GSAP whole-word vertical drift and image movement at different speeds. Copy and CTA stay still; reduced motion disables the effect. No fade-in or character animations.
- Manifesto copy and image configuration live in data/manifesto.ts; rendering and animation are separated into Manifesto.tsx and ManifestoMotion.tsx.
- Next Run is a full-width photography-led section using the supplied group photograph and a data-selected upcoming event.
- The schedule-derived Saturday Social event is represented in data/events.ts with the September 26, 2026 06:30 Africa/Lagos meetup at Falomo Square, Ikoyi, 5–10km and relaxed/all-levels details.
- Countdown is client-only after stable server markup, updates every second, uses DD : HH : MM : SS fields, and never renders a negative value. If the event list has no future record, a calm publication fallback replaces the countdown.
- Event image, labels, registration destination and event selection are data-driven; the component contains no run facts.
- Homepage revalidation is set to 60 seconds so the server can replace expired events from the collection without a deployment.
- Run Formats is a typed editorial programme index titled RUN WITH EKO, with Saturday Social, Track Lab, Night Run and Wellness & Events.
- Desktop uses one sticky photography/video panel beside a ruled list. Pointer hover enhances the selected media; each programme remains a keyboard and touch button with its level, detail and description visible.
- Mobile keeps the media panel above the vertical list and uses tap/focus selection instead of relying on hover.
- Track Lab can preview the supplied track video; reduced motion disables autoplay. Other programmes use supplied community photographs.

## Assets
- Original hero-video.mp4 preserved (about 8.12 MB; VP9 video plus audio).
- Derived silent, fast-start H.264 desktop MP4: 1600x900, 5,797,046 bytes.
- Derived silent, fast-start H.264 mobile MP4: 960x540, 2,823,835 bytes.
- Poster: 1600x900 WebP, 62,920 bytes, extracted at 20 seconds.
- ERC compact SVG and full wordmark files are supplied. Compact mark is used in the shell.
- Community photos and other clips have also been supplied; not yet mapped to later sections.
- Manifesto uses supplied image (20).jpg, preserved unchanged. Its derivative manifesto-portrait.webp is 1200x1600 and 112,690 bytes; lazy-loaded through Next/Image with responsive sizes.
- See HERO.md for replacement instructions and pending QA.

## Validation
- ESLint, route type generation, TypeScript and production build passed.
- Manifesto validation: homepage HTTP 200, correct Hero-to-Manifesto order, exact copy/CTA rendered, portrait HTTP 200. Desktop/mobile grid, image aspect ratio, motion bounds and reduced-motion cleanup reviewed in source.
- Next Run validation: homepage HTTP 200 with event title, schedule fields, CTA, countdown labels and image; optimized WebP returned HTTP 200. TypeScript, ESLint and production build passed.
- Homepage returned HTTP 200 with server-rendered hero, CTA, poster and logo references.
- Poster, SVG logo and both video URLs returned HTTP 200.
- Both generated video files fully decoded without errors; video range requests returned HTTP 206.
- Source-level stability review: viewport/minimum height reserved in CSS, absolute media, transform-only shrink, no hydration-time pin spacer, no 100vw wrapper.
- Moving Lagos validation: typed media data, two track render order, reduced-motion branch, lazy video observer, contained track overflow and transform-only ScrollTrigger motion reviewed in source.
- `npm.cmd run typecheck`, `npm.cmd run lint` and `npm.cmd run build` pass after Phase 06.
- Browser runtime returned no connected browsers. Measured CLS, horizontal overflow, live scrubbing smoothness, mobile crop, contrast over every video frame and keyboard QA are NOT verified.

## Phase 06 — Moving Lagos
- Added a typed `MovingMedia` archive model in `data/moving-lagos.ts` with clearly labelled placeholder metadata.
- Added `MovingLagos` with two opposing horizontal media tracks, supplied photography, and two optional running videos.
- GSAP/ScrollTrigger scrubs transform-only motion; clipped viewports prevent horizontal document overflow.
- Videos lazy-load near the viewport, play only while visible, and pause when leaving; reduced motion disables track transforms and video loading.
- Mobile uses compact media widths and the same editorial two-track composition without requiring a long horizontal gesture.

## Still outstanding
Hero, Manifesto, Next Run, Run Formats, Moving Lagos, People of Eko, Statistics, Run Your City, Gallery, Partnerships and Closing Sequence browser QA; real inner-page content; registration; content population; CMS; full SEO/social assets and performance audit.
PageTransition remains an unused pass-through placeholder.

## Content constraints
No invented counts, events, quotations or partners. Empty collections mean unknown.
JOIN THE NEXT RUN, JOIN A RUN and RUN WITH US lead to /runs, not a completed registration service.
The supplied schedule does not include a year; the current project date (2026-09-23) resolves the September Saturday Social record to 2026-09-26. Update the record when a new published schedule is available.
The temporary accent remains unconfirmed. Requested hero metadata is placed at the bottom, not used as a kicker.

## Phase 07 — People of Eko
- Added typed member fields for running history and favourite distance.
- Added a profile-led `PeopleOfEko` section with supplied portraits, oversized question typography and profile answers.
- All current member records are visibly labelled placeholder profiles/sample answers until ERC content is approved.
- Desktop hover/focus enhances portrait selection; mobile uses horizontal snap scrolling and tap selection.

## Phase 08 — Statistics
- Added typed `CommunityMetric` records and distance options in `data/stats.ts`.
- Added restrained editorial statistics strip with explicit development placeholder labels.
- Count-up values animate on viewport entry and remain data-driven for future manual, CMS or API sources.
- No dashboard cards or unverified ERC claims are presented as confirmed facts.

## Phase 09 — Run Your City
- Added typed placeholder route groups and SVG path geometry in `data/routes.ts`.
- Added `RunMap` with Island/Mainland tabs, abstract route lines, markers and placeholder route labels.
- Route drawing respects reduced motion, and the mobile layout simplifies the route index instead of shrinking a dense desktop map.
- No route is presented as an official ERC route.

## Phase 10 — Community Gallery
- Added typed placeholder gallery records with image metadata, event labels, location labels and hashtags.
- Added asymmetric editorial gallery composition with a dominant landscape, paired supporting images and portrait framing.
- Added subtle IntersectionObserver reveal and hover/focus image scaling with reduced-motion fallback.
- Added link to the larger `/community` page; no masonry wall treatment is used.

## Phase 11 — Partnerships
- Added typed placeholder partner records in `data/partners.ts`; no relationship is represented as confirmed.
- Added premium editorial partnership pitch, restrained horizontal placeholder logo strip and CTA linking to `/partners`.
- Existing `/partners` route remains the dedicated page architecture for future partner stories, logos and contact flow.

## Phase 12 — Closing Sequence
- Added full-bleed cinematic `FinalCTA` using supplied community photography and the requested closing statement.
- Added CTA linking to `/runs` and supporting copy with restrained readability treatment.
- Extended the global footer with oversized cropped EKO / RUN LAGOS typography and requested navigation labels.

## Responsive homepage pass
- Reviewed section CSS for the requested desktop and mobile widths.
- Reduced the Next Run mobile minimum height, tightened narrow countdown sizing, raised small metadata sizes, and fixed the footer oversized type to use the defined page gutter.
- Confirmed mobile interaction branches exist for navigation, Run Formats, People of Eko, Run Your City and reduced-motion states across animated sections.
- Connected-browser measurement remains pending; browser runtime is unavailable in this environment.

## Performance audit
- Kept the existing client boundaries only where interaction, viewport observers or animation lifecycle require them.
- Run Types video previews now use `preload="none"`, play only while near/in the viewport, and pause plus disconnect their observer on cleanup.
- Moving Lagos delayed `ScrollTrigger.refresh()` calls are now cancellable when the section unmounts; its GSAP matchMedia cleanup continues to revert transforms and triggers.
- Confirmed Hero video, gallery observer, countdown timer, Lenis ticker and visibility listeners all have teardown paths. Next/Image remains the default for supplied raster assets with responsive `sizes` declarations.
- TypeScript, ESLint and production build pass after the audit. Real device performance, network waterfalls and CLS measurements still require a connected browser.

## Design system implementation
- Loaded Bebas Neue through `next/font/google` as the display face while retaining Geist for body copy and Geist Mono for metadata.
- Updated the global accent token to `#C95941`.
- Applied Bebas Neue to heading hierarchy and added restrained display bold/italic utility treatments for high-priority CTA typography and supporting editorial copy.
- Wired the accent into primary CTA buttons, secondary CTA hover states, active route tabs and SVG route markers so `#C95941` is visible in the interface.
- Fixed the shared `--gutter` alias used by newer homepage sections, restoring horizontal edge spacing. Dark Partnerships and closing CTA buttons now use visible accent borders/backgrounds, and a deliberate transition gap separates Partnerships from the closing sequence.

## Phase 13 — Runs experience
- Replaced the `/runs` placeholder with a typed editorial event index sourced from `data/events.ts`.
- Added UP NEXT, THIS MONTH and PAST RUNS sections with lightweight type, distance and level filters.
- Added `/runs/[slug]` with hero media, event metadata, countdown, registration CTA, expectations, what to bring, route notes and related runs.
- Extended `RunEvent` with replaceable detail fields; missing schedule information is visibly labelled as to be confirmed or placeholder content.
- Added mobile-first run detail layout for direct social/WhatsApp entry.

## Community page
- Replaced the `/community` placeholder with a warm editorial landing page answering who is behind ERC.
- Composed hero, manifesto, People of Eko, community metrics, typed Lagos chapter placeholders, gallery, recent event moments and Join CTA.
- Member content remains sourced from `data/members.ts`; placeholder names, portraits and answers are explicitly labelled development content.
- Added `data/community.ts` for replaceable chapter/area records.

## Events experience
- Replaced `/events` with a separate culture-and-lifestyle event system, distinct from recurring Runs.
- Added typed `ClubEvent` architecture in `data/club-events.ts` with category, status, media, activities, programme, partners, gallery and placeholder boundaries prepared for future CMS migration.
- Added editorial Events landing page with featured event poster treatment, lightweight category filters, asymmetric upcoming events and past experience archive.
- Added `/events/[slug]` supporting upcoming registration mode and completed recap mode without invented attendance or partner claims.

## About page
- Replaced `/about` with a culture-led editorial story: WE RUN LAGOS hero, ERC purpose, beginning placeholder, community, pace, Lagos identity, values, founder placeholders, timeline placeholder and Join CTA.
- Added typed content in `data/about.ts`; founder/team information is explicitly placeholder until supplied.
- Used archival/event photography and asymmetric text/media compositions with restrained hover motion and mobile portrait prioritization.

## Partners page
- Replaced `/partners` with a premium brand storytelling and conversion page.
- Added typed partnership formats, reach placeholders and confirmed-collaboration boundary in `data/partnerships.ts`.
- Added why ERC, activation format, partnership gallery and final CTA sections without fabricating logos, campaigns, metrics or partner relationships.

## Circular gallery integration
- Integrated the supplied `components/ui/circularGallery.tsx` OGL/WebGL component into the homepage Gallery using typed `data/gallery.ts` items.
- Gallery labels use the loaded Bebas Neue display face and existing local image assets; reduced-motion users retain the editorial grid fallback.
- The supplied component owns its RAF, input listeners, image loading and renderer teardown; production build passes after integration.
- Renamed the public Stories placeholder route to `/events` and updated primary navigation and metadata accordingly.

## Mobile navigation polish (2026-09-24)
- Added a fixed, viewport-bounded mobile navigation panel below the sticky header.
- Added a dimmed backdrop that accepts taps/clicks to close the menu while preserving Escape and route-link dismissal.
- Kept desktop navigation and the transparent hero treatment unchanged.

## Next task
Verify the completed homepage sections in a connected browser, then proceed to the next homepage phase.
