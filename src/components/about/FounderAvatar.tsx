"use client";

import { useState } from "react";
import Image from "next/image";

export function FounderAvatar({
  image,
  initials,
  name,
}: {
  image?: string;
  initials: string;
  name: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <span className="flex h-40 w-40 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 text-4xl font-bold text-cyan-300 ring-2 ring-cyan-500/40 sm:h-48 sm:w-48">
        {initials}
      </span>
    );
  }

  return (
    <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl ring-2 ring-cyan-500/40 sm:h-48 sm:w-48">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        style={{ objectPosition: "center 82%" }}
        sizes="192px"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
