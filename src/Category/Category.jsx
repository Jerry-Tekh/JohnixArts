import React, { useState } from "react";

import Select from "react-select";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";


import  styles from './Category.module.css';
import paint9 from './../assets/ShopImages/PAINT9.jpg';


// DEMO DATA (replace with yours later)
const categories = ["All", "Abstract", "Portrait", "Nature", "Modern"];

const artworks = [
  {
    id: 1,
    name: "Golden Flow",
    category: "Abstract",
    image: "/images/art1.jpg",
    sizes: [
      { label: "Small", value: "S", price: 10000 },
      { label: "Medium", value: "M", price: 15000 },
      { label: "Large", value: "L", price: 20000 },
    ],
  },
  {
    id: 2,
    name: "Silent Face",
    category: "Portrait",
    image: "/images/art2.jpg",
    sizes: [
      { label: "Medium", value: "M", price: 18000 },
      { label: "Large", value: "L", price: 23000 },
    ],
  },
  {
    id: 3,
    name: "Green Escape",
    category: "Nature",
    image: "/images/art3.jpg",
    sizes: [
      { label: "Small", value: "S", price: 12000 },
      { label: "Medium", value: "M", price: 17000 },
    ],
  },
];

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArtworks =
    activeCategory === "All"
      ? artworks
      : artworks.filter((art) => art.category === activeCategory);

  return (
    <section className={styles.section}>
      {/* Overlay */}
      <div className={styles.overlay} />

      <div className={styles.container}>
        {/* LEFT — CATEGORIES */}
        <aside className={styles.sidebar}>
          <h3 className={styles.title}>Categories</h3>

          <div className={styles.categoryList}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryBtn} ${
                  activeCategory === cat ? styles.active : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        {/* RIGHT — ART GRID */}
        <div className={styles.gallery}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className={styles.grid}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {filteredArtworks.map((art) => (
                <ArtCard key={art.id} art={art} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ArtCard = ({ art }) => {
  const [selectedSize, setSelectedSize] = useState(art.sizes[0]);
  const [qty, setQty] = useState(1);

  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.imageWrap}>
        <img src={art.image} alt={art.name} />
      </div>

      <h4 className={styles.artName}>{art.name}</h4>

      <p className={styles.price}>
        ₦{selectedSize.price * qty}
      </p>

      <Select
        options={art.sizes}
        value={selectedSize}
        onChange={setSelectedSize}
        className={styles.select}
        classNamePrefix="select"
      />

      <div className={styles.qty}>
        <button onClick={() => setQty(Math.max(1, qty - 1))}>
          <FiMinus />
        </button>
        <span>{qty}</span>
        <button onClick={() => setQty(qty + 1)}>
          <FiPlus />
        </button>
      </div>
    </motion.div>
  );
};

export default CategorySection;
