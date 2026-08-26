import type { Metadata } from "next";
import Link from "next/link";
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
  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">About us</h1>
          <p className="muted intro">
            Learn about our business, what we stand for and why customers trust
            us for their silica product needs.
          </p>
        </div>

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

        <div className={`card ${styles.cta}`}>
          <h2>Get in touch</h2>
          <p>
            Have questions about our products or want to visit our office? We are
            happy to help.
          </p>
          <p>
            <Link href="/contact" className="button button-primary">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
