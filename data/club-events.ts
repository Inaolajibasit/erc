import type { Partner } from "./types";

export type EventCategory = "run-rave" | "padel" | "wellness" | "social" | "race" | "collaboration" | "training";
export type ClubEventStatus = "upcoming" | "sold-out" | "cancelled" | "completed";

export type ClubEvent = {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  category: EventCategory;
  startDate: string;
  endDate?: string;
  dateLabel: string;
  startTime?: string;
  location: { name: string; address?: string; mapUrl?: string };
  heroImage: string;
  heroVideo?: string;
  gallery?: string[];
  registrationUrl?: string;
  ticketPrice?: string;
  capacity?: number;
  status: ClubEventStatus;
  activities?: string[];
  programme?: string[];
  whatToBring?: string[];
  partnerIds?: string[];
  faq?: { question: string; answer: string }[];
  featured?: boolean;
  isPlaceholder: boolean;
};

/** Confirmed poster details are kept separate from development-only records. */
export const clubEvents: readonly ClubEvent[] = [
  { id: "run-rave-erc-dance-eko-2026", slug: "run-rave-erc-dance-eko-2026", title: "THE RUN RAVE: ERC x DANCE EKO", tagline: "Run. Race. Show up. Stay for the block party.", description: "A Saturday evening community experience combining a 5KM community run, an inter-community relay race, a car and bike showcase, and a block party.", category: "run-rave", startDate: "2026-10-03T18:00:00+01:00", dateLabel: "SATURDAY 03 OCT 2026", startTime: "06:00 PM ARRIVAL", location: { name: "LOCATION TO BE CONFIRMED" }, heroImage: "/images/image (29).jpg", heroVideo: "/video/rave-vid.mp4", gallery: ["/images/image (25).jpg", "/images/image (28).jpg"], registrationUrl: "https://www.eventporte.com/event-details/erc-runrave", status: "upcoming", activities: ["5KM community run", "Inter-community relay race", "Car & bike showcase", "Block party"], programme: ["06:00 PM / Arrival", "07:30 PM / 5KM community run", "08:30 PM / Inter-community relay race", "09:15 PM / Car & bike showcase", "10:00 PM / Block party"], featured: true, isPlaceholder: false },
  { id: "event-placeholder-padel", slug: "padel-social-development-event", title: "PADEL SOCIAL / DEVELOPMENT EVENT", tagline: "Play outside the usual route.", description: "Placeholder event copy for a future ERC social experience. Details will be replaced when an event is confirmed.", category: "padel", startDate: "2026-11-07T09:00:00+01:00", dateLabel: "DATE TO BE CONFIRMED", startTime: "TIME TO BE CONFIRMED", location: { name: "LAGOS / LOCATION TBC" }, heroImage: "/images/image (28).jpg", registrationUrl: "/events/padel-social-development-event", status: "upcoming", activities: ["Padel", "Social"], whatToBring: ["Details to be confirmed"], isPlaceholder: true },
  { id: "event-placeholder-wellness", slug: "wellness-day-development-event", title: "WELLNESS DAY / DEVELOPMENT EVENT", tagline: "Move, recover, reconnect.", description: "Placeholder archive copy for a future ERC wellness experience.", category: "wellness", startDate: "2026-08-08T09:00:00+01:00", dateLabel: "PAST EVENT / DATE TBC", location: { name: "LAGOS / LOCATION TBC" }, heroImage: "/images/image (20).jpg", gallery: ["/images/image (17).jpg"], status: "completed", activities: ["Recovery", "Community"], isPlaceholder: true },
  { id: "event-placeholder-collab", slug: "community-activation-development-event", title: "COMMUNITY ACTIVATION / DEVELOPMENT EVENT", tagline: "You had to be there.", description: "Placeholder recap copy for a future ERC collaboration.", category: "collaboration", startDate: "2026-07-11T09:00:00+01:00", dateLabel: "PAST EVENT / DATE TBC", location: { name: "LAGOS / LOCATION TBC" }, heroImage: "/images/image (25).jpg", gallery: ["/images/image (29).jpg", "/images/image (30).jpg"], status: "completed", isPlaceholder: true },
];

export const eventCategoryLabels: Record<EventCategory, string> = { "run-rave": "RUN RAVE", padel: "PADEL", wellness: "WELLNESS", social: "SOCIAL", race: "RACES", collaboration: "COLLABS", training: "TRAINING" };
export const getEvent = (slug: string) => clubEvents.find((event) => event.slug === slug) ?? null;
export const eventPartners = (_event: ClubEvent): readonly Partner[] => [];
