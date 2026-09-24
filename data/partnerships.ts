export type PartnershipFormat = { id: string; title: string; description: string };

export const partnershipFormats: readonly PartnershipFormat[] = [
  { id: "run-sponsorship", title: "RUN SPONSORSHIP", description: "Build a considered presence around a recurring run when the format is right." },
  { id: "product-seeding", title: "PRODUCT SEEDING", description: "Put useful products in the hands of people who move through Lagos together." },
  { id: "event-activation", title: "EVENT ACTIVATION", description: "Create a physical moment with the community around an event or experience." },
  { id: "wellness-experiences", title: "WELLNESS EXPERIENCES", description: "Shape recovery, mobility and wellbeing experiences with the club." },
  { id: "community-challenges", title: "COMMUNITY CHALLENGES", description: "Invite the community into a clear, purposeful movement challenge." },
  { id: "content-collaborations", title: "CONTENT COLLABORATIONS", description: "Tell a story through movement, people and the city." },
];

export const partnershipReach = [
  { id: "reach-community", label: "COMMUNITY REACH", value: "TO BE VERIFIED" },
  { id: "reach-events", label: "PHYSICAL EVENTS", value: "TO BE VERIFIED" },
  { id: "reach-lagos", label: "LAGOS PRESENCE", value: "TO BE VERIFIED" },
] as const;

export const confirmedCollaborations: readonly string[] = [];
