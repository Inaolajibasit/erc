import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { events, getNextUpcomingEvent } from "@/data/events";
import Countdown from "./Countdown";
import styles from "./next-run.module.css";

function Detail({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;
  return <div className={styles.detail}><dt>{label}</dt><dd>{value}</dd></div>;
}

export default function NextRun() {
  const event = getNextUpcomingEvent(undefined, events);
  return <section className={styles.section} aria-labelledby="next-run-heading">
    {event?.image && <div className={styles.media} aria-hidden="true"><Image src={event.image.src} alt="" fill sizes="100vw" className={styles.image} /></div>}
    <div className={styles.scrim} aria-hidden="true" />
    <Container className={styles.inner}>
      <div><h2 id="next-run-heading" className={styles.heading}>NEXT RUN</h2>{event && <p className={styles.eventName}>{event.title}</p>}</div>
      {event ? <div className={styles.timerBlock}><Countdown event={event} /><dl className={styles.details}><Detail label="DATE" value={event.dateLabel} /><Detail label="TIME" value={event.timeLabel} /><Detail label="DISTANCE" value={event.distanceLabel} /><Detail label="LOCATION" value={event.location} /><Detail label="PACE / LEVEL" value={event.paceLevel} /></dl><Button href={event.registrationUrl ?? "/runs"} arrow className={styles.cta}>SAVE MY SPOT</Button></div> : <div className={styles.fallback}><p>No upcoming run has been published yet.</p><Button href="/runs" arrow className={styles.cta}>SEE RUNS</Button></div>}
    </Container>
  </section>;
}
