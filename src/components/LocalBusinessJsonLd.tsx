import { siteConfig } from "@/config/site";

const isPlaceholder = (value: string | null | undefined): boolean =>
  typeof value === "string" && value.includes("[");

export function LocalBusinessJsonLd() {
  const { name, description, contacts, address, openingHours } = siteConfig;

  const primaryPhone = contacts.find((c) => c.phone && !isPlaceholder(c.phone))?.phone;
  const primaryEmail = contacts.find((c) => c.email && !isPlaceholder(c.email))?.email;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name,
          description,
          url: siteConfig.url,
          telephone: primaryPhone,
          email: primaryEmail,
          address: {
            "@type": "PostalAddress",
            streetAddress: isPlaceholder(address.street) ? undefined : address.street,
            addressLocality: isPlaceholder(address.city) ? undefined : address.city,
            addressRegion: isPlaceholder(address.region) ? undefined : address.region,
            addressCountry: "ET",
          },
          openingHoursSpecification: openingHours
            .filter((entry) => !isPlaceholder(entry.days) && !isPlaceholder(entry.hours))
            .map((entry) => {
              const [opens, closes] = entry.hours.split(" - ");
              return {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: entry.days,
                opens,
                closes,
              };
            }),
          areaServed: {
            "@type": "Country",
            name: "Ethiopia",
          },
        }),
      }}
    />
  );
}
