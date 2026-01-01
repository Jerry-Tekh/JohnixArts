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
