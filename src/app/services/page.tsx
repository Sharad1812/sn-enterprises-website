import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ServicePhoto } from "@/components/services/ServicePhoto";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Explore ${siteConfig.name}'s full range of IT infrastructure, CCTV, networking, Wi-Fi, biometric, and computer sales services.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete IT & Security Solutions, One Team"
        description="From infrastructure to security to hardware — explore the full range of services we deliver."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="glow-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface hover:border-cyan-500/40"
                >
                  <div className="illustration-panel flex h-40 items-center justify-center">
                    <ServicePhoto
                      photo={service.photo}
                      name={service.name}
                      slug={service.slug}
                      illustrationClassName="relative z-10 h-full max-h-32 w-auto p-3"
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="inline-flex w-fit items-center rounded-full bg-surface-muted px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                      {service.categoryLabel}
                    </span>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-muted text-cyan-500">
                        <service.icon size={18} />
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-500"
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{service.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {service.shortDescription}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
