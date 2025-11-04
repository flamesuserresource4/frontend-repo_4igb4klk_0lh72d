import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0a0b10] font-['Inter',_ui-sans-serif] text-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <footer className="border-t border-white/10 bg-[#07080d] py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Mochamad Wildan Adib • Prompt Engineering • All rights reserved.
      </footer>
    </div>
  );
}
