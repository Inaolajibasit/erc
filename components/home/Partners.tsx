import Link from "next/link";
import { partners } from "@/data/partners";
import Button from "@/components/ui/Button";
import styles from "./partners.module.css";

export default function Partners() {
  return <section className={styles.section} aria-labelledby="partners-heading">
    <div className={styles.topline}><span>ERC / PARTNERS</span><span>COLLABORATION, CULTURE, MOVEMENT</span></div>
    <div className={styles.content}><h2 id="partners-heading">WE<br />MOVE WITH</h2><div className={styles.pitch}><p>Want to build something with the people moving Lagos?</p><Button href="/partners" variant="secondary" arrow>PARTNER WITH ERC</Button></div></div>
    <div className={styles.logos} aria-label="Partner placeholders">{partners.map((partner) => <Link className={styles.logo} href="/partners" key={partner.id}><span>{partner.name}</span><small>{partner.status === "placeholder" ? "PLACEHOLDER / AVAILABLE" : "ERC PARTNER"}</small></Link>)}</div>
    <Link className={styles.pageLink} href="/partners">VIEW PARTNERSHIPS <span aria-hidden="true">↗</span></Link>
  </section>;
}
