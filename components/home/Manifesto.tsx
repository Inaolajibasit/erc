import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { manifesto } from "@/data/manifesto";
import ManifestoMotion from "./ManifestoMotion";
import styles from "./manifesto.module.css";

export default function Manifesto() {
  return (
    <ManifestoMotion>
      <Container>
        <div className={styles.composition}>
          <h2 id="manifesto-heading" className="sr-only">Eko Runners</h2>
          <span className={styles.eko} data-manifesto-eko aria-hidden="true">EKO</span>
          <p className={styles.copy}>{manifesto.copy}</p>
          <figure className={styles.portrait}>
            <Image
              src={manifesto.image.src}
              alt={manifesto.image.alt}
              width={manifesto.image.width}
              height={manifesto.image.height}
              sizes="(min-width: 1440px) 440px, (min-width: 768px) 32vw, 46vw"
              className={styles.image}
              data-manifesto-image
            />
          </figure>
          <span className={styles.runners} data-manifesto-runners aria-hidden="true">RUNNERS</span>
          <div className={styles.action}>
            <Button href={manifesto.cta.href} arrow variant="secondary">{manifesto.cta.label}</Button>
          </div>
        </div>
      </Container>
    </ManifestoMotion>
  );
}
