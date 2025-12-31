import React from "react";
import styles from './Gallary.module.css';

import PEN1 from "./../assets/ShopImages/PEN1.jpg";

import Pen1 from "../assets/ShopImages/PEN1.jpg";
import  Pen2 from "../assets/ShopImages/PEN2.jpg";
import Pen3 from "../assets/ShopImages/PEN3.jpg";
import Pen4 from "../assets/ShopImages/PEN4.jpg";
import Pen5 from "../assets/ShopImages/PAINT2.jpg";
import Pen6 from "../assets/ShopImages/PEN1.jpg";

const images = [Pen1, Pen2, Pen3, Pen4, Pen5, Pen6];

const ArtGallery = () => {
  return (
    <section className={styles.gallery}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles.cell} ${styles["cell" + (index + 1)]}`}
        >
          <img src={img} alt={`Artwork ${index + 1}`} />
        </div>
      ))}
      <div className={styles.lineHorizontal}></div>
      <div className={styles.lineHorizontal2}></div>
      <div className={styles.lineHorizontal3}></div>
      <div className={styles.lineHorizontal4}></div>
      <div className={styles.lineHorizontal5}></div>
      <div className={styles.lineVerticalLeft}></div>
      <div className={styles.lineVerticalRight}></div>
    </section>
  );
};
 
export default ArtGallery;
