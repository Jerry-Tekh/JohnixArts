import React from "react";
import styles from "./Footer.module.css";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import LOGO from './../../assets/ShopImages/LOGO.png';
import { Link, useNavigate } from 'react-router-dom';

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
          <a href="https://web.facebook.com/john.ikechukwu.761402?rdid=s9Q3FW50Kz4siWg6&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1ANAzcWR48%2F%3F_rdc%3D1%26_rdr#" aria-label="Facebook">
            <FiFacebook />
          </a>
          <a href="https://www.instagram.com/johnix_art/?igshid=YmMyMTA2M2Y%3D" aria-label="Instagram">
            <FiInstagram />
          </a>
          <a href="https://x.com/Johnix_art?s=20" aria-label="Twitter">
            <FiTwitter />
          </a>
          <a href="https://linktr.ee/johnike" aria-label="Linkedin">
            <FiLinkedin />
          </a>
        </div>

        <div className={styles.links}>
          <Link to="/shop" > <a href="#">Shop</a> </Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
