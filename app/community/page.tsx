import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import PeopleOfEko from "@/components/home/PeopleOfEko";
import Stats from "@/components/home/Stats";
import Gallery from "@/components/home/Gallery";
import { communityChapters } from "@/data/community";
import { events } from "@/data/events";
import styles from "@/components/community/community-page.module.css";

export const metadata: Metadata = { title: "Community" };

export default function Page() {
  return <main className={styles.page}><section className={styles.hero}><Image src="/images/image (25).jpg" alt="Eko Runners gathering together" fill priority sizes="100vw" /><div className={styles.heroContent}><p>EKO RUNNERS CLUB / COMMUNITY</p><h1>THE PEOPLE<br />OF EKO.</h1></div></section><section className={styles.manifesto}><span className={styles.manifestoLabel}>WHO WE ARE</span><p className={styles.manifestoCopy}>Come for the run. Stay for the community.</p></section><PeopleOfEko /><Stats /><section className={styles.chapterSection}><h2 className={styles.sectionTitle}>CHAPTERS / LAGOS</h2><div className={styles.chapters}>{communityChapters.map((chapter) => <article className={styles.chapter} key={chapter.id}><Image src={chapter.image.src} alt={chapter.image.alt} fill sizes="(max-width: 768px) 100vw, 55vw" loading="lazy" /><div className={styles.chapterInfo}><h3>{chapter.name}</h3><p>{chapter.description}</p>{chapter.status === "placeholder" ? <small className={styles.placeholder}>PLACEHOLDER AREA / DETAILS TBC</small> : null}</div></article>)}</div></section><Gallery /><section className={styles.moments}><h2 className={styles.sectionTitle}>RECENT MOMENTS / EVENTS</h2><div className={styles.momentList}>{events.length ? events.map((event, index) => <Link className={styles.moment} href={`/runs/${event.slug}`} key={event.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{event.title}</strong><span>{event.dateLabel ?? "DATE TBC"} / {event.location ?? "LOCATION TBC"}</span></Link>) : <p>Event moments to be added.</p>}</div></section><section className={styles.join}><h2>RUN WITH YOUR PEOPLE.</h2><Button href="/runs" arrow>JOIN ERC</Button></section></main>;
}
