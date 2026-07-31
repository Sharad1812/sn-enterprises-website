import {
  Camera,
  Cable,
  Wifi,
  Fingerprint,
  Monitor,
  FileCheck2,
  CloudCog,
  HardDrive,
  Network,
} from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "it-infrastructure",
    name: "IT Infrastructure",
    shortDescription:
      "End-to-end design, deployment, and support for reliable business IT environments.",
    description:
      "We plan, build, and maintain the complete IT backbone of your organization — from network architecture to endpoint management — so your business runs on infrastructure that scales with you and rarely goes down.",
    icon: Network,
    photo: "/images/services/it-infrastructure.jpg",
    category: "it-solutions",
    categoryLabel: "IT Solutions",
    features: [
      "IT infrastructure planning & audits",
      "Annual Maintenance Contracts (AMC)",
      "IT consulting & technology roadmaps",
      "Remote & on-site support",
      "Windows & Linux server administration",
      "Vendor and asset management",
    ],
    process: [
      { title: "Assess", description: "Audit existing infrastructure, risks, and bottlenecks." },
      { title: "Design", description: "Architect a scalable, secure infrastructure plan." },
      { title: "Deploy", description: "Implement with minimal disruption to operations." },
      { title: "Support", description: "Proactive monitoring and AMC-backed maintenance." },
    ],
    faqs: [
      {
        question: "Do you support hybrid on-prem and cloud environments?",
        answer:
          "Yes, we design and manage hybrid environments that combine on-premise servers with cloud resources for cost efficiency and resilience.",
      },
      {
        question: "What is included in an AMC?",
        answer:
          "Our AMC covers scheduled maintenance, priority remote/on-site support, patching, and health monitoring for an agreed set of assets.",
      },
    ],
  },
  {
    slug: "cctv-installation",
    name: "CCTV Installation",
    shortDescription: "Complete CCTV surveillance design, installation, and remote monitoring.",
    description:
      "From site survey to live remote monitoring, we deploy IP and analog CCTV systems that protect your premises around the clock, with NVR/DVR setups tailored to your camera count and retention needs.",
    icon: Camera,
    photo: "/images/services/cctv-installation.jpg",
    category: "cctv",
    categoryLabel: "CCTV Solutions",
    features: [
      "CCTV camera installation & configuration",
      "IP camera solutions",
      "NVR / DVR installation",
      "Remote monitoring setup (mobile & desktop)",
      "CCTV maintenance & health checks",
      "Perimeter & indoor security surveillance",
    ],
    process: [
      { title: "Site Survey", description: "Identify blind spots and optimal camera placement." },
      { title: "System Design", description: "Select cameras, NVR/DVR, and storage for your needs." },
      { title: "Installation", description: "Professional cabling, mounting, and configuration." },
      { title: "Monitoring Setup", description: "Enable remote viewing and alerting on your devices." },
    ],
    faqs: [
      {
        question: "Can I view my cameras remotely on my phone?",
        answer:
          "Yes, every installation includes a mobile and desktop remote monitoring setup so you can view live and recorded footage from anywhere.",
      },
      {
        question: "How long is CCTV footage retained?",
        answer:
          "Retention depends on your NVR/DVR storage capacity and camera resolution; we help you size storage for your required retention period.",
      },
    ],
  },
  {
    slug: "networking",
    name: "Networking Solutions",
    shortDescription: "Structured LAN, fiber, and passive network infrastructure done right.",
    description:
      "We design and install structured cabling and active networking systems — from patch panels to fiber backbones — that give your business a fast, reliable, and easily maintainable network.",
    icon: Cable,
    photo: "/images/services/networking.jpg",
    category: "networking",
    categoryLabel: "Networking Solutions",
    features: [
      "Structured LAN cabling",
      "Passive network cabling",
      "Fiber optic cabling",
      "Cat6 / Cat6A cabling",
      "Patch panel & network rack installation",
      "Network testing & certification",
    ],
    process: [
      { title: "Planning", description: "Map cabling routes, rack locations, and capacity needs." },
      { title: "Installation", description: "Run structured cabling with conduit & trunking." },
      { title: "Termination", description: "Terminate at patch panels and racks to standard." },
      { title: "Certification", description: "Test and certify every link for performance." },
    ],
    faqs: [
      {
        question: "Do you provide network testing & certification reports?",
        answer:
          "Yes, every structured cabling project is tested and certified with documented reports for compliance and warranty purposes.",
      },
      {
        question: "Can you upgrade our existing cabling to Cat6A?",
        answer:
          "Yes, we assess your current infrastructure and provide a phased upgrade plan with minimal downtime.",
      },
    ],
  },
  {
    slug: "structured-cabling",
    name: "Structured Cabling",
    shortDescription: "Organized, certified, and future-ready cabling infrastructure.",
    description:
      "Structured cabling is the foundation of every reliable network. We deliver neatly organized, labeled, and certified cabling systems using conduit, trunking, and rack management best practices.",
    icon: Cable,
    photo: "/images/services/structured-cabling.jpg",
    category: "networking",
    categoryLabel: "Networking Solutions",
    features: [
      "Cat6 / Cat6A structured cabling",
      "Fiber optic backbone cabling",
      "Network conduit & trunking",
      "Patch panel labeling & documentation",
      "Rack organization & cable management",
      "End-to-end testing & certification",
    ],
    process: [
      { title: "Site Assessment", description: "Evaluate building layout and cabling pathways." },
      { title: "Cable Routing", description: "Install conduit, trunking, and cable runs." },
      { title: "Termination & Labeling", description: "Terminate and document every cable run." },
      { title: "Testing", description: "Certify performance against industry standards." },
    ],
    faqs: [
      {
        question: "What's the difference between passive and active networking?",
        answer:
          "Passive networking (cabling, patch panels) provides the physical pathway; active networking (switches, routers) provides intelligent traffic handling. We deliver both.",
      },
    ],
  },
  {
    slug: "wifi-solutions",
    name: "Wi-Fi Solutions",
    shortDescription: "Enterprise-grade wireless coverage with Aruba & D-Link deployments.",
    description:
      "We design enterprise Wi-Fi networks with proper site surveys and access point placement, ensuring seamless coverage, roaming, and capacity for offices, warehouses, and campuses.",
    icon: Wifi,
    photo: "/images/services/wifi-solutions.jpg",
    category: "wifi",
    categoryLabel: "Wi-Fi Solutions",
    features: [
      "Enterprise Wi-Fi deployment",
      "Aruba Wi-Fi solutions",
      "D-Link networking",
      "Wireless site survey",
      "Access point installation",
      "Network optimization & load balancing",
    ],
    process: [
      { title: "Site Survey", description: "Measure signal, interference, and coverage gaps." },
      { title: "AP Planning", description: "Plan access point count and placement for full coverage." },
      { title: "Deployment", description: "Install and configure enterprise-grade access points." },
      { title: "Optimization", description: "Tune channels and bands for peak performance." },
    ],
    faqs: [
      {
        question: "Do you support multi-floor or campus deployments?",
        answer:
          "Yes, we design multi-AP deployments with centralized controllers for seamless roaming across floors and buildings.",
      },
    ],
  },
  {
    slug: "biometric-systems",
    name: "Biometric Systems",
    shortDescription: "Attendance and access control with fingerprint & face recognition.",
    description:
      "We install biometric attendance and access control systems — fingerprint and face recognition devices — integrated with your HR or security software for accurate, tamper-proof records.",
    icon: Fingerprint,
    photo: "/images/services/biometric-systems.jpg",
    category: "biometric",
    categoryLabel: "Biometric Solutions",
    features: [
      "Attendance system installation",
      "Access control systems",
      "Fingerprint devices",
      "Face recognition devices",
      "Device configuration",
      "Software integration (HR/Payroll)",
    ],
    process: [
      { title: "Requirement Study", description: "Understand access points and headcount needs." },
      { title: "Device Selection", description: "Recommend fingerprint or face recognition hardware." },
      { title: "Installation", description: "Mount and wire devices at all access points." },
      { title: "Integration", description: "Connect devices to attendance/access software." },
    ],
    faqs: [
      {
        question: "Can biometric attendance integrate with our payroll software?",
        answer:
          "Yes, most devices we deploy support data export or API integration with common HR and payroll systems.",
      },
    ],
  },
  {
    slug: "computer-sales",
    name: "Computer Sales",
    shortDescription: "Desktops, laptops, servers, and accessories from trusted brands.",
    description:
      "We supply and configure desktops, laptops, workstations, servers, and accessories from leading brands, backed by warranty support and optional AMC coverage.",
    icon: Monitor,
    photo: "/images/services/computer-sales.jpg",
    category: "computer-sales",
    categoryLabel: "Computer Sales",
    features: [
      "Desktop computers & workstations",
      "Custom gaming PCs",
      "Business laptops",
      "Servers",
      "Printers & UPS",
      "Networking equipment & accessories",
    ],
    process: [
      { title: "Consultation", description: "Understand usage, budget, and performance needs." },
      { title: "Configuration", description: "Recommend and configure the right hardware." },
      { title: "Delivery & Setup", description: "Deliver, install, and set up ready-to-use systems." },
      { title: "After-sales Support", description: "Warranty support and optional AMC coverage." },
    ],
    faqs: [
      {
        question: "Do you offer bulk pricing for offices?",
        answer:
          "Yes, we offer competitive bulk pricing and configuration standardization for office and enterprise rollouts.",
      },
    ],
  },
  {
    slug: "amc-services",
    name: "AMC Services",
    shortDescription: "Annual Maintenance Contracts for predictable, proactive IT upkeep.",
    description:
      "Our Annual Maintenance Contracts keep your IT, CCTV, networking, and biometric systems running smoothly with scheduled preventive maintenance and priority support — at a predictable annual cost.",
    icon: FileCheck2,
    photo: "/images/services/amc-services.jpg",
    category: "it-solutions",
    categoryLabel: "IT Solutions",
    features: [
      "Scheduled preventive maintenance",
      "Priority remote & on-site support",
      "Hardware health monitoring",
      "Software patching & updates",
      "Discounted spare parts",
      "Dedicated account manager",
    ],
    process: [
      { title: "Coverage Assessment", description: "Define assets and SLA levels to be covered." },
      { title: "Contract Setup", description: "Agree on visit frequency and response times." },
      { title: "Ongoing Maintenance", description: "Scheduled visits and continuous monitoring." },
      { title: "Reporting", description: "Periodic health reports and renewal recommendations." },
    ],
    faqs: [
      {
        question: "What SLA response times do you offer under AMC?",
        answer:
          "SLA tiers vary by plan, with priority plans offering same-day remote response and next-business-day on-site support.",
      },
    ],
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    shortDescription: "Cloud migration, backup, and management for modern businesses.",
    description:
      "We help businesses move workloads to the cloud, set up secure backups, and manage cloud infrastructure so you get flexibility and resilience without the operational overhead.",
    icon: CloudCog,
    photo: "/images/services/cloud-solutions.jpg",
    category: "it-solutions",
    categoryLabel: "IT Solutions",
    features: [
      "Cloud migration planning & execution",
      "Cloud backup & disaster recovery",
      "Email & productivity suite setup",
      "Cloud cost optimization",
      "Hybrid cloud architecture",
      "Ongoing cloud management",
    ],
    process: [
      { title: "Discovery", description: "Assess workloads suitable for cloud migration." },
      { title: "Architecture", description: "Design a secure, cost-efficient cloud setup." },
      { title: "Migration", description: "Migrate data and workloads with minimal downtime." },
      { title: "Management", description: "Ongoing monitoring, backup, and optimization." },
    ],
    faqs: [
      {
        question: "Which cloud providers do you work with?",
        answer:
          "We work with major providers and platforms including Microsoft 365, Azure, and other leading cloud ecosystems based on your needs.",
      },
    ],
  },
  {
    slug: "server-solutions",
    name: "Server Solutions",
    shortDescription: "Server installation, configuration, and lifecycle management.",
    description:
      "We supply, install, and configure physical and virtual servers — from file and application servers to virtualization hosts — and keep them patched, monitored, and backed up.",
    icon: HardDrive,
    photo: "/images/services/server-solutions.jpg",
    category: "it-solutions",
    categoryLabel: "IT Solutions",
    features: [
      "Server installation & configuration",
      "Windows Server & Linux administration",
      "Virtualization (Hyper-V / VMware)",
      "Backup & disaster recovery setup",
      "Active Directory & file server setup",
      "Performance monitoring & tuning",
    ],
    process: [
      { title: "Requirement Analysis", description: "Determine workload, capacity, and redundancy needs." },
      { title: "Procurement & Setup", description: "Supply and rack-mount the right server hardware." },
      { title: "Configuration", description: "Install OS, roles, and virtualization as required." },
      { title: "Monitoring", description: "Ongoing performance monitoring and patch management." },
    ],
    faqs: [
      {
        question: "Can you migrate our existing server to new hardware?",
        answer:
          "Yes, we plan and execute server migrations with minimal downtime, including data, roles, and configuration transfer.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
