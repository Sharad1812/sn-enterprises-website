"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, ShieldCheck, Cpu, Wifi } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

const floatingBadges = [
  { icon: ShieldCheck, label: "CCTV & Security", position: "top-[18%] left-[6%]" },
  { icon: Wifi, label: "Enterprise Wi-Fi", position: "top-[62%] left-[4%]" },
  { icon: Cpu, label: "IT Infrastructure", position: "top-[30%] right-[4%]" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden bg-navy-950">
      <div className="bg-hero-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />

      <motion.div
        aria-hidden
        className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-float-slow"
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-navy-500/30 blur-3xl animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 right-1/3 h-96 w-96 rounded-full bg-gold-500/25 blur-3xl animate-float-slow"
        style={{ animationDelay: "0.8s" }}
      />

      <svg
        aria-hidden
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-30"
      >
        <g fill="none" stroke="#35d6e8" strokeWidth="0.15">
          <path className="animate-dash-flow" d="M0 12 H30 L38 20 H70 L78 12 H100" />
          <path
            className="animate-dash-flow"
            style={{ animationDelay: "1.2s" }}
            d="M0 48 H22 L30 40 H55 L64 48 H100"
          />
          <path
            className="animate-dash-flow"
            style={{ animationDelay: "2.4s" }}
            stroke="#f5b942"
            d="M15 0 V16 L25 24 V60"
          />
        </g>
        {[
          [30, 12],
          [70, 12],
          [30, 40],
          [64, 48],
          [15, 16],
        ].map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="0.7"
            fill="#35d6e8"
            className="animate-pulse-glow"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>

      {floatingBadges.map((b) => (
        <div
          key={b.label}
          className={`absolute z-10 hidden animate-float-slow items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-cyan-200 backdrop-blur-md lg:flex ${b.position}`}
        >
          <b.icon size={14} />
          {b.label}
        </div>
      ))}

      <Container className="relative z-10 py-28 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300"
        >
          IT Infrastructure &amp; Security Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Building the Infrastructure Behind{" "}
          <span className="text-gradient-cyan">Secure, Connected Businesses</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg"
        >
          {siteConfig.name} delivers IT infrastructure, CCTV security, structured networking,
          enterprise Wi-Fi, biometric access control, and computer sales — engineered and
          supported by one dependable team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <ButtonLink href="/contact" size="lg">
            Request a Quote <ArrowRight size={18} />
          </ButtonLink>
          <ButtonLink
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:border-cyan-400 hover:text-cyan-300"
          >
            <PhoneCall size={18} /> {siteConfig.contact.phoneDisplay}
          </ButtonLink>
        </motion.div>
      </Container>
    </section>
  );
}
