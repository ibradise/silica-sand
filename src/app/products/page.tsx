import type { Metadata } from "next";
import { products } from "@/config/site";
import { ProductCard } from "@/components/ProductCard";
import styles from "./products.module.css";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Silica sand, silica powder and silica quartz available for businesses across Ethiopia.",
  openGraph: {
    title: "Products",
    description:
      "Silica sand, silica powder and silica quartz available for businesses across Ethiopia.",
  },
  alternates: {
    canonical: "./products",
  },
};

export default function ProductsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">Our products</h1>
          <p className="muted intro">
            Contact us for current availability, specifications and pricing.
          </p>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
