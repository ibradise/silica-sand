import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, telHref } from "@/config/site";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about our silica products, ordering, delivery and office visits.",
  openGraph: {
    title: "FAQ",
    description:
      "Frequently asked questions about our silica products, ordering, delivery and office visits.",
  },
  alternates: {
    canonical: "./faq",
  },
};

const questions = [
  {
    q: "What products do you supply?",
    a: "We supply silica sand, white silica sand, river sand, river stone, limestone and crushed limestone from our office in Furi, Ethiopia.",
  },
  {
    q: "How do I place an order?",
    a: "Call us or visit our office in person. We will confirm availability, pricing and delivery options.",
  },
  {
    q: "Do you deliver?",
    a: "Delivery options depend on order size and location. Contact us to discuss your requirements and we will confirm what is possible.",
  },
  {
    q: "What are your opening hours?",
    a: "We are open Monday to Friday from 9:00 AM to 5:00 PM and Saturday from 9:00 AM to 12:30 PM. We are closed on Sunday.",
  },
  {
    q: "Where is your office located?",
    a: "Our office is in Furi, on the road from Jemo-3 to Furi in Sheger City, Oromia. Visit our contact page for the address and directions.",
  },
  {
    q: "Can I get a sample before ordering?",
    a: "Contact us to discuss sample availability for your specific requirements.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Payment methods are confirmed at the time of order. Contact us for details.",
  },
  {
    q: "Do you sell to individual buyers or only businesses?",
    a: "We supply both businesses and individual buyers. Contact us to discuss your needs.",
  },
];

export default function FaqPage() {
  const { contacts } = siteConfig;
  const primary = contacts[0];

  return (
    <>
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <p className={styles.eyebrow}>[ FAQ ]</p>
          <h1 className={styles.title}>Frequently asked questions</h1>
          <p className={styles.intro}>
            Common questions about our products, ordering and office visits.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.list}>
            {questions.map((item) => (
              <details key={item.q} className={`card ${styles.item}`}>
                <summary className={styles.question}>{item.q}</summary>
                <p className={styles.answer}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <p className={styles.eyebrow}>[ STILL HAVE QUESTIONS? ]</p>
              <h2 className={styles.ctaTitle}>We are happy to help</h2>
              <p className={styles.ctaText}>
                Can not find the answer you are looking for? Get in touch and we
                will respond as soon as possible.
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
