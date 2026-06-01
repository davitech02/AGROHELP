import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';

export default function Hero() {
  const { language } = useLanguage();
  const tx = t[language].hero;

  return (
    <section className="relative min-h-[600px] bg-deep-green overflow-hidden">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-forest-green/25 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-forest-green/15 blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative container-custom min-h-[600px] flex items-center pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center w-full">

          {/* ── Left Content ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20"
            >
              <span className="w-2 h-2 bg-orange-accent rounded-full mr-2.5 animate-pulse" />
              <span className="text-sm font-medium text-white/90 tracking-wide">{tx.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-5xl xl:text-7xl font-black leading-[1.08] mb-6 tracking-tight"
            >
              {tx.h1a}<br />
              <span className="text-orange-accent">{tx.h1b}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg xl:text-xl text-white/75 leading-relaxed mb-10 max-w-lg"
            >
              {tx.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.65 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-orange group inline-flex items-center gap-2"
              >
                {tx.cta1}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="btn-outline inline-flex items-center gap-2">
                <Play size={16} className="fill-current" />
                {tx.cta2}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.65 }}
              className="flex gap-8 mt-12 pt-8 border-t border-white/15"
            >
              {tx.stats.map((s) => (
                <div key={s.lbl}>
                  <div className="text-3xl font-extrabold text-white">{s.num}</div>
                  <div className="text-white/50 text-sm mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Image ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-5xl overflow-hidden shadow-2xl h-[600px] xl:h-[650px]">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=720&h=900&fit=crop&q=80"
                alt="Agricultural Excellence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/35 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.05, duration: 0.65 }}
              className="absolute -left-10 top-14 bg-white rounded-3xl px-5 py-4 shadow-card-hover"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-orange-accent/15 rounded-2xl flex items-center justify-center text-xl">🌱</div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Active Projects</p>
                  <p className="font-extrabold text-deep-green text-xl leading-tight">100+</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.65 }}
              className="absolute -right-8 bottom-20 bg-white rounded-3xl px-5 py-4 shadow-card-hover"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="flex -space-x-1.5">
                  <div className="w-7 h-7 rounded-full bg-green-400 border-2 border-white" />
                  <div className="w-7 h-7 rounded-full bg-orange-400 border-2 border-white" />
                  <div className="w-7 h-7 rounded-full bg-blue-400 border-2 border-white" />
                </div>
                <span className="text-xs text-gray-400">+50 {tx.stats[1].lbl}</span>
              </div>
              <p className="text-sm font-bold text-deep-green">Across Africa</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 72L1440 72L1440 36C1200 72 960 4 720 36C480 68 240 2 0 36L0 72Z" fill="#F7F3ED" />
        </svg>
      </div>
    </section>
  );
}
