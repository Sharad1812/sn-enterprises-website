import { ShieldCheck, Target, Users, Zap, Award, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/data/site";

export const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We recommend what your business actually needs — not what's easiest to sell.",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "Systems we deploy are built to run quietly in the background, day after day.",
  },
  {
    icon: Zap,
    title: "Responsiveness",
    description: "Fast support turnaround because downtime costs our clients real money.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We aim to be a long-term IT partner, not a one-time vendor.",
  },
];

export const certifications = [
  "Authorized D-Link Reseller Partner",
  "Aruba Networks Partner",
  "Hikvision Certified Installer",
  "CP Plus Authorized Partner",
  "Microsoft Solutions Partner",
  "Dell / HP / Lenovo Authorized Reseller",
];

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image?: string;
}

export const team: TeamMember[] = [
  { name: siteConfig.founderName, role: "Founder & Director", initials: "RS", image: "/images/team/rohit-sharma.jpg" },
];

export const whyChooseUs = [
  {
    icon: Award,
    title: "14+ Years of Experience",
    description: "A proven track record across IT, security, and networking projects.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Partners",
    description: "Authorized partnerships with leading global technology brands.",
  },
  {
    icon: Zap,
    title: "Fast Response Times",
    description: "Rapid remote and on-site support backed by AMC-level SLAs.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Ownership",
    description: "One team for IT, CCTV, networking, Wi-Fi, biometric, and hardware needs.",
  },
];

export const latestTechnology = [
  {
    title: "AI-Powered Video Analytics",
    description: "Smart CCTV analytics for intrusion detection, people counting, and anomaly alerts.",
  },
  {
    title: "Wi-Fi 6 / 6E Deployments",
    description: "Next-gen wireless standards for higher density and lower latency environments.",
  },
  {
    title: "Cloud-Managed Networking",
    description: "Centrally managed switches, APs, and firewalls with cloud dashboards.",
  },
  {
    title: "Face Recognition Access Control",
    description: "Contactless, high-accuracy biometric access replacing traditional card systems.",
  },
];
