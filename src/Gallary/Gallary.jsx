import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from './Gallary.module.css';



import img5 from "../assets/ShopImages/PEN1.jpg";
import img2 from "../assets/ShopImages/PEN2.jpg";
import img3 from "../assets/ShopImages/POR1.jpg";
import img4 from "../assets/ShopImages/PEN3.jpg";
import img1 from "../assets/ShopImages/PAINT2.jpg";
import img7 from "../assets/ShopImages/PAINT2.jpg";
import img9 from "../assets/ShopImages/POR2.jpg";
import img6 from "../assets/ShopImages/POR4.jpg";
import img8 from "../assets/ShopImages/ABS1.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ArtGallerySection = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* Parallax values */
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const galleryY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Static background */}
      <div className={styles.bgImage} />

      <div className={styles.container}>
        {/* LEFT — TEXT (SLOW PARALLAX) */}
        {/* LEFT — TEXT */}
        <aside className={styles.text}>

          {/* Parallax content ONLY */}
          <motion.div style={{ y: textY }}>
            <span className={styles.label}>Gallery</span>

            <h2>
              Curated <br /> Art Collection
            </h2>

            <p>
              A carefully selected body of work that reflects emotion,
              movement, and depth. Each piece is an exploration of form,
              texture, and meaning — created to live beyond the frame.
            </p>

            <p className={styles.note}>
              Scroll to explore the collection
            </p>


            {/* STICKY CTA — NO TRANSFORMS */}
          <div className={styles.stickyCta}>
            <div className={styles.animationContainer}>
              Need a
              <div className={styles.flip}>
                <div><div>Custom Portrait</div></div>
                <div><div>Meaningful Gift</div></div>
                <div><div>One-of-a-Kind Artwork</div></div>
              </div>
              <a href="#contact" className={styles.awesomeLink}>
                Hire Me
              </a>
            </div>
          </div>

          </motion.div>

          
        </aside>


        {/* RIGHT — GALLERY (FASTER PARALLAX + REVEAL) */}
        <motion.div
          className={styles.gallery}
          style={{ y: galleryY }}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={styles.imageCard}
              variants={imageVariants}
            >
              <img src={img} alt={`Artwork ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArtGallerySection;
