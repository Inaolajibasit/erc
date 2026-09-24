"use client";
import { useEffect, type RefObject } from "react";
import { gsap, registerAnimationPlugins } from "./gsap";

// Pass a stable callback (useCallback). All local animations and ScrollTriggers
// are reverted on unmount and when the motion preference changes.
export function useScopedAnimation(scope: RefObject<HTMLElement | null>, setup: () => void | (() => void)) {
  useEffect(() => {
    if (!scope.current) return;
    registerAnimationPlugins();
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", setup, scope);
    return () => media.revert();
  }, [scope, setup]);
}
