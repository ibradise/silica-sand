import type { Metadata } from "next";
import Link from "next/link";
import { products, siteConfig, telHref } from "@/config/site";
import { ProductCard } from "@/components/ProductCard";
import styles from "./products.module.css";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Silica sand, white silica sand, river sand, river stone, limestone and crushed limestone available from our office in Furi, Ethiopia.",
  openGraph: {
    title: "Products",
    description:
      "Silica sand, white silica sand, river sand, river stone, limestone and crushed limestone available from our office in Furi, Ethiopia.",
  },
  alternates: {
    canonical: "./products",
  },
};

export default function ProductsPage() {
  const { contacts } = siteConfig;
  const primary = contacts[0];

  return (
    <>
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.eyebrow}>[ OUR PRODUCTS ]</p>
              <h1 className={styles.title}>Silica products we supply</h1>
            </div>
            {primary?.phone && (
              <a
                href={telHref(primary.phone)}
                className={styles.viewAll}
              >
                Call us <span>→</span>
              </a>
            )}
          </div>
          <p className={styles.intro}>
            We supply silica sand, white silica sand, river sand, river stone,
            limestone and crushed limestone from our office in Furi, Ethiopia.
            Contact us for current availability, specifications and pricing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.gridHeader}>
            <h2 className={styles.gridTitle}>All products</h2>
            <p className={styles.gridCount}>
              Showing {products.length} product{products.length === 1 ? "" : "s"}
            </p>
          </div>
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <p className={styles.eyebrow}>[ NEED HELP? ]</p>
              <h2 className={styles.ctaTitle}>
                Not sure which product suits your needs?
              </h2>
              <p className={styles.ctaText}>
                Tell us about your project and we will help you pick the right
                silica product, with the right specification and quantity.
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
                  Contact page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
