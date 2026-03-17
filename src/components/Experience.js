import styles from "./Experience.module.css";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Project Associate – Data Analytics & Performance Consulting",
      company: "HSJB Global Solutions LLP",
      period: "Nov 2025 – Present",
      responsibilities: [
        "Conduct organizational data analysis and gap assessments.",
        "Design performance management systems and KPI frameworks.",
        "Develop MIS dashboards and performance trackers.",
        "Create job descriptions, KPI matrices, and org structures.",
        "Introduce AI based workflows for documentation and analytics.",
        "Conduct internal training sessions for PMS department team members."
      ]
    },
    {
      role: "Management Trainee – Key Accounts",
      company: "Lulu International Shopping Mall Pvt Ltd",
      period: "Apr 2025 – Sep 2025",
      responsibilities: [
        "Prepared sales and operational performance reports.",
        "Developed data dashboards for store performance tracking.",
        "Analyzed stock value, revenue, and productivity metrics.",
        "Supported leadership teams with data driven operational insights."
      ]
    },
    {
      role: "Management & Operations Intern",
      company: "Arvind Fashions Limited",
      period: "May 2024 – Jun 2024",
      responsibilities: [
        "Managed store operations under the Store Manager.",
        "Analyzed customer buying behavior.",
        "Improved upselling and cross selling strategies."
      ]
    }
  ];

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Professional Experience</h2>
          <p className={styles.subheading}>A track record of driving operational efficiency and organizational scalability.</p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <Briefcase size={20} />
              </div>
              <div className={styles.timelineContent}>
                <span className={styles.period}>{exp.period}</span>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
