import Button from "@/components/ui/Button";
import HeroMotion from "./HeroMotion";
import HeroVideo from "./HeroVideo";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <HeroMotion>
      <HeroVideo />
      <div className={styles.scrim} aria-hidden="true" />
      <div className={styles.content}>
        <h1 className={styles.title} aria-label="WE RUN LAGOS.">
          <span>WE</span>
          <span>RUN</span>
          <span>LAGOS.</span>
        </h1>
        <div className={styles.bottom}>
          <div className={styles.metadata}>
            <p>EKO RUNNERS CLUB <span aria-hidden="true">—</span> LAGOS</p>
            <p>Community / Movement / Culture</p>
          </div>
          <Button href="/runs" arrow className={styles.cta}>JOIN THE NEXT RUN</Button>
        </div>
      </div>
    </HeroMotion>
  );
}
