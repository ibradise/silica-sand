import Link from "next/link";
import { navigation, siteConfig } from "@/config/site";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          {siteConfig.name}
        </Link>
        <nav aria-label="Main navigation">
          <ul className={styles.nav}>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
