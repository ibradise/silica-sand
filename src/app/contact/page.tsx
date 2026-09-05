import type { Metadata } from "next";
import Link from "next/link";
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
  const primary = contacts[0];

  return (
    <>
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>[ CONTACT US ]</p>
          <h1 className={styles.title}>Get in touch</h1>
          <p className={styles.intro}>
            Visit our office or reach out by phone. We are happy to answer your
            questions about our silica products.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {contacts.map((entry, index) => (
              <div key={index} className={`card ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <svg
                    className={styles.cardIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                  <h2>{entry.label.includes("[") ? `Contact ${index + 1}` : entry.label}</h2>
                </div>
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
              <div className={styles.cardHeader}>
                <svg
                  className={styles.cardIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h2>Visit</h2>
              </div>
              <address className={styles.address}>{formatAddress()}</address>
              {address.mapsLink && (
                <p>
                  <a
                    href={address.mapsLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Open in Google Maps
                  </a>
                </p>
              )}
            </div>

            <div className={`card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <svg
                  className={styles.cardIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <h2>Opening hours</h2>
              </div>
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

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <p className={styles.eyebrow}>[ READY TO ORDER? ]</p>
              <h2 className={styles.ctaTitle}>Call us to discuss your requirements</h2>
              <p className={styles.ctaText}>
                We are happy to help with availability, specifications, pricing
                and delivery options for your order.
              </p>
              <div className={styles.ctaActions}>
                {primary?.phone && (
                  <a
                    href={telHref(primary.phone)}
                    className="button button-primary"
                  >
                    Call {primary.phone}
                  </a>
                )}
                <Link href="/products" className="button button-secondary">
                  View products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
