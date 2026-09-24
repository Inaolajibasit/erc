"use client";

import { useEffect, useRef, useState } from "react";
import { communityMetrics, distanceOptions } from "@/data/stats";
import styles from "./stats.module.css";

function AnimatedValue({ value }: { value: number | null }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || value === null) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      setStarted(true);
      const start = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        node.textContent = Math.round(value * (1 - Math.pow(1 - progress, 3))).toLocaleString("en-NG");
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [started, value]);
  return <span ref={ref}>{value === null ? "—" : "0"}</span>;
}

export default function Stats() {
  return <section className={`${styles.section} my-12`} aria-labelledby="stats-heading">
    <div className={styles.header}><h2 id="stats-heading">A CITY IN MOTION.</h2><p>Development placeholders shown until ERC reporting is connected.</p></div>
    <div className={styles.metrics}>
      {communityMetrics.map((metric) => <div className={styles.metric} key={metric.id}>
        <div className={styles.value}><AnimatedValue value={metric.value} /><span>{metric.suffix}</span></div>
        <div className={styles.label}>{metric.label}</div>
        <div className={styles.source}>{metric.status === "placeholder" ? "DEV PLACEHOLDER" : metric.source.toUpperCase()}</div>
      </div>)}
    </div>
    <div className={styles.distances} aria-label="Distance formats"><span>RUN DISTANCES</span>{distanceOptions.map((distance) => <span key={distance}>{distance}</span>)}</div>
  </section>;
}
