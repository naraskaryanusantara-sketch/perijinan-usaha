
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <Packages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
