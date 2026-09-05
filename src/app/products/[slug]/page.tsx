import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatAddress,
  products,
  siteConfig,
  telHref,
} from "@/config/site";
import styles from "./product.module.css";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  const url = `/products/${product.slug}`;
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      url,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const { contacts } = siteConfig;
  const primary = contacts[0];

  const related = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className={styles.hero}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.heroScrim} />
        <div className={styles.heroInner}>
          <div className="container">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/products">All products</Link>
              <span aria-hidden="true">/</span>
              <span>{product.name}</span>
            </nav>
            <h1 className={styles.heroTitle}>{product.name}</h1>
          </div>
        </div>
      </div>

      {/* Info */}
      <section className={`section ${styles.details}`}>
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.infoCard}>
              <p className={styles.eyebrow}>[ PRODUCT DETAILS ]</p>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.divider} />
              <div className={styles.availList}>
                <div className={styles.availItem}>
                  <span className={styles.availLabel}>Availability</span>
                  <span className={styles.availValue}>
                    In stock — available at our office in {siteConfig.address.city}, Ethiopia
                  </span>
                </div>
                <div className={styles.availItem}>
                  <span className={styles.availLabel}>Location</span>
                  <span className={styles.availValue}>{formatAddress()}</span>
                </div>
              </div>
              <div className={styles.actions}>
                {primary?.phone && (
                  <a href={telHref(primary.phone)} className="button button-primary">
                    Call {primary.phone}
                  </a>
                )}
                <Link href="/contact" className="button button-secondary">
                  Contact us
                </Link>
              </div>
            </div>
            <div className={styles.imageWrap}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={styles.image}
                sizes="(min-width: 48rem) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className={`section ${styles.related}`}>
          <div className="container">
            <div className={styles.relatedHeader}>
              <h2 className={styles.relatedTitle}>Other products</h2>
              <Link href="/products" className={styles.viewAll}>
                View all products <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className={styles.relatedCard}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className={styles.relatedImage}
                    sizes="(min-width: 48rem) 33vw, 100vw"
                  />
                  <div className={styles.relatedScrim} />
                  <div className={styles.relatedBody}>
                    <p className={styles.relatedName}>{p.name}</p>
                    <span className={styles.relatedLink}>View product →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <p className={styles.ctaEyebrow}>[ NEED HELP? ]</p>
            <h2 className={styles.ctaTitle}>
              Not sure which product suits your needs?
            </h2>
            <p className={styles.ctaText}>
              Tell us your requirements and we will help you choose the right
              specification and quantity.
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
      </section>
    </>
  );
}
