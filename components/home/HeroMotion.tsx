"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerAnimationPlugins } from "@/lib/animation/gsap";
import styles from "./hero.module.css";

export default function HeroMotion({ children }: { children: ReactNode }) {
  const scene = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scene.current || !stage.current || !frame.current) return;
    registerAnimationPlugins();
    const root = scene.current;
    const updateNav = (surface?: string) => {
      if (root.dataset.navSurface === surface) return;
      if (surface) root.dataset.navSurface = surface;
      else delete root.dataset.navSurface;
      window.dispatchEvent(new Event("erc:hero-theme"));
    };
    const media = gsap.matchMedia();
    media.add({
      desktop: "(min-width: 64rem)",
      mobile: "(max-width: 63.999rem)",
      reduced: "(prefers-reduced-motion: reduce)",
    }, (context) => {
      updateNav();
      if (context.conditions?.reduced) return;
      const desktop = context.conditions?.desktop;
      gsap.to(frame.current, {
        scale: desktop ? () => Math.min(0.9, 1440 / document.documentElement.clientWidth) : 0.96,
        transformOrigin: desktop ? "50% 50%" : "50% 0%",
        ease: "none",
        onUpdate: function (this: gsap.core.Tween) {
          updateNav(this.progress() > 0.01 ? "editorial" : "video");
        },
        scrollTrigger: {
          trigger: scene.current,
          start: "top top",
          end: () => "+=" + (desktop
            ? scene.current!.offsetHeight - stage.current!.offsetHeight
            : Math.min(260, stage.current!.offsetHeight * 0.4)),
          scrub: desktop ? 0.7 : 0.3,
          invalidateOnRefresh: true,
          onRefresh: (trigger) => updateNav((trigger.animation?.progress() ?? trigger.progress) > 0.01 ? "editorial" : "video"),
        },
      });
      return () => updateNav();
    }, scene);
    return () => media.revert();
  }, []);

  return (
    <section ref={scene} className={styles.scene} data-nav-hero aria-label="Eko Runners Club introduction">
      <div ref={stage} className={styles.stage}>
        <div ref={frame} className={styles.frame} data-hero-frame>{children}</div>
      </div>
    </section>
  );
}
