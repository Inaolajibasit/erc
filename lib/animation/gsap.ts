"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function registerAnimationPlugins() {
  gsap.registerPlugin(ScrollTrigger);
}
export { gsap, ScrollTrigger };
