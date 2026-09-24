import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Wordmark({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link href="/" aria-label={`${SITE_NAME} home`} className={cn("erc-wordmark", className)} onClick={onClick}>
      <Image src="/icons/ERC_logo.svg" alt="" width={216} height={186} className="erc-logo" unoptimized />
    </Link>
  );
}
