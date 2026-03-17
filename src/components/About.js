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
                Dinakar S is a <strong>Data Analyst and Performance Consulting Specialist</strong> with expertise in performance management systems, business intelligence, and organizational analytics.
              </p>
            </FadeInStaggerItem>
            
            <FadeInStaggerItem>
              <p>
                With a strong foundation in Computer Applications and an MBA in Marketing and Human Resource Management, he combines technical analytics skills with strategic business understanding.
              </p>
            </FadeInStaggerItem>
            
            <FadeInStaggerItem>
              <p>
                Currently working with HSJB Global Solutions LLP, he contributes to performance consulting engagements involving organizational restructuring, KPI design, PMS framework development, and MIS dashboard creation. His work focuses on helping businesses improve operational efficiency, scalability, and data-driven decision making.
              </p>
            </FadeInStaggerItem>
            
            <FadeInStaggerItem>
              <p>
                Dinakar specializes in transforming complex organizational data into actionable insights that guide leadership decisions and enable sustainable growth.
              </p>
            </FadeInStaggerItem>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
