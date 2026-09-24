"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerAnimationPlugins } from "@/lib/animation/gsap";
import styles from "./manifesto.module.css";

export default function ManifestoMotion({ children }: { children: ReactNode }) {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = section.current;
    if (!root) return;
    registerAnimationPlugins();
    const media = gsap.matchMedia();
    media.add({
      wide: "(min-width: 48rem)",
      narrow: "(max-width: 47.999rem)",
      reduced: "(prefers-reduced-motion: reduce)",
    }, (context) => {
      if (context.conditions?.reduced) return;
      const wide = context.conditions?.wide;
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
      // Move whole words, never characters. Copy and action stay stationary.
      timeline
        .fromTo(root.querySelector("[data-manifesto-eko]"), { y: wide ? 16 : 6 }, { y: wide ? -16 : -6 }, 0)
        .fromTo(root.querySelector("[data-manifesto-runners]"), { y: wide ? 8 : 3 }, { y: wide ? -8 : -3 }, 0)
        .fromTo(root.querySelector("[data-manifesto-image]"), { yPercent: -2 }, { yPercent: 2 }, 0);
    }, section);

    return () => media.revert();
  }, []);

  return <section ref={section} className={styles.section} aria-labelledby="manifesto-heading">{children}</section>;
}
