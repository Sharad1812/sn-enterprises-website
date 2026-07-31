"use client";

import { useState } from "react";
import Image from "next/image";

export function TeamMemberAvatar({
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
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 text-lg font-bold text-cyan-300">
        {initials}
      </span>
    );
  }

  return (
    <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full ring-1 ring-cyan-500/40">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        sizes="64px"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
