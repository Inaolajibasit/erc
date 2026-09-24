# Cinematic hero

## Structure
Hero.tsx contains the server-rendered copy and CTA. HeroMotion.tsx owns GSAP/ScrollTrigger and the scene/stage/frame structure. HeroVideo.tsx owns video loading, playback controls and the Next/Image poster. hero.module.css contains responsive layout; data/hero.ts is the asset manifest.

The hero is followed by the Manifesto section. There is no fabricated next event or registration link.

## Supplied assets and replacement
The current source is public/video/hero-video.mp4, supplied by the user. It is preserved. The source has VP9 video in an MP4 container and an audio track; generated browser versions use H.264/yuv420p, no audio and fast-start metadata.

Active files:
- public/video/hero-desktop.mp4: 1600x900, 30.35 seconds, approximately 5.80 MB.
- public/video/hero-mobile.mp4: 960x540, approximately 2.82 MB. This is a lighter landscape rendition, not a claimed portrait shoot.
- public/images/hero-poster.webp: 1600x900, approximately 63 KB. Extracted from the original at 20 seconds.
- public/icons/ERC_logo.svg: supplied compact logo, used for the shell.

To replace assets, drop the replacements into public and update paths in data/hero.ts. A future portrait cut can independently replace mobileVideo. Adjust desktopPosition/mobilePosition in the same manifest to change focal crops. Use a real still from the replacement footage for the poster; do not substitute random stock.

FFmpeg was used as a temporary local utility, not added as an application dependency. Local review frames live in ignored .cache/hero-review.

## Composition
WE / RUN / LAGOS. remains one semantic heading; its characters are not independently animated. The user-requested EKO RUNNERS CLUB - LAGOS and Community / Movement / Culture sit at the bottom. The CTA leads to /runs until an actual registration destination is supplied.

A flat 30% black scrim supports white text. There is no gradient or decorative card. The requested metadata is an explicit exception to interpreting all small supporting text as forbidden preheaders; it is not placed above the heading.

## Motion and navigation
Desktop at 64rem and above uses a sticky, viewport-height stage with an extra 65svh of scroll space already reserved in CSS. GSAP scales the complete media/content frame down to 90%, capped at 1440px width, with scrub 0.7. No pin spacer is inserted at hydration.

Mobile uses normal document scrolling, a top-origin shrink to 96%, a shorter maximum 260px sequence and scrub 0.3. It has smaller typography, stacked metadata/actions and a separate crop/download. Small viewport units avoid resizing the stage as mobile browser controls retract. Minimum heights preserve readable content on short/landscape screens.

The hero announces editorial/video surface changes to the navbar through data-nav-surface and erc:hero-theme. This prevents white navigation from sitting on the newly revealed off-white frame margins. The original hero-boundary detection remains the fallback, including reduced motion.

GSAP matchMedia reverts local animations/triggers on breakpoint or motion preference changes and on unmount.

## Playback and fallback
Only one video source is selected after hydration. Video is decorative, muted, looped and plays inline. The poster remains beneath it. If autoplay is blocked, the explicit Play button is available. On a media error, the poster remains and the unusable control is removed. Video pauses off-screen or when the tab is hidden; a manual pause persists while navigating within the scene.

Reduced motion loads no video source, removes the long desktop scene, and displays a static poster with all content and links intact. Changing the preference live pauses and unloads video.

## Validation and remaining browser QA
Passed: lint, TypeScript, production build, HTTP asset checks, full decoding of both H.264 outputs and a partial-content video request.

Source review checked reserved media dimensions, scale-only movement, absence of viewport-width overflow wrappers, responsive title sizing and short-screen minimum heights. These are safeguards, NOT measured browser results.

The browser tool currently has no connected browsers. Before final visual signoff:
- Measure initial-load CLS with uncached poster/fonts and slow network; target <= 0.1.
- Confirm document.scrollWidth equals document.clientWidth at 320, 375, 768, 1024 and 1440px, including intermediate scroll positions and mobile menu open.
- Check scroll start/end, reverse scroll, resize, reload mid-page and back navigation.
- Check reduced motion before load and when toggled live; confirm no video download.
- Test autoplay rejection, blocked video URL, Pause/Play and hidden-tab/off-screen suspension.
- Verify text contrast across the full clip, mobile focal crop, 200% zoom, keyboard navigation and short landscape screens.
