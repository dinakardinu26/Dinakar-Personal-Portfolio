"use client";

import styles from "./Contact.module.css";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.contactInfo}>
            <h2 className={styles.heading}>Let&apos;s Work Together</h2>
            <p className={styles.subheading}>
              Ready to optimize your organizational performance and make data-driven decisions? Reach out today for consulting inquiries or collaboration opportunities.
            </p>
            
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Mail size={24} /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:dinakars007@gmail.com">dinakars007@gmail.com</a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><MapPin size={24} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Kochi, Kerala, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" placeholder="Acme Inc." />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="How can I help you?"></textarea>
              </div>
              
              <button type="submit" disabled={status === "loading"} className={styles.submitBtn}>
                {status === "loading" ? "Sending..." : <>Send Message <Send size={18} /></>}
              </button>
              
              {status === "success" && <p className={styles.successMsg}>Your message has been sent successfully!</p>}
              {status === "error" && <p className={styles.errorMsg}>An error occurred. Please try again later.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
