import React from "react";
import { motion } from "framer-motion";
import video from "../assets/Video/Advert.mp4"; // replace if needed
import styles from './Adverts.module.css';


const ArtistAdvert = () => {
  return (
    <section className={styles.advert}>
      {/* LEFT — VIDEO */}
      <div className={styles.videoWrap}>
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.videoOverlay}></div>
      </div>

      {/* RIGHT — CONTENT */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className={styles.tag}>Original • Handmade • Timeless</span>

        <h2>
          Art That Speaks <br />
          Beyond the Canvas
        </h2>

        <p className={styles.description}>
          Each piece is thoughtfully created to evoke emotion,
          tell a story, and elevate the space it lives in.
          From original artworks to fine art prints,
          every detail is crafted with intention and passion.
        </p>

        <ul className={styles.features}>
          <li>• 100% original & limited editions</li>
          <li>• Premium materials & archival quality</li>
          <li>• Worldwide shipping available</li>
        </ul>

        <div className={styles.actions}>
          <button className={styles.primaryBtn}>
            Explore Collection
          </button>
          <button className={styles.secondaryBtn}>
            About the Artist
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ArtistAdvert;
