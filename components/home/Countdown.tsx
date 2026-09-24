"use client";

import { useEffect, useState } from "react";
import type { RunEvent } from "@/data/types";
import styles from "./next-run.module.css";

type Remaining = { days: number; hours: number; minutes: number; seconds: number };
const empty: Remaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
function getRemaining(startsAt: string, now: number): Remaining {
  const totalSeconds = Math.floor(Math.max(0, new Date(startsAt).getTime() - now) / 1000);
  return { days: Math.floor(totalSeconds / 86400), hours: Math.floor((totalSeconds % 86400) / 3600), minutes: Math.floor((totalSeconds % 3600) / 60), seconds: totalSeconds % 60 };
}
function pad(value: number) { return String(value).padStart(2, "0"); }

export default function Countdown({ event }: { event: RunEvent }) {
  const [remaining, setRemaining] = useState(empty);
  const [tick, setTick] = useState(false);
  useEffect(() => {
    let timeout = 0;
    const update = () => { setRemaining(getRemaining(event.startsAt!, Date.now())); setTick(true); timeout = window.setTimeout(() => setTick(false), 240); };
    update();
    const interval = window.setInterval(update, 1000);
    return () => { window.clearInterval(interval); window.clearTimeout(timeout); };
  }, [event.startsAt]);
  const parts = [[remaining.days, "DAYS"], [remaining.hours, "HOURS"], [remaining.minutes, "MINUTES"], [remaining.seconds, "SECONDS"]] as const;
  return <div className={styles.timer} aria-label="Time until the next run" aria-live="off">{parts.map(([value, label]) => <div className={styles.timerCell} key={label}><span className={styles.timerValue} data-tick={tick}>{pad(value)}</span><span className={styles.timerLabel}>{label}</span></div>)}</div>;
}
