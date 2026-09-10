import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredProducts, formatAddress, siteConfig, telHref } from "@/config/site";
import { ProductCard } from "@/components/ProductCard";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "./",
  },
  alternates: {
    canonical: "./",
  },
};

export default function HomePage() {
  const { contacts, address, openingHours } = siteConfig;

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroMedia} aria-hidden="true">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            priority
            className={styles.heroBg}
            sizes="100vw"
          />
        </div>
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.title}>{siteConfig.name}</h1>
          <p className={styles.subtitle}>{siteConfig.description}</p>
          <div className={styles.actions}>
            <Link href="/products" className="button button-secondary button-light">
              View products
            </Link>
            <a
              href={telHref(contacts[0].phone!)}
              className="button button-primary"
            >
              Call {contacts[0].phone}
            </a>
          </div>
        </div>
        <div className={styles.scrollCue} aria-hidden="true">
          <span>Scroll</span>
          <span className={styles.arrow}>↓</span>
        </div>
      </section>

      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>[ OUR PRODUCTS ]</p>
              <h2 className="section-title">What we supply</h2>
            </div>
            <Link href="/products" className={styles.viewAll}>
              View all products <span>→</span>
            </Link>
          </div>
          <div className={styles.grid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.visitSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>[ VISIT US ]</p>
              <h2 className="section-title">How to find us</h2>
            </div>
            {address.mapsLink && (
              <a
                href={address.mapsLink}
                rel="noopener noreferrer"
                target="_blank"
                className={styles.viewAll}
              >
                Get directions <span>→</span>
              </a>
            )}
          </div>
          <div className={styles.visit}>
            <div className={`card ${styles.infoCard}`}>
              <div className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className={styles.cardLabel}>Address</p>
              <p className={styles.cardValue}>{formatAddress()}</p>
              {address.mapsLink && (
                <a
                  href={address.mapsLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.cardLink}
                >
                  Open in Google Maps <span aria-hidden="true">→</span>
                </a>
              )}
            </div>

            <div className={`card ${styles.infoCard}`}>
              <div className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <p className={styles.cardLabel}>Opening hours</p>
              <ul className={styles.hours}>
                {openingHours.map((entry) => (
                  <li key={entry.days}>
                    <span>{entry.days}</span>
                    <span>{entry.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`card ${styles.infoCard}`}>
              <div className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </div>
              <p className={styles.cardLabel}>Contact</p>
              {contacts.slice(0, 2).map((entry, index) => (
                <div key={index} className={styles.contactEntry}>
                  {entry.phone && (
                    <a href={telHref(entry.phone)} className={styles.cardLink}>
                      {entry.phone}
                    </a>
                  )}
                  {entry.email && (
                    <a href={`mailto:${entry.email}`} className={styles.cardLink}>
                      {entry.email}
                    </a>
                  )}
                </div>
              ))}
              <Link href="/contact" className={styles.cardLink}>
                Full contact details <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <p className={styles.eyebrow}>[ GET IN TOUCH ]</p>
              <h2 className={styles.ctaTitle}>Ready to discuss your requirements?</h2>
              <p className={styles.ctaText}>
                Call us, send a message, or visit our office. We are happy to
                help with current availability, specifications and pricing.
              </p>
              <div className={styles.ctaActions}>
                <a href={telHref(contacts[0].phone!)} className="button button-primary">
                  Call {contacts[0].phone}
                </a>
                <Link href="/contact" className="button button-secondary">
                  Contact page
                </Link>
              </div>
            </div>
            <div className={styles.ctaHighlights}>
              <div className={styles.ctaItem}>
                <div className={styles.ctaIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <div>
                  <p className={styles.ctaItemLabel}>Call</p>
                  <a href={telHref(contacts[0].phone!)} className={styles.ctaItemValue}>
                    {contacts[0].phone}
                  </a>
                </div>
              </div>
              <div className={styles.ctaItem}>
                <div className={styles.ctaIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className={styles.ctaItemLabel}>Email</p>
                  {contacts[0].email ? (
                    <a href={`mailto:${contacts[0].email}`} className={styles.ctaItemValue}>
                      {contacts[0].email}
                    </a>
                  ) : (
                    <span className={styles.ctaItemMuted}>Contact us by phone</span>
                  )}
                </div>
              </div>
              <div className={styles.ctaItem}>
                <div className={styles.ctaIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className={styles.ctaItemLabel}>Visit</p>
                  <span className={styles.ctaItemValue}>{formatAddress()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
