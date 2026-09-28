import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name} for IT infrastructure, CCTV, networking, Wi-Fi, biometric, or computer sales requirements.`,
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const defaultService = params.service;

  const whatsappMessage = encodeURIComponent(
    `Hi ${siteConfig.name}, I'd like to enquire about your IT & security solutions.`
  );

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Requirement"
        description="Reach out for a free consultation — we typically respond within one business day."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <div className="grid gap-4 rounded-2xl border border-border-subtle bg-surface p-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-cyan-500" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Office Address</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2},{" "}
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state}{" "}
                    {siteConfig.contact.address.zip}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">GSTIN: {siteConfig.gstNumber}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-cyan-500" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="text-sm text-gray-600 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-cyan-500" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="block text-sm text-gray-600 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-cyan-500" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Business Hours</p>
                  {siteConfig.contact.hours.map((h) => (
                    <p key={h.days} className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {h.days}: {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 p-5 transition-colors hover:bg-[#25D366]/15"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Chat on WhatsApp</p>
                <p className="text-xs text-gray-500">Get an instant response from our team</p>
              </div>
            </a>
          </div>

          <div className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground">Request a Quote</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Fill out the form and our team will reach out with a tailored solution.
            </p>
            <div className="mt-6">
              <ContactForm defaultService={defaultService} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
