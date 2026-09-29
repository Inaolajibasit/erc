export type ERCLink = {
  id: string;
  title: string;
  displayUrl: string;
  href: string;
  category: "run" | "community" | "resources";
};

/** Links supplied from the ERC Instagram profile. */
export const ercLinks: readonly ERCLink[] = [
  {
    id: "run-rave-registration",
    title: "THE RUN RAVE: ERC x Dance Eko",
    displayUrl: "www.eventporte.com/event-details/erc-runrave",
    href: "https://www.eventporte.com/event-details/erc-runrave",
    category: "run",
  },
  {
    id: "membership-registration",
    title: "Become a Member: Registration Form",
    displayUrl: "forms.gle/9YQsHjr4RRmivbLq9",
    href: "https://forms.gle/9YQsHjr4RRmivbLq9",
    category: "community",
  },
  {
    id: "impact-report",
    title: "ERC Data & Impact Report",
    displayUrl: "forms.gle/TKWZy4Ycdn364BSo9",
    href: "https://forms.gle/TKWZy4Ycdn364BSo9",
    category: "resources",
  },
  {
    id: "strava",
    title: "Follow us on Strava to sign up for the next run!",
    displayUrl: "strava.app.link/u6n5fAmFIQb",
    href: "https://strava.app.link/u6n5fAmFIQb",
    category: "run",
  },
  {
    id: "track-lab",
    title: "TRACK LAB",
    displayUrl: "eventporte.com/tracklab",
    href: "https://eventporte.com/tracklab",
    category: "run",
  },
];

export const membershipLink = ercLinks.find((link) => link.id === "membership-registration")!;
