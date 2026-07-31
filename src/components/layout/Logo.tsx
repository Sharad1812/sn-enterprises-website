"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";

const LOGO_PATH = "/images/logo.png";

export function Logo({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={className}>
        <span className="text-cyan-500">{siteConfig.shortName[0]}</span>
        <span className="text-gold-500">{siteConfig.shortName.slice(1)}</span>
      </span>
    );
  }

  return (
    <span className={className} style={{ position: "relative", display: "inline-block" }}>
      <Image
        src={LOGO_PATH}
        alt={`${siteConfig.name} logo`}
        fill
        className="object-contain"
        sizes="40px"
        onError={() => setFailed(true)}
      />
    </span>
  );
}
