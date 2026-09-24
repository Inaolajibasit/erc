"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { movingLagosMedia } from "@/data/moving-lagos";
import { registerAnimationPlugins, gsap, ScrollTrigger } from "@/lib/animation/gsap";
import { useReducedMotion } from "@/lib/animation/useReducedMotion";
import styles from "./moving-lagos.module.css";

function LazyVideo({ src, poster, alt }: { src: string; poster?: string; alt: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const video = ref.current;
    if (!video || reducedMotion) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!video.src) video.src = src;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    }, { rootMargin: "180px 0px" });
    observer.observe(video);
    return () => { observer.disconnect(); video.pause(); };
  }, [reducedMotion, src]);
  return <video ref={ref} poster={poster} muted loop playsInline preload="none" aria-label={alt} />;
}

function Track({ items, reverse }: { items: typeof movingLagosMedia; reverse: boolean }) {
  return <div className={styles.trackViewport}><div className={styles.track} data-moving-track data-reverse={reverse ? "true" : undefined}>
    {items.map((item) => <article className={`${styles.item} ${styles[item.aspect]}`} key={item.id}>
      <div className={styles.media}>
        {item.media.type === "video" ? <LazyVideo src={item.media.src} poster={item.media.poster} alt={item.media.alt} /> : <Image src={item.media.src} alt={item.media.alt} width={item.media.width ?? 1600} height={item.media.height ?? 1000} sizes="(max-width: 768px) 72vw, 33vw" loading="lazy" />}
      </div>
      <div className={styles.meta}><span>{item.timeLabel} / {item.placeLabel}</span><span>{item.contextLabel}</span><small>{item.status === "placeholder" ? "PLACEHOLDER MEDIA" : "ERC ARCHIVE"}</small></div>
    </article>)}
  </div></div>;
}

export default function MovingLagos() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    registerAnimationPlugins();
    const section = root.current;
    if (!section) return;
    const media = gsap.matchMedia();
    media.add({ mobile: "(max-width: 47.999rem)", desktop: "(min-width: 48rem)", motion: "(prefers-reduced-motion: no-preference)" }, (context) => {
      if (!context.conditions?.motion) return;
      const mobile = Boolean(context.conditions?.mobile);
      const tracks = Array.from(section.querySelectorAll<HTMLElement>("[data-moving-track]"));
      tracks.forEach((track) => {
        const viewport = track.parentElement;
        if (!viewport) return;
        const reverse = track.dataset.reverse === "true";
        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth) * (mobile ? 0.5 : 1);
        gsap.set(track, { x: reverse ? () => -distance() : 0 });
        gsap.to(track, { x: reverse ? 0 : () => -distance(), ease: "none", scrollTrigger: { trigger: section, start: mobile ? "top 85%" : "top bottom", end: mobile ? "bottom 15%" : "bottom top", scrub: mobile ? 1.5 : 0.7, invalidateOnRefresh: true } });
      });
      let refreshCall: gsap.core.Tween | undefined;
      const refresh = () => { refreshCall?.kill(); refreshCall = gsap.delayedCall(0.1, () => ScrollTrigger.refresh()); };
      window.addEventListener("load", refresh, { once: true });
      return () => { window.removeEventListener("load", refresh); refreshCall?.kill(); };
    });
    return () => media.revert();
  }, []);
  const midpoint = Math.ceil(movingLagosMedia.length / 2);
  return <section ref={root} className={styles.section} aria-labelledby="moving-lagos-heading"><h2 id="moving-lagos-heading" className={styles.heading}><span>MOVING</span><span>LAGOS.</span></h2><div className={styles.intro}><p>Photography from the ERC archive, moving with the city.</p><span aria-hidden="true">Scroll / Run / Repeat</span></div><Track items={movingLagosMedia.slice(0, midpoint)} reverse={false} /><Track items={movingLagosMedia.slice(midpoint)} reverse /></section>;
}
