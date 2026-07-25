import Image from "next/image";
import styles from "./About.module.css";
import { FadeIn, FadeInStaggerItem } from "./animations/FadeIn";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <FadeIn direction="right" delay={0.2} className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            <Image 
              src="/dinakar-photo.jpg" 
              alt="Dinakar S - Data Analyst & Consultant" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', borderRadius: '12px' }} 
              priority
            />
          </div>
          <div className={styles.experienceBadge}>
            <span className={styles.years}>1+</span>
            <span className={styles.text}>Year Analytics Experience</span>
          </div>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.4} staggerChildren={0.2} className={styles.contentWrapper}>
          <FadeInStaggerItem>
            <h2 className={styles.heading}>About Me</h2>
          </FadeInStaggerItem>
          
          <div className={styles.description}>
            <FadeInStaggerItem>
              <p>
                Dinakar S is a <strong>Project Associate in Performance Management &amp; Business Consulting</strong>, with hands-on experience in organizational performance improvement and business transformation across the manufacturing sector and related industries.
              </p>
            </FadeInStaggerItem>
            
            <FadeInStaggerItem>
              <p>
                He holds a strong academic foundation — a Bachelor&apos;s in Computer Applications and an <strong>MBA in Marketing &amp; HR from the University of Calicut</strong> — which equips him to bridge technical analytics with strategic business thinking.
              </p>
            </FadeInStaggerItem>
            
            <FadeInStaggerItem>
              <p>
                Across multiple consulting engagements, Dinakar has contributed to <strong>organizational restructuring, KPI architecture, and Performance Management System (PMS) design</strong> for manufacturing and operations-driven organizations. His work spans process optimization, MIS &amp; executive dashboard development, and business analytics — helping leadership teams make faster, data-informed decisions.
              </p>
            </FadeInStaggerItem>
            
            <FadeInStaggerItem>
              <p>
                He brings a structured, consulting-oriented approach to every engagement — translating complex operational data into actionable frameworks that drive measurable efficiency, scalability, and cross-functional alignment.
              </p>
            </FadeInStaggerItem>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
