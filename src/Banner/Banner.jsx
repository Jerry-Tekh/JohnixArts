import React from "react";
import Marquee from "./../Components/Marquee/Marquee.jsx";
import styles from "./Banner.module.css";

import {
  AiOutlineHighlight,
  AiOutlineGlobal,
  AiOutlineStar,
  AiOutlineHeart,
} from "react-icons/ai";

const Banner = () => {
  return (
    <Marquee speed={55} className={styles.banner}>
      <div className={styles.item}>
        <AiOutlineHighlight />
        <span>Handmade Art Prints</span>
      </div>

      <div className={styles.item}>
        <AiOutlineGlobal />
        <span>Worldwide Shipping</span>
      </div>

      <div className={styles.item}>
        <AiOutlineStar />
        <span>Limited Editions</span>
      </div>

      <div className={styles.item}>
        <AiOutlineHeart />
        <span>Made with Love</span>
      </div>
    </Marquee>
  );
};

export default Banner;
