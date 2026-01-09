import React, { useState } from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import LOGO from "../../assets/ShopImages/LOGO1.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToHash = (hash) => {
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash });
    } else {
      window.location.hash = hash;
    }
  };

  return (
    <>
      {/* ================= HEADER (SCROLLS AWAY) ================= */}
      <header className={styles.header}>
        {/* Top Bar */}
        <div className={styles.topBar}>
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
            Contact Me
          </Link>
        </div>

        {/* Title */}
        <h1 className={styles.title}>Johnix Art</h1>
      </header>

      {/* ================= DESKTOP STICKY NAV ================= */}
      <nav className={styles.navDesktop}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive && !location.hash ? styles.active : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/originals"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={(e) => {
            e.preventDefault();
            goToHash("#Original");
          }}
        >
          Originals
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Contact
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive && location.hash === "#adverts-about"
              ? styles.active
              : ""
          }
          onClick={(e) => {
            e.preventDefault();
            goToHash("#adverts-about");
          }}
        >
          Our Story
        </NavLink>
      </nav>

      {/* ================= MOBILE NAV OVERLAY ================= */}
      <div className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <FiX size={28} />
        </button>

        <nav className={styles.mobileNavLinks}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <span
            onClick={() => {
              setMenuOpen(false);
              goToHash("#Original");
            }}
          >
            Originals
          </span>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          <span
            onClick={() => {
              setMenuOpen(false);
              goToHash("#adverts-about");
            }}
          >
            Our Story
          </span>
        </nav>
      </div>
    </>
  );
};

export default Header;
