import styles from "./page.module.css";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import TechnicalSkills from "@/components/TechnicalSkills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Education from "@/components/Education";
import BlogInsights from "@/components/BlogInsights";
import Contact from "@/components/Contact";
import AnimatedStats from "@/components/AnimatedStats";

export default function Home() {
  return (
    <>
      <section className={styles.hero} id="home">
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>PMS Framework Designer</div>
            <h1 className={styles.headline}>
              Transforming Organizational Performance Through Data, Analytics, and Performance Management Systems
            </h1>
            <p className={styles.subheadline}>
              Data Analyst and Performance Consulting Specialist experienced in building KPI frameworks, PMS systems, MIS dashboards, and organizational restructuring strategies for growing businesses.
            </p>
            <div className={styles.ctaGroup}>
              <Link href="#projects" className={styles.primaryBtn}>
                View My Work <ArrowRight size={18} />
              </Link>
              <a href="/Dinakar_S_Resume.pdf" download className={styles.secondaryBtn}>
                <Download size={18} /> Download Resume
              </a>
            </div>
          </div>
          <div className={styles.heroGraphic}>
            {/* We will add an animated graphic or abstract shape here */}
            <div className={styles.abstractShape}></div>
          </div>
        </div>
      </section>
      
      <AnimatedStats />
      <About />
      <Expertise />
      <TechnicalSkills />
      <Experience />
      <Projects />
      <Services />
      <Education />
      <BlogInsights />
      <Contact />
    </>
  );
}
