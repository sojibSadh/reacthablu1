import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Accordion, AccordionItem } from "@heroui/react";
import Header from './componets/Header';
import Hero from './componets/Hero';
import Brand from './componets/Brand';
import Offer from './componets/Offer';
import Train from './componets/Train';
import Allocate from './componets/Allocate';
import Start from './componets/Start';
import Footer from './componets/Footer';
import Testimonial from './componets/Testimonial';


function App() {
  return (
    <>
    <Header />
    <Hero />
    <Brand/>
    <Offer/>
    <Train/>
    <Testimonial/>
    <Allocate/>
    <Start/>
    <Footer/>
  </>
  );
}

export default App
