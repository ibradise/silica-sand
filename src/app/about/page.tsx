import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, telHref } from "@/config/site";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about our silica products business in Ethiopia. Our story, mission and what we stand for.",
  openGraph: {
    title: "About",
    description:
      "Learn about our silica products business in Ethiopia. Our story, mission and what we stand for.",
  },
  alternates: {
    canonical: "./about",
  },
};

export default function AboutPage() {
  const { contacts } = siteConfig;
  const primary = contacts[0];

  return (
    <>
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>[ ABOUT US ]</p>
          <h1 className={styles.title}>Who we are</h1>
          <p className={styles.intro}>
            Learn about our business, what we stand for and why customers trust
            us for their silica product needs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={`card ${styles.card}`}>
              <h2>Our story</h2>
              <p>
                [Company history to be provided by the business owner. This
                section should cover how the business started, what motivated it,
                and how it has grown.]
              </p>
            </div>

            <div className={`card ${styles.card}`}>
              <h2>What we do</h2>
              <p>
                We supply silica products to businesses across Ethiopia from our
                office in [City]. Our customers include companies in construction,
                manufacturing, glass production and other industries that depend on
                quality silica materials.
              </p>
            </div>

            <div className={`card ${styles.card}`}>
              <h2>Our mission</h2>
              <p>
                [Mission statement to be provided by the business owner. What does
                the business aim to achieve? What do they stand for?]
              </p>
            </div>

            <div className={`card ${styles.card}`}>
              <h2>Why choose us</h2>
              <p>
                [Reasons customers choose this business. These should come directly
                from the owner — for example: quality products, reliable supply,
                competitive pricing, convenient location, experienced team. Only
                include claims the owner can back up.]
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <p className={styles.eyebrow}>[ GET IN TOUCH ]</p>
              <h2 className={styles.ctaTitle}>Have questions?</h2>
              <p className={styles.ctaText}>
                Get in touch to learn more about our products and how we can help
                with your silica requirements.
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
                <Link href="/contact" className="button button-secondary">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
