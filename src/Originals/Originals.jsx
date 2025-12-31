import React from "react";
import { motion } from "framer-motion";
import styles from "./Originals.module.css";

import PEN1 from "./../assets/ShopImages/PEN1.jpg";
import PEN2 from "./../assets/ShopImages/PEN2.jpg";
import PEN3 from "./../assets/ShopImages/PEN3.jpg";
import PEN4 from "./../assets/ShopImages/PEN4.jpg";

const artworksData = [
  { id: 1, image: PEN1, title: "Silent Bloom" },
  { id: 2, image: PEN2, title: "Golden Rhythm" },
  { id: 3, image: PEN3, title: "Abstract Flow" },
  { id: 4, image: PEN4, title: "Deep Expression" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const OriginalArtWorks = () => {
  return (
    <section className={styles.wrapper}>
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {artworksData.map((art) => (
          <motion.div
            key={art.id}
            className={styles.card}
            variants={itemVariants}
            whileHover={{
              rotateX: 1,
              rotateY: -1,
              scale: 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className={styles.imageWrap}>
              <img src={art.image} alt={art.title} />
              <div className={styles.overlay}>
                <span>View Artwork</span>
              </div>
            </div>

            <p className={styles.title}>{art.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OriginalArtWorks;
