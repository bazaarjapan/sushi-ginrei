import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Reservation } from './components/Reservation';
import { Access } from './components/Access';
import { Footer } from './components/Footer';
import { Concierge } from './components/Concierge';

function App() {
  return (
    <div className="min-h-screen bg-ginrei-black text-gray-200 font-sans selection:bg-ginrei-gold selection:text-black">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Menu />
        <Reservation />
        <Access />
      </main>

      <Footer />
      <Concierge />
    </div>
  );
}

export default App;