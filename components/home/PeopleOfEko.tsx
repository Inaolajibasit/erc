"use client";

import Image from "next/image";
import { useState } from "react";
import { members } from "@/data/members";
import styles from "./people-of-eko.module.css";

export default function PeopleOfEko() {
  const [activeId, setActiveId] = useState(members[0]?.id ?? "");
  return <section className={styles.section} aria-labelledby="people-of-eko-heading">
    <h2 id="people-of-eko-heading" className={styles.heading}><span>WHY</span><span>DO YOU</span><span>RUN?</span></h2>
    <div className={styles.content}>
      <div className={styles.prompt}><p>The people who make the miles mean more.</p><small>Profile answers are placeholders until ERC member stories are approved.</small></div>
      <div className={styles.profiles} role="list">
        {members.map((member) => <article className={`${styles.profile} ${activeId === member.id ? styles.profileActive : ""}`} key={member.id} role="listitem">
          <button className={styles.profileButton} type="button" onClick={() => setActiveId(member.id)} onMouseEnter={() => setActiveId(member.id)} onFocus={() => setActiveId(member.id)} aria-label={`View ${member.name} profile`}>
            <div className={styles.portrait}>{member.portrait ? <Image src={member.portrait.src} alt={member.portrait.alt} width={member.portrait.width} height={member.portrait.height} sizes="(max-width: 768px) 76vw, 28vw" loading="lazy" /> : null}</div>
            <div className={styles.profileInfo}>
              <div className={styles.nameLine}><span>{member.name}</span><span>↗</span></div>
              <p className={styles.quote}>“{member.quote}”</p>
              <div className={styles.meta}><span>RUNNING SINCE / {member.runningSince}</span><span>FAVOURITE / {member.favouriteDistance}</span></div>
              {member.status === "placeholder" ? <div className={styles.placeholder}>PLACEHOLDER PROFILE / SAMPLE ANSWER</div> : null}
            </div>
          </button>
        </article>)}
      </div>
    </div>
  </section>;
}
