import type { CommunityMetric } from "./types";

/** Development-only values. Replace through manual content, a CMS, or an API integration. */
export const communityMetrics: readonly CommunityMetric[] = [
  { id: "runners-this-month", status: "placeholder", label: "RUNNERS THIS MONTH", value: 128, suffix: "", source: "manual" },
  { id: "km-covered", status: "placeholder", label: "KM COVERED", value: 642, suffix: " KM", source: "manual" },
  { id: "runs-completed", status: "placeholder", label: "RUNS COMPLETED", value: 12, suffix: "", source: "manual" },
];

export const distanceOptions = ["5KM", "10KM", "21.1KM", "42.2KM"] as const;
