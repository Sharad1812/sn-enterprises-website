"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactFormWithParams() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") ?? undefined;

  return <ContactForm defaultService={defaultService} />;
}
