"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, siteConfig } from "@/config/site";
import styles from "./Header.module.css";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span className={`${styles.bar} ${open ? styles.barOpen : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barOpen : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barOpen : ""}`} />
      </button>

      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        id="mobile-nav"
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
        aria-label="Mobile navigation"
      >
        <div className={styles.mobileNavHeader}>
          <Link
            href="/"
            className={styles.brand}
            onClick={() => setOpen(false)}
          >
            <Image
              src="/images/logo.jpg"
              alt="Diriba Silica Sand Supplier logo"
              width={28}
              height={28}
              className={styles.brandLogo}
            />
            <span>{siteConfig.name}</span>
          </Link>
        </div>
        <ul className={styles.mobileNavList}>
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  pathname === item.href ? styles.mobileNavActive : ""
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
