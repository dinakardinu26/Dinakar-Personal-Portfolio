import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <h2>Dinakar S.</h2>
          <p>Data Analyst | Performance Consulting Specialist</p>
        </div>
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="#about">About Me</Link></li>
            <li><Link href="#services">Consulting Services</Link></li>
            <li><Link href="#projects">Featured Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.socials}>
          <h3>Connect</h3>
          <ul>
            <li><a href="https://linkedin.com/in/dinakar26" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:dinakars007@gmail.com">Email</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Dinakar S. All rights reserved.</p>
      </div>
    </footer>
  );
}
