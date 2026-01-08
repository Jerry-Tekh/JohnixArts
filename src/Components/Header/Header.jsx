import React, { useState } from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";

import styles from "./Header.module.css";

import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

import LOGO from "./../../assets/ShopImages/LOGO1.png";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = 3;

  const location = useLocation();
  const isOriginalsActive =
    location.pathname === "/" && location.hash === "#Original";

  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu size={26} />
        </button>

        <div className={styles.logoWrapper}>
          <img src={LOGO} alt="Johnix Arts Logo" className={styles.logo} />
          {/*<FiShoppingCart size={26} />
          <span className={styles.cartCount}>{cartCount}</span>*/}
        </div>

        <Link to="/contact" className={styles.contactBtn}>
          Contact Me
        </Link>
      </div>

      {/* Title */}
      <div>
        <h1 className={styles.title}>Johnix Art</h1>
      </div>

      {/* Desktop Nav */}
      <nav className={styles.navDesktop}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive && !location.hash ? styles.active : ""
          }
        >
          Home
        </NavLink>

        {/*<span
          className={isOriginalsActive ? styles.active : ""}
          onClick={() => {
            if (location.pathname !== "/") navigate("/");
            window.location.hash = "#Original";
          }}
        >
          Originals
        </span>*/}

        <NavLink
          to="/originals"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={(e) => {
            // Close mobile menu then navigate + scroll to gallery on Home
            setMenuOpen(false);
            if (location.pathname !== "/") {
              navigate({ pathname: "/", hash: "#Original" });
            } else {
              // already on home: set hash to trigger scroll
              window.location.hash = "#Original";
            }
            // prevent default NavLink navigation since we programmatically navigate
            e.preventDefault();
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
          className={({ isActive }) => (isActive && !location.hash ? styles.active : "")}
          onClick={(e) => {
            if (location.pathname !== "/") {
              navigate({ pathname: "/", hash: "#adverts-about" });
            } else {
              window.location.hash = "#adverts-about";
            }
            e.preventDefault();
          }}
        >
          Our Story
        </NavLink>

        
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`${styles.mobileNav} ${menuOpen ? styles.open : ""}`}>
        <button
          className={styles.closeBtn}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <FiX size={28} />
        </button>

        <nav className={styles.mobileNavLinks}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive && !location.hash ? styles.active : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          {/*<span
            className={isOriginalsActive ? styles.active : ""}
            onClick={() => {
              if (location.pathname !== "/") navigate("/");
              window.location.hash = "#Original";
              setMenuOpen(false);
            }}
          >
            Originals
          </span>*/}

          <NavLink
            to="/originals"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={(e) => {
              // Close mobile menu then navigate + scroll to gallery on Home
              setMenuOpen(false);
              if (location.pathname !== "/") {
                navigate({ pathname: "/", hash: "#Original" });
              } else {
                // already on home: set hash to trigger scroll
                window.location.hash = "#Original";
              }
              // prevent default NavLink navigation since we programmatically navigate
              e.preventDefault();
            }}
          >
            Originals
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) => (isActive && !location.hash ? styles.active : "")}
            onClick={(e) => {
              setMenuOpen(false);
              if (location.pathname !== "/") {
                navigate({ pathname: "/", hash: "#adverts-about" });
              } else {
                window.location.hash = "#adverts-about";
              }
              e.preventDefault();
            }}
          >
            Our Story
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
