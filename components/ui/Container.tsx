import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export default function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("page-container", className)} {...props} />;
}
