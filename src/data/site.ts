export const siteConfig = {
  name: "Satya Narayan Enterprise",
  legalName: "Satya Narayan Enterprise",
  shortName: "SN",
  gstNumber: "20IZOPS4151M1ZT",
  founderName: "Rohit Sharma",
  tagline: "Securing & Powering Your Digital Infrastructure",
  description:
    "Satya Narayan Enterprise delivers end-to-end IT infrastructure, CCTV security, structured networking, enterprise Wi-Fi, biometric access control, and computer sales & support for businesses across India.",
  url: "https://sharad1812.github.io/sn-enterprises-website",
  ogImage: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/og-image.jpg`,
  founded: 2011,
  serviceAreas: ["Ranchi", "Delhi", "Gurugram", "Chennai", "Bengaluru", "Maharashtra", "Bihar", "Uttar Pradesh"],
  contact: {
    phone: "+919798418570",
    phoneDisplay: "+919798418570",
    whatsapp: "919798418570",
    email: "mailsne62@gmail.com",
    supportEmail: "sharadrahne2001@gmail.com",
    address: {
      line1: "Kali Babu Street",
      line2: "Upper Bazar",
      city: "Ranchi",
      state: "Jharkhand",
      zip: "834001",
      country: "India",
    },
    hours: [
      { days: "Monday – Saturday", time: "9:30 AM – 7:00 PM" },
      { days: "Sunday", time: "Closed (Emergency Support Available)" },
    ],
  },
} as const;

export const NOTE_PLACEHOLDER_CONTACT =
  "Website URL, email domain, and social links above are placeholders — update src/data/site.ts once real ones exist.";
