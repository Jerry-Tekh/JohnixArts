import React, { useState } from "react";

import Select from "react-select";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";


import Marquee from './../Components/Marquee/Marquee.jsx';


import  styles from './Category.module.css';


import PAINT9 from './../assets/ShopImages/PAINT9.jpg';
import COLOR1 from './../assets/ShopImages/COLOR1.jpg';
import COLOR2 from './../assets/ShopImages/COLOR2.jpg';
import COLOR3 from './../assets/ShopImages/COLOR3.jpg';
import COLOR4 from './../assets/ShopImages/COLOR4.jpg';
import COLOR5 from './../assets/ShopImages/COLOR5.jpg';



import PAINT2 from './../assets/ShopImages/PAINT2.jpg';

import PAINT6 from './../assets/ShopImages/PAINT6.jpg';
import PAINT7 from './../assets/ShopImages/PAINT7.jpg';






// DEMO DATA (replace with yours later)
const categories = ["All", "Abstract", "Portrait", "Nature", "Modern"];

const artworks = [
  {
    id: 1,
    name: "Golden Flow",
    category: "Abstract",
    image: COLOR5,
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
    image: COLOR1,
    sizes: [
      { label: "Medium", value: "M", price: 18000 },
      { label: "Large", value: "L", price: 23000 },
    ],
  },
  {
    id: 3,
    name: "Green Escape",
    category: "Nature",
    image: COLOR3,
    sizes: [
      { label: "Small", value: "S", price: 12000 },
      { label: "Medium", value: "M", price: 17000 },
    ],
  },
  {
    id: 4,
    name: "Green Escape",
    category: "Nature",
    image: COLOR2,
    sizes: [
      { label: "Small", value: "S", price: 12000 },
      { label: "Medium", value: "M", price: 17000 },
    ],
  },
  {
    id: 5,
    name: "Green Escape",
    category: "Nature",
    image: COLOR4,
    sizes: [
      { label: "Small", value: "S", price: 12000 },
      { label: "Medium", value: "M", price: 17000 },
    ],
  },
  {
    id: 6,
    name: "Green Escape",
    category: "Nature",
    image: COLOR3,
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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Marquee speed={30} pauseOnHover={true} reverseOnHover={true}>
                {filteredArtworks.map((art) => (
                  <ArtCard key={art.id} art={art} />
                ))}
              </Marquee>
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

      
      
    </motion.div>
  );
};

export default CategorySection;
