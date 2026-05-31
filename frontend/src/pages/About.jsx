import { motion } from 'framer-motion';
import { CheckCircle2, Leaf, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import t from '../translations';
import missionImg from '../assets/mission.png';

const vp = { once: true, amount: 0.15 };
const valueIcons = [CheckCircle2, Target, Heart, Leaf];

export default function AboutPage() {
  const { language } = useLanguage();
  const tx = t[language].aboutPage;

  return (
    <>
      <PageBanner
        label={tx.bannerLabel}
        title={<>{tx.bannerTitle} <span style={{ color: '#E07B39' }}>{tx.bannerHighlight}</span></>}
        subtitle={tx.bannerSubtitle}
      />

      {/* ── Mission & Vision ─────────────────────── */}
      <section className="py-48 bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.8 }} className="relative">
              <div className="overflow-hidden w-full h-[480px]" style={{ borderRadius: '2.5rem', boxShadow: '0 25px 60px rgba(0,0,0,0.16)' }}>
                <img src={missionImg} alt="AgroHelp mission" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,67,50,.50) 0%, transparent 55%)' }} />
              </div>
              <div className="absolute -right-4 top-10 bg-white text-center px-6 py-5" style={{ borderRadius: '1.5rem', boxShadow: '0 12px 40px rgba(0,0,0,0.13)' }}>
                <span className="text-4xl font-black block" style={{ color: '#1B4332' }}>2009</span>
                <span className="text-xs text-gray-500 font-medium">{tx.founded}</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.8, delay: 0.15 }}>
              <span className="section-label">{tx.purposeLabel}</span>
              <h2 className="section-title">{tx.mvTitle}</h2>

              <div className="space-y-5 mb-8">
                <div className="p-6 bg-white rounded-3xl" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
                  <h3 className="font-bold mb-2.5" style={{ color: '#1B4332' }}>{tx.missionLabel}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{tx.missionText}</p>
                </div>
                <div className="p-6 bg-white rounded-3xl" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}>
                  <h3 className="font-bold mb-2.5" style={{ color: '#1B4332' }}>{tx.visionLabel}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{tx.visionText}</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {tx.stats.map((s, i) => (
                  <div key={i} className="text-center p-3 bg-deep-green/5 rounded-2xl">
                    <div className="text-xl font-extrabold" style={{ color: '#1B4332' }}>{s.number}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="section-label">{tx.valuesLabel}</span>
            <h2 className="section-title">{tx.valuesTitle}</h2>
            <p className="section-subtitle max-w-2xl mx-auto">{tx.valuesSubtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tx.values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className="group p-6 bg-cream rounded-3xl hover:bg-white transition-all duration-300 text-center"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl mb-4 mx-auto" style={{ background: 'rgba(224,123,57,0.12)' }}>
                    <Icon size={22} style={{ color: '#E07B39' }} />
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: '#1B4332' }}>{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Team />

      {/* ── CTA ─────────────────────────────────── */}
      <section className="py-28 bg-cream">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto">
            <span className="section-label">{tx.ctaLabel}</span>
            <h2 className="section-title">
              {tx.ctaTitle.split('\n').map((line, i) => (
                <span key={i}>{line}{i < tx.ctaTitle.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="section-subtitle">{tx.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-orange">{tx.ctaBtn1}</Link>
              <Link to="/services" className="btn-primary">{tx.ctaBtn2}</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
