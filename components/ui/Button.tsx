import Link from "next/link";
import type { ComponentPropsWithRef } from "react";
import ArrowUpRight from "./ArrowUpRight";
import { cn } from "@/lib/utils";

type Shared = {
  variant?: "primary" | "secondary";
  arrow?: boolean;
};
type ButtonProps = Shared & (
  | (ComponentPropsWithRef<"button"> & { href?: never })
  | (ComponentPropsWithRef<typeof Link> & { href: string })
);

export default function Button(props: ButtonProps) {
  const { variant = "primary", arrow = false, className, children, ...rest } = props;
  const styles = cn("erc-button", `erc-button--${variant}`, className);
  const content = <><span>{children}</span>{arrow && <ArrowUpRight className="erc-button__arrow" />}</>;

  if ("href" in rest && typeof rest.href === "string") {
    return <Link {...rest} className={styles}>{content}</Link>;
  }
  return <button type="button" {...rest as ComponentPropsWithRef<"button">} className={styles}>{content}</button>;
}
