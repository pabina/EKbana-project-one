
import React from 'react';
import Navigation from './Navigation';
import Slider from './Slider';
import Brands from './Brands';
import Carasole from './Carasole';
import BannerButtom from './BannerButtom';
import BrandStore from './BrandStore';
import NewOffer from './NewOffer';


const Home = () => {
  return (
    <>
      <Navigation/>
      <Slider/>
     <Brands/>
     <Carasole/>
    <BannerButtom/>
    <BrandStore/>
    <NewOffer/>
    </>
  )
}

export default Home;
