import type { Metadata } from "next";
import { products } from "@/config/site";
import { ProductCard } from "@/components/ProductCard";
import styles from "./products.module.css";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Silica products available at our office in Ethiopia. Contact us for availability, specifications and pricing.",
};

export default function ProductsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Our products</h1>
        <p className={`muted ${styles.intro}`}>
          Contact us for current availability, specifications and pricing.
        </p>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
