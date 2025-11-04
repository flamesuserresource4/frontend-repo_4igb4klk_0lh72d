import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Workflow, PenTool } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Product Describer',
    icon: <Wand2 className="h-5 w-5 text-cyan-300" />,
    tags: ['Zero-shot', 'Style control', 'SEO'],
    desc:
      'Prompt sistem untuk menghasilkan deskripsi produk yang konsisten dengan tone brand, dilengkapi guardrail kata kunci SEO.',
  },
  {
    title: 'Customer Support Agent',
    icon: <Workflow className="h-5 w-5 text-fuchsia-300" />,
    tags: ['Few-shot', 'Tool use', 'Routing'],
    desc:
      'Rangka prompt multi-langkah dengan pola percakapan, deteksi niat, dan rujukan ke basis pengetahuan.',
  },
  {
    title: 'Creative Story Prompt Pack',
    icon: <PenTool className="h-5 w-5 text-violet-300" />,
    tags: ['Creative', 'Constraints', 'Narrative'],
    desc:
      'Paket prompt untuk ide cerita, world-building, dan outline bab dengan kontrol gaya dan sudut pandang.',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full bg-[#090a0f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Portfolio
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(34,211,238,0.1)] backdrop-blur"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-fuchsia-500/10 via-cyan-400/10 to-violet-500/10" />
              <div className="relative">
                <div className="mb-3 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-1">
                  {p.icon}
                  <span className="text-sm text-white/80">Prompt Project</span>
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/80">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/75">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
