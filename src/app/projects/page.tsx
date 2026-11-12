import type { Metadata } from "next";
import { Building2, CheckCircle2, MapPin, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description: `${siteConfig.name}'s client projects: CCTV surveillance and IT infrastructure for Physics Wallah, Anindita Steels, Rungta Projects, ACC School Ranchi, Wazir Advisors and Rungta Mines.`,
};

const highlights = [
  { icon: Building2, label: "100+ Centres Supported" },
  { icon: MapPin, label: "Includes Ranchi Centre" },
  { icon: TrendingUp, label: "Nationwide Rollout" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Projects We're Proud Of"
        description="CCTV and IT infrastructure work we've delivered for our clients."
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-4xl space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug}>
              <div className="rounded-3xl border border-border-subtle bg-surface p-8 sm:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-cyan-500 px-4 py-1.5 text-xs font-semibold text-navy-950">
                    {project.client}
                  </span>
                  <span className="rounded-full bg-surface-muted px-4 py-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    {project.industry}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {project.title}
                </h2>

                <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {i === 0 && (
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {highlights.map((h) => (
                      <div
                        key={h.label}
                        className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface-muted p-4"
                      >
                        <h.icon size={18} className="shrink-0 text-cyan-500" />
                        <span className="text-sm font-medium text-foreground">{h.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <h3 className="mt-10 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  What We Delivered
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-surface-muted px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.outcome && (
                  <div className="mt-8 flex items-start gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-cyan-500" />
                    <p className="text-sm font-medium text-foreground">{project.outcome}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}

          <div className="pt-4 text-center">
            <ButtonLink href="/contact">Discuss Your Project</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
