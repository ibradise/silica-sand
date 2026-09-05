import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/config/site";
import styles from "./ProductCard.module.css";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`card ${styles.card}`}
    >
      <Image
        src={product.image}
        alt=""
        fill
        className={styles.image}
        sizes="(min-width: 48rem) 33vw, 100vw"
      />
      <div className={styles.scrim} />
      <div className={styles.body}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.description}>{product.description}</p>
        <span className={styles.learnMore}>
          Learn more <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
