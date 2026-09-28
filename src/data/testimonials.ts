import type { Testimonial, FaqItem, StatItem, NavLink } from "@/types";
import { siteConfig } from "@/data/site";

export const testimonials: Testimonial[] = [
  {
    name: "Rohan Mehta",
    role: "Operations Director",
    company: "Manufacturing Client",
    quote: `${siteConfig.name} upgraded our entire CCTV network without a single day of production downtime. Their team is professional, fast, and genuinely knows the technology.`,
    rating: 5,
  },
  {
    name: "Anita Sharma",
    role: "IT Manager",
    company: "IT Services Client",
    quote:
      "The structured cabling work for our new office was immaculate — clean, labeled, and fully certified. Exactly what we needed for a smooth office move.",
    rating: 5,
  },
  {
    name: "Vikram Nair",
    role: "Facility Head",
    company: "Healthcare Client",
    quote:
      "Their AMC support has been reliable for over two years now. Any issue we raise gets a fast response, and our systems just work.",
    rating: 5,
  },
  {
    name: "Priya Iyer",
    role: "HR Head",
    company: "Retail Client",
    quote: `From biometric attendance to full office IT setup, ${siteConfig.name} handled everything as one team. Highly recommended for businesses that want a single reliable IT partner.`,
    rating: 5,
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What areas do you provide IT and security services in?",
    answer: `We have on-ground teams covering ${siteConfig.serviceAreas.join(", ")} — plus remote support available nationwide.`,
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC)?",
    answer:
      "Yes, we offer flexible AMC plans covering IT infrastructure, CCTV, networking, and biometric systems with scheduled maintenance and priority support.",
  },
  {
    question: "Can you handle both small offices and large enterprise deployments?",
    answer:
      "Yes, our team scales from single-location small business setups to multi-floor enterprise and campus-wide deployments.",
  },
  {
    question: "Which CCTV and networking brands do you work with?",
    answer:
      "We work with leading brands including Hikvision, CP Plus, D-Link, Aruba, TP-Link, Dell, HP, Lenovo, and Microsoft.",
  },
  {
    question: "How quickly can you respond to a support request?",
    answer:
      "Standard support requests are typically addressed within the same business day; AMC clients receive priority response times as per their contract.",
  },
  {
    question: "Do you provide free consultations or site surveys?",
    answer:
      "Yes, we offer a free initial consultation and, for networking/Wi-Fi/CCTV projects, an on-site survey to accurately scope your requirements.",
  },
];

export const stats: StatItem[] = [
  { label: "Years of Experience", value: 14, suffix: "+" },
  { label: "Projects Delivered", value: 600, suffix: "+" },
  { label: "Happy Clients", value: 200, suffix: "+" },
  { label: "Support Availability", value: 24, suffix: "/7" },
];

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
