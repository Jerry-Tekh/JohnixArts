import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx';
import Shop from './Shop/Shop.jsx';
import Marquee from './Components/Marquee/Marquee.jsx';
import OriginalArtWorks from './Originals/Originals.jsx';
import Footer from './Components/Footer/Fotter.jsx';
import ArtistAdvert from './Adverts/Adverts.jsx';


import ArtGallery from './Gallary/Gallary.jsx';

function App() {

  return (
    <>
      <div>
        <Header />
        <Shop />
        <Marquee speed={60}>
          <span>🎨 Handmade Art Prints</span>
          <span>📦 Worldwide Shipping</span>
          <span>🖼 Limited Editions</span>
          <span>💝 Made with Love</span>
        </Marquee>
        <ArtistAdvert/>
        <ArtGallery/>
    <Footer/>
      </div>
    </>
  )
}

export default App
