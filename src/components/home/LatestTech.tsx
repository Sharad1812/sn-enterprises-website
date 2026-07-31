import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { latestTechnology } from "@/data/company";

export function LatestTech() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Latest Technology"
          title="Technology We Bring to Your Business"
          description="We continually evaluate and adopt technologies that improve security, reliability, and performance."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestTechnology.map((tech, i) => (
            <Reveal key={tech.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent p-6">
                <Sparkles className="text-cyan-500" size={22} />
                <h3 className="mt-4 text-base font-semibold text-foreground">{tech.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {tech.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
