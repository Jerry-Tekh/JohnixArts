import React from "react";
import styles from "./Shop.module.css";

// Background image (applied via JSX)


import bgImage from './../assets/ShopImages/NAT3.jpg';

// Art images

import art1 from './../assets/ShopImages/POR5.jpg';
import art2 from './../assets/ShopImages/PEN3.jpg';
import art3 from './../assets/ShopImages/POR4.jpg';
import art4 from './../assets/ShopImages/POR2.jpg';

const artCollection = [
  {
    id: 1,
    title: "Color Portrait",
    image: art1,
    prices: [
      { size: "A4", amount: "₦12,000" },
      { size: "A3", amount: "₦18,000" },
      { size: "A2", amount: "₦25,000" },
    ],
  },
  {
    id: 2,
    title: "Charcoal Portrait",
    image: art2,
    prices: [
      { size: "A4", amount: "₦15,000" },
      { size: "A3", amount: "₦22,000" },
      { size: "A2", amount: "₦35,000" },
    ],
  },
  {
    id: 3,
    title: "Paint Portrait",
    image: art3,
    prices: [
      { size: "A3", amount: "₦20,000" },
      { size: "A2", amount: "₦30,000" },
      { size: "A2", amount: "₦55,000" },
    ],
  },
  {
    id: 4,
    title: "Pen Portrait",
    image: art4,
    prices: [
      { size: "A3", amount: "₦20,000" },
      { size: "A2", amount: "₦30,000" },
      { size: "A2", amount: "₦55,000" },
    ],
  },
];

const ArtPriceCollection = () => {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.tag}>Art Collection</span>
          <h2>Artwork Pricing</h2>
          <p>
            A curated selection of original artworks, with pricing based on
            size and presentation.
          </p>

          <span>Swap to view art pricing</span>
        </header>
        {/* Gallery */}
        <div className={styles.gallery}>
          {artCollection.map((art) => (
            <div key={art.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={art.image} alt={art.title} />
              </div>

              <div className={styles.info}>
                <h3>{art.title}</h3>

                <div className={styles.priceList}>
                  {art.prices.map((price, index) => (
                    <div key={index} className={styles.priceRow}>
                      <span className={styles.size}>{price.size}</span>
                      <span className={styles.amount}>{price.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtPriceCollection;
