import styles from "./BlogInsights.module.css";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogInsights() {
  const posts = [
    {
      title: "Data Analytics in Retail Industry",
      excerpt: "How leveraging point-of-sale data and behavioral analytics transforms modern retail operations.",
      date: "Oct 15, 2025",
      category: "Analytics"
    },
    {
      title: "Performance Management Systems",
      excerpt: "A comprehensive guide to designing KPI and KRA frameworks that align with overall business objectives.",
      date: "Nov 02, 2025",
      category: "Consulting"
    },
    {
      title: "AI Applications in Consulting",
      excerpt: "Exploring the impact of Large Language Models on research, documentation, and process automation.",
      date: "Jan 12, 2026",
      category: "AI / Tech"
    }
  ];

  return (
    <section id="blog" className={styles.blogSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Insights & Perspectives</h2>
          <p className={styles.subheading}>Thoughts on organizational efficiency, business intelligence, and the future of work.</p>
        </div>

        <div className={styles.grid}>
          {posts.map((post, idx) => (
            <div key={idx} className={styles.blogCard}>
              <div className={styles.cardHeader}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.date}><Calendar size={14} /> {post.date}</span>
              </div>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <button className={styles.readMoreBtn}>
                Read Article <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
