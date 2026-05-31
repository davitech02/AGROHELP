import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';
import homeImg from '../assets/home.png';

const serviceImages = [
  'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=320&h=220&fit=crop&q=80',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=320&h=220&fit=crop&q=80',
  'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=320&h=220&fit=crop&q=80',
];

const vp = { once: true, amount: 0.15 };

export default function About() {
  const { language } = useLanguage();
  const tx = t[language].about;

  return (
    <section id="about" className="py-28 px-48 bg-cream">
      <div className="relative h-[950px] flex items-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">{tx.label}</span>
          <h2 className="section-title">
            {tx.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i < tx.title.split('\n').length - 1 && <br />}</span>
            ))}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">{tx.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── Left: image ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="relative overflow-hidden h-[500px] w-full"
              style={{ borderRadius: '2.5rem', boxShadow: '0 25px 60px rgba(0,0,0,0.18)' }}
            >
              <img
                src={homeImg}
                alt="Agricultural Expertise"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,67,50,.55) 0%, transparent 55%)' }} />

              <div className="absolute bottom-8 left-6 right-6">
                <div
                  className="flex items-center gap-4 p-5"
                  style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
                >
                  <div className="w-12 h-12 flex items-center justify-center shrink-0" style={{ background: '#1B4332', borderRadius: '0.75rem' }}>
                    <CheckCircle2 size={24} color="white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: '#1B4332' }}>{tx.badgeTitle}</p>
                    <p className="text-xs text-gray-500">{tx.badgeText}</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.4, duration: 0.55 }}
              className="absolute -right-4 top-10 bg-white text-center px-6 py-5"
              style={{ borderRadius: '1.5rem', boxShadow: '0 12px 40px rgba(0,0,0,0.14)' }}
            >
              <span className="text-4xl font-black block" style={{ color: '#1B4332' }}>15+</span>
              <span className="text-xs text-gray-500 font-medium leading-snug">
                {tx.statFloat.split('\n').map((line, i) => (
                  <span key={i}>{line}{i < tx.statFloat.split('\n').length - 1 && <br />}</span>
                ))}
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: content ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1B4332' }}>{tx.heading}</h3>
            <p className="text-gray-500 mb-4 leading-relaxed">{tx.p1}</p>
            <p className="text-gray-500 mb-8 leading-relaxed">{tx.p2}</p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {serviceImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="group relative overflow-hidden h-32 cursor-pointer"
                  style={{ borderRadius: '1.25rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
                >
                  <img src={src} alt={tx.images[i].label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 flex items-end p-2.5" style={{ background: 'linear-gradient(to top, rgba(27,67,50,.82) 0%, transparent 60%)' }}>
                    <span className="text-white text-xs font-semibold leading-tight">{tx.images[i].label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 p-5 mb-8" style={{ background: 'rgba(27,67,50,0.05)', borderRadius: '1.5rem' }}>
              {tx.stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-extrabold" style={{ color: '#1B4332' }}>{s.number}</div>
                  <div className="text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            <a href="#services" className="inline-flex items-center font-bold gap-2 group transition-all duration-200" style={{ color: '#E07B39' }}>
              {tx.cta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
