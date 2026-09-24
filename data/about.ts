import type { ImageAsset } from "./types";

export type AboutStory = { id: string; label: string; title: string; copy: string; image?: ImageAsset; placeholder: boolean };
export type AboutValue = { id: string; title: string; copy: string; placeholder: boolean };
export type AboutPerson = { id: string; name: string; role: string; image: ImageAsset; placeholder: boolean };

export const aboutStories: readonly AboutStory[] = [
  { id: "why-erc", label: "WHY ERC EXISTS", title: "A place to move through Lagos together.", copy: "A Lagos running community built around movement, wellness, culture and the people you meet along the way.", image: { src: "/images/image (25).jpg", alt: "Runners gathering together in Lagos", width: 1600, height: 1000 }, placeholder: false },
  { id: "beginning", label: "THE BEGINNING", title: "The beginning is still being written.", copy: "The origin story and founding details will be added when ERC supplies the approved account.", image: { src: "/images/image (20).jpg", alt: "Runner wearing an ERC kit", width: 1200, height: 1600 }, placeholder: true },
  { id: "lagos", label: "LAGOS / IDENTITY", title: "The city is part of every run.", copy: "Routes, weather, sound and the people along the way shape how this community moves through Lagos.", image: { src: "/images/image (29).jpg", alt: "Runners beneath evening lights", width: 1600, height: 1000 }, placeholder: false },
];

export const aboutValues: readonly AboutValue[] = [
  { id: "movement", title: "KEEP MOVING", copy: "Every pace has a place.", placeholder: false },
  { id: "community", title: "MAKE ROOM", copy: "Come for the run. Stay for the community.", placeholder: false },
  { id: "culture", title: "RUN THE CITY", copy: "Movement, wellness and culture belong in the same conversation.", placeholder: false },
];

export const aboutTeam: readonly AboutPerson[] = [
  { id: "founder-placeholder-01", name: "FOUNDING MEMBER / TBC", role: "ROLE TO BE CONFIRMED", image: { src: "/images/image (17).jpg", alt: "Placeholder founder portrait", width: 1600, height: 1000 }, placeholder: true },
  { id: "founder-placeholder-02", name: "FOUNDING MEMBER / TBC", role: "ROLE TO BE CONFIRMED", image: { src: "/images/image (28).jpg", alt: "Placeholder founder portrait", width: 1600, height: 1200 }, placeholder: true },
];

export const aboutTimeline = [
  { id: "milestone-placeholder-01", date: "DATE TBC", title: "THE ERC TIMELINE", copy: "Milestones will be added when confirmed by the club.", placeholder: true },
] as const;
