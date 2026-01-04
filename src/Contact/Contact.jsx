import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPenFancy } from "react-icons/fa";
import styles from './Contact.module.css';




const Contact = () => {
  return (
    <section className={styles.contactSection}>
      {/* Background Overlay */}
      <div className={styles.bgOverlay} />

      <div className={styles.container}>
        {/* LEFT — TEXT */}
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className={styles.tag}>Contact</span>

          <h1>
            Let’s Create <br /> Something Meaningful
          </h1>

          <p>
            Looking for a custom portrait, a thoughtful gift, or a unique
            collaboration? I turn ideas and emotions into timeless art.
            Every masterpiece begins with a simple conversation.
          </p>

          <div className={styles.note}>
            ✦ Commission slots are limited — reach out early
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.form
          className={styles.form}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className={styles.field}>
            <FaUser />
            <input type="text" placeholder="Your name" required />
          </div>

          <div className={styles.field}>
            <FaEnvelope />
            <input type="email" placeholder="Your email" required />
          </div>

          <div className={`${styles.field} ${styles.textarea}`}>
            <FaPenFancy />
            <textarea
              rows="5"
              placeholder="Tell me about your idea or commission..."
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
