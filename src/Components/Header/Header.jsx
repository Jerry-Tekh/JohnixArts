import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

import LOGO from './../../assets/ShopImages/LOGO.png';


const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = 3;

  return (
    <header className={styles.header}>
      <Link to="/contact" className={styles.contactBtn}>
        Contact Me
      </Link>

      {/* Top bar */}
      <div className={styles.topBar}>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu size={26} />
        </button>

        <div className={styles.logo}>
          <img src={LOGO} alt="Johnix Arts Logo" className={styles.logo} />
          {/*<FiShoppingCart size={26} />
          <span className={styles.cartCount}>{cartCount}</span>*/}
        </div>
      </div>

      {/* Title */}
      <h1 className={styles.title}>Johnix Art</h1>

      {/* Desktop Nav */}
      <nav className={styles.navDesktop}>
        <Link to = "/" > <a href="#">Home</a> </Link>
        <Link to = "/shop" > <a href="#">Shop</a> </Link>
        <span onClick={() => { if (window.location.pathname !== '/') { navigate('/'); } window.location.hash = '#Original'; }} style={{cursor: 'pointer'}}>Originals</span>
        <Link to="/contact">Contact</Link>
        <a href="#">Our Story</a>
      </nav>

      {/* Mobile Nav Overlay */}
      <div
        className={`${styles.mobileNav} ${menuOpen ? styles.open : ""
          }`}
      >
        <button
          className={styles.closeBtn}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <FiX size={28} />
        </button>

        <nav className={styles.mobileNavLinks}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <span onClick={() => { if (window.location.pathname !== '/') { navigate('/'); } window.location.hash = '#Original'; setMenuOpen(false); }} style={{cursor: 'pointer'}}>Originals</span>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a href="#">Our Story</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
