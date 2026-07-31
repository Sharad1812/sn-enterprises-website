import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ServicePhoto } from "@/components/services/ServicePhoto";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          description="Complete IT infrastructure and security solutions, delivered end-to-end by one accountable team."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/services/${service.slug}`}
                className="glow-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface hover:border-cyan-500/40"
              >
                <div className="illustration-panel flex h-36 items-center justify-center">
                  <ServicePhoto
                    photo={service.photo}
                    name={service.name}
                    slug={service.slug}
                    illustrationClassName="relative z-10 h-full max-h-28 w-auto p-3"
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-muted text-cyan-500">
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

        <div className="mt-12 text-center">
          <ButtonLink href="/services" variant="outline">
            View All Services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
