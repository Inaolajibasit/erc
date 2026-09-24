import type { RunType } from "./types";

// Programme language supplied for the homepage index. Media is supplied ERC
// material and can be replaced without changing the component.
export const runTypes: readonly RunType[] = [
  {
    id: "saturday-social",
    status: "confirmed",
    name: "SATURDAY SOCIAL",
    level: "Easy – Intermediate",
    description: "A relaxed community run for moving together and finding your pace.",
    details: ["5K / 10K"],
    media: {
      type: "image",
      src: "/images/image (25).jpg",
      alt: "Eko Runners gathering together after a run.",
      width: 3072,
      height: 4096,
    },
  },
  {
    id: "track-lab",
    status: "confirmed",
    name: "TRACK LAB",
    level: "Performance",
    description: "A focused session for speed, drills and running technique.",
    details: ["SPEED", "DRILLS", "TECHNIQUE"],
    media: {
      type: "video",
      src: "/video/track-vid.mp4",
      poster: "/images/image (7).jpg",
      alt: "Track Lab session footage.",
    },
  },
  {
    id: "night-run",
    status: "confirmed",
    name: "NIGHT RUN",
    level: "Intermediate – Advanced",
    description: null,
    details: [],
    media: {
      type: "image",
      src: "/images/image (29).jpg",
      alt: "Runners together under lights at night.",
      width: 3072,
      height: 4096,
    },
  },
  {
    id: "wellness-events",
    status: "confirmed",
    name: "WELLNESS & EVENTS",
    level: null,
    description: null,
    details: ["MOBILITY", "YOGA", "HIIT", "SOCIAL"],
    media: {
      type: "image",
      src: "/images/image (28).jpg",
      alt: "Members of the Eko Runners community together.",
      width: 3072,
      height: 4096,
    },
  },
];
