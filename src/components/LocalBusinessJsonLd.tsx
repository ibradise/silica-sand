import { siteConfig } from "@/config/site";

export function LocalBusinessJsonLd() {
  const { name, description, contact, address, openingHours } = siteConfig;

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
          telephone: contact.phone !== "[Phone Number]" ? contact.phone : undefined,
          email: contact.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.street !== "[Street / Landmark]" ? address.street : undefined,
            addressLocality: address.city !== "[City]" ? address.city : undefined,
            addressRegion: address.region !== "[Region]" ? address.region : undefined,
            addressCountry: "ET",
          },
          geo: undefined,
          openingHoursSpecification: openingHours.map((entry) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: entry.days !== "[Days]" ? entry.days : undefined,
            opens: entry.hours !== "[e.g. 8:30 - 17:30]" ? entry.hours.split(" - ")[0] : undefined,
            closes: entry.hours !== "[e.g. 8:30 - 17:30]" ? entry.hours.split(" - ")[1] : undefined,
          })),
          areaServed: {
            "@type": "Country",
            name: "Ethiopia",
          },
        }),
      }}
    />
  );
}
