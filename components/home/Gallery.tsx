"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import CircularGallery from "@/components/ui/circularGallery";
import { gallery } from "@/data/gallery";
import { useReducedMotion } from "@/lib/animation/useReducedMotion";
import styles from "./gallery.module.css";

function EditorialFallback() {
  return <div className={styles.grid}>
    {gallery.map((item, index) => <figure className={`${styles.item} ${styles[`item${index + 1}`]}`} data-gallery-item key={item.id}>
      <div className={styles.imageFrame}><img src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} loading="lazy" /></div>
      <figcaption className={styles.caption}><strong>{item.caption}</strong><span>{item.dayLabel}</span><span>{item.locationLabel}</span><span>{item.eventLabel} / {item.hashtag}</span>{item.status === "placeholder" ? <small>PLACEHOLDER ARCHIVE ITEM</small> : null}</figcaption>
    </figure>)}
  </div>;
}

export default function Gallery() {
  const root = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const section = root.current;
    if (!section || reducedMotion) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add(styles.visible); }), { threshold: 0.15 });
    section.querySelectorAll<HTMLElement>("[data-gallery-item]").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [reducedMotion]);
  return <section ref={root} className={styles.section} aria-labelledby="gallery-heading">
    <div className={styles.header}><h2 id="gallery-heading">THE RUN<br />IN FRAMES.</h2><p>Selected moments from the ERC archive. Development placeholders until the community gallery is connected.</p></div>
    {reducedMotion ? <EditorialFallback /> : <div className={styles.circular}><CircularGallery items={gallery.map((item) => ({ image: item.image.src, text: item.caption }))} bend={3.2} textColor="#111111" borderRadius={0.015} font="bold 30px Bebas Neue" scrollSpeed={1.8} scrollEase={0.07} /></div>}
    <Link className={styles.link} href="/community">VIEW THE COMMUNITY <span aria-hidden="true">↗</span></Link>
  </section>;
}
