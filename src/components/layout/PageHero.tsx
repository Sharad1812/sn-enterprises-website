import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20">
      <div className="bg-hero-grid absolute inset-0 opacity-40" />
      <div className="orange-fade absolute -top-24 right-1/4 h-72 w-72" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/90 to-navy-900" />

      <Container className="relative z-10 text-center">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
