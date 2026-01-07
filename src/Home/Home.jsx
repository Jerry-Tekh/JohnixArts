import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Select from "react-select";
import { motion } from "framer-motion";
import { FiCheck, FiPlus, FiMinus } from "react-icons/fi";
//import { categories, artworks } from './ShopDetails.jsx';
import video from "../assets/Video/HeroBackground1.mp4";

import TypewriterEffect from "../hooks/TypewriterEffect/Typewriter.jsx";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#Original") {
        const element = document.getElementById("Original");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Also check on mount
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  {
    /*} const filteredArtworks =
    activeCategory === "All"
      ? artworks
      : artworks.filter(
        (art) => art.category === activeCategory
      );*/
  }

  return (
    <div className={styles.shop} id="shop">
      {/* ===== HERO SECTION ===== */}
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <video src={video} autoPlay muted loop playsInline />
          {/*<div className={styles.heroText}>
          <h2 className={styles.heroBold}>JOHNIX ARTS</h2>
              <hr className={styles.heroLine} />
                  <p className={styles.slim}>
               Handmade arts works, drawing & paintings.
               From concept to branding and packaging
               </p>
             </div>*/}
        </div>
      </section>

      {/* ===== BANNER ===== */}
      <section className={styles.banner}>
        <div>
          <FiCheck size={22} color="#7f56d9" />
          <p>Premium Materials</p>
        </div>

        <div className={styles.bannerMiddle}>
          <FiCheck size={22} color="#7f56d9" />
          <p>100% Original Artwork</p>
        </div>

        <div>
          <FiCheck size={22} color="#7f56d9" />
          <p>Worldwide Shipping</p>
        </div>
      </section>
    </div>
  );
};
export default Home;
