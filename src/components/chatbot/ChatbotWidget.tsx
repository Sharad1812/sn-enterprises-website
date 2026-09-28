"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Loader2, MessageCircle, Send, User, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { buildBotReply, greetingMessage, leadCaptureSteps, type ChatMessage } from "@/lib/chatbot";
import { cn } from "@/lib/utils";

type Mode = "chat" | "leadCapture" | "submitting" | "done";

const validators: Record<string, (v: string) => string | null> = {
  name: (v) => (v.trim().length >= 2 ? null : "Please enter your full name."),
  phone: (v) => (/^[0-9+\-\s()]{7,15}$/.test(v.trim()) ? null : "Please enter a valid phone number."),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? null : "Please enter a valid email address."),
  company: () => null,
  requirement: (v) => (v.trim().length >= 3 ? null : "Please add a little more detail."),
};

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([greetingMessage]);
  const [mode, setMode] = useState<Mode>("chat");
  const [leadStep, setLeadStep] = useState(0);
  const [leadData, setLeadData] = useState<Record<string, string>>({});
  const [input, setInput] = useState("");
  const idRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextId = () => `m-${++idRef.current}`;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function pushBot(text: string, quickReplies?: string[]) {
    setMessages((m) => [...m, { id: nextId(), from: "bot", text, quickReplies }]);
  }

  function pushUser(text: string) {
    setMessages((m) => [...m, { id: nextId(), from: "user", text }]);
  }

  function startLeadCapture(prefillService?: string) {
    setMode("leadCapture");
    setLeadStep(0);
    setLeadData(prefillService ? { service: prefillService } : {});
    pushBot(leadCaptureSteps[0].prompt);
  }

  async function submitLead(finalData: Record<string, string>) {
    setMode("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: finalData.name,
          phone: finalData.phone,
          email: finalData.email,
          company: finalData.company && finalData.company.toLowerCase() !== "skip" ? finalData.company : undefined,
          service: finalData.service,
          message: finalData.requirement,
          source: "chatbot",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      pushBot(
        `Thanks, ${finalData.name}! Your requirement has been sent to our team — we'll reach out shortly. You can also call us at ${siteConfig.contact.phoneDisplay}.`,
        ["View our services", "Talk to a human"]
      );
    } catch {
      pushBot(
        `Sorry, something went wrong sending that. Please call us directly at ${siteConfig.contact.phoneDisplay} or email ${siteConfig.contact.email}.`
      );
    } finally {
      setMode("chat");
      setLeadStep(0);
      setLeadData({});
    }
  }

  function handleAction(text: string) {
    if (text === "Open WhatsApp") {
      const msg = encodeURIComponent(`Hi ${siteConfig.name}, I'd like to speak with your team.`);
      window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${msg}`, "_blank");
      return true;
    }
    if (text === "Call Us") {
      window.open(`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`, "_self");
      return true;
    }
    return false;
  }

  function handleSend(rawText: string) {
    const text = rawText.trim();
    if (!text) return;
    if (handleAction(text)) return;

    pushUser(text);
    setInput("");

    if (mode === "leadCapture") {
      const step = leadCaptureSteps[leadStep];
      const error = validators[step.field](text);
      if (error) {
        pushBot(error);
        return;
      }
      const updated = { ...leadData, [step.field]: text };
      setLeadData(updated);

      const isLast = leadStep === leadCaptureSteps.length - 1;
      if (isLast) {
        submitLead(updated);
      } else {
        setLeadStep((s) => s + 1);
        pushBot(leadCaptureSteps[leadStep + 1].prompt);
      }
      return;
    }

    if (text === "View our services") {
      pushBot("Here are our core service areas — tap one to learn more:", [
        "IT Infrastructure",
        "CCTV Installation",
        "Networking Solutions",
        "Wi-Fi Solutions",
        "Biometric Systems",
        "Computer & Laptop Sales",
      ]);
      return;
    }

    if (text === "Talk to a human") {
      pushBot(
        `I'll connect you with our team. You can reach us at ${siteConfig.contact.phoneDisplay} or start a WhatsApp chat right now.`,
        ["Open WhatsApp", "Call Us", "Request a quote"]
      );
      return;
    }

    if (text === "Ask something else") {
      pushBot("Sure — go ahead and type your question below.");
      return;
    }

    if (/quote/i.test(text)) {
      const match = text.split("—")[1]?.trim();
      startLeadCapture(match);
      return;
    }

    const reply = buildBotReply(text);
    pushBot(reply.text, reply.quickReplies);
  }

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-navy-700 text-white shadow-lg shadow-cyan-500/30 transition-transform duration-300 hover:scale-110"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-40 right-6 z-40 flex h-[520px] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border-subtle bg-navy-900 px-4 py-3.5 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                <Bot size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold">{siteConfig.name} Assistant</p>
                <p className="text-xs text-cyan-300">Typically replies instantly</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m) => (
                <div key={m.id} className={cn("flex gap-2", m.from === "user" && "flex-row-reverse")}>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white",
                      m.from === "bot" ? "bg-navy-700" : "bg-cyan-600"
                    )}
                  >
                    {m.from === "bot" ? <Bot size={14} /> : <User size={14} />}
                  </span>
                  <div className={cn("flex max-w-[78%] flex-col gap-2", m.from === "user" && "items-end")}>
                    <div
                      className={cn(
                        "rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                        m.from === "bot"
                          ? "bg-surface-muted text-foreground"
                          : "bg-cyan-600 text-white"
                      )}
                    >
                      {m.text}
                    </div>
                    {m.quickReplies && (
                      <div className="flex flex-wrap gap-1.5">
                        {m.quickReplies.map((qr) => (
                          <button
                            key={qr}
                            onClick={() => handleSend(qr)}
                            className="rounded-full border border-cyan-500/40 px-3 py-1 text-xs font-medium text-cyan-600 transition-colors hover:bg-cyan-500/10 dark:text-cyan-300"
                          >
                            {qr}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {mode === "submitting" && (
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Loader2 size={14} className="animate-spin" /> Sending your details…
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-2 border-t border-border-subtle bg-surface p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                className="flex-1 rounded-full border border-border-subtle bg-surface-muted px-4 py-2.5 text-sm outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-white transition-colors hover:bg-cyan-500"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
