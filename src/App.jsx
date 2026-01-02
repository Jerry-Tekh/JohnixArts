import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx';
import Shop from './Shop/Shop.jsx';
import Marquee from './Components/Marquee/Marquee.jsx';
import OriginalArtWorks from './Originals/Originals.jsx';
import Footer from './Components/Footer/Fotter.jsx';
import ArtistAdvert from './Adverts/Adverts.jsx';

import  CategorySection from './Category/Category.jsx';
import Banner from './Banner/Banner.jsx';



import ArtGallerySection  from './Gallary/Gallary.jsx';

function App() {

  return (
    <>
      <div>
        <Header />
        <Shop />
        <CategorySection/>
        <Banner/>
        <ArtistAdvert/>
        <ArtGallerySection/>
    <Footer/>
      </div>
    </>
  )
}

export default App
