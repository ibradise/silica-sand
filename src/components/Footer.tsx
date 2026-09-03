import Link from "next/link";
import {
  formatAddress,
  siteConfig,
  telHref,
} from "@/config/site";
import styles from "./Footer.module.css";

export function Footer() {
  const { contacts, openingHours } = siteConfig;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.name}>{siteConfig.name}</p>
          <address className={styles.address}>
            {formatAddress()}
          </address>
        </div>

        <div>
          <h2 className={styles.heading}>Contact</h2>
          <ul className={styles.list}>
            {contacts.map((entry, index) => (
              <li key={index}>
                {entry.phone && <a href={telHref(entry.phone)}>{entry.phone}</a>}
                {entry.email && !entry.email.includes("[") && (
                  <a href={`mailto:${entry.email}`}>{entry.email}</a>
                )}
                {entry.whatsapp && !entry.whatsapp.includes("[") && (
                  <a
                    href={`https://wa.me/${entry.whatsapp.replace(/\D/g, "")}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    WhatsApp
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Hours</h2>
          <ul className={styles.list}>
            {openingHours.map((entry) => (
              <li key={entry.days}>
                {entry.days}: {entry.hours}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Pages</h2>
          <ul className={styles.list}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
      </div>
    </footer>
  );
}
