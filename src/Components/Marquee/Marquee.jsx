

import { useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "./Marquee.module.css";

const Marquee = ({
  children,
  speed = 50, // pixels per second
  pauseOnHover = true,
  reverseOnHover = true, // NEW: enable reverse on hover
  className = "",
}) => {
  const baseX = useRef(0);
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [mouseX, setMouseX] = useState(0.5); // 0 to 1

  // Track mouse position to control direction or speed
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width;
      setMouseX(Math.max(0, Math.min(1, x)));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    if (isPaused) return;

    let direction = -1; // default scroll left
    let currentSpeed = speed;

    // Adjust speed/direction based on mouse position
    if (reverseOnHover) {
      if (mouseX < 0.4) {
        currentSpeed = speed * 1.5; // faster left
      } else if (mouseX > 0.6) {
        currentSpeed = speed * 0.5; // slower left
        if (mouseX > 0.8) direction = 1; // reverse to right
      }
    }

    const moveBy = (currentSpeed * delta) / 1000 * direction;
    baseX.current += moveBy;

    if (containerRef.current) {
      const width = containerRef.current.scrollWidth / 2;
      if (Math.abs(baseX.current) >= width) baseX.current = 0;
      containerRef.current.style.transform = `translateX(${baseX.current}px)`;
    }
  });

  return (
    <div
      className={`${styles.marquee} ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      style={{ overflow: "hidden", width: "100%" }}
    >
      <div
        ref={containerRef}
        className={styles.track}
        style={{ display: "flex", gap: "1rem" }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>{children}</div>
        <div style={{ display: "flex", gap: "1rem" }}>{children}</div>
      </div>
    </div>
  );
};

export default Marquee;

