import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export function ServiceAreas() {
  return (
    <section className="border-y border-border-subtle bg-surface-muted py-14">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                Where We Work
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Headquartered in {siteConfig.contact.address.city}, Serving Teams Across India
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {siteConfig.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface px-4 py-2 text-sm font-medium text-foreground/80"
                >
                  <MapPin size={14} className="text-cyan-500" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
