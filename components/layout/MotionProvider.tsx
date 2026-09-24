"use client";
import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, registerAnimationPlugins } from "@/lib/animation/gsap";
import { useReducedMotion } from "@/lib/animation/useReducedMotion";

export default function MotionProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    registerAnimationPlugins();
    if (reducedMotion) return;

    // Native touch and anchors stay browser-owned. Route changes clear inertia.
    const lenis = new Lenis({
      autoRaf: false,
      syncTouch: false,
      anchors: false,
      stopInertiaOnNavigate: true,
    });
    const tick = (seconds: number) => lenis.raf(seconds * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);
    gsap.ticker.add(tick);
    const refresh = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(refresh);
      gsap.ticker.remove(tick);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, [reducedMotion, pathname]);

  return children;
}
