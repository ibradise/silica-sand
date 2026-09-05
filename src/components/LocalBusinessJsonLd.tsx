import { siteConfig, type OpeningHoursEntry } from "@/config/site";

const isPlaceholder = (value: string | null | undefined): boolean =>
  typeof value === "string" && value.includes("[");

const DAY_MAP: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

function expandDays(days: string): string[] {
  const normalized = days.toLowerCase();
  const result: string[] = [];
  const dayEntries = Object.entries(DAY_MAP);

  if (normalized.includes(" - ") || normalized.includes("-")) {
    const [start, end] = normalized.split(/\s*-\s*/);
    const startIdx = dayEntries.findIndex(([d]) => d === start);
    const endIdx = dayEntries.findIndex(([d]) => d === end);
    if (startIdx !== -1 && endIdx !== -1) {
      for (let i = startIdx; i <= endIdx; i++) {
        result.push(dayEntries[i][1]);
      }
    }
  } else {
    const match = dayEntries.find(([d]) => normalized.includes(d));
    if (match) result.push(match[1]);
  }
  return result;
}

function to24Hour(time: string): string | null {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(am|pm)$/i);
  if (!match) return null;
  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  const meridiem = match[3].toLowerCase();
  if (meridiem === "pm" && hours !== 12) hours += 12;
  if (meridiem === "am" && hours === 12) hours = 0;
  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

function buildOpeningHoursSpec(entry: OpeningHoursEntry) {
  if (isPlaceholder(entry.days) || isPlaceholder(entry.hours)) return null;
  if (entry.hours.toLowerCase().includes("closed")) return null;

  const days = expandDays(entry.days);
  if (days.length === 0) return null;

  const [opensRaw, closesRaw] = entry.hours.split(/\s*-\s*/);
  if (!opensRaw || !closesRaw) return null;

  const opens = to24Hour(opensRaw);
  const closes = to24Hour(closesRaw);
  if (!opens || !closes) return null;

  return days.map((day) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: day,
    opens,
    closes,
  }));
}

export function LocalBusinessJsonLd() {
  const { name, description, contacts, address, openingHours } = siteConfig;

  const primaryPhone = contacts.find((c) => c.phone && !isPlaceholder(c.phone))?.phone;
  const primaryEmail = contacts.find((c) => c.email && !isPlaceholder(c.email))?.email;

  const openingHoursSpecification = openingHours
    .flatMap((entry) => buildOpeningHoursSpec(entry) ?? [])
    .filter(Boolean);

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
          openingHoursSpecification:
            openingHoursSpecification.length > 0
              ? openingHoursSpecification
              : undefined,
          areaServed: {
            "@type": "Country",
            name: "Ethiopia",
          },
        }),
      }}
    />
  );
}
