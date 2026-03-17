import styles from "./TechnicalSkills.module.css";
import { Database, TrendingUp, PieChart, Layers, Settings, MonitorPlay } from "lucide-react";

export default function TechnicalSkills() {
  const categories = [
    {
      name: "Programming",
      icon: <Database className={styles.catIcon} />,
      skills: ["Python", "SQL (MySQL, PostgreSQL)"]
    },
    {
      name: "Analytics Libraries",
      icon: <TrendingUp className={styles.catIcon} />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"]
    },
    {
      name: "Business Intelligence",
      icon: <PieChart className={styles.catIcon} />,
      skills: ["Power BI", "Tableau", "SAP BI", "Google Data Studio"]
    },
    {
      name: "Enterprise Platforms",
      icon: <Layers className={styles.catIcon} />,
      skills: ["SAP ERP", "Microsoft Excel (Advanced)", "Google Workspace"]
    },
    {
      name: "Other Technical Tools",
      icon: <Settings className={styles.catIcon} />,
      skills: ["Google Analytics", "Meta Ads", "Canva", "Photoshop", "AI / LLM Tools"]
    }
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Technical Arsenal</h2>
          <p className={styles.subheading}>Comprehensive toolset for extracting insights, building dashboards, and automating workflows.</p>
        </div>

        <div className={styles.skillsGrid}>
          {categories.map((cat, idx) => (
            <div key={idx} className={styles.skillCategory}>
              <div className={styles.catHeader}>
                {cat.icon}
                <h3>{cat.name}</h3>
              </div>
              <ul className={styles.skillList}>
                {cat.skills.map((skill, i) => (
                  <li key={i} className={styles.skillItem}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
