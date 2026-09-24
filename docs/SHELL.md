# Global website shell

## Layout and typography

Container uses a 1440px maximum outer width with 16px mobile, 24px tablet and 32-48px desktop gutters. Use section-space for section padding and text-page, text-section and text-body for the shared fluid hierarchy. Keep semantic heading order; SectionLabel is a heading, not a kicker.

The sticky header is 80px on mobile and 96px at the 64rem desktop breakpoint. Anchor scroll padding includes the header. Mobile navigation is an in-flow editorial disclosure with large links, thin rules, a text Menu/Close control and its own CTA. It is not a modal; no focus trap is needed. Escape restores toggle focus; leaving the header with keyboard focus, navigation and crossing the desktop breakpoint close it. Its scrollable content is bounded by the small viewport height and excluded from Lenis smoothing.

## Hero integration

The homepage hero uses data-nav-hero on its first-level element directly inside #main-content.

This opt-in lets CSS overlap the header and hero with space accounted for before hydration and gives the header an initial transparent white-on-video appearance. useNavbarTheme checks the hero boundary against the header height on scroll/resize, including restored scroll positions. HeroMotion additionally announces its actual scrubbed frame progress through data-nav-surface and erc:hero-theme, switching the header to off-white when the frame reveals paper margins. Opening the mobile menu always uses an opaque off-white background. A ResizeObserver handles hero size changes; a MutationObserver handles the direct child arriving through streaming. All observers and event handlers are removed on route change.

The hero reserves header clearance for its content and provides a poster/video crop with a flat dark scrim. Actual contrast and motion still require browser verification. Inner pages always use the editorial theme. See HERO.md for implementation and media details.

## Brand and actions

The supplied ERC_logo.svg replaces the temporary text wordmark and renders white on video or dark on paper. Button supports primary/secondary variants and an optional decorative SVG arrow. JOIN A RUN and the hero's JOIN THE NEXT RUN lead to /runs; no registration destination has been invented. The Runs page remains explicitly marked as a placeholder.

## Motion and verification

Short CSS transitions enhance CTA arrows, theme changes and the menu entrance. The global reduced-motion rule removes them. Hero scroll motion is scoped separately through GSAP/ScrollTrigger and also respects reduced motion. No new runtime libraries or stock media have been introduced.

Browser visual/interaction QA remains pending because the browser runtime has no connected browsers. Verify 320/375px mobile, tablet, 1024/1440px desktop, short landscape screens, keyboard focus, reduced motion, zoom and future hero transitions before calling visual QA complete.
