import type { Metadata } from "next";
import EventsIndex from "@/components/events/EventsIndex";
import { clubEvents } from "@/data/club-events";

export const metadata: Metadata = { title: "Events" };

export const revalidate = 60;

export default function Page() {
  const featured = clubEvents.find((event) => event.featured) ?? clubEvents.find((event) => event.status === "upcoming") ?? null;
  return <EventsIndex events={[...clubEvents]} featured={featured} />;
}
