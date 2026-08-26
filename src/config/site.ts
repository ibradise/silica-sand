export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const siteConfig = {
  name: "[Business Name]",
  legalName: "[Business Legal Name]",
  description:
    "Supplier of silica products in Ethiopia. Visit our office or contact us to discuss your requirements.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  contact: {
    phone: "[+251 9XX XXX XXX]",
    whatsapp: null as string | null,
    email: null as string | null,
  },

  address: {
    street: "[Street / Landmark]",
    subCity: "[Sub-city]",
    city: "[City]",
    region: "[Region]",
    country: "Ethiopia",
    mapsLink: null as string | null,
  },

  openingHours: [{ days: "[Days]", hours: "[e.g. 8:30 - 17:30]" }],
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const products: Product[] = [
  {
    slug: "silica-sand",
    name: "Silica Sand",
    description:
      "Silica sand available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/placeholder.svg",
  },
  {
    slug: "silica-powder",
    name: "Silica Powder",
    description:
      "Silica powder available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/placeholder.svg",
  },
  {
    slug: "silica-quartz",
    name: "Silica Quartz",
    description:
      "Silica quartz available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/placeholder.svg",
  },
];

export function formatAddress(): string {
  const { street, subCity, city, region, country } = siteConfig.address;
  return [street, subCity, city, region, country].filter(Boolean).join(", ");
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export type SiteConfig = typeof siteConfig;
