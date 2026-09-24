# Animation utilities

MotionProvider lives once in the root layout. It owns Lenis and the shared GSAP ticker integration. Do not create another Lenis instance or requestAnimationFrame loop in a section.

For section motion, use useScopedAnimation with an element ref and a stable useCallback setup function. Import gsap and ScrollTrigger from ./gsap. Animations and ScrollTriggers created synchronously inside setup are scoped and reverted on cleanup or reduced-motion changes. Return cleanup for any additional listeners you create; asynchronous callbacks need their own lifecycle handling.

Keep content visible in server-rendered markup. Only enhance it after mounting. Do not use initial opacity zero in CSS for essential content. CSS handles simple hover/focus transitions.

useReducedMotion returns true during server rendering, subscribes to preference changes in the browser, and can gate future video and interaction behaviour. Mobile touch scrolling remains native. Do not override Next.js scroll restoration with unconditional scroll-to-top calls.

The foundation includes no decorative animations or route transition effects.
