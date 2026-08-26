import type { Metadata } from "next";
import Link from "next/link";
import { formatAddress, products, siteConfig, telHref } from "@/config/site";
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
  const { contact, address, openingHours } = siteConfig;

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.title}>{siteConfig.name}</h1>
          <p className={`muted ${styles.subtitle}`}>{siteConfig.description}</p>
          <div className={styles.actions}>
            <Link href="/products" className="button button-primary">
              View products
            </Link>
            <a
              href={telHref(contact.phone)}
              className="button button-secondary"
            >
              Call {contact.phone}
            </a>
          </div>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <h2 className="section-title">Our products</h2>
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <p className={styles.more}>
            <Link href="/products">See all products</Link>
          </p>
        </div>
      </section>

      <section className={`section ${styles.section}`}>
        <div className="container">
          <h2 className="section-title">Visit our office</h2>
          <div className={styles.visit}>
            <div className={`card ${styles.infoCard}`}>
              <h3>Address</h3>
              <p>{formatAddress()}</p>
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
            <div className={`card ${styles.infoCard}`}>
              <h3>Opening hours</h3>
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
              <h3>Contact</h3>
              <p>
                Phone: <a href={telHref(contact.phone)}>{contact.phone}</a>
              </p>
              {contact.email && (
                <p>
                  Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              )}
              <p>
                <Link href="/contact" className="button button-primary">
                  Contact page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Ready to discuss your requirements?</h2>
          <p className={`muted ${styles.ctaText}`}>
            Visit our office or contact us by phone. We are happy to answer your
            questions about our silica products.
          </p>
          <div className={styles.ctaActions}>
            <a href={telHref(contact.phone)} className="button button-primary">
              Call {contact.phone}
            </a>
            <Link href="/contact" className="button button-secondary">
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
