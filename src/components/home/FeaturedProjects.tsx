import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const project = projects[0];

  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Project"
          description="A look at one of our ongoing client engagements."
        />

        <div className="mt-14">
          <Reveal>
            <Link
              href="/projects"
              className="group grid overflow-hidden rounded-3xl border border-border-subtle bg-surface transition-all duration-300 hover:shadow-xl lg:grid-cols-[1fr_1.3fr]"
            >
              <div className="flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950 p-10">
                <Building2 className="text-cyan-400/60" size={56} />
              </div>
              <div className="flex flex-col p-8 sm:p-10">
                <span className="w-fit rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-navy-950">
                  {project.client}
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  {project.industry}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-cyan-600 group-hover:gap-2 dark:text-cyan-400">
                  View Case Study <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
