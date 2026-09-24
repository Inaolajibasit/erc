import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

// Actual section heading, never a decorative kicker or preheader.
export default function SectionLabel({ as: Heading = "h2", className, ...props }: ComponentPropsWithoutRef<"h2"> & { as?: "h2" | "h3" }) {
  return <Heading className={cn("text-section", className)} {...props} />;
}
