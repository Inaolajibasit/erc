import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAVIGATION, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__oversized" aria-hidden="true"><span>EKO</span><span>RUN </span></div>
        <div className="site-footer__grid">
          <div>
            <Link href="/" aria-label={`${SITE_NAME} home`} className="site-footer__full-logo-link"><Image src="/icons/EkoRunnerCclub_logo.svg" alt="Eko Runners Club" width={2172} height={724} className="site-footer__full-logo" unoptimized /></Link>
            {/* <p className="mt-5 text-body">{SITE_NAME}</p> */}
          </div>
          <nav aria-label="Footer navigation">
            <ul className="site-footer__links">
              {NAVIGATION.map(({ href, label }) => (
                <li key={href}><Link href={href} className="nav-link">{label}</Link></li>
              ))}
              <li><a href="#" className="nav-link">Instagram</a></li>
              <li><a href="#" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          <div className="site-footer__action"><Button href="/runs" arrow>JOIN A RUN</Button></div>
        </div>
        <div className="site-footer__bottom">
          <p>Lagos, Nigeria</p>
          <Link href="/" className="nav-link">Eko Runners Club</Link>
        </div>
      </Container>
    </footer>
  );
}
