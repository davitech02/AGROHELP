import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';
import { useCountUp, parseCountValue } from '../utils/animations';

const heroSlides = [
  { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=720&h=900&fit=crop&q=80', alt: 'Agriculteurs africains au travail' },
  { src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=720&h=900&fit=crop&q=80', alt: 'Élevage bovin en Afrique' },
  { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=720&h=900&fit=crop&q=80', alt: 'Culture maraîchère africaine' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=720&h=900&fit=crop&q=80', alt: 'Irrigation et production végétale' },
  { src: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=720&h=900&fit=crop&q=80', alt: 'Agriculture moderne et récolte' },
];

function StatCounter({ value }) {
  const { target, suffix } = parseCountValue(value);
  const [count, ref] = useCountUp(target, 2000);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const { language } = useLanguage();
  const tx = t[language].hero;

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[600px] bg-deep-green overflow-hidden">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-forest-green/25 blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-forest-green/15 blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative container-custom min-h-[600px] flex items-center pt-28 pb-20">
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
              className="text-6xl xl:text-8xl font-black leading-[1.05] mb-6 tracking-tight"
            >
              {tx.h1a}<br />
              <span className="text-orange-accent">{tx.h1b}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-xl xl:text-2xl text-white/80 leading-relaxed mb-10 max-w-lg"
            >
              {tx.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.65 }}
            >
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-orange group inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                {tx.cta1}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.65 }}
              className="flex gap-10 mt-12 pt-8 border-t border-white/15"
            >
              {tx.stats.map((s) => (
                <div key={s.lbl}>
                  <div className="text-4xl font-extrabold text-white">
                    <StatCounter value={s.num} />
                  </div>
                  <div className="text-white/55 text-sm mt-0.5">{s.lbl}</div>
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
              {heroSlides.map((slide, i) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: i === slideIndex ? 1 : 0 }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/35 to-transparent" />

              {/* dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === slideIndex ? 'bg-white w-5' : 'bg-white/50'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

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
