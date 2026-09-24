"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { RunEvent } from "@/data/types";
import styles from "./runs-index.module.css";

type Filter = "all" | string;

function EventRow({ event, index }: { event: RunEvent; index: number }) {
  return <Link className={styles.event} href={`/runs/${event.slug}`}>
    <span className={styles.eventNumber}>{String(index + 1).padStart(2, "0")}</span>
    <span className={styles.eventTitle}>{event.title}<small>{event.registrationStatus ?? "STATUS TO BE CONFIRMED"}</small></span>
    <span className={styles.eventCell}>{event.dateLabel ?? "DATE TBC"}<br />{event.timeLabel ?? "TIME TBC"}</span>
    <span className={styles.eventCell}>{event.distanceLabel ?? "DISTANCE TBC"}</span>
    <span className={styles.eventCell}>{event.paceLevel ?? "LEVEL TBC"}</span>
    <span className={styles.eventCell}>{event.location ?? "LOCATION TBC"}</span>
    <span className={styles.eventArrow} aria-hidden="true">↗</span>
  </Link>;
}

export default function RunsIndex({ upcoming, past, featured }: { upcoming: RunEvent[]; past: RunEvent[]; featured: RunEvent | null }) {
  const [type, setType] = useState<Filter>("all");
  const [distance, setDistance] = useState<Filter>("all");
  const [level, setLevel] = useState<Filter>("all");
  const filter = (items: RunEvent[]) => items.filter((event) => (type === "all" || event.runType === type) && (distance === "all" || event.distanceLabel?.includes(distance)) && (level === "all" || event.paceLevel?.includes(level)));
  const filteredUpcoming = useMemo(() => filter(upcoming), [upcoming, type, distance, level]);
  const filteredPast = useMemo(() => filter(past), [past, type, distance, level]);
  const types = Array.from(new Set([...upcoming, ...past].map((event) => event.runType).filter(Boolean))) as string[];
  const distances = Array.from(new Set([...upcoming, ...past].flatMap((event) => event.distanceLabel?.match(/5|10|21\.1|42\.2/g) ?? [])));
  const levels = Array.from(new Set([...upcoming, ...past].flatMap((event) => event.paceLevel?.split(" /").map((value) => value.trim()) ?? [])));
  return <main className={styles.page}><div className={styles.intro}><h1>RUNS.</h1><p>Find your next way through Lagos. Schedule details come from the ERC event data layer.</p></div>
    {featured ? <section className={styles.featured} aria-labelledby="up-next-heading"><div className={styles.featuredMedia}>{featured.image ? <Image src={featured.image.src} alt={featured.image.alt} fill sizes="(max-width: 768px) 100vw, 60vw" priority /> : null}</div><div className={styles.featuredInfo}><span className={styles.featuredTag} id="up-next-heading">UP NEXT</span><h2>{featured.title}</h2><dl className={styles.featuredMeta}><div><dt>DATE / TIME</dt><dd>{featured.dateLabel}<br />{featured.timeLabel}</dd></div><div><dt>WHERE</dt><dd>{featured.location ?? "LOCATION TBC"}</dd></div><div><dt>DISTANCE</dt><dd>{featured.distanceLabel ?? "DISTANCE TBC"}</dd></div><div><dt>LEVEL</dt><dd>{featured.paceLevel ?? "LEVEL TBC"}</dd></div></dl><Link className="erc-button erc-button--primary" href={`/runs/${featured.slug}`}>VIEW RUN <span aria-hidden="true">↗</span></Link></div></section> : null}
    <div className={styles.filters}><span>FILTER RUNS</span><div className={styles.filterGroup}><select aria-label="Filter by run type" value={type} onChange={(event) => setType(event.target.value)}><option value="all">All types</option>{types.map((value) => <option key={value} value={value}>{value}</option>)}</select><select aria-label="Filter by distance" value={distance} onChange={(event) => setDistance(event.target.value)}><option value="all">All distances</option>{distances.map((value) => <option key={value} value={value}>{value}KM</option>)}</select><select aria-label="Filter by level" value={level} onChange={(event) => setLevel(event.target.value)}><option value="all">All levels</option>{levels.map((value) => <option key={value} value={value}>{value}</option>)}</select></div></div>
    <section><h2 className={styles.sectionTitle}>THIS MONTH</h2><div className={styles.list}>{filteredUpcoming.length ? filteredUpcoming.map((event, index) => <EventRow event={event} index={index} key={event.id} />) : <p className={styles.empty}>No upcoming runs match these filters.</p>}</div></section>
    <section><h2 className={styles.sectionTitle}>PAST RUNS</h2><div className={styles.list}>{filteredPast.length ? filteredPast.map((event, index) => <EventRow event={event} index={index} key={event.id} />) : <p className={styles.empty}>Past run records will appear here when supplied.</p>}</div></section>
  </main>;
}
