import React, { useState } from "react";
import styles from "./Shop.module.css";
import Select from "react-select";
import { motion } from "framer-motion";
import { FiCheck, FiPlus, FiMinus } from "react-icons/fi";
//import { categories, artworks } from './ShopDetails.jsx';
import video from '../assets/Video/Herobackground.mp4'




import TypewriterEffect from './../hooks/TypewriterEffect/Typewriter.jsx';

import paint2 from './../assets/ShopImages/PAINT2.jpg';


const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");

 {/*} const filteredArtworks =
    activeCategory === "All"
      ? artworks
      : artworks.filter(
        (art) => art.category === activeCategory
      );*/}

  return (
    <div className={styles.shop}>
      {/* ===== HERO SECTION ===== */}
      {/* ===== HERO SECTION ===== */}
<section className={styles.hero}>
  <div className={styles.heroImage}>
    <video src={video} autoPlay muted loop playsInline />
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


export default Shop;
