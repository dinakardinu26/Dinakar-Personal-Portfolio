import styles from "./Services.module.css";
import { LineChart, BarChart, Settings, Search, Users, Workflow } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Performance Management System Design",
      icon: <Settings size={40} className={styles.icon} />
    },
    {
      title: "KPI and KRA Framework Development",
      icon: <BarChart size={40} className={styles.icon} />
    },
    {
      title: "Business Intelligence Dashboard Creation",
      icon: <LineChart size={40} className={styles.icon} />
    },
    {
      title: "Organizational Gap Analysis",
      icon: <Search size={40} className={styles.icon} />
    },
    {
      title: "Retail Performance Analytics",
      icon: <Users size={40} className={styles.icon} />
    },
    {
      title: "Operational Optimization Consulting",
      icon: <Workflow size={40} className={styles.icon} />
    }
  ];

  return (
    <section id="services" className={styles.servicesSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Consulting Services</h2>
          <p className={styles.subheading}>Empowering organizations to optimize operations, scale efficiently, and embrace data-driven decision-making.</p>
        </div>

        <div className={styles.grid}>
          {services.map((svc, idx) => (
            <div key={idx} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>{svc.icon}</div>
              <h3 className={styles.serviceTitle}>{svc.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
