export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
};

export type OpeningHoursEntry = {
  days: string;
  hours: string;
};

export type ContactEntry = {
  label: string;
  phone?: string;
  email?: string;
  whatsapp?: string | null;
};

export const siteConfig = {
  name: "[Business Name]",
  legalName: "[Business Legal Name]",
  description:
    "Supplier of silica products in Ethiopia. Visit our office or contact us to discuss your requirements.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  contacts: [
    {
      label: "[Contact 1, e.g. Sales / General inquiries]",
      phone: "[+251 9XX XXX XXX]",
      email: "[email, e.g. sales@business.com]",
      whatsapp: "[WhatsApp number, e.g. +2519XXXXXXXX]",
    },
    {
      label: "[Contact 2, e.g. Office / Owner]",
      phone: "[+251 9XX XXX XXX]",
      email: "[email, e.g. info@business.com]",
      whatsapp: null,
    },
  ] satisfies ContactEntry[],

  address: {
    street: "[Street / Landmark, e.g. Bole Road, near Edna Mall]",
    subCity: "[Sub-city, e.g. Bole]",
    city: "[City, e.g. Addis Ababa]",
    region: "[Region, e.g. Addis Ababa]",
    country: "Ethiopia",
    mapsLink: null as string | null,
  },

  openingHours: [
    { days: "Monday - Friday", hours: "8:30 AM - 5:30 PM" },
    { days: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ] satisfies OpeningHoursEntry[],
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
    image: "/images/sand.jpg",
    featured: true,
  },
  {
    slug: "silica-powder",
    name: "Silica Powder",
    description:
      "Silica powder available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/powder.jpg",
    featured: true,
  },
  {
    slug: "silica-quartz",
    name: "Silica Quartz",
    description:
      "Silica quartz available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/quartz.jpg",
    featured: true,
  },
  {
    slug: "industrial-silica",
    name: "Industrial Silica",
    description:
      "Industrial silica available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/placeholder.svg",
    featured: true,
  },
  {
    slug: "silica-granules",
    name: "Silica Granules",
    description:
      "Silica granules available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/placeholder.svg",
    featured: true,
  },
  {
    slug: "quartz-sand",
    name: "Quartz Sand",
    description:
      "Quartz sand available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/placeholder.svg",
    featured: true,
  },
  {
  slug: "silica-stone",
  name: "Silica Stone",
  description:
    "Silica stone available at our office. Contact us for current availability, specifications and pricing.",
  image: "/images/placeholder.svg",
},
{
  slug: "silica-material",
  name: "Silica Material",
  description:
    "Silica material available at our office. Contact us for current availability, specifications and pricing.",
  image: "/images/placeholder.svg",
},
{
  slug: "quartz-material",
  name: "Quartz Material",
  description:
    "Quartz material available at our office. Contact us for current availability, specifications and pricing.",
  image: "/images/placeholder.svg",
},
];

export const featuredProducts: Product[] = products.filter(
  (product) => product.featured,
);

export function formatAddress(): string {
  const { street, subCity, city, region, country } = siteConfig.address;
  return [street, subCity, city, region, country].filter(Boolean).join(", ");
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export type SiteConfig = typeof siteConfig;
