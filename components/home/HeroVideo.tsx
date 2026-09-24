"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { heroMedia } from "@/data/hero";
import { useReducedMotion } from "@/lib/animation/useReducedMotion";
import styles from "./hero.module.css";

export default function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [userPaused, setUserPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = video.current;
    const region = media.current;
    if (!element || !region) return;
    if (reducedMotion) {
      element.pause();
      element.removeAttribute("src");
      element.load();
      return;
    }

    // Select one asset per visit, avoiding double video downloads on mobile.
    if (!element.getAttribute("src")) {
      element.src = window.matchMedia("(max-width: 63.999rem)").matches
        ? heroMedia.mobileVideo : heroMedia.desktopVideo;
    }
    let visible = false;
    const updatePlayback = () => {
      if (visible && !document.hidden && !userPaused && !failed) {
        void element.play().catch(() => {
          // Autoplay may be blocked. The poster and explicit Play control remain.
        });
      } else {
        element.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    }, { threshold: 0 });
    observer.observe(region);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      element.pause();
    };
  }, [reducedMotion, userPaused, failed]);

  return (
    <>
      <div ref={media} className={styles.media} style={{
        "--desktop-position": heroMedia.desktopPosition,
        "--mobile-position": heroMedia.mobilePosition,
      } as CSSProperties}>
        <Image src={heroMedia.poster} alt="" fill sizes="100vw" preload className={styles.image} />
        <video
          ref={video}
          className={styles.video}
          data-ready={ready && !reducedMotion && !failed}
          muted
          loop
          playsInline
          preload="none"
          poster={heroMedia.poster}
          aria-hidden="true"
          tabIndex={-1}
          onLoadedData={() => setReady(true)}
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => { setFailed(true); setReady(false); }}
        />
      </div>
      {!reducedMotion && !failed && (
        <button type="button" className={styles.playback} onClick={() => {
          if (playing) setUserPaused(true);
          else {
            setUserPaused(false);
            void video.current?.play().catch(() => {});
          }
        }} aria-label={playing ? "Pause background video" : "Play background video"}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
            {playing ? <path d="M2 1h3v10H2zm5 0h3v10H7z" /> : <path d="m2 1 9 5-9 5z" />}
          </svg>
          <span>{playing ? "Pause video" : "Play video"}</span>
        </button>
      )}
    </>
  );
}
