import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section className="bg-surface-muted py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Request a Free Consultation"
          description="Tell us about your requirement and our team will get back to you within one business day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <div className="grid gap-4 rounded-2xl border border-border-subtle bg-surface p-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-cyan-500" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                    {siteConfig.contact.address.zip}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-cyan-500" />
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="text-sm text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-cyan-500" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-gray-700 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-cyan-500" />
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    {siteConfig.contact.hours.map((h) => (
                      <p key={h.days}>
                        {h.days}: {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
