import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PartnerLogo } from "@/components/partners/PartnerLogo";
import { partners } from "@/data/partners";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Partners",
  description: `${siteConfig.name} is an authorized partner for D-Link, Aruba, CP Plus, Hikvision, Dell, HP, Lenovo, TP-Link, and Microsoft.`,
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Partners"
        title="Backed by Industry-Leading Brands"
        description="We partner with the world's leading technology brands to deliver reliable, future-ready solutions."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, i) => (
              <Reveal key={partner.name} delay={(i % 3) * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-7">
                  <div className="flex h-16 items-center">
                    <PartnerLogo logo={partner.logo} name={partner.name} brandColor={partner.brandColor} />
                  </div>
                  <span className="mt-3 inline-flex w-fit items-center rounded-full bg-surface-muted px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    {partner.category}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {partner.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
