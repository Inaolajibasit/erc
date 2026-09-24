import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Countdown from "@/components/home/Countdown";
import { events } from "@/data/events";
import styles from "@/components/runs/run-detail.module.css";

export const revalidate = 60;

export function generateStaticParams() { return events.map((event) => ({ slug: event.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  return { title: event?.title ?? "Run" };
}

export default async function RunDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) notFound();
  const related = events.filter((item) => item.slug !== event.slug).slice(0, 3);
  const isUpcoming = Boolean(event.startsAt && new Date(event.startsAt).getTime() > Date.now());
  return <main className={styles.page}><section className={styles.hero}><div className={styles.heroMedia}>{event.image ? <Image src={event.image.src} alt={event.image.alt} fill sizes="(max-width: 768px) 100vw, 58vw" priority /> : null}</div><div className={styles.heroInfo}><span className={styles.eyebrow}>{event.runType ?? "RUN FORMAT / PLACEHOLDER"}</span><h1>{event.title}</h1>{isUpcoming && event.startsAt ? <div className={styles.countdown}><Countdown event={event} /></div> : null}<dl className={styles.heroMeta}><div><dt>DATE / TIME</dt><dd>{event.dateLabel ?? "DATE TBC"}<br />{event.timeLabel ?? "TIME TBC"}</dd></div><div><dt>DISTANCE</dt><dd>{event.distanceLabel ?? "DISTANCE TBC"}</dd></div><div><dt>LEVEL</dt><dd>{event.paceLevel ?? "LEVEL TBC"}</dd></div><div><dt>MEETING POINT</dt><dd>{event.meetingPoint ?? event.location ?? "TO BE CONFIRMED"}</dd></div></dl><Button className={styles.heroCta} href={event.registrationUrl ?? "/runs"} arrow>JOIN THIS RUN</Button></div></section><section className={styles.body}><p className={styles.lead}>{event.description ?? "Run description to be supplied by ERC."}</p><div className={styles.bodyCopy}><h2>WHAT TO EXPECT</h2><p>{event.description ?? "Details to be confirmed."}</p><div className={styles.columns}><div><span className={styles.label}>WHAT TO EXPECT</span><ul>{event.whatToExpect.length ? event.whatToExpect.map((item) => <li key={item}>{item}</li>) : <li>Details to be confirmed.</li>}</ul></div><div><span className={styles.label}>WHAT TO BRING</span><ul>{event.whatToBring.length ? event.whatToBring.map((item) => <li key={item}>{item}</li>) : <li>Details to be confirmed.</li>}</ul></div></div><div className={styles.route}><span className={styles.label}>ROUTE / LOCATION</span><p>{event.routeNotes ?? event.location ?? "Route information to be confirmed."}</p></div></div></section>{related.length ? <section className={styles.related}><h2>RELATED RUNS</h2>{related.map((item) => <Link href={`/runs/${item.slug}`} key={item.id}><span>{item.title}</span><span aria-hidden="true">↗</span></Link>)}</section> : null}</main>;
}
