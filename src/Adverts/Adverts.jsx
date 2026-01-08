import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft, FiPhoneCall , } from "react-icons/fi";
import { FaWhatsapp } from 'react-icons/fa';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import video from "../assets/Video/Advert.mp4";
import artistImg from "../assets/ShopImages/ARTISTPIC.png";

import styles from "./Adverts.module.css";

const slideVariants = {
  hiddenLeft: { x: "-100%", opacity: 0 },
  hiddenRight: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};


const swipeConfidenceThreshold = 120;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ArtistAdvert = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <section className={styles.wrapper}>
      <AnimatePresence mode="wait">
        {!showAbout ? (
          /* ================= ADVERT SLIDE ================= */
          <motion.div
            key="advert"
            className={styles.advert}
            variants={slideVariants}
            initial="hiddenRight"
            animate="visible"
            exit="hiddenLeft"
            transition={{ duration: 0.9, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.9}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                setShowAbout(true);
              }
            }}
          >
            {/* LEFT — VIDEO */}
            <div className={styles.videoWrap}>
              <video src={video} autoPlay muted loop playsInline />
              <div className={styles.videoOverlay} />
            </div>

            {/* RIGHT — CONTENT */}
            <motion.div
              className={styles.content}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <span className={styles.tag}>
                Original • Handmade • Timeless
              </span>

              <h2>
                Art That Speaks <br /> Beyond Paper And Canvas
              </h2>

              <p className={styles.description}> Each piece is thoughtfully created to evoke emotion, tell a story, and elevate the space it lives in. From original artworks to fine art prints, every detail is crafted with intention and passion. 
                </p> 
                <ul className={styles.features}>
                   <li>• 100% original & limited editions</li>
                    <li>• Premium materials & archival quality</li>
                     <li>• Worldwide shipping available</li> 
                  </ul>

              <div className={styles.actions}>
                <button className={styles.primaryBtn} onClick={() => {
                  const element = document.getElementById('category');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Explore Collection
                </button>

                <button
                  className={styles.secondaryBtn}
                  onClick={() => setShowAbout(true)}
                >
                  About the Artist <FiArrowRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* ================= ABOUT SLIDE ================= */
          <motion.div
            key="about"
            className={styles.about}
            variants={slideVariants}
            initial="hiddenLeft"
            animate="visible"
            exit="hiddenRight"
            transition={{ duration: 0.9, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.9}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe > swipeConfidenceThreshold) {
                setShowAbout(false);
              }
            }}
          >

            {/* BACK ARROW */}


            <div className={styles.aboutInner}>
              {/* LEFT — TEXT */}
              <motion.div
                className={styles.aboutText}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <span className={styles.aboutLabel}>So who am I?</span>

                <h2>The Artist Behind the Work</h2>

                <p>
                  Born in 1999 , Onyegesi ikechukwu John is a passionate Nigerian artist who specializes in creating both hyper-realistic and abstract drawing and paintings using different mediums. He obtained his BA degree from the department of fine and applied art, University of Nigeria, Nsukka in 2024 .


                </p>

                <p>
                  His journey in art has been one of discovery and learning and he have found solace in the strokes of a pencil, brushes and shades of charcoal and paint.
                  His approach involves traditional techniques with personal innovations, each piece being a labor of love and patience.                </p>

                <button className={styles.primaryBtn}>
                  Work With Me
                </button>




                <motion.div
                  className={styles.socials}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.12 },
                    },
                  }}
                >
                  {[
                    {
                      icon: <FiFacebook />,
                      link: "https://web.facebook.com/john.ikechukwu.761402?rdid=s9Q3FW50Kz4siWg6&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1ANAzcWR48%2F%3F_rdc%3D1%26_rdr#",
                      label: "Facebook",
                    },
                    {
                      icon: <FiInstagram />,
                      link: "https://www.instagram.com/johnix_art/?igshid=YmMyMTA2M2Y%3D",
                      label: "Instagram",
                    },
                    {
                      icon: <FiTwitter />,
                      link: "https://x.com/Johnix_art?s=20",
                      label: "Twitter",
                    },
                    {
                      icon: <FiLinkedin />,
                      link: "https://linktr.ee/johnike",
                      label: "LinkedIn",
                    },
                    {
                      icon: <FaWhatsapp />,
                      link: "https://wa.me/qr/WHODGSKQHM6VK1",
                      label: "Whatsapp",
                    },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      aria-label={item.label}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {item.icon}
                    </motion.a>
                  ))}

                </motion.div>


                <div className={styles.backBtnWrapper}>
                  <button
                    className={styles.backBtn}
                    onClick={() => setShowAbout(false)}
                  >
                    <FiArrowLeft />
                  </button>
                </div>

              </motion.div>

              {/* RIGHT — IMAGE */}
              <motion.div
                className={styles.aboutImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <img src={artistImg} alt="Artist portrait" />
              </motion.div>
            </div>



          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ArtistAdvert;
