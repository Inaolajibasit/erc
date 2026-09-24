"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { runTypes } from "@/data/run-types";
import { useReducedMotion } from "@/lib/animation/useReducedMotion";
import styles from "./run-types.module.css";

function Media({ type, src, alt, poster, width, height }: { type: "image" | "video"; src: string; alt: string; poster?: string; width?: number; height?: number }) {
  const reducedMotion = useReducedMotion();
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const element = video.current;
    if (!element || reducedMotion) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void element.play().catch(() => undefined);
      else element.pause();
    }, { rootMargin: "120px 0px" });
    observer.observe(element);
    return () => { observer.disconnect(); element.pause(); };
  }, [reducedMotion]);
  if (type === "video") {
    return <video ref={video} className={styles.mediaAsset} src={src} poster={poster} muted loop playsInline preload="none" aria-label={alt} />;
  }
  return <Image className={styles.mediaAsset} src={src} alt={alt} width={width ?? 1200} height={height ?? 1600} sizes="(min-width: 1024px) 40vw, 100vw" />;
}

export default function RunTypes() {
  const [activeId, setActiveId] = useState(runTypes[0]?.id ?? "");
  const reducedMotion = useReducedMotion();
  const active = runTypes.find((item) => item.id === activeId) ?? runTypes[0];

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setTimeout(() => setActiveId(active?.id ?? ""), 0);
    return () => window.clearTimeout(timer);
  }, [active?.id, reducedMotion]);

  if (!active) return null;
  return (
    <section className={styles.section} aria-labelledby="run-types-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="run-types-heading">RUN WITH EKO</h2>
          <p>Find the rhythm that brings you back.</p>
        </div>
        <div className={styles.layout}>
          <div className={styles.mediaPanel} key={active.id}>
            <Media {...active.media!} />
            <span className={styles.mediaName}>{active.name}</span>
          </div>
          <ol className={styles.index}>
            {runTypes.map((run, index) => {
              const selected = run.id === active.id;
              return <li key={run.id} className={selected ? styles.selected : undefined}>
                <button type="button" className={styles.row} aria-pressed={selected} onClick={() => setActiveId(run.id)} onMouseEnter={() => setActiveId(run.id)} onFocus={() => setActiveId(run.id)}>
                  <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.rowMain}>
                    <span className={styles.name}>{run.name}</span>
                    <span className={styles.description}>{run.description ?? "Programme details to be announced."}</span>
                  </span>
                  <span className={styles.rowMeta}><span>{run.level ?? "Community"}</span>{run.details.map((detail) => <span key={detail}>{detail}</span>)}</span>
                  <span className={styles.marker} aria-hidden="true">↗</span>
                </button>
              </li>;
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
