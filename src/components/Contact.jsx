import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const ContactButton = ({ icon: Icon, label, href, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ rotateX: 8, rotateY: -8, scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 160, damping: 12 }}
    className="group relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white shadow-[0_10px_40px_rgba(99,102,241,0.15)] backdrop-blur"
  >
    <div className={`grid h-10 w-10 place-items-center rounded-xl ${color} text-black shadow-lg`}> 
      <Icon className="h-5 w-5" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm text-white/70">Connect</span>
      <span className="text-base font-semibold">{label}</span>
    </div>
    <Send className="ml-auto h-4 w-4 text-white/60 transition-transform group-hover:translate-x-1" />
    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-fuchsia-500/15 via-cyan-400/15 to-violet-500/15" />
  </motion.a>
);

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#07080d] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-2xl text-white/80"
        >
          Tertarik berkolaborasi atau butuh sistem prompt yang solid untuk produk Anda? Mari terhubung.
        </motion.p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ContactButton icon={Mail} label="Email" href="mailto:wildan@example.com" color="bg-cyan-300" />
          <ContactButton icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/" color="bg-fuchsia-300" />
          <ContactButton icon={Github} label="GitHub" href="https://github.com/" color="bg-violet-300" />
        </div>
      </div>
    </section>
  );
}
