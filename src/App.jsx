import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header.jsx';
import Home from './Home/Home.jsx';
import Marquee from './Components/Marquee/Marquee.jsx';
import ArtPriceCollection  from './Shop/Shop.jsx';
import Footer from './Components/Footer/Fotter.jsx';
import ArtistAdvert from './Adverts/Adverts.jsx';

import  CategorySection from './Category/Category.jsx';
import Banner from './Banner/Banner.jsx';



import ArtGallerySection  from './Gallary/Gallary.jsx';
import Contact from './Contact/Contact.jsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Home />
          <CategorySection/>
          <Banner/>
          <ArtistAdvert/>
          <ArtGallerySection/>
          <Footer/>
        </>
      } />
      <Route path="/contact" element={
        <>
          <Header />
          <Contact />
          <Footer />
        </>
      } />
      <Route path="/originals" element={
        <>
          <Header />
          <Home />
          <CategorySection/>
          <Banner/>
          <ArtistAdvert/>
          <ArtGallerySection/>
          <Footer />
        </>
      } />
      <Route path="/shop" element={
        <>
          <Header />
          <ArtPriceCollection />
          <Footer />
        </>
      } />
    </Routes>
  )
}

export default App
