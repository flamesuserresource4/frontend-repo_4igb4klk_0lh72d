import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const neonGradient = 'from-fuchsia-500 via-cyan-400 to-violet-500';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0b10] text-white">\n      {/* 3D Spline Scene */}\n      <div className="absolute inset-0">\n        <Spline\n          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"\n          style={{ width: '100%', height: '100%' }}\n        />\n      </div>\n\n      {/* Soft gradient overlays for mood (don't block interactions) */}\n      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />\n      <div className="pointer-events-none absolute -inset-x-20 -top-40 h-80 blur-3xl opacity-50 bg-[radial-gradient(closest-side,rgba(168,85,247,0.6),transparent)]" />\n      <div className="pointer-events-none absolute -inset-x-20 -bottom-40 h-80 blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(34,211,238,0.5),transparent)]" />\n\n      {/* Content */}\n      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-20 text-center md:pt-36">\n        <motion.span\n          initial={{ opacity: 0, y: 10 }}\n          animate={{ opacity: 1, y: 0 }}\n          transition={{ duration: 0.6, delay: 0.1 }}\n          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm"\n        >\n          Futuristic • 3D • Prompt Engineering
        </motion.span>\n\n        <motion.h1\n          initial={{ opacity: 0, y: 12 }}\n          animate={{ opacity: 1, y: 0 }}\n          transition={{ duration: 0.7, delay: 0.2 }}\n          className="text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl"
        >\n          <span className={`bg-gradient-to-r ${neonGradient} bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]`}>
            Mochamad Wildan Adib
          </span>\n        </motion.h1>\n\n        <motion.p\n          initial={{ opacity: 0, y: 12 }}\n          animate={{ opacity: 1, y: 0 }}\n          transition={{ duration: 0.7, delay: 0.35 }}\n          className="mt-4 text-lg text-white/80 sm:text-xl"
        >\n          Creative Professional • Prompt Engineer • AI-driven Storyteller
        </motion.p>\n\n        {/* 3D-ish animated text tag line */}\n        <motion.div\n          initial={{ opacity: 0 }}\n          animate={{ opacity: 1 }}\n          transition={{ delay: 0.5 }}\n          className="mt-8 perspective-1000"
        >\n          <motion.div
            whileHover={{ rotateX: 10, rotateY: -10, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            className="inline-block rounded-2xl border border-white/10 bg-white/5 px-6 py-3 shadow-[0_0_30px_rgba(99,102,241,0.25)] backdrop-blur"
          >
            <span className={`bg-gradient-to-r ${neonGradient} bg-clip-text text-2xl font-semibold text-transparent`}>Designing prompts that unlock imagination</span>
          </motion.div>
        </motion.div>\n      </div>\n    </section>
  );
}
