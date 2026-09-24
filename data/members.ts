import type { Member } from "./types";

// Placeholder profiles only. Replace with approved ERC member portraits and quotes.
export const members: readonly Member[] = [
  {
    id: "member-placeholder-01",
    status: "placeholder",
    name: "Member 01",
    portrait: { src: "/images/image (20).jpg", alt: "Placeholder portrait of a runner", width: 1200, height: 1600 },
    runningSince: "PLACEHOLDER",
    favouriteDistance: "5K",
    quote: "For my sanity.",
  },
  {
    id: "member-placeholder-02",
    status: "placeholder",
    name: "Member 02",
    portrait: { src: "/images/image (28).jpg", alt: "Placeholder portrait of runners together", width: 1600, height: 1200 },
    runningSince: "PLACEHOLDER",
    favouriteDistance: "10K",
    quote: "For breakfast afterwards.",
  },
  {
    id: "member-placeholder-03",
    status: "placeholder",
    name: "Member 03",
    portrait: { src: "/images/image (17).jpg", alt: "Placeholder portrait of a runner in motion", width: 1600, height: 1000 },
    runningSince: "PLACEHOLDER",
    favouriteDistance: "5K / 10K",
    quote: "I wanted to get fit. Somehow I got friends too.",
  },
];
