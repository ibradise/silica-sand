import type { Metadata } from "next";
import Link from "next/link";
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
    q: "What silica products do you sell?",
    a: "We supply a range of silica products including silica sand, silica powder and silica quartz. Contact us for current availability and specifications.",
  },
  {
    q: "How do I place an order?",
    a: "You can call us, send a WhatsApp message, or visit our office in person. We will confirm availability, pricing and delivery options.",
  },
  {
    q: "Do you deliver?",
    a: "Delivery options depend on order size and location. Contact us to discuss your requirements and we will confirm what is possible.",
  },
  {
    q: "What are your opening hours?",
    a: "Our office opening hours are [to be confirmed by the business owner]. Contact us by phone for the most up-to-date hours.",
  },
  {
    q: "Where is your office located?",
    a: "Our office is located in [City], Ethiopia. Visit our contact page for the address and directions.",
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
  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">Frequently asked questions</h1>
          <p className="muted intro">
            Common questions about our products, ordering and office visits.
          </p>
        </div>

        <div className={styles.list}>
          {questions.map((item) => (
            <details key={item.q} className={`card ${styles.item}`}>
              <summary className={styles.question}>{item.q}</summary>
              <p className={styles.answer}>{item.a}</p>
            </details>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Still have questions?</p>
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
