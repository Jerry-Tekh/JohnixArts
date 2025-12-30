import React from "react";
import styles from "./Footer.module.css";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* ===== SECTION 1: TITLE ===== */}
      <div className={styles.top}>
        <h3>Subscribe to our Newsletter</h3>
      </div>

      {/* ===== SECTION 2: SUBSCRIBE FORM ===== */}
      <div className={styles.subscribeSection}>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Your name"
            aria-label="Name"
          />
          <input
            type="email"
            placeholder="Your email"
            aria-label="Email"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* ===== SECTION 3: LINKS & SOCIALS ===== */}
      <div className={styles.bottom}>
        <div className={styles.socials}>
          <a href="#" aria-label="Facebook">
            <FiFacebook />
          </a>
          <a href="#" aria-label="Instagram">
            <FiInstagram />
          </a>
          <a href="#" aria-label="Twitter">
            <FiTwitter />
          </a>
        </div>

        <div className={styles.links}>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
