import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Category.module.css";
import { artworks } from "./CategoryData.jsx";
import HologramBtn from "../Components/HologramBtn/HologramBtn.jsx";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {
  FiCheckCircle,
  FiHome,
  FiBriefcase,
  FiGift,
  FiImage,
  FiClock,
} from "react-icons/fi";


const categories = ["All", "Abstract", "Portrait", "Nature"];



const PRICE_DATA = [
  { size: "8 × 10 in", pencil: "30,000", pen: "35,000", paint: "40,000" },
  { size: "10 × 12 in", pencil: "40,000", pen: "45,000", paint: "50,000" },
  { size: "12 × 15 in", pencil: "50,000", pen: "55,000", paint: "60,000" },
  { size: "16 × 20 in", pencil: "60,000", pen: "65,000", paint: "70,000" },
  { size: "20 × 24 in", pencil: "70,000", pen: "75,000", paint: "80,000" },
  { size: "20 × 36 in", pencil: "80,000", pen: "85,000", paint: "90,000" },
  { size: "24 × 40 in", pencil: "90,000", pen: "95,000", paint: "100,000" },
];



const USE_CASES = [
  {
    title: "What You Get",
    icon: <FiCheckCircle />,
    points: [
      "100% hand-drawn original artwork",
      "High-quality archival materials",
      "Signed by the artist",
      "Guidance on framing & display",
    ],
  },
  {
    title: "Perfect For",
    icon: <FiHome />,
    points: [
      "Home & interior décor",
      "Office & studio spaces",
      "Brand identity & branding visuals",
      "Thoughtful premium gifts",
    ],
  },
  {
    title: "Size & Medium Impact",
    icon: <FiImage />,
    points: [
      "Larger sizes command more presence",
      "Paint delivers depth & longevity",
      "Pen gives sharp contrast",
      "Pencil offers soft realism",
    ],
  },
  {
    title: "Timeline",
    icon: <FiClock />,
    points: [
      "Small sizes: 5–7 days",
      "Medium sizes: 7–10 days",
      "Large sizes: 10–14 days",
      "Rush delivery available",
    ],
  },
];



const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showPriceSection, setShowPriceSection] = useState(false);

  const filteredArtworks =
    activeCategory === "All"
      ? artworks
      : artworks.filter((art) => art.category === activeCategory);

  return (
    <section className={styles.section}>
      <div className={styles.bgImage} />

      <div className={styles.container}>
        {/* LEFT PANEL */}
        <aside className={styles.sidebar}>
          <AnimatePresence mode="wait">
            {!showPriceSection ? (
              <motion.div
                key="categories"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
              >
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

                <button
                  className={styles.viewPriceBtn}
                  onClick={() => setShowPriceSection(true)}
                >
                  View Price Guide
                  <FiArrowRight />
                </button>

              </motion.div>
            ) : (
              <motion.div
                key="prices"
                className={styles.priceSection}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
              >


                <h3 className={styles.priceTitle}>Price Guide <span>                 <button
                  className={styles.backBtn}
                  onClick={() => setShowPriceSection(false)}
                >
                  <FiArrowLeft />
                </button></span></h3>

                <div className={styles.priceGrid}>
                  {PRICE_DATA.map((item) => (
                    <div key={item.size} className={styles.priceCard}>
                      <strong>{item.size}</strong>
                      <ul>
                        <li>Pencil — ₦{item.pencil}</li>
                        <li>Pen — ₦{item.pen}</li>
                        <li>Paint — ₦{item.paint}</li>
                      </ul>
                    </div>
                  ))}
                </div>

                <button
                  className={`${styles.backBtn} ${styles.backBtnBottom}`}
                  onClick={() => setShowPriceSection(false)}
                >
                  <FiArrowLeft />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </aside>

        {/* RIGHT GALLERY */}
        <AnimatePresence mode="wait">
          {!showPriceSection ? (
            <motion.div
              key="gallery"
              className={styles.gallery}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className={styles.scrollRow}>
                {filteredArtworks.map((art) => (
                  <ArtCard key={art.id} art={art} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="useCases"
              className={styles.useCases}
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <h3 className={styles.useCaseTitle}>
                Why You’re Paying
              </h3>

              {USE_CASES.map((section) => (
                <div key={section.title} className={styles.useCaseBlock}>
                  <div className={styles.useCaseContent}>

                    <div className={styles.useCaseHeader}>
                      <span className={styles.useCaseIcon}>{section.icon}</span>
                      <h4>{section.title}</h4>
                    </div>

                    <ul>
                      {section.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

const ArtCard = ({ art }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.04 }}
    >
      <motion.div
        className={styles.imageWrap}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        <img src={art.image} alt={art.name} />
      </motion.div>
    </motion.div>
  );
};


export default CategorySection;
