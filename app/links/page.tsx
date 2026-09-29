import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { ercLinks } from "@/data/links";
import styles from "@/components/links/links-page.module.css";

export const metadata: Metadata = {
  title: "ERC Links",
  description: "Registration, community and running links from Eko Runners Club.",
};

export default function LinksPage() {
  return (
    <main className={styles.page}>
      <Container>
        <header className={styles.intro}>
          <div><span className={styles.eyebrow}>EKO RUNNERS CLUB / LINKS</span><h1 className={styles.title}>LINKS</h1></div>
          <p className={styles.note}>Run with us, join the community and find the latest ERC information.</p>
        </header>
        <nav className={styles.list} aria-label="Eko Runners Club links">
          {ercLinks.map((link, index) => (
            <a className={styles.item} href={link.href} key={link.id} target="_blank" rel="noreferrer">
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.copy}><strong className={styles.itemTitle}>{link.title}</strong><span className={styles.url}>{link.displayUrl}</span></span>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </Container>
    </main>
  );
}
