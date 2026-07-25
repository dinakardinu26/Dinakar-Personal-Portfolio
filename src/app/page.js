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
import { FadeIn, FadeInStaggerItem } from "@/components/animations/FadeIn";
import ParticleGlobe from "@/components/animations/ParticleGlobe";
import StaggeredHeadline from "@/components/animations/StaggeredHeadline";

export default function Home() {
  return (
    <>
      <section className={styles.hero} id="home">
        {/* Full-hero background particle field */}
        <ParticleGlobe />

        <div className={`container ${styles.heroContainer}`}>
          <FadeIn delay={0.2} staggerChildren={0.25} className={styles.heroContent}>
            <FadeInStaggerItem direction="up">
              <div className={styles.badge}>PMS Framework Designer</div>
            </FadeInStaggerItem>
            
            <FadeInStaggerItem direction="none">
              <StaggeredHeadline
                text="Transforming Organizational Performance Through Data, Analytics, and Performance Management Systems"
                className={styles.headline}
              />
            </FadeInStaggerItem>
            
            <FadeInStaggerItem direction="up">
              <p className={styles.subheadline}>
                Data Analyst and Performance Consulting Specialist experienced in building KPI frameworks, PMS systems, MIS dashboards, and organizational restructuring strategies for growing businesses.
              </p>
            </FadeInStaggerItem>
            
            <FadeInStaggerItem direction="up">
              <div className={styles.ctaGroup}>
                <Link href="#projects" className={styles.primaryBtn}>
                  View My Work <ArrowRight size={18} />
                </Link>
                <a href="/Dinakar_S_Resume.pdf" download className={styles.secondaryBtn}>
                  <Download size={18} /> Download Resume
                </a>
              </div>
            </FadeInStaggerItem>
          </FadeIn>
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
