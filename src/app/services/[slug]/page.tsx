import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ServicePhoto } from "@/components/services/ServicePhoto";
import { getServiceBySlug, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.categoryLabel}
        title={service.name}
        description={service.shortDescription}
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-10 text-xl font-semibold text-foreground">What&apos;s Included</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>

            {service.process.length > 0 && (
              <Reveal delay={0.12}>
                <h2 className="mt-12 text-xl font-semibold text-foreground">Our Process</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.process.map((step, i) => (
                    <div key={step.title} className="rounded-xl border border-border-subtle bg-surface p-5">
                      <span className="text-xs font-bold text-cyan-500">STEP {i + 1}</span>
                      <h3 className="mt-1.5 text-sm font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {service.faqs.length > 0 && (
              <Reveal delay={0.16}>
                <h2 className="mt-12 text-xl font-semibold text-foreground">Frequently Asked Questions</h2>
                <div className="mt-6 space-y-4">
                  {service.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-xl border border-border-subtle bg-surface p-5">
                      <h3 className="text-sm font-semibold text-foreground">{faq.question}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <div className="illustration-panel flex h-48 items-center justify-center rounded-2xl">
                <ServicePhoto
                  photo={service.photo}
                  name={service.name}
                  slug={service.slug}
                  illustrationClassName="relative z-10 h-full max-h-36 w-auto p-6"
                  sizes="400px"
                />
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-7">
                <h3 className="text-lg font-semibold text-foreground">Need {service.name}?</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  Get a free consultation and a no-obligation quote tailored to your requirement.
                </p>
                <ButtonLink href="/contact" className="mt-5 w-full">
                  Request a Quote <ArrowRight size={16} />
                </ButtonLink>
              </div>

              {related.length > 0 && (
                <div className="mt-6 rounded-2xl border border-border-subtle bg-surface p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Related Services
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/services/${r.slug}`}
                          className="text-sm font-medium text-foreground/80 hover:text-cyan-600 dark:hover:text-cyan-400"
                        >
                          {r.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16">
        <Container>
          <SectionHeading
            title="Explore More Services"
            description="See how our other services can support your infrastructure and security needs."
          />
          <div className="mt-10 text-center">
            <ButtonLink href="/services" variant="outline">
              View All Services
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
