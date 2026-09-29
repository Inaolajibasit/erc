"use client";

import { useState } from "react";
import { routeGroups } from "@/data/routes";
import type { RouteGroup } from "@/data/types";
import styles from "./run-map.module.css";

export default function RunMap() {
  const [group, setGroup] = useState<RouteGroup>("island");
  const routes = routeGroups[group];
  return <section className={styles.section} aria-labelledby="run-map-heading">
    <div className={styles.header}><h2 id="run-map-heading"><span>RUN</span><span>YOUR</span><span>CITY.</span></h2><p>Confirmed ERC routes, supplied as GPX tracks and grouped by Lagos area.</p></div>
    <div className={styles.switcher} role="tablist" aria-label="Route groups">
      {(Object.keys(routeGroups) as RouteGroup[]).map((item) => <button key={item} type="button" role="tab" aria-selected={group === item} className={group === item ? styles.activeTab : ""} onClick={() => setGroup(item)}>{item.toUpperCase()}</button>)}
    </div>
    <div className={styles.layout}>
      <div className={styles.mapFrame} aria-label={`${group} confirmed route visualisation`}>
        <svg className={styles.map} viewBox="0 0 1000 420" role="img" aria-labelledby="map-title map-description">
          <title id="map-title">Confirmed ERC routes</title><desc id="map-description">Stylised SVG lines representing routes supplied by ERC as GPX tracks. The selected area is shown outside the SVG title.</desc>
          <path className={styles.contour} d="M 30 80 C 180 25, 280 70, 430 40 S 720 20, 970 90 M 25 390 C 170 350, 300 410, 450 370 S 760 345, 980 390 M 40 215 C 180 180, 300 235, 470 205 S 760 165, 965 220" />
          {routes.map((route) => <g key={route.id}><path className={styles.route} d={route.path} /><circle className={styles.marker} cx={route.marker.x} cy={route.marker.y} r="6" /></g>)}
        </svg>
        <span className={styles.mapNote}>GPX ROUTES / {group.toUpperCase()}</span>
      </div>
      <ol className={styles.routeList}>{routes.map((route, index) => <li key={route.id}><span>0{index + 1}</span><strong>{route.name}</strong><small>{route.distanceKm}KM / {route.meetingPoint}</small></li>)}</ol>
    </div>
  </section>;
}
