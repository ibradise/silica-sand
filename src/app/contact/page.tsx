import type { Metadata } from "next";
import {
  formatAddress,
  siteConfig,
  telHref,
} from "@/config/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact details, address and opening hours for our office in Ethiopia.",
  openGraph: {
    title: "Contact",
    description:
      "Contact details, address and opening hours for our office in Ethiopia.",
  },
  alternates: {
    canonical: "./contact",
  },
};

export default function ContactPage() {
  const { contacts, address, openingHours } = siteConfig;

  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">Contact us</h1>
          <p className="muted intro">
            Visit our office or reach out by phone. We are happy to answer your
            questions about our silica products.
          </p>
        </div>

        <div className={styles.grid}>
          {contacts.map((entry, index) => (
            <div key={index} className={`card ${styles.card}`}>
              <h2>{entry.label.includes("[") ? `Contact ${index + 1}` : entry.label}</h2>
              {entry.phone && (
                <p>
                  <a href={telHref(entry.phone)}>{entry.phone}</a>
                </p>
              )}
              {entry.whatsapp && !entry.whatsapp.includes("[") && (
                <p>
                  <a
                    href={`https://wa.me/${entry.whatsapp.replace(/\D/g, "")}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Chat on WhatsApp
                  </a>
                </p>
              )}
              {entry.email && !entry.email.includes("[") && (
                <p>
                  <a href={`mailto:${entry.email}`}>{entry.email}</a>
                </p>
              )}
            </div>
          ))}

          <div className={`card ${styles.card}`}>
            <h2>Visit</h2>
            <address className={styles.address}>{formatAddress()}</address>
            {address.mapsLink && (
              <p>
                <a href={address.mapsLink} rel="noopener noreferrer" target="_blank">
                  Open in Google Maps
                </a>
              </p>
            )}
          </div>

          <div className={`card ${styles.card}`}>
            <h2>Opening hours</h2>
            <ul className={styles.hours}>
              {openingHours.map((entry) => (
                <li key={entry.days}>
                  <span>{entry.days}</span>
                  <span>{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
