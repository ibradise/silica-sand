import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className="container">
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>Page not found</p>
        <p className="muted">
          The page you are looking for does not exist or has been moved.
        </p>
        <p>
          <Link href="/" className="button button-primary">
            Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
