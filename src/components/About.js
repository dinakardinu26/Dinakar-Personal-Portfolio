import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.imageWrapper}>
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
        </div>
        <div className={styles.contentWrapper}>
          <h2 className={styles.heading}>About Me</h2>
          <div className={styles.description}>
            <p>
              Dinakar S is a <strong>Data Analyst and Performance Consulting Specialist</strong> with expertise in performance management systems, business intelligence, and organizational analytics.
            </p>
            <p>
              With a strong foundation in Computer Applications and an MBA in Marketing and Human Resource Management, he combines technical analytics skills with strategic business understanding.
            </p>
            <p>
              Currently working with HSJB Global Solutions LLP, he contributes to performance consulting engagements involving organizational restructuring, KPI design, PMS framework development, and MIS dashboard creation. His work focuses on helping businesses improve operational efficiency, scalability, and data-driven decision making.
            </p>
            <p>
              Dinakar specializes in transforming complex organizational data into actionable insights that guide leadership decisions and enable sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
