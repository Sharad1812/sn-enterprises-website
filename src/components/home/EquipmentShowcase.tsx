import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { RackIllustration } from "@/components/illustrations/RackIllustration";
import { SwitchIllustration } from "@/components/illustrations/SwitchIllustration";
import { WifiApIllustration } from "@/components/illustrations/WifiApIllustration";
import { CctvCameraIllustration } from "@/components/illustrations/CctvCameraIllustration";
import { FingerprintIllustration } from "@/components/illustrations/FingerprintIllustration";
import { CoverageHeatmapIllustration } from "@/components/illustrations/CoverageHeatmapIllustration";

const equipment = [
  {
    title: "Server & Network Racks",
    description: "Rack-mounted servers, patch panels, and cable management built for uptime.",
    Illustration: RackIllustration,
  },
  {
    title: "Managed Switches",
    description: "Gigabit and PoE switches powering structured, reliable office networks.",
    Illustration: SwitchIllustration,
  },
  {
    title: "Enterprise Wi-Fi",
    description: "Aruba & D-Link access points delivering seamless wireless coverage.",
    Illustration: WifiApIllustration,
  },
  {
    title: "CCTV Cameras",
    description: "IP & analog cameras with NVR/DVR recording for round-the-clock surveillance.",
    Illustration: CctvCameraIllustration,
  },
  {
    title: "Access Control",
    description: "Biometric and card-based access points integrated with your security policy.",
    Illustration: FingerprintIllustration,
  },
  {
    title: "Coverage Heat Mapping",
    description: "Site surveys visualized as heat maps to plan camera and access point placement.",
    Illustration: CoverageHeatmapIllustration,
  },
];

export function EquipmentShowcase() {
  return (
    <section className="bg-navy-950 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            What We Deploy
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real Infrastructure, Reliably Installed
          </h2>
          <p className="mt-4 text-base text-gray-400">
            A look at the equipment behind our networking, server, and Wi-Fi deployments.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {equipment.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="glow-hover relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <div className="orange-fade absolute -top-10 h-40 w-40" />
                <item.Illustration className="relative z-10 h-40 w-auto" />
                <h3 className="mt-6 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
