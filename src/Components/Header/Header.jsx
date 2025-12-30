import React, { useState } from "react";
import styles from "./Header.module.css";

import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = 3; 

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

        <div className={styles.cart}>
          <FiShoppingCart size={26} />
          <span className={styles.cartCount}>{cartCount}</span>
        </div>
      </div>

      {/* Title */}
      <h1 className={styles.title}>Johnix Arts</h1>

      {/* Desktop Nav */}
      <nav className={styles.navDesktop}>
        <a href="#">Shop</a>
        <a href="#">Originals</a>
        <a href="#">Art Painings</a>
        <a href="#">Contact</a>
        <a href="#">Our Story</a>
      </nav>

      {/* Mobile Nav Overlay */}
      <div
        className={`${styles.mobileNav} ${
          menuOpen ? styles.open : ""
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
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
