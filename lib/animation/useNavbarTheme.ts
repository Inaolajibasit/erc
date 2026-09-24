"use client";

import { useEffect, useState } from "react";

/**
 * Homepage hero contract: put data-nav-hero on main's first direct child.
 * No marker = editorial theme. CSS supplies the initial transparent appearance.
 */
export function useNavbarTheme(pathname: string) {
  const [theme, setTheme] = useState<"auto" | "editorial" | "video">("auto");

  useEffect(() => {
    const main = document.getElementById("main-content");
    let hero = pathname === "/" ? main?.querySelector<HTMLElement>(":scope > [data-nav-hero]") : null;
    let frame = 0;
    const update = () => {
      frame = 0;
      const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height"));
      const bounds = hero?.getBoundingClientRect();
      setTheme(bounds && hero?.dataset.navSurface !== "editorial" && bounds.top <= headerHeight && bounds.bottom > headerHeight ? "video" : "editorial");
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const resize = new ResizeObserver(schedule);
    const findHero = () => {
      resize.disconnect();
      hero = pathname === "/" ? main?.querySelector<HTMLElement>(":scope > [data-nav-hero]") : null;
      if (hero) resize.observe(hero);
      schedule();
    };
    const mutations = new MutationObserver(findHero);
    if (main) mutations.observe(main, { childList: true });
    if (hero) resize.observe(hero);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("erc:hero-theme", schedule);
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      mutations.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("erc:hero-theme", schedule);
    };
  }, [pathname]);

  return theme;
}
