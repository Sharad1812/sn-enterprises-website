import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { siteConfig } from "@/data/site";

const leadSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  phone: z.string().min(7, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(5, "Please share a few more details"),
  source: z.enum(["contact-form", "chatbot", "quote-form"]).default("contact-form"),
});

type Lead = z.infer<typeof leadSchema>;

const sourceLabels: Record<Lead["source"], string> = {
  "contact-form": "Contact Page Form",
  chatbot: "Chatbot",
  "quote-form": "Quote Form",
};

function buildEmailBody(lead: Lead) {
  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["Company", lead.company || "—"],
    ["Service Required", lead.service || "—"],
    ["Source", sourceLabels[lead.source]],
  ];

  const text = [
    "New lead received from the website",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    lead.message,
  ].join("\n");

  const html = `
    <h2>New lead received from the website</h2>
    <table cellpadding="6" style="border-collapse: collapse;">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:bold;border:1px solid #ddd;">${label}</td><td style="border:1px solid #ddd;">${value}</td></tr>`
        )
        .join("")}
    </table>
    <p><strong>Message:</strong><br />${lead.message.replace(/\n/g, "<br />")}</p>
  `;

  return { text, html };
}

async function sendLeadEmail(lead: Lead) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.warn("[lead:email-skipped] GMAIL_USER / GMAIL_APP_PASSWORD not configured — email not sent.");
    return false;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const { text, html } = buildEmailBody(lead);
  const recipients = [siteConfig.contact.email, siteConfig.contact.supportEmail];

  await transporter.sendMail({
    from: `"${siteConfig.name} Website" <${user}>`,
    to: recipients,
    replyTo: lead.email,
    subject: `New Lead: ${lead.name}${lead.service ? ` — ${lead.service}` : ""}`,
    text,
    html,
  });

  return true;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  console.log("[lead:new]", parsed.data);

  try {
    await sendLeadEmail(parsed.data);
  } catch (err) {
    console.error("[lead:email-failed]", err);
    // Lead was received and logged even if email delivery failed — don't fail the request.
  }

  return NextResponse.json({ ok: true });
}
