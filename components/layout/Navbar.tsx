"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import Wordmark from "./Wordmark";
import { NAVIGATION } from "@/lib/constants";
import { useNavbarTheme } from "@/lib/animation/useNavbarTheme";

export default function Navbar() {
  const pathname = usePathname();
  return <Navigation key={pathname} pathname={pathname} />;
}

function Navigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const theme = useNavbarTheme(pathname);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    const close = () => setOpen(false);
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className="site-header"
      data-theme={theme}
      data-menu-open={open}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <Container className="site-header__bar">
        <Wordmark onClick={() => setOpen(false)} />
        <nav className="desktop-navigation" aria-label="Main navigation">
          <ul>
            {NAVIGATION.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} aria-current={isCurrent(href) ? "page" : undefined} className="nav-link">{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button href="/runs" arrow className="site-header__cta">JOIN A RUN</Button>
        <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          <span>{open ? "Close" : "Menu"}</span>
          <span className="menu-toggle__symbol" aria-hidden="true" />
        </button>
      </Container>
      {open ? (
        <button
          type="button"
          className="mobile-menu-backdrop"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
        />
      ) : null}
      <div id="mobile-navigation" className="mobile-navigation" hidden={!open} data-lenis-prevent>
        <Container>
          <nav aria-label="Mobile navigation">
            <ul>
              {NAVIGATION.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} aria-current={isCurrent(href) ? "page" : undefined} onClick={() => setOpen(false)}>
                    <span>{label}</span><ArrowUpRight />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button href="/runs" arrow className="mobile-navigation__cta" onClick={() => setOpen(false)}>JOIN A RUN</Button>
        </Container>
      </div>
    </header>
  );
}
