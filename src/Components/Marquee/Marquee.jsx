import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./Marquee.module.css";

const Marquee = ({
  children,
  speed = 50, // px per second
  pauseOnHover = true,
}) => {
  const baseX = useRef(0);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useAnimationFrame((t, delta) => {
    if (isPaused) return;

    const moveBy = (speed * delta) / 1000;
    baseX.current -= moveBy;

    if (containerRef.current) {
      const width = containerRef.current.scrollWidth / 2;
      if (-baseX.current >= width) {
        baseX.current = 0;
      }

      containerRef.current.style.transform = `translateX(${baseX.current}px)`;
    }
  });

  return (
    <div
      className={styles.marquee}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div ref={containerRef} className={styles.track}>
        <span>{children}</span>
        <span>{children}</span>
        
      </div>
    </div>
  );
};

export default Marquee;
