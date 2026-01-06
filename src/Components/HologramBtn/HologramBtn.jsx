


import React from "react";
import { motion } from "framer-motion";
import styles from './HologramBtn.module.css';
import {Link, useNavigate} from 'react-router-dom';



const HologramBtn = () => {
  return (
    
        <button className={`${styles.btn} ${styles.hologram}`}>
            <span data-text="Hologram">  <Link to="/shop"><a href="">View Price Categories</a></Link></span>
            <div className={styles.scanLine}></div>
        </button>
  );
};

export default HologramBtn;
