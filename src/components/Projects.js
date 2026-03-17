import styles from "./Projects.module.css";
import { ArrowUpRight } from "lucide-react";
import ParticleSphere from "./ParticleSphere";
import { FadeIn, FadeInStaggerItem } from "./animations/FadeIn";
export default function Projects() {
  const projects = [
    {
      title: "Retail Chain Restructuring and Scalability Strategy",
      description: "Comprehensive organizational analysis and restructuring for a retail chain with 14 outlets, establishing a framework to support expansion to 25 outlets.",
      tags: ["Organizational Analysis", "Scalability", "KPI Systems", "MIS Dashboards"],
      metrics: ["Supported expansion from 14 to 25 outlets", "Implemented real-time MIS dashboards"],
      link: "#"
    },
    {
      title: "Operational Analysis of Store Optimization in Retail Units",
      description: "In-depth evaluation of store layouts, operational efficiency, and employee productivity to deliver actionable improvement recommendations.",
      tags: ["Store Layout", "Operational Efficiency", "Workflow Optimization", "Productivity Metrics"],
      metrics: ["Identified employee productivity bottlenecks", "Optimized workflow efficiency"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.particleBg}>
        <ParticleSphere />
      </div>
      <div className={`container ${styles.contentContainer}`}>
        <FadeIn direction="up" className={styles.header}>
          <h2 className={styles.heading}>Featured Projects</h2>
          <p className={styles.subheading}>Showcasing high-impact consulting engagements and data-driven solutions.</p>
        </FadeIn>

        <FadeIn staggerChildren={0.2} delay={0.2} className={styles.grid}>
          {projects.map((project, idx) => (
            <FadeInStaggerItem key={idx} direction="up">
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.tagsGroup}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <div className={styles.metricsGroup}>
                    <h4>Key Outcomes:</h4>
                    <ul>
                      {project.metrics.map((metric, i) => (
                        <li key={i}>{metric}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <a href={project.link} className={styles.caseStudyBtn}>
                    View Case Study <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
