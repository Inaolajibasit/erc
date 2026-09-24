# Eko Runners Club — Agent Instructions

You are working on the official website for Eko Runners Club (ERC), a Lagos-based running community.

Before making ANY meaningful change:

1. Read `/docs/PROJECT_CONTEXT.md`.
2. Read `/docs/DESIGN_SYSTEM.md`.
3. Read `/docs/CURRENT_STATE.md`.
4. Read `/docs/DECISIONS.md`.
5. Read `/docs/TASKS.md`.

Do not redesign established sections without explicit instruction.

Do not replace the visual direction with generic SaaS, gym, sports-template, or Nike-inspired UI.

The website should feel like:

- Lagos running culture
- editorial sports design
- fashion/editorial photography
- community
- movement
- early mornings
- city energy
- premium but accessible

The visual foundation combines:

1. The supplied Go Running / Dribbble reference for composition, whitespace, typography, grid and editorial structure.
2. First Light Run Club's Framer website for motion, energy, transitions, photography, galleries and interaction style.
3. ERC's own Lagos identity to ensure the final result is original.

Core brand statement:

"WE RUN LAGOS."

Creative direction:

"RUN THE CITY."

Supporting idea:

"Come for the run. Stay for the community."

## Engineering Rules

- Next.js App Router.
- TypeScript only.
- Tailwind CSS.
- GSAP + ScrollTrigger for major scroll animation.
- Use CSS transitions for simple hover states.
- Components must remain modular.
- Avoid giant page components.
- Maintain responsive behavior.
- Design mobile intentionally rather than merely stacking desktop components.
- Respect `prefers-reduced-motion`.
- Images must use optimized rendering where appropriate.
- Avoid unnecessary dependencies.
- Avoid animation that hurts usability or performance.
- Use semantic HTML.
- Maintain keyboard accessibility.
- Never introduce horizontal page overflow accidentally.

## Design Rules

- Strong whitespace.
- Oversized typography.
- Asymmetric editorial grids.
- Photography carries most of the colour.
- Minimal UI chrome.
- Small technical labels may use monospace.
- Thin borders.
- Pill CTAs where appropriate.
- No excessive border-radius.
- No gradient-heavy SaaS aesthetic.
- No glassmorphism.
- No generic icon-card sections.
- No unnecessary floating blobs.
- Avoid overusing colour.
- Motion should communicate speed and movement.

## Workflow

When completing a meaningful task:

1. Implement the task.
2. Check desktop and mobile behavior.
3. Fix obvious TypeScript/lint/runtime problems.
4. Update `/docs/CURRENT_STATE.md`.
5. Mark completed items in `/docs/TASKS.md`.
6. Record significant architectural/design decisions in `/docs/DECISIONS.md`.

Do not claim a task is complete if placeholders remain in important functionality.

If information is missing, use clearly marked placeholder data rather than inventing factual ERC information.