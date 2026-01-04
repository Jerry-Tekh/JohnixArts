import React, { useState } from "react";
import Select from "react-select";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import Marquee from './../Components/Marquee/Marquee.jsx';


import styles from './Category.module.css';

import HologramBtn from './../Components/HologramBtn/HologramBtn.jsx';


import PAINT9 from './../assets/ShopImages/PAINT9.jpg';

import ABS2 from './../assets/ShopImages/ABS2.jpg';
import ABS3 from './../assets/ShopImages/ABS3.jpg';
import POR6 from './../assets/ShopImages/POR6.jpg';
import POR9 from './../assets/ShopImages/POR9.jpg';

import NAT1 from './../assets/ShopImages/NAT1.jpg';

import POR5 from './../assets/ShopImages/POR5.jpg';



import PAINT6 from './../assets/ShopImages/PAINT6.jpg';
import PAINT7 from './../assets/ShopImages/PAINT7.jpg';






// DEMO DATA (replace with yours later)
const categories = ["All", "Abstract", "Portrait", "Nature", "Modern"];

const artworks = [
  {
    id: 1,
    name: "Golden Flow",
    category: "Abstract",
    image: ABS2,
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
    image: POR6,
    sizes: [
      { label: "Medium", value: "M", price: 18000 },
      { label: "Large", value: "L", price: 23000 },
    ],
  },
  {
    id: 3,
    name: "Green Escape",
    category: "Nature",
    image: NAT1,
    sizes: [
      { label: "Small", value: "S", price: 12000 },
      { label: "Medium", value: "M", price: 17000 },
    ],
  },
  {
    id: 4,
    name: "Green Escape",
    category: "Abstract",
    image: ABS3,
    sizes: [
      { label: "Small", value: "S", price: 12000 },
      { label: "Medium", value: "M", price: 17000 },
    ],
  },
  {
    id: 5,
    name: "Green Escape",
    category: "Portrait",
    image: POR5,
    sizes: [
      { label: "Small", value: "S", price: 12000 },
      { label: "Medium", value: "M", price: 17000 },
    ],
  },
  {
    id: 6,
    name: "Green Escape",
    category: "Portrait",
    image: POR9,
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
      <div className={styles.bgImage} />
      <div className={styles.overlay} />

      <div className={styles.container}>
        {/* LEFT — CATEGORIES */}
        <aside className={styles.sidebar}>


          <h3 className={styles.title}>Categories</h3>

          <div className={styles.categoryList}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ""
                  }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>


          {/* HOLOGRAM BUTTON */}
        <HologramBtn/>

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
