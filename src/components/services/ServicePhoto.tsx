"use client";

import { useState } from "react";
import Image from "next/image";
import { RackIllustration } from "@/components/illustrations/RackIllustration";
import { SwitchIllustration } from "@/components/illustrations/SwitchIllustration";
import { WifiApIllustration } from "@/components/illustrations/WifiApIllustration";
import { CctvCameraIllustration } from "@/components/illustrations/CctvCameraIllustration";
import { PatchPanelIllustration } from "@/components/illustrations/PatchPanelIllustration";
import { FingerprintIllustration } from "@/components/illustrations/FingerprintIllustration";
import { DesktopIllustration } from "@/components/illustrations/DesktopIllustration";
import { MaintenanceIllustration } from "@/components/illustrations/MaintenanceIllustration";
import { CloudIllustration } from "@/components/illustrations/CloudIllustration";
import { ServerUnitIllustration } from "@/components/illustrations/ServerUnitIllustration";
import { withBasePath } from "@/lib/basePath";
import type { IllustrationComponent } from "@/types";

const illustrationsBySlug: Record<string, IllustrationComponent> = {
  "it-infrastructure": RackIllustration,
  "cctv-installation": CctvCameraIllustration,
  networking: SwitchIllustration,
  "structured-cabling": PatchPanelIllustration,
  "wifi-solutions": WifiApIllustration,
  "biometric-systems": FingerprintIllustration,
  "computer-sales": DesktopIllustration,
  "amc-services": MaintenanceIllustration,
  "cloud-solutions": CloudIllustration,
  "server-solutions": ServerUnitIllustration,
};

export function ServicePhoto({
  photo,
  name,
  slug,
  illustrationClassName,
  sizes = "400px",
}: {
  photo: string;
  name: string;
  slug: string;
  illustrationClassName?: string;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);
  const Illustration = illustrationsBySlug[slug] ?? RackIllustration;

  if (failed) {
    return <Illustration className={illustrationClassName} />;
  }

  return (
    <Image
      src={withBasePath(photo)}
      alt={name}
      fill
      className="object-cover"
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  );
}
