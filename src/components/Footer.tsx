import Link from "next/link";
import {
  formatAddress,
  products,
  siteConfig,
  telHref,
} from "@/config/site";
import styles from "./Footer.module.css";

export function Footer() {
  const { contacts, social } = siteConfig;
  const primary = contacts[0];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <p className={styles.name}>{siteConfig.name}</p>
          <address className={styles.address}>
            {formatAddress()}
          </address>
        </div>

        <div className={styles.col}>
          <h2 className={styles.heading}>Products</h2>
          <ul className={styles.list}>
            {products.slice(0, 4).map((product) => (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`}>{product.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/products" className={styles.allLink}>
                View all →
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h2 className={styles.heading}>Pages</h2>
          <ul className={styles.list}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">All products</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h2 className={styles.heading}>Connect</h2>
          <ul className={styles.list}>
            {social.facebook && (
              <li>
                <a
                  href={social.facebook}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
            )}
            {social.telegram && (
              <li>
                <a
                  href={social.telegram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Telegram
                </a>
              </li>
            )}
            {primary?.email && !primary.email.includes("[") && (
              <li>
                <a href={`mailto:${primary.email}`}>Email</a>
              </li>
            )}
            {primary?.phone && (
              <li>
                <a href={telHref(primary.phone)}>Call</a>
              </li>
            )}
            <li>
              <Link href="/contact">Request a quote</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
