import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

const highlights = [
  "One partner for IT, security, and networking",
  "Certified engineers & authorized brand partnerships",
  "AMC-backed proactive support",
  "Transparent, milestone-based project delivery",
];

export function Intro() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
            About {siteConfig.name}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your Complete IT Infrastructure &amp; Security Solutions Partner
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            {siteConfig.description} We combine deep technical expertise with dependable,
            responsive service — so you can focus on running your business while we keep the
            technology behind it secure and running smoothly.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-500" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ButtonLink href="/about" variant="secondary">
              More About Us
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
