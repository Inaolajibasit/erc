import type { RouteGroup, RunRoute } from "./types";

/** Placeholder route geometry and labels. None are official ERC routes. */
export const routeGroups: Record<RouteGroup, RunRoute[]> = {
  island: [
    { id: "island-placeholder-01", status: "placeholder", name: "ISLAND LOOP / PLACEHOLDER", group: "island", path: "M 80 290 C 160 220, 205 105, 330 128 S 510 235, 650 180 S 820 105, 930 160", marker: { x: 330, y: 128 } },
    { id: "island-placeholder-02", status: "placeholder", name: "WATERFRONT LINE / PLACEHOLDER", group: "island", path: "M 70 340 C 200 285, 260 360, 380 300 S 580 215, 720 280 S 840 350, 950 300", marker: { x: 720, y: 280 } },
    { id: "island-placeholder-03", status: "placeholder", name: "CITY CROSSING / PLACEHOLDER", group: "island", path: "M 160 105 C 250 165, 290 250, 420 220 S 560 125, 690 155 S 790 250, 880 235", marker: { x: 560, y: 125 } },
  ],
  mainland: [
    { id: "mainland-placeholder-01", status: "placeholder", name: "NORTH LOOP / PLACEHOLDER", group: "mainland", path: "M 80 190 C 190 120, 280 125, 380 190 S 560 300, 700 220 S 835 120, 950 175", marker: { x: 380, y: 190 } },
    { id: "mainland-placeholder-02", status: "placeholder", name: "NEIGHBOURHOOD RUN / PLACEHOLDER", group: "mainland", path: "M 75 310 C 180 350, 290 310, 380 250 S 520 105, 650 160 S 810 305, 945 285", marker: { x: 650, y: 160 } },
    { id: "mainland-placeholder-03", status: "placeholder", name: "GREEN LINE / PLACEHOLDER", group: "mainland", path: "M 130 90 C 220 185, 330 180, 445 110 S 625 70, 730 145 S 850 250, 920 230", marker: { x: 445, y: 110 } },
  ],
};
