import type { Metadata } from "next";
import { Award, Compass, Target } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { FounderAvatar } from "@/components/about/FounderAvatar";
import { siteConfig } from "@/data/site";
import { certifications, coreValues, team } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name}'s company profile, vision, mission, core values, and the team behind our IT infrastructure and security solutions.`,
};

export default function AboutPage() {
  const [founder] = team;

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`The Team Behind ${siteConfig.name}`}
        description="Over a decade of delivering dependable IT infrastructure and security solutions for growing businesses."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface p-7">
                <Compass className="text-cyan-500" size={28} />
                <h3 className="mt-4 text-lg font-semibold text-foreground">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  To be the most trusted IT infrastructure and security partner for businesses,
                  known for reliability, technical excellence, and long-term relationships.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface p-7">
                <Target className="text-cyan-500" size={28} />
                <h3 className="mt-4 text-lg font-semibold text-foreground">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  To design, deploy, and support IT, security, and networking systems that are
                  secure, scalable, and simple to rely on — backed by responsive human support.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="h-full rounded-2xl border border-border-subtle bg-surface p-7">
                <Award className="text-cyan-500" size={28} />
                <h3 className="mt-4 text-lg font-semibold text-foreground">Company Profile</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  Founded in {siteConfig.founded}, {siteConfig.name} has grown into a full-service
                  IT infrastructure and security solutions company serving clients across
                  manufacturing, healthcare, retail, logistics, and IT/ITES sectors.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Core Values" title="What Drives How We Work" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border-subtle bg-surface p-6 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-500/5 text-cyan-500">
                    <value.icon size={24} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Certifications" title="Authorized Partnerships & Certifications" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <Reveal key={cert} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface p-4">
                  <Award size={18} className="shrink-0 text-cyan-500" />
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Our Team" title="Leadership & Delivery Team" />

          <Reveal>
            <div className="mt-14 flex flex-col items-center gap-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent p-8 sm:flex-row sm:p-10">
              <FounderAvatar image={founder.image} initials={founder.initials} name={founder.name} />
              <div className="text-center sm:text-left">
                <span className="inline-flex rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-navy-950">
                  {founder.role}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-foreground">{founder.name}</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  Leads {siteConfig.name} end-to-end — from client strategy to on-ground delivery —
                  and has grown the company into a trusted, multi-city IT infrastructure and
                  security solutions partner.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 text-center">
            <ButtonLink href="/contact">Work With Our Team</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
