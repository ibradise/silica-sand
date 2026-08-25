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
  return { title: product.name, description: product.description };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <section className="section">
      <div className={`container ${styles.layout}`}>
        <Image
          src={product.image}
          alt=""
          width={800}
          height={600}
          className={styles.image}
        />
        <div className={styles.details}>
          <h1 className={styles.name}>{product.name}</h1>
          <p className="muted">{product.description}</p>

          <div className={`card ${styles.info}`}>
            <h2 className={styles.infoHeading}>Availability</h2>
            <p>
              This product is available at our office in{" "}
              {siteConfig.address.city}, Ethiopia.
            </p>
            <p>
              <a href={telHref(siteConfig.contact.phone)} className="button button-primary">
                Call {siteConfig.contact.phone}
              </a>
            </p>
            <p className="muted">
              {formatAddress()}
            </p>
            <p>
              <Link href="/contact">Contact and directions</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
