import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PartnerLogo } from "@/components/partners/PartnerLogo";
import { partners } from "@/data/partners";

export function PartnersSlider() {
  const track = [...partners, ...partners];

  return (
    <section className="border-y border-border-subtle bg-surface-muted py-14">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
          Authorized Partners &amp; Brands We Work With
        </p>
      </Container>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface-muted to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface-muted to-transparent" />

        <div className="animate-marquee flex w-max gap-4">
          {track.map((p, i) => (
            <Link
              href="/partners"
              key={`${p.name}-${i}`}
              className="flex min-w-[180px] items-center justify-center rounded-xl border border-border-subtle bg-surface px-6 py-5 transition-colors hover:border-cyan-500/40"
            >
              <PartnerLogo logo={p.logo} name={p.name} brandColor={p.brandColor} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
