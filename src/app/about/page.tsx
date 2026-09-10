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
            Diriba Gemechu Silica Sand Supplier supplies silica sand and
            construction materials from our office in Furi, Ethiopia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <div className={`card ${styles.card}`}>
              <h2>Our story</h2>
              <p>
                Our business was started to supply quality silica sand and
                construction materials to customers in Ethiopia. We are based in
                Furi and serve businesses and individuals in the surrounding
                area.
              </p>
            </div>

            <div className={`card ${styles.card}`}>
              <h2>What we do</h2>
              <p>
                We supply silica sand, white silica sand, river sand, river
                stone, limestone and crushed limestone from our office in Furi,
                on the road from Jemo-3 to Furi.
              </p>
            </div>

            <div className={`card ${styles.card}`}>
              <h2>Our mission</h2>
              <p>
                To provide reliable supply of essential materials at our office
                and to give customers clear, honest answers about availability,
                specifications and pricing.
              </p>
            </div>

            <div className={`card ${styles.card}`}>
              <h2>Why choose us</h2>
              <p>
                Easy to reach on the road from Jemo-3 to Furi, with products
                available directly at our office. Call us or visit to discuss
                your requirements.
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
