import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hi ${siteConfig.name}, I'd like to enquire about your IT & security solutions.`
  );

  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-300 hover:scale-110"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" className="h-7 w-7">
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.35.687 4.54 1.874 6.377L4 29l7.86-1.833A11.9 11.9 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.94 16.973c-.293.827-1.454 1.594-2.008 1.68-.512.08-1.16.114-1.87-.117-.43-.14-.982-.325-1.692-.638-2.978-1.286-4.922-4.28-5.07-4.482-.148-.202-1.212-1.613-1.212-3.078 0-1.464.767-2.183 1.04-2.484.272-.3.594-.376.792-.376.198 0 .396.002.569.01.183.01.428-.07.669.51.248.6.842 2.06.916 2.21.074.15.124.326.025.524-.1.198-.148.322-.297.495-.148.174-.31.39-.445.523-.148.148-.302.31-.13.61.173.3.767 1.267 1.646 2.052 1.13.997 2.083 1.306 2.383 1.454.298.148.47.124.643-.075.174-.198.744-.867.942-1.165.198-.298.396-.248.669-.148.272.099 1.727.815 2.024.964.297.148.494.223.568.347.075.124.075.72-.217 1.546Z" />
      </svg>
    </a>
  );
}
