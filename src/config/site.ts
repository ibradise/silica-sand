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
  email?: string | null;
  whatsapp?: string | null;
};

export const siteConfig = {
  name: "Diriba Silica Sand Supplier",
  legalName: "Diriba Gemechu",
  description:
    "Supplier of silica sand, river sand, limestone and construction materials in Ethiopia. Visit our office at Kina Mall, 4th Floor, on the road from Jemo-3 to Furi in Sheger City, or call us to discuss your requirements.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  contacts: [
    {
      label: "Sales / General inquiries",
      phone: "+251 911 465 526",
      email: null,
      whatsapp: null,
    },
  ] as ContactEntry[],

  address: {
    street: "Kina Mall, 4th Floor",
    subCity: "Furi",
    city: "Sheger",
    region: "Oromia",
    country: "Ethiopia",
    mapsLink: "https://maps.app.goo.gl/93ocbhnSNXRjt4cdA" as string | null,
  },

  openingHours: [
    { days: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { days: "Saturday", hours: "9:00 AM - 12:30 PM" },
    { days: "Sunday", hours: "Closed" },
  ] satisfies OpeningHoursEntry[],

  social: {
    facebook:
      "https://www.facebook.com/profile.php?id=100090243952611",
    telegram: null as string | null,
  },
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
      "Natural silica sand available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/silica-sand.webp",
    featured: true,
  },
  {
    slug: "white-silica-sand",
    name: "White Silica Sand",
    description:
      "White silica sand available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/white-silica-sand.webp",
    featured: true,
  },
  {
    slug: "river-stone",
    name: "River Stone",
    description:
      "River stone available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/river-stone.webp",
  },
  {
    slug: "limestone",
    name: "Limestone",
    description:
      "Limestone available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/limestone.webp",
  },
  {
    slug: "river-sand",
    name: "River Sand",
    description:
      "River sand available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/river-sand.webp",
    featured: true,
  },
  {
    slug: "crushed-limestone",
    name: "Crushed Limestone",
    description:
      "Crushed limestone available at our office. Contact us for current availability, specifications and pricing.",
    image: "/images/crushed-limestone.webp",
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