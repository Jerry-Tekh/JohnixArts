// shopDetails.jsx
import paint9 from './../assets/ShopImages/PAINT9.jpg';


export const categories = [
  "All",
  "Abstract",
  "Portrait",
  "Nature",
  "Modern",
];

export const artworks = [
  {
    id: 1,
    name: "Golden Flow",
    category: "Abstract",
    image: paint9,
    sizes: [
      { label: "Small", value: "S", price: 10000 },
      { label: "Medium", value: "M", price: 12000 },
      { label: "Large", value: "L", price: 15000 },
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Silent Face",
    category: "Portrait",
    image: paint9,
    sizes: [
      { label: "Medium", value: "M", price: 17000 },
      { label: "Large", value: "L", price: 20000 },
    ],
  },
  {
    id: 3,
    name: "Green Escape",
    category: "Nature",
    image: paint9,
    sizes: [
      { label: "Small", value: "S", price: 40000 },
      { label: "Medium", value: "M", price: 50000 },
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Green Escape",
    category: "Nature",
    image: paint9,
    sizes: [
      { label: "Small", value: "S", price: 40000 },
      { label: "Medium", value: "M", price: 50000 },
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Green Escape",
    category: "Nature",
    image: paint9,
    sizes: [
      { label: "Small", value: "S", price: 40000 },
      { label: "Medium", value: "M", price: 50000 },
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Green Escape",
    category: "Nature",
    image: paint9,
    sizes: [
      { label: "Small", value: "S", price: 40000 },
      { label: "Medium", value: "M", price: 50000 },
    ],
    featured: true,
  },
];





<section className={styles.stickySection}>
          <div className={styles.bgImage} />
        <div className={styles.content}>

          {/* CATEGORY FILTER */}
          <aside className={styles.categories}>
            <p>Category</p>
            
            {categories.map((cat) => (
              <button
                key={cat}
                className={
                  activeCategory === cat
                    ? styles.active
                    : ""
                }
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
            
          </aside>

          {/* ART GRID */}
          <div className={styles.grid}>
            {filteredArtworks.map((art, index) => (
              <motion.div
                key={art.id}
                className={`${styles.card} ${art.featured ? styles.featured : ""
                  }`}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img src={art.image} alt={art.name} />

                <h4>{art.name}</h4>

                <PriceSelector sizes={art.sizes} />
              </motion.div>
            ))}
          </div>
        </div>
      </section> 