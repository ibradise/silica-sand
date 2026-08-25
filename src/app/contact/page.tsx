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
};

export default function ContactPage() {
  const { contact, address, openingHours } = siteConfig;

  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Contact us</h1>
        <p className={`muted ${styles.intro}`}>
          Visit our office or reach out by phone. We are happy to answer your
          questions about our silica products.
        </p>

        <div className={styles.grid}>
          <div className={`card ${styles.card}`}>
            <h2>Call</h2>
            <p>
              <a href={telHref(contact.phone)}>{contact.phone}</a>
            </p>
            {contact.whatsapp && (
              <p>
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Chat on WhatsApp
                </a>
              </p>
            )}
            {contact.email && (
              <p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
            )}
          </div>

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
