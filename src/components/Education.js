import styles from "./Education.module.css";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "MBA – Marketing and Human Resource Management",
      institution: "LEAD College of Management"
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Nehru Arts and Science College"
    }
  ];

  const certifications = [
    "Lean Six Sigma Green Belt – KPMG",
    "Personnel Management Workshop – NIPM",
    "Google Digital Marketing Certification",
    "IBM Professional Skills Certification"
  ];

  return (
    <section id="education" className={styles.eduSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.header}>
              <GraduationCap size={40} className={styles.icon} />
              <h2>Education</h2>
            </div>
            <div className={styles.list}>
              {education.map((edu, idx) => (
                <div key={idx} className={styles.eduItem}>
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.header}>
              <Award size={40} className={styles.icon} />
              <h2>Certifications</h2>
            </div>
            <ul className={styles.certList}>
              {certifications.map((cert, idx) => (
                <li key={idx} className={styles.certItem}>
                  <div className={styles.bullet}></div>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
