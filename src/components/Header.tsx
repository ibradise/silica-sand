"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, siteConfig } from "@/config/site";
import { MobileNav } from "./MobileNav";
import styles from "./Header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const isProductDetail = pathname.startsWith("/products/");
  const isInnerPage = !isHome && !isProductDetail;

  const headerClass = [
    styles.header,
    scrolled ? styles.scrolled : "",
    !scrolled && isInnerPage ? styles.light : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/images/logo.jpg"
            alt="Diriba Silica Sand Supplier logo"
            width={32}
            height={32}
            className={styles.brandLogo}
            priority
          />
          <span>{siteConfig.name}</span>
        </Link>
        <nav aria-label="Main navigation" className={styles.desktopNav}>
          <ul className={styles.nav}>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? styles.active : ""}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
