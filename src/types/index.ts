import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

export type IllustrationComponent = ComponentType<{ className?: string }>;

export type ServiceCategory =
  | "it-solutions"
  | "cctv"
  | "networking"
  | "wifi"
  | "biometric"
  | "computer-sales";

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  photo: string;
  category: ServiceCategory;
  categoryLabel: string;
  features: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface Partner {
  name: string;
  category: string;
  description: string;
  logo?: string;
  brandColor: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  technologies: string[];
  outcome: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface LeadFormData {
  name: string;
  company?: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}
