"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().optional(),
  phone: z.string().min(7, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please share a few more details about your requirement"),
});

type FormValues = z.infer<typeof formSchema>;

const inputClasses =
  "w-full rounded-xl border border-border-subtle bg-surface-muted px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-cyan-500";

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  async function onSubmit(values: FormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "contact-form" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-10 text-center">
        <CheckCircle2 className="text-cyan-500" size={40} />
        <h3 className="mt-4 text-lg font-semibold text-foreground">Thank you — request received!</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Our team will get back to you within one business day.
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          Your quote will be shared within 24 hours by our team — thank you for your patience.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-400"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Name *</label>
          <input {...register("name")} className={inputClasses} placeholder="Your full name" />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Company</label>
          <input {...register("company")} className={inputClasses} placeholder="Company name" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Phone *</label>
          <input {...register("phone")} className={inputClasses} placeholder="+91 98765 43210" />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Email *</label>
          <input {...register("email")} className={inputClasses} placeholder="you@company.com" />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Service Required *</label>
        <select {...register("service")} className={inputClasses} defaultValue={defaultService ?? ""}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Message *</label>
        <textarea
          {...register("message")}
          rows={4}
          className={cn(inputClasses, "resize-none")}
          placeholder="Tell us about your requirement…"
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong sending your request. Please try again.</p>
      )}

      <Button type="submit" disabled={isSubmitting} className="mt-2 w-full sm:w-auto">
        {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        {isSubmitting ? "Sending…" : "Send Request"}
      </Button>
    </form>
  );
}
