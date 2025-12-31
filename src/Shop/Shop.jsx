import React, { useState } from "react";
import styles from "./Shop.module.css";
import Select from "react-select";
import { motion } from "framer-motion";
import { FiCheck, FiPlus, FiMinus } from "react-icons/fi";
import { categories, artworks } from './ShopDetails.jsx';
import video from '../assets/Video/herobackground.mp4'




import TypewriterEffect from './../hooks/TypewriterEffect/Typewriter.jsx';

import paint2 from './../assets/ShopImages/PAINT2.jpg';


const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArtworks =
    activeCategory === "All"
      ? artworks
      : artworks.filter(
        (art) => art.category === activeCategory
      );

  return (
    <div className={styles.shop}>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <video src={video} autoPlay muted loop />
          <div className={styles.heroText}>
            <h2 className={styles.heroBold}>STUDIO DRY</h2>
            <hr className={styles.heroLine} />
            <p className={styles.slim}>
              Handmade stationery, art prints & paintings.
              From concept to design and packaging
            </p>

          </div>
        </div>


      </section>

      {/* ===== BANNER ===== */}
      <section className={styles.banner}>
        <div>
          <FiCheck size={22} />
          <p>Premium Materials</p>
        </div>

        <div className={styles.bannerMiddle}>
          <FiCheck size={22} />
          <p>100% Original artWork</p>
        </div>

        <div>
          <FiCheck size={22} />
          <p>Worldwide Shipping</p>
        </div>
      </section>

      {/* ===== CATEGORY + GRID ===== */}
      <section className={styles.stickySection}>
        <div className={styles.content}>

          {/* CATEGORY FILTER */}
          <aside className={styles.categories}>
            <p>Category</p>
            <hr />
            {categories.map((cat) => (
              <button
                key={cat}
                className={
                  activeCategory === cat
                    ? styles.active
                    : ""
                }
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
            <hr />
          </aside>

          {/* ART GRID */}
          <div className={styles.grid}>
            {filteredArtworks.map((art, index) => (
              <motion.div
                key={art.id}
                className={`${styles.card} ${art.featured ? styles.featured : ""
                  }`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img src={art.image} alt={art.name} />

                <h4>{art.name}</h4>

                <PriceSelector sizes={art.sizes} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

/* ===== PRICE + SIZE SELECTOR ===== */
const PriceSelector = ({ sizes }) => {
  const [selected, setSelected] = useState(sizes[0]);
  const [qty, setQty] = useState(1);

  return (
    <div className={styles.controls}>
      <p className={styles.price}>
        ₦{selected.price * qty}
      </p>

      <Select
        options={sizes}
        defaultValue={sizes[0]}
        onChange={setSelected}
        className={styles.select}
      />

      <div className={styles.qty}>
        <button onClick={() => setQty(Math.max(1, qty - 1))}>
          <FiMinus />
        </button>
        <input className={styles.quantity} value={qty} readOnly />
        <button onClick={() => setQty(qty + 1)}>
          <FiPlus />
        </button>
      </div>
    </div>
  );
};

export default Shop;
