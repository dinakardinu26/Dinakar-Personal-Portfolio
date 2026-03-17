import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Dinakar <span>S.</span>
        </Link>
        <div className={styles.navLinks}>
          <Link href="#about">About</Link>
          <Link href="#expertise">Expertise</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Work</Link>
          <Link href="#blog">Insights</Link>
        </div>
        <div className={styles.actions}>
          <ThemeToggle />
          <Link href="#contact" className={styles.contactBtn}>
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
