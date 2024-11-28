// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Importa otras secciones según sea necesario

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      {/* Añade aquí otras secciones como Servicios, Portafolio, Testimonios, Contacto, etc. */}
    </div>
  );
};

export default App;
