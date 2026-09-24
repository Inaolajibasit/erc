export type ContentStatus = "placeholder" | "confirmed";

export interface ContentRecord {
  id: string;
  status: ContentStatus;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface RunEvent extends ContentRecord {
  slug: string;
  title: string;
  /** ISO 8601 timestamp with an explicit offset; null until confirmed. */
  startsAt: string | null;
  location: string | null;
  distanceKm: number | null;
  distanceLabel: string | null;
  paceLevel: string | null;
  dateLabel: string | null;
  timeLabel: string | null;
  registrationUrl: string | null;
  runType: string | null;
  registrationStatus: string | null;
  description: string | null;
  meetingPoint: string | null;
  whatToExpect: string[];
  whatToBring: string[];
  routeNotes: string | null;
  image?: ImageAsset;
}

export interface Member extends ContentRecord {
  name: string;
  portrait?: ImageAsset;
  runningSince: string | null;
  favouriteDistance: string | null;
  quote: string | null;
}

export interface GalleryItem extends ContentRecord {
  image: ImageAsset;
  caption: string;
  dayLabel: string;
  locationLabel: string;
  eventLabel: string;
  hashtag: string;
  eventId?: string;
}

export interface Partner extends ContentRecord {
  name: string;
  logo?: ImageAsset;
  websiteUrl: string | null;
}

export interface RunType extends ContentRecord {
  name: string;
  description: string | null;
  level: string | null;
  details: string[];
  media: MediaAsset | null;
}

export interface MediaAsset {
  type: "image" | "video";
  src: string;
  alt: string;
  width?: number;
  height?: number;
  poster?: string;
}

export interface MovingMedia extends ContentRecord {
  media: MediaAsset;
  timeLabel: string;
  placeLabel: string;
  contextLabel: string;
  aspect: "landscape" | "portrait" | "wide";
}

export type MetricSource = "manual" | "cms" | "api";

export interface CommunityMetric extends ContentRecord {
  label: string;
  value: number | null;
  suffix: string;
  source: MetricSource;
}

export interface CommunityChapter extends ContentRecord {
  name: string;
  description: string;
  image: ImageAsset;
}

export type RouteGroup = "island" | "mainland";

export interface RunRoute extends ContentRecord {
  name: string;
  group: RouteGroup;
  path: string;
  marker: { x: number; y: number };
}
