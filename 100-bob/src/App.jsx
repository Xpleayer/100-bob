import React from 'react';
import './scss/main.scss';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import Packages from './sections/Packages';
import CallToAction from './sections/CallToAction';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main" id={'site-content'}>
        <Hero />
        <About />
        <Features />
        <Packages />
        <CallToAction />
        <Contact />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
