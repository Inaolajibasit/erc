import Image from "next/image";
import Button from "@/components/ui/Button";
import styles from "./final-cta.module.css";

export default function FinalCTA() {
  return <section className={styles.section} aria-labelledby="final-cta-heading">
    <Image className={styles.image} src="/images/image (29).jpg" alt="Runners moving together beneath city lights" fill sizes="100vw" priority={false} />
    <div className={styles.shade} aria-hidden="true" />
    <div className={styles.content}><p className={styles.eyebrow}>EKO RUNNERS CLUB / LAGOS</p><h2 id="final-cta-heading" className="display-bold">YOUR NEXT<br />RUN STARTS<br />HERE.</h2><p className={`${styles.supporting} display-italic`}>Come alone. You won&apos;t finish alone.</p><Button href="/runs" variant="secondary" arrow>JOIN EKO RUNNERS CLUB</Button></div>
  </section>;
}
