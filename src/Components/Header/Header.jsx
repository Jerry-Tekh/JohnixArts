import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import LOGO from "../../assets/ShopImages/LOGO1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {/* ===== HEADER TOP ===== */}
      <div className={styles.headerTop}>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu size={26} />
        </button>

        <div className={styles.logoWrapper}>
          <img src={LOGO} alt="Johnix Arts Logo" />
        </div>

        <Link to="/contact" className={styles.contactBtn}>
          Contact
        </Link>
      </div>

      {/* ===== HEADER TITLE ===== */}
      <div className={styles.headerTitle}>
        <h1>Johnix Art</h1>
      </div>

      {/* ===== DESKTOP NAV ===== */}
      <nav className={styles.headerNav}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <span
          onClick={() => {
            if (window.location.pathname !== "/") navigate("/");
            window.location.hash = "#Original";
          }}
        >
          Originals
        </span>
        <Link to="/contact">Contact</Link>
        <a href="#">Our Story</a>
      </nav>

      {/* ===== MOBILE NAV OVERLAY ===== */}
      <aside
        className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          className={styles.closeBtn}
          onClick={() => setMenuOpen(false)}
        >
          <FiX size={28} />
        </button>

        <nav className={styles.mobileLinks}>
          {["Home", "Shop", "Originals", "Contact"].map((item, i) => (
            <span
              key={item}
              style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
              onClick={() => {
                if (item === "Originals") {
                  if (window.location.pathname !== "/") navigate("/");
                  window.location.hash = "#Original";
                } else {
                  navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`);
                }
                setMenuOpen(false);
              }}
            >
              {item}
            </span>
          ))}
        </nav>
      </aside>
    </header>
  );
};

export default Header;
