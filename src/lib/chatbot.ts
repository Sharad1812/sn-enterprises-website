import { services } from "@/data/services";
import { faqs } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export interface ChatMessage {
  id: string;
  from: "bot" | "user";
  text: string;
  quickReplies?: string[];
}

export function findFaqAnswer(question: string): string | null {
  const q = question.toLowerCase();
  let best: { score: number; answer: string } | null = null;

  for (const faq of faqs) {
    const words = faq.question.toLowerCase().split(/\W+/).filter((w) => w.length > 3);
    const score = words.reduce((acc, w) => (q.includes(w) ? acc + 1 : acc), 0);
    if (score > 0 && (!best || score > best.score)) {
      best = { score, answer: faq.answer };
    }
  }

  return best ? best.answer : null;
}

export function findServiceMatch(question: string) {
  const q = question.toLowerCase();
  return services.find((s) => {
    if (q.includes(s.name.toLowerCase())) return true;
    return s.features.some((f) => f.length > 5 && q.includes(f.toLowerCase()));
  });
}

export function buildBotReply(userText: string): { text: string; quickReplies?: string[] } {
  const service = findServiceMatch(userText);
  if (service) {
    return {
      text: `${service.name}: ${service.shortDescription} Would you like to request a quote for this service, or ask something else?`,
      quickReplies: [`Get a quote — ${service.name}`, "Ask something else", "Talk to a human"],
    };
  }

  const faqAnswer = findFaqAnswer(userText);
  if (faqAnswer) {
    return {
      text: faqAnswer,
      quickReplies: ["View our services", "Request a quote", "Talk to a human"],
    };
  }

  return {
    text: `I couldn't find an exact answer for that. I can connect you with our team, or you can share your requirement and we'll get back to you shortly. You can also call us directly at ${siteConfig.contact.phoneDisplay}.`,
    quickReplies: ["Request a quote", "Talk to a human", "View our services"],
  };
}

export const greetingMessage: ChatMessage = {
  id: "greeting",
  from: "bot",
  text: `Hi, I'm the ${siteConfig.name} assistant. I can help with IT infrastructure, CCTV, networking, Wi-Fi, biometric, or computer sales questions — or connect you with our team. How can I help?`,
  quickReplies: ["View our services", "Request a quote", "Talk to a human"],
};

export const leadCaptureSteps: {
  field: "name" | "phone" | "email" | "company" | "requirement";
  prompt: string;
}[] = [
  { field: "name", prompt: "Great — let's get your requirement to the right person. What's your name?" },
  { field: "phone", prompt: "Thanks! What's the best phone number to reach you on?" },
  { field: "email", prompt: "And your email address?" },
  { field: "company", prompt: "Which company are you with? (You can type \"skip\" if not applicable)" },
  { field: "requirement", prompt: "Lastly, briefly describe what you need help with." },
];
