"use client";

import { useState } from "react";
import Image from "next/image";

const MS_SQUARES = ["#F25022", "#7FBA00", "#00A4EF", "#FFB900"];

export function PartnerLogo({
  logo,
  name,
  brandColor,
}: {
  logo?: string;
  name: string;
  brandColor: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!logo || failed) {
    return (
      <span className="flex items-center gap-2">
        {name === "Microsoft" && (
          <span className="grid grid-cols-2 gap-0.5">
            {MS_SQUARES.map((color) => (
              <span key={color} className="h-2.5 w-2.5" style={{ backgroundColor: color }} />
            ))}
          </span>
        )}
        <span className="text-2xl font-bold tracking-tight" style={{ color: brandColor }}>
          {name}
        </span>
      </span>
    );
  }

  return (
    <div className="relative h-12 w-full">
      <Image
        src={logo}
        alt={`${name} logo`}
        fill
        className="object-contain object-left"
        sizes="200px"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
