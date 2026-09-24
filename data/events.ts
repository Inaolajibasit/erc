import type { RunEvent } from "./types";

// Source: user-supplied "run schedule.txt" (September schedule).
export const events: readonly RunEvent[] = [
  {
    id: "saturday-social-2026-09-26-ikoyi",
    slug: "saturday-social-2026-09-26-ikoyi",
    status: "confirmed",
    title: "SATURDAY SOCIAL",
    startsAt: "2026-09-26T06:30:00+01:00",
    dateLabel: "SAT 26 SEP 2026",
    timeLabel: "06:30 AM MEETUP",
    distanceKm: null,
    distanceLabel: "5–10 KM",
    location: "FALOMO SQUARE, IKOYI",
    paceLevel: "RELAXED / ALL LEVELS",
    registrationUrl: "/runs",
    runType: "SATURDAY SOCIAL",
    registrationStatus: "REGISTRATION DETAILS TO BE CONFIRMED",
    description: "A schedule-derived placeholder description. Full run notes will be supplied by ERC.",
    meetingPoint: "FALOMO SQUARE, IKOYI",
    whatToExpect: ["Community-paced group run", "Schedule details to be confirmed by ERC"],
    whatToBring: ["Comfortable running kit", "Water and personal essentials"],
    routeNotes: "Route information to be confirmed.",
    image: {
      src: "/images/next-run.webp",
      alt: "Eko Runners gathered together on a Lagos street at night.",
      width: 1600,
      height: 1200,
    },
  },
];

export function getNextUpcomingEvent(now = Date.now(), source: readonly RunEvent[] = events) {
  return source
    .filter((event) => event.startsAt && new Date(event.startsAt).getTime() > now)
    .sort((a, b) => new Date(a.startsAt!).getTime() - new Date(b.startsAt!).getTime())[0] ?? null;
}
