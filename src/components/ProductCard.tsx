import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/config/site";
import styles from "./ProductCard.module.css";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className={`card ${styles.card}`}>
      <Image
        src={product.image}
        alt=""
        width={800}
        height={600}
        className={styles.image}
      />
      <div className={styles.body}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={`muted ${styles.description}`}>{product.description}</p>
      </div>
    </Link>
  );
}
