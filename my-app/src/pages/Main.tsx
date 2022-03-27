
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Navigation from '../components/Navigation';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';



const Main = () => {
  return (
    <>
 <Header/>
 <Home/>

 <Footer/>
    </>
  )
}

export default Main
