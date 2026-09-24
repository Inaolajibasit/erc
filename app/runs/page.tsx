import type { Metadata } from "next";
import RunsIndex from "@/components/runs/RunsIndex";
import { events, getNextUpcomingEvent } from "@/data/events";

export const metadata: Metadata = { title: "Runs" };
export const revalidate = 60;

export default function Page() {
  const now = Date.now();
  const upcoming = events.filter((event) => event.startsAt && new Date(event.startsAt).getTime() > now);
  const past = events.filter((event) => !event.startsAt || new Date(event.startsAt).getTime() <= now);
  return <RunsIndex upcoming={upcoming} past={past} featured={getNextUpcomingEvent(now, events)} />;
}
