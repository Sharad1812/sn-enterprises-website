import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Projects We've Delivered"
          description="CCTV and IT infrastructure work for clients across education, steel, mining and infrastructure."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <Link
                href="/projects"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="w-fit rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-navy-950">
                    {project.client}
                  </span>
                  <Building2 className="text-cyan-500/60" size={22} />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  {project.industry}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-cyan-600 group-hover:gap-2 dark:text-cyan-400">
                  View Details <ArrowUpRight size={15} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
