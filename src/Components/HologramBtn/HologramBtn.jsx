


import React from "react";
import { motion } from "framer-motion";
import styles from './HologramBtn.module.css';



const HologramBtn = () => {
  return (
    
        <button className={`${styles.btn} ${styles.hologram}`}>
            <span data-text="Hologram">View Price Categories</span>
            <div className={styles.scanLine}></div>
        </button>
  );
};

export default HologramBtn;
