import styles from "./Expertise.module.css";
import { LineChart, LayoutDashboard, Target, Users, Search, ShoppingBag, Bot } from "lucide-react";

export default function Expertise() {
  const expertiseItems = [
    {
      title: "Performance Management Systems (PMS)",
      description: "Designing KPI and KRA frameworks for robust organizational performance tracking.",
      icon: <Target className={styles.icon} size={32} />
    },
    {
      title: "Business Data Analytics",
      description: "Extracting actionable insights from complex operational and business datasets.",
      icon: <LineChart className={styles.icon} size={32} />
    },
    {
      title: "Organizational Gap Analysis",
      description: "Identifying operational inefficiencies and recommending targeted improvement strategies.",
      icon: <Search className={styles.icon} size={32} />
    },
    {
      title: "MIS Dashboard Development",
      description: "Building dynamic, real-time performance monitoring dashboards for leadership.",
      icon: <LayoutDashboard className={styles.icon} size={32} />
    },
    {
      title: "Retail Operations Analytics",
      description: "Analyzing sales, workforce productivity, and overall store performance.",
      icon: <ShoppingBag className={styles.icon} size={32} />
    },
    {
      title: "Organizational Restructuring",
      description: "Designing scalable organizational structures primed for business expansion.",
      icon: <Users className={styles.icon} size={32} />
    },
    {
      title: "AI Powered Workflow Automation",
      description: "Applying AI and LLM tools to optimize documentation and core analysis processes.",
      icon: <Bot className={styles.icon} size={32} />
    }
  ];

  return (
    <section id="expertise" className={styles.expertiseSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Core Expertise</h2>
          <p className={styles.subheading}>Specialized domains driving organizational efficiency and business scalability.</p>
        </div>
        
        <div className={styles.grid}>
          {expertiseItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
