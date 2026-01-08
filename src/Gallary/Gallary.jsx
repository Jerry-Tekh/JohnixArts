import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from './Gallary.module.css';



import img5 from "../assets/ShopImages/POR7.jpg";
import img8 from "../assets/ShopImages/POR6.jpg";
import img2 from "../assets/ShopImages/POR10.jpg";
import img3 from "../assets/ShopImages/POR1.jpg";
import img4 from "../assets/ShopImages/POR11.jpg";
import img1 from "../assets/ShopImages/NAT2.jpg";
import img9 from "../assets/ShopImages/POR2.jpg";
import img6 from "../assets/ShopImages/POR4.jpg";
import img7 from './../assets/ShopImages/POR12.jpeg';





const images = [img1, img2, img3, img4, img5, img6, img7, img8 ];

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
    <section className={styles.section} ref={sectionRef} id="Original">
      {/* Static background */}
      <div className={styles.bgImage} />

      <div className={styles.inner}>
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

             {/*} <p className={styles.note}>
                Scroll to explore the collection
              </p>*/}

            </motion.div>

            {/* STICKY CTA — NO TRANSFORMS */}
            <div className={styles.stickyCta}>
              <div className={styles.animationContainer}>
                Do you need
                <div className={styles.flip}>
                  <div>
                    <div>an Artwork</div>
                    <div>an Artwork</div>
                    <div>an Artwork</div>
                  </div>
                </div>

                <a href="#contact" className={styles.awesomeLink}>
                  Hire Me
                </a>
              </div>
            </div>

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
                <img src={img} alt={`Artwork ${index + 1}`} onContextMenu={(e) => e.preventDefault()} onDragStart={(e) => e.preventDefault()} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtGallerySection;
