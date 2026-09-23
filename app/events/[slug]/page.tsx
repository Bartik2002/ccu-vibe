import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allEvents, getEventBySlug } from "@/data/site";
import EventDetailClient from "./event-detail-client";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allEvents.map((event) => ({
    slug: event.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found — CCU.Vibe",
    };
  }

  return {
    title: `${event.title} — CCU.Vibe Kolkata`,
    description: `${event.blurb} Happening at ${event.venue} on ${event.date}.`,
    openGraph: {
      title: `${event.title} — CCU.Vibe`,
      description: event.blurb,
      images: [{ url: event.photo.src, alt: event.photo.alt }],
    },
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  // Find related events (same category first, otherwise other events from directory)
  const relatedEvents = allEvents
    .filter((e) => e.id !== event.id)
    .sort((a, b) => (a.category === event.category ? -1 : 1))
    .slice(0, 3);

  return <EventDetailClient event={event} relatedEvents={relatedEvents} />;
}
