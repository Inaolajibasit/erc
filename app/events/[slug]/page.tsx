import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventDetail from "@/components/events/EventDetail";
import { clubEvents, getEvent } from "@/data/club-events";

export const revalidate = 60;
export function generateStaticParams() { return clubEvents.map((event) => ({ slug: event.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const event = getEvent((await params).slug); return { title: event?.title ?? "Event" }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const event = getEvent((await params).slug); if (!event) notFound(); return <EventDetail event={event} related={clubEvents.filter((item) => item.id !== event.id).slice(0, 3)} />; }
