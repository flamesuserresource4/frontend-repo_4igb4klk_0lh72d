import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a0b10] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          About
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-6 shadow-[0_0_40px_rgba(139,92,246,0.15)] backdrop-blur"
        >
          <p className="text-white/90">
            Lulusan SMK, jurusan PPLG. Saya fokus pada seni merancang prompt yang
            presisi untuk berbagai model AI sehingga menghasilkan output yang konsisten,
            kreatif, dan berdampak. Dengan pendekatan yang sistematis, saya menggabungkan
            riset, eksperimen, dan pemahaman konteks untuk membangun pengalaman AI yang
            relevan dan bermakna.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { title: 'Prompt Systems', desc: 'Rangka templat dan kerangka berpikir untuk task AI.' },
              { title: 'Persona Design', desc: 'Mendesain kepribadian AI untuk use-case tertentu.' },
              { title: 'Evaluation', desc: 'Metrik serta proses penilaian kualitas respons.' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * idx }}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-white/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
