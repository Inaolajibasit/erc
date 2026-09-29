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
  {
    id: "nigeria-independence-day-run-2026",
    slug: "nigeria-independence-day-run-2026",
    status: "confirmed",
    title: "NIGERIA INDEPENDENCE DAY RUN",
    startsAt: "2026-10-01T07:30:00+01:00",
    dateLabel: "THU 01 OCT 2026",
    timeLabel: "07:30 AM ARRIVAL",
    distanceKm: 5,
    distanceLabel: "5KM",
    location: "SOL BEACH, ELEGUSHI PRIVATE BEACH GATE 2",
    paceLevel: "COMMUNITY RUN / ALL LEVELS",
    registrationUrl: null,
    runType: "INDEPENDENCE DAY RUN",
    registrationStatus: "TICKETS AVAILABLE VIA EVENTPORTE",
    description: "A 5KM community run with movement, recovery and beach activities for Nigeria's Independence Day.",
    meetingPoint: "SOL BEACH, ELEGUSHI PRIVATE BEACH GATE 2",
    whatToExpect: ["07:30 AM / Arrival and check-in", "08:00 AM / 5KM community run with Red Bull", "09:00 AM / Core conditioning and breathwork with Samuel Francis", "09:45 AM / Yoga with Good Faith Yoga", "10:30 AM / Tabata with Kemen Fitness", "Volleyball and beach games"],
    whatToBring: ["Running kit", "Green, white and green dress code"],
    routeNotes: "5KM community run at Sol Beach.",
    image: {
      src: "/images/image (25).jpg",
      alt: "Eko Runners community gathering placeholder for the Nigeria Independence Day Run.",
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
