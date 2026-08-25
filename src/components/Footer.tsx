import Link from "next/link";
import {
  formatAddress,
  siteConfig,
  telHref,
} from "@/config/site";
import styles from "./Footer.module.css";

export function Footer() {
  const { contact, openingHours } = siteConfig;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.name}>{siteConfig.name}</p>
          <address className={`muted ${styles.address}`}>
            {formatAddress()}
          </address>
        </div>

        <div>
          <h2 className={styles.heading}>Contact</h2>
          <ul className={styles.list}>
            <li>
              <a href={telHref(contact.phone)}>{contact.phone}</a>
            </li>
            {contact.email && <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>}
            {contact.whatsapp && (
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Hours</h2>
          <ul className={`muted ${styles.list}`}>
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
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className={`container muted ${styles.bottom}`}>
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
      </div>
    </footer>
  );
}
