import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-50"> 
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-black shadow-lg">
              <Rocket className="h-4 w-4" />
            </div>
            <span className="font-semibold text-white">Mochamad Wildan Adib</span>
          </div>
          <nav className="hidden gap-2 md:flex">
            {links.map((l) => (
              <motion.a
                key={l.href}
                whileHover={{ y: -2 }}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:text-white"
              >
                {l.label}
              </motion.a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-violet-500 px-4 py-2 text-sm font-medium text-black md:inline-block">
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
}
