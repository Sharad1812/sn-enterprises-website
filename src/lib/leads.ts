const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export type LeadSource = "contact-form" | "chatbot" | "quote-form";

const sourceLabels: Record<LeadSource, string> = {
  "contact-form": "Contact Page Form",
  chatbot: "Chatbot",
  "quote-form": "Quote Form",
};

export interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
  source: LeadSource;
}

export async function submitLead(lead: LeadPayload): Promise<boolean> {
  if (!FORMSPREE_ENDPOINT) {
    console.warn("[lead:skipped] NEXT_PUBLIC_FORMSPREE_ENDPOINT is not configured — lead not sent.");
    return false;
  }

  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      company: lead.company || "—",
      service: lead.service || "—",
      message: lead.message,
      _subject: `New Lead: ${lead.name}${lead.service ? ` — ${lead.service}` : ""}`,
      source: sourceLabels[lead.source],
    }),
  });

  return res.ok;
}
